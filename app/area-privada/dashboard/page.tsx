import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Panel Interno — Mkt Web 360",
  robots: { index: false, follow: false },
};

export default function AdminDashboard() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-primary-600 text-white px-6 py-4 flex items-center justify-between">
        <div>
          <p className="text-xs text-primary-300 uppercase tracking-widest font-semibold">Área privada</p>
          <h1 className="text-lg font-bold">Mkt Web 360 — Panel interno</h1>
        </div>
        <a href="/api/admin/logout" className="text-xs text-primary-300 hover:text-white transition-colors">
          Cerrar sesión
        </a>
      </header>
      <main className="max-w-4xl mx-auto px-4 py-10">
        <h2 className="text-xl font-bold text-primary-600 mb-6">Ofertas activas</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Link href="/area-privada/leads/seo-6x3" className="bg-white rounded-2xl p-6 border-2 border-primary-100 hover:border-primary-400 transition-colors group">
            <div className="flex items-center justify-between mb-3">
              <span className="text-2xl">📈</span>
              <span className="text-xs font-bold bg-accent-100 text-accent-600 px-2 py-0.5 rounded-full">Activa</span>
            </div>
            <h3 className="font-bold text-primary-600 group-hover:text-accent-500 transition-colors mb-1">SEO 6x3</h3>
            <p className="text-gray-500 text-sm">Formulario guiado para la llamada de cualificación</p>
          </Link>
          <div className="bg-white rounded-2xl p-6 border-2 border-gray-100 opacity-50">
            <div className="flex items-center justify-between mb-3">
              <span className="text-2xl">🛒</span>
              <span className="text-xs font-bold bg-gray-100 text-gray-400 px-2 py-0.5 rounded-full">Próximamente</span>
            </div>
            <h3 className="font-bold text-gray-400 mb-1">Tienda online 490€</h3>
            <p className="text-gray-400 text-sm">Formulario guiado — en desarrollo</p>
          </div>
        </div>
      </main>
    </div>
  );
}
