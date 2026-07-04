import Image from "next/image";
import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ContactForm } from "@/components/ContactForm";
import { RelatedArticles } from "@/components/RelatedArticles";
import { HostingBanner } from "@/components/HostingModal";

export const metadata: Metadata = {
  title: "Tiendas Online Profesionales Sin Comisiones",
  description: "Diseño y desarrollo de tiendas online profesionales sin comisiones ni licencias mensuales. WooCommerce + React. Stripe, Apple Pay y Google Pay incluidos. Servicio nacional.",
  alternates: { canonical: "https://www.mktweb360.com/diseno-de-paginas-web/diseno-tiendas-online/" },
  openGraph: {
    title: "Tiendas Online Sin Comisiones | Mkt Web 360",
    description: "Tu tienda online profesional sin pagar comisiones por venta ni licencias mensuales. Diseño 100% personalizado.",
    url: "https://www.mktweb360.com/diseno-de-paginas-web/diseno-tiendas-online/",
    images: [{ url: "/imagen-tiendas-online.jpg", width: 1200, height: 900, alt: "Tienda online profesional Mkt Web 360" }],
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Diseño de Tiendas Online Profesionales",
  provider: { "@type": "Organization", name: "Mkt Web 360 SLU", url: "https://www.mktweb360.com" },
  description: "Diseño y desarrollo de tiendas online profesionales sin comisiones ni licencias. React frontend + WooCommerce. Stripe, Apple Pay y Google Pay incluidos.",
  areaServed: "España",
  url: "https://www.mktweb360.com/diseno-de-paginas-web/diseno-tiendas-online/",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    { "@type": "Question", "name": "¿Cuánto tarda en estar lista la tienda?", "acceptedAnswer": { "@type": "Answer", "text": "El desarrollo técnico está resuelto. El plazo real depende de la velocidad con la que el cliente facilita el material: catálogo, imágenes, textos y datos de la empresa. Con el material entregado en tiempo, la tienda puede estar operativa en pocos días." } },
    { "@type": "Question", "name": "¿La subida de productos está incluida en el precio?", "acceptedAnswer": { "@type": "Answer", "text": "No. El precio de 490€ incluye el desarrollo, la configuración de la pasarela de pago, el SEO técnico inicial y una hora de formación online. La carga del catálogo se presupuesta aparte según volumen y formato." } },
    { "@type": "Question", "name": "¿Podré gestionar la tienda sin conocimientos técnicos?", "acceptedAnswer": { "@type": "Answer", "text": "Sí. El panel de gestión es WordPress. Añadir productos, modificar precios, gestionar pedidos y actualizar el stock son operaciones que cualquier persona puede aprender en la formación inicial." } },
    { "@type": "Question", "name": "¿Qué pasa si ya tengo una tienda en Shopify o Prestashop?", "acceptedAnswer": { "@type": "Answer", "text": "Migramos tu tienda sin perder productos, clientes, historial de pedidos ni posicionamiento en Google. Trabajamos con Shopify, Prestashop, WooCommerce, Wix, Squarespace y Magento." } },
  ]
};

const INCLUDES = [
  "Diseño 100% personalizado — no es una plantilla",
  "Frontend React + WooCommerce backend",
  "Stripe, Apple Pay y Google Pay configurados",
  "Panel de gestión WordPress para el cliente",
  "Catálogo, variantes, stock y pedidos",
  "Integración con transportistas y seguimiento",
  "SEO técnico incluido desde el primer día",
  "Formación completa para gestión autónoma",
  "Sin comisiones por venta — 0€ por transacción",
  "Sin licencia mensual de plataforma",
];

const PROCESS = [
  { step: "01", title: "Briefing", desc: "Entendemos tu catálogo, tu marca y tus objetivos de venta." },
  { step: "02", title: "Diseño", desc: "Prototipo visual personalizado. Tú apruebas antes de desarrollar." },
  { step: "03", title: "Desarrollo", desc: "Frontend React + WooCommerce. Pasarela de pago configurada y probada." },
  { step: "04", title: "Entrega", desc: "Formación, traspaso y soporte. Vendes desde el primer día." },
];

