import Image from "next/image";
import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { RelatedArticles } from "@/components/RelatedArticles";
import { BlogBanner } from "@/components/BlogBanner";

export const metadata: Metadata = {
  title: { absolute: "Ayudas para digitalizar tu pyme en 2026 tras el Kit Digital" },
  description:
    "El Kit Digital cerró solicitudes en octubre de 2025. Qué ayudas quedan en 2026 para digitalizar tu pyme, qué hace la Orden TDF/39/2026 y cómo prepararte.",
  alternates: { canonical: "https://www.mktweb360.com/ayudas-digitalizar-pyme-2026-tras-kit-digital/" },
  openGraph: {
    title: "Ayudas para digitalizar tu pyme en 2026 tras el Kit Digital | Mkt Web 360",
    description:
      "El Kit Digital cerró solicitudes en octubre de 2025. Qué ayudas quedan en 2026 para digitalizar tu pyme, qué hace la Orden TDF/39/2026 y cómo prepararte.",
    url: "https://www.mktweb360.com/ayudas-digitalizar-pyme-2026-tras-kit-digital/",
    type: "article",
    images: [{ url: "/og-ayudas-digitalizar-pyme-2026-tras-kit-digital.jpg", width: 1200, height: 630 }],
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "Ayudas para digitalizar una pyme en 2026: qué queda tras el Kit Digital",
  description:
    "El Kit Digital cerró solicitudes en octubre de 2025. Qué ayudas quedan en 2026 para digitalizar tu pyme, qué hace la Orden TDF/39/2026 y cómo prepararte.",
  author: { "@type": "Organization", name: "Mkt Web 360 SLU" },
  publisher: { "@type": "Organization", name: "Mkt Web 360 SLU", url: "https://www.mktweb360.com" },
  datePublished: "2026-09-25",
  dateModified: "2026-09-25",
  image: "https://www.mktweb360.com/og-ayudas-digitalizar-pyme-2026-tras-kit-digital.jpg",
  url: "https://www.mktweb360.com/ayudas-digitalizar-pyme-2026-tras-kit-digital/",
  mainEntityOfPage: "https://www.mktweb360.com/ayudas-digitalizar-pyme-2026-tras-kit-digital/",
};

const FAQS = [
  {
    q: "¿Puedo pedir el Kit Digital en 2026?",
    a: "Como solicitante nuevo, no hay convocatoria abierta a fecha de 24 de septiembre de 2026: la web de Acelera pyme indica que las convocatorias han finalizado. La Orden TDF/39/2026 permite reasignar fondos sobrantes, principalmente a solicitudes que quedaron sin ayuda por falta de presupuesto.",
  },
  {
    q: "¿Qué es la Orden TDF/39/2026?",
    a: "Es la orden publicada en el BOE el 28 de enero de 2026 que modifica las bases del Kit Digital. Permite reinvertir fondos no ejecutados y resolver a favor de solicitudes rechazadas por agotamiento de crédito. No es, por sí sola, una convocatoria nueva con plazo para cualquier empresa.",
  },
  {
    q: "¿Dónde compruebo si una ayuda es real?",
    a: "En la Base de Datos Nacional de Subvenciones, que recoge todas las convocatorias públicas, y en el boletín oficial correspondiente. Si alguien te ofrece una ayuda sin enlazar la convocatoria oficial, pide la referencia antes de firmar nada o entregar documentación.",
  },
  {
    q: "¿Un préstamo ICO es una ayuda?",
    a: "Es financiación en condiciones que pueden ser ventajosas, pero hay que devolverla con intereses y la tramita una entidad financiera. No es una subvención a fondo perdido. Valora su coste total y su encaje con tu proyecto antes de solicitarlo.",
  },
  {
    q: "¿Qué preparo mientras sale una convocatoria?",
    a: "Certificado digital, certificados de Hacienda y Seguridad Social, datos de plantilla y facturación, una memoria breve del proyecto y presupuestos desglosados. Con eso preparado puedes presentar la solicitud en los primeros días, que es cuando más se nota la diferencia.",
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

const gastos = [
  ["Diseño o rediseño web y tienda online", "IVA recuperable"],
  ["CRM, ERP y software de gestión", "Gastos pagados antes de solicitar"],
  ["Ciberseguridad", "Cuotas de mantenimiento periódicas"],
  ["Herramientas de IA y automatización", "Personal propio de la empresa"],
  ["Formación vinculada al proyecto", "Equipamiento no justificado en la memoria"],
];

const preparacion = [
  "Certificado digital de la empresa o del representante, con poderes en regla.",
  "Certificados de estar al corriente con Hacienda y Seguridad Social.",
  "Plantilla media y datos de facturación del último ejercicio.",
  "Una memoria breve del proyecto digital: qué quieres implantar, para qué y qué resultado esperas.",
  "Presupuestos de proveedores fechados y desglosados.",
];

const reintegro = [
  "Gastos fuera de plazo.",
  "Cambios en el proyecto sin autorización.",
  "Pagos que no se pueden acreditar.",
  "Doble financiación del mismo gasto.",
  "No mantener la inversión el tiempo exigido.",
];

const fuentes = [
  {
    texto: "Red.es: Kit Digital cierra las dos últimas convocatorias que quedaban abiertas (31/10/2025).",
    url: "https://www.red.es/es/actualidad/noticias/kit-digital-cierra-las-dos-ultimas-convocatorias-que-quedaban-abiertas-tras-mas",
  },
  { texto: "Acelera pyme: Convocatorias Kit Digital.", url: "https://www.acelerapyme.gob.es/convocatorias-kit-digital" },
  { texto: "Orden TDF/39/2026, de 26 de enero (BOE-A-2026-2070).", url: "https://www.boe.es/diario_boe/txt.php?id=BOE-A-2026-2070" },
  { texto: "Ley 38/2003, General de Subvenciones (BOE-A-2003-20977).", url: "https://www.boe.es/buscar/act.php?id=BOE-A-2003-20977" },
  {
    texto: "Base de Datos Nacional de Subvenciones (Infosubvenciones).",
    url: "https://www.infosubvenciones.es/bdnstrans/GE/es/convocatorias",
  },
];

export default function AyudasDigitalizarPymePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <article className="max-w-3xl mx-auto px-4 py-12">
        <Breadcrumbs crumbs={[{ label: "Inicio", href: "/" }, { label: "Blog", href: "/blog/" }, { label: "Ayudas para digitalizar una pyme en 2026" }]} />

        <header className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="bg-primary-100 text-primary-700 text-xs font-medium px-2.5 py-0.5 rounded-full">Pymes</span>
            <time className="text-sm text-gray-400" dateTime="2026-09-25">25 de septiembre de 2026</time>
          </div>
          <h1 className="text-4xl font-bold text-primary-600 mb-4 leading-tight">
            Ayudas para digitalizar una pyme en 2026: qué queda tras el Kit Digital
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            El Kit Digital ya no admite solicitudes nuevas. Qué significa la Orden TDF/39/2026, dónde buscar ayudas reales en 2026 y cómo preparar la documentación para no perder una convocatoria.
          </p>
          <Image
            src="/og-ayudas-digitalizar-pyme-2026-tras-kit-digital.jpg"
            alt="Ayudas para digitalizar tu pyme en 2026 tras el Kit Digital"
            width={1200}
            height={630}
            className="w-full rounded-2xl mt-6"
            priority
          />
        </header>

        <div className="text-gray-700 space-y-6 leading-relaxed">
          <p>
            El Kit Digital <strong>cerró el plazo de solicitud el 31 de octubre de 2025</strong>, cuando Red.es dio por finalizadas las dos últimas convocatorias abiertas. En 2026 no hay una convocatoria general para empresas que no lo pidieron en su día. Lo que sí existe es una <strong>modificación de las bases</strong> que permite repartir fondos sobrantes, además de programas estatales, de Cámaras de Comercio y autonómicos que conviene vigilar.
          </p>

          <h2 className="text-2xl font-bold text-primary-600">Resumen rápido</h2>
          <ul className="space-y-3">
            {[
              <>Las convocatorias del Kit Digital están <strong>finalizadas</strong> según Acelera pyme.</>,
              <>La <strong>Orden TDF/39/2026</strong> (BOE de 28 de enero de 2026) permite reutilizar fondos remanentes, sobre todo para solicitudes que se quedaron sin ayuda por falta de presupuesto.</>,
              <>No hay un sustituto estatal único para todas las pymes.</>,
              <>Las ayudas de <strong>Cámaras de Comercio</strong> y <strong>comunidades autónomas</strong> tienen bases, plazos y gastos distintos en cada territorio.</>,
              <>Los préstamos del ICO son <strong>financiación</strong>, no subvención a fondo perdido.</>,
              <>Preparar la documentación antes de que salga la convocatoria marca la diferencia.</>,
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3 p-4 border border-gray-200 rounded-xl">
                <span className="text-primary-600 font-bold shrink-0 mt-0.5">▸</span>
                <span className="text-gray-600 text-sm">{item}</span>
              </li>
            ))}
          </ul>

          <h2 className="text-2xl font-bold text-primary-600">Qué pasó con el Kit Digital</h2>
          <p>
            El Kit Digital subvencionaba soluciones como web, tienda online, redes sociales o ciberseguridad a través de agentes digitalizadores. Red.es anunció el 31 de octubre de 2025 el cierre de las dos últimas convocatorias: la de autónomos y empresas de 0 a menos de 3 empleados, y la de comunidades de bienes, sociedades civiles y explotaciones agrarias. Desde entonces, la web oficial de Acelera pyme indica que <strong>las convocatorias del programa han finalizado</strong>.
          </p>

          <h2 className="text-2xl font-bold text-primary-600">Qué hace la Orden TDF/39/2026 (y qué no hace)</h2>
          <p>La Orden TDF/39/2026, de 26 de enero, modificó las bases reguladoras del programa. En síntesis:</p>
          <ul className="space-y-3">
            {[
              <><strong>Permite reutilizar fondos remanentes</strong> no ejecutados dentro del propio programa.</>,
              <><strong>Abre la puerta a resolver a favor de solicitudes que fueron rechazadas por agotamiento de fondos</strong> en convocatorias ya cerradas.</>,
              <><strong>No publica por sí misma una convocatoria nueva</strong> con plazo para solicitantes que nunca lo pidieron.</>,
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3 p-4 border border-gray-200 rounded-xl">
                <span className="text-primary-600 font-bold shrink-0 mt-0.5">▸</span>
                <span className="text-gray-600 text-sm">{item}</span>
              </li>
            ))}
          </ul>
          <p>
            Si solicitaste el Kit Digital y te quedaste sin bono por falta de presupuesto, revisa tu expediente en el área privada de Acelera pyme y las notificaciones de la sede de Red.es.
          </p>
          <p>
            Si no lo pediste, <strong>desconfía de quien te ofrezca “apuntarte a una lista de espera”</strong>. Ninguna lista privada reserva presupuesto público. Cualquier convocatoria real se publica en el BOE y en la sede electrónica de Red.es.
          </p>

          <h2 className="text-2xl font-bold text-primary-600">Dónde buscar ayudas reales en 2026</h2>

          <h3 className="text-xl font-semibold text-gray-800">Programas estatales específicos</h3>
          <p>
            Existen líneas estatales para ámbitos concretos, como inteligencia artificial, innovación, espacios de datos o transformación sectorial. Suelen estar dirigidas a proyectos más avanzados y no siempre financian una web corporativa o un CRM básico. Lee siempre qué gastos son subvencionables antes de dar por hecho que tu proyecto encaja.
          </p>

          <h3 className="text-xl font-semibold text-gray-800">Cámaras de Comercio</h3>
          <p>
            El <strong>Programa Pyme Digital</strong> de las Cámaras se convoca por demarcación territorial. Cada Cámara fija sus requisitos, fechas, presupuesto y cofinanciación. Suelen pedir domicilio en su ámbito, estar al corriente con Hacienda y Seguridad Social y aportar una memoria del proyecto. No extrapoles las condiciones de una Cámara a otra.
          </p>

          <h3 className="text-xl font-semibold text-gray-800">Comunidades autónomas</h3>
          <p>
            Muchas ayudas a la digitalización son autonómicas y se publican en el boletín oficial de cada comunidad o en la sede de la consejería competente. Busca combinando tu comunidad, tu tamaño de empresa, tu sector y el tipo de inversión.
          </p>

          <h3 className="text-xl font-semibold text-gray-800">Financiación del ICO</h3>
          <p>
            Las líneas del ICO pueden financiar inversiones de digitalización, pero son <strong>préstamos</strong>: hay que devolverlos con intereses y los tramita tu entidad financiera. Pueden ser útiles, pero no las compares con una subvención.
          </p>

          <h3 className="text-xl font-semibold text-gray-800">El buscador que no falla: la BDNS</h3>
          <p>
            La <strong>Base de Datos Nacional de Subvenciones</strong> (BDNS) publica todas las convocatorias de ayudas públicas de España, estatales, autonómicas y locales. Es la fuente más fiable para comprobar si una ayuda existe de verdad y si su plazo está abierto.
          </p>

          <h2 className="text-2xl font-bold text-primary-600">Qué gastos suelen cubrir (y cuáles no)</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-primary-600 text-white">
                  <th className="px-4 py-3 text-left font-semibold">Suelen encajar si las bases lo permiten</th>
                  <th className="px-4 py-3 text-left font-semibold">Suelen quedar fuera</th>
                </tr>
              </thead>
              <tbody>
                {gastos.map(([dentro, fuera]) => (
                  <tr key={dentro} className="border-b border-gray-200 even:bg-gray-50">
                    <td className="px-4 py-3 font-medium text-gray-800">{dentro}</td>
                    <td className="px-4 py-3 text-gray-600">{fuera}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p>
            La regla es simple: <strong>solo es subvencionable lo que dicen las bases</strong>, en el plazo y con la justificación que exigen.
          </p>

          <BlogBanner variant="default" />

          <h2 className="text-2xl font-bold text-primary-600">Cómo no perder la próxima convocatoria</h2>
          <p>Muchas ayudas se conceden por orden de solicitud o tienen plazos cortos. Ten preparado antes de que se publiquen:</p>
          <ul className="space-y-3">
            {preparacion.map((item) => (
              <li key={item} className="flex items-start gap-3 p-4 border border-gray-200 rounded-xl">
                <span className="text-primary-600 font-bold shrink-0 mt-0.5">▸</span>
                <span className="text-gray-600 text-sm">{item}</span>
              </li>
            ))}
          </ul>
          <p>
            Cuando salga la convocatoria, comprueba beneficiarios, gastos subvencionables, plazo de ejecución y forma de justificación. Presenta con margen y guarda el justificante de registro.
          </p>

          <h2 className="text-2xl font-bold text-primary-600">Evita tener que devolver la ayuda</h2>
          <p>
            La Ley General de Subvenciones prevé el <strong>reintegro</strong> cuando no se cumplen las condiciones. Los motivos más habituales son:
          </p>
          <ul className="space-y-3">
            {reintegro.map((item) => (
              <li key={item} className="flex items-start gap-3 p-4 border border-gray-200 rounded-xl">
                <span className="text-primary-600 font-bold shrink-0 mt-0.5">▸</span>
                <span className="text-gray-600 text-sm">{item}</span>
              </li>
            ))}
          </ul>
          <p>
            Antes de pedir nada, ten claro el proyecto. Una ayuda no sustituye a un plan. Si no sabes por dónde empezar, esta guía sobre <Link href="/como-digitalizar-tu-negocio/" className="text-accent-500 hover:underline">cómo digitalizar tu negocio</Link> te ayuda a priorizar, y una <Link href="/auditoria-digital/" className="text-accent-500 hover:underline">auditoría digital</Link> te dice qué merece inversión y qué no.
          </p>

          <div className="bg-primary-50 rounded-xl p-6 border border-primary-100">
            <p className="font-semibold text-primary-700 mb-2">¿Quieres saber qué digitalizar primero en tu pyme?</p>
            <p className="text-gray-600 text-sm mb-4">En Mkt Web 360 analizamos tu situación y te decimos qué inversión tiene sentido ahora y cuál puede esperar, haya o no convocatoria abierta.</p>
            <Link href="/auditoria-digital/" className="inline-block bg-accent-500 text-white px-6 py-2.5 rounded-full font-semibold text-sm hover:bg-accent-600 transition-colors">
              Ver auditoría digital
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
            Servicios relacionados: <Link href="/auditoria-digital/" className="text-accent-500 hover:underline">Auditoría Digital</Link> · <Link href="/diseno-de-paginas-web/" className="text-accent-500 hover:underline">Diseño de Páginas Web</Link>
          </p>
        </div>

        <nav className="mt-12 pt-8 border-t border-gray-200">
          <Link href="/blog/" className="text-accent-500 hover:text-accent-600 font-medium text-sm">← Volver al blog</Link>
        </nav>
      </article>
      <RelatedArticles currentSlug="ayudas-digitalizar-pyme-2026-tras-kit-digital" />
    </>
  );
}
