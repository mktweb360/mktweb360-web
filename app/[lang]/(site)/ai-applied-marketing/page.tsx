import { ContactForm } from "@/components/ContactForm";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { RelatedArticles } from "@/components/RelatedArticles";
import { alternatesFor } from "@/lib/i18n/routes";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const isEn = lang === "en";
  return {
    title: isEn
      ? "AI Applied to Digital Marketing | Mkt Web 360"
      : "IA Appliquée au Marketing Digital | Mkt Web 360",
    description: isEn
      ? "We integrate artificial intelligence into every digital marketing service. Our own AI protocols for faster, more precise results. Nationwide service from Spain."
      : "Nous intégrons l'intelligence artificielle dans chaque service de marketing digital. Nos propres protocoles IA pour des résultats plus rapides et plus précis.",
    alternates: alternatesFor(`/${lang}/ai-applied-marketing/`) ?? {
      canonical: `https://www.mktweb360.com/${lang}/ai-applied-marketing/`,
    },
  };
}

const IA_SERVICES_EN = [
  {
    title: "AI-powered SEO",
    desc: "Keyword analysis, opportunity detection and technical audits accelerated with AI tools. What used to take days, we now resolve in hours.",
  },
  {
    title: "AI-assisted content creation",
    desc: "Our own content creation protocol combining human editorial judgment with AI-assisted search intent analysis. More precision, less time.",
  },
  {
    title: "Predictive analytics",
    desc: "Data interpretation and behaviour pattern detection to anticipate which channels and messages will convert best.",
  },
  {
    title: "SEM and campaign optimisation",
    desc: "AI-assisted competitor analysis, segmentations and copy to reduce cost per conversion and improve Quality Score.",
  },
  {
    title: "Process automation",
    desc: "Automated workflows for reporting, position tracking, performance alerts and recurring content management.",
  },
  {
    title: "Strategy and decision-making",
    desc: "We process more data in less time to identify opportunities, detect threats and make better decisions than a traditional agency.",
  },
];

const IA_SERVICES_FR = [
  {
    title: "SEO boosté par IA",
    desc: "Analyse de mots-clés, détection d'opportunités et audits techniques accélérés avec des outils d'IA. Ce qui prenait des jours, nous le résolvons maintenant en heures.",
  },
  {
    title: "Création de contenu assistée par IA",
    desc: "Notre propre protocole de création de contenu combinant le jugement éditorial humain avec l'analyse d'intention de recherche assistée par IA. Plus de précision, moins de temps.",
  },
  {
    title: "Analytique prédictive",
    desc: "Interprétation des données et détection de modèles comportementaux pour anticiper quels canaux et messages convertiront le mieux.",
  },
  {
    title: "SEM et optimisation de campagnes",
    desc: "Analyse de concurrents, segmentations et copies assistées par IA pour réduire le coût par conversion et améliorer le Quality Score.",
  },
  {
    title: "Automatisation des processus",
    desc: "Flux de travail automatisés pour le reporting, le suivi des positions, les alertes de performance et la gestion des contenus récurrents.",
  },
  {
    title: "Stratégie et prise de décision",
    desc: "Nous traitons plus de données en moins de temps pour identifier des opportunités, détecter des menaces et prendre de meilleures décisions qu'une agence traditionnelle.",
  },
];

const FAQS_EN = [
  {
    q: "Is the content you create with AI original and high quality?",
    a: "Yes. AI is a working tool, not the final author. All texts, articles and copy go through human review and editing before publication. AI accelerates research and structure, but editorial judgment, brand tone and final quality are guaranteed by the team.",
  },
  {
    q: "How do I know AI won't harm my Google ranking?",
    a: "Google does not penalise AI-generated content — it penalises low-quality content, regardless of how it was created. Our protocols produce content that thoroughly answers the user's search intent, which is exactly what Google rewards.",
  },
  {
    q: "What AI tools do you use?",
    a: "We use a combination of proprietary tools and specialist platforms depending on the task: language models for analysis and content, semantic analysis tools for SEO, automation platforms for reporting and workflows, and data analysis tools for campaigns. We don't rely on a single tool.",
  },
  {
    q: "Does AI replace the human team?",
    a: "No. AI amplifies the team's capabilities but does not make strategic decisions, manage client relationships or take responsibility for results. All of that is handled by the human team. AI lets us do more and better, not less.",
  },
];

