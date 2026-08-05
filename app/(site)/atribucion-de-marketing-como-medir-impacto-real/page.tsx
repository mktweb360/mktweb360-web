import Image from "next/image";
import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { RelatedArticles } from "@/components/RelatedArticles";
import { BlogBanner } from "@/components/BlogBanner";
import { alternatesFor } from "@/lib/i18n/routes";

const SLUG = "atribucion-de-marketing-como-medir-impacto-real";
const URL_CANONICAL = `https://www.mktweb360.com/${SLUG}/`;

export const metadata: Metadata = {
  title: "Atribución de marketing: cómo medir el impacto real en un mundo multi-canal",
  description:
    "El modelo de último clic distorsiona la realidad de cómo tus clientes te encuentran. Guía práctica de modelos de atribución para PYMEs: qué son, cuál usar y cómo aproximar la atribución sin herramientas enterprise.",
  alternates: alternatesFor(`/${SLUG}/`) ?? { canonical: URL_CANONICAL },
  openGraph: {
    title: "Atribución de marketing: cómo medir el impacto real | Mkt Web 360",
    description:
      "Guía práctica de modelos de atribución para PYMEs. Qué son, cuál usar y cómo medir el verdadero impacto de tu marketing.",
    url: URL_CANONICAL,
    type: "article",
    images: [{ url: `/og-${SLUG}.jpg`, width: 1200, height: 630 }],
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "Atribución de marketing: cómo medir el impacto real en un mundo multi-canal",
  description: "Guía práctica de modelos de atribución para PYMEs en un mundo multi-canal post-cookies.",
  author: { "@type": "Organization", name: "Mkt Web 360 SLU" },
  publisher: { "@type": "Organization", name: "Mkt Web 360 SLU", url: "https://www.mktweb360.com" },
  datePublished: "2026-08-04",
  url: URL_CANONICAL,
  mainEntityOfPage: URL_CANONICAL,
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Inicio", item: "https://www.mktweb360.com/" },
    { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.mktweb360.com/blog/" },
    { "@type": "ListItem", position: 3, name: "Atribución de marketing", item: URL_CANONICAL },
  ],
};

const FAQS = [
  {
    q: "¿Qué modelo de atribución es el mejor para una PYME?",
    a: "No existe el modelo perfecto para todos. Si eres una PYME con ciclo de venta corto y pocos canales, el modelo basado en datos de GA4 es el más preciso si tienes suficiente volumen de conversiones. Si tienes poco tráfico, el lineal o el de decaimiento temporal son más honestos que el último clic. Lo importante es elegir uno, entender sus limitaciones y ser consistente al comparar periodos.",
  },
  {
    q: "¿Cómo afecta el fin de las cookies de terceros a la atribución?",
    a: "Lo complica. La atribución entre sesiones, entre dispositivos y entre canales se vuelve más opaca sin cookies de terceros. Las soluciones incluyen: modelado de conversiones (Google lo hace automáticamente en GA4 y Google Ads cuando hay gaps de datos), Enhanced Conversions de Google, y Conversions API de Meta. Para PYMEs, la recomendación es asegurarse de tener bien configurado el tracking de primera parte y confiar en tendencias, no en atribuciones exactas.",
  },
  {
    q: "¿Qué diferencia hay entre GA4 y Google Ads en la atribución?",
    a: "GA4 y Google Ads pueden mostrar números distintos porque miden cosas distintas. GA4 atribuye la sesión completa según el modelo configurado en la propiedad. Google Ads atribuye conversiones dentro de su ventana de atribución (por defecto 30 días para clicks). Si ves discrepancias, no significa que algo esté roto — significa que estás mirando el mismo hecho desde dos perspectivas distintas.",
  },
  {
    q: "¿Cómo mide el impacto del offline (llamadas, eventos, visitas) en mi atribución?",
    a: "Con importación de conversiones offline en Google Ads, encuestas post-compra ('¿cómo nos conociste?'), UTM en materiales offline (QR codes en eventos, folletos) y análisis de incremento de tráfico de marca correlacionado con acciones offline. Ningún sistema es perfecto, pero una combinación de estas técnicas da una imagen razonablemente completa.",
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

export default function AtribucionPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <article className="max-w-3xl mx-auto px-4 py-12">
        <Breadcrumbs
          crumbs={[
            { label: "Inicio", href: "/" },
            { label: "Blog", href: "/blog/" },
            { label: "Atribución de marketing" },
          ]}
        />

        <header className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="bg-primary-100 text-primary-700 text-xs font-medium px-2.5 py-0.5 rounded-full">
              Marketing Digital
            </span>
            <time className="text-sm text-gray-400" dateTime="2026-08-04">
              4 de agosto de 2026
            </time>
          </div>
          <h1 className="text-4xl font-bold text-primary-600 mb-4 leading-tight">
            Atribución de marketing: cómo medir el impacto real en un mundo multi-canal
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            El modelo de "último clic" asigna toda la venta al último anuncio que vio el cliente. Pero el cliente llevaba semanas viendo tus contenidos, leyendo tus artículos y siguiendo tus redes. Si mides solo el último clic, estás tomando decisiones de presupuesto sobre información incompleta.
          </p>
          <Image
            src={`/og-${SLUG}.jpg`}
            alt="Atribución de marketing: cómo medir el impacto real"
            width={1200}
            height={630}
            className="w-full rounded-2xl mt-6"
            priority
          />
        </header>

        <div className="text-gray-700 space-y-6 leading-relaxed">
          <p>
            La atribución de marketing es el proceso de determinar qué canales, campañas o touchpoints contribuyeron a que un usuario tomara una decisión de compra o contacto. Parece sencillo hasta que consideras que el cliente promedio de B2B tiene entre 7 y 12 puntos de contacto antes de convertir, y que esos puntos ocurren en diferentes dispositivos, canales y momentos.
          </p>

          <h2 className="text-2xl font-bold text-primary-600">Por qué el último clic distorsiona la realidad</h2>
          <p>
            El modelo de último clic — el más común porque es el default de muchas herramientas — asigna el 100% del mérito de la conversión al último canal por el que llegó el usuario antes de comprar. Esto lleva sistemáticamente a sobrevalorar los canales de fondo de embudo (Google Ads de búsqueda directa, remarketing) y a infravalorar los canales de construcción de demanda (contenidos, redes sociales, SEO informacional).
          </p>
          <p>
            El resultado práctico es que las empresas que miden en último clic tienden a recortar presupuesto de los canales que menos convierten directamente — y con ello dejan de alimentar el embudo por arriba. Los leads bajan meses después, cuando el daño ya está hecho.
          </p>

          <div className="bg-primary-50 rounded-xl p-6 border border-primary-100">
            <p className="font-semibold text-primary-700 mb-2">¿Mides bien el impacto de tu marketing?</p>
            <p className="text-gray-600 text-sm mb-4">
              En Mkt Web 360 configuramos analítica y atribución adaptada a PYMEs — con GA4, Google Ads y las herramientas que realmente necesitas, sin sobreingeniería.
            </p>
            <Link
              href="/analitica-web/"
              className="inline-block bg-accent-500 text-white px-6 py-2.5 rounded-full font-semibold text-sm hover:bg-accent-600 transition-colors"
            >
              Ver servicio de analítica
            </Link>
          </div>

          <h2 className="text-2xl font-bold text-primary-600">Los modelos de atribución principales</h2>
          <p>
            El modelo de <strong>primer clic</strong> asigna todo el mérito al primer touchpoint — útil para entender cómo te descubren, pero ignora el proceso de maduración. El modelo <strong>lineal</strong> distribuye el mérito por igual entre todos los touchpoints — honesto pero poco matizado. El modelo de <strong>decaimiento temporal</strong> da más peso a los touchpoints más cercanos a la conversión — más realista para ciclos de venta cortos.
          </p>
          <p>
            El modelo <strong>basado en posición</strong> (40-20-40) da más peso al primer y último touchpoint — bueno para valorar tanto el descubrimiento como el cierre. Y el modelo <strong>basado en datos</strong> de GA4 y Google Ads usa machine learning para distribuir el crédito según el impacto estadístico real de cada touchpoint — el más preciso, pero requiere suficiente volumen de conversiones para ser fiable.
          </p>

          <h2 className="text-2xl font-bold text-primary-600">El mundo cookieless y su impacto en la atribución</h2>
          <p>
            iOS14+ de Apple, la eliminación progresiva de cookies de terceros en Chrome y las restricciones de privacidad en Europa han reducido significativamente la visibilidad cross-channel. Google Ads ya no puede rastrear el 20-30% de las conversiones que antes rastreaba con cookies. Meta tiene un problema similar.
          </p>
          <p>
            La respuesta técnica son las Conversions API (CAPI) de Meta y Enhanced Conversions de Google, que envían datos de conversión desde el servidor — sin depender de cookies del navegador. Para una PYME, implementar estas API correctamente es una de las mejoras de atribución con mayor impacto a corto plazo.
          </p>

          <BlogBanner variant="geo" />

          <h2 className="text-2xl font-bold text-primary-600">Cómo aproximar la atribución sin herramientas enterprise</h2>
          <p>
            Las herramientas enterprise de atribución multi-touch (Northbeam, Triple Whale, Rockerbox) cuestan miles de euros al mes y están diseñadas para ecommerce con altos volúmenes. Para una PYME, el enfoque pragmático combina: GA4 con modelo de atribución basado en datos, Google Ads con Enhanced Conversions, la pregunta "¿cómo nos conociste?" en el formulario de contacto, y análisis periódico de qué canales generan tráfico de marca.
          </p>
          <p>
            Este stack cubre el 80% de las necesidades de atribución de la mayoría de PYMEs y tiene un coste de implementación asumible. La clave es configurarlo bien desde el principio — los datos mal recogidos no se pueden recuperar retroactivamente.
          </p>

          <div className="bg-primary-600 text-white rounded-2xl p-8 my-2 text-center">
            <h2 className="text-2xl font-bold mb-3">Analítica que informa, no que confunde</h2>
            <p className="text-primary-200 mb-6">
              Si quieres configurar un sistema de medición que te diga de verdad qué está funcionando en tu marketing, podemos ayudarte.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/analitica-web/"
                className="bg-accent-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-accent-600 transition-colors"
              >
                Ver servicio de analítica
              </Link>
              <Link
                href="/auditoria-digital/"
                className="border-2 border-white text-white px-6 py-3 rounded-full font-semibold hover:bg-white/10 transition-colors"
              >
                Solicitar diagnóstico gratuito
              </Link>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-primary-600">Preguntas frecuentes sobre atribución de marketing</h2>
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
            Ver también:{" "}
            <Link href="/analitica-web/" className="text-accent-500 hover:underline">
              Analítica web
            </Link>{" "}
            ·{" "}
            <Link href="/sem-publicidad-ppc/" className="text-accent-500 hover:underline">
              Google Ads
            </Link>
          </p>
        </div>

        <nav className="mt-12 pt-8 border-t border-gray-200">
          <Link href="/blog/" className="text-accent-500 hover:text-accent-600 font-medium text-sm">
            ← Volver al blog
          </Link>
        </nav>
      </article>
      <RelatedArticles currentSlug={SLUG} />
    </>
  );
}
