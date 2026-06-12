import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const body = await req.json();
  const {
    name, email, phone, website, message, gdpr,
    form_type, page_origin,
    utm_source, utm_medium, utm_campaign, utm_content, utm_term,
  } = body;

  if (!name || !email || !message || !gdpr) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return NextResponse.json({ error: "No API key" }, { status: 500 });
  }

  const hasTracking = utm_source || utm_medium || utm_campaign || page_origin;
  const trackingSection = hasTracking ? `
    <hr style="margin: 24px 0; border: none; border-top: 1px solid #e5e7eb;" />
    <h3 style="color: #6b7280; font-size: 13px; text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 12px;">Origen del lead</h3>
    <table style="font-size: 14px; border-collapse: collapse; width: 100%;">
      <tr><td style="padding: 4px 12px 4px 0; color: #6b7280; white-space: nowrap;">Formulario</td><td style="padding: 4px 0;"><strong>${form_type || "—"}</strong></td></tr>
      <tr><td style="padding: 4px 12px 4px 0; color: #6b7280; white-space: nowrap;">Página</td><td style="padding: 4px 0;"><strong>${page_origin || "—"}</strong></td></tr>
      <tr><td style="padding: 4px 12px 4px 0; color: #6b7280; white-space: nowrap;">Fuente</td><td style="padding: 4px 0;"><strong>${utm_source || "orgánico/directo"}</strong></td></tr>
      <tr><td style="padding: 4px 12px 4px 0; color: #6b7280; white-space: nowrap;">Medio</td><td style="padding: 4px 0;"><strong>${utm_medium || "—"}</strong></td></tr>
      <tr><td style="padding: 4px 12px 4px 0; color: #6b7280; white-space: nowrap;">Campaña</td><td style="padding: 4px 0;"><strong>${utm_campaign || "—"}</strong></td></tr>
      ${utm_content ? `<tr><td style="padding: 4px 12px 4px 0; color: #6b7280;">Contenido</td><td style="padding: 4px 0;"><strong>${utm_content}</strong></td></tr>` : ""}
      ${utm_term ? `<tr><td style="padding: 4px 12px 4px 0; color: #6b7280;">Término</td><td style="padding: 4px 0;"><strong>${utm_term}</strong></td></tr>` : ""}
    </table>
  ` : "";

  const campaignLabel = utm_campaign ? ` [${utm_campaign}]` : "";
  const sourceLabel = utm_source ? ` · ${utm_source}` : "";

  const { Resend } = await import("resend");
  const resend = new Resend(apiKey);

  const { error } = await resend.emails.send({
    from: "web@mktweb360.com",
    to: "info@mktweb360.com",
    subject: `Nuevo lead${campaignLabel}${sourceLabel}: ${name}`,
    html: `
      <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; max-width: 600px; margin: 0 auto; padding: 32px 24px;">
        <div style="background: #2d1e78; padding: 20px 24px; border-radius: 12px 12px 0 0; margin-bottom: 0;">
          <h2 style="color: white; margin: 0; font-size: 18px;">Nuevo mensaje desde mktweb360.com</h2>
        </div>
        <div style="background: #f9fafb; padding: 24px; border-radius: 0 0 12px 12px; border: 1px solid #e5e7eb; border-top: none;">
          <table style="font-size: 15px; border-collapse: collapse; width: 100%;">
            <tr><td style="padding: 6px 16px 6px 0; color: #6b7280; white-space: nowrap;">Nombre</td><td style="padding: 6px 0;"><strong>${name}</strong></td></tr>
            <tr><td style="padding: 6px 16px 6px 0; color: #6b7280; white-space: nowrap;">Email</td><td style="padding: 6px 0;"><a href="mailto:${email}" style="color: #f09614;">${email}</a></td></tr>
            <tr><td style="padding: 6px 16px 6px 0; color: #6b7280; white-space: nowrap;">Teléfono</td><td style="padding: 6px 0;"><strong>${phone || "—"}</strong></td></tr>
            <tr><td style="padding: 6px 16px 6px 0; color: #6b7280; white-space: nowrap;">Web</td><td style="padding: 6px 0;">${website ? `<a href="${website}" style="color: #f09614;">${website}</a>` : "—"}</td></tr>
          </table>
          <div style="margin-top: 20px; padding: 16px; background: white; border-radius: 8px; border: 1px solid #e5e7eb;">
            <p style="color: #6b7280; font-size: 13px; margin: 0 0 8px 0; text-transform: uppercase; letter-spacing: 0.05em;">Mensaje</p>
            <p style="margin: 0; font-size: 15px; line-height: 1.6; color: #111827;">${message.replace(/\n/g, "<br>")}</p>
          </div>
          ${trackingSection}
        </div>
      </div>
    `,
    replyTo: email,
  });

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}
