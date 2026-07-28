import { Breadcrumbs } from "@/components/Breadcrumbs";
import { BlogBanner } from "@/components/BlogBanner";
import { RelatedArticles } from "@/components/RelatedArticles";
import { alternatesFor } from "@/lib/i18n/routes";
import Link from "next/link";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const isEn = lang === "en";
  return {
    title: isEn
      ? "Google Ads for Shopware: Campaigns That Actually Sell"
      : "Google Ads pour Shopware : des campagnes qui vendent vraiment",
    description: isEn
      ? "How to set up Google Ads for your Shopware store: conversion tracking, Merchant Center connection, Performance Max, Shopping and ROAS optimisation."
      : "Comment configurer Google Ads pour votre boutique Shopware : suivi des conversions, connexion au Merchant Center, Performance Max, Shopping et optimisation du ROAS.",
    alternates: alternatesFor(`/${lang}/shopware-google-ads/`) ?? {
      canonical: `https://www.mktweb360.com/${lang}/shopware-google-ads/`,
    },
    openGraph: {
      title: isEn
        ? "Google Ads for Shopware: Campaigns That Actually Sell | Mkt Web 360"
        : "Google Ads pour Shopware : des campagnes qui vendent vraiment | Mkt Web 360",
      description: isEn
        ? "Google Ads for Shopware: tracking, Merchant Center, Performance Max and ROAS optimisation so your campaigns sell."
        : "Google Ads pour Shopware : suivi, Merchant Center, Performance Max et optimisation du ROAS pour que vos campagnes vendent.",
    },
  };
}

const FAQS_EN = [
  {
    q: "What do I need before launching Google Ads on Shopware?",
    a: "Reliable conversion tracking. The purchase event must be sent with transaction_id, value, currency and items, typically via Google Tag Manager. Without accurate measurement, campaigns optimise blindly.",
  },
  {
    q: "How do I connect Shopware with Google Merchant Center?",
    a: "There are three ways: the official Shopware plugin (automatic), a manual or scheduled XML feed (full control), or third-party tools like Channable (advanced rules for complex catalogues).",
  },
  {
    q: "Performance Max or standard Shopping?",
    a: "The best approach is usually to combine them: Performance Max to cover the entire inventory with AI and standard Shopping when you need manual control over specific products or margins. Dynamic remarketing complements both by targeting users who already visited your store.",
  },
  {
    q: "Why is the product title in the feed so important?",
    a: "Because it determines which searches trigger your product in Shopping. A title structured by intent (type, brand, model, key feature) captures far more qualified traffic than a generic one.",
  },
  {
    q: "Should I optimise for CPC or ROAS?",
    a: "For ROAS. Cost per click does not tell you whether you are making money; return on ad spend does. An expensive click that generates a profitable sale is better than a cheap one that does not convert.",
  },
];

const FAQS_FR = [
  {
    q: "De quoi ai-je besoin avant de lancer Google Ads sur Shopware ?",
    a: "D'un suivi des conversions fiable. L'événement purchase doit être envoyé avec transaction_id, value, currency et items, généralement via Google Tag Manager. Sans mesure correcte, les campagnes optimisent à l'aveugle.",
  },
  {
    q: "Comment connecter Shopware avec Google Merchant Center ?",
    a: "Il y a trois façons : le plugin officiel Shopware (automatique), un flux XML manuel ou planifié (contrôle total), ou des outils tiers comme Channable (règles avancées pour les catalogues complexes).",
  },
  {
    q: "Performance Max ou Shopping standard ?",
    a: "La meilleure approche est généralement de les combiner : Performance Max pour couvrir tout l'inventaire Google avec l'IA et Shopping standard quand vous avez besoin d'un contrôle manuel sur des produits ou marges spécifiques. Le remarketing dynamique complète les deux en ciblant les utilisateurs qui ont déjà visité votre boutique.",
  },
  {
    q: "Pourquoi le titre du produit dans le flux est-il si important ?",
    a: "Parce qu'il détermine pour quelles recherches votre produit apparaît dans Shopping. Un titre structuré par intention (type, marque, modèle, caractéristique clé) capte beaucoup plus de trafic qualifié qu'un titre générique.",
  },
  {
    q: "Dois-je optimiser pour le CPC ou le ROAS ?",
    a: "Pour le ROAS. Le coût par clic ne vous dit pas si vous gagnez de l'argent ; le retour sur investissement publicitaire, si. Un clic cher qui génère une vente rentable vaut mieux qu'un clic bon marché qui ne convertit pas.",
  },
];

