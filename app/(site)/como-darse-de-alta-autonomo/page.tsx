import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { RelatedArticles } from "@/components/RelatedArticles";
import { BlogBanner } from "@/components/BlogBanner";

export const metadata: Metadata = {
  title: "Cómo darse de alta como autónomo en 2026: pasos, costes y errores a evitar",
  description:
    "Guía completa para darse de alta como autónomo en 2026. Pasos en Hacienda y Seguridad Social, cuota, errores frecuentes y qué necesitas tener listo.",
  alternates: { canonical: "https://www.mktweb360.com/como-darse-de-alta-autonomo/" },
  openGraph: {
    title: "Cómo darse de alta como autónomo en 2026: pasos, costes y errores a evitar | Mkt Web 360",
    description: "Guía completa para darse de alta como autónomo en 2026. Pasos en Hacienda y Seguridad Social, cuota, errores frecuentes y qué necesitas tener listo.",
    url: "https://www.mktweb360.com/como-darse-de-alta-autonomo/",
    type: "article",
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "Cómo darse de alta como autónomo en 2026: pasos, costes y errores a evitar",
  description: "Guía completa para darse de alta como autónomo en 2026. Pasos en Hacienda y Seguridad Social, cuota, errores frecuentes y qué necesitas tener listo.",
  author: { "@type": "Organization", name: "Mkt Web 360 SLU" },
  publisher: { "@type": "Organization", name: "Mkt Web 360 SLU", url: "https://www.mktweb360.com" },
  datePublished: "2026-06-12",
  url: "https://www.mktweb360.com/como-darse-de-alta-autonomo/",
  mainEntityOfPage: "https://www.mktweb360.com/como-darse-de-alta-autonomo/",
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Inicio", item: "https://www.mktweb360.com/" },
    { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.mktweb360.com/blog/" },
    { "@type": "ListItem", position: 3, name: "Cómo darse de alta como autónomo", item: "https://www.mktweb360.com/como-darse-de-alta-autonomo/" },
  ],
};

const FAQS = [
  {
    q: "¿Qué es antes, el alta en Hacienda o en la Seguridad Social?",
    a: "Primero el alta en Hacienda (Modelo 036 o 037) y después el alta en el RETA. Tienes 30 días desde el alta en Hacienda para inscribirte en la Seguridad Social.",
  },
  {
    q: "¿Cuánto se paga de autónomo al mes en 2026?",
    a: "Depende de los ingresos reales. Con el sistema de cotización por tramos, la cuota puede ir desde unos 200 € para ingresos bajos hasta más de 500 € para ingresos altos. Existe una cuota reducida para nuevos autónomos.",
  },
  {
    q: "¿Puedo darme de alta online?",
    a: "Sí. Tanto el alta en Hacienda como en la Seguridad Social pueden tramitarse online con certificado digital, DNI electrónico o Cl@ve PIN.",
  },
  {
    q: "¿Qué es el epígrafe del IAE?",
    a: "Es el código que clasifica tu actividad económica. Elegir el correcto es importante porque determina algunas obligaciones fiscales. En caso de duda, es recomendable consultar con un asesor.",
  },
  {
    q: "¿Es obligatorio tener web como autónomo?",
    a: "No es obligatorio legalmente, pero es altamente recomendable. Una web profesional mejora la credibilidad, facilita que te encuentren y reduce la dependencia del boca a boca.",
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

export default function DarseDeAltaAutonomoPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <article className="max-w-3xl mx-auto px-4 py-12">
        <Breadcrumbs crumbs={[{ label: "Inicio", href: "/" }, { label: "Blog", href: "/blog/" }, { label: "Cómo darse de alta como autónomo" }]} />

        <header className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="bg-primary-100 text-primary-700 text-xs font-medium px-2.5 py-0.5 rounded-full">Autónomos</span>
            <time className="text-sm text-gray-400" dateTime="2026-06-12">12 de junio de 2026</time>
          </div>
          <h1 className="text-4xl font-bold text-primary-600 mb-4 leading-tight">
            Cómo darse de alta como autónomo en 2026: pasos, costes y errores a evitar
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Empezar a trabajar por cuenta propia implica cumplir con dos obligaciones antes de emitir la primera factura: el alta en Hacienda y el alta en la Seguridad Social. Este artículo te explica el proceso completo sin tecnicismos.
          </p>
        </header>

        <div className="text-gray-700 space-y-6 leading-relaxed">
          <p>
            Muchos autónomos cometen errores en los primeros pasos — no por descuido, sino por falta de información clara. Saber el orden correcto, qué documentación necesitas y qué decisiones afectan a tu cuota mensual puede ahorrarte tiempo, dinero y problemas desde el primer día.
          </p>

          <h2 className="text-2xl font-bold text-primary-600">Qué significa darse de alta como autónomo</h2>
          <p>Darse de alta como autónomo implica registrarse como trabajador por cuenta propia ante dos organismos: la Agencia Tributaria (Hacienda) y la Tesorería General de la Seguridad Social (TGSS). Ambos trámites son obligatorios antes de comenzar a ejercer cualquier actividad económica de forma habitual. Hacerlo en el orden correcto y con la información adecuada evita sanciones y problemas desde el primer día.</p>

          <h2 className="text-2xl font-bold text-primary-600">Paso 1 — Alta en Hacienda (Modelo 036 o 037)</h2>
          <p>El primer paso es darse de alta en el Censo de Empresarios, Profesionales y Retenedores de la Agencia Tributaria. Para la mayoría de autónomos, el Modelo 037 (versión simplificada) es suficiente. En él debes indicar tu actividad (epígrafe del IAE), si vas a aplicar IVA o estás exento, si tributarás en estimación directa simplificada o módulos, y la fecha de inicio de actividad. Este trámite es gratuito y puede hacerse online con certificado digital o Cl@ve PIN.</p>

          <h2 className="text-2xl font-bold text-primary-600">Paso 2 — Alta en la Seguridad Social (RETA)</h2>
          <p>Una vez dado de alta en Hacienda, tienes 30 días naturales para inscribirte en el Régimen Especial de Trabajadores Autónomos. Aquí eliges tu base de cotización, que determinará tu cuota mensual y tus prestaciones futuras. Desde 2023 existe el sistema de cotización por ingresos reales, que permite ajustar la base según lo que realmente ganes cada mes. La cuota mínima en 2026 para ingresos bajos puede beneficiarse de la tarifa plana o cuota reducida durante los primeros meses.</p>

          <BlogBanner variant="default" />

          <h2 className="text-2xl font-bold text-primary-600">Errores más frecuentes al darse de alta</h2>
          <p>Los errores más habituales son darse de alta en Seguridad Social antes que en Hacienda, elegir un epígrafe IAE que no corresponde a la actividad real, no calcular bien la base de cotización desde el inicio, y no revisar si la actividad tiene obligaciones específicas de IVA o retenciones. También es frecuente no tener claro el régimen de estimación más conveniente antes de empezar.</p>

          <div className="bg-primary-50 rounded-xl p-6 border border-primary-100">
            <p className="font-semibold text-primary-700 mb-2">¿Estás empezando como autónomo y necesitas presencia digital?</p>
            <p className="text-gray-600 text-sm mb-4">Te ayudamos a construir una base digital profesional desde el primer día: web, SEO local y visibilidad online para que tus primeros clientes te encuentren.</p>
            <Link href="/diseno-de-paginas-web/" className="inline-block bg-accent-500 text-white px-6 py-2.5 rounded-full font-semibold text-sm hover:bg-accent-600 transition-colors">
              Ver opciones para autónomos
            </Link>
          </div>

          <h2 className="text-2xl font-bold text-primary-600">Qué necesitas tener preparado antes de empezar</h2>
          <p>Antes de iniciar los trámites conviene tener claro el tipo de actividad que vas a desarrollar, si tendrás clientes con IVA o exentos, una estimación razonable de tus ingresos para elegir bien la base de cotización, y si vas a necesitar algún permiso o licencia adicional según tu sector. Contar con asesoramiento desde el principio puede ahorrarte tiempo y evitar correcciones costosas después.</p>

          <h2 className="text-2xl font-bold text-primary-600">Presencia digital desde el primer día</h2>
          <p>Darse de alta es el paso legal. Pero para que el negocio funcione, también necesitas una presencia digital mínima que te permita ser encontrado, transmitir confianza y facilitar el contacto. Una web sencilla, una ficha de Google bien trabajada y un perfil profesional coherente son la base digital de cualquier autónomo que quiera crecer con orden.</p>

          <p className="text-sm text-gray-500">
            Ver también: <Link href="/como-puede-un-autonomo-conseguir-clientes-por-internet/" className="text-accent-500 hover:underline">Cómo puede un autónomo conseguir clientes por internet</Link> · <Link href="/errores-digitales-negocio-nuevo/" className="text-accent-500 hover:underline">Errores digitales al montar un negocio desde cero</Link>
          </p>

          <div className="bg-primary-600 text-white rounded-2xl p-8 my-2 text-center">
            <h2 className="text-2xl font-bold mb-3">Empieza con buen pie tu actividad como autónomo</h2>
            <p className="text-primary-200 mb-6">
              Si acabas de darte de alta o estás a punto de hacerlo, podemos ayudarte a construir una presencia digital que acompañe tu negocio desde el inicio.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contacto/" className="bg-accent-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-accent-600 transition-colors">
                Solicitar información
              </Link>
              <Link href="/diseno-de-paginas-web/" className="border-2 border-white text-white px-6 py-3 rounded-full font-semibold hover:bg-white/10 transition-colors">
                Ver servicio de diseño web
              </Link>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-primary-600">Preguntas frecuentes sobre el alta de autónomo</h2>
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
            Servicio relacionado: <Link href="/diseno-de-paginas-web/" className="text-accent-500 hover:underline">Diseño Web para Autónomos</Link> · <Link href="/seo-posicionamiento-web-organico/" className="text-accent-500 hover:underline">SEO Posicionamiento Web</Link>
          </p>
        </div>

        <nav className="mt-12 pt-8 border-t border-gray-200">
          <Link href="/blog/" className="text-accent-500 hover:text-accent-600 font-medium text-sm">← Volver al blog</Link>
        </nav>
      </article>
      <RelatedArticles currentSlug="como-darse-de-alta-autonomo" />
    </>
  );
}
