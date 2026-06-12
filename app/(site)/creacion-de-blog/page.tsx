import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ContactForm } from "@/components/ContactForm";
import { RelatedArticles } from "@/components/RelatedArticles";

export const metadata: Metadata = {
  title: "Creación de Blog Profesional para Empresas — Mkt Web 360",
  description: "Creamos y gestionamos blogs corporativos, profesionales y temáticos que posicionan tu marca en Google y generan tráfico orgánico constante. Servicio nacional.",
  alternates: { canonical: "https://www.mktweb360.com/creacion-de-blog/" },
  openGraph: {
    title: "Creación de Blog Profesional para Empresas | Mkt Web 360",
    description: "Blogs que posicionan en Google y convierten visitas en clientes. Corporativos, profesionales y temáticos.",
    url: "https://www.mktweb360.com/creacion-de-blog/",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Creación de Blog Profesional",
  provider: { "@type": "Organization", name: "Mkt Web 360 SLU", url: "https://www.mktweb360.com" },
  description: "Creación y gestión de blogs corporativos y profesionales orientados a SEO y captación de clientes.",
  areaServed: "España",
  url: "https://www.mktweb360.com/creacion-de-blog/",
};

const BLOG_TYPES = [
  {
    title: "Blog Corporativo",
    desc: "Para empresas que quieren posicionarse como referentes en su sector y generar leads de calidad.",
    items: ["Contenido orientado a conversión", "Integrado en tu web corporativa", "SEO técnico desde el primer artículo"],
  },
  {
    title: "Blog Profesional",
    desc: "Para autónomos, consultores y profesionales que quieren construir autoridad en su campo.",
    items: ["Estrategia de contenidos personalizada", "Posicionamiento por keywords de nicho", "Captación de clientes cualificados"],
  },
  {
    title: "Blog Temático",
    desc: "Para proyectos de contenido, afiliación o medios especializados que viven del tráfico orgánico.",
    items: ["Arquitectura de contenido optimizada", "Clusters de keywords estratégicos", "Monetización y tráfico a largo plazo"],
  },
];

export default function CreacionBlogPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />

      <section className="bg-gradient-to-br from-primary-700 to-primary-900 text-white">
        <div className="max-w-6xl mx-auto px-4 py-16">
          <Breadcrumbs crumbs={[{ label: "Inicio", href: "/" }, { label: "Creación de Blog" }]} />
          <div className="max-w-3xl mt-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Un blog que trabaja<br />
              <span className="text-accent-400">para tu negocio 24/7</span>
            </h1>
            <p className="text-xl text-primary-200 mb-8 leading-relaxed">
              Un blog bien construido es el activo digital más rentable que puede tener una empresa. Genera tráfico orgánico constante, posiciona tu marca como referente y convierte lectores en clientes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#contacto" className="bg-accent-500 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-accent-600 transition-colors text-center">
                Quiero mi blog
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-primary-600 py-6 px-4">
        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 text-center text-white">
          {[
            { value: "Tráfico", label: "orgánico constante" },
            { value: "SEO", label: "desde el primer artículo" },
            { value: "Autoridad", label: "de marca en tu sector" },
            { value: "Leads", label: "cualificados sin pagar por clic" },
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
            <h2 className="text-3xl font-bold text-primary-600 mb-4">Elige tu tipo de blog</h2>
            <p className="text-gray-600 max-w-xl mx-auto">Cada proyecto tiene objetivos distintos. Diseñamos la estrategia que encaja con los tuyos.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {BLOG_TYPES.map((b) => (
              <div key={b.title} className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                <h3 className="text-xl font-bold text-primary-600 mb-3">{b.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-5">{b.desc}</p>
                <ul className="space-y-2">
                  {b.items.map((i) => (
                    <li key={i} className="flex gap-2 text-sm text-gray-700">
                      <span className="text-accent-500 font-bold shrink-0">✓</span>{i}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-primary-600 mb-6">Qué incluye cada proyecto</h2>
              <div className="space-y-4">
                {[
                  "Estrategia de contenidos y keyword research",
                  "Arquitectura de información optimizada para SEO",
                  "Diseño integrado en tu web o independiente",
                  "Redacción de artículos por especialistas",
                  "Optimización on-page de cada publicación",
                  "Schema markup para rich snippets",
                  "Informe mensual de posiciones y tráfico",
                  "Formación para gestión autónoma (opcional)",
                ].map((f) => (
                  <div key={f} className="flex items-center gap-4">
                    <span className="text-accent-500 text-xl font-bold shrink-0">✓</span>
                    <span className="text-gray-700 font-medium text-sm">{f}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-primary-600 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Tu mejor cliente te está buscando en Google</h3>
              <p className="text-primary-200 mb-6 leading-relaxed">Un artículo bien posicionado puede traerte clientes durante años sin invertir un euro en publicidad.</p>
              <ul className="space-y-3 text-primary-100">
                {[
                  "ROI a largo plazo sin coste por clic",
                  "Contenido que posiciona y convierte",
                  "Autoridad de marca en tu sector",
                  "Tráfico cualificado y consistente",
                ].map((i) => (
                  <li key={i} className="flex items-center gap-2 text-sm">
                    <span className="text-accent-400 font-bold">✓</span>{i}
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
            <h2 className="text-3xl font-bold mb-4">Mientras tú trabajas, nosotros conseguimos que te llamen</h2>
            <p className="text-primary-200">Cuéntanos tu proyecto y diseñamos una estrategia de blog adaptada a tus objetivos.</p>
          </div>
          <div className="bg-white rounded-2xl p-8">
            <ContactForm formType="creacion-blog" />
          </div>
        </div>
      </section>

      <RelatedArticles category="Marketing Digital" title="Más sobre contenidos y SEO" />
    </>
  );
}
