// Asistente de mktweb360.com · POST /api/chat
// Entrada: { message, token?, page: { path, lang, title }, history?: [{ role, content }] }
// Salida: { reply, token }. El estado (cupo, intentos, sesión) viaja firmado en `token`.
// No se guardan conversaciones en el servidor: solo se envían a MktOS si el visitante deja sus datos.
import { after, NextRequest, NextResponse } from "next/server";

import { reply, readState, signReply, signState } from "@/lib/chatbot/engine";
import { LIMITS, type Lang } from "@/lib/chatbot/core";
import { scrub, sendEvent, sidHash } from "@/lib/chatbot/telemetry";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

// Límite por IP (capa 1): 30 mensajes cada 10 minutos y 120 al día, por instancia.
const hits = new Map<string, { t: number[]; day: string; dayN: number }>();
function allow(ip: string): boolean {
  const now = Date.now();
  const day = new Date().toISOString().slice(0, 10);
  const e = hits.get(ip) ?? { t: [], day, dayN: 0 };
  if (e.day !== day) { e.day = day; e.dayN = 0; }
  e.t = e.t.filter((x) => now - x < 10 * 60 * 1000);
  if (e.t.length >= 30 || e.dayN >= 120) { hits.set(ip, e); return false; }
  e.t.push(now);
  e.dayN++;
  hits.delete(ip);
  hits.set(ip, e); // el Map conserva el orden de inserción: las IP menos recientes quedan al principio
  if (hits.size > 5000) for (const k of [...hits.keys()].slice(0, 1000)) hits.delete(k);
  return true;
}

const ORIGINS = /^https:\/\/(www\.)?mktweb360\.com$|^https:\/\/mktweb360-[a-z0-9-]+-mktweb360-9918s-projects\.vercel\.app$|^http:\/\/localhost(:\d+)?$/;

export async function POST(req: NextRequest) {
  const origin = req.headers.get("origin");
  if (origin && !ORIGINS.test(origin)) return NextResponse.json({ error: "origen no permitido" }, { status: 403 });

  const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || req.headers.get("x-real-ip") || "unknown";
  if (!allow(ip)) return NextResponse.json({ error: "Has enviado muchos mensajes seguidos. Espera unos minutos, por favor." }, { status: 429 });

  let body: Record<string, unknown>;
  try { body = await req.json(); } catch { return NextResponse.json({ error: "Petición no válida" }, { status: 400 }); }
  if (!body || typeof body !== "object" || Array.isArray(body)) return NextResponse.json({ error: "Petición no válida" }, { status: 400 });

  const message = typeof body.message === "string" ? body.message.slice(0, LIMITS.maxChars + 200) : "";
  if (!message.trim()) return NextResponse.json({ error: "Mensaje vacío" }, { status: 400 });

  const p = (body.page ?? {}) as Record<string, unknown>;
  const lang: Lang = p.lang === "en" || p.lang === "fr" ? p.lang : "es";
  const path = typeof p.path === "string" && p.path.startsWith("/") ? p.path.slice(0, 300) : "/";
  const title = typeof p.title === "string" ? p.title.slice(0, 200) : undefined;
  const utm = (p.utm ?? {}) as Record<string, unknown>;
  const t0 = Date.now();

  try {
    const st = await readState(body.token);
    // Historial: los mensajes del asistente solo se aceptan si llevan la firma que emitió este servidor
    // (así no se pueden inyectar respuestas falsas); los del visitante se recortan. Máximo ~3.000 caracteres.
    const raw = (Array.isArray(body.history) ? body.history : []).slice(-10) as { role?: unknown; content?: unknown; sig?: unknown }[];
    const history: { role: "user" | "assistant"; content: string }[] = [];
    let total = 0;
    for (const m of raw.reverse()) {
      if (!m || typeof m !== "object" || typeof m.content !== "string") continue;
      const content = m.content.slice(0, m.role === "user" ? LIMITS.maxChars : 1200);
      if (m.role === "assistant") {
        if (typeof m.sig !== "string" || m.sig !== (await signReply(st.sid, m.content))) continue;
      } else if (m.role !== "user") continue;
      if (total + content.length > 3000) break;
      total += content.length;
      history.unshift({ role: m.role as "user" | "assistant", content });
    }
    // La API exige alternar turnos y empezar por el visitante.
    const clean: typeof history = [];
    for (const m of history) if (!clean.length ? m.role === "user" : clean[clean.length - 1].role !== m.role) clean.push(m);
    if (clean.length && clean[clean.length - 1].role === "user") clean.pop();

    const CHIP_IDS = ["incluye", "precio", "negocio", "auditoria", "presupuesto", "llamada", "persona", "servicios"] as const;
    const chip = CHIP_IDS.find((c) => c === body.chip) ?? null;
    const { reply: r, state, costUsd, meta } = await reply(message, st, { path, lang, title }, clean, chip);
    if (r.modo === "ia") console.info(`[chatbot] ia sid=${state.sid.slice(0, 8)} n=${state.n} coste=$${costUsd.toFixed(5)}`);
    // Registro para el informe de MktOS, después de responder.
    after(() => sendEvent({
      type: "turn", sid: sidHash(state.sid), n: state.n, path, lang, chip: meta.chip ?? "", intent: meta.intent, modo: r.modo,
      faq_id: meta.faqId ?? "", user_text: scrub(message, 1000), reply_text: scrub(r.text, 2000), actions: r.actions,
      link: r.link?.href ?? "", usage: meta.usage ?? {}, cost_usd: costUsd, latency_ms: Date.now() - t0,
      business: state.biz, closed: state.closed,
      utm_source: typeof utm.source === "string" ? utm.source.slice(0, 80) : "", utm_medium: typeof utm.medium === "string" ? utm.medium.slice(0, 80) : "",
      utm_campaign: typeof utm.campaign === "string" ? utm.campaign.slice(0, 120) : "",
    }));
    return NextResponse.json(
      { reply: r, sig: await signReply(state.sid, r.text), token: await signState(state) },
      { headers: { "Cache-Control": "no-store" } },
    );
  } catch (e) {
    console.error("[chatbot] error:", e instanceof Error ? e.message : e);
    return NextResponse.json({ error: "El asistente no está disponible ahora mismo. Llámanos al 622 74 89 87 o escríbenos desde el formulario de contacto." }, { status: 503 });
  }
}
