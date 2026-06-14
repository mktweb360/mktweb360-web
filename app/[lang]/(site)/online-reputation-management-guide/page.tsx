import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ContactForm } from "@/components/ContactForm";
import { BlogBanner } from "@/components/BlogBanner";
import { RelatedArticles } from "@/components/RelatedArticles";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const isEn = lang === "en";
  return {
    title: isEn ? "How to Manage Your Business Online Reputation — Complete Guide | Mkt Web 360" : "Comment Gérer la Réputation en Ligne de votre Entreprise — Guide Complet | Mkt Web 360",
    description: isEn ? "Step by step guide to managing your business online reputation. How to monitor, respond to reviews and build a positive digital image." : "Guide étape par étape pour gérer la réputation en ligne de votre entreprise. Comment surveiller, répondre aux avis et construire une image numérique positive.",
    alternates: { canonical: `https://www.mktweb360.com/${lang}/online-reputation-management-guide/` },
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
          { label: isEn ? "Online reputation guide" : "Réputation en ligne guide" },
        ]} />
        <p className="text-sm text-accent-500 font-semibold mb-2">Reputation</p>
        <h1 className="text-4xl font-bold text-primary-600 mb-4 leading-tight">
          {isEn ? "How to manage your business online reputation step by step" : "Comment gérer la réputation en ligne de votre entreprise étape par étape"}
        </h1>
        <p className="text-xl text-gray-500 mb-8 leading-relaxed">
          {isEn ? "Your online reputation is what potential customers see before they decide to contact you. This complete guide explains how to monitor it, protect it and actively improve it." : "Votre réputation en ligne est ce que les clients potentiels voient avant de décider de vous contacter. Ce guide complet explique comment la surveiller, la protéger et l'améliorer activement."}
        </p>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-primary-600 mb-4">
            {isEn ? "Why online reputation is your most valuable digital asset" : "Pourquoi la réputation en ligne est votre actif numérique le plus précieux"}
          </h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {isEn ? "Before most consumers contact a business today, they search for it online. What they find — your review scores, what people say about you, how you respond to complaints, whether your information is accurate — forms their first impression before they ever speak to you. Research consistently shows that 93% of consumers read online reviews before making a purchase decision, and 84% trust online reviews as much as personal recommendations." : "Avant que la plupart des consommateurs contactent une entreprise aujourd'hui, ils la recherchent en ligne. Ce qu'ils trouvent — vos scores d'avis, ce que les gens disent de vous, comment vous répondez aux plaintes, si vos informations sont précises — forme leur première impression avant qu'ils vous parlent jamais. La recherche montre régulièrement que 93% des consommateurs lisent des avis en ligne avant de prendre une décision d'achat, et 84% font autant confiance aux avis en ligne qu'aux recommandations personnelles."}
          </p>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {isEn ? "Online reputation also directly affects your local SEO ranking. Google's local ranking algorithm explicitly incorporates review signals — the number of reviews, the average rating, the recency of reviews and the diversity of review sources all contribute to where you appear in local search results and Google Maps. A business with 100 reviews at 4.7 stars will rank better than an equivalent business with 15 reviews at 4.9 stars, in many cases." : "La réputation en ligne affecte également directement votre classement SEO local. L'algorithme de classement local de Google intègre explicitement les signaux d'avis — le nombre d'avis, la note moyenne, la récence des avis et la diversité des sources d'avis contribuent tous à l'endroit où vous apparaissez dans les résultats de recherche locaux et Google Maps. Une entreprise avec 100 avis à 4,7 étoiles se classera mieux qu'une entreprise équivalente avec 15 avis à 4,9 étoiles, dans de nombreux cas."}
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-primary-600 mb-4">
            {isEn ? "How to monitor your brand mentions online" : "Comment surveiller les mentions de votre marque en ligne"}
          </h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {isEn ? "You cannot manage what you are not aware of. Set up a monitoring system to track mentions of your business name and key personnel across the web. Free tools include: Google Alerts (set up alerts for your business name, URL and key personnel names to receive email notifications when new content mentions them), Google Search Console (for your website's search performance), and regular manual checks of your Google Business Profile, Facebook page, and key review platforms relevant to your sector." : "Vous ne pouvez pas gérer ce dont vous n'êtes pas conscient. Configurez un système de surveillance pour suivre les mentions de votre nom d'entreprise et du personnel clé sur le web. Les outils gratuits incluent : Google Alerts (configurez des alertes pour le nom de votre entreprise, URL et noms du personnel clé pour recevoir des notifications email quand un nouveau contenu les mentionne), Google Search Console (pour la performance de recherche de votre site), et des vérifications manuelles régulières de votre Google Business Profile, page Facebook, et plateformes d'avis clés pertinentes pour votre secteur."}
          </p>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {isEn ? "For more comprehensive monitoring, paid tools like Mention, Brand24 or Hootsuite Insights scan social media, news sites and forums in near real-time. These are particularly valuable for businesses in sectors where complaints escalate quickly online (hospitality, healthcare, financial services). The investment in reputation monitoring is small compared to the cost of a reputation crisis that was not caught early." : "Pour une surveillance plus complète, des outils payants comme Mention, Brand24 ou Hootsuite Insights analysent les réseaux sociaux, les sites d'actualités et les forums en temps quasi-réel. Ceux-ci sont particulièrement précieux pour les entreprises dans des secteurs où les plaintes s'escaladent rapidement en ligne (hôtellerie, santé, services financiers). L'investissement dans la surveillance de la réputation est faible comparé au coût d'une crise de réputation qui n'a pas été détectée tôt."}
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-primary-600 mb-4">
            {isEn ? "Google reviews: the most important platform" : "Avis Google : la plateforme la plus importante"}
          </h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {isEn ? "For most businesses, Google reviews are the single most impactful reputation platform. They appear prominently in search results, affect local ranking, and are often the first thing potential customers see. Your Google Business Profile star rating and review count are visible every time someone searches for your business name or finds you in local search." : "Pour la plupart des entreprises, les avis Google sont la plateforme de réputation la plus impactante. Ils apparaissent de manière proéminente dans les résultats de recherche, affectent le classement local, et sont souvent la première chose que les clients potentiels voient. La note en étoiles et le nombre d'avis de votre Google Business Profile sont visibles chaque fois que quelqu'un recherche votre nom d'entreprise ou vous trouve dans la recherche locale."}
          </p>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {isEn ? "The most effective way to improve your Google review score is systematic collection from satisfied customers. Ask for reviews at the moment of highest satisfaction — immediately after completing a job, when a client confirms they are happy with the result. Make it easy: send a direct link to your Google review page (found in your Google Business Profile dashboard). A simple text message or email with the direct link dramatically increases the conversion rate from request to posted review." : "Le moyen le plus efficace d'améliorer votre score d'avis Google est la collecte systématique des clients satisfaits. Demandez des avis au moment de la plus grande satisfaction — immédiatement après avoir terminé un travail, quand un client confirme qu'il est satisfait du résultat. Facilitez la tâche : envoyez un lien direct vers votre page d'avis Google (trouvé dans votre tableau de bord Google Business Profile). Un simple SMS ou email avec le lien direct augmente considérablement le taux de conversion de la demande à l'avis publié."}
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-primary-600 mb-4">
            {isEn ? "How to respond to reviews: positive and negative" : "Comment répondre aux avis : positifs et négatifs"}
          </h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {isEn ? "Responding to reviews is as important as collecting them. Respond to all reviews — positive and negative — within 24-48 hours. For positive reviews: acknowledge the specific praise, thank the reviewer by name if they provided it, and add a short note that adds value (mentioning something specific about the experience). This shows future readers that you engage personally with customers." : "Répondre aux avis est aussi important que de les collecter. Répondez à tous les avis — positifs et négatifs — dans les 24 à 48 heures. Pour les avis positifs : reconnaissez l'éloge spécifique, remerciez le critique par son nom s'il l'a fourni, et ajoutez une courte note qui ajoute de la valeur (mentionnant quelque chose de spécifique à l'expérience). Cela montre aux futurs lecteurs que vous vous engagez personnellement avec les clients."}
          </p>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {isEn ? "For negative reviews: never respond defensively or dismissively. Acknowledge the issue, apologise for the experience, and offer to resolve it offline (provide contact details or invite them to contact you directly). The goal of your response is not to convince the unhappy reviewer — it is to demonstrate to everyone else who reads the review that you take service quality seriously. A well-handled negative review can actually increase trust more than a page of all positive reviews." : "Pour les avis négatifs : ne répondez jamais de manière défensive ou dédaigneuse. Reconnaissez le problème, excusez-vous pour l'expérience, et proposez de le résoudre hors ligne (fournissez des coordonnées ou invitez-les à vous contacter directement). L'objectif de votre réponse n'est pas de convaincre le critique mécontent — c'est de démontrer à tous ceux qui liront l'avis que vous prenez la qualité du service au sérieux. Un avis négatif bien géré peut en réalité augmenter la confiance plus qu'une page entière d'avis positifs."}
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-primary-600 mb-4">
            {isEn ? "Strategy to actively build a positive reputation" : "Stratégie pour construire activement une réputation positive"}
          </h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {isEn ? "A proactive reputation strategy goes beyond reacting to reviews. It includes: creating positive content about your business on your website and social media that ranks in search results for your brand name, encouraging customers to share their experiences across multiple platforms, participating in relevant local and industry communities, and building relationships with local journalists and industry publications who may reference your business." : "Une stratégie de réputation proactive va au-delà de la réaction aux avis. Elle inclut : la création de contenu positif sur votre entreprise sur votre site web et vos réseaux sociaux qui se classe dans les résultats de recherche pour votre nom de marque, encourager les clients à partager leurs expériences sur plusieurs plateformes, participer aux communautés locales et sectorielles pertinentes, et construire des relations avec les journalistes locaux et les publications sectorielles qui pourraient référencer votre entreprise."}
          </p>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {isEn ? "The best long-term reputation strategy is simply to deliver excellent service consistently and make it easy for happy customers to say so publicly. No amount of reputation management can substitute for the genuine goodwill that comes from excellent customer experiences. Build your systems and processes to consistently deliver what you promise, resolve problems quickly when they arise, and thank customers who take the time to share positive feedback." : "La meilleure stratégie de réputation à long terme est simplement de fournir un excellent service de manière cohérente et de faciliter la tâche des clients satisfaits pour le dire publiquement. Aucune gestion de réputation ne peut remplacer la bonne volonté authentique qui découle d'excellentes expériences client. Construisez vos systèmes et processus pour livrer de manière cohérente ce que vous promettez, résoudre les problèmes rapidement quand ils surviennent, et remercier les clients qui prennent le temps de partager des retours positifs."}
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
      <RelatedArticles category="Reputation" />
    </>
  );
}
