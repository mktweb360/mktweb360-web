"use client";
import { useEffect, useState } from "react";

// Informe mensual del cliente. Todo sale de MktOS: comprobaciones de posiciones, plan de trabajo y tickets.
type Kw = { keyword: string; domain: string | null; featured: boolean; volume: number | null; target: number | null; start: number | null; end: number | null; change: number | null };
type Report = {
  month: string; months: string[];
  seo: { summary: { tracked: number; measured: number; improved: number; worsened: number; top3_end: number; top10_end: number; top10_start: number; new_top10: string[]; best: Kw[]; worst: Kw[]; featured: Kw[] }; note: string };
  work: { done: { channel: string | null; action: string; deliverable: string | null; done_at: string }[]; by_channel: { channel: string; count: number }[]; planned_next_month: { channel: string | null; action: string; date: string; owner: string }[] };
  tickets: { opened: number; resolved: number };
  generated_at: string;
};

const monthLabel = (m: string) => new Date(`${m}-15T12:00:00`).toLocaleDateString("es-ES", { month: "long", year: "numeric" });
const fmt = (d: string) => new Date(d.length === 10 ? `${d}T12:00:00` : d).toLocaleDateString("es-ES", { day: "numeric", month: "short" });
const card = "bg-white rounded-2xl border border-gray-100 p-5 shadow-sm print:shadow-none print:border-gray-300 break-inside-avoid";

function Change({ c }: { c: number | null }) {
  if (c == null) return <span className="text-gray-300">—</span>;
  if (c === 0) return <span className="text-gray-400">=</span>;
  return <span className={c > 0 ? "text-green-600 font-semibold" : "text-red-500 font-semibold"}>{c > 0 ? `▲ ${c}` : `▼ ${Math.abs(c)}`}</span>;
}
function KwTable({ rows }: { rows: Kw[] }) {
  return (
    <table className="w-full text-sm">
      <thead className="text-xs text-gray-400 text-left"><tr><th className="py-1.5 pr-3 font-medium">Búsqueda</th><th className="py-1.5 pr-3 font-medium text-right">Inicio</th><th className="py-1.5 pr-3 font-medium text-right">Final</th><th className="py-1.5 font-medium text-right">Cambio</th></tr></thead>
      <tbody>{rows.map((k, i) => (
        <tr key={`${k.keyword}-${i}`} className="border-t border-gray-100">
          <td className="py-1.5 pr-3 text-gray-800">{k.featured && <span className="text-accent-500 mr-1">★</span>}{k.keyword}</td>
          <td className="py-1.5 pr-3 text-right text-gray-500">{k.start ?? "—"}</td>
          <td className="py-1.5 pr-3 text-right font-semibold text-primary-600">{k.end ?? "—"}</td>
          <td className="py-1.5 text-right"><Change c={k.change} /></td>
        </tr>
      ))}</tbody>
    </table>
  );
}

