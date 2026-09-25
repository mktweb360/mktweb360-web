import Image from "next/image";
import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { RelatedArticles } from "@/components/RelatedArticles";
import { BlogBanner } from "@/components/BlogBanner";

export const metadata: Metadata = {
  title: { absolute: "Auditoría de Google Ads para pymes: qué revisar paso a paso" },
  description:
    "Cómo saber si estás tirando dinero en Google Ads: conversiones, términos de búsqueda, concordancias, ubicación, presupuesto y landing, paso a paso para pymes.",
  alternates: { canonical: "https://www.mktweb360.com/auditoria-google-ads-pymes-que-revisar/" },
  openGraph: {
    title: "Auditoría de Google Ads para pymes: qué revisar paso a paso | Mkt Web 360",
    description:
      "Cómo saber si estás tirando dinero en Google Ads: conversiones, términos de búsqueda, concordancias, ubicación, presupuesto y landing, paso a paso para pymes.",
    url: "https://www.mktweb360.com/auditoria-google-ads-pymes-que-revisar/",
    type: "article",
    images: [{ url: "/og-auditoria-google-ads-pymes-que-revisar.jpg", width: 1200, height: 630 }],
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "Auditoría de Google Ads para pymes: cómo saber si estás tirando dinero",
  description:
    "Cómo saber si estás tirando dinero en Google Ads: conversiones, términos de búsqueda, concordancias, ubicación, presupuesto y landing, paso a paso para pymes.",
  author: { "@type": "Organization", name: "Mkt Web 360 SLU" },
  publisher: { "@type": "Organization", name: "Mkt Web 360 SLU", url: "https://www.mktweb360.com" },
  datePublished: "2026-09-25",
  dateModified: "2026-09-25",
  image: "https://www.mktweb360.com/og-auditoria-google-ads-pymes-que-revisar.jpg",
  url: "https://www.mktweb360.com/auditoria-google-ads-pymes-que-revisar/",
  mainEntityOfPage: "https://www.mktweb360.com/auditoria-google-ads-pymes-que-revisar/",
};

const FAQS = [
  {
    q: "¿Cómo sé si mis conversiones están bien configuradas?",
    a: "En Objetivos > Conversiones, cada acción debe estar activa, registrar datos recientes y no duplicarse. Haz una prueba real, por ejemplo enviar el formulario tú mismo, y comprueba que aparece. Solo las acciones marcadas como principales deben representar objetivos de negocio.",
  },
  {
    q: "¿Qué son las palabras clave negativas?",
    a: "Son términos por los que no quieres que se muestre tu anuncio, como gratis, empleo o zonas que no atiendes. Se detectan revisando el informe de términos de búsqueda. Añadirlas evita pagar clics que nunca se convertirán en clientes.",
  },
  {
    q: "¿Es mala la concordancia amplia?",
    a: "No necesariamente. Funciona mejor cuando la cuenta tiene conversiones fiables y suficiente volumen para que el algoritmo aprenda. Sin esos datos, suele gastar en búsquedas poco relacionadas. En cuentas pequeñas, frase y exacta dan más control.",
  },
  {
    q: "¿Cuánto debería pagar por cada cliente?",
    a: "Depende de tu margen, tu tasa de cierre y el valor del cliente en el tiempo. Calcula cuánto margen te deja un cliente y multiplícalo por el porcentaje de contactos que cierras: ese es el máximo que puedes pagar por contacto sin perder dinero.",
  },
  {
    q: "¿Cada cuánto hay que revisar una cuenta de Google Ads?",
    a: "Los términos de búsqueda, semanalmente al principio y cada dos semanas cuando la cuenta está estable. Una auditoría completa, cada trimestre o cuando cambias de oferta, precios o web. Las cuentas que no se revisan acumulan gasto en búsquedas irrelevantes.",
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

const concordancias = [
  ["Amplia", "Muestra el anuncio en búsquedas relacionadas con la intención", "Con conversiones fiables, volumen y revisión frecuente de términos"],
  ["Frase", "Búsquedas que incluyen el significado de tu palabra clave", "Equilibrio habitual para pymes"],
  ["Exacta", "Búsquedas con el mismo significado", "Términos de alto valor que quieres controlar"],
];

const landing = [
  <>Dice en los primeros segundos <strong>qué ofreces, para quién y dónde</strong>.</>,
  <>Tiene <strong>una acción principal clara</strong>: llamar, pedir presupuesto o comprar.</>,
  <>Carga rápido y funciona bien en <strong>móvil</strong>, con el teléfono pulsable.</>,
  <>Muestra <strong>confianza</strong>: reseñas reales, datos de empresa, garantías.</>,
  <>Cuenta el <strong>precio o el proceso</strong> cuando es lo que el cliente necesita para decidir.</>,
];

const fuentes = [
  { texto: "Ayuda de Google Ads: Acerca del informe de términos de búsqueda.", url: "https://support.google.com/google-ads/answer/2472708?hl=es" },
  { texto: "Ayuda de Google Ads: Acerca del seguimiento de conversiones.", url: "https://support.google.com/google-ads/answer/1722022?hl=es" },
  { texto: "Ayuda de Google Ads: Acerca de las opciones de concordancia de palabras clave.", url: "https://support.google.com/google-ads/answer/7478529?hl=es" },
  { texto: "Ayuda de Google Ads: Segmentación geográfica.", url: "https://support.google.com/google-ads/answer/1722038?hl=es" },
  { texto: "Ayuda de Google Ads: Acerca de los presupuestos medios diarios.", url: "https://support.google.com/google-ads/answer/2375454?hl=es" },
  { texto: "Ayuda de Google Ads: Experiencia en la página de destino.", url: "https://support.google.com/google-ads/answer/6238826?hl=es" },
];

export default function AuditoriaGoogleAdsPymesPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <article className="max-w-3xl mx-auto px-4 py-12">
        <Breadcrumbs crumbs={[{ label: "Inicio", href: "/" }, { label: "Blog", href: "/blog/" }, { label: "Auditoría de Google Ads para pymes" }]} />

        <header className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="bg-primary-100 text-primary-700 text-xs font-medium px-2.5 py-0.5 rounded-full">SEM</span>
            <time className="text-sm text-gray-400" dateTime="2026-09-25">25 de septiembre de 2026</time>
          </div>
          <h1 className="text-4xl font-bold text-primary-600 mb-4 leading-tight">
            Auditoría de Google Ads para pymes: cómo saber si estás tirando dinero
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Checklist práctico para revisar tu cuenta de Google Ads sin ser técnico: conversiones, búsquedas reales, concordancias, ubicación, presupuesto, estructura y página de destino.
          </p>
          <Image
            src="/og-auditoria-google-ads-pymes-que-revisar.jpg"
            alt="Auditoría de Google Ads para pymes: qué revisar paso a paso"
            width={1200}
            height={630}
            className="w-full rounded-2xl mt-6"
            priority
          />
        </header>

        <div className="text-gray-700 space-y-6 leading-relaxed">
          <p>
            Una campaña de Google Ads no se evalúa por los clics ni por las impresiones, sino por las <strong>acciones que valen dinero</strong>: ventas, formularios, llamadas o clientes cualificados. Para saber si estás tirando presupuesto, revisa por este orden: <strong>conversiones, términos de búsqueda, concordancias, ubicación, presupuesto, estructura y página de destino</strong>. Este checklist te permite hacerlo aunque no seas técnico.
          </p>

          <h2 className="text-2xl font-bold text-primary-600">Resumen rápido</h2>
          <ul className="space-y-3">
            {[
              <>Sin <strong>conversiones fiables</strong> no puedes saber si Ads es rentable, y el algoritmo tampoco puede optimizar.</>,
              <>El <strong>informe de términos de búsqueda</strong> muestra lo que la gente escribió realmente antes de hacer clic.</>,
              <>La <strong>concordancia amplia</strong> necesita datos, negativas y vigilancia.</>,
              <>Revisa si tu campaña llega a personas <strong>que están</strong> en tu zona o solo a quienes <strong>se interesan</strong> por ella.</>,
              <>El coste por conversión solo tiene sentido comparado con tu <strong>margen y tasa de cierre</strong>.</>,
              <>La <strong>landing</strong> debe cumplir exactamente lo que promete el anuncio.</>,
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3 p-4 border border-gray-200 rounded-xl">
                <span className="text-primary-600 font-bold shrink-0 mt-0.5">▸</span>
                <span className="text-gray-600 text-sm">{item}</span>
              </li>
            ))}
          </ul>

          <h2 className="text-2xl font-bold text-primary-600">1. Conversiones: lo primero y lo más importante</h2>
          <p>Entra en <em>Objetivos &gt; Conversiones</em> y comprueba:</p>
          <ul className="space-y-3">
            {[
              <><strong>Que se mide cada acción de negocio</strong>: compra, envío de formulario, llamada desde el anuncio, clic en WhatsApp o reserva.</>,
              <><strong>Que no hay duplicados</strong>. Un mismo formulario contado dos veces (por ejemplo, desde Google Ads y desde Analytics a la vez) infla los resultados.</>,
              <><strong>Qué acciones son principales</strong>. Solo esas guían las pujas automáticas. Si marcas como principal algo irrelevante, como una visita a una página, el algoritmo optimizará para eso.</>,
              <><strong>El estado de la etiqueta</strong>. Si aparece como inactiva o sin conversiones recientes, no estás midiendo nada.</>,
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3 p-4 border border-gray-200 rounded-xl">
                <span className="text-primary-600 font-bold shrink-0 mt-0.5">▸</span>
                <span className="text-gray-600 text-sm">{item}</span>
              </li>
            ))}
          </ul>
          <p>
            Si tu venta se cierra fuera de la web, por teléfono o con presupuesto, valora <strong>importar conversiones offline</strong>: lead cualificado, presupuesto aceptado o venta cerrada. Es la forma de que Google aprenda qué clics acaban en dinero.
          </p>

          <h2 className="text-2xl font-bold text-primary-600">2. Términos de búsqueda: qué escribió realmente la gente</h2>
          <p>
            Tus palabras clave no son lo que la gente busca. En <em>Estadísticas e informes &gt; Términos de búsqueda</em> verás las consultas reales que activaron tus anuncios. Ordena por coste y busca:
          </p>
          <ul className="space-y-3">
            {[
              <>Búsquedas <strong>informativas</strong> (qué es, cómo hacer, gratis).</>,
              <>Búsquedas de <strong>empleo o formación</strong> (trabajo, curso, máster).</>,
              <><strong>Zonas</strong> donde no das servicio.</>,
              <><strong>Marcas de la competencia</strong>, si no quieres pujar por ellas.</>,
              <>Términos con <strong>gasto y cero conversiones</strong>.</>,
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3 p-4 border border-gray-200 rounded-xl">
                <span className="text-primary-600 font-bold shrink-0 mt-0.5">▸</span>
                <span className="text-gray-600 text-sm">{item}</span>
              </li>
            ))}
          </ul>
          <p>
            Añade las irrelevantes como <strong>palabras clave negativas</strong> y convierte en palabra clave propia las consultas buenas que se repiten.
          </p>

          <h2 className="text-2xl font-bold text-primary-600">3. Concordancias: alcance frente a control</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-primary-600 text-white">
                  <th className="px-4 py-3 text-left font-semibold">Concordancia</th>
                  <th className="px-4 py-3 text-left font-semibold">Qué hace</th>
                  <th className="px-4 py-3 text-left font-semibold">Cuándo usarla</th>
                </tr>
              </thead>
              <tbody>
                {concordancias.map(([tipo, que, cuando]) => (
                  <tr key={tipo} className="border-b border-gray-200 even:bg-gray-50">
                    <td className="px-4 py-3 font-medium text-gray-800">{tipo}</td>
                    <td className="px-4 py-3 text-gray-600">{que}</td>
                    <td className="px-4 py-3 text-gray-600">{cuando}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p>
            La amplia puede funcionar bien cuando el sistema tiene datos de conversión de calidad. Sin ellos, suele gastar en búsquedas poco relacionadas.
          </p>

          <h2 className="text-2xl font-bold text-primary-600">4. Ubicación: presencia o interés</h2>
          <p>
            En la configuración de la campaña, revisa las <strong>opciones de ubicación</strong>. Si está marcada la opción que incluye a personas que <strong>muestran interés</strong> por tu zona, tu anuncio puede aparecer a alguien en otra provincia que busca información sobre ella. Para un negocio local, lo normal es segmentar por <strong>presencia</strong>: personas que están o suelen estar en tu zona.
          </p>
          <p>
            Consulta también el informe de ubicaciones para ver <strong>dónde se generó el gasto realmente</strong>, excluye las zonas que no atiendes y ajusta la programación a tu horario de atención si trabajas con llamadas.
          </p>

          <h2 className="text-2xl font-bold text-primary-600">5. Redes y recomendaciones automáticas</h2>
          <p>Dos comprobaciones rápidas que ahorran mucho dinero:</p>
          <ul className="space-y-3">
            {[
              <>En campañas de Búsqueda, revisa si están activadas <strong>la Red de Display</strong> y los <strong>socios de búsqueda</strong>. Pueden tener sentido, pero deben ser una decisión consciente y medida.</>,
              <>En <em>Recomendaciones</em>, revisa si hay <strong>recomendaciones aplicadas automáticamente</strong>. Algunas cambian palabras clave, pujas o presupuestos sin que lo revises.</>,
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3 p-4 border border-gray-200 rounded-xl">
                <span className="text-primary-600 font-bold shrink-0 mt-0.5">▸</span>
                <span className="text-gray-600 text-sm">{item}</span>
              </li>
            ))}
          </ul>

          <BlogBanner variant="default" />

          <h2 className="text-2xl font-bold text-primary-600">6. Presupuesto y rentabilidad</h2>
          <p>
            Ordena las campañas por coste y mira cuántas conversiones y cuánto valor generan. El dato clave no es el CPA (coste por adquisición) aislado, sino si es rentable. Un ejemplo:
          </p>
          <blockquote className="border-l-4 border-accent-500 bg-primary-50 px-6 py-4 rounded-r-xl text-gray-700 italic">
            Si cada cliente te deja 300 € de margen y cierras 1 de cada 4 contactos, puedes pagar como máximo unos 75 € por contacto antes de perder dinero.
          </blockquote>
          <p>
            Haz tu propia cuenta con tus números reales de margen, tasa de cierre y valor del cliente en el tiempo. Revisa también si alguna campaña está <strong>limitada por presupuesto</strong> mientras otra gasta sin resultados: redistribuir suele ser más rentable que subir la inversión.
          </p>

          <h2 className="text-2xl font-bold text-primary-600">7. Estructura y anuncios</h2>
          <p>
            Separa en campañas o grupos distintos lo que tiene intenciones distintas: <strong>marca</strong>, cada <strong>servicio</strong>, cada <strong>zona</strong> y cada <strong>objetivo</strong>. Si mezclas reforma de baño y reforma de cocina en el mismo grupo, el anuncio no podrá hablar con precisión de ninguna de las dos.
          </p>
          <p>Cada grupo debe tener anuncios que repitan la intención de la búsqueda y lleven a una página coherente con ella.</p>

          <h2 className="text-2xl font-bold text-primary-600">8. Página de destino</h2>
          <p>El anuncio trae el clic; la landing lo convierte. Comprueba que tu página:</p>
          <ul className="space-y-3">
            {landing.map((item, i) => (
              <li key={i} className="flex items-start gap-3 p-4 border border-gray-200 rounded-xl">
                <span className="text-primary-600 font-bold shrink-0 mt-0.5">▸</span>
                <span className="text-gray-600 text-sm">{item}</span>
              </li>
            ))}
          </ul>
          <p>
            Si necesitas mejorarla, esta guía sobre <Link href="/como-crear-landing-page-que-convierte/" className="text-accent-500 hover:underline">cómo crear una landing page que convierte</Link> recoge los elementos clave.
          </p>

          <h2 className="text-2xl font-bold text-primary-600">Cada cuánto repetir esta auditoría</h2>
          <p>
            Revisa <strong>términos de búsqueda cada semana</strong> al principio y cada dos semanas cuando la cuenta esté estable. Haz la <strong>auditoría completa cada trimestre</strong> o cuando cambies de servicio, precio o web. Si tienes dudas sobre si te conviene más invertir en anuncios o en posicionamiento, esta comparativa sobre <Link href="/cuando-elegir-seo-vs-google-ads/" className="text-accent-500 hover:underline">cuándo elegir SEO o Google Ads</Link> te ayuda a decidir. Y si trabajas con una agencia, comprueba cómo cobra: una comisión sobre la inversión premia gastar más, no gastar mejor. Lo explicamos en <Link href="/google-ads-sin-comision-agencia-marketing/" className="text-accent-500 hover:underline">Google Ads sin comisión sobre presupuesto</Link>.
          </p>

          <div className="bg-primary-50 rounded-xl p-6 border border-primary-100">
            <p className="font-semibold text-primary-700 mb-2">¿Quieres que revisemos tu cuenta de Google Ads?</p>
            <p className="text-gray-600 text-sm mb-4">En Mkt Web 360 gestionamos campañas sin comisión sobre tu inversión. Te decimos qué está funcionando, qué no y qué cambiaríamos, con datos de tu propia cuenta.</p>
            <Link href="/sem-publicidad-ppc/" className="inline-block bg-accent-500 text-white px-6 py-2.5 rounded-full font-semibold text-sm hover:bg-accent-600 transition-colors">
              Ver servicio SEM
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
            Servicios relacionados: <Link href="/sem-publicidad-ppc/" className="text-accent-500 hover:underline">SEM y Publicidad PPC</Link> · <Link href="/analitica-web/" className="text-accent-500 hover:underline">Analítica Web</Link>
          </p>
        </div>

        <nav className="mt-12 pt-8 border-t border-gray-200">
          <Link href="/blog/" className="text-accent-500 hover:text-accent-600 font-medium text-sm">← Volver al blog</Link>
        </nav>
      </article>
      <RelatedArticles currentSlug="auditoria-google-ads-pymes-que-revisar" />
    </>
  );
}
