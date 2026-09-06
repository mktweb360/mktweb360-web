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
  title: "5 factores clave en la web de un restaurante u hotel (2026)",
  description:
    "Hoja de reclamaciones visible, alérgenos según el Reglamento UE 1169/2011, reserva online y ficha de Google: los 5 factores que determinan si la web de tu restaurante llena mesas o las pierde.",
  alternates: alternatesFor("/5-factores-web-restaurantes-hosteleria/") ?? { canonical: "https://www.mktweb360.com/5-factores-web-restaurantes-hosteleria/" },
  openGraph: {
    title: "5 factores clave en la web de un restaurante u hotel | Mkt Web 360",
    description: "Hoja de reclamaciones, alérgenos (Reglamento UE 1169/2011), reserva online y ficha de Google: los 5 factores que determinan si tu web de hostelería llena mesas.",
    url: "https://www.mktweb360.com/5-factores-web-restaurantes-hosteleria/",
    type: "article",
    images: [{ url: "/og-5-factores-web-restaurantes-hosteleria.jpg", width: 1200, height: 630 }],
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "5 factores clave en la web de un restaurante u hotel",
  description:
    "Los 5 factores que determinan si la web de un negocio de hostelería llena mesas: hoja de reclamaciones, alérgenos según el Reglamento UE 1169/2011, reserva online, ficha de Google Business Profile y carta siempre actualizada.",
  author: { "@type": "Organization", name: "Mkt Web 360 SLU" },
  publisher: { "@type": "Organization", name: "Mkt Web 360 SLU", url: "https://www.mktweb360.com" },
  datePublished: "2026-09-06",
  url: "https://www.mktweb360.com/5-factores-web-restaurantes-hosteleria/",
  mainEntityOfPage: "https://www.mktweb360.com/5-factores-web-restaurantes-hosteleria/",
};

