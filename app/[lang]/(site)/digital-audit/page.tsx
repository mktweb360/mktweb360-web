import { ContactForm } from "@/components/ContactForm";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { alternatesFor } from "@/lib/i18n/routes";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const isEn = lang === "en";
  return {
    title: isEn
      ? "Digital Audit for Businesses: Full Diagnosis"
      : "Audit digital : diagnostic numérique complet",
    description: isEn
      ? "Complete digital audit for businesses. SEO, speed, competition and tracking analysis with a detailed report and prioritised action plan."
      : "Audit digital complet pour entreprises. Analyse SEO, vitesse, concurrence et tracking avec rapport détaillé et plan d'action priorisé.",
    alternates: alternatesFor(`/${lang}/digital-audit/`) ?? {
      canonical: `https://www.mktweb360.com/${lang}/digital-audit/`,
    },
  };
}


const WHAT_IS = {
  en: {
    title: "What is a digital audit and what is it for?",
    paragraphs: [
      "A digital audit is a systematic and complete analysis of every element that determines your company's online performance. It is the essential starting point before investing in any digital marketing action.",
      "Without a prior diagnosis, any investment in SEO, advertising or social media is like driving blind. The audit tells you exactly where you are, where your opportunities lie and which actions will have the greatest impact for the least effort.",
    ],
  },
  fr: {
    title: "Qu'est-ce qu'un audit digital et à quoi sert-il ?",
    paragraphs: [
      "Un audit digital est une analyse systématique et complète de tous les éléments qui déterminent la performance en ligne de votre entreprise. C'est le point de départ indispensable avant d'investir dans toute action de marketing digital.",
      "Sans diagnostic préalable, tout investissement en SEO, en publicité ou sur les réseaux sociaux revient à conduire les yeux fermés. L'audit vous indique précisément où vous en êtes, où se trouvent vos opportunités et quelles actions auront le plus d'impact pour le moins d'effort.",
    ],
  },
};

const AREAS = {
  en: {
    title: "What we analyse",
    items: [
      { title: "Technical SEO", desc: "Indexing, crawling, site architecture, structured data, canonicals, Core Web Vitals and server errors." },
      { title: "Content", desc: "Quality, relevance and optimisation of your copy, orphan pages, keyword cannibalisation and content opportunities." },
      { title: "Speed and performance", desc: "PageSpeed, loading time, render-blocking resources, images and hosting. Analysis on both mobile and desktop." },
      { title: "Competition", desc: "Who outperforms you on Google and why. The strategies that are working in your sector and how to beat them." },
      { title: "Social media", desc: "Presence, engagement, brand consistency and opportunities for improvement on every network relevant to your business." },
      { title: "Web analytics", desc: "Google Analytics / GA4 configuration, conversions, funnels and the reliability of the data you are measuring." },
    ],
  },
  fr: {
    title: "Ce que nous analysons",
    items: [
      { title: "SEO technique", desc: "Indexation, exploration, architecture du site, données structurées, balises canoniques, Core Web Vitals et erreurs serveur." },
      { title: "Contenus", desc: "Qualité, pertinence et optimisation des textes, pages orphelines, cannibalisation de mots-clés et opportunités de contenu." },
      { title: "Vitesse et performance", desc: "PageSpeed, temps de chargement, ressources bloquantes, images et hébergement. Analyse sur mobile et sur ordinateur." },
      { title: "Concurrence", desc: "Qui vous devance sur Google et pourquoi. Les stratégies qui fonctionnent dans votre secteur et comment les dépasser." },
      { title: "Réseaux sociaux", desc: "Présence, engagement, cohérence de marque et pistes d'amélioration sur chaque réseau pertinent pour votre activité." },
      { title: "Analytique web", desc: "Configuration de Google Analytics / GA4, conversions, entonnoirs et fiabilité des données que vous mesurez." },
    ],
  },
};

