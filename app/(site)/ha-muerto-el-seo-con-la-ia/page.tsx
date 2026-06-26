import Image from "next/image";
import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { RelatedArticles } from "@/components/RelatedArticles";
import { BlogBanner } from "@/components/BlogBanner";

export const metadata: Metadata = {
  title: "¿Ha muerto el SEO con la IA? La analogía del Ferrari y Fernando Alonso",
  description:
    "Muchos creen que la IA ha matado el SEO. Analizamos por qué eso no es cierto y por qué IA + técnico cualificado es la fórmula ganadora.",
  alternates: { canonical: "https://www.mktweb360.com/ha-muerto-el-seo-con-la-ia/" },
  openGraph: {
    title: "¿Ha muerto el SEO con la IA? La analogía del Ferrari y Fernando Alonso | Mkt Web 360",
    description: "Muchos creen que la IA ha matado el SEO. Analizamos por qué eso no es cierto y por qué IA + técnico cualificado es la fórmula ganadora.",
    url: "https://www.mktweb360.com/ha-muerto-el-seo-con-la-ia/",
    type: "article",
    images: [{ url: "/og-ha-muerto-el-seo-con-la-ia.jpg", width: 1200, height: 630 }],
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "¿Ha muerto el SEO con la IA? La analogía del Ferrari y Fernando Alonso",
  description: "Muchos creen que la IA ha matado el SEO. Analizamos por qué eso no es cierto y por qué IA + técnico cualificado es la fórmula ganadora.",
  author: { "@type": "Organization", name: "Mkt Web 360 SLU" },
  publisher: { "@type": "Organization", name: "Mkt Web 360 SLU", url: "https://www.mktweb360.com" },
  datePublished: "2026-06-12",
  url: "https://www.mktweb360.com/ha-muerto-el-seo-con-la-ia/",
  mainEntityOfPage: "https://www.mktweb360.com/ha-muerto-el-seo-con-la-ia/",
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Inicio", item: "https://www.mktweb360.com/" },
    { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.mktweb360.com/blog/" },
    { "@type": "ListItem", position: 3, name: "¿Ha muerto el SEO con la IA?", item: "https://www.mktweb360.com/ha-muerto-el-seo-con-la-ia/" },
  ],
};

const FAQS = [
  {
    q: "¿La IA puede sustituir a un profesional del SEO?",
    a: "No. Puede multiplicar su capacidad, pero no sustituir el criterio, la experiencia y la comprensión del negocio que tiene un profesional cualificado.",
  },
  {
    q: "¿Tiene sentido seguir invirtiendo en SEO en 2026?",
    a: "Sí. La búsqueda orgánica sigue siendo una de las fuentes de tráfico más rentables. La IA cambia cómo se trabaja el SEO, pero no elimina su valor.",
  },
  {
    q: "¿Qué ventaja tiene un experto SEO que usa IA frente a uno que no la usa?",
    a: "Velocidad, escala y capacidad de análisis. Puede hacer más en menos tiempo, detectar patrones más rápido y ejecutar mejor — siempre que el criterio estratégico esté bien.",
  },
  {
    q: "¿Puede una empresa gestionar su SEO internamente con herramientas de IA?",
    a: "Puede hacer cosas básicas. Pero para competir en mercados con algo de dificultad, la combinación de experiencia real y herramientas avanzadas marca una diferencia muy significativa.",
  },
  {
    q: "¿Cómo afecta la IA generativa a las búsquedas de Google?",
    a: "Google está incorporando respuestas generadas por IA en sus resultados. Eso cambia cómo se consume la información, pero refuerza la importancia de tener contenido de autoridad, bien estructurado y orientado a intención real.",
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

export default function HaMuertoElSeoPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <article className="max-w-3xl mx-auto px-4 py-12">
        <Breadcrumbs crumbs={[{ label: "Inicio", href: "/" }, { label: "Blog", href: "/blog/" }, { label: "¿Ha muerto el SEO con la IA?" }]} />

        <header className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="bg-primary-100 text-primary-700 text-xs font-medium px-2.5 py-0.5 rounded-full">SEO</span>
            <time className="text-sm text-gray-400" dateTime="2026-06-12">12 de junio de 2026</time>
          </div>
          <h1 className="text-4xl font-bold text-primary-600 mb-4 leading-tight">
            ¿Ha muerto el SEO con la IA? La analogía del Ferrari y Fernando Alonso
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Desde que la inteligencia artificial irrumpió en el mundo digital, la pregunta se repite constantemente: ¿tiene sentido seguir invirtiendo en SEO si la IA ya lo hace todo? La respuesta es sí, y mucho — pero conviene entender por qué.
          </p>
          <Image
            src="/og-ha-muerto-el-seo-con-la-ia.jpg"
            alt="¿Ha muerto el SEO con la IA? La analogía del Ferrari y Fernando Alonso"
            width={1200}
            height={630}
            className="w-full rounded-2xl mt-6"
            priority
          />
        </header>

        <div className="text-gray-700 space-y-6 leading-relaxed">
          <p>
            No es la primera vez que se declara la muerte del SEO. Pasó con las actualizaciones de Panda y Penguin, con la llegada del móvil, con los cambios de algoritmo de los últimos años. Y cada vez, lo que murió no fue el SEO, sino una forma determinada de hacerlo mal. Lo que viene ahora con la IA no es diferente.
          </p>

          <h2 className="text-2xl font-bold text-primary-600">La pregunta que todo el mundo se hace</h2>
          <p>Desde que la inteligencia artificial irrumpió con fuerza en el mundo digital, una pregunta se repite constantemente en foros, grupos de empresarios y conversaciones de negocio: ¿tiene sentido seguir invirtiendo en SEO si la IA ya lo hace todo? La respuesta corta es sí, y mucho. La respuesta larga requiere entender qué cambia realmente y qué sigue dependiendo de criterio humano cualificado.</p>

          <h2 className="text-2xl font-bold text-primary-600">La analogía del Ferrari</h2>
          <p>Imagina que alguien te regala un Ferrari de Fórmula 1. El mismo coche que conduce Fernando Alonso. ¿Serías capaz de hacer sus tiempos en pista? La respuesta es no. Y no porque el coche sea malo — es el mejor del mundo. Sino porque entre el coche y el resultado está el piloto: años de formación, miles de horas de práctica, criterio bajo presión, conocimiento técnico y capacidad para leer cada situación en tiempo real.</p>
          <p>La IA es ese Ferrari. Una herramienta extraordinaria, sin duda. Pero en manos de alguien sin formación ni experiencia, el resultado será muy diferente al de un profesional que sabe exactamente cómo sacarle partido.</p>

          <div className="bg-primary-50 rounded-xl p-6 border border-primary-100">
            <p className="font-semibold text-primary-700 mb-2">¿Quieres SEO que combine estrategia real con las mejores herramientas?</p>
            <p className="text-gray-600 text-sm mb-4">En Mkt Web 360 trabajamos con criterio técnico y las herramientas más avanzadas. No vendemos automatizaciones vacías — vendemos resultados con estrategia detrás.</p>
            <Link href="/seo-posicionamiento-web-organico/" className="inline-block bg-accent-500 text-white px-6 py-2.5 rounded-full font-semibold text-sm hover:bg-accent-600 transition-colors">
              Ver servicio SEO
            </Link>
          </div>

          <h2 className="text-2xl font-bold text-primary-600">IA + técnico cualificado = excelencia</h2>
          <p>Un profesional del SEO que trabaja con IA puede analizar más datos, detectar patrones antes, generar contenido de apoyo más rápido y escalar tareas que antes llevaban semanas. La IA multiplica su capacidad. Pero sigue siendo el profesional quien decide la estrategia, interpreta los datos con contexto real de negocio, identifica oportunidades que un modelo no puede ver y corrige los errores que cualquier herramienta comete cuando no entiende el negocio en profundidad.</p>

          <BlogBanner variant="geo" />

          <h2 className="text-2xl font-bold text-primary-600">IA + persona no cualificada = resultado aceptable, no competitivo</h2>
          <p>Una persona sin experiencia en SEO que usa herramientas de IA puede conseguir resultados razonables. Puede generar contenido, hacer algunas optimizaciones básicas y publicar páginas. Pero no tendrá la capacidad de competir con quien combina conocimiento técnico, experiencia acumulada y las mismas herramientas. Es como la diferencia entre trabajar el campo con un tractor sin saber agricultura versus hacerlo con décadas de conocimiento agrícola y el mismo tractor. La herramienta es la misma. El resultado, no.</p>

          <h2 className="text-2xl font-bold text-primary-600">Qué cambia realmente con la IA en el SEO</h2>
          <p>Lo que cambia es la velocidad de ejecución, la escala de análisis y la capacidad de automatizar tareas repetitivas. Lo que no cambia es la necesidad de estrategia, criterio, experiencia y comprensión del negocio. Google sigue premiando contenido útil, relevante y bien estructurado. La IA ayuda a producirlo más rápido, pero no garantiza que sea el correcto ni que esté bien orientado. Eso sigue dependiendo de quien dirige el proceso.</p>

          <h2 className="text-2xl font-bold text-primary-600">El SEO no ha muerto — ha evolucionado</h2>
          <p>El SEO lleva décadas evolucionando. Cuando aparecieron los buscadores, evolucionó. Cuando llegó el móvil, evolucionó. Cuando Google empezó a penalizar el contenido de baja calidad, evolucionó. La IA es un cambio más en esa evolución — probablemente el más importante hasta ahora — pero no el fin del SEO. Es el inicio de una nueva fase en la que la diferencia entre hacerlo bien y hacerlo mal se ampliará, no se reducirá.</p>

          <p className="text-sm text-gray-500">
            Ver también: <Link href="/ia-aplicada-a-marketing-valor-real-o-humo/" className="text-accent-500 hover:underline">IA aplicada a marketing: dónde aporta valor real</Link> · <Link href="/seo-o-google-ads-que-conviene-mas/" className="text-accent-500 hover:underline">SEO o Google Ads: qué conviene más</Link>
          </p>

          <div className="bg-primary-600 text-white rounded-2xl p-8 my-2 text-center">
            <h2 className="text-2xl font-bold mb-3">SEO con criterio, no con humo</h2>
            <p className="text-primary-200 mb-6">
              Si quieres saber cómo podemos mejorar tu visibilidad orgánica combinando experiencia real e inteligencia artificial, podemos analizarlo juntos.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/auditoria-digital/" className="bg-accent-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-accent-600 transition-colors">
                Solicitar diagnóstico gratuito
              </Link>
              <Link href="/casos/" className="border-2 border-white text-white px-6 py-3 rounded-full font-semibold hover:bg-white/10 transition-colors">
                Ver casos de éxito
              </Link>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-primary-600">Preguntas frecuentes sobre IA y SEO</h2>
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
            Servicio relacionado: <Link href="/seo-posicionamiento-web-organico/" className="text-accent-500 hover:underline">SEO Posicionamiento Web</Link> · <Link href="/auditoria-digital/" className="text-accent-500 hover:underline">Auditoría Digital</Link>
          </p>
        </div>

        <nav className="mt-12 pt-8 border-t border-gray-200">
          <Link href="/blog/" className="text-accent-500 hover:text-accent-600 font-medium text-sm">← Volver al blog</Link>
        </nav>
      </article>
      <RelatedArticles currentSlug="ha-muerto-el-seo-con-la-ia" />
    </>
  );
}
