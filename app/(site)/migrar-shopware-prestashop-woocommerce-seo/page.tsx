import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { RelatedArticles } from "@/components/RelatedArticles";
import { BlogBanner } from "@/components/BlogBanner";

export const metadata: Metadata = {
  title: "Migrar a Shopware desde PrestaShop o WooCommerce sin perder SEO",
  description:
    "Cómo migrar tu tienda a Shopware sin perder posicionamiento: auditoría de URLs, mapa de redirecciones 301, protocolo de lanzamiento y seguimiento post-migración.",
  alternates: { canonical: "https://www.mktweb360.com/migrar-shopware-prestashop-woocommerce-seo/" },
  openGraph: {
    title: "Migrar a Shopware desde PrestaShop o WooCommerce sin perder SEO | Mkt Web 360",
    description: "Migra a Shopware sin perder SEO: auditoría de URLs, mapa de redirecciones 301 y protocolo de lanzamiento paso a paso.",
    url: "https://www.mktweb360.com/migrar-shopware-prestashop-woocommerce-seo/",
    type: "article",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "Migrar a Shopware desde PrestaShop o WooCommerce sin perder SEO",
  description: "Cómo migrar tu tienda a Shopware sin perder posicionamiento: auditoría de URLs, mapa de redirecciones 301, protocolo de lanzamiento y seguimiento post-migración.",
  author: { "@type": "Organization", name: "Mkt Web 360 SLU" },
  publisher: { "@type": "Organization", name: "Mkt Web 360 SLU", url: "https://www.mktweb360.com" },
  datePublished: "2026-06-26",
  url: "https://www.mktweb360.com/migrar-shopware-prestashop-woocommerce-seo/",
  mainEntityOfPage: "https://www.mktweb360.com/migrar-shopware-prestashop-woocommerce-seo/",
};

const FAQS = [
  { q: "¿Se pierde tráfico al migrar a Shopware?", a: "No tiene por qué. Las tiendas que migran con un mapa de redirecciones 301 correcto conservan más del 90% de su tráfico orgánico desde la primera semana. Las pérdidas vienen de migraciones improvisadas, no de la plataforma." },
  { q: "¿Qué es el mapa de redirecciones y por qué es tan importante?", a: "Es el documento que empareja cada URL con valor de la tienda antigua con su equivalente en Shopware mediante redirecciones 301. Es el entregable crítico de la migración: sin él, se pierde el posicionamiento acumulado." },
  { q: "¿Cómo sé qué URLs no puedo perder?", a: "Cruzando Google Search Console (tráfico, posiciones) con un rastreo en Screaming Frog (todas las URLs). Así identificas las páginas con tráfico, backlinks y rankings que hay que redirigir sí o sí." },
  { q: "¿Cuánto dura una migración a Shopware?", a: "La preparación lleva tiempo, pero el cambio en sí se ejecuta idealmente en una sola jornada: validación en staging, verificación, cambio de DNS y envío del sitemap a Search Console el mismo día." },
  { q: "¿Qué hago después de migrar?", a: "Monitorizar. Durante las semanas siguientes se vigila la cobertura en Search Console, las posiciones de las keywords clave y se corrigen redirecciones que se hayan escapado. El seguimiento es lo que consolida la recuperación." },
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

export default function MigrarShopwarePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <article className="max-w-3xl mx-auto px-4 py-12">
        <Breadcrumbs crumbs={[{ label: "Inicio", href: "/" }, { label: "Blog", href: "/blog/" }, { label: "Migrar a Shopware sin perder SEO" }]} />

        <header className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="bg-primary-100 text-primary-700 text-xs font-medium px-2.5 py-0.5 rounded-full">Shopware · Migración</span>
            <time className="text-sm text-gray-400" dateTime="2026-06-26">26 de junio de 2026</time>
          </div>
          <h1 className="text-4xl font-bold text-primary-600 mb-4 leading-tight">
            Migrar a Shopware desde PrestaShop o WooCommerce sin perder SEO
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Una migración bien planificada conserva más del 90% del tráfico desde la primera semana. Te explicamos el proceso que separa una migración exitosa de un desastre.
          </p>
        </header>

        <div className="text-gray-700 space-y-6 leading-relaxed">
          <p>Migrar a Shopware desde PrestaShop o WooCommerce es una de las operaciones con más potencial de mejora y más riesgo de desastre. Hecho bien, ganas una plataforma superior sin perder posiciones. Hecho mal, despiertas el lunes con el tráfico hundido y meses de recuperación por delante. La diferencia está en la preparación, no en la suerte.</p>
          <h2 className="text-2xl font-bold text-primary-600">Antes de migrar: auditoría de URLs con valor</h2>
          <p>El primer paso no es técnico, es de inventario. Hay que identificar qué URLs tienen valor SEO: las que reciben tráfico orgánico, las que tienen backlinks y las que posicionan para keywords relevantes. Se cruzan los datos de Google Search Console (tráfico y posiciones reales) con un rastreo completo en Screaming Frog (todas las URLs existentes). El resultado es la lista de páginas que no se pueden perder bajo ningún concepto.</p>
          <h2 className="text-2xl font-bold text-primary-600">El mapa de redirecciones 301: el documento crítico</h2>
          <p>Cada URL con valor de la tienda antigua debe redirigir con un 301 a su equivalente en la nueva. Ese mapa de redirecciones —un documento que empareja URL antigua con URL nueva, una a una— es el entregable más importante de toda la migración. El dato lo deja claro: las tiendas que migran con un mapa de redirecciones correcto conservan más del 90% de su tráfico orgánico desde la primera semana. Las que improvisan, no.</p>
          <h2 className="text-2xl font-bold text-primary-600">Estructura de URL: PrestaShop vs WooCommerce vs Shopware</h2>
          <p>Cada plataforma construye las URLs de forma distinta y eso condiciona el mapa. PrestaShop tiende a usar IDs numéricos en la ruta; WooCommerce trabaja con slugs basados en el nombre del producto o categoría; Shopware permite plantillas de URL configurables, más flexibles. Conocer las diferencias evita redirecciones rotas y permite diseñar en Shopware una estructura limpia que, además, mejore la de origen.</p>

          <div className="bg-primary-50 rounded-xl p-6 border border-primary-100">
            <p className="font-semibold text-primary-700 mb-2">¿Vas a migrar tu tienda a Shopware?</p>
            <p className="text-gray-600 text-sm mb-4">Planificamos la migración SEO completa —auditoría, mapa de redirecciones y lanzamiento— para que no pierdas el tráfico que tanto te ha costado conseguir.</p>
            <Link href="/marketing-shopware/" className="inline-block bg-accent-500 text-white px-6 py-2.5 rounded-full font-semibold text-sm hover:bg-accent-600 transition-colors">
              Ver marketing para Shopware
            </Link>
          </div>
          <h2 className="text-2xl font-bold text-primary-600">El día del lanzamiento: protocolo</h2>
          <p>La migración se ejecuta en un orden estricto y, idealmente, en una sola jornada. Primero se prepara y valida todo en un entorno de staging: redirecciones, contenido, schema y rendimiento. Se verifica que cada redirección funciona y que no hay enlaces rotos. Solo entonces se hace el cambio de DNS para apuntar al nuevo sitio. Y el mismo día se envía el nuevo sitemap a Google Search Console para acelerar el rastreo de la estructura nueva. Improvisar el orden es la causa número uno de caídas de tráfico.</p>
          <h2 className="text-2xl font-bold text-primary-600">Seguimiento post-migración</h2>
          <p>El trabajo no acaba con el lanzamiento. Durante las semanas siguientes se monitoriza la cobertura en Search Console (errores 404, redirecciones detectadas, indexación), se vigilan las posiciones de las keywords críticas y se corrige cualquier redirección que se haya escapado. Una migración bien seguida recupera y supera el tráfico previo; una abandonada deja dinero por el camino.</p>

          <div className="bg-primary-600 text-white rounded-2xl p-8 my-2 text-center">
            <h2 className="text-2xl font-bold mb-3">Migra a Shopware sin perder tu SEO</h2>
            <p className="text-primary-200 mb-6">
              Te acompañamos en toda la migración: auditoría, mapa de redirecciones, protocolo de lanzamiento y seguimiento para conservar tu tráfico y mejorarlo.
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
      <RelatedArticles currentSlug="migrar-shopware-prestashop-woocommerce-seo" />
    </>
  );
}
