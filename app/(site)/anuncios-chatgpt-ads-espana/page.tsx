import Image from "next/image";
import type { Metadata } from "next";
import Link from "next/link";
import { AuthorByline } from "@/components/AuthorByline";
import { autorSchema } from "@/lib/autor";
import type { ReactNode } from "react";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { RelatedArticles } from "@/components/RelatedArticles";
import { BlogBanner } from "@/components/BlogBanner";
import { alternatesFor } from "@/lib/i18n/routes";

// 04/11/2026 — tema 9 de la propuesta de blog del 27/10 (anuncios en ChatGPT en España).
// Texto y fuentes: OneDrive › mktweb360.com › 02-Contenidos › «2026-10-28 ARTÍCULO — Tema 9 Anuncios en ChatGPT en España».
// Todos los datos de OpenAI se leyeron en openai.com, ads.openai.com y help.openai.com el 28/10/2026.
// Las condiciones de ChatGPT Ads cambian a menudo: revisar las fuentes antes de cada actualización.

const SLUG = "anuncios-chatgpt-ads-espana";
const URL = `https://www.mktweb360.com/${SLUG}/`;
const OG = "/og-anuncios-chatgpt-ads-espana.jpg";
const TITLE = "Anuncios en ChatGPT en España: qué son y si a tu pyme le compensa";
const DESCRIPTION =
  "ChatGPT Ads ya funciona en España: quién ve los anuncios, cómo se eligen, en qué se diferencian de una mención orgánica y un plan de prueba de 30 días.";
const H1 = "ChatGPT Ads en España: cómo funcionan los anuncios en ChatGPT y cuándo probarlos";
const DATE = "2026-11-04";

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
  datePublished: DATE,
  dateModified: DATE,
  image: `https://www.mktweb360.com${OG}`,
  url: URL,
  mainEntityOfPage: URL,
};

