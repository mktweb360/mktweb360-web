import Image from "next/image";
import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { RelatedArticles } from "@/components/RelatedArticles";
import { BlogBanner } from "@/components/BlogBanner";
import { alternatesFor } from "@/lib/i18n/routes";

const SLUG = "como-escribir-contenido-que-no-suene-a-ia";
const URL_CANONICAL = `https://www.mktweb360.com/${SLUG}/`;

export const metadata: Metadata = {
  title: "Cómo escribir contenido que no suene a IA: técnicas para humanizar tu copy",
  description:
    "El contenido que suena a IA no convierte y puede penalizar en Google. Técnicas concretas para crear textos que suenen humanos, auténticos y útiles — aunque uses herramientas de IA.",
  alternates: alternatesFor(`/${SLUG}/`) ?? { canonical: URL_CANONICAL },
  openGraph: {
    title: "Cómo escribir contenido que no suene a IA | Mkt Web 360",
    description:
      "Técnicas para crear contenido humano y auténtico aunque uses herramientas de IA. Para marketing, blog y web.",
    url: URL_CANONICAL,
    type: "article",
    images: [{ url: `/og-${SLUG}.jpg`, width: 1200, height: 630 }],
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "Cómo escribir contenido que no suene a IA: técnicas para humanizar tu copy",
  description: "Técnicas concretas para crear textos que suenen humanos y auténticos aunque uses herramientas de IA.",
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
    { "@type": "ListItem", position: 3, name: "Contenido que no suene a IA", item: URL_CANONICAL },
  ],
};

