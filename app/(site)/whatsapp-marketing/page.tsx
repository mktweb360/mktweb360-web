import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ContactForm } from "@/components/ContactForm";
import { RelatedArticles } from "@/components/RelatedArticles";

export const metadata: Metadata = {
  title: "WhatsApp Marketing para Empresas — Capta y Fideliza Clientes | Mkt Web 360",
  description: "Estrategia y gestión de WhatsApp Marketing para empresas. WhatsApp Business, campañas de captación y automatizaciones. Servicio nacional.",
  alternates: { canonical: "https://www.mktweb360.com/whatsapp-marketing/" },
  openGraph: {
    title: "WhatsApp Marketing para Empresas | Mkt Web 360",
    description: "Capta y fideliza clientes por WhatsApp. Tasas de apertura del 98%. Automatizaciones y campañas personalizadas.",
    url: "https://www.mktweb360.com/whatsapp-marketing/",
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

export default function WhatsAppMarketingPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />

      <section className="bg-gradient-to-br from-primary-700 to-primary-900 text-white">
        <div className="max-w-6xl mx-auto px-4 py-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <Breadcrumbs crumbs={[{ label: "Inicio", href: "/" }, { label: "WhatsApp Marketing" }]} />
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight mt-4">
              El canal con el<br />
              <span className="text-accent-400">98% de tasa de apertura</span>
            </h1>
            <p className="text-xl text-primary-200 mb-8 leading-relaxed">
              El email tiene un 20% de apertura. WhatsApp tiene un 98%. Si no estás usando WhatsApp para comunicarte con tus clientes, estás dejando conversaciones — y ventas — sobre la mesa.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#contacto" className="bg-accent-500 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-accent-600 transition-colors text-center">
                Empezar con WhatsApp
              </a>
            </div>
          </div>
          <div className="hidden md:flex flex-col gap-3">
            {[
              { msg: "Hola, vi tu web y me interesa el servicio de SEO", time: "10:32", out: false },
              { msg: "Perfecto. Te llamo en 5 minutos para explicarte cómo podemos ayudarte 👍", time: "10:33", out: true },
              { msg: "Genial, muchas gracias por la rapidez!", time: "10:34", out: false },
            ].map((m, i) => (
              <div key={i} className={`flex ${m.out ? "justify-end" : "justify-start"}`}>
                <div className={`max-w-xs px-4 py-3 rounded-2xl text-sm ${m.out ? "bg-accent-500 text-white" : "bg-white/15 text-white"}`}>
                  <p>{m.msg}</p>
                  <p className={`text-xs mt-1 ${m.out ? "text-accent-100" : "text-primary-300"}`}>{m.time}</p>
                </div>
              </div>
            ))}
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

      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary-600 mb-4">Qué incluye el servicio</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <h3 className="text-xl font-bold text-primary-600 mb-6">Configuración y estrategia</h3>
              <ul className="space-y-3">
                {[
                  "Configuración de WhatsApp Business API",
                  "Perfil empresarial optimizado",
                  "Catálogo de productos o servicios",
                  "Respuestas automáticas y mensajes de bienvenida",
                  "Integración con CRM o herramientas existentes",
                  "Estrategia de captación de contactos",
                ].map((i) => (
                  <li key={i} className="flex gap-3 text-gray-700 text-sm">
                    <span className="text-accent-500 font-bold shrink-0">✓</span>{i}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <h3 className="text-xl font-bold text-primary-600 mb-6">Gestión y campañas</h3>
              <ul className="space-y-3">
                {[
                  "Campañas de difusión segmentadas",
                  "Secuencias de mensajes automatizadas",
                  "Seguimiento de leads por WhatsApp",
                  "Campañas de fidelización y reactivación",
                  "Análisis de métricas y conversiones",
                  "Informe mensual de resultados",
                ].map((i) => (
                  <li key={i} className="flex gap-3 text-gray-700 text-sm">
                    <span className="text-accent-500 font-bold shrink-0">✓</span>{i}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="contacto" className="py-16 px-4 bg-primary-600 text-white">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-4">Tu próximo cliente está en WhatsApp</h2>
            <p className="text-primary-200">Cuéntanos tu negocio y diseñamos una estrategia de WhatsApp Marketing adaptada a tus objetivos.</p>
          </div>
          <div className="bg-white rounded-2xl p-8">
            <ContactForm formType="whatsapp-marketing" />
          </div>
        </div>
      </section>

      <RelatedArticles category="Marketing Digital" title="Más sobre captación digital" />
    </>
  );
}
