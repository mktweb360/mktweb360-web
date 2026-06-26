import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { RelatedArticles } from "@/components/RelatedArticles";
import { BlogBanner } from "@/components/BlogBanner";

export const metadata: Metadata = {
  title: "Cuánto cuesta una agencia de marketing digital en España en 2026",
  description:
    "Precios reales de agencias de marketing digital en España 2026: SEO, Google Ads y redes sociales. Lo que incluye cada rango y cómo no equivocarte al elegir.",
  alternates: { canonical: "https://www.mktweb360.com/cuanto-cuesta-agencia-marketing-digital-espana-2026/" },
  openGraph: {
    title: "Cuánto cuesta una agencia de marketing digital en España en 2026 | Mkt Web 360",
    description: "Precios reales por servicio, qué incluye cada rango y cómo no equivocarte al elegir agencia en España en 2026.",
    url: "https://www.mktweb360.com/cuanto-cuesta-agencia-marketing-digital-espana-2026/",
    type: "article",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "Cuánto cuesta una agencia de marketing digital en España en 2026",
  description: "Precios reales por servicio, qué incluye cada rango y cómo no equivocarte al elegir agencia de marketing digital en España en 2026.",
  author: { "@type": "Organization", name: "Mkt Web 360 SLU" },
  publisher: { "@type": "Organization", name: "Mkt Web 360 SLU", url: "https://www.mktweb360.com" },
  datePublished: "2026-06-26",
  url: "https://www.mktweb360.com/cuanto-cuesta-agencia-marketing-digital-espana-2026/",
  mainEntityOfPage: "https://www.mktweb360.com/cuanto-cuesta-agencia-marketing-digital-espana-2026/",
};

const FAQS = [
  {
    q: "¿Cuánto cuesta de media una agencia de marketing digital en España?",
    a: "Depende del servicio y del alcance. Para una pyme, lo habitual es moverse entre 300 € y 1.500 € al mes por servicio. Un plan combinado de SEO, gestión de Google Ads y redes sociales suele situarse entre 800 € y 2.500 € mensuales según objetivos y competencia del sector.",
  },
  {
    q: "¿El precio incluye la inversión en publicidad?",
    a: "No, y es la confusión más frecuente. El fee de gestión de Google Ads (lo que cobra la agencia por gestionar las campañas) es siempre independiente de la inversión publicitaria (lo que pagas a Google por los clics). Si una agencia no te separa con claridad ambos conceptos, desconfía.",
  },
  {
    q: "¿Por qué hay tanta diferencia de precio entre agencias?",
    a: "Por el nivel del equipo, el alcance del trabajo y el modelo de negocio. Una agencia con perfiles senior, estrategia propia y reporting real cuesta más que un servicio low-cost que automatiza sin criterio. La diferencia no está en el precio, sino en lo que recibes por él.",
  },
  {
    q: "¿Merece la pena contratar una agencia para una pyme?",
    a: "Sí, cuando ya tienes una base mínima —web que convierte y propuesta de valor clara— y necesitas escalar captación con criterio. Sin esa base, cualquier inversión en marketing amplifica problemas. Por eso una buena agencia empieza por diagnosticar antes de vender servicios.",
  },
  {
    q: "¿Cómo sé si estoy pagando de más?",
    a: "Revisa si puedes medir el retorno. Según Esconzeta (2026), el 68% de las pymes con agencia no son capaces de calcular el ROI de su inversión. Si no sabes qué te genera lo que pagas, el problema no es el precio: es la falta de medición y transparencia.",
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

export default function CuantoCuestaAgenciaPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <article className="max-w-3xl mx-auto px-4 py-12">
        <Breadcrumbs crumbs={[{ label: "Inicio", href: "/" }, { label: "Blog", href: "/blog/" }, { label: "Cuánto cuesta una agencia de marketing digital" }]} />

        <header className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="bg-primary-100 text-primary-700 text-xs font-medium px-2.5 py-0.5 rounded-full">Estrategia Digital</span>
            <time className="text-sm text-gray-400" dateTime="2026-06-26">26 de junio de 2026</time>
          </div>
          <h1 className="text-4xl font-bold text-primary-600 mb-4 leading-tight">
            Cuánto cuesta una agencia de marketing digital en España en 2026
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Es la pregunta que toda pyme se hace antes de contratar, y la que más respuestas vagas recibe. Aquí van precios reales del mercado español en 2026, qué incluye cada rango y cómo detectar un presupuesto que no te conviene.
          </p>
        </header>

        <div className="text-gray-700 space-y-6 leading-relaxed">
          <p>
            Pedir presupuesto a tres agencias y recibir cifras que van de 300 € a 3.000 € al mes por lo que parece "lo mismo" desconcierta a cualquiera. La realidad es que rara vez es lo mismo: detrás de cada precio hay un alcance, un nivel de equipo y un modelo de trabajo distintos. Entender qué pagas en cada rango es la única forma de elegir bien.
          </p>

          <h2 className="text-2xl font-bold text-primary-600">Por qué hay tanta diferencia de precio entre agencias</h2>
          <p>La horquilla de precios no responde al capricho, sino a tres variables: quién hace el trabajo, cuánto trabajo hay detrás y cómo gana dinero la agencia. Un servicio con perfiles senior, estrategia personalizada y reporting real cuesta más que uno que aplica plantillas y automatiza sin criterio. El precio bajo casi nunca es una ganga: suele significar menos horas, menos seniority o menos responsabilidad sobre los resultados.</p>

          <h2 className="text-2xl font-bold text-primary-600">Precios reales por servicio en España en 2026</h2>
          <p>Estos son los rangos habituales para una pyme, por servicio y al mes. Sirven como referencia para situar cualquier presupuesto que te llegue:</p>
          <ul className="space-y-2">
            {["SEO local: entre 300 € y 600 € al mes", "SEO de crecimiento (nacional o competido): entre 600 € y 1.500 € al mes", "Gestión de Google Ads: entre 300 € y 1.000 € al mes (sin contar la inversión publicitaria)", "Gestión de redes sociales: desde 300 € a 800 € al mes en planes básicos", "Diseño web profesional: proyecto puntual, no cuota mensual, según alcance"].map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-gray-700 py-1">
                <span className="text-accent-500 font-bold shrink-0 mt-0.5">▸</span>
                {item}
              </li>
            ))}
          </ul>

          <h2 className="text-2xl font-bold text-primary-600">Fee de gestión e inversión publicitaria: no son lo mismo</h2>
          <p>Es el malentendido más caro. En <Link href="/sem-publicidad-ppc/" className="text-accent-500 hover:underline">Google Ads</Link>, el fee de gestión es lo que cobra la agencia por planificar, montar y optimizar tus campañas; la inversión publicitaria es lo que pagas directamente a Google por cada clic. Son partidas independientes y deben aparecer separadas en cualquier presupuesto serio. Si una agencia mezcla ambos conceptos o se lleva un porcentaje opaco de tu inversión, tienes derecho a exigir claridad.</p>

          <div className="bg-primary-50 rounded-xl p-6 border border-primary-100">
            <p className="font-semibold text-primary-700 mb-2">¿Quieres saber qué inversión tiene sentido para tu negocio?</p>
            <p className="text-gray-600 text-sm mb-4">Analizamos tu situación y te proponemos un plan ajustado a tus objetivos reales, sin paquetes cerrados que no encajan.</p>
            <Link href="/contacto/" className="inline-block bg-accent-500 text-white px-6 py-2.5 rounded-full font-semibold text-sm hover:bg-accent-600 transition-colors">
              Solicitar propuesta personalizada
            </Link>
          </div>

          <h2 className="text-2xl font-bold text-primary-600">Cuándo tiene sentido contratar una agencia</h2>
          <p>Una agencia aporta cuando ya tienes una base sobre la que construir: una web que convierte, una propuesta de valor clara y un proceso comercial capaz de atender los contactos que genere el marketing. Sin esa base, contratar captación es amplificar problemas: más visitas a una web que no convence solo significan más dinero desperdiciado. Por eso una buena agencia empieza por una <Link href="/seo-posicionamiento-web-organico/" className="text-accent-500 hover:underline">estrategia y un diagnóstico</Link>, no por venderte un paquete.</p>

          <BlogBanner variant="seo" />

          <h2 className="text-2xl font-bold text-primary-600">Señales de alarma en un presupuesto</h2>
          <p>Hay banderas rojas que conviene reconocer antes de firmar. Promesas de "primera posición garantizada en Google" (nadie puede garantizarlas). Precios sospechosamente bajos que esconden trabajo automatizado. Ausencia de informes o métricas claras. Y la más importante: que no puedas calcular el retorno. El dato es revelador —según Esconzeta (2026), el 68% de las pymes con agencia no son capaces de medir el ROI de su inversión—. Si no sabes qué te genera lo que pagas, ese es el verdadero problema, no la cifra del presupuesto.</p>

          <p className="text-sm text-gray-500">
            Ver también: <Link href="/seo-o-google-ads-que-conviene-mas/" className="text-accent-500 hover:underline">SEO o Google Ads: qué conviene más</Link> · <Link href="/auditoria-seo-basica/" className="text-accent-500 hover:underline">Cómo hacer una auditoría SEO básica</Link>
          </p>

          <div className="bg-primary-600 text-white rounded-2xl p-8 my-2 text-center">
            <h2 className="text-2xl font-bold mb-3">Una propuesta clara, sin letra pequeña</h2>
            <p className="text-primary-200 mb-6">
              Te decimos exactamente qué incluye cada servicio, qué resultados esperar y cómo lo vamos a medir. Sin paquetes cerrados ni promesas imposibles.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contacto/" className="bg-accent-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-accent-600 transition-colors">
                Solicitar presupuesto
              </Link>
              <Link href="/seo-posicionamiento-web-organico/" className="border-2 border-white text-white px-6 py-3 rounded-full font-semibold hover:bg-white/10 transition-colors">
                Ver servicio SEO
              </Link>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-primary-600">Preguntas frecuentes sobre precios de agencias</h2>
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

          <p className="text-sm text-gray-500 pt-4">
            Servicios relacionados: <Link href="/seo-posicionamiento-web-organico/" className="text-accent-500 hover:underline">SEO Posicionamiento</Link> · <Link href="/sem-publicidad-ppc/" className="text-accent-500 hover:underline">SEM / Google Ads</Link>
          </p>
        </div>

        <nav className="mt-12 pt-8 border-t border-gray-200">
          <Link href="/blog/" className="text-accent-500 hover:text-accent-600 font-medium text-sm">← Volver al blog</Link>
        </nav>
      </article>
      <RelatedArticles currentSlug="cuanto-cuesta-agencia-marketing-digital-espana-2026" />
    </>
  );
}
