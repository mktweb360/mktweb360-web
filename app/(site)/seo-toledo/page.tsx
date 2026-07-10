import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { RelatedArticles } from "@/components/RelatedArticles";
import { ContactForm } from "@/components/ContactForm";
import { BlogBanner } from "@/components/BlogBanner";

export const metadata: Metadata = {
  title: "SEO en Toledo — Posicionamiento Web para Negocios Locales",
  description: "Cómo mejorar el SEO de tu negocio en Toledo. Aparece en Google cuando tus clientes te buscan. Guía de posicionamiento web para empresas toledanas.",
  alternates: { canonical: "https://www.mktweb360.com/seo-toledo/" },
  openGraph: {
    title: "SEO en Toledo — Posicionamiento Web para Negocios Locales | Mkt Web 360",
    description: "Cómo mejorar el SEO de tu negocio en Toledo. Aparece en Google cuando tus clientes te buscan. Guía de posicionamiento web para empresas toledanas.",
    url: "https://www.mktweb360.com/seo-toledo/",
    images: [{ url: "/og-seo-toledo.jpg", width: 1200, height: 630 }],
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "SEO en Toledo — Posicionamiento Web para Negocios Locales | Mkt Web 360",
  provider: { "@type": "Organization", name: "Mkt Web 360 SLU", url: "https://www.mktweb360.com" },
  description: "Cómo mejorar el SEO de tu negocio en Toledo. Aparece en Google cuando tus clientes te buscan. Guía de posicionamiento web para empresas toledanas.",
  areaServed: "España",
  url: "https://www.mktweb360.com/seo-toledo/",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "¿Cuánto tarda en dar resultados el SEO local en Toledo?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Los primeros resultados visibles en Google Maps suelen aparecer entre 4 y 8 semanas tras optimizar la ficha de Google Business Profile y conseguir nuevas reseñas. El posicionamiento web orgánico para búsquedas locales requiere entre 3 y 6 meses de trabajo constante. Toledo tiene menos competencia digital que grandes ciudades, lo que acelera los plazos."
      }
    },
    {
      "@type": "Question",
      name: "¿Qué diferencia hay entre SEO local y SEO nacional?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "El SEO local optimiza tu presencia para búsquedas con intención geográfica: 'dentista en Toledo', 'abogado Talavera de la Reina'. El SEO nacional apunta a keywords sin modificador geográfico. Para negocios con presencia física en Toledo, el SEO local tiene mayor ROI porque la competencia es menor y la intención de compra de quien busca es más alta."
      }
    },
    {
      "@type": "Question",
      name: "¿Es necesario tener web para hacer SEO local en Toledo?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Google Business Profile puede generar llamadas y visitas sin web. Pero combinar una ficha de GBP bien optimizada con una web que tenga páginas de servicio locales multiplica los resultados. La web permite posicionar para más keywords, captar leads fuera del horario y construir autoridad a largo plazo."
      }
    },
    {
      "@type": "Question",
      name: "¿Cuánto cuesta el SEO local para un negocio en Toledo?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Depende del punto de partida y los objetivos. La optimización inicial de Google Business Profile y la auditoría SEO local pueden resolverse desde 300-500€. Un servicio de SEO local continuado — con trabajo mensual de contenido, reseñas y autoridad — parte desde 300€/mes. El ROI suele ser positivo desde el primer trimestre para negocios en sectores con demanda local activa."
      }
    }
  ]
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Inicio", item: "https://www.mktweb360.com/" },
    { "@type": "ListItem", position: 2, name: "SEO en Toledo", item: "https://www.mktweb360.com/seo-toledo/" }
  ]
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <div className="max-w-3xl mx-auto px-4 py-12">
        <Breadcrumbs crumbs={[{ label: "Inicio", href: "/" }, { label: "Blog", href: "/blog/" }, { label: "SEO en Toledo" }]} />
        <p className="text-sm text-accent-500 font-semibold mb-2">SEO Local</p>
        <h1 className="text-4xl font-bold text-primary-600 mb-4 leading-tight">SEO en Toledo: cómo aparecer en Google si tienes un negocio local</h1>
        <p className="text-xl text-gray-500 mb-8 leading-relaxed">El SEO local es la estrategia más rentable para negocios con presencia física en Toledo. Descubre cómo funciona, qué factores determinan tu posición y qué puedes hacer para mejorarla.</p>

        <h2 className="text-2xl font-bold text-primary-600 mt-10 mb-4">Qué es el SEO local y por qué importa en Toledo</h2>
        <p className="text-gray-700 leading-relaxed mb-4">El SEO local es el conjunto de técnicas orientadas a mejorar la visibilidad de un negocio en las búsquedas con intención geográfica. Cuando alguien escribe "dentista en Toledo" o "abogado Talavera de la Reina" en Google, los resultados que aparecen en los primeros puestos — incluyendo el mapa — no son aleatorios. Son los negocios que han trabajado su presencia digital local de forma sistemática.</p>
        <p className="text-gray-700 leading-relaxed mb-4">Para un negocio en Toledo, el SEO local es especialmente relevante porque la demanda existe: hay miles de búsquedas mensuales de servicios locales en la provincia, y buena parte de ellas todavía no tienen una competencia digital muy desarrollada. Esto significa que llegar a los primeros resultados es más accesible que en una gran ciudad, y los beneficios son igualmente reales: más llamadas, más visitas y más clientes.</p>
        <p className="text-gray-700 leading-relaxed mb-4">A diferencia de Google Ads, el SEO no tiene coste por clic. Una vez que posicionas bien para una búsqueda relevante, el tráfico que llega a tu web es gratuito. Eso lo convierte en el canal con mejor ROI a largo plazo para la mayoría de negocios locales.</p>

        <h2 className="text-2xl font-bold text-primary-600 mt-10 mb-4">Google Business Profile: tu ficha local en Google Maps</h2>
        <p className="text-gray-700 leading-relaxed mb-4">Google Business Profile (antes llamado Google My Business) es la ficha que aparece en el panel de la derecha cuando alguien busca tu negocio en Google, y en el mapa cuando busca una categoría de negocio cerca de su ubicación. Es gratuita, pero muy pocos negocios la tienen correctamente optimizada.</p>
        <p className="text-gray-700 leading-relaxed mb-4">Para un negocio en Toledo, una ficha bien optimizada puede ser la fuente número uno de nuevos clientes. Los elementos más importantes son: nombre de negocio correcto y consistente con tu web, categoría principal bien elegida, dirección exacta verificada, horario actualizado, fotos de calidad del local y del equipo, y un flujo constante de reseñas recientes.</p>
        <p className="text-gray-700 leading-relaxed mb-4">Las publicaciones periódicas en tu ficha (ofertas, novedades, eventos) también envían señales positivas a Google y mantienen tu perfil activo, lo que mejora tu visibilidad en el mapa frente a fichas abandonadas de competidores.</p>

        <h2 className="text-2xl font-bold text-primary-600 mt-10 mb-4">Factores de posicionamiento local en Toledo</h2>
        <p className="text-gray-700 leading-relaxed mb-4">Google utiliza tres grandes grupos de señales para determinar qué negocios aparecen en los resultados locales: relevancia, distancia y prominencia.</p>
        <p className="text-gray-700 leading-relaxed mb-4"><strong>Relevancia</strong> mide si tu negocio encaja con lo que busca el usuario. La clave aquí es tener tu categoría correctamente definida en GBP y disponer de una web que hable claramente de los servicios que ofreces y la zona donde los ofreces.</p>
        <p className="text-gray-700 leading-relaxed mb-4"><strong>Distancia</strong> es la proximidad geográfica entre el negocio y el usuario. No puedes controlarla directamente, pero sí puedes asegurarte de que tu dirección está correctamente especificada y de que cubres el área de servicio adecuada en tu ficha.</p>
        <p className="text-gray-700 leading-relaxed mb-4"><strong>Prominencia</strong> es la más trabajable y la que más diferencia a un negocio de otro. Incluye el número y calidad de las reseñas, la autoridad de tu web, las menciones en medios y directorios locales, y las señales de actividad en tu ficha de GBP.</p>

        <BlogBanner variant="seo" />

        <h2 className="text-2xl font-bold text-primary-600 mt-10 mb-4">Keywords locales para negocios toledanos</h2>
        <p className="text-gray-700 leading-relaxed mb-4">Una estrategia de SEO local en Toledo debe identificar las búsquedas que hacen tus clientes potenciales y crear contenido optimizado para aparecer en ellas. Hay tres tipos de keywords locales que debes trabajar.</p>
        <p className="text-gray-700 leading-relaxed mb-4">Las <strong>keywords de servicio más localización</strong> son las más directas: "fontanero Toledo", "asesoría fiscal Toledo capital", "peluquería canina Talavera". Estas búsquedas tienen alta intención de compra y deben tener páginas específicas en tu web.</p>
        <p className="text-gray-700 leading-relaxed mb-4">Las <strong>keywords de barrio o municipio</strong> son más específicas y menos competidas: "electricista Santa Bárbara Toledo", "reformas en Illescas". Si tu negocio sirve a varios municipios de la provincia, crear páginas para cada uno puede multiplicar tu visibilidad.</p>
        <p className="text-gray-700 leading-relaxed mb-4">Las <strong>keywords informativas con intención local</strong> sirven para atraer usuarios en etapas previas a la compra: "cuánto cuesta reformar un baño en Toledo", "mejores restaurantes para bodas en Toledo". Este contenido genera tráfico de calidad y construye autoridad.</p>

        <h2 className="text-2xl font-bold text-primary-600 mt-10 mb-4">Casos reales: negocios de Toledo que mejoraron su visibilidad</h2>
        <p className="text-gray-700 leading-relaxed mb-4">Trabajamos con negocios de muy distintos sectores en Toledo y la provincia. Los resultados varían según el sector y el punto de partida, pero el patrón se repite: negocios que no aparecían en los primeros resultados para sus servicios principales, tras 4-6 meses de trabajo SEO, comenzaron a posicionarse en la primera página y a recibir contactos directamente desde Google.</p>
        <p className="text-gray-700 leading-relaxed mb-4">Un caso típico: un negocio de servicios técnicos del hogar en Toledo capital que no recibía ninguna llamada desde internet. Tras optimizar su ficha de GBP, crear páginas de servicio con contenido local y trabajar su reputación online, pasó a recibir entre 8 y 15 llamadas semanales directamente desde Google Maps.</p>
        <p className="text-gray-700 leading-relaxed mb-4">Otro ejemplo frecuente: clínicas y consultas de salud que compiten con grandes cadenas con presupuestos de marketing mucho mayores. El SEO local bien ejecutado les permite aparecer antes que estas cadenas para búsquedas de proximidad, porque Google prioriza la relevancia local sobre el tamaño de la empresa.</p>

        <h2 className="text-2xl font-bold text-primary-600 mt-10 mb-4">Por dónde empezar si tienes un negocio en Toledo</h2>
        <p className="text-gray-700 leading-relaxed mb-4">Si tu negocio todavía no tiene una estrategia de SEO local activa, el primer paso es hacer un diagnóstico de tu situación actual: ¿cómo apareces en Google Maps? ¿Tienes ficha de GBP verificada y completa? ¿Tu web tiene páginas específicas para los servicios y la localización que ofreces? ¿Cuántas reseñas tienes y cuándo fue la última?</p>
        <p className="text-gray-700 leading-relaxed mb-4">Con esa información puedes identificar las acciones de mayor impacto y priorizarlas. En la mayoría de casos, optimizar la ficha de GBP y conseguir nuevas reseñas es lo que genera resultados más rápidos. El SEO web (páginas de servicio locales, contenido optimizado) requiere más tiempo pero tiene mayor impacto a largo plazo.</p>
        <p className="text-gray-700 leading-relaxed mb-4">Si prefieres que lo hagamos nosotros, ofrecemos una <Link href="/auditoria-digital/" className="text-accent-500 hover:underline">auditoría digital gratuita</Link> donde analizamos tu situación actual y te explicamos exactamente qué deberías priorizar para tu negocio específico en Toledo.</p>

        <section className="py-12 px-4 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-primary-600 mb-8">Preguntas frecuentes sobre SEO local en Toledo</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-primary-700 mb-2">¿Cuánto tarda en dar resultados el SEO local en Toledo?</h3>
                <p className="text-gray-600">Los primeros resultados visibles en Google Maps suelen aparecer entre 4 y 8 semanas tras optimizar la ficha de Google Business Profile y conseguir nuevas reseñas. El posicionamiento web orgánico para búsquedas locales requiere entre 3 y 6 meses de trabajo constante. Toledo tiene menos competencia digital que grandes ciudades, lo que acelera los plazos.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-primary-700 mb-2">¿Qué diferencia hay entre SEO local y SEO nacional?</h3>
                <p className="text-gray-600">El SEO local optimiza tu presencia para búsquedas con intención geográfica: "dentista en Toledo", "abogado Talavera de la Reina". El SEO nacional apunta a keywords sin modificador geográfico. Para negocios con presencia física en Toledo, el SEO local tiene mayor ROI porque la competencia es menor y la intención de compra de quien busca es más alta.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-primary-700 mb-2">¿Es necesario tener web para hacer SEO local en Toledo?</h3>
                <p className="text-gray-600">Google Business Profile puede generar llamadas y visitas sin web. Pero combinar una ficha de GBP bien optimizada con una web que tenga páginas de servicio locales multiplica los resultados. La web permite posicionar para más keywords, captar leads fuera del horario y construir autoridad a largo plazo.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-primary-700 mb-2">¿Cuánto cuesta el SEO local para un negocio en Toledo?</h3>
                <p className="text-gray-600">Depende del punto de partida y los objetivos. La optimización inicial de Google Business Profile y la auditoría SEO local pueden resolverse desde 300-500€. Un servicio de SEO local continuado — con trabajo mensual de contenido, reseñas y autoridad — parte desde 300€/mes. El ROI suele ser positivo desde el primer trimestre para negocios en sectores con demanda local activa.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-primary-600 text-white rounded-2xl p-8 mt-12">
          <h2 className="text-2xl font-bold mb-4">¿Necesitas ayuda con tu marketing digital?</h2>
          <p className="text-primary-200 mb-6">Cuéntanos tu proyecto y te respondemos en menos de 24 horas.</p>
          <div className="bg-white rounded-xl p-6">
            <ContactForm formType="blog" />
          </div>
        </section>
      </div>
      <RelatedArticles category="SEO Local" />
    </>
  );
}
