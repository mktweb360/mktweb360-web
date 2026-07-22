import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ContactForm } from "@/components/ContactForm";
import { BlogBanner } from "@/components/BlogBanner";
import { RelatedArticles } from "@/components/RelatedArticles";
import { alternatesFor } from "@/lib/i18n/routes";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const isEn = lang === "en";
  return {
    title: isEn ? "Digital Marketing for Businesses in Barcelona — Practical Guide | Mkt Web 360" : "Marketing Digital pour les Entreprises à Barcelone — Guide Pratique | Mkt Web 360",
    description: isEn ? "Digital marketing strategy for businesses in Barcelona. What works in the Catalan market, how to do local SEO and choose a digital agency in Barcelona." : "Stratégie de marketing digital pour les entreprises à Barcelone. Ce qui fonctionne sur le marché catalan, comment faire du SEO local et choisir une agence digitale à Barcelone.",
    alternates: alternatesFor(`/${lang}/digital-marketing-barcelona/`) ?? {
      canonical: `https://www.mktweb360.com/${lang}/digital-marketing-barcelona/`,
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
          { label: isEn ? "Digital marketing Barcelona" : "Marketing digital Barcelone" },
        ]} />
        <p className="text-sm text-accent-500 font-semibold mb-2">SEO Local</p>
        <h1 className="text-4xl font-bold text-primary-600 mb-4 leading-tight">
          {isEn ? "Digital marketing for businesses in Barcelona: what works and what doesn't in the Catalan market" : "Marketing digital pour les entreprises à Barcelone : ce qui fonctionne et ce qui ne fonctionne pas sur le marché catalan"}
        </h1>
        <p className="text-xl text-gray-500 mb-8 leading-relaxed">
          {isEn ? "Barcelona is Spain's most international digital market, with unique characteristics: bilingual search behaviour, a highly competitive agency landscape, and both local and international audiences to reach." : "Barcelone est le marché digital le plus international d'Espagne, avec des caractéristiques uniques : comportement de recherche bilingue, un paysage d'agences très concurrentiel, et des audiences locales et internationales à atteindre."}
        </p>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-primary-600 mb-4">
            {isEn ? "Barcelona's digital business ecosystem" : "L'écosystème commercial digital de Barcelone"}
          </h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {isEn ? "Barcelona has over 1.6 million residents in the city proper and around 5 million in the metropolitan area. It is Spain's primary hub for international business, startup activity and tourism, creating a digital marketing environment that differs significantly from other Spanish cities. The market is more sophisticated, more competitive and more expensive than other regions — but also has more potential customers, higher average spending power and a larger pool of marketing talent and technology." : "Barcelone a plus de 1,6 million de résidents dans la ville proprement dite et environ 5 millions dans la zone métropolitaine. C'est le principal centre espagnol pour les affaires internationales, l'activité des startups et le tourisme, créant un environnement de marketing digital qui diffère significativement des autres villes espagnoles. Le marché est plus sophistiqué, plus compétitif et plus coûteux que les autres régions — mais a aussi plus de clients potentiels, un pouvoir d'achat moyen plus élevé et un plus grand bassin de talents en marketing et technologie."}
          </p>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {isEn ? "The bilingual nature of Barcelona is a unique consideration for digital marketing. Many residents search in both Catalan and Spanish, and some primarily in Catalan. For businesses targeting local Barcelona residents (rather than tourists or national customers), creating content in both Spanish and Catalan is a genuine competitive advantage. Google indexes and ranks Catalan content for Catalan-language queries, and competition for Catalan keywords is often lower than for Spanish equivalents." : "La nature bilingue de Barcelone est une considération unique pour le marketing digital. De nombreux résidents recherchent à la fois en catalan et en espagnol, et certains principalement en catalan. Pour les entreprises ciblant les résidents locaux de Barcelone (plutôt que les touristes ou les clients nationaux), créer du contenu à la fois en espagnol et en catalan est un réel avantage compétitif. Google indexe et classe le contenu catalan pour les requêtes en langue catalane, et la concurrence pour les mots-clés catalans est souvent plus faible que pour les équivalents espagnols."}
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-primary-600 mb-4">
            {isEn ? "SEO for businesses in Barcelona: opportunities and competition" : "SEO pour les entreprises à Barcelone : opportunités et concurrence"}
          </h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {isEn ? "Barcelona SEO is significantly more competitive than other Spanish cities. For many service categories, ranking in the top 5 organic results for high-volume keywords requires substantial domain authority, quality backlinks and comprehensive content. Local SEO (targeting the Google Maps pack) is more accessible — well-optimised Google Business Profiles with strong review signals can compete even against larger, more established businesses." : "Le SEO de Barcelone est significativement plus compétitif que les autres villes espagnoles. Pour de nombreuses catégories de services, se classer dans les 5 premiers résultats organiques pour des mots-clés à volume élevé nécessite une autorité de domaine substantielle, des backlinks de qualité et un contenu complet. Le SEO local (ciblant le pack Google Maps) est plus accessible — des Google Business Profiles bien optimisés avec de forts signaux d'avis peuvent concurrencer même des entreprises plus grandes et plus établies."}
          </p>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {isEn ? "The SEO strategy that works in Barcelona: focus on specific neighbourhoods and districts (Eixample, Gràcia, Sarrià, Poble Sec, etc.) rather than 'Barcelona' broadly; target long-tail keywords that are less competitive; build authority through local partnerships, mentions in local Barcelona media and neighbourhood association directories; and create comprehensive content that genuinely serves Barcelona residents better than generic national content." : "La stratégie SEO qui fonctionne à Barcelone : concentrez-vous sur des quartiers et districts spécifiques (Eixample, Gràcia, Sarrià, Poble Sec, etc.) plutôt que sur 'Barcelone' en général ; ciblez des mots-clés à longue traîne qui sont moins compétitifs ; construisez de l'autorité via des partenariats locaux, des mentions dans les médias locaux de Barcelone et les annuaires des associations de quartier ; et créez du contenu complet qui sert genuinement les résidents de Barcelone mieux que le contenu national générique."}
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-primary-600 mb-4">
            {isEn ? "Google Ads in Barcelona: when to invest" : "Google Ads à Barcelone : quand investir"}
          </h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {isEn ? "Google Ads in Barcelona is more expensive than other Spanish cities — cost per click for competitive service keywords can be 2-3x higher than in cities like Toledo or Valencia. This means Barcelona Ads campaigns require higher budgets to generate comparable results and must be run with more precision. The minimum effective budget for most service businesses in Barcelona is €600-1,000 per month in media spend." : "Google Ads à Barcelone est plus cher que les autres villes espagnoles — le coût par clic pour les mots-clés de services compétitifs peut être 2 à 3 fois plus élevé que dans des villes comme Tolède ou Valence. Cela signifie que les campagnes Ads de Barcelone nécessitent des budgets plus élevés pour générer des résultats comparables et doivent être gérées avec plus de précision. Le budget minimum efficace pour la plupart des entreprises de services à Barcelone est de 600 à 1 000 € par mois en dépenses médias."}
          </p>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {isEn ? "Google Ads makes most sense for Barcelona businesses with high customer lifetime value (professional services, real estate, medical), strong seasonal demand (tourism, events, retail), or direct-response ecommerce. Campaigns must be tightly structured with specific ad groups for each service, tight negative keyword lists, and conversion tracking to identify which keywords generate actual customers, not just clicks." : "Google Ads est le plus logique pour les entreprises de Barcelone avec une valeur vie client élevée (services professionnels, immobilier, médical), une forte demande saisonnière (tourisme, événements, commerce de détail), ou l'e-commerce à réponse directe. Les campagnes doivent être étroitement structurées avec des groupes d'annonces spécifiques pour chaque service, des listes de mots-clés négatifs serrées, et un suivi des conversions pour identifier quels mots-clés génèrent de vrais clients, pas seulement des clics."}
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-primary-600 mb-4">
            {isEn ? "Social media for Barcelona businesses" : "Réseaux sociaux pour les entreprises de Barcelone"}
          </h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {isEn ? "Barcelona's social media landscape is vibrant and competitive. Instagram is the dominant visual platform for consumer businesses, with Barcelona's photogenic architecture, food scene and lifestyle providing excellent content material. LinkedIn is strong for B2B, particularly in the technology, startup and financial sectors concentrated in Barcelona's innovation districts (22@ district). TikTok has grown rapidly among younger Barcelona audiences." : "Le paysage des réseaux sociaux de Barcelone est vivant et compétitif. Instagram est la plateforme visuelle dominante pour les entreprises grand public, avec l'architecture photogénique de Barcelone, la scène gastronomique et le style de vie offrant d'excellents matériaux de contenu. LinkedIn est fort pour le B2B, particulièrement dans les secteurs de la technologie, des startups et de la finance concentrés dans les districts d'innovation de Barcelone (quartier 22@). TikTok a connu une croissance rapide parmi les audiences jeunes de Barcelone."}
          </p>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {isEn ? "For Barcelona businesses targeting local customers, community and neighbourhood groups on Facebook and WhatsApp remain important for word-of-mouth amplification. Local influencers (particularly lifestyle, food and travel influencers based in Barcelona) can provide credible endorsements to large local followings at costs that are proportionate to a small or medium business's marketing budget." : "Pour les entreprises de Barcelone ciblant les clients locaux, les groupes communautaires et de quartier sur Facebook et WhatsApp restent importants pour l'amplification du bouche-à-oreille. Les influenceurs locaux (notamment les influenceurs lifestyle, gastronomiques et de voyage basés à Barcelone) peuvent fournir des recommandations crédibles à de grandes audiences locales à des coûts proportionnels au budget marketing d'une petite ou moyenne entreprise."}
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-primary-600 mb-4">
            {isEn ? "How to choose a digital marketing agency for your business in Barcelona" : "Comment choisir une agence de marketing digital pour votre entreprise à Barcelone"}
          </h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {isEn ? "Barcelona has hundreds of digital marketing agencies, from large international firms to small local specialists. Key evaluation criteria: relevant sector experience (have they worked with businesses in your industry?), demonstrable local market knowledge (do they understand Barcelona's neighbourhoods, demographics and bilingual market?), transparent pricing and deliverables, a portfolio of real case studies with measurable results, and clear communication in your preferred language (Spanish, Catalan or English)." : "Barcelone compte des centaines d'agences de marketing digital, des grandes entreprises internationales aux petits spécialistes locaux. Critères d'évaluation clés : expérience sectorielle pertinente (ont-ils travaillé avec des entreprises de votre secteur ?), connaissance démontrable du marché local (comprennent-ils les quartiers de Barcelone, les démographies et le marché bilingue ?), tarification et livrables transparents, un portefeuille de vrais cas d'études avec des résultats mesurables, et une communication claire dans votre langue préférée (espagnol, catalan ou anglais)."}
          </p>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {isEn ? "Avoid agencies that: cannot show you real results for clients in similar sectors, require long-term contracts without performance milestones, cannot explain their strategy in plain terms, or focus primarily on activity metrics (posts published, emails sent) rather than business results (leads generated, revenue attributed to digital channels). The Barcelona market has many options — take the time to evaluate 3-4 before choosing." : "Évitez les agences qui : ne peuvent pas vous montrer de vrais résultats pour des clients dans des secteurs similaires, exigent des contrats à long terme sans jalons de performance, ne peuvent pas expliquer leur stratégie en termes simples, ou se concentrent principalement sur des métriques d'activité (posts publiés, emails envoyés) plutôt que sur les résultats commerciaux (leads générés, revenus attribués aux canaux digitaux). Le marché de Barcelone a de nombreuses options — prenez le temps d'en évaluer 3 à 4 avant de choisir."}
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
