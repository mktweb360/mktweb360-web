import { preciosEnDatos, preciosEnTexto } from "@/lib/ofertas";
import { preciosOfertaSeo } from "@/lib/precios-planes";
import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ContactForm } from "@/components/ContactForm";

// Oferta permanente: web corporativa desde 249 € (front a medida + WordPress como panel de gestión).
// Reescrita el 20-oct-2026: se retira el paquete «Web + 6 meses de SEO por 999 €».
// La URL se mantiene a propósito (/oferta-web-seo-organico/): ya está indexada y renombrarla podría perder posicionamiento.
// Inventario: CAMPAÑA-ofertas-web-y-seo-2026-10-20.md (Drive, carpeta Sistema Operativo).
const URL = "https://www.mktweb360.com/oferta-web-seo-organico/";
const PRICE = "249";
const DESC =
  "Página web profesional desde 249 € + IVA: diseño a medida en WordPress para que gestiones tú los contenidos. Sin permanencia; hosting y dominio aparte.";

export const metadata: Metadata = {
  title: "Página web profesional desde 249 €",
  description: DESC,
  alternates: { canonical: URL },
  robots: { index: true, follow: true },
  openGraph: {
    title: "Web profesional desde 249 € | Mkt Web 360",
    description: DESC,
    url: URL,
    images: [
      {
        url: "/api/og?title=" + encodeURIComponent("Web profesional desde 249 €") + "&cat=" + encodeURIComponent("Oferta"),
        width: 1200,
        height: 630,
      },
    ],
  },
};

const INCLUYE = [
  "Diseño a medida de tu negocio, adaptado a móvil y rápido",
  "Integrada en WordPress: tú editas textos, imágenes y entradas sin depender de nadie",
  "Estructura de páginas pensada para que te encuentren y te contacten",
  "SEO técnico de base: estructura, títulos, descripciones y velocidad",
  "Formulario de contacto con protección anti-spam y blog integrado",
  "Páginas legales básicas (aviso legal, privacidad y cookies)",
];

const NO_INCLUYE = [
  "Hosting, dominio y correo corporativo: los contratas tú con el proveedor que prefieras y te orientamos en la elección",
  "Posicionamiento mensual (SEO, GEO y Google Maps): es otra oferta, la tienes más abajo",
  "Tienda online: tiene su propia oferta, desde 490 €",
  "Funciones especiales (reservas complejas, varios idiomas, áreas privadas): se presupuestan aparte",
];

const PASOS = [
  { n: "1", t: "Nos cuentas tu negocio", d: "Rellenas un breve formulario con tu actividad, tus servicios y lo que quieres conseguir con la web." },
  { n: "2", t: "Diseñamos y montamos", d: "Preparamos el diseño a medida y lo integramos en WordPress. Recibes un avance para validarlo." },
  { n: "3", t: "Publicamos y te entregamos", d: "Publicamos la web y te la entregamos lista para que la gestiones tú. El plazo se acuerda en el presupuesto." },
];

const FAQS = [
  {
    q: "¿Cuánto cuesta la web?",
    a: "Desde 249 € + IVA. El alcance (número de páginas y funciones) se concreta en el presupuesto antes de empezar. Si necesitas algo especial, como varios idiomas o reservas complejas, te lo presupuestamos aparte.",
  },
  {
    q: "¿Qué incluye y qué no?",
    a: "Incluye el diseño a medida, la integración en WordPress, el SEO técnico de base, el formulario de contacto, el blog y las páginas legales básicas. No incluye hosting, dominio ni correo corporativo, ni el posicionamiento mensual.",
  },
  {
    q: "¿Necesito hosting y dominio?",
    a: "Sí. No van incluidos en el precio. Los contratas tú con el proveedor que prefieras y te orientamos en la elección y en la configuración.",
  },
  {
    q: "¿Qué significa que esté integrada en WordPress?",
    a: "Que el diseño se hace a medida de tu negocio y WordPress funciona como panel de gestión. Tú puedes cambiar textos, imágenes y publicar entradas sin depender de nosotros, y la web es tuya.",
  },
  {
    q: "¿Hay permanencia?",
    a: "No. Pagas la web y es tuya. Si más adelante quieres posicionarla, puedes contratar nuestro SEO + GEO + Google Maps, que es una oferta independiente.",
  },
  {
    q: "¿Cuánto tarda en estar lista?",
    a: "Depende del alcance y de cuándo nos envíes textos e imágenes. El plazo se fija en el presupuesto antes de empezar.",
  },
  {
    q: "¿Y si quiero que además me encuentren en Google?",
    a: "La web incluye el SEO técnico de base. Para posicionarla de forma continua tenemos el paquete SEO + GEO + Google Maps, con una opción de 6 meses a 149 €/mes y otra sin permanencia a 349 €/mes.",
  },
];

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      name: "Página web profesional",
      serviceType: "Diseño web corporativo",
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
        priceSpecification: { "@type": "PriceSpecification", price: PRICE, priceCurrency: "EUR", valueAddedTaxIncluded: false, minPrice: PRICE },
      },
    },
    {
      "@type": "FAQPage",
      mainEntity: FAQS.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
    },
  ],
};

