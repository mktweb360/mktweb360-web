import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ContactForm } from "@/components/ContactForm";
import { RelatedArticles } from "@/components/RelatedArticles";
import { alternatesFor, langSlug } from "@/lib/i18n/routes";

// 09/10/2026 — EN/FR de /auditoria-digital/: auditoría SEO + GEO GRATUITA (48 h laborables por correo,
// 6 bloques + propuesta). Misma estructura, mismas promesas y mismo formulario que la versión ES.
// Esta carpeta sirve /en/digital-audit/; /fr/audit-digital/ reexporta este módulo.

const BASE = "https://www.mktweb360.com";

const C = {
  en: {
    title: "Free SEO Audit of Your Website in 48 Hours",
    description:
      "Free SEO and GEO audit: technical errors, keyword opportunities, visibility in AI assistants, competitors and an improvement plan with a proposal.",
    ogTitle: "Free SEO Audit of Your Website in 48 Hours | Mkt Web 360",
    ogDescription:
      "We email you an SEO and AI-visibility diagnosis of your website, with the 3 highest-impact actions and a proposal to carry them out.",
    home: "Home",
    crumb: "Free SEO audit",
    h1: "Free SEO audit of your website",
    h1Accent: "in 48 hours, straight to your inbox",
    intro:
      "We tell you what is holding your website back on Google and in AI assistants, which searches you can win and what you should do first. With an improvement plan and a proposal to put it into practice.",
    bullets: [
      "No cost and no obligation",
      "Reviewed by a specialist, not an automated report",
      "SEO + visibility in AI (GEO) in the same report",
    ],
    formTitle: "Request your audit",
    formSub: "We will send it to your inbox within 48 business hours at most.",
    placeholder:
      "What would you like to achieve with your website? (more clients in your area, selling online, appearing in AI…) Are you already investing in SEO or advertising?",
    submit: "I want my free audit",
    receiveTitle: "What you receive in the audit",
    receiveSub: "A clear report, without unnecessary jargon, that you can use even if you don't work with us.",
    deliverables: [
      { t: "Technical health", d: "The errors holding your website back most on Google, ranked by priority: indexing, crawling, mobile speed, structured data and broken links." },
      { t: "Current visibility", d: "Which searches you appear for today and in what positions. Data from external tools is flagged as an estimate." },
      { t: "10 keyword opportunities", d: "Real searches made by your customers where you can compete, each with the page on your website that should target it." },
      { t: "Visibility in AI assistants", d: "Whether AI assistants cite your website or mention your brand when someone looks for what you offer." },
      { t: "Your competitors", d: "Three competitors that appear ahead of you and what they are doing better." },
      { t: "Improvement plan and proposal", d: "The 3 highest-impact actions and a proposal with a plan and a price to carry them out, if you want us to do it." },
    ],
    howTitle: "How it works",
    steps: [
      { n: "01", t: "Leave us your website", d: "Fill in the form with the website you want audited and what you would like to achieve." },
      { n: "02", t: "We analyse it", d: "We review your website with professional tools and expert judgement. It is not an automated report: every finding is checked." },
      { n: "03", t: "We email it to you", d: "Within 48 business hours at most, you receive the report with the improvement plan and the proposal." },
      { n: "04", t: "You decide", d: "You can apply the improvements yourself or ask us to do it. No obligation." },
    ],
    whyTitle: "Why start with an audit",
    why: [
      "Before investing in SEO, advertising or a new website, it pays to know where you stand. The audit tells you what to fix first, what can wait and what is not worth doing yet.",
      "The problems we find most often are always similar: pages competing with each other for the same search, headlines that don't tell Google which service the page offers, tracking that doesn't record enquiries, images that push up loading times on mobile and poorly planned redirects after a migration.",
      "Today there is also a new layer: AI assistants. A website can appear as a source in their answers without the brand ever being named. The audit reviews that too.",
    ],
    pricingBefore: "If you then want us to take care of it, our ",
    pricingLink: "SEO plans and pricing",
    pricingAfter: " are published.",
    faqTitle: "Frequently asked questions",
    faqs: [
      { q: "Is the SEO audit really free?", a: "Yes. There is no cost and no obligation. At the end of the report we include a proposal for applying the improvements, in case you want us to do it; whether you accept it is entirely up to you." },
      { q: "How long does it take?", a: "You receive it by email within 48 business hours of your request at most." },
      { q: "Do you need access to my website or to Google Search Console?", a: "Not for the free audit: we work with what is publicly available. If you give us read access to Search Console, the diagnosis is more precise because it is based on your real Google data." },
      { q: "How is it different from a full digital audit?", a: "The free audit focuses on SEO and visibility in AI. If you also need a review of analytics, social media or advertising, mention it in the form and we will prepare a proposal for a full audit." },
      { q: "Which websites is it for?", a: "For the websites of companies, SMEs and professionals that sell products or provide services in Spain: corporate websites, service websites and online stores." },
    ],
    cta: "Request my free audit",
    related: "More about SEO and rankings",
    schemaName: "Free SEO and GEO audit",
    schemaType: "SEO audit",
    country: "Spain",
    offerDesc: "Report by email within 48 business hours at most",
  },
  fr: {
    title: "Audit SEO gratuit de votre site en 48 h",
    description:
      "Audit SEO et GEO gratuit : erreurs techniques, mots-clés à potentiel, visibilité dans les assistants d'IA, concurrence et plan d'amélioration avec proposition.",
    ogTitle: "Audit SEO gratuit de votre site en 48 h | Mkt Web 360",
    ogDescription:
      "Nous vous envoyons par e-mail un diagnostic SEO et de visibilité dans l'IA de votre site, avec les 3 actions les plus impactantes et une proposition pour les appliquer.",
    home: "Accueil",
    crumb: "Audit SEO gratuit",
    h1: "Audit SEO gratuit de votre site",
    h1Accent: "en 48 heures, dans votre boîte mail",
    intro:
      "Nous vous disons ce qui freine votre site sur Google et dans les assistants d'IA, quelles recherches vous pouvez gagner et par quoi commencer. Avec un plan d'amélioration et une proposition pour le mettre en œuvre.",
    bullets: [
      "Sans frais et sans engagement",
      "Vérifié par un spécialiste, pas un rapport automatique",
      "SEO + visibilité dans l'IA (GEO) dans le même rapport",
    ],
    formTitle: "Demandez votre audit",
    formSub: "Nous vous l'envoyons par e-mail dans un délai maximal de 48 heures ouvrées.",
    placeholder:
      "Que souhaitez-vous obtenir avec votre site ? (plus de clients dans votre zone, vendre en ligne, apparaître dans l'IA…) Investissez-vous déjà dans le SEO ou la publicité ?",
    submit: "Je veux mon audit gratuit",
    receiveTitle: "Ce que vous recevez dans l'audit",
    receiveSub: "Un rapport clair, sans jargon inutile, que vous pouvez utiliser même si vous ne travaillez pas avec nous.",
    deliverables: [
      { t: "État technique", d: "Les erreurs qui freinent le plus votre site sur Google, classées par priorité : indexation, exploration, vitesse sur mobile, données structurées et liens cassés." },
      { t: "Visibilité actuelle", d: "Sur quelles recherches vous apparaissez aujourd'hui et à quelles positions. Les données issues d'outils externes sont signalées comme des estimations." },
      { t: "10 opportunités de mots-clés", d: "De vraies recherches de vos clients sur lesquelles vous pouvez vous positionner, chacune avec la page de votre site qui devrait la travailler." },
      { t: "Visibilité dans les assistants d'IA", d: "Si les assistants d'IA citent votre site ou mentionnent votre marque lorsque quelqu'un cherche ce que vous proposez." },
      { t: "Votre concurrence", d: "Trois concurrents qui apparaissent devant vous et ce qu'ils font mieux." },
      { t: "Plan d'amélioration et proposition", d: "Les 3 actions les plus impactantes et une proposition avec un plan et un prix pour les mettre en œuvre, si vous souhaitez que nous nous en chargions." },
    ],
    howTitle: "Comment ça marche",
    steps: [
      { n: "01", t: "Vous nous indiquez votre site", d: "Vous remplissez le formulaire avec le site à auditer et ce que vous aimeriez obtenir." },
      { n: "02", t: "Nous l'analysons", d: "Nous examinons votre site avec des outils professionnels et un regard d'expert. Ce n'est pas un rapport automatique : chaque constat est vérifié." },
      { n: "03", t: "Nous vous l'envoyons par e-mail", d: "Dans un délai maximal de 48 heures ouvrées, vous recevez le rapport avec le plan d'amélioration et la proposition." },
      { n: "04", t: "Vous décidez", d: "Vous pouvez appliquer les améliorations vous-même ou nous demander de le faire. Sans engagement." },
    ],
    whyTitle: "Pourquoi commencer par un audit",
    why: [
      "Avant d'investir dans le SEO, la publicité ou un nouveau site, mieux vaut savoir où vous en êtes. L'audit vous indique quoi corriger en premier, ce qui peut attendre et ce qui ne vaut pas encore la peine d'être fait.",
      "Les problèmes que nous rencontrons le plus souvent se ressemblent toujours : des pages qui se font concurrence sur la même recherche, des titres qui n'indiquent pas à Google quel service propose la page, une mesure qui n'enregistre pas les prises de contact, des images qui font exploser le temps de chargement sur mobile et des redirections mal pensées après une migration.",
      "Il existe aujourd'hui une nouvelle dimension : les assistants d'IA. Un site peut apparaître comme source dans leurs réponses sans que la marque soit jamais citée. L'audit examine aussi cet aspect.",
    ],
    pricingBefore: "Si vous souhaitez ensuite que nous nous en chargions, nos ",
    pricingLink: "formules et tarifs SEO",
    pricingAfter: " sont publiés.",
    faqTitle: "Questions fréquentes",
    faqs: [
      { q: "L'audit SEO est-il vraiment gratuit ?", a: "Oui. Il n'a ni coût ni engagement. À la fin du rapport, nous incluons une proposition pour appliquer les améliorations, au cas où vous souhaiteriez que nous nous en chargions ; libre à vous de l'accepter ou non." },
      { q: "Combien de temps faut-il ?", a: "Vous le recevez par e-mail dans un délai maximal de 48 heures ouvrées après votre demande." },
      { q: "Avez-vous besoin d'un accès à mon site ou à Google Search Console ?", a: "Pas pour l'audit gratuit : nous travaillons à partir de ce qui est public. Si vous nous donnez un accès en lecture à Search Console, le diagnostic est plus précis, car il repose sur vos données Google réelles." },
      { q: "Quelle différence avec un audit digital complet ?", a: "L'audit gratuit porte sur le SEO et la visibilité dans l'IA. Si vous avez aussi besoin d'examiner l'analytique, les réseaux sociaux ou la publicité, indiquez-le dans le formulaire et nous vous préparerons une proposition d'audit complet." },
      { q: "Pour quels sites est-il conçu ?", a: "Pour les sites d'entreprises, de PME et de professionnels qui vendent ou proposent des services en Espagne : sites institutionnels, sites de services et boutiques en ligne." },
    ],
    cta: "Demander mon audit gratuit",
    related: "Plus sur le SEO et le positionnement",
    schemaName: "Audit SEO et GEO gratuit",
    schemaType: "Audit SEO",
    country: "Espagne",
    offerDesc: "Rapport par e-mail dans un délai maximal de 48 heures ouvrées",
  },
};

