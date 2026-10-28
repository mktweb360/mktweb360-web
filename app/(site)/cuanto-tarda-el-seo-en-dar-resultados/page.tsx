import Image from "next/image";
import type { Metadata } from "next";
import Link from "next/link";
import type { ReactNode } from "react";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { RelatedArticles } from "@/components/RelatedArticles";
import { BlogBanner } from "@/components/BlogBanner";

// 28/10/2026 — tema 3 de la propuesta de blog del 27/10, aprobado por José.
// Borrador y fuentes: OneDrive › mktweb360.com › 02-Contenidos › «2026-10-28 BORRADOR — Tema 3 Cuánto tarda el SEO en dar resultados».
// Plazos: los unificados de la web (CLAUDE.md, 18/10). Si cambian, cambiarlos aquí también.

const SLUG = "cuanto-tarda-el-seo-en-dar-resultados";
const URL = `https://www.mktweb360.com/${SLUG}/`;
const OG = "/og-cuanto-tarda-seo-grafico.jpg";
const TITLE = "¿Cuánto tarda el SEO en dar resultados? Plazos por fases";
const DESCRIPTION =
  "El SEO tarda de 3 a 6 meses en dar los primeros resultados y de 6 a 12 en consolidarse, de forma orientativa. Qué pasa cada mes y cómo verlo en Search Console.";
const H1 = "Cuánto tarda el SEO en dar resultados: qué pasa mes a mes y de qué depende";
const DATE = "2026-10-28";

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: { canonical: URL },
  openGraph: {
    title: `${TITLE} | Mkt Web 360`,
    description: DESCRIPTION,
    url: URL,
    type: "article",
    images: [{ url: OG, width: 1200, height: 630 }],
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: H1,
  description: DESCRIPTION,
  author: { "@type": "Organization", name: "Mkt Web 360 SLU" },
  publisher: { "@type": "Organization", name: "Mkt Web 360 SLU", url: "https://www.mktweb360.com" },
  datePublished: DATE,
  dateModified: DATE,
  image: `https://www.mktweb360.com${OG}`,
  url: URL,
  mainEntityOfPage: URL,
};