const FAQS = [
  {
    q: "¿Cuánto cuesta anunciarse en ChatGPT?",
    a: "No hay una tarifa fija. Los anuncios se compran en subasta, por impresiones (CPM) o por clics (CPC), y tú fijas la puja máxima y el presupuesto. Para campañas por clic, OpenAI recomienda empezar con una puja máxima de entre 3 y 5 dólares por clic. Es una recomendación de partida, no lo que pagarás.",
  },
  {
    q: "¿Pagar anuncios hace que ChatGPT me recomiende en sus respuestas?",
    a: "No. OpenAI afirma que los anuncios no influyen en las respuestas de ChatGPT, que se ejecutan en sistemas separados y que los anunciantes no pueden modificarlas. Para aparecer dentro de la respuesta hay que trabajar la visibilidad orgánica (GEO).",
  },
  {
    q: "¿ChatGPT usa mi historial para mostrarme anuncios en España?",
    a: "Según OpenAI, los anuncios personalizados no están disponibles inicialmente en el Espacio Económico Europeo ni en Suiza. Sin personalización, los anuncios se eligen por la conversación actual y por un contexto básico, como la ubicación general o el idioma. Los anunciantes no ven las conversaciones.",
  },
  {
    q: "¿Quién ve los anuncios de ChatGPT?",
    a: "Los usuarios adultos de los planes Free y Go. No hay anuncios en Plus, Pro, Business, Enterprise ni Edu, ni en cuentas de menores de 18 años, ni en los chats temporales, ni en conversaciones sobre temas sensibles como la salud o la política.",
  },
  {
    q: "¿Cualquier negocio puede anunciarse en ChatGPT?",
    a: "No. En esta fase OpenAI admite sobre todo consumo, hogar, servicios locales, viajes, productos digitales y educación. Salud, servicios jurídicos y financieros solo se aprueban caso a caso, con revisión manual, y fuera de EE. UU. los servicios financieros están prohibidos por lo general. No se permiten alcohol, tabaco, juego, citas ni política.",
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
  <><strong>Disponibilidad:</strong> OpenAI anunció el 18 de agosto de 2026 la llegada de ChatGPT Ads a 31 mercados europeos, España incluida, y el 31 de agosto abrió el autoservicio en Ads Manager.</>,
  <><strong>Quién los ve:</strong> adultos de los planes Free y Go. Plus, Pro, Business, Enterprise y Edu no tienen anuncios.</>,
  <><strong>Cómo se eligen en España:</strong> por la conversación del momento y un contexto básico. Los anuncios personalizados no están disponibles de inicio en el EEE.</>,
  <><strong>Anuncio no es recomendación:</strong> va debajo de la respuesta, marcado como patrocinado, y según OpenAI no cambia lo que ChatGPT responde.</>,
  <><strong>Para una pyme:</strong> merece una prueba pequeña, con tope de gasto, UTM y conversiones verificadas, si tu categoría está permitida y tienes una página de destino a la altura.</>,
];

const quienNo: ReactNode[] = [
  <>Usuarios de <strong>Plus, Pro, Business, Enterprise y Edu</strong>.</>,
  <>Cuentas identificadas como de <strong>menores de 18 años</strong>.</>,
  <><strong>Chats temporales.</strong></>,
  <>Conversaciones sobre <strong>temas sensibles</strong>: salud personal y mental, política, autolesiones, juego y otras categorías que enumera la política de anuncios.</>,
];

const senales = [
  ["Conversación actual", "Sí", "Es la señal principal: el tema y la intención de lo que se está preguntando"],
  ["Contexto básico (ubicación general, idioma)", "Sí", "OpenAI lo cita como señal aunque la personalización esté desactivada"],
  ["Pistas de contexto del anunciante", "Sí", "Describes temas o conversaciones en los que tu anuncio encaja; no son palabras clave de concordancia exacta"],
  ["Chats anteriores y memoria", "No, de inicio", "Solo con la personalización activada, que no está disponible inicialmente en el EEE ni en Suiza"],
  ["Datos personales del usuario", "No se comparten", "El anunciante recibe datos agregados (impresiones, clics), nunca chats, nombre, email ni ubicación exacta"],
];

const comparativa = [
  ["Qué es", "Un bloque de pago, marcado como «Patrocinado»", "Tu marca citada o recomendada dentro de la respuesta"],
  ["Dónde aparece", "Debajo de la respuesta, separado de ella", "Dentro del texto de la respuesta o en sus fuentes"],
  ["Quién lo ve", "Solo adultos en Free y Go", "Cualquier usuario, de cualquier plan"],
  ["Qué controlas", "Texto, imagen, página de destino, presupuesto, puja y pistas de contexto", "Solo lo que publicas: tu web, tus datos, tus reseñas y menciones en otros sitios"],
  ["Qué no controlas", "En qué conversación exacta sale (las pistas orientan, no garantizan)", "Si te cita, cómo te describe y en qué orden"],
  ["Coste", "Pagas por impresión o por clic", "No pagas a OpenAI; inviertes en contenido y web"],
  ["Cuándo se ve el efecto", "En cuanto la campaña se aprueba y se publica", "Semanas o meses; depende de que te encuentren y te citen"],
  ["Si dejas de invertir", "Desaparece al pausar", "Se mantiene mientras tu contenido siga siendo útil y actual"],
  ["Cómo se mide", "Ads Manager (impresiones, clics, CPC, conversiones) y UTM en GA4", "Batería fija de preguntas cada mes y visitas de chatgpt.com en GA4"],
];

const preguntas: ReactNode[] = [
  <><strong>¿Tu categoría está permitida?</strong> Lee la política de anuncios de OpenAI antes de nada. Si vendes servicios financieros, alcohol, juego o algo relacionado con la salud, puede que no puedas anunciarte o que tu caso pase por revisión manual.</>,
  <><strong>¿Tus clientes preguntan a ChatGPT antes de comprarte?</strong> Haz tú las preguntas que haría tu cliente («qué [producto] me conviene si…», «cómo elegir [servicio]») y mira si la conversación encaja con lo que vendes. Si nadie lo consultaría con un asistente, el canal tiene poco recorrido.</>,
  <><strong>¿Tienes una página de destino que responda a esa conversación?</strong> Quien llega desde ChatGPT ya ha comparado opciones. Necesita precio o rango, condiciones y una forma clara de contactar, no la portada genérica.</>,
  <><strong>¿Puedes medir conversiones reales?</strong> Como mínimo, UTM y un evento clave en GA4. Mejor aún, el píxel de OpenAI o su API de conversiones, más la comprobación de cada contacto en tu CRM.</>,
  <><strong>¿Tienes cubiertos los canales básicos?</strong> Si aún no tienes la ficha de Google bien trabajada ni una campaña de búsqueda que funcione, ese dinero suele rendir antes allí. ChatGPT Ads es un canal para probar, no para empezar.</>,
];

const plan = [
  ["Antes del día 1 · Preparación", "Cuenta en Ads Manager (verificación, facturación y logo), página de destino, UTM, píxel o API de conversiones y evento clave en GA4. Fija el tope total de los 30 días", "La cuenta está verificada y una conversión de prueba aparece en Ads Manager y en GA4"],
  ["Días 1-7 · Lanzamiento", "Una campaña, uno o dos grupos de anuncios por intención (por ejemplo, «comparar» y «contratar»), dos anuncios por grupo, pistas de contexto concretas", "Los anuncios se publican; impresiones y CTR se actualizan cada 15 minutos aprox., el gasto con 7-8 horas de retraso"],
  ["Días 8-21 · Ajuste", "Pausa el grupo o el anuncio con peor CTR, mejora textos e imagen, revisa en GA4 qué hacen las visitas en la página", "CTR por anuncio, tasa de conversión de la página y calidad de los primeros contactos"],
  ["Días 22-30 · Decisión", "Calcula el coste por contacto verificado y compáralo con tus otros canales", "Seguir con más presupuesto, ajustar y repetir 30 días, o parar"],
];

const utm: ReactNode[] = [
  <><strong>utm_source=chatgpt-ads</strong>: distinto de las visitas orgánicas que llegan desde chatgpt.com, para no mezclar pago y orgánico.</>,
  <><strong>utm_medium=cpc</strong> (o <strong>cpm</strong> si compras por impresiones).</>,
  <><strong>utm_campaign=prueba-30d-[servicio]</strong> y <strong>utm_content=[grupo]-[anuncio]</strong> para saber qué anuncio trajo cada contacto.</>,
];

const web: ReactNode[] = [
  <><strong>Una página por intención.</strong> Si el anuncio habla de «café para oficinas», la página habla de eso, con precio o rango, plazos y condiciones. La política de OpenAI exige coherencia entre anuncio y destino.</>,
  <><strong>Medición antes de gastar.</strong> El píxel de OpenAI es una tecnología de seguimiento publicitario: como el de Google Ads o Meta, tiene que pasar por tu banner de consentimiento y figurar en tu política de cookies.</>,
  <><strong>Filtra las visitas de revisión.</strong> OpenAI avisa de que sus rastreadores de revisión visitan las páginas de destino con tus UTM; tu analítica puede contarlas como tráfico de pago, aunque no son clics facturados.</>,
  <><strong>Contenido que responda preguntas.</strong> Las mismas páginas que convierten al visitante del anuncio son las que ayudan a que ChatGPT te cite de forma orgánica. Por eso el anuncio y el GEO se refuerzan.</>,
  <><strong>Nada de imitar a ChatGPT.</strong> La política prohíbe los anuncios que copian el aspecto o la voz de la interfaz de ChatGPT, además de las promesas exageradas o sin prueba.</>,
];

const fuentes = [
  { texto: "OpenAI: «ChatGPT Anuncios se expande por Europa» (18/08/2026, actualizado el 31/08/2026).", url: "https://openai.com/es-ES/index/chatgpt-ads-expands-across-europe/" },
  { texto: "OpenAI Help Center: Anuncios en ChatGPT (preguntas frecuentes de usuarios).", url: "https://help.openai.com/es-es/articles/20001047-ads-in-chatgpt" },
  { texto: "OpenAI Help Center: Anuncios en ChatGPT, conceptos básicos (formato, entrega, precios y medición).", url: "https://help.openai.com/es-es/articles/20001207-ads-in-chatgpt-the-basics" },
  { texto: "OpenAI Help Center: Disponibilidad de Ads Manager por país.", url: "https://help.openai.com/es-es/articles/20001245-ads-manager-availability" },
  { texto: "OpenAI Help Center: Inicio rápido, lanza tu primera campaña.", url: "https://help.openai.com/es-es/articles/20001224-quickstart-launch-your-first-campaign" },
  { texto: "OpenAI: Políticas de publicidad (actualizadas el 10/09/2026).", url: "https://openai.com/es-ES/policies/ad-policies/" },
  { texto: "OpenAI Ads: página para anunciantes en España.", url: "https://ads.openai.com/es-ES" },
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

export default function AnunciosChatgptPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <article className="mw-article max-w-3xl mx-auto px-4 py-12">
        <Breadcrumbs crumbs={[{ label: "Inicio", href: "/" }, { label: "Blog", href: "/blog/" }, { label: "Anuncios en ChatGPT en España" }]} />

        <header className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="bg-primary-100 text-primary-700 text-xs font-medium px-2.5 py-0.5 rounded-full">SEM</span>
            <time className="text-sm text-gray-400" dateTime={DATE}>4 de noviembre de 2026</time>
          </div>
          <h1 className="text-4xl font-bold text-primary-600 mb-4 leading-tight">{H1}</h1>
          <AuthorByline block />
          <p className="text-xl text-gray-600 leading-relaxed">
            Qué son los anuncios de ChatGPT, quién los ve en España, cómo se eligen y en qué se diferencian de que ChatGPT te mencione por sí solo. Con un plan de prueba de 30 días para una pyme.
          </p>
          <Image src={OG} alt="Maqueta de una conversación de chat: la respuesta menciona dos marcas de forma orgánica y debajo aparece un bloque «Patrocinado» señalado como anuncio de pago" width={1200} height={630} className="w-full rounded-2xl mt-6" priority />
        </header>

        <div className="text-gray-700 space-y-6 leading-relaxed">
          <p>
            ChatGPT Ads son los anuncios de pago que OpenAI muestra en ChatGPT. En España funcionan desde finales de agosto de 2026 y las empresas con sede en España pueden contratarlos por autoservicio en Ads Manager. Aparecen debajo de la respuesta, marcados como patrocinados, y solo los ven los usuarios adultos de los planes Free y Go.
          </p>

          <h2 className="text-2xl font-bold text-primary-600">Resumen rápido</h2>
          <Lista items={resumen} />

          <h2 className="text-2xl font-bold text-primary-600">¿Qué son los anuncios de ChatGPT y quién los ve en España?</h2>
          <p>
            OpenAI empezó a probar anuncios en Estados Unidos el 9 de febrero de 2026. El 18 de agosto anunció que llegaban «la próxima semana» a 31 países europeos, entre ellos España, y el 31 de agosto actualizó el anuncio para confirmar que el autoservicio a través del Gestor de anuncios (Ads Manager) ya estaba disponible en esos mercados. A 28 de octubre de 2026, España figura como «Disponible» en la tabla de países de Ads Manager. Para usarlo, la entidad que se anuncia y recibe las facturas tiene que tener su sede en un país de esa lista.
          </p>
          <p>
            Cada anuncio lleva el nombre del anunciante, su favicon, un título, un texto, una imagen y la página de destino. Se muestra debajo de la respuesta de ChatGPT, separado de ella. OpenAI también está probando un formato con varias imágenes durante la generación de imágenes.
          </p>
          <p>Los ven los usuarios de los planes Free y Go. No los ven:</p>
          <Lista items={quienNo} />

          <h2 className="text-2xl font-bold text-primary-600">¿Cómo se decide qué anuncio sale? (segmentación)</h2>
          <p>
            No es una subasta de palabras clave como en Google Ads. El sistema elige por relevancia y resultado esperado, y ordena con una subasta de segundo precio ponderada por relevancia. En el grupo de anuncios escribes <strong>pistas de contexto</strong>: los temas o conversaciones en los que tu producto encaja. Orientan la entrega, pero no garantizan aparecer en una conversación concreta.
          </p>
          <Tabla cabecera={["Señal", "¿Se usa en España?", "Detalle"]} filas={senales} />
          <p>
            En la actualización de agosto, OpenAI cita además la segmentación geográfica y las audiencias personalizadas entre las novedades de la plataforma. Comprueba en tu cuenta de Ads Manager cuáles tienes disponibles, porque la personalización está limitada en Europa.
          </p>

          <h2 className="text-2xl font-bold text-primary-600">¿Cuánto cuesta y cómo se paga?</h2>
          <p>
            Puedes comprar por impresiones (CPM), por clics (CPC) u optimizar para conversiones; en este último caso, con facturación por clic, pagas los clics válidos, no las conversiones. Tú fijas la puja máxima y el presupuesto. Para las campañas de CPC, OpenAI recomienda empezar con una puja máxima de entre 3 y 5 dólares por clic. Es su recomendación de partida: el coste real depende de la subasta y de tu sector, y no hemos encontrado datos oficiales de coste medio en España.
          </p>

          <h2 className="text-2xl font-bold text-primary-600">¿En qué se diferencia un anuncio de una mención orgánica?</h2>
          <p>
            Es la confusión más habitual. Que ChatGPT recomiende tu empresa en su respuesta y que aparezca tu anuncio debajo son dos cosas distintas, que se consiguen de forma diferente. OpenAI insiste en que los anuncios no influyen en las respuestas: pagar no te mete en el texto de la respuesta.
          </p>
          <Tabla cabecera={["", "Anuncio (ChatGPT Ads)", "Mención orgánica (GEO)"]} filas={comparativa} />
          <p>
            La mención orgánica se trabaja con <Link href="/geo-posicionamiento-ia/" className="text-accent-500 hover:underline">GEO, el posicionamiento en respuestas de IA</Link>: contenido que responde bien, datos coherentes en toda la red y menciones en otros sitios. Te explicamos por qué importa en <Link href="/por-que-aparecer-en-chatgpt-perplexity-gemini-importa-mas-que-el-seo-en-2026/" className="text-accent-500 hover:underline">por qué aparecer en ChatGPT, Perplexity y Gemini</Link>, y puedes ver cómo te nombran hoy con una <Link href="/auditoria-geo-aparecer-chatgpt-gemini-google/" className="text-accent-500 hover:underline">auditoría GEO</Link>.
          </p>

          <BlogBanner variant="geo" />

          <h2 className="text-2xl font-bold text-primary-600">¿Le compensa a una pyme? 5 preguntas antes de invertir</h2>
          <Lista items={preguntas} numerada />

          <h2 className="text-2xl font-bold text-primary-600">Plan de prueba de 30 días: estructura, presupuesto cerrado y medición</h2>
          <p>
            La idea es aprender con poco dinero y con una decisión clara al final. Antes de empezar, decide el <strong>gasto total máximo</strong> de la prueba: una cantidad que puedas dar por perdida sin que afecte al negocio. Repártela por días en la campaña y no la amplíes hasta el día 22.
          </p>
          <Tabla cabecera={["Fase", "Qué haces", "Qué miras"]} filas={plan} />
          <p>Las UTM son estáticas y OpenAI confirma que se conservan al hacer clic. Una propuesta para la URL de destino:</p>
          <Lista items={utm} />
          <p>
            Cuenta como conversión verificada solo el contacto o la venta que has comprobado tú: un formulario con datos reales, una llamada que atendiste, un pedido pagado. Las cifras de Ads Manager y de GA4 no siempre coinciden; la que manda para decidir es la de tu CRM o tu facturación.
          </p>
          <p>
            Si ya gestionas campañas de búsqueda, el método es el mismo que en <Link href="/sem-publicidad-ppc/" className="text-accent-500 hover:underline">Google Ads</Link>: objetivos claros, medición antes de gastar y decisiones con datos. Y si te lo lleva una agencia, que el presupuesto de anuncios sea tuyo y transparente, como explicamos en <Link href="/google-ads-sin-comision-agencia-marketing/" className="text-accent-500 hover:underline">Google Ads sin comisión sobre la inversión</Link>.
          </p>

          <h2 className="text-2xl font-bold text-primary-600">¿Qué preparar en tu web antes de anunciarte?</h2>
          <Lista items={web} />

          <div className="bg-primary-50 rounded-xl p-6 border border-primary-100">
            <p className="font-semibold text-primary-700 mb-2">¿Sabes cómo te ve hoy ChatGPT?</p>
            <p className="text-gray-600 text-sm mb-4">
              Antes de pagar por aparecer debajo de la respuesta, mira si ya apareces dentro. Nuestro diagnóstico gratuito revisa tu web, tu visibilidad en Google y en asistentes de IA y tu ficha de Google. Lo recibes por correo en un máximo de 24 horas laborables, sin compromiso.
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
          <p className="text-sm text-gray-500">Todas consultadas el 28/10/2026.</p>
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
            Servicios relacionados: <Link href="/sem-publicidad-ppc/" className="text-accent-500 hover:underline">Gestión de Google Ads</Link> · <Link href="/geo-posicionamiento-ia/" className="text-accent-500 hover:underline">GEO: posicionamiento en IA</Link> · <Link href="/auditoria-digital/" className="text-accent-500 hover:underline">Diagnóstico digital gratuito</Link>
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
