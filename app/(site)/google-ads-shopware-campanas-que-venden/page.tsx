import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { RelatedArticles } from "@/components/RelatedArticles";
import { BlogBanner } from "@/components/BlogBanner";

export const metadata: Metadata = {
  title: "Google Ads para Shopware: campañas que venden de verdad",
  description:
    "Cómo montar Google Ads para tu tienda Shopware: tracking de conversiones, conexión con Merchant Center, Performance Max, Shopping y optimización por ROAS.",
  alternates: { canonical: "https://www.mktweb360.com/google-ads-shopware-campanas-que-venden/" },
  openGraph: {
    title: "Google Ads para Shopware: campañas que venden de verdad | Mkt Web 360",
    description: "Google Ads para Shopware: tracking, Merchant Center, Performance Max y optimización por ROAS para que tus campañas vendan.",
    url: "https://www.mktweb360.com/google-ads-shopware-campanas-que-venden/",
    type: "article",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "Google Ads para Shopware: campañas que venden de verdad",
  description: "Cómo montar Google Ads para tu tienda Shopware: tracking de conversiones, conexión con Merchant Center, Performance Max, Shopping y optimización por ROAS.",
  author: { "@type": "Organization", name: "Mkt Web 360 SLU" },
  publisher: { "@type": "Organization", name: "Mkt Web 360 SLU", url: "https://www.mktweb360.com" },
  datePublished: "2026-06-26",
  url: "https://www.mktweb360.com/google-ads-shopware-campanas-que-venden/",
  mainEntityOfPage: "https://www.mktweb360.com/google-ads-shopware-campanas-que-venden/",
};

const FAQS = [
  { q: "¿Qué necesito antes de lanzar Google Ads en Shopware?", a: "Un tracking de conversiones fiable. El evento purchase debe enviarse con transaction_id, value, currency e items, normalmente vía Google Tag Manager. Sin medición correcta, las campañas optimizan a ciegas." },
  { q: "¿Cómo conecto Shopware con Google Merchant Center?", a: "Hay tres vías: el plugin oficial de Shopware (automático), un feed XML manual o programado (control total) o herramientas de terceros como Channable (reglas avanzadas para catálogos complejos)." },
  { q: "¿Performance Max o Shopping estándar?", a: "Lo ideal suele ser combinarlas: Performance Max para cubrir todo el inventario con IA y Shopping estándar cuando necesitas control manual sobre productos o márgenes. El remarketing dinámico complementa impactando a quien ya te visitó." },
  { q: "¿Por qué es tan importante el título del producto en el feed?", a: "Porque determina para qué búsquedas aparece tu producto en Shopping. Un título estructurado por intención (tipo, marca, modelo, característica) capta mucho más tráfico cualificado que uno genérico." },
  { q: "¿Debo optimizar por CPC o por ROAS?", a: "Por ROAS. El coste por clic no dice si ganas dinero; el retorno de la inversión publicitaria sí. Un clic caro que vende con margen es mejor que uno barato que no convierte." },
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

export default function GoogleAdsShopwarePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <article className="max-w-3xl mx-auto px-4 py-12">
        <Breadcrumbs crumbs={[{ label: "Inicio", href: "/" }, { label: "Blog", href: "/blog/" }, { label: "Google Ads para Shopware" }]} />

        <header className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="bg-primary-100 text-primary-700 text-xs font-medium px-2.5 py-0.5 rounded-full">Shopware · Ads</span>
            <time className="text-sm text-gray-400" dateTime="2026-06-26">26 de junio de 2026</time>
          </div>
          <h1 className="text-4xl font-bold text-primary-600 mb-4 leading-tight">
            Google Ads para Shopware: campañas que venden de verdad
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Las campañas no fallan por las campañas, fallan por lo que hay debajo. Te explicamos el orden correcto para que Google Ads sea rentable en tu tienda Shopware.
          </p>
        </header>

        <div className="text-gray-700 space-y-6 leading-relaxed">
          <p>Google Ads puede ser el canal más rentable de una tienda Shopware o un agujero por el que se escapa el presupuesto. La diferencia casi nunca está en las campañas: está en lo que hay debajo. Sin medición fiable y sin un feed de productos bien conectado, ninguna optimización funciona. Este es el orden correcto para que las campañas vendan de verdad.</p>
          <h2 className="text-2xl font-bold text-primary-600">El tracking de conversiones es el prerrequisito</h2>
          <p>Antes de invertir un euro, la tienda tiene que medir bien. El evento clave es purchase, y debe enviarse con transaction_id (para no duplicar conversiones), value y currency (para calcular el retorno real) e items (para atribuir ventas a productos concretos). Lo habitual es implementarlo mediante Google Tag Manager, disparando el evento en la página de confirmación de pedido con los datos reales de la compra. Sin esto, Google optimiza a ciegas.</p>
          <h2 className="text-2xl font-bold text-primary-600">Conectar Shopware con Google Merchant Center</h2>
          <p>El feed de productos es el combustible de Shopping y Performance Max. Hay tres formas de conectarlo: el plugin oficial de Shopware para Merchant Center, que sincroniza el catálogo de forma automática; un feed XML generado y subido de forma manual o programada, más laborioso pero con control total; o herramientas de terceros como Channable, que añaden reglas avanzadas de transformación del feed para catálogos complejos. La elección depende del tamaño y la complejidad del catálogo.</p>
          <h2 className="text-2xl font-bold text-primary-600">Estructura de campañas que funciona</h2>
          <p>Una estructura eficaz combina tres piezas. Performance Max para cubrir todo el inventario de Google (Shopping, búsqueda, display, YouTube) con la IA optimizando la inversión. Shopping estándar cuando se quiere más control manual sobre productos o márgenes concretos. Y remarketing dinámico para impactar a quien ya visitó la tienda o abandonó el carrito con los productos exactos que vio. No se trata de elegir una, sino de orquestarlas.</p>
          <h2 className="text-2xl font-bold text-primary-600">Optimiza los títulos del feed</h2>
          <p>En Shopping, el título del producto es lo que más afecta a qué búsquedas activas. Un título optimizado incluye lo que el cliente busca: tipo de producto, marca, modelo, característica clave y, cuando aplica, talla o color. Pasar de un título genérico a uno estructurado por intención de búsqueda puede multiplicar las impresiones cualificadas sin tocar la puja.</p>

          <div className="bg-primary-50 rounded-xl p-6 border border-primary-100">
            <p className="font-semibold text-primary-700 mb-2">¿Tus campañas de Google Ads no rinden en Shopware?</p>
            <p className="text-gray-600 text-sm mb-4">Revisamos tu tracking, tu feed y tu estructura de campañas, y te decimos dónde se está perdiendo el presupuesto y cómo recuperar rentabilidad.</p>
            <Link href="/marketing-shopware/" className="inline-block bg-accent-500 text-white px-6 py-2.5 rounded-full font-semibold text-sm hover:bg-accent-600 transition-colors">
              Ver marketing para Shopware
            </Link>
          </div>
          <h2 className="text-2xl font-bold text-primary-600">ROAS, no CPC: la métrica correcta</h2>
          <p>Optimizar por coste por clic lleva a decisiones equivocadas: un clic barato que no vende es caro, y un clic caro que genera una venta rentable es una ganga. La métrica que importa en ecommerce es el ROAS (retorno de la inversión publicitaria): cuántos euros de venta genera cada euro invertido. Toda la estructura —medición, feed y campañas— existe para poder optimizar por ROAS con datos fiables.</p>

          <div className="bg-primary-600 text-white rounded-2xl p-8 my-2 text-center">
            <h2 className="text-2xl font-bold mb-3">Haz que tu inversión en Google Ads venda</h2>
            <p className="text-primary-200 mb-6">
              Montamos y optimizamos tus campañas de Google Ads para Shopware con medición fiable y foco en el retorno, no en métricas de vanidad.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/marketing-shopware/" className="bg-accent-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-accent-600 transition-colors">
                Ver marketing para Shopware
              </Link>
              <Link href="/sem-publicidad-ppc/" className="border-2 border-white text-white px-6 py-3 rounded-full font-semibold hover:bg-white/10 transition-colors">
                Ver servicio SEM
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
            Servicios relacionados: <Link href="/marketing-shopware/" className="text-accent-500 hover:underline">Marketing Shopware</Link> · <Link href="/sem-publicidad-ppc/" className="text-accent-500 hover:underline">SEM / Google Ads</Link>
          </p>
        </div>

        <nav className="mt-12 pt-8 border-t border-gray-200">
          <Link href="/blog/" className="text-accent-500 hover:text-accent-600 font-medium text-sm">← Volver al blog</Link>
        </nav>
      </article>
      <RelatedArticles currentSlug="google-ads-shopware-campanas-que-venden" />
    </>
  );
}
