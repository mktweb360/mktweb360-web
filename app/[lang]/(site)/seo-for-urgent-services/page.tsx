import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ContactForm } from "@/components/ContactForm";
import { BlogBanner } from "@/components/BlogBanner";
import { RelatedArticles } from "@/components/RelatedArticles";
import { alternatesFor } from "@/lib/i18n/routes";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const isEn = lang === "en";
  return {
    title: isEn ? "SEO for Urgent Services — How to Appear When Someone Needs You Now | Mkt Web 360" : "SEO pour Services Urgents — Comment Apparaître Quand Quelqu'un a Besoin de Vous Maintenant | Mkt Web 360",
    description: isEn ? "SEO strategy for emergency and urgent service businesses. How to appear at the top of Google when someone needs you urgently." : "Stratégie SEO pour les entreprises de services d'urgence. Comment apparaître en tête de Google quand quelqu'un a besoin de vous d'urgence.",
    alternates: alternatesFor(`/${lang}/seo-for-urgent-services/`) ?? {
      canonical: `https://www.mktweb360.com/${lang}/seo-for-urgent-services/`,
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
          { label: isEn ? "SEO urgent services" : "SEO services urgents" },
        ]} />
        <p className="text-sm text-accent-500 font-semibold mb-2">SEO</p>
        <h1 className="text-4xl font-bold text-primary-600 mb-4 leading-tight">
          {isEn ? "SEO for urgent services: how to appear when someone needs you right now" : "SEO pour services urgents : comment apparaître quand quelqu'un a besoin de vous maintenant"}
        </h1>
        <p className="text-xl text-gray-500 mb-8 leading-relaxed">
          {isEn ? "When someone needs an emergency plumber, locksmith or electrician, they search Google and call the first result. This guide explains how to be that first result." : "Quand quelqu'un a besoin d'un plombier, serrurier ou électricien d'urgence, il cherche sur Google et appelle le premier résultat. Ce guide explique comment être ce premier résultat."}
        </p>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-primary-600 mb-4">
            {isEn ? "How urgent service searches work on Google" : "Comment fonctionnent les recherches de services urgents sur Google"}
          </h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {isEn ? "Urgent service searches have unique characteristics: they happen under stress, they are highly time-sensitive, and the user has very low tolerance for anything that delays them finding a solution. Someone with a burst pipe is not going to carefully compare five plumbers — they will call the first credible result. This means that ranking position matters more for urgent services than almost any other category." : "Les recherches de services urgents ont des caractéristiques uniques : elles se produisent sous stress, sont très sensibles au temps, et l'utilisateur a une très faible tolérance à tout ce qui retarde la recherche d'une solution. Quelqu'un avec une canalisation éclatée ne va pas soigneusement comparer cinq plombiers — il appellera le premier résultat crédible. Cela signifie que la position de classement compte plus pour les services urgents que pour presque toute autre catégorie."}
          </p>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {isEn ? "For most urgent service queries, Google shows: Google Ads (first 2-3 results), the local pack (map with 3 businesses), and organic results. Appearing in both the local pack and the top organic results gives you maximum visibility. The local pack is powered by Google Business Profile, while organic results depend on your website SEO. Both are essential." : "Pour la plupart des requêtes de services urgents, Google montre : Google Ads (2 à 3 premiers résultats), le pack local (carte avec 3 entreprises), et les résultats organiques. Apparaître à la fois dans le pack local et dans les premiers résultats organiques vous donne une visibilité maximale. Le pack local est alimenté par Google Business Profile, tandis que les résultats organiques dépendent du SEO de votre site. Les deux sont essentiels."}
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-primary-600 mb-4">
            {isEn ? "Keywords for urgent services" : "Mots-clés pour les services urgents"}
          </h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {isEn ? "Urgent service keywords have specific patterns: they include location ('plumber in Madrid'), urgency signals ('emergency plumber', '24 hour plumber', 'plumber now'), and sometimes specific problems ('burst pipe', 'blocked drain', 'no hot water'). Create dedicated pages for each major keyword cluster — an emergency plumbing page, a specific page for each common urgent problem — rather than trying to rank one page for everything." : "Les mots-clés de services urgents ont des modèles spécifiques : ils incluent une localisation ('plombier à Madrid'), des signaux d'urgence ('plombier d'urgence', 'plombier 24h', 'plombier maintenant'), et parfois des problèmes spécifiques ('canalisation éclatée', 'évier bouché', 'pas d'eau chaude'). Créez des pages dédiées pour chaque cluster de mots-clés majeur — une page de plomberie d'urgence, une page spécifique pour chaque problème urgent courant — plutôt que d'essayer de classer une seule page pour tout."}
          </p>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {isEn ? "Long-tail emergency keywords often convert better than generic ones. 'Locksmith to open door without key Madrid' converts better than just 'locksmith Madrid' because it matches a specific urgent situation. Create content that addresses these specific situations — not just 'our locksmith services' but 'locked out of your house in Madrid? We're there in under 30 minutes.'" : "Les mots-clés d'urgence à longue traîne convertissent souvent mieux que les génériques. 'Serrurier ouvrir porte sans clé Madrid' convertit mieux que juste 'serrurier Madrid' parce qu'il correspond à une situation urgente spécifique. Créez du contenu qui adresse ces situations spécifiques — pas juste 'nos services de serrurerie' mais 'bloqué dehors de votre maison à Madrid ? Nous sommes là en moins de 30 minutes.'"}
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-primary-600 mb-4">
            {isEn ? "Google Business Profile for emergency services" : "Google Business Profile pour les services d'urgence"}
          </h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {isEn ? "For emergency services, the Google Business Profile is often more important than the website itself because it appears prominently in mobile searches and includes your phone number with a click-to-call button. Ensure your Business Profile has: 24/7 or extended hours clearly listed, emergency service as a primary category, your phone number prominently displayed and correct, and regular posts demonstrating availability." : "Pour les services d'urgence, le Google Business Profile est souvent plus important que le site web lui-même car il apparaît de manière proéminente dans les recherches mobiles et inclut votre numéro de téléphone avec un bouton click-to-call. Assurez-vous que votre Business Profile a : des horaires 24h/24 ou étendus clairement indiqués, le service d'urgence comme catégorie principale, votre numéro de téléphone bien visible et correct, et des publications régulières démontrant votre disponibilité."}
          </p>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {isEn ? "Reviews are especially critical for emergency services. When someone needs an emergency plumber at 2am, they don't have time to research — they trust the business with the most and best reviews. A profile with 50+ positive reviews will almost always win the click over a profile with 5 reviews, even if the latter ranks higher. Systematically collect reviews from every satisfied emergency job you complete." : "Les avis sont particulièrement critiques pour les services d'urgence. Quand quelqu'un a besoin d'un plombier d'urgence à 2h du matin, il n'a pas le temps de faire des recherches — il fait confiance à l'entreprise avec le plus et les meilleurs avis. Un profil avec 50+ avis positifs gagnera presque toujours le clic sur un profil avec 5 avis, même si ce dernier se positionne plus haut. Collectez systématiquement des avis pour chaque travail d'urgence satisfaisant que vous accomplissez."}
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-primary-600 mb-4">
            {isEn ? "Page speed: critical for urgent service websites" : "Vitesse de la page : critique pour les sites de services urgents"}
          </h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {isEn ? "For urgent services, page speed is not just a ranking factor — it directly affects conversions. Someone dealing with an emergency situation will abandon a site that takes 5 seconds to load. They will go back to Google and call the next result. Target a mobile page load time under 2 seconds. This typically requires: optimised images, minimal JavaScript, a fast hosting plan and ideally a CDN." : "Pour les services urgents, la vitesse de la page n'est pas seulement un facteur de classement — elle affecte directement les conversions. Quelqu'un en situation d'urgence abandonnera un site qui prend 5 secondes à se charger. Il retournera sur Google et appellera le résultat suivant. Visez un temps de chargement de page mobile inférieur à 2 secondes. Cela nécessite généralement : des images optimisées, un JavaScript minimal, un plan d'hébergement rapide et idéalement un CDN."}
          </p>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {isEn ? "The most important element above the fold on an emergency service website is the phone number — make it large, visible and clickable. Everything else is secondary. Many emergency service businesses make the mistake of leading with their service features or company history. The customer doesn't care about that in an emergency. They want to know you are available and can call you with one tap." : "L'élément le plus important au-dessus du pli sur un site de service d'urgence est le numéro de téléphone — rendez-le grand, visible et cliquable. Tout le reste est secondaire. Beaucoup d'entreprises de services d'urgence font l'erreur de mettre en avant leurs caractéristiques de service ou leur historique. Le client ne s'en préoccupe pas en situation d'urgence. Il veut savoir que vous êtes disponible et pouvoir vous appeler en un tap."}
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-primary-600 mb-4">
            {isEn ? "Reviews and trust signals for emergency services" : "Avis et signaux de confiance pour les services d'urgence"}
          </h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {isEn ? "Trust signals are disproportionately important for emergency services because customers have no time to do extended research. Key trust signals include: a high volume of recent, genuine Google reviews, clear pricing transparency (even if just 'from €X'), professional photos of the team and vehicles, years in business prominently stated, and any relevant certifications or licenses displayed." : "Les signaux de confiance sont disproportionnellement importants pour les services d'urgence car les clients n'ont pas le temps de faire des recherches approfondies. Les signaux de confiance clés incluent : un volume élevé d'avis Google récents et authentiques, une transparence claire sur les prix (même juste 'à partir de X€'), des photos professionnelles de l'équipe et des véhicules, les années d'activité mentionnées de manière proéminente, et toutes les certifications ou licences pertinentes affichées."}
          </p>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {isEn ? "Schema markup for local businesses and service schema can help emergency service businesses appear in rich results. Implement 'Emergency Service' or relevant service schema to help Google understand your business type. Also ensure your NAP (Name, Address, Phone) data is identical across your website, Google Business Profile and any directory listings — inconsistencies confuse both users and Google." : "Le balisage schema pour les entreprises locales et le schema de service peuvent aider les entreprises de services d'urgence à apparaître dans les résultats enrichis. Implémentez 'Emergency Service' ou un schema de service pertinent pour aider Google à comprendre votre type d'entreprise. Assurez-vous également que vos données NAP (Nom, Adresse, Téléphone) sont identiques sur votre site, Google Business Profile et toute liste d'annuaires — les incohérences perturbent à la fois les utilisateurs et Google."}
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
      <RelatedArticles category="SEO" />
    </>
  );
}
