import type { Metadata } from "next";
import Link from "next/link";
import { OfertaSeoForm } from "@/components/OfertaSeoForm";
import { Breadcrumbs } from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Oferta SEO 6x3 — 6 Meses de Posicionamiento por el Precio de 3 | Mkt Web 360",
  description: "Oferta limitada: 6 meses de SEO profesional por el precio de 3. Solo 5 plazas este mes. Comprueba si tu dominio cumple los requisitos.",
  alternates: { canonical: "https://www.mktweb360.com/oferta-seo/" },
  robots: { index: true, follow: true },
  openGraph: {
    title: "Oferta SEO 6x3 — Mkt Web 360",
    description: "6 meses de posicionamiento web por el precio de 3. Plazas limitadas. Comprueba si tu dominio cumple los requisitos.",
    url: "https://www.mktweb360.com/oferta-seo/",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "¿Qué incluye la oferta SEO 6x3?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "6 meses completos de servicio SEO profesional: auditoría técnica, investigación de keywords, optimización on-page, creación de contenido, seguimiento de posiciones e informes mensuales.",
      },
    },
    {
      "@type": "Question",
      name: "¿Cuándo se verán resultados?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Los primeros movimientos de posiciones suelen verse entre el mes 2 y el mes 3. Tráfico orgánico real y consistente, entre el mes 4 y el mes 6.",
      },
    },
    {
      "@type": "Question",
      name: "¿Para qué tipo de negocio es esta oferta?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Para cualquier negocio con web propia que quiera aparecer en Google. Tanto si nunca has trabajado el SEO como si lo has intentado sin resultados.",
      },
    },
    {
      "@type": "Question",
      name: "¿Por qué solo 5 plazas?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Cada cuenta recibe atención directa de un responsable. Para mantener la calidad del trabajo y los resultados, limitamos el número de incorporaciones por mes.",
      },
    },
    {
      "@type": "Question",
      name: "¿En qué se diferencia de lo que ya contraté y no funcionó?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Trabajo real con métricas verificables desde el mes 1. Tus datos de Google Search Console y GA4 siempre son tuyos. Sin informes opacos ni promesas sin respaldo.",
      },
    },
  ],
};

const INCLUDES = [
  "Auditoría técnica completa del dominio",
  "Investigación de keywords por sector y zona",
  "Optimización on-page de las páginas principales",
  "Creación de contenido SEO mensual",
  "Seguimiento semanal de posiciones",
  "Informe mensual con métricas reales",
  "Acceso a Google Search Console y GA4 — siempre tuyos",
  "Contacto directo con tu responsable de cuenta",
];

