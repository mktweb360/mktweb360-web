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
  title: "5 factores clave en la web de una clínica dental (2026)",
  description:
    "Publicidad sanitaria según el RD 1907/1996, datos de salud protegidos por el RGPD, número de colegiado visible y transparencia de precios: los 5 factores que determinan si la web de tu clínica dental capta pacientes o pierde su confianza.",
  alternates: alternatesFor("/5-factores-web-clinicas-dentales/") ?? { canonical: "https://www.mktweb360.com/5-factores-web-clinicas-dentales/" },
  openGraph: {
    title: "5 factores clave en la web de una clínica dental | Mkt Web 360",
    description: "Publicidad sanitaria (RD 1907/1996), RGPD y datos de salud, número de colegiado y transparencia de precios: los 5 factores que determinan si tu web de clínica dental capta pacientes.",
    url: "https://www.mktweb360.com/5-factores-web-clinicas-dentales/",
    type: "article",
    images: [{ url: "/og-5-factores-web-clinicas-dentales.jpg", width: 1200, height: 630 }],
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "5 factores clave en la web de una clínica dental",
  description:
    "Los 5 factores que determinan si la web de una clínica dental capta pacientes: publicidad sanitaria conforme al RD 1907/1996, protección de datos de salud (RGPD), identificación profesional con número de colegiado, transparencia de precios y ficha de Google Business Profile.",
  author: { "@type": "Organization", name: "Mkt Web 360 SLU" },
  publisher: { "@type": "Organization", name: "Mkt Web 360 SLU", url: "https://www.mktweb360.com" },
  datePublished: "2026-09-06",
  url: "https://www.mktweb360.com/5-factores-web-clinicas-dentales/",
  mainEntityOfPage: "https://www.mktweb360.com/5-factores-web-clinicas-dentales/",
};

