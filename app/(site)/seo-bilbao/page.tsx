import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { RelatedArticles } from "@/components/RelatedArticles";
import { ContactForm } from "@/components/ContactForm";
import { BlogBanner } from "@/components/BlogBanner";

export const metadata: Metadata = {
  title: "SEO en Bilbao: Cómo Posicionar tu Negocio en el País Vasco",
  description: "Guía de SEO local para negocios en Bilbao y el País Vasco. Estrategia de posicionamiento, Google Business Profile, keywords en euskera y castellano.",
  alternates: { canonical: "https://www.mktweb360.com/seo-bilbao/" },
  openGraph: {
    title: "SEO en Bilbao: Posiciona tu Negocio en el País Vasco | Mkt Web 360",
    description: "Guía de SEO local para negocios en Bilbao y el País Vasco. Estrategia de posicionamiento, Google Business Profile y keywords para el mercado vasco.",
    url: "https://www.mktweb360.com/seo-bilbao/",
    images: [{ url: "/og-seo-bilbao.jpg", width: 1200, height: 630 }],
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "SEO en Bilbao: Cómo Posicionar tu Negocio en el País Vasco | Mkt Web 360",
  provider: { "@type": "Organization", name: "Mkt Web 360 SLU", url: "https://www.mktweb360.com" },
  description: "Guía de SEO local para negocios en Bilbao y el País Vasco. Estrategia de posicionamiento, Google Business Profile, keywords en euskera y castellano.",
  areaServed: "España",
  url: "https://www.mktweb360.com/seo-bilbao/",
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <div className="max-w-3xl mx-auto px-4 py-12">
        <Breadcrumbs crumbs={[{ label: "Inicio", href: "/" }, { label: "Blog", href: "/blog/" }, { label: "SEO Bilbao" }]} />
        <p className="text-sm text-accent-500 font-semibold mb-2">SEO Local</p>
        <h1 className="text-4xl font-bold text-primary-600 mb-4 leading-tight">SEO en Bilbao: cómo posicionar tu negocio en el mercado digital del País Vasco</h1>
        <p className="text-xl text-gray-500 mb-8 leading-relaxed">Bilbao y el área metropolitana del Gran Bilbao forman uno de los mercados económicos más ricos de España, con un nivel de vida elevado y un tejido empresarial altamente digitalizado. Posicionarse bien aquí puede ser muy rentable para quien invierta con consistencia.</p>

        <h2 className="text-2xl font-bold text-primary-600 mt-10 mb-4">El mercado digital de Bilbao: características que lo diferencian</h2>
        <p className="text-gray-700 leading-relaxed mb-4">Bilbao y el Gran Bilbao (que incluye municipios como Barakaldo, Getxo, Santurtzi, Basauri o Leioa) tienen una renta per cápita significativamente superior a la media española. Esto tiene implicaciones directas en el marketing digital: el consumidor vasco tiene mayor disposición a pagar por servicios y productos de calidad, y la competencia online en mercados premium es más intensa.</p>
        <p className="text-gray-700 leading-relaxed mb-4">El tejido industrial y empresarial del País Vasco — con sectores potentes en automoción, energía, tecnología e industria — genera también una demanda de servicios profesionales B2B que tiene su reflejo digital. Consultoras, despachos jurídicos, empresas de ingeniería y proveedores de servicios industriales compiten online en un mercado con clientes exigentes y ciclos de venta largos.</p>
        <p className="text-gray-700 leading-relaxed mb-4">Desde el punto de vista del volumen de búsquedas, Bilbao tiene un mercado más pequeño que Madrid, Barcelona o Valencia, pero con una renta disponible mayor. Esto cambia el cálculo del retorno del SEO: aunque el volumen de búsquedas sea menor, el valor de cada cliente captado es mayor, haciendo que el SEO se amortice con menos conversiones.</p>

        <h2 className="text-2xl font-bold text-primary-600 mt-10 mb-4">SEO en euskera: oportunidades y consideraciones</h2>
        <p className="text-gray-700 leading-relaxed mb-4">El euskera es lengua cooficial en el País Vasco y tiene una presencia digital creciente. Aunque las búsquedas en Google en euskera representan un porcentaje menor que en castellano, para negocios con audiencia local vasca, tener contenido en euskera puede generar un tráfico adicional que la competencia normalmente no trabaja.</p>
        <p className="text-gray-700 leading-relaxed mb-4">Sectores donde el contenido en euskera tiene mayor relevancia: educación, administración pública, hostelería y gastronomía con enfoque local, y servicios orientados a la comunidad vasca. Para negocios con audiencia empresarial o nacional, la prioridad debe ser el castellano; el euskera puede añadirse como capa adicional si hay recursos para mantenerla.</p>
        <p className="text-gray-700 leading-relaxed mb-4">Desde el punto de vista técnico SEO, si decides tener contenido en ambos idiomas, implementa correctamente las etiquetas hreflang para indicar a Google qué versión mostrar según el idioma del buscador. Sin estas etiquetas, Google puede penalizar por contenido duplicado aunque los textos estén en idiomas diferentes.</p>

        <h2 className="text-2xl font-bold text-primary-600 mt-10 mb-4">Google Business Profile en Bilbao: claves para el Local Pack</h2>
        <p className="text-gray-700 leading-relaxed mb-4">En Bilbao, como en cualquier ciudad, el Local Pack de Google (los 3 resultados en el mapa) es el activo más valioso para negocios físicos con clientela local. Sin embargo, hay una particularidad: la distribución geográfica del Gran Bilbao hace que muchos usuarios busquen servicios específicamente en su municipio, no solo "en Bilbao".</p>
        <p className="text-gray-700 leading-relaxed mb-4">Un fontanero con sede en Getxo puede posicionarse bien tanto para "fontanero Getxo" como para "fontanero Bilbao" si su perfil de GBP incluye la zona de servicio correctamente configurada y tiene suficiente actividad de reseñas. La zona de servicio en Google Business Profile debe incluir todos los municipios del área metropolitana que atiendes.</p>
        <p className="text-gray-700 leading-relaxed mb-4">Las reseñas son especialmente importantes en Bilbao porque la comunidad local es relativamente pequeña y las recomendaciones circulan con facilidad. Un negocio bilbaíno con buena reputación online tiene un efecto boca a boca amplificado que se traduce en mayor volumen de búsquedas de marca (búsquedas directas por el nombre del negocio).</p>

        <BlogBanner variant="seo" />

        <h2 className="text-2xl font-bold text-primary-600 mt-10 mb-4">Sectores con mayor competencia SEO en Bilbao</h2>
        <p className="text-gray-700 leading-relaxed mb-4">Los sectores con mayor saturación digital en Bilbao son similares a otras ciudades grandes: servicios jurídicos (especialmente laboral y mercantil por el perfil industrial de la zona), clínicas dentales y de salud, reformas del hogar, hostelería y alojamiento, y servicios financieros. En estos sectores, el SEO requiere una inversión mayor y plazos más largos para ver resultados sólidos.</p>
        <p className="text-gray-700 leading-relaxed mb-4">Los sectores con mayor oportunidad son aquellos relacionados con el tejido industrial vasco: proveedores de servicios industriales, empresas de ingeniería, tecnología aplicada, formación especializada y consultoría de gestión. Muchos de estos negocios tienen un nivel de digitalización bajo y su competencia online es escasa, haciendo que el SEO tenga un retorno muy alto.</p>
        <p className="text-gray-700 leading-relaxed mb-4">El turismo gastronómico es otro sector con oportunidades interesantes. Bilbao es un destino gastronómico reconocido internacionalmente (con la mayor concentración de estrellas Michelin per cápita del mundo), y muchos turistas buscan restaurantes y experiencias culinarias antes de visitarla. El SEO en inglés para búsquedas relacionadas con "pintxos Bilbao", "best restaurants Bilbao" o "food tour Bilbao" puede generar clientes internacionales de alto valor.</p>

        <h2 className="text-2xl font-bold text-primary-600 mt-10 mb-4">Estrategia SEO recomendada para PYMEs bilbaínas</h2>
        <p className="text-gray-700 leading-relaxed mb-4">Para una PYME en Bilbao con presupuesto limitado, la estrategia más eficiente combina tres acciones: optimización completa del perfil de Google Business Profile (alta prioridad, bajo coste, impacto inmediato), trabajo de SEO técnico y contenido en la web (coste medio, impacto a 6-12 meses), y captación activa de reseñas (bajo coste, impacto continuo).</p>
        <p className="text-gray-700 leading-relaxed mb-4">Para negocios B2B en el sector industrial o de servicios profesionales, LinkedIn tiene más relevancia que en ciudades con menor concentración empresarial. El contenido de thought leadership en LinkedIn — artículos cortos sobre tendencias del sector, casos de uso, análisis de problemas comunes — puede generar visibilidad entre tomadores de decisión de empresas vascas.</p>
        <p className="text-gray-700 leading-relaxed mb-4">El plazo esperado de resultados SEO en Bilbao para sectores de competencia media es de 6-10 meses hasta posiciones relevantes (top 10) para keywords principales. Para sectores de alta competencia como servicios jurídicos o salud, los plazos son de 12-18 meses. La consistencia es la variable más crítica: los negocios que abandonan el SEO a los 6 meses no ven el resultado que habrían obtenido a los 12.</p>

        <section className="bg-primary-600 text-white rounded-2xl p-8 mt-12">
          <h2 className="text-2xl font-bold mb-4">¿Necesitas ayuda con tu marketing digital?</h2>
          <p className="text-primary-200 mb-6">Cuéntanos tu proyecto y te respondemos en menos de 24 horas.</p>
          <div className="bg-white rounded-xl p-6"><ContactForm formType="blog" /></div>
        </section>
      </div>
      <RelatedArticles category="SEO Local" />
    </>
  );
}
