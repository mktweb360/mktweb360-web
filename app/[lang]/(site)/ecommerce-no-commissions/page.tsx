import { ContactForm } from "@/components/ContactForm";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import Link from "next/link";
import { alternatesFor, langSlug } from "@/lib/i18n/routes";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const isEn = lang === "en";
  return {
    title: isEn
      ? "Online Store Without Commissions or Fees"
      : "Boutique en ligne sans commissions ni frais",
    description: isEn
      ? "Professional online store without commissions per sale or monthly fees. React + WooCommerce. Migration included. Offer from €490."
      : "Boutique en ligne professionnelle sans commissions par vente ni frais mensuels. React + WooCommerce. Migration incluse. Offre à partir de 490€.",
    alternates: alternatesFor(`/${lang}/ecommerce-no-commissions/`) ?? {
      canonical: `https://www.mktweb360.com/${lang}/ecommerce-no-commissions/`,
    },
  };
}


const INTRO = {
  en: {
    paragraphs: [
      "Having an online store should not cost you a percentage of every sale you make. We design professional online stores on WooCommerce with no commission per sale, no monthly licences and everything you need to sell from day one.",
      "The model used by platforms such as Shopify has become so normal that many people assume paying a monthly fee plus a percentage of every sale is standard. It is not. There are alternatives that give you the same control, the same professionalism and better features — without the platform taking a share of your revenue every time you sell.",
    ],
  },
  fr: {
    paragraphs: [
      "Avoir une boutique en ligne ne devrait pas vous coûter un pourcentage de chaque vente. Nous concevons des boutiques en ligne professionnelles sur WooCommerce, sans commission par vente, sans licence mensuelle et avec tout ce qu'il faut pour vendre dès le premier jour.",
      "Le modèle des plateformes comme Shopify s'est tellement banalisé que beaucoup pensent qu'il est normal de payer un abonnement mensuel plus un pourcentage de chaque vente. Ce n'est pas le cas. Il existe des alternatives qui offrent le même contrôle, le même professionnalisme et de meilleures fonctionnalités, sans que la plateforme prélève une part de votre chiffre d'affaires à chaque vente.",
    ],
  },
};

const COMPARISON = {
  en: {
    title: "WooCommerce vs Shopify: the difference nobody tells you about",
    paragraphs: [
      "Shopify is a SaaS platform: you pay a monthly subscription (from €29 to €299 depending on the plan) and you also give up between 0.5% and 2% of every sale you make through the platform. It may not seem much, but if you sell €5,000 a month and pay a 1% commission, that is an extra €50 a month in commissions alone — €600 a year on top of the platform fee.",
      "WooCommerce is open source and free. It is installed on WordPress, which is also free. You only pay for hosting (from €8–15 a month for a small store) and the domain. No monthly platform fees. No commission per sale. The store is entirely yours and you can move it to any server whenever you like.",
      "Shopify has the advantage of an easier initial learning curve — it is simpler for someone without technical knowledge. But for anyone who is serious about their store, WooCommerce offers more flexibility, no commissions and no risk of the platform changing its fees and leaving you without options.",
    ],
  },
  fr: {
    title: "WooCommerce ou Shopify : la différence dont personne ne vous parle",
    paragraphs: [
      "Shopify est une plateforme SaaS : vous payez un abonnement mensuel (de 29 € à 299 € selon la formule) et vous cédez en plus entre 0,5 % et 2 % de chaque vente réalisée via la plateforme. Cela semble peu, mais si vous vendez 5 000 € par mois et payez 1 % de commission, cela représente 50 € de plus par mois rien qu'en commissions, soit 600 € par an qui s'ajoutent à l'abonnement.",
      "WooCommerce est open source et gratuit. Il s'installe sur WordPress, lui aussi gratuit. Vous ne payez que l'hébergement (à partir de 8 à 15 € par mois pour une petite boutique) et le nom de domaine. Pas d'abonnement à une plateforme. Pas de commission par vente. La boutique vous appartient entièrement et vous pouvez la transférer vers n'importe quel serveur quand vous le souhaitez.",
      "L'avantage de Shopify réside dans sa prise en main initiale, plus simple pour une personne sans connaissances techniques. Mais pour qui prend sa boutique au sérieux, WooCommerce offre plus de souplesse, aucune commission et aucun risque de voir la plateforme modifier ses tarifs en vous laissant sans alternative.",
    ],
  },
};

