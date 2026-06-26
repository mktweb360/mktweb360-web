"use client";
import { useEffect, useState } from "react";

type Task = {
  id: string;
  title: string;
  service: string;
  due_date: string;
  completed: boolean;
  notes?: string;
};

const SERVICIO_COLORS: Record<string, string> = {
  seo: "bg-blue-100 text-blue-700",
  "google ads": "bg-yellow-100 text-yellow-700",
  "redes sociales": "bg-pink-100 text-pink-700",
};

function servicioColor(service: string): string {
  return SERVICIO_COLORS[service.toLowerCase()] ?? "bg-gray-100 text-gray-600";
}

function formatFecha(value: string): string {
  const date = new Date(value);
  if (isNaN(date.getTime())) return value;
  return date.toLocaleDateString("es-ES", { day: "numeric", month: "short", year: "numeric" });
}

export default function PortalTareasPage() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [next, setNext] = useState<Task | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    let activo = true;
    fetch("/api/portal/tareas")
      .then(async (res) => {
        const json = await res.json().catch(() => ({}));
        if (!activo) return;
        if (json.ok) {
          setTasks(json.tasks ?? []);
          setNext(json.next ?? null);
        } else {
          setError(json.error || "No se pudieron cargar tus tareas.");
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
      <div className="space-y-4 max-w-3xl animate-pulse">
        <div className="h-8 w-40 bg-gray-200 rounded" />
        {[0, 1, 2].map((i) => <div key={i} className="h-20 bg-gray-100 rounded-2xl" />)}
      </div>
    );
  }

  if (error) {
    return (
      <div className="max-w-3xl">
        <div className="bg-red-50 border border-red-100 text-red-600 rounded-2xl px-5 py-4 text-sm">
          {error}
        </div>
      </div>
    );
  }

  const completadas = tasks.filter((t) => t.completed);
  const proximas = tasks.filter((t) => !t.completed && t.id !== next?.id);

  return (
    <div className="space-y-6 max-w-3xl">
      <div>
        <h1 className="text-2xl font-bold text-primary-600 mb-1">Tareas</h1>
        <p className="text-sm text-gray-500">
          {completadas.length} completadas · {proximas.length + (next ? 1 : 0)} próximas
        </p>
      </div>

      {/* Próxima tarea destacada */}
      {next && (
        <div className="bg-primary-600 text-white rounded-2xl p-5 shadow-sm">
          <span className="text-xs font-bold uppercase tracking-wider text-primary-200">Próxima tarea</span>
          <div className="flex items-start justify-between gap-2 flex-wrap mt-2">
            <p className="font-semibold text-base">{next.title}</p>
            <span className={`text-xs font-semibold px-2.5 py-0.5 rounded-full shrink-0 ${servicioColor(next.service)}`}>
              {next.service}
            </span>
          </div>
          <p className="text-xs text-primary-200 mt-1">Prevista: {formatFecha(next.due_date)}</p>
          {next.notes && <p className="text-xs text-primary-100 mt-2 bg-primary-700 rounded-lg px-3 py-2">{next.notes}</p>}
        </div>
      )}

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
            <div key={t.id} className="relative flex items-start gap-4 pl-12">
              <div className="absolute left-0 w-9 h-9 rounded-full bg-gray-100 border-2 border-gray-200 flex items-center justify-center z-10">
                <span className="text-gray-400 text-sm">○</span>
              </div>
              <div className="bg-white rounded-2xl border border-gray-100 p-4 shadow-sm flex-1">
                <div className="flex items-start justify-between gap-2 flex-wrap">
                  <p className="font-semibold text-gray-800 text-sm">{t.title}</p>
                  <span className={`text-xs font-semibold px-2.5 py-0.5 rounded-full shrink-0 ${servicioColor(t.service)}`}>
                    {t.service}
                  </span>
                </div>
                <p className="text-xs text-gray-400 mt-1">Prevista: {formatFecha(t.due_date)}</p>
              </div>
            </div>
          ))}

          {/* Divisor */}
          {completadas.length > 0 && (proximas.length > 0 || next) && (
            <div className="pl-12 pt-2 pb-1">
              <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">Completadas</span>
            </div>
          )}

          {/* Completadas */}
          {completadas.map((t) => (
            <div key={t.id} className="relative flex items-start gap-4 pl-12">
              <div className="absolute left-0 w-9 h-9 rounded-full bg-green-100 border-2 border-green-300 flex items-center justify-center z-10">
                <span className="text-green-600 text-sm font-bold">✓</span>
              </div>
              <div className="bg-white rounded-2xl border border-gray-100 p-4 shadow-sm flex-1 opacity-80">
                <div className="flex items-start justify-between gap-2 flex-wrap">
                  <p className="font-semibold text-gray-600 text-sm line-through">{t.title}</p>
                  <span className={`text-xs font-semibold px-2.5 py-0.5 rounded-full shrink-0 ${servicioColor(t.service)}`}>
                    {t.service}
                  </span>
                </div>
                <p className="text-xs text-gray-400 mt-1">Completada: {formatFecha(t.due_date)}</p>
                {t.notes && <p className="text-xs text-gray-500 mt-2 bg-gray-50 rounded-lg px-3 py-2">{t.notes}</p>}
              </div>
            </div>
          ))}

          {tasks.length === 0 && !next && (
            <p className="text-sm text-gray-400 pl-12">No hay tareas registradas todavía.</p>
          )}
        </div>
      </div>
    </div>
  );
}
