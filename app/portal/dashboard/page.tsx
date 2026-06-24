"use client";
import Link from "next/link";

const SERVICIOS = [
  { label: "SEO", estado: "Activo", color: "bg-green-100 text-green-700" },
  { label: "Google Ads", estado: "Activo", color: "bg-green-100 text-green-700" },
];

const METRICAS = [
  { label: "Clics SEO (mes)", valor: "1.247", delta: "+18%", up: true },
  { label: "Impresiones", valor: "24.830", delta: "+12%", up: true },
  { label: "Posición media", valor: "14,3", delta: "-2,1", up: true },
  { label: "CTR medio", valor: "5,02%", delta: "+0,4%", up: true },
];

const TAREAS = [
  { titulo: "Optimización on-page páginas de servicio", servicio: "SEO", fecha: "10 jun 2026", done: true },
  { titulo: "Creación de 3 artículos de blog", servicio: "SEO", fecha: "18 jun 2026", done: true },
  { titulo: "Revisión de Google Business Profile", servicio: "SEO", fecha: "25 jun 2026", done: false },
];

const TICKETS: { id: number; asunto: string; estado: string }[] = [];

export default function PortalDashboardPage() {
  return (
    <div className="space-y-6 max-w-5xl">
      <div>
        <h1 className="text-2xl font-bold text-primary-600 mb-1">Dashboard</h1>
        <p className="text-sm text-gray-500">Resumen de tu cuenta — junio 2026</p>
      </div>

      {/* Servicios contratados */}
      <div className="bg-white rounded-2xl border border-gray-100 px-5 py-4 flex items-center gap-3 flex-wrap shadow-sm">
        <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider mr-1">Servicios activos</span>
        {SERVICIOS.map((s) => (
          <span key={s.label} className={`text-xs font-bold px-3 py-1 rounded-full ${s.color}`}>
            {s.label} · {s.estado}
          </span>
        ))}
      </div>

      {/* Métricas clave */}
      <div>
        <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">Métricas del mes</h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {METRICAS.map((m) => (
            <div key={m.label} className="bg-white rounded-2xl border border-gray-100 p-5 shadow-sm">
              <p className="text-xs text-gray-400 mb-1">{m.label}</p>
              <p className="text-2xl font-bold text-primary-600">{m.valor}</p>
              <p className={`text-xs font-semibold mt-1 ${m.up ? "text-green-600" : "text-red-500"}`}>
                {m.delta} vs mes anterior
              </p>
            </div>
          ))}
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
