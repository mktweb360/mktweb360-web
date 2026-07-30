import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { RelatedArticles } from "@/components/RelatedArticles";
import { alternatesFor } from "@/lib/i18n/routes";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const isEn = lang === "en";
  return {
    title: isEn
      ? "Corporate Website Design: Professional Web Design for Businesses"
      : "Conception de Site Web Corporatif : Design Professionnel pour Entreprises",
    description: isEn
      ? "Corporate website design for businesses. A professional website that builds trust, captures leads and ranks in Google. Technical SEO included from day one."
      : "Conception de sites web corporatifs pour entreprises. Un site professionnel qui génère la confiance, capte des leads et se positionne sur Google. SEO technique inclus dès le premier jour.",
    alternates: alternatesFor(`/${lang}/corporate-website-design/`) ?? {
      canonical: `https://www.mktweb360.com/${lang}/corporate-website-design/`,
    },
    openGraph: {
      title: isEn
        ? "Professional Corporate Website Design — Web Design for Businesses | Mkt Web 360"
        : "Conception de Site Web Corporatif Professionnel — Design pour Entreprises | Mkt Web 360",
      description: isEn
        ? "Corporate website design for businesses. Professional website that builds trust, captures leads and ranks in Google. Technical SEO included from day one."
        : "Conception de sites web corporatifs pour entreprises. Site professionnel qui génère la confiance, capte des leads et se positionne sur Google. SEO technique inclus dès le premier jour.",
      url: `https://www.mktweb360.com/${lang}/corporate-website-design/`,
      images: [{ url: "https://www.mktweb360.com/og-paginas-corporativas.jpg", width: 1200, height: 630 }],
    },
  };
}

