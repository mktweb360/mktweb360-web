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

// 31/10/2026 — reescritura (tema 6 de la propuesta de blog del 27/10, aprobada por José). Misma URL.
// Texto y fuentes: OneDrive › mktweb360.com › 02-Contenidos › «2026-10-28 ARTÍCULO — Verifactu 2027 y factura electrónica».
// Fechas comprobadas el 28/10/2026 en el BOE y la sede de la AEAT. Verifactu: Hacienda anunció el 05/10/2026
// que quiere aplazarlo a octubre de 2028; si se publica en el BOE, actualizar aquí, en EN/FR y en la imagen.

const SLUG = "factura-electronica-obligatoria-autonomos-pymes";
const URL = `https://www.mktweb360.com/${SLUG}/`;
const OG = "/og-factura-electronica-obligatoria-autonomos-pymes-v2.jpg";
const TITLE = "Verifactu 2027 y factura electrónica: fechas para pymes";
const DESCRIPTION =
  "Verifactu y la factura electrónica obligatoria no son lo mismo: fechas oficiales 2027-2029, a quién afectan y qué revisar en tu tienda, TPV y facturación.";
const H1 = "Verifactu y factura electrónica obligatoria: fechas 2027-2028 y qué cambia en tu web o tienda online";
const DATE_PUBLISHED = "2026-06-12";
const DATE_MODIFIED = "2026-10-31";

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
    q: "¿Verifactu es lo mismo que la factura electrónica?",
    a: "No. Verifactu fija los requisitos del programa con el que facturas, incluidos los tickets, y se aplica también a las ventas a particulares. La factura electrónica obligatoria afecta a las facturas entre empresas y profesionales, que tendrán que emitirse y recibirse en formato electrónico. Tienen normas y fechas distintas.",
  },
  {
    q: "¿Verifactu se ha aplazado a 2028?",
    a: "Hacienda anunció el 5 de octubre de 2026 que prevé aplazarlo a octubre de 2028. A 28 de octubre de 2026 esa modificación no está publicada en el BOE, así que las fechas vigentes siguen siendo el 1 de enero de 2027 para las sociedades y el 1 de julio de 2027 para el resto. Confírmalo con tu gestoría antes de decidir.",
  },
  {
    q: "¿Me afecta Verifactu si mi tienda online vende solo a particulares?",
    a: "Sí, si usas un programa para expedir las facturas o los tickets. La Agencia Tributaria indica que da igual que la venta sea presencial u online y que las facturas simplificadas también están incluidas.",
  },
  {
    q: "¿Puedo seguir facturando con Excel o Word?",
    a: "Según la Agencia Tributaria, Excel o Word no son un sistema de facturación si solo los usas para escribir, imprimir o guardar las facturas. Sí lo son si, por ejemplo con macros, generan automáticamente libros registro u otros resultados.",
  },
  {
    q: "¿Hacienda ofrece alguna herramienta gratuita?",
    a: "Sí. La Agencia Tributaria ofrecerá una aplicación básica de facturación gratuita para Verifactu y desarrollará una aplicación o formulario gratuito para expedir facturas electrónicas a través de su solución pública.",
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
  <><strong>Son dos obligaciones distintas.</strong> Verifactu afecta al programa con el que facturas; la factura electrónica, a las facturas entre empresas y profesionales.</>,
  <>Verifactu: <strong>1 de enero de 2027</strong> para quienes pagan el Impuesto sobre Sociedades y <strong>1 de julio de 2027</strong> para el resto, autónomos incluidos.</>,
  <>Hacienda anunció el 5 de octubre de 2026 que quiere aplazar Verifactu a octubre de 2028. A 28 de octubre no está en el BOE: hasta que se publique, valen las fechas de 2027.</>,
  <>Factura electrónica entre empresas: <strong>6 de octubre de 2027</strong> si facturas más de 8 millones de euros y <strong>6 de octubre de 2028</strong> para el resto.</>,
  <>Tu tienda online y tu TPV cuentan como sistema de facturación si emiten facturas o tickets. Una web sin ventas no tiene que cambiar nada por Verifactu.</>,
];

