import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ContactForm } from "@/components/ContactForm";

import { RelatedArticles } from "@/components/RelatedArticles";

export const metadata: Metadata = {
  title: "Posicionamiento Web SEO — Agencia SEO España",
  description:
    "Servicio profesional de SEO y posicionamiento web orgánico para empresas españolas. Auditorías, estrategia y contenidos que te llevan a la primera página de Google.",
  alternates: { canonical: "https://www.mktweb360.com/seo-posicionamiento-web-organico/" },
  openGraph: {
    title: "Posicionamiento Web SEO — Agencia SEO España | Mkt Web 360",
    description: "Posiciona tu web en Google con estrategias SEO probadas. Servicio nacional.",
    url: "https://www.mktweb360.com/seo-posicionamiento-web-organico/",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Posicionamiento Web SEO",
  provider: { "@type": "Organization", name: "Mkt Web 360 SLU", url: "https://www.mktweb360.com" },
  description: "Servicio de posicionamiento web orgánico (SEO) para empresas. Auditorías técnicas, estrategia de keywords, optimización on-page y link building.",
  areaServed: "España",
  url: "https://www.mktweb360.com/seo-posicionamiento-web-organico/",
};

const FAQS = [
  { q: "¿Qué incluye vuestro servicio SEO?", a: "Auditoría técnica inicial, investigación de palabras clave, optimización on-page, creación de contenido optimizado, link building ético, seguimiento mensual de posiciones e informe de resultados." },
  { q: "¿En cuánto tiempo se ven resultados SEO?", a: "Los primeros movimientos de posiciones suelen verse entre 2 y 4 meses. Para resultados consolidados, esperamos entre 6 y 12 meses, aunque esto depende de la competencia y el estado inicial de la web." },
  { q: "¿Trabajáis con Panda, Penguin y las actualizaciones de Google?", a: "Sí, seguimos de cerca todas las actualizaciones del algoritmo de Google y adaptamos las estrategias para estar siempre dentro de las buenas prácticas (white hat SEO)." },
  { q: "¿Hacéis SEO local y SEO nacional?", a: "Hacemos ambos. El SEO local es ideal para negocios con presencia física que quieren atraer clientes de su zona. El SEO nacional se orienta a keywords de mayor alcance geográfico." },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export default function SeoPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <div className="max-w-4xl mx-auto px-4 py-12">
        <Breadcrumbs crumbs={[{ label: "Inicio", href: "/" }, { label: "SEO Posicionamiento Web" }]} />

        <h1 className="text-4xl font-bold text-primary-600 mb-4">
          Posicionamiento Web SEO — Agencia SEO España
        </h1>
        <p className="text-xl text-gray-600 mb-8 leading-relaxed">
          Lleva tu web a las primeras posiciones de Google con estrategias SEO sólidas, éticas y orientadas a resultados. Servicio nacional para empresas de todos los sectores.
        </p>

        <section className="bg-primary-50 rounded-2xl p-8 mb-12">
          <h2 className="text-2xl font-bold text-primary-600 mb-4">¿Por qué invertir en SEO?</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            El 93% de las experiencias online comienzan con un motor de búsqueda. Si tu empresa no aparece en las primeras posiciones de Google, estás perdiendo clientes frente a tu competencia. El SEO es la inversión de marketing digital con mayor retorno a largo plazo.
          </p>
          <p className="text-gray-700 leading-relaxed">
            A diferencia de la publicidad de pago, el posicionamiento orgánico genera tráfico constante y gratuito mes tras mes. Una vez que tu web está posicionada, los resultados se mantienen y se amplían con el tiempo.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-primary-600 mb-6">Nuestra metodología SEO</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { step: "01", title: "Auditoría técnica SEO", desc: "Análisis completo de tu web: velocidad, indexación, errores técnicos, arquitectura, backlinks y competencia." },
              { step: "02", title: "Investigación de palabras clave", desc: "Identificamos las keywords con mayor potencial de tráfico y conversión para tu sector y zona geográfica." },
              { step: "03", title: "Optimización on-page", desc: "Mejoramos títulos, meta-descripciones, contenidos, estructura de URLs, enlaces internos y datos estructurados." },
              { step: "04", title: "Creación de contenido SEO", desc: "Artículos, páginas de servicio y landings optimizadas para posicionar keywords estratégicas." },
              { step: "05", title: "Link building ético", desc: "Construcción de autoridad con enlaces naturales de sitios relevantes y de calidad en tu sector." },
              { step: "06", title: "Seguimiento y reportes", desc: "Monitorizamos posiciones, tráfico y conversiones. Informe mensual con evolución y próximos pasos." },
            ].map((item) => (
              <div key={item.step} className="flex gap-4 p-4 border border-gray-200 rounded-xl">
                <span className="text-accent-500 font-bold text-2xl shrink-0">{item.step}</span>
                <div>
                  <h3 className="font-semibold text-primary-700 mb-1">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-primary-600 mb-6">Preguntas frecuentes sobre SEO</h2>
          <div className="space-y-4">
            {FAQS.map((faq) => (
              <details key={faq.q} className="border border-gray-200 rounded-xl overflow-hidden group">
                <summary className="px-6 py-4 cursor-pointer font-semibold text-primary-700 hover:bg-primary-50 list-none flex justify-between items-center">
                  {faq.q}
                  <span className="text-accent-500 group-open:rotate-180 transition-transform">▾</span>
                </summary>
                <div className="px-6 py-4 text-gray-600 border-t border-gray-100">{faq.a}</div>
              </details>
            ))}
          </div>
        </section>

        <section className="bg-primary-600 text-white rounded-2xl p-8">
          <h2 className="text-2xl font-bold mb-4">¿Quieres una auditoría SEO gratuita?</h2>
          <p className="text-primary-200 mb-6">Analizamos tu web sin compromiso y te indicamos qué mejoras te ayudarán a posicionar mejor.</p>
          <div className="bg-white rounded-xl p-6">
            <ContactForm />
          </div>
        </section>
      </div>
      <RelatedArticles category="SEO" title="Más sobre SEO y posicionamiento" />
    </>
  );
}
