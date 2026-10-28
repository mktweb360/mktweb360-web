"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

// Panel del cliente. Todo sale de MktOS en tiempo real: lo que la agencia actualiza allí, el cliente lo ve aquí.
type Feature = string | { label?: string; name?: string; text?: string };
type Service = { id: string; name: string; features: Feature[]; start_date: string; end_date: string | null; status: string };
type PlanItem = { action: string; channel: string | null; phase: string | null; date?: string; done_at?: string | null; status?: string; owner?: string; deliverable?: string | null };
type Plan = {
  id: string; name: string; status: string; start_date: string;
  progress: { total: number; done: number; pct: number };
  by_channel: { channel: string; total: number; done: number }[];
  next: PlanItem[]; recent: PlanItem[];
  requests: { ref: string; title: string; detail: string | null; due: string | null; priority: string | null; status: string }[];
  milestones: { title: string; date: string; past: boolean }[];
};
type Keyword = { id: string; keyword: string; domain: string | null; position: number | null; target: number | null; volume: number | null; url: string | null; featured: boolean; checked_at: string | null };
type Overview = {
  client: { name: string | null };
  services: Service[];
  plans: Plan[];
  tickets: { open: number; recent: { id: string; title: string; status: string; created_at: string }[] };
  seo: { keywords: Keyword[]; history: { keyword_id: string; position: number; at: string }[] };
  documents: { id: string; title: string; type: string | null; status: string | null; sent_at: string | null; url: string | null }[];
  generated_at: string;
};

const fmtDate = (d: string | null | undefined) => (d ? new Date(d.length === 10 ? `${d}T12:00:00` : d).toLocaleDateString("es-ES", { day: "numeric", month: "short", year: "numeric" }) : "—");
const featureText = (f: Feature) => (typeof f === "string" ? f : f.label ?? f.name ?? f.text ?? "");
const TICKET: Record<string, { label: string; cls: string }> = {
  open: { label: "Abierto", cls: "bg-yellow-100 text-yellow-700" },
  in_progress: { label: "En curso", cls: "bg-blue-100 text-blue-700" },
  resolved: { label: "Resuelto", cls: "bg-green-100 text-green-700" },
  closed: { label: "Cerrado", cls: "bg-gray-100 text-gray-600" },
};
const DOC: Record<string, string> = { proposal: "Propuesta", contract: "Contrato", quote: "Presupuesto", report: "Informe", brief: "Briefing", nda: "Confidencialidad", other: "Documento" };

function Sparkline({ points }: { points: number[] }) {
  if (points.length < 2) return <span className="text-xs text-gray-300">—</span>;
  const w = 90, h = 26, max = Math.max(...points), min = Math.min(...points);
  const span = Math.max(1, max - min);
  // posición: menor es mejor, así que se dibuja invertida (arriba = mejor)
  const d = points.map((p, i) => `${(i / (points.length - 1)) * w},${((p - min) / span) * (h - 4) + 2}`).join(" ");
  return (
    <svg width={w} height={h} viewBox={`0 0 ${w} ${h}`} role="img" aria-label={`Evolución de la posición: de ${points[0]} a ${points[points.length - 1]}`}>
      <polyline points={d} fill="none" stroke="#f97316" strokeWidth="2" strokeLinejoin="round" strokeLinecap="round" />
    </svg>
  );
}

function Bar({ pct }: { pct: number }) {
  return (
    <div className="h-2 w-full rounded-full bg-gray-100 overflow-hidden" role="progressbar" aria-valuenow={pct} aria-valuemin={0} aria-valuemax={100}>
      <div className="h-full rounded-full bg-accent-500" style={{ width: `${pct}%` }} />
    </div>
  );
}

const card = "bg-white rounded-2xl border border-gray-100 p-5 shadow-sm";

