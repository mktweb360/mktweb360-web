import Image from "next/image";
import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { RelatedArticles } from "@/components/RelatedArticles";
import { BlogBanner } from "@/components/BlogBanner";

export const metadata: Metadata = {
  title: { absolute: "Accesibilidad web obligatoria para tiendas online en España" },
  description:
    "Desde el 28 de junio de 2025 las tiendas online deben ser accesibles. Quién está obligado por la Ley 11/2023, excepciones y checklist práctico para cumplir.",
  alternates: { canonical: "https://www.mktweb360.com/accesibilidad-web-obligatoria-tiendas-online-espana/" },
  openGraph: {
    title: "Accesibilidad web obligatoria para tiendas online en España | Mkt Web 360",
    description:
      "Desde el 28 de junio de 2025 las tiendas online deben ser accesibles. Quién está obligado por la Ley 11/2023, excepciones y checklist práctico para cumplir.",
    url: "https://www.mktweb360.com/accesibilidad-web-obligatoria-tiendas-online-espana/",
    type: "article",
    images: [{ url: "/og-accesibilidad-web-obligatoria-tiendas-online-espana.jpg", width: 1200, height: 630 }],
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "Accesibilidad web obligatoria en España: qué deben hacer las tiendas online",
  description:
    "Desde el 28 de junio de 2025 las tiendas online deben ser accesibles. Quién está obligado por la Ley 11/2023, excepciones y checklist práctico para cumplir.",
  author: { "@type": "Organization", name: "Mkt Web 360 SLU" },
  publisher: { "@type": "Organization", name: "Mkt Web 360 SLU", url: "https://www.mktweb360.com" },
  datePublished: "2026-09-25",
  dateModified: "2026-09-25",
  image: "https://www.mktweb360.com/og-accesibilidad-web-obligatoria-tiendas-online-espana.jpg",
  url: "https://www.mktweb360.com/accesibilidad-web-obligatoria-tiendas-online-espana/",
  mainEntityOfPage: "https://www.mktweb360.com/accesibilidad-web-obligatoria-tiendas-online-espana/",
};

const FAQS = [
  {
    q: "¿Desde cuándo es obligatoria la accesibilidad en las tiendas online?",
    a: "Desde el 28 de junio de 2025, fecha de aplicación de la Directiva (UE) 2019/882, incorporada en España por la Ley 11/2023. La ley prevé un periodo transitorio para ciertas situaciones anteriores a esa fecha, que conviene revisar en su disposición transitoria única.",
  },
  {
    q: "¿Una microempresa tiene que hacer su web accesible?",
    a: "Las microempresas que prestan servicios, con menos de 10 personas y hasta 2 millones de euros de facturación o balance, están exentas de los requisitos de esta ley. Aun así, hacer la web accesible mejora la experiencia y el posicionamiento, y la exención desaparece si la empresa crece.",
  },
  {
    q: "¿Mi web corporativa sin tienda está obligada?",
    a: "La obligación de la Ley 11/2023 se centra en servicios concretos, como el comercio electrónico. Una web solo informativa no entra automáticamente, aunque pueden aplicarse otras normas según el sector. Si añades compra, reservas o pagos online, vuelve a revisarlo.",
  },
  {
    q: "¿Qué norma técnica sirve de referencia?",
    a: "La referencia habitual es la norma europea EN 301 549, que incorpora los criterios de las pautas WCAG. Cumplir el nivel AA de WCAG es una buena base práctica para una tienda online, junto con las pruebas reales con teclado y lector de pantalla.",
  },
  {
    q: "¿Puedo alegar que es demasiado caro?",
    a: "Solo mediante una evaluación documentada de carga desproporcionada, que compare costes y beneficios según tu tamaño y recursos. Debe conservarse, revisarse cuando cambie el servicio y estar disponible para la autoridad. La falta de tiempo o de prioridad no justifica incumplir.",
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

const areas = [
  ["Navegación", "Toda la web se puede usar solo con teclado y el foco es visible"],
  ["Imágenes", "Las fotos de producto tienen texto alternativo útil"],
  ["Contraste", "El texto se lee bien sobre el fondo, también en botones y precios"],
  ["Formularios", "Cada campo tiene etiqueta y los errores se explican en texto"],
  ["Carrito y pago", "El proceso completo funciona con lector de pantalla"],
  ["Documentos", "PDF de condiciones o facturas accesibles o con alternativa"],
  ["Móvil", "La web se puede ampliar sin perder contenido ni funciones"],
];

const checklist = [
  "Confirma si tu web permite comprar o contratar a consumidores.",
  "Comprueba si eres microempresa y guarda la documentación.",
  "Haz inventario: web, app, checkout, formularios, emails transaccionales y PDF.",
  "Recorre una compra completa usando solo el teclado.",
  "Revisa textos alternativos, contraste y tamaño de los botones.",
  "Etiqueta todos los campos y reescribe los mensajes de error.",
  "Prueba con un lector de pantalla gratuito (NVDA en Windows o VoiceOver en Mac y iPhone).",
  "Revisa pasarela de pago, chat y plugins de terceros: también forman parte del servicio.",
  "Redacta la declaración de accesibilidad y documenta las pruebas que has hecho.",
];

const fuentes = [
  {
    texto: "Ley 11/2023, de 8 de mayo (BOE-A-2023-11022). Agencia Estatal BOE.",
    url: "https://www.boe.es/buscar/act.php?id=BOE-A-2023-11022",
  },
  {
    texto: "Directiva (UE) 2019/882 sobre los requisitos de accesibilidad de los productos y servicios. EUR-Lex.",
    url: "https://eur-lex.europa.eu/eli/dir/2019/882/oj?locale=es",
  },
  {
    texto:
      "Real Decreto Legislativo 1/2013, texto refundido de la Ley General de derechos de las personas con discapacidad (BOE-A-2013-12632).",
    url: "https://www.boe.es/buscar/act.php?id=BOE-A-2013-12632",
  },
];

export default function AccesibilidadWebTiendasOnlinePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <article className="max-w-3xl mx-auto px-4 py-12">
        <Breadcrumbs crumbs={[{ label: "Inicio", href: "/" }, { label: "Blog", href: "/blog/" }, { label: "Accesibilidad web obligatoria en España" }]} />

        <header className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="bg-primary-100 text-primary-700 text-xs font-medium px-2.5 py-0.5 rounded-full">Ecommerce</span>
            <time className="text-sm text-gray-400" dateTime="2026-09-25">25 de septiembre de 2026</time>
          </div>
          <h1 className="text-4xl font-bold text-primary-600 mb-4 leading-tight">
            Accesibilidad web obligatoria en España: qué deben hacer las tiendas online
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            La Ley 11/2023 obliga desde junio de 2025 a que los servicios de comercio electrónico sean accesibles. Quién está obligado, qué excepciones existen y cómo cumplir paso a paso.
          </p>
          <Image
            src="/og-accesibilidad-web-obligatoria-tiendas-online-espana.jpg"
            alt="Accesibilidad web obligatoria para tiendas online en España"
            width={1200}
            height={630}
            className="w-full rounded-2xl mt-6"
            priority
          />
        </header>

        <div className="text-gray-700 space-y-6 leading-relaxed">
          <p>
            Desde el <strong>28 de junio de 2025</strong>, las tiendas online que venden a consumidores en España deben cumplir requisitos de accesibilidad. La obligación procede de la <strong>Directiva (UE) 2019/882</strong>, conocida como Acta Europea de Accesibilidad, que España incorporó mediante la <strong>Ley 11/2023</strong>. Si tu web permite comprar o contratar online y tu empresa no es una microempresa, lo más probable es que estés dentro.
          </p>

          <h2 className="text-2xl font-bold text-primary-600">Resumen rápido</h2>
          <ul className="space-y-3">
            {[
              <>La Ley 11/2023 incorpora la Directiva (UE) 2019/882 y se aplica desde el 28 de junio de 2025.</>,
              <><strong>Los servicios de comercio electrónico</strong> dirigidos a consumidores están incluidos.</>,
              <>Las <strong>microempresas que prestan servicios</strong> (menos de 10 personas y hasta 2 millones de euros de facturación o balance) quedan exentas de estos requisitos.</>,
              <>Si alegas que cumplir supone una <strong>carga desproporcionada</strong>, tienes que evaluarlo y documentarlo.</>,
              <>La accesibilidad afecta a todo el recorrido: navegación, fichas de producto, formularios, carrito, pago y documentos.</>,
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3 p-4 border border-gray-200 rounded-xl">
                <span className="text-primary-600 font-bold shrink-0 mt-0.5">▸</span>
                <span className="text-gray-600 text-sm">{item}</span>
              </li>
            ))}
          </ul>

          <h2 className="text-2xl font-bold text-primary-600">Qué norma te obliga y desde cuándo</h2>
          <p>
            La Directiva (UE) 2019/882 armoniza en toda la Unión Europea los requisitos de accesibilidad de determinados productos y servicios. Su objetivo es que las personas con discapacidad, y también las personas mayores o con limitaciones temporales, puedan usarlos en igualdad de condiciones.
          </p>
          <p>
            España la transpuso en el <strong>Título I de la Ley 11/2023, de 8 de mayo</strong>. La directiva fijó como fecha de aplicación efectiva el 28 de junio de 2025, y la ley recoge un periodo transitorio en su disposición transitoria única para determinadas situaciones previas a esa fecha.
          </p>

          <h2 className="text-2xl font-bold text-primary-600">¿Tu tienda online está obligada?</h2>
          <p>
            La norma se aplica a una lista cerrada de productos y servicios. Entre los servicios figuran los de <strong>comercio electrónico</strong>: servicios prestados a distancia, por medios electrónicos y a petición del consumidor, para celebrar un contrato de consumo.
          </p>
          <p>Casos que, en principio, entran:</p>
          <ul className="space-y-3">
            {[
              "Tiendas online de productos físicos o digitales.",
              "Webs y apps donde el cliente reserva y paga un servicio.",
              "Plataformas de suscripción con alta y pago online.",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3 p-4 border border-gray-200 rounded-xl">
                <span className="text-primary-600 font-bold shrink-0 mt-0.5">▸</span>
                <span className="text-gray-600 text-sm">{item}</span>
              </li>
            ))}
          </ul>
          <p>
            Una web <strong>meramente informativa</strong>, sin compra ni contratación, no queda automáticamente dentro de esta obligación concreta. Eso no significa que la accesibilidad no importe: sigue siendo una cuestión de igualdad, de experiencia de usuario y, cada vez más, de posicionamiento.
          </p>

          <h2 className="text-2xl font-bold text-primary-600">La excepción de las microempresas</h2>
          <p>
            La principal excepción afecta a las <strong>microempresas que prestan servicios</strong>. La directiva define microempresa como la que ocupa a <strong>menos de 10 personas</strong> y cuyo volumen de negocio anual o balance general anual <strong>no supera los 2 millones de euros</strong>.
          </p>
          <p>
            Si te acoges a esta excepción, conserva la documentación que lo justifica: plantilla media, cuentas anuales o facturación. Si tu empresa crece y supera esos umbrales, la exención deja de aplicarse.
          </p>

          <h2 className="text-2xl font-bold text-primary-600">Carga desproporcionada: no es una puerta trasera</h2>
          <p>
            La ley permite no aplicar un requisito cuando cumplirlo exigiría una <strong>alteración fundamental</strong> del servicio o una <strong>carga desproporcionada</strong>. No basta con decirlo. Tienes que:
          </p>
          <ol className="space-y-3 list-decimal list-inside">
            <li className="text-gray-600">
              Hacer una evaluación por escrito que compare el coste de adaptación con tu tamaño, recursos y el beneficio para las personas con discapacidad.
            </li>
            <li className="text-gray-600">Conservarla y tenerla disponible si la autoridad competente la pide.</li>
            <li className="text-gray-600">Revisarla periódicamente y cuando cambies el servicio.</li>
          </ol>
          <p>
            No se considera carga desproporcionada la falta de prioridad o de tiempo. Si recibes financiación pública para accesibilidad, tampoco puedes alegarla.
          </p>

          <h2 className="text-2xl font-bold text-primary-600">Qué pide la accesibilidad en la práctica</h2>
          <p>
            La ley describe requisitos funcionales en sus anexos. En la práctica, la referencia técnica habitual para webs y apps es la norma europea <strong>EN 301 549</strong>, que incorpora los criterios de las pautas <strong>WCAG</strong>. Traducido a una tienda online, significa:
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-primary-600 text-white">
                  <th className="px-4 py-3 text-left font-semibold">Área</th>
                  <th className="px-4 py-3 text-left font-semibold">Qué comprobar</th>
                </tr>
              </thead>
              <tbody>
                {areas.map(([area, check]) => (
                  <tr key={area} className="border-b border-gray-200 even:bg-gray-50">
                    <td className="px-4 py-3 font-medium text-gray-800">{area}</td>
                    <td className="px-4 py-3 text-gray-600">{check}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p>
            Además, debes <strong>publicar información sobre cómo cumple tu servicio los requisitos de accesibilidad</strong>, normalmente en una declaración de accesibilidad enlazada desde el pie de la web o desde las condiciones generales.
          </p>

          <BlogBanner variant="ecommerce" />

          <h2 className="text-2xl font-bold text-primary-600">Checklist para empezar esta semana</h2>
          <ul className="space-y-3">
            {checklist.map((item) => (
              <li key={item} className="flex items-start gap-3 p-4 border border-gray-200 rounded-xl">
                <span className="text-primary-600 font-bold shrink-0 mt-0.5">▸</span>
                <span className="text-gray-600 text-sm">{item}</span>
              </li>
            ))}
          </ul>
          <p>
            Si tu tienda funciona sobre una plantilla o un tema antiguo, lo habitual es que los problemas estén en la base del diseño. En ese caso, a veces compensa más un <Link href="/diseno-de-paginas-web/diseno-tiendas-online/" className="text-accent-500 hover:underline">rediseño de la tienda online</Link> que parchear pantalla por pantalla.
          </p>

          <h2 className="text-2xl font-bold text-primary-600">Vigilancia y sanciones</h2>
          <p>
            La ley encarga la vigilancia a las <strong>autoridades que designen las comunidades autónomas</strong> y a una unidad técnica estatal de coordinación. Regula el régimen de control y sanciones en su <strong>capítulo XI</strong>. La cuantía concreta depende de la infracción y del procedimiento aplicable. Desconfía de cifras genéricas de “multas por accesibilidad” que no citen el artículo exacto.
          </p>

          <h2 className="text-2xl font-bold text-primary-600">Accesibilidad también es negocio</h2>
          <p>
            Una web accesible se entiende mejor, se usa mejor en el móvil y comunica mejor su estructura a los buscadores. Muchas de las correcciones, como encabezados ordenados, textos alternativos y formularios claros, coinciden con buenas prácticas de SEO y de conversión. Si quieres saber en qué punto está tu web, una <Link href="/auditoria-digital/" className="text-accent-500 hover:underline">auditoría digital</Link> es el punto de partida más rápido.
          </p>

          <div className="bg-primary-50 rounded-xl p-6 border border-primary-100">
            <p className="font-semibold text-primary-700 mb-2">¿Tu tienda online cumple los requisitos de accesibilidad?</p>
            <p className="text-gray-600 text-sm mb-4">En Mkt Web 360 revisamos tu tienda y te decimos qué hay que corregir, con qué prioridad y con qué coste real. Sin alarmismos y sin cifras inventadas.</p>
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
            Servicios relacionados: <Link href="/diseno-de-paginas-web/diseno-tiendas-online/" className="text-accent-500 hover:underline">Diseño de Tiendas Online</Link> · <Link href="/auditoria-digital/" className="text-accent-500 hover:underline">Auditoría Digital</Link>
          </p>
        </div>

        <nav className="mt-12 pt-8 border-t border-gray-200">
          <Link href="/blog/" className="text-accent-500 hover:text-accent-600 font-medium text-sm">← Volver al blog</Link>
        </nav>
      </article>
      <RelatedArticles currentSlug="accesibilidad-web-obligatoria-tiendas-online-espana" />
    </>
  );
}
