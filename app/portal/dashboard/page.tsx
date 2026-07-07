"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

type Me = { name: string; email: string; active_services_count: number };
type Service = { id: string; name: string; status: string; started_at: string };
type Summary = {
  channel: string;
  metric: string;
  value: number;
  delta: number;
  trend: "up" | "down";
};
type DashboardData = { me: Me | null; services: Service[]; summary: Summary[] };

// Datos aún sin endpoint propio — se cablearán en pasos posteriores del Bloque 3.
const TAREAS = [
  { titulo: "Optimización on-page páginas de servicio", servicio: "SEO", fecha: "10 jun 2026", done: true },
  { titulo: "Creación de 3 artículos de blog", servicio: "SEO", fecha: "18 jun 2026", done: true },
  { titulo: "Revisión de Google Business Profile", servicio: "SEO", fecha: "25 jun 2026", done: false },
];

const TICKETS: { id: number; asunto: string; estado: string }[] = [];

const numberFmt = new Intl.NumberFormat("es-ES");

function capitalize(s: string): string {
  return s.charAt(0).toUpperCase() + s.slice(1);
}

const METRIC_LABELS: Record<string, string> = {
  "seo:clicks": "Clics SEO",
  "seo:impressions": "Impresiones",
  "seo:position": "Posición media",
  "seo:ctr": "CTR medio",
};

function metricLabel(channel: string, metric: string): string {
  return METRIC_LABELS[`${channel}:${metric}`] ?? `${capitalize(channel)} ${metric}`;
}

function formatDelta(delta: number): string {
  return (delta >= 0 ? "+" : "") + delta.toFixed(1).replace(".", ",") + "%";
}

function serviceStatus(status: string): { label: string; color: string } {
  if (status === "active") {
    return { label: "Activo", color: "bg-green-100 text-green-700" };
  }
  return { label: capitalize(status), color: "bg-gray-100 text-gray-600" };
}

export default function PortalDashboardPage() {
  const [data, setData] = useState<DashboardData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    let activo = true;
    fetch("/api/portal/dashboard")
      .then(async (res) => {
        const json = await res.json().catch(() => ({}));
        if (!activo) return;
        if (json.ok) {
          setData({
            me: json.me ?? null,
            services: json.services ?? [],
            summary: json.summary ?? [],
          });
        } else {
          setError(json.error || "No se pudieron cargar tus datos.");
        }
      })
      .catch(() => activo && setError("Error de conexión."))
      .finally(() => activo && setLoading(false));
    return () => {
      activo = false;
    };
  }, []);

  if (loading) {
    return (
      <div className="space-y-6 max-w-5xl animate-pulse">
        <div className="h-8 w-48 bg-gray-200 rounded" />
        <div className="h-16 bg-gray-100 rounded-2xl" />
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {[0, 1, 2, 3].map((i) => (
            <div key={i} className="h-28 bg-gray-100 rounded-2xl" />
          ))}
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="max-w-5xl">
        <div className="bg-red-50 border border-red-100 text-red-600 rounded-2xl px-5 py-4 text-sm">
          {error}
        </div>
      </div>
    );
  }

  const servicios = data?.services ?? [];
  const metricas = (data?.summary ?? []).map((m) => ({
    label: metricLabel(m.channel, m.metric),
    valor: numberFmt.format(m.value),
    delta: formatDelta(m.delta),
    up: m.trend === "up",
  }));

  return (
    <div className="space-y-6 max-w-5xl">
      <div>
        <h1 className="text-2xl font-bold text-primary-600 mb-1">Dashboard</h1>
        <p className="text-sm text-gray-500">
          Resumen de tu cuenta — {new Date().toLocaleDateString('es-ES', { month: 'long', year: 'numeric' })}
        </p>
      </div>

      {/* Servicios contratados */}
      <div className="bg-white rounded-2xl border border-gray-100 px-5 py-4 flex items-center gap-3 flex-wrap shadow-sm">
        <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider mr-1">Servicios activos</span>
        {servicios.length === 0 ? (
          <span className="text-xs text-gray-400">Sin servicios activos</span>
        ) : (
          servicios.map((s) => {
            const { label, color } = serviceStatus(s.status);
            return (
              <span key={s.id} className={`text-xs font-bold px-3 py-1 rounded-full ${color}`}>
                {s.name} · {label}
              </span>
            );
          })
        )}
      </div>

      {/* Métricas clave */}
      <div>
        <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">Métricas del mes</h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {metricas.length === 0 ? (
            <p className="text-xs text-gray-400 col-span-full">Aún no hay métricas disponibles.</p>
          ) : (
            metricas.map((m) => (
              <div key={m.label} className="bg-white rounded-2xl border border-gray-100 p-5 shadow-sm">
                <p className="text-xs text-gray-400 mb-1">{m.label}</p>
                <p className="text-2xl font-bold text-primary-600">{m.valor}</p>
                <p className={`text-xs font-semibold mt-1 ${m.up ? "text-green-600" : "text-red-500"}`}>
                  {m.delta} vs mes anterior
                </p>
              </div>
            ))
          )}
        </div>
      </div>

      {/* Tareas y tickets en grid */}
      <div className="grid md:grid-cols-2 gap-4">
        {/* Tareas */}
        <div className="bg-white rounded-2xl border border-gray-100 p-5 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-bold text-primary-600">Tareas recientes</h2>
            <Link href="/portal/tareas" className="text-xs text-accent-500 hover:underline">Ver todas →</Link>
          </div>
          <div className="space-y-3">
            {TAREAS.map((t) => (
              <div key={t.titulo} className="flex items-start gap-3">
                <span className={`mt-0.5 w-5 h-5 rounded-full flex items-center justify-center text-xs shrink-0 ${t.done ? "bg-green-100 text-green-600" : "bg-gray-100 text-gray-400"}`}>
                  {t.done ? "✓" : "○"}
                </span>
                <div>
                  <p className={`text-sm ${t.done ? "text-gray-500 line-through" : "text-gray-800 font-medium"}`}>{t.titulo}</p>
                  <p className="text-xs text-gray-400">{t.servicio} · {t.fecha}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Tickets */}
        <div className="bg-white rounded-2xl border border-gray-100 p-5 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-bold text-primary-600">Tickets de soporte</h2>
            <Link href="/portal/tickets" className="text-xs text-accent-500 hover:underline">Ver todos →</Link>
          </div>
          {TICKETS.length === 0 ? (
            <div className="text-center py-6">
              <div className="text-3xl mb-2">🎫</div>
              <p className="text-sm text-gray-500">No tienes tickets abiertos</p>
              <Link href="/portal/tickets" className="inline-block mt-3 text-xs bg-accent-500 text-white px-4 py-2 rounded-full hover:bg-accent-600 transition-colors font-semibold">
                Abrir ticket
              </Link>
            </div>
          ) : (
            <div className="space-y-2">
              {TICKETS.map((t) => (
                <div key={t.id} className="flex items-center justify-between text-sm border border-gray-100 rounded-xl px-3 py-2">
                  <span className="text-gray-700">{t.asunto}</span>
                  <span className="text-xs bg-yellow-100 text-yellow-700 px-2 py-0.5 rounded-full font-semibold">{t.estado}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
