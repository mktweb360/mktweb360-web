import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ContactForm } from "@/components/ContactForm";
import { BlogBanner } from "@/components/BlogBanner";
import { RelatedArticles } from "@/components/RelatedArticles";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const isEn = lang === "en";
  return {
    title: isEn ? "Digital Marketing for Businesses in Toledo — Practical Guide | Mkt Web 360" : "Marketing Digital pour les Entreprises à Tolède — Guide Pratique | Mkt Web 360",
    description: isEn ? "Practical guide to digital marketing for businesses in Toledo. Which channels work best, local SEO, Google Ads and how much it costs." : "Guide pratique du marketing digital pour les entreprises à Tolède. Quels canaux fonctionnent le mieux, SEO local, Google Ads et combien ça coûte.",
    alternates: { canonical: `https://www.mktweb360.com/${lang}/digital-marketing-toledo/` },
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
          { label: isEn ? "Digital marketing Toledo" : "Marketing digital Tolède" },
        ]} />
        <p className="text-sm text-accent-500 font-semibold mb-2">SEO Local</p>
        <h1 className="text-4xl font-bold text-primary-600 mb-4 leading-tight">
          {isEn ? "Digital marketing for businesses in Toledo: practical guide to grow online" : "Marketing digital pour les entreprises à Tolède : guide pratique pour croître en ligne"}
        </h1>
        <p className="text-xl text-gray-500 mb-8 leading-relaxed">
          {isEn ? "Toledo's digital marketing landscape is less competitive than Madrid but still offers enormous potential for local businesses. This guide explains what works specifically in Toledo's market." : "Le paysage du marketing digital à Tolède est moins concurrentiel que Madrid mais offre encore un énorme potentiel pour les entreprises locales. Ce guide explique ce qui fonctionne spécifiquement sur le marché de Tolède."}
        </p>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-primary-600 mb-4">
            {isEn ? "The digital market in Toledo" : "Le marché digital à Tolède"}
          </h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {isEn ? "Toledo is a city of approximately 85,000 residents but has a much broader economic catchment area including its province of around 700,000 people. Its unique position as a UNESCO World Heritage city and major tourist destination creates two distinct customer segments: local residents who need everyday services, and tourists and day-trippers (Toledo receives over 3 million visitors per year) who discover businesses through online search and review platforms." : "Tolède est une ville d'environ 85 000 habitants mais a un bassin économique beaucoup plus large incluant sa province d'environ 700 000 personnes. Sa position unique en tant que ville classée au patrimoine mondial de l'UNESCO et destination touristique majeure crée deux segments de clients distincts : les résidents locaux qui ont besoin de services quotidiens, et les touristes et excursionnistes (Tolède reçoit plus de 3 millions de visiteurs par an) qui découvrent les entreprises via la recherche en ligne et les plateformes d'avis."}
          </p>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {isEn ? "The digital competition in Toledo is lower than in major cities — many local businesses still rely primarily on word of mouth and traditional advertising. This creates significant opportunity: a business that invests in a good website, local SEO and Google Business Profile optimisation can dominate online visibility in its category relatively quickly compared to what would be required in a more competitive market like Madrid." : "La concurrence digitale à Tolède est plus faible que dans les grandes villes — de nombreuses entreprises locales s'appuient encore principalement sur le bouche-à-oreille et la publicité traditionnelle. Cela crée une opportunité significative : une entreprise qui investit dans un bon site web, le SEO local et l'optimisation de Google Business Profile peut dominer la visibilité en ligne dans sa catégorie relativement rapidement comparé à ce qui serait requis sur un marché plus compétitif comme Madrid."}
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-primary-600 mb-4">
            {isEn ? "Which digital marketing channels work best for local businesses" : "Quels canaux de marketing digital fonctionnent le mieux pour les entreprises locales"}
          </h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {isEn ? "For most Toledo businesses, the highest-ROI digital channels in order of priority are: 1) Google Business Profile optimisation (free, immediate visibility in Maps and local search), 2) Local SEO on your website (medium-term investment with compounding returns), 3) Google Ads for service businesses with high-value customers (fast results, controllable budget), 4) Social media presence on Instagram or Facebook depending on your sector (for brand awareness and community), 5) Email marketing to existing customers (highest ROI for repeat business)." : "Pour la plupart des entreprises de Tolède, les canaux digitaux au ROI le plus élevé par ordre de priorité sont : 1) Optimisation de Google Business Profile (gratuit, visibilité immédiate dans Maps et la recherche locale), 2) SEO local sur votre site web (investissement à moyen terme avec des retours composés), 3) Google Ads pour les entreprises de services avec des clients à haute valeur (résultats rapides, budget contrôlable), 4) Présence sur les réseaux sociaux sur Instagram ou Facebook selon votre secteur (pour la notoriété de marque et la communauté), 5) Email marketing auprès des clients existants (ROI le plus élevé pour les affaires récurrentes)."}
          </p>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {isEn ? "For Toledo businesses serving tourists specifically, TripAdvisor and Google Maps reviews are particularly important — tourists use these platforms to discover restaurants, activities and shops more than local residents do. Maintaining a strong presence on these platforms, actively collecting reviews from visitors, and responding to reviews in multiple languages (Spanish, English, French are the most common tourist nationalities in Toledo) can be a significant differentiator." : "Pour les entreprises de Tolède servant spécifiquement les touristes, les avis TripAdvisor et Google Maps sont particulièrement importants — les touristes utilisent ces plateformes pour découvrir des restaurants, activités et boutiques plus que les résidents locaux. Maintenir une forte présence sur ces plateformes, collecter activement des avis des visiteurs, et répondre aux avis en plusieurs langues (espagnol, anglais, français sont les nationalités touristiques les plus courantes à Tolède) peut être un différenciateur significatif."}
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-primary-600 mb-4">
            {isEn ? "Local SEO for Toledo businesses" : "SEO local pour les entreprises de Tolède"}
          </h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {isEn ? "Local SEO in Toledo is relatively accessible because competition is lower than in large cities. Businesses that consistently implement local SEO best practices can achieve first-page rankings within 3-6 months in many categories. The key local SEO actions for Toledo businesses are: optimising your Google Business Profile with complete information, Toledo-specific keywords and regular posts; building consistent local citations (your business listed in Spanish directories like Páginas Amarillas, Yelp ES, and local Toledo directories); creating location-specific pages on your website targeting 'service + Toledo' keywords." : "Le SEO local à Tolède est relativement accessible car la concurrence est plus faible que dans les grandes villes. Les entreprises qui mettent en œuvre de manière cohérente les meilleures pratiques de SEO local peuvent atteindre des classements en première page dans les 3 à 6 mois dans de nombreuses catégories. Les actions de SEO local clés pour les entreprises de Tolède sont : optimiser votre Google Business Profile avec des informations complètes, des mots-clés spécifiques à Tolède et des publications régulières ; construire des citations locales cohérentes (votre entreprise répertoriée dans les annuaires espagnols comme Páginas Amarillas, Yelp ES, et les annuaires locaux de Tolède) ; créer des pages spécifiques à l'emplacement sur votre site web ciblant les mots-clés 'service + Tolède'."}
          </p>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {isEn ? "Toledo also benefits from proximity to Madrid — some businesses can capture search traffic from customers searching for services in both cities. For service businesses that serve the Toledo province, creating content targeting smaller towns (Talavera de la Reina, Illescas, Madridejos) can capture additional organic traffic with very low competition." : "Tolède bénéficie également de la proximité de Madrid — certaines entreprises peuvent capturer du trafic de recherche de clients cherchant des services dans les deux villes. Pour les entreprises de services qui servent la province de Tolède, créer du contenu ciblant les villes plus petites (Talavera de la Reina, Illescas, Madridejos) peut capturer un trafic organique supplémentaire avec très peu de concurrence."}
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-primary-600 mb-4">
            {isEn ? "Google Ads in Toledo: when to invest in advertising" : "Google Ads à Tolède : quand investir dans la publicité"}
          </h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {isEn ? "Google Ads makes sense for Toledo businesses when: your average customer value is high enough to justify the cost per click (generally services worth €200+ per customer), you need results quickly (SEO takes 3-6 months, Ads can deliver leads from day one), you have specific seasonal peaks you want to amplify (summer tourism season, back to school, Christmas), or you are launching a new service and need to test demand quickly." : "Google Ads est logique pour les entreprises de Tolède quand : la valeur moyenne de votre client est suffisamment élevée pour justifier le coût par clic (généralement des services valant 200€+ par client), vous avez besoin de résultats rapidement (le SEO prend 3 à 6 mois, les Ads peuvent générer des leads dès le premier jour), vous avez des pics saisonniers spécifiques que vous voulez amplifier (saison touristique estivale, rentrée scolaire, Noël), ou vous lancez un nouveau service et avez besoin de tester la demande rapidement."}
          </p>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {isEn ? "Cost per click for Toledo keywords is generally lower than Madrid equivalents — typically 30-50% less for similar service categories. A budget of €300-500 per month can generate meaningful results for many Toledo service businesses. The key is targeting the right keywords (specific enough to attract buying intent, not so broad that you waste budget on research queries), having a landing page optimised for conversion, and tracking results precisely." : "Le coût par clic pour les mots-clés de Tolède est généralement plus bas que les équivalents de Madrid — généralement 30 à 50% de moins pour des catégories de services similaires. Un budget de 300 à 500 € par mois peut générer des résultats significatifs pour de nombreuses entreprises de services de Tolède. La clé est de cibler les bons mots-clés (suffisamment spécifiques pour attirer une intention d'achat, pas assez larges pour gaspiller le budget sur des requêtes de recherche), d'avoir une page d'atterrissage optimisée pour la conversion, et de suivre les résultats avec précision."}
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-primary-600 mb-4">
            {isEn ? "How much does digital marketing cost in Toledo" : "Combien coûte le marketing digital à Tolède"}
          </h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {isEn ? "Digital marketing investment in Toledo varies widely depending on objectives and channels. Reference budgets: basic digital presence (website + Google Business Profile setup and optimisation) — €1,500-3,000 one-time investment; local SEO ongoing management — €200-500 per month; Google Ads management + media spend — €500-1,500 per month total; social media management — €300-600 per month; comprehensive digital marketing strategy and execution — €800-2,000+ per month depending on scope." : "L'investissement en marketing digital à Tolède varie considérablement selon les objectifs et les canaux. Budgets de référence : présence numérique de base (configuration et optimisation de site web + Google Business Profile) — 1 500 à 3 000 € investissement unique ; gestion SEO local continue — 200 à 500 € par mois ; gestion Google Ads + dépenses médias — 500 à 1 500 € par mois au total ; gestion des réseaux sociaux — 300 à 600 € par mois ; stratégie et exécution complètes de marketing digital — 800 à 2 000 € + par mois selon la portée."}
          </p>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {isEn ? "The most important ROI calculation is not the absolute cost but the cost relative to the revenue generated. A Toledo law firm spending €600/month on Google Ads that generates 3 new clients per month at €1,500 average fee is achieving a 7.5x ROI before considering the lifetime value of those client relationships. Start with a clear objective, a defined budget and a measurement plan, then evaluate after 90 days whether the investment is generating acceptable returns." : "Le calcul ROI le plus important n'est pas le coût absolu mais le coût par rapport aux revenus générés. Un cabinet d'avocats de Tolède dépensant 600 €/mois sur Google Ads qui génère 3 nouveaux clients par mois à 1 500 € d'honoraires moyens atteint un ROI de 7,5x avant de considérer la valeur vie de ces relations clients. Commencez avec un objectif clair, un budget défini et un plan de mesure, puis évaluez après 90 jours si l'investissement génère des retours acceptables."}
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
      <RelatedArticles category="SEO Local" />
    </>
  );
}
