import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { RelatedArticles } from "@/components/RelatedArticles";
import { ContactForm } from "@/components/ContactForm";
import { BlogBanner } from "@/components/BlogBanner";

export const metadata: Metadata = {
  title: "SEO en Madrid: Cómo Posicionar tu Negocio en la Capital",
  description: "Guía de SEO para negocios en Madrid. Competencia, keywords locales, Google Business Profile y estrategia para destacar en el mercado más competitivo de España.",
  alternates: { canonical: "https://www.mktweb360.com/seo-madrid/" },
  openGraph: {
    title: "SEO en Madrid: Posiciona tu Negocio en la Capital | Mkt Web 360",
    description: "Guía de SEO para negocios en Madrid. Competencia, keywords locales, Google Business Profile y estrategia para destacar en el mercado más competitivo de España.",
    url: "https://www.mktweb360.com/seo-madrid/",
    images: [{ url: "/og-seo-madrid.jpg", width: 1200, height: 630 }],
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "SEO en Madrid: Cómo Posicionar tu Negocio en la Capital | Mkt Web 360",
  provider: { "@type": "Organization", name: "Mkt Web 360 SLU", url: "https://www.mktweb360.com" },
  description: "Guía de SEO para negocios en Madrid. Competencia, keywords locales, Google Business Profile y estrategia para destacar en el mercado más competitivo de España.",
  areaServed: "España",
  url: "https://www.mktweb360.com/seo-madrid/",
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <div className="max-w-3xl mx-auto px-4 py-12">
        <Breadcrumbs crumbs={[{ label: "Inicio", href: "/" }, { label: "Blog", href: "/blog/" }, { label: "SEO Madrid" }]} />
        <p className="text-sm text-accent-500 font-semibold mb-2">SEO Local</p>
        <h1 className="text-4xl font-bold text-primary-600 mb-4 leading-tight">SEO en Madrid: cómo posicionar tu negocio en el mercado más competitivo de España</h1>
        <p className="text-xl text-gray-500 mb-8 leading-relaxed">Madrid concentra la mayor densidad de negocios de España y también la mayor competencia en Google. Posicionar bien en la capital requiere una estrategia más sólida que en otras ciudades, pero el potencial de captación también es enormemente mayor.</p>

        <h2 className="text-2xl font-bold text-primary-600 mt-10 mb-4">El panorama SEO en Madrid: qué lo diferencia del resto de España</h2>
        <p className="text-gray-700 leading-relaxed mb-4">Madrid es el mercado más competitivo de España para prácticamente todos los sectores. La densidad de negocios por kilómetro cuadrado, el volumen de búsquedas locales y la presencia de empresas con presupuestos de marketing elevados hacen que posicionarse en Madrid requiera más inversión y tiempo que en ciudades medianas como Toledo, Albacete o Burgos.</p>
        <p className="text-gray-700 leading-relaxed mb-4">Sin embargo, el volumen de búsquedas locales en Madrid es proporcional a su tamaño. Un negocio de fontanería en Madrid recibe consultas en Google de términos como "fontanero Madrid urgente", "fontanero 24h Madrid" o "fontanero barato Madrid" con volúmenes de búsqueda mensual de 2.000-5.000 consultas. El mismo servicio en una ciudad de 100.000 habitantes generaría quizás 200-400 búsquedas mensuales.</p>
        <p className="text-gray-700 leading-relaxed mb-4">La estrategia SEO óptima en Madrid combina tres pilares: posicionamiento orgánico en Google (SEO web), optimización del perfil de Google Business Profile para el Local Pack (el mapa con los 3 resultados locales), y en sectores muy competitivos, complementar con Google Ads para términos de alta intención comercial mientras el SEO orgánico madura.</p>

        <h2 className="text-2xl font-bold text-primary-600 mt-10 mb-4">Keywords locales para negocios en Madrid: cómo encontrarlas</h2>
        <p className="text-gray-700 leading-relaxed mb-4">La investigación de keywords para Madrid debe incluir tres tipos de búsquedas: las que incluyen "Madrid" explícitamente ("clínica dental Madrid"), las que Google interpreta con intención local sin incluir la ciudad ("dentista cerca de mí") y las de barrio o distrito ("dentista Salamanca", "dentista Chamberí").</p>
        <p className="text-gray-700 leading-relaxed mb-4">Las búsquedas por barrio o distrito son especialmente valiosas en Madrid porque la ciudad es muy grande y muchos usuarios buscan servicios en su zona específica. Un restaurante en Malasaña se beneficiará de posicionar para "restaurante Malasaña", "donde comer Malasaña" o "restaurante italiano Chueca" más que para el genérico "restaurante Madrid", que tiene una competencia brutal.</p>
        <p className="text-gray-700 leading-relaxed mb-4">Para investigar estas keywords, usa Google Search Console (si ya tienes web) para ver por qué términos ya recibes impresiones, Google Keyword Planner con filtro geográfico de Madrid, y simplemente las sugerencias de autocompletado de Google al escribir tu categoría de negocio seguida de Madrid o de distintos barrios. Estas sugerencias reflejan búsquedas reales de usuarios.</p>

        <h2 className="text-2xl font-bold text-primary-600 mt-10 mb-4">Google Business Profile en Madrid: optimización para el Local Pack</h2>
        <p className="text-gray-700 leading-relaxed mb-4">El Local Pack (el bloque de mapa con 3 resultados locales que aparece en búsquedas con intención local) es el activo SEO más valioso para negocios físicos en Madrid. Aparecer en ese bloque puede triplicar la visibilidad respecto a los resultados orgánicos estándar.</p>
        <p className="text-gray-700 leading-relaxed mb-4">Para maximizar la presencia en el Local Pack madrileño, el perfil de Google Business Profile debe estar completamente rellenado: categoría principal precisa (no "empresa" sino "fontanero"), categorías secundarias relevantes, horario actualizado, fotos de calidad del local y del equipo, descripción que incluya las keywords principales y zona de servicio bien definida.</p>
        <p className="text-gray-700 leading-relaxed mb-4">Las reseñas son el factor diferenciador más importante en mercados competitivos como Madrid. Con decenas de competidores en cada sector, la diferencia entre aparecer en el top 3 del Local Pack y en la posición 10 puede ser simplemente el número y la calidad de las reseñas. Implementar un sistema activo para solicitar reseñas a clientes satisfechos es tan importante como la optimización técnica del perfil.</p>

        <BlogBanner variant="seo" />

        <h2 className="text-2xl font-bold text-primary-600 mt-10 mb-4">Estrategia de contenido SEO para Madrid: atacar desde la periferia</h2>
        <p className="text-gray-700 leading-relaxed mb-4">En mercados muy competitivos como Madrid, intentar posicionar directamente para los términos más genéricos ("abogado Madrid", "fontanero Madrid") es una estrategia de alto coste y retorno lento para la mayoría de PYMEs. Una estrategia más eficiente es atacar desde los flancos: keywords de long tail (más específicas y menos competidas) que tienen intención comercial clara.</p>
        <p className="text-gray-700 leading-relaxed mb-4">Por ejemplo, un abogado de herencias en Madrid encontrará menos competencia y mejor retorno posicionando para "abogado herencias testamento Madrid", "aceptar herencia con deudas Madrid" o "partición herencia entre hermanos Madrid" que para el genérico "abogado Madrid". Estos términos tienen menos búsquedas, pero quienes los buscan tienen una necesidad muy específica y mayor probabilidad de contactar.</p>
        <p className="text-gray-700 leading-relaxed mb-4">La estructura de contenido recomendada incluye una página principal optimizada para los términos más importantes, páginas de servicio específicas para cada área de práctica o tipo de servicio, y artículos de blog que respondan preguntas concretas que hacen los madrileños antes de contratar un servicio como el tuyo.</p>

        <h2 className="text-2xl font-bold text-primary-600 mt-10 mb-4">Cuánto tiempo lleva posicionarse en Madrid y qué esperar</h2>
        <p className="text-gray-700 leading-relaxed mb-4">En Madrid, los plazos de resultados SEO son más largos que en ciudades menos competitivas. Para términos de competencia media-alta en sectores concurridos, los primeros resultados visibles (entrar en el top 20 de Google) pueden tardar entre 4 y 8 meses. Llegar al top 5 para términos competitivos puede requerir 12-18 meses de trabajo consistente.</p>
        <p className="text-gray-700 leading-relaxed mb-4">Esto no significa que no haya resultados antes: el tráfico orgánico suele crecer de forma gradual. A los 3 meses se empiezan a ver las primeras entradas de long tail. A los 6 meses, si el trabajo técnico y de contenido es sólido, el tráfico orgánico puede haberse multiplicado por 3-5 respecto al punto de partida. A los 12 meses, para negocios en sectores de competencia media, el SEO suele convertirse en el canal de captación con mejor retorno.</p>
        <p className="text-gray-700 leading-relaxed mb-4">Lo que marca la diferencia en Madrid respecto a otras ciudades es la consistencia: necesitas más contenido, más enlaces y más reseñas que tu competencia. Las empresas que hacen SEO durante 3 meses y lo abandonan no verán resultados. Las que mantienen una estrategia consistente durante 12-24 meses construyen una ventaja competitiva difícil de alcanzar por quienes empiecen después.</p>

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
