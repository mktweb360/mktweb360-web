import Image from "next/image";
import type { Metadata } from "next";
import Link from "next/link";
import type { ReactNode } from "react";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { RelatedArticles } from "@/components/RelatedArticles";
import { BlogBanner } from "@/components/BlogBanner";
import { alternatesFor } from "@/lib/i18n/routes";
import { planesSeo, type PlanSeo } from "@/lib/planes-seo";
import { preciosPlanesSeo } from "@/lib/precios-planes";

// 28/10/2026 — tema 2 de la propuesta de blog del 27/10, aprobado por José.
// Borrador y fuentes: OneDrive › mktweb360.com › 02-Contenidos › «2026-10-28 BORRADOR — Tema 2 SEO para pymes».
// Los precios NO se escriben a mano: salen del catálogo de MktOS (preciosPlanesSeo) como en /precios-seo/.

const SLUG = "seo-para-pymes-guia";
const URL = `https://www.mktweb360.com/${SLUG}/`;
const OG = "/og-seo-para-pymes-vineta.jpg";
const TITLE = "SEO para pymes: qué hacer, cuánto cuesta y por dónde empezar";
const DESCRIPTION =
  "Guía de SEO para pymes en 2026: qué puedes hacer tú esta semana, qué conviene delegar, cuánto cuesta un plan SEO y cuánto tarda en notarse.";
const H1 = "SEO para pymes en 2026: guía práctica para empezar sin tirar el dinero";
const DATE = "2026-10-28";

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: alternatesFor("/seo-para-pymes-guia/") ?? { canonical: URL },
  openGraph: {
    title: `${TITLE} | Mkt Web 360`,
    description: DESCRIPTION,
    url: URL,
    type: "article",
    images: [{ url: OG, width: 1200, height: 630 }],
  },
};

// Planes que se muestran en la tabla, en este orden (Ecommerce L va a presupuesto y se menciona en la FAQ).
const ORDEN: PlanSeo["id"][] = ["local", "pyme", "crecimiento", "ecommerce-s", "ecommerce-m"];
const PARA_QUIEN: Record<string, string> = {
  local: "Autónomos y profesionales con web sencilla (hasta 10 páginas) que captan clientes en su zona",
  pyme: "Pymes con web corporativa (hasta 30 páginas)",
  crecimiento: "Varias sedes o web de servicios más amplia (hasta 80 páginas)",
  "ecommerce-s": "Tiendas pequeñas (hasta 500 productos)",
  "ecommerce-m": "Tiendas medianas (hasta 5.000 productos)",
};

function faqs(min: number, max: number) {
  return [
    {
      q: "¿Merece la pena el SEO para una pyme pequeña?",
      a: "Suele merecer la pena cuando hay gente buscando lo que vendes y puedes mantener el trabajo al menos 6-12 meses. Si necesitas clientes la semana que viene, la publicidad en Google da resultados antes, y las dos cosas se pueden combinar.",
    },
    {
      q: "¿Puedo hacer SEO yo mismo?",
      a: "Sí, una parte: Search Console, la ficha de Google, reseñas y textos de tus servicios. Lo técnico y la estrategia de palabras clave son lo que más se suele delegar, porque un error ahí puede sacar páginas de Google.",
    },
    {
      q: "¿Cuánto cuesta el SEO para una pyme?",
      a: `En nuestros planes publicados sin permanencia, entre ${min} y ${max} € al mes sin IVA, según el tamaño de la web, el número de fichas de Google y el contenido mensual. Las tiendas con más de 5.000 productos o varios idiomas van a presupuesto.`,
    },
    {
      q: "¿Qué diferencia hay entre SEO local y SEO para pymes?",
      a: "El SEO local es una parte del SEO de una pyme: se centra en aparecer en tu zona, sobre todo en el mapa de Google y en búsquedas con ciudad o «cerca de mí». Si vendes en toda España o por internet, el SEO local pesa menos.",
    },
    {
      q: "¿El SEO sigue sirviendo con la IA?",
      a: "Sí. Google indica que sus funciones de IA usan páginas indexadas y aptas para la Búsqueda, así que el SEO es la base para aparecer también en esas respuestas.",
    },
  ];
}