export default async function OfertaWebCorporativaPage() {
  // Las cifras de la oferta SEO + GEO + Maps que se citan aquí son las vigentes (preciosOfertaSeo, fuente única).
  const po = await preciosOfertaSeo();
  const R = (t: string) => preciosEnTexto(t, po);
  const faqs = preciosEnDatos(FAQS, po);
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: R(JSON.stringify(schema)) }} />

      <div className="max-w-5xl mx-auto px-4 pt-6">
        <Breadcrumbs crumbs={[{ label: "Inicio", href: "/" }, { label: "Oferta web profesional" }]} />
      </div>

      {/* Cabecera */}
      <section className="mw-skin-hero text-white">
        <div className="max-w-5xl mx-auto px-4 pt-12 pb-16 md:pb-20">
          <div className="max-w-3xl">
            <span className="inline-block bg-accent-500 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest mb-6">Oferta web profesional</span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">Tu web profesional, desde 249 €</h1>
            <p className="text-xl text-primary-100 mb-8 leading-relaxed">
              Diseño a medida de tu negocio, integrado en WordPress para que gestiones tú los contenidos. Una web pensada para que te encuentren y te contacten.
            </p>
            <div className="bg-white/10 rounded-2xl px-6 py-4 mb-8 inline-block">
              <p className="flex items-baseline gap-3">
                <span className="text-primary-100 text-sm">Desde</span>
                <span className="text-accent-400 text-4xl font-bold">249 €</span>
                <span className="text-primary-100 text-sm">+ IVA</span>
              </p>
              <p className="text-primary-100 text-xs mt-1">Sin permanencia · Hosting, dominio y correo no incluidos</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#empezar" className="bg-accent-500 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-accent-600 transition-colors text-center">
                Quiero mi web
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
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
          <div className="rounded-2xl border border-gray-200 bg-white p-6">
            <h2 className="text-2xl font-black tracking-tight text-primary-700 mb-4">Qué incluye</h2>
            <ul className="space-y-3 text-gray-700 text-sm leading-relaxed">
              {INCLUYE.map((it) => (
                <li key={it} className="flex gap-2">
                  <span aria-hidden="true" className="text-accent-500 font-bold">✓</span>
                  <span>{it}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border border-gray-200 bg-white p-6">
            <h2 className="text-2xl font-black tracking-tight text-primary-700 mb-4">Qué no incluye</h2>
            <ul className="space-y-3 text-gray-700 text-sm leading-relaxed">
              {NO_INCLUYE.map((it) => (
                <li key={it} className="flex gap-2">
                  <span aria-hidden="true" className="text-gray-500 font-bold">–</span>
                  <span>{it}</span>
                </li>
              ))}
            </ul>
            <p className="text-sm text-gray-600 mt-4">Todo lo que no entra en el precio se puede contratar aparte con presupuesto.</p>
          </div>
        </div>
      </section>

      {/* Cómo trabajamos */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-black tracking-tight text-primary-700 mb-8 text-center">Cómo trabajamos</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {PASOS.map((p) => (
              <div key={p.n} className="rounded-2xl border border-gray-200 p-6">
                <div className="w-10 h-10 rounded-full bg-accent-500 text-white font-bold flex items-center justify-center mb-3">{p.n}</div>
                <p className="font-bold text-primary-700 mb-1">{p.t}</p>
                <p className="text-sm text-gray-700 leading-relaxed">{p.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Siguiente paso: posicionamiento */}
      <section className="py-12 px-4 bg-gray-50">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-primary-600 mb-3">¿Quieres que además te encuentren?</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            {R("La web es la base. Para aparecer en Google, en las respuestas de la IA y en el mapa trabajamos el posicionamiento de forma continua, con una opción de 6 meses a 149 €/mes y otra sin permanencia a 349 €/mes.")}
          </p>
          <Link href="/oferta-seo-geo-gbp/" className="inline-block bg-primary-600 text-white px-7 py-3 rounded-full font-semibold hover:bg-primary-700 transition-colors">
            Ver SEO + GEO + Google Maps
          </Link>
        </div>
      </section>

      {/* Auditoría gratuita como alternativa */}
      <section className="py-12 px-4">
        <div className="max-w-3xl mx-auto rounded-2xl border border-gray-200 bg-white p-6 text-center">
          <h2 className="text-2xl font-bold text-primary-700 mb-2">¿Ya tienes web y no sabes qué falla?</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Te hacemos una auditoría gratuita de SEO, visibilidad en IA y ficha de Google. Te llega por correo en un máximo de 24 horas laborables, sin coste ni compromiso.
          </p>
          <Link href="/auditoria-digital/" className="inline-block bg-accent-500 text-white px-7 py-3 rounded-full font-semibold hover:bg-accent-600 transition-colors">
            Pedir mi auditoría gratuita
          </Link>
        </div>
      </section>

      {/* Preguntas frecuentes */}
      <section className="py-16 px-4">
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
            <h2 className="text-3xl font-bold mb-4">Cuéntanos qué web necesitas</h2>
            <p className="text-primary-100">Dinos a qué te dedicas y qué quieres conseguir. Te respondemos con una propuesta y un plazo.</p>
          </div>
          <div className="rounded-3xl bg-white p-6 sm:p-8 text-gray-900 shadow-[0_30px_80px_-30px_rgba(0,0,0,0.6)] ring-1 ring-white/10">
            <ContactForm formType="oferta-web-corporativa" />
          </div>
        </div>
      </section>
    </>
  );
}
