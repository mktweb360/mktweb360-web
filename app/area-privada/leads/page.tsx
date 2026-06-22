"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

type Contact = {
  id: string;
  nombre: string;
  email: string;
  telefono: string;
};

type Lead = {
  opportunity_id: string;
  name: string;
  status: string;
  stage: string;
  value: number;
  oferta: string;
  source: string;
  canal: string;
  domain: string;
  contact: Contact;
  created_at: string;
  updated_at: string;
};

const OFERTA_LABELS: Record<string, string> = {
  "seo-6x3": "SEO 6x3",
  "tienda-online-490": "Tienda 490€",
  "web-seo-999": "Web + SEO 999€",
};

const STATUS_LABELS: Record<string, { label: string; color: string }> = {
  open: { label: "Abierto", color: "bg-blue-100 text-blue-700" },
  won: { label: "Ganado", color: "bg-green-100 text-green-700" },
  lost: { label: "Perdido", color: "bg-red-100 text-red-700" },
};

export default function LeadsPage() {
  const router = useRouter();
  const [leads, setLeads] = useState<Lead[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [statusFilter, setStatusFilter] = useState("open");
  const [ofertaFilter, setOfertaFilter] = useState("");

  useEffect(() => {
    setLoading(true);
    const params = new URLSearchParams({ status: statusFilter });
    fetch(`/api/admin/leads?${params.toString()}`)
      .then((r) => r.json())
      .then((d) => {
        if (d.ok) { setLeads(d.leads); }
        else { setError(d.error || "Error al cargar leads"); }
        setLoading(false);
      })
      .catch(() => { setError("Error de conexión con MktOS"); setLoading(false); });
  }, [statusFilter]);

  const filtered = ofertaFilter
    ? leads.filter((l) => l.oferta === ofertaFilter)
    : leads;

  const goToLead = (lead: Lead) => {
    const oferta = lead.oferta === "tienda-online-490" ? "tienda-online" : "seo-6x3";
    router.push(`/area-privada/leads/${oferta}?opportunity_id=${lead.opportunity_id}&nombre=${encodeURIComponent(lead.contact.nombre)}&email=${encodeURIComponent(lead.contact.email)}&telefono=${encodeURIComponent(lead.contact.telefono)}&dominio=${encodeURIComponent(lead.domain)}`);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-primary-600 text-white px-4 py-4 flex items-center justify-between sticky top-0 z-10">
        <div>
          <p className="text-xs text-primary-300 uppercase tracking-widest font-semibold">Área privada</p>
          <h1 className="text-base font-bold">Leads del CRM</h1>
        </div>
        <button onClick={() => router.push("/area-privada/dashboard")} className="text-xs text-primary-300 hover:text-white">← Panel</button>
      </header>

      <div className="max-w-3xl mx-auto px-4 py-6">

        {/* FILTROS */}
        <div className="flex flex-wrap gap-2 mb-6">
          <div className="flex gap-1">
            {(["open", "won", "lost"] as const).map((s) => (
              <button key={s} onClick={() => setStatusFilter(s)} className={`px-3 py-1.5 rounded-full text-xs font-bold border-2 transition-colors ${statusFilter === s ? "border-primary-600 bg-primary-600 text-white" : "border-gray-200 text-gray-500 hover:border-primary-300"}`}>
                {STATUS_LABELS[s].label}
              </button>
            ))}
          </div>
          <div className="flex gap-1">
            {(["", "seo-6x3", "tienda-online-490", "web-seo-999"] as const).map((o) => (
              <button key={o} onClick={() => setOfertaFilter(o)} className={`px-3 py-1.5 rounded-full text-xs font-bold border-2 transition-colors ${ofertaFilter === o ? "border-accent-500 bg-accent-500 text-white" : "border-gray-200 text-gray-500 hover:border-accent-300"}`}>
                {o === "" ? "Todas" : OFERTA_LABELS[o]}
              </button>
            ))}
          </div>
        </div>

        {/* ESTADO */}
        {loading && <p className="text-center text-gray-400 py-12">Cargando leads...</p>}
        {error && <div className="bg-red-50 border border-red-200 rounded-xl p-4 text-red-600 text-sm">{error}</div>}

        {/* LISTA */}
        {!loading && !error && (
          <div className="space-y-3">
            {filtered.length === 0 && (
              <div className="bg-white rounded-2xl p-8 text-center border border-gray-100">
                <p className="text-gray-400 text-sm">No hay leads con este filtro.</p>
              </div>
            )}
            {filtered.map((lead) => (
              <div key={lead.opportunity_id} className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm hover:border-primary-300 transition-colors">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <p className="font-bold text-primary-700 text-sm">{lead.contact.nombre}</p>
                    <p className="text-xs text-gray-400">{lead.contact.email} · {lead.contact.telefono}</p>
                    {lead.domain && <p className="text-xs text-gray-400 mt-0.5">{lead.domain}</p>}
                  </div>
                  <div className="flex flex-col items-end gap-1">
                    <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${STATUS_LABELS[lead.status]?.color || "bg-gray-100 text-gray-500"}`}>
                      {STATUS_LABELS[lead.status]?.label || lead.status}
                    </span>
                    <span className="text-xs font-semibold text-accent-500">{OFERTA_LABELS[lead.oferta] || lead.oferta}</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <p className="text-xs text-gray-400">{new Date(lead.created_at).toLocaleDateString("es-ES")}</p>
                  {lead.status === "open" && (
                    <button onClick={() => goToLead(lead)} className="bg-primary-600 hover:bg-primary-700 text-white text-xs font-bold px-4 py-2 rounded-xl transition-colors">
                      Cualificar →
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
