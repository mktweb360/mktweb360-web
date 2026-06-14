import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ContactForm } from "@/components/ContactForm";
import { BlogBanner } from "@/components/BlogBanner";
import { RelatedArticles } from "@/components/RelatedArticles";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const isEn = lang === "en";
  return {
    title: isEn ? "SEO for Ecommerce — Errors That Slow Down Your Sales | Mkt Web 360" : "SEO pour E-commerce — Erreurs qui Freinent vos Ventes | Mkt Web 360",
    description: isEn ? "The most common SEO errors in ecommerce and what to review to improve visibility, qualified traffic and sales." : "Les erreurs SEO les plus courantes en e-commerce et ce qu'il faut vérifier pour améliorer la visibilité, le trafic qualifié et les ventes.",
    alternates: { canonical: `https://www.mktweb360.com/${lang}/seo-for-ecommerce-errors/` },
  };
}

export default async function Page({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const isEn = lang === "en";
  return (
    <>
      <div className="max-w-3xl mx-auto px-4 py-12">
        <Breadcrumbs crumbs={[
          { label: isEn ? "Home" : "Accueil", href: `/${lang}/` },
          { label: "Blog", href: `/${lang}/blog/` },
          { label: isEn ? "Ecommerce SEO" : "SEO e-commerce" },
        ]} />
        <p className="text-sm text-accent-500 font-semibold mb-2">SEO</p>
        <h1 className="text-4xl font-bold text-primary-600 mb-4 leading-tight">
          {isEn ? "SEO for ecommerce: errors that slow down sales in your online store" : "SEO pour e-commerce : erreurs qui freinent les ventes dans votre boutique en ligne"}
        </h1>
        <p className="text-xl text-gray-500 mb-8 leading-relaxed">
          {isEn ? "Most online stores lose sales not because of the product but because of invisible SEO errors. This guide explains the most common ones and how to fix them." : "La plupart des boutiques en ligne perdent des ventes non pas à cause du produit mais à cause d'erreurs SEO invisibles. Ce guide explique les plus courantes et comment les corriger."}
        </p>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-primary-600 mb-4">
            {isEn ? "Why SEO is critical for ecommerce" : "Pourquoi le SEO est critique pour l'e-commerce"}
          </h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {isEn ? "Organic search is typically the highest-ROI traffic channel for ecommerce, generating clicks at zero ongoing cost per click compared to Google Shopping or Google Ads. A well-optimised online store can generate substantial organic revenue that continues growing without ongoing media spend. But ecommerce SEO has unique challenges that general SEO guides rarely address adequately." : "La recherche organique est généralement le canal de trafic au ROI le plus élevé pour l'e-commerce, générant des clics sans coût par clic continu par rapport à Google Shopping ou Google Ads. Une boutique en ligne bien optimisée peut générer des revenus organiques substantiels qui continuent de croître sans dépenses médias continues. Mais le SEO e-commerce a des défis uniques que les guides SEO généraux abordent rarement de manière adéquate."}
          </p>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {isEn ? "The most critical ecommerce SEO issues are often invisible to store owners: thin product descriptions copied from manufacturers, duplicate content across product variants, crawl budget waste from faceted navigation creating thousands of near-identical URLs, and category pages with no unique content. These structural issues can prevent even excellent products from appearing in search results." : "Les problèmes SEO e-commerce les plus critiques sont souvent invisibles pour les propriétaires de boutiques : des descriptions de produits légères copiées des fabricants, du contenu dupliqué dans les variantes de produits, gaspillage de budget de crawl dû à la navigation à facettes créant des milliers d'URLs quasi-identiques, et des pages de catégories sans contenu unique. Ces problèmes structurels peuvent empêcher même d'excellents produits d'apparaître dans les résultats de recherche."}
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-primary-600 mb-4">
            {isEn ? "Most common technical SEO errors in online stores" : "Erreurs techniques SEO les plus courantes dans les boutiques en ligne"}
          </h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {isEn ? "The most frequent technical errors include: missing or duplicate title tags and meta descriptions, broken internal links and 404 errors from deleted products, missing canonical tags on product variant pages, slow loading caused by large unoptimised product images, missing or incorrect structured data (product schema, breadcrumbs, reviews) and improper handling of out-of-stock products." : "Les erreurs techniques les plus fréquentes incluent : des balises title et meta descriptions manquantes ou dupliquées, des liens internes cassés et des erreurs 404 provenant de produits supprimés, des balises canonical manquantes sur les pages de variantes de produits, un chargement lent causé par de grandes images de produits non optimisées, des données structurées manquantes ou incorrectes (schema produit, fil d'Ariane, avis) et une gestion incorrecte des produits en rupture de stock."}
          </p>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {isEn ? "Run a regular crawl of your store using tools like Screaming Frog (free up to 500 URLs), Ahrefs or SEMrush to identify these issues systematically. Pay particular attention to crawl depth — important category and product pages should be reachable within 3 clicks from the homepage. Pages buried deeper than this receive less crawl attention from Google." : "Effectuez un crawl régulier de votre boutique avec des outils comme Screaming Frog (gratuit jusqu'à 500 URLs), Ahrefs ou SEMrush pour identifier ces problèmes de manière systématique. Portez une attention particulière à la profondeur de crawl — les pages de catégories et de produits importantes doivent être accessibles en 3 clics depuis la page d'accueil. Les pages plus profondes reçoivent moins d'attention de crawl de Google."}
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-primary-600 mb-4">
            {isEn ? "Product page optimisation" : "Optimisation des pages produits"}
          </h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {isEn ? "Product pages are the most important pages in an ecommerce store from an SEO perspective. Each product page should have: a unique, keyword-rich title tag that includes the product name and key descriptor, a unique meta description with a compelling reason to click, an original product description of at least 150-300 words (not the manufacturer's description), optimised image filenames and alt text, and product schema markup." : "Les pages produits sont les pages les plus importantes dans une boutique e-commerce du point de vue SEO. Chaque page produit doit avoir : une balise title unique et riche en mots-clés incluant le nom du produit et son descripteur clé, une meta description unique avec une raison convaincante de cliquer, une description de produit originale d'au moins 150 à 300 mots (pas la description du fabricant), des noms de fichiers d'images optimisés et un texte alt, et un balisage schema produit."}
          </p>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {isEn ? "Customer reviews are also an SEO asset on product pages — they add fresh, unique content that includes natural language variations of your target keywords. Enable reviews on your product pages and make it easy for customers to leave them. A product page with 20 genuine reviews will typically outrank an equivalent page with no reviews, all else being equal." : "Les avis clients sont également un actif SEO sur les pages produits — ils ajoutent du contenu frais et unique qui inclut des variations en langage naturel de vos mots-clés cibles. Activez les avis sur vos pages produits et facilitez la tâche des clients pour les laisser. Une page produit avec 20 vrais avis surclassera généralement une page équivalente sans avis, toutes choses égales par ailleurs."}
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-primary-600 mb-4">
            {isEn ? "Category structure and internal linking" : "Structure des catégories et maillage interne"}
          </h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {isEn ? "Your category structure is the architectural foundation of ecommerce SEO. Categories should align with how customers search — not just how you think about your product range. Research the actual search queries customers use to find products in your niche and ensure your categories match those queries. A category page for 'men's running shoes' will rank better than one for 'footwear collection type A.'" : "Votre structure de catégories est la fondation architecturale du SEO e-commerce. Les catégories doivent s'aligner sur la façon dont les clients recherchent — pas seulement sur la façon dont vous pensez à votre gamme de produits. Recherchez les requêtes de recherche réelles que les clients utilisent pour trouver des produits dans votre niche et assurez-vous que vos catégories correspondent à ces requêtes. Une page de catégorie pour 'chaussures de running homme' se positionnera mieux qu'une pour 'collection chaussures type A.'"}
          </p>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {isEn ? "Internal linking passes SEO authority from high-authority pages to product and category pages. Use breadcrumbs (which also improve user experience), cross-links between related products and categories, and links from blog content to relevant product pages. A blog article about 'how to choose running shoes' should link to your running shoes category — capturing informational search intent and guiding that traffic toward purchase." : "Le maillage interne transmet l'autorité SEO des pages à haute autorité vers les pages produits et catégories. Utilisez des fil d'Ariane (qui améliorent aussi l'expérience utilisateur), des liens croisés entre produits et catégories connexes, et des liens depuis le contenu du blog vers les pages produits pertinentes. Un article de blog sur 'comment choisir des chaussures de running' doit pointer vers votre catégorie chaussures de running — capturant l'intention de recherche informationnelle et guidant ce trafic vers l'achat."}
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-primary-600 mb-4">
            {isEn ? "How to measure SEO performance in your online store" : "Comment mesurer la performance SEO dans votre boutique en ligne"}
          </h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {isEn ? "The key SEO metrics for ecommerce are: organic sessions (overall and by landing page), organic revenue and conversion rate, keyword positions for target queries, Core Web Vitals scores and crawl health. Set up Google Search Console and GA4 e-commerce tracking to monitor these. Create a monthly SEO report that tracks trends over time — SEO improvements take 3-6 months to fully manifest in results." : "Les métriques SEO clés pour l'e-commerce sont : les sessions organiques (globales et par page d'atterrissage), le revenu organique et le taux de conversion, les positions de mots-clés pour les requêtes cibles, les scores Core Web Vitals et la santé du crawl. Configurez Google Search Console et le suivi e-commerce GA4 pour surveiller ceux-ci. Créez un rapport SEO mensuel qui suit les tendances dans le temps — les améliorations SEO prennent 3 à 6 mois pour se manifester pleinement dans les résultats."}
          </p>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {isEn ? "Prioritise SEO improvements by revenue impact. Calculate which product categories generate the most revenue, identify which of those have the weakest SEO performance relative to their revenue potential, and focus your optimisation efforts there first. A 20% increase in organic traffic to your top revenue category will generate more revenue than a 200% increase in organic traffic to a low-volume category." : "Priorisez les améliorations SEO par impact sur le revenu. Calculez quelles catégories de produits génèrent le plus de revenus, identifiez lesquelles ont les performances SEO les plus faibles par rapport à leur potentiel de revenu, et concentrez-y vos efforts d'optimisation en premier. Une augmentation de 20% du trafic organique vers votre catégorie de revenus principale générera plus de revenus qu'une augmentation de 200% du trafic organique vers une catégorie à faible volume."}
          </p>
        </section>

        <BlogBanner variant="seo" />
        <section className="bg-primary-600 text-white rounded-2xl p-8 mt-12">
          <h2 className="text-2xl font-bold mb-4">
            {isEn ? "Need help with your digital marketing?" : "Besoin d'aide avec votre marketing digital ?"}
          </h2>
          <p className="text-primary-200 mb-6">
            {isEn ? "Tell us about your project and we'll get back to you within 24 hours." : "Parlez-nous de votre projet et nous vous répondrons dans les 24 heures."}
          </p>
          <div className="bg-white rounded-xl p-6">
            <ContactForm formType={`blog-${lang}`} />
          </div>
        </section>
      </div>
      <RelatedArticles category="SEO" />
    </>
  );
}
