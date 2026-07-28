import { Breadcrumbs } from "@/components/Breadcrumbs";
import { BlogBanner } from "@/components/BlogBanner";
import { alternatesFor } from "@/lib/i18n/routes";
import Link from "next/link";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const isEn = lang === "en";
  return {
    title: isEn
      ? "How to Optimise Your Content for AI Citations: GEO Guide 2026"
      : "Comment optimiser votre contenu pour être cité par l'IA : guide GEO 2026",
    description: isEn
      ? "Technical and practical GEO guide for SMEs. Learn how to structure your content, implement advanced schema markup, configure llms.txt and build semantic authority to appear in ChatGPT, Gemini and Perplexity."
      : "Guide technique et pratique de GEO pour les PME. Apprenez à structurer votre contenu, implémenter un schema markup avancé, configurer llms.txt et construire l'autorité sémantique pour apparaître dans ChatGPT, Gemini et Perplexity.",
    alternates: alternatesFor(`/${lang}/how-to-optimize-content-for-ai-citations/`) ?? {
      canonical: `https://www.mktweb360.com/${lang}/how-to-optimize-content-for-ai-citations/`,
    },
    openGraph: {
      title: isEn
        ? "How to Optimise Your Content for AI Citations: GEO Guide 2026 | Mkt Web 360"
        : "Comment optimiser votre contenu pour être cité par l'IA : guide GEO 2026 | Mkt Web 360",
      description: isEn
        ? "Technical and practical GEO guide for SMEs. Learn how to structure your content, implement advanced schema markup, configure llms.txt and build semantic authority."
        : "Guide technique et pratique de GEO pour les PME. Apprenez à structurer votre contenu, implémenter un schema markup avancé, configurer llms.txt et construire l'autorité sémantique.",
    },
  };
}

