import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { RelatedArticles } from "@/components/RelatedArticles";
import { BlogBanner } from "@/components/BlogBanner";

export const metadata: Metadata = {
  title: "Cómo usar un chatbot para captar y cualificar leads: guía práctica",
  description:
    "Un chatbot bien configurado puede captar leads 24/7, cualificarlos con preguntas estratégicas y pasarlos al CRM con contexto completo. Guía práctica para implementar un sistema de captación con chatbot en 2026.",
  alternates: { canonical: "https://www.mktweb360.com/chatbot-captacion-cualificacion-leads-guia-practica/" },
  openGraph: {
    title: "Cómo usar un chatbot para captar y cualificar leads: guía práctica | Mkt Web 360",
    description:
      "Un chatbot bien configurado puede captar leads 24/7, cualificarlos con preguntas estratégicas y pasarlos al CRM con contexto completo. Guía práctica para implementar un sistema de captación con chatbot en 2026.",
    url: "https://www.mktweb360.com/chatbot-captacion-cualificacion-leads-guia-practica/",
    type: "article",
    images: [{ url: "https://www.mktweb360.com/og-como-generar-leads-calidad-pyme.jpg", width: 1200, height: 630 }],
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "Cómo usar un chatbot para captar y cualificar leads: guía práctica",
  description:
    "Un chatbot bien configurado puede captar leads 24/7, cualificarlos con preguntas estratégicas y pasarlos al CRM con contexto completo. Guía práctica para implementar un sistema de captación con chatbot en 2026.",
  author: { "@type": "Organization", name: "Mkt Web 360 SLU" },
  publisher: { "@type": "Organization", name: "Mkt Web 360 SLU", url: "https://www.mktweb360.com" },
  datePublished: "2026-07-07",
  image: "https://www.mktweb360.com/og-como-generar-leads-calidad-pyme.jpg",
  url: "https://www.mktweb360.com/chatbot-captacion-cualificacion-leads-guia-practica/",
  mainEntityOfPage: "https://www.mktweb360.com/chatbot-captacion-cualificacion-leads-guia-practica/",
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Inicio", item: "https://www.mktweb360.com/" },
    { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.mktweb360.com/blog/" },
    { "@type": "ListItem", position: 3, name: "Chatbot para captar y cualificar leads", item: "https://www.mktweb360.com/chatbot-captacion-cualificacion-leads-guia-practica/" },
  ],
};

const FAQS = [
  {
    q: "¿El chatbot puede reemplazar al equipo de ventas?",
    a: "No. El chatbot hace la primera parte del proceso — captar, cualificar y registrar el lead — pero las conversaciones de ventas complejas requieren intervención humana. El chatbot permite que el equipo comercial empiece esas conversaciones con más información y en el momento más adecuado.",
  },
  {
    q: "¿Qué pasa con los leads captados fuera del horario?",
    a: "El chatbot los registra en el CRM en tiempo real. El equipo los verá al empezar la jornada laboral con toda la información. Si hay leads de alta prioridad, el sistema puede enviar una notificación al móvil del comercial.",
  },
  {
    q: "¿Puede el chatbot hacer seguimiento de leads que no convirtieron?",
    a: "Sí, con integraciones específicas de automatización. Un lead que no compró puede recibir automáticamente un mensaje de seguimiento a los 3 días, luego a los 7 días, con la opción de retomar la conversación.",
  },
  {
    q: "¿El chatbot puede funcionar en múltiples páginas de la web?",
    a: "Sí. El widget puede estar en toda la web o en páginas específicas con configuraciones diferentes. Es habitual tener un chatbot más orientado a ventas en la página de precios y un chatbot más orientado a soporte en las páginas de producto.",
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

export default function ChatbotCaptacionLeadsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <article className="max-w-3xl mx-auto px-4 py-12">
        <Breadcrumbs crumbs={[{ label: "Inicio", href: "/" }, { label: "Blog", href: "/blog/" }, { label: "Chatbot para captar y cualificar leads" }]} />

        <header className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="bg-primary-100 text-primary-700 text-xs font-medium px-2.5 py-0.5 rounded-full">Marketing Digital · Julio 2026</span>
            <time className="text-sm text-gray-400" dateTime="2026-07-07">7 de julio de 2026</time>
          </div>
          <h1 className="text-4xl font-bold text-primary-600 mb-4 leading-tight">
            Cómo usar un chatbot para captar y cualificar leads: guía práctica
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Un chatbot bien configurado puede captar leads las 24 horas, cualificarlos con preguntas estratégicas y pasarlos al CRM con todo el contexto. En esta guía práctica vemos cómo montar un sistema de captación con chatbot que alimente tu embudo de{" "}
            <Link href="/como-generar-leads-calidad-pyme/" className="text-accent-500 hover:underline">generación de leads de calidad</Link>.
          </p>
        </header>

        <div className="text-gray-700 space-y-6 leading-relaxed">
          <p>
            La mayoría de webs siguen confiando toda su captación a un formulario de contacto. Funciona, pero deja mucho valor sobre la mesa: no responde preguntas, no cualifica y no está disponible cuando el visitante realmente tiene interés. Un chatbot bien pensado cubre justo ese hueco.
          </p>

          <h2 className="text-2xl font-bold text-primary-600">Por qué el chatbot capta más leads que el formulario</h2>
          <p>
            El formulario introduce fricción: pide datos por adelantado, no aclara dudas y muchas veces el visitante lo abandona. El chatbot reduce esa fricción porque conversa, resuelve objeciones al momento y está disponible 24/7, incluso cuando tu equipo no lo está.
          </p>
          <p>
            La velocidad de respuesta es determinante. Contactar a un lead en los primeros 5 minutos puede multiplicar por 9 la probabilidad de conversión frente a esperar horas. Un chatbot responde de forma instantánea, algo que ningún equipo humano puede garantizar durante todo el día.
          </p>

          <h2 className="text-2xl font-bold text-primary-600">Cómo estructurar un chatbot de captación de leads</h2>
          <p>
            El primer principio es dar valor antes de pedir datos. En lugar de exigir el email de entrada, el chatbot ayuda, responde una duda o guía al visitante hacia lo que busca, y solo entonces solicita la información de contacto.
          </p>
          <p>
            Un flujo correcto suele seguir cuatro pasos: enganchar con un mensaje relevante, aportar valor resolviendo la consulta inicial, cualificar con preguntas clave y, por último, capturar los datos y registrar el lead. Ese mismo enfoque conversacional se apoya bien en una{" "}
            <Link href="/como-crear-landing-page-que-convierte/" className="text-accent-500 hover:underline">landing page que convierte</Link> como punto de aterrizaje.
          </p>

          <h2 className="text-2xl font-bold text-primary-600">Qué preguntas de cualificación incluir</h2>
          <p>
            Las preguntas de cualificación dependen del tipo de negocio, pero el objetivo siempre es el mismo: distinguir a quién merece la pena que el equipo comercial dedique tiempo. Suelen girar en torno a la necesidad concreta, el plazo, el presupuesto aproximado y el papel del interlocutor en la decisión.
          </p>
          <p>
            Un negocio de servicios preguntará por el reto que quiere resolver y la urgencia; un ecommerce, por el producto y el volumen. La clave es no interrogar de golpe, sino intercalar las preguntas de forma natural en la conversación. Esta cualificación es especialmente útil cuando llega tráfico de campañas de{" "}
            <Link href="/sem-publicidad-ppc/" className="text-accent-500 hover:underline">publicidad SEM y PPC</Link>, donde cada visita tiene un coste.
          </p>

          <BlogBanner variant="default" />

          <h2 className="text-2xl font-bold text-primary-600">Cómo integrar el chatbot con el CRM</h2>
          <p>
            De poco sirve captar leads si se quedan sueltos en un chat. La integración con el CRM es lo que convierte al chatbot en una máquina de captación real: cada lead cualificado entra directamente en HubSpot, Salesforce o Pipedrive con su contexto completo.
          </p>
          <p>
            Así, el equipo comercial recibe no solo un nombre y un email, sino toda la conversación: qué buscaba, qué respondió a las preguntas de cualificación y en qué momento contactó. Para entender la base de esta pieza conviene tener claro{" "}
            <Link href="/que-es-un-chatbot-para-empresas-y-por-que-lo-necesitas-en-2026/" className="text-accent-500 hover:underline">qué es un chatbot para empresas y por qué lo necesitas</Link>.
          </p>

          <h2 className="text-2xl font-bold text-primary-600">Medir el impacto del chatbot en la captación de leads</h2>
          <p>
            Sin métricas no hay mejora posible. Las cifras que conviene seguir son la tasa de conversión del chatbot (que suele situarse entre el 10% y el 25% de los visitantes que interactúan), la tasa de cualificación de los leads captados y el tiempo entre la captación y el primer contacto comercial.
          </p>
          <p>
            La métrica que cierra el círculo es la tasa de conversión a cliente: cuántos de esos leads acaban comprando. Cruzar estos datos permite afinar las preguntas, ajustar los mensajes y detectar en qué punto del flujo se pierde interés, para optimizar el sistema de forma continua.
          </p>

          <div className="bg-primary-600 text-white rounded-2xl p-8 my-2 text-center">
            <h2 className="text-2xl font-bold mb-3">Convierte tu web en una máquina de captar leads</h2>
            <p className="text-primary-200 mb-6">
              En Mkt Web 360 implementamos chatbots de captación integrados con tu CRM para que ningún lead se quede por el camino.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contacto/" className="bg-accent-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-accent-600 transition-colors">
                Hablar con un especialista
              </Link>
              <Link href="/como-generar-leads-calidad-pyme/" className="border-2 border-white text-white px-6 py-3 rounded-full font-semibold hover:bg-white/10 transition-colors">
                Ver cómo generar leads de calidad
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
      <RelatedArticles currentSlug="chatbot-captacion-cualificacion-leads-guia-practica" />
    </>
  );
}
