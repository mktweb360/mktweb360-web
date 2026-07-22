import Image from "next/image";
import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ContactForm } from "@/components/ContactForm";
import { RelatedArticles } from "@/components/RelatedArticles";

export const metadata: Metadata = {
  title: "Blog para Monetización — Ingresos Pasivos con AdSense y Afiliados",
  description: "Creamos tu blog de nicho optimizado para generar ingresos pasivos con AdSense y marketing de afiliados. Setup completo desde 990€ con 15 artículos SEO, configuración de monetización y formación.",
  alternates: { canonical: "https://www.mktweb360.com/blog-para-monetizacion/" },
  openGraph: {
    title: "Blog para Monetización — Ingresos Pasivos con AdSense y Afiliados | Mkt Web 360",
    description: "Creamos tu blog de nicho optimizado para generar ingresos pasivos con AdSense y marketing de afiliados. Setup completo desde 990€ con 15 artículos SEO, configuración de monetización y formación.",
    url: "https://www.mktweb360.com/blog-para-monetizacion/",
    images: [{ url: "https://www.mktweb360.com/og-blog-monetizacion.jpg", width: 1200, height: 630 }],
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Blog para Monetización con AdSense y Afiliados",
  serviceType: "Blog Monetization Service",
  provider: { "@type": "Organization", name: "Mkt Web 360 SLU", url: "https://www.mktweb360.com" },
  description: "Creación y optimización de blogs de nicho para generar ingresos pasivos mediante Google AdSense y marketing de afiliados. Setup completo con estrategia SEO, contenido inicial y formación.",
  areaServed: "España",
  url: "https://www.mktweb360.com/blog-para-monetizacion/",
  offers: {
    "@type": "Offer",
    price: "990",
    priceCurrency: "EUR",
    description: "Setup completo de blog para monetización desde 990€. Incluye dominio, hosting, WordPress, 15 artículos SEO, configuración AdSense y Amazon Associates.",
    availability: "https://schema.org/InStock",
    url: "https://www.mktweb360.com/blog-para-monetizacion/",
  },
};
const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Inicio", item: "https://www.mktweb360.com/" },
    { "@type": "ListItem", position: 2, name: "Blog para Monetización", item: "https://www.mktweb360.com/blog-para-monetizacion/" },
  ],
};

