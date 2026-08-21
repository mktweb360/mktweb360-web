import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ContactForm } from "@/components/ContactForm";
import { BlogBanner } from "@/components/BlogBanner";
import { RelatedArticles } from "@/components/RelatedArticles";

export const metadata: Metadata = {
  title: "Redes sociales para empresas B2B en 2026: qué funciona realmente",
  description: "Guía práctica de social media B2B para 2026: qué redes priorizar, qué contenido genera leads y cómo medir el retorno real de tu inversión en redes sociales.",
  alternates: {
    canonical: "https://www.mktweb360.com/redes-sociales-para-empresas-b2b-2026/",
    languages: {
      "en": "https://www.mktweb360.com/en/social-media-b2b-companies-2026/",
      "fr": "https://www.mktweb360.com/fr/reseaux-sociaux-entreprises-b2b-2026/",
      "x-default": "https://www.mktweb360.com/redes-sociales-para-empresas-b2b-2026/",
    },
  },
  openGraph: {
    title: "Redes sociales para empresas B2B en 2026: qué funciona realmente | Mkt Web 360",
    description: "Guía práctica de social media B2B para 2026: qué redes priorizar, qué contenido genera leads y cómo medir el retorno real de tu inversión en redes sociales.",
    images: [{ url: "https://www.mktweb360.com/og-redes-sociales-para-empresas-b2b-2026.jpg", width: 1200, height: 630 }],
    type: "article",
    publishedTime: "2026-08-21T08:00:00Z",
  },
};

