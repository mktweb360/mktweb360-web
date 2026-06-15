import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Solicitud recibida — Mkt Web 360",
  robots: { index: false, follow: false },
};

export default function GraciasPage() {
  return (
    <section className="min-h-[80vh] flex items-center justify-center px-4 py-16 bg-gray-50">
      <div className="max-w-lg w-full text-center">
        <div className="w-20 h-20 rounded-full bg-primary-50 border-2 border-primary-100 flex items-center justify-center mx-auto mb-6">
          <span className="text-4xl">📬</span>
        </div>
        <h1 className="text-3xl font-bold text-primary-600 mb-3">Solicitud recibida</h1>
        <p className="text-gray-500 text-lg mb-8 leading-relaxed">
          Hemos recibido tu solicitud para la oferta SEO 6x3.
          Te contactamos en <strong className="text-gray-700">menos de 24 horas</strong> con los resultados del análisis de tu dominio.
        </p>
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 text-left mb-8">
          <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">Qué pasa ahora</p>
          <ol className="space-y-4">
            {[
              { n: "1", titulo: "Analizamos tu dominio", desc: "Revisamos tu web, tu situación SEO actual y si la oferta encaja con tu caso." },
              { n: "2", titulo: "Te llamamos en menos de 24h", desc: "Una llamada de 15-20 minutos para explicarte el plan concreto para tu negocio." },
              { n: "3", titulo: "Propuesta y arranque", desc: "Si encaja, te enviamos el acuerdo y arrancamos la auditoría en 48 horas." },
            ].map((paso) => (
              <li key={paso.n} className="flex gap-4">
                <span className="w-7 h-7 rounded-full bg-accent-500 text-white text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">{paso.n}</span>
                <div>
                  <p className="font-semibold text-gray-800 text-sm">{paso.titulo}</p>
                  <p className="text-gray-400 text-xs mt-0.5 leading-relaxed">{paso.desc}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
        <p className="text-gray-400 text-sm mb-4">¿Prefieres hablar ahora mismo?</p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <a href="tel:+34622748897" className="flex items-center justify-center gap-2 bg-primary-600 hover:bg-primary-700 text-white font-bold px-6 py-3 rounded-full text-sm transition-colors">
            📞 Llamar ahora
          </a>
          <a href="https://wa.me/34622748897?text=Hola%2C%20acabo%20de%20enviar%20mi%20solicitud%20para%20la%20oferta%20SEO%206x3" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white font-bold px-6 py-3 rounded-full text-sm transition-colors">
            💬 WhatsApp
          </a>
        </div>
        <div className="mt-8">
          <Link href="/" className="text-sm text-gray-400 hover:text-primary-600 transition-colors">← Volver a la web</Link>
        </div>
      </div>
    </section>
  );
}