const FAQS_FR = [
  {
    q: "Le contenu que vous créez avec l'IA est-il original et de qualité ?",
    a: "Oui. L'IA est un outil de travail, pas l'auteur final. Tous les textes, articles et copies passent par une révision et édition humaine avant publication. L'IA accélère la recherche et la structure, mais le jugement éditorial, le ton de marque et la qualité finale sont garantis par l'équipe.",
  },
  {
    q: "Comment savoir que l'IA ne nuira pas à mon positionnement Google ?",
    a: "Google ne pénalise pas le contenu généré par IA — il pénalise le contenu de faible qualité, indépendamment de la façon dont il a été créé. Nos protocoles produisent du contenu qui répond en profondeur à l'intention de recherche de l'utilisateur, ce qui est exactement ce que Google récompense.",
  },
  {
    q: "Quels outils d'IA utilisez-vous ?",
    a: "Nous utilisons une combinaison d'outils propriétaires et de plateformes spécialisées selon la tâche : modèles de langage pour l'analyse et le contenu, outils d'analyse sémantique pour le SEO, plateformes d'automatisation pour le reporting et les flux de travail, et outils d'analyse de données pour les campagnes.",
  },
  {
    q: "L'IA remplace-t-elle l'équipe humaine ?",
    a: "Non. L'IA amplifie les capacités de l'équipe mais ne prend pas de décisions stratégiques, ne gère pas la relation client et n'assume pas la responsabilité des résultats. Tout cela est fait par l'équipe humaine. L'IA nous permet de faire plus et mieux, pas moins.",
  },
];

