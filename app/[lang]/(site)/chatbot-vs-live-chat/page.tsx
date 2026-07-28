import { Breadcrumbs } from "@/components/Breadcrumbs";
import { BlogBanner } from "@/components/BlogBanner";
import { RelatedArticles } from "@/components/RelatedArticles";
import { alternatesFor } from "@/lib/i18n/routes";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const isEn = lang === "en";
  return {
    title: isEn
      ? "Chatbot vs Live Chat: Real Differences and Which to Choose for Your Business"
      : "Chatbot vs live chat : vraies différences et lequel choisir pour votre entreprise",
    description: isEn
      ? "Chatbot or live chat? They are not mutually exclusive, but they are not the same thing either. A guide to the real differences, when each one is right, and why the correct combination beats choosing just one."
      : "Chatbot ou live chat ? Ils ne s'excluent pas mutuellement, mais ils ne sont pas non plus la même chose. Guide des vraies différences, quand chacun convient, et pourquoi la bonne combinaison est meilleure que d'en choisir un seul.",
    alternates: alternatesFor(`/${lang}/chatbot-vs-live-chat/`) ?? {
      canonical: `https://www.mktweb360.com/${lang}/chatbot-vs-live-chat/`,
    },
    openGraph: {
      title: isEn
        ? "Chatbot vs Live Chat: Real Differences and Which to Choose for Your Business | Mkt Web 360"
        : "Chatbot vs live chat : vraies différences et lequel choisir pour votre entreprise | Mkt Web 360",
      description: isEn
        ? "Chatbot or live chat? They are not mutually exclusive, but they are not the same thing either. A guide to the real differences, when each one is right, and why the correct combination beats choosing just one."
        : "Chatbot ou live chat ? Ils ne s'excluent pas mutuellement, mais ils ne sont pas non plus la même chose. Guide des vraies différences, quand chacun convient, et pourquoi la bonne combinaison est meilleure que d'en choisir un seul.",
    },
  };
}

