import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ContactForm } from "@/components/ContactForm";
import { RelatedArticles } from "@/components/RelatedArticles";
import { alternatesFor, langSlug } from "@/lib/i18n/routes";

// 09/10/2026 — EN/FR de /consultor-seo/. Esta carpeta sirve /en/seo-consultant/;
// /fr/consultant-seo/ reexporta este módulo.
// La landing /oferta-seo-geo-gbp/ solo existe en ES: el enlace al paquete de 349 € apunta a la
// página de precios del idioma, que muestra ese mismo plan.

const BASE = "https://www.mktweb360.com";

const C = {
  en: {
    title: "SEO Consultant: SEO Strategy and Audit",
    description:
      "SEO consultancy for businesses: technical audit, keyword and site architecture strategy, a prioritised plan and ongoing support using Search Console data.",
    ogTitle: "SEO Consultant: SEO Strategy and Audit | Mkt Web 360",
    ogDescription:
      "Diagnosis, strategy and an SEO action plan with senior judgement. For in-house teams, development agencies and businesses that want to decide with data.",
    ogAlt: "SEO consultancy — Mkt Web 360",
    home: "Home",
    crumb: "SEO consultant",
    h1: "An SEO consultant to decide with data",
    h1Accent: "what to do, in what order and why",
    intro:
      "SEO consultancy turns search engine optimisation into an actionable plan: a technical and content diagnosis, a keyword strategy by service and a prioritised roadmap that your team, your developer or we can carry out.",
    ctaPrimary: "Request a consultation",
    ctaSecondary: "See the method",
    whatTitle: "What an SEO consultant does",
    what: [
      "An SEO consultant analyses why a website gains or loses visibility on Google and defines which changes have the greatest impact on the business. It is not just a list of errors: a consultant separates what is urgent from what is cosmetic and explains each recommendation with its evidence.",
      "At Mkt Web 360, consultancy is led by a senior profile and supported by specialists in each area — technical, content, analytics — who come in at the point in the project where they are needed. That way you have a single point of contact and the depth of a team.",
      "We apply our own AI-assisted protocols to process more data in less time, always with expert review before every recommendation.",
    ],
    whenTitle: "When it makes sense to hire SEO consultancy",
    when: [
      "You have an in-house team or a developer and need clear SEO direction.",
      "You are going to redesign or migrate your website and do not want to lose the traffic you already have.",
      "Organic traffic has dropped and you want to know why before investing more.",
      "You want to validate what another agency or supplier is proposing with independent judgement.",
      "You are launching a new line of business and need to know what your customers are searching for.",
      "You invest in content and do not know which pieces generate business and which do not.",
    ],
    methodTitle: "How we run an SEO consultancy",
    methodSub: "Six phases, from diagnosis to reviewing results. Each one leaves a deliverable you can use even if we do not continue working together.",
    steps: [
      { step: "01", title: "Goals and starting point", desc: "Which services or products matter, what margin they leave and what data exists. We capture a dated baseline from Search Console and analytics so that we can measure afterwards." },
      { step: "02", title: "Technical audit", desc: "Crawling, indexing, canonicals, redirects, languages, structured data, internal linking and performance. Every error is verified live before we recommend anything." },
      { step: "03", title: "Keywords and architecture", desc: "Search research by service, grouped by intent. Each group has a single owning URL to avoid cannibalisation between pages." },
      { step: "04", title: "Real competition", desc: "We analyse who actually appears in the searches that matter to you, which pages rank and with how much authority, to separate an authority problem from a content problem." },
      { step: "05", title: "Prioritised plan", desc: "Actions ordered by impact, difficulty and timeframe: quick wins, structural changes and medium-term work, with owners and review dates." },
      { step: "06", title: "Support and review", desc: "We answer questions during implementation and compare the results with the baseline on the agreed dates to decide the next steps." },
    ],
    vsTitle: "Consultancy or an ongoing SEO service",
    vs: "If you have someone to carry out the work, consultancy is the most efficient way to direct SEO. If you prefer us to take care of everything — content, technical changes, monitoring and the Google Business Profile listing — the ongoing service includes month-by-month execution.",
    linkSeo: "SEO service →",
    linkPack: "SEO + GEO + Google Business Profile for €349/month + VAT →",
    linkAudit: "Free SEO audit →",
    notTitle: "What we don't do",
    not: [
      "Promise specific positions on Google.",
      "Recommend changes without verifying their cause on the website.",
      "Present tool estimates as if they were real data.",
      "Create pages in bulk without original content or demand to justify them.",
    ],
    faqTitle: "Frequently asked questions about SEO consultancy",
    faqs: [
      { q: "What is the difference between an SEO consultant and an SEO agency?", a: "Consultancy focuses on diagnosis, strategy and decision-making: what needs to be done, in what order and why. The execution can stay with your team, your developer or us. An agency service also includes ongoing execution (content, technical changes, links and monitoring). If you already have someone to carry out the work, consultancy is usually the most efficient option." },
      { q: "What do I receive at the end of an SEO consultancy?", a: "A report with the findings separated by type (technical, content, authority), the evidence for each one, its probable cause and its impact, plus a plan prioritised by impact, difficulty and timeframe. Each recommendation states which page or which part of the site it affects, so that your team can implement it without guesswork." },
      { q: "What data do you work with?", a: "With the primary source whenever possible: Google Search Console, Google Analytics 4 and your business data (enquiries, sales, leads). Third-party tools such as Semrush or the Google Ads Keyword Planner provide useful estimates for comparing and prioritising, and we treat them as estimates, not as measurements." },
      { q: "Can you guarantee first position on Google?", a: "No. Nobody can guarantee rankings on Google, and you should be wary of anyone who does. What we can commit to is a clear method, data-based decisions, transparency about what is done and why, and monitoring with metrics that let you check progress." },
      { q: "How long does it take to see results?", a: "Technical changes are reflected in crawling and indexing within weeks; ranking improvements for competitive searches usually take months. It depends on the starting point, the competition in your sector and how quickly the plan is implemented. That is why we set review dates and always compare against a baseline." },
      { q: "Does the consultancy include GEO (visibility in AI assistants)?", a: "Yes, if you are interested. We review how AI assistants cite or mention your brand, which sources they use to make recommendations in your sector, and which content and entity profiles should be strengthened. It is a natural extension of SEO and shares much of the groundwork." },
    ],
    contactTitle: "Tell us about your case",
    contactSub: "Let us know your website and what you want to achieve. We will reply with a proposal covering scope and timescales.",
    related: "More about SEO and rankings",
    schemaName: "SEO consultancy",
    schemaType: "Search engine optimisation consultancy",
    schemaDesc: "SEO consultancy: technical and content audit, keyword research, site architecture, a prioritised action plan and support with results reviews.",
    country: "Spain",
  },
  fr: {
    title: "Consultant SEO : stratégie et audit SEO",
    description:
      "Conseil SEO pour entreprises : audit technique, stratégie de mots-clés et d'architecture, plan priorisé et accompagnement avec les données de Search Console.",
    ogTitle: "Consultant SEO : stratégie et audit SEO | Mkt Web 360",
    ogDescription:
      "Diagnostic, stratégie et plan d'action SEO avec un regard senior. Pour les équipes internes, les agences de développement et les entreprises qui veulent décider avec des données.",
    ogAlt: "Conseil SEO — Mkt Web 360",
    home: "Accueil",
    crumb: "Consultant SEO",
    h1: "Un consultant SEO pour décider avec des données",
    h1Accent: "quoi faire, dans quel ordre et pourquoi",
    intro:
      "Le conseil SEO transforme le référencement en un plan exécutable : diagnostic technique et de contenus, stratégie de mots-clés par service et feuille de route priorisée que votre équipe, votre développeur ou nous-mêmes pouvons mettre en œuvre.",
    ctaPrimary: "Demander une mission de conseil",
    ctaSecondary: "Voir la méthode",
    whatTitle: "Ce que fait un consultant SEO",
    what: [
      "Un consultant SEO analyse pourquoi un site gagne ou perd en visibilité sur Google et définit quelles modifications ont le plus d'impact sur l'activité. Il ne se contente pas d'une liste d'erreurs : il distingue l'urgent du cosmétique et justifie chaque recommandation par des éléments probants.",
      "Chez Mkt Web 360, le conseil est piloté par un profil senior et s'appuie sur des spécialistes de chaque domaine — technique, contenus, analytique — qui interviennent au moment du projet où ils sont nécessaires. Vous avez ainsi un interlocuteur unique et la profondeur d'une équipe.",
      "Nous appliquons nos propres protocoles assistés par l'intelligence artificielle pour traiter plus de données en moins de temps, toujours avec une revue experte avant chaque recommandation.",
    ],
    whenTitle: "Quand faire appel à un conseil SEO",
    when: [
      "Vous avez une équipe interne ou un développeur et avez besoin d'une direction SEO claire.",
      "Vous allez refondre ou migrer votre site et ne voulez pas perdre le trafic que vous avez déjà.",
      "Le trafic organique a baissé et vous voulez savoir pourquoi avant d'investir davantage.",
      "Vous voulez valider ce que vous propose une autre agence ou un autre prestataire avec un regard indépendant.",
      "Vous lancez une nouvelle activité et devez savoir ce que recherchent vos clients.",
      "Vous investissez dans les contenus sans savoir lesquels génèrent du chiffre d'affaires et lesquels non.",
    ],
    methodTitle: "Comment nous menons une mission de conseil SEO",
    methodSub: "Six phases, du diagnostic à la revue des résultats. Chacune laisse un livrable que vous pouvez utiliser même si nous ne poursuivons pas ensemble.",
    steps: [
      { step: "01", title: "Objectifs et point de départ", desc: "Quels services ou produits comptent, quelle marge ils dégagent et quelles données existent. Nous enregistrons une situation de référence datée issue de Search Console et de l'analytique pour pouvoir mesurer ensuite." },
      { step: "02", title: "Audit technique", desc: "Exploration, indexation, balises canoniques, redirections, langues, données structurées, maillage interne et performance. Chaque erreur est vérifiée en conditions réelles avant toute recommandation." },
      { step: "03", title: "Mots-clés et architecture", desc: "Recherche des requêtes par service, regroupées par intention. Chaque groupe a une seule URL de référence pour éviter la cannibalisation entre les pages." },
      { step: "04", title: "Concurrence réelle", desc: "Nous analysons qui apparaît réellement sur les recherches qui vous intéressent, quelles pages se positionnent et avec quelle autorité, pour distinguer un problème d'autorité d'un problème de contenu." },
      { step: "05", title: "Plan priorisé", desc: "Des actions classées par impact, difficulté et délai : gains rapides, changements structurels et travail à moyen terme, avec responsables et dates de revue." },
      { step: "06", title: "Accompagnement et revue", desc: "Nous répondons à vos questions pendant la mise en œuvre et comparons les résultats à la situation de référence aux dates convenues pour décider des étapes suivantes." },
    ],
    vsTitle: "Conseil ou service SEO continu",
    vs: "Si vous avez quelqu'un pour exécuter, le conseil est la manière la plus efficace de piloter le SEO. Si vous préférez que nous nous occupions de tout — contenus, modifications techniques, suivi et fiche Google —, le service continu inclut la mise en œuvre mois après mois.",
    linkSeo: "Service de référencement SEO →",
    linkPack: "SEO + GEO + Google Business Profile pour 349 €/mois HT →",
    linkAudit: "Audit SEO gratuit →",
    notTitle: "Ce que nous ne faisons pas",
    not: [
      "Promettre des positions précises sur Google.",
      "Recommander des changements sans en vérifier la cause sur le site.",
      "Présenter des estimations d'outils comme s'il s'agissait de données réelles.",
      "Créer des pages en série sans contenu propre ni demande qui les justifie.",
    ],
    faqTitle: "Questions fréquentes sur le conseil SEO",
    faqs: [
      { q: "Quelle différence entre un consultant SEO et une agence SEO ?", a: "Le conseil se concentre sur le diagnostic, la stratégie et la prise de décision : ce qu'il faut faire, dans quel ordre et pourquoi. La mise en œuvre peut être assurée par votre équipe, votre développeur ou par nous. Un service d'agence inclut en plus l'exécution continue (contenus, modifications techniques, liens et suivi). Si vous avez déjà quelqu'un pour exécuter, le conseil est généralement l'option la plus efficace." },
      { q: "Que vais-je recevoir à la fin d'une mission de conseil SEO ?", a: "Un rapport avec les constats classés par type (technique, contenus, autorité), les éléments probants de chacun, sa cause probable et son impact, ainsi qu'un plan priorisé selon l'impact, la difficulté et le délai. Chaque recommandation indique la page ou la partie du site concernée, pour que votre équipe puisse l'appliquer sans interprétation." },
      { q: "Avec quelles données travaillez-vous ?", a: "Avec la source primaire chaque fois que possible : Google Search Console, Google Analytics 4 et les données de votre activité (demandes, ventes, leads). Les outils tiers comme Semrush ou le Planificateur de mots-clés de Google Ads fournissent des estimations utiles pour comparer et prioriser, et nous les traitons comme des estimations, pas comme des mesures." },
      { q: "Pouvez-vous garantir la première position sur Google ?", a: "Non. Personne ne peut garantir des positions sur Google, et méfiez-vous de quiconque le prétend. Ce sur quoi nous pouvons nous engager, c'est une méthode claire, des décisions fondées sur les données, la transparence sur ce qui est fait et pourquoi, et un suivi avec des indicateurs qui vous permettent de vérifier l'évolution." },
      { q: "Combien de temps faut-il pour voir des résultats ?", a: "Les modifications techniques se reflètent dans l'exploration et l'indexation en quelques semaines ; les améliorations de positionnement sur des recherches concurrentielles demandent généralement plusieurs mois. Cela dépend du point de départ, de la concurrence dans votre secteur et de la rapidité d'exécution du plan. C'est pourquoi nous fixons des dates de revue et comparons toujours avec une situation de référence." },
      { q: "Le conseil inclut-il le GEO (visibilité dans les assistants d'IA) ?", a: "Oui, si cela vous intéresse. Nous examinons comment les assistants d'IA citent ou mentionnent votre marque, quelles sources ils utilisent pour recommander dans votre secteur et quels contenus et profils d'entité il convient de renforcer. C'est un prolongement naturel du SEO, qui partage une bonne partie du travail de fond." },
    ],
    contactTitle: "Parlez-nous de votre cas",
    contactSub: "Indiquez votre site et ce que vous souhaitez obtenir. Nous vous répondons avec une proposition de périmètre et de délais.",
    related: "Plus sur le SEO et le positionnement",
    schemaName: "Conseil SEO",
    schemaType: "Conseil en référencement naturel",
    schemaDesc: "Conseil SEO : audit technique et de contenus, recherche de mots-clés, architecture du site, plan d'action priorisé et accompagnement avec revue des résultats.",
    country: "Espagne",
  },
};

