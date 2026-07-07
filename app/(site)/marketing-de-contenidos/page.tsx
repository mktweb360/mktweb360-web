import Image from "next/image";
import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ContactForm } from "@/components/ContactForm";
import { RelatedArticles } from "@/components/RelatedArticles";

export const metadata: Metadata = {
  title: "Marketing de Contenidos — Estrategia de Contenidos Digitales",
  description: "Servicio de marketing de contenidos para empresas. Artículos de blog SEO, contenidos para redes sociales, guías, ebooks y estrategia editorial. Contenido que posiciona, atrae y convierte. Servicio nacional.",
  alternates: { canonical: "https://www.mktweb360.com/marketing-de-contenidos/" },
  openGraph: {
    title: "Marketing de Contenidos para Empresas | Mkt Web 360",
    description: "Estrategia y producción de contenidos digitales para captación orgánica, autoridad de marca y SEO.",
    url: "https://www.mktweb360.com/marketing-de-contenidos/",
    images: [{ url: "https://www.mktweb360.com/og-marketing-contenidos.jpg", width: 1200, height: 630 }],
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Marketing de Contenidos",
  serviceType: "Content Marketing",
  provider: { "@type": "Organization", name: "Mkt Web 360 SLU", url: "https://www.mktweb360.com" },
  description: "Servicio de marketing de contenidos para empresas. Artículos SEO, estrategia editorial y contenidos para redes sociales.",
  areaServed: "España",
  url: "https://www.mktweb360.com/marketing-de-contenidos/",
  offers: {
    "@type": "Offer",
    price: "390",
    priceCurrency: "EUR",
    description: "Estrategia y creación de contenidos SEO desde 390€/mes. Artículos optimizados, calendario editorial y análisis de resultados.",
    availability: "https://schema.org/InStock",
    url: "https://www.mktweb360.com/marketing-de-contenidos/",
  },
};
const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Inicio", item: "https://www.mktweb360.com/" },
    { "@type": "ListItem", position: 2, name: "Marketing de Contenidos", item: "https://www.mktweb360.com/marketing-de-contenidos/" },
  ],
};

const FAQS = [
  { q: "¿Cuántos artículos al mes necesito para ver resultados en SEO?",
    a: "Para la mayoría de webs de empresa, entre 2 y 4 artículos mensuales bien optimizados son suficientes para construir autoridad temática y mejorar el posicionamiento orgánico. Lo más importante no es la cantidad sino la calidad, la relevancia para tu audiencia y la optimización SEO de cada pieza." },
  { q: "¿Quién redacta los artículos, vosotros o yo?",
    a: "Nosotros nos encargamos de todo: investigación de keywords, estructura del artículo, redacción, optimización SEO, imágenes y publicación. Tu papel es revisar y aprobar el contenido antes de publicarlo. Puedes aportar información técnica de tu sector si lo deseas." },
  { q: "¿El contenido que creáis es original y exclusivo?",
    a: "Sí. Todo el contenido que producimos es original, redactado por personas y optimizado para tu dominio específico. No usamos plantillas genéricas ni contenido duplicado. Cada artículo tiene como objetivo posicionar una keyword concreta y responder a la intención de búsqueda del usuario." },
  { q: "¿En cuánto tiempo empieza a posicionar el contenido?",
    a: "El contenido SEO tarda entre 3 y 6 meses en posicionar, dependiendo de la competencia de las keywords y la autoridad actual de tu dominio. El contenido para redes sociales genera impacto desde el primer día. Por eso recomendamos combinar ambas estrategias." },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "¿Cuántos artículos al mes necesito para ver resultados en SEO?", acceptedAnswer: { "@type": "Answer", text: "Para la mayoría de webs de empresa, entre 2 y 4 artículos mensuales bien optimizados son suficientes para construir autoridad temática y mejorar el posicionamiento orgánico. Lo más importante no es la cantidad sino la calidad, la relevancia para tu audiencia y la optimización SEO de cada pieza." } },
    { "@type": "Question", name: "¿Quién redacta los artículos, vosotros o yo?", acceptedAnswer: { "@type": "Answer", text: "Nosotros nos encargamos de todo: investigación de keywords, estructura del artículo, redacción, optimización SEO, imágenes y publicación. Tu papel es revisar y aprobar el contenido antes de publicarlo. Puedes aportar información técnica de tu sector si lo deseas." } },
    { "@type": "Question", name: "¿El contenido que creáis es original y exclusivo?", acceptedAnswer: { "@type": "Answer", text: "Sí. Todo el contenido que producimos es original, redactado por personas y optimizado para tu dominio específico. No usamos plantillas genéricas ni contenido duplicado. Cada artículo tiene como objetivo posicionar una keyword concreta y responder a la intención de búsqueda del usuario." } },
    { "@type": "Question", name: "¿En cuánto tiempo empieza a posicionar el contenido?", acceptedAnswer: { "@type": "Answer", text: "El contenido SEO tarda entre 3 y 6 meses en posicionar, dependiendo de la competencia de las keywords y la autoridad actual de tu dominio. El contenido para redes sociales genera impacto desde el primer día. Por eso recomendamos combinar ambas estrategias." } },
  ],
};

