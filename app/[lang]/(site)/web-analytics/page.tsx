import { ContactForm } from "@/components/ContactForm";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import Link from "next/link";
import { alternatesFor, langSlug } from "@/lib/i18n/routes";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const isEn = lang === "en";
  return {
    title: isEn
      ? "Web Analytics for Data-Driven Decisions"
      : "Analytique web : décider avec les données",
    description: isEn
      ? "Professional web analytics service. GA4, GTM, business dashboards and conversion tracking. Make decisions based on real data."
      : "Service d'analytique web professionnel. GA4, GTM, tableaux de bord métier et suivi des conversions. Prenez des décisions basées sur des données réelles.",
    alternates: alternatesFor(`/${lang}/web-analytics/`) ?? {
      canonical: `https://www.mktweb360.com/${lang}/web-analytics/`,
    },
  };
}


const WHY = {
  en: {
    title: "Why web analytics is the foundation of any digital strategy",
    paragraphs: [
      "Most businesses have Google Analytics installed but do not use it to make decisions. Having data is not the same as having analytics. Real analytics connects the data with concrete actions: which channel to cut back, which page to optimise, which product to promote and when to increase your advertising investment.",
      "The most common problem is not a lack of data but the poor quality of the data that already exists. Unrecorded conversions, internal traffic contaminating the metrics, wrongly attributed traffic sources, events that never fire or duplicated data are errors that lead to the wrong decisions.",
      "We set up clean, reliable and business-oriented measurement — not vanity metrics. You will know how many leads each channel generates, what your real cost per conversion is, which content drives sales and where your users drop out of the buying process.",
    ],
  },
  fr: {
    title: "Pourquoi l'analytique web est la base de toute stratégie digitale",
    paragraphs: [
      "La plupart des entreprises ont installé Google Analytics, mais ne s'en servent pas pour prendre des décisions. Avoir des données n'est pas la même chose que faire de l'analytique. La véritable analytique relie les données à des actions concrètes : quel canal réduire, quelle page optimiser, quel produit mettre en avant, quand augmenter l'investissement publicitaire.",
      "Le problème le plus fréquent n'est pas le manque de données, mais la mauvaise qualité des données existantes. Conversions non enregistrées, trafic interne qui pollue les métriques, sources de trafic mal attribuées, événements qui ne se déclenchent pas ou données dupliquées : autant d'erreurs qui conduisent à de mauvaises décisions.",
      "Nous mettons en place une mesure propre, fiable et orientée business — pas des métriques de vanité. Vous saurez combien de leads génère chaque canal, quel est votre coût réel par conversion, quels contenus stimulent les ventes et à quel moment vos utilisateurs abandonnent le parcours d'achat.",
    ],
  },
};

const CONFIGURE_DELIVER = {
  en: {
    configureTitle: "What we configure",
    configure: [
      "Google Analytics 4 (GA4)",
      "Google Tag Manager (GTM)",
      "Conversion tracking",
      "Custom events",
      "Google Consent Mode v2",
      "Google Ads linking",
      "Integrated Search Console",
    ],
    deliverTitle: "What we deliver",
    deliver: [
      "Custom business dashboard",
      "Monthly performance report",
      "Traffic source analysis",
      "Detailed conversion funnel",
      "Automatic anomaly alerts",
      "Initial measurement audit",
      "Training in reading your data",
    ],
  },
  fr: {
    configureTitle: "Ce que nous configurons",
    configure: [
      "Google Analytics 4 (GA4)",
      "Google Tag Manager (GTM)",
      "Suivi des conversions",
      "Événements personnalisés",
      "Google Consent Mode v2",
      "Association avec Google Ads",
      "Search Console intégrée",
    ],
    deliverTitle: "Ce que nous livrons",
    deliver: [
      "Tableau de bord métier personnalisé",
      "Rapport mensuel de performance",
      "Analyse des sources de trafic",
      "Entonnoir de conversion détaillé",
      "Alertes automatiques en cas d'anomalie",
      "Audit initial de la mesure",
      "Formation à la lecture des données",
    ],
  },
};

