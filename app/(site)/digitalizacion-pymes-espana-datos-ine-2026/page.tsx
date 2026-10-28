import Image from "next/image";
import type { Metadata } from "next";
import Link from "next/link";
import type { ReactNode } from "react";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { RelatedArticles } from "@/components/RelatedArticles";
import { alternatesFor } from "@/lib/i18n/routes";

// 29/10/2026 — tema 10 de la propuesta de blog del 27/10 (pieza de datos).
// Texto y fuentes: OneDrive › mktweb360.com › 02-Contenidos › «2026-10-28 ARTÍCULO — Tema 10 Radiografía pyme digital INE 2026».
// Cifras leídas el 28/10/2026 en la nota de prensa del INE del 22/10/2026 (ETICCE20251T2026). Si el INE revisa los datos, cambiarlos aquí,
// en la versión EN/FR (app/[lang]/(site)/sme-digitalisation-spain-ine-data-2026) y en la infografía (public/og-digitalizacion-pymes-espana-datos-ine-2026.jpg).

const SLUG = "digitalizacion-pymes-espana-datos-ine-2026";
const URL = `https://www.mktweb360.com/${SLUG}/`;
const OG = "/og-digitalizacion-pymes-espana-datos-ine-2026.jpg";
const TITLE = "Pymes y digitalización en España 2026: los datos oficiales del INE";
const DESCRIPTION =
  "Tiene web el 36,2 % de las empresas de menos de 10 empleados con internet, frente al 82,9 % de las de 10 o más. Web, redes, IA y venta online según el INE (2026).";
const H1 = "Radiografía 2026 de la pyme digital en España: web, redes, IA y comercio electrónico según el INE";
const DATE = "2026-10-29";
const INE_URL = "https://www.ine.es/dyngs/Prensa/ETICCE20251T2026.htm";

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

// Tabla principal (visible en la sección «Los 5 datos clave»). El Dataset describe solo esta tabla.
const datosClave = [
  ["Tienen página web", "36,2 %", "82,9 %", "Empresas con conexión a internet · 1.er trimestre de 2026"],
  ["Usan redes sociales", "32,1 %", "65,4 %", "Empresas con conexión a internet · 1.er trimestre de 2026"],
  ["Emplean inteligencia artificial", "21,4 %", "33,6 %", "Empresas con conexión a internet · 1.er trimestre de 2026"],
  ["Vendieron por comercio electrónico", "11,8 %", "29,0 %", "Total de empresas · año 2025"],
  ["Tienen conexión a internet", "81,2 %", "98,3 %", "Total de empresas · 1.er trimestre de 2026"],
];

const datasetSchema = {
  "@context": "https://schema.org",
  "@type": "Dataset",
  name: "Uso de la web, las redes sociales, la IA y el comercio electrónico en las empresas españolas por tamaño (INE, 2026)",
  description:
    "Resumen de cinco indicadores de la Encuesta sobre el uso de TIC y del comercio electrónico en las empresas del INE (año 2025 y primer trimestre de 2026, datos definitivos), comparando las empresas de menos de 10 empleados con las de 10 o más.",
  url: `${URL}#datos-clave`,
  creator: { "@type": "Organization", name: "Instituto Nacional de Estadística (INE)", url: "https://www.ine.es" },
  publisher: { "@type": "Organization", name: "Mkt Web 360 SLU", url: "https://www.mktweb360.com" },
  citation: `INE. Encuesta sobre el uso de TIC y del comercio electrónico en las empresas. Año 2025 - Primer trimestre 2026. Nota de prensa, 22/10/2026. ${INE_URL}`,
  isBasedOn: INE_URL,
  datePublished: DATE,
  temporalCoverage: "2025/2026",
  spatialCoverage: { "@type": "Place", name: "España" },
  isAccessibleForFree: true,
  variableMeasured: datosClave.map((d) => d[0]),
};

