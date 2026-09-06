import Image from "next/image";
import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { RelatedArticles } from "@/components/RelatedArticles";
import { OfferBannerWebSeo } from "@/components/offers/OfferBannerWebSeo";
import { alternatesFor } from "@/lib/i18n/routes";
import { DemoPreviewBanner } from "@/components/DemoPreviewBanner";
import { DEMO_BY_ID } from "@/lib/demos";

export const metadata: Metadata = {
  title: "5 factores clave en la web de una academia o centro de formación (2026)",
  description:
    "Publicidad de resultados sin exagerar, RGPD de menores, DPD obligatorio y disponibilidad de plazas en tiempo real: los 5 factores que determinan si la web de tu academia capta alumnos.",
  alternates: alternatesFor("/5-factores-web-academias-centros-formacion/") ?? { canonical: "https://www.mktweb360.com/5-factores-web-academias-centros-formacion/" },
  openGraph: {
    title: "5 factores clave en la web de una academia o centro de formación | Mkt Web 360",
    description: "Publicidad de resultados, RGPD de menores, DPD obligatorio y disponibilidad de plazas: los 5 factores que determinan si tu web de academia capta alumnos.",
    url: "https://www.mktweb360.com/5-factores-web-academias-centros-formacion/",
    type: "article",
    images: [{ url: "/og-5-factores-web-academias-centros-formacion.jpg", width: 1200, height: 630 }],
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "5 factores clave en la web de una academia o centro de formación",
  description:
    "Los 5 factores que determinan si la web de una academia capta alumnos: publicidad de resultados sin exagerar, RGPD de menores, Delegado de Protección de Datos, disponibilidad de plazas y prueba social real.",
  author: { "@type": "Organization", name: "Mkt Web 360 SLU" },
  publisher: { "@type": "Organization", name: "Mkt Web 360 SLU", url: "https://www.mktweb360.com" },
  datePublished: "2026-09-06",
  url: "https://www.mktweb360.com/5-factores-web-academias-centros-formacion/",
  mainEntityOfPage: "https://www.mktweb360.com/5-factores-web-academias-centros-formacion/",
};

const FAQS = [
  {
    q: "¿Puedo anunciar un porcentaje de aprobados o de inserción laboral en mi web?",
    a: "Solo si es una cifra real y puedes justificarla — publicitar cifras infladas o inventadas es publicidad engañosa y motivo de reclamación.",
  },
  {
    q: "¿A partir de qué edad puede un menor aceptar la política de privacidad por sí mismo?",
    a: "A partir de los 14 años según el artículo 7 de la LOPDGDD; por debajo de esa edad hace falta el consentimiento de los padres o tutores.",
  },
  {
    q: "¿Toda academia necesita un Delegado de Protección de Datos?",
    a: "No todas — es obligatorio para centros docentes que impartan enseñanzas regladas (infantil, primaria, secundaria, FP, idiomas, etc.), no para cualquier formación privada no reglada.",
  },
  {
    q: "¿Por qué mostrar la disponibilidad de plazas en la web y no solo por teléfono?",
    a: "Porque reduce la fricción de tener que llamar para algo que se puede resolver con una tabla visible, y capta al interesado en el momento en que está decidiendo, no cuando alguien contesta el teléfono.",
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

export default function FactoresWebAcademiasPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <article className="max-w-3xl mx-auto px-4 py-12">
        <Breadcrumbs crumbs={[{ label: "Inicio", href: "/" }, { label: "Blog", href: "/blog/" }, { label: "5 factores clave en la web de una academia" }]} />

        <header className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="bg-primary-100 text-primary-700 text-xs font-medium px-2.5 py-0.5 rounded-full">Diseño Web · Educación y Formación</span>
            <time className="text-sm text-gray-400" dateTime="2026-09-06">6 de septiembre de 2026</time>
          </div>
          <h1 className="text-4xl font-bold text-primary-600 mb-4 leading-tight">
            5 factores clave a tener en cuenta en la web de una academia o centro de formación
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            La web de una academia o centro de formación vende una promesa a futuro — un idioma aprendido, un examen aprobado, un trabajo conseguido. Esa promesa está regulada, y además el negocio suele tratar datos de menores.
          </p>
          <Image
            src="/og-5-factores-web-academias-centros-formacion.jpg"
            alt="5 factores clave en la web de una academia o centro de formación"
            width={1200}
            height={630}
            className="w-full rounded-2xl mt-6"
            priority
          />
        </header>

        <div className="text-gray-700 space-y-6 leading-relaxed">
          <p>
            Estos son los cinco factores que hay que resolver antes de diseñar la web, no después de recibir la primera reclamación.
          </p>

          <DemoPreviewBanner demo={DEMO_BY_ID.academia} />

          <h2 className="text-2xl font-bold text-primary-600">1. Publicidad de resultados: sin cifras infladas ni promesas vacías</h2>
          <p>
            La normativa de prácticas comerciales desleales prohíbe la publicidad engañosa, y en el sector formativo esto se traduce en un riesgo muy concreto: cifras de empleabilidad o de aprobados infladas o inventadas ("95% de inserción laboral", "aprueba seguro") son motivo de reclamación y de sanción cuando no se pueden justificar con datos reales. La web debe comunicar resultados verificables — número real de alumnos, testimonios reales, metodología — no cifras de marketing sin respaldo.
          </p>

          <h2 className="text-2xl font-bold text-primary-600">2. RGPD y datos de menores: consentimiento según la edad</h2>
          <p>
            En España, el artículo 7 de la LOPDGDD fija en 14 años la edad a partir de la cual un menor puede prestar su propio consentimiento para el tratamiento de sus datos; por debajo de esa edad, hace falta el consentimiento de padres o tutores. Cualquier academia que trabaje con niños o adolescentes necesita que su formulario de inscripción y su web reflejen esta distinción de forma explícita, no un único checkbox genérico de "acepto la política de privacidad" igual para un adulto que para un niño de 8 años.
          </p>

          <div className="bg-primary-50 rounded-xl p-6 border border-primary-100">
            <p className="font-semibold text-primary-700 mb-2">¿Tu web de academia cumple con RGPD de menores y publicidad de resultados?</p>
            <p className="text-gray-600 text-sm mb-4">Revisamos tu web, tu formulario de inscripción y tu ficha de Google, y te decimos exactamente qué falta para captar alumnos sin riesgo legal.</p>
            <Link href="/auditoria-digital/" className="inline-block bg-accent-500 text-white px-6 py-2.5 rounded-full font-semibold text-sm hover:bg-accent-600 transition-colors">
              Solicitar revisión gratuita
            </Link>
          </div>

          <h2 className="text-2xl font-bold text-primary-600">3. Delegado de Protección de Datos si es centro docente reglado</h2>
          <p>
            El artículo 34 de la LOPDGDD obliga a designar un Delegado de Protección de Datos (DPD) a los centros docentes que impartan cualquier enseñanza regulada por la legislación educativa — desde infantil hasta formación profesional o idiomas. Si la academia encaja en ese supuesto, la web debería identificar quién ejerce esa función y cómo contactar, igual que cualquier información legal obligatoria.
          </p>

          <OfferBannerWebSeo />

          <h2 className="text-2xl font-bold text-primary-600">4. Disponibilidad de plazas y horarios en tiempo real</h2>
          <p>
            Una de las fricciones más comunes del sector es tener que llamar para preguntar si queda plaza en un horario concreto. Una tabla de horarios con disponibilidad visible en la propia web —completo / plazas libres— reduce esas llamadas y deja que el interesado se autogestione hasta el punto de reservar o pedir información ya decidido.
          </p>

          <h2 className="text-2xl font-bold text-primary-600">5. Prueba social real: profesorado, titulación, testimonios verificables</h2>
          <p>
            En un sector donde el resultado no es inmediato, la confianza inicial depende de quién enseña y qué dicen quienes ya han pasado por la academia. Mostrar la titulación real del profesorado y testimonios de alumnos verificables pesa mucho más que un claim genérico de "los mejores profesores".
          </p>

          <section className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center py-2">
            <div className="md:col-span-2">
              <h2 className="text-2xl font-bold text-primary-600 mb-3">Tu web trabaja aunque estés dando clase</h2>
              <p className="text-gray-700 leading-relaxed">
                Mientras estás dando clase o atendiendo a un alumno, tu web sigue abierta. Alguien que busca academia de inglés un domingo por la tarde encuentra tu horario disponible, ve la titulación del profesorado y se inscribe — sin que tengas que estar disponible para atenderlo en ese momento.
              </p>
            </div>
            <div className="md:col-span-1">
              <Image
                src="/imagen-web-trabaja-para-el-autonomo.webp"
                alt="Diagrama de un ciclo de 24 horas mostrando cómo la web de una academia sigue captando alumnos mientras el profesorado está dando clase"
                width={760}
                height={1131}
                className="w-full h-auto rounded-2xl"
              />
            </div>
          </section>

          <p className="text-sm text-gray-500">
            Ver también: <Link href="/diseno-de-paginas-web/" className="text-accent-500 hover:underline">Diseño de páginas web</Link> · <Link href="/seo-local/" className="text-accent-500 hover:underline">SEO Local</Link>
          </p>

          <div className="bg-primary-600 text-white rounded-2xl p-8 my-2 text-center">
            <h2 className="text-2xl font-bold mb-3">¿Tu academia necesita una web que cumpla y que capte alumnos?</h2>
            <p className="text-primary-200 mb-6">
              Diseñamos webs de academias y centros de formación con RGPD de menores correctamente implementado y disponibilidad de plazas en tiempo real.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contacto/" className="bg-accent-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-accent-600 transition-colors">
                Hablar con un especialista
              </Link>
              <Link href="/diseno-de-paginas-web/" className="border-2 border-white text-white px-6 py-3 rounded-full font-semibold hover:bg-white/10 transition-colors">
                Ver diseño de páginas web
              </Link>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-primary-600">Preguntas frecuentes sobre la web de una academia</h2>
          <div className="space-y-3">
            {FAQS.map((faq) => (
              <details key={faq.q} className="border border-gray-200 rounded-xl overflow-hidden group">
                <summary className="px-6 py-4 cursor-pointer font-semibold text-primary-700 hover:bg-primary-50 list-none flex justify-between items-center">
                  {faq.q}
                  <span className="text-accent-500 group-open:rotate-180 transition-transform">﹀</span>
                </summary>
                <div className="px-6 py-4 text-gray-600 border-t border-gray-100">{faq.a}</div>
              </details>
            ))}
          </div>

          <p className="text-sm text-gray-500 pt-4">
            Servicios relacionados: <Link href="/diseno-de-paginas-web/" className="text-accent-500 hover:underline">Diseño Web</Link> · <Link href="/seo-local/" className="text-accent-500 hover:underline">SEO Local</Link>
          </p>
        </div>

        <nav className="mt-12 pt-8 border-t border-gray-200">
          <Link href="/blog/" className="text-accent-500 hover:text-accent-600 font-medium text-sm">← Volver al blog</Link>
        </nav>
      </article>
      <RelatedArticles currentSlug="5-factores-web-academias-centros-formacion" />
    </>
  );
}