function pathFor(lang: string) {
  return `/${lang}/${langSlug(lang, "digital-audit")}/`;
}

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const t = lang === "fr" ? C.fr : C.en;
  const url = BASE + pathFor(lang);
  return {
    title: t.title,
    description: t.description,
    alternates: alternatesFor(pathFor(lang)) ?? { canonical: url },
    openGraph: {
      title: t.ogTitle,
      description: t.ogDescription,
      url,
      images: [{ url: "/og-auditoria-digital.jpg", width: 1200, height: 630 }],
    },
  };
}

export default async function Page({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const t = lang === "fr" ? C.fr : C.en;
  const url = BASE + pathFor(lang);

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: t.schemaName,
    serviceType: t.schemaType,
    provider: { "@id": "https://www.mktweb360.com/#organization" },
    areaServed: { "@type": "Country", name: t.country },
    url,
    offers: { "@type": "Offer", price: 0, priceCurrency: "EUR", description: t.offerDesc },
  };
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: t.faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <section className="bg-gradient-to-br from-primary-700 to-primary-900 text-white">
        <div className="max-w-6xl mx-auto px-4 py-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <Breadcrumbs crumbs={[{ label: t.home, href: `/${lang}/` }, { label: t.crumb }]} />
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight mt-4">
              {t.h1}<br />
              <span className="text-accent-400">{t.h1Accent}</span>
            </h1>
            <p className="text-xl text-primary-200 mb-6 leading-relaxed">{t.intro}</p>
            <ul className="space-y-2 text-primary-100">
              {t.bullets.map((b) => <li key={b}>✓ {b}</li>)}
            </ul>
          </div>
          <div id="request" className="bg-white rounded-2xl p-6 text-gray-900 shadow-xl">
            <h2 className="text-xl font-bold text-primary-700 mb-1">{t.formTitle}</h2>
            <p className="text-sm text-gray-500 mb-4">{t.formSub}</p>
            <ContactForm formType="auditoria" websiteRequired messagePlaceholder={t.placeholder} submitLabel={t.submit} />
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-primary-600 mb-4">{t.receiveTitle}</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">{t.receiveSub}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {t.deliverables.map((e, i) => (
              <div key={e.t} className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm">
                <span className="text-accent-500 font-bold text-2xl">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="font-bold text-primary-700 mt-2 mb-2">{e.t}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{e.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-primary-600 mb-10 text-center">{t.howTitle}</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {t.steps.map((p) => (
              <div key={p.n} className="text-center">
                <span className="inline-flex w-12 h-12 rounded-full bg-primary-600 text-white font-bold items-center justify-center mb-3">{p.n}</span>
                <h3 className="font-bold text-primary-700 mb-2">{p.t}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{p.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-primary-50 border-y border-primary-100">
        <div className="max-w-4xl mx-auto space-y-4 text-gray-700 leading-relaxed">
          <h2 className="text-2xl font-bold text-primary-600 mb-2">{t.whyTitle}</h2>
          {t.why.map((p) => <p key={p.slice(0, 40)}>{p}</p>)}
          <p>
            {t.pricingBefore}
            <Link href={`/${lang}/${langSlug(lang, "seo-pricing")}/`} className="text-accent-700 underline underline-offset-2">{t.pricingLink}</Link>
            {t.pricingAfter}
          </p>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-primary-600 mb-8 text-center">{t.faqTitle}</h2>
          <div className="space-y-4">
            {t.faqs.map((f) => (
              <details key={f.q} className="bg-white border border-gray-100 rounded-xl p-5 shadow-sm">
                <summary className="font-semibold text-primary-700 cursor-pointer">{f.q}</summary>
                <p className="text-gray-600 mt-3 leading-relaxed">{f.a}</p>
              </details>
            ))}
          </div>
          <div className="text-center mt-10">
            <a href="#request" className="inline-block bg-accent-500 hover:bg-accent-600 text-white px-8 py-4 rounded-full font-bold text-lg transition-colors">{t.cta}</a>
          </div>
        </div>
      </section>

      <RelatedArticles category="SEO" title={t.related} />
    </>
  );
}
