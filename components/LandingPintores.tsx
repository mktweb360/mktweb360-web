import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ContactForm } from "@/components/ContactForm";
import { JsonLd } from "@/components/JsonLd";
import { TrackedLink } from "@/components/TrackedLink";
import { PintoresDemosBox } from "@/components/PintoresDemosBox";
import { LANDING, LANDING_SLUG, ruta, type LandingLang } from "@/lib/landing-pintores";
import { SITE, ORG_ID, webPageSchema } from "@/lib/schema";

const BTN_PRIMARY = "inline-block text-center bg-accent-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-accent-600 transition-colors";
const BTN_GHOST_DARK = "inline-block text-center border-2 border-white text-white px-6 py-3 rounded-full font-semibold hover:bg-white/10 transition-colors";

function CtaRow({ lang, where, dark }: { lang: LandingLang; where: string; dark?: boolean }) {
  const c = LANDING[lang];
  const audit = ruta("/auditoria-digital/", lang);
  const contact = ruta("/contacto/", lang);
  return (
    <div className="flex flex-col sm:flex-row flex-wrap gap-3">
      <TrackedLink href={audit} ctaId={`pintores-${where}-auditoria`} location={where} type="audit" text={c.ctaAudit} className={BTN_PRIMARY}>
        {c.ctaAudit}
      </TrackedLink>
      <TrackedLink
        href={contact}
        ctaId={`pintores-${where}-contacto`}
        location={where}
        type="contact"
        text={c.ctaContact}
        className={dark ? BTN_GHOST_DARK : "inline-block text-center border-2 border-primary-600 text-primary-700 px-6 py-3 rounded-full font-semibold hover:bg-primary-50 transition-colors"}
      >
        {c.ctaContact}
      </TrackedLink>
    </div>
  );
}

export function landingSchemas(lang: LandingLang) {
  const c = LANDING[lang];
  const path = LANDING_SLUG[lang];
  const url = `${SITE}${path}`;
  const l = lang === "es" ? "es" : lang;
  return [
    webPageSchema("WebPage", { lang: l, path, name: c.metaTitle, description: c.metaDescription }),
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "@id": `${url}#service`,
      name: c.serviceName,
      serviceType: c.serviceType,
      description: c.serviceDescription,
      url,
      inLanguage: c.inLang,
      provider: { "@type": "Organization", "@id": ORG_ID, name: "Mkt Web 360 SLU", url: SITE },
      areaServed: { "@type": "Country", name: c.areaName },
      audience: { "@type": "Audience", audienceType: c.audienceType },
      mainEntityOfPage: { "@id": `${url}#webpage` },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: c.catalogName,
        itemListElement: c.includes.items.map((i) => ({ "@type": "Service", name: i.t, description: i.d })),
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      inLanguage: c.inLang,
      mainEntity: c.faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
    },
  ];
}