const frentes = [
  ["Técnico", "Que Google pueda rastrear, indexar y cargar rápido tu web en móvil", "Páginas clave indexadas en Search Console, Core Web Vitals en verde"],
  ["Contenido", "Una página por servicio y por búsqueda principal, que responda a lo que pregunta el cliente", "Suben las impresiones de búsquedas de servicio"],
  ["Local", "Ficha de Google completa y los mismos datos en web y directorios", "Más llamadas y visitas desde la ficha"],
  ["Autoridad", "Menciones y enlaces reales de clientes, proveedores, asociaciones y prensa", "Aparecen dominios nuevos que te enlazan"],
  ["IA", "Contenido que los asistentes pueden leer y citar, y datos de empresa coherentes", "Apareces en el informe de IA generativa de Search Console y en preguntas de prueba"],
];

const tareas: ReactNode[] = [
  <><strong>Da de alta Google Search Console</strong> y verifícala por archivo HTML o por DNS. Es gratis y te da los datos reales de Google.</>,
  <><strong>Completa tu ficha de Google:</strong> nombre real del negocio, categoría, servicios, horario y fotos propias.</>,
  <><strong>Haz una lista de 10 preguntas</strong> que te hacen siempre tus clientes. Cada una es un posible contenido.</>,
  <><strong>Revisa que cada servicio tenga su propia página,</strong> con un título que diga qué haces y dónde, si trabajas en una zona.</>,
  <><strong>Pide reseñas a todos tus clientes,</strong> no solo a los que crees contentos, y respóndelas todas.</>,
  <><strong>Comprueba que tu nombre, teléfono y dirección son iguales</strong> en la web, la ficha y los directorios donde apareces.</>,
  <><strong>Repasa la <Link href="/auditoria-seo-basica/" className="text-accent-500 hover:underline">checklist de auditoría web de 30 puntos</Link></strong> y apunta lo que falla.</>,
];

const delegar: ReactNode[] = [
  <><strong>El SEO técnico:</strong> redirecciones, indexación, velocidad y datos estructurados. Un error aquí puede sacar páginas de Google sin que te des cuenta.</>,
  <><strong>La estrategia de palabras clave:</strong> decidir qué búsqueda ataca cada página para que no compitan entre sí.</>,
  <><strong>El contenido con regularidad:</strong> escribir cada mes cuesta tiempo. Delegarlo no significa que no participes: nadie conoce tu negocio como tú.</>,
  <><strong>La medición:</strong> comparar cada mes los mismos datos (Search Console y contactos reales) y decidir qué ajustar.</>,
];

const preguntas: ReactNode[] = [
  <><strong>¿Qué resultados esperas y en qué plazo?</strong> Desconfía de quien te prometa una posición: Google advierte de que nadie puede garantizar el primer puesto.</>,
  <><strong>¿Qué vas a hacer el primer mes?</strong> Debería empezar por una auditoría y un mapa de palabras clave, no por publicar sin más.</>,
  <><strong>¿Cómo lo vamos a medir?</strong> Con Search Console y con los contactos reales, no con métricas de una herramienta propia que no puedes comprobar.</>,
  <><strong>¿Quién hace el trabajo?</strong> Conviene saber si lo hace la persona con la que hablas o se subcontrata.</>,
  <><strong>¿Hay permanencia?</strong> Y qué pasa con el contenido y los accesos si lo dejas.</>,
  <><strong>¿Cómo consigues enlaces?</strong> Las técnicas que manipulan enlaces van contra las políticas de Google y ponen la web en riesgo. Lo explicamos en <Link href="/link-building-pymes/" className="text-accent-500 hover:underline">link building para pymes</Link>.</>,
];

