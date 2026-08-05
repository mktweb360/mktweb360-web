import Image from "next/image";
import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { RelatedArticles } from "@/components/RelatedArticles";
import { BlogBanner } from "@/components/BlogBanner";
import { alternatesFor } from "@/lib/i18n/routes";

const SLUG = "marketing-digital-con-ia-y-respuestas-cero-clic";
const URL_CANONICAL = `https://www.mktweb360.com/${SLUG}/`;

export const metadata: Metadata = {
  title: "Marketing digital con IA y respuestas de cero clic: qué hacer ahora",
  description:
    "La IA responde directamente en Google, ChatGPT y Perplexity sin que el usuario haga clic. Cómo adaptar tu estrategia de marketing digital para seguir captando clientes en la era del cero clic.",
  alternates: alternatesFor(`/${SLUG}/`) ?? { canonical: URL_CANONICAL },
  openGraph: {
    title: "Marketing digital con IA y cero clic | Mkt Web 360",
    description:
      "La IA responde directamente sin clic. Cómo adaptar tu marketing para seguir captando clientes.",
    url: URL_CANONICAL,
    type: "article",
    images: [{ url: `/og-${SLUG}.jpg`, width: 1200, height: 630 }],
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "Marketing digital con IA y respuestas de cero clic: qué hacer ahora",
  description: "Cómo adaptar la estrategia de marketing digital cuando los buscadores con IA responden sin que el usuario haga clic.",
  author: { "@type": "Organization", name: "Mkt Web 360 SLU" },
  publisher: { "@type": "Organization", name: "Mkt Web 360 SLU", url: "https://www.mktweb360.com" },
  datePublished: "2026-08-04",
  url: URL_CANONICAL,
  mainEntityOfPage: URL_CANONICAL,
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Inicio", item: "https://www.mktweb360.com/" },
    { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.mktweb360.com/blog/" },
    { "@type": "ListItem", position: 3, name: "Marketing digital con IA y cero clic", item: URL_CANONICAL },
  ],
};

const FAQS = [
  {
    q: "¿El cero clic significa que el SEO ya no sirve?",
    a: "No. Significa que el SEO evoluciona. Aparecer en los AI Overviews o en las respuestas de ChatGPT es una forma de visibilidad que requiere exactamente lo que siempre ha pedido el buen SEO: contenido de autoridad, bien estructurado, orientado a responder preguntas reales. El tráfico cambia de forma, pero la inversión en contenido sigue siendo rentable.",
  },
  {
    q: "¿Cómo sé si la IA está usando mi contenido para responder?",
    a: "Puedes comprobarlo preguntando directamente en ChatGPT, Perplexity o Gemini sobre los temas en los que tienes autoridad. También puedes usar herramientas de monitorización de menciones en IA como Brandwatch AI o simplemente hacer búsquedas manuales periódicas. El GEO (Generative Engine Optimization) es la disciplina que optimiza esta presencia.",
  },
  {
    q: "¿Qué tipo de contenido funciona mejor para las respuestas de IA?",
    a: "Contenido factual, bien estructurado con encabezados claros, respuestas directas a preguntas concretas, datos con fuentes citadas y schema markup bien implementado. La IA prefiere contenido que puede citar con confianza, lo que coincide con los principios de E-E-A-T de Google.",
  },
  {
    q: "¿Los anuncios de Google siguen funcionando en el mundo del cero clic?",
    a: "Sí. Google sigue mostrando anuncios incluso en búsquedas con AI Overviews, y el intent comercial (búsquedas de compra) sigue generando clics. El cero clic afecta principalmente a búsquedas informacionales. Las búsquedas de fondo de embudo mantienen tasas de clic similares.",
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

export default function CeroClicPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <article className="max-w-3xl mx-auto px-4 py-12">
        <Breadcrumbs
          crumbs={[
            { label: "Inicio", href: "/" },
            { label: "Blog", href: "/blog/" },
            { label: "Marketing digital con IA y cero clic" },
          ]}
        />

        <header className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="bg-primary-100 text-primary-700 text-xs font-medium px-2.5 py-0.5 rounded-full">
              GEO
            </span>
            <time className="text-sm text-gray-400" dateTime="2026-08-04">
              4 de agosto de 2026
            </time>
          </div>
          <h1 className="text-4xl font-bold text-primary-600 mb-4 leading-tight">
            Marketing digital con IA y respuestas de cero clic: qué hacer ahora
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Google responde antes de que el usuario haga clic. ChatGPT y Perplexity responden sin necesidad de web. El tráfico orgánico está cambiando de forma — y la estrategia de marketing digital que no lo contemple está optimizando para un mundo que ya no existe.
          </p>
          <Image
            src={`/og-${SLUG}.jpg`}
            alt="Marketing digital con IA y respuestas de cero clic"
            width={1200}
            height={630}
            className="w-full rounded-2xl mt-6"
            priority
          />
        </header>

        <div className="text-gray-700 space-y-6 leading-relaxed">
          <p>
            Los AI Overviews de Google, las respuestas directas de ChatGPT y los summaries de Perplexity tienen algo en común: resuelven la consulta del usuario sin que este tenga que hacer clic en ninguna web. Esto está cambiando la composición del tráfico orgánico para la mayoría de las empresas, y seguirá haciéndolo.
          </p>

          <h2 className="text-2xl font-bold text-primary-600">Qué es el cero clic y cómo llegamos aquí</h2>
          <p>
            El término "cero clic" describe las búsquedas que Google (u otro motor) resuelve directamente en la página de resultados sin que el usuario visite ninguna web. Existía antes de la IA — los featured snippets ya lo hacían — pero la generación de respuestas por IA lo amplifica de forma radical.
          </p>
          <p>
            Según datos de SparkToro, más del 60% de las búsquedas en Google ya terminaban en cero clics en 2023. Con la implantación de los AI Overviews, esa proporción ha crecido en búsquedas informacionales. La diferencia ahora es que no es solo Google: ChatGPT tiene cientos de millones de usuarios que preguntan directamente a la IA en lugar de buscar en Google.
          </p>

          <div className="bg-primary-50 rounded-xl p-6 border border-primary-100">
            <p className="font-semibold text-primary-700 mb-2">¿Tu empresa aparece cuando la IA responde sobre tu sector?</p>
            <p className="text-gray-600 text-sm mb-4">
              El GEO (Generative Engine Optimization) es la estrategia para aparecer en las respuestas de ChatGPT, Gemini y Perplexity. Auditamos tu presencia actual en IA y diseñamos el plan.
            </p>
            <Link
              href="/geo-posicionamiento-ia/"
              className="inline-block bg-accent-500 text-white px-6 py-2.5 rounded-full font-semibold text-sm hover:bg-accent-600 transition-colors"
            >
              Ver servicio GEO
            </Link>
          </div>

          <h2 className="text-2xl font-bold text-primary-600">Qué significa realmente para tu tráfico web</h2>
          <p>
            El impacto del cero clic no es uniforme. Las búsquedas informacionales — "qué es X", "cómo funciona Y", "diferencia entre A y B" — son las más afectadas. Las búsquedas de fondo de embudo — "comprar X en Madrid", "precio de servicio Y" — mantienen tasas de clic relativamente estables porque el usuario quiere ir a un sitio concreto, no solo una respuesta.
          </p>
          <p>
            Para una empresa de servicios o una PYME, el efecto más visible es la caída del tráfico de blog en artículos puramente informativos. La visita llega menos, aunque la marca haya aparecido en la respuesta de IA. El reto es que la visibilidad ya no se traduce siempre en clics — y la métrica de "posición en Google" deja de ser suficiente.
          </p>

          <h2 className="text-2xl font-bold text-primary-600">Estrategias para seguir captando clientes</h2>
          <p>
            La adaptación requiere trabajar en varias dimensiones simultáneamente. La primera es el GEO: optimizar el contenido para que la IA lo cite con frecuencia. Esto implica estructurar el contenido con respuestas claras a preguntas concretas, usar schema markup bien implementado, citar fuentes y datos verificables, y construir autoridad temática en el sector.
          </p>
          <p>
            La segunda dimensión es reforzar los canales que la IA no puede reemplazar: captación directa (email marketing, WhatsApp Business), búsqueda de marca (los usuarios que ya te conocen siguen haciendo clic), y contenido de alto valor que requiere contexto — casos de éxito, guías detalladas, herramientas interactivas — que la IA resume pero no sustituye por completo.
          </p>
          <p>
            La tercera es diversificar las fuentes de tráfico. Depender exclusivamente del SEO informacional era arriesgado antes de la IA; ahora es un punto de vulnerabilidad claro. LinkedIn, newsletters, podcasts y comunidades de nicho son canales donde la IA no tiene impacto directo en la distribución.
          </p>

          <BlogBanner variant="geo" />

          <h2 className="text-2xl font-bold text-primary-600">El GEO como nueva capa de visibilidad</h2>
          <p>
            Aparecer en la respuesta de ChatGPT cuando alguien pregunta "¿cuál es la mejor agencia de marketing digital en Toledo?" es el equivalente moderno del posicionamiento en la primera página de Google. No siempre genera un clic inmediato — pero construye reconocimiento, credibilidad y, con el tiempo, búsquedas directas de marca.
          </p>
          <p>
            El GEO no reemplaza al SEO — lo complementa. Las técnicas que favorecen la citación por parte de los modelos de IA son en gran medida las mismas que Google ya valoraba: autoridad, claridad, estructura, datos y experiencia real. Lo que cambia es el canal de distribución del resultado.
          </p>

          <div className="bg-primary-600 text-white rounded-2xl p-8 my-2 text-center">
            <h2 className="text-2xl font-bold mb-3">Visibilidad en la era de la IA</h2>
            <p className="text-primary-200 mb-6">
              Si quieres que tu empresa aparezca cuando la IA responde sobre tu sector, podemos diseñar la estrategia GEO + SEO + contenido adecuada para tu negocio.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/geo-posicionamiento-ia/"
                className="bg-accent-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-accent-600 transition-colors"
              >
                Ver servicio GEO
              </Link>
              <Link
                href="/auditoria-digital/"
                className="border-2 border-white text-white px-6 py-3 rounded-full font-semibold hover:bg-white/10 transition-colors"
              >
                Solicitar diagnóstico gratuito
              </Link>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-primary-600">Preguntas frecuentes sobre marketing digital y cero clic</h2>
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
            Ver también:{" "}
            <Link href="/geo-posicionamiento-ia/" className="text-accent-500 hover:underline">
              Servicio GEO
            </Link>{" "}
            ·{" "}
            <Link href="/seo-posicionamiento-web-organico/" className="text-accent-500 hover:underline">
              SEO posicionamiento web
            </Link>
          </p>
        </div>

        <nav className="mt-12 pt-8 border-t border-gray-200">
          <Link href="/blog/" className="text-accent-500 hover:text-accent-600 font-medium text-sm">
            ← Volver al blog
          </Link>
        </nav>
      </article>
      <RelatedArticles currentSlug={SLUG} />
    </>
  );
}
