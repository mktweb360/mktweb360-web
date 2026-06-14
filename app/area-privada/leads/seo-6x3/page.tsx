"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

type FormData = {
  // Obligatorios
  nombre: string;
  telefono: string;
  dominio: string;
  escenario: "virgen" | "historial" | "";
  canal: "llamada" | "whatsapp" | "email" | "";
  estado: "interesado" | "pendiente_propuesta" | "cerrado" | "descartado" | "";
  // Opcionales
  sector: string;
  historialSeo: "nunca" | "si" | "interno" | "";
  resultadosAnteriores: string[];
  resultadosOtros: string;
  objetivos: string[];
  opcionPago: "unico" | "flex" | "cuotas" | "";
  notas: string;
};

const RESULTADOS_OPTIONS = [
  "No noté ninguna mejora en el tráfico",
  "Mejoré algo pero dejé de ver resultados",
  "Perdí posiciones después de cambiar de agencia",
  "Me prometieron resultados que nunca llegaron",
  "Tuve resultados pero el servicio era demasiado caro",
  "Sufrí una penalización de Google",
];

const OBJETIVOS_OPTIONS = [
  "Más llamadas de clientes potenciales",
  "Más visitas a mi tienda física",
  "Más formularios de contacto",
  "Más ventas en mi tienda online",
  "Aparecer antes que mi competencia en Google",
  "Mejorar mi presencia local en mi ciudad",
];

