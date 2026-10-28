"use client";
import { useState } from "react";
import Image from "next/image";

type Mode = "password" | "link";

export default function PortalLoginPage() {
  const [mode, setMode] = useState<Mode>("password");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");

  const submitPassword = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) { setError("Introduce tu correo y tu contraseña."); return; }
    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/portal/auth/password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      const data = await res.json().catch(() => ({}));
      if (data.ok) {
        window.location.href = data.must_change ? "/portal/cambiar-clave/" : "/portal/dashboard/";
        return;
      }
      setError(data.error || "Correo o contraseña incorrectos.");
    } catch {
      setError("Error de conexión. Inténtalo de nuevo.");
    } finally {
      setLoading(false);
    }
  };

  const submitLink = async (e: React.FormEvent) => {
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
      if (data.ok) setSent(true);
      else setError(data.error || "No hemos encontrado tu cuenta. Contacta con tu gestor.");
    } catch {
      setError("Error de conexión. Inténtalo de nuevo.");
    } finally {
      setLoading(false);
    }
  };

  const inputCls = "w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary-400";
  const btnCls = "w-full bg-accent-500 hover:bg-accent-600 text-white py-3 rounded-xl font-bold text-sm transition-colors disabled:opacity-50";

  return (
    <div className="min-h-screen bg-primary-600 flex items-center justify-center px-4">
      <div className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-sm">
        <div className="text-center mb-6">
          <Image src="/logo.png" alt="Mkt Web 360" width={160} height={45} className="mx-auto mb-6" />
          <h1 className="text-xl font-bold text-primary-600 mb-1">Portal de cliente</h1>
          <p className="text-sm text-gray-500">Accede a tus informes, tareas y tickets</p>
        </div>

        {sent ? (
          <div className="text-center">
            <div className="text-4xl mb-4">📬</div>
            <h2 className="font-bold text-primary-600 mb-2">Enlace enviado</h2>
            <p className="text-sm text-gray-500">
              Si <strong>{email}</strong> tiene acceso, recibirás un enlace para entrar. Revisa tu bandeja de entrada.
            </p>
            <p className="text-xs text-gray-400 mt-4">¿No lo ves? Revisa la carpeta de spam.</p>
            <button onClick={() => { setSent(false); setMode("password"); }} className="mt-4 text-xs text-primary-600 underline">Volver</button>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-2 gap-1 rounded-xl bg-gray-100 p-1 mb-5 text-xs font-semibold">
              <button type="button" onClick={() => { setMode("password"); setError(""); }} className={`rounded-lg py-2 ${mode === "password" ? "bg-white text-primary-600 shadow" : "text-gray-500"}`}>Con contraseña</button>
              <button type="button" onClick={() => { setMode("link"); setError(""); }} className={`rounded-lg py-2 ${mode === "link" ? "bg-white text-primary-600 shadow" : "text-gray-500"}`}>Enlace por correo</button>
            </div>
            <form onSubmit={mode === "password" ? submitPassword : submitLink} className="space-y-4">
              <div>
                <label htmlFor="portal-email" className="block text-xs font-semibold text-gray-600 mb-1.5">Email</label>
                <input id="portal-email" type="email" autoComplete="username" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="tu@empresa.com" className={inputCls} autoFocus />
              </div>
              {mode === "password" && (
                <div>
                  <label htmlFor="portal-password" className="block text-xs font-semibold text-gray-600 mb-1.5">Contraseña</label>
                  <input id="portal-password" type="password" autoComplete="current-password" value={password} onChange={(e) => setPassword(e.target.value)} className={inputCls} />
                </div>
              )}
              {error && <p className="text-xs text-red-500 bg-red-50 px-3 py-2 rounded-lg">{error}</p>}
              <button type="submit" disabled={loading} className={btnCls}>
                {loading ? (mode === "password" ? "Entrando..." : "Enviando...") : mode === "password" ? "Entrar →" : "Enviarme el enlace →"}
              </button>
              <p className="text-xs text-gray-400 text-center leading-relaxed">
                {mode === "password"
                  ? "¿No tienes contraseña o la has olvidado? Usa «Enlace por correo» o pídesela a tu gestor."
                  : "Te enviaremos un enlace de un solo uso, válido 30 minutos."}
              </p>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
