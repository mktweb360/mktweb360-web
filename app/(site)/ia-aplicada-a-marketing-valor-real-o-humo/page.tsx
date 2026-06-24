import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";

import { RelatedArticles } from "@/components/RelatedArticles";
import { BlogBanner } from "@/components/BlogBanner";

export const metadata: Metadata = {
  title: "IA aplicada a marketing: dónde aporta valor real en 2025",
  description:
    "Descubre dónde la IA aplicada a marketing aporta valor real, qué usos conviene priorizar y dónde sigue habiendo demasiado ruido.",
  alternates: { canonical: "https://www.mktweb360.com/ia-aplicada-a-marketing-valor-real-o-humo/" },
  openGraph: {
    title: "IA aplicada a marketing: dónde aporta valor real en 2025 | Mkt Web 360",
    description: "Descubre dónde la IA aplicada a marketing aporta valor real, qué usos conviene priorizar y dónde sigue habiendo demasiado ruido.",
    url: "https://www.mktweb360.com/ia-aplicada-a-marketing-valor-real-o-humo/",
    type: "article",
    images: [{ url: "/og-ia-aplicada-a-marketing-valor-real-o-humo.jpg", width: 1200, height: 630 }],
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "IA aplicada a marketing: dónde aporta valor real y dónde sigue siendo humo",
  description: "Descubre dónde la IA aplicada a marketing aporta valor real, qué usos conviene priorizar y dónde sigue habiendo demasiado ruido.",
  author: { "@type": "Organization", name: "Mkt Web 360 SLU" },
  publisher: { "@type": "Organization", name: "Mkt Web 360 SLU", url: "https://www.mktweb360.com" },
  datePublished: "2025-03-01",
  url: "https://www.mktweb360.com/ia-aplicada-a-marketing-valor-real-o-humo/",
  mainEntityOfPage: "https://www.mktweb360.com/ia-aplicada-a-marketing-valor-real-o-humo/",
};

const FAQS = [
  {
    q: "¿La IA puede sustituir a un equipo de marketing?",
    a: "No de forma seria. Puede asistir, acelerar y ordenar, pero el criterio, el contexto y la supervisión siguen siendo clave para tomar buenas decisiones.",
  },
  {
    q: "¿Cuándo tiene sentido usar agentes IA?",
    a: "Cuando existe una tarea repetida o costosa, un objetivo claro, contexto útil y un margen de error aceptable con supervisión humana.",
  },
  {
    q: "¿Penaliza Google el contenido generado por IA?",
    a: "Google no penaliza el contenido generado por IA per se — penaliza el contenido de baja calidad, independientemente de cómo se haya producido. Si el contenido IA es útil, relevante y aporta valor real, puede posicionar bien. El problema es que mucho contenido IA masivo es precisamente lo contrario.",
  },
  {
    q: "¿Qué herramientas de IA son útiles para marketing digital en una pyme?",
    a: "Las más útiles para una pyme en 2025 son: ChatGPT o Claude para borradores de contenido y respuestas rápidas, Canva con IA para diseño de materiales, herramientas de IA integradas en Google Ads para optimización de pujas, y plataformas de email marketing con segmentación predictiva como Brevo o HubSpot.",
  },
  {
    q: "¿Merece la pena implementar IA en marketing si soy una pyme pequeña?",
    a: "Sí, en algunos casos concretos. Programar publicaciones con sugerencias de IA, usar ChatGPT para responder consultas frecuentes o generar variantes de anuncios son usos con bajo coste de implementación y beneficio claro. Lo que no merece la pena es implementar sistemas complejos de IA antes de tener la base del marketing bien resuelta.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export default function IaMarketingPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <article className="max-w-3xl mx-auto px-4 py-12">
        <Breadcrumbs crumbs={[{ label: "Inicio", href: "/" }, { label: "Blog", href: "/blog/" }, { label: "IA aplicada a marketing: valor real o humo" }]} />

        <header className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="bg-primary-100 text-primary-700 text-xs font-medium px-2.5 py-0.5 rounded-full">IA · Estrategia</span>
            <time className="text-sm text-gray-400" dateTime="2025-03-01">1 de marzo de 2025</time>
          </div>
          <h1 className="text-4xl font-bold text-primary-600 mb-4 leading-tight">
            IA aplicada a marketing: dónde aporta valor real y dónde sigue siendo humo
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            La inteligencia artificial en marketing está entre lo más hypeado de 2025 y una de las herramientas más útiles si sabes dónde aplicarla. Este artículo separa la señal del ruido.
          </p>
        </header>

        <div className="text-gray-700 space-y-6 leading-relaxed">
          <p>
            Es difícil abrir LinkedIn o asistir a un webinar sin escuchar que &ldquo;la IA lo va a cambiar todo&rdquo;. Parte de eso es cierto — parte es hype de vendedores de herramientas y formadores. El problema es que muchas empresas están implementando IA en marketing por presión de moda, sin una evaluación real de dónde aporta valor y dónde solo añade complejidad.
          </p>
          <p>
            La IA no es una estrategia — es una herramienta. Y como cualquier herramienta, su valor depende de si la usas para el trabajo correcto. Usada bien, puede multiplicar la productividad del equipo y mejorar la personalización a escala. Usada mal, genera contenido mediocre en masa y añade capas de automatización que nadie entiende.
          </p>

          <h2 className="text-2xl font-bold text-primary-600">Dónde sí aporta valor hoy</h2>
          <p>La generación de borradores de contenido, la optimización de pujas en plataformas de publicidad, la personalización de email marketing, la segmentación automatizada con datos suficientes y el análisis de grandes volúmenes de texto son áreas donde la IA tiene un impacto real y medible. En estas tareas libera tiempo, mejora la consistencia y permite trabajar a una escala que antes no era posible.</p>
          <ul className="space-y-2">
            {["Borradores y variantes de contenido con revisión humana", "Optimización automática de pujas en Ads", "Segmentación y personalización con datos históricos", "Análisis de reseñas, encuestas y menciones a escala"].map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-gray-700 py-1">
                <span className="text-accent-500 font-bold shrink-0 mt-0.5">✓</span>
                {item}
              </li>
            ))}
          </ul>

          <div className="bg-primary-50 rounded-xl p-6 border border-primary-100">
            <p className="font-semibold text-primary-700 mb-2">¿Estás valorando aplicar IA en tu marketing?</p>
            <p className="text-gray-600 text-sm mb-4">Te ayudamos a evaluar qué usos de IA tienen sentido en tu caso específico, según tu sector, equipo y situación actual. Sin vender herramientas que no necesitas.</p>
            <Link href="/contacto/" className="inline-block bg-accent-500 text-white px-6 py-2.5 rounded-full font-semibold text-sm hover:bg-accent-600 transition-colors">
              Solicitar consulta sobre IA y marketing
            </Link>
          </div>

          <h2 className="text-2xl font-bold text-primary-600">Dónde conviene ser prudente</h2>
          <p>La estrategia de marca, la creatividad diferenciadora, las decisiones con mucho contexto cualitativo y la venta relacional de ticket alto son áreas donde la IA genera resultados mediocres o directamente perjudica. También hay que ser prudente con los chatbots que gestionan reclamaciones o primeras interacciones en sectores donde la confianza es clave. La regla práctica es: cuanto más importa el criterio y el contexto, menos conviene delegar a la IA sin supervisión.</p>

          <h2 className="text-2xl font-bold text-primary-600">Qué necesita una empresa antes de aplicar IA con criterio</h2>
          <p>La IA trabaja bien cuando el problema está bien definido, los datos son fiables y la supervisión existe. Si no hay claridad sobre qué se quiere resolver, si los datos son escasos o de mala calidad, o si nadie en la empresa va a revisar lo que genera la herramienta, el resultado será mediocre o contraproducente. Antes de implementar IA, lo que conviene revisar es si la base del marketing está bien resuelta.</p>

          <BlogBanner variant="geo" />

          <h2 className="text-2xl font-bold text-primary-600">IA y agentes: enfoque correcto</h2>
          <p>Los agentes de IA permiten automatizar flujos más complejos con mayor autonomía, pero también tienen más puntos de fallo y exigen supervisión más cuidadosa. Para una pyme, el enfoque más útil suele ser empezar por usos concretos y bien acotados en lugar de implementar sistemas de agentes complejos. La complejidad sin propósito claro es un coste sin retorno.</p>

          <p className="text-sm text-gray-500">
            Ver también: <Link href="/que-puede-automatizar-una-pyme-en-marketing-y-ventas/" className="text-accent-500 hover:underline">Qué puede automatizar una pyme en marketing y ventas</Link> · <Link href="/que-revisar-antes-de-invertir-mas-en-marketing-digital/" className="text-accent-500 hover:underline">Qué revisar antes de invertir más en marketing digital</Link>
          </p>

          <div className="bg-primary-600 text-white rounded-2xl p-8 my-2 text-center">
            <h2 className="text-2xl font-bold mb-3">Detecta usos reales de IA para tu empresa</h2>
            <p className="text-primary-200 mb-6">
              Te ayudamos a identificar dónde tiene sentido aplicar IA en tu marketing según tu situación actual, sin vender herramientas que no necesitas y sin ignorar las que sí pueden ayudarte.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/auditoria-digital/" className="bg-accent-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-accent-600 transition-colors">
                Solicitar diagnóstico digital
              </Link>
              <Link href="/contacto/" className="border-2 border-white text-white px-6 py-3 rounded-full font-semibold hover:bg-white/10 transition-colors">
                Hablar con un especialista
              </Link>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-primary-600">Preguntas frecuentes sobre IA en marketing</h2>
          <div className="space-y-3">
            {FAQS.map((faq) => (
              <details key={faq.q} className="border border-gray-200 rounded-xl overflow-hidden group">
                <summary className="px-6 py-4 cursor-pointer font-semibold text-primary-700 hover:bg-primary-50 list-none flex justify-between items-center">
                  {faq.q}
                  <span className="text-accent-500 group-open:rotate-180 transition-transform">▾</span>
                </summary>
                <div className="px-6 py-4 text-gray-600 border-t border-gray-100">{faq.a}</div>
              </details>
            ))}
          </div>

          <p className="text-sm text-gray-500 pt-4">
            Ver también: <Link href="/como-generar-leads-calidad-pyme/" className="text-accent-500 hover:underline">Cómo generar leads de calidad para una pyme</Link> · <Link href="/auditoria-digital/" className="text-accent-500 hover:underline">Auditoría Digital</Link>
          </p>
        </div>

        <nav className="mt-12 pt-8 border-t border-gray-200">
          <Link href="/blog/" className="text-accent-500 hover:text-accent-600 font-medium text-sm">← Volver al blog</Link>
        </nav>
      </article>
      <RelatedArticles currentSlug="ia-aplicada-a-marketing-valor-real-o-humo" />
    </>
  );
}
