import Image from "next/image";
import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ContactForm } from "@/components/ContactForm";
import { RelatedArticles } from "@/components/RelatedArticles";

export const metadata: Metadata = {
  title: "Email Marketing para Empresas — Campañas que Convierten",
  description:
    "Servicio profesional de email marketing para empresas y pymes. Diseño de newsletters, secuencias automatizadas y campañas de captación. Servicio nacional.",
  alternates: { canonical: "https://www.mktweb360.com/email-marketing/" },
  openGraph: {
    title: "Email Marketing para Empresas | Mkt Web 360",
    description: "Servicio profesional de email marketing para empresas y pymes. Diseño de newsletters, secuencias automatizadas y campañas de captación. Servicio nacional.",
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

export default function EmailMarketingPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />

      <section className="bg-gradient-to-br from-primary-700 to-primary-900 text-white">
        <div className="max-w-6xl mx-auto px-4 py-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <Breadcrumbs crumbs={[{ label: "Inicio", href: "/" }, { label: "Email Marketing" }]} />
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight mt-4">
              Email Marketing para Empresas — Campañas que Convierten
            </h1>
            <p className="text-xl text-primary-200 mb-8 leading-relaxed">
              El email sigue siendo el canal con mayor retorno de inversión en marketing digital. Diseñamos y gestionamos tus campañas de email marketing para que cada envío genere resultados reales: más ventas, más clientes recurrentes y más engagement con tu marca.
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
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-primary-50 rounded-2xl p-6">
            <h2 className="text-xl font-bold text-primary-600 mb-4">Qué incluye el servicio</h2>
            <ul className="space-y-2 text-gray-700">
              {[
                "Estrategia y planificación de envíos",
                "Diseño de plantillas de marca",
                "Redacción de copies persuasivos",
                "Segmentación de listas",
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
                "Email de recuperación de carrito",
                "Secuencias de nurturing B2B",
                "Reactivación de contactos fríos",
                "Automatizaciones de postventa",
              ].map(i => (
                <li key={i} className="flex gap-2"><span className="text-accent-500">✓</span>{i}</li>
              ))}
            </ul>
          </div>
        </section>
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-primary-600 mb-6">Por qué el email marketing sigue siendo imprescindible</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Con un ROI medio de 36€ por cada euro invertido, el email marketing supera a cualquier otro canal digital. A diferencia de las redes sociales, tu lista de contactos es tuya: no depende de algoritmos ni de cambios de plataforma.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Una estrategia bien diseñada convierte suscriptores en clientes, mantiene el contacto con tu base existente y reactiva a quienes llevan tiempo sin comprar. El email no interrumpe — llega cuando el usuario decide leerlo, lo que genera una predisposición mucho mayor que otros canales.
          </p>
        </section>
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
