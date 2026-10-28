import Image from "next/image";
import type { Metadata } from "next";
import Link from "next/link";
import { AuthorByline } from "@/components/AuthorByline";
import { autorSchema } from "@/lib/autor";
import type { ReactNode } from "react";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { RelatedArticles } from "@/components/RelatedArticles";
import { alternatesFor } from "@/lib/i18n/routes";

// 28/10/2026 — tema 5 de la propuesta de blog del 27/10 (estrategia de contenidos y calendario editorial).
// Texto para revisión y fuentes: OneDrive › mktweb360.com › 02-Contenidos › «2026-10-28 ARTÍCULO — Estrategia de contenidos y calendario editorial».
// Datos de IAB Spain: nota de prensa oficial del Estudio de Redes Sociales 2026 (iabspain.es), consultada el 28/10/2026.
// Versiones EN/FR: app/[lang]/(site)/content-strategy-editorial-calendar/ (la FR reexporta la EN).

const SLUG = "estrategia-de-contenidos-calendario-editorial";
const URL = `https://www.mktweb360.com/${SLUG}/`;
const OG = `/og-${SLUG}.jpg`;
const TITLE = "Estrategia de contenidos para empresas (con plantilla de calendario)";
const DESCRIPTION =
  "Estrategia de contenidos en 5 pasos y plantilla de calendario editorial: un tema, cinco piezas (blog, carrusel, vídeo, newsletter y post) y qué medir en cada canal.";
const H1 = "Cómo crear una estrategia de contenidos para tu empresa (con plantilla de calendario editorial)";
const DATE = "2026-11-01";

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
  publisher: { "@type": "Organization", name: "Mkt Web 360 SLU", url: "https://www.mktweb360.com" },
  datePublished: DATE,
  dateModified: DATE,
  image: `https://www.mktweb360.com${OG}`,
  url: URL,
  mainEntityOfPage: URL,
};

