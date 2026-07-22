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
      ? "Payment Methods for Online Stores — Which to Install and Why | Mkt Web 360"
      : "Méthodes de paiement pour boutiques en ligne — Lesquelles installer et pourquoi | Mkt Web 360",
    description: isEn
      ? "Which payment gateways to use for your online store, how to configure them and which buyers prefer."
      : "Quelles passerelles de paiement utiliser pour votre boutique en ligne, comment les configurer et lesquelles les acheteurs préfèrent.",
    alternates: alternatesFor(`/${lang}/${lang === "en" ? "payment-methods-online-store" : "methodes-paiement-boutique-en-ligne"}/`) ?? {
      canonical: `https://www.mktweb360.com/${lang}/${lang === "en" ? "payment-methods-online-store" : "methodes-paiement-boutique-en-ligne"}/`,
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
            { label: isEn ? "Payment methods" : "Méthodes de paiement" },
          ]}
        />
        <p className="text-sm text-accent-500 font-semibold mb-2">Ecommerce</p>
        <h1 className="text-4xl font-bold text-primary-600 mb-4 leading-tight">
          {isEn
            ? "Payment methods for online stores: which ones to install and how to configure them"
            : "Méthodes de paiement pour boutiques en ligne : lesquelles installer et comment les configurer"}
        </h1>
        <p className="text-xl text-gray-500 mb-8 leading-relaxed">
          {isEn
            ? "The payment methods available in your online store directly determine your conversion rate. This guide explains which gateways to use, how to configure them and which buyers prefer."
            : "Les méthodes de paiement disponibles dans votre boutique en ligne déterminent directement votre taux de conversion. Ce guide explique quelles passerelles utiliser, comment les configurer et lesquelles les acheteurs préfèrent."}
        </p>

        <h2 className="text-2xl font-bold text-primary-600 mt-10 mb-4">
          {isEn
            ? "Which payment methods online buyers prefer"
            : "Quelles méthodes de paiement les acheteurs en ligne préfèrent"}
        </h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          {isEn
            ? "In Europe, the most used payment methods for online purchases are: credit/debit card (Visa, Mastercard) — used by 65–75% of buyers, digital wallets (PayPal, Apple Pay, Google Pay) — 25–40%, bank transfer — 10–15%, and instalment payments (Klarna, Sequra) — growing rapidly, especially for purchases over 100€. Not offering a buyer's preferred method is one of the top causes of checkout abandonment."
            : "En Europe, les méthodes de paiement les plus utilisées pour les achats en ligne sont : carte de crédit/débit (Visa, Mastercard) — utilisée par 65 à 75% des acheteurs, portefeuilles numériques (PayPal, Apple Pay, Google Pay) — 25 à 40%, virement bancaire — 10 à 15%, et paiement en plusieurs fois (Klarna, Sequra) — en forte croissance, surtout pour les achats au-dessus de 100€. Ne pas offrir la méthode préférée d'un acheteur est l'une des principales causes d'abandon de paiement."}
        </p>

        <h2 className="text-2xl font-bold text-primary-600 mt-10 mb-4">
          {isEn
            ? "Stripe: the most complete option for online stores"
            : "Stripe : l'option la plus complète pour les boutiques en ligne"}
        </h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          {isEn
            ? "Stripe is the recommended payment gateway for most European online stores. It accepts cards from 195+ countries, supports Apple Pay, Google Pay, SEPA direct debit and many local methods. Commission: 1.4% + 0.25€ for European cards, 2.9% + 0.25€ for non-European cards. No setup fee, no monthly fee, no contract. WooCommerce and Shopify both have official Stripe plugins."
            : "Stripe est la passerelle de paiement recommandée pour la plupart des boutiques en ligne européennes. Elle accepte les cartes de 195+ pays, prend en charge Apple Pay, Google Pay, le débit SEPA et de nombreuses méthodes locales. Commission : 1,4% + 0,25€ pour les cartes européennes, 2,9% + 0,25€ pour les cartes non européennes. Pas de frais d'installation, pas de frais mensuels, pas de contrat. WooCommerce et Shopify ont tous deux des plugins Stripe officiels."}
        </p>
        <p className="text-gray-600 leading-relaxed mb-4">
          {isEn
            ? "Stripe's hosted checkout (Stripe Checkout) provides a conversion-optimised payment page that automatically displays the most relevant payment methods based on the customer's device and location. For mobile users, this means Apple Pay or Google Pay appears automatically, reducing the payment friction to a single tap."
            : "Le checkout hébergé de Stripe (Stripe Checkout) fournit une page de paiement optimisée pour la conversion qui affiche automatiquement les méthodes de paiement les plus pertinentes selon l'appareil et la localisation du client. Pour les utilisateurs mobiles, cela signifie qu'Apple Pay ou Google Pay apparaît automatiquement, réduisant la friction de paiement à un seul appui."}
        </p>

        <h2 className="text-2xl font-bold text-primary-600 mt-10 mb-4">
          {isEn
            ? "PayPal, Apple Pay and Google Pay"
            : "PayPal, Apple Pay et Google Pay"}
        </h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          {isEn
            ? "PayPal remains important for buyer confidence — many buyers feel more protected using PayPal and will specifically choose stores that accept it. Commission: 3.49% + 0.49€ per transaction (higher than Stripe for card payments). Apple Pay and Google Pay require no extra setup if you use Stripe — they activate automatically through Stripe's payment element."
            : "PayPal reste important pour la confiance des acheteurs — de nombreux acheteurs se sentent plus protégés en utilisant PayPal et choisissent spécifiquement les boutiques qui l'acceptent. Commission : 3,49% + 0,49€ par transaction (plus élevé que Stripe pour les paiements par carte). Apple Pay et Google Pay ne nécessitent pas de configuration supplémentaire si vous utilisez Stripe — ils s'activent automatiquement via l'élément de paiement Stripe."}
        </p>

        <h2 className="text-2xl font-bold text-primary-600 mt-10 mb-4">
          {isEn
            ? "Instalment payments: Klarna and Sequra"
            : "Paiement en plusieurs fois : Klarna et Sequra"}
        </h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          {isEn
            ? "Buy-now-pay-later (BNPL) significantly increases average order value and conversion for purchases above 100€. Klarna (available across Europe) and Sequra (strong in Spain and Italy) let buyers split payments into 3–12 monthly instalments. The store receives full payment immediately; the BNPL provider assumes the credit risk. Commission: typically 3–5% per transaction."
            : "Le paiement fractionné (BNPL) augmente significativement la valeur moyenne des commandes et la conversion pour les achats au-dessus de 100€. Klarna (disponible dans toute l'Europe) et Sequra (fort en Espagne et en Italie) permettent aux acheteurs de diviser les paiements en 3 à 12 mensualités. La boutique reçoit le paiement intégral immédiatement ; le prestataire BNPL assume le risque de crédit. Commission : généralement 3 à 5% par transaction."}
        </p>

        <h2 className="text-2xl font-bold text-primary-600 mt-10 mb-4">
          {isEn
            ? "Real commissions of each payment gateway"
            : "Commissions réelles de chaque passerelle de paiement"}
        </h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          {isEn
            ? "Per 1,000€ in sales: Stripe (European cards) ≈ 14.25€. PayPal ≈ 34.90€. Klarna/Sequra ≈ 30–50€. The difference is meaningful at scale. For a store doing 50,000€/month, switching from PayPal-only to Stripe as primary gateway saves approximately 1,000€/month in fees without any loss of conversion — and likely improves conversion due to the better checkout experience."
            : "Pour 1 000€ de ventes : Stripe (cartes européennes) ≈ 14,25€. PayPal ≈ 34,90€. Klarna/Sequra ≈ 30 à 50€. La différence est significative à l'échelle. Pour une boutique réalisant 50 000€/mois, passer de PayPal seul à Stripe comme passerelle principale économise environ 1 000€/mois en frais sans aucune perte de conversion — et améliore probablement la conversion grâce à la meilleure expérience de paiement."}
        </p>
        <p className="text-gray-600 leading-relaxed mb-4">
          {isEn
            ? "Recommended setup for most European stores: Stripe as primary gateway (cards + Apple Pay + Google Pay + SEPA), PayPal as optional alternative for buyers who prefer it, and Klarna or Sequra for purchases above 80€. This combination covers 95%+ of European buyer payment preferences."
            : "Configuration recommandée pour la plupart des boutiques européennes : Stripe comme passerelle principale (cartes + Apple Pay + Google Pay + SEPA), PayPal comme alternative optionnelle pour les acheteurs qui le préfèrent, et Klarna ou Sequra pour les achats au-dessus de 80€. Cette combinaison couvre 95%+ des préférences de paiement des acheteurs européens."}
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