const PHASES = {
  en: {
    title: "What the process looks like",
    items: [
      { num: "01", title: "Information gathering", desc: "Access to your tools (Search Console, Analytics, Ads) and a study of your sector, competitors and business objectives." },
      { num: "02", title: "In-depth analysis", desc: "Technical and strategic review of every component of your digital presence. This process takes between 5 and 7 working days." },
      { num: "03", title: "Preparing the report", desc: "A complete document with findings, problems ranked by priority and impact, and actionable recommendations." },
      { num: "04", title: "Presentation session", desc: "An online meeting to explain the results, answer your questions and agree together on the first steps to take." },
    ],
  },
  fr: {
    title: "Comment se déroule le processus",
    items: [
      { num: "01", title: "Collecte d'informations", desc: "Accès à vos outils (Search Console, Analytics, Ads) et étude de votre secteur, de votre concurrence et de vos objectifs commerciaux." },
      { num: "02", title: "Analyse approfondie", desc: "Revue technique et stratégique de toutes les composantes de votre présence digitale. Cette étape prend entre 5 et 7 jours ouvrés." },
      { num: "03", title: "Rédaction du rapport", desc: "Un document complet avec les constats, les problèmes classés par priorité et par impact, et des recommandations directement applicables." },
      { num: "04", title: "Séance de présentation", desc: "Une réunion en ligne pour expliquer les résultats, répondre à vos questions et définir ensemble les premières étapes." },
    ],
  },
};

const WHEN = {
  en: {
    title: "When a digital marketing audit makes sense",
    paragraphs: [
      "There are moments when an audit saves a great deal of money: before increasing your advertising budget, before redesigning or migrating your website, when traffic falls for no clear reason or when the website gets visits but does not generate enquiries. It is also the logical step when changing agency: it gives you an objective snapshot of your starting point so you can measure what is achieved afterwards.",
      "The audit does not replace strategy, but it makes it possible: with a prioritised diagnosis you know what to fix first, what can wait and which actions are not worth doing yet.",
    ],
  },
  fr: {
    title: "Quand réaliser un audit de marketing digital",
    paragraphs: [
      "Il existe des moments où un audit fait économiser beaucoup d'argent : avant d'augmenter le budget publicitaire, avant de refondre ou de migrer le site, lorsque le trafic baisse sans cause apparente ou lorsque le site reçoit des visites mais ne génère pas de prises de contact. C'est aussi l'étape logique lorsque vous changez d'agence : il vous donne une photographie objective du point de départ pour pouvoir mesurer ensuite ce qui est obtenu.",
      "L'audit ne remplace pas la stratégie, mais il la rend possible : grâce à un diagnostic priorisé, vous savez quoi corriger en premier, ce qui peut attendre et quelles actions ne valent pas encore la peine d'être menées.",
    ],
  },
};

const PROBLEMS = {
  en: {
    title: "The problems we find most often in an audit",
    items: [
      { label: "Broken measurement", text: "forms or WhatsApp clicks that are not recorded as conversions, so nobody knows which channel brings in customers." },
      { label: "Pages competing with each other", text: "two or more URLs targeting the same search, which splits relevance so that none of them manages to rank." },
      { label: "Poorly planned redirects after a migration", text: "old URLs with history pointing to generic pages and losing what they had earned." },
      { label: "Heavy images and resources", text: "hero images weighing several megabytes that push up loading times on mobile, precisely where most customers search." },
      { label: "Headlines that ignore what the customer searches for", text: "catchy slogans in the H1 and title that do not tell Google which service the page offers." },
      { label: "Expired offers still on display", text: "old promotions on home pages or banners that undermine credibility." },
    ],
  },
  fr: {
    title: "Les problèmes que nous rencontrons le plus souvent lors d'un audit",
    items: [
      { label: "Mesure défaillante", text: "des formulaires ou des clics WhatsApp qui ne sont pas enregistrés comme conversions, si bien que personne ne sait quel canal apporte des clients." },
      { label: "Des pages qui se font concurrence", text: "deux URL ou plus travaillent la même recherche, ce qui divise la pertinence et empêche chacune de se positionner." },
      { label: "Des redirections mal pensées après une migration", text: "d'anciennes URL dotées d'un historique qui pointent vers des pages génériques et perdent ce qu'elles avaient acquis." },
      { label: "Des images et des ressources trop lourdes", text: "des visuels d'accueil de plusieurs mégaoctets qui font exploser le temps de chargement sur mobile, là où cherchent la plupart des clients." },
      { label: "Des titres sans la recherche du client", text: "des slogans accrocheurs dans le H1 et la balise title qui n'indiquent pas à Google quel service propose la page." },
      { label: "Des offres expirées encore visibles", text: "d'anciennes promotions en page d'accueil ou dans des bannières qui nuisent à la crédibilité." },
    ],
  },
};

