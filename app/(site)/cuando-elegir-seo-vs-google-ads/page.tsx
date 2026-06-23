import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { RelatedArticles } from "@/components/RelatedArticles";
import { ContactForm } from "@/components/ContactForm";
import { BlogBanner } from "@/components/BlogBanner";

export const metadata: Metadata = {
  title: "Cuándo Elegir SEO y Cuándo Google Ads: Guía para Decidir Bien | Mkt Web 360",
  description: "Cómo decidir entre SEO y Google Ads según tu negocio, presupuesto, urgencia y horizonte temporal. Con ejemplos reales y una matriz de decisión práctica.",
  alternates: { canonical: "https://www.mktweb360.com/cuando-elegir-seo-vs-google-ads/" },
  openGraph: {
    title: "Cuándo Elegir SEO y Cuándo Google Ads | Mkt Web 360",
    description: "Cómo decidir entre SEO y Google Ads según tu negocio, presupuesto, urgencia y horizonte temporal. Con ejemplos reales y una matriz de decisión práctica.",
    url: "https://www.mktweb360.com/cuando-elegir-seo-vs-google-ads/",
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "Cuándo Elegir SEO y Cuándo Google Ads: Guía para Decidir Bien | Mkt Web 360",
  description: "Cómo decidir entre SEO y Google Ads según tu negocio, presupuesto, urgencia y horizonte temporal. Con ejemplos reales y una matriz de decisión práctica.",
  author: { "@type": "Organization", name: "Mkt Web 360 SLU", url: "https://www.mktweb360.com" },
  publisher: { "@type": "Organization", name: "Mkt Web 360 SLU", logo: { "@type": "ImageObject", url: "https://www.mktweb360.com/logo.png" } },
  datePublished: "2026-06-13",
  dateModified: "2026-06-23",
  image: "https://www.mktweb360.com/og-image.jpg",
  url: "https://www.mktweb360.com/cuando-elegir-seo-vs-google-ads/",
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://www.mktweb360.com/cuando-elegir-seo-vs-google-ads/" },
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <div className="max-w-3xl mx-auto px-4 py-12">
        <Breadcrumbs crumbs={[{ label: "Inicio", href: "/" }, { label: "Blog", href: "/blog/" }, { label: "SEO vs Google Ads: cuándo elegir cada uno" }]} />
        <p className="text-sm text-accent-500 font-semibold mb-2">Estrategia</p>
        <h1 className="text-4xl font-bold text-primary-600 mb-4 leading-tight">Cuándo elegir SEO y cuándo Google Ads: guía para tomar la decisión correcta según tu negocio</h1>
        <p className="text-xl text-gray-500 mb-8 leading-relaxed">No existe una respuesta universal a "¿SEO o Google Ads?". La respuesta correcta depende de tu negocio, tu urgencia, tu presupuesto y tus objetivos. Esta guía te da un marco claro para decidir sin que nadie te venda lo que le interesa vender.</p>

        <h2 className="text-2xl font-bold text-primary-600 mt-10 mb-4">Las diferencias fundamentales entre SEO y Google Ads</h2>
        <p className="text-gray-700 leading-relaxed mb-4">SEO y Google Ads son dos formas de aparecer en Google ante personas que buscan lo que ofreces, pero con características radicalmente diferentes en tiempo, coste, riesgo y retorno a largo plazo.</p>
        <p className="text-gray-700 leading-relaxed mb-4"><strong>SEO:</strong> Inversión con retorno diferido pero acumulativo. Pagas por el trabajo de optimización (agencia, freelance o tiempo propio), no por cada clic. Los resultados tardan entre 3 y 12 meses en llegar, pero una vez que posicionas, el tráfico llega sin coste adicional por clic. Es como plantar un árbol: el esfuerzo es al principio, la fruta es a largo plazo y no desaparece si dejas de regar.</p>
        <p className="text-gray-700 leading-relaxed mb-4"><strong>Google Ads:</strong> Inversión con retorno inmediato pero continuo. Pagas por cada clic de usuario que hace en tu anuncio. Los resultados son visibles desde el primer día, pero cuando paras de invertir, los resultados desaparecen inmediatamente. Es como el alquiler de una vivienda: tienes el beneficio mientras pagas, pero no construyes ningún activo propio.</p>
        <p className="text-gray-700 leading-relaxed mb-4">Esta diferencia estructural — SEO como construcción de activo vs. Google Ads como arrendamiento de visibilidad — es el criterio más importante para elegir entre uno u otro según las circunstancias de cada negocio.</p>

        <h2 className="text-2xl font-bold text-primary-600 mt-10 mb-4">Cuándo Google Ads es claramente la mejor opción</h2>
        <p className="text-gray-700 leading-relaxed mb-4"><strong>Cuando necesitas resultados urgentes:</strong> Si acabas de lanzar un negocio, tienes un evento próximo que generar ventas, o estás en temporada alta y necesitas más tráfico ahora, Google Ads es la única opción que puede generar resultados en días. El SEO no puede competir en velocidad.</p>
        <p className="text-gray-700 leading-relaxed mb-4"><strong>Cuando el producto o servicio tiene demanda puntual o estacional:</strong> Si vendes trajes de baño, regalos de Navidad, material escolar de vuelta al cole, o cualquier cosa con demanda muy concentrada en el tiempo, Google Ads te permite estar en el radar exactamente cuando la demanda existe y desactivar el gasto cuando no.</p>
        <p className="text-gray-700 leading-relaxed mb-4"><strong>Cuando quieres probar un nuevo servicio o mercado:</strong> Antes de invertir meses en SEO para un servicio nuevo del que no sabes si habrá demanda, Google Ads te permite validar la demanda en semanas. Si el volumen de búsquedas existe y las conversiones ocurren, entonces vale la pena invertir en SEO para ese término.</p>
        <p className="text-gray-700 leading-relaxed mb-4"><strong>Cuando el mercado local tiene muy poco volumen orgánico:</strong> En ciudades pequeñas o para servicios muy especializados, puede que el volumen de búsquedas mensuales sea tan bajo que el SEO nunca genere el suficiente tráfico para justificar la inversión. En estos casos, Google Ads con segmentación geográfica precisa puede ser más eficiente.</p>

        <h2 className="text-2xl font-bold text-primary-600 mt-10 mb-4">Cuándo SEO es claramente la mejor inversión</h2>
        <p className="text-gray-700 leading-relaxed mb-4"><strong>Cuando tienes un presupuesto mensual bajo para publicidad:</strong> Si solo puedes invertir 200-400€ mensuales en marketing digital, Google Ads en mercados competitivos generará muy pocos clics por ese presupuesto. El SEO, con la misma inversión mensual pero aplicada a la optimización de la web y el contenido, puede generar un tráfico mucho mayor a los 12 meses.</p>
        <p className="text-gray-700 leading-relaxed mb-4"><strong>Cuando tu negocio tiene un ciclo de vida largo:</strong> Si llevas años en el sector y tienes planes de seguir, el SEO construye un activo que se aprecia con el tiempo. Un negocio que ha invertido en SEO durante 3 años tiene un nivel de visibilidad orgánica que un competidor nuevo tardaría años en alcanzar, incluso con grandes presupuestos.</p>
        <p className="text-gray-700 leading-relaxed mb-4"><strong>Cuando el contenido informativo puede captar clientes en fases tempranas del proceso de compra:</strong> Para servicios donde la decisión de compra tiene un proceso largo (reformas del hogar, servicios legales complejos, consultoras), el SEO con contenido informativo permite llegar al cliente antes de que esté comparando proveedores. Quien educó al cliente es más probable que lo convierta.</p>
        <p className="text-gray-700 leading-relaxed mb-4"><strong>Cuando los CPCs son muy elevados:</strong> En sectores con CPC medio de 10-20€ (abogados, cirugías estéticas, servicios financieros), la publicidad puede ser rentable solo con tasas de conversión muy altas y tickets medios elevados. El SEO, con el mismo coste mensual que una pequeña campaña de Ads, puede generar más tráfico cualificado a los 12 meses.</p>

        <BlogBanner variant="seo" />

        <h2 className="text-2xl font-bold text-primary-600 mt-10 mb-4">La estrategia combinada: cuándo usar los dos a la vez</h2>
        <p className="text-gray-700 leading-relaxed mb-4">Para muchos negocios, la respuesta óptima no es elegir entre SEO o Google Ads, sino combinarlos estratégicamente según el momento del negocio y el tipo de keyword.</p>
        <p className="text-gray-700 leading-relaxed mb-4"><strong>Durante los primeros 6-12 meses:</strong> Google Ads genera resultados inmediatos mientras el SEO madura. El Ads complementa las keywords para las que todavía no posicionas orgánicamente. Una vez que el SEO alcanza posiciones sólidas para un término, puedes reducir o eliminar el gasto en Ads para esa keyword.</p>
        <p className="text-gray-700 leading-relaxed mb-4"><strong>SEO para términos informativos, Ads para términos transaccionales:</strong> Los términos de alta intención de compra ("contratar fontanero urgente Madrid") son los que tienen mayor conversión en Google Ads pero también los más caros. Los términos informativos ("cuánto cuesta arreglar una fuga de agua") tienen menor coste y pueden trabajarse bien con SEO. Esta segmentación permite maximizar el retorno de cada euro invertido.</p>
        <p className="text-gray-700 leading-relaxed mb-4"><strong>Ads para temporadas, SEO para el resto del año:</strong> Un negocio con estacionalidad puede usar Ads en los picos de temporada (cuando cada clic tiene mayor valor) y descansar en SEO el resto del año para mantener un flujo base de clientes.</p>

        <h2 className="text-2xl font-bold text-primary-600 mt-10 mb-4">Matriz de decisión: cuál elegir según tus circunstancias</h2>
        <p className="text-gray-700 leading-relaxed mb-4">Para ayudarte a decidir con claridad, aquí tienes una guía práctica basada en las características más comunes de los negocios que se plantean esta decisión.</p>
        <p className="text-gray-700 leading-relaxed mb-4"><strong>Negocio nuevo, necesidad urgente de clientes, presupuesto de 500€/mes:</strong> Google Ads primero. Usa el período de publicidad para validar qué keywords convierten mejor y empieza a invertir en SEO en paralelo para construir el activo a largo plazo.</p>
        <p className="text-gray-700 leading-relaxed mb-4"><strong>Negocio establecido, presupuesto de 800€/mes, horizonte de 2 años:</strong> SEO como inversión principal. Usa Google Ads de forma puntual para temporadas altas o para probar nuevos servicios.</p>
        <p className="text-gray-700 leading-relaxed mb-4"><strong>Ecommerce con temporada alta (Black Friday, Navidad):</strong> Combinar. SEO para el tráfico orgánico anual, Google Shopping y Ads para multiplicar la visibilidad en temporada alta.</p>
        <p className="text-gray-700 leading-relaxed mb-4"><strong>Servicio muy especializado con pocos clientes potenciales en la zona:</strong> Google Ads con segmentación precisa. El volumen puede ser demasiado bajo para justificar la inversión en SEO.</p>

        <section className="bg-primary-600 text-white rounded-2xl p-8 mt-12">
          <h2 className="text-2xl font-bold mb-4">¿Necesitas ayuda con tu marketing digital?</h2>
          <p className="text-primary-200 mb-6">Cuéntanos tu proyecto y te respondemos en menos de 24 horas.</p>
          <div className="bg-white rounded-xl p-6"><ContactForm formType="blog" /></div>
        </section>
      </div>
      <RelatedArticles category="Estrategia" />
    </>
  );
}
