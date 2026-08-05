import Image from "next/image";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { RelatedArticles } from "@/components/RelatedArticles";
import { BlogBanner } from "@/components/BlogBanner";
import { alternatesFor } from "@/lib/i18n/routes";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const isEn = lang === "en";
  return {
    title: isEn
      ? "How to Write Content That Doesn't Sound Like AI | Mkt Web 360"
      : "Comment écrire du contenu qui ne ressemble pas à l'IA | Mkt Web 360",
    description: isEn
      ? "AI-generated content without editing doesn't convert and can hurt your Google rankings. Practical techniques to create human, authentic and useful texts — even when using AI tools."
      : "Le contenu généré par IA sans édition ne convertit pas et peut nuire à votre classement Google. Techniques pratiques pour créer des textes humains, authentiques et utiles — même avec des outils IA.",
    alternates:
      alternatesFor(
        `/${lang}/${lang === "en" ? "how-to-write-content-that-doesnt-sound-like-ai" : "comment-ecrire-contenu-qui-ne-sonne-pas-ia"}/`
      ) ?? {
        canonical: `https://www.mktweb360.com/${lang}/${lang === "en" ? "how-to-write-content-that-doesnt-sound-like-ai" : "comment-ecrire-contenu-qui-ne-sonne-pas-ia"}/`,
      },
  };
}

const FAQS_EN = [
  {
    q: "Can Google detect if a text was written by AI?",
    a: "Google has stated it does not penalise AI-generated content simply for being AI-generated, but for being low quality or lacking real value. However, AI detectors exist and generic, predictable content does correlate with lower search performance. The key is quality, not origin.",
  },
  {
    q: "Is it bad to use AI to write marketing texts?",
    a: "Not at all — it is a tool. The problem arises when it is used without human editing, without your own perspective and without adapting the output to your brand's real voice. AI can dramatically accelerate writing, but editorial judgement, opinion and authenticity remain human.",
  },
  {
    q: "What signals indicate a text sounds like AI?",
    a: "Phrases like 'in today's world', 'it is essential to keep in mind', 'in conclusion we can say', bullet lists without real hierarchy, absence of concrete examples, uniformly neutral tone, and structures that always seem to follow the same pattern. AI text tends to be correct but generic.",
  },
  {
    q: "What tools do you recommend for humanising AI content?",
    a: "The human process is the best tool: reading aloud to detect what sounds artificial, adding your own examples or data, using your brand's voice, and cutting everything that is unnecessary. Tools like Hemingway Editor help with readability, but nothing replaces editorial judgement.",
  },
];

const FAQS_FR = [
  {
    q: "Google peut-il détecter si un texte a été écrit par une IA ?",
    a: "Google a déclaré qu'il ne pénalise pas le contenu généré par IA simplement parce qu'il l'est, mais parce qu'il est de mauvaise qualité ou manque de valeur réelle. Cependant, les détecteurs IA existent et le contenu générique et prévisible corrèle effectivement avec de moins bonnes performances en recherche. La clé, c'est la qualité, pas l'origine.",
  },
  {
    q: "Est-il mauvais d'utiliser l'IA pour écrire des textes marketing ?",
    a: "Non — c'est un outil. Le problème survient quand on l'utilise sans édition humaine, sans perspective propre et sans adapter l'output à la vraie voix de la marque. L'IA peut accélérer considérablement l'écriture, mais le jugement éditorial, l'opinion et l'authenticité restent humains.",
  },
  {
    q: "Quels signaux indiquent qu'un texte ressemble à l'IA ?",
    a: "Des phrases comme 'dans le monde d'aujourd'hui', 'il est essentiel de tenir compte', 'en conclusion nous pouvons dire', des listes sans hiérarchie réelle, l'absence d'exemples concrets, un ton uniformément neutre, et des structures qui semblent toujours suivre le même schéma. Le texte IA tend à être correct mais générique.",
  },
  {
    q: "Quels outils recommandez-vous pour humaniser le contenu IA ?",
    a: "Le processus humain est le meilleur outil : lire à voix haute pour détecter ce qui sonne artificiel, ajouter des exemples ou données propres, utiliser le style de voix de votre marque, et supprimer tout ce qui est superflu. Des outils comme Hemingway Editor aident pour la lisibilité, mais rien ne remplace le jugement éditorial.",
  },
];

