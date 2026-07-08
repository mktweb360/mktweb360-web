import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "¡Tu plaza está reservada! — Mkt Web 360",
  robots: { index: false, follow: false },
};

const WA = "https://wa.me/34622748987?text=Hola,%20me%20interesa%20el%20paquete%20SEO+GEO+GBP";

export default function GraciasVeranoPage() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-16 bg-gray-50">
      <div className="max-w-lg w-full text-center">
        <div className="w-20 h-20 rounded-full bg-green-50 border-2 border-green-100 flex items-center justify-center mx-auto mb-6">
          <span className="text-4xl">✅</span>
        </div>
        <h1 className="text-3xl font-bold text-primary-600 mb-3">¡Tu plaza está reservada!</h1>
        <p className="text-gray-500 text-lg mb-8 leading-relaxed">
          Nos ponemos en contacto contigo en <strong className="text-gray-700">menos de 24 horas</strong> para
          arrancar antes de que acabe el verano.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <a
            href={WA}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white font-bold px-6 py-3 rounded-full text-sm transition-colors"
          >
            💬 Escríbenos por WhatsApp
          </a>
          <a href="tel:+34622748987" className="flex items-center justify-center gap-2 bg-primary-600 hover:bg-primary-700 text-white font-bold px-6 py-3 rounded-full text-sm transition-colors">
            📞 Llamar ahora
          </a>
        </div>
        <div className="mt-8">
          <Link href="/" className="text-sm text-gray-400 hover:text-primary-600 transition-colors">← Volver a la web</Link>
        </div>
      </div>
    </section>
  );
}
