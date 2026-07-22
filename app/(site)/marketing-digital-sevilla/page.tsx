import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { RelatedArticles } from "@/components/RelatedArticles";
import { ContactForm } from "@/components/ContactForm";
import { BlogBanner } from "@/components/BlogBanner";

export const metadata: Metadata = {
  title: "Marketing Digital para Empresas en Sevilla: Guía Práctica",
  description: "Estrategia de marketing digital para negocios en Sevilla. SEO, Google Ads, redes sociales y cómo aprovechar el turismo y el crecimiento económico de la capital andaluza.",
  alternates: { canonical: "https://www.mktweb360.com/marketing-digital-sevilla/" },
  openGraph: {
    title: "Marketing Digital para Empresas en Sevilla | Mkt Web 360",
    description: "Estrategia de marketing digital para negocios en Sevilla. SEO, Google Ads, redes sociales y cómo aprovechar el turismo y el crecimiento económico de la capital andaluza.",
    url: "https://www.mktweb360.com/marketing-digital-sevilla/",
    images: [{ url: "/og-marketing-digital-sevilla.jpg", width: 1200, height: 630 }],
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Marketing Digital para Empresas en Sevilla: Guía Práctica | Mkt Web 360",
  provider: { "@type": "Organization", name: "Mkt Web 360 SLU", url: "https://www.mktweb360.com" },
  description: "Estrategia de marketing digital para negocios en Sevilla. SEO, Google Ads, redes sociales y cómo aprovechar el turismo y el crecimiento económico de la capital andaluza.",
  areaServed: "España",
  url: "https://www.mktweb360.com/marketing-digital-sevilla/",
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Inicio", item: "https://www.mktweb360.com/" },
    { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.mktweb360.com/blog/" },
    { "@type": "ListItem", position: 3, name: "Marketing Digital en Sevilla", item: "https://www.mktweb360.com/marketing-digital-sevilla/" }
  ]
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "¿Qué incluye un servicio de marketing digital para empresas en Sevilla?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Un servicio completo de marketing digital en Sevilla incluye SEO local, gestión de Google Business Profile, campañas de Google Ads, gestión de redes sociales, diseño web y analítica. Lo más habitual es empezar con los canales de mayor ROI para el tipo de negocio — normalmente SEO local y GBP para negocios con presencia física — y escalar progresivamente."
      }
    },
    {
      "@type": "Question",
      name: "¿Cuánto cuesta el marketing digital para una pyme en Sevilla?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Depende de los servicios contratados. Un servicio básico de SEO local + Google Business Profile parte desde 300€/mes. Una estrategia más completa con SEO, redes sociales y campañas de pago puede estar entre 500 y 1.500€/mes. Sevilla tiene un mercado digital activo con oportunidades claras para negocios que empiecen a trabajar su presencia online de forma profesional."
      }
    },
    {
      "@type": "Question",
      name: "¿Cuánto tarda en dar resultados el marketing digital en Sevilla?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Depende del canal. Google Ads genera tráfico desde el primer día. El SEO local muestra primeros resultados en 4-8 semanas y se consolida en 3-6 meses. Las redes sociales construyen comunidad de forma progresiva. Sevilla tiene competencia digital media, lo que hace que un trabajo bien ejecutado tenga impacto visible en plazos razonables."
      }
    },
    {
      "@type": "Question",
      name: "¿Necesita una empresa de Sevilla una agencia de marketing digital o puede gestionarlo internamente?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Depende de los recursos internos y los objetivos. El SEO técnico y las campañas de pago requieren conocimiento especializado y herramientas específicas. Para la mayoría de pymes en Sevilla, externalizar el marketing digital con una agencia especializada es más eficiente que contratar un perfil interno a tiempo completo."
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
        <Breadcrumbs crumbs={[{ label: "Inicio", href: "/" }, { label: "Blog", href: "/blog/" }, { label: "Marketing digital Sevilla" }]} />
        <p className="text-sm text-accent-500 font-semibold mb-2">SEO Local</p>
        <h1 className="text-4xl font-bold text-primary-600 mb-4 leading-tight">Marketing digital para empresas en Sevilla: guía práctica para crecer online en la capital andaluza</h1>
        <p className="text-xl text-gray-500 mb-8 leading-relaxed">Sevilla combina un tejido empresarial tradicional sólido con un crecimiento digital acelerado en los últimos años. Esta guía analiza qué estrategias de marketing digital tienen mejor retorno para negocios sevillanos.</p>

        <h2 className="text-2xl font-bold text-primary-600 mt-10 mb-4">El contexto digital sevillano: oportunidades reales para PYMEs</h2>
        <p className="text-gray-700 leading-relaxed mb-4">Sevilla es la cuarta ciudad más grande de España y la capital económica de Andalucía. Con casi 700.000 habitantes en la ciudad y más de 1,2 millones en el área metropolitana, el mercado local es significativo. La buena noticia para las PYMEs sevillanas es que el nivel de digitalización del tejido empresarial local, aunque creciendo, sigue siendo inferior al de Madrid o Barcelona — lo que significa menos competencia online en muchos sectores.</p>
        <p className="text-gray-700 leading-relaxed mb-4">El turismo es un factor económico clave en Sevilla que crea oportunidades digitales únicas. La ciudad atrae a más de 3 millones de turistas al año, muchos de ellos internacionales que buscan alojamiento, gastronomía, ocio y servicios en Google antes de llegar. Negocios turísticos sevillanos que han invertido en SEO y en plataformas como TripAdvisor, Booking y GetYourGuide han experimentado crecimientos significativos de captación en los últimos años.</p>
        <p className="text-gray-700 leading-relaxed mb-4">El sector de eventos y bodas es otro nicho con alta actividad digital en Sevilla. La ciudad es uno de los principales destinos de bodas de España, y toda la cadena de proveedores — fotógrafos, caterings, floristerías, espacios, música en vivo — compite activamente en Google para captar a las parejas que planifican su boda meses o años antes.</p>

        <h2 className="text-2xl font-bold text-primary-600 mt-10 mb-4">SEO local en Sevilla: factores diferenciadores</h2>
        <p className="text-gray-700 leading-relaxed mb-4">Sevilla tiene una estructura de barrios muy definida que los usuarios incorporan habitualmente en sus búsquedas locales: Triana, Los Remedios, Nervión, Macarena, San Pablo, Bellavista. Para negocios con ubicación física, posicionar por barrio es una estrategia eficiente que compite en un espacio menos saturado que los términos ciudad-genéricos.</p>
        <p className="text-gray-700 leading-relaxed mb-4">El clima sevillano genera búsquedas estacionales pronunciadas: servicios de aire acondicionado y refrigeración tienen picos en primavera-verano que pueden aprovecharse con contenido SEO específico publicado con antelación. Los negocios de hostelería y ocio tienen picos en Semana Santa, Feria de Abril y el periodo turístico de primavera-otoño. Alinear la estrategia de contenido con estas estacionalidades multiplica el retorno.</p>
        <p className="text-gray-700 leading-relaxed mb-4">La autoridad de dominio media de los negocios sevillanos en Google es inferior a la de Madrid o Barcelona, lo que significa que con un trabajo SEO de calidad media se pueden alcanzar posiciones top que en otras ciudades requerirían mucho más tiempo y recursos. Esta es una ventana de oportunidad que se irá cerrando a medida que la competencia digital en Sevilla madure.</p>

        <h2 className="text-2xl font-bold text-primary-600 mt-10 mb-4">Google Business Profile para negocios sevillanos</h2>
        <p className="text-gray-700 leading-relaxed mb-4">En Sevilla, como en cualquier ciudad con alto volumen de búsquedas locales, Google Business Profile es el activo digital más importante para negocios físicos. El Local Pack (los 3 resultados en el mapa de Google) captura una proporción muy alta del tráfico para búsquedas como "restaurante Triana", "fontanero Nervión" o "dentista Macarena".</p>
        <p className="text-gray-700 leading-relaxed mb-4">Las reseñas en Google Business Profile tienen especial relevancia en Sevilla por la cultura de recomendaciones personales muy arraigada en la ciudad. Los sevillanos confían mucho en las recomendaciones de su círculo social, y las reseñas online funcionan como una extensión digital de ese proceso. Un negocio sevillano con 50 reseñas positivas y una media de 4,6 estrelllas tiene una posición muy fuerte en el mercado local.</p>
        <p className="text-gray-700 leading-relaxed mb-4">La clave para acumular reseñas es simplemente pedirlas en el momento de mayor satisfacción del cliente: al finalizar el servicio, al entregar el pedido, o en el email de seguimiento post-compra. El enlace directo a tu perfil de Google para dejar una reseña debe estar en todos estos puntos de contacto.</p>

        <BlogBanner variant="default" />

        <h2 className="text-2xl font-bold text-primary-600 mt-10 mb-4">Redes sociales en Sevilla: qué funciona para cada sector</h2>
        <p className="text-gray-700 leading-relaxed mb-4">Sevilla tiene una alta presencia en redes sociales, especialmente Instagram. La ciudad es visualmente muy llamativa (arquitectura, gastronomía, festividades) y genera un volumen enorme de contenido orgánico que cualquier negocio relacionado con estos sectores puede aprovechar. Restaurantes en zonas turísticas, hoteles, peluquerías con estilos vistosos y negocios de moda han construido seguidores significativos con estrategias de contenido bien ejecutadas.</p>
        <p className="text-gray-700 leading-relaxed mb-4">Para sectores de servicios profesionales (asesorías, clínicas, servicios a empresas), Instagram funciona menos bien que LinkedIn o el SEO en Google. El esfuerzo de producción de contenido en Instagram no se justifica para negocios cuyo cliente no busca sus servicios de forma visual o emocional.</p>
        <p className="text-gray-700 leading-relaxed mb-4">TikTok ha ganado relevancia en Sevilla para negocios con componente de entretenimiento o gastronomía. Bares y restaurantes que publican vídeos de sus elaboraciones o de su ambiente han conseguido viralidad local con coste mínimo. La audiencia de TikTok en Sevilla es mayoritariamente joven, lo que limita su utilidad para negocios orientados a clientes de más de 45 años.</p>

        <h2 className="text-2xl font-bold text-primary-600 mt-10 mb-4">Google Ads en Sevilla: cuándo invertir y en qué sectores</h2>
        <p className="text-gray-700 leading-relaxed mb-4">Google Ads en Sevilla tiene costes por clic más bajos que en Madrid o Barcelona en la mayoría de sectores, lo que mejora el retorno potencial de la inversión. Para servicios con demanda urgente (urgencias médicas, servicios de hogar, reparaciones) y tickets medios altos, Google Ads puede ser rentable desde el primer mes si la configuración es correcta.</p>
        <p className="text-gray-700 leading-relaxed mb-4">Los errores más comunes en campañas de Google Ads de PYMEs sevillanas son: segmentación geográfica demasiado amplia (pagando por clics de fuera del área de servicio), uso exclusivo de concordancia amplia sin negativas (mostrando el anuncio para consultas irrelevantes) y páginas de destino que no están optimizadas para convertir (llevar el tráfico pagado a la portada en lugar de a una landing específica del servicio anunciado).</p>
        <p className="text-gray-700 leading-relaxed mb-4">Para negocios de turismo en Sevilla, Google Ads en inglés y en temporada alta (primavera y otoño) puede ser especialmente rentable. Los turistas internacionales que buscan "things to do in Seville", "flamenco show Seville" o "tapas tour Seville" tienen alta intención de compra y están dispuestos a pagar por experiencias curadas.</p>

        <section className="py-12 px-4 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-primary-600 mb-8">Preguntas frecuentes sobre marketing digital en Sevilla</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-primary-700 mb-2">¿Qué incluye un servicio de marketing digital para empresas en Sevilla?</h3>
                <p className="text-gray-600">Un servicio completo de marketing digital en Sevilla incluye SEO local, gestión de Google Business Profile, campañas de Google Ads, gestión de redes sociales, diseño web y analítica. Lo más habitual es empezar con los canales de mayor ROI para el tipo de negocio — normalmente SEO local y GBP para negocios con presencia física — y escalar progresivamente.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-primary-700 mb-2">¿Cuánto cuesta el marketing digital para una pyme en Sevilla?</h3>
                <p className="text-gray-600">Depende de los servicios contratados. Un servicio básico de SEO local + Google Business Profile parte desde 300€/mes. Una estrategia más completa con SEO, redes sociales y campañas de pago puede estar entre 500 y 1.500€/mes. Sevilla tiene un mercado digital activo con oportunidades claras para negocios que empiecen a trabajar su presencia online de forma profesional.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-primary-700 mb-2">¿Cuánto tarda en dar resultados el marketing digital en Sevilla?</h3>
                <p className="text-gray-600">Depende del canal. Google Ads genera tráfico desde el primer día. El SEO local muestra primeros resultados en 4-8 semanas y se consolida en 3-6 meses. Las redes sociales construyen comunidad de forma progresiva. Sevilla tiene competencia digital media, lo que hace que un trabajo bien ejecutado tenga impacto visible en plazos razonables.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-primary-700 mb-2">¿Necesita una empresa de Sevilla una agencia de marketing digital o puede gestionarlo internamente?</h3>
                <p className="text-gray-600">Depende de los recursos internos y los objetivos. El SEO técnico y las campañas de pago requieren conocimiento especializado y herramientas específicas. Para la mayoría de pymes en Sevilla, externalizar el marketing digital con una agencia especializada es más eficiente que contratar un perfil interno a tiempo completo.</p>
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