export default async function Page({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const isEn = lang === "en";

  const faqs = isEn
    ? [
        {
          q: "Can I have both at the same time?",
          a: "Yes, and it is recommended. Most enterprise chatbot platforms allow you to configure the hybrid model: the bot handles the conversations it can and escalates to the human agent when necessary.",
        },
        {
          q: "Does the customer know whether they are talking to a bot or a person?",
          a: "They must. The EU AI Act requires AI systems to identify themselves as such. And when there is an escalation to a human, the change must also be communicated to the user.",
        },
        {
          q: "Is it better to start with live chat and add the bot afterwards?",
          a: "It depends on the starting point. If you already have live chat and want to add out-of-hours coverage, the bot is a natural complement. If you are starting from scratch, a hybrid model from the outset is more efficient.",
        },
        {
          q: "Does having a chatbot affect customer NPS?",
          a: "If the bot is well configured and resolves the enquiries it can resolve, NPS generally improves because response times fall. If the bot is poorly configured and frustrates users, NPS drops. Implementation quality is the determining factor.",
        },
      ]
    : [
        {
          q: "Puis-je avoir les deux en même temps ?",
          a: "Oui, et c'est recommandé. La plupart des plateformes de chatbot d'entreprise permettent de configurer le modèle hybride : le bot gère les conversations qu'il peut et escalade vers l'agent humain quand c'est nécessaire.",
        },
        {
          q: "Le client sait-il quand il parle à un bot ou à une personne ?",
          a: "Il doit le savoir. L'AI Act européen exige que les systèmes IA s'identifient comme tels. Et quand il y a une escalade vers un humain, le changement doit également être communiqué à l'utilisateur.",
        },
        {
          q: "Vaut-il mieux commencer avec le live chat et ajouter le bot ensuite ?",
          a: "Cela dépend du point de départ. Si vous avez déjà un live chat et souhaitez ajouter une couverture en dehors des heures ouvrables, le bot est un complément naturel. Si vous partez de zéro, un modèle hybride dès le début est plus efficace.",
        },
        {
          q: "Le fait d'avoir un chatbot affecte-t-il le NPS des clients ?",
          a: "Si le bot est bien configuré et résout les demandes qu'il peut résoudre, le NPS s'améliore généralement car les temps de réponse diminuent. Si le bot est mal configuré et frustre les utilisateurs, le NPS baisse. La qualité de l'implémentation est le facteur déterminant.",
        },
      ];

  return (
    <>
      <div className="max-w-3xl mx-auto px-4 py-12">
        <Breadcrumbs
          crumbs={[
            { label: isEn ? "Home" : "Accueil", href: `/${lang}/` },
            { label: "Blog", href: `/${lang}/blog/` },
            { label: isEn ? "Chatbot vs live chat" : "Chatbot vs live chat" },
          ]}
        />

        <p className="text-sm text-accent-500 font-semibold mb-2">
          {isEn ? "Chatbots" : "Chatbots"}
        </p>

        <h1 className="text-4xl font-bold text-primary-600 mb-4 leading-tight">
          {isEn
            ? "Chatbot vs Live Chat: Real Differences and Which to Choose for Your Business"
            : "Chatbot vs live chat : vraies différences et lequel choisir pour votre entreprise"}
        </h1>

        <p className="text-xl text-gray-500 mb-8 leading-relaxed">
          {isEn
            ? "Chatbot or live chat? They are not mutually exclusive, but they are not the same thing either. In this guide we cover the real differences, when each one is right and why the correct combination usually beats choosing just one."
            : "Chatbot ou live chat ? Ils ne s'excluent pas mutuellement, mais ils ne sont pas non plus la même chose. Dans ce guide, nous couvrons les vraies différences, quand chacun convient et pourquoi la bonne combinaison l'emporte généralement sur le choix d'un seul."}
        </p>

        <p className="text-gray-600 mb-6 leading-relaxed">
          {isEn
            ? "The question is almost always poorly framed. Many companies sit down to decide between chatbot and live chat as if they were two opposite paths, when in reality they address different needs and work better together. Understanding what each one does well is the first step to not overspending or frustrating your customers."
            : "La question est presque toujours mal posée. Beaucoup d'entreprises s'assoient pour décider entre chatbot et live chat comme s'il s'agissait de deux chemins opposés, alors qu'en réalité ils répondent à des besoins différents et fonctionnent mieux ensemble. Comprendre ce que chacun fait bien est la première étape pour ne pas dépenser trop ou frustrer vos clients."}
        </p>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-primary-600 mb-4">
            {isEn
              ? "What live chat is and what a chatbot is"
              : "Ce qu'est le live chat et ce qu'est un chatbot"}
          </h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {isEn
              ? "Live chat is a conversation window on your website where a human agent responds in real time. There is always a person behind it: someone reads the message, interprets it and replies. It is direct, warm and flexible, but it is tied to the availability and schedule of your team."
              : "Le live chat est une fenêtre de conversation sur votre site web où un agent humain répond en temps réel. Il y a toujours une personne derrière : quelqu'un lit le message, l'interprète et répond. C'est direct, chaleureux et flexible, mais cela est lié à la disponibilité et aux horaires de votre équipe."}
          </p>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {isEn
              ? "A chatbot, on the other hand, is an automated system that maintains the conversation on its own. Modern AI-based chatbots understand natural language and respond with the content and rules they have been configured with. They do not require a human to be present."
              : "Un chatbot, en revanche, est un système automatisé qui maintient la conversation par lui-même. Les chatbots actuels basés sur l'IA comprennent le langage naturel et répondent avec le contenu et les règles qu'on leur a configurés. Ils ne nécessitent pas la présence d'un humain."}
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-primary-600 mb-4">
            {isEn
              ? "The differences that matter most in practice"
              : "Les différences qui comptent le plus en pratique"}
          </h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {isEn
              ? "Beyond definitions, five concrete factors decide the choice. On availability, the chatbot wins hands down: it responds 24/7 without depending on shift patterns, while live chat only covers your team's working hours. On speed, the bot responds instantly and to many users in parallel; a human agent, however good, handles conversations one at a time."
              : "Au-delà des définitions, cinq facteurs concrets décident du choix. En termes de disponibilité, le chatbot gagne sans discussion : il répond 24h/24 sans dépendre de rotations, tandis que le live chat ne couvre que les heures de travail de votre équipe. En termes de vitesse, le bot répond instantanément et en parallèle à de nombreux utilisateurs ; un agent humain, aussi bon soit-il, gère les conversations une par une."}
          </p>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {isEn
              ? "On cost, the chatbot scales without adding staff for each new conversation, while live chat grows headcount-by-headcount. On personalisation and emotional nuance, the human is still ahead: it picks up on ironies, sensitive contexts and frustrations that a bot can miss. A well-trained chatbot autonomously resolves between 65% and 70% of enquiries, leaving people exactly the work that adds most value."
              : "En termes de coût, le chatbot se développe sans ajouter de personnel pour chaque nouvelle conversation, tandis que le live chat croît au rythme des recrutements. En termes de personnalisation et de nuance émotionnelle, l'humain reste en avance : il capte les ironiess, les contextes délicats et les frustrations qu'un bot peut manquer. Un chatbot bien entraîné résout de manière autonome entre 65 % et 70 % des demandes, laissant aux personnes exactement le travail qui apporte le plus de valeur."}
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-primary-600 mb-4">
            {isEn
              ? "When live chat is the right option"
              : "Quand le live chat est la bonne option"}
          </h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {isEn
              ? "Live chat makes sense when your conversations are few but high-value, or when human nuance makes the difference: consultative sales, sensitive incidents, complaints or customers who need to feel heard by a person. In those cases, the warmth and ability to improvise of an agent are worth more than immediacy."
              : "Le live chat a du sens quand vos conversations sont peu nombreuses mais à forte valeur, ou quand la nuance humaine fait la différence : ventes consultatives, incidents délicats, réclamations ou clients qui ont besoin de se sentir écoutés par une personne. Dans ces cas, la chaleur et la capacité d'improvisation d'un agent valent plus que l'immédiateté."}
          </p>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {isEn
              ? "The problem arises when volume grows or when customers write outside business hours. There, live chat alone falls short: enquiries go unanswered overnight and at weekends, precisely when many users are researching. To cover that window without expanding headcount, a chatbot is the natural solution."
              : "Le problème apparaît quand le volume augmente ou quand les clients écrivent en dehors des heures ouvrables. Là, le live chat seul ne suffit pas : les demandes restent sans réponse la nuit et le week-end, précisément quand beaucoup d'utilisateurs font leurs recherches. Pour couvrir cette fenêtre sans augmenter les effectifs, un chatbot est la solution naturelle."}
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-primary-600 mb-4">
            {isEn
              ? "When a chatbot is the right option"
              : "Quand un chatbot est la bonne option"}
          </h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {isEn
              ? "A chatbot is the natural option when you receive many similar enquiries, when you want to be available at any hour, or when you need to filter and qualify before a person intervenes. If a large part of your messages are frequently asked questions, the bot resolves them instantly and frees up your team."
              : "Un chatbot est l'option naturelle quand vous recevez beaucoup de demandes similaires, quand vous voulez être disponible à toute heure, ou quand vous avez besoin de filtrer et qualifier avant qu'une personne intervienne. Si une grande partie de vos messages sont des questions fréquentes, le bot les résout instantanément et libère votre équipe."}
          </p>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {isEn
              ? "It is also the best tool when the objective is commercial: collecting data, understanding what the visitor is looking for and separating those with genuine purchase intent. For that specific use you can see our guide on chatbot lead generation, where we detail how to turn conversations into opportunities."
              : "C'est également le meilleur outil quand l'objectif est commercial : recueillir des données, comprendre ce que cherche le visiteur et séparer ceux qui ont une vraie intention d'achat. Pour cet usage spécifique, consultez notre guide sur la génération de leads par chatbot, où nous détaillons comment transformer les conversations en opportunités."}
          </p>
        </section>

        <BlogBanner lang={lang} />

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-primary-600 mb-4">
            {isEn
              ? "The model that works best: chatbot + escalation to human"
              : "Le modèle qui fonctionne le mieux : chatbot + escalade vers un humain"}
          </h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {isEn
              ? "The answer that companies which have already been through this give is almost always the same: do not choose, combine. The hybrid model puts the bot first, resolving everything it can autonomously, and reserves people for what genuinely needs human judgement. This way you capture the immediacy and availability of the bot without giving up quality human service."
              : "La réponse que donnent les entreprises qui ont déjà vécu cela est presque toujours la même : ne choisissez pas, combinez. Le modèle hybride met le bot en premier, résolvant tout ce qu'il peut de manière autonome, et réserve les personnes pour ce qui nécessite vraiment un jugement humain. Ainsi, vous profitez de l'immédiateté et de la disponibilité du bot sans renoncer à la qualité du service humain."}
          </p>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {isEn
              ? "The key is the escalation. When the bot detects it cannot resolve something, or when the user requests it, the conversation passes to an agent with the full history in view. The customer does not have to repeat themselves: the person sees everything that has already been discussed and continues from there."
              : "La clé est l'escalade. Quand le bot détecte qu'il ne peut pas résoudre quelque chose, ou quand l'utilisateur le demande, la conversation passe à un agent avec l'historique complet sous les yeux. Le client n'a pas à se répéter : la personne voit tout ce qui a déjà été discuté et continue à partir de là."}
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-primary-600 mb-4">
            {isEn
              ? "How to implement the hybrid model"
              : "Comment implémenter le modèle hybride"}
          </h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {isEn
              ? "Implementing it well starts with defining the escalation rules: what topics the bot resolves, in what cases it escalates and how the user is informed of the switch. It is important that the handoff is transparent. The EU AI Act also requires AI systems to identify themselves as such, so the customer must know at all times whether they are talking to a bot or a person."
              : "Bien le mettre en œuvre commence par définir les règles d'escalade : quels sujets le bot résout, dans quels cas il escalade et comment l'utilisateur est informé du changement. Il est important que la transition soit transparente. L'AI Act européen exige également que les systèmes IA s'identifient comme tels, de sorte que le client doit savoir à tout moment s'il parle à un bot ou à une personne."}
          </p>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {isEn
              ? "Then it is a matter of training the bot with your real content and measuring. Review what enquiries it resolves alone, which ones it escalates and where it gets stuck, and adjust with that data. The hybrid approach built in from the start is the most efficient way to deploy conversational support."
              : "Ensuite, il s'agit d'entraîner le bot avec votre contenu réel et de mesurer. Examinez les demandes qu'il résout seul, celles qu'il escalade et où il bloque, et ajustez avec ces données. L'approche hybride intégrée dès le début est la façon la plus efficace de déployer le support conversationnel."}
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
      <RelatedArticles currentSlug="chatbot-vs-live-chat" />
    </>
  );
}
