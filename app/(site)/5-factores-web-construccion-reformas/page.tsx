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
  title: "5 factores clave en la web de una empresa de construcción o reformas (2026)",
  description:
    "Presupuesto por escrito, LOE, portfolio antes/después y SEO local: los 5 factores que determinan si la web de tu empresa de reformas genera presupuestos o desconfianza.",
  alternates: alternatesFor("/5-factores-web-construccion-reformas/") ?? { canonical: "https://www.mktweb360.com/5-factores-web-construccion-reformas/" },
  openGraph: {
    title: "5 factores clave en la web de una empresa de construcción o reformas | Mkt Web 360",
    description: "Presupuesto por escrito, LOE, portfolio antes/después y SEO local: los 5 factores que determinan si tu web de reformas genera confianza.",
    url: "https://www.mktweb360.com/5-factores-web-construccion-reformas/",
    type: "article",
    images: [{ url: "/og-5-factores-web-construccion-reformas.jpg", width: 1200, height: 630 }],
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "5 factores clave en la web de una empresa de construcción o reformas",
  description:
    "Los 5 factores que determinan si la web de una empresa de reformas genera presupuestos: presupuesto por escrito, cumplimiento de la LOE, portfolio antes/después, SEO local y formulario que cualifica.",
  author: { "@type": "Organization", name: "Mkt Web 360 SLU" },
  publisher: { "@type": "Organization", name: "Mkt Web 360 SLU", url: "https://www.mktweb360.com" },
  datePublished: "2026-09-06",
  url: "https://www.mktweb360.com/5-factores-web-construccion-reformas/",
  mainEntityOfPage: "https://www.mktweb360.com/5-factores-web-construccion-reformas/",
};

