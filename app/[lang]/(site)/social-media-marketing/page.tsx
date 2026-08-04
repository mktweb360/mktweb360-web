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
      ? "Social Media Marketing for Businesses — Community Management | Mkt Web 360"
      : "Marketing sur les Réseaux Sociaux pour Entreprises — Community Management | Mkt Web 360",
    description: isEn
      ? "Professional social media management for businesses. Community management, content creation and growth strategy for Instagram, LinkedIn, Facebook and TikTok."
      : "Gestion professionnelle des réseaux sociaux pour entreprises. Community management, création de contenu et stratégie de croissance pour Instagram, LinkedIn, Facebook et TikTok.",
    alternates: alternatesFor(`/${lang}/social-media-marketing/`) ?? {
      canonical: `https://www.mktweb360.com/${lang}/social-media-marketing/`,
    },
    openGraph: {
      title: isEn
        ? "Social Media Marketing for Businesses — Community Management | Mkt Web 360"
        : "Marketing sur les Réseaux Sociaux pour Entreprises — Community Management | Mkt Web 360",
      description: isEn
        ? "Professional community management for your business. Instagram, Facebook, LinkedIn, TikTok."
        : "Community management professionnel pour votre entreprise. Instagram, Facebook, LinkedIn, TikTok.",
      url: `https://www.mktweb360.com/${lang}/social-media-marketing/`,
    },
  };
}

const FAQS_EN = [
  {
    q: "How many posts are included per month?",
    a: "It depends on the plan. The basic plan includes 12 monthly posts across 2 social networks. The advanced plan goes up to 20 posts across 3 networks, including reels and stories. Each post includes graphic design and optimised copy.",
  },
  {
    q: "Do I need to provide the content or do you create it?",
    a: "We create all the content: design, copy and publishing. We only need an initial session to understand your business, your communication tone and your objectives. From there we work autonomously with your monthly approval.",
  },
  {
    q: "What results can I expect and in how much time?",
    a: "The first visible results in terms of reach and engagement are usually seen from the second month. Sustained growth in qualified followers and enquiries from social media requires between 3 and 6 months of consistent work.",
  },
  {
    q: "Do you also manage paid social advertising?",
    a: "Yes. Social Ads management (Meta Ads, LinkedIn Ads) is a complementary service to community management. Combining it with a good organic strategy is the most efficient formula for growing on social networks and acquiring customers.",
  },
];

const FAQS_FR = [
  {
    q: "Combien de publications le service mensuel inclut-il ?",
    a: "Cela dépend du plan souscrit. Le plan basique inclut 12 publications mensuelles sur 2 réseaux sociaux. Le plan avancé passe à 20 publications sur 3 réseaux, incluant reels et stories. Chaque publication comprend design graphique et rédaction optimisée.",
  },
  {
    q: "Dois-je fournir le contenu ou vous le créez ?",
    a: "Nous créons tout le contenu : design, texte et publication. Nous n'avons besoin que d'une session initiale pour comprendre votre entreprise, votre ton de communication et vos objectifs. À partir de là, nous travaillons de manière autonome avec votre approbation mensuelle.",
  },
  {
    q: "Quels résultats puis-je espérer et en combien de temps ?",
    a: "Les premiers résultats visibles en termes de portée et d'engagement se voient généralement à partir du deuxième mois. La croissance soutenue d'abonnés qualifiés et la génération de demandes depuis les réseaux sociaux nécessitent entre 3 et 6 mois de travail constant.",
  },
  {
    q: "Gérez-vous également la publicité sur les réseaux sociaux ?",
    a: "Oui. La gestion des Social Ads (Meta Ads, LinkedIn Ads) est un service complémentaire au community management. La combiner avec une bonne stratégie organique est la formule la plus efficace pour croître sur les réseaux et capter des clients.",
  },
];

const PROCESS_EN = [
  { num: "01", title: "Analysis and strategy", desc: "We study your business, your competition and your target audience. We define the communication tone, content pillars and measurable objectives for the first 3 months." },
  { num: "02", title: "Editorial planning", desc: "We create the monthly editorial calendar with topics, formats and posting frequency. You review and approve it before we start publishing." },
  { num: "03", title: "Production and publishing", desc: "We design the graphics, write the copy and schedule posts at the times of greatest reach for your audience." },
  { num: "04", title: "Analysis and report", desc: "Each month you receive a report with real metrics: reach, interactions, follower growth, clicks and change versus the previous month." },
];

