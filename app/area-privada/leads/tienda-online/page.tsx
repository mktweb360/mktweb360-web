"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

type FormData = {
  nombre: string;
  telefono: string;
  sector: string;
  canal: "llamada" | "whatsapp" | "email" | "";
  estado: "interesado" | "pendiente_propuesta" | "cerrado" | "descartado" | "";
  situacion: "nueva" | "shopify" | "prestashop" | "fisica" | "";
  catalogo: "menos50" | "50a500" | "mas500" | "sin-definir" | "";
  tieneWeb: "si" | "no" | "";
  dominioActual: string;
  tieneFotos: "si" | "no" | "en-proceso" | "";
  opcionPago: "unico" | "flex" | "";
  notas: string;
};

export default function TiendaOnlineLeadForm() {
  const router = useRouter();
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);
  const [form, setForm] = useState<FormData>({
    nombre: "", telefono: "", sector: "", canal: "", estado: "",
    situacion: "", catalogo: "", tieneWeb: "", dominioActual: "",
    tieneFotos: "", opcionPago: "", notas: "",
  });

  const set = (key: keyof FormData, value: string) =>
    setForm((prev) => ({ ...prev, [key]: value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    const res = await fetch("/api/admin/leads/tienda-online", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...form, oferta: "tienda-online-490", fecha: new Date().toISOString() }),
    });
    const data = await res.json();
    if (data.ok && data.id) {
      router.push(`/area-privada/leads/tienda-online/contrato/${data.id}`);
    } else {
      setSaved(true);
      setSaving(false);
    }
  };

  if (saved) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
        <div className="bg-white rounded-2xl p-8 text-center max-w-sm w-full shadow-sm">
          <div className="text-4xl mb-4">✅</div>
          <h2 className="text-xl font-bold text-primary-600 mb-2">Lead guardado</h2>
          <p className="text-gray-500 text-sm mb-6">Los datos de {form.nombre} han quedado registrados.</p>
          <div className="flex flex-col gap-3">
            <button onClick={() => { setSaved(false); setForm({ nombre: "", telefono: "", sector: "", canal: "", estado: "", situacion: "", catalogo: "", tieneWeb: "", dominioActual: "", tieneFotos: "", opcionPago: "", notas: "" }); }} className="bg-primary-600 text-white py-3 rounded-xl font-bold hover:bg-primary-700 transition-colors">
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
          <p className="text-xs text-primary-300 uppercase tracking-widest font-semibold">Tienda Online 490€</p>
          <h1 className="text-base font-bold">Formulario de cualificación</h1>
        </div>
        <button onClick={() => router.push("/area-privada/dashboard")} className="text-xs text-primary-300 hover:text-white">
          ← Panel
        </button>
      </header>

      <form onSubmit={handleSubmit} className="max-w-xl mx-auto px-4 py-6 space-y-6">

        {/* DATOS DEL LEAD */}
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
              <label className="block text-xs font-semibold text-gray-600 mb-1">Sector</label>
              <input value={form.sector} onChange={(e) => set("sector", e.target.value)} className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary-400" placeholder="Moda, alimentación, deportes..." />
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

        {/* SITUACIÓN ACTUAL */}
        <section className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
          <h2 className="font-bold text-primary-600 mb-4 flex items-center gap-2">
            <span className="w-6 h-6 rounded-full bg-accent-500 text-white text-xs flex items-center justify-center font-bold">3</span>
            Situación actual
          </h2>
          <div className="space-y-3">
            <div>
              <label className="block text-xs font-semibold text-gray-600 mb-2">Situación del cliente</label>
              <div className="space-y-2">
                {([
                  { val: "nueva", label: "🆕 Primera tienda online", desc: "Empieza desde cero" },
                  { val: "shopify", label: "🔄 Migración desde Shopify", desc: "Quiere dejar de pagar comisiones" },
                  { val: "prestashop", label: "🔄 Migración desde PrestaShop/WooCommerce", desc: "Necesita modernizar" },
                  { val: "fisica", label: "🏪 Tienda física que quiere vender online", desc: "Ampliar canal de venta" },
                ] as const).map((o) => (
                  <button key={o.val} type="button" onClick={() => set("situacion", o.val)} className={`w-full py-2.5 px-4 rounded-xl border-2 transition-colors text-left ${form.situacion === o.val ? "border-primary-600 bg-primary-50" : "border-gray-200 hover:border-primary-300"}`}>
                    <p className={`text-sm font-semibold ${form.situacion === o.val ? "text-primary-700" : "text-gray-700"}`}>{o.label}</p>
                    <p className="text-xs text-gray-400 mt-0.5">{o.desc}</p>
                  </button>
                ))}
              </div>
            </div>
            <div>
              <label className="block text-xs font-semibold text-gray-600 mb-2">¿Tiene web actualmente?</label>
              <div className="grid grid-cols-2 gap-2">
                {(["si", "no"] as const).map((v) => (
                  <button key={v} type="button" onClick={() => set("tieneWeb", v)} className={`py-2 rounded-xl text-sm font-bold border-2 transition-colors ${form.tieneWeb === v ? "border-primary-600 bg-primary-50 text-primary-700" : "border-gray-200 text-gray-500 hover:border-primary-300"}`}>
                    {v === "si" ? "✅ Sí" : "❌ No"}
                  </button>
                ))}
              </div>
            </div>
            {form.tieneWeb === "si" && (
              <div>
                <label className="block text-xs font-semibold text-gray-600 mb-1">Dominio actual</label>
                <input value={form.dominioActual} onChange={(e) => set("dominioActual", e.target.value)} className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary-400" placeholder="ejemplo.com" />
              </div>
            )}
          </div>
        </section>

        {/* CATÁLOGO Y FOTOS */}
        <section className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
          <h2 className="font-bold text-primary-600 mb-4 flex items-center gap-2">
            <span className="w-6 h-6 rounded-full bg-accent-500 text-white text-xs flex items-center justify-center font-bold">4</span>
            Catálogo y recursos
          </h2>
          <div className="space-y-4">
            <div>
              <label className="block text-xs font-semibold text-gray-600 mb-2">Número de productos aproximado</label>
              <div className="space-y-2">
                {([
                  { val: "menos50", label: "Menos de 50 productos", desc: "Catálogo pequeño o colección limitada" },
                  { val: "50a500", label: "Entre 50 y 500 productos", desc: "Catálogo mediano" },
                  { val: "mas500", label: "Más de 500 productos", desc: "Catálogo amplio o importación masiva" },
                  { val: "sin-definir", label: "Aún no lo tengo definido", desc: "En fase inicial" },
                ] as const).map((o) => (
                  <button key={o.val} type="button" onClick={() => set("catalogo", o.val)} className={`w-full py-2.5 px-4 rounded-xl border-2 transition-colors text-left ${form.catalogo === o.val ? "border-primary-600 bg-primary-50" : "border-gray-200 hover:border-primary-300"}`}>
                    <p className={`text-sm font-semibold ${form.catalogo === o.val ? "text-primary-700" : "text-gray-700"}`}>{o.label}</p>
                    <p className="text-xs text-gray-400 mt-0.5">{o.desc}</p>
                  </button>
                ))}
              </div>
            </div>
            <div>
              <label className="block text-xs font-semibold text-gray-600 mb-2">¿Tiene fotografías de producto?</label>
              <div className="grid grid-cols-3 gap-2">
                {([
                  { val: "si", label: "✅ Sí" },
                  { val: "no", label: "❌ No" },
                  { val: "en-proceso", label: "⏳ En proceso" },
                ] as const).map((o) => (
                  <button key={o.val} type="button" onClick={() => set("tieneFotos", o.val)} className={`py-2 rounded-xl text-xs font-bold border-2 transition-colors ${form.tieneFotos === o.val ? "border-primary-600 bg-primary-50 text-primary-700" : "border-gray-200 text-gray-500 hover:border-primary-300"}`}>
                    {o.label}
                  </button>
                ))}
              </div>
            </div>
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
              { val: "unico", label: "💳 Pago único — 490€", desc: "A la firma del acuerdo" },
              { val: "flex", label: "📅 Flex 50/50 — 2 × 245€", desc: "245€ firma + 245€ al lanzar la tienda" },
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
          disabled={saving || !form.nombre || !form.telefono || !form.canal || !form.estado}
          className="w-full bg-accent-500 text-white py-4 rounded-2xl font-bold text-lg hover:bg-accent-600 transition-colors disabled:opacity-40 disabled:cursor-not-allowed sticky bottom-4 shadow-lg"
        >
          {saving ? "Guardando..." : "Guardar lead"}
        </button>

      </form>
    </div>
  );
}
