import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Solicitud recibida — Mkt Web 360",
  robots: { index: false, follow: false },
};

export default function GraciasWebSeoPage() {
  return (
    <section className="min-h-[80vh] flex items-center justify-center px-4 py-16 bg-gray-50">
      <div className="max-w-lg w-full text-center">
        <div className="w-20 h-20 rounded-full bg-[#1e3a5f]/10 flex items-center justify-center mx-auto mb-6">
          <span className="text-4xl">📬</span>
        </div>
        <h1 className="text-3xl font-bold text-[#1e3a5f] mb-3">Solicitud recibida</h1>
        <p className="text-gray-500 text-lg mb-8 leading-relaxed">
          Hemos recibido tu solicitud para la oferta Web + SEO.<br />
          Te contactamos en <strong className="text-gray-700">menos de 24 horas</strong>.
        </p>
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 text-left mb-8">
          <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">Qué pasa ahora</p>
          <ol className="space-y-4">
            {[
              { n: "1", t: "Revisamos tu caso", d: "Analizamos tu sector, situación y objetivos antes de llamarte." },
              { n: "2", t: "Te llamamos en menos de 24h", d: "Una llamada rápida para aclarar dudas y confirmar que encaja." },
              { n: "3", t: "Web lista en 48-72h", d: "Si decides avanzar, tu web y correo estarán funcionando en pocos días." },
            ].map(paso => (
              <li key={paso.n} className="flex gap-4">
                <span className="w-7 h-7 rounded-full bg-[#f97316] text-white text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">{paso.n}</span>
                <div>
                  <p className="font-semibold text-gray-800 text-sm">{paso.t}</p>
                  <p className="text-gray-400 text-xs mt-0.5 leading-relaxed">{paso.d}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
        <p className="text-gray-400 text-sm mb-4">¿Prefieres hablar ahora mismo?</p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <a href="tel:+34622748987" className="flex items-center justify-center gap-2 bg-[#1e3a5f] hover:bg-[#1e3a5f]/90 text-white font-bold px-6 py-3 rounded-full text-sm transition-colors">📞 Llamar ahora</a>
          <a href="https://wa.me/34696714760?text=Hola%2C%20acabo%20de%20solicitar%20informaci%C3%B3n%20sobre%20la%20oferta%20Web%20%2B%20SEO" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white font-bold px-6 py-3 rounded-full text-sm transition-colors">💬 WhatsApp</a>
        </div>
        <div className="mt-8">
          <Link href="/" className="text-sm text-gray-400 hover:text-[#1e3a5f] transition-colors">← Volver a la web</Link>
        </div>
      </div>
    </section>
  );
}
