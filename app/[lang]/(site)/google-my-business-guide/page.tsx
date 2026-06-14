import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ContactForm } from "@/components/ContactForm";
import { BlogBanner } from "@/components/BlogBanner";
import { RelatedArticles } from "@/components/RelatedArticles";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const isEn = lang === "en";
  return {
    title: isEn ? "Google My Business for Businesses — Complete Guide | Mkt Web 360" : "Google My Business pour les Entreprises — Guide Complet | Mkt Web 360",
    description: isEn ? "Complete guide to Google My Business (now Google Business Profile). How to create, verify, optimise and manage your listing to attract local customers." : "Guide complet de Google My Business (maintenant Google Business Profile). Comment créer, vérifier, optimiser et gérer votre fiche pour attirer des clients locaux.",
    alternates: { canonical: `https://www.mktweb360.com/${lang}/google-my-business-guide/` },
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
          { label: isEn ? "Google My Business" : "Google My Business" },
        ]} />
        <p className="text-sm text-accent-500 font-semibold mb-2">SEO Local</p>
        <h1 className="text-4xl font-bold text-primary-600 mb-4 leading-tight">
          {isEn ? "Google My Business for businesses: complete guide to attract local customers" : "Google My Business pour les entreprises : guide complet pour attirer des clients locaux"}
        </h1>
        <p className="text-xl text-gray-500 mb-8 leading-relaxed">
          {isEn ? "Google My Business (now called Google Business Profile) is the most important free tool for local businesses. This complete guide explains how to set it up and optimise it to appear when local customers search." : "Google My Business (maintenant appelé Google Business Profile) est l'outil gratuit le plus important pour les entreprises locales. Ce guide complet explique comment le configurer et l'optimiser pour apparaître quand les clients locaux cherchent."}
        </p>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-primary-600 mb-4">
            {isEn ? "What Google My Business is and why it matters" : "Qu'est-ce que Google My Business et pourquoi c'est important"}
          </h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {isEn ? "Google Business Profile (formerly Google My Business) is the free tool that controls how your business appears in Google Search and Google Maps. When someone searches for 'plumber near me' or 'restaurant in [city]', the local pack — the map with 3 business listings — is the most prominent result on the page. Appearing in this local pack is often more valuable than appearing in the organic blue links below it. Your Business Profile listing is what makes this possible." : "Google Business Profile (anciennement Google My Business) est l'outil gratuit qui contrôle la façon dont votre entreprise apparaît dans Google Search et Google Maps. Quand quelqu'un recherche 'plombier près de moi' ou 'restaurant à [ville]', le pack local — la carte avec 3 listes d'entreprises — est le résultat le plus proéminent sur la page. Apparaître dans ce pack local est souvent plus précieux qu'apparaître dans les liens organiques bleus en dessous. Votre fiche Google Business Profile rend cela possible."}
          </p>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {isEn ? "A complete, optimised Business Profile provides potential customers with everything they need to choose you: your location and how to get there, your phone number, opening hours, website link, photos of your business, reviews from past customers and your response to those reviews. For mobile users (who make up the majority of local searchers), clicking on a Business Profile listing to call directly or get directions is the primary way they interact with local businesses." : "Un Business Profile complet et optimisé fournit aux clients potentiels tout ce dont ils ont besoin pour vous choisir : votre emplacement et comment s'y rendre, votre numéro de téléphone, vos heures d'ouverture, votre lien de site web, des photos de votre entreprise, des avis de clients passés et votre réponse à ces avis. Pour les utilisateurs mobiles (qui constituent la majorité des chercheurs locaux), cliquer sur une fiche Google Business Profile pour appeler directement ou obtenir des itinéraires est la principale façon dont ils interagissent avec les entreprises locales."}
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-primary-600 mb-4">
            {isEn ? "How to create and verify your listing" : "Comment créer et vérifier votre fiche"}
          </h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {isEn ? "Go to business.google.com and sign in with a Google account. Search for your business name to see if a listing already exists — Google sometimes creates automatic listings for businesses. If a listing exists, claim it. If not, create a new one. Provide your business name, category (choose your most specific primary category), location (address for physical businesses, or service area for businesses that serve customers at their locations), contact information and website." : "Allez sur business.google.com et connectez-vous avec un compte Google. Recherchez le nom de votre entreprise pour voir si une fiche existe déjà — Google crée parfois automatiquement des fiches pour les entreprises. Si une fiche existe, revendiquez-la. Sinon, créez-en une nouvelle. Fournissez le nom de votre entreprise, la catégorie (choisissez votre catégorie principale la plus spécifique), l'emplacement (adresse pour les entreprises physiques, ou zone de service pour les entreprises qui servent les clients à leurs emplacements), les coordonnées et le site web."}
          </p>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {isEn ? "Verification proves to Google that you are the legitimate business owner. Most businesses verify by postcard — Google sends a card with a verification code to your business address within 5-14 days. Some businesses can verify by phone, email or video call. Businesses with a verified Google Search Console account for their website may also have instant verification available. Until verified, your profile has limited functionality and won't show in maps." : "La vérification prouve à Google que vous êtes le propriétaire légitime de l'entreprise. La plupart des entreprises vérifient par carte postale — Google envoie une carte avec un code de vérification à votre adresse commerciale dans les 5 à 14 jours. Certaines entreprises peuvent vérifier par téléphone, email ou appel vidéo. Les entreprises avec un compte Google Search Console vérifié pour leur site web peuvent également avoir une vérification instantanée disponible. Jusqu'à la vérification, votre profil a des fonctionnalités limitées et n'apparaîtra pas dans les cartes."}
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-primary-600 mb-4">
            {isEn ? "How to optimise every field of your profile" : "Comment optimiser chaque champ de votre profil"}
          </h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {isEn ? "A fully optimised Business Profile stands out and ranks better. Key fields to complete: Business name (use your exact legal name — adding keywords to your business name violates Google's guidelines and can lead to suspension), Primary category (the most important ranking factor — choose the most specific category that matches your primary service), Secondary categories (add all relevant additional service categories), Business description (750 characters maximum, include your main services and location, naturally incorporate keywords customers use to find businesses like yours)." : "Un Business Profile entièrement optimisé se démarque et se classe mieux. Champs clés à compléter : Nom de l'entreprise (utilisez votre nom légal exact — ajouter des mots-clés à votre nom d'entreprise viole les directives de Google et peut mener à la suspension), Catégorie principale (le facteur de classement le plus important — choisissez la catégorie la plus spécifique qui correspond à votre service principal), Catégories secondaires (ajoutez toutes les catégories de services supplémentaires pertinentes), Description de l'entreprise (750 caractères maximum, incluez vos services principaux et localisation, intégrez naturellement les mots-clés que les clients utilisent pour trouver des entreprises comme la vôtre)."}
          </p>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {isEn ? "Photos are critical — profiles with photos receive 42% more requests for directions and 35% more website clicks. Add at least: a logo, a cover photo, interior photos, exterior photos (so customers can recognise your business), team photos and photos of your products or services in action. Update photos regularly — fresh content signals to Google that your listing is actively managed. Ensure all contact information is correct and consistent with your website." : "Les photos sont critiques — les profils avec des photos reçoivent 42% plus de demandes d'itinéraires et 35% plus de clics sur le site web. Ajoutez au moins : un logo, une photo de couverture, des photos intérieures, des photos extérieures (pour que les clients puissent reconnaître votre entreprise), des photos d'équipe et des photos de vos produits ou services en action. Mettez à jour les photos régulièrement — le contenu frais signale à Google que votre fiche est activement gérée. Assurez-vous que toutes les coordonnées sont correctes et cohérentes avec votre site web."}
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-primary-600 mb-4">
            {isEn ? "Google posts: how to keep your listing active" : "Google Posts : comment maintenir votre fiche active"}
          </h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {isEn ? "Google Posts are short content updates (up to 1,500 characters plus a photo) that appear directly on your Business Profile in search results. Types of posts include: What's New (general updates about your business), Events (promote upcoming events or specials), Offers (share promotions with start and end dates), and Products (highlight specific products or services). Posts remain visible for 7 days before expiring (except Event posts, which expire on the event end date)." : "Les Google Posts sont des mises à jour de contenu courtes (jusqu'à 1 500 caractères plus une photo) qui apparaissent directement sur votre Business Profile dans les résultats de recherche. Les types de posts incluent : What's New (mises à jour générales sur votre entreprise), Events (promouvoir des événements ou promotions à venir), Offers (partager des promotions avec des dates de début et de fin), et Products (mettre en avant des produits ou services spécifiques). Les posts restent visibles pendant 7 jours avant d'expirer (sauf les posts Event, qui expirent à la date de fin de l'événement)."}
          </p>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {isEn ? "Regular posting signals to Google that your listing is actively managed, which can positively affect your local ranking. Aim for at least 2-3 posts per month. Use posts to promote seasonal offers, highlight new services, share news about your business, or simply demonstrate activity. Include a clear call to action in each post — 'call now', 'book an appointment', 'learn more' — and link to a relevant page on your website where applicable." : "La publication régulière signale à Google que votre fiche est activement gérée, ce qui peut positivement affecter votre classement local. Visez au moins 2 à 3 posts par mois. Utilisez les posts pour promouvoir des offres saisonnières, mettre en avant de nouveaux services, partager des nouvelles sur votre entreprise, ou simplement démontrer de l'activité. Incluez un appel à l'action clair dans chaque post — 'appelez maintenant', 'prenez rendez-vous', 'en savoir plus' — et liez à une page pertinente de votre site web le cas échéant."}
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-primary-600 mb-4">
            {isEn ? "Reviews strategy for Google My Business" : "Stratégie d'avis pour Google My Business"}
          </h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {isEn ? "Reviews are the most powerful element of your Google Business Profile. Businesses with more reviews, higher ratings and more recent reviews rank better and receive more clicks. The review generation strategy that works: ask every satisfied customer for a review immediately after the service interaction, provide a direct link (find it in your Business Profile dashboard under 'Ask for reviews'), make the process as simple as possible and respond to every review within 24-48 hours." : "Les avis sont l'élément le plus puissant de votre Google Business Profile. Les entreprises avec plus d'avis, des notes plus élevées et des avis plus récents se classent mieux et reçoivent plus de clics. La stratégie de génération d'avis qui fonctionne : demandez à chaque client satisfait un avis immédiatement après l'interaction de service, fournissez un lien direct (trouvez-le dans votre tableau de bord Business Profile sous 'Demander des avis'), rendez le processus aussi simple que possible et répondez à chaque avis dans les 24 à 48 heures."}
          </p>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {isEn ? "Never offer incentives for reviews — this violates Google's policies and can result in review removal or account penalties. Never create fake reviews or ask staff to review the business — Google's detection systems are sophisticated. Focus on the quality of service that generates genuine positive reviews, then make it systematic to ask for those reviews. Businesses that consistently ask every customer for reviews typically accumulate 10x more reviews than those who ask occasionally." : "N'offrez jamais d'incitations pour les avis — cela viole les politiques de Google et peut entraîner la suppression des avis ou des pénalités de compte. Ne créez jamais de faux avis ou ne demandez pas au personnel d'évaluer l'entreprise — les systèmes de détection de Google sont sophistiqués. Concentrez-vous sur la qualité du service qui génère de vrais avis positifs, puis rendez systématique le fait de demander ces avis. Les entreprises qui demandent systématiquement à chaque client des avis accumulent généralement 10 fois plus d'avis que celles qui demandent occasionnellement."}
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
