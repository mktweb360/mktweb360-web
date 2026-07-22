import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { RelatedArticles } from "@/components/RelatedArticles";
import { ContactForm } from "@/components/ContactForm";
import { BlogBanner } from "@/components/BlogBanner";

export const metadata: Metadata = {
  title: "SEO en Zaragoza — Posicionamiento Local",
  description: "Guía de SEO local para negocios en Zaragoza. Posicionamiento en Google, Google Business Profile, estrategia de contenido y sectores con mayor oportunidad digital.",
  alternates: { canonical: "https://www.mktweb360.com/seo-zaragoza/" },
  openGraph: {
    title: "SEO en Zaragoza: Posiciona tu Negocio Local | Mkt Web 360",
    description: "Guía de SEO local para negocios en Zaragoza. Posicionamiento en Google, Google Business Profile, estrategia de contenido y sectores con mayor oportunidad.",
    url: "https://www.mktweb360.com/seo-zaragoza/",
    images: [{ url: "/og-seo-zaragoza.jpg", width: 1200, height: 630 }],
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "SEO en Zaragoza — Posicionamiento Local | Mkt Web 360",
  provider: { "@type": "Organization", name: "Mkt Web 360 SLU", url: "https://www.mktweb360.com" },
  description: "Guía de SEO local para negocios en Zaragoza. Posicionamiento en Google, Google Business Profile, estrategia de contenido y sectores con mayor oportunidad digital.",
  areaServed: "España",
  url: "https://www.mktweb360.com/seo-zaragoza/",
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Inicio", item: "https://www.mktweb360.com/" },
    { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.mktweb360.com/blog/" },
    { "@type": "ListItem", position: 3, name: "SEO en Zaragoza", item: "https://www.mktweb360.com/seo-zaragoza/" }
  ]
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "¿Cuánto tarda en dar resultados el SEO local en Zaragoza?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Los primeros resultados visibles en Google Maps suelen aparecer entre 4 y 8 semanas tras optimizar la ficha de Google Business Profile y conseguir nuevas reseñas. El posicionamiento web orgánico para búsquedas locales en Zaragoza requiere entre 3 y 6 meses. Zaragoza tiene menos competencia digital que las grandes capitales, lo que acelera los resultados."
      }
    },
    {
      "@type": "Question",
      name: "¿Qué diferencia hay entre SEO local y SEO nacional para un negocio en Zaragoza?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "El SEO local optimiza tu presencia para búsquedas con intención geográfica en Zaragoza y Aragón: 'fisioterapeuta Zaragoza', 'taller mecánico Delicias'. El SEO nacional apunta a keywords sin modificador geográfico. Para negocios con presencia física en Zaragoza, el SEO local tiene mayor ROI porque la intención de compra de quien busca es más alta."
      }
    },
    {
      "@type": "Question",
      name: "¿Es necesario tener web para hacer SEO local en Zaragoza?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Google Business Profile puede generar llamadas y visitas sin web. Pero combinar una ficha de GBP bien optimizada con una web que tenga páginas de servicio locales multiplica los resultados. La web permite posicionar para más keywords, captar leads fuera del horario y construir autoridad a largo plazo."
      }
    },
    {
      "@type": "Question",
      name: "¿Cuánto cuesta el SEO local para un negocio en Zaragoza?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Depende del punto de partida y los objetivos. La optimización inicial de Google Business Profile y la auditoría SEO local pueden resolverse desde 300-500€. Un servicio de SEO local continuado — con trabajo mensual de contenido, reseñas y autoridad — parte desde 300€/mes. El ROI suele ser positivo desde el primer trimestre para negocios en sectores con demanda local activa."
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
        <Breadcrumbs crumbs={[{ label: "Inicio", href: "/" }, { label: "Blog", href: "/blog/" }, { label: "SEO Zaragoza" }]} />
        <p className="text-sm text-accent-500 font-semibold mb-2">SEO Local</p>
        <h1 className="text-4xl font-bold text-primary-600 mb-4 leading-tight">SEO en Zaragoza: cómo posicionar tu negocio en Google y captar clientes en Aragón</h1>
        <p className="text-xl text-gray-500 mb-8 leading-relaxed">Zaragoza es la quinta ciudad de España, estratégicamente ubicada entre Madrid, Barcelona, Bilbao y Valencia. Su economía diversificada y un mercado digital en crecimiento hacen del SEO una inversión con retorno especialmente atractivo para negocios locales.</p>

        <h2 className="text-2xl font-bold text-primary-600 mt-10 mb-4">El mercado digital de Zaragoza: por qué es una oportunidad</h2>
        <p className="text-gray-700 leading-relaxed mb-4">Zaragoza tiene unos 700.000 habitantes y es el centro económico de Aragón. La ciudad tiene una economía diversificada con sectores fuertes en logística (el polígono PLAZA es uno de los más grandes de Europa), automoción (planta de Stellantis), alimentación y servicios. Este tejido industrial genera tanto demanda de servicios B2B como un mercado de consumo estable.</p>
        <p className="text-gray-700 leading-relaxed mb-4">La característica más interesante de Zaragoza desde el punto de vista del SEO es la disparidad entre el tamaño del mercado y el nivel de competencia digital. A diferencia de Madrid o Barcelona, donde prácticamente todos los sectores tienen competidores con presencia digital sólida, en Zaragoza muchos sectores todavía tienen una penetración digital baja. Esto crea oportunidades reales para negocios que inviertan en SEO con consistencia.</p>
        <p className="text-gray-700 leading-relaxed mb-4">La posición geográfica de Zaragoza también es relevante para negocios que no solo sirven a la ciudad sino a toda Aragón. El SEO para términos como "empresa logística Aragón" o "servicios industriales Zaragoza" tiene un alcance geográfico mayor que en ciudades de similar tamaño sin esta centralidad regional.</p>

        <h2 className="text-2xl font-bold text-primary-600 mt-10 mb-4">Sectores con mayor oportunidad SEO en Zaragoza</h2>
        <p className="text-gray-700 leading-relaxed mb-4"><strong>Hostelería y gastronomía:</strong> Zaragoza tiene una cultura gastronómica muy rica, con tapas y vinos como parte de la identidad local. El turismo de paso (la ciudad es cruce de caminos entre grandes metrópolis) genera una demanda constante de búsquedas tipo "restaurantes Zaragoza", "tapas Zaragoza" o "comer en El Tubo". Muchos establecimientos aún no tienen presencia digital optimizada.</p>
        <p className="text-gray-700 leading-relaxed mb-4"><strong>Servicios inmobiliarios:</strong> El mercado inmobiliario de Zaragoza ha crecido significativamente. Agencias inmobiliarias, constructoras y servicios relacionados con la vivienda tienen mucho potencial SEO en términos como "pisos Zaragoza", "alquiler Delicias" o "casas Actur". La competencia es menor que en Madrid o Barcelona y el volumen de búsquedas es considerable.</p>
        <p className="text-gray-700 leading-relaxed mb-4"><strong>Servicios industriales y logística:</strong> El polígono PLAZA y el resto de polígonos industriales zaragozanos concentran muchas empresas que necesitan proveedores locales de servicios técnicos, mantenimiento, suministros industriales y consultoría. Este mercado B2B tiene menor competencia SEO que el B2C y el valor de cada cliente captado es muy alto.</p>
        <p className="text-gray-700 leading-relaxed mb-4"><strong>Salud y bienestar:</strong> Clínicas dentales, fisioterapeutas, centros de estética y otros servicios de salud son sectores con alta demanda y todavía con margen de mejora en presencia digital en Zaragoza. Los términos locales de barrio ("dentista Delicias", "fisio Oliver") tienen menos competencia que los genéricos de ciudad.</p>

        <h2 className="text-2xl font-bold text-primary-600 mt-10 mb-4">Google Business Profile en Zaragoza: la base del SEO local</h2>
        <p className="text-gray-700 leading-relaxed mb-4">En Zaragoza, como en cualquier ciudad española, Google Business Profile es el activo digital más valioso para negocios físicos. El Local Pack (el bloque de mapa con los 3 primeros resultados locales) aparece en la parte superior de los resultados para búsquedas con intención local, por encima de los resultados orgánicos tradicionales.</p>
        <p className="text-gray-700 leading-relaxed mb-4">La competencia en el Local Pack de Zaragoza es menor que en Madrid o Barcelona en la mayoría de sectores. Esto significa que un negocio zaragozano que trabaje bien su perfil de GBP — con información completa, fotos actualizadas, publicaciones periódicas y gestión activa de reseñas — tiene posibilidades reales de entrar en el top 3 en un plazo de 3-6 meses para su categoría.</p>
        <p className="text-gray-700 leading-relaxed mb-4">Los barrios de Zaragoza más activos en términos de búsquedas locales son el Casco Histórico, Delicias (el más poblado), Actur, Las Fuentes, San José y el Ensanche. Para negocios en estos barrios, incluir el nombre del barrio en el perfil de GBP y en las páginas de la web mejora la relevancia geográfica percibida por Google.</p>

        <BlogBanner variant="seo" />

        <h2 className="text-2xl font-bold text-primary-600 mt-10 mb-4">Estrategia de contenido SEO para negocios zaragozanos</h2>
        <p className="text-gray-700 leading-relaxed mb-4">Una estrategia de contenido eficiente para negocios en Zaragoza debe combinar páginas de servicio optimizadas para las keywords principales con artículos de blog que respondan preguntas específicas que hacen los zaragozanos antes de contratar un servicio o comprar un producto.</p>
        <p className="text-gray-700 leading-relaxed mb-4">El contenido con enfoque local y específico de Aragón tiene ventaja sobre el contenido genérico. Un artículo sobre "cuánto cuesta reformar un piso en Zaragoza" posicionará mejor para búsquedas zaragozanas que uno genérico sobre "precio de reformas en España", porque responde exactamente lo que busca el usuario local y la competencia para esa keyword específica es mucho menor.</p>
        <p className="text-gray-700 leading-relaxed mb-4">Para negocios con alcance regional, también tiene sentido crear contenido específico para otras ciudades aragonesas: Huesca, Teruel, Calatayud, Tarazona. Estas ciudades tienen volúmenes de búsqueda menores pero prácticamente ninguna competencia digital, haciendo que una página bien optimizada posicione rápidamente.</p>

        <h2 className="text-2xl font-bold text-primary-600 mt-10 mb-4">Tiempos y resultados esperados en Zaragoza</h2>
        <p className="text-gray-700 leading-relaxed mb-4">Los plazos para ver resultados SEO en Zaragoza son más cortos que en Madrid o Barcelona, principalmente porque la competencia es menor. Para términos de competencia media (la mayoría de sectores en Zaragoza), es realista esperar:</p>
        <p className="text-gray-700 leading-relaxed mb-4">Primeros 3 meses: mejoras en posicionamiento de long tail, aparición en búsquedas de barrio específicas, aumento de impresiones en Google Search Console aunque los clics sean aún bajos.</p>
        <p className="text-gray-700 leading-relaxed mb-4">De 3 a 6 meses: visibilidad en el Local Pack de GBP para términos de barrio o de servicio específico, primeros clics orgánicos para términos relevantes, aumento medible del tráfico web procedente de Google.</p>
        <p className="text-gray-700 leading-relaxed mb-4">De 6 a 12 meses: posiciones sólidas (top 5) para términos de competencia media de la ciudad, tráfico orgánico mensual que empieza a generar leads de forma regular, ROI positivo del SEO para la mayoría de servicios con ticket medio o alto.</p>

        <section className="py-12 px-4 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-primary-600 mb-8">Preguntas frecuentes sobre SEO local en Zaragoza</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-primary-700 mb-2">¿Cuánto tarda en dar resultados el SEO local en Zaragoza?</h3>
                <p className="text-gray-600">Los primeros resultados visibles en Google Maps suelen aparecer entre 4 y 8 semanas tras optimizar la ficha de Google Business Profile y conseguir nuevas reseñas. El posicionamiento web orgánico para búsquedas locales en Zaragoza requiere entre 3 y 6 meses. Zaragoza tiene menos competencia digital que las grandes capitales, lo que acelera los resultados.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-primary-700 mb-2">¿Qué diferencia hay entre SEO local y SEO nacional para un negocio en Zaragoza?</h3>
                <p className="text-gray-600">El SEO local optimiza tu presencia para búsquedas con intención geográfica en Zaragoza y Aragón: 'fisioterapeuta Zaragoza', 'taller mecánico Delicias'. El SEO nacional apunta a keywords sin modificador geográfico. Para negocios con presencia física en Zaragoza, el SEO local tiene mayor ROI porque la intención de compra de quien busca es más alta.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-primary-700 mb-2">¿Es necesario tener web para hacer SEO local en Zaragoza?</h3>
                <p className="text-gray-600">Google Business Profile puede generar llamadas y visitas sin web. Pero combinar una ficha de GBP bien optimizada con una web que tenga páginas de servicio locales multiplica los resultados. La web permite posicionar para más keywords, captar leads fuera del horario y construir autoridad a largo plazo.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-primary-700 mb-2">¿Cuánto cuesta el SEO local para un negocio en Zaragoza?</h3>
                <p className="text-gray-600">Depende del punto de partida y los objetivos. La optimización inicial de Google Business Profile y la auditoría SEO local pueden resolverse desde 300-500€. Un servicio de SEO local continuado — con trabajo mensual de contenido, reseñas y autoridad — parte desde 300€/mes. El ROI suele ser positivo desde el primer trimestre para negocios en sectores con demanda local activa.</p>
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