export default function TiendasOnlinePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-700 to-primary-900 text-white">
        <div className="max-w-6xl mx-auto px-4 py-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <Breadcrumbs crumbs={[{ label: "Inicio", href: "/" }, { label: "Diseño Web", href: "/diseno-de-paginas-web/" }, { label: "Tiendas Online" }]} />
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight mt-4">
              Tu tienda online<br />
              <span className="text-accent-400">sin comisiones ni licencias</span>
            </h1>
            <p className="text-xl text-primary-200 mb-8 leading-relaxed">
              Shopify te cobra licencia mensual y hasta un 2% por cada venta. Nosotros construimos tu tienda con tecnología propia — pagas una vez y vendes para siempre sin coste adicional.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contacto/" className="bg-accent-500 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-accent-600 transition-colors text-center">
                Quiero mi tienda online
              </Link>
              <Link href="#oferta" className="border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white/10 transition-colors text-center">
                Ver oferta especial
              </Link>
            </div>
          </div>
          <div className="hidden md:block">
            <Image src="/imagen-tiendas-online.jpg" alt="Tienda online profesional" className="rounded-2xl shadow-2xl w-full object-cover" width={800} height={600} />
          </div>
        </div>
      </section>

      {/* Trust bar */}
      <section className="bg-primary-600 py-6 px-4">
        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 text-center text-white">
          {[
            { value: "0€", label: "comisión por venta" },
            { value: "0€", label: "licencia mensual" },
            { value: "100%", label: "diseño personalizado" },
            { value: "Stripe", label: "Apple Pay · Google Pay" },
          ].map((m) => (
            <div key={m.label}>
              <div className="text-xl font-bold text-accent-400">{m.value}</div>
              <div className="text-xs text-primary-200 mt-1">{m.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Comparativa */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary-600 mb-4">¿Por qué no Shopify o Wix?</h2>
            <p className="text-gray-600 max-w-xl mx-auto">El coste real a 3 años cambia mucho la decisión.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-2xl p-8 border-2 border-gray-200">
              <h3 className="text-xl font-bold text-gray-400 mb-6">Shopify Basic — 3 años</h3>
              <div className="space-y-4">
                {[
                  { label: "Licencia mensual", value: "~39€/mes = 1.404€" },
                  { label: "Comisión por transacción (1,5–2%)", value: "variable según ventas" },
                  { label: "Diseño (plantilla)", value: "200–500€" },
                  { label: "Apps y plugins esenciales", value: "50–150€/mes = 1.800–5.400€" },
                  { label: "Dominio", value: "~15€/año = 45€" },
                  { label: "Total estimado 3 años", value: "3.450€ – 7.350€", highlight: true },
                ].map((r) => (
                  <div key={r.label} className={`flex justify-between text-sm ${r.highlight ? "font-bold text-red-500 border-t pt-4" : "text-gray-600"}`}>
                    <span>{r.label}</span>
                    <span>{r.value}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white rounded-2xl p-8 border-2 border-accent-500">
              <h3 className="text-xl font-bold text-primary-600 mb-6">Mkt Web 360 — 3 años</h3>
              <div className="space-y-4">
                {[
                  { label: "Desarrollo tienda", value: "desde 490€" },
                  { label: "Comisión por venta", value: "0€" },
                  { label: "Licencia plataforma", value: "0€" },
                  { label: "Hosting anual", value: "~150€/año = 450€" },
                  { label: "Dominio", value: "~15€/año = 45€" },
                  { label: "Total estimado 3 años", value: "desde 985€", highlight: true },
                ].map((r) => (
                  <div key={r.label} className={`flex justify-between text-sm ${r.highlight ? "font-bold text-accent-500 border-t pt-4" : "text-gray-600"}`}>
                    <span>{r.label}</span>
                    <span>{r.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">El problema de Shopify no es solo el precio de la licencia. Es el modelo. Shopify cobra una comisión por cada venta que haces — para siempre. Cuando tu negocio crece y factura más, Shopify gana más sin hacer nada adicional. A 3.000€/mes en ventas, la comisión supone más de 700€ al año que salen de tu margen.</p>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">Wix y Squarespace tienen el mismo problema desde otro ángulo: la personalización tiene un techo. La estructura de la tienda, la lógica de navegación y la experiencia de compra están definidas por la plantilla. Nosotros construimos la tienda sobre tecnología propia. Pagas el desarrollo una vez y la tienda es tuya — sin comisiones, sin licencia, sin techo.</p>
          <p className="text-center text-sm text-gray-500 mt-4 max-w-2xl mx-auto">* Cálculo basado en ventas medias de 2.000–3.000€/mes. El coste de Shopify escala con tu volumen de ventas. El de Mkt Web 360, no.</p>
        </div>
      </section>

      {/* Includes */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-primary-600 mb-6">Todo incluido en tu tienda</h2>
              <div className="space-y-3">
                {INCLUDES.map((f) => (
                  <div key={f} className="flex items-center gap-3">
                    <span className="text-accent-500 font-bold text-lg shrink-0">✓</span>
                    <span className="text-gray-700 text-sm">{f}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-primary-50 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-primary-600 mb-4">Tecnología que te da ventaja</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                Usamos React como frontend y WooCommerce como backend. El resultado es una tienda visualmente única, rápida y con la potencia de gestión de WordPress.
              </p>
              <p className="text-gray-600 text-sm leading-relaxed">
                Tu cliente gestiona productos, pedidos, descuentos y envíos de forma autónoma desde el primer día, sin depender técnicamente de la agencia.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary-600 mb-4">Cómo lo hacemos</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {PROCESS.map((p) => (
              <div key={p.step} className="text-center">
                <div className="w-14 h-14 rounded-full bg-accent-500 text-white text-xl font-bold flex items-center justify-center mx-auto mb-4">{p.step}</div>
                <h3 className="font-bold text-primary-600 mb-2">{p.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Migración */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary-600 mb-4">¿Tienes tienda y quieres cambiarte?</h2>
            <p className="text-gray-600 max-w-xl mx-auto">Migramos tu tienda desde Shopify, Prestashop, Wix o cualquier plataforma sin perder productos, pedidos ni historial de SEO.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: "📦", title: "Migración de catálogo", desc: "Trasladamos todos tus productos, variantes, imágenes, precios y descripciones sin pérdida de datos. También desde Excel o CSV." },
              { icon: "👥", title: "Clientes y pedidos", desc: "Importamos el histórico completo de clientes y pedidos para que no pierdas ningún dato de tu actividad anterior." },
              { icon: "🔗", title: "SEO preservado", desc: "Redireccionamos las URLs antiguas para conservar el posicionamiento que ya tienes en Google. Sin caídas de tráfico." },
            ].map((item) => (
              <div key={item.title} className="bg-primary-50 rounded-2xl p-6 text-center">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="font-bold text-primary-600 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 bg-white border border-gray-200 rounded-2xl p-6 text-center">
            <p className="text-gray-600 text-sm leading-relaxed">Plataformas de origen habituales: <strong>Shopify, Prestashop, WooCommerce antiguo, Wix, Squarespace, Magento.</strong> Si tienes dudas sobre si podemos migrar tu plataforma, consúltanos.</p>
          </div>
        </div>
      </section>

      {/* Funcionalidades avanzadas */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary-600 mb-4">Funcionalidades avanzadas disponibles</h2>
            <p className="text-gray-600 max-w-xl mx-auto">Más allá de la tienda base, ofrecemos integraciones adicionales para escalar tu negocio sin cambiar de plataforma.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Google Shopping", desc: "Conecta tu catálogo con Google Merchant Center y aparece en los resultados de compra de Google." },
              { title: "TPV físico integrado", desc: "Sincroniza tu tienda online con tu punto de venta físico. Stock unificado, un solo panel de gestión." },
              { title: "Suscripciones y pagos recurrentes", desc: "Vende productos por suscripción mensual o anual con gestión automática de cobros." },
              { title: "Importación masiva de catálogo", desc: "Sube miles de productos desde Excel, CSV o tu plataforma anterior sin trabajo manual." },
              { title: "Marketplace multi-vendedor", desc: "Transforma tu tienda en un marketplace donde otros vendedores puedan publicar sus productos." },
              { title: "B2B y precios por cliente", desc: "Precios diferenciados por tipo de cliente, volumen de pedido o condiciones específicas de cuenta." },
            ].map((f) => (
              <div key={f.title} className="bg-white rounded-xl p-6 border border-gray-200">
                <h3 className="font-bold text-primary-600 mb-2">{f.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ¿Para quién es este servicio? */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-primary-600 mb-6 text-center">¿Para quién es este servicio?</h2>
          <div className="max-w-2xl mx-auto text-gray-600 space-y-4">
            <p>Este servicio encaja con cualquier negocio que quiera vender online sin depender de plataformas que cobran por cada transacción. Funciona bien para negocios con catálogo propio — físico o digital — que necesitan una tienda con identidad propia, no una plantilla genérica.</p>
            <p>También es la solución natural para negocios que ya venden en Shopify, Prestashop o Wix y han llegado al techo de lo que esa plataforma permite, o que simplemente no quieren seguir pagando comisiones cuando su volumen de ventas crece.</p>
            <p>Y es especialmente adecuado para negocios que quieren gestionar su tienda de forma autónoma desde el primer día. El panel de WordPress es el gestor de contenidos más utilizado del mundo, con una curva de aprendizaje baja para operaciones cotidianas como subir productos, gestionar pedidos o actualizar precios.</p>
            <p>Si necesitas funcionalidades avanzadas — precios por tipo de cliente, marketplace multi-vendedor o integración con TPV físico — también está cubierto, sin cambiar de plataforma.</p>
          </div>
        </div>
      </section>

      {/* Qué pasa después de la entrega */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-primary-600 mb-6 text-center">Qué pasa después de la entrega</h2>
          <div className="max-w-2xl mx-auto text-gray-600 space-y-4">
            <p>La entrega incluye una hora de formación online en la que repasamos las operaciones más habituales del panel: subir y editar productos, gestionar pedidos, actualizar precios y controlar el stock. La formación se adapta al equipo que vaya a gestionar la tienda.</p>
            <p>Si prefieres que nos encarguemos del mantenimiento técnico, la actualización de productos o la gestión de contenido de forma continuada, es un servicio que presupuestamos aparte según las necesidades de cada tienda. Sin paquetes cerrados — definimos juntos qué tiene sentido externalizar.</p>
          </div>
        </div>
      </section>

      {/* Preguntas frecuentes */}
      <section className="py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-primary-600 mb-8 text-center">Preguntas frecuentes</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">¿Cuánto tarda en estar lista la tienda?</h3>
              <p className="text-gray-600 text-sm leading-relaxed">El desarrollo técnico está resuelto. El plazo real depende de la velocidad con la que el cliente facilita el material: catálogo, imágenes, textos y datos de la empresa. Con el material entregado en tiempo, la tienda puede estar operativa en pocos días.</p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">¿La subida de productos está incluida en el precio?</h3>
              <p className="text-gray-600 text-sm leading-relaxed">No. El precio de 490€ incluye el desarrollo, la configuración de la pasarela de pago, el SEO técnico inicial y una hora de formación online. La carga del catálogo se presupuesta aparte según volumen y formato.</p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">¿Podré gestionar la tienda sin conocimientos técnicos?</h3>
              <p className="text-gray-600 text-sm leading-relaxed">Sí. El panel de gestión es WordPress. Añadir productos, modificar precios, gestionar pedidos y actualizar el stock son operaciones que cualquier persona puede aprender en la formación inicial.</p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">¿Qué pasa si ya tengo una tienda en Shopify o Prestashop?</h3>
              <p className="text-gray-600 text-sm leading-relaxed">Migramos tu tienda sin perder productos, clientes, historial de pedidos ni posicionamiento en Google. Trabajamos con Shopify, Prestashop, WooCommerce, Wix, Squarespace y Magento.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Offer banner */}
      <section id="oferta" className="py-12 px-4 bg-primary-700">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block bg-accent-500 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest mb-4">Oferta especial</span>
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">Tienda online desde 490€ + oferta SEO 6x3</h2>
          <p className="text-primary-200 max-w-xl mx-auto mb-8">Contrata tu tienda online y añade SEO con nuestra oferta 6x3 — 6 meses de posicionamiento pagando solo 3. Solo 5 plazas disponibles.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contacto/" className="bg-accent-500 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-accent-600 transition-colors">
              Reservar mi plaza
            </Link>
            <Link href="/seo-posicionamiento-web-organico/" className="border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-primary-700 transition-colors">
              Ver servicio SEO
            </Link>
          </div>
        </div>
      </section>

      {/* IA badge */}
      <section className="py-10 px-4 bg-white border-y border-gray-100">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-6 text-center md:text-left">
          <div className="shrink-0 w-14 h-14 rounded-full bg-primary-50 flex items-center justify-center">
            <svg className="w-7 h-7 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456Z"/></svg>
          </div>
          <div>
            <p className="text-lg font-semibold text-primary-700">La experiencia de un equipo senior. La precisión de la inteligencia artificial.</p>
            <p className="text-gray-500 text-sm mt-1">Protocolos propios de IA aplicados a cada proyecto para resultados más rápidos y precisos.</p>
          </div>
        </div>
      </section>

      <section className="py-8 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <HostingBanner />
        </div>
      </section>

      {/* CTA Form */}
      <section className="py-16 px-4 bg-primary-600 text-white">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-4">Tu mejor cliente aún no te conoce</h2>
            <p className="text-primary-200">Vamos a presentaros. Cuéntanos tu proyecto y te respondemos en menos de 24 horas.</p>
          </div>
          <div className="bg-white rounded-2xl p-8">
            <ContactForm formType="tienda-online" />
          </div>
        </div>
      </section>

      <RelatedArticles category="Ecommerce" title="Más sobre tiendas online y ecommerce" />
    </>
  );
}
