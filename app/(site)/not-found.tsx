import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Página no encontrada — Mkt Web 360",
};

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center px-4">
      <div className="text-center">
        <p className="text-8xl font-bold text-primary-100 mb-4">404</p>
        <h1 className="text-2xl font-bold text-primary-600 mb-4">Página no encontrada</h1>
        <p className="text-gray-600 mb-8">La página que buscas no existe o ha sido movida.</p>
        <Link href="/" className="bg-accent-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-accent-600 transition-colors">
          Volver al inicio
        </Link>
      </div>
    </div>
  );
}
