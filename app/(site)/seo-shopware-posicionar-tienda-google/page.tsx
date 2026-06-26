import Image from "next/image";
import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { RelatedArticles } from "@/components/RelatedArticles";
import { BlogBanner } from "@/components/BlogBanner";

export const metadata: Metadata = {
  title: "SEO para Shopware: cómo posicionar tu tienda en Google",
  description:
    "Guía de SEO técnico para Shopware 6: URLs, navegación facetada, schema de producto, Core Web Vitals y fichas optimizadas para posicionar tu tienda en Google.",
  alternates: { canonical: "https://www.mktweb360.com/seo-shopware-posicionar-tienda-google/" },
  openGraph: {
    title: "SEO para Shopware: cómo posicionar tu tienda en Google | Mkt Web 360",
    description: "SEO técnico para Shopware 6: facetas, canonical, schema y Core Web Vitals para posicionar tu tienda en Google.",
    url: "https://www.mktweb360.com/seo-shopware-posicionar-tienda-google/",
    type: "article",
    images: [{ url: "/og-seo-shopware-posicionar-tienda-google.jpg", width: 1200, height: 630 }],
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "SEO para Shopware: cómo posicionar tu tienda en Google",
  description: "Guía de SEO técnico para Shopware 6: URLs, navegación facetada, schema de producto, Core Web Vitals y fichas optimizadas para posicionar tu tienda en Google.",
  author: { "@type": "Organization", name: "Mkt Web 360 SLU" },
  publisher: { "@type": "Organization", name: "Mkt Web 360 SLU", url: "https://www.mktweb360.com" },
  datePublished: "2026-06-26",
  url: "https://www.mktweb360.com/seo-shopware-posicionar-tienda-google/",
  mainEntityOfPage: "https://www.mktweb360.com/seo-shopware-posicionar-tienda-google/",
};

const FAQS = [
  { q: "¿Shopware es bueno para SEO?", a: "Sí. Shopware 6 ofrece un control técnico avanzado —URLs configurables, canonical automático de variantes y datos estructurados— que, bien aprovechado, posiciona muy bien. La clave está en la configuración, no en la plataforma." },
  { q: "¿Qué es la navegación facetada y por qué importa?", a: "Es el sistema de filtros del catálogo. Si cada filtro genera una URL rastreable, se crean miles de páginas casi duplicadas que consumen el crawl budget de Google. Controlar qué facetas se indexan es uno de los trabajos SEO más importantes en Shopware." },
  { q: "¿Necesito datos estructurados en mis productos?", a: "Sí. El schema Product con Offer y, si hay reseñas, AggregateRating activa los resultados enriquecidos (precio, stock y estrellas en Google), lo que mejora el CTR sin coste por clic." },
  { q: "¿Cuánto contenido necesita una ficha de producto?", a: "Un mínimo de unas 150 palabras de contenido único por ficha. Las descripciones duplicadas del proveedor no posicionan; Google premia el contenido original que resuelve dudas reales del comprador." },
  { q: "¿Hacen falta plugins SEO en Shopware?", a: "Depende del tamaño. A partir de unos 500 productos, un plugin SEO automatiza tareas a escala y compensa. En catálogos más pequeños, la configuración nativa bien hecha suele ser suficiente." },
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

export default function SeoShopwarePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <article className="max-w-3xl mx-auto px-4 py-12">
        <Breadcrumbs crumbs={[{ label: "Inicio", href: "/" }, { label: "Blog", href: "/blog/" }, { label: "SEO para Shopware" }]} />

        <header className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="bg-primary-100 text-primary-700 text-xs font-medium px-2.5 py-0.5 rounded-full">Shopware · SEO</span>
            <time className="text-sm text-gray-400" dateTime="2026-06-26">26 de junio de 2026</time>
          </div>
          <h1 className="text-4xl font-bold text-primary-600 mb-4 leading-tight">
            SEO para Shopware: cómo posicionar tu tienda en Google
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Shopware tiene una base técnica excelente para SEO, pero solo vende si se configura bien. Te explicamos los puntos que de verdad mueven posiciones en una tienda Shopware.
          </p>
          <Image
            src="/og-seo-shopware-posicionar-tienda-google.jpg"
            alt="SEO para Shopware: cómo posicionar tu tienda en Google"
            width={1200}
            height={630}
            className="w-full rounded-2xl mt-6"
            priority
          />
        </header>

        <div className="text-gray-700 space-y-6 leading-relaxed">
          <p>Shopware 6 es una de las plataformas de ecommerce con mejor base técnica para SEO, pero esa potencia solo se traduce en ventas si se configura bien. La mayoría de las tiendas Shopware pierden posiciones por los mismos fallos evitables: navegación facetada sin control, fichas sin contenido único y métricas de rendimiento descuidadas. Vamos a verlos uno a uno.</p>
          <h2 className="text-2xl font-bold text-primary-600">Por qué el SEO de Shopware es distinto</h2>
          <p>A diferencia de un CMS genérico, Shopware está pensado para catálogos: variantes, propiedades, filtros y miles de combinaciones de URL. Esa flexibilidad es una ventaja para vender y un riesgo para el SEO si no se acota. El trabajo técnico consiste en decirle a Google qué páginas valen y cuáles no, para que concentre su rastreo donde hay negocio.</p>
          <h2 className="text-2xl font-bold text-primary-600">URLs y canonical: el control que da Shopware 6</h2>
          <p>Shopware permite configurar plantillas de URL limpias y descriptivas para productos y categorías, y genera canonical automático para las variantes de un mismo producto. Esto evita que tallas, colores o presentaciones compitan entre sí en Google. Bien configurado, cada producto consolida su autoridad en una sola URL canónica en lugar de dispersarla entre decenas de variantes.</p>
          <h2 className="text-2xl font-bold text-primary-600">Navegación facetada: el error que arruina tu crawl budget</h2>
          <p>Es el problema más frecuente y el más caro. Cada filtro (marca, precio, color, talla) que genera una URL rastreable multiplica las combinaciones: una categoría con cinco filtros puede producir miles de URLs casi idénticas que diluyen autoridad y consumen el crawl budget que Google dedica a tu tienda. La solución pasa por decidir qué facetas se indexan (las que tienen demanda de búsqueda real), bloquear el resto con noindex o reglas de rastreo y mantener el canonical apuntando a la categoría madre.</p>
          <h2 className="text-2xl font-bold text-primary-600">Schema de producto: Product, Offer y AggregateRating</h2>
          <p>Los datos estructurados son los que activan los resultados enriquecidos: precio, disponibilidad y estrellas en la propia búsqueda de Google. Para una tienda Shopware, el marcado mínimo es Product con su Offer (precio, moneda y disponibilidad) y, cuando hay reseñas reales, AggregateRating. Ese marcado mejora el CTR sin tocar el posicionamiento, porque tu resultado ocupa más espacio y transmite más confianza.</p>
          <h2 className="text-2xl font-bold text-primary-600">Core Web Vitals en Shopware</h2>
          <p>El rendimiento es factor de ranking y de conversión. Los tres fallos típicos en Shopware: LCP alto cuando la imagen hero carga sin prioridad (se corrige marcándola con fetchpriority alta), CLS por imágenes sin dimensiones declaradas que descuadran el layout al cargar, e INP degradado por plugins JavaScript que bloquean la interacción. Auditar y corregir estos tres puntos suele dar el mayor salto de rendimiento.</p>
          <h2 className="text-2xl font-bold text-primary-600">Fichas y categorías: contenido único que posiciona</h2>
          <p>El catálogo importado de un proveedor trae descripciones duplicadas que Google ignora. Cada ficha de producto necesita un mínimo de contenido único —en torno a 150 palabras reales— que responda a lo que busca el cliente: para qué sirve, en qué se diferencia, qué incluye. Las páginas de categoría, además del listado, deben tener un texto que explique la gama y capte las búsquedas genéricas del sector.</p>
          <p>Sobre plugins SEO: tienen sentido a partir de cierto volumen. Para tiendas con más de 500 productos, un buen plugin automatiza canonical, sitemaps y metadatos a escala; por debajo de esa cifra, la configuración nativa de Shopware bien hecha suele bastar.</p>

          <div className="bg-primary-50 rounded-xl p-6 border border-primary-100">
            <p className="font-semibold text-primary-700 mb-2">¿Tu tienda Shopware no posiciona como debería?</p>
            <p className="text-gray-600 text-sm mb-4">Auditamos el SEO técnico de tu tienda —facetas, canonical, schema y Core Web Vitals— y te decimos exactamente qué corregir para ganar tráfico orgánico.</p>
            <Link href="/marketing-shopware/" className="inline-block bg-accent-500 text-white px-6 py-2.5 rounded-full font-semibold text-sm hover:bg-accent-600 transition-colors">
              Ver marketing para Shopware
            </Link>
          </div>

          <div className="bg-primary-600 text-white rounded-2xl p-8 my-2 text-center">
            <h2 className="text-2xl font-bold mb-3">Convierte tu tienda Shopware en un canal que vende</h2>
            <p className="text-primary-200 mb-6">
              El SEO técnico bien ejecutado es la base de un ecommerce rentable. Te ayudamos a posicionar tu catálogo y captar tráfico que compra.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/marketing-shopware/" className="bg-accent-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-accent-600 transition-colors">
                Ver marketing para Shopware
              </Link>
              <Link href="/seo-posicionamiento-web-organico/" className="border-2 border-white text-white px-6 py-3 rounded-full font-semibold hover:bg-white/10 transition-colors">
                Ver servicio SEO
              </Link>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-primary-600">Preguntas frecuentes</h2>
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
            Servicios relacionados: <Link href="/marketing-shopware/" className="text-accent-500 hover:underline">Marketing Shopware</Link> · <Link href="/seo-posicionamiento-web-organico/" className="text-accent-500 hover:underline">SEO Posicionamiento</Link>
          </p>
        </div>

        <nav className="mt-12 pt-8 border-t border-gray-200">
          <Link href="/blog/" className="text-accent-500 hover:text-accent-600 font-medium text-sm">← Volver al blog</Link>
        </nav>
      </article>
      <RelatedArticles currentSlug="seo-shopware-posicionar-tienda-google" />
    </>
  );
}
