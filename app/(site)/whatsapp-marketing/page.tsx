import Image from "next/image";
import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ContactForm } from "@/components/ContactForm";
import { RelatedArticles } from "@/components/RelatedArticles";

export const metadata: Metadata = {
  title: "WhatsApp Marketing para Empresas — Capta y Fideliza Clientes",
  description: "Estrategia y gestión de WhatsApp Marketing para empresas. WhatsApp Business API, campañas de captación, automatizaciones y seguimiento de leads. Tasas de apertura del 98%. Servicio nacional.",
  alternates: { canonical: "https://www.mktweb360.com/whatsapp-marketing/" },
  openGraph: {
    title: "WhatsApp Marketing para Empresas | Mkt Web 360",
    description: "Capta y fideliza clientes por WhatsApp. Tasas de apertura del 98%. Automatizaciones y campañas personalizadas.",
    url: "https://www.mktweb360.com/whatsapp-marketing/",
    images: [{ url: "/imagen-whatsapp-marketing.jpg", width: 1200, height: 900, alt: "WhatsApp marketing Mkt Web 360" }],
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "WhatsApp Marketing para Empresas",
  provider: { "@type": "Organization", name: "Mkt Web 360 SLU", url: "https://www.mktweb360.com" },
  description: "Estrategia y gestión de WhatsApp Marketing. WhatsApp Business API, campañas y automatizaciones para captar y fidelizar clientes.",
  areaServed: "España",
  url: "https://www.mktweb360.com/whatsapp-marketing/",
};

const FAQS = [
  { q: "¿Necesito WhatsApp Business API o vale con la app normal?",
    a: "Para uso personal o negocios muy pequeños, WhatsApp Business gratuito es suficiente. Si quieres enviar campañas masivas, automatizar secuencias, integrar con tu CRM o gestionar múltiples agentes, necesitas la API oficial de WhatsApp Business. Nosotros gestionamos la configuración completa." },
  { q: "¿Es legal enviar mensajes de marketing por WhatsApp?",
    a: "Sí, siempre que los contactos hayan dado su consentimiento explícito para recibir comunicaciones comerciales. La API oficial de WhatsApp exige el opt-in previo del usuario. Nosotros te ayudamos a construir tu lista de contactos de forma legal y a cumplir con el RGPD." },
  { q: "¿Cuánto tarda en verse resultados?",
    a: "WhatsApp tiene resultados mucho más rápidos que otros canales. Las primeras campañas suelen generar respuestas en las primeras horas. En 30 días ya tienes datos reales de apertura, respuesta y conversión para optimizar la estrategia." },
  { q: "¿Puedo integrar WhatsApp con mi CRM o tienda online?",
    a: "Sí. La API de WhatsApp Business se integra con los principales CRM (HubSpot, Salesforce, Zoho), plataformas de ecommerce (WooCommerce, Shopify) y herramientas de automatización. Valoramos tu caso concreto y proponemos la integración más eficiente." },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "¿Necesito WhatsApp Business API o vale con la app normal?", acceptedAnswer: { "@type": "Answer", text: "Para uso personal o negocios muy pequeños, WhatsApp Business gratuito es suficiente. Si quieres enviar campañas masivas, automatizar secuencias, integrar con tu CRM o gestionar múltiples agentes, necesitas la API oficial de WhatsApp Business. Nosotros gestionamos la configuración completa." } },
    { "@type": "Question", name: "¿Es legal enviar mensajes de marketing por WhatsApp?", acceptedAnswer: { "@type": "Answer", text: "Sí, siempre que los contactos hayan dado su consentimiento explícito para recibir comunicaciones comerciales. La API oficial de WhatsApp exige el opt-in previo del usuario. Nosotros te ayudamos a construir tu lista de contactos de forma legal y a cumplir con el RGPD." } },
    { "@type": "Question", name: "¿Cuánto tarda en verse resultados?", acceptedAnswer: { "@type": "Answer", text: "WhatsApp tiene resultados mucho más rápidos que otros canales. Las primeras campañas suelen generar respuestas en las primeras horas. En 30 días ya tienes datos reales de apertura, respuesta y conversión para optimizar la estrategia." } },
    { "@type": "Question", name: "¿Puedo integrar WhatsApp con mi CRM o tienda online?", acceptedAnswer: { "@type": "Answer", text: "Sí. La API de WhatsApp Business se integra con los principales CRM (HubSpot, Salesforce, Zoho), plataformas de ecommerce (WooCommerce, Shopify) y herramientas de automatización. Valoramos tu caso concreto y proponemos la integración más eficiente." } },
  ],
};

