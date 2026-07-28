import { Breadcrumbs } from "@/components/Breadcrumbs";
import { BlogBanner } from "@/components/BlogBanner";
import { alternatesFor } from "@/lib/i18n/routes";
import Link from "next/link";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const isEn = lang === "en";
  return {
    title: isEn
      ? "Google Keyword Planner: Complete Step-by-Step Guide 2026"
      : "Planificateur de mots-clés Google Ads : guide complet 2026",
    description: isEn
      ? "Learn how to use Google Keyword Planner step by step. Find profitable keywords, analyse search volumes and build your strategy from scratch."
      : "Apprenez à utiliser le Planificateur de mots-clés Google étape par étape. Trouvez des mots-clés rentables, analysez les volumes et construisez votre stratégie depuis zéro.",
    alternates: alternatesFor(`/${lang}/how-to-use-google-keyword-planner/`) ?? {
      canonical: `https://www.mktweb360.com/${lang}/how-to-use-google-keyword-planner/`,
    },
    openGraph: {
      title: isEn
        ? "Google Keyword Planner: Complete Step-by-Step Guide 2026 | Mkt Web 360"
        : "Planificateur de mots-clés Google Ads : guide complet 2026 | Mkt Web 360",
      description: isEn
        ? "Learn how to use Google Keyword Planner step by step. Find profitable keywords, analyse search volumes and build your strategy from scratch."
        : "Apprenez à utiliser le Planificateur de mots-clés Google étape par étape. Trouvez des mots-clés rentables, analysez les volumes et construisez votre stratégie depuis zéro.",
    },
  };
}

