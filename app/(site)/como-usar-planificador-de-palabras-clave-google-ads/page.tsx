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

// 30/10/2026 — refuerzo del tema 4 de la propuesta de blog del 27/10 (misma URL; publicado el 25/06/2026).
// Texto y fuentes: OneDrive › mktweb360.com › 02-Contenidos › «2026-10-28 ARTÍCULO — Planificador de palabras clave».
// Datos de Google comprobados en la ayuda oficial de Google Ads el 28/10/2026.

const SLUG = "como-usar-planificador-de-palabras-clave-google-ads";
const URL = `https://www.mktweb360.com/${SLUG}/`;
const OG = "/og-como-usar-planificador-de-palabras-clave-google-ads-v2.jpg";
const TITLE = "Planificador de palabras clave de Google Ads: guía 2026";
const DESCRIPTION =
  "Cómo usar el Planificador de palabras clave sin campaña activa, por qué ves el volumen en rangos y qué significa «competencia». Con tabla frente a Search Console.";
const H1 = "Cómo usar el Planificador de palabras clave de Google Ads (2026), paso a paso";
const DATE_PUBLISHED = "2026-06-25";
const DATE_MODIFIED = "2026-10-30";

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: alternatesFor(`/${SLUG}/`) ?? { canonical: URL },
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
  author: autorSchema(),
  publisher: { "@type": "Organization", "@id": "https://www.mktweb360.com/#organization", name: "Mkt Web 360 SLU", url: "https://www.mktweb360.com" },
  datePublished: DATE_PUBLISHED,
  dateModified: DATE_MODIFIED,
  image: `https://www.mktweb360.com${OG}`,
  url: URL,
  mainEntityOfPage: URL,
};

