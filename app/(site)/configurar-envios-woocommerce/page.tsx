import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { RelatedArticles } from "@/components/RelatedArticles";
import { ContactForm } from "@/components/ContactForm";
import { BlogBanner } from "@/components/BlogBanner";

export const metadata: Metadata = {
  title: "Cómo Configurar los Envíos en WooCommerce para España: Guía Completa",
  description: "Guía para configurar métodos de envío en WooCommerce. Zonas de envío, tarifas planas, envío gratis a partir de importe, integración con Correos, MRW y Correos Express.",
  alternates: { canonical: "https://www.mktweb360.com/configurar-envios-woocommerce/" },
  openGraph: {
    title: "Cómo Configurar los Envíos en WooCommerce para España | Mkt Web 360",
    description: "Guía para configurar métodos de envío en WooCommerce. Zonas de envío, tarifas planas, envío gratis y integración con transportistas en España.",
    url: "https://www.mktweb360.com/configurar-envios-woocommerce/",
    images: [{ url: "/og-configurar-envios-woocommerce.jpg", width: 1200, height: 630 }],
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "Cómo Configurar los Envíos en WooCommerce para España: Guía Completa | Mkt Web 360",
  description: "Guía para configurar métodos de envío en WooCommerce. Zonas de envío, tarifas planas, envío gratis a partir de importe, integración con Correos, MRW y Correos Express.",
  author: { "@type": "Organization", name: "Mkt Web 360 SLU", url: "https://www.mktweb360.com" },
  publisher: { "@type": "Organization", name: "Mkt Web 360 SLU", logo: { "@type": "ImageObject", url: "https://www.mktweb360.com/logo.png" } },
  datePublished: "2026-06-13",
  dateModified: "2026-06-23",
  image: "https://www.mktweb360.com/og-image.jpg",
  url: "https://www.mktweb360.com/configurar-envios-woocommerce/",
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://www.mktweb360.com/configurar-envios-woocommerce/" },
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <div className="max-w-3xl mx-auto px-4 py-12">
        <Breadcrumbs crumbs={[{ label: "Inicio", href: "/" }, { label: "Blog", href: "/blog/" }, { label: "Configurar envíos WooCommerce" }]} />
        <p className="text-sm text-accent-500 font-semibold mb-2">Ecommerce</p>
        <h1 className="text-4xl font-bold text-primary-600 mb-4 leading-tight">Cómo configurar los envíos en WooCommerce para España: guía completa paso a paso</h1>
        <p className="text-xl text-gray-500 mb-8 leading-relaxed">La configuración de envíos es una de las partes más complejas de montar una tienda online en España. Esta guía explica cómo configurar zonas, tarifas, envío gratuito e integrar los principales transportistas españoles con WooCommerce.</p>

        <h2 className="text-2xl font-bold text-primary-600 mt-10 mb-4">Conceptos básicos: zonas, métodos y clases de envío en WooCommerce</h2>
        <p className="text-gray-700 leading-relaxed mb-4">WooCommerce organiza los envíos en tres niveles jerárquicos que es importante entender antes de configurar nada. Las <strong>zonas de envío</strong> son áreas geográficas (España peninsular, Islas Canarias, Portugal, Europa, etc.). Los <strong>métodos de envío</strong> son las opciones disponibles dentro de cada zona (tarifa plana, envío gratuito, recogida en tienda, calculado por transportista). Las <strong>clases de envío</strong> son grupos de productos que comparten reglas de envío especiales (productos voluminosos, productos frágiles, etc.).</p>
        <p className="text-gray-700 leading-relaxed mb-4">El punto de partida es ir a WooCommerce → Ajustes → Envío y crear las zonas geográficas que correspondan a tu negocio. Para la mayoría de tiendas que venden solo en España, necesitarás al menos: España peninsular + Baleares, Islas Canarias (con costes y trámites diferentes por ser territorio fuera de la UE a efectos aduaneros), y opcionalmente Ceuta, Melilla y las ciudades autónomas.</p>
        <p className="text-gray-700 leading-relaxed mb-4">Si vendes también internacionalmente, crea zonas adicionales para Portugal, Europa y el resto del mundo, con precios de envío coherentes para cada región. La zona "Resto del mundo" actúa como comodín para todos los países no incluidos en zonas específicas.</p>

        <h2 className="text-2xl font-bold text-primary-600 mt-10 mb-4">Configurar tarifa plana y envío gratuito</h2>
        <p className="text-gray-700 leading-relaxed mb-4">Los métodos de envío más habituales en tiendas españolas medianas y pequeñas son la tarifa plana (un precio fijo por pedido independientemente del peso o volumen) y el envío gratuito a partir de un importe mínimo. Esta combinación es sencilla de configurar y funciona bien para catálogos con productos de tamaño y peso similares.</p>
        <p className="text-gray-700 leading-relaxed mb-4">Para añadir una tarifa plana en una zona: entra en la zona correspondiente → Añadir método de envío → Tarifa plana → Guarda. En la configuración del método, introduces el coste (por ejemplo, 4,95€ para España peninsular) y el título que verá el cliente en el checkout.</p>
        <p className="text-gray-700 leading-relaxed mb-4">Para configurar el envío gratuito a partir de un importe mínimo: añade el método "Envío gratuito" dentro de la misma zona y configura el requisito mínimo. Puedes definir que aplique solo cuando el importe del pedido supera X€, cuando se usa un cupón específico de envío gratis, o cuando se dan ambas condiciones a la vez.</p>
        <p className="text-gray-700 leading-relaxed mb-4">Un error común es no configurar correctamente la prioridad entre métodos. Si tienes tarifa plana de 4,95€ y envío gratuito a partir de 50€, asegúrate de que WooCommerce muestre ambas opciones cuando el pedido no supera el mínimo, y solo la gratuita cuando sí lo supera. Esto se controla con el ajuste "Ocultar otros métodos cuando el envío gratuito está disponible" en la configuración de la zona.</p>

        <h2 className="text-2xl font-bold text-primary-600 mt-10 mb-4">Integración con transportistas españoles: Correos, SEUR, MRW</h2>
        <p className="text-gray-700 leading-relaxed mb-4">Para tiendas con volumen suficiente, la integración directa con transportistas permite calcular el coste de envío en tiempo real según el peso, dimensiones y destino del pedido. Esta integración elimina el margen de error de la tarifa plana (pagar de más cuando el envío es barato, o perder dinero cuando es caro).</p>
        <p className="text-gray-700 leading-relaxed mb-4"><strong>Correos:</strong> Tiene un plugin oficial gratuito para WooCommerce que permite calcular tarifas en tiempo real, imprimir etiquetas y hacer seguimiento de pedidos. Para activarlo necesitas un contrato con Correos Ecommerce, disponible para empresas con envíos regulares. Las tarifas de Correos son competitivas para paquetes de hasta 2 kg y para zonas rurales donde otros transportistas tienen suplementos.</p>
        <p className="text-gray-700 leading-relaxed mb-4"><strong>SEUR:</strong> Uno de los transportistas más usados en ecommerce español. Tiene plugins de WooCommerce oficiales y de terceros. Ofrece varias opciones de servicio (24h, 72h, puerta a puerta, puntos SEUR) que pueden configurarse como opciones diferentes en el checkout. Requiere contrato con tarifa negociada.</p>
        <p className="text-gray-700 leading-relaxed mb-4"><strong>MRW:</strong> Especialmente fuerte en Canarias y envíos industriales. Su integración con WooCommerce funciona a través de plugins de terceros. Para tiendas que venden habitualmente a Canarias, las tarifas de MRW suelen ser más competitivas que las de SEUR.</p>

        <BlogBanner variant="ecommerce" />

        <h2 className="text-2xl font-bold text-primary-600 mt-10 mb-4">Envíos a Canarias: configuración especial y consideraciones aduaneras</h2>
        <p className="text-gray-700 leading-relaxed mb-4">Las Islas Canarias son fiscalmente territorios fuera de la Unión Europea a efectos del IVA y de las formalidades aduaneras. Esto significa que los envíos desde la Península a Canarias se tratan como exportaciones y el cliente canario no debe pagar el IVA peninsular (21%), sino el IGIC canario (7% en general).</p>
        <p className="text-gray-700 leading-relaxed mb-4">En WooCommerce, esto requiere una configuración específica: crear una zona de envío separada para Canarias, aplicar una clase de impuesto diferente para clientes con dirección en Canarias (tipo 0% de IVA en España + IGIC aplicado por el destinatario o a través de tu agente aduanero), y configurar un método de envío con el sobrecoste real que tiene enviar a Canarias con tu transportista habitual.</p>
        <p className="text-gray-700 leading-relaxed mb-4">Algunos transportistas como SEUR o DHL tienen servicios específicos para Canarias que incluyen la gestión aduanera (documento DUA). Para tiendas pequeñas que venden ocasionalmente a Canarias, puede ser más sencillo trabajar con un transitario que gestione la parte aduanera en lugar de hacerlo internamente.</p>

        <h2 className="text-2xl font-bold text-primary-600 mt-10 mb-4">Estrategia de precios de envío para aumentar conversiones</h2>
        <p className="text-gray-700 leading-relaxed mb-4">El coste de envío es una de las principales causas de abandono del carrito en ecommerce. Según estudios de Baymard Institute, el 48% de los carritos abandonados lo son por costes adicionales demasiado altos (envío, impuestos, tasas). La estrategia de precios de envío tiene impacto directo en la tasa de conversión.</p>
        <p className="text-gray-700 leading-relaxed mb-4">La estrategia de envío gratuito a partir de un importe mínimo funciona muy bien porque incentiva a los clientes a añadir más productos para alcanzar el umbral. El importe óptimo es ligeramente superior al ticket medio de tu tienda: si tu ticket medio es 35€, ponlo en 49€. Así el cliente que iba a comprar por 35€ añade algo más para evitar pagar el envío.</p>
        <p className="text-gray-700 leading-relaxed mb-4">Si el envío gratuito en todos los pedidos no es viable económicamente, considera incluir el coste del envío en el precio del producto y comunicarlo como "envío incluido". Psicológicamente, el cliente percibe mejor un producto a 29,95€ con "envío incluido" que el mismo producto a 24,95€ + 4,99€ de envío, aunque el precio final sea prácticamente el mismo.</p>

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