export default function SeoLeadForm() {
  const router = useRouter();
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);
  const [form, setForm] = useState<FormData>({
    nombre: "", telefono: "", dominio: "", escenario: "", canal: "", estado: "",
    sector: "", historialSeo: "", resultadosAnteriores: [], resultadosOtros: "",
    objetivos: [], opcionPago: "", notas: "",
  });

  const set = (key: keyof FormData, value: string) =>
    setForm((prev) => ({ ...prev, [key]: value }));

  const toggleCheck = (key: "resultadosAnteriores" | "objetivos", val: string) =>
    setForm((prev) => ({
      ...prev,
      [key]: prev[key].includes(val)
        ? (prev[key] as string[]).filter((v) => v !== val)
        : [...(prev[key] as string[]), val],
    }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    await fetch("/api/admin/leads/seo-6x3", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...form, oferta: "seo-6x3", fecha: new Date().toISOString() }),
    });
    setSaved(true);
    setSaving(false);
  };

  if (saved) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
        <div className="bg-white rounded-2xl p-8 text-center max-w-sm w-full shadow-sm">
          <div className="text-4xl mb-4">✅</div>
          <h2 className="text-xl font-bold text-primary-600 mb-2">Lead guardado</h2>
          <p className="text-gray-500 text-sm mb-6">Los datos de {form.nombre} han quedado registrados.</p>
          <div className="flex flex-col gap-3">
            <button onClick={() => { setSaved(false); setForm({ nombre: "", telefono: "", dominio: "", escenario: "", canal: "", estado: "", sector: "", historialSeo: "", resultadosAnteriores: [], resultadosOtros: "", objetivos: [], opcionPago: "", notas: "" }); }} className="bg-primary-600 text-white py-3 rounded-xl font-bold hover:bg-primary-700 transition-colors">
              Nuevo lead
            </button>
            <button onClick={() => router.push("/area-privada/dashboard")} className="border border-gray-200 text-gray-600 py-3 rounded-xl font-bold hover:bg-gray-50 transition-colors">
              Volver al panel
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-primary-600 text-white px-4 py-4 flex items-center justify-between sticky top-0 z-10">
        <div>
          <p className="text-xs text-primary-300 uppercase tracking-widest font-semibold">Oferta SEO 6x3</p>
          <h1 className="text-base font-bold">Formulario de cualificación</h1>
        </div>
        <button onClick={() => router.push("/area-privada/dashboard")} className="text-xs text-primary-300 hover:text-white">
          ← Panel
        </button>
      </header>

      <form onSubmit={handleSubmit} className="max-w-xl mx-auto px-4 py-6 space-y-6">

        {/* DATOS OBLIGATORIOS */}
        <section className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
          <h2 className="font-bold text-primary-600 mb-4 flex items-center gap-2">
            <span className="w-6 h-6 rounded-full bg-accent-500 text-white text-xs flex items-center justify-center font-bold">1</span>
            Datos del lead
          </h2>
          <div className="space-y-3">
            <div>
              <label className="block text-xs font-semibold text-gray-600 mb-1">Nombre <span className="text-red-400">*</span></label>
              <input required value={form.nombre} onChange={(e) => set("nombre", e.target.value)} className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary-400" placeholder="Nombre del contacto" />
            </div>
            <div>
              <label className="block text-xs font-semibold text-gray-600 mb-1">Teléfono <span className="text-red-400">*</span></label>
              <input required type="tel" value={form.telefono} onChange={(e) => set("telefono", e.target.value)} className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary-400" placeholder="+34 600 000 000" />
            </div>
            <div>
              <label className="block text-xs font-semibold text-gray-600 mb-1">Dominio <span className="text-red-400">*</span></label>
              <input required value={form.dominio} onChange={(e) => set("dominio", e.target.value)} className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary-400" placeholder="ejemplo.com" />
            </div>
            <div>
              <label className="block text-xs font-semibold text-gray-600 mb-1">Sector</label>
              <input value={form.sector} onChange={(e) => set("sector", e.target.value)} className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary-400" placeholder="Fontanería, clínica dental, ecommerce..." />
            </div>
          </div>
        </section>

        {/* CANAL Y ESTADO */}
        <section className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
          <h2 className="font-bold text-primary-600 mb-4 flex items-center gap-2">
            <span className="w-6 h-6 rounded-full bg-accent-500 text-white text-xs flex items-center justify-center font-bold">2</span>
            Contacto y estado
          </h2>
          <div className="space-y-3">
            <div>
              <label className="block text-xs font-semibold text-gray-600 mb-2">Canal <span className="text-red-400">*</span></label>
              <div className="grid grid-cols-3 gap-2">
                {(["llamada", "whatsapp", "email"] as const).map((c) => (
                  <button key={c} type="button" onClick={() => set("canal", c)} className={`py-2 rounded-xl text-xs font-bold border-2 transition-colors capitalize ${form.canal === c ? "border-primary-600 bg-primary-600 text-white" : "border-gray-200 text-gray-500 hover:border-primary-300"}`}>
                    {c === "llamada" ? "📞 Llamada" : c === "whatsapp" ? "💬 WhatsApp" : "✉️ Email"}
                  </button>
                ))}
              </div>
            </div>
            <div>
              <label className="block text-xs font-semibold text-gray-600 mb-2">Estado <span className="text-red-400">*</span></label>
              <div className="grid grid-cols-2 gap-2">
                {([
                  { val: "interesado", label: "🟢 Interesado" },
                  { val: "pendiente_propuesta", label: "🟡 Pendiente propuesta" },
                  { val: "cerrado", label: "✅ Cerrado" },
                  { val: "descartado", label: "🔴 Descartado" },
                ] as const).map((s) => (
                  <button key={s.val} type="button" onClick={() => set("estado", s.val)} className={`py-2 px-3 rounded-xl text-xs font-bold border-2 transition-colors text-left ${form.estado === s.val ? "border-primary-600 bg-primary-50 text-primary-700" : "border-gray-200 text-gray-500 hover:border-primary-300"}`}>
                    {s.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ESCENARIO SEO */}
        <section className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
          <h2 className="font-bold text-primary-600 mb-4 flex items-center gap-2">
            <span className="w-6 h-6 rounded-full bg-accent-500 text-white text-xs flex items-center justify-center font-bold">3</span>
            Escenario SEO
          </h2>
          <div className="space-y-3">
            <div>
              <label className="block text-xs font-semibold text-gray-600 mb-2">Historial SEO</label>
              <div className="space-y-2">
                {([
                  { val: "nunca", label: "🌱 Nunca ha hecho SEO" },
                  { val: "si", label: "📉 Ha hecho SEO sin resultados" },
                  { val: "interno", label: "🔧 Lo ha intentado internamente" },
                ] as const).map((o) => (
                  <button key={o.val} type="button" onClick={() => set("historialSeo", o.val)} className={`w-full py-2.5 px-4 rounded-xl text-sm font-semibold border-2 transition-colors text-left ${form.historialSeo === o.val ? "border-primary-600 bg-primary-50 text-primary-700" : "border-gray-200 text-gray-500 hover:border-primary-300"}`}>
                    {o.label}
                  </button>
                ))}
              </div>
            </div>

            {form.historialSeo === "si" && (
              <div className="mt-3 p-4 bg-amber-50 rounded-xl border border-amber-200">
                <label className="block text-xs font-semibold text-amber-700 mb-2">¿Qué resultado obtuvo?</label>
                <div className="space-y-2">
                  {RESULTADOS_OPTIONS.map((r) => (
                    <label key={r} className="flex items-start gap-2 cursor-pointer">
                      <input type="checkbox" checked={form.resultadosAnteriores.includes(r)} onChange={() => toggleCheck("resultadosAnteriores", r)} className="mt-0.5 accent-primary-600" />
                      <span className="text-xs text-gray-700">{r}</span>
                    </label>
                  ))}
                  <label className="flex items-start gap-2 cursor-pointer">
                    <input type="checkbox" checked={form.resultadosAnteriores.includes("otros")} onChange={() => toggleCheck("resultadosAnteriores", "otros")} className="mt-0.5 accent-primary-600" />
                    <span className="text-xs text-gray-700 font-semibold">Otros</span>
                  </label>
                  {form.resultadosAnteriores.includes("otros") && (
                    <textarea value={form.resultadosOtros} onChange={(e) => set("resultadosOtros", e.target.value)} className="w-full border border-gray-200 rounded-xl px-3 py-2 text-xs focus:outline-none focus:ring-2 focus:ring-primary-400 mt-1" rows={3} placeholder="Describe los resultados obtenidos..." />
                  )}
                </div>
              </div>
            )}
          </div>
        </section>

        {/* OBJETIVOS */}
        <section className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
          <h2 className="font-bold text-primary-600 mb-4 flex items-center gap-2">
            <span className="w-6 h-6 rounded-full bg-accent-500 text-white text-xs flex items-center justify-center font-bold">4</span>
            Objetivos del cliente
          </h2>
          <div className="space-y-2">
            {OBJETIVOS_OPTIONS.map((o) => (
              <label key={o} className="flex items-start gap-2 cursor-pointer">
                <input type="checkbox" checked={form.objetivos.includes(o)} onChange={() => toggleCheck("objetivos", o)} className="mt-0.5 accent-primary-600" />
                <span className="text-sm text-gray-700">{o}</span>
              </label>
            ))}
          </div>
        </section>

        {/* OPCIÓN DE PAGO */}
        <section className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
          <h2 className="font-bold text-primary-600 mb-4 flex items-center gap-2">
            <span className="w-6 h-6 rounded-full bg-accent-500 text-white text-xs flex items-center justify-center font-bold">5</span>
            Opción de pago
          </h2>
          <div className="space-y-2">
            {([
              { val: "unico", label: "💳 Pago único — 600€", desc: "A la firma del acuerdo" },
              { val: "flex", label: "📅 Flex 50/50 — 2 × 300€", desc: "300€ firma + 300€ mes siguiente" },
              { val: "cuotas", label: "📆 Cuotas — 6 × 100€", desc: "Domiciliación mensual" },
            ] as const).map((p) => (
              <button key={p.val} type="button" onClick={() => set("opcionPago", p.val)} className={`w-full py-3 px-4 rounded-xl border-2 transition-colors text-left ${form.opcionPago === p.val ? "border-primary-600 bg-primary-50" : "border-gray-200 hover:border-primary-300"}`}>
                <p className={`text-sm font-bold ${form.opcionPago === p.val ? "text-primary-700" : "text-gray-700"}`}>{p.label}</p>
                <p className="text-xs text-gray-400 mt-0.5">{p.desc}</p>
              </button>
            ))}
          </div>
        </section>

        {/* NOTAS */}
        <section className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
          <h2 className="font-bold text-primary-600 mb-4 flex items-center gap-2">
            <span className="w-6 h-6 rounded-full bg-accent-500 text-white text-xs flex items-center justify-center font-bold">6</span>
            Notas de la llamada
          </h2>
          <textarea value={form.notas} onChange={(e) => set("notas", e.target.value)} className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary-400" rows={4} placeholder="Observaciones, objeciones detectadas, contexto relevante..." />
        </section>

        {/* SUBMIT */}
        <button
          type="submit"
          disabled={saving || !form.nombre || !form.telefono || !form.dominio || !form.canal || !form.estado}
          className="w-full bg-accent-500 text-white py-4 rounded-2xl font-bold text-lg hover:bg-accent-600 transition-colors disabled:opacity-40 disabled:cursor-not-allowed sticky bottom-4 shadow-lg"
        >
          {saving ? "Guardando..." : "Guardar lead"}
        </button>

      </form>
    </div>
  );
}
