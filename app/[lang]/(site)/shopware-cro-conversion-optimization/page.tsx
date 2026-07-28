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
      ? "Shopware CRO: How to Optimise Your Store's Conversion Rate"
      : "CRO Shopware : comment optimiser le taux de conversion de votre boutique",
    description: isEn
      ? "Boost your Shopware store's conversion rate: key GA4 events, the 5 real causes of cart abandonment, and product page and checkout optimisation."
      : "Augmentez le taux de conversion de votre boutique Shopware : événements GA4 essentiels, les 5 vraies causes d'abandon de panier et optimisation des fiches produit et du checkout.",
    alternates: alternatesFor(`/${lang}/shopware-cro-conversion-optimization/`) ?? {
      canonical: `https://www.mktweb360.com/${lang}/shopware-cro-conversion-optimization/`,
    },
    openGraph: {
      title: isEn
        ? "Shopware CRO: How to Optimise Your Store's Conversion Rate | Mkt Web 360"
        : "CRO Shopware : comment optimiser le taux de conversion de votre boutique | Mkt Web 360",
      description: isEn
        ? "Shopware CRO: GA4 events, cart abandonment causes, and product page and checkout optimisation to sell more with the same traffic."
        : "CRO Shopware : événements GA4, causes d'abandon de panier et optimisation des fiches et du checkout pour vendre plus avec le même trafic.",
    },
  };
}

const FAQS_EN = [
  {
    q: "What is a good conversion rate for an ecommerce store?",
    a: "The global average is around 2.7%, but in the UK and Spain it ranges between 1% and 1.4% (DemandSage, 2026). More than the absolute figure, what matters is improving your own: gaining half a point can increase sales by 50% without spending more on traffic.",
  },
  {
    q: "Which GA4 events should I track without fail?",
    a: "Four: view_item, add_to_cart, begin_checkout and purchase. Together they build the full funnel and show exactly which step is losing buyers.",
  },
  {
    q: "Why do people abandon their cart?",
    a: "Five common causes: unexpected costs at the end, mandatory registration, a long checkout, distrust at payment, and insufficient information on the product page. All of them can be measured and eliminated.",
  },
  {
    q: "What must a product page include?",
    a: "A visible CTA without scrolling on mobile, clear price and availability, return policy on the page itself, between 4 and 6 real product images, and reviews with AggregateRating schema to show stars and social proof.",
  },
  {
    q: "What tools can I use to diagnose my conversion?",
    a: "GA4 for the quantitative funnel, Microsoft Clarity (free) for session recordings and heatmaps, and Shopware Analytics to cross-reference catalogue and order data. Together they tell you exactly where to act.",
  },
];

