"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function AdminLoginPage() {
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    const res = await fetch("/api/admin/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ user, pass }),
    });
    if (res.ok) {
      router.push("/area-privada/dashboard");
    } else {
      setError("Usuario o contraseña incorrectos");
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-primary-600 flex items-center justify-center px-4">
      <div className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-sm">
        <div className="text-center mb-8">
          <Image src="/logo.svg" alt="Mkt Web 360" width={140} height={40} className="mx-auto mb-4" />
          <p className="text-gray-500 text-sm">Área privada — solo personal autorizado</p>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">Usuario</label>
            <input
              type="text"
              value={user}
              onChange={(e) => setUser(e.target.value)}
              className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary-400"
              placeholder="Usuario"
              required
              autoComplete="username"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">Contraseña</label>
            <input
              type="password"
              value={pass}
              onChange={(e) => setPass(e.target.value)}
              className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary-400"
              placeholder="Contraseña"
              required
              autoComplete="current-password"
            />
          </div>
          {error && <p className="text-red-500 text-sm text-center">{error}</p>}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-primary-600 text-white py-3 rounded-xl font-bold hover:bg-primary-700 transition-colors disabled:opacity-50"
          >
            {loading ? "Entrando..." : "Entrar"}
          </button>
        </form>
      </div>
    </div>
  );
}