const PROCESS_FR = [
  { num: "01", title: "Analyse et stratégie", desc: "Nous étudions votre entreprise, vos concurrents et votre audience cible. Nous définissons le ton de communication, les piliers de contenu et les objectifs mesurables pour les 3 premiers mois." },
  { num: "02", title: "Planification éditoriale", desc: "Nous créons le calendrier éditorial mensuel avec les thèmes, les formats et la fréquence de publication. Vous le révisez et l'approuvez avant de commencer à publier." },
  { num: "03", title: "Production et publication", desc: "Nous concevons les visuels, rédigeons les textes et programmions les publications aux horaires de plus grande portée pour votre audience." },
  { num: "04", title: "Analyse et rapport", desc: "Chaque mois vous recevez un rapport avec des métriques réelles : portée, interactions, croissance des abonnés, clics et évolution par rapport au mois précédent." },
];

const SECTORS_EN = [
  { sector: "Hospitality and restaurants", desc: "Visual content of dishes, atmosphere and experience. Review management and local acquisition campaigns." },
  { sector: "Clinics and health", desc: "Trust-building communication, service promotion and patient acquisition in compliance with sector regulations." },
  { sector: "Local retail and commerce", desc: "Product, offer and news promotion. Campaigns to increase footfall to physical stores and online sales." },
  { sector: "Professional services and B2B", desc: "LinkedIn as the main authority and acquisition channel. Content that positions you as a reference in your sector." },
  { sector: "Estate agencies", desc: "Property showcase, attracting buyers and sellers, and personal brand building for agents." },
  { sector: "E-commerce and online stores", desc: "Product content, social proof, Meta Ads campaigns and strategies to reduce cart abandonment." },
];

const SECTORS_FR = [
  { sector: "Hôtellerie et restauration", desc: "Contenu visuel de plats, d'ambiance et d'expérience. Gestion des avis et campagnes de captation locale." },
  { sector: "Cliniques et santé", desc: "Communication de confiance, promotion des services et captation de patients dans le respect de la réglementation du secteur." },
  { sector: "Commerce local et retail", desc: "Promotion de produits, d'offres et de nouveautés. Campagnes pour augmenter les visites en boutique physique et les ventes en ligne." },
  { sector: "Services professionnels et B2B", desc: "LinkedIn comme canal principal d'autorité et de captation. Contenu qui positionne comme référence dans le secteur." },
  { sector: "Agences immobilières", desc: "Vitrine de propriétés, captation d'acheteurs et de vendeurs, et construction de la marque personnelle de l'agent." },
  { sector: "E-commerce et boutiques en ligne", desc: "Contenu produit, social proof, campagnes Meta Ads et stratégies pour réduire l'abandon de panier." },
];

const PLANS_EN = [
  {
    plan: "Basic Plan",
    price: "From €500/month",
    networks: "2 social networks",
    items: ["12 monthly posts", "Graphic design included", "Optimised copy", "Comment management", "Monthly report"],
    featured: false,
  },
  {
    plan: "Advanced Plan",
    price: "From €750/month",
    networks: "3 social networks",
    items: ["20 monthly posts", "Reels and stories", "Premium graphic design", "Active community management", "Advanced report with KPIs", "Monthly follow-up meeting"],
    featured: true,
  },
  {
    plan: "Complete Plan",
    price: "From €1,200/month",
    networks: "All networks",
    items: ["Unlimited posts", "Social Ads included", "Basic video production", "Influencer strategy", "Weekly report", "Dedicated account manager"],
    featured: false,
  },
];

const PLANS_FR = [
  {
    plan: "Plan Basique",
    price: "À partir de 500€/mois",
    networks: "2 réseaux sociaux",
    items: ["12 publications mensuelles", "Design graphique inclus", "Rédaction optimisée", "Gestion des commentaires", "Rapport mensuel"],
    featured: false,
  },
  {
    plan: "Plan Avancé",
    price: "À partir de 750€/mois",
    networks: "3 réseaux sociaux",
    items: ["20 publications mensuelles", "Reels et stories", "Design graphique premium", "Gestion active de la communauté", "Rapport avancé avec KPIs", "Réunion mensuelle de suivi"],
    featured: true,
  },
  {
    plan: "Plan Complet",
    price: "À partir de 1 200€/mois",
    networks: "Tous les réseaux",
    items: ["Publications illimitées", "Social Ads inclus", "Production vidéo basique", "Stratégie d'influenceurs", "Rapport hebdomadaire", "Account manager dédié"],
    featured: false,
  },
];

