import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ContactForm } from "@/components/ContactForm";
import { RelatedArticles } from "@/components/RelatedArticles";
import { alternatesFor } from "@/lib/i18n/routes";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const isEn = lang === "en";
  return {
    title: isEn
      ? "Web Design in Barcelona: A Guide to Hiring the Right Agency"
      : "Création de Site Web à Barcelone : Guide pour Bien Choisir",
    description: isEn
      ? "Guide to hiring web design in Barcelona. Indicative pricing, what a professional website must include, how to compare agencies and mistakes that cost you clients."
      : "Guide pour faire appel à une agence web à Barcelone. Prix indicatifs, ce que doit inclure un site professionnel, comment comparer les agences et les erreurs à éviter.",
    alternates: alternatesFor(`/${lang}/web-design-barcelona/`) ?? {
      canonical: `https://www.mktweb360.com/${lang}/web-design-barcelona/`,
    },
    openGraph: {
      title: isEn
        ? "Web Design in Barcelona: A Guide to Hiring the Right Agency | Mkt Web 360"
        : "Création de Site Web à Barcelone : Guide pour Bien Choisir | Mkt Web 360",
      description: isEn
        ? "Indicative pricing, what to include, how to compare agencies and mistakes to avoid when hiring web design in Barcelona."
        : "Prix indicatifs, ce qu'il faut inclure, comment comparer les agences et les erreurs à éviter pour votre site web à Barcelone.",
    },
  };
}

