import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ContactForm } from "@/components/ContactForm";
import { BlogBanner } from "@/components/BlogBanner";
import { RelatedArticles } from "@/components/RelatedArticles";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const isEn = lang === "en";
  return {
    title: isEn ? "SEO in Madrid — Web Positioning for Businesses and Companies | Mkt Web 360" : "SEO à Madrid — Positionnement Web pour les Entreprises | Mkt Web 360",
    description: isEn ? "How to position your business on Google in Madrid. Complete guide to SEO in Spain's most competitive market with strategies, sectors and how to choose an agency." : "Comment positionner votre entreprise sur Google à Madrid. Guide complet du SEO dans le marché le plus compétitif d'Espagne avec stratégies, secteurs et comment choisir une agence.",
    alternates: { canonical: `https://www.mktweb360.com/${lang}/seo-madrid-guide/` },
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
          { label: isEn ? "SEO Madrid" : "SEO Madrid" },
        ]} />
        <p className="text-sm text-accent-500 font-semibold mb-2">SEO Local</p>
        <h1 className="text-4xl font-bold text-primary-600 mb-4 leading-tight">
          {isEn ? "SEO in Madrid: how to position your business in Google in the most competitive market in Spain" : "SEO à Madrid : comment positionner votre entreprise sur Google dans le marché le plus compétitif d'Espagne"}
        </h1>
        <p className="text-xl text-gray-500 mb-8 leading-relaxed">
          {isEn ? "SEO in Madrid requires a more sophisticated approach than in other Spanish cities. This guide explains the strategies that work in Spain's most competitive digital market and how to find your competitive advantage." : "Le SEO à Madrid nécessite une approche plus sophistiquée que dans les autres villes espagnoles. Ce guide explique les stratégies qui fonctionnent dans le marché digital le plus compétitif d'Espagne et comment trouver votre avantage compétitif."}
        </p>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-primary-600 mb-4">
            {isEn ? "The SEO market in Madrid: competition and opportunities" : "Le marché SEO à Madrid : concurrence et opportunités"}
          </h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {isEn ? "Madrid is Spain's largest city with over 3.3 million residents in the city and 6.7 million in the metropolitan area. It is the country's business capital, home to the headquarters of most major Spanish companies, international firms' Spanish operations, and the highest concentration of digital marketing agencies and SEO specialists in Spain. This creates a uniquely competitive SEO environment: competition for high-value keywords is intense, domain authority requirements are high, and the cost of professional SEO services reflects the market's sophistication." : "Madrid est la plus grande ville d'Espagne avec plus de 3,3 millions de résidents dans la ville et 6,7 millions dans l'aire métropolitaine. C'est la capitale économique du pays, siège des quartiers généraux de la plupart des grandes entreprises espagnoles, des opérations espagnoles des entreprises internationales, et la plus haute concentration d'agences de marketing digital et de spécialistes SEO en Espagne. Cela crée un environnement SEO unique en termes de compétitivité : la concurrence pour les mots-clés à haute valeur est intense, les exigences d'autorité de domaine sont élevées, et le coût des services SEO professionnels reflète la sophistication du marché."}
          </p>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {isEn ? "Despite the competition, opportunities exist — especially for businesses willing to invest consistently over 12+ months. The volume of searches is enormous (Madrid search volumes are 3-5x those of other major Spanish cities for equivalent categories), so even a modest ranking improvement can generate significant traffic. Additionally, many Madrid businesses, particularly SMEs, still underinvest in SEO, leaving gaps for well-executed strategies to exploit." : "Malgré la concurrence, des opportunités existent — notamment pour les entreprises prêtes à investir de manière cohérente sur 12+ mois. Le volume de recherches est énorme (les volumes de recherche de Madrid sont 3 à 5 fois ceux des autres grandes villes espagnoles pour des catégories équivalentes), donc même une modeste amélioration du classement peut générer un trafic significatif. De plus, de nombreuses entreprises madrilènes, notamment les PME, sous-investissent encore dans le SEO, laissant des lacunes pour des stratégies bien exécutées à exploiter."}
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-primary-600 mb-4">
            {isEn ? "Local SEO vs national SEO for Madrid businesses" : "SEO local vs SEO national pour les entreprises de Madrid"}
          </h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {isEn ? "Many Madrid businesses face a strategic choice: invest in local SEO (targeting Madrid-specific searches via Google Business Profile and localised content) or national SEO (targeting non-geographic keywords that can attract customers from all over Spain). The right answer depends on your business model: for services consumed locally (restaurants, clinics, real estate agents, local shops), local SEO is the priority. For services that can be delivered nationally (professional services, software, ecommerce), national SEO may offer better ROI." : "De nombreuses entreprises madrilènes font face à un choix stratégique : investir dans le SEO local (ciblant les recherches spécifiques à Madrid via Google Business Profile et le contenu localisé) ou le SEO national (ciblant des mots-clés non-géographiques qui peuvent attirer des clients de toute l'Espagne). La bonne réponse dépend de votre modèle commercial : pour les services consommés localement (restaurants, cliniques, agents immobiliers, boutiques locales), le SEO local est la priorité. Pour les services pouvant être fournis nationalement (services professionnels, logiciels, e-commerce), le SEO national peut offrir un meilleur ROI."}
          </p>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {isEn ? "Local SEO in Madrid benefits from Madrid's neighbourhood specificity — many residents search by district (Salamanca, Malasaña, Chamberí, Vallecas, etc.) rather than just 'Madrid'. A plumber in Chamberí who ranks for 'fontanero Chamberí' will get highly targeted, high-converting traffic. This neighbourhood-level targeting is a Madrid-specific strategy that has no equivalent in smaller cities." : "Le SEO local à Madrid bénéficie de la spécificité des quartiers de Madrid — de nombreux résidents recherchent par quartier (Salamanca, Malasaña, Chamberí, Vallecas, etc.) plutôt que juste 'Madrid'. Un plombier à Chamberí qui se classe pour 'fontanero Chamberí' obtiendra un trafic très ciblé et à haute conversion. Ce ciblage au niveau du quartier est une stratégie spécifique à Madrid qui n'a pas d'équivalent dans les villes plus petites."}
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-primary-600 mb-4">
            {isEn ? "Sectors with the most SEO opportunity in Madrid" : "Secteurs avec le plus d'opportunité SEO à Madrid"}
          </h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {isEn ? "Despite the general competitiveness, some Madrid sectors have better SEO opportunity ratios than others. High opportunity sectors: neighbourhood services (where district-level targeting reduces competition), professional services in niche practice areas (where national competition is lower), B2B services targeting Madrid's corporate sector (often undersupplied with quality content), and businesses in emerging Madrid neighbourhoods (where digital presence development is less mature)." : "Malgré la compétitivité générale, certains secteurs de Madrid ont de meilleurs ratios d'opportunité SEO que d'autres. Secteurs à haute opportunité : les services de quartier (où le ciblage au niveau du district réduit la concurrence), les services professionnels dans des domaines de pratique de niche (où la concurrence nationale est plus faible), les services B2B ciblant le secteur corporatif de Madrid (souvent sous-approvisionnés en contenu de qualité), et les entreprises dans les quartiers émergents de Madrid (où le développement de la présence numérique est moins mature)."}
          </p>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {isEn ? "Sectors where Madrid SEO is most difficult: legal services (saturated with national and Madrid firms investing heavily in SEO), financial services, insurance, healthcare (dominated by national chains with massive SEO budgets), and real estate (some of the most competitive keywords in Spain). In these sectors, expect a 12-24 month timeline before seeing significant organic results, and consider whether Google Ads provides a faster path to ROI while SEO develops." : "Secteurs où le SEO de Madrid est le plus difficile : les services juridiques (saturés avec des entreprises nationales et madrilènes investissant massivement dans le SEO), les services financiers, les assurances, la santé (dominée par des chaînes nationales avec d'énormes budgets SEO), et l'immobilier (certains des mots-clés les plus compétitifs d'Espagne). Dans ces secteurs, attendez-vous à un calendrier de 12 à 24 mois avant de voir des résultats organiques significatifs, et envisagez si Google Ads offre un chemin plus rapide vers le ROI pendant que le SEO se développe."}
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-primary-600 mb-4">
            {isEn ? "Key local ranking factors in Madrid" : "Facteurs de classement local clés à Madrid"}
          </h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {isEn ? "For Madrid local SEO, the factors that differentiate top rankings from middle-page rankings: review volume and quality (50+ recent reviews consistently outperform profiles with fewer reviews), engagement metrics (how many people click, call or request directions from your Business Profile), photo freshness (profiles with regularly updated photos rank better), post frequency, and response rate to reviews and Q&A. These signals are directly actionable without technical SEO expertise." : "Pour le SEO local de Madrid, les facteurs qui différencient les classements du haut de la page des classements de page du milieu : volume et qualité des avis (50+ avis récents surclassent systématiquement les profils avec moins d'avis), métriques d'engagement (combien de personnes cliquent, appellent ou demandent des itinéraires depuis votre Business Profile), fraîcheur des photos (les profils avec des photos régulièrement mises à jour se classent mieux), fréquence des posts, et taux de réponse aux avis et Q&A. Ces signaux sont directement actionnables sans expertise SEO technique."}
          </p>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {isEn ? "For organic (non-maps) local SEO in Madrid, the most critical factors are: domain authority (built through quality backlinks from relevant Madrid and Spanish sources), content quality and comprehensiveness (Madrid searchers have higher expectations than smaller-market audiences), technical SEO (site speed, Core Web Vitals, mobile optimisation are table stakes in a sophisticated market), and topical authority (being recognised as an expert source on your topic area through depth and breadth of relevant content)." : "Pour le SEO local organique (non-maps) à Madrid, les facteurs les plus critiques sont : l'autorité de domaine (construite grâce à des backlinks de qualité provenant de sources madrilènes et espagnoles pertinentes), la qualité et l'exhaustivité du contenu (les chercheurs de Madrid ont des attentes plus élevées que les audiences des marchés plus petits), le SEO technique (vitesse du site, Core Web Vitals, optimisation mobile sont des prérequis dans un marché sophistiqué), et l'autorité thématique (être reconnu comme source experte sur votre domaine thématique grâce à la profondeur et l'étendue du contenu pertinent)."}
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-primary-600 mb-4">
            {isEn ? "How to choose an SEO agency for your business in Madrid" : "Comment choisir une agence SEO pour votre entreprise à Madrid"}
          </h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {isEn ? "Madrid has the highest concentration of SEO agencies in Spain — from large, international digital marketing firms to specialised boutique SEO agencies to individual freelancers. The quality range is enormous. Key differentiators to look for: demonstrated ability to rank competitive Madrid keywords (not just small-city campaigns), transparent reporting with keyword ranking data and organic traffic trends, clear methodology that goes beyond just 'content and links', and references from businesses in your sector who can speak to results." : "Madrid a la plus haute concentration d'agences SEO en Espagne — des grandes entreprises de marketing digital internationales aux agences SEO boutique spécialisées en passant par les freelances individuels. La plage de qualité est énorme. Différenciateurs clés à rechercher : capacité démontrée à classer des mots-clés de Madrid compétitifs (pas seulement des campagnes de petites villes), rapports transparents avec données de classement des mots-clés et tendances du trafic organique, méthodologie claire qui va au-delà du simple 'contenu et liens', et références d'entreprises de votre secteur pouvant témoigner des résultats."}
          </p>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {isEn ? "Red flags specific to the Madrid SEO market: agencies that promise first-page rankings for competitive keywords within 3 months (not realistic in Madrid's competitive market), agencies whose own website ranks poorly for their own target keywords, and agencies that rely entirely on low-quality link building or AI-generated content without real editorial value. Madrid's SEO market is sophisticated — your agency should be too." : "Signaux d'alarme spécifiques au marché SEO de Madrid : agences qui promettent des classements en première page pour des mots-clés compétitifs dans les 3 mois (pas réaliste dans le marché compétitif de Madrid), agences dont le propre site se classe mal pour leurs propres mots-clés cibles, et agences qui s'appuient entièrement sur du link building de faible qualité ou du contenu généré par IA sans réelle valeur éditoriale. Le marché SEO de Madrid est sophistiqué — votre agence doit l'être aussi."}
          </p>
        </section>

        <BlogBanner variant="seo" />
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
