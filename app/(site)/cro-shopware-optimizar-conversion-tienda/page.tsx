import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { RelatedArticles } from "@/components/RelatedArticles";
import { BlogBanner } from "@/components/BlogBanner";

export const metadata: Metadata = {
  title: "CRO para Shopware: cómo optimizar la conversión de tu tienda",
  description:
    "Sube la conversión de tu tienda Shopware: eventos GA4 clave, las 5 causas reales de abandono de carrito y optimización de fichas de producto y checkout.",
  alternates: { canonical: "https://www.mktweb360.com/cro-shopware-optimizar-conversion-tienda/" },
  openGraph: {
    title: "CRO para Shopware: cómo optimizar la conversión de tu tienda | Mkt Web 360",
    description: "CRO para Shopware: eventos GA4, causas de abandono y optimización de fichas y checkout para vender más con el mismo tráfico.",
    url: "https://www.mktweb360.com/cro-shopware-optimizar-conversion-tienda/",
    type: "article",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "CRO para Shopware: cómo optimizar la conversión de tu tienda",
  description: "Sube la conversión de tu tienda Shopware: eventos GA4 clave, las 5 causas reales de abandono de carrito y optimización de fichas de producto y checkout.",
  author: { "@type": "Organization", name: "Mkt Web 360 SLU" },
  publisher: { "@type": "Organization", name: "Mkt Web 360 SLU", url: "https://www.mktweb360.com" },
  datePublished: "2026-06-26",
  url: "https://www.mktweb360.com/cro-shopware-optimizar-conversion-tienda/",
  mainEntityOfPage: "https://www.mktweb360.com/cro-shopware-optimizar-conversion-tienda/",
};

const FAQS = [
  { q: "¿Cuál es una buena tasa de conversión en ecommerce?", a: "La media global ronda el 2,7%, pero en España está entre el 1% y el 1,4% (DemandSage, 2026). Más que el dato absoluto, importa mejorar el tuyo: subir medio punto puede aumentar las ventas un 50% sin más tráfico." },
  { q: "¿Qué eventos de GA4 debo medir sí o sí?", a: "Cuatro: view_item, add_to_cart, begin_checkout y purchase. Con ellos se construye el embudo completo y se ve en qué paso exacto se pierde a los compradores." },
  { q: "¿Por qué la gente abandona el carrito?", a: "Por cinco causas habituales: costes inesperados al final, registro obligatorio, checkout largo, desconfianza en el pago e información insuficiente en la ficha. Todas se pueden medir y eliminar." },
  { q: "¿Qué no puede faltar en una ficha de producto?", a: "CTA visible sin scroll en móvil, precio y disponibilidad claros, política de devoluciones en la ficha, de 4 a 6 imágenes reales y reseñas con schema AggregateRating para mostrar estrellas y prueba social." },
  { q: "¿Con qué herramientas puedo diagnosticar la conversión?", a: "Con GA4 para el embudo cuantitativo, Microsoft Clarity (gratuito) para grabaciones y mapas de calor, y Shopware Analytics para cruzar con tu catálogo y pedidos. Las tres juntas te dicen dónde actuar." },
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

export default function CroShopwarePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <article className="max-w-3xl mx-auto px-4 py-12">
        <Breadcrumbs crumbs={[{ label: "Inicio", href: "/" }, { label: "Blog", href: "/blog/" }, { label: "CRO para Shopware" }]} />

        <header className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="bg-primary-100 text-primary-700 text-xs font-medium px-2.5 py-0.5 rounded-full">Shopware · CRO</span>
            <time className="text-sm text-gray-400" dateTime="2026-06-26">26 de junio de 2026</time>
          </div>
          <h1 className="text-4xl font-bold text-primary-600 mb-4 leading-tight">
            CRO para Shopware: cómo optimizar la conversión de tu tienda
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Atraer visitas es media batalla; que compren es la otra media. Te enseñamos a subir la conversión de tu tienda Shopware quitando fricción donde de verdad importa.
          </p>
        </header>

        <div className="text-gray-700 space-y-6 leading-relaxed">
          <p>Atraer tráfico a tu tienda Shopware es solo la mitad del trabajo. La otra mitad —y la más rentable— es conseguir que ese tráfico compre. Subir la conversión no requiere más visitas ni más presupuesto de publicidad: requiere quitar fricción donde el cliente la encuentra. Y casi siempre está en los mismos sitios.</p>
          <h2 className="text-2xl font-bold text-primary-600">La conversión media y por qué la tuya importa</h2>
          <p>La tasa de conversión media del ecommerce ronda el 2,7% a nivel global, pero en España se sitúa entre el 1% y el 1,4% (DemandSage, 2026). Esto significa que mejorar la conversión tiene un efecto directo y multiplicador: pasar de un 1% a un 1,5% es aumentar las ventas un 50% sin gastar un euro más en captación. Por eso el CRO es la palanca de crecimiento más rentable de una tienda con tráfico.</p>
          <h2 className="text-2xl font-bold text-primary-600">Los 4 eventos GA4 imprescindibles</h2>
          <p>No se puede mejorar lo que no se mide. En una tienda Shopware, los cuatro eventos de GA4 que no pueden faltar son: view_item (cuando alguien ve una ficha de producto), add_to_cart (cuando la añade al carrito), begin_checkout (cuando inicia el proceso de compra) y purchase (cuando completa el pedido). Con estos cuatro puntos se construye el embudo y se ve exactamente en qué paso se cae la gente.</p>
          <h2 className="text-2xl font-bold text-primary-600">Las 5 causas reales de abandono</h2>
          <p>El abandono de carrito tiene causas conocidas y casi siempre se repiten. Una: costes inesperados que aparecen al final (gastos de envío que el cliente no veía venir). Dos: obligar a registrarse para comprar. Tres: un checkout largo, con demasiados pasos o campos. Cuatro: desconfianza en el momento del pago, por falta de señales de seguridad o métodos conocidos. Cinco: información insuficiente en la ficha, que deja dudas sin resolver. Cada una de estas fricciones se puede medir y eliminar.</p>
          <h2 className="text-2xl font-bold text-primary-600">Optimiza tus fichas de producto</h2>
          <p>La ficha es donde se gana o se pierde la venta. Lo esencial: el CTA de compra visible sin hacer scroll en móvil, precio y disponibilidad claros desde el primer vistazo, la política de devoluciones presente en la propia ficha (reduce el miedo a equivocarse), un mínimo de 4 a 6 imágenes reales del producto y reseñas marcadas con schema AggregateRating para que muestren estrellas y aporten prueba social. Cada uno de estos elementos sube la conversión por separado; juntos, la transforman.</p>

          <div className="bg-primary-50 rounded-xl p-6 border border-primary-100">
            <p className="font-semibold text-primary-700 mb-2">¿Tu tienda Shopware recibe visitas pero no vende?</p>
            <p className="text-gray-600 text-sm mb-4">Diagnosticamos dónde pierdes ventas —embudo, checkout y fichas— y aplicamos mejoras de CRO que convierten el tráfico que ya tienes en pedidos.</p>
            <Link href="/marketing-shopware/" className="inline-block bg-accent-500 text-white px-6 py-2.5 rounded-full font-semibold text-sm hover:bg-accent-600 transition-colors">
              Ver marketing para Shopware
            </Link>
          </div>
          <h2 className="text-2xl font-bold text-primary-600">Herramientas de diagnóstico</h2>
          <p>Para saber dónde actuar, tres herramientas bastan y dos son gratuitas. GA4 da el embudo cuantitativo: dónde y cuánto se cae la gente. Microsoft Clarity, gratuito, aporta lo cualitativo: grabaciones de sesión y mapas de calor que muestran cómo se comporta el usuario de verdad. Y Shopware Analytics, el panel nativo, cruza estos datos con los de tu catálogo y pedidos. Con esta combinación se pasa de suponer a saber qué está frenando las ventas.</p>

          <div className="bg-primary-600 text-white rounded-2xl p-8 my-2 text-center">
            <h2 className="text-2xl font-bold mb-3">Convierte más con el tráfico que ya tienes</h2>
            <p className="text-primary-200 mb-6">
              El CRO es la forma más rentable de crecer: más ventas sin gastar más en captación. Optimizamos tu tienda Shopware para que cada visita rinda más.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/marketing-shopware/" className="bg-accent-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-accent-600 transition-colors">
                Ver marketing para Shopware
              </Link>
              <Link href="/diseno-de-paginas-web/diseno-tiendas-online/" className="border-2 border-white text-white px-6 py-3 rounded-full font-semibold hover:bg-white/10 transition-colors">
                Ver tiendas online
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
            Servicios relacionados: <Link href="/marketing-shopware/" className="text-accent-500 hover:underline">Marketing Shopware</Link> · <Link href="/diseno-de-paginas-web/diseno-tiendas-online/" className="text-accent-500 hover:underline">Tiendas Online</Link>
          </p>
        </div>

        <nav className="mt-12 pt-8 border-t border-gray-200">
          <Link href="/blog/" className="text-accent-500 hover:text-accent-600 font-medium text-sm">← Volver al blog</Link>
        </nav>
      </article>
      <RelatedArticles currentSlug="cro-shopware-optimizar-conversion-tienda" />
    </>
  );
}
