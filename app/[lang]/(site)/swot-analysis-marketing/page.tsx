import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ContactForm } from "@/components/ContactForm";
import { BlogBanner } from "@/components/BlogBanner";
import { RelatedArticles } from "@/components/RelatedArticles";
import { alternatesFor } from "@/lib/i18n/routes";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const isEn = lang === "en";
  return {
    title: isEn ? "SWOT Analysis in Digital Marketing — Practical Guide | Mkt Web 360" : "Analyse SWOT en Marketing Digital — Guide Pratique | Mkt Web 360",
    description: isEn ? "How to use SWOT analysis in digital marketing. Practical guide with examples to identify your strengths, weaknesses, opportunities and threats." : "Comment utiliser l'analyse SWOT dans le marketing digital. Guide pratique avec exemples pour identifier vos forces, faiblesses, opportunités et menaces.",
    alternates: alternatesFor(`/${lang}/swot-analysis-marketing/`) ?? {
      canonical: `https://www.mktweb360.com/${lang}/swot-analysis-marketing/`,
    },
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
          { label: isEn ? "SWOT analysis" : "Analyse SWOT" },
        ]} />
        <p className="text-sm text-accent-500 font-semibold mb-2">Strategy</p>
        <h1 className="text-4xl font-bold text-primary-600 mb-4 leading-tight">
          {isEn ? "SWOT analysis in digital marketing: how to use it to improve your strategy" : "Analyse SWOT en marketing digital : comment l'utiliser pour améliorer votre stratégie"}
        </h1>
        <p className="text-xl text-gray-500 mb-8 leading-relaxed">
          {isEn ? "SWOT analysis is one of the most practical tools in strategic marketing. This guide explains how to apply it specifically to your digital marketing to identify what is working and what needs to change." : "L'analyse SWOT est l'un des outils les plus pratiques en marketing stratégique. Ce guide explique comment l'appliquer spécifiquement à votre marketing digital pour identifier ce qui fonctionne et ce qui doit changer."}
        </p>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-primary-600 mb-4">
            {isEn ? "What SWOT analysis is: strengths, weaknesses, opportunities, threats" : "Qu'est-ce que l'analyse SWOT : forces, faiblesses, opportunités, menaces"}
          </h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {isEn ? "SWOT stands for Strengths, Weaknesses, Opportunities and Threats. It is a structured framework for evaluating your current position. Strengths and Weaknesses are internal factors — things within your control, related to your resources, capabilities and current performance. Opportunities and Threats are external factors — market conditions, competitor moves, technological changes and economic factors that affect your business from outside." : "SWOT signifie Forces, Faiblesses, Opportunités et Menaces. C'est un cadre structuré pour évaluer votre position actuelle. Les Forces et Faiblesses sont des facteurs internes — des choses sous votre contrôle, liées à vos ressources, capacités et performances actuelles. Les Opportunités et Menaces sont des facteurs externes — conditions de marché, mouvements des concurrents, changements technologiques et facteurs économiques qui affectent votre entreprise de l'extérieur."}
          </p>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {isEn ? "The power of SWOT comes not from the grid itself but from the strategic thinking it forces. A SWOT filled with generic statements ('good team', 'strong brand', 'competitive market') produces generic strategy. A SWOT filled with specific, data-backed observations ('our website converts at 3.2%, double the industry average' or 'we rank on page 2 for our most valuable keyword') produces actionable strategy." : "Le pouvoir du SWOT ne vient pas de la grille elle-même mais de la réflexion stratégique qu'elle impose. Un SWOT rempli de déclarations génériques ('bonne équipe', 'forte marque', 'marché concurrentiel') produit une stratégie générique. Un SWOT rempli d'observations spécifiques et étayées par des données ('notre site web convertit à 3,2%, le double de la moyenne du secteur' ou 'nous nous classons en page 2 pour notre mot-clé le plus précieux') produit une stratégie actionnable."}
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-primary-600 mb-4">
            {isEn ? "How to apply SWOT to your digital marketing" : "Comment appliquer le SWOT à votre marketing digital"}
          </h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {isEn ? "For a digital marketing SWOT, evaluate each quadrant through the lens of your digital presence and channels. Pull data before you begin: your website analytics, search console rankings, social media metrics, advertising results and customer feedback. SWOT based on intuition produces strategy based on intuition. SWOT based on data produces strategy based on evidence." : "Pour un SWOT de marketing digital, évaluez chaque quadrant à travers le prisme de votre présence numérique et de vos canaux. Collectez des données avant de commencer : vos analytics de site web, classements de search console, métriques de réseaux sociaux, résultats publicitaires et retours clients. Un SWOT basé sur l'intuition produit une stratégie basée sur l'intuition. Un SWOT basé sur les données produit une stratégie basée sur les preuves."}
          </p>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {isEn ? "Schedule your digital marketing SWOT quarterly or at minimum annually. Markets, algorithms and competitive landscapes change rapidly. A SWOT that was accurate 12 months ago may no longer reflect your current situation — a strength may have become a weakness if competitors have caught up, an opportunity may have closed, or a new threat may have emerged. Regular reviews keep your strategy grounded in current reality." : "Planifiez votre SWOT de marketing digital trimestriellement ou au minimum annuellement. Les marchés, algorithmes et paysages concurrentiels changent rapidement. Un SWOT qui était précis il y a 12 mois peut ne plus refléter votre situation actuelle — une force peut être devenue une faiblesse si les concurrents ont rattrapé leur retard, une opportunité peut s'être fermée, ou une nouvelle menace peut être apparue. Les révisions régulières ancrent votre stratégie dans la réalité actuelle."}
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-primary-600 mb-4">
            {isEn ? "Analysing your digital strengths and weaknesses" : "Analyser vos forces et faiblesses digitales"}
          </h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {isEn ? "Digital strengths to look for: strong domain authority built over years, established content that ranks for valuable keywords, a large and engaged email list, high review scores and reputation, proprietary data or content that competitors cannot replicate, strong brand recognition in your niche, or a website conversion rate significantly above industry benchmarks. These are competitive advantages to protect and build on." : "Forces digitales à rechercher : forte autorité de domaine construite au fil des années, contenu établi qui se classe pour des mots-clés précieux, grande liste d'email engagée, scores d'avis élevés et réputation, données ou contenu propriétaires que les concurrents ne peuvent pas répliquer, forte reconnaissance de marque dans votre niche, ou taux de conversion de site web significativement au-dessus des benchmarks du secteur. Ce sont des avantages compétitifs à protéger et développer."}
          </p>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {isEn ? "Digital weaknesses to identify honestly: slow website loading, low review count or poor review score, weak or inconsistent social media presence, no email marketing, heavy dependence on one traffic channel (e.g., all traffic comes from paid ads with no organic base), poor mobile experience, outdated content or website design, or no tracking and analytics. Each identified weakness is a specific improvement opportunity." : "Faiblesses digitales à identifier honnêtement : chargement lent du site, faible nombre d'avis ou mauvais score d'avis, présence faible ou incohérente sur les réseaux sociaux, pas d'email marketing, forte dépendance à un canal de trafic (ex. tout le trafic vient des publicités payantes sans base organique), mauvaise expérience mobile, contenu ou design de site web dépassés, ou pas de suivi et analytics. Chaque faiblesse identifiée est une opportunité d'amélioration spécifique."}
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-primary-600 mb-4">
            {isEn ? "Identifying digital opportunities and threats" : "Identifier les opportunités et menaces digitales"}
          </h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {isEn ? "Digital opportunities: competitors with weak online presence in a market with strong online demand, underserved keywords or content gaps in your niche, emerging platforms or formats your audience is adopting before your competitors, new advertising products or targeting capabilities, local SEO opportunities in adjacent geographic markets, or technology trends that could amplify your existing strengths (AI-assisted content production, automation)." : "Opportunités digitales : concurrents avec une présence en ligne faible dans un marché avec une forte demande en ligne, mots-clés mal desservis ou lacunes de contenu dans votre niche, plateformes ou formats émergents que votre audience adopte avant vos concurrents, nouveaux produits publicitaires ou capacités de ciblage, opportunités de SEO local sur des marchés géographiques adjacents, ou tendances technologiques qui pourraient amplifier vos forces existantes (production de contenu assistée par IA, automatisation)."}
          </p>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {isEn ? "Digital threats: well-funded competitors launching aggressive SEO or advertising campaigns in your space, Google algorithm changes that could affect your organic rankings, platform changes reducing organic reach (Facebook, Instagram), privacy regulations limiting your tracking and targeting capabilities, or new entrants using technology to serve your customers at lower cost. Understanding threats allows you to prepare mitigating strategies before they materialise." : "Menaces digitales : concurrents bien financés lançant des campagnes SEO ou publicitaires agressives dans votre espace, changements d'algorithme Google qui pourraient affecter vos classements organiques, changements de plateforme réduisant la portée organique (Facebook, Instagram), réglementations de confidentialité limitant vos capacités de suivi et ciblage, ou nouveaux entrants utilisant la technologie pour servir vos clients à moindre coût. Comprendre les menaces vous permet de préparer des stratégies d'atténuation avant qu'elles ne se matérialisent."}
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-primary-600 mb-4">
            {isEn ? "How to turn your SWOT into an action plan" : "Comment transformer votre SWOT en plan d'action"}
          </h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {isEn ? "A SWOT matrix that stays on paper produces no results. The follow-through is the strategic action that SWOT is designed to generate. From your SWOT, identify the most important action in each of four combinations: SO (use a Strength to pursue an Opportunity), WO (fix a Weakness to better exploit an Opportunity), ST (use a Strength to mitigate a Threat), WT (work on a Weakness to reduce vulnerability to a Threat). Each combination yields one high-priority action." : "Une matrice SWOT qui reste sur papier ne produit aucun résultat. Le suivi est l'action stratégique que le SWOT est conçu pour générer. À partir de votre SWOT, identifiez l'action la plus importante dans chacune des quatre combinaisons : SO (utiliser une Force pour poursuivre une Opportunité), WO (corriger une Faiblesse pour mieux exploiter une Opportunité), ST (utiliser une Force pour atténuer une Menace), WT (travailler sur une Faiblesse pour réduire la vulnérabilité à une Menace). Chaque combinaison génère une action hautement prioritaire."}
          </p>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {isEn ? "Assign each action to a specific person with a completion date and a measurable outcome. This transforms your SWOT from a diagnostic tool into an execution roadmap. Review progress monthly and update your SWOT quarterly. The businesses that consistently outperform their market are rarely the ones with the best initial strategy — they are the ones that most consistently execute and adapt their strategy based on results and changing conditions." : "Assignez chaque action à une personne spécifique avec une date de réalisation et un résultat mesurable. Cela transforme votre SWOT d'un outil de diagnostic en feuille de route d'exécution. Révisez les progrès mensuellement et mettez à jour votre SWOT trimestriellement. Les entreprises qui surperforment systématiquement leur marché sont rarement celles qui ont la meilleure stratégie initiale — ce sont celles qui exécutent et adaptent le plus systématiquement leur stratégie en fonction des résultats et des conditions changeantes."}
          </p>
        </section>

        <BlogBanner variant="default" />
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
      <RelatedArticles category="Strategy" />
    </>
  );
}
