import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { RelatedArticles } from "@/components/RelatedArticles";
import { ContactForm } from "@/components/ContactForm";
import { BlogBanner } from "@/components/BlogBanner";

export const metadata: Metadata = {
  title: "SEO en Valencia — Posicionamiento Local",
  description: "Guía de SEO local para negocios en Valencia. Posicionamiento, Google Business Profile, keywords en valenciano y castellano, y estrategia para cada sector.",
  alternates: { canonical: "https://www.mktweb360.com/seo-valencia/" },
  openGraph: {
    title: "SEO en Valencia: Posiciona tu Negocio Local | Mkt Web 360",
    description: "Guía de SEO local para negocios en Valencia. Posicionamiento, Google Business Profile, keywords en valenciano y castellano, y estrategia para cada sector.",
    url: "https://www.mktweb360.com/seo-valencia/",
    images: [{ url: "/og-seo-valencia.jpg", width: 1200, height: 630 }],
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "SEO en Valencia — Posicionamiento Local | Mkt Web 360",
  provider: { "@type": "Organization", name: "Mkt Web 360 SLU", url: "https://www.mktweb360.com" },
  description: "Guía de SEO local para negocios en Valencia. Posicionamiento, Google Business Profile, keywords en valenciano y castellano, y estrategia para cada sector.",
  areaServed: "España",
  url: "https://www.mktweb360.com/seo-valencia/",
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <div className="max-w-3xl mx-auto px-4 py-12">
        <Breadcrumbs crumbs={[{ label: "Inicio", href: "/" }, { label: "Blog", href: "/blog/" }, { label: "SEO Valencia" }]} />
        <p className="text-sm text-accent-500 font-semibold mb-2">SEO Local</p>
        <h1 className="text-4xl font-bold text-primary-600 mb-4 leading-tight">SEO en Valencia: cómo posicionar tu negocio local en el tercer mercado digital de España</h1>
        <p className="text-xl text-gray-500 mb-8 leading-relaxed">Valencia es la tercera ciudad más grande de España y un mercado digital en crecimiento acelerado. La competencia SEO es alta en algunos sectores pero muy inferior a Madrid o Barcelona en la mayoría, lo que crea oportunidades reales para PYMEs que inviertan con consistencia.</p>

        <h2 className="text-2xl font-bold text-primary-600 mt-10 mb-4">El mercado SEO en Valencia: oportunidades para PYMEs locales</h2>
        <p className="text-gray-700 leading-relaxed mb-4">Valencia tiene una particularidad interesante desde el punto de vista SEO: es un mercado grande (casi 800.000 habitantes en la ciudad, más de 1,5 millones en el área metropolitana) pero menos saturado digitalmente que Madrid o Barcelona en muchos sectores. Esto significa que negocios que en Madrid necesitarían 12-18 meses de SEO para ver resultados, en Valencia pueden verlos en 6-10 meses.</p>
        <p className="text-gray-700 leading-relaxed mb-4">Los sectores con mayor competencia SEO en Valencia son los universales: servicios jurídicos, reformas del hogar, servicios médicos y estéticos, hostelería y alojamiento turístico. En estos sectores, la estrategia debe ser la misma que en cualquier mercado competitivo: especialización, contenido de calidad y trabajo consistente de Google Business Profile.</p>
        <p className="text-gray-700 leading-relaxed mb-4">Los sectores con oportunidades más claras son negocios de nicho con poca competencia online: artesanía local, servicios especializados para la industria valenciana (cerámica, textil, agricultura), servicios para la comunidad extranjera residente (Valencia tiene una importante comunidad de expatriados) y negocios del sector tecnológico en crecimiento en la ciudad.</p>

        <h2 className="text-2xl font-bold text-primary-600 mt-10 mb-4">Keywords en valenciano y castellano: la oportunidad bilingüe</h2>
        <p className="text-gray-700 leading-relaxed mb-4">Al igual que en Barcelona, Valencia tiene dos idiomas oficiales: el valenciano (cooficial con el castellano) y el castellano. Las búsquedas en Google se realizan en ambos idiomas, aunque predomina el castellano. Sin embargo, hay sectores donde el valenciano tiene presencia relevante en las búsquedas.</p>
        <p className="text-gray-700 leading-relaxed mb-4">Para negocios orientados a clientes locales con fuerte arraigo valenciano, tener contenido en valenciano puede generar un volumen adicional de tráfico orgánico que la competencia ignora. Además, la afinidad cultural con el idioma local puede ser un factor diferencial en la percepción de la marca.</p>
        <p className="text-gray-700 leading-relaxed mb-4">Desde el punto de vista práctico, lo recomendable para la mayoría de PYMEs valencianas es priorizar el SEO en castellano (mayor volumen de búsquedas) e incorporar contenido en valenciano de forma selectiva para los términos más relevantes del sector. Una estrategia de contenido bilingüe completa tiene sentido para empresas con audiencia mayoritariamente local y presupuesto suficiente para mantenerla.</p>

        <h2 className="text-2xl font-bold text-primary-600 mt-10 mb-4">Google Business Profile en Valencia: cómo optimizarlo para el Local Pack</h2>
        <p className="text-gray-700 leading-relaxed mb-4">El Local Pack de Google (el bloque de mapa con los 3 resultados locales) es el principal canal de captación para negocios físicos en Valencia. La gran mayoría de búsquedas con intención local — "fontanero Valencia", "dentista barrio Ruzafa", "pilates cerca de mí" — activan este bloque antes que los resultados orgánicos tradicionales.</p>
        <p className="text-gray-700 leading-relaxed mb-4">Para maximizar la presencia en el Local Pack valenciano, el perfil de Google Business Profile necesita: categoría principal precisa y actualizada, descripción con las keywords principales del negocio y la zona geográfica, fotos profesionales del local y el equipo (mínimo 10-15 fotos actualizadas), publicaciones periódicas con novedades y ofertas, y un sistema activo de captación de reseñas.</p>
        <p className="text-gray-700 leading-relaxed mb-4">Las reseñas son especialmente determinantes en Valencia por la cultura local muy orientada a las recomendaciones personales. Un negocio valenciano con 80-100 reseñas de media 4,5 estrellas tiene una ventaja competitiva clara sobre competidores con 20-30 reseñas, aunque estos últimos tengan mejor SEO técnico en su web.</p>

        <BlogBanner variant="seo" />

        <h2 className="text-2xl font-bold text-primary-600 mt-10 mb-4">SEO local por barrios de Valencia: la estrategia de granularidad</h2>
        <p className="text-gray-700 leading-relaxed mb-4">Valencia tiene una estructura de barrios muy definida: Ruzafa, El Carmen, Benimaclet, Patraix, Campanar, La Malvarrosa, Jesús, Paterna, Mislata, etc. Los usuarios valencianos frecuentemente incluyen el barrio en sus búsquedas, especialmente para servicios de proximidad.</p>
        <p className="text-gray-700 leading-relaxed mb-4">Una estrategia SEO de granularidad para negocios valencianos consiste en crear páginas específicas para cada zona geográfica atendida: "fontanero Ruzafa", "fontanero Benimaclet", "fontanero Patraix". Cada página tiene contenido específico sobre la zona (distancias, referencias locales, características del barrio relevantes para el servicio) y no es simplemente una copia con el nombre del barrio cambiado.</p>
        <p className="text-gray-700 leading-relaxed mb-4">Este tipo de páginas geográficas específicas posicionan bien para términos de long tail con alta intención local y baja competencia. Son especialmente efectivas para negocios de servicios que se desplazan a domicilio (fontanería, electricidad, reformas, limpieza) porque el cliente busca explícitamente que el profesional esté cerca.</p>

        <h2 className="text-2xl font-bold text-primary-600 mt-10 mb-4">El turismo en Valencia: oportunidades SEO específicas</h2>
        <p className="text-gray-700 leading-relaxed mb-4">Valencia recibe un turismo creciente, potenciado por eventos como la Fórmula 1, la Copa América 2024 y el posicionamiento de la ciudad como destino de calidad de vida para nómadas digitales europeos. Para negocios en sectores turísticos, el SEO en inglés y en otros idiomas europeos abre oportunidades que van más allá del mercado local.</p>
        <p className="text-gray-700 leading-relaxed mb-4">Restaurantes y hoteles cerca de la Ciudad de las Artes y las Ciencias, la Malvarrosa o el centro histórico pueden posicionarse para términos en inglés que generan tráfico de alta calidad. Un restaurante que posiciona para "best restaurants Valencia" o "paella restaurants Valencia" puede atraer turistas que buscan experiencias auténticas y tienen mayor disposición a pagar.</p>
        <p className="text-gray-700 leading-relaxed mb-4">Las plataformas de turismo (TripAdvisor, Google Maps, Booking) son complementarias al SEO web en este sector. Una estrategia omnicanal que combine optimización web, presencia en plataformas turísticas y publicidad de pago en temporada alta maximiza la captación de este segmento.</p>

        <h2 className="text-2xl font-bold text-primary-600 mt-10 mb-4">Plazos y resultados realistas para el SEO en Valencia</h2>
        <p className="text-gray-700 leading-relaxed mb-4">En Valencia, los negocios que empiezan a trabajar el SEO con una estrategia coherente suelen ver primeros resultados (entrar en el top 20 para términos de long tail y mejorar la visibilidad en Google Maps) entre los 3 y los 6 meses. Para posicionarse de forma sólida en los primeros 5 resultados de términos competitivos, el plazo habitual es de 8 a 14 meses.</p>
        <p className="text-gray-700 leading-relaxed mb-4">El ritmo de resultados depende de tres factores principales: el punto de partida (una web con historial de dominio, aunque sin SEO activo, progresa más rápido que una web nueva), la consistencia del trabajo (publicar contenido de calidad cada mes vs. publicar en ráfagas irregulares marca una diferencia enorme) y la competitividad del sector específico.</p>
        <p className="text-gray-700 leading-relaxed mb-4">Una recomendación específica para negocios valencianos que empiezan: mientras el SEO madura, complementa con Google Business Profile optimizado y con una pequeña inversión en Google Ads para términos de alta conversión. Esta combinación genera clientes desde el primer mes mientras el SEO orgánico construye su base de forma sostenida.</p>

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
