import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ContactForm } from "@/components/ContactForm";
import { BlogBanner } from "@/components/BlogBanner";
import { RelatedArticles } from "@/components/RelatedArticles";
import { alternatesFor } from "@/lib/i18n/routes";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const isEn = lang === "en";
  return {
    title: isEn ? "What to Review Before Investing More in Digital Marketing | Mkt Web 360" : "Ce qu'il faut vérifier avant d'investir davantage en marketing digital | Mkt Web 360",
    description: isEn ? "Before investing more in digital marketing, review these 7 key areas to avoid amplifying mistakes and make better investment decisions." : "Avant d'investir davantage en marketing digital, vérifiez ces 7 domaines clés pour éviter d'amplifier les erreurs et prendre de meilleures décisions d'investissement.",
    alternates: alternatesFor(`/${lang}/what-to-review-before-investing-marketing/`) ?? {
      canonical: `https://www.mktweb360.com/${lang}/what-to-review-before-investing-marketing/`,
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
          { label: isEn ? "Before investing" : "Avant d'investir" },
        ]} />
        <p className="text-sm text-accent-500 font-semibold mb-2">Strategy</p>
        <h1 className="text-4xl font-bold text-primary-600 mb-4 leading-tight">
          {isEn ? "What to review before investing more in digital marketing" : "Ce qu'il faut vérifier avant d'investir davantage en marketing digital"}
        </h1>
        <p className="text-xl text-gray-500 mb-8 leading-relaxed">
          {isEn ? "Investing more in marketing without reviewing what is already working is one of the most common mistakes SMEs make. This guide explains the 7 areas you must review first." : "Investir davantage en marketing sans vérifier ce qui fonctionne déjà est l'une des erreurs les plus courantes des PME. Ce guide explique les 7 domaines que vous devez vérifier en premier."}
        </p>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-primary-600 mb-4">
            {isEn ? "Why more budget doesn't always mean better results" : "Pourquoi plus de budget ne signifie pas toujours de meilleurs résultats"}
          </h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {isEn ? "Increasing your marketing budget amplifies what is already happening. If your current marketing is generating profitable results, more budget will generate more results. But if there are underlying problems — a slow website, poor tracking, messaging that doesn't resonate — more budget will amplify those problems too. You will spend more money generating leads that don't convert, traffic that bounces immediately, or ads that reach the wrong audience." : "Augmenter votre budget marketing amplifie ce qui se passe déjà. Si votre marketing actuel génère des résultats rentables, plus de budget génèrera plus de résultats. Mais s'il y a des problèmes sous-jacents — un site lent, un mauvais suivi, une messagerie qui ne résonne pas — plus de budget amplifiera aussi ces problèmes. Vous dépenserez plus d'argent pour générer des leads qui ne convertissent pas, du trafic qui rebondit immédiatement, ou des publicités qui atteignent la mauvaise audience."}
          </p>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {isEn ? "The sequence matters: review before you invest. A strategic review that takes one week can save months of wasted budget. The best marketing investments are made after understanding why current activity is or isn't working — not before. Even if your goal is to scale something that is working, understanding precisely why it works helps you scale it more effectively." : "La séquence est importante : vérifiez avant d'investir. Une révision stratégique qui prend une semaine peut économiser des mois de budget gaspillé. Les meilleurs investissements marketing sont faits après avoir compris pourquoi l'activité actuelle fonctionne ou ne fonctionne pas — pas avant. Même si votre objectif est d'amplifier quelque chose qui fonctionne, comprendre précisément pourquoi cela fonctionne vous aide à l'amplifier plus efficacement."}
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-primary-600 mb-4">
            {isEn ? "Audit your website before spending on ads" : "Auditez votre site avant de dépenser en publicité"}
          </h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {isEn ? "Your website is where most marketing investments ultimately send people. If it loads slowly, has a confusing navigation, makes unclear offers or doesn't work properly on mobile, all the traffic in the world won't generate results. Before increasing any advertising spend, check: How fast does your site load on mobile? (Use Google PageSpeed Insights). What is your bounce rate from paid channels? What percentage of visitors who reach your contact page actually submit a form?" : "Votre site web est l'endroit où la plupart des investissements marketing envoient finalement les gens. S'il se charge lentement, a une navigation confuse, fait des offres peu claires ou ne fonctionne pas correctement sur mobile, tout le trafic du monde ne générera pas de résultats. Avant d'augmenter une dépense publicitaire, vérifiez : Quelle est la vitesse de chargement de votre site sur mobile ? (Utilisez Google PageSpeed Insights). Quel est votre taux de rebond depuis les canaux payants ? Quel pourcentage de visiteurs qui atteignent votre page de contact soumettent réellement un formulaire ?"}
          </p>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {isEn ? "A site that loads in under 3 seconds, has a clear value proposition on the homepage, makes it easy to contact you and works flawlessly on mobile is a prerequisite for profitable paid advertising. Fixing these issues before spending on ads is almost always a better return on investment than running ads to a broken funnel." : "Un site qui se charge en moins de 3 secondes, a une proposition de valeur claire sur la page d'accueil, facilite le contact et fonctionne parfaitement sur mobile est un prérequis pour une publicité payante rentable. Corriger ces problèmes avant de dépenser en publicité est presque toujours un meilleur retour sur investissement que de diffuser des publicités vers un entonnoir défaillant."}
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-primary-600 mb-4">
            {isEn ? "Review your tracking and analytics setup" : "Vérifiez votre suivi et configuration analytique"}
          </h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {isEn ? "You cannot improve what you cannot measure. Before investing more in marketing, verify that your analytics setup is correct: Is Google Analytics 4 properly installed and collecting data? Are your conversion goals configured (form submissions, phone clicks, purchases)? Is Google Tag Manager set up? Are you tracking which specific channels generate your best leads?" : "Vous ne pouvez pas améliorer ce que vous ne pouvez pas mesurer. Avant d'investir davantage en marketing, vérifiez que votre configuration analytique est correcte : Google Analytics 4 est-il correctement installé et collecte-t-il des données ? Vos objectifs de conversion sont-ils configurés (soumissions de formulaires, clics téléphoniques, achats) ? Google Tag Manager est-il configuré ? Suivez-vous quels canaux spécifiques génèrent vos meilleurs leads ?"}
          </p>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {isEn ? "Without proper conversion tracking, you are making investment decisions blind. Many SMEs discover when they first set up proper tracking that their assumptions about which marketing channels work were completely wrong. The channel that felt most productive was actually generating low-quality leads, while an overlooked channel was quietly generating the best customers." : "Sans suivi de conversion approprié, vous prenez des décisions d'investissement à l'aveugle. De nombreuses PME découvrent lorsqu'elles configurent pour la première fois un suivi approprié que leurs hypothèses sur les canaux marketing qui fonctionnent étaient complètement erronées. Le canal qui semblait le plus productif générait en réalité des leads de mauvaise qualité, tandis qu'un canal négligé générait silencieusement les meilleurs clients."}
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-primary-600 mb-4">
            {isEn ? "Analyse your current channels and ROI" : "Analysez vos canaux actuels et votre ROI"}
          </h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {isEn ? "For each marketing channel you currently use, calculate the cost per lead and the cost per customer acquired. Include not just media spend but also time costs — how many hours per week does maintaining this channel require, and what is that time worth? Some channels that appear cheap in media spend are actually expensive when time is factored in." : "Pour chaque canal marketing que vous utilisez actuellement, calculez le coût par lead et le coût par client acquis. Incluez non seulement les dépenses médias mais aussi les coûts en temps — combien d'heures par semaine le maintien de ce canal nécessite-t-il, et quelle est la valeur de ce temps ? Certains canaux qui semblent peu coûteux en dépenses médias sont en réalité coûteux quand le temps est pris en compte."}
          </p>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {isEn ? "Once you have the data, the investment decision becomes clearer: double down on channels with proven positive ROI before testing new ones. Improve or eliminate channels with negative or unmeasurable ROI. Test new channels with a small budget and a defined measurement period before scaling. This disciplined approach to channel investment is what separates businesses that grow their marketing efficiency over time from those that just increase their spend." : "Une fois que vous avez les données, la décision d'investissement devient plus claire : misez davantage sur les canaux avec un ROI positif prouvé avant d'en tester de nouveaux. Améliorez ou éliminez les canaux avec un ROI négatif ou non mesurable. Testez de nouveaux canaux avec un petit budget et une période de mesure définie avant de les amplifier. Cette approche disciplinée de l'investissement en canaux est ce qui sépare les entreprises qui améliorent leur efficacité marketing au fil du temps de celles qui augmentent juste leurs dépenses."}
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-primary-600 mb-4">
            {isEn ? "Define clear objectives before investing" : "Définissez des objectifs clairs avant d'investir"}
          </h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {isEn ? "Vague objectives produce vague results. 'Get more visibility' or 'grow our social media' are not investment-grade objectives. Before allocating budget, define specifically: What is the target number of leads, sales or revenue? By when? What is the maximum acceptable cost per acquisition? What will success look like at the end of the period? These specific objectives make it possible to evaluate whether the investment worked." : "Les objectifs vagues produisent des résultats vagues. 'Obtenir plus de visibilité' ou 'développer nos réseaux sociaux' ne sont pas des objectifs d'investissement. Avant d'allouer un budget, définissez spécifiquement : Quel est le nombre cible de leads, de ventes ou de revenus ? Pour quand ? Quel est le coût par acquisition maximum acceptable ? À quoi ressemblera le succès à la fin de la période ? Ces objectifs spécifiques permettent d'évaluer si l'investissement a fonctionné."}
          </p>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {isEn ? "A practical framework: for any new marketing investment, define your minimum success threshold (the result that would justify the investment), your target (the result you are aiming for) and your stretch goal (the result that would exceed expectations). Review against these benchmarks at 30, 60 and 90 days and make data-driven decisions about whether to continue, adjust or stop." : "Un cadre pratique : pour tout nouvel investissement marketing, définissez votre seuil de succès minimum (le résultat qui justifierait l'investissement), votre cible (le résultat que vous visez) et votre objectif ambitieux (le résultat qui dépasserait les attentes). Examinez par rapport à ces benchmarks à 30, 60 et 90 jours et prenez des décisions basées sur les données pour continuer, ajuster ou arrêter."}
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