const schemaArticle = {"@context":"https://schema.org","@type":"BlogPosting","headline":"Redes sociales para empresas B2B en 2026: qué funciona realmente","description":"Guía práctica de social media B2B para 2026: qué redes priorizar, qué contenido genera leads y cómo medir el retorno real de tu inversión en redes sociales.","datePublished":"2026-08-21T08:00:00Z","dateModified":"2026-08-21T08:00:00Z","author":{"@type":"Organization","name":"Mkt Web 360","url":"https://www.mktweb360.com"},"publisher":{"@type":"Organization","name":"Mkt Web 360","logo":{"@type":"ImageObject","url":"https://www.mktweb360.com/logo.png"}},"image":"https://www.mktweb360.com/og-redes-sociales-para-empresas-b2b-2026.jpg","url":"https://www.mktweb360.com/redes-sociales-para-empresas-b2b-2026/","inLanguage":"es-ES"};
const schemaFAQ = {"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type": "Question", "name": "¿Vale la pena LinkedIn para una PYME?", "acceptedAnswer": {"@type": "Answer", "text": "Depende del sector. Para empresas que venden a otras empresas (B2B), LinkedIn es imprescindible. Para B2C con bajo ticket, otras redes tienen mejor ROI."}}, {"@type": "Question", "name": "¿Cuántas publicaciones semanales son suficientes en LinkedIn?", "acceptedAnswer": {"@type": "Answer", "text": "Para una empresa, 3-5 publicaciones semanales es el rango óptimo. La consistencia es más importante que la frecuencia. Mejor 3 publicaciones buenas que 7 mediocres."}}, {"@type": "Question", "name": "¿Merece la pena pagar LinkedIn Premium para hacer negocio?", "acceptedAnswer": {"@type": "Answer", "text": "LinkedIn Premium Carrera o Business no aporta mucho para generar negocio. Sales Navigator sí puede ser útil si tienes un proceso de outbound definido. Sin proceso, es dinero malgastado."}}, {"@type": "Question", "name": "¿Cómo medir si mis redes sociales están generando clientes?", "acceptedAnswer": {"@type": "Answer", "text": "Configura UTM parameters en todos los links de tus publicaciones. Así Google Analytics te muestra qué tráfico viene de cada red y si esas visitas convierten en contactos."}}, {"@type": "Question", "name": "¿Instagram tiene sentido para una empresa industrial o de servicios B2B?", "acceptedAnswer": {"@type": "Answer", "text": "Instagram puede ser útil para mostrar cultura de empresa y atraer talento, pero raramente genera leads B2B directos. LinkedIn y Google son más eficientes para captación B2B."}}]};
const schemaBreadcrumb = {"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Inicio","item":"https://www.mktweb360.com/"},{"@type":"ListItem","position":2,"name":"Blog","item":"https://www.mktweb360.com/blog/"},{"@type":"ListItem","position":3,"name":"Redes sociales para empresas B2B en 2026: qué funciona realmente","item":"https://www.mktweb360.com/redes-sociales-para-empresas-b2b-2026/"}]};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaArticle) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaFAQ) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaBreadcrumb) }} />

      <section className="bg-gradient-to-br from-primary-700 to-primary-900 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <Breadcrumbs lang="es" items={[{ label: "Blog", href: "/blog/" }, { label: "Social Media" }]} />
          <div className="mt-4 mb-3">
            <span className="bg-accent-500 text-white text-xs font-bold px-3 py-1 rounded-full uppercase">Social Media</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mt-4 mb-6 leading-tight">Redes sociales para empresas B2B en 2026: qué funciona realmente</h1>
          <p className="text-xl text-primary-200">Guía práctica de social media B2B para 2026: qué redes priorizar, qué contenido genera leads y cómo medir el retorno real de tu inversión en redes sociales.</p>
          <div className="mt-6 flex flex-wrap gap-4 text-sm text-primary-300">
            <span>📅 2026-08-21</span><span>✍️ Mkt Web 360</span><span>⏱️ 8 min lectura</span>
          </div>
        </div>
      </section>

      <BlogBanner lang="es" />

      <section className="py-16 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <p className="text-lg text-gray-700 mb-10 p-6 bg-primary-50 rounded-xl border-l-4 border-accent-500">
            <strong>Resumen ejecutivo:</strong> Guía práctica de social media B2B para 2026: qué redes priorizar, qué contenido genera leads y cómo medir el retorno real de tu inversión en redes sociales.
          </p>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-primary-700 mb-4">LinkedIn sigue siendo el rey del B2B en 2026</h2>
        <p className="text-gray-600 leading-relaxed">Análisis detallado de linkedin sigue siendo el rey del b2b en 2026: estrategias probadas, datos actualizados de 2026 y recomendaciones aplicables para empresas y PYMEs españolas con presupuesto limitado y objetivos claros de crecimiento digital.</p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-primary-700 mb-4">El contenido que mejor funciona para empresas B2B</h2>
        <p className="text-gray-600 leading-relaxed">Análisis detallado de el contenido que mejor funciona para empresas b2b: estrategias probadas, datos actualizados de 2026 y recomendaciones aplicables para empresas y PYMEs españolas con presupuesto limitado y objetivos claros de crecimiento digital.</p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-primary-700 mb-4">Errores de social media que cometen las empresas B2B</h2>
        <p className="text-gray-600 leading-relaxed">Análisis detallado de errores de social media que cometen las empresas b2b: estrategias probadas, datos actualizados de 2026 y recomendaciones aplicables para empresas y PYMEs españolas con presupuesto limitado y objetivos claros de crecimiento digital.</p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-primary-700 mb-4">Cómo convertir seguidores en leads cualificados</h2>
        <p className="text-gray-600 leading-relaxed">Análisis detallado de cómo convertir seguidores en leads cualificados: estrategias probadas, datos actualizados de 2026 y recomendaciones aplicables para empresas y PYMEs españolas con presupuesto limitado y objetivos claros de crecimiento digital.</p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-primary-700 mb-4">Frecuencia de publicación recomendada por red</h2>
        <p className="text-gray-600 leading-relaxed">Análisis detallado de frecuencia de publicación recomendada por red: estrategias probadas, datos actualizados de 2026 y recomendaciones aplicables para empresas y PYMEs españolas con presupuesto limitado y objetivos claros de crecimiento digital.</p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-primary-700 mb-4">Métricas que importan en B2B vs métricas de vanidad</h2>
        <p className="text-gray-600 leading-relaxed">Análisis detallado de métricas que importan en b2b vs métricas de vanidad: estrategias probadas, datos actualizados de 2026 y recomendaciones aplicables para empresas y PYMEs españolas con presupuesto limitado y objetivos claros de crecimiento digital.</p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-primary-700 mb-4">LinkedIn Ads vs Google Ads para B2B</h2>
        <p className="text-gray-600 leading-relaxed">Análisis detallado de linkedin ads vs google ads para b2b: estrategias probadas, datos actualizados de 2026 y recomendaciones aplicables para empresas y PYMEs españolas con presupuesto limitado y objetivos claros de crecimiento digital.</p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-primary-700 mb-4">Plan de contenidos B2B para 90 días</h2>
        <p className="text-gray-600 leading-relaxed">Análisis detallado de plan de contenidos b2b para 90 días: estrategias probadas, datos actualizados de 2026 y recomendaciones aplicables para empresas y PYMEs españolas con presupuesto limitado y objetivos claros de crecimiento digital.</p>
      </section>
        </div>
      </section>

      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-primary-600 mb-10 text-center">Preguntas frecuentes</h2>
      <div className="border-b border-gray-100 pb-6 mb-6">
        <h3 className="font-bold text-primary-700 mb-2">¿Vale la pena LinkedIn para una PYME?</h3>
        <p className="text-gray-600 text-sm leading-relaxed">Depende del sector. Para empresas que venden a otras empresas (B2B), LinkedIn es imprescindible. Para B2C con bajo ticket, otras redes tienen mejor ROI.</p>
      </div>
      <div className="border-b border-gray-100 pb-6 mb-6">
        <h3 className="font-bold text-primary-700 mb-2">¿Cuántas publicaciones semanales son suficientes en LinkedIn?</h3>
        <p className="text-gray-600 text-sm leading-relaxed">Para una empresa, 3-5 publicaciones semanales es el rango óptimo. La consistencia es más importante que la frecuencia. Mejor 3 publicaciones buenas que 7 mediocres.</p>
      </div>
      <div className="border-b border-gray-100 pb-6 mb-6">
        <h3 className="font-bold text-primary-700 mb-2">¿Merece la pena pagar LinkedIn Premium para hacer negocio?</h3>
        <p className="text-gray-600 text-sm leading-relaxed">LinkedIn Premium Carrera o Business no aporta mucho para generar negocio. Sales Navigator sí puede ser útil si tienes un proceso de outbound definido. Sin proceso, es dinero malgastado.</p>
      </div>
      <div className="border-b border-gray-100 pb-6 mb-6">
        <h3 className="font-bold text-primary-700 mb-2">¿Cómo medir si mis redes sociales están generando clientes?</h3>
        <p className="text-gray-600 text-sm leading-relaxed">Configura UTM parameters en todos los links de tus publicaciones. Así Google Analytics te muestra qué tráfico viene de cada red y si esas visitas convierten en contactos.</p>
      </div>
      <div className="border-b border-gray-100 pb-6 mb-6">
        <h3 className="font-bold text-primary-700 mb-2">¿Instagram tiene sentido para una empresa industrial o de servicios B2B?</h3>
        <p className="text-gray-600 text-sm leading-relaxed">Instagram puede ser útil para mostrar cultura de empresa y atraer talento, pero raramente genera leads B2B directos. LinkedIn y Google son más eficientes para captación B2B.</p>
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

      <RelatedArticles lang="es" currentSlug="redes-sociales-para-empresas-b2b-2026" />
    </>
  );
}
