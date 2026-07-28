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
      ? "WooCommerce vs Shopify: Which to Choose for Your Online Store in 2026"
      : "WooCommerce vs Shopify : lequel choisir pour votre boutique en ligne en 2026",
    description: isEn
      ? "WooCommerce is free with total control. Shopify is faster to launch but charges commissions. An honest comparison with real 3-year costs and a recommendation by business type."
      : "WooCommerce est gratuit avec un contrôle total. Shopify est plus rapide à lancer mais prélève des commissions. Comparaison honnête avec coûts réels sur 3 ans et recommandation par type d'activité.",
    alternates: alternatesFor(`/${lang}/woocommerce-vs-shopify/`) ?? {
      canonical: `https://www.mktweb360.com/${lang}/woocommerce-vs-shopify/`,
    },
    openGraph: {
      title: isEn
        ? "WooCommerce vs Shopify: Which to Choose for Your Online Store in 2026 | Mkt Web 360"
        : "WooCommerce vs Shopify : lequel choisir pour votre boutique en ligne en 2026 | Mkt Web 360",
      description: isEn
        ? "Honest comparison between WooCommerce and Shopify with real 3-year costs and recommendation by business type."
        : "Comparaison honnête entre WooCommerce et Shopify avec coûts réels sur 3 ans et recommandation par type d'activité.",
    },
  };
}

const FAQS_EN = [
  {
    q: "Which is cheaper, WooCommerce or Shopify?",
    a: "WooCommerce in the long run. It is a free WordPress plugin: you pay for hosting, domain and development, but no platform fees or sales commissions. Shopify charges a monthly fee and, on its basic plan, a commission per sale that grows with your revenue.",
  },
  {
    q: "Which is easier to launch?",
    a: "Shopify. It is designed to get a store up and running quickly without technical knowledge, with hosting and maintenance included. WooCommerce offers more freedom but requires managing hosting, updates and configuration, so it usually needs initial technical support.",
  },
  {
    q: "Does Shopify charge a commission per sale?",
    a: "On its basic plan, yes: around 2% per sale if you do not use their own payment gateway. On annual revenue of £80,000, that is around £1,600 per year in commissions alone, versus £0 on WooCommerce.",
  },
  {
    q: "Who owns the store in each case?",
    a: "With WooCommerce, the store is 100% yours: you control the code, data and hosting. With Shopify you operate on their platform, with their rules and dependencies. For businesses wanting full ownership and long-term flexibility, WooCommerce offers more control.",
  },
  {
    q: "What about selling to other businesses (B2B)?",
    a: "For B2B ecommerce with complex catalogues, customer-specific pricing and large volumes, it is worth considering Shopware, a platform specifically oriented to that scenario. WooCommerce and Shopify cover B2C and simple B2B very well; Shopware fits better for demanding wholesale operations.",
  },
];

