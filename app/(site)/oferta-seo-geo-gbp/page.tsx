import type { Metadata } from "next";
import { OfertaVeranoForm } from "@/components/OfertaVeranoForm";
import { Breadcrumbs } from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Paquete SEO + GEO + GBP al 50% — Oferta Verano 2026 | Mkt Web 360",
  description: "Posiciónate en Google, en ChatGPT y en Google Maps antes de septiembre. Paquete completo SEO + GEO + GBP desde 349€/mes. Solo julio y agosto. 5 plazas disponibles.",
  alternates: { canonical: "https://www.mktweb360.com/oferta-seo-geo-gbp/" },
  robots: { index: true, follow: true },
  openGraph: {
    title: "Paquete SEO + GEO + GBP al 50% — Oferta Verano 2026",
    description: "SEO + IA + Google Maps desde 349€/mes. Posiciónate en Google, ChatGPT y el mapa antes de septiembre. Solo julio y agosto, 5 plazas.",
    url: "https://www.mktweb360.com/oferta-seo-geo-gbp/",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "¿Qué incluye el paquete SEO + GEO + GBP?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Tres frentes de visibilidad en un solo servicio: SEO (posicionamiento orgánico en Google con auditoría técnica, keywords, contenido e informes mensuales), GEO (aparecer en respuestas de ChatGPT, Gemini y Perplexity) y GBP (optimización completa de tu ficha de Google Business Profile para Google Maps).",
      },
    },
    {
      "@type": "Question",
      name: "¿Por qué 349€/mes en lugar de 699€?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Es una oferta de verano limitada a julio y agosto. El precio real de mercado del paquete completo es 699€/mes. Durante el verano lo ofrecemos al 50% para incorporar nuevas cuentas antes de la temporada alta de septiembre.",
      },
    },
    {
      "@type": "Question",
      name: "¿Por qué empezar en verano y no en septiembre?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Septiembre es la vuelta al cole del mundo empresarial: presupuestos aprobados y decisiones tomadas. El SEO y el GEO tardan meses en dar resultados. Si empiezas en septiembre, estarás posicionado en marzo. Si empiezas ahora, en septiembre ya eres visible.",
      },
    },
    {
      "@type": "Question",
      name: "¿Qué es GEO y por qué importa?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "GEO (Generative Engine Optimization) es la optimización para que los modelos de IA como ChatGPT, Gemini y Perplexity te citen como respuesta. El 94% de los compradores B2B consultan IA antes de elegir proveedor, así que aparecer ahí es tan importante como aparecer en Google.",
      },
    },
    {
      "@type": "Question",
      name: "¿Por qué solo 5 plazas?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Cada nuevo cliente requiere entre 40 y 60 horas de trabajo en el primer mes. Limitamos las incorporaciones para garantizar esa dedicación completa a cada proyecto.",
      },
    },
  ],
};

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

export default function OfertaSeoGeoGbpPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* HERO */}
      <section className="bg-gradient-to-br from-primary-700 to-primary-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center opacity-20" style={{ backgroundImage: "url(/hero-slide-1.jpg)" }} />
        <div className="relative z-10 max-w-5xl mx-auto px-4 py-16 md:py-24">
          <Breadcrumbs crumbs={[{ label: "Inicio", href: "/" }, { label: "Oferta Verano SEO + GEO + GBP" }]} />
          <div className="max-w-3xl mt-4">
            <div className="flex items-center gap-3 mb-6">
              <span className="inline-block bg-accent-500 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest">Oferta julio-agosto</span>
              <span className="inline-block bg-white/10 text-white text-xs font-semibold px-3 py-1 rounded-full">Solo 5 plazas</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Prepara tu septiembre ahora
            </h1>
            <p className="text-xl text-primary-200 mb-6 leading-relaxed">
              Mientras tu competencia descansa, tú te posicionas en Google, en la IA y en el mapa.
              Paquete completo SEO + GEO + GBP al 50% del precio de mercado.
            </p>

            {/* BLOQUE PRECIO */}
            <div className="bg-white/10 rounded-2xl px-5 py-4 mb-8 inline-block">
              <div className="flex items-baseline gap-3">
                <span className="text-primary-300 line-through text-xl">699 €/mes</span>
                <span className="text-accent-400 text-4xl font-bold">349 €/mes</span>
              </div>
              <p className="text-primary-200 text-xs mt-1">Solo julio y agosto · Precio real de mercado: 699€/mes</p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#reservar"
                className="bg-accent-500 text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-accent-600 transition-colors text-center shadow-lg shadow-accent-900/20"
              >
                Quiero mi plaza →
              </a>
              <a
                href="#incluye"
                className="border border-white/40 text-white/80 px-7 py-4 rounded-full font-medium text-base hover:bg-white/10 transition-colors text-center"
              >
                Ver qué incluye
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST BAR */}
      <section className="bg-primary-600 py-5 px-4">
        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 text-center text-white">
          {[
            { value: "Google", label: "SEO orgánico" },
            { value: "IA", label: "ChatGPT · Gemini · Perplexity" },
            { value: "Maps", label: "ficha local optimizada" },
            { value: "Solo 5", label: "plazas este verano" },
          ].map((m) => (
            <div key={m.label}>
              <div className="text-lg font-bold text-accent-400">{m.value}</div>
              <div className="text-xs text-primary-200 mt-1">{m.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* BANNER URGENCIA */}
      <div className="bg-accent-500 py-3 px-4 text-center">
        <p className="text-white text-sm font-semibold">
          🌞 Oferta julio-agosto · <strong>349€/mes en lugar de 699€</strong> · <strong>Solo 5 plazas</strong>
        </p>
      </div>

      {/* QUÉ INCLUYE */}
      <section id="incluye" className="py-16 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-primary-600 mb-4">Qué incluye el paquete</h2>
            <p className="text-gray-500 max-w-2xl mx-auto">Tres frentes de visibilidad, un solo equipo. Google, la IA y el mapa trabajando para ti a la vez.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {FEATURES.map((f) => (
              <div key={f.title} className="rounded-2xl border border-gray-100 bg-white shadow-sm p-6">
                <span className="text-4xl block mb-4">{f.icon}</span>
                <h3 className="font-bold text-gray-800 text-lg mb-3">{f.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* POR QUÉ AHORA */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-primary-600 mb-6">Septiembre es la vuelta al cole del mundo empresarial</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Presupuestos aprobados, decisiones tomadas, proveedores elegidos. En septiembre el mercado se pone en marcha
            de golpe — y para entonces, o ya eres visible o llegas tarde.
          </p>
          <p className="text-gray-700 leading-relaxed">
            El SEO y el GEO no son publicidad de pago: tardan meses en dar resultados. Si empiezas el SEO en septiembre,
            estarás posicionado en marzo. <strong className="text-primary-700">Si empiezas ahora, en septiembre ya eres visible.</strong>
          </p>
        </div>
      </section>

      {/* ESCASEZ */}
      <section className="py-16 px-4 bg-primary-900 text-white">
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

      {/* FAQ */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-primary-600 mb-4">Preguntas frecuentes</h2>
          </div>
          <div className="space-y-4">
            {faqSchema.mainEntity.map((faq) => (
              <div key={faq.name} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                <h3 className="font-bold text-primary-600 mb-2">{faq.name}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{faq.acceptedAnswer.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FORMULARIO */}
      <section id="reservar" className="py-16 px-4 bg-primary-600 text-white">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <span className="inline-block bg-accent-500 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest mb-4">Solo 5 plazas</span>
            <h2 className="text-3xl font-bold mb-4">Reserva tu plaza este verano</h2>
            <p className="text-primary-200">Rellena el formulario en menos de 2 minutos. Te contactamos en menos de 24 horas para arrancar antes de septiembre.</p>
          </div>
          <div className="bg-white rounded-2xl p-8">
            <OfertaVeranoForm />
          </div>
        </div>
      </section>
    </>
  );
}
