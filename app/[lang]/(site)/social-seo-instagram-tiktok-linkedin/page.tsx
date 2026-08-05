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
      ? "Social SEO: Instagram, TikTok and LinkedIn as Search Engines in 2026 | Mkt Web 360"
      : "SEO social : Instagram, TikTok et LinkedIn comme moteurs de recherche en 2026 | Mkt Web 360",
    description: isEn
      ? "40% of Gen Z searches on TikTok before Google. Social SEO optimises your presence on Instagram, TikTok and LinkedIn search engines. Platform-specific strategies for 2026."
      : "40% de la Gen Z cherche sur TikTok avant Google. Le SEO social optimise votre présence dans les moteurs de recherche d'Instagram, TikTok et LinkedIn. Stratégies par plateforme pour 2026.",
    alternates:
      alternatesFor(
        `/${lang}/${lang === "en" ? "social-seo-instagram-tiktok-linkedin" : "seo-social-instagram-tiktok-linkedin-moteurs-recherche"}/`
      ) ?? {
        canonical: `https://www.mktweb360.com/${lang}/${lang === "en" ? "social-seo-instagram-tiktok-linkedin" : "seo-social-instagram-tiktok-linkedin-moteurs-recherche"}/`,
      },
  };
}

const FAQS_EN = [
  {
    q: "Does social SEO replace Google SEO?",
    a: "No. They are complementary channels with different search intentions. On Google you search to buy, compare or learn in depth. On TikTok or Instagram you look for inspiration, quick tutorials and trusted recommendations. A complete strategy works both channels according to the funnel and audience.",
  },
  {
    q: "What keywords should I use for social SEO?",
    a: "The same as for Google, but adapted to each platform's conversational context. On TikTok more colloquial, specific terms work well ('how to remove oil stains from a sofa'). On LinkedIn more professional terms work ('B2B content strategy'). Use each platform's search bar to see what related terms it suggests.",
  },
  {
    q: "Does TikTok's algorithm really use audio words for indexing?",
    a: "Yes. TikTok automatically transcribes audio and uses that transcript to understand and index video content. Mentioning your topic's keywords in the video — not just in the caption — has a real impact on content distribution in searches.",
  },
  {
    q: "How long does social SEO take to show results?",
    a: "Much faster than web SEO. A well-optimised TikTok video can rank in relevant searches within hours or days. On Instagram it may take one or two weeks to consolidate. LinkedIn has a longer content lifespan — a good article can keep appearing in searches weeks after publication.",
  },
];