export default function PortalDashboardPage() {
  const [data, setData] = useState<Overview | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    let alive = true;
    fetch("/api/portal/overview")
      .then(async (res) => {
        const json = await res.json().catch(() => ({}));
        if (!alive) return;
        if (res.status === 401) { window.location.href = "/portal/login/?error=expired"; return; }
        if (json.ok) setData(json as Overview);
        else setError(json.error || "No se pudieron cargar tus datos.");
      })
      .catch(() => alive && setError("Error de conexión."))
      .finally(() => alive && setLoading(false));
    return () => { alive = false; };
  }, []);

  if (loading) {
    return (
      <div className="space-y-6 max-w-6xl animate-pulse">
        <div className="h-8 w-56 bg-gray-200 rounded" />
        <div className="grid md:grid-cols-3 gap-4">{[0, 1, 2].map((i) => <div key={i} className="h-32 bg-gray-100 rounded-2xl" />)}</div>
        <div className="h-64 bg-gray-100 rounded-2xl" />
      </div>
    );
  }
  if (error || !data) {
    return <div className="max-w-6xl"><div className="bg-red-50 border border-red-100 text-red-600 rounded-2xl px-5 py-4 text-sm">{error || "Sin datos."}</div></div>;
  }

  const active = data.plans.filter((p) => p.status === "activo");
  const requests = data.plans.flatMap((p) => p.requests.map((r) => ({ ...r, plan: p.name })));
  const next = data.plans.flatMap((p) => p.next.map((n) => ({ ...n, plan: p.name }))).sort((a, b) => String(a.date).localeCompare(String(b.date))).slice(0, 6);
  const recent = data.plans.flatMap((p) => p.recent).sort((a, b) => String(b.done_at ?? "").localeCompare(String(a.done_at ?? ""))).slice(0, 6);
  const milestones = data.plans.flatMap((p) => p.milestones.filter((m) => !m.past)).sort((a, b) => a.date.localeCompare(b.date)).slice(0, 4);
  const hist = (id: string) => data.seo.history.filter((h) => h.keyword_id === id).map((h) => Number(h.position));
  const keywords = [...data.seo.keywords].sort((a, b) => Number(b.featured) - Number(a.featured) || (a.position ?? 999) - (b.position ?? 999)).slice(0, 12);
  const top10 = data.seo.keywords.filter((k) => k.position != null && k.position <= 10).length;

  return (
    <div className="space-y-6 max-w-6xl">
      <div className="flex items-end justify-between gap-4 flex-wrap">
        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-accent-500">Área de cliente</p>
          <h1 className="text-2xl font-bold text-primary-600 mt-1">{data.client.name ? `Hola, ${data.client.name}` : "Tu panel"}</h1>
          <p className="text-sm text-gray-500">Datos actualizados el {new Date(data.generated_at).toLocaleString("es-ES", { day: "numeric", month: "long", hour: "2-digit", minute: "2-digit" })}</p>
        </div>
        <Link href="/portal/tickets" className="text-sm bg-accent-500 text-white px-5 py-2.5 rounded-full hover:bg-accent-600 font-semibold">Abrir un ticket</Link>
      </div>

      {/* Resumen */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <div className={card}><p className="text-xs text-gray-400">Servicios activos</p><p className="text-2xl font-bold text-primary-600">{data.services.filter((s) => s.status === "activa").length}</p></div>
        <div className={card}><p className="text-xs text-gray-400">Avance del plan</p><p className="text-2xl font-bold text-primary-600">{active[0] ? `${active[0].progress.pct}%` : "—"}</p>{active[0] && <p className="text-xs text-gray-400 mt-1">{active[0].progress.done} de {active[0].progress.total} acciones</p>}</div>
        <div className={card}><p className="text-xs text-gray-400">Palabras clave en top 10</p><p className="text-2xl font-bold text-primary-600">{data.seo.keywords.length ? top10 : "—"}</p>{data.seo.keywords.length > 0 && <p className="text-xs text-gray-400 mt-1">de {data.seo.keywords.length} seguidas</p>}</div>
        <div className={card}><p className="text-xs text-gray-400">Tickets abiertos</p><p className="text-2xl font-bold text-primary-600">{data.tickets.open}</p></div>
      </div>

      {/* Lo que necesitamos de ti */}
      {requests.length > 0 && (
        <div className="rounded-2xl border border-accent-500/30 bg-accent-50 p-5">
          <h2 className="font-bold text-primary-600">Necesitamos de ti</h2>
          <p className="text-xs text-gray-500 mb-3">Con esto podemos avanzar sin esperas. Si ya lo enviaste, respóndenos por un ticket.</p>
          <ul className="space-y-2">
            {requests.slice(0, 8).map((r) => (
              <li key={`${r.plan}-${r.ref}`} className="text-sm text-gray-800 flex gap-2">
                <span className="text-accent-500">●</span>
                <span><strong>{r.title}</strong>{r.detail ? ` — ${r.detail}` : ""}{r.due ? <span className="text-xs text-gray-500"> · antes del {fmtDate(r.due)}</span> : null}{r.status === "parcial" ? <span className="text-xs text-gray-500"> · recibido en parte</span> : null}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Servicios contratados */}
      <div>
        <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">Servicios contratados</h2>
        {data.services.length === 0 ? <p className="text-sm text-gray-400">No hay servicios registrados todavía.</p> : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {data.services.map((s) => (
              <div key={s.id} className={card}>
                <div className="flex items-start justify-between gap-2">
                  <p className="font-bold text-primary-600">{s.name}</p>
                  <span className={`text-[11px] font-bold px-2 py-0.5 rounded-full ${s.status === "activa" ? "bg-green-100 text-green-700" : "bg-gray-100 text-gray-600"}`}>{s.status === "activa" ? "Activo" : "En pausa"}</span>
                </div>
                <p className="text-xs text-gray-400 mt-1">Desde el {fmtDate(s.start_date)}{s.end_date ? ` · hasta el ${fmtDate(s.end_date)}` : ""}</p>
                {Array.isArray(s.features) && s.features.length > 0 && (
                  <ul className="mt-3 space-y-1">{s.features.slice(0, 6).map((f, i) => featureText(f) && <li key={i} className="text-xs text-gray-600 flex gap-1.5"><span className="text-green-600">✓</span>{featureText(f)}</li>)}</ul>
                )}
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Plan de trabajo */}
      {data.plans.length > 0 && (
        <div className="grid lg:grid-cols-3 gap-4">
          <div className={`${card} lg:col-span-2`}>
            <h2 className="font-bold text-primary-600 mb-4">Evolución del plan de trabajo</h2>
            <div className="space-y-5">
              {data.plans.map((p) => (
                <div key={p.id}>
                  <div className="flex items-center justify-between text-sm mb-1.5"><span className="font-semibold text-gray-800">{p.name}</span><span className="text-gray-500">{p.progress.pct}%</span></div>
                  <Bar pct={p.progress.pct} />
                  <div className="mt-3 grid sm:grid-cols-2 gap-x-6 gap-y-2">
                    {p.by_channel.map((c) => (
                      <div key={c.channel}>
                        <div className="flex justify-between text-xs text-gray-500 mb-1"><span>{c.channel}</span><span>{c.done}/{c.total}</span></div>
                        <Bar pct={c.total ? Math.round((c.done / c.total) * 100) : 0} />
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className={card}>
            <h2 className="font-bold text-primary-600 mb-3">Próximos hitos</h2>
            {milestones.length === 0 ? <p className="text-sm text-gray-400">Sin hitos próximos.</p> : (
              <ul className="space-y-3">{milestones.map((m) => <li key={`${m.title}-${m.date}`} className="text-sm"><p className="font-medium text-gray-800">{m.title}</p><p className="text-xs text-gray-400">{fmtDate(m.date)}</p></li>)}</ul>
            )}
          </div>
        </div>
      )}

      {data.plans.length > 0 && (
        <div className="grid md:grid-cols-2 gap-4">
          <div className={card}>
            <h2 className="font-bold text-primary-600 mb-3">Lo próximo que haremos</h2>
            {next.length === 0 ? <p className="text-sm text-gray-400">Nada pendiente.</p> : (
              <ul className="space-y-3">{next.map((n, i) => (
                <li key={i} className="flex gap-3"><span className="mt-0.5 w-5 h-5 rounded-full bg-gray-100 text-gray-400 flex items-center justify-center text-xs shrink-0">○</span>
                  <div><p className="text-sm text-gray-800 font-medium">{n.action}</p><p className="text-xs text-gray-400">{[n.channel, fmtDate(n.date), n.owner === "cliente" ? "lo haces tú" : n.owner === "ambos" ? "juntos" : null].filter(Boolean).join(" · ")}</p></div></li>
              ))}</ul>
            )}
          </div>
          <div className={card}>
            <div className="flex items-center justify-between mb-3"><h2 className="font-bold text-primary-600">Hecho recientemente</h2><Link href="/portal/tareas" className="text-xs text-accent-500 hover:underline">Ver todo →</Link></div>
            {recent.length === 0 ? <p className="text-sm text-gray-400">Todavía no hay acciones cerradas.</p> : (
              <ul className="space-y-3">{recent.map((n, i) => (
                <li key={i} className="flex gap-3"><span className="mt-0.5 w-5 h-5 rounded-full bg-green-100 text-green-600 flex items-center justify-center text-xs shrink-0">✓</span>
                  <div><p className="text-sm text-gray-700">{n.action}</p><p className="text-xs text-gray-400">{[n.channel, n.done_at ? fmtDate(n.done_at) : null, n.deliverable].filter(Boolean).join(" · ")}</p></div></li>
              ))}</ul>
            )}
          </div>
        </div>
      )}

      {/* SEO */}
      {keywords.length > 0 && (
        <div className={card}>
          <div className="flex items-center justify-between mb-3"><h2 className="font-bold text-primary-600">Posiciones en Google</h2><Link href="/portal/informes" className="text-xs text-accent-500 hover:underline">Informes →</Link></div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="text-xs text-gray-400 text-left"><tr><th className="py-2 pr-3 font-medium">Búsqueda</th><th className="py-2 pr-3 font-medium text-right">Posición</th><th className="py-2 pr-3 font-medium text-right">Objetivo</th><th className="py-2 pr-3 font-medium">Últimos 90 días</th></tr></thead>
              <tbody>
                {keywords.map((k) => (
                  <tr key={k.id} className="border-t border-gray-100">
                    <td className="py-2 pr-3 text-gray-800">{k.featured && <span className="text-accent-500 mr-1" title="Destacada">★</span>}{k.keyword}{k.domain && <span className="block text-xs text-gray-400">{k.domain}</span>}</td>
                    <td className="py-2 pr-3 text-right font-semibold text-primary-600">{k.position ?? "—"}</td>
                    <td className="py-2 pr-3 text-right text-gray-500">{k.target ?? "—"}</td>
                    <td className="py-2 pr-3"><Sparkline points={hist(k.id)} /></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-[11px] text-gray-400 mt-2">Posición 1 = primer resultado. La línea sube cuando mejora la posición.</p>
        </div>
      )}

      <div className="grid md:grid-cols-2 gap-4">
        <div className={card}>
          <div className="flex items-center justify-between mb-3"><h2 className="font-bold text-primary-600">Tus tickets</h2><Link href="/portal/tickets" className="text-xs text-accent-500 hover:underline">Ver todos →</Link></div>
          {data.tickets.recent.length === 0 ? (
            <div className="text-center py-4"><p className="text-sm text-gray-500">No has abierto ningún ticket.</p><Link href="/portal/tickets" className="inline-block mt-3 text-xs bg-accent-500 text-white px-4 py-2 rounded-full hover:bg-accent-600 font-semibold">Abrir ticket</Link></div>
          ) : (
            <div className="space-y-2">{data.tickets.recent.map((t) => (
              <Link key={t.id} href="/portal/tickets" className="flex items-center justify-between gap-2 text-sm border border-gray-100 rounded-xl px-3 py-2 hover:border-gray-200">
                <span className="text-gray-700 truncate">{t.title}</span>
                <span className={`text-xs px-2 py-0.5 rounded-full font-semibold shrink-0 ${TICKET[t.status]?.cls ?? "bg-gray-100 text-gray-600"}`}>{TICKET[t.status]?.label ?? t.status}</span>
              </Link>
            ))}</div>
          )}
        </div>
        <div className={card}>
          <h2 className="font-bold text-primary-600 mb-3">Documentos</h2>
          {data.documents.length === 0 ? <p className="text-sm text-gray-400">Aquí aparecerán las propuestas, contratos e informes que te enviemos.</p> : (
            <ul className="space-y-2">{data.documents.slice(0, 8).map((d) => (
              <li key={d.id} className="flex items-center justify-between gap-2 text-sm">
                <span className="text-gray-700 truncate">{d.title}<span className="block text-xs text-gray-400">{DOC[d.type ?? "other"] ?? "Documento"} · {fmtDate(d.sent_at)}{d.status === "signed" ? " · firmado" : ""}</span></span>
                {d.url && <a href={d.url} target="_blank" rel="noopener noreferrer" className="text-xs text-accent-500 hover:underline shrink-0">Abrir</a>}
              </li>
            ))}</ul>
          )}
        </div>
      </div>
    </div>
  );
}