export default async function Page({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const isEn = lang === "en";

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: isEn ? "Corporate Website Design" : "Conception de Site Web Corporatif",
    serviceType: "Web Design",
    provider: { "@type": "Organization", name: "Mkt Web 360 SLU", url: "https://www.mktweb360.com" },
    description: isEn
      ? "Design and development of professional corporate websites for businesses. Website optimised for SEO, lead generation and conversion."
      : "Conception et développement de sites web corporatifs professionnels pour entreprises. Site optimisé pour le SEO, la génération de leads et la conversion.",
    areaServed: isEn ? "Spain" : "Espagne",
    url: `https://www.mktweb360.com/${lang}/corporate-website-design/`,
    offers: {
      "@type": "Offer",
      price: "790",
      priceCurrency: "EUR",
      availability: "https://schema.org/InStock",
      url: `https://www.mktweb360.com/${lang}/corporate-website-design/`,
    },
  };

  const FAQS = isEn
    ? [
        {
          q: "How much does a professional corporate website cost?",
          a: "The price of a corporate website depends on the number of pages, functionalities and level of customisation. At Mkt Web 360 we start from €790 for corporate websites with professional design, technical SEO included and training for autonomous management. Companies with multiple locations, languages or complex integrations receive a customised quote.",
        },
        {
          q: "How long does the corporate website take to be ready?",
          a: "The usual timeframe is 3 to 5 weeks from the start of the project, depending on the speed at which the client provides content. We work with a structured process with partial deliveries so you can validate progress at each phase.",
        },
        {
          q: "Will I be able to manage the website myself once it is delivered?",
          a: "Yes. We develop on WordPress with training included so you can update texts, images, add new pages and manage the blog completely autonomously. The website is yours, with no dependencies or mandatory maintenance costs.",
        },
        {
          q: "Is SEO included in the corporate website design?",
          a: "Technical SEO is included: URL structure, metadata, loading speed, sitemap, schema markup and mobile optimisation. Ongoing Google positioning (link building, SEO content, keyword strategy) is a separate service that complements the website to achieve long-term organic results.",
        },
      ]
    : [
        {
          q: "Combien coûte un site web corporatif professionnel ?",
          a: "Le prix d'un site web corporatif dépend du nombre de pages, des fonctionnalités et du niveau de personnalisation. Chez Mkt Web 360, nous partons de 790 € pour des sites web corporatifs avec un design professionnel, le SEO technique inclus et une formation pour la gestion autonome. Les entreprises avec plusieurs sites, langues ou intégrations complexes reçoivent un devis personnalisé.",
        },
        {
          q: "Combien de temps faut-il pour que le site web corporatif soit prêt ?",
          a: "Le délai habituel est de 3 à 5 semaines à partir du début du projet, selon la rapidité avec laquelle le client fournit les contenus. Nous travaillons avec un processus structuré avec des livraisons partielles pour que vous puissiez valider l'avancement à chaque phase.",
        },
        {
          q: "Pourrai-je gérer le site web moi-même une fois livré ?",
          a: "Oui. Nous développons sur WordPress avec une formation incluse pour que vous puissiez mettre à jour les textes, les images, ajouter de nouvelles pages et gérer le blog de manière complètement autonome. Le site web est le vôtre, sans dépendances ni coûts de maintenance obligatoires.",
        },
        {
          q: "Le SEO est-il inclus dans la conception du site web corporatif ?",
          a: "Le SEO technique est inclus : structure des URLs, métadonnées, vitesse de chargement, sitemap, schema markup et optimisation mobile. Le positionnement continu sur Google (link building, contenu SEO, stratégie de mots-clés) est un service séparé qui complète le site web pour obtenir des résultats organiques à long terme.",
        },
      ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  const SECTORS = isEn
    ? [
        { icon: "⚖️", label: "Law firms & advisories" },
        { icon: "🏗️", label: "Construction & renovation" },
        { icon: "🏥", label: "Health & clinics" },
        { icon: "🎓", label: "Training & education" },
        { icon: "🏭", label: "Industry & services" },
        { icon: "💻", label: "Technology & software" },
        { icon: "🏢", label: "Real estate" },
        { icon: "🍽️", label: "Hospitality & restaurants" },
        { icon: "🚚", label: "Logistics & transport" },
      ]
    : [
        { icon: "⚖️", label: "Cabinets juridiques et conseils" },
        { icon: "🏗️", label: "Construction et rénovation" },
        { icon: "🏥", label: "Santé et cliniques" },
        { icon: "🎓", label: "Formation et éducation" },
        { icon: "🏭", label: "Industrie et services" },
        { icon: "💻", label: "Technologie et logiciels" },
        { icon: "🏢", label: "Immobilier" },
        { icon: "🍽️", label: "Hôtellerie et restauration" },
        { icon: "🚚", label: "Logistique et transport" },
      ];

  const PROCESS = isEn
    ? [
        { n: "1", t: "Analysis and strategy", d: "We study your sector, competitors and highest-potential keywords. We define the website architecture, necessary pages and key messages for each type of client." },
        { n: "2", t: "Design and development", d: "We create a unique design adapted to your corporate identity. Fast, secure, mobile-friendly and with technical SEO integrated from the first day of development." },
        { n: "3", t: "Content and optimisation", d: "We write or review the texts on each page with a focus on positioning and conversion. We integrate the contact form, Google Maps, the blog and any necessary tools." },
        { n: "4", t: "Training and handover", d: "We teach you to manage the website autonomously. The website is yours, no strings attached. You can update it, add pages and publish content without depending on us." },
      ]
    : [
        { n: "1", t: "Analyse et stratégie", d: "Nous étudions votre secteur, vos concurrents et les mots-clés à plus fort potentiel. Nous définissons l'architecture du site, les pages nécessaires et les messages clés pour chaque type de client." },
        { n: "2", t: "Design et développement", d: "Nous créons un design unique adapté à votre identité corporative. Rapide, sécurisé, adapté aux mobiles et avec le SEO technique intégré dès le premier jour de développement." },
        { n: "3", t: "Contenu et optimisation", d: "Nous rédigeons ou révisons les textes de chaque page avec un focus sur le positionnement et la conversion. Nous intégrons le formulaire de contact, Google Maps, le blog et tout outil nécessaire." },
        { n: "4", t: "Formation et livraison", d: "Nous vous apprenons à gérer le site de manière autonome. Le site est le vôtre, sans contraintes. Vous pouvez le mettre à jour, ajouter des pages et publier du contenu sans dépendre de nous." },
      ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <article className="max-w-3xl mx-auto px-4 py-12">
        <Breadcrumbs
          crumbs={[
            { label: isEn ? "Home" : "Accueil", href: `/${lang}/` },
            { label: isEn ? "Web Design" : "Création de Site Web", href: `/${lang}/${isEn ? "web-design" : "creation-site-web"}/` },
            { label: isEn ? "Corporate Websites" : "Sites Corporatifs" },
          ]}
        />

        <header className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="bg-primary-100 text-primary-700 text-xs font-medium px-2.5 py-0.5 rounded-full">
              {isEn ? "Web Design · Business" : "Création Web · Entreprises"}
            </span>
          </div>
          <h1 className="text-4xl font-bold text-primary-600 mb-4 leading-tight">
            {isEn
              ? "Corporate Website Design: Your Business, Visible and Professional in Google"
              : "Conception de Site Web Corporatif : Votre Entreprise, Visible et Professionnelle sur Google"}
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            {isEn
              ? "A corporate website is not just a shop window — it is the most powerful sales tool your business has. The one that works 24 hours a day, 365 days a year, building trust and attracting clients while you focus on your business."
              : "Un site web corporatif n'est pas seulement une vitrine — c'est l'outil de vente le plus puissant que possède votre entreprise. Celui qui travaille 24 heures sur 24, 365 jours par an, générant confiance et captant des clients pendant que vous vous consacrez à votre activité."}
          </p>
        </header>

        <div className="text-gray-700 space-y-6 leading-relaxed">
          <p>
            {isEn
              ? "When a potential client wants to know whether they can trust your business, the first thing they do is search for your website. That moment — the first 5 seconds on your page — determines whether they keep reading or go back to Google to look at your competition. A professional corporate website transforms that moment of doubt into a first impression that builds confidence."
              : "Quand un client potentiel veut savoir s'il peut faire confiance à votre entreprise, la première chose qu'il fait est de chercher votre site web. Ce moment — les 5 premières secondes sur votre page — décide s'il continue à lire ou retourne sur Google pour regarder votre concurrence. Un site web corporatif professionnel transforme ce moment de doute en une première impression qui génère la confiance."}
          </p>

          <h2 className="text-2xl font-bold text-primary-600">
            {isEn
              ? "Why a professional corporate website matters"
              : "Pourquoi un site web corporatif professionnel est important"}
          </h2>
          <p>
            {isEn
              ? "75% of people judge a company's credibility by the design of its website. Not by its track record, not by its years of experience, not by its clients — by how the website looks. This means a company with 20 years of history and an outdated website competes at a disadvantage against a more recent competitor with a well-maintained digital presence."
              : "75 % des personnes jugent la crédibilité d'une entreprise par le design de son site web. Pas par son parcours, pas par ses années d'expérience, pas par ses clients — par l'apparence du site web. Cela signifie qu'une entreprise avec 20 ans d'histoire et un site obsolète est en désavantage face à un concurrent plus récent avec une présence numérique soignée."}
          </p>
          <p>
            {isEn
              ? "Trust is built before the first contact. Professional design, clear texts, real photos of the team and premises, and an easy-to-navigate structure communicate seriousness before the client has read a single line of your proposal. And a technically well-built website ranks in Google, multiplying the number of people who arrive at that first impression organically and for free."
              : "La confiance se construit avant le premier contact. Un design professionnel, des textes clairs, de vraies photos de l'équipe et des locaux, et une structure facile à naviguer communiquent le sérieux avant même que le client ait lu une ligne de votre proposition. Et un site web bien construit techniquement se positionne sur Google, multipliant le nombre de personnes qui arrivent à cette première impression de manière organique et gratuite."}
          </p>
          <p>
            {isEn
              ? "The third factor is conversion. A corporate website does not exist only to inform — it exists to convert visitors into leads. Well-placed forms, clear calls to action, fast loading times and a smooth mobile experience are technical elements that make the difference between a website that generates contacts and one that simply occupies space on the internet."
              : "Le troisième facteur est la conversion. Un site web corporatif n'existe pas seulement pour informer — il existe pour convertir les visiteurs en leads. Des formulaires bien placés, des appels à l'action clairs, des temps de chargement rapides et une expérience fluide sur mobile sont des éléments techniques qui font la différence entre un site web qui génère des contacts et un site web qui occupe simplement de l'espace sur internet."}
          </p>
          <p className="text-gray-600 leading-relaxed">
            {isEn
              ? "The real problem is not lacking a website. It is having a website that does not work."
              : "Le vrai problème n'est pas de manquer d'un site web. C'est d'avoir un site web qui ne travaille pas."}
          </p>
          <p className="text-gray-600 leading-relaxed">
            {isEn
              ? "A corporate website that works has a clear objective on each page: that the visitor understands what the company does, why they should trust it, and what they need to do next. This is not achieved with a pretty design. It is achieved with a well-thought-out content architecture, messages aligned with what the potential client is searching for, and trust elements correctly positioned."
              : "Un site web corporatif qui travaille a un objectif clair sur chaque page : que le visiteur comprenne ce que fait l'entreprise, pourquoi il devrait lui faire confiance, et ce qu'il doit faire ensuite. Cela ne s'obtient pas avec un beau design. Cela s'obtient avec une architecture de contenu bien pensée, des messages alignés sur ce que le client potentiel cherche, et des éléments de confiance correctement positionnés."}
          </p>

          <h2 className="text-2xl font-bold text-primary-600">
            {isEn ? "What a corporate website must include" : "Ce qu'un site web corporatif doit inclure"}
          </h2>
          <p>
            {isEn
              ? "An effective corporate website is not a collection of pages — it is an architecture designed to guide the visitor from discovery to contact. These are the essential elements:"
              : "Un site web corporatif efficace n'est pas une collection de pages — c'est une architecture pensée pour guider le visiteur de la découverte au contact. Voici les éléments indispensables :"}
          </p>
          <ul className="list-disc pl-6 space-y-2">
            {(isEn
              ? [
                  { strong: "Home page with clear value proposition:", rest: "in less than 5 seconds the visitor must understand what you do, for whom and why to choose you. Without ambiguity, without industry jargon." },
                  { strong: "Detailed service pages:", rest: "each service on its own page, explained from the client's perspective: what problem it solves, how it works, who it is for and what result they can expect." },
                  { strong: "About us page with real team:", rest: "name, photo and role of the people behind the business. Humanisation is the most underestimated trust factor in corporate websites." },
                  { strong: "Case studies or portfolio:", rest: "real results with real clients. Specific numbers and names convert far more than generic texts." },
                  { strong: "Blog or content section:", rest: "articles useful to your target audience position the company as a sector reference and attract organic traffic continuously." },
                  { strong: "Optimised contact form:", rest: "visible on every page, simple to complete and with immediate confirmation. The number of fields is inversely proportional to the conversion rate." },
                  { strong: "Contact details and location:", rest: "phone, email, address and hours in a visible place on all pages, especially in the footer and contact page." },
                ]
              : [
                  { strong: "Page d'accueil avec proposition de valeur claire :", rest: "en moins de 5 secondes le visiteur doit comprendre ce que vous faites, pour qui et pourquoi vous choisir. Sans ambiguïtés, sans jargon du secteur." },
                  { strong: "Pages de services détaillées :", rest: "chaque service sur sa propre page, expliqué du point de vue du client : quel problème il résout, comment il fonctionne, à qui il s'adresse et quel résultat on peut attendre." },
                  { strong: "Page À propos avec une vraie équipe :", rest: "nom, photo et rôle des personnes derrière l'entreprise. L'humanisation est le facteur de confiance le plus sous-estimé dans les sites web corporatifs." },
                  { strong: "Études de cas ou portfolio :", rest: "des résultats réels avec de vrais clients. Les chiffres et les noms concrets convertissent beaucoup plus que les textes génériques." },
                  { strong: "Blog ou section de contenus :", rest: "des articles utiles pour votre audience cible positionnent l'entreprise comme référence du secteur et attirent du trafic organique en continu." },
                  { strong: "Formulaire de contact optimisé :", rest: "visible sur chaque page, simple à remplir et avec confirmation immédiate. Le nombre de champs est inversement proportionnel au taux de conversion." },
                  { strong: "Coordonnées et localisation :", rest: "téléphone, email, adresse et horaires dans un endroit visible sur toutes les pages, notamment dans le pied de page et la page de contact." },
                ]
            ).map(({ strong, rest }) => (
              <li key={strong}>
                <strong>{strong}</strong> {rest}
              </li>
            ))}
          </ul>

          <h2 className="text-2xl font-bold text-primary-600">
            {isEn ? "Our 4-step process" : "Notre processus en 4 étapes"}
          </h2>
          <ul className="list-none space-y-4">
            {PROCESS.map((s) => (
              <li key={s.n} className="flex gap-4 items-start">
                <span className="w-8 h-8 rounded-full bg-accent-500 text-white text-sm font-bold flex items-center justify-center shrink-0">
                  {s.n}
                </span>
                <div>
                  <p className="font-semibold text-primary-700">{s.t}</p>
                  <p className="text-gray-600 text-sm">{s.d}</p>
                </div>
              </li>
            ))}
          </ul>

          <h2 className="text-2xl font-bold text-primary-600">
            {isEn ? "Sectors we work with" : "Secteurs dans lesquels nous travaillons"}
          </h2>
          <p>
            {isEn
              ? "We design corporate websites for businesses of all sizes and sectors. Some of the most common:"
              : "Nous concevons des sites web corporatifs pour des entreprises de toutes tailles et de tous secteurs. Quelques-uns des plus courants :"}
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {SECTORS.map((s) => (
              <div key={s.label} className="flex items-center gap-2 bg-gray-50 rounded-xl px-3 py-2.5 border border-gray-100">
                <span>{s.icon}</span>
                <span className="text-sm text-gray-700 font-medium">{s.label}</span>
              </div>
            ))}
          </div>

          <h2 className="text-2xl font-bold text-primary-600">
            {isEn
              ? "Corporate website vs online shop: which do you need?"
              : "Site web corporatif vs boutique en ligne : lequel vous faut-il ?"}
          </h2>
          <div className="space-y-4 text-gray-600">
            <p>
              {isEn
                ? "The difference between a corporate website and an online shop is not just functional — it is strategic. A corporate website is designed to build trust, present the company and convert visitors into contacts or calls. An online shop is designed to convert visitors into direct buyers."
                : "La différence entre un site web corporatif et une boutique en ligne n'est pas seulement fonctionnelle — elle est stratégique. Un site web corporatif est conçu pour générer la confiance, présenter l'entreprise et convertir les visiteurs en contacts ou en appels. Une boutique en ligne est conçue pour convertir les visiteurs en acheteurs directs."}
            </p>
            <p>
              {isEn
                ? "You need a corporate website if your sales process involves prior contact, if you sell services or projects requiring customisation, if your clients are businesses (B2B), or if your product or service ticket means the purchase decision requires time and trust before closing."
                : "Vous avez besoin d'un site web corporatif si votre processus de vente implique un contact préalable, si vous vendez des services ou des projets nécessitant une personnalisation, si vos clients sont des entreprises (B2B), ou si la valeur de votre produit ou service fait que la décision d'achat nécessite du temps et de la confiance avant la conclusion."}
            </p>
            <p>
              {isEn
                ? "Some businesses need both: a corporate website that presents the company and builds trust, plus an integrated online shop for the direct sales channel. In those cases we develop both as a cohesive system, not as two independent projects."
                : "Certaines entreprises ont besoin des deux : un site web corporatif qui présente l'entreprise et construit la confiance, plus une boutique en ligne intégrée pour le canal de vente directe. Dans ces cas, nous développons les deux comme un système cohésif, pas comme deux projets indépendants."}
            </p>
          </div>

          <div className="bg-primary-50 rounded-xl p-6 border border-primary-100">
            <p className="font-semibold text-primary-700 mb-2">
              {isEn ? "Not sure which type of website your business needs?" : "Vous ne savez pas quel type de site web votre entreprise a besoin ?"}
            </p>
            <p className="text-gray-600 text-sm mb-4">
              {isEn
                ? "Tell us about your business and we will recommend the most suitable solution. No commitment, no detours."
                : "Parlez-nous de votre entreprise et nous vous recommanderons la solution la plus adaptée. Sans engagement, sans détours."}
            </p>
            <Link
              href={`/${lang}/contact/`}
              className="inline-block bg-accent-500 text-white px-6 py-2.5 rounded-full font-semibold text-sm hover:bg-accent-600 transition-colors"
            >
              {isEn ? "Talk to a specialist" : "Parler à un spécialiste"}
            </Link>
          </div>

          <h2 className="text-2xl font-bold text-primary-600">
            {isEn ? "Technology and why we use WordPress" : "Technologie et pourquoi nous utilisons WordPress"}
          </h2>
          <div className="space-y-4 text-gray-600">
            <p>
              {isEn
                ? "We develop corporate websites on WordPress because it is the platform that best balances three critical factors for the client: autonomous management capability, long-term maintenance cost, and flexibility to grow."
                : "Nous développons des sites web corporatifs sur WordPress car c'est la plateforme qui équilibre le mieux trois facteurs critiques pour le client : capacité de gestion autonome, coût de maintenance à long terme et flexibilité pour croître."}
            </p>
            <p>
              {isEn
                ? "WordPress powers more than 40% of all websites in the world. That means any professional can make changes to your website if you ever need external support — you are not tied to us or any other provider. The code, the domain and the hosting are yours from day one."
                : "WordPress alimente plus de 40 % de tous les sites web du monde. Cela signifie que tout professionnel peut apporter des modifications à votre site si vous avez besoin d'un support externe — vous n'êtes pas lié à nous ni à aucun autre fournisseur. Le code, le domaine et l'hébergement vous appartiennent dès le premier jour."}
            </p>
            <p>
              {isEn
                ? "Technical SEO is integrated into the architecture: clean URLs, optimised loading speed, automatic sitemap, schema markup, editable metadata and correct heading structure. It is not something we add at the end — it is part of the design from the start."
                : "Le SEO technique est intégré dans l'architecture : URLs propres, vitesse de chargement optimisée, sitemap automatique, schema markup, métadonnées éditables et structure de titres correcte. Ce n'est pas quelque chose que nous ajoutons à la fin — c'est une partie du design dès le début."}
            </p>
          </div>

          <h2 className="text-2xl font-bold text-primary-600">
            {isEn ? "Frequently asked questions" : "Questions fréquentes"}
          </h2>
          <div className="space-y-3">
            {FAQS.map((faq) => (
              <details key={faq.q} className="border border-gray-200 rounded-xl overflow-hidden group">
                <summary className="px-6 py-4 cursor-pointer font-semibold text-primary-700 hover:bg-primary-50 list-none flex justify-between items-center">
                  {faq.q}
                  <span className="text-accent-500 group-open:rotate-180 transition-transform">▾</span>
                </summary>
                <div className="px-6 py-4 text-gray-600 border-t border-gray-100">{faq.a}</div>
              </details>
            ))}
          </div>

          <div className="bg-primary-600 text-white rounded-2xl p-8 my-2 text-center">
            <h2 className="text-2xl font-bold mb-3">
              {isEn ? "A corporate website that works for you" : "Un site web corporatif qui travaille pour vous"}
            </h2>
            <p className="text-primary-200 mb-6">
              {isEn
                ? "Professional design, technical SEO included, autonomous management and no strings attached. Your business visible and generating leads from day one."
                : "Design professionnel, SEO technique inclus, gestion autonome et sans contraintes. Votre entreprise visible et générant des leads dès le premier jour."}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href={`/${lang}/contact/`}
                className="bg-accent-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-accent-600 transition-colors"
              >
                {isEn ? "Request a quote" : "Demander un devis"}
              </Link>
              <Link
                href={`/${lang}/${isEn ? "web-design" : "creation-site-web"}/`}
                className="border-2 border-white text-white px-6 py-3 rounded-full font-semibold hover:bg-white/10 transition-colors"
              >
                {isEn ? "View web design service" : "Voir le service création web"}
              </Link>
            </div>
          </div>

          <p className="text-sm text-gray-500 pt-2">
            {isEn ? "See also:" : "Voir aussi :"}{" "}
            <Link href={`/${lang}/how-much-does-a-website-cost/`} className="text-accent-500 hover:underline">
              {isEn ? "How much does a professional website cost?" : "Combien coûte un site web professionnel ?"}
            </Link>
          </p>
        </div>

        <nav className="mt-12 pt-8 border-t border-gray-200">
          <Link
            href={`/${lang}/${isEn ? "web-design" : "creation-site-web"}/`}
            className="text-accent-500 hover:text-accent-600 font-medium text-sm"
          >
            ← {isEn ? "Back to Web Design" : "Retour à Création de Site Web"}
          </Link>
        </nav>
      </article>

      <RelatedArticles category={isEn ? "Web Design" : "Création Web"} />
    </>
  );
}