const FAQS_FR = [
  {
    q: "Le SEO social remplace-t-il le SEO Google ?",
    a: "Non. Ce sont des canaux complémentaires avec des intentions de recherche différentes. Sur Google on cherche pour acheter, comparer ou apprendre en profondeur. Sur TikTok ou Instagram on cherche de l'inspiration, des tutoriels rapides et des recommandations de confiance. Une stratégie complète travaille les deux canaux selon le tunnel et l'audience.",
  },
  {
    q: "Quels mots-clés utiliser pour le SEO social ?",
    a: "Les mêmes que pour Google, mais adaptés au contexte conversationnel de chaque plateforme. Sur TikTok, les termes plus familiers et spécifiques fonctionnent bien. Sur LinkedIn, les termes plus professionnels. Utilisez la barre de recherche de chaque plateforme pour voir quels termes connexes elle suggère.",
  },
  {
    q: "L'algorithme TikTok utilise-t-il vraiment les mots de l'audio pour indexer ?",
    a: "Oui. TikTok transcrit automatiquement l'audio et utilise cette transcription pour comprendre et indexer le contenu vidéo. Mentionner les mots-clés de votre sujet dans la vidéo — pas seulement dans la légende — a un impact réel sur la distribution du contenu dans les recherches.",
  },
  {
    q: "Combien de temps faut-il pour voir les résultats du SEO social ?",
    a: "Beaucoup plus vite que le SEO web. Une vidéo TikTok bien optimisée peut se positionner dans des recherches pertinentes en heures ou jours. Sur Instagram il faut une à deux semaines. LinkedIn a une durée de vie de contenu plus longue — un bon article peut continuer à apparaître dans les recherches des semaines après sa publication.",
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
            { label: isEn ? "Social SEO" : "SEO social" },
          ]}
        />

        <header className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="bg-primary-100 text-primary-700 text-xs font-medium px-2.5 py-0.5 rounded-full">
              {isEn ? "Social Media" : "Réseaux Sociaux"}
            </span>
            <time className="text-sm text-gray-400" dateTime="2026-08-04">
              {isEn ? "August 4, 2026" : "4 août 2026"}
            </time>
          </div>
          <h1 className="text-4xl font-bold text-primary-600 mb-4 leading-tight">
            {isEn
              ? "Social SEO: Instagram, TikTok and LinkedIn as search engines in 2026"
              : "SEO social : Instagram, TikTok et LinkedIn comme moteurs de recherche en 2026"}
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            {isEn
              ? "40% of Gen Z searches on TikTok before Google. Instagram, LinkedIn and TikTok are active search engines with millions of daily queries. Optimising for them — social SEO — is now an essential discipline for any content strategy."
              : "40% de la Génération Z cherche sur TikTok avant Google. Instagram, LinkedIn et TikTok sont des moteurs de recherche actifs avec des millions de requêtes quotidiennes. Les optimiser — le SEO social — est désormais une discipline incontournable pour toute stratégie de contenu."}
          </p>
          <Image
            src="/og-seo-social-instagram-tiktok-linkedin-como-buscadores.jpg"
            alt={isEn ? "Social SEO: Instagram, TikTok, LinkedIn as search engines" : "SEO social : Instagram, TikTok, LinkedIn comme moteurs de recherche"}
            width={1200}
            height={630}
            className="w-full rounded-2xl mt-6"
            priority
          />
        </header>

        <div className="text-gray-700 space-y-6 leading-relaxed">
          <p>
            {isEn
              ? "Social networks have moved beyond being just content distribution channels to become search engines with their own distinct behaviours. A user searching for 'Japanese restaurant in London' may do so on Google, but also on Instagram (to see real photos) or TikTok (to see experience videos). If you are only optimising for Google, you are absent from a growing part of the decision-making process."
              : "Les réseaux sociaux ont cessé d'être de simples canaux de distribution de contenu pour devenir des moteurs de recherche avec leurs propres comportements distincts. Un utilisateur qui cherche 'restaurant japonais à Paris' peut le faire sur Google, mais aussi sur Instagram (pour voir des vraies photos) ou sur TikTok (pour voir des vidéos d'expériences). Si vous n'optimisez que pour Google, vous êtes absent d'une partie croissante du processus de décision."}
          </p>

          <h2 className="text-2xl font-bold text-primary-600">
            {isEn ? "What social SEO is and why it matters" : "Qu'est-ce que le SEO social et pourquoi ça compte"}
          </h2>
          <p>
            {isEn
              ? "Social SEO is the optimisation of your social media presence to appear in each platform's internal search engine. Just as web SEO optimises for Google, social SEO optimises for the search algorithms of Instagram, TikTok and LinkedIn."
              : "Le SEO social est l'optimisation de votre présence sur les réseaux sociaux pour apparaître dans le moteur de recherche interne de chaque plateforme. Tout comme le SEO web optimise pour Google, le SEO social optimise pour les algorithmes de recherche d'Instagram, TikTok et LinkedIn."}
          </p>
          <p>
            {isEn
              ? "According to Google data (2023), 40% of users aged 18-24 prefer to search on TikTok or Instagram before Google. Adobe found that 42% of consumers have purchased something they discovered on TikTok. LinkedIn processes more than 1.4 billion searches per month. These are figures that no serious content strategy can ignore."
              : "Selon les données de Google (2023), 40% des utilisateurs de 18-24 ans préfèrent chercher sur TikTok ou Instagram avant Google. Adobe a constaté que 42% des consommateurs ont acheté quelque chose découvert sur TikTok. LinkedIn traite plus de 1,4 milliard de recherches par mois. Ce sont des chiffres qu'aucune stratégie de contenu sérieuse ne peut ignorer."}
          </p>

          <div className="bg-primary-50 rounded-xl p-6 border border-primary-100">
            <p className="font-semibold text-primary-700 mb-2">
              {isEn ? "Does your brand appear when people search on social media?" : "Votre marque apparaît-elle quand on la cherche sur les réseaux ?"}
            </p>
            <p className="text-gray-600 text-sm mb-4">
              {isEn
                ? "At Mkt Web 360 we design social media strategies that integrate social SEO — so your content is not just seen, but found when people search for you."
                : "Chez Mkt Web 360, nous concevons des stratégies réseaux sociaux qui intègrent le SEO social — pour que votre contenu ne soit pas seulement vu, mais trouvé quand on vous cherche."}
            </p>
            <Link
              href={`/${lang}/social-media-marketing/`}
              className="inline-block bg-accent-500 text-white px-6 py-2.5 rounded-full font-semibold text-sm hover:bg-accent-600 transition-colors"
            >
              {isEn ? "View social media service" : "Voir le service réseaux sociaux"}
            </Link>
          </div>

          <h2 className="text-2xl font-bold text-primary-600">
            {isEn ? "Social SEO on Instagram" : "SEO social sur Instagram"}
          </h2>
          <p>
            {isEn
              ? "Instagram indexes text in several places: the bio, content titles, image alt texts and — since 2022 — keywords in captions. To rank in Instagram's search engine, you need: a bio that includes relevant search terms (without sacrificing clarity), captions that use natural language with your topic's keywords, and strategic hashtags that act as search categories."
              : "Instagram indexe le texte dans plusieurs endroits : la biographie, les titres de contenu, les textes alternatifs des images et — depuis 2022 — les mots-clés dans les légendes. Pour vous positionner dans le moteur de recherche d'Instagram, vous avez besoin : d'une bio qui inclut des termes de recherche pertinents (sans sacrifier la clarté), de légendes qui utilisent un langage naturel avec les mots-clés de votre sujet, et de hashtags stratégiques."}
          </p>

          <h2 className="text-2xl font-bold text-primary-600">
            {isEn ? "Social SEO on TikTok" : "SEO social sur TikTok"}
          </h2>
          <p>
            {isEn
              ? "TikTok is the most interesting case because it indexes audio. Its automatic transcription system converts what you say in the video into searchable text. This means that mentioning your topic's keywords in the video — not just in the caption — has a direct impact on search visibility."
              : "TikTok est le cas le plus intéressant car il indexe l'audio. Son système de transcription automatique convertit ce que vous dites dans la vidéo en texte indexable. Cela signifie que mentionner les mots-clés de votre sujet dans la vidéo — pas seulement dans la légende — a un impact direct sur la visibilité dans les recherches."}
          </p>

          <BlogBanner variant="geo" />

          <h2 className="text-2xl font-bold text-primary-600">
            {isEn ? "Social SEO on LinkedIn" : "SEO social sur LinkedIn"}
          </h2>
          <p>
            {isEn
              ? "LinkedIn has the highest commercial intent search engine among the three platforms. Its users search for suppliers, experts, solutions and professional content. Areas to optimise: your profile headline (equivalent to an H1 in web SEO), the 'About' section (where you can naturally include search terms), native LinkedIn articles (indexed in both LinkedIn and Google searches) and posts that generate conversation."
              : "LinkedIn a le moteur de recherche à la plus haute intention commerciale parmi les trois plateformes. Ses utilisateurs cherchent des fournisseurs, des experts, des solutions et du contenu professionnel. Les zones à optimiser : le titre de votre profil (équivalent du H1 en SEO web), la section 'À propos' (où vous pouvez inclure naturellement des termes de recherche), les articles natifs LinkedIn (indexés dans LinkedIn et Google) et les posts qui génèrent de la conversation."}
          </p>

          <div className="bg-primary-600 text-white rounded-2xl p-8 my-2 text-center">
            <h2 className="text-2xl font-bold mb-3">
              {isEn ? "Presence on every search engine your customer uses" : "Présence sur tous les moteurs où votre client cherche"}
            </h2>
            <p className="text-primary-200 mb-6">
              {isEn
                ? "If you want to integrate social SEO into your social media strategy, we can design a search-oriented content plan by platform."
                : "Si vous souhaitez intégrer le SEO social dans votre stratégie réseaux sociaux, nous pouvons concevoir un plan de contenu orienté recherche par plateforme."}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href={`/${lang}/social-media-marketing/`}
                className="bg-accent-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-accent-600 transition-colors"
              >
                {isEn ? "View social media service" : "Voir le service réseaux sociaux"}
              </Link>
              <Link
                href={`/${lang}/content-marketing/`}
                className="border-2 border-white text-white px-6 py-3 rounded-full font-semibold hover:bg-white/10 transition-colors"
              >
                {isEn ? "Content strategy" : "Stratégie de contenu"}
              </Link>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-primary-600">
            {isEn ? "Frequently asked questions about social SEO" : "Questions fréquentes sur le SEO social"}
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
      <RelatedArticles currentSlug="seo-social-instagram-tiktok-linkedin-como-buscadores" />
    </>
  );
}
