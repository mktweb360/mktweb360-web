import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ContactForm } from "@/components/ContactForm";
import { BlogBanner } from "@/components/BlogBanner";
import { RelatedArticles } from "@/components/RelatedArticles";
import { alternatesFor } from "@/lib/i18n/routes";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const isEn = lang === "en";
  return {
    title: isEn ? "Google Business Profile for Businesses in Toledo — Step by Step Guide | Mkt Web 360" : "Google Business Profile pour les Entreprises à Tolède — Guide Étape par Étape | Mkt Web 360",
    description: isEn ? "How to optimise your Google Business Profile if you have a business in Toledo. Appear on Google Maps and attract more local customers." : "Comment optimiser votre Google Business Profile si vous avez une entreprise à Tolède. Apparaissez sur Google Maps et attirez plus de clients locaux.",
    alternates: alternatesFor(`/${lang}/google-business-profile-toledo/`) ?? {
      canonical: `https://www.mktweb360.com/${lang}/google-business-profile-toledo/`,
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
          { label: isEn ? "GBP Toledo" : "GBP Tolède" },
        ]} />
        <p className="text-sm text-accent-500 font-semibold mb-2">SEO Local</p>
        <h1 className="text-4xl font-bold text-primary-600 mb-4 leading-tight">
          {isEn ? "Google Business Profile for businesses in Toledo: step by step guide" : "Google Business Profile pour les entreprises à Tolède : guide étape par étape"}
        </h1>
        <p className="text-xl text-gray-500 mb-8 leading-relaxed">
          {isEn ? "If you have a business in Toledo and your Google listing is not optimised, you are losing customers every day. This guide explains how to set it up, optimise it and manage it to attract more visits." : "Si vous avez une entreprise à Tolède et que votre fiche Google n'est pas optimisée, vous perdez des clients chaque jour. Ce guide explique comment la configurer, l'optimiser et la gérer pour attirer plus de visites."}
        </p>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-primary-600 mb-4">
            {isEn ? "Why Google Business Profile is key for Toledo businesses" : "Pourquoi Google Business Profile est essentiel pour les entreprises de Tolède"}
          </h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {isEn ? "Toledo's dual market — local residents plus 3+ million annual tourists — makes Google Business Profile especially valuable. When a local resident searches 'fontanero Toledo', they will call the business that appears at the top of the local pack. When a tourist walking through the casco histórico searches 'restaurant near me', they will choose from the three listings that appear on the map. In both cases, your Google Business Profile listing — not your website — is the point of first contact." : "Le double marché de Tolède — résidents locaux plus 3+ millions de touristes annuels — rend Google Business Profile particulièrement précieux. Quand un résident local recherche 'fontanero Toledo', il appellera l'entreprise qui apparaît en haut du pack local. Quand un touriste se promenant dans le casco histórico recherche 'restaurant près de moi', il choisira parmi les trois listes qui apparaissent sur la carte. Dans les deux cas, votre fiche Google Business Profile — pas votre site web — est le point de premier contact."}
          </p>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {isEn ? "For Toledo businesses, an optimised Google Business Profile is particularly powerful because local SEO competition is lower than in major Spanish cities. Many Toledo businesses have unverified or poorly maintained listings, creating a clear first-mover advantage for businesses that invest time in proper optimisation. A well-maintained profile in Toledo can rank in the local pack within weeks, not months — compared to Madrid where the same effort might take 6-12 months to achieve comparable visibility." : "Pour les entreprises de Tolède, un Google Business Profile optimisé est particulièrement puissant car la concurrence SEO locale est plus faible que dans les grandes villes espagnoles. Beaucoup d'entreprises de Tolède ont des fiches non vérifiées ou mal entretenues, créant un avantage de premier entrant clair pour les entreprises qui investissent du temps dans une optimisation appropriée. Un profil bien entretenu à Tolède peut se classer dans le pack local en semaines, pas en mois — comparé à Madrid où le même effort pourrait prendre 6 à 12 mois pour atteindre une visibilité comparable."}
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-primary-600 mb-4">
            {isEn ? "How to create and claim your listing" : "Comment créer et revendiquer votre fiche"}
          </h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {isEn ? "Go to business.google.com and sign in with a Google account. Search for your business name — Google sometimes creates automatic listings based on public data, and you may need to claim an existing listing rather than create a new one. If claiming an existing listing, Google will send a verification postcard to the address on file. If creating new, provide your business name, category, address, phone number, website URL and a brief description of your services. Verification by postcard typically takes 5-14 days for Toledo addresses." : "Allez sur business.google.com et connectez-vous avec un compte Google. Recherchez le nom de votre entreprise — Google crée parfois des fiches automatiques à partir de données publiques, et vous devrez peut-être revendiquer une fiche existante plutôt qu'en créer une nouvelle. Si vous revendiquez une fiche existante, Google enverra une carte postale de vérification à l'adresse enregistrée. Si vous créez une nouvelle, fournissez le nom de votre entreprise, la catégorie, l'adresse, le numéro de téléphone, l'URL du site web et une brève description de vos services. La vérification par carte postale prend généralement 5 à 14 jours pour les adresses de Tolède."}
          </p>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {isEn ? "For businesses in Toledo's historic centre, be precise with your address — GPS coordinates in the casco histórico can be imprecise, and customers may struggle to find you if your map pin is in the wrong location. After verification, check your pin location on Google Maps and drag it to the correct position if needed. For Toledo's tourist-facing businesses, also consider whether your listing should show a service area (if you deliver or travel to customers) in addition to your physical address." : "Pour les entreprises du centre historique de Tolède, soyez précis avec votre adresse — les coordonnées GPS dans le casco histórico peuvent être imprécises, et les clients peuvent avoir du mal à vous trouver si votre marqueur est au mauvais endroit. Après vérification, vérifiez l'emplacement de votre marqueur sur Google Maps et faites-le glisser vers la position correcte si nécessaire. Pour les entreprises de Tolède orientées touristes, envisagez également si votre fiche doit afficher une zone de service (si vous livrez ou vous déplacez chez les clients) en plus de votre adresse physique."}
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-primary-600 mb-4">
            {isEn ? "How to optimise every field of your listing" : "Comment optimiser chaque champ de votre fiche"}
          </h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {isEn ? "Business name: use your exact legal name — adding keywords violates Google's guidelines. Category: choose your most accurate primary category and add all relevant secondary categories. Description (750 characters): naturally incorporate 'Toledo' and your main service keywords, describe what makes you distinctive, and include a call to action. Services: list all your individual services with descriptions — this helps Google understand your full offering. Attributes: complete all relevant attributes (accessibility, payment methods, language spoken — useful for tourist-facing Toledo businesses)." : "Nom de l'entreprise : utilisez votre nom légal exact — ajouter des mots-clés viole les directives de Google. Catégorie : choisissez votre catégorie principale la plus précise et ajoutez toutes les catégories secondaires pertinentes. Description (750 caractères) : intégrez naturellement 'Toledo' et vos mots-clés de service principaux, décrivez ce qui vous distingue, et incluez un appel à l'action. Services : listez tous vos services individuels avec des descriptions — cela aide Google à comprendre votre offre complète. Attributs : complétez tous les attributs pertinents (accessibilité, modes de paiement, langues parlées — utile pour les entreprises de Tolède orientées touristes)."}
          </p>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {isEn ? "Photos are one of the most impactful optimisation elements. Add a minimum of 10 photos: your logo, cover photo, exterior photos (with Toledo's recognisable streetscapes if possible), interior photos, team photos and product or service photos. For tourist-facing businesses, photos showing happy customers or beautiful product arrangements are particularly effective. Update photos regularly — Google's algorithm favours active profiles and fresh content signals that your business is operational." : "Les photos sont l'un des éléments d'optimisation les plus impactants. Ajoutez un minimum de 10 photos : votre logo, photo de couverture, photos extérieures (avec les paysages de rue reconnaissables de Tolède si possible), photos intérieures, photos d'équipe et photos de produits ou services. Pour les entreprises orientées touristes, les photos montrant des clients heureux ou de beaux arrangements de produits sont particulièrement efficaces. Mettez à jour les photos régulièrement — l'algorithme de Google favorise les profils actifs et le contenu frais signale que votre entreprise est opérationnelle."}
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-primary-600 mb-4">
            {isEn ? "Review strategy for Toledo businesses" : "Stratégie d'avis pour les entreprises de Tolède"}
          </h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {isEn ? "Reviews are the most powerful signal in Google's local ranking algorithm and the most important factor in how potential customers choose between listings. For Toledo businesses with tourist customers, review collection has a unique dynamic: your best opportunity to ask for a review is at the moment of service — when the customer is still physically present and their experience is fresh. Provide them with a QR code linking to your Google review page, or send a follow-up message if you have their contact details." : "Les avis sont le signal le plus puissant dans l'algorithme de classement local de Google et le facteur le plus important dans la façon dont les clients potentiels choisissent entre les fiches. Pour les entreprises de Tolède avec des clients touristes, la collecte d'avis a une dynamique unique : votre meilleure opportunité de demander un avis est au moment du service — quand le client est encore physiquement présent et que son expérience est fraîche. Fournissez-lui un QR code reliant à votre page d'avis Google, ou envoyez un message de suivi si vous avez ses coordonnées."}
          </p>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {isEn ? "For Toledo's tourist-facing businesses, consider asking for reviews in multiple languages — a French tourist is more likely to leave a review if invited in French. Having reviews in English, French and other languages also signals to Google (and to future international visitors) that you serve an international clientele. Respond to every review within 48 hours in the language of the reviewer — this demonstrates attentiveness and adds keyword-relevant content to your profile." : "Pour les entreprises de Tolède orientées touristes, envisagez de demander des avis en plusieurs langues — un touriste français est plus susceptible de laisser un avis s'il est invité en français. Avoir des avis en anglais, français et d'autres langues signale également à Google (et aux futurs visiteurs internationaux) que vous servez une clientèle internationale. Répondez à chaque avis dans les 48 heures dans la langue du critique — cela démontre l'attention et ajoute du contenu pertinent en mots-clés à votre profil."}
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-primary-600 mb-4">
            {isEn ? "Metrics to monitor in your GBP" : "Métriques à surveiller dans votre GBP"}
          </h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {isEn ? "Google Business Profile provides performance data in the Insights section. Key metrics to monitor: Search impressions (how many times your listing appeared in search results), Map impressions (how many times you appeared in Google Maps), Calls (phone calls initiated directly from your listing), Direction requests (people who asked for directions to your business), Website clicks (people who clicked through to your website), and Photo views (how often your photos are viewed relative to competitors). Review these monthly to understand your listing's performance and identify improvement opportunities." : "Google Business Profile fournit des données de performance dans la section Insights. Métriques clés à surveiller : Impressions de recherche (combien de fois votre fiche est apparue dans les résultats de recherche), Impressions de carte (combien de fois vous êtes apparu dans Google Maps), Appels (appels téléphoniques initiés directement depuis votre fiche), Demandes d'itinéraire (personnes qui ont demandé des itinéraires vers votre entreprise), Clics sur le site web (personnes qui ont cliqué vers votre site), et Vues de photos (à quelle fréquence vos photos sont vues par rapport aux concurrents). Examinez-les mensuellement pour comprendre les performances de votre fiche et identifier les opportunités d'amélioration."}
          </p>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {isEn ? "Track trending queries — the keywords people use when they find your listing. This data shows you how customers describe their need when searching for businesses like yours, which informs your keyword strategy for your website and future Google Posts. A Toledo restaurant that discovers most of its GBP traffic comes from 'traditional Toledo food' queries should create more content and posts around traditional Toledo cuisine, rather than generic restaurant content." : "Suivez les requêtes tendance — les mots-clés que les gens utilisent quand ils trouvent votre fiche. Ces données vous montrent comment les clients décrivent leur besoin lors de la recherche d'entreprises comme la vôtre, ce qui informe votre stratégie de mots-clés pour votre site et les futurs Google Posts. Un restaurant de Tolède qui découvre que la plupart de son trafic GBP provient de requêtes 'nourriture traditionnelle de Tolède' devrait créer plus de contenu et de posts autour de la cuisine traditionnelle de Tolède, plutôt que du contenu générique sur les restaurants."}
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
