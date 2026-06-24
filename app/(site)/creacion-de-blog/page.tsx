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
    images: [{ url: "/og-creacion-de-blog.jpg", width: 1200, height: 630 }],
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

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "¿Cuánto tarda en posicionar un blog nuevo?", acceptedAnswer: { "@type": "Answer", text: "Los primeros artículos bien optimizados empiezan a aparecer en Google entre 4 y 12 semanas. El tráfico orgánico significativo llega entre los 3 y 6 meses, dependiendo de la competencia del sector y la autoridad del dominio. Es una inversión a medio plazo con retorno acumulativo." } },
    { "@type": "Question", name: "¿Redactáis vosotros los artículos o lo hago yo?", acceptedAnswer: { "@type": "Answer", text: "Ofrecemos ambas opciones. Podemos encargarnos de la redacción completa con nuestro equipo de especialistas en contenido SEO, o podemos entregarte la estructura, el briefing y las keywords para que redactes tú. La opción más habitual es que nosotros redactemos y tú revises antes de publicar." } },
    { "@type": "Question", name: "¿El blog tiene que estar en mi web o puede ser independiente?", acceptedAnswer: { "@type": "Answer", text: "Lo más eficiente para el SEO es integrarlo en tu dominio principal (ejemplo: tuempresa.com/blog). Así cada artículo que posiciona refuerza la autoridad de tu dominio y beneficia también a tus páginas de servicios. Un subdomain o dominio separado no transfiere autoridad al dominio principal." } },
    { "@type": "Question", name: "¿Con cuántos artículos al mes empezáis?", acceptedAnswer: { "@type": "Answer", text: "Recomendamos empezar con 2 artículos mensuales de calidad antes que publicar más con menos profundidad. Google premia el contenido que responde en profundidad a la intención de búsqueda. A partir de los primeros resultados, ajustamos el ritmo de publicación según lo que funciona." } },
  ],
};

export default function CreacionBlogPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

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


      {/* Por qué un blog */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-primary-600 mb-6">Por qué un blog es el activo digital más rentable a largo plazo</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            La publicidad de pago genera tráfico mientras pagas. Cuando paras, el tráfico desaparece. Un blog bien construido genera tráfico orgánico de forma acumulativa y permanente — un artículo bien posicionado puede atraer visitas y clientes durante años sin coste adicional.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Cada artículo que publicas es una nueva puerta de entrada a tu web. Cada keyword que posicionas es un cliente potencial que llega buscando exactamente lo que ofreces. Y cada artículo construye la autoridad temática de tu dominio, lo que mejora el posicionamiento de toda la web, incluyendo tus páginas de servicio comerciales.
          </p>
          <p className="text-gray-700 leading-relaxed">
            El blog no es un canal de vanidad ni un diario corporativo. Es una herramienta de captación que funciona cuando está construida con criterio SEO, con intención de búsqueda clara y con un objetivo de conversión definido en cada artículo. En Mkt Web 360 diseñamos blogs que generan tráfico cualificado y lo convierten en leads y ventas.
          </p>
        </div>
      </section>

      {/* Proceso */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-primary-600 mb-8">Cómo creamos tu blog</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { num: "01", title: "Estrategia y keyword research", desc: "Investigamos las keywords con mayor potencial para tu negocio y sector. Definimos los pilares temáticos, los clusters de contenido y el calendario editorial para los primeros 3 meses." },
              { num: "02", title: "Arquitectura y diseño", desc: "Diseñamos la estructura del blog: categorías, etiquetas, navegación interna, plantilla de artículo y CTAs. Todo orientado a SEO y conversión desde el primer momento." },
              { num: "03", title: "Desarrollo e integración", desc: "Integramos el blog en tu web existente o lo desarrollamos como proyecto independiente. Configuramos el sitemap, los esquemas de datos estructurados y todas las bases técnicas SEO." },
              { num: "04", title: "Producción y seguimiento", desc: "Redactamos los primeros artículos, los publicamos y monitorizamos su posicionamiento. Ajustamos la estrategia mensualmente según los resultados obtenidos." },
            ].map(step => (
              <div key={step.num} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                <span className="inline-block text-3xl font-bold text-accent-500 mb-3">{step.num}</span>
                <h3 className="font-bold text-primary-700 text-lg mb-2">{step.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-primary-600 mb-8">Preguntas frecuentes sobre creación de blog</h2>
          <div className="space-y-4">
            {[
              { q: "¿Cuánto tarda en posicionar un blog nuevo?",
                a: "Los primeros artículos bien optimizados empiezan a aparecer en Google entre 4 y 12 semanas. El tráfico orgánico significativo llega entre los 3 y 6 meses, dependiendo de la competencia del sector y la autoridad del dominio. Es una inversión a medio plazo con retorno acumulativo." },
              { q: "¿Redactáis vosotros los artículos o lo hago yo?",
                a: "Ofrecemos ambas opciones. Podemos encargarnos de la redacción completa con nuestro equipo de especialistas en contenido SEO, o podemos entregarte la estructura, el briefing y las keywords para que redactes tú. La opción más habitual es que nosotros redactemos y tú revises antes de publicar." },
              { q: "¿El blog tiene que estar en mi web o puede ser independiente?",
                a: "Lo más eficiente para el SEO es integrarlo en tu dominio principal (ejemplo: tuempresa.com/blog). Así cada artículo que posiciona refuerza la autoridad de tu dominio y beneficia también a tus páginas de servicios. Un subdomain o dominio separado no transfiere autoridad al dominio principal." },
              { q: "¿Con cuántos artículos al mes empezáis?",
                a: "Recomendamos empezar con 2 artículos mensuales de calidad antes que publicar más con menos profundidad. Google premia el contenido que responde en profundidad a la intención de búsqueda. A partir de los primeros resultados, ajustamos el ritmo de publicación según lo que funciona." },
            ].map(faq => (
              <div key={faq.q} className="bg-gray-50 border border-gray-100 rounded-2xl p-6">
                <h3 className="font-bold text-primary-700 mb-2">{faq.q}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
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
