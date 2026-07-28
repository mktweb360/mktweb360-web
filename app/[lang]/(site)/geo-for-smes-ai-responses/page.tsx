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
      ? "GEO for SMEs: How to Appear in AI Responses Without Being a Big Brand"
      : "GEO pour les PME : comment apparaître dans les réponses IA sans être une grande marque",
    description: isEn
      ? "SMEs have a real advantage in GEO: niche specificity. A practical guide for any small business to appear in ChatGPT, Gemini and Perplexity responses."
      : "Les PME ont un véritable avantage en GEO : la spécificité de niche. Guide pratique pour que n'importe quelle petite entreprise apparaisse dans les réponses de ChatGPT, Gemini et Perplexity.",
    alternates: alternatesFor(`/${lang}/geo-for-smes-ai-responses/`) ?? {
      canonical: `https://www.mktweb360.com/${lang}/geo-for-smes-ai-responses/`,
    },
    openGraph: {
      title: isEn
        ? "GEO for SMEs: How to Appear in AI Responses Without Being a Big Brand | Mkt Web 360"
        : "GEO pour les PME : comment apparaître dans les réponses IA sans être une grande marque | Mkt Web 360",
      description: isEn
        ? "SMEs have a real advantage in GEO: niche specificity. A practical guide to appear in ChatGPT, Gemini and Perplexity responses."
        : "Les PME ont un avantage réel en GEO : la spécificité de niche. Guide pratique pour apparaître dans les réponses de ChatGPT, Gemini et Perplexity.",
    },
  };
}

const FAQS_EN = [
  {
    q: "Do I need to hire someone to do GEO or can I do it myself?",
    a: "It depends on your starting point. If you have solid technical SEO foundations, the first steps (improving content structure, reviewing robots.txt for AI bots, adding schema markup) can be applied by someone with basic knowledge. Advanced GEO requires more experience.",
  },
  {
    q: "Does GEO work for local businesses?",
    a: "Yes, especially. When someone asks ChatGPT for a local supplier, the model tries to give specific responses. A local business with a well-optimised Google Business Profile, coherent NAP and local authority content has a real chance of appearing.",
  },
  {
    q: "Does GEO work in highly specialised sectors?",
    a: "Particularly in those sectors. Models have more difficulty finding quality sources in specific niches. A company that produces quality content about its niche can become the reference the AI cites, by sheer absence of real competition.",
  },
  {
    q: "How much does GEO cost for an SME?",
    a: "GEO integrated with SEO has no significant additional cost if content work is already planned. The real cost is editorial time. Monitoring tools range from free (manual testing) to several hundred euros per month.",
  },
];

