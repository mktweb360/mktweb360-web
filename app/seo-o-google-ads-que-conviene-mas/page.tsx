import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";

import { RelatedArticles } from "@/components/RelatedArticles";

export const metadata: Metadata = {
  title: "SEO o Google Ads: qué conviene más para tu negocio en 2025",
  description:
    "Descubre si te conviene más invertir en SEO, Google Ads o una combinación de ambos según tu negocio, presupuesto y urgencia.",
  alternates: { canonical: "https://www.mktweb360.com/seo-o-google-ads-que-conviene-mas/" },
  openGraph: {
    title: "SEO o Google Ads: qué conviene más para tu negocio en 2025 | Mkt Web 360",
    description: "Descubre si te conviene más invertir en SEO, Google Ads o una combinación de ambos según tu negocio, presupuesto y urgencia.",
    url: "https://www.mktweb360.com/seo-o-google-ads-que-conviene-mas/",
    type: "article",
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "SEO o Google Ads: qué conviene más según tu negocio, presupuesto y urgencia",
  description: "Descubre si te conviene más invertir en SEO, Google Ads o una combinación de ambos según tu negocio, presupuesto y urgencia.",
  author: { "@type": "Organization", name: "Mkt Web 360 SLU" },
  publisher: { "@type": "Organization", name: "Mkt Web 360 SLU", url: "https://www.mktweb360.com" },
  datePublished: "2025-03-17",
  url: "https://www.mktweb360.com/seo-o-google-ads-que-conviene-mas/",
  mainEntityOfPage: "https://www.mktweb360.com/seo-o-google-ads-que-conviene-mas/",
};

const FAQS = [
  {
    q: "¿Es mejor SEO o Google Ads?",
    a: "Depende de tu situación. Google Ads da resultados inmediatos pero requiere inversión continua. El SEO tarda más en dar resultados pero genera tráfico constante sin coste por clic. Para la mayoría de negocios, la combinación estratégica de ambos en función del momento es la opción más rentable.",
  },
  {
    q: "¿Cuánto cuesta Google Ads para una pyme?",
    a: "Un presupuesto mínimo razonable para Google Ads en una pyme suele estar entre 300 € y 800 € mensuales en inversión publicitaria, más la gestión de la campaña. Con presupuestos muy pequeños, el alcance es limitado y es difícil obtener suficientes datos para optimizar.",
  },
  {
    q: "¿Cuánto tarda el SEO en dar resultados?",
    a: "Los primeros movimientos de posiciones suelen verse entre 2 y 4 meses. Para resultados consolidados, entre 6 y 12 meses dependiendo de la competencia del sector y el estado inicial de la web. El SEO es una inversión a largo plazo con retorno creciente.",
  },
  {
    q: "¿Puedo hacer SEO y Ads a la vez?",
    a: "Sí, y en muchos casos es la estrategia más inteligente. Ads cubre la captación inmediata mientras el SEO va construyendo posicionamiento orgánico. Con el tiempo, puedes reducir la inversión en Ads a medida que el tráfico orgánico crece.",
  },
  {
    q: "¿Qué necesito tener antes de invertir en captación?",
    a: "Antes de invertir en SEO o Ads, necesitas una web que convierta, propuesta de valor clara, seguimiento de conversiones configurado y un proceso comercial para gestionar los contactos. Sin esta base, cualquier inversión en captación amplifica resultados pobres.",
  },
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

export default function SeoOGoogleAdsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <article className="max-w-3xl mx-auto px-4 py-12">
        <Breadcrumbs crumbs={[{ label: "Inicio", href: "/" }, { label: "Blog", href: "/blog/" }, { label: "SEO o Google Ads: qué conviene más" }]} />

        <header className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="bg-primary-100 text-primary-700 text-xs font-medium px-2.5 py-0.5 rounded-full">SEO · SEM</span>
            <time className="text-sm text-gray-400" dateTime="2025-03-17">17 de marzo de 2025</time>
          </div>
          <h1 className="text-4xl font-bold text-primary-600 mb-4 leading-tight">
            SEO o Google Ads: qué conviene más según tu negocio, presupuesto y urgencia
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Ambos son canales de Google, pero funcionan de forma muy distinta en tiempo, coste e intención. Elegir mal no significa que no funcione — significa que funciona peor de lo que podría.
          </p>
        </header>

        <div className="text-gray-700 space-y-6 leading-relaxed">
          <p>
            El SEO y Google Ads no son excluyentes ni equivalentes. El SEO construye presencia orgánica a largo plazo: tarda meses en dar resultados pero, una vez consolidado, genera tráfico sin coste por clic. Google Ads da visibilidad inmediata pero exige inversión continua — cuando paras de pagar, dejas de aparecer.
          </p>
          <p>
            La decisión correcta depende de tres factores: urgencia de resultados, presupuesto disponible y estado actual de tu web. Un negocio que acaba de lanzar y necesita clientes ya no puede esperar meses al SEO. Uno con presencia consolidada y poco presupuesto de publicidad debería priorizar el orgánico.
          </p>

          <h2 className="text-2xl font-bold text-primary-600">Matriz de decisión: cuándo conviene cada opción</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-primary-600 text-white">
                  <th className="px-4 py-3 text-left font-semibold">Situación</th>
                  <th className="px-4 py-3 text-left font-semibold">Recomendación</th>
                  <th className="px-4 py-3 text-left font-semibold">Por qué</th>
                  <th className="px-4 py-3 text-left font-semibold">Plazo</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Necesitas resultados ya", "Google Ads", "Visibilidad inmediata mientras el SEO madura", "Días"],
                  ["Presupuesto muy limitado", "SEO", "Inversión puntual con retorno creciente sin coste por clic", "6–12 meses"],
                  ["Negocio establecido con web", "SEO + Ads combinados", "Ads cubre corto plazo, SEO construye base sólida", "3–6 meses"],
                  ["Ecommerce con competencia fuerte", "Ads para productos + SEO para categorías", "Ads convierte directamente, SEO da tráfico cualificado", "Continuo"],
                  ["Servicio local con zona concreta", "SEO local + Google Business", "Búsquedas locales tienen muy alta conversión sin pagar por clic", "2–4 meses"],
                ].map(([sit, ...rest]) => (
                  <tr key={sit} className="border-b border-gray-200 even:bg-gray-50">
                    <td className="px-4 py-3 font-medium text-gray-800">{sit}</td>
                    {rest.map((c, i) => <td key={i} className="px-4 py-3 text-gray-600">{c}</td>)}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="bg-primary-50 rounded-xl p-6 border border-primary-100">
            <p className="font-semibold text-primary-700 mb-2">¿No tienes claro si te conviene más SEO, Ads o una combinación?</p>
            <p className="text-gray-600 text-sm mb-4">Analizamos tu situación y te ayudamos a decidir qué canal tiene más sentido según tu negocio, presupuesto y urgencia.</p>
            <Link href="/contacto/" className="inline-block bg-accent-500 text-white px-6 py-2.5 rounded-full font-semibold text-sm hover:bg-accent-600 transition-colors">
              Solicitar revisión de captación
            </Link>
          </div>

          <h2 className="text-2xl font-bold text-primary-600">6 preguntas para decidir antes de invertir</h2>
          <ul className="space-y-3">
            {[
              { q: "¿Cuánta urgencia tienes?", desc: "Si necesitas clientes este mes, Ads. Si puedes esperar 6 meses a cambio de resultados sostenibles, SEO." },
              { q: "¿Cuál es tu presupuesto mensual?", desc: "Con menos de 300 €/mes en publicidad, el alcance de Ads es muy limitado. El SEO puede ser más rentable." },
              { q: "¿Tu web convierte bien?", desc: "Si la web no convierte, ni el SEO ni los Ads harán magia. Primero la base, después el tráfico." },
              { q: "¿Tienes competencia fuerte en Ads?", desc: "En sectores con CPCs muy altos, el SEO puede ser la única vía rentable a largo plazo." },
              { q: "¿Tu ticket es alto o bajo?", desc: "Tickets altos justifican CPCs elevados. Tickets bajos necesitan canales con menor coste por conversión." },
              { q: "¿Tienes contenido trabajado?", desc: "El SEO necesita contenido de calidad. Si partes de cero, el esfuerzo inicial es mayor pero el activo dura años." },
            ].map(({ q, desc }) => (
              <li key={q} className="flex items-start gap-3 p-4 border border-gray-200 rounded-xl">
                <span className="text-accent-500 font-bold shrink-0 mt-0.5">?</span>
                <div>
                  <span className="font-semibold text-gray-800">{q} </span>
                  <span className="text-gray-600 text-sm">{desc}</span>
                </div>
              </li>
            ))}
          </ul>

          <p className="text-sm text-gray-500">
            Ver también: <Link href="/que-revisar-antes-de-invertir-mas-en-marketing-digital/" className="text-accent-500 hover:underline">Qué revisar antes de invertir más en marketing digital</Link> · <Link href="/seo-local-empresas-servicios/" className="text-accent-500 hover:underline">SEO local para empresas de servicios</Link>
          </p>

          <div className="bg-primary-600 text-white rounded-2xl p-8 my-2 text-center">
            <h2 className="text-2xl font-bold mb-3">Elige mejor tu inversión antes de activar más acciones</h2>
            <p className="text-primary-200 mb-6">
              Una decisión equivocada entre SEO y Ads puede suponer meses de inversión con resultados pobres. Te ayudamos a elegir bien desde el principio.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contacto/" className="bg-accent-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-accent-600 transition-colors">
                Solicitar diagnóstico de captación
              </Link>
              <Link href="/seo-posicionamiento-web-organico/" className="border-2 border-white text-white px-6 py-3 rounded-full font-semibold hover:bg-white/10 transition-colors">
                Ver servicio SEO
              </Link>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-primary-600">Preguntas frecuentes sobre SEO y Google Ads</h2>
          <div className="space-y-3">
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

          <p className="text-sm text-gray-500 pt-4">
            Servicios relacionados: <Link href="/seo-posicionamiento-web-organico/" className="text-accent-500 hover:underline">SEO Posicionamiento</Link> · <Link href="/sem-publicidad-ppc/" className="text-accent-500 hover:underline">SEM / Google Ads</Link>
          </p>
        </div>

        <nav className="mt-12 pt-8 border-t border-gray-200">
          <Link href="/blog/" className="text-accent-500 hover:text-accent-600 font-medium text-sm">← Volver al blog</Link>
        </nav>
      </article>
      <RelatedArticles currentSlug="seo-o-google-ads-que-conviene-mas" />
    </>
  );
}