const DELIVERABLES = {
  en: {
    title: "What you receive",
    items: [
      "Detailed report with all findings organised by area and level of impact",
      "Prioritised action plan with improvements ranked by ease and expected impact",
      "Online presentation session to explain the report and resolve all your questions",
      "List of quick wins: low-effort actions you can implement straight away",
    ],
  },
  fr: {
    title: "Ce que vous recevez",
    items: [
      "Un rapport détaillé avec tous les constats classés par domaine et par niveau d'impact",
      "Un plan d'action priorisé, avec les améliorations ordonnées selon leur facilité et l'impact attendu",
      "Une séance de présentation en ligne pour expliquer le rapport et répondre à toutes vos questions",
      "Une liste de gains rapides : des actions peu coûteuses en effort que vous pouvez mettre en œuvre immédiatement",
    ],
  },
};

const FOR_WHOM = {
  en: {
    title: "Who is this audit for?",
    items: [
      "Companies that have been online for some time but are not getting organic results",
      "Businesses that have just launched a website and want to get things right from the start",
      "Companies that are changing their digital strategy and want to know where they stand",
      "In-house teams that want an external, objective second opinion",
      "Businesses that have suffered drops in traffic or positioning with no clear cause",
    ],
  },
  fr: {
    title: "À qui s'adresse cet audit ?",
    items: [
      "Aux entreprises présentes en ligne depuis un certain temps mais qui n'obtiennent pas de résultats organiques",
      "Aux entreprises qui viennent de lancer un site et veulent partir sur de bonnes bases",
      "Aux entreprises qui changent de stratégie digitale et veulent savoir où elles en sont",
      "Aux équipes internes qui souhaitent un second avis externe et objectif",
      "Aux entreprises qui ont subi des baisses de trafic ou de positionnement sans cause claire",
    ],
  },
};

