import { Breadcrumbs } from "@/components/Breadcrumbs";
import { BlogBanner } from "@/components/BlogBanner";
import { alternatesFor } from "@/lib/i18n/routes";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const isEn = lang === "en";
  return {
    title: isEn
      ? "How Much Does a Digital Marketing Agency Cost in Spain in 2026?"
      : "Combien Coûte une Agence de Marketing Digital en Espagne en 2026 ?",
    description: isEn
      ? "Real prices for digital marketing agencies in Spain 2026: SEO, Google Ads and social media management. What each price range includes and how to choose without making mistakes."
      : "Prix réels des agences de marketing digital en Espagne 2026 : SEO, Google Ads et gestion des réseaux sociaux. Ce qu'inclut chaque gamme de prix et comment ne pas se tromper dans le choix.",
    alternates: alternatesFor(`/${lang}/cost-digital-marketing-agency-spain-2026/`) ?? {
      canonical: `https://www.mktweb360.com/${lang}/cost-digital-marketing-agency-spain-2026/`,
    },
    openGraph: {
      title: isEn
        ? "How Much Does a Digital Marketing Agency Cost in Spain in 2026? | Mkt Web 360"
        : "Combien Coûte une Agence de Marketing Digital en Espagne en 2026 ? | Mkt Web 360",
      description: isEn
        ? "Real prices per service, what each range includes and how not to make mistakes when choosing an agency in Spain in 2026."
        : "Prix réels par service, ce qu'inclut chaque gamme et comment ne pas se tromper en choisissant une agence en Espagne en 2026.",
    },
  };
}

const FAQS_EN = [
  {
    q: "What is the average cost of a digital marketing agency in Spain?",
    a: "It depends on the service and the scope. For an SME, the typical range is €300–€1,500 per month per service. A combined plan of SEO, Google Ads management and social media usually sits between €800 and €2,500 per month depending on objectives and sector competition.",
  },
  {
    q: "Does the price include advertising spend?",
    a: "No, and this is the most common source of confusion. The management fee for Google Ads (what the agency charges for managing the campaigns) is always separate from the advertising spend (what you pay Google for the clicks). If an agency does not clearly separate these two concepts for you, treat that as a red flag.",
  },
  {
    q: "Why is there such a price difference between agencies?",
    a: "Because of the level of the team, the scope of the work and the business model. An agency with senior profiles, its own strategy and real reporting costs more than a low-cost service that automates without criteria. The difference is not in the price — it is in what you receive for it.",
  },
  {
    q: "Is it worth hiring an agency for an SME?",
    a: "Yes, when you already have a minimum foundation — a website that converts and a clear value proposition — and you need to scale client acquisition with purpose. Without that foundation, any marketing investment amplifies problems. That is why a good agency starts by diagnosing before selling services.",
  },
  {
    q: "How do I know if I am paying too much?",
    a: "Check whether you can measure the return. According to Esconzeta (2026), 68% of SMEs with an agency are unable to calculate the ROI of their investment. If you do not know what your spend is generating, the problem is not the price — it is the lack of measurement and transparency.",
  },
];

