// Asistente · POST /api/chat/lead — el visitante deja sus datos desde el chat.
// Crea el lead en MktOS por el mismo webhook que el formulario de contacto (CRM, oportunidad, aviso push y email a José)
// con canal «web-chatbot», y avisa por email a info@. La conversación solo viaja aquí, con el consentimiento del visitante.
import { NextRequest, NextResponse } from "next/server";
import { randomUUID } from "crypto";

import { readState } from "@/lib/chatbot/engine";
import { CONSENT_COMERCIAL, consentLang } from "@/lib/consent-texts";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const MKTOS_URL = "https://mktos360.app/api/webhooks/web-lead";
const ORIGINS = /^https:\/\/(www\.)?mktweb360\.com$|^https:\/\/mktweb360-[a-z0-9-]+-mktweb360-9918s-projects\.vercel\.app$|^http:\/\/localhost(:\d+)?$/;

const rate = new Map<string, { n: number; reset: number }>();
function allow(ip: string) {
  const now = Date.now();
  const e = rate.get(ip);
  if (!e || now > e.reset) { rate.set(ip, { n: 1, reset: now + 3600_000 }); return true; }
  if (e.n >= 4) return false;
  e.n++;
  return true;
}

const str = (v: unknown, max: number) => (typeof v === "string" ? v.trim().slice(0, max) : "");
const esc = (v: string) => v.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

export async function POST(req: NextRequest) {
  const origin = req.headers.get("origin");
  if (origin && !ORIGINS.test(origin)) return NextResponse.json({ error: "origen no permitido" }, { status: 403 });
  const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || req.headers.get("x-real-ip") || "unknown";
  if (!allow(ip)) return NextResponse.json({ error: "Demasiadas solicitudes. Inténtalo más tarde o escríbenos por WhatsApp." }, { status: 429 });

  let b: Record<string, unknown>;
  try { b = await req.json(); } catch { return NextResponse.json({ error: "Petición no válida" }, { status: 400 }); }
  if (!b || typeof b !== "object" || Array.isArray(b)) return NextResponse.json({ error: "Petición no válida" }, { status: 400 });

  const nombre = str(b.name, 120);
  const email = str(b.email, 160);
  const telefono = str(b.phone, 40);
  const negocio = str(b.business, 200);
  const necesidad = str(b.need, 800);
  const preferencia = ["llamada", "email", "whatsapp"].includes(String(b.preference)) ? String(b.preference) : "email";
  const franja = str(b.slot, 120);
  const tipo = b.kind === "contacto" ? "contacto" : "presupuesto";
  const pagina = str(b.page, 300);
  const lang = consentLang(b.lang);
  const marketing = b.marketing === true;

  if (!nombre || !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email) || b.gdpr !== true)
    return NextResponse.json({ error: "Faltan el nombre, un email válido o la aceptación de la privacidad." }, { status: 400 });
  if ((preferencia === "llamada" || preferencia === "whatsapp") && !telefono)
    return NextResponse.json({ error: "Para llamarte o escribirte por WhatsApp necesito tu teléfono." }, { status: 400 });

  const id = randomUUID();
  if (b._hp) return NextResponse.json({ ok: true, id }); // honeypot: bots

  const st = await readState(b.token);
  const resumen = (Array.isArray(b.transcript) ? b.transcript : [])
    .filter((m): m is { role: string; content: string } => !!m && typeof m === "object" && typeof (m as { content?: unknown }).content === "string")
    .slice(-16)
    .map((m) => `${m.role === "user" ? "Visitante" : "Asistente"}: ${m.content.slice(0, 400)}`)
    .join("\n")
    .slice(0, 4000);

  const mensaje = [
    `Solicitud desde el asistente de la web (${tipo === "presupuesto" ? "pide presupuesto" : "quiere hablar con José"}).`,
    negocio && `Negocio: ${negocio}`,
    necesidad && `Necesidad: ${necesidad}`,
    `Prefiere: ${preferencia}${franja ? ` · ${franja}` : ""}`,
    pagina && `Página: ${pagina}`,
    `Mensajes en el chat: ${st.n}`,
    resumen && `\nConversación:\n${resumen}`,
  ].filter(Boolean).join("\n");

  let opportunityId: string | null = null;
  let mktosOk = false;
  let emailOk = false;
  const secret = process.env.MKTOS_WEBHOOK_SECRET;
  if (secret) {
    try {
      const r = await fetch(MKTOS_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json", "x-webhook-secret": secret },
        body: JSON.stringify({
          nombre, email, telefono, empresa: negocio, sector: "",
          canal: "web-chatbot", oferta: tipo === "presupuesto" ? "presupuesto-chatbot" : "general",
          opcionPago: "", mensaje, fichaGoogle: "",
          consentimientoComercial: marketing,
          ...(marketing
            ? { consentimientoComercialTexto: CONSENT_COMERCIAL[lang], idioma: lang, pagina, clientIp: ip, userAgent: req.headers.get("user-agent") ?? "" }
            : {}),
          leadSource: pagina || "mktweb360.com · asistente",
          utm_source: str(b.utm_source, 80), utm_medium: str(b.utm_medium, 80), utm_campaign: str(b.utm_campaign, 120),
        }),
        signal: AbortSignal.timeout(8000),
      });
      if (r.ok) {
        const d = (await r.json()) as { ok?: boolean; opportunity_id?: string };
        mktosOk = !!d.ok;
        if (d.ok && d.opportunity_id) opportunityId = d.opportunity_id;
      } else console.error("[chat/lead] MktOS:", r.status, (await r.text()).slice(0, 300));
    } catch (e) { console.warn("[chat/lead] MktOS timeout:", e); }
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (apiKey) {
    const { Resend } = await import("resend");
    const sent = await new Resend(apiKey).emails.send({
      from: "web@mktweb360.com", to: "info@mktweb360.com", replyTo: email,
      subject: `Lead del asistente [${tipo}] · ${nombre.replace(/[\r\n]+/g, " ")}`,
      html: `<div style="font-family:-apple-system,sans-serif;max-width:640px;margin:0 auto;padding:24px">
        <h2 style="color:#0f1c2e;margin:0 0 12px">Lead del asistente · ${tipo === "presupuesto" ? "pide presupuesto" : "quiere hablar contigo"}</h2>
        <p><strong>${esc(nombre)}</strong> · <a href="mailto:${esc(email)}">${esc(email)}</a>${telefono ? ` · ${esc(telefono)}` : ""}</p>
        <p>Prefiere: <strong>${esc(preferencia)}</strong>${franja ? ` · ${esc(franja)}` : ""} · Comunicaciones comerciales: ${marketing ? "sí" : "no"}</p>
        <pre style="white-space:pre-wrap;background:#f6f7fb;padding:12px;border-radius:8px;font-size:13px">${esc(mensaje)}</pre>
        <p style="color:#888;font-size:11px">ID ${id}${opportunityId ? ` · oportunidad ${opportunityId}` : " · sin respuesta de MktOS"}</p></div>`,
    }).catch((e: unknown) => { console.error("[chat/lead] Resend:", e); return null; });
    emailOk = !!sent && !("error" in sent && sent.error);
  }

  // Si no ha llegado por ningún canal, el visitante debe saberlo (no se le dice «hecho» en falso).
  if (!mktosOk && !emailOk)
    return NextResponse.json({ error: "No hemos podido registrar tu solicitud. Escríbenos por WhatsApp al 622 74 89 87, por favor." }, { status: 502 });
  return NextResponse.json({ ok: true, id, ...(opportunityId ? { opportunity_id: opportunityId } : {}) });
}
