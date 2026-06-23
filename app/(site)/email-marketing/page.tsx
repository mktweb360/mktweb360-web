import Image from "next/image";
import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ContactForm } from "@/components/ContactForm";
import { RelatedArticles } from "@/components/RelatedArticles";

export const metadata: Metadata = {
  title: "Email Marketing para Empresas — Campañas que Convierten | Mkt Web 360",
  description: "Servicio profesional de email marketing para empresas y pymes. Diseño de newsletters, secuencias automatizadas, segmentación y campañas de captación. ROI medio de 36€ por euro invertido. Servicio nacional.",
  alternates: { canonical: "https://www.mktweb360.com/email-marketing/" },
  openGraph: {
    title: "Email Marketing para Empresas | Mkt Web 360",
    description: "Servicio profesional de email marketing para empresas y pymes. Newsletters, automatizaciones y campañas de captación.",
    url: "https://www.mktweb360.com/email-marketing/",
    images: [{ url: "/imagen-email-marketing.jpg", width: 1200, height: 900, alt: "Email marketing Mkt Web 360" }],
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Email Marketing para Empresas",
  provider: { "@type": "Organization", name: "Mkt Web 360 SLU", url: "https://www.mktweb360.com" },
  description: "Servicio profesional de email marketing para empresas y pymes. Diseño de newsletters, secuencias automatizadas y campañas de captación.",
  areaServed: "España",
  url: "https://www.mktweb360.com/email-marketing/",
};

const FAQS = [
  { q: "¿Qué plataforma de email marketing utilizáis?",
    a: "Trabajamos con las principales plataformas: Mailchimp, Brevo (antes Sendinblue), ActiveCampaign, Klaviyo y HubSpot. La elección depende de tu volumen de contactos, presupuesto y necesidades de automatización. Te recomendamos la más adecuada para tu caso." },
  { q: "¿Cuántos emails se envían al mes?",
    a: "Depende de la estrategia y el sector. Para la mayoría de negocios, entre 2 y 4 envíos mensuales es lo óptimo para mantener presencia sin saturar. Las automatizaciones (bienvenida, carrito abandonado, postventa) funcionan de forma independiente y no cuentan como envíos manuales." },
  { q: "¿Puedo usar mi lista de contactos actual?",
    a: "Sí, siempre que los contactos hayan dado su consentimiento para recibir comunicaciones comerciales conforme al RGPD. Auditamos tu lista antes de empezar para eliminar contactos inválidos, reducir la tasa de rebote y proteger la reputación de tu dominio de envío." },
  { q: "¿Cuánto tiempo tarda en verse el retorno?",
    a: "Los primeros resultados se ven desde el primer envío: aperturas, clics y conversiones directas. El impacto en ventas recurrentes y fidelización crece progresivamente en los primeros 3 meses a medida que se optimizan los segmentos, los asuntos y los horarios de envío." },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "¿Qué plataforma de email marketing utilizáis?", acceptedAnswer: { "@type": "Answer", text: "Trabajamos con las principales plataformas: Mailchimp, Brevo (antes Sendinblue), ActiveCampaign, Klaviyo y HubSpot. La elección depende de tu volumen de contactos, presupuesto y necesidades de automatización. Te recomendamos la más adecuada para tu caso." } },
    { "@type": "Question", name: "¿Cuántos emails se envían al mes?", acceptedAnswer: { "@type": "Answer", text: "Depende de la estrategia y el sector. Para la mayoría de negocios, entre 2 y 4 envíos mensuales es lo óptimo para mantener presencia sin saturar. Las automatizaciones (bienvenida, carrito abandonado, postventa) funcionan de forma independiente y no cuentan como envíos manuales." } },
    { "@type": "Question", name: "¿Puedo usar mi lista de contactos actual?", acceptedAnswer: { "@type": "Answer", text: "Sí, siempre que los contactos hayan dado su consentimiento para recibir comunicaciones comerciales conforme al RGPD. Auditamos tu lista antes de empezar para eliminar contactos inválidos, reducir la tasa de rebote y proteger la reputación de tu dominio de envío." } },
    { "@type": "Question", name: "¿Cuánto tiempo tarda en verse el retorno?", acceptedAnswer: { "@type": "Answer", text: "Los primeros resultados se ven desde el primer envío: aperturas, clics y conversiones directas. El impacto en ventas recurrentes y fidelización crece progresivamente en los primeros 3 meses a medida que se optimizan los segmentos, los asuntos y los horarios de envío." } },
  ],
};

