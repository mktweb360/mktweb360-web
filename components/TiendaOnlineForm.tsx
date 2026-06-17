"use client";
import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

interface UtmData { utm_source?: string; utm_medium?: string; utm_campaign?: string; utm_content?: string; utm_term?: string; page_origin?: string; }
interface Paso1 { nombre: string; email: string; telefono: string; sector: string; }
interface Paso2 { situacionActual: string; catalogo: string; canalVenta: string; notas: string; gdpr: boolean; }
type Status = "idle" | "sending" | "error";

const SECTORES = ["Moda / Textil / Calzado","Alimentacion / Bebidas / Gourmet","Cosmetica / Salud / Bienestar","Hogar / Decoracion / Muebles","Deportes / Outdoor","Electronica / Tecnologia","Artesania / Productos propios","Otro sector"];
const SITUACION = [
  { val: "nueva", label: "Quiero crear mi primera tienda online", sub: "Empiezo desde cero" },
  { val: "shopify", label: "Tengo tienda en Shopify y quiero migrar", sub: "Quiero dejar de pagar comisiones" },
  { val: "prestashop", label: "Tengo PrestaShop / WooCommerce antiguo", sub: "Necesito modernizar y mejorar" },
  { val: "wix", label: "Tengo tienda en Wix / Squarespace", sub: "Quiero una solucion profesional" },
  { val: "fisica", label: "Tengo tienda fisica y quiero vender online", sub: "Ampliar canal de venta" },
];
const CATALOGO = [
  { val: "pequeno", label: "Menos de 50 productos", sub: "Catalogo pequeno o coleccion limitada" },
  { val: "mediano", label: "Entre 50 y 500 productos", sub: "Catalogo mediano" },
  { val: "grande", label: "Mas de 500 productos", sub: "Catalogo amplio o importacion masiva" },
  { val: "sin-definir", label: "Aun no lo tengo definido", sub: "Estoy en fase inicial" },
];
const CANAL = [
  { val: "solo-online", label: "Solo quiero vender online" },
  { val: "online-fisica", label: "Online + tienda fisica (TPV integrado)" },
  { val: "mayorista", label: "Tambien vendo a otras empresas (B2B)" },
];
const INPUT = "w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-accent-400 focus:border-transparent bg-white text-gray-800 placeholder:text-gray-400";

function Label({ children, required }: { children: React.ReactNode; required?: boolean }) {
  return <label className="block text-sm font-semibold text-gray-700 mb-1.5">{children}{required && <span className="text-accent-500 ml-0.5">*</span>}</label>;
}