const diferencias = [
  ["Qué regula", "Los requisitos del programa con el que facturas: cada factura deja un registro encadenado con el anterior, de modo que no se puede alterar sin dejar rastro", "El formato de la factura entre empresas: tendrá que emitirse y recibirse en formato electrónico estructurado, y habrá que comunicar su estado de pago"],
  ["Norma", "Real Decreto 1007/2023 (Reglamento de sistemas informáticos de facturación)", "Ley 18/2022 (Crea y Crece), Real Decreto 238/2026 y Orden HAC/1028/2026"],
  ["Qué facturas", "Todas las que expidas con un programa, también los tickets y las ventas a particulares", "Las facturas entre empresarios y profesionales"],
  ["Qué se nota en la factura", "Un código QR con el que el cliente puede enviar datos de la factura a la Agencia Tributaria", "Es un fichero estructurado que se envía por una plataforma de intercambio o por la solución pública de la Agencia Tributaria, no un PDF por correo"],
  ["Desde cuándo", "1/1/2027 (sociedades) y 1/7/2027 (resto). Aplazamiento a octubre de 2028 anunciado, sin publicar", "6/10/2027 (más de 8 millones de euros) y 6/10/2028 (resto)"],
];

const calendario = [
  ["6/10/2026", "Entra en vigor la Orden HAC/1028/2026 y empiezan a contar los plazos de la factura electrónica", "—", "BOE del 05/10/2026 y AEAT"],
  ["1/1/2027", "Verifactu: programa de facturación adaptado", "Contribuyentes del Impuesto sobre Sociedades", "RD 1007/2023, disposición final cuarta, en la redacción del RDL 15/2025 (BOE)"],
  ["1/7/2027", "Verifactu: programa de facturación adaptado", "Resto de obligados, autónomos incluidos", "RD 1007/2023 (BOE) y AEAT"],
  ["6/10/2027", "Factura electrónica: emitir y recibir, y comunicar el estado de facturas y pagos. Durante 12 meses, con un PDF legible para el resto de empresas", "Más de 8 millones de euros de volumen de operaciones en el año anterior", "AEAT, calendario de implantación"],
  ["Octubre de 2028 (anunciado)", "Verifactu: aplazamiento previsto de las obligaciones pendientes", "Todos los que aún no estén obligados", "Nota de Hacienda del 05/10/2026. Pendiente de publicarse en el BOE"],
  ["6/10/2028", "Factura electrónica: emitir y recibir. Comunicar el estado de pago si eres sociedad o entidad", "Resto de empresas y profesionales", "AEAT, calendario de implantación"],
  ["6/10/2029", "Factura electrónica: comunicar el estado de facturas y pagos", "Autónomos (personas físicas) y entidades en atribución de rentas", "AEAT, calendario de implantación"],
];

const arbol: ReactNode[] = [
  <><strong>¿Tu domicilio fiscal está en el País Vasco o en Navarra?</strong> Verifactu no se aplica: tienes tu propio sistema (TicketBAI en el País Vasco). Para la factura electrónica, pregunta a tu gestoría.</>,
  <><strong>¿Estás en el SII (Suministro Inmediato de Información)?</strong> Verifactu tampoco se aplica: la Agencia Tributaria lo considera un régimen excluyente.</>,
  <><strong>¿Expides facturas o tickets con algún programa</strong> (de facturación, el de tu tienda online, un TPV o una caja registradora)? Entonces te afecta Verifactu: el 1 de enero de 2027 si eres sociedad y el 1 de julio de 2027 si eres autónomo. Si facturas todo a mano, sin ningún programa, no.</>,
  <><strong>¿Tienes clientes que son empresas o profesionales?</strong> Tendrás que enviarles factura electrónica: desde el 6 de octubre de 2027 si superas los 8 millones de euros y desde el 6 de octubre de 2028 si no.</>,
  <><strong>¿Compras a proveedores que son empresas?</strong> Casi todos: también tendrás que recibir sus facturas en formato electrónico en esas mismas fechas, aunque tu tienda venda solo a particulares.</>,
  <><strong>¿Eres autónomo (persona física)?</strong> La comunicación del estado de pago de tus facturas llega más tarde: el 6 de octubre de 2029.</>,
];

