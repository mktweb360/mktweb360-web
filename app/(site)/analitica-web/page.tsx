import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ContactForm } from "@/components/ContactForm";
import { RelatedArticles } from "@/components/RelatedArticles";
import { alternatesFor } from "@/lib/i18n/routes";

export const metadata: Metadata = {
  title: "Analítica Web para Empresas — Datos que Generan Decisiones",
  description: "Servicio profesional de analítica web para empresas. Configuración de GA4, GTM, seguimiento de conversiones, dashboards de negocio e informes mensuales. Decisiones basadas en datos reales. Servicio nacional.",
  alternates: alternatesFor("/analitica-web/") ?? { canonical: "https://www.mktweb360.com/analitica-web/" },
  openGraph: {
    title: "Analítica Web para Empresas | Mkt Web 360",
    description: "Configuración de GA4, GTM, dashboards de negocio y seguimiento de conversiones. Decisiones basadas en datos reales.",
    url: "https://www.mktweb360.com/analitica-web/",
    images: [{ url: "/imagen-analitica-web.jpg", width: 1200, height: 900, alt: "Analítica web Mkt Web 360" }],
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Analítica Web para Empresas",
  provider: { "@type": "Organization", name: "Mkt Web 360 SLU", url: "https://www.mktweb360.com" },
  description: "Servicio profesional de analítica web para empresas. Configuración de GA4, GTM, dashboards de negocio y seguimiento de conversiones.",
  areaServed: "España",
  url: "https://www.mktweb360.com/analitica-web/",
};

const FAQS = [
  { q: "¿Qué diferencia hay entre Google Analytics 4 y Universal Analytics?",
    a: "Universal Analytics fue retirado en julio de 2023. GA4 es el estándar actual y funciona de forma diferente: mide eventos en lugar de sesiones, tiene un modelo de datos más flexible y está diseñado para medir tanto webs como apps. Si todavía tienes datos de UA y quieres migrarlos o entender GA4, te ayudamos con la transición." },
  { q: "¿Qué es Google Tag Manager y por qué lo necesito?",
    a: "Google Tag Manager es un sistema que centraliza todos los códigos de seguimiento de tu web (GA4, Google Ads, Meta Pixel, etc.) sin tocar el código de la web directamente. Facilita la gestión, reduce errores y permite implementar nuevos tags de forma ágil. Es la base de una medición profesional." },
  { q: "¿Cómo sé si mi analítica actual está bien configurada?",
    a: "La mayoría de empresas tienen GA4 instalado pero con datos incorrectos: conversiones no registradas, tráfico interno contaminando los datos, fuentes de tráfico mal atribuidas o eventos que no se disparan. Realizamos una auditoría de medición inicial que identifica todos los problemas y los priorizamos por impacto." },
  { q: "¿Qué incluye el informe mensual?",
    a: "El informe mensual incluye evolución del tráfico por canal, conversiones por fuente, páginas más visitadas, embudo de conversión completo, comparativa con el mes anterior y recomendaciones de acción. Todo en un formato legible, no una exportación cruda de datos." },
  { q: "¿Cuánto tarda la configuración inicial de GA4 y GTM?",
    a: "La implementación técnica estándar — auditoría, configuración de GA4, GTM con las tags necesarias, definición de eventos de conversión y activación del Consent Mode v2 — se completa en 2 a 4 semanas. El plazo exacto depende de la complejidad de la web y los eventos a medir. La primera sesión de revisión de datos suele hacerse en la quinta semana." },
  { q: "¿Funciona la analítica si los usuarios rechazan las cookies?",
    a: "Con el Consent Mode v2 de Google activado, GA4 y Google Ads siguen operando de forma modelada incluso cuando el usuario rechaza el consentimiento. Google utiliza modelos estadísticos para estimar el comportamiento de usuarios que no consintieron, manteniendo la medición sin incumplir el RGPD. Es una de las primeras cosas que configuramos en cada implementación." },
  { q: "¿Puedo acceder a los datos yo mismo o solo recibo el informe mensual?",
    a: "Ambas opciones son compatibles. Creamos el dashboard en Looker Studio (antes Google Data Studio) con acceso permanente y en tiempo real para ti. El informe mensual es una interpretación estructurada de esos datos con recomendaciones concretas de acción. Si quieres formación para leer los datos tú mismo, incluimos sesiones de formación en el servicio." },
  { q: "¿La analítica web es útil si mi negocio no vende online?",
    a: "Especialmente útil. Los negocios sin ecommerce miden conversiones como llamadas telefónicas, formularios de contacto, reservas, solicitudes de presupuesto o clics en WhatsApp. Cada uno de esos eventos se configura como conversión en GA4 para que sepas qué canal y qué contenido genera más clientes potenciales reales, no solo visitas." },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "¿Qué diferencia hay entre Google Analytics 4 y Universal Analytics?", acceptedAnswer: { "@type": "Answer", text: "Universal Analytics fue retirado en julio de 2023. GA4 es el estándar actual y funciona de forma diferente: mide eventos en lugar de sesiones, tiene un modelo de datos más flexible y está diseñado para medir tanto webs como apps. Si todavía tienes datos de UA y quieres migrarlos o entender GA4, te ayudamos con la transición." } },
    { "@type": "Question", name: "¿Qué es Google Tag Manager y por qué lo necesito?", acceptedAnswer: { "@type": "Answer", text: "Google Tag Manager es un sistema que centraliza todos los códigos de seguimiento de tu web (GA4, Google Ads, Meta Pixel, etc.) sin tocar el código de la web directamente. Facilita la gestión, reduce errores y permite implementar nuevos tags de forma ágil. Es la base de una medición profesional." } },
    { "@type": "Question", name: "¿Cómo sé si mi analítica actual está bien configurada?", acceptedAnswer: { "@type": "Answer", text: "La mayoría de empresas tienen GA4 instalado pero con datos incorrectos: conversiones no registradas, tráfico interno contaminando los datos, fuentes de tráfico mal atribuidas o eventos que no se disparan. Realizamos una auditoría de medición inicial que identifica todos los problemas y los priorizamos por impacto." } },
    { "@type": "Question", name: "¿Qué incluye el informe mensual?", acceptedAnswer: { "@type": "Answer", text: "El informe mensual incluye evolución del tráfico por canal, conversiones por fuente, páginas más visitadas, embudo de conversión completo, comparativa con el mes anterior y recomendaciones de acción. Todo en un formato legible, no una exportación cruda de datos." } },
    { "@type": "Question", name: "¿Cuánto tarda la configuración inicial de GA4 y GTM?", acceptedAnswer: { "@type": "Answer", text: "La implementación técnica estándar — auditoría, configuración de GA4, GTM con las tags necesarias, definición de eventos de conversión y activación del Consent Mode v2 — se completa en 2 a 4 semanas. El plazo exacto depende de la complejidad de la web y los eventos a medir. La primera sesión de revisión de datos suele hacerse en la quinta semana." } },
    { "@type": "Question", name: "¿Funciona la analítica si los usuarios rechazan las cookies?", acceptedAnswer: { "@type": "Answer", text: "Con el Consent Mode v2 de Google activado, GA4 y Google Ads siguen operando de forma modelada incluso cuando el usuario rechaza el consentimiento. Google utiliza modelos estadísticos para estimar el comportamiento de usuarios que no consintieron, manteniendo la medición sin incumplir el RGPD. Es una de las primeras cosas que configuramos en cada implementación." } },
    { "@type": "Question", name: "¿Puedo acceder a los datos yo mismo o solo recibo el informe mensual?", acceptedAnswer: { "@type": "Answer", text: "Ambas opciones son compatibles. Creamos el dashboard en Looker Studio (antes Google Data Studio) con acceso permanente y en tiempo real para ti. El informe mensual es una interpretación estructurada de esos datos con recomendaciones concretas de acción. Si quieres formación para leer los datos tú mismo, incluimos sesiones de formación en el servicio." } },
    { "@type": "Question", name: "¿La analítica web es útil si mi negocio no vende online?", acceptedAnswer: { "@type": "Answer", text: "Especialmente útil. Los negocios sin ecommerce miden conversiones como llamadas telefónicas, formularios de contacto, reservas, solicitudes de presupuesto o clics en WhatsApp. Cada uno de esos eventos se configura como conversión en GA4 para que sepas qué canal y qué contenido genera más clientes potenciales reales, no solo visitas." } },
  ],
};

