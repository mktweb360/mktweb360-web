import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ContactForm } from "@/components/ContactForm";
import { RelatedArticles } from "@/components/RelatedArticles";
import { alternatesFor } from "@/lib/i18n/routes";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const isEn = lang === "en";
  return {
    title: isEn
      ? "How to Do a Basic SEO Audit of Your Website in 2025"
      : "Comment Faire un Audit SEO de Base de Votre Site en 2025",
    description: isEn
      ? "Step-by-step guide to carrying out a basic SEO audit. Which tools to use, what errors to look for and how to prioritise improvements to increase organic traffic."
      : "Guide étape par étape pour réaliser un audit SEO de base. Quels outils utiliser, quelles erreurs chercher et comment prioriser les améliorations pour augmenter le trafic organique.",
    alternates: alternatesFor(`/${lang}/basic-seo-audit/`) ?? {
      canonical: `https://www.mktweb360.com/${lang}/basic-seo-audit/`,
    },
    openGraph: {
      title: isEn
        ? "How to Do a Basic SEO Audit of Your Website | Mkt Web 360"
        : "Comment Faire un Audit SEO de Base de Votre Site | Mkt Web 360",
      description: isEn
        ? "Step-by-step guide to carrying out a basic SEO audit. Which tools to use, what errors to look for and how to prioritise improvements to increase organic traffic."
        : "Guide étape par étape pour réaliser un audit SEO de base. Quels outils utiliser, quelles erreurs chercher et comment prioriser les améliorations pour augmenter le trafic organique.",
    },
  };
}

