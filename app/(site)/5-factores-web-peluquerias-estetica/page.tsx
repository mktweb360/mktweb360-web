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
  title: "5 factores clave en la web de una peluquería o centro de estética (2026)",
  description:
    "Cualificación profesional visible, la reforma del RD 1277/2003 sobre tratamientos con finalidad sanitaria y registro sanitario: los 5 factores que determinan si la web de tu peluquería o centro de estética capta clientes o pierde su confianza.",
  alternates: alternatesFor("/5-factores-web-peluquerias-estetica/") ?? { canonical: "https://www.mktweb360.com/5-factores-web-peluquerias-estetica/" },
  openGraph: {
    title: "5 factores clave en la web de una peluquería o centro de estética | Mkt Web 360",
    description: "Cualificación profesional, registro sanitario y reserva online: los 5 factores que determinan si tu web de peluquería o centro de estética capta clientes.",
    url: "https://www.mktweb360.com/5-factores-web-peluquerias-estetica/",
    type: "article",
    images: [{ url: "/og-5-factores-web-peluquerias-estetica.jpg", width: 1200, height: 630 }],
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "5 factores clave en la web de una peluquería o centro de estética",
  description:
    "Los 5 factores que determinan si la web de una peluquería o centro de estética capta clientes: cualificación profesional visible, cumplimiento de la reforma del RD 1277/2003, reserva online, registro sanitario y ficha de Google Business Profile.",
  author: { "@type": "Organization", name: "Mkt Web 360 SLU" },
  publisher: { "@type": "Organization", name: "Mkt Web 360 SLU", url: "https://www.mktweb360.com" },
  datePublished: "2026-09-06",
  url: "https://www.mktweb360.com/5-factores-web-peluquerias-estetica/",
  mainEntityOfPage: "https://www.mktweb360.com/5-factores-web-peluquerias-estetica/",
};

