import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ContactForm } from "@/components/ContactForm";
import { RelatedArticles } from "@/components/RelatedArticles";

export const metadata: Metadata = {
  title: "Gestión Redes Sociales — Community Manager España",
  description:
    "Servicio profesional de gestión de redes sociales y community management para empresas. Instagram, Facebook, LinkedIn y TikTok. Servicio nacional.",
  alternates: { canonical: "https://www.mktweb360.com/smm-social-media-marketing/" },
  openGraph: {
    title: "Gestión Redes Sociales — Community Manager | Mkt Web 360",
    description: "Community management profesional para tu empresa. Instagram, Facebook, LinkedIn, TikTok.",
    url: "https://www.mktweb360.com/smm-social-media-marketing/",
    images: [{ url: "/imagen-redes-sociales.jpg", width: 1200, height: 900, alt: "Gestión redes sociales Mkt Web 360" }],
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Gestión de Redes Sociales y Community Management",
  provider: { "@type": "Organization", name: "Mkt Web 360 SLU", url: "https://www.mktweb360.com" },
  description: "Servicio de gestión de redes sociales para empresas. Creación de contenido, publicaciones, atención al cliente y análisis de resultados.",
  areaServed: "España",
  url: "https://www.mktweb360.com/smm-social-media-marketing/",
};

export default function SmmPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />

      <section className="bg-gradient-to-br from-primary-700 to-primary-900 text-white">
        <div className="max-w-6xl mx-auto px-4 py-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <Breadcrumbs crumbs={[{ label: "Inicio", href: "/" }, { label: "Redes Sociales" }]} />
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight mt-4">
              Gestión Redes Sociales — Community Manager España
            </h1>
            <p className="text-xl text-primary-200 mb-8 leading-relaxed">
              Gestionamos tus redes sociales de forma profesional para construir una comunidad fiel, aumentar tu visibilidad de marca y convertir seguidores en clientes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#contacto" className="bg-accent-500 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-accent-600 transition-colors text-center">
                Solicitar presupuesto
              </a>
            </div>
          </div>
          <div>
            <img src="/imagen-redes-sociales.jpg" alt="Gestión redes sociales" className="rounded-2xl shadow-2xl w-full object-cover hidden md:block" />
          </div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-12">
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-primary-50 rounded-2xl p-6">
            <h2 className="text-xl font-bold text-primary-600 mb-4">Plataformas que gestionamos</h2>
            <ul className="space-y-2 text-gray-700">
              {["Instagram", "Facebook / Meta", "LinkedIn (B2B)", "TikTok", "X (Twitter)", "Google Business Profile"].map(p => (
                <li key={p} className="flex gap-2"><span className="text-accent-500">✓</span>{p}</li>
              ))}
            </ul>
          </div>
          <div className="bg-gray-50 rounded-2xl p-6">
            <h2 className="text-xl font-bold text-primary-600 mb-4">¿Qué incluye el servicio?</h2>
            <ul className="space-y-2 text-gray-700">
              {[
                "Estrategia de contenidos mensual",
                "Diseño gráfico de publicaciones",
                "Redacción de copies optimizados",
                "Programación y publicación",
                "Gestión de comentarios y mensajes",
                "Informe mensual de métricas",
                "Campañas de Social Ads (opcional)",
              ].map(i => (
                <li key={i} className="flex gap-2"><span className="text-accent-500">✓</span>{i}</li>
              ))}
            </ul>
          </div>
        </section>
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-primary-600 mb-6">¿Por qué las redes sociales importan para tu negocio?</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Las redes sociales son mucho más que publicar fotos. Son un canal de comunicación directo con tus clientes potenciales, una herramienta de fidelización y un poderoso canal de ventas cuando se gestionan correctamente.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Una estrategia de social media bien ejecutada aumenta el reconocimiento de tu marca, genera confianza y, en última instancia, se traduce en más ventas y clientes recurrentes. El 54% de los usuarios de redes sociales las usa para investigar productos antes de comprar.
          </p>
        </section>
        <section id="contacto" className="bg-primary-600 text-white rounded-2xl p-8">
          <h2 className="text-2xl font-bold mb-4">¿Hablamos de tus redes sociales?</h2>
          <p className="text-primary-200 mb-6">Cuéntanos tu situación actual y te proponemos una estrategia personalizada para tu sector.</p>
          <div className="bg-white rounded-xl p-6">
            <ContactForm />
          </div>
        </section>
      </div>
      <RelatedArticles category="Social Media" title="Más sobre redes sociales y marketing" />
    </>
  );
}
