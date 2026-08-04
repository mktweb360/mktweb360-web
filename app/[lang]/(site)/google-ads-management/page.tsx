import Image from "next/image";
import { ContactForm } from "@/components/ContactForm";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { RelatedArticles } from "@/components/RelatedArticles";
import { alternatesFor } from "@/lib/i18n/routes";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const isEn = lang === "en";
  return {
    title: isEn
      ? "Google Ads Management — Campaigns that Convert | Mkt Web 360"
      : "Gestion Google Ads — Campagnes qui Convertissent | Mkt Web 360",
    description: isEn
      ? "Professional Google Ads campaign management for businesses. Generate leads from day one with optimised, profitable campaigns. Nationwide service."
      : "Gestion professionnelle de campagnes Google Ads pour les entreprises. Générez des leads dès le premier jour avec des campagnes optimisées et rentables.",
    alternates: alternatesFor(`/${lang}/google-ads-management/`) ?? {
      canonical: `https://www.mktweb360.com/${lang}/google-ads-management/`,
    },
    openGraph: {
      title: isEn
        ? "Google Ads Management — Campaigns that Convert | Mkt Web 360"
        : "Gestion Google Ads — Campagnes qui Convertissent | Mkt Web 360",
      description: isEn
        ? "Google Ads campaigns that generate customers from day one. Nationwide service."
        : "Campagnes Google Ads qui génèrent des clients dès le premier jour. Service national.",
      url: `https://www.mktweb360.com/${lang}/google-ads-management/`,
    },
  };
}

const CAMPAIGNS_EN = [
  { title: "Google Search", desc: "Ads in search results to capture users with purchase intent." },
  { title: "Google Display", desc: "Graphic ads across millions of websites to increase your brand visibility." },
  { title: "Google Shopping", desc: "Product ads for online stores that show price and image directly." },
  { title: "YouTube Ads", desc: "Video campaigns to increase brand recognition and attract new customers." },
  { title: "Remarketing", desc: "Re-engage users who have already visited your website to recover lost sales." },
  { title: "Performance Max", desc: "Smart campaigns that automatically optimise across all Google channels." },
];

const CAMPAIGNS_FR = [
  { title: "Google Search", desc: "Annonces dans les résultats de recherche pour capter les utilisateurs avec une intention d'achat." },
  { title: "Google Display", desc: "Annonces graphiques sur des millions de sites web pour augmenter la visibilité de votre marque." },
  { title: "Google Shopping", desc: "Annonces de produits pour les boutiques en ligne qui affichent prix et image directement." },
  { title: "YouTube Ads", desc: "Campagnes vidéo pour augmenter la notoriété de marque et attirer de nouveaux clients." },
  { title: "Remarketing", desc: "Reciblez les utilisateurs qui ont déjà visité votre site pour récupérer des ventes perdues." },
  { title: "Performance Max", desc: "Campagnes intelligentes qui optimisent automatiquement sur tous les canaux Google." },
];

const PROCESS_EN = [
  { num: "01", title: "Audit and strategy", desc: "If you have an active account, we audit its current state: structure, keywords, negatives, ads and conversions. If you are starting from scratch, we design the optimal structure for your business and sector." },
  { num: "02", title: "Setup and launch", desc: "We configure the campaign structure, ad groups, keywords with their match types, negative keywords, extensions and conversion tracking. We launch with a controlled budget." },
  { num: "03", title: "Continuous optimisation", desc: "We monitor performance daily in the first weeks. We adjust bids, pause non-converting keywords, add negatives from real search terms and test ad variations." },
  { num: "04", title: "Monthly report and strategy", desc: "Each month you receive a report with the metrics that matter: impressions, clicks, conversions, cost per lead and ROAS. We review the strategy and define next month's actions." },
];

