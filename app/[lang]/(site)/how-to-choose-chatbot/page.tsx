import { Breadcrumbs } from "@/components/Breadcrumbs";
import { BlogBanner } from "@/components/BlogBanner";
import { RelatedArticles } from "@/components/RelatedArticles";
import { alternatesFor } from "@/lib/i18n/routes";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const isEn = lang === "en";
  return {
    title: isEn
      ? "How to Choose the Right Chatbot for Your Business: A Complete Checklist for 2026"
      : "Comment choisir le bon chatbot pour votre entreprise : checklist complète pour 2026",
    description: isEn
      ? "Before choosing a chatbot for your business, there are 10 questions you should answer. This checklist helps you avoid the most common mistakes and choose the solution that genuinely fits what you need."
      : "Avant de choisir un chatbot pour votre entreprise, il y a 10 questions auxquelles vous devez répondre. Cette checklist vous aide à éviter les erreurs les plus courantes et à choisir la solution qui correspond vraiment à vos besoins.",
    alternates: alternatesFor(`/${lang}/how-to-choose-chatbot/`) ?? {
      canonical: `https://www.mktweb360.com/${lang}/how-to-choose-chatbot/`,
    },
    openGraph: {
      title: isEn
        ? "How to Choose the Right Chatbot for Your Business: A Complete Checklist for 2026 | Mkt Web 360"
        : "Comment choisir le bon chatbot pour votre entreprise : checklist complète pour 2026 | Mkt Web 360",
      description: isEn
        ? "Before choosing a chatbot for your business, there are 10 questions you should answer. This checklist helps you avoid the most common mistakes and choose the solution that genuinely fits what you need."
        : "Avant de choisir un chatbot pour votre entreprise, il y a 10 questions auxquelles vous devez répondre. Cette checklist vous aide à éviter les erreurs les plus courantes et à choisir la solution qui correspond vraiment à vos besoins.",
    },
  };
}