export default async function Page({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const isEn = lang === "en";

  const faqs = isEn
    ? [
        {
          q: "How much does a professional web design cost in Barcelona?",
          a: "Prices vary by complexity. A professional corporate website with technical SEO included starts from £790/€790 at specialist agencies. Sites with advanced features, ecommerce or specific integrations are quoted individually. In Barcelona, mid-size and large agencies charge more, but quality options at competitive prices exist by working with specialist agencies outside the city.",
        },
        {
          q: "How long does it take to have a professional website ready?",
          a: "The usual timeframe for a corporate website is 3 to 5 weeks from project start, depending on how quickly the client provides content. More complex sites or ecommerce can require 6 to 10 weeks. The key is a structured process with partial deliveries to validate progress.",
        },
        {
          q: "What technology is best for a business website in Barcelona?",
          a: "For most businesses, WordPress is the most suitable platform: flexible, well-supported, with integrable technical SEO and autonomous management without technical knowledge. For projects with specific performance requirements or very advanced features, Next.js or other technologies may be more appropriate.",
        },
        {
          q: "Is SEO included in professional web design?",
          a: "Technical SEO must be included from the design stage: URL structure, page speed, schema markup, metadata and mobile optimisation. Ongoing Google positioning — link building, SEO content, keyword strategy — is a separate service that complements the website to achieve long-term organic results.",
        },
      ]
    : [
        {
          q: "Combien coûte un design web professionnel à Barcelone ?",
          a: "Les prix varient selon la complexité. Un site corporatif professionnel avec référencement technique inclus commence à partir de 790 € dans les agences spécialisées. Les sites avec des fonctionnalités avancées, de l'ecommerce ou des intégrations spécifiques ont un devis personnalisé. À Barcelone, les agences de taille moyenne et grande sont plus chères, mais des options de qualité à prix compétitifs existent en travaillant avec des agences spécialisées hors de la ville.",
        },
        {
          q: "Combien de temps faut-il pour avoir un site web professionnel prêt ?",
          a: "Le délai habituel pour un site corporatif est de 3 à 5 semaines à partir du début du projet, selon la rapidité à laquelle le client fournit les contenus. Les sites plus complexes ou avec de l'ecommerce peuvent nécessiter 6 à 10 semaines. La clé est un processus structuré avec des livraisons partielles pour valider l'avancement.",
        },
        {
          q: "Quelle technologie est la meilleure pour un site d'entreprise à Barcelone ?",
          a: "Pour la plupart des entreprises, WordPress est la plateforme la plus adaptée : flexible, bien supportée, avec un SEO technique intégrable et une gestion autonome sans connaissances techniques. Pour des projets avec des exigences spécifiques de performance ou des fonctionnalités très avancées, Next.js ou d'autres technologies peuvent être plus appropriés.",
        },
        {
          q: "Le SEO est-il inclus dans la conception web professionnelle ?",
          a: "Le SEO technique doit être inclus dès la conception : structure des URL, vitesse de chargement, schema markup, métadonnées et optimisation mobile. Le positionnement continu sur Google — link building, contenu SEO, stratégie de mots-clés — est un service séparé qui complète le site pour obtenir des résultats organiques à long terme.",
        },
      ];

  return (
    <>
      <div className="max-w-3xl mx-auto px-4 py-12">
        <Breadcrumbs
          crumbs={[
            { label: isEn ? "Home" : "Accueil", href: `/${lang}/` },
            { label: "Blog", href: `/${lang}/blog/` },
            { label: isEn ? "Web design Barcelona" : "Création web Barcelone" },
          ]}
        />
        <p className="text-sm text-accent-500 font-semibold mb-2">
          {isEn ? "Local SEO" : "SEO Local"}
        </p>
        <h1 className="text-4xl font-bold text-primary-600 mb-4 leading-tight">
          {isEn
            ? "Web design in Barcelona: what you need to know before hiring an agency or freelancer"
            : "Création de site web à Barcelone : ce que vous devez savoir avant de choisir une agence ou un freelance"}
        </h1>
        <p className="text-xl text-gray-500 mb-8 leading-relaxed">
          {isEn
            ? "Barcelona has one of the most active web design scenes in Spain, with hundreds of agencies and freelancers at different levels. This guide helps you navigate that market, evaluate proposals and make an informed decision."
            : "Barcelone dispose de l'une des scènes de création web les plus actives d'Espagne, avec des centaines d'agences et de freelances à différents niveaux. Ce guide vous aide à naviguer dans ce marché, à évaluer les propositions et à prendre une décision éclairée."}
        </p>

        <h2 className="text-2xl font-bold text-primary-600 mt-10 mb-4">
          {isEn
            ? "The web design market in Barcelona: what you will find"
            : "Le marché de la création web à Barcelone : ce que vous trouverez"}
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          {isEn
            ? "Barcelona concentrates a very developed creative and technology ecosystem. The city has a long tradition in graphic and industrial design that has transferred to the digital world, generating a web design market with a high concentration of creative talent. This is an advantage for the client because there are many options, but it can also make the choice difficult when all the portfolio websites \"look good\"."
            : "Barcelone concentre un écosystème créatif et technologique très développé. La ville a une longue tradition en design graphique et industriel qui s'est transférée au monde numérique, générant un marché de création web avec une forte concentration de talent créatif. C'est un avantage pour le client car il y a beaucoup d'options, mais cela peut aussi rendre le choix difficile quand tous les sites du portfolio « ont l'air bien »."}
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          {isEn
            ? "The price range in Barcelona is very wide: from £800–£1,500/€800–€1,500 for WordPress template sites with basic customisation to £20,000–£50,000/€20,000–€50,000 for complex digital design projects with custom development. Most Barcelona SMEs find appropriate projects in the £2,500–£8,000/€2,500–€8,000 range for a professional corporate website with technical SEO included."
            : "La fourchette de prix à Barcelone est très large : de 800 à 1 500 € pour des sites WordPress sur modèle avec personnalisation basique, jusqu'à 20 000 à 50 000 € pour des projets de design numérique complexes avec développement sur mesure. La plupart des PME barcelonaises trouvent des projets adaptés dans la fourchette de 2 500 à 8 000 € pour un site corporatif professionnel avec référencement technique inclus."}
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          {isEn
            ? "A factor to bear in mind in Barcelona is multilingualism. Many agencies work in Catalan, Spanish and English. If you need a website in Catalan and Spanish — essential for businesses with a local audience — make sure the team has the capacity to handle bilingual content correctly from a technical standpoint (URLs, hreflang, content management)."
            : "Un facteur à prendre en compte à Barcelone est le multilinguisme. Beaucoup d'agences travaillent en catalan, espagnol et anglais. Si vous avez besoin d'un site en catalan et en espagnol — indispensable pour les entreprises avec une audience locale — assurez-vous que l'équipe a la capacité de gérer le contenu bilingue correctement d'un point de vue technique (URL, hreflang, gestion du contenu)."}
        </p>

        <h2 className="text-2xl font-bold text-primary-600 mt-10 mb-4">
          {isEn
            ? "What a professional website must always include in 2026"
            : "Ce que doit toujours inclure un site web professionnel en 2026"}
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          {isEn
            ? "Regardless of city or budget, a professional website in 2026 must meet minimum standards that go beyond visual design. If the proposal you receive does not include these elements, or does not mention them as part of the project, it is a signal that the result may not meet your commercial expectations."
            : "Quelle que soit la ville ou le budget, un site web professionnel en 2026 doit respecter des standards minimaux qui vont au-delà du design visuel. Si la proposition que vous recevez n'inclut pas ces éléments, ou ne les mentionne pas comme faisant partie du projet, c'est un signal que le résultat pourrait ne pas répondre à vos attentes commerciales."}
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          <strong>{isEn ? "Mobile-first design:" : "Design mobile-first :"}</strong>{" "}
          {isEn
            ? "More than 60% of web traffic in Spain comes from mobile devices. A website that \"adapts to mobile\" is not enough — it must be designed thinking mobile experience first. Ask to see how it looks on an iPhone and Android before approving the design."
            : "Plus de 60 % du trafic web en Espagne provient des appareils mobiles. Un site qui « s'adapte au mobile » ne suffit pas — il doit être conçu en pensant d'abord à l'expérience mobile. Demandez à voir à quoi il ressemble sur un iPhone et un Android avant d'approuver le design."}
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          <strong>{isEn ? "Basic technical SEO:" : "SEO technique de base :"}</strong>{" "}
          {isEn
            ? "correct URL structure, unique meta tags, properly hierarchical H1-H6 tags, XML sitemap, robots.txt, SSL certificate and optimised page speed. Without this, the website may be visually beautiful but invisible to Google."
            : "structure d'URL correcte, balises méta uniques, balises H1-H6 bien hiérarchisées, sitemap XML, robots.txt, certificat SSL et vitesse de chargement optimisée. Sans cela, le site peut être visuellement magnifique mais invisible pour Google."}
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          <strong>{isEn ? "Core Web Vitals:" : "Core Web Vitals :"}</strong>{" "}
          {isEn
            ? "Google's performance metrics (LCP, INP, CLS) affect positioning. A slow or visually jumpy site during load can be penalised in Google compared to competitors with better performance. Ask them to include a PageSpeed Insights test before final delivery."
            : "Les métriques de performance de Google (LCP, INP, CLS) affectent le positionnement. Un site lent ou avec des sauts visuels pendant le chargement peut être pénalisé sur Google par rapport aux concurrents avec de meilleures performances. Demandez qu'ils incluent un test PageSpeed Insights avant la livraison finale."}
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          <strong>{isEn ? "Working contact forms:" : "Formulaires de contact fonctionnels :"}</strong>{" "}
          {isEn
            ? "it seems obvious, but a surprising percentage of delivered websites have forms that don't send or that send to unmonitored email addresses. Test the form from an external email before giving final approval."
            : "cela semble évident, mais un pourcentage surprenant de sites livrés ont des formulaires qui n'envoient pas ou qui envoient à des emails non surveillés. Testez le formulaire depuis un email externe avant de donner votre approbation finale."}
        </p>

        <h2 className="text-2xl font-bold text-primary-600 mt-10 mb-4">
          {isEn
            ? "Agency vs. freelancer in Barcelona: when to choose each option"
            : "Agence vs. freelance à Barcelone : quand choisir chaque option"}
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          {isEn
            ? "The choice between agency and freelancer in Barcelona depends primarily on the size and complexity of the project, the available budget and the need for ongoing post-launch support."
            : "Le choix entre une agence et un freelance à Barcelone dépend principalement de la taille et de la complexité du projet, du budget disponible et du besoin de support continu après le lancement."}
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          <strong>{isEn ? "A freelancer makes sense when:" : "Un freelance a du sens quand :"}</strong>{" "}
          {isEn
            ? "the project has a well-defined, limited scope; the budget is tight (freelancers have lower fixed costs and can be more price-competitive); or when priority is direct contact with the person doing the work."
            : "le projet a une portée bien définie et limitée ; le budget est serré (les freelances ont moins de charges fixes et peuvent être plus compétitifs en prix) ; ou quand la priorité est le contact direct avec la personne qui fait le travail."}
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          <strong>{isEn ? "An agency makes sense when:" : "Une agence a du sens quand :"}</strong>{" "}
          {isEn
            ? "the project is complex and requires multiple specialists (designer, developer, SEO expert, copywriter); you need continuity guarantees; or when the project also includes digital marketing management after launch."
            : "le projet est complexe et nécessite plusieurs spécialistes (designer, développeur, expert SEO, rédacteur) ; vous avez besoin de garanties de continuité ; ou quand le projet inclut également la gestion du marketing digital après le lancement."}
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          {isEn
            ? "In Barcelona there are also intermediate-sized design studios (3–8 people) that combine the best of both worlds: team specialisation from an agency with the personal attention of a freelancer. For projects between £3,000–£10,000/€3,000–€10,000, this type of studio is usually the best value for money."
            : "À Barcelone, il y a aussi des studios de design de taille intermédiaire (3 à 8 personnes) qui combinent le meilleur des deux mondes : la spécialisation de l'équipe d'une agence avec le contact proche d'un freelance. Pour des projets entre 3 000 et 10 000 €, ce type de studio offre généralement le meilleur rapport qualité-prix."}
        </p>

        <h2 className="text-2xl font-bold text-primary-600 mt-10 mb-4">
          {isEn
            ? "Indicative pricing for web design in Barcelona"
            : "Prix indicatifs pour la création web à Barcelone"}
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          {isEn
            ? "Prices in Barcelona are generally 15–25% higher than the national average due to the higher cost of living and office rents. However, the average quality level is also higher, especially in visual design and UX."
            : "Les prix à Barcelone sont généralement 15 à 25 % supérieurs à la moyenne nationale en raison du coût de la vie plus élevé et des loyers de bureaux plus importants. Cependant, le niveau de qualité moyen est également supérieur, notamment en design visuel et en UX."}
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          <strong>{isEn ? "Basic corporate website (4–6 pages, WordPress, custom template):" : "Site corporatif basique (4-6 pages, WordPress, modèle personnalisé) :"}</strong>{" "}
          {isEn
            ? "£1,500–£3,500/€1,500–€3,500. Includes brand-adapted visual design, basic content, elementary technical SEO and management training."
            : "1 500 à 3 500 €. Inclut un design visuel adapté à la marque, un contenu de base, un référencement technique élémentaire et une formation à la gestion."}
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          <strong>{isEn ? "Professional corporate website (8–15 pages, custom design, full SEO):" : "Site corporatif professionnel (8-15 pages, design personnalisé, SEO complet) :"}</strong>{" "}
          {isEn
            ? "£4,000–£10,000/€4,000–€10,000. Includes unique non-template design, optimised information architecture, advanced technical SEO, content writing, CRM or marketing tool integration and configured analytics."
            : "4 000 à 10 000 €. Inclut un design unique non basé sur un modèle, une architecture de l'information optimisée, un SEO technique avancé, la rédaction de contenus, l'intégration CRM ou outils marketing et l'analytique configurée."}
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          <strong>{isEn ? "Online shop (WooCommerce or Shopify, up to 200 products):" : "Boutique en ligne (WooCommerce ou Shopify, jusqu'à 200 produits) :"}</strong>{" "}
          {isEn
            ? "£3,000–£8,000/€3,000–€8,000. The range depends on the number of products, variant complexity, POS or ERP integrations and whether an existing catalogue migration is included."
            : "3 000 à 8 000 €. La fourchette dépend du nombre de produits, de la complexité des variantes, des intégrations TPV ou ERP et si la migration d'un catalogue existant est incluse."}
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          <strong>{isEn ? "Advanced projects with custom development:" : "Projets avancés avec développement sur mesure :"}</strong>{" "}
          {isEn
            ? "from £15,000/€15,000, with no upper limit depending on complexity. Web applications, complex ecommerce platforms, intranets, B2B portals."
            : "à partir de 15 000 €, sans limite supérieure selon la complexité. Applications web, plateformes ecommerce complexes, intranets, portails B2B."}
        </p>

        <h2 className="text-2xl font-bold text-primary-600 mt-10 mb-4">
          {isEn
            ? "How to evaluate a web design portfolio"
            : "Comment évaluer un portfolio de création web"}
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          {isEn
            ? "The portfolio is the main evaluation criterion for a web design agency or freelancer, but you need to know how to read it. A visually attractive portfolio does not guarantee that the websites shown work well technically, rank on Google or convert visits into clients."
            : "Le portfolio est le principal critère d'évaluation d'une agence ou d'un freelance en création web, mais il faut savoir le lire. Un portfolio visuellement attrayant ne garantit pas que les sites présentés fonctionnent bien techniquement, se positionnent sur Google ou convertissent les visites en clients."}
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          {isEn
            ? "When evaluating a portfolio, do these checks: visit the portfolio websites from your mobile to see how they work on a small screen; enter the URL in PageSpeed Insights to see the real loading speed; search on Google for the name of one of the portfolio companies to see their positioning; and if possible, contact a portfolio client to ask them directly about their experience."
            : "Lorsque vous évaluez un portfolio, faites ces vérifications : visitez les sites du portfolio depuis votre mobile pour voir comment ils fonctionnent sur petit écran ; entrez l'URL dans PageSpeed Insights pour voir la vitesse réelle ; cherchez sur Google le nom d'une des entreprises du portfolio pour voir son positionnement ; et si possible, contactez un client du portfolio pour lui demander directement son expérience."}
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          {isEn
            ? "Also ask to see projects in the same sector as yours. The web design for a fashion shop has very different requirements to that of a dental clinic or law firm. An agency with relevant projects in your sector will have a stronger starting point for understanding your business's specific needs."
            : "Demandez également à voir des projets dans le même secteur que le vôtre. Le design web d'une boutique de mode a des exigences très différentes de celles d'une clinique dentaire ou d'un cabinet juridique. Une agence avec des projets pertinents dans votre secteur aura un meilleur point de départ pour comprendre les besoins spécifiques de votre entreprise."}
        </p>

        <section className="py-12 px-4 bg-gray-50 rounded-2xl mt-10">
          <h2 className="text-3xl font-bold text-primary-600 mb-8">
            {isEn
              ? "Frequently asked questions about web design in Barcelona"
              : "Questions fréquentes sur la création web à Barcelone"}
          </h2>
          <div className="space-y-6">
            {faqs.map((faq) => (
              <div key={faq.q}>
                <h3 className="text-xl font-semibold text-primary-700 mb-2">{faq.q}</h3>
                <p className="text-gray-600">{faq.a}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-primary-600 text-white rounded-2xl p-8 mt-12">
          <h2 className="text-2xl font-bold mb-4">
            {isEn
              ? "Do you need help with your digital marketing?"
              : "Vous avez besoin d'aide avec votre marketing digital ?"}
          </h2>
          <p className="text-primary-200 mb-6">
            {isEn
              ? "Tell us about your project and we will get back to you within 24 hours."
              : "Parlez-nous de votre projet et nous vous répondrons en moins de 24 heures."}
          </p>
          <div className="bg-white rounded-xl p-6">
            <ContactForm formType="blog" />
          </div>
        </section>
      </div>
      <RelatedArticles category={isEn ? "Local SEO" : "SEO Local"} />
    </>
  );
}
