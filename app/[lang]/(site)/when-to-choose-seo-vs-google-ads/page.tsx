import { Breadcrumbs } from "@/components/Breadcrumbs";
import { BlogBanner } from "@/components/BlogBanner";
import { alternatesFor } from "@/lib/i18n/routes";
import Link from "next/link";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const isEn = lang === "en";
  return {
    title: isEn
      ? "When to Choose SEO vs Google Ads: A Practical Decision Guide"
      : "Quand choisir le SEO plutôt que Google Ads : guide de décision pratique",
    description: isEn
      ? "How to decide between SEO and Google Ads based on your business, budget, urgency and time horizon. With real examples and a practical decision matrix."
      : "Comment décider entre SEO et Google Ads selon votre entreprise, budget, urgence et horizon temporel. Avec des exemples réels et une matrice de décision pratique.",
    alternates: alternatesFor(`/${lang}/when-to-choose-seo-vs-google-ads/`) ?? {
      canonical: `https://www.mktweb360.com/${lang}/when-to-choose-seo-vs-google-ads/`,
    },
    openGraph: {
      title: isEn
        ? "When to Choose SEO vs Google Ads: A Practical Decision Guide | Mkt Web 360"
        : "Quand choisir le SEO plutôt que Google Ads : guide de décision pratique | Mkt Web 360",
      description: isEn
        ? "How to decide between SEO and Google Ads based on your business, budget, urgency and time horizon. With real examples and a practical decision matrix."
        : "Comment décider entre SEO et Google Ads selon votre entreprise, budget, urgence et horizon temporel. Avec des exemples réels et une matrice de décision pratique.",
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
            {
              label: isEn
                ? "SEO vs Google Ads: when to choose each"
                : "SEO vs Google Ads : quand choisir l'un ou l'autre",
            },
          ]}
        />

        <p className="text-sm text-accent-500 font-semibold mb-2">
          {isEn ? "SEO & SEM" : "SEO & SEM"}
        </p>
        <h1 className="text-4xl font-bold text-primary-600 mb-4 leading-tight">
          {isEn
            ? "When to choose SEO and when to choose Google Ads: a guide to making the right decision for your business"
            : "Quand choisir le SEO et quand choisir Google Ads : guide pour prendre la bonne décision selon votre entreprise"}
        </h1>
        <p className="text-xl text-gray-500 mb-8 leading-relaxed">
          {isEn
            ? "There is no universal answer to 'SEO or Google Ads?'. The right answer depends on your business, your urgency, your budget and your objectives. This guide gives you a clear framework for deciding — without anyone selling you what they want to sell."
            : "Il n'existe pas de réponse universelle à 'SEO ou Google Ads ?'. La bonne réponse dépend de votre entreprise, de votre urgence, de votre budget et de vos objectifs. Ce guide vous donne un cadre clair pour décider — sans que personne ne vous vende ce qu'il veut vendre."}
        </p>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-primary-600 mb-4">
            {isEn
              ? "The fundamental differences between SEO and Google Ads"
              : "Les différences fondamentales entre SEO et Google Ads"}
          </h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {isEn
              ? "SEO and Google Ads are two ways of appearing on Google to people who are searching for what you offer, but with radically different characteristics in terms of time, cost, risk and long-term return."
              : "Le SEO et Google Ads sont deux façons d'apparaître sur Google devant des personnes qui cherchent ce que vous proposez, mais avec des caractéristiques radicalement différentes en termes de temps, coût, risque et retour à long terme."}
          </p>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {isEn
              ? "SEO builds a digital asset: once your content or pages achieve good positions, they continue generating traffic without additional per-click cost. It takes time to see results (typically 3–12 months), but the return accumulates. Google Ads, on the other hand, is a traffic rental: you pay for every click, results are immediate, but the moment you stop investing, the traffic disappears."
              : "Le SEO construit un actif numérique : une fois que votre contenu ou vos pages obtiennent de bonnes positions, ils continuent de générer du trafic sans coût supplémentaire par clic. Il faut du temps pour voir des résultats (généralement 3 à 12 mois), mais le retour s'accumule. Google Ads, en revanche, est une location de trafic : vous payez pour chaque clic, les résultats sont immédiats, mais dès que vous arrêtez d'investir, le trafic disparaît."}
          </p>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {isEn
              ? "This structural difference — SEO as building an asset vs Google Ads as renting visibility — is the most important criterion for choosing between one and the other according to each business's circumstances."
              : "Cette différence structurelle — le SEO comme construction d'un actif vs Google Ads comme location de visibilité — est le critère le plus important pour choisir entre l'un et l'autre selon les circonstances de chaque entreprise."}
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-primary-600 mb-4">
            {isEn
              ? "When Google Ads is clearly the best option"
              : "Quand Google Ads est clairement la meilleure option"}
          </h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            <strong>
              {isEn
                ? "When you need urgent results:"
                : "Quand vous avez besoin de résultats urgents :"}
            </strong>{" "}
            {isEn
              ? "If you have just launched a business, have an upcoming event that needs to generate sales, or are in peak season and need more traffic now, Google Ads is the only option that can generate results within days. SEO cannot compete on speed."
              : "Si vous venez de lancer une entreprise, avez un événement imminent qui doit générer des ventes, ou êtes en haute saison et avez besoin de plus de trafic maintenant, Google Ads est la seule option qui peut générer des résultats en quelques jours. Le SEO ne peut pas rivaliser en termes de vitesse."}
          </p>
          <p className="text-gray-600 mb-4 leading-relaxed">
            <strong>
              {isEn
                ? "When the product or service has seasonal or one-time demand:"
                : "Quand le produit ou service a une demande ponctuelle ou saisonnière :"}
            </strong>{" "}
            {isEn
              ? "If you sell swimwear, Christmas gifts, back-to-school supplies, or anything with very time-concentrated demand, Google Ads lets you be on the radar exactly when demand exists and switch off spending when it does not."
              : "Si vous vendez des maillots de bain, des cadeaux de Noël, des fournitures scolaires, ou quoi que ce soit avec une demande très concentrée dans le temps, Google Ads vous permet d'être sur le radar exactement quand la demande existe et de désactiver les dépenses quand ce n'est pas le cas."}
          </p>
          <p className="text-gray-600 mb-4 leading-relaxed">
            <strong>
              {isEn
                ? "When you want to test a new service or market:"
                : "Quand vous voulez tester un nouveau service ou marché :"}
            </strong>{" "}
            {isEn
              ? "Before investing months in SEO for a new service for which you do not know whether there will be demand, Google Ads lets you validate demand in weeks. If the search volume exists and conversions happen, then it is worth investing in SEO for that term."
              : "Avant d'investir des mois en SEO pour un nouveau service dont vous ne savez pas s'il y aura de la demande, Google Ads vous permet de valider la demande en quelques semaines. Si le volume de recherche existe et que les conversions se produisent, alors il vaut la peine d'investir en SEO pour ce terme."}
          </p>
          <p className="text-gray-600 mb-4 leading-relaxed">
            <strong>
              {isEn
                ? "When the local market has very little organic volume:"
                : "Quand le marché local a très peu de volume organique :"}
            </strong>{" "}
            {isEn
              ? "In small cities or for very specialised services, the monthly search volume may be so low that SEO never generates enough traffic to justify the investment. In these cases, Google Ads with precise geographic targeting may be more efficient."
              : "Dans les petites villes ou pour des services très spécialisés, le volume de recherche mensuel peut être si faible que le SEO ne génère jamais suffisamment de trafic pour justifier l'investissement. Dans ces cas, Google Ads avec un ciblage géographique précis peut être plus efficace."}
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-primary-600 mb-4">
            {isEn
              ? "When SEO is clearly the best investment"
              : "Quand le SEO est clairement le meilleur investissement"}
          </h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            <strong>
              {isEn
                ? "When you have a low monthly advertising budget:"
                : "Quand vous avez un faible budget mensuel pour la publicité :"}
            </strong>{" "}
            {isEn
              ? "If you can only invest £200–400 per month in digital marketing, Google Ads in competitive markets will generate very few clicks for that budget. SEO, with the same monthly investment applied to web optimisation and content, can generate much higher traffic at 12 months."
              : "Si vous ne pouvez investir que 200 à 400 € par mois en marketing digital, Google Ads dans des marchés concurrentiels génèrera très peu de clics pour ce budget. Le SEO, avec le même investissement mensuel appliqué à l'optimisation du site et du contenu, peut générer un trafic bien plus important à 12 mois."}
          </p>
          <p className="text-gray-600 mb-4 leading-relaxed">
            <strong>
              {isEn
                ? "When your business has a long lifecycle:"
                : "Quand votre entreprise a un cycle de vie long :"}
            </strong>{" "}
            {isEn
              ? "If you have been in the sector for years and plan to continue, SEO builds an asset that appreciates over time. A business that has invested in SEO for 3 years has a level of organic visibility that a new competitor would take years to reach, even with large budgets."
              : "Si vous êtes dans le secteur depuis des années et avez des plans de continuer, le SEO construit un actif qui s'apprécie dans le temps. Une entreprise qui a investi en SEO pendant 3 ans a un niveau de visibilité organique qu'un concurrent nouveau mettrait des années à atteindre, même avec de grands budgets."}
          </p>
          <p className="text-gray-600 mb-4 leading-relaxed">
            <strong>
              {isEn
                ? "When informational content can attract customers in early stages of the buying process:"
                : "Quand le contenu informatif peut attirer des clients en phase précoce du processus d'achat :"}
            </strong>{" "}
            {isEn
              ? "For services where the buying decision has a long process (home renovations, complex legal services, consultancies), SEO with informational content allows you to reach the customer before they are comparing providers. Whoever educated the customer is more likely to convert them."
              : "Pour les services où la décision d'achat a un processus long (rénovations domiciliaires, services juridiques complexes, consultance), le SEO avec du contenu informatif permet d'atteindre le client avant qu'il ne compare les prestataires. Celui qui a éduqué le client a plus de chances de le convertir."}
          </p>
          <p className="text-gray-600 mb-4 leading-relaxed">
            <strong>
              {isEn
                ? "When CPCs are very high:"
                : "Quand les CPC sont très élevés :"}
            </strong>{" "}
            {isEn
              ? "In sectors with average CPC of £10–20 (lawyers, cosmetic surgery, financial services), advertising may only be profitable with very high conversion rates and high average transaction values. SEO, with the same monthly cost as a small Ads campaign, can generate more qualified traffic at 12 months."
              : "Dans des secteurs avec un CPC moyen de 10 à 20 € (avocats, chirurgie esthétique, services financiers), la publicité peut n'être rentable qu'avec des taux de conversion très élevés et des tickets moyens élevés. Le SEO, avec le même coût mensuel qu'une petite campagne Ads, peut générer plus de trafic qualifié à 12 mois."}
          </p>
        </section>

        <BlogBanner lang={lang} />

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-primary-600 mb-4">
            {isEn
              ? "The combined strategy: when to use both at the same time"
              : "La stratégie combinée : quand utiliser les deux en même temps"}
          </h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {isEn
              ? "For many businesses, the optimal answer is not to choose between SEO or Google Ads, but to combine them strategically according to the stage of the business and the type of keyword."
              : "Pour de nombreuses entreprises, la réponse optimale n'est pas de choisir entre SEO ou Google Ads, mais de les combiner stratégiquement selon le moment de l'entreprise et le type de mot-clé."}
          </p>
          <p className="text-gray-600 mb-4 leading-relaxed">
            <strong>
              {isEn
                ? "During the first 6–12 months:"
                : "Pendant les 6 à 12 premiers mois :"}
            </strong>{" "}
            {isEn
              ? "Google Ads generates immediate results while SEO matures. Ads complements the keywords for which you are not yet ranking organically. Once SEO achieves solid positions for a term, you can reduce or eliminate Ads spend for that keyword."
              : "Google Ads génère des résultats immédiats pendant que le SEO mûrit. Ads complète les mots-clés pour lesquels vous ne vous positionnez pas encore organiquement. Une fois que le SEO atteint des positions solides pour un terme, vous pouvez réduire ou éliminer les dépenses Ads pour ce mot-clé."}
          </p>
          <p className="text-gray-600 mb-4 leading-relaxed">
            <strong>
              {isEn
                ? "Ads for data, SEO for execution:"
                : "Ads pour les données, SEO pour l'exécution :"}
            </strong>{" "}
            {isEn
              ? "A 2–3 month Google Ads campaign tells you which keywords truly convert for your business. That data is priceless for deciding which content to create and which pages to optimise for SEO. Using Ads as a research tool before committing to a long SEO effort is a rational approach."
              : "Une campagne Google Ads de 2 à 3 mois vous indique quels mots-clés convertissent vraiment pour votre entreprise. Ces données sont précieuses pour décider quel contenu créer et quelles pages optimiser pour le SEO. Utiliser Ads comme outil de recherche avant de s'engager dans un effort SEO long terme est une approche rationnelle."}
          </p>
          <p className="text-gray-600 mb-4 leading-relaxed">
            <strong>
              {isEn
                ? "Ads for peak seasons, SEO for the rest of the year:"
                : "Ads pour les saisons de pointe, SEO pour le reste de l'année :"}
            </strong>{" "}
            {isEn
              ? "A business with seasonality can use Ads during demand peaks (when each click has greater value) and rely on SEO the rest of the year to maintain a baseline flow of customers."
              : "Une entreprise avec de la saisonnalité peut utiliser Ads lors des pics de demande (quand chaque clic a une plus grande valeur) et se reposer sur le SEO le reste de l'année pour maintenir un flux de base de clients."}
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-primary-600 mb-4">
            {isEn
              ? "Decision matrix: which to choose according to your circumstances"
              : "Matrice de décision : lequel choisir selon votre situation"}
          </h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {isEn
              ? "To help you decide clearly, here is a practical guide based on the most common characteristics of businesses facing this decision."
              : "Pour vous aider à décider clairement, voici un guide pratique basé sur les caractéristiques les plus courantes des entreprises qui se posent cette décision."}
          </p>
          <p className="text-gray-600 mb-4 leading-relaxed">
            <strong>
              {isEn
                ? "New business, urgent need for customers, budget of £500/month:"
                : "Nouvelle entreprise, besoin urgent de clients, budget de 500 €/mois :"}
            </strong>{" "}
            {isEn
              ? "Google Ads first. Use the advertising period to validate which keywords convert best and start investing in SEO in parallel to build the long-term asset."
              : "Google Ads en premier. Utilisez la période publicitaire pour valider quels mots-clés convertissent le mieux et commencez à investir en SEO en parallèle pour construire l'actif à long terme."}
          </p>
          <p className="text-gray-600 mb-4 leading-relaxed">
            <strong>
              {isEn
                ? "Established business, budget of £800/month, 2-year horizon:"
                : "Entreprise établie, budget de 800 €/mois, horizon de 2 ans :"}
            </strong>{" "}
            {isEn
              ? "SEO as main investment. Use Google Ads selectively for peak seasons or to test new services."
              : "SEO comme investissement principal. Utilisez Google Ads de façon ponctuelle pour les saisons de pointe ou pour tester de nouveaux services."}
          </p>
          <p className="text-gray-600 mb-4 leading-relaxed">
            <strong>
              {isEn
                ? "E-commerce with peak season (Black Friday, Christmas):"
                : "E-commerce avec haute saison (Black Friday, Noël) :"}
            </strong>{" "}
            {isEn
              ? "Combine. SEO for annual organic traffic, Google Shopping and Ads to multiply visibility during peak season."
              : "Combinez. SEO pour le trafic organique annuel, Google Shopping et Ads pour multiplier la visibilité en haute saison."}
          </p>
          <p className="text-gray-600 mb-4 leading-relaxed">
            <strong>
              {isEn
                ? "Highly specialised service with few potential customers in the area:"
                : "Service très spécialisé avec peu de clients potentiels dans la zone :"}
            </strong>{" "}
            {isEn
              ? "Google Ads with precise targeting. The volume may be too low to justify SEO investment."
              : "Google Ads avec un ciblage précis. Le volume peut être trop faible pour justifier l'investissement en SEO."}
          </p>
        </section>

        <div className="bg-primary-600 text-white rounded-2xl p-8 mb-10">
          <h2 className="text-2xl font-bold mb-4">
            {isEn
              ? "Need help with your digital marketing?"
              : "Besoin d'aide avec votre marketing digital ?"}
          </h2>
          <p className="text-primary-200 mb-6">
            {isEn
              ? "Tell us about your project and we will respond within 24 hours."
              : "Parlez-nous de votre projet et nous vous répondrons dans les 24 heures."}
          </p>
          <Link
            href={`/${lang}/contact/`}
            className="inline-block bg-accent-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-accent-600 transition-colors"
          >
            {isEn ? "Contact us" : "Nous contacter"}
          </Link>
        </div>

        <nav className="mt-12 pt-8 border-t border-gray-200">
          <Link
            href={`/${lang}/blog/`}
            className="text-accent-500 hover:text-accent-600 font-medium text-sm"
          >
            {isEn ? "← Back to blog" : "← Retour au blog"}
          </Link>
        </nav>
      </div>
    </>
  );
}