export default function WhatsAppMarketingPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <section className="bg-gradient-to-br from-primary-700 to-primary-900 text-white">
        <div className="max-w-6xl mx-auto px-4 py-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <Breadcrumbs crumbs={[{ label: "Inicio", href: "/" }, { label: "WhatsApp Marketing" }]} />
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight mt-4">
              El canal con el<br />
              <span className="text-accent-400">98% de tasa de apertura</span>
            </h1>
            <p className="text-xl text-primary-200 mb-8 leading-relaxed">
              El email tiene un 20% de apertura. WhatsApp tiene un 98%. Si no estás usando WhatsApp para comunicarte con tus clientes, estás dejando conversaciones y ventas sobre la mesa.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#contacto" className="bg-accent-500 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-accent-600 transition-colors text-center">
                Empezar con WhatsApp
              </a>
            </div>
          </div>
          <div>
            <Image src="/imagen-whatsapp-marketing.jpg" alt="WhatsApp Marketing" className="rounded-2xl shadow-2xl w-full object-cover hidden md:block" width={800} height={600} />
          </div>
        </div>
      </section>

      <section className="bg-primary-600 py-6 px-4">
        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 text-center text-white">
          {[
            { value: "98%", label: "tasa de apertura" },
            { value: "3x", label: "más conversiones que email" },
            { value: "Inmediato", label: "respuesta en minutos" },
            { value: "API", label: "WhatsApp Business oficial" },
          ].map((m) => (
            <div key={m.label}>
              <div className="text-xl font-bold text-accent-400">{m.value}</div>
              <div className="text-xs text-primary-200 mt-1">{m.label}</div>
            </div>
          ))}
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-12">

        {/* Por qué WhatsApp */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-primary-600 mb-6">Por qué WhatsApp es el canal de marketing más eficiente en 2026</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            WhatsApp es la aplicación de mensajería más usada en España, con más de 30 millones de usuarios activos. A diferencia del email, los mensajes de WhatsApp se leen casi en su totalidad y generan respuesta en minutos, no en días.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            El problema es que la mayoría de empresas usa WhatsApp de forma reactiva — solo para responder cuando el cliente escribe. El WhatsApp Marketing bien ejecutado es proactivo: campañas segmentadas, secuencias automatizadas, seguimiento de leads y reactivación de clientes inactivos.
          </p>
          <p className="text-gray-700 leading-relaxed">
            La API oficial de WhatsApp Business permite escalar este canal sin perder la cercanía y la personalización que lo hacen tan efectivo. Integrado con tu CRM o tu tienda online, se convierte en uno de los canales de captación y fidelización con mayor retorno de la inversión.
          </p>
        </section>

        {/* Qué incluye */}
        <section className="mb-16 bg-gray-50 rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-primary-600 mb-8">Qué incluye el servicio</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <h3 className="text-lg font-bold text-primary-600 mb-4">Configuración y estrategia</h3>
              <ul className="space-y-3">
                {[
                  "Configuración de WhatsApp Business API",
                  "Perfil empresarial optimizado",
                  "Catálogo de productos o servicios",
                  "Respuestas automáticas y mensajes de bienvenida",
                  "Integración con CRM o herramientas existentes",
                  "Estrategia de captación de contactos opt-in",
                ].map((i) => (
                  <li key={i} className="flex gap-3 text-gray-700 text-sm"><span className="text-accent-500 font-bold shrink-0">✓</span>{i}</li>
                ))}
              </ul>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <h3 className="text-lg font-bold text-primary-600 mb-4">Gestión y campañas</h3>
              <ul className="space-y-3">
                {[
                  "Campañas de difusión segmentadas",
                  "Secuencias de mensajes automatizadas",
                  "Seguimiento de leads por WhatsApp",
                  "Campañas de fidelización y reactivación",
                  "Análisis de métricas y conversiones",
                  "Informe mensual de resultados",
                ].map((i) => (
                  <li key={i} className="flex gap-3 text-gray-700 text-sm"><span className="text-accent-500 font-bold shrink-0">✓</span>{i}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Casos de uso */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-primary-600 mb-6">Casos de uso por sector</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            WhatsApp Marketing funciona en prácticamente cualquier sector donde haya una relación directa con el cliente. Estos son algunos de los casos de uso más habituales:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { sector: "Clínicas y centros de salud", desc: "Confirmación de citas, recordatorios, resultados y seguimiento postratamiento. Reduce las ausencias y mejora la experiencia del paciente." },
              { sector: "Hostelería y restauración", desc: "Confirmación de reservas, promociones del día, menús especiales y campañas de fidelización para clientes recurrentes." },
              { sector: "Ecommerce y tiendas online", desc: "Confirmación de pedidos, notificaciones de envío, recuperación de carritos abandonados y campañas de reactivación." },
              { sector: "Inmobiliarias", desc: "Seguimiento de leads, envío de fichas de propiedades, recordatorios de visitas y comunicación personalizada con compradores." },
              { sector: "Formación y academias", desc: "Recordatorios de clases, envío de materiales, comunicación con alumnos y campañas de captación de nuevas matrículas." },
              { sector: "Servicios profesionales", desc: "Seguimiento comercial, envío de propuestas, recordatorios de reuniones y comunicación postventa con clientes." },
            ].map(s => (
              <div key={s.sector} className="bg-primary-50 rounded-xl p-4 border border-primary-100">
                <p className="font-bold text-primary-700 text-sm mb-1">{s.sector}</p>
                <p className="text-gray-600 text-xs leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Proceso */}
        <section className="mb-16 bg-primary-50 rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-primary-600 mb-8">Cómo ponemos en marcha tu estrategia de WhatsApp</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { num: "01", title: "Auditoría y estrategia", desc: "Analizamos tu situación actual, tus objetivos y tu base de clientes. Definimos qué casos de uso tienen más impacto para tu negocio y diseñamos la estrategia." },
              { num: "02", title: "Configuración técnica", desc: "Configuramos la API de WhatsApp Business, el perfil de empresa, el catálogo y las integraciones necesarias con tu CRM, web o tienda online." },
              { num: "03", title: "Captación de contactos", desc: "Implementamos los puntos de captura de opt-in para construir tu lista de contactos de forma legal: web, redes sociales, punto de venta o formularios." },
              { num: "04", title: "Campañas y optimización", desc: "Lanzamos las primeras campañas, medimos los resultados y optimizamos los mensajes, la segmentación y el timing para maximizar conversiones." },
            ].map(step => (
              <div key={step.num} className="bg-white rounded-2xl p-6 shadow-sm border border-primary-100">
                <span className="inline-block text-3xl font-bold text-accent-500 mb-3">{step.num}</span>
                <h3 className="font-bold text-primary-700 text-lg mb-2">{step.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* FAQs */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-primary-600 mb-8">Preguntas frecuentes sobre WhatsApp Marketing</h2>
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
          <h2 className="text-2xl font-bold mb-4">Tu próximo cliente está en WhatsApp</h2>
          <p className="text-primary-200 mb-6">Cuéntanos tu negocio y diseñamos una estrategia de WhatsApp Marketing adaptada a tus objetivos.</p>
          <div className="bg-white rounded-xl p-6">
            <ContactForm />
          </div>
        </section>
      </div>

      <RelatedArticles category="Marketing Digital" title="Más sobre captación digital" />
    </>
  );
}
