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
      ? "How to Connect Your Physical POS to Your Online Store | Mkt Web 360"
      : "Comment connecter votre TPV physique à votre boutique en ligne | Mkt Web 360",
    description: isEn
      ? "Synchronise stock, sales and customers between your physical POS and your online store. WooCommerce and other solutions."
      : "Synchronisez le stock, les ventes et les clients entre votre TPV physique et votre boutique en ligne. WooCommerce et autres solutions.",
    alternates: alternatesFor(`/${lang}/${lang === "en" ? "connect-pos-to-online-store" : "connecter-tpv-boutique-ligne"}/`) ?? {
      canonical: `https://www.mktweb360.com/${lang}/${lang === "en" ? "connect-pos-to-online-store" : "connecter-tpv-boutique-ligne"}/`,
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
            { label: isEn ? "POS + online store" : "TPV + boutique en ligne" },
          ]}
        />
        <p className="text-sm text-accent-500 font-semibold mb-2">Ecommerce</p>
        <h1 className="text-4xl font-bold text-primary-600 mb-4 leading-tight">
          {isEn
            ? "How to connect your physical POS to your online store"
            : "Comment connecter votre TPV physique à votre boutique en ligne"}
        </h1>
        <p className="text-xl text-gray-500 mb-8 leading-relaxed">
          {isEn
            ? "If you have a physical shop and an online store, managing stock in two separate places is a problem. This guide shows you how to synchronise them and avoid overselling, stockouts and double data entry."
            : "Si vous avez une boutique physique et une boutique en ligne, gérer le stock dans deux endroits séparés est un problème. Ce guide vous montre comment les synchroniser et éviter la survente, les ruptures de stock et la double saisie de données."}
        </p>

        <h2 className="text-2xl font-bold text-primary-600 mt-10 mb-4">
          {isEn ? "The problem of unsynchronised stock" : "Le problème du stock désynchronisé"}
        </h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          {isEn
            ? "Without synchronisation, you face three problems: overselling (a customer buys online something already sold in-store), stockouts (you show items available online that are actually out of stock), and double work (updating stock in two systems manually). Even with daily manual updates, there is always a window of error."
            : "Sans synchronisation, vous faites face à trois problèmes : la survente (un client achète en ligne quelque chose déjà vendu en boutique), les ruptures de stock (vous affichez des articles disponibles en ligne qui sont en réalité épuisés), et le double travail (mise à jour du stock manuellement dans deux systèmes). Même avec des mises à jour manuelles quotidiennes, il y a toujours une fenêtre d'erreur."}
        </p>

        <h2 className="text-2xl font-bold text-primary-600 mt-10 mb-4">
          {isEn ? "What is a POS and how does ecommerce integration work" : "Qu'est-ce qu'un TPV et comment fonctionne l'intégration e-commerce"}
        </h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          {isEn
            ? "A POS (Point of Sale) is the system used in-store to process sales, manage stock and track customers. Integration with an online store means the two systems share a single source of truth for stock, product data and customer information. When a sale happens in either channel, both systems update in real time."
            : "Un TPV (Terminal Point de Vente) est le système utilisé en boutique pour traiter les ventes, gérer le stock et suivre les clients. L'intégration avec une boutique en ligne signifie que les deux systèmes partagent une source unique de vérité pour le stock, les données produits et les informations clients. Quand une vente se produit dans l'un ou l'autre canal, les deux systèmes se mettent à jour en temps réel."}
        </p>

        <h2 className="text-2xl font-bold text-primary-600 mt-10 mb-4">
          {isEn ? "WooCommerce POS: the native solution" : "WooCommerce POS : la solution native"}
        </h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          {isEn
            ? "WooCommerce POS (free plugin) converts your WooCommerce store into a full POS system. You process in-store sales through a browser interface that shares the same product and stock data as your online store. Stock updates instantly in both directions. It requires a tablet or laptop at the checkout, a receipt printer and a card reader (Stripe or Square compatible)."
            : "WooCommerce POS (plugin gratuit) transforme votre boutique WooCommerce en un système TPV complet. Vous traitez les ventes en boutique via une interface navigateur qui partage les mêmes données produits et stocks que votre boutique en ligne. Le stock se met à jour instantanément dans les deux sens. Il nécessite une tablette ou un ordinateur portable en caisse, une imprimante de reçus et un lecteur de carte (compatible Stripe ou Square)."}
        </p>

        <h2 className="text-2xl font-bold text-primary-600 mt-10 mb-4">
          {isEn ? "Other POS solutions compatible with online stores" : "Autres solutions TPV compatibles avec les boutiques en ligne"}
        </h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          {isEn
            ? "Square POS integrates natively with WooCommerce via the official Square for WooCommerce plugin — stock syncs in real time. Lightspeed Retail connects to WooCommerce and Shopify. For Shopify stores, Shopify POS is the natural choice but requires staying on the Shopify ecosystem. Vend (now Lightspeed X) is a popular option for omnichannel retail."
            : "Square POS s'intègre nativement avec WooCommerce via le plugin officiel Square for WooCommerce — le stock se synchronise en temps réel. Lightspeed Retail se connecte à WooCommerce et Shopify. Pour les boutiques Shopify, Shopify POS est le choix naturel mais nécessite de rester dans l'écosystème Shopify. Vend (maintenant Lightspeed X) est une option populaire pour le commerce omnicanal."}
        </p>

        <h2 className="text-2xl font-bold text-primary-600 mt-10 mb-4">
          {isEn ? "What data synchronises: stock, sales, customers and billing" : "Quelles données se synchronisent : stock, ventes, clients et facturation"}
        </h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          {isEn
            ? "A proper integration synchronises: stock levels (both directions, in real time), product prices and descriptions, customer data (so a customer can buy online and return in-store seamlessly), order history (all channels visible in one place), and reporting (unified sales reports across channels). Without this, you are running two separate businesses that happen to share the same products."
            : "Une intégration correcte synchronise : les niveaux de stock (dans les deux sens, en temps réel), les prix et descriptions des produits, les données clients (pour qu'un client puisse acheter en ligne et retourner en boutique sans friction), l'historique des commandes (tous les canaux visibles en un seul endroit), et le reporting (rapports de ventes unifiés sur tous les canaux). Sans cela, vous gérez deux entreprises séparées qui partagent simplement les mêmes produits."}
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
