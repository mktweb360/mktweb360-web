import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ContactForm } from "@/components/ContactForm";
import { BlogBanner } from "@/components/BlogBanner";
import { RelatedArticles } from "@/components/RelatedArticles";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const isEn = lang === "en";
  return {
    title: isEn ? "PESTEL Analysis in Digital Marketing — Complete Guide | Mkt Web 360" : "Analyse PESTEL en Marketing Digital — Guide Complet | Mkt Web 360",
    description: isEn ? "What PESTEL analysis is, how to apply it to your digital marketing strategy and what insights it provides for your business." : "Qu'est-ce que l'analyse PESTEL, comment l'appliquer à votre stratégie de marketing digital et quels enseignements elle apporte pour votre entreprise.",
    alternates: { canonical: `https://www.mktweb360.com/${lang}/pestel-analysis-marketing/` },
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
          { label: isEn ? "PESTEL analysis" : "Analyse PESTEL" },
        ]} />
        <p className="text-sm text-accent-500 font-semibold mb-2">Strategy</p>
        <h1 className="text-4xl font-bold text-primary-600 mb-4 leading-tight">
          {isEn ? "PESTEL analysis in digital marketing: how to apply it to your strategy" : "Analyse PESTEL en marketing digital : comment l'appliquer à votre stratégie"}
        </h1>
        <p className="text-xl text-gray-500 mb-8 leading-relaxed">
          {isEn ? "PESTEL analysis helps you understand the external factors that affect your business and your digital marketing strategy. This guide explains how to use it practically." : "L'analyse PESTEL vous aide à comprendre les facteurs externes qui affectent votre entreprise et votre stratégie de marketing digital. Ce guide explique comment l'utiliser de manière pratique."}
        </p>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-primary-600 mb-4">
            {isEn ? "What PESTEL analysis is and its 6 factors" : "Qu'est-ce que l'analyse PESTEL et ses 6 facteurs"}
          </h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {isEn ? "PESTEL is a strategic framework that examines six categories of external factors: Political (government policies, regulations, political stability), Economic (economic growth, inflation, consumer spending power), Social (demographic trends, cultural changes, consumer behaviour), Technological (new technologies, digital transformation, automation), Environmental (sustainability concerns, climate change, environmental regulations) and Legal (employment law, data protection, advertising regulations)." : "PESTEL est un cadre stratégique qui examine six catégories de facteurs externes : Politique (politiques gouvernementales, réglementations, stabilité politique), Économique (croissance économique, inflation, pouvoir d'achat des consommateurs), Social (tendances démographiques, changements culturels, comportement des consommateurs), Technologique (nouvelles technologies, transformation digitale, automatisation), Environnemental (préoccupations de durabilité, changement climatique, réglementations environnementales) et Légal (droit du travail, protection des données, réglementations publicitaires)."}
          </p>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {isEn ? "Unlike internal analysis frameworks (SWOT analyses strengths and weaknesses), PESTEL focuses entirely on the external environment your business operates in. It is most useful as an annual strategic exercise and when planning significant marketing investments or entering new markets. The output helps you identify external risks and opportunities that should shape your strategy." : "Contrairement aux cadres d'analyse interne (le SWOT analyse les forces et faiblesses), PESTEL se concentre entièrement sur l'environnement externe dans lequel votre entreprise opère. Il est le plus utile comme exercice stratégique annuel et lors de la planification d'investissements marketing significatifs ou de l'entrée sur de nouveaux marchés. Le résultat aide à identifier les risques et opportunités externes qui devraient façonner votre stratégie."}
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-primary-600 mb-4">
            {isEn ? "How to apply PESTEL to your digital marketing" : "Comment appliquer le PESTEL à votre marketing digital"}
          </h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {isEn ? "For digital marketing specifically, PESTEL helps identify factors that will affect your channel effectiveness, audience behaviour and competitive environment. For example: political factors like privacy regulations (GDPR) directly affect how you can target and track customers. Economic factors like consumer confidence affect advertising costs and conversion rates. Social factors like changing search behaviour (more voice search, more AI-assisted search) affect your SEO strategy." : "Pour le marketing digital spécifiquement, PESTEL aide à identifier les facteurs qui affecteront l'efficacité de vos canaux, le comportement de votre audience et l'environnement concurrentiel. Par exemple : les facteurs politiques comme les réglementations de confidentialité (RGPD) affectent directement la façon dont vous pouvez cibler et suivre les clients. Les facteurs économiques comme la confiance des consommateurs affectent les coûts publicitaires et les taux de conversion. Les facteurs sociaux comme l'évolution du comportement de recherche (plus de recherche vocale, plus de recherche assistée par IA) affectent votre stratégie SEO."}
          </p>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {isEn ? "A practical approach: for each of the 6 PESTEL factors, identify 2-3 specific trends or changes that are most relevant to your business and digital marketing channels. For each, assess whether it represents a risk or an opportunity, and rate the likely impact on your business. This creates a prioritised list of external factors to incorporate into your marketing planning." : "Une approche pratique : pour chacun des 6 facteurs PESTEL, identifiez 2 à 3 tendances ou changements spécifiques les plus pertinents pour votre entreprise et vos canaux de marketing digital. Pour chacun, évaluez s'il représente un risque ou une opportunité, et notez l'impact probable sur votre entreprise. Cela crée une liste priorisée de facteurs externes à intégrer dans votre planification marketing."}
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-primary-600 mb-4">
            {isEn ? "Political and economic factors affecting digital marketing" : "Facteurs politiques et économiques affectant le marketing digital"}
          </h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {isEn ? "Political factors with immediate digital marketing impact include: data privacy regulations (GDPR, the Spanish Organic Data Protection Law), cookie consent requirements, advertising platform regulations (restrictions on targeting specific audiences), and digital services taxation. These directly affect how you run campaigns, how you track results and what data you can use." : "Les facteurs politiques ayant un impact immédiat sur le marketing digital incluent : les réglementations de confidentialité des données (RGPD, la loi organique espagnole de protection des données), les exigences de consentement aux cookies, les réglementations des plateformes publicitaires (restrictions sur le ciblage d'audiences spécifiques), et la taxation des services numériques. Ceux-ci affectent directement la façon dont vous gérez les campagnes, comment vous suivez les résultats et quelles données vous pouvez utiliser."}
          </p>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {isEn ? "Economic factors are especially important for planning advertising spend. In periods of economic uncertainty, consumers become more price-sensitive and purchase consideration cycles lengthen — this affects which keywords convert best and what messaging resonates. Higher inflation typically increases advertising costs (as more advertisers compete for the same attention) while simultaneously reducing consumer purchasing power. Smart marketers adjust their channel mix and messaging in response." : "Les facteurs économiques sont particulièrement importants pour planifier les dépenses publicitaires. En périodes d'incertitude économique, les consommateurs deviennent plus sensibles aux prix et les cycles de considération d'achat s'allongent — cela affecte quels mots-clés convertissent le mieux et quel message résonne. Une inflation plus élevée augmente généralement les coûts publicitaires (à mesure que plus d'annonceurs rivalisent pour la même attention) tout en réduisant simultanément le pouvoir d'achat des consommateurs. Les marketeurs avisés ajustent leur mix de canaux et leur messagerie en réponse."}
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-primary-600 mb-4">
            {isEn ? "Social, technological and environmental factors" : "Facteurs sociaux, technologiques et environnementaux"}
          </h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {isEn ? "Social factors in digital marketing include changing demographics (aging population shifting towards more online activity, Gen Z expecting different digital experiences), trust in online information (increasing scepticism toward advertising, growing importance of peer reviews and user-generated content), and platform behaviour shifts (declining Facebook usage among younger demographics, rise of short-form video). Understanding these trends helps you allocate resources to channels that match where your audience is going." : "Les facteurs sociaux dans le marketing digital incluent les démographies changeantes (vieillissement de la population se tournant davantage vers l'activité en ligne, génération Z attendant des expériences digitales différentes), la confiance dans l'information en ligne (scepticisme croissant envers la publicité, importance croissante des avis pairs et du contenu généré par les utilisateurs), et les changements de comportement sur les plateformes (déclin de l'usage de Facebook chez les jeunes, essor de la vidéo courte). Comprendre ces tendances aide à allouer les ressources aux canaux qui correspondent à l'orientation de votre audience."}
          </p>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {isEn ? "Technological factors are the most rapidly changing PESTEL element for digital marketing. AI-generated content, generative search (AI summaries replacing traditional search results), voice search growth, and cookieless tracking are all technological shifts that are already affecting how marketing works. GEO (Generative Engine Optimisation) — ensuring your brand appears in AI-generated responses — is emerging as a new discipline alongside traditional SEO." : "Les facteurs technologiques sont l'élément PESTEL changeant le plus rapidement pour le marketing digital. Le contenu généré par IA, la recherche générative (les résumés IA remplaçant les résultats de recherche traditionnels), la croissance de la recherche vocale, et le suivi sans cookies sont tous des changements technologiques qui affectent déjà le fonctionnement du marketing. Le GEO (Optimisation pour Moteurs Génératifs) — s'assurer que votre marque apparaît dans les réponses générées par IA — émerge comme une nouvelle discipline aux côtés du SEO traditionnel."}
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-primary-600 mb-4">
            {isEn ? "PESTEL vs SWOT: when to use each" : "PESTEL vs SWOT : quand utiliser chacun"}
          </h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {isEn ? "PESTEL and SWOT are complementary, not competing frameworks. PESTEL examines external macro-environmental factors beyond your control. SWOT examines both internal (strengths and weaknesses) and external (opportunities and threats) factors at a more specific level. The typical workflow is: use PESTEL to understand the macro environment, then use those insights to populate the opportunities and threats in your SWOT analysis." : "PESTEL et SWOT sont des cadres complémentaires, pas concurrents. PESTEL examine les facteurs macro-environnementaux externes hors de votre contrôle. SWOT examine à la fois les facteurs internes (forces et faiblesses) et externes (opportunités et menaces) à un niveau plus spécifique. Le flux de travail typique est : utilisez PESTEL pour comprendre l'environnement macro, puis utilisez ces insights pour alimenter les opportunités et menaces dans votre analyse SWOT."}
          </p>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {isEn ? "Use PESTEL when: planning a new digital strategy, entering a new market, making significant budget decisions, or conducting an annual strategic review. Use SWOT when: evaluating a specific product or service launch, comparing yourself to specific competitors, or making tactical decisions about channel allocation. Both are simple frameworks that become powerful when completed with honest, specific data rather than generic statements." : "Utilisez PESTEL quand : vous planifiez une nouvelle stratégie digitale, entrez sur un nouveau marché, prenez des décisions de budget significatives, ou menez une révision stratégique annuelle. Utilisez SWOT quand : vous évaluez le lancement d'un produit ou service spécifique, vous comparez à des concurrents spécifiques, ou prenez des décisions tactiques sur l'allocation des canaux. Les deux sont des cadres simples qui deviennent puissants quand ils sont complétés avec des données honnêtes et spécifiques plutôt que des déclarations génériques."}
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