const PROCESS_FR = [
  { num: "01", title: "Audit et stratégie", desc: "Si vous avez un compte actif, nous auditons son état actuel : structure, mots-clés, négatifs, annonces et conversions. Si vous démarrez de zéro, nous concevons la structure optimale pour votre entreprise et secteur." },
  { num: "02", title: "Configuration et lancement", desc: "Nous configurons la structure des campagnes, des groupes d'annonces, des mots-clés avec leurs types de correspondance, des mots-clés négatifs, des extensions et du suivi des conversions. Nous lançons avec un budget contrôlé." },
  { num: "03", title: "Optimisation continue", desc: "Nous surveillons les performances quotidiennement les premières semaines. Nous ajustons les enchères, mettons en pause les mots-clés qui ne convertissent pas, ajoutons des négatifs et testons des variations d'annonces." },
  { num: "04", title: "Rapport et stratégie mensuelle", desc: "Chaque mois, vous recevez un rapport avec les métriques importantes : impressions, clics, conversions, coût par lead et ROAS. Nous révisons la stratégie et définissons les actions du mois suivant." },
];

const SECTORS_EN = [
  "Home services", "Clinics and health", "Training and academies",
  "Ecommerce and retail", "Estate agencies", "Professional services",
  "Hospitality and tourism", "Software and SaaS", "Construction and renovation",
];

const SECTORS_FR = [
  "Services à domicile", "Cliniques et santé", "Formation et académies",
  "E-commerce et retail", "Agences immobilières", "Services professionnels",
  "Hôtellerie et tourisme", "Logiciels et SaaS", "Construction et rénovation",
];

const FAQS_EN = [
  {
    q: "What is the minimum budget I need to start with Google Ads?",
    a: "It depends on your sector and competition. For most local or service businesses, £300–500/month in ad spend is enough to gather meaningful data. In highly competitive sectors such as insurance or loans, the minimum is considerably higher. We provide a free estimate before you start.",
  },
  {
    q: "How much do you charge for management?",
    a: "We charge a fixed monthly management fee that does not depend on your Google ad spend. We do not charge a percentage on ad investment — that model incentivises spending more, not optimising. The fixed fee aligns us with your objective: getting more for the same cost.",
  },
  {
    q: "Do the clicks I pay for belong to me or to you?",
    a: "Everything is yours. The Google Ads account belongs to you, you own it and have full access at all times. If you decide to change agency or manage it yourself, you keep the account with all its history, conversions and accumulated data.",
  },
  {
    q: "Can I see in real time what is being spent?",
    a: "Yes. You have full access to your Google Ads account where you can see spend, clicks, impressions and conversions in real time. You also receive a monthly report with analysis and interpretation of the most relevant data.",
  },
];

const FAQS_FR = [
  {
    q: "Quel budget minimum faut-il pour démarrer avec Google Ads ?",
    a: "Cela dépend de votre secteur et de la concurrence. Pour la plupart des entreprises locales ou de services, 300–500€/mois en dépenses publicitaires suffit pour obtenir des données pertinentes. Dans des secteurs très compétitifs comme l'assurance ou les prêts, le minimum est considérablement plus élevé. Nous vous fournissons une estimation gratuite avant de commencer.",
  },
  {
    q: "Combien facturez-vous pour la gestion ?",
    a: "Nous facturons un tarif fixe mensuel de gestion qui ne dépend pas du budget que vous investissez dans Google. Nous ne facturons pas de pourcentage sur l'investissement publicitaire — ce modèle incite à dépenser plus, pas à optimiser. Le tarif fixe nous aligne sur votre objectif : obtenir plus au même coût.",
  },
  {
    q: "Les clics que je paie m'appartiennent-ils ?",
    a: "Tout vous appartient. Le compte Google Ads est à vous, vous le possédez et y avez accès à tout moment. Si vous décidez de changer d'agence ou de gérer vous-même, vous gardez le compte avec tout son historique, ses conversions et ses données accumulées.",
  },
  {
    q: "Puis-je voir en temps réel ce qui est dépensé ?",
    a: "Oui. Vous avez un accès complet à votre compte Google Ads où vous pouvez voir en temps réel les dépenses, les clics, les impressions et les conversions. Vous recevez également un rapport mensuel avec l'analyse et l'interprétation des données les plus pertinentes.",
  },
];

