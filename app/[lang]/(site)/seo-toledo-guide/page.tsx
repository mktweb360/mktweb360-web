import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ContactForm } from "@/components/ContactForm";
import { BlogBanner } from "@/components/BlogBanner";
import { RelatedArticles } from "@/components/RelatedArticles";
import { alternatesFor } from "@/lib/i18n/routes";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const isEn = lang === "en";
  return {
    title: isEn ? "SEO in Toledo — Web Positioning for Local Businesses | Mkt Web 360" : "SEO à Tolède — Positionnement Web pour les Entreprises Locales | Mkt Web 360",
    description: isEn ? "How to appear on Google if you have a local business in Toledo. Local SEO guide with practical tips, local keywords and where to start." : "Comment apparaître sur Google si vous avez une entreprise locale à Tolède. Guide SEO local avec des conseils pratiques, des mots-clés locaux et par où commencer.",
    alternates: alternatesFor(`/${lang}/seo-toledo-guide/`) ?? {
      canonical: `https://www.mktweb360.com/${lang}/seo-toledo-guide/`,
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
          { label: isEn ? "SEO Toledo" : "SEO Tolède" },
        ]} />
        <p className="text-sm text-accent-500 font-semibold mb-2">SEO Local</p>
        <h1 className="text-4xl font-bold text-primary-600 mb-4 leading-tight">
          {isEn ? "SEO in Toledo: how to appear on Google if you have a local business" : "SEO à Tolède : comment apparaître sur Google si vous avez une entreprise locale"}
        </h1>
        <p className="text-xl text-gray-500 mb-8 leading-relaxed">
          {isEn ? "Toledo has one of Spain's most accessible local SEO environments. With the right strategy, a local business can appear at the top of Google results faster and at lower cost than in most Spanish cities." : "Tolède a l'un des environnements SEO locaux les plus accessibles d'Espagne. Avec la bonne stratégie, une entreprise locale peut apparaître en haut des résultats Google plus rapidement et à moindre coût que dans la plupart des villes espagnoles."}
        </p>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-primary-600 mb-4">
            {isEn ? "What local SEO is and why it matters in Toledo" : "Qu'est-ce que le SEO local et pourquoi il compte à Tolède"}
          </h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {isEn ? "Local SEO is the set of techniques that improve your visibility in location-based searches — queries like 'dentist Toledo', 'electrician in Toledo' or 'restaurant near me' when the user is in Toledo. For most local businesses, these searches are the most valuable traffic because they come from people with immediate need and purchasing intent. Local SEO results appear in two places: the local pack (the map with 3 business listings) and organic results below it." : "Le SEO local est l'ensemble des techniques qui améliorent votre visibilité dans les recherches basées sur la localisation — des requêtes comme 'dentiste Tolède', 'électricien à Tolède' ou 'restaurant près de moi' quand l'utilisateur est à Tolède. Pour la plupart des entreprises locales, ces recherches sont le trafic le plus précieux car elles proviennent de personnes avec un besoin immédiat et une intention d'achat. Les résultats SEO locaux apparaissent dans deux endroits : le pack local (la carte avec 3 listes d'entreprises) et les résultats organiques en dessous."}
          </p>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {isEn ? "Toledo's local SEO opportunity is particularly attractive because: it is a mid-sized city with real search demand but significantly lower competition than Madrid or Barcelona; many local businesses have not yet invested in SEO; the tourist dimension creates additional search volume beyond local residents; and the province's smaller towns have almost no SEO competition at all, creating easy ranking opportunities for businesses willing to create location-specific content." : "L'opportunité SEO locale de Tolède est particulièrement attractive car : c'est une ville de taille moyenne avec une vraie demande de recherche mais une concurrence significativement plus faible que Madrid ou Barcelone ; de nombreuses entreprises locales n'ont pas encore investi dans le SEO ; la dimension touristique crée un volume de recherche supplémentaire au-delà des résidents locaux ; et les villes plus petites de la province ont presque aucune concurrence SEO du tout, créant des opportunités de classement faciles pour les entreprises prêtes à créer du contenu spécifique à l'emplacement."}
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-primary-600 mb-4">
            {isEn ? "Google Business Profile: your local listing in Google Maps" : "Google Business Profile : votre fiche locale dans Google Maps"}
          </h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {isEn ? "For Toledo businesses, the Google Business Profile is often more impactful than the website itself for local search. When someone searches 'service + Toledo', the local pack (map + 3 business listings) appears before the organic results — and many users click directly from the map without visiting any website. Your Business Profile must be: verified, complete with all fields filled, optimised with Toledo-specific keywords in your description and services, regularly updated with posts and photos, and actively collecting reviews." : "Pour les entreprises de Tolède, le Google Business Profile est souvent plus impactant que le site web lui-même pour la recherche locale. Quand quelqu'un recherche 'service + Tolède', le pack local (carte + 3 listes d'entreprises) apparaît avant les résultats organiques — et de nombreux utilisateurs cliquent directement depuis la carte sans visiter aucun site. Votre Business Profile doit être : vérifié, complet avec tous les champs remplis, optimisé avec des mots-clés spécifiques à Tolède dans votre description et services, régulièrement mis à jour avec des posts et photos, et collectant activement des avis."}
          </p>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {isEn ? "Toledo-specific optimisations for your Google Business Profile: mention key Toledo landmarks or districts in your service area or description where relevant (el casco histórico, la judería, Santa Bárbara, etc.), list services in Spanish and consider English or French descriptions for tourist-facing businesses, add photos that show Toledo's recognisable landscape if your business has exterior visibility, and set accurate business hours including any variations for local holidays (Semana Santa, Corpus Christi)." : "Optimisations spécifiques à Tolède pour votre Google Business Profile : mentionnez les points de repère ou quartiers clés de Tolède dans votre zone de service ou description où pertinent (el casco histórico, la judería, Santa Bárbara, etc.), listez les services en espagnol et envisagez des descriptions en anglais ou français pour les entreprises orientées touristes, ajoutez des photos montrant le paysage reconnaissable de Tolède si votre entreprise a une visibilité extérieure, et définissez des horaires d'ouverture précis incluant les variations pour les fêtes locales (Semana Santa, Corpus Christi)."}
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-primary-600 mb-4">
            {isEn ? "Local ranking factors in Toledo" : "Facteurs de classement local à Tolède"}
          </h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {isEn ? "Google's local ranking algorithm uses three primary factors: relevance (does your business match what the user is searching for?), distance (how close is your business to the user or to the location specified in the search?), and prominence (how well-known is your business — measured through reviews, links, citations and overall web presence). For Toledo businesses, the prominence factor is often the most actionable — building reviews, local citations and content creates lasting advantage." : "L'algorithme de classement local de Google utilise trois facteurs principaux : la pertinence (votre entreprise correspond-elle à ce que l'utilisateur recherche ?), la distance (quelle est la proximité de votre entreprise à l'utilisateur ou à l'emplacement spécifié dans la recherche ?), et la proéminence (quelle est la notoriété de votre entreprise — mesurée par les avis, liens, citations et présence web globale). Pour les entreprises de Tolède, le facteur de proéminence est souvent le plus actionnable — construire des avis, des citations locales et du contenu crée un avantage durable."}
          </p>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {isEn ? "On-page local SEO factors for Toledo: include 'Toledo' naturally throughout your website content, title tags and meta descriptions; have a dedicated contact page with your full address (NAP data); embed a Google Map on your contact page; use structured data (LocalBusiness schema) on your homepage; create content that specifically addresses local needs and references Toledo (not just generic service content that could apply anywhere in Spain)." : "Facteurs SEO locaux on-page pour Tolède : incluez 'Tolède' naturellement dans tout votre contenu de site, les balises title et les meta descriptions ; ayez une page de contact dédiée avec votre adresse complète (données NAP) ; intégrez une carte Google sur votre page de contact ; utilisez des données structurées (schema LocalBusiness) sur votre page d'accueil ; créez du contenu qui adresse spécifiquement les besoins locaux et fait référence à Tolède (pas seulement du contenu de service générique qui pourrait s'appliquer n'importe où en Espagne)."}
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-primary-600 mb-4">
            {isEn ? "Local keywords with the most potential for Toledo businesses" : "Mots-clés locaux avec le plus de potentiel pour les entreprises de Tolède"}
          </h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {isEn ? "The most effective local keywords for Toledo follow patterns: '[service] Toledo' (e.g., 'fontanero Toledo', 'clínica dental Toledo'), '[service] en Toledo', '[service] near me' (captured via Google Business Profile for users physically in Toledo), and problem-based keywords ('reparar caldera Toledo', 'abogado laboral Toledo'). Research local search volume using Google Keyword Planner, Google Search Console (once you have some traffic) or tools like Ubersuggest." : "Les mots-clés locaux les plus efficaces pour Tolède suivent des modèles : '[service] Toledo' (ex. 'fontanero Toledo', 'clínica dental Toledo'), '[service] en Toledo', '[service] near me' (capturé via Google Business Profile pour les utilisateurs physiquement à Tolède), et des mots-clés basés sur les problèmes ('reparar caldera Toledo', 'abogado laboral Toledo'). Recherchez le volume de recherche local en utilisant Google Keyword Planner, Google Search Console (une fois que vous avez du trafic) ou des outils comme Ubersuggest."}
          </p>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {isEn ? "For tourist-facing businesses, include English equivalents: 'restaurants Toledo Spain', 'things to do Toledo Spain', 'hotel Toledo old town'. These queries have real search volume from international visitors planning trips to Toledo. If your business serves tourists, having at least basic English content on your website and English text on your Google Business Profile can capture this additional high-value segment." : "Pour les entreprises orientées touristes, incluez les équivalents anglais : 'restaurants Toledo Spain', 'things to do Toledo Spain', 'hotel Toledo old town'. Ces requêtes ont un volume de recherche réel des visiteurs internationaux planifiant des voyages à Tolède. Si votre entreprise sert des touristes, avoir au moins du contenu de base en anglais sur votre site web et un texte en anglais sur votre Google Business Profile peut capturer ce segment supplémentaire à haute valeur."}
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-primary-600 mb-4">
            {isEn ? "Where to start if you have a business in Toledo" : "Par où commencer si vous avez une entreprise à Tolède"}
          </h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {isEn ? "The practical starting sequence for local SEO in Toledo: 1) Claim and fully optimise your Google Business Profile — this alone can generate calls and visits within days. 2) Check that your website is mobile-friendly and loads in under 3 seconds. 3) Ensure your NAP data is consistent on your website, Google Business Profile and the main Spanish directories. 4) Start collecting Google reviews systematically from every satisfied customer. 5) Create or update a service page that targets your most important '[service] + Toledo' keyword." : "La séquence de démarrage pratique pour le SEO local à Tolède : 1) Revendiquez et optimisez complètement votre Google Business Profile — cela seul peut générer des appels et des visites dans les jours qui suivent. 2) Vérifiez que votre site web est adapté aux mobiles et se charge en moins de 3 secondes. 3) Assurez-vous que vos données NAP sont cohérentes sur votre site, Google Business Profile et les principaux annuaires espagnols. 4) Commencez à collecter des avis Google systématiquement de chaque client satisfait. 5) Créez ou mettez à jour une page de service qui cible votre mot-clé '[service] + Tolède' le plus important."}
          </p>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {isEn ? "These five actions, completed in order over a 2-4 week period, form the foundation of a local SEO strategy that will continue generating results for years. The businesses that do them consistently and systematically will dominate Toledo's local search results in their categories within 6-12 months, capturing leads that their competitors are leaving on the table." : "Ces cinq actions, réalisées dans l'ordre sur une période de 2 à 4 semaines, forment la base d'une stratégie SEO locale qui continuera à générer des résultats pendant des années. Les entreprises qui les font de manière cohérente et systématique domineront les résultats de recherche locaux de Tolède dans leurs catégories dans les 6 à 12 mois, capturant des leads que leurs concurrents laissent sur la table."}
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
