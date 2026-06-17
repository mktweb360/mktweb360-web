import { NextRequest, NextResponse } from "next/server";
import { randomUUID } from "crypto";

const rateLimitMap = new Map<string, { count: number; resetAt: number }>();
const RATE_LIMIT = 3;
const RATE_WINDOW = 60 * 60 * 1000;

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimitMap.get(ip);
  if (!entry || now > entry.resetAt) {
    rateLimitMap.set(ip, { count: 1, resetAt: now + RATE_WINDOW });
    return true;
  }
  if (entry.count >= RATE_LIMIT) return false;
  entry.count++;
  return true;
}

function buildMktOSPayload(body: Record<string, unknown>) {
  return {
    nombre:       body.nombre     || "",
    email:        body.email      || "",
    telefono:     body.telefono   || "",
    empresa:      body.dominio    || "",
    sector:       body.sector     || "",
    canal:        "web-formulario",
    oferta:       "seo-6x3",
    opcionPago:   body.opcionPago || "",
    mensaje:      [
      body.historialSeo   ? `SEO previo: ${body.historialSeo}`    : "",
      body.buscadorActual ? `Visibilidad: ${body.buscadorActual}` : "",
      body.tiempoWeb      ? `Web activa: ${body.tiempoWeb}`       : "",
      body.notas          ? `Notas: ${body.notas}`                : "",
    ].filter(Boolean).join(" | "),
    leadSource:   "mktweb360.com/oferta-seo/",
    utm_source:   (body.utm_source   as string) || "",
    utm_medium:   (body.utm_medium   as string) || "",
    utm_campaign: (body.utm_campaign as string) || "",
  };
}

const MKTOS_URL    = "https://mktos360.app/api/webhooks/web-lead";
const MKTOS_SECRET = process.env.MKTOS_WEBHOOK_SECRET!;

export async function POST(req: NextRequest) {
  const ip =
    req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    req.headers.get("x-real-ip") || "unknown";

  if (!checkRateLimit(ip))
    return NextResponse.json({ ok: false, error: "Demasiadas solicitudes." }, { status: 429 });

  let body: Record<string, unknown>;
  try { body = await req.json(); }
  catch { return NextResponse.json({ ok: false, error: "Payload inv\u00e1lido." }, { status: 400 }); }

  const { nombre, email, gdpr } = body as { nombre?: string; email?: string; gdpr?: boolean };
  if (!nombre?.trim() || !email?.trim() || !gdpr)
    return NextResponse.json({ ok: false, error: "Faltan campos obligatorios." }, { status: 400 });
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
    return NextResponse.json({ ok: false, error: "Email no v\u00e1lido." }, { status: 400 });

  const id = randomUUID();
  const lead = { id, fuente: "formulario-publico", oferta: "seo-6x3", ...body, ip, savedAt: new Date().toISOString() };

  const apiKey = process.env.RESEND_API_KEY;
  if (apiKey) {
    const { Resend } = await import("resend");
    const dominioLabel = body.dominio ? String(body.dominio) : "\u2014";
    await new Resend(apiKey).emails.send({
      from: "web@mktweb360.com", to: "info@mktweb360.com", replyTo: email,
      subject: `\ud83c\udfaf Nuevo lead SEO 6x3 \u2014 ${nombre} \u00b7 ${dominioLabel}`,
      html: `<p><strong>${nombre}</strong> | ${email} | ${body.telefono || "\u2014"}</p>
             <p>Dominio: ${dominioLabel} | Sector: ${body.sector || "\u2014"}</p>
             <p>Historial: ${body.historialSeo || "\u2014"} | Pago: ${body.opcionPago || "\u2014"}</p>
             ${body.notas ? `<p>Notas: ${body.notas}</p>` : ""}
             <p style="color:#999;font-size:11px">ID: ${id}</p>`,
    }).catch((e: unknown) => console.error("[leads/seo-6x3] Resend:", e));
  }

  let opportunityId: string | null = null;
  try {
    const r = await fetch(MKTOS_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json", "x-webhook-secret": MKTOS_SECRET },
      body: JSON.stringify(buildMktOSPayload(body)),
      signal: AbortSignal.timeout(8000),
    });
    if (r.ok) {
      const d = await r.json() as { ok: boolean; opportunity_id?: string };
      if (d.ok && d.opportunity_id) opportunityId = d.opportunity_id;
    } else console.error("[leads/seo-6x3] MktOS:", r.status, await r.text());
  } catch (e) { console.warn("[leads/seo-6x3] MktOS timeout:", e); }

  return NextResponse.json({ ok: true, id, ...(opportunityId ? { opportunity_id: opportunityId } : {}) });
}
