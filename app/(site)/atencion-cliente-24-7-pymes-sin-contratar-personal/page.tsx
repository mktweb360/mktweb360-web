import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { RelatedArticles } from "@/components/RelatedArticles";
import { BlogBanner } from "@/components/BlogBanner";

export const metadata: Metadata = {
  title: "Atención al cliente 24/7 para pymes: cómo conseguirlo sin contratar más personal",
  description:
    "Las grandes empresas llevan años ofreciendo atención al cliente 24/7. En 2026, las pymes españolas pueden conseguir lo mismo con chatbots de IA, sin contratar más personal. Aquí está cómo funciona y qué cuesta.",
  alternates: { canonical: "https://www.mktweb360.com/atencion-cliente-24-7-pymes-sin-contratar-personal/" },
  openGraph: {
    title: "Atención al cliente 24/7 para pymes: cómo conseguirlo sin contratar más personal | Mkt Web 360",
    description:
      "Las grandes empresas llevan años ofreciendo atención al cliente 24/7. En 2026, las pymes españolas pueden conseguir lo mismo con chatbots de IA, sin contratar más personal. Aquí está cómo funciona y qué cuesta.",
    url: "https://www.mktweb360.com/atencion-cliente-24-7-pymes-sin-contratar-personal/",
    type: "article",
    images: [{ url: "https://www.mktweb360.com/og-chatgpt-para-marketing-digital.jpg", width: 1200, height: 630 }],
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "Atención al cliente 24/7 para pymes: cómo conseguirlo sin contratar más personal",
  description:
    "Las grandes empresas llevan años ofreciendo atención al cliente 24/7. En 2026, las pymes españolas pueden conseguir lo mismo con chatbots de IA, sin contratar más personal. Aquí está cómo funciona y qué cuesta.",
  author: { "@type": "Organization", name: "Mkt Web 360 SLU" },
  publisher: { "@type": "Organization", name: "Mkt Web 360 SLU", url: "https://www.mktweb360.com" },
  datePublished: "2026-07-07",
  image: "https://www.mktweb360.com/og-chatgpt-para-marketing-digital.jpg",
  url: "https://www.mktweb360.com/atencion-cliente-24-7-pymes-sin-contratar-personal/",
  mainEntityOfPage: "https://www.mktweb360.com/atencion-cliente-24-7-pymes-sin-contratar-personal/",
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Inicio", item: "https://www.mktweb360.com/" },
    { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.mktweb360.com/blog/" },
    { "@type": "ListItem", position: 3, name: "Atención al cliente 24/7 para pymes", item: "https://www.mktweb360.com/atencion-cliente-24-7-pymes-sin-contratar-personal/" },
  ],
};

const FAQS = [
  {
    q: "¿Los clientes se frustran cuando hablan con un bot?",
    a: "La frustración aparece cuando el bot no puede ayudar y no deriva correctamente. Un bot que responde con precisión a la pregunta del usuario no genera frustración — genera satisfacción, porque la respuesta llega inmediatamente.",
  },
  {
    q: "¿Cuántas conversaciones puede gestionar simultáneamente el chatbot?",
    a: "Ilimitadas. Mientras una persona puede gestionar 2-3 conversaciones simultáneas con dificultad, el bot gestiona cientos sin que la calidad de respuesta varíe.",
  },
  {
    q: "¿Qué pasa cuando el chatbot no sabe responder?",
    a: "Un bot bien configurado dice que no tiene esa información y ofrece alternativas: hablar con una persona, enviar un email, o indicar que alguien del equipo responderá cuando esté disponible. No inventa respuestas cuando no tiene la información.",
  },
  {
    q: "¿En qué idiomas puede operar?",
    a: "Los modelos de lenguaje modernos son multilingües. Un bot puede responder en español, catalán, inglés o cualquier otro idioma sin configuración adicional, aunque el contenido de entrenamiento debe estar en los idiomas en que se quiere operar con precisión.",
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

export default function AtencionCliente247Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <article className="max-w-3xl mx-auto px-4 py-12">
        <Breadcrumbs crumbs={[{ label: "Inicio", href: "/" }, { label: "Blog", href: "/blog/" }, { label: "Atención al cliente 24/7 para pymes" }]} />

        <header className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="bg-primary-100 text-primary-700 text-xs font-medium px-2.5 py-0.5 rounded-full">IA y Automatización · Julio 2026</span>
            <time className="text-sm text-gray-400" dateTime="2026-07-07">7 de julio de 2026</time>
          </div>
          <h1 className="text-4xl font-bold text-primary-600 mb-4 leading-tight">
            Atención al cliente 24/7 para pymes: cómo conseguirlo sin contratar más personal
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Las grandes empresas llevan años ofreciendo atención al cliente 24 horas al día. En 2026, cualquier pyme española puede hacer lo mismo con un chatbot de IA, sin ampliar plantilla. Si quieres entender el punto de partida, este artículo se apoya en <Link href="/que-es-un-chatbot-para-empresas-y-por-que-lo-necesitas-en-2026/" className="text-accent-500 hover:underline">qué es un chatbot para empresas</Link> y explica cómo funciona y qué cuesta.
          </p>
        </header>

        <div className="text-gray-700 space-y-6 leading-relaxed">
          <p>
            El cliente que tiene una duda a las once de la noche no espera a mañana: se va a la competencia. Esa es la fuga silenciosa que muchas pymes ni siquiera miden. Un chatbot bien planteado cierra esa puerta sin que tengas que contratar a nadie para el turno de noche.
          </p>

          <h2 className="text-2xl font-bold text-primary-600">El coste real de no tener atención fuera del horario laboral</h2>
          <p>Hasta el 70% de los carritos de compra se abandonan, y una parte importante ocurre porque el cliente tiene una duda que nadie resuelve en el momento. Cuando la respuesta llega demasiado tarde, el interés ya se ha enfriado y la venta se pierde.</p>
          <p>La velocidad de respuesta es determinante: responder en los primeros 5 minutos puede multiplicar por 9 la conversión frente a hacerlo horas después. Fuera del horario laboral, sin un sistema automatizado, ese margen simplemente no existe y cada consulta nocturna es una oportunidad que se evapora.</p>

          <h2 className="text-2xl font-bold text-primary-600">Por qué el chatbot es diferente del live chat y del teléfono de guardia</h2>
          <p>El live chat depende de que haya una persona conectada, y el teléfono de guardia depende de que alguien esté disponible a cualquier hora. Ambos tienen un límite humano: cansancio, horarios y coste. El chatbot no tiene ese límite.</p>
          <p>Un chatbot responde al instante, a cualquier hora, sin importar cuántas personas escriban a la vez. No sustituye la atención humana en los casos complejos, pero se ocupa de todo lo que no requiere criterio, que suele ser la mayoría del volumen. Es una pieza más dentro de una estrategia de <Link href="/ia-aplicada-al-marketing/" className="text-accent-500 hover:underline">IA aplicada al marketing</Link>.</p>

          <h2 className="text-2xl font-bold text-primary-600">Qué tipos de consultas puede resolver un chatbot autónomamente</h2>
          <p>Un chatbot bien configurado resuelve por sí solo entre el 65% y el 70% de las consultas: horarios, precios, disponibilidad, estado de un pedido, preguntas frecuentes, condiciones de un servicio o pasos para completar una compra. Son preguntas repetitivas que consumen mucho tiempo del equipo y que el bot atiende en segundos.</p>
          <p>Ese porcentaje libera al equipo humano para lo que realmente aporta valor: las conversaciones complejas, las negociaciones y los casos delicados. Además, muchas de esas consultas resueltas se convierten en oportunidades comerciales, algo clave cuando el objetivo es <Link href="/como-generar-leads-calidad-pyme/" className="text-accent-500 hover:underline">generar leads de calidad</Link>.</p>

          <BlogBanner variant="default" />

          <h2 className="text-2xl font-bold text-primary-600">El modelo híbrido: chatbot + humano</h2>
          <p>El planteamiento que mejor funciona no es chatbot o persona, sino chatbot y persona. El bot atiende el primer contacto, resuelve lo que puede y, cuando detecta que la consulta lo requiere, deriva a una persona con todo el contexto de la conversación ya recogido.</p>
          <p>Así el cliente nunca se queda sin respuesta y el equipo solo interviene cuando de verdad hace falta. El resultado es una atención que combina la inmediatez de la máquina con el criterio humano, y que escala sin disparar los costes.</p>

          <h2 className="text-2xl font-bold text-primary-600">Cuánto ahorro real puede generar un chatbot</h2>
          <p>El ahorro típico se sitúa entre 600 y 900 euros al mes en tiempo de personal, al absorber el bot el volumen de consultas repetitivas que antes ocupaban horas del equipo. A ese ahorro directo se suma el efecto sobre las ventas: menos carritos abandonados y más consultas atendidas a tiempo.</p>
          <p>La cuenta suele ser favorable desde los primeros meses, porque el coste de un chatbot es fijo y modesto frente al coste creciente de ampliar plantilla. Y a diferencia de una contratación, el bot no necesita formación continua ni cubre solo un turno.</p>

          <h2 className="text-2xl font-bold text-primary-600">Qué esperar en los primeros 90 días</h2>
          <p>La implantación sigue una curva de tres fases a lo largo de unos 90 días. En las primeras semanas se calibra: se ajustan las respuestas según las preguntas reales de tus clientes. Después llega la fase de mejora, en la que el bot resuelve cada vez más consultas correctamente. Y finalmente la estabilización, con el sistema funcionando de forma consistente.</p>
          <p>Entender esta curva evita frustraciones. Un chatbot no está perfecto el primer día; alcanza su máximo rendimiento tras un periodo de ajuste. Conviene tener presentes también los aspectos legales, como los que explicamos en <Link href="/chatbot-ia-rgpd-ai-act-cumplimiento-legal-espana/" className="text-accent-500 hover:underline">chatbot, RGPD y AI Act</Link>, para que el proyecto cumpla desde el principio.</p>

          <div className="bg-primary-600 text-white rounded-2xl p-8 my-2 text-center">
            <h2 className="text-2xl font-bold mb-3">Ofrece atención 24/7 sin ampliar tu plantilla</h2>
            <p className="text-primary-200 mb-6">
              En Mkt Web 360 ponemos en marcha chatbots que atienden a tus clientes a cualquier hora, resuelven la mayoría de consultas y liberan a tu equipo.
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
      <RelatedArticles currentSlug="atencion-cliente-24-7-pymes-sin-contratar-personal" />
    </>
  );
}
