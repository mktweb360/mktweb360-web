import { NextRequest, NextResponse } from "next/server";
import { randomUUID } from "crypto";

const FORM_MAP: Record<string, { oferta: string; canal: string }> = {
  "seo":                   { oferta: "seo-mensual",       canal: "web-servicio-seo" },
  "sem":                   { oferta: "google-ads",        canal: "web-servicio-sem" },
  "tienda-online-landing": { oferta: "tienda-online-490", canal: "web-landing-tienda" },
  "social-media":          { oferta: "social-media",      canal: "web-servicio-smm" },
  "email-marketing":       { oferta: "email-marketing",   canal: "web-servicio-email" },
  "diseno-web":            { oferta: "diseno-web",        canal: "web-servicio-web" },
  "auditoria":             { oferta: "auditoria-digital", canal: "web-servicio-auditoria" },
  "google-business":       { oferta: "gbp",               canal: "web-servicio-gbp" },
  "contacto":              { oferta: "general",           canal: "web-contacto" },
};
function getMktOSMeta(formType: string) {
  return FORM_MAP[formType] ?? { oferta: formType || "general", canal: "web-contacto" };
}

const MKTOS_URL    = "https://mktos360.app/api/webhooks/web-lead";
const MKTOS_SECRET = process.env.MKTOS_WEBHOOK_SECRET ||
                     "wl_d3e90c800dc05f24f9e17f437aa345657b2a03dd343aab501d950b84730f5a75";

const rateLimitMap = new Map<string, { count: number; resetAt: number }>();
function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimitMap.get(ip);
  if (!entry || now > entry.resetAt) {
    rateLimitMap.set(ip, { count: 1, resetAt: now + 60 * 60 * 1000 });
    return true;
  }
  if (entry.count >= 5) return false;
  entry.count++;
  return true;
}

export async function POST(req: NextRequest) {
  const ip =
    req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    req.headers.get("x-real-ip") || "unknown";

  if (!checkRateLimit(ip))
    return NextResponse.json({ error: "Demasiadas solicitudes." }, { status: 429 });

  const body = await req.json();
  const { name, email, phone, website, message, gdpr,
          form_type, page_origin,
          utm_source, utm_medium, utm_campaign, utm_content, utm_term } = body;

  if (!name || !email || !message || !gdpr)
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });

  const id = randomUUID();
  const { oferta, canal } = getMktOSMeta(form_type);

  const apiKey = process.env.RESEND_API_KEY;
  if (apiKey) {
    const hasTracking = utm_source || utm_medium || utm_campaign || page_origin;
    const trackingHtml = hasTracking ? `
      <hr style="margin:24px 0;border:none;border-top:1px solid #e5e7eb"/>
      <table style="font-size:13px;border-collapse:collapse">
        <tr><td style="padding:3px 12px 3px 0;color:#6b7280">Formulario</td><td>${form_type || "\u2014"}</td></tr>
        <tr><td style="padding:3px 12px 3px 0;color:#6b7280">P\u00e1gina</td><td>${page_origin || "\u2014"}</td></tr>
        <tr><td style="padding:3px 12px 3px 0;color:#6b7280">Fuente</td><td>${utm_source || "org\u00e1nico"}</td></tr>
        <tr><td style="padding:3px 12px 3px 0;color:#6b7280">Medio</td><td>${utm_medium || "\u2014"}</td></tr>
        <tr><td style="padding:3px 12px 3px 0;color:#6b7280">Campa\u00f1a</td><td>${utm_campaign || "\u2014"}</td></tr>
        ${utm_content ? `<tr><td style="padding:3px 12px 3px 0;color:#6b7280">Contenido</td><td>${utm_content}</td></tr>` : ""}
        ${utm_term ? `<tr><td style="padding:3px 12px 3px 0;color:#6b7280">T\u00e9rmino</td><td>${utm_term}</td></tr>` : ""}
      </table>` : "";

    const { Resend } = await import("resend");
    await new Resend(apiKey).emails.send({
      from: "web@mktweb360.com", to: "info@mktweb360.com", replyTo: email,
      subject: `Nuevo lead [${oferta}]${utm_source ? ` \u00b7 ${utm_source}` : ""}: ${name}`,
      html: `<div style="font-family:-apple-system,sans-serif;max-width:600px;margin:0 auto;padding:32px 24px">
        <div style="background:#1e3a5f;padding:20px 24px;border-radius:12px 12px 0 0">
          <h2 style="color:white;margin:0">Nuevo contacto \u2014 ${oferta}</h2>
          <p style="color:#7ca3c9;margin:4px 0 0;font-size:13px">${new Date().toLocaleString("es-ES",{timeZone:"Europe/Madrid"})}</p>
        </div>
        <div style="background:#f9fafb;padding:24px;border-radius:0 0 12px 12px;border:1px solid #e5e7eb;border-top:none">
          <table style="font-size:15px;border-collapse:collapse;width:100%;margin-bottom:16px">
            <tr><td style="padding:6px 16px 6px 0;color:#6b7280">Nombre</td><td><strong>${name}</strong></td></tr>
            <tr><td style="padding:6px 16px 6px 0;color:#6b7280">Email</td><td><a href="mailto:${email}" style="color:#f97316">${email}</a></td></tr>
            <tr><td style="padding:6px 16px 6px 0;color:#6b7280">Tel\u00e9fono</td><td>${phone || "\u2014"}</td></tr>
            <tr><td style="padding:6px 16px 6px 0;color:#6b7280">Web</td><td>${website || "\u2014"}</td></tr>
          </table>
          <div style="padding:16px;background:white;border-radius:8px;border:1px solid #e5e7eb">
            <p style="color:#6b7280;font-size:12px;text-transform:uppercase;margin:0 0 8px">Mensaje</p>
            <p style="margin:0;font-size:15px;line-height:1.6">${message.replace(/\n/g,"<br>")}</p>
          </div>
          ${trackingHtml}
          <p style="color:#9ca3af;font-size:11px;text-align:center;margin-top:20px">ID: ${id}</p>
        </div>
      </div>`,
    }).catch((e: unknown) => console.error("[contact] Resend:", e));
  }

  let opportunityId: string | null = null;
  try {
    const r = await fetch(MKTOS_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json", "x-webhook-secret": MKTOS_SECRET },
      body: JSON.stringify({
        nombre: name, email, telefono: phone || "", empresa: website || "",
        sector: "", canal, oferta, opcionPago: "", mensaje: message,
        leadSource: page_origin || "mktweb360.com",
        utm_source: utm_source || "", utm_medium: utm_medium || "", utm_campaign: utm_campaign || "",
      }),
      signal: AbortSignal.timeout(8000),
    });
    if (r.ok) {
      const d = await r.json() as { ok: boolean; opportunity_id?: string };
      if (d.ok && d.opportunity_id) opportunityId = d.opportunity_id;
    } else console.error("[contact] MktOS:", r.status, await r.text());
  } catch (e) { console.warn("[contact] MktOS timeout:", e); }

  return NextResponse.json({ ok: true, id, ...(opportunityId ? { opportunity_id: opportunityId } : {}) });
}