const FAQS = [
  {
    q: "¿Es obligatorio incluir el número de colegiado en la web de la clínica?",
    a: "Las autoridades sanitarias revisan que la publicidad de servicios odontológicos incorpore el número de registro o colegiado del profesional responsable — omitirlo es una de las incidencias más comunes en las inspecciones de publicidad sanitaria.",
  },
  {
    q: "¿Qué no puedo prometer en la publicidad de mi clínica dental?",
    a: "El RD 1907/1996 prohíbe expresamente prometer resultados garantizados, usar testimonios de famosos o presentar como gratuitos actos clínicos que no lo son. La publicidad debe ser transparente, exacta y veraz.",
  },
  {
    q: "¿Qué sanción hay por tratar mal los datos de salud de los pacientes?",
    a: "Los datos de salud son una categoría especial de datos según el artículo 9 del RGPD. Su tratamiento indebido puede acarrear sanciones de hasta 20 millones de euros o el 4% de la facturación anual global, lo que sea mayor.",
  },
  {
    q: "¿Merece la pena mostrar precios orientativos de los tratamientos en la web?",
    a: "Sí — reduce las llamadas de pacientes que solo quieren comparar precio y filtra mejor las consultas que sí llegan, además de transmitir la transparencia que un paciente busca antes de decidirse por una clínica.",
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

export default function FactoresWebClinicasDentalesPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <article className="max-w-3xl mx-auto px-4 py-12">
        <Breadcrumbs crumbs={[{ label: "Inicio", href: "/" }, { label: "Blog", href: "/blog/" }, { label: "5 factores clave en la web de una clínica dental" }]} />

        <header className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="bg-primary-100 text-primary-700 text-xs font-medium px-2.5 py-0.5 rounded-full">Diseño Web · Clínicas Dentales</span>
            <time className="text-sm text-gray-400" dateTime="2026-09-06">6 de septiembre de 2026</time>
          </div>
          <h1 className="text-4xl font-bold text-primary-600 mb-4 leading-tight">
            5 factores clave a tener en cuenta en la web de una clínica dental
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            La web de una clínica dental no es solo una tarjeta de presentación — es publicidad sanitaria regulada, es la puerta de entrada de datos de salud protegidos y, muchas veces, es lo único que un paciente potencial revisa antes de pedir cita. Un error aquí no es solo estético: puede ser una infracción.
          </p>
          <Image
            src="/og-5-factores-web-clinicas-dentales.jpg"
            alt="5 factores clave en la web de una clínica dental"
            width={1200}
            height={630}
            className="w-full rounded-2xl mt-6"
            priority
          />
        </header>

        <div className="text-gray-700 space-y-6 leading-relaxed">
          <p>
            Entre la normativa de publicidad sanitaria, la protección de datos de salud y las expectativas de un paciente que compara varias clínicas antes de decidir, la web de una clínica dental tiene que cumplir mucho más que otras webs de servicios. Estos son los cinco factores que determinan si capta pacientes o genera desconfianza.
          </p>

          <DemoPreviewBanner demo={DEMO_BY_ID.clinica} />

          <h2 className="text-2xl font-bold text-primary-600">1. Publicidad sanitaria conforme al RD 1907/1996</h2>
          <p>
            El Real Decreto 1907/1996 regula la publicidad de productos, actividades o servicios con pretendida finalidad sanitaria. Exige que la publicidad se ajuste a criterios de transparencia, exactitud y veracidad, y prohíbe expresamente prometer resultados garantizados, utilizar testimonios de famosos o presentar como gratuitos actos clínicos que no lo son. Una web que promete "sonrisa perfecta garantizada" no solo exagera — incumple la norma.
          </p>

          <h2 className="text-2xl font-bold text-primary-600">2. Datos de salud protegidos: RGPD reforzado</h2>
          <p>
            Los datos que un paciente introduce en un formulario de contacto o de primera consulta —motivo de consulta, historial, fotografías clínicas— son datos de categoría especial según el artículo 9 del RGPD, con un nivel de protección superior al de un dato de contacto habitual. El tratamiento indebido puede acarrear sanciones de hasta 20 millones de euros o el 4% de la facturación anual global. Un formulario sin cifrado, sin política de privacidad clara o sin base legal explícita es un riesgo real, no teórico.
          </p>

          <div className="bg-primary-50 rounded-xl p-6 border border-primary-100">
            <p className="font-semibold text-primary-700 mb-2">¿Tu web cumple con la normativa de publicidad sanitaria y protección de datos de salud?</p>
            <p className="text-gray-600 text-sm mb-4">Revisamos tu web, tus formularios y tu ficha de Google, y te decimos exactamente qué falta para captar pacientes sin riesgo legal.</p>
            <Link href="/auditoria-digital/" className="inline-block bg-accent-500 text-white px-6 py-2.5 rounded-full font-semibold text-sm hover:bg-accent-600 transition-colors">
              Solicitar revisión gratuita
            </Link>
          </div>

          <h2 className="text-2xl font-bold text-primary-600">3. Reserva de cita online sin llamar</h2>
          <p>
            Buena parte de las búsquedas de clínica dental ocurren fuera del horario de atención telefónica — a última hora del día, decidiendo con dolor o con una duda estética que no puede esperar a mañana. Un sistema de reserva de cita integrado en la web capta a ese paciente en el momento exacto en que decide, sin depender de que alguien conteste el teléfono.
          </p>

          <OfferBannerWebSeo />

          <h2 className="text-2xl font-bold text-primary-600">4. Identificación profesional: nombre y número de colegiado</h2>
          <p>
            Las autoridades sanitarias controlan que la publicidad de servicios odontológicos incorpore el número de registro o colegiado del profesional responsable. Mostrarlo con claridad en la web —junto al nombre del odontólogo y su colegio profesional— no es solo un requisito de cumplimiento: es una señal de confianza que un paciente exigente busca activamente antes de reservar.
          </p>

          <h2 className="text-2xl font-bold text-primary-600">5. Transparencia de precios y financiación de tratamientos</h2>
          <p>
            La opacidad en precios es la principal fuente de desconfianza hacia el sector dental. Publicar rangos de precio orientativos para los tratamientos más buscados —limpieza, implante, ortodoncia— y explicar las opciones de financiación disponibles reduce las llamadas de pacientes que solo comparan precio y filtra mejor las consultas que sí llegan a la clínica.
          </p>

          <section className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center py-2">
            <div className="md:col-span-2">
              <h2 className="text-2xl font-bold text-primary-600 mb-3">Tu web trabaja aunque la clínica esté a tope de agenda</h2>
              <p className="text-gray-700 leading-relaxed">
                Mientras atiendes pacientes o cierras la agenda del día, tu web sigue abierta. Alguien que busca clínica dental a última hora encuentra tu ficha, ve al profesional identificado con su colegiado, revisa los precios orientativos y reserva — sin que tengas que estar disponible para atenderlo en ese momento.
              </p>
            </div>
            <div className="md:col-span-1">
              <Image
                src="/imagen-web-trabaja-para-el-autonomo.webp"
                alt="Diagrama de un ciclo de 24 horas mostrando cómo la web de una clínica dental sigue captando pacientes mientras la consulta está cerrada o a tope de agenda"
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
            <h2 className="text-2xl font-bold mb-3">¿Tu clínica dental necesita una web que cumpla y que capte pacientes?</h2>
            <p className="text-primary-200 mb-6">
              Diseñamos webs de clínicas dentales con publicidad sanitaria conforme a normativa, formularios seguros para datos de salud y reserva de cita online.
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

          <h2 className="text-2xl font-bold text-primary-600">Preguntas frecuentes sobre la web de una clínica dental</h2>
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
      <RelatedArticles currentSlug="5-factores-web-clinicas-dentales" />
    </>
  );
}
