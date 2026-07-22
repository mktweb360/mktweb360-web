import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ContactForm } from "@/components/ContactForm";
import { BlogBanner } from "@/components/BlogBanner";
import { RelatedArticles } from "@/components/RelatedArticles";
import { alternatesFor } from "@/lib/i18n/routes";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const isEn = lang === "en";
  return {
    title: isEn
      ? "Local SEO for Service Businesses — How to Get Customers in Your Area | Mkt Web 360"
      : "SEO local pour les entreprises de services — Comment attirer des clients dans votre zone | Mkt Web 360",
    description: isEn
      ? "What a service business needs to improve its local presence and attract more customers from Google in its area."
      : "Ce dont une entreprise de services a besoin pour améliorer sa présence locale et attirer plus de clients depuis Google dans sa zone.",
    alternates: alternatesFor(`/${lang}/${lang === "en" ? "local-seo-for-service-businesses" : "seo-local-entreprises-de-services"}/`) ?? {
      canonical: `https://www.mktweb360.com/${lang}/${lang === "en" ? "local-seo-for-service-businesses" : "seo-local-entreprises-de-services"}/`,
    },
  };
}

export default async function Page({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const isEn = lang === "en";

  return (
    <>
      <div className="max-w-3xl mx-auto px-4 py-12">
        <Breadcrumbs
          crumbs={[
            { label: isEn ? "Home" : "Accueil", href: `/${lang}/` },
            { label: "Blog", href: `/${lang}/blog/` },
            { label: isEn ? "Local SEO" : "SEO local" },
          ]}
        />
        <p className="text-sm text-accent-500 font-semibold mb-2">SEO Local</p>
        <h1 className="text-4xl font-bold text-primary-600 mb-4 leading-tight">
          {isEn
            ? "Local SEO for service businesses: how to get customers in your area"
            : "SEO local pour les entreprises de services : comment attirer des clients dans votre zone"}
        </h1>
        <p className="text-xl text-gray-500 mb-8 leading-relaxed">
          {isEn
            ? "Local SEO is the most cost-effective strategy for service businesses with a physical presence. This guide explains how it works, what factors determine your position and what you can do to improve it."
            : "Le SEO local est la stratégie la plus rentable pour les entreprises de services avec une présence physique. Ce guide explique comment ça fonctionne, quels facteurs déterminent votre position et ce que vous pouvez faire pour l'améliorer."}
        </p>

        <h2 className="text-2xl font-bold text-primary-600 mt-10 mb-4">
          {isEn
            ? "What local SEO is and why it matters"
            : "Qu'est-ce que le SEO local et pourquoi c'est important"}
        </h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          {isEn
            ? "Local SEO is the set of strategies that optimise your business to appear when people in your geographic area search for services you offer. When someone searches 'plumber near me', 'dentist in [city]' or '[service] [neighbourhood]', Google shows a local pack — a map with 3 business listings — before organic results. Appearing in this pack is the single biggest driver of local leads."
            : "Le SEO local est l'ensemble des stratégies qui optimisent votre entreprise pour apparaître quand des personnes dans votre zone géographique recherchent des services que vous offrez. Quand quelqu'un cherche 'plombier près de moi', 'dentiste à [ville]' ou '[service] [quartier]', Google affiche un pack local — une carte avec 3 fiches d'entreprises — avant les résultats organiques. Apparaître dans ce pack est le plus grand facteur individuel de leads locaux."}
        </p>
        <p className="text-gray-600 leading-relaxed mb-4">
          {isEn
            ? "For service businesses — plumbers, lawyers, accountants, clinics, restaurants, trades — local search is how the majority of new customers find you. Unlike national SEO, local SEO targets people who are actively looking for a service in a specific place, giving it the highest purchase intent of any search traffic type."
            : "Pour les entreprises de services — plombiers, avocats, comptables, cliniques, restaurants, artisans — la recherche locale est la façon dont la majorité des nouveaux clients vous trouvent. Contrairement au SEO national, le SEO local cible des personnes qui recherchent activement un service dans un endroit spécifique, lui donnant la plus haute intention d'achat de tout type de trafic de recherche."}
        </p>

        <h2 className="text-2xl font-bold text-primary-600 mt-10 mb-4">
          {isEn
            ? "Google Business Profile: your local card on Google Maps"
            : "Google Business Profile : votre fiche locale sur Google Maps"}
        </h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          {isEn
            ? "Google Business Profile (formerly Google My Business) is the free tool that controls how your business appears in Google Search and Maps. It is the single most important element of local SEO. To optimise it: complete every section (hours, services, description, attributes), add high-quality photos updated regularly, post weekly updates, respond to all reviews within 24 hours, and add your service areas if you work across multiple postcodes."
            : "Google Business Profile (anciennement Google My Business) est l'outil gratuit qui contrôle comment votre entreprise apparaît dans Google Search et Maps. C'est l'élément unique le plus important du SEO local. Pour l'optimiser : complétez chaque section (horaires, services, description, attributs), ajoutez des photos de haute qualité mises à jour régulièrement, publiez des mises à jour hebdomadaires, répondez à tous les avis dans les 24 heures, et ajoutez vos zones de service si vous travaillez sur plusieurs codes postaux."}
        </p>
        <p className="text-gray-600 leading-relaxed mb-4">
          {isEn
            ? "Choose the most specific primary category possible. A 'General Contractor' ranks worse for 'plumber in Madrid' than a business with 'Plumber' as primary category. Add secondary categories for additional services, but your primary category should be the most specific one that accurately describes your main service."
            : "Choisissez la catégorie principale la plus spécifique possible. Un 'Entrepreneur Général' se classe moins bien pour 'plombier à Paris' qu'une entreprise avec 'Plombier' comme catégorie principale. Ajoutez des catégories secondaires pour les services supplémentaires, mais votre catégorie principale doit être la plus spécifique qui décrit précisément votre service principal."}
        </p>

        <h2 className="text-2xl font-bold text-primary-600 mt-10 mb-4">
          {isEn
            ? "Local ranking factors"
            : "Facteurs de positionnement local"}
        </h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          {isEn
            ? "Google's local algorithm weighs three main factors: Relevance (does your business match what was searched?), Distance (how close is your business to the searcher or the stated location?), and Prominence (how well-known is your business — signals include reviews, backlinks and website authority). You can directly influence relevance and prominence; distance is fixed by your location."
            : "L'algorithme local de Google pondère trois facteurs principaux : Pertinence (votre entreprise correspond-elle à ce qui a été recherché ?), Distance (quelle est la proximité de votre entreprise avec le chercheur ou la localisation indiquée ?), et Notoriété (quelle est la réputation de votre entreprise — les signaux incluent les avis, les backlinks et l'autorité du site web). Vous pouvez influencer directement la pertinence et la notoriété ; la distance est fixée par votre localisation."}
        </p>
        <p className="text-gray-600 leading-relaxed mb-4">
          {isEn
            ? "Prominence signals you can improve: Google review count and average rating, responses to reviews, website backlinks from local sources (local news, business associations, directories), NAP consistency (Name, Address, Phone must be identical everywhere), and activity on your Google Business Profile (posts, Q&A responses, new photos)."
            : "Signaux de notoriété que vous pouvez améliorer : nombre d'avis Google et note moyenne, réponses aux avis, backlinks du site web depuis des sources locales (actualités locales, associations professionnelles, annuaires), cohérence NAP (Nom, Adresse, Téléphone doit être identique partout), et activité sur votre Google Business Profile (posts, réponses Q&R, nouvelles photos)."}
        </p>

        <h2 className="text-2xl font-bold text-primary-600 mt-10 mb-4">
          {isEn
            ? "Local keywords with the most potential"
            : "Mots-clés locaux avec le plus de potentiel"}
        </h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          {isEn
            ? "The most valuable local keywords combine a service with a location: '[service] in [city]', '[service] near [neighbourhood]', '[service] [city] price'. These have lower search volume than national terms but much higher conversion — someone searching 'plumber Seville 24 hours emergency' is about to call someone, not just browse. Optimise your website pages and Google Business Profile for these hyper-specific terms."
            : "Les mots-clés locaux les plus précieux combinent un service avec une localisation : '[service] à [ville]', '[service] près de [quartier]', '[service] [ville] prix'. Ceux-ci ont un volume de recherche plus faible que les termes nationaux mais une conversion bien plus élevée — quelqu'un qui cherche 'plombier Marseille 24h urgence' va appeler quelqu'un, pas juste naviguer. Optimisez vos pages de site web et votre Google Business Profile pour ces termes très spécifiques."}
        </p>

        <h2 className="text-2xl font-bold text-primary-600 mt-10 mb-4">
          {isEn
            ? "How to build local authority with reviews and citations"
            : "Comment construire une autorité locale avec les avis et les citations"}
        </h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          {isEn
            ? "Citations are mentions of your business name, address and phone number on other websites — directories, review platforms, local media. Google uses citation consistency and volume as a trust signal. Claim and optimise your listings on: Google Business Profile, Bing Places, Apple Maps, Yelp, TripAdvisor (if applicable), your industry's specific directories, and local business associations."
            : "Les citations sont des mentions de votre nom d'entreprise, adresse et numéro de téléphone sur d'autres sites web — annuaires, plateformes d'avis, médias locaux. Google utilise la cohérence et le volume des citations comme signal de confiance. Revendiquez et optimisez vos fiches sur : Google Business Profile, Bing Places, Apple Maps, Yelp, TripAdvisor (si applicable), les annuaires spécifiques à votre secteur, et les associations professionnelles locales."}
        </p>
        <p className="text-gray-600 leading-relaxed mb-4">
          {isEn
            ? "Reviews are the most powerful local authority signal. A consistent strategy: ask every happy customer for a review immediately after service completion, respond to every review within 24 hours, and aim for a minimum of 20–30 reviews before investing in other local SEO tactics. Quantity, recency and consistency of responses all contribute to your local ranking."
            : "Les avis sont le signal d'autorité locale le plus puissant. Une stratégie cohérente : demandez à chaque client satisfait un avis immédiatement après la fin du service, répondez à chaque avis dans les 24 heures, et visez un minimum de 20 à 30 avis avant d'investir dans d'autres tactiques de SEO local. La quantité, la récence et la cohérence des réponses contribuent toutes à votre classement local."}
        </p>

        <BlogBanner variant="seo" />

        <section className="bg-primary-600 text-white rounded-2xl p-8 mt-12">
          <h2 className="text-2xl font-bold mb-4">
            {isEn
              ? "Need help with your digital marketing?"
              : "Besoin d'aide avec votre marketing digital ?"}
          </h2>
          <p className="text-primary-200 mb-6">
            {isEn
              ? "Tell us about your project and we'll get back to you within 24 hours."
              : "Parlez-nous de votre projet et nous vous répondrons dans les 24 heures."}
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
