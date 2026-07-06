import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { RelatedArticles } from "@/components/RelatedArticles";
import { ContactForm } from "@/components/ContactForm";
import { BlogBanner } from "@/components/BlogBanner";

export const metadata: Metadata = {
  title: "Google Shopping para Tiendas Online",
  description: "Guía completa de Google Shopping para ecommerce. Cómo configurar Merchant Center, optimizar el feed de productos y aumentar las ventas con Shopping Ads.",
  alternates: { canonical: "https://www.mktweb360.com/google-shopping-tiendas-online/" },
  openGraph: {
    title: "Google Shopping para Tiendas Online | Mkt Web 360",
    description: "Guía completa de Google Shopping para ecommerce. Cómo configurar Merchant Center, optimizar el feed de productos y aumentar las ventas con Shopping Ads.",
    url: "https://www.mktweb360.com/google-shopping-tiendas-online/",
    images: [{ url: "/og-google-shopping-tiendas-online.jpg", width: 1200, height: 630 }],
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "Google Shopping para Tiendas Online | Mkt Web 360",
  description: "Guía completa de Google Shopping para ecommerce. Cómo configurar Merchant Center, optimizar el feed de productos y aumentar las ventas con Shopping Ads.",
  author: { "@type": "Organization", name: "Mkt Web 360 SLU", url: "https://www.mktweb360.com" },
  publisher: { "@type": "Organization", name: "Mkt Web 360 SLU", logo: { "@type": "ImageObject", url: "https://www.mktweb360.com/logo.png" } },
  datePublished: "2026-06-13",
  dateModified: "2026-06-23",
  image: "https://www.mktweb360.com/og-image.jpg",
  url: "https://www.mktweb360.com/google-shopping-tiendas-online/",
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://www.mktweb360.com/google-shopping-tiendas-online/" },
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <div className="max-w-3xl mx-auto px-4 py-12">
        <Breadcrumbs crumbs={[{ label: "Inicio", href: "/" }, { label: "Blog", href: "/blog/" }, { label: "Google Shopping tiendas online" }]} />
        <p className="text-sm text-accent-500 font-semibold mb-2">Ecommerce</p>
        <h1 className="text-4xl font-bold text-primary-600 mb-4 leading-tight">Google Shopping para tiendas online: cómo aparecer en los resultados de compra y aumentar ventas</h1>
        <p className="text-xl text-gray-500 mb-8 leading-relaxed">Google Shopping es el canal de adquisición más directo para ecommerce: el usuario ve el producto con foto, precio y tienda antes de hacer clic. Esta guía explica cómo configurarlo correctamente y cómo optimizarlo para maximizar el retorno.</p>

        <h2 className="text-2xl font-bold text-primary-600 mt-10 mb-4">Qué es Google Shopping y cómo funciona</h2>
        <p className="text-gray-700 leading-relaxed mb-4">Google Shopping es la sección de Google donde aparecen resultados de productos con foto, precio, nombre de la tienda y puntuación cuando alguien busca algo que puede comprarse online. Cuando buscas "camiseta azul marino talla L" o "auriculares inalámbricos menos de 50€", los primeros resultados que aparecen son frecuentemente una fila de fichas de producto de Google Shopping.</p>
        <p className="text-gray-700 leading-relaxed mb-4">Hay dos formas de aparecer en Google Shopping: los resultados orgánicos gratuitos (fichas de producto gratuitas en Google Search y Google Shopping) y los anuncios de Shopping de pago (Performance Max o Shopping estándar en <Link href="/sem-publicidad-ppc/" className="text-accent-500 hover:underline">Google Ads</Link>). Para los resultados orgánicos gratuitos, basta con tener el feed de productos correctamente configurado en <Link href="/google-merchant-center-ecommerce-guia/" className="text-accent-500 hover:underline">Google Merchant Center</Link>. Para los anuncios de pago, además necesitas vincular Merchant Center con Google Ads y configurar una campaña.</p>
        <p className="text-gray-700 leading-relaxed mb-4">La distinción es importante: muchas tiendas no saben que existe la posibilidad de aparecer en Google Shopping de forma gratuita. Google activó las fichas de producto gratuitas en 2020 como respuesta a la competencia de Amazon, y desde entonces cualquier tienda con Merchant Center puede tener visibilidad orgánica en Shopping sin pagar por clic. Los anuncios de pago amplían esa visibilidad y tienen más control sobre cuándo y dónde apareces.</p>

        <h2 className="text-2xl font-bold text-primary-600 mt-10 mb-4">Configurar Google Merchant Center: paso a paso</h2>
        <p className="text-gray-700 leading-relaxed mb-4">Google Merchant Center (merchants.google.com) es la plataforma donde gestionas el catálogo de productos que alimenta Google Shopping. El proceso de configuración tiene varios pasos que deben completarse en orden.</p>
        <p className="text-gray-700 leading-relaxed mb-4"><strong>1. Crear la cuenta:</strong> Accede con tu cuenta de Google, introduce los datos de tu empresa (nombre, país, zona horaria) y acepta los términos de servicio. Es gratuito.</p>
        <p className="text-gray-700 leading-relaxed mb-4"><strong>2. Verificar y reclamar tu web:</strong> Debes demostrar que eres el propietario del dominio. Puedes hacerlo añadiendo una etiqueta HTML a tu web, subiendo un archivo HTML, o a través de Google Tag Manager o Google Analytics (si ya están configurados). Una vez verificado, "reclamas" el dominio para que sea exclusivamente tuyo en Merchant Center.</p>
        <p className="text-gray-700 leading-relaxed mb-4"><strong>3. Configurar la información del negocio:</strong> Dirección, teléfono, política de devoluciones, información de envíos. Google revisa que estos datos estén correctamente configurados antes de aprobar los anuncios de Shopping. Las políticas de devolución y los costes de envío son obligatorios y deben ser accesibles desde la web.</p>
        <p className="text-gray-700 leading-relaxed mb-4"><strong>4. Crear el feed de productos:</strong> El feed es el archivo (CSV, XML o Google Sheets) que contiene la información de todos tus productos. Puedes crearlo manualmente, generarlo con un plugin de WooCommerce (como WooCommerce Google Feed Manager) o usar el rastreo automático de Merchant Center si tu tienda está bien estructurada.</p>

        <BlogBanner variant="ecommerce" />

        <h2 className="text-2xl font-bold text-primary-600 mt-10 mb-4">Cómo optimizar el feed de productos para Google Shopping</h2>
        <p className="text-gray-700 leading-relaxed mb-4">La calidad del feed de productos determina directamente el rendimiento en Google Shopping. Un feed mal optimizado genera menos impresiones, peores posiciones y mayor coste por clic en los anuncios de pago.</p>
        <p className="text-gray-700 leading-relaxed mb-4"><strong>Títulos de producto:</strong> Son el elemento más importante del feed. Google los usa para determinar para qué consultas muestra tu producto. Un buen título incluye: marca + tipo de producto + atributos principales (talla, color, material, modelo). En lugar de "Camiseta básica", escribe "Camiseta básica algodón orgánico azul marino Talla M". El límite es 150 caracteres.</p>
        <p className="text-gray-700 leading-relaxed mb-4"><strong>Imágenes:</strong> Las imágenes son lo primero que ve el usuario en Google Shopping. Deben tener fondo blanco o neutro, mostrar el producto claramente, tener buena resolución (mínimo 800x800px) y no incluir texto ni watermarks. Las imágenes de estilo de vida (producto en contexto) funcionan bien en algunos sectores pero Google las prefiere con fondo blanco para Shopping.</p>
        <p className="text-gray-700 leading-relaxed mb-4"><strong>Precios competitivos:</strong> Google Shopping muestra el precio junto a la foto, y los usuarios lo comparan directamente. Si tu precio es significativamente mayor que el de competidores para el mismo producto, el CTR será bajo aunque tu anuncio aparezca. La competitividad de precios es un factor de rendimiento directo.</p>
        <p className="text-gray-700 leading-relaxed mb-4"><strong>GTINs y MPNs:</strong> Para productos de marca (que tienen un código de barras o número de pieza), incluir el GTIN (EAN/UPC) en el feed mejora la relevancia y puede habilitar los "mejor precio" de Google. Para productos propios sin código de barras, establece el campo <code>identifier_exists</code> como false.</p>

        <h2 className="text-2xl font-bold text-primary-600 mt-10 mb-4">Campañas de Google Ads Shopping: Performance Max vs Shopping estándar</h2>
        <p className="text-gray-700 leading-relaxed mb-4">Google ha impulsado en los últimos años las campañas Performance Max (PMax) como sustituto de las campañas de Shopping estándar. PMax usa machine learning para optimizar la inversión entre múltiples canales (Search, Display, YouTube, Shopping, Gmail, Maps) de forma automática.</p>
        <p className="text-gray-700 leading-relaxed mb-4">Para la mayoría de tiendas que empiezan con Google Shopping, PMax es la opción recomendada porque requiere menos configuración técnica y el algoritmo de Google tiene más señales para optimizar. La desventaja es la menor transparencia: es difícil saber exactamente dónde se gasta el presupuesto y para qué términos concretos estás apareciendo.</p>
        <p className="text-gray-700 leading-relaxed mb-4">Las campañas de Shopping estándar siguen disponibles y tienen más control: puedes segmentar por categorías de producto, establecer prioridades entre campañas y ver exactamente las consultas que activan tus anuncios. Para tiendas con catálogos grandes y experiencia en Google Ads, la combinación de PMax para la red amplia y Shopping estándar para los términos más relevantes puede maximizar el retorno.</p>

        <h2 className="text-2xl font-bold text-primary-600 mt-10 mb-4">Métricas clave para medir el rendimiento de Google Shopping</h2>
        <p className="text-gray-700 leading-relaxed mb-4">Las métricas más importantes para evaluar el rendimiento de Google Shopping son: ROAS (Return on Ad Spend, ingresos generados por cada euro invertido en publicidad), CTR (porcentaje de clics sobre impresiones), CPC medio (coste por clic medio) y tasa de conversión de los clics generados.</p>
        <p className="text-gray-700 leading-relaxed mb-4">Un ROAS de 4x (4€ de ingresos por cada 1€ invertido) suele considerarse el umbral mínimo de rentabilidad para la mayoría de sectores con márgenes del 25-30%. Para sectores con márgenes más altos, el umbral de ROAS puede ser menor; para sectores con márgenes muy ajustados, necesitarás un ROAS de 8x o más para que sea rentable después de costes.</p>
        <p className="text-gray-700 leading-relaxed mb-4">Analiza el rendimiento por categoría de producto: habitualmente el 20% de los productos genera el 80% de las ventas en Google Shopping. Concentra la inversión en los productos con mejor ROAS e identifica los productos con alto CTR pero baja conversión (lo que indica un problema en la página de producto o en el precio) para optimizarlos. Si tu tienda aún no está bien estructurada para la conversión, revisa primero el <Link href="/diseno-de-paginas-web/diseno-tiendas-online/" className="text-accent-500 hover:underline">diseño y configuración de tu tienda online</Link>.</p>

        <section className="bg-primary-600 text-white rounded-2xl p-8 mt-12">
          <h2 className="text-2xl font-bold mb-4">¿Necesitas ayuda con tu marketing digital?</h2>
          <p className="text-primary-200 mb-6">Cuéntanos tu proyecto y te respondemos en menos de 24 horas.</p>
          <div className="bg-white rounded-xl p-6"><ContactForm formType="blog" /></div>
        </section>
      </div>
      <RelatedArticles category="Ecommerce" />
    </>
  );
}
