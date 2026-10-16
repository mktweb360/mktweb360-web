"use client";
import { useState } from "react";
import Image from "next/image";

export default function CambiarClavePage() {
  const [current, setCurrent] = useState("");
  const [next, setNext] = useState("");
  const [repeat, setRepeat] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    if (next !== repeat) { setError("Las dos contraseñas nuevas no coinciden."); return; }
    if (next.length < 10 || !/[A-Za-z]/.test(next) || !/\d/.test(next)) { setError("Usa al menos 10 caracteres combinando letras y números."); return; }
    setLoading(true);
    try {
      const r = await fetch("/api/portal/auth/change-password", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ current, next }) });
      const d = await r.json().catch(() => ({}));
      if (d.ok) { window.location.href = "/portal/dashboard/"; return; }
      if (r.status === 401) { window.location.href = "/portal/login/"; return; }
      setError(d.error || "No se ha podido cambiar la contraseña.");
    } catch {
      setError("Error de conexión. Inténtalo de nuevo.");
    } finally {
      setLoading(false);
    }
  };

  const inputCls = "w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary-400";
  return (
    <div className="min-h-screen bg-primary-600 flex items-center justify-center px-4">
      <div className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-sm">
        <div className="text-center mb-6">
          <Image src="/logo.png" alt="Mkt Web 360" width={160} height={45} className="mx-auto mb-6" />
          <h1 className="text-xl font-bold text-primary-600 mb-1">Elige tu contraseña</h1>
          <p className="text-sm text-gray-500">Por seguridad, cambia la contraseña inicial antes de continuar.</p>
        </div>
        <form onSubmit={submit} className="space-y-4">
          <div>
            <label htmlFor="cur" className="block text-xs font-semibold text-gray-600 mb-1.5">Contraseña actual (la que te dimos)</label>
            <input id="cur" type="password" autoComplete="current-password" value={current} onChange={(e) => setCurrent(e.target.value)} className={inputCls} required />
          </div>
          <div>
            <label htmlFor="new" className="block text-xs font-semibold text-gray-600 mb-1.5">Nueva contraseña</label>
            <input id="new" type="password" autoComplete="new-password" value={next} onChange={(e) => setNext(e.target.value)} className={inputCls} required />
          </div>
          <div>
            <label htmlFor="rep" className="block text-xs font-semibold text-gray-600 mb-1.5">Repite la nueva contraseña</label>
            <input id="rep" type="password" autoComplete="new-password" value={repeat} onChange={(e) => setRepeat(e.target.value)} className={inputCls} required />
          </div>
          <p className="text-xs text-gray-400">Mínimo 10 caracteres, con letras y números, y que no contenga tu correo.</p>
          {error && <p className="text-xs text-red-500 bg-red-50 px-3 py-2 rounded-lg">{error}</p>}
          <button type="submit" disabled={loading} className="w-full bg-accent-500 hover:bg-accent-600 text-white py-3 rounded-xl font-bold text-sm transition-colors disabled:opacity-50">
            {loading ? "Guardando..." : "Guardar y entrar →"}
          </button>
        </form>
      </div>
    </div>
  );
}
