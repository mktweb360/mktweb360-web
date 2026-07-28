import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ContactForm } from "@/components/ContactForm";
import { RelatedArticles } from "@/components/RelatedArticles";
import { alternatesFor } from "@/lib/i18n/routes";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const isEn = lang === "en";
  return {
    title: isEn
      ? "Web Design for SMEs — What Your Website Needs to Sell"
      : "Design Web pour PME — Ce que Votre Site Doit Avoir pour Vendre",
    description: isEn
      ? "Web design guide for SMEs. Which elements are essential, which mistakes to avoid and how to make your website generate clients consistently."
      : "Guide de design web pour les PME. Quels éléments sont indispensables, quelles erreurs éviter et comment faire en sorte que votre site génère des clients de façon constante.",
    alternates: alternatesFor(`/${lang}/web-design-smes/`) ?? {
      canonical: `https://www.mktweb360.com/${lang}/web-design-smes/`,
    },
    openGraph: {
      title: isEn
        ? "Web Design for SMEs — What Your Website Needs to Sell | Mkt Web 360"
        : "Design Web pour PME — Ce que Votre Site Doit Avoir pour Vendre | Mkt Web 360",
      description: isEn
        ? "Web design guide for SMEs. Which elements are essential, which mistakes to avoid and how to make your website generate clients consistently."
        : "Guide de design web pour les PME. Quels éléments sont indispensables, quelles erreurs éviter et comment faire en sorte que votre site génère des clients de façon constante.",
    },
  };
}

