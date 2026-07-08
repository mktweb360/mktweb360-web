import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ContactForm } from "@/components/ContactForm";
import { RelatedArticles } from "@/components/RelatedArticles";
import { OfertaVeranoBanner } from "@/components/OfertaVeranoBanner";

export const metadata: Metadata = {
  title: "Posicionamiento en IA: GEO para ChatGPT, Perplexity y Gemini",
  description: "Aparece cuando tus clientes preguntan a ChatGPT, Perplexity o Gemini. GEO (Generative Engine Optimization): el nuevo SEO para la era de la búsqueda por IA. Servicio nacional.",
  alternates: { canonical: "https://www.mktweb360.com/geo-posicionamiento-ia/" },
  openGraph: {
    title: "GEO — Posicionamiento en IA | Mkt Web 360",
    description: "Optimiza tu presencia para que los motores de IA te recomienden cuando tus clientes preguntan. ChatGPT, Perplexity, Gemini, Claude.",
    url: "https://www.mktweb360.com/geo-posicionamiento-ia/",
    images: [{ url: "https://www.mktweb360.com/og-geo.jpg", width: 1200, height: 630 }],
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "GEO — Generative Engine Optimization",
  serviceType: "Generative Engine Optimization",
  provider: { "@type": "Organization", name: "Mkt Web 360 SLU", url: "https://www.mktweb360.com" },
  description: "Posicionamiento en motores de búsqueda generativa: ChatGPT, Perplexity, Gemini y Claude. Optimización de contenidos para LLMs, implementación de llms.txt y estrategia de autoridad semántica.",
  areaServed: "España",
  url: "https://www.mktweb360.com/geo-posicionamiento-ia/",
  offers: {
    "@type": "Offer",
    description: "Posicionamiento en motores de IA (ChatGPT, Gemini, Perplexity) integrado con SEO. Presupuesto personalizado según proyecto.",
    priceCurrency: "EUR",
    availability: "https://schema.org/InStock",
    url: "https://www.mktweb360.com/geo-posicionamiento-ia/",
  },
};
const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Inicio", item: "https://www.mktweb360.com/" },
    { "@type": "ListItem", position: 2, name: "GEO Posicionamiento IA", item: "https://www.mktweb360.com/geo-posicionamiento-ia/" },
  ],
};

const GEO_SERVICES = [
  {
    title: "Auditoría de visibilidad en IA",
    desc: "Analizamos cómo te mencionan (o no te mencionan) ChatGPT, Perplexity, Gemini y Claude cuando alguien busca servicios como los tuyos. El punto de partida que define la estrategia.",
  },
  {
    title: "Optimización de contenidos para LLMs",
    desc: "Reescribimos y estructuramos tus contenidos clave para que los modelos de lenguaje los procesen, comprendan y citen con mayor probabilidad. Formato, densidad semántica y autoridad.",
  },
  {
    title: "Implementación de llms.txt",
    desc: "Creamos y mantenemos los archivos llms.txt y llms-full.txt de tu sitio: el estándar emergente que indica a los LLMs qué información indexar y cómo entender tu negocio.",
  },
  {
    title: "Estrategia de autoridad semántica",
    desc: "Construimos un mapa de entidades y relaciones semánticas que refuerzan tu posicionamiento como referente en tu sector ante los modelos de IA generativa.",
  },
  {
    title: "Contenido citeable y estructurado",
    desc: "Desarrollamos piezas de contenido — estadísticas, guías, definiciones — diseñadas específicamente para ser citadas por asistentes de IA como fuentes de referencia.",
  },
  {
    title: "Seguimiento mensual de menciones IA",
    desc: "Monitorizamos tu visibilidad en los principales motores de IA, rastreamos menciones, comparamos con competidores y ajustamos la estrategia según los datos.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "¿El GEO reemplaza al SEO?", acceptedAnswer: { "@type": "Answer", text: "No — son complementarios. El SEO sigue siendo esencial para captar tráfico de Google, que representa la mayoría del volumen de búsqueda actual. El GEO añade visibilidad en el canal que está creciendo más rápido: los asistentes de IA. La estrategia más sólida trabaja los dos canales simultáneamente." } },
    { "@type": "Question", name: "¿Cuánto tarda en verse el impacto del GEO?", acceptedAnswer: { "@type": "Answer", text: "Los cambios técnicos como llms.txt se implementan en días. La mejora en la frecuencia con la que los modelos de IA mencionan tu marca depende de la autoridad de tu contenido y puede tardar entre 2 y 4 meses en ser perceptible. Es un canal en construcción — quien empiece antes tendrá ventaja." } },
    { "@type": "Question", name: "¿Cómo se mide la visibilidad en IA?", acceptedAnswer: { "@type": "Answer", text: "Hacemos consultas periódicas a los principales LLMs con las preguntas que haría un cliente potencial tuyo y registramos si apareces, cómo apareces y qué se dice. Es una metodología en evolución porque el sector es muy nuevo, pero ya permite detectar tendencias y oportunidades claras." } },
    { "@type": "Question", name: "¿El GEO funciona para cualquier sector?", acceptedAnswer: { "@type": "Answer", text: "Sí, aunque el impacto varía según el volumen de búsquedas conversacionales que exista en tu sector. Servicios profesionales, salud, tecnología, formación y marketing digital son los sectores donde el GEO tiene mayor impacto inmediato. Para sectores más locales o de nicho, la oportunidad está en posicionarse antes de que la competencia lo descubra." } },
  ],
};