const DIFFERENTIATORS_EN = [
  { title: "Real strategy, not filler", desc: "Every post responds to a specific objective: reach, acquisition, loyalty or conversion. We do not post for the sake of posting." },
  { title: "Content created from scratch", desc: "We do not use generic templates. Every piece is designed and written specifically for your brand, your sector and your audience." },
  { title: "AI-applied analysis", desc: "We use our own artificial intelligence protocols to analyse which content performs best and optimise the editorial calendar each month." },
  { title: "Reports with real data", desc: "You receive a monthly report with verifiable metrics from your account. No manipulated screenshots, no inflated figures." },
];

const DIFFERENTIATORS_FR = [
  { title: "Vraie stratégie, pas du remplissage", desc: "Chaque publication répond à un objectif précis : portée, captation, fidélisation ou conversion. Nous ne publions pas pour publier." },
  { title: "Contenu créé de zéro", desc: "Nous n'utilisons pas de templates génériques. Chaque pièce est conçue et rédigée spécifiquement pour votre marque, votre secteur et votre audience." },
  { title: "IA appliquée à l'analyse", desc: "Nous utilisons nos propres protocoles d'intelligence artificielle pour analyser quels contenus fonctionnent le mieux et optimiser le calendrier éditorial chaque mois." },
  { title: "Rapports avec de vraies données", desc: "Vous recevez chaque mois un rapport avec des métriques vérifiables de votre compte. Sans captures d'écran manipulées, sans chiffres gonflés." },
];

