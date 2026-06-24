"use client";

type Tarea = {
  titulo: string;
  servicio: string;
  fecha: string;
  done: boolean;
  notas?: string;
};

const TAREAS: Tarea[] = [
  { titulo: "Auditoría técnica inicial del dominio", servicio: "SEO", fecha: "15 ene 2026", done: true, notas: "Identificados 12 errores técnicos. Corregidos todos." },
  { titulo: "Optimización de velocidad de carga", servicio: "SEO", fecha: "3 feb 2026", done: true, notas: "Core Web Vitals mejorados. LCP pasó de 4,2s a 1,8s." },
  { titulo: "Optimización on-page de páginas de servicio", servicio: "SEO", fecha: "10 mar 2026", done: true, notas: "8 páginas optimizadas con keywords objetivo." },
  { titulo: "Creación de 3 artículos de blog SEO", servicio: "SEO", fecha: "18 abr 2026", done: true, notas: "Artículos publicados: 1.200+ palabras, schema incluido." },
  { titulo: "Revisión y optimización Google Business Profile", servicio: "SEO", fecha: "10 jun 2026", done: true, notas: "Fotos actualizadas, servicios revisados, respuestas a reseñas." },
  { titulo: "Link building — 5 menciones externas", servicio: "SEO", fecha: "15 jul 2026", done: false },
  { titulo: "Informe de posicionamiento Q2 2026", servicio: "SEO", fecha: "30 jul 2026", done: false },
];

const SERVICIO_COLORS: Record<string, string> = {
  SEO: "bg-blue-100 text-blue-700",
  "Google Ads": "bg-yellow-100 text-yellow-700",
  "Redes Sociales": "bg-pink-100 text-pink-700",
};

export default function PortalTareasPage() {
  const completadas = TAREAS.filter((t) => t.done);
  const proximas = TAREAS.filter((t) => !t.done);

  return (
    <div className="space-y-6 max-w-3xl">
      <div>
        <h1 className="text-2xl font-bold text-primary-600 mb-1">Tareas</h1>
        <p className="text-sm text-gray-500">
          {completadas.length} completadas · {proximas.length} próximas
        </p>
      </div>

      {/* Timeline */}
      <div className="relative">
        {/* Línea vertical */}
        <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gray-200" />

        <div className="space-y-4">
          {/* Próximas primero */}
          {proximas.length > 0 && (
            <div className="pl-12 mb-2">
              <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">Próximas</span>
            </div>
          )}
          {proximas.map((t) => (
            <div key={t.titulo} className="relative flex items-start gap-4 pl-12">
              <div className="absolute left-0 w-9 h-9 rounded-full bg-gray-100 border-2 border-gray-200 flex items-center justify-center z-10">
                <span className="text-gray-400 text-sm">○</span>
              </div>
              <div className="bg-white rounded-2xl border border-gray-100 p-4 shadow-sm flex-1">
                <div className="flex items-start justify-between gap-2 flex-wrap">
                  <p className="font-semibold text-gray-800 text-sm">{t.titulo}</p>
                  <span className={`text-xs font-semibold px-2.5 py-0.5 rounded-full shrink-0 ${SERVICIO_COLORS[t.servicio] ?? "bg-gray-100 text-gray-600"}`}>
                    {t.servicio}
                  </span>
                </div>
                <p className="text-xs text-gray-400 mt-1">Prevista: {t.fecha}</p>
              </div>
            </div>
          ))}

          {/* Divisor */}
          {completadas.length > 0 && proximas.length > 0 && (
            <div className="pl-12 pt-2 pb-1">
              <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">Completadas</span>
            </div>
          )}

          {/* Completadas */}
          {completadas.slice().reverse().map((t) => (
            <div key={t.titulo} className="relative flex items-start gap-4 pl-12">
              <div className="absolute left-0 w-9 h-9 rounded-full bg-green-100 border-2 border-green-300 flex items-center justify-center z-10">
                <span className="text-green-600 text-sm font-bold">✓</span>
              </div>
              <div className="bg-white rounded-2xl border border-gray-100 p-4 shadow-sm flex-1 opacity-80">
                <div className="flex items-start justify-between gap-2 flex-wrap">
                  <p className="font-semibold text-gray-600 text-sm line-through">{t.titulo}</p>
                  <span className={`text-xs font-semibold px-2.5 py-0.5 rounded-full shrink-0 ${SERVICIO_COLORS[t.servicio] ?? "bg-gray-100 text-gray-600"}`}>
                    {t.servicio}
                  </span>
                </div>
                <p className="text-xs text-gray-400 mt-1">Completada: {t.fecha}</p>
                {t.notas && <p className="text-xs text-gray-500 mt-2 bg-gray-50 rounded-lg px-3 py-2">{t.notas}</p>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