export default async function Page({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const isEn = lang === "en";

  const L = isEn ? "en" : "fr";
  const whatIs = WHAT_IS[L];
  const areas = AREAS[L];
  const phases = PHASES[L];
  const when = WHEN[L];
  const problems = PROBLEMS[L];
  const deliverables = DELIVERABLES[L];
  const forWhom = FOR_WHOM[L];

  const includes = isEn
    ? [
        "Complete technical SEO audit",
        "Page speed and Core Web Vitals analysis",
        "Content and keyword gap analysis",
        "Competitor analysis",
        "Social media and Google Business Profile audit",
        "GA4 and tracking configuration review",
        "Detailed report with findings and recommendations",
        "Prioritised action plan: quick wins and strategic improvements",
      ]
    : [
        "Audit technique SEO complet",
        "Analyse de vitesse et Core Web Vitals",
        "Analyse de contenu et lacunes de mots-clés",
        "Analyse de la concurrence",
        "Audit des réseaux sociaux et Google Business Profile",
        "Révision de la configuration GA4 et du tracking",
        "Rapport détaillé avec constats et recommandations",
        "Plan d'action priorisé : gains rapides et améliorations stratégiques",
      ];

  const metrics = isEn
    ? [
        { value: "SEO", label: "technical audit" },
        { value: "Speed", label: "Core Web Vitals" },
        { value: "Competition", label: "analysis" },
        { value: "Report", label: "with action plan" },
      ]
    : [
        { value: "SEO", label: "audit technique" },
        { value: "Vitesse", label: "Core Web Vitals" },
        { value: "Concurrence", label: "analyse" },
        { value: "Rapport", label: "avec plan d'action" },
      ];

  return (
    <>
      <section className="bg-gradient-to-br from-primary-700 to-primary-900 text-white">
        <div className="max-w-6xl mx-auto px-4 py-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <Breadcrumbs
              crumbs={[
                { label: isEn ? "Home" : "Accueil", href: `/${lang}/` },
                { label: isEn ? "Digital Audit" : "Audit Digital" },
              ]}
            />
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight mt-4">
              {isEn ? "Complete digital audit" : "Audit digital complet"}<br />
              <span className="text-accent-400">
                {isEn ? "know exactly where you stand" : "sachez exactement où vous en êtes"}
              </span>
            </h1>
            <p className="text-xl text-primary-200 mb-8 leading-relaxed">
              {isEn
                ? "Before investing more in digital marketing, you need to know exactly what is working and what is not. Our digital audit gives you a complete diagnosis and a clear action plan."
                : "Avant d'investir davantage dans le marketing digital, vous devez savoir exactement ce qui fonctionne et ce qui ne fonctionne pas. Notre audit digital vous donne un diagnostic complet et un plan d'action clair."}
            </p>
            <a
              href={`/${lang}/contact/`}
              className="bg-accent-500 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-accent-600 transition-colors"
            >
              {isEn ? "Get a free quote" : "Demander un devis"}
            </a>
          </div>
        </div>
      </section>

      <section className="bg-primary-600 py-6 px-4">
        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 text-center text-white">
          {metrics.map((m) => (
            <div key={m.label}>
              <div className="text-xl font-bold text-accent-400">{m.value}</div>
              <div className="text-xs text-primary-200 mt-1">{m.label}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-primary-600 mb-8 text-center">
            {isEn ? "What's included in the audit" : "Ce qui est inclus dans l'audit"}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {includes.map((item) => (
              <div key={item} className="flex items-center gap-3 bg-white rounded-xl px-5 py-4 shadow-sm border border-gray-100">
                <span className="text-accent-500 font-bold shrink-0">✓</span>
                <span className="text-gray-700 text-sm">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-primary-600 mb-6">{whatIs.title}</h2>
          {whatIs.paragraphs.map((p) => (
            <p key={p} className="text-gray-700 leading-relaxed mb-4">{p}</p>
          ))}
          <h2 className="text-3xl font-bold text-primary-600 mt-12 mb-8">{areas.title}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {areas.items.map((a) => (
              <div key={a.title} className="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
                <h3 className="font-bold text-primary-600 mb-1">{a.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{a.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-primary-600 mb-8 text-center">{phases.title}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {phases.items.map((f) => (
              <div key={f.num} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                <span className="inline-block text-3xl font-bold text-accent-500 mb-3">{f.num}</span>
                <h3 className="font-bold text-primary-600 text-lg mb-2">{f.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-primary-600 mb-6">{when.title}</h2>
          {when.paragraphs.map((p) => (
            <p key={p} className="text-gray-700 leading-relaxed mb-4">{p}</p>
          ))}
          <h2 className="text-3xl font-bold text-primary-600 mt-12 mb-6">{problems.title}</h2>
          <ul className="space-y-3 text-gray-700 leading-relaxed">
            {problems.items.map((pr) => (
              <li key={pr.label} className="flex gap-3">
                <span className="text-accent-500 font-bold shrink-0">✓</span>
                <span><strong>{pr.label}{isEn ? ":" : " :"}</strong> {pr.text}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
            <h2 className="text-2xl font-bold text-primary-600 mb-4">{deliverables.title}</h2>
            <ul className="space-y-3">
              {deliverables.items.map((i) => (
                <li key={i} className="flex gap-3 text-gray-700 text-sm leading-relaxed">
                  <span className="text-accent-500 font-bold shrink-0">✓</span>{i}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
            <h2 className="text-2xl font-bold text-primary-600 mb-4">{forWhom.title}</h2>
            <ul className="space-y-3">
              {forWhom.items.map((i) => (
                <li key={i} className="flex gap-3 text-gray-700 text-sm leading-relaxed">
                  <span className="text-accent-500 font-bold shrink-0">✓</span>{i}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-primary-600 text-white">
        <div className="max-w-3xl mx-auto text-center mb-10">
          <h2 className="text-3xl font-bold mb-4">
            {isEn ? "Your best customer doesn't know you yet" : "Votre meilleur client ne vous connaît pas encore"}
          </h2>
          <p className="text-primary-200">
            {isEn ? "Tell us about your project. We respond within 24 hours." : "Parlez-nous de votre projet. Nous répondons dans les 24 heures."}
          </p>
        </div>
        <div className="max-w-3xl mx-auto bg-white rounded-2xl p-8">
          <ContactForm formType={`${lang}-digital-audit`} />
        </div>
      </section>
    </>
  );
}