const FAQS = [
  {
    q: "¿Es obligatorio publicar la información de alérgenos en la web, o basta con la carta física?",
    a: "La obligación del Reglamento (UE) 1169/2011 es informar de forma clara antes del pedido — si el cliente pide a través de la web o consulta la carta digital antes de ir, esa información también debe estar ahí.",
  },
  {
    q: "¿Qué sanción hay por no tener hojas de reclamaciones?",
    a: "Puede alcanzar los 15.000€ según la normativa de consumo aplicable, además de dañar la confianza del cliente en el momento del conflicto.",
  },
  {
    q: "¿Merece la pena un sistema de reserva online si ya tengo teléfono?",
    a: "Sí — capta reservas fuera de horario de atención, que es cuando una parte significativa de los clientes decide dónde va a comer o cenar.",
  },
  {
    q: "¿Cómo de rápido se nota el trabajo en la ficha de Google?",
    a: "La mejora en el Local Pack suele notarse en pocas semanas si el perfil se optimiza y se mantiene activo (fotos, horario, respuesta a reseñas).",
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

export default function FactoresWebRestaurantesPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <article className="max-w-3xl mx-auto px-4 py-12">
        <Breadcrumbs crumbs={[{ label: "Inicio", href: "/" }, { label: "Blog", href: "/blog/" }, { label: "5 factores clave en la web de un restaurante" }]} />

        <header className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="bg-primary-100 text-primary-700 text-xs font-medium px-2.5 py-0.5 rounded-full">Diseño Web · Hostelería y Turismo</span>
            <time className="text-sm text-gray-400" dateTime="2026-09-06">6 de septiembre de 2026</time>
          </div>
          <h1 className="text-4xl font-bold text-primary-600 mb-4 leading-tight">
            5 factores clave a tener en cuenta en la web de un restaurante u hotel
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            La web de un restaurante o un negocio de hostelería no compite solo con otros restaurantes — compite con Google Maps, TripAdvisor y las apps de reserva. Si no resuelve lo básico en los primeros segundos, el cliente vuelve al buscador y elige otra opción.
          </p>
          <Image
            src="/og-5-factores-web-restaurantes-hosteleria.jpg"
            alt="5 factores clave en la web de un restaurante u hotel"
            width={1200}
            height={630}
            className="w-full rounded-2xl mt-6"
            priority
          />
        </header>

        <div className="text-gray-700 space-y-6 leading-relaxed">
          <p>
            Si no resuelve lo básico —qué se puede comer, si hay alérgenos, cómo reservar— en los primeros segundos, el cliente vuelve al buscador y elige otra opción. Estos son los cinco factores que determinan si una web de hostelería convierte visitas en mesas ocupadas.
          </p>

          <DemoPreviewBanner demo={DEMO_BY_ID.restaurante} />

          <h2 className="text-2xl font-bold text-primary-600">1. Hoja de reclamaciones: obligatoria y visible, también en la web</h2>
          <p>
            Todo establecimiento de hostelería está obligado a disponer de hojas de reclamaciones y a anunciarlo mediante un cartel visible ("Existen hojas de reclamaciones a disposición del consumidor"). No tenerlas, o negarse a entregarlas cuando un cliente las pide, puede acarrear sanciones de hasta 15.000€. Aunque la obligación nace en el local físico, una web seria refleja esta información en su página legal o de contacto — es una señal de cumplimiento normativo que un negocio de confianza no esconde.
          </p>

          <h2 className="text-2xl font-bold text-primary-600">2. Alérgenos: Reglamento (UE) 1169/2011, no es opcional</h2>
          <p>
            El Reglamento (UE) 1169/2011 obliga a todo establecimiento de restauración a informar sobre la presencia de alérgenos en cada plato, de forma clara y visible, antes de que el cliente pida — en la carta física, en pizarra o en la carta digital de la web. Los alérgenos deben destacarse tipográficamente (negrita, color o subrayado) respecto al resto del texto. El incumplimiento se regula por la Ley 17/2011 de Seguridad Alimentaria y Nutrición, con sanciones que en los casos más graves llegan a los 600.000€. Publicar la carta en la web sin esta información no es solo un riesgo legal — es la primera pregunta que hace cualquier cliente con alergia antes de reservar.
          </p>

          <div className="bg-primary-50 rounded-xl p-6 border border-primary-100">
            <p className="font-semibold text-primary-700 mb-2">¿Tu carta digital cumple con el Reglamento de alérgenos?</p>
            <p className="text-gray-600 text-sm mb-4">Revisamos tu web, tu carta y tu ficha de Google, y te decimos exactamente qué falta para captar reservas sin riesgo legal.</p>
            <Link href="/auditoria-digital/" className="inline-block bg-accent-500 text-white px-6 py-2.5 rounded-full font-semibold text-sm hover:bg-accent-600 transition-colors">
              Solicitar revisión gratuita
            </Link>
          </div>

          <h2 className="text-2xl font-bold text-primary-600">3. Reserva online sin llamar</h2>
          <p>
            Buena parte de las búsquedas de restaurante ocurren fuera del horario en que alguien puede coger el teléfono — a las 22:00 decidiendo dónde cenar mañana, o un domingo planeando una comida familiar. Un sistema de reserva integrado en la web (no un teléfono como único canal) capta a ese cliente en el momento exacto en que decide, sin fricción y sin depender de que alguien atienda la llamada.
          </p>

          <OfferBannerWebSeo />

          <h2 className="text-2xl font-bold text-primary-600">4. Ficha de Google Business Profile y reseñas activas</h2>
          <p>
            Para hostelería, el "Local Pack" de Google —el bloque de resultados con mapa— suele ser la primera parada antes incluso de visitar la web. Fotos reales del local y de los platos, horario siempre actualizado y gestión activa de reseñas (responder, no ignorar) pesan tanto o más que el diseño de la propia web en la decisión final del cliente.
          </p>

          <h2 className="text-2xl font-bold text-primary-600">5. Carta siempre actualizada, con precios reales</h2>
          <p>
            Una carta desactualizada en la web —con platos que ya no se sirven o precios distintos a los del local— genera la reclamación más común del sector y daña la confianza antes incluso de que el cliente entre por la puerta. La carta de la web debe ser un reflejo exacto y editable de la carta real, no un PDF subido una vez y olvidado.
          </p>

          <section className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center py-2">
            <div className="md:col-span-2">
              <h2 className="text-2xl font-bold text-primary-600 mb-3">Tu web trabaja aunque el restaurante esté a tope</h2>
              <p className="text-gray-700 leading-relaxed">
                Mientras atiendes mesas o cierras la cocina al final del servicio, tu web sigue abierta. Alguien que busca dónde cenar a las 22:00 o un domingo por la mañana encuentra tu ficha, ve la carta con los alérgenos claros y reserva — sin que tengas que estar disponible para atenderlo en ese momento.
              </p>
            </div>
            <div className="md:col-span-1">
              <Image
                src="/imagen-web-trabaja-para-el-autonomo.webp"
                alt="Diagrama de un ciclo de 24 horas mostrando cómo la web de un restaurante sigue captando reservas mientras el negocio está cerrado o a tope de servicio"
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
            <h2 className="text-2xl font-bold mb-3">¿Tu restaurante necesita una web que cumpla y que llene mesas?</h2>
            <p className="text-primary-200 mb-6">
              Diseñamos webs de hostelería con alérgenos correctamente señalados, reserva online integrada y ficha de Google optimizada.
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

          <h2 className="text-2xl font-bold text-primary-600">Preguntas frecuentes sobre la web de un restaurante</h2>
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
      <RelatedArticles currentSlug="5-factores-web-restaurantes-hosteleria" />
    </>
  );
}
