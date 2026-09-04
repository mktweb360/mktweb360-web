import Image from "next/image";
import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { RelatedArticles } from "@/components/RelatedArticles";
import { OfferBannerWebSeo } from "@/components/offers/OfferBannerWebSeo";
import { alternatesFor } from "@/lib/i18n/routes";

export const metadata: Metadata = {
  title: "5 factores clave en la web de una clínica o centro de salud (2026)",
  description:
    "Publicidad sanitaria regulada, datos de salud protegidos por RGPD, cita online y Google Business Profile: los 5 factores que determinan si la web de tu clínica capta pacientes o los pierde.",
  alternates: alternatesFor("/5-factores-web-clinicas-centros-salud/") ?? { canonical: "https://www.mktweb360.com/5-factores-web-clinicas-centros-salud/" },
  openGraph: {
    title: "5 factores clave en la web de una clínica o centro de salud | Mkt Web 360",
    description: "Publicidad sanitaria regulada, RGPD, cita online y Google Business Profile: los 5 factores que determinan si tu web de clínica capta pacientes.",
    url: "https://www.mktweb360.com/5-factores-web-clinicas-centros-salud/",
    type: "article",
    images: [{ url: "/og-5-factores-web-clinicas-centros-salud.jpg", width: 1200, height: 630 }],
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "5 factores clave en la web de una clínica o centro de salud",
  description:
    "Los 5 factores que determinan si la web de una clínica capta pacientes: publicidad sanitaria regulada, protección de datos de salud, cita online, Google Business Profile y señales de confianza médica.",
  author: { "@type": "Organization", name: "Mkt Web 360 SLU" },
  publisher: { "@type": "Organization", name: "Mkt Web 360 SLU", url: "https://www.mktweb360.com" },
  datePublished: "2026-09-04",
  url: "https://www.mktweb360.com/5-factores-web-clinicas-centros-salud/",
  mainEntityOfPage: "https://www.mktweb360.com/5-factores-web-clinicas-centros-salud/",
};

const FAQS = [
  {
    q: "¿Puedo prometer resultados o curaciones en la web de mi clínica?",
    a: "No. El artículo 4 del Real Decreto 1907/1996 prohíbe expresamente sugerir efectos preventivos o terapéuticos no demostrados, o aportar seguridades de alivio o curación cierta. Aplica a toda tu web, no solo a los anuncios pagados. Usa un lenguaje descriptivo de los tratamientos, nunca promesas de resultado.",
  },
  {
    q: "¿Es obligatorio mostrar el nombre del profesional responsable en la web?",
    a: "Sí. La normativa de publicidad sanitaria exige identificar de forma clara y visible al profesional responsable de cada servicio anunciado, y en varias comunidades autónomas la publicidad de centros sanitarios requiere autorización o comunicación previa a la autoridad sanitaria.",
  },
  {
    q: "¿Un formulario de contacto normal es suficiente para pedir cita?",
    a: "Legalmente no basta con un formulario genérico si en él se recogen datos relacionados con la salud del paciente (motivo de consulta, síntomas, historial). Al tratarse de una categoría especial de datos según el artículo 9 del RGPD, el formulario necesita consentimiento explícito, cifrado y una política de privacidad específica para datos de salud.",
  },
  {
    q: "¿Merece la pena invertir en la ficha de Google Business Profile si ya tengo web?",
    a: "Sí, y para una clínica suele ser más rentable que la propia web en fase de captación local: la mayoría de los pacientes elige entre las fichas del Local Pack antes de llegar a los resultados orgánicos. Web y ficha de Google deben trabajar juntas, no una en lugar de la otra.",
  },
  {
    q: "¿Cuánto tarda en notarse el trabajo hecho en la web de una clínica?",
    a: "La parte local (Google Business Profile bien optimizado) suele dar resultados visibles en 4-8 semanas. El posicionamiento orgánico de la web para búsquedas competitivas es más lento, entre 4 y 8 meses, pero más estable en el tiempo.",
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

export default function FactoresWebClinicasPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <article className="max-w-3xl mx-auto px-4 py-12">
        <Breadcrumbs crumbs={[{ label: "Inicio", href: "/" }, { label: "Blog", href: "/blog/" }, { label: "5 factores clave en la web de una clínica" }]} />

        <header className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="bg-primary-100 text-primary-700 text-xs font-medium px-2.5 py-0.5 rounded-full">Diseño Web · Clínicas y Salud</span>
            <time className="text-sm text-gray-400" dateTime="2026-09-04">4 de septiembre de 2026</time>
          </div>
          <h1 className="text-4xl font-bold text-primary-600 mb-4 leading-tight">
            5 factores clave a tener en cuenta en la web de una clínica o centro de salud
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            La web de una clínica no es una web más: opera bajo publicidad sanitaria regulada y maneja datos de salud, una categoría especial protegida por el RGPD. Estos son los cinco factores que hay que resolver antes de diseñarla, no después.
          </p>
          <Image
            src="/og-5-factores-web-clinicas-centros-salud.jpg"
            alt="5 factores clave en la web de una clínica o centro de salud"
            width={1200}
            height={630}
            className="w-full rounded-2xl mt-6"
            priority
          />
        </header>

        <div className="text-gray-700 space-y-6 leading-relaxed">
          <p>
            Una clínica dental, un centro de fisioterapia o una consulta de psicología no pueden tratar su web como la de cualquier negocio. Hay dos capas normativas que condicionan cada decisión de diseño y de contenido: la publicidad sanitaria, regulada por el Real Decreto 1907/1996, y el tratamiento de datos de salud, que el RGPD clasifica como categoría especial con requisitos reforzados. Ignorarlas no solo es un riesgo legal — también es la diferencia entre una web que transmite autoridad médica y una que parece cualquier landing genérica.
          </p>
          <p>
            A partir de ahí, hay tres factores más de negocio puro que determinan si esa web capta pacientes o se queda en una tarjeta de presentación bonita. Estos son los cinco que de verdad importan.
          </p>

          <h2 className="text-2xl font-bold text-primary-600">1. Publicidad sanitaria: lo que puedes decir y lo que no</h2>
          <p>
            El Real Decreto 1907/1996 sobre publicidad y promoción comercial de productos y servicios con finalidad sanitaria aplica a todo soporte publicitario del centro, web incluida. Su artículo 4 prohíbe sugerir efectos preventivos o terapéuticos que no hayan sido demostrados, aportar seguridades de alivio o curación cierta, o invocar autorizaciones sanitarias que no existan realmente. En la práctica, esto significa redactar cada página de servicio en términos descriptivos —qué es el tratamiento, para quién está indicado, cómo se realiza— y evitar el lenguaje de resultado garantizado que es habitual en otros sectores ("elimina el dolor para siempre", "resultados garantizados"). Además, hay que identificar con claridad al profesional responsable de cada servicio anunciado, y en algunas comunidades autónomas la publicidad del centro requiere autorización o comunicación previa a la autoridad sanitaria correspondiente.
          </p>

          <h2 className="text-2xl font-bold text-primary-600">2. Datos de salud: una categoría especial del RGPD</h2>
          <p>
            En cuanto un formulario de contacto o de cita pide el motivo de la consulta, un síntoma o cualquier dato relacionado con la salud del paciente, deja de ser un formulario cualquiera: pasa a tratar una categoría especial de datos según el artículo 9 del RGPD, con requisitos de consentimiento explícito más estrictos que los de un formulario comercial. Esto tiene consecuencias directas de diseño: el formulario debe pedir el consentimiento de forma inequívoca y separada del resto de casillas, el hosting y el envío de datos deben ir cifrados, y la política de privacidad de la web necesita una cláusula específica sobre datos de salud, no la genérica que sirve para una tienda online. Cuantos menos datos clínicos pida el formulario público —limitándose al motivo de contacto general y dejando el detalle para la consulta— menor es el riesgo y la fricción para el paciente.
          </p>

          <div className="bg-primary-50 rounded-xl p-6 border border-primary-100">
            <p className="font-semibold text-primary-700 mb-2">¿Tu web de clínica cumple con publicidad sanitaria y RGPD de datos de salud?</p>
            <p className="text-gray-600 text-sm mb-4">Revisamos tu web, tu formulario de cita y tu ficha de Google, y te decimos exactamente qué falta para captar pacientes sin riesgo legal.</p>
            <Link href="/auditoria-digital/" className="inline-block bg-accent-500 text-white px-6 py-2.5 rounded-full font-semibold text-sm hover:bg-accent-600 transition-colors">
              Solicitar revisión gratuita
            </Link>
          </div>

          <h2 className="text-2xl font-bold text-primary-600">3. Reserva de cita online sin fricción</h2>
          <p>
            Cada llamada que un paciente tiene que hacer para pedir cita es una oportunidad de que elija a otra clínica en su lugar, especialmente fuera del horario de atención telefónica. Un sistema de reserva online integrado en la propia web —sincronizado con la agenda real del centro, no un formulario que genera un email que alguien revisa al día siguiente— reduce llamadas, reduce huecos sin cubrir y capta a los pacientes que buscan fuera de horario comercial. La clave de diseño es que el botón de "pedir cita" esté visible en todo momento, no escondido al final de una página de servicio.
          </p>

          <h2 className="text-2xl font-bold text-primary-600">4. Google Business Profile integrado con la estrategia web</h2>
          <p>
            Para una clínica, la ficha de Google suele pesar más en la captación local que la propia web: la mayoría de los pacientes elige entre las fichas del Local Pack —el bloque de tres resultados con mapa— antes de llegar a los resultados orgánicos. Eso no hace prescindible la web; la hace complementaria. La web necesita una página propia por cada especialidad (odontología, fisioterapia, psicología, cada una con su propia URL) en lugar de una única página de "servicios" genérica, porque así es como busca realmente el paciente y porque cada página enlaza de vuelta con la categoría correcta en Google Business Profile. Web y ficha de Google deben decir siempre lo mismo: mismo nombre, mismo horario, misma dirección.
          </p>

          <OfferBannerWebSeo />

          <h2 className="text-2xl font-bold text-primary-600">5. Señales de confianza médica (E-E-A-T)</h2>
          <p>
            La salud es, para Google, un sector YMYL (Your Money or Your Life): contenidos que pueden afectar al bienestar de una persona. El buscador exige más señales de experiencia, pericia, autoridad y fiabilidad que en un sector convencional, y el paciente exige exactamente lo mismo antes de reservar cita. En la práctica esto se traduce en biografías reales del equipo con titulación y número de colegiación visibles, reseñas de pacientes gestionadas de forma activa, y contenido de blog redactado con criterio médico —nunca copiado de otra web— que responda a dudas reales en lugar de generar volumen sin rigor. Una clínica que muestra quién trata al paciente, con qué formación y qué dicen otros pacientes, convierte más que una que solo enseña instalaciones bonitas.
          </p>

          <section className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center py-2">
            <div className="md:col-span-2">
              <h2 className="text-2xl font-bold text-primary-600 mb-3">Tu web trabaja aunque tú no puedas atender</h2>
              <p className="text-gray-700 leading-relaxed">
                Mientras atiendes a un paciente, revisas historiales o cierras la consulta al final del día, tu web sigue abierta. Alguien que busca fisioterapeuta a las 23:00 o un domingo por la mañana encuentra tu ficha, lee tus especialidades, ve las reseñas y pide cita — sin que tú tengas que estar disponible para recibirlo en ese momento. Esa es la diferencia entre una web que solo existe y una que capta pacientes mientras tú trabajas en otra cosa.
              </p>
            </div>
            <div className="md:col-span-1">
              <Image
                src="/imagen-web-trabaja-para-el-autonomo.webp"
                alt="Diagrama de un ciclo de 24 horas mostrando cómo la web de una clínica sigue captando pacientes mientras el profesional está ocupado o fuera de horario"
                width={760}
                height={1131}
                className="w-full h-auto rounded-2xl"
              />
            </div>
          </section>

          <p className="text-sm text-gray-500">
            Ver también: <Link href="/seo-para-clinicas-centros-salud-captar-pacientes-google/" className="text-accent-500 hover:underline">SEO para clínicas y centros de salud</Link> · <Link href="/diseno-web-para-clinicas/" className="text-accent-500 hover:underline">Diseño web para clínicas</Link> · <Link href="/google-my-business-empresas-guia/" className="text-accent-500 hover:underline">Guía de Google Business Profile</Link>
          </p>

          <div className="bg-primary-600 text-white rounded-2xl p-8 my-2 text-center">
            <h2 className="text-2xl font-bold mb-3">¿Tu clínica necesita una web que cumpla y que capte pacientes?</h2>
            <p className="text-primary-200 mb-6">
              Diseñamos webs de clínicas y centros de salud con publicidad sanitaria correcta, formularios seguros para datos de salud y cita online integrada.
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

          <h2 className="text-2xl font-bold text-primary-600">Preguntas frecuentes sobre la web de una clínica</h2>
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
            Servicios relacionados: <Link href="/diseno-web-para-clinicas/" className="text-accent-500 hover:underline">Diseño Web para Clínicas</Link> · <Link href="/seo-local/" className="text-accent-500 hover:underline">SEO Local</Link>
          </p>
        </div>

        <nav className="mt-12 pt-8 border-t border-gray-200">
          <Link href="/blog/" className="text-accent-500 hover:text-accent-600 font-medium text-sm">← Volver al blog</Link>
        </nav>
      </article>
      <RelatedArticles currentSlug="5-factores-web-clinicas-centros-salud" />
    </>
  );
}
