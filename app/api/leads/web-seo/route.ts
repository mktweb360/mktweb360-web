import { NextRequest, NextResponse } from "next/server";
import { randomUUID } from "crypto";

const rateLimitMap = new Map<string, { count: number; resetAt: number }>();
function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimitMap.get(ip);
  if (!entry || now > entry.resetAt) {
    rateLimitMap.set(ip, { count: 1, resetAt: now + 60 * 60 * 1000 });
    return true;
  }
  if (entry.count >= 3) return false;
  entry.count++;
  return true;
}

function buildMktOSPayload(body: Record<string, unknown>) {
  return {
    nombre:       body.nombre             || "",
    email:        body.email              || "",
    telefono:     body.telefono           || "",
    empresa:      body.web                || "",
    sector:       body.sector             || "",
    canal:        "web-formulario",
    oferta:       "web-seo-999",
    opcionPago:   "",
    mensaje:      [
      body.situacionWeb      ? `Situaci\u00f3n: ${body.situacionWeb}`      : "",
      body.objetivoPrincipal ? `Objetivo: ${body.objetivoPrincipal}`       : "",
      body.plazoIdeal        ? `Plazo: ${body.plazoIdeal}`                  : "",
      body.notas             ? `Notas: ${body.notas}`                       : "",
    ].filter(Boolean).join(" | "),
    leadSource:   "mktweb360.com/oferta-web-seo/",
    utm_source:   (body.utm_source   as string) || "",
    utm_medium:   (body.utm_medium   as string) || "",
    utm_campaign: (body.utm_campaign as string) || "",
  };
}

const MKTOS_URL    = "https://mktos360.app/api/webhooks/web-lead";
const MKTOS_SECRET = process.env.MKTOS_WEBHOOK_SECRET ||
                     "wl_d3e90c800dc05f24f9e17f437aa345657b2a03dd343aab501d950b84730f5a75";

export async function POST(req: NextRequest) {
  const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || req.headers.get("x-real-ip") || "unknown";
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

  const apiKey = process.env.RESEND_API_KEY;
  if (apiKey) {
    const { Resend } = await import("resend");
    await new Resend(apiKey).emails.send({
      from: "web@mktweb360.com", to: "info@mktweb360.com", replyTo: email,
      subject: `\ud83c\udf10 Nuevo lead Web+SEO \u2014 ${nombre}`,
      html: `<p><strong>${nombre}</strong> | ${email} | ${body.telefono || "\u2014"}</p>
             <p>Sector: ${body.sector || "\u2014"} | Situaci\u00f3n: ${body.situacionWeb || "\u2014"}</p>
             <p>Objetivo: ${body.objetivoPrincipal || "\u2014"} | Plazo: ${body.plazoIdeal || "\u2014"}</p>
             ${body.notas ? `<p>Notas: ${body.notas}</p>` : ""}
             <p style="color:#999;font-size:11px">ID: ${id}</p>`,
    }).catch((e: unknown) => console.error("[leads/web-seo] Resend:", e));
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
    } else console.error("[leads/web-seo] MktOS:", r.status, await r.text());
  } catch (e) { console.warn("[leads/web-seo] MktOS timeout:", e); }

  return NextResponse.json({ ok: true, id, ...(opportunityId ? { opportunity_id: opportunityId } : {}) });
}
