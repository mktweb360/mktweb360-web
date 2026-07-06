import Image from "next/image";
import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { RelatedArticles } from "@/components/RelatedArticles";
import { BlogBanner } from "@/components/BlogBanner";

export const metadata: Metadata = {
  title: "Cómo digitalizar tu negocio sin complicarte la vida: guía práctica para pymes 2026",
  description:
    "Digitalizar un negocio no significa comprar software caro. Descubre qué pasos dar primero, qué herramientas tienen sentido y cómo hacerlo con orden.",
  alternates: { canonical: "https://www.mktweb360.com/como-digitalizar-tu-negocio/" },
  openGraph: {
    title: "Cómo digitalizar tu negocio sin complicarte la vida: guía práctica para pymes 2026 | Mkt Web 360",
    description: "Digitalizar un negocio no significa comprar software caro. Descubre qué pasos dar primero, qué herramientas tienen sentido y cómo hacerlo con orden.",
    url: "https://www.mktweb360.com/como-digitalizar-tu-negocio/",
    type: "article",
    images: [{ url: "/og-como-digitalizar-tu-negocio.jpg", width: 1200, height: 630 }],
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "Cómo digitalizar tu negocio sin complicarte la vida: guía práctica para pymes 2026",
  description: "Digitalizar un negocio no significa comprar software caro. Descubre qué pasos dar primero, qué herramientas tienen sentido y cómo hacerlo con orden.",
  author: { "@type": "Organization", name: "Mkt Web 360 SLU" },
  publisher: { "@type": "Organization", name: "Mkt Web 360 SLU", url: "https://www.mktweb360.com" },
  datePublished: "2026-06-12",
  url: "https://www.mktweb360.com/como-digitalizar-tu-negocio/",
  mainEntityOfPage: "https://www.mktweb360.com/como-digitalizar-tu-negocio/",
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Inicio", item: "https://www.mktweb360.com/" },
    { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.mktweb360.com/blog/" },
    { "@type": "ListItem", position: 3, name: "Cómo digitalizar tu negocio", item: "https://www.mktweb360.com/como-digitalizar-tu-negocio/" },
  ],
};

const FAQS = [
  {
    q: "¿Por dónde empiezo a digitalizar mi negocio?",
    a: "Por lo que más impacto tiene en tus clientes o en tu gestión interna. Normalmente es la presencia digital (web + Google) o la facturación. Empieza por lo que te duele más no tener bien resuelto.",
  },
  {
    q: "¿Qué significa exactamente digitalizar un negocio?",
    a: "Básicamente trasladar a herramientas digitales los procesos que ahora son manuales, en papel o dispersos. Puede ser desde facturar con software hasta gestionar pedidos online o tener una presencia web que funcione.",
  },
  {
    q: "¿El Kit Digital puede ayudarme a digitalizar mi negocio?",
    a: "Sí. El programa Kit Digital ofrece subvenciones para que pymes y autónomos contraten soluciones digitales homologadas. Es una buena forma de digitalizar algunos aspectos sin coste o con coste reducido.",
  },
  {
    q: "¿Cuánto tiempo lleva digitalizar una pyme?",
    a: "Depende de la complejidad y de qué aspectos quieres digitalizar. Algunos cambios como una web funcional o Google Business Profile pueden resolverse en días. Otros como integrar CRM o sistemas de gestión pueden llevar semanas o meses.",
  },
  {
    q: "¿Digitalizar el negocio es lo mismo que tener redes sociales?",
    a: "No. Tener redes sociales es una parte muy pequeña de la digitalización. Digitalizar implica gestión, procesos, comunicación con clientes, ventas online, facturación, análisis de datos — todo el funcionamiento del negocio.",
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

export default function DigitalizarNegocioPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <article className="max-w-3xl mx-auto px-4 py-12">
        <Breadcrumbs crumbs={[{ label: "Inicio", href: "/" }, { label: "Blog", href: "/blog/" }, { label: "Cómo digitalizar tu negocio" }]} />

        <header className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="bg-primary-100 text-primary-700 text-xs font-medium px-2.5 py-0.5 rounded-full">Pymes</span>
            <time className="text-sm text-gray-400" dateTime="2026-06-12">12 de junio de 2026</time>
          </div>
          <h1 className="text-4xl font-bold text-primary-600 mb-4 leading-tight">
            Cómo digitalizar tu negocio sin complicarte la vida: guía práctica para pymes en 2026
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Digitalizar no es comprar software caro ni contratar a alguien para que gestione tus redes sociales. Es resolver con herramientas digitales los problemas reales de tu negocio — en el orden que tiene sentido para ti.
          </p>
          <Image
            src="/og-como-digitalizar-tu-negocio.jpg"
            alt="Cómo digitalizar tu negocio sin complicarte la vida: guía práctica para pymes 2026"
            width={1200}
            height={630}
            className="w-full rounded-2xl mt-6"
            priority
          />
        </header>

        <div className="text-gray-700 space-y-6 leading-relaxed">
          <p>
            La palabra "digitalización" asusta a muchos empresarios. Suena grande, costosa y complicada. Pero en la práctica, digitalizar un negocio es un proceso gradual que empieza por resolver lo que más frena o lo que más oportunidades tiene, y continúa desde ahí con criterio.
          </p>

          <h2 className="text-2xl font-bold text-primary-600">Qué significa realmente digitalizar un negocio</h2>
          <p>Digitalizar un negocio significa trasladar procesos, comunicaciones, ventas y gestión a herramientas digitales que los hacen más eficientes, escalables y medibles. No es sinónimo de tener redes sociales activas ni de comprar un CRM caro. Es una transformación progresiva que empieza por los puntos de mayor impacto y se va ampliando a medida que el negocio está preparado para absorber los cambios.</p>

          <h2 className="text-2xl font-bold text-primary-600">Por dónde empezar: los pilares fundamentales</h2>
          <p>La presencia digital es casi siempre el primer paso. Una web que funciona bien, una ficha de Google actualizada y una forma clara de contacto son la base desde la que todo lo demás se construye. Después viene la gestión: facturación digital, agenda de clientes, comunicación por email o mensajería. Y después los canales de captación: publicidad, contenidos o redes sociales según el sector. Hacerlo en ese orden evita construir sobre arena.</p>

          <h2 className="text-2xl font-bold text-primary-600">Qué herramientas tienen sentido para una pyme</h2>
          <p>Las herramientas deben resolver problemas concretos, no añadir complejidad. Para la presencia web, un sitio bien hecho con SEO básico. Para la gestión, un software de facturación adaptado al tamaño del negocio. Para la comunicación, una herramienta de email que permita automatizar comunicaciones básicas. Para la captación, Google Ads o SEO según el objetivo. No hay que implementar todo a la vez — hay que implementar lo que resuelve el problema actual.</p>

          <div className="bg-primary-50 rounded-xl p-6 border border-primary-100">
            <p className="font-semibold text-primary-700 mb-2">¿Quieres saber por dónde empezar en tu caso?</p>
            <p className="text-gray-600 text-sm mb-4">Te ayudamos a identificar las áreas de mayor impacto digital para tu negocio concreto. Sin prescribir soluciones genéricas — con diagnóstico real primero.</p>
            <Link href="/auditoria-digital/" className="inline-block bg-accent-500 text-white px-6 py-2.5 rounded-full font-semibold text-sm hover:bg-accent-600 transition-colors">
              Solicitar diagnóstico gratuito
            </Link>
          </div>

          <BlogBanner variant="default" />

          <h2 className="text-2xl font-bold text-primary-600">Errores habituales en la digitalización de pymes</h2>
          <p>Digitalizar sin objetivos claros, comprar software antes de entender qué problema resuelve, delegar todo a un proveedor sin implicación interna y creer que digitalizar es solo tener presencia en redes son los errores más frecuentes. También lo es hacer todo a la vez — la sobrecarga de cambios simultáneos hace que nada se consolide bien. La digitalización exitosa es gradual, ordenada y medida.</p>

          <h2 className="text-2xl font-bold text-primary-600">El Kit Digital como acelerador</h2>
          <p>El programa Kit Digital ofrece subvenciones para que pymes y autónomos contraten soluciones digitales homologadas — desde diseño web hasta CRM, pasando por presencia en redes o comercio electrónico. Es una herramienta útil para digitalizar algunos aspectos con coste reducido o cero, siempre que se elija el agente digitalizador y la solución adecuados para el negocio concreto.</p>

          <p className="text-sm text-gray-500">
            Ver también: <Link href="/errores-digitales-negocio-nuevo/" className="text-accent-500 hover:underline">Errores digitales al montar un negocio desde cero</Link> · <Link href="/que-revisar-antes-de-invertir-mas-en-marketing-digital/" className="text-accent-500 hover:underline">Qué revisar antes de invertir más en marketing digital</Link>
          </p>

          <div className="bg-primary-600 text-white rounded-2xl p-8 my-2 text-center">
            <h2 className="text-2xl font-bold mb-3">Digitaliza tu negocio con un plan real</h2>
            <p className="text-primary-200 mb-6">
              Ayudamos a pymes a entender qué pasos digitales tienen sentido en su situación actual y a ejecutarlos con orden, sin inversiones innecesarias.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contacto/" className="bg-accent-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-accent-600 transition-colors">
                Hablar con un especialista
              </Link>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-primary-600">Preguntas frecuentes sobre digitalización de negocios</h2>
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
            Servicio relacionado: <Link href="/auditoria-digital/" className="text-accent-500 hover:underline">Auditoría Digital</Link>
          </p>
        </div>

        <nav className="mt-12 pt-8 border-t border-gray-200">
          <Link href="/blog/" className="text-accent-500 hover:text-accent-600 font-medium text-sm">← Volver al blog</Link>
        </nav>
      </article>
      <RelatedArticles currentSlug="como-digitalizar-tu-negocio" />
    </>
  );
}
