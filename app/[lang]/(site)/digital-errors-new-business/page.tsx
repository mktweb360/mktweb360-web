import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ContactForm } from "@/components/ContactForm";
import { BlogBanner } from "@/components/BlogBanner";
import { RelatedArticles } from "@/components/RelatedArticles";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const isEn = lang === "en";
  return {
    title: isEn ? "Digital Mistakes New Businesses Make and How to Avoid Them | Mkt Web 360" : "Erreurs Digitales des Nouvelles Entreprises et Comment les Éviter | Mkt Web 360",
    description: isEn ? "The most common digital mistakes new businesses make and how to avoid them from day one to save time and money." : "Les erreurs digitales les plus courantes des nouvelles entreprises et comment les éviter dès le premier jour pour économiser du temps et de l'argent.",
    alternates: { canonical: `https://www.mktweb360.com/${lang}/digital-errors-new-business/` },
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
          { label: isEn ? "Digital errors" : "Erreurs digitales" },
        ]} />
        <p className="text-sm text-accent-500 font-semibold mb-2">Strategy</p>
        <h1 className="text-4xl font-bold text-primary-600 mb-4 leading-tight">
          {isEn ? "Digital mistakes new businesses make and how to avoid them from day one" : "Erreurs digitales des nouvelles entreprises et comment les éviter dès le premier jour"}
        </h1>
        <p className="text-xl text-gray-500 mb-8 leading-relaxed">
          {isEn ? "Most new businesses make the same digital mistakes. This guide identifies the 5 most costly and explains how to avoid them from the very start." : "La plupart des nouvelles entreprises font les mêmes erreurs digitales. Ce guide identifie les 5 plus coûteuses et explique comment les éviter dès le début."}
        </p>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-primary-600 mb-4">
            {isEn ? "Not having a professional website from day one" : "Ne pas avoir un site web professionnel dès le premier jour"}
          </h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {isEn ? "Many new businesses delay building a website, relying on a social media profile instead. This is a significant strategic error. Your website is the only digital asset you fully own and control — social media profiles can be suspended, reach can be throttled by algorithm changes, and platforms can disappear. Additionally, potential customers increasingly check a company's website as a trust signal before deciding to buy." : "Beaucoup de nouvelles entreprises retardent la création d'un site web, s'appuyant plutôt sur un profil de réseaux sociaux. C'est une erreur stratégique significative. Votre site web est le seul actif numérique que vous possédez et contrôlez entièrement — les profils de réseaux sociaux peuvent être suspendus, la portée peut être limitée par les changements d'algorithme, et les plateformes peuvent disparaître. De plus, les clients potentiels vérifient de plus en plus le site web d'une entreprise comme signal de confiance avant de décider d'acheter."}
          </p>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {isEn ? "A professional website does not need to be elaborate or expensive. A simple, fast, mobile-friendly site with a clear description of your services, a way to contact you, and basic information about your business is sufficient to start. What matters most is that it exists, loads quickly, works on mobile and makes it easy to contact you. You can build on it over time, but establishing it immediately is essential." : "Un site web professionnel n'a pas besoin d'être élaboré ou coûteux. Un site simple, rapide, adapté aux mobiles avec une description claire de vos services, un moyen de vous contacter, et des informations de base sur votre entreprise suffit pour commencer. Ce qui compte le plus, c'est qu'il existe, se charge rapidement, fonctionne sur mobile et facilite le contact. Vous pouvez le développer avec le temps, mais l'établir immédiatement est essentiel."}
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-primary-600 mb-4">
            {isEn ? "Ignoring SEO and local search" : "Ignorer le SEO et la recherche locale"}
          </h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {isEn ? "New businesses often think SEO is something to worry about later. This thinking costs them dearly. SEO is a long-term investment — the benefits compound over time, but they also take time to manifest. Starting SEO work 6 months after launch means 6 months of missed organic traffic. The domain authority you build in the first year continues generating returns for years afterward." : "Les nouvelles entreprises pensent souvent que le SEO est quelque chose dont il faut s'inquiéter plus tard. Cette pensée leur coûte cher. Le SEO est un investissement à long terme — les bénéfices s'accumulent avec le temps, mais ils prennent aussi du temps à se manifester. Commencer le travail SEO 6 mois après le lancement signifie 6 mois de trafic organique manqué. L'autorité de domaine que vous construisez dans la première année continue de générer des retours pendant des années ensuite."}
          </p>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {isEn ? "For local businesses, the minimum viable local SEO setup is: a verified Google Business Profile with complete information, consistent NAP (Name, Address, Phone) data across your website and any directory listings, and basic on-page optimisation (title tags, meta descriptions) for your homepage and key service pages. This setup can be completed in a few hours and will immediately improve your visibility in local Google searches and Google Maps." : "Pour les entreprises locales, la configuration SEO locale minimale viable est : un Google Business Profile vérifié avec des informations complètes, des données NAP (Nom, Adresse, Téléphone) cohérentes sur votre site et toutes les listes d'annuaires, et une optimisation on-page de base (balises title, meta descriptions) pour votre page d'accueil et les pages de services clés. Cette configuration peut être réalisée en quelques heures et améliorera immédiatement votre visibilité dans les recherches Google locales et Google Maps."}
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-primary-600 mb-4">
            {isEn ? "Not setting up tracking and analytics" : "Ne pas configurer le suivi et les analytics"}
          </h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {isEn ? "A new business that launches without Google Analytics 4 and Google Search Console is flying blind. These tools are free and take less than an hour to set up. Without them, you have no data about how many people visit your website, where they come from, what they look at, or whether your marketing is working. Every month without tracking is data you can never recover — you cannot retroactively see what traffic you had before you installed analytics." : "Une nouvelle entreprise qui lance sans Google Analytics 4 et Google Search Console navigue à l'aveugle. Ces outils sont gratuits et prennent moins d'une heure à configurer. Sans eux, vous n'avez aucune donnée sur le nombre de personnes qui visitent votre site, d'où elles viennent, ce qu'elles regardent, ou si votre marketing fonctionne. Chaque mois sans suivi est une donnée que vous ne pourrez jamais récupérer — vous ne pouvez pas voir rétrospectivement quel trafic vous aviez avant d'installer les analytics."}
          </p>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {isEn ? "Beyond basic analytics, set up conversion tracking from day one. Define what a conversion means for your business (a contact form submission, a phone click, a purchase) and configure Google Analytics to track these events. This data is what allows you to evaluate which marketing activities generate business results versus which just generate traffic without value." : "Au-delà des analytics de base, configurez le suivi des conversions dès le premier jour. Définissez ce que signifie une conversion pour votre entreprise (une soumission de formulaire de contact, un clic téléphonique, un achat) et configurez Google Analytics pour suivre ces événements. Ces données vous permettent d'évaluer quelles activités marketing génèrent des résultats commerciaux versus lesquelles génèrent juste du trafic sans valeur."}
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-primary-600 mb-4">
            {isEn ? "Trying to be on every social platform" : "Essayer d'être sur chaque plateforme sociale"}
          </h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {isEn ? "New businesses often feel pressure to establish a presence on every social media platform simultaneously. This is a recipe for poor quality on all of them. Each platform requires a different content approach, different posting cadence, and different community management. Spreading limited resources across 5 platforms means none of them gets enough attention to build an engaged audience." : "Les nouvelles entreprises ressentent souvent la pression d'établir une présence sur chaque plateforme de réseaux sociaux simultanément. C'est une recette pour une mauvaise qualité sur toutes. Chaque plateforme nécessite une approche de contenu différente, une cadence de publication différente, et une gestion de communauté différente. Disperser des ressources limitées sur 5 plateformes signifie qu'aucune n'obtient suffisamment d'attention pour construire une audience engagée."}
          </p>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {isEn ? "The better approach: identify the 1-2 platforms where your target customers are most active and focus there completely. For B2B businesses, LinkedIn is usually the priority. For B2C businesses targeting younger demographics, Instagram and TikTok are typically most effective. For local service businesses, Google Business Profile (not technically a social platform, but operating similarly) and Facebook are often the strongest. Better to be excellent on one platform than mediocre on five." : "La meilleure approche : identifiez les 1 à 2 plateformes où vos clients cibles sont les plus actifs et concentrez-vous complètement là. Pour les entreprises B2B, LinkedIn est généralement la priorité. Pour les entreprises B2C ciblant les jeunes démographies, Instagram et TikTok sont généralement les plus efficaces. Pour les entreprises de services locaux, Google Business Profile (pas techniquement une plateforme sociale, mais fonctionnant de manière similaire) et Facebook sont souvent les plus forts. Mieux vaut être excellent sur une plateforme que médiocre sur cinq."}
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-primary-600 mb-4">
            {isEn ? "Not having a clear digital strategy before spending" : "Ne pas avoir de stratégie digitale claire avant de dépenser"}
          </h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {isEn ? "New businesses often jump straight to spending on digital marketing without a clear strategy. They run Google Ads without a converting landing page. They invest in SEO without keyword research. They post on social media without a content strategy. Each of these actions wastes money. A clear digital strategy — even a simple one-page document defining your target customer, their search behaviour, the channels you will use and the metrics you will track — dramatically improves the return from every marketing spend." : "Les nouvelles entreprises passent souvent directement à la dépense en marketing digital sans stratégie claire. Elles lancent Google Ads sans page d'atterrissage convertissante. Elles investissent dans le SEO sans recherche de mots-clés. Elles publient sur les réseaux sociaux sans stratégie de contenu. Chacune de ces actions gaspille de l'argent. Une stratégie digitale claire — même un document d'une page définissant votre client cible, son comportement de recherche, les canaux que vous utiliserez et les métriques que vous suivrez — améliore considérablement le retour de chaque dépense marketing."}
          </p>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {isEn ? "The minimum viable digital strategy: 1) Define your 1-2 primary target customer personas including how and where they search for businesses like yours. 2) Choose 2-3 marketing channels to focus on. 3) Define your key conversion objective (leads, sales, bookings). 4) Set a monthly budget and minimum acceptable cost per conversion. 5) Commit to a review period — typically 90 days — before making major strategy changes. This framework prevents the reactive marketing approach that wastes most new business budgets." : "La stratégie digitale minimale viable : 1) Définissez vos 1 à 2 personas de clients cibles principaux incluant comment et où ils recherchent des entreprises comme la vôtre. 2) Choisissez 2 à 3 canaux marketing sur lesquels vous concentrer. 3) Définissez votre objectif de conversion clé (leads, ventes, réservations). 4) Fixez un budget mensuel et un coût par conversion minimum acceptable. 5) Engagez-vous sur une période de révision — généralement 90 jours — avant de faire des changements de stratégie majeurs. Ce cadre prévient l'approche marketing réactive qui gaspille la plupart des budgets des nouvelles entreprises."}
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
      <RelatedArticles category="Strategy" />
    </>
  );
}
