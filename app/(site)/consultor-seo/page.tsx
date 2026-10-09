import Link from "next/link";
import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ContactForm } from "@/components/ContactForm";
import { RelatedArticles } from "@/components/RelatedArticles";
import { alternatesFor } from "@/lib/i18n/routes";

const URL = "https://www.mktweb360.com/consultor-seo/";

export const metadata: Metadata = {
  title: "Consultor SEO: estrategia y auditoría SEO",
  description:
    "Consultoría SEO para empresas: auditoría técnica, estrategia de keywords y arquitectura, plan priorizado y acompañamiento con datos de Search Console.",
  alternates: alternatesFor("/consultor-seo/") ?? { canonical: URL },
  openGraph: {
    title: "Consultor SEO: estrategia y auditoría SEO | Mkt Web 360",
    description:
      "Diagnóstico, estrategia y plan de acción SEO con criterio senior. Para equipos internos, agencias de desarrollo y negocios que quieren decidir con datos.",
    url: URL,
    images: [{ url: "/og-seo.jpg", width: 1200, height: 630, alt: "Consultoría SEO — Mkt Web 360" }],
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Consultoría SEO",
  serviceType: "Consultoría de posicionamiento en buscadores",
  provider: { "@id": "https://www.mktweb360.com/#organization" },
  areaServed: { "@type": "Country", name: "España" },
  description:
    "Consultoría SEO: auditoría técnica y de contenidos, investigación de keywords, arquitectura web, plan de acción priorizado y acompañamiento con revisión de resultados.",
  url: URL,
};

const FAQS = [
  {
    q: "¿Qué diferencia hay entre un consultor SEO y una agencia SEO?",
    a: "La consultoría se centra en el diagnóstico, la estrategia y la toma de decisiones: qué hay que hacer, en qué orden y por qué. La ejecución puede quedarse en tu equipo, en tu desarrollador o en nosotros. Un servicio de agencia incluye además la ejecución continuada (contenidos, cambios técnicos, enlaces y seguimiento). Si ya tienes quien ejecute, la consultoría suele ser la opción más eficiente.",
  },
  {
    q: "¿Qué recibo al terminar una consultoría SEO?",
    a: "Un informe con los hallazgos separados por tipo (técnico, contenidos, autoridad), la evidencia de cada uno, su causa probable y su impacto, más un plan priorizado por impacto, dificultad y plazo. Cada recomendación indica qué página o qué parte del sitio afecta, para que tu equipo pueda ejecutarla sin interpretaciones.",
  },
  {
    q: "¿Con qué datos trabajáis?",
    a: "Con la fuente primaria siempre que sea posible: Google Search Console, Google Analytics 4 y los datos de tu negocio (consultas, ventas, leads). Las herramientas de terceros como Semrush o el Planificador de palabras clave de Google Ads aportan estimaciones útiles para comparar y priorizar, y las tratamos como estimaciones, no como mediciones.",
  },
  {
    q: "¿Podéis garantizar la primera posición en Google?",
    a: "No. Nadie puede garantizar posiciones en Google, y desconfía de quien lo haga. Lo que sí podemos comprometer es un método claro, decisiones basadas en datos, transparencia sobre lo que se hace y por qué, y un seguimiento con métricas que te permitan comprobar la evolución.",
  },
  {
    q: "¿Cuánto tiempo se tarda en ver resultados?",
    a: "Los cambios técnicos se reflejan en el rastreo y la indexación en semanas; las mejoras de posicionamiento en búsquedas competidas suelen necesitar meses. Depende del estado de partida, de la competencia de tu sector y de la velocidad con la que se ejecute el plan. Por eso fijamos fechas de revisión y comparamos siempre contra una línea base.",
  },
  {
    q: "¿La consultoría incluye GEO (visibilidad en asistentes de IA)?",
    a: "Sí, si te interesa. Revisamos cómo citan o mencionan tu marca los asistentes de IA, qué fuentes usan para recomendar en tu sector y qué contenidos y perfiles de entidad conviene reforzar. Es una extensión natural del SEO y comparte buena parte del trabajo de base.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
};

const WHEN = [
  "Tienes equipo interno o desarrollador y necesitas una dirección SEO clara.",
  "Vas a rediseñar o migrar la web y no quieres perder el tráfico que ya tienes.",
  "El tráfico orgánico ha caído y quieres saber por qué antes de invertir más.",
  "Quieres validar lo que te propone otra agencia o proveedor con un criterio independiente.",
  "Vas a lanzar una línea de negocio nueva y necesitas saber qué buscan tus clientes.",
  "Inviertes en contenidos y no sabes cuáles generan negocio y cuáles no.",
];

const STEPS = [
  { step: "01", title: "Objetivos y punto de partida", desc: "Qué servicios o productos importan, qué margen dejan y qué datos existen. Capturamos una línea base fechada de Search Console y analítica para poder medir después." },
  { step: "02", title: "Auditoría técnica", desc: "Rastreo, indexación, canonical, redirecciones, idiomas, datos estructurados, enlazado interno y rendimiento. Cada error se verifica en vivo antes de recomendar nada." },
  { step: "03", title: "Keywords y arquitectura", desc: "Investigación de búsquedas por servicio, agrupadas por intención. Cada grupo tiene una única URL propietaria para evitar la canibalización entre páginas." },
  { step: "04", title: "Competencia real", desc: "Analizamos quién aparece de verdad en las búsquedas que te interesan, qué páginas posicionan y con cuánta autoridad, para separar el problema de autoridad del de contenido." },
  { step: "05", title: "Plan priorizado", desc: "Acciones ordenadas por impacto, dificultad y plazo: mejoras rápidas, cambios estructurales y trabajo a medio plazo, con responsables y fechas de revisión." },
  { step: "06", title: "Acompañamiento y revisión", desc: "Resolvemos dudas durante la ejecución y comparamos los resultados con la línea base en las fechas acordadas para decidir los siguientes pasos." },
];

export default function ConsultorSeoPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <section className="bg-gradient-to-br from-primary-700 to-primary-900 text-white">
        <div className="max-w-5xl mx-auto px-4 py-16">
          <Breadcrumbs crumbs={[{ label: "Inicio", href: "/" }, { label: "SEO", href: "/seo-posicionamiento-web-organico/" }, { label: "Consultor SEO" }]} />
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight mt-4">
            Consultor SEO para decidir con datos<br />
            <span className="text-accent-400">qué hacer, en qué orden y por qué</span>
          </h1>
          <p className="text-xl text-primary-200 mb-8 leading-relaxed max-w-3xl">
            La consultoría SEO convierte el posicionamiento en un plan ejecutable: diagnóstico técnico y de contenidos, estrategia de keywords por servicio y una hoja de ruta priorizada que tu equipo, tu desarrollador o nosotros podemos llevar a cabo.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#contacto" className="bg-accent-500 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-accent-600 transition-colors text-center">
              Solicitar una consultoría
            </a>
            <a href="#metodo" className="border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white/10 transition-colors text-center">
              Ver el método
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-3xl font-bold text-primary-600 mb-6">Qué hace un consultor SEO</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Un consultor SEO analiza por qué una web gana o pierde visibilidad en Google y define qué cambios tienen más impacto en el negocio. No se limita a una lista de errores: separa lo que es urgente de lo que es cosmético y explica cada recomendación con su evidencia.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              En Mkt Web 360 la consultoría la dirige un perfil senior y se apoya en especialistas de cada área —técnico, contenidos, analítica— que entran en el momento del proyecto en que hacen falta. Así tienes un único interlocutor y la profundidad de un equipo.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Aplicamos protocolos propios con inteligencia artificial para procesar más datos en menos tiempo, siempre con revisión experta antes de cada recomendación.
            </p>
          </div>
          <div className="bg-primary-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-6">Cuándo tiene sentido contratar una consultoría SEO</h3>
            <ul className="space-y-3">
              {WHEN.map((w) => (
                <li key={w} className="flex gap-2 text-sm leading-relaxed">
                  <span className="text-accent-400 font-bold shrink-0">✓</span>
                  {w}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section id="metodo" className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary-600 mb-4">Cómo trabajamos una consultoría SEO</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Seis fases, del diagnóstico a la revisión de resultados. Cada una deja un entregable que puedes usar aunque no sigamos trabajando juntos.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {STEPS.map((s) => (
              <div key={s.step} className="flex gap-4 p-6 bg-white border border-gray-100 rounded-2xl shadow-sm">
                <span className="text-accent-500 font-bold text-3xl shrink-0 leading-none">{s.step}</span>
                <div>
                  <h3 className="font-bold text-primary-700 mb-2">{s.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-primary-50 border-y border-primary-100">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
          <div>
            <h2 className="text-2xl font-bold text-primary-600 mb-4">Consultoría o servicio SEO continuado</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Si tienes quien ejecute, la consultoría es la forma más eficiente de dirigir el SEO. Si prefieres que nos ocupemos de todo —contenidos, cambios técnicos, seguimiento y ficha de Google—, el servicio continuado incluye la ejecución mes a mes.
            </p>
            <div className="flex flex-col gap-3">
              <Link href="/seo-posicionamiento-web-organico/" className="text-accent-500 font-semibold hover:underline">Servicio de posicionamiento SEO →</Link>
              <Link href="/oferta-seo-geo-gbp/" className="text-accent-500 font-semibold hover:underline">SEO + GEO + Google Business Profile por 349 €/mes + IVA →</Link>
              <Link href="/auditoria-digital/" className="text-accent-500 font-semibold hover:underline">Auditoría digital →</Link>
            </div>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-primary-600 mb-4">Lo que no hacemos</h2>
            <ul className="space-y-2 text-gray-600 text-sm leading-relaxed">
              <li>• Prometer posiciones concretas en Google.</li>
              <li>• Recomendar cambios sin verificar su causa en la web.</li>
              <li>• Presentar estimaciones de herramientas como si fueran datos reales.</li>
              <li>• Crear páginas en serie sin contenido propio ni demanda que las justifique.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-primary-600 mb-8 text-center">Preguntas frecuentes sobre consultoría SEO</h2>
          <div className="space-y-4">
            {FAQS.map((f) => (
              <details key={f.q} className="bg-white border border-gray-100 rounded-xl p-5 shadow-sm">
                <summary className="font-semibold text-primary-700 cursor-pointer">{f.q}</summary>
                <p className="text-gray-600 mt-3 leading-relaxed">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section id="contacto" className="py-16 px-4 bg-primary-600 text-white">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold mb-4 text-center">Cuéntanos tu caso</h2>
          <p className="text-primary-200 mb-8 text-center">Indica tu web y qué quieres conseguir. Te respondemos con una propuesta de alcance y plazos.</p>
          <ContactForm formType="consultor-seo" />
        </div>
      </section>

      <RelatedArticles category="SEO" title="Más sobre SEO y posicionamiento" />
    </>
  );
}