const STEPS = {
  en: {
    title: "How we work",
    steps: [
      { num: "01", title: "Measurement audit", desc: "We analyse your current GA4, GTM and conversion tracking set-up. We identify incorrect data, missing events and opportunities for improvement." },
      { num: "02", title: "Technical set-up", desc: "We implement or fix GA4, configure GTM with all the tags you need, define the conversion events that matter to your business and activate Consent Mode v2." },
      { num: "03", title: "Dashboard and alerts", desc: "We build a custom dashboard with the metrics that matter to your business, not every metric available. We set up automatic alerts so anomalies are detected without checking the data manually." },
      { num: "04", title: "Report and training", desc: "Every month you receive a report with the key data interpreted: what has improved, what has worsened and which action we recommend. If you wish, we include training sessions so you can read the data yourself." },
    ],
  },
  fr: {
    title: "Notre méthode de travail",
    steps: [
      { num: "01", title: "Audit de la mesure", desc: "Nous analysons votre configuration actuelle de GA4, de GTM et du suivi des conversions. Nous identifions les données erronées, les événements manquants et les pistes d'amélioration." },
      { num: "02", title: "Configuration technique", desc: "Nous mettons en place ou corrigeons GA4, configurons GTM avec toutes les balises nécessaires, définissons les événements de conversion pertinents pour votre activité et activons le Consent Mode v2." },
      { num: "03", title: "Tableau de bord et alertes", desc: "Nous créons un tableau de bord personnalisé avec les métriques qui comptent pour votre entreprise, pas toutes celles qui existent. Nous configurons des alertes automatiques pour détecter les anomalies sans vérifier les données à la main." },
      { num: "04", title: "Rapport et formation", desc: "Chaque mois, vous recevez un rapport avec les données clés interprétées : ce qui s'est amélioré, ce qui s'est dégradé et l'action que nous recommandons. Si vous le souhaitez, nous incluons des sessions de formation pour que vous puissiez lire les données vous-même." },
    ],
  },
};

const QUESTIONS = {
  en: {
    title: "What you can learn from properly configured analytics",
    intro: "Professional analytics answers concrete business questions that directly affect your profitability:",
    items: [
      { q: "Which channel brings me the most customers?", a: "SEO, Google Ads, social media, email, direct — you will know exactly what share of your sales comes from each channel." },
      { q: "How much does it cost me to win a customer?", a: "Cost per lead and cost per sale broken down by channel and campaign. The most important metric for scaling what works." },
      { q: "Where do users abandon the buying process?", a: "The conversion funnel shows exactly at which step users leave and how many complete each stage." },
      { q: "Which pages generate the most sales?", a: "Not every page contributes equally. You will know which pages contribute most to final conversions." },
      { q: "Which devices do my customers use?", a: "Mobile, tablet or desktop — and how they behave differently on each. Key for prioritising optimisation." },
      { q: "Is my Ads investment generating a return?", a: "We link GA4 with Google Ads so you can see the real ROAS, not just clicks — including assisted conversions." },
    ],
  },
  fr: {
    title: "Ce qu'une analytique bien configurée vous permet de savoir",
    intro: "Une analytique professionnelle répond à des questions business concrètes qui ont un impact direct sur votre rentabilité :",
    items: [
      { q: "Quel canal m'apporte le plus de clients ?", a: "SEO, Google Ads, réseaux sociaux, emailing, accès direct : vous saurez exactement quelle part de vos ventes provient de chaque canal." },
      { q: "Combien me coûte l'acquisition d'un client ?", a: "Coût par lead et coût par vente ventilés par canal et par campagne. La métrique la plus importante pour développer ce qui fonctionne." },
      { q: "À quel moment l'utilisateur abandonne-t-il le parcours d'achat ?", a: "L'entonnoir de conversion montre précisément à quelle étape les utilisateurs partent et combien franchissent chaque phase." },
      { q: "Quelles pages génèrent le plus de ventes ?", a: "Toutes les pages ne contribuent pas de la même façon. Vous saurez lesquelles participent le plus aux conversions finales." },
      { q: "Quel appareil utilisent mes clients ?", a: "Mobile, tablette ou ordinateur, et leur comportement différent sur chacun. Un point clé pour prioriser l'optimisation." },
      { q: "Mon investissement Google Ads est-il rentable ?", a: "Nous associons GA4 à Google Ads pour mesurer le ROAS réel, et pas seulement les clics, conversions assistées comprises." },
    ],
  },
};

