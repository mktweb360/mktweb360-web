import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { RelatedArticles } from "@/components/RelatedArticles";
import { BlogBanner } from "@/components/BlogBanner";
import { OfertaVeranoBanner } from "@/components/OfertaVeranoBanner";

export const metadata: Metadata = {
  title: "Cómo optimizar tu contenido para que la IA te cite: guía GEO 2026",
  description:
    "Guía técnica y práctica de GEO para pymes. Aprende a estructurar tu contenido, implementar schema markup avanzado, configurar llms.txt y construir autoridad semántica para aparecer en ChatGPT, Gemini y Perplexity.",
  alternates: { canonical: "https://www.mktweb360.com/como-optimizar-tu-contenido-para-que-la-ia-te-cite-guia-geo-2026/" },
  openGraph: {
    title: "Cómo optimizar tu contenido para que la IA te cite: guía GEO 2026 | Mkt Web 360",
    description: "Guía técnica y práctica de GEO para pymes. Aprende a estructurar tu contenido, implementar schema markup avanzado, configurar llms.txt y construir autoridad semántica para aparecer en ChatGPT, Gemini y Perplexity.",
    url: "https://www.mktweb360.com/como-optimizar-tu-contenido-para-que-la-ia-te-cite-guia-geo-2026/",
    type: "article",
    images: [{ url: "https://www.mktweb360.com/og-geo.jpg", width: 1200, height: 630 }],
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "Cómo optimizar tu contenido para que la IA te cite: guía GEO 2026",
  description: "Guía técnica y práctica de GEO para pymes. Aprende a estructurar tu contenido, implementar schema markup avanzado, configurar llms.txt y construir autoridad semántica para aparecer en ChatGPT, Gemini y Perplexity.",
  author: { "@type": "Organization", name: "Mkt Web 360 SLU" },
  publisher: { "@type": "Organization", name: "Mkt Web 360 SLU", url: "https://www.mktweb360.com" },
  datePublished: "2026-07-07",
  image: "https://www.mktweb360.com/og-geo.jpg",
  url: "https://www.mktweb360.com/como-optimizar-tu-contenido-para-que-la-ia-te-cite-guia-geo-2026/",
  mainEntityOfPage: "https://www.mktweb360.com/como-optimizar-tu-contenido-para-que-la-ia-te-cite-guia-geo-2026/",
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Inicio", item: "https://www.mktweb360.com/" },
    { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.mktweb360.com/blog/" },
    { "@type": "ListItem", position: 3, name: "Guía GEO 2026: cómo optimizar tu contenido", item: "https://www.mktweb360.com/como-optimizar-tu-contenido-para-que-la-ia-te-cite-guia-geo-2026/" },
  ],
};

const FAQS = [
  {
    q: "¿Qué es llms.txt y necesito tenerlo?",
    a: "El llms.txt es un archivo equivalente al robots.txt pero para modelos de lenguaje. Indica a los crawlers de IA (GPTBot, ClaudeBot, Google-Extended) qué contenido pueden indexar. No es obligatorio pero mejora la probabilidad de que la IA indexe y entienda bien tu contenido.",
  },
  {
    q: "¿El schema markup ayuda a que la IA me cite?",
    a: "Sí. El schema markup estructurado (FAQPage, Article, Organization, Service) hace que tu contenido sea más fácil de procesar para los modelos de IA. Google también usa el schema para construir los AI Overviews.",
  },
  {
    q: "¿Cuántas palabras debe tener un artículo para posicionar en IA?",
    a: "La longitud importa menos que la profundidad. Un artículo de 1.200 palabras que responde con precisión a una pregunta concreta tiene más probabilidad de ser citado que uno de 3.000 palabras genérico. La clave es la densidad semántica.",
  },
  {
    q: "¿Cómo sé si ChatGPT me está citando?",
    a: "Puedes hacer pruebas manuales preguntando a ChatGPT, Gemini y Perplexity sobre tu sector. Herramientas como Profound, Otterly.ai o AthenaHQ permiten monitorizar la visibilidad de tu marca en motores generativos de forma sistemática.",
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

export default function OptimizarContenidoGEOPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <article className="max-w-3xl mx-auto px-4 py-12">
        <Breadcrumbs crumbs={[{ label: "Inicio", href: "/" }, { label: "Blog", href: "/blog/" }, { label: "Cómo optimizar tu contenido para que ChatGPT y Gemini te citen" }]} />

        <header className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="bg-primary-100 text-primary-700 text-xs font-medium px-2.5 py-0.5 rounded-full">GEO · Optimización para IA</span>
            <time className="text-sm text-gray-400" dateTime="2026-07-07">7 de julio de 2026</time>
          </div>
          <h1 className="text-4xl font-bold text-primary-600 mb-4 leading-tight">
            Cómo optimizar tu contenido para que ChatGPT y Gemini te citen en sus respuestas
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Aparecer en las respuestas de la IA no es cuestión de suerte, sino de método. Esta guía técnica de <Link href="/geo-posicionamiento-ia/" className="text-accent-500 hover:underline">GEO (Generative Engine Optimization)</Link> recorre, paso a paso, cómo estructurar tu contenido, aplicar schema markup avanzado y construir la autoridad semántica que hace que ChatGPT, Gemini y Perplexity te citen.
          </p>
        </header>

        <div className="text-gray-700 space-y-6 leading-relaxed">
          <p>
            El GEO no reemplaza a tu trabajo de posicionamiento: lo prolonga. Todo lo que sigue asume que ya tienes una base decente de <Link href="/seo-posicionamiento-web-organico/" className="text-accent-500 hover:underline">SEO orgánico</Link> —web rápida, en HTTPS y con contenido útil— y añade encima las señales que los motores generativos necesitan para elegirte como fuente. Si aún dudas de por qué esto importa, conviene leer antes por qué <Link href="/por-que-aparecer-en-chatgpt-perplexity-gemini-importa-mas-que-el-seo-en-2026/" className="text-accent-500 hover:underline">aparecer en ChatGPT y Gemini importa más que el SEO en 2026</Link>.
          </p>

          <h2 className="text-2xl font-bold text-primary-600">1. La estructura del contenido es la señal más importante</h2>
          <p>Los modelos de lenguaje no leen como una persona: extraen fragmentos autocontenidos que puedan reutilizar para responder. Por eso la estructura pesa más que casi cualquier otra cosa. Un contenido organizado en preguntas explícitas y respuestas directas, con un encabezado por idea y párrafos que resuelven un solo punto, es mucho más citable que un texto largo y sinuoso donde la respuesta está diluida.</p>
          <p>La regla práctica es sencilla: cada sección debería poder leerse de forma aislada y seguir teniendo sentido. Empieza cada bloque respondiendo la pregunta y luego desarrolla. Ese formato pregunta-respuesta no solo ayuda a la IA; también mejora la experiencia del lector humano, que encuentra lo que busca sin rodeos.</p>

          <h2 className="text-2xl font-bold text-primary-600">2. Schema markup avanzado: más allá del básico</h2>
          <p>El schema markup traduce tu contenido a un lenguaje que las máquinas entienden sin ambigüedad. Ir más allá de lo básico significa combinar varios tipos de forma coherente: FAQPage para las preguntas frecuentes, Article para el cuerpo del contenido, Organization para identificar quién publica y Service para lo que ofreces.</p>
          <p>Este marcado tiene un doble beneficio. Facilita que los modelos de IA procesen y relacionen tu información, y a la vez alimenta los AI Overviews de Google, que se apoyan en datos estructurados para decidir qué fuentes citar. Un schema limpio y completo es de las inversiones técnicas con mejor relación esfuerzo-resultado en GEO.</p>

          <h2 className="text-2xl font-bold text-primary-600">3. El fichero llms.txt: la señal que los crawlers de IA leen</h2>
          <p>El llms.txt es el equivalente al robots.txt, pero pensado para los modelos de lenguaje. En él indicas a crawlers como GPTBot, ClaudeBot o Google-Extended qué contenido pueden acceder e indexar. No es un requisito obligatorio, pero es una señal cada vez más habitual y aumenta la probabilidad de que la IA encuentre y entienda bien tus páginas más importantes.</p>
          <p>Configurarlo bien pasa por revisar primero qué bots de IA quieres permitir y cuáles no, y por señalar de forma ordenada los recursos que quieres que la máquina priorice. Es un archivo pequeño, pero forma parte de esa capa técnica que separa a quien improvisa de quien trabaja el GEO con criterio.</p>

          <OfertaVeranoBanner />
          <BlogBanner variant="geo" />

          <h2 className="text-2xl font-bold text-primary-600">4. Autoridad de entidad: que todo diga lo mismo sobre ti</h2>
          <p>Los modelos de IA construyen una idea de quién eres a partir de todas las menciones que encuentran. Si tu nombre, tu actividad y tus datos aparecen de forma coherente en la web, en tu ficha de <Link href="/seo-local-empresas-servicios/" className="text-accent-500 hover:underline">SEO local</Link> y en cada canal donde estás presente, esa entidad se vuelve sólida y verificable. Si hay contradicciones, la máquina duda y prefiere citar a alguien más consistente.</p>
          <p>Trabajar la autoridad de entidad significa alinear el mensaje: mismos datos de contacto, misma descripción de lo que haces, mismas áreas de especialidad repetidas de forma coherente. Cuanto más claro sea para la IA qué eres y sobre qué eres experto, más fácil le resulta asociarte a las preguntas donde quieres aparecer.</p>

          <h2 className="text-2xl font-bold text-primary-600">5. Contenido que demuestra experiencia real</h2>
          <p>La densidad semántica gana a la extensión. Un artículo de 1.200 palabras que responde con precisión a una pregunta concreta tiene más opciones de ser citado que uno de 3.000 genérico. Lo que los motores valoran es que el contenido demuestre competencia real: ejemplos concretos, matices que solo aporta quien conoce el tema y respuestas que no se limitan a repetir lugares comunes.</p>
          <p>Escribir para la IA no significa escribir de forma artificial. Significa ser claro, específico y honesto sobre lo que sabes. El contenido que aporta valor genuino es también el que la máquina reconoce como fuente fiable.</p>

          <div className="bg-primary-600 text-white rounded-2xl p-8 my-2 text-center">
            <h2 className="text-2xl font-bold mb-3">¿Quieres que la IA cite tu web y no la de tu competencia?</h2>
            <p className="text-primary-200 mb-6">
              En Mkt Web 360 implementamos GEO de principio a fin: estructura de contenido, schema avanzado, llms.txt y autoridad semántica sobre una base SEO sólida.
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

          <h2 className="text-2xl font-bold text-primary-600">Cómo medir si el GEO está funcionando</h2>
          <p>La medición del GEO es distinta a la del SEO clásico, porque no hay un ranking único que consultar. El primer nivel es manual: pregunta a ChatGPT, Gemini y Perplexity por temas de tu sector y observa si tu marca aparece y en qué términos. Es artesanal, pero da una foto rápida y gratuita de tu visibilidad generativa.</p>
          <p>Para un seguimiento sistemático existen herramientas como Profound, Otterly.ai o AthenaHQ, que monitorizan la presencia de tu marca en los motores generativos a lo largo del tiempo. Con paciencia —los plazos son similares al SEO— verás cómo el trabajo constante de estructura, schema y autoridad se traduce en menciones acumuladas.</p>

          <h2 className="text-2xl font-bold text-primary-600">Preguntas frecuentes sobre optimización GEO</h2>
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
      <RelatedArticles currentSlug="como-optimizar-tu-contenido-para-que-la-ia-te-cite-guia-geo-2026" />
    </>
  );
}
