import type { Metadata } from "next";
import Link from "next/link";
import { TiendaOnlineForm } from "@/components/TiendaOnlineForm";
import { HostingBanner } from "@/components/HostingModal";

export const metadata: Metadata = {
  title: "Tienda Online Profesional desde 490€ — Sin Comisiones | Mkt Web 360",
  description: "Crea tu tienda online profesional desde 490€. Sin comisiones por venta, sin licencias. Diseño 100% personalizado. Web orientada al SEO desde el primer día. Solo 5 plazas este mes.",
  alternates: { canonical: "https://www.mktweb360.com/tienda-online/" },
  openGraph: {
    title: "Tienda Online desde 490€ Sin Comisiones | Mkt Web 360",
    description: "Tu tienda online profesional desde 490€. Sin comisiones. Web orientada al SEO. Solo 5 plazas.",
    url: "https://www.mktweb360.com/tienda-online/",
    images: [{ url: "/imagen-tiendas-online.jpg", width: 1200, height: 900, alt: "Tienda online profesional desde 490€" }],
  },
};

export default function TiendaOnlineLandingPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-700 to-primary-900 text-white">
        <div className="max-w-5xl mx-auto px-4 py-20 text-center">
          <span className="inline-block bg-accent-500 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest mb-6">Oferta especial junio — Solo 5 plazas</span>
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
          <p className="text-primary-300 text-sm mt-6">Solo quedan 5 plazas disponibles este mes</p>
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
              "Oferta SEO 6x3 disponible al contratar la tienda",
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
          <h2 className="text-2xl font-bold mb-3">Solo 5 plazas disponibles este mes</h2>
          <p className="text-primary-200 mb-6">Nuestra capacidad de producción es limitada para garantizar la calidad. Cuando se cubran las 5 plazas, cerramos la oferta.</p>
          <a href="#contacto" className="bg-accent-500 text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-accent-600 transition-colors inline-block">
            Quiero mi plaza — 490€
          </a>
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
