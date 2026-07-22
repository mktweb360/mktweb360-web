import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ContactForm } from "@/components/ContactForm";
import { BlogBanner } from "@/components/BlogBanner";
import { RelatedArticles } from "@/components/RelatedArticles";
import { alternatesFor } from "@/lib/i18n/routes";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const isEn = lang === "en";
  return {
    title: isEn
      ? "Google Shopping for Online Stores — Complete Guide 2025 | Mkt Web 360"
      : "Google Shopping pour boutiques en ligne — Guide complet 2025 | Mkt Web 360",
    description: isEn
      ? "How to set up Google Shopping, optimise your product feed and appear in Google product results."
      : "Comment configurer Google Shopping, optimiser votre flux de produits et apparaître dans les résultats produits de Google.",
    alternates: alternatesFor(`/${lang}/${lang === "en" ? "google-shopping-for-online-stores" : "google-shopping-boutiques-en-ligne"}/`) ?? {
      canonical: `https://www.mktweb360.com/${lang}/${lang === "en" ? "google-shopping-for-online-stores" : "google-shopping-boutiques-en-ligne"}/`,
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
            { label: "Google Shopping" },
          ]}
        />
        <p className="text-sm text-accent-500 font-semibold mb-2">Ecommerce</p>
        <h1 className="text-4xl font-bold text-primary-600 mb-4 leading-tight">
          {isEn
            ? "Google Shopping for online stores: how to appear in Google product results"
            : "Google Shopping pour boutiques en ligne : comment apparaître dans les résultats produits Google"}
        </h1>
        <p className="text-xl text-gray-500 mb-8 leading-relaxed">
          {isEn
            ? "Google Shopping shows your products with image and price directly in search results. It is one of the highest purchase intent channels available. This guide explains how to set it up and optimise it."
            : "Google Shopping affiche vos produits avec image et prix directement dans les résultats de recherche. C'est l'un des canaux avec la plus haute intention d'achat disponibles. Ce guide explique comment le configurer et l'optimiser."}
        </p>

        <h2 className="text-2xl font-bold text-primary-600 mt-10 mb-4">
          {isEn
            ? "What Google Shopping is and why it matters for your store"
            : "Qu'est-ce que Google Shopping et pourquoi c'est important pour votre boutique"}
        </h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          {isEn
            ? "Google Shopping (formerly Google Product Listing Ads) displays product cards at the top of search results — with image, name, price and store name — before organic results and text ads. Users who click on a Shopping ad have already seen the image and price, which means they arrive with much higher intent than a generic search visitor."
            : "Google Shopping (anciennement Google Product Listing Ads) affiche des fiches produit en haut des résultats de recherche — avec image, nom, prix et nom du magasin — avant les résultats organiques et les annonces textuelles. Les utilisateurs qui cliquent sur une annonce Shopping ont déjà vu l'image et le prix, ce qui signifie qu'ils arrivent avec une intention bien plus élevée qu'un visiteur de recherche générique."}
        </p>
        <p className="text-gray-600 leading-relaxed mb-4">
          {isEn
            ? "For ecommerce stores, Google Shopping typically delivers lower cost per conversion than text ads because of this pre-qualification. A user who clicks already knows what the product looks like and roughly what it costs — the only question is whether to buy from you or a competitor."
            : "Pour les boutiques e-commerce, Google Shopping génère généralement un coût par conversion inférieur aux annonces textuelles grâce à cette pré-qualification. Un utilisateur qui clique sait déjà à quoi ressemble le produit et à peu près combien il coûte — la seule question est s'il faut acheter chez vous ou chez un concurrent."}
        </p>

        <h2 className="text-2xl font-bold text-primary-600 mt-10 mb-4">
          {isEn
            ? "How to set up Google Merchant Center"
            : "Comment configurer Google Merchant Center"}
        </h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          {isEn
            ? "Google Merchant Center is the platform that holds your product feed and connects to Google Ads. To set it up: create an account at merchants.google.com, verify and claim your website domain, configure shipping and return settings for your country, link to your Google Ads account. Without linking Merchant Center to Ads, you cannot run paid Shopping campaigns."
            : "Google Merchant Center est la plateforme qui contient votre flux de produits et se connecte à Google Ads. Pour le configurer : créez un compte sur merchants.google.com, vérifiez et réclamez votre domaine de site web, configurez les paramètres d'expédition et de retour pour votre pays, liez votre compte Google Ads. Sans lier Merchant Center à Ads, vous ne pouvez pas lancer de campagnes Shopping payantes."}
        </p>

        <h2 className="text-2xl font-bold text-primary-600 mt-10 mb-4">
          {isEn
            ? "How to create and optimise your product feed"
            : "Comment créer et optimiser votre flux de produits"}
        </h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          {isEn
            ? "The product feed is the core of your Shopping performance. Required fields: id, title, description, link, image_link, price, availability, condition, brand, gtin (barcode) or mpn. Title is the most important field for matching queries — include the most relevant keywords naturally (brand, product type, key specs). Poor titles mean poor match and wasted spend."
            : "Le flux de produits est au cœur de vos performances Shopping. Champs requis : id, title, description, link, image_link, price, availability, condition, brand, gtin (code-barres) ou mpn. Le titre est le champ le plus important pour correspondre aux requêtes — incluez les mots-clés les plus pertinents naturellement (marque, type de produit, spécifications clés). Des titres médiocres signifient une mauvaise correspondance et des dépenses gaspillées."}
        </p>
        <p className="text-gray-600 leading-relaxed mb-4">
          {isEn
            ? "For WooCommerce, the free Google Listings and Ads plugin syncs your catalogue to Merchant Center automatically and keeps stock and prices updated in real time. For Shopify, the Google channel app does the same. Review your feed weekly for disapproved products — Merchant Center flags errors that block products from showing."
            : "Pour WooCommerce, le plugin gratuit Google Listings and Ads synchronise votre catalogue vers Merchant Center automatiquement et maintient le stock et les prix à jour en temps réel. Pour Shopify, l'application Google channel fait de même. Examinez votre flux hebdomadairement pour les produits désapprouvés — Merchant Center signale les erreurs qui bloquent l'affichage des produits."}
        </p>

        <h2 className="text-2xl font-bold text-primary-600 mt-10 mb-4">
          {isEn
            ? "Shopping campaigns in Google Ads"
            : "Campagnes Shopping dans Google Ads"}
        </h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          {isEn
            ? "Performance Max campaigns are now Google's recommended format for Shopping — they use machine learning to show your products across Search, Shopping, Display, YouTube and Gmail. For more control, use Standard Shopping campaigns where you can set bids by product group. Start with Smart Bidding (Target ROAS) once you have at least 30 conversions in 30 days; use Manual CPC during the initial learning phase."
            : "Les campagnes Performance Max sont désormais le format recommandé par Google pour Shopping — elles utilisent l'apprentissage automatique pour afficher vos produits sur Search, Shopping, Display, YouTube et Gmail. Pour plus de contrôle, utilisez des campagnes Shopping Standard où vous pouvez définir des enchères par groupe de produits. Commencez avec le Smart Bidding (ROAS cible) une fois que vous avez au moins 30 conversions en 30 jours ; utilisez le CPC manuel pendant la phase d'apprentissage initiale."}
        </p>

        <h2 className="text-2xl font-bold text-primary-600 mt-10 mb-4">
          {isEn
            ? "Free vs paid Google Shopping"
            : "Google Shopping gratuit vs payant"}
        </h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          {isEn
            ? "Since 2020, Google allows free product listings in the Shopping tab. These appear below paid ads and generate organic traffic without cost per click. To be eligible, you need a verified Merchant Center account with accurate product data. Free listings alone rarely drive significant volume — paid campaigns are necessary for visibility in the main search results page."
            : "Depuis 2020, Google permet des annonces de produits gratuites dans l'onglet Shopping. Celles-ci apparaissent en dessous des annonces payantes et génèrent du trafic organique sans coût par clic. Pour être éligible, vous avez besoin d'un compte Merchant Center vérifié avec des données produits précises. Les annonces gratuites seules génèrent rarement un volume significatif — les campagnes payantes sont nécessaires pour la visibilité dans la page principale des résultats de recherche."}
        </p>
        <p className="text-gray-600 leading-relaxed mb-4">
          {isEn
            ? "The right approach: activate free listings immediately for zero-cost traffic, then layer paid Shopping campaigns on top for your best-performing products. Review ROAS by product category monthly and pause products that consistently lose money."
            : "La bonne approche : activez les annonces gratuites immédiatement pour du trafic sans coût, puis superposez des campagnes Shopping payantes pour vos produits les plus performants. Examinez le ROAS par catégorie de produits mensuellement et mettez en pause les produits qui perdent systématiquement de l'argent."}
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