export default async function Page({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const isEn = lang === "en";

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: isEn
      ? "Web Design for SMEs — What Your Website Needs to Sell | Mkt Web 360"
      : "Design Web pour PME — Ce que Votre Site Doit Avoir pour Vendre | Mkt Web 360",
    provider: { "@type": "Organization", name: "Mkt Web 360 SLU", url: "https://www.mktweb360.com" },
    description: isEn
      ? "Web design guide for SMEs. Which elements are essential, which mistakes to avoid and how to make your website generate clients consistently."
      : "Guide de design web pour les PME. Quels éléments sont indispensables, quelles erreurs éviter et comment faire en sorte que votre site génère des clients de façon constante.",
    areaServed: isEn ? "Spain" : "Espagne",
    url: `https://www.mktweb360.com/${lang}/web-design-smes/`,
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <div className="max-w-3xl mx-auto px-4 py-12">
        <Breadcrumbs
          crumbs={[
            { label: isEn ? "Home" : "Accueil", href: `/${lang}/` },
            { label: "Blog", href: `/${lang}/blog/` },
            { label: isEn ? "Web Design for SMEs" : "Design web PME" },
          ]}
        />
        <p className="text-sm text-accent-500 font-semibold mb-2">
          {isEn ? "Web Design" : "Design Web"}
        </p>
        <h1 className="text-4xl font-bold text-primary-600 mb-4 leading-tight">
          {isEn
            ? "Web design for SMEs: what your website needs to convert visitors into clients"
            : "Design web pour les PME : ce que votre site doit avoir pour convertir les visiteurs en clients"}
        </h1>
        <p className="text-xl text-gray-500 mb-8 leading-relaxed">
          {isEn
            ? "A good-looking website that does not sell is useless. This guide explains which elements are essential, which mistakes most SMEs make and how to make your website work for your business 24 hours a day."
            : "Un beau site web qui ne vend pas ne sert à rien. Ce guide explique quels éléments sont indispensables, quelles erreurs commettent la plupart des PME et comment faire en sorte que votre site travaille pour votre entreprise 24 heures sur 24."}
        </p>

        <h2 className="text-2xl font-bold text-primary-600 mt-10 mb-4">
          {isEn
            ? "The 7 elements that no SME website can be without"
            : "Les 7 éléments indispensables sur le site d'une PME"}
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          {isEn
            ? "An effective website for an SME is not the most beautiful or the most technically sophisticated. It is the one that answers the right questions in the right order and makes it as easy as possible for the visitor to take action."
            : "Un site web efficace pour une PME n'est pas le plus beau ni le plus élaboré techniquement. C'est celui qui répond aux bonnes questions dans le bon ordre et facilite au maximum le passage à l'action du visiteur."}
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          <strong>{isEn ? "1. Clear value proposition on the homepage:" : "1. Proposition de valeur claire sur la page d'accueil :"}</strong>{" "}
          {isEn
            ? "Within the first 5 seconds, the visitor must understand what you offer, for whom and why they should choose you. If your homepage says 'Welcome to our company' or describes what you do in generic terms, you are missing opportunities."
            : "Dans les 5 premières secondes, le visiteur doit comprendre ce que vous offrez, pour qui et pourquoi il devrait vous choisir. Si votre page d'accueil dit « Bienvenue dans notre entreprise » ou décrit ce que vous faites en termes génériques, vous manquez des opportunités."}
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          <strong>{isEn ? "2. Visible and repeated CTA:" : "2. CTA visible et répété :"}</strong>{" "}
          {isEn
            ? "The 'contact', 'request a quote' or 'call now' button must be visible without scrolling on the homepage and repeated at strategic points on every page. Many SME websites have the contact information buried in the footer."
            : "Le bouton « contacter », « demander un devis » ou « appeler maintenant » doit être visible sans défilement sur la page d'accueil et répété à des endroits stratégiques sur chaque page. Beaucoup de sites de PME ont les coordonnées enterrées dans le pied de page."}
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          <strong>{isEn ? "3. Social proof:" : "3. Preuve sociale :"}</strong>{" "}
          {isEn
            ? "Client reviews, logos of companies you have worked with, number of projects completed, years of experience. Social proof converts undecided visitors into clients because it reduces perceived risk."
            : "Avis de clients, logos d'entreprises avec lesquelles vous avez travaillé, nombre de projets réalisés, années d'expérience. La preuve sociale convertit les visiteurs indécis en clients car elle réduit le risque perçu."}
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          <strong>{isEn ? "4. Detailed service pages:" : "4. Pages de service détaillées :"}</strong>{" "}
          {isEn
            ? "Each service or business line should have its own page with a detailed description, client benefits, the working process and a specific CTA. Generic service pages do not rank well in Google nor do they convert visitors effectively."
            : "Chaque service ou ligne métier doit avoir sa propre page avec une description détaillée, les avantages pour le client, le processus de travail et un CTA spécifique. Les pages de service génériques ne se positionnent pas bien dans Google et ne convertissent pas bien les visiteurs non plus."}
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          <strong>{isEn ? "5. Team or owner information:" : "5. Informations sur l'équipe ou le propriétaire :"}</strong>{" "}
          {isEn
            ? "SMEs sell trust and personal relationships as much as services. An 'About us' section with real photos of the team humanises the company and builds trust, especially for high-involvement services."
            : "Les PME vendent la confiance et les relations personnelles autant que des services. Une section « Qui sommes-nous » avec de vraies photos de l'équipe humanise l'entreprise et génère de la confiance, surtout pour les services à forte implication."}
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          <strong>{isEn ? "6. Working contact form:" : "6. Formulaire de contact fonctionnel :"}</strong>{" "}
          {isEn
            ? "It seems obvious, but there are tens of thousands of websites with contact forms that do not work or that send messages to an email that nobody checks. Test your form from different devices regularly."
            : "Cela semble évident, mais il existe des dizaines de milliers de sites web avec des formulaires de contact qui ne fonctionnent pas ou qui envoient des messages à un email que personne ne consulte. Testez régulièrement votre formulaire depuis différents appareils."}
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          <strong>{isEn ? "7. Clear local information:" : "7. Informations locales claires :"}</strong>{" "}
          {isEn
            ? "For businesses with a physical presence or that serve a specific geographic area, the address, phone number and coverage area must be easily visible. This is especially important for local SEO."
            : "Pour les entreprises avec une présence physique ou qui servent une zone géographique spécifique, l'adresse, le numéro de téléphone et la zone de couverture doivent être facilement visibles. C'est particulièrement important pour le SEO local."}
        </p>

        <h2 className="text-2xl font-bold text-primary-600 mt-10 mb-4">
          {isEn
            ? "Speed and performance: why it matters more than design"
            : "Vitesse et performance : pourquoi c'est plus important que le design"}
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          {isEn
            ? "A slow website is a website that does not convert. Google knows it, users know it (even if they do not articulate it that way) and the data confirms it: every additional second of loading time reduces conversions by approximately 7%. A website that takes 4 seconds to load may be losing 20% of its potential conversions compared to one that loads in 1 second."
            : "Un site web lent est un site web qui ne convertit pas. Google le sait, les utilisateurs le savent (même s'ils ne l'expriment pas ainsi) et les données le confirment : chaque seconde supplémentaire de temps de chargement réduit les conversions d'environ 7%. Un site qui met 4 secondes à charger peut perdre 20% de ses conversions potentielles par rapport à un site qui charge en 1 seconde."}
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          {isEn
            ? "Google's Core Web Vitals (LCP, INP and CLS) are performance metrics that also affect search rankings. A website that does not meet the minimum thresholds for these metrics has an implicit penalty in Google rankings compared to faster websites with similar content."
            : "Les Core Web Vitals de Google (LCP, INP et CLS) sont des métriques de performance qui affectent également le positionnement dans les recherches. Un site web qui ne répond pas aux seuils minimaux de ces métriques a une pénalité implicite dans les classements Google par rapport aux sites plus rapides avec un contenu similaire."}
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          {isEn
            ? "The factors that most negatively affect speed are: unoptimised images (the most common error), poor or shared hosting, excessive third-party plugins and scripts, and unminified CSS/JavaScript code. Most of these problems can be solved without redesigning the website."
            : "Les facteurs qui affectent le plus négativement la vitesse sont : les images non optimisées (l'erreur la plus courante), un hébergement de mauvaise qualité ou partagé, l'excès de plugins et scripts tiers, et le code CSS/JavaScript non minifié. La plupart de ces problèmes se résolvent sans reconcevoir le site web."}
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          {isEn
            ? "You can measure your website speed with Google PageSpeed Insights (free) and get a prioritised list of improvements. Scores above 80 on mobile are considered good. Below 50 on mobile is a serious problem that is likely affecting both your SEO rankings and your conversion rate."
            : "Vous pouvez mesurer la vitesse de votre site avec Google PageSpeed Insights (gratuit) et obtenir une liste priorisée d'améliorations. Les scores supérieurs à 80 sur mobile sont considérés comme bons. En dessous de 50 sur mobile est un problème sérieux qui affecte probablement à la fois votre positionnement SEO et votre taux de conversion."}
        </p>

        <h2 className="text-2xl font-bold text-primary-600 mt-10 mb-4">
          {isEn ? "Technical SEO from day one" : "SEO technique dès le premier jour"}
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          {isEn
            ? "Technical SEO is not something added to a website after it is built — it must be integrated from the initial design. Building a website ignoring technical SEO and then trying to 'fix it' is much more expensive and complex than doing it right from the start."
            : "Le SEO technique n'est pas quelque chose que l'on ajoute à un site après sa construction — il doit être intégré dès la conception initiale. Construire un site web en ignorant le SEO technique et ensuite essayer de le « corriger » est beaucoup plus coûteux et complexe que de le faire correctement dès le départ."}
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          {isEn
            ? "The basic technical elements that every SME website must have are: clean and descriptive URL structure (not '/page?id=123' but '/services/plumbing/'), unique title tags and meta descriptions for each page, correct hierarchical headings (a single H1 per page, H2 for sections), alternative text on images, XML sitemap and correctly configured robots.txt file."
            : "Les éléments techniques de base que tout site web de PME doit avoir sont : une structure d'URL propre et descriptive (pas « /page?id=123 » mais « /services/plomberie/ »), des balises de titre et des meta descriptions uniques pour chaque page, des titres hiérarchiques corrects (un seul H1 par page, H2 pour les sections), du texte alternatif sur les images, un sitemap XML et un fichier robots.txt correctement configuré."}
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          {isEn
            ? "HTTPS (SSL certificate) is mandatory today. Browsers mark websites without HTTPS as 'not secure' and Google penalises them in rankings. Most modern hosting providers offer free SSL certificates with Let's Encrypt."
            : "Le HTTPS (certificat SSL) est obligatoire aujourd'hui. Les navigateurs marquent les sites sans HTTPS comme « non sécurisés » et Google les pénalise dans les classements. La plupart des hébergeurs modernes offrent des certificats SSL gratuits avec Let's Encrypt."}
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          {isEn
            ? "For local businesses, structured data (Schema.org) is particularly valuable. Implementing the LocalBusiness markup with your name, address, phone number and opening hours helps Google understand and correctly display your information in local search results."
            : "Pour les entreprises locales, les données structurées (Schema.org) sont particulièrement précieuses. Implémenter le balisage LocalBusiness avec votre nom, adresse, numéro de téléphone et horaires d'ouverture aide Google à comprendre et afficher correctement vos informations dans les résultats de recherche locale."}
        </p>

        <h2 className="text-2xl font-bold text-primary-600 mt-10 mb-4">
          {isEn ? "Web copywriting: how to speak to your ideal client" : "Copywriting web : comment parler à votre client idéal"}
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          {isEn
            ? "Copywriting is the text on your website. And it is probably the most underestimated element in SME web design. Many websites are designed visually to a high standard but fail because the text talks about the company instead of talking to the client."
            : "Le copywriting est le texte de votre site web. Et c'est probablement l'élément le plus sous-estimé dans le design web des PME. Beaucoup de sites web sont conçus visuellement de façon impeccable mais échouent parce que le texte parle de l'entreprise au lieu de parler au client."}
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          {isEn
            ? "The most important rule of copywriting for SMEs is to orient the text towards the client's benefit, not the service's features. Instead of 'We offer plumbing services with 15 years of experience', write 'Your problem fixed today, no surprises on the price'. The former talks about the company; the latter talks about the client's problem and how it is resolved."
            : "La règle la plus importante du copywriting pour les PME est d'orienter le texte vers le bénéfice du client, pas vers les caractéristiques du service. Au lieu de « Nous offrons des services de plomberie avec 15 ans d'expérience », écrivez « Votre problème résolu aujourd'hui, sans mauvaises surprises sur le prix ». Le premier parle de l'entreprise ; le second parle du problème du client et de la façon dont il est résolu."}
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          {isEn
            ? "Use the language your client uses, not the technical language of your sector. If your client searches for 'fix leak' and you use 'repair of roof waterproofing infiltrations', you are speaking different languages — and losing SEO rankings as well as clarity."
            : "Utilisez le langage que votre client utilise, pas le langage technique de votre secteur. Si votre client cherche « réparer une fuite » et que vous utilisez « réparation d'infiltrations d'étanchéité de toiture », vous parlez des langues différentes — et vous perdez du positionnement SEO en plus de la clarté."}
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          {isEn
            ? "The F-shaped reading pattern that users follow on the web (they read the first lines, then scan the left side) means that the first words of each paragraph must be the most informative. Users rarely read all the text; they scan in search of words that confirm they are in the right place."
            : "Le schéma de lecture en F que suivent les utilisateurs sur le web (ils lisent les premières lignes, puis scannent le côté gauche) signifie que les premiers mots de chaque paragraphe doivent être les plus informatifs. Les utilisateurs lisent rarement tout le texte ; ils scannent à la recherche des mots qui confirment qu'ils sont au bon endroit."}
        </p>

        <h2 className="text-2xl font-bold text-primary-600 mt-10 mb-4">
          {isEn ? "CTAs that convert: where to place them and how to write them" : "CTAs qui convertissent : où les placer et comment les rédiger"}
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          {isEn
            ? "The Call to Action (CTA) is the button or link that invites the user to take the next step. It is the element that converts a visitor into a lead. A poorly written or poorly positioned CTA can significantly reduce a website's conversions, regardless of how good the rest of the content is."
            : "Le Call to Action (CTA) est le bouton ou le lien qui invite l'utilisateur à passer à l'étape suivante. C'est l'élément qui convertit un visiteur en prospect. Un CTA mal rédigé ou mal positionné peut réduire significativement les conversions d'un site, indépendamment de la qualité du reste du contenu."}
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          {isEn
            ? "In terms of position, the first CTA must be visible without scrolling on the homepage (above the fold), must be repeated after each relevant content section and must have a fixed place in the header for internal pages. For long pages, a floating or sticky button improves accessibility."
            : "En termes de position, le premier CTA doit être visible sans défilement sur la page d'accueil (au-dessus de la ligne de flottaison), doit être répété après chaque section de contenu pertinente et doit avoir une place fixe dans l'en-tête pour les pages internes. Pour les pages longues, un bouton flottant ou sticky améliore l'accessibilité."}
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          {isEn
            ? "The CTA text must be specific and action-oriented: 'Request a free quote', 'Call now', 'Check availability'. Avoid generic terms like 'More information', 'Submit' or 'Click here'. The user must know exactly what is going to happen when they click."
            : "Le texte du CTA doit être spécifique et orienté vers l'action : « Demander un devis gratuit », « Appeler maintenant », « Vérifier la disponibilité ». Évitez les termes génériques comme « Plus d'informations », « Envoyer » ou « Cliquez ici ». L'utilisateur doit savoir exactement ce qui va se passer lorsqu'il clique."}
        </p>

        <h2 className="text-2xl font-bold text-primary-600 mt-10 mb-4">
          {isEn ? "Web design errors that cost clients" : "Erreurs de design web qui coûtent des clients"}
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          <strong>{isEn ? "Website not adapted for mobile:" : "Site non adapté au mobile :"}</strong>{" "}
          {isEn
            ? "More than 60% of web traffic comes from mobile devices. A website that works well on desktop but poorly on mobile is discarding more than half of its potential visitors. It is not enough for it to 'display' on mobile — it must be comfortable to navigate and use on small screens."
            : "Plus de 60% du trafic web provient des appareils mobiles. Un site qui fonctionne bien sur ordinateur mais mal sur mobile rejette plus de la moitié de ses visiteurs potentiels. Il ne suffit pas qu'il s'affiche sur mobile — il doit être agréable à naviguer et à utiliser sur les petits écrans."}
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          <strong>{isEn ? "Image slider on the homepage:" : "Carrousel d'images sur la page d'accueil :"}</strong>{" "}
          {isEn
            ? "Sliders or image carousels on the homepage are one of the most widespread and least effective design elements. Statistics show that less than 1% of users click on slides other than the first one. They are slow, distracting and do not convert. A static hero with a good headline and CTA works much better."
            : "Les sliders ou carrousels d'images sur la page d'accueil sont l'un des éléments de design les plus répandus et les moins efficaces. Les statistiques montrent que moins de 1% des utilisateurs cliquent sur des slides autres que le premier. Ils sont lents, distrayants et ne convertissent pas. Un hero statique avec un bon titre et un CTA fonctionne beaucoup mieux."}
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          <strong>{isEn ? "'Under construction' page or sparse content:" : "Page « en construction » ou contenu insuffisant :"}</strong>{" "}
          {isEn
            ? "A website with few pages, without valuable content and with generic information communicates disinterest. Google penalises it in SEO and users interpret it as a lack of professionalism."
            : "Un site web avec peu de pages, sans contenu de valeur et avec des informations génériques communique un désintérêt. Google le pénalise en SEO et les utilisateurs l'interprètent comme un manque de professionnalisme."}
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          <strong>{isEn ? "Contact form as the only option:" : "Formulaire de contact comme seule option :"}</strong>{" "}
          {isEn
            ? "Offer multiple ways to get in touch: form, visible phone number, email, WhatsApp. Each user has their preferred channel, and limiting options unnecessarily reduces conversions."
            : "Offrez plusieurs façons de prendre contact : formulaire, numéro de téléphone visible, email, WhatsApp. Chaque utilisateur a son canal préféré, et limiter les options réduit inutilement les conversions."}
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          <strong>{isEn ? "Not updating the website:" : "Ne pas mettre à jour le site :"}</strong>{" "}
          {isEn
            ? "A website with news from 2021, outdated opening hours or expired promotions damages trust. Your company website is the first impression for many potential clients — make sure that impression is the right one."
            : "Un site web avec des actualités de 2021, des horaires dépassés ou des promotions expirées nuit à la confiance. Le site de votre entreprise est la première impression pour de nombreux clients potentiels — assurez-vous que cette impression est la bonne."}
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
      <RelatedArticles category="Diseño Web" />
    </>
  );
}
