import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ContactForm } from "@/components/ContactForm";
import { JsonLd } from "@/components/JsonLd";
import { TrackedLink } from "@/components/TrackedLink";
import { PintoresVideo } from "@/components/PintoresVideo";
import { LANDING, LANDING_SLUG, ruta, type LandingLang } from "@/lib/landing-pintores";
import { DEMOS_PINTORES, EXTRA, VIDEO_PINTORES } from "@/lib/landing-pintores-extra";
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

function Icono({ i }: { i: number }) {
  const paths = [
    "M4 20h16M6 20V9l6-5 6 5v11M10 20v-5h4v5",
    "M12 3v4M12 17v4M3 12h4M17 12h4M6 6l2.5 2.5M15.5 15.5L18 18M18 6l-2.5 2.5M8.5 15.5L6 18",
    "M5 12l4 4 10-10",
    "M3 6h18v12H3zM3 10h18M7 14h4",
    "M12 21s-6-5.2-6-10a6 6 0 1112 0c0 4.8-6 10-6 10zM12 11.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z",
    "M4 19V5M4 19h16M8 15v-4M12 15V8M16 15v-6",
  ];
  return (
    <span className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-accent-500/10 text-accent-600" aria-hidden="true">
      <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d={paths[i % paths.length]} /></svg>
    </span>
  );
}

function HeroIlustracion({ label }: { label: string }) {
  return (
    <svg viewBox="0 0 480 360" role="img" aria-label={label} className="w-full h-auto rounded-2xl shadow-xl">
      <rect width="480" height="360" fill="#f5efe6" />
      <rect x="0" y="0" width="480" height="360" fill="#f3d9b8" opacity="0.5" />
      <rect x="0" y="300" width="480" height="60" fill="#d8c3a5" />
      <rect x="60" y="50" width="360" height="230" rx="12" fill="#fff" stroke="#172d4a" strokeWidth="4" />
      <rect x="60" y="50" width="360" height="30" rx="12" fill="#172d4a" />
      <circle cx="80" cy="65" r="5" fill="#f97316" /><circle cx="98" cy="65" r="5" fill="#fbbf24" /><circle cx="116" cy="65" r="5" fill="#9ca3af" />
      <rect x="80" y="100" width="170" height="14" rx="4" fill="#172d4a" />
      <rect x="80" y="124" width="130" height="8" rx="4" fill="#cbd5e1" />
      <rect x="80" y="140" width="150" height="8" rx="4" fill="#cbd5e1" />
      <rect x="80" y="166" width="96" height="30" rx="15" fill="#f97316" />
      <rect x="280" y="100" width="120" height="100" rx="8" fill="#e2e8f0" />
      <rect x="280" y="100" width="60" height="100" rx="8" fill="#fbbf24" />
      <rect x="80" y="220" width="320" height="40" rx="8" fill="#f1f5f9" />
      <rect x="92" y="236" width="60" height="8" rx="4" fill="#94a3b8" /><rect x="170" y="236" width="60" height="8" rx="4" fill="#94a3b8" /><rect x="248" y="236" width="60" height="8" rx="4" fill="#94a3b8" />
      <rect x="395" y="150" width="28" height="150" rx="6" fill="#f97316" transform="rotate(18 409 225)" />
      <rect x="388" y="296" width="42" height="10" rx="3" fill="#172d4a" transform="rotate(18 409 301)" />
    </svg>
  );
}

