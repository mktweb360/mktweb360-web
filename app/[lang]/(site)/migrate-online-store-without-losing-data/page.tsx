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
      ? "How to Migrate Your Online Store Without Losing Products, Customers or SEO | Mkt Web 360"
      : "Comment migrer votre boutique en ligne sans perdre produits, clients ni SEO | Mkt Web 360",
    description: isEn
      ? "Complete checklist and step-by-step process for migrating your ecommerce store without losing products, customers, orders or SEO rankings."
      : "Checklist complète et processus étape par étape pour migrer votre boutique e-commerce sans perdre produits, clients, commandes ni classements SEO.",
    alternates: alternatesFor(`/${lang}/${lang === "en" ? "migrate-online-store-without-losing-data" : "migrer-boutique-sans-perdre-donnees"}/`) ?? {
      canonical: `https://www.mktweb360.com/${lang}/${lang === "en" ? "migrate-online-store-without-losing-data" : "migrer-boutique-sans-perdre-donnees"}/`,
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
            { label: isEn ? "Store migration" : "Migration de boutique" },
          ]}
        />
        <p className="text-sm text-accent-500 font-semibold mb-2">Ecommerce</p>
        <h1 className="text-4xl font-bold text-primary-600 mb-4 leading-tight">
          {isEn
            ? "How to migrate your online store without losing products, customers or SEO rankings"
            : "Comment migrer votre boutique en ligne sans perdre produits, clients ni positionnement SEO"}
        </h1>
        <p className="text-xl text-gray-500 mb-8 leading-relaxed">
          {isEn
            ? "Changing ecommerce platform is scary — and rightly so. A poorly done migration can cost you years of SEO rankings and months of customer data. This guide shows you exactly how to avoid the most common and costly mistakes."
            : "Changer de plateforme e-commerce fait peur — et à juste titre. Une migration mal faite peut vous coûter des années de positionnement SEO et des mois de données clients. Ce guide vous montre exactement comment éviter les erreurs les plus courantes et les plus coûteuses."}
        </p>

        <h2 className="text-2xl font-bold text-primary-600 mt-10 mb-4">
          {isEn ? "Why online store migrations fail" : "Pourquoi les migrations de boutiques en ligne échouent"}
        </h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          {isEn
            ? "The most common failures: (1) No 301 redirects set up — URLs change and Google treats every new URL as a completely new page with zero authority. (2) Images not migrated — products display without images after launch. (3) Customer passwords lost — customers cannot log in and abandon. (4) Order history missing — customer service cannot look up past orders. (5) Checkout not tested — payment integrations fail silently in production."
            : "Les échecs les plus courants : (1) Pas de redirections 301 — les URLs changent et Google traite chaque nouvelle URL comme une page complètement nouvelle avec zéro autorité. (2) Images non migrées — les produits s'affichent sans images après le lancement. (3) Mots de passe clients perdus — les clients ne peuvent pas se connecter et abandonnent. (4) Historique de commandes manquant — le service client ne peut pas consulter les commandes passées. (5) Checkout non testé — les intégrations de paiement échouent silencieusement en production."}
        </p>

        <h2 className="text-2xl font-bold text-primary-600 mt-10 mb-4">
          {isEn ? "What needs to be migrated: complete checklist" : "Ce qu'il faut migrer : checklist complète"}
        </h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          {isEn
            ? "Data to migrate: products (all variants, prices, stock levels, images, descriptions, SKUs), categories and attributes, customers (contact details, addresses, order history), historical orders, discount codes, pages and blog content, reviews and ratings. Configuration to recreate: shipping zones and rules, tax rates, payment gateways, email templates, checkout flow."
            : "Données à migrer : produits (toutes les variantes, prix, niveaux de stock, images, descriptions, SKUs), catégories et attributs, clients (coordonnées, adresses, historique de commandes), commandes historiques, codes de réduction, pages et contenu de blog, avis et évaluations. Configuration à recréer : zones et règles d'expédition, taux de TVA, passerelles de paiement, modèles d'e-mail, flux de paiement."}
        </p>

        <h2 className="text-2xl font-bold text-primary-600 mt-10 mb-4">
          {isEn ? "How to preserve SEO during a migration" : "Comment préserver le SEO pendant une migration"}
        </h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          {isEn
            ? "Step 1: Before migration, crawl all URLs with Screaming Frog and export them with their ranking data from Google Search Console. Step 2: Keep the same URL structure where possible. Step 3: For every URL that changes, create a 301 redirect. Step 4: Submit the new sitemap to Google Search Console immediately after launch. Step 5: Monitor for 404 errors weekly for the first 60 days."
            : "Étape 1 : Avant la migration, crawlez toutes les URLs avec Screaming Frog et exportez-les avec leurs données de classement depuis Google Search Console. Étape 2 : Conservez la même structure d'URL dans la mesure du possible. Étape 3 : Pour chaque URL qui change, créez une redirection 301. Étape 4 : Soumettez le nouveau sitemap à Google Search Console immédiatement après le lancement. Étape 5 : Surveillez les erreurs 404 hebdomadairement pendant les 60 premiers jours."}
        </p>

        <h2 className="text-2xl font-bold text-primary-600 mt-10 mb-4">
          {isEn ? "Migrating from Shopify to WooCommerce step by step" : "Migrer de Shopify vers WooCommerce étape par étape"}
        </h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          {isEn
            ? "1. Set up WooCommerce on a staging domain. 2. Export Shopify data (products, customers, orders). 3. Import using Cart2Cart or LitExtension. 4. Verify all data — spot-check 20% of products, a sample of customers and orders. 5. Set up 301 redirects. 6. Test checkout end-to-end with a real purchase. 7. Update DNS to point to the new server. 8. Monitor for 48 hours post-launch."
            : "1. Installez WooCommerce sur un domaine de staging. 2. Exportez les données Shopify (produits, clients, commandes). 3. Importez avec Cart2Cart ou LitExtension. 4. Vérifiez toutes les données — contrôlez 20% des produits, un échantillon de clients et de commandes. 5. Configurez les redirections 301. 6. Testez le checkout de bout en bout avec un vrai achat. 7. Mettez à jour le DNS pour pointer vers le nouveau serveur. 8. Surveillez pendant 48 heures post-lancement."}
        </p>

        <h2 className="text-2xl font-bold text-primary-600 mt-10 mb-4">
          {isEn ? "Why it pays to outsource the migration" : "Pourquoi il vaut mieux externaliser la migration"}
        </h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          {isEn
            ? "A DIY migration done incorrectly can permanently lose years of SEO authority, generate frustrated customers who cannot log in, and create undetected payment failures that cost revenue. The cost of a professional migration (typically 500–2,000€ depending on store size) is almost always recovered in reduced risk and faster execution."
            : "Une migration DIY mal réalisée peut perdre définitivement des années d'autorité SEO, générer des clients frustrés qui ne peuvent pas se connecter, et créer des échecs de paiement non détectés qui coûtent du chiffre d'affaires. Le coût d'une migration professionnelle (généralement 500 à 2 000€ selon la taille de la boutique) est presque toujours récupéré par la réduction des risques et l'exécution plus rapide."}
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
