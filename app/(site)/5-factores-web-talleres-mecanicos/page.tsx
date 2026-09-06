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
  title: "5 factores clave en la web de un taller mecánico (2026)",
  description:
    "Hoja de reclamaciones, presupuesto previo por escrito (RD 1457/1986) y garantía de reparación: los 5 factores que determinan si la web de tu taller mecánico capta clientes o pierde su confianza.",
  alternates: alternatesFor("/5-factores-web-talleres-mecanicos/") ?? { canonical: "https://www.mktweb360.com/5-factores-web-talleres-mecanicos/" },
  openGraph: {
    title: "5 factores clave en la web de un taller mecánico | Mkt Web 360",
    description: "Presupuesto por escrito (RD 1457/1986), garantía de reparación y hoja de reclamaciones: los 5 factores que determinan si tu web de taller mecánico capta clientes.",
    url: "https://www.mktweb360.com/5-factores-web-talleres-mecanicos/",
    type: "article",
    images: [{ url: "/og-5-factores-web-talleres-mecanicos.jpg", width: 1200, height: 630 }],
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "5 factores clave en la web de un taller mecánico",
  description:
    "Los 5 factores que determinan si la web de un taller mecánico capta clientes: hoja de reclamaciones, presupuesto previo por escrito según el RD 1457/1986, solicitud de cita online, garantía de reparación clara y transparencia de precios.",
  author: { "@type": "Organization", name: "Mkt Web 360 SLU" },
  publisher: { "@type": "Organization", name: "Mkt Web 360 SLU", url: "https://www.mktweb360.com" },
  datePublished: "2026-09-06",
  url: "https://www.mktweb360.com/5-factores-web-talleres-mecanicos/",
  mainEntityOfPage: "https://www.mktweb360.com/5-factores-web-talleres-mecanicos/",
};

