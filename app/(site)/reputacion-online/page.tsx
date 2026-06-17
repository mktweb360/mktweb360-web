import Image from "next/image";
import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ContactForm } from "@/components/ContactForm";
import { RelatedArticles } from "@/components/RelatedArticles";

export const metadata: Metadata = {
  title: "Gestión de Reputación Online para Empresas — España",
  description:
    "Servicio profesional de gestión y mejora de reputación online para empresas y marcas. Monitorización, gestión de reseñas y estrategia de imagen digital. Servicio nacional.",
  alternates: { canonical: "https://www.mktweb360.com/reputacion-online/" },
  openGraph: {
    title: "Gestión Reputación Online para Empresas | Mkt Web 360",
    description: "Servicio profesional de gestión y mejora de reputación online para empresas y marcas. Monitorización, gestión de reseñas y estrategia de imagen digital. Servicio nacional.",
    url: "https://www.mktweb360.com/reputacion-online/",
    images: [{ url: "/imagen-reputacion-online.jpg", width: 1200, height: 900, alt: "Reputación online Mkt Web 360" }],
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Gestión de Reputación Online para Empresas",
  provider: { "@type": "Organization", name: "Mkt Web 360 SLU", url: "https://www.mktweb360.com" },
  description: "Servicio profesional de gestión y mejora de reputación online para empresas y marcas. Monitorización, gestión de reseñas y estrategia de imagen digital.",
  areaServed: "España",
  url: "https://www.mktweb360.com/reputacion-online/",
};

export default function ReputacionOnlinePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />

      <section className="bg-gradient-to-br from-primary-700 to-primary-900 text-white">
        <div className="max-w-6xl mx-auto px-4 py-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <Breadcrumbs crumbs={[{ label: "Inicio", href: "/" }, { label: "Reputación Online" }]} />
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight mt-4">
              Gestión de Reputación Online para Empresas
            </h1>
            <p className="text-xl text-primary-200 mb-8 leading-relaxed">
              Tu reputación online es lo primero que ven tus clientes potenciales antes de contactarte. Gestionamos y mejoramos la imagen digital de tu empresa para que las primeras impresiones trabajen a tu favor.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#contacto" className="bg-accent-500 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-accent-600 transition-colors text-center">
                Solicitar presupuesto
              </a>
            </div>
          </div>
          <div>
            <Image src="/imagen-reputacion-online.jpg" alt="Reputación online" className="rounded-2xl shadow-2xl w-full object-cover hidden md:block" width={800} height={600} />
          </div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-12">
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-primary-50 rounded-2xl p-6">
            <h2 className="text-xl font-bold text-primary-600 mb-4">Qué incluye el servicio</h2>
            <ul className="space-y-2 text-gray-700">
              {[
                "Auditoría inicial de reputación",
                "Monitorización de menciones y reseñas",
                "Gestión de reseñas en Google",
                "Estrategia de respuesta a críticas",
                "Solicitud de reseñas positivas",
                "Control de resultados de búsqueda",
                "Informe mensual de reputación",
              ].map(i => (
                <li key={i} className="flex gap-2"><span className="text-accent-500">✓</span>{i}</li>
              ))}
            </ul>
          </div>
          <div className="bg-gray-50 rounded-2xl p-6">
            <h2 className="text-xl font-bold text-primary-600 mb-4">Plataformas que monitorizamos</h2>
            <ul className="space-y-2 text-gray-700">
              {[
                "Google Business Profile",
                "Trustpilot",
                "Tripadvisor",
                "Facebook Reviews",
                "Redes sociales",
                "Foros y webs de opinión",
                "Resultados de búsqueda orgánica",
              ].map(i => (
                <li key={i} className="flex gap-2"><span className="text-accent-500">✓</span>{i}</li>
              ))}
            </ul>
          </div>
        </section>
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-primary-600 mb-6">Por qué la reputación online define tus ventas</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            El 93% de los consumidores lee reseñas online antes de tomar una decisión de compra. Una sola reseña negativa sin respuesta puede costar decenas de clientes potenciales. La reputación online no es un activo pasivo — requiere gestión activa y estrategia.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Gestionamos tanto la parte reactiva — responder reseñas negativas de forma profesional — como la proactiva: generar un flujo constante de reseñas positivas que refuercen la confianza en tu marca y mejoren tu posicionamiento local en Google.
          </p>
        </section>
        <section id="contacto" className="bg-primary-600 text-white rounded-2xl p-8">
          <h2 className="text-2xl font-bold mb-4">¿Hablamos de tu reputación online?</h2>
          <p className="text-primary-200 mb-6">Analizamos tu situación actual sin compromiso y te explicamos qué está afectando a tu imagen digital.</p>
          <div className="bg-white rounded-xl p-6">
            <ContactForm />
          </div>
        </section>
      </div>
      <RelatedArticles category="Marketing Digital" title="Más sobre reputación y presencia digital" />
    </>
  );
}
