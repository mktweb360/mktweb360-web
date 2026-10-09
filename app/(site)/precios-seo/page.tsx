import Link from "next/link";
import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ContactForm } from "@/components/ContactForm";
import { RelatedArticles } from "@/components/RelatedArticles";
import { alternatesFor } from "@/lib/i18n/routes";

const URL = "https://www.mktweb360.com/precios-seo/";

export const metadata: Metadata = {
  title: "Precios SEO: cuánto cuesta el posicionamiento",
  description:
    "Precios SEO claros: SEO + GEO + Google Business Profile por 349 €/mes + IVA sin permanencia, web + 6 meses de SEO por 999 € + IVA y consultoría a medida.",
  alternates: alternatesFor("/precios-seo/") ?? { canonical: URL },
  openGraph: {
    title: "Precios SEO: cuánto cuesta el posicionamiento | Mkt Web 360",
    description: "Tarifas SEO publicadas, qué incluye cada una y qué hace variar el precio de un proyecto de posicionamiento.",
    url: URL,
    images: [{ url: "/og-seo.jpg", width: 1200, height: 630, alt: "Precios SEO — Mkt Web 360" }],
  },
};

const PLANS = [
  {
    name: "SEO + GEO + Google Business Profile",
    price: "349 €/mes + IVA",
    note: "Sin permanencia",
    href: "/oferta-seo-geo-gbp/",
    cta: "Ver la oferta completa",
    items: [
      "SEO: auditoría técnica, palabras clave, correcciones e informe mensual",
      "GEO: seguimiento mensual de 10 preguntas en 4 asistentes de IA, contenido citable, datos estructurados y llms.txt",
      "Google Business Profile: 1 ficha optimizada, 2 publicaciones al mes y respuesta a hasta 15 reseñas al mes",
      "5 contenidos al mes",
      "Para webs de hasta 30 páginas en un idioma",
    ],
  },
  {
    name: "Web profesional + 6 meses de SEO",
    price: "999 € + IVA",
    note: "Pago único",
    href: "/oferta-web-seo-organico/",
    cta: "Ver qué incluye",
    items: [
      "Diseño y desarrollo de la web profesional",
      "6 meses de posicionamiento SEO",
      "Hosting, dominio, correo corporativo y páginas legales",
      "Soporte incluido",
      "Solo la web, sin SEO: desde 249 € + IVA",
    ],
  },
  {
    name: "Consultoría SEO",
    price: "Presupuesto a medida",
    note: "Según alcance",
    href: "/consultor-seo/",
    cta: "Ver la consultoría",
    items: [
      "Auditoría técnica y de contenidos",
      "Estrategia de keywords y arquitectura por servicio",
      "Plan de acción priorizado por impacto y plazo",
      "Acompañamiento durante la ejecución",
      "Para webs grandes, tiendas, varios idiomas o equipos propios",
    ],
  },
];

const FACTORS = [
  { t: "Tamaño y estado de la web", d: "No cuesta lo mismo posicionar una web de 10 páginas bien construida que una tienda con miles de productos, errores técnicos acumulados o varios idiomas." },
  { t: "Competencia de las búsquedas", d: "Las búsquedas donde compiten marcas con mucha autoridad exigen más contenido, más tiempo y más trabajo de reputación que las de un nicho o una zona concreta." },
  { t: "Alcance geográfico", d: "Una estrategia local, centrada en Google Maps y la ficha de empresa, tiene un alcance distinto de una estrategia nacional o internacional." },
  { t: "Volumen de contenidos", d: "Cuántas páginas nuevas o mejoradas se producen cada mes es uno de los factores que más influye en el coste mensual." },
  { t: "Quién ejecuta", d: "Si tu equipo o tu desarrollador aplican los cambios, basta con consultoría; si lo hacemos todo nosotros, el servicio incluye la ejecución." },
  { t: "Canales adicionales", d: "La visibilidad en asistentes de IA (GEO) y la ficha de Google Business Profile se pueden sumar al SEO; en nuestro paquete mensual ya van incluidas." },
];

const FAQS = [
  { q: "¿Cuánto cuesta el SEO al mes?", a: "Nuestro servicio mensual de SEO + GEO + Google Business Profile cuesta 349 €/mes + IVA, sin permanencia, para webs de hasta 30 páginas en un idioma y con 5 contenidos al mes. Para webs más grandes, tiendas con mucho catálogo, varios idiomas o varias fichas preparamos un presupuesto a medida." },
  { q: "¿Hay permanencia?", a: "No. El servicio mensual no tiene permanencia. Lo habitual es valorar los resultados con datos de Search Console a los pocos meses, porque el SEO necesita tiempo para reflejarse en las posiciones." },
  { q: "¿Por qué hay presupuestos SEO tan distintos en el mercado?", a: "Porque se comparan cosas distintas: un informe automático, una consultoría sin ejecución o un servicio con contenidos, cambios técnicos y seguimiento mensual. Antes de comparar precios, compara qué incluye cada propuesta, cuántos contenidos al mes, quién ejecuta y cómo se mide." },
  { q: "¿Garantizáis posiciones por ese precio?", a: "No. Nadie puede garantizar posiciones en Google. Lo que incluye el precio es el trabajo descrito, con informes mensuales y métricas que te permiten comprobar la evolución." },
  { q: "¿El precio incluye link building?", a: "No. El paquete mensual no incluye compra de enlaces. Si tu proyecto lo necesita, lo planteamos aparte, con presupuesto y criterios de calidad explícitos." },
  { q: "¿Los precios incluyen IVA?", a: "No. Todos los precios de esta página se indican sin IVA." },
];

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Posicionamiento SEO",
  provider: { "@id": "https://www.mktweb360.com/#organization" },
  areaServed: { "@type": "Country", name: "España" },
  url: URL,
  offers: [
    { "@type": "Offer", name: "SEO + GEO + Google Business Profile", url: "https://www.mktweb360.com/oferta-seo-geo-gbp/", priceSpecification: { "@type": "UnitPriceSpecification", price: 349, priceCurrency: "EUR", unitCode: "MON", valueAddedTaxIncluded: false } },
    { "@type": "Offer", name: "Web profesional + 6 meses de SEO", url: "https://www.mktweb360.com/oferta-web-seo-organico/", priceSpecification: { "@type": "PriceSpecification", price: 999, priceCurrency: "EUR", valueAddedTaxIncluded: false } },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
};

