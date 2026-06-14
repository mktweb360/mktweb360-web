import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ContactForm } from "@/components/ContactForm";
import { BlogBanner } from "@/components/BlogBanner";
import { RelatedArticles } from "@/components/RelatedArticles";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const isEn = lang === "en";
  return {
    title: isEn ? "Link Building for SMEs — How to Get Quality Links Without Risk | Mkt Web 360" : "Link Building pour PME — Comment Obtenir des Liens de Qualité Sans Risque | Mkt Web 360",
    description: isEn ? "Link building strategies that work for SMEs. How to get quality backlinks without risking a Google penalty or wasting budget on low-quality links." : "Stratégies de link building qui fonctionnent pour les PME. Comment obtenir des backlinks de qualité sans risquer une pénalité Google ou gaspiller le budget sur des liens de faible qualité.",
    alternates: { canonical: `https://www.mktweb360.com/${lang}/link-building-for-smes/` },
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
          { label: isEn ? "Link building SMEs" : "Link building PME" },
        ]} />
        <p className="text-sm text-accent-500 font-semibold mb-2">SEO</p>
        <h1 className="text-4xl font-bold text-primary-600 mb-4 leading-tight">
          {isEn ? "Link building for SMEs: how to get quality links without risking your domain" : "Link building pour PME : comment obtenir des liens de qualité sans risquer votre domaine"}
        </h1>
        <p className="text-xl text-gray-500 mb-8 leading-relaxed">
          {isEn ? "Links from other websites remain one of Google's most important ranking signals. This guide explains how SMEs can build quality backlinks safely, without risking penalties." : "Les liens d'autres sites web restent l'un des signaux de classement les plus importants de Google. Ce guide explique comment les PME peuvent construire des backlinks de qualité en toute sécurité, sans risquer de pénalités."}
        </p>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-primary-600 mb-4">
            {isEn ? "What link building is and why it still matters" : "Qu'est-ce que le link building et pourquoi il compte encore"}
          </h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {isEn ? "Link building is the practice of acquiring hyperlinks from other websites to your own. When another website links to yours, it passes some of its authority and trustworthiness to you — a signal Google uses to evaluate how credible and important your website is. Despite years of predictions that links would diminish in importance, backlinks remain one of Google's most significant ranking factors, particularly for competitive keywords." : "Le link building est la pratique d'acquérir des hyperliens d'autres sites web vers le vôtre. Quand un autre site web pointe vers le vôtre, il vous transmet une partie de son autorité et de sa crédibilité — un signal que Google utilise pour évaluer la crédibilité et l'importance de votre site. Malgré des années de prédictions que les liens diminueraient en importance, les backlinks restent l'un des facteurs de classement les plus significatifs de Google, particulièrement pour les mots-clés compétitifs."}
          </p>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {isEn ? "For SMEs, link building is often the missing element in an otherwise solid SEO strategy. Technical SEO and content can get you to page 2 or 3 for competitive keywords, but consistent ranking improvement on page 1 often requires building more domain authority through quality backlinks. The challenge is doing this safely and efficiently, without the resources available to larger businesses or the time to pursue low-value tactics." : "Pour les PME, le link building est souvent l'élément manquant dans une stratégie SEO autrement solide. Le SEO technique et le contenu peuvent vous amener en page 2 ou 3 pour les mots-clés compétitifs, mais l'amélioration cohérente du classement en page 1 nécessite souvent de construire plus d'autorité de domaine via des backlinks de qualité. Le défi est de le faire de manière sûre et efficace, sans les ressources disponibles pour les grandes entreprises ou le temps de poursuivre des tactiques à faible valeur."}
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-primary-600 mb-4">
            {isEn ? "Types of links: which help and which hurt" : "Types de liens : lesquels aident et lesquels nuisent"}
          </h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {isEn ? "Links that help: editorial links from relevant, authoritative websites in your industry; local citations from established directories; links from local news sources, industry publications and professional associations; partner links from complementary (non-competing) businesses; and links from satisfied customers who mention you on their websites. These links are earned and relevant — they signal to Google that real websites in your ecosystem recognise you as worth linking to." : "Liens qui aident : liens éditoriaux de sites web pertinents et autoritaires dans votre secteur ; citations locales d'annuaires établis ; liens de sources d'actualités locales, publications sectorielles et associations professionnelles ; liens partenaires d'entreprises complémentaires (non concurrentes) ; et liens de clients satisfaits qui vous mentionnent sur leurs sites. Ces liens sont gagnés et pertinents — ils signalent à Google que de vrais sites dans votre écosystème vous reconnaissent comme valant la peine d'être lié."}
          </p>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {isEn ? "Links that hurt: paid links disguised as editorial content (link schemes), links from private blog networks (PBNs), low-quality directory spam (submitting to hundreds of irrelevant directories), reciprocal link exchanges ('I'll link to you if you link to me' at scale), and links from completely unrelated websites. Google's algorithms and manual review team specifically look for unnatural link patterns. The penalty for link scheme participation can be severe — rankings dropping dramatically or manual actions against your site." : "Liens qui nuisent : liens payants déguisés en contenu éditorial (schémas de liens), liens de réseaux de blogs privés (PBNs), spam de répertoires de faible qualité (soumission à des centaines d'annuaires non pertinents), échanges de liens réciproques ('je te linke si tu me linkes' à grande échelle), et liens de sites complètement non liés. Les algorithmes de Google et l'équipe de révision manuelle recherchent spécifiquement les schémas de liens non naturels. La pénalité pour la participation à des schémas de liens peut être sévère — classements chutant dramatiquement ou actions manuelles contre votre site."}
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-primary-600 mb-4">
            {isEn ? "Link building strategies for SMEs" : "Stratégies de link building pour les PME"}
          </h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {isEn ? "The most effective link building strategies for SMEs are: 1) Digital PR — creating genuinely newsworthy content (local studies, original research, expert commentary on industry news) that journalists and bloggers want to reference. 2) Expert contribution — contributing expert quotes, articles or opinions to industry publications, local news sites and relevant blogs. 3) Supplier and partner links — most businesses have suppliers, distributors and partners who could reasonably link to each other's websites. 4) Local sponsorships — sponsoring local events, sports teams or community organisations typically includes a website mention and link." : "Les stratégies de link building les plus efficaces pour les PME sont : 1) RP digitales — créer du contenu genuinement digne d'actualité (études locales, recherche originale, commentaires d'experts sur les nouvelles du secteur) que les journalistes et blogueurs veulent référencer. 2) Contribution d'expert — contribuer des citations d'experts, des articles ou des opinions à des publications sectorielles, sites d'actualités locaux et blogs pertinents. 3) Liens fournisseurs et partenaires — la plupart des entreprises ont des fournisseurs, distributeurs et partenaires qui pourraient raisonnablement se lier mutuellement. 4) Sponsorings locaux — sponsoriser des événements locaux, équipes sportives ou organisations communautaires inclut généralement une mention et un lien de site web."}
          </p>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {isEn ? "Broken link building: find relevant websites in your sector that have broken links (pointing to pages that no longer exist) and offer your content as a replacement. Tools like Ahrefs or Check My Links can help identify these opportunities. Resource page link building: identify websites that curate lists of resources or recommended service providers in your sector and reach out to be included. These two tactics combined can generate quality links at relatively low time investment." : "Link building de liens cassés : trouvez des sites web pertinents dans votre secteur qui ont des liens cassés (pointant vers des pages qui n'existent plus) et offrez votre contenu comme remplacement. Des outils comme Ahrefs ou Check My Links peuvent aider à identifier ces opportunités. Link building de pages de ressources : identifiez les sites web qui organisent des listes de ressources ou de prestataires de services recommandés dans votre secteur et contactez-les pour y être inclus. Ces deux tactiques combinées peuvent générer des liens de qualité à un investissement de temps relativement faible."}
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-primary-600 mb-4">
            {isEn ? "Local directories and mentions for Spanish businesses" : "Annuaires locaux et mentions pour les entreprises espagnoles"}
          </h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {isEn ? "For Spanish businesses, key local citation sources include: Páginas Amarillas, Yelp España, Hotfrog, Foursquare, Cylex, Infobel, and sector-specific directories (TripAdvisor for hospitality, Doctoralia for healthcare, Habitissimo for home services, Infojobs company profiles for employers, etc.). Beyond national directories, regional and local directories specific to your city or autonomous community provide geographically relevant links that support local SEO." : "Pour les entreprises espagnoles, les principales sources de citations locales incluent : Páginas Amarillas, Yelp España, Hotfrog, Foursquare, Cylex, Infobel, et les annuaires spécifiques au secteur (TripAdvisor pour l'hôtellerie, Doctoralia pour la santé, Habitissimo pour les services à domicile, profils d'entreprises Infojobs pour les employeurs, etc.). Au-delà des annuaires nationaux, les annuaires régionaux et locaux spécifiques à votre ville ou communauté autonome fournissent des liens géographiquement pertinents qui soutiennent le SEO local."}
          </p>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {isEn ? "Chamber of commerce websites, local business associations, and city council business directories are excellent local link sources. Most Spanish chambers of commerce (Cámaras de Comercio) have online member directories that link to member websites. Local business associations (gremios and asociaciones) often do the same. These links have local relevance, institutional authority and are completely legitimate — making them among the best link sources for local Spanish businesses." : "Les sites web des chambres de commerce, associations d'entreprises locales et annuaires d'entreprises des mairies sont d'excellentes sources de liens locaux. La plupart des chambres de commerce espagnoles (Cámaras de Comercio) ont des annuaires de membres en ligne qui pointent vers les sites des membres. Les associations d'entreprises locales (gremios et asociaciones) font souvent de même. Ces liens ont une pertinence locale, une autorité institutionnelle et sont complètement légitimes — en faisant partie des meilleures sources de liens pour les entreprises espagnoles locales."}
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-primary-600 mb-4">
            {isEn ? "Link building mistakes that penalise your website" : "Erreurs de link building qui pénalisent votre site web"}
          </h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {isEn ? "The link building mistakes that most commonly result in Google penalties or ranking drops: buying links (Google's Webmaster Guidelines explicitly prohibit paid links intended to manipulate rankings), submitting to link farms and low-quality directories en masse, participating in link exchange schemes at scale, using footer or sidebar links on unrelated websites ('link in footer' services), and building links with exact-match anchor text at scale (e.g., every link pointing to your site using the exact keyword you want to rank for)." : "Les erreurs de link building qui résultent le plus souvent en pénalités Google ou chutes de classement : acheter des liens (les Directives du propriétaire de site web de Google interdisent explicitement les liens payants destinés à manipuler les classements), soumettre à des fermes de liens et des annuaires de faible qualité en masse, participer à des schémas d'échange de liens à grande échelle, utiliser des liens dans le pied de page ou la barre latérale sur des sites non liés (services 'lien dans le pied de page'), et construire des liens avec un texte d'ancre exact en masse (ex. chaque lien pointant vers votre site utilisant exactement le mot-clé pour lequel vous voulez vous classer)."}
          </p>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {isEn ? "If you have inherited a website with a poor backlink profile, use Google Search Console's Disavow Tool to disavow links from clearly spammy or irrelevant sources. However, use this tool cautiously — disavowing good links accidentally can hurt your rankings. Prioritise building new quality links rather than obsessively cleaning old ones, unless there is a clear pattern of manipulative links that is likely to trigger a manual review." : "Si vous avez hérité d'un site web avec un mauvais profil de backlinks, utilisez l'outil Désavouer de Google Search Console pour désavouer les liens de sources clairement spam ou non pertinentes. Cependant, utilisez cet outil avec prudence — désavouer accidentellement de bons liens peut nuire à vos classements. Priorisez la construction de nouveaux liens de qualité plutôt que de nettoyer obsessionnellement les anciens, sauf s'il existe un schéma clair de liens manipulatoires susceptible de déclencher un examen manuel."}
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