export default async function Page({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const isEn = lang === "en";

  const FAQS = isEn ? FAQS_EN : FAQS_FR;
  const PROCESS = isEn ? PROCESS_EN : PROCESS_FR;
  const SECTORS = isEn ? SECTORS_EN : SECTORS_FR;
  const PLANS = isEn ? PLANS_EN : PLANS_FR;
  const DIFFERENTIATORS = isEn ? DIFFERENTIATORS_EN : DIFFERENTIATORS_FR;

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: isEn ? "Social Media Management and Community Management" : "Gestion des Réseaux Sociaux et Community Management",
    serviceType: "Social Media Marketing",
    provider: { "@type": "Organization", name: "Mkt Web 360 SLU", url: "https://www.mktweb360.com" },
    description: isEn
      ? "Social media management service for businesses. Content strategy, graphic design, posts, customer engagement and monthly results analysis."
      : "Service de gestion des réseaux sociaux pour les entreprises. Stratégie de contenu, design graphique, publications, engagement client et analyse mensuelle des résultats.",
    areaServed: isEn ? "Spain" : "Espagne",
    url: `https://www.mktweb360.com/${lang}/social-media-marketing/`,
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
      { "@type": "ListItem", position: 2, name: isEn ? "Social Media" : "Réseaux Sociaux", item: `https://www.mktweb360.com/${lang}/social-media-marketing/` },
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
                { label: isEn ? "Social Media" : "Réseaux Sociaux" },
              ]}
            />
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight mt-4">
              {isEn ? "Social media management" : "Gestion des réseaux sociaux"}<br />
              <span className="text-accent-400">
                {isEn ? "that builds real communities" : "qui construit de vraies communautés"}
              </span>
            </h1>
            <p className="text-xl text-primary-200 mb-8 leading-relaxed">
              {isEn
                ? "Professional social media management to build a loyal community, increase your brand visibility and convert followers into customers. Every post has a purpose."
                : "Gestion professionnelle des réseaux sociaux pour construire une communauté fidèle, augmenter votre visibilité de marque et convertir les abonnés en clients. Chaque publication a un objectif."}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#contact" className="bg-accent-500 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-accent-600 transition-colors text-center">
                {isEn ? "Request a quote" : "Demander un devis"}
              </a>
            </div>
          </div>
          <div>
            <Image src="/imagen-redes-sociales.jpg" alt={isEn ? "Social media management" : "Gestion des réseaux sociaux"} className="rounded-2xl shadow-2xl w-full object-cover hidden md:block" width={800} height={600} />
          </div>
        </div>
      </section>

      {/* Trust bar */}
      <section className="bg-primary-600 py-6 px-4">
        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 text-center text-white">
          {(isEn
            ? [
                { value: "Instagram", label: "Facebook · LinkedIn · TikTok" },
                { value: "Monthly", label: "editorial calendar" },
                { value: "Original", label: "content creation" },
                { value: "Results", label: "monthly report" },
              ]
            : [
                { value: "Instagram", label: "Facebook · LinkedIn · TikTok" },
                { value: "Mensuel", label: "calendrier éditorial" },
                { value: "Original", label: "création de contenu" },
                { value: "Résultats", label: "rapport mensuel" },
              ]
          ).map((m) => (
            <div key={m.label}>
              <div className="text-xl font-bold text-accent-400">{m.value}</div>
              <div className="text-xs text-primary-200 mt-1">{m.label}</div>
            </div>
          ))}
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-12">

        {/* Platforms + includes */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="bg-primary-50 rounded-2xl p-6">
            <h2 className="text-xl font-bold text-primary-600 mb-4">
              {isEn ? "Platforms we manage" : "Plateformes que nous gérons"}
            </h2>
            <ul className="space-y-2 text-gray-700">
              {["Instagram", "Facebook / Meta", isEn ? "LinkedIn (B2B)" : "LinkedIn (B2B)", "TikTok", "X (Twitter)", "Google Business Profile"].map((p) => (
                <li key={p} className="flex gap-2"><span className="text-accent-500">✓</span>{p}</li>
              ))}
            </ul>
          </div>
          <div className="bg-gray-50 rounded-2xl p-6">
            <h2 className="text-xl font-bold text-primary-600 mb-4">
              {isEn ? "What does the service include?" : "Qu'est-ce que le service inclut ?"}
            </h2>
            <ul className="space-y-2 text-gray-700">
              {(isEn
                ? [
                    "Monthly content strategy",
                    "Graphic design for posts",
                    "Optimised copy writing",
                    "Scheduling and publishing",
                    "Comment and message management",
                    "Monthly metrics report",
                    "Social Ads campaigns (optional)",
                  ]
                : [
                    "Stratégie de contenu mensuelle",
                    "Design graphique des publications",
                    "Rédaction de textes optimisés",
                    "Programmation et publication",
                    "Gestion des commentaires et messages",
                    "Rapport mensuel de métriques",
                    "Campagnes Social Ads (optionnel)",
                  ]
              ).map((i) => (
                <li key={i} className="flex gap-2"><span className="text-accent-500">✓</span>{i}</li>
              ))}
            </ul>
          </div>
        </section>

        {/* Why social media matters */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-primary-600 mb-6">
            {isEn ? "Why do social networks matter for your business?" : "Pourquoi les réseaux sociaux sont-ils importants pour votre entreprise ?"}
          </h2>
          <div className="space-y-4 text-gray-700 leading-relaxed">
            {isEn ? (
              <>
                <p>Social networks are far more than posting photos. They are a direct communication channel with your potential customers, a loyalty tool and an acquisition channel when managed with purpose and strategy.</p>
                <p>The problem is that most businesses post without a clear editorial plan, without analysing what works, without visual coherence and without a growth strategy behind it. The result is time invested with no visible return.</p>
                <p>Professional social media management increases brand awareness, builds trust before the first contact and, when combined with well-targeted paid social, becomes one of the most profitable acquisition channels for local businesses and SMEs.</p>
              </>
            ) : (
              <>
                <p>Les réseaux sociaux sont bien plus que publier des photos. Ils constituent un canal de communication direct avec vos clients potentiels, un outil de fidélisation et un canal d'acquisition quand ils sont gérés avec discernement et stratégie.</p>
                <p>Le problème est que la plupart des entreprises publient sans plan éditorial clair, sans analyser ce qui fonctionne, sans cohérence visuelle et sans stratégie de croissance derrière. Le résultat est du temps investi sans retour visible.</p>
                <p>Une gestion professionnelle des réseaux sociaux augmente la notoriété de marque, génère de la confiance avant le premier contact et, combinée à de la publicité sociale bien ciblée, devient l'un des canaux d'acquisition les plus rentables pour les entreprises locales et les PME.</p>
              </>
            )}
          </div>
        </section>

        {/* Process */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-primary-600 mb-8">
            {isEn ? "How we work" : "Comment nous travaillons"}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {PROCESS.map((step) => (
              <div key={step.num} className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm">
                <span className="inline-block text-3xl font-bold text-accent-500 mb-3">{step.num}</span>
                <h3 className="font-bold text-primary-700 text-lg mb-2">{step.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Sectors */}
        <section className="mb-16 bg-primary-50 rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-primary-600 mb-6">
            {isEn ? "What type of business is this service for?" : "Pour quel type d'entreprise est ce service ?"}
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            {isEn
              ? "We manage social networks for businesses across all sectors, with particular experience in:"
              : "Nous gérons les réseaux sociaux pour des entreprises de tous secteurs, avec une expérience particulière dans :"}
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {SECTORS.map((s) => (
              <div key={s.sector} className="bg-white rounded-xl p-4 border border-primary-100">
                <p className="font-bold text-primary-700 text-sm mb-1">{s.sector}</p>
                <p className="text-gray-600 text-xs leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Pricing plans */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-primary-600 mb-4">
            {isEn ? "Social media management plans" : "Plans de gestion des réseaux sociaux"}
          </h2>
          <p className="text-gray-600 mb-8">
            {isEn
              ? "Indicative prices. The final quote depends on the number of networks, content volume and whether advertising is included."
              : "Prix indicatifs. Le devis final dépend du nombre de réseaux, du volume de contenu et de l'inclusion ou non de la publicité."}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {PLANS.map((p) => (
              <div key={p.plan} className={`rounded-2xl p-6 border-2 flex flex-col ${p.featured ? "border-accent-500 bg-accent-50" : "border-gray-100 bg-white"}`}>
                <p className="text-xs font-bold text-accent-500 uppercase tracking-widest mb-2">{p.networks}</p>
                <h3 className="text-xl font-bold text-primary-700 mb-1">{p.plan}</h3>
                <p className="text-2xl font-bold text-accent-500 mb-4">{p.price}</p>
                <ul className="space-y-2 flex-1">
                  {p.items.map((i) => (
                    <li key={i} className="flex gap-2 text-sm text-gray-700"><span className="text-accent-500 shrink-0">✓</span>{i}</li>
                  ))}
                </ul>
                <a href="#contact" className="mt-6 block text-center bg-primary-600 hover:bg-primary-700 text-white font-bold py-3 rounded-full transition-colors text-sm">
                  {isEn ? "Request a quote" : "Demander un devis"}
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* Differentiators */}
        <section className="mb-16 bg-gray-50 rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-primary-600 mb-6">
            {isEn ? "Why choose Mkt Web 360 to manage your social networks" : "Pourquoi choisir Mkt Web 360 pour gérer vos réseaux sociaux"}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {DIFFERENTIATORS.map((d) => (
              <div key={d.title} className="flex gap-4">
                <span className="text-accent-500 text-xl shrink-0">✓</span>
                <div>
                  <p className="font-bold text-primary-700 mb-1">{d.title}</p>
                  <p className="text-gray-600 text-sm leading-relaxed">{d.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* FAQs */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-primary-600 mb-8">
            {isEn ? "Frequently asked questions about social media management" : "Questions fréquentes sur la gestion des réseaux sociaux"}
          </h2>
          <div className="space-y-4">
            {FAQS.map((faq) => (
              <div key={faq.q} className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm">
                <h3 className="font-bold text-primary-700 mb-2">{faq.q}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Form */}
        <section id="contact" className="bg-primary-600 text-white rounded-2xl p-8">
          <h2 className="text-2xl font-bold mb-4">
            {isEn ? "Shall we talk about your social networks?" : "Parlons de vos réseaux sociaux ?"}
          </h2>
          <p className="text-primary-200 mb-6">
            {isEn
              ? "Tell us about your current situation and we will propose a personalised strategy for your sector."
              : "Parlez-nous de votre situation actuelle et nous vous proposerons une stratégie personnalisée pour votre secteur."}
          </p>
          <div className="bg-white rounded-xl p-6">
            <ContactForm formType={`${lang}-social-media`} />
          </div>
        </section>
      </div>

      <RelatedArticles category="Social Media" title={isEn ? "More about social media and marketing" : "Plus sur les réseaux sociaux et le marketing"} />
    </>
  );
}
