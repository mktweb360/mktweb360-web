import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { RelatedArticles } from "@/components/RelatedArticles";
import { ContactForm } from "@/components/ContactForm";
import { BlogBanner } from "@/components/BlogBanner";

export const metadata: Metadata = {
  title: "Cómo Migrar de Shopify a WooCommerce Sin Perder tu Tienda ni tu SEO",
  description: "Guía completa para migrar de Shopify a WooCommerce. Qué datos migrar, cómo preservar el SEO, redireccionamientos y comparativa de costes a largo plazo.",
  alternates: { canonical: "https://www.mktweb360.com/migrar-shopify-woocommerce/" },
  openGraph: {
    title: "Migrar de Shopify a WooCommerce Sin Perder SEO ni Datos | Mkt Web 360",
    description: "Guía completa para migrar de Shopify a WooCommerce. Qué datos migrar, cómo preservar el SEO, redireccionamientos y comparativa de costes a largo plazo.",
    url: "https://www.mktweb360.com/migrar-shopify-woocommerce/",
    images: [{ url: "/og-migrar-shopify-woocommerce.jpg", width: 1200, height: 630 }],
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "Cómo Migrar de Shopify a WooCommerce Sin Perder tu Tienda ni tu SEO | Mkt Web 360",
  description: "Guía completa para migrar de Shopify a WooCommerce. Qué datos migrar, cómo preservar el SEO, redireccionamientos y comparativa de costes a largo plazo.",
  author: { "@type": "Organization", name: "Mkt Web 360 SLU", url: "https://www.mktweb360.com" },
  publisher: { "@type": "Organization", name: "Mkt Web 360 SLU", logo: { "@type": "ImageObject", url: "https://www.mktweb360.com/logo.png" } },
  datePublished: "2026-06-13",
  dateModified: "2026-06-23",
  image: "https://www.mktweb360.com/og-image.jpg",
  url: "https://www.mktweb360.com/migrar-shopify-woocommerce/",
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://www.mktweb360.com/migrar-shopify-woocommerce/" },
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <div className="max-w-3xl mx-auto px-4 py-12">
        <Breadcrumbs crumbs={[{ label: "Inicio", href: "/" }, { label: "Blog", href: "/blog/" }, { label: "Migrar Shopify a WooCommerce" }]} />
        <p className="text-sm text-accent-500 font-semibold mb-2">Ecommerce</p>
        <h1 className="text-4xl font-bold text-primary-600 mb-4 leading-tight">Cómo migrar de Shopify a WooCommerce sin perder tu tienda ni tu posicionamiento</h1>
        <p className="text-xl text-gray-500 mb-8 leading-relaxed">Muchos propietarios de tiendas Shopify llegan a un punto en que los costes mensuales y las comisiones dejan de tener sentido. Migrar a WooCommerce es la solución, pero hacerlo mal puede destruir años de SEO. Esta guía explica cómo hacerlo bien.</p>

        <h2 className="text-2xl font-bold text-primary-600 mt-10 mb-4">Por qué muchas tiendas Shopify migran a WooCommerce</h2>
        <p className="text-gray-700 leading-relaxed mb-4">Shopify es una plataforma excelente para empezar: intuitiva, fiable y con pocos requisitos técnicos. Pero a medida que el negocio crece, los costes se vuelven difíciles de justificar. En el plan Basic, la tarifa mensual son 39€. Si además usas la pasarela de pago propia de Shopify Payments, hay un coste adicional por transacción. Si usas pasarela externa, Shopify cobra hasta un 2% por venta.</p>
        <p className="text-gray-700 leading-relaxed mb-4">Para una tienda con 3.000€ de ventas mensuales, ese 2% son 60€ al mes en comisiones, más los 39€ de licencia: casi 100€ mensuales, 1.200€ anuales. Con WooCommerce ese mismo coste se reduce a la tarifa de hosting (15-30€/mes) sin comisiones por venta, amortizando el coste de la migración en menos de 12 meses.</p>
        <p className="text-gray-700 leading-relaxed mb-4">Pero el ahorro en costes no es la única razón. WooCommerce, al estar basado en WordPress, ofrece mayor flexibilidad para personalizar el diseño sin pagar por temas premium, mayor control sobre el SEO técnico, acceso a un ecosistema de plugins más amplio y libertad para elegir el proveedor de hosting sin estar atado a la infraestructura de Shopify.</p>

        <h2 className="text-2xl font-bold text-primary-600 mt-10 mb-4">Qué puedes exportar de Shopify y en qué formato</h2>
        <p className="text-gray-700 leading-relaxed mb-4">Shopify permite exportar los datos principales de tu tienda desde el panel de administración. Las exportaciones disponibles son: productos (con variantes, precios, imágenes e inventario), clientes (con datos de contacto y direcciones) y pedidos (con historial de transacciones).</p>
        <p className="text-gray-700 leading-relaxed mb-4">Los formatos de exportación de Shopify son CSV para productos y clientes, y CSV o JSON para pedidos. El CSV de productos de Shopify tiene una estructura propia que no coincide directamente con el formato de importación de WooCommerce, así que necesitarás transformar el archivo antes de importarlo. Hay herramientas online específicas para esta conversión, o se puede hacer con una hoja de cálculo bien estructurada.</p>
        <p className="text-gray-700 leading-relaxed mb-4">Las imágenes de productos en Shopify están alojadas en los servidores de Shopify (CDN de Shopify). Cuando migres, estas imágenes dejarán de estar disponibles en esas URLs, así que es necesario descargarlas y resubirlas al servidor de la nueva tienda WooCommerce. Este proceso puede automatizarse si las URLs de imagen aparecen en el CSV de exportación.</p>

        <h2 className="text-2xl font-bold text-primary-600 mt-10 mb-4">El reto del SEO: cómo son las URLs en Shopify vs WooCommerce</h2>
        <p className="text-gray-700 leading-relaxed mb-4">Uno de los mayores problemas de la migración Shopify → WooCommerce es la diferencia en la estructura de URLs. Shopify usa un formato fijo para los productos: <code>/products/nombre-del-producto</code>. WooCommerce por defecto usa <code>/producto/nombre-del-producto</code> (o <code>/shop/nombre-del-producto</code> según la configuración).</p>
        <p className="text-gray-700 leading-relaxed mb-4">Si los productos de tu tienda Shopify tienen enlaces entrantes (backlinks) desde otras webs o han acumulado autoridad en Google bajo las URLs de Shopify, cambiar a WooCommerce sin redireccionamientos provocará errores 404 y pérdida de SEO. La solución es configurar redirecciones 301 desde cada URL antigua de Shopify a la URL equivalente en WooCommerce.</p>
        <p className="text-gray-700 leading-relaxed mb-4">Para minimizar el problema, configura WooCommerce para usar una estructura de URLs similar a Shopify. En Ajustes → Permalinks → Personalizar puedes definir <code>/products/%postname%/</code> para replicar exactamente la estructura de Shopify. Si logras que las URLs sean idénticas, el impacto SEO de la migración será mínimo.</p>
        <p className="text-gray-700 leading-relaxed mb-4">Aunque consigas URLs idénticas, revisa si Shopify añadía el prefijo <code>/collections/</code> a las URLs de categorías. WooCommerce usa <code>/product-category/</code> por defecto. Para las páginas de categorías también necesitarás redirecciones o una configuración de permalink compatible.</p>

        <BlogBanner variant="ecommerce" />

        <h2 className="text-2xl font-bold text-primary-600 mt-10 mb-4">Proceso de migración paso a paso</h2>
        <p className="text-gray-700 leading-relaxed mb-4"><strong>Semana 1 — Preparación:</strong> Exporta todos los datos de Shopify (productos, clientes, pedidos). Documenta las URLs de todos los productos y categorías con tráfico orgánico (desde Google Search Console). Instala WooCommerce en un entorno de staging.</p>
        <p className="text-gray-700 leading-relaxed mb-4"><strong>Semanas 2-3 — Importación en staging:</strong> Transforma el CSV de Shopify al formato de WooCommerce e importa los productos. Configura categorías, métodos de pago (Stripe, Bizum, transferencia), métodos de envío, impuestos y la apariencia de la tienda. Importa clientes.</p>
        <p className="text-gray-700 leading-relaxed mb-4"><strong>Semana 4 — Testing:</strong> Realiza compras de prueba con distintos métodos de pago, verifica que los emails de confirmación funcionan, comprueba que el stock se actualiza correctamente y que todas las páginas cargan sin errores.</p>
        <p className="text-gray-700 leading-relaxed mb-4"><strong>Día del lanzamiento:</strong> Apunta el dominio a los servidores del nuevo hosting, activa las redirecciones 301, envía el nuevo sitemap a Google Search Console y deja la tienda Shopify activa redireccionando (no la canceles inmediatamente — espera 2-3 meses hasta que Google haya indexado las nuevas URLs).</p>

        <h2 className="text-2xl font-bold text-primary-600 mt-10 mb-4">Configuración post-migración imprescindible en WooCommerce</h2>
        <p className="text-gray-700 leading-relaxed mb-4">Una vez migrada la tienda, hay configuraciones que no existen en Shopify y que debes completar en WooCommerce para que la tienda funcione correctamente. Las más importantes son: la configuración del IVA (WooCommerce tiene un sistema de gestión de impuestos más granular que Shopify), la configuración del inventario bajo demanda, y la integración con Google Merchant Center para mantener Google Shopping activo.</p>
        <p className="text-gray-700 leading-relaxed mb-4">Para el SEO, instala un plugin de SEO como Yoast SEO o Rank Math para gestionar metaetiquetas, sitemaps y datos estructurados. Shopify los manejaba automáticamente de forma básica; en WooCommerce tendrás más control pero también más responsabilidad de configurarlos correctamente.</p>
        <p className="text-gray-700 leading-relaxed mb-4">Por último, verifica que la velocidad de la nueva tienda es comparable o superior a la de Shopify (que tiene una CDN optimizada). Shopify es muy rápido por defecto; WooCommerce en un hosting de calidad puede serlo igual, pero requiere configuración adicional de caché y optimización de imágenes.</p>

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
