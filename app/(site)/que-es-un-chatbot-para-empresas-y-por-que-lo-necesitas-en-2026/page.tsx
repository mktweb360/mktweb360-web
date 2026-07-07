import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { RelatedArticles } from "@/components/RelatedArticles";
import { BlogBanner } from "@/components/BlogBanner";

export const metadata: Metadata = {
  title: "Qué es un chatbot para empresas y por qué lo necesitas en 2026",
  description:
    "Un chatbot para empresas ya no es tecnología de grandes corporaciones. En 2026, las pymes españolas que automatizan su atención al cliente con IA reducen costes, captan más leads y venden más. Guía completa.",
  alternates: { canonical: "https://www.mktweb360.com/que-es-un-chatbot-para-empresas-y-por-que-lo-necesitas-en-2026/" },
  openGraph: {
    title: "Qué es un chatbot para empresas y por qué lo necesitas en 2026 | Mkt Web 360",
    description:
      "Un chatbot para empresas ya no es tecnología de grandes corporaciones. En 2026, las pymes españolas que automatizan su atención al cliente con IA reducen costes, captan más leads y venden más. Guía completa.",
    url: "https://www.mktweb360.com/que-es-un-chatbot-para-empresas-y-por-que-lo-necesitas-en-2026/",
    type: "article",
    images: [{ url: "https://www.mktweb360.com/og-chatgpt-para-marketing-digital.jpg", width: 1200, height: 630 }],
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "Qué es un chatbot para empresas y por qué lo necesitas en 2026",
  description:
    "Un chatbot para empresas ya no es tecnología de grandes corporaciones. En 2026, las pymes españolas que automatizan su atención al cliente con IA reducen costes, captan más leads y venden más. Guía completa.",
  author: { "@type": "Organization", name: "Mkt Web 360 SLU" },
  publisher: { "@type": "Organization", name: "Mkt Web 360 SLU", url: "https://www.mktweb360.com" },
  datePublished: "2026-07-07",
  image: "https://www.mktweb360.com/og-chatgpt-para-marketing-digital.jpg",
  url: "https://www.mktweb360.com/que-es-un-chatbot-para-empresas-y-por-que-lo-necesitas-en-2026/",
  mainEntityOfPage: "https://www.mktweb360.com/que-es-un-chatbot-para-empresas-y-por-que-lo-necesitas-en-2026/",
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Inicio", item: "https://www.mktweb360.com/" },
    { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.mktweb360.com/blog/" },
    { "@type": "ListItem", position: 3, name: "Chatbot para empresas en 2026", item: "https://www.mktweb360.com/que-es-un-chatbot-para-empresas-y-por-que-lo-necesitas-en-2026/" },
  ],
};

const FAQS = [
  {
    q: "¿Cuánto cuesta un chatbot para empresas?",
    a: "Depende del nivel de sofisticación. Un chatbot de FAQs básico puede costar desde 149€/mes con una plataforma gestionada. Un asistente accionable conectado a CRM y catálogo puede requerir un setup de 300-500€ más una mensualidad de 199-299€.",
  },
  {
    q: "¿Cuánto tiempo tarda en estar operativo?",
    a: "Un chatbot de nivel 1 bien implementado puede estar operativo en 2-3 semanas. Los niveles 2 y 3 requieren entre 4 y 8 semanas según la complejidad de los sistemas de la empresa.",
  },
  {
    q: "¿El chatbot va a sustituir a mi equipo de atención al cliente?",
    a: "No. El modelo correcto es híbrido: el chatbot gestiona el volumen de consultas repetitivas para que el equipo humano pueda concentrarse en las conversaciones que realmente requieren criterio, empatía o capacidad de decisión.",
  },
  {
    q: "¿Funciona para cualquier sector?",
    a: "Sí, aunque con diferente profundidad de aplicación. Los sectores donde el ROI es más inmediato son ecommerce, hostelería, clínicas y salud, servicios profesionales, inmobiliaria, y cualquier empresa con alto volumen de consultas repetitivas.",
  },
  {
    q: "¿Qué pasa cuando el chatbot no sabe responder?",
    a: "Un buen chatbot tiene un mecanismo de derivación claro: cuando reconoce que no tiene la información necesaria, lo dice explícitamente y ofrece opciones para hablar con una persona. Este comportamiento hay que diseñarlo y probarlo antes de lanzar.",
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

export default function ChatbotEmpresasPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <article className="max-w-3xl mx-auto px-4 py-12">
        <Breadcrumbs crumbs={[{ label: "Inicio", href: "/" }, { label: "Blog", href: "/blog/" }, { label: "Chatbot para empresas en 2026" }]} />

        <header className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="bg-primary-100 text-primary-700 text-xs font-medium px-2.5 py-0.5 rounded-full">IA y Automatización · Julio 2026</span>
            <time className="text-sm text-gray-400" dateTime="2026-07-07">7 de julio de 2026</time>
          </div>
          <h1 className="text-4xl font-bold text-primary-600 mb-4 leading-tight">
            Qué es un chatbot para empresas y por qué lo necesitas en 2026
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Un chatbot para empresas ya no es cosa de grandes corporaciones. En 2026, las pymes que automatizan su atención al cliente con <Link href="/ia-aplicada-al-marketing/" className="text-accent-500 hover:underline">inteligencia artificial aplicada al marketing</Link> reducen costes, captan más leads y venden más. En esta guía te explicamos qué es realmente, qué niveles existen y por qué ya no puedes ignorarlo.
          </p>
        </header>

        <div className="text-gray-700 space-y-6 leading-relaxed">
          <p>
            Durante años, "chatbot" fue sinónimo de aquellos formularios rígidos que solo entendían tres frases y frustraban a todo el que intentaba usarlos. Esa etapa terminó. Con más de 800 millones de personas usando ChatGPT cada semana, los usuarios ya están acostumbrados a conversar con una máquina que entiende lenguaje natural. Y esperan lo mismo cuando escriben a tu empresa.
          </p>

          <h2 className="text-2xl font-bold text-primary-600">Por qué el chatbot empresarial ha cambiado en los últimos dos años</h2>
          <p>El salto no es de grado, es de categoría. Los modelos de lenguaje han convertido a los chatbots en asistentes capaces de entender lo que quiere decir una persona aunque lo formule mal, con faltas de ortografía o de forma ambigua. Ya no hace falta que el cliente adivine la palabra clave exacta.</p>
          <p>El dato que mejor resume el cambio es el uso masivo de ChatGPT: 800 millones de usuarios semanales han normalizado la conversación con IA. Cuando una persona escribe a tu web, no espera un menú de botones, espera una respuesta. Esa expectativa es la que obliga a cualquier empresa a replantearse cómo atiende.</p>
          <p>Este cambio va de la mano de otra transformación más amplia: la forma en que la gente busca información. Si quieres entender el panorama completo, te recomendamos leer sobre <Link href="/geo-posicionamiento-ia/" className="text-accent-500 hover:underline">posicionamiento en respuestas de IA</Link>, porque atención y visibilidad son ya dos caras de la misma moneda.</p>

          <h2 className="text-2xl font-bold text-primary-600">Qué tipos de chatbot existen para empresas</h2>
          <p>No todos los chatbots hacen lo mismo. Conviene pensar en cuatro niveles de capacidad, cada uno con un coste y un valor distintos. El nivel 1 responde preguntas frecuentes: horarios, ubicación, precios. El nivel 2 conoce en profundidad tu negocio porque está entrenado con tu contenido y puede explicar servicios, matices y casos particulares.</p>
          <p>El nivel 3 es accionable: no solo informa, sino que ejecuta. Reserva una cita, registra un lead en el CRM o consulta el estado de un pedido. El nivel 4 va un paso más allá y recomienda: entiende lo que necesita el cliente y le orienta hacia el producto o servicio adecuado, como haría un buen comercial.</p>
          <p>Elegir el nivel correcto es una decisión de negocio, no técnica. Depende de qué consultas recibes y de qué quieres que resuelva sin intervención humana.</p>

          <h2 className="text-2xl font-bold text-primary-600">El problema del chatbot genérico que todos van a intentar venderte</h2>
          <p>En los próximos meses te van a ofrecer decenas de chatbots "con IA". La mayoría son la misma plataforma genérica con tu logo encima. Un chatbot genérico responde con información de internet o con lo que el proveedor decidió cargar, y eso se nota: da respuestas vagas, se equivoca en detalles de tu negocio y genera desconfianza.</p>
          <p>La diferencia real está en el entrenamiento. Un chatbot entrenado con tu contenido propio —tus servicios, tus condiciones, tu forma de trabajar— responde como lo haría alguien de tu equipo. Es la misma lógica que aplicamos cuando usamos <Link href="/chatgpt-para-marketing-digital/" className="text-accent-500 hover:underline">ChatGPT para marketing digital</Link>: la herramienta vale lo que vale el contexto que le das.</p>

          <h2 className="text-2xl font-bold text-primary-600">Qué puede automatizar un chatbot para tu empresa</h2>
          <p>Los casos de uso son más amplios de lo que la mayoría imagina. En atención al cliente, resuelve el grueso de consultas repetitivas que hoy consumen horas de tu equipo. En captación, cualifica y registra leads mientras tú duermes. En agenda, gestiona citas sin llamadas cruzadas.</p>
          <p>En ecommerce, atiende dudas de catálogo, informa del estado de un pedido y da soporte postventa. La clave es que cada una de estas tareas, bien automatizada, libera tiempo humano para lo que de verdad requiere una persona. Si quieres profundizar en cómo encaja esto en una estrategia más amplia, te interesará entender los <Link href="/agentes-ia-marketing-que-son-como-usarlos-en-tu-negocio/" className="text-accent-500 hover:underline">agentes de IA aplicados al marketing</Link>.</p>

          <BlogBanner variant="default" />

          <h2 className="text-2xl font-bold text-primary-600">Los números que justifican la inversión</h2>
          <p>El argumento de fondo es sencillo: un chatbot bien implementado atiende un volumen de consultas que, hecho por personas, tendría un coste creciente. No sustituye al equipo, absorbe la repetición. Y lo hace las 24 horas, sin turnos ni esperas.</p>
          <p>Cuando cada consulta atendida a tiempo puede convertirse en una venta o un lead cualificado, el retorno no está solo en el ahorro de horas, sino en las oportunidades que hoy se pierden porque nadie respondió a tiempo. Ese es el cálculo que conviene hacer antes de descartarlo por precio.</p>

          <h2 className="text-2xl font-bold text-primary-600">Cumplimiento legal: lo que no puedes ignorar</h2>
          <p>Aquí está la parte que casi nadie te va a contar cuando intente venderte un chatbot. El artículo 50 del Reglamento Europeo de Inteligencia Artificial (AI Act) entra en vigor en agosto de 2026 y establece obligaciones de transparencia concretas para los sistemas que interactúan con personas.</p>
          <p>En la práctica, tu chatbot debe cumplir cuatro elementos mínimos: informar de forma clara de que el usuario está hablando con una IA y no con una persona, hacerlo de manera comprensible, hacerlo en el momento de la interacción y respetar el tratamiento de datos del usuario. No es un detalle estético: es una obligación legal. Implementar un chatbot sin tener esto resuelto es exponerse a un riesgo innecesario.</p>

          <div className="bg-primary-600 text-white rounded-2xl p-8 my-2 text-center">
            <h2 className="text-2xl font-bold mb-3">¿Quieres un chatbot que hable de tu negocio, no genérico?</h2>
            <p className="text-primary-200 mb-6">
              En Mkt Web 360 diseñamos e implementamos chatbots entrenados con tu contenido, integrados con tus sistemas y conformes con la normativa vigente.
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
      <RelatedArticles currentSlug="que-es-un-chatbot-para-empresas-y-por-que-lo-necesitas-en-2026" />
    </>
  );
}
