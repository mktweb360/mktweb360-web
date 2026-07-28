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
      ? "Shopware SEO: How to Rank Your Store on Google"
      : "SEO Shopware : comment positionner votre boutique sur Google",
    description: isEn
      ? "Technical SEO guide for Shopware 6: URLs, faceted navigation, product schema, Core Web Vitals and optimised product pages to rank your store on Google."
      : "Guide de SEO technique pour Shopware 6 : URLs, navigation à facettes, schéma produit, Core Web Vitals et fiches optimisées pour positionner votre boutique sur Google.",
    alternates: alternatesFor(`/${lang}/shopware-seo-google/`) ?? {
      canonical: `https://www.mktweb360.com/${lang}/shopware-seo-google/`,
    },
    openGraph: {
      title: isEn
        ? "Shopware SEO: How to Rank Your Store on Google | Mkt Web 360"
        : "SEO Shopware : comment positionner votre boutique sur Google | Mkt Web 360",
      description: isEn
        ? "Technical SEO for Shopware 6: facets, canonical, schema and Core Web Vitals to rank your store on Google."
        : "SEO technique pour Shopware 6 : facettes, canonical, schéma et Core Web Vitals pour positionner votre boutique sur Google.",
    },
  };
}

const FAQS_EN = [
  {
    q: "Is Shopware good for SEO?",
    a: "Yes. Shopware 6 offers advanced technical control — configurable URLs, automatic canonical for variants and structured data — which, properly set up, ranks very well. The key is configuration, not the platform itself.",
  },
  {
    q: "What is faceted navigation and why does it matter?",
    a: "It is the catalogue filter system. If each filter generates a crawlable URL, thousands of near-duplicate pages are created that consume Google's crawl budget. Controlling which facets are indexed is one of the most important SEO tasks in Shopware.",
  },
  {
    q: "Do I need structured data on my products?",
    a: "Yes. The Product schema with Offer and, where there are reviews, AggregateRating activates rich results (price, stock and stars in Google), which improves CTR at no extra cost per click.",
  },
  {
    q: "How much content does a product page need?",
    a: "A minimum of around 150 words of unique content per page. Supplier descriptions duplicated across many pages do not rank; Google rewards original content that answers the buyer's real questions.",
  },
  {
    q: "Do you need SEO plugins in Shopware?",
    a: "It depends on the size. Above around 500 products, an SEO plugin automates tasks at scale and is worth it. For smaller catalogues, native Shopware configuration done properly is usually sufficient.",
  },
];

