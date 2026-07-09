import type { Metadata } from "next";
import Link from "next/link";
import { TiendaOnlineForm } from "@/components/TiendaOnlineForm";
import { HostingBanner } from "@/components/HostingModal";

export const metadata: Metadata = {
  title: "Tienda Online Profesional desde 490€ — Sin Comisiones",
  description: "Crea tu tienda online profesional desde 490€. Sin comisiones por venta, sin licencias. Diseño 100% personalizado. Web orientada al SEO desde el primer día. Solo 5 plazas.",
  alternates: { canonical: "https://www.mktweb360.com/tienda-online/" },
  openGraph: {
    title: "Tienda Online desde 490€ Sin Comisiones | Mkt Web 360",
    description: "Tu tienda online profesional desde 490€. Sin comisiones. Web orientada al SEO. Solo 5 plazas.",
    url: "https://www.mktweb360.com/tienda-online/",
    images: [{ url: "/imagen-tiendas-online.jpg", width: 1200, height: 900, alt: "Tienda online profesional desde 490€" }],
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "¿Cuánto tarda en estar lista la tienda?", acceptedAnswer: { "@type": "Answer", text: "El plazo estándar es de 3 a 4 semanas desde el briefing inicial hasta el lanzamiento. Para tiendas con catálogos grandes o funcionalidades específicas puede ser algo más. Lo acordamos antes de empezar y lo cumplimos." } },
    { "@type": "Question", name: "¿Qué pasa si ya tengo una tienda en Shopify o WooCommerce?", acceptedAnswer: { "@type": "Answer", text: "Migramos tu tienda completa: productos, categorías, imágenes, clientes y pedidos históricos. El proceso es transparente para tus clientes — no pierden sus cuentas ni su historial de compras." } },
    { "@type": "Question", name: "¿Quién gestiona la tienda después del lanzamiento?", acceptedAnswer: { "@type": "Answer", text: "Tú. Te formamos para gestionar productos, stock, pedidos, descuentos y envíos de forma completamente autónoma. Si prefieres que lo gestionemos nosotros, tenemos planes de mantenimiento mensual." } },
    { "@type": "Question", name: "¿El precio de 490€ es todo o hay costes adicionales?", acceptedAnswer: { "@type": "Answer", text: "El precio de 490€ cubre el diseño y desarrollo completo de la tienda. Aparte necesitas un hosting y dominio (entre 80 y 150€/año según el proveedor) y las pasarelas de pago cobran una comisión estándar de Stripe o similar (entre 1,4% y 2,9% por transacción, que es el coste del procesador, no nuestro)." } },
  ],
};

