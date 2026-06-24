"use client";
import { useState } from "react";
import Image from "next/image";

export default function PortalLoginPage() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) { setError("Introduce tu email."); return; }
    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/portal/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const data = await res.json();
      if (data.ok) {
        setSent(true);
      } else {
        setError(data.error || "No hemos encontrado tu cuenta. Contacta con tu gestor.");
      }
    } catch {
      setError("Error de conexión. Inténtalo de nuevo.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-primary-600 flex items-center justify-center px-4">
      <div className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-sm">
        <div className="text-center mb-8">
          <Image src="/logo.png" alt="Mkt Web 360" width={160} height={45} className="mx-auto mb-6" />
          <h1 className="text-xl font-bold text-primary-600 mb-1">Portal de cliente</h1>
          <p className="text-sm text-gray-500">Accede a tus informes, tareas y tickets</p>
        </div>

        {sent ? (
          <div className="text-center">
            <div className="text-4xl mb-4">📬</div>
            <h2 className="font-bold text-primary-600 mb-2">Enlace enviado</h2>
            <p className="text-sm text-gray-500">
              Hemos enviado un enlace de acceso a <strong>{email}</strong>. Revisa tu bandeja de entrada.
            </p>
            <p className="text-xs text-gray-400 mt-4">¿No lo ves? Revisa la carpeta de spam.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-semibold text-gray-600 mb-1.5">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="tu@empresa.com"
                className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary-400"
                autoFocus
              />
            </div>
            {error && (
              <p className="text-xs text-red-500 bg-red-50 px-3 py-2 rounded-lg">{error}</p>
            )}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-accent-500 hover:bg-accent-600 text-white py-3 rounded-xl font-bold text-sm transition-colors disabled:opacity-50"
            >
              {loading ? "Enviando..." : "Acceder a mi portal →"}
            </button>
            <p className="text-xs text-gray-400 text-center leading-relaxed">
              Te enviaremos un enlace de acceso a tu email. Sin contraseñas.
            </p>
          </form>
        )}
      </div>
    </div>
  );
}
