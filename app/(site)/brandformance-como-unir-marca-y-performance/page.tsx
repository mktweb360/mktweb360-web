import Image from "next/image";
import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { RelatedArticles } from "@/components/RelatedArticles";
import { BlogBanner } from "@/components/BlogBanner";
import { alternatesFor } from "@/lib/i18n/routes";

const SLUG = "brandformance-como-unir-marca-y-performance";
const URL_CANONICAL = `https://www.mktweb360.com/${SLUG}/`;

export const metadata: Metadata = {
  title: "Brandformance: cómo unir marca y performance para crecer mejor",
  description:
    "El brandformance combina branding y performance marketing en una sola estrategia. Descubre por qué separarlos es un error y cómo unirlos multiplica tus resultados.",
  alternates: alternatesFor(`/${SLUG}/`) ?? { canonical: URL_CANONICAL },
  openGraph: {
    title: "Brandformance: cómo unir marca y performance | Mkt Web 360",
    description:
      "El brandformance combina branding y performance marketing en una sola estrategia. Descubre por qué separarlos es un error.",
    url: URL_CANONICAL,
    type: "article",
    images: [{ url: `/og-${SLUG}.jpg`, width: 1200, height: 630 }],
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "Brandformance: cómo unir marca y performance para crecer mejor",
  description:
    "El brandformance combina branding y performance marketing en una sola estrategia coherente que reduce el CPL y aumenta el LTV.",
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
    { "@type": "ListItem", position: 3, name: "Brandformance", item: URL_CANONICAL },
  ],
};

