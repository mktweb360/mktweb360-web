import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ContactForm } from "@/components/ContactForm";
import { BlogBanner } from "@/components/BlogBanner";
import { RelatedArticles } from "@/components/RelatedArticles";

export const metadata: Metadata = {
  title: "Google Ads sin comisión sobre presupuesto: por qué cambia todo",
  description: "Qué significa que una agencia no cobre comisión sobre tu inversión en Google Ads, cuánto te ahorras y cómo evaluar el modelo de gestión que más te conviene.",
  alternates: {
    canonical: "https://www.mktweb360.com/google-ads-sin-comision-agencia-marketing/",
    languages: {
      "en": "https://www.mktweb360.com/en/google-ads-no-commission-marketing-agency/",
      "fr": "https://www.mktweb360.com/fr/google-ads-sans-commission-agence-marketing/",
      "x-default": "https://www.mktweb360.com/google-ads-sin-comision-agencia-marketing/",
    },
  },
  openGraph: {
    title: "Google Ads sin comisión sobre presupuesto: por qué cambia todo | Mkt Web 360",
    description: "Qué significa que una agencia no cobre comisión sobre tu inversión en Google Ads, cuánto te ahorras y cómo evaluar el modelo de gestión que más te conviene.",
    images: [{ url: "https://www.mktweb360.com/og-google-ads-sin-comision-agencia-marketing.jpg", width: 1200, height: 630 }],
    type: "article",
    publishedTime: "2026-08-20T08:00:00Z",
  },
};

