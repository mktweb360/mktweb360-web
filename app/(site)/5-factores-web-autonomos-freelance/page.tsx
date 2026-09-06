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
  title: "5 factores clave en la web de un autónomo o freelance (2026)",
  description:
    "Aviso legal LSSI-CE, factura electrónica obligatoria (Ley Crea y Crece) y captación de clientes sin depender de intermediarios: los 5 factores que determinan si la web de un autónomo o freelance genera confianza y encargos.",
  alternates: alternatesFor("/5-factores-web-autonomos-freelance/") ?? { canonical: "https://www.mktweb360.com/5-factores-web-autonomos-freelance/" },
  openGraph: {
    title: "5 factores clave en la web de un autónomo o freelance | Mkt Web 360",
    description: "Aviso legal, factura electrónica obligatoria y captación directa de clientes: los 5 factores que determinan si tu web de autónomo o freelance genera encargos.",
    url: "https://www.mktweb360.com/5-factores-web-autonomos-freelance/",
    type: "article",
    images: [{ url: "/og-5-factores-web-autonomos-freelance.jpg", width: 1200, height: 630 }],
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "5 factores clave en la web de un autónomo o freelance",
  description:
    "Los 5 factores que determinan si la web de un autónomo o freelance genera confianza y encargos: aviso legal LSSI-CE, preparación ante la factura electrónica obligatoria (Ley Crea y Crece), portfolio y prueba social, solicitud de presupuesto online y posicionamiento frente a plataformas de intermediación.",
  author: { "@type": "Organization", name: "Mkt Web 360 SLU" },
  publisher: { "@type": "Organization", name: "Mkt Web 360 SLU", url: "https://www.mktweb360.com" },
  datePublished: "2026-09-06",
  url: "https://www.mktweb360.com/5-factores-web-autonomos-freelance/",
  mainEntityOfPage: "https://www.mktweb360.com/5-factores-web-autonomos-freelance/",
};