const FAQS = [
  {
    q: "¿El Planificador de palabras clave es gratis?",
    a: "Sí. Solo necesitas una cuenta de Google Ads con la configuración completa, que incluye los datos de facturación. No hace falta tener una campaña activa. Lo que cambia con el gasto es el detalle del volumen: con poco gasto en anuncios lo verás en rangos.",
  },
  {
    q: "¿Por qué el Planificador me da rangos como 1K – 10K en vez de cifras exactas?",
    a: "Porque Google muestra una vista de datos limitada a los anunciantes con menor gasto mensual. No publica a partir de qué gasto se ven las cifras completas. Para decidir qué página crear, el rango suele bastar; para afinar, cruza con Search Console.",
  },
  {
    q: "¿La «competencia» del Planificador sirve para saber si es difícil posicionar en SEO?",
    a: "No. Según la ayuda de Google Ads, mide cuántos anunciantes aparecieron con esa palabra clave en relación con todas las de Google. Es competencia de pujas en anuncios. La dificultad SEO depende de quién ocupa los resultados orgánicos y se estima con otras herramientas.",
  },
  {
    q: "¿Qué diferencia hay entre el volumen de búsquedas y las previsiones?",
    a: "El volumen es un histórico: la media de búsquedas mensuales, por defecto de los últimos 12 meses. Las previsiones estiman clics, impresiones, coste, CTR y CPC medio de una campaña con una puja y un presupuesto concretos. Sirven para planificar Google Ads, no para calcular tráfico SEO.",
  },
  {
    q: "¿Puedo usar el Planificador para SEO aunque sea una herramienta de Google Ads?",
    a: "Sí, para descubrir búsquedas, agruparlas por tema y ver su estacionalidad. Pero conviene completarlo con Search Console, que da los datos reales de tu web, y con una herramienta SEO si necesitas estimar la dificultad orgánica.",
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
  <>Es <strong>gratis</strong> y no exige una campaña activa, pero sí completar la cuenta con los <strong>datos de facturación</strong>.</>,
  <>Tiene dos funciones: <strong>descubrir palabras clave nuevas</strong> y <strong>consultar el volumen y las previsiones</strong> de una lista.</>,
  <>Con poco gasto en anuncios, el volumen sale en <strong>rangos</strong> (por ejemplo, 1K – 10K). Para elegir temas suele bastar.</>,
  <>La <strong>«competencia»</strong> es competencia entre anunciantes por las pujas. <strong>No es dificultad SEO.</strong></>,
  <>Para SEO, crúzalo con <strong>Search Console</strong>, que te dice por qué búsquedas aparece ya tu web y en qué posición.</>,
];

const acceso: ReactNode[] = [
  <>Entra en <strong>ads.google.com</strong> con tu cuenta de Google y crea la cuenta de Google Ads.</>,
  <>Durante el registro, Google ofrece la opción de <strong>crear la cuenta sin una campaña</strong>. Elígela: no tienes que preparar ningún anuncio. Si el asistente te lleva directo a crear una campaña, busca esa opción en la parte inferior de la pantalla.</>,
  <>Completa la configuración con el país de facturación, la zona horaria y el método de pago. Google exige este paso para usar funciones básicas, como las ideas de palabras clave. Sin campañas activas no se publican anuncios.</>,
  <>Abre el menú <strong>Herramientas</strong> y entra en <strong>Planificador de palabras clave</strong>.</>,
];

const descubrir: ReactNode[] = [
  <>Elige <strong>Descubre nuevas palabras clave</strong>.</>,
  <>Empieza por una de las dos vías: <strong>con palabras clave</strong> (escribe pocas palabras que describan tu servicio, como lo diría un cliente) o <strong>con un sitio web</strong> (pega un dominio o una URL, también de un competidor, y Google sacará ideas de su contenido).</>,
  <>Ajusta el <strong>idioma</strong> y la <strong>ubicación</strong>. Si trabajas para toda España, deja España; si atiendes una zona, acótala. El volumen cambia mucho de un mercado a otro.</>,
  <>Revisa los resultados y añade filtros para quitar ruido: por texto (excluir marcas o términos que no ofreces), por competitividad o por cuota de impresiones. El panel lateral te deja refinar por categorías.</>,
  <>Guarda las que te interesen en <strong>Palabras clave guardadas</strong> o descarga la lista para trabajarla en una hoja de cálculo.</>,
];

const volumen: ReactNode[] = [
  <>Elige <strong>Consulta el volumen de búsquedas y las previsiones</strong>.</>,
  <>Pega tu lista o sube un CSV con una columna llamada «Keyword». Cada palabra clave puede tener como máximo <strong>80 caracteres y 10 palabras</strong>.</>,
  <>En el <strong>historial de métricas</strong> verás el promedio de búsquedas mensuales, la competitividad y las pujas de cada término.</>,
  <>En la <strong>previsión</strong> verás lo que podría dar una campaña con esas palabras clave: clics, impresiones, coste, CTR y CPC medio, según la puja y el presupuesto que indiques.</>,
];

const lectura = [
  ["Promedio de búsquedas mensuales", "Media de búsquedas de la palabra clave y sus variantes cercanas, por defecto en 12 meses. Las cifras se redondean", "Para comparar temas entre sí y detectar picos de temporada, no como dato exacto"],
  ["Rango de volumen (1K – 10K)", "Vista de datos limitada para anunciantes con menor gasto mensual", "Basta para elegir entre temas. Para afinar, mira las impresiones reales en Search Console"],
  ["Competencia (baja, media, alta)", "Cuántos anunciantes aparecieron con esa palabra clave en relación con todas las de Google", "Indica interés comercial en anuncios. No dice nada de lo difícil que es posicionar en orgánico"],
  ["Puja por la parte superior (rango bajo y alto)", "Aproximación a los percentiles 20 y 80 de lo que han pagado los anunciantes, con datos de los últimos 30 días", "Orienta el coste por clic si vas a hacer Google Ads y señala qué búsquedas tienen valor comercial"],
];

const previsiones: ReactNode[] = [
  <>Se actualizan <strong>a diario</strong> con datos de los últimos 7 a 10 días, ajustados a la estacionalidad.</>,
  <>Tienen en cuenta la puja, el presupuesto, la estacionalidad y el historial de calidad de los anuncios. El volumen histórico no tiene en cuenta nada de eso.</>,
  <>En una cuenta nueva parten de promedios de otros anunciantes hasta que hay datos propios.</>,
  <>Son <strong>menos precisas</strong> si te diriges a una zona geográfica pequeña, porque hay menos datos.</>,
];

const comparativa = [
  ["Descubrir búsquedas que aún no trabajas", "Sí: es su función principal", "Solo las búsquedas por las que ya apareces", "Sí, desde su propia base de datos"],
  ["Volumen de una búsqueda", "Dato de Google, en rangos si gastas poco", "No da el volumen total; da tus impresiones", "Estimación propia a partir de datos de terceros"],
  ["Por qué búsquedas aparece ya tu web", "No", "Sí: consultas, impresiones, clics, CTR y posición media reales", "Estimación según su base de datos"],
  ["Dificultad para posicionar en orgánico", "No (su «competencia» es de anuncios)", "No", "Sí: KD %, de 0 a 100"],
  ["Coste por clic y presupuesto de anuncios", "Sí: pujas y previsiones", "No", "Orientativo"],
  ["Precio", "Gratis con cuenta de Google Ads", "Gratis", "De pago, con acceso gratuito limitado"],
];

const errores: ReactNode[] = [
  <><strong>Leer la «competencia» como dificultad SEO.</strong> Una búsqueda informativa puede tener competencia baja en anuncios y estar copada en orgánico por medios y grandes marcas. Y al revés.</>,
  <><strong>Tratar los rangos como cifras.</strong> «1K – 10K» puede ser 1.200 o 9.500. Úsalo para ordenar temas por demanda, no para prometer visitas.</>,
  <><strong>Usar las previsiones para calcular tráfico SEO.</strong> Estiman lo que daría una campaña de pago con una puja y un presupuesto. El tráfico orgánico depende de tu posición y del resto de la página de resultados.</>,
  <><strong>Dejar la ubicación y el idioma sin revisar.</strong> Si vendes en España y miras datos de otros países o de otro idioma, la lista no te sirve.</>,
  <><strong>Crear una página por cada variante.</strong> «Planificador de palabras clave» y «cómo usar el planificador de palabras clave» buscan lo mismo. Agrupa las variantes con la misma intención en una sola página; si no, tus propias páginas compiten entre sí.</>,
];

const fuentes = [
  { texto: "Ayuda de Google Ads: Utilizar el Planificador de palabras clave (acceso, funciones, límites, facturación y actualización de las previsiones).", url: "https://support.google.com/google-ads/answer/7337243?hl=es" },
  { texto: "Ayuda de Google Ads: Acerca de las previsiones del Planificador de palabras clave (búsquedas mensuales, competitividad, pujas y previsiones).", url: "https://support.google.com/google-ads/answer/3022575?hl=es" },
  { texto: "Ayuda de Google Ads: Crear una cuenta de Google Ads (opción de crear una cuenta sin campaña).", url: "https://support.google.com/google-ads/answer/6366720?hl=es" },
  { texto: "Search Engine Journal (15/08/2016), que recoge el aviso de Google: los anunciantes con menor gasto mensual pueden ver una vista de datos limitada.", url: "https://www.searchenginejournal.com/googles-keyword-planner-tool-providing-limited-data-low-spending-advertisers/170837/" },
  { texto: "Ayuda de Search Console: Informe de rendimiento (clics, impresiones, CTR y posición media de tu web).", url: "https://support.google.com/webmasters/answer/7576553?hl=es" },
  { texto: "Semrush Knowledge Base: qué es la KD % (dificultad de palabra clave).", url: "https://www.semrush.com/kb/1158-what-is-kd" },
  { texto: "Semrush Knowledge Base: cómo calcula Semrush el volumen de búsqueda.", url: "https://www.semrush.com/kb/683-search-volume" },
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

export default function PlanificadorPalabrasClavePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <article className="mw-article max-w-3xl mx-auto px-4 py-12">
        <Breadcrumbs crumbs={[{ label: "Inicio", href: "/" }, { label: "Blog", href: "/blog/" }, { label: "Planificador de palabras clave" }]} />

        <header className="mb-8">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="bg-primary-100 text-primary-700 text-xs font-medium px-2.5 py-0.5 rounded-full">SEO · Google Ads</span>
            <span className="text-sm text-gray-400">
              Actualizado el <time dateTime={DATE_MODIFIED}>30 de octubre de 2026</time>
            </span>
            <AuthorByline />
          </div>
          <h1 className="text-4xl font-bold text-primary-600 mb-4 leading-tight">{H1}</h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Cómo entrar sin crear una campaña, cómo sacar ideas y volúmenes, y cómo leer bien sus datos: por qué salen en rangos, qué es de verdad la «competencia» y cuándo fiarte más de Search Console.
          </p>
          <Image
            src={OG}
            alt="Maqueta ilustrada del Planificador de palabras clave: buscador con dos palabras clave y una tabla con volúmenes en rangos, competencia y pujas, con tres anotaciones que explican cada columna"
            width={1200}
            height={630}
            className="w-full rounded-2xl mt-6"
            priority
          />
        </header>

        <div className="text-gray-700 space-y-6 leading-relaxed">
          <p>
            El Planificador de palabras clave es una herramienta gratuita de Google Ads que da ideas de búsquedas relacionadas con tu negocio y estima cuántas veces se buscan al mes y cuánto pagan los anunciantes por ellas. No necesitas una campaña activa, pero sí completar la cuenta con los datos de facturación. Si gastas poco en anuncios, el volumen aparece en rangos.
          </p>

          <h2 className="text-2xl font-bold text-primary-600">Resumen rápido</h2>
          <Lista items={resumen} />

          <h2 className="text-2xl font-bold text-primary-600">¿Qué es el Planificador de palabras clave y para qué sirve?</h2>
          <p>
            Es la herramienta que Google pone dentro de Google Ads para preparar campañas de búsqueda. Sirve para dos cosas: <strong>encontrar palabras clave nuevas</strong> a partir de unos términos o de una web, y <strong>ver el volumen y las previsiones</strong> de una lista que ya tienes. Aunque está pensada para anuncios, también se usa en SEO para saber cómo busca la gente un servicio, agrupar búsquedas por tema y ver en qué meses sube la demanda.
          </p>
          <p>
            Sus datos salen de Google, pero tienen límites: los volúmenes se redondean, las búsquedas con muy poco volumen o consideradas sensibles no aparecen, y la columna de competencia habla de anuncios, no de resultados orgánicos.
          </p>

          <h2 className="text-2xl font-bold text-primary-600">¿Cómo entrar sin crear una campaña de pago?</h2>
          <Lista items={acceso} numerada />
          <p>
            Cuando ya tengas la cuenta, también puedes ir directo a <strong>ads.google.com/aw/keywordplanner/home</strong>. Si no ves la opción de ideas de palabras clave, lo habitual es que falte terminar la configuración de facturación.
          </p>

          <h2 className="text-2xl font-bold text-primary-600">Paso a paso: ¿cómo descubrir palabras clave nuevas?</h2>
          <Lista items={descubrir} numerada />
          <p>
            Un consejo práctico: empieza con términos cortos y amplios, y deja que la herramienta te enseñe las variantes. Las búsquedas largas, con más palabras, suelen tener menos volumen pero una intención más clara, y son las más fáciles de atacar con una página concreta.
          </p>

          <h2 className="text-2xl font-bold text-primary-600">Paso a paso: ¿cómo obtener el volumen y las previsiones?</h2>
          <Lista items={volumen} numerada />
          <p>Lo que conviene saber de las previsiones, según la ayuda de Google Ads:</p>
          <Lista items={previsiones} />
          <p>
            Úsalas para calcular cuánto presupuesto necesitarías en una campaña de búsqueda. Si estás pensando en anunciarte, lo explicamos en <Link href="/sem-publicidad-ppc/" className="text-accent-500 hover:underline">nuestro servicio de Google Ads</Link>; y si ya tienes campañas, revisa antes la <Link href="/auditoria-google-ads-pymes-que-revisar/" className="text-accent-500 hover:underline">auditoría de Google Ads para pymes</Link>.
          </p>

          <h2 className="text-2xl font-bold text-primary-600">¿Cómo se leen los datos: rangos, «competencia» y pujas?</h2>
          <Tabla cabecera={["Columna", "Qué dice Google", "Cómo usarla"]} filas={lectura} />
          <p>
            <strong>Sobre los rangos.</strong> Google no explica en su ayuda a partir de qué gasto se ven cifras exactas. El aviso de Google que recogió Search Engine Journal en 2016 dice que los anunciantes con menor gasto mensual pueden ver una vista de datos limitada. En la práctica verás tramos como 100 – 1K o 1K – 10K. Para decidir qué tema trabajar primero, es suficiente.
          </p>
          <p>
            <strong>Sobre la «competencia».</strong> Es el error más común. Una «competencia alta» significa que muchos anunciantes pujan por esa búsqueda, lo que suele indicar que tiene valor comercial. No dice si es difícil salir en los resultados orgánicos. Para eso hay que mirar quién ocupa la primera página o usar una métrica de dificultad SEO, como la KD % de Semrush.
          </p>

          <h2 className="text-2xl font-bold text-primary-600">Planificador, Search Console o Semrush: ¿qué dato usar para qué?</h2>
          <Tabla cabecera={["Qué necesitas saber", "Planificador de palabras clave", "Search Console", "Semrush"]} filas={comparativa} />
          <p>
            El orden que usamos: primero <strong>Search Console</strong>, para ver por qué búsquedas aparece ya tu web (las que tienen muchas impresiones y pocos clics son las oportunidades más rápidas); después el <strong>Planificador</strong>, para encontrar búsquedas que aún no trabajas y ver su demanda; y por último una herramienta SEO, para estimar la dificultad antes de crear la página. Lo contamos con más detalle en la <Link href="/seo-para-pymes-guia/" className="text-accent-500 hover:underline">guía de SEO para pymes</Link>, y en la <Link href="/auditoria-seo-basica/" className="text-accent-500 hover:underline">auditoría web paso a paso</Link> tienes cómo revisar Search Console.
          </p>

          <BlogBanner variant="seo" />

          <h2 className="text-2xl font-bold text-primary-600">5 errores frecuentes al usar el Planificador</h2>
          <Lista items={errores} numerada />

          <div className="bg-primary-50 rounded-xl p-6 border border-primary-100">
            <p className="font-semibold text-primary-700 mb-2">¿Quieres saber qué búsquedas puede ganar tu web?</p>
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
          <p className="text-sm text-gray-500">Consultadas el 28/10/2026.</p>
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
            Servicios relacionados: <Link href="/sem-publicidad-ppc/" className="text-accent-500 hover:underline">Google Ads y SEM</Link> · <Link href="/seo-posicionamiento-web-organico/" className="text-accent-500 hover:underline">SEO Posicionamiento Web</Link> · <Link href="/auditoria-digital/" className="text-accent-500 hover:underline">Diagnóstico digital gratuito</Link>
          </p>
        </div>

        <nav className="mt-12 pt-8 border-t border-gray-200">
          <Link href="/blog/" className="text-accent-500 hover:text-accent-600 font-medium text-sm">← Volver al blog</Link>
        </nav>
      </article>
      <RelatedArticles currentSlug={SLUG} category="SEO" />
    </>
  );
}