const FAQS = [
  {
    q: "¿Puede Google detectar si un texto lo escribió una IA?",
    a: "Google ha declarado que no penaliza el contenido generado con IA por el hecho de serlo, sino por ser de baja calidad o carecer de valor real para el usuario. Sin embargo, los detectores de IA existen y el contenido genérico y predecible sí correlaciona con menor rendimiento en buscadores. La clave es la calidad, no el origen.",
  },
  {
    q: "¿Es malo usar IA para escribir textos de marketing?",
    a: "No es malo — es una herramienta. El problema surge cuando se usa sin edición humana, sin perspectiva propia y sin adaptar el output a la voz real de la marca. La IA puede acelerar la escritura dramáticamente, pero el criterio editorial, la opinión y la autenticidad siguen siendo humanos.",
  },
  {
    q: "¿Qué señales indican que un texto suena a IA?",
    a: "Frases como 'en el mundo actual', 'es fundamental tener en cuenta', 'en conclusión podemos decir', listas de puntos sin jerarquía real, ausencia de ejemplos concretos, tono uniformemente neutro, y estructuras que parecen seguir siempre el mismo patrón. El texto IA tiende a ser correcto pero genérico.",
  },
  {
    q: "¿Qué herramientas recomendáis para humanizar contenido de IA?",
    a: "El proceso humano es la mejor herramienta: leer en voz alta para detectar lo que suena artificial, añadir anécdotas o datos propios, usar el estilo de voz de tu marca, y cortar todo lo que sobra. Si quieres apoyo de herramientas, Hemingway Editor ayuda con la legibilidad y Grammarly con el tono — pero ninguna sustituye el criterio editorial.",
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

export default function ContenidoHumanoPage() {
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
            { label: "Contenido que no suene a IA" },
          ]}
        />

        <header className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="bg-primary-100 text-primary-700 text-xs font-medium px-2.5 py-0.5 rounded-full">
              Marketing de Contenidos
            </span>
            <time className="text-sm text-gray-400" dateTime="2026-08-04">
              4 de agosto de 2026
            </time>
          </div>
          <h1 className="text-4xl font-bold text-primary-600 mb-4 leading-tight">
            Cómo escribir contenido que no suene a IA: técnicas para humanizar tu copy
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Usar IA para escribir no es el problema. El problema es publicar el output sin editar. El contenido que "suena a IA" se reconoce a kilómetros de distancia — y ni Google ni tus clientes lo reciben igual que un texto con criterio, voz y perspectiva real.
          </p>
          <Image
            src={`/og-${SLUG}.jpg`}
            alt="Cómo escribir contenido que no suene a IA"
            width={1200}
            height={630}
            className="w-full rounded-2xl mt-6"
            priority
          />
        </header>

        <div className="text-gray-700 space-y-6 leading-relaxed">
          <p>
            El contenido generado por IA sin edición tiene patrones reconocibles: frases de apertura grandilocuentes, estructuras predecibles, ausencia de opinión real y un tono uniformemente neutro que nunca compromete nada. Es correcto. Es aburrido. Y no convierte.
          </p>

          <h2 className="text-2xl font-bold text-primary-600">Por qué el contenido IA sin editar no funciona</h2>
          <p>
            El contenido que suena a IA tiene dos problemas fundamentales. El primero es de percepción: los lectores — especialmente los decisores de compra B2B — detectan la falta de perspectiva real y lo asocian a falta de expertise. Si una agencia publica artículos genéricos que podrían ser de cualquier agencia del mundo, comunica exactamente eso: que no tiene nada propio que decir.
          </p>
          <p>
            El segundo problema es de rendimiento SEO. Google no penaliza la IA, pero sí la baja calidad. El contenido que no añade nada nuevo, no tiene datos propios, no toma posición y no responde a intenciones de búsqueda específicas, es exactamente el tipo de contenido que las actualizaciones del algoritmo filtran progresivamente.
          </p>

          <div className="bg-primary-50 rounded-xl p-6 border border-primary-100">
            <p className="font-semibold text-primary-700 mb-2">¿Tu contenido tiene voz de marca o suena genérico?</p>
            <p className="text-gray-600 text-sm mb-4">
              En Mkt Web 360 creamos contenido editorial que combina rigor SEO con perspectiva real de negocio. Nada genérico, nada de relleno.
            </p>
            <Link
              href="/marketing-de-contenidos/"
              className="inline-block bg-accent-500 text-white px-6 py-2.5 rounded-full font-semibold text-sm hover:bg-accent-600 transition-colors"
            >
              Ver servicio de contenidos
            </Link>
          </div>

          <h2 className="text-2xl font-bold text-primary-600">Los patrones que delatan el contenido de IA</h2>
          <p>
            Identificar el contenido IA no editado es fácil una vez sabes qué buscar. Frases de apertura como "en el mundo actual" o "en la era digital en la que vivimos". Cierres como "en conclusión, podemos afirmar que". Transiciones como "es importante destacar que" o "cabe mencionar que". Listas de cinco puntos donde todos tienen el mismo peso y ninguno aporta perspectiva.
          </p>
          <p>
            El otro patrón es la ausencia de fricción: el texto nunca dice que algo es difícil, que algo falla o que hay excepciones. Todo es equilibrado, todo tiene matices positivos y negativos, todo es razonable. La vida real no funciona así, y los lectores lo notan.
          </p>

          <h2 className="text-2xl font-bold text-primary-600">Técnicas concretas para humanizar el output</h2>
          <p>
            La primera técnica es la más simple: añade una opinión. No un "esto depende del caso" — una posición real. "Creemos que la mayoría de las PYMEs no debería estar en TikTok" es más útil y más memorable que "TikTok puede ser una buena opción dependiendo de tu audiencia y sector". La opinión diferencia, construye autoridad y es recordable.
          </p>
          <p>
            La segunda técnica es usar datos propios o datos reales con contexto. "Según nuestra experiencia con clientes de servicios locales en España, el tiempo medio hasta el primer resultado orgánico significativo es de 4-6 meses" es infinitamente más valioso que "el SEO tarda entre 3 y 12 meses en dar resultados" — que es lo que cualquier IA generará.
          </p>
          <p>
            La tercera técnica es introducir estructura no estándar. En lugar del clásico "introducción - 5 puntos - conclusión", empieza con un problema concreto, desarrolla el contraste entre lo que se cree y lo que pasa en realidad, y termina con una recomendación accionable. La estructura diferencia tanto como el contenido.
          </p>

          <BlogBanner variant="geo" />

          <h2 className="text-2xl font-bold text-primary-600">El rol del editor humano en el proceso de IA</h2>
          <p>
            La forma correcta de usar IA en la creación de contenido es usarla como generador de primer borrador, no como publicador autónomo. El editor humano añade: la perspectiva específica del negocio, los datos propios o verificados, la voz de marca, los ejemplos reales y el criterio sobre qué es relevante para la audiencia específica.
          </p>
          <p>
            Este proceso — IA genera, humano edita con criterio — puede ser 3-4 veces más rápido que escribir desde cero, y producir contenido mejor que escribir sin apoyo de IA. El error es saltarse la edición porque "ya está bastante bien".
          </p>

          <div className="bg-primary-600 text-white rounded-2xl p-8 my-2 text-center">
            <h2 className="text-2xl font-bold mb-3">Contenido que convierte, no que rellena</h2>
            <p className="text-primary-200 mb-6">
              Si quieres una estrategia de contenidos que combine SEO, perspectiva de negocio real y voz de marca auténtica, podemos diseñarla juntos.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/marketing-de-contenidos/"
                className="bg-accent-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-accent-600 transition-colors"
              >
                Ver servicio de contenidos
              </Link>
              <Link
                href="/auditoria-digital/"
                className="border-2 border-white text-white px-6 py-3 rounded-full font-semibold hover:bg-white/10 transition-colors"
              >
                Solicitar diagnóstico gratuito
              </Link>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-primary-600">Preguntas frecuentes sobre contenido e IA</h2>
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
            <Link href="/marketing-de-contenidos/" className="text-accent-500 hover:underline">
              Marketing de contenidos
            </Link>{" "}
            ·{" "}
            <Link href="/ia-aplicada-al-marketing/" className="text-accent-500 hover:underline">
              IA aplicada al marketing
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