export default async function Page({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const isEn = lang === "en";

  const faqs = [
    {
      q: isEn
        ? "What is llms.txt and do I need to have it?"
        : "Qu'est-ce que llms.txt et ai-je besoin de l'avoir ?",
      a: isEn
        ? "The llms.txt is an indicative, readable representation of the site for AI systems. It is not an official Google signal, does not control crawler access and does not guarantee indexing or citation. Having it well-structured can make it easier for models to find and understand your most relevant pages, but it does not replace a good content strategy."
        : "Le llms.txt est une représentation indicative et lisible du site pour les systèmes d'IA. Ce n'est pas un signal officiel de Google, il ne contrôle pas l'accès des robots d'exploration et ne garantit ni l'indexation ni la citation. L'avoir bien structuré peut faciliter la découverte et la compréhension de vos pages les plus pertinentes par les modèles, mais il ne remplace pas une bonne stratégie de contenu.",
    },
    {
      q: isEn
        ? "Does schema markup help AI cite me?"
        : "Le schema markup aide-t-il l'IA à me citer ?",
      a: isEn
        ? "Yes. Structured schema markup (FAQPage, Article, Organization, Service) helps disambiguate entities and makes it easier for AI models to process your content with greater precision. Google does not define schema as a mechanism for accessing AI Overviews, but clean markup contributes to semantic understanding and can facilitate the appearance of rich results."
        : "Oui. Le schema markup structuré (FAQPage, Article, Organization, Service) aide à désambiguïser les entités et facilite le traitement de votre contenu par les modèles d'IA avec plus de précision. Google ne définit pas le schema comme un mécanisme d'accès aux AI Overviews, mais un balisage propre contribue à la compréhension sémantique et peut faciliter l'apparition de rich results.",
    },
    {
      q: isEn
        ? "How many words should an article have to rank in AI?"
        : "Combien de mots doit avoir un article pour se positionner dans l'IA ?",
      a: isEn
        ? "Length matters less than depth. A 1,200-word article that precisely answers a specific question is more likely to be cited than a generic 3,000-word one. The key is semantic density."
        : "La longueur compte moins que la profondeur. Un article de 1 200 mots qui répond avec précision à une question concrète a plus de chances d'être cité qu'un article générique de 3 000 mots. La clé est la densité sémantique.",
    },
    {
      q: isEn
        ? "How do I know if ChatGPT is citing me?"
        : "Comment savoir si ChatGPT me cite ?",
      a: isEn
        ? "You can conduct manual tests by asking ChatGPT, Gemini and Perplexity about your sector. Tools such as Profound, Otterly.ai or AthenaHQ allow you to systematically monitor your brand visibility in generative engines."
        : "Vous pouvez faire des tests manuels en interrogeant ChatGPT, Gemini et Perplexity sur votre secteur. Des outils comme Profound, Otterly.ai ou AthenaHQ permettent de surveiller systématiquement la visibilité de votre marque dans les moteurs génératifs.",
    },
  ];

  return (
    <>
      <div className="max-w-3xl mx-auto px-4 py-12">
        <Breadcrumbs
          crumbs={[
            { label: isEn ? "Home" : "Accueil", href: `/${lang}/` },
            { label: "Blog", href: `/${lang}/blog/` },
            {
              label: isEn
                ? "How to optimise content for AI citations"
                : "Optimiser son contenu pour les citations IA",
            },
          ]}
        />

        <p className="text-sm text-accent-500 font-semibold mb-2">
          {isEn ? "GEO" : "GEO"}
        </p>
        <h1 className="text-4xl font-bold text-primary-600 mb-4 leading-tight">
          {isEn
            ? "How to optimise your content so that ChatGPT and Gemini cite you in their responses"
            : "Comment optimiser votre contenu pour que ChatGPT et Gemini vous citent dans leurs réponses"}
        </h1>
        <p className="text-xl text-gray-500 mb-8 leading-relaxed">
          {isEn
            ? "Appearing in AI responses is not a matter of luck, but of method. This technical GEO (Generative Engine Optimization) guide walks you step by step through structuring your content, applying advanced schema markup and building the semantic authority that makes ChatGPT, Gemini and Perplexity cite you."
            : "Apparaître dans les réponses de l'IA n'est pas une question de chance, mais de méthode. Ce guide technique de GEO (Generative Engine Optimization) vous accompagne pas à pas pour structurer votre contenu, appliquer un schema markup avancé et construire l'autorité sémantique qui fait que ChatGPT, Gemini et Perplexity vous citent."}
        </p>

        <section className="mb-10">
          <p className="text-gray-600 mb-4 leading-relaxed">
            {isEn
              ? "GEO does not replace your positioning work: it extends it. Everything that follows assumes you already have a decent SEO foundation — fast site, HTTPS and useful content — and adds on top the signals that generative engines need to choose you as a source. If you are still wondering why this matters, it is worth reading first why appearing in ChatGPT and Gemini matters more than SEO in 2026."
              : "Le GEO ne remplace pas votre travail de positionnement : il le prolonge. Tout ce qui suit suppose que vous avez déjà une bonne base de SEO organique — site rapide, en HTTPS et avec du contenu utile — et ajoute par-dessus les signaux dont les moteurs génératifs ont besoin pour vous choisir comme source. Si vous vous demandez encore pourquoi cela est important, il vaut la peine de lire d'abord pourquoi apparaître dans ChatGPT et Gemini compte plus que le SEO en 2026."}
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-primary-600 mb-4">
            {isEn
              ? "1. Content structure is the most important signal"
              : "1. La structure du contenu est le signal le plus important"}
          </h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {isEn
              ? "Language models do not read like a person: they extract self-contained fragments that they can reuse to respond. That is why structure carries more weight than almost anything else. Content organised around explicit questions and direct answers, with one heading per idea and paragraphs that resolve a single point, is far more citable than a long, winding text where the answer is diluted."
              : "Les modèles de langage ne lisent pas comme une personne : ils extraient des fragments autonomes qu'ils peuvent réutiliser pour répondre. C'est pourquoi la structure pèse plus que presque tout le reste. Un contenu organisé autour de questions explicites et de réponses directes, avec un titre par idée et des paragraphes qui résolvent un seul point, est beaucoup plus citable qu'un texte long et sinueux où la réponse est diluée."}
          </p>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {isEn
              ? "The practical rule is simple: each section should be able to be read in isolation and still make sense. Start each block by answering the question and then develop it. That question-answer format not only helps AI; it also improves the experience of the human reader, who finds what they are looking for without detours."
              : "La règle pratique est simple : chaque section devrait pouvoir être lue de façon isolée et rester cohérente. Commencez chaque bloc en répondant à la question, puis développez. Ce format question-réponse n'aide pas seulement l'IA ; il améliore aussi l'expérience du lecteur humain, qui trouve ce qu'il cherche sans détours."}
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-primary-600 mb-4">
            {isEn
              ? "2. Advanced schema markup: beyond the basics"
              : "2. Schema markup avancé : au-delà des bases"}
          </h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {isEn
              ? "Schema markup translates your content into a language that machines understand without ambiguity. Going beyond the basics means combining several types coherently: FAQPage for frequently asked questions, Article for the content body, Organization to identify who publishes and Service for what you offer."
              : "Le schema markup traduit votre contenu en un langage que les machines comprennent sans ambiguïté. Aller au-delà des bases signifie combiner plusieurs types de manière cohérente : FAQPage pour les questions fréquentes, Article pour le corps du contenu, Organization pour identifier qui publie et Service pour ce que vous proposez."}
          </p>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {isEn
              ? "This markup has a dual benefit. It makes it easier for AI models to process and relate your information with greater precision, and it helps Google display rich results in organic search. A well-implemented schema remains one of the technical investments with the best effort-to-result ratio."
              : "Ce balisage a un double bénéfice. Il facilite le traitement et la mise en relation de vos informations par les modèles d'IA avec plus de précision, et contribue à ce que Google puisse afficher des rich results dans la recherche organique. Un schema bien implémenté reste l'un des investissements techniques avec le meilleur rapport effort-résultat."}
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-primary-600 mb-4">
            {isEn
              ? "3. The llms.txt file: the signal AI crawlers read"
              : "3. Le fichier llms.txt : le signal que lisent les robots d'IA"}
          </h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {isEn
              ? "The llms.txt is an indicative, readable representation of the site for AI systems. Unlike robots.txt, it does not control crawler access and does not guarantee indexing or citation; it is also not an official Google signal. Its real utility is structural: it allows language models to find and relate more easily to your most relevant pages, provided the content behind those URLs is high quality."
              : "Le llms.txt est une représentation indicative et lisible du site pour les systèmes d'IA. Contrairement au robots.txt, il ne contrôle pas l'accès des robots d'exploration et ne garantit ni l'indexation ni la citation ; ce n'est pas non plus un signal officiel de Google. Son utilité réelle est structurelle : il permet aux modèles de langage de trouver et de relier plus facilement vos pages les plus pertinentes, à condition que le contenu derrière ces URL soit de qualité."}
          </p>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {isEn
              ? "Configuring it correctly means first reviewing which AI bots you want to allow and which you do not, and pointing in an orderly fashion to the resources you want the machine to prioritise. It is a small file, but it forms part of that technical layer that separates those who improvise from those who work GEO with sound judgement."
              : "Le configurer correctement passe par revoir d'abord quels bots d'IA vous souhaitez autoriser et lesquels non, et par indiquer de façon ordonnée les ressources que vous voulez que la machine priorise. C'est un petit fichier, mais il fait partie de cette couche technique qui sépare ceux qui improvisent de ceux qui travaillent le GEO avec méthode."}
          </p>
        </section>

        <BlogBanner lang={lang} />

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-primary-600 mb-4">
            {isEn
              ? "4. Entity authority: making everything say the same thing about you"
              : "4. Autorité d'entité : faire en sorte que tout dise la même chose sur vous"}
          </h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {isEn
              ? "AI models build an idea of who you are from all the mentions they find. If your name, your activity and your data appear consistently across the web, in your local SEO profile and in every channel where you are present, that entity becomes solid and verifiable. If there are contradictions, the machine hesitates and prefers to cite someone more consistent."
              : "Les modèles d'IA construisent une idée de qui vous êtes à partir de toutes les mentions qu'ils trouvent. Si votre nom, votre activité et vos données apparaissent de manière cohérente sur le web, dans votre fiche de SEO local et dans chaque canal où vous êtes présent, cette entité devient solide et vérifiable. S'il y a des contradictions, la machine hésite et préfère citer quelqu'un de plus cohérent."}
          </p>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {isEn
              ? "Working on entity authority means aligning the message: same contact details, same description of what you do, same areas of expertise repeated consistently. The clearer it is for the AI what you are and what you are expert in, the easier it is for it to associate you with the questions where you want to appear."
              : "Travailler l'autorité d'entité signifie aligner le message : mêmes coordonnées, même description de ce que vous faites, mêmes domaines d'expertise répétés de façon cohérente. Plus c'est clair pour l'IA ce que vous êtes et sur quoi vous êtes expert, plus il lui est facile de vous associer aux questions où vous voulez apparaître."}
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-primary-600 mb-4">
            {isEn
              ? "5. Content that demonstrates real expertise"
              : "5. Contenu qui démontre une expertise réelle"}
          </h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {isEn
              ? "Semantic density beats length. A 1,200-word article that precisely answers a specific question has more chance of being cited than a generic 3,000-word one. What engines value is content that demonstrates real competence: concrete examples, nuances that only someone who knows the subject can provide and answers that do not merely repeat commonplaces."
              : "La densité sémantique prime sur la longueur. Un article de 1 200 mots qui répond avec précision à une question concrète a plus de chances d'être cité qu'un article générique de 3 000 mots. Ce que les moteurs valorisent, c'est un contenu qui démontre une vraie compétence : exemples concrets, nuances qu'apporte seulement celui qui connaît le sujet et réponses qui ne se limitent pas à répéter des lieux communs."}
          </p>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {isEn
              ? "Writing for AI does not mean writing artificially. It means being clear, specific and honest about what you know. Content that provides genuine value is also what the machine recognises as a reliable source."
              : "Écrire pour l'IA ne signifie pas écrire de façon artificielle. Cela signifie être clair, spécifique et honnête sur ce que vous savez. Le contenu qui apporte une valeur genuinement utile est aussi celui que la machine reconnaît comme source fiable."}
          </p>
        </section>

        <div className="bg-primary-600 text-white rounded-2xl p-8 mb-10 text-center">
          <h2 className="text-2xl font-bold mb-3">
            {isEn
              ? "Do you want AI to cite your website and not your competitor's?"
              : "Vous voulez que l'IA cite votre site web et non celui de votre concurrent ?"}
          </h2>
          <p className="text-primary-200 mb-6">
            {isEn
              ? "At Mkt Web 360 we implement GEO from start to finish: content structure, advanced schema, llms.txt and semantic authority built on a solid SEO foundation."
              : "Chez Mkt Web 360, nous implémentons le GEO de A à Z : structure de contenu, schema avancé, llms.txt et autorité sémantique sur une base SEO solide."}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href={`/${lang}/contact/`}
              className="bg-accent-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-accent-600 transition-colors"
            >
              {isEn ? "Talk to a specialist" : "Parler à un spécialiste"}
            </Link>
            <Link
              href={`/${lang}/geo-ai-positioning/`}
              className="border-2 border-white text-white px-6 py-3 rounded-full font-semibold hover:bg-white/10 transition-colors"
            >
              {isEn ? "See GEO service" : "Voir le service GEO"}
            </Link>
          </div>
        </div>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-primary-600 mb-4">
            {isEn
              ? "How to measure whether GEO is working"
              : "Comment mesurer si le GEO fonctionne"}
          </h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {isEn
              ? "Measuring GEO is different from classic SEO, because there is no single ranking to consult. The first level is manual: ask ChatGPT, Gemini and Perplexity about topics in your sector and observe whether your brand appears and in what terms. It is artisanal, but it gives a quick and free snapshot of your generative visibility."
              : "La mesure du GEO est différente du SEO classique, car il n'y a pas de classement unique à consulter. Le premier niveau est manuel : interrogez ChatGPT, Gemini et Perplexity sur des sujets de votre secteur et observez si votre marque apparaît et en quels termes. C'est artisanal, mais cela donne un aperçu rapide et gratuit de votre visibilité générative."}
          </p>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {isEn
              ? "For systematic monitoring there are tools such as Profound, Otterly.ai or AthenaHQ, which track your brand's presence in generative engines over time. With patience — the timescales are similar to SEO — you will see how consistent work on structure, schema and authority translates into accumulated mentions."
              : "Pour un suivi systématique, il existe des outils comme Profound, Otterly.ai ou AthenaHQ, qui surveillent la présence de votre marque dans les moteurs génératifs dans le temps. Avec de la patience — les délais sont similaires au SEO — vous verrez comment le travail constant sur la structure, le schema et l'autorité se traduit par des mentions accumulées."}
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-primary-600 mb-4">
            {isEn
              ? "Frequently asked questions about GEO optimisation"
              : "Questions fréquentes sur l'optimisation GEO"}
          </h2>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <details
                key={i}
                className="border border-gray-200 rounded-xl overflow-hidden group"
              >
                <summary className="px-6 py-4 cursor-pointer font-semibold text-primary-700 hover:bg-primary-50 list-none flex justify-between items-center">
                  {faq.q}
                  <span className="text-accent-500 group-open:rotate-180 transition-transform">
                    ▾
                  </span>
                </summary>
                <div className="px-6 py-4 text-gray-600 border-t border-gray-100">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </section>

        <nav className="mt-12 pt-8 border-t border-gray-200">
          <Link
            href={`/${lang}/blog/`}
            className="text-accent-500 hover:text-accent-600 font-medium text-sm"
          >
            {isEn ? "← Back to blog" : "← Retour au blog"}
          </Link>
        </nav>
      </div>
    </>
  );
}
