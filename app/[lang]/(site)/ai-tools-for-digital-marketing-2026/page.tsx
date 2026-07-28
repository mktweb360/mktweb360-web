import { Breadcrumbs } from "@/components/Breadcrumbs";
import { BlogBanner } from "@/components/BlogBanner";
import { alternatesFor } from "@/lib/i18n/routes";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const isEn = lang === "en";
  return {
    title: isEn
      ? "AI Tools for Digital Marketing in 2026: The Ones That Actually Work"
      : "Outils IA pour le Marketing Digital en 2026 : Ceux qui Fonctionnent Vraiment",
    description: isEn
      ? "Not every AI marketing tool is worth the time it takes to learn. An honest analysis of the ones that deliver real value for SMEs and agencies in 2026."
      : "Tous les outils d'IA marketing ne méritent pas le temps qu'il faut pour les apprendre. Analyse honnête de ceux qui apportent une valeur réelle aux PME et agences en 2026.",
    alternates: alternatesFor(`/${lang}/ai-tools-for-digital-marketing-2026/`) ?? {
      canonical: `https://www.mktweb360.com/${lang}/ai-tools-for-digital-marketing-2026/`,
    },
    openGraph: {
      title: isEn
        ? "AI Tools for Digital Marketing in 2026: The Ones That Actually Work | Mkt Web 360"
        : "Outils IA pour le Marketing Digital en 2026 : Ceux qui Fonctionnent Vraiment | Mkt Web 360",
      description: isEn
        ? "Not every AI marketing tool is worth the time it takes to learn. An honest analysis of the ones that deliver real value for SMEs and agencies in 2026."
        : "Tous les outils d'IA marketing ne méritent pas le temps qu'il faut pour les apprendre. Analyse honnête de ceux qui apportent une valeur réelle aux PME et agences en 2026.",
    },
  };
}

const FAQS_EN = [
  {
    q: "What is the best AI tool for creating marketing content?",
    a: "For SMEs, the most effective combination is ChatGPT (GPT-4o or above) for drafting and structuring content, Canva with AI for visual design, and mandatory human editorial review before publishing. Specialist tools like Jasper only make sense if you are producing very high volumes.",
  },
  {
    q: "Is it worth paying for Claude, ChatGPT Plus or Gemini Advanced?",
    a: "For professional marketing use, yes. The difference between free and paid models is significant in output quality. If you use AI daily for marketing, the £20/month pays for itself quickly.",
  },
  {
    q: "Do AI marketing tools respect data privacy?",
    a: "It depends on the tool and the plan. With free ChatGPT plans, your conversations may be used to improve the model. With paid plans and the API you can opt out of data sharing. For client data, always use plans with explicit data protection.",
  },
  {
    q: "How long does it take to learn AI tools for marketing?",
    a: "For basic tools (ChatGPT, Canva AI), 1–2 weeks of daily use is enough. For automations with Make or n8n, expect 2–4 weeks. The learning curve exists but is much shorter than it was 2 years ago.",
  },
];

