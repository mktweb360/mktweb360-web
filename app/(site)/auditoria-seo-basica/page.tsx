import Image from "next/image";
import type { Metadata } from "next";
import Link from "next/link";
import type { ReactNode } from "react";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { RelatedArticles } from "@/components/RelatedArticles";
import { BlogBanner } from "@/components/BlogBanner";
import { alternatesFor } from "@/lib/i18n/routes";
import { AuthorByline } from "@/components/AuthorByline";
import { autorSchema } from "@/lib/autor";

// 28/10/2026 — reescrita como checklist de auditoría web de 30 puntos (tema 1 de la propuesta de blog del 27/10,
// opción A aprobada por José: se reescribe esta URL en lugar de crear otra, para no canibalizarla).
// Borrador y fuentes: OneDrive › mktweb360.com › 02-Contenidos › «2026-10-28 BORRADOR — Tema 1 Auditoría web paso a paso».

const URL = "https://www.mktweb360.com/auditoria-seo-basica/";
const TITLE = "Auditoría web paso a paso: checklist de 30 puntos";
const DESCRIPTION =
  "Cómo hacer una auditoría web con herramientas gratuitas: 30 puntos de indexación, velocidad, contenido, ficha de Google y visibilidad en IA, y cómo leerlos.";
const H1 = "Cómo hacer una auditoría web paso a paso: checklist de 30 puntos para pymes";
const DATE_MODIFIED = "2026-10-28";

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: alternatesFor("/auditoria-seo-basica/") ?? { canonical: URL },
  openGraph: {
    title: `${TITLE} | Mkt Web 360`,
    description: DESCRIPTION,
    url: URL,
    type: "article",
    images: [{ url: "https://www.mktweb360.com/og-auditoria-web-checklist.jpg", width: 1200, height: 630 }],
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: H1,
  description: DESCRIPTION,
  author: autorSchema(),
  publisher: { "@type": "Organization", name: "Mkt Web 360 SLU", logo: { "@type": "ImageObject", url: "https://www.mktweb360.com/logo.png" } },
  datePublished: "2026-06-13",
  dateModified: DATE_MODIFIED,
  image: "https://www.mktweb360.com/og-auditoria-web-checklist.jpg",
  url: URL,
  mainEntityOfPage: { "@type": "WebPage", "@id": URL },
};