const FAQS = [
  {
    q: "¿Es obligatorio dar un presupuesto por escrito antes de reparar el coche?",
    a: "Sí. El artículo 12 del Real Decreto 1457/1986 obliga al taller a entregar un presupuesto previo, gratuito y detallado —con piezas, mano de obra y plazo— antes de iniciar la reparación. Ese presupuesto tiene una validez mínima de 12 días hábiles.",
  },
  {
    q: "¿Cuánto dura la garantía de una reparación?",
    a: "Para vehículos particulares, la garantía de la reparación caduca a los 3 meses o 2.000 kilómetros recorridos, lo que ocurra antes. Para vehículos industriales, el plazo es de 15 días o 2.000 kilómetros. Lo regula el RD 1457/1986, modificado por el RD 542/2020.",
  },
  {
    q: "¿La hoja de reclamaciones puede ser digital?",
    a: "Sí — desde 2023 los talleres pueden ofrecerla también mediante código QR, además del formato físico tradicional, siempre que el cartel informativo sea visible para el cliente.",
  },
  {
    q: "¿Vale la pena permitir pedir cita o presupuesto desde la web?",
    a: "Sí — capta clientes fuera del horario en que alguien puede atender el teléfono, que es cuando muchas personas deciden dónde llevar el coche tras una avería o antes de la ITV.",
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

export default function FactoresWebTalleresMecanicosPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <article className="max-w-3xl mx-auto px-4 py-12">
        <Breadcrumbs crumbs={[{ label: "Inicio", href: "/" }, { label: "Blog", href: "/blog/" }, { label: "5 factores clave en la web de un taller mecánico" }]} />

        <header className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="bg-primary-100 text-primary-700 text-xs font-medium px-2.5 py-0.5 rounded-full">Diseño Web · Talleres Mecánicos</span>
            <time className="text-sm text-gray-400" dateTime="2026-09-06">6 de septiembre de 2026</time>
          </div>
          <h1 className="text-4xl font-bold text-primary-600 mb-4 leading-tight">
            5 factores clave a tener en cuenta en la web de un taller mecánico
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            El sector de los talleres arrastra una desconfianza histórica sobre presupuestos y facturas. La web de un taller mecánico tiene la oportunidad de revertir eso desde el primer segundo — o de reforzarla si no cumple lo básico.
          </p>
          <Image
            src="/og-5-factores-web-talleres-mecanicos.jpg"
            alt="5 factores clave en la web de un taller mecánico"
            width={1200}
            height={630}
            className="w-full rounded-2xl mt-6"
            priority
          />
        </header>

        <div className="text-gray-700 space-y-6 leading-relaxed">
          <p>
            Entre la obligación de presupuesto por escrito, la garantía legal de la reparación y la desconfianza que arrastra el sector sobre precios, la web de un taller mecánico tiene que demostrar cumplimiento y transparencia antes de pedir la confianza del cliente. Estos son los cinco factores que determinan si esa web capta clientes o los pierde.
          </p>

          <DemoPreviewBanner demo={DEMO_BY_ID.taller} />

          <h2 className="text-2xl font-bold text-primary-600">1. Hoja de reclamaciones: obligatoria y visible, también en la web</h2>
          <p>
            Todo taller de reparación de vehículos está obligado a disponer de hojas de reclamaciones, en formato físico o, desde 2023, mediante código QR. Aunque la obligación nace en el local físico, reflejar esta información en la web —junto a los datos legales del taller— es una señal de cumplimiento normativo que un cliente que compara varios talleres valora antes de decidir.
          </p>

          <h2 className="text-2xl font-bold text-primary-600">2. Presupuesto previo por escrito: obligación legal, no cortesía</h2>
          <p>
            El artículo 12 del Real Decreto 1457/1986 obliga al taller a entregar un presupuesto previo, gratuito y detallado —con el coste de piezas, mano de obra y plazo estimado— antes de iniciar cualquier reparación, con una validez mínima de 12 días hábiles. Una web que permite solicitar ese presupuesto online, sin necesidad de acercarse al taller, convierte una obligación legal en una ventaja competitiva.
          </p>

          <div className="bg-primary-50 rounded-xl p-6 border border-primary-100">
            <p className="font-semibold text-primary-700 mb-2">¿Tu web deja claro cómo pedir presupuesto y qué garantía ofreces?</p>
            <p className="text-gray-600 text-sm mb-4">Revisamos tu web, tu ficha de Google y tu proceso de presupuesto, y te decimos exactamente qué falta para captar clientes sin fricción.</p>
            <Link href="/auditoria-digital/" className="inline-block bg-accent-500 text-white px-6 py-2.5 rounded-full font-semibold text-sm hover:bg-accent-600 transition-colors">
              Solicitar revisión gratuita
            </Link>
          </div>

          <h2 className="text-2xl font-bold text-primary-600">3. Solicitud de cita o presupuesto online, sin llamar</h2>
          <p>
            Buena parte de las decisiones sobre dónde llevar el coche ocurren fuera del horario en que alguien puede atender el teléfono del taller — tras una avería nocturna, o planeando la ITV del fin de semana. Un formulario de solicitud de cita o presupuesto integrado en la web capta a ese cliente en el momento exacto en que decide, sin depender de que alguien conteste la llamada.
          </p>

          <OfferBannerWebSeo />

          <h2 className="text-2xl font-bold text-primary-600">4. Garantía de reparación clara y visible</h2>
          <p>
            El RD 1457/1986, modificado por el RD 542/2020, fija la garantía de una reparación en 3 meses o 2.000 kilómetros para vehículos particulares, y en 15 días o 2.000 kilómetros para vehículos industriales. Explicar esta garantía con claridad en la web —en lugar de dejarla como una letra pequeña que el cliente descubre solo si reclama— es una de las señales de confianza más efectivas del sector.
          </p>

          <h2 className="text-2xl font-bold text-primary-600">5. Transparencia de precios de mano de obra y catálogo de servicios</h2>
          <p>
            La opacidad en precios es la queja más repetida sobre los talleres. Publicar un catálogo claro de servicios habituales —cambio de aceite, ITV, frenos, neumáticos— con precios orientativos o rangos, reduce las llamadas de clientes que solo comparan precio y transmite exactamente el tipo de transparencia que compensa la desconfianza histórica del sector.
          </p>

          <section className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center py-2">
            <div className="md:col-span-2">
              <h2 className="text-2xl font-bold text-primary-600 mb-3">Tu web trabaja aunque el taller esté a tope de elevadores</h2>
              <p className="text-gray-700 leading-relaxed">
                Mientras reparas vehículos o cierras el taller al final del día, tu web sigue abierta. Alguien que busca taller tras una avería nocturna o antes de la ITV encuentra tu ficha, ve la garantía y el proceso de presupuesto claros, y solicita cita — sin que tengas que estar disponible para atenderlo en ese momento.
              </p>
            </div>
            <div className="md:col-span-1">
              <Image
                src="/imagen-web-trabaja-para-el-autonomo.webp"
                alt="Diagrama de un ciclo de 24 horas mostrando cómo la web de un taller mecánico sigue captando clientes mientras el taller está cerrado o a tope de trabajo"
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
            <h2 className="text-2xl font-bold mb-3">¿Tu taller necesita una web que cumpla y que capte clientes?</h2>
            <p className="text-primary-200 mb-6">
              Diseñamos webs de talleres mecánicos con presupuesto y cita online, garantía de reparación clara y ficha de Google optimizada.
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

          <h2 className="text-2xl font-bold text-primary-600">Preguntas frecuentes sobre la web de un taller mecánico</h2>
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
      <RelatedArticles currentSlug="5-factores-web-talleres-mecanicos" />
    </>
  );
}
