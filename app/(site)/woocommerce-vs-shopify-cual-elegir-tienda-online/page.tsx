import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { RelatedArticles } from "@/components/RelatedArticles";
import { BlogBanner } from "@/components/BlogBanner";

export const metadata: Metadata = {
  title: "WooCommerce vs Shopify: cuál elegir para tu tienda online en España en 2026",
  description:
    "WooCommerce es gratuito con control total. Shopify es más rápido de lanzar pero tiene comisiones. Comparativa honesta con recomendación por tipo de negocio y coste real a 3 años.",
  alternates: { canonical: "https://www.mktweb360.com/woocommerce-vs-shopify-cual-elegir-tienda-online/" },
  openGraph: {
    title: "WooCommerce vs Shopify: cuál elegir para tu tienda online en 2026 | Mkt Web 360",
    description: "Comparativa honesta entre WooCommerce y Shopify con coste real a 3 años y recomendación por tipo de negocio.",
    url: "https://www.mktweb360.com/woocommerce-vs-shopify-cual-elegir-tienda-online/",
    type: "article",
    images: [{ url: "/og-woocommerce-vs-shopify-cual-elegir-2026.jpg", width: 1200, height: 630 }],
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "WooCommerce vs Shopify: cuál elegir para tu tienda online en España en 2026",
  description: "Comparativa honesta entre WooCommerce y Shopify con coste real a 3 años, ventajas de cada plataforma y recomendación por tipo de negocio.",
  author: { "@type": "Organization", name: "Mkt Web 360 SLU" },
  publisher: { "@type": "Organization", name: "Mkt Web 360 SLU", url: "https://www.mktweb360.com" },
  datePublished: "2026-06-26",
  url: "https://www.mktweb360.com/woocommerce-vs-shopify-cual-elegir-tienda-online/",
  mainEntityOfPage: "https://www.mktweb360.com/woocommerce-vs-shopify-cual-elegir-tienda-online/",
};

const FAQS = [
  {
    q: "¿Qué es más barato, WooCommerce o Shopify?",
    a: "A largo plazo, WooCommerce. Es un plugin gratuito de WordPress: pagas hosting, dominio y desarrollo, pero no cuotas de plataforma ni comisiones por venta. Shopify cobra una cuota mensual y, en su plan básico, una comisión sobre ventas que crece con tu facturación.",
  },
  {
    q: "¿Cuál es más fácil de lanzar?",
    a: "Shopify. Está pensado para poner una tienda en marcha rápido y sin conocimientos técnicos, con alojamiento y mantenimiento incluidos. WooCommerce ofrece más libertad pero requiere gestionar hosting, actualizaciones y configuración, por lo que suele necesitar apoyo técnico inicial.",
  },
  {
    q: "¿Shopify cobra comisión por cada venta?",
    a: "En su plan básico, sí: alrededor de un 2% sobre ventas si no usas su pasarela de pago propia. Sobre una facturación de 80.000 € al año, eso supone unos 1.600 € anuales solo en comisiones, frente a 0 € en WooCommerce.",
  },
  {
    q: "¿De quién es la tienda en cada caso?",
    a: "En WooCommerce, la tienda es 100% tuya: controlas el código, los datos y el alojamiento. En Shopify operas sobre su plataforma, con sus reglas y dependencias. Para negocios que quieren propiedad total y flexibilidad a largo plazo, WooCommerce ofrece más control.",
  },
  {
    q: "¿Y si vendo a otras empresas (B2B)?",
    a: "Para ecommerce B2B con catálogos complejos, precios por cliente y grandes volúmenes, conviene valorar Shopware, una plataforma orientada específicamente a ese escenario. WooCommerce y Shopify cubren muy bien el B2C y el B2B sencillo; Shopware encaja mejor en operaciones mayoristas exigentes.",
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

export default function WooCommerceShopifyPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <article className="max-w-3xl mx-auto px-4 py-12">
        <Breadcrumbs crumbs={[{ label: "Inicio", href: "/" }, { label: "Blog", href: "/blog/" }, { label: "WooCommerce vs Shopify" }]} />

        <header className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="bg-primary-100 text-primary-700 text-xs font-medium px-2.5 py-0.5 rounded-full">Ecommerce</span>
            <time className="text-sm text-gray-400" dateTime="2026-06-26">26 de junio de 2026</time>
          </div>
          <h1 className="text-4xl font-bold text-primary-600 mb-4 leading-tight">
            WooCommerce vs Shopify: cuál elegir para tu tienda online en España en 2026
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Es la decisión que marca los próximos años de tu tienda online. WooCommerce te da control total sin comisiones; Shopify te pone a vender rápido a cambio de cuotas. Aquí tienes la comparativa honesta, con números reales a tres años.
          </p>
        </header>

        <div className="text-gray-700 space-y-6 leading-relaxed">
          <p>
            Elegir plataforma de ecommerce no es una decisión técnica menor: condiciona tus costes, tu margen y tu libertad durante años. WooCommerce y Shopify son las dos opciones dominantes y representan dos filosofías opuestas. Entender en qué se diferencian de verdad —más allá del marketing de cada una— es lo que te permite acertar.
          </p>

          <h2 className="text-2xl font-bold text-primary-600">Dos filosofías distintas</h2>
          <p>WooCommerce es un plugin gratuito de código abierto para WordPress: convierte tu web en una tienda y te deja el control absoluto del código, los datos y el alojamiento. Shopify es una plataforma cerrada de pago por suscripción: te lo da todo hecho —hosting, seguridad, mantenimiento— a cambio de operar dentro de su ecosistema y sus reglas. Uno prioriza la propiedad y la flexibilidad; el otro, la inmediatez y la comodidad.</p>

          <h2 className="text-2xl font-bold text-primary-600">El coste real a 3 años</h2>
          <p>Aquí es donde la decisión se vuelve concreta. Tomemos una tienda que factura 80.000 € al año. En Shopify, su plan básico aplica en torno a un 2% de comisión sobre ventas si no usas su pasarela propia: son unos 1.600 € al año solo en comisiones, más la cuota mensual de la plataforma. En tres años, esas comisiones suman unos 4.800 € que en WooCommerce simplemente no existen. WooCommerce tiene costes de hosting, dominio y desarrollo, pero no cobra cuota de plataforma ni porcentaje por venta. A más facturación, mayor es la brecha a favor de WooCommerce.</p>

          <h2 className="text-2xl font-bold text-primary-600">Control, propiedad y flexibilidad</h2>
          <p>WooCommerce es, a día de hoy, la plataforma de ecommerce más usada del mundo, con un 33,4% de cuota de mercado según DataFirefly (2026). Su fuerza está en la libertad: personalizas cualquier aspecto, eres dueño de tus datos y no dependes de las decisiones de un tercero. Shopify, por su parte, crece a un ritmo del 30% anual gracias a su facilidad de uso, pero a costa de operar dentro de un sistema cerrado con menos margen de personalización profunda.</p>

          <div className="bg-primary-50 rounded-xl p-6 border border-primary-100">
            <p className="font-semibold text-primary-700 mb-2">¿No tienes claro qué plataforma encaja con tu negocio?</p>
            <p className="text-gray-600 text-sm mb-4">Te ayudamos a elegir y montamos tu tienda online sin comisiones por venta ni licencias mensuales, optimizada para SEO desde el primer día.</p>
            <Link href="/diseno-de-paginas-web/diseno-tiendas-online/" className="inline-block bg-accent-500 text-white px-6 py-2.5 rounded-full font-semibold text-sm hover:bg-accent-600 transition-colors">
              Ver diseño de tiendas online
            </Link>
          </div>

          <h2 className="text-2xl font-bold text-primary-600">Cuándo elegir Shopify</h2>
          <p>Shopify tiene sentido cuando necesitas lanzar rápido, no quieres preocuparte de la parte técnica y tu facturación todavía es modesta —donde las comisiones pesan poco en términos absolutos—. Es una buena opción para validar una idea, para quien arranca sin equipo técnico o para negocios que valoran la comodidad por encima del control. La contrapartida llega cuando creces: las comisiones escalan con tus ventas y la dependencia de la plataforma se nota.</p>

          <BlogBanner variant="default" />

          <h2 className="text-2xl font-bold text-primary-600">Cuándo elegir WooCommerce (y cuándo mirar a Shopware)</h2>
          <p>WooCommerce encaja cuando piensas a medio y largo plazo: quieres propiedad total, márgenes sin comisiones y libertad para crecer sin ataduras. Es la opción más rentable a medida que sube tu facturación y la preferida de quien quiere una tienda que sea de verdad suya. Para un escenario distinto —ecommerce B2B con catálogos complejos, precios por cliente y grandes volúmenes— conviene valorar <Link href="/marketing-shopware/" className="text-accent-500 hover:underline">Shopware</Link>, una plataforma orientada específicamente a operaciones mayoristas exigentes. La plataforma correcta depende siempre del tipo de negocio.</p>

          <p className="text-sm text-gray-500">
            Ver también: <Link href="/seo-para-ecommerce-errores-que-frenan-ventas/" className="text-accent-500 hover:underline">Errores SEO que frenan ventas en tu tienda</Link> · <Link href="/google-merchant-center-ecommerce-guia/" className="text-accent-500 hover:underline">Guía de Google Merchant Center</Link>
          </p>

          <div className="bg-primary-600 text-white rounded-2xl p-8 my-2 text-center">
            <h2 className="text-2xl font-bold mb-3">Tu tienda online, sin comisiones por venta</h2>
            <p className="text-primary-200 mb-6">
              Montamos tu ecommerce en la plataforma que mejor encaje con tu negocio, optimizado para vender y para posicionar en Google desde el día uno.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/diseno-de-paginas-web/diseno-tiendas-online/" className="bg-accent-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-accent-600 transition-colors">
                Ver diseño de tiendas online
              </Link>
              <Link href="/seo-posicionamiento-web-organico/" className="border-2 border-white text-white px-6 py-3 rounded-full font-semibold hover:bg-white/10 transition-colors">
                Ver servicio SEO
              </Link>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-primary-600">Preguntas frecuentes sobre WooCommerce y Shopify</h2>
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
            Servicios relacionados: <Link href="/diseno-de-paginas-web/diseno-tiendas-online/" className="text-accent-500 hover:underline">Diseño de Tiendas Online</Link> · <Link href="/seo-posicionamiento-web-organico/" className="text-accent-500 hover:underline">SEO Posicionamiento</Link>
          </p>
        </div>

        <nav className="mt-12 pt-8 border-t border-gray-200">
          <Link href="/blog/" className="text-accent-500 hover:text-accent-600 font-medium text-sm">← Volver al blog</Link>
        </nav>
      </article>
      <RelatedArticles currentSlug="woocommerce-vs-shopify-cual-elegir-tienda-online" />
    </>
  );
}
