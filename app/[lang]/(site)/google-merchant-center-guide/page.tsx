import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ContactForm } from "@/components/ContactForm";
import { BlogBanner } from "@/components/BlogBanner";
import { RelatedArticles } from "@/components/RelatedArticles";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const isEn = lang === "en";
  return {
    title: isEn ? "Google Merchant Center for Ecommerce — Complete Guide | Mkt Web 360" : "Google Merchant Center pour E-commerce — Guide Complet | Mkt Web 360",
    description: isEn ? "Complete guide to setting up Google Merchant Center for your online store. Product feed, common errors and link with Google Ads." : "Guide complet pour configurer Google Merchant Center pour votre boutique en ligne. Flux de produits, erreurs courantes et lien avec Google Ads.",
    alternates: { canonical: `https://www.mktweb360.com/${lang}/google-merchant-center-guide/` },
  };
}

export default async function Page({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const isEn = lang === "en";
  return (
    <>
      <div className="max-w-3xl mx-auto px-4 py-12">
        <Breadcrumbs crumbs={[
          { label: isEn ? "Home" : "Accueil", href: `/${lang}/` },
          { label: "Blog", href: `/${lang}/blog/` },
          { label: isEn ? "Google Merchant Center" : "Google Merchant Center" },
        ]} />
        <p className="text-sm text-accent-500 font-semibold mb-2">Ecommerce</p>
        <h1 className="text-4xl font-bold text-primary-600 mb-4 leading-tight">
          {isEn ? "Google Merchant Center for ecommerce: complete setup guide" : "Google Merchant Center pour e-commerce : guide de configuration complet"}
        </h1>
        <p className="text-xl text-gray-500 mb-8 leading-relaxed">
          {isEn ? "Google Merchant Center is the gateway to appearing in Google Shopping results. This guide explains how to set it up correctly, fix errors and maximise your product visibility." : "Google Merchant Center est la porte d'entrée pour apparaître dans les résultats Google Shopping. Ce guide explique comment le configurer correctement, corriger les erreurs et maximiser la visibilité de vos produits."}
        </p>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-primary-600 mb-4">
            {isEn ? "What Google Merchant Center is and why you need it" : "Qu'est-ce que Google Merchant Center et pourquoi vous en avez besoin"}
          </h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {isEn ? "Google Merchant Center is a free platform where ecommerce businesses upload their product catalogue to Google. Once your products are in Merchant Center, they can appear in Google Shopping results (the product listing ads with images and prices at the top of search results), free product listings in the Shopping tab, Google Images product results and Google's Buy on Google feature (where available). Without a Merchant Center account, your products are invisible in these high-visibility placements." : "Google Merchant Center est une plateforme gratuite où les entreprises e-commerce téléchargent leur catalogue de produits vers Google. Une fois vos produits dans Merchant Center, ils peuvent apparaître dans les résultats Google Shopping (les annonces de liste de produits avec images et prix en haut des résultats de recherche), les listes de produits gratuites dans l'onglet Shopping, les résultats de produits Google Images et la fonctionnalité Acheter sur Google (où disponible). Sans compte Merchant Center, vos produits sont invisibles dans ces emplacements très visibles."}
          </p>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {isEn ? "Merchant Center is also a prerequisite for running Google Shopping campaigns through Google Ads. Shopping ads — which show product images, names, prices and your store name directly in search results — typically generate higher click-through rates than text ads for product searches because they give shoppers more information before the click. The combination of free product listings and paid Shopping ads gives ecommerce businesses maximum coverage in Google." : "Merchant Center est également un prérequis pour diffuser des campagnes Google Shopping via Google Ads. Les annonces Shopping — qui affichent les images de produits, noms, prix et le nom de votre boutique directement dans les résultats de recherche — génèrent généralement des taux de clics plus élevés que les annonces texte pour les recherches de produits car ils donnent aux acheteurs plus d'informations avant le clic. La combinaison des listes de produits gratuites et des annonces Shopping payantes donne aux entreprises e-commerce une couverture maximale dans Google."}
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-primary-600 mb-4">
            {isEn ? "How to create and verify your Merchant Center account" : "Comment créer et vérifier votre compte Merchant Center"}
          </h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {isEn ? "Setting up Merchant Center: Go to merchants.google.com and sign in with the Google account associated with your business. Create your account, providing your business name, country and time zone. After creating the account, you must verify and claim your website — this proves to Google that you own the domain. Verification methods include: adding an HTML tag to your website's header, uploading an HTML file to your server, or using Google Analytics or Google Tag Manager if already installed." : "Configuration de Merchant Center : Allez sur merchants.google.com et connectez-vous avec le compte Google associé à votre entreprise. Créez votre compte en fournissant le nom de votre entreprise, votre pays et votre fuseau horaire. Après avoir créé le compte, vous devez vérifier et revendiquer votre site web — cela prouve à Google que vous possédez le domaine. Les méthodes de vérification incluent : ajouter une balise HTML à l'en-tête de votre site, télécharger un fichier HTML sur votre serveur, ou utiliser Google Analytics ou Google Tag Manager s'ils sont déjà installés."}
          </p>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {isEn ? "Once verified, complete your account settings: configure your shipping settings (required for Google to show accurate delivery information in Shopping results), set up your return policy, and ensure your business information matches what is on your website. Google reviews accounts for policy compliance before allowing your products to show — ensure your website has clear shipping information, return policy, contact information and payment security before submitting products." : "Une fois vérifié, complétez les paramètres de votre compte : configurez vos paramètres d'expédition (requis pour que Google affiche des informations de livraison précises dans les résultats Shopping), configurez votre politique de retour, et assurez-vous que vos informations d'entreprise correspondent à ce qui est sur votre site. Google examine les comptes pour la conformité aux politiques avant de permettre l'affichage de vos produits — assurez-vous que votre site a des informations d'expédition claires, une politique de retour, des coordonnées et une sécurité de paiement avant de soumettre des produits."}
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-primary-600 mb-4">
            {isEn ? "How to create your product feed" : "Comment créer votre flux de produits"}
          </h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {isEn ? "The product feed is a file (typically a spreadsheet or XML file) that contains your product data. The key attributes for each product include: id (unique product identifier), title (product name — this is the most important SEO field), description, link (URL to the product page), image_link, price, availability, brand, gtin or mpn (product identifiers), and product_type or google_product_category." : "Le flux de produits est un fichier (généralement une feuille de calcul ou un fichier XML) qui contient vos données de produits. Les attributs clés pour chaque produit incluent : id (identifiant unique du produit), title (nom du produit — c'est le champ SEO le plus important), description, link (URL vers la page produit), image_link, price, availability, brand, gtin ou mpn (identifiants de produits), et product_type ou google_product_category."}
          </p>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {isEn ? "For Shopify stores, the Google and YouTube app generates the feed automatically. For WooCommerce, plugins like Google Listings and Ads or WooCommerce Google Feed Manager handle the feed. For custom stores, you can create a Google Sheets feed or an XML feed. The product title is the most important feed optimisation lever — include the most search-relevant keywords in the title (brand, product name, key attributes, size or colour if relevant)." : "Pour les boutiques Shopify, l'application Google et YouTube génère automatiquement le flux. Pour WooCommerce, des plugins comme Google Listings and Ads ou WooCommerce Google Feed Manager gèrent le flux. Pour les boutiques personnalisées, vous pouvez créer un flux Google Sheets ou un flux XML. Le titre du produit est le levier d'optimisation de flux le plus important — incluez les mots-clés les plus pertinents dans le titre (marque, nom du produit, attributs clés, taille ou couleur si pertinent)."}
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-primary-600 mb-4">
            {isEn ? "Common feed errors and how to fix them" : "Erreurs courantes de flux et comment les corriger"}
          </h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {isEn ? "Common Merchant Center feed errors include: missing required attributes (price, availability, title, link, image_link are mandatory), invalid GTIN values (if you claim to have a GTIN/barcode, it must be valid — invalid GTINs cause disapprovals), mismatched prices (the price in your feed must match the price on the product page — price differences cause account suspension), and image quality issues (images must be at least 100x100px for non-apparel and have a clean background)." : "Les erreurs courantes de flux Merchant Center incluent : des attributs obligatoires manquants (prix, disponibilité, titre, lien, image_link sont obligatoires), des valeurs GTIN invalides (si vous affirmez avoir un GTIN/code-barres, il doit être valide — les GTIN invalides causent des désapprobations), des prix non concordants (le prix dans votre flux doit correspondre au prix sur la page produit — les différences de prix causent la suspension du compte), et des problèmes de qualité d'image (les images doivent faire au moins 100x100px pour les produits non-habillement et avoir un fond propre)."}
          </p>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {isEn ? "Monitor your Merchant Center dashboard regularly — it shows the status of every product (approved, disapproved, or with warnings). Address disapprovals quickly, as disapproved products do not show in Google Shopping. The most common disapproval reasons are policy violations (selling prohibited products, misleading claims) and data quality issues (mismatched prices or unavailable products). Set up automatic feed updates (daily for large stores, or trigger-based when product data changes) to keep your feed current." : "Surveillez régulièrement votre tableau de bord Merchant Center — il affiche le statut de chaque produit (approuvé, désapprouvé ou avec des avertissements). Adressez les désapprobations rapidement, car les produits désapprouvés n'apparaissent pas dans Google Shopping. Les raisons de désapprobation les plus courantes sont les violations de politique (vente de produits interdits, affirmations trompeuses) et les problèmes de qualité des données (prix non concordants ou produits indisponibles). Configurez des mises à jour automatiques du flux (quotidiennes pour les grandes boutiques, ou déclenchées par des événements quand les données de produits changent) pour maintenir votre flux à jour."}
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-primary-600 mb-4">
            {isEn ? "Linking Merchant Center with Google Ads" : "Lier Merchant Center avec Google Ads"}
          </h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {isEn ? "To run paid Shopping campaigns, link your Merchant Center account to your Google Ads account. In Merchant Center, go to Settings {'>'} Linked accounts {'>'} Google Ads and enter your Google Ads Customer ID. Once linked, you can create Shopping campaigns in Google Ads that use your Merchant Center product data. The two account types work together — Merchant Center provides the product data, Google Ads provides the bidding and campaign management." : "Pour lancer des campagnes Shopping payantes, liez votre compte Merchant Center à votre compte Google Ads. Dans Merchant Center, allez dans Paramètres {'>'}  Comptes liés {'>'} Google Ads et entrez votre ID Client Google Ads. Une fois liés, vous pouvez créer des campagnes Shopping dans Google Ads qui utilisent les données de produits de Merchant Center. Les deux types de comptes fonctionnent ensemble — Merchant Center fournit les données de produits, Google Ads fournit la gestion des enchères et des campagnes."}
          </p>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {isEn ? "Even if you do not plan to run paid Shopping ads immediately, setting up Merchant Center is worthwhile for the free product listings alone. Google's free Shopping listings allow products to appear in the Shopping tab and increasingly in organic search results at no cost. For many ecommerce businesses, free Shopping traffic represents a significant portion of total organic revenue." : "Même si vous ne prévoyez pas de lancer des annonces Shopping payantes immédiatement, la configuration de Merchant Center vaut la peine pour les listes de produits gratuites seules. Les listes de shopping gratuites de Google permettent aux produits d'apparaître dans l'onglet Shopping et de plus en plus dans les résultats de recherche organiques sans coût. Pour de nombreuses entreprises e-commerce, le trafic Shopping gratuit représente une part significative du revenu organique total."}
          </p>
        </section>

        <BlogBanner variant="ecommerce" />
        <section className="bg-primary-600 text-white rounded-2xl p-8 mt-12">
          <h2 className="text-2xl font-bold mb-4">
            {isEn ? "Need help with your digital marketing?" : "Besoin d'aide avec votre marketing digital ?"}
          </h2>
          <p className="text-primary-200 mb-6">
            {isEn ? "Tell us about your project and we'll get back to you within 24 hours." : "Parlez-nous de votre projet et nous vous répondrons dans les 24 heures."}
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