export function TiendaOnlineForm() {
  const router = useRouter();
  const utmRef = useRef<UtmData>({});
  const [paso, setPaso] = useState<1 | 2>(1);
  const [status, setStatus] = useState<Status>("idle");
  const [p1, setP1] = useState<Paso1>({ nombre: "", email: "", telefono: "", sector: "" });
  const [p2, setP2] = useState<Paso2>({ situacionActual: "", catalogo: "", canalVenta: "", notas: "", gdpr: false });

  useEffect(() => {
    if (typeof window === "undefined") return;
    const params = new URLSearchParams(window.location.search);
    const utm: UtmData = { utm_source: params.get("utm_source") || undefined, utm_medium: params.get("utm_medium") || undefined, utm_campaign: params.get("utm_campaign") || undefined, utm_content: params.get("utm_content") || undefined, utm_term: params.get("utm_term") || undefined, page_origin: window.location.pathname };
    try {
      const s = sessionStorage.getItem("mktweb360_utm");
      if (s) { const d = JSON.parse(s); (Object.keys(d) as (keyof UtmData)[]).forEach(k => { if (!utm[k]) utm[k] = d[k as keyof UtmData]; }); }
      if (utm.utm_source) sessionStorage.setItem("mktweb360_utm", JSON.stringify(utm));
    } catch {}
    utmRef.current = utm;
  }, []);

  const paso1OK = p1.nombre.trim() !== "" && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(p1.email) && p1.telefono.trim() !== "" && p1.sector !== "";
  const paso2OK = p2.situacionActual !== "" && p2.catalogo !== "" && p2.canalVenta !== "" && p2.gdpr;

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!paso2OK) return;
    setStatus("sending");
    try {
      const res = await fetch("/api/leads/tienda-online", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ ...p1, ...p2, oferta: "tienda-online-490", ...utmRef.current }) });
      if (!res.ok) throw new Error();
      if (typeof window !== "undefined" && (window as Window & { dataLayer?: unknown[] }).dataLayer) {
        (window as unknown as { dataLayer: unknown[] }).dataLayer.push({ event: "form_submit_success", form_type: "tienda-online-landing" });
      }
      router.push("/tienda-online/gracias/");
    } catch { setStatus("error"); }
  }

  const ProgBar = () => (
    <div className="flex items-center gap-3 mb-6">
      <div className="flex items-center gap-2">
        {paso === 1 ? <span className="w-7 h-7 rounded-full bg-accent-500 text-white text-xs flex items-center justify-center font-bold">1</span>
          : <button type="button" onClick={() => setPaso(1)} className="w-7 h-7 rounded-full bg-green-100 text-green-700 text-xs flex items-center justify-center font-bold">OK</button>}
        <span className={`text-sm ${paso === 1 ? "font-semibold text-gray-800" : "text-gray-400"}`}>Tu negocio</span>
      </div>
      <div className={`flex-1 h-0.5 rounded ${paso === 2 ? "bg-accent-500" : "bg-gray-200"}`} />
      <div className="flex items-center gap-2">
        <span className={`w-7 h-7 rounded-full text-xs flex items-center justify-center font-bold ${paso === 2 ? "bg-accent-500 text-white" : "bg-gray-200 text-gray-400"}`}>2</span>
        <span className={`text-sm ${paso === 2 ? "font-semibold text-gray-800" : "text-gray-400"}`}>Tu tienda</span>
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
        <div><Label required>Telefono</Label><input type="tel" className={INPUT} placeholder="+34 600 000 000" value={p1.telefono} onChange={e => setP1(v => ({ ...v, telefono: e.target.value }))} /></div>
        <div>
          <Label required>En que sector vendes?</Label>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {SECTORES.map(s => <button key={s} type="button" onClick={() => setP1(v => ({ ...v, sector: s }))} className={`text-left px-4 py-2.5 rounded-xl border-2 text-sm font-medium transition-colors ${p1.sector === s ? "border-primary-600 bg-primary-50 text-primary-700" : "border-gray-200 text-gray-600 hover:border-primary-300"}`}>{s}</button>)}
          </div>
        </div>
        <button type="button" disabled={!paso1OK} onClick={() => setPaso(2)} className="w-full bg-accent-500 hover:bg-accent-600 disabled:opacity-40 disabled:cursor-not-allowed text-white font-bold py-4 rounded-full text-base transition-colors shadow-md">Continuar</button>
      </div>
    </div>
  );

  return (
    <form onSubmit={handleSubmit}>
      <ProgBar />
      <div className="space-y-4">
        <div>
          <Label required>Cual es tu situacion actual?</Label>
          <div className="space-y-2">
            {SITUACION.map(s => <button key={s.val} type="button" onClick={() => setP2(v => ({ ...v, situacionActual: s.label }))} className={`w-full text-left px-4 py-3 rounded-xl border-2 transition-colors ${p2.situacionActual === s.label ? "border-primary-600 bg-primary-50" : "border-gray-200 hover:border-primary-300"}`}><p className={`text-sm font-semibold ${p2.situacionActual === s.label ? "text-primary-700" : "text-gray-700"}`}>{s.label}</p><p className="text-xs text-gray-400 mt-0.5">{s.sub}</p></button>)}
          </div>
        </div>
        <div>
          <Label required>Cuantos productos tienes aproximadamente?</Label>
          <div className="space-y-2">
            {CATALOGO.map(c => <button key={c.val} type="button" onClick={() => setP2(v => ({ ...v, catalogo: c.label }))} className={`w-full text-left px-4 py-3 rounded-xl border-2 transition-colors ${p2.catalogo === c.label ? "border-primary-600 bg-primary-50" : "border-gray-200 hover:border-primary-300"}`}><p className={`text-sm font-semibold ${p2.catalogo === c.label ? "text-primary-700" : "text-gray-700"}`}>{c.label}</p><p className="text-xs text-gray-400 mt-0.5">{c.sub}</p></button>)}
          </div>
        </div>
        <div>
          <Label required>Como quieres vender?</Label>
          <div className="space-y-2">
            {CANAL.map(c => <button key={c.val} type="button" onClick={() => setP2(v => ({ ...v, canalVenta: c.label }))} className={`w-full text-left px-4 py-2.5 rounded-xl border-2 text-sm transition-colors ${p2.canalVenta === c.label ? "border-primary-600 bg-primary-50 text-primary-700 font-semibold" : "border-gray-200 text-gray-600 hover:border-primary-300"}`}>{c.label}</button>)}
          </div>
        </div>
        <div>
          <Label>Cuentanos algo mas <span className="text-gray-400 font-normal">(opcional)</span></Label>
          <textarea className={INPUT} rows={3} placeholder="Tienes web actual? Usas algun sistema de gestion? Algo importante que debamos saber..." value={p2.notas} onChange={e => setP2(v => ({ ...v, notas: e.target.value }))} />
        </div>
        <label className="flex items-start gap-3 cursor-pointer">
          <input type="checkbox" checked={p2.gdpr} onChange={e => setP2(v => ({ ...v, gdpr: e.target.checked }))} className="mt-0.5 h-4 w-4 rounded border-gray-300 accent-accent-500 shrink-0" />
          <span className="text-xs text-gray-500 leading-relaxed">He leido y acepto la <Link href="/politica-de-privacidad/" target="_blank" className="text-primary-600 hover:underline">politica de privacidad</Link>. Consiento el tratamiento de mis datos. *</span>
        </label>
        {status === "error" && <div className="bg-red-50 border border-red-200 rounded-xl px-4 py-3 text-sm text-red-700">Error al enviar. Llamanos al <a href="tel:+34622748987" className="font-semibold underline">622 74 89 87</a>.</div>}
        <button type="submit" disabled={!paso2OK || status === "sending"} className="w-full bg-accent-500 hover:bg-accent-600 disabled:opacity-40 disabled:cursor-not-allowed text-white font-bold py-4 rounded-full text-base transition-colors shadow-md">{status === "sending" ? "Enviando..." : "Reservar mi plaza"}</button>
        <p className="text-xs text-center text-gray-400">Sin compromiso. Te contactamos en menos de 24 horas.</p>
      </div>
    </form>
  );
}