const FAQS_FR = [
  {
    q: "Dois-je faire appel à quelqu'un pour faire du GEO ou puis-je le faire moi-même ?",
    a: "Cela dépend de votre point de départ. Si vous avez un SEO technique solide, les premières étapes (améliorer la structure du contenu, vérifier le robots.txt pour les bots IA, ajouter du schema markup) peuvent être appliquées par quelqu'un ayant des connaissances de base. Le GEO avancé demande plus d'expérience.",
  },
  {
    q: "Le GEO fonctionne-t-il pour les entreprises locales ?",
    a: "Oui, particulièrement. Quand quelqu'un demande à ChatGPT un prestataire local, le modèle essaie de donner des réponses spécifiques. Une entreprise locale avec une fiche Google Business Profile bien optimisée, un NAP cohérent et du contenu d'autorité locale a de vraies chances d'apparaître.",
  },
  {
    q: "Le GEO fonctionne-t-il dans les secteurs très spécialisés ?",
    a: "Particulièrement dans ces secteurs. Les modèles ont plus de difficulté à trouver des sources de qualité dans des niches spécifiques. Une entreprise qui produit du contenu de qualité sur sa niche peut devenir la référence que l'IA cite, précisément par absence de vraie concurrence.",
  },
  {
    q: "Combien coûte le GEO pour une PME ?",
    a: "Le GEO intégré au SEO n'a pas de coût supplémentaire significatif si le travail de contenu est déjà planifié. Le vrai coût est le temps éditorial. Les outils de surveillance vont du gratuit (tests manuels) à plusieurs centaines d'euros par mois.",
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
            { label: isEn ? "GEO for SMEs" : "GEO pour les PME" },
          ]}
        />

        <p className="text-sm text-accent-500 font-semibold mb-2">GEO</p>

        <h1 className="text-4xl font-bold text-primary-600 mb-4 leading-tight">
          {isEn
            ? "GEO for SMEs: How to Appear in AI Responses Without Being a Big Brand"
            : "GEO pour les PME : comment apparaître dans les réponses IA sans être une grande marque"}
        </h1>

        <p className="text-xl text-gray-500 mb-8 leading-relaxed">
          {isEn
            ? "Appearing in ChatGPT, Gemini or Perplexity is not a privilege reserved for big brands. SMEs have a real and often underused advantage: niche specificity. This GEO guide sets out the concrete steps any small business can take today."
            : "Apparaître dans ChatGPT, Gemini ou Perplexity n'est pas un privilège réservé aux grandes marques. Les PME ont un avantage réel et souvent inexploité : la spécificité de niche. Ce guide GEO présente les étapes concrètes que n'importe quelle petite entreprise peut entreprendre dès aujourd'hui."}
        </p>

        <p className="text-gray-700 leading-relaxed mb-6">
          {isEn
            ? "Many small businesses write off the AI battle before it starts, convinced that only big brands appear in those responses. It is a perception error. Generative models do not distribute mentions by budget — they distribute them based on who best answers a specific question, and there a specialised SME can beat a generic giant."
            : "Beaucoup de petites entreprises donnent la bataille de l'IA pour perdue avant même de commencer, convaincues que seules les grandes marques apparaissent dans ces réponses. C'est une erreur de perception. Les modèles génératifs ne distribuent pas les mentions par budget — ils les distribuent en fonction de qui répond le mieux à une question concrète, et là une PME spécialisée peut battre un géant générique."}
        </p>

        <h2 className="text-2xl font-bold text-primary-600 mt-8 mb-3">
          {isEn ? "Why SMEs have a real advantage in GEO" : "Pourquoi les PME ont un véritable avantage en GEO"}
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          {isEn
            ? "The advantage is called specificity. A big brand tends to talk about everything for everyone, with a broad and therefore diluted message. An SME talks about one thing, in depth, for a very defined audience. When someone asks an AI a very specific question, the model prefers the source that addresses that topic thoroughly, not the one that mentions it in passing."
            : "L'avantage s'appelle la spécificité. Une grande marque a tendance à parler de tout pour tout le monde, avec un message large et donc dilué. Une PME parle d'une seule chose, en détail, pour un public très défini. Quand quelqu'un pose à l'IA une question très précise, le modèle préfère la source qui traite ce sujet en profondeur, pas celle qui le mentionne en passant."}
        </p>
        <p className="text-gray-700 leading-relaxed mb-6">
          {isEn
            ? "That is the blind spot of big brands: generality. And it is exactly the ground where an SME can become the reference the AI cites, precisely because no one else covers that niche with the same dedication. Working on GEO is ultimately about leveraging something the SME already has: focus."
            : "C'est le point aveugle des grandes marques : la généralité. Et c'est exactement le terrain où une PME peut devenir la référence que l'IA cite, précisément parce que personne d'autre ne traite ce niche avec la même dévotion. Travailler le GEO, au fond, c'est s'appuyer sur quelque chose que la PME possède déjà : le focus."}
        </p>

        <h2 className="text-2xl font-bold text-primary-600 mt-8 mb-3">
          {isEn ? "Five steps any SME can take today" : "Cinq étapes que n'importe quelle PME peut entreprendre dès aujourd'hui"}
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          {isEn
            ? "No major technical deployment is needed to start. There are five orderly, affordable moves that make a difference. First, audit your robots.txt to allow AI bots to access your content: there is no point writing well if the crawlers cannot read you. Second, reorganise your content towards a question-and-answer format, so each section resolves a specific doubt."
            : "Il n'est pas nécessaire d'un grand déploiement technique pour commencer. Il y a cinq mouvements ordonnés et accessibles qui font la différence. Premièrement, auditer votre robots.txt pour permettre l'accès des bots IA à votre contenu : cela ne sert à rien d'écrire bien si les crawlers ne peuvent pas vous lire. Deuxièmement, réorganiser votre contenu vers un format question-réponse, pour que chaque section résolve un doute concret."}
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          {isEn
            ? "Third, add FAQPage schema markup to your key pages, so the machine processes your answers without ambiguity. Fourth, maintain NAP consistency — name, address and phone — across all channels, which overlaps with good local SEO practice. And fifth, produce niche-specific content, the kind that only you can write with genuine expertise."
            : "Troisièmement, ajouter le schema markup de type FAQPage à vos pages clés, pour que la machine traite vos réponses sans ambiguïté. Quatrièmement, soigner la cohérence du NAP — nom, adresse et téléphone — sur tous les canaux, ce qui se recoupe avec un bon travail de SEO local. Et cinquièmement, produire du contenu spécifique à votre niche, celui que vous seul pouvez écrire avec une vraie expertise."}
        </p>
        <p className="text-gray-700 leading-relaxed mb-6">
          {isEn
            ? "None of these steps requires a large enterprise budget. Most build on an organic SEO foundation that many SMEs already have half built; GEO simply organises it with the logic that now a machine is also reading."
            : "Aucune de ces étapes ne nécessite un budget de grande entreprise. La plupart s'appuient sur une base de SEO organique que beaucoup de PME ont déjà à moitié construite ; le GEO l'organise simplement avec la logique qu'une machine lit maintenant aussi."}
        </p>

        <h2 className="text-2xl font-bold text-primary-600 mt-8 mb-3">
          {isEn ? "The mistake most SMEs make when starting with GEO" : "L'erreur que font la plupart des PME en commençant avec le GEO"}
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          {isEn
            ? "The most common failure is wanting to appear everywhere. It is the temptation of chasing every possible search in your sector, dispersing effort and dominating none. The result is superficial content that competes at a disadvantage precisely where big brands are strong: in the generic."
            : "L'erreur la plus courante est de vouloir apparaître partout. C'est la tentation de poursuivre chaque recherche possible de son secteur, en dispersant les efforts et sans en dominer aucune. Le résultat est un contenu superficiel qui concurrence en situation de désavantage précisément là où les grandes marques sont fortes : dans le générique."}
        </p>
        <p className="text-gray-700 leading-relaxed mb-6">
          {isEn
            ? "The right strategy is the opposite: dominate one search before going after the next. Choose the specific question where you can be, without argument, the best answer in the market, and work it until the AI recognises you as a reference. From that position of earned authority, it is much easier to expand to neighbouring topics."
            : "La stratégie juste est l'inverse : dominer une seule recherche avant d'aller chercher la suivante. Choisissez la question concrète où vous pouvez être, sans discussion, la meilleure réponse du marché, et travaillez-la jusqu'à ce que l'IA vous reconnaisse comme référence. Depuis cette position d'autorité gagnée, il est beaucoup plus facile de s'étendre à des sujets voisins."}
        </p>

        <div className="bg-primary-600 text-white rounded-2xl p-8 my-8 text-center">
          <h2 className="text-2xl font-bold mb-3">
            {isEn ? "Your size is not a barrier to appearing in AI" : "Votre taille n'est pas un obstacle pour apparaître dans l'IA"}
          </h2>
          <p className="text-primary-200 mb-6">
            {isEn
              ? "At Mkt Web 360 we help SMEs and freelancers turn their specialisation into visibility in ChatGPT, Gemini and Perplexity, with a tailored GEO strategy."
              : "Chez Mkt Web 360, nous aidons les PME et indépendants à convertir leur spécialisation en visibilité dans ChatGPT, Gemini et Perplexity, avec une stratégie GEO sur mesure."}
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
              {isEn ? "GEO service" : "Service GEO"}
            </Link>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-primary-600 mt-8 mb-3">
          {isEn ? "Where GEO has the most impact" : "Où le GEO a le plus d'impact"}
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          {isEn
            ? "GEO performs particularly well in two scenarios. The first is local business: when someone asks an AI for a supplier in a specific area, the model tries to give a specific answer, and a business with a well-optimised profile, coherent NAP and local authority content has a real chance of being the name that appears."
            : "Le GEO fonctionne particulièrement bien dans deux scénarios. Le premier est l'entreprise locale : quand quelqu'un demande à l'IA un prestataire d'une zone précise, le modèle essaie de donner une réponse spécifique, et une entreprise avec une fiche bien optimisée, un NAP cohérent et du contenu d'autorité locale a de vraies chances d'être le nom qui apparaît."}
        </p>
        <p className="text-gray-700 leading-relaxed mb-6">
          {isEn
            ? "The second is highly specialised sectors. Models have difficulty finding quality sources in narrow niches, so a company that produces rigorous content about its specialty can become the reference the AI cites almost by absence of real competition. The more specific and less saturated the topic, the greater the opportunity for the SME."
            : "Le second concerne les secteurs très spécialisés. Les modèles ont du mal à trouver des sources de qualité dans des niches étroites, donc une entreprise qui produit du contenu rigoureux sur sa spécialité peut devenir la référence que l'IA cite presque par absence de vraie concurrence. Plus le sujet est spécifique et peu saturé, plus l'opportunité pour la PME est grande."}
        </p>

        <h2 className="text-2xl font-bold text-primary-600 mt-8 mb-3">
          {isEn ? "How to start without investing in monitoring tools" : "Comment commencer sans investir dans des outils de surveillance"}
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          {isEn
            ? "You do not need to pay anything to take the first steps or to check whether they are working. Basic monitoring is manual and free: ask ChatGPT, Gemini and Perplexity about topics in your sector yourself and note whether your brand appears and how. Repeat the test periodically to track progress."
            : "Vous n'avez pas besoin de payer quoi que ce soit pour franchir les premières étapes ni pour vérifier si elles fonctionnent. La surveillance de base est manuelle et gratuite : interrogez vous-même ChatGPT, Gemini et Perplexity sur les sujets de votre secteur et notez si votre marque apparaît et comment. Répétez le test périodiquement pour suivre l'évolution."}
        </p>
        <p className="text-gray-700 leading-relaxed mb-6">
          {isEn
            ? "The real cost of GEO for an SME is not software, but editorial time: writing well, with focus and consistently. If that content work is already planned, integrating GEO does not add significant expense. When the business grows, you can always incorporate more advanced monitoring tools; to start, method and discipline are enough."
            : "Le vrai coût du GEO pour une PME n'est pas dans le logiciel, mais dans le temps éditorial : bien écrire, avec focus et de façon constante. Si ce travail de contenu est déjà planifié, intégrer le GEO n'ajoute pas de dépense significative. Quand l'entreprise grandit, vous pourrez toujours incorporer des outils de surveillance plus avancés ; pour commencer, la méthode et la discipline suffisent."}
        </p>

        <h2 className="text-2xl font-bold text-primary-600 mt-8 mb-4">
          {isEn ? "Frequently asked questions about GEO for SMEs" : "Questions fréquentes sur le GEO pour les PME"}
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

        <BlogBanner lang={lang} />

        <nav className="mt-12 pt-8 border-t border-gray-200">
          <Link href={`/${lang}/blog/`} className="text-accent-500 hover:text-accent-600 font-medium text-sm">
            {isEn ? "← Back to blog" : "← Retour au blog"}
          </Link>
        </nav>
      </div>
      <RelatedArticles currentSlug="geo-for-smes-ai-responses" />
    </>
  );
}
