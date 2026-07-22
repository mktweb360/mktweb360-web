import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ContactForm } from "@/components/ContactForm";
import { BlogBanner } from "@/components/BlogBanner";
import { RelatedArticles } from "@/components/RelatedArticles";
import { alternatesFor } from "@/lib/i18n/routes";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const isEn = lang === "en";
  return {
    title: isEn
      ? "How to Use ChatGPT for Digital Marketing | Mkt Web 360"
      : "Comment utiliser ChatGPT pour le marketing digital | Mkt Web 360",
    description: isEn
      ? "How to use ChatGPT for SEO content, Google Ads, social media and email marketing without losing quality."
      : "Comment utiliser ChatGPT pour le contenu SEO, Google Ads, réseaux sociaux et email marketing sans perdre en qualité.",
    alternates: alternatesFor(`/${lang}/${lang === "en" ? "chatgpt-for-digital-marketing" : "chatgpt-pour-marketing-digital"}/`) ?? {
      canonical: `https://www.mktweb360.com/${lang}/${lang === "en" ? "chatgpt-for-digital-marketing" : "chatgpt-pour-marketing-digital"}/`,
    },
  };
}

export default async function Page({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const isEn = lang === "en";

  return (
    <>
      <div className="max-w-3xl mx-auto px-4 py-12">
        <Breadcrumbs
          crumbs={[
            { label: isEn ? "Home" : "Accueil", href: `/${lang}/` },
            { label: "Blog", href: `/${lang}/blog/` },
            { label: isEn ? "ChatGPT for marketing" : "ChatGPT pour le marketing" },
          ]}
        />
        <p className="text-sm text-accent-500 font-semibold mb-2">AI · Strategy</p>
        <h1 className="text-4xl font-bold text-primary-600 mb-4 leading-tight">
          {isEn
            ? "How to use ChatGPT for digital marketing without losing quality"
            : "Comment utiliser ChatGPT pour le marketing digital sans perdre en qualité"}
        </h1>
        <p className="text-xl text-gray-500 mb-8 leading-relaxed">
          {isEn
            ? "ChatGPT can speed up many digital marketing tasks. But using it badly produces generic content that does not rank and does not convert. This guide shows you the right way."
            : "ChatGPT peut accélérer de nombreuses tâches de marketing digital. Mais l'utiliser mal produit du contenu générique qui ne se positionne pas et ne convertit pas. Ce guide vous montre la bonne façon de l'utiliser."}
        </p>

        <h2 className="text-2xl font-bold text-primary-600 mt-10 mb-4">
          {isEn ? "What ChatGPT can and cannot do for your marketing" : "Ce que ChatGPT peut et ne peut pas faire pour votre marketing"}
        </h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          {isEn
            ? "ChatGPT excels at: drafting first versions of content quickly, brainstorming ideas, repurposing existing content, translating and adapting copy, summarising documents and generating variations of ad text. It saves hours on tasks that previously took a full day."
            : "ChatGPT excelle dans : la rédaction rapide de premières versions de contenu, le brainstorming d'idées, la réorientation du contenu existant, la traduction et l'adaptation de textes, la synthèse de documents et la génération de variations de texte publicitaire. Il fait gagner des heures sur des tâches qui prenaient auparavant une journée entière."}
        </p>
        <p className="text-gray-600 leading-relaxed mb-4">
          {isEn
            ? "What it cannot do reliably: research current events or competitor data (its knowledge has a cutoff), verify facts, replace strategic thinking, understand your specific brand voice without detailed prompting, or produce content that ranks on its own without human editing and expertise layered on top."
            : "Ce qu'il ne peut pas faire de manière fiable : rechercher des événements actuels ou des données sur les concurrents (ses connaissances ont une date limite), vérifier des faits, remplacer la réflexion stratégique, comprendre votre voix de marque spécifique sans des instructions détaillées, ou produire du contenu qui se classe seul sans édition humaine et expertise superposées."}
        </p>

        <h2 className="text-2xl font-bold text-primary-600 mt-10 mb-4">
          {isEn ? "ChatGPT for SEO content: prompts that work" : "ChatGPT pour le contenu SEO : des prompts qui fonctionnent"}
        </h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          {isEn
            ? "The difference between good and bad SEO content from ChatGPT is the prompt. Bad prompt: 'Write a blog post about SEO.' Good prompt: 'You are an SEO expert writing for Spanish SME owners. Write an 800-word article about local SEO for service businesses. Include H2 headings, specific actionable tips, and avoid generic advice. Tone: practical, direct, no jargon.'"
            : "La différence entre bon et mauvais contenu SEO de ChatGPT réside dans le prompt. Mauvais prompt : 'Écris un article de blog sur le SEO.' Bon prompt : 'Tu es un expert SEO qui écrit pour des propriétaires de PME françaises. Rédige un article de 800 mots sur le SEO local pour les entreprises de services. Inclus des titres H2, des conseils concrets et actionnables, et évite les conseils génériques. Ton : pratique, direct, sans jargon.'"}
        </p>
        <p className="text-gray-600 leading-relaxed mb-4">
          {isEn
            ? "Always edit the output: add your own examples, statistics and expertise. Remove generic phrases. The article must pass the 'could only I write this?' test. Content that any brand could publish is worth nothing in SEO."
            : "Modifiez toujours le résultat : ajoutez vos propres exemples, statistiques et expertise. Supprimez les phrases génériques. L'article doit passer le test 'est-ce que seul moi pourrais écrire cela ?' Le contenu que n'importe quelle marque pourrait publier ne vaut rien en SEO."}
        </p>

        <h2 className="text-2xl font-bold text-primary-600 mt-10 mb-4">
          {isEn ? "ChatGPT for Google Ads: copy and extensions" : "ChatGPT pour Google Ads : textes et extensions"}
        </h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          {isEn
            ? "ChatGPT is excellent for generating multiple variations of ad headlines and descriptions. Ask for 10 variations of a headline under 30 characters, or 5 call-to-action options for a responsive search ad. Then test them — let Google's machine learning identify which combinations perform best."
            : "ChatGPT est excellent pour générer de multiples variations de titres et descriptions d'annonces. Demandez 10 variations d'un titre de moins de 30 caractères, ou 5 options d'appel à l'action pour une annonce responsive sur le réseau de recherche. Testez-les ensuite — laissez l'apprentissage automatique de Google identifier les combinaisons les plus performantes."}
        </p>
        <p className="text-gray-600 leading-relaxed mb-4">
          {isEn
            ? "It is also useful for extension copy: sitelink descriptions, callout extensions and structured snippets. Give it your USPs and target audience and ask for concise extension text. This saves significant time when setting up campaigns."
            : "C'est également utile pour le texte des extensions : descriptions de liens annexes, extensions d'accroche et extraits de site. Donnez-lui vos USP et votre audience cible et demandez un texte d'extension concis. Cela fait gagner beaucoup de temps lors de la configuration des campagnes."}
        </p>

        <h2 className="text-2xl font-bold text-primary-600 mt-10 mb-4">
          {isEn ? "ChatGPT for social media: calendars and copy" : "ChatGPT pour les réseaux sociaux : calendriers et textes"}
        </h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          {isEn
            ? "Use ChatGPT to create a monthly content calendar in minutes: give it your brand, audience, 3 content pillars and ask for 20 post ideas with captions. Then refine the ones that fit your brand voice. This is where AI genuinely saves hours — not replacing creativity but giving you a starting point to react to."
            : "Utilisez ChatGPT pour créer un calendrier de contenu mensuel en quelques minutes : donnez-lui votre marque, audience, 3 piliers de contenu et demandez 20 idées de posts avec légendes. Affinez ensuite ceux qui correspondent à votre voix de marque. C'est là que l'IA fait vraiment gagner des heures — pas en remplaçant la créativité mais en vous donnant un point de départ auquel réagir."}
        </p>

        <h2 className="text-2xl font-bold text-primary-600 mt-10 mb-4">
          {isEn ? "The limits of AI in marketing: when you need a professional" : "Les limites de l'IA en marketing : quand vous avez besoin d'un professionnel"}
        </h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          {isEn
            ? "AI cannot replace: strategic decisions about which channels to prioritise, competitive analysis based on current data, technical SEO audits, campaign optimisation based on real performance data, and the accountability of a professional who knows your industry and has skin in the game."
            : "L'IA ne peut pas remplacer : les décisions stratégiques sur les canaux à prioriser, l'analyse concurrentielle basée sur des données actuelles, les audits SEO techniques, l'optimisation des campagnes basée sur des données de performance réelles, et la responsabilité d'un professionnel qui connaît votre secteur et qui est impliqué."}
        </p>
        <p className="text-gray-600 leading-relaxed mb-4">
          {isEn
            ? "Think of AI as a junior assistant that drafts fast but needs supervision. The value is in the expertise applied on top — not the raw output. Businesses that treat AI output as finished work consistently underperform those that use it as a starting point."
            : "Pensez à l'IA comme à un assistant junior qui rédige rapidement mais a besoin de supervision. La valeur réside dans l'expertise appliquée par-dessus — pas dans le résultat brut. Les entreprises qui traitent le résultat de l'IA comme du travail fini sous-performent systématiquement celles qui l'utilisent comme point de départ."}
        </p>

        <BlogBanner variant="geo" />

        <section className="bg-primary-600 text-white rounded-2xl p-8 mt-12">
          <h2 className="text-2xl font-bold mb-4">
            {isEn
              ? "Need help with your digital marketing?"
              : "Besoin d'aide avec votre marketing digital ?"}
          </h2>
          <p className="text-primary-200 mb-6">
            {isEn
              ? "Tell us about your project and we'll get back to you within 24 hours."
              : "Parlez-nous de votre projet et nous vous répondrons dans les 24 heures."}
          </p>
          <div className="bg-white rounded-xl p-6">
            <ContactForm formType={`blog-${lang}`} />
          </div>
        </section>
      </div>
      <RelatedArticles category="AI · Strategy" />
    </>
  );
}
