import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ContactForm } from "@/components/ContactForm";
import { BlogBanner } from "@/components/BlogBanner";
import { RelatedArticles } from "@/components/RelatedArticles";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const isEn = lang === "en";
  return {
    title: isEn
      ? "How to Migrate from Shopify to WooCommerce Without Losing Anything | Mkt Web 360"
      : "Comment migrer de Shopify vers WooCommerce sans rien perdre | Mkt Web 360",
    description: isEn
      ? "Complete guide to migrate from Shopify to WooCommerce: products, customers, orders, SEO and step-by-step process."
      : "Guide complet pour migrer de Shopify vers WooCommerce : produits, clients, commandes, SEO et processus étape par étape.",
    alternates: {
      canonical: `https://www.mktweb360.com/${lang}/${lang === "en" ? "migrate-shopify-to-woocommerce" : "migrer-shopify-vers-woocommerce"}/`,
    },
  };
}

export default async function Page({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const isEn = lang === "en";

  return (
    <>
      <div className="max-w-3xl mx-auto px-4 py-12">
        <Breadcrumbs
          crumbs={[
            { label: isEn ? "Home" : "Accueil", href: `/${lang}/` },
            { label: "Blog", href: `/${lang}/blog/` },
            { label: isEn ? "Shopify to WooCommerce" : "Shopify vers WooCommerce" },
          ]}
        />
        <p className="text-sm text-accent-500 font-semibold mb-2">Ecommerce</p>
        <h1 className="text-4xl font-bold text-primary-600 mb-4 leading-tight">
          {isEn
            ? "Migrate from Shopify to WooCommerce: the complete step-by-step guide"
            : "Migrer de Shopify vers WooCommerce : le guide complet étape par étape"}
        </h1>
        <p className="text-xl text-gray-500 mb-8 leading-relaxed">
          {isEn
            ? "Shopify charges a monthly fee and up to 2% per sale. WooCommerce does not. Migrating can save you thousands of euros per year — if done correctly. This guide covers everything."
            : "Shopify facture des frais mensuels et jusqu'à 2% par vente. WooCommerce non. La migration peut vous faire économiser des milliers d'euros par an — si elle est bien faite. Ce guide couvre tout."}
        </p>

        <h2 className="text-2xl font-bold text-primary-600 mt-10 mb-4">
          {isEn ? "Why more stores are migrating from Shopify to WooCommerce" : "Pourquoi de plus en plus de boutiques migrent de Shopify vers WooCommerce"}
        </h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          {isEn
            ? "Shopify's Basic plan costs 29 USD/month. The Standard plan is 79 USD/month. On top of that, if you use a third-party payment gateway (like Stripe in many European countries), Shopify charges a transaction fee of 0.5–2% per sale. For a store doing 10,000€/month in sales, that could be 200€+ in fees before any other costs."
            : "Le plan Basic de Shopify coûte 29 USD/mois. Le plan Standard est à 79 USD/mois. En plus, si vous utilisez une passerelle de paiement tierce (comme Stripe dans de nombreux pays européens), Shopify facture des frais de transaction de 0,5 à 2% par vente. Pour une boutique réalisant 10 000€/mois de ventes, cela peut représenter 200€+ de frais avant tout autre coût."}
        </p>
        <p className="text-gray-600 leading-relaxed mb-4">
          {isEn
            ? "WooCommerce is free. You pay for hosting (10–50€/month for quality managed hosting) and any premium plugins you need, but there are no transaction fees and no platform lock-in. For most European SMEs, the saving is significant after 12–18 months."
            : "WooCommerce est gratuit. Vous payez pour l'hébergement (10 à 50€/mois pour un hébergement managé de qualité) et les plugins premium dont vous avez besoin, mais il n'y a pas de frais de transaction et pas d'enfermement dans la plateforme. Pour la plupart des PME européennes, l'économie est significative après 12 à 18 mois."}
        </p>

        <h2 className="text-2xl font-bold text-primary-600 mt-10 mb-4">
          {isEn ? "What you can migrate from Shopify" : "Ce que vous pouvez migrer depuis Shopify"}
        </h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          {isEn
            ? "A complete migration can transfer: products (with images, variants, prices, inventory), customers (name, email, address, purchase history), orders (historical orders with status), collections/categories, pages and blog posts, discount codes, and SEO data (URLs, meta titles, descriptions)."
            : "Une migration complète peut transférer : produits (avec images, variantes, prix, inventaire), clients (nom, email, adresse, historique d'achats), commandes (commandes historiques avec statut), collections/catégories, pages et articles de blog, codes de réduction, et données SEO (URLs, titres meta, descriptions)."}
        </p>

        <h2 className="text-2xl font-bold text-primary-600 mt-10 mb-4">
          {isEn ? "Tools to migrate from Shopify to WooCommerce" : "Outils pour migrer de Shopify vers WooCommerce"}
        </h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          {isEn
            ? "For simple stores (products only, no order history needed): use WooCommerce's native CSV importer after formatting your Shopify export. For complete migrations including orders and customers: Cart2Cart and LitExtension are the most reliable paid tools — they handle field mapping, image transfer and data validation automatically."
            : "Pour les boutiques simples (produits uniquement, pas d'historique de commandes nécessaire) : utilisez l'importateur CSV natif de WooCommerce après avoir formaté votre export Shopify. Pour les migrations complètes incluant commandes et clients : Cart2Cart et LitExtension sont les outils payants les plus fiables — ils gèrent automatiquement la correspondance des champs, le transfert d'images et la validation des données."}
        </p>

        <h2 className="text-2xl font-bold text-primary-600 mt-10 mb-4">
          {isEn ? "How to preserve SEO during migration" : "Comment préserver le SEO pendant la migration"}
        </h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          {isEn
            ? "SEO preservation is the most critical and most often neglected part of a migration. Before migrating: crawl your Shopify store with Screaming Frog and export all URLs with their ranking data. After migrating: set up 301 redirects from every old Shopify URL to the corresponding WooCommerce URL. A URL that changes without a redirect loses all its SEO equity immediately."
            : "La préservation du SEO est la partie la plus critique et la plus souvent négligée d'une migration. Avant de migrer : crawlez votre boutique Shopify avec Screaming Frog et exportez toutes les URLs avec leurs données de classement. Après la migration : configurez des redirections 301 de chaque ancienne URL Shopify vers l'URL WooCommerce correspondante. Une URL qui change sans redirection perd immédiatement toute sa valeur SEO."}
        </p>
        <p className="text-gray-600 leading-relaxed mb-4">
          {isEn
            ? "Also: submit your new sitemap to Google Search Console, update any external backlinks you control, and monitor Google Search Console for 404 errors in the first 30 days post-migration. Catching and fixing redirect errors quickly prevents permanent ranking loss."
            : "Également : soumettez votre nouveau sitemap à Google Search Console, mettez à jour tous les backlinks externes que vous contrôlez, et surveillez Google Search Console pour les erreurs 404 dans les 30 premiers jours post-migration. Détecter et corriger rapidement les erreurs de redirection évite une perte permanente de classement."}
        </p>

        <h2 className="text-2xl font-bold text-primary-600 mt-10 mb-4">
          {isEn ? "Real costs: Shopify vs WooCommerce over 3 years" : "Coûts réels : Shopify vs WooCommerce sur 3 ans"}
        </h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          {isEn
            ? "Shopify Standard plan over 3 years: ~2,844 USD in platform fees alone, plus transaction fees (0–2% per sale if not using Shopify Payments). WooCommerce over 3 years: 1,080–1,800€ in hosting + ~300–600€ in premium plugins = ~1,380–2,400€ total, zero transaction fees. For most SMEs, WooCommerce is 30–60% cheaper over 3 years."
            : "Plan Standard Shopify sur 3 ans : ~2 844 USD en frais de plateforme seuls, plus les frais de transaction (0 à 2% par vente si vous n'utilisez pas Shopify Payments). WooCommerce sur 3 ans : 1 080 à 1 800€ d'hébergement + ~300 à 600€ de plugins premium = ~1 380 à 2 400€ au total, zéro frais de transaction. Pour la plupart des PME, WooCommerce est 30 à 60% moins cher sur 3 ans."}
        </p>

        <BlogBanner variant="ecommerce" />

        <section className="bg-primary-600 text-white rounded-2xl p-8 mt-12">
          <h2 className="text-2xl font-bold mb-4">
            {isEn
              ? "Need help with your digital marketing?"
              : "Besoin d'aide avec votre marketing digital ?"}
          </h2>
          <p className="text-primary-200 mb-6">
            {isEn
              ? "Tell us about your project and we'll get back to you within 24 hours."
              : "Parlez-nous de votre projet et nous vous répondrons dans les 24 heures."}
          </p>
          <div className="bg-white rounded-xl p-6">
            <ContactForm formType={`blog-${lang}`} />
          </div>
        </section>
      </div>
      <RelatedArticles category="Ecommerce" />
    </>
  );
}
