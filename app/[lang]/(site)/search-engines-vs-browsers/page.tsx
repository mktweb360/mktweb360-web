import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ContactForm } from "@/components/ContactForm";
import { BlogBanner } from "@/components/BlogBanner";
import { RelatedArticles } from "@/components/RelatedArticles";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const isEn = lang === "en";
  return {
    title: isEn ? "Search Engines vs Browsers — Examples and Differences | Mkt Web 360" : "Moteurs de Recherche vs Navigateurs — Exemples et Différences | Mkt Web 360",
    description: isEn ? "The key difference between search engines and browsers, with examples of each, and why this distinction matters for digital marketing." : "La différence clé entre moteurs de recherche et navigateurs, avec des exemples de chacun, et pourquoi cette distinction compte pour le marketing digital.",
    alternates: { canonical: `https://www.mktweb360.com/${lang}/search-engines-vs-browsers/` },
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
          { label: isEn ? "Search engines vs browsers" : "Moteurs vs navigateurs" },
        ]} />
        <p className="text-sm text-accent-500 font-semibold mb-2">Digital Marketing</p>
        <h1 className="text-4xl font-bold text-primary-600 mb-4 leading-tight">
          {isEn ? "Search engines vs browsers: examples, differences and why it matters" : "Moteurs de recherche vs navigateurs : exemples, différences et pourquoi c'est important"}
        </h1>
        <p className="text-xl text-gray-500 mb-8 leading-relaxed">
          {isEn ? "Search engines and browsers are often confused, but they are fundamentally different tools. Understanding the distinction helps you make better digital marketing decisions." : "Les moteurs de recherche et les navigateurs sont souvent confondus, mais ce sont des outils fondamentalement différents. Comprendre la distinction vous aide à prendre de meilleures décisions de marketing digital."}
        </p>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-primary-600 mb-4">
            {isEn ? "What is a browser? Examples and functions" : "Qu'est-ce qu'un navigateur ? Exemples et fonctions"}
          </h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {isEn ? "A web browser is a software application that allows you to access, navigate and display content on the internet. It is the window through which you view websites. Popular browsers include: Google Chrome (the most widely used globally), Mozilla Firefox, Apple Safari, Microsoft Edge and Opera. Browsers interpret HTML, CSS and JavaScript to render web pages visually. Without a browser, you cannot visit websites at all." : "Un navigateur web est une application logicielle qui vous permet d'accéder, naviguer et afficher du contenu sur internet. C'est la fenêtre à travers laquelle vous consultez les sites web. Les navigateurs populaires incluent : Google Chrome (le plus utilisé mondialement), Mozilla Firefox, Apple Safari, Microsoft Edge et Opera. Les navigateurs interprètent le HTML, CSS et JavaScript pour afficher les pages web visuellement. Sans navigateur, vous ne pouvez pas visiter de sites web du tout."}
          </p>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {isEn ? "Browsers also store your history, manage bookmarks, handle cookies and session data, and increasingly offer built-in privacy and security features. Modern browsers are sophisticated platforms with their own extension ecosystems, developer tools and performance optimisation features. From a digital marketing perspective, different browsers may render your website slightly differently — which is why cross-browser testing is an important step in web development." : "Les navigateurs stockent également votre historique, gèrent les signets, gèrent les cookies et les données de session, et offrent de plus en plus des fonctionnalités intégrées de confidentialité et de sécurité. Les navigateurs modernes sont des plateformes sophistiquées avec leurs propres écosystèmes d'extensions, outils de développement et fonctionnalités d'optimisation des performances. Du point de vue du marketing digital, différents navigateurs peuvent afficher votre site web légèrement différemment — c'est pourquoi les tests multi-navigateurs sont une étape importante du développement web."}
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-primary-600 mb-4">
            {isEn ? "What is a search engine? Examples and functions" : "Qu'est-ce qu'un moteur de recherche ? Exemples et fonctions"}
          </h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {isEn ? "A search engine is a web-based tool that indexes content from across the internet and retrieves relevant results when you type a query. Search engines crawl billions of web pages, index their content and use complex algorithms to rank results by relevance. The most commonly used search engines are: Google (by far the dominant player globally and in Spain), Bing (Microsoft's search engine), DuckDuckGo (privacy-focused), Yahoo Search, Baidu (dominant in China) and Yandex (dominant in Russia)." : "Un moteur de recherche est un outil web qui indexe le contenu d'internet et récupère des résultats pertinents quand vous tapez une requête. Les moteurs de recherche crawlent des milliards de pages web, indexent leur contenu et utilisent des algorithmes complexes pour classer les résultats par pertinence. Les moteurs de recherche les plus utilisés sont : Google (de loin le dominant mondial et en Espagne), Bing (moteur de recherche de Microsoft), DuckDuckGo (axé sur la confidentialité), Yahoo Search, Baidu (dominant en Chine) et Yandex (dominant en Russie)."}
          </p>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {isEn ? "Search engines are the primary discovery mechanism for websites. When someone needs to find information, a product, a service or a local business, they typically start with a search engine query. This is why SEO (Search Engine Optimisation) — the practice of improving your website's visibility in search engine results — is so central to digital marketing. Understanding how search engines work is fundamental to understanding how to attract organic traffic." : "Les moteurs de recherche sont le principal mécanisme de découverte des sites web. Quand quelqu'un a besoin de trouver des informations, un produit, un service ou une entreprise locale, il commence généralement par une requête dans un moteur de recherche. C'est pourquoi le SEO (Optimisation pour les Moteurs de Recherche) — la pratique d'améliorer la visibilité de votre site dans les résultats des moteurs de recherche — est si central au marketing digital. Comprendre comment fonctionnent les moteurs de recherche est fondamental pour comprendre comment attirer du trafic organique."}
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-primary-600 mb-4">
            {isEn ? "Key differences between browsers and search engines" : "Différences clés entre navigateurs et moteurs de recherche"}
          </h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {isEn ? "The key distinction is function: a browser is a tool for viewing web content, while a search engine is a tool for finding web content. You use a browser to access a search engine's website, and then use the search engine to find other websites, which you then view through the browser. The confusion arises partly because Google Chrome (a browser) and Google Search (a search engine) share the same brand name." : "La distinction clé est la fonction : un navigateur est un outil pour afficher du contenu web, tandis qu'un moteur de recherche est un outil pour trouver du contenu web. Vous utilisez un navigateur pour accéder au site d'un moteur de recherche, puis vous utilisez le moteur de recherche pour trouver d'autres sites, que vous consultez ensuite via le navigateur. La confusion vient en partie du fait que Google Chrome (un navigateur) et Google Search (un moteur de recherche) partagent le même nom de marque."}
          </p>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {isEn ? "Another source of confusion: modern browsers have search functionality built into the address bar. When you type a search query directly into the Chrome address bar, Chrome uses Google (or whatever search engine you have configured) to process that query. The browser is handling the display and navigation; the search engine is handling the content discovery. They work together but serve different purposes." : "Une autre source de confusion : les navigateurs modernes ont des fonctionnalités de recherche intégrées dans la barre d'adresse. Quand vous tapez une requête directement dans la barre d'adresse de Chrome, Chrome utilise Google (ou le moteur de recherche que vous avez configuré) pour traiter cette requête. Le navigateur gère l'affichage et la navigation ; le moteur de recherche gère la découverte de contenu. Ils fonctionnent ensemble mais servent des objectifs différents."}
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-primary-600 mb-4">
            {isEn ? "Why this distinction matters for digital marketing" : "Pourquoi cette distinction compte pour le marketing digital"}
          </h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {isEn ? "For digital marketing, understanding the difference has practical implications. SEO is about influencing what search engines show — it requires understanding how Google crawls, indexes and ranks content. Browser compatibility is about ensuring your website displays correctly in different browsers — it is a technical web development concern. These require different skills, tools and interventions." : "Pour le marketing digital, comprendre la différence a des implications pratiques. Le SEO consiste à influencer ce que les moteurs de recherche montrent — il nécessite de comprendre comment Google crawle, indexe et classe le contenu. La compatibilité des navigateurs consiste à s'assurer que votre site web s'affiche correctement dans différents navigateurs — c'est un problème technique de développement web. Ceux-ci nécessitent des compétences, des outils et des interventions différents."}
          </p>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {isEn ? "Browser market share data matters for web development decisions: Chrome dominates with around 65% market share globally, so Chrome-first development is generally safe. But Safari represents a significant share of mobile traffic (iPhone users). Search engine market share data matters for SEO and advertising decisions: Google holds over 90% market share in Spain, which means Google SEO and Google Ads are the primary focus for most businesses targeting Spanish customers." : "Les données de parts de marché des navigateurs comptent pour les décisions de développement web : Chrome domine avec environ 65% de part de marché mondiale, donc le développement Chrome-first est généralement sûr. Mais Safari représente une part significative du trafic mobile (utilisateurs iPhone). Les données de parts de marché des moteurs de recherche comptent pour les décisions SEO et publicitaires : Google détient plus de 90% de part de marché en Espagne, ce qui signifie que le SEO Google et Google Ads sont le focus principal pour la plupart des entreprises ciblant les clients espagnols."}
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-primary-600 mb-4">
            {isEn ? "How search engines rank content" : "Comment les moteurs de recherche classent le contenu"}
          </h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {isEn ? "Search engines rank content using complex algorithms with hundreds of factors. The main ranking signals for Google include: relevance (does the page match the intent behind the search query?), authority (do other trustworthy websites link to this page?), page experience (does the page load fast, work on mobile and provide a good user experience?), and content quality (is the content accurate, comprehensive and written for humans rather than search engines?)." : "Les moteurs de recherche classent le contenu à l'aide d'algorithmes complexes avec des centaines de facteurs. Les principaux signaux de classement pour Google incluent : la pertinence (la page correspond-elle à l'intention derrière la requête de recherche ?), l'autorité (d'autres sites web fiables font-ils des liens vers cette page ?), l'expérience de page (la page se charge-t-elle vite, fonctionne-t-elle sur mobile et offre-t-elle une bonne expérience utilisateur ?), et la qualité du contenu (le contenu est-il précis, complet et écrit pour les humains plutôt que pour les moteurs de recherche ?)."}
          </p>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {isEn ? "Search engines are increasingly incorporating AI into their products. Google's AI Overviews (formerly Search Generative Experience) now appear at the top of many search result pages, providing AI-generated summaries that answer queries without requiring a click to any website. This is prompting the emergence of GEO (Generative Engine Optimisation) as a discipline — ensuring your brand appears as a cited source in these AI-generated responses." : "Les moteurs de recherche intègrent de plus en plus l'IA dans leurs produits. Les AI Overviews de Google (anciennement Search Generative Experience) apparaissent maintenant en haut de nombreuses pages de résultats, fournissant des résumés générés par IA qui répondent aux requêtes sans nécessiter un clic vers un site web. Cela pousse l'émergence du GEO (Optimisation pour Moteurs Génératifs) comme discipline — s'assurer que votre marque apparaît comme source citée dans ces réponses générées par IA."}
          </p>
        </section>

        <BlogBanner variant="default" />
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
      <RelatedArticles category="Digital Marketing" />
    </>
  );
}
