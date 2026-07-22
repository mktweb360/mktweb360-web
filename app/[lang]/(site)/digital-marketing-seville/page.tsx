import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ContactForm } from "@/components/ContactForm";
import { BlogBanner } from "@/components/BlogBanner";
import { RelatedArticles } from "@/components/RelatedArticles";
import { alternatesFor } from "@/lib/i18n/routes";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const isEn = lang === "en";
  return {
    title: isEn ? "Digital Marketing for Businesses in Seville — Practical Guide | Mkt Web 360" : "Marketing Digital pour les Entreprises à Séville — Guide Pratique | Mkt Web 360",
    description: isEn ? "How to grow online if you have a business in Seville. Digital marketing guide with local SEO, Google Ads, best channels and how to choose a digital agency." : "Comment croître en ligne si vous avez une entreprise à Séville. Guide de marketing digital avec SEO local, Google Ads, meilleurs canaux et comment choisir une agence digitale.",
    alternates: alternatesFor(`/${lang}/digital-marketing-seville/`) ?? {
      canonical: `https://www.mktweb360.com/${lang}/digital-marketing-seville/`,
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
          { label: isEn ? "Digital marketing Seville" : "Marketing digital Séville" },
        ]} />
        <p className="text-sm text-accent-500 font-semibold mb-2">SEO Local</p>
        <h1 className="text-4xl font-bold text-primary-600 mb-4 leading-tight">
          {isEn ? "Digital marketing for businesses in Seville: how to grow online in the Andalusian capital" : "Marketing digital pour les entreprises à Séville : comment croître en ligne dans la capitale andalouse"}
        </h1>
        <p className="text-xl text-gray-500 mb-8 leading-relaxed">
          {isEn ? "Seville is one of Spain's most dynamic markets for local businesses. A city of tradition with a rapidly growing digital economy, it offers significant opportunities for businesses that invest in digital marketing." : "Séville est l'un des marchés les plus dynamiques d'Espagne pour les entreprises locales. Une ville de tradition avec une économie digitale en croissance rapide, elle offre des opportunités significatives pour les entreprises qui investissent dans le marketing digital."}
        </p>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-primary-600 mb-4">
            {isEn ? "The digital market in Seville and Andalusia" : "Le marché digital à Séville et en Andalousie"}
          </h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {isEn ? "Seville is the capital of Andalusia and Spain's fourth largest city, with approximately 690,000 residents in the city and nearly 2 million in its metropolitan area. It serves as the economic and cultural capital of southern Spain, with a strong tourism sector (over 3 million visitors per year), a growing technology and services sector, and a substantial local consumer market. The digital marketing ecosystem in Seville is less developed than Madrid or Barcelona, creating genuine first-mover advantages for digitally-active businesses." : "Séville est la capitale de l'Andalousie et la quatrième plus grande ville d'Espagne, avec environ 690 000 résidents dans la ville et près de 2 millions dans son aire métropolitaine. Elle sert de capitale économique et culturelle du sud de l'Espagne, avec un secteur touristique fort (plus de 3 millions de visiteurs par an), un secteur technologique et de services en croissance, et un marché de consommateurs locaux substantiel. L'écosystème de marketing digital à Séville est moins développé que Madrid ou Barcelone, créant de véritables avantages de premier entrant pour les entreprises actives numériquement."}
          </p>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {isEn ? "Seville's economy is driven by public administration and services, tourism, commerce and construction. Sectors with the highest digital marketing potential include: hospitality and restaurants (capturing both local and tourist audiences), professional services (legal, accounting, architecture), healthcare, education and training, real estate, and retail. The growing tech hub around the Cartuja technology park is also creating demand for B2B digital marketing services." : "L'économie de Séville est portée par l'administration publique et les services, le tourisme, le commerce et la construction. Les secteurs avec le plus grand potentiel de marketing digital incluent : l'hôtellerie et la restauration (capturer à la fois les audiences locales et touristiques), les services professionnels (juridique, comptabilité, architecture), la santé, l'éducation et la formation, l'immobilier et le commerce de détail. Le hub technologique en croissance autour du parc technologique de Cartuja crée également une demande pour les services de marketing digital B2B."}
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-primary-600 mb-4">
            {isEn ? "SEO for businesses in Seville" : "SEO pour les entreprises à Séville"}
          </h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {isEn ? "Seville's SEO competitive landscape is between Toledo and Madrid in difficulty — more competitive than smaller cities but significantly less so than the national capitals. A well-executed local SEO strategy can achieve page 1 rankings within 4-8 months for most service categories. The key ranking factors are the same as elsewhere: optimised Google Business Profile, consistent local citations, quality backlinks from relevant local and Andalusian sources, and content that genuinely serves Seville searchers better than generic national content." : "Le paysage concurrentiel SEO de Séville se situe entre Tolède et Madrid en difficulté — plus compétitif que les petites villes mais significativement moins que les capitales nationales. Une stratégie SEO locale bien exécutée peut atteindre des classements en page 1 dans les 4 à 8 mois pour la plupart des catégories de services. Les facteurs de classement clés sont les mêmes qu'ailleurs : Google Business Profile optimisé, citations locales cohérentes, backlinks de qualité provenant de sources locales et andalouses pertinentes, et contenu qui sert genuinement les chercheurs de Séville mieux que le contenu national générique."}
          </p>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {isEn ? "Seville-specific SEO opportunities: create content targeting Seville's distinctive neighbourhoods (Triana, Santa Cruz, Nervión, Macarena, Los Remedios), leverage Seville's event calendar (Feria de Abril, Semana Santa, Bienal de Flamenco) for seasonal content, target Seville's proximity to other Andalusian cities for service businesses willing to serve the region, and build relationships with Seville-based media and bloggers for local link building." : "Opportunités SEO spécifiques à Séville : créez du contenu ciblant les quartiers distinctifs de Séville (Triana, Santa Cruz, Nervión, Macarena, Los Remedios), tirez parti du calendrier d'événements de Séville (Feria de Abril, Semana Santa, Bienal de Flamenco) pour du contenu saisonnier, ciblez la proximité de Séville avec d'autres villes andalouses pour les entreprises de services prêtes à servir la région, et construisez des relations avec les médias et blogueurs basés à Séville pour le link building local."}
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-primary-600 mb-4">
            {isEn ? "Google Ads in Seville: sectors with the best return" : "Google Ads à Séville : secteurs avec le meilleur retour"}
          </h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {isEn ? "Google Ads in Seville offers good value compared to Madrid or Barcelona — cost per click is typically 20-40% lower for equivalent service keywords. The sectors where Google Ads generates the strongest ROI in Seville: legal services (high value per client), dental and medical (strong intent keywords), home services (plumbing, electrical, cleaning), real estate, and event venues and catering. Tourism-adjacent businesses can also benefit from Ads targeting visitors planning trips to Seville." : "Google Ads à Séville offre un bon rapport qualité-prix comparé à Madrid ou Barcelone — le coût par clic est généralement 20 à 40% inférieur pour les mots-clés de services équivalents. Les secteurs où Google Ads génère le ROI le plus fort à Séville : services juridiques (haute valeur par client), dentaire et médical (mots-clés à forte intention), services à domicile (plomberie, électricité, nettoyage), immobilier, et lieux d'événements et traiteur. Les entreprises adjacentes au tourisme peuvent également bénéficier d'Ads ciblant les visiteurs planifiant des voyages à Séville."}
          </p>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {isEn ? "A common mistake in Seville Google Ads campaigns: targeting keywords that are too broad and capturing non-converting traffic from people across Spain researching services rather than people in Seville ready to buy. Use location targeting to limit your ads to the Seville metropolitan area, and use specific local keywords ('abogado laboralista Sevilla', not just 'abogado laboralista') to ensure your budget reaches the most relevant local searchers." : "Une erreur courante dans les campagnes Google Ads de Séville : cibler des mots-clés trop larges et capturer du trafic non convertissant de personnes à travers l'Espagne qui recherchent des services plutôt que des personnes à Séville prêtes à acheter. Utilisez le ciblage géographique pour limiter vos annonces à l'aire métropolitaine de Séville, et utilisez des mots-clés locaux spécifiques ('abogado laboralista Sevilla', pas seulement 'abogado laboralista') pour vous assurer que votre budget atteint les chercheurs locaux les plus pertinents."}
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-primary-600 mb-4">
            {isEn ? "Social media for Seville businesses" : "Réseaux sociaux pour les entreprises de Séville"}
          </h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {isEn ? "Seville has a strong social media culture, particularly on Instagram and Facebook. Instagram is ideal for businesses with visual appeal: restaurants and tapas bars, fashion and lifestyle shops, wedding venues, hotels and tourism experiences. Seville's aesthetic (Moorish architecture, orange trees, flamenco, spring festivals) provides exceptional content material that travels well on visual platforms." : "Séville a une forte culture des réseaux sociaux, notamment sur Instagram et Facebook. Instagram est idéal pour les entreprises avec un attrait visuel : restaurants et bars à tapas, boutiques de mode et de lifestyle, lieux de mariage, hôtels et expériences touristiques. L'esthétique de Séville (architecture maure, orangers, flamenco, festivals du printemps) fournit un matériel de contenu exceptionnel qui voyage bien sur les plateformes visuelles."}
          </p>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {isEn ? "Facebook groups for Seville neighbourhoods and interest communities are particularly active and provide opportunities for organic engagement and word-of-mouth. For B2B businesses, LinkedIn has a growing but still relatively small professional community in Seville — there is more opportunity to stand out as a thought leader in Seville's B2B LinkedIn community than in more saturated cities like Madrid or Barcelona." : "Les groupes Facebook pour les quartiers et communautés d'intérêt de Séville sont particulièrement actifs et offrent des opportunités d'engagement organique et de bouche-à-oreille. Pour les entreprises B2B, LinkedIn a une communauté professionnelle croissante mais encore relativement petite à Séville — il y a plus d'opportunité de se démarquer comme leader d'opinion dans la communauté LinkedIn B2B de Séville que dans des villes plus saturées comme Madrid ou Barcelone."}
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-primary-600 mb-4">
            {isEn ? "How to choose your digital marketing agency in Seville" : "Comment choisir votre agence de marketing digital à Séville"}
          </h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {isEn ? "Seville has a growing number of digital marketing agencies and freelancers. When evaluating options, look for: genuine local market knowledge (not just generic digital marketing credentials), specific experience in your sector, transparent monthly reporting with metrics tied to business results, references from local businesses you can speak to, and a clear explanation of their strategy and how it addresses Seville's specific market characteristics." : "Séville a un nombre croissant d'agences de marketing digital et de freelances. Lors de l'évaluation des options, recherchez : une vraie connaissance du marché local (pas seulement des accréditations génériques en marketing digital), une expérience spécifique dans votre secteur, des rapports mensuels transparents avec des métriques liées aux résultats commerciaux, des références d'entreprises locales à qui vous pouvez parler, et une explication claire de leur stratégie et comment elle adresse les caractéristiques spécifiques du marché de Séville."}
          </p>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {isEn ? "Working with an agency outside Seville (from Madrid or elsewhere in Spain) is also a viable option — digital marketing services can be delivered remotely, and a larger agency may have more resources and specialised expertise than a small local agency. The key is that they demonstrate understanding of Seville's market specifics. Ask potential agencies: what are the main differences between doing SEO or Ads in Seville versus Madrid? If they cannot give you a specific, credible answer, they may not have the local knowledge you need." : "Travailler avec une agence hors de Séville (de Madrid ou ailleurs en Espagne) est également une option viable — les services de marketing digital peuvent être fournis à distance, et une agence plus grande peut avoir plus de ressources et d'expertise spécialisée qu'une petite agence locale. L'essentiel est qu'elle démontre une compréhension des spécificités du marché de Séville. Demandez aux agences potentielles : quelles sont les principales différences entre faire du SEO ou des Ads à Séville versus Madrid ? Si elles ne peuvent pas vous donner une réponse spécifique et crédible, elles n'ont peut-être pas la connaissance locale dont vous avez besoin."}
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
