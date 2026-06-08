import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Diseño de Páginas Web Profesionales — Mkt Web 360",
  description:
    "Diseño de páginas web profesionales, tiendas online y webs corporativas. Webs rápidas, modernas y optimizadas para SEO y conversión.",
  alternates: { canonical: "https://www.mktweb360.com/diseno-de-paginas-web/" },
  openGraph: {
    title: "Diseño de Páginas Web Profesionales | Mkt Web 360",
    description: "Webs profesionales, rápidas y optimizadas para SEO. Servicio nacional.",
    url: "https://www.mktweb360.com/diseno-de-paginas-web/",
  },
};

const SUB_SERVICES = [
  {
    title: "Páginas Corporativas",
    desc: "Webs institucionales para empresas que quieren proyectar una imagen profesional y generar confianza.",
    href: "/diseno-de-paginas-web/paginas-corporativas/",
  },
  {
    title: "Tiendas Online",
    desc: "E-commerce completos con WooCommerce o Shopify para vender tus productos en todo el mundo.",
    href: "/diseno-de-paginas-web/diseno-tiendas-online/",
  },
  {
    title: "Webs para Empresas",
    desc: "Soluciones web a medida para empresas de cualquier tamaño con funcionalidades específicas.",
    href: "/diseno-de-paginas-web/diseno-paginas-web-empresa/",
  },
];

export default function WebDesignPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <Breadcrumbs crumbs={[{ label: "Inicio", href: "/" }, { label: "Diseño Web" }]} />
      <h1 className="text-4xl font-bold text-primary-600 mb-4">
        Diseño de Páginas Web Profesionales
      </h1>
      <p className="text-xl text-gray-600 mb-8 leading-relaxed">
        Diseñamos y desarrollamos páginas web modernas, rápidas y orientadas a convertir visitantes en clientes. Cada proyecto es único y se adapta a las necesidades específicas de tu negocio.
      </p>
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        {SUB_SERVICES.map((s) => (
          <Link
            key={s.href}
            href={s.href}
            className="border border-gray-200 rounded-xl p-6 hover:shadow-md hover:border-primary-200 transition-all group"
          >
            <h2 className="text-xl font-bold text-primary-600 mb-3 group-hover:text-accent-500 transition-colors">{s.title}</h2>
            <p className="text-gray-600 text-sm leading-relaxed">{s.desc}</p>
            <span className="mt-4 inline-block text-accent-500 text-sm font-medium">Ver más →</span>
          </Link>
        ))}
      </section>
      <section className="bg-primary-50 rounded-2xl p-8 mb-8">
        <h2 className="text-2xl font-bold text-primary-600 mb-4">Características de nuestras webs</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {[
            "Diseño responsive adaptado a móvil",
            "Velocidad de carga optimizada (Core Web Vitals)",
            "SEO técnico incluido desde el inicio",
            "Panel de administración intuitivo",
            "Certificado SSL incluido",
            "Formularios de contacto y RGPD",
            "Integración con Google Analytics",
            "Soporte y mantenimiento post-entrega",
          ].map((f) => (
            <div key={f} className="flex gap-2 text-gray-700">
              <span className="text-accent-500 font-bold">✓</span>
              <span className="text-sm">{f}</span>
            </div>
          ))}
        </div>
      </section>
      <div className="text-center">
        <Link
          href="/contacto/"
          className="bg-accent-500 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-accent-600 transition-colors"
        >
          Solicitar presupuesto web
        </Link>
      </div>
    </div>
  );
}
