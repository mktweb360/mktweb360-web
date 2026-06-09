import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";

import { RelatedArticles } from "@/components/RelatedArticles";

export const metadata: Metadata = {
  title: "SEO para ecommerce: errores que frenan ventas en tu tienda online",
  description:
    "Descubre los errores SEO más comunes en ecommerce y qué revisar para mejorar visibilidad, tráfico cualificado y ventas.",
  alternates: { canonical: "https://www.mktweb360.com/seo-para-ecommerce-errores-que-frenan-ventas/" },
  openGraph: {
    title: "SEO para ecommerce: errores que frenan ventas en tu tienda online | Mkt Web 360",
    description: "Descubre los errores SEO más comunes en ecommerce y qué revisar para mejorar visibilidad, tráfico cualificado y ventas.",
    url: "https://www.mktweb360.com/seo-para-ecommerce-errores-que-frenan-ventas/",
    type: "article",
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "SEO para ecommerce: los errores que más frenan ventas en una tienda online",
  description: "Descubre los errores SEO más comunes en ecommerce y qué revisar para mejorar visibilidad, tráfico cualificado y ventas.",
  author: { "@type": "Organization", name: "Mkt Web 360 SLU" },
  publisher: { "@type": "Organization", name: "Mkt Web 360 SLU", url: "https://www.mktweb360.com" },
  datePublished: "2025-04-21",
  url: "https://www.mktweb360.com/seo-para-ecommerce-errores-que-frenan-ventas/",
  mainEntityOfPage: "https://www.mktweb360.com/seo-para-ecommerce-errores-que-frenan-ventas/",
};

const FAQS = [
  {
    q: "¿Por qué mi tienda online no aparece en Google?",
    a: "Las causas más frecuentes son: indexación bloqueada por error, contenido duplicado entre categorías y fichas de producto, arquitectura web incorrecta que dificulta el rastreo, ausencia de contenido optimizado en categorías o velocidad de carga muy baja. Una auditoría SEO técnica suele identificar el problema principal.",
  },
  {
    q: "¿Qué páginas debo optimizar primero en un ecommerce?",
    a: "Las páginas de categoría son el mayor activo SEO de un ecommerce porque tienen mayor volumen de búsqueda y mayor potencial de tráfico. Después las fichas de producto para keywords de alta intención de compra. El blog puede complementar con contenido informacional.",
  },
  {
    q: "¿El contenido duplicado afecta al SEO de mi tienda?",
    a: "Sí, significativamente. El contenido duplicado aparece en ecommerce cuando las mismas fichas de producto se acceden por múltiples URLs (filtros, parámetros de URL, variantes de color). Google no sabe qué versión indexar y puede diluir la autoridad de tus páginas. Se resuelve con canonical tags y configuración correcta de parámetros en Search Console.",
  },
  {
    q: "¿Necesita un ecommerce un blog para posicionar?",
    a: "No es imprescindible, pero es muy recomendable. El blog permite posicionar keywords informacionales ('cómo elegir X', 'qué es X') que atraen usuarios en fases más tempranas del proceso de compra. Con el tiempo, ese tráfico se convierte en ventas y refuerza la autoridad del dominio.",
  },
  {
    q: "¿Cómo compite un ecommerce pequeño contra Amazon o El Corte Inglés en Google?",
    a: "Especializándose en nichos específicos. En búsquedas muy genéricas es muy difícil competir con grandes plataformas, pero en búsquedas de producto concreto, categorías de nicho o búsquedas con intención local, un ecommerce especializado puede posicionarse perfectamente con la estrategia correcta.",
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

export default function SeoEcommercePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <article className="max-w-3xl mx-auto px-4 py-12">
        <Breadcrumbs crumbs={[{ label: "Inicio", href: "/" }, { label: "Blog", href: "/blog/" }, { label: "SEO para ecommerce: errores que frenan ventas" }]} />

        <header className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="bg-primary-100 text-primary-700 text-xs font-medium px-2.5 py-0.5 rounded-full">SEO · Ecommerce</span>
            <time className="text-sm text-gray-400" dateTime="2025-04-21">21 de abril de 2025</time>
          </div>
          <h1 className="text-4xl font-bold text-primary-600 mb-4 leading-tight">
            SEO para ecommerce: los errores que más frenan ventas en una tienda online
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            El SEO para tiendas online es más complejo que el SEO para webs de servicios. La arquitectura, las categorías y las fichas de producto tienen reglas propias — y los errores más frecuentes son también los más costosos.
          </p>
        </header>

        <div className="text-gray-700 space-y-6 leading-relaxed">
          <p>
            Una tienda online puede tener miles de páginas, lo que multiplica tanto el potencial de tráfico orgánico como el riesgo de errores técnicos. Un error de indexación, contenido duplicado generalizado o una arquitectura web incorrecta pueden hacer invisible a Google la mayor parte del catálogo.
          </p>
          <p>
            A diferencia de una web de servicios, en ecommerce el SEO trabaja en varias capas: la arquitectura del sitio, las páginas de categoría, las fichas de producto y el contenido editorial. Cada capa tiene sus propias oportunidades y sus propios errores frecuentes.
          </p>

          <h2 className="text-2xl font-bold text-primary-600">Los 8 errores SEO que más frenan ventas en ecommerce</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-primary-600 text-white">
                  <th className="px-4 py-3 text-left font-semibold">Error</th>
                  <th className="px-4 py-3 text-left font-semibold">Impacto SEO</th>
                  <th className="px-4 py-3 text-left font-semibold">Impacto ventas</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Contenido duplicado entre productos", "Alto — dilución de autoridad y confusión en indexación", "Medio — posiciones más bajas que los competidores"],
                  ["Páginas de categoría sin contenido", "Alto — Google no entiende de qué trata la categoría", "Alto — posicionamiento muy limitado en keywords de categoría"],
                  ["Fichas de producto con textos del proveedor", "Alto — contenido idéntico a cientos de otras webs", "Medio — menor diferenciación y menor confianza del usuario"],
                  ["Arquitectura de URLs compleja o inestable", "Alto — dificulta el rastreo y pierde link equity", "Bajo — impacto indirecto en posicionamiento"],
                  ["Velocidad de carga lenta en móvil", "Alto — Core Web Vitals afectan directamente al ranking", "Alto — abandono del carrito antes de la compra"],
                  ["Sin datos estructurados de producto", "Medio — no aparecen rich results con precio y disponibilidad", "Alto — menor CTR en resultados de búsqueda"],
                  ["Indexación de páginas de filtro", "Alto — miles de URLs de poco valor que diluyen el presupuesto de rastreo", "Bajo — impacto indirecto"],
                  ["Sin estrategia de enlaces internos", "Alto — productos y categorías no reciben la autoridad que deberían", "Medio — peor posicionamiento de páginas de alta intención"],
                ].map(([err, seo, ventas]) => (
                  <tr key={err} className="border-b border-gray-200 even:bg-gray-50">
                    <td className="px-4 py-3 font-medium text-gray-800">{err}</td>
                    <td className="px-4 py-3 text-gray-600 text-xs">{seo}</td>
                    <td className="px-4 py-3 text-gray-600 text-xs">{ventas}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="bg-primary-50 rounded-xl p-6 border border-primary-100">
            <p className="font-semibold text-primary-700 mb-2">¿Tu tienda online depende demasiado de Ads para vender?</p>
            <p className="text-gray-600 text-sm mb-4">Si el tráfico orgánico de tu tienda es muy bajo, es probable que haya errores SEO estructurales que podemos identificar y solucionar. Análisis sin compromiso.</p>
            <Link href="/contacto/" className="inline-block bg-accent-500 text-white px-6 py-2.5 rounded-full font-semibold text-sm hover:bg-accent-600 transition-colors">
              Solicitar análisis SEO para ecommerce
            </Link>
          </div>

          <h2 className="text-2xl font-bold text-primary-600">Checklist SEO para ecommerce por capas</h2>
          {[
            {
              layer: "Arquitectura",
              items: ["URLs limpias y estables", "Máx. 3 clics del inicio a cualquier producto", "Paginación correcta (rel=next/prev o canonical)", "No indexar páginas de filtro sin valor"],
            },
            {
              layer: "Páginas de categoría",
              items: ["Texto descriptivo único de al menos 150 palabras", "H1 con keyword principal de la categoría", "Datos estructurados de BreadcrumbList", "Enlace a subcategorías relevantes"],
            },
            {
              layer: "Fichas de producto",
              items: ["Texto descriptivo único (no del proveedor)", "Datos estructurados Product con precio y disponibilidad", "Imágenes con alt text descriptivo", "Reseñas de producto con schema Review"],
            },
            {
              layer: "Indexación",
              items: ["Canonical correctos en variantes de producto", "No indexar páginas de carrito y cuenta", "Sitemap actualizado automáticamente", "Search Console sin errores de cobertura"],
            },
          ].map(({ layer, items }) => (
            <div key={layer}>
              <h3 className="text-lg font-semibold text-primary-700 mb-2">{layer}</h3>
              <ul className="space-y-2">
                {items.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-gray-700">
                    <span className="text-accent-500 font-bold shrink-0 mt-0.5">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <p className="text-sm text-gray-500">
            Ver también: <Link href="/senales-web-necesita-rediseno/" className="text-accent-500 hover:underline">Señales de que tu web necesita un rediseño</Link> · <Link href="/sem-publicidad-ppc/" className="text-accent-500 hover:underline">SEM / Google Ads para ecommerce</Link>
          </p>

          <div className="bg-primary-600 text-white rounded-2xl p-8 my-2 text-center">
            <h2 className="text-2xl font-bold mb-3">Detecta qué está frenando el crecimiento de tu tienda</h2>
            <p className="text-primary-200 mb-6">
              Realizamos una auditoría SEO específica para ecommerce y te indicamos los errores con más impacto en ventas y el orden en que deberías solucionarlos.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/auditoria-digital/" className="bg-accent-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-accent-600 transition-colors">
                Solicitar auditoría SEO
              </Link>
              <Link href="/diseno-de-paginas-web/diseno-tiendas-online/" className="border-2 border-white text-white px-6 py-3 rounded-full font-semibold hover:bg-white/10 transition-colors">
                Ver diseño de tiendas online
              </Link>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-primary-600">Preguntas frecuentes sobre SEO para ecommerce</h2>
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
            Servicios relacionados: <Link href="/diseno-de-paginas-web/diseno-tiendas-online/" className="text-accent-500 hover:underline">Diseño de tiendas online</Link> · <Link href="/auditoria-digital/" className="text-accent-500 hover:underline">Auditoría Digital</Link>
          </p>
        </div>

        <nav className="mt-12 pt-8 border-t border-gray-200">
          <Link href="/blog/" className="text-accent-500 hover:text-accent-600 font-medium text-sm">← Volver al blog</Link>
        </nav>
      </article>
      <RelatedArticles currentSlug="seo-para-ecommerce-errores-que-frenan-ventas" />
    </>
  );
}
