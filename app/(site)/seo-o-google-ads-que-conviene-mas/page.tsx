import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";

import { RelatedArticles } from "@/components/RelatedArticles";
import { BlogBanner } from "@/components/BlogBanner";

export const metadata: Metadata = {
  title: "SEO o Google Ads: qué conviene más para tu negocio en 2025",
  description:
    "Descubre si te conviene más invertir en SEO, Google Ads o una combinación de ambos según tu negocio, presupuesto y urgencia.",
  alternates: { canonical: "https://www.mktweb360.com/seo-o-google-ads-que-conviene-mas/" },
  openGraph: {
    title: "SEO o Google Ads: qué conviene más para tu negocio en 2025 | Mkt Web 360",
    description: "Descubre si te conviene más invertir en SEO, Google Ads o una combinación de ambos según tu negocio, presupuesto y urgencia.",
    url: "https://www.mktweb360.com/seo-o-google-ads-que-conviene-mas/",
    type: "article",
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "SEO o Google Ads: qué conviene más según tu negocio, presupuesto y urgencia",
  description: "Descubre si te conviene más invertir en SEO, Google Ads o una combinación de ambos según tu negocio, presupuesto y urgencia.",
  author: { "@type": "Organization", name: "Mkt Web 360 SLU" },
  publisher: { "@type": "Organization", name: "Mkt Web 360 SLU", url: "https://www.mktweb360.com" },
  datePublished: "2025-03-17",
  url: "https://www.mktweb360.com/seo-o-google-ads-que-conviene-mas/",
  mainEntityOfPage: "https://www.mktweb360.com/seo-o-google-ads-que-conviene-mas/",
};

const FAQS = [
  {
    q: "¿Qué da resultados más rápidos, SEO o Google Ads?",
    a: "Google Ads suele generar visibilidad antes. El SEO necesita más tiempo pero puede construir una base más estable y duradera.",
  },
  {
    q: "¿Tiene sentido hacer SEO y Ads a la vez?",
    a: "Sí, en muchos casos es la mejor combinación: Ads activa la captación mientras el SEO consolida un activo propio a medio plazo.",
  },
  {
    q: "¿Cuánto tarda el SEO en dar resultados?",
    a: "Los primeros movimientos de posiciones suelen verse entre 2 y 4 meses. Para resultados consolidados, entre 6 y 12 meses dependiendo de la competencia del sector y el estado inicial de la web. El SEO es una inversión a largo plazo con retorno creciente.",
  },
  {
    q: "¿Puedo hacer SEO y Ads a la vez?",
    a: "Sí, y en muchos casos es la estrategia más inteligente. Ads cubre la captación inmediata mientras el SEO va construyendo posicionamiento orgánico. Con el tiempo, puedes reducir la inversión en Ads a medida que el tráfico orgánico crece.",
  },
  {
    q: "¿Qué necesito tener antes de invertir en captación?",
    a: "Antes de invertir en SEO o Ads, necesitas una web que convierta, propuesta de valor clara, seguimiento de conversiones configurado y un proceso comercial para gestionar los contactos. Sin esta base, cualquier inversión en captación amplifica resultados pobres.",
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

export default function SeoOGoogleAdsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <article className="max-w-3xl mx-auto px-4 py-12">
        <Breadcrumbs crumbs={[{ label: "Inicio", href: "/" }, { label: "Blog", href: "/blog/" }, { label: "SEO o Google Ads: qué conviene más" }]} />

        <header className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="bg-primary-100 text-primary-700 text-xs font-medium px-2.5 py-0.5 rounded-full">SEO · SEM</span>
            <time className="text-sm text-gray-400" dateTime="2025-03-17">17 de marzo de 2025</time>
          </div>
          <h1 className="text-4xl font-bold text-primary-600 mb-4 leading-tight">
            SEO o Google Ads: qué conviene más según tu negocio, presupuesto y urgencia
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Ambos son canales de Google, pero funcionan de forma muy distinta en tiempo, coste e intención. Elegir mal no significa que no funcione — significa que funciona peor de lo que podría.
          </p>
        </header>

        <div className="text-gray-700 space-y-6 leading-relaxed">
          <p>
            El SEO y Google Ads no son excluyentes ni equivalentes. El SEO construye presencia orgánica a largo plazo: tarda meses en dar resultados pero, una vez consolidado, genera tráfico sin coste por clic. Google Ads da visibilidad inmediata pero exige inversión continua — cuando paras de pagar, dejas de aparecer.
          </p>
          <p>
            La decisión correcta depende de tres factores: urgencia de resultados, presupuesto disponible y estado actual de tu web. Un negocio que acaba de lanzar y necesita clientes ya no puede esperar meses al SEO. Uno con presencia consolidada y poco presupuesto de publicidad debería priorizar el orgánico.
          </p>

          <h2 className="text-2xl font-bold text-primary-600">Qué aporta el SEO</h2>
          <p>El SEO ayuda a captar búsquedas con intención real, mejorar la arquitectura y convertir la web en un activo más estable. Suele tener mucho sentido cuando el negocio puede trabajar a medio plazo, quiere reducir dependencia de publicidad y dispone de servicios bien definidos. Su principal limitación es que exige constancia y no suele ser la vía más rápida para generar resultados inmediatos.</p>
          <ul className="space-y-2">
            {["Capta demanda orgánica sostenida", "Mejora estructura, contenidos y autoridad temática", "Tiene potencial alto en servicios, SEO local y ecommerce"].map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-gray-700 py-1">
                <span className="text-accent-500 font-bold shrink-0 mt-0.5">▸</span>
                {item}
              </li>
            ))}
          </ul>

          <h2 className="text-2xl font-bold text-primary-600">Qué aporta Google Ads</h2>
          <p>Google Ads permite aparecer desde el inicio para búsquedas concretas y acelerar la captación si la oferta está clara, la landing convierte y la medición es fiable. Funciona especialmente bien cuando el negocio necesita validar demanda, generar tracción a corto plazo o empujar servicios concretos con intención clara. Su límite es que, si la base falla, el presupuesto se degrada rápido.</p>
          <ul className="space-y-2">
            {["Visibilidad inmediata", "Control sobre mensajes y segmentación", "Útil para testar oferta y captar a corto plazo"].map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-gray-700 py-1">
                <span className="text-accent-500 font-bold shrink-0 mt-0.5">▸</span>
                {item}
              </li>
            ))}
          </ul>

          <div className="bg-primary-50 rounded-xl p-6 border border-primary-100">
            <p className="font-semibold text-primary-700 mb-2">¿No tienes claro si te conviene más SEO, Ads o una combinación?</p>
            <p className="text-gray-600 text-sm mb-4">Analizamos tu situación y te ayudamos a decidir qué canal tiene más sentido según tu negocio, presupuesto y urgencia.</p>
            <Link href="/contacto/" className="inline-block bg-accent-500 text-white px-6 py-2.5 rounded-full font-semibold text-sm hover:bg-accent-600 transition-colors">
              Solicitar revisión de captación
            </Link>
          </div>

          <h2 className="text-2xl font-bold text-primary-600">Cuándo conviene uno, el otro o ambos</h2>
          <p>El SEO suele encajar mejor cuando el negocio quiere construir base, puede trabajar con horizonte de meses y dispone de intención de búsqueda relevante. Google Ads suele encajar mejor cuando hay urgencia, oferta clara y capacidad de medir y responder rápido. En muchos casos, la mejor respuesta es combinarlos: Ads para activar y aprender antes; SEO para consolidar un activo propio y mejorar rentabilidad futura.</p>

          <BlogBanner variant="seo" />

          <h2 className="text-2xl font-bold text-primary-600">Cómo decidir con criterio</h2>
          <p>Antes de invertir, conviene revisar la web, la propuesta de valor, la calidad del seguimiento comercial, el margen y el coste por oportunidad útil. No sirve de mucho activar campañas si la landing no convence, ni exigir resultados inmediatos al SEO si el negocio no puede sostener el plazo de maduración. La decisión buena no sale de modas ni de opiniones generales; sale de negocio, contexto y preparación real.</p>

          <p className="text-sm text-gray-500">
            Ver también: <Link href="/que-revisar-antes-de-invertir-mas-en-marketing-digital/" className="text-accent-500 hover:underline">Qué revisar antes de invertir más en marketing digital</Link> · <Link href="/seo-local-empresas-servicios/" className="text-accent-500 hover:underline">SEO local para empresas de servicios</Link>
          </p>

          <div className="bg-primary-600 text-white rounded-2xl p-8 my-2 text-center">
            <h2 className="text-2xl font-bold mb-3">Elige mejor tu inversión antes de activar más acciones</h2>
            <p className="text-primary-200 mb-6">
              Una decisión equivocada entre SEO y Ads puede suponer meses de inversión con resultados pobres. Te ayudamos a elegir bien desde el principio.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contacto/" className="bg-accent-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-accent-600 transition-colors">
                Solicitar diagnóstico de captación
              </Link>
              <Link href="/seo-posicionamiento-web-organico/" className="border-2 border-white text-white px-6 py-3 rounded-full font-semibold hover:bg-white/10 transition-colors">
                Ver servicio SEO
              </Link>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-primary-600">Preguntas frecuentes sobre SEO y Google Ads</h2>
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
            Servicios relacionados: <Link href="/seo-posicionamiento-web-organico/" className="text-accent-500 hover:underline">SEO Posicionamiento</Link> · <Link href="/sem-publicidad-ppc/" className="text-accent-500 hover:underline">SEM / Google Ads</Link>
          </p>
        </div>

        <nav className="mt-12 pt-8 border-t border-gray-200">
          <Link href="/blog/" className="text-accent-500 hover:text-accent-600 font-medium text-sm">← Volver al blog</Link>
        </nav>
      </article>
      <RelatedArticles currentSlug="seo-o-google-ads-que-conviene-mas" />
    </>
  );
}
