import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ContactForm } from "@/components/ContactForm";
import { RelatedArticles } from "@/components/RelatedArticles";

export const metadata: Metadata = {
  title: "Tiendas Online Profesionales Sin Comisiones — Mkt Web 360",
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
            <img src="/imagen-tiendas-online.jpg" alt="Tienda online profesional" className="rounded-2xl shadow-2xl w-full object-cover" />
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
                  { label: "Comisión por venta (2%)", value: "~720€/año = 2.160€" },
                  { label: "Diseño (plantilla)", value: "200-500€" },
                  { label: "Apps y plugins", value: "300-600€" },
                  { label: "Total estimado 3 años", value: "~4.864€", highlight: true },
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
                  { label: "Desarrollo tienda", value: "desde 1.490€" },
                  { label: "Comisión por venta", value: "0€" },
                  { label: "Licencia plataforma", value: "0€" },
                  { label: "Hosting anual", value: "~150€/año = 450€" },
                  { label: "Total estimado 3 años", value: "~1.940€", highlight: true },
                ].map((r) => (
                  <div key={r.label} className={`flex justify-between text-sm ${r.highlight ? "font-bold text-accent-500 border-t pt-4" : "text-gray-600"}`}>
                    <span>{r.label}</span>
                    <span>{r.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
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

      {/* Offer banner */}
      <section id="oferta" className="py-12 px-4 bg-primary-700">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block bg-accent-500 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest mb-4">Oferta especial junio</span>
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">Tienda online desde 490€ + SEO incluido 12 meses</h2>
          <p className="text-primary-200 max-w-xl mx-auto mb-8">Contrata tu tienda online este mes y llévate 12 meses de SEO por el precio de 6. Solo 5 plazas disponibles.</p>
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