const FEATURES = {
  en: {
    title: "What a professional online store includes",
    items: [
      { label: "100% custom design", text: "tailored to your brand, your colours and your identity. No generic templates — a design that sets your store apart from the competition." },
      { label: "Product catalogue", text: "initial upload of your products with photos, descriptions, variants (size, colour, etc.), prices and stock. Bulk import via CSV if you have a large catalogue." },
      { label: "Payment methods", text: "credit/debit card (Redsys or Stripe), PayPal, bank transfer, cash on delivery and Bizum. Instalment financing too, if your average order value justifies it." },
      { label: "Shipping management", text: "shipping zones, rates by weight or price, free shipping above a set amount and integration with carriers (Correos, MRW, SEUR, GLS)." },
      { label: "Technical SEO included", text: "friendly URL structure, product and category metadata, product schema for rich snippets, sitemap and optimised speed." },
      { label: "Self-management dashboard", text: "add products, manage orders, view sales statistics and update the store without any technical knowledge." },
    ],
  },
  fr: {
    title: "Ce que comprend une boutique en ligne professionnelle",
    items: [
      { label: "Design 100 % personnalisé", text: "adapté à votre marque, à vos couleurs et à votre identité. Pas de modèle générique, mais un design qui distingue votre boutique de la concurrence." },
      { label: "Catalogue produits", text: "chargement initial de vos produits avec photos, descriptions, déclinaisons (taille, couleur, etc.), prix et stock. Import en masse par CSV pour les catalogues volumineux." },
      { label: "Moyens de paiement", text: "carte bancaire (Redsys ou Stripe), PayPal, virement, paiement à la livraison et Bizum. Paiement en plusieurs fois également, si votre panier moyen le justifie." },
      { label: "Gestion des expéditions", text: "zones de livraison, tarifs selon le poids ou le prix, livraison gratuite à partir d'un certain montant et intégration avec les transporteurs (Correos, MRW, SEUR, GLS)." },
      { label: "SEO technique inclus", text: "URL lisibles, métadonnées des produits et des catégories, schéma produit pour les rich snippets, sitemap et vitesse optimisée." },
      { label: "Interface de gestion autonome", text: "ajoutez des produits, gérez les commandes, consultez les statistiques de vente et mettez à jour la boutique sans connaissances techniques." },
    ],
  },
};

const STEPS = {
  en: {
    title: "Our process: from zero to a live store in 4 steps",
    steps: [
      { num: "01", title: "Analysis and planning", desc: "We study your catalogue, your online competitors and the keywords with the most search volume, so the store is structured to rank well from launch." },
      { num: "02", title: "Design and development", desc: "We design the store around your brand: home page, product pages, categories, basket, checkout and legal pages. Optimised for mobile and loading speed." },
      { num: "03", title: "Product upload and integrations", desc: "We upload your initial catalogue and configure payment methods, shipping zones and any integration you need (ERP, stock management, marketplace)." },
      { num: "04", title: "Training and launch", desc: "We train you to manage orders, add products and run the store on your own. And we support you through the launch so everything works from day one." },
    ],
  },
  fr: {
    title: "Notre méthode : de zéro à une boutique en ligne active en 4 étapes",
    steps: [
      { num: "01", title: "Analyse et planification", desc: "Nous étudions votre catalogue, vos concurrents en ligne et les mots-clés les plus recherchés afin de structurer la boutique pour qu'elle se positionne bien dès son lancement." },
      { num: "02", title: "Design et développement", desc: "Nous concevons la boutique à l'image de votre marque : accueil, fiches produits, catégories, panier, tunnel de commande et pages légales. Optimisée pour le mobile et la vitesse de chargement." },
      { num: "03", title: "Chargement des produits et intégrations", desc: "Nous chargeons votre catalogue initial et configurons les moyens de paiement, les zones de livraison et toute intégration nécessaire (ERP, gestion des stocks, marketplace)." },
      { num: "04", title: "Formation et lancement", desc: "Nous vous formons à gérer les commandes, à ajouter des produits et à piloter la boutique en toute autonomie. Et nous vous accompagnons pendant le lancement pour que tout fonctionne dès le premier jour." },
    ],
  },
};

