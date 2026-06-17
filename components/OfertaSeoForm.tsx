"use client";

import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

interface UtmData {
  utm_source?: string; utm_medium?: string; utm_campaign?: string;
  utm_content?: string; utm_term?: string; page_origin?: string;
}
interface Paso1 { nombre: string; email: string; telefono: string; dominio: string; sector: string; tiempoWeb: string; }
interface Paso2 { historialSeo: string; buscadorActual: string; notas: string; gdpr: boolean; }
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
  const [p2, setP2] = useState<Paso2>({ historialSeo: "", buscadorActual: "", notas: "", gdpr: false });

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
  const paso2Valido = p2.historialSeo !== "" && p2.buscadorActual !== "" && p2.gdpr;

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
      if (typeof window !== "undefined" && (window as unknown as { dataLayer?: unknown[] }).dataLayer) {
        (window as unknown as { dataLayer: unknown[] }).dataLayer.push({
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
