// Asistente de mktweb360.com · POST /api/chat
// Entrada: { message, token?, page: { path, lang, title }, history?: [{ role, content }] }
// Salida: { reply, token }. El estado (cupo, intentos, sesión) viaja firmado en `token`.
// No se guardan conversaciones en el servidor: solo se envían a MktOS si el visitante deja sus datos.
import { NextRequest, NextResponse } from "next/server";

import { reply, readState, signState } from "@/lib/chatbot/engine";
import { LIMITS, type Lang } from "@/lib/chatbot/core";

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
  hits.set(ip, e);
  if (hits.size > 5000) hits.clear();
  return true;
}

const ORIGINS = /^https:\/\/(www\.)?mktweb360\.com$|^https:\/\/mktweb360-web[a-z0-9-]*\.vercel\.app$|^http:\/\/localhost(:\d+)?$/;

export async function POST(req: NextRequest) {
  const origin = req.headers.get("origin");
  if (origin && !ORIGINS.test(origin)) return NextResponse.json({ error: "origen no permitido" }, { status: 403 });

  const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || req.headers.get("x-real-ip") || "unknown";
  if (!allow(ip)) return NextResponse.json({ error: "Has enviado muchos mensajes seguidos. Espera unos minutos, por favor." }, { status: 429 });

  let body: Record<string, unknown>;
  try { body = await req.json(); } catch { return NextResponse.json({ error: "Petición no válida" }, { status: 400 }); }

  const message = typeof body.message === "string" ? body.message.slice(0, LIMITS.maxChars + 200) : "";
  if (!message.trim()) return NextResponse.json({ error: "Mensaje vacío" }, { status: 400 });

  const p = (body.page ?? {}) as Record<string, unknown>;
  const lang: Lang = p.lang === "en" || p.lang === "fr" ? p.lang : "es";
  const path = typeof p.path === "string" && p.path.startsWith("/") ? p.path.slice(0, 300) : "/";
  const title = typeof p.title === "string" ? p.title.slice(0, 200) : undefined;

  const history = (Array.isArray(body.history) ? body.history : [])
    .filter((m): m is { role: "user" | "assistant"; content: string } =>
      !!m && typeof m === "object" && (m.role === "user" || m.role === "assistant") && typeof m.content === "string")
    .slice(-10)
    .map((m) => ({ role: m.role, content: m.content.slice(0, 1500) }));
  // La API exige que la conversación empiece por el visitante.
  while (history.length && history[0].role !== "user") history.shift();

  const st = await readState(body.token);
  const { reply: r, state, costUsd } = await reply(message, st, { path, lang, title }, history);
  if (r.modo === "ia") console.info(`[chatbot] ia sid=${state.sid.slice(0, 8)} n=${state.n} coste=$${costUsd.toFixed(5)}`);
  return NextResponse.json({ reply: r, token: await signState(state) }, { headers: { "Cache-Control": "no-store" } });
}