const OFFER = {
  en: {
    title: "Your online store, with no commissions, from €490",
    text: "Professional design, SEO included, self-management and no monthly licences. The store is yours.",
    cta: "See the online store offer",
  },
  fr: {
    title: "Votre boutique en ligne, sans commissions, à partir de 490 €",
    text: "Design professionnel, SEO inclus, gestion autonome et aucune licence mensuelle. La boutique vous appartient.",
    cta: "Voir l'offre boutique en ligne",
  },
};

const FAQS = {
  en: [
    { q: "Why WooCommerce and not Shopify?", a: "Shopify charges between 0.5% and 2% of every sale in addition to its monthly fee (from €29/month). With WooCommerce on WordPress you pay no commission per sale and no monthly platform licence. The store is yours, with no ties, and you can change hosting whenever you like." },
    { q: "How many products can I have in the store?", a: "No limit. WooCommerce handles anything from 10-product stores to catalogues of thousands of items. We can import your existing catalogue by CSV if your products are already in another system." },
    { q: "Which payment methods can you integrate?", a: "We integrate the most common payment methods in Spain: credit/debit card via Redsys or Stripe, PayPal, bank transfer, cash on delivery and Bizum. We can also integrate instalment financing with Aplazame or Sequra if your average order value justifies it." },
    { q: "Will the store be optimised for SEO from the start?", a: "Yes. We configure the URL structure, product and category metadata, the sitemap, product schema (for rich snippets on Google), loading speed and the mobile version. Technical SEO is included in the build from day one." },
  ],
  fr: [
    { q: "Pourquoi WooCommerce et pas Shopify ?", a: "Shopify prélève entre 0,5 % et 2 % de chaque vente en plus de son abonnement mensuel (à partir de 29 €/mois). Avec WooCommerce sur WordPress, vous ne payez ni commission par vente ni licence mensuelle de plateforme. La boutique vous appartient, sans engagement, et vous pouvez changer d'hébergeur quand vous le voulez." },
    { q: "Combien de produits puis-je avoir dans la boutique ?", a: "Aucune limite. WooCommerce gère aussi bien des boutiques de 10 produits que des catalogues de plusieurs milliers de références. Nous pouvons importer votre catalogue existant au format CSV si vos produits se trouvent déjà dans un autre système." },
    { q: "Quels moyens de paiement pouvez-vous intégrer ?", a: "Nous intégrons les moyens de paiement les plus courants en Espagne : carte bancaire via Redsys ou Stripe, PayPal, virement, paiement à la livraison et Bizum. Nous pouvons aussi intégrer le paiement en plusieurs fois avec Aplazame ou Sequra si votre panier moyen le justifie." },
    { q: "La boutique sera-t-elle optimisée pour le SEO dès le départ ?", a: "Oui. Nous configurons la structure des URL, les métadonnées des produits et des catégories, le sitemap, le schéma produit (pour les rich snippets sur Google), la vitesse de chargement et la version mobile. Le SEO technique est inclus dans le développement dès le premier jour." },
  ],
};

const SEE_ALSO = {
  en: [
    { slug: "migrate-shopify-to-woocommerce", label: "Migrating from Shopify to WooCommerce" },
    { slug: "seo-for-ecommerce-errors", label: "SEO for e-commerce" },
    { slug: "configure-shipping-woocommerce", label: "Configuring shipping in WooCommerce" },
  ],
  fr: [
    { slug: "migrate-shopify-to-woocommerce", label: "Migrer de Shopify vers WooCommerce" },
    { slug: "seo-for-ecommerce-errors", label: "SEO pour l'e-commerce" },
    { slug: "configure-shipping-woocommerce", label: "Configurer les expéditions dans WooCommerce" },
  ],
};

