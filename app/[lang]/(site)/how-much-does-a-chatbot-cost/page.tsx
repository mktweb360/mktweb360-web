import { Breadcrumbs } from "@/components/Breadcrumbs";
import { BlogBanner } from "@/components/BlogBanner";
import { RelatedArticles } from "@/components/RelatedArticles";
import { alternatesFor } from "@/lib/i18n/routes";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const isEn = lang === "en";
  return {
    title: isEn
      ? "How Much Does a Business Chatbot Cost in 2026: A Guide to Real Prices"
      : "Combien coûte un chatbot pour entreprise en 2026 : guide des prix réels",
    description: isEn
      ? "Business chatbot prices range from free to thousands per month. A guide to real prices in 2026: what market leaders charge, what each tier includes and when the investment pays off."
      : "Les prix des chatbots pour entreprises vont de gratuit à des milliers par mois. Guide des prix réels en 2026 : ce que facturent les leaders du marché, ce qu'inclut chaque niveau et quand l'investissement est rentable.",
    alternates: alternatesFor(`/${lang}/how-much-does-a-chatbot-cost/`) ?? {
      canonical: `https://www.mktweb360.com/${lang}/how-much-does-a-chatbot-cost/`,
    },
    openGraph: {
      title: isEn
        ? "How Much Does a Business Chatbot Cost in 2026: A Guide to Real Prices | Mkt Web 360"
        : "Combien coûte un chatbot pour entreprise en 2026 : guide des prix réels | Mkt Web 360",
      description: isEn
        ? "Business chatbot prices range from free to thousands per month. A guide to real prices in 2026: what market leaders charge, what each tier includes and when the investment pays off."
        : "Les prix des chatbots pour entreprises vont de gratuit à des milliers par mois. Guide des prix réels en 2026 : ce que facturent les leaders du marché, ce qu'inclut chaque niveau et quand l'investissement est rentable.",
    },
  };
}