const FAQS_FR = [
  {
    q: "Quel est le coût moyen d'une agence de marketing digital en Espagne ?",
    a: "Cela dépend du service et de la portée. Pour une PME, la fourchette habituelle est de 300 à 1 500 €/mois par service. Un plan combiné de SEO, gestion de Google Ads et réseaux sociaux se situe généralement entre 800 et 2 500 €/mois selon les objectifs et la concurrence du secteur.",
  },
  {
    q: "Le prix inclut-il l'investissement publicitaire ?",
    a: "Non, et c'est la confusion la plus fréquente. Les honoraires de gestion de Google Ads (ce que l'agence facture pour gérer les campagnes) sont toujours indépendants de l'investissement publicitaire (ce que vous payez à Google pour les clics). Si une agence ne vous sépare pas clairement ces deux concepts, méfiez-vous.",
  },
  {
    q: "Pourquoi y a-t-il tant de différences de prix entre agences ?",
    a: "À cause du niveau de l'équipe, de la portée du travail et du modèle économique. Une agence avec des profils seniors, une stratégie propre et des reporting réels coûte plus qu'un service low-cost qui automatise sans critère. La différence n'est pas dans le prix — c'est dans ce que vous recevez pour lui.",
  },
  {
    q: "Vaut-il la peine d'engager une agence pour une PME ?",
    a: "Oui, quand vous avez déjà une base minimale — un site web qui convertit et une proposition de valeur claire — et que vous avez besoin de faire croître l'acquisition de clients avec méthode. Sans cette base, tout investissement marketing amplifie les problèmes. C'est pourquoi une bonne agence commence par diagnostiquer avant de vendre des services.",
  },
  {
    q: "Comment savoir si je paie trop cher ?",
    a: "Vérifiez si vous pouvez mesurer le retour. Selon Esconzeta (2026), 68 % des PME avec une agence ne sont pas capables de calculer le ROI de leur investissement. Si vous ne savez pas ce que génère ce que vous payez, le problème n'est pas le prix — c'est le manque de mesure et de transparence.",
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
            {
              label: isEn
                ? "Cost of a Digital Marketing Agency Spain 2026"
                : "Coût d'une Agence Marketing Digital Espagne 2026",
            },
          ]}
        />
        <p className="text-sm text-accent-500 font-semibold mb-2">
          {isEn ? "Digital Marketing" : "Marketing Digital"}
        </p>
        <h1 className="text-4xl font-bold text-primary-600 mb-4 leading-tight">
          {isEn
            ? "How much does a digital marketing agency cost in Spain in 2026?"
            : "Combien coûte une agence de marketing digital en Espagne en 2026 ?"}
        </h1>
        <p className="text-xl text-gray-500 mb-8 leading-relaxed">
          {isEn
            ? "It is the question every SME asks before hiring, and the one that receives the most vague answers. Here are real prices from the Spanish market in 2026, what each price range includes and how to spot a budget that does not suit you."
            : "C'est la question que toute PME se pose avant d'engager une agence, et celle qui reçoit le plus de réponses vagues. Voici les prix réels du marché espagnol en 2026, ce qu'inclut chaque gamme de prix et comment détecter un budget qui ne vous convient pas."}
        </p>

        <div className="text-gray-700 space-y-6 leading-relaxed">
          <p>
            {isEn
              ? "Asking three agencies for a quote and receiving figures ranging from €300 to €3,000 per month for what seems like 'the same thing' is disconcerting. The reality is that it is rarely the same thing: behind each price there is a different scope, team level and working model. Understanding what you are paying for at each price range is the only way to choose correctly."
              : "Demander un devis à trois agences et recevoir des chiffres allant de 300 à 3 000 € par mois pour ce qui semble être « la même chose » déconcerte n'importe qui. La réalité est que ce n'est presque jamais la même chose : derrière chaque prix il y a une portée, un niveau d'équipe et un modèle de travail différents. Comprendre ce que vous payez à chaque gamme est la seule façon de bien choisir."}
          </p>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-primary-600 mb-4">
              {isEn
                ? "Why there is such a wide price range between agencies"
                : "Pourquoi il y a une telle différence de prix entre les agences"}
            </h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              {isEn
                ? "The price range is not arbitrary — it responds to three variables: who does the work, how much work is behind it and how the agency makes money. A service with senior profiles, personalised strategy and real reporting costs more than one that applies templates and automates without criteria. A low price almost never represents a bargain: it usually means fewer hours, less seniority or less accountability for results."
                : "La fourchette de prix ne répond pas au caprice, mais à trois variables : qui fait le travail, combien de travail y a-t-il derrière et comment l'agence gagne de l'argent. Un service avec des profils seniors, une stratégie personnalisée et des reporting réels coûte plus qu'un qui applique des modèles et automatise sans critère. Le prix bas n'est presque jamais une bonne affaire : il signifie généralement moins d'heures, moins d'ancienneté ou moins de responsabilité sur les résultats."}
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-primary-600 mb-4">
              {isEn
                ? "Real prices per service in Spain in 2026"
                : "Prix réels par service en Espagne en 2026"}
            </h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              {isEn
                ? "These are the typical ranges for an SME, per service and per month. They serve as a reference point to situate any budget you receive:"
                : "Voici les fourchettes habituelles pour une PME, par service et par mois. Elles servent de référence pour situer tout budget que vous recevez :"}
            </p>
            <ul className="space-y-2 text-gray-600">
              {[
                isEn
                  ? "Local SEO: between €300 and €600 per month"
                  : "SEO local : entre 300 € et 600 €/mois",
                isEn
                  ? "Growth SEO (national or competitive): between €600 and €1,500 per month"
                  : "SEO de croissance (national ou concurrentiel) : entre 600 € et 1 500 €/mois",
                isEn
                  ? "Google Ads management: between €300 and €1,000 per month (not including advertising spend)"
                  : "Gestion Google Ads : entre 300 € et 1 000 €/mois (sans compter l'investissement publicitaire)",
                isEn
                  ? "Social media management: from €300 to €800 per month on basic plans"
                  : "Gestion des réseaux sociaux : de 300 € à 800 €/mois sur les plans basiques",
                isEn
                  ? "Professional web design: one-off project, not a monthly fee, according to scope"
                  : "Design web professionnel : projet ponctuel, pas de mensualité, selon la portée",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm py-1">
                  <span className="text-accent-500 font-bold shrink-0 mt-0.5">▸</span>
                  {item}
                </li>
              ))}
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-primary-600 mb-4">
              {isEn
                ? "Management fee and advertising spend: they are not the same thing"
                : "Honoraires de gestion et investissement publicitaire : ce n'est pas la même chose"}
            </h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              {isEn
                ? "The most common confusion when comparing agency budgets is mixing up the management fee with the advertising spend. The management fee is what the agency charges for its work: strategy, campaign setup, ongoing optimisation, reporting. The advertising spend is what you pay to Google, Meta or LinkedIn directly for your ads to be shown."
                : "La confusion la plus courante lors de la comparaison de budgets d'agences est de mélanger les honoraires de gestion avec l'investissement publicitaire. Les honoraires de gestion sont ce que l'agence facture pour son travail : stratégie, configuration des campagnes, optimisation continue, reporting. L'investissement publicitaire est ce que vous payez directement à Google, Meta ou LinkedIn pour que vos annonces soient diffusées."}
            </p>
            <p className="text-gray-600 mb-4 leading-relaxed">
              {isEn
                ? "An agency quoting you €500/month for Google Ads management is quoting its fee. The advertising budget — what you will actually spend to get clicks — is additional. Typically, for a local SME, the minimum recommended advertising spend is €200–500/month. If a budget does not make this distinction clearly, ask."
                : "Une agence qui vous cite 500 €/mois pour la gestion de Google Ads cite ses honoraires. Le budget publicitaire — ce que vous dépenserez effectivement pour obtenir des clics — est en supplément. En général, pour une PME locale, l'investissement publicitaire minimum recommandé est de 200 à 500 €/mois. Si un budget ne fait pas clairement cette distinction, demandez."}
            </p>
          </section>

          <div className="bg-primary-50 rounded-xl p-6 border border-primary-100">
            <p className="font-semibold text-primary-700 mb-2">
              {isEn
                ? "Want to know what investment makes sense for your business?"
                : "Vous voulez savoir quel investissement a du sens pour votre entreprise ?"}
            </p>
            <p className="text-gray-600 text-sm mb-4">
              {isEn
                ? "We analyse your situation and propose a plan tailored to your real objectives — no rigid packages that do not fit."
                : "Nous analysons votre situation et vous proposons un plan adapté à vos objectifs réels — pas de forfaits rigides qui ne correspondent pas."}
            </p>
            <a
              href={`/${lang}/contact/`}
              className="inline-block bg-accent-500 text-white px-6 py-2.5 rounded-full font-semibold text-sm hover:bg-accent-600 transition-colors"
            >
              {isEn ? "Request a personalised proposal" : "Demander une proposition personnalisée"}
            </a>
          </div>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-primary-600 mb-4">
              {isEn ? "When it makes sense to hire an agency" : "Quand il est judicieux d'engager une agence"}
            </h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              {isEn
                ? "Hiring an agency makes sense when you have a minimum foundation in place — a website that converts, a clear value proposition and defined ideal client — and you need to scale client acquisition with strategy and expertise. Without that foundation, any investment in marketing amplifies existing problems rather than solving them."
                : "Engager une agence a du sens quand vous avez une base minimale en place — un site web qui convertit, une proposition de valeur claire et un client idéal défini — et que vous avez besoin de faire croître l'acquisition de clients avec stratégie et expertise. Sans cette base, tout investissement marketing amplifie les problèmes existants plutôt que de les résoudre."}
            </p>
            <p className="text-gray-600 mb-4 leading-relaxed">
              {isEn
                ? "For most SMEs, the right moment to hire an agency is not 'as soon as possible' but 'when you know what you want to achieve and you have something worth promoting'. A good agency will tell you this upfront — and if it does not, that itself is useful information."
                : "Pour la plupart des PME, le bon moment pour engager une agence n'est pas « le plus tôt possible » mais « quand vous savez ce que vous voulez atteindre et que vous avez quelque chose qui vaut la peine d'être promu ». Une bonne agence vous dira cela dès le début — et si elle ne le fait pas, c'est en soi une information utile."}
            </p>
          </section>

          <BlogBanner lang={lang} />

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-primary-600 mb-4">
              {isEn ? "Red flags in a budget proposal" : "Signaux d'alarme dans un devis"}
            </h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              {isEn
                ? "Not all agency budgets are created equal. These are the warning signs that should make you think twice before signing:"
                : "Tous les devis d'agences ne se valent pas. Voici les signaux d'alarme qui doivent vous faire réfléchir à deux fois avant de signer :"}
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-600">
              <li>
                {isEn
                  ? "Guaranteed results in specific timeframes (no agency can guarantee Google positions)."
                  : "Résultats garantis dans des délais précis (aucune agence ne peut garantir des positions sur Google)."}
              </li>
              <li>
                {isEn
                  ? "No distinction between management fee and advertising spend."
                  : "Pas de distinction entre les honoraires de gestion et l'investissement publicitaire."}
              </li>
              <li>
                {isEn
                  ? "Generic proposals with no mention of your specific situation, sector or competitors."
                  : "Propositions génériques sans mention de votre situation spécifique, secteur ou concurrents."}
              </li>
              <li>
                {isEn
                  ? "No reporting plan or defined KPIs in the contract."
                  : "Pas de plan de reporting ni de KPIs définis dans le contrat."}
              </li>
              <li>
                {isEn
                  ? "Annual minimum contracts with no possibility of review after 3–4 months."
                  : "Contrats minimums annuels sans possibilité de révision après 3 à 4 mois."}
              </li>
            </ul>
          </section>

          <div className="bg-primary-600 text-white rounded-2xl p-8 my-2 text-center">
            <h2 className="text-2xl font-bold mb-3">
              {isEn
                ? "A clear proposal, no small print"
                : "Une proposition claire, sans petits caractères"}
            </h2>
            <p className="text-primary-200 mb-6">
              {isEn
                ? "We tell you exactly what each service includes, what results to expect and how we will measure them. No rigid packages or impossible promises."
                : "Nous vous indiquons exactement ce qu'inclut chaque service, quels résultats attendre et comment nous allons les mesurer. Pas de forfaits rigides ni de promesses impossibles."}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={`/${lang}/contact/`}
                className="bg-accent-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-accent-600 transition-colors"
              >
                {isEn ? "Request a quote" : "Demander un devis"}
              </a>
              <a
                href={`/${lang}/seo-web-positioning/`}
                className="border-2 border-white text-white px-6 py-3 rounded-full font-semibold hover:bg-white/10 transition-colors"
              >
                {isEn ? "See SEO service" : "Voir le service SEO"}
              </a>
            </div>
          </div>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-primary-600 mb-4">
              {isEn
                ? "Frequently asked questions about agency pricing"
                : "Questions fréquentes sur les prix des agences"}
            </h2>
            <div className="space-y-3">
              {FAQS.map((faq) => (
                <details
                  key={faq.q}
                  className="border border-gray-200 rounded-xl overflow-hidden group"
                >
                  <summary className="px-6 py-4 cursor-pointer font-semibold text-primary-700 hover:bg-primary-50 list-none flex justify-between items-center">
                    {faq.q}
                    <span className="text-accent-500 group-open:rotate-180 transition-transform">▾</span>
                  </summary>
                  <div className="px-6 py-4 text-gray-600 border-t border-gray-100">{faq.a}</div>
                </details>
              ))}
            </div>
          </section>

          <p className="text-sm text-gray-500 pt-4">
            {isEn ? "Related services: " : "Services associés : "}
            <a href={`/${lang}/seo-web-positioning/`} className="text-accent-500 hover:underline">
              {isEn ? "SEO Web Positioning" : "Positionnement SEO"}
            </a>
            {" · "}
            <a href={`/${lang}/google-ads-management/`} className="text-accent-500 hover:underline">
              {isEn ? "Google Ads Management" : "Gestion Google Ads"}
            </a>
          </p>
        </div>

        <nav className="mt-12 pt-8 border-t border-gray-200">
          <a
            href={`/${lang}/blog/`}
            className="text-accent-500 hover:text-accent-600 font-medium text-sm"
          >
            {isEn ? "← Back to blog" : "← Retour au blog"}
          </a>
        </nav>
      </div>
    </>
  );
}
