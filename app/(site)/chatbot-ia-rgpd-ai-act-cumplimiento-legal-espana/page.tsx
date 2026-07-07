import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { RelatedArticles } from "@/components/RelatedArticles";
import { BlogBanner } from "@/components/BlogBanner";

export const metadata: Metadata = {
  title: "Chatbot con IA y cumplimiento legal en España: RGPD, AI Act y lo que cambia en agosto de 2026",
  description:
    "En agosto de 2026 entran en vigor las principales obligaciones del AI Act para chatbots. Qué tienes que hacer para cumplir con el RGPD y el AI Act en España, y por qué el cumplimiento es una ventaja competitiva.",
  alternates: { canonical: "https://www.mktweb360.com/chatbot-ia-rgpd-ai-act-cumplimiento-legal-espana/" },
  openGraph: {
    title: "Chatbot con IA y cumplimiento legal en España: RGPD, AI Act y lo que cambia en agosto de 2026 | Mkt Web 360",
    description:
      "En agosto de 2026 entran en vigor las principales obligaciones del AI Act para chatbots. Qué tienes que hacer para cumplir con el RGPD y el AI Act en España, y por qué el cumplimiento es una ventaja competitiva.",
    url: "https://www.mktweb360.com/chatbot-ia-rgpd-ai-act-cumplimiento-legal-espana/",
    type: "article",
    images: [{ url: "https://www.mktweb360.com/og-chatgpt-para-marketing-digital.jpg", width: 1200, height: 630 }],
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "Chatbot con IA y cumplimiento legal en España: RGPD, AI Act y lo que cambia en agosto de 2026",
  description:
    "En agosto de 2026 entran en vigor las principales obligaciones del AI Act para chatbots. Qué tienes que hacer para cumplir con el RGPD y el AI Act en España, y por qué el cumplimiento es una ventaja competitiva.",
  author: { "@type": "Organization", name: "Mkt Web 360 SLU" },
  publisher: { "@type": "Organization", name: "Mkt Web 360 SLU", url: "https://www.mktweb360.com" },
  datePublished: "2026-07-07",
  image: "https://www.mktweb360.com/og-chatgpt-para-marketing-digital.jpg",
  url: "https://www.mktweb360.com/chatbot-ia-rgpd-ai-act-cumplimiento-legal-espana/",
  mainEntityOfPage: "https://www.mktweb360.com/chatbot-ia-rgpd-ai-act-cumplimiento-legal-espana/",
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Inicio", item: "https://www.mktweb360.com/" },
    { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.mktweb360.com/blog/" },
    { "@type": "ListItem", position: 3, name: "Chatbot con IA y cumplimiento legal", item: "https://www.mktweb360.com/chatbot-ia-rgpd-ai-act-cumplimiento-legal-espana/" },
  ],
};

const FAQS = [
  {
    q: "¿El AI Act ya está en vigor?",
    a: "El AI Act fue aprobado y entró en vigor en 2024. Las obligaciones de transparencia del artículo 50 que afectan a los chatbots entran en aplicación el 2 de agosto de 2026.",
  },
  {
    q: "¿Qué pasa si mi chatbot actual no cumple?",
    a: "A partir de agosto de 2026, la AESIA puede iniciar investigaciones y sancionar. Las sanciones por incumplimiento de las obligaciones de transparencia pueden llegar al 3% de la facturación global anual.",
  },
  {
    q: "¿El chatbot necesita consentimiento expreso del usuario?",
    a: "Para el tratamiento de datos de la conversación necesitas una base jurídica bajo el RGPD. Puede ser interés legítimo para la prestación del servicio, o consentimiento explícito si los datos se van a usar para entrenar el modelo u otras finalidades adicionales.",
  },
  {
    q: "¿Necesito un DPO para implementar un chatbot?",
    a: "No necesariamente. La obligación de tener DPO bajo el RGPD depende del volumen y la naturaleza del tratamiento de datos, no de tener un chatbot específicamente.",
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

export default function ChatbotRgpdAiActPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <article className="max-w-3xl mx-auto px-4 py-12">
        <Breadcrumbs crumbs={[{ label: "Inicio", href: "/" }, { label: "Blog", href: "/blog/" }, { label: "Chatbot con IA y cumplimiento legal" }]} />

        <header className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="bg-primary-100 text-primary-700 text-xs font-medium px-2.5 py-0.5 rounded-full">IA y Automatización · Julio 2026</span>
            <time className="text-sm text-gray-400" dateTime="2026-07-07">7 de julio de 2026</time>
          </div>
          <h1 className="text-4xl font-bold text-primary-600 mb-4 leading-tight">
            Chatbot con IA y cumplimiento legal en España: RGPD, AI Act y lo que cambia en agosto de 2026
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            El 2 de agosto de 2026 entran en aplicación las obligaciones de transparencia del AI Act que afectan directamente a los chatbots. Cumplir con el RGPD y el AI Act no es solo evitar sanciones: es una ventaja competitiva. Si estás pensando en <Link href="/que-es-un-chatbot-para-empresas-y-por-que-lo-necesitas-en-2026/" className="text-accent-500 hover:underline">implementar un chatbot en tu empresa</Link>, este es el momento de hacerlo bien.
          </p>
        </header>

        <div className="text-gray-700 space-y-6 leading-relaxed">
          <p>
            Muchas empresas descubren que su chatbot incumple la normativa cuando ya lo tienen en producción. La buena noticia es que ponerse al día es más sencillo de lo que parece si se entiende qué exige cada marco legal. Aquí separamos lo que dice el AI Act de lo que dice la AEPD, y traducimos ambos a acciones concretas.
          </p>

          <h2 className="text-2xl font-bold text-primary-600">Qué dice el AI Act sobre los chatbots</h2>
          <p>El artículo 50 del AI Act establece obligaciones de transparencia para los sistemas de inteligencia artificial que interactúan con personas. En la práctica significa que el usuario debe saber, de forma clara, que está hablando con un sistema automatizado y no con una persona. Estas obligaciones entran en aplicación el 2 de agosto de 2026.</p>
          <p>En España, el organismo encargado de supervisar el cumplimiento es la AESIA (Agencia Española de Supervisión de la Inteligencia Artificial). A partir de esa fecha, la AESIA puede iniciar investigaciones y aplicar sanciones. El incumplimiento de las obligaciones de transparencia puede llegar hasta el 3% de la facturación global anual de la empresa, una cifra que convierte el cumplimiento en una prioridad y no en un extra opcional.</p>

          <h2 className="text-2xl font-bold text-primary-600">Qué dice la AEPD sobre los chatbots y el RGPD</h2>
          <p>El AI Act no sustituye al RGPD: se suma. Todo chatbot que trate datos personales de la conversación —y prácticamente todos lo hacen— sigue sometido al Reglamento General de Protección de Datos. La AEPD ha publicado recomendaciones específicas sobre el uso de chatbots que conviene revisar antes de lanzar el proyecto.</p>
          <p>El punto clave del RGPD es la base jurídica del tratamiento. Necesitas identificar por qué puedes tratar los datos: puede ser interés legítimo para prestar el servicio, o consentimiento explícito si vas a usar las conversaciones para entrenar el modelo u otras finalidades adicionales. Estos principios se cruzan con otras obligaciones digitales que ya conoces, como la <Link href="/factura-electronica-obligatoria-autonomos-pymes/" className="text-accent-500 hover:underline">factura electrónica obligatoria</Link>, dentro de un marco de cumplimiento cada vez más amplio.</p>

          <h2 className="text-2xl font-bold text-primary-600">Los cuatro elementos que todo chatbot empresarial debe tener desde agosto de 2026</h2>
          <p>Hay cuatro elementos mínimos no negociables. Primero, información clara al usuario de que está interactuando con un sistema de IA. Segundo, una base jurídica válida para el tratamiento de los datos de la conversación bajo el RGPD. Tercero, información sobre qué se hace con esos datos y durante cuánto tiempo se conservan. Y cuarto, una vía sencilla para que el usuario ejerza sus derechos o pase a hablar con una persona.</p>
          <p>Estos cuatro elementos no encarecen ni complican el proyecto si se contemplan desde el diseño. El error habitual es añadirlos después, cuando ya hay que rehacer flujos. Diseñar el chatbot con cumplimiento incorporado desde el principio es más rápido y más barato.</p>

          <BlogBanner variant="default" />

          <h2 className="text-2xl font-bold text-primary-600">Por qué el cumplimiento es una ventaja competitiva</h2>
          <p>Cumplir la normativa se percibe a menudo como una carga, pero en el caso de los chatbots es lo contrario. Un usuario que sabe que sus datos están protegidos y que puede pasar a un humano cuando lo necesita confía más en la herramienta y la usa más. La transparencia genera adopción.</p>
          <p>Además, muchas empresas todavía funcionan con chatbots que no cumplirán en agosto de 2026. Adelantarse te sitúa por delante de la competencia y evita el riesgo de tener que apagar el sistema en plena campaña. Integrar el chatbot dentro de una estrategia coherente de <Link href="/ia-aplicada-al-marketing/" className="text-accent-500 hover:underline">IA aplicada al marketing</Link> multiplica ese efecto.</p>

          <h2 className="text-2xl font-bold text-primary-600">Checklist de cumplimiento para chatbots en España</h2>
          <p>Un checklist práctico de diez puntos te ayuda a verificar el estado de tu proyecto: aviso claro de que se trata de una IA, base jurídica documentada, información de tratamiento accesible, política de conservación de datos, vía de escalado a humano, registro de consentimientos cuando aplique, medidas de seguridad de los datos, procedimiento para ejercer derechos, revisión de proveedores externos y evaluación de riesgo según el sector.</p>
          <p>Repasar estos puntos antes del lanzamiento evita la mayoría de los problemas. Y también ayuda a tu <Link href="/geo-posicionamiento-ia/" className="text-accent-500 hover:underline">posicionamiento en buscadores de IA</Link>, porque un sistema bien construido y transparente proyecta una imagen de marca más sólida y fiable.</p>

          <h2 className="text-2xl font-bold text-primary-600">Sectores con requisitos adicionales</h2>
          <p>No todos los sectores parten del mismo punto. En sanidad, los datos de salud son categoría especial y exigen garantías reforzadas. En el sector financiero, las obligaciones de información y trazabilidad son más estrictas. Y cuando un chatbot puede entrar en contacto con menores, se activan protecciones adicionales bajo el RGPD y la LOPD española.</p>
          <p>Si operas en alguno de estos ámbitos, conviene un análisis específico antes de desplegar el chatbot. Cada sector tiene matices que un enfoque genérico no cubre, y es precisamente ahí donde el asesoramiento marca la diferencia entre un proyecto seguro y una sanción evitable.</p>

          <div className="bg-primary-600 text-white rounded-2xl p-8 my-2 text-center">
            <h2 className="text-2xl font-bold mb-3">Implanta tu chatbot cumpliendo el AI Act y el RGPD</h2>
            <p className="text-primary-200 mb-6">
              En Mkt Web 360 ayudamos a autónomos y pymes a poner en marcha chatbots que cumplen la normativa desde el diseño y aportan resultados reales.
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
      <RelatedArticles currentSlug="chatbot-ia-rgpd-ai-act-cumplimiento-legal-espana" />
    </>
  );
}