const FAQS = [
  {
    q: "¿Es obligatorio dar el presupuesto por escrito?",
    a: "No hay una ley única que lo imponga como tal para cualquier reforma, pero es la práctica exigida por la normativa de consumidores para evitar reclamaciones, y es imprescindible si se quiere justificar el IVA reducido del 10% en reformas de vivienda particular.",
  },
  {
    q: "¿Cuándo se aplica el IVA del 10% en una reforma?",
    a: "Cuando el destinatario es una persona física que usa la vivienda para uso particular, la construcción original tiene más de dos años, y los materiales aportados no superan el 40% del coste total de la obra.",
  },
  {
    q: "¿Qué obras entran dentro de la LOE?",
    a: "Las que alteran la configuración arquitectónica del edificio — estructura, volumetría o distribución esencial — no las reparaciones menores de mantenimiento.",
  },
  {
    q: "¿Por qué es tan importante el antes/después en la web?",
    a: "Porque en un sector con alta desconfianza inicial, la prueba visual verificable pesa más que cualquier texto de presentación de la empresa.",
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

export default function FactoresWebConstruccionPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <article className="max-w-3xl mx-auto px-4 py-12">
        <Breadcrumbs crumbs={[{ label: "Inicio", href: "/" }, { label: "Blog", href: "/blog/" }, { label: "5 factores clave en la web de una empresa de reformas" }]} />

        <header className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="bg-primary-100 text-primary-700 text-xs font-medium px-2.5 py-0.5 rounded-full">Diseño Web · Construcción y Reformas</span>
            <time className="text-sm text-gray-400" dateTime="2026-09-06">6 de septiembre de 2026</time>
          </div>
          <h1 className="text-4xl font-bold text-primary-600 mb-4 leading-tight">
            5 factores clave a tener en cuenta en la web de una empresa de construcción o reformas
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            El sector de la reforma y la construcción arrastra un problema de confianza real — presupuestos verbales, plazos incumplidos, empresas que desaparecen a mitad de obra. La web tiene que resolver esa desconfianza antes de que el cliente descuelgue el teléfono.
          </p>
          <Image
            src="/og-5-factores-web-construccion-reformas.jpg"
            alt="5 factores clave en la web de una empresa de construcción o reformas"
            width={1200}
            height={630}
            className="w-full rounded-2xl mt-6"
            priority
          />
        </header>

        <div className="text-gray-700 space-y-6 leading-relaxed">
          <p>
            La web de una empresa seria de este sector tiene que resolver esa desconfianza antes de que el cliente descuelgue el teléfono. Estos son los cinco factores que marcan la diferencia.
          </p>

          <DemoPreviewBanner demo={DEMO_BY_ID.reformas} />

          <h2 className="text-2xl font-bold text-primary-600">1. Presupuesto por escrito, desglosado — no es solo buena práctica</h2>
          <p>
            Un presupuesto verbal o genérico es la principal fuente de conflicto del sector. Además de ser lo que espera cualquier cliente informado, un presupuesto desglosado por conceptos (materiales, mano de obra) es lo que exige la normativa fiscal para poder aplicar el IVA reducido del 10% en reformas de vivienda particular (art. 91.Uno.2 de la Ley 37/1992 del IVA), cuando la vivienda tiene más de dos años y los materiales no superan el 40% del coste total. La web debería facilitar precisamente ese primer paso: un formulario que pida los datos necesarios para generar un presupuesto real, no una estimación al aire.
          </p>

          <h2 className="text-2xl font-bold text-primary-600">2. LOE: identificar quién hace qué y con qué garantías</h2>
          <p>
            La Ley de Ordenación de la Edificación (Ley 38/1999) regula las obligaciones y responsabilidades de cada agente que interviene en una obra — promotor, proyectista, constructor, dirección de obra — y aplica a toda reforma que altere la configuración del edificio (estructura, volumetría, distribución esencial). Una web que muestra con claridad quién ejecuta la obra, qué seguro de responsabilidad civil tiene la empresa y qué garantías cubre cada tipo de intervención transmite justo la seriedad que el sector necesita para vencer la desconfianza inicial.
          </p>

          <div className="bg-primary-50 rounded-xl p-6 border border-primary-100">
            <p className="font-semibold text-primary-700 mb-2">¿Tu web genera presupuestos o desconfianza?</p>
            <p className="text-gray-600 text-sm mb-4">Revisamos tu web, tu formulario de presupuesto y tu portfolio, y te decimos exactamente qué falta para captar obras sin perder tiempo con proyectos que no encajan.</p>
            <Link href="/auditoria-digital/" className="inline-block bg-accent-500 text-white px-6 py-2.5 rounded-full font-semibold text-sm hover:bg-accent-600 transition-colors">
              Solicitar revisión gratuita
            </Link>
          </div>

          <h2 className="text-2xl font-bold text-primary-600">3. Antes/después visual — la prueba social que de verdad convence</h2>
          <p>
            En un sector donde la palabra vale poco sin evidencia, mostrar el resultado real de obras anteriores —comparativas de antes y después, fotos verificables, no renders— es el elemento que más pesa en la decisión del cliente. Un comparador interactivo (arrastrable) en la propia web permite que el visitante compruebe la calidad del trabajo sin tener que pedir referencias por teléfono.
          </p>

          <OfferBannerWebSeo />

          <h2 className="text-2xl font-bold text-primary-600">4. SEO local y zona de servicio real</h2>
          <p>
            La reforma es un servicio de proximidad — nadie contrata una empresa de reformas a 200 km. La web necesita páginas o secciones claras por zona de servicio y una ficha de Google Business Profile con el área de cobertura bien configurada, para aparecer cuando alguien busca "reformas de cocina" en su ciudad, no solo en el nombre genérico de la empresa.
          </p>

          <h2 className="text-2xl font-bold text-primary-600">5. Formulario de presupuesto que cualifica, no solo capta</h2>
          <p>
            Pedir el tipo de obra, los metros aproximados y el plazo deseado directamente en el formulario evita visitas o llamadas para proyectos que no encajan, y permite responder con un rango de precio orientativo mucho más rápido. Menos fricción para el cliente serio, menos tiempo perdido para el equipo comercial.
          </p>

          <section className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center py-2">
            <div className="md:col-span-2">
              <h2 className="text-2xl font-bold text-primary-600 mb-3">Tu web trabaja aunque estés en obra</h2>
              <p className="text-gray-700 leading-relaxed">
                Mientras estás en obra o cerrando un presupuesto en persona, tu web sigue abierta. Alguien que busca "empresa de reformas" un domingo por la noche encuentra tu portfolio de antes/después, ve tus garantías y rellena el formulario — sin que tengas que estar disponible para atenderlo en ese momento.
              </p>
            </div>
            <div className="md:col-span-1">
              <Image
                src="/imagen-web-trabaja-para-el-autonomo.webp"
                alt="Diagrama de un ciclo de 24 horas mostrando cómo la web de una empresa de reformas sigue captando presupuestos mientras el equipo está en obra"
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
            <h2 className="text-2xl font-bold mb-3">¿Tu empresa de reformas necesita una web que genere confianza?</h2>
            <p className="text-primary-200 mb-6">
              Diseñamos webs de construcción y reformas con presupuesto por escrito, portfolio antes/después y formulario que cualifica cada proyecto.
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

          <h2 className="text-2xl font-bold text-primary-600">Preguntas frecuentes sobre la web de una empresa de reformas</h2>
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
      <RelatedArticles currentSlug="5-factores-web-construccion-reformas" />
    </>
  );
}
