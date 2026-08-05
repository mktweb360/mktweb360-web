import { ContactForm } from "@/components/ContactForm";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { alternatesFor } from "@/lib/i18n/routes";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const isEn = lang === "en";
  return {
    title: isEn
      ? "Professional Online Store from €490 — No Commissions | Mkt Web 360"
      : "Boutique en Ligne Professionnelle à partir de 490€ — Sans Commissions | Mkt Web 360",
    description: isEn
      ? "Professional online store from €490. No commissions per sale, no monthly fees. Custom design, SEO included 12 months. Only 5 places available this month."
      : "Boutique en ligne professionnelle à partir de 490€. Sans commissions par vente, sans frais mensuels. Design personnalisé, SEO inclus 12 mois. Seulement 5 places ce mois-ci.",
    alternates: alternatesFor(`/${lang}/online-store-offer/`) ?? {
      canonical: `https://www.mktweb360.com/${lang}/online-store-offer/`,
    },
  };
}

export default async function Page({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const isEn = lang === "en";

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: isEn
      ? [
          { "@type": "Question", name: "How long does it take to have the store ready?", acceptedAnswer: { "@type": "Answer", text: "The standard timeframe is 3 to 4 weeks from the initial briefing to launch. For stores with large catalogues or specific functionalities it may be slightly longer. We agree the timeline before starting and we stick to it." } },
          { "@type": "Question", name: "What if I already have a Shopify or WooCommerce store?", acceptedAnswer: { "@type": "Answer", text: "We fully migrate your store: products, categories, images, customers and order history. The process is transparent for your customers — they don't lose their accounts or purchase history." } },
          { "@type": "Question", name: "Who manages the store after launch?", acceptedAnswer: { "@type": "Answer", text: "You do. We train you to manage products, stock, orders, discounts and shipping completely independently. If you prefer us to manage it, we have monthly maintenance plans." } },
          { "@type": "Question", name: "Is €490 the total price or are there additional costs?", acceptedAnswer: { "@type": "Answer", text: "€490 covers the complete design and development of the store. You will also need hosting and a domain (between €80 and €150/year depending on provider) and payment gateways charge a standard processor fee (between 1.4% and 2.9% per transaction — that's the processor's fee, not ours)." } },
        ]
      : [
          { "@type": "Question", name: "Combien de temps faut-il pour avoir la boutique prête ?", acceptedAnswer: { "@type": "Answer", text: "Le délai standard est de 3 à 4 semaines depuis le briefing initial jusqu'au lancement. Pour les boutiques avec de grands catalogues ou des fonctionnalités spécifiques, cela peut être un peu plus long. Nous convenons du délai avant de commencer et nous le respectons." } },
          { "@type": "Question", name: "Et si j'ai déjà une boutique sur Shopify ou WooCommerce ?", acceptedAnswer: { "@type": "Answer", text: "Nous migrons votre boutique complète : produits, catégories, images, clients et historique des commandes. Le processus est transparent pour vos clients — ils ne perdent pas leurs comptes ni leur historique d'achats." } },
          { "@type": "Question", name: "Qui gère la boutique après le lancement ?", acceptedAnswer: { "@type": "Answer", text: "Vous. Nous vous formons pour gérer les produits, les stocks, les commandes, les remises et les expéditions de manière complètement autonome. Si vous préférez que nous la gérions, nous avons des plans de maintenance mensuelle." } },
          { "@type": "Question", name: "Le prix de 490€ est-il tout ou y a-t-il des coûts supplémentaires ?", acceptedAnswer: { "@type": "Answer", text: "490€ couvre la conception et le développement complet de la boutique. Vous aurez également besoin d'un hébergement et d'un domaine (entre 80 et 150€/an selon le prestataire) et les passerelles de paiement facturent des frais de processeur standard (entre 1,4% et 2,9% par transaction — ce sont les frais du processeur, pas les nôtres)." } },
        ],
  };

  const includes = isEn
    ? [
        "100% custom design — not a template",
        "React frontend + WooCommerce backend",
        "Stripe, Apple Pay and Google Pay configured",
        "Full catalogue management",
        "Carrier integration",
        "Technical SEO from day one",
        "12 months SEO included in the offer",
        "No commission per sale",
        "No monthly platform fee",
        "Full migration from your current store",
        "Training for autonomous management",
        "Post-delivery support",
      ]
    : [
        "Design 100% personnalisé — pas un modèle",
        "Frontend React + backend WooCommerce",
        "Stripe, Apple Pay et Google Pay configurés",
        "Gestion complète du catalogue",
        "Intégration transporteurs",
        "SEO technique dès le premier jour",
        "12 mois de SEO inclus dans l'offre",
        "Aucune commission par vente",
        "Aucun abonnement mensuel",
        "Migration complète depuis votre boutique actuelle",
        "Formation pour la gestion autonome",
        "Support post-livraison",
      ];

  const metrics = isEn
    ? [
        { value: "€490", label: "special offer price" },
        { value: "0€", label: "commission per sale" },
        { value: "12m", label: "SEO included" },
        { value: "5", label: "places available" },
      ]
    : [
        { value: "490€", label: "prix offre spéciale" },
        { value: "0€", label: "commission par vente" },
        { value: "12m", label: "SEO inclus" },
        { value: "5", label: "places disponibles" },
      ];

  const comparison = isEn
    ? [
        { icon: "🚫", title: "Shopify Basic", desc: "€39/month + 2% per sale = +€1,500/year in fees alone", bad: true },
        { icon: "✅", title: "Mkt Web 360", desc: "€490 once + €0 commissions + SEO-optimised from day one", bad: false },
        { icon: "🚫", title: "Wix eCommerce", desc: "€17/month + commissions + generic template design", bad: true },
      ]
    : [
        { icon: "🚫", title: "Shopify Basic", desc: "39€/mois + 2% par vente = +1.500€/an en frais seuls", bad: true },
        { icon: "✅", title: "Mkt Web 360", desc: "490€ une fois + 0€ commissions + optimisée pour le SEO dès le premier jour", bad: false },
        { icon: "🚫", title: "Wix eCommerce", desc: "17€/mois + commissions + design générique de modèle", bad: true },
      ];

  const steps = isEn
    ? [
        { num: "01", title: "Briefing meeting", desc: "We receive your request and contact you within 24 hours for a briefing meeting. We define the design, catalogue, specific functionalities and delivery schedule." },
        { num: "02", title: "Design and development", desc: "We design your store from scratch — no generic templates. We implement the catalogue, payment gateways, shipping methods and all agreed functionalities." },
        { num: "03", title: "Review and adjustments", desc: "We show you the store in a test environment. We make all necessary adjustments until it's exactly as you need it. No limit on revision rounds." },
        { num: "04", title: "Launch and training", desc: "We publish the store, run the final purchase tests and train you to manage products, orders, stock and promotions independently." },
      ]
    : [
        { num: "01", title: "Réunion de briefing", desc: "Nous recevons votre demande et vous contactons en moins de 24 heures pour une réunion de briefing. Nous définissons le design, le catalogue, les fonctionnalités spécifiques et le calendrier de livraison." },
        { num: "02", title: "Conception et développement", desc: "Nous concevons votre boutique de zéro — sans modèles génériques. Nous implémentons le catalogue, les passerelles de paiement, les méthodes d'expédition et toutes les fonctionnalités convenues." },
        { num: "03", title: "Révision et ajustements", desc: "Nous vous montrons la boutique dans un environnement de test. Nous effectuons tous les ajustements nécessaires jusqu'à ce qu'elle soit exactement comme vous en avez besoin. Sans limite de rondes de révision." },
        { num: "04", title: "Lancement et formation", desc: "Nous publions la boutique, effectuons les tests d'achat finaux et vous formons pour gérer les produits, les commandes, les stocks et les promotions de manière autonome." },
      ];

  const faqs = isEn
    ? [
        { q: "How long does it take to have the store ready?", a: "The standard timeframe is 3 to 4 weeks from the initial briefing to launch. For stores with large catalogues or specific functionalities it may be slightly longer. We agree the timeline before starting and we stick to it." },
        { q: "What if I already have a Shopify or WooCommerce store?", a: "We fully migrate your store: products, categories, images, customers and order history. The process is transparent for your customers — they don't lose their accounts or purchase history." },
        { q: "Who manages the store after launch?", a: "You do. We train you to manage products, stock, orders, discounts and shipping completely independently. If you prefer us to manage it, we have monthly maintenance plans." },
        { q: "Is €490 the total price or are there additional costs?", a: "€490 covers the complete design and development of the store. You will also need hosting and a domain (between €80 and €150/year depending on provider) and payment gateways charge a standard processor fee (between 1.4% and 2.9% per transaction — that's the processor's fee, not ours)." },
      ]
    : [
        { q: "Combien de temps faut-il pour avoir la boutique prête ?", a: "Le délai standard est de 3 à 4 semaines depuis le briefing initial jusqu'au lancement. Pour les boutiques avec de grands catalogues ou des fonctionnalités spécifiques, cela peut être un peu plus long. Nous convenons du délai avant de commencer et nous le respectons." },
        { q: "Et si j'ai déjà une boutique sur Shopify ou WooCommerce ?", a: "Nous migrons votre boutique complète : produits, catégories, images, clients et historique des commandes. Le processus est transparent pour vos clients — ils ne perdent pas leurs comptes ni leur historique d'achats." },
        { q: "Qui gère la boutique après le lancement ?", a: "Vous. Nous vous formons pour gérer les produits, les stocks, les commandes, les remises et les expéditions de manière complètement autonome. Si vous préférez que nous la gérions, nous avons des plans de maintenance mensuelle." },
        { q: "Le prix de 490€ est-il tout ou y a-t-il des coûts supplémentaires ?", a: "490€ couvre la conception et le développement complet de la boutique. Vous aurez également besoin d'un hébergement et d'un domaine (entre 80 et 150€/an selon le prestataire) et les passerelles de paiement facturent des frais de processeur standard (entre 1,4% et 2,9% par transaction)." },
      ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-700 to-primary-900 text-white">
        <div className="max-w-5xl mx-auto px-4 py-20 text-center">
          <Breadcrumbs
            crumbs={[
              { label: isEn ? "Home" : "Accueil", href: `/${lang}/` },
              { label: isEn ? "Online Store Offer" : "Offre Boutique en ligne" },
            ]}
          />
          <span className="inline-block bg-accent-500 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest mb-6 mt-4">
            {isEn ? "Special offer — Only 5 places" : "Offre spéciale — Seulement 5 places"}
          </span>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            {isEn ? "Your professional online store" : "Votre boutique en ligne professionnelle"}<br />
            <span className="text-accent-400">
              {isEn ? "from €490" : "à partir de 490€"}
            </span>
          </h1>
          <p className="text-xl text-primary-200 mb-4 max-w-2xl mx-auto">
            {isEn
              ? "No commissions per sale. No monthly fees. Custom design. Technically optimised for SEO from day one."
              : "Sans commissions par vente. Sans frais mensuels. Design personnalisé. Techniquement optimisée pour le SEO dès le premier jour."}
          </p>
          <a
            href={`/${lang}/contact/`}
            className="inline-block bg-accent-500 text-white px-10 py-5 rounded-full font-bold text-xl hover:bg-accent-600 transition-colors"
          >
            {isEn ? "Reserve my place now" : "Réserver ma place maintenant"}
          </a>
          <p className="text-primary-300 text-sm mt-6">
            {isEn ? "Only 5 places available" : "Seulement 5 places disponibles"}
          </p>
        </div>
      </section>

      {/* Metrics */}
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

      {/* Comparison */}
      <section className="py-12 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            {comparison.map((c) => (
              <div key={c.title} className={`rounded-2xl p-6 border-2 ${c.bad ? "border-gray-200 bg-gray-50" : "border-accent-500 bg-accent-50"}`}>
                <div className="text-3xl mb-3">{c.icon}</div>
                <h3 className={`font-bold mb-2 ${c.bad ? "text-gray-400" : "text-accent-600"}`}>{c.title}</h3>
                <p className="text-sm text-gray-600">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Includes */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary-600 mb-4">
              {isEn ? "Everything included in your store" : "Tout inclus dans votre boutique"}
            </h2>
            <p className="text-gray-600">
              {isEn ? "No surprises. No small print." : "Sans surprises. Sans petits caractères."}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {includes.map((item) => (
              <div key={item} className="flex items-center gap-3 bg-white rounded-xl px-5 py-4 shadow-sm border border-gray-100">
                <span className="text-accent-500 font-bold text-lg shrink-0">✓</span>
                <span className="text-gray-700 text-sm">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Urgency */}
      <section className="py-12 px-4 bg-primary-700 text-white text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold mb-3">
            {isEn ? "Only 5 places available" : "Seulement 5 places disponibles"}
          </h2>
          <p className="text-primary-200 mb-6">
            {isEn
              ? "Our production capacity is limited to guarantee quality. When the 5 places are filled, we close the offer."
              : "Notre capacité de production est limitée pour garantir la qualité. Lorsque les 5 places seront remplies, nous fermerons l'offre."}
          </p>
          <a
            href={`/${lang}/contact/`}
            className="bg-accent-500 text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-accent-600 transition-colors inline-block"
          >
            {isEn ? "I want my place — €490" : "Je veux ma place — 490€"}
          </a>
        </div>
      </section>

      {/* Why own store */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-primary-600 mb-6">
            {isEn
              ? "Why your own store beats Shopify or Wix"
              : "Pourquoi votre propre boutique surpasse Shopify ou Wix"}
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            {isEn
              ? "Shopify and Wix are convenient to get started, but they have a hidden cost that doesn't appear in their monthly price: commissions per sale. If you turn over €50,000 a year with Shopify Basic, you pay €1,000 in transaction commissions alone, plus €468 in annual subscription. That's €1,500 a year gone without selling anything extra."
              : "Shopify et Wix sont pratiques pour commencer, mais ils ont un coût caché qui n'apparaît pas dans leur prix mensuel : les commissions par vente. Si vous réalisez 50.000€ de chiffre d'affaires par an avec Shopify Basic, vous payez 1.000€ en commissions de transaction seules, plus 468€ d'abonnement annuel. C'est 1.500€ par an qui partent sans avoir vendu quoi que ce soit de plus."}
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            {isEn
              ? "With your own WooCommerce store, you pay once and it's yours forever. No commission per sale, no monthly licence, no dependency on a platform that can change its prices or conditions whenever it wants. The code is yours, the data is yours and the design is 100% custom."
              : "Avec votre propre boutique WooCommerce, vous payez une fois et elle est à vous pour toujours. Sans commission par vente, sans licence mensuelle, sans dépendance d'une plateforme qui peut changer ses prix ou ses conditions quand elle le souhaite. Le code est à vous, les données sont à vous et le design est 100% personnalisé."}
          </p>
          <p className="text-gray-700 leading-relaxed">
            {isEn
              ? "Additionally, WooCommerce on WordPress is the ecommerce platform with the greatest presence in Google. Stores well built on this base have a structural SEO advantage that SaaS platforms can rarely match. We include technical SEO from day one: speed, URL structure, structured data, sitemap and indexation configuration."
              : "De plus, WooCommerce sur WordPress est la plateforme e-commerce avec la plus grande présence sur Google. Les boutiques bien construites sur cette base ont un avantage SEO structurel que les plateformes SaaS peuvent rarement égaler. Nous incluons le SEO technique dès le premier jour : vitesse, structure des URLs, données structurées, sitemap et configuration d'indexation."}
          </p>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-primary-600 mb-8 text-center">
            {isEn ? "How the delivery process works" : "Comment fonctionne le processus de livraison"}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {steps.map((step) => (
              <div key={step.num} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                <span className="inline-block text-3xl font-bold text-accent-500 mb-3">{step.num}</span>
                <h3 className="font-bold text-primary-700 text-lg mb-2">{step.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-primary-600 mb-8 text-center">
            {isEn ? "Frequently asked questions" : "Questions fréquentes"}
          </h2>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <div key={faq.q} className="bg-gray-50 border border-gray-100 rounded-2xl p-6">
                <h3 className="font-bold text-primary-700 mb-2">{faq.q}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Form */}
      <section className="py-16 px-4 bg-primary-600 text-white">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-4">
              {isEn ? "Reserve your place now" : "Réservez votre place maintenant"}
            </h2>
            <p className="text-primary-200">
              {isEn
                ? "Tell us about your project and we'll contact you within 24 hours to confirm availability."
                : "Parlez-nous de votre projet et nous vous contacterons dans les 24 heures pour confirmer la disponibilité."}
            </p>
          </div>
          <div className="bg-white rounded-2xl p-8">
            <ContactForm formType={`${lang}-online-store-offer`} />
          </div>
        </div>
      </section>
    </>
  );
}
