import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { TrackedLink } from "@/components/TrackedLink";
import { DEMOS_CONTENT, DEMOS_SLUG } from "@/lib/demos-page";
import { PINTORES_DEMOS, SERVICE_DEMOS, TIENDAS_DEMOS } from "@/lib/demos";
import { LANDING_SLUG, ruta } from "@/lib/landing-pintores";
import type { Lang } from "@/lib/i18n/routes";
import { SITE, ORG_ID, webPageSchema, inLanguage } from "@/lib/schema";

const BTN = "inline-block text-center bg-accent-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-accent-600 transition-colors";
const BTN2 = "inline-block text-center border-2 border-white text-white px-6 py-3 rounded-full font-semibold hover:bg-white/10 transition-colors";

export function demosSchemas(lang: Lang) {
  const c = DEMOS_CONTENT[lang];
  const path = DEMOS_SLUG[lang];
  const url = `${SITE}${path}`;
  return [
    webPageSchema("CollectionPage", { lang, path, name: c.metaTitle, description: c.metaDescription }, {
      mainEntity: {
        "@type": "ItemList",
        itemListElement: PINTORES_DEMOS.map((d, i) => ({
          "@type": "ListItem",
          position: i + 1,
          url: d.url,
          name: d.nombre,
        })),
      },
      publisher: { "@id": ORG_ID },
    }),
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "@id": `${url}#faq`,
      inLanguage: inLanguage(lang),
      mainEntity: c.faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
    },
  ];
}

export function DemosPage({ lang }: { lang: Lang }) {
  const c = DEMOS_CONTENT[lang];
  const homeHref = lang === "es" ? "/" : `/${lang}/`;
  const audit = ruta("/auditoria-digital/", lang);
  const contact = ruta("/contacto/", lang);
  return (
    <>
      <JsonLd data={demosSchemas(lang)} />

      <section className="mw-skin-hero text-white">
        <div className="max-w-5xl mx-auto px-4 py-16">
          <Breadcrumbs crumbs={[{ label: c.home, href: homeHref }, { label: c.breadcrumb }]} />
          <h1 className="text-4xl md:text-5xl font-bold mt-4 mb-6 leading-tight">{c.h1}</h1>
          <p className="text-xl text-primary-200 mb-8 leading-relaxed max-w-3xl">{c.intro}</p>
          <div className="flex flex-col sm:flex-row gap-3">
            <TrackedLink href={audit} ctaId="demos-hero-auditoria" location="demos-hero" type="audit" text={c.ctaAudit} className={BTN}>{c.ctaAudit}</TrackedLink>
            <TrackedLink href={contact} ctaId="demos-hero-contacto" location="demos-hero" type="contact" text={c.ctaContact} className={BTN2}>{c.ctaContact}</TrackedLink>
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-black tracking-tight text-primary-700 mb-3 text-center">{c.paintersTitle}</h2>
          <p className="text-gray-600 text-center max-w-3xl mx-auto mb-10">{c.paintersIntro}</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {PINTORES_DEMOS.map((d) => (
              <article key={d.id} className="bg-white border border-gray-100 rounded-2xl shadow-sm overflow-hidden flex flex-col">
                <a href={d.url} target="_blank" rel="noopener" className="block">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={d.image} alt={`${d.nombre}: ${c.painters[d.id].tagline}`} width={900} height={562} loading="lazy" className="w-full h-auto" />
                </a>
                <div className="p-5 flex flex-col flex-1">
                  <p className="text-xs font-semibold text-accent-600 mb-1">{c.sample}</p>
                  <h3 className="font-bold text-primary-700">{d.nombre}</h3>
                  <p className="text-sm text-gray-600 mt-1">{c.painters[d.id].tagline}</p>
                  <p className="text-sm text-gray-500 mt-2 flex-1">{c.painters[d.id].includes}</p>
                  <a
                    href={d.url}
                    target="_blank"
                    rel="noopener"
                    className="mt-4 inline-block text-accent-600 font-semibold hover:underline"
                  >
                    {c.viewDemo} →
                  </a>
                </div>
              </article>
            ))}
          </div>
          <p className="text-center mt-8">
            <TrackedLink href={LANDING_SLUG[lang]} ctaId="demos-pintores-servicio" location="demos-pintores" type="link" text={c.landingLink} className="text-accent-600 font-semibold hover:underline">
              {c.landingLink} →
            </TrackedLink>
          </p>
        </div>
      </section>

      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-black tracking-tight text-primary-700 mb-3 text-center">{c.othersTitle}</h2>
          <p className="text-gray-600 text-center mb-8">{c.othersIntro}</p>
          <ul className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {[...SERVICE_DEMOS, ...TIENDAS_DEMOS].map((d) => (
              <li key={d.url}>
                <a href={d.url} target="_blank" rel="noopener" className="block bg-white border border-gray-100 rounded-xl p-4 shadow-sm hover:border-accent-300 transition-colors">
                  <span className="block font-semibold text-primary-700 text-sm">{d.nombre}</span>
                  <span className="block text-xs text-gray-500">{d.sector}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-black tracking-tight text-primary-700 mb-8 text-center">{c.stepsTitle}</h2>
          <ol className="space-y-5 mb-12">
            {c.steps.map((s, i) => (
              <li key={s.t} className="flex gap-4 items-start">
                <span className="w-9 h-9 rounded-full bg-gradient-to-br from-[#7c3aed] to-accent-500 text-white text-sm font-bold flex items-center justify-center shrink-0">{i + 1}</span>
                <div>
                  <h3 className="font-semibold text-primary-700">{s.t}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{s.d}</p>
                </div>
              </li>
            ))}
          </ol>
          <div className="bg-primary-50 border border-primary-100 rounded-2xl p-6">
            <h2 className="text-xl font-bold text-primary-700 mb-2">{c.noteTitle}</h2>
            <p className="text-gray-600 text-sm leading-relaxed">{c.note}</p>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-black tracking-tight text-primary-700 mb-8 text-center">{c.faqTitle}</h2>
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
        <div className="max-w-4xl mx-auto mw-skin-cta text-white rounded-3xl p-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-3">{c.finalTitle}</h2>
          <p className="text-primary-200 mb-6 max-w-2xl mx-auto">{c.finalDesc}</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <TrackedLink href={audit} ctaId="demos-final-auditoria" location="demos-final" type="audit" text={c.ctaAudit} className={BTN}>{c.ctaAudit}</TrackedLink>
            <TrackedLink href={contact} ctaId="demos-final-contacto" location="demos-final" type="contact" text={c.ctaContact} className={BTN2}>{c.ctaContact}</TrackedLink>
          </div>
        </div>
      </section>
    </>
  );
}
