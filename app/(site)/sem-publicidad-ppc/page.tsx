import Image from "next/image";
import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ContactForm } from "@/components/ContactForm";
import { RelatedArticles } from "@/components/RelatedArticles";

export const metadata: Metadata = {
  title: "Campañas Google Ads — Gestión SEM España | Mkt Web 360",
  description: "Gestión profesional de campañas Google Ads y SEM/PPC para empresas españolas. Maximizamos tu inversión publicitaria con campañas optimizadas desde el primer día.",
  alternates: { canonical: "https://www.mktweb360.com/sem-publicidad-ppc/" },
  openGraph: {
    title: "Google Ads y SEM — Gestión de Campañas PPC | Mkt Web 360",
    description: "Campañas de Google Ads que generan clientes desde el primer día. Servicio nacional.",
    url: "https://www.mktweb360.com/sem-publicidad-ppc/",
    images: [{ url: "/imagen-sem.jpg", width: 1200, height: 900, alt: "Google Ads SEM Mkt Web 360" }],
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Gestión de Campañas Google Ads SEM",
  provider: { "@type": "Organization", name: "Mkt Web 360 SLU", url: "https://www.mktweb360.com" },
  description: "Gestión de campañas de publicidad SEM en Google Ads para empresas. Search, Display, Shopping y YouTube Ads.",
  areaServed: "España",
  url: "https://www.mktweb360.com/sem-publicidad-ppc/",
};

const CAMPAIGNS = [
  { title: "Google Search", desc: "Anuncios en los resultados de búsqueda para captar usuarios con intención de compra." },
  { title: "Google Display", desc: "Anuncios gráficos en millones de webs para aumentar tu visibilidad de marca." },
  { title: "Google Shopping", desc: "Anuncios de producto para tiendas online que muestran precio e imagen directamente." },
  { title: "YouTube Ads", desc: "Campañas de vídeo para aumentar el reconocimiento de marca y atraer nuevos clientes." },
  { title: "Remarketing", desc: "Impactamos de nuevo a usuarios que ya han visitado tu web para recuperar ventas perdidas." },
  { title: "Performance Max", desc: "Campañas inteligentes que optimizan automáticamente en todos los canales de Google." },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "¿Cuánto presupuesto mínimo necesito para empezar con Google Ads?", acceptedAnswer: { "@type": "Answer", text: "Depende del sector y la competencia. Para la mayoría de negocios locales o de servicios, 300-500€/mes de inversión publicitaria es suficiente para obtener datos relevantes. En sectores muy competitivos como seguros o préstamos, el mínimo sube considerablemente. Te hacemos una estimación gratuita antes de empezar." } },
    { "@type": "Question", name: "¿Cuánto cobráis de gestión?", acceptedAnswer: { "@type": "Answer", text: "Cobramos una tarifa fija mensual de gestión que no depende del presupuesto que inviertas en Google. No cobramos porcentaje sobre la inversión publicitaria — ese modelo incentiva a gastar más, no a optimizar. La tarifa fija nos alinea con tu objetivo: conseguir más al mismo coste." } },
    { "@type": "Question", name: "¿Los clics que pago son míos o de vosotros?", acceptedAnswer: { "@type": "Answer", text: "Todo es tuyo. La cuenta de Google Ads es tuya, la tienes en tu propiedad y tienes acceso completo en todo momento. Si decides cambiar de agencia o gestionar tú mismo, te llevas la cuenta con todo su historial, conversiones y datos acumulados." } },
    { "@type": "Question", name: "¿Puedo ver en tiempo real lo que se gasta?", acceptedAnswer: { "@type": "Answer", text: "Sí. Tienes acceso completo a tu cuenta de Google Ads donde puedes ver en tiempo real el gasto, los clics, las impresiones y las conversiones. Además recibes un informe mensual con el análisis e interpretación de los datos más relevantes." } },
  ],
};