const FAQS_FR = [
  {
    q: "Qu'est-ce qui est moins cher, WooCommerce ou Shopify ?",
    a: "WooCommerce sur le long terme. C'est un plugin WordPress gratuit : vous payez l'hébergement, le domaine et le développement, mais pas de frais de plateforme ni de commissions sur les ventes. Shopify facture un abonnement mensuel et, sur son plan de base, une commission par vente qui croît avec votre chiffre d'affaires.",
  },
  {
    q: "Lequel est plus facile à lancer ?",
    a: "Shopify. Il est conçu pour mettre une boutique en ligne rapidement et sans connaissances techniques, avec l'hébergement et la maintenance inclus. WooCommerce offre plus de liberté mais nécessite de gérer l'hébergement, les mises à jour et la configuration, ce qui requiert généralement un support technique initial.",
  },
  {
    q: "Shopify prélève-t-il une commission par vente ?",
    a: "Sur son plan de base, oui : environ 2 % par vente si vous n'utilisez pas leur propre passerelle de paiement. Sur un chiffre d'affaires annuel de 80 000 €, cela représente environ 1 600 € par an rien qu'en commissions, contre 0 € sur WooCommerce.",
  },
  {
    q: "À qui appartient la boutique dans chaque cas ?",
    a: "Avec WooCommerce, la boutique est 100 % la vôtre : vous contrôlez le code, les données et l'hébergement. Avec Shopify, vous opérez sur leur plateforme, avec leurs règles et leurs dépendances. Pour les entreprises qui veulent une propriété totale et une flexibilité à long terme, WooCommerce offre plus de contrôle.",
  },
  {
    q: "Et si je vends à d'autres entreprises (B2B) ?",
    a: "Pour le e-commerce B2B avec des catalogues complexes, des prix par client et de grands volumes, il vaut la peine d'évaluer Shopware, une plateforme spécifiquement orientée vers ce scénario. WooCommerce et Shopify couvrent très bien le B2C et le B2B simple ; Shopware s'adapte mieux aux opérations de vente en gros exigeantes.",
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
            { label: "WooCommerce vs Shopify" },
          ]}
        />

        <p className="text-sm text-accent-500 font-semibold mb-2">
          {isEn ? "Ecommerce" : "E-commerce"}
        </p>

        <h1 className="text-4xl font-bold text-primary-600 mb-4 leading-tight">
          {isEn
            ? "WooCommerce vs Shopify: Which to Choose for Your Online Store in 2026"
            : "WooCommerce vs Shopify : lequel choisir pour votre boutique en ligne en 2026"}
        </h1>

        <p className="text-xl text-gray-500 mb-8 leading-relaxed">
          {isEn
            ? "It is the decision that shapes your online store for years. WooCommerce gives you total control without commissions; Shopify gets you selling fast in exchange for monthly fees. Here is the honest comparison, with real numbers over three years."
            : "C'est la décision qui conditionne votre boutique en ligne pour les années à venir. WooCommerce vous donne un contrôle total sans commissions ; Shopify vous permet de vendre rapidement en échange de frais mensuels. Voici la comparaison honnête, avec de vrais chiffres sur trois ans."}
        </p>

        <p className="text-gray-700 leading-relaxed mb-6">
          {isEn
            ? "Choosing an ecommerce platform is not a minor technical decision: it shapes your costs, margin and freedom for years. WooCommerce and Shopify are the two dominant options and they represent two opposing philosophies. Understanding where they truly differ — beyond each one's marketing — is what lets you make the right choice."
            : "Choisir une plateforme e-commerce n'est pas une décision technique mineure : elle conditionne vos coûts, votre marge et votre liberté pendant des années. WooCommerce et Shopify sont les deux options dominantes et représentent deux philosophies opposées. Comprendre en quoi elles diffèrent vraiment — au-delà du marketing de chacune — c'est ce qui vous permet de faire le bon choix."}
        </p>

        <h2 className="text-2xl font-bold text-primary-600 mt-8 mb-3">
          {isEn ? "Two different philosophies" : "Deux philosophies différentes"}
        </h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          {isEn
            ? "WooCommerce is a free, open-source WordPress plugin: it turns your website into a store and gives you absolute control of the code, data and hosting. Shopify is a closed, subscription-based platform: it gives you everything ready-made — hosting, security, maintenance — in exchange for operating within its ecosystem and rules. One prioritises ownership and flexibility; the other, immediacy and convenience."
            : "WooCommerce est un plugin WordPress open source gratuit : il transforme votre site en boutique et vous laisse le contrôle absolu du code, des données et de l'hébergement. Shopify est une plateforme fermée à abonnement : il vous donne tout prêt à l'emploi — hébergement, sécurité, maintenance — en échange d'opérer dans son écosystème et ses règles. L'un priorise la propriété et la flexibilité ; l'autre, l'immédiateté et le confort."}
        </p>

        <h2 className="text-2xl font-bold text-primary-600 mt-8 mb-3">
          {isEn ? "The real cost over 3 years" : "Le coût réel sur 3 ans"}
        </h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          {isEn
            ? "This is where the decision becomes concrete. Take a store generating £80,000 per year. On Shopify, its basic plan applies around a 2% commission per sale if you do not use its own payment gateway: that is about £1,600 per year in commissions alone, plus the platform's monthly fee. Over three years, those commissions add up to around £4,800 that simply do not exist on WooCommerce. WooCommerce has hosting, domain and development costs, but charges no platform fee or percentage per sale. The higher your revenue, the wider the gap in WooCommerce's favour."
            : "C'est là que la décision devient concrète. Prenons une boutique qui réalise 80 000 € de chiffre d'affaires annuel. Sur Shopify, son plan de base applique environ 2 % de commission par vente si vous n'utilisez pas sa propre passerelle de paiement : ce sont environ 1 600 € par an rien qu'en commissions, plus l'abonnement mensuel de la plateforme. Sur trois ans, ces commissions totalisent environ 4 800 € qui n'existent tout simplement pas sur WooCommerce. WooCommerce a des coûts d'hébergement, de domaine et de développement, mais ne facture pas d'abonnement de plateforme ni de pourcentage par vente. Plus votre chiffre d'affaires est élevé, plus l'écart est en faveur de WooCommerce."}
        </p>

        <h2 className="text-2xl font-bold text-primary-600 mt-8 mb-3">
          {isEn ? "Control, ownership and flexibility" : "Contrôle, propriété et flexibilité"}
        </h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          {isEn
            ? "WooCommerce is today the most widely used ecommerce platform in the world, with a 33.4% market share according to DataFirefly (2026). Its strength lies in freedom: you can customise any aspect, you own your data and you do not depend on a third party's decisions. Shopify, for its part, grows at 30% annually thanks to its ease of use, but at the cost of operating within a closed system with less room for deep customisation."
            : "WooCommerce est aujourd'hui la plateforme e-commerce la plus utilisée au monde, avec une part de marché de 33,4 % selon DataFirefly (2026). Sa force réside dans la liberté : vous personnalisez n'importe quel aspect, vous êtes propriétaire de vos données et ne dépendez pas des décisions d'un tiers. Shopify, de son côté, croît à un rythme de 30 % annuel grâce à sa facilité d'utilisation, mais au prix d'opérer dans un système fermé avec moins de marge de personnalisation profonde."}
        </p>

        <div className="bg-primary-50 rounded-xl p-6 border border-primary-100 my-6">
          <p className="font-semibold text-primary-700 mb-2">
            {isEn
              ? "Not sure which platform suits your business?"
              : "Vous ne savez pas quelle plateforme convient à votre activité ?"}
          </p>
          <p className="text-gray-600 text-sm mb-4">
            {isEn
              ? "We help you choose and build your online store without sales commissions or monthly licences, optimised for SEO from day one."
              : "Nous vous aidons à choisir et à construire votre boutique en ligne sans commissions sur les ventes ni licences mensuelles, optimisée pour le SEO dès le premier jour."}
          </p>
          <Link
            href={`/${lang}/${isEn ? "online-store" : "boutique-en-ligne"}`}
            className="inline-block bg-accent-500 text-white px-6 py-2.5 rounded-full font-semibold text-sm hover:bg-accent-600 transition-colors"
          >
            {isEn ? "View online store design" : "Voir conception boutique en ligne"}
          </Link>
        </div>

        <h2 className="text-2xl font-bold text-primary-600 mt-8 mb-3">
          {isEn ? "When to choose Shopify" : "Quand choisir Shopify"}
        </h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          {isEn
            ? "Shopify makes sense when you need to launch fast, do not want to worry about the technical side and your revenue is still modest — where commissions weigh little in absolute terms. It is a good option for validating an idea, for those starting without a technical team or for businesses that value convenience over control. The trade-off comes when you grow: commissions scale with your sales and platform dependency becomes more noticeable."
            : "Shopify a du sens quand vous avez besoin de lancer rapidement, que vous ne voulez pas vous soucier de la partie technique et que votre chiffre d'affaires est encore modeste — là où les commissions pèsent peu en termes absolus. C'est une bonne option pour valider une idée, pour ceux qui démarrent sans équipe technique ou pour les entreprises qui valorisent le confort au-dessus du contrôle. La contrepartie arrive quand vous grandissez : les commissions s'adaptent à vos ventes et la dépendance à la plateforme se fait ressentir."}
        </p>

        <h2 className="text-2xl font-bold text-primary-600 mt-8 mb-3">
          {isEn ? "When to choose WooCommerce (and when to look at Shopware)" : "Quand choisir WooCommerce (et quand regarder Shopware)"}
        </h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          {isEn
            ? "WooCommerce fits when you are thinking medium to long term: you want full ownership, commission-free margins and the freedom to grow without strings attached. It is the most cost-effective option as your revenue scales and the preferred choice of those who want a store that is genuinely theirs. For a different scenario — B2B ecommerce with complex catalogues, customer-specific pricing and large volumes — it is worth considering Shopware, a platform specifically oriented to demanding wholesale operations. The right platform always depends on the type of business."
            : "WooCommerce convient quand vous pensez à moyen et long terme : vous voulez une propriété totale, des marges sans commissions et la liberté de croître sans contraintes. C'est l'option la plus rentable à mesure que votre chiffre d'affaires augmente et la préférée de ceux qui veulent une boutique qui soit vraiment la leur. Pour un scénario différent — e-commerce B2B avec des catalogues complexes, des prix par client et de grands volumes — il vaut la peine d'évaluer Shopware, une plateforme spécifiquement orientée vers les opérations de vente en gros exigeantes. La bonne plateforme dépend toujours du type d'activité."}
        </p>

        <BlogBanner lang={lang} />

        <div className="bg-primary-600 text-white rounded-2xl p-8 my-8 text-center">
          <h2 className="text-2xl font-bold mb-3">
            {isEn ? "Your online store, without sales commissions" : "Votre boutique en ligne, sans commissions sur les ventes"}
          </h2>
          <p className="text-primary-200 mb-6">
            {isEn
              ? "We build your ecommerce on the platform that best suits your business, optimised to sell and to rank on Google from day one."
              : "Nous construisons votre e-commerce sur la plateforme qui convient le mieux à votre activité, optimisée pour vendre et pour se positionner sur Google dès le premier jour."}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href={`/${lang}/${isEn ? "online-store" : "boutique-en-ligne"}`}
              className="bg-accent-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-accent-600 transition-colors"
            >
              {isEn ? "View online store design" : "Voir conception boutique en ligne"}
            </Link>
            <Link
              href={`/${lang}/${isEn ? "seo-web-positioning" : "positionnement-seo"}`}
              className="border-2 border-white text-white px-6 py-3 rounded-full font-semibold hover:bg-white/10 transition-colors"
            >
              {isEn ? "SEO service" : "Service SEO"}
            </Link>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-primary-600 mt-8 mb-4">
          {isEn ? "Frequently asked questions about WooCommerce and Shopify" : "Questions fréquentes sur WooCommerce et Shopify"}
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

        <nav className="mt-12 pt-8 border-t border-gray-200">
          <Link href={`/${lang}/blog/`} className="text-accent-500 hover:text-accent-600 font-medium text-sm">
            {isEn ? "← Back to blog" : "← Retour au blog"}
          </Link>
        </nav>
      </div>
      <RelatedArticles currentSlug="woocommerce-vs-shopify" />
    </>
  );
}
