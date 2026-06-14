import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ContactForm } from "@/components/ContactForm";
import { BlogBanner } from "@/components/BlogBanner";
import { RelatedArticles } from "@/components/RelatedArticles";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const isEn = lang === "en";
  return {
    title: isEn ? "SEO in Bilbao — Web Positioning for Businesses in the Basque Country | Mkt Web 360" : "SEO à Bilbao — Positionnement Web pour les Entreprises du Pays Basque | Mkt Web 360",
    description: isEn ? "How to position your business on Google in Bilbao. Local SEO guide for the Basque Country with strategies, keywords and how to stand out in this competitive market." : "Comment positionner votre entreprise sur Google à Bilbao. Guide SEO local pour le Pays Basque avec stratégies, mots-clés et comment se démarquer dans ce marché compétitif.",
    alternates: { canonical: `https://www.mktweb360.com/${lang}/seo-bilbao-guide/` },
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
          { label: isEn ? "SEO Bilbao" : "SEO Bilbao" },
        ]} />
        <p className="text-sm text-accent-500 font-semibold mb-2">SEO Local</p>
        <h1 className="text-4xl font-bold text-primary-600 mb-4 leading-tight">
          {isEn ? "SEO in Bilbao: how to position your business on Google in the Basque Country" : "SEO à Bilbao : comment positionner votre entreprise sur Google au Pays Basque"}
        </h1>
        <p className="text-xl text-gray-500 mb-8 leading-relaxed">
          {isEn ? "Bilbao and the Basque Country have one of Spain's most sophisticated business environments. This guide explains how to compete in local search and make the most of the SEO opportunities in this unique market." : "Bilbao et le Pays Basque ont l'un des environnements commerciaux les plus sophistiqués d'Espagne. Ce guide explique comment concurrencer dans la recherche locale et tirer le meilleur parti des opportunités SEO dans ce marché unique."}
        </p>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-primary-600 mb-4">
            {isEn ? "The SEO market in Bilbao and the Basque Country" : "Le marché SEO à Bilbao et au Pays Basque"}
          </h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {isEn ? "Bilbao is the Basque Country's largest city with approximately 350,000 residents and the Greater Bilbao metropolitan area reaching 1.1 million people. The Basque Country is Spain's wealthiest autonomous community by GDP per capita, creating a market with higher average consumer spending power. The Bilbao metropolitan area encompasses Bilbao, Barakaldo, Getxo, Basauri and several other municipalities, each with their own local search behaviour." : "Bilbao est la plus grande ville du Pays Basque avec environ 350 000 résidents et la zone métropolitaine du Grand Bilbao atteignant 1,1 million de personnes. Le Pays Basque est la communauté autonome la plus riche d'Espagne par PIB par habitant, créant un marché avec un pouvoir d'achat moyen des consommateurs plus élevé. L'aire métropolitaine de Bilbao englobe Bilbao, Barakaldo, Getxo, Basauri et plusieurs autres municipalités, chacune avec son propre comportement de recherche locale."}
          </p>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {isEn ? "Bilbao has the unique characteristic of Basque language (Euskara) co-existing with Spanish. While Euskara is spoken by approximately 30% of the Basque Country population, it has a significant cultural presence and many residents who search primarily in Spanish will still have cultural connections to Basque language and identity. For businesses serving the local community, demonstrating cultural connection to the Basque Country can be a trust-building differentiator." : "Bilbao a la caractéristique unique de la langue basque (Euskara) coexistant avec l'espagnol. Bien que l'Euskara soit parlé par environ 30% de la population du Pays Basque, il a une présence culturelle significative et de nombreux résidents qui recherchent principalement en espagnol auront toujours des connexions culturelles avec la langue et l'identité basques. Pour les entreprises servant la communauté locale, démontrer une connexion culturelle avec le Pays Basque peut être un différenciateur de confiance."}
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-primary-600 mb-4">
            {isEn ? "Local SEO for Bilbao businesses" : "SEO local pour les entreprises de Bilbao"}
          </h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {isEn ? "Bilbao's local SEO environment is moderately competitive — more competitive than smaller Spanish cities but less so than Madrid or Barcelona. A well-executed local SEO strategy with consistent execution can typically achieve top-5 rankings within 6-10 months for most service categories. Key local SEO elements for Bilbao: a fully optimised Google Business Profile with Bilbao-specific keywords, consistent local citations on Spanish and Basque regional directories, and website content that specifically addresses the Bilbao and Basque Country context." : "L'environnement SEO local de Bilbao est modérément compétitif — plus compétitif que les petites villes espagnoles mais moins que Madrid ou Barcelone. Une stratégie SEO locale bien exécutée avec une exécution cohérente peut généralement atteindre des classements top-5 dans les 6 à 10 mois pour la plupart des catégories de services. Éléments SEO locaux clés pour Bilbao : un Google Business Profile entièrement optimisé avec des mots-clés spécifiques à Bilbao, des citations locales cohérentes sur les annuaires espagnols et régionaux basques, et le contenu du site web qui adresse spécifiquement le contexte de Bilbao et du Pays Basque."}
          </p>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {isEn ? "Bilbao's neighbourhoods offer targeting opportunities: Casco Viejo (old town, high tourism and hospitality), Abando (business district), Deusto (university and young professional area), Begoña, San Francisco and Bilbao La Vieja (gentrifying areas with diverse businesses). District-level targeting for both Google Business Profile service areas and website content captures searches from residents looking for services in their specific part of the city." : "Les quartiers de Bilbao offrent des opportunités de ciblage : le Casco Viejo (vieille ville, tourisme et hôtellerie élevés), Abando (quartier d'affaires), Deusto (quartier universitaire et jeunes professionnels), Begoña, San Francisco et Bilbao La Vieja (quartiers en gentrification avec des entreprises diverses). Le ciblage au niveau du quartier pour les zones de service Google Business Profile et le contenu du site capture les recherches des résidents cherchant des services dans leur partie spécifique de la ville."}
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-primary-600 mb-4">
            {isEn ? "Sectors with the most SEO opportunity in the Basque Country" : "Secteurs avec le plus d'opportunité SEO au Pays Basque"}
          </h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {isEn ? "Given the Basque Country's economic profile, sectors with strong SEO opportunity include: professional services (legal, financial, accounting — high value per client), industrial services and B2B (Bilbao has strong manufacturing and industrial sectors that increasingly search online for suppliers), technology and digital services, healthcare and wellness, gastronomy and hospitality (Bilbao's culinary reputation creates significant search volume), and architecture and premium home services (reflecting the region's higher average spending power)." : "Compte tenu du profil économique du Pays Basque, les secteurs avec une forte opportunité SEO incluent : les services professionnels (juridique, financier, comptabilité — haute valeur par client), les services industriels et B2B (Bilbao a des secteurs manufacturiers et industriels forts qui recherchent de plus en plus en ligne des fournisseurs), la technologie et les services digitaux, la santé et le bien-être, la gastronomie et l'hôtellerie (la réputation culinaire de Bilbao crée un volume de recherche significatif), et l'architecture et les services à domicile premium (reflétant le pouvoir de dépense moyen plus élevé de la région)."}
          </p>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {isEn ? "Tourism-related businesses in Bilbao have a distinctive opportunity: since the Guggenheim Museum opened in 1997, Bilbao has become one of Europe's most visited cities and a model of urban regeneration. The city attracts international visitors year-round, creating significant English-language search traffic for accommodation, restaurants and experiences. Hospitality and tourism businesses that optimise for international visitor searches can capture this additional high-value segment." : "Les entreprises liées au tourisme à Bilbao ont une opportunité distinctive : depuis l'ouverture du Musée Guggenheim en 1997, Bilbao est devenu l'une des villes les plus visitées d'Europe et un modèle de régénération urbaine. La ville attire des visiteurs internationaux tout au long de l'année, créant un trafic de recherche en anglais significatif pour l'hébergement, les restaurants et les expériences. Les entreprises d'hôtellerie et de tourisme qui optimisent pour les recherches de visiteurs internationaux peuvent capturer ce segment supplémentaire à haute valeur."}
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-primary-600 mb-4">
            {isEn ? "Google Business Profile in Bilbao" : "Google Business Profile à Bilbao"}
          </h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {isEn ? "For Bilbao businesses, Google Business Profile optimisation follows the same best practices as other cities but with Bilbao-specific elements: use Bilbao and Bizkaia in your business description and service areas, consider bilingual (Spanish/Basque) service descriptions for businesses serving the local community, highlight proximity to Bilbao landmarks (Guggenheim, Gran Vía, Arriaga Theatre, Casco Viejo) where relevant, and ensure your profile is verified and complete with all available fields filled." : "Pour les entreprises de Bilbao, l'optimisation de Google Business Profile suit les mêmes meilleures pratiques que les autres villes mais avec des éléments spécifiques à Bilbao : utilisez Bilbao et Bizkaia dans votre description d'entreprise et vos zones de service, envisagez des descriptions de services bilingues (espagnol/basque) pour les entreprises servant la communauté locale, mettez en avant la proximité des points de repère de Bilbao (Guggenheim, Gran Vía, Théâtre Arriaga, Casco Viejo) où pertinent, et assurez-vous que votre profil est vérifié et complet avec tous les champs disponibles remplis."}
          </p>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {isEn ? "Reviews are especially important in Bilbao's trust-oriented business culture. The Basque Country has a strong tradition of quality and craftsmanship, and potential customers research carefully before choosing a supplier. A profile with 30+ recent, detailed reviews in both Spanish and Basque signals both quality and local authenticity. Encourage reviews from clients and respond personally to each one — this visibility is particularly valued by Bilbao's discerning local market." : "Les avis sont particulièrement importants dans la culture commerciale orientée vers la confiance de Bilbao. Le Pays Basque a une forte tradition de qualité et d'artisanat, et les clients potentiels font des recherches soigneusement avant de choisir un fournisseur. Un profil avec 30+ avis récents et détaillés en espagnol et en basque signale à la fois la qualité et l'authenticité locale. Encouragez les avis de clients et répondez personnellement à chacun — cette visibilité est particulièrement appréciée par le marché local exigeant de Bilbao."}
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-primary-600 mb-4">
            {isEn ? "How to start positioning your business in Bilbao" : "Comment commencer à positionner votre entreprise à Bilbao"}
          </h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {isEn ? "The practical SEO starting sequence for a Bilbao business: 1) Claim and fully optimise your Google Business Profile — complete all fields, add the maximum number of photos, create your first posts. 2) Verify that your website loads in under 3 seconds on mobile and is fully mobile-responsive. 3) Create or update your primary service page targeting '[service] Bilbao' as the primary keyword. 4) Build consistent citations on Spanish directories (Páginas Amarillas, Yelp ES, TripAdvisor if applicable) and Basque regional directories. 5) Begin systematic review collection." : "La séquence de démarrage SEO pratique pour une entreprise de Bilbao : 1) Revendiquez et optimisez complètement votre Google Business Profile — remplissez tous les champs, ajoutez le maximum de photos, créez vos premiers posts. 2) Vérifiez que votre site web se charge en moins de 3 secondes sur mobile et est entièrement adapté aux mobiles. 3) Créez ou mettez à jour votre page de service principale ciblant '[service] Bilbao' comme mot-clé principal. 4) Construisez des citations cohérentes sur les annuaires espagnols (Páginas Amarillas, Yelp ES, TripAdvisor si applicable) et les annuaires régionaux basques. 5) Commencez la collecte systématique d'avis."}
          </p>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {isEn ? "Bilbao's B2B market is particularly interesting for content marketing: Basque Country businesses actively search for reliable, quality suppliers and partners. Creating detailed, expert content about your sector that addresses specifically the context of doing business in the Basque Country can establish genuine thought leadership and generate high-quality inbound enquiries from the region's substantial business community." : "Le marché B2B de Bilbao est particulièrement intéressant pour le marketing de contenu : les entreprises du Pays Basque recherchent activement des fournisseurs et partenaires fiables et de qualité. Créer du contenu détaillé et expert sur votre secteur qui adresse spécifiquement le contexte de faire des affaires au Pays Basque peut établir un véritable leadership d'opinion et générer des demandes entrantes de haute qualité de la substantielle communauté d'affaires de la région."}
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