export default function AnaliticaWebPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <section className="bg-gradient-to-br from-primary-700 to-primary-900 text-white">
        <div className="max-w-6xl mx-auto px-4 py-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <Breadcrumbs crumbs={[{ label: "Inicio", href: "/" }, { label: "Analítica Web" }]} />
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight mt-4">
              Analítica Web — Datos que Generan Decisiones
            </h1>
            <p className="text-xl text-primary-200 mb-8 leading-relaxed">
              Sin datos no hay estrategia. Configuramos y gestionamos tu analítica web para que sepas exactamente qué funciona, qué no funciona y dónde invertir para crecer. Cada decisión de marketing respaldada por datos reales.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#contacto" className="bg-accent-500 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-accent-600 transition-colors text-center">
                Solicitar presupuesto
              </a>
            </div>
          </div>
          <div>
            <Image src="/imagen-analitica-web.jpg" alt="Analítica web" className="rounded-2xl shadow-2xl w-full object-cover hidden md:block" width={800} height={600} />
          </div>
        </div>
      </section>

      <section className="bg-primary-600 py-6 px-4">
        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 text-center text-white">
          {[
            { value: "GA4 + GTM", label: "configuración técnica completa" },
            { value: "4 semanas", label: "implementación inicial estándar" },
            { value: "Looker Studio", label: "dashboard de negocio incluido" },
            { value: "Consent Mode v2", label: "medición compatible con RGPD" },
          ].map((m) => (
            <div key={m.label}>
              <div className="text-base font-bold text-accent-400 leading-tight">{m.value}</div>
              <div className="text-xs text-primary-200 mt-1">{m.label}</div>
            </div>
          ))}
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-12">

        {/* Por qué analítica */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-primary-600 mb-6">Por qué la analítica web es la base de cualquier estrategia digital</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            La mayoría de empresas tienen Google Analytics instalado pero no lo usan para tomar decisiones. Tener datos no es lo mismo que tener analítica. La analítica real conecta los datos con acciones concretas: qué canal recortar, qué página optimizar, qué producto promocionar, cuándo aumentar la inversión en publicidad.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            El problema más común no es la falta de datos sino la mala calidad de los datos existentes. Conversiones no registradas, tráfico interno contaminando las métricas, fuentes de tráfico mal atribuidas, eventos que no se disparan o datos duplicados son errores que llevan a decisiones equivocadas.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Configuramos una medición limpia, fiable y orientada a negocio — no a métricas de vanidad. Sabrás cuántos leads genera cada canal, cuál es tu coste por conversión real, qué contenidos impulsan las ventas y dónde se pierden tus usuarios en el proceso de compra.
          </p>
        </section>

        {/* Qué configuramos y qué entregamos */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="bg-primary-50 rounded-2xl p-6">
            <h2 className="text-xl font-bold text-primary-600 mb-4">Qué configuramos</h2>
            <ul className="space-y-2 text-gray-700">
              {[
                "Google Analytics 4 (GA4)",
                "Google Tag Manager (GTM)",
                "Seguimiento de conversiones",
                "Eventos personalizados",
                "Google Consent Mode v2",
                "Vinculación con Google Ads",
                "Search Console integrada",
              ].map(i => (
                <li key={i} className="flex gap-2"><span className="text-accent-500">✓</span>{i}</li>
              ))}
            </ul>
          </div>
          <div className="bg-gray-50 rounded-2xl p-6">
            <h2 className="text-xl font-bold text-primary-600 mb-4">Qué entregamos</h2>
            <ul className="space-y-2 text-gray-700">
              {[
                "Dashboard de negocio personalizado",
                "Informe mensual de rendimiento",
                "Análisis de fuentes de tráfico",
                "Embudo de conversión detallado",
                "Alertas automáticas de anomalías",
                "Auditoría de medición inicial",
                "Formación en lectura de datos",
              ].map(i => (
                <li key={i} className="flex gap-2"><span className="text-accent-500">✓</span>{i}</li>
              ))}
            </ul>
          </div>
        </section>

        {/* Proceso */}
        <section className="mb-16 bg-gray-50 rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-primary-600 mb-8">Cómo trabajamos</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { num: "01", title: "Auditoría de medición", desc: "Analizamos tu configuración actual de GA4, GTM y seguimiento de conversiones. Identificamos datos incorrectos, eventos que faltan y oportunidades de mejora." },
              { num: "02", title: "Configuración técnica", desc: "Implementamos o corregimos GA4, configuramos GTM con todos los tags necesarios, definimos los eventos de conversión relevantes para tu negocio y activamos el Consent Mode v2." },
              { num: "03", title: "Dashboard y alertas", desc: "Creamos un dashboard personalizado con las métricas que importan para tu negocio, no todas las disponibles. Configuramos alertas automáticas para detectar anomalías sin revisar datos manualmente." },
              { num: "04", title: "Informe y formación", desc: "Cada mes recibes un informe con los datos clave interpretados: qué ha mejorado, qué ha empeorado y qué acción recomendamos. Si lo deseas, incluimos sesiones de formación para leer los datos tú mismo." },
            ].map(step => (
              <div key={step.num} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                <span className="inline-block text-3xl font-bold text-accent-500 mb-3">{step.num}</span>
                <h3 className="font-bold text-primary-700 text-lg mb-2">{step.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Casos de uso */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-primary-600 mb-6">Qué puedes saber con una analítica bien configurada</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Una analítica profesional responde preguntas de negocio concretas que afectan directamente a tu rentabilidad:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { pregunta: "¿Qué canal me trae más clientes?", respuesta: "SEO, Google Ads, redes sociales, email, directo — sabrás exactamente qué porcentaje de tus ventas viene de cada canal." },
              { pregunta: "¿Cuánto me cuesta conseguir un cliente?", respuesta: "Coste por lead y coste por venta desglosado por canal y campaña. La métrica más importante para escalar lo que funciona." },
              { pregunta: "¿Dónde abandona el usuario el proceso de compra?", respuesta: "El embudo de conversión muestra exactamente en qué paso se van los usuarios y cuántos completan cada fase." },
              { pregunta: "¿Qué páginas generan más ventas?", respuesta: "No todas las páginas aportan igual. Sabrás cuáles son las páginas que más contribuyen a las conversiones finales." },
              { pregunta: "¿Qué dispositivo usan mis clientes?", respuesta: "Móvil, tablet o escritorio — y cómo se comportan diferente en cada uno. Clave para priorizar la optimización." },
              { pregunta: "¿Mi inversión en Ads está generando retorno?", respuesta: "Vinculamos GA4 con Google Ads para ver el ROAS real, no solo los clics — incluyendo conversiones asistidas." },
            ].map(s => (
              <div key={s.pregunta} className="bg-primary-50 rounded-xl p-4 border border-primary-100">
                <p className="font-bold text-primary-700 text-sm mb-1">{s.pregunta}</p>
                <p className="text-gray-600 text-xs leading-relaxed">{s.respuesta}</p>
              </div>
            ))}
          </div>
        </section>

        {/* FAQs */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-primary-600 mb-8">Preguntas frecuentes sobre analítica web</h2>
          <div className="space-y-4">
            {FAQS.map(faq => (
              <div key={faq.q} className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm">
                <h3 className="font-bold text-primary-700 mb-2">{faq.q}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Servicios relacionados */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-primary-600 mb-6">Servicios que complementan la analítica web</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Una analítica bien configurada multiplica el rendimiento de cualquier otro canal digital. Si ya tienes datos fiables, el siguiente paso es invertirlos de forma eficiente en captación:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { href: "/seo-posicionamiento-web-organico/", title: "SEO y posicionamiento web", desc: "La analítica revela qué keywords generan conversiones reales. Conectamos los datos de GA4 con la estrategia SEO." },
              { href: "/sem-publicidad-ppc/", title: "Google Ads y SEM", desc: "Vinculamos GA4 con Google Ads para medir el ROAS real, incluyendo conversiones asistidas y rutas de conversión completas." },
              { href: "/auditoria-digital/", title: "Auditoría digital completa", desc: "Si tienes dudas sobre el estado general de tu presencia digital, la auditoría parte siempre del análisis de datos de tu web." },
            ].map(s => (
              <Link key={s.href} href={s.href} className="bg-primary-50 rounded-xl p-5 border border-primary-100 hover:border-primary-300 transition-colors block">
                <p className="font-bold text-primary-700 text-sm mb-1">{s.title}</p>
                <p className="text-gray-600 text-xs leading-relaxed">{s.desc}</p>
              </Link>
            ))}
          </div>
        </section>

        {/* Contacto */}
        <section id="contacto" className="bg-primary-600 text-white rounded-2xl p-8">
          <h2 className="text-2xl font-bold mb-4">¿Hablamos de tu analítica?</h2>
          <p className="text-primary-200 mb-6">Auditamos tu configuración actual sin compromiso y te decimos qué datos te estás perdiendo y qué decisiones podrías estar tomando mejor.</p>
          <div className="bg-white rounded-xl p-6">
            <ContactForm />
          </div>
        </section>
      </div>
      <RelatedArticles category="Marketing Digital" title="Más sobre analítica y estrategia digital" />
    </>
  );
}
