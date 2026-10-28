import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Panel Interno",
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
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-primary-600">Ofertas activas</h2>
          <Link href="/area-privada/leads" className="bg-primary-600 hover:bg-primary-700 text-white text-xs font-bold px-4 py-2 rounded-xl transition-colors">📋 Ver leads CRM</Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Link href="/area-privada/leads/tienda-online" className="bg-white rounded-2xl p-6 border-2 border-primary-100 hover:border-primary-400 transition-colors group">
            <div className="flex items-center justify-between mb-3">
              <span className="text-2xl">🛒</span>
              <span className="text-xs font-bold bg-accent-100 text-accent-600 px-2 py-0.5 rounded-full">Activa</span>
            </div>
            <h3 className="font-bold text-primary-600 group-hover:text-accent-500 transition-colors mb-1">Tienda online 490€</h3>
            <p className="text-gray-500 text-sm">Formulario guiado para la llamada de cualificación</p>
          </Link>
          <Link href="/area-privada/metodologia-seo" className="bg-white rounded-2xl p-6 border-2 border-primary-100 hover:border-primary-400 transition-colors group">
            <div className="flex items-center justify-between mb-3">
              <span className="text-2xl">📋</span>
              <span className="text-xs font-bold bg-accent-100 text-accent-600 px-2 py-0.5 rounded-full">Interno</span>
            </div>
            <h3 className="font-bold text-primary-600 group-hover:text-accent-500 transition-colors mb-1">Plan de trabajo SEO</h3>
            <p className="text-gray-500 text-sm">Referencia operativa por escenario — virgen e historial</p>
          </Link>
        </div>
      </main>
    </div>
  );
}
