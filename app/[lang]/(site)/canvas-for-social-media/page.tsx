import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ContactForm } from "@/components/ContactForm";
import { BlogBanner } from "@/components/BlogBanner";
import { RelatedArticles } from "@/components/RelatedArticles";
import { alternatesFor } from "@/lib/i18n/routes";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const isEn = lang === "en";
  return {
    title: isEn ? "How to Use the Canvas Framework for Social Media Management | Mkt Web 360" : "Comment utiliser le Canvas pour la gestion des réseaux sociaux | Mkt Web 360",
    description: isEn ? "How to apply the Canvas business model framework to your social media strategy. Practical guide with examples." : "Comment appliquer le modèle Canvas à votre stratégie de réseaux sociaux. Guide pratique avec exemples.",
    alternates: alternatesFor(`/${lang}/canvas-for-social-media/`) ?? {
      canonical: `https://www.mktweb360.com/${lang}/canvas-for-social-media/`,
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
          { label: isEn ? "Canvas social media" : "Canvas réseaux sociaux" },
        ]} />
        <p className="text-sm text-accent-500 font-semibold mb-2">Social Media</p>
        <h1 className="text-4xl font-bold text-primary-600 mb-4 leading-tight">
          {isEn ? "How to use the Canvas framework to manage your social media strategy" : "Comment utiliser le Canvas pour gérer votre stratégie de réseaux sociaux"}
        </h1>
        <p className="text-xl text-gray-500 mb-8 leading-relaxed">
          {isEn ? "The Business Model Canvas can be adapted to plan and manage your social media strategy. This guide explains how to use it to create a clearer, more structured content strategy." : "Le Business Model Canvas peut être adapté pour planifier et gérer votre stratégie de réseaux sociaux. Ce guide explique comment l'utiliser pour créer une stratégie de contenu plus claire et structurée."}
        </p>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-primary-600 mb-4">
            {isEn ? "What the Canvas framework is and how it applies to social media" : "Qu'est-ce que le Canvas et comment il s'applique aux réseaux sociaux"}
          </h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {isEn ? "The Business Model Canvas, developed by Alexander Osterwalder, is a one-page visual framework that maps out the nine building blocks of a business model. While it was originally designed for business planning, its structure translates well to social media strategy: it forces you to think about your audience (customers), your content offering (value proposition), the platforms you use (channels), how you engage (customer relationships) and how you measure success (key metrics)." : "Le Business Model Canvas, développé par Alexander Osterwalder, est un cadre visuel d'une page qui cartographie les neuf blocs de construction d'un modèle commercial. Bien qu'il ait été conçu à l'origine pour la planification d'entreprise, sa structure se traduit bien en stratégie de réseaux sociaux : il vous force à réfléchir à votre audience (clients), votre offre de contenu (proposition de valeur), les plateformes que vous utilisez (canaux), comment vous vous engagez (relations clients) et comment vous mesurez le succès (métriques clés)."}
          </p>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {isEn ? "The Canvas approach solves a common problem in social media management: teams that post inconsistently, with unclear objectives, targeting vague audiences, on platforms that don't match their business goals. Mapping your social strategy on a Canvas creates a shared visual reference that keeps the whole team aligned and makes it easier to identify gaps and inconsistencies." : "L'approche Canvas résout un problème courant dans la gestion des réseaux sociaux : les équipes qui publient de manière inconsistante, avec des objectifs peu clairs, ciblant des audiences vagues, sur des plateformes qui ne correspondent pas à leurs objectifs commerciaux. Cartographier votre stratégie sociale sur un Canvas crée une référence visuelle partagée qui maintient toute l'équipe alignée et facilite l'identification des lacunes et incohérences."}
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-primary-600 mb-4">
            {isEn ? "Mapping your audience on the Canvas" : "Cartographier votre audience sur le Canvas"}
          </h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {isEn ? "The customer segments block of the Canvas becomes your social media audience definition. Go beyond basic demographics. For each target audience segment, define: what platforms they use most (and at what times), what type of content they engage with, what problems they are trying to solve, and what motivates them to follow a business account. Different segments may require different platform strategies." : "Le bloc segments de clientèle du Canvas devient votre définition de l'audience sur les réseaux sociaux. Allez au-delà des données démographiques de base. Pour chaque segment d'audience cible, définissez : quelles plateformes ils utilisent le plus (et à quelles heures), quel type de contenu les engage, quels problèmes ils essaient de résoudre, et ce qui les motive à suivre un compte professionnel. Différents segments peuvent nécessiter différentes stratégies de plateforme."}
          </p>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {isEn ? "Most businesses have 2-3 distinct audience segments on social media. A restaurant might have: local residents (who want to know about daily specials and events), tourists (who need to know about the type of cuisine and atmosphere), and food enthusiasts (who engage with recipe stories and behind-the-scenes content). Each segment has different content needs and may behave differently across platforms." : "La plupart des entreprises ont 2 à 3 segments d'audience distincts sur les réseaux sociaux. Un restaurant pourrait avoir : les résidents locaux (qui veulent connaître les plats du jour et les événements), les touristes (qui ont besoin de connaître le type de cuisine et l'atmosphère), et les passionnés de gastronomie (qui s'engagent avec des histoires de recettes et du contenu coulisses). Chaque segment a des besoins de contenu différents et peut se comporter différemment selon les plateformes."}
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-primary-600 mb-4">
            {isEn ? "Value proposition for each social platform" : "Proposition de valeur pour chaque plateforme sociale"}
          </h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {isEn ? "Each social platform should have a clear value proposition — what specific value do you offer followers on that platform, and why should they follow you there rather than elsewhere? Instagram: visual inspiration and behind-the-scenes. LinkedIn: industry insights and professional development. TikTok: entertaining and educational short-form content. X (Twitter): real-time commentary and customer service. If you cannot define a clear, differentiated value for a platform, you probably should not be on it." : "Chaque plateforme sociale devrait avoir une proposition de valeur claire — quelle valeur spécifique offrez-vous aux abonnés sur cette plateforme, et pourquoi devraient-ils vous y suivre plutôt qu'ailleurs ? Instagram : inspiration visuelle et coulisses. LinkedIn : insights sectoriels et développement professionnel. TikTok : contenu court divertissant et éducatif. X (Twitter) : commentaires en temps réel et service client. Si vous ne pouvez pas définir une valeur claire et différenciée pour une plateforme, vous ne devriez probablement pas y être."}
          </p>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {isEn ? "Document your value proposition for each platform in the Canvas and review it quarterly. Platforms evolve, algorithm changes shift what types of content perform, and your audience's platform preferences change over time. What worked on Facebook in 2020 does not necessarily work in 2025. The Canvas gives you a framework to regularly reassess whether each platform still justifies the investment of time and resources." : "Documentez votre proposition de valeur pour chaque plateforme dans le Canvas et révisez-la trimestriellement. Les plateformes évoluent, les changements d'algorithme font évoluer les types de contenu qui performent, et les préférences de plateformes de votre audience changent avec le temps. Ce qui fonctionnait sur Facebook en 2020 ne fonctionne pas nécessairement en 2025. Le Canvas vous donne un cadre pour réévaluer régulièrement si chaque plateforme justifie encore l'investissement de temps et de ressources."}
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-primary-600 mb-4">
            {isEn ? "Content channels and key activities" : "Canaux de contenu et activités clés"}
          </h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {isEn ? "The channels block in the Canvas maps to your content distribution strategy. For social media, this means: Which content formats (video, static image, carousel, story, reel, text post) will you produce for each platform? How often will you post? What is your repurposing strategy — how do you adapt a piece of content created for one platform for use on others? What is the production workflow from idea to published post?" : "Le bloc canaux dans le Canvas correspond à votre stratégie de distribution de contenu. Pour les réseaux sociaux, cela signifie : Quels formats de contenu (vidéo, image statique, carrousel, story, reel, post texte) allez-vous produire pour chaque plateforme ? À quelle fréquence allez-vous publier ? Quelle est votre stratégie de réutilisation — comment adaptez-vous un contenu créé pour une plateforme pour une utilisation sur d'autres ? Quel est le flux de production de l'idée au post publié ?"}
          </p>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {isEn ? "Key activities in the Canvas context are the recurring tasks required to execute your social strategy: weekly content creation sessions, daily community management, monthly performance reviews, quarterly strategy adjustments. Map these to responsible team members and time allocations. Most social media failures are not strategy failures — they are execution failures caused by underestimating the time required for consistent, quality content creation." : "Les activités clés dans le contexte Canvas sont les tâches récurrentes nécessaires pour exécuter votre stratégie sociale : sessions hebdomadaires de création de contenu, gestion de communauté quotidienne, révisions mensuelles des performances, ajustements trimestriels de stratégie. Mappez-les aux membres de l'équipe responsables et aux allocations de temps. La plupart des échecs sur les réseaux sociaux ne sont pas des échecs de stratégie — ce sont des échecs d'exécution causés par une sous-estimation du temps nécessaire pour une création de contenu cohérente et de qualité."}
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-primary-600 mb-4">
            {isEn ? "Measuring success with the Canvas framework" : "Mesurer le succès avec le Canvas"}
          </h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {isEn ? "The Canvas forces you to define what success looks like before you start. For social media, map your key metrics to your business objectives — not platform vanity metrics. If your objective is lead generation, track link clicks, direct message inquiries and website sessions from social. If your objective is brand awareness, track reach and impression growth. If your objective is community building, track engagement rate and follower quality." : "Le Canvas vous force à définir à quoi ressemble le succès avant de commencer. Pour les réseaux sociaux, alignez vos métriques clés sur vos objectifs commerciaux — pas les métriques de vanité des plateformes. Si votre objectif est la génération de leads, suivez les clics sur les liens, les demandes par message direct et les sessions web depuis les réseaux sociaux. Si votre objectif est la notoriété de marque, suivez la croissance de la portée et des impressions. Si votre objectif est la construction de communauté, suivez le taux d'engagement et la qualité des abonnés."}
          </p>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {isEn ? "Review your Canvas quarterly — not just the metrics but the entire model. Have your audience segments changed? Is your value proposition still relevant? Are the platforms you are on still the right ones? A Canvas that is reviewed and updated regularly becomes a living strategic document that keeps your social media investment aligned with your business goals over time." : "Révisez votre Canvas trimestriellement — pas seulement les métriques mais le modèle entier. Vos segments d'audience ont-ils changé ? Votre proposition de valeur est-elle toujours pertinente ? Les plateformes sur lesquelles vous êtes sont-elles toujours les bonnes ? Un Canvas qui est révisé et mis à jour régulièrement devient un document stratégique vivant qui maintient votre investissement en réseaux sociaux aligné avec vos objectifs commerciaux au fil du temps."}
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
      <RelatedArticles category="Social Media" />
    </>
  );
}