export default async function Page({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const isEn = lang === "en";

  const faqs = [
    {
      q: isEn
        ? "Is Google Keyword Planner free?"
        : "Le Planificateur de mots-clés Google est-il gratuit ?",
      a: isEn
        ? "Yes, it is free. You only need a Google Ads account to access it. However, if you do not have any active campaign with real spend, volume data appears in broad ranges (for example, 1,000–10,000) rather than exact figures."
        : "Oui, il est gratuit. Il vous suffit d'un compte Google Ads pour y accéder. Cependant, si vous n'avez aucune campagne active avec des dépenses réelles, les données de volume apparaissent en tranches larges (par exemple, 1 000–10 000) plutôt qu'en chiffres exacts.",
    },
    {
      q: isEn
        ? "Can I use Keyword Planner without an active campaign?"
        : "Puis-je utiliser le Planificateur sans campagne active ?",
      a: isEn
        ? "Yes, you can access it, but the data will be less precise. With an active campaign generating some spend, Google unlocks exact monthly volumes instead of showing ranges. One alternative is to create a paused campaign with a minimal budget."
        : "Oui, vous pouvez y accéder, mais les données seront moins précises. Avec une campagne active générant un peu de dépenses, Google déverrouille les volumes exacts par mois au lieu d'afficher des tranches. Une alternative est de créer une campagne mise en pause avec un budget minimal.",
    },
    {
      q: isEn
        ? "What use does Keyword Planner have for SEO if it is an Ads tool?"
        : "À quoi sert le Planificateur pour le SEO s'il s'agit d'un outil Ads ?",
      a: isEn
        ? "Although it is designed for planning paid campaigns, its utility for SEO is equal or greater. It provides access to real search data that no third-party tool can replicate with the same fidelity — discovering keywords with real search intent, identifying long tails with lower competition and understanding seasonality."
        : "Bien qu'il soit conçu pour planifier des campagnes payantes, son utilité pour le SEO est égale ou supérieure. Il donne accès à des données de recherche réelles qu'aucun outil tiers ne peut reproduire avec la même fidélité — découvrir des mots-clés à intention de recherche réelle, identifier des longues traînes moins concurrentielles et comprendre la saisonnalité.",
    },
    {
      q: isEn
        ? "How many keywords can I analyse at once with Keyword Planner?"
        : "Combien de mots-clés puis-je analyser à la fois avec le Planificateur ?",
      a: isEn
        ? "You can enter up to 10 seed keywords in the discovery function. In the volume and forecasts function you can paste lists of up to 2,500 keywords to analyse all at once — especially useful for audits or large-scale content planning."
        : "Vous pouvez saisir jusqu'à 10 mots-clés de départ dans la fonction de découverte. Dans la fonction volume et prévisions, vous pouvez coller des listes de jusqu'à 2 500 mots-clés pour les analyser en une seule fois — particulièrement utile pour les audits ou la planification de contenu à grande échelle.",
    },
  ];

  return (
    <>
      <div className="max-w-3xl mx-auto px-4 py-12">
        <Breadcrumbs
          crumbs={[
            { label: isEn ? "Home" : "Accueil", href: `/${lang}/` },
            { label: "Blog", href: `/${lang}/blog/` },
            {
              label: isEn
                ? "Google Keyword Planner"
                : "Planificateur de mots-clés",
            },
          ]}
        />

        <p className="text-sm text-accent-500 font-semibold mb-2">
          {isEn ? "Google Ads" : "Google Ads"}
        </p>
        <h1 className="text-4xl font-bold text-primary-600 mb-4 leading-tight">
          {isEn
            ? "How to use Google Keyword Planner: complete guide 2026"
            : "Comment utiliser le Planificateur de mots-clés Google Ads : guide complet 2026"}
        </h1>
        <p className="text-xl text-gray-500 mb-8 leading-relaxed">
          {isEn
            ? "Google Keyword Planner is the most powerful free tool for researching what your audience searches for. It is useful for paid campaigns, but it is also a goldmine for SEO. This guide explains how to use it step by step."
            : "Le Planificateur de mots-clés Google Ads est l'outil gratuit le plus puissant pour comprendre ce que votre audience recherche. Il sert aux campagnes payantes, mais c'est aussi une mine d'or pour le SEO. Ce guide vous explique comment l'utiliser étape par étape."}
        </p>

        <section className="mb-10">
          <p className="text-gray-600 mb-4 leading-relaxed">
            {isEn
              ? "When you want to rank a website or launch a Google Ads campaign, the first step is always the same: understand which terms your audience uses to search for what you offer. Google Keyword Planner is the only tool on the market that provides direct access to real data from the world's most-used search engine. It is not perfect, but no paid alternative has access to that primary source."
              : "Lorsque vous souhaitez positionner un site web ou lancer une campagne Google Ads, la première étape est toujours la même : comprendre quels termes votre audience utilise pour rechercher ce que vous proposez. Le Planificateur de mots-clés Google est le seul outil du marché qui donne accès directement aux données réelles du moteur de recherche le plus utilisé au monde. Il n'est pas parfait, mais aucune alternative payante n'a accès à cette source primaire."}
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-primary-600 mb-4">
            {isEn
              ? "How to access Google Keyword Planner"
              : "Comment accéder au Planificateur de mots-clés"}
          </h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {isEn
              ? "To access it you need a Google Ads account, which is free to create. Once inside, go to Tools and Settings → Planning → Keyword Planner. You will see two main options: Discover new keywords and Get search volume and forecasts."
              : "Pour y accéder, vous avez besoin d'un compte Google Ads, dont la création est gratuite. Une fois connecté, rendez-vous dans Outils et paramètres → Planification → Planificateur de mots-clés. Vous verrez deux options principales : Découvrir de nouveaux mots-clés et Obtenir le volume de recherche et les prévisions."}
          </p>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {isEn
              ? "Here is the most important nuance you need to know: the data shown by the tool depends on whether you have an active campaign with real spend or not. Without active spend, volumes appear in broad ranges such as '1,000–10,000 monthly searches'. With at least one campaign with some investment, data is unlocked and you can see exact figures month by month. If you do not want to spend, a common solution is to create a campaign with a minimal budget and pause it after a few days of activity."
              : "Voici la nuance la plus importante à connaître : les données affichées par l'outil dépendent de si vous avez une campagne active avec des dépenses réelles ou non. Sans dépenses actives, les volumes apparaissent en tranches larges comme « 1 000–10 000 recherches mensuelles ». Avec au moins une campagne avec un peu d'investissement, les données se déverrouillent et vous pouvez voir des chiffres exacts mois par mois. Si vous ne souhaitez pas dépenser, une solution courante est de créer une campagne avec un budget minimal et de la mettre en pause après quelques jours d'activité."}
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-primary-600 mb-4">
            {isEn
              ? "Discover new keywords"
              : "Découvrir de nouveaux mots-clés"}
          </h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {isEn
              ? "This is the most widely used function for initial research. You enter up to 10 seed keywords — terms related to your business, product or service — and the tool returns hundreds of variants with their associated metrics."
              : "C'est la fonction la plus utilisée pour la recherche initiale. Vous saisissez jusqu'à 10 mots-clés de départ — des termes liés à votre entreprise, produit ou service — et l'outil vous retourne des centaines de variantes avec leurs métriques associées."}
          </p>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {isEn
              ? "Before launching the search, configure two fundamental filters: Language — select the appropriate language to avoid contamination from searches in other languages; and Location — filter by the country or region where your business operates. The search volumes and intent for the same keyword can vary enormously by market."
              : "Avant de lancer la recherche, configurez deux filtres fondamentaux : Langue — sélectionnez la langue appropriée pour éviter la contamination des recherches dans d'autres langues ; et Emplacement — filtrez par le pays ou la région où votre entreprise opère. Les volumes de recherche et l'intention pour le même mot-clé peuvent varier énormément selon le marché."}
          </p>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {isEn
              ? "The results will show for each keyword: the average monthly searches, the competition level (low, medium or high, based on how many advertisers are bidding on that keyword), the suggested top-of-page bid and seasonal variation. High competition does not mean you should avoid a keyword — it means it has commercial value. The decision depends on your strategy and budget."
              : "Les résultats affichent pour chaque mot-clé : la moyenne des recherches mensuelles, le niveau de concurrence (faible, moyen ou élevé, selon le nombre d'annonceurs qui enchérissent sur ce mot-clé), l'enchère suggérée en haut de page et la variation saisonnière. Une concurrence élevée ne signifie pas que vous devez éviter un mot-clé — cela signifie qu'il a une valeur commerciale. La décision dépend de votre stratégie et de votre budget."}
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-primary-600 mb-4">
            {isEn
              ? "Get search volume and forecasts"
              : "Obtenir le volume de recherche et les prévisions"}
          </h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {isEn
              ? "The second Planner function has two distinct uses. You can paste a list of up to 2,500 keywords to see their volume all at once — ideal for audits or when you already have an elaborate list. And you can see forecasts: how many clicks and impressions you would expect if you bid on those keywords with a given budget."
              : "La deuxième fonction du Planificateur a deux utilisations distinctes. Vous pouvez coller une liste de jusqu'à 2 500 mots-clés pour voir leur volume en une seule fois — idéal pour les audits ou lorsque vous avez déjà une liste élaborée. Et vous pouvez voir des prévisions : combien de clics et d'impressions vous pouvez espérer si vous enchérissez sur ces mots-clés avec un budget donné."}
          </p>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {isEn
              ? "It is important to distinguish between historical volume and forecasts. Historical volume tells you how many times a keyword was searched in the past 12 months on average. Forecasts are performance projections for an Ads campaign with a specific bid — useful for SEM, not for SEO. Pay attention to seasonality: a keyword like 'Christmas gift ideas' has an enormous peak in November and December and almost zero the rest of the year."
              : "Il est important de distinguer le volume historique des prévisions. Le volume historique vous indique combien de fois un mot-clé a été recherché au cours des 12 derniers mois en moyenne. Les prévisions sont des projections de performance pour une campagne Ads avec une enchère spécifique — utiles pour le SEA, pas pour le SEO. Faites attention à la saisonnalité : un mot-clé comme 'idées cadeaux Noël' a un pic énorme en novembre et décembre et presque zéro le reste de l'année."}
          </p>
        </section>

        <div className="bg-primary-50 rounded-xl p-6 border border-primary-100 mb-10">
          <p className="font-semibold text-primary-700 mb-2">
            {isEn
              ? "Do you need a keyword strategy for your business?"
              : "Vous avez besoin d'une stratégie de mots-clés pour votre entreprise ?"}
          </p>
          <p className="text-gray-600 text-sm mb-4">
            {isEn
              ? "At Mkt Web 360 we carry out keyword analysis as part of our SEO strategy. We identify real opportunities for your sector, not just the most searched terms."
              : "Chez Mkt Web 360, nous réalisons l'analyse des mots-clés dans le cadre de notre stratégie SEO. Nous identifions les vraies opportunités pour votre secteur, pas seulement les termes les plus recherchés."}
          </p>
          <Link
            href={`/${lang}/seo/`}
            className="inline-block bg-accent-500 text-white px-6 py-2.5 rounded-full font-semibold text-sm hover:bg-accent-600 transition-colors"
          >
            {isEn ? "See SEO service" : "Voir le service SEO"}
          </Link>
        </div>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-primary-600 mb-4">
            {isEn
              ? "How to use Keyword Planner for SEO (not just Ads)"
              : "Comment utiliser le Planificateur pour le SEO (pas seulement les Ads)"}
          </h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {isEn
              ? "Although Google calls it 'Google Ads Keyword Planner', its utility for SEO is equal or greater. The reason is simple: it gives you access to real search data that no third-party tool can replicate with the same fidelity."
              : "Bien que Google l'appelle 'Planificateur de mots-clés Google Ads', son utilité pour le SEO est égale ou supérieure. La raison est simple : il vous donne accès à des données de recherche réelles qu'aucun outil tiers ne peut reproduire avec la même fidélité."}
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-600">
            <li>
              <strong>
                {isEn
                  ? "Extract keywords with clear search intent."
                  : "Extrayez des mots-clés avec une intention de recherche claire."}
              </strong>{" "}
              {isEn
                ? "A keyword like 'buy running shoes men' has transactional intent. 'How to choose running shoes' has informational intent. For SEO, you need both, but on separate pages."
                : "Un mot-clé comme 'acheter chaussures running homme' a une intention transactionnelle. 'Comment choisir des chaussures de running' a une intention informationnelle. Pour le SEO, vous avez besoin des deux, mais sur des pages distinctes."}
            </li>
            <li>
              <strong>
                {isEn ? "Identify long-tail keywords." : "Identifiez les mots-clés longue traîne."}
              </strong>{" "}
              {isEn
                ? "Long-tail keywords (3–4+ words) have lower volume but far less competition and higher conversion rates. The Planner generates them automatically from your seeds."
                : "Les mots-clés longue traîne (3 à 4 mots ou plus) ont moins de volume mais bien moins de concurrence et un taux de conversion plus élevé. Le Planificateur les génère automatiquement à partir de vos mots-clés de départ."}
            </li>
            <li>
              <strong>
                {isEn
                  ? "Group by semantic topic."
                  : "Regroupez par thème sémantique."}
              </strong>{" "}
              {isEn
                ? "Keywords that address the same topic should go on the same page, not separate pages. This is how you build a solid content architecture."
                : "Les mots-clés qui traitent du même sujet doivent aller sur la même page, pas sur des pages séparées. C'est ainsi que vous construisez une architecture de contenu solide."}
            </li>
            <li>
              <strong>
                {isEn
                  ? "Export for your content plan."
                  : "Exportez pour votre plan de contenu."}
              </strong>{" "}
              {isEn
                ? "Download the CSV with all keywords, sort by volume, filter the relevant ones and build your editorial calendar based on real demand."
                : "Téléchargez le CSV avec tous les mots-clés, triez par volume, filtrez les pertinents et construisez votre calendrier éditorial basé sur une demande réelle."}
            </li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-primary-600 mb-4">
            {isEn
              ? "Common mistakes when using Keyword Planner"
              : "Erreurs courantes lors de l'utilisation du Planificateur"}
          </h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-600">
            <li>
              <strong>
                {isEn
                  ? "Trusting broad ranges as if they were exact data."
                  : "Se fier aux tranches larges comme si elles étaient des données exactes."}
              </strong>{" "}
              {isEn
                ? "If you see '10,000–100,000 monthly searches', you do not know if it is 11,000 or 95,000. Decisions based on such broad ranges are risky."
                : "Si vous voyez '10 000–100 000 recherches mensuelles', vous ne savez pas si c'est 11 000 ou 95 000. Les décisions basées sur des tranches aussi larges sont risquées."}
            </li>
            <li>
              <strong>
                {isEn
                  ? "Ignoring search intent."
                  : "Ignorer l'intention de recherche."}
              </strong>{" "}
              {isEn
                ? "High volume is worthless if the keyword does not match what your page can offer. 'What is SEO' attracts curious people, not clients."
                : "Un volume élevé ne sert à rien si le mot-clé ne correspond pas à ce que votre page peut offrir. 'Qu'est-ce que le SEO' attire des curieux, pas des clients."}
            </li>
            <li>
              <strong>
                {isEn
                  ? "Focusing only on high volume."
                  : "Se concentrer uniquement sur le volume élevé."}
              </strong>{" "}
              {isEn
                ? "The most searched keywords tend to be the most competitive. In many sectors, targeting medium-volume keywords with strong buying intent produces much better results."
                : "Les mots-clés les plus recherchés ont tendance à être les plus concurrentiels. Dans de nombreux secteurs, cibler des mots-clés de volume moyen avec une forte intention d'achat donne de bien meilleurs résultats."}
            </li>
            <li>
              <strong>
                {isEn
                  ? "Not cross-referencing data with other sources."
                  : "Ne pas croiser les données avec d'autres sources."}
              </strong>{" "}
              {isEn
                ? "The Planner does not tell you if you are already working on a keyword or if there is existing content that could be improved. Combine it with Google Search Console and other tools."
                : "Le Planificateur ne vous dit pas si vous travaillez déjà un mot-clé ou s'il existe du contenu existant qui pourrait être amélioré. Combinez-le avec Google Search Console et d'autres outils."}
            </li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-primary-600 mb-4">
            {isEn
              ? "Alternatives to Google Keyword Planner"
              : "Alternatives au Planificateur de mots-clés Google"}
          </h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {isEn
              ? "Google's Planner is the reference, but not the only option. Depending on your needs, other tools provide very valuable complementary data:"
              : "Le Planificateur de Google est la référence, mais pas la seule option. Selon vos besoins, d'autres outils fournissent des données complémentaires très précieuses :"}
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-600">
            <li>
              <strong>Semrush:</strong>{" "}
              {isEn
                ? "The most complete tool on the market for keyword analysis, position tracking, competitor analysis and technical audits. Paid, but with a free trial."
                : "L'outil le plus complet du marché pour l'analyse de mots-clés, le suivi de positions, l'analyse de concurrents et les audits techniques. Payant, mais avec un essai gratuit."}
            </li>
            <li>
              <strong>Ahrefs:</strong>{" "}
              {isEn
                ? "Particularly powerful for backlink analysis and long-term keywords. Its keyword index is one of the largest in the industry."
                : "Particulièrement puissant pour l'analyse de backlinks et les mots-clés à long terme. Son index de mots-clés est l'un des plus larges du secteur."}
            </li>
            <li>
              <strong>Ubersuggest:</strong>{" "}
              {isEn
                ? "A more affordable alternative developed by Neil Patel. Offers volume data, difficulty and content suggestions. A good option for freelancers and SMEs with a tight budget."
                : "Une alternative plus abordable développée par Neil Patel. Offre des données de volume, de difficulté et des suggestions de contenu. Une bonne option pour les indépendants et les PME avec un budget serré."}
            </li>
          </ul>
        </section>

        <div className="bg-primary-600 text-white rounded-2xl p-8 mb-10 text-center">
          <h2 className="text-2xl font-bold mb-3">
            {isEn
              ? "Turn keywords into real customers"
              : "Transformez les mots-clés en clients réels"}
          </h2>
          <p className="text-primary-200 mb-6">
            {isEn
              ? "Finding the right keywords is the first step. The second is executing the strategy to rank for them. At Mkt Web 360 we do both."
              : "Trouver les bons mots-clés est la première étape. La deuxième est d'exécuter la stratégie pour les positionner. Chez Mkt Web 360, nous faisons les deux."}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href={`/${lang}/seo/`}
              className="bg-accent-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-accent-600 transition-colors"
            >
              {isEn ? "See SEO service" : "Voir le service SEO"}
            </Link>
            <Link
              href={`/${lang}/google-ads/`}
              className="border-2 border-white text-white px-6 py-3 rounded-full font-semibold hover:bg-white/10 transition-colors"
            >
              {isEn ? "See Google Ads" : "Voir Google Ads"}
            </Link>
          </div>
        </div>

        <BlogBanner lang={lang} />

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-primary-600 mb-4">
            {isEn
              ? "Frequently asked questions about Google Keyword Planner"
              : "Questions fréquentes sur le Planificateur de mots-clés Google"}
          </h2>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <details
                key={i}
                className="border border-gray-200 rounded-xl overflow-hidden group"
              >
                <summary className="px-6 py-4 cursor-pointer font-semibold text-primary-700 hover:bg-primary-50 list-none flex justify-between items-center">
                  {faq.q}
                  <span className="text-accent-500 group-open:rotate-180 transition-transform">
                    ▾
                  </span>
                </summary>
                <div className="px-6 py-4 text-gray-600 border-t border-gray-100">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </section>

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