const FAQS = [
  {
    q: "¿Qué diferencia hay entre estrategia de contenidos y calendario editorial?",
    a: "La estrategia decide para qué publicas, para quién y sobre qué temas. El calendario editorial es la parte operativa: qué pieza sale, en qué canal, qué día y quién la prepara. Un calendario sin estrategia llena fechas; una estrategia sin calendario se queda en un documento.",
  },
  {
    q: "¿Cada cuánto tiene que publicar una pyme?",
    a: "Con lo que pueda mantener durante un año. Como referencia orientativa, un tema pilar al mes convertido en cinco piezas da para una publicación por semana en cada canal principal. Es mejor ese ritmo constante que tres semanas intensas y dos meses de silencio.",
  },
  {
    q: "¿Qué herramienta necesito para el calendario editorial?",
    a: "Una hoja de cálculo basta: Google Sheets o Excel, con las columnas de la plantilla de este artículo. Las herramientas de programación de redes ayudan a publicar, pero no sustituyen la decisión de qué pieza sirve a qué objetivo.",
  },
  {
    q: "¿Puedo usar IA para crear los contenidos del calendario?",
    a: "Sí, para ordenar ideas, hacer esquemas y preparar borradores. Lo que la IA no puede aportar es tu experiencia: casos, datos propios y criterio. Revisa cada pieza antes de publicarla. Según el Estudio de Redes Sociales 2026 de IAB Spain, el 87 % de los usuarios considera imprescindible etiquetar el contenido generado por IA.",
  },
  {
    q: "¿Cuánto tarda en notarse una estrategia de contenidos?",
    a: "En redes, los guardados y los compartidos de cada pieza se ven en días. En el blog, el tráfico de búsqueda sigue los plazos del SEO: de forma orientativa, de 3 a 6 meses para los primeros resultados y de 6 a 12 para consolidarse. Nadie puede garantizar posiciones ni cifras concretas.",
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

const enlace = (href: string, texto: string) => (
  <Link href={href} className="text-accent-500 hover:underline">{texto}</Link>
);

const resumen: ReactNode[] = [
  <>Una <strong>estrategia de contenidos</strong> responde a cuatro preguntas por pieza: qué función de negocio cumple, a quién va, en qué canal sale y qué acción pide.</>,
  <>Los temas salen de lo que <strong>ya busca tu cliente</strong>: Search Console, el Planificador de palabras clave y las preguntas que te hacen por teléfono o correo.</>,
  <><strong>Un tema, cinco piezas:</strong> un artículo de blog, un carrusel, un vídeo corto, una newsletter y un post de texto.</>,
  <>El <strong>calendario editorial</strong> es una hoja de cálculo con fecha, pieza, canal, función, audiencia, llamada a la acción y métrica. Tienes la plantilla más abajo.</>,
  <>Mide <strong>guardados, compartidos y contactos</strong>, no «me gusta».</>,
];

const diferencia = [
  ["Punto de partida", "«Hay que publicar algo esta semana»", "Un objetivo de negocio y un cliente concreto"],
  ["Temas", "Lo que se le ocurre a quien publica", "Lo que busca y pregunta el cliente"],
  ["Canales", "La misma pieza en todas las redes", "Cada formato adaptado a su canal"],
  ["Llamada a la acción", "Ninguna, o «síguenos»", "Una por pieza: leer, guardar, escribir, pedir presupuesto"],
  ["Medición", "Me gusta y seguidores", "Guardados, compartidos, clics y contactos"],
];

const funciones: ReactNode[] = [
  <><strong>Atraer:</strong> que te encuentre quien todavía no te conoce, en Google, en los asistentes de IA o en el buscador de las redes.</>,
  <><strong>Convencer:</strong> resolver las dudas y objeciones que frenan la compra (precio, plazos, cómo trabajas).</>,
  <><strong>Convertir:</strong> llevar a una acción concreta, como pedir presupuesto, reservar o escribir.</>,
  <><strong>Fidelizar:</strong> que quien ya es cliente vuelva, te recomiende o compre otro servicio.</>,
];

const clienteIdeal: ReactNode[] = [
  <>¿Qué problema tiene justo antes de buscarte, y con qué palabras lo describe?</>,
  <>¿Qué le frena para decidirse: precio, desconfianza, falta de tiempo, no saber qué necesita?</>,
  <>¿Dónde se informa: Google, LinkedIn, Instagram, el correo, un asistente de IA?</>,
];

const fuentesTemas: ReactNode[] = [
  <><strong>Search Console, informe de Rendimiento.</strong> Mira las consultas con impresiones pero en posiciones bajas: Google ya te asocia a ese tema y una pieza mejor puede subirla. Ordénalas por impresiones y agrúpalas por tema.</>,
  <><strong>Planificador de palabras clave.</strong> Te da el volumen orientativo de cada búsqueda y búsquedas relacionadas en las que no habías pensado. Lo explicamos en {enlace("/como-usar-planificador-de-palabras-clave-google-ads/", "cómo usar el Planificador de palabras clave de Google Ads")}.</>,
  <><strong>Preguntas reales de clientes.</strong> Las del teléfono, el correo y las reuniones comerciales. Si tres clientes preguntan lo mismo, es un tema.</>,
  <><strong>El buscador de las redes.</strong> Instagram, TikTok y LinkedIn también se usan para buscar. Lo contamos en {enlace("/seo-social-instagram-tiktok-linkedin-como-buscadores/", "SEO social: las redes como buscadores")}.</>,
];

const piezas = [
  ["Artículo de blog", "Web (Google y asistentes de IA)", "Atraer búsquedas y ser la fuente que se cita", "Pedir el diagnóstico o ver el servicio", "Impresiones y clics por consulta; contactos desde el artículo"],
  ["Carrusel", "LinkedIn e Instagram", "Explicar el método paso a paso", "Guardar y leer el artículo completo", "Guardados y compartidos"],
  ["Vídeo corto", "Reels, Shorts, TikTok o vídeo en LinkedIn", "Enseñar un error o un paso en menos de un minuto", "Seguir la cuenta o comentar una duda", "Compartidos y visualizaciones completas"],
  ["Newsletter", "Correo a tu lista", "Fidelizar y reactivar a quien ya te conoce", "Responder o pedir cita", "Clics y respuestas"],
  ["Post de texto", "LinkedIn", "Dar tu opinión o contar un caso con tu criterio", "Comentar o escribir por mensaje", "Comentarios con contenido y mensajes recibidos"],
];

const plantillaCabecera = ["Fecha", "Tema pilar", "Pieza", "Canal", "Función de negocio", "Audiencia", "Llamada a la acción", "Responsable", "Estado", "Métrica principal", "Resultado"];
const plantillaEjemplo = [
  ["03/11", "Cuánto cuesta reformar un baño", "Artículo de blog", "Web", "Atraer", "Propietario que compara presupuestos", "Pedir presupuesto", "Responsable de marketing", "Borrador", "Clics y contactos", "(rellenar al mes)"],
];

const reparto = [
  ["Semana 1", "Artículo de blog (lunes) y post de texto que lo presenta (viernes)"],
  ["Semana 2", "Carrusel con los pasos del artículo"],
  ["Semana 3", "Vídeo corto con un error frecuente del tema"],
  ["Semana 4", "Newsletter que resume el mes y enlaza al artículo"],
];

const rellenar: ReactNode[] = [
  <><strong>Elige el tema pilar del mes</strong> de tu lista de temas, empezando por el que más se acerque a lo que vendes.</>,
  <><strong>Escribe primero el artículo.</strong> Es la pieza más completa y las demás salen de él.</>,
  <><strong>Rellena una fila por pieza</strong>, con las once columnas. Si una pieza no tiene función ni llamada a la acción clara, quítala.</>,
  <><strong>Asigna responsable y fecha real</strong>, contando el tiempo de revisión.</>,
  <><strong>Al final del mes, rellena «Resultado»</strong> con la métrica principal de cada pieza y decide qué formato repites.</>,
];

const metricas = [
  ["Blog", "Impresiones y clics de las consultas del tema (Search Console)", "Contactos que llegan desde el artículo", "Visitas sin contexto"],
  ["Carrusel", "Guardados y compartidos", "Clics al artículo", "Me gusta"],
  ["Vídeo corto", "Compartidos", "Porcentaje que lo ve entero, si la red lo muestra", "Reproducciones de pocos segundos"],
  ["Newsletter", "Clics", "Respuestas y bajas", "Aperturas como único dato"],
  ["Post de texto", "Comentarios con contenido", "Mensajes y visitas al perfil", "Me gusta"],
];

const rasgosIA: ReactNode[] = [
  <><strong>Responde en las primeras líneas.</strong> Una respuesta directa de dos o tres frases bajo el título, antes del desarrollo, para el lector con prisa y para quien resume la página.</>,
  <><strong>Aporta algo propio.</strong> La guía de Google para sus funciones de IA pide contenido original, con una perspectiva propia o experiencia de primera mano, y no lo que ya repiten otras páginas.</>,
  <><strong>Está ordenado.</strong> Títulos que son preguntas reales, tablas y listas que se entienden solas. Google aclara que no hace falta trocear el texto en fragmentos: el orden es para el lector.</>,
  <><strong>Es una página normal, indexada y rastreable.</strong> Según Google, para aparecer en AI Overviews o el modo IA no hacen falta archivos especiales para IA ni datos estructurados específicos.</>,
];

const fuentes = [
  { texto: "IAB Spain: «IAB Spain presenta el Estudio de Redes Sociales 2026» (19/05/2026, con Elogia; consultado el 28/10/2026).", url: "https://iabspain.es/iab-spain-presenta-estudio-rrss-2026/" },
  { texto: "Google Search Central: Optimizing your website for generative AI features on Google Search (actualizado el 10/07/2026).", url: "https://developers.google.com/search/docs/fundamentals/ai-optimization-guide" },
  { texto: "Google Search Central: AI features and your website.", url: "https://developers.google.com/search/docs/appearance/ai-features" },
  { texto: "Google Search Central: Creating helpful, reliable, people-first content.", url: "https://developers.google.com/search/docs/fundamentals/creating-helpful-content" },
  { texto: "Ayuda de Search Console: informe «Rendimiento» (resultados de la Búsqueda).", url: "https://support.google.com/webmasters/answer/7576553?hl=es" },
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

export default function EstrategiaContenidosPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <article className="mw-article max-w-3xl mx-auto px-4 py-12">
        <Breadcrumbs crumbs={[{ label: "Inicio", href: "/" }, { label: "Blog", href: "/blog/" }, { label: "Estrategia de contenidos y calendario editorial" }]} />

        <header className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="bg-primary-100 text-primary-700 text-xs font-medium px-2.5 py-0.5 rounded-full">Marketing de Contenidos</span>
            <time className="text-sm text-gray-400" dateTime={DATE}>1 de noviembre de 2026</time>
          </div>
          <h1 className="text-4xl font-bold text-primary-600 mb-4 leading-tight">{H1}</h1>
          <AuthorByline block />
          <p className="text-xl text-gray-600 leading-relaxed">
            Cinco pasos para dejar de publicar por publicar: de qué hablar, en qué formato, cuándo y cómo saber si funciona. Con una plantilla de calendario editorial que puedes copiar en tu hoja de cálculo.
          </p>
          <Image src={OG} alt="Tablero de calendario editorial de cuatro semanas: un tema pilar del mes se reparte en cinco fichas de colores, blog, carrusel, vídeo corto, newsletter y post" width={1200} height={630} className="w-full rounded-2xl mt-6" priority />
        </header>

        <div className="text-gray-700 space-y-6 leading-relaxed">
          <p>
            Una estrategia de contenidos decide qué publicas, para quién, en qué canal y con qué objetivo de negocio. El calendario editorial la convierte en fechas, formatos y responsables. El método que proponemos: elegir un tema pilar al mes a partir de lo que busca tu cliente, sacar cinco piezas de él y medir guardados, compartidos y contactos, no «me gusta».
          </p>

          <h2 className="text-2xl font-bold text-primary-600">Resumen rápido</h2>
          <Lista items={resumen} />

          <h2 className="text-2xl font-bold text-primary-600">¿Qué es una estrategia de contenidos y en qué se diferencia de publicar sin más?</h2>
          <p>
            Es el plan que conecta lo que publicas con lo que vende tu empresa. Publicar sin estrategia no es publicar poco: muchas empresas publican a menudo, pero cada pieza va por libre y nadie sabe si sirve para algo.
          </p>
          <Tabla cabecera={["Aspecto", "Publicar sin más", "Con estrategia de contenidos"]} filas={diferencia} />
          <p>
            Nuestro criterio para cada pieza es sencillo: tiene que tener <strong>una función de negocio, una audiencia, un canal y una llamada a la acción</strong>. Si le falta una de las cuatro, no entra en el calendario.
          </p>

          <h2 className="text-2xl font-bold text-primary-600">Paso 1. ¿Para qué publicas y para quién?</h2>
          <p>Empieza por el objetivo de negocio. Cada pieza cumple una de estas cuatro funciones:</p>
          <Lista items={funciones} />
          <p>Después, define a tu cliente ideal con tres preguntas. Si no sabes responderlas, pregúntaselo a tres clientes recientes:</p>
          <Lista items={clienteIdeal} numerada />

          <h2 className="text-2xl font-bold text-primary-600">Paso 2. ¿De qué temas hablar?</h2>
          <p>
            Un tema pilar es un asunto amplio que interesa a tu cliente y que tiene relación directa con lo que vendes. Para una empresa de reformas puede ser «cuánto cuesta reformar un baño»; para una asesoría, «qué gastos puede deducir un autónomo». Salen de cuatro sitios:
          </p>
          <Lista items={fuentesTemas} numerada />
          <p>
            Con doce temas tienes un año de calendario. Ordénalos por cercanía a lo que vendes y por interés de búsqueda, y empieza por arriba.
          </p>

          <h2 className="text-2xl font-bold text-primary-600">Paso 3. ¿Cómo sacar cinco piezas de un solo tema?</h2>
          <p>
            No hace falta inventar cinco ideas distintas. El artículo de blog es la pieza madre y las otras cuatro adaptan una parte a cada canal, con su propio formato y su propia llamada a la acción:
          </p>
          <Tabla cabecera={["Pieza", "Canal", "Función", "Llamada a la acción", "Qué medir"]} filas={piezas} />
          <p>
            Adaptar no es copiar y pegar. Cada canal tiene su tono: en LinkedIn funciona la opinión con criterio, explicada en {enlace("/linkedin-para-pymes-espanolas-en-2026-guia-practica-para-generar-leads/", "LinkedIn para pymes: guía práctica para generar leads")}; en el blog, la respuesta completa. Si usas IA para los borradores, revisa la voz con {enlace("/como-escribir-contenido-que-no-suene-a-ia/", "estas técnicas para que el contenido no suene a IA")}.
          </p>
          <p>
            Las redes no sustituyen al blog. Según el Estudio de Redes Sociales 2026 de IAB Spain, el 54 % de los usuarios ya usa las redes para buscar información antes de comprar online, y el usuario medio visita 7,2 redes. Esa atención se reparte; el artículo de tu web es la pieza que sigue siendo tuya y la que Google puede mostrar. Si aún no tienes blog, mira nuestro servicio de {enlace("/creacion-de-blog/", "creación de blog")}.
          </p>

          <h2 className="text-2xl font-bold text-primary-600">Paso 4. ¿Cómo se hace un calendario editorial? (plantilla)</h2>
          <p>
            Esta es la plantilla que usamos, con una fila de ejemplo. Selecciona la tabla, cópiala y pégala en Google Sheets o Excel: cada columna cae en su celda.
          </p>
          <Tabla cabecera={plantillaCabecera} filas={plantillaEjemplo} />
          <p>Cómo rellenarla:</p>
          <Lista items={rellenar} numerada />
          <p>Y así queda el reparto de un mes con un solo tema pilar:</p>
          <Tabla cabecera={["Semana", "Qué se publica"]} filas={reparto} />
          <p>
            Un calendario editorial para redes sociales es la misma hoja filtrada por canal. No hace falta otro documento: añade una vista por red y verás de un vistazo si alguna se queda vacía o si repites formato.
          </p>

          <h2 className="text-2xl font-bold text-primary-600">Paso 5. ¿Qué medir en cada canal?</h2>
          <p>
            Medimos guardados y compartidos porque dicen más que un «me gusta». Quien guarda una pieza piensa volver a ella porque le resuelve algo. Quien la comparte la recomienda a otra persona. Un «me gusta» cuesta un toque y no dice nada de eso.
          </p>
          <Tabla cabecera={["Canal", "Métrica principal", "Métrica de apoyo", "No usar como objetivo"]} filas={metricas} />
          <p>
            Revisa los datos una vez al mes, con el calendario abierto: anota el resultado de cada pieza y repite los formatos que funcionan con el tema siguiente.
          </p>

          <h2 className="text-2xl font-bold text-primary-600">¿Qué tienen los contenidos que citan las respuestas de IA?</h2>
          <p>
            Para Google hay documentación oficial; para el resto de asistentes no hay una guía equivalente, así que aplicamos los mismos cuatro rasgos:
          </p>
          <Lista items={rasgosIA} numerada />

          <div className="bg-primary-50 rounded-xl p-6 border border-primary-100">
            <p className="font-semibold text-primary-700 mb-2">¿Prefieres que lo hagamos contigo?</p>
            <p className="text-gray-600 text-sm mb-4">
              En nuestro {enlace("/marketing-de-contenidos/", "servicio de marketing de contenidos")} preparamos los temas, el calendario y las piezas. Si antes quieres saber cómo está tu web, el diagnóstico gratuito revisa el estado técnico, tu visibilidad en Google y en asistentes de IA y tres oportunidades de búsqueda. Lo recibes por correo en un máximo de 24 horas laborables, sin compromiso.
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
            Servicios relacionados: {enlace("/marketing-de-contenidos/", "Marketing de contenidos")} · {enlace("/creacion-de-blog/", "Creación de blog")} · {enlace("/auditoria-digital/", "Diagnóstico digital gratuito")}
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