const FAQS = [
  {
    q: "¿Un autónomo también está obligado a tener aviso legal en su web?",
    a: "Sí — la LSSI-CE obliga a cualquier prestador de servicios de la sociedad de la información, incluidos los autónomos, a incluir en su web un aviso legal con su nombre, NIF, domicilio y datos de contacto.",
  },
  {
    q: "¿Cuándo será obligatoria la factura electrónica para autónomos?",
    a: "Según el calendario previsto por la Ley Crea y Crece, la obligación entra en vigor en octubre de 2027 para empresas con facturación superior a 8 millones de euros, y en octubre de 2028 para el resto de empresas y autónomos.",
  },
  {
    q: "¿Qué pasa si un autónomo no cumple con la factura electrónica obligatoria?",
    a: "El incumplimiento puede conllevar sanciones de hasta 10.000 euros, además de dificultar la relación comercial con clientes que sí estén obligados a operar con factura electrónica estructurada (Facturae o UBL).",
  },
  {
    q: "¿Merece la pena tener web propia si ya trabajo con plataformas de intermediación?",
    a: "Sí — una web propia permite captar clientes directamente, sin comisión de intermediario y sin depender de un algoritmo externo, y actúa como carta de presentación permanente cuando alguien busca referencias antes de contratar.",
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

export default function FactoresWebAutonomosFreelancePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <article className="max-w-3xl mx-auto px-4 py-12">
        <Breadcrumbs crumbs={[{ label: "Inicio", href: "/" }, { label: "Blog", href: "/blog/" }, { label: "5 factores clave en la web de un autónomo o freelance" }]} />

        <header className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="bg-primary-100 text-primary-700 text-xs font-medium px-2.5 py-0.5 rounded-full">Diseño Web · Autónomos y Freelance</span>
            <time className="text-sm text-gray-400" dateTime="2026-09-06">6 de septiembre de 2026</time>
          </div>
          <h1 className="text-4xl font-bold text-primary-600 mb-4 leading-tight">
            5 factores clave a tener en cuenta en la web de un autónomo o freelance
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Sin una web propia, un autónomo depende por completo del boca a boca o de plataformas de intermediación que se quedan con parte del encargo. Estos son los cinco factores que convierten una web en una fuente real de clientes directos.
          </p>
          <Image
            src="/og-5-factores-web-autonomos-freelance.jpg"
            alt="5 factores clave en la web de un autónomo o freelance"
            width={1200}
            height={630}
            className="w-full rounded-2xl mt-6"
            priority
          />
        </header>

        <div className="text-gray-700 space-y-6 leading-relaxed">
          <p>
            Entre el aviso legal exigido por la LSSI-CE, la factura electrónica que empezará a ser obligatoria en 2027-2028, y la necesidad de diferenciarse de plataformas de intermediación que compiten por precio, la web de un autónomo o freelance cumple una función muy concreta: generar encargos directos, sin comisiones ni algoritmos de por medio. Estos son los cinco factores que marcan la diferencia.
          </p>

          <DemoPreviewBanner demo={DEMO_BY_ID.reformas} />

          <h2 className="text-2xl font-bold text-primary-600">1. Aviso legal conforme a la LSSI-CE, también para autónomos</h2>
          <p>
            La Ley de Servicios de la Sociedad de la Información y Comercio Electrónico obliga a cualquier prestador de servicios online —también a un autónomo con web propia— a incluir un aviso legal con su nombre completo, NIF, domicilio y datos de contacto. Omitir esta información no solo es un incumplimiento legal: transmite al visitante que está tratando con alguien que no se ha tomado la molestia de formalizar su actividad.
          </p>

          <h2 className="text-2xl font-bold text-primary-600">2. Preparación ante la factura electrónica obligatoria</h2>
          <p>
            La Ley Crea y Crece fija octubre de 2027 para empresas con facturación superior a 8 millones de euros, y octubre de 2028 para el resto de empresas y autónomos, como fechas límite para operar con factura electrónica estructurada (Facturae o UBL). No cumplir puede acarrear sanciones de hasta 10.000 euros. Un autónomo que ya comunica en su web que está preparado para esta transición transmite una profesionalidad que marca diferencia frente a la competencia informal.
          </p>

          <div className="bg-primary-50 rounded-xl p-6 border border-primary-100">
            <p className="font-semibold text-primary-700 mb-2">¿Tu web actual capta clientes directos o solo existe porque "hay que tenerla"?</p>
            <p className="text-gray-600 text-sm mb-4">Revisamos tu web, tu portfolio y tu presencia online, y te decimos exactamente qué te está costando encargos.</p>
            <Link href="/auditoria-digital/" className="inline-block bg-accent-500 text-white px-6 py-2.5 rounded-full font-semibold text-sm hover:bg-accent-600 transition-colors">
              Solicitar revisión gratuita
            </Link>
          </div>

          <h2 className="text-2xl font-bold text-primary-600">3. Portfolio y prueba social, no solo un listado de servicios</h2>
          <p>
            Un cliente que busca un autónomo o freelance necesita ver trabajo real antes de escribir: proyectos anteriores, testimonios concretos, resultados. Una web que se limita a enumerar servicios sin mostrar evidencia de calidad compite en igualdad de condiciones con cualquier perfil anónimo de una plataforma de intermediación — y pierde la ventaja de la confianza directa.
          </p>

          <h2 className="text-2xl font-bold text-primary-600">4. Solicitud de presupuesto online, sin fricciones</h2>
          <p>
            Cuantos menos pasos separen a un visitante interesado de enviar los detalles de su proyecto, más presupuestos se generan. Un formulario claro, con los campos justos y una respuesta rápida, convierte visitas en encargos reales sin depender de que el autónomo esté disponible para atender una llamada en ese momento.
          </p>

          <OfferBannerWebSeo />

          <h2 className="text-2xl font-bold text-primary-600">5. Posicionamiento frente a plataformas de intermediación</h2>
          <p>
            Trabajar a través de plataformas de intermediación tiene un coste: comisiones, dependencia de un algoritmo externo y ausencia de relación directa con el cliente. Una web propia bien posicionada permite captar esos mismos clientes sin intermediarios, con márgenes más altos y una relación comercial que el autónomo controla de principio a fin.
          </p>

          <section className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center py-2">
            <div className="md:col-span-2">
              <h2 className="text-2xl font-bold text-primary-600 mb-3">Tu web trabaja para ti aunque estés a mitad de un proyecto</h2>
              <p className="text-gray-700 leading-relaxed">
                Mientras terminas un encargo, tu web sigue abierta las 24 horas. Alguien que busca un profesional un domingo por la noche encuentra tu portfolio, revisa tus referencias y envía una solicitud de presupuesto — sin que tengas que estar disponible para atenderlo en ese momento.
              </p>
            </div>
            <div className="md:col-span-1">
              <Image
                src="/imagen-web-trabaja-para-el-autonomo.webp"
                alt="Diagrama de un ciclo de 24 horas mostrando cómo la web de un autónomo o freelance sigue captando clientes mientras él está trabajando en otros proyectos"
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
            <h2 className="text-2xl font-bold mb-3">¿Tu negocio como autónomo o freelance necesita una web que capte clientes directos?</h2>
            <p className="text-primary-200 mb-6">
              Diseñamos webs de autónomos y freelance con aviso legal en regla, portfolio profesional y solicitud de presupuesto online.
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

          <h2 className="text-2xl font-bold text-primary-600">Preguntas frecuentes sobre la web de un autónomo o freelance</h2>
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
      <RelatedArticles currentSlug="5-factores-web-autonomos-freelance" />
    </>
  );
}
