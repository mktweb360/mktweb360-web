import type { Lang } from "@/lib/i18n";
import { ContactForm } from "@/components/ContactForm";
import Link from "next/link";

export default async function LangHomePage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang: langStr } = await params;
  const lang = langStr as Lang;

  const content = {
    en: {
      headline: "Digital Marketing Agency",
      subheadline: "for SMEs and Businesses",
      subtitle:
        "We help Spanish and international businesses grow online with proven digital marketing strategies. SEO, Google Ads, Social Media and Web Design.",
      cta: "Get a free quote",
      cta2: "View our services",
      servicesTitle: "Our Services",
      whyTitle: "Why Mkt Web 360",
      reasons: [
        { title: "Senior team", desc: "Over 10 years of experience in digital marketing for businesses of all sizes." },
        { title: "AI-powered", desc: "Our own AI protocols integrated into every service for faster, more precise results." },
        { title: "Exclusivity", desc: "We work with one client per sector per area. Your competition is not our client." },
        { title: "Transparency", desc: "Real reports, real metrics. We show you the good and the bad." },
      ],
      services: [
        { title: "SEO", desc: "Rank on the first page of Google with proven organic strategies.", href: `/en/seo-web-positioning/` },
        { title: "Google Ads", desc: "Generate leads from day one with optimised Google Ads campaigns.", href: `/en/google-ads-management/` },
        { title: "Web Design", desc: "Professional websites built to convert visitors into customers.", href: `/en/web-design/` },
        { title: "Online Stores", desc: "E-commerce without commissions or monthly fees.", href: `/en/online-store/` },
        { title: "GEO", desc: "Appear in ChatGPT, Perplexity and Gemini responses.", href: `/en/geo-generative-engine-optimization/` },
        { title: "AI Marketing", desc: "Our own AI protocols applied to every service.", href: `/en/ai-applied-marketing/` },
      ],
      ctaSection: {
        title: "Your best customer doesn't know you yet",
        subtitle: "Let's introduce you. Tell us about your project and we'll get back to you within 24 hours.",
      },
    },
    fr: {
      headline: "Agence de Marketing Digital",
      subheadline: "pour PME et Entreprises",
      subtitle:
        "Nous aidons les entreprises espagnoles et internationales à croître en ligne avec des stratégies de marketing digital éprouvées.",
      cta: "Obtenir un devis gratuit",
      cta2: "Voir nos services",
      servicesTitle: "Nos Services",
      whyTitle: "Pourquoi Mkt Web 360",
      reasons: [
        { title: "Équipe senior", desc: "Plus de 10 ans d'expérience en marketing digital pour des entreprises de toutes tailles." },
        { title: "IA intégrée", desc: "Nos propres protocoles IA intégrés dans chaque service pour des résultats plus rapides." },
        { title: "Exclusivité", desc: "Nous ne travaillons pas avec vos concurrents dans votre zone." },
        { title: "Transparence", desc: "Rapports réels, métriques réelles. Nous vous montrons tout." },
      ],
      services: [
        { title: "SEO", desc: "Positionnez-vous en première page de Google avec des stratégies organiques.", href: `/fr/seo-web-positioning/` },
        { title: "Google Ads", desc: "Générez des leads dès le premier jour avec des campagnes optimisées.", href: `/fr/google-ads-management/` },
        { title: "Création Web", desc: "Sites web professionnels conçus pour convertir les visiteurs.", href: `/fr/web-design/` },
        { title: "Boutiques en ligne", desc: "E-commerce sans commissions ni frais mensuels.", href: `/fr/online-store/` },
        { title: "GEO", desc: "Apparaissez dans les réponses de ChatGPT, Perplexity et Gemini.", href: `/fr/geo-generative-engine-optimization/` },
        { title: "Marketing IA", desc: "Nos propres protocoles IA appliqués à chaque service.", href: `/fr/ai-applied-marketing/` },
      ],
      ctaSection: {
        title: "Votre meilleur client ne vous connaît pas encore",
        subtitle: "Présentons-nous. Parlez-nous de votre projet et nous vous répondrons dans les 24 heures.",
      },
    },
  };

  const c = content[lang as keyof typeof content] ?? content.en;

  return (
    <>
      <section className="bg-gradient-to-br from-primary-700 to-primary-900 text-white">
        <div className="max-w-5xl mx-auto px-4 py-20 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
            {c.headline}
            <br />
            <span className="text-accent-400">{c.subheadline}</span>
          </h1>
          <p className="text-xl text-primary-200 mb-10 max-w-2xl mx-auto leading-relaxed italic">
            {c.subtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`/${lang}/contact/`}
              className="bg-accent-500 text-white px-10 py-5 rounded-full font-bold text-xl hover:bg-accent-600 transition-colors"
            >
              {c.cta}
            </a>
            <a
              href="#services"
              className="border-2 border-white text-white px-10 py-5 rounded-full font-bold text-xl hover:bg-white/10 transition-colors"
            >
              {c.cta2}
            </a>
          </div>
        </div>
      </section>

      <section className="bg-primary-600 py-6 px-4">
        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 text-center text-white">
          {[
            { value: "+10", label: lang === "en" ? "years experience" : "ans d'expérience" },
            { value: "National", label: lang === "en" ? "service across Spain" : "service en Espagne" },
            { value: "AI", label: lang === "en" ? "own protocols" : "protocoles propres" },
            { value: "1:1", label: lang === "en" ? "sector exclusivity" : "exclusivité sectorielle" },
          ].map((m) => (
            <div key={m.label}>
              <div className="text-xl font-bold text-accent-400">{m.value}</div>
              <div className="text-xs text-primary-200 mt-1">{m.label}</div>
            </div>
          ))}
        </div>
      </section>

      <section id="services" className="py-16 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary-600 mb-4">{c.servicesTitle}</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {c.services.map((s) => (
              <Link
                key={s.href}
                href={s.href}
                className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow group"
              >
                <h3 className="font-bold text-primary-600 mb-2 group-hover:text-accent-500 transition-colors">{s.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{s.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary-600 mb-4">{c.whyTitle}</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {c.reasons.map((r) => (
              <div key={r.title} className="bg-primary-50 rounded-2xl p-6 border border-primary-100">
                <h3 className="font-bold text-primary-600 mb-2">{r.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{r.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-primary-600 text-white">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-4">{c.ctaSection.title}</h2>
            <p className="text-primary-200">{c.ctaSection.subtitle}</p>
          </div>
          <div className="bg-white rounded-2xl p-8">
            <ContactForm formType={`home-${lang}`} />
          </div>
        </div>
      </section>
    </>
  );
}