const FAQS_FR = [
  {
    q: "Shopware est-il bon pour le SEO ?",
    a: "Oui. Shopware 6 offre un contrôle technique avancé — URLs configurables, canonical automatique pour les variantes et données structurées — qui, bien exploité, se positionne très bien. La clé est dans la configuration, pas dans la plateforme elle-même.",
  },
  {
    q: "Qu'est-ce que la navigation à facettes et pourquoi est-ce important ?",
    a: "C'est le système de filtres du catalogue. Si chaque filtre génère une URL crawlable, des milliers de pages quasi-dupliquées sont créées qui consomment le budget de crawl de Google. Contrôler quelles facettes sont indexées est l'un des travaux SEO les plus importants dans Shopware.",
  },
  {
    q: "Ai-je besoin de données structurées sur mes produits ?",
    a: "Oui. Le schéma Product avec Offer et, si des avis existent, AggregateRating active les résultats enrichis (prix, stock et étoiles dans Google), ce qui améliore le CTR sans coût supplémentaire par clic.",
  },
  {
    q: "Combien de contenu une fiche produit doit-elle avoir ?",
    a: "Un minimum d'environ 150 mots de contenu unique par fiche. Les descriptions dupliquées des fournisseurs ne se positionnent pas ; Google récompense le contenu original qui répond aux vraies questions de l'acheteur.",
  },
  {
    q: "Faut-il des plugins SEO dans Shopware ?",
    a: "Cela dépend de la taille. Au-delà d'environ 500 produits, un plugin SEO automatise les tâches à l'échelle et en vaut la peine. Pour les catalogues plus petits, la configuration native de Shopware bien faite est généralement suffisante.",
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
            { label: isEn ? "Shopware SEO" : "SEO Shopware" },
          ]}
        />

        <p className="text-sm text-accent-500 font-semibold mb-2">Shopware · SEO</p>

        <h1 className="text-4xl font-bold text-primary-600 mb-4 leading-tight">
          {isEn
            ? "Shopware SEO: How to Rank Your Store on Google"
            : "SEO Shopware : comment positionner votre boutique sur Google"}
        </h1>

        <p className="text-xl text-gray-500 mb-8 leading-relaxed">
          {isEn
            ? "Shopware has an excellent technical foundation for SEO, but it only sells if configured correctly. Here are the points that truly move rankings for a Shopware store."
            : "Shopware dispose d'une excellente base technique pour le SEO, mais elle ne vend que si elle est bien configurée. Voici les points qui font vraiment bouger les positions pour une boutique Shopware."}
        </p>

        <h2 className="text-2xl font-bold text-primary-600 mt-8 mb-3">
          {isEn ? "Why Shopware SEO is different" : "Pourquoi le SEO de Shopware est différent"}
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          {isEn
            ? "Unlike a generic CMS, Shopware is built for catalogues: variants, properties, filters and thousands of URL combinations. That flexibility is an advantage for selling and a risk for SEO if it is not controlled. The technical work involves telling Google which pages are valuable and which are not, so it concentrates its crawl where there is business."
            : "Contrairement à un CMS générique, Shopware est conçu pour les catalogues : variantes, propriétés, filtres et des milliers de combinaisons d'URLs. Cette flexibilité est un avantage pour vendre et un risque pour le SEO si elle n'est pas maîtrisée. Le travail technique consiste à dire à Google quelles pages ont de la valeur et lesquelles n'en ont pas, pour qu'il concentre son exploration là où il y a du business."}
        </p>

        <h2 className="text-2xl font-bold text-primary-600 mt-8 mb-3">
          {isEn ? "URLs and canonical: the control Shopware 6 gives you" : "URLs et canonical : le contrôle qu'offre Shopware 6"}
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          {isEn
            ? "Shopware lets you configure clean, descriptive URL templates for products and categories, and generates automatic canonical tags for variants of the same product. This prevents sizes, colours or formats from competing with each other in Google. Properly configured, each product consolidates its authority in a single canonical URL rather than dispersing it across dozens of variants."
            : "Shopware permet de configurer des modèles d'URL propres et descriptifs pour les produits et les catégories, et génère automatiquement des balises canonical pour les variantes d'un même produit. Cela évite que les tailles, couleurs ou présentations se fassent concurrence dans Google. Bien configuré, chaque produit consolide son autorité dans une seule URL canonique plutôt que de la disperser entre des dizaines de variantes."}
        </p>

        <h2 className="text-2xl font-bold text-primary-600 mt-8 mb-3">
          {isEn ? "Faceted navigation: the error that ruins your crawl budget" : "Navigation à facettes : l'erreur qui ruine votre budget de crawl"}
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          {isEn
            ? "It is the most common problem and the most costly. Every filter (brand, price, colour, size) that generates a crawlable URL multiplies combinations: a category with five filters can produce thousands of near-identical URLs that dilute authority and consume Google's crawl budget allocated to your store. The solution is to decide which facets are indexed (those with real search demand), block the rest with noindex or crawl rules, and keep the canonical pointing to the parent category."
            : "C'est le problème le plus fréquent et le plus coûteux. Chaque filtre (marque, prix, couleur, taille) qui génère une URL crawlable multiplie les combinaisons : une catégorie avec cinq filtres peut produire des milliers d'URLs quasi-identiques qui diluent l'autorité et consomment le budget de crawl que Google consacre à votre boutique. La solution passe par décider quelles facettes sont indexées (celles qui ont une vraie demande de recherche), bloquer le reste avec noindex ou des règles de crawl, et maintenir le canonical pointant vers la catégorie parente."}
        </p>

        <h2 className="text-2xl font-bold text-primary-600 mt-8 mb-3">
          {isEn ? "Product schema: Product, Offer and AggregateRating" : "Schéma produit : Product, Offer et AggregateRating"}
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          {isEn
            ? "Structured data activates rich results: price, availability and stars directly in Google search. For a Shopware store, the minimum markup is Product with its Offer (price, currency and availability) and, when there are genuine reviews, AggregateRating. This markup improves CTR without affecting rankings, because your result takes up more space and conveys more trust."
            : "Les données structurées activent les résultats enrichis : prix, disponibilité et étoiles directement dans la recherche Google. Pour une boutique Shopware, le balisage minimum est Product avec son Offer (prix, devise et disponibilité) et, quand il y a des avis réels, AggregateRating. Ce balisage améliore le CTR sans toucher au positionnement, car votre résultat occupe plus d'espace et transmet plus de confiance."}
        </p>

        <h2 className="text-2xl font-bold text-primary-600 mt-8 mb-3">
          {isEn ? "Core Web Vitals in Shopware" : "Core Web Vitals dans Shopware"}
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          {isEn
            ? "Performance is both a ranking factor and a conversion factor. The three typical failures in Shopware: high LCP when the hero image loads without priority (fixed by marking it with high fetchpriority), CLS caused by images without declared dimensions that shift the layout when loading, and degraded INP from JavaScript plugins that block interaction. Auditing and fixing these three points usually delivers the biggest performance jump."
            : "La performance est à la fois un facteur de classement et un facteur de conversion. Les trois défaillances typiques dans Shopware : LCP élevé quand l'image hero se charge sans priorité (corrigé en la marquant avec une fetchpriority élevée), CLS causé par des images sans dimensions déclarées qui décalent la mise en page au chargement, et INP dégradé par des plugins JavaScript qui bloquent l'interaction. Auditer et corriger ces trois points donne généralement le plus grand saut de performance."}
        </p>

        <h2 className="text-2xl font-bold text-primary-600 mt-8 mb-3">
          {isEn ? "Product pages and categories: unique content that ranks" : "Fiches et catégories : du contenu unique qui se positionne"}
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          {isEn
            ? "Supplier-imported catalogues bring duplicated descriptions that Google ignores. Each product page needs a minimum of unique content — around 150 genuine words — that answers what the customer is looking for: what it is for, what makes it different, what is included. Category pages, in addition to the product listing, should have text that explains the range and captures generic searches in the sector. For SEO plugins: they make sense above a certain volume. For stores with more than 500 products, a good plugin automates canonical tags, sitemaps and metadata at scale; below that figure, Shopware's native configuration done properly is usually enough."
            : "Le catalogue importé d'un fournisseur apporte des descriptions dupliquées que Google ignore. Chaque fiche produit a besoin d'un minimum de contenu unique — environ 150 mots réels — qui répond à ce que cherche le client : à quoi ça sert, en quoi c'est différent, qu'est-ce que ça inclut. Les pages de catégorie, en plus du listing, doivent avoir un texte qui explique la gamme et capte les recherches génériques du secteur. Sur les plugins SEO : ils ont du sens à partir d'un certain volume. Pour les boutiques avec plus de 500 produits, un bon plugin automatise les canonical, les sitemaps et les métadonnées à l'échelle ; en dessous de ce chiffre, la configuration native de Shopware bien faite est généralement suffisante."}
        </p>

        <div className="bg-primary-50 rounded-xl p-6 border border-primary-100 my-6">
          <p className="font-semibold text-primary-700 mb-2">
            {isEn
              ? "Is your Shopware store not ranking as it should?"
              : "Votre boutique Shopware ne se positionne pas comme elle le devrait ?"}
          </p>
          <p className="text-gray-600 text-sm mb-4">
            {isEn
              ? "We audit your store's technical SEO — facets, canonical, schema and Core Web Vitals — and tell you exactly what to fix to gain organic traffic."
              : "Nous auditons le SEO technique de votre boutique — facettes, canonical, schéma et Core Web Vitals — et vous disons exactement quoi corriger pour gagner du trafic organique."}
          </p>
          <Link
            href={`/${lang}/contact`}
            className="inline-block bg-accent-500 text-white px-6 py-2.5 rounded-full font-semibold text-sm hover:bg-accent-600 transition-colors"
          >
            {isEn ? "Contact us" : "Nous contacter"}
          </Link>
        </div>

        <div className="bg-primary-600 text-white rounded-2xl p-8 my-8 text-center">
          <h2 className="text-2xl font-bold mb-3">
            {isEn ? "Turn your Shopware store into a channel that sells" : "Transformez votre boutique Shopware en canal qui vend"}
          </h2>
          <p className="text-primary-200 mb-6">
            {isEn
              ? "Well-executed technical SEO is the foundation of a profitable ecommerce. We help you rank your catalogue and attract traffic that buys."
              : "Le SEO technique bien exécuté est la base d'un e-commerce rentable. Nous vous aidons à positionner votre catalogue et à attirer du trafic qui achète."}
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
      <RelatedArticles currentSlug="shopware-seo-google" />
    </>
  );
}
