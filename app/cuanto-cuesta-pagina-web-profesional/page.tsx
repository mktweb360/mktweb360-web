import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";

import { RelatedArticles } from "@/components/RelatedArticles";

export const metadata: Metadata = {
  title: "Precio de una página web profesional en 2025: qué debe incluir",
  description:
    "Descubre qué influye de verdad en el precio de una web profesional y qué debe incluir para ayudarte a captar clientes.",
  alternates: { canonical: "https://www.mktweb360.com/cuanto-cuesta-pagina-web-profesional/" },
  openGraph: {
    title: "Precio de una página web profesional en 2025: qué debe incluir | Mkt Web 360",
    description: "Descubre qué influye de verdad en el precio de una web profesional y qué debe incluir para captar clientes.",
    url: "https://www.mktweb360.com/cuanto-cuesta-pagina-web-profesional/",
    type: "article",
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "Cuánto cuesta una página web profesional y qué debe incluir para generar clientes",
  description: "Descubre qué influye de verdad en el precio de una web profesional y qué debe incluir para ayudarte a captar clientes.",
  author: { "@type": "Organization", name: "Mkt Web 360 SLU" },
  publisher: { "@type": "Organization", name: "Mkt Web 360 SLU", url: "https://www.mktweb360.com" },
  datePublished: "2025-03-10",
  url: "https://www.mktweb360.com/cuanto-cuesta-pagina-web-profesional/",
  mainEntityOfPage: "https://www.mktweb360.com/cuanto-cuesta-pagina-web-profesional/",
};

const FAQS = [
  {
    q: "¿Cuánto cuesta una web profesional?",
    a: "Una web profesional orientada a captar clientes cuesta habitualmente entre 1.500 € y 5.000 €, dependiendo de la complejidad, número de páginas, necesidades de integración y nivel de personalización. Las opciones por debajo de 500 € suelen ser plantillas con muy poca optimización y sin enfoque de conversión.",
  },
  {
    q: "¿Qué diferencia una web barata de una profesional?",
    a: "Una web barata suele ser una plantilla sin personalización real, sin SEO técnico, sin optimización de velocidad y sin enfoque en la conversión. Una web profesional está diseñada pensando en el usuario, en Google y en el negocio: genera confianza, posiciona y convierte visitas en contactos.",
  },
  {
    q: "¿Puedo hacer mi propia web con WordPress?",
    a: "Sí, es técnicamente posible. Pero hacerlo bien —con diseño de calidad, SEO técnico correcto, velocidad optimizada y orientación a la conversión— requiere conocimiento específico. La mayoría de webs hechas por el propio empresario tienen problemas técnicos que frenan el posicionamiento y la captación.",
  },
  {
    q: "¿Cuánto tarda en hacerse una web profesional?",
    a: "Una web profesional bien hecha tarda entre 4 y 8 semanas. Proyectos más complejos, con tienda online o integraciones, pueden tardar más. Desconfía de webs que prometen estar listas en una semana: el tiempo es necesario para hacer bien la arquitectura, los contenidos y las optimizaciones.",
  },
  {
    q: "¿Necesito mantenimiento web?",
    a: "Sí. Una web sin mantenimiento se desactualiza, se ralentiza y acumula vulnerabilidades de seguridad. El mantenimiento incluye actualizaciones de plugins y CMS, copias de seguridad, monitoreo de errores y pequeños ajustes. Es una inversión pequeña comparada con tener que rehacerla desde cero.",
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

export default function CuantoCuestaWebPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <article className="max-w-3xl mx-auto px-4 py-12">
        <Breadcrumbs crumbs={[{ label: "Inicio", href: "/" }, { label: "Blog", href: "/blog/" }, { label: "Precio página web profesional 2025" }]} />

        <header className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="bg-primary-100 text-primary-700 text-xs font-medium px-2.5 py-0.5 rounded-full">Diseño Web</span>
            <time className="text-sm text-gray-400" dateTime="2025-03-10">10 de marzo de 2025</time>
          </div>
          <h1 className="text-4xl font-bold text-primary-600 mb-4 leading-tight">
            Cuánto cuesta una página web profesional y qué debe incluir para generar clientes
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            El precio de una web varía enormemente según quién la hace y con qué criterio. Pero la pregunta relevante no es cuánto cuesta hacerla, sino cuánto te cuesta no tenerla bien hecha.
          </p>
        </header>

        <div className="text-gray-700 space-y-6 leading-relaxed">
          <p>
            Es habitual encontrar presupuestos que van de 300 € a 15.000 € para proyectos aparentemente similares. La diferencia no está solo en el diseño: está en si la web está orientada a captar clientes o simplemente a existir online. Una web que no convierte visitas en contactos no es una inversión, es un gasto.
          </p>
          <p>
            La opción más barata suele ser la más cara a largo plazo: si la web no posiciona en Google, no convierte visitas y no genera confianza, el coste real son los clientes que pierdes cada mes frente a tu competencia.
          </p>

          <h2 className="text-2xl font-bold text-primary-600">Comparativa: qué incluye cada tipo de web</h2>

          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-primary-600 text-white">
                  <th className="px-4 py-3 text-left font-semibold"></th>
                  <th className="px-4 py-3 text-left font-semibold">Web básica</th>
                  <th className="px-4 py-3 text-left font-semibold">Web profesional</th>
                  <th className="px-4 py-3 text-left font-semibold">Web orientada a captación</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Precio orientativo", "300–800 €", "1.500–3.500 €", "3.500–8.000 €"],
                  ["Diseño", "Plantilla genérica", "Personalizado", "Personalizado + UX orientado a conversión"],
                  ["SEO técnico", "Básico o ninguno", "Correcto", "Optimizado y auditado"],
                  ["Velocidad", "Variable", "Optimizada", "Muy optimizada (Core Web Vitals)"],
                  ["CRO", "No", "Básico", "Sí, CTAs y flujos probados"],
                  ["Actualizaciones", "No incluidas", "Plan de mantenimiento", "Plan de mantenimiento + mejoras continuas"],
                  ["Resultado esperado", "Presencia online", "Visibilidad y contactos", "Captación activa de clientes"],
                ].map(([row, ...cols]) => (
                  <tr key={row} className="border-b border-gray-200 even:bg-gray-50">
                    <td className="px-4 py-3 font-medium text-gray-800">{row}</td>
                    {cols.map((c, i) => (
                      <td key={i} className="px-4 py-3 text-gray-600">{c}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="bg-primary-50 rounded-xl p-6 border border-primary-100">
            <p className="font-semibold text-primary-700 mb-2">¿No sabes si necesitas una web nueva o mejorar la actual?</p>
            <p className="text-gray-600 text-sm mb-4">Revisamos tu caso y te orientamos sobre qué tendría más sentido: optimizar, rediseñar o crear desde cero.</p>
            <Link href="/auditoria-digital/" className="inline-block bg-accent-500 text-white px-6 py-2.5 rounded-full font-semibold text-sm hover:bg-accent-600 transition-colors">
              Solicitar revisión web
            </Link>
          </div>

          <h2 className="text-2xl font-bold text-primary-600">Qué debe incluir una web profesional</h2>
          <p>Estos son los 8 elementos que no pueden faltar si quieres que tu web trabaje para tu negocio:</p>
          <ul className="space-y-3">
            {[
              { item: "Diseño responsive", desc: "Adaptado perfectamente a móvil, tablet y escritorio. Más del 60% del tráfico viene del móvil." },
              { item: "Velocidad optimizada", desc: "Carga en menos de 3 segundos. La velocidad afecta directamente al posicionamiento y a la tasa de conversión." },
              { item: "SEO técnico base", desc: "Estructura de URLs correcta, metadatos optimizados, datos estructurados y sitemap. Sin esto no posicionas." },
              { item: "Textos orientados a conversión", desc: "No basta con describir lo que haces: el texto debe comunicar beneficios y guiar al usuario hacia el contacto." },
              { item: "Formularios funcionando", desc: "Formularios de contacto probados, con confirmación y sin spam. El número de teléfono visible en móvil." },
              { item: "Analytics configurado", desc: "Google Analytics 4 y Search Console activos para medir tráfico, comportamiento y conversiones desde el primer día." },
              { item: "SSL y seguridad", desc: "Certificado HTTPS, protección contra malware y copias de seguridad periódicas." },
              { item: "Plan de mantenimiento", desc: "Actualizaciones regulares, monitoreo de errores y soporte técnico para que la web no se degrade con el tiempo." },
            ].map(({ item, desc }) => (
              <li key={item} className="flex items-start gap-3 p-4 border border-gray-200 rounded-xl">
                <span className="text-accent-500 font-bold shrink-0 mt-0.5">✓</span>
                <div>
                  <span className="font-semibold text-gray-800">{item}: </span>
                  <span className="text-gray-600 text-sm">{desc}</span>
                </div>
              </li>
            ))}
          </ul>

          <h2 className="text-2xl font-bold text-primary-600">5 preguntas que hacer antes de aceptar un presupuesto web</h2>
          <ol className="space-y-3 list-decimal pl-5">
            {[
              "¿El diseño incluye optimización SEO técnica o solo el aspecto visual?",
              "¿Cómo garantizáis la velocidad de carga en móvil?",
              "¿Los textos los escribís vosotros o aporto yo el contenido?",
              "¿Qué incluye el mantenimiento y cuánto cuesta mensualmente?",
              "¿Puedo ver ejemplos de webs que hayáis hecho que estén posicionando en Google?",
            ].map((q) => (
              <li key={q} className="text-gray-700 pl-2">{q}</li>
            ))}
          </ol>
          <p className="text-sm text-gray-500">
            Ver también: <Link href="/senales-web-necesita-rediseno/" className="text-accent-500 hover:underline">Señales de que tu web necesita un rediseño urgente</Link> · <Link href="/seo-o-google-ads-que-conviene-mas/" className="text-accent-500 hover:underline">SEO o Google Ads: qué conviene más</Link>
          </p>

          <div className="bg-primary-600 text-white rounded-2xl p-8 my-2 text-center">
            <h2 className="text-2xl font-bold mb-3">Valora tu web con enfoque de negocio, no solo por precio</h2>
            <p className="text-primary-200 mb-6">
              Si quieres saber qué debería incluir una web profesional para ayudarte a captar clientes y qué inversión tendría sentido en tu caso, podemos orientarte sin compromiso.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contacto/" className="bg-accent-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-accent-600 transition-colors">
                Solicitar presupuesto web
              </Link>
              <Link href="/diseno-de-paginas-web/" className="border-2 border-white text-white px-6 py-3 rounded-full font-semibold hover:bg-white/10 transition-colors">
                Ver servicio de diseño web
              </Link>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-primary-600">Preguntas frecuentes sobre el precio de una web profesional</h2>
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
            Artículos relacionados: <Link href="/diseno-de-paginas-web/" className="text-accent-500 hover:underline">Diseño de páginas web</Link> · <Link href="/auditoria-digital/" className="text-accent-500 hover:underline">Auditoría digital</Link>
          </p>
        </div>

        <nav className="mt-12 pt-8 border-t border-gray-200">
          <Link href="/blog/" className="text-accent-500 hover:text-accent-600 font-medium text-sm">← Volver al blog</Link>
        </nav>
      </article>
      <RelatedArticles currentSlug="cuanto-cuesta-pagina-web-profesional" />
    </>
  );
}
