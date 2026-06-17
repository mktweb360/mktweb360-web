
"use client";
import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

interface UtmData { utm_source?: string; utm_medium?: string; utm_campaign?: string; utm_content?: string; utm_term?: string; page_origin?: string; }
interface Paso1 { nombre: string; email: string; telefono: string; web: string; sector: string; }
interface Paso2 { situacionWeb: string; objetivoPrincipal: string; plazoIdeal: string; notas: string; gdpr: boolean; }
type Status = "idle" | "sending" | "error";

const SECTORES = ["FontanerÃ­a / Electricidad / Reformas","ClÃ­nica dental / Fisioterapia / PsicologÃ­a","Abogados / GestorÃ­a / AsesorÃ­a","HostelerÃ­a / RestauraciÃ³n","Comercio local / Tienda fÃ­sica","FormaciÃ³n / Academia","Otro sector de servicios"];
const SITUACION = [
  { val: "sin-web", label: "ð« No tengo web todavÃ­a", sub: "Quiero crearla desde cero" },
  { val: "antigua", label: "ð°ï¸ Tengo web pero estÃ¡ anticuada", sub: "Lenta, fea o difÃ­cil de gestionar" },
  { val: "wp-lento", label: "ð¢ WordPress que va muy lento", sub: "Demasiados plugins, mala experiencia" },
  { val: "no-convierte", label: "ð Web que no genera clientes", sub: "Visitas pero nadie contacta" },
];
const OBJETIVO = [
  { val: "captar", label: "ð¯ Captar clientes por Google", sub: "Aparecer en bÃºsquedas de mi sector" },
  { val: "imagen", label: "â¨ Mejorar mi imagen profesional", sub: "Mi web actual no me representa bien" },
  { val: "local", label: "ð Visibilidad local en mi ciudad", sub: "MÃ¡s clientes de mi zona" },
  { val: "digital", label: "ð Presencia digital completa", sub: "Web + correo + Google todo funcionando" },
];
const PLAZO = ["â¡ Lo antes posible","ð Este mes","ðï¸ Sin fecha fija"];
const INPUT = "w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#1e3a5f]/30 focus:border-transparent bg-white text-gray-800 placeholder:text-gray-400";

function Label({ children, required }: { children: React.ReactNode; required?: boolean }) {
  return <label className="block text-sm font-semibold text-gray-700 mb-1.5">{children}{required && <span className="text-[#f97316] ml-0.5">*</span>}</label>;
}

