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

// 02/11/2026 — refuerzo del tema 7 de la propuesta de blog del 27/10 (misma URL; publicado el 13/06/2026).
// Texto para revisión y fuentes: OneDrive › mktweb360.com › 02-Contenidos › «2026-10-28 ARTÍCULO — Tema 7 Landing page».
// Ejemplos de demostración, sin marcas de terceros ni cifras de conversión. Lo de Google Ads, solo lo que dice su ayuda oficial.

const SLUG = "como-crear-landing-page-que-convierte";
const URL = `https://www.mktweb360.com/${SLUG}/`;
const OG = "/og-como-crear-landing-page-que-convierte-v2.jpg";
const TITLE = "Landing page: qué es, ejemplos que convierten y errores";
const DESCRIPTION =
  "Qué es una landing page, ejemplos anotados por tipo de pyme, un diagnóstico en 10 preguntas si tu landing no convierte y lo que pide Google Ads.";
const H1 = "Qué es una landing page y cómo crear una que convierta (con ejemplos)";
const DATE_PUBLISHED = "2026-06-13";
const DATE = "2026-11-02";

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
  datePublished: DATE_PUBLISHED,
  dateModified: DATE,
  image: `https://www.mktweb360.com${OG}`,
  url: URL,
  mainEntityOfPage: URL,
};

