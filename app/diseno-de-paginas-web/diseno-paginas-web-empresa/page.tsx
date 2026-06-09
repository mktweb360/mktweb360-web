import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";

import { RelatedArticles } from "@/components/RelatedArticles";

export const metadata: Metadata = {
  title: "Diseño de Páginas Web para Empresas — Soluciones a Medida",
  description: "Diseño de páginas web para empresas con funcionalidades avanzadas. Soluciones a medida, intranets, portales y plataformas web empresariales.",
  alternates: { canonical: "https://www.mktweb360.com/diseno-de-paginas-web/diseno-paginas-web-empresa/" },
};

export default function PaginasWebEmpresaPage() {
  return (
    <>
    <div className="max-w-4xl mx-auto px-4 py-12">
      <Breadcrumbs crumbs={[
        { label: "Inicio", href: "/" },
        { label: "Diseño Web", href: "/diseno-de-paginas-web/" },
        { label: "Webs para Empresas" },
      ]} />
      <h1 className="text-4xl font-bold text-primary-600 mb-4">Diseño de Páginas Web para Empresas</h1>
      <p className="text-xl text-gray-600 mb-8 leading-relaxed">
        Soluciones web a medida para empresas medianas y grandes que necesitan funcionalidades específicas: catálogos de productos, áreas privadas, intranets, portales de clientes y más.
      </p>
      <section className="bg-primary-50 rounded-2xl p-8 mb-8">
        <h2 className="text-2xl font-bold text-primary-600 mb-4">Proyectos empresariales que desarrollamos</h2>
        <ul className="space-y-3 text-gray-700">
          {[
            "Webs corporativas multi-idioma",
            "Portales de clientes con área privada",
            "Catálogos de productos online",
            "Webs con reservas y citas online",
            "Plataformas de formación e-learning",
            "Webs inmobiliarias con búsqueda avanzada",
            "Portales de servicios con presupuestadores online",
          ].map(item => (
            <li key={item} className="flex gap-3">
              <span className="text-accent-500 font-bold">✓</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </section>
      <section className="mb-8">
        <h2 className="text-2xl font-bold text-primary-600 mb-4">Nuestro proceso de trabajo</h2>
        <div className="space-y-4">
          {[
            { step: "1", title: "Análisis y consultoría", desc: "Estudiamos tu negocio, objetivos y competencia para proponer la solución web más adecuada." },
            { step: "2", title: "Diseño UX/UI", desc: "Creamos prototipos y diseños que priorizan la experiencia del usuario y los objetivos de negocio." },
            { step: "3", title: "Desarrollo", desc: "Programamos la web con las mejores tecnologías y seguimos los estándares web más actuales." },
            { step: "4", title: "Testing y lanzamiento", desc: "Probamos exhaustivamente en todos los dispositivos antes del lanzamiento para garantizar la calidad." },
          ].map(item => (
            <div key={item.step} className="flex gap-4 p-4 border border-gray-200 rounded-xl">
              <span className="text-accent-500 font-bold text-xl shrink-0 w-8">{item.step}.</span>
              <div>
                <h3 className="font-semibold text-primary-700 mb-1">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      <div className="text-center">
        <Link href="/contacto/" className="bg-accent-500 text-white px-8 py-4 rounded-full font-bold hover:bg-accent-600 transition-colors">
          Hablar de tu proyecto
        </Link>
      </div>
    </div>
    <RelatedArticles category="Diseño Web" />
    </>
  );
}
