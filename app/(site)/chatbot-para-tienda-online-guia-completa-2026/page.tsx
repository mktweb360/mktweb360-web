import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { RelatedArticles } from "@/components/RelatedArticles";
import { BlogBanner } from "@/components/BlogBanner";

export const metadata: Metadata = {
  title: "Chatbot para tienda online: guía completa para vender más y atender mejor en 2026",
  description:
    "Un chatbot para tienda online puede atender consultas 24/7, recuperar carritos abandonados, responder preguntas de producto y gestionar el estado de pedidos. Guía completa con casos reales para 2026.",
  alternates: { canonical: "https://www.mktweb360.com/chatbot-para-tienda-online-guia-completa-2026/" },
  openGraph: {
    title: "Chatbot para tienda online: guía completa para vender más y atender mejor en 2026 | Mkt Web 360",
    description:
      "Un chatbot para tienda online puede atender consultas 24/7, recuperar carritos abandonados, responder preguntas de producto y gestionar el estado de pedidos. Guía completa con casos reales para 2026.",
    url: "https://www.mktweb360.com/chatbot-para-tienda-online-guia-completa-2026/",
    type: "article",
    images: [{ url: "https://www.mktweb360.com/og-diseno-web-tienda-online.jpg", width: 1200, height: 630 }],
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "Chatbot para tienda online: guía completa para vender más y atender mejor en 2026",
  description:
    "Un chatbot para tienda online puede atender consultas 24/7, recuperar carritos abandonados, responder preguntas de producto y gestionar el estado de pedidos. Guía completa con casos reales para 2026.",
  author: { "@type": "Organization", name: "Mkt Web 360 SLU" },
  publisher: { "@type": "Organization", name: "Mkt Web 360 SLU", url: "https://www.mktweb360.com" },
  datePublished: "2026-07-07",
  image: "https://www.mktweb360.com/og-diseno-web-tienda-online.jpg",
  url: "https://www.mktweb360.com/chatbot-para-tienda-online-guia-completa-2026/",
  mainEntityOfPage: "https://www.mktweb360.com/chatbot-para-tienda-online-guia-completa-2026/",
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Inicio", item: "https://www.mktweb360.com/" },
    { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.mktweb360.com/blog/" },
    { "@type": "ListItem", position: 3, name: "Chatbot para tienda online", item: "https://www.mktweb360.com/chatbot-para-tienda-online-guia-completa-2026/" },
  ],
};

const FAQS = [
  {
    q: "¿El chatbot puede gestionar reclamaciones y devoluciones?",
    a: "Puede gestionar el inicio del proceso y dar información sobre la política de devolución. Para devoluciones que requieren valoración o excepciones, lo correcto es derivar al equipo humano con todo el contexto de la conversación.",
  },
  {
    q: "¿Funciona en móvil?",
    a: "Sí. Los chatbots modernos están diseñados para funcionar correctamente en dispositivos móviles, que representan más del 60% del tráfico de la mayoría de tiendas online en España.",
  },
  {
    q: "¿Puede el chatbot hablar en varios idiomas?",
    a: "Los modelos de IA actuales son multilingües por defecto. Un chatbot puede responder en el idioma en que el usuario escribe sin configuración adicional, aunque el contenido de entrenamiento debe estar en los idiomas relevantes.",
  },
  {
    q: "¿Cuánto tiempo tarda en estar listo?",
    a: "Una implementación básica puede estar operativa en 2-3 semanas. Con integración completa de catálogo y pedidos, el plazo habitual es de 4-6 semanas dependiendo de la complejidad de la tienda.",
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

export default function ChatbotTiendaOnlinePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <article className="max-w-3xl mx-auto px-4 py-12">
        <Breadcrumbs crumbs={[{ label: "Inicio", href: "/" }, { label: "Blog", href: "/blog/" }, { label: "Chatbot para tienda online" }]} />

        <header className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="bg-primary-100 text-primary-700 text-xs font-medium px-2.5 py-0.5 rounded-full">Ecommerce · Julio 2026</span>
            <time className="text-sm text-gray-400" dateTime="2026-07-07">7 de julio de 2026</time>
          </div>
          <h1 className="text-4xl font-bold text-primary-600 mb-4 leading-tight">
            Chatbot para tienda online: guía completa para vender más y atender mejor en 2026
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Un chatbot para tienda online puede atender consultas las 24 horas, recuperar carritos abandonados, responder preguntas de producto y gestionar el estado de los pedidos. Si estás valorando el <Link href="/diseno-de-paginas-web/diseno-tiendas-online/" className="text-accent-500 hover:underline">diseño de tu tienda online</Link>, un asistente conversacional bien integrado es hoy parte del estándar. Esta guía te explica qué esperar y cómo hacerlo bien.
          </p>
        </header>

        <div className="text-gray-700 space-y-6 leading-relaxed">
          <p>
            El ecommerce en España movió 114.800 millones de euros en 2025 según la CNMC, y sigue creciendo. En ese contexto, la atención al cliente ya no es un extra: es una parte del embudo de venta. Un chatbot bien diseñado no solo responde dudas, empuja conversiones que de otro modo se perderían.
          </p>

          <h2 className="text-2xl font-bold text-primary-600">Qué puede hacer un chatbot en una tienda online</h2>
          <p>La lista es más larga de lo que parece. Un chatbot puede responder preguntas de producto (tallas, materiales, compatibilidad), informar del estado de un pedido consultando el sistema en tiempo real, ayudar a encontrar el artículo adecuado dentro del catálogo y recuperar carritos abandonados abriendo conversación en el momento justo.</p>
          <p>También cubre la postventa: cambios, plazos de entrega, dudas de facturación. Con la implementación adecuada, hasta el 75% de las consultas se resuelven de forma automática, sin que nadie de tu equipo tenga que intervenir. Ese porcentaje es el que cambia la economía de la atención en una tienda con volumen.</p>

          <h2 className="text-2xl font-bold text-primary-600">Por qué el chatbot genérico falla en ecommerce</h2>
          <p>Un chatbot que no conoce tu catálogo es un buscador con formato de chat, y encima peor. Cuando un cliente pregunta si un producto está disponible en otro color o cuándo le llegará el pedido, un asistente genérico no puede responder porque no está conectado a tus datos.</p>
          <p>En ecommerce, la utilidad del chatbot es directamente proporcional a su integración. Necesita leer stock, pedidos y catálogo para ser algo más que decorativo. Por eso, antes de contratar cualquier solución, conviene tener la tienda sobre una base sólida; si estás pensando en <Link href="/migrar-shopify-woocommerce/" className="text-accent-500 hover:underline">migrar de Shopify a WooCommerce</Link> o al revés, es el momento de plantear también la capa conversacional.</p>

          <h2 className="text-2xl font-bold text-primary-600">Integración con los principales CMS de ecommerce</h2>
          <p>La buena noticia es que las plataformas más usadas están bien soportadas. WooCommerce, con un 48,6% de cuota del ecommerce, cuenta con conectores maduros que permiten al chatbot acceder a productos y pedidos sin desarrollos a medida excesivos. Shopify, PrestaShop y Shopware ofrecen vías equivalentes.</p>
          <p>La integración es la que determina qué nivel de chatbot puedes tener. Una tienda con el catálogo bien estructurado y una buena arquitectura de datos permite llegar al nivel accionable con menos fricción. Aquí es donde el trabajo previo de <Link href="/seo-para-ecommerce-errores-que-frenan-ventas/" className="text-accent-500 hover:underline">SEO y estructura para ecommerce</Link> paga doble: ordena la tienda para Google y para el chatbot a la vez.</p>

          <BlogBanner variant="ecommerce" />

          <h2 className="text-2xl font-bold text-primary-600">Datos reales del impacto en ecommerce</h2>
          <p>El impacto se mide en dos frentes. El primero es la reducción de carga: cuando hasta tres de cada cuatro consultas se resuelven solas, el equipo humano deja de apagar fuegos repetitivos y se concentra en las conversaciones que venden o retienen.</p>
          <p>El segundo es la conversión. Un cliente que recibe respuesta inmediata a la duda que le frenaba —el plazo de entrega, una talla, la política de devolución— compra en ese momento en lugar de abandonar la web. En una plataforma como <Link href="/marketing-shopware/" className="text-accent-500 hover:underline">Shopware y su ecosistema de marketing</Link>, esta capa conversacional se integra de forma natural en la estrategia de conversión.</p>

          <h2 className="text-2xl font-bold text-primary-600">Cumplimiento RGPD en el chatbot de ecommerce</h2>
          <p>En ecommerce el chatbot maneja datos personales casi por definición: nombres, direcciones, números de pedido. Eso lo pone de lleno bajo el RGPD. El tratamiento de esos datos debe ser transparente, con base legal clara y con información al usuario sobre qué se hace con lo que escribe.</p>
          <p>A esto se suma el AI Act, cuyas obligaciones de transparencia son obligatorias desde agosto de 2026. En la práctica, tu chatbot debe informar de que es una IA y respetar la normativa de datos. No es un trámite opcional: es condición para poder operar sin riesgo legal.</p>

          <h2 className="text-2xl font-bold text-primary-600">Cuánto cuesta implementar un chatbot en una tienda online</h2>
          <p>El coste depende del nivel. En el extremo básico, un chatbot de FAQs gestionado parte de unos 149€/mes. En el extremo avanzado, con integración de catálogo y pedidos y capacidad accionable, la mensualidad se sitúa en torno a 249-299€/mes, a lo que suele sumarse un coste de puesta en marcha.</p>
          <p>La forma correcta de mirar el número no es el gasto, sino el retorno: cuántas ventas rescata y cuántas horas de atención ahorra. En una tienda con volumen, el punto de equilibrio se alcanza rápido. Elegir el nivel adecuado a tu realidad es la decisión que más peso tiene en esa ecuación.</p>

          <div className="bg-primary-600 text-white rounded-2xl p-8 my-2 text-center">
            <h2 className="text-2xl font-bold mb-3">¿Quieres un chatbot integrado con tu tienda online?</h2>
            <p className="text-primary-200 mb-6">
              En Mkt Web 360 diseñamos tiendas online y las conectamos con asistentes conversacionales que atienden, recuperan carritos y venden.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contacto/" className="bg-accent-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-accent-600 transition-colors">
                Hablar con un especialista
              </Link>
              <Link href="/diseno-de-paginas-web/diseno-tiendas-online/" className="border-2 border-white text-white px-6 py-3 rounded-full font-semibold hover:bg-white/10 transition-colors">
                Ver diseño de tiendas online
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
        </div>

        <nav className="mt-12 pt-8 border-t border-gray-200">
          <Link href="/blog/" className="text-accent-500 hover:text-accent-600 font-medium text-sm">← Volver al blog</Link>
        </nav>
      </article>
      <RelatedArticles currentSlug="chatbot-para-tienda-online-guia-completa-2026" />
    </>
  );
}