const FAQS = [
  {
    q: "¿Qué tasa de conversión es buena para una landing page?",
    a: "No hay una cifra que sirva para todos: depende del sector, de la oferta y de si la visita llega desde un anuncio, desde Google o desde redes. La comparación útil es con tu propia página: la misma landing antes y después de un cambio, con el mismo tipo de tráfico y el mismo periodo.",
  },
  {
    q: "¿La landing page tiene que estar fuera de mi web?",
    a: "No. Puede ser una página más de tu dominio, con su propia URL. Así mides todo en la misma propiedad de analítica y el visitante ve la misma marca que en el anuncio o en Google.",
  },
  {
    q: "¿Una landing page larga o corta?",
    a: "Depende de lo que cueste decidir. Un servicio urgente necesita poco texto y un teléfono a mano. Una compra cara o un servicio para empresas necesita más contenido, porque hay más dudas que resolver antes de dar el paso.",
  },
  {
    q: "¿Cuántas landing pages necesito?",
    a: "Una por cada servicio u oferta con una intención distinta. No hace falta una por palabra clave: búsquedas casi iguales pueden ir a la misma página si el visitante encuentra en ella justo lo que buscaba.",
  },
  {
    q: "¿Se puede hacer un test A/B con poco tráfico?",
    a: "Con pocas visitas, un test A/B tarda mucho en dar un resultado fiable. En ese caso es mejor corregir primero los fallos evidentes del diagnóstico (titular, formulario, móvil y medición) y comparar periodos.",
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
  <>Una <strong>landing page</strong> tiene <strong>un solo objetivo</strong>: que el visitante pida presupuesto, reserve, compre o descargue algo.</>,
  <>Funciona cuando <strong>repite lo que la persona buscó</strong> o lo que prometía el anuncio, y quita todo lo que distrae de esa acción.</>,
  <>Los ejemplos que siguen están <strong>anotados con 5 elementos que puedes comprobar</strong> en tu propia página, según el tipo de negocio.</>,
  <>Si tu landing no convierte, revisa por este orden: <strong>mensaje, tráfico, formulario, móvil y medición</strong>.</>,
  <>Para Google Ads cuenta la <strong>experiencia en la página de destino</strong>, uno de los tres componentes del nivel de calidad.</>,
];

const diferencias = [
  ["Objetivo", "Presentar la empresa y repartir la visita por la web", "Conseguir una acción concreta"],
  ["De dónde llega la visita", "De la marca, de enlaces y de búsquedas variadas", "De un anuncio, una campaña o una búsqueda concreta"],
  ["Navegación", "Menú completo con muchas salidas", "Sin menú o con el mínimo imprescindible"],
  ["Mensaje", "General: todo lo que hace la empresa", "Uno solo: el servicio u oferta que se buscaba"],
  ["Cómo se mide", "Visitas y recorrido por la web", "Porcentaje de visitas que completan la acción"],
];

const elementos: ReactNode[] = [
  <><strong>Titular que repite la búsqueda o el anuncio.</strong> Servicio y beneficio en una frase: «Reparación de calderas con presupuesto previo» dice más que «Soluciones integrales para tu hogar».</>,
  <><strong>Subtítulo que dice para quién es y qué incluye.</strong> Zona de servicio, plazo o qué recibe el cliente, con datos que puedas cumplir.</>,
  <><strong>Una acción principal.</strong> Un botón con un texto que dice lo que pasa al pulsarlo («Pedir presupuesto», «Reservar cita»), no «Enviar» ni «Más información». Puede repetirse a lo largo de la página, pero siempre es la misma acción.</>,
  <><strong>Formulario corto.</strong> Solo lo que necesitas para el primer contacto, con la información de privacidad (RGPD) y, aparte, la casilla de comunicaciones comerciales.</>,
  <><strong>Pruebas reales.</strong> Reseñas de Google, colegiaciones, años de actividad, garantías o fotos de trabajos propios. Nada de testimonios inventados ni logos de clientes sin permiso.</>,
  <><strong>Respuesta a las dudas que frenan.</strong> Precio o cómo se calcula, plazos, zona de servicio, qué pasa después de enviar el formulario. Unas preguntas frecuentes cortas resuelven buena parte.</>,
  <><strong>Rápida en el móvil y bien medida.</strong> Que cargue deprisa, que el botón se vea sin hacer scroll en el móvil y que cada formulario o llamada se registre como conversión.</>,
];

type Ejemplo = { titulo: string; contexto: string; items: ReactNode[] };

const ejemplos: Ejemplo[] = [
  {
    titulo: "Servicio local: reparación de calderas",
    contexto: "La persona tiene un problema hoy y busca desde el móvil. La acción principal es llamar o pedir presupuesto.",
    items: [
      <><strong>Titular:</strong> el servicio y la zona en la que trabajas, igual que en el anuncio.</>,
      <><strong>Botón de llamada</strong> visible en el móvil sin hacer scroll, que marque al pulsarlo.</>,
      <><strong>Plazo de respuesta</strong> escrito, solo si lo puedes cumplir siempre.</>,
      <><strong>Reseñas de Google</strong> con enlace a tu ficha, para que se puedan comprobar.</>,
      <><strong>Formulario de 3 campos:</strong> nombre, teléfono o email y qué necesita.</>,
    ],
  },
  {
    titulo: "Clínica: primera visita de fisioterapia",
    contexto: "Aquí pesan la confianza y la cercanía. La acción principal es reservar cita.",
    items: [
      <><strong>Tratamiento concreto</strong> en el titular, no un lema general sobre la salud.</>,
      <><strong>Quién atiende</strong>, con su titulación y número de colegiación.</>,
      <><strong>Qué incluye la primera visita</strong>, cuánto dura y su precio o cómo se fija.</>,
      <><strong>Reserva sencilla:</strong> horarios disponibles o un formulario con la franja que prefiere.</>,
      <><strong>Formulario sin datos de salud</strong> y sin promesas de resultados: el detalle clínico se trata en consulta.</>,
    ],
  },
  {
    titulo: "Tienda online: landing de una campaña de producto",
    contexto: "La persona compara precios y condiciones. La acción principal es añadir al carrito.",
    items: [
      <><strong>Producto y precio</strong> arriba, con el IVA indicado.</>,
      <><strong>Gastos y plazo de envío</strong> visibles antes del carrito, no al final.</>,
      <><strong>Un solo botón de compra</strong>, sin banners de otras ofertas alrededor.</>,
      <><strong>Fotos propias y medidas</strong> o tallas, que es lo que más dudas genera.</>,
      <><strong>Devoluciones y reseñas de compradores</strong> enlazadas desde la misma página.</>,
    ],
  },
  {
    titulo: "Empresa B2B: servicio para otras empresas",
    contexto: "Decide más de una persona y la venta es más larga. La acción principal es pedir una reunión o descargar un documento.",
    items: [
      <><strong>Titular con el problema del sector</strong> y el tipo de empresa al que te diriges.</>,
      <><strong>Cómo funciona</strong> en tres o cuatro pasos, con plazos.</>,
      <><strong>Referencias o casos</strong> solo si son reales y el cliente lo ha autorizado.</>,
      <><strong>Formulario que cualifica:</strong> email de empresa y una pregunta sobre tamaño o necesidad. Lo explicamos en <Link href="/como-generar-leads-calidad-pyme/" className="text-accent-500 hover:underline">cómo generar leads de calidad</Link>.</>,
      <><strong>Qué pasa después:</strong> quién contesta, por qué medio y en qué plazo.</>,
    ],
  },
];

const ejemploPropio: ReactNode[] = [
  <><strong>Titular con promesa y plazo:</strong> «Diagnóstico gratuito de tu presencia en Google y en la IA, en 24 horas, en tu correo».</>,
  <><strong>Tres viñetas que quitan riesgo:</strong> sin coste y sin compromiso; revisado por un especialista; SEO, IA y ficha de Google en el mismo informe.</>,
  <><strong>Formulario junto al titular:</strong> solo nombre, email y web son obligatorios; teléfono, ficha de Google y objetivo son opcionales.</>,
  <><strong>Qué se recibe y cómo funciona</strong>, explicado en bloques antes de las preguntas frecuentes.</>,
  <><strong>La misma acción al final:</strong> el botón «Solicitar mi auditoría gratuita» devuelve al formulario.</>,
];

const errores: ReactNode[] = [
  <><strong>Varios objetivos a la vez:</strong> llamar, escribir, seguir en redes y suscribirse en la misma pantalla.</>,
  <><strong>Menú completo de la web:</strong> cada enlace es una salida antes de convertir.</>,
  <><strong>Formulario largo:</strong> pedir dirección, empresa o presupuesto disponible cuando aún no hacen falta.</>,
  <><strong>Mandar el anuncio a la página de inicio</strong> en lugar de a la página del servicio anunciado.</>,
  <><strong>Página pensada para el ordenador:</strong> en el móvil el botón queda abajo o el formulario cuesta de rellenar.</>,
  <><strong>Pruebas que no se pueden comprobar:</strong> testimonios sin nombre, cifras sin origen o fotos de banco de imágenes.</>,
];

const diagnostico: ReactNode[] = [
  <><strong>¿El titular repite lo que la persona buscó o lo que prometía el anuncio?</strong> Si no, reescríbelo con el servicio y el beneficio.</>,
  <><strong>¿Se entiende en unos segundos qué ofreces, a quién y dónde?</strong> Enséñasela a alguien que no conozca tu negocio y pregúntale.</>,
  <><strong>¿Hay una sola acción principal?</strong> Si hay tres botones distintos, elige uno.</>,
  <><strong>¿Se ve el botón o el formulario sin hacer scroll en el móvil?</strong> Compruébalo en tu propio teléfono.</>,
  <><strong>¿El formulario pide solo lo imprescindible?</strong> Quita los campos que no uses en la primera respuesta.</>,
  <><strong>¿Hay pruebas reales y comprobables?</strong> Reseñas de Google, colegiaciones, garantías o trabajos propios.</>,
  <><strong>¿Respondes a las dudas que frenan?</strong> Precio o cómo se calcula, plazo, zona y qué pasa después.</>,
  <><strong>¿Carga rápido en el móvil?</strong> PageSpeed Insights, la herramienta gratuita de Google, te dice qué la frena.</>,
  <><strong>¿Llega el tráfico adecuado?</strong> Mira los términos de búsqueda en Google Ads o las consultas en Search Console: si no tienen que ver con tu servicio, el problema está antes de la página.</>,
  <><strong>¿Se mide bien la conversión?</strong> A veces la landing sí convierte, pero el formulario o las llamadas no se registran. Haz una prueba y comprueba que aparece en Google Analytics 4 o en Google Ads.</>,
];

const sintomas = [
  ["Muchas visitas y casi ningún contacto", "El mensaje no coincide con lo que se buscaba, o el tráfico no es el adecuado", "1, 2 y 9"],
  ["La gente sale nada más entrar", "Carga lenta o la página no es lo que prometía el anuncio", "1 y 8"],
  ["Empiezan el formulario y no lo terminan", "Demasiados campos o errores al enviarlo", "4 y 5"],
  ["Llegan contactos que no encajan", "Promesa ambigua o falta información que filtre", "2 y 7"],
  ["Analítica en cero pero llegan correos", "La conversión no se está registrando", "10"],
];

const googleAds = [
  ["La página guarda estrecha relación con el anuncio y las palabras clave", "Optimizar anuncios y páginas de destino"],
  ["La página corresponde a la llamada a la acción del anuncio", "Optimizar anuncios y páginas de destino"],
  ["Información útil y original sobre lo que anuncias, con lo importante cerca de la parte superior", "Optimizar anuncios y páginas de destino"],
  ["Navegación sencilla, sin exceso de anuncios ni ventanas emergentes, y pensada para el móvil", "Optimizar anuncios y páginas de destino"],
  ["Coherencia del mensaje desde el anuncio y mejor velocidad de carga", "Cinco formas de utilizar el nivel de calidad"],
  ["El destino funciona, se puede rastrear, es accesible y coincide con la URL visible", "Requisitos del destino (políticas)"],
];

const herramientas = [
  ["WordPress", "Ya tienes la web en WordPress y quieres editar tú los textos", "Usar una plantilla sin menú, no cargar plugins de más y cuidar la velocidad en el móvil"],
  ["Next.js u otro framework", "Quieres control total del código, del rendimiento y de la medición", "Necesita un desarrollador para cada cambio de diseño"],
  ["Constructores de landings", "Necesitas publicar campañas rápido y probar variantes", "Cuota mensual, dominio propio bien configurado y que no dupliquen el contenido de tu web"],
];

const fuentes = [
  { texto: "Ayuda de Google Ads: Acerca del nivel de calidad de las campañas de búsqueda.", url: "https://support.google.com/google-ads/answer/2404197?hl=es" },
  { texto: "Ayuda de Google Ads: Optimizar anuncios y páginas de destino.", url: "https://support.google.com/google-ads/answer/6238826?hl=es" },
  { texto: "Ayuda de Google Ads: Cinco formas de utilizar el nivel de calidad para mejorar el rendimiento.", url: "https://support.google.com/google-ads/answer/6167130?hl=es" },
  { texto: "Ayuda de Google Ads: Evaluar el rendimiento de las páginas de destino.", url: "https://support.google.com/google-ads/answer/7543502?hl=es" },
  { texto: "Políticas de Google Ads: Requisitos del destino.", url: "https://support.google.com/adspolicy/answer/6368661?hl=es" },
  { texto: "PageSpeed Insights, herramienta gratuita de Google.", url: "https://pagespeed.web.dev/" },
];

function Tabla({ cabecera, filas }: { cabecera: string[]; filas: string[][] }) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full text-sm border-collapse">
        <thead>
          <tr className="bg-primary-600 text-white">
            {cabecera.map((c, i) => (
              <th key={i} className="px-4 py-3 text-left font-semibold">{c}</th>
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

export default function LandingPageQueConviertePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
        <AuthorByline block />

      <article className="mw-article max-w-3xl mx-auto px-4 py-12">
        <Breadcrumbs crumbs={[{ label: "Inicio", href: "/" }, { label: "Blog", href: "/blog/" }, { label: "Landing page: qué es y ejemplos" }]} />

        <header className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="bg-primary-100 text-primary-700 text-xs font-medium px-2.5 py-0.5 rounded-full">Diseño Web</span>
            <time className="text-sm text-gray-400" dateTime={DATE}>Actualizado el 2 de noviembre de 2026</time>
          </div>
          <h1 className="text-4xl font-bold text-primary-600 mb-4 leading-tight">{H1}</h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Cuatro ejemplos de landing page por tipo de pyme, anotados con lo que puedes comprobar en la tuya, y un diagnóstico en 10 preguntas para cuando la página recibe visitas pero no contactos.
          </p>
          <Image
            src={OG}
            alt="Dos esquemas de landing page comparados: antes, con titular genérico, menú con seis salidas, tres botones, formulario de ocho campos y foto de banco; después, con titular de servicio y beneficio, sin menú, un solo botón, formulario de tres campos y reseñas reales"
            width={1200}
            height={630}
            className="w-full rounded-2xl mt-6"
            priority
          />
        </header>

        <div className="text-gray-700 space-y-6 leading-relaxed">
          <p>
            Una <strong>landing page</strong> (página de aterrizaje) es una página web pensada para que el visitante haga una sola cosa: pedir presupuesto, reservar, comprar o descargar algo. A diferencia de la página de inicio, no presenta toda la empresa: responde a una búsqueda o a un anuncio concreto y quita todo lo que distrae de esa acción.
          </p>

          <h2 className="text-2xl font-bold text-primary-600">Resumen rápido</h2>
          <Lista items={resumen} />

          <h2 className="text-2xl font-bold text-primary-600">¿Qué es una landing page y en qué se diferencia de la página de inicio?</h2>
          <p>
            La página de inicio tiene que servir a todo el mundo: clientes, candidatos, proveedores y gente que solo quiere el teléfono. Una landing page sirve a una sola persona con una sola necesidad. Por eso suele llevar menos enlaces, un mensaje más concreto y un único botón.
          </p>
          <Tabla cabecera={["Aspecto", "Página de inicio", "Landing page"]} filas={diferencias} />
          <p>
            Es la página a la que conviene llevar las <Link href="/sem-publicidad-ppc/" className="text-accent-500 hover:underline">campañas de Google Ads</Link>: quien pulsa un anuncio de «reparación de calderas» quiere ver eso, no la portada con todos tus servicios.
          </p>

          <h2 className="text-2xl font-bold text-primary-600">¿Qué elementos tiene una landing page que convierte?</h2>
          <p>No hay una plantilla única, pero estos siete elementos aparecen en casi todas las que funcionan:</p>
          <Lista items={elementos} numerada />

          <h2 className="text-2xl font-bold text-primary-600">Landing page: ejemplos anotados por tipo de negocio</h2>
          <p>
            Son ejemplos de demostración, descritos en lugar de capturados, para que puedas comparar con tu página punto por punto. Cada uno tiene cinco elementos que se comprueban con solo abrir la página en el móvil.
          </p>
          {ejemplos.map((e) => (
            <section key={e.titulo} className="space-y-3">
              <h3 className="text-xl font-bold text-primary-700">{e.titulo}</h3>
              <p>{e.contexto}</p>
              <Lista items={e.items} numerada />
            </section>
          ))}

          <section className="space-y-3">
            <h3 className="text-xl font-bold text-primary-700">Un ejemplo real: nuestra página de diagnóstico gratuito</h3>
            <p>
              La página de <Link href="/auditoria-digital/" className="text-accent-500 hover:underline">diagnóstico gratuito</Link> de Mkt Web 360 es una landing con una sola acción: pedir el informe. Estos son sus cinco elementos:
            </p>
            <Lista items={ejemploPropio} numerada />
            <p>
              Mantiene el menú de la web porque también recibe visitas desde el blog y desde Google, no solo de anuncios. En una landing solo para campañas lo quitaríamos.
            </p>
          </section>

          <h2 className="text-2xl font-bold text-primary-600">¿Qué errores hacen que una landing page no convierta?</h2>
          <Lista items={errores} />
          <p>
            Si estos fallos se repiten en toda la web y no solo en una página, quizá toque algo más que un retoque: repasa las <Link href="/senales-web-necesita-rediseno/" className="text-accent-500 hover:underline">señales de que tu web necesita un rediseño</Link>.
          </p>

          <BlogBanner variant="default" />

          <h2 className="text-2xl font-bold text-primary-600">Mi landing no convierte: diagnóstico en 10 preguntas</h2>
          <p>Respóndelas con la página abierta en el móvil. Cada «no» es una tarea concreta:</p>
          <Lista items={diagnostico} numerada />
          <p>Para saber por dónde empezar, cruza lo que ves en tus datos con las preguntas:</p>
          <Tabla cabecera={["Síntoma", "Causa probable", "Preguntas que revisar"]} filas={sintomas} />

          <h2 className="text-2xl font-bold text-primary-600">¿Qué pide Google Ads a una landing page?</h2>
          <p>
            Según la ayuda de Google Ads, la <strong>experiencia en la página de destino</strong> es uno de los tres componentes del nivel de calidad y mide la relevancia y utilidad de la página para quien hace clic en el anuncio. Se valora comparándola con los anuncios de otros anunciantes que se mostraron para la misma búsqueda en los últimos 90 días, y su estado puede ser «Por encima de la media», «Media» o «Por debajo de la media».
          </p>
          <p>Lo que recomienda Google en su documentación oficial:</p>
          <Tabla cabecera={["Qué pide Google", "Dónde lo dice"]} filas={googleAds} />
          <p>
            El informe «Páginas de destino» de Google Ads muestra, para cada URL, los clics, el CTR y el porcentaje de clics que llegan a páginas optimizadas para móviles. Es el primer sitio que mirar si la experiencia en la página de destino sale «Por debajo de la media».
          </p>

          <h2 className="text-2xl font-bold text-primary-600">¿Con qué herramienta se crea una landing page?</h2>
          <p>
            Con casi cualquiera. Lo que hace que convierta es el contenido y la velocidad, no la herramienta. Esta tabla no es un ranking, sino cuándo encaja cada opción:
          </p>
          <Tabla cabecera={["Opción", "Encaja si…", "A vigilar"]} filas={herramientas} />
          <p>
            Si prefieres que la diseñemos nosotros, lo hacemos dentro del servicio de <Link href="/diseno-de-paginas-web/" className="text-accent-500 hover:underline">diseño de páginas web</Link>, con la medición de conversiones incluida.
          </p>

          <div className="bg-primary-50 rounded-xl p-6 border border-primary-100">
            <p className="font-semibold text-primary-700 mb-2">¿Tu landing recibe visitas pero no contactos?</p>
            <p className="text-gray-600 text-sm mb-4">
              Nuestro diagnóstico gratuito revisa el estado técnico de tu web, tu visibilidad en Google y en asistentes de IA, tu ficha de Google y tres oportunidades de búsqueda. Lo recibes por correo en un máximo de 24 horas laborables, sin compromiso.
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
                {f.texto} Consultado el 28/10/2026.{" "}
                <a href={f.url} target="_blank" rel="noopener noreferrer" className="text-accent-500 hover:underline break-all">
                  {f.url}
                </a>
              </li>
            ))}
          </ol>

          <p className="text-sm text-gray-500 pt-4">
            Servicios relacionados: <Link href="/diseno-de-paginas-web/" className="text-accent-500 hover:underline">Diseño de páginas web</Link> · <Link href="/sem-publicidad-ppc/" className="text-accent-500 hover:underline">Gestión de Google Ads</Link> · <Link href="/auditoria-digital/" className="text-accent-500 hover:underline">Diagnóstico gratuito</Link>
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