export default function SemPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-700 to-primary-900 text-white">
        <div className="max-w-6xl mx-auto px-4 py-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <Breadcrumbs crumbs={[{ label: "Inicio", href: "/" }, { label: "SEM / Google Ads" }]} />
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight mt-4">
              Campañas Google Ads<br />
              <span className="text-accent-400">que generan clientes reales</span>
            </h1>
            <p className="text-xl text-primary-200 mb-8 leading-relaxed">
              Generamos clientes potenciales para tu negocio desde el primer día con campañas de Google Ads optimizadas y rentables. Pagamos solo cuando alguien hace clic.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#contacto" className="bg-accent-500 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-accent-600 transition-colors text-center">
                Análisis gratuito de cuenta
              </a>
            </div>
          </div>
          <div className="hidden md:block">
            <Image src="/imagen-sem.jpg" alt="Google Ads SEM" className="rounded-2xl shadow-2xl w-full object-cover" width={800} height={600} />
          </div>
        </div>
      </section>

      {/* Trust bar */}
      <section className="bg-primary-600 py-6 px-4">
        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 text-center text-white">
          {[
            { value: "Día 1", label: "resultados desde el inicio" },
            { value: "Certified", label: "especialistas Google Ads" },
            { value: "Sin %", label: "sobre inversión publicitaria" },
            { value: "Nacional", label: "servicio en toda España" },
          ].map((m) => (
            <div key={m.label}>
              <div className="text-xl font-bold text-accent-400">{m.value}</div>
              <div className="text-xs text-primary-200 mt-1">{m.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Campaigns */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary-600 mb-4">Tipos de campañas que gestionamos</h2>
            <p className="text-gray-600 max-w-xl mx-auto">Cada negocio necesita una estrategia diferente. Seleccionamos el mix de campañas que mejor se adapta a tus objetivos.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {CAMPAIGNS.map((item) => (
              <div key={item.title} className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="font-bold text-primary-700 mb-2">{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why us */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-primary-600 mb-6">Por qué elegirnos para tu Google Ads</h2>
              <div className="space-y-4">
                {[
                  "Gestión por especialistas certificados en Google Ads",
                  "Sin permanencia — flexibilidad total",
                  "Tarifa de gestión transparente sin porcentaje sobre inversión",
                  "Informe mensual con métricas reales: impresiones, clics, conversiones y coste por lead",
                  "Optimización continua: tests A/B, ajuste de pujas y segmentaciones",
                  "Seguimiento de conversiones configurado desde el primer día",
                ].map((item) => (
                  <div key={item} className="flex gap-3 items-start">
                    <span className="text-accent-500 font-bold mt-0.5 shrink-0">✓</span>
                    <span className="text-gray-700 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-primary-600 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">¿Cuánto deberías invertir en Google Ads?</h3>
              <p className="text-primary-200 mb-6 text-sm leading-relaxed">No existe una cifra universal. Depende de tu sector, competencia y objetivos. Lo que sí podemos decirte es el coste por lead estimado para tu negocio antes de empezar.</p>
              <ul className="space-y-3">
                {[
                  "Análisis de competencia y pujas de mercado",
                  "Estimación de volumen y coste por conversión",
                  "Propuesta de presupuesto mínimo eficiente",
                  "Sin compromiso — gratis y sin letra pequeña",
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


      {/* Por qué Google Ads */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-primary-600 mb-6">Por qué Google Ads es el canal de captación más rápido para tu negocio</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            El SEO tarda entre 3 y 6 meses en generar resultados. Google Ads genera clientes desde el primer día. Si necesitas leads ahora, si acabas de lanzar un producto o servicio, o si quieres testear qué mensajes funcionan mejor antes de invertir en contenido orgánico, Google Ads es la herramienta más eficiente que existe.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            El problema es que la mayoría de empresas pierde dinero en Google Ads no por culpa de la plataforma sino por una gestión deficiente: keywords mal segmentadas, anuncios genéricos, páginas de aterrizaje que no convierten, pujas sin estrategia y sin seguimiento de conversiones real. El resultado es gasto sin retorno y la conclusión equivocada de que Google Ads no funciona.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Una cuenta bien gestionada tiene keywords negativas actualizadas, anuncios RSA con extensiones completas, seguimiento de conversiones configurado correctamente, tests A/B activos y optimización mensual de pujas. La diferencia entre una cuenta gestionada profesionalmente y una no gestionada puede ser de 3x en el coste por lead con el mismo presupuesto.
          </p>
        </div>
      </section>

      {/* Proceso */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-primary-600 mb-8">Cómo gestionamos tus campañas</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { num: "01", title: "Auditoría y estrategia", desc: "Si tienes cuenta activa, auditamos el estado actual: estructura, keywords, negativos, anuncios y conversiones. Si empiezas desde cero, diseñamos la estructura óptima para tu negocio y sector." },
              { num: "02", title: "Configuración y lanzamiento", desc: "Configuramos la estructura de campañas, grupos de anuncios, keywords con sus tipos de concordancia, keywords negativas, extensiones y seguimiento de conversiones. Lanzamos con presupuesto controlado." },
              { num: "03", title: "Optimización continua", desc: "Monitorizamos el rendimiento diariamente las primeras semanas. Ajustamos pujas, pausamos keywords que no convierten, añadimos negativos de los términos de búsqueda reales y testeamos variaciones de anuncios." },
              { num: "04", title: "Informe y estrategia mensual", desc: "Cada mes recibes un informe con las métricas que importan: impresiones, clics, conversiones, coste por lead y ROAS. Revisamos la estrategia y definimos las acciones del mes siguiente." },
            ].map(step => (
              <div key={step.num} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                <span className="inline-block text-3xl font-bold text-accent-500 mb-3">{step.num}</span>
                <h3 className="font-bold text-primary-700 text-lg mb-2">{step.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sectores */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-primary-600 mb-6">Sectores en los que tenemos más experiencia</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Google Ads funciona en prácticamente cualquier sector donde haya demanda de búsqueda. Estos son los sectores donde tenemos mayor experiencia y datos de rendimiento acumulados:
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {[
              "Servicios del hogar", "Clínicas y salud", "Formación y academias",
              "Ecommerce y retail", "Inmobiliarias", "Servicios profesionales",
              "Hostelería y turismo", "Software y SaaS", "Construcción y reformas",
            ].map(s => (
              <div key={s} className="bg-primary-50 rounded-xl p-3 text-center border border-primary-100">
                <p className="text-primary-700 text-sm font-medium">{s}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-primary-600 mb-8">Preguntas frecuentes sobre Google Ads</h2>
          <div className="space-y-4">
            {[
              { q: "¿Cuánto presupuesto mínimo necesito para empezar con Google Ads?",
                a: "Depende del sector y la competencia. Para la mayoría de negocios locales o de servicios, 300-500€/mes de inversión publicitaria es suficiente para obtener datos relevantes. En sectores muy competitivos como seguros o préstamos, el mínimo sube considerablemente. Te hacemos una estimación gratuita antes de empezar." },
              { q: "¿Cuánto cobráis de gestión?",
                a: "Cobramos una tarifa fija mensual de gestión que no depende del presupuesto que inviertas en Google. No cobramos porcentaje sobre la inversión publicitaria — ese modelo incentiva a gastar más, no a optimizar. La tarifa fija nos alinea con tu objetivo: conseguir más al mismo coste." },
              { q: "¿Los clics que pago son míos o de vosotros?",
                a: "Todo es tuyo. La cuenta de Google Ads es tuya, la tienes en tu propiedad y tienes acceso completo en todo momento. Si decides cambiar de agencia o gestionar tú mismo, te llevas la cuenta con todo su historial, conversiones y datos acumulados." },
              { q: "¿Puedo ver en tiempo real lo que se gasta?",
                a: "Sí. Tienes acceso completo a tu cuenta de Google Ads donde puedes ver en tiempo real el gasto, los clics, las impresiones y las conversiones. Además recibes un informe mensual con el análisis e interpretación de los datos más relevantes." },
            ].map(faq => (
              <div key={faq.q} className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm">
                <h3 className="font-bold text-primary-700 mb-2">{faq.q}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* IA badge */}
      <section className="py-10 px-4 bg-white border-y border-gray-100">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-6 text-center md:text-left">
          <div className="shrink-0 w-14 h-14 rounded-full bg-primary-50 flex items-center justify-center">
            <svg className="w-7 h-7 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456Z"/></svg>
          </div>
          <div>
            <p className="text-lg font-semibold text-primary-700">La experiencia de un equipo senior. La precisión de la inteligencia artificial.</p>
            <p className="text-gray-500 text-sm mt-1">Protocolos propios de IA aplicados a cada campaña para reducir el coste por conversión y mejorar el rendimiento.</p>
          </div>
        </div>
      </section>

      {/* CTA Form */}
      <section id="contacto" className="py-16 px-4 bg-primary-600 text-white">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-4">Análisis gratuito de tu cuenta Google Ads</h2>
            <p className="text-primary-200">Revisamos tu cuenta actual o te ayudamos a crear una nueva con las mejores prácticas desde el inicio.</p>
          </div>
          <div className="bg-white rounded-2xl p-8">
            <ContactForm formType="sem" />
          </div>
        </div>
      </section>

      <RelatedArticles category="SEO" title="Más sobre captación digital" />
    </>
  );
}