export default function EmailMarketingPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <section className="bg-gradient-to-br from-primary-700 to-primary-900 text-white">
        <div className="max-w-6xl mx-auto px-4 py-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <Breadcrumbs crumbs={[{ label: "Inicio", href: "/" }, { label: "Email Marketing" }]} />
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight mt-4">
              Email Marketing para Empresas — Campañas que Convierten
            </h1>
            <p className="text-xl text-primary-200 mb-8 leading-relaxed">
              El email sigue siendo el canal con mayor retorno de inversión en marketing digital. Diseñamos y gestionamos tus campañas para que cada envío genere resultados reales: más ventas, más clientes recurrentes y más engagement con tu marca.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#contacto" className="bg-accent-500 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-accent-600 transition-colors text-center">
                Solicitar presupuesto
              </a>
            </div>
          </div>
          <div>
            <Image src="/imagen-email-marketing.jpg" alt="Email marketing" className="rounded-2xl shadow-2xl w-full object-cover hidden md:block" width={800} height={600} />
          </div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-12">

        {/* Incluye y tipos */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="bg-primary-50 rounded-2xl p-6">
            <h2 className="text-xl font-bold text-primary-600 mb-4">Qué incluye el servicio</h2>
            <ul className="space-y-2 text-gray-700">
              {[
                "Estrategia y planificación de envíos",
                "Diseño de plantillas de marca",
                "Redacción de copies persuasivos",
                "Segmentación avanzada de listas",
                "Configuración de automatizaciones",
                "Tests A/B de asuntos y contenido",
                "Informes de apertura y conversión",
              ].map(i => (
                <li key={i} className="flex gap-2"><span className="text-accent-500">✓</span>{i}</li>
              ))}
            </ul>
          </div>
          <div className="bg-gray-50 rounded-2xl p-6">
            <h2 className="text-xl font-bold text-primary-600 mb-4">Tipos de campaña</h2>
            <ul className="space-y-2 text-gray-700">
              {[
                "Newsletter periódica",
                "Secuencia de bienvenida",
                "Campañas promocionales",
                "Recuperación de carrito abandonado",
                "Secuencias de nurturing B2B",
                "Reactivación de contactos fríos",
                "Automatizaciones de postventa",
              ].map(i => (
                <li key={i} className="flex gap-2"><span className="text-accent-500">✓</span>{i}</li>
              ))}
            </ul>
          </div>
        </section>

        {/* Por qué email */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-primary-600 mb-6">Por qué el email marketing sigue siendo imprescindible</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Con un ROI medio de 36€ por cada euro invertido, el email marketing supera a cualquier otro canal digital. A diferencia de las redes sociales, tu lista de contactos es tuya: no depende de algoritmos, no desaparece si cambia una plataforma y no requiere inversión publicitaria para llegar a tus suscriptores.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            El error más común es tratar el email como un canal de broadcasting masivo. Una estrategia eficaz segmenta la lista, personaliza el mensaje según el comportamiento del usuario y automatiza los momentos clave del ciclo de vida del cliente: bienvenida, primera compra, abandono, reactivación.
          </p>
          <p className="text-gray-700 leading-relaxed">
            El email no interrumpe — llega cuando el usuario decide leerlo, lo que genera una predisposición muy superior a otros canales. Bien ejecutado, es el canal con mayor capacidad para convertir suscriptores en clientes, y clientes en compradores recurrentes.
          </p>
        </section>

        {/* Proceso */}
        <section className="mb-16 bg-gray-50 rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-primary-600 mb-8">Cómo trabajamos</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { num: "01", title: "Auditoría y estrategia", desc: "Analizamos tu lista de contactos, tus envíos anteriores y tus objetivos. Definimos la segmentación, la frecuencia de envío, los tipos de campaña y las automatizaciones prioritarias." },
              { num: "02", title: "Configuración técnica", desc: "Configuramos la plataforma de envío, los registros de autenticación (SPF, DKIM, DMARC), las plantillas de marca y los formularios de captación de suscriptores." },
              { num: "03", title: "Producción y envío", desc: "Redactamos el copy, diseñamos las piezas, configuramos la segmentación y programamos los envíos. Todo se revisa y aprueba antes de salir." },
              { num: "04", title: "Análisis y optimización", desc: "Tras cada envío analizamos las métricas clave: tasa de apertura, clics, conversiones y bajas. Aplicamos los aprendizajes al siguiente envío para mejorar continuamente." },
            ].map(step => (
              <div key={step.num} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                <span className="inline-block text-3xl font-bold text-accent-500 mb-3">{step.num}</span>
                <h3 className="font-bold text-primary-700 text-lg mb-2">{step.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Sectores */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-primary-600 mb-6">¿Para qué tipo de negocio es el email marketing?</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            El email marketing funciona en cualquier negocio que tenga una base de contactos y quiera mantener una relación activa con ella. Algunos casos de uso especialmente rentables:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { sector: "Ecommerce y tiendas online", desc: "Recuperación de carritos, campañas de temporada, upselling postventa y reactivación de clientes inactivos. Es el canal con mayor impacto directo en ventas." },
              { sector: "Servicios profesionales B2B", desc: "Nurturing de leads, newsletters de autoridad y seguimiento de propuestas. Mantiene la marca presente durante ciclos de venta largos." },
              { sector: "Clínicas y centros de salud", desc: "Recordatorios de citas, campañas de prevención, newsletters de salud y fidelización de pacientes. Alta tasa de apertura por el vínculo de confianza." },
              { sector: "Formación y academias", desc: "Secuencias de captación, recordatorios de matrícula, contenido de valor para alumnos y campañas de renovación de cursos." },
              { sector: "Hostelería y restauración", desc: "Campañas de temporada, promociones especiales, newsletters con novedades y programas de fidelización para clientes habituales." },
              { sector: "Inmobiliarias", desc: "Newsletters de propiedades, alertas personalizadas por perfil de comprador, seguimiento de leads y comunicación con vendedores." },
            ].map(s => (
              <div key={s.sector} className="bg-primary-50 rounded-xl p-4 border border-primary-100">
                <p className="font-bold text-primary-700 text-sm mb-1">{s.sector}</p>
                <p className="text-gray-600 text-xs leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Planes */}
        <section className="mb-16 bg-primary-50 rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-primary-600 mb-4">Planes de email marketing</h2>
          <p className="text-gray-600 mb-8">Precios orientativos. El presupuesto final depende del volumen de envíos, el nivel de automatización y la plataforma utilizada.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                plan: "Plan Básico",
                precio: "Desde 300 €/mes",
                items: ["2 envíos mensuales", "Diseño de plantilla de marca", "Segmentación básica", "Tests A/B de asuntos", "Informe de resultados"],
              },
              {
                plan: "Plan Avanzado",
                precio: "Desde 500 €/mes",
                items: ["4 envíos mensuales", "Segmentación avanzada", "2 automatizaciones activas", "Tests A/B completos", "Informe detallado con KPIs", "Optimización continua"],
                destacado: true,
              },
              {
                plan: "Plan Completo",
                precio: "Desde 800 €/mes",
                items: ["Envíos ilimitados", "Automatizaciones avanzadas", "Integración con CRM o ecommerce", "Estrategia de captación", "Informe semanal", "Consultoría mensual"],
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
          <h2 className="text-2xl font-bold text-primary-600 mb-8">Preguntas frecuentes sobre email marketing</h2>
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
          <h2 className="text-2xl font-bold mb-4">¿Hablamos de tu estrategia de email?</h2>
          <p className="text-primary-200 mb-6">Cuéntanos tu situación y te proponemos un plan de email marketing adaptado a tu negocio y tus objetivos.</p>
          <div className="bg-white rounded-xl p-6">
            <ContactForm />
          </div>
        </section>
      </div>
      <RelatedArticles category="Marketing Digital" title="Más sobre marketing digital para empresas" />
    </>
  );
}
