import Image from "next/image";
import Link from "next/link";
import { ContactForm } from "@/components/ContactForm";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { RelatedArticles } from "@/components/RelatedArticles";
import { alternatesFor } from "@/lib/i18n/routes";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const isEn = lang === "en";
  return {
    title: isEn
      ? "Professional Online Store — No Commissions | Mkt Web 360"
      : "Boutique en Ligne Professionnelle — Sans Commissions | Mkt Web 360",
    description: isEn
      ? "Professional online store without commissions or monthly fees. React + WooCommerce. Stripe, Apple Pay and Google Pay included. SEO included."
      : "Boutique en ligne professionnelle sans commissions ni abonnement mensuel. React + WooCommerce. Stripe, Apple Pay et Google Pay inclus. SEO inclus.",
    alternates: alternatesFor(`/${lang}/online-store/`) ?? {
      canonical: `https://www.mktweb360.com/${lang}/online-store/`,
    },
    openGraph: {
      title: isEn
        ? "Professional Online Store — No Commissions | Mkt Web 360"
        : "Boutique en Ligne Professionnelle — Sans Commissions | Mkt Web 360",
      description: isEn
        ? "Your professional online store with no sale commissions or monthly platform fees. 100% custom design."
        : "Votre boutique en ligne professionnelle sans commissions de vente ni abonnement mensuel. Design 100% personnalisé.",
      url: `https://www.mktweb360.com/${lang}/online-store/`,
    },
  };
}