export default async function Page({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const isEn = lang === "en";
  const FAQS = isEn ? FAQS_EN : FAQS_FR;

  return (
    <>
      <div className="max-w-3xl mx-auto px-4 py-12">
        <Breadcrumbs
          crumbs={[
            { label: isEn ? "Home" : "Accueil", href: `/${lang}/` },
            { label: "Blog", href: `/${lang}/blog/` },
            { label: isEn ? "Google Ads for Shopware" : "Google Ads pour Shopware" },
          ]}
        />

        <p className="text-sm text-accent-500 font-semibold mb-2">Shopware · Ads</p>

        <h1 className="text-4xl font-bold text-primary-600 mb-4 leading-tight">
          {isEn
            ? "Google Ads for Shopware: Campaigns That Actually Sell"
            : "Google Ads pour Shopware : des campagnes qui vendent vraiment"}
        </h1>

        <p className="text-xl text-gray-500 mb-8 leading-relaxed">
          {isEn
            ? "Campaigns do not fail because of the campaigns themselves — they fail because of what lies beneath. Here is the right order to make Google Ads profitable for your Shopware store."
            : "Les campagnes n'échouent pas à cause des campagnes elles-mêmes — elles échouent à cause de ce qui se trouve en dessous. Voici l'ordre correct pour que Google Ads soit rentable dans votre boutique Shopware."}
        </p>

        <h2 className="text-2xl font-bold text-primary-600 mt-8 mb-3">
          {isEn ? "Conversion tracking is the prerequisite" : "Le suivi des conversions est le prérequis"}
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          {isEn
            ? "Before investing a single penny, your store must measure accurately. The key event is purchase, and it must be sent with transaction_id (to avoid duplicate conversions), value and currency (to calculate the real return) and items (to attribute sales to specific products). The standard implementation is via Google Tag Manager, firing the event on the order confirmation page with the real purchase data. Without this, Google optimises blindly."
            : "Avant d'investir un seul euro, votre boutique doit mesurer correctement. L'événement clé est purchase, et il doit être envoyé avec transaction_id (pour éviter les doublons de conversion), value et currency (pour calculer le retour réel) et items (pour attribuer les ventes à des produits spécifiques). L'implémentation standard se fait via Google Tag Manager, déclenchant l'événement sur la page de confirmation de commande avec les données réelles de l'achat. Sans cela, Google optimise à l'aveugle."}
        </p>

        <h2 className="text-2xl font-bold text-primary-600 mt-8 mb-3">
          {isEn ? "Connecting Shopware with Google Merchant Center" : "Connecter Shopware avec Google Merchant Center"}
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          {isEn
            ? "The product feed is the fuel for Shopping and Performance Max. There are three ways to connect it: the official Shopware plugin for Merchant Center, which syncs the catalogue automatically; a manually generated or scheduled XML feed, more laborious but with total control; or third-party tools like Channable, which add advanced feed transformation rules for complex catalogues. The right choice depends on the size and complexity of your catalogue."
            : "Le flux produit est le carburant de Shopping et de Performance Max. Il y a trois façons de le connecter : le plugin officiel Shopware pour Merchant Center, qui synchronise le catalogue automatiquement ; un flux XML généré et uploadé manuellement ou de façon planifiée, plus laborieux mais avec un contrôle total ; ou des outils tiers comme Channable, qui ajoutent des règles avancées de transformation de flux pour les catalogues complexes. Le bon choix dépend de la taille et de la complexité de votre catalogue."}
        </p>

        <h2 className="text-2xl font-bold text-primary-600 mt-8 mb-3">
          {isEn ? "A campaign structure that works" : "Une structure de campagnes qui fonctionne"}
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          {isEn
            ? "An effective structure combines three pieces. Performance Max to cover Google's entire inventory (Shopping, Search, Display, YouTube) with AI optimising the spend. Standard Shopping when you want more manual control over specific products or margins. And dynamic remarketing to re-engage users who already visited the store or abandoned the cart with the exact products they viewed. The goal is not to choose one, but to orchestrate all three."
            : "Une structure efficace combine trois éléments. Performance Max pour couvrir tout l'inventaire Google (Shopping, Recherche, Display, YouTube) avec l'IA optimisant les dépenses. Shopping standard quand vous voulez plus de contrôle manuel sur des produits ou marges spécifiques. Et le remarketing dynamique pour re-engager les utilisateurs qui ont déjà visité la boutique ou abandonné le panier avec les produits exacts qu'ils ont consultés. L'objectif n'est pas d'en choisir un, mais de les orchestrer tous les trois."}
        </p>

        <h2 className="text-2xl font-bold text-primary-600 mt-8 mb-3">
          {isEn ? "Optimise your feed titles" : "Optimisez les titres de votre flux"}
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          {isEn
            ? "In Shopping, the product title has the most impact on which searches your products trigger. An optimised title includes what the customer is looking for: product type, brand, model, key feature and, where relevant, size or colour. Switching from a generic title to one structured by search intent can multiply qualified impressions without touching the bid."
            : "Dans Shopping, le titre du produit a le plus grand impact sur les recherches que vos produits déclenchent. Un titre optimisé inclut ce que le client cherche : type de produit, marque, modèle, caractéristique clé et, le cas échéant, taille ou couleur. Passer d'un titre générique à un titre structuré par intention de recherche peut multiplier les impressions qualifiées sans toucher à l'enchère."}
        </p>

        <div className="bg-primary-50 rounded-xl p-6 border border-primary-100 my-6">
          <p className="font-semibold text-primary-700 mb-2">
            {isEn
              ? "Are your Google Ads campaigns not performing on Shopware?"
              : "Vos campagnes Google Ads ne performent pas sur Shopware ?"}
          </p>
          <p className="text-gray-600 text-sm mb-4">
            {isEn
              ? "We review your tracking, feed and campaign structure, and tell you exactly where the budget is being wasted and how to recover profitability."
              : "Nous examinons votre suivi, votre flux et votre structure de campagnes, et vous disons exactement où le budget est gaspillé et comment retrouver la rentabilité."}
          </p>
          <Link
            href={`/${lang}/contact`}
            className="inline-block bg-accent-500 text-white px-6 py-2.5 rounded-full font-semibold text-sm hover:bg-accent-600 transition-colors"
          >
            {isEn ? "Contact us" : "Nous contacter"}
          </Link>
        </div>

        <h2 className="text-2xl font-bold text-primary-600 mt-8 mb-3">
          {isEn ? "ROAS, not CPC: the right metric" : "ROAS, pas CPC : la bonne métrique"}
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          {isEn
            ? "Optimising for cost per click leads to wrong decisions: a cheap click that does not sell is expensive, and an expensive click that generates a profitable sale is a bargain. The metric that matters in ecommerce is ROAS (Return on Ad Spend): how many pounds of sales each pound of spend generates. The entire structure — measurement, feed and campaigns — exists to enable ROAS optimisation with reliable data."
            : "Optimiser pour le coût par clic mène à de mauvaises décisions : un clic bon marché qui ne vend pas est cher, et un clic cher qui génère une vente rentable est une affaire. La métrique qui compte en e-commerce est le ROAS (Retour sur Investissement Publicitaire) : combien d'euros de ventes chaque euro investi génère. Toute la structure — mesure, flux et campagnes — existe pour permettre d'optimiser le ROAS avec des données fiables."}
        </p>

        <div className="bg-primary-600 text-white rounded-2xl p-8 my-8 text-center">
          <h2 className="text-2xl font-bold mb-3">
            {isEn ? "Make your Google Ads investment sell" : "Faites en sorte que votre investissement Google Ads vende"}
          </h2>
          <p className="text-primary-200 mb-6">
            {isEn
              ? "We set up and optimise your Shopware Google Ads campaigns with reliable measurement and a focus on return, not vanity metrics."
              : "Nous configurons et optimisons vos campagnes Google Ads pour Shopware avec une mesure fiable et un focus sur le retour, pas sur les métriques de vanité."}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href={`/${lang}/contact`}
              className="bg-accent-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-accent-600 transition-colors"
            >
              {isEn ? "Get in touch" : "Nous contacter"}
            </Link>
            <Link
              href={`/${lang}/${isEn ? "google-ads-management" : "gestion-google-ads"}`}
              className="border-2 border-white text-white px-6 py-3 rounded-full font-semibold hover:bg-white/10 transition-colors"
            >
              {isEn ? "Google Ads service" : "Service Google Ads"}
            </Link>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-primary-600 mt-8 mb-4">
          {isEn ? "Frequently asked questions" : "Questions fréquentes"}
        </h2>
        <div className="space-y-3 mb-8">
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

        <BlogBanner lang={lang} />

        <nav className="mt-12 pt-8 border-t border-gray-200">
          <Link href={`/${lang}/blog/`} className="text-accent-500 hover:text-accent-600 font-medium text-sm">
            {isEn ? "← Back to blog" : "← Retour au blog"}
          </Link>
        </nav>
      </div>
      <RelatedArticles currentSlug="shopware-google-ads" />
    </>
  );
}
