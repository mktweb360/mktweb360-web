"use client";
import { useEffect, useState } from "react";
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
} from "recharts";

type Report = {
  month: string;
  channel: string;
  clicks: number;
  impressions: number;
  position: number;
  ctr: number;
};
type Summary = {
  channel: string;
  metric: string;
  value: number;
  delta: number;
  trend: "up" | "down";
};

const TABS = [
  { id: "seo", label: "SEO", locked: false },
  { id: "ads", label: "Google Ads", locked: true },
  { id: "rrss", label: "Redes Sociales", locked: true },
];

const numberFmt = new Intl.NumberFormat("es-ES");

const MES_CORTO = ["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"];

function monthLabel(month: string): string {
  const m = /^(\d{4})-(\d{2})/.exec(month);
  if (m) {
    const idx = parseInt(m[2], 10) - 1;
    return MES_CORTO[idx] ?? month;
  }
  return month;
}

function formatDelta(delta: number): string {
  return (delta >= 0 ? "+" : "") + delta.toFixed(1).replace(".", ",") + "%";
}

const METRIC_LABELS: Record<string, string> = {
  clicks: "Clics (jun)",
  impressions: "Impresiones (jun)",
  position: "Posición media",
  ctr: "CTR medio",
};

function MetricCard({ label, valor, delta }: { label: string; valor: string; delta: string }) {
  return (
    <div className="bg-white rounded-2xl border border-gray-100 p-5 shadow-sm">
      <p className="text-xs text-gray-400 mb-1">{label}</p>
      <p className="text-2xl font-bold text-primary-600">{valor}</p>
      <p className="text-xs font-semibold text-green-600 mt-1">{delta} vs mes anterior</p>
    </div>
  );
}

