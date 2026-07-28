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
      ? "Migrating to Shopware from PrestaShop or WooCommerce Without Losing SEO"
      : "Migrer vers Shopware depuis PrestaShop ou WooCommerce sans perdre le SEO",
    description: isEn
      ? "How to migrate your store to Shopware without losing rankings: URL audit, 301 redirect map, launch protocol and post-migration monitoring."
      : "Comment migrer votre boutique vers Shopware sans perdre le positionnement : audit des URLs, carte de redirections 301, protocole de lancement et suivi post-migration.",
    alternates: alternatesFor(`/${lang}/migrate-to-shopware-seo/`) ?? {
      canonical: `https://www.mktweb360.com/${lang}/migrate-to-shopware-seo/`,
    },
    openGraph: {
      title: isEn
        ? "Migrating to Shopware from PrestaShop or WooCommerce Without Losing SEO | Mkt Web 360"
        : "Migrer vers Shopware depuis PrestaShop ou WooCommerce sans perdre le SEO | Mkt Web 360",
      description: isEn
        ? "Migrate to Shopware without losing SEO: URL audit, 301 redirect map and step-by-step launch protocol."
        : "Migrez vers Shopware sans perdre le SEO : audit des URLs, carte de redirections 301 et protocole de lancement étape par étape.",
    },
  };
}

const FAQS_EN = [
  {
    q: "Will I lose traffic when migrating to Shopware?",
    a: "Not if it is done correctly. Stores that migrate with a proper 301 redirect map retain more than 90% of their organic traffic from the very first week. Losses come from improvised migrations, not from the platform itself.",
  },
  {
    q: "What is the redirect map and why is it so important?",
    a: "It is the document that pairs each valuable URL from the old store with its equivalent in Shopware using 301 redirects. It is the most critical deliverable of the entire migration: without it, all accumulated rankings are lost.",
  },
  {
    q: "How do I know which URLs I cannot afford to lose?",
    a: "By cross-referencing Google Search Console data (traffic, rankings) with a Screaming Frog crawl (all existing URLs). This identifies the pages with traffic, backlinks and rankings that absolutely must be redirected.",
  },
  {
    q: "How long does a Shopware migration take?",
    a: "The preparation takes time, but the switch itself is ideally executed in a single day: staging validation, verification, DNS change and sitemap submission to Search Console all on the same day.",
  },
  {
    q: "What do I do after migrating?",
    a: "Monitor. In the following weeks you track coverage in Search Console, watch positions for key keywords, and fix any redirects that were missed. Proper monitoring is what consolidates the recovery.",
  },
];