const FAQS = {
  en: [
    { q: "What is the difference between Google Analytics 4 and Universal Analytics?", a: "Universal Analytics was retired in July 2023. GA4 is the current standard and works differently: it measures events instead of sessions, has a more flexible data model and is designed to measure both websites and apps. If you still have UA data and want to migrate it or understand GA4, we help you with the transition." },
    { q: "What is Google Tag Manager and why do I need it?", a: "Google Tag Manager is a system that centralises all the tracking codes on your website (GA4, Google Ads, Meta Pixel, etc.) without touching the website code directly. It makes management easier, reduces errors and lets you implement new tags quickly. It is the foundation of professional measurement." },
    { q: "How do I know whether my current analytics is configured correctly?", a: "Most businesses have GA4 installed but with incorrect data: unrecorded conversions, internal traffic contaminating the data, wrongly attributed traffic sources or events that do not fire. We carry out an initial measurement audit that identifies every problem, and we prioritise them by impact." },
    { q: "What does the monthly report include?", a: "The monthly report includes traffic trends by channel, conversions by source, most visited pages, the complete conversion funnel, a comparison with the previous month and recommended actions. All in a readable format, not a raw data export." },
    { q: "How long does the initial GA4 and GTM set-up take?", a: "The standard technical implementation — audit, GA4 configuration, GTM with the necessary tags, definition of conversion events and activation of Consent Mode v2 — is completed in 2 to 4 weeks. The exact timeframe depends on the complexity of the website and the events to be measured. The first data review session usually takes place in the fifth week." },
    { q: "Does analytics still work if users reject cookies?", a: "With Google Consent Mode v2 activated, GA4 and Google Ads continue to operate in modelled form even when the user rejects consent. Google uses statistical models to estimate the behaviour of users who did not consent, maintaining measurement without breaching the GDPR. It is one of the first things we configure in every implementation." },
    { q: "Can I access the data myself or do I only receive the monthly report?", a: "Both options are compatible. We build the dashboard in Looker Studio (formerly Google Data Studio) with permanent, real-time access for you. The monthly report is a structured interpretation of that data with concrete recommended actions. If you would like training to read the data yourself, training sessions are included in the service." },
    { q: "Is web analytics useful if my business does not sell online?", a: "Especially useful. Businesses without e-commerce measure conversions such as phone calls, contact forms, bookings, quote requests or WhatsApp clicks. Each of these events is configured as a conversion in GA4 so you know which channel and which content generates the most real potential customers, not just visits." },
  ],
  fr: [
    { q: "Quelle est la différence entre Google Analytics 4 et Universal Analytics ?", a: "Universal Analytics a été retiré en juillet 2023. GA4 est la norme actuelle et fonctionne différemment : il mesure des événements plutôt que des sessions, dispose d'un modèle de données plus flexible et est conçu pour mesurer aussi bien les sites web que les applications. Si vous avez encore des données UA et souhaitez les migrer ou comprendre GA4, nous vous accompagnons dans la transition." },
    { q: "Qu'est-ce que Google Tag Manager et pourquoi en ai-je besoin ?", a: "Google Tag Manager est un système qui centralise tous les codes de suivi de votre site (GA4, Google Ads, Meta Pixel, etc.) sans toucher directement au code du site. Il facilite la gestion, réduit les erreurs et permet d'implémenter rapidement de nouvelles balises. C'est la base d'une mesure professionnelle." },
    { q: "Comment savoir si mon analytique actuelle est bien configurée ?", a: "La plupart des entreprises ont installé GA4, mais avec des données incorrectes : conversions non enregistrées, trafic interne qui pollue les données, sources de trafic mal attribuées ou événements qui ne se déclenchent pas. Nous réalisons un audit initial de la mesure qui identifie tous les problèmes, puis nous les priorisons selon leur impact." },
    { q: "Que contient le rapport mensuel ?", a: "Le rapport mensuel présente l'évolution du trafic par canal, les conversions par source, les pages les plus visitées, l'entonnoir de conversion complet, la comparaison avec le mois précédent et des recommandations d'action. Le tout dans un format lisible, et non une exportation brute de données." },
    { q: "Combien de temps prend la configuration initiale de GA4 et de GTM ?", a: "L'implémentation technique standard — audit, configuration de GA4, GTM avec les balises nécessaires, définition des événements de conversion et activation du Consent Mode v2 — est réalisée en 2 à 4 semaines. Le délai exact dépend de la complexité du site et des événements à mesurer. La première séance de revue des données a généralement lieu la cinquième semaine." },
    { q: "L'analytique fonctionne-t-elle si les utilisateurs refusent les cookies ?", a: "Avec le Consent Mode v2 de Google activé, GA4 et Google Ads continuent de fonctionner de manière modélisée, même lorsque l'utilisateur refuse son consentement. Google utilise des modèles statistiques pour estimer le comportement des utilisateurs qui n'ont pas consenti, ce qui maintient la mesure sans enfreindre le RGPD. C'est l'une des premières choses que nous configurons lors de chaque implémentation." },
    { q: "Puis-je accéder moi-même aux données ou est-ce que je reçois seulement le rapport mensuel ?", a: "Les deux sont compatibles. Nous créons le tableau de bord dans Looker Studio (anciennement Google Data Studio), avec un accès permanent et en temps réel pour vous. Le rapport mensuel est une interprétation structurée de ces données, accompagnée de recommandations d'action concrètes. Si vous souhaitez apprendre à lire les données vous-même, des sessions de formation sont incluses dans le service." },
    { q: "L'analytique web est-elle utile si mon entreprise ne vend pas en ligne ?", a: "Particulièrement utile. Les entreprises sans e-commerce mesurent des conversions comme les appels téléphoniques, les formulaires de contact, les réservations, les demandes de devis ou les clics vers WhatsApp. Chacun de ces événements est configuré comme conversion dans GA4 pour que vous sachiez quel canal et quel contenu génèrent le plus de clients potentiels réels, et pas seulement des visites." },
  ],
};

