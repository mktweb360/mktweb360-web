import Image from "next/image";
import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ContactForm } from "@/components/ContactForm";
import { RelatedArticles } from "@/components/RelatedArticles";

export const metadata: Metadata = {
  title: "Marketing de Contenidos — Estrategia de Contenidos Digitales",
  description:
    "Servicio de marketing de contenidos para empresas. Artículos de blog SEO, contenidos para redes sociales, email marketing y estrategia de contenidos.",
  alternates: { canonical: "https://www.mktweb360.com/marketing-de-contenidos/" },
  openGraph: {
    title: "Marketing de Contenidos para Empresas | Mkt Web 360",
    description: "Estrategia y producción de contenidos digitales para captación orgánica, autoridad de marca y SEO.",
    url: "https://www.mktweb360.com/marketing-de-contenidos/",
    images: [{ url: "/imagen-marketing-contenidos.jpg", width: 1200, height: 900, alt: "Marketing de contenidos Mkt Web 360" }],
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Marketing de Contenidos",
  provider: { "@type": "Organization", name: "Mkt Web 360 SLU", url: "https://www.mktweb360.com" },
  description: "Servicio de marketing de contenidos para empresas. Artículos SEO, estrategia editorial y contenidos para redes sociales.",
  areaServed: "España",
  url: "https://www.mktweb360.com/marketing-de-contenidos/",
};

export default function ContentMarketingPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />

      <section className="bg-gradient-to-br from-primary-700 to-primary-900 text-white">
        <div className="max-w-6xl mx-auto px-4 py-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <Breadcrumbs crumbs={[{ label: "Inicio", href: "/" }, { label: "Marketing de Contenidos" }]} />
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight mt-4">
              Marketing de Contenidos
            </h1>
            <p className="text-xl text-primary-200 mb-8 leading-relaxed">
              El contenido de calidad posiciona tu marca como referente en tu sector, mejora tu SEO y construye confianza con tus clientes potenciales. Creamos la estrategia y el contenido que necesita tu empresa.
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
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {[
            { title: "Blog corporativo SEO", desc: "Artículos optimizados para posicionar keywords estratégicas y atraer tráfico orgánico cualificado." },
            { title: "Contenido para redes sociales", desc: "Posts, historias y reels diseñados para cada plataforma y orientados a generar engagement." },
            { title: "Email marketing", desc: "Newsletters y secuencias de email que nutren a tus leads y los convierten en clientes." },
            { title: "Guías y ebooks", desc: "Contenido de valor descargable para generar leads y demostrar la expertise de tu empresa." },
          ].map(item => (
            <div key={item.title} className="bg-gray-50 rounded-xl p-6 border border-gray-200">
              <h3 className="font-semibold text-primary-700 mb-2">{item.title}</h3>
              <p className="text-gray-600 text-sm">{item.desc}</p>
            </div>
          ))}
        </section>
        <section className="bg-primary-50 rounded-2xl p-8 mb-12">
          <h2 className="text-2xl font-bold text-primary-600 mb-4">¿Por qué el contenido es el rey del marketing digital?</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            El marketing de contenidos genera 3 veces más leads que el outbound marketing tradicional y cuesta un 62% menos. Las empresas que publican contenido de forma regular reciben un 55% más de tráfico en su web.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Pero no se trata solo de cantidad: el contenido debe ser relevante, bien estructurado y optimizado para los motores de búsqueda. En Mkt Web 360 combinamos redacción de calidad con técnicas SEO avanzadas para que cada pieza de contenido trabaje para tu negocio.
          </p>
        </section>
        <section id="contacto" className="bg-primary-600 text-white rounded-2xl p-8">
          <h2 className="text-2xl font-bold mb-4">¿Quieres una estrategia de contenidos?</h2>
          <p className="text-primary-200 mb-6">Cuéntanos tu sector y objetivos. Diseñamos un plan editorial personalizado.</p>
          <div className="bg-white rounded-xl p-6">
            <ContactForm />
          </div>
        </section>
      </div>
      <RelatedArticles category="Estrategia" />
    </>
  );
}