const tienda = [
  ["WooCommerce", "Las facturas o los tickets suelen salir de un plugin o de un programa conectado a la tienda. Ese plugin o programa es tu sistema de facturación: pide al proveedor su declaración responsable de que cumple el Reglamento y comprueba que añade el código QR a las facturas que descarga el cliente."],
  ["Shopify", "Para España, las facturas suelen salir de una app de facturación o de tu programa de gestión. Pregunta al proveedor si está adaptada a Verifactu y si podrá emitir factura electrónica a clientes empresa. Si no lo tiene previsto, conecta la tienda a un programa que sí lo esté."],
  ["TPV o caja registradora", "Si emite tickets (facturas simplificadas), la Agencia Tributaria lo considera un sistema de facturación. Si vendes en tienda física y online, que las dos ventas acaben en sistemas adaptados y con numeración controlada."],
  ["Programa de facturación o ERP", "Pide la declaración responsable, que debe constar por escrito y a la vista en el propio programa. Pregunta también cómo enviará y recibirá facturas electrónicas: por una plataforma privada de intercambio o por la solución pública de la Agencia Tributaria."],
  ["Web sin ventas", "Si tu web solo informa o recoge contactos y no emite facturas, Verifactu no le pide nada. El cambio está en el programa con el que facturas después."],
];

const pasos: ReactNode[] = [
  <><strong>Haz una lista de todo lo que emite facturas o tickets:</strong> programa de facturación, tienda online y sus plugins o apps, TPV, caja y cualquier hoja de cálculo con macros.</>,
  <><strong>Pide a cada proveedor la declaración responsable</strong> de que su programa cumple el Reglamento de Verifactu, y la fecha en la que tendrás la versión adaptada.</>,
  <><strong>Decide con tu gestoría la modalidad:</strong> VERI*FACTU (el programa envía cada registro a la Agencia Tributaria al facturar) o no VERI*FACTU (lo guarda con las garantías del Reglamento sin enviarlo).</>,
  <><strong>Revisa tu tienda online:</strong> que pida y guarde el NIF y los datos fiscales de los clientes empresa, y que las facturas que salen de ella lleven el código QR.</>,
  <><strong>Prepara la factura electrónica con tu proveedor:</strong> cómo emitirás y recibirás facturas entre empresas antes del 6 de octubre de 2028 (o de 2027 si superas los 8 millones).</>,
];

const bulos: ReactNode[] = [
  <><strong>«Verifactu obliga a emitir factura electrónica».</strong> No. Verifactu regula el programa con el que facturas y los registros que genera. La factura electrónica entre empresas es otra obligación, con otra norma y otras fechas.</>,
  <><strong>«Verifactu ya está aplazado a 2028».</strong> Por ahora es un anuncio de Hacienda del 5 de octubre de 2026. Hasta que se publique en el BOE, las fechas legales son las de 2027.</>,
  <><strong>«Vendo solo a particulares, así que no me afecta nada».</strong> Verifactu incluye los tickets y las ventas online, y tendrás que recibir en formato electrónico las facturas de tus proveedores.</>,
  <><strong>«Con Verifactu Hacienda recibe todas mis facturas».</strong> Solo en la modalidad VERI*FACTU, en la que el programa envía cada registro. En la otra modalidad los registros se guardan en tu sistema.</>,
  <><strong>«Un PDF por correo ya es una factura electrónica».</strong> La factura electrónica obligatoria es un fichero estructurado que se envía por una plataforma o por la solución pública. Las grandes empresas tendrán que añadir un PDF legible solo durante los primeros 12 meses.</>,
];