export default function PreciosSeoPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <section className="bg-gradient-to-br from-primary-700 to-primary-900 text-white">
        <div className="max-w-5xl mx-auto px-4 py-16">
          <Breadcrumbs crumbs={[{ label: "Inicio", href: "/" }, { label: "SEO", href: "/seo-posicionamiento-web-organico/" }, { label: "Precios SEO" }]} />
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight mt-4">
            Precios SEO: cuánto cuesta<br />
            <span className="text-accent-400">posicionar tu web en Google</span>
          </h1>
          <p className="text-xl text-primary-200 leading-relaxed max-w-3xl">
            Publicamos nuestras tarifas y lo que incluye cada una. Sin letra pequeña: precio, límites del servicio y qué queda fuera, para que puedas comparar con criterio.
          </p>
        </div>
      </section>

      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-primary-600 mb-10 text-center">Nuestras tarifas SEO</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {PLANS.map((p) => (
              <div key={p.name} className="bg-white rounded-2xl border border-gray-100 shadow-sm p-7 flex flex-col">
                <h3 className="font-bold text-primary-700 text-lg mb-2">{p.name}</h3>
                <p className="text-3xl font-bold text-accent-500">{p.price}</p>
                <p className="text-sm text-gray-500 mb-5">{p.note}</p>
                <ul className="space-y-2 text-sm text-gray-600 mb-6 flex-1">
                  {p.items.map((i) => (
                    <li key={i} className="flex gap-2"><span className="text-accent-500 font-bold shrink-0">✓</span>{i}</li>
                  ))}
                </ul>
                <Link href={p.href} className="text-center bg-primary-600 text-white rounded-full px-6 py-3 font-semibold hover:bg-primary-700 transition-colors">{p.cta}</Link>
              </div>
            ))}
          </div>
          <p className="text-sm text-gray-500 mt-6 text-center">Precios sin IVA. El paquete mensual no incluye rediseño o desarrollo web, link building, fotografía o vídeo ni publicidad de pago.</p>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-primary-600 mb-4 text-center">Qué hace variar el precio del SEO</h2>
          <p className="text-gray-600 text-center max-w-3xl mx-auto mb-10">
            El precio de un proyecto SEO depende sobre todo del trabajo real que hay que hacer cada mes. Estos son los factores que más pesan cuando preparamos un presupuesto a medida.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {FACTORS.map((f) => (
              <div key={f.t} className="p-6 bg-white border border-gray-100 rounded-2xl shadow-sm">
                <h3 className="font-bold text-primary-700 mb-2">{f.t}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{f.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-primary-50 border-y border-primary-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-primary-600 mb-4">Cómo comparar presupuestos SEO</h2>
          <div className="space-y-4 text-gray-600 leading-relaxed">
            <p>Dos presupuestos con el mismo precio pueden incluir trabajos muy distintos. Antes de decidir, pide que cada propuesta detalle cuántos contenidos se producen al mes, qué cambios técnicos se aplican y quién los aplica, cómo se mide el avance y con qué fuente de datos.</p>
            <p>Desconfía de las garantías de posición, de los informes sin acceso a tus propias herramientas (Search Console y Google Analytics deben estar a tu nombre) y de los paquetes de enlaces a precio cerrado sin explicar dónde se publican.</p>
            <p>Si quieres una referencia más amplia de costes de marketing digital, consulta <Link href="/cuanto-cuesta-agencia-marketing-digital-espana-2026/" className="text-accent-700 underline underline-offset-2">cuánto cuesta una agencia de marketing digital</Link>; y si estás valorando una web nueva, <Link href="/cuanto-cuesta-pagina-web-profesional/" className="text-accent-700 underline underline-offset-2">cuánto cuesta una página web profesional</Link>.</p>
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-primary-600 mb-8 text-center">Preguntas frecuentes sobre precios SEO</h2>
          <div className="space-y-4">
            {FAQS.map((f) => (
              <details key={f.q} className="bg-white border border-gray-100 rounded-xl p-5 shadow-sm">
                <summary className="font-semibold text-primary-700 cursor-pointer">{f.q}</summary>
                <p className="text-gray-600 mt-3 leading-relaxed">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section id="contacto" className="py-16 px-4 bg-primary-600 text-white">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold mb-4 text-center">Pide tu presupuesto SEO</h2>
          <p className="text-primary-200 mb-8 text-center">Indica tu web y tus objetivos. Te respondemos con una propuesta cerrada.</p>
          <ContactForm formType="precios-seo" />
        </div>
      </section>

      <RelatedArticles category="SEO" title="Más sobre SEO y posicionamiento" />
    </>
  );
}