export default async function Page({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const isEn = lang === "en";

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: isEn
      ? "How to Do a Basic SEO Audit of Your Website in 2025 | Mkt Web 360"
      : "Comment Faire un Audit SEO de Base de Votre Site en 2025 | Mkt Web 360",
    description: isEn
      ? "Step-by-step guide to carrying out a basic SEO audit. Which tools to use, what errors to look for and how to prioritise improvements to increase organic traffic."
      : "Guide étape par étape pour réaliser un audit SEO de base. Quels outils utiliser, quelles erreurs chercher et comment prioriser les améliorations pour augmenter le trafic organique.",
    author: { "@type": "Organization", name: "Mkt Web 360 SLU", url: "https://www.mktweb360.com" },
    publisher: {
      "@type": "Organization",
      name: "Mkt Web 360 SLU",
      logo: { "@type": "ImageObject", url: "https://www.mktweb360.com/logo.png" },
    },
    datePublished: "2026-06-13",
    dateModified: "2026-06-23",
    image: "https://www.mktweb360.com/og-image.jpg",
    url: `https://www.mktweb360.com/${lang}/basic-seo-audit/`,
    mainEntityOfPage: { "@type": "WebPage", "@id": `https://www.mktweb360.com/${lang}/basic-seo-audit/` },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <div className="max-w-3xl mx-auto px-4 py-12">
        <Breadcrumbs
          crumbs={[
            { label: isEn ? "Home" : "Accueil", href: `/${lang}/` },
            { label: "Blog", href: `/${lang}/blog/` },
            { label: isEn ? "Basic SEO Audit" : "Audit SEO de base" },
          ]}
        />
        <p className="text-sm text-accent-500 font-semibold mb-2">SEO</p>
        <h1 className="text-4xl font-bold text-primary-600 mb-4 leading-tight">
          {isEn
            ? "How to carry out a basic SEO audit of your website: a practical guide without technical knowledge"
            : "Comment réaliser un audit SEO de base de votre site : un guide pratique sans connaissances techniques"}
        </h1>
        <p className="text-xl text-gray-500 mb-8 leading-relaxed">
          {isEn
            ? "You do not need to be an SEO expert to detect the most important problems holding back your rankings. This guide explains how to do a basic SEO audit with free tools and what to do with what you find."
            : "Vous n'avez pas besoin d'être un expert en SEO pour détecter les problèmes les plus importants qui freinent votre positionnement. Ce guide explique comment réaliser un audit SEO de base avec des outils gratuits et quoi faire avec ce que vous trouvez."}
        </p>

        <h2 className="text-2xl font-bold text-primary-600 mt-10 mb-4">
          {isEn
            ? "Why carry out an SEO audit before any other action"
            : "Pourquoi réaliser un audit SEO avant toute autre action"}
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          {isEn
            ? "An SEO audit is the prior diagnosis that reveals why your website is not ranking as it should. Without this diagnosis, it is easy to invest time and money in actions that do not address the real problem. It is like taking painkillers for a headache when the problem is an infection that requires antibiotics: the symptom may improve temporarily, but the underlying problem persists."
            : "Un audit SEO est le diagnostic préalable qui révèle pourquoi votre site web ne se positionne pas comme il le devrait. Sans ce diagnostic, il est facile d'investir du temps et de l'argent dans des actions qui ne s'attaquent pas au vrai problème. C'est comme prendre des analgésiques pour un mal de tête quand le problème est une infection qui nécessite des antibiotiques : le symptôme peut s'améliorer temporairement, mais le problème sous-jacent persiste."}
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          {isEn
            ? "The most common SEO problems a basic audit can reveal are: pages not indexed due to configuration errors, duplicate content that confuses Google, slow loading speed that penalises rankings, missing basic tags (title, description, H1), broken links that harm user experience and site structure, and technical problems with the robots.txt file or sitemap."
            : "Les problèmes SEO les plus courants qu'un audit de base peut révéler sont : des pages non indexées en raison d'erreurs de configuration, du contenu dupliqué qui confond Google, une vitesse de chargement lente qui pénalise le positionnement, l'absence de balises de base (titre, description, H1), des liens brisés qui nuisent à l'expérience utilisateur et à la structure du site, et des problèmes techniques avec le fichier robots.txt ou le sitemap."}
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          {isEn
            ? "A basic SEO audit does not require paid tools. With Google Search Console, Google Analytics 4 and Screaming Frog (free version up to 500 URLs) you can get a clear picture of the SEO status of any small or medium-sized website."
            : "Un audit SEO de base ne nécessite pas d'outils payants. Avec Google Search Console, Google Analytics 4 et Screaming Frog (version gratuite jusqu'à 500 URLs), vous pouvez obtenir une image claire de l'état SEO de tout site web de petite ou moyenne taille."}
        </p>

        <h2 className="text-2xl font-bold text-primary-600 mt-10 mb-4">
          {isEn
            ? "Step 1: Google Search Console — visibility and indexing errors"
            : "Étape 1 : Google Search Console — visibilité et erreurs d'indexation"}
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          {isEn
            ? "Google Search Console (GSC) is the most important tool for basic SEO because it shows exactly how Google sees and interacts with your website. If you do not have it configured, it is the first thing you should do before anything else. Configuration is free and takes less than 15 minutes."
            : "Google Search Console (GSC) est l'outil le plus important pour le SEO de base car il montre exactement comment Google voit et interagit avec votre site web. Si vous ne l'avez pas configuré, c'est la première chose à faire avant toute autre chose. La configuration est gratuite et prend moins de 15 minutes."}
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          {isEn
            ? "In GSC, the first thing to review is the 'Coverage' (or 'Indexing' in the more recent interface) report. It shows how many pages of your website are indexed in Google and how many have errors. Pages with 'Error' status are pages Google cannot index for some technical reason: 404 errors, incorrect redirects, pages blocked by robots.txt, or server errors."
            : "Dans GSC, la première chose à vérifier est le rapport « Couverture » (ou « Indexation » dans l'interface plus récente). Il indique combien de pages de votre site sont indexées dans Google et combien ont des erreurs. Les pages avec le statut « Erreur » sont des pages que Google ne peut pas indexer pour une raison technique : erreurs 404, redirections incorrectes, pages bloquées par robots.txt ou erreurs de serveur."}
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          {isEn
            ? "The 'Performance' report shows the queries (keywords) for which your website appears in Google, the number of impressions and clicks, and the average position. Filter by pages to see which pages bring the most traffic and for which terms they rank. This report is essential for understanding your starting position and identifying improvement opportunities."
            : "Le rapport « Performance » montre les requêtes (mots-clés) pour lesquelles votre site apparaît dans Google, le nombre d'impressions et de clics, et la position moyenne. Filtrez par pages pour voir quelles pages génèrent le plus de trafic et pour quels termes elles se positionnent. Ce rapport est essentiel pour comprendre votre situation de départ et identifier les opportunités d'amélioration."}
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          {isEn
            ? "Also review the 'Experience' → 'Core Web Vitals' report. It shows whether your website passes or fails Google's performance metrics (LCP, INP, CLS). Pages that fail these metrics may be penalised in rankings compared to equivalent pages that do pass them."
            : "Vérifiez également le rapport « Expérience » → « Core Web Vitals ». Il indique si votre site passe ou échoue les métriques de performance de Google (LCP, INP, CLS). Les pages qui échouent à ces métriques peuvent être pénalisées dans les classements par rapport aux pages équivalentes qui les réussissent."}
        </p>

        <h2 className="text-2xl font-bold text-primary-600 mt-10 mb-4">
          {isEn
            ? "Step 2: crawling your website with Screaming Frog"
            : "Étape 2 : exploration de votre site avec Screaming Frog"}
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          {isEn
            ? "Screaming Frog is a desktop programme that crawls your website the same way Google does and returns a detailed report of all the technical elements. The free version analyses up to 500 URLs, enough for most small and medium-sized websites."
            : "Screaming Frog est un programme de bureau qui explore votre site web de la même façon que Google et retourne un rapport détaillé de tous les éléments techniques. La version gratuite analyse jusqu'à 500 URLs, suffisant pour la plupart des sites web de petite et moyenne taille."}
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          {isEn
            ? "When you enter your website URL and run the crawl, Screaming Frog will give you information about: pages with 404 errors (content not found), redirects (301, 302), pages with duplicate or too long/short titles or meta descriptions, pages without an H1 tag or with more than one H1, images without alternative text (alt text), and pages with thin content."
            : "Lorsque vous saisissez l'URL de votre site et lancez l'exploration, Screaming Frog vous donnera des informations sur : les pages avec des erreurs 404 (contenu introuvable), les redirections (301, 302), les pages avec des titres ou meta descriptions en double ou trop longs/courts, les pages sans balise H1 ou avec plus d'un H1, les images sans texte alternatif (alt text) et les pages avec du contenu mince."}
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          {isEn
            ? "Prioritise 404 errors and duplicate titles. 404 errors must be corrected or redirected to equivalent pages. Duplicate titles confuse Google about which page is most relevant for a query and must be differentiated with unique content on each page."
            : "Priorisez les erreurs 404 et les titres en double. Les erreurs 404 doivent être corrigées ou redirigées vers des pages équivalentes. Les titres en double confondent Google sur quelle page est la plus pertinente pour une requête et doivent être différenciés avec du contenu unique sur chaque page."}
        </p>

        <h2 className="text-2xl font-bold text-primary-600 mt-10 mb-4">
          {isEn
            ? "Step 3: loading speed with PageSpeed Insights"
            : "Étape 3 : vitesse de chargement avec PageSpeed Insights"}
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          {isEn
            ? "PageSpeed Insights (pagespeed.web.dev) analyses the speed of any URL and gives a score from 0 to 100 separately for mobile and desktop. It also lists the specific problems that are reducing the score and estimates how much time would be saved by resolving them."
            : "PageSpeed Insights (pagespeed.web.dev) analyse la vitesse de n'importe quelle URL et donne une note de 0 à 100 séparément pour mobile et ordinateur. Il liste également les problèmes spécifiques qui réduisent la note et estime le temps économisé en les résolvant."}
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          {isEn
            ? "For SEO, the most important score is the mobile one, since Google uses a mobile-first index: it values mobile performance over desktop. A score above 80 on mobile is the minimum target. Below 50 indicates serious problems that are likely affecting rankings."
            : "Pour le SEO, le score le plus important est celui sur mobile, car Google utilise un index mobile-first : il valorise les performances mobiles par rapport au bureau. Une note supérieure à 80 sur mobile est l'objectif minimum. En dessous de 50 indique des problèmes graves qui affectent probablement le positionnement."}
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          {isEn
            ? "The most common problems that lower the score are: uncompressed oversized images (70% of cases), JavaScript that blocks rendering, lack of browser caching, and web fonts that load synchronously. Many of these problems are resolved with an optimisation plugin like WP Rocket or with the correct CDN configuration."
            : "Les problèmes les plus courants qui abaissent la note sont : les images trop grandes non compressées (70% des cas), le code JavaScript qui bloque le rendu, l'absence de cache navigateur et les polices web qui se chargent de manière synchrone. Beaucoup de ces problèmes se résolvent avec un plugin d'optimisation comme WP Rocket ou avec la configuration correcte du CDN."}
        </p>

        <h2 className="text-2xl font-bold text-primary-600 mt-10 mb-4">
          {isEn
            ? "Step 4: content and keyword review"
            : "Étape 4 : révision du contenu et des mots-clés"}
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          {isEn
            ? "An important part of the SEO audit is checking whether the content of the main pages is optimised for relevant keywords. This does not mean keyword stuffing (repeating the keyword endlessly), but ensuring that pages address the topics your potential clients are searching for in a natural and comprehensive way."
            : "Une partie importante de l'audit SEO consiste à vérifier si le contenu des pages principales est optimisé pour les mots-clés pertinents. Cela ne signifie pas faire du bourrage de mots-clés (répéter le mot-clé sans fin), mais s'assurer que les pages traitent les sujets que vos clients potentiels recherchent de manière naturelle et complète."}
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          {isEn
            ? "For each important service or product page, check: Does the title tag include the main keyword? Is the H1 descriptive and different from the title (although they can match)? Does the page content answer the questions someone searching for that service might have? Does it have at least 300–500 words of relevant content?"
            : "Pour chaque page de service ou de produit importante, vérifiez : la balise titre inclut-elle le mot-clé principal ? Le H1 est-il descriptif et différent du titre (même s'ils peuvent coïncider) ? Le contenu de la page répond-il aux questions que quelqu'un cherchant ce service pourrait avoir ? A-t-il au moins 300 à 500 mots de contenu pertinent ?"}
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          {isEn
            ? "A frequent error on SME websites is having service pages with only 50–100 words of content. Google interprets these pages as thin content and ranks them poorly. Expanding the content of the most important pages with genuinely useful information for the user is one of the actions with the best SEO return."
            : "Une erreur fréquente sur les sites web des PME est d'avoir des pages de service avec seulement 50 à 100 mots de contenu. Google interprète ces pages comme du contenu mince et les positionne mal. Enrichir le contenu des pages les plus importantes avec des informations genuinement utiles pour l'utilisateur est l'une des actions avec le meilleur retour SEO."}
        </p>

        <h2 className="text-2xl font-bold text-primary-600 mt-10 mb-4">
          {isEn
            ? "How to prioritise audit improvements"
            : "Comment prioriser les améliorations de l'audit"}
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          {isEn
            ? "A basic SEO audit can reveal dozens of problems. The most common error when receiving one is trying to address everything at once, which leads to scattered work and poor results. Correct prioritisation is done according to two criteria: potential impact on traffic and ease of implementation."
            : "Un audit SEO de base peut révéler des dizaines de problèmes. L'erreur la plus courante en le recevant est d'essayer de tout traiter en même temps, ce qui conduit à un travail dispersé et à de mauvais résultats. La priorisation correcte se fait selon deux critères : l'impact potentiel sur le trafic et la facilité de mise en œuvre."}
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          <strong>{isEn ? "High priority, easy to implement:" : "Priorité haute, facile à mettre en œuvre :"}</strong>{" "}
          {isEn
            ? "Fix 404 errors, add meta descriptions to pages that lack them, compress oversized images, activate basic redirects. These actions can be implemented in 1–2 days and have a direct impact."
            : "Corriger les erreurs 404, ajouter des meta descriptions aux pages qui en manquent, compresser les images trop grandes, activer les redirections de base. Ces actions peuvent être mises en œuvre en 1 à 2 jours et ont un impact direct."}
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          <strong>{isEn ? "High priority, greater effort:" : "Priorité haute, plus d'effort :"}</strong>{" "}
          {isEn
            ? "Expand content on thin content pages, improve loading speed (if complex technical changes are required), resolve serious indexing problems. These actions take more time but have the greatest impact in the medium term."
            : "Enrichir le contenu des pages minces, améliorer la vitesse de chargement (si des changements techniques complexes sont nécessaires), résoudre les problèmes d'indexation graves. Ces actions demandent plus de temps mais ont le plus grand impact à moyen terme."}
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          <strong>{isEn ? "Secondary priority:" : "Priorité secondaire :"}</strong>{" "}
          {isEn
            ? "Systematically optimise images for keywords, improve internal linking, etc. These actions improve performance but are not urgent if you have already resolved the main problems."
            : "Optimiser systématiquement les images pour les mots-clés, améliorer le maillage interne, etc. Ces actions améliorent les performances mais ne sont pas urgentes si vous avez déjà résolu les problèmes principaux."}
        </p>

        <section className="bg-primary-600 text-white rounded-2xl p-8 mt-12">
          <h2 className="text-2xl font-bold mb-4">
            {isEn ? "Do you need help with your digital marketing?" : "Avez-vous besoin d'aide avec votre marketing digital ?"}
          </h2>
          <p className="text-primary-200 mb-6">
            {isEn
              ? "Tell us about your project and we will get back to you within 24 hours."
              : "Parlez-nous de votre projet et nous vous répondrons dans les 24 heures."}
          </p>
          <div className="bg-white rounded-xl p-6">
            <ContactForm lang={lang} />
          </div>
        </section>
      </div>
      <RelatedArticles category="SEO" />
    </>
  );
}