export default function TiendaOnlineLandingPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-700 to-primary-900 text-white">
        <div className="max-w-5xl mx-auto px-4 py-20 text-center">
          <span className="inline-block bg-accent-500 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest mb-6">Oferta especial — Solo 5 plazas</span>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Tu tienda online profesional<br />
            <span className="text-accent-400">desde 490€</span>
          </h1>
          <p className="text-xl text-primary-200 mb-4 max-w-2xl mx-auto">
            Sin comisiones por venta. Sin licencias mensuales. Diseño 100% personalizado. Web técnicamente optimizada para SEO desde el primer día.
          </p>
          <p className="text-primary-300 mb-10 italic">Mientras tú trabajas, nosotros conseguimos que te llamen.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#contacto" className="bg-accent-500 text-white px-10 py-5 rounded-full font-bold text-xl hover:bg-accent-600 transition-colors">
              Reservar mi plaza ahora
            </a>
          </div>
          <p className="text-primary-300 text-sm mt-6">Solo quedan 5 plazas disponibles</p>
        </div>
      </section>

      {/* Comparativa rápida */}
      <section className="py-12 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            {[
              { icon: "🚫", title: "Shopify Basic", desc: "39€/mes + 2% por venta = +1.500€/año solo en fees", bad: true },
              { icon: "✅", title: "Mkt Web 360", desc: "490€ una vez + 0€ comisiones + web orientada al SEO", bad: false },
              { icon: "🚫", title: "Wix eCommerce", desc: "17€/mes + comisiones + diseño genérico de plantilla", bad: true },
            ].map((c) => (
              <div key={c.title} className={`rounded-2xl p-6 border-2 ${c.bad ? "border-gray-200 bg-gray-50" : "border-accent-500 bg-accent-50"}`}>
                <div className="text-3xl mb-3">{c.icon}</div>
                <h3 className={`font-bold mb-2 ${c.bad ? "text-gray-400" : "text-accent-600"}`}>{c.title}</h3>
                <p className="text-sm text-gray-600">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lo que incluye */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary-600 mb-4">Todo lo que incluye tu tienda</h2>
            <p className="text-gray-600">Sin sorpresas. Sin letra pequeña.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              "Diseño 100% personalizado — no es una plantilla",
              "Frontend React + WooCommerce backend",
              "Stripe, Apple Pay y Google Pay configurados",
              "Panel de gestión WordPress para el cliente",
              "Catálogo, variantes, stock y pedidos",
              "Integración con transportistas y seguimiento",
              "SEO técnico incluido desde el primer día",
              "Sin comisiones por venta — 0€ por transacción",
              "Sin licencia mensual de plataforma",
              "Formación completa para gestión autónoma",
              "Soporte post-entrega incluido",
              "Migración completa desde tu tienda actual — productos, clientes y pedidos",
              "Conexión con TPV físico si tienes tienda física",
              "Importación masiva de catálogo desde Excel, CSV o plataforma anterior",
            ].map((f) => (
              <div key={f} className="flex items-center gap-3 bg-white rounded-xl px-5 py-4 shadow-sm border border-gray-100">
                <span className="text-accent-500 font-bold text-lg shrink-0">✓</span>
                <span className="text-gray-700 text-sm">{f}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Urgencia */}
      <section className="py-12 px-4 bg-primary-700 text-white text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold mb-3">Solo 5 plazas disponibles</h2>
          <p className="text-primary-200 mb-6">Nuestra capacidad de producción es limitada para garantizar la calidad. Cuando se cubran las 5 plazas, cerramos la oferta.</p>
          <a href="#contacto" className="bg-accent-500 text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-accent-600 transition-colors inline-block">
            Quiero mi plaza — 490€
          </a>
        </div>
      </section>


      {/* Por qué WooCommerce */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-primary-600 mb-6">Por qué una tienda propia es mejor que Shopify o Wix</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Shopify y Wix son cómodos para empezar, pero tienen un coste oculto que no aparece en su precio mensual: las comisiones por venta. Si facturas 50.000€ al año con Shopify Basic, pagas 1.000€ solo en comisiones de transacción, más los 468€ anuales de suscripción. Son 1.500€ al año que se van sin que hayas vendido nada más.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Con una tienda propia en WooCommerce, pagas una vez y es tuya para siempre. Sin comisiones por venta, sin licencia mensual, sin dependencia de una plataforma que puede cambiar sus precios o sus condiciones cuando quiera. El código es tuyo, los datos son tuyos y el diseño es 100% personalizado.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Además, WooCommerce sobre WordPress es la plataforma de ecommerce con mayor presencia en Google. Las tiendas bien construidas sobre esta base tienen una ventaja SEO estructural que las plataformas SaaS difícilmente pueden igualar. Incluimos SEO técnico desde el primer día: velocidad, estructura de URLs, datos estructurados, sitemap y configuración de indexación.
          </p>
        </div>
      </section>

      {/* Proceso */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-primary-600 mb-8 text-center">Cómo es el proceso de entrega</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { num: "01", title: "Reunión de briefing", desc: "Recibimos tu solicitud y te contactamos en menos de 24 horas para una reunión de briefing. Definimos el diseño, el catálogo, las funcionalidades específicas y el calendario de entrega." },
              { num: "02", title: "Diseño y desarrollo", desc: "Diseñamos tu tienda desde cero — sin plantillas genéricas. Implementamos el catálogo, las pasarelas de pago, los métodos de envío y todas las funcionalidades acordadas." },
              { num: "03", title: "Revisión y ajustes", desc: "Te mostramos la tienda en un entorno de pruebas. Hacemos todos los ajustes necesarios hasta que quede exactamente como lo necesitas. Sin límite de rondas de revisión." },
              { num: "04", title: "Lanzamiento y formación", desc: "Publicamos la tienda, hacemos las pruebas finales de compra y te formamos para gestionar productos, pedidos, stock y promociones de forma autónoma." },
            ].map(step => (
              <div key={step.num} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                <span className="inline-block text-3xl font-bold text-accent-500 mb-3">{step.num}</span>
                <h3 className="font-bold text-primary-700 text-lg mb-2">{step.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-primary-600 mb-8 text-center">Preguntas frecuentes</h2>
          <div className="space-y-4">
            {[
              { q: "¿Cuánto tarda en estar lista la tienda?",
                a: "El plazo estándar es de 3 a 4 semanas desde el briefing inicial hasta el lanzamiento. Para tiendas con catálogos grandes o funcionalidades específicas puede ser algo más. Lo acordamos antes de empezar y lo cumplimos." },
              { q: "¿Qué pasa si ya tengo una tienda en Shopify o WooCommerce?",
                a: "Migramos tu tienda completa: productos, categorías, imágenes, clientes y pedidos históricos. El proceso es transparente para tus clientes — no pierden sus cuentas ni su historial de compras." },
              { q: "¿Quién gestiona la tienda después del lanzamiento?",
                a: "Tú. Te formamos para gestionar productos, stock, pedidos, descuentos y envíos de forma completamente autónoma. Si prefieres que lo gestionemos nosotros, tenemos planes de mantenimiento mensual." },
              { q: "¿El precio de 490€ es todo o hay costes adicionales?",
                a: "El precio de 490€ cubre el diseño y desarrollo completo de la tienda. Aparte necesitas un hosting y dominio (entre 80 y 150€/año según el proveedor) y las pasarelas de pago cobran una comisión estándar de Stripe o similar (entre 1,4% y 2,9% por transacción, que es el coste del procesador, no nuestro)." },
            ].map(faq => (
              <div key={faq.q} className="bg-gray-50 border border-gray-100 rounded-2xl p-6">
                <h3 className="font-bold text-primary-700 mb-2">{faq.q}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Por qué WooCommerce */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-primary-600 mb-6">Por qué una tienda propia es mejor que Shopify o Wix</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Shopify y Wix son cómodos para empezar, pero tienen un coste oculto que no aparece en su precio mensual: las comisiones por venta. Si facturas 50.000€ al año con Shopify Basic, pagas 1.000€ solo en comisiones de transacción, más los 468€ anuales de suscripción. Son 1.500€ al año que se van sin que hayas vendido nada más.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Con una tienda propia en WooCommerce, pagas una vez y es tuya para siempre. Sin comisiones por venta, sin licencia mensual, sin dependencia de una plataforma que puede cambiar sus precios o sus condiciones cuando quiera. El código es tuyo, los datos son tuyos y el diseño es 100% personalizado.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Además, WooCommerce sobre WordPress es la plataforma de ecommerce con mayor presencia en Google. Las tiendas bien construidas sobre esta base tienen una ventaja SEO estructural que las plataformas SaaS difícilmente pueden igualar. Incluimos SEO técnico desde el primer día: velocidad, estructura de URLs, datos estructurados, sitemap y configuración de indexación.
          </p>
        </div>
      </section>

      {/* Proceso */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-primary-600 mb-8 text-center">Cómo es el proceso de entrega</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { num: "01", title: "Reunión de briefing", desc: "Recibimos tu solicitud y te contactamos en menos de 24 horas para una reunión de briefing. Definimos el diseño, el catálogo, las funcionalidades específicas y el calendario de entrega." },
              { num: "02", title: "Diseño y desarrollo", desc: "Diseñamos tu tienda desde cero — sin plantillas genéricas. Implementamos el catálogo, las pasarelas de pago, los métodos de envío y todas las funcionalidades acordadas." },
              { num: "03", title: "Revisión y ajustes", desc: "Te mostramos la tienda en un entorno de pruebas. Hacemos todos los ajustes necesarios hasta que quede exactamente como lo necesitas. Sin límite de rondas de revisión." },
              { num: "04", title: "Lanzamiento y formación", desc: "Publicamos la tienda, hacemos las pruebas finales de compra y te formamos para gestionar productos, pedidos, stock y promociones de forma autónoma." },
            ].map(step => (
              <div key={step.num} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                <span className="inline-block text-3xl font-bold text-accent-500 mb-3">{step.num}</span>
                <h3 className="font-bold text-primary-700 text-lg mb-2">{step.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-primary-600 mb-8 text-center">Preguntas frecuentes</h2>
          <div className="space-y-4">
            {[
              { q: "¿Cuánto tarda en estar lista la tienda?",
                a: "El plazo estándar es de 3 a 4 semanas desde el briefing inicial hasta el lanzamiento. Para tiendas con catálogos grandes o funcionalidades específicas puede ser algo más. Lo acordamos antes de empezar y lo cumplimos." },
              { q: "¿Qué pasa si ya tengo una tienda en Shopify o WooCommerce?",
                a: "Migramos tu tienda completa: productos, categorías, imágenes, clientes y pedidos históricos. El proceso es transparente para tus clientes — no pierden sus cuentas ni su historial de compras." },
              { q: "¿Quién gestiona la tienda después del lanzamiento?",
                a: "Tú. Te formamos para gestionar productos, stock, pedidos, descuentos y envíos de forma completamente autónoma. Si prefieres que lo gestionemos nosotros, tenemos planes de mantenimiento mensual." },
              { q: "¿El precio de 490€ es todo o hay costes adicionales?",
                a: "El precio de 490€ cubre el diseño y desarrollo completo de la tienda. Aparte necesitas un hosting y dominio (entre 80 y 150€/año según el proveedor) y las pasarelas de pago cobran una comisión estándar de Stripe o similar (entre 1,4% y 2,9% por transacción, que es el coste del procesador, no nuestro)." },
            ].map(faq => (
              <div key={faq.q} className="bg-gray-50 border border-gray-100 rounded-2xl p-6">
                <h3 className="font-bold text-primary-700 mb-2">{faq.q}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-8 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <HostingBanner />
        </div>
      </section>

      {/* CTA Form */}
      <section id="contacto" className="py-16 px-4 bg-primary-600 text-white">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-4">Reserva tu plaza ahora</h2>
            <p className="text-primary-200">Cuéntanos tu proyecto y te contactamos en menos de 24 horas para confirmar disponibilidad.</p>
          </div>
          <div className="bg-white rounded-2xl p-8">
            <TiendaOnlineForm />
          </div>
        </div>
      </section>
    </>
  );
}