const FAQS = [
  {
    q: "¿Cuántas pymes españolas tienen página web en 2026?",
    a: "Según el INE, en el primer trimestre de 2026 tiene web el 36,2 % de las empresas de menos de 10 empleados con conexión a internet y el 82,9 % de las de 10 o más. Dicho al revés, casi dos de cada tres microempresas conectadas no tienen página propia.",
  },
  {
    q: "¿Cuántas empresas usan inteligencia artificial en España?",
    a: "El 33,6 % de las empresas de 10 o más empleados y el 21,4 % de las de menos de 10 emplearon alguna tecnología de IA en el primer trimestre de 2026, en ambos casos sobre las empresas con conexión a internet. En las de 10 o más, el sector servicios es el que más la usa (38,2 %).",
  },
  {
    q: "¿Se pueden comparar estos datos con los de años anteriores?",
    a: "No del todo. El INE avisa de que los datos de este año no son estrictamente comparables con los anteriores, porque desde el año de referencia 2025 clasifica la actividad con la CNAE-2025 y ha incluido en la encuesta la división 56 y el grupo 95.1. Las series sirven para ver la tendencia, no para calcular variaciones exactas.",
  },
  {
    q: "¿Qué periodo cubren los datos?",
    a: "Las preguntas sobre uso de las TIC (web, redes, IA, conexión) se refieren al primer trimestre de 2026. El comercio electrónico se refiere a todo el año 2025.",
  },
  {
    q: "¿Cada cuánto publica el INE esta encuesta?",
    a: "Es una encuesta anual. La muestra ronda las 15.000 empresas de 10 o más empleados y las 10.000 de menos de 10, y sigue la metodología de Eurostat, así que la próxima edición permitirá actualizar estas cifras.",
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
  <><strong>Web:</strong> la tiene el 36,2 % de las empresas de menos de 10 empleados con internet y el 82,9 % de las de 10 o más.</>,
  <><strong>Redes sociales:</strong> las usa el 32,1 % de las de menos de 10 y el 65,4 % de las de 10 o más.</>,
  <><strong>Inteligencia artificial:</strong> la emplea el 21,4 % de las de menos de 10 y el 33,6 % de las de 10 o más.</>,
  <><strong>Venta online:</strong> en 2025 vendió por comercio electrónico el 11,8 % de las de menos de 10 y el 29,0 % de las de 10 o más.</>,
  <><strong>Conexión:</strong> el 81,2 % de las empresas de menos de 10 empleados tiene internet, frente al 98,3 % de las de 10 o más.</>,
];

const evolucion = [
  ["Tienen página web", "37,0 % → 36,2 %", "84,5 % → 82,9 %"],
  ["Usan redes sociales", "37,8 % → 32,1 %", "69,7 % → 65,4 %"],
  ["Emplean inteligencia artificial", "13,4 % → 21,4 %", "21,1 % → 33,6 %"],
  ["Vendieron por comercio electrónico (2024 → 2025)", "8,6 % → 11,8 %", "26,6 % → 29,0 %"],
];

const sectoresIA = [
  ["Servicios", "38,2 %", "41,9 %", "35,1 %"],
  ["Industria", "29,1 %", "37,5 %", "27,7 %"],
  ["Construcción", "22,6 %", "32,9 %", "7,0 %"],
  ["Total", "33,6 %", "39,4 %", "29,0 %"],
];

const otrasTecnologias = [
  ["Software de gestión empresarial (ERP)", "60,9 %"],
  ["Cloud computing de pago", "39,4 %"],
  ["Analítica de datos hecha por sus empleados", "34,3 %"],
  ["Software de gestión de clientes (CRM)", "33,9 %"],
  ["Emplearon especialistas en TIC", "15,4 %"],
];

const oportunidades: ReactNode[] = [
  <>
    <strong>Una web que responda a lo que buscan tus clientes.</strong> Si casi dos de cada tres microempresas conectadas no tienen página, una web clara, con tus servicios, tu zona de trabajo y una forma fácil de contactar ya te diferencia. Lo explicamos en{" "}
    <Link href="/diseno-web-pymes/" className="text-accent-500 hover:underline">diseño web para pymes</Link> y, para que te encuentren en Google, en la{" "}
    <Link href="/seo-para-pymes-guia/" className="text-accent-500 hover:underline">guía de SEO para pymes</Link>.
  </>,
  <>
    <strong>Vender o reservar por internet.</strong> Solo el 11,8 % de las empresas de menos de 10 empleados vendió por comercio electrónico en 2025. No hace falta una gran tienda online: un catálogo con pedido, un sistema de reservas o un formulario de presupuesto bien hecho ya cuentan.
  </>,
  <>
    <strong>IA para tareas concretas, no por moda.</strong> La usa ya una de cada cinco microempresas con internet. Donde más rinde es en tareas repetitivas: responder consultas frecuentes, preparar presupuestos o hacer seguimiento de contactos. Tienes ejemplos en{" "}
    <Link href="/que-puede-automatizar-una-pyme-en-marketing-y-ventas/" className="text-accent-500 hover:underline">qué puede automatizar una pyme en marketing y ventas</Link>.
  </>,
  <>
    <strong>Ordenar antes de invertir.</strong> Antes de pagar por herramientas, conviene saber qué tienes y qué te falta. Tienes un método paso a paso en{" "}
    <Link href="/como-digitalizar-tu-negocio/" className="text-accent-500 hover:underline">cómo digitalizar tu negocio</Link> y qué apoyos hay este año en{" "}
    <Link href="/ayudas-digitalizar-pyme-2026-tras-kit-digital/" className="text-accent-500 hover:underline">ayudas para digitalizar tu pyme en 2026 tras el Kit Digital</Link>.
  </>,
];

const metodologia: ReactNode[] = [
  <><strong>Fuente:</strong> Encuesta sobre el uso de TIC y del comercio electrónico en las empresas, del INE. Datos definitivos publicados el 22 de octubre de 2026.</>,
  <><strong>Base de cada porcentaje:</strong> web, redes sociales e IA se calculan sobre las empresas <em>con conexión a internet</em>. La conexión y el comercio electrónico, sobre el total de empresas de cada tamaño.</>,
  <><strong>Periodo:</strong> el uso de las TIC se refiere al primer trimestre de 2026; el comercio electrónico, al año 2025.</>,
  <><strong>Muestra:</strong> unas 15.000 empresas de 10 o más empleados y unas 10.000 de menos de 10, con muestreo estratificado por tamaño, actividad y comunidad autónoma.</>,
  <><strong>Comparabilidad:</strong> desde el año de referencia 2025 la encuesta usa la CNAE-2025 e incluye la división 56 y el grupo 95.1. Por eso el INE advierte de que los datos no son estrictamente comparables con los de años anteriores.</>,
  <><strong>Cálculos propios:</strong> el «63,8 % sin web» sale de restar 36,2 a 100. No es una cifra publicada por el INE.</>,
];

const fuentes = [
  {
    texto: "INE: Encuesta sobre el uso de TIC y del comercio electrónico en las empresas. Año 2025 - Primer trimestre 2026. Datos definitivos. Nota de prensa del 22/10/2026 (consultada el 28/10/2026).",
    url: INE_URL,
  },
  {
    texto: "INE: Encuesta sobre el uso de TIC y del comercio electrónico en las empresas. Año 2024 - Primer trimestre 2025. Nota de prensa (consultada el 28/10/2026), para la tabla de referencia del año anterior.",
    url: "https://www.ine.es/dyngs/Prensa/ETICCE20241T2025.htm",
  },
  {
    texto: "Comisión Europea: Digital Decade 2026 country report, Spain. SWD(2026) 155 final, parte 26/27, 17/06/2026, transmitido al Consejo de la UE (consultado el 28/10/2026).",
    url: "https://data.consilium.europa.eu/doc/document/ST-10476-2026-ADD-55/en/pdf",
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

export default function DigitalizacionPymesInePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(datasetSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <article className="mw-article max-w-3xl mx-auto px-4 py-12">
        <Breadcrumbs crumbs={[{ label: "Inicio", href: "/" }, { label: "Blog", href: "/blog/" }, { label: "Digitalización de las pymes: datos del INE 2026" }]} />

        <header className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="bg-primary-100 text-primary-700 text-xs font-medium px-2.5 py-0.5 rounded-full">Pymes</span>
            <time className="text-sm text-gray-400" dateTime={DATE}>29 de octubre de 2026</time>
          </div>
          <h1 className="text-4xl font-bold text-primary-600 mb-4 leading-tight">{H1}</h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Las cifras oficiales más recientes sobre cómo usan internet las empresas españolas, separadas por tamaño, con la base de cada porcentaje y lo que significan si tienes una microempresa.
          </p>
          <Image
            src={OG}
            alt="Infografía de barras con datos del INE de 2026: tienen web el 36,2 % de las empresas de menos de 10 empleados frente al 82,9 % de las de 10 o más; usan redes el 32,1 % frente al 65,4 %; usan IA el 21,4 % frente al 33,6 %; vendieron online en 2025 el 11,8 % frente al 29,0 %"
            width={1200}
            height={630}
            className="w-full rounded-2xl mt-6"
            priority
          />
        </header>

        <div className="text-gray-700 space-y-6 leading-relaxed">
          <p>
            Según el INE (22/10/2026), en el primer trimestre de 2026 tiene web el <strong>36,2 %</strong> de las empresas de menos de 10 empleados con conexión a internet, frente al <strong>82,9 %</strong> de las de 10 o más. Usan redes sociales el 32,1 % y el 65,4 %, e inteligencia artificial el 21,4 % y el 33,6 %. En 2025 vendieron por internet el 11,8 % y el 29,0 %.
          </p>

          <h2 id="datos-clave" className="text-2xl font-bold text-primary-600">Los 5 datos clave de 2026</h2>
          <Lista items={resumen} />
          <Tabla cabecera={["Indicador (INE)", "Menos de 10 empleados", "10 o más empleados", "Base del porcentaje y periodo"]} filas={datosClave} />
          <p className="text-sm text-gray-500">
            Fuente: INE, Encuesta sobre el uso de TIC y del comercio electrónico en las empresas, nota de prensa del 22/10/2026.
          </p>

          <h2 className="text-2xl font-bold text-primary-600">¿Cuántas microempresas tienen página web?</h2>
          <p>
            El 36,2 % de las empresas de menos de 10 empleados con conexión a internet tiene sitio web. Dicho al revés, el <strong>63,8 % de las microempresas conectadas no tiene página propia</strong> (cálculo propio). En las de 10 o más empleados, la web es lo normal: la tiene el 82,9 %.
          </p>
          <p>
            Hay que leer bien la base. El porcentaje se calcula sobre las empresas que tienen internet, que en las de menos de 10 empleados son el 81,2 %. Las que no tienen conexión no entran en el cálculo.
          </p>

          <h2 className="text-2xl font-bold text-primary-600">¿Cuántas usan redes sociales?</h2>
          <p>
            Usa medios sociales el <strong>32,1 %</strong> de las empresas de menos de 10 empleados con internet y el <strong>65,4 %</strong> de las de 10 o más. En las microempresas, la proporción (32,1 %) es parecida a la de las que tienen web (36,2 %): en torno a una de cada tres.
          </p>

          <h2 className="text-2xl font-bold text-primary-600">¿Quién usa inteligencia artificial?</h2>
          <p>
            Emplea alguna tecnología de IA el <strong>33,6 %</strong> de las empresas de 10 o más empleados y el <strong>21,4 %</strong> de las de menos de 10 (en ambos casos, sobre las que tienen internet). Es el indicador en el que la diferencia entre unas y otras es menor. La nota de prensa no detalla para qué la usan.
          </p>
          <p>Por sectores, en las empresas de 10 o más empleados:</p>
          <Tabla cabecera={["Sector (10 o más empleados)", "Usan IA", "Cloud de pago", "Venden online (2025)"]} filas={sectoresIA} />
          <p>Otras tecnologías en las empresas de 10 o más empleados, primer trimestre de 2026:</p>
          <Tabla cabecera={["Tecnología", "% de empresas"]} filas={otrasTecnologias} />
          <p className="text-sm text-gray-500">
            ERP y CRM, sobre las empresas con conexión a internet (tabla por comunidades autónomas, fila del total). Fuente: INE, 22/10/2026.
          </p>

          <h2 className="text-2xl font-bold text-primary-600">¿Cuántas pymes venden por internet?</h2>
          <p>
            En 2025 vendió por comercio electrónico el <strong>29,0 %</strong> de las empresas de 10 o más empleados, con un volumen de negocio de <strong>419.706 millones de euros</strong>. En las de menos de 10 empleados, el porcentaje baja al <strong>11,8 %</strong>. Por sectores, en las de 10 o más, vende online el 35,1 % de las de servicios, el 27,7 % de las industriales y el 7,0 % de las de construcción.
          </p>

          <h2 className="text-2xl font-bold text-primary-600">¿Ha mejorado respecto al año pasado?</h2>
          <p>
            Esta tabla pone al lado los datos de la nota del año anterior. <strong>No son estrictamente comparables</strong>, porque la encuesta ha cambiado de clasificación de actividades y ha incluido sectores nuevos, así que sirve para ver tendencias, no para calcular subidas exactas.
          </p>
          <Tabla cabecera={["Indicador (1.er trimestre 2025 → 2026)", "Menos de 10 empleados", "10 o más empleados"]} filas={evolucion} />
          <p>
            Lo que sí se ve con claridad es el salto de la IA, que en las empresas de 10 o más empleados ya había pasado del 12,4 % en 2024 al 21,1 % en 2025. En web y redes, las cifras de 2026 son algo más bajas, y con el cambio de población de la encuesta no se puede saber si es un retroceso real.
          </p>

          <h2 className="text-2xl font-bold text-primary-600">¿Y frente a Europa?</h2>
          <p>
            Es otro indicador, con otra metodología, así que no se mezcla con los del INE. Según el informe de la Comisión Europea sobre la Década Digital 2026, el <strong>75,35 %</strong> de las pymes españolas alcanza al menos un nivel básico de intensidad digital (dato de 2025), por encima de la media de la UE (71,39 %). El objetivo europeo para 2030 es el 90 %.
          </p>

          <h2 className="text-2xl font-bold text-primary-600">Qué significa para tu negocio: 4 oportunidades</h2>
          <Lista items={oportunidades} numerada />

          <div className="bg-primary-50 rounded-xl p-6 border border-primary-100">
            <p className="font-semibold text-primary-700 mb-2">¿En qué punto está tu negocio?</p>
            <p className="text-gray-600 text-sm mb-4">
              Nuestro diagnóstico gratuito revisa tu web, tu visibilidad en Google y en asistentes de IA, tu ficha de Google y tres oportunidades de búsqueda. Lo recibes por correo en un máximo de 24 horas laborables, sin compromiso.
            </p>
            <Link href="/auditoria-digital/" className="inline-block bg-accent-500 text-white px-6 py-2.5 rounded-full font-semibold text-sm hover:bg-accent-600 transition-colors">
              Pedir el diagnóstico gratuito
            </Link>
          </div>

          <h2 className="text-2xl font-bold text-primary-600">Metodología: cómo leer bien estos porcentajes</h2>
          <Lista items={metodologia} />

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
            Servicios relacionados: <Link href="/diseno-web-pymes/" className="text-accent-500 hover:underline">Diseño web para pymes</Link> · <Link href="/auditoria-digital/" className="text-accent-500 hover:underline">Diagnóstico digital gratuito</Link> · <Link href="/seo-para-pymes-guia/" className="text-accent-500 hover:underline">SEO para pymes</Link>
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