const FAQS = [
  {
    q: "¿El brandformance es solo para grandes marcas con mucho presupuesto?",
    a: "No. El concepto aplica a cualquier empresa que invierta en marketing, aunque tenga presupuesto limitado. Una PYME puede empezar alineando su propuesta de valor y su mensaje en sus campañas de Google Ads o redes sociales. La escala es diferente, el principio es el mismo.",
  },
  {
    q: "¿Cómo mido el impacto del branding en el performance si no tengo atribución directa?",
    a: "Con métricas proxy: búsquedas de marca en Google (Search Console), tráfico directo y branded, calidad de leads, y tasa de conversión a lo largo del tiempo. El brandformance se mide en tendencias y en LTV, no en último clic.",
  },
  {
    q: "¿Por dónde empieza una PYME que quiere aplicar brandformance?",
    a: "Primero, define con claridad qué promete tu marca y a quién. Segundo, asegúrate de que tus campañas de pago transmiten esa misma promesa, no solo el precio. Tercero, mide por canal el coste de adquisición y el LTV — verás el efecto de la coherencia en semanas.",
  },
  {
    q: "¿Cuánto tiempo tarda en verse el resultado del brandformance?",
    a: "Los efectos de performance son inmediatos (CPL, conversiones). Los efectos de marca tardan entre 3 y 12 meses en ser estadísticamente visibles. La combinación empieza a mostrar el diferencial — menor CPL, mayor LTV — generalmente entre 6 y 9 meses.",
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

export default function BrandformancePage() {
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
            { label: "Brandformance" },
          ]}
        />

        <header className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="bg-primary-100 text-primary-700 text-xs font-medium px-2.5 py-0.5 rounded-full">
              Estrategia Digital
            </span>
            <time className="text-sm text-gray-400" dateTime="2026-08-04">
              4 de agosto de 2026
            </time>
          </div>
          <h1 className="text-4xl font-bold text-primary-600 mb-4 leading-tight">
            Brandformance: cómo unir marca y performance para crecer mejor
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Las empresas que separan "inversión en marca" de "inversión en resultados" están cometiendo un error estratégico costoso. El brandformance no es una tendencia — es la corrección a una separación artificial que llevamos décadas pagando.
          </p>
          <Image
            src={`/og-${SLUG}.jpg`}
            alt="Brandformance: cómo unir marca y performance para crecer mejor"
            width={1200}
            height={630}
            className="w-full rounded-2xl mt-6"
            priority
          />
        </header>

        <div className="text-gray-700 space-y-6 leading-relaxed">
          <p>
            Durante décadas, el marketing digital se organizó en dos mundos paralelos: el equipo de branding construía la marca a largo plazo con creatividad y storytelling, y el equipo de performance optimizaba conversiones con datos y automatización. Parecía lógico. El problema es que el cliente no funciona así — y el presupuesto tampoco.
          </p>

          <h2 className="text-2xl font-bold text-primary-600">Qué es el brandformance y por qué importa ahora</h2>
          <p>
            El brandformance es la integración estratégica de branding y performance marketing en una sola lógica de negocio. No se trata de mezclar creatividad con datos por estética — se trata de reconocer que la marca fortalece el performance y los datos del performance mejoran la marca en un ciclo que se retroalimenta.
          </p>
          <p>
            Una empresa que construye marca sólida reduce su coste por lead con el tiempo, porque los usuarios que la conocen convierten a mayor tasa. Una empresa que solo optimiza conversiones sin construir marca verá cómo su CPL sube progresivamente a medida que agota los segmentos de alta intención. Esto está documentado en los estudios de Les Binet y Peter Field sobre efectividad publicitaria en cientos de marcas a lo largo de décadas.
          </p>

          <div className="bg-primary-50 rounded-xl p-6 border border-primary-100">
            <p className="font-semibold text-primary-700 mb-2">¿Quieres una estrategia que combine marca y resultados?</p>
            <p className="text-gray-600 text-sm mb-4">
              En Mkt Web 360 diseñamos estrategias que alinean propuesta de valor, comunicación y captación en una sola dirección. Sin silos, sin mensajes contradictorios.
            </p>
            <Link
              href="/auditoria-digital/"
              className="inline-block bg-accent-500 text-white px-6 py-2.5 rounded-full font-semibold text-sm hover:bg-accent-600 transition-colors"
            >
              Solicitar diagnóstico gratuito
            </Link>
          </div>

          <h2 className="text-2xl font-bold text-primary-600">Cómo la marca fortalece el performance</h2>
          <p>
            Cuando un usuario ya conoce tu marca, todo el embudo de conversión funciona mejor. Tu CTR en Google Ads es más alto porque reconoce tu nombre en los resultados. Tu tasa de apertura en email marketing mejora porque confía en el remitente. Tu tasa de cierre en ventas es mayor porque ya has reducido la fricción de lo desconocido.
          </p>
          <p>
            Los efectos son concretos y medibles: menor CPL (coste por lead), mayor CVR (tasa de conversión) y mayor LTV (valor de vida del cliente). Las empresas con marca fuerte también sufren menos en las guerras de precio, porque parte de sus clientes elige por valor percibido, no solo por precio.
          </p>

          <h2 className="text-2xl font-bold text-primary-600">Cómo los datos de performance mejoran la marca</h2>
          <p>
            Los datos de performance son el feedback más preciso que puede recibir una estrategia de marca. Si un mensaje en tus anuncios convierte tres veces más que otro, eso no es solo una señal de paid media — es información sobre qué parte de tu propuesta de valor resuena mejor con tu audiencia real.
          </p>
          <p>
            Las marcas más inteligentes usan este feedback para ajustar su narrativa, su posicionamiento y su comunicación editorial. Lo que Google Ads o Meta te dicen sobre qué funciona en conversión es exactamente lo que deberías estar comunicando en todos los touchpoints de marca.
          </p>

          <BlogBanner variant="geo" />

          <h2 className="text-2xl font-bold text-primary-600">El error de separar los presupuestos</h2>
          <p>
            El síntoma más común del enfoque erróneo es tener dos líneas presupuestarias separadas — "branding" y "performance" — con equipos distintos, KPIs distintos y estrategias que a menudo se contradicen. El anuncio de Google Ads promete precio bajo, y la campaña de redes sociales promete valores premium. Sin coherencia, el usuario no sabe en qué creer y la marca pierde efectividad en ambos frentes.
          </p>
          <p>
            La corrección no es fusionar equipos ni presupuestos mecánicamente. Es asegurarse de que ambos trabajen desde la misma propuesta de valor, con mensajes coherentes adaptados al contexto de cada canal, y con métricas que midan tanto el corto como el largo plazo.
          </p>

          <h2 className="text-2xl font-bold text-primary-600">Brandformance en la práctica para PYMEs</h2>
          <p>
            Para una PYME, la implementación práctica empieza con claridad estratégica: ¿cuál es tu propuesta de valor diferencial y para quién? Una vez definido, ese mensaje debe aparecer en tus campañas de pago, en tu SEO, en tu contenido editorial, en tu firma de email y en las respuestas que das en las reseñas de Google.
          </p>
          <p>
            Pequeñas decisiones de coherencia — usar el mismo tono, los mismos argumentos clave, el mismo posicionamiento en todos los canales — acumulan un efecto de marca que ningún presupuesto de branding separado podría comprar a menor coste. Y los datos de conversión te dicen en tiempo real qué parte del mensaje está funcionando.
          </p>

          <div className="bg-primary-600 text-white rounded-2xl p-8 my-2 text-center">
            <h2 className="text-2xl font-bold mb-3">Estrategia que construye y convierte a la vez</h2>
            <p className="text-primary-200 mb-6">
              Si quieres revisar si tu estrategia actual separa innecesariamente marca y resultados, podemos analizarlo juntos en una sesión de diagnóstico.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/auditoria-digital/"
                className="bg-accent-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-accent-600 transition-colors"
              >
                Solicitar diagnóstico gratuito
              </Link>
              <Link
                href="/marketing-de-contenidos/"
                className="border-2 border-white text-white px-6 py-3 rounded-full font-semibold hover:bg-white/10 transition-colors"
              >
                Ver servicio de contenidos
              </Link>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-primary-600">Preguntas frecuentes sobre brandformance</h2>
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
            <Link href="/marketing-de-contenidos/" className="text-accent-500 hover:underline">
              Marketing de contenidos
            </Link>{" "}
            ·{" "}
            <Link href="/auditoria-digital/" className="text-accent-500 hover:underline">
              Auditoría digital
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
