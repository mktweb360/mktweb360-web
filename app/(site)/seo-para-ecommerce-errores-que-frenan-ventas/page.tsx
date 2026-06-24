import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";

import { RelatedArticles } from "@/components/RelatedArticles";
import { BlogBanner } from "@/components/BlogBanner";

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
    images: [{ url: "/og-seo-para-ecommerce-errores-que-frenan-ventas.jpg", width: 1200, height: 630 }],
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
    q: "¿Qué páginas son más importantes en el SEO de un ecommerce?",
    a: "Normalmente categorías y subcategorías con intención de búsqueda clara, seguidas de fichas con búsqueda específica de producto.",
  },
  {
    q: "¿Los filtros pueden perjudicar el SEO?",
    a: "Sí. Si se dejan sin control, generan URLs de poco valor, duplicidades y rastreo ineficiente que diluye la autoridad del sitio.",
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

          <h2 className="text-2xl font-bold text-primary-600">Errores estructurales que más frenan</h2>
          <p>Los problemas de arquitectura, la falta de contenido útil en categorías, los textos de proveedor duplicados, la indexación de páginas de filtro sin valor y la lentitud en móvil son los errores que más frenan el rendimiento orgánico de una tienda. La mayoría no se ven a simple vista, pero tienen un impacto directo en qué páginas indexa Google y con qué posiciones las muestra.</p>
          <ul className="space-y-2">
            {["Contenido duplicado en fichas y variantes", "Categorías sin texto útil para SEO", "Filtros que generan miles de URLs sin valor", "Velocidad en móvil que perjudica experiencia y ranking"].map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-gray-700 py-1">
                <span className="text-accent-500 font-bold shrink-0 mt-0.5">▸</span>
                {item}
              </li>
            ))}
          </ul>

          <div className="bg-primary-50 rounded-xl p-6 border border-primary-100">
            <p className="font-semibold text-primary-700 mb-2">¿Tu tienda online depende demasiado de Ads para vender?</p>
            <p className="text-gray-600 text-sm mb-4">Si el tráfico orgánico de tu tienda es muy bajo, es probable que haya errores SEO estructurales que podemos identificar y solucionar. Análisis sin compromiso.</p>
            <Link href="/contacto/" className="inline-block bg-accent-500 text-white px-6 py-2.5 rounded-full font-semibold text-sm hover:bg-accent-600 transition-colors">
              Solicitar análisis SEO para ecommerce
            </Link>
          </div>

          <h2 className="text-2xl font-bold text-primary-600">Qué páginas conviene potenciar primero</h2>
          <p>Las páginas de categoría suelen ser las que más volumen de búsqueda captan. Una categoría bien construida, con texto útil, buena estructura interna y enlazado correcto, puede traer tráfico cualificado de forma constante. Después vienen las fichas con búsquedas específicas de producto. La home y las páginas de información tienen un papel secundario en la captación orgánica en ecommerce.</p>

          <h2 className="text-2xl font-bold text-primary-600">SEO y CRO no deberían separarse</h2>
          <p>Atraer tráfico es solo la primera parte. Si la ficha de producto no convierte, si el proceso de compra tiene fricciones o si la velocidad penaliza la experiencia, el tráfico orgánico no se traduce en ventas. SEO y optimización de conversión deberían trabajarse juntos, no como proyectos separados. Una tienda que posiciona pero no convierte tiene el mismo problema que una que convierte pero no posiciona.</p>

          <BlogBanner variant="ecommerce" />

          <h2 className="text-2xl font-bold text-primary-600">Qué revisar antes de subir Ads</h2>
          <p>Antes de aumentar presupuesto en campañas, conviene revisar si el SEO base está resuelto, si las páginas de destino convierten bien y si la tienda no tiene problemas técnicos que afecten a la experiencia. Escalar Ads sobre una tienda con errores estructurales multiplica el gasto sin mejorar proporcionalmente los resultados.</p>

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
