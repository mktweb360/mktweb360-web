#!/bin/bash
# Script para aplicar los cambios de la sesión de Claude al repo mktweb360-web
# Ejecutar desde: /home/mktadmin/mktweb360-web
# Uso: bash aplicar-cambios-web.sh

set -e

REPO_DIR="$(pwd)"

echo ""
echo "=== Aplicando cambios de la sesión Claude ==="
echo "Directorio: $REPO_DIR"
echo ""

# Verificar que estamos en el repo correcto
if [ ! -f "package.json" ] || ! grep -q "mktweb360" package.json 2>/dev/null; then
  echo "ERROR: No parece que estés en el directorio correcto del repo."
  echo "Ejecuta: cd /home/mktadmin/mktweb360-web"
  exit 1
fi

# Crear directorios necesarios
echo "→ Creando directorios..."
mkdir -p app/api/leads/seo-6x3
mkdir -p "app/(site)/oferta-seo/gracias"
echo "  OK"

# ─────────────────────────────────────────────────────────────
# ARCHIVO 1: API pública de leads
# ─────────────────────────────────────────────────────────────
echo "→ Escribiendo app/api/leads/seo-6x3/route.ts..."
cat > app/api/leads/seo-6x3/route.ts << 'EOF'
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
EOF
echo "  OK"

# ─────────────────────────────────────────────────────────────
# ARCHIVO 2: Página de gracias
# ─────────────────────────────────────────────────────────────
echo "→ Escribiendo app/(site)/oferta-seo/gracias/page.tsx..."
cat > "app/(site)/oferta-seo/gracias/page.tsx" << 'EOF'
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Solicitud recibida — Mkt Web 360",
  robots: { index: false, follow: false },
};

