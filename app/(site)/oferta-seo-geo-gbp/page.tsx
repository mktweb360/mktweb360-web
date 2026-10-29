import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ContactForm } from "@/components/ContactForm";
import { preciosOfertaSeo } from "@/lib/precios-planes";
import { PRECIOS_OFERTA_SEO_RESPALDO, preciosEnTexto } from "@/lib/ofertas";

// Oferta permanente (sin fecha de fin ni plazas), relanzada el 2-oct-2026.
// Inventario: CAMPAÑA-oferta-seo-geo-gbp-2026-10-02-v2.md y CAMPAÑA-ofertas-web-y-seo-2026-10-20.md (Drive, Sistema Operativo).
const URL = "https://www.mktweb360.com/oferta-seo-geo-gbp/";
// Precio vigente: preciosOfertaSeo() (catálogo de MktOS con respaldo en lib/ofertas.ts), la fuente única que usan
// también las demás páginas y el asistente. Los textos de aquí se escriben con las cifras de respaldo y
// preciosEnTexto() las cambia por las vigentes (también en metadatos, imagen OG y JSON-LD).
const PRICE = String(PRECIOS_OFERTA_SEO_RESPALDO.sinPermanencia);
const PRICE_6M = String(PRECIOS_OFERTA_SEO_RESPALDO.permanencia6m);
async function vigente() {
  const p = await preciosOfertaSeo();
  return { p, P: String(p.sinPermanencia), PERM: String(p.permanencia6m), R: (t: string) => preciosEnTexto(t, p) };
}
const DESC =
  "SEO, GEO y ficha de Google Business Profile en un solo servicio: desde 149 €/mes + IVA con 6 meses de permanencia, o 349 €/mes sin permanencia.";

const METADATA: Metadata = {
  title: "SEO, GEO y ficha de Google: oferta desde 149 €/mes",
  description: DESC,
  alternates: { canonical: URL },
  robots: { index: true, follow: true },
  openGraph: {
    title: "SEO + GEO + Google Business Profile desde 149 €/mes | Mkt Web 360",
    description: DESC,
    url: URL,
    images: [
      {
        url: "/api/og?title=" + encodeURIComponent("SEO + GEO + Google Business Profile desde 149 €/mes") + "&cat=" + encodeURIComponent("Oferta"),
        width: 1200,
        height: 630,
      },
    ],
  },
};

export async function generateMetadata(): Promise<Metadata> {
  const { R } = await vigente();
  // preciosEnTexto también cambia el precio codificado en la URL de la imagen OG.
  return JSON.parse(R(JSON.stringify(METADATA)));
}

const INCLUYE = [
  {
    title: "SEO — Google",
    lead: "Que tu web aparezca cuando te buscan.",
    items: [
      "Auditoría técnica inicial de la web",
      "Corrección de contenidos, títulos, descripciones, enlaces internos y configuración que frenan el posicionamiento",
      "Investigación de palabras clave con intención de compra al inicio y revisión cada trimestre",
      "Informe mensual de posiciones, tráfico y contactos",
    ],
    href: "/seo-posicionamiento-web-organico/",
  },
  {
    title: "GEO — Inteligencia artificial",
    lead: "Que cualquier asistente de IA pueda encontrarte y citarte.",
    items: [
      "Auditoría inicial: 10 preguntas de tu sector en 4 asistentes de IA (por ejemplo, ChatGPT, Gemini, Copilot y el modo IA de Google)",
      "Contenido optimizado para que los modelos de lenguaje puedan citarlo",
      "Datos estructurados y archivos llms.txt",
      "Seguimiento mensual de esas 10 preguntas en los mismos 4 asistentes",
    ],
    href: "/geo-posicionamiento-ia/",
  },
  {
    title: "GBP — Google Maps",
    lead: "Que los clientes de tu zona te encuentren en el mapa.",
    items: [
      "Auditoría y optimización de 1 ficha de Google Business Profile",
      "Categorías, atributos, servicios y horarios; subida y optimización de las fotos que nos facilites",
      "2 publicaciones al mes en la ficha",
      "Respuesta a hasta 15 reseñas al mes y método para pedir reseñas a tus clientes reales",
      "Datos de empresa coherentes en tu web y en 5 directorios principales",
    ],
    href: "/google-business-profile/",
  },
];

