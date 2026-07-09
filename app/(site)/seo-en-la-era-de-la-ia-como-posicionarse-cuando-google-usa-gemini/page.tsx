import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { RelatedArticles } from "@/components/RelatedArticles";
import { BlogBanner } from "@/components/BlogBanner";
import { OfertaVeranoBanner } from "@/components/OfertaVeranoBanner";

export const metadata: Metadata = {
  title: "SEO en la era de la IA: cómo posicionarse cuando Google usa Gemini para responder",
  description:
    "Google ya no es solo un buscador. Es un motor de respuestas generativas con Gemini. Cómo adaptar tu estrategia SEO para que tu web siga captando tráfico cuando la IA responde antes que tú.",
  alternates: { canonical: "https://www.mktweb360.com/seo-en-la-era-de-la-ia-como-posicionarse-cuando-google-usa-gemini/" },
  openGraph: {
    title: "SEO en la era de la IA: cómo posicionarse cuando Google usa Gemini para responder | Mkt Web 360",
    description: "Google ya no es solo un buscador. Es un motor de respuestas generativas con Gemini. Cómo adaptar tu estrategia SEO para que tu web siga captando tráfico cuando la IA responde antes que tú.",
    url: "https://www.mktweb360.com/seo-en-la-era-de-la-ia-como-posicionarse-cuando-google-usa-gemini/",
    type: "article",
    images: [{ url: "https://www.mktweb360.com/og-seo.jpg", width: 1200, height: 630 }],
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "SEO en la era de la IA: cómo posicionarse cuando Google usa Gemini para responder",
  description: "Google ya no es solo un buscador. Es un motor de respuestas generativas con Gemini. Cómo adaptar tu estrategia SEO para que tu web siga captando tráfico cuando la IA responde antes que tú.",
  author: { "@type": "Organization", name: "Mkt Web 360 SLU" },
  publisher: { "@type": "Organization", name: "Mkt Web 360 SLU", url: "https://www.mktweb360.com" },
  datePublished: "2026-07-07",
  image: "https://www.mktweb360.com/og-seo.jpg",
  url: "https://www.mktweb360.com/seo-en-la-era-de-la-ia-como-posicionarse-cuando-google-usa-gemini/",
  mainEntityOfPage: "https://www.mktweb360.com/seo-en-la-era-de-la-ia-como-posicionarse-cuando-google-usa-gemini/",
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Inicio", item: "https://www.mktweb360.com/" },
    { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.mktweb360.com/blog/" },
    { "@type": "ListItem", position: 3, name: "SEO en la era de la IA", item: "https://www.mktweb360.com/seo-en-la-era-de-la-ia-como-posicionarse-cuando-google-usa-gemini/" },
  ],
};

const FAQS = [
  {
    q: "¿Debo cambiar mi estrategia de keywords con los AI Overviews?",
    a: "Sí, parcialmente. Las keywords informacionales puras están siendo más captadas por AI Overviews. Las keywords con intención comercial siguen generando clics porque el usuario necesita profundizar. Ajusta tu mix hacia keywords con mayor intención comercial.",
  },
  {
    q: "¿Puedo aparecer dentro de un AI Overview de Google?",
    a: "Sí. Google selecciona las fuentes para sus AI Overviews basándose en autoridad y relevancia. Las páginas con buen SEO técnico, schema markup correcto y contenido de alta calidad tienen más probabilidad de ser citadas dentro del AI Overview.",
  },
  {
    q: "¿Vale la pena hacer SEO si Google responde directamente con IA?",
    a: "Sí. No todas las búsquedas tienen AI Overview, especialmente las comerciales. Aparecer como fuente dentro del AI Overview tiene valor de marca. Los usuarios que hacen clic después de ver un AI Overview tienen mejor tasa de conversión.",
  },
  {
    q: "¿El SEO local se ve afectado por los AI Overviews?",
    a: "Menos que el SEO informacional. Las búsquedas locales siguen mostrando el pack de mapas y resultados locales con alta prominencia. El SEO local mantiene su eficacia para negocios con presencia física.",
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

export default function SeoEraIaPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <article className="max-w-3xl mx-auto px-4 py-12">
        <Breadcrumbs crumbs={[{ label: "Inicio", href: "/" }, { label: "Blog", href: "/blog/" }, { label: "SEO en la era de la IA" }]} />

        <header className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="bg-primary-100 text-primary-700 text-xs font-medium px-2.5 py-0.5 rounded-full">SEO · Estrategia</span>
            <time className="text-sm text-gray-400" dateTime="2026-07-07">7 de julio de 2026</time>
          </div>
          <h1 className="text-4xl font-bold text-primary-600 mb-4 leading-tight">
            SEO en la era de la IA: cómo posicionarse cuando Google usa Gemini para dar las respuestas
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Google ya no es solo un buscador: es un motor de respuestas generativas impulsado por Gemini. Adaptar tu <Link href="/seo-posicionamiento-web-organico/" className="text-accent-500 hover:underline">estrategia SEO</Link> para seguir captando tráfico cuando la IA responde antes que tú no es opcional, es la diferencia entre crecer o quedarte fuera de la conversación.
          </p>
        </header>

        <div className="text-gray-700 space-y-6 leading-relaxed">
          <p>
            Durante años, el objetivo del SEO era claro: subir al primer puesto y captar el clic. Hoy Google puede responder directamente con Gemini antes de que el usuario llegue a ese primer puesto. Eso no significa que el SEO haya muerto, sino que las reglas del juego han cambiado y hay que entender dónde sigue habiendo tráfico y valor.
          </p>

          <h2 className="text-2xl font-bold text-primary-600">Qué ha cambiado en Google con la integración de Gemini</h2>
          <p>Con Gemini integrado, Google ha pasado de mostrar diez enlaces azules a construir respuestas sintetizadas a partir de múltiples fuentes. Los AI Overviews aparecen ya en más del 58% de las búsquedas y ocupan el espacio más visible de la página, empujando los resultados orgánicos hacia abajo.</p>
          <p>Para el usuario esto suele ser cómodo: obtiene una respuesta inmediata sin navegar. Para las webs, el reto es doble: ya no basta con posicionar, ahora también hay que ser la fuente que la IA elige para construir su respuesta. Es un cambio de mentalidad que conecta el SEO clásico con el <Link href="/geo-posicionamiento-ia/" className="text-accent-500 hover:underline">posicionamiento en IA</Link>.</p>

          <h2 className="text-2xl font-bold text-primary-600">Qué tipos de búsquedas siguen generando tráfico orgánico</h2>
          <p>No todas las búsquedas se ven afectadas por igual. Las consultas informacionales puras (definiciones, datos concretos, respuestas cerradas) son las más absorbidas por los AI Overviews, porque la IA puede resolverlas sin que el usuario necesite profundizar.</p>
          <p>En cambio, las búsquedas con intención comercial (comparar servicios, elegir proveedor, decidir una compra) siguen generando clics con fuerza, porque el usuario necesita contrastar, ver ejemplos y ganar confianza antes de decidir. El SEO local también resiste bien: el pack de mapas mantiene su prominencia para negocios con presencia física. Ahí es donde conviene concentrar el esfuerzo.</p>

          <OfertaVeranoBanner />
          <BlogBanner variant="seo" />

          <h2 className="text-2xl font-bold text-primary-600">Cómo optimizar para aparecer dentro de un AI Overview</h2>
          <p>Aparecer como fuente citada dentro de un AI Overview se ha convertido en un objetivo de SEO en sí mismo. Google elige esas fuentes en función de la autoridad de la página y de lo fácil que sea extraer una respuesta clara de ella. Un contenido bien estructurado, con encabezados que responden preguntas y párrafos directos, tiene ventaja.</p>
          <p>El schema markup correcto (FAQPage, Article, Organization) ayuda a que Gemini interprete y confíe en tu contenido, igual que un SEO técnico impecable. Si además entiendes las <Link href="/geo-vs-seo-diferencias/" className="text-accent-500 hover:underline">diferencias entre GEO y SEO</Link>, podrás preparar cada página para ambos escenarios a la vez.</p>

          <h2 className="text-2xl font-bold text-primary-600">La estrategia de contenido que funciona en 2026</h2>
          <p>El contenido que gana en 2026 combina profundidad con claridad. Responder con precisión a una pregunta concreta, aportar experiencia real y estructurar la información para que sea fácil de citar es lo que separa a las webs que siguen captando tráfico de las que se quedan sin visitas.</p>
          <p>Esto implica ajustar el mix de keywords hacia consultas con intención comercial, crear contenido que la IA no pueda resumir sin perder valor (comparativas, casos reales, criterios de decisión) y actualizar lo existente para que siga siendo la mejor respuesta disponible. La coherencia de estos cambios se entiende mejor a la luz de las <Link href="/actualizaciones-algoritmo-google-2026-que-ha-cambiado-y-como-afecta-tu-web/" className="text-accent-500 hover:underline">actualizaciones del algoritmo de Google en 2026</Link>.</p>

          <h2 className="text-2xl font-bold text-primary-600">SEO + GEO: la combinación que da resultados</h2>
          <p>La conclusión práctica es que SEO y GEO ya no son estrategias separadas, sino dos caras del mismo trabajo. Un SEO técnico sólido y contenido de calidad son la base tanto para posicionar en Google como para ser citado por la IA. Invertir solo en uno de los dos es dejar oportunidades sobre la mesa.</p>
          <p>Para una pyme, la ventaja es que no necesita duplicar el presupuesto: el mismo contenido bien hecho trabaja para ambos frentes. Lo importante es planificarlo con criterio desde el principio, en lugar de reaccionar cuando el tráfico ya ha caído.</p>

          <div className="bg-primary-600 text-white rounded-2xl p-8 my-2 text-center">
            <h2 className="text-2xl font-bold mb-3">Prepara tu web para el buscador que responde con IA</h2>
            <p className="text-primary-200 mb-6">
              En Mkt Web 360 combinamos SEO y GEO para que tu negocio siga captando tráfico y clientes aunque Google responda con Gemini.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contacto/" className="bg-accent-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-accent-600 transition-colors">
                Hablar con un especialista
              </Link>
              <Link href="/seo-posicionamiento-web-organico/" className="border-2 border-white text-white px-6 py-3 rounded-full font-semibold hover:bg-white/10 transition-colors">
                Ver servicio de SEO
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
      <RelatedArticles currentSlug="seo-en-la-era-de-la-ia-como-posicionarse-cuando-google-usa-gemini" />
    </>
  );
}