export default async function AiAppliedMarketingPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const isEn = lang === "en";

  const iaServices = isEn ? IA_SERVICES_EN : IA_SERVICES_FR;
  const faqs = isEn ? FAQS_EN : FAQS_FR;

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: isEn ? "AI Applied to Digital Marketing" : "IA Appliquée au Marketing Digital",
    provider: { "@type": "Organization", name: "Mkt Web 360 SLU", url: "https://www.mktweb360.com" },
    description: isEn
      ? "Integration of artificial intelligence into digital marketing services. Proprietary AI protocols for SEO, SEM, content creation and analytics."
      : "Intégration de l'intelligence artificielle dans les services de marketing digital. Protocoles IA propriétaires pour SEO, SEM, création de contenu et analytique.",
    areaServed: "Spain",
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  const metrics = isEn
    ? [
        { value: "Faster", label: "than a traditional agency" },
        { value: "More data", label: "analysed per project" },
        { value: "Own", label: "developed protocols" },
        { value: "Better", label: "strategic decisions" },
      ]
    : [
        { value: "Plus rapide", label: "qu'une agence traditionnelle" },
        { value: "Plus de données", label: "analysées par projet" },
        { value: "Propres", label: "protocoles développés" },
        { value: "Meilleures", label: "décisions stratégiques" },
      ];

  const aiDoesntReplace = isEn
    ? [
        "Strategic judgment from the senior team",
        "Sector knowledge and client understanding",
        "Direct relationship and ongoing communication",
        "Accountability for results",
        "Adaptation to each specific business",
      ]
    : [
        "Jugement stratégique de l'équipe senior",
        "Connaissance du secteur et du client",
        "Relation directe et communication continue",
        "Responsabilité sur les résultats",
        "Adaptation à chaque entreprise spécifique",
      ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-700 to-primary-900 text-white">
        <div className="max-w-6xl mx-auto px-4 py-16">
          <Breadcrumbs
            crumbs={[
              { label: isEn ? "Home" : "Accueil", href: `/${lang}/` },
              { label: isEn ? "AI Marketing" : "Marketing IA" },
            ]}
          />
          <div className="max-w-3xl mt-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              {isEn ? "The experience of a senior team." : "L'expérience d'une équipe senior."}<br />
              <span className="text-accent-400">
                {isEn ? "The precision of artificial intelligence." : "La précision de l'intelligence artificielle."}
              </span>
            </h1>
            <p className="text-xl text-primary-200 mb-8 leading-relaxed italic">
              {isEn
                ? "While you work, we make sure clients call you."
                : "Pendant que vous travaillez, nous faisons en sorte que les clients vous appellent."}
            </p>
            <p className="text-lg text-primary-100 mb-8 leading-relaxed">
              {isEn
                ? "We don't use AI like everyone else. We have developed our own protocols integrated into every service — to work faster, analyse more data and make better decisions than a traditional agency. And all of that feeds back into your results."
                : "Nous n'utilisons pas l'IA comme tout le monde. Nous avons développé nos propres protocoles intégrés dans chaque service — pour travailler plus vite, analyser plus de données et prendre de meilleures décisions qu'une agence traditionnelle. Et tout cela se répercute sur vos résultats."}
            </p>
            <a
              href={`/${lang}/contact/`}
              className="bg-accent-500 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-accent-600 transition-colors"
            >
              {isEn ? "Discover how we work" : "Découvrir notre méthode de travail"}
            </a>
          </div>
        </div>
      </section>

      {/* Metrics bar */}
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

      {/* IA Services grid */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary-600 mb-4">
              {isEn ? "AI integrated into every service" : "IA intégrée dans chaque service"}
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {isEn
                ? "Not an add-on tool. Part of the process from day one."
                : "Pas un outil supplémentaire. Partie intégrante du processus dès le premier jour."}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {iaServices.map((s) => (
              <div key={s.title} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="w-10 h-10 rounded-full bg-primary-50 flex items-center justify-center mb-4">
                  <svg className="w-5 h-5 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456Z" />
                  </svg>
                </div>
                <h3 className="font-bold text-primary-600 mb-2">{s.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why this matters */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-primary-600 mb-6">
                {isEn ? "Why this matters for your business" : "Pourquoi c'est important pour votre entreprise"}
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                {isEn
                  ? "A traditional agency analyses data manually, takes days to spot opportunities and weeks to implement changes. We process the same information in a fraction of the time."
                  : "Une agence traditionnelle analyse les données manuellement, met des jours à détecter les opportunités et des semaines à implémenter les changements. Nous traitons les mêmes informations en une fraction du temps."}
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                {isEn
                  ? "This translates into campaigns that are optimised sooner, content that ranks faster, and strategic decisions based on real data — not intuition."
                  : "Cela se traduit par des campagnes optimisées plus tôt, des contenus qui se positionnent plus rapidement, et des décisions stratégiques basées sur des données réelles — pas sur l'intuition."}
              </p>
              <blockquote className="border-l-4 border-accent-500 pl-6 italic text-primary-700">
                {isEn
                  ? '"Custom AI-developed methods integrated for the best performance on your project."'
                  : '"Méthodes développées personnalisées avec IA intégrées pour la meilleure performance sur votre projet."'}
              </blockquote>
            </div>
            <div className="bg-primary-600 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">
                {isEn ? "What AI does not replace" : "Ce que l'IA ne remplace pas"}
              </h3>
              <p className="text-primary-200 mb-6 text-sm leading-relaxed">
                {isEn
                  ? "AI amplifies human judgment — it does not replace it. Every strategy, decision and recommendation goes through the judgment of our team."
                  : "L'IA amplifie le jugement humain — elle ne le remplace pas. Chaque stratégie, décision et recommandation passe par le jugement de notre équipe."}
              </p>
              <ul className="space-y-3">
                {aiDoesntReplace.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm">
                    <span className="text-accent-400 font-bold shrink-0">✓</span>{item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Editorial section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-primary-600 mb-6">
            {isEn
              ? "What it really means to integrate AI into digital marketing"
              : "Ce que signifie réellement intégrer l'IA dans le marketing digital"}
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            {isEn
              ? "Most agencies that claim to use artificial intelligence mean using ChatGPT to write texts or Midjourney to generate images. That is not AI integration — it is using generic tools without criteria or protocol."
              : "La plupart des agences qui prétendent utiliser l'intelligence artificielle signifient utiliser ChatGPT pour rédiger des textes ou Midjourney pour générer des images. Ce n'est pas de l'intégration IA — c'est utiliser des outils génériques sans critère ni protocole."}
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            {isEn
              ? "At Mkt Web 360 we have developed our own protocols that integrate AI into every phase of the work: keyword analysis, technical audits, content creation, campaign optimisation, data interpretation and opportunity detection. Not as a substitute for human judgment but as an amplifier of the team's analytical capacity."
              : "Chez Mkt Web 360, nous avons développé nos propres protocoles qui intègrent l'IA dans chaque phase du travail : analyse de mots-clés, audits techniques, création de contenu, optimisation de campagnes, interprétation des données et détection d'opportunités. Pas comme substitut au jugement humain, mais comme amplificateur de la capacité analytique de l'équipe."}
          </p>
          <p className="text-gray-700 leading-relaxed">
            {isEn
              ? "The concrete result for the client is simple: the same results in less time, or better results in the same time. An SEO audit that used to take 3 days now takes 4 hours. A competitor analysis that was once superficial now covers 50 variables. A content strategy that was once based on intuition is now based on real-time search intent data."
              : "Le résultat concret pour le client est simple : les mêmes résultats en moins de temps, ou de meilleurs résultats dans le même temps. Un audit SEO qui prenait 3 jours prend maintenant 4 heures. Une analyse de concurrents autrefois superficielle couvre désormais 50 variables. Une stratégie de contenu autrefois basée sur l'intuition est maintenant basée sur des données d'intention de recherche en temps réel."}
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-primary-600 mb-8">
            {isEn ? "Frequently asked questions about AI in digital marketing" : "Questions fréquentes sur l'IA en marketing digital"}
          </h2>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <div key={faq.q} className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm">
                <h3 className="font-bold text-primary-700 mb-2">{faq.q}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-16 px-4 bg-primary-600 text-white">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-4">
              {isEn ? "Your best customer doesn't know you yet" : "Votre meilleur client ne vous connaît pas encore"}
            </h2>
            <p className="text-primary-200">
              {isEn
                ? "Let's introduce you. Tell us about your project and we'll explain how our AI methodology can accelerate your results."
                : "Présentons-nous. Parlez-nous de votre projet et nous vous expliquerons comment notre méthodologie IA peut accélérer vos résultats."}
            </p>
          </div>
          <div className="bg-white rounded-2xl p-8">
            <ContactForm formType={`${lang}-ai-marketing`} />
          </div>
        </div>
      </section>

      <RelatedArticles
        category="Marketing Digital"
        title={isEn ? "More about digital marketing and AI" : "Plus sur le marketing digital et l'IA"}
      />
    </>
  );
}