/** Condiciones del precio fijo (decididas por Manué el 2-oct-2026). */
const CONDICIONES = [
  { t: "5 contenidos al mes", d: "Páginas optimizadas o contenidos nuevos, entre SEO y GEO, según lo que más rinda cada mes." },
  { t: "Webs de hasta 30 páginas", d: "En un idioma. Si tu web es más grande, tiene tienda con mucho catálogo o varios idiomas, te hacemos un presupuesto a medida." },
  { t: "1 ficha de Google", d: "Si tienes varios locales, cada ficha adicional se presupuesta aparte." },
  { t: "Dos modalidades", d: "Sin permanencia (baja con 30 días de aviso) o con 6 meses de permanencia a un precio mensual menor. Las condiciones de cada una están más arriba." },
  { t: "Exclusividad en tu municipio", d: "No trabajamos con otra empresa de tu mismo sector en tu municipio." },
  { t: "Un único responsable", d: "Una persona lleva tu cuenta y te envía el informe cada mes." },
];

const NO_INCLUYE = [
  "Rediseño de la web o desarrollo de funciones nuevas",
  "Conseguir enlaces externos (link building)",
  "Sesiones de fotos o vídeo",
  "Publicidad de pago (Google Ads, redes sociales)",
  "Reseñas compradas, inventadas o a cambio de incentivos: no las hacemos nunca",
];

const FAQS = [
  {
    q: "¿Qué incluye el paquete SEO + GEO + GBP?",
    a: "Tres servicios en uno por 349 €/mes + IVA: SEO (auditoría técnica, palabras clave, correcciones e informe mensual), GEO (auditoría y seguimiento mensual de 10 preguntas en 4 asistentes de IA, contenido citable, datos estructurados y llms.txt) y GBP (1 ficha de Google Business Profile optimizada, 2 publicaciones al mes, respuesta a hasta 15 reseñas al mes y 5 directorios). Incluye 5 contenidos al mes y vale para webs de hasta 30 páginas en un idioma.",
  },
  {
    q: "¿Qué es el GEO?",
    a: "GEO (Generative Engine Optimization) es la optimización de tu web y de tu presencia en internet para que los asistentes de inteligencia artificial —ChatGPT, Gemini, Copilot, Perplexity, Claude o el modo IA de Google, entre otros— te mencionen cuando alguien les pregunta por un servicio como el tuyo. El trabajo no depende de una IA concreta: contenido citable, datos estructurados y datos de empresa coherentes sirven a cualquier asistente.",
  },
  {
    q: "¿Cuándo se ven los resultados?",
    a: "Los primeros resultados del SEO suelen verse entre 3 y 6 meses, según la competencia del sector y el estado de tu web.",
  },
  {
    q: "¿Trabajáis con mi competencia?",
    a: "No. Trabajamos con exclusividad sectorial por municipio: no llevamos a dos empresas del mismo sector en el mismo municipio.",
  },
  {
    q: "¿Hay permanencia?",
    a: "Depende de la modalidad. Sin permanencia, puedes darte de baja cuando quieras avisando con 30 días de antelación. Con la opción de 6 meses a 149 €/mes + IVA te comprometes durante esos 6 meses; si te das de baja antes, abonas el 50 % de las mensualidades que queden.",
  },
  {
    q: "¿Qué pasa cuando terminan los 6 meses?",
    a: "A partir del séptimo mes se aplica la tarifa vigente sin permanencia (hoy, 349 €/mes + IVA). Si la tarifa cambia, te avisamos antes de aplicarla.",
  },
  {
    q: "¿Por qué una opción de 6 meses?",
    a: "Porque el SEO tarda en dar resultados: los primeros suelen verse entre 3 y 6 meses. La opción de 6 meses te da un precio menor a cambio de darle al trabajo el tiempo mínimo para empezar a rendir. No garantizamos posiciones concretas.",
  },
  {
    q: "¿Y si mi web es más grande o tengo varios locales?",
    a: "El precio fijo vale para webs de hasta 30 páginas en un idioma y 1 ficha de Google. Para webs más grandes, tiendas con mucho catálogo, varios idiomas o varias fichas, te preparamos un presupuesto a medida.",
  },
  {
    q: "¿Conseguís reseñas para mi negocio?",
    a: "Te damos un método para pedir reseñas a tus clientes reales (por ejemplo, un enlace o un código QR después del servicio) y respondemos a hasta 15 reseñas al mes. Nunca compramos, inventamos ni pagamos reseñas: además de estar prohibido, Google puede penalizar la ficha.",
  },
  {
    q: "¿Cómo empezamos?",
    a: "Nos escribes con el formulario de esta página, hacemos una auditoría gratuita de tu web, tu ficha de Google y tu presencia en la IA, y te presentamos una propuesta. Si encaja, empezamos a trabajar.",
  },
];

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      name: "Paquete SEO + GEO + Google Business Profile",
      serviceType: "SEO, GEO y optimización de Google Business Profile",
      provider: { "@id": "https://www.mktweb360.com/#organization" },
      areaServed: { "@type": "Country", name: "España" },
      description: DESC,
      url: URL,
      offers: {
        "@type": "Offer",
        price: PRICE,
        priceCurrency: "EUR",
        availability: "https://schema.org/InStock",
        url: URL,
        priceSpecification: {
          "@type": "UnitPriceSpecification",
          price: PRICE,
          priceCurrency: "EUR",
          unitCode: "MON",
          valueAddedTaxIncluded: false,
        },
      },
    },
    {
      "@type": "Offer",
      name: "SEO + GEO + Google Business Profile con 6 meses de permanencia",
      price: PRICE_6M,
      priceCurrency: "EUR",
      availability: "https://schema.org/InStock",
      url: URL,
      priceSpecification: {
        "@type": "UnitPriceSpecification",
        price: PRICE_6M,
        priceCurrency: "EUR",
        unitCode: "MON",
        billingDuration: 6,
        valueAddedTaxIncluded: false,
      },
    },
    {
      "@type": "FAQPage",
      mainEntity: FAQS.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
    },
  ],
};