export default function PortalInformesPage() {
  const [month, setMonth] = useState<string>("");
  const [data, setData] = useState<Report | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    let alive = true;
    fetch(`/api/portal/informes${month ? `?month=${month}` : ""}`)
      .then(async (res) => {
        const json = await res.json().catch(() => ({}));
        if (!alive) return;
        if (res.status === 401) { window.location.href = "/portal/login/?error=expired"; return; }
        if (json.ok) { setData(json as Report); setError(""); if (!month) setMonth(json.month); }
        else setError(json.error || "No se pudo cargar el informe.");
      })
      .catch(() => alive && setError("Error de conexión."))
      .finally(() => alive && setLoading(false));
    return () => { alive = false; };
  }, [month]);

  const s = data?.seo.summary;
  return (
    <div className="space-y-6 max-w-5xl">
      <div className="flex items-end justify-between gap-4 flex-wrap">
        <div>
          <h1 className="text-2xl font-bold text-primary-600 mb-1">Informe mensual</h1>
          <p className="text-sm text-gray-500">{data ? monthLabel(data.month) : "…"} · calculado con los datos reales de tu cuenta</p>
        </div>
        <div className="flex gap-2 print:hidden">
          {data && (
            <select value={month} onChange={(e) => { setLoading(true); setMonth(e.target.value); }} className="text-sm px-3 py-2 rounded-full border border-gray-200 bg-white" aria-label="Mes del informe">
              {data.months.map((m) => <option key={m} value={m}>{monthLabel(m)}</option>)}
            </select>
          )}
          <button onClick={() => window.print()} className="text-sm bg-primary-600 text-white px-4 py-2 rounded-full hover:bg-primary-700">Guardar en PDF</button>
        </div>
      </div>

      {loading && <div className="space-y-3 animate-pulse">{[0, 1, 2].map((i) => <div key={i} className="h-28 bg-gray-100 rounded-2xl" />)}</div>}
      {error && !loading && <div className="bg-red-50 border border-red-100 text-red-600 rounded-2xl px-5 py-4 text-sm">{error}</div>}

      {data && s && !loading && (
        <>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            <div className={card}><p className="text-xs text-gray-400">Acciones realizadas</p><p className="text-2xl font-bold text-primary-600">{data.work.done.length}</p></div>
            <div className={card}><p className="text-xs text-gray-400">Búsquedas en top 10</p><p className="text-2xl font-bold text-primary-600">{s.tracked ? s.top10_end : "—"}</p>{s.tracked > 0 && <p className="text-xs text-gray-400 mt-1">{s.top10_end - s.top10_start >= 0 ? "+" : ""}{s.top10_end - s.top10_start} respecto al inicio del mes</p>}</div>
            <div className={card}><p className="text-xs text-gray-400">Búsquedas que mejoran</p><p className="text-2xl font-bold text-green-600">{s.measured ? s.improved : "—"}</p>{s.measured > 0 && <p className="text-xs text-gray-400 mt-1">{s.worsened} empeoran · {s.measured} medidas</p>}</div>
            <div className={card}><p className="text-xs text-gray-400">Tickets</p><p className="text-2xl font-bold text-primary-600">{data.tickets.opened}</p><p className="text-xs text-gray-400 mt-1">{data.tickets.resolved} resueltos</p></div>
          </div>

          <div className={card}>
            <h2 className="font-bold text-primary-600 mb-1">Trabajo realizado</h2>
            {data.work.by_channel.length > 0 && <p className="text-xs text-gray-500 mb-3">{data.work.by_channel.map((c) => `${c.channel}: ${c.count}`).join(" · ")}</p>}
            {data.work.done.length === 0 ? <p className="text-sm text-gray-400">No hay acciones cerradas en este mes.</p> : (
              <ul className="space-y-2">{data.work.done.map((d, i) => (
                <li key={i} className="flex gap-3 text-sm"><span className="text-green-600">✓</span><span className="text-gray-800">{d.action}<span className="block text-xs text-gray-400">{[d.channel, fmt(d.done_at), d.deliverable].filter(Boolean).join(" · ")}</span></span></li>
              ))}</ul>
            )}
          </div>

          {s.tracked > 0 && (
            <div className="grid md:grid-cols-2 gap-4">
              <div className={card}>
                <h2 className="font-bold text-primary-600 mb-3">Mayores subidas</h2>
                {s.best.length === 0 ? <p className="text-sm text-gray-400">Sin subidas medidas este mes.</p> : <KwTable rows={s.best} />}
                {s.new_top10.length > 0 && <p className="text-xs text-gray-500 mt-3"><strong>Entran en el top 10:</strong> {s.new_top10.join(", ")}</p>}
              </div>
              <div className={card}>
                <h2 className="font-bold text-primary-600 mb-3">Búsquedas destacadas</h2>
                {s.featured.length === 0 ? <p className="text-sm text-gray-400">Sin búsquedas destacadas.</p> : <KwTable rows={s.featured} />}
                {s.worst.length > 0 && <p className="text-xs text-gray-500 mt-3"><strong>A vigilar:</strong> {s.worst.map((k) => `${k.keyword} (${k.start}→${k.end})`).join(", ")}</p>}
              </div>
            </div>
          )}
          {s.tracked > 0 && <p className="text-[11px] text-gray-400">{data.seo.note}</p>}

          <div className={card}>
            <h2 className="font-bold text-primary-600 mb-3">Previsto para el mes siguiente</h2>
            {data.work.planned_next_month.length === 0 ? <p className="text-sm text-gray-400">No hay acciones programadas.</p> : (
              <ul className="space-y-2">{data.work.planned_next_month.map((p, i) => (
                <li key={i} className="flex gap-3 text-sm"><span className="text-gray-300">○</span><span className="text-gray-800">{p.action}<span className="block text-xs text-gray-400">{[p.channel, `semana del ${fmt(p.date)}`, p.owner === "cliente" ? "te toca a ti" : p.owner === "ambos" ? "juntos" : null].filter(Boolean).join(" · ")}</span></span></li>
              ))}</ul>
            )}
          </div>
          <p className="text-[11px] text-gray-400">Generado el {new Date(data.generated_at).toLocaleString("es-ES")} · Mkt Web 360 · mktweb360.com</p>
        </>
      )}
    </div>
  );
}
