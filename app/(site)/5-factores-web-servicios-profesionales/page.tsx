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
  title: "5 factores clave en la web de servicios profesionales (2026)",
  description:
    "Aviso legal conforme a la LSSI-CE, política de privacidad y cookies, y consentimiento para comunicaciones comerciales: los 5 factores que determinan si la web de tu despacho de servicios profesionales genera confianza o riesgo legal.",
  alternates: alternatesFor("/5-factores-web-servicios-profesionales/") ?? { canonical: "https://www.mktweb360.com/5-factores-web-servicios-profesionales/" },
  openGraph: {
    title: "5 factores clave en la web de servicios profesionales | Mkt Web 360",
    description: "Aviso legal (LSSI-CE), política de privacidad y cookies, y consentimiento para comunicaciones comerciales: los 5 factores que determinan si tu web de servicios profesionales genera confianza.",
    url: "https://www.mktweb360.com/5-factores-web-servicios-profesionales/",
    type: "article",
    images: [{ url: "/og-5-factores-web-servicios-profesionales.jpg", width: 1200, height: 630 }],
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "5 factores clave en la web de servicios profesionales",
  description:
    "Los 5 factores que determinan si la web de un despacho de servicios profesionales genera confianza: aviso legal conforme a la LSSI-CE, política de privacidad y cookies, consentimiento para comunicaciones comerciales, reserva de cita online y transparencia de honorarios.",
  author: { "@type": "Organization", name: "Mkt Web 360 SLU" },
  publisher: { "@type": "Organization", name: "Mkt Web 360 SLU", url: "https://www.mktweb360.com" },
  datePublished: "2026-09-06",
  url: "https://www.mktweb360.com/5-factores-web-servicios-profesionales/",
  mainEntityOfPage: "https://www.mktweb360.com/5-factores-web-servicios-profesionales/",
};