export default async function Page({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const isEn = lang === "en";

  const faqs = isEn
    ? [
        {
          q: "How much time should I dedicate to evaluating options before deciding?",
          a: "With this checklist, 2–3 weeks are enough to evaluate 3–4 options rigorously: one week to define requirements, one to request demos and proposals, and one to analyse and decide. More time rarely changes the decision.",
        },
        {
          q: "Should I ask for a demo before signing up?",
          a: "Always. And not just a general product demo — ask them to show you how it would work specifically with your company's content and connected to your systems. If the provider cannot do that before you sign, that is a warning sign.",
        },
        {
          q: "What happens if the chatbot does not work as expected?",
          a: "That is why it is important to negotiate a trial period or a staged commitment. The first 30–60 days are for calibration — expect measurable results from month 3. If by 3 months there is no observable improvement, there is an implementation problem to resolve with the provider.",
        },
        {
          q: "Can I change chatbot provider if I am not satisfied?",
          a: "Yes, although the switch has costs: new setup, new training, data migration. That is why the initial choice matters. Always negotiate a reasonable exit clause before committing to long contracts.",
        },
      ]
    : [
        {
          q: "Combien de temps dois-je consacrer à évaluer les options avant de décider ?",
          a: "Avec cette checklist, 2 à 3 semaines suffisent pour évaluer 3 à 4 options avec rigueur : une semaine pour définir les exigences, une pour demander des démos et des propositions, et une pour analyser et décider. Plus de temps change rarement la décision.",
        },
        {
          q: "Dois-je demander une démo avant de signer ?",
          a: "Toujours. Et pas seulement une démo générale du produit — demandez qu'on vous montre comment il fonctionnerait spécifiquement avec le contenu de votre entreprise et connecté à vos systèmes. Si le prestataire ne peut pas faire cela avant que vous signiez, c'est un signal d'alarme.",
        },
        {
          q: "Que se passe-t-il si le chatbot ne fonctionne pas comme prévu ?",
          a: "C'est pourquoi il est important de négocier une période d'essai ou un engagement progressif. Les 30 à 60 premiers jours sont pour la calibration — attendez des résultats mesurables à partir du mois 3. Si à 3 mois il n'y a pas d'amélioration observable, il y a un problème d'implémentation à résoudre avec le prestataire.",
        },
        {
          q: "Puis-je changer de prestataire de chatbot si je ne suis pas satisfait ?",
          a: "Oui, bien que le changement ait des coûts : nouvelle mise en place, nouvel entraînement, migration des données. C'est pourquoi le choix initial est important. Négociez toujours une clause de sortie raisonnable avant de vous engager dans de longs contrats.",
        },
      ];

  return (
    <>
      <div className="max-w-3xl mx-auto px-4 py-12">
        <Breadcrumbs
          crumbs={[
            { label: isEn ? "Home" : "Accueil", href: `/${lang}/` },
            { label: "Blog", href: `/${lang}/blog/` },
            { label: isEn ? "How to choose the right chatbot" : "Comment choisir le bon chatbot" },
          ]}
        />

        <p className="text-sm text-accent-500 font-semibold mb-2">
          {isEn ? "Chatbots" : "Chatbots"}
        </p>

        <h1 className="text-4xl font-bold text-primary-600 mb-4 leading-tight">
          {isEn
            ? "How to Choose the Right Chatbot for Your Business: A Complete Checklist for 2026"
            : "Comment choisir le bon chatbot pour votre entreprise : checklist complète pour 2026"}
        </h1>

        <p className="text-xl text-gray-500 mb-8 leading-relaxed">
          {isEn
            ? "Before choosing a chatbot for your business there are 10 questions worth answering. This checklist helps you avoid the most common mistakes and settle on the solution that genuinely fits what you need. If you want to understand the landscape first, start with our guide on what a business chatbot is."
            : "Avant de choisir un chatbot pour votre entreprise, il y a 10 questions qu'il convient de répondre. Cette checklist vous aide à éviter les erreurs les plus courantes et à retenir la solution qui correspond vraiment à vos besoins. Si vous souhaitez d'abord comprendre le paysage, commencez par notre guide sur ce qu'est un chatbot d'entreprise."}
        </p>

        <p className="text-gray-600 mb-6 leading-relaxed">
          {isEn
            ? "Choosing a chatbot is not choosing a tool — it is choosing how you are going to serve your customers for the next few years. The most common mistake is to start with the provider instead of starting with your own needs. These ten questions reverse that order: first you define what you need, then you look for who meets it."
            : "Choisir un chatbot, ce n'est pas choisir un outil — c'est choisir comment vous allez servir vos clients pendant les prochaines années. L'erreur la plus courante est de commencer par le prestataire plutôt que par vos propres besoins. Ces dix questions inversent cet ordre : vous définissez d'abord ce dont vous avez besoin, puis vous cherchez qui le satisfait."}
        </p>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-primary-600 mb-4">
            {isEn
              ? "Question 1: What specific problem do I want to solve?"
              : "Question 1 : Quel problème concret veux-je résoudre ?"}
          </h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {isEn
              ? "Before looking at any platform, write in one sentence what problem is leading you to consider a chatbot. Reducing the volume of repetitive enquiries is not the same as capturing leads outside office hours or relieving an overloaded customer service team. Each objective leads to a different configuration."
              : "Avant de regarder la moindre plateforme, écrivez en une phrase quel problème vous conduit à envisager un chatbot. Ce n'est pas la même chose de vouloir réduire le volume des demandes répétitives que de chercher à capter des leads en dehors des heures ouvrables ou à soulager une équipe de service client surchargée. Chaque objectif mène à une configuration différente."}
          </p>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {isEn
              ? "If you do not define the problem, you will end up comparing features that do not matter to you and paying for capabilities you will not use. A sales-oriented chatbot is measured and trained differently from a support-oriented one. Have the goal clear before taking another step."
              : "Si vous ne définissez pas le problème, vous finirez par comparer des fonctionnalités qui ne vous importent pas et à payer pour des capacités que vous n'utiliserez pas. Un chatbot orienté vente se mesure et s'entraîne différemment d'un orienté support. Ayez l'objectif clair avant de faire un pas de plus."}
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-primary-600 mb-4">
            {isEn
              ? "Question 2: Which systems does it need to integrate with?"
              : "Question 2 : Avec quels systèmes doit-il s'intégrer ?"}
          </h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {isEn
              ? "An isolated chatbot is of little use. Think about what tools it needs to communicate with: your CRM, your online store, your booking system, your knowledge base or your ticketing gateway. If the bot cannot query order status or log a lead where you already work, much of its value is lost."
              : "Un chatbot isolé n'est pas très utile. Réfléchissez aux outils avec lesquels il doit communiquer : votre CRM, votre boutique en ligne, votre système de réservation, votre base de connaissances ou votre passerelle de tickets. Si le bot ne peut pas consulter le statut d'une commande ou enregistrer un lead là où vous travaillez déjà, une grande partie de sa valeur est perdue."}
          </p>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {isEn
              ? "Make a list of essential integrations before talking to providers and ask them about each one explicitly. Integrations are often what separates a solution that fits from one that will force you to duplicate manual work."
              : "Faites la liste des intégrations indispensables avant de parler aux prestataires et demandez-leur pour chacune de manière explicite. Les intégrations sont souvent ce qui sépare une solution qui convient d'une qui vous obligera à dupliquer le travail manuel."}
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-primary-600 mb-4">
            {isEn
              ? "Question 3: What volume of conversations do I expect?"
              : "Question 3 : Quel volume de conversations est-ce que j'attends ?"}
          </h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {isEn
              ? "Volume determines the plan you need and the real cost. A business receiving a few dozen enquiries per month is very different from one with thousands. Many providers charge per conversation or per resolution, so a realistic estimate saves you billing surprises."
              : "Le volume détermine le plan dont vous avez besoin et le coût réel. Ce n'est pas la même chose d'une entreprise qui reçoit quelques dizaines de demandes par mois que d'une avec des milliers. Beaucoup de prestataires facturent par conversation ou par résolution, donc une estimation réaliste vous évite des surprises sur la facture."}
          </p>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {isEn
              ? "Review your historical enquiries by email, phone or chat to calculate a starting figure. Also consider seasonality: if you have peaks at certain times, make sure the solution scales without penalising you disproportionately."
              : "Examinez votre historique de demandes par e-mail, téléphone ou chat pour calculer un chiffre de départ. Tenez également compte de la saisonnalité : si vous avez des pics à certaines périodes, assurez-vous que la solution se développe sans vous pénaliser de manière disproportionnée."}
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-primary-600 mb-4">
            {isEn
              ? "Question 4: Who will train and maintain the chatbot?"
              : "Question 4 : Qui va entraîner et maintenir le chatbot ?"}
          </h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {isEn
              ? "A chatbot is not configured once and then forgotten. Someone needs to train it with your content, review the conversations it gets wrong and adjust the responses over time. Decide from the outset whether that responsibility falls on your team or on the provider."
              : "Un chatbot ne se configure pas une fois et s'oublie. Quelqu'un doit l'entraîner avec votre contenu, examiner les conversations qu'il rate et ajuster les réponses avec le temps. Décidez dès le début si cette responsabilité incombe à votre équipe ou au prestataire."}
          </p>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {isEn
              ? "If nobody internally is going to dedicate time to it, prioritise managed solutions where maintenance is included. A bot without maintenance degrades: new questions appear that it cannot answer and quality gradually falls."
              : "Si personne en interne ne va lui consacrer du temps, privilégiez les solutions gérées où la maintenance est incluse. Un bot sans maintenance se dégrade : de nouvelles questions apparaissent auxquelles il ne sait pas répondre et la qualité baisse progressivement."}
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-primary-600 mb-4">
            {isEn
              ? "Question 5: What are my legal compliance requirements?"
              : "Question 5 : Quelles sont mes exigences de conformité légale ?"}
          </h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {isEn
              ? "A chatbot handles personal data and conversations, so compliance is not optional. In the EU you must comply with the GDPR and the EU AI Act, which requires, among other things, AI systems to identify themselves as such. Go through a compliance checklist with at least ten points: user information, legal basis for processing, data retention, access and deletion rights, and hosting location, among others."
              : "Un chatbot gère des données personnelles et des conversations, donc la conformité n'est pas optionnelle. Dans l'UE, vous devez respecter le RGPD et l'AI Act européen, qui oblige notamment les systèmes IA à s'identifier comme tels. Passez en revue une checklist de conformité d'au moins dix points : information à l'utilisateur, base juridique du traitement, conservation des données, droits d'accès et de suppression, et localisation de l'hébergement, entre autres."}
          </p>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {isEn
              ? "Ask each provider how they cover these requirements and request it in writing. To leave nothing out, refer to our specific guide on AI chatbots, GDPR and the EU AI Act."
              : "Demandez à chaque prestataire comment il couvre ces exigences et demandez-le par écrit. Pour ne rien omettre, appuyez-vous sur notre guide spécifique sur les chatbots IA, le RGPD et l'AI Act européen."}
          </p>
        </section>

        <BlogBanner lang={lang} />

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-primary-600 mb-4">
            {isEn
              ? "Question 6: Do I need it to work across multiple channels?"
              : "Question 6 : Ai-je besoin qu'il fonctionne sur plusieurs canaux ?"}
          </h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {isEn
              ? "Think about where your customers are. You may just need the website chat, or you may need to also attend via WhatsApp, Instagram, Facebook Messenger or even within your app. Each channel adds complexity and, often, cost."
              : "Réfléchissez à l'endroit où se trouvent vos clients. Il se peut que vous n'ayez besoin que du chat du site web, ou que vous deviez également répondre via WhatsApp, Instagram, Facebook Messenger ou même au sein de votre application. Chaque canal ajoute de la complexité et, souvent, du coût."}
          </p>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {isEn
              ? "Do not be tempted to subscribe to all channels just in case. Start with where your customers already write to you and expand when it makes sense. Confirm that the platform supports the channels you will actually use before signing."
              : "Ne vous laissez pas tenter de contracter tous les canaux au cas où. Commencez par là où vos clients vous écrivent déjà et élargissez quand cela a du sens. Confirmez que la plateforme prend en charge les canaux que vous utiliserez vraiment avant de signer."}
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-primary-600 mb-4">
            {isEn
              ? "Question 7: What level of customisation do I need?"
              : "Question 7 : De quel niveau de personnalisation ai-je besoin ?"}
          </h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {isEn
              ? "Some businesses are content with well-resolved standard responses; others need the bot to speak in their brand's tone, follow their own conversation flows and adapt to particular cases. The more bespoke, the more powerful the platform needs to be and the more configuration time it will require."
              : "Certaines entreprises se satisfont de réponses standard bien résolues ; d'autres ont besoin que le bot parle sur le ton de leur marque, suive leurs propres flux de conversation et s'adapte à des cas particuliers. Plus c'est sur mesure, plus la plateforme doit être puissante et plus elle nécessitera de temps de configuration."}
          </p>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {isEn
              ? "Be honest about what you genuinely need. Excessive customisation makes the project more expensive and harder to maintain, while too rigid a setup can give an impersonal impression. Find the point that fits your brand without overcomplicating things."
              : "Soyez honnête sur ce dont vous avez vraiment besoin. Une personnalisation excessive renchérit le projet et le rend plus difficile à maintenir, tandis qu'une trop rigide peut donner une impression impersonnelle. Trouvez le point qui correspond à votre marque sans se compliquer outre mesure."}
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-primary-600 mb-4">
            {isEn
              ? "Question 8: How am I going to measure whether it works?"
              : "Question 8 : Comment vais-je mesurer si ça fonctionne ?"}
          </h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {isEn
              ? "Without metrics you will not know whether the investment is worthwhile. Define from the start what you are going to measure: percentage of enquiries resolved by the bot, response time, leads captured, user satisfaction or workload freed for the human team. Those numbers will be your yardstick."
              : "Sans métriques, vous ne saurez pas si l'investissement en vaut la peine. Définissez dès le début ce que vous allez mesurer : pourcentage de demandes résolues par le bot, temps de réponse, leads captés, satisfaction de l'utilisateur ou charge de travail libérée pour l'équipe humaine. Ces chiffres seront votre étalon."}
          </p>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {isEn
              ? "Keep timeframes in mind: the first 30–60 days are for calibration, so do not expect stable figures immediately. From the third month you should see measurable results and a clear trend. Make sure the platform gives you the data you need to judge."
              : "Gardez à l'esprit les délais : les 30 à 60 premiers jours sont pour la calibration, alors n'attendez pas des chiffres stables immédiatement. À partir du troisième mois, vous devriez voir des résultats mesurables et une tendance claire. Assurez-vous que la plateforme vous donne les données dont vous avez besoin pour juger."}
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-primary-600 mb-4">
            {isEn
              ? "Question 9: What level of technical support do I need?"
              : "Question 9 : De quel niveau de support technique ai-je besoin ?"}
          </h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {isEn
              ? "When something fails, support makes the difference. Assess what level you need: is documentation and email sufficient, or do you need direct contact that responds quickly? Ask about response times, the language of support and whether there is onboarding assistance."
              : "Quand quelque chose ne va pas, le support fait la différence. Évaluez le niveau dont vous avez besoin : la documentation et l'e-mail suffisent-ils, ou avez-vous besoin d'un contact direct qui répond rapidement ? Renseignez-vous sur les délais de réponse, la langue du support et s'il y a un accompagnement lors de la mise en service."}
          </p>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {isEn
              ? "Good support is especially important in the first few weeks, when you are calibrating the bot. If your team is not technical, prioritise providers that offer guided onboarding and real accompaniment, not just a manual."
              : "Un bon support est particulièrement important dans les premières semaines, quand vous calibrez le bot. Si votre équipe n'est pas technique, privilégiez les prestataires qui offrent un onboarding guidé et un accompagnement réel, pas seulement un manuel."}
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-primary-600 mb-4">
            {isEn
              ? "Question 10: What is my time horizon and expected ROI?"
              : "Question 10 : Quel est mon horizon temporel et le ROI attendu ?"}
          </h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {isEn
              ? "Finally, ground your expectations of time and return. With an ordered process, evaluating 3–4 options takes about 2–3 weeks: one to define requirements, another to request demos and proposals, and another to analyse and decide. Implementation then has its own learning curve."
              : "Enfin, ancrez vos attentes en termes de temps et de retour. Avec un processus ordonné, évaluer 3 à 4 options prend environ 2 à 3 semaines : une pour définir les exigences, une autre pour demander des démos et des propositions, et une autre pour analyser et décider. L'implémentation a ensuite sa propre courbe d'apprentissage."}
          </p>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {isEn
              ? "As for the return, allow for a 30–60-day calibration period and measurable ROI from month 3. If by three months there is no observable improvement, there is an implementation problem to resolve. To size the investment, review how much a business chatbot costs and compare it with what you expect to gain."
              : "Quant au retour, comptez sur une période de calibration de 30 à 60 jours et un ROI mesurable à partir du mois 3. Si à trois mois il n'y a pas d'amélioration observable, il y a un problème d'implémentation à résoudre. Pour dimensionner l'investissement, examinez combien coûte un chatbot d'entreprise et comparez avec ce que vous espérez gagner."}
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-primary-600 mb-4">
            {isEn ? "Frequently asked questions" : "Questions fréquentes"}
          </h2>
          <div className="space-y-3">
            {faqs.map((faq) => (
              <details key={faq.q} className="border border-gray-200 rounded-xl overflow-hidden group">
                <summary className="px-6 py-4 cursor-pointer font-semibold text-primary-700 hover:bg-primary-50 list-none flex justify-between items-center">
                  {faq.q}
                  <span className="text-accent-500 group-open:rotate-180 transition-transform">▾</span>
                </summary>
                <div className="px-6 py-4 text-gray-600 border-t border-gray-100">{faq.a}</div>
              </details>
            ))}
          </div>
        </section>

        <nav className="mt-12 pt-8 border-t border-gray-200">
          <a href={`/${lang}/blog/`} className="text-accent-500 hover:text-accent-600 font-medium text-sm">
            {isEn ? "← Back to blog" : "← Retour au blog"}
          </a>
        </nav>
      </div>
      <RelatedArticles currentSlug="how-to-choose-chatbot" />
    </>
  );
}
