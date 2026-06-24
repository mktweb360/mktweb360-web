import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { RelatedArticles } from "@/components/RelatedArticles";

export const metadata: Metadata = {
  title: "Diseño Web para Tienda Online — Sin Comisiones ni Licencias | Mkt Web 360",
  description:
    "Diseño y desarrollo de tienda online profesional sin comisiones por venta ni licencias mensuales. WooCommerce, SEO incluido, desde 490€. Gestión autónoma.",
  alternates: { canonical: "https://www.mktweb360.com/diseno-web-tienda-online/" },
  openGraph: {
    title: "Diseño Web para Tienda Online — Sin Comisiones ni Licencias | Mkt Web 360",
    description:
      "Diseño y desarrollo de tienda online profesional sin comisiones por venta ni licencias mensuales. WooCommerce, SEO incluido, desde 490€. Gestión autónoma.",
    url: "https://www.mktweb360.com/diseno-web-tienda-online/",
    type: "article",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "Diseño Web para Tienda Online: Sin Comisiones, Sin Licencias",
  description:
    "Diseño y desarrollo de tienda online profesional sin comisiones por venta ni licencias mensuales. WooCommerce, SEO incluido, desde 490€.",
  author: { "@type": "Organization", name: "Mkt Web 360 SLU" },
  publisher: { "@type": "Organization", name: "Mkt Web 360 SLU", url: "https://www.mktweb360.com" },
  datePublished: "2026-06-25",
  dateModified: "2026-06-25",
  image: "/og-image.jpg",
  url: "https://www.mktweb360.com/diseno-web-tienda-online/",
  mainEntityOfPage: "https://www.mktweb360.com/diseno-web-tienda-online/",
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Inicio", item: "https://www.mktweb360.com/" },
    { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.mktweb360.com/blog/" },
    { "@type": "ListItem", position: 3, name: "Diseño web tienda online", item: "https://www.mktweb360.com/diseno-web-tienda-online/" },
  ],
};

const FAQS = [
  {
    q: "¿Por qué WooCommerce y no Shopify?",
    a: "Shopify cobra entre el 0,5% y el 2% de cada venta además de su cuota mensual (desde 29€/mes). Con WooCommerce sobre WordPress no pagas comisiones por venta ni licencias mensuales de plataforma. La tienda es tuya, sin ataduras, y puedes migrar de hosting cuando quieras.",
  },
  {
    q: "¿Cuántos productos puedo tener en la tienda?",
    a: "Sin límite. WooCommerce gestiona desde tiendas de 10 productos hasta catálogos de miles de referencias. Podemos importar tu catálogo existente en CSV si ya tienes los productos en otro sistema.",
  },
  {
    q: "¿Qué métodos de pago podéis integrar?",
    a: "Integramos los métodos de pago más habituales en España: tarjeta de crédito/débito vía Redsys o Stripe, PayPal, transferencia bancaria, contrareembolso y Bizum. También podemos integrar financiación a plazos con Aplazame o Sequra si tu ticket medio lo justifica.",
  },
  {
    q: "¿La tienda estará optimizada para SEO desde el inicio?",
    a: "Sí. Configuramos la estructura de URLs, los metadatos de productos y categorías, el sitemap, el schema de productos (para rich snippets en Google), la velocidad de carga y la versión móvil. El SEO técnico está incluido en el desarrollo desde el primer día.",
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

export default function DisenoWebTiendaOnlinePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <article className="max-w-3xl mx-auto px-4 py-12">
        <Breadcrumbs crumbs={[{ label: "Inicio", href: "/" }, { label: "Blog", href: "/blog/" }, { label: "Diseño web tienda online" }]} />

        <header className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="bg-primary-100 text-primary-700 text-xs font-medium px-2.5 py-0.5 rounded-full">Diseño Web · Ecommerce</span>
            <time className="text-sm text-gray-400" dateTime="2026-06-25">25 de junio de 2026</time>
          </div>
          <h1 className="text-4xl font-bold text-primary-600 mb-4 leading-tight">
            Diseño Web para Tienda Online: Sin Comisiones, Sin Licencias
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Tener una tienda online no debería costar un porcentaje de cada venta que hagas. Diseñamos tiendas online profesionales sobre WooCommerce sin comisiones por venta, sin licencias mensuales y con todo lo que necesitas para vender desde el primer día.
          </p>
        </header>

        <div className="text-gray-700 space-y-6 leading-relaxed">
          <p>
            El modelo de plataformas como Shopify se ha normalizado tanto que mucha gente asume que pagar una cuota mensual más un porcentaje de cada venta es lo normal. No lo es. Existen alternativas que te dan el mismo control, la misma profesionalidad y mejores prestaciones — sin que la plataforma se lleve parte de tus ingresos cada vez que vendes.
          </p>

          <h2 className="text-2xl font-bold text-primary-600">WooCommerce vs Shopify: la diferencia que nadie te cuenta</h2>
          <p>
            Shopify es una plataforma SaaS: pagas una suscripción mensual (desde 29€ hasta 299€ según el plan) y además cedes entre el 0,5% y el 2% de cada venta que haces a través de la plataforma. Parece poco, pero si vendes 5.000€ al mes y pagas un 1% de comisión, son 50€ extra al mes solo en comisiones — 600€ al año que se suman a la cuota de la plataforma.
          </p>
          <p>
            <strong>WooCommerce es de código abierto y gratuito.</strong> Se instala sobre WordPress, que también es gratuito. Solo pagas el hosting (desde 8-15€/mes para una tienda pequeña) y el dominio. Sin cuotas mensuales de plataforma. Sin comisiones por venta. La tienda es completamente tuya y puedes llevártela a cualquier servidor cuando quieras.
          </p>
          <p>
            Shopify tiene su ventaja en la curva de aprendizaje inicial — es más sencilla para alguien sin conocimientos técnicos. Pero para quien va en serio con su tienda, WooCommerce ofrece más flexibilidad, sin comisiones y sin el riesgo de que la plataforma cambie sus tarifas y te deje sin opciones.
          </p>

          <h2 className="text-2xl font-bold text-primary-600">Qué incluye una tienda online profesional</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Diseño 100% personalizado:</strong> adaptado a tu marca, tus colores y tu identidad. No plantillas genéricas — un diseño que diferencia tu tienda de la competencia.</li>
            <li><strong>Catálogo de productos:</strong> carga inicial de tus productos con fotos, descripciones, variantes (talla, color, etc.), precios y stock. Importación masiva por CSV si tienes catálogos grandes.</li>
            <li><strong>Métodos de pago:</strong> tarjeta de crédito/débito (Redsys o Stripe), PayPal, transferencia bancaria, contrareembolso y Bizum. También financiación a plazos si tu ticket medio lo justifica.</li>
            <li><strong>Gestión de envíos:</strong> zonas de envío, tarifas según peso o precio, envío gratuito a partir de X€, integración con mensajería (Correos, MRW, SEUR, GLS).</li>
            <li><strong>SEO técnico incluido:</strong> estructura de URLs amigables, metadatos de productos y categorías, schema de productos para rich snippets, sitemap y velocidad optimizada.</li>
            <li><strong>Panel de gestión autónoma:</strong> añadir productos, gestionar pedidos, ver estadísticas de ventas y actualizar la tienda sin necesidad de conocimientos técnicos.</li>
          </ul>

          <div className="bg-primary-50 rounded-xl p-6 border border-primary-100">
            <p className="font-semibold text-primary-700 mb-2">Tienda online desde 490€, sin comisiones por venta</p>
            <p className="text-gray-600 text-sm mb-4">Solo 5 plazas disponibles cada mes. Diseño profesional, SEO incluido y gestión autónoma desde el primer día. La tienda es tuya.</p>
            <Link href="/tienda-online/" className="inline-block bg-accent-500 text-white px-6 py-2.5 rounded-full font-semibold text-sm hover:bg-accent-600 transition-colors">
              Ver oferta tienda online
            </Link>
          </div>

          <h2 className="text-2xl font-bold text-primary-600">Proceso de trabajo: de cero a tienda activa en 4 pasos</h2>
          <ul className="list-none space-y-4">
            {[
              { n: "1", t: "Análisis y planificación", d: "Estudiamos tu catálogo, tus competidores online y las keywords con más volumen de búsqueda para estructurar la tienda de forma que posicione bien desde el lanzamiento." },
              { n: "2", t: "Diseño y desarrollo", d: "Diseñamos la tienda adaptada a tu marca: home, fichas de producto, categorías, carrito, checkout y páginas legales. Optimizada para móvil y velocidad de carga." },
              { n: "3", t: "Carga de productos e integraciones", d: "Cargamos tu catálogo inicial, configuramos los métodos de pago, las zonas de envío y cualquier integración necesaria (ERP, gestión de stock, marketplace)." },
              { n: "4", t: "Formación y lanzamiento", d: "Te formamos para gestionar pedidos, añadir productos y manejar la tienda de forma autónoma. Y te acompañamos en el lanzamiento para que todo funcione desde el primer día." },
            ].map((s) => (
              <li key={s.n} className="flex gap-4 items-start">
                <span className="w-8 h-8 rounded-full bg-accent-500 text-white text-sm font-bold flex items-center justify-center shrink-0">{s.n}</span>
                <div>
                  <p className="font-semibold text-primary-700">{s.t}</p>
                  <p className="text-gray-600 text-sm">{s.d}</p>
                </div>
              </li>
            ))}
          </ul>

          <div className="bg-primary-600 text-white rounded-2xl p-8 my-2 text-center">
            <h2 className="text-2xl font-bold mb-3">Tu tienda online, sin comisiones, desde 490€</h2>
            <p className="text-primary-200 mb-6">
              Diseño profesional, SEO incluido, gestión autónoma y sin licencias mensuales. Solo 5 plazas al mes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/tienda-online/" className="bg-accent-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-accent-600 transition-colors">
                Ver oferta tienda online
              </Link>
              <Link href="/contacto/" className="border-2 border-white text-white px-6 py-3 rounded-full font-semibold hover:bg-white/10 transition-colors">
                Solicitar presupuesto
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
            Ver también: <Link href="/migrar-shopify-woocommerce/" className="text-accent-500 hover:underline">Migrar de Shopify a WooCommerce</Link> · <Link href="/seo-para-ecommerce-errores-que-frenan-ventas/" className="text-accent-500 hover:underline">SEO para ecommerce</Link> · <Link href="/configurar-envios-woocommerce/" className="text-accent-500 hover:underline">Configurar envíos en WooCommerce</Link>
          </p>
        </div>

        <nav className="mt-12 pt-8 border-t border-gray-200">
          <Link href="/blog/" className="text-accent-500 hover:text-accent-600 font-medium text-sm">← Volver al blog</Link>
        </nav>
      </article>
      <RelatedArticles currentSlug="diseno-web-tienda-online" category="Diseño Web" />
    </>
  );
}
