import Image from "next/image";
import type { Metadata } from "next";
import Link from "next/link";
import type { ReactNode } from "react";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { RelatedArticles } from "@/components/RelatedArticles";
import { alternatesFor } from "@/lib/i18n/routes";

// 03/11/2026 — tema 8 de la propuesta de blog del 27/10 (AI Max en Google Ads).
// Texto, fuentes y verificación: OneDrive › mktweb360.com › 02-Contenidos › «2026-10-28 ARTÍCULO — AI Max en Google Ads».
// Fechas de migración comprobadas el 28/10/2026 en la ayuda de Google Ads y en el blog de Google (actualización del 11/06/2026).
// Si Google vuelve a cambiar el calendario, cambiarlo aquí y en las versiones EN/FR.

const SLUG = "ai-max-google-ads-que-es-como-controlarlo";
const URL = `https://www.mktweb360.com/${SLUG}/`;
const OG = "/og-ai-max-google-ads-que-es-como-controlarlo.jpg";
const TITLE = "AI Max en Google Ads: qué es y cómo ponerle límites (pymes)";
const DESCRIPTION =
  "AI Max amplía tus campañas de búsqueda con IA. Qué cambia frente a la concordancia amplia y las DSA, cuándo migra Google y 7 comprobaciones antes de activarlo.";
const H1 = "AI Max en Google Ads: qué cambia en tus campañas de búsqueda y cómo mantener el control";
const DATE = "2026-11-03";

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
    q: "¿AI Max es un tipo de campaña nuevo?",
    a: "No. Según la ayuda de Google Ads, es una capa de optimización que se activa dentro de una campaña de búsqueda. Tus palabras clave, anuncios, negativas y presupuesto siguen ahí; AI Max añade la optimización de términos de búsqueda, la personalización de texto y la expansión de URL final.",
  },
  {
    q: "¿Puedo desactivar AI Max?",
    a: "Sí. Google indica que al desactivarlo se apagan todas sus funciones y que, si lo vuelves a activar, se recuperan los ajustes anteriores. También puedes apagar solo la optimización de términos de búsqueda en un grupo de anuncios concreto.",
  },
  {
    q: "¿AI Max funciona con CPC manual?",
    a: "Solo en parte. Google explica que la optimización de términos de búsqueda no funciona con CPC manual y recomienda una estrategia de puja basada en conversiones o en valor de conversión.",
  },
  {
    q: "¿Se respetan mis palabras clave negativas?",
    a: "Sí. La ayuda de Google Ads dice que las palabras clave negativas se respetan con AI Max activado. Aun así, conviene revisar el informe de términos de búsqueda antes de añadir negativas nuevas, para no cortar búsquedas que sí convierten.",
  },
  {
    q: "¿Qué pasa si no hago nada con mis anuncios dinámicos de búsqueda (DSA)?",
    a: "Según la ayuda de Google Ads, a partir de febrero de 2027 las campañas con DSA se actualizarán automáticamente a AI Max: los grupos dinámicos pasan a ser grupos estándar y los anuncios dinámicos, anuncios de búsqueda adaptables. Es mejor revisar antes las exclusiones de URL y los textos, o hacer la actualización tú mismo con un experimento.",
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
  <>AI Max tiene <strong>tres funciones</strong> que se activan por separado: optimización de términos de búsqueda, personalización de texto y expansión de URL final.</>,
  <>Según Google, las <strong>campañas de búsqueda nuevas</strong> lo traen activado por defecto.</>,
  <><strong>Migración automática:</strong> Google pasa a AI Max las campañas con recursos creados automáticamente y con concordancia amplia a nivel de campaña desde septiembre de 2026, y las campañas con DSA desde febrero de 2027.</>,
  <>La optimización de términos de búsqueda <strong>no funciona con CPC manual</strong>: Google recomienda pujar por conversiones.</>,
  <>Nuestra regla: <strong>no se activa sin un seguimiento de conversiones verificado</strong>, porque la IA aprende de esas conversiones.</>,
];