const FAQS_FR = [
  {
    q: "Vais-je perdre du trafic en migrant vers Shopware ?",
    a: "Pas si c'est bien fait. Les boutiques qui migrent avec une carte de redirections 301 correcte conservent plus de 90 % de leur trafic organique dès la première semaine. Les pertes viennent des migrations improvisées, pas de la plateforme elle-même.",
  },
  {
    q: "Qu'est-ce que la carte de redirections et pourquoi est-elle si importante ?",
    a: "C'est le document qui associe chaque URL de valeur de l'ancienne boutique à son équivalent sur Shopware via des redirections 301. C'est le livrable le plus critique de toute la migration : sans lui, tout le positionnement accumulé est perdu.",
  },
  {
    q: "Comment savoir quelles URLs je ne peux pas me permettre de perdre ?",
    a: "En croisant les données Google Search Console (trafic, positions) avec un crawl Screaming Frog (toutes les URLs existantes). Cela permet d'identifier les pages avec du trafic, des backlinks et des classements qui doivent absolument être redirigées.",
  },
  {
    q: "Combien de temps dure une migration vers Shopware ?",
    a: "La préparation prend du temps, mais le basculement lui-même est idéalement exécuté en une seule journée : validation en staging, vérification, changement de DNS et envoi du sitemap à Search Console le même jour.",
  },
  {
    q: "Que faire après la migration ?",
    a: "Surveiller. Durant les semaines suivantes, on surveille la couverture dans Search Console, les positions des mots-clés critiques et on corrige les redirections qui auraient été manquées. Le suivi est ce qui consolide la reprise.",
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
            { label: isEn ? "Migrate to Shopware without losing SEO" : "Migrer vers Shopware sans perdre le SEO" },
          ]}
        />

        <p className="text-sm text-accent-500 font-semibold mb-2">Shopware · {isEn ? "Migration" : "Migration"}</p>

        <h1 className="text-4xl font-bold text-primary-600 mb-4 leading-tight">
          {isEn
            ? "Migrating to Shopware from PrestaShop or WooCommerce Without Losing SEO"
            : "Migrer vers Shopware depuis PrestaShop ou WooCommerce sans perdre le SEO"}
        </h1>

        <p className="text-xl text-gray-500 mb-8 leading-relaxed">
          {isEn
            ? "A well-planned migration retains more than 90% of traffic from the first week. Here is the process that separates a successful migration from a disaster."
            : "Une migration bien planifiée conserve plus de 90 % du trafic dès la première semaine. Voici le processus qui sépare une migration réussie d'un désastre."}
        </p>

        <h2 className="text-2xl font-bold text-primary-600 mt-8 mb-3">
          {isEn ? "Before migrating: auditing valuable URLs" : "Avant de migrer : auditer les URLs de valeur"}
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          {isEn
            ? "The first step is not technical — it is inventory. You need to identify which URLs have SEO value: those receiving organic traffic, those with backlinks, and those ranking for relevant keywords. Cross-reference Google Search Console data (real traffic and rankings) with a full Screaming Frog crawl (all existing URLs). The result is the list of pages that cannot be lost under any circumstances."
            : "La première étape n'est pas technique, c'est un inventaire. Il faut identifier quelles URLs ont de la valeur SEO : celles qui reçoivent du trafic organique, celles qui ont des backlinks et celles qui se positionnent sur des mots-clés pertinents. On croise les données Google Search Console (trafic et positions réels) avec un crawl complet Screaming Frog (toutes les URLs existantes). Le résultat est la liste des pages qui ne peuvent être perdues sous aucun prétexte."}
        </p>

        <h2 className="text-2xl font-bold text-primary-600 mt-8 mb-3">
          {isEn ? "The 301 redirect map: the critical document" : "La carte de redirections 301 : le document critique"}
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          {isEn
            ? "Every valuable URL from the old store must redirect with a 301 to its equivalent in the new one. That redirect map — a document that pairs old URL with new URL, one by one — is the most important deliverable of the entire migration. The data is clear: stores that migrate with a correct redirect map retain more than 90% of their organic traffic from the first week. Those that improvise do not."
            : "Chaque URL de valeur de l'ancienne boutique doit rediriger avec un 301 vers son équivalent dans la nouvelle. Cette carte de redirections — un document qui associe URL ancienne à URL nouvelle, une par une — est le livrable le plus important de toute la migration. Les données sont claires : les boutiques qui migrent avec une carte de redirections correcte conservent plus de 90 % de leur trafic organique dès la première semaine. Celles qui improvisent, non."}
        </p>

        <h2 className="text-2xl font-bold text-primary-600 mt-8 mb-3">
          {isEn ? "URL structure: PrestaShop vs WooCommerce vs Shopware" : "Structure d'URL : PrestaShop vs WooCommerce vs Shopware"}
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          {isEn
            ? "Each platform builds URLs differently and this shapes the redirect map. PrestaShop tends to use numerical IDs in the path; WooCommerce works with slugs based on the product or category name; Shopware allows configurable URL templates, which are more flexible. Understanding the differences avoids broken redirects and allows you to design a clean URL structure in Shopware that also improves on the original."
            : "Chaque plateforme construit les URLs différemment et cela conditionne la carte de redirections. PrestaShop tend à utiliser des IDs numériques dans le chemin ; WooCommerce travaille avec des slugs basés sur le nom du produit ou de la catégorie ; Shopware permet des modèles d'URL configurables, plus flexibles. Connaître ces différences évite les redirections cassées et permet de concevoir dans Shopware une structure propre qui améliore également celle d'origine."}
        </p>

        <div className="bg-primary-50 rounded-xl p-6 border border-primary-100 my-6">
          <p className="font-semibold text-primary-700 mb-2">
            {isEn
              ? "Planning to migrate your store to Shopware?"
              : "Vous envisagez de migrer votre boutique vers Shopware ?"}
          </p>
          <p className="text-gray-600 text-sm mb-4">
            {isEn
              ? "We plan the complete SEO migration — audit, redirect map and launch — so you do not lose the traffic you have worked so hard to build."
              : "Nous planifions la migration SEO complète — audit, carte de redirections et lancement — pour que vous ne perdiez pas le trafic que vous avez mis tant de temps à construire."}
          </p>
          <Link
            href={`/${lang}/contact`}
            className="inline-block bg-accent-500 text-white px-6 py-2.5 rounded-full font-semibold text-sm hover:bg-accent-600 transition-colors"
          >
            {isEn ? "Contact us" : "Nous contacter"}
          </Link>
        </div>

        <h2 className="text-2xl font-bold text-primary-600 mt-8 mb-3">
          {isEn ? "Launch day: the protocol" : "Le jour du lancement : le protocole"}
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          {isEn
            ? "The migration is executed in a strict order and, ideally, in a single day. First, everything is prepared and validated in a staging environment: redirects, content, schema and performance. You verify that every redirect works and that there are no broken links. Only then is the DNS switched to point to the new site. And on the same day, the new sitemap is submitted to Google Search Console to speed up crawling of the new structure. Improvising the order is the number one cause of traffic drops."
            : "La migration s'exécute dans un ordre strict et, idéalement, en une seule journée. D'abord, tout est préparé et validé dans un environnement de staging : redirections, contenu, schéma et performance. On vérifie que chaque redirection fonctionne et qu'il n'y a pas de liens cassés. Seulement alors le DNS est changé pour pointer vers le nouveau site. Et le même jour, le nouveau sitemap est soumis à Google Search Console pour accélérer l'exploration de la nouvelle structure. Improviser l'ordre est la première cause de chute de trafic."}
        </p>

        <h2 className="text-2xl font-bold text-primary-600 mt-8 mb-3">
          {isEn ? "Post-migration monitoring" : "Suivi post-migration"}
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          {isEn
            ? "The work does not end at launch. In the following weeks you monitor Search Console coverage (404 errors, detected redirects, indexation), watch the positions of critical keywords and fix any redirect that was missed. A migration that is properly followed up recovers and surpasses previous traffic; one that is abandoned leaves money on the table."
            : "Le travail ne s'arrête pas au lancement. Durant les semaines suivantes, on surveille la couverture dans Search Console (erreurs 404, redirections détectées, indexation), on veille sur les positions des mots-clés critiques et on corrige les redirections qui auraient été manquées. Une migration bien suivie retrouve et dépasse le trafic d'avant ; une migration abandonnée laisse de l'argent sur la table."}
        </p>

        <div className="bg-primary-600 text-white rounded-2xl p-8 my-8 text-center">
          <h2 className="text-2xl font-bold mb-3">
            {isEn ? "Migrate to Shopware without losing your SEO" : "Migrez vers Shopware sans perdre votre SEO"}
          </h2>
          <p className="text-primary-200 mb-6">
            {isEn
              ? "We support you through the entire migration: audit, redirect map, launch protocol and monitoring to preserve your traffic and improve it."
              : "Nous vous accompagnons tout au long de la migration : audit, carte de redirections, protocole de lancement et suivi pour conserver votre trafic et l'améliorer."}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href={`/${lang}/contact`}
              className="bg-accent-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-accent-600 transition-colors"
            >
              {isEn ? "Get in touch" : "Nous contacter"}
            </Link>
            <Link
              href={`/${lang}/${isEn ? "seo-web-positioning" : "positionnement-seo"}`}
              className="border-2 border-white text-white px-6 py-3 rounded-full font-semibold hover:bg-white/10 transition-colors"
            >
              {isEn ? "SEO service" : "Service SEO"}
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

        <BlogBanner lang={lang} />

        <nav className="mt-12 pt-8 border-t border-gray-200">
          <Link href={`/${lang}/blog/`} className="text-accent-500 hover:text-accent-600 font-medium text-sm">
            {isEn ? "← Back to blog" : "← Retour au blog"}
          </Link>
        </nav>
      </div>
      <RelatedArticles currentSlug="migrate-to-shopware-seo" />
    </>
  );
}