function ChartCard({ title, data, color, unit }: {
  title: string;
  data: { mes: string; valor: number }[];
  color: string;
  unit?: string;
}) {
  return (
    <div className="bg-white rounded-2xl border border-gray-100 p-5 shadow-sm">
      <h3 className="font-semibold text-primary-600 mb-4 text-sm">{title}</h3>
      <ResponsiveContainer width="100%" height={180}>
        <LineChart data={data} margin={{ top: 4, right: 8, left: -20, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
          <XAxis dataKey="mes" tick={{ fontSize: 11, fill: "#94a3b8" }} axisLine={false} tickLine={false} />
          <YAxis tick={{ fontSize: 11, fill: "#94a3b8" }} axisLine={false} tickLine={false} />
          <Tooltip
            contentStyle={{ borderRadius: "12px", border: "1px solid #e2e8f0", fontSize: 12 }}
            formatter={(v) => [`${v}${unit ?? ""}`, title]}
          />
          <Line type="monotone" dataKey="valor" stroke={color} strokeWidth={2.5} dot={{ r: 3, fill: color }} activeDot={{ r: 5 }} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default function PortalInformesPage() {
  const [activeTab, setActiveTab] = useState("seo");
  const [reports, setReports] = useState<Report[]>([]);
  const [summary, setSummary] = useState<Summary[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [pdfLoading, setPdfLoading] = useState(false);
  const [pdfError, setPdfError] = useState("");

  useEffect(() => {
    let activo = true;
    fetch("/api/portal/informes")
      .then(async (res) => {
        const json = await res.json().catch(() => ({}));
        if (!activo) return;
        if (json.ok) {
          setReports(json.reports ?? []);
          setSummary(json.summary ?? []);
        } else {
          setError(json.error || "No se pudieron cargar tus informes.");
        }
      })
      .catch(() => activo && setError("Error de conexión."))
      .finally(() => activo && setLoading(false));
    return () => {
      activo = false;
    };
  }, []);

  const descargarPdf = async () => {
    setPdfLoading(true);
    setPdfError("");
    try {
      const res = await fetch("/api/portal/informes/pdf");
      if (!res.ok) throw new Error();
      const blob = await res.blob();
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "informe-mktweb360.pdf";
      document.body.appendChild(a);
      a.click();
      a.remove();
      URL.revokeObjectURL(url);
    } catch {
      setPdfError("No se pudo descargar el PDF.");
    } finally {
      setPdfLoading(false);
    }
  };

  // Series SEO ordenadas cronológicamente para las gráficas.
  const seoReports = reports
    .filter((r) => r.channel === "seo")
    .slice()
    .sort((a, b) => a.month.localeCompare(b.month));

  const dataClics = seoReports.map((r) => ({ mes: monthLabel(r.month), valor: r.clicks }));
  const dataImpresiones = seoReports.map((r) => ({ mes: monthLabel(r.month), valor: r.impressions }));
  const dataPosicion = seoReports.map((r) => ({ mes: monthLabel(r.month), valor: r.position }));

  // Tarjetas resumen desde summary (canal SEO).
  const seoSummary = summary.filter((s) => s.channel === "seo");

  return (
    <div className="space-y-6 max-w-5xl">
      <div className="flex items-start justify-between gap-4 flex-wrap">
        <div>
          <h1 className="text-2xl font-bold text-primary-600 mb-1">Informes</h1>
          <p className="text-sm text-gray-500">Evolución de tus servicios — últimos meses</p>
        </div>
        <div className="text-right">
          <button
            onClick={descargarPdf}
            disabled={pdfLoading || loading}
            className="bg-primary-600 hover:bg-primary-700 text-white px-5 py-2.5 rounded-xl font-semibold text-sm transition-colors disabled:opacity-50"
          >
            {pdfLoading ? "Generando…" : "Descargar PDF"}
          </button>
          {pdfError && <p className="text-xs text-red-500 mt-1">{pdfError}</p>}
        </div>
      </div>

      {/* Tabs */}
      <div className="flex gap-2 border-b border-gray-200">
        {TABS.map((tab) => (
          <button
            key={tab.id}
            onClick={() => !tab.locked && setActiveTab(tab.id)}
            disabled={tab.locked}
            className={`px-4 py-2.5 text-sm font-semibold border-b-2 transition-colors flex items-center gap-1.5
              ${tab.locked ? "border-transparent text-gray-300 cursor-not-allowed" : ""}
              ${!tab.locked && activeTab === tab.id ? "border-accent-500 text-accent-500" : ""}
              ${!tab.locked && activeTab !== tab.id ? "border-transparent text-gray-500 hover:text-primary-600" : ""}
            `}
          >
            {tab.label}
            {tab.locked && <span className="text-xs">🔒</span>}
          </button>
        ))}
      </div>

      {loading ? (
        <div className="space-y-4 animate-pulse">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {[0, 1, 2, 3].map((i) => <div key={i} className="h-24 bg-gray-100 rounded-2xl" />)}
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="h-56 bg-gray-100 rounded-2xl" />
            <div className="h-56 bg-gray-100 rounded-2xl" />
          </div>
        </div>
      ) : error ? (
        <div className="bg-red-50 border border-red-100 text-red-600 rounded-2xl px-5 py-4 text-sm">
          {error}
        </div>
      ) : activeTab === "seo" ? (
        <>
          {/* Métricas resumen */}
          {seoSummary.length > 0 && (
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {seoSummary.map((s) => (
                <MetricCard
                  key={s.metric}
                  label={METRIC_LABELS[s.metric] ?? s.metric}
                  valor={numberFmt.format(s.value)}
                  delta={formatDelta(s.delta)}
                />
              ))}
            </div>
          )}

          {/* Gráficas */}
          {seoReports.length === 0 ? (
            <p className="text-sm text-gray-400">Aún no hay datos de informes disponibles.</p>
          ) : (
            <>
              <div className="grid md:grid-cols-2 gap-4">
                <ChartCard title="Clics orgánicos" data={dataClics} color="#f97316" />
                <ChartCard title="Impresiones" data={dataImpresiones} color="#1e3a5f" />
              </div>
              <ChartCard title="Posición media (menor = mejor)" data={dataPosicion} color="#10b981" unit=" pos" />
              <p className="text-xs text-gray-400">
                Datos de Google Search Console · Actualización mensual
              </p>
            </>
          )}
        </>
      ) : null}
    </div>
  );
}
