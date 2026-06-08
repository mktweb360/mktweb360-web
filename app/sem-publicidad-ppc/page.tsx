import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ContactForm } from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Campañas Google Ads — Gestión SEM España",
  description:
    "Gestión profesional de campañas Google Ads y SEM/PPC para empresas españolas. Maximizamos tu inversión publicitaria con campañas optimizadas desde el primer día.",
  alternates: { canonical: "https://www.mktweb360.com/sem-publicidad-ppc/" },
  openGraph: {
    title: "Google Ads y SEM — Gestión de Campañas PPC | Mkt Web 360",
    description: "Campañas de Google Ads que generan clientes desde el primer día. Servicio nacional.",
    url: "https://www.mktweb360.com/sem-publicidad-ppc/",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Gestión de Campañas Google Ads SEM",
  provider: { "@type": "Organization", name: "Mkt Web 360 SLU", url: "https://www.mktweb360.com" },
  description: "Gestión de campañas de publicidad SEM en Google Ads para empresas. Search, Display, Shopping y YouTube Ads.",
  areaServed: "España",
  url: "https://www.mktweb360.com/sem-publicidad-ppc/",
};

export default function SemPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <div className="max-w-4xl mx-auto px-4 py-12">
        <Breadcrumbs crumbs={[{ label: "Inicio", href: "/" }, { label: "SEM / Google Ads" }]} />
        <h1 className="text-4xl font-bold text-primary-600 mb-4">
          Campañas Google Ads — Gestión SEM España
        </h1>
        <p className="text-xl text-gray-600 mb-8 leading-relaxed">
          Generamos clientes potenciales para tu negocio desde el primer día con campañas de Google Ads optimizadas y rentables. Pagamos solo cuando alguien hace clic.
        </p>
        <section className="bg-primary-50 rounded-2xl p-8 mb-12">
          <h2 className="text-2xl font-bold text-primary-600 mb-4">Tipos de campañas que gestionamos</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { title: "Google Search", desc: "Anuncios en los resultados de búsqueda para captar usuarios con intención de compra." },
              { title: "Google Display", desc: "Anuncios gráficos en millones de webs para aumentar tu visibilidad de marca." },
              { title: "Google Shopping", desc: "Anuncios de producto para tiendas online que muestran precio e imagen directamente." },
              { title: "YouTube Ads", desc: "Campañas de vídeo para aumentar el reconocimiento de marca y atraer nuevos clientes." },
              { title: "Remarketing", desc: "Impactamos de nuevo a usuarios que ya han visitado tu web para recuperar ventas perdidas." },
              { title: "Performance Max", desc: "Campañas inteligentes que optimizan automáticamente en todos los canales de Google." },
            ].map((item) => (
              <div key={item.title} className="bg-white rounded-xl p-4 border border-gray-200">
                <h3 className="font-semibold text-primary-700 mb-1">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-primary-600 mb-4">¿Por qué elegir nuestra gestión SEM?</h2>
          <ul className="space-y-3 text-gray-700">
            {[
              "Gestión por especialistas certificados en Google Ads",
              "Sin permanencia — flexibilidad total",
              "Tarifa de gestión transparente sin porcentaje sobre inversión",
              "Informe mensual con métricas reales: impresiones, clics, conversiones y coste por lead",
              "Optimización continua: tests A/B de anuncios, ajuste de pujas y segmentaciones",
              "Seguimiento de conversiones correctamente configurado desde el primer día",
            ].map((item) => (
              <li key={item} className="flex gap-3">
                <span className="text-accent-500 font-bold mt-0.5">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>
        <section className="bg-primary-600 text-white rounded-2xl p-8">
          <h2 className="text-2xl font-bold mb-4">Solicita análisis gratuito de tu cuenta</h2>
          <p className="text-primary-200 mb-6">Revisamos tu cuenta de Google Ads actual o te ayudamos a crear una nueva con las mejores prácticas desde el inicio.</p>
          <div className="bg-white rounded-xl p-6">
            <ContactForm />
          </div>
        </section>
      </div>
    </>
  );
}