const fuentes = [
  { texto: "Agencia Tributaria: Factura electrónica, calendario de implantación (actualizado el 13/10/2026; consultado el 28/10/2026).", url: "https://sede.agenciatributaria.gob.es/Sede/eu_es/iva/factura-electronica/calendario-implantacion.html" },
  { texto: "BOE: Orden HAC/1028/2026, de 2 de octubre, de la solución pública de facturación electrónica (BOE del 05/10/2026, en vigor el 06/10/2026).", url: "https://www.boe.es/buscar/act.php?id=BOE-A-2026-20587" },
  { texto: "Agencia Tributaria: novedad sobre la Orden HAC/1028/2026.", url: "https://sede.agenciatributaria.gob.es/Sede/iva/novedades-iva/novedades-normativa-2026/orden-hac-1028-2026-2-electronica.html" },
  { texto: "Agencia Tributaria: Facturación electrónica obligatoria, Real Decreto 238/2026 (BOE del 31/03/2026).", url: "https://sede.agenciatributaria.gob.es/Sede/todas-noticias/2026/marzo/31/facturacion-electronica-obligatoria.html" },
  { texto: "BOE: Ley 18/2022, de creación y crecimiento de empresas.", url: "https://www.boe.es/buscar/act.php?id=BOE-A-2022-15818" },
  { texto: "BOE: Real Decreto 1007/2023, texto consolidado (disposición final cuarta, en la redacción del Real Decreto-ley 15/2025; consultado el 28/10/2026).", url: "https://www.boe.es/buscar/act.php?id=BOE-A-2023-24840" },
  { texto: "Agencia Tributaria: nota informativa sobre la ampliación del plazo de adaptación de los sistemas de facturación.", url: "https://sede.agenciatributaria.gob.es/Sede/iva/sistemas-informaticos-facturacion-verifactu/nota-informativa-ampliacion-plazo-adaptacion-facturacion.html" },
  { texto: "Agencia Tributaria: preguntas frecuentes de VERI*FACTU, ámbitos de aplicación (actualizadas el 21/10/2026).", url: "https://sede.agenciatributaria.gob.es/Sede/iva/sistemas-informaticos-facturacion-verifactu/preguntas-frecuentes/cuestiones-generales-ambitos-aplicacion.html" },
  { texto: "Agencia Tributaria: VERI*FACTU en el manual de actividades económicas.", url: "https://sede.agenciatributaria.gob.es/Sede/ayuda/manuales-videos-folletos/manuales-practicos/folleto-actividades-economicas/5-impuesto-sobre-valor-anadido/5_12-veri-factu.html" },
  { texto: "Ministerio de Hacienda: nota informativa del 05/10/2026 sobre la previsión de modificación de los plazos de VERI*FACTU.", url: "https://www.hacienda.gob.es/sgt/gabsehacienda/nota-informativa-verifactu.pdf" },
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
            <tr key={fila[0] + fila[1]} className="border-b border-gray-200 even:bg-gray-50">
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

export default function FacturaElectronicaPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <article className="mw-article max-w-3xl mx-auto px-4 py-12">
        <Breadcrumbs crumbs={[{ label: "Inicio", href: "/" }, { label: "Blog", href: "/blog/" }, { label: "Verifactu y factura electrónica" }]} />

        <header className="mb-8">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="bg-primary-100 text-primary-700 text-xs font-medium px-2.5 py-0.5 rounded-full">Autónomos</span>
            <span className="text-sm text-gray-400">
              Actualizado el <time dateTime={DATE_MODIFIED}>31 de octubre de 2026</time> · publicado el <time dateTime={DATE_PUBLISHED}>12 de junio de 2026</time>
            </span>
            <AuthorByline />
          </div>
          <h1 className="text-4xl font-bold text-primary-600 mb-4 leading-tight">{H1}</h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Muchos autónomos creen que Verifactu y la factura electrónica son lo mismo. No lo son: tienen normas, fechas y efectos distintos en tu tienda online, tu TPV y tu programa de facturación. Aquí tienes el calendario oficial y qué revisar.
          </p>
          <Image src={OG} alt="Línea temporal 2027-2029 con dos carriles: Verifactu (1 de enero y 1 de julio de 2027, aplazamiento a octubre de 2028 anunciado) y factura electrónica entre empresas (6 de octubre de 2027, 2028 y 2029)" width={1200} height={630} className="w-full rounded-2xl mt-6" priority />
        </header>

        <div className="text-gray-700 space-y-6 leading-relaxed">
          <p>
            Verifactu y la factura electrónica son dos obligaciones distintas. <strong>Verifactu</strong> afecta al programa con el que facturas, también al de tu tienda online y tu TPV: desde el 1 de enero de 2027 para las sociedades y desde el 1 de julio de 2027 para los autónomos. La <strong>factura electrónica entre empresas</strong> llega el 6 de octubre de 2027 si facturas más de 8 millones de euros, y el 6 de octubre de 2028 para el resto.
          </p>

          <div className="bg-amber-50 border border-amber-200 rounded-xl p-5 text-sm text-gray-700">
            <p className="font-semibold text-gray-800 mb-1">Esto no es asesoramiento fiscal</p>
            <p>
              Explicamos qué dicen el BOE y la Agencia Tributaria y qué implica para tu web y tus herramientas. Cómo te afecta según tu actividad, tu régimen de IVA o tu forma jurídica lo tiene que confirmar tu gestoría o asesoría fiscal.
            </p>
          </div>

          <h2 className="text-2xl font-bold text-primary-600">Resumen rápido</h2>
          <Lista items={resumen} />

          <h2 className="text-2xl font-bold text-primary-600">¿En qué se diferencian Verifactu y la factura electrónica?</h2>
          <p>
            Verifactu es el nombre con el que se conoce el Reglamento de sistemas informáticos de facturación. No cambia a quién facturas ni cómo envías la factura: cambia el programa que la genera, que tiene que guardar un registro de cada factura, encadenado con el anterior, y poner un código QR en ella. La factura electrónica obligatoria, en cambio, cambia el formato de las facturas entre empresas y profesionales: dejan de ser un papel o un PDF y pasan a ser un fichero estructurado que se intercambia por una plataforma.
          </p>
          <Tabla cabecera={["", "Verifactu", "Factura electrónica entre empresas"]} filas={diferencias} />

          <h2 className="text-2xl font-bold text-primary-600">¿Cuál es el calendario oficial de 2027 a 2029?</h2>
          <p>Estas son las fechas comprobadas el 28 de octubre de 2026 en el BOE y en la sede de la Agencia Tributaria:</p>
          <Tabla cabecera={["Fecha", "Qué empieza", "A quién", "Fuente"]} filas={calendario} />
          <p>
            Sobre el aplazamiento de Verifactu: el 5 de octubre de 2026 el Ministerio de Hacienda publicó una nota en la que prevé retrasar sus obligaciones pendientes hasta octubre de 2028, para hacerlas coincidir con la factura electrónica de las empresas que no superan los 8 millones de euros. A 28 de octubre de 2026, el texto consolidado del Real Decreto 1007/2023 en el BOE mantiene el 1 de enero y el 1 de julio de 2027. Prepárate con esas fechas y revisa este artículo: lo actualizaremos cuando se publique la norma.
          </p>

          <h2 className="text-2xl font-bold text-primary-600">¿Me afecta? Seis preguntas para saberlo</h2>
          <Lista items={arbol} numerada />
          <p>
            Si estás empezando, en <Link href="/como-darse-de-alta-autonomo/" className="text-accent-500 hover:underline">cómo darse de alta como autónomo</Link> tienes los pasos previos, y en <Link href="/cuota-autonomos-2026-todo-lo-que-tienes-que-saber/" className="text-accent-500 hover:underline">la cuota de autónomos de 2026</Link>, lo que pagarás cada mes.
          </p>

          <h2 className="text-2xl font-bold text-primary-600">¿Qué tiene que hacer tu tienda online (WooCommerce, Shopify) o tu TPV?</h2>
          <p>
            La Agencia Tributaria es clara en un punto: da igual que vendas en una tienda física o en internet. Si un programa expide tus facturas o tus tickets, ese programa tiene que cumplir el Reglamento. Lo que cambia es dónde está ese programa en cada caso:
          </p>
          <Tabla cabecera={["Dónde facturas", "Qué revisar"]} filas={tienda} />
          <p>
            Si vendes en tienda física y online, el punto delicado es que las dos ventas no acaben en sistemas distintos sin control. Lo explicamos en <Link href="/conectar-tpv-tienda-online/" className="text-accent-500 hover:underline">cómo conectar el TPV con tu tienda online</Link>. Y si estás eligiendo plataforma, conviene preguntar por la facturación antes de decidir: lo comparamos en <Link href="/woocommerce-vs-shopify-cual-elegir-tienda-online/" className="text-accent-500 hover:underline">WooCommerce o Shopify</Link>.
          </p>

          <h2 className="text-2xl font-bold text-primary-600">¿Qué puedes hacer ya, sin esperar a la fecha?</h2>
          <Lista items={pasos} numerada />

          <BlogBanner variant="ecommerce" />

          <h2 className="text-2xl font-bold text-primary-600">¿Qué errores y bulos se repiten sobre Verifactu?</h2>
          <Lista items={bulos} />

          <div className="bg-primary-50 rounded-xl p-6 border border-primary-100">
            <p className="font-semibold text-primary-700 mb-2">¿Quieres saber cómo está tu web o tu tienda online?</p>
            <p className="text-gray-600 text-sm mb-4">
              Nuestro diagnóstico gratuito revisa el estado técnico de tu web, tu visibilidad en Google y en asistentes de IA y tu ficha de Google. Lo recibes por correo en un máximo de 24 horas laborables, sin compromiso. La parte fiscal, con tu gestoría.
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
            Servicios relacionados: <Link href="/tienda-online/" className="text-accent-500 hover:underline">Tienda online sin comisiones</Link> · <Link href="/diseno-web-tienda-online/" className="text-accent-500 hover:underline">Diseño web para tienda online</Link> · <Link href="/auditoria-digital/" className="text-accent-500 hover:underline">Diagnóstico digital gratuito</Link>
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
