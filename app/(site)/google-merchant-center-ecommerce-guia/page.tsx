import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { RelatedArticles } from "@/components/RelatedArticles";
import { BlogBanner } from "@/components/BlogBanner";

export const metadata: Metadata = {
  title: "Google Merchant Center para ecommerce: guía completa 2026",
  description:
    "Aprende a configurar Google Merchant Center, crear tu feed de productos y aparecer en Google Shopping para aumentar las ventas de tu tienda online.",
  alternates: { canonical: "https://www.mktweb360.com/google-merchant-center-ecommerce-guia/" },
  openGraph: {
    title: "Google Merchant Center para ecommerce: guía completa 2026 | Mkt Web 360",
    description: "Aprende a configurar Google Merchant Center, crear tu feed de productos y aparecer en Google Shopping para aumentar las ventas de tu tienda online.",
    url: "https://www.mktweb360.com/google-merchant-center-ecommerce-guia/",
    type: "article",
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "Google Merchant Center para ecommerce: guía completa 2026",
  description: "Aprende a configurar Google Merchant Center, crear tu feed de productos y aparecer en Google Shopping para aumentar las ventas de tu tienda online.",
  author: { "@type": "Organization", name: "Mkt Web 360 SLU" },
  publisher: { "@type": "Organization", name: "Mkt Web 360 SLU", url: "https://www.mktweb360.com" },
  datePublished: "2026-06-12",
  url: "https://www.mktweb360.com/google-merchant-center-ecommerce-guia/",
  mainEntityOfPage: "https://www.mktweb360.com/google-merchant-center-ecommerce-guia/",
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Inicio", item: "https://www.mktweb360.com/" },
    { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.mktweb360.com/blog/" },
    { "@type": "ListItem", position: 3, name: "Google Merchant Center para ecommerce", item: "https://www.mktweb360.com/google-merchant-center-ecommerce-guia/" },
  ],
};

const FAQS = [
  {
    q: "¿Google Merchant Center es gratuito?",
    a: "Crear y gestionar la cuenta de Merchant Center es gratuito. Las fichas de productos orgánicas en Google Shopping también son gratuitas. Si quieres hacer campañas de Shopping pagadas, eso tiene coste como cualquier campaña de Google Ads.",
  },
  {
    q: "¿Qué es un feed de productos y cómo se crea?",
    a: "Un feed de productos es un archivo estructurado (normalmente XML o CSV) que contiene información detallada de todos tus productos: título, descripción, precio, disponibilidad, imagen, URL. La mayoría de plataformas de ecommerce (WooCommerce, Shopify, PrestaShop) tienen plugins o herramientas para generarlo automáticamente.",
  },
  {
    q: "¿Cuánto tarda Google en aprobar los productos?",
    a: "Google revisa los productos antes de mostrarlos. El proceso puede tardar entre 3 y 10 días laborables para cuentas nuevas. Productos rechazados pueden necesitar correcciones y una nueva revisión.",
  },
  {
    q: "¿Puedo usar Google Merchant Center si no tengo tienda online propia?",
    a: "Google Merchant Center está diseñado para tiendas con web propia. Si vendes en marketplaces como Amazon o Etsy, esas plataformas gestionan su propia presencia en Google Shopping.",
  },
  {
    q: "¿Qué diferencia hay entre Google Shopping orgánico y campañas de Shopping?",
    a: "El Shopping orgánico (fichas gratuitas) muestra tus productos en Google sin coste, con menor control sobre la visibilidad. Las campañas de Shopping (Google Ads) te permiten pagar para aparecer en posiciones destacadas con mayor control sobre presupuesto, segmentación y optimización.",
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

export default function GoogleMerchantCenterPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <article className="max-w-3xl mx-auto px-4 py-12">
        <Breadcrumbs crumbs={[{ label: "Inicio", href: "/" }, { label: "Blog", href: "/blog/" }, { label: "Google Merchant Center para ecommerce" }]} />

        <header className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="bg-primary-100 text-primary-700 text-xs font-medium px-2.5 py-0.5 rounded-full">Ecommerce</span>
            <time className="text-sm text-gray-400" dateTime="2026-06-12">12 de junio de 2026</time>
          </div>
          <h1 className="text-4xl font-bold text-primary-600 mb-4 leading-tight">
            Google Merchant Center para ecommerce: guía completa 2026
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Si tienes una tienda online y no estás en Google Merchant Center, estás perdiendo visibilidad en el canal donde los compradores buscan productos con intención de compra. Esta guía te explica qué es, cómo configurarlo y cómo sacarle el máximo partido.
          </p>
        </header>

        <div className="text-gray-700 space-y-6 leading-relaxed">
          <p>
            Google Shopping es uno de los canales de captación más efectivos para ecommerce. Cuando alguien busca "comprar zapatillas trail baratas" o "auriculares inalámbricos oferta", Google muestra fichas de productos con imagen, precio y tienda antes de los resultados orgánicos. Estar ahí — con productos bien configurados — marca una diferencia enorme en visibilidad y ventas.
          </p>

          <h2 className="text-2xl font-bold text-primary-600">Qué es Google Merchant Center y para qué sirve</h2>
          <p>Google Merchant Center es la plataforma de Google que permite a las tiendas online subir su catálogo de productos para que aparezcan en Google Shopping, tanto en las fichas gratuitas como en las campañas de Shopping pagadas a través de Google Ads. Es el punto de conexión entre tu tienda y la distribución de productos en los resultados de Google. Sin una cuenta activa y bien configurada, tus productos no pueden aparecer en Google Shopping.</p>

          <h2 className="text-2xl font-bold text-primary-600">Cómo crear y configurar la cuenta</h2>
          <p>El proceso empieza en merchants.google.com con una cuenta de Google. Los pasos fundamentales son verificar y reclamar el dominio de la tienda, configurar la información del negocio (nombre, país, divisa), definir las políticas de envío y devolución, y enlazar la cuenta con Google Ads si quieres hacer campañas pagadas. La verificación del dominio requiere acceso al código de la web o al DNS del dominio.</p>

          <h2 className="text-2xl font-bold text-primary-600">El feed de productos: el corazón de Merchant Center</h2>
          <p>El feed de productos es el archivo que contiene la información de todos tus artículos. La calidad del feed determina directamente la visibilidad y el rendimiento en Shopping. Los atributos más importantes son: título (que debe incluir palabras clave relevantes), descripción, precio actualizado, disponibilidad en tiempo real, imagen de alta calidad y categoría correcta de Google. Un feed con errores o datos incompletos genera productos rechazados y visibilidad reducida.</p>

          <div className="bg-primary-50 rounded-xl p-6 border border-primary-100">
            <p className="font-semibold text-primary-700 mb-2">¿Quieres configurar Google Merchant Center y tus primeras campañas de Shopping?</p>
            <p className="text-gray-600 text-sm mb-4">Configuramos tu feed de productos, optimizamos la cuenta y lanzamos campañas que convierten desde el primer día.</p>
            <Link href="/sem-publicidad-ppc/" className="inline-block bg-accent-500 text-white px-6 py-2.5 rounded-full font-semibold text-sm hover:bg-accent-600 transition-colors">
              Ver servicio SEM y Google Ads
            </Link>
          </div>

          <BlogBanner variant="ecommerce" />

          <h2 className="text-2xl font-bold text-primary-600">Errores frecuentes que generan productos rechazados</h2>
          <p>Los rechazos más habituales son imágenes con marca de agua o fondo blanco incorrecto, precios que no coinciden entre el feed y la web, disponibilidad desactualizada, URLs de producto rotas o redirigidas incorrectamente, y políticas de devolución que no cumplen los requisitos de Google. Mantener el feed actualizado en tiempo real y con datos coherentes entre el feed y la web es lo que evita la mayoría de rechazos.</p>

          <h2 className="text-2xl font-bold text-primary-600">De fichas gratuitas a campañas de Shopping que venden</h2>
          <p>Las fichas gratuitas de Google Shopping son un buen punto de partida para ganar visibilidad sin coste. Las campañas de Shopping pagadas (ahora integradas en las campañas Performance Max de Google Ads) permiten mayor control sobre presupuesto, segmentación por tipo de producto y optimización basada en datos de conversión. Combinar ambas — fichas orgánicas bien trabajadas y campañas pagadas optimizadas — es la estrategia que mejor funciona para ecommerce en 2026.</p>

          <p className="text-sm text-gray-500">
            Ver también: <Link href="/seo-para-ecommerce-errores-que-frenan-ventas/" className="text-accent-500 hover:underline">SEO para ecommerce: errores que frenan las ventas</Link> · <Link href="/senales-web-necesita-rediseno/" className="text-accent-500 hover:underline">Señales de que tu web necesita un rediseño</Link>
          </p>

          <div className="bg-primary-600 text-white rounded-2xl p-8 my-2 text-center">
            <h2 className="text-2xl font-bold mb-3">Haz que tus productos aparezcan donde los compradores buscan</h2>
            <p className="text-primary-200 mb-6">
              Configuramos tu cuenta de Merchant Center, optimizamos el feed y gestionamos campañas de Shopping para maximizar las ventas de tu ecommerce.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/sem-publicidad-ppc/" className="bg-accent-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-accent-600 transition-colors">
                Ver servicio Google Ads
              </Link>
              <Link href="/diseno-de-paginas-web/diseno-tiendas-online/" className="border-2 border-white text-white px-6 py-3 rounded-full font-semibold hover:bg-white/10 transition-colors">
                Ver tiendas online
              </Link>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-primary-600">Preguntas frecuentes sobre Google Merchant Center</h2>
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
            Servicio relacionado: <Link href="/sem-publicidad-ppc/" className="text-accent-500 hover:underline">SEM Publicidad PPC</Link> · <Link href="/diseno-de-paginas-web/diseno-tiendas-online/" className="text-accent-500 hover:underline">Diseño de Tiendas Online</Link>
          </p>
        </div>

        <nav className="mt-12 pt-8 border-t border-gray-200">
          <Link href="/blog/" className="text-accent-500 hover:text-accent-600 font-medium text-sm">← Volver al blog</Link>
        </nav>
      </article>
      <RelatedArticles currentSlug="google-merchant-center-ecommerce-guia" />
    </>
  );
}