const FAQS = [
  { q: "¿Cuánto tiempo tarda un blog en generar ingresos?",
    a: "Los primeros ingresos con AdSense suelen aparecer entre los 4 y 8 meses, cuando el blog empieza a acumular tráfico orgánico. Para generar ingresos consistentes y significativos, el horizonte habitual es de 12 a 18 meses. Los blogs de nicho bien enfocados con marketing de afiliados pueden acortar este plazo si el nicho tiene alta intención de compra." },
  { q: "¿Qué incluye el setup de 990€?",
    a: "El setup incluye: elección y registro del dominio, hosting del primer año, instalación y configuración de WordPress con tema optimizado para SEO y velocidad, configuración de Google AdSense y Amazon Associates, 15 artículos SEO iniciales optimizados para las keywords de mayor potencial del nicho, y una sesión de formación para que puedas gestionar el blog de forma autónoma." },
  { q: "¿Qué nicho debo elegir para que el blog sea rentable?",
    a: "Los nichos más rentables combinan tres factores: volumen de búsquedas suficiente, competencia moderada y alta intención de compra o interés publicitario. Nichos como hogar y jardín, mascotas, fitness, tecnología de consumo, juguetes o emprendimiento digital tienen buen rendimiento en España con AdSense y Amazon Associates. Analizamos el potencial del nicho antes de empezar para elegir la mejor oportunidad." },
  { q: "¿Puedo gestionar el blog yo mismo después del setup?",
    a: "Sí. Desarrollamos el blog sobre WordPress con formación incluida para que puedas publicar artículos, actualizar productos de afiliados, revisar el rendimiento de AdSense y gestionar el blog de forma completamente autónoma. Si prefieres que lo gestionemos nosotros, tenemos un plan de mantenimiento mensual de 290€ que incluye 10 artículos SEO mensuales, actualización de productos de afiliados y informe de ingresos." },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export default function BlogMonetizacionPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <section className="bg-gradient-to-br from-primary-700 to-primary-900 text-white">
        <div className="max-w-6xl mx-auto px-4 py-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <Breadcrumbs crumbs={[{ label: "Inicio", href: "/" }, { label: "Blog para Monetización" }]} />
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight mt-4">
              Blog para Monetización: crea un activo digital que genera ingresos mientras duermes
            </h1>
            <p className="text-xl text-primary-200 mb-8 leading-relaxed">
              Creamos tu blog de nicho optimizado para generar ingresos pasivos con Google AdSense y marketing de afiliados. Setup completo desde 990€ con 15 artículos SEO, configuración de monetización y formación para que lo gestiones de forma autónoma.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#contacto" className="bg-accent-500 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-accent-600 transition-colors text-center">
                Solicitar presupuesto
              </a>
            </div>
          </div>
          <div>
            <Image src="/imagen-blog-monetizacion.jpg" alt="Blog para monetización con AdSense y afiliados" className="rounded-2xl shadow-2xl w-full object-cover hidden md:block" width={800} height={600} />
          </div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-12">

        {/* Qué es */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-primary-600 mb-6">Qué es un blog de monetización y por qué sigue funcionando en 2026</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Un blog de monetización es una web de contenido optimizada para posicionar en Google y generar ingresos de forma pasiva a través de publicidad (Google AdSense) y comisiones de afiliados (Amazon Associates, programas de afiliación especializados). El modelo funciona porque el tráfico orgánico es gratuito y recurrente: una vez que los artículos posicionan, siguen generando visitas y ingresos sin trabajo adicional.
          </p>
          <p className="text-gray-700 leading-relaxed">
            En 2026, con la inteligencia artificial generando contenido masivo de baja calidad, los blogs bien construidos — con contenido específico, experiencia real y optimización técnica — tienen cada vez más valor. Google premia el contenido que demuestra experiencia real (E-E-A-T) y penaliza el contenido genérico. Un blog de nicho bien ejecutado sigue siendo uno de los activos digitales con mejor ROI a largo plazo.
          </p>
        </section>

        {/* Cómo funciona la monetización */}
        <section className="mb-16 bg-gray-50 rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-primary-600 mb-6">Cómo funciona la monetización con AdSense y afiliados</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Hay dos fuentes de ingresos principales. Google AdSense muestra anuncios en tu blog y te paga por cada mil impresiones (CPM). Los nichos con mayor RPM en España son finanzas, tecnología, salud y hogar. Con 10.000 visitas mensuales, un blog bien monetizado puede generar entre 30 y 150€/mes con AdSense.
          </p>
          <p className="text-gray-700 leading-relaxed">
            El marketing de afiliados es más rentable a volumen menor: cuando un lector hace clic en un enlace de afiliado y compra el producto recomendado, tú cobras una comisión. Amazon Associates paga entre el 1% y el 10% según la categoría. Un blog de fitness con 5.000 visitas mensuales que recomienda equipamiento puede generar más con afiliación que con AdSense. La combinación de las dos fuentes — AdSense para el volumen de tráfico general y afiliados para los artículos de mayor intención de compra — es la estrategia que maximiza los ingresos.
          </p>
        </section>

        {/* Casos reales */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-primary-600 mb-6">Nuestros blogs de nicho — casos reales</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Trabajamos blogs de nicho en sectores con alta demanda orgánica en España. Nuestro portfolio incluye guiadelpiscina.com (mantenimiento y compra de equipos de piscina), fitnessfacil.es (rutinas y equipamiento de fitness), cuidatumascota.es (salud y productos para mascotas), emprendedigital.es (herramientas y recursos para emprendedores online) y juguetester.es (análisis y comparativas de juguetes).
          </p>
          <p className="text-gray-700 leading-relaxed">
            Cada uno combina contenido informacional optimizado para SEO con artículos de comparativa y recomendación de productos con enlaces de afiliado. El proceso es el mismo para cualquier nicho: investigación de keywords, arquitectura de contenido, artículos de alta intención de compra y optimización de la monetización según los datos de rendimiento.
          </p>
        </section>

        {/* Setup 990 */}
        <section className="mb-16 bg-primary-50 rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-primary-600 mb-6">Qué incluye el setup de 990€</h2>
          <p className="text-gray-700 leading-relaxed">
            El setup de 990€ incluye todo lo necesario para tener un blog de monetización operativo y con los primeros artículos publicados: elección del nicho y validación del potencial de ingresos, registro del dominio y contratación del hosting del primer año, instalación y configuración de WordPress con tema optimizado para velocidad y SEO, configuración de Google AdSense y Amazon Associates, investigación de keywords y arquitectura de contenido para los primeros 6 meses, redacción y publicación de 15 artículos SEO iniciales (entre 800 y 1.200 palabras cada uno), y una sesión de formación de 2 horas para gestión autónoma del blog.
          </p>
        </section>

        {/* Mantenimiento */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-primary-600 mb-6">Plan de mantenimiento mensual</h2>
          <p className="text-gray-700 leading-relaxed">
            Si prefieres que gestionemos el crecimiento del blog, el plan de mantenimiento mensual de 290€/mes incluye: 10 artículos SEO nuevos cada mes (800-1.200 palabras, optimizados para keywords de alto potencial), actualización y optimización de artículos de afiliados existentes (precios actualizados, nuevos productos, mejora de CTR), revisión del rendimiento de AdSense y ajuste de posición de anuncios, e informe mensual de tráfico, ingresos y próximas acciones. El mantenimiento es opcional — el blog queda en tus manos tras el setup — pero acelera significativamente el crecimiento.
          </p>
        </section>

        {/* FAQs */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-primary-600 mb-8">Preguntas frecuentes sobre blogs de monetización</h2>
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
          <h2 className="text-2xl font-bold mb-4">¿Quieres crear tu blog de monetización?</h2>
          <p className="text-primary-200 mb-6">¿Tienes ya un nicho en mente o quieres que te ayudemos a identificar la mejor oportunidad? Cuéntanos y en 24 horas te decimos si tiene potencial y por dónde empezar.</p>
          <div className="bg-white rounded-xl p-6">
            <ContactForm formType="blog-monetizacion" />
          </div>
        </section>
      </div>
      <RelatedArticles category="Marketing Digital" />
    </>
  );
}
