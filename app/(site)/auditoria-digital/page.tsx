import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ContactForm } from "@/components/ContactForm";

import { RelatedArticles } from "@/components/RelatedArticles";

export const metadata: Metadata = {
  title: "Auditoría Digital para Empresas | Diagnóstico SEO y Marketing | Mkt Web 360",
  description:
    "Diagnóstico completo de tu presencia online: SEO técnico, velocidad, contenidos, competencia, redes sociales y analítica. Informe detallado + plan de acción.",
  alternates: { canonical: "https://www.mktweb360.com/auditoria-digital/" },
  openGraph: {
    title: "Auditoría Digital para Empresas | Diagnóstico SEO y Marketing | Mkt Web 360",
    description: "Auditoría digital completa para saber exactamente por qué tu empresa no consigue los resultados que merece online.",
    url: "https://www.mktweb360.com/auditoria-digital/",
    images: [{ url: "/og-auditoria-digital.jpg", width: 1200, height: 630 }],
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Auditoría Digital para Empresas",
  provider: { "@type": "Organization", name: "Mkt Web 360 SLU", url: "https://www.mktweb360.com" },
  description: "Diagnóstico completo de presencia online: SEO técnico, velocidad, contenidos, competencia, redes sociales y analítica. Informe detallado + plan de acción priorizado + sesión de presentación.",
  areaServed: "España",
  url: "https://www.mktweb360.com/auditoria-digital/",
};

const ANALISIS = [
  { icon: "🔍", title: "SEO técnico", desc: "Indexación, rastreo, arquitectura web, datos estructurados, canonicals, Core Web Vitals y errores de servidor." },
  { icon: "✍️", title: "Contenidos", desc: "Calidad, relevancia y optimización de textos, páginas huérfanas, canibalización de keywords y oportunidades de contenido." },
  { icon: "⚡", title: "Velocidad y rendimiento", desc: "PageSpeed, tiempo de carga, recursos bloqueantes, imágenes y hosting. Análisis en móvil y escritorio." },
  { icon: "🏆", title: "Competencia", desc: "Quién te supera en Google y por qué. Estrategias que están funcionando en tu sector y cómo superarlas." },
  { icon: "📱", title: "Redes sociales", desc: "Presencia, engagement, coherencia de marca y oportunidades de mejora en cada red relevante para tu negocio." },
  { icon: "📊", title: "Analítica web", desc: "Configuración de Google Analytics / GA4, conversiones, embudos y fiabilidad de los datos que estás midiendo." },
];

const FASES = [
  { num: "01", title: "Recopilación de información", desc: "Acceso a tus herramientas (Search Console, Analytics, Ads) y estudio de tu sector, competencia y objetivos de negocio." },
  { num: "02", title: "Análisis exhaustivo", desc: "Revisión técnica y estratégica de todos los componentes de tu presencia digital. Proceso que tarda entre 5 y 7 días laborables." },
  { num: "03", title: "Elaboración del informe", desc: "Documento completo con hallazgos, problemas ordenados por prioridad e impacto, y recomendaciones accionables." },
  { num: "04", title: "Sesión de presentación", desc: "Reunión online para explicar los resultados, responder tus dudas y definir juntos los primeros pasos a dar." },
];

const PARA_QUIEN = [
  "Empresas que llevan tiempo online pero no consiguen resultados orgánicos",
  "Negocios que acaban de lanzar una web y quieren empezar bien desde el principio",
  "Empresas que están cambiando de estrategia digital y quieren saber dónde están",
  "Equipos internos que quieren una segunda opinión externa y objetiva",
  "Negocios que han tenido caídas de tráfico o posicionamiento sin causa clara",
];

export default function AuditoriaDigitalPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />

      <div className="max-w-4xl mx-auto px-4 py-12">
        <Breadcrumbs crumbs={[{ label: "Inicio", href: "/" }, { label: "Auditoría Digital" }]} />

        <h1 className="text-4xl font-bold text-primary-600 mb-4">
          Auditoría Digital — Diagnóstico completo de tu presencia online
        </h1>
        <p className="text-xl text-gray-600 mb-8 leading-relaxed">
          Si no sabes por qué tu web no genera clientes, una auditoría digital te da la respuesta. Analizamos cada capa de tu presencia online y te entregamos un plan de acción claro y priorizado.
        </p>

        {/* Qué es */}
        <section className="bg-primary-50 rounded-2xl p-8 mb-12">
          <h2 className="text-2xl font-bold text-primary-600 mb-4">¿Qué es una auditoría digital y para qué sirve?</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Una auditoría digital es un análisis sistemático y completo de todos los elementos que determinan el rendimiento online de tu empresa. Es el punto de partida imprescindible antes de invertir en cualquier acción de marketing digital.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Sin un diagnóstico previo, cualquier inversión en SEO, publicidad o redes sociales es como conducir a ciegas. La auditoría te dice exactamente dónde estás, dónde están tus oportunidades y qué acciones tendrán mayor impacto con menor esfuerzo.
          </p>
        </section>

        {/* Qué analizamos */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-primary-600 mb-6">Qué analizamos</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {ANALISIS.map((item) => (
              <div key={item.title} className="flex gap-4 p-4 border border-gray-200 rounded-xl">
                <span className="text-3xl shrink-0">{item.icon}</span>
                <div>
                  <h3 className="font-semibold text-primary-700 mb-1">{item.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Proceso */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-primary-600 mb-6">Cómo es el proceso</h2>
          <div className="space-y-4">
            {FASES.map((fase) => (
              <div key={fase.num} className="flex gap-4 p-4 border border-gray-200 rounded-xl">
                <span className="text-accent-500 font-bold text-2xl shrink-0 w-10">{fase.num}</span>
                <div>
                  <h3 className="font-semibold text-primary-700 mb-1">{fase.title}</h3>
                  <p className="text-gray-600 text-sm">{fase.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Qué recibes */}
        <section className="bg-gray-50 rounded-2xl p-8 mb-12">
          <h2 className="text-2xl font-bold text-primary-600 mb-4">Qué recibes</h2>
          <ul className="space-y-3">
            {[
              { icon: "📄", text: "Informe detallado con todos los hallazgos organizados por área y nivel de impacto" },
              { icon: "🗂️", text: "Plan de acción priorizado con las mejoras ordenadas por facilidad e impacto esperado" },
              { icon: "🎥", text: "Sesión de presentación online para explicar el informe y resolver todas tus dudas" },
              { icon: "📋", text: "Listado de Quick Wins: acciones de bajo esfuerzo que puedes implementar de inmediato" },
            ].map((item) => (
              <li key={item.icon} className="flex items-start gap-3">
                <span className="text-2xl shrink-0">{item.icon}</span>
                <span className="text-gray-700 leading-relaxed">{item.text}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Para quién */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-primary-600 mb-4">¿Para quién es esta auditoría?</h2>
          <ul className="space-y-3">
            {PARA_QUIEN.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="text-accent-500 font-bold shrink-0">✓</span>
                <span className="text-gray-700">{item}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* CTA */}
        <section className="bg-primary-600 text-white rounded-2xl p-8">
          <h2 className="text-2xl font-bold mb-4">Solicitar auditoría gratuita</h2>
          <p className="text-primary-200 mb-6">
            Cuéntanos tu proyecto y realizamos un diagnóstico inicial sin coste. Sin compromiso, sin letra pequeña.
          </p>
          <div className="bg-white rounded-xl p-6">
            <ContactForm />
          </div>
        </section>
      </div>
      <RelatedArticles category="Estrategia" title="Artículos sobre estrategia y auditoría" />
    </>
  );
}