export default function ContentMarketingPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <section className="bg-gradient-to-br from-primary-700 to-primary-900 text-white">
        <div className="max-w-6xl mx-auto px-4 py-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <Breadcrumbs crumbs={[{ label: "Inicio", href: "/" }, { label: "Marketing de Contenidos" }]} />
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight mt-4">
              Marketing de Contenidos para Empresas
            </h1>
            <p className="text-xl text-primary-200 mb-8 leading-relaxed">
              El contenido de calidad posiciona tu marca como referente en tu sector, mejora tu SEO y construye confianza con tus clientes potenciales antes del primer contacto. Creamos la estrategia y el contenido que necesita tu empresa.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#contacto" className="bg-accent-500 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-accent-600 transition-colors text-center">
                Solicitar presupuesto
              </a>
            </div>
          </div>
          <div>
            <Image src="/imagen-marketing-contenidos.jpg" alt="Marketing de contenidos" className="rounded-2xl shadow-2xl w-full object-cover hidden md:block" width={800} height={600} />
          </div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-12">

        {/* Por qué el contenido */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-primary-600 mb-6">Por qué el marketing de contenidos es la inversión más rentable a largo plazo</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            El marketing de contenidos genera 3 veces más leads que el outbound marketing tradicional y cuesta un 62% menos. Las empresas que publican contenido de forma regular reciben hasta un 55% más de tráfico orgánico en su web.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            A diferencia de la publicidad de pago, el contenido trabaja para tu negocio de forma acumulativa y permanente. Un artículo bien posicionado puede atraer visitas durante años sin coste adicional. Y cada pieza de contenido que publicas construye la autoridad temática de tu dominio, lo que mejora el posicionamiento de toda la web.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Pero no se trata solo de publicar. El contenido debe responder exactamente a lo que busca tu cliente potencial, estar estructurado para los motores de búsqueda y diseñado para convertir lectores en leads. En Mkt Web 360 combinamos redacción de calidad con SEO técnico y estrategia de conversión.
          </p>
        </section>

        {/* Tipos de contenido */}
        <section className="mb-16 bg-gray-50 rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-primary-600 mb-8">Tipos de contenido que producimos</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { title: "Artículos de blog SEO", desc: "Artículos de entre 1.000 y 3.000 palabras optimizados para posicionar keywords estratégicas y atraer tráfico orgánico cualificado. Incluyen estructura semántica, enlaces internos y CTAs." },
              { title: "Contenido para redes sociales", desc: "Posts, historias, reels y carruseles diseñados para cada plataforma. Adaptamos el tono, el formato y el mensaje a Instagram, LinkedIn, Facebook y TikTok." },
              { title: "Newsletters y email marketing", desc: "Contenido editorial para campañas de email: newsletters periódicas, secuencias de nurturing y emails de captación. Redacción persuasiva orientada a conversión." },
              { title: "Guías y ebooks", desc: "Contenido de valor descargable para generar leads cualificados y demostrar la expertise de tu empresa en su sector. Formato profesional con diseño incluido." },
              { title: "Contenido para landing pages", desc: "Textos persuasivos para páginas de aterrizaje orientadas a conversión. Estructura de copywriting probada para maximizar el porcentaje de contactos." },
              { title: "Casos de éxito y testimonios", desc: "Documentación y redacción de casos de éxito de clientes. El contenido más persuasivo para generar confianza en nuevos prospectos." },
            ].map(item => (
              <div key={item.title} className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm">
                <h3 className="font-bold text-primary-700 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Proceso */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-primary-600 mb-8">Cómo desarrollamos tu estrategia de contenidos</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { num: "01", title: "Auditoría y estrategia", desc: "Analizamos tu web, tu competencia y las keywords con más potencial para tu negocio. Definimos los pilares temáticos, el tono de comunicación y el calendario editorial." },
              { num: "02", title: "Investigación y briefing", desc: "Investigamos cada tema en profundidad antes de escribir: keywords secundarias, intención de búsqueda, estructura óptima y referencias del sector." },
              { num: "03", title: "Producción y revisión", desc: "Redactamos, optimizamos y diseñamos cada pieza. Te la enviamos para revisión antes de publicar. Incorporamos tus cambios sin límite de rondas." },
              { num: "04", title: "Publicación y seguimiento", desc: "Publicamos en tu web o plataforma, monitorizamos el posicionamiento y el tráfico, y ajustamos la estrategia mensualmente según los resultados." },
            ].map(step => (
              <div key={step.num} className="bg-primary-50 rounded-2xl p-6 border border-primary-100">
                <span className="inline-block text-3xl font-bold text-accent-500 mb-3">{step.num}</span>
                <h3 className="font-bold text-primary-700 text-lg mb-2">{step.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Sectores */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-primary-600 mb-6">Sectores en los que trabajamos</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Producimos contenido para empresas de todos los sectores. Contamos con redactores especializados en las siguientes áreas:
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {[
              "Legal y asesoría", "Salud y clínicas", "Tecnología y SaaS",
              "Construcción y reformas", "Ecommerce y retail", "Hostelería y turismo",
              "Finanzas e inversión", "Educación y formación", "Inmobiliario",
              "Industria y manufactura", "Servicios profesionales", "Marketing y agencias",
            ].map(s => (
              <div key={s} className="bg-gray-50 rounded-xl p-3 text-center border border-gray-100">
                <p className="text-gray-700 text-sm font-medium">{s}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Planes */}
        <section className="mb-16 bg-primary-50 rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-primary-600 mb-4">Planes de marketing de contenidos</h2>
          <p className="text-gray-600 mb-8">Precios orientativos. El presupuesto final depende del volumen, los formatos y el nivel de especialización requerido.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                plan: "Plan Básico",
                precio: "Desde 300 €/mes",
                items: ["2 artículos SEO mensuales", "Investigación de keywords", "Optimización on-page", "Publicación en tu web", "Informe de posicionamiento"],
              },
              {
                plan: "Plan Avanzado",
                precio: "Desde 550 €/mes",
                items: ["4 artículos SEO mensuales", "Contenido para 2 redes sociales", "Estrategia editorial completa", "Enlazado interno optimizado", "Informe mensual de resultados"],
                destacado: true,
              },
              {
                plan: "Plan Completo",
                precio: "Desde 900 €/mes",
                items: ["6+ artículos SEO mensuales", "Contenido multicanal", "Newsletter mensual", "Guía o ebook trimestral", "Estrategia de link building", "Consultoría editorial mensual"],
              },
            ].map(p => (
              <div key={p.plan} className={`rounded-2xl p-6 border-2 flex flex-col ${p.destacado ? "border-accent-500 bg-accent-50" : "border-gray-100 bg-white"}`}>
                <h3 className="text-xl font-bold text-primary-700 mb-1">{p.plan}</h3>
                <p className="text-2xl font-bold text-accent-500 mb-4">{p.precio}</p>
                <ul className="space-y-2 flex-1">
                  {p.items.map(i => (
                    <li key={i} className="flex gap-2 text-sm text-gray-700"><span className="text-accent-500 shrink-0">✓</span>{i}</li>
                  ))}
                </ul>
                <a href="#contacto" className="mt-6 block text-center bg-primary-600 hover:bg-primary-700 text-white font-bold py-3 rounded-full transition-colors text-sm">
                  Solicitar presupuesto
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* FAQs */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-primary-600 mb-8">Preguntas frecuentes sobre marketing de contenidos</h2>
          <div className="space-y-4">
            {FAQS.map(faq => (
              <div key={faq.q} className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm">
                <h3 className="font-bold text-primary-700 mb-2">{faq.q}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Contacto */}
        <section id="contacto" className="bg-primary-600 text-white rounded-2xl p-8">
          <h2 className="text-2xl font-bold mb-4">¿Quieres una estrategia de contenidos?</h2>
          <p className="text-primary-200 mb-6">Cuéntanos tu sector y objetivos. Diseñamos un plan editorial personalizado para tu negocio.</p>
          <div className="bg-white rounded-xl p-6">
            <ContactForm />
          </div>
        </section>
      </div>
      <RelatedArticles category="Estrategia" />
    </>
  );
}