const FAQS = [
  {
    q: "¿Es obligatorio el aviso legal en la web de un despacho profesional?",
    a: "Sí. La LSSI-CE obliga a cualquier web con actividad económica a incluir un aviso legal visible con la identidad del titular, NIF, datos de contacto y, si aplica, el colegio profesional y número de colegiado.",
  },
  {
    q: "¿Qué pasa si no tengo política de privacidad y cookies en regla?",
    a: "Las sanciones por incumplimiento de la LSSI-CE pueden alcanzar los 600.000€ en los casos más graves. Toda web que trata datos personales necesita aviso legal, política de privacidad y política de cookies, como mínimo.",
  },
  {
    q: "¿Necesito el consentimiento del cliente para enviarle comunicaciones comerciales?",
    a: "Sí — la LSSI-CE exige consentimiento expreso previo antes de enviar comunicaciones comerciales por email u otros canales electrónicos, salvo excepciones muy concretas ligadas a una relación contractual previa.",
  },
  {
    q: "¿Vale la pena permitir pedir cita o consulta desde la web?",
    a: "Sí — capta consultas fuera del horario de atención, que es cuando muchos clientes potenciales de servicios profesionales deciden a quién contactar tras comparar varias opciones.",
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

export default function FactoresWebServiciosProfesionalesPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <article className="max-w-3xl mx-auto px-4 py-12">
        <Breadcrumbs crumbs={[{ label: "Inicio", href: "/" }, { label: "Blog", href: "/blog/" }, { label: "5 factores clave en la web de servicios profesionales" }]} />

        <header className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="bg-primary-100 text-primary-700 text-xs font-medium px-2.5 py-0.5 rounded-full">Diseño Web · Servicios Profesionales</span>
            <time className="text-sm text-gray-400" dateTime="2026-09-06">6 de septiembre de 2026</time>
          </div>
          <h1 className="text-4xl font-bold text-primary-600 mb-4 leading-tight">
            5 factores clave a tener en cuenta en la web de servicios profesionales
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Consultoras, ingenierías, arquitectos, auditores — cualquier despacho de servicios profesionales vive de la confianza. Y esa confianza se juega, en gran parte, en si la web cumple lo básico: identidad clara, legalidad en regla y un canal de contacto que no dependa del teléfono.
          </p>
          <Image
            src="/og-5-factores-web-servicios-profesionales.jpg"
            alt="5 factores clave en la web de servicios profesionales"
            width={1200}
            height={630}
            className="w-full rounded-2xl mt-6"
            priority
          />
        </header>

        <div className="text-gray-700 space-y-6 leading-relaxed">
          <p>
            Entre el aviso legal obligatorio, la política de privacidad y cookies, y el consentimiento para comunicaciones comerciales, la web de un despacho de servicios profesionales tiene que demostrar cumplimiento antes incluso de hablar de honorarios. Estos son los cinco factores que determinan si esa web genera confianza o riesgo legal.
          </p>

          <DemoPreviewBanner demo={DEMO_BY_ID.psicologo} />

          <h2 className="text-2xl font-bold text-primary-600">1. Aviso legal completo, conforme a la LSSI-CE</h2>
          <p>
            Cualquier web con actividad económica está obligada a incluir un aviso legal visible y accesible con la identidad del titular, NIF, datos de contacto y, cuando aplica, el colegio profesional y número de colegiado. Un despacho de consultoría, ingeniería o auditoría sin esta información básica transmite justo lo contrario de lo que vende: rigor.
          </p>

          <h2 className="text-2xl font-bold text-primary-600">2. Política de privacidad y cookies en regla</h2>
          <p>
            La LSSI-CE, junto con la normativa de protección de datos, exige tres documentos legales como mínimo en toda web que trate datos personales: aviso legal, política de privacidad y política de cookies. Las sanciones por incumplimiento pueden alcanzar los 600.000€ en los casos más graves — no es un detalle menor de diseño, es una obligación legal con consecuencias reales.
          </p>

          <div className="bg-primary-50 rounded-xl p-6 border border-primary-100">
            <p className="font-semibold text-primary-700 mb-2">¿Tu web cumple con la LSSI-CE y tiene los documentos legales en regla?</p>
            <p className="text-gray-600 text-sm mb-4">Revisamos tu web, tu aviso legal y tus formularios, y te decimos exactamente qué falta para captar clientes sin riesgo legal.</p>
            <Link href="/auditoria-digital/" className="inline-block bg-accent-500 text-white px-6 py-2.5 rounded-full font-semibold text-sm hover:bg-accent-600 transition-colors">
              Solicitar revisión gratuita
            </Link>
          </div>

          <h2 className="text-2xl font-bold text-primary-600">3. Solicitud de consulta o cita online, sin llamar</h2>
          <p>
            Buena parte de las decisiones sobre a qué despacho contactar ocurren fuera del horario de atención — comparando webs por la noche o durante un descanso laboral. Un formulario de solicitud de consulta integrado en la web capta a ese cliente potencial en el momento exacto en que decide, sin depender de que alguien conteste el teléfono.
          </p>

          <OfferBannerWebSeo />

          <h2 className="text-2xl font-bold text-primary-600">4. Consentimiento expreso para comunicaciones comerciales</h2>
          <p>
            La LSSI-CE exige consentimiento expreso previo antes de enviar comunicaciones comerciales por email u otros canales electrónicos, salvo excepciones muy concretas ligadas a una relación contractual previa. Un formulario de contacto sin una casilla de consentimiento clara no solo incumple la norma — genera fricción con clientes que valoran precisamente el rigor normativo de su asesor.
          </p>

          <h2 className="text-2xl font-bold text-primary-600">5. Transparencia de honorarios y forma de trabajo</h2>
          <p>
            La opacidad en honorarios es una de las principales barreras de entrada en servicios profesionales. Explicar con claridad el modelo de tarifas —por proyecto, por horas, con un rango orientativo— reduce las consultas de quien solo compara precio y filtra mejor los clientes que sí encajan con el despacho.
          </p>

          <section className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center py-2">
            <div className="md:col-span-2">
              <h2 className="text-2xl font-bold text-primary-600 mb-3">Tu web trabaja aunque el despacho esté con la agenda llena</h2>
              <p className="text-gray-700 leading-relaxed">
                Mientras atiendes clientes o cierras un proyecto, tu web sigue abierta. Alguien que compara despachos de servicios profesionales por la noche encuentra tu aviso legal en regla, entiende tu forma de trabajar y solicita una consulta — sin que tengas que estar disponible para atenderlo en ese momento.
              </p>
            </div>
            <div className="md:col-span-1">
              <Image
                src="/imagen-web-trabaja-para-el-autonomo.webp"
                alt="Diagrama de un ciclo de 24 horas mostrando cómo la web de un despacho de servicios profesionales sigue captando consultas mientras el despacho está cerrado o con la agenda llena"
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
            <h2 className="text-2xl font-bold mb-3">¿Tu despacho necesita una web que cumpla y que capte clientes?</h2>
            <p className="text-primary-200 mb-6">
              Diseñamos webs de servicios profesionales con aviso legal conforme a la LSSI-CE, formularios seguros y solicitud de consulta online.
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

          <h2 className="text-2xl font-bold text-primary-600">Preguntas frecuentes sobre la web de servicios profesionales</h2>
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
      <RelatedArticles currentSlug="5-factores-web-servicios-profesionales" />
    </>
  );
}
