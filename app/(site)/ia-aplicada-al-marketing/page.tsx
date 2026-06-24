import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ContactForm } from "@/components/ContactForm";
import { RelatedArticles } from "@/components/RelatedArticles";

export const metadata: Metadata = {
  title: "IA Aplicada al Marketing Digital — Mkt Web 360",
  description: "Integramos inteligencia artificial en cada servicio de marketing digital. Protocolos propios de IA para resultados más rápidos, análisis más precisos y mejores decisiones. Servicio nacional.",
  alternates: { canonical: "https://www.mktweb360.com/ia-aplicada-al-marketing/" },
  openGraph: {
    title: "IA Aplicada al Marketing Digital | Mkt Web 360",
    description: "La experiencia de un equipo senior. La precisión de la inteligencia artificial. Protocolos propios de IA en cada servicio.",
    url: "https://www.mktweb360.com/ia-aplicada-al-marketing/",
    images: [{ url: "/og-ia-aplicada-al-marketing.jpg", width: 1200, height: 630 }],
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Marketing Digital con Inteligencia Artificial",
  provider: { "@type": "Organization", name: "Mkt Web 360 SLU", url: "https://www.mktweb360.com" },
  description: "Integración de inteligencia artificial en servicios de marketing digital. Protocolos propios de IA para SEO, SEM, contenidos y analítica.",
  areaServed: "España",
  url: "https://www.mktweb360.com/ia-aplicada-al-marketing/",
};

const IA_SERVICES = [
  {
    title: "SEO potenciado con IA",
    desc: "Análisis de keywords, detección de oportunidades y auditorías técnicas aceleradas con herramientas de IA. Lo que antes tardaba días, ahora lo resolvemos en horas.",
  },
  {
    title: "Contenidos optimizados",
    desc: "Protocolo propio de creación de contenido que combina criterio editorial humano con análisis de intención de búsqueda asistido por IA. Más precisión, menos tiempo.",
  },
  {
    title: "Analítica predictiva",
    desc: "Interpretación de datos y detección de patrones de comportamiento que permiten anticipar qué canales y mensajes van a convertir mejor.",
  },
  {
    title: "SEM y optimización de campañas",
    desc: "Análisis de competidores, segmentaciones y copies asistidos por IA para reducir el coste por conversión y mejorar el Quality Score.",
  },
  {
    title: "Automatización de procesos",
    desc: "Flujos de trabajo automatizados para reporting, seguimiento de posiciones, alertas de rendimiento y gestión de contenidos recurrentes.",
  },
  {
    title: "Estrategia y toma de decisiones",
    desc: "Procesamos más datos en menos tiempo para identificar oportunidades, detectar amenazas y tomar mejores decisiones que una agencia tradicional.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "¿El contenido que generáis con IA es original y de calidad?", acceptedAnswer: { "@type": "Answer", text: "Sí. La IA es una herramienta de trabajo, no el autor final. Todos los textos, artículos y copies pasan por revisión y edición humana antes de publicarse. La IA acelera la investigación y la estructura, pero el criterio editorial, el tono de marca y la calidad final los garantiza el equipo." } },
    { "@type": "Question", name: "¿Cómo sé que la IA no va a perjudicar mi posicionamiento en Google?", acceptedAnswer: { "@type": "Answer", text: "Google no penaliza el contenido generado con IA — penaliza el contenido de baja calidad, independientemente de cómo se haya creado. Nuestros protocolos producen contenido que responde en profundidad a la intención de búsqueda del usuario, que es exactamente lo que Google premia." } },
    { "@type": "Question", name: "¿Qué herramientas de IA utilizáis?", acceptedAnswer: { "@type": "Answer", text: "Usamos una combinación de herramientas propietarias y plataformas especializadas según la tarea: modelos de lenguaje para análisis y contenido, herramientas de análisis semántico para SEO, plataformas de automatización para reporting y flujos de trabajo, y herramientas de análisis de datos para campañas. No dependemos de una sola herramienta." } },
    { "@type": "Question", name: "¿La IA reemplaza al equipo humano en vuestro caso?", acceptedAnswer: { "@type": "Answer", text: "No. La IA amplifica la capacidad del equipo pero no toma decisiones estratégicas, no gestiona la relación con el cliente y no asume responsabilidad sobre los resultados. Todo eso lo hace el equipo humano. La IA nos permite hacer más y mejor, no hacer menos." } },
  ],
};

export default function IAMarketingPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <section className="bg-gradient-to-br from-primary-700 to-primary-900 text-white">
        <div className="max-w-6xl mx-auto px-4 py-16">
          <Breadcrumbs crumbs={[{ label: "Inicio", href: "/" }, { label: "IA Aplicada al Marketing" }]} />
          <div className="max-w-3xl mt-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              La experiencia de un equipo senior.<br />
              <span className="text-accent-400">La precisión de la inteligencia artificial.</span>
            </h1>
            <p className="text-xl text-primary-200 mb-8 leading-relaxed italic">
              Mientras tú trabajas, nosotros conseguimos que te llamen.
            </p>
            <p className="text-lg text-primary-100 mb-8 leading-relaxed">
              No usamos la IA como todos. Hemos desarrollado protocolos propios integrados en cada servicio que ofrecemos — para trabajar más rápido, analizar más datos y tomar mejores decisiones que una agencia tradicional. Y todo eso revierte en tus resultados.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#contacto" className="bg-accent-500 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-accent-600 transition-colors text-center">
                Descubrir cómo trabajamos
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-primary-600 py-6 px-4">
        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 text-center text-white">
          {[
            { value: "Más rápido", label: "que una agencia tradicional" },
            { value: "Más datos", label: "analizados por proyecto" },
            { value: "Protocolos", label: "propios desarrollados" },
            { value: "Mejores", label: "decisiones estratégicas" },
          ].map((m) => (
            <div key={m.label}>
              <div className="text-xl font-bold text-accent-400">{m.value}</div>
              <div className="text-xs text-primary-200 mt-1">{m.label}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary-600 mb-4">IA integrada en cada servicio</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">No es una herramienta añadida. Es parte del proceso desde el primer día.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {IA_SERVICES.map((s) => (
              <div key={s.title} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="w-10 h-10 rounded-full bg-primary-50 flex items-center justify-center mb-4">
                  <svg className="w-5 h-5 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456Z"/></svg>
                </div>
                <h3 className="font-bold text-primary-600 mb-2">{s.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-primary-600 mb-6">Por qué esto importa para tu negocio</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Una agencia tradicional analiza datos manualmente, tarda días en detectar oportunidades y semanas en implementar cambios. Nosotros procesamos la misma información en una fracción del tiempo.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                Eso se traduce en campañas que se optimizan antes, contenidos que posicionan más rápido, y decisiones estratégicas basadas en datos reales — no en intuición.
              </p>
              <blockquote className="border-l-4 border-accent-500 pl-6 italic text-primary-700">
                "Integración de métodos desarrollados personalizados con IA para el mejor rendimiento en tu proyecto."
              </blockquote>
            </div>
            <div className="bg-primary-600 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">Lo que la IA no reemplaza</h3>
              <p className="text-primary-200 mb-6 text-sm leading-relaxed">La IA amplifica el criterio humano — no lo sustituye. Cada estrategia, cada decisión y cada recomendación pasa por el juicio de nuestro equipo.</p>
              <ul className="space-y-3">
                {[
                  "Criterio estratégico del equipo senior",
                  "Conocimiento del sector y el cliente",
                  "Relación directa y comunicación continua",
                  "Responsabilidad sobre los resultados",
                  "Adaptación a cada negocio específico",
                ].map((i) => (
                  <li key={i} className="flex items-center gap-2 text-sm">
                    <span className="text-accent-400 font-bold shrink-0">✓</span>{i}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>


      {/* Qué significa IA en la práctica */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-primary-600 mb-6">Qué significa realmente integrar IA en marketing digital</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            La mayoría de agencias que dicen usar inteligencia artificial se refieren a usar ChatGPT para redactar textos o Midjourney para generar imágenes. Eso no es integración de IA — es usar herramientas genéricas sin criterio ni protocolo.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            En Mkt Web 360 hemos desarrollado protocolos propios que integran la IA en cada fase del trabajo: análisis de keywords, auditorías técnicas, creación de contenido, optimización de campañas, interpretación de datos y detección de oportunidades. No como sustituto del criterio humano sino como amplificador de la capacidad analítica del equipo.
          </p>
          <p className="text-gray-700 leading-relaxed">
            El resultado concreto para el cliente es simple: los mismos resultados en menos tiempo, o mejores resultados en el mismo tiempo. Una auditoría SEO que antes tardaba 3 días ahora tarda 4 horas. Un análisis de competidores que antes era superficial ahora cubre 50 variables. Una estrategia de contenidos que antes se basaba en intuición ahora se basa en datos de intención de búsqueda en tiempo real.
          </p>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-primary-600 mb-8">Preguntas frecuentes sobre IA en marketing digital</h2>
          <div className="space-y-4">
            {[
              { q: "¿El contenido que generáis con IA es original y de calidad?",
                a: "Sí. La IA es una herramienta de trabajo, no el autor final. Todos los textos, artículos y copies pasan por revisión y edición humana antes de publicarse. La IA acelera la investigación y la estructura, pero el criterio editorial, el tono de marca y la calidad final los garantiza el equipo." },
              { q: "¿Cómo sé que la IA no va a perjudicar mi posicionamiento en Google?",
                a: "Google no penaliza el contenido generado con IA — penaliza el contenido de baja calidad, independientemente de cómo se haya creado. Nuestros protocolos producen contenido que responde en profundidad a la intención de búsqueda del usuario, que es exactamente lo que Google premia." },
              { q: "¿Qué herramientas de IA utilizáis?",
                a: "Usamos una combinación de herramientas propietarias y plataformas especializadas según la tarea: modelos de lenguaje para análisis y contenido, herramientas de análisis semántico para SEO, plataformas de automatización para reporting y flujos de trabajo, y herramientas de análisis de datos para campañas. No dependemos de una sola herramienta." },
              { q: "¿La IA reemplaza al equipo humano en vuestro caso?",
                a: "No. La IA amplifica la capacidad del equipo pero no toma decisiones estratégicas, no gestiona la relación con el cliente y no asume responsabilidad sobre los resultados. Todo eso lo hace el equipo humano. La IA nos permite hacer más y mejor, no hacer menos." },
            ].map(faq => (
              <div key={faq.q} className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm">
                <h3 className="font-bold text-primary-700 mb-2">{faq.q}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contacto" className="py-16 px-4 bg-primary-600 text-white">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-4">Tu mejor cliente aún no te conoce</h2>
            <p className="text-primary-200">Vamos a presentaros. Cuéntanos tu proyecto y te explicamos cómo nuestra metodología IA puede acelerar tus resultados.</p>
          </div>
          <div className="bg-white rounded-2xl p-8">
            <ContactForm formType="ia-marketing" />
          </div>
        </div>
      </section>

      <RelatedArticles category="Marketing Digital" title="Más sobre marketing digital e IA" />
    </>
  );
}
