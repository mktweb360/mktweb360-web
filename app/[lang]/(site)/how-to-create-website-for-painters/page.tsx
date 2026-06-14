import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ContactForm } from "@/components/ContactForm";
import { BlogBanner } from "@/components/BlogBanner";
import { RelatedArticles } from "@/components/RelatedArticles";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const isEn = lang === "en";
  return {
    title: isEn ? "How to Create a Website for Painters and Get Customers on Google | Mkt Web 360" : "Comment créer un site web pour peintres et obtenir des clients sur Google | Mkt Web 360",
    description: isEn ? "How to create a professional website for painters that attracts customers through Google. SEO, Google Business Profile and local strategy." : "Comment créer un site web professionnel pour peintres qui attire des clients via Google. SEO, Google Business Profile et stratégie locale.",
    alternates: { canonical: `https://www.mktweb360.com/${lang}/how-to-create-website-for-painters/` },
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
          { label: isEn ? "Website for painters" : "Site web pour peintres" },
        ]} />
        <p className="text-sm text-accent-500 font-semibold mb-2">Web Design</p>
        <h1 className="text-4xl font-bold text-primary-600 mb-4 leading-tight">
          {isEn ? "How to create a website for painters that generates customers on Google" : "Comment créer un site web pour peintres qui génère des clients sur Google"}
        </h1>
        <p className="text-xl text-gray-500 mb-8 leading-relaxed">
          {isEn ? "A professional website is the most powerful tool a painter can have to attract customers. This guide explains what it needs to include, how to appear on Google and how to convert visits into calls." : "Un site web professionnel est l'outil le plus puissant qu'un peintre peut avoir pour attirer des clients. Ce guide explique ce qu'il doit inclure, comment apparaître sur Google et comment convertir les visites en appels."}
        </p>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-primary-600 mb-4">
            {isEn ? "What a painter's website must include to generate customers" : "Ce que le site web d'un peintre doit inclure pour générer des clients"}
          </h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {isEn ? "A painting contractor's website needs to answer three questions immediately: What services do you offer? Where do you work? How do I contact you? Your homepage should make all three clear within the first screen, without the visitor having to scroll or search. Include your city and service area prominently — 'Painter in [your city and surrounding area]' — and your phone number in the header on every page." : "Le site web d'un peintre doit répondre à trois questions immédiatement : Quels services proposez-vous ? Où travaillez-vous ? Comment vous contacter ? Votre page d'accueil doit clarifier les trois dans le premier écran, sans que le visiteur ait à faire défiler ou chercher. Incluez votre ville et votre zone de service de manière bien visible — 'Peintre à [votre ville et zone environnante]' — et votre numéro de téléphone dans l'en-tête sur chaque page."}
          </p>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {isEn ? "Beyond the basics, your website should include: a detailed services page for each type of work you do (interior painting, exterior painting, commercial painting, etc.), a portfolio with before and after photos, genuine customer reviews and a simple contact form. Each service page is a separate landing page that can rank independently on Google for queries like 'exterior painter in [city]'." : "Au-delà des bases, votre site web doit inclure : une page de services détaillée pour chaque type de travail que vous faites (peinture intérieure, extérieure, commerciale, etc.), un portfolio avec des photos avant/après, de vrais avis clients et un formulaire de contact simple. Chaque page de service est une landing page séparée qui peut se positionner indépendamment sur Google pour des requêtes comme 'peintre extérieur à [ville]'."}
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-primary-600 mb-4">
            {isEn ? "Local SEO for painters: how to appear in Google searches" : "SEO local pour peintres : comment apparaître dans les recherches Google"}
          </h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {isEn ? "When someone searches 'painter in [city]', Google shows them three types of results: the local pack (map with three businesses), organic results (regular website listings) and Google Ads. Your goal as a painter is to appear in as many of these as possible. For the local pack, you need a well-optimised Google Business Profile. For organic results, you need a website with proper on-page SEO." : "Quand quelqu'un cherche 'peintre à [ville]', Google lui montre trois types de résultats : le pack local (carte avec trois entreprises), les résultats organiques (listings de sites web ordinaires) et Google Ads. Votre objectif en tant que peintre est d'apparaître dans autant de ces résultats que possible. Pour le pack local, vous avez besoin d'un Google Business Profile bien optimisé. Pour les résultats organiques, vous avez besoin d'un site avec un bon SEO on-page."}
          </p>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {isEn ? "For each city or neighbourhood you serve, create a dedicated page optimised for 'painter in [location]' keywords. Include the location name naturally throughout the page, embed a Google Map, list the specific areas you serve and include local reviews from customers in that area. This geographic content structure helps Google understand where you operate and serves customers in different parts of your service area." : "Pour chaque ville ou quartier que vous servez, créez une page dédiée optimisée pour les mots-clés 'peintre à [localisation]'. Incluez le nom de la localisation naturellement dans toute la page, intégrez une Google Map, listez les zones spécifiques que vous servez et incluez des avis locaux de clients dans cette zone. Cette structure de contenu géographique aide Google à comprendre où vous opérez et sert les clients dans différentes parties de votre zone de service."}
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-primary-600 mb-4">
            {isEn ? "Google Business Profile for painting companies" : "Google Business Profile pour les entreprises de peinture"}
          </h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {isEn ? "Your Google Business Profile is often the first thing potential customers see. It appears in the Google Maps results and the local pack for searches in your area. A well-maintained profile with good reviews, regular photo updates and weekly posts can generate a significant number of calls on its own — even without a website." : "Votre Google Business Profile est souvent la première chose que voient les clients potentiels. Il apparaît dans les résultats Google Maps et dans le pack local pour les recherches dans votre zone. Un profil bien entretenu avec de bons avis, des mises à jour régulières de photos et des publications hebdomadaires peut générer un nombre significatif d'appels par lui-même — même sans site web."}
          </p>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {isEn ? "For painters, the key elements are: complete and accurate business information, photos of completed jobs (before and after works best), a steady stream of positive reviews and prompt responses to all reviews. Ask every satisfied customer to leave a review — most will do it if you send them a direct link and make it easy. Even five or ten genuine 5-star reviews can make a dramatic difference in how many calls you receive." : "Pour les peintres, les éléments clés sont : des informations commerciales complètes et précises, des photos de travaux terminés (avant/après fonctionne mieux), un flux régulier d'avis positifs et des réponses rapides à tous les avis. Demandez à chaque client satisfait de laisser un avis — la plupart le feront si vous leur envoyez un lien direct et rendez les choses faciles. Même cinq ou dix vrais avis 5 étoiles peuvent faire une différence dramatique dans le nombre d'appels reçus."}
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-primary-600 mb-4">
            {isEn ? "Photos and portfolio: your best sales tool" : "Photos et portfolio : votre meilleur outil de vente"}
          </h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {isEn ? "For painting services, the portfolio is everything. Customers want to see what they will get before they call. Invest time in taking good photos of every project: before the work, during and after. You don't need professional photography — a modern smartphone in good light is sufficient. What matters is showing a range of work types, different rooms and settings, and a clear demonstration of quality." : "Pour les services de peinture, le portfolio est tout. Les clients veulent voir ce qu'ils vont obtenir avant d'appeler. Investissez du temps à prendre de bonnes photos de chaque projet : avant les travaux, pendant et après. Vous n'avez pas besoin de photographie professionnelle — un smartphone moderne dans une bonne lumière suffit. Ce qui compte, c'est de montrer une gamme de types de travaux, différentes pièces et environnements, et une démonstration claire de qualité."}
          </p>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {isEn ? "Organise your portfolio by service type and location. A gallery of exterior painting jobs, another of interior residential work, another of commercial projects. This makes it easy for customers to find examples relevant to their own project. Each photo should have an alt text describing what it shows — this also helps with SEO." : "Organisez votre portfolio par type de service et localisation. Une galerie de travaux de peinture extérieure, une autre de travaux intérieurs résidentiels, une autre de projets commerciaux. Cela facilite la recherche d'exemples pertinents pour leur propre projet. Chaque photo doit avoir un texte alt décrivant ce qu'elle montre — cela aide aussi pour le SEO."}
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-primary-600 mb-4">
            {isEn ? "How to turn website visits into phone calls" : "Comment transformer les visites du site en appels téléphoniques"}
          </h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {isEn ? "Traffic without conversions is useless. Many painter websites get decent traffic but few calls because they bury the phone number or make the contact process too complicated. Your phone number should be visible on every page, ideally in the header. On mobile, it should be a clickable link (tel:) so visitors can call with one tap. Include a simple quote request form that asks for the job type, location and preferred contact method." : "Le trafic sans conversions est inutile. Beaucoup de sites de peintres ont un trafic décent mais peu d'appels parce qu'ils cachent le numéro de téléphone ou compliquent trop le processus de contact. Votre numéro de téléphone doit être visible sur chaque page, idéalement dans l'en-tête. Sur mobile, ce doit être un lien cliquable (tel:) pour que les visiteurs puissent appeler en un tap. Incluez un formulaire simple de demande de devis qui demande le type de travail, la localisation et le mode de contact préféré."}
          </p>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {isEn ? "Response time is critical for service businesses. If someone fills in a quote request form, they are usually comparing multiple painters simultaneously. The first to respond almost always wins the job. Set up email and SMS notifications for form submissions so you can respond within minutes rather than hours. This alone can double your conversion rate from online leads." : "La rapidité de réponse est critique pour les entreprises de service. Si quelqu'un remplit un formulaire de demande de devis, il compare généralement plusieurs peintres simultanément. Le premier à répondre gagne presque toujours le travail. Configurez des notifications par email et SMS pour les soumissions de formulaires afin de pouvoir répondre en minutes plutôt qu'en heures. Cela seul peut doubler votre taux de conversion depuis les leads en ligne."}
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
      <RelatedArticles category="Web Design" />
    </>
  );
}
