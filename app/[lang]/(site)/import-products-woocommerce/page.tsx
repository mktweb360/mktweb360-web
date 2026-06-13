import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ContactForm } from "@/components/ContactForm";
import { BlogBanner } from "@/components/BlogBanner";
import { RelatedArticles } from "@/components/RelatedArticles";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const isEn = lang === "en";
  return {
    title: isEn
      ? "How to Import Products to WooCommerce Easily | Mkt Web 360"
      : "Comment importer des produits dans WooCommerce facilement | Mkt Web 360",
    description: isEn
      ? "Import products to WooCommerce from CSV, Excel, Shopify or PrestaShop. Step-by-step guide to avoid errors."
      : "Importez des produits dans WooCommerce depuis CSV, Excel, Shopify ou PrestaShop. Guide étape par étape pour éviter les erreurs.",
    alternates: {
      canonical: `https://www.mktweb360.com/${lang}/${lang === "en" ? "import-products-woocommerce" : "importer-produits-woocommerce"}/`,
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
            { label: isEn ? "Import WooCommerce" : "Import WooCommerce" },
          ]}
        />
        <p className="text-sm text-accent-500 font-semibold mb-2">Ecommerce</p>
        <h1 className="text-4xl font-bold text-primary-600 mb-4 leading-tight">
          {isEn
            ? "How to import products to WooCommerce without typing them one by one"
            : "Comment importer des produits dans WooCommerce sans les saisir un par un"}
        </h1>
        <p className="text-xl text-gray-500 mb-8 leading-relaxed">
          {isEn
            ? "If you have a product catalogue in Excel, CSV or on another platform, you do not have to upload them manually. This guide shows you the fastest and safest way to import products into WooCommerce."
            : "Si vous avez un catalogue de produits dans Excel, CSV ou sur une autre plateforme, vous n'avez pas besoin de les télécharger manuellement. Ce guide vous montre le moyen le plus rapide et le plus sûr d'importer des produits dans WooCommerce."}
        </p>

        <h2 className="text-2xl font-bold text-primary-600 mt-10 mb-4">
          {isEn ? "Why bulk import is key when launching a store" : "Pourquoi l'import en masse est essentiel lors du lancement d'une boutique"}
        </h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          {isEn
            ? "Entering products one by one is only viable for very small catalogues (under 20 products). Beyond that, manual entry creates errors, inconsistencies and wastes days or weeks. Bulk import is not just faster — it is more reliable: data from a structured file is more consistent than data entered manually across hundreds of forms."
            : "La saisie manuelle des produits n'est viable que pour de très petits catalogues (moins de 20 produits). Au-delà, la saisie manuelle crée des erreurs, des incohérences et gaspille des jours ou des semaines. L'import en masse n'est pas seulement plus rapide — il est plus fiable : les données d'un fichier structuré sont plus cohérentes que les données saisies manuellement dans des centaines de formulaires."}
        </p>

        <h2 className="text-2xl font-bold text-primary-600 mt-10 mb-4">
          {isEn ? "Importing products from CSV/Excel to WooCommerce" : "Importer des produits depuis CSV/Excel vers WooCommerce"}
        </h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          {isEn
            ? "WooCommerce includes a native product importer. Go to Products {'>'}  Import, download the sample CSV to understand the column structure, then map your Excel columns to WooCommerce fields. Key columns: SKU, name, description, short description, regular price, sale price, stock quantity, categories, images (URL), weight, dimensions."
            : "WooCommerce inclut un importateur de produits natif. Allez dans Produits {'>'} Importer, téléchargez l'exemple CSV pour comprendre la structure des colonnes, puis associez vos colonnes Excel aux champs WooCommerce. Colonnes clés : SKU, nom, description, description courte, prix régulier, prix promo, quantité en stock, catégories, images (URL), poids, dimensions."}
        </p>
        <p className="text-gray-600 leading-relaxed mb-4">
          {isEn
            ? "Images must be accessible via URL during import. Host them on your server or a temporary CDN, add the URLs to the image column, and WooCommerce will download and attach them automatically. For large catalogues, increase PHP memory limit and max execution time before running the import."
            : "Les images doivent être accessibles via URL pendant l'import. Hébergez-les sur votre serveur ou un CDN temporaire, ajoutez les URLs à la colonne image, et WooCommerce les téléchargera et les attachera automatiquement. Pour les grands catalogues, augmentez la limite de mémoire PHP et le temps d'exécution maximum avant de lancer l'import."}
        </p>

        <h2 className="text-2xl font-bold text-primary-600 mt-10 mb-4">
          {isEn ? "Importing from Shopify to WooCommerce" : "Importer depuis Shopify vers WooCommerce"}
        </h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          {isEn
            ? "Export your Shopify products as a CSV from the Products section. The format is different from WooCommerce's, so you will need to reformat columns — either manually in Excel or using a conversion tool like the free WooCommerce Shopify CSV Converter. The main challenge is images: Shopify exports product image URLs that remain accessible briefly after export, so import promptly."
            : "Exportez vos produits Shopify en CSV depuis la section Produits. Le format est différent de celui de WooCommerce, donc vous devrez reformater les colonnes — soit manuellement dans Excel, soit avec un outil de conversion comme le convertisseur CSV Shopify WooCommerce gratuit. Le principal défi est les images : Shopify exporte des URLs d'images de produits qui restent accessibles brièvement après l'export, donc importez rapidement."}
        </p>

        <h2 className="text-2xl font-bold text-primary-600 mt-10 mb-4">
          {isEn ? "Importing from PrestaShop to WooCommerce" : "Importer depuis PrestaShop vers WooCommerce"}
        </h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          {isEn
            ? "PrestaShop exports products via the native data export tool. The CSV includes most product fields but the structure differs significantly from WooCommerce. Use a migration plugin like Cart2Cart or LitExtension for large catalogues — these handle the field mapping, image transfer and variant/attribute structure automatically."
            : "PrestaShop exporte les produits via l'outil d'export de données natif. Le CSV inclut la plupart des champs produit mais la structure diffère significativement de WooCommerce. Utilisez un plugin de migration comme Cart2Cart ou LitExtension pour les grands catalogues — ils gèrent automatiquement la correspondance des champs, le transfert d'images et la structure des variantes/attributs."}
        </p>

        <h2 className="text-2xl font-bold text-primary-600 mt-10 mb-4">
          {isEn ? "Most common import errors and how to avoid them" : "Les erreurs d'importation les plus courantes et comment les éviter"}
        </h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          {isEn
            ? "Common errors: (1) Images not importing — check URLs are publicly accessible and not behind authentication. (2) Variants not creating correctly — ensure attribute columns follow WooCommerce's format exactly. (3) Categories not assigning — use exact category names or create them before importing. (4) Timeout during large imports — split the file into batches of 500 products."
            : "Erreurs courantes : (1) Images non importées — vérifiez que les URLs sont publiquement accessibles et non protégées. (2) Variantes non créées correctement — assurez-vous que les colonnes d'attributs suivent exactement le format WooCommerce. (3) Catégories non assignées — utilisez les noms de catégorie exacts ou créez-les avant d'importer. (4) Timeout lors des grands imports — divisez le fichier en lots de 500 produits."}
        </p>
        <p className="text-gray-600 leading-relaxed mb-4">
          {isEn
            ? "Always test with a small batch of 10–20 products before running the full import. Review the imported products carefully — check images, prices, stock and variants before going live."
            : "Testez toujours avec un petit lot de 10 à 20 produits avant de lancer l'import complet. Examinez attentivement les produits importés — vérifiez les images, les prix, le stock et les variantes avant de mettre en ligne."}
        </p>

        <BlogBanner variant="ecommerce" />

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
      <RelatedArticles category="Ecommerce" />
    </>
  );
}