const RELATED = {
  en: {
    title: "Services that complement web analytics",
    intro: "Properly configured analytics multiplies the performance of every other digital channel. Once you have reliable data, the next step is to invest it efficiently in customer acquisition:",
    items: [
      { slug: "seo-web-positioning", title: "SEO and web positioning", desc: "Analytics reveals which keywords generate real conversions. We connect GA4 data with the SEO strategy." },
      { slug: "google-ads-management", title: "Google Ads and SEM", desc: "We link GA4 with Google Ads to measure the real ROAS, including assisted conversions and complete conversion paths." },
      { slug: "digital-audit", title: "Complete digital audit", desc: "If you have doubts about the overall state of your digital presence, the audit always starts from analysing your website data." },
    ],
  },
  fr: {
    title: "Services complémentaires à l'analytique web",
    intro: "Une analytique bien configurée démultiplie la performance de tous les autres canaux digitaux. Une fois que vous disposez de données fiables, l'étape suivante consiste à les exploiter efficacement pour l'acquisition :",
    items: [
      { slug: "seo-web-positioning", title: "SEO et positionnement web", desc: "L'analytique révèle quels mots-clés génèrent de vraies conversions. Nous relions les données GA4 à la stratégie SEO." },
      { slug: "google-ads-management", title: "Google Ads et SEA", desc: "Nous associons GA4 à Google Ads pour mesurer le ROAS réel, y compris les conversions assistées et les parcours de conversion complets." },
      { slug: "digital-audit", title: "Audit digital complet", desc: "Si vous avez des doutes sur l'état général de votre présence digitale, l'audit part toujours de l'analyse des données de votre site." },
    ],
  },
};

