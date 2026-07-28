import { Breadcrumbs } from "@/components/Breadcrumbs";
import { BlogBanner } from "@/components/BlogBanner";
import { RelatedArticles } from "@/components/RelatedArticles";
import { alternatesFor } from "@/lib/i18n/routes";
import Link from "next/link";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const isEn = lang === "en";
  return {
    title: isEn
      ? "AI Agents for Marketing: What They Are and How SMEs Can Use Them"
      : "Agents IA pour le marketing : ce qu'ils sont et comment les PME peuvent les utiliser",
    description: isEn
      ? "AI agents are no longer science fiction. In 2026, accessible tools let any SME automate marketing tasks with agents that work autonomously. Practical guide."
      : "Les agents IA ne sont plus de la science-fiction. En 2026, des outils accessibles permettent à n'importe quelle PME d'automatiser des tâches marketing avec des agents qui travaillent de façon autonome. Guide pratique.",
    alternates: alternatesFor(`/${lang}/ai-agents-marketing/`) ?? {
      canonical: `https://www.mktweb360.com/${lang}/ai-agents-marketing/`,
    },
    openGraph: {
      title: isEn
        ? "AI Agents for Marketing: What They Are and How SMEs Can Use Them | Mkt Web 360"
        : "Agents IA pour le marketing : ce qu'ils sont et comment les PME peuvent les utiliser | Mkt Web 360",
      description: isEn
        ? "AI agents are no longer science fiction. In 2026, accessible tools let any SME automate marketing tasks autonomously. Practical guide."
        : "Les agents IA ne sont plus de la science-fiction. En 2026, des outils accessibles permettent à n'importe quelle PME d'automatiser des tâches marketing de façon autonome. Guide pratique.",
    },
  };
}

const FAQS_EN = [
  {
    q: "What is an AI agent and how does it differ from ChatGPT?",
    a: "ChatGPT answers questions in a conversation. An AI agent can execute tasks autonomously: search for information, write emails, post on social media, update a CRM or generate reports, all without you having to prompt each step. The agent has an objective and executes the necessary steps.",
  },
  {
    q: "Do I need technical knowledge to use AI agents?",
    a: "It depends on the tool. Make, n8n or Zapier allow creating agent flows without coding. Advanced configurations with APIs do require technical knowledge. The recommended entry point for an SME without a technical team is Make or Zapier with ChatGPT integrations.",
  },
  {
    q: "What marketing tasks can an AI agent perform?",
    a: "Monitor brand mentions, generate content drafts, classify leads, send personalised follow-up emails, create campaign reports, publish on social media at scheduled times, or answer customer FAQs. All with human oversight for important decisions.",
  },
  {
    q: "Can AI agents replace a marketing professional?",
    a: "No. Agents execute well-defined tasks efficiently, but they have no strategic judgement, do not understand business context in depth and cannot replace human creativity and judgement. They are productivity multipliers, not replacements.",
  },
];

const FAQS_FR = [
  {
    q: "Qu'est-ce qu'un agent IA et en quoi se différencie-t-il de ChatGPT ?",
    a: "ChatGPT répond à des questions dans une conversation. Un agent IA peut exécuter des tâches de façon autonome : chercher des informations, écrire des emails, publier sur les réseaux, mettre à jour un CRM ou générer des rapports, tout sans que vous ayez à lui demander chaque étape. L'agent a un objectif et exécute les étapes nécessaires.",
  },
  {
    q: "Ai-je besoin de connaissances techniques pour utiliser des agents IA ?",
    a: "Cela dépend de l'outil. Make, n8n ou Zapier permettent de créer des flux avec des agents IA sans programmer. Les configurations avancées avec des APIs nécessitent des connaissances techniques. Le point d'entrée recommandé pour une PME sans équipe technique est Make ou Zapier avec des intégrations ChatGPT.",
  },
  {
    q: "Quelles tâches marketing un agent IA peut-il effectuer ?",
    a: "Surveiller les mentions de marque, générer des brouillons de contenu, classer les leads, envoyer des emails de suivi personnalisés, créer des rapports de campagnes, publier sur les réseaux à des horaires programmés, ou répondre aux questions fréquentes des clients. Tout avec une supervision humaine pour les décisions importantes.",
  },
  {
    q: "Les agents IA peuvent-ils remplacer un professionnel du marketing ?",
    a: "Non. Les agents exécutent des tâches bien définies avec efficacité, mais ils n'ont pas de jugement stratégique, ne comprennent pas le contexte business en profondeur et ne peuvent pas remplacer la créativité et le jugement humain. Ce sont des multiplicateurs de productivité, pas des remplaçants.",
  },
];