const FAQS = [
  {
    q: "¿Qué diferencia hay entre una auditoría web y una auditoría SEO?",
    a: "Una auditoría SEO se centra en lo que influye en tu posición en buscadores: indexación, contenido, enlaces y velocidad. La auditoría web suele ser más amplia y añade la medición, la conversión o los aspectos legales. La checklist de esta guía cubre la parte SEO, la ficha de Google y la visibilidad en IA.",
  },
  {
    q: "¿Puedo hacer una auditoría web gratis?",
    a: "Sí. Search Console, PageSpeed Insights y la Prueba de resultados enriquecidos son gratuitas, y Screaming Frog rastrea gratis hasta 500 URL, suficiente para la mayoría de webs de pymes. Lo que cuesta es el tiempo de interpretar los resultados y decidir qué corregir primero.",
  },
  {
    q: "¿Cada cuánto tiempo hay que auditar una web?",
    a: "Una auditoría completa al año, y siempre antes y después de un rediseño o una migración. La indexación y la visibilidad en IA conviene revisarlas cada mes en Search Console.",
  },
  {
    q: "¿Una nota baja en PageSpeed Insights significa que Google me penaliza?",
    a: "No. La nota de 0 a 100 es una puntuación de laboratorio. Lo que Google usa son los Core Web Vitals de visitas reales, con estos umbrales: LCP de 2,5 segundos o menos, INP de 200 milisegundos o menos y CLS de 0,1 o menos. Además, Google indica que una buena experiencia de página no garantiza las primeras posiciones.",
  },
  {
    q: "¿Cómo sé si mi web aparece en las respuestas de IA de Google?",
    a: "En Search Console, en el informe de rendimiento de IA generativa, disponible para todas las webs desde el 31 de agosto de 2026. Muestra las impresiones de tus URLs en AI Overviews, el modo IA y Discover, pero no los clics ni las consultas.",
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

const resumen: ReactNode[] = [
  <>Necesitas cuatro herramientas gratuitas: <strong>Google Search Console</strong>, <strong>PageSpeed Insights</strong>, la <strong>Prueba de resultados enriquecidos</strong> y un rastreador como <strong>Screaming Frog</strong>, que es gratis hasta 500 URL.</>,
  <>Empieza por la <strong>indexación</strong>: si Google no tiene tu página, nada de lo demás importa.</>,
  <>La velocidad se mide con los <strong>Core Web Vitals</strong> y los umbrales que publica Google, no con la nota de 0 a 100.</>,
  <>Si tienes negocio local, la <strong>ficha de Google</strong> forma parte de la auditoría.</>,
  <>Desde el 31 de agosto de 2026, Search Console enseña a todas las webs cuántas veces aparecen en las <strong>funciones de IA de Google</strong>.</>,
  <>«Desconocido» no es lo mismo que «falla»: apunta qué dato te falta y búscalo.</>,
];

const herramientas = [
  ["Google Search Console", "Indexación, búsquedas por las que apareces, errores y visibilidad en IA", "Gratis"],
  ["PageSpeed Insights (pagespeed.web.dev)", "Core Web Vitals con datos de usuarios reales (si tu web tiene tráfico suficiente) y de laboratorio", "Gratis"],
  ["Prueba de resultados enriquecidos (search.google.com/test/rich-results)", "Comprobar que los datos estructurados son válidos", "Gratis"],
  ["Screaming Frog SEO Spider", "Rastrear la web como lo haría un buscador: títulos, enlaces rotos, redirecciones", "Gratis hasta 500 URL por rastreo"],
];

const estados = [
  ["Pasa", "Lo has comprobado y está bien"],
  ["Falla", "Lo has comprobado y hay que corregirlo"],
  ["Desconocido", "No has podido comprobarlo (falta un acceso o un dato). No lo des por bueno ni por malo"],
  ["No aplica", "Ese punto no corresponde a tu web (por ejemplo, la ficha de Google en una tienda sin local)"],
];

type Bloque = { titulo: string; intro: ReactNode; puntos: ReactNode[]; nota?: ReactNode };

const bloques: Bloque[] = [
  {
    titulo: "Bloque 1 · Indexación y rastreo (8 puntos)",
    intro: "Si Google no puede rastrear o indexar una página, esa página no existe para él.",
    puntos: [
      <><strong>La propiedad está en Search Console</strong> y la tienes verificada. Lo mejor es verificarla por archivo HTML o por DNS.</>,
      <><strong>Informe Indexación de páginas:</strong> revisa los motivos de las páginas no indexadas. Mira sobre todo «Rastreada: actualmente sin indexar» y «Descubierta: actualmente sin indexar» en páginas que sí te importan.</>,
      <><strong>Sitemap enviado y sin errores</strong> (Indexación › Sitemaps). Solo debe incluir URLs que quieres indexar y que responden con 200.</>,
      <><strong>robots.txt no bloquea páginas importantes.</strong> Google recuerda que robots.txt no sirve para sacar una página de Google: para eso se usa <code>noindex</code> o una contraseña.</>,
      <><strong>Ninguna página clave lleva <code>noindex</code> por error.</strong> Pasa mucho tras un rediseño, cuando se copia la configuración del entorno de pruebas.</>,
      <><strong>Una sola versión de cada URL:</strong> con o sin barra final, con o sin www, http o https. Todas deben redirigir con 301 a la versión buena. Si en el informe de Rendimiento ves la misma página con y sin barra recibiendo impresiones por separado, falla.</>,
      <><strong>La página se ve igual para Google:</strong> usa Inspección de URLs › Probar URL publicada y mira la captura y el HTML que recibe Google. El contenido importante debe estar en el HTML, no cargarse solo con JavaScript.</>,
      <><strong>Sin enlaces internos rotos ni cadenas de redirecciones</strong> (rastreo con Screaming Frog: códigos 4xx y redirecciones encadenadas).</>,
    ],
  },
  {
    titulo: "Bloque 2 · Velocidad y experiencia en móvil (6 puntos)",
    intro: "Google indexa y posiciona a partir de la versión móvil de tu web, así que mide siempre en móvil.",
    puntos: [
      <><strong>LCP (carga del contenido principal) ≤ 2,5 s.</strong></>,
      <><strong>INP (respuesta al tocar o hacer clic) ≤ 200 ms.</strong></>,
      <><strong>CLS (estabilidad visual, que nada salte mientras carga) ≤ 0,1.</strong> Estos tres umbrales los publica Google en web.dev y se miden en el percentil 75 de las visitas reales.</>,
      <><strong>Informe Core Web Vitals de Search Console</strong> sin URLs en «Deficiente». Si tu web tiene poco tráfico, el informe puede salir vacío: en ese caso anota «desconocido» y usa los datos de laboratorio de PageSpeed Insights como orientación.</>,
      <><strong>Imágenes con peso razonable y formato moderno</strong> (WebP o AVIF), sobre todo la imagen principal de cada página.</>,
      <><strong>HTTPS en todo el sitio</strong>, sin avisos de contenido mixto.</>,
    ],
    nota: "Una advertencia que da Google: tener buenos Core Web Vitals ayuda, pero no garantiza estar arriba. Ganan peso cuando hay varias páginas igual de útiles compitiendo.",
  },
  {
    titulo: "Bloque 3 · Contenido y SEO on-page (8 puntos)",
    intro: "Aquí se comprueba si cada página dice con claridad qué ofrece y a qué búsqueda responde.",
    puntos: [
      <><strong>Cada página tiene un title propio, descriptivo y breve.</strong> Google recomienda no repetir palabras ni rellenar con keywords.</>,
      <><strong>Un H1 por página</strong> que diga qué se ofrece o qué se responde.</>,
      <><strong>Una búsqueda principal por página.</strong> Si dos páginas tuyas compiten por la misma búsqueda (lo verás en Rendimiento › Consultas › Páginas), falla: hay que fusionarlas o diferenciarlas.</>,
      <><strong>La intención encaja.</strong> Si una guía aparece para búsquedas de contratar un servicio, o al revés, Google la mostrará lejos del top 10.</>,
      <><strong>Las páginas de servicio responden a las preguntas del cliente:</strong> qué incluye, para quién es, plazos, precio o cómo se calcula, y cómo contratar.</>,
      <><strong>Enlazado interno:</strong> cada página importante recibe enlaces de otras páginas tuyas con un texto que describe el destino. Ninguna página queda huérfana.</>,
      <><strong>Datos estructurados válidos</strong> (Organization o LocalBusiness, BreadcrumbList, FAQPage si hay preguntas visibles). Lo que dice el marcado tiene que coincidir con lo que se lee en la página.</>,
      <><strong>Las búsquedas con muchas impresiones y pocos clics</strong> (Rendimiento, últimos 3 meses) tienen una página que las responde de verdad. Son tu lista de oportunidades. Para encontrar búsquedas nuevas, te sirve el <Link href="/como-usar-planificador-de-palabras-clave-google-ads/" className="text-accent-500 hover:underline">Planificador de palabras clave de Google Ads</Link>.</>,
    ],
  },
  {
    titulo: "Bloque 4 · SEO local y ficha de Google (4 puntos)",
    intro: "Si atiendes clientes en una zona, quien te busca en el mapa ve antes tu ficha que tu web. Si vendes solo online y sin local, marca este bloque como «no aplica».",
    puntos: [
      <><strong>El nombre de la ficha es el nombre real de tu negocio,</strong> sin ciudades ni servicios añadidos. Es una directriz de Google.</>,
      <><strong>Dirección o zona de servicio correcta,</strong> y el mismo nombre, teléfono y dirección en la web, la ficha y los directorios principales.</>,
      <><strong>Categoría, servicios y horario completos y al día.</strong></>,
      <><strong>Reseñas respondidas,</strong> sin pedirlas solo a clientes contentos ni ofrecer nada a cambio. La política de Google prohíbe ofrecer incentivos a cambio de reseñas y pedirlas solo a los clientes satisfechos. Lo explicamos en <Link href="/resenas-google-como-conseguirlas-legalmente/" className="text-accent-500 hover:underline">cómo conseguir reseñas en Google sin infringir la ley</Link>.</>,
    ],
  },
  {
    titulo: "Bloque 5 · Visibilidad en IA (4 puntos)",
    intro: "Los asistentes de IA ya responden a muchas búsquedas antes de que la persona llegue a una web. Este bloque revisa si pueden leerte y si te citan.",
    puntos: [
      <><strong>Informe de IA generativa de Search Console.</strong> Desde el 31/08/2026 está disponible para todas las webs. Muestra cuántas veces aparecieron tus URLs en AI Overviews, el modo IA y Discover, por página, país, dispositivo y fecha. Solo da impresiones: no da clics ni consultas.</>,
      <><strong>Tus páginas pueden aparecer en las funciones de IA de Google.</strong> Según Google, basta con que la página esté indexada y pueda mostrarse con fragmento en la Búsqueda; no hay requisitos técnicos adicionales. Revisa que no tengas <code>nosnippet</code> ni <code>max-snippet</code> restrictivos por error.</>,
      <><strong>robots.txt no bloquea los rastreadores de búsqueda de IA que te interesan:</strong> OAI-SearchBot (ChatGPT), PerplexityBot, Claude-SearchBot y Claude-User (Claude). Bloquear los de entrenamiento es una decisión de negocio aparte. Google-Extended no afecta a la Búsqueda de Google.</>,
      <><strong>Prueba manual con 5 preguntas de cliente</strong> en ChatGPT, Perplexity, Gemini y el modo IA de Google: de marca, de servicio, de problema, de zona y de comparación. Anota si te mencionan, si los datos son correctos y qué fuentes citan. El método completo está en nuestra <Link href="/auditoria-geo-aparecer-chatgpt-gemini-google/" className="text-accent-500 hover:underline">guía de auditoría GEO</Link>.</>,
    ],
  },
];

const prioridades = [
  ["1 · Ya", "Páginas clave sin indexar, noindex o bloqueos por error, URLs duplicadas sin redirección, formulario de contacto que no llega"],
  ["2 · Este mes", "Titles y H1 confusos, páginas que compiten entre sí, LCP alto por imágenes pesadas, ficha de Google con datos distintos a la web"],
  ["3 · Planificar", "Ampliar páginas de servicio, enlazado interno, datos estructurados, contenido para las búsquedas con impresiones y sin clics"],
];

const fuentes = [
  { texto: "web.dev: Web Vitals (umbrales de LCP, INP y CLS; percentil 75).", url: "https://web.dev/articles/vitals" },
  {
    texto: "Google Search Central Blog: Introducing Search Generative AI performance reports in Search Console (03/06/2026; disponible para todas las webs desde el 31/08/2026).",
    url: "https://developers.google.com/search/blog/2026/06/gen-ai-performance-reports",
  },
  { texto: "Google Search Central: AI features and your website.", url: "https://developers.google.com/search/docs/appearance/ai-features" },
  { texto: "Google Search Central: Introducción a robots.txt.", url: "https://developers.google.com/search/docs/crawling-indexing/robots/intro" },
  {
    texto: "Google Search Central: Indexación mobile-first.",
    url: "https://developers.google.com/search/docs/crawling-indexing/mobile/mobile-sites-mobile-first-indexing",
  },
  { texto: "Google Search Central: Experiencia de página.", url: "https://developers.google.com/search/docs/appearance/page-experience" },
  { texto: "Google Search Central: Enlaces de título.", url: "https://developers.google.com/search/docs/appearance/title-link" },
  { texto: "Ayuda de Perfil de Empresa: Directrices para mostrar adecuadamente tu empresa en Google.", url: "https://support.google.com/business/answer/3038177?hl=es" },
  { texto: "Google: Contenido prohibido y restringido (manipulación de valoraciones).", url: "https://support.google.com/contributionpolicy/answer/7400114?hl=es" },
  { texto: "Screaming Frog: SEO Spider (límite de la versión gratuita).", url: "https://www.screamingfrog.co.uk/seo-spider/" },
];

function Tabla({ cabecera, filas }: { cabecera: string[]; filas: string[][] }) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full text-sm border-collapse">
        <thead>
          <tr className="bg-primary-600 text-white">
            {cabecera.map((c) => (
              <th key={c} className="px-4 py-3 text-left font-semibold">{c}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {filas.map((fila) => (
            <tr key={fila[0]} className="border-b border-gray-200 even:bg-gray-50">
              {fila.map((celda, i) => (
                <td key={i} className={i === 0 ? "px-4 py-3 font-medium text-gray-800" : "px-4 py-3 text-gray-600"}>{celda}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

// Número del primer punto de cada bloque (la numeración sigue de 1 a 30 entre bloques).
const inicioBloque = bloques.map((_, b) => bloques.slice(0, b).reduce((total, x) => total + x.puntos.length, 1));

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <article className="mw-article max-w-3xl mx-auto px-4 py-12">
        <Breadcrumbs crumbs={[{ label: "Inicio", href: "/" }, { label: "Blog", href: "/blog/" }, { label: "Auditoría web paso a paso" }]} />

        <header className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="bg-primary-100 text-primary-700 text-xs font-medium px-2.5 py-0.5 rounded-full">SEO</span>
            <time className="text-sm text-gray-400" dateTime={DATE_MODIFIED}>Actualizado el 28 de octubre de 2026</time>
            <AuthorByline />
          </div>
          <h1 className="text-4xl font-bold text-primary-600 mb-4 leading-tight">{H1}</h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Una checklist para revisar tu web con herramientas gratuitas de Google: si se indexa, si carga bien en móvil, si el contenido responde a lo que busca tu cliente, si tu ficha de Google cuadra con la web y si te ven los asistentes de IA.
          </p>
          <Image
            src="/og-auditoria-web-checklist.jpg"
            alt="Ilustración: una lupa revisa una página web y encuentra un error 404, junto a una tarjeta con el resultado de cada bloque de la auditoría"
            width={1200}
            height={630}
            className="w-full rounded-2xl mt-6"
            priority
          />
        </header>

        <div className="text-gray-700 space-y-6 leading-relaxed">
          <p>
            Una <strong>auditoría web</strong> es una revisión ordenada de todo lo que impide que tu página aparezca en Google y convierta visitas en clientes. Una auditoría básica cubre cinco bloques: indexación, velocidad, contenido, presencia local y visibilidad en IA. Cada punto da uno de estos cuatro resultados: <strong>pasa</strong>, <strong>falla</strong>, <strong>desconocido</strong> o <strong>no aplica</strong>. Se corrige primero lo que falla y más pesa.
          </p>

          <h2 className="text-2xl font-bold text-primary-600">Resumen rápido</h2>
          <ul className="space-y-3">
            {resumen.map((item, i) => (
              <li key={i} className="flex items-start gap-3 p-4 border border-gray-200 rounded-xl">
                <span className="text-primary-600 font-bold shrink-0 mt-0.5">▸</span>
                <span className="text-gray-600 text-sm">{item}</span>
              </li>
            ))}
          </ul>

          <h2 className="text-2xl font-bold text-primary-600">Qué necesitas antes de empezar</h2>
          <Tabla cabecera={["Herramienta", "Para qué sirve en la auditoría", "Coste"]} filas={herramientas} />
          <p>
            Si todavía no tienes Search Console, configúralo antes que nada. Es la única fuente con datos reales de Google sobre tu web. Las demás herramientas de SEO estiman.
          </p>

          <h2 className="text-2xl font-bold text-primary-600">Cómo anotar los resultados</h2>
          <p>
            Abre una hoja de cálculo con cinco columnas: punto, resultado, prueba (captura o dato), prioridad y responsable. Usa siempre los mismos cuatro resultados:
          </p>
          <Tabla cabecera={["Resultado", "Cuándo usarlo"]} filas={estados} />

          {bloques.map((bloque, b) => (
            <section key={bloque.titulo} className="space-y-4">
              <h2 className="text-2xl font-bold text-primary-600">{bloque.titulo}</h2>
              <p>{bloque.intro}</p>
              <ol className="space-y-3">
                {bloque.puntos.map((punto, i) => (
                  <li key={i} className="flex items-start gap-3 p-4 border border-gray-200 rounded-xl">
                    <span className="text-primary-600 font-bold shrink-0 w-7 text-right">{inicioBloque[b] + i}.</span>
                    <span className="text-gray-600 text-sm">{punto}</span>
                  </li>
                ))}
              </ol>
              {bloque.nota && <p>{bloque.nota}</p>}
              {b === 1 && <BlogBanner variant="seogeogbp" />}
            </section>
          ))}

          <h2 className="text-2xl font-bold text-primary-600">Cómo priorizar lo que has encontrado</h2>
          <p>
            Ordena los «falla» con dos preguntas: ¿cuánto afecta a que te encuentren o te contacten? ¿Cuánto cuesta arreglarlo?
          </p>
          <Tabla cabecera={["Prioridad", "Qué suele entrar aquí"]} filas={prioridades} />
          <p>
            Los «desconocido» van a una lista aparte con el dato que falta, por ejemplo «sin acceso a Search Console» o «poco tráfico para Core Web Vitals». No los mezcles con los fallos.
          </p>

          <h2 className="text-2xl font-bold text-primary-600">Cada cuánto repetir la auditoría</h2>
          <p>
            Haz una auditoría completa una vez al año, y también antes y después de un rediseño, una migración o un cambio de dominio. Los bloques 1 y 5 conviene repasarlos cada mes en Search Console: es lo que cambia sin que toques nada. Si estás empezando a trabajar el SEO, aquí explicamos <Link href="/cuanto-tarda-el-seo-en-dar-resultados/" className="text-accent-500 hover:underline">cuánto tarda en dar resultados y qué se mueve primero</Link>. Y si quieres una visión general de por dónde empezar, tienes nuestra <Link href="/seo-para-pymes-guia/" className="text-accent-500 hover:underline">guía de SEO para pymes</Link>.
          </p>

          <h2 className="text-2xl font-bold text-primary-600">Cuándo conviene una auditoría profesional</h2>
          <p>
            Esta checklist te dice qué está mal. Lo que suele costar más es saber por qué pasa y qué corregir primero en tu caso, sobre todo cuando hay migraciones, muchas páginas o datos que se contradicen.
          </p>
          <div className="bg-primary-50 rounded-xl p-6 border border-primary-100">
            <p className="font-semibold text-primary-700 mb-2">¿Quieres una segunda opinión sobre tu web?</p>
            <p className="text-gray-600 text-sm mb-4">
              Nuestro diagnóstico gratuito revisa el estado técnico, tu visibilidad en Google y en asistentes de IA, tu ficha de Google y tres oportunidades de búsqueda. Lo recibes por correo en un máximo de 24 horas laborables, sin compromiso. Si después quieres que nos encarguemos, tienes los <Link href="/precios-seo/" className="text-accent-500 hover:underline">planes y precios SEO</Link> publicados. Si lo que necesitas es una revisión a fondo con un plan priorizado que ejecute tu equipo, eso es la <Link href="/consultor-seo/" className="text-accent-500 hover:underline">consultoría SEO</Link>.
            </p>
            <Link href="/auditoria-digital/" className="inline-block bg-accent-500 text-white px-6 py-2.5 rounded-full font-semibold text-sm hover:bg-accent-600 transition-colors">
              Pedir el diagnóstico gratuito
            </Link>
          </div>

          <h2 className="text-2xl font-bold text-primary-600">Preguntas frecuentes</h2>
          <div className="space-y-3">
            {FAQS.map((faq) => (
              <details key={faq.q} className="mw-faq group rounded-2xl bg-gray-50 ring-1 ring-gray-200 transition-all duration-300 open:bg-white open:ring-transparent open:shadow-[0_20px_45px_-25px_rgba(124,58,237,0.45)]">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-6 py-5 font-bold text-primary-700 [&::-webkit-details-marker]:hidden">
                  {faq.q}
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white text-xl leading-none text-accent-500 ring-1 ring-gray-200 transition-all duration-300 group-open:rotate-45 group-open:bg-gradient-to-br group-open:from-[#7c3aed] group-open:to-accent-500 group-open:text-white group-open:ring-0" aria-hidden="true">+</span>
                </summary>
                <div className="mw-faq-body px-6 pb-6 text-gray-600 leading-relaxed">{faq.a}</div>
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
            Servicios relacionados: <Link href="/auditoria-digital/" className="text-accent-500 hover:underline">Auditoría SEO gratuita</Link> · <Link href="/consultor-seo/" className="text-accent-500 hover:underline">Consultor SEO</Link> · <Link href="/precios-seo/" className="text-accent-500 hover:underline">Precios SEO</Link> · <Link href="/seo-posicionamiento-web-organico/" className="text-accent-500 hover:underline">SEO Posicionamiento Web</Link> · <Link href="/geo-posicionamiento-ia/" className="text-accent-500 hover:underline">Posicionamiento en IA (GEO)</Link>
          </p>
        </div>

        <nav className="mt-12 pt-8 border-t border-gray-200">
          <Link href="/blog/" className="text-accent-500 hover:text-accent-600 font-medium text-sm">← Volver al blog</Link>
        </nav>
      </article>
      <RelatedArticles currentSlug="auditoria-seo-basica" />
    </>
  );
}