export function OfertaWebSeoForm() {
  const router = useRouter();
  const utmRef = useRef<UtmData>({});
  const [paso, setPaso] = useState<1 | 2>(1);
  const [status, setStatus] = useState<Status>("idle");
  const [p1, setP1] = useState<Paso1>({ nombre: "", email: "", telefono: "", web: "", sector: "" });
  const [p2, setP2] = useState<Paso2>({ situacionWeb: "", objetivoPrincipal: "", plazoIdeal: "", notas: "", gdpr: false });

  useEffect(() => {
    if (typeof window === "undefined") return;
    const params = new URLSearchParams(window.location.search);
    const utm: UtmData = { utm_source: params.get("utm_source") || undefined, utm_medium: params.get("utm_medium") || undefined, utm_campaign: params.get("utm_campaign") || undefined, utm_content: params.get("utm_content") || undefined, utm_term: params.get("utm_term") || undefined, page_origin: window.location.pathname };
    try {
      const s = sessionStorage.getItem("mktweb360_utm");
      if (s) { const d = JSON.parse(s); (Object.keys(d) as (keyof UtmData)[]).forEach(k => { if (!utm[k]) utm[k] = d[k]; }); }
      if (utm.utm_source) sessionStorage.setItem("mktweb360_utm", JSON.stringify(utm));
    } catch {}
    utmRef.current = utm;
  }, []);

  const paso1OK = p1.nombre.trim() !== "" && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(p1.email) && p1.telefono.trim() !== "" && p1.sector !== "";
  const paso2OK = p2.situacionWeb !== "" && p2.objetivoPrincipal !== "" && p2.plazoIdeal !== "" && p2.gdpr;

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!paso2OK) return;
    setStatus("sending");
    try {
      const res = await fetch("/api/leads/web-seo", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ ...p1, ...p2, oferta: "web-seo-999", ...utmRef.current }) });
      if (!res.ok) throw new Error();
      if (typeof window !== "undefined" && (window as Window & { dataLayer?: unknown[] }).dataLayer) {
        (window as Window & { dataLayer: unknown[] }).dataLayer.push({ event: "form_submit_success", form_type: "oferta-web-seo" });
      }
      router.push("/oferta-web-seo/gracias/");
    } catch { setStatus("error"); }
  }

  const ProgBar = () => (
    <div className="flex items-center gap-3 mb-6">
      <div className="flex items-center gap-2">
        {paso === 1 ? <span className="w-7 h-7 rounded-full bg-[#f97316] text-white text-xs flex items-center justify-center font-bold">1</span>
          : <button type="button" onClick={() => setPaso(1)} className="w-7 h-7 rounded-full bg-green-100 text-green-700 text-xs flex items-center justify-center font-bold">â</button>}
        <span className={`text-sm ${paso === 1 ? "font-semibold text-gray-800" : "text-gray-400"}`}>Tu negocio</span>
      </div>
      <div className={`flex-1 h-0.5 rounded ${paso === 2 ? "bg-[#f97316]" : "bg-gray-200"}`} />
      <div className="flex items-center gap-2">
        <span className={`w-7 h-7 rounded-full text-xs flex items-center justify-center font-bold ${paso === 2 ? "bg-[#f97316] text-white" : "bg-gray-200 text-gray-400"}`}>2</span>
        <span className={`text-sm ${paso === 2 ? "font-semibold text-gray-800" : "text-gray-400"}`}>Tu situaciÃ³n</span>
      </div>
    </div>
  );

  if (paso === 1) return (
    <div>
      <ProgBar />
      <div className="space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div><Label required>Nombre</Label><input className={INPUT} placeholder="Tu nombre" value={p1.nombre} onChange={e => setP1(v => ({ ...v, nombre: e.target.value }))} /></div>
          <div><Label required>Email</Label><input type="email" className={INPUT} placeholder="tu@empresa.com" value={p1.email} onChange={e => setP1(v => ({ ...v, email: e.target.value }))} /></div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div><Label required>TelÃ©fono</Label><input type="tel" className={INPUT} placeholder="+34 600 000 000" value={p1.telefono} onChange={e => setP1(v => ({ ...v, telefono: e.target.value }))} /></div>
          <div><Label>Web actual <span className="text-gray-400 font-normal">(si tienes)</span></Label><input className={INPUT} placeholder="tuempresa.com" value={p1.web} onChange={e => setP1(v => ({ ...v, web: e.target.value }))} /></div>
        </div>
        <div>
          <Label required>Sector de tu negocio</Label>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {SECTORES.map(s => <button key={s} type="button" onClick={() => setP1(v => ({ ...v, sector: s }))} className={`text-left px-4 py-2.5 rounded-xl border-2 text-sm font-medium transition-colors ${p1.sector === s ? "border-[#1e3a5f] bg-[#1e3a5f]/5 text-[#1e3a5f]" : "border-gray-200 text-gray-600 hover:border-[#1e3a5f]/30"}`}>{s}</button>)}
          </div>
        </div>
        <button type="button" disabled={!paso1OK} onClick={() => setPaso(2)} className="w-full bg-[#f97316] hover:bg-orange-600 disabled:opacity-40 disabled:cursor-not-allowed text-white font-bold py-4 rounded-full text-base transition-colors shadow-md">Continuar â</button>
      </div>
    </div>
  );

  return (
    <form onSubmit={handleSubmit}>
      <ProgBar />
      <div className="space-y-4">
        <div>
          <Label required>Â¿CuÃ¡l es tu situaciÃ³n con la web?</Label>
          <div className="space-y-2">
            {SITUACION.map(s => <button key={s.val} type="button" onClick={() => setP2(v => ({ ...v, situacionWeb: s.label }))} className={`w-full text-left px-4 py-3 rounded-xl border-2 transition-colors ${p2.situacionWeb === s.label ? "border-[#1e3a5f] bg-[#1e3a5f]/5" : "border-gray-200 hover:border-[#1e3a5f]/30"}`}><p className={`text-sm font-semibold ${p2.situacionWeb === s.label ? "text-[#1e3a5f]" : "text-gray-700"}`}>{s.label}</p><p className="text-xs text-gray-400 mt-0.5">{s.sub}</p></button>)}
          </div>
        </div>
        <div>
          <Label required>Â¿QuÃ© quieres conseguir principalmente?</Label>
          <div className="space-y-2">
            {OBJETIVO.map(o => <button key={o.val} type="button" onClick={() => setP2(v => ({ ...v, objetivoPrincipal: o.label }))} className={`w-full text-left px-4 py-3 rounded-xl border-2 transition-colors ${p2.objetivoPrincipal === o.label ? "border-[#1e3a5f] bg-[#1e3a5f]/5" : "border-gray-200 hover:border-[#1e3a5f]/30"}`}><p className={`text-sm font-semibold ${p2.objetivoPrincipal === o.label ? "text-[#1e3a5f]" : "text-gray-700"}`}>{o.label}</p><p className="text-xs text-gray-400 mt-0.5">{o.sub}</p></button>)}
          </div>
        </div>
        <div>
          <Label required>Â¿CuÃ¡ndo quieres tenerlo listo?</Label>
          <div className="grid grid-cols-3 gap-2">
            {PLAZO.map(p => <button key={p} type="button" onClick={() => setP2(v => ({ ...v, plazoIdeal: p }))} className={`text-center px-3 py-3 rounded-xl border-2 text-xs font-semibold transition-colors ${p2.plazoIdeal === p ? "border-[#1e3a5f] bg-[#1e3a5f]/5 text-[#1e3a5f]" : "border-gray-200 text-gray-600 hover:border-[#1e3a5f]/30"}`}>{p}</button>)}
          </div>
        </div>
        <div>
          <Label>Algo mÃ¡s que quieras contarnos <span className="text-gray-400 font-normal">(opcional)</span></Label>
          <textarea className={INPUT} rows={3} placeholder="CuÃ©ntanos tu negocio..." value={p2.notas} onChange={e => setP2(v => ({ ...v, notas: e.target.value }))} />
        </div>
        <label className="flex items-start gap-3 cursor-pointer">
          <input type="checkbox" checked={p2.gdpr} onChange={e => setP2(v => ({ ...v, gdpr: e.target.checked }))} className="mt-0.5 h-4 w-4 rounded border-gray-300 accent-[#f97316] shrink-0" />
          <span className="text-xs text-gray-500 leading-relaxed">He leÃ­do y acepto la <Link href="/politica-de-privacidad/" target="_blank" className="text-[#1e3a5f] hover:underline">polÃ­tica de privacidad</Link>. Consiento el tratamiento de mis datos. *</span>
        </label>
        {status === "error" && <div className="bg-red-50 border border-red-200 rounded-xl px-4 py-3 text-sm text-red-700">Error al enviar. LlÃ¡manos al <a href="tel:+34622748897" className="font-semibold underline">622 74 88 97</a>.</div>}
        <button type="submit" disabled={!paso2OK || status === "sending"} className="w-full bg-[#f97316] hover:bg-orange-600 disabled:opacity-40 disabled:cursor-not-allowed text-white font-bold py-4 rounded-full text-base transition-colors shadow-md">{status === "sending" ? "Enviando..." : "Solicitar informaciÃ³n â"}</button>
        <p className="text-xs text-center text-gray-400">Te contactamos en menos de 24 horas. Sin compromiso.</p>
      </div>
    </form>
  );
}