const fuentes = [
  {
    texto: "INE: Encuesta sobre el uso de TIC y del comercio electrónico en las empresas, nota de prensa del 22/10/2026 (porcentajes sobre empresas con conexión a internet).",
    url: "https://www.ine.es/dyngs/Prensa/ETICCE20251T2026.htm",
  },
  { texto: "Google Search Central: ¿Necesitas un SEO?", url: "https://developers.google.com/search/docs/fundamentals/do-i-need-seo" },
  { texto: "Google Search Central: AI features and your website.", url: "https://developers.google.com/search/docs/appearance/ai-features" },
  { texto: "Google Search Central: Políticas de spam de la Búsqueda de Google (spam de enlaces).", url: "https://developers.google.com/search/docs/essentials/spam-policies" },
  { texto: "Ayuda de Perfil de Empresa: Directrices para mostrar adecuadamente tu empresa en Google.", url: "https://support.google.com/business/answer/3038177?hl=es" },
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

export default async function SeoParaPymesPage() {
  const { precios } = await preciosPlanesSeo();
  const planes = planesSeo("es", precios);
  const tabla = ORDEN.map((id) => planes.find((p) => p.id === id)).filter((p): p is PlanSeo => !!p && p.precio !== null);
  const importes = tabla.map((p) => p.precio as number);
  const min = Math.min(...importes);
  const max = Math.max(...importes);
  const FAQS = faqs(min, max);

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
    <><strong>El punto de partida importa:</strong> según el INE (22/10/2026), solo el 36,2 % de las empresas españolas de menos de 10 empleados tiene web, frente al 82,9 % de las de 10 o más.</>,
    <><strong>Hay tareas que puedes hacer tú,</strong> como dar de alta Search Console, completar la ficha de Google o reescribir tus páginas de servicio.</>,
    <><strong>Conviene delegar</strong> lo técnico, la estrategia de palabras clave y el seguimiento mensual.</>,
    <><strong>Precio:</strong> en nuestros planes publicados va de {min} a {max} € al mes sin IVA, según el tamaño de la web.</>,
    <><strong>Plazos orientativos:</strong> 3-6 meses para los primeros resultados y 6-12 para consolidar. Nadie puede garantizarte un puesto.</>,
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <article className="mw-article max-w-3xl mx-auto px-4 py-12">
        <Breadcrumbs crumbs={[{ label: "Inicio", href: "/" }, { label: "Blog", href: "/blog/" }, { label: "SEO para pymes" }]} />

        <header className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="bg-primary-100 text-primary-700 text-xs font-medium px-2.5 py-0.5 rounded-full">SEO</span>
            <time className="text-sm text-gray-400" dateTime={DATE}>28 de octubre de 2026</time>
          </div>
          <h1 className="text-4xl font-bold text-primary-600 mb-4 leading-tight">{H1}</h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Qué es el SEO para una pyme, qué puedes hacer tú esta misma semana, qué conviene delegar, cuánto cuesta y cuánto tarda. Sin promesas de posiciones.
          </p>
          <Image src={OG} alt="Viñeta: una comerciante se pregunta por qué nadie la encuentra en Google y después señala su lista de tareas SEO de la semana" width={1200} height={630} className="w-full rounded-2xl mt-6" priority />
        </header>

        <div className="text-gray-700 space-y-6 leading-relaxed">
          <p>
            El <strong>SEO para pymes</strong> es el trabajo de conseguir que tu web aparezca en Google cuando un posible cliente busca lo que vendes, sin pagar por cada clic. En una pyme suele tener cinco frentes: que Google pueda leer la web, que cada página responda a una búsqueda concreta, que la ficha de Google esté completa, que otros sitios te mencionen y que los asistentes de IA te puedan citar. Los primeros resultados suelen llegar entre los 3 y los 6 meses.
          </p>

          <h2 className="text-2xl font-bold text-primary-600">Resumen rápido</h2>
          <Lista items={resumen} />

          <h2 className="text-2xl font-bold text-primary-600">Por qué el SEO tiene sentido para una pyme</h2>
          <p>
            Una pyme no puede competir en presupuesto de publicidad con una gran empresa, pero sí en búsquedas concretas: un servicio en una zona, un problema muy específico de su sector, una pregunta que sus clientes hacen siempre. Ahí, una web bien hecha y una ficha de Google cuidada compiten de tú a tú.
          </p>
          <p>
            Además, la mayoría de las pequeñas empresas parte de cero. Con el 36,2 % de las microempresas con web (INE, 2026), tener una página que responda bien a lo que buscan tus clientes ya te separa de buena parte de tu competencia local.
          </p>

          <h2 className="text-2xl font-bold text-primary-600">Los 5 frentes del SEO de una pyme</h2>
          <Tabla cabecera={["Frente", "Qué es", "Señal de que va bien"]} filas={frentes} />

          <h2 className="text-2xl font-bold text-primary-600">Lo que puedes hacer tú esta semana</h2>
          <Lista items={tareas} numerada />

          <h2 className="text-2xl font-bold text-primary-600">Qué conviene delegar y por qué</h2>
          <Lista items={delegar} />

          <h2 className="text-2xl font-bold text-primary-600">Cuánto cuesta el SEO para una pyme</h2>
          <p>
            Depende del tamaño de la web, de cuántas fichas de Google tengas y de cuánto contenido haga falta. Estos son nuestros planes publicados, sin IVA y sin permanencia:
          </p>
          <Tabla cabecera={["Plan", "Para quién", "Precio al mes (sin IVA)"]} filas={tabla.map((p) => [p.nombre, PARA_QUIEN[p.id], `${p.precio} €`])} />
          <p>
            Qué incluye cada plan y sus límites está en <Link href="/precios-seo/" className="text-accent-500 hover:underline">precios SEO</Link>. Si quieres comparar con el mercado, revisa <Link href="/cuanto-cuesta-agencia-marketing-digital-espana-2026/" className="text-accent-500 hover:underline">cuánto cuesta una agencia de marketing digital en España</Link>.
          </p>

          <BlogBanner variant="seogeogbp" />

          <h2 className="text-2xl font-bold text-primary-600">Cuánto tarda el SEO en notarse</h2>
          <p>
            De forma orientativa, los primeros resultados llegan entre los 3 y los 6 meses y se consolidan entre los 6 y los 12. La ficha de Google suele moverse antes, en 1-2 meses. Lo primero que sube son las impresiones en Search Console; los clics y los contactos llegan después. Lo explicamos fase a fase en <Link href="/cuanto-tarda-el-seo-en-dar-resultados/" className="text-accent-500 hover:underline">cuánto tarda el SEO en dar resultados</Link>.
          </p>

          <h2 className="text-2xl font-bold text-primary-600">Cómo elegir a quién contratar: 6 preguntas</h2>
          <Lista items={preguntas} numerada />
          <p>
            Tienes más criterios en <Link href="/como-elegir-agencia-marketing-digital-espana/" className="text-accent-500 hover:underline">cómo elegir una agencia de marketing digital</Link>.
          </p>

          <h2 className="text-2xl font-bold text-primary-600">Por dónde empezar</h2>
          <p>
            Si no sabes cómo está tu web, empieza por ahí. Puedes hacerlo tú con la <Link href="/auditoria-seo-basica/" className="text-accent-500 hover:underline">checklist de 30 puntos</Link> o pedirnos el diagnóstico gratuito. Si después quieres que nos encarguemos, este es nuestro <Link href="/seo-posicionamiento-web-organico/" className="text-accent-500 hover:underline">servicio de posicionamiento SEO</Link>.
          </p>
          <div className="bg-primary-50 rounded-xl p-6 border border-primary-100">
            <p className="font-semibold text-primary-700 mb-2">Diagnóstico gratuito de tu web</p>
            <p className="text-gray-600 text-sm mb-4">
              Revisamos el estado técnico, tu visibilidad en Google y en asistentes de IA, tu ficha de Google y tres oportunidades de búsqueda. Lo recibes por correo en un máximo de 24 horas laborables, sin compromiso.
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
            Servicios relacionados: <Link href="/seo-posicionamiento-web-organico/" className="text-accent-500 hover:underline">SEO Posicionamiento Web</Link> · <Link href="/precios-seo/" className="text-accent-500 hover:underline">Planes y precios SEO</Link> · <Link href="/seo-local/" className="text-accent-500 hover:underline">SEO local</Link>
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