export function LandingPintores({ lang }: { lang: LandingLang }) {
  const c = LANDING[lang];
  const homeHref = lang === "es" ? "/" : `/${lang}/`;
  const casos = ruta("/casos/", lang);
  return (
    <>
      <JsonLd data={landingSchemas(lang)} />

      <section className="mw-skin-hero text-white">
        <div className="max-w-6xl mx-auto px-4 py-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <Breadcrumbs crumbs={[{ label: c.home, href: homeHref }, { label: c.breadcrumb }]} />
            <p className="text-sm font-semibold uppercase tracking-wide text-accent-400 mt-4 mb-3">{c.eyebrow}</p>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              {c.h1}
              <span className="block text-2xl md:text-3xl text-accent-400 mt-3">{c.h1Accent}</span>
            </h1>
            <p className="text-xl text-primary-200 mb-6 leading-relaxed">{c.intro}</p>
            <ul className="space-y-2 text-primary-100 mb-8">
              {c.bullets.map((b) => <li key={b}>✓ {b}</li>)}
            </ul>
            <CtaRow lang={lang} where="hero" dark />
            <p className="mt-4 text-primary-200 text-sm">
              {c.ctaCall}:{" "}
              <TrackedLink href="tel:+34622748987" ctaId="pintores-hero-telefono" location="hero" type="phone" text={c.callLabel} className="font-semibold text-white underline underline-offset-2">
                {c.callLabel}
              </TrackedLink>
            </p>
          </div>
          <div id="presupuesto" className="bg-white rounded-2xl p-6 text-gray-900 shadow-xl">
            <h2 className="text-xl font-bold text-primary-700 mb-1">{c.formTitle}</h2>
            <p className="text-sm text-gray-500 mb-4">{c.formSub}</p>
            <ContactForm formType="landing-pintores" lang={lang} messageLabel={c.formMsgLabel} messagePlaceholder={c.formMsgPh} submitLabel={c.formSubmit} />
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-black tracking-tight text-primary-700 mb-4 text-center">{c.problem.title}</h2>
          <p className="text-gray-600 text-center max-w-3xl mx-auto mb-10 leading-relaxed">{c.problem.intro}</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {c.problem.items.map((p) => (
              <div key={p.t} className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm">
                <h3 className="font-bold text-primary-700 mb-2">{p.t}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{p.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-black tracking-tight text-primary-700 mb-4 text-center">{c.audience.title}</h2>
          <p className="text-gray-600 text-center mb-8">{c.audience.intro}</p>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
            {c.audience.items.map((i) => (
              <li key={i} className="bg-white border border-gray-100 rounded-xl p-4 text-gray-700 text-sm shadow-sm">✓ {i}</li>
            ))}
          </ul>
          <p className="text-sm text-gray-500 text-center">{c.audience.note}</p>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-black tracking-tight text-primary-700 mb-4 text-center">{c.includes.title}</h2>
          <p className="text-gray-600 text-center mb-10">{c.includes.intro}</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {c.includes.items.map((q) => (
              <div key={q.t} className="p-6 bg-white border border-gray-100 rounded-2xl shadow-sm">
                <h3 className="font-bold text-primary-700 mb-2">{q.t}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{q.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 pb-16">
        <div className="max-w-4xl mx-auto mw-skin-cta text-white rounded-3xl p-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-3">{c.mid.title}</h2>
          <p className="text-primary-200 mb-6 max-w-2xl mx-auto">{c.mid.desc}</p>
          <div className="flex justify-center"><CtaRow lang={lang} where="medio" dark /></div>
        </div>
      </section>

      <section className="py-16 px-4 bg-primary-50 border-y border-primary-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-black tracking-tight text-primary-700 mb-10 text-center">{c.process.title}</h2>
          <ol className="space-y-5">
            {c.process.steps.map((s, i) => (
              <li key={s.t} className="flex gap-4 items-start">
                <span className="w-9 h-9 rounded-full bg-gradient-to-br from-[#7c3aed] to-accent-500 text-white text-sm font-bold flex items-center justify-center shrink-0">{i + 1}</span>
                <div>
                  <h3 className="font-semibold text-primary-700">{s.t}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{s.d}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="px-4 pb-4">
        <div className="max-w-5xl mx-auto"><PintoresDemosBox lang={lang} where="landing" /></div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-black tracking-tight text-primary-700 mb-4 text-center">{c.proof.title}</h2>
          <p className="text-gray-600 text-center max-w-3xl mx-auto mb-10 leading-relaxed">{c.proof.intro}</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {c.proof.items.map((p) => (
              <div key={p.cliente} className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm">
                <h3 className="font-bold text-primary-700">{p.cliente}</h3>
                <p className="text-xs text-accent-600 font-semibold mb-2">{p.sector}</p>
                <p className="text-gray-600 text-sm leading-relaxed">{p.d}</p>
              </div>
            ))}
          </div>
          <p className="text-center mt-6">
            <Link href={casos} className="text-accent-600 font-semibold hover:underline">{c.proof.link} →</Link>
          </p>
        </div>
      </section>

      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-black tracking-tight text-primary-700 mb-8 text-center">{lang === "es" ? "Preguntas frecuentes" : lang === "en" ? "Frequently asked questions" : "Questions fréquentes"}</h2>
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

      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl font-bold text-primary-600 mb-3">{c.resources.title}</h2>
          <ul className="space-y-2 mb-12">
            {c.resources.links.map((l) => (
              <li key={l.esPath}><Link href={ruta(l.esPath, lang)} className="text-accent-600 font-semibold hover:underline">{l.text} →</Link></li>
            ))}
          </ul>
          <div className="mw-skin-cta text-white rounded-3xl p-8 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-3">{c.final.title}</h2>
            <p className="text-primary-200 mb-6 max-w-2xl mx-auto">{c.final.desc}</p>
            <div className="flex justify-center"><CtaRow lang={lang} where="final" dark /></div>
            <p className="mt-4 text-primary-200 text-sm">
              {c.ctaCall}:{" "}
              <TrackedLink href="tel:+34622748987" ctaId="pintores-final-telefono" location="final" type="phone" text={c.callLabel} className="font-semibold text-white underline underline-offset-2">
                {c.callLabel}
              </TrackedLink>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