const FAQS_FR = [
  {
    q: "Quel est le meilleur outil IA pour créer du contenu marketing ?",
    a: "Pour les PME, la combinaison la plus efficace est ChatGPT (GPT-4o ou supérieur) pour générer des brouillons et structurer le contenu, Canva avec IA pour le design visuel, et une révision éditoriale humaine obligatoire avant publication. Les outils spécialisés comme Jasper n'ont de sens que si vous produisez des volumes très élevés.",
  },
  {
    q: "Vaut-il la peine de payer pour Claude, ChatGPT Plus ou Gemini Advanced ?",
    a: "Pour un usage professionnel en marketing, oui. La différence entre les modèles gratuits et payants est significative en termes de qualité de résultat. Si vous utilisez l'IA quotidiennement pour le marketing, les 20 €/mois sont vite amortis.",
  },
  {
    q: "Les outils IA marketing respectent-ils la confidentialité des données ?",
    a: "Cela dépend de l'outil et du forfait. Avec les plans gratuits de ChatGPT, vos conversations peuvent être utilisées pour améliorer le modèle. Avec les plans payants et l'API, vous pouvez refuser le partage de données. Pour les données clients, utilisez toujours des plans avec protection explicite des données.",
  },
  {
    q: "Combien de temps faut-il pour apprendre à utiliser les outils IA en marketing ?",
    a: "Pour les outils basiques (ChatGPT, Canva IA), 1 à 2 semaines d'utilisation quotidienne suffisent. Pour les automatisations avec Make ou n8n, comptez 2 à 4 semaines. La courbe d'apprentissage existe mais est bien plus courte qu'il y a 2 ans.",
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
            { label: isEn ? "AI Tools for Marketing 2026" : "Outils IA Marketing 2026" },
          ]}
        />
        <p className="text-sm text-accent-500 font-semibold mb-2">
          {isEn ? "AI & Marketing" : "IA & Marketing"}
        </p>
        <h1 className="text-4xl font-bold text-primary-600 mb-4 leading-tight">
          {isEn
            ? "AI tools for digital marketing in 2026: an honest analysis of the ones worth your time"
            : "Outils d'IA pour le marketing digital en 2026 : analyse honnête de ceux qui valent vraiment la peine"}
        </h1>
        <p className="text-xl text-gray-500 mb-8 leading-relaxed">
          {isEn
            ? "Not every AI marketing tool deserves the time it takes to learn it. This is an honest analysis of those that deliver real value to SMEs and agencies in 2026, within a sensible AI-applied-to-marketing strategy."
            : "Tous les outils d'IA marketing ne méritent pas le temps qu'il faut pour les apprendre. Voici une analyse honnête de ceux qui apportent une valeur réelle aux PME et agences en 2026, dans le cadre d'une stratégie sensée d'IA appliquée au marketing."}
        </p>

        <div className="text-gray-700 space-y-6 leading-relaxed">
          <p>
            {isEn
              ? "A new AI tool promising to revolutionise your marketing appears every week. Most do not deliver. The problem is not a lack of options — it is knowing which ones justify the learning time and the subscription cost. Here are the ones that, after filtering the noise, remain genuinely useful."
              : "Un nouvel outil d'IA promettant de révolutionner votre marketing apparaît chaque semaine. La plupart ne tiennent pas leurs promesses. Le problème n'est pas le manque d'options, mais de savoir lesquels justifient le temps d'apprentissage et l'abonnement. Voici ceux qui, après avoir filtré le bruit, restent vraiment utiles."}
          </p>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-primary-600 mb-4">
              {isEn
                ? "Why most AI tools fail to deliver what they promise"
                : "Pourquoi la plupart des outils IA ne tiennent pas leurs promesses"}
            </h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              {isEn
                ? "Most 'AI-powered' tools are a wrapper over a language model you could already use directly for less money. They add a nice interface and a promise of specialisation, but the result rarely surpasses what a good prompt in ChatGPT or Claude would produce."
                : "La plupart des outils « avec IA » sont un habillage par-dessus un modèle de langage que vous pourriez déjà utiliser directement pour moins cher. Ils ajoutent une belle interface et une promesse de spécialisation, mais le résultat dépasse rarement ce qu'une bonne instruction dans ChatGPT ou Claude produirait."}
            </p>
            <p className="text-gray-600 mb-4 leading-relaxed">
              {isEn
                ? "The right question is not 'does it use AI?' but 'does it save me real time or help me produce something better?' Applying that filter, the list of indispensable tools shrinks considerably and your budget concentrates where there is genuine return."
                : "La bonne question n'est pas « utilise-t-il l'IA ? » mais « me fait-il gagner du temps réel ou me permet-il de produire quelque chose de meilleur ? ». Avec ce filtre, la liste des outils indispensables se réduit considérablement et le budget se concentre là où il y a un vrai retour."}
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-primary-600 mb-4">
              {isEn
                ? "ChatGPT and Claude: the foundation of any AI stack"
                : "ChatGPT et Claude : la base de tout stack IA"}
            </h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              {isEn
                ? "General-purpose language models are the core of everything. ChatGPT (GPT-4o or above) and Claude serve to draft content, structure articles, summarise reports, generate copy variations and think through strategies. For professional use, the difference between the free and paid plan is notable in output quality."
                : "Les modèles de langage généralistes sont le noyau de tout. ChatGPT (GPT-4o ou supérieur) et Claude servent à rédiger des brouillons, structurer du contenu, résumer des rapports, générer des variantes de copy et réfléchir à des stratégies. Pour un usage professionnel, la différence entre le plan gratuit et le plan payant est notable en termes de qualité de résultat."}
            </p>
            <p className="text-gray-600 mb-4 leading-relaxed">
              {isEn
                ? "Human editorial review remains mandatory before publishing anything. AI accelerates the first draft; brand judgement is yours to provide. If you want to get the most out of these tools, our guide on ChatGPT for digital marketing covers everything you need."
                : "La révision éditoriale humaine reste obligatoire avant de publier quoi que ce soit. L'IA accélère le premier brouillon ; le jugement de marque vous appartient. Si vous voulez tirer le meilleur de ces outils, notre guide sur ChatGPT pour le marketing digital couvre tout ce dont vous avez besoin."}
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-primary-600 mb-4">
              {isEn
                ? "Canva AI: accessible design without a designer"
                : "Canva IA : design accessible sans designer"}
            </h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              {isEn
                ? "Canva with AI allows you to generate images, adapt formats and create coherent visual assets without mastering professional design tools. For an SME that needs to consistently feed its social channels and blog, it is the fastest way to maintain a respectable visual presence without depending on a designer for every piece."
                : "Canva avec IA permet de générer des images, d'adapter des formats et de créer des pièces visuelles cohérentes sans maîtriser les outils de design professionnel. Pour une PME qui doit alimenter régulièrement ses réseaux sociaux et son blog, c'est le moyen le plus rapide de maintenir une image correcte sans dépendre d'un designer pour chaque pièce."}
            </p>
            <p className="text-gray-600 mb-4 leading-relaxed">
              {isEn
                ? "It does not replace the work of a good designer on branding projects, but it covers day-to-day social and blog content very competently."
                : "Il ne remplace pas le travail d'un bon designer sur des projets de marque, mais il couvre très bien le contenu social et de blog au quotidien."}
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-primary-600 mb-4">
              {isEn
                ? "HubSpot Breeze: AI inside the CRM"
                : "HubSpot Breeze : l'IA intégrée au CRM"}
            </h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              {isEn
                ? "When AI lives inside the CRM, it stops being an isolated experiment and becomes part of the commercial process. HubSpot Breeze helps draft emails, summarise client conversations and classify opportunities — all without leaving the tool where you already manage your contacts."
                : "Quand l'IA vit à l'intérieur du CRM, elle cesse d'être une expérience isolée et devient partie intégrante du processus commercial. HubSpot Breeze aide à rédiger des emails, résumer les conversations clients et classer les opportunités — sans quitter l'outil où vous gérez déjà vos contacts."}
            </p>
            <p className="text-gray-600 mb-4 leading-relaxed">
              {isEn
                ? "It makes sense for businesses that already use a CRM and want to add an AI layer without building new integrations. For anyone who does not yet manage leads in an organised way, the prior step is sorting out that process first."
                : "Cela a du sens pour les entreprises qui utilisent déjà un CRM et souhaitent ajouter une couche d'IA sans construire de nouvelles intégrations. Pour ceux qui ne gèrent pas encore leurs leads de manière organisée, l'étape préalable est d'organiser ce processus."}
            </p>
          </section>

          <BlogBanner lang={lang} />

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-primary-600 mb-4">
              {isEn
                ? "Make and Zapier: no-code automation"
                : "Make et Zapier : automatisation sans code"}
            </h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              {isEn
                ? "Make and Zapier connect your applications and let AI execute tasks automatically: classify leads, trigger emails, publish content or move data between tools. This is the gateway to AI agents for marketing without needing to code."
                : "Make et Zapier connectent vos applications et permettent à l'IA d'exécuter des tâches automatiquement : classer des leads, déclencher des emails, publier du contenu ou déplacer des données entre outils. C'est la porte d'entrée vers les agents IA pour le marketing sans avoir besoin de coder."}
            </p>
            <p className="text-gray-600 mb-4 leading-relaxed">
              {isEn
                ? "The learning curve is around 2–4 weeks, but the time savings afterwards more than compensate. Start by automating a single repetitive task and expand from there."
                : "La courbe d'apprentissage est d'environ 2 à 4 semaines, mais le gain de temps par la suite compense largement. Commencez par automatiser une seule tâche répétitive et élargissez à partir de là."}
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-primary-600 mb-4">
              {isEn
                ? "AI monitoring tools: starting to matter"
                : "Outils de monitoring IA : ils commencent à compter"}
            </h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              {isEn
                ? "As people search via ChatGPT, Perplexity or Gemini, knowing whether your brand appears in those answers becomes relevant. Monitoring tools specific to generative engines are starting to emerge, and their importance will grow at the same pace as AI positioning."
                : "À mesure que les gens recherchent via ChatGPT, Perplexity ou Gemini, savoir si votre marque apparaît dans ces réponses devient pertinent. Des outils de monitoring spécifiques aux moteurs génératifs commencent à se consolider, et leur importance grandira au même rythme que le positionnement en IA."}
            </p>
            <p className="text-gray-600 mb-4 leading-relaxed">
              {isEn
                ? "For most SMEs, this section is still optional — but worth keeping on the radar before it becomes a standard expectation."
                : "Pour la plupart des PME, cette section est encore optionnelle — mais il vaut la peine de la garder à l'œil avant qu'elle ne devienne un standard."}
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-primary-600 mb-4">
              {isEn
                ? "The recommended stack for an SME in 2026"
                : "Le stack recommandé pour une PME en 2026"}
            </h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              {isEn
                ? "Putting all of this together does not require a large budget. A balanced stack for an SME starts with a subscription to a powerful language model and is completed with design, automation and social media measurement:"
                : "Réunir tout cela ne nécessite pas un grand budget. Un stack équilibré pour une PME part d'un abonnement à un modèle de langage puissant et se complète avec le design, l'automatisation et la mesure des réseaux sociaux :"}
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-600">
              <li>
                {isEn
                  ? "ChatGPT Plus or Claude Pro (£20/month) for content generation and structure."
                  : "ChatGPT Plus ou Claude Pro (20 €/mois) pour la génération et la structure du contenu."}
              </li>
              <li>
                {isEn
                  ? "Canva Pro (£13/month) for visual design without a designer."
                  : "Canva Pro (13 €/mois) pour le design visuel sans designer."}
              </li>
              <li>
                {isEn
                  ? "Make or Zapier starter (£9–20/month) for no-code automation."
                  : "Make ou Zapier starter (9–20 €/mois) pour l'automatisation sans code."}
              </li>
              <li>
                {isEn
                  ? "Metricool (£15/month) for social media management and measurement."
                  : "Metricool (15 €/mois) pour la gestion et la mesure des réseaux sociaux."}
              </li>
            </ul>
            <p className="text-gray-600 mt-4 leading-relaxed">
              {isEn
                ? "In total, between £57 and £68/month. A modest investment that, well used, multiplies the capacity of a small team."
                : "Au total, entre 57 et 68 €/mois. Un investissement modeste qui, bien exploité, multiplie la capacité d'une petite équipe."}
            </p>
          </section>

          <div className="bg-primary-600 text-white rounded-2xl p-8 my-2 text-center">
            <h2 className="text-2xl font-bold mb-3">
              {isEn
                ? "Not sure where to start with AI in your marketing?"
                : "Vous ne savez pas par où commencer avec l'IA dans votre marketing ?"}
            </h2>
            <p className="text-primary-200 mb-6">
              {isEn
                ? "At Mkt Web 360 we help you choose and implement only the AI tools that deliver real value to your business — without overspending or wasting time."
                : "Chez Mkt Web 360, nous vous aidons à choisir et implémenter uniquement les outils IA qui apportent une valeur réelle à votre entreprise — sans dépenser trop ni perdre du temps."}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={`/${lang}/contact/`}
                className="bg-accent-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-accent-600 transition-colors"
              >
                {isEn ? "Talk to a specialist" : "Parler à un spécialiste"}
              </a>
              <a
                href={`/${lang}/geo-generative-engine-optimization/`}
                className="border-2 border-white text-white px-6 py-3 rounded-full font-semibold hover:bg-white/10 transition-colors"
              >
                {isEn ? "See AI positioning" : "Voir le positionnement IA"}
              </a>
            </div>
          </div>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-primary-600 mb-4">
              {isEn ? "Frequently asked questions" : "Questions fréquentes"}
            </h2>
            <div className="space-y-3">
              {FAQS.map((faq) => (
                <details
                  key={faq.q}
                  className="border border-gray-200 rounded-xl overflow-hidden group"
                >
                  <summary className="px-6 py-4 cursor-pointer font-semibold text-primary-700 hover:bg-primary-50 list-none flex justify-between items-center">
                    {faq.q}
                    <span className="text-accent-500 group-open:rotate-180 transition-transform">▾</span>
                  </summary>
                  <div className="px-6 py-4 text-gray-600 border-t border-gray-100">{faq.a}</div>
                </details>
              ))}
            </div>
          </section>
        </div>

        <nav className="mt-12 pt-8 border-t border-gray-200">
          <a
            href={`/${lang}/blog/`}
            className="text-accent-500 hover:text-accent-600 font-medium text-sm"
          >
            {isEn ? "← Back to blog" : "← Retour au blog"}
          </a>
        </nav>
      </div>
    </>
  );
}