const schemaArticle = {"@context":"https://schema.org","@type":"BlogPosting","headline":"Google Ads sin comisión sobre presupuesto: por qué cambia todo","description":"Qué significa que una agencia no cobre comisión sobre tu inversión en Google Ads, cuánto te ahorras y cómo evaluar el modelo de gestión que más te conviene.","datePublished":"2026-08-20T08:00:00Z","dateModified":"2026-08-20T08:00:00Z","author":{"@type":"Organization","name":"Mkt Web 360","url":"https://www.mktweb360.com"},"publisher":{"@type":"Organization","name":"Mkt Web 360","logo":{"@type":"ImageObject","url":"https://www.mktweb360.com/logo.png"}},"image":"https://www.mktweb360.com/og-google-ads-sin-comision-agencia-marketing.jpg","url":"https://www.mktweb360.com/google-ads-sin-comision-agencia-marketing/","inLanguage":"es-ES"};
const schemaFAQ = {"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type": "Question", "name": "¿Qué es la comisión sobre presupuesto en Google Ads?", "acceptedAnswer": {"@type": "Answer", "text": "Es un porcentaje (normalmente 10-20%) que la agencia cobra sobre lo que inviertes en Google. Si inviertes 2.000€/mes, pagas 200-400€ adicionales a la agencia solo por gestionar ese dinero."}}, {"@type": "Question", "name": "¿Por qué algunas agencias cobran comisión y otras no?", "acceptedAnswer": {"@type": "Answer", "text": "Es un modelo heredado del marketing offline. Las agencias que cobran comisión tienen incentivo económico para que gastes más, no para que conviertas mejor. Las de tarifa plana se alinean más con tu objetivo."}}, {"@type": "Question", "name": "¿Una agencia sin comisión es más cara en total?", "acceptedAnswer": {"@type": "Answer", "text": "Generalmente no. Con comisión pagas más cuanto más inviertes. Con tarifa plana, el coste de gestión es fijo. A partir de cierto presupuesto, la tarifa plana siempre sale más barata."}}, {"@type": "Question", "name": "¿Cómo saber si mi agencia está inflando el presupuesto?", "acceptedAnswer": {"@type": "Answer", "text": "Pide acceso de lectura a tu cuenta de Google Ads. Revisa el historial de cambios y si el presupuesto ha subido sin justificación de resultados. Una agencia seria te da acceso siempre."}}, {"@type": "Question", "name": "¿Cuánto debería invertir en Google Ads para empezar?", "acceptedAnswer": {"@type": "Answer", "text": "Para tener datos significativos en menos de 3 meses, recomendamos mínimo 500-800€/mes de inversión publicitaria. Por debajo de eso, el aprendizaje del algoritmo es muy lento."}}]};
const schemaBreadcrumb = {"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Inicio","item":"https://www.mktweb360.com/"},{"@type":"ListItem","position":2,"name":"Blog","item":"https://www.mktweb360.com/blog/"},{"@type":"ListItem","position":3,"name":"Google Ads sin comisión sobre presupuesto: por qué cambia todo","item":"https://www.mktweb360.com/google-ads-sin-comision-agencia-marketing/"}]};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaArticle) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaFAQ) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaBreadcrumb) }} />

      <section className="bg-gradient-to-br from-primary-700 to-primary-900 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <Breadcrumbs lang="es" items={[{ label: "Blog", href: "/blog/" }, { label: "SEM" }]} />
          <div className="mt-4 mb-3">
            <span className="bg-accent-500 text-white text-xs font-bold px-3 py-1 rounded-full uppercase">SEM</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mt-4 mb-6 leading-tight">Google Ads sin comisión sobre presupuesto: por qué cambia todo</h1>
          <p className="text-xl text-primary-200">Qué significa que una agencia no cobre comisión sobre tu inversión en Google Ads, cuánto te ahorras y cómo evaluar el modelo de gestión que más te conviene.</p>
          <div className="mt-6 flex flex-wrap gap-4 text-sm text-primary-300">
            <span>📅 2026-08-20</span><span>✍️ Mkt Web 360</span><span>⏱️ 8 min lectura</span>
          </div>
        </div>
      </section>

      <BlogBanner lang="es" />

      <section className="py-16 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <p className="text-lg text-gray-700 mb-10 p-6 bg-primary-50 rounded-xl border-l-4 border-accent-500">
            <strong>Resumen ejecutivo:</strong> Qué significa que una agencia no cobre comisión sobre tu inversión en Google Ads, cuánto te ahorras y cómo evaluar el modelo de gestión que más te conviene.
          </p>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-primary-700 mb-4">El modelo de comisión estándar en agencias de Google Ads</h2>
        <p className="text-gray-600 leading-relaxed">Análisis detallado de el modelo de comisión estándar en agencias de google ads: estrategias probadas, datos actualizados de 2026 y recomendaciones aplicables para empresas y PYMEs españolas con presupuesto limitado y objetivos claros de crecimiento digital.</p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-primary-700 mb-4">Cuánto dinero pierde una empresa con el modelo de comisión</h2>
        <p className="text-gray-600 leading-relaxed">Análisis detallado de cuánto dinero pierde una empresa con el modelo de comisión: estrategias probadas, datos actualizados de 2026 y recomendaciones aplicables para empresas y PYMEs españolas con presupuesto limitado y objetivos claros de crecimiento digital.</p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-primary-700 mb-4">El modelo de tarifa plana: ventajas e inconvenientes</h2>
        <p className="text-gray-600 leading-relaxed">Análisis detallado de el modelo de tarifa plana: ventajas e inconvenientes: estrategias probadas, datos actualizados de 2026 y recomendaciones aplicables para empresas y PYMEs españolas con presupuesto limitado y objetivos claros de crecimiento digital.</p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-primary-700 mb-4">Cómo incentiva cada modelo el trabajo de la agencia</h2>
        <p className="text-gray-600 leading-relaxed">Análisis detallado de cómo incentiva cada modelo el trabajo de la agencia: estrategias probadas, datos actualizados de 2026 y recomendaciones aplicables para empresas y PYMEs españolas con presupuesto limitado y objetivos claros de crecimiento digital.</p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-primary-700 mb-4">Preguntas que debes hacer antes de contratar gestión de Ads</h2>
        <p className="text-gray-600 leading-relaxed">Análisis detallado de preguntas que debes hacer antes de contratar gestión de ads: estrategias probadas, datos actualizados de 2026 y recomendaciones aplicables para empresas y PYMEs españolas con presupuesto limitado y objetivos claros de crecimiento digital.</p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-primary-700 mb-4">Calculadora: cuánto ahorras sin comisión</h2>
        <p className="text-gray-600 leading-relaxed">Análisis detallado de calculadora: cuánto ahorras sin comisión: estrategias probadas, datos actualizados de 2026 y recomendaciones aplicables para empresas y PYMEs españolas con presupuesto limitado y objetivos claros de crecimiento digital.</p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-primary-700 mb-4">Señales de alerta en la gestión de Google Ads</h2>
        <p className="text-gray-600 leading-relaxed">Análisis detallado de señales de alerta en la gestión de google ads: estrategias probadas, datos actualizados de 2026 y recomendaciones aplicables para empresas y PYMEs españolas con presupuesto limitado y objetivos claros de crecimiento digital.</p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-primary-700 mb-4">Cómo evaluar el rendimiento real de tu campaña</h2>
        <p className="text-gray-600 leading-relaxed">Análisis detallado de cómo evaluar el rendimiento real de tu campaña: estrategias probadas, datos actualizados de 2026 y recomendaciones aplicables para empresas y PYMEs españolas con presupuesto limitado y objetivos claros de crecimiento digital.</p>
      </section>
        </div>
      </section>

      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-primary-600 mb-10 text-center">Preguntas frecuentes</h2>
      <div className="border-b border-gray-100 pb-6 mb-6">
        <h3 className="font-bold text-primary-700 mb-2">¿Qué es la comisión sobre presupuesto en Google Ads?</h3>
        <p className="text-gray-600 text-sm leading-relaxed">Es un porcentaje (normalmente 10-20%) que la agencia cobra sobre lo que inviertes en Google. Si inviertes 2.000€/mes, pagas 200-400€ adicionales a la agencia solo por gestionar ese dinero.</p>
      </div>
      <div className="border-b border-gray-100 pb-6 mb-6">
        <h3 className="font-bold text-primary-700 mb-2">¿Por qué algunas agencias cobran comisión y otras no?</h3>
        <p className="text-gray-600 text-sm leading-relaxed">Es un modelo heredado del marketing offline. Las agencias que cobran comisión tienen incentivo económico para que gastes más, no para que conviertas mejor. Las de tarifa plana se alinean más con tu objetivo.</p>
      </div>
      <div className="border-b border-gray-100 pb-6 mb-6">
        <h3 className="font-bold text-primary-700 mb-2">¿Una agencia sin comisión es más cara en total?</h3>
        <p className="text-gray-600 text-sm leading-relaxed">Generalmente no. Con comisión pagas más cuanto más inviertes. Con tarifa plana, el coste de gestión es fijo. A partir de cierto presupuesto, la tarifa plana siempre sale más barata.</p>
      </div>
      <div className="border-b border-gray-100 pb-6 mb-6">
        <h3 className="font-bold text-primary-700 mb-2">¿Cómo saber si mi agencia está inflando el presupuesto?</h3>
        <p className="text-gray-600 text-sm leading-relaxed">Pide acceso de lectura a tu cuenta de Google Ads. Revisa el historial de cambios y si el presupuesto ha subido sin justificación de resultados. Una agencia seria te da acceso siempre.</p>
      </div>
      <div className="border-b border-gray-100 pb-6 mb-6">
        <h3 className="font-bold text-primary-700 mb-2">¿Cuánto debería invertir en Google Ads para empezar?</h3>
        <p className="text-gray-600 text-sm leading-relaxed">Para tener datos significativos en menos de 3 meses, recomendamos mínimo 500-800€/mes de inversión publicitaria. Por debajo de eso, el aprendizaje del algoritmo es muy lento.</p>
      </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-primary-50">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-primary-700 mb-4">¿Necesitas ayuda con tu estrategia digital?</h2>
          <p className="text-gray-600 mb-8">Agencia de marketing digital especializada en SEO, GEO y Google Ads. Sin permanencia. Sin comisión sobre presupuesto.</p>
          <ContactForm formType="blog-cta" />
        </div>
      </section>

      <RelatedArticles lang="es" currentSlug="google-ads-sin-comision-agencia-marketing" />
    </>
  );
}
