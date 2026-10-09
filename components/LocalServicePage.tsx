import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ContactForm } from "@/components/ContactForm";

// Página de servicio para una ubicación con presencia real (sede). Regla anti-canibalización:
// la página local trabaja «servicio + localidad»; la página nacional del servicio no menciona
// ubicaciones; la local enlaza a la nacional como detalle del servicio y a la guía informativa
// de la zona. Nunca clonar entre ciudades: solo donde haya actividad real (E1 v4.1).

export interface LocalServiceContent {
  url: string;
  breadcrumb: string;
  h1: string;
  h1Accent: string;
  intro: string;
  bullets: string[];
  porQue: { t: string; d: string }[];
  queHacemosTitulo: string;
  queHacemos: { t: string; d: string; href?: string; linkText?: string }[];
  precios: { nombre: string; precio: string; detalle: string; href?: string }[]; // sin href si la página de detalle no existe en ese idioma
  contexto: { titulo: string; parrafos: string[] };
  enlaces: { href: string; text: string }[];
  faqs: { q: string; a: string }[];
  formType: string;
  lang?: LocalLang; // por defecto "es"
}

export type LocalLang = "es" | "en" | "fr";

// Textos fijos de la plantilla por idioma (09/10/2026: versiones EN/FR de las páginas de Toledo).
const UI: Record<LocalLang, { home: string; homeHref: string; formTitle: string; formSub: string; porQue: string; precios: string; preciosSub: string; detalle: string; faq: string; area: string }> = {
  es: {
    home: "Inicio",
    homeHref: "/",
    formTitle: "Pide tu propuesta o tu auditoría gratuita",
    formSub: "Te respondemos por correo con el siguiente paso.",
    porQue: "Por qué trabajar con nosotros",
    precios: "Precios",
    preciosSub: "Los mismos precios publicados para toda España. Sin permanencia en los servicios mensuales.",
    detalle: "Ver el detalle",
    faq: "Preguntas frecuentes",
    area: "Provincia de Toledo",
  },
  en: {
    home: "Home",
    homeHref: "/en/",
    formTitle: "Request your proposal or your free audit",
    formSub: "We will reply by email with the next step.",
    porQue: "Why work with us",
    precios: "Pricing",
    preciosSub: "The same published prices for the whole of Spain. No minimum term on monthly services.",
    detalle: "See the details",
    faq: "Frequently asked questions",
    area: "Province of Toledo",
  },
  fr: {
    home: "Accueil",
    homeHref: "/fr/",
    formTitle: "Demandez votre proposition ou votre audit gratuit",
    formSub: "Nous vous répondons par e-mail avec la prochaine étape.",
    porQue: "Pourquoi travailler avec nous",
    precios: "Tarifs",
    preciosSub: "Les mêmes tarifs publiés pour toute l'Espagne. Sans engagement sur les services mensuels.",
    detalle: "Voir le détail",
    faq: "Questions fréquentes",
    area: "Province de Tolède",
  },
};

export function LocalServicePage({ c }: { c: LocalServiceContent }) {
  const u = UI[c.lang ?? "es"];
  return (
    <>
      <section className="bg-gradient-to-br from-primary-700 to-primary-900 text-white">
        <div className="max-w-6xl mx-auto px-4 py-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <Breadcrumbs crumbs={[{ label: u.home, href: u.homeHref }, { label: c.breadcrumb }]} />
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight mt-4">
              {c.h1}
              <span className="block text-2xl md:text-3xl text-accent-400 mt-3">{c.h1Accent}</span>
            </h1>
            <p className="text-xl text-primary-200 mb-6 leading-relaxed">{c.intro}</p>
            <ul className="space-y-2 text-primary-100">
              {c.bullets.map((b) => <li key={b}>✓ {b}</li>)}
            </ul>
          </div>
          <div id="contacto" className="bg-white rounded-2xl p-6 text-gray-900 shadow-xl">
            <h2 className="text-xl font-bold text-primary-700 mb-1">{u.formTitle}</h2>
            <p className="text-sm text-gray-500 mb-4">{u.formSub}</p>
            <ContactForm formType={c.formType} />
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-primary-600 mb-10 text-center">{u.porQue}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {c.porQue.map((p) => (
              <div key={p.t} className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm">
                <h3 className="font-bold text-primary-700 mb-2">{p.t}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{p.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-primary-600 mb-10 text-center">{c.queHacemosTitulo}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {c.queHacemos.map((q) => (
              <div key={q.t} className="p-6 bg-white border border-gray-100 rounded-2xl shadow-sm">
                <h3 className="font-bold text-primary-700 mb-2">{q.t}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{q.d}</p>
                {q.href && <Link href={q.href} className="inline-block mt-3 text-accent-600 font-semibold text-sm hover:underline">{q.linkText} →</Link>}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-primary-50 border-y border-primary-100">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-primary-600 mb-3 text-center">{u.precios}</h2>
          <p className="text-gray-600 text-center mb-10">{u.preciosSub}</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {c.precios.map((p) => (
              <div key={p.nombre} className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 flex flex-col">
                <h3 className="font-bold text-primary-700 mb-1">{p.nombre}</h3>
                <p className="text-2xl font-bold text-accent-500 mb-2">{p.precio}</p>
                <p className="text-sm text-gray-600 mb-4 flex-1">{p.detalle}</p>
                {p.href && <Link href={p.href} className="text-accent-600 font-semibold text-sm hover:underline">{u.detalle} →</Link>}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto space-y-4 text-gray-700 leading-relaxed">
          <h2 className="text-2xl font-bold text-primary-600 mb-2">{c.contexto.titulo}</h2>
          {c.contexto.parrafos.map((p) => <p key={p.slice(0, 40)}>{p}</p>)}
          <div className="flex flex-col sm:flex-row flex-wrap gap-x-6 gap-y-2 pt-2">
            {c.enlaces.map((e) => <Link key={e.href} href={e.href} className="text-accent-600 font-semibold hover:underline">{e.text} →</Link>)}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-primary-600 mb-8 text-center">{u.faq}</h2>
          <div className="space-y-4">
            {c.faqs.map((f) => (
              <details key={f.q} className="bg-white border border-gray-100 rounded-xl p-5 shadow-sm">
                <summary className="font-semibold text-primary-700 cursor-pointer">{f.q}</summary>
                <p className="text-gray-600 mt-3 leading-relaxed">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export function localServiceSchemas(c: LocalServiceContent, serviceName: string) {
  return [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: serviceName,
      provider: { "@id": "https://www.mktweb360.com/#organization" },
      areaServed: { "@type": "AdministrativeArea", name: UI[c.lang ?? "es"].area },
      url: c.url,
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: c.faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
    },
  ];
}
