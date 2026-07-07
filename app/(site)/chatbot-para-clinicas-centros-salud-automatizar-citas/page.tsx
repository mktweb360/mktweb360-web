import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { RelatedArticles } from "@/components/RelatedArticles";
import { BlogBanner } from "@/components/BlogBanner";

export const metadata: Metadata = {
  title: "Chatbot para clínicas y centros de salud: citas, preguntas y cumplimiento sanitario",
  description:
    "Las clínicas y centros de salud reciben cientos de consultas repetitivas cada día. Un chatbot bien implementado puede automatizar la gestión de citas, responder preguntas frecuentes y cualificar pacientes, cumpliendo con el RGPD.",
  alternates: { canonical: "https://www.mktweb360.com/chatbot-para-clinicas-centros-salud-automatizar-citas/" },
  openGraph: {
    title: "Chatbot para clínicas y centros de salud: citas, preguntas y cumplimiento sanitario | Mkt Web 360",
    description:
      "Las clínicas y centros de salud reciben cientos de consultas repetitivas cada día. Un chatbot bien implementado puede automatizar la gestión de citas, responder preguntas frecuentes y cualificar pacientes, cumpliendo con el RGPD.",
    url: "https://www.mktweb360.com/chatbot-para-clinicas-centros-salud-automatizar-citas/",
    type: "article",
    images: [{ url: "https://www.mktweb360.com/og-diseno-web-para-clinicas.jpg", width: 1200, height: 630 }],
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "Chatbot para clínicas y centros de salud: citas, preguntas y cumplimiento sanitario",
  description:
    "Las clínicas y centros de salud reciben cientos de consultas repetitivas cada día. Un chatbot bien implementado puede automatizar la gestión de citas, responder preguntas frecuentes y cualificar pacientes, cumpliendo con el RGPD.",
  author: { "@type": "Organization", name: "Mkt Web 360 SLU" },
  publisher: { "@type": "Organization", name: "Mkt Web 360 SLU", url: "https://www.mktweb360.com" },
  datePublished: "2026-07-07",
  image: "https://www.mktweb360.com/og-diseno-web-para-clinicas.jpg",
  url: "https://www.mktweb360.com/chatbot-para-clinicas-centros-salud-automatizar-citas/",
  mainEntityOfPage: "https://www.mktweb360.com/chatbot-para-clinicas-centros-salud-automatizar-citas/",
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Inicio", item: "https://www.mktweb360.com/" },
    { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.mktweb360.com/blog/" },
    { "@type": "ListItem", position: 3, name: "Chatbot para clínicas y centros de salud", item: "https://www.mktweb360.com/chatbot-para-clinicas-centros-salud-automatizar-citas/" },
  ],
};

const FAQS = [
  {
    q: "¿El chatbot puede dar diagnósticos?",
    a: "No debe hacerlo. El chatbot de una clínica es un sistema de gestión y atención, no de diagnóstico. Puede dar información sobre los síntomas que trata el especialista, pero la valoración clínica corresponde siempre al profesional sanitario.",
  },
  {
    q: "¿Cómo se gestiona la cancelación de citas?",
    a: "El chatbot puede gestionar cancelaciones con el margen temporal adecuado, habitualmente 24-48 horas antes. Las cancelaciones de último momento o con situaciones especiales pueden derivarse al equipo.",
  },
  {
    q: "¿Puede el chatbot integrarse con WhatsApp?",
    a: "Sí. Los sistemas de chatbot modernos pueden operar tanto en web como en WhatsApp Business API. Para clínicas donde los pacientes ya se comunican por WhatsApp, esta integración puede ser muy valiosa.",
  },
  {
    q: "¿Qué pasa con los menores de edad?",
    a: "Para menores, los datos de salud tienen una protección adicional bajo el RGPD y la LOPD española. Si el chatbot puede entrar en contacto con datos de menores, se necesita consentimiento de los padres o tutores y medidas de protección adicionales.",
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

export default function ChatbotClinicasPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <article className="max-w-3xl mx-auto px-4 py-12">
        <Breadcrumbs crumbs={[{ label: "Inicio", href: "/" }, { label: "Blog", href: "/blog/" }, { label: "Chatbot para clínicas y centros de salud" }]} />

        <header className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="bg-primary-100 text-primary-700 text-xs font-medium px-2.5 py-0.5 rounded-full">Marketing Digital · Julio 2026</span>
            <time className="text-sm text-gray-400" dateTime="2026-07-07">7 de julio de 2026</time>
          </div>
          <h1 className="text-4xl font-bold text-primary-600 mb-4 leading-tight">
            Chatbot para clínicas y centros de salud: citas, preguntas y cumplimiento sanitario
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Las clínicas y centros de salud reciben cientos de consultas repetitivas cada día: horarios, citas, precios, cancelaciones. Un chatbot bien implementado automatiza la gestión de citas, responde preguntas frecuentes y cualifica pacientes cumpliendo el RGPD, y encaja de forma natural con el <Link href="/diseno-web-para-clinicas/" className="text-accent-500 hover:underline">diseño web para clínicas</Link>.
          </p>
        </header>

        <div className="text-gray-700 space-y-6 leading-relaxed">
          <p>
            El teléfono de recepción de una clínica suena sin parar para preguntar lo mismo una y otra vez. Cada llamada resuelta con un mismo dato es tiempo que el equipo no dedica al paciente que tiene delante. Ahí es donde un chatbot cambia el día a día de una clínica.
          </p>

          <h2 className="text-2xl font-bold text-primary-600">Qué puede automatizar un chatbot en una clínica</h2>
          <p>Un chatbot puede encargarse de la gestión de citas —reservar, confirmar, recordar y cancelar—, de responder las preguntas frecuentes sobre horarios, ubicación, precios o tratamientos, y de cualificar a los pacientes antes de derivarlos al profesional adecuado. Todo ello a cualquier hora, incluso cuando la clínica está cerrada.</p>
          <p>En un escenario tipo de unas 40 llamadas al día, buena parte son consultas repetitivas que no requieren criterio clínico. Automatizarlas descarga a recepción y mejora la experiencia del paciente, que obtiene respuesta al instante. Esto se complementa muy bien con un buen <Link href="/seo-local-empresas-servicios/" className="text-accent-500 hover:underline">SEO local para empresas de servicios</Link> que atraiga a esos pacientes hasta la web.</p>

          <h2 className="text-2xl font-bold text-primary-600">Requisitos específicos para chatbots en el sector sanitario</h2>
          <p>El sector sanitario tiene un requisito clave: los datos de salud son categoría especial según el artículo 9 del RGPD. Esto implica garantías reforzadas de seguridad, base jurídica adecuada e información clara al paciente sobre el tratamiento de sus datos.</p>
          <p>Además, hay un límite que no se debe cruzar: el chatbot no puede dar diagnósticos. Su función es gestionar y atender, no valorar clínicamente. Puede informar sobre los síntomas que trata cada especialista, pero la valoración corresponde siempre al profesional sanitario. Y con menores, la protección de los datos de salud es todavía mayor.</p>

          <h2 className="text-2xl font-bold text-primary-600">Cómo integrar el chatbot con el software de gestión de la clínica</h2>
          <p>Para que el chatbot sea útil de verdad, tiene que hablar con el software de gestión que ya usa la clínica. Los sistemas modernos permiten integrarse con plataformas como Dendros, Docline o Doctoralia, de modo que las citas gestionadas por el bot se reflejen directamente en la agenda del centro.</p>
          <p>Esa integración evita la doble gestión y los errores de agenda. El paciente reserva desde la web o desde WhatsApp y la cita aparece automáticamente en el sistema del centro, igual que si la hubiera introducido recepción. Es la misma lógica de coherencia digital que aplicamos en el <Link href="/diseno-web-para-dentistas/" className="text-accent-500 hover:underline">diseño web para dentistas</Link>.</p>

          <BlogBanner variant="default" />

          <h2 className="text-2xl font-bold text-primary-600">ROI del chatbot para una clínica: cálculo práctico</h2>
          <p>El cálculo suele ser favorable. En una clínica dental, un chatbot con un coste aproximado de 199 euros al mes puede generar un ahorro cercano a los 600 euros mensuales en tiempo de personal, al absorber las consultas y gestiones repetitivas que antes ocupaban a recepción.</p>
          <p>A ese ahorro directo se suman las citas que se recuperan porque el paciente puede reservar fuera del horario de atención telefónica. Reforzar además la ficha en <Link href="/google-business-profile/" className="text-accent-500 hover:underline">Google Business Profile</Link> multiplica el número de pacientes que llegan hasta ese chatbot, cerrando el círculo entre visibilidad y conversión.</p>

          <div className="bg-primary-600 text-white rounded-2xl p-8 my-2 text-center">
            <h2 className="text-2xl font-bold mb-3">Automatiza las citas de tu clínica con un chatbot que cumple el RGPD</h2>
            <p className="text-primary-200 mb-6">
              En Mkt Web 360 implantamos chatbots para clínicas y centros de salud que gestionan citas, resuelven consultas y respetan la normativa sanitaria.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contacto/" className="bg-accent-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-accent-600 transition-colors">
                Hablar con un especialista
              </Link>
              <Link href="/diseno-web-para-clinicas/" className="border-2 border-white text-white px-6 py-3 rounded-full font-semibold hover:bg-white/10 transition-colors">
                Ver diseño web para clínicas
              </Link>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-primary-600">Preguntas frecuentes</h2>
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
        </div>

        <nav className="mt-12 pt-8 border-t border-gray-200">
          <Link href="/blog/" className="text-accent-500 hover:text-accent-600 font-medium text-sm">← Volver al blog</Link>
        </nav>
      </article>
      <RelatedArticles currentSlug="chatbot-para-clinicas-centros-salud-automatizar-citas" />
    </>
  );
}
