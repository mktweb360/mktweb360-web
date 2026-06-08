import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Diseño de Páginas Corporativas — Webs Empresariales",
  description: "Diseño de páginas web corporativas profesionales para empresas. Proyecta imagen de marca, genera confianza y consigue clientes online.",
  alternates: { canonical: "https://www.mktweb360.com/diseno-de-paginas-web/paginas-corporativas/" },
};

export default function PaginasCorporativasPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <Breadcrumbs crumbs={[
        { label: "Inicio", href: "/" },
        { label: "Diseño Web", href: "/diseno-de-paginas-web/" },
        { label: "Páginas Corporativas" },
      ]} />
      <h1 className="text-4xl font-bold text-primary-600 mb-4">Diseño de Páginas Corporativas</h1>
      <p className="text-xl text-gray-600 mb-8 leading-relaxed">
        Una web corporativa profesional es la tarjeta de presentación de tu empresa en internet. Diseñamos sitios que proyectan confianza y generan oportunidades de negocio.
      </p>
      <section className="prose max-w-none text-gray-700 mb-8 space-y-4">
        <p>Las páginas corporativas son el eje central de tu presencia digital. Son el punto de encuentro donde tus clientes potenciales evalúan si pueden confiar en tu empresa antes de contactarte. Un diseño profesional, una carga rápida y un mensaje claro marcan la diferencia entre conseguir un lead o perderlo ante la competencia.</p>
        <p>En Mkt Web 360 diseñamos páginas corporativas adaptadas a cada sector y empresa: desde pequeños negocios locales hasta medianas empresas con múltiples departamentos y servicios.</p>
      </section>
      <section className="bg-primary-50 rounded-2xl p-8 mb-8">
        <h2 className="text-2xl font-bold text-primary-600 mb-4">¿Qué incluye una web corporativa?</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {[
            "Página de inicio con propuesta de valor clara",
            "Páginas de servicios o productos detalladas",
            "Página Sobre nosotros y equipo",
            "Blog o sección de noticias",
            "Formulario de contacto con RGPD",
            "Integración con Google Maps",
            "Certificado SSL y hosting incluido el primer año",
            "SEO técnico optimizado desde el inicio",
          ].map((f) => (
            <div key={f} className="flex gap-2 text-gray-700">
              <span className="text-accent-500 font-bold">✓</span>
              <span className="text-sm">{f}</span>
            </div>
          ))}
        </div>
      </section>
      <section className="mb-8">
        <h2 className="text-2xl font-bold text-primary-600 mb-4">Sectores en los que trabajamos</h2>
        <p className="text-gray-700 leading-relaxed">
          Diseñamos webs corporativas para empresas de construcción y reformas, clínicas y centros médicos, despachos de abogados y asesorías, empresas de servicios industriales, agencias inmobiliarias, centros de formación, restaurantes y hostelería, y muchos más sectores.
        </p>
      </section>
      <div className="text-center mt-8">
        <Link href="/contacto/" className="bg-accent-500 text-white px-8 py-4 rounded-full font-bold hover:bg-accent-600 transition-colors">
          Solicitar presupuesto
        </Link>
      </div>
    </div>
  );
}
