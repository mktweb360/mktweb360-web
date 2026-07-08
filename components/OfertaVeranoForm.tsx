"use client";
import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

interface UtmData { utm_source?: string; utm_medium?: string; utm_campaign?: string; utm_content?: string; utm_term?: string; page_origin?: string; }
interface Datos { nombre: string; empresa: string; email: string; telefono: string; web: string; gdpr: boolean; }
type Status = "idle" | "sending" | "error";

const INPUT = "w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-accent-400 focus:border-transparent bg-white text-gray-800 placeholder:text-gray-400";

function Label({ children, required }: { children: React.ReactNode; required?: boolean }) {
  return <label className="block text-sm font-semibold text-gray-700 mb-1.5">{children}{required && <span className="text-accent-500 ml-0.5">*</span>}</label>;
}

export function OfertaVeranoForm() {
  const router = useRouter();
  const utmRef = useRef<UtmData>({});
  const [status, setStatus] = useState<Status>("idle");
  const [d, setD] = useState<Datos>({ nombre: "", empresa: "", email: "", telefono: "", web: "", gdpr: false });

  useEffect(() => {
    if (typeof window === "undefined") return;
    const params = new URLSearchParams(window.location.search);
    const utm: UtmData = { utm_source: params.get("utm_source") || undefined, utm_medium: params.get("utm_medium") || undefined, utm_campaign: params.get("utm_campaign") || undefined, utm_content: params.get("utm_content") || undefined, utm_term: params.get("utm_term") || undefined, page_origin: window.location.pathname };
    try {
      const s = sessionStorage.getItem("mktweb360_utm");
      if (s) { const j = JSON.parse(s); (Object.keys(j) as (keyof UtmData)[]).forEach(k => { if (!utm[k]) utm[k] = j[k as keyof UtmData]; }); }
      if (utm.utm_source) sessionStorage.setItem("mktweb360_utm", JSON.stringify(utm));
    } catch {}
    utmRef.current = utm;
  }, []);

  const formOK =
    d.nombre.trim() !== "" &&
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(d.email) &&
    d.gdpr;

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!formOK) return;
    setStatus("sending");
    try {
      const res = await fetch("/api/leads/seo-geo-gbp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...d, oferta: "seo-geo-gbp", ...utmRef.current }),
      });
      if (!res.ok) throw new Error();
      if (typeof window !== "undefined" && (window as Window & { dataLayer?: unknown[] }).dataLayer) {
        (window as unknown as { dataLayer: unknown[] }).dataLayer.push({ event: "form_submit_success", form_type: "seo-geo-gbp-verano" });
      }
      router.push("/landing/seo-geo-gbp-verano/gracias/");
    } catch { setStatus("error"); }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div><Label required>Nombre</Label><input className={INPUT} placeholder="Tu nombre" value={d.nombre} onChange={e => setD(v => ({ ...v, nombre: e.target.value }))} /></div>
        <div><Label>Empresa</Label><input className={INPUT} placeholder="Nombre de tu empresa" value={d.empresa} onChange={e => setD(v => ({ ...v, empresa: e.target.value }))} /></div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div><Label required>Email</Label><input type="email" className={INPUT} placeholder="tu@empresa.com" value={d.email} onChange={e => setD(v => ({ ...v, email: e.target.value }))} /></div>
        <div><Label>Teléfono</Label><input type="tel" className={INPUT} placeholder="+34 600 000 000" value={d.telefono} onChange={e => setD(v => ({ ...v, telefono: e.target.value }))} /></div>
      </div>
      <div><Label>Tu web <span className="text-gray-400 font-normal">(opcional)</span></Label><input className={INPUT} placeholder="www.tuempresa.com" value={d.web} onChange={e => setD(v => ({ ...v, web: e.target.value }))} /></div>

      <label className="flex items-start gap-3 cursor-pointer">
        <input type="checkbox" checked={d.gdpr} onChange={e => setD(v => ({ ...v, gdpr: e.target.checked }))} className="mt-0.5 h-4 w-4 rounded border-gray-300 accent-accent-500 shrink-0" />
        <span className="text-xs text-gray-500 leading-relaxed">He leído y acepto la <Link href="/politica-de-privacidad/" target="_blank" className="text-primary-600 hover:underline">política de privacidad</Link>. Consiento el tratamiento de mis datos. *</span>
      </label>

      {status === "error" && <div className="bg-red-50 border border-red-200 rounded-xl px-4 py-3 text-sm text-red-700">Error al enviar. Llámanos al <a href="tel:+34622748987" className="font-semibold underline">622 74 89 87</a>.</div>}

      <button type="submit" disabled={!formOK || status === "sending"} className="w-full bg-accent-500 hover:bg-accent-600 disabled:opacity-40 disabled:cursor-not-allowed text-white font-bold py-4 rounded-full text-base transition-colors shadow-md">
        {status === "sending" ? "Enviando..." : "Quiero mi plaza"}
      </button>
      <p className="text-xs text-center text-gray-400">Sin compromiso. Te contactamos en menos de 24 horas.</p>
    </form>
  );
}