const FAQS = [
  {
    q: "¿Se puede acelerar el SEO?",
    a: "Se puede evitar retrasarlo. Lo que más acorta los plazos es corregir antes los problemas de indexación, centrar cada página en una búsqueda y trabajar de forma constante. Pagar por enlaces o publicar mucho contenido sin calidad puede tener el efecto contrario.",
  },
  {
    q: "¿Qué pasa si dejo de hacer SEO?",
    a: "Lo conseguido no desaparece de un día para otro, pero se va perdiendo si los competidores siguen trabajando y tu contenido se queda desactualizado. El mantenimiento cuesta menos que volver a empezar.",
  },
  {
    q: "¿El GEO (aparecer en respuestas de IA) tarda lo mismo?",
    a: "En Google, sí va de la mano: sus funciones de IA usan páginas indexadas y aptas para la Búsqueda. En asistentes como ChatGPT o Perplexity las respuestas cambian según la pregunta y el momento, así que se mide con una batería fija de preguntas repetida cada mes.",
  },
  {
    q: "¿Por qué tengo impresiones pero no clics?",
    a: "Normalmente porque apareces por debajo de la primera página, donde casi nadie mira, o porque el title y la descripción no invitan a entrar. Es una fase normal del arranque, entre el mes 1 y el 3.",
  },
  {
    q: "¿Cuánto tiempo hay que darle antes de decidir si funciona?",
    a: "Al menos 6 meses de trabajo constante para valorar la tendencia de impresiones y posiciones, midiendo siempre contra los datos del punto de partida.",
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
  <><strong>Primeros resultados:</strong> 3-6 meses. <strong>Consolidación:</strong> 6-12 meses. Son orientativos y no una promesa.</>,
  <>Lo primero que se mueve son las <strong>impresiones</strong>, después la <strong>posición media</strong> y por último los <strong>clics y los contactos</strong>.</>,
  <>Según Google, algunos cambios se notan en horas y otros pueden tardar varios meses.</>,
  <><strong>SEO local y ficha de Google:</strong> 1-2 meses, porque compites con pocos negocios de tu zona.</>,
  <>Si a los 6 meses no se mueven ni las impresiones, el problema no es el tiempo: haz una <Link href="/auditoria-seo-basica/" className="text-accent-500 hover:underline">auditoría web</Link>.</>,
];

const esperas: ReactNode[] = [
  <><strong>Google tiene que rastrear e indexar los cambios.</strong> Según su documentación, el rastreo puede tardar «desde unos días hasta unas semanas», y pedir la indexación no garantiza que la página aparezca.</>,
  <><strong>Google tiene que valorar la página frente a las demás.</strong> En su guía de SEO lo resume así: algunos cambios surten efecto en unas horas y otros pueden tardar varios meses.</>,
  <><strong>La autoridad se acumula.</strong> Las menciones, los enlaces y las reseñas llegan poco a poco, y son lo que separa a páginas igual de buenas.</>,
];

const fases = [
  ["Mes 0-1 · Base", "Auditoría, corrección de indexación y errores técnicos, mapa de keywords (una búsqueda principal por página)", "Páginas que pasan a «indexada». Aún pocos cambios en Rendimiento"],
  ["Meses 1-3 · Arranque", "Páginas de servicio reescritas, enlazado interno, ficha de Google completa, primeros contenidos", "Suben las impresiones y aparecen búsquedas nuevas, muchas en posiciones 20-50"],
  ["Meses 3-6 · Primeros resultados", "Contenido nuevo cada mes, ajuste de titles con baja tasa de clics, primeras menciones y enlaces", "La posición media mejora y algunas búsquedas entran en la primera página. Llegan los primeros clics de búsquedas de servicio"],
  ["Meses 6-12 · Consolidación", "Ampliar lo que funciona, reforzar autoridad, actualizar contenidos", "Clics más estables y contactos que vienen del orgánico"],
];

const variables = [
  ["Estado de partida", "Web indexada, sin errores técnicos", "Páginas sin indexar, migración mal hecha, URLs duplicadas"],
  ["Competencia", "Búsquedas de nicho o locales, con pocos competidores fuertes", "Búsquedas nacionales con grandes marcas y medios"],
  ["Antigüedad y autoridad", "Dominio con historia, menciones y reseñas reales", "Dominio nuevo, sin menciones"],
  ["Intención", "La página responde justo a lo que se busca", "Una página intenta responder a todo"],
  ["Constancia", "Trabajo cada mes durante un año", "Picos de trabajo y meses parados"],
];

const metricas: ReactNode[] = [
  <><strong>Impresiones:</strong> deben subir antes que nada. Es la señal de que Google te enseña para más búsquedas.</>,
  <><strong>Número de consultas distintas:</strong> si crece, Google entiende mejor de qué trata tu web.</>,
  <><strong>Posición media de las búsquedas que te importan:</strong> mira la de cada búsqueda, no la media de todo el sitio, que mezcla búsquedas sin relación con tu negocio.</>,
  <><strong>Clics y CTR:</strong> si tienes impresiones en primera página pero pocos clics, revisa el title y la descripción.</>,
  <><strong>Contactos reales:</strong> formularios, llamadas y pedidos que vienen del orgánico. Es lo que cuenta para el negocio.</>,
];

const actualizaciones = [
  ["Discover (febrero)", "05/02/2026", "21 días"],
  ["Spam (marzo)", "24/03/2026", "menos de 1 día"],
  ["Core update (marzo)", "27/03/2026", "12 días"],
  ["Core update (mayo)", "21/05/2026", "11 días"],
  ["Spam (junio)", "24/06/2026", "2 días"],
  ["Spam (agosto)", "18/08/2026", "2 días"],
  ["Spam (septiembre)", "24/09/2026", "13 días"],
];

const alarmas: ReactNode[] = [
  <>A los 3 meses tus páginas principales <strong>siguen sin indexar</strong>.</>,
  <>Las impresiones <strong>no suben nada</strong> en 6 meses de trabajo.</>,
  <>Te prometieron <strong>una posición concreta o resultados garantizados</strong>. Google advierte de que nadie puede garantizar el primer puesto.</>,
  <>Recibes visitas pero <strong>ningún contacto</strong>: entonces el problema está en la página (oferta, formulario, confianza), no en el SEO.</>,
  <><strong>Dos páginas tuyas se turnan</strong> en la misma búsqueda y ninguna se asienta.</>,
];

const fuentes = [
  { texto: "Google Search Central: ¿Necesitas un SEO?", url: "https://developers.google.com/search/docs/fundamentals/do-i-need-seo" },
  { texto: "Google Search Central: Guía de optimización en buscadores (SEO) para principiantes.", url: "https://developers.google.com/search/docs/fundamentals/seo-starter-guide" },
  { texto: "Google Search Central: Pedir a Google que vuelva a rastrear tus URLs.", url: "https://developers.google.com/search/docs/crawling-indexing/ask-google-to-recrawl" },
  { texto: "Google Search Status Dashboard: incidencias de clasificación de 2026 (consultado el 28/10/2026).", url: "https://status.search.google.com/summary" },
  {
    texto: "Google Search Central Blog: Introducing Search Generative AI performance reports in Search Console (03/06/2026; disponible para todas las webs desde el 31/08/2026).",
    url: "https://developers.google.com/search/blog/2026/06/gen-ai-performance-reports",
  },
  { texto: "Google Search Central: AI features and your website.", url: "https://developers.google.com/search/docs/appearance/ai-features" },
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

function Lista({ items, numerada = false }: { items: ReactNode[]; numerada?: boolean }) {
  return (
    <ul className="space-y-3">
      {items.map((item, i) => (
        <li key={i} className="flex items-start gap-3 p-4 border border-gray-200 rounded-xl">
          <span className="text-primary-600 font-bold shrink-0 mt-0.5">{numerada ? `${i + 1}.` : "▸"}</span>
          <span className="text-gray-600 text-sm">{item}</span>
        </li>
      ))}
    </ul>
  );
}

export default function CuantoTardaSeoPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <article className="mw-article max-w-3xl mx-auto px-4 py-12">
        <Breadcrumbs crumbs={[{ label: "Inicio", href: "/" }, { label: "Blog", href: "/blog/" }, { label: "Cuánto tarda el SEO en dar resultados" }]} />

        <header className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="bg-primary-100 text-primary-700 text-xs font-medium px-2.5 py-0.5 rounded-full">SEO</span>
            <time className="text-sm text-gray-400" dateTime={DATE}>28 de octubre de 2026</time>
          </div>
          <h1 className="text-4xl font-bold text-primary-600 mb-4 leading-tight">{H1}</h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            El plazo depende de cómo está tu web hoy y de con quién compites. Te explicamos qué pasa en cada fase, qué datos de Search Console se mueven primero y cuándo un retraso indica un problema.
          </p>
          <Image src={OG} alt="Gráfico orientativo de 12 meses: primero suben las impresiones, después mejora la posición y por último llegan los clics y contactos" width={1200} height={630} className="w-full rounded-2xl mt-6" priority />
        </header>

        <div className="text-gray-700 space-y-6 leading-relaxed">
          <p>
            Con un trabajo constante, el SEO de una web suele empezar a dar resultados visibles <strong>entre los 3 y los 6 meses</strong>, y se consolida <strong>entre los 6 y los 12 meses</strong>. Son plazos orientativos: dependen de cómo está la web al empezar, de la competencia de tu sector y de lo que hagas cada mes. La ficha de Google de un negocio local suele moverse antes, en 1-2 meses. Nadie puede garantizarte una posición concreta, y Google lo dice expresamente.
          </p>

          <h2 className="text-2xl font-bold text-primary-600">Resumen rápido</h2>
          <Lista items={resumen} />

          <h2 className="text-2xl font-bold text-primary-600">Por qué el SEO tarda</h2>
          <p>Hay tres esperas que se suman:</p>
          <Lista items={esperas} numerada />

          <h2 className="text-2xl font-bold text-primary-600">Qué pasa en cada fase</h2>
          <Tabla cabecera={["Fase", "Qué se hace", "Qué se ve en Search Console"]} filas={fases} />
          <p>
            Las fases se solapan. Una web que ya tiene años y algo de autoridad puede saltarse parte del arranque. Una recién estrenada empieza de cero.
          </p>

          <h2 className="text-2xl font-bold text-primary-600">De qué depende que vaya más rápido o más lento</h2>
          <Tabla cabecera={["Variable", "Acelera", "Frena"]} filas={variables} />

          <h2 className="text-2xl font-bold text-primary-600">Por qué el SEO local suele ir más rápido</h2>
          <p>
            En una búsqueda local como «fontanero en mi zona», Google compara pocos negocios: los de tu área. Una ficha de Google completa y con los mismos datos que tu web, más reseñas respondidas, suele notarse en 1-2 meses. Las búsquedas nacionales tienen más competencia y van más despacio. Lo explicamos en <Link href="/seo-local-empresas-servicios/" className="text-accent-500 hover:underline">SEO local para empresas de servicios</Link>.
          </p>

          <h2 className="text-2xl font-bold text-primary-600">Cómo saber en Search Console si vas por buen camino</h2>
          <p>Compara siempre el mismo periodo (por ejemplo, últimos 3 meses frente a los 3 anteriores) y el mismo país:</p>
          <Lista items={metricas} numerada />
          <p>
            Desde el 31 de agosto de 2026, Search Console también muestra a todas las webs cuántas veces aparecen en las respuestas de IA de Google (AI Overviews y modo IA). Como Google solo usa páginas indexadas para esas respuestas, el trabajo de SEO es también la base para aparecer en ellas.
          </p>

          <BlogBanner variant="seogeogbp" />

          <h2 className="text-2xl font-bold text-primary-600">Y las actualizaciones de Google, ¿cambian el plazo?</h2>
          <p>Pueden adelantarlo o retrasarlo unas semanas, pero no cambian lo que funciona. En 2026, el panel oficial de estado de la Búsqueda de Google recoge:</p>
          <Tabla cabecera={["Actualización", "Inicio", "Duración"]} filas={actualizaciones} />
          <p>
            Si tus datos cambian bruscamente en esas fechas, compara antes y después de la actualización antes de tocar nada. Lo contamos en <Link href="/actualizaciones-algoritmo-google-2026-que-ha-cambiado-y-como-afecta-tu-web/" className="text-accent-500 hover:underline">actualizaciones del algoritmo de Google en 2026</Link>.
          </p>

          <h2 className="text-2xl font-bold text-primary-600">Señales de alarma: cuando el problema no es el tiempo</h2>
          <Lista items={alarmas} />
          <p>
            En cualquiera de estos casos, una <Link href="/auditoria-seo-basica/" className="text-accent-500 hover:underline">auditoría web con la checklist de 30 puntos</Link> te dice por dónde empezar.
          </p>

          <div className="bg-primary-50 rounded-xl p-6 border border-primary-100">
            <p className="font-semibold text-primary-700 mb-2">¿Quieres saber en qué punto está tu web?</p>
            <p className="text-gray-600 text-sm mb-4">
              Nuestro diagnóstico gratuito revisa el estado técnico, tu visibilidad en Google y en asistentes de IA, tu ficha de Google y tres oportunidades de búsqueda. Lo recibes por correo en un máximo de 24 horas laborables, sin compromiso.
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
            Servicios relacionados: <Link href="/seo-posicionamiento-web-organico/" className="text-accent-500 hover:underline">SEO Posicionamiento Web</Link> · <Link href="/precios-seo/" className="text-accent-500 hover:underline">Planes y precios SEO</Link> · <Link href="/seo-local/" className="text-accent-500 hover:underline">SEO local</Link>
          </p>
        </div>

        <nav className="mt-12 pt-8 border-t border-gray-200">
          <Link href="/blog/" className="text-accent-500 hover:text-accent-600 font-medium text-sm">← Volver al blog</Link>
        </nav>
      </article>
      <RelatedArticles currentSlug={SLUG} />
    </>
  );
}