export default function OfertaSeoPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* HERO */}
      <section className="bg-gradient-to-br from-primary-700 to-primary-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center opacity-20" style={{ backgroundImage: "url(/hero-slide-2.jpg)" }} />
        <div className="relative z-10 max-w-5xl mx-auto px-4 py-16 md:py-24">
          <Breadcrumbs crumbs={[{ label: "Inicio", href: "/" }, { label: "Oferta SEO 6x3" }]} />
          <div className="max-w-3xl mt-4">
            <div className="flex items-center gap-3 mb-6">
              <span className="inline-block bg-accent-500 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest">Oferta especial junio</span>
              <span className="inline-block bg-white/10 text-white text-xs font-semibold px-3 py-1 rounded-full">Solo 5 plazas</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              6 meses de SEO<br />
              <span className="text-accent-400">por el precio de 3</span>
            </h1>
            <p className="text-xl text-primary-200 mb-4 leading-relaxed">
              Posicionamiento web profesional durante 6 meses completos. Trabajo real, métricas reales, resultados verificables.
            </p>
            <p className="text-primary-300 text-sm italic mb-8">
              Esta oferta no está disponible en nuestra tarifa habitual. Es una campaña limitada para incorporar nuevas cuentas este mes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#elegibilidad"
                className="bg-accent-500 text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-accent-600 transition-colors text-center shadow-lg shadow-accent-900/20"
              >
                Solicitar información →
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
            { value: "6 meses", label: "de trabajo SEO completo" },
            { value: "Solo 5", label: "plazas disponibles este mes" },
            { value: "48h", label: "para arrancar tras la firma" },
            { value: "100%", label: "tus datos, siempre tuyos" },
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
          ⏳ Quedan <strong>5 plazas disponibles</strong> · La oferta cierra el <strong>30 de junio de 2026</strong>
        </p>
      </div>

      {/* QUÉ INCLUYE */}
      <section id="incluye" className="py-16 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-primary-600 mb-4">Qué incluye la oferta</h2>
            <p className="text-gray-500 max-w-2xl mx-auto">6 meses de trabajo SEO real. No prometemos posiciones — prometemos el trabajo que las genera.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
            {INCLUDES.map((item) => (
              <div key={item} className="flex items-center gap-3 bg-white rounded-xl px-5 py-4 shadow-sm border border-gray-100">
                <span className="text-accent-500 font-bold shrink-0">✓</span>
                <span className="text-gray-700 text-sm">{item}</span>
              </div>
            ))}
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
            <h3 className="font-bold text-primary-600 mb-6 text-center">Cómo se distribuye el trabajo</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                { periodo: "Mes 1", titulo: "Base y diagnóstico", color: "bg-primary-600", items: ["Auditoría técnica completa", "Mapa de keywords", "Optimización on-page principal", "Configuración de métricas"] },
                { periodo: "Meses 2-3", titulo: "Construcción", color: "bg-primary-500", items: ["Contenido SEO mensual", "Optimización de páginas secundarias", "Google Business Profile", "Primer informe de evolución"] },
                { periodo: "Meses 4-6", titulo: "Consolidación", color: "bg-accent-500", items: ["Link building ético", "Optimización de posiciones 10-20", "Análisis de conversión", "Informe mensual acumulado"] },
              ].map((fase) => (
                <div key={fase.periodo} className="rounded-xl overflow-hidden border border-gray-100">
                  <div className={`${fase.color} text-white px-4 py-3`}>
                    <p className="text-xs font-bold uppercase tracking-widest opacity-80">{fase.periodo}</p>
                    <p className="font-bold">{fase.titulo}</p>
                  </div>
                  <div className="p-4">
                    <ul className="space-y-2">
                      {fase.items.map((i) => (
                        <li key={i} className="flex items-start gap-2 text-xs text-gray-600">
                          <span className="text-accent-500 shrink-0 mt-0.5">→</span>
                          <span>{i}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PARA QUIÉN ES */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-primary-600 mb-4">¿Esta oferta es para ti?</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-primary-50 rounded-2xl p-6 border border-primary-100">
              <h3 className="font-bold text-primary-600 mb-4">✅ Encaja si...</h3>
              <ul className="space-y-3">
                {["Tienes web propia y quieres que Google te encuentre","Nunca has trabajado el SEO de tu web","Has trabajado el SEO pero no has visto resultados reales","Quieres clientes que te buscan, no solo los que ya te conocen","Puedes comprometerte 6 meses y quieres hacerlo bien"].map((i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                    <span className="text-accent-500 shrink-0 mt-0.5">✓</span><span>{i}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
              <h3 className="font-bold text-gray-500 mb-4">❌ No encaja si...</h3>
              <ul className="space-y-3">
                {["No tienes web propia todavía","Buscas resultados en menos de 2 meses","No puedes facilitar acceso a tu web y herramientas","Quieres garantía de posiciones concretas en Google"].map((i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-gray-500">
                    <span className="shrink-0 mt-0.5">✗</span><span>{i}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>


      {/* Por qué 6 meses */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-primary-600 mb-6">Por qué el SEO necesita al menos 6 meses para dar resultados reales</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            El SEO no es publicidad de pago. No hay un botón que active el tráfico orgánico inmediatamente. Google necesita tiempo para rastrear los cambios, evaluar la relevancia del contenido y determinar en qué posición debe aparecer tu web para cada búsqueda. Este proceso tiene fases: las primeras semanas son de diagnóstico y base técnica, los primeros meses de construcción de contenido y autoridad, y los últimos meses de consolidación y optimización de posiciones.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Las agencias que prometen resultados en 30 días o te garantizan posiciones concretas mienten o trabajan con técnicas que Google penaliza. El SEO real y sostenible requiere entre 4 y 6 meses para generar tráfico orgánico consistente, dependiendo del sector, la competencia y el estado actual de tu dominio.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Esta oferta existe porque 6 meses es exactamente el tiempo mínimo necesario para hacer el trabajo bien y ver resultados verificables. Lo que ofrecemos es ese trabajo completo — auditoría, optimización, contenido, seguimiento e informes — a la mitad del precio habitual, para facilitar el acceso a empresas que quieren hacer las cosas bien sin asumir un compromiso económico de entrada excesivo.
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
      <section id="elegibilidad" className="py-16 px-4 bg-primary-600 text-white">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <span className="inline-block bg-accent-500 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest mb-4">Paso 1 de 2</span>
            <h2 className="text-3xl font-bold mb-4">Comprueba si tu dominio cumple los requisitos</h2>
            <p className="text-primary-200">Rellena este formulario en menos de 2 minutos. Analizamos tu caso y te contactamos en menos de 24 horas.</p>
          </div>
          <div className="bg-white rounded-2xl p-8">
            <OfertaSeoForm />
          </div>
          <p className="text-center text-primary-300 text-xs mt-4">
            No es un formulario de contacto genérico. Analizamos tu dominio antes de llamarte.
          </p>
        </div>
      </section>
    </>
  );
}
