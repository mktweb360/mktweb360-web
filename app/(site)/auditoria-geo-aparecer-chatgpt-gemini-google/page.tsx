import Image from "next/image";
import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { RelatedArticles } from "@/components/RelatedArticles";
import { BlogBanner } from "@/components/BlogBanner";

export const metadata: Metadata = {
  title: { absolute: "Auditoría GEO: cómo saber si apareces en ChatGPT y Gemini" },
  description:
    "Auditoría GEO paso a paso: cómo comprobar si tu empresa aparece en ChatGPT, Perplexity, Gemini y la IA de Google, qué medir y qué hacer si no te mencionan.",
  alternates: { canonical: "https://www.mktweb360.com/auditoria-geo-aparecer-chatgpt-gemini-google/" },
  openGraph: {
    title: "Auditoría GEO: cómo saber si apareces en ChatGPT y Gemini | Mkt Web 360",
    description:
      "Auditoría GEO paso a paso: cómo comprobar si tu empresa aparece en ChatGPT, Perplexity, Gemini y la IA de Google, qué medir y qué hacer si no te mencionan.",
    url: "https://www.mktweb360.com/auditoria-geo-aparecer-chatgpt-gemini-google/",
    type: "article",
    images: [{ url: "/og-auditoria-geo-aparecer-chatgpt-gemini-google.jpg", width: 1200, height: 630 }],
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "Cómo saber si tu empresa aparece en ChatGPT, Perplexity y la IA de Google",
  description:
    "Auditoría GEO paso a paso: cómo comprobar si tu empresa aparece en ChatGPT, Perplexity, Gemini y la IA de Google, qué medir y qué hacer si no te mencionan.",
  author: { "@type": "Organization", name: "Mkt Web 360 SLU" },
  publisher: { "@type": "Organization", name: "Mkt Web 360 SLU", url: "https://www.mktweb360.com" },
  datePublished: "2026-09-25",
  dateModified: "2026-09-25",
  image: "https://www.mktweb360.com/og-auditoria-geo-aparecer-chatgpt-gemini-google.jpg",
  url: "https://www.mktweb360.com/auditoria-geo-aparecer-chatgpt-gemini-google/",
  mainEntityOfPage: "https://www.mktweb360.com/auditoria-geo-aparecer-chatgpt-gemini-google/",
};

const FAQS = [
  {
    q: "¿Puedo pagar para aparecer en ChatGPT?",
    a: "No existe una forma de pagar para que ChatGPT recomiende tu empresa en sus respuestas orgánicas. Lo que sí puedes hacer es que tu web sea rastreable, que tu información sea coherente en toda la red y que publiques contenido claro y verificable que las IA puedan citar.",
  },
  {
    q: "¿Por qué la IA da datos erróneos de mi empresa?",
    a: "Normalmente porque encuentra información contradictoria o desactualizada: direcciones antiguas, directorios sin revisar, servicios que ya no ofreces. Unificar tus datos en la web, el Perfil de Empresa y los directorios principales es el primer paso para corregirlo.",
  },
  {
    q: "¿Debo bloquear los rastreadores de IA?",
    a: "Depende de tu objetivo. Si quieres aparecer en respuestas de búsqueda con IA, no bloquees sus rastreadores de búsqueda, como OAI-SearchBot o PerplexityBot. Algunas empresas bloquean solo los rastreadores de entrenamiento y permiten los de búsqueda. Revisa tu robots.txt con criterio.",
  },
  {
    q: "¿Cada cuánto hay que repetir la auditoría GEO?",
    a: "Cada mes si estás trabajando activamente en tu visibilidad, o cada trimestre como seguimiento. Usa siempre las mismas consultas y el mismo sistema de puntuación para comparar. Una sola medición no es representativa porque las respuestas cambian.",
  },
  {
    q: "¿El SEO sigue sirviendo para aparecer en la IA?",
    a: "Sí. Google indica que para aparecer en sus funciones de IA una página debe estar indexada y ser apta para la Búsqueda, y otras IA también buscan en la web. Un buen SEO técnico y de contenido es la base del GEO, no su sustituto.",
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

const consultas = [
  ["Marca", "¿Qué es [tu empresa] y qué servicios ofrece?"],
  ["Servicio", "¿Qué empresas ofrecen [tu servicio] en España?"],
  ["Problema", "Necesito [resolver problema], ¿qué opciones tengo?"],
  ["Local", "¿Qué empresas de [servicio] hay en [ciudad o zona]?"],
  ["Comparación", "¿Qué proveedor de [servicio] es mejor para una pyme?"],
];

const criterios = [
  ["Mención", "No apareces", "Apareces de pasada", "Apareces destacado"],
  ["Exactitud", "Datos erróneos", "Parcialmente correctos", "Correctos y actuales"],
  ["Recomendación", "No te recomienda", "Te incluye en una lista", "Te recomienda para el caso"],
  ["Fuente", "No cita nada tuyo", "Cita terceros sobre ti", "Cita tu web"],
  ["Competencia", "Solo aparecen otros", "Apareces con otros", "Apareces por delante"],
];

const plan = [
  ["Días 1-15", "Matriz de consultas, primera medición y corrección de datos erróneos"],
  ["Días 16-45", "Revisión técnica, páginas de empresa y servicios, datos estructurados"],
  ["Días 46-75", "Perfil de Empresa, directorios y menciones legítimas en terceros"],
  ["Días 76-90", "Repetir las mismas consultas, comparar y decidir los siguientes pasos"],
];

const fuentes = [
  { texto: "Google Search Central: AI features and your website.", url: "https://developers.google.com/search/docs/appearance/ai-features" },
  {
    texto: "Google Search Central Blog: Introducing Search Generative AI performance reports in Search Console (junio 2026).",
    url: "https://developers.google.com/search/blog/2026/06/gen-ai-performance-reports",
  },
  { texto: "OpenAI: Publishers and developers FAQ.", url: "https://help.openai.com/en/articles/12627856-publishers-and-developers-faq" },
  { texto: "Perplexity: Perplexity crawlers.", url: "https://docs.perplexity.ai/docs/resources/perplexity-crawlers" },
  {
    texto: "Google Search Central: Datos estructurados de LocalBusiness.",
    url: "https://developers.google.com/search/docs/appearance/structured-data/local-business",
  },
  { texto: "Google Search Central: Introducción a robots.txt.", url: "https://developers.google.com/search/docs/crawling-indexing/robots/intro" },
];

export default function AuditoriaGeoPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <article className="max-w-3xl mx-auto px-4 py-12">
        <Breadcrumbs crumbs={[{ label: "Inicio", href: "/" }, { label: "Blog", href: "/blog/" }, { label: "Auditoría GEO: ChatGPT, Perplexity y la IA de Google" }]} />

        <header className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="bg-primary-100 text-primary-700 text-xs font-medium px-2.5 py-0.5 rounded-full">GEO</span>
            <time className="text-sm text-gray-400" dateTime="2026-09-25">25 de septiembre de 2026</time>
          </div>
          <h1 className="text-4xl font-bold text-primary-600 mb-4 leading-tight">
            Cómo saber si tu empresa aparece en ChatGPT, Perplexity y la IA de Google
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Método de auditoría GEO que cualquier empresa puede hacer: consultas a probar, cómo puntuar las respuestas, revisión técnica y un plan de 90 días para mejorar tu visibilidad en IA.
          </p>
          <Image
            src="/og-auditoria-geo-aparecer-chatgpt-gemini-google.jpg"
            alt="Auditoría GEO: cómo saber si apareces en ChatGPT y Gemini"
            width={1200}
            height={630}
            className="w-full rounded-2xl mt-6"
            priority
          />
        </header>

        <div className="text-gray-700 space-y-6 leading-relaxed">
          <p>
            Para saber si tu empresa aparece en los motores de IA, tienes que <strong>preguntarles como lo haría un cliente</strong>, registrar si te mencionan y con qué fuentes, y repetirlo en varias plataformas y fechas. No existe una posición 1 estable en ChatGPT o Gemini: las respuestas cambian según la consulta, el modelo, la ubicación, el idioma y si la herramienta está buscando en la web. Por eso una auditoría GEO mide <strong>tendencias</strong>, no una foto única.
          </p>

          <h2 className="text-2xl font-bold text-primary-600">Resumen rápido</h2>
          <ul className="space-y-3">
            {[
              <>Prueba consultas de <strong>marca, servicio, problema, zona y comparación</strong>.</>,
              <>Repite las pruebas en <strong>ChatGPT, Perplexity, Gemini y los resúmenes de IA de Google</strong>.</>,
              <>Registra <strong>mención, exactitud, recomendación, fuentes citadas y enlace</strong>.</>,
              <>Revisa lo técnico: <strong>rastreo, indexación, robots.txt y datos estructurados</strong>.</>,
              <>Mantén <strong>coherentes</strong> tus datos en web, Perfil de Empresa, directorios y redes.</>,
              <>No puedes obligar a una IA a recomendarte, pero sí hacer que te <strong>entienda y te pueda verificar</strong>.</>,
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3 p-4 border border-gray-200 rounded-xl">
                <span className="text-primary-600 font-bold shrink-0 mt-0.5">▸</span>
                <span className="text-gray-600 text-sm">{item}</span>
              </li>
            ))}
          </ul>

          <h2 className="text-2xl font-bold text-primary-600">Paso 1: prepara tu matriz de consultas</h2>
          <p>Escribe entre 15 y 25 preguntas reales, repartidas en cinco tipos:</p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-primary-600 text-white">
                  <th className="px-4 py-3 text-left font-semibold">Tipo</th>
                  <th className="px-4 py-3 text-left font-semibold">Ejemplo</th>
                </tr>
              </thead>
              <tbody>
                {consultas.map(([tipo, ejemplo]) => (
                  <tr key={tipo} className="border-b border-gray-200 even:bg-gray-50">
                    <td className="px-4 py-3 font-medium text-gray-800">{tipo}</td>
                    <td className="px-4 py-3 text-gray-600">{ejemplo}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p>
            Usa el lenguaje de tus clientes, no el tuyo. Si tus clientes dicen arreglar la web y tú dices optimización técnica, pregunta como ellos.
          </p>

          <h2 className="text-2xl font-bold text-primary-600">Paso 2: lanza las consultas en cada plataforma</h2>
          <ul className="space-y-3">
            {[
              <><strong>ChatGPT</strong>: cuando busca en la web, muestra enlaces y fuentes. OpenAI indica que las webs públicas pueden aparecer en sus resultados de búsqueda y que su rastreador para búsqueda es <strong>OAI-SearchBot</strong>.</>,
              <><strong>Perplexity</strong>: siempre cita fuentes. Usa el rastreador <strong>PerplexityBot</strong>, que respeta robots.txt; si lo bloqueas, Perplexity puede no indexar el contenido de tu web.</>,
              <><strong>Gemini</strong>: registra qué dice de ti, si se equivoca y qué fuentes muestra.</>,
              <><strong>Google (resúmenes de IA y modo IA)</strong>: Google indica que para aparecer en sus funciones de IA la página debe estar <strong>indexada y ser apta para mostrarse en la Búsqueda</strong>, sin requisitos técnicos adicionales.</>,
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3 p-4 border border-gray-200 rounded-xl">
                <span className="text-primary-600 font-bold shrink-0 mt-0.5">▸</span>
                <span className="text-gray-600 text-sm">{item}</span>
              </li>
            ))}
          </ul>
          <p>
            Hazlo en sesión nueva o en modo incógnito y anota fecha, plataforma y ubicación. Guarda capturas: las respuestas cambian.
          </p>

          <h2 className="text-2xl font-bold text-primary-600">Paso 3: puntúa cada respuesta</h2>
          <p>Valora cada consulta con 0, 1 o 2 puntos en estos criterios:</p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-primary-600 text-white">
                  <th className="px-4 py-3 text-left font-semibold">Criterio</th>
                  <th className="px-4 py-3 text-left font-semibold">0</th>
                  <th className="px-4 py-3 text-left font-semibold">1</th>
                  <th className="px-4 py-3 text-left font-semibold">2</th>
                </tr>
              </thead>
              <tbody>
                {criterios.map(([criterio, cero, uno, dos]) => (
                  <tr key={criterio} className="border-b border-gray-200 even:bg-gray-50">
                    <td className="px-4 py-3 font-medium text-gray-800">{criterio}</td>
                    <td className="px-4 py-3 text-gray-600">{cero}</td>
                    <td className="px-4 py-3 text-gray-600">{uno}</td>
                    <td className="px-4 py-3 text-gray-600">{dos}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p>
            Suma por plataforma y por tipo de consulta. Repite la auditoría <strong>cada mes o cada trimestre</strong> con las mismas preguntas y compara la evolución.
          </p>

          <BlogBanner variant="geo" />

          <h2 className="text-2xl font-bold text-primary-600">Paso 4: revisión técnica de tu web</h2>
          <p>Si la IA no te encuentra, primero descarta que no pueda leerte:</p>
          <ul className="space-y-3">
            {[
              <>Las páginas importantes <strong>no tienen noindex</strong> ni están bloqueadas en robots.txt.</>,
              <>No bloqueas los rastreadores de búsqueda de IA que te interesan (OAI-SearchBot, PerplexityBot, Googlebot).</>,
              <>Las páginas clave están en el <strong>sitemap</strong> y reciben <strong>enlaces internos</strong>.</>,
              <>El contenido es accesible <strong>sin iniciar sesión</strong> y no depende solo de elementos que no se renderizan.</>,
              <>Tienes <strong>datos estructurados</strong> veraces y visibles en la página: Organization o LocalBusiness, servicios, preguntas frecuentes.</>,
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3 p-4 border border-gray-200 rounded-xl">
                <span className="text-primary-600 font-bold shrink-0 mt-0.5">▸</span>
                <span className="text-gray-600 text-sm">{item}</span>
              </li>
            ))}
          </ul>
          <p>
            Google anunció en junio de 2026 <strong>informes de rendimiento de IA generativa en Search Console</strong>. Si ya están disponibles para tu propiedad, úsalos para ver cómo apareces en sus funciones de IA.
          </p>

          <h2 className="text-2xl font-bold text-primary-600">Paso 5: coherencia de tu empresa en toda la red</h2>
          <p>
            Los modelos contrastan fuentes. Si tu web dice una dirección, tu Perfil de Empresa otra y un directorio antiguo una tercera, la IA duda o se equivoca. Unifica:
          </p>
          <ul className="space-y-3">
            {[
              "Nombre comercial, teléfono, dirección y horario.",
              "Categoría y lista de servicios.",
              "Logo, descripción y enlaces a redes.",
              "Perfiles en directorios fiables del sector.",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3 p-4 border border-gray-200 rounded-xl">
                <span className="text-primary-600 font-bold shrink-0 mt-0.5">▸</span>
                <span className="text-gray-600 text-sm">{item}</span>
              </li>
            ))}
          </ul>
          <p>
            Revisa también qué dicen <strong>terceros</strong> de ti: asociaciones, medios, partners, casos publicados. Las menciones reales en sitios fiables pesan. <strong>No compres artículos ni enlaces</strong> para manipular respuestas: además de arriesgado, suele detectarse.
          </p>

          <h2 className="text-2xl font-bold text-primary-600">Paso 6: contenido que la IA pueda citar</h2>
          <p>
            Las páginas que más se citan responden <strong>de forma directa</strong> a una pregunta concreta, con datos verificables y estructura clara. Aplica:
          </p>
          <ul className="space-y-3">
            {[
              "Una respuesta de 2-3 frases al principio de cada página.",
              "Encabezados que sean preguntas reales.",
              "Tablas, pasos y definiciones concretas.",
              "Autor, fecha y fuentes visibles.",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3 p-4 border border-gray-200 rounded-xl">
                <span className="text-primary-600 font-bold shrink-0 mt-0.5">▸</span>
                <span className="text-gray-600 text-sm">{item}</span>
              </li>
            ))}
          </ul>
          <p>
            Lo desarrollamos en detalle en la guía sobre <Link href="/como-optimizar-tu-contenido-para-que-la-ia-te-cite-guia-geo-2026/" className="text-accent-500 hover:underline">cómo optimizar tu contenido para que la IA te cite</Link>.
          </p>

          <h2 className="text-2xl font-bold text-primary-600">Plan de 90 días</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-primary-600 text-white">
                  <th className="px-4 py-3 text-left font-semibold">Periodo</th>
                  <th className="px-4 py-3 text-left font-semibold">Qué hacer</th>
                </tr>
              </thead>
              <tbody>
                {plan.map(([periodo, que]) => (
                  <tr key={periodo} className="border-b border-gray-200 even:bg-gray-50">
                    <td className="px-4 py-3 font-medium text-gray-800">{periodo}</td>
                    <td className="px-4 py-3 text-gray-600">{que}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p>
            Si quieres entender la base antes de empezar, repasa <Link href="/que-es-geo-generative-engine-optimization/" className="text-accent-500 hover:underline">qué es el GEO</Link>. Si prefieres que lo hagamos por ti, este es nuestro servicio de <Link href="/geo-posicionamiento-ia/" className="text-accent-500 hover:underline">posicionamiento en buscadores de IA</Link>.
          </p>

          <div className="bg-primary-50 rounded-xl p-6 border border-primary-100">
            <p className="font-semibold text-primary-700 mb-2">¿Quieres saber qué dice la IA de tu empresa hoy?</p>
            <p className="text-gray-600 text-sm mb-4">En Mkt Web 360 hacemos la auditoría GEO completa: matriz de consultas, medición en las cuatro plataformas, revisión técnica y plan de trabajo priorizado.</p>
            <Link href="/geo-posicionamiento-ia/" className="inline-block bg-accent-500 text-white px-6 py-2.5 rounded-full font-semibold text-sm hover:bg-accent-600 transition-colors">
              Ver servicio GEO
            </Link>
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

          <h2 className="text-2xl font-bold text-primary-600">Fuentes</h2>
          <ol className="space-y-2 list-decimal list-inside text-sm">
            {fuentes.map((f) => (
              <li key={f.url} className="text-gray-600">
                {f.texto}{" "}
                <a href={f.url} target="_blank" rel="noopener noreferrer" className="text-accent-500 hover:underline break-all">
                  {f.url}
                </a>
              </li>
            ))}
          </ol>

          <p className="text-sm text-gray-500 pt-4">
            Servicios relacionados: <Link href="/geo-posicionamiento-ia/" className="text-accent-500 hover:underline">Posicionamiento en IA (GEO)</Link> · <Link href="/seo-posicionamiento-web-organico/" className="text-accent-500 hover:underline">SEO Posicionamiento Web</Link>
          </p>
        </div>

        <nav className="mt-12 pt-8 border-t border-gray-200">
          <Link href="/blog/" className="text-accent-500 hover:text-accent-600 font-medium text-sm">← Volver al blog</Link>
        </nav>
      </article>
      <RelatedArticles currentSlug="auditoria-geo-aparecer-chatgpt-gemini-google" />
    </>
  );
}