const FAQS = [
  {
    q: "¿Desde cuándo exige la ley que los tratamientos con finalidad sanitaria los realice personal titulado?",
    a: "La modificación del Real Decreto 1277/2003 entra en vigor el 1 de julio de 2026 y exige que los centros cuenten con profesionales sanitarios con titulación oficial para los tratamientos que tengan esa finalidad, reforzando la lucha contra el intrusismo profesional.",
  },
  {
    q: "¿Qué titulación conviene mostrar en la web para dar confianza?",
    a: "La formación reglada de referencia es el Técnico en Estética y Belleza (Grado Medio) o el Grado Superior en Estética Integral, según el Real Decreto 256/2022, además del Certificado de Profesionalidad de Nivel 3 en los servicios que corresponda.",
  },
  {
    q: "¿Es obligatorio registrar el centro en Sanidad?",
    a: "Sí — abrir una peluquería o centro de estética exige, además de la Declaración Responsable de actividad en el ayuntamiento, el registro en la consejería de Sanidad de la comunidad autónoma correspondiente.",
  },
  {
    q: "¿Vale la pena permitir reservar cita desde la web?",
    a: "Sí — capta reservas fuera del horario de atención, que es cuando buena parte de los clientes decide qué tratamiento quiere y en qué centro reservarlo.",
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

export default function FactoresWebPeluqueriasEsteticaPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <article className="max-w-3xl mx-auto px-4 py-12">
        <Breadcrumbs crumbs={[{ label: "Inicio", href: "/" }, { label: "Blog", href: "/blog/" }, { label: "5 factores clave en la web de una peluquería o centro de estética" }]} />

        <header className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="bg-primary-100 text-primary-700 text-xs font-medium px-2.5 py-0.5 rounded-full">Diseño Web · Peluquerías y Estética</span>
            <time className="text-sm text-gray-400" dateTime="2026-09-06">6 de septiembre de 2026</time>
          </div>
          <h1 className="text-4xl font-bold text-primary-600 mb-4 leading-tight">
            5 factores clave a tener en cuenta en la web de una peluquería o centro de estética
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            El sector de la estética se enfrenta a una reforma normativa que entra en vigor en 2026 y a una desconfianza creciente sobre el intrusismo profesional. La web de una peluquería o centro de estética puede ser la diferencia entre transmitir garantías o generar dudas.
          </p>
          <Image
            src="/og-5-factores-web-peluquerias-estetica.jpg"
            alt="5 factores clave en la web de una peluquería o centro de estética"
            width={1200}
            height={630}
            className="w-full rounded-2xl mt-6"
            priority
          />
        </header>

        <div className="text-gray-700 space-y-6 leading-relaxed">
          <p>
            Entre la reforma normativa sobre tratamientos con finalidad sanitaria, el registro sanitario obligatorio y la desconfianza creciente sobre el intrusismo profesional, la web de una peluquería o centro de estética tiene que demostrar cualificación real antes de pedir la confianza del cliente. Estos son los cinco factores que determinan si esa web capta clientes o los pierde.
          </p>

          <DemoPreviewBanner demo={DEMO_BY_ID.estetica} />

          <h2 className="text-2xl font-bold text-primary-600">1. Cualificación profesional visible</h2>
          <p>
            La formación reglada de referencia en el sector es el Técnico en Estética y Belleza (Grado Medio) o el Grado Superior en Estética Integral, según el Real Decreto 256/2022, junto con el Certificado de Profesionalidad de Nivel 3 en los servicios que corresponda. Mostrar esta cualificación con claridad en la web —no solo en el local— combate el intrusismo del sector y es exactamente lo que un cliente exigente busca antes de reservar un tratamiento.
          </p>

          <h2 className="text-2xl font-bold text-primary-600">2. La reforma del RD 1277/2003 sobre tratamientos con finalidad sanitaria</h2>
          <p>
            La modificación del Real Decreto 1277/2003, que entra en vigor el 1 de julio de 2026, exige que los centros cuenten con profesionales sanitarios con titulación oficial para los tratamientos que tengan una finalidad sanitaria. Dejar claro en la web qué tratamientos requieren esa supervisión —y quién la ofrece en el centro— no es solo cumplimiento normativo: es la garantía que diferencia un centro serio de uno que opera en el límite de la legalidad.
          </p>

          <div className="bg-primary-50 rounded-xl p-6 border border-primary-100">
            <p className="font-semibold text-primary-700 mb-2">¿Tu web deja claro qué tratamientos requieren supervisión sanitaria?</p>
            <p className="text-gray-600 text-sm mb-4">Revisamos tu web, tu ficha de Google y tu proceso de reserva, y te decimos exactamente qué falta para captar clientes con las garantías al día.</p>
            <Link href="/auditoria-digital/" className="inline-block bg-accent-500 text-white px-6 py-2.5 rounded-full font-semibold text-sm hover:bg-accent-600 transition-colors">
              Solicitar revisión gratuita
            </Link>
          </div>

          <h2 className="text-2xl font-bold text-primary-600">3. Reserva online de citas, sin llamar</h2>
          <p>
            Buena parte de las decisiones sobre qué tratamiento reservar y en qué centro ocurren fuera del horario de atención — por la noche, viendo fotos de otros trabajos, o un domingo planeando la semana. Un sistema de reserva integrado en la web capta a ese cliente en el momento exacto en que decide, sin depender de que alguien conteste el teléfono.
          </p>

          <OfferBannerWebSeo />

          <h2 className="text-2xl font-bold text-primary-600">4. Registro sanitario y licencia de actividad visibles</h2>
          <p>
            Abrir una peluquería o centro de estética exige la Declaración Responsable de actividad en el ayuntamiento y el registro en la consejería de Sanidad de la comunidad autónoma correspondiente. Reflejar que el centro cumple estos trámites —igual que se refleja la cualificación del personal— refuerza la percepción de un negocio serio frente a la competencia informal del sector.
          </p>

          <h2 className="text-2xl font-bold text-primary-600">5. Ficha de Google Business Profile y reseñas con fotos reales</h2>
          <p>
            Para este sector, las fotos del trabajo realizado —con el consentimiento del cliente— y las reseñas activas pesan tanto o más que el diseño de la propia web en la decisión final. Una ficha de Google cuidada, con horario actualizado y gestión activa de reseñas, suele ser la primera parada antes incluso de visitar la web.
          </p>

          <section className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center py-2">
            <div className="md:col-span-2">
              <h2 className="text-2xl font-bold text-primary-600 mb-3">Tu web trabaja aunque el centro esté a tope de citas</h2>
              <p className="text-gray-700 leading-relaxed">
                Mientras atiendes citas o cierras el centro al final del día, tu web sigue abierta. Alguien que busca centro de estética un domingo por la noche encuentra tu ficha, ve la cualificación del equipo y reserva — sin que tengas que estar disponible para atenderlo en ese momento.
              </p>
            </div>
            <div className="md:col-span-1">
              <Image
                src="/imagen-web-trabaja-para-el-autonomo.webp"
                alt="Diagrama de un ciclo de 24 horas mostrando cómo la web de una peluquería o centro de estética sigue captando clientes mientras el centro está cerrado o a tope de citas"
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
            <h2 className="text-2xl font-bold mb-3">¿Tu peluquería o centro de estética necesita una web que cumpla y que capte clientes?</h2>
            <p className="text-primary-200 mb-6">
              Diseñamos webs de peluquerías y centros de estética con cualificación profesional visible, reserva online y ficha de Google optimizada.
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

          <h2 className="text-2xl font-bold text-primary-600">Preguntas frecuentes sobre la web de una peluquería o centro de estética</h2>
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
      <RelatedArticles currentSlug="5-factores-web-peluquerias-estetica" />
    </>
  );
}
