import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { RelatedArticles } from "@/components/RelatedArticles";
import { BlogBanner } from "@/components/BlogBanner";

export const metadata: Metadata = {
  title: "Por qué aparecer en ChatGPT y Gemini importa más que el SEO en 2026",
  description:
    "Millones de personas ya no buscan en Google. Preguntan a ChatGPT, Perplexity o Gemini. Si tu negocio no aparece en sus respuestas, estás perdiendo clientes sin saberlo. Guía GEO 2026.",
  alternates: { canonical: "https://www.mktweb360.com/por-que-aparecer-en-chatgpt-perplexity-gemini-importa-mas-que-el-seo-en-2026/" },
  openGraph: {
    title: "Por qué aparecer en ChatGPT y Gemini importa más que el SEO en 2026 | Mkt Web 360",
    description: "Millones de personas ya no buscan en Google. Preguntan a ChatGPT, Perplexity o Gemini. Si tu negocio no aparece en sus respuestas, estás perdiendo clientes sin saberlo. Guía GEO 2026.",
    url: "https://www.mktweb360.com/por-que-aparecer-en-chatgpt-perplexity-gemini-importa-mas-que-el-seo-en-2026/",
    type: "article",
    images: [{ url: "https://www.mktweb360.com/og-que-es-geo-generative-engine-optimization.jpg", width: 1200, height: 630 }],
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "Por qué aparecer en ChatGPT y Gemini importa más que el SEO en 2026",
  description: "Millones de personas ya no buscan en Google. Preguntan a ChatGPT, Perplexity o Gemini. Si tu negocio no aparece en sus respuestas, estás perdiendo clientes sin saberlo. Guía GEO 2026.",
  author: { "@type": "Organization", name: "Mkt Web 360 SLU" },
  publisher: { "@type": "Organization", name: "Mkt Web 360 SLU", url: "https://www.mktweb360.com" },
  datePublished: "2026-07-07",
  image: "https://www.mktweb360.com/og-que-es-geo-generative-engine-optimization.jpg",
  url: "https://www.mktweb360.com/por-que-aparecer-en-chatgpt-perplexity-gemini-importa-mas-que-el-seo-en-2026/",
  mainEntityOfPage: "https://www.mktweb360.com/por-que-aparecer-en-chatgpt-perplexity-gemini-importa-mas-que-el-seo-en-2026/",
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Inicio", item: "https://www.mktweb360.com/" },
    { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.mktweb360.com/blog/" },
    { "@type": "ListItem", position: 3, name: "Aparecer en ChatGPT y Gemini en 2026", item: "https://www.mktweb360.com/por-que-aparecer-en-chatgpt-perplexity-gemini-importa-mas-que-el-seo-en-2026/" },
  ],
};

const FAQS = [
  {
    q: "¿Qué es GEO y en qué se diferencia del SEO?",
    a: "El SEO optimiza tu web para aparecer en los resultados de Google. El GEO (Generative Engine Optimization) optimiza tu contenido para que los modelos de IA como ChatGPT, Gemini, Perplexity o Claude te citen en sus respuestas. Son complementarios: un buen SEO facilita el GEO, pero no son lo mismo.",
  },
  {
    q: "¿Cuánta gente usa ChatGPT para buscar cosas en 2026?",
    a: "ChatGPT supera los 800 millones de usuarios semanales en 2026. Millones de personas lo usan para resolver dudas, comparar productos, pedir recomendaciones de proveedores y tomar decisiones de compra, especialmente en sectores B2B y servicios profesionales.",
  },
  {
    q: "¿Puede una pyme o autónomo aparecer en las respuestas de ChatGPT?",
    a: "Sí. Los modelos de IA citan fuentes basándose en autoridad semántica, calidad del contenido y estructura técnica, no solo en el tamaño de la empresa. Una pyme con contenido bien estructurado, schema markup correcto y autoridad en su nicho puede aparecer frente a grandes marcas.",
  },
  {
    q: "¿Por dónde empiezo a hacer GEO para mi negocio?",
    a: "El punto de partida es un SEO técnico sólido: web en HTTPS, Core Web Vitals en verde, schema markup correcto y contenido que responde preguntas reales. A partir de ahí, el GEO añade: llms.txt, entidades verificables, formato pregunta-respuesta y autoridad de contenido demostrada.",
  },
  {
    q: "¿Cuánto tiempo tarda en funcionar el GEO?",
    a: "Plazos similares al SEO: 3-6 meses para resultados iniciales, 6-12 meses para consolidación. El trabajo constante de contenido y autoridad genera resultados acumulados.",
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

export default function AparecerEnChatGPTGeminiPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <article className="max-w-3xl mx-auto px-4 py-12">
        <Breadcrumbs crumbs={[{ label: "Inicio", href: "/" }, { label: "Blog", href: "/blog/" }, { label: "Por qué aparecer en ChatGPT, Perplexity y Gemini importa más que el SEO en 2026" }]} />

        <header className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="bg-primary-100 text-primary-700 text-xs font-medium px-2.5 py-0.5 rounded-full">GEO · Posicionamiento en IA</span>
            <time className="text-sm text-gray-400" dateTime="2026-07-07">7 de julio de 2026</time>
          </div>
          <h1 className="text-4xl font-bold text-primary-600 mb-4 leading-tight">
            Por qué aparecer en ChatGPT, Perplexity y Gemini importa más que el SEO en 2026
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Millones de personas ya no escriben en Google: le preguntan directamente a ChatGPT, Perplexity o Gemini. Si tu negocio no aparece en esas respuestas, estás perdiendo clientes sin ni siquiera saberlo. El <Link href="/geo-posicionamiento-ia/" className="text-accent-500 hover:underline">GEO o posicionamiento en IA</Link> es la disciplina que decide si la máquina te menciona o menciona a tu competencia.
          </p>
        </header>

        <div className="text-gray-700 space-y-6 leading-relaxed">
          <p>
            Durante veinte años, la pregunta era una sola: cómo salir el primero en Google. En 2026 esa pregunta se ha desdoblado. Cada vez más usuarios no ven una lista de diez enlaces azules, sino una respuesta redactada por una inteligencia artificial que decide, por ti, qué fuentes merecen ser citadas. Aparecer en esa respuesta se ha convertido en el nuevo primer puesto, y no siempre coincide con quien manda en el buscador clásico.
          </p>

          <h2 className="text-2xl font-bold text-primary-600">Cómo busca la gente en 2026: el cambio que ya ocurrió</h2>
          <p>El cambio de hábito no es una previsión: ya ha pasado. ChatGPT supera los 800 millones de usuarios semanales, y una parte creciente de esa gente lo usa exactamente para lo que antes usaba Google: resolver dudas, comparar productos y pedir recomendaciones de proveedores. Gartner estima que las búsquedas en el buscador tradicional caerán en torno a un 25% antes de finales de 2026, precisamente porque parte de esas consultas migran a asistentes conversacionales.</p>
          <p>Y no solo se trata de asistentes independientes. Google integra sus propias respuestas generativas, los AI Overviews, en el 58% de las búsquedas. Es decir, incluso cuando el usuario sigue en Google, muchas veces obtiene una respuesta redactada por IA antes de bajar a los resultados orgánicos. El interfaz de la búsqueda ha cambiado, y con él las reglas de la visibilidad.</p>
          <p>En decisiones profesionales el fenómeno es todavía más acusado: el 94% de los grupos de compra B2B usan IA generativa antes de hablar con un proveedor. Cuando ese comprador pregunta a la máquina quién puede ayudarle, tu marca o aparece en la respuesta o, sencillamente, no existe en esa conversación.</p>

          <h2 className="text-2xl font-bold text-primary-600">Qué es el GEO y por qué no es lo mismo que el SEO</h2>
          <p>El GEO (Generative Engine Optimization) es la disciplina que optimiza tu contenido para que los modelos de IA te citen en sus respuestas. Comparte fundamentos con el <Link href="/seo-posicionamiento-web-organico/" className="text-accent-500 hover:underline">SEO orgánico</Link>, pero persigue un objetivo distinto: no pelear por un puesto en una lista, sino ser la fuente que la máquina elige para construir su explicación.</p>
          <p>La diferencia práctica es importante y por eso conviene entender bien las <Link href="/geo-vs-seo-diferencias/" className="text-accent-500 hover:underline">diferencias entre GEO y SEO</Link>. El SEO premia autoridad de dominio, enlaces y palabras clave. El GEO premia claridad semántica, estructura de pregunta-respuesta y entidades verificables que la IA puede entender y relacionar sin ambigüedad. Un buen SEO técnico es el suelo sobre el que se construye el GEO, pero no lo sustituye.</p>

          <h2 className="text-2xl font-bold text-primary-600">Por qué una pyme puede aparecer donde no aparece una gran marca</h2>
          <p>Aquí está la buena noticia para los negocios pequeños. Los modelos de IA no reparten citas por tamaño de empresa ni por presupuesto de marketing, sino por autoridad semántica sobre un tema concreto. Cuando el asistente busca la mejor fuente para responder una pregunta específica, valora que el contenido sea claro, estructurado y demostrablemente competente en ese nicho.</p>
          <p>Eso rompe la jerarquía habitual. Una gran marca puede dominar cientos de términos genéricos y, sin embargo, no ser la referencia sobre una consulta muy específica de tu sector. Una pyme con contenido bien trabajado, schema markup correcto y foco en su especialidad puede convertirse justo en esa referencia, y la IA no tiene ningún incentivo para preferir al grande si el pequeño responde mejor a la pregunta.</p>

          <BlogBanner variant="geo" />

          <h2 className="text-2xl font-bold text-primary-600">Las tres señales que la IA busca en tu contenido</h2>
          <p>Simplificando mucho, los motores generativos evalúan tres cosas. La primera es la estructura: contenido organizado en preguntas y respuestas, con encabezados claros y párrafos que resuelven una idea cada uno, es mucho más fácil de extraer y citar. La segunda es la autoridad semántica: que tu marca aparezca vinculada de forma coherente a los temas en los que quieres ser referencia, con entidades y datos verificables.</p>
          <p>La tercera es la solidez técnica: web en HTTPS, buen rendimiento, schema markup correcto y señales limpias para los crawlers de IA. Ninguna de estas tres señales es exótica; todas se construyen sobre el trabajo que ya hace un buen profesional de SEO, ordenado ahora con la lógica de que quien lee no es solo una persona, sino también una máquina que va a resumir.</p>

          <div className="bg-primary-600 text-white rounded-2xl p-8 my-2 text-center">
            <h2 className="text-2xl font-bold mb-3">¿Aparece tu negocio cuando la gente le pregunta a la IA?</h2>
            <p className="text-primary-200 mb-6">
              En Mkt Web 360 ayudamos a pymes y autónomos a posicionarse en ChatGPT, Gemini y Perplexity con una estrategia de GEO construida sobre bases SEO sólidas.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contacto/" className="bg-accent-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-accent-600 transition-colors">
                Hablar con un especialista
              </Link>
              <Link href="/geo-posicionamiento-ia/" className="border-2 border-white text-white px-6 py-3 rounded-full font-semibold hover:bg-white/10 transition-colors">
                Ver servicio de GEO
              </Link>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-primary-600">El riesgo de no hacer nada</h2>
          <p>El coste de ignorar el GEO no se ve en una factura, sino en las oportunidades que nunca llegan. Cuando un cliente potencial le pregunta a la IA por soluciones de tu sector y tu marca no aparece, esa venta se decide sin que tú entres siquiera en la conversación. Es una pérdida silenciosa, difícil de medir precisamente porque no deja rastro en tus analíticas.</p>
          <p>Hay quien se pregunta si esto significa que el buscador clásico está acabado. La respuesta corta es no, y merece la pena leer con calma el análisis sobre si <Link href="/ha-muerto-el-seo-con-la-ia/" className="text-accent-500 hover:underline">ha muerto el SEO con la IA</Link>: sigue vivo, pero convive ahora con un nuevo canal donde la visibilidad se gana de otra forma. Lo sensato no es elegir entre SEO y GEO, sino trabajar ambos como una sola estrategia de presencia digital.</p>

          <h2 className="text-2xl font-bold text-primary-600">Preguntas frecuentes sobre GEO y posicionamiento en IA</h2>
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
            Servicio relacionado: <Link href="/geo-posicionamiento-ia/" className="text-accent-500 hover:underline">GEO · Posicionamiento en IA</Link>
          </p>
        </div>

        <nav className="mt-12 pt-8 border-t border-gray-200">
          <Link href="/blog/" className="text-accent-500 hover:text-accent-600 font-medium text-sm">← Volver al blog</Link>
        </nav>
      </article>
      <RelatedArticles currentSlug="por-que-aparecer-en-chatgpt-perplexity-gemini-importa-mas-que-el-seo-en-2026" />
    </>
  );
}
