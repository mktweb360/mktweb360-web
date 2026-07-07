import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { RelatedArticles } from "@/components/RelatedArticles";
import { BlogBanner } from "@/components/BlogBanner";

export const metadata: Metadata = {
  title: "Chatbot vs live chat: diferencias reales y cuál elegir para tu empresa",
  description:
    "¿Chatbot o live chat? No son opciones excluyentes, pero tampoco son lo mismo. Guía de las diferencias reales, cuándo conviene cada uno, y por qué la combinación correcta es mejor que elegir solo uno.",
  alternates: { canonical: "https://www.mktweb360.com/chatbot-vs-live-chat-diferencias-cual-elegir-empresa/" },
  openGraph: {
    title: "Chatbot vs live chat: diferencias reales y cuál elegir para tu empresa | Mkt Web 360",
    description:
      "¿Chatbot o live chat? No son opciones excluyentes, pero tampoco son lo mismo. Guía de las diferencias reales, cuándo conviene cada uno, y por qué la combinación correcta es mejor que elegir solo uno.",
    url: "https://www.mktweb360.com/chatbot-vs-live-chat-diferencias-cual-elegir-empresa/",
    type: "article",
    images: [{ url: "https://www.mktweb360.com/og-chatgpt-para-marketing-digital.jpg", width: 1200, height: 630 }],
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "Chatbot vs live chat: diferencias reales y cuál elegir para tu empresa",
  description:
    "¿Chatbot o live chat? No son opciones excluyentes, pero tampoco son lo mismo. Guía de las diferencias reales, cuándo conviene cada uno, y por qué la combinación correcta es mejor que elegir solo uno.",
  author: { "@type": "Organization", name: "Mkt Web 360 SLU" },
  publisher: { "@type": "Organization", name: "Mkt Web 360 SLU", url: "https://www.mktweb360.com" },
  datePublished: "2026-07-07",
  image: "https://www.mktweb360.com/og-chatgpt-para-marketing-digital.jpg",
  url: "https://www.mktweb360.com/chatbot-vs-live-chat-diferencias-cual-elegir-empresa/",
  mainEntityOfPage: "https://www.mktweb360.com/chatbot-vs-live-chat-diferencias-cual-elegir-empresa/",
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Inicio", item: "https://www.mktweb360.com/" },
    { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.mktweb360.com/blog/" },
    { "@type": "ListItem", position: 3, name: "Chatbot vs live chat", item: "https://www.mktweb360.com/chatbot-vs-live-chat-diferencias-cual-elegir-empresa/" },
  ],
};

const FAQS = [
  {
    q: "¿Puedo tener los dos a la vez?",
    a: "Sí, y es lo recomendable. La mayoría de las plataformas de chatbot empresarial permiten configurar el modelo híbrido: el bot maneja las conversaciones que puede y escala al agente humano cuando es necesario.",
  },
  {
    q: "¿El cliente sabe cuándo está hablando con un bot o con una persona?",
    a: "Debe saberlo. El AI Act obliga a que los sistemas de IA se identifiquen como tales. Y cuando hay una derivación al humano, el cambio también debe comunicarse al usuario.",
  },
  {
    q: "¿Es mejor empezar con live chat y añadir el bot después?",
    a: "Depende del punto de partida. Si ya tienes live chat y quieres añadir cobertura fuera del horario, el bot es un complemento natural. Si estás empezando desde cero, un modelo híbrido desde el inicio es más eficiente.",
  },
  {
    q: "¿Afecta al NPS de los clientes tener un chatbot?",
    a: "Si el bot está bien configurado y resuelve las consultas que puede resolver, el NPS generalmente mejora porque los tiempos de respuesta bajan. Si el bot está mal configurado y frustra a los usuarios, el NPS baja. La calidad de la implementación es el factor determinante.",
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

export default function ChatbotVsLiveChatPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <article className="max-w-3xl mx-auto px-4 py-12">
        <Breadcrumbs crumbs={[{ label: "Inicio", href: "/" }, { label: "Blog", href: "/blog/" }, { label: "Chatbot vs live chat" }]} />

        <header className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="bg-primary-100 text-primary-700 text-xs font-medium px-2.5 py-0.5 rounded-full">IA y Automatización · Julio 2026</span>
            <time className="text-sm text-gray-400" dateTime="2026-07-07">7 de julio de 2026</time>
          </div>
          <h1 className="text-4xl font-bold text-primary-600 mb-4 leading-tight">
            Chatbot vs live chat: diferencias reales y cuál elegir para tu empresa
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            ¿Chatbot o live chat? No son opciones excluyentes, pero tampoco son lo mismo. En esta guía repasamos las diferencias reales, cuándo conviene cada uno y por qué la combinación correcta suele ganar a elegir uno solo. Si aún dudas por dónde empezar, apóyate en la <Link href="/ia-aplicada-al-marketing/" className="text-accent-500 hover:underline">IA aplicada al marketing</Link>.
          </p>
        </header>

        <div className="text-gray-700 space-y-6 leading-relaxed">
          <p>
            La pregunta está mal planteada casi siempre. Muchas empresas se sientan a decidir entre chatbot y live chat como si fueran dos caminos opuestos, cuando en realidad resuelven necesidades distintas y funcionan mejor juntos. Entender qué hace bien cada uno es el primer paso para no gastar de más ni frustrar a tus clientes.
          </p>

          <h2 className="text-2xl font-bold text-primary-600">Qué es el live chat y qué es el chatbot</h2>
          <p>El live chat es una ventana de conversación en tu web donde un agente humano responde en tiempo real. Detrás siempre hay una persona: alguien lee el mensaje, lo interpreta y contesta. Es directo, cálido y flexible, pero está atado a la disponibilidad y al horario de tu equipo.</p>
          <p>El chatbot, en cambio, es un sistema automatizado que mantiene la conversación por sí mismo. Los chatbots actuales, basados en IA, entienden lenguaje natural y responden con el contenido y las reglas que se les han configurado. Si quieres una base sobre el concepto, tenemos una guía dedicada a <Link href="/que-es-un-chatbot-para-empresas-y-por-que-lo-necesitas-en-2026/" className="text-accent-500 hover:underline">qué es un chatbot para empresas y por qué lo necesitas en 2026</Link>.</p>

          <h2 className="text-2xl font-bold text-primary-600">Las diferencias que más importan en la práctica</h2>
          <p>Más allá de la definición, lo que decide la elección son cinco factores concretos. En disponibilidad, el chatbot gana sin discusión: responde 24/7 sin depender de turnos, mientras que el live chat solo cubre el horario de tu equipo. En velocidad, el bot contesta al instante y en paralelo a muchos usuarios; el humano, por bueno que sea, atiende de uno en uno.</p>
          <p>En coste, el chatbot escala sin sumar personal a cada nueva conversación, mientras que el live chat crece a golpe de contratación. En personalización y matiz emocional, el humano sigue por delante: capta ironías, contextos delicados y frustraciones que un bot puede pasar por alto. Y en el tipo de consulta, el bot brilla con lo repetitivo (horarios, precios, estado de un pedido) y el humano con lo complejo y sensible. De hecho, un chatbot bien entrenado resuelve de forma autónoma entre el 65 % y el 70 % de las consultas, dejando a las personas justo lo que aporta más valor.</p>

          <h2 className="text-2xl font-bold text-primary-600">Cuándo el live chat es la opción correcta</h2>
          <p>El live chat tiene sentido cuando tus conversaciones son pocas pero de alto valor, o cuando el matiz humano marca la diferencia: ventas consultivas, incidencias delicadas, reclamaciones o clientes que necesitan sentirse escuchados por una persona. En esos casos, la calidez y la capacidad de improvisar de un agente valen más que la inmediatez.</p>
          <p>El problema aparece cuando el volumen crece o cuando los clientes escriben fuera de horario. Ahí el live chat en solitario se queda corto: quedan consultas sin responder de madrugada y los fines de semana, justo cuando muchos usuarios investigan. Para cubrir esa franja sin ampliar plantilla, conviene mirar cómo dar <Link href="/atencion-cliente-24-7-pymes-sin-contratar-personal/" className="text-accent-500 hover:underline">atención al cliente 24/7 en pymes sin contratar personal</Link>.</p>

          <h2 className="text-2xl font-bold text-primary-600">Cuándo el chatbot es la opción correcta</h2>
          <p>El chatbot es la opción natural cuando recibes muchas consultas parecidas, cuando quieres estar disponible a cualquier hora o cuando necesitas filtrar y cualificar antes de que intervenga una persona. Si buena parte de tus mensajes son preguntas frecuentes, el bot las resuelve al momento y libera a tu equipo.</p>
          <p>También es la mejor herramienta cuando el objetivo es comercial: recoger datos, entender qué busca el visitante y separar a quien tiene intención real de compra. Para ese uso concreto puedes ver nuestra guía de <Link href="/chatbot-captacion-cualificacion-leads-guia-practica/" className="text-accent-500 hover:underline">chatbot para captación y cualificación de leads</Link>, donde detallamos cómo convertir conversaciones en oportunidades.</p>

          <BlogBanner variant="default" />

          <h2 className="text-2xl font-bold text-primary-600">El modelo que funciona mejor: chatbot + derivación a humano</h2>
          <p>La respuesta que dan las empresas que ya han pasado por esto es casi siempre la misma: no elijas, combina. El modelo híbrido pone al bot primero, resolviendo todo lo que puede de forma autónoma, y reserva a las personas para lo que de verdad necesita criterio humano. Así aprovechas la inmediatez y disponibilidad del bot sin renunciar a la calidad del trato humano.</p>
          <p>La clave está en la derivación. Cuando el bot detecta que no puede resolver algo, o cuando el usuario lo pide, la conversación pasa a un agente con el historial completo delante. El cliente no tiene que repetirse: la persona ve todo lo que ya se ha hablado y continúa desde ahí. Con ese reparto, el bot absorbe ese 65-70 % de consultas repetitivas y el equipo humano se concentra en el 30-35 % que aporta más valor.</p>

          <h2 className="text-2xl font-bold text-primary-600">Cómo implementar el modelo híbrido</h2>
          <p>Implementarlo bien empieza por definir las reglas de escalado: qué temas resuelve el bot, en qué casos deriva y cómo se avisa al usuario del cambio. Es importante que el traspaso sea transparente. Además, el AI Act obliga a que los sistemas de IA se identifiquen como tales, así que el cliente debe saber en cada momento si habla con un bot o con una persona.</p>
          <p>Después toca entrenar al bot con tu contenido real y medir. Revisa qué consultas resuelve solo, cuáles deriva y dónde se atasca, y ajusta con esos datos. Si prefieres apoyarte en un partner para montar todo el sistema, en Mkt Web 360 trabajamos la <Link href="/ia-aplicada-al-marketing/" className="text-accent-500 hover:underline">IA aplicada al marketing</Link> con este enfoque híbrido de serie.</p>

          <div className="bg-primary-600 text-white rounded-2xl p-8 my-2 text-center">
            <h2 className="text-2xl font-bold mb-3">Monta el modelo híbrido que tu negocio necesita</h2>
            <p className="text-primary-200 mb-6">
              Te ayudamos a combinar chatbot y atención humana con las reglas de derivación correctas, para responder al instante sin perder el trato de calidad.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contacto/" className="bg-accent-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-accent-600 transition-colors">
                Hablar con un especialista
              </Link>
              <Link href="/ia-aplicada-al-marketing/" className="border-2 border-white text-white px-6 py-3 rounded-full font-semibold hover:bg-white/10 transition-colors">
                Ver IA aplicada al marketing
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
      <RelatedArticles currentSlug="chatbot-vs-live-chat-diferencias-cual-elegir-empresa" />
    </>
  );
}
