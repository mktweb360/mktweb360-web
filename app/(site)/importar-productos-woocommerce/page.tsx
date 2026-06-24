import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { RelatedArticles } from "@/components/RelatedArticles";
import { ContactForm } from "@/components/ContactForm";
import { BlogBanner } from "@/components/BlogBanner";

export const metadata: Metadata = {
  title: "Cómo Importar Productos en WooCommerce con CSV: Guía Paso a Paso | Mkt Web 360",
  description: "Aprende a importar productos en WooCommerce usando archivos CSV. Formato correcto, errores comunes y cómo subir miles de productos sin trabajo manual.",
  alternates: { canonical: "https://www.mktweb360.com/importar-productos-woocommerce/" },
  openGraph: {
    title: "Cómo Importar Productos en WooCommerce con CSV | Mkt Web 360",
    description: "Aprende a importar productos en WooCommerce usando archivos CSV. Formato correcto, errores comunes y cómo subir miles de productos sin trabajo manual.",
    url: "https://www.mktweb360.com/importar-productos-woocommerce/",
    images: [{ url: "/og-importar-productos-woocommerce.jpg", width: 1200, height: 630 }],
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "Cómo Importar Productos en WooCommerce con CSV: Guía Paso a Paso | Mkt Web 360",
  description: "Aprende a importar productos en WooCommerce usando archivos CSV. Formato correcto, errores comunes y cómo subir miles de productos sin trabajo manual.",
  author: { "@type": "Organization", name: "Mkt Web 360 SLU", url: "https://www.mktweb360.com" },
  publisher: { "@type": "Organization", name: "Mkt Web 360 SLU", logo: { "@type": "ImageObject", url: "https://www.mktweb360.com/logo.png" } },
  datePublished: "2026-06-13",
  dateModified: "2026-06-23",
  image: "https://www.mktweb360.com/og-image.jpg",
  url: "https://www.mktweb360.com/importar-productos-woocommerce/",
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://www.mktweb360.com/importar-productos-woocommerce/" },
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <div className="max-w-3xl mx-auto px-4 py-12">
        <Breadcrumbs crumbs={[{ label: "Inicio", href: "/" }, { label: "Blog", href: "/blog/" }, { label: "Importar productos WooCommerce" }]} />
        <p className="text-sm text-accent-500 font-semibold mb-2">Ecommerce</p>
        <h1 className="text-4xl font-bold text-primary-600 mb-4 leading-tight">Cómo importar productos en WooCommerce con CSV: guía paso a paso sin errores</h1>
        <p className="text-xl text-gray-500 mb-8 leading-relaxed">Subir 500 productos uno a uno llevaría semanas. La importación masiva con CSV lo hace en minutos, pero hay que preparar bien el archivo. Esta guía explica el proceso completo para que salga a la primera.</p>

        <h2 className="text-2xl font-bold text-primary-600 mt-10 mb-4">Por qué usar CSV para importar productos en WooCommerce</h2>
        <p className="text-gray-700 leading-relaxed mb-4">WooCommerce incluye de forma nativa un importador de productos basado en archivos CSV (Comma Separated Values). Es la forma más eficiente de cargar catálogos grandes, actualizar precios de forma masiva o migrar productos desde otra plataforma como Shopify, Prestashop o una hoja de cálculo Excel.</p>
        <p className="text-gray-700 leading-relaxed mb-4">La alternativa — introducir cada producto manualmente desde el panel — tiene sentido para catálogos pequeños de 10-20 productos, pero a partir de 50 artículos el tiempo invertido se dispara. Si además necesitas mantener precios actualizados con frecuencia o trabajas con un proveedor que te envía tarifas en Excel, el flujo de trabajo basado en CSV se convierte en imprescindible.</p>
        <p className="text-gray-700 leading-relaxed mb-4">El importador nativo de WooCommerce (disponible desde la versión 3.1) funciona bien para la mayoría de casos. Para necesidades más avanzadas — como importación de imágenes desde URL, productos variables con muchas combinaciones o sincronización automática con un ERP — existen plugins como WP All Import o Product Import Export for WooCommerce que amplían las capacidades.</p>

        <h2 className="text-2xl font-bold text-primary-600 mt-10 mb-4">Cómo preparar el archivo CSV correctamente</h2>
        <p className="text-gray-700 leading-relaxed mb-4">El 90% de los problemas en la importación de WooCommerce vienen de un CSV mal preparado. Antes de importar, descarga la plantilla de ejemplo que ofrece el propio WooCommerce: ve a Productos → Importar → Descargar plantilla de muestra. Esto te da el formato exacto de columnas que espera el sistema.</p>
        <p className="text-gray-700 leading-relaxed mb-4">Las columnas más importantes son: <strong>ID</strong> (para actualizar productos existentes; déjalo vacío para productos nuevos), <strong>Type</strong> (simple, variable, grouped, external), <strong>SKU</strong> (referencia única del producto), <strong>Name</strong> (nombre del producto), <strong>Published</strong> (1 para publicado, 0 para borrador), <strong>Regular price</strong> (precio sin IVA si así lo configuras), <strong>Stock</strong> (cantidad en stock), <strong>Categories</strong> (categorías separadas por {'">"'}), <strong>Images</strong> (URLs de las imágenes separadas por coma).</p>
        <p className="text-gray-700 leading-relaxed mb-4">Un error frecuente es usar comas dentro de los valores de texto sin encerrarlos entre comillas dobles. Si el nombre de un producto contiene una coma — por ejemplo "Silla de escritorio, regulable en altura" — debes escribirlo en el CSV como: <code>"Silla de escritorio, regulable en altura"</code>. Si no, el importador interpretará la coma como un separador de columna y el dato quedará cortado.</p>
        <p className="text-gray-700 leading-relaxed mb-4">La codificación del archivo debe ser UTF-8. Si usas Excel y guardas directamente como CSV, puede que genere el archivo en codificación ANSI o Windows-1252, lo que provoca que los caracteres especiales (ñ, tildes, ü) aparezcan incorrectamente. Para forzar UTF-8 en Excel: Archivo → Guardar como → CSV UTF-8 (con BOM). En LibreOffice Calc esta opción es más directa.</p>

        <h2 className="text-2xl font-bold text-primary-600 mt-10 mb-4">Proceso de importación en WooCommerce paso a paso</h2>
        <p className="text-gray-700 leading-relaxed mb-4">Con el CSV listo, ve a tu panel de WordPress → Productos → Importar. El asistente de importación tiene tres pasos: subir el archivo, mapear columnas y ejecutar la importación.</p>
        <p className="text-gray-700 leading-relaxed mb-4"><strong>Paso 1 — Subir el archivo:</strong> Selecciona tu CSV. Si el delimitador no es la coma estándar (algunos CSV usan punto y coma, especialmente los generados en español), puedes especificarlo en esta pantalla. Marca la opción "Actualizar los productos existentes" si quieres que los productos con SKU coincidente se actualicen en lugar de duplicarse.</p>
        <p className="text-gray-700 leading-relaxed mb-4"><strong>Paso 2 — Mapear columnas:</strong> WooCommerce muestra una tabla donde en la columna izquierda aparecen las cabeceras de tu CSV y en la derecha puedes seleccionar a qué campo de WooCommerce corresponde cada una. Si usaste la plantilla oficial, el mapeo es automático. Si usas un CSV propio o exportado de otro sistema, aquí es donde asignas manualmente cada columna.</p>
        <p className="text-gray-700 leading-relaxed mb-4"><strong>Paso 3 — Ejecutar:</strong> WooCommerce procesa los productos y muestra un resumen al finalizar: cuántos se han importado, cuántos actualizados y si hubo algún error. Los errores más comunes son SKUs duplicados, precios con formato incorrecto (no uses el símbolo € en el campo de precio, solo el número) y URLs de imágenes inaccesibles.</p>

        <BlogBanner variant="ecommerce" />

        <h2 className="text-2xl font-bold text-primary-600 mt-10 mb-4">Cómo importar productos variables con atributos</h2>
        <p className="text-gray-700 leading-relaxed mb-4">Los productos variables (con variantes de talla, color, etc.) requieren una estructura especial en el CSV. Hay un producto padre de tipo "variable" y tantos productos hijo de tipo "variation" como combinaciones existan. El SKU del producto padre debe coincidir con el campo "Parent" de cada variación.</p>
        <p className="text-gray-700 leading-relaxed mb-4">Por ejemplo, una camiseta en tres tallas (S, M, L) y dos colores (blanco, negro) generaría un producto padre y 6 variaciones (S-blanco, S-negro, M-blanco, M-negro, L-blanco, L-negro). Cada variación tiene su propio precio, stock y opcionalmente su propio SKU e imagen.</p>
        <p className="text-gray-700 leading-relaxed mb-4">Los atributos se definen en el producto padre con columnas del tipo <code>Attribute 1 name</code>, <code>Attribute 1 value(s)</code> y <code>Attribute 1 visible</code>. En las variaciones, las columnas son <code>Attribute 1 value(s)</code> con el valor específico de esa variación. Es la parte más compleja del CSV de WooCommerce y la que más errores genera si no se sigue la estructura exacta.</p>

        <h2 className="text-2xl font-bold text-primary-600 mt-10 mb-4">Errores frecuentes y cómo solucionarlos</h2>
        <p className="text-gray-700 leading-relaxed mb-4"><strong>"No se puede procesar este archivo CSV":</strong> Suele indicar un problema de codificación. Guarda el archivo como UTF-8 y vuelve a intentarlo. Puedes verificar la codificación abriendo el archivo con un editor de texto como Notepad++ y comprobando la barra inferior.</p>
        <p className="text-gray-700 leading-relaxed mb-4"><strong>Las imágenes no se importan:</strong> El importador nativo solo soporta imágenes alojadas en URLs accesibles públicamente. Si las imágenes están en un servidor local o requieren autenticación, no se importarán. Primero sube las imágenes a tu servidor (por FTP o Media Library) y luego usa las URLs resultantes en el CSV.</p>
        <p className="text-gray-700 leading-relaxed mb-4"><strong>Los precios aparecen a 0:</strong> Comprueba que no haya caracteres extraños en los campos de precio. Solo números y punto decimal (nunca coma). Si el precio tiene descuento, usa "Sale price" para el precio rebajado y "Regular price" para el original.</p>
        <p className="text-gray-700 leading-relaxed mb-4"><strong>Las categorías no se crean:</strong> Si las categorías del CSV no existen en WooCommerce, el importador puede crearlas automáticamente o ignorarlas según la configuración. Usa el separador {'">"'} para jerarquía de categorías: "Ropa {'>'} Camisetas".</p>

        <h2 className="text-2xl font-bold text-primary-600 mt-10 mb-4">Cuándo usar un plugin en lugar del importador nativo</h2>
        <p className="text-gray-700 leading-relaxed mb-4">El importador nativo de WooCommerce es suficiente para la mayoría de tiendas, pero hay situaciones donde un plugin especializado aporta más valor. Si necesitas importar más de 5.000 productos de forma regular, el importador nativo puede tener problemas de tiempo de ejecución (timeout). Plugins como WP All Import procesan en lotes y no tienen este problema.</p>
        <p className="text-gray-700 leading-relaxed mb-4">Si tu proveedor te envía un XML en lugar de CSV, o si necesitas mapear campos de un ERP a campos personalizados de WooCommerce, un plugin de importación avanzada te dará la flexibilidad necesaria. También son útiles si necesitas programar importaciones automáticas — por ejemplo, actualizar precios y stock cada noche desde el catálogo de tu proveedor.</p>
        <p className="text-gray-700 leading-relaxed mb-4">Para catálogos que provienen de plataformas como Shopify o Prestashop, existen plugins específicos de migración que entienden el formato de origen y lo traducen correctamente a WooCommerce, incluyendo pedidos, clientes e historial de compras — no solo productos.</p>

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