export default async function OfertaSeoGeoGbpPage() {
  const { p, P, PERM, R } = await vigente();
  const EJEMPLO = p.permanencia6m * 3 * 0.5; // si quedan 3 meses: 50 % de 3 mensualidades con permanencia
  const faqs = FAQS.map((f) => ({ q: R(f.q), a: R(f.a) }));
  const ld = R(JSON.stringify(schema));
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: ld }} />

      <div className="max-w-5xl mx-auto px-4 pt-6">
        <Breadcrumbs crumbs={[{ label: "Inicio", href: "/" }, { label: "Oferta SEO + GEO + GBP" }]} />
      </div>

      {/* Cabecera */}
      <section className="mw-skin-hero text-white">
        <div className="max-w-5xl mx-auto px-4 pt-12 pb-16 md:pb-20">
          <div className="max-w-3xl">
            <span className="inline-block bg-accent-500 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest mb-6">SEO + GEO + Google Maps</span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Aparece en Google, en las respuestas de la IA y en el mapa
            </h1>
            <p className="text-xl text-primary-100 mb-8 leading-relaxed">
              Posicionamiento SEO, GEO para que cualquier asistente de IA (ChatGPT, Gemini, Copilot, Perplexity, Claude o el modo IA de Google) pueda encontrarte y citarte, y tu ficha de Google Business Profile optimizada. Un solo servicio mensual.
            </p>
            <div className="grid sm:grid-cols-2 gap-4 mb-8 max-w-2xl">
              <div className="bg-white/10 rounded-2xl px-6 py-4">
                <p className="text-primary-100 text-sm font-semibold uppercase tracking-wide mb-1">Con 6 meses de permanencia</p>
                <p className="flex items-baseline gap-3">
                  <span className="text-accent-400 text-4xl font-bold">{PERM} €/mes</span>
                  <span className="text-primary-100 text-sm">+ IVA</span>
                </p>
                <p className="text-primary-100 text-xs mt-1">Los 6 primeros meses · después, la tarifa vigente sin permanencia</p>
              </div>
              <div className="bg-white/10 rounded-2xl px-6 py-4">
                <p className="text-primary-100 text-sm font-semibold uppercase tracking-wide mb-1">Sin permanencia</p>
                <p className="flex items-baseline gap-3">
                  <span className="text-accent-400 text-4xl font-bold">{P} €/mes</span>
                  <span className="text-primary-100 text-sm">+ IVA</span>
                </p>
                <p className="text-primary-100 text-xs mt-1">Baja con 30 días de aviso · Webs de hasta 30 páginas</p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#empezar" className="bg-accent-500 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-accent-600 transition-colors text-center">
                Quiero empezar
              </a>
              <a href="#incluye" className="border border-white/40 text-white px-7 py-4 rounded-full font-medium hover:bg-white/10 transition-colors text-center">
                Ver qué incluye
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Qué incluye */}
      <section id="incluye" className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-black tracking-tight text-primary-700 mb-3">Qué incluye el paquete</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Hoy tus clientes te buscan en tres sitios: el buscador, el mapa y los asistentes de IA. Trabajamos los tres a la vez para que no dependas de uno solo.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {INCLUYE.map((b) => (
              <div key={b.title} className="rounded-2xl border border-gray-200 bg-white p-6 flex flex-col">
                <h3 className="font-bold text-primary-700 text-xl mb-1">{b.title}</h3>
                <p className="text-accent-700 font-semibold text-sm mb-4">{b.lead}</p>
                <ul className="space-y-2 text-gray-700 text-sm leading-relaxed mb-5 flex-1">
                  {b.items.map((it) => (
                    <li key={it} className="flex gap-2">
                      <span aria-hidden="true" className="text-accent-500 font-bold">✓</span>
                      <span>{it}</span>
                    </li>
                  ))}
                </ul>
                <Link href={b.href} className="text-primary-600 font-semibold text-sm underline underline-offset-2 hover:text-accent-700">
                  Más sobre {b.title.split(" — ")[0]}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dos modalidades */}
      <section id="modalidades" className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-black tracking-tight text-primary-700 mb-3">Dos formas de contratarlo</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">El mismo servicio, con las mismas condiciones de trabajo. Cambia el compromiso y el precio.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="rounded-2xl border-2 border-accent-500 bg-white p-6">
              <p className="text-accent-700 font-bold text-sm uppercase tracking-wide mb-1">Con permanencia de 6 meses</p>
              <p className="flex items-baseline gap-2 mb-4">
                <span className="text-4xl font-black text-primary-700">{PERM} €/mes</span>
                <span className="text-gray-600 text-sm">+ IVA</span>
              </p>
              <ul className="space-y-2 text-sm text-gray-700 leading-relaxed">
                <li className="flex gap-2"><span aria-hidden="true" className="text-accent-500 font-bold">✓</span><span>{PERM} €/mes + IVA durante los 6 primeros meses.</span></li>
                <li className="flex gap-2"><span aria-hidden="true" className="text-accent-500 font-bold">✓</span><span>A partir del séptimo mes, la tarifa vigente sin permanencia (hoy, {P} €/mes + IVA). Si cambia, te avisamos antes.</span></li>
                <li className="flex gap-2"><span aria-hidden="true" className="text-accent-500 font-bold">✓</span><span>Si te das de baja antes de cumplir los 6 meses, abonas el 50 % de las mensualidades que queden. Por ejemplo, con 3 meses por delante: 50 % de 3 × {PERM} € = {EJEMPLO.toFixed(2).replace(".", ",")} € + IVA.</span></li>
              </ul>
              <p className="text-sm text-gray-600 mt-4">
                Seis meses es el plazo en el que el SEO suele empezar a dar resultados que se traducen en contactos. No garantizamos posiciones concretas: depende del sector, de la competencia y del estado de tu web.
              </p>
            </div>
            <div className="rounded-2xl border border-gray-200 bg-white p-6">
              <p className="text-primary-700 font-bold text-sm uppercase tracking-wide mb-1">Sin permanencia</p>
              <p className="flex items-baseline gap-2 mb-4">
                <span className="text-4xl font-black text-primary-700">{P} €/mes</span>
                <span className="text-gray-600 text-sm">+ IVA</span>
              </p>
              <ul className="space-y-2 text-sm text-gray-700 leading-relaxed">
                <li className="flex gap-2"><span aria-hidden="true" className="text-accent-500 font-bold">✓</span><span>Puedes darte de baja cuando quieras avisando con 30 días de antelación.</span></li>
                <li className="flex gap-2"><span aria-hidden="true" className="text-accent-500 font-bold">✓</span><span>Mismo servicio y mismas condiciones que la otra modalidad.</span></li>
              </ul>
            </div>
          </div>
          <p className="max-w-3xl mx-auto text-xs text-gray-600 leading-relaxed text-center mt-6">
            Este resumen es orientativo y está escrito para que se entienda a la primera. Las condiciones exactas de la modalidad con permanencia se recogen por escrito en el presupuesto que aceptes. Te recomendamos que tu gestor o asesor lo revise antes de firmar. No es asesoramiento jurídico.
          </p>
        </div>
      </section>

      {/* Condiciones del precio */}
      <section id="condiciones" className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-black tracking-tight text-primary-700 mb-3">Qué incluye exactamente el precio</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">{P} €/mes + IVA, con estas condiciones claras desde el principio.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
            {CONDICIONES.map((c) => (
              <div key={c.t} className="rounded-2xl border border-gray-200 p-5">
                <p className="font-bold text-primary-700 mb-1">{c.t}</p>
                <p className="text-sm text-gray-700 leading-relaxed">{c.d}</p>
              </div>
            ))}
          </div>
          <div className="max-w-3xl mx-auto rounded-2xl bg-gray-50 border border-gray-200 p-6">
            <h3 className="font-bold text-primary-700 mb-3">No incluido en el precio</h3>
            <ul className="space-y-2 text-sm text-gray-700">
              {NO_INCLUYE.map((n) => (
                <li key={n} className="flex gap-2">
                  <span aria-hidden="true" className="text-gray-500 font-bold">–</span>
                  <span>{n}</span>
                </li>
              ))}
            </ul>
            <p className="text-sm text-gray-600 mt-4">Lo que no entra en el paquete se puede contratar aparte con presupuesto.</p>
          </div>
        </div>
      </section>

      {/* Por qué los tres juntos */}
      <section className="py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-primary-600 mb-5">Por qué trabajar los tres frentes juntos</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Un cliente que te busca en Google ve a la vez el mapa con las fichas de tu zona y los resultados orgánicos. Y hay quien, antes de decidir, pregunta a un asistente de IA. Si solo trabajas uno de esos sitios, la competencia ocupa los otros dos.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Los tres se refuerzan: una web bien posicionada y con datos claros alimenta lo que la IA dice de ti, y una ficha de Google completa y con reseñas da confianza al que llega desde el buscador. Por eso lo llevamos como un solo servicio —tres en uno—, con un único responsable y un informe mensual.
          </p>
        </div>
      </section>

      {/* Preguntas frecuentes */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-black tracking-tight text-primary-700 mb-8 text-center">Preguntas frecuentes</h2>
          <div className="space-y-4">
            {faqs.map((f) => (
              <details key={f.q} className="mw-faq group rounded-2xl bg-gray-50 ring-1 ring-gray-200 transition-all duration-300 open:bg-white open:ring-transparent open:shadow-[0_20px_45px_-25px_rgba(124,58,237,0.45)]">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-6 py-5 font-bold text-primary-700 [&::-webkit-details-marker]:hidden">
                  {f.q}
                  <span className="text-accent-500 group-open:rotate-180 transition-transform text-lg" aria-hidden="true">▾</span>
                </summary>
                <div className="px-6 py-4 text-gray-700 leading-relaxed border-t border-gray-100">{f.a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Formulario */}
      <section id="empezar" className="py-16 px-4 mw-skin-band text-white">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-4">Empieza con una auditoría gratuita</h2>
            <p className="text-primary-100">Cuéntanos a qué te dedicas y dónde trabajas. Revisamos tu web, tu ficha de Google y lo que dicen de ti las IA, y te respondemos con un primer diagnóstico.</p>
          </div>
          <div className="rounded-3xl bg-white p-6 sm:p-8 text-gray-900 shadow-[0_30px_80px_-30px_rgba(0,0,0,0.6)] ring-1 ring-white/10">
            <ContactForm formType="oferta-seo-geo-gbp" />
          </div>
        </div>
      </section>
    </>
  );
}