export default async function OnlineStorePage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const isEn = lang === "en";

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: isEn ? "Professional Online Store Design" : "Conception de Boutique en Ligne Professionnelle",
    provider: { "@type": "Organization", name: "Mkt Web 360 SLU", url: "https://www.mktweb360.com" },
    description: isEn
      ? "Design and development of professional online stores with no commissions or licences. React frontend + WooCommerce. Stripe, Apple Pay and Google Pay included."
      : "Conception et développement de boutiques en ligne professionnelles sans commissions ni licences. Frontend React + WooCommerce. Stripe, Apple Pay et Google Pay inclus.",
    areaServed: isEn ? "Spain" : "Espagne",
    url: `https://www.mktweb360.com/${lang}/online-store/`,
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: (isEn
      ? [
          { q: "How long does it take for the store to be ready?", a: "The technical development is already resolved. The actual timeline depends on how quickly the client provides the material: catalogue, images, copy and company details. With material delivered on time, the store can be live within a few days." },
          { q: "Is product uploading included in the price?", a: "No. The price from €490 includes development, payment gateway configuration, initial technical SEO and one hour of online training. Catalogue loading is quoted separately based on volume and format." },
          { q: "Will I be able to manage the store without technical knowledge?", a: "Yes. The management panel is WordPress. Adding products, changing prices, managing orders and updating stock are operations that anyone can learn in the initial training session." },
          { q: "What if I already have a store on Shopify or PrestaShop?", a: "We migrate your store without losing products, customers, order history or Google rankings. We work with Shopify, PrestaShop, WooCommerce, Wix, Squarespace and Magento." },
        ]
      : [
          { q: "Combien de temps faut-il pour que la boutique soit prête ?", a: "Le développement technique est déjà résolu. Le délai réel dépend de la rapidité avec laquelle le client fournit le matériel : catalogue, images, textes et données de l'entreprise. Avec le matériel livré dans les temps, la boutique peut être opérationnelle en quelques jours." },
          { q: "Le chargement des produits est-il inclus dans le prix ?", a: "Non. Le prix à partir de 490€ inclut le développement, la configuration de la passerelle de paiement, le SEO technique initial et une heure de formation en ligne. Le chargement du catalogue est devisé séparément selon le volume et le format." },
          { q: "Pourrai-je gérer la boutique sans connaissances techniques ?", a: "Oui. Le panel de gestion est WordPress. Ajouter des produits, modifier les prix, gérer les commandes et mettre à jour le stock sont des opérations que toute personne peut apprendre lors de la formation initiale." },
          { q: "Et si j'ai déjà une boutique sur Shopify ou PrestaShop ?", a: "Nous migrons votre boutique sans perdre les produits, les clients, l'historique des commandes ni le positionnement Google. Nous travaillons avec Shopify, PrestaShop, WooCommerce, Wix, Squarespace et Magento." },
        ]
    ).map((f) => ({
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
      { "@type": "ListItem", position: 2, name: isEn ? "Online Store" : "Boutique en ligne", item: `https://www.mktweb360.com/${lang}/online-store/` },
    ],
  };

  const INCLUDES = isEn
    ? [
        "100% custom design — not a template",
        "React frontend + WooCommerce backend",
        "Stripe, Apple Pay and Google Pay configured",
        "WordPress management panel for the client",
        "Catalogue, variants, stock and orders",
        "Carrier integration and shipment tracking",
        "Technical SEO included from day one",
        "Full training for autonomous management",
        "No commission per sale — €0 per transaction",
        "No monthly platform fee",
      ]
    : [
        "Design 100% personnalisé — pas un modèle",
        "Frontend React + backend WooCommerce",
        "Stripe, Apple Pay et Google Pay configurés",
        "Panneau de gestion WordPress pour le client",
        "Catalogue, variantes, stock et commandes",
        "Intégration transporteurs et suivi des expéditions",
        "SEO technique inclus dès le premier jour",
        "Formation complète pour la gestion autonome",
        "Aucune commission par vente — 0€ par transaction",
        "Aucun abonnement mensuel de plateforme",
      ];

  const PROCESS = isEn
    ? [
        { step: "01", title: "Briefing", desc: "We understand your catalogue, your brand and your sales objectives." },
        { step: "02", title: "Design", desc: "Custom visual prototype. You approve before we develop." },
        { step: "03", title: "Development", desc: "React frontend + WooCommerce. Payment gateway configured and tested." },
        { step: "04", title: "Handover", desc: "Training, handover and support. Selling from day one." },
      ]
    : [
        { step: "01", title: "Briefing", desc: "Nous comprenons votre catalogue, votre marque et vos objectifs de vente." },
        { step: "02", title: "Design", desc: "Prototype visuel personnalisé. Vous approuvez avant le développement." },
        { step: "03", title: "Développement", desc: "Frontend React + WooCommerce. Passerelle de paiement configurée et testée." },
        { step: "04", title: "Livraison", desc: "Formation, remise et support. Vous vendez dès le premier jour." },
      ];

  const ADVANCED_FEATURES = isEn
    ? [
        { title: "Google Shopping", desc: "Connect your catalogue to Google Merchant Center and appear in Google's shopping results." },
        { title: "Integrated physical POS", desc: "Sync your online store with your physical point of sale. Unified stock, a single management panel." },
        { title: "Subscriptions and recurring payments", desc: "Sell products by monthly or annual subscription with automatic payment management." },
        { title: "Bulk catalogue import", desc: "Upload thousands of products from Excel, CSV or your previous platform without manual work." },
        { title: "Multi-vendor marketplace", desc: "Transform your store into a marketplace where other sellers can list their products." },
        { title: "B2B and customer-specific pricing", desc: "Differentiated pricing by customer type, order volume or specific account conditions." },
      ]
    : [
        { title: "Google Shopping", desc: "Connectez votre catalogue à Google Merchant Center et apparaissez dans les résultats d'achat de Google." },
        { title: "TPV physique intégré", desc: "Synchronisez votre boutique en ligne avec votre point de vente physique. Stock unifié, un seul panneau de gestion." },
        { title: "Abonnements et paiements récurrents", desc: "Vendez des produits par abonnement mensuel ou annuel avec gestion automatique des paiements." },
        { title: "Import massif de catalogue", desc: "Chargez des milliers de produits depuis Excel, CSV ou votre plateforme précédente sans travail manuel." },
        { title: "Marketplace multi-vendeurs", desc: "Transformez votre boutique en marketplace où d'autres vendeurs peuvent publier leurs produits." },
        { title: "B2B et tarifs par client", desc: "Tarifs différenciés par type de client, volume de commande ou conditions spécifiques de compte." },
      ];

  const MIGRATION_ITEMS = isEn
    ? [
        { icon: "📦", title: "Catalogue migration", desc: "We transfer all your products, variants, images, prices and descriptions without data loss. Also from Excel or CSV." },
        { icon: "👥", title: "Customers and orders", desc: "We import the complete customer and order history so that you lose no data from your previous activity." },
        { icon: "🔗", title: "SEO preserved", desc: "We redirect old URLs to preserve the Google rankings you already have. No traffic drops." },
      ]
    : [
        { icon: "📦", title: "Migration du catalogue", desc: "Nous transférons tous vos produits, variantes, images, prix et descriptions sans perte de données. Aussi depuis Excel ou CSV." },
        { icon: "👥", title: "Clients et commandes", desc: "Nous importons l'historique complet des clients et commandes pour que vous ne perdiez aucune donnée de votre activité précédente." },
        { icon: "🔗", title: "SEO préservé", desc: "Nous redirigeons les anciennes URLs pour conserver le positionnement que vous avez déjà sur Google. Sans chutes de trafic." },
      ];

  const FAQS_CONTENT = isEn
    ? [
        { q: "How long does it take for the store to be ready?", a: "The technical development is already resolved. The actual timeline depends on how quickly the client provides the material: catalogue, images, copy and company details. With material delivered on time, the store can be live within a few days." },
        { q: "Is product uploading included in the price?", a: "No. The price from €490 includes development, payment gateway configuration, initial technical SEO and one hour of online training. Catalogue loading is quoted separately based on volume and format." },
        { q: "Will I be able to manage the store without technical knowledge?", a: "Yes. The management panel is WordPress. Adding products, changing prices, managing orders and updating stock are operations that anyone can learn in the initial training session." },
        { q: "What if I already have a store on Shopify or PrestaShop?", a: "We migrate your store without losing products, customers, order history or Google rankings. We work with Shopify, PrestaShop, WooCommerce, Wix, Squarespace and Magento." },
      ]
    : [
        { q: "Combien de temps faut-il pour que la boutique soit prête ?", a: "Le développement technique est déjà résolu. Le délai réel dépend de la rapidité avec laquelle le client fournit le matériel : catalogue, images, textes et données de l'entreprise. Avec le matériel livré dans les temps, la boutique peut être opérationnelle en quelques jours." },
        { q: "Le chargement des produits est-il inclus dans le prix ?", a: "Non. Le prix à partir de 490€ inclut le développement, la configuration de la passerelle de paiement, le SEO technique initial et une heure de formation en ligne. Le chargement du catalogue est devisé séparément selon le volume et le format." },
        { q: "Pourrai-je gérer la boutique sans connaissances techniques ?", a: "Oui. Le panel de gestion est WordPress. Ajouter des produits, modifier les prix, gérer les commandes et mettre à jour le stock sont des opérations que toute personne peut apprendre lors de la formation initiale." },
        { q: "Et si j'ai déjà une boutique sur Shopify ou PrestaShop ?", a: "Nous migrons votre boutique sans perdre les produits, les clients, l'historique des commandes ni le positionnement Google. Nous travaillons avec Shopify, PrestaShop, WooCommerce, Wix, Squarespace et Magento." },
      ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* Hero */}
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
              {isEn ? "Your online store," : "Votre boutique en ligne,"}
              <br />
              <span className="text-accent-400">
                {isEn ? "no commissions or fees" : "sans commissions ni frais"}
              </span>
            </h1>
            <p className="text-xl text-primary-200 mb-8 leading-relaxed">
              {isEn
                ? "Shopify charges a monthly fee and up to 2% per sale. We build your store with our own technology — you pay once and sell forever with no additional costs."
                : "Shopify facture des frais mensuels et jusqu'à 2% par vente. Nous construisons votre boutique avec notre propre technologie — vous payez une fois et vendez pour toujours sans coûts supplémentaires."}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href={`/${lang}/contact/`} className="bg-accent-500 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-accent-600 transition-colors text-center">
                {isEn ? "I want my online store" : "Je veux ma boutique en ligne"}
              </Link>
              <a href="#offer" className="border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white/10 transition-colors text-center">
                {isEn ? "See special offer" : "Voir l'offre spéciale"}
              </a>
            </div>
          </div>
          <div className="hidden md:block">
            <Image src="/imagen-tiendas-online.jpg" alt={isEn ? "Professional online store" : "Boutique en ligne professionnelle"} className="rounded-2xl shadow-2xl w-full object-cover" width={800} height={600} />
          </div>
        </div>
      </section>

      {/* Trust bar */}
      <section className="bg-primary-600 py-6 px-4">
        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 text-center text-white">
          {(isEn
            ? [
                { value: "€0", label: "commission per sale" },
                { value: "€0", label: "monthly licence" },
                { value: "100%", label: "custom design" },
                { value: "Stripe", label: "Apple Pay · Google Pay" },
              ]
            : [
                { value: "0€", label: "commission par vente" },
                { value: "0€", label: "licence mensuelle" },
                { value: "100%", label: "design personnalisé" },
                { value: "Stripe", label: "Apple Pay · Google Pay" },
              ]
          ).map((m) => (
            <div key={m.label}>
              <div className="text-xl font-bold text-accent-400">{m.value}</div>
              <div className="text-xs text-primary-200 mt-1">{m.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Why not Shopify */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary-600 mb-4">
              {isEn ? "Why not Shopify or Wix?" : "Pourquoi pas Shopify ou Wix ?"}
            </h2>
            <p className="text-gray-600 max-w-xl mx-auto">
              {isEn
                ? "The real cost over 3 years changes the decision significantly."
                : "Le coût réel sur 3 ans change considérablement la décision."}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-2xl p-8 border-2 border-gray-200">
              <h3 className="text-xl font-bold text-gray-400 mb-6">
                {isEn ? "Shopify Basic — 3 years" : "Shopify Basic — 3 ans"}
              </h3>
              <div className="space-y-4">
                {(isEn
                  ? [
                      { label: "Monthly licence", value: "~€39/mo = €1,404" },
                      { label: "Transaction fee (1.5–2%)", value: "variable on sales" },
                      { label: "Design (template)", value: "€200–500" },
                      { label: "Essential apps and plugins", value: "€50–150/mo = €1,800–5,400" },
                      { label: "Domain", value: "~€15/yr = €45" },
                      { label: "Estimated total 3 years", value: "€3,450 – €7,350", highlight: true },
                    ]
                  : [
                      { label: "Licence mensuelle", value: "~39€/mois = 1 404€" },
                      { label: "Commission par transaction (1,5–2%)", value: "variable selon les ventes" },
                      { label: "Design (template)", value: "200–500€" },
                      { label: "Apps et plugins essentiels", value: "50–150€/mois = 1 800–5 400€" },
                      { label: "Domaine", value: "~15€/an = 45€" },
                      { label: "Total estimé 3 ans", value: "3 450€ – 7 350€", highlight: true },
                    ]
                ).map((r) => (
                  <div key={r.label} className={`flex justify-between text-sm ${r.highlight ? "font-bold text-red-500 border-t pt-4" : "text-gray-600"}`}>
                    <span>{r.label}</span>
                    <span>{r.value}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white rounded-2xl p-8 border-2 border-accent-500">
              <h3 className="text-xl font-bold text-primary-600 mb-6">
                {isEn ? "Mkt Web 360 — 3 years" : "Mkt Web 360 — 3 ans"}
              </h3>
              <div className="space-y-4">
                {(isEn
                  ? [
                      { label: "Store development", value: "from €490" },
                      { label: "Commission per sale", value: "€0" },
                      { label: "Platform licence", value: "€0" },
                      { label: "Annual hosting", value: "~€150/yr = €450" },
                      { label: "Domain", value: "~€15/yr = €45" },
                      { label: "Estimated total 3 years", value: "from €985", highlight: true },
                    ]
                  : [
                      { label: "Développement boutique", value: "à partir de 490€" },
                      { label: "Commission par vente", value: "0€" },
                      { label: "Licence plateforme", value: "0€" },
                      { label: "Hébergement annuel", value: "~150€/an = 450€" },
                      { label: "Domaine", value: "~15€/an = 45€" },
                      { label: "Total estimé 3 ans", value: "à partir de 985€", highlight: true },
                    ]
                ).map((r) => (
                  <div key={r.label} className={`flex justify-between text-sm ${r.highlight ? "font-bold text-accent-500 border-t pt-4" : "text-gray-600"}`}>
                    <span>{r.label}</span>
                    <span>{r.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="mt-6 space-y-4 text-gray-600 max-w-2xl mx-auto">
            {isEn ? (
              <>
                <p>Shopify's problem is not just the licence price. It is the model. Shopify charges a commission on every sale you make — forever. When your business grows and revenue increases, Shopify earns more without doing anything extra. At €3,000/month in sales, the commission amounts to over €700 per year taken from your margin.</p>
                <p>Wix and Squarespace have the same problem from a different angle: customisation has a ceiling. The store structure, navigation logic and shopping experience are defined by the template. We build the store on our own technology. You pay for development once and the store is yours — no commissions, no licence, no ceiling.</p>
              </>
            ) : (
              <>
                <p>Le problème de Shopify n'est pas seulement le prix de la licence. C'est le modèle. Shopify facture une commission sur chaque vente que vous réalisez — pour toujours. Quand votre entreprise grandit et que le chiffre d'affaires augmente, Shopify gagne davantage sans rien faire de plus. À 3 000€/mois de ventes, la commission représente plus de 700€ par an prélevés sur votre marge.</p>
                <p>Wix et Squarespace ont le même problème sous un angle différent : la personnalisation a un plafond. La structure de la boutique, la logique de navigation et l'expérience d'achat sont définies par le template. Nous construisons la boutique sur notre propre technologie. Vous payez le développement une fois et la boutique vous appartient — sans commissions, sans licence, sans plafond.</p>
              </>
            )}
            <p className="text-center text-sm text-gray-500">
              {isEn
                ? "* Calculation based on average sales of €2,000–3,000/month. Shopify's cost scales with your sales volume. Mkt Web 360's does not."
                : "* Calcul basé sur des ventes moyennes de 2 000–3 000€/mois. Le coût de Shopify augmente avec votre volume de ventes. Celui de Mkt Web 360, non."}
            </p>
          </div>
        </div>
      </section>

      {/* Includes */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-primary-600 mb-6">
                {isEn ? "Everything included in your store" : "Tout inclus dans votre boutique"}
              </h2>
              <div className="space-y-3">
                {INCLUDES.map((f) => (
                  <div key={f} className="flex items-center gap-3">
                    <span className="text-accent-500 font-bold text-lg shrink-0">✓</span>
                    <span className="text-gray-700 text-sm">{f}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-primary-50 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-primary-600 mb-4">
                {isEn ? "Technology that gives you an edge" : "Une technologie qui vous donne un avantage"}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                {isEn
                  ? "We use React as the frontend and WooCommerce as the backend. The result is a visually unique, fast store with the full power of WordPress management."
                  : "Nous utilisons React comme frontend et WooCommerce comme backend. Le résultat est une boutique visuellement unique, rapide et dotée de toute la puissance de gestion de WordPress."}
              </p>
              <p className="text-gray-600 text-sm leading-relaxed">
                {isEn
                  ? "Your client manages products, orders, discounts and shipping independently from day one, without being technically dependent on the agency."
                  : "Votre client gère les produits, les commandes, les remises et les expéditions de manière autonome dès le premier jour, sans dépendre techniquement de l'agence."}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary-600 mb-4">
              {isEn ? "How we do it" : "Comment nous le faisons"}
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {PROCESS.map((p) => (
              <div key={p.step} className="text-center">
                <div className="w-14 h-14 rounded-full bg-accent-500 text-white text-xl font-bold flex items-center justify-center mx-auto mb-4">{p.step}</div>
                <h3 className="font-bold text-primary-600 mb-2">{p.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Migration */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary-600 mb-4">
              {isEn ? "Already have a store and want to switch?" : "Vous avez déjà une boutique et souhaitez changer ?"}
            </h2>
            <p className="text-gray-600 max-w-xl mx-auto">
              {isEn
                ? "We migrate your store from Shopify, PrestaShop, Wix or any platform without losing products, orders or SEO history."
                : "Nous migrons votre boutique depuis Shopify, PrestaShop, Wix ou toute autre plateforme sans perdre les produits, les commandes ni l'historique SEO."}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {MIGRATION_ITEMS.map((item) => (
              <div key={item.title} className="bg-primary-50 rounded-2xl p-6 text-center">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="font-bold text-primary-600 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 bg-white border border-gray-200 rounded-2xl p-6 text-center">
            <p className="text-gray-600 text-sm leading-relaxed">
              {isEn
                ? "Common source platforms: "
                : "Plateformes d'origine habituelles : "}
              <strong>Shopify, PrestaShop, WooCommerce, Wix, Squarespace, Magento.</strong>
              {isEn
                ? " If you are unsure whether we can migrate your platform, ask us."
                : " Si vous n'êtes pas sûr que nous pouvons migrer votre plateforme, contactez-nous."}
            </p>
          </div>
        </div>
      </section>

      {/* Advanced features */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary-600 mb-4">
              {isEn ? "Advanced features available" : "Fonctionnalités avancées disponibles"}
            </h2>
            <p className="text-gray-600 max-w-xl mx-auto">
              {isEn
                ? "Beyond the base store, we offer additional integrations to scale your business without changing platform."
                : "Au-delà de la boutique de base, nous proposons des intégrations supplémentaires pour faire évoluer votre activité sans changer de plateforme."}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ADVANCED_FEATURES.map((f) => (
              <div key={f.title} className="bg-white rounded-xl p-6 border border-gray-200">
                <h3 className="font-bold text-primary-600 mb-2">{f.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* For whom */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-primary-600 mb-6 text-center">
            {isEn ? "Who is this service for?" : "Pour qui est ce service ?"}
          </h2>
          <div className="max-w-2xl mx-auto text-gray-600 space-y-4">
            {isEn ? (
              <>
                <p>This service suits any business that wants to sell online without depending on platforms that charge per transaction. It works well for businesses with their own catalogue — physical or digital — that need a store with their own identity, not a generic template.</p>
                <p>It is also the natural solution for businesses already selling on Shopify, PrestaShop or Wix that have reached the ceiling of what that platform allows, or that simply do not want to keep paying commissions as their sales volume grows.</p>
                <p>And it is especially suited to businesses that want to manage their store independently from day one. The WordPress panel is the most widely used content management system in the world, with a low learning curve for everyday operations such as uploading products, managing orders or updating prices.</p>
                <p>If you need advanced features — pricing by customer type, multi-vendor marketplace or physical POS integration — that is also covered, without changing platforms.</p>
              </>
            ) : (
              <>
                <p>Ce service convient à toute entreprise qui souhaite vendre en ligne sans dépendre de plateformes qui facturent par transaction. Il fonctionne bien pour les entreprises avec leur propre catalogue — physique ou numérique — qui ont besoin d'une boutique avec une identité propre, pas d'un template générique.</p>
                <p>C'est aussi la solution naturelle pour les entreprises qui vendent déjà sur Shopify, PrestaShop ou Wix et ont atteint le plafond de ce que cette plateforme permet, ou qui ne souhaitent tout simplement plus payer des commissions à mesure que leur volume de ventes augmente.</p>
                <p>Et c'est particulièrement adapté aux entreprises qui souhaitent gérer leur boutique de manière autonome dès le premier jour. Le panel WordPress est le système de gestion de contenu le plus utilisé au monde, avec une courbe d'apprentissage faible pour les opérations quotidiennes comme ajouter des produits, gérer des commandes ou mettre à jour les prix.</p>
                <p>Si vous avez besoin de fonctionnalités avancées — tarifs par type de client, marketplace multi-vendeurs ou intégration TPV physique — c'est aussi couvert, sans changer de plateforme.</p>
              </>
            )}
          </div>
        </div>
      </section>

      {/* After delivery */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-primary-600 mb-6 text-center">
            {isEn ? "What happens after delivery" : "Que se passe-t-il après la livraison"}
          </h2>
          <div className="max-w-2xl mx-auto text-gray-600 space-y-4">
            {isEn ? (
              <>
                <p>The handover includes one hour of online training covering the most common panel operations: uploading and editing products, managing orders, updating prices and monitoring stock. The training is adapted to the team that will be managing the store.</p>
                <p>If you would prefer us to take care of technical maintenance, product updates or content management on an ongoing basis, it is a service we quote separately based on each store's needs. No fixed packages — we define together what makes sense to outsource.</p>
              </>
            ) : (
              <>
                <p>La livraison comprend une heure de formation en ligne au cours de laquelle nous passons en revue les opérations les plus courantes du panel : ajouter et modifier des produits, gérer les commandes, mettre à jour les prix et contrôler le stock. La formation est adaptée à l'équipe qui va gérer la boutique.</p>
                <p>Si vous préférez que nous nous chargions de la maintenance technique, de la mise à jour des produits ou de la gestion du contenu de façon continue, c'est un service que nous deviseons séparément selon les besoins de chaque boutique. Pas de forfaits figés — nous définissons ensemble ce qu'il est judicieux d'externaliser.</p>
              </>
            )}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-primary-600 mb-8 text-center">
            {isEn ? "Frequently asked questions" : "Questions fréquentes"}
          </h2>
          <div className="space-y-6">
            {FAQS_CONTENT.map((faq) => (
              <div key={faq.q}>
                <h3 className="text-lg font-bold text-gray-800 mb-2">{faq.q}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Offer banner */}
      <section id="offer" className="py-12 px-4 bg-primary-700">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block bg-accent-500 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest mb-4">
            {isEn ? "Store + SEO" : "Boutique + SEO"}
          </span>
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
            {isEn
              ? "Online store from €490 + SEO positioning"
              : "Boutique en ligne à partir de 490€ + référencement SEO"}
          </h2>
          <p className="text-primary-200 max-w-xl mx-auto mb-8">
            {isEn
              ? "Set up your online store and add our SEO service to position it on Google from day one."
              : "Créez votre boutique en ligne et ajoutez notre service SEO pour la positionner sur Google dès le premier jour."}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href={`/${lang}/contact/`} className="bg-accent-500 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-accent-600 transition-colors">
              {isEn ? "Request information" : "Demander des informations"}
            </Link>
            <Link href={`/${lang}/seo-web-positioning/`} className="border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-primary-700 transition-colors">
              {isEn ? "View SEO service" : "Voir le service SEO"}
            </Link>
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
                ? "Own AI protocols applied to each project for faster, more precise results."
                : "Protocoles IA propriétaires appliqués à chaque projet pour des résultats plus rapides et plus précis."}
            </p>
          </div>
        </div>
      </section>

      {/* CTA Form */}
      <section className="py-16 px-4 bg-primary-600 text-white">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-4">
              {isEn ? "Your best customer doesn't know you yet" : "Votre meilleur client ne vous connaît pas encore"}
            </h2>
            <p className="text-primary-200">
              {isEn
                ? "Let's introduce you. Tell us about your project and we'll respond within 24 hours."
                : "Présentons-vous. Parlez-nous de votre projet et nous répondrons dans moins de 24 heures."}
            </p>
          </div>
          <div className="bg-white rounded-2xl p-8">
            <ContactForm formType={`${lang}-online-store`} />
          </div>
        </div>
      </section>

      <RelatedArticles category="Ecommerce" title={isEn ? "More about online stores and e-commerce" : "Plus sur les boutiques en ligne et l'e-commerce"} />
    </>
  );
}