function pathFor(lang: string) {
  return `/${lang}/${langSlug(lang, "seo-consultant")}/`;
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
      images: [{ url: "/og-seo.jpg", width: 1200, height: 630, alt: t.ogAlt }],
    },
  };
}

export default async function Page({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const t = lang === "fr" ? C.fr : C.en;
  const url = BASE + pathFor(lang);
  const href = (slug: string) => `/${lang}/${langSlug(lang, slug)}/`;

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: t.schemaName,
    serviceType: t.schemaType,
    provider: { "@id": "https://www.mktweb360.com/#organization" },
    areaServed: { "@type": "Country", name: t.country },
    description: t.schemaDesc,
    url,
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
        <div className="max-w-5xl mx-auto px-4 py-16">
          <Breadcrumbs crumbs={[{ label: t.home, href: `/${lang}/` }, { label: "SEO", href: href("seo-web-positioning") }, { label: t.crumb }]} />
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight mt-4">
            {t.h1}<br />
            <span className="text-accent-400">{t.h1Accent}</span>
          </h1>
          <p className="text-xl text-primary-200 mb-8 leading-relaxed max-w-3xl">{t.intro}</p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#contact" className="bg-accent-500 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-accent-600 transition-colors text-center">
              {t.ctaPrimary}
            </a>
            <a href="#method" className="border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white/10 transition-colors text-center">
              {t.ctaSecondary}
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-3xl font-bold text-primary-600 mb-6">{t.whatTitle}</h2>
            {t.what.map((p, i) => (
              <p key={p.slice(0, 40)} className={`text-gray-600 leading-relaxed${i < t.what.length - 1 ? " mb-4" : ""}`}>{p}</p>
            ))}
          </div>
          <div className="bg-primary-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-6">{t.whenTitle}</h3>
            <ul className="space-y-3">
              {t.when.map((w) => (
                <li key={w} className="flex gap-2 text-sm leading-relaxed">
                  <span className="text-accent-400 font-bold shrink-0">✓</span>
                  {w}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section id="method" className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary-600 mb-4">{t.methodTitle}</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">{t.methodSub}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {t.steps.map((s) => (
              <div key={s.step} className="flex gap-4 p-6 bg-white border border-gray-100 rounded-2xl shadow-sm">
                <span className="text-accent-500 font-bold text-3xl shrink-0 leading-none">{s.step}</span>
                <div>
                  <h3 className="font-bold text-primary-700 mb-2">{s.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-primary-50 border-y border-primary-100">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
          <div>
            <h2 className="text-2xl font-bold text-primary-600 mb-4">{t.vsTitle}</h2>
            <p className="text-gray-600 leading-relaxed mb-4">{t.vs}</p>
            <div className="flex flex-col gap-3">
              <Link href={href("seo-web-positioning")} className="text-accent-500 font-semibold hover:underline">{t.linkSeo}</Link>
              <Link href={href("seo-pricing")} className="text-accent-500 font-semibold hover:underline">{t.linkPack}</Link>
              <Link href={href("digital-audit")} className="text-accent-500 font-semibold hover:underline">{t.linkAudit}</Link>
            </div>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-primary-600 mb-4">{t.notTitle}</h2>
            <ul className="space-y-2 text-gray-600 text-sm leading-relaxed">
              {t.not.map((n) => <li key={n}>• {n}</li>)}
            </ul>
          </div>
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
        </div>
      </section>

      <section id="contact" className="py-16 px-4 bg-primary-600 text-white">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold mb-4 text-center">{t.contactTitle}</h2>
          <p className="text-primary-200 mb-8 text-center">{t.contactSub}</p>
          <ContactForm formType="consultor-seo" />
        </div>
      </section>

      <RelatedArticles category="SEO" title={t.related} />
    </>
  );
}