const funciones: ReactNode[] = [
  <><strong>Optimización de términos de búsqueda.</strong> Amplía tus palabras clave con concordancia amplia y con tecnología «sin palabras clave», que usa tus anuncios, tus palabras clave y tu web para encontrar búsquedas nuevas. Se puede apagar en cada grupo de anuncios.</>,
  <><strong>Personalización de texto</strong> (antes «recursos creados automáticamente»). Genera títulos y descripciones a partir de tus anuncios, tus páginas de destino y tus recursos.</>,
  <><strong>Expansión de URL final.</strong> Envía al usuario a la página de tu dominio que mejor encaja con lo que ha buscado, dentro del tema del grupo de anuncios. Necesita la personalización de texto: si la apagas, la expansión de URL final se apaga también.</>,
];

const comparativa = [
  ["Qué es", "Un ajuste que trata todas las palabras clave de la campaña como amplias", "Un tipo de anuncio que se dirige a búsquedas a partir del contenido de tu web", "Una capa de funciones dentro de una campaña de búsqueda"],
  ["Cómo elige las búsquedas", "A partir de tus palabras clave", "A partir de las páginas de tu web", "Palabras clave, concordancia amplia y coincidencias sin palabras clave"],
  ["Textos del anuncio", "Los que escribes tú", "Títulos generados con el contenido de tu web", "Tus anuncios adaptables más los textos que genera la personalización de texto"],
  ["Página de destino", "La que fijas tú", "La que elige Google en tu web", "La tuya o la que elige la expansión de URL final"],
  ["Controles principales", "Palabras clave negativas", "Objetivos y exclusiones de páginas", "Negativas, exclusiones de marca y de URL, inclusiones, ubicaciones de interés y directrices de texto"],
  ["Qué pasará", "Pasa a AI Max desde septiembre de 2026", "Pasa a AI Max desde febrero de 2027", "Es el destino de las otras dos"],
];

const migracion = [
  ["Recursos creados automáticamente (hoy, personalización de texto)", "Septiembre de 2026", "AI Max con optimización de términos de búsqueda y personalización de texto activadas"],
  ["Concordancia amplia a nivel de campaña", "Septiembre de 2026", "AI Max con optimización de términos de búsqueda activada"],
  ["Anuncios dinámicos de búsqueda (DSA)", "Febrero de 2027 (antes anunciado para septiembre de 2026)", "Grupos dinámicos → grupos estándar; DSA → anuncios de búsqueda adaptables; las tres funciones activadas y los controles de URL que ya tenías se mantienen"],
];

const comprobaciones: ReactNode[] = [
  <><strong>Seguimiento de conversiones verificado.</strong> Cada formulario, llamada o compra se registra una sola vez, con su valor y sin duplicados. Pruébalo tú antes de encender nada. Sin datos fiables, la IA optimiza hacia lo que no te interesa.</>,
  <><strong>Puja por conversiones y fuera del periodo de aprendizaje.</strong> Con CPC manual la optimización de términos de búsqueda no funciona. Y nuestra regla: si la estrategia de puja inteligente está aprendiendo (porque es nueva o la acabas de cambiar), no se toca ni se activa AI Max hasta que termine.</>,
  <><strong>Presupuesto que no esté limitado.</strong> Google advierte de que AI Max no será eficaz si la campaña está limitada por presupuesto. Si ya te quedas sin presupuesto cada día, ampliar búsquedas solo reparte el mismo dinero entre más consultas.</>,
  <><strong>Términos de búsqueda revisados antes de añadir negativas.</strong> Google recomienda esperar al menos dos semanas tras activar AI Max antes de hacer cambios como añadir negativas. Después, revisa el informe de términos y excluye lo que no tiene relación con tu negocio, no lo que simplemente no conocías.</>,
  <><strong>Exclusiones de marca.</strong> Se configuran a nivel de campaña (las inclusiones, también por grupo de anuncios). Decide si quieres aparecer en búsquedas de competidores y de marcas que no vendes.</>,
  <><strong>Expansión de URL final y exclusiones de URL.</strong> Excluye las páginas a las que no quieres mandar tráfico de pago: empleo, blog, avisos legales o servicios que ya no ofreces. Comprueba también que tus plantillas de seguimiento funcionan con las URL que elige Google.</>,
  <><strong>Textos generados bajo control.</strong> Revisa los recursos que ha creado la IA de Google en el informe de recursos. Con las directrices de texto (en beta) puedes vetar hasta 25 términos y fijar hasta 40 restricciones de mensaje por campaña: precios, plazos o promesas que no puedes cumplir.</>,
];