export default async function Page({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const isEn = lang === "en";

  const L = isEn ? "en" : "fr";
  const intro = INTRO[L];
  const comparison = COMPARISON[L];
  const features = FEATURES[L];
  const steps = STEPS[L];
  const offer = OFFER[L];
  const faqs = FAQS[L];
  const seeAlso = SEE_ALSO[L];

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

  const includes = isEn
    ? [
        "100% custom design",
        "React frontend + WooCommerce backend",
        "Stripe, Apple Pay and Google Pay configured",
        "Full product catalogue management",
        "Carrier integration and shipment tracking",
        "Technical SEO included from day one",
        "No commission per sale — €0 per transaction",
        "No monthly platform fee",
        "Full migration from your current store",
        "Bulk catalogue import from Excel or CSV",
        "POS integration if you have a physical shop",
        "Full training for autonomous management",
      ]
    : [
        "Design 100% personnalisé",
        "Frontend React + backend WooCommerce",
        "Stripe, Apple Pay et Google Pay configurés",
        "Gestion complète du catalogue produits",
        "Intégration transporteurs et suivi des expéditions",
        "SEO technique inclus dès le premier jour",
        "Aucune commission par vente — 0€ par transaction",
        "Aucun abonnement mensuel",
        "Migration complète depuis votre boutique actuelle",
        "Import massif de catalogue depuis Excel ou CSV",
        "Intégration TPV si vous avez une boutique physique",
        "Formation complète pour la gestion autonome",
      ];

  const metrics = isEn
    ? [
        { value: "0€", label: "commission per sale" },
        { value: "0€", label: "monthly platform fee" },
        { value: "100%", label: "custom design" },
        { value: "Stripe", label: "Apple Pay · Google Pay" },
      ]
    : [
        { value: "0€", label: "commission par vente" },
        { value: "0€", label: "abonnement mensuel" },
        { value: "100%", label: "design personnalisé" },
        { value: "Stripe", label: "Apple Pay · Google Pay" },
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
                { label: isEn ? "Online Store" : "Boutique en ligne" },
              ]}
            />
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight mt-4">
              {isEn ? "Your online store" : "Votre boutique en ligne"}<br />
              <span className="text-accent-400">
                {isEn ? "zero commissions, zero fees" : "zéro commission, zéro frais"}
              </span>
            </h1>
            <p className="text-xl text-primary-200 mb-8 leading-relaxed">
              {isEn
                ? "Shopify charges a monthly fee and up to 2% per sale. We build your store with our own technology — you pay once and sell forever with no additional costs."
                : "Shopify facture des frais mensuels et jusqu'à 2% par vente. Nous construisons votre boutique avec notre propre technologie — vous payez une fois et vendez pour toujours sans coûts supplémentaires."}
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
            {isEn ? "Everything included in your store" : "Tout inclus dans votre boutique"}
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
          {intro.paragraphs.map((p) => (
            <p key={p} className="text-gray-700 leading-relaxed mb-4">{p}</p>
          ))}
          <h2 className="text-3xl font-bold text-primary-600 mt-10 mb-6">{comparison.title}</h2>
          {comparison.paragraphs.map((p) => (
            <p key={p} className="text-gray-700 leading-relaxed mb-4">{p}</p>
          ))}
        </div>
      </section>

      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-primary-600 mb-8 text-center">{features.title}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {features.items.map((f) => (
              <div key={f.label} className="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
                <h3 className="font-bold text-primary-600 mb-1">{f.label}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{f.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
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
          <div className="bg-gray-50 rounded-2xl p-8 mt-10 text-center border border-gray-100">
            <h2 className="text-2xl font-bold text-primary-600 mb-3">{offer.title}</h2>
            <p className="text-gray-700 mb-6">{offer.text}</p>
            <Link
              href={`/${lang}/${langSlug(lang, "online-store-offer")}/`}
              className="inline-block bg-accent-500 text-white px-8 py-3 rounded-full font-bold hover:bg-accent-600 transition-colors"
            >
              {offer.cta}
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-primary-600 mb-8 text-center">
            {isEn ? "Frequently asked questions" : "Questions fréquentes"}
          </h2>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <div key={faq.q} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                <h3 className="font-bold text-primary-600 mb-2">{faq.q}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
          <p className="text-sm text-gray-600 mt-8">
            {isEn ? "See also:" : "Voir aussi :"}{" "}
            {seeAlso.map((l, i) => (
              <span key={l.slug}>
                {i > 0 && " · "}
                <Link href={`/${lang}/${langSlug(lang, l.slug)}/`} className="text-primary-600 hover:underline">
                  {l.label}
                </Link>
              </span>
            ))}
          </p>
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
          <ContactForm formType={`${lang}-ecommerce`} />
        </div>
      </section>
    </>
  );
}
