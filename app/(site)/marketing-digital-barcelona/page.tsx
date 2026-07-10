import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { RelatedArticles } from "@/components/RelatedArticles";
import { ContactForm } from "@/components/ContactForm";
import { BlogBanner } from "@/components/BlogBanner";

export const metadata: Metadata = {
  title: "Marketing Digital para Empresas en Barcelona: Guía Práctica",
  description: "Qué canales de marketing digital funcionan mejor para negocios en Barcelona. SEO, Google Ads, redes sociales y estrategia omnicanal adaptada al mercado catalán.",
  alternates: { canonical: "https://www.mktweb360.com/marketing-digital-barcelona/" },
  openGraph: {
    title: "Marketing Digital para Empresas en Barcelona | Mkt Web 360",
    description: "Qué canales de marketing digital funcionan mejor para negocios en Barcelona. SEO, Google Ads, redes sociales y estrategia omnicanal adaptada al mercado catalán.",
    url: "https://www.mktweb360.com/marketing-digital-barcelona/",
    images: [{ url: "/og-marketing-digital-barcelona.jpg", width: 1200, height: 630 }],
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Marketing Digital para Empresas en Barcelona: Guía Práctica | Mkt Web 360",
  provider: { "@type": "Organization", name: "Mkt Web 360 SLU", url: "https://www.mktweb360.com" },
  description: "Qué canales de marketing digital funcionan mejor para negocios en Barcelona. SEO, Google Ads, redes sociales y estrategia omnicanal adaptada al mercado catalán.",
  areaServed: "España",
  url: "https://www.mktweb360.com/marketing-digital-barcelona/",
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Inicio", item: "https://www.mktweb360.com/" },
    { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.mktweb360.com/blog/" },
    { "@type": "ListItem", position: 3, name: "Marketing Digital en Barcelona", item: "https://www.mktweb360.com/marketing-digital-barcelona/" }
  ]
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "¿Qué incluye un servicio de marketing digital para empresas en Barcelona?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Un servicio completo de marketing digital en Barcelona incluye SEO local, gestión de Google Business Profile, campañas de Google Ads, gestión de redes sociales, diseño web y analítica. Barcelona tiene un mercado digital muy competitivo, por lo que la especialización sectorial y la estrategia bien definida son especialmente importantes."
      }
    },
    {
      "@type": "Question",
      name: "¿Cuánto cuesta el marketing digital para una pyme en Barcelona?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Depende de los servicios contratados y la competencia del sector. Un servicio básico de SEO local + Google Business Profile parte desde 300€/mes. Una estrategia más completa con SEO, redes sociales y campañas de pago puede estar entre 600 y 2.000€/mes en Barcelona, donde la competencia digital es mayor que en otras ciudades."
      }
    },
    {
      "@type": "Question",
      name: "¿Cuánto tarda en dar resultados el marketing digital en Barcelona?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Depende del canal y la competencia del sector. Google Ads genera tráfico desde el primer día. El SEO local muestra primeros resultados en 4-8 semanas pero puede requerir 6-12 meses para consolidarse en sectores competitivos de Barcelona. La constancia y la calidad del trabajo determinan los resultados."
      }
    },
    {
      "@type": "Question",
      name: "¿Necesita una empresa de Barcelona una agencia de marketing digital o puede gestionarlo internamente?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Depende de los recursos internos y los objetivos. En un mercado tan competitivo como Barcelona, el SEO técnico y las campañas de pago requieren conocimiento especializado actualizado. Para la mayoría de pymes, externalizar el marketing digital con una agencia especializada es más eficiente que contratar un perfil interno a tiempo completo."
      }
    }
  ]
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <div className="max-w-3xl mx-auto px-4 py-12">
        <Breadcrumbs crumbs={[{ label: "Inicio", href: "/" }, { label: "Blog", href: "/blog/" }, { label: "Marketing digital Barcelona" }]} />
        <p className="text-sm text-accent-500 font-semibold mb-2">SEO Local</p>
        <h1 className="text-4xl font-bold text-primary-600 mb-4 leading-tight">Marketing digital para empresas en Barcelona: qué funciona y qué no en el mercado catalán</h1>
        <p className="text-xl text-gray-500 mb-8 leading-relaxed">Barcelona es el segundo mercado digital más grande de España, con particularidades propias: bilingüismo, alta concentración de startups, turismo y un ecosistema empresarial muy digitalizado. Esta guía analiza qué estrategias funcionan mejor en este contexto.</p>

        <h2 className="text-2xl font-bold text-primary-600 mt-10 mb-4">El mercado digital de Barcelona: características propias</h2>
        <p className="text-gray-700 leading-relaxed mb-4">Barcelona tiene un ecosistema digital maduro. La ciudad alberga el Mobile World Congress, concentra muchas startups tecnológicas europeas y su tejido empresarial tiene, en promedio, un nivel de digitalización superior al de otras ciudades españolas. Esto tiene implicaciones directas en el marketing digital: la competencia online es mayor y los consumidores barceloneses son más exigentes en su experiencia digital.</p>
        <p className="text-gray-700 leading-relaxed mb-4">El bilingüismo catalán-castellano es una consideración específica de Barcelona. Las búsquedas en Google se hacen en ambos idiomas: "restaurant Barcelona" y "restaurante Barcelona" coexisten. Para negocios con audiencia local, tener contenido en catalán puede abrir una capa adicional de tráfico orgánico y generar mayor afinidad con el público local. Para negocios con audiencia más amplia (turismo, ecommerce nacional), el castellano sigue siendo el idioma principal.</p>
        <p className="text-gray-700 leading-relaxed mb-4">El turismo es otro factor diferencial. Sectores como hostelería, turismo, ocio y comercio minorista en zonas turísticas tienen un componente internacional significativo. El SEO en inglés y otras lenguas europeas puede generar oportunidades adicionales que en otras ciudades españolas no existen con la misma intensidad.</p>

        <h2 className="text-2xl font-bold text-primary-600 mt-10 mb-4">SEO local en Barcelona: cómo competir en un mercado saturado</h2>
        <p className="text-gray-700 leading-relaxed mb-4">Al igual que Madrid, Barcelona es un mercado SEO muy competitivo. Los términos genéricos como "abogado Barcelona" o "peluquería Barcelona" tienen decenas o cientos de competidores bien posicionados. La estrategia más eficiente para PYMEs barcelonesas es la misma que funciona en Madrid: posicionar por barrio y especialización antes que por la ciudad genérica.</p>
        <p className="text-gray-700 leading-relaxed mb-4">Los barrios de Barcelona tienen identidad propia y los usuarios los utilizan en sus búsquedas: "restaurante Gràcia", "fisio Eixample", "cerrajero Sants", "clínica estética Sarrià". Para negocios con ubicación física, aparecer en las búsquedas de su barrio antes que en las de toda la ciudad es una estrategia más eficiente y alcanzable.</p>
        <p className="text-gray-700 leading-relaxed mb-4">Google Business Profile es especialmente importante en Barcelona por el alto volumen de búsquedas locales. El Local Pack (el mapa con los 3 primeros resultados locales) captura una parte desproporcionada de los clics en búsquedas con intención local. Completar el perfil al 100% y trabajar activamente la captación de reseñas es probablemente la acción con mejor retorno de inversión para negocios físicos barceloneses.</p>

        <h2 className="text-2xl font-bold text-primary-600 mt-10 mb-4">Google Ads en Barcelona: sectores con mejor retorno</h2>
        <p className="text-gray-700 leading-relaxed mb-4">Google Ads en Barcelona tiene costes por clic superiores a la media española por la mayor competencia, pero también tiene volúmenes de búsqueda mayores. Para sectores con urgencia (servicios 24h, reparaciones de hogar, médicos de guardia) o con ciclos de decisión cortos (reservas de hotel, restaurantes, ocio), Google Ads puede generar retornos muy buenos incluso con CPCs elevados.</p>
        <p className="text-gray-700 leading-relaxed mb-4">Los sectores con mayor competencia en Google Ads Barcelona son: abogados, dentistas, reformas del hogar, mudanzas y clínicas de estética. En estos sectores, los CPCs pueden superar los 5-15€ por clic, haciendo la publicidad rentable solo si el ticket medio del servicio es suficientemente alto o si el proceso de conversión está muy bien optimizado.</p>
        <p className="text-gray-700 leading-relaxed mb-4">Para ecommerce con mercado nacional pero con sede en Barcelona, Google Ads puede complementar el SEO orgánico con visibilidad inmediata mientras el posicionamiento orgánico madura. En este caso, la segmentación geográfica debe ser nacional, no limitada a Barcelona.</p>

        <BlogBanner variant="default" />

        <h2 className="text-2xl font-bold text-primary-600 mt-10 mb-4">Redes sociales para negocios barceloneses: qué plataformas priorizar</h2>
        <p className="text-gray-700 leading-relaxed mb-4">Barcelona tiene una cultura visual muy desarrollada, especialmente en sectores de moda, gastronomía, diseño y turismo. Instagram sigue siendo la red con mayor impacto para estos sectores en la ciudad, tanto para crecimiento orgánico como para publicidad de pago. La densidad de creadores de contenido e influencers en Barcelona facilita colaboraciones de marketing de influencia a costes razonables.</p>
        <p className="text-gray-700 leading-relaxed mb-4">TikTok ha ganado relevancia especialmente para negocios orientados a un público joven o para servicios con alto componente visual y entretenimiento. Bares, restaurantes y tiendas en zonas de alto tráfico peatonal pueden generar contenido orgánico con buen alcance en TikTok si ejecutan bien.</p>
        <p className="text-gray-700 leading-relaxed mb-4">LinkedIn es más relevante en Barcelona que en ciudades con menor concentración de empresas de tecnología y servicios profesionales. Para agencias, consultoras, empresas SaaS y proveedores de servicios B2B, LinkedIn Ads tiene CPCs más elevados que Google Ads pero con una segmentación por cargo, empresa y sector que puede generar leads de mayor calidad para ciertos sectores.</p>

        <h2 className="text-2xl font-bold text-primary-600 mt-10 mb-4">El turismo digital: oportunidades para negocios locales</h2>
        <p className="text-gray-700 leading-relaxed mb-4">Barcelona recibe más de 10 millones de turistas al año, muchos de ellos con alta capacidad de gasto. Para negocios en sectores relacionados con el turismo (gastronomía, alojamiento, ocio, comercio de artesanía o productos locales), la presencia en plataformas de turismo digital puede ser tan importante como el SEO en Google.</p>
        <p className="text-gray-700 leading-relaxed mb-4">Google Maps, TripAdvisor, Booking.com, GetYourGuide y Airbnb Experiences son los canales donde los turistas buscan recomendaciones. Una estrategia de marketing digital para negocios turísticos barceloneses no puede ignorar estas plataformas. La optimización del perfil, la gestión de reseñas y la respuesta a valoraciones negativas son acciones directamente relacionadas con la captación de clientes turistas.</p>
        <p className="text-gray-700 leading-relaxed mb-4">Para negocios que quieran captar turistas antes de su llegada a Barcelona, el SEO en inglés y otros idiomas europeos es una oportunidad diferencial. Un restaurante que posiciona bien para "best restaurants Barcelona" o "restaurants in Gràcia" en Google.co.uk o Google.de puede atraer clientes internacionales que de otra forma irían a los recomendados en TripAdvisor.</p>

        <h2 className="text-2xl font-bold text-primary-600 mt-10 mb-4">Cuánto presupuesto de marketing necesita una empresa barcelonesa</h2>
        <p className="text-gray-700 leading-relaxed mb-4">El presupuesto mínimo para tener una presencia digital relevante en Barcelona es superior al de ciudades más pequeñas, simplemente por la mayor competencia. Para SEO, un trabajo profesional básico parte de 500-800€ mensuales; para Google Ads con impacto real, la inversión en el canal debe ser de al menos 600-1.000€/mes en sectores competitivos.</p>
        <p className="text-gray-700 leading-relaxed mb-4">Un enfoque pragmático para PYMEs barcelonesas con presupuesto limitado es invertir primero en lo más rentable según el tipo de negocio: Google Business Profile y reseñas (bajo coste, alto impacto para negocios físicos), SEO de long tail en el barrio específico (coste medio, retorno sostenible), y Google Ads para términos de alta intención cuando el presupuesto lo permita.</p>
        <p className="text-gray-700 leading-relaxed mb-4">Lo que no tiene sentido en Barcelona es intentar competir en todos los canales con presupuesto insuficiente para ninguno. Mejor ser excelente en dos o tres canales que mediocre en seis. La concentración de recursos en los canales con mayor potencial para tu tipo de negocio específico siempre supera a la dispersión.</p>

        <section className="py-12 px-4 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-primary-600 mb-8">Preguntas frecuentes sobre marketing digital en Barcelona</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-primary-700 mb-2">¿Qué incluye un servicio de marketing digital para empresas en Barcelona?</h3>
                <p className="text-gray-600">Un servicio completo de marketing digital en Barcelona incluye SEO local, gestión de Google Business Profile, campañas de Google Ads, gestión de redes sociales, diseño web y analítica. Barcelona tiene un mercado digital muy competitivo, por lo que la especialización sectorial y la estrategia bien definida son especialmente importantes.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-primary-700 mb-2">¿Cuánto cuesta el marketing digital para una pyme en Barcelona?</h3>
                <p className="text-gray-600">Depende de los servicios contratados y la competencia del sector. Un servicio básico de SEO local + Google Business Profile parte desde 300€/mes. Una estrategia más completa con SEO, redes sociales y campañas de pago puede estar entre 600 y 2.000€/mes en Barcelona, donde la competencia digital es mayor que en otras ciudades.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-primary-700 mb-2">¿Cuánto tarda en dar resultados el marketing digital en Barcelona?</h3>
                <p className="text-gray-600">Depende del canal y la competencia del sector. Google Ads genera tráfico desde el primer día. El SEO local muestra primeros resultados en 4-8 semanas pero puede requerir 6-12 meses para consolidarse en sectores competitivos de Barcelona. La constancia y la calidad del trabajo determinan los resultados.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-primary-700 mb-2">¿Necesita una empresa de Barcelona una agencia de marketing digital o puede gestionarlo internamente?</h3>
                <p className="text-gray-600">Depende de los recursos internos y los objetivos. En un mercado tan competitivo como Barcelona, el SEO técnico y las campañas de pago requieren conocimiento especializado actualizado. Para la mayoría de pymes, externalizar el marketing digital con una agencia especializada es más eficiente que contratar un perfil interno a tiempo completo.</p>
              </div>
            </div>
          </div>
        </section>

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
