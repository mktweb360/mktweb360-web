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
      ? "How to Configure Shipping in WooCommerce — Complete Guide | Mkt Web 360"
      : "Comment configurer les expéditions dans WooCommerce — Guide complet | Mkt Web 360",
    description: isEn
      ? "How to configure shipping zones, rates and carriers in WooCommerce. Free shipping, flat rate and carrier integration step by step."
      : "Comment configurer les zones d'expédition, tarifs et transporteurs dans WooCommerce. Livraison gratuite, tarif fixe et intégration transporteurs étape par étape.",
    alternates: alternatesFor(`/${lang}/${lang === "en" ? "configure-shipping-woocommerce" : "configurer-expeditions-woocommerce"}/`) ?? {
      canonical: `https://www.mktweb360.com/${lang}/${lang === "en" ? "configure-shipping-woocommerce" : "configurer-expeditions-woocommerce"}/`,
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
            { label: isEn ? "WooCommerce shipping" : "Expéditions WooCommerce" },
          ]}
        />
        <p className="text-sm text-accent-500 font-semibold mb-2">Ecommerce</p>
        <h1 className="text-4xl font-bold text-primary-600 mb-4 leading-tight">
          {isEn
            ? "How to configure shipping in WooCommerce step by step"
            : "Comment configurer les expéditions dans WooCommerce étape par étape"}
        </h1>
        <p className="text-xl text-gray-500 mb-8 leading-relaxed">
          {isEn
            ? "Shipping configuration is one of the most critical aspects of an online store. A bad configuration can cost you sales or margin. This guide explains how to do it right from the start."
            : "La configuration des expéditions est l'un des aspects les plus critiques d'une boutique en ligne. Une mauvaise configuration peut vous coûter des ventes ou de la marge. Ce guide explique comment bien le faire dès le départ."}
        </p>

        <h2 className="text-2xl font-bold text-primary-600 mt-10 mb-4">
          {isEn
            ? "Types of shipping in WooCommerce: free, flat rate and calculated"
            : "Types d'expédition dans WooCommerce : gratuit, tarif fixe et calculé"}
        </h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          {isEn
            ? "WooCommerce offers three native shipping methods: Free Shipping (no cost, can be conditional on order amount or coupon), Flat Rate (a fixed price per order, per item or per order + per item), and Local Pickup (for in-store collection). For calculated rates from real carriers (DHL, UPS, DPD), you need a carrier plugin that queries the carrier's API in real time based on weight, dimensions and destination."
            : "WooCommerce propose trois méthodes d'expédition natives : Livraison gratuite (sans coût, peut être conditionnelle à un montant de commande ou un coupon), Tarif fixe (un prix fixe par commande, par article ou par commande + par article), et Retrait en magasin (pour la collecte en boutique). Pour les tarifs calculés des vrais transporteurs (DHL, UPS, DPD), vous avez besoin d'un plugin de transporteur qui interroge l'API du transporteur en temps réel en fonction du poids, des dimensions et de la destination."}
        </p>
        <p className="text-gray-600 leading-relaxed mb-4">
          {isEn
            ? "Most SMEs use flat rate shipping with a conditional free shipping threshold. Example: 4.95€ for orders under 50€, free for orders 50€ and above. This is simple to understand, easy to configure and incentivises larger orders."
            : "La plupart des PME utilisent la livraison à tarif fixe avec un seuil conditionnel de livraison gratuite. Exemple : 4,95€ pour les commandes en dessous de 50€, gratuit pour les commandes à partir de 50€. C'est simple à comprendre, facile à configurer et incite à des commandes plus importantes."}
        </p>

        <h2 className="text-2xl font-bold text-primary-600 mt-10 mb-4">
          {isEn
            ? "Shipping zones: how to segment by region and country"
            : "Zones d'expédition : comment segmenter par région et pays"}
        </h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          {isEn
            ? "Shipping zones allow you to offer different rates and methods depending on where the customer is. Example zones: Peninsula (national standard rate), Canary Islands / Balearics (different rates or restricted methods), European Union (flat international rate), Rest of World (flat rate or not available). Go to WooCommerce {'>'} Settings {'>'} Shipping {'>'} Shipping Zones to create and configure zones."
            : "Les zones d'expédition vous permettent d'offrir différents tarifs et méthodes selon l'emplacement du client. Exemples de zones : Péninsule (tarif national standard), Îles Canaries / Baléares (tarifs différents ou méthodes restreintes), Union Européenne (tarif international fixe), Reste du monde (tarif fixe ou non disponible). Allez dans WooCommerce {'>'} Paramètres {'>'} Expédition {'>'} Zones d'expédition pour créer et configurer les zones."}
        </p>
        <p className="text-gray-600 leading-relaxed mb-4">
          {isEn
            ? "Important: WooCommerce matches zones in order from top to bottom. Place the most specific zones (specific regions) above the more general ones (entire countries). A customer in Madrid should match the Peninsula zone, not the Rest of World zone."
            : "Important : WooCommerce associe les zones dans l'ordre de haut en bas. Placez les zones les plus spécifiques (régions spécifiques) au-dessus des plus générales (pays entiers). Un client à Madrid doit correspondre à la zone Péninsule, pas à la zone Reste du monde."}
        </p>

        <h2 className="text-2xl font-bold text-primary-600 mt-10 mb-4">
          {isEn
            ? "Free shipping from minimum order amount"
            : "Livraison gratuite à partir d'un montant minimum"}
        </h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          {isEn
            ? "Free shipping is one of the most powerful conversion drivers in ecommerce — studies show 75%+ of online buyers consider free shipping important. Setting a minimum threshold (e.g. free shipping from 50€) not only reduces your shipping cost percentage but also increases average order value as customers add items to reach the threshold."
            : "La livraison gratuite est l'un des moteurs de conversion les plus puissants en e-commerce — des études montrent que 75%+ des acheteurs en ligne considèrent la livraison gratuite importante. Fixer un seuil minimum (par exemple livraison gratuite dès 50€) réduit non seulement votre pourcentage de coût d'expédition mais augmente également la valeur moyenne des commandes car les clients ajoutent des articles pour atteindre le seuil."}
        </p>
        <p className="text-gray-600 leading-relaxed mb-4">
          {isEn
            ? "In WooCommerce, configure this in the Free Shipping method settings: set Minimum Order Amount. Display a progress bar in the cart ('X€ more for free shipping') to nudge customers — there are free plugins for this. A/B test your threshold: too low costs you margin, too high kills the incentive."
            : "Dans WooCommerce, configurez cela dans les paramètres de la méthode Livraison gratuite : définissez le Montant minimum de commande. Affichez une barre de progression dans le panier ('X€ de plus pour la livraison gratuite') pour encourager les clients — il existe des plugins gratuits pour cela. Testez votre seuil en A/B : trop bas vous coûte de la marge, trop haut tue l'incitation."}
        </p>

        <h2 className="text-2xl font-bold text-primary-600 mt-10 mb-4">
          {isEn
            ? "Carrier integration: DHL, DPD and UPS"
            : "Intégration transporteurs : DHL, DPD et UPS"}
        </h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          {isEn
            ? "For automated label printing and real-time tracking, integrate a carrier directly with WooCommerce. DHL, DPD, UPS and GLS all have official or well-maintained third-party plugins. These plugins: generate shipping labels from the WooCommerce order screen, calculate rates based on parcel weight/dimensions, send tracking numbers to customers automatically, and sync order statuses with the carrier's system."
            : "Pour l'impression automatique d'étiquettes et le suivi en temps réel, intégrez un transporteur directement avec WooCommerce. DHL, DPD, UPS et GLS ont tous des plugins officiels ou bien maintenus par des tiers. Ces plugins : génèrent des étiquettes d'expédition depuis l'écran de commande WooCommerce, calculent les tarifs basés sur le poids/dimensions du colis, envoient automatiquement les numéros de suivi aux clients, et synchronisent les statuts de commande avec le système du transporteur."}
        </p>

        <h2 className="text-2xl font-bold text-primary-600 mt-10 mb-4">
          {isEn
            ? "Returns management in WooCommerce"
            : "Gestion des retours dans WooCommerce"}
        </h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          {isEn
            ? "In Europe, consumers have the legal right to return purchases within 14 days (distance selling regulations). Your returns policy must be visible and clear. WooCommerce does not have a native returns portal — for self-service returns, use a plugin like WooCommerce Returns and Warranty Requests or integrate a third-party returns management service."
            : "En Europe, les consommateurs ont le droit légal de retourner les achats dans les 14 jours (réglementations de vente à distance). Votre politique de retour doit être visible et claire. WooCommerce n'a pas de portail de retours natif — pour les retours en libre-service, utilisez un plugin comme WooCommerce Returns and Warranty Requests ou intégrez un service de gestion des retours tiers."}
        </p>
        <p className="text-gray-600 leading-relaxed mb-4">
          {isEn
            ? "A clear, easy returns process increases purchase confidence and reduces cart abandonment. Counterintuitively, stores with generous return policies often have lower return rates — because customers buy with confidence rather than hesitating and ultimately not buying at all."
            : "Un processus de retours clair et facile augmente la confiance à l'achat et réduit l'abandon de panier. Paradoxalement, les boutiques avec des politiques de retour généreuses ont souvent des taux de retour plus faibles — parce que les clients achètent avec confiance plutôt que d'hésiter et finalement ne pas acheter du tout."}
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
