import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { RelatedArticles } from "@/components/RelatedArticles";
import { ContactForm } from "@/components/ContactForm";
import { BlogBanner } from "@/components/BlogBanner";

export const metadata: Metadata = {
  title: "Cómo Migrar tu Tienda Online Sin Perder Datos, Pedidos ni SEO | Mkt Web 360",
  description: "Guía completa para migrar una tienda online a WooCommerce sin perder productos, clientes, pedidos ni posicionamiento en Google. Proceso y errores a evitar.",
  alternates: { canonical: "https://www.mktweb360.com/migrar-tienda-online-sin-perder-datos/" },
  openGraph: {
    title: "Migrar Tienda Online Sin Perder Datos ni SEO | Mkt Web 360",
    description: "Guía completa para migrar una tienda online a WooCommerce sin perder productos, clientes, pedidos ni posicionamiento en Google.",
    url: "https://www.mktweb360.com/migrar-tienda-online-sin-perder-datos/",
  },
};

export default function Page() {
  return (
    <>
      <div className="max-w-3xl mx-auto px-4 py-12">
        <Breadcrumbs crumbs={[{ label: "Inicio", href: "/" }, { label: "Blog", href: "/blog/" }, { label: "Migrar tienda online sin perder datos" }]} />
        <p className="text-sm text-accent-500 font-semibold mb-2">Ecommerce</p>
        <h1 className="text-4xl font-bold text-primary-600 mb-4 leading-tight">Cómo migrar tu tienda online sin perder datos, pedidos ni posicionamiento en Google</h1>
        <p className="text-xl text-gray-500 mb-8 leading-relaxed">Cambiar de plataforma de ecommerce es una de las decisiones más delicadas para un negocio online. Una migración mal planificada puede destruir años de SEO y perder datos críticos. Esta guía explica cómo hacerlo bien.</p>

        <h2 className="text-2xl font-bold text-primary-600 mt-10 mb-4">Cuándo tiene sentido migrar tu tienda a otra plataforma</h2>
        <p className="text-gray-700 leading-relaxed mb-4">No todas las migraciones están justificadas. Antes de emprender el proceso, conviene tener claro por qué te cambias y asegurarte de que el problema real se resolverá con la migración y no con una optimización de la plataforma actual.</p>
        <p className="text-gray-700 leading-relaxed mb-4">Las razones más válidas para migrar son: costes insostenibles (comisiones por venta + licencia mensual que superan el ahorro de montar una solución propia), limitaciones técnicas que impiden funcionalidades necesarias para el negocio (por ejemplo, necesitar un marketplace multi-vendedor o precios B2B), problemas graves de rendimiento que no tienen solución en la plataforma actual, o la decisión de consolidar todo en un ecosistema WordPress/WooCommerce ya usado para la web corporativa.</p>
        <p className="text-gray-700 leading-relaxed mb-4">Las razones menos válidas: el diseño "parece anticuado" (un rediseño sin migrar puede resolver esto con menos riesgo), "la competencia usa otra plataforma" (no es un indicador de que sea mejor para tu caso), o "queremos empezar de cero" (empezar de cero implica perder el SEO acumulado, que puede valer miles de euros en tráfico orgánico mensual).</p>

        <h2 className="text-2xl font-bold text-primary-600 mt-10 mb-4">Qué datos hay que migrar y cómo priorizarlos</h2>
        <p className="text-gray-700 leading-relaxed mb-4">Una migración completa de ecommerce implica mover varios tipos de datos, cada uno con su complejidad y riesgo. El orden de prioridad recomendado es:</p>
        <p className="text-gray-700 leading-relaxed mb-4"><strong>1. Productos y catálogo (crítico):</strong> Nombre, descripción, precio, SKU, categorías, atributos, variantes e imágenes. Sin el catálogo la tienda no puede operar. La migración de imágenes es el punto más lento si hay miles de productos.</p>
        <p className="text-gray-700 leading-relaxed mb-4"><strong>2. Clientes (importante):</strong> Email, nombre, dirección de facturación y envío. Las contraseñas no pueden migrarse directamente (están hasheadas de forma incompatible entre plataformas), así que los clientes deberán restablecer su contraseña la primera vez que inicien sesión.</p>
        <p className="text-gray-700 leading-relaxed mb-4"><strong>3. Pedidos históricos (importante):</strong> Permiten mantener el historial de compras de cada cliente y son necesarios para análisis de negocio, garantías y devoluciones. El nivel de detalle migrable depende de la plataforma de origen.</p>
        <p className="text-gray-700 leading-relaxed mb-4"><strong>4. Reseñas de productos (deseable):</strong> Las reseñas acumuladas son prueba social valiosa. Muchas plataformas permiten exportarlas, pero el formato puede requerir transformación.</p>
        <p className="text-gray-700 leading-relaxed mb-4"><strong>5. URLs y estructura de categorías (crítico para SEO):</strong> Las URLs de productos y categorías son las que están indexadas en Google. Si cambian sin redirecciones, perderás todo el posicionamiento acumulado.</p>

        <h2 className="text-2xl font-bold text-primary-600 mt-10 mb-4">Cómo preservar el SEO durante la migración</h2>
        <p className="text-gray-700 leading-relaxed mb-4">La pérdida de SEO es el riesgo más grave de una migración de tienda online. He visto tiendas perder el 60-80% de su tráfico orgánico por una migración mal gestionada, y recuperarlo puede llevar entre 6 y 18 meses. Evitarlo requiere trabajo específico, no se hace solo.</p>
        <p className="text-gray-700 leading-relaxed mb-4">El primer paso es rastrear todas las URLs actuales que tienen tráfico orgánico. Usa Google Search Console (descarga el informe de Rendimiento con las URLs que generan impresiones) y Screaming Frog para un mapa completo de la estructura de URLs. Esto te da la lista de URLs que debes redirigir sí o sí.</p>
        <p className="text-gray-700 leading-relaxed mb-4">El segundo paso es mapear cada URL antigua a su equivalente en la nueva plataforma. Si la estructura de URLs no puede replicarse exactamente (lo ideal), define redirecciones 301 permanentes de las URLs antiguas a las nuevas. Las redirecciones 301 le dicen a Google que la página se ha movido permanentemente y transfieren el "valor SEO" (autoridad de enlace) a la nueva URL.</p>
        <p className="text-gray-700 leading-relaxed mb-4">Una vez lanzada la nueva tienda, envía inmediatamente el nuevo sitemap a Google Search Console y comprueba que no hay errores de rastreo. Monitoriza el tráfico orgánico durante las primeras semanas — una caída temporal de 10-20% es normal; una caída de más del 30% indica que algo en las redirecciones no está funcionando.</p>

        <BlogBanner variant="ecommerce" />

        <h2 className="text-2xl font-bold text-primary-600 mt-10 mb-4">Plan de migración: fases y plazos realistas</h2>
        <p className="text-gray-700 leading-relaxed mb-4">Una migración bien ejecutada tiene fases claras. Intentar hacerlo todo en un fin de semana es una de las causas más frecuentes de problemas graves.</p>
        <p className="text-gray-700 leading-relaxed mb-4"><strong>Fase 1 — Preparación (1-2 semanas):</strong> Exportar todos los datos de la plataforma actual, mapear URLs para redirecciones, preparar el entorno de staging (un servidor de pruebas donde montar la nueva tienda antes de ponerla en producción) y definir la fecha de lanzamiento.</p>
        <p className="text-gray-700 leading-relaxed mb-4"><strong>Fase 2 — Desarrollo en staging (2-6 semanas según tamaño del catálogo):</strong> Importar productos, configurar pasarela de pago, métodos de envío, impuestos y lógica de negocio. Probar el proceso de compra completo desde distintos dispositivos y países si vendes internacionalmente.</p>
        <p className="text-gray-700 leading-relaxed mb-4"><strong>Fase 3 — Lanzamiento:</strong> Poner la nueva tienda en producción, activar las redirecciones 301, enviar el nuevo sitemap a Google Search Console y deshabilitar la tienda antigua (mantenerla activa redireccionando las URLs, no simplemente apagándola).</p>
        <p className="text-gray-700 leading-relaxed mb-4"><strong>Fase 4 — Monitorización post-lanzamiento (4-8 semanas):</strong> Seguimiento diario del tráfico orgánico, errores 404 en Search Console, rendimiento del proceso de compra y cualquier incidencia reportada por clientes.</p>

        <h2 className="text-2xl font-bold text-primary-600 mt-10 mb-4">Errores que destruyen migraciones de ecommerce</h2>
        <p className="text-gray-700 leading-relaxed mb-4"><strong>Lanzar sin pruebas suficientes:</strong> Un proceso de compra que no funciona en móvil, una pasarela de pago mal configurada o impuestos incorrectos pueden generar pérdidas inmediatas y problemas legales. Prueba el proceso completo desde inicio hasta confirmación de pedido antes de lanzar.</p>
        <p className="text-gray-700 leading-relaxed mb-4"><strong>No comunicar el cambio a los clientes:</strong> Los clientes que tenían cuenta necesitan saber que deben restablecer su contraseña. Un email de comunicación previo al lanzamiento reduce la confusión y las llamadas de soporte.</p>
        <p className="text-gray-700 leading-relaxed mb-4"><strong>Migrar en temporada alta:</strong> Evita planificar la migración en Navidad, Black Friday, rebajas o cualquier periodo de alta demanda de tu sector. Una incidencia técnica en esas fechas multiplica el impacto económico.</p>
        <p className="text-gray-700 leading-relaxed mb-4"><strong>No hacer backup completo antes del lanzamiento:</strong> Siempre, sin excepción, realiza un backup completo de la tienda actual justo antes del lanzamiento. Si algo va mal en las primeras horas, poder revertir al estado anterior es invaluable.</p>

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