export default function GraciasPage() {
  return (
    <section className="min-h-[80vh] flex items-center justify-center px-4 py-16 bg-gray-50">
      <div className="max-w-lg w-full text-center">
        <div className="w-20 h-20 rounded-full bg-primary-50 border-2 border-primary-100 flex items-center justify-center mx-auto mb-6">
          <span className="text-4xl">📬</span>
        </div>
        <h1 className="text-3xl font-bold text-primary-600 mb-3">Solicitud recibida</h1>
        <p className="text-gray-500 text-lg mb-8 leading-relaxed">
          Hemos recibido tu solicitud para la oferta SEO 6x3.
          Te contactamos en <strong className="text-gray-700">menos de 24 horas</strong> con los resultados del análisis de tu dominio.
        </p>
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 text-left mb-8">
          <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">Qué pasa ahora</p>
          <ol className="space-y-4">
            {[
              { n: "1", titulo: "Analizamos tu dominio", desc: "Revisamos tu web, tu situación SEO actual y si la oferta encaja con tu caso." },
              { n: "2", titulo: "Te llamamos en menos de 24h", desc: "Una llamada de 15-20 minutos para explicarte el plan concreto para tu negocio." },
              { n: "3", titulo: "Propuesta y arranque", desc: "Si encaja, te enviamos el acuerdo y arrancamos la auditoría en 48 horas." },
            ].map((paso) => (
              <li key={paso.n} className="flex gap-4">
                <span className="w-7 h-7 rounded-full bg-accent-500 text-white text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">{paso.n}</span>
                <div>
                  <p className="font-semibold text-gray-800 text-sm">{paso.titulo}</p>
                  <p className="text-gray-400 text-xs mt-0.5 leading-relaxed">{paso.desc}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
        <p className="text-gray-400 text-sm mb-4">¿Prefieres hablar ahora mismo?</p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <a href="tel:+34622748897" className="flex items-center justify-center gap-2 bg-primary-600 hover:bg-primary-700 text-white font-bold px-6 py-3 rounded-full text-sm transition-colors">
            📞 Llamar ahora
          </a>
          <a href="https://wa.me/34622748897?text=Hola%2C%20acabo%20de%20enviar%20mi%20solicitud%20para%20la%20oferta%20SEO%206x3" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white font-bold px-6 py-3 rounded-full text-sm transition-colors">
            💬 WhatsApp
          </a>
        </div>
        <div className="mt-8">
          <Link href="/" className="text-sm text-gray-400 hover:text-primary-600 transition-colors">← Volver a la web</Link>
        </div>
      </div>
    </section>
  );
}
EOF
echo "  OK"

# ─────────────────────────────────────────────────────────────
# ARCHIVO 3: Componente OfertaSeoForm
# ─────────────────────────────────────────────────────────────
echo "→ Escribiendo components/OfertaSeoForm.tsx..."
# Este archivo es largo — lo copiamos desde el repo de Claude si está disponible
# Si no, se puede descargar desde las outputs de Claude
cat > components/OfertaSeoForm.tsx << 'EOF'
"use client";

import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

interface UtmData {
  utm_source?: string; utm_medium?: string; utm_campaign?: string;
  utm_content?: string; utm_term?: string; page_origin?: string;
}
interface Paso1 { nombre: string; email: string; telefono: string; dominio: string; sector: string; tiempoWeb: string; }
interface Paso2 { historialSeo: string; buscadorActual: string; opcionPago: string; notas: string; gdpr: boolean; }
type Status = "idle" | "sending" | "error";

const SECTORES = ["Fontanería / Electricidad / Reformas","Clínica dental / Fisioterapia / Psicología","Abogados / Gestoría / Asesoría","Hostelería / Restauración","Tienda física con presencia online","Ecommerce","Otro"];
const TIEMPO_WEB = ["Menos de 6 meses","Entre 6 meses y 2 años","Más de 2 años"];
const HISTORIAL_SEO = [
  { val: "nunca", label: "🌱 Nunca he trabajado el SEO", sublabel: "Mi web está sin optimizar" },
  { val: "agencia", label: "📉 Contraté una agencia y no vi resultados", sublabel: "Pagué y no funcionó" },
  { val: "interno", label: "🔧 Lo intenté yo mismo", sublabel: "Sin conocimientos técnicos" },
  { val: "competencia", label: "🏆 Mi competencia aparece antes que yo", sublabel: "Quiero superarles" },
];
const BUSCADOR = [
  { val: "no", label: "No aparezco en ninguna búsqueda relevante" },
  { val: "alguna", label: "Aparezco en alguna búsqueda pero en páginas 2-5" },
  { val: "si", label: "Aparezco en primera página para alguna keyword" },
  { val: "no-se", label: "No lo sé" },
];
const OPCIONES_PAGO = [
  { val: "unico", label: "💳 Pago único", precio: "600€", desc: "A la firma. Arrancamos en 48h." },
  { val: "flex", label: "📅 Flex 50/50", precio: "2 × 300€", desc: "300€ firma + 300€ mes siguiente." },
  { val: "cuotas", label: "📆 Cuotas", precio: "6 × 100€", desc: "Domiciliación mensual." },
];

const INPUT = "w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-transparent bg-white text-gray-800 placeholder:text-gray-400";

function Label({ children, required }: { children: React.ReactNode; required?: boolean }) {
  return (
    <label className="block text-sm font-semibold text-gray-700 mb-1.5">
      {children}{required && <span className="text-accent-500 ml-0.5">*</span>}
    </label>
  );
}

export function OfertaSeoForm() {
  const router = useRouter();
  const utmRef = useRef<UtmData>({});
  const [paso, setPaso] = useState<1 | 2>(1);
  const [status, setStatus] = useState<Status>("idle");
  const [p1, setP1] = useState<Paso1>({ nombre: "", email: "", telefono: "", dominio: "", sector: "", tiempoWeb: "" });
  const [p2, setP2] = useState<Paso2>({ historialSeo: "", buscadorActual: "", opcionPago: "", notas: "", gdpr: false });

  useEffect(() => {
    if (typeof window === "undefined") return;
    const params = new URLSearchParams(window.location.search);
    const utm: UtmData = {
      utm_source: params.get("utm_source") || undefined,
      utm_medium: params.get("utm_medium") || undefined,
      utm_campaign: params.get("utm_campaign") || undefined,
      utm_content: params.get("utm_content") || undefined,
      utm_term: params.get("utm_term") || undefined,
      page_origin: window.location.pathname,
    };
    try {
      const stored = sessionStorage.getItem("mktweb360_utm");
      if (stored) {
        const s = JSON.parse(stored) as UtmData;
        (Object.keys(s) as (keyof UtmData)[]).forEach((k) => { if (!utm[k]) utm[k] = s[k]; });
      }
      if (utm.utm_source) sessionStorage.setItem("mktweb360_utm", JSON.stringify(utm));
    } catch {}
    utmRef.current = utm;
  }, []);

  const paso1Valido = p1.nombre.trim() !== "" && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(p1.email) && p1.telefono.trim() !== "" && p1.sector !== "" && p1.tiempoWeb !== "";
  const paso2Valido = p2.historialSeo !== "" && p2.buscadorActual !== "" && p2.opcionPago !== "" && p2.gdpr;

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!paso2Valido) return;
    setStatus("sending");
    try {
      const res = await fetch("/api/leads/seo-6x3", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...p1, ...p2, ...utmRef.current }),
      });
      if (!res.ok) throw new Error("api_error");
      if (typeof window !== "undefined" && (window as Window & { dataLayer?: unknown[] }).dataLayer) {
        (window as Window & { dataLayer: unknown[] }).dataLayer.push({
          event: "form_submit_success", form_type: "oferta-seo-6x3",
          form_location: utmRef.current.page_origin || "/oferta-seo/",
          utm_source: utmRef.current.utm_source || "",
          utm_medium: utmRef.current.utm_medium || "",
          utm_campaign: utmRef.current.utm_campaign || "",
        });
      }
      router.push("/oferta-seo/gracias/");
    } catch {
      setStatus("error");
    }
  }

  const ProgBar = () => (
    <div className="flex items-center gap-3 mb-6">
      <div className="flex items-center gap-2">
        {paso === 1
          ? <span className="w-7 h-7 rounded-full bg-accent-500 text-white text-xs flex items-center justify-center font-bold">1</span>
          : <button type="button" onClick={() => setPaso(1)} className="w-7 h-7 rounded-full bg-primary-100 text-primary-600 text-xs flex items-center justify-center font-bold hover:bg-primary-200 transition-colors">✓</button>
        }
        <span className={`text-sm ${paso === 1 ? "font-semibold text-gray-800" : "text-gray-400"}`}>Tu negocio</span>
      </div>
      <div className={`flex-1 h-0.5 rounded ${paso === 2 ? "bg-accent-500" : "bg-gray-200"}`} />
      <div className="flex items-center gap-2">
        <span className={`w-7 h-7 rounded-full text-xs flex items-center justify-center font-bold ${paso === 2 ? "bg-accent-500 text-white" : "bg-gray-200 text-gray-400"}`}>2</span>
        <span className={`text-sm ${paso === 2 ? "font-semibold text-gray-800" : "text-gray-400"}`}>Tu situación SEO</span>
      </div>
    </div>
  );

  if (paso === 1) {
    return (
      <div>
        <ProgBar />
        <div className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div><Label required>Nombre</Label><input className={INPUT} placeholder="Tu nombre" value={p1.nombre} onChange={(e) => setP1((v) => ({ ...v, nombre: e.target.value }))} /></div>
            <div><Label required>Email</Label><input type="email" className={INPUT} placeholder="tu@empresa.com" value={p1.email} onChange={(e) => setP1((v) => ({ ...v, email: e.target.value }))} /></div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div><Label required>Teléfono</Label><input type="tel" className={INPUT} placeholder="+34 600 000 000" value={p1.telefono} onChange={(e) => setP1((v) => ({ ...v, telefono: e.target.value }))} /></div>
            <div><Label>Web actual</Label><input className={INPUT} placeholder="tuempresa.com" value={p1.dominio} onChange={(e) => setP1((v) => ({ ...v, dominio: e.target.value }))} /></div>
          </div>
          <div>
            <Label required>Sector de tu negocio</Label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {SECTORES.map((s) => (
                <button key={s} type="button" onClick={() => setP1((v) => ({ ...v, sector: s }))}
                  className={`text-left px-4 py-2.5 rounded-xl border-2 text-sm font-medium transition-colors ${p1.sector === s ? "border-primary-600 bg-primary-50 text-primary-700" : "border-gray-200 text-gray-600 hover:border-primary-300"}`}>{s}</button>
              ))}
            </div>
          </div>
          <div>
            <Label required>¿Cuánto tiempo lleva activa tu web?</Label>
            <div className="grid grid-cols-3 gap-2">
              {TIEMPO_WEB.map((t) => (
                <button key={t} type="button" onClick={() => setP1((v) => ({ ...v, tiempoWeb: t }))}
                  className={`text-center px-3 py-3 rounded-xl border-2 text-xs font-semibold transition-colors ${p1.tiempoWeb === t ? "border-primary-600 bg-primary-50 text-primary-700" : "border-gray-200 text-gray-600 hover:border-primary-300"}`}>{t}</button>
              ))}
            </div>
          </div>
          <button type="button" disabled={!paso1Valido} onClick={() => setPaso(2)}
            className="w-full bg-accent-500 hover:bg-accent-600 disabled:opacity-40 disabled:cursor-not-allowed text-white font-bold py-4 rounded-full text-base transition-colors shadow-md">
            Continuar →
          </button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit}>
      <ProgBar />
      <div className="space-y-4">
        <div>
          <Label required>¿Cuál es tu situación actual con el SEO?</Label>
          <div className="space-y-2">
            {HISTORIAL_SEO.map((h) => (
              <button key={h.val} type="button" onClick={() => setP2((v) => ({ ...v, historialSeo: h.label }))}
                className={`w-full text-left px-4 py-3 rounded-xl border-2 transition-colors ${p2.historialSeo === h.label ? "border-primary-600 bg-primary-50" : "border-gray-200 hover:border-primary-300"}`}>
                <p className={`text-sm font-semibold ${p2.historialSeo === h.label ? "text-primary-700" : "text-gray-700"}`}>{h.label}</p>
                <p className="text-xs text-gray-400 mt-0.5">{h.sublabel}</p>
              </button>
            ))}
          </div>
        </div>
        <div>
          <Label required>¿Apareces en Google para búsquedas de tu negocio?</Label>
          <div className="space-y-2">
            {BUSCADOR.map((b) => (
              <button key={b.val} type="button" onClick={() => setP2((v) => ({ ...v, buscadorActual: b.label }))}
                className={`w-full text-left px-4 py-2.5 rounded-xl border-2 text-sm transition-colors ${p2.buscadorActual === b.label ? "border-primary-600 bg-primary-50 text-primary-700 font-semibold" : "border-gray-200 text-gray-600 hover:border-primary-300"}`}>
                {b.label}
              </button>
            ))}
          </div>
        </div>
        <div>
          <Label required>¿Qué opción de pago te encajaría mejor?</Label>
          <div className="space-y-2">
            {OPCIONES_PAGO.map((op) => (
              <button key={op.val} type="button" onClick={() => setP2((v) => ({ ...v, opcionPago: op.label }))}
                className={`w-full text-left px-4 py-3 rounded-xl border-2 transition-colors ${p2.opcionPago === op.label ? "border-primary-600 bg-primary-50" : "border-gray-200 hover:border-primary-300"}`}>
                <div className="flex items-center justify-between">
                  <p className={`text-sm font-semibold ${p2.opcionPago === op.label ? "text-primary-700" : "text-gray-700"}`}>{op.label}</p>
                  <span className="text-accent-500 font-bold text-sm">{op.precio}</span>
                </div>
                <p className="text-xs text-gray-400 mt-0.5">{op.desc}</p>
              </button>
            ))}
          </div>
        </div>
        <div>
          <Label>¿Algo más que quieras contarnos? <span className="text-gray-400 font-normal">(opcional)</span></Label>
          <textarea className={INPUT} rows={3} placeholder="Cuéntanos algo sobre tu negocio, tus objetivos o lo que no ha funcionado antes..."
            value={p2.notas} onChange={(e) => setP2((v) => ({ ...v, notas: e.target.value }))} />
        </div>
        <label className="flex items-start gap-3 cursor-pointer">
          <input type="checkbox" checked={p2.gdpr} onChange={(e) => setP2((v) => ({ ...v, gdpr: e.target.checked }))}
            className="mt-0.5 h-4 w-4 rounded border-gray-300 accent-accent-500 shrink-0" />
          <span className="text-xs text-gray-500 leading-relaxed">
            He leído y acepto la{" "}
            <Link href="/politica-de-privacidad/" target="_blank" className="text-primary-600 hover:underline">política de privacidad</Link>
            . Consiento el tratamiento de mis datos para gestionar mi solicitud sobre la oferta SEO 6x3. *
          </span>
        </label>
        {status === "error" && (
          <div className="bg-red-50 border border-red-200 rounded-xl px-4 py-3 text-sm text-red-700">
            Ha ocurrido un error al enviar. Por favor inténtalo de nuevo o llámanos al{" "}
            <a href="tel:+34622748897" className="font-semibold underline">622 74 88 97</a>.
          </div>
        )}
        <button type="submit" disabled={!paso2Valido || status === "sending"}
          className="w-full bg-accent-500 hover:bg-accent-600 disabled:opacity-40 disabled:cursor-not-allowed text-white font-bold py-4 rounded-full text-base transition-colors shadow-md">
          {status === "sending" ? "Enviando solicitud…" : "Solicitar mi revisión gratuita →"}
        </button>
        <p className="text-xs text-center text-gray-400">No es un formulario de contacto genérico. Analizamos tu dominio antes de llamarte.</p>
      </div>
    </form>
  );
}
EOF
echo "  OK"

