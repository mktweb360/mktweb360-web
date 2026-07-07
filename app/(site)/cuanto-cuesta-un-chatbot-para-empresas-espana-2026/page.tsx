import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { RelatedArticles } from "@/components/RelatedArticles";
import { BlogBanner } from "@/components/BlogBanner";

export const metadata: Metadata = {
  title: "Cuánto cuesta un chatbot para empresas en España en 2026: guía de precios reales",
  description:
    "Los precios de los chatbots para empresas varían desde 0€ hasta miles de euros al mes. Guía de precios reales en 2026: qué cobran los líderes del mercado, qué incluye cada nivel y cuándo sale rentable.",
  alternates: { canonical: "https://www.mktweb360.com/cuanto-cuesta-un-chatbot-para-empresas-espana-2026/" },
  openGraph: {
    title: "Cuánto cuesta un chatbot para empresas en España en 2026: guía de precios reales | Mkt Web 360",
    description:
      "Los precios de los chatbots para empresas varían desde 0€ hasta miles de euros al mes. Guía de precios reales en 2026: qué cobran los líderes del mercado, qué incluye cada nivel y cuándo sale rentable.",
    url: "https://www.mktweb360.com/cuanto-cuesta-un-chatbot-para-empresas-espana-2026/",
    type: "article",
    images: [{ url: "https://www.mktweb360.com/og-chatgpt-para-marketing-digital.jpg", width: 1200, height: 630 }],
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "Cuánto cuesta un chatbot para empresas en España en 2026: guía de precios reales",
  description:
    "Los precios de los chatbots para empresas varían desde 0€ hasta miles de euros al mes. Guía de precios reales en 2026: qué cobran los líderes del mercado, qué incluye cada nivel y cuándo sale rentable.",
  author: { "@type": "Organization", name: "Mkt Web 360 SLU" },
  publisher: { "@type": "Organization", name: "Mkt Web 360 SLU", url: "https://www.mktweb360.com" },
  datePublished: "2026-07-07",
  image: "https://www.mktweb360.com/og-chatgpt-para-marketing-digital.jpg",
  url: "https://www.mktweb360.com/cuanto-cuesta-un-chatbot-para-empresas-espana-2026/",
  mainEntityOfPage: "https://www.mktweb360.com/cuanto-cuesta-un-chatbot-para-empresas-espana-2026/",
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Inicio", item: "https://www.mktweb360.com/" },
    { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.mktweb360.com/blog/" },
    { "@type": "ListItem", position: 3, name: "Cuánto cuesta un chatbot para empresas", item: "https://www.mktweb360.com/cuanto-cuesta-un-chatbot-para-empresas-espana-2026/" },
  ],
};

const FAQS = [
  {
    q: "¿Hay opciones gratuitas que valga la pena?",
    a: "Hay planes gratuitos (Tidio, Botpress, Crisp) útiles para probar y para negocios con volumen muy bajo. Para un chatbot que realmente aporte valor — entrenado con contenido propio, disponible 24/7, con integración de sistemas — los planes gratuitos no son suficientes.",
  },
  {
    q: "¿Cuánto dura el contrato?",
    a: "Las plataformas SaaS suelen ser mes a mes o anuales con descuento. Las soluciones gestionadas a través de agencia suelen tener compromisos mínimos de 6-12 meses porque el setup y el entrenamiento tienen un coste de entrada que no se recupera con contratos muy cortos.",
  },
  {
    q: "¿El precio sube si tengo mucho tráfico?",
    a: "Depende del modelo de pricing. Los modelos de tarifa plana no suben con el tráfico. Los modelos por conversación o por resolución sí pueden subir significativamente si el volumen aumenta.",
  },
  {
    q: "¿Qué está incluido en el mantenimiento mensual?",
    a: "En una solución gestionada, el mantenimiento incluye actualizaciones de contenido, monitorización de conversaciones para detectar fallos, mejoras en las respuestas basadas en los datos, soporte técnico y compatibilidad con actualizaciones del CMS.",
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

export default function CuantoCuestaChatbotPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <article className="max-w-3xl mx-auto px-4 py-12">
        <Breadcrumbs crumbs={[{ label: "Inicio", href: "/" }, { label: "Blog", href: "/blog/" }, { label: "Cuánto cuesta un chatbot para empresas" }]} />

        <header className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="bg-primary-100 text-primary-700 text-xs font-medium px-2.5 py-0.5 rounded-full">IA y Automatización · Julio 2026</span>
            <time className="text-sm text-gray-400" dateTime="2026-07-07">7 de julio de 2026</time>
          </div>
          <h1 className="text-4xl font-bold text-primary-600 mb-4 leading-tight">
            Cuánto cuesta un chatbot para empresas en España en 2026: guía de precios reales
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Los precios de los chatbots para empresas van desde 0€ hasta miles de euros al mes, y esa horquilla tan amplia genera mucha confusión. En esta guía repasamos qué cobran los líderes del mercado en 2026, qué incluye cada nivel y cuándo sale rentable la inversión, dentro de una estrategia de{" "}
            <Link href="/ia-aplicada-al-marketing/" className="text-accent-500 hover:underline">IA aplicada al marketing</Link>.
          </p>
        </header>

        <div className="text-gray-700 space-y-6 leading-relaxed">
          <p>
            Antes de pedir presupuestos conviene entender que no existe un precio único, sino varios modelos de facturación que responden a lógicas distintas. Dos chatbots con funciones parecidas pueden costar cinco veces más o menos según cómo se cobre el servicio. Por eso, más que buscar el número más bajo, interesa comprender qué hay detrás de cada tarifa.
          </p>

          <h2 className="text-2xl font-bold text-primary-600">Los modelos de pricing que existen en el mercado</h2>
          <p>
            En 2026 conviven principalmente tres formas de cobrar un chatbot. La tarifa plana mensual es la más predecible: pagas una cuota fija independientemente del volumen de conversaciones. El pago por conversación o por resolución cobra en función del uso real, de modo que el coste crece con el tráfico. Y los modelos por agente cobran según el número de usuarios internos que gestionan el sistema.
          </p>
          <p>
            Cada modelo tiene sentido en un contexto distinto. La tarifa plana da tranquilidad presupuestaria a una pyme con volumen estable. El pago por resultado puede ser eficiente si el volumen es bajo, pero se dispara cuando el chatbot empieza a funcionar bien y atiende muchas más conversaciones. Entender esto de entrada evita sorpresas en la factura.
          </p>

          <h2 className="text-2xl font-bold text-primary-600">Qué cobran los principales players del mercado</h2>
          <p>
            Como referencia orientativa, estos son algunos precios públicos de las plataformas más conocidas en 2026. Tidio parte desde 29€/mes con planes escalonados. Intercom cobra por resolución, en torno a 0,99&nbsp;$ por outcome resuelto. HubSpot factura aproximadamente 0,50&nbsp;€ por conversación resuelta dentro de su ecosistema.
          </p>
          <p>
            Zendesk se sitúa alrededor de 55€ por agente al mes, un modelo pensado para equipos de soporte. Botpress, orientado a construir bots más personalizados, parte desde 89€/mes. La comparación es reveladora: lo que en un modelo es una cuota fija cómoda, en otro depende directamente del volumen de uso. Si quieres entender mejor las capacidades detrás de estos productos, ayuda conocer cómo funcionan los{" "}
            <Link href="/agentes-ia-marketing-que-son-como-usarlos-en-tu-negocio/" className="text-accent-500 hover:underline">agentes de IA en marketing</Link>.
          </p>

          <h2 className="text-2xl font-bold text-primary-600">Qué determina el precio real de un chatbot</h2>
          <p>
            El precio de la plataforma es solo una parte. El coste real depende del entrenamiento con contenido propio, de las integraciones con tus sistemas (CRM, calendario, catálogo), del nivel de personalización de las respuestas y del mantenimiento continuo. Un chatbot barato sin entrenar apenas aporta valor; uno bien configurado exige trabajo de puesta en marcha.
          </p>
          <p>
            También influye el idioma, los canales donde vive el bot y el grado de automatización que quieres alcanzar. Antes de comparar precios conviene saber qué necesitas de verdad, algo que explicamos en{" "}
            <Link href="/que-es-un-chatbot-para-empresas-y-por-que-lo-necesitas-en-2026/" className="text-accent-500 hover:underline">qué es un chatbot para empresas y por qué lo necesitas</Link>. Herramientas hay muchas, y elegir bien pasa por conocer las{" "}
            <Link href="/herramientas-ia-para-marketing-digital-2026-las-que-realmente-funcionan/" className="text-accent-500 hover:underline">herramientas de IA que realmente funcionan</Link>.
          </p>

          <BlogBanner variant="default" />

          <h2 className="text-2xl font-bold text-primary-600">Modelo de precios para una solución gestionada en España</h2>
          <p>
            Frente al SaaS de autoservicio, una solución gestionada por una agencia en España incluye setup, entrenamiento, integración y mantenimiento dentro de una cuota mensual. Como referencia, un plan básico se mueve entre 149 y 199€/mes, un plan medio entre 199 y 249€/mes, y un plan avanzado entre 249 y 299€/mes.
          </p>
          <p>
            La diferencia entre niveles no suele estar en el número de conversaciones, sino en la profundidad de las integraciones, el grado de personalización y el nivel de acompañamiento. En este modelo pagas por un servicio completo, no solo por acceder a una herramienta que luego tienes que configurar tú.
          </p>

          <h2 className="text-2xl font-bold text-primary-600">Cuándo sale rentable un chatbot</h2>
          <p>
            La rentabilidad se ve comparando el coste mensual con el tiempo y las oportunidades que el chatbot libera. Un ejemplo ilustrativo: un bot de 199€/mes que automatiza consultas repetitivas y capta leads fuera de horario puede suponer un ahorro neto de unos 700€/mes, contando el tiempo del equipo que deja de dedicarse a tareas manuales.
          </p>
          <p>
            En ese escenario, la inversión se paga sola en pocas semanas. La clave está en que el chatbot atienda un volumen suficiente de conversaciones con valor real: si el negocio recibe muchas consultas repetitivas, el retorno es evidente; si el volumen es marginal, quizá baste un plan gratuito para empezar.
          </p>

          <div className="bg-primary-600 text-white rounded-2xl p-8 my-2 text-center">
            <h2 className="text-2xl font-bold mb-3">¿Quieres saber cuánto costaría tu chatbot?</h2>
            <p className="text-primary-200 mb-6">
              En Mkt Web 360 diseñamos chatbots a medida para autónomos y pymes en España, con precios claros y sin sorpresas en la factura.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contacto/" className="bg-accent-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-accent-600 transition-colors">
                Hablar con un especialista
              </Link>
              <Link href="/ia-aplicada-al-marketing/" className="border-2 border-white text-white px-6 py-3 rounded-full font-semibold hover:bg-white/10 transition-colors">
                Ver IA aplicada al marketing
              </Link>
            </div>
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
        </div>

        <nav className="mt-12 pt-8 border-t border-gray-200">
          <Link href="/blog/" className="text-accent-500 hover:text-accent-600 font-medium text-sm">← Volver al blog</Link>
        </nav>
      </article>
      <RelatedArticles currentSlug="cuanto-cuesta-un-chatbot-para-empresas-espana-2026" />
    </>
  );
}
