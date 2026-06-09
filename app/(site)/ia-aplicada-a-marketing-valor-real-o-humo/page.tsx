import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";

import { RelatedArticles } from "@/components/RelatedArticles";

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
    q: "¿La IA puede reemplazar a una agencia de marketing?",
    a: "No en el corto plazo, y probablemente nunca de forma completa. La IA puede automatizar tareas, generar borradores y analizar datos — pero la estrategia, la comprensión del negocio, la creatividad con criterio y la relación con el cliente siguen necesitando personas. Lo que sí está cambiando es que las agencias que usan bien la IA son más eficientes y pueden ofrecer más por el mismo precio.",
  },
  {
    q: "¿Puede la IA escribir contenido SEO de calidad?",
    a: "Puede generar borradores útiles y acelerar la producción de contenido, pero el contenido 100% generado por IA sin revisión humana suele ser genérico, repetitivo y carente de perspectiva real. El mejor enfoque es usar IA para acelerar la escritura y un experto para darle criterio, contexto y diferenciación.",
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

          <h2 className="text-2xl font-bold text-primary-600">Valor real vs hype: 10 usos de IA en marketing</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-primary-600 text-white">
                  <th className="px-4 py-3 text-left font-semibold">Uso de IA</th>
                  <th className="px-4 py-3 text-left font-semibold">Valor real</th>
                  <th className="px-4 py-3 text-left font-semibold">Nivel de hype</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Borradores de contenido y textos", "Alto — acelera x3 la producción con revisión humana", "Alto"],
                  ["Segmentación automatizada de audiencias", "Alto — mejora la relevancia de campañas", "Medio"],
                  ["Optimización de pujas en Ads", "Muy alto — Google y Meta Ads lo hacen mejor que manualmente", "Bajo"],
                  ["Análisis de sentimiento en reseñas", "Medio — útil si hay volumen suficiente", "Alto"],
                  ["Chatbots de atención al cliente", "Medio — solo para FAQs muy estructuradas", "Muy alto"],
                  ["Generación de imágenes para campañas", "Medio — rápido para variantes, limitado para branding", "Muy alto"],
                  ["Personalización de email marketing", "Alto — mejora tasas de apertura y clic", "Medio"],
                  ["Predicción de leads de mayor valor", "Alto — si tienes suficientes datos históricos", "Medio"],
                  ["Estrategia de marca y posicionamiento", "Bajo — requiere comprensión profunda del negocio", "Muy alto"],
                  ["A/B testing automatizado", "Alto — reduce tiempo de pruebas y mejora resultados", "Bajo"],
                ].map(([uso, valor, hype]) => (
                  <tr key={uso} className="border-b border-gray-200 even:bg-gray-50">
                    <td className="px-4 py-3 font-medium text-gray-800">{uso}</td>
                    <td className="px-4 py-3 text-gray-600 text-xs">{valor}</td>
                    <td className={`px-4 py-3 text-xs font-semibold ${hype === "Muy alto" ? "text-red-600" : hype === "Alto" ? "text-amber-600" : "text-green-600"}`}>{hype}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="bg-primary-50 rounded-xl p-6 border border-primary-100">
            <p className="font-semibold text-primary-700 mb-2">¿Estás valorando aplicar IA en tu marketing?</p>
            <p className="text-gray-600 text-sm mb-4">Te ayudamos a evaluar qué usos de IA tienen sentido en tu caso específico, según tu sector, equipo y situación actual. Sin vender herramientas que no necesitas.</p>
            <Link href="/contacto/" className="inline-block bg-accent-500 text-white px-6 py-2.5 rounded-full font-semibold text-sm hover:bg-accent-600 transition-colors">
              Solicitar consulta sobre IA y marketing
            </Link>
          </div>

          <h2 className="text-2xl font-bold text-primary-600">Dónde la IA sí aporta valor real</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { title: "Contenido a escala", desc: "Generar variantes de anuncios, borradores de artículos y adaptaciones para distintos canales en una fracción del tiempo. Con revisión humana, la calidad es perfectamente aceptable." },
              { title: "Segmentación automatizada", desc: "Identificar patrones de comportamiento en bases de datos grandes para personalizar mensajes según el perfil, sin hacerlo manualmente uno por uno." },
              { title: "Análisis de respuestas", desc: "Analizar cientos de reseñas, respuestas de encuestas o menciones en redes para extraer patrones y temas recurrentes que serían imposibles de procesar manualmente." },
              { title: "A/B testing acelerado", desc: "Plataformas con IA pueden probar decenas de variantes simultáneamente y converger hacia la mejor combinación más rápido que los tests manuales tradicionales." },
            ].map(({ title, desc }) => (
              <div key={title} className="border border-gray-200 rounded-xl p-5">
                <h3 className="font-semibold text-primary-700 mb-2 flex items-center gap-2"><span className="text-green-500">✓</span> {title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>

          <h2 className="text-2xl font-bold text-primary-600">Dónde la IA decepciona</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { title: "Estrategia de marca", desc: "La IA puede generar opciones y analizar mercados, pero no entiende el ADN de una empresa, su historia o sus matices culturales. La dirección estratégica sigue siendo humana." },
              { title: "Dirección creativa", desc: "Las herramientas de IA generan promedio — lo estadísticamente probable. La creatividad que rompe con lo esperado y conecta emocionalmente aún necesita intuición humana." },
              { title: "Venta relacional", desc: "En ventas B2B de ticket alto, la relación, la confianza y la empatía son los factores determinantes. Un proceso de venta automatizado en exceso aleja al cliente." },
              { title: "Decisiones con contexto complejo", desc: "La IA trabaja bien con datos históricos y patrones, pero cuando hay contexto nuevo, cambios de mercado o factores cualitativos, el juicio humano es imprescindible." },
            ].map(({ title, desc }) => (
              <div key={title} className="border border-red-100 bg-red-50 rounded-xl p-5">
                <h3 className="font-semibold text-gray-800 mb-2 flex items-center gap-2"><span className="text-red-500">✗</span> {title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>

          <h2 className="text-2xl font-bold text-primary-600">5 preguntas antes de implementar IA en tu marketing</h2>
          <ol className="space-y-3 list-decimal pl-5">
            {[
              "¿El problema que quiero resolver con IA está bien definido o estoy implementando por moda?",
              "¿Tengo suficientes datos de calidad para que la IA aprenda o decida correctamente?",
              "¿Mi equipo puede entender y supervisar lo que hace la herramienta de IA?",
              "¿Cuál es el coste de un error cometido por la IA en este proceso?",
              "¿Hay una solución más simple y barata que resuelva el mismo problema?",
            ].map((q) => (
              <li key={q} className="text-gray-700 pl-2">{q}</li>
            ))}
          </ol>

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