# ─────────────────────────────────────────────────────────────
# ARCHIVO 4: Página oferta-seo actualizada
# ─────────────────────────────────────────────────────────────
echo "→ Actualizando app/(site)/oferta-seo/page.tsx..."
# Verificar que ya existe (debería existir del commit anterior)
if [ ! -f "app/(site)/oferta-seo/page.tsx" ]; then
  echo "  ERROR: app/(site)/oferta-seo/page.tsx no existe. Algo va mal."
  exit 1
fi

# Solo actualizar el import y el componente del formulario
# usando sed para no sobreescribir todo el archivo
sed -i 's|import { ContactForm } from "@/components/ContactForm";|import { OfertaSeoForm } from "@/components/OfertaSeoForm";|g' "app/(site)/oferta-seo/page.tsx"
sed -i 's|<ContactForm formType="oferta-seo-6x3" />|<OfertaSeoForm />|g' "app/(site)/oferta-seo/page.tsx"

# Verificar que el cambio se aplicó
if grep -q "OfertaSeoForm" "app/(site)/oferta-seo/page.tsx"; then
  echo "  OK — formulario actualizado"
else
  echo "  AVISO: El import puede que ya estuviera actualizado o no se encontró ContactForm"
fi

# ─────────────────────────────────────────────────────────────
# COMMIT Y PUSH
# ─────────────────────────────────────────────────────────────
echo ""
echo "→ Añadiendo archivos al commit..."
git add app/api/leads/seo-6x3/route.ts
git add "app/(site)/oferta-seo/gracias/page.tsx"
git add components/OfertaSeoForm.tsx
git add "app/(site)/oferta-seo/page.tsx"

# Solo hacer commit si hay cambios staged
if git diff --cached --quiet; then
  echo "  No hay cambios nuevos que commitear — los archivos ya están en el repo."
else
  git commit -m "feat(oferta-seo): formulario multistep cualificación + API pública leads + página gracias

- API pública POST /api/leads/seo-6x3 sin auth de sesión
- Formulario multistep 2 pasos con cualificación real
- Captura de UTMs para atribución Google Ads
- Redirect a /oferta-seo/gracias/ para tracking de conversión
- Página de gracias con URL propia (noindex)
- Webhook a MktOS activable via APP_WEBHOOK_URL en env vars"

  echo "→ Haciendo push..."
  git push origin main
  echo ""
  echo "✅ Listo. Vercel desplegará en 2-3 minutos."
  echo "   Comprueba: https://www.mktweb360.com/oferta-seo/"
fi

echo ""
echo "=== Proceso completado ==="
