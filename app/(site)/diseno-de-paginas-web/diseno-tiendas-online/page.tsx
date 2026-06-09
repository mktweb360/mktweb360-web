import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";

import { RelatedArticles } from "@/components/RelatedArticles";

export const metadata: Metadata = {
  title: "Diseño de Tiendas Online — E-commerce Profesional",
  description: "Diseño y desarrollo de tiendas online profesionales con WooCommerce y Shopify. Vende tus productos en internet con un e-commerce optimizado.",
  alternates: { canonical: "https://www.mktweb360.com/diseno-de-paginas-web/diseno-tiendas-online/" },
};

export default function TiendasOnlinePage() {
  return (
    <>
    <div className="max-w-4xl mx-auto px-4 py-12">
      <Breadcrumbs crumbs={[
        { label: "Inicio", href: "/" },
        { label: "Diseño Web", href: "/diseno-de-paginas-web/" },
        { label: "Tiendas Online" },
      ]} />
      <h1 className="text-4xl font-bold text-primary-600 mb-4">Diseño de Tiendas Online Profesionales</h1>
      <p className="text-xl text-gray-600 mb-8 leading-relaxed">
        Desarrollamos tiendas online completas y optimizadas para vender tus productos en internet. WooCommerce, Shopify y soluciones a medida para cualquier tipo de negocio.
      </p>
      <section className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
        {[
          { title: "WooCommerce", desc: "Ideal para negocios que ya usan WordPress o quieren máxima flexibilidad y control." },
          { title: "Shopify", desc: "Solución robusta y escalable perfecta para negocios centrados en ventas online." },
          { title: "Pasarelas de pago", desc: "Integración con Stripe, PayPal, Redsys y transferencia bancaria." },
          { title: "SEO e-commerce", desc: "Optimización técnica para posicionar tu tienda y sus productos en Google Shopping." },
        ].map(item => (
          <div key={item.title} className="bg-gray-50 rounded-xl p-5 border border-gray-200">
            <h3 className="font-semibold text-primary-700 mb-2">{item.title}</h3>
            <p className="text-gray-600 text-sm">{item.desc}</p>
          </div>
        ))}
      </section>
      <section className="bg-primary-50 rounded-2xl p-8 mb-8">
        <h2 className="text-2xl font-bold text-primary-600 mb-4">Todo lo que incluye tu tienda online</h2>
        <ul className="space-y-2 text-gray-700">
          {[
            "Diseño personalizado adaptado a tu marca",
            "Catálogo de productos con variantes, precios y stock",
            "Gestión de pedidos y clientes desde el panel admin",
            "Integración con transportistas y seguimiento de envíos",
            "Facturación automática y gestión fiscal",
            "Diseño 100% responsive para móvil y tablet",
            "Velocidad de carga optimizada para Google",
            "Formación para gestionar tu tienda de forma autónoma",
          ].map(item => (
            <li key={item} className="flex gap-2">
              <span className="text-accent-500 font-bold">✓</span>
              <span className="text-sm">{item}</span>
            </li>
          ))}
        </ul>
      </section>
      <div className="text-center">
        <Link href="/contacto/" className="bg-accent-500 text-white px-8 py-4 rounded-full font-bold hover:bg-accent-600 transition-colors">
          Solicitar presupuesto tienda online
        </Link>
      </div>
    </div>
    <RelatedArticles category="Ecommerce" />
    </>
  );
}