const informes: ReactNode[] = [
  <><strong>Términos de búsqueda.</strong> Filtra el tipo de concordancia «AI Max» para ver qué búsquedas ha añadido. La vista de combinaciones de términos de búsqueda y anuncios muestra, además, el título y la página de destino que se usaron.</>,
  <><strong>Palabras clave.</strong> Al final de la tabla hay dos filas de totales: las coincidencias ampliadas por AI Max y las que vienen de las páginas de destino.</>,
  <><strong>Recursos.</strong> A nivel de campaña, una pestaña recoge las URL finales ampliadas. En el informe de cada anuncio, los textos generados aparecen marcados como añadidos por la IA de Google.</>,
  <><strong>Páginas de destino.</strong> Muestra el rendimiento de cada URL, incluidas las de la expansión de URL final, y una columna indica si la eligió AI Max.</>,
];

const senales = [
  ["Búsquedas sin relación con tu negocio", "Añadir negativas, después de revisar el informe"],
  ["Anuncios en búsquedas de competidores que no quieres", "Exclusión de marca en la campaña"],
  ["Tráfico a páginas que no convierten", "Exclusión de URL o apagar la expansión de URL final"],
  ["Textos con promesas que no puedes cumplir", "Quitar el recurso y añadir una directriz de texto"],
  ["Sube el coste por conversión tras la prueba", "Comparar con un experimento y apagar la función que lo provoca"],
];

const encaje = [
  ["Conversiones", "Medidas, fiables y con volumen suficiente", "Sin medir o con formularios que no se registran"],
  ["Puja", "Por conversiones y estable", "CPC manual o una puja recién cambiada"],
  ["Presupuesto", "No se agota cada día", "Limitado por presupuesto a diario"],
  ["Web", "Páginas de servicio claras, una por servicio", "Poco contenido o páginas que mezclan servicios"],
  ["Tiempo", "Alguien revisa términos y textos cada semana", "Nadie revisa la cuenta"],
];