export default async function Page({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const isEn = lang === "en";

  const faqs = isEn
    ? [
        {
          q: "Are there free options worth considering?",
          a: "There are free plans (Tidio, Botpress, Crisp) useful for testing and for very low-volume businesses. For a chatbot that genuinely adds value — trained on your own content, available 24/7, with system integration — free plans are not enough.",
        },
        {
          q: "How long does the contract last?",
          a: "SaaS platforms are usually month-to-month or annual with a discount. Managed solutions through an agency typically have minimum commitments of 6–12 months because the setup and training have an upfront cost that cannot be recovered with very short contracts.",
        },
        {
          q: "Does the price rise if I have high traffic?",
          a: "It depends on the pricing model. Flat-rate models do not rise with traffic. Per-conversation or per-resolution models can rise significantly if volume increases.",
        },
        {
          q: "What is included in the monthly maintenance?",
          a: "In a managed solution, maintenance includes content updates, conversation monitoring to detect failures, response improvements based on data, technical support and compatibility with CMS updates.",
        },
      ]
    : [
        {
          q: "Existe-t-il des options gratuites qui valent la peine ?",
          a: "Il existe des plans gratuits (Tidio, Botpress, Crisp) utiles pour tester et pour les entreprises à très faible volume. Pour un chatbot qui apporte vraiment de la valeur — entraîné sur votre propre contenu, disponible 24h/24, avec intégration système — les plans gratuits ne suffisent pas.",
        },
        {
          q: "Quelle est la durée du contrat ?",
          a: "Les plateformes SaaS sont généralement au mois ou annuelles avec remise. Les solutions gérées par une agence ont généralement des engagements minimaux de 6 à 12 mois car la mise en place et l'entraînement ont un coût d'entrée qui ne peut pas être récupéré avec des contrats très courts.",
        },
        {
          q: "Le prix augmente-t-il si j'ai beaucoup de trafic ?",
          a: "Cela dépend du modèle tarifaire. Les modèles à tarif fixe n'augmentent pas avec le trafic. Les modèles par conversation ou par résolution peuvent augmenter significativement si le volume croît.",
        },
        {
          q: "Qu'est-ce qui est inclus dans la maintenance mensuelle ?",
          a: "Dans une solution gérée, la maintenance comprend les mises à jour de contenu, la surveillance des conversations pour détecter les défaillances, les améliorations des réponses basées sur les données, le support technique et la compatibilité avec les mises à jour du CMS.",
        },
      ];

  return (
    <>
      <div className="max-w-3xl mx-auto px-4 py-12">
        <Breadcrumbs
          crumbs={[
            { label: isEn ? "Home" : "Accueil", href: `/${lang}/` },
            { label: "Blog", href: `/${lang}/blog/` },
            { label: isEn ? "How much does a chatbot cost" : "Combien coûte un chatbot" },
          ]}
        />

        <p className="text-sm text-accent-500 font-semibold mb-2">
          {isEn ? "Chatbots" : "Chatbots"}
        </p>

        <h1 className="text-4xl font-bold text-primary-600 mb-4 leading-tight">
          {isEn
            ? "How Much Does a Business Chatbot Cost in 2026: A Guide to Real Prices"
            : "Combien coûte un chatbot pour entreprise en 2026 : guide des prix réels"}
        </h1>

        <p className="text-xl text-gray-500 mb-8 leading-relaxed">
          {isEn
            ? "Business chatbot prices range from free to thousands of pounds per month, and that broad range creates a lot of confusion. This guide reviews what market leaders charge in 2026, what each tier includes and when the investment pays off — as part of an AI-driven marketing strategy."
            : "Les prix des chatbots pour entreprises vont de gratuit à des milliers d'euros par mois, et cette large fourchette crée beaucoup de confusion. Ce guide passe en revue ce que facturent les leaders du marché en 2026, ce qu'inclut chaque niveau et quand l'investissement est rentable — dans le cadre d'une stratégie marketing basée sur l'IA."}
        </p>

        <p className="text-gray-600 mb-6 leading-relaxed">
          {isEn
            ? "Before requesting quotes it is worth understanding that there is no single price, but several billing models that follow different logic. Two chatbots with similar features can cost five times more or less depending on how the service is charged. So rather than looking for the lowest number, it is worth understanding what lies behind each tariff."
            : "Avant de demander des devis, il est utile de comprendre qu'il n'existe pas de prix unique, mais plusieurs modèles de facturation qui suivent des logiques différentes. Deux chatbots aux fonctionnalités similaires peuvent coûter cinq fois plus ou moins selon la manière dont le service est facturé. Plutôt que de chercher le chiffre le plus bas, il vaut mieux comprendre ce qui se cache derrière chaque tarif."}
        </p>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-primary-600 mb-4">
            {isEn
              ? "The pricing models that exist in the market"
              : "Les modèles tarifaires qui existent sur le marché"}
          </h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {isEn
              ? "In 2026 there are mainly three ways to charge for a chatbot. The monthly flat rate is the most predictable: you pay a fixed fee regardless of conversation volume. Pay-per-conversation or pay-per-resolution charges based on actual usage, so cost grows with traffic. And per-agent models charge based on the number of internal users managing the system."
              : "En 2026, il existe principalement trois façons de facturer un chatbot. Le forfait mensuel est le plus prévisible : vous payez un montant fixe indépendamment du volume de conversations. Le paiement par conversation ou par résolution facture en fonction de l'utilisation réelle, de sorte que le coût augmente avec le trafic. Et les modèles par agent facturent en fonction du nombre d'utilisateurs internes qui gèrent le système."}
          </p>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {isEn
              ? "Each model makes sense in a different context. The flat rate gives budgetary predictability to an SME with stable volume. Pay-per-result can be efficient if volume is low, but it shoots up when the chatbot starts working well and handles many more conversations. Understanding this upfront avoids billing surprises."
              : "Chaque modèle a du sens dans un contexte différent. Le tarif fixe offre une prévisibilité budgétaire à une PME avec un volume stable. Le paiement au résultat peut être efficace si le volume est faible, mais il s'envole quand le chatbot commence à bien fonctionner et traite beaucoup plus de conversations. Comprendre cela dès le départ évite les mauvaises surprises sur la facture."}
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-primary-600 mb-4">
            {isEn
              ? "What the main market players charge"
              : "Ce que facturent les principaux acteurs du marché"}
          </h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {isEn
              ? "As an indicative reference, here are some public prices from the best-known platforms in 2026. Tidio starts from around €29/month with tiered plans. Intercom charges per resolution, at around $0.99 per resolved outcome. HubSpot charges approximately €0.50 per resolved conversation within its ecosystem."
              : "À titre indicatif, voici quelques prix publics des plateformes les plus connues en 2026. Tidio commence à partir d'environ 29 €/mois avec des plans échelonnés. Intercom facture par résolution, à environ 0,99 $ par outcome résolu. HubSpot facture environ 0,50 € par conversation résolue au sein de son écosystème."}
          </p>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {isEn
              ? "Zendesk sits at around €55 per agent per month, a model designed for support teams. Botpress, aimed at building more custom bots, starts from around €89/month. The comparison is revealing: what in one model is a comfortable flat fee, in another depends directly on usage volume."
              : "Zendesk se situe autour de 55 € par agent et par mois, un modèle conçu pour les équipes de support. Botpress, orienté vers la construction de bots plus personnalisés, commence à partir d'environ 89 €/mois. La comparaison est révélatrice : ce qui dans un modèle est un forfait confortable, dans un autre dépend directement du volume d'utilisation."}
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-primary-600 mb-4">
            {isEn
              ? "What determines the real price of a chatbot"
              : "Ce qui détermine le prix réel d'un chatbot"}
          </h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {isEn
              ? "The platform price is only part of the picture. The real cost depends on training with your own content, integrations with your systems (CRM, calendar, catalogue), the level of response customisation and ongoing maintenance. A cheap, untrained chatbot barely adds value; a well-configured one requires setup work."
              : "Le prix de la plateforme n'est qu'une partie du tableau. Le coût réel dépend de l'entraînement sur votre propre contenu, des intégrations avec vos systèmes (CRM, calendrier, catalogue), du niveau de personnalisation des réponses et de la maintenance continue. Un chatbot bon marché non entraîné apporte à peine de la valeur ; un bien configuré exige un travail de mise en place."}
          </p>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {isEn
              ? "Language, channels and the degree of automation you want to achieve also influence price. Before comparing prices it is worth knowing what you actually need — and there are many tools to choose from, so choosing well means knowing which AI tools genuinely deliver results."
              : "La langue, les canaux et le degré d'automatisation que vous souhaitez atteindre influencent également le prix. Avant de comparer les prix, il vaut la peine de savoir ce dont vous avez réellement besoin — et il y a beaucoup d'outils parmi lesquels choisir, donc bien choisir signifie savoir quels outils IA donnent vraiment des résultats."}
          </p>
        </section>

        <BlogBanner lang={lang} />

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-primary-600 mb-4">
            {isEn
              ? "Pricing model for a managed solution"
              : "Modèle tarifaire pour une solution gérée"}
          </h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {isEn
              ? "As opposed to a self-service SaaS solution, a managed solution through an agency includes setup, training, integration and maintenance within a monthly fee. As a reference, a basic plan sits between €149 and €199/month, a mid-range plan between €199 and €249/month, and an advanced plan between €249 and €299/month."
              : "Contrairement à une solution SaaS en libre-service, une solution gérée par une agence inclut la mise en place, l'entraînement, l'intégration et la maintenance dans un abonnement mensuel. À titre de référence, un plan basique se situe entre 149 et 199 €/mois, un plan intermédiaire entre 199 et 249 €/mois, et un plan avancé entre 249 et 299 €/mois."}
          </p>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {isEn
              ? "The difference between tiers is usually not the number of conversations but the depth of integrations, the degree of customisation and the level of support. In this model you pay for a complete service, not just access to a tool you then have to configure yourself."
              : "La différence entre les niveaux ne réside généralement pas dans le nombre de conversations, mais dans la profondeur des intégrations, le degré de personnalisation et le niveau d'accompagnement. Dans ce modèle, vous payez pour un service complet, pas seulement pour accéder à un outil que vous devez ensuite configurer vous-même."}
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-primary-600 mb-4">
            {isEn
              ? "When a chatbot is profitable"
              : "Quand un chatbot est rentable"}
          </h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {isEn
              ? "Profitability comes from comparing the monthly cost with the time and opportunities the chatbot frees up. An illustrative example: a bot at €199/month that automates repetitive enquiries and captures leads outside office hours can represent a net saving of around €700/month, counting the team time that stops being spent on manual tasks."
              : "La rentabilité s'apprécie en comparant le coût mensuel avec le temps et les opportunités que le chatbot libère. Un exemple illustratif : un bot à 199 €/mois qui automatise les demandes répétitives et capte des leads en dehors des heures de bureau peut représenter une économie nette d'environ 700 €/mois, en comptant le temps d'équipe qui n'est plus consacré aux tâches manuelles."}
          </p>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {isEn
              ? "In that scenario, the investment pays for itself within a few weeks. The key is that the chatbot handles a sufficient volume of genuinely valuable conversations: if the business receives many repetitive enquiries, the return is clear; if volume is marginal, a free plan may be enough to start."
              : "Dans ce scénario, l'investissement s'autofinance en quelques semaines. L'essentiel est que le chatbot traite un volume suffisant de conversations à valeur réelle : si l'entreprise reçoit beaucoup de demandes répétitives, le retour est évident ; si le volume est marginal, un plan gratuit peut suffire pour commencer."}
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-primary-600 mb-4">
            {isEn ? "Frequently asked questions" : "Questions fréquentes"}
          </h2>
          <div className="space-y-3">
            {faqs.map((faq) => (
              <details key={faq.q} className="border border-gray-200 rounded-xl overflow-hidden group">
                <summary className="px-6 py-4 cursor-pointer font-semibold text-primary-700 hover:bg-primary-50 list-none flex justify-between items-center">
                  {faq.q}
                  <span className="text-accent-500 group-open:rotate-180 transition-transform">▾</span>
                </summary>
                <div className="px-6 py-4 text-gray-600 border-t border-gray-100">{faq.a}</div>
              </details>
            ))}
          </div>
        </section>

        <nav className="mt-12 pt-8 border-t border-gray-200">
          <a href={`/${lang}/blog/`} className="text-accent-500 hover:text-accent-600 font-medium text-sm">
            {isEn ? "← Back to blog" : "← Retour au blog"}
          </a>
        </nav>
      </div>
      <RelatedArticles currentSlug="how-much-does-a-chatbot-cost" />
    </>
  );
}
