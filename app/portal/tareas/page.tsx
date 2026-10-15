"use client";
import { useEffect, useMemo, useState } from "react";

// Plan de trabajo del cliente, tal como lo lleva la agencia en MktOS.
type Item = { code: string | null; phase: string | null; channel: string | null; action: string; description: string | null; owner: string; from: string; deliverable: string | null; client_input: string | null; status: string; done_at: string | null };
type Plan = { id: string; name: string; status: string; start_date: string; items: Item[] };

const STATUS: Record<string, { label: string; cls: string; icon: string }> = {
  hecho: { label: "Hecho", cls: "bg-green-100 text-green-700", icon: "✓" },
  en_curso: { label: "En curso", cls: "bg-blue-100 text-blue-700", icon: "◐" },
  pendiente: { label: "Pendiente", cls: "bg-gray-100 text-gray-600", icon: "○" },
  bloqueado: { label: "En espera", cls: "bg-amber-100 text-amber-700", icon: "!" },
};
const fmt = (d: string | null) => (d ? new Date(d.length === 10 ? `${d}T12:00:00` : d).toLocaleDateString("es-ES", { day: "numeric", month: "short", year: "numeric" }) : "");
const FILTERS = [["todas", "Todas"], ["pendientes", "Pendientes"], ["hechas", "Hechas"], ["tuyas", "Te toca a ti"]] as const;

export default function PortalTareasPage() {
  const [plans, setPlans] = useState<Plan[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [filter, setFilter] = useState<(typeof FILTERS)[number][0]>("pendientes");
  const [channel, setChannel] = useState("");

  useEffect(() => {
    let alive = true;
    fetch("/api/portal/tareas")
      .then(async (res) => {
        const json = await res.json().catch(() => ({}));
        if (!alive) return;
        if (res.status === 401) { window.location.href = "/portal/login/?error=expired"; return; }
        if (json.ok) setPlans(json.plans ?? []);
        else setError(json.error || "No se pudieron cargar las tareas.");
      })
      .catch(() => alive && setError("Error de conexión."))
      .finally(() => alive && setLoading(false));
    return () => { alive = false; };
  }, []);

  const channels = useMemo(() => [...new Set(plans.flatMap((p) => p.items.map((i) => i.channel ?? "General")))].sort(), [plans]);

  if (loading) return <div className="max-w-5xl space-y-3 animate-pulse">{[0, 1, 2, 3].map((i) => <div key={i} className="h-16 bg-gray-100 rounded-2xl" />)}</div>;
  if (error) return <div className="max-w-5xl bg-red-50 border border-red-100 text-red-600 rounded-2xl px-5 py-4 text-sm">{error}</div>;

  return (
    <div className="space-y-6 max-w-5xl">
      <div>
        <h1 className="text-2xl font-bold text-primary-600 mb-1">Plan de trabajo</h1>
        <p className="text-sm text-gray-500">Todas las acciones de tu plan, con su fecha prevista y su estado. Se actualiza en cuanto el equipo marca algo como hecho.</p>
      </div>
      {plans.length === 0 ? <p className="text-sm text-gray-500">Todavía no hay un plan activo.</p> : (
        <>
          <div className="flex flex-wrap gap-2">
            {FILTERS.map(([k, l]) => <button key={k} onClick={() => setFilter(k)} className={`text-xs px-3 py-1.5 rounded-full border ${filter === k ? "bg-primary-600 text-white border-primary-600" : "border-gray-200 text-gray-600 hover:border-gray-300"}`}>{l}</button>)}
            <select value={channel} onChange={(e) => setChannel(e.target.value)} className="text-xs px-3 py-1.5 rounded-full border border-gray-200 text-gray-600 bg-white" aria-label="Filtrar por canal">
              <option value="">Todos los canales</option>
              {channels.map((c) => <option key={c} value={c}>{c}</option>)}
            </select>
          </div>
          {plans.map((p) => {
            const items = p.items.filter((i) =>
              (filter === "todas" || (filter === "hechas" ? i.status === "hecho" : filter === "pendientes" ? i.status !== "hecho" : i.owner !== "agencia" && i.status !== "hecho")) &&
              (!channel || (i.channel ?? "General") === channel));
            const done = p.items.filter((i) => i.status === "hecho").length;
            return (
              <section key={p.id} className="bg-white rounded-2xl border border-gray-100 p-5 shadow-sm">
                <div className="flex items-center justify-between gap-2 flex-wrap mb-3">
                  <h2 className="font-bold text-primary-600">{p.name}</h2>
                  <span className="text-xs text-gray-500">{done} de {p.items.length} hechas · desde el {fmt(p.start_date)}</span>
                </div>
                {items.length === 0 ? <p className="text-sm text-gray-400">Nada con este filtro.</p> : (
                  <ul className="divide-y divide-gray-100">
                    {items.map((i, idx) => {
                      const st = STATUS[i.status] ?? STATUS.pendiente;
                      return (
                        <li key={`${i.code ?? idx}`} className="py-3 flex gap-3">
                          <span className={`mt-0.5 w-6 h-6 rounded-full flex items-center justify-center text-xs shrink-0 ${st.cls}`} aria-hidden>{st.icon}</span>
                          <div className="min-w-0 flex-1">
                            <p className={`text-sm ${i.status === "hecho" ? "text-gray-500" : "text-gray-800 font-medium"}`}>{i.action}</p>
                            {i.description && <p className="text-xs text-gray-500 mt-0.5">{i.description}</p>}
                            <p className="text-xs text-gray-400 mt-0.5">
                              {[i.channel, i.status === "hecho" && i.done_at ? `hecho el ${fmt(i.done_at)}` : `semana del ${fmt(i.from)}`, i.deliverable ? `entregable: ${i.deliverable}` : null].filter(Boolean).join(" · ")}
                            </p>
                            {i.owner !== "agencia" && i.status !== "hecho" && (
                              <p className="text-xs text-accent-600 mt-1 font-semibold">{i.owner === "cliente" ? "Te toca a ti" : "Lo hacemos juntos"}{i.client_input ? `: ${i.client_input}` : ""}</p>
                            )}
                          </div>
                          <span className={`text-[11px] px-2 py-0.5 rounded-full font-semibold h-fit shrink-0 ${st.cls}`}>{st.label}</span>
                        </li>
                      );
                    })}
                  </ul>
                )}
              </section>
            );
          })}
        </>
      )}
    </div>
  );
}