const FAQS_FR = [
  {
    q: "Quel est un bon taux de conversion pour un e-commerce ?",
    a: "La moyenne mondiale est d'environ 2,7 %, mais en France et en Belgique elle se situe entre 1 % et 1,4 % (DemandSage, 2026). Plus que le chiffre absolu, ce qui compte c'est d'améliorer le vôtre : gagner un demi-point peut augmenter les ventes de 50 % sans dépenser plus en acquisition.",
  },
  {
    q: "Quels événements GA4 dois-je mesurer absolument ?",
    a: "Quatre : view_item, add_to_cart, begin_checkout et purchase. Ensemble ils construisent l'entonnoir complet et montrent exactement à quelle étape vous perdez les acheteurs.",
  },
  {
    q: "Pourquoi les gens abandonnent-ils leur panier ?",
    a: "Cinq causes courantes : des frais inattendus en fin de parcours, une inscription obligatoire, un checkout trop long, la méfiance au moment du paiement et des informations insuffisantes sur la fiche produit. Toutes peuvent être mesurées et éliminées.",
  },
  {
    q: "Qu'est-ce qu'une fiche produit ne peut pas se permettre de manquer ?",
    a: "Un CTA visible sans scroll sur mobile, un prix et une disponibilité clairs, la politique de retour sur la fiche elle-même, entre 4 et 6 images réelles du produit, et des avis avec le schéma AggregateRating pour afficher des étoiles et prouver la confiance sociale.",
  },
  {
    q: "Quels outils pour diagnostiquer ma conversion ?",
    a: "GA4 pour l'entonnoir quantitatif, Microsoft Clarity (gratuit) pour les enregistrements de session et les cartes thermiques, et Shopware Analytics pour croiser les données avec votre catalogue et vos commandes. Les trois ensemble vous disent exactement où agir.",
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
            { label: isEn ? "Shopware CRO" : "CRO Shopware" },
          ]}
        />

        <p className="text-sm text-accent-500 font-semibold mb-2">Shopware</p>

        <h1 className="text-4xl font-bold text-primary-600 mb-4 leading-tight">
          {isEn
            ? "Shopware CRO: How to Optimise Your Store's Conversion Rate"
            : "CRO Shopware : comment optimiser le taux de conversion de votre boutique"}
        </h1>

        <p className="text-xl text-gray-500 mb-8 leading-relaxed">
          {isEn
            ? "Attracting visitors is half the battle; getting them to buy is the other half. Here is how to increase your Shopware store's conversion rate by removing friction where it really matters."
            : "Attirer des visites ne représente que la moitié du travail. L'autre moitié — la plus rentable — c'est les faire acheter. Voici comment augmenter le taux de conversion de votre boutique Shopware en supprimant les frictions là où elles comptent vraiment."}
        </p>

        <h2 className="text-2xl font-bold text-primary-600 mt-8 mb-3">
          {isEn ? "Average conversion rates and why yours matters" : "Le taux de conversion moyen et pourquoi le vôtre compte"}
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          {isEn
            ? "The global average ecommerce conversion rate is around 2.7%, but in the UK and Spain it sits between 1% and 1.4% (DemandSage, 2026). This means improving conversion has a direct multiplier effect: going from 1% to 1.5% means 50% more sales without spending an extra pound on acquisition. That is why CRO is the most profitable growth lever for a store that already has traffic."
            : "Le taux de conversion moyen du e-commerce est d'environ 2,7 % à l'échelle mondiale, mais en France et en Belgique il se situe entre 1 % et 1,4 % (DemandSage, 2026). Cela signifie qu'améliorer la conversion a un effet multiplicateur direct : passer de 1 % à 1,5 % représente 50 % de ventes supplémentaires sans dépenser un euro de plus en acquisition. C'est pourquoi le CRO est le levier de croissance le plus rentable d'une boutique qui reçoit déjà du trafic."}
        </p>

        <h2 className="text-2xl font-bold text-primary-600 mt-8 mb-3">
          {isEn ? "The 4 essential GA4 events" : "Les 4 événements GA4 indispensables"}
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          {isEn
            ? "You cannot improve what you do not measure. In a Shopware store, the four GA4 events that must be tracked are: view_item (when someone views a product page), add_to_cart (when they add it to the cart), begin_checkout (when they start the purchase process), and purchase (when they complete the order). With these four data points you build the full funnel and see exactly where people drop off."
            : "On ne peut pas améliorer ce qu'on ne mesure pas. Dans une boutique Shopware, les quatre événements GA4 indispensables sont : view_item (quand quelqu'un consulte une fiche produit), add_to_cart (quand il l'ajoute au panier), begin_checkout (quand il commence le processus d'achat) et purchase (quand il finalise la commande). Ces quatre points permettent de construire l'entonnoir complet et de voir exactement où les visiteurs décrochent."}
        </p>

        <h2 className="text-2xl font-bold text-primary-600 mt-8 mb-3">
          {isEn ? "The 5 real causes of cart abandonment" : "Les 5 vraies causes de l'abandon de panier"}
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          {isEn
            ? "Cart abandonment has well-known causes that almost always repeat. First: unexpected costs that appear at the end (shipping charges the customer did not see coming). Second: forcing registration to complete a purchase. Third: a long checkout with too many steps or fields. Fourth: distrust at the point of payment, due to a lack of security signals or unfamiliar payment methods. Fifth: insufficient information on the product page, leaving unanswered questions. Every one of these friction points can be measured and removed."
            : "L'abandon de panier a des causes connues qui se répètent presque toujours. Première : des frais inattendus qui apparaissent à la fin (frais d'expédition que le client n'avait pas vus venir). Deuxième : obliger à s'inscrire pour acheter. Troisième : un checkout long, avec trop d'étapes ou de champs. Quatrième : la méfiance au moment du paiement, par manque de signaux de sécurité ou de méthodes connues. Cinquième : des informations insuffisantes sur la fiche produit, qui laissent des questions sans réponse. Chacun de ces points de friction peut être mesuré et éliminé."}
        </p>

        <h2 className="text-2xl font-bold text-primary-600 mt-8 mb-3">
          {isEn ? "Optimise your product pages" : "Optimisez vos fiches produit"}
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          {isEn
            ? "The product page is where the sale is won or lost. The essentials: the purchase CTA visible without scrolling on mobile, clear price and availability at first glance, the return policy on the page itself (reduces the fear of making a mistake), between 4 and 6 real product images, and reviews marked with AggregateRating schema so they display stars and provide social proof. Each of these elements increases conversion independently; together, they transform it."
            : "La fiche produit est l'endroit où la vente se gagne ou se perd. L'essentiel : le CTA d'achat visible sans faire défiler la page sur mobile, un prix et une disponibilité clairs dès le premier regard, la politique de retour présente sur la fiche elle-même (réduit la peur de se tromper), entre 4 et 6 images réelles du produit et des avis avec le schéma AggregateRating pour qu'ils affichent des étoiles et apportent une preuve sociale. Chacun de ces éléments augmente la conversion séparément ; ensemble, ils la transforment."}
        </p>

        <div className="bg-primary-50 rounded-xl p-6 border border-primary-100 my-6">
          <p className="font-semibold text-primary-700 mb-2">
            {isEn
              ? "Does your Shopware store get traffic but not sales?"
              : "Votre boutique Shopware reçoit des visites mais ne vend pas ?"}
          </p>
          <p className="text-gray-600 text-sm mb-4">
            {isEn
              ? "We diagnose where you are losing sales — funnel, checkout and product pages — and apply CRO improvements that turn the traffic you already have into orders."
              : "Nous diagnostiquons où vous perdez des ventes — entonnoir, checkout et fiches produit — et appliquons des améliorations CRO qui convertissent le trafic que vous avez déjà en commandes."}
          </p>
          <Link
            href={`/${lang}/contact`}
            className="inline-block bg-accent-500 text-white px-6 py-2.5 rounded-full font-semibold text-sm hover:bg-accent-600 transition-colors"
          >
            {isEn ? "Contact us" : "Nous contacter"}
          </Link>
        </div>

        <h2 className="text-2xl font-bold text-primary-600 mt-8 mb-3">
          {isEn ? "Diagnostic tools" : "Outils de diagnostic"}
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          {isEn
            ? "To know where to act, three tools are sufficient — and two are free. GA4 gives you the quantitative funnel: where and how many people drop off. Microsoft Clarity, which is free, provides the qualitative layer: session recordings and heatmaps that show how users actually behave. And Shopware Analytics, the native dashboard, cross-references this data with your catalogue and orders. This combination takes you from guessing to knowing what is holding back your sales."
            : "Pour savoir où agir, trois outils suffisent et deux sont gratuits. GA4 donne l'entonnoir quantitatif : où et combien de personnes décrochent. Microsoft Clarity, gratuit, apporte le qualitatif : enregistrements de session et cartes thermiques qui montrent comment l'utilisateur se comporte vraiment. Et Shopware Analytics, le tableau de bord natif, croise ces données avec celles de votre catalogue et de vos commandes. Cette combinaison vous fait passer de la supposition à la certitude sur ce qui freine vos ventes."}
        </p>

        <div className="bg-primary-600 text-white rounded-2xl p-8 my-8 text-center">
          <h2 className="text-2xl font-bold mb-3">
            {isEn ? "Convert more with the traffic you already have" : "Convertissez plus avec le trafic que vous avez déjà"}
          </h2>
          <p className="text-primary-200 mb-6">
            {isEn
              ? "CRO is the most profitable way to grow: more sales without spending more on acquisition. We optimise your Shopware store so that every visit performs better."
              : "Le CRO est la façon la plus rentable de croître : plus de ventes sans dépenser davantage en acquisition. Nous optimisons votre boutique Shopware pour que chaque visite rapporte davantage."}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href={`/${lang}/contact`}
              className="bg-accent-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-accent-600 transition-colors"
            >
              {isEn ? "Get in touch" : "Nous contacter"}
            </Link>
            <Link
              href={`/${lang}/${isEn ? "online-store" : "boutique-en-ligne"}`}
              className="border-2 border-white text-white px-6 py-3 rounded-full font-semibold hover:bg-white/10 transition-colors"
            >
              {isEn ? "View online stores" : "Voir nos boutiques en ligne"}
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
      <RelatedArticles currentSlug="shopware-cro-conversion-optimization" />
    </>
  );
}
