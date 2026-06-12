import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ContactForm } from "@/components/ContactForm";
import { RelatedArticles } from "@/components/RelatedArticles";

export const metadata: Metadata = {
  title: "Analítica Web para Empresas — Datos que Generan Decisiones",
  description:
    "Servicio profesional de analítica web para empresas. Configuración de GA4, GTM, dashboards de negocio y seguimiento de conversiones. Servicio nacional.",
  alternates: { canonical: "https://www.mktweb360.com/analitica-web/" },
  openGraph: {
    title: "Analítica Web para Empresas | Mkt Web 360",
    description: "Servicio profesional de analítica web para empresas. Configuración de GA4, GTM, dashboards de negocio y seguimiento de conversiones. Servicio nacional.",
    url: "https://www.mktweb360.com/analitica-web/",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Analítica Web para Empresas",
  provider: { "@type": "Organization", name: "Mkt Web 360 SLU", url: "https://www.mktweb360.com" },
  description: "Servicio profesional de analítica web para empresas. Configuración de GA4, GTM, dashboards de negocio y seguimiento de conversiones.",
  areaServed: "España",
  url: "https://www.mktweb360.com/analitica-web/",
};

export default function AnaliticaWebPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <div className="max-w-4xl mx-auto px-4 py-12">
        <Breadcrumbs crumbs={[{ label: "Inicio", href: "/" }, { label: "Analítica Web" }]} />
        <h1 className="text-4xl font-bold text-primary-600 mb-4">
          Analítica Web para Empresas — Datos que Generan Decisiones
        </h1>
        <p className="text-xl text-gray-600 mb-8 leading-relaxed">
          Sin datos no hay estrategia. Configuramos y gestionamos tu analítica web para que sepas exactamente qué funciona, qué no funciona y dónde invertir para crecer. Cada decisión de marketing respaldada por datos reales.
        </p>
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-primary-50 rounded-2xl p-6">
            <h2 className="text-xl font-bold text-primary-600 mb-4">Qué configuramos</h2>
            <ul className="space-y-2 text-gray-700">
              {[
                "Google Analytics 4 (GA4)",
                "Google Tag Manager (GTM)",
                "Seguimiento de conversiones",
                "Eventos personalizados",
                "Google Consent Mode v2",
                "Vinculación con Google Ads",
                "Search Console integrada",
              ].map(i => (
                <li key={i} className="flex gap-2"><span className="text-accent-500">✓</span>{i}</li>
              ))}
            </ul>
          </div>
          <div className="bg-gray-50 rounded-2xl p-6">
            <h2 className="text-xl font-bold text-primary-600 mb-4">Qué entregamos</h2>
            <ul className="space-y-2 text-gray-700">
              {[
                "Dashboard de negocio personalizado",
                "Informe mensual de rendimiento",
                "Análisis de fuentes de tráfico",
                "Embudo de conversión detallado",
                "Alertas automáticas de anomalías",
                "Auditoría de medición inicial",
                "Formación en lectura de datos",
              ].map(i => (
                <li key={i} className="flex gap-2"><span className="text-accent-500">✓</span>{i}</li>
              ))}
            </ul>
          </div>
        </section>
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-primary-600 mb-6">Por qué la analítica web es la base de cualquier estrategia digital</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            La mayoría de las empresas tienen Google Analytics instalado pero no lo usan para tomar decisiones. Tener datos no es lo mismo que tener analítica. La analítica real conecta los datos con acciones concretas: qué canal recortar, qué página optimizar, qué producto promocionar.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Configuramos una medición limpia, fiable y orientada a negocio — no a métricas de vanidad. Sabrás cuántos leads genera cada canal, cuál es tu coste por conversión real y qué contenidos impulsan las ventas.
          </p>
        </section>
        <section className="bg-primary-600 text-white rounded-2xl p-8">
          <h2 className="text-2xl font-bold mb-4">¿Hablamos de tu analítica?</h2>
          <p className="text-primary-200 mb-6">Auditamos tu configuración actual sin compromiso y te decimos qué datos te estás perdiendo y qué decisiones podrías estar tomando mejor.</p>
          <div className="bg-white rounded-xl p-6">
            <ContactForm />
          </div>
        </section>
      </div>
      <RelatedArticles category="Marketing Digital" title="Más sobre analítica y estrategia digital" />
    </>
  );
}
