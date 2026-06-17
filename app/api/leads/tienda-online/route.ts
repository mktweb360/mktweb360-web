import { NextRequest, NextResponse } from "next/server";
import { randomUUID } from "crypto";

const rateLimitMap = new Map<string, { count: number; resetAt: number }>();
function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimitMap.get(ip);
  if (!entry || now > entry.resetAt) { rateLimitMap.set(ip, { count: 1, resetAt: now + 60 * 60 * 1000 }); return true; }
  if (entry.count >= 3) return false;
  entry.count++;
  return true;
}

const MKTOS_URL    = "https://mktos360.app/api/webhooks/web-lead";
const MKTOS_SECRET = process.env.MKTOS_WEBHOOK_SECRET!;

export async function POST(req: NextRequest) {
  const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || req.headers.get("x-real-ip") || "unknown";
  if (!checkRateLimit(ip)) return NextResponse.json({ ok: false, error: "Demasiadas solicitudes." }, { status: 429 });

  let body: Record<string, unknown>;
  try { body = await req.json(); }
  catch { return NextResponse.json({ ok: false, error: "Payload invalido." }, { status: 400 }); }

  const { nombre, email, gdpr } = body as { nombre?: string; email?: string; gdpr?: boolean };
  if (!nombre?.trim() || !email?.trim() || !gdpr)
    return NextResponse.json({ ok: false, error: "Faltan campos obligatorios." }, { status: 400 });
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
    return NextResponse.json({ ok: false, error: "Email no valido." }, { status: 400 });

  const id = randomUUID();

  const apiKey = process.env.RESEND_API_KEY;
  if (apiKey) {
    const { Resend } = await import("resend");
    await new Resend(apiKey).emails.send({
      from: "web@mktweb360.com", to: "info@mktweb360.com", replyTo: email,
      subject: `Nuevo lead Tienda Online — ${nombre}`,
      html: `<p><strong>${nombre}</strong> | ${email} | ${body.telefono || "—"}</p>
             <p>Sector: ${body.sector || "—"}</p>
             <p>Situacion: ${body.situacionActual || "—"}</p>
             <p>Catalogo: ${body.catalogo || "—"} | Canal: ${body.canalVenta || "—"}</p>
             ${body.notas ? `<p>Notas: ${body.notas}</p>` : ""}
             ${body.utm_source ? `<p>Fuente: ${body.utm_source} / ${body.utm_campaign || "—"}</p>` : ""}
             <p style="color:#999;font-size:11px">ID: ${id}</p>`,
    }).catch((e: unknown) => console.error("[leads/tienda-online] Resend:", e));
  }

  let opportunityId: string | null = null;
  try {
    const r = await fetch(MKTOS_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json", "x-webhook-secret": MKTOS_SECRET },
      body: JSON.stringify({
        nombre, email, telefono: body.telefono || "", empresa: "", sector: body.sector || "",
        canal: "web-formulario", oferta: "tienda-online-490", opcionPago: "",
        mensaje: [
          body.situacionActual ? `Situacion: ${body.situacionActual}` : "",
          body.catalogo        ? `Catalogo: ${body.catalogo}`         : "",
          body.canalVenta      ? `Canal venta: ${body.canalVenta}`    : "",
          body.notas           ? `Notas: ${body.notas}`               : "",
        ].filter(Boolean).join(" | "),
        leadSource: "mktweb360.com/tienda-online/",
        utm_source: (body.utm_source as string) || "", utm_medium: (body.utm_medium as string) || "", utm_campaign: (body.utm_campaign as string) || "",
      }),
      signal: AbortSignal.timeout(8000),
    });
    if (r.ok) {
      const d = await r.json() as { ok: boolean; opportunity_id?: string };
      if (d.ok && d.opportunity_id) opportunityId = d.opportunity_id;
    } else console.error("[leads/tienda-online] MktOS:", r.status, await r.text());
  } catch (e) { console.warn("[leads/tienda-online] MktOS timeout:", e); }

  return NextResponse.json({ ok: true, id, ...(opportunityId ? { opportunity_id: opportunityId } : {}) });
}
