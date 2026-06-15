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

export async function POST(req: NextRequest) {
  const ip =
    req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    req.headers.get("x-real-ip") ||
    "unknown";

  if (!checkRateLimit(ip)) {
    return NextResponse.json(
      { ok: false, error: "Demasiadas solicitudes. Inténtalo más tarde." },
      { status: 429 }
    );
  }

  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Payload inválido." }, { status: 400 });
  }

  const { nombre, email, telefono, gdpr } = body as {
    nombre?: string;
    email?: string;
    telefono?: string;
    gdpr?: boolean;
  };

  if (!nombre?.trim() || !email?.trim() || !gdpr) {
    return NextResponse.json(
      { ok: false, error: "Faltan campos obligatorios." },
      { status: 400 }
    );
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json(
      { ok: false, error: "Email no válido." },
      { status: 400 }
    );
  }

  const id = randomUUID();
  const lead = {
    id,
    fuente: "formulario-publico",
    oferta: "seo-6x3",
    ...body,
    ip,
    savedAt: new Date().toISOString(),
  };

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return NextResponse.json({ ok: false, error: "Config error." }, { status: 500 });
  }

  const { Resend } = await import("resend");
  const resend = new Resend(apiKey);

  const utmInfo = [
    body.utm_source ? `<tr><td style="color:#6b7280;padding:3px 12px 3px 0">Fuente</td><td><strong>${body.utm_source}</strong></td></tr>` : "",
    body.utm_medium ? `<tr><td style="color:#6b7280;padding:3px 12px 3px 0">Medio</td><td><strong>${body.utm_medium}</strong></td></tr>` : "",
    body.utm_campaign ? `<tr><td style="color:#6b7280;padding:3px 12px 3px 0">Campaña</td><td><strong>${body.utm_campaign}</strong></td></tr>` : "",
    body.utm_term ? `<tr><td style="color:#6b7280;padding:3px 12px 3px 0">Término</td><td><strong>${body.utm_term}</strong></td></tr>` : "",
  ].filter(Boolean).join("");

  const dominioLabel = body.dominio ? String(body.dominio) : "—";
  const sectorLabel = body.sector ? String(body.sector) : "—";
  const tiempoWebLabel = body.tiempoWeb ? String(body.tiempoWeb) : "—";
  const historialSeoLabel = body.historialSeo ? String(body.historialSeo) : "—";
  const opcionPagoLabel = body.opcionPago ? String(body.opcionPago) : "—";
  const notasLabel = body.notas ? String(body.notas) : "—";

  const emailHtml = `
    <div style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;max-width:600px;margin:0 auto;padding:32px 24px">
      <div style="background:#1e3a5f;padding:20px 24px;border-radius:12px 12px 0 0">
        <h2 style="color:white;margin:0;font-size:18px">🎯 Nuevo lead — Oferta SEO 6x3</h2>
        <p style="color:#7ca3c9;margin:4px 0 0;font-size:13px">Formulario público · ${new Date().toLocaleString("es-ES", { timeZone: "Europe/Madrid" })}</p>
      </div>
      <div style="background:#f9fafb;padding:24px;border-radius:0 0 12px 12px;border:1px solid #e5e7eb;border-top:none">
        <h3 style="color:#1e3a5f;font-size:13px;text-transform:uppercase;letter-spacing:.05em;margin:0 0 12px">Datos del contacto</h3>
        <table style="font-size:15px;border-collapse:collapse;width:100%;margin-bottom:20px">
          <tr><td style="padding:5px 16px 5px 0;color:#6b7280;white-space:nowrap">Nombre</td><td><strong>${nombre}</strong></td></tr>
          <tr><td style="padding:5px 16px 5px 0;color:#6b7280;white-space:nowrap">Email</td><td><a href="mailto:${email}" style="color:#f97316">${email}</a></td></tr>
          <tr><td style="padding:5px 16px 5px 0;color:#6b7280;white-space:nowrap">Teléfono</td><td><strong>${telefono || "—"}</strong></td></tr>
          <tr><td style="padding:5px 16px 5px 0;color:#6b7280;white-space:nowrap">Dominio</td><td><strong>${dominioLabel}</strong></td></tr>
        </table>
        <h3 style="color:#1e3a5f;font-size:13px;text-transform:uppercase;letter-spacing:.05em;margin:0 0 12px">Cualificación</h3>
        <table style="font-size:14px;border-collapse:collapse;width:100%;margin-bottom:20px">
          <tr><td style="padding:3px 12px 3px 0;color:#6b7280">Sector</td><td>${sectorLabel}</td></tr>
          <tr><td style="padding:3px 12px 3px 0;color:#6b7280">Web activa hace</td><td>${tiempoWebLabel}</td></tr>
          <tr><td style="padding:3px 12px 3px 0;color:#6b7280">Historial SEO</td><td>${historialSeoLabel}</td></tr>
          <tr><td style="padding:3px 12px 3px 0;color:#6b7280">Pago preferido</td><td>${opcionPagoLabel}</td></tr>
        </table>
        ${notasLabel !== "—" ? `<div style="background:white;border:1px solid #e5e7eb;border-radius:8px;padding:14px;margin-bottom:20px"><p style="color:#6b7280;font-size:12px;text-transform:uppercase;letter-spacing:.05em;margin:0 0 6px">Información adicional</p><p style="margin:0;font-size:14px;color:#111827">${notasLabel}</p></div>` : ""}
        ${utmInfo ? `<hr style="margin:20px 0;border:none;border-top:1px solid #e5e7eb"/><h3 style="color:#6b7280;font-size:12px;text-transform:uppercase;letter-spacing:.05em;margin:0 0 10px">Origen del lead</h3><table style="font-size:13px;border-collapse:collapse">${utmInfo}</table>` : ""}
        <div style="margin-top:24px;text-align:center">
          <a href="https://www.mktweb360.com/area-privada/leads/seo-6x3" style="background:#f97316;color:white;padding:12px 28px;border-radius:999px;font-weight:700;font-size:14px;text-decoration:none;display:inline-block">Abrir formulario de llamada →</a>
        </div>
        <p style="color:#9ca3af;font-size:11px;text-align:center;margin-top:20px">ID: ${id}</p>
      </div>
    </div>
  `;

  const { error: emailError } = await resend.emails.send({
    from: "web@mktweb360.com",
    to: "info@mktweb360.com",
    replyTo: email,
    subject: `🎯 Nuevo lead SEO 6x3 — ${nombre} · ${dominioLabel}`,
    html: emailHtml,
  });

  if (emailError) {
    console.error("[leads/seo-6x3] Resend error:", emailError);
  }

  const appWebhookUrl = process.env.APP_WEBHOOK_URL;
  const appWebhookSecret = process.env.APP_WEBHOOK_SECRET;

  if (appWebhookUrl) {
    try {
      await fetch(appWebhookUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          ...(appWebhookSecret ? { "x-webhook-secret": appWebhookSecret } : {}),
        },
        body: JSON.stringify({ evento: "lead.nuevo", oferta: "seo-6x3", id, lead }),
        signal: AbortSignal.timeout(5000),
      });
    } catch (err) {
      console.warn("[leads/seo-6x3] App webhook error:", err);
    }
  }

  return NextResponse.json({ ok: true, id });
}
