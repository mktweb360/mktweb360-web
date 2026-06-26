import Image from "next/image";
﻿import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import Link from "next/link";

import { RelatedArticles } from "@/components/RelatedArticles";
import { BlogBanner } from "@/components/BlogBanner";

export const metadata: Metadata = {
  title: "Análisis DAFO en Marketing Digital — Guía Completa",
  description: "Todo lo que necesitas saber sobre el análisis DAFO en tu estrategia de marketing digital. Debilidades, Amenazas, Fortalezas y Oportunidades con ejemplos prácticos.",
  alternates: { canonical: "https://www.mktweb360.com/todo-lo-que-necesitas-saber-sobre-el-analisis-dafo-en-tu-estrategia-de-marketing/" },
  openGraph: {
    title: "Análisis DAFO en tu Estrategia de Marketing Digital | Mkt Web 360",
    description: "Aprende a aplicar el análisis DAFO en marketing digital con ejemplos prácticos para empresas españolas.",
    url: "https://www.mktweb360.com/todo-lo-que-necesitas-saber-sobre-el-analisis-dafo-en-tu-estrategia-de-marketing/",
    type: "article",
    images: [{ url: "/og-todo-lo-que-necesitas-saber-sobre-el-analisis-dafo.jpg", width: 1200, height: 630 }],
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "Todo lo que Necesitas Saber sobre el Análisis DAFO en tu Estrategia de Marketing",
  description: "Guía completa sobre el análisis DAFO aplicado al marketing digital.",
  author: { "@type": "Organization", name: "Mkt Web 360 SLU" },
  publisher: { "@type": "Organization", name: "Mkt Web 360 SLU", url: "https://www.mktweb360.com" },
  datePublished: "2024-01-10",
  url: "https://www.mktweb360.com/todo-lo-que-necesitas-saber-sobre-el-analisis-dafo-en-tu-estrategia-de-marketing/",
  mainEntityOfPage: "https://www.mktweb360.com/todo-lo-que-necesitas-saber-sobre-el-analisis-dafo-en-tu-estrategia-de-marketing/",
};

export default function AnalisisDAFOPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <article className="max-w-3xl mx-auto px-4 py-12">
        <Breadcrumbs crumbs={[{ label: "Inicio", href: "/" }, { label: "Blog", href: "/blog/" }, { label: "Análisis DAFO en Marketing" }]} />
        <header className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="bg-primary-100 text-primary-700 text-xs font-medium px-2.5 py-0.5 rounded-full">Estrategia</span>
            <time className="text-sm text-gray-400" dateTime="2024-01-10">10 de enero de 2024</time>
          </div>
          <h1 className="text-4xl font-bold text-primary-600 mb-4 leading-tight">
            Todo lo que Necesitas Saber sobre el Análisis DAFO en tu Estrategia de Marketing
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            El análisis DAFO es una de las herramientas más potentes para diseñar estrategias de marketing efectivas. Aprende a aplicarlo en tu empresa con ejemplos prácticos.
          </p>
          <Image
            src="/og-todo-lo-que-necesitas-saber-sobre-el-analisis-dafo.jpg"
            alt="Análisis DAFO en Marketing Digital — Guía Completa"
            width={1200}
            height={630}
            className="w-full rounded-2xl mt-6"
            priority
          />
        </header>
        <div className="text-gray-700 space-y-6 leading-relaxed">
          <h2 className="text-2xl font-bold text-primary-600">¿Qué es el análisis DAFO?</h2>
          <p>El DAFO (Debilidades, Amenazas, Fortalezas, Oportunidades) — también conocido como SWOT en inglés — es una herramienta de análisis estratégico que permite evaluar la situación actual de una empresa tanto desde una perspectiva interna como externa.</p>
          <p>Es la base de cualquier plan de marketing serio porque te obliga a ser honesto sobre dónde estás, qué tienes y qué desafíos enfrentas, antes de definir hacia dónde quieres ir.</p>

          <h2 className="text-2xl font-bold text-primary-600">Los 4 componentes del DAFO</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-red-50 border border-red-200 rounded-xl p-5">
              <h3 className="font-bold text-red-700 mb-2">D — Debilidades (internas)</h3>
              <p className="text-sm text-red-800">Aspectos internos negativos que perjudican a la empresa y que debemos mejorar. Ejemplos: web desactualizada, poca presencia en redes sociales, sin recursos para publicidad.</p>
            </div>
            <div className="bg-orange-50 border border-orange-200 rounded-xl p-5">
              <h3 className="font-bold text-orange-700 mb-2">A — Amenazas (externas)</h3>
              <p className="text-sm text-orange-800">Factores externos negativos que pueden perjudicar a la empresa. Ejemplos: nueva competencia online, cambios en el algoritmo de Google, crisis económica en el sector.</p>
            </div>
            <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-5">
              <h3 className="font-bold text-emerald-700 mb-2">F — Fortalezas (internas)</h3>
              <p className="text-sm text-emerald-800">Aspectos internos positivos que diferencian a la empresa. Ejemplos: amplia experiencia, cartera de clientes fidelizados, producto único, equipo especializado.</p>
            </div>
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-5">
              <h3 className="font-bold text-blue-700 mb-2">O — Oportunidades (externas)</h3>
              <p className="text-sm text-blue-800">Factores externos positivos que podemos aprovechar. Ejemplos: crecimiento del comercio electrónico, subvenciones Kit Digital, tendencia hacia lo local y sostenible.</p>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-primary-600">Cómo aplicar el DAFO en marketing digital</h2>
          <p>Una vez completado el análisis DAFO, el siguiente paso es cruzar los cuadrantes para definir estrategias:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>F + O (Estrategias ofensivas):</strong> Usa tus fortalezas para aprovechar las oportunidades. Si eres experto en tu sector y hay demanda creciente online, crea contenido que te posicione como referente.</li>
            <li><strong>D + O (Estrategias de reorientación):</strong> Supera tus debilidades aprovechando oportunidades. Si tu web está desactualizada pero el Kit Digital ofrece financiación, es el momento de renovarla.</li>
            <li><strong>F + A (Estrategias defensivas):</strong> Usa tus fortalezas para minimizar amenazas. Si entra nueva competencia, refuerza la fidelización de clientes actuales con un programa de retención.</li>
            <li><strong>D + A (Estrategias de supervivencia):</strong> Minimiza debilidades y amenazas simultáneamente. Si tu presencia digital es débil y la competencia online crece, la acción urgente es el SEO y la presencia en redes.</li>
          </ul>

          <BlogBanner variant="default" />

          <h2 className="text-2xl font-bold text-primary-600">Ejemplo práctico: DAFO para una clínica dental</h2>
          <p>Supongamos una clínica dental con 10 años de experiencia en una ciudad mediana:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li><strong>Fortalezas:</strong> Reputación local consolidada, equipo especializado, tecnología moderna.</li>
            <li><strong>Debilidades:</strong> Sin presencia en redes sociales, web con más de 5 años, sin sistema de reseñas.</li>
            <li><strong>Oportunidades:</strong> Creciente búsqueda de dentistas en Google, implantes y estética dental en auge.</li>
            <li><strong>Amenazas:</strong> Nuevas clínicas con fuerte inversión en marketing digital, franquicias low-cost.</li>
          </ul>
          <p><strong>Estrategia resultante:</strong> Renovar la web con enfoque en tratamientos estéticos (F+O), implementar un sistema de reseñas en Google (D+O) y reforzar el SEO local antes de que la competencia consolide su posición (F+A).</p>

          <div className="bg-primary-50 rounded-xl p-6 border border-primary-100">
            <p className="font-semibold text-primary-700 mb-2">¿Necesitas ayuda para definir tu estrategia de marketing?</p>
            <p className="text-gray-600 text-sm mb-4">En Mkt Web 360 realizamos análisis completos de tu situación digital y diseñamos estrategias personalizadas basadas en datos reales.</p>
            <Link href="/contacto/" className="bg-accent-500 text-white px-6 py-2.5 rounded-full font-semibold text-sm hover:bg-accent-600 transition-colors">
              Solicitar consultoría gratuita
            </Link>
          </div>
        </div>
        <nav className="mt-12 pt-8 border-t border-gray-200">
          <Link href="/blog/" className="text-accent-500 hover:text-accent-600 font-medium text-sm">← Volver al blog</Link>
        </nav>
      </article>
      <RelatedArticles currentSlug="todo-lo-que-necesitas-saber-sobre-el-analisis-dafo-en-tu-estrategia-de-marketing" />
    </>
  );
}