function DemoMiniatura({ tono, nombre }: { tono: "ambar" | "luz" | "calido"; nombre: string }) {
  const t = {
    ambar: { bg: "#111827", bar: "#f59e0b", txt: "#f9fafb", blk: "#374151" },
    luz: { bg: "#f8fafc", bar: "#0ea5e9", txt: "#0f172a", blk: "#e2e8f0" },
    calido: { bg: "#f5ece0", bar: "#c2410c", txt: "#44403c", blk: "#e7d5bd" },
  }[tono];
  return (
    <svg viewBox="0 0 320 180" role="img" aria-label={nombre} className="w-full h-auto block">
      <rect width="320" height="180" fill={t.bg} />
      <rect x="20" y="22" width="90" height="10" rx="3" fill={t.txt} />
      <rect x="20" y="50" width="170" height="16" rx="4" fill={t.txt} />
      <rect x="20" y="74" width="130" height="8" rx="4" fill={t.blk} />
      <rect x="20" y="96" width="80" height="24" rx="12" fill={t.bar} />
      <rect x="210" y="40" width="90" height="100" rx="8" fill={t.blk} />
      <rect x="210" y="40" width="45" height="100" rx="8" fill={t.bar} opacity="0.85" />
      <rect x="20" y="140" width="280" height="24" rx="6" fill={t.blk} opacity="0.6" />
    </svg>
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
  const x = EXTRA[lang];
  const homeHref = lang === "es" ? "/" : `/${lang}/`;
  const casos = ruta("/casos/", lang);
  return (
    <>
      <JsonLd data={landingSchemas(lang)} />

      <section className="mw-skin-hero text-white">
        <div className="max-w-6xl mx-auto px-4 py-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <Breadcrumbs crumbs={[{ label: c.home, href: homeHref }, { label: c.breadcrumb }]} />
            <p className="text-sm font-semibold uppercase tracking-wide text-accent-400 mt-4 mb-3">{c.eyebrow}</p>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              {c.h1}
              <span className="block text-2xl md:text-3xl text-accent-400 mt-3">{c.h1Accent}</span>
            </h1>
            <p className="text-xl text-primary-200 mb-6 leading-relaxed">{c.intro}</p>
            <ul className="space-y-2 text-primary-100 mb-8">
              {x.hero.checks.map((b) => <li key={b}>✓ {b}</li>)}
            </ul>
            <div className="flex flex-col sm:flex-row flex-wrap gap-3 items-start sm:items-center">
              <TrackedLink href="#diagnostico" ctaId="pintores-hero-diagnostico" location="hero" type="contact" text={x.hero.cta} className={BTN_PRIMARY}>
                {x.hero.cta}
              </TrackedLink>
              <TrackedLink href="#demos" ctaId="pintores-hero-demos" location="hero" type="link" text={x.hero.demos} className="text-primary-100 underline underline-offset-4 hover:text-white">
                {x.hero.demos} ↓
              </TrackedLink>
            </div>
            <p className="mt-5 text-primary-200 text-sm">
              {c.ctaCall}:{" "}
              <TrackedLink href="tel:+34622748987" ctaId="pintores-hero-telefono" location="hero" type="phone" text={c.callLabel} className="font-semibold text-white underline underline-offset-2">
                {c.callLabel}
              </TrackedLink>
            </p>
          </div>
          <div>
            {VIDEO_PINTORES ? (
              <PintoresVideo src={VIDEO_PINTORES.src} poster={VIDEO_PINTORES.poster} vtt={VIDEO_PINTORES.vtt[lang]} lang={lang} title={x.video.titulo} />
            ) : (
              <HeroIlustracion label={x.hero.ilustracion} />
            )}
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-black tracking-tight text-primary-700 mb-4 text-center">{c.problem.title}</h2>
          <p className="text-gray-600 text-center max-w-3xl mx-auto mb-10 leading-relaxed">{c.problem.intro}</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {c.problem.items.map((p, i) => (
              <div key={p.t} className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm">
                <Icono i={i} />
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
            {c.includes.items.map((q, i) => (
              <div key={q.t} className="p-6 bg-white border border-gray-100 rounded-2xl shadow-sm">
                <Icono i={i + 3} />
                <h3 className="font-bold text-primary-700 mb-2">{q.t}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{q.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="demos" className="py-16 px-4 bg-gray-50 scroll-mt-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-black tracking-tight text-primary-700 mb-4 text-center">{x.demos.title}</h2>
          <p className="text-gray-600 text-center max-w-3xl mx-auto mb-10 leading-relaxed">{x.demos.intro}</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {DEMOS_PINTORES.map((d) => (
              <article key={d.id} className="bg-white border border-gray-100 rounded-2xl shadow-sm overflow-hidden flex flex-col">
                <DemoMiniatura tono={d.tono} nombre={d.nombre} />
                <div className="p-5 flex flex-col grow">
                  <h3 className="font-bold text-primary-700">{d.nombre}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed mt-1 mb-4 grow">{d.estilo[lang]}</p>
                  {d.url ? (
                    <TrackedLink href={d.url} newTab ctaId={`pintores-demo-${d.id}`} location="demos" type="link" text={`${x.demos.ver} ${d.nombre}`} className="inline-block text-center border-2 border-primary-600 text-primary-700 px-5 py-2.5 rounded-full font-semibold hover:bg-primary-50 transition-colors">
                      {x.demos.ver} ↗
                    </TrackedLink>
                  ) : (
                    <span className="inline-block text-center text-sm text-gray-500 border border-dashed border-gray-300 px-5 py-2.5 rounded-full">{x.demos.enPreparacion}</span>
                  )}
                </div>
              </article>
            ))}
          </div>
          <p className="text-xs text-gray-500 text-center max-w-3xl mx-auto mt-6">{x.demos.nota}</p>
          <p className="text-center text-primary-700 font-semibold mt-4">{x.demos.mas}</p>
        </div>
      </section>

      <section id="paquetes" className="py-16 px-4 scroll-mt-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-black tracking-tight text-primary-700 mb-4 text-center">{x.paquetes.title}</h2>
          <p className="text-gray-600 text-center max-w-3xl mx-auto mb-10 leading-relaxed">{x.paquetes.intro}</p>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
            {x.paquetes.items.map((p) => (
              <div key={p.id} className={`rounded-2xl p-6 flex flex-col border ${p.destacado ? "border-accent-500 shadow-lg ring-1 ring-accent-500/30 bg-white" : "border-gray-100 shadow-sm bg-white"}`}>
                <h3 className="text-xl font-black text-primary-700">{p.nombre}</h3>
                <p className="text-sm text-gray-600 mt-1 mb-4">{p.lema}</p>
                <p className="text-lg font-bold text-accent-600">{p.precio}</p>
                {p.nota && <p className="text-xs text-gray-500 mt-1">{p.nota}</p>}
                <ul className="space-y-2 text-sm text-gray-700 my-5 grow">
                  {p.checks.map((k) => <li key={k} className={k.startsWith("·") ? "pl-4 text-gray-600" : ""}>{k.startsWith("·") ? k : `✓ ${k}`}</li>)}
                </ul>
                <TrackedLink
                  href={p.href.startsWith("/") ? ruta(p.href, lang) : p.href}
                  ctaId={`pintores-paquete-${p.id}`}
                  location="paquetes"
                  type="contact"
                  text={p.cta}
                  className={p.destacado ? BTN_PRIMARY : "inline-block text-center border-2 border-primary-600 text-primary-700 px-6 py-3 rounded-full font-semibold hover:bg-primary-50 transition-colors"}
                >
                  {p.cta}
                </TrackedLink>
              </div>
            ))}
          </div>
          <p className="text-xs text-gray-500 text-center max-w-3xl mx-auto mt-6">{x.paquetes.pie}</p>
        </div>
      </section>

      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-black tracking-tight text-primary-700 mb-4 text-center">{x.promesa.title}</h2>
          <p className="text-gray-600 text-center max-w-3xl mx-auto mb-10 leading-relaxed">{x.promesa.intro}</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {x.promesa.items.map((p, i) => (
              <div key={p.t} className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm">
                <Icono i={[1, 2, 5, 5][i] ?? 1} />
                <h3 className="font-bold text-primary-700 mb-2">{p.t}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{p.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-black tracking-tight text-primary-700 mb-4 text-center">{x.ia.title}</h2>
          <p className="text-gray-600 leading-relaxed mb-4">{x.ia.texto}</p>
          <p className="mb-4"><Link href={ruta("/oferta-seo-geo-gbp/", lang)} className="text-accent-600 font-semibold hover:underline">{x.ia.enlace} →</Link></p>
          <p className="text-xs text-gray-500">
            {x.ia.fuentesLabel}:{" "}
            {x.ia.fuentes.map((f, i) => (
              <span key={f.href}>{i > 0 && " · "}<a href={f.href} target="_blank" rel="noopener noreferrer" className="underline">{f.t}</a></span>
            ))}
          </p>
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

      <section id="diagnostico" className="py-16 px-4 bg-primary-50 border-y border-primary-100 scroll-mt-20">
        <span id="presupuesto" />
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-black tracking-tight text-primary-700 mb-3 text-center">{x.diagnostico.title}</h2>
          <p className="text-gray-600 text-center mb-8 leading-relaxed">{x.diagnostico.intro}</p>
          <div className="bg-white rounded-2xl p-6 text-gray-900 shadow-xl">
            <h3 className="text-xl font-bold text-primary-700 mb-1">{c.formTitle}</h3>
            <p className="text-sm text-gray-500 mb-4">{c.formSub}</p>
            <ContactForm formType="landing-pintores" lang={lang} messageLabel={c.formMsgLabel} messagePlaceholder={c.formMsgPh} submitLabel={c.formSubmit} />
          </div>
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
