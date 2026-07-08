import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { OfertaVeranoForm } from "@/components/OfertaVeranoForm";

export const metadata: Metadata = {
  title: "Paquete SEO + GEO + GBP al 50% — Oferta Verano 2026 | Mkt Web 360",
  description: "Posiciónate en Google, en ChatGPT y en Google Maps antes de septiembre. Paquete completo SEO + GEO + GBP desde 349€/mes. Solo julio y agosto. 5 plazas.",
  alternates: { canonical: "https://www.mktweb360.com/landing/seo-geo-gbp-verano/" },
  robots: { index: false, follow: false },
};

const WA = "https://wa.me/34696714760?text=Hola,%20me%20interesa%20el%20paquete%20SEO+GEO+GBP";

const FEATURES = [
  {
    icon: "🔍",
    title: "SEO — Google",
    desc: "Posicionamiento orgánico en Google. Auditoría técnica, keywords, contenido optimizado e informes mensuales. Tu web en los primeros resultados cuando te buscan.",
  },
  {
    icon: "🤖",
    title: "GEO — Inteligencia Artificial",
    desc: "Aparece en ChatGPT, Gemini y Perplexity. El 94% de los compradores B2B consultan IA antes de elegir proveedor. Sé la respuesta que dan los modelos de IA sobre tu sector.",
  },
  {
    icon: "📍",
    title: "GBP — Google Maps",
    desc: "Optimización completa de tu ficha de Google Business Profile. Más reseñas, más visibilidad local, más llamadas. Los clientes de tu zona te encontrarán antes que a tu competencia.",
  },
];

export default function LandingSeoGeoGbpVeranoPage() {
  return (
    <main id="top" className="min-h-screen bg-white">

      {/* HEADER MÍNIMO */}
      <header className="bg-white border-b border-gray-100 py-4 px-4">
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          <Image src="/logo.png" alt="Mkt Web 360" width={150} height={42} priority />
          <a href="tel:+34622748987" className="text-primary-700 text-sm font-semibold hover:text-accent-500 transition-colors">
            📞 622 74 89 87
          </a>
        </div>
      </header>

      {/* BANNER URGENCIA */}
      <div className="bg-accent-500 py-2.5 px-4 text-center">
        <p className="text-white text-sm font-semibold">
          🌞 Oferta julio-agosto · <strong>Solo 5 plazas</strong> · <strong>349€/mes en lugar de 699€</strong>
        </p>
      </div>

      {/* HERO + FORMULARIO */}
      <section className="bg-gradient-to-br from-primary-700 to-primary-900 text-white py-12 md:py-20 px-4">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-start">

          {/* COPY IZQUIERDA */}
          <div>
            <span className="inline-block bg-accent-500 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest mb-5">
              Oferta julio-agosto · Solo 5 plazas
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-5 leading-tight">
              Prepara tu septiembre ahora
            </h1>
            <p className="text-xl text-primary-200 mb-6 leading-relaxed">
              Mientras tu competencia descansa, tú te posicionas en Google, en la IA y en el mapa.
            </p>

            {/* BLOQUE PRECIO */}
            <div className="bg-white/10 rounded-2xl px-5 py-4 mb-6 inline-block">
              <div className="flex items-baseline gap-3">
                <span className="text-primary-300 line-through text-xl">699 €/mes</span>
                <span className="text-accent-400 text-4xl font-bold">349 €/mes</span>
              </div>
              <p className="text-primary-200 text-xs mt-1">Solo julio y agosto · Precio real de mercado: 699€/mes</p>
            </div>

            {/* WHATSAPP */}
            <div>
              <a
                href={WA}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white font-bold px-6 py-3 rounded-full transition-colors shadow-lg text-sm"
              >
                <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 2.124.558 4.121 1.532 5.856L.054 23.486a.5.5 0 0 0 .609.61l5.7-1.494A11.954 11.954 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 0 1-5.013-1.374l-.36-.214-3.733.979.995-3.638-.235-.374A9.818 9.818 0 1 1 12 21.818z"/>
                </svg>
                Prefiero hablar por WhatsApp
              </a>
              <p className="text-primary-300 text-xs mt-2 ml-1">Respuesta en menos de 1 hora en horario laboral</p>
            </div>
          </div>

          {/* FORMULARIO DERECHA */}
          <div className="bg-white rounded-2xl p-6 shadow-2xl">
            <p className="text-center text-sm font-semibold text-primary-600 mb-1">Reserva tu plaza ahora</p>
            <p className="text-center text-xs text-gray-400 mb-5">Sin compromiso. Te contactamos en menos de 24 horas.</p>
            <OfertaVeranoForm />
          </div>

        </div>
      </section>

      {/* COPY URGENCIA / VUELTA AL COLE */}
      <section className="py-14 px-4 bg-gray-50">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-primary-600 mb-4">Septiembre es la vuelta al cole del mundo empresarial</h2>
          <p className="text-gray-600 leading-relaxed">
            Presupuestos aprobados, decisiones tomadas, proveedores elegidos. Si empiezas el SEO en septiembre,
            estarás posicionado en marzo. <strong className="text-primary-700">Si empiezas ahora, en septiembre ya eres visible.</strong>
          </p>
        </div>
      </section>

      {/* QUÉ INCLUYE — 3 COLUMNAS */}
      <section className="py-14 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-primary-600 text-center mb-2">Qué incluye el paquete</h2>
          <p className="text-center text-gray-500 text-sm mb-10">Tres frentes de visibilidad, un solo equipo.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {FEATURES.map((f) => (
              <div key={f.title} className="rounded-2xl border border-gray-100 shadow-sm p-6">
                <span className="text-4xl block mb-4">{f.icon}</span>
                <h3 className="font-bold text-gray-800 text-lg mb-3">{f.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECCIÓN ESCASEZ / 5 PLAZAS */}
      <section className="py-14 px-4 bg-primary-900 text-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-5">5 plazas este verano — y tiene una razón</h2>
          <p className="text-primary-200 leading-relaxed">
            Cada nuevo cliente requiere entre <strong className="text-white">40 y 60 horas de trabajo</strong> en el primer mes.
            Limitamos las incorporaciones para garantizar esa dedicación completa a cada proyecto.
            <br className="hidden md:block" />
            <strong className="text-accent-400"> Si estás leyendo esto, hay plazas. Mañana puede que no.</strong>
          </p>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="py-14 px-4 bg-primary-600 text-white text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold mb-3">¿Reservamos tu plaza?</h2>
          <p className="text-primary-200 mb-6 text-sm">Quedan 5 plazas a 349€/mes. Cuando se cubran, la oferta cierra.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#top"
              className="bg-accent-500 hover:bg-accent-600 text-white font-bold px-8 py-4 rounded-full transition-colors shadow-lg"
            >
              Quiero mi plaza →
            </a>
            <a
              href={WA}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white font-bold px-8 py-4 rounded-full transition-colors shadow-lg"
            >
              Prefiero hablar por WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER MÍNIMO */}
      <footer className="bg-primary-900 py-5 px-4 text-center">
        <p className="text-primary-400 text-xs">
          © 2026 Mkt Web 360 ·{" "}
          <a href="mailto:info@mktweb360.com" className="hover:text-white transition-colors">info@mktweb360.com</a>
          {" · "}
          <a href="tel:+34622748987" className="hover:text-white transition-colors">+34 622 74 89 87</a>
          {" · "}
          <Link href="/politica-de-privacidad/" className="hover:text-white transition-colors">Política de privacidad</Link>
        </p>
      </footer>

    </main>
  );
}