const fuentes = [
  { texto: "Ayuda de Google Ads: Acerca de AI Max para campañas de búsqueda.", url: "https://support.google.com/google-ads/answer/15910366" },
  { texto: "Ayuda de Google Ads: Cómo funciona AI Max para campañas de búsqueda (controles de marca, URL y ubicaciones).", url: "https://support.google.com/google-ads/answer/15910187" },
  { texto: "Ayuda de Google Ads: Configurar AI Max para campañas de búsqueda (actualización de DSA, personalización de texto y expansión de URL final).", url: "https://support.google.com/google-ads/answer/15909989" },
  { texto: "Ayuda de Google Ads: Preguntas frecuentes sobre AI Max.", url: "https://support.google.com/google-ads/answer/15913066" },
  { texto: "Ayuda de Google Ads: Informes de AI Max para campañas de búsqueda.", url: "https://support.google.com/google-ads/answer/16470459" },
  { texto: "Ayuda de Google Ads: Directrices de texto (beta).", url: "https://support.google.com/google-ads/answer/16489313" },
  { texto: "Ayuda de Google Ads: Experimentos de AI Max.", url: "https://support.google.com/google-ads/answer/16450159" },
  { texto: "Ayuda de Google Ads: Acerca del ajuste de campaña de concordancia amplia (actualización a AI Max desde septiembre de 2026).", url: "https://support.google.com/google-ads/answer/13389795" },
  { texto: "Ayuda de Google Ads: Acerca de los anuncios dinámicos de búsqueda (actualización a AI Max desde febrero de 2027).", url: "https://support.google.com/google-ads/answer/2471185" },
  {
    texto: "Blog de Google: Dynamic Search Ads are upgrading to AI Max (15/04/2026, actualizado el 11/06/2026).",
    url: "https://blog.google/products/ads-commerce/dsa-upgrade-to-ai-max-2026/",
  },
  {
    texto: "Google Ads Developer Blog: Dynamic Search Ads (DSA) Automigration Delayed to February 2027 (11/06/2026).",
    url: "https://ads-developers.googleblog.com/2026/06/dynamic-search-ads-dsa-automigration.html",
  },
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

export default function AiMaxGoogleAdsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <article className="mw-article max-w-3xl mx-auto px-4 py-12">
        <Breadcrumbs crumbs={[{ label: "Inicio", href: "/" }, { label: "Blog", href: "/blog/" }, { label: "AI Max en Google Ads" }]} />

        <header className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="bg-primary-100 text-primary-700 text-xs font-medium px-2.5 py-0.5 rounded-full">SEM</span>
            <time className="text-sm text-gray-400" dateTime={DATE}>3 de noviembre de 2026</time>
          </div>
          <h1 className="text-4xl font-bold text-primary-600 mb-4 leading-tight">{H1}</h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Google está pasando las campañas de búsqueda a AI Max, en algunos casos de forma automática. Te contamos qué hace cada función, qué fechas ha dado Google y qué revisar antes de dejar que la IA amplíe tus anuncios.
          </p>
          <Image src={OG} alt="Panel de control ilustrado de AI Max: un dial de concordancia de exacta a IA, interruptores de términos de búsqueda, textos generados y expansión de URL final, y exclusiones de marcas y de URL" width={1200} height={630} className="w-full rounded-2xl mt-6" priority />
        </header>

        <div className="text-gray-700 space-y-6 leading-relaxed">
          <p>
            AI Max es un conjunto de funciones de Google Ads que se activa dentro de una campaña de búsqueda, no un tipo de campaña nuevo. Amplía las búsquedas en las que aparece tu anuncio, genera textos a partir de tu web y puede llevar al usuario a otra página de tu dominio. Todo se puede limitar con ajustes y exclusiones.
          </p>

          <h2 className="text-2xl font-bold text-primary-600">Resumen rápido</h2>
          <Lista items={resumen} />

          <h2 className="text-2xl font-bold text-primary-600">¿Qué es AI Max en Google Ads?</h2>
          <p>
            Google lo describe como una capa de optimización para las campañas de búsqueda que reúne mejoras de segmentación y de anuncios. En la ayuda de Google en español también aparece como «IA Max». Tiene tres funciones:
          </p>
          <Lista items={funciones} numerada />
          <p>
            Además de estas funciones, AI Max añade controles que antes no tenían las campañas de búsqueda: exclusiones e inclusiones de marca, exclusiones e inclusiones de URL, ubicaciones de interés por grupo de anuncios y directrices para los textos generados.
          </p>

          <h2 className="text-2xl font-bold text-primary-600">¿Qué cambia frente a la concordancia amplia y las DSA?</h2>
          <Tabla cabecera={["", "Concordancia amplia de campaña", "DSA", "AI Max"]} filas={comparativa} />
          <p>
            Un detalle que pasa desapercibido si usabas el ajuste de concordancia amplia de campaña: con ese ajuste, Google trata cada palabra clave como si existiera también en exacta a la hora de elegir cuál se usa. Al pasar a AI Max eso deja de ocurrir. Si quieres conservar esa prioridad, Google indica que añadas copias de esas palabras clave en concordancia exacta. Si estás montando la lista de palabras clave desde cero, te sirve nuestra guía del <Link href="/como-usar-planificador-de-palabras-clave-google-ads/" className="text-accent-500 hover:underline">Planificador de palabras clave de Google Ads</Link>.
          </p>

          <h2 className="text-2xl font-bold text-primary-600">Migración automática: ¿qué hará Google y cuándo?</h2>
          <p>
            Google anunció el 15 de abril de 2026 que las DSA, los recursos creados automáticamente y la concordancia amplia a nivel de campaña pasarían a AI Max a partir de septiembre de 2026. El 11 de junio actualizó ese anuncio: las DSA se retrasan a febrero de 2027 y el resto mantiene septiembre de 2026. Por eso encontrarás artículos con fechas distintas. Este es el calendario que figura hoy en la ayuda y en el blog de Google:
          </p>
          <Tabla cabecera={["Qué tienes", "Paso a AI Max, según Google", "Cómo queda"]} filas={migracion} />
          <p>
            Puedes adelantarte: Google ofrece una herramienta para actualizar las DSA y un aviso en la interfaz para el resto. Al actualizar una campaña con DSA, los anuncios dinámicos antiguos siguen funcionando durante un periodo de transición y se pausan cuando los nuevos anuncios adaptables ya están aptos. Las fechas pueden volver a cambiar: comprueba los avisos de tu cuenta y la ayuda de Google Ads antes de planificar.
          </p>

          <h2 className="text-2xl font-bold text-primary-600">7 comprobaciones antes de activar AI Max</h2>
          <p>Sirven igual si lo vas a activar tú o si Google va a migrar tu campaña:</p>
          <Lista items={comprobaciones} numerada />
          <p>
            Si quieres medir el efecto antes de decidir, Google permite crear un experimento de AI Max que reparte el tráfico y el presupuesto de la propia campaña entre una parte con AI Max y otra sin él, sin duplicar la campaña. Si no aplicas el resultado, la campaña vuelve a sus ajustes anteriores.
          </p>

          <h2 className="text-2xl font-bold text-primary-600">¿Cómo se leen los informes de AI Max?</h2>
          <p>Hay cuatro sitios donde ver lo que ha hecho la IA:</p>
          <Lista items={informes} />
          <p>Y lo que suele tocar después, según lo que veas:</p>
          <Tabla cabecera={["Lo que ves", "Qué hacer"]} filas={senales} />
          <p>
            Si llevas tiempo sin revisar la cuenta en conjunto, empieza por nuestra <Link href="/auditoria-google-ads-pymes-que-revisar/" className="text-accent-500 hover:underline">auditoría de Google Ads para pymes</Link>: conversiones, búsquedas reales, concordancias y página de destino, antes de añadir más automatización.
          </p>

          <h2 className="text-2xl font-bold text-primary-600">¿Le compensa AI Max a una pyme?</h2>
          <p>
            Google afirma que los anunciantes que no son del sector retail y activan AI Max obtienen de media un 14 % más de conversiones o de valor de conversión con un CPA o ROAS similar (datos internos de Google, 2025). Es un dato del propio Google sobre medias de muchos anunciantes, no una previsión para tu cuenta. Lo que decide si te conviene es tu punto de partida:
          </p>
          <Tabla cabecera={["Criterio", "Tiene sentido probarlo", "Mejor esperar"]} filas={encaje} />
          <p>
            Si todavía dudas entre invertir en anuncios o en posicionamiento orgánico, lo comparamos en <Link href="/cuando-elegir-seo-vs-google-ads/" className="text-accent-500 hover:underline">cuándo elegir SEO o Google Ads</Link>. Y si te preocupa cuánto se lleva la agencia, mira qué significa trabajar con <Link href="/google-ads-sin-comision-agencia-marketing/" className="text-accent-500 hover:underline">Google Ads sin comisión sobre el presupuesto</Link>.
          </p>

          <div className="bg-primary-50 rounded-xl p-6 border border-primary-100">
            <p className="font-semibold text-primary-700 mb-2">¿Prefieres que alguien revise AI Max por ti?</p>
            <p className="text-gray-600 text-sm mb-4">
              En la gestión de Google Ads verificamos el seguimiento de conversiones, configuramos las exclusiones y añadimos negativas a partir de los términos de búsqueda reales. Tarifa fija mensual, sin comisión sobre tu inversión.
            </p>
            <Link href="/sem-publicidad-ppc/" className="inline-block bg-accent-500 text-white px-6 py-2.5 rounded-full font-semibold text-sm hover:bg-accent-600 transition-colors">
              Ver la gestión de Google Ads
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
          <p className="text-sm text-gray-500">Consultadas el 28 de octubre de 2026.</p>
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
            Servicios relacionados: <Link href="/sem-publicidad-ppc/" className="text-accent-500 hover:underline">Gestión de Google Ads</Link> · <Link href="/auditoria-digital/" className="text-accent-500 hover:underline">Diagnóstico digital gratuito</Link>
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