export default async function WebAnalyticsPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const isEn = lang === "en";

  const enIncludes = [
    "Google Analytics 4 configuration and management",
    "Google Tag Manager implementation",
    "Google Consent Mode v2",
    "Conversion tracking: forms, calls, purchases",
    "Custom business dashboards",
    "Monthly report with metrics and recommendations",
    "Google Search Console integration",
  ];

  const frIncludes = [
    "Configuration et gestion de Google Analytics 4",
    "Implémentation de Google Tag Manager",
    "Google Consent Mode v2",
    "Suivi des conversions : formulaires, appels, achats",
    "Tableaux de bord métier personnalisés",
    "Rapport mensuel avec métriques et recommandations",
    "Intégration Google Search Console",
  ];

  const L = isEn ? "en" : "fr";
  const why = WHY[L];
  const cd = CONFIGURE_DELIVER[L];
  const steps = STEPS[L];
  const questions = QUESTIONS[L];
  const faqs = FAQS[L];
  const related = RELATED[L];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    inLanguage: L,
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  const metrics = isEn
    ? [
        { value: "GA4", label: "Google Analytics 4" },
        { value: "GTM", label: "Tag Manager" },
        { value: "Consent", label: "Mode v2" },
        { value: "Monthly", label: "business report" },
      ]
    : [
        { value: "GA4", label: "Google Analytics 4" },
        { value: "GTM", label: "Tag Manager" },
        { value: "Consent", label: "Mode v2" },
        { value: "Mensuel", label: "rapport métier" },
      ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <section className="bg-gradient-to-br from-primary-700 to-primary-900 text-white">
        <div className="max-w-6xl mx-auto px-4 py-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <Breadcrumbs
              crumbs={[
                { label: isEn ? "Home" : "Accueil", href: `/${lang}/` },
                { label: isEn ? "Analytics" : "Analytique" },
              ]}
            />
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight mt-4">
              {isEn ? "Web analytics," : "Analytique web,"}
              <br />
              <span className="text-accent-400">
                {isEn ? "data that drives decisions" : "des données qui orientent les décisions"}
              </span>
            </h1>
            <p className="text-xl text-primary-200 mb-8 leading-relaxed">
              {isEn
                ? "Without data there is no strategy. We set up and manage your web analytics so you know exactly what works, what doesn't and where to invest to grow."
                : "Sans données, il n'y a pas de stratégie. Nous configurons et gérons votre analytique web pour que vous sachiez exactement ce qui fonctionne, ce qui ne fonctionne pas et où investir pour croître."}
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
            {isEn ? "What's included" : "Ce qui est inclus"}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {(isEn ? enIncludes : frIncludes).map((item) => (
              <div
                key={item}
                className="flex items-center gap-3 bg-white rounded-xl px-5 py-4 shadow-sm border border-gray-100"
              >
                <span className="text-accent-500 font-bold shrink-0">✓</span>
                <span className="text-gray-700 text-sm">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-primary-600 mb-6">{why.title}</h2>
          {why.paragraphs.map((p) => (
            <p key={p} className="text-gray-700 leading-relaxed mb-4">{p}</p>
          ))}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
            <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
              <h3 className="text-xl font-bold text-primary-600 mb-4">{cd.configureTitle}</h3>
              <ul className="space-y-2 text-gray-700">
                {cd.configure.map((i) => (
                  <li key={i} className="flex gap-2"><span className="text-accent-500 font-bold">✓</span>{i}</li>
                ))}
              </ul>
            </div>
            <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
              <h3 className="text-xl font-bold text-primary-600 mb-4">{cd.deliverTitle}</h3>
              <ul className="space-y-2 text-gray-700">
                {cd.deliver.map((i) => (
                  <li key={i} className="flex gap-2"><span className="text-accent-500 font-bold">✓</span>{i}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-primary-600 mb-8 text-center">{steps.title}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {steps.steps.map((step) => (
              <div key={step.num} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                <span className="inline-block text-3xl font-bold text-accent-500 mb-3">{step.num}</span>
                <h3 className="font-bold text-primary-600 text-lg mb-2">{step.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-primary-600 mb-4">{questions.title}</h2>
          <p className="text-gray-700 leading-relaxed mb-8">{questions.intro}</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {questions.items.map((s) => (
              <div key={s.q} className="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
                <h3 className="font-bold text-primary-600 text-sm mb-1">{s.q}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{s.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-primary-600 mb-8 text-center">
            {isEn ? "Frequently asked questions about web analytics" : "Questions fréquentes sur l'analytique web"}
          </h2>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <div key={faq.q} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                <h3 className="font-bold text-primary-600 mb-2">{faq.q}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-primary-600 mb-4">{related.title}</h2>
          <p className="text-gray-700 leading-relaxed mb-8">{related.intro}</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {related.items.map((r) => (
              <Link
                key={r.slug}
                href={`/${lang}/${langSlug(lang, r.slug)}/`}
                className="block bg-white rounded-xl p-5 shadow-sm border border-gray-100 hover:border-primary-300 transition-colors"
              >
                <h3 className="font-bold text-primary-600 text-sm mb-1">{r.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{r.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-primary-600 text-white">
        <div className="max-w-3xl mx-auto text-center mb-10">
          <h2 className="text-3xl font-bold mb-4">
            {isEn ? "Ready to grow online?" : "Prêt à vous développer en ligne ?"}
          </h2>
          <p className="text-primary-200">
            {isEn
              ? "Tell us about your project. We respond within 24 hours."
              : "Parlez-nous de votre projet. Nous répondons dans les 24 heures."}
          </p>
        </div>
        <div className="max-w-3xl mx-auto bg-white rounded-2xl p-8">
          <ContactForm formType={`${lang}-analytics`} />
        </div>
      </section>
    </>
  );
}
