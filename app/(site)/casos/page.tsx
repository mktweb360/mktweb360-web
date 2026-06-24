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
    images: [{ url: "/og-casos.jpg", width: 1200, height: 630 }],
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


        <div className="bg-gray-50 rounded-2xl p-8 mb-12">
          <h2 className="text-2xl font-bold text-primary-600 mb-4">Cómo medimos el éxito de un proyecto</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            En Mkt Web 360 no trabajamos con métricas de vanidad. No medimos el éxito de un proyecto por el número de seguidores, las impresiones o el tráfico genérico. Medimos el éxito por resultados de negocio reales: más consultas entrantes, más clientes, más ventas, mejor posicionamiento en las búsquedas que realmente generan negocio.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Cada proyecto empieza con un diagnóstico honesto de la situación actual y unos objetivos concretos y medibles. Definimos qué vamos a conseguir, en qué plazo y cómo lo vamos a medir. Y al final de cada mes, los datos hablan por sí solos.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Los casos que mostramos a continuación son proyectos reales con clientes reales. No incluimos métricas exactas cuando el cliente prefiere mantenerlas confidenciales, pero sí describimos la situación de partida, el trabajo realizado y los resultados obtenidos con la mayor precisión posible.
          </p>
        </div>

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


        {/* Metodología */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-primary-600 mb-6">Nuestra forma de trabajar</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Independientemente del sector o del tamaño del proyecto, todos los proyectos de Mkt Web 360 siguen el mismo proceso:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { titulo: "Diagnóstico honesto", desc: "Antes de proponer nada, analizamos la situación real. Si hay problemas técnicos, de contenido o de estrategia, los decimos claramente con evidencias." },
              { titulo: "Objetivos medibles", desc: "Definimos qué vamos a conseguir y cómo lo vamos a medir. Sin promesas vacías, sin KPIs de vanidad. Solo métricas que se traducen en negocio real." },
              { titulo: "Ejecución sin rodeos", desc: "Implementamos lo acordado con rigor y en los plazos comprometidos. Comunicación clara, sin sorpresas y con el cliente informado en todo momento." },
              { titulo: "Seguimiento y ajuste", desc: "El trabajo no termina con la entrega. Monitorizamos los resultados, identificamos oportunidades de mejora y ajustamos la estrategia cada mes." },
            ].map(m => (
              <div key={m.titulo} className="bg-primary-50 rounded-xl p-5 border border-primary-100">
                <p className="font-bold text-primary-700 mb-1">{m.titulo}</p>
                <p className="text-gray-600 text-sm leading-relaxed">{m.desc}</p>
              </div>
            ))}
          </div>
        </section>

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
