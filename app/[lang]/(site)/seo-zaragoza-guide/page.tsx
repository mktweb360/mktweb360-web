import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ContactForm } from "@/components/ContactForm";
import { BlogBanner } from "@/components/BlogBanner";
import { RelatedArticles } from "@/components/RelatedArticles";
import { alternatesFor } from "@/lib/i18n/routes";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const isEn = lang === "en";
  return {
    title: isEn ? "SEO in Zaragoza — Web Positioning for Local Businesses | Mkt Web 360" : "SEO à Saragosse — Positionnement Web pour les Entreprises Locales | Mkt Web 360",
    description: isEn ? "How to position your business on Google in Zaragoza. Local SEO guide for businesses in Aragon." : "Comment positionner votre entreprise sur Google à Saragosse. Guide SEO local pour les entreprises d'Aragon.",
    alternates: alternatesFor(`/${lang}/seo-zaragoza-guide/`) ?? {
      canonical: `https://www.mktweb360.com/${lang}/seo-zaragoza-guide/`,
    },
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
          { label: isEn ? "SEO Zaragoza" : "SEO Saragosse" },
        ]} />
        <p className="text-sm text-accent-500 font-semibold mb-2">SEO Local</p>
        <h1 className="text-4xl font-bold text-primary-600 mb-4 leading-tight">
          {isEn ? "SEO in Zaragoza: how to position your business on Google in Aragon" : "SEO à Saragosse : comment positionner votre entreprise sur Google en Aragon"}
        </h1>
        <p className="text-xl text-gray-500 mb-8 leading-relaxed">
          {isEn ? "Zaragoza has a very active business community and lower SEO competition than Madrid or Barcelona. A real window of opportunity to position your business ahead of your competition." : "Saragosse a une communauté d'affaires très active et une concurrence SEO moindre que Madrid ou Barcelone. Une vraie fenêtre d'opportunité pour positionner votre entreprise avant votre concurrence."}
        </p>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-primary-600 mb-4">
            {isEn ? "The SEO market in Zaragoza and Aragon" : "Le marché SEO à Saragosse et en Aragon"}
          </h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {isEn ? "Zaragoza is Spain's fifth largest city with approximately 680,000 residents and around 800,000 in its metropolitan area. It is the capital of Aragon and sits at the geographic heart of Spain, positioned strategically between Madrid, Barcelona, Valencia and Bilbao. This central location makes Zaragoza an important logistics and trade hub — it hosts one of Europe's largest logistics platforms and has a strong industrial and automotive sector. The local economy is diverse and relatively prosperous, creating a substantial market for business services." : "Saragosse est la cinquième plus grande ville d'Espagne avec environ 680 000 résidents et environ 800 000 dans son aire métropolitaine. C'est la capitale de l'Aragon et se trouve au cœur géographique de l'Espagne, positionnée stratégiquement entre Madrid, Barcelone, Valence et Bilbao. Cette localisation centrale fait de Saragosse un important hub logistique et commercial — elle accueille l'une des plus grandes plateformes logistiques d'Europe et a un secteur industriel et automobile fort. L'économie locale est diversifiée et relativement prospère, créant un marché substantiel pour les services aux entreprises."}
          </p>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {isEn ? "The Zaragoza SEO market is notably less competitive than Madrid, Barcelona or even Valencia for most service categories. Many local businesses are not yet investing seriously in SEO, which creates genuine ranking opportunities for those who do. A well-executed SEO strategy in Zaragoza can typically achieve first-page rankings within 4-8 months for most service keywords — a timeline that would take 12-24 months in Madrid for equivalent results." : "Le marché SEO de Saragosse est notablement moins compétitif que Madrid, Barcelone ou même Valence pour la plupart des catégories de services. De nombreuses entreprises locales n'investissent pas encore sérieusement dans le SEO, ce qui crée de vraies opportunités de classement pour ceux qui le font. Une stratégie SEO bien exécutée à Saragosse peut généralement atteindre des classements en première page dans les 4 à 8 mois pour la plupart des mots-clés de services — un calendrier qui prendrait 12 à 24 mois à Madrid pour des résultats équivalents."}
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-primary-600 mb-4">
            {isEn ? "Local SEO for Zaragoza businesses" : "SEO local pour les entreprises de Saragosse"}
          </h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {isEn ? "Local SEO in Zaragoza follows the same foundational principles as any Spanish city: an optimised Google Business Profile, consistent NAP citations, a mobile-friendly website, and systematic review collection. Zaragoza's distinct neighbourhoods offer targeting opportunities: El Casco Histórico (historic centre, tourism and hospitality), Delicias (largest working-class neighbourhood, dense with local commerce), Romareda and Rosales del Canal (affluent residential areas), and the Miraflores and Parque Goya developments (newer areas with growing business density)." : "Le SEO local à Saragosse suit les mêmes principes fondamentaux que toute ville espagnole : un Google Business Profile optimisé, des citations NAP cohérentes, un site web adapté aux mobiles, et une collecte systématique d'avis. Les quartiers distincts de Saragosse offrent des opportunités de ciblage : El Casco Histórico (centre historique, tourisme et hôtellerie), Delicias (le plus grand quartier populaire, dense en commerce local), Romareda et Rosales del Canal (quartiers résidentiels aisés), et les développements de Miraflores et Parque Goya (zones plus récentes avec une densité commerciale croissante)."}
          </p>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {isEn ? "Zaragoza's position as a logistics hub creates specific B2B SEO opportunities. Many businesses from elsewhere in Spain search for Zaragoza-based suppliers, warehousing, transport and professional services when establishing or expanding their logistics footprint in the region. Creating content that positions your business as the go-to provider in your category for companies with operations in Aragon can capture high-value B2B traffic with relatively low competition." : "La position de Saragosse comme hub logistique crée des opportunités SEO B2B spécifiques. De nombreuses entreprises d'ailleurs en Espagne recherchent des fournisseurs, entrepôts, transports et services professionnels basés à Saragosse lors de l'établissement ou de l'expansion de leur empreinte logistique dans la région. Créer du contenu qui positionne votre entreprise comme le prestataire incontournable dans votre catégorie pour les entreprises ayant des opérations en Aragon peut capturer un trafic B2B à haute valeur avec une concurrence relativement faible."}
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-primary-600 mb-4">
            {isEn ? "Sectors with the most SEO opportunity in Zaragoza" : "Secteurs avec le plus d'opportunités SEO à Saragosse"}
          </h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {isEn ? "High-opportunity sectors for Zaragoza SEO: professional services (legal, financial, HR — demand from the city's substantial corporate and industrial sector), healthcare and wellness (strong local demand from a growing, health-conscious population), real estate (significant construction activity and population growth creating demand), automotive services (reflecting the strong automotive industrial presence), gastronomy and hospitality (tapas route culture creates tourist interest), and industrial services (manufacturing, logistics, engineering support)." : "Secteurs à haute opportunité pour le SEO de Saragosse : services professionnels (juridique, financier, RH — demande du secteur d'entreprises et industriel substantiel de la ville), santé et bien-être (forte demande locale d'une population croissante et soucieuse de sa santé), immobilier (activité de construction significative et croissance démographique créant de la demande), services automobiles (reflétant la forte présence industrielle automobile), gastronomie et hôtellerie (la culture de la route des tapas crée un intérêt touristique), et services industriels (fabrication, logistique, soutien technique)."}
          </p>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {isEn ? "For retail and ecommerce businesses in Zaragoza, the city's central location is a logistical advantage worth mentioning in SEO content and advertising — fast shipping times to all major Spanish cities is a genuine competitive differentiator. Educational services (academies, language schools, professional training) are also an underserved SEO category in Zaragoza, with significant demand from the city's young professional and student population (the University of Zaragoza has around 30,000 students)." : "Pour les entreprises de commerce de détail et d'e-commerce à Saragosse, la localisation centrale de la ville est un avantage logistique qui vaut la peine d'être mentionné dans le contenu SEO et la publicité — les délais d'expédition rapides vers toutes les grandes villes espagnoles est un vrai différenciateur compétitif. Les services éducatifs (académies, écoles de langues, formation professionnelle) sont également une catégorie SEO mal desservie à Saragosse, avec une demande significative de la jeune population professionnelle et étudiante de la ville (l'Université de Saragosse compte environ 30 000 étudiants)."}
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-primary-600 mb-4">
            {isEn ? "Google Business Profile in Zaragoza" : "Google Business Profile à Saragosse"}
          </h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {isEn ? "Google Business Profile optimisation in Zaragoza offers disproportionate returns because many local competitors have not invested in it. Key optimisation actions for Zaragoza: select the most specific primary category that matches your main service (e.g., 'dentista' not just 'médico'), write a 750-character description that includes Zaragoza, your district and your main service keywords naturally, complete all service listings with individual descriptions, add 10+ quality photos updated regularly, and begin posting at least twice monthly." : "L'optimisation de Google Business Profile à Saragosse offre des retours disproportionnés car de nombreux concurrents locaux n'y ont pas investi. Actions d'optimisation clés pour Saragosse : sélectionnez la catégorie principale la plus spécifique correspondant à votre service principal (ex. 'dentista' pas seulement 'médico'), rédigez une description de 750 caractères incluant naturellement Saragosse, votre quartier et vos mots-clés de service principaux, complétez toutes les listes de services avec des descriptions individuelles, ajoutez 10+ photos de qualité mises à jour régulièrement, et commencez à publier au moins deux fois par mois."}
          </p>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {isEn ? "Zaragoza's business community has a strong local identity — the city is proud of its character as a real, working Spanish city rather than a tourist destination. This local pride can be reflected in your Business Profile and content: emphasising your Zaragoza roots, your local team and your involvement in the city's business community can resonate more strongly with local customers than generic marketing language. Authenticity is a competitive differentiator in Zaragoza's market." : "La communauté d'affaires de Saragosse a une forte identité locale — la ville est fière de son caractère de vraie ville espagnole active plutôt que de destination touristique. Cette fierté locale peut se refléter dans votre Business Profile et votre contenu : souligner vos racines saragossanes, votre équipe locale et votre implication dans la communauté d'affaires de la ville peut résonner plus fortement avec les clients locaux que le langage marketing générique. L'authenticité est un différenciateur compétitif sur le marché de Saragosse."}
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-primary-600 mb-4">
            {isEn ? "How to start positioning your business in Zaragoza" : "Comment commencer à positionner votre entreprise à Saragosse"}
          </h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {isEn ? "The practical starting sequence for local SEO in Zaragoza: 1) Claim and fully optimise your Google Business Profile — this is the single highest-ROI action for most Zaragoza businesses. 2) Run a basic technical SEO audit on your website (page speed, mobile responsiveness, broken links, missing meta tags). 3) Create or improve a main service page targeting '[service] Zaragoza' as the primary keyword with at least 400 words of original, useful content. 4) Build citations on the main Spanish directories (Páginas Amarillas, Yelp, Hotfrog, local Aragon directories). 5) Systematically ask every satisfied customer for a Google review." : "La séquence de démarrage pratique pour le SEO local à Saragosse : 1) Revendiquez et optimisez complètement votre Google Business Profile — c'est l'action au ROI le plus élevé pour la plupart des entreprises de Saragosse. 2) Effectuez un audit SEO technique de base sur votre site (vitesse de page, réactivité mobile, liens cassés, balises meta manquantes). 3) Créez ou améliorez une page de service principale ciblant '[service] Saragosse' comme mot-clé principal avec au moins 400 mots de contenu original et utile. 4) Construisez des citations sur les principaux annuaires espagnols (Páginas Amarillas, Yelp, Hotfrog, annuaires locaux d'Aragon). 5) Demandez systématiquement à chaque client satisfait un avis Google."}
          </p>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {isEn ? "Zaragoza's window of opportunity in SEO is real but will not last indefinitely. As more businesses across Spain invest in digital marketing, competition in secondary cities like Zaragoza will increase. Businesses that establish their SEO presence now build domain authority and review profiles that create durable competitive advantages — advantages that become harder for late-movers to overcome. The best time to start SEO in Zaragoza is now; the second best time is in three months, but not five years from now." : "La fenêtre d'opportunité SEO de Saragosse est réelle mais ne durera pas indéfiniment. À mesure que de plus en plus d'entreprises à travers l'Espagne investissent dans le marketing digital, la concurrence dans les villes secondaires comme Saragosse augmentera. Les entreprises qui établissent leur présence SEO maintenant construisent une autorité de domaine et des profils d'avis qui créent des avantages compétitifs durables — des avantages qui deviennent plus difficiles à surmonter pour les retardataires. Le meilleur moment pour démarrer le SEO à Saragosse est maintenant ; le deuxième meilleur moment est dans trois mois, mais pas dans cinq ans."}
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
      <RelatedArticles category="SEO Local" />
    </>
  );
}
