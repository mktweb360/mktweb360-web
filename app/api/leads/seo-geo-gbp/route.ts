import { NextRequest, NextResponse } from "next/server";
import { randomUUID } from "crypto";
import { promises as fs } from "fs";
import path from "path";

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
    nombre:       body.nombre   || "",
    email:        body.email    || "",
    telefono:     body.telefono || "",
    empresa:      body.empresa  || "",
    sector:       "",
    canal:        "web-formulario",
    oferta:       "seo-geo-gbp",
    opcionPago:   "",
    mensaje:      [
      body.web ? `Web: ${body.web}` : "",
    ].filter(Boolean).join(" | "),
    leadSource:   "mktweb360.com/oferta-seo-geo-gbp/",
    utm_source:   (body.utm_source   as string) || "",
    utm_medium:   (body.utm_medium   as string) || "",
    utm_campaign: (body.utm_campaign as string) || "",
  };
}

const MKTOS_URL    = "https://mktos360.app/api/webhooks/web-lead";
const MKTOS_SECRET = process.env.MKTOS_WEBHOOK_SECRET!;
const LEADS_FILE   = path.join(process.cwd(), "data", "leads-seo-geo-gbp.jsonl");

export async function POST(req: NextRequest) {
  const ip =
    req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    req.headers.get("x-real-ip") || "unknown";

  if (!checkRateLimit(ip))
    return NextResponse.json({ ok: false, error: "Demasiadas solicitudes." }, { status: 429 });

  let body: Record<string, unknown>;
  try { body = await req.json(); }
  catch { return NextResponse.json({ ok: false, error: "Payload inválido." }, { status: 400 }); }

  const { nombre, email } = body as { nombre?: string; email?: string };
  if (!nombre?.trim() || !email?.trim())
    return NextResponse.json({ ok: false, error: "Faltan campos obligatorios." }, { status: 400 });
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
    return NextResponse.json({ ok: false, error: "Email no válido." }, { status: 400 });

  const id = randomUUID();
  const lead = { id, oferta: "seo-geo-gbp", ...body, ip, savedAt: new Date().toISOString() };

  // Persistir el lead en un archivo JSONL (best-effort: en entornos serverless
  // el sistema de archivos puede ser de solo lectura, no bloqueamos la respuesta).
  try {
    await fs.mkdir(path.dirname(LEADS_FILE), { recursive: true });
    await fs.appendFile(LEADS_FILE, JSON.stringify(lead) + "\n", "utf8");
  } catch (e) {
    console.error("[leads/seo-geo-gbp] No se pudo escribir el JSONL:", e);
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (apiKey) {
    const { Resend } = await import("resend");
    const empresaLabel = body.empresa ? String(body.empresa) : "—";
    await new Resend(apiKey).emails.send({
      from: "web@mktweb360.com", to: "info@mktweb360.com", replyTo: email,
      subject: `🌞 Nuevo lead Paquete SEO+GEO+GBP — ${nombre} · ${empresaLabel}`,
      html: `<p><strong>${nombre}</strong> | ${email} | ${body.telefono || "—"}</p>
             <p>Empresa: ${empresaLabel} | Web: ${body.web || "—"}</p>
             ${body.utm_source ? `<p>Fuente: ${body.utm_source} / ${body.utm_campaign || "—"}</p>` : ""}
             <p style="color:#999;font-size:11px">ID: ${id}</p>`,
    }).catch((e: unknown) => console.error("[leads/seo-geo-gbp] Resend:", e));
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
    } else console.error("[leads/seo-geo-gbp] MktOS:", r.status, await r.text());
  } catch (e) { console.warn("[leads/seo-geo-gbp] MktOS timeout:", e); }

  return NextResponse.json({ ok: true, id, ...(opportunityId ? { opportunity_id: opportunityId } : {}) });
}
