import Image from "next/image";
import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ContactForm } from "@/components/ContactForm";
import { RelatedArticles } from "@/components/RelatedArticles";

export const metadata: Metadata = {
  title: "Ecommerce y Dropshipping con Participación en Resultados",
  description: "Montamos y gestionamos tu tienda online de dropshipping con un modelo híbrido: setup fijo + gestión mensual + participación en beneficios. Sin riesgo de stock. Con estrategia real.",
  alternates: { canonical: "https://www.mktweb360.com/ecommerce-dropshipping-con-participacion/" },
  openGraph: {
    title: "Ecommerce y Dropshipping con Participación en Resultados | Mkt Web 360",
    description: "Montamos y gestionamos tu tienda online de dropshipping con un modelo híbrido: setup fijo + gestión mensual + participación en beneficios. Sin riesgo de stock. Con estrategia real.",
    url: "https://www.mktweb360.com/ecommerce-dropshipping-con-participacion/",
    images: [{ url: "https://www.mktweb360.com/og-diseno-web-tienda-online.jpg", width: 1200, height: 630 }],
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Ecommerce y Dropshipping con Participación en Resultados",
  serviceType: "Ecommerce Management Service",
  provider: { "@type": "Organization", name: "Mkt Web 360 SLU", url: "https://www.mktweb360.com" },
  description: "Creación y gestión de tiendas online de dropshipping con modelo híbrido: setup fijo, gestión mensual y participación en beneficios cuando el negocio es rentable.",
  areaServed: "España",
  url: "https://www.mktweb360.com/ecommerce-dropshipping-con-participacion/",
  offers: {
    "@type": "Offer",
    price: "1500",
    priceCurrency: "EUR",
    description: "Setup completo tienda dropshipping desde 1.500€ + gestión mensual desde 400€/mes + 10% sobre beneficio neto mensual cuando supere 2.000€.",
    availability: "https://schema.org/InStock",
    url: "https://www.mktweb360.com/ecommerce-dropshipping-con-participacion/",
  },
};
const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Inicio", item: "https://www.mktweb360.com/" },
    { "@type": "ListItem", position: 2, name: "Ecommerce y Dropshipping con Participación", item: "https://www.mktweb360.com/ecommerce-dropshipping-con-participacion/" },
  ],
};