export default async function Page({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const isEn = lang === "en";
  const FAQS = isEn ? FAQS_EN : FAQS_FR;

  return (
    <>
      <article className="max-w-3xl mx-auto px-4 py-12">
        <Breadcrumbs
          crumbs={[
            { label: isEn ? "Home" : "Accueil", href: `/${lang}/` },
            { label: "Blog", href: `/${lang}/blog/` },
            { label: isEn ? "Content that doesn't sound like AI" : "Contenu qui ne ressemble pas à l'IA" },
          ]}
        />

        <header className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="bg-primary-100 text-primary-700 text-xs font-medium px-2.5 py-0.5 rounded-full">
              {isEn ? "Content Marketing" : "Marketing de Contenu"}
            </span>
            <time className="text-sm text-gray-400" dateTime="2026-08-04">
              {isEn ? "August 4, 2026" : "4 août 2026"}
            </time>
          </div>
          <h1 className="text-4xl font-bold text-primary-600 mb-4 leading-tight">
            {isEn
              ? "How to write content that doesn't sound like AI: techniques to humanise your copy"
              : "Comment écrire du contenu qui ne ressemble pas à l'IA : techniques pour humaniser vos textes"}
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            {isEn
              ? "Using AI to write is not the problem. Publishing the output unedited is. Content that 'sounds like AI' is recognisable from miles away — and neither Google nor your customers respond to it the same way as a text with genuine judgement, voice and perspective."
              : "Utiliser l'IA pour écrire n'est pas le problème. Publier l'output sans l'éditer l'est. Le contenu qui 'ressemble à l'IA' se reconnaît à des kilomètres — et ni Google ni vos clients ne le reçoivent de la même façon qu'un texte avec un vrai jugement, une voix et une perspective réelle."}
          </p>
          <Image
            src="/og-como-escribir-contenido-que-no-suene-a-ia.jpg"
            alt={isEn ? "How to write content that doesn't sound like AI" : "Comment écrire du contenu qui ne ressemble pas à l'IA"}
            width={1200}
            height={630}
            className="w-full rounded-2xl mt-6"
            priority
          />
        </header>

        <div className="text-gray-700 space-y-6 leading-relaxed">
          <p>
            {isEn
              ? "AI-generated content without editing has recognisable patterns: grandiose opening sentences, predictable structures, absence of real opinion and a uniformly neutral tone that never commits to anything. It is correct. It is boring. And it does not convert."
              : "Le contenu généré par IA sans édition a des schémas reconnaissables : des phrases d'ouverture grandiloquentes, des structures prévisibles, l'absence d'opinion réelle et un ton uniformément neutre qui ne s'engage jamais sur rien. C'est correct. C'est ennuyeux. Et ça ne convertit pas."}
          </p>

          <h2 className="text-2xl font-bold text-primary-600">
            {isEn ? "Why unedited AI content does not work" : "Pourquoi le contenu IA non édité ne fonctionne pas"}
          </h2>
          <p>
            {isEn
              ? "AI-sounding content has two fundamental problems. The first is perception: readers — especially B2B decision-makers — detect the lack of real perspective and associate it with a lack of expertise. If an agency publishes generic articles that could be from any agency in the world, it communicates exactly that: it has nothing original to say."
              : "Le contenu qui ressemble à l'IA a deux problèmes fondamentaux. Le premier est de perception : les lecteurs — surtout les décideurs B2B — détectent le manque de perspective réelle et l'associent à un manque d'expertise. Si une agence publie des articles génériques qui pourraient venir de n'importe quelle agence du monde, elle communique exactement ça : elle n'a rien d'original à dire."}
          </p>
          <p>
            {isEn
              ? "The second problem is SEO performance. Google does not penalise AI per se, but it does penalise low quality. Content that adds nothing new, has no original data, takes no position and does not address specific search intent is exactly the type of content that algorithm updates progressively filter out."
              : "Le deuxième problème est de performance SEO. Google ne pénalise pas l'IA en soi, mais il pénalise la faible qualité. Le contenu qui n'ajoute rien de nouveau, n'a pas de données propres, ne prend pas position et ne répond pas à des intentions de recherche spécifiques est exactement le type de contenu que les mises à jour d'algorithme filtrent progressivement."}
          </p>

          <div className="bg-primary-50 rounded-xl p-6 border border-primary-100">
            <p className="font-semibold text-primary-700 mb-2">
              {isEn ? "Does your content have brand voice or sound generic?" : "Votre contenu a-t-il une voix de marque ou sonne-t-il générique ?"}
            </p>
            <p className="text-gray-600 text-sm mb-4">
              {isEn
                ? "At Mkt Web 360 we create editorial content that combines SEO rigour with a real business perspective. Nothing generic, nothing filler."
                : "Chez Mkt Web 360, nous créons du contenu éditorial qui combine rigueur SEO et perspective réelle d'entreprise. Rien de générique, rien de remplissage."}
            </p>
            <Link
              href={`/${lang}/content-marketing/`}
              className="inline-block bg-accent-500 text-white px-6 py-2.5 rounded-full font-semibold text-sm hover:bg-accent-600 transition-colors"
            >
              {isEn ? "View content marketing service" : "Voir le service marketing de contenu"}
            </Link>
          </div>

          <h2 className="text-2xl font-bold text-primary-600">
            {isEn ? "The patterns that give AI content away" : "Les schémas qui trahissent le contenu IA"}
          </h2>
          <p>
            {isEn
              ? "Identifying unedited AI content is easy once you know what to look for. Opening phrases like 'in today's world' or 'in the digital age we live in'. Closings like 'in conclusion, we can affirm that'. Transitions like 'it is important to highlight' or 'it is worth mentioning'. Lists of five points where all carry equal weight and none offer genuine perspective."
              : "Identifier le contenu IA non édité est facile une fois qu'on sait quoi chercher. Des phrases d'ouverture comme 'dans le monde d'aujourd'hui' ou 'à l'ère numérique dans laquelle nous vivons'. Des clôtures comme 'en conclusion, nous pouvons affirmer que'. Des listes de cinq points où tous ont le même poids et aucun n'offre une perspective réelle."}
          </p>

          <h2 className="text-2xl font-bold text-primary-600">
            {isEn ? "Concrete techniques for humanising the output" : "Techniques concrètes pour humaniser l'output"}
          </h2>
          <p>
            {isEn
              ? "The first technique is the simplest: add an opinion. Not a 'this depends on the case' — a real position. 'We believe most SMEs should not be on TikTok' is more useful and more memorable than 'TikTok can be a good option depending on your audience and sector'. Opinion differentiates, builds authority and is memorable."
              : "La première technique est la plus simple : ajoutez une opinion. Pas un 'ça dépend du cas' — une vraie position. 'Nous pensons que la plupart des PME ne devraient pas être sur TikTok' est plus utile et plus mémorable que 'TikTok peut être une bonne option selon votre audience et votre secteur'. L'opinion différencie, construit l'autorité et est mémorable."}
          </p>
          <p>
            {isEn
              ? "The second technique is using your own data or real data with context. 'In our experience with local service clients in Spain, the average time to the first significant organic result is 4-6 months' is infinitely more valuable than 'SEO takes between 3 and 12 months to show results' — which is what any AI will generate."
              : "La deuxième technique consiste à utiliser des données propres ou des données réelles avec contexte. 'D'après notre expérience avec des clients de services locaux en Espagne, le délai moyen jusqu'au premier résultat organique significatif est de 4-6 mois' est infiniment plus précieux que 'le SEO prend entre 3 et 12 mois pour donner des résultats' — ce que toute IA génère."}
          </p>
          <p>
            {isEn
              ? "The third technique is introducing non-standard structure. Instead of the classic 'introduction - 5 points - conclusion', start with a specific problem, develop the contrast between what people believe and what actually happens, and end with an actionable recommendation."
              : "La troisième technique consiste à introduire une structure non standard. Au lieu du classique 'introduction - 5 points - conclusion', commencez par un problème concret, développez le contraste entre ce que les gens croient et ce qui se passe réellement, et terminez par une recommandation actionnable."}
          </p>

          <BlogBanner variant="geo" />

          <h2 className="text-2xl font-bold text-primary-600">
            {isEn ? "The role of the human editor in the AI process" : "Le rôle de l'éditeur humain dans le processus IA"}
          </h2>
          <p>
            {isEn
              ? "The right way to use AI in content creation is as a first-draft generator, not an autonomous publisher. The human editor adds: the business-specific perspective, your own or verified data, brand voice, real examples and judgement about what is relevant to your specific audience."
              : "La bonne façon d'utiliser l'IA dans la création de contenu est comme générateur de premier brouillon, pas comme éditeur autonome. L'éditeur humain ajoute : la perspective spécifique à l'entreprise, les données propres ou vérifiées, la voix de marque, les exemples réels et le jugement sur ce qui est pertinent pour votre audience spécifique."}
          </p>

          <div className="bg-primary-600 text-white rounded-2xl p-8 my-2 text-center">
            <h2 className="text-2xl font-bold mb-3">
              {isEn ? "Content that converts, not content that fills space" : "Du contenu qui convertit, pas qui remplit l'espace"}
            </h2>
            <p className="text-primary-200 mb-6">
              {isEn
                ? "If you want a content strategy that combines SEO, real business perspective and authentic brand voice, we can design it together."
                : "Si vous souhaitez une stratégie de contenu qui combine SEO, perspective réelle d'entreprise et voix de marque authentique, nous pouvons la concevoir ensemble."}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href={`/${lang}/content-marketing/`}
                className="bg-accent-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-accent-600 transition-colors"
              >
                {isEn ? "View content marketing service" : "Voir le service marketing de contenu"}
              </Link>
              <Link
                href={`/${lang}/digital-audit/`}
                className="border-2 border-white text-white px-6 py-3 rounded-full font-semibold hover:bg-white/10 transition-colors"
              >
                {isEn ? "Request free diagnosis" : "Demander un diagnostic gratuit"}
              </Link>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-primary-600">
            {isEn ? "Frequently asked questions about AI content" : "Questions fréquentes sur le contenu IA"}
          </h2>
          <div className="space-y-3">
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
        </div>

        <nav className="mt-12 pt-8 border-t border-gray-200">
          <Link href={`/${lang}/blog/`} className="text-accent-500 hover:text-accent-600 font-medium text-sm">
            {isEn ? "← Back to blog" : "← Retour au blog"}
          </Link>
        </nav>
      </article>
      <RelatedArticles currentSlug="como-escribir-contenido-que-no-suene-a-ia" />
    </>
  );
}
