import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";

import { RelatedArticles } from "@/components/RelatedArticles";

export const metadata: Metadata = {
  title: "Casos de Éxito y Proyectos | Mkt Web 360 — Agencia de Marketing Digital",
  description:
    "Proyectos reales y resultados concretos. Casos de éxito de Mkt Web 360 en SEO, diseño web y marketing digital para empresas de distintos sectores.",
  alternates: { canonical: "https://www.mktweb360.com/casos/" },
  openGraph: {
    title: "Casos de Éxito y Proyectos | Mkt Web 360 — Agencia de Marketing Digital",
    description: "Descubre cómo hemos ayudado a empresas reales a mejorar su presencia digital y conseguir resultados medibles.",
    url: "https://www.mktweb360.com/casos/",
  },
};

const CASOS = [
  {
    cliente: "Domer Servicios Asistenciales",
    sector: "Servicios de atención a personas mayores",
    necesidad: "Mejorar la visibilidad online y captar nuevos clientes en un sector con alta demanda local pero poca presencia digital de los competidores.",
    servicios: ["SEO", "Diseño Web"],
    resultado: "Mejora significativa del posicionamiento orgánico en búsquedas locales. La empresa consigue aparecer en las primeras posiciones para las búsquedas de su zona, incrementando las consultas entrantes.",
    color: "blue",
  },
  {
    cliente: "Metalher SL",
    sector: "Industria metalúrgica",
    necesidad: "Crear una presencia digital profesional que transmitiese confianza a clientes B2B y generase contactos comerciales cualificados.",
    servicios: ["Diseño Web", "SEO técnico"],
    resultado: "Web corporativa profesional que refleja la calidad del trabajo de la empresa, con optimización técnica que facilita el posicionamiento en búsquedas B2B del sector metalúrgico.",
    color: "green",
  },
  {
    cliente: "Spirit White Siberian Husky",
    sector: "Cría canina especializada",
    necesidad: "Diferenciarse en un nicho muy específico y conseguir visibilidad online para atraer a compradores cualificados de toda España.",
    servicios: ["Diseño Web", "SEO", "Contenidos"],
    resultado: "Posicionamiento consolidado en búsquedas de nicho específico. Web de calidad que transmite la especialización y seriedad del criador, con contenidos que atraen a compradores con alta intención.",
    color: "purple",
  },
];

const itemListSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Casos de Éxito — Mkt Web 360",
  description: "Proyectos reales de marketing digital realizados por Mkt Web 360 para empresas de distintos sectores.",
  url: "https://www.mktweb360.com/casos/",
  itemListElement: CASOS.map((caso, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: caso.cliente,
    description: caso.resultado,
  })),
};

export default function CasosPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }} />

      <div className="max-w-4xl mx-auto px-4 py-12">
        <Breadcrumbs crumbs={[{ label: "Inicio", href: "/" }, { label: "Casos de Éxito" }]} />

        <h1 className="text-4xl font-bold text-primary-600 mb-4">
          Proyectos reales, resultados concretos
        </h1>
        <p className="text-xl text-gray-600 mb-8 leading-relaxed">
          Cada empresa tiene sus retos y sus objetivos. Aquí mostramos algunos de los proyectos en los que hemos trabajado y los resultados que hemos conseguido juntos.
        </p>

        {/* Casos */}
        <div className="space-y-10 mb-16">
          {CASOS.map((caso, index) => (
            <article key={caso.cliente} className="border border-gray-200 rounded-2xl overflow-hidden">
              <div className="bg-primary-600 text-white p-6">
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div>
                    <p className="text-primary-300 text-sm font-medium mb-1">Caso {String(index + 1).padStart(2, "0")}</p>
                    <h2 className="text-2xl font-bold">{caso.cliente}</h2>
                    <p className="text-primary-200 mt-1">{caso.sector}</p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {caso.servicios.map((s) => (
                      <span key={s} className="bg-accent-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-primary-700 mb-2 flex items-center gap-2">
                    <span className="text-accent-500">▸</span> Necesidad
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{caso.necesidad}</p>
                </div>
                <div>
                  <h3 className="font-semibold text-primary-700 mb-2 flex items-center gap-2">
                    <span className="text-accent-500">✓</span> Resultado
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{caso.resultado}</p>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* CTA */}
        <section className="bg-primary-600 text-white rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">¿Quieres resultados como estos?</h2>
          <p className="text-primary-200 mb-6 max-w-xl mx-auto">
            Cuéntanos tu proyecto. Analizamos tu situación actual y te decimos qué podemos conseguir juntos, con plazos y objetivos claros.
          </p>
          <Link
            href="/contacto/"
            className="inline-block bg-accent-500 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-accent-600 transition-colors"
          >
            Cuéntanos tu proyecto
          </Link>
        </section>
      </div>
      <RelatedArticles />
    </>
  );
}