const FAQS = [
  { q: "¿Qué es el dropshipping y cómo funciona?",
    a: "El dropshipping es un modelo de ecommerce donde vendes productos sin tener stock físico. Cuando un cliente hace un pedido en tu tienda, el proveedor envía el producto directamente al cliente. Tú ganas la diferencia entre el precio de venta y el precio del proveedor. No necesitas almacén, ni inversión en stock, ni gestión logística propia. El reto está en elegir el nicho correcto, los proveedores adecuados y tener una estrategia de marketing que genere tráfico cualificado." },
  { q: "¿Por qué un modelo híbrido en lugar de solo comisión por ventas?",
    a: "El modelo de pura comisión por ventas tiene un problema de atribución: es muy difícil determinar qué parte de las ventas se debe al trabajo de la agencia y qué parte a otros factores. El modelo híbrido — setup fijo + gestión mensual + bonus sobre beneficio neto — es más justo para ambas partes: el cliente paga por el trabajo real que se hace cada mes, y la agencia tiene incentivo adicional cuando el negocio supera el umbral de rentabilidad. El bonus solo aplica cuando el negocio ya genera más de 2.000€/mes de beneficio neto, lo que garantiza que el cliente esté ganando dinero antes de pagar más." },
  { q: "¿Cuánto tiempo tarda en ser rentable una tienda de dropshipping?",
    a: "Depende del nicho, el presupuesto de marketing y la competencia. Con una estrategia bien ejecutada, las primeras ventas pueden llegar en las primeras semanas. La rentabilidad consistente — cubrir los costes de gestión y empezar a generar beneficio neto — suele lograrse entre los 3 y 6 meses. Los nichos con menor competencia y márgenes más altos (productos especializados, categorías de precio medio-alto) alcanzan la rentabilidad antes." },
  { q: "¿Qué proveedores de dropshipping usáis?",
    a: "Trabajamos principalmente con proveedores europeos — BigBuy, Brandsgateway, proveedores especializados por sector — porque garantizan plazos de entrega aceptables para el mercado español, cumplen con la normativa de importación de la UE y permiten márgenes más sostenibles que los proveedores asiáticos. Para la fase de validación del nicho podemos usar AliExpress o proveedores mixtos, pero para escalar el modelo siempre recomendamos proveedores europeos." },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export default function EcommerceDropshippingPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <section className="bg-gradient-to-br from-primary-700 to-primary-900 text-white">
        <div className="max-w-6xl mx-auto px-4 py-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <Breadcrumbs crumbs={[{ label: "Inicio", href: "/" }, { label: "Ecommerce y Dropshipping con Participación" }]} />
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight mt-4">
              Ecommerce y Dropshipping con Participación: montamos y gestionamos tu tienda online sin riesgo de stock
            </h1>
            <p className="text-xl text-primary-200 mb-8 leading-relaxed">
              Montamos y gestionamos tu tienda online de dropshipping con un modelo híbrido: setup fijo, gestión mensual y participación en beneficios. Sin riesgo de stock, con estrategia real.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#contacto" className="bg-accent-500 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-accent-600 transition-colors text-center">
                Solicitar presupuesto
              </a>
            </div>
          </div>
          <div>
            <Image src="/imagen-ecommerce-participacion.jpg" alt="Ecommerce y dropshipping con participación en resultados" className="rounded-2xl shadow-2xl w-full object-cover hidden md:block" width={800} height={600} />
          </div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-12">

        {/* Qué es el dropshipping */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-primary-600 mb-6">Qué es el dropshipping y por qué el modelo híbrido cambia las reglas</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            El dropshipping es un modelo de negocio donde vendes productos online sin tener stock físico. Cuando alguien compra en tu tienda, el proveedor envía el producto directamente al cliente. No necesitas almacén, ni inversión inicial en inventario, ni gestión de logística propia. El riesgo de entrada es mucho menor que en un ecommerce tradicional.
          </p>
          <p className="text-gray-700 leading-relaxed">
            El problema del dropshipping mal ejecutado es conocido: nichos saturados, márgenes demasiado bajos, proveedores con plazos de entrega inaceptables para el mercado español, y una estrategia de marketing que no va más allá de copiar fichas de producto. El modelo híbrido que proponemos parte de un análisis real del nicho, proveedores europeos con plazos de 2-5 días, una tienda construida para convertir, y una estrategia de SEO y marketing que genera tráfico sin depender de campañas de pago constantes.
          </p>
        </section>

        {/* Modelo de participación */}
        <section className="mb-16 bg-gray-50 rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-primary-600 mb-6">El modelo de participación: cómo funciona y qué significa para ti</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            El modelo de participación en resultados funciona así: pagas un setup inicial para montar la tienda, una gestión mensual para que la mantengamos y hagamos crecer, y un bonus adicional cuando el negocio supera el umbral de rentabilidad. El setup cubre la creación completa de la tienda. La gestión mensual de 400€/mes cubre el trabajo real que hacemos cada mes: SEO, optimización de fichas de producto, gestión de proveedores, análisis de rendimiento y ajustes de estrategia.
          </p>
          <p className="text-gray-700 leading-relaxed">
            El bonus de un 10% sobre el beneficio neto mensual — calculado sobre los ingresos menos el coste del producto y los gastos directos — solo aplica cuando el negocio supera los 2.000€/mes de beneficio neto. Esto garantiza que antes de pagar más, tú ya estás ganando dinero. Si el negocio no supera ese umbral, pagas solo la gestión mensual.
          </p>
        </section>

        {/* Setup 1500 */}
        <section className="mb-16 bg-primary-50 rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-primary-600 mb-6">Qué incluye el setup de 1.500€</h2>
          <p className="text-gray-700 leading-relaxed">
            El setup de 1.500€ incluye: análisis del nicho y validación del potencial de margen con proveedores reales, selección e integración de 2-3 proveedores europeos con acuerdo de precios, creación de la tienda en WooCommerce (preferido para SEO en España) o Shopify, configuración de la pasarela de pago (Stripe, Bizum), importación del catálogo inicial de 50-100 productos con fichas optimizadas, configuración del SEO técnico (estructura de URLs, schema markup, velocidad de carga), y puesta en marcha de Google Analytics 4 con seguimiento de conversiones.
          </p>
        </section>

        {/* Gestión mensual y bonus */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-primary-600 mb-6">Gestión mensual y bonus por resultados</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            La gestión mensual de 400€/mes incluye: actualización del catálogo con nuevos productos y optimización de los existentes, mejora continua del SEO de fichas de producto y categorías, gestión de la relación con proveedores (precios, disponibilidad, incidencias), análisis mensual de márgenes por producto y ajuste de precios, e informe mensual de ventas, márgenes y próximas acciones.
          </p>
          <p className="text-gray-700 leading-relaxed">
            El bonus del 10% sobre beneficio neto aplica a partir de los 2.000€/mes de beneficio neto. El beneficio neto se calcula como: ingresos totales menos coste del producto (precio proveedor + envío) menos cuota mensual de gestión. Los gastos de publicidad pagada, si los hay, también se descuentan. El cálculo se hace mensualmente con datos verificables de la plataforma.
          </p>
        </section>

        {/* Nichos */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-primary-600 mb-6">Qué tipo de tiendas y nichos trabajamos</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Trabajamos nichos con márgenes entre el 30% y el 60%, demanda orgánica demostrable y proveedores europeos disponibles. Los sectores donde el modelo funciona mejor en España: hogar y decoración (márgenes altos, poca dependencia de marca), jardín y piscinas, mascotas y accesorios, fitness y equipamiento deportivo, electrónica de consumo de nicho, y productos de bebé y puericultura.
          </p>
          <p className="text-gray-700 leading-relaxed">
            No trabajamos nichos con márgenes por debajo del 25%, productos de marca donde el precio está controlado, o sectores donde la competencia de Amazon hace imposible competir en precio. Antes de arrancar, hacemos un análisis de viabilidad del nicho con datos reales de demanda, márgenes y competencia.
          </p>
        </section>

        {/* FAQs */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-primary-600 mb-8">Preguntas frecuentes sobre dropshipping con participación</h2>
          <div className="space-y-4">
            {FAQS.map(faq => (
              <div key={faq.q} className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm">
                <h3 className="font-bold text-primary-700 mb-2">{faq.q}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Contacto */}
        <section id="contacto" className="bg-primary-600 text-white rounded-2xl p-8">
          <h2 className="text-2xl font-bold mb-4">¿Quieres montar tu tienda online sin riesgo de stock?</h2>
          <p className="text-primary-200 mb-6">¿Tienes un nicho en mente o quieres que te ayudemos a identificar la mejor oportunidad? Cuéntanos y en 48 horas te respondemos con un análisis de viabilidad.</p>
          <div className="bg-white rounded-xl p-6">
            <ContactForm />
          </div>
        </section>
      </div>
      <RelatedArticles category="Ecommerce" />
    </>
  );
}