export default async function GoogleAdsManagementPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const isEn = lang === "en";

  const CAMPAIGNS = isEn ? CAMPAIGNS_EN : CAMPAIGNS_FR;
  const PROCESS = isEn ? PROCESS_EN : PROCESS_FR;
  const SECTORS = isEn ? SECTORS_EN : SECTORS_FR;
  const FAQS = isEn ? FAQS_EN : FAQS_FR;

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: isEn ? "Google Ads Campaign Management" : "Gestion de Campagnes Google Ads",
    serviceType: "Search Engine Marketing",
    provider: { "@type": "Organization", name: "Mkt Web 360 SLU", url: "https://www.mktweb360.com" },
    description: isEn
      ? "Professional Google Ads SEM campaign management for businesses. Search, Display, Shopping and YouTube Ads."
      : "Gestion professionnelle de campagnes publicitaires SEM Google Ads pour les entreprises. Search, Display, Shopping et YouTube Ads.",
    areaServed: isEn ? "Spain" : "Espagne",
    url: `https://www.mktweb360.com/${lang}/google-ads-management/`,
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: isEn ? "Home" : "Accueil", item: `https://www.mktweb360.com/${lang}/` },
      { "@type": "ListItem", position: 2, name: isEn ? "Google Ads Management" : "Gestion Google Ads", item: `https://www.mktweb360.com/${lang}/google-ads-management/` },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-700 to-primary-900 text-white">
        <div className="max-w-6xl mx-auto px-4 py-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <Breadcrumbs
              crumbs={[
                { label: isEn ? "Home" : "Accueil", href: `/${lang}/` },
                { label: "Google Ads" },
              ]}
            />
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight mt-4">
              {isEn ? "Google Ads campaigns" : "Campagnes Google Ads"}
              <br />
              <span className="text-accent-400">
                {isEn ? "that generate real customers" : "qui génèrent de vrais clients"}
              </span>
            </h1>
            <p className="text-xl text-primary-200 mb-8 leading-relaxed">
              {isEn
                ? "We generate potential customers for your business from day one with optimised and profitable Google Ads campaigns. You only pay when someone clicks."
                : "Nous générons des clients potentiels pour votre entreprise dès le premier jour avec des campagnes Google Ads optimisées et rentables. Vous ne payez que lorsque quelqu'un clique."}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#contact" className="bg-accent-500 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-accent-600 transition-colors text-center">
                {isEn ? "Free account analysis" : "Analyse de compte gratuite"}
              </a>
            </div>
          </div>
          <div className="hidden md:block">
            <Image src="/imagen-sem.jpg" alt={isEn ? "Google Ads management" : "Gestion Google Ads"} className="rounded-2xl shadow-2xl w-full object-cover" width={800} height={600} />
          </div>
        </div>
      </section>

      {/* Trust bar */}
      <section className="bg-primary-600 py-6 px-4">
        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 text-center text-white">
          {(isEn
            ? [
                { value: "Day 1", label: "results from the start" },
                { value: "Certified", label: "Google Ads specialists" },
                { value: "No %", label: "on ad spend" },
                { value: "National", label: "service across Spain" },
              ]
            : [
                { value: "Jour 1", label: "résultats dès le début" },
                { value: "Certifiés", label: "spécialistes Google Ads" },
                { value: "Sans %", label: "sur les dépenses" },
                { value: "National", label: "service en Espagne" },
              ]
          ).map((m) => (
            <div key={m.label}>
              <div className="text-xl font-bold text-accent-400">{m.value}</div>
              <div className="text-xs text-primary-200 mt-1">{m.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Campaign types */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary-600 mb-4">
              {isEn ? "Types of campaigns we manage" : "Types de campagnes que nous gérons"}
            </h2>
            <p className="text-gray-600 max-w-xl mx-auto">
              {isEn
                ? "Every business needs a different strategy. We select the campaign mix that best fits your objectives."
                : "Chaque entreprise a besoin d'une stratégie différente. Nous sélectionnons le mix de campagnes le mieux adapté à vos objectifs."}
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {CAMPAIGNS.map((item) => (
              <div key={item.title} className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="font-bold text-primary-700 mb-2">{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why choose us */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-primary-600 mb-6">
                {isEn ? "Why choose us for your Google Ads" : "Pourquoi nous choisir pour votre Google Ads"}
              </h2>
              <div className="space-y-4">
                {(isEn
                  ? [
                      "Management by certified Google Ads specialists",
                      "No lock-in — full flexibility",
                      "Transparent management fee with no percentage on spend",
                      "Monthly report with real metrics: impressions, clicks, conversions and cost per lead",
                      "Continuous optimisation: A/B tests, bid adjustments and audience segmentation",
                      "Conversion tracking configured from day one",
                    ]
                  : [
                      "Gestion par des spécialistes Google Ads certifiés",
                      "Sans engagement — flexibilité totale",
                      "Tarif de gestion transparent sans pourcentage sur les dépenses",
                      "Rapport mensuel avec métriques réelles : impressions, clics, conversions et coût par lead",
                      "Optimisation continue : tests A/B, ajustements des enchères et segmentations",
                      "Suivi des conversions configuré dès le premier jour",
                    ]
                ).map((item) => (
                  <div key={item} className="flex gap-3 items-start">
                    <span className="text-accent-500 font-bold mt-0.5 shrink-0">✓</span>
                    <span className="text-gray-700 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-primary-600 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">
                {isEn ? "How much should you invest in Google Ads?" : "Combien devriez-vous investir dans Google Ads ?"}
              </h3>
              <p className="text-primary-200 mb-6 text-sm leading-relaxed">
                {isEn
                  ? "There is no universal figure. It depends on your sector, competition and objectives. What we can tell you is the estimated cost per lead for your business before you start."
                  : "Il n'existe pas de chiffre universel. Cela dépend de votre secteur, de la concurrence et de vos objectifs. Ce que nous pouvons vous dire, c'est le coût par lead estimé pour votre activité avant de commencer."}
              </p>
              <ul className="space-y-3">
                {(isEn
                  ? [
                      "Competitor and market bid analysis",
                      "Volume and conversion cost estimate",
                      "Efficient minimum budget proposal",
                      "No commitment — free with no small print",
                    ]
                  : [
                      "Analyse de la concurrence et des enchères de marché",
                      "Estimation du volume et du coût par conversion",
                      "Proposition de budget minimum efficace",
                      "Sans engagement — gratuit et sans clause cachée",
                    ]
                ).map((i) => (
                  <li key={i} className="flex items-center gap-2 text-sm">
                    <span className="text-accent-400 font-bold shrink-0">✓</span>{i}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why Google Ads */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-primary-600 mb-6">
            {isEn
              ? "Why Google Ads is the fastest acquisition channel for your business"
              : "Pourquoi Google Ads est le canal d'acquisition le plus rapide pour votre entreprise"}
          </h2>
          <div className="space-y-4 text-gray-700 leading-relaxed">
            {isEn ? (
              <>
                <p>SEO takes between 3 and 6 months to generate results. Google Ads generates customers from day one. If you need leads now, if you have just launched a product or service, or if you want to test which messages work best before investing in organic content, Google Ads is the most efficient tool available.</p>
                <p>The problem is that most businesses lose money on Google Ads not because of the platform but because of poor management: poorly segmented keywords, generic ads, landing pages that do not convert, bids without strategy and without real conversion tracking. The result is spend without return and the wrong conclusion that Google Ads does not work.</p>
                <p>A well-managed account has updated negative keywords, RSA ads with complete extensions, correctly configured conversion tracking, active A/B tests and monthly bid optimisation. The difference between a professionally managed account and an unmanaged one can be 3x in cost per lead with the same budget.</p>
              </>
            ) : (
              <>
                <p>Le SEO prend entre 3 et 6 mois pour générer des résultats. Google Ads génère des clients dès le premier jour. Si vous avez besoin de leads maintenant, si vous venez de lancer un produit ou service, ou si vous souhaitez tester quels messages fonctionnent le mieux avant d'investir dans du contenu organique, Google Ads est l'outil le plus efficace qui existe.</p>
                <p>Le problème est que la plupart des entreprises perdent de l'argent avec Google Ads non pas à cause de la plateforme mais à cause d'une mauvaise gestion : mots-clés mal segmentés, annonces génériques, pages de destination qui ne convertissent pas, enchères sans stratégie et sans suivi réel des conversions. Le résultat est des dépenses sans retour et la mauvaise conclusion que Google Ads ne fonctionne pas.</p>
                <p>Un compte bien géré dispose de mots-clés négatifs mis à jour, d'annonces RSA avec des extensions complètes, d'un suivi des conversions correctement configuré, de tests A/B actifs et d'une optimisation mensuelle des enchères. La différence entre un compte géré professionnellement et un compte non géré peut être de 3x en coût par lead avec le même budget.</p>
              </>
            )}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-primary-600 mb-8">
            {isEn ? "How we manage your campaigns" : "Comment nous gérons vos campagnes"}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {PROCESS.map((step) => (
              <div key={step.num} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                <span className="inline-block text-3xl font-bold text-accent-500 mb-3">{step.num}</span>
                <h3 className="font-bold text-primary-700 text-lg mb-2">{step.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sectors */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-primary-600 mb-6">
            {isEn ? "Sectors where we have the most experience" : "Secteurs où nous avons le plus d'expérience"}
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            {isEn
              ? "Google Ads works in virtually any sector where there is search demand. These are the sectors where we have the most experience and accumulated performance data:"
              : "Google Ads fonctionne dans pratiquement n'importe quel secteur où il existe une demande de recherche. Voici les secteurs où nous avons le plus d'expérience et de données de performance accumulées :"}
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {SECTORS.map((s) => (
              <div key={s} className="bg-primary-50 rounded-xl p-3 text-center border border-primary-100">
                <p className="text-primary-700 text-sm font-medium">{s}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-primary-600 mb-8">
            {isEn ? "Frequently asked questions about Google Ads" : "Questions fréquentes sur Google Ads"}
          </h2>
          <div className="space-y-4">
            {FAQS.map((faq) => (
              <div key={faq.q} className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm">
                <h3 className="font-bold text-primary-700 mb-2">{faq.q}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI badge */}
      <section className="py-10 px-4 bg-white border-y border-gray-100">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-6 text-center md:text-left">
          <div className="shrink-0 w-14 h-14 rounded-full bg-primary-50 flex items-center justify-center">
            <svg className="w-7 h-7 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456Z" /></svg>
          </div>
          <div>
            <p className="text-lg font-semibold text-primary-700">
              {isEn
                ? "Senior team experience. AI precision."
                : "L'expérience d'une équipe senior. La précision de l'intelligence artificielle."}
            </p>
            <p className="text-gray-500 text-sm mt-1">
              {isEn
                ? "Own AI protocols applied to each campaign to reduce cost per conversion and improve performance."
                : "Protocoles IA propriétaires appliqués à chaque campagne pour réduire le coût par conversion et améliorer les performances."}
            </p>
          </div>
        </div>
      </section>

      {/* CTA Form */}
      <section id="contact" className="py-16 px-4 bg-primary-600 text-white">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-4">
              {isEn ? "Free Google Ads account analysis" : "Analyse gratuite de votre compte Google Ads"}
            </h2>
            <p className="text-primary-200">
              {isEn
                ? "We review your current account or help you create a new one with best practices from the start."
                : "Nous révisons votre compte actuel ou vous aidons à en créer un nouveau avec les meilleures pratiques dès le départ."}
            </p>
          </div>
          <div className="bg-white rounded-2xl p-8">
            <ContactForm formType={`${lang}-google-ads`} />
          </div>
        </div>
      </section>

      <RelatedArticles category="SEO" title={isEn ? "More about digital acquisition" : "Plus sur l'acquisition digitale"} />
    </>
  );
}