export default async function Page({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const isEn = lang === "en";
  const FAQS = isEn ? FAQS_EN : FAQS_FR;

  return (
    <>
      <div className="max-w-3xl mx-auto px-4 py-12">
        <Breadcrumbs
          crumbs={[
            { label: isEn ? "Home" : "Accueil", href: `/${lang}/` },
            { label: "Blog", href: `/${lang}/blog/` },
            { label: isEn ? "AI agents for marketing" : "Agents IA pour le marketing" },
          ]}
        />

        <p className="text-sm text-accent-500 font-semibold mb-2">
          {isEn ? "AI · Digital Marketing" : "IA · Marketing Digital"}
        </p>

        <h1 className="text-4xl font-bold text-primary-600 mb-4 leading-tight">
          {isEn
            ? "AI Agents for Marketing in 2026: What They Are, What They Can Do and How to Start"
            : "Agents IA pour le marketing en 2026 : ce qu'ils sont, ce qu'ils peuvent faire et comment commencer"}
        </h1>

        <p className="text-xl text-gray-500 mb-8 leading-relaxed">
          {isEn
            ? "AI agents are no longer science fiction. In 2026, accessible tools let any SME automate marketing tasks with agents that work autonomously. Here is what they really are and how to take the first step."
            : "Les agents IA ne sont plus de la science-fiction. En 2026, des outils accessibles permettent à n'importe quelle PME d'automatiser des tâches marketing avec des agents qui travaillent de façon autonome. Voici ce qu'ils sont vraiment et comment franchir le premier pas."}
        </p>

        <p className="text-gray-700 leading-relaxed mb-6">
          {isEn
            ? "For years, marketing automation meant scheduling a few emails and not much else. That has changed. An AI agent does not just follow fixed rules: it receives an objective, decides the steps and executes them. For an SME without a large team, this means being able to delegate tasks that previously required hours of manual work."
            : "Pendant des années, l'automatisation du marketing consistait à programmer quelques emails et peu d'autre chose. Ça a changé. Un agent IA ne se limite pas à suivre des règles fixes : il reçoit un objectif, décide des étapes et les exécute. Pour une PME sans grande équipe, cela signifie pouvoir déléguer des tâches qui nécessitaient auparavant des heures de travail manuel."}
        </p>

        <h2 className="text-2xl font-bold text-primary-600 mt-8 mb-3">
          {isEn ? "What AI agents are and how they differ from ChatGPT" : "Ce que sont les agents IA et en quoi ils diffèrent de ChatGPT"}
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          {isEn
            ? "ChatGPT responds in a conversation: you ask and it answers. An AI agent goes one step further. It receives an objective — for example, 'summarise my brand mentions this week and send me an email' — and autonomously executes the necessary steps: searches for the information, organises it, drafts the message and sends it. You do not need to give it each instruction one by one."
            : "ChatGPT répond dans une conversation : vous posez une question et il répond. Un agent IA va un cran plus loin. Il reçoit un objectif — par exemple, 'résume les mentions de ma marque cette semaine et envoie-moi un email' — et exécute de façon autonome les étapes nécessaires : cherche les informations, les organise, rédige le message et l'envoie. Vous n'avez pas besoin de lui donner chaque instruction une par une."}
        </p>
        <p className="text-gray-700 leading-relaxed mb-6">
          {isEn
            ? "The key difference is autonomy. While a chatbot waits for your next question, an agent chains actions to achieve a goal. That is why the market is moving so fast: Gartner estimates that 40% of enterprise software will have integrated AI agents by 2026, and IBM reports that 75% of executives plan to invest in agentic AI."
            : "La différence clé est l'autonomie. Alors qu'un chatbot attend votre prochaine question, un agent enchaîne des actions pour atteindre un objectif. C'est pourquoi le marché évolue si vite : Gartner estime que 40 % des logiciels d'entreprise auront des agents IA intégrés en 2026, et IBM indique que 75 % des dirigeants prévoient d'investir dans l'IA agentique."}
        </p>

        <h2 className="text-2xl font-bold text-primary-600 mt-8 mb-3">
          {isEn ? "What marketing tasks an AI agent can do today" : "Quelles tâches marketing un agent IA peut faire aujourd'hui"}
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          {isEn
            ? "The practical applications are already concrete: monitor brand mentions, generate content drafts, classify leads by interest, send personalised follow-up emails, create campaign reports or publish on social media at scheduled times. They can also answer customer FAQs through your website chat."
            : "Les applications pratiques sont déjà concrètes : surveiller les mentions de marque, générer des brouillons de contenu, classer les leads selon leur intérêt, envoyer des emails de suivi personnalisés, créer des rapports de campagnes ou publier sur les réseaux aux horaires programmés. Ils peuvent aussi répondre aux questions fréquentes des clients via le chat de votre site."}
        </p>
        <p className="text-gray-700 leading-relaxed mb-6">
          {isEn
            ? "The important nuance is that all of this works better with human oversight on decisions that matter. The agent saves the repetitive work; you maintain judgement over what is published and sent. Well structured, this integrates naturally with your overall AI positioning strategy."
            : "Le nuance importante est que tout cela fonctionne mieux avec une supervision humaine sur les décisions qui comptent. L'agent économise le travail répétitif ; vous maintenez le jugement sur ce qui est publié et envoyé. Bien planifié, cela s'intègre naturellement à votre stratégie globale de positionnement IA."}
        </p>

        <h2 className="text-2xl font-bold text-primary-600 mt-8 mb-3">
          {isEn ? "Accessible tools for SMEs without a technical team" : "Outils accessibles pour les PME sans équipe technique"}
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          {isEn
            ? "You do not need a development department. Platforms like Make, n8n or Zapier allow creating AI agent flows connecting ChatGPT and your usual applications without writing code. For customer service, tools like Tidio or ManyChat include conversational agents ready to use."
            : "Il n'y a pas besoin d'un département de développement. Des plateformes comme Make, n8n ou Zapier permettent de créer des flux avec des agents IA en connectant ChatGPT et vos applications habituelles sans écrire de code. Pour l'assistance client, des outils comme Tidio ou ManyChat intègrent des agents conversationnels prêts à utiliser."}
        </p>
        <p className="text-gray-700 leading-relaxed mb-6">
          {isEn
            ? "The recommended entry point for an SME without a technical team is Make or Zapier with ChatGPT integrations: the learning curve is manageable and first results come in days."
            : "Le point d'entrée recommandé pour une PME sans équipe technique est Make ou Zapier avec des intégrations ChatGPT : la courbe d'apprentissage est gérable et les premiers résultats arrivent en quelques jours."}
        </p>

        <BlogBanner lang={lang} />

        <h2 className="text-2xl font-bold text-primary-600 mt-8 mb-3">
          {isEn ? "How to implement your first AI agent" : "Comment implémenter votre premier agent IA"}
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          {isEn
            ? "Start with a single task — the most repetitive and lowest-risk one you have. It could be classifying incoming leads from your contact form or generating a weekly summary of your campaigns. Define the objective clearly, connect the tools involved and test the flow with real data before considering it complete."
            : "Commencez par une seule tâche — la plus répétitive et la moins risquée que vous ayez. Cela peut être classer les leads qui arrivent par le formulaire de contact ou générer un résumé hebdomadaire de vos campagnes. Définissez l'objectif clairement, connectez les outils impliqués et testez le flux avec des données réelles avant de le valider."}
        </p>
        <p className="text-gray-700 leading-relaxed mb-6">
          {isEn
            ? "Once that first agent works and you trust it, expand to the next task. This gradual approach avoids the common mistake of trying to automate everything at once."
            : "Une fois que ce premier agent fonctionne et que vous lui faites confiance, passez à la tâche suivante. Cette approche progressive évite l'erreur courante d'essayer de tout automatiser d'un coup."}
        </p>

        <h2 className="text-2xl font-bold text-primary-600 mt-8 mb-3">
          {isEn ? "The risks nobody mentions about AI agents" : "Les risques que personne ne mentionne sur les agents IA"}
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          {isEn
            ? "An agent that acts autonomously can also make mistakes autonomously. Sending a wrong email, publishing unreviewed content or misclassifying a customer are real risks when all oversight is removed. That is why correct design always includes human checkpoint in sensitive decisions."
            : "Un agent qui agit de façon autonome peut aussi se tromper de façon autonome. Envoyer un email erroné, publier un contenu sans révision ou mal classer un client sont des risques réels quand toute supervision est supprimée. C'est pourquoi une conception correcte inclut toujours des points de contrôle humain pour les décisions sensibles."}
        </p>
        <p className="text-gray-700 leading-relaxed mb-6">
          {isEn
            ? "The other risk is data privacy. Before connecting your CRM or customer information to an agent, verify how each tool handles that data. Productivity does not compensate for a breach of customer trust."
            : "L'autre risque est la confidentialité des données. Avant de connecter votre CRM ou les informations de vos clients à un agent, vérifiez comment chaque outil traite ces données. La productivité ne compense pas une brèche de confiance avec vos clients."}
        </p>

        <div className="bg-primary-600 text-white rounded-2xl p-8 my-8 text-center">
          <h2 className="text-2xl font-bold mb-3">
            {isEn ? "Want to apply AI to your marketing with judgement?" : "Vous voulez appliquer l'IA à votre marketing avec discernement ?"}
          </h2>
          <p className="text-primary-200 mb-6">
            {isEn
              ? "At Mkt Web 360 we help SMEs and freelancers integrate AI agents and tools into their digital strategy without losing control or brand consistency."
              : "Chez Mkt Web 360, nous aidons les PME et indépendants à intégrer des agents et outils IA dans leur stratégie digitale sans perdre le contrôle ni la cohérence de marque."}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href={`/${lang}/contact`}
              className="bg-accent-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-accent-600 transition-colors"
            >
              {isEn ? "Talk to a specialist" : "Parler à un spécialiste"}
            </Link>
            <Link
              href={`/${lang}/${isEn ? "geo-generative-engine-optimization" : "geo-optimisation-moteurs-generatifs"}`}
              className="border-2 border-white text-white px-6 py-3 rounded-full font-semibold hover:bg-white/10 transition-colors"
            >
              {isEn ? "AI positioning" : "Positionnement IA"}
            </Link>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-primary-600 mt-8 mb-4">
          {isEn ? "Frequently asked questions" : "Questions fréquentes"}
        </h2>
        <div className="space-y-3 mb-8">
          {FAQS.map((faq) => (
            <details key={faq.q} className="border border-gray-200 rounded-xl overflow-hidden group">
              <summary className="px-6 py-4 cursor-pointer font-semibold text-primary-700 hover:bg-primary-50 list-none flex justify-between items-center">
                {faq.q}
                <span className="text-accent-500 group-open:rotate-180 transition-transform">▾</span>
              </summary>
              <div className="px-6 py-4 text-gray-600 border-t border-gray-100">{faq.a}</div>
            </details>
          ))}
        </div>

        <nav className="mt-12 pt-8 border-t border-gray-200">
          <Link href={`/${lang}/blog/`} className="text-accent-500 hover:text-accent-600 font-medium text-sm">
            {isEn ? "← Back to blog" : "← Retour au blog"}
          </Link>
        </nav>
      </div>
      <RelatedArticles currentSlug="ai-agents-marketing" />
    </>
  );
}