export default function GEOPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <section className="bg-gradient-to-br from-primary-700 to-primary-900 text-white">
        <div className="max-w-6xl mx-auto px-4 py-16">
          <Breadcrumbs crumbs={[{ label: "Inicio", href: "/" }, { label: "GEO — Posicionamiento IA" }]} />
          <div className="max-w-3xl mt-4">
            <span className="inline-block bg-accent-500 text-white text-xs font-bold px-3 py-1 rounded-full mb-4 uppercase tracking-wide">
              Nuevo servicio
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Tus clientes ya no solo buscan en Google.<br />
              <span className="text-accent-400">Ahora le preguntan a la IA.</span>
            </h1>
            <p className="text-xl text-primary-200 mb-8 leading-relaxed italic">
              ¿Apareces cuando te buscan en ChatGPT, Perplexity o Gemini?
            </p>
            <p className="text-lg text-primary-100 mb-8 leading-relaxed">
              El GEO (Generative Engine Optimization) es la disciplina que optimiza tu presencia digital para que los motores de búsqueda por IA te recomienden cuando un usuario pregunta sobre servicios como los tuyos. Es el complemento natural al SEO tradicional en la nueva era de la búsqueda.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#contacto" className="bg-accent-500 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-accent-600 transition-colors text-center">
                Quiero aparecer en la IA
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-primary-600 py-6 px-4">
        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 text-center text-white">
          {[
            { value: "ChatGPT", label: "más de 180M usuarios activos" },
            { value: "Perplexity", label: "el buscador IA de más crecimiento" },
            { value: "Gemini", label: "IA integrada en Google Search" },
            { value: "Claude", label: "asistente IA de Anthropic" },
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
            <h2 className="text-3xl font-bold text-primary-600 mb-4">¿Qué es el GEO y por qué importa ahora?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">El comportamiento de búsqueda está cambiando. Millones de personas ya consultan a asistentes de IA antes de visitar una web.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-8 border border-gray-200">
              <h3 className="font-bold text-primary-600 text-lg mb-4">SEO tradicional</h3>
              <ul className="space-y-3 text-sm text-gray-600">
                {[
                  "Posicionamiento en resultados de Google",
                  "El usuario hace clic y visita tu web",
                  "Optimización para algoritmos de rastreo",
                  "Keywords, backlinks, velocidad de carga",
                  "Métricas: posiciones, tráfico orgánico",
                ].map((i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-primary-400 font-bold shrink-0 mt-0.5">→</span>{i}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-primary-600 rounded-2xl p-8 text-white">
              <h3 className="font-bold text-accent-400 text-lg mb-4">GEO — IA Search</h3>
              <ul className="space-y-3 text-sm text-primary-100">
                {[
                  "Visibilidad en respuestas de ChatGPT, Perplexity, Gemini",
                  "El asistente IA te recomienda directamente",
                  "Optimización para modelos de lenguaje (LLMs)",
                  "Autoridad semántica, contenido citeable, llms.txt",
                  "Métricas: menciones en IA, share of voice generativo",
                ].map((i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-accent-400 font-bold shrink-0 mt-0.5">✓</span>{i}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary-600 mb-4">Qué incluye el servicio GEO</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Un enfoque completo para que los motores de IA te conozcan, te entiendan y te recomienden.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {GEO_SERVICES.map((s) => (
              <div key={s.title} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="w-10 h-10 rounded-full bg-primary-50 flex items-center justify-center mb-4">
                  <svg className="w-5 h-5 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-.189m-1.5.189a6.01 6.01 0 0 1-1.5-.189m3.75 7.478a12.06 12.06 0 0 1-4.5 0m3.75 2.383a14.406 14.406 0 0 1-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 1 0-7.517 0c.85.493 1.509 1.333 1.509 2.316V18"/></svg>
                </div>
                <h3 className="font-bold text-primary-600 mb-2">{s.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* POR QUÉ GEO */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-primary-600 mb-8">Por qué el GEO es el próximo gran cambio en captación digital</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            El SEO tradicional optimiza para aparecer en Google. Pero el comportamiento del usuario está cambiando: cada vez más personas hacen sus búsquedas directamente en ChatGPT, Perplexity, Claude o Gemini y toman decisiones basándose en lo que estos sistemas responden — sin llegar a visitar Google. Si tu empresa no aparece en esas respuestas, no existes para ese segmento de usuarios.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            El GEO — Generative Engine Optimization — es la disciplina que optimiza tu presencia digital para que los modelos de lenguaje te recomienden cuando un usuario pregunta por servicios como los tuyos. No se trata de trucos técnicos ni de engañar a la IA. Se trata de que tu contenido sea suficientemente claro, estructurado y autoritativo para que los LLMs lo consideren una fuente relevante.
          </p>
          <p className="text-gray-700 leading-relaxed">
            En Mkt Web 360 fuimos de los primeros en España en desarrollar un servicio de GEO estructurado. Mantenemos llms.txt y llms-full.txt activos, optimizamos el contenido para intención de búsqueda conversacional y monitorizamos mensualmente la visibilidad de la marca en los principales motores de IA.
          </p>
        </div>
      </section>

      {/* CÓMO TRABAJAMOS EL GEO */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary-600 mb-4">Cómo trabajamos el GEO</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Un proceso estructurado en cuatro fases para construir y mantener tu visibilidad en los motores de IA.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                num: "01",
                title: "Auditoría de visibilidad en IA",
                desc: "Comprobamos cómo aparece tu marca y tus servicios en ChatGPT, Perplexity, Gemini y Claude. Identificamos si apareces, con qué frecuencia, en qué contexto y qué dicen los modelos sobre ti o sobre tu sector.",
              },
              {
                num: "02",
                title: "Optimización de contenido para LLMs",
                desc: "Reescribimos o ampliamos el contenido de las páginas clave para que responda con claridad a las preguntas que los usuarios hacen a los asistentes de IA. Prosa natural, datos verificables, autoridad temática.",
              },
              {
                num: "03",
                title: "Implementación técnica",
                desc: "Configuramos llms.txt y llms-full.txt con la información estructurada de tu empresa y servicios. Implementamos schema markup avanzado y aseguramos que los crawlers de LLMs tienen acceso correcto a tu contenido.",
              },
              {
                num: "04",
                title: "Seguimiento mensual",
                desc: "Monitorizamos la visibilidad de tu marca en los principales motores generativos. Cada mes recibes un informe con cómo apareces, qué ha cambiado y qué acciones tomamos para mejorar.",
              },
            ].map((step) => (
              <div key={step.num} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex gap-5">
                <span className="text-4xl font-bold text-primary-100 shrink-0 leading-none">{step.num}</span>
                <div>
                  <h3 className="font-bold text-primary-600 mb-2">{step.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Oferta verano */}
      <OfertaVeranoBanner />

      {/* FAQs GEO */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-primary-600 mb-4">Preguntas frecuentes sobre GEO</h2>
          </div>
          <div className="space-y-4">
            {[
              {
                q: "¿El GEO reemplaza al SEO?",
                a: "No — son complementarios. El SEO sigue siendo esencial para captar tráfico de Google, que representa la mayoría del volumen de búsqueda actual. El GEO añade visibilidad en el canal que está creciendo más rápido: los asistentes de IA. La estrategia más sólida trabaja los dos canales simultáneamente.",
              },
              {
                q: "¿Cuánto tarda en verse el impacto del GEO?",
                a: "Los cambios técnicos como llms.txt se implementan en días. La mejora en la frecuencia con la que los modelos de IA mencionan tu marca depende de la autoridad de tu contenido y puede tardar entre 2 y 4 meses en ser perceptible. Es un canal en construcción — quien empiece antes tendrá ventaja.",
              },
              {
                q: "¿Cómo se mide la visibilidad en IA?",
                a: "Hacemos consultas periódicas a los principales LLMs con las preguntas que haría un cliente potencial tuyo y registramos si apareces, cómo apareces y qué se dice. Es una metodología en evolución porque el sector es muy nuevo, pero ya permite detectar tendencias y oportunidades claras.",
              },
              {
                q: "¿El GEO funciona para cualquier sector?",
                a: "Sí, aunque el impacto varía según el volumen de búsquedas conversacionales que exista en tu sector. Servicios profesionales, salud, tecnología, formación y marketing digital son los sectores donde el GEO tiene mayor impacto inmediato. Para sectores más locales o de nicho, la oportunidad está en posicionarse antes de que la competencia lo descubra.",
              },
            ].map((faq) => (
              <div key={faq.q} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                <h3 className="font-bold text-primary-600 mb-2">{faq.q}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-primary-50">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-white border border-primary-200 rounded-full px-4 py-2 text-sm text-primary-600 font-medium mb-6">
            <svg className="w-4 h-4 text-accent-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
            Nota técnica
          </div>
          <h2 className="text-2xl font-bold text-primary-600 mb-4">Este sitio ya implementa llms.txt</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Mkt Web 360 es una de las primeras agencias de marketing digital en España en implementar el estándar <strong>llms.txt</strong> — el archivo que indica a los modelos de lenguaje cómo entender e indexar un sitio web.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Puedes consultarlo en{" "}
            <a href="/llms.txt" className="text-accent-500 hover:underline font-medium">mktweb360.com/llms.txt</a>
            {" "}y{" "}
            <a href="/llms-full.txt" className="text-accent-500 hover:underline font-medium">mktweb360.com/llms-full.txt</a>.
            Aplicamos en nuestra propia web exactamente lo que ofrecemos a nuestros clientes.
          </p>
        </div>
      </section>

      <section id="contacto" className="py-16 px-4 bg-primary-600 text-white">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-4">¿Apareces cuando te buscan en ChatGPT?</h2>
            <p className="text-primary-200">Cuéntanos tu negocio y hacemos una auditoría de visibilidad en IA sin compromiso. Descubre si te mencionan, cómo y qué se puede mejorar.</p>
          </div>
          <div className="bg-white rounded-2xl p-8">
            <ContactForm formType="geo" />
          </div>
        </div>
      </section>

      <RelatedArticles category="Marketing Digital" title="Más sobre búsqueda IA y GEO" />
    </>
  );
}
