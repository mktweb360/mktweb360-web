import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ContactForm } from "@/components/ContactForm";
import { BlogBanner } from "@/components/BlogBanner";
import { RelatedArticles } from "@/components/RelatedArticles";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const isEn = lang === "en";
  return {
    title: isEn ? "SEO in Valencia — Web Positioning for Local Businesses | Mkt Web 360" : "SEO à Valence — Positionnement Web pour les Entreprises Locales | Mkt Web 360",
    description: isEn ? "Complete guide to SEO in Valencia. How to position your business on Google in Valencia with local SEO strategies, keywords and practical tips." : "Guide complet du SEO à Valence. Comment positionner votre entreprise sur Google à Valence avec des stratégies SEO locales, des mots-clés et des conseils pratiques.",
    alternates: { canonical: `https://www.mktweb360.com/${lang}/seo-valencia-guide/` },
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
          { label: isEn ? "SEO Valencia" : "SEO Valence" },
        ]} />
        <p className="text-sm text-accent-500 font-semibold mb-2">SEO Local</p>
        <h1 className="text-4xl font-bold text-primary-600 mb-4 leading-tight">
          {isEn ? "SEO in Valencia: guide to positioning for local businesses and companies" : "SEO à Valence : guide de positionnement pour les entreprises et commerces locaux"}
        </h1>
        <p className="text-xl text-gray-500 mb-8 leading-relaxed">
          {isEn ? "Valencia is Spain's third largest city and one of the most interesting SEO markets — competitive enough to be rewarding, accessible enough to achieve results within a reasonable timeframe." : "Valence est la troisième plus grande ville d'Espagne et l'un des marchés SEO les plus intéressants — assez compétitif pour être gratifiant, assez accessible pour obtenir des résultats dans un délai raisonnable."}
        </p>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-primary-600 mb-4">
            {isEn ? "The SEO market in Valencia: sectors and opportunities" : "Le marché SEO à Valence : secteurs et opportunités"}
          </h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {isEn ? "Valencia is Spain's third-largest city with around 800,000 residents and 1.8 million in the metropolitan area. It has a diverse economy driven by trade (the Port of Valencia is Spain's largest), tourism, technology (a growing tech hub), automotive and ceramics manufacturing, and a vibrant hospitality sector. The SEO market in Valencia sits between Madrid's extreme competitiveness and smaller cities' accessibility — most service categories can be approached with a 6-12 month realistic timeline for top-3 rankings." : "Valence est la troisième plus grande ville d'Espagne avec environ 800 000 résidents et 1,8 million dans l'aire métropolitaine. Elle a une économie diversifiée portée par le commerce (le port de Valence est le plus grand d'Espagne), le tourisme, la technologie (un hub technologique en croissance), l'automobile et la fabrication de céramique, et un secteur hôtelier dynamique. Le marché SEO à Valence se situe entre l'extrême compétitivité de Madrid et l'accessibilité des petites villes — la plupart des catégories de services peuvent être approchées avec un calendrier réaliste de 6 à 12 mois pour les classements top-3."}
          </p>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {isEn ? "Like Barcelona, Valencia has a bilingual dimension — Valencian (a dialect of Catalan) is co-official with Spanish. A significant proportion of Valencia residents search in Valencian, and competition for Valencian-language keywords is lower than for Spanish equivalents. For local businesses serving the Valencia community (rather than tourists), Valencian content can be a genuine differentiator." : "Comme Barcelone, Valence a une dimension bilingue — le valencien (un dialecte catalan) est co-officiel avec l'espagnol. Une proportion significative des résidents de Valence recherche en valencien, et la concurrence pour les mots-clés en langue valencienne est plus faible que pour les équivalents espagnols. Pour les entreprises locales servant la communauté valencienne (plutôt que les touristes), le contenu en valencien peut être un vrai différenciateur."}
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-primary-600 mb-4">
            {isEn ? "Local SEO for Valencia businesses" : "SEO local pour les entreprises valenciennes"}
          </h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {isEn ? "Valencia local SEO follows the same fundamental principles as any city but has local characteristics that smart marketers exploit. Valencia's distinctive districts (l'Eixample, Ruzafa, Benimaclet, El Carmen, Patacona) have strong local identities, and neighbourhood-level targeting can be very effective for businesses in specific areas of the city. Including district names in service pages and Business Profile content captures searches from neighbourhood-specific queries." : "Le SEO local de Valence suit les mêmes principes fondamentaux que toute ville mais a des caractéristiques locales que les marketeurs avisés exploitent. Les quartiers distinctifs de Valence (l'Eixample, Ruzafa, Benimaclet, El Carmen, Patacona) ont de fortes identités locales, et le ciblage au niveau du quartier peut être très efficace pour les entreprises dans des zones spécifiques de la ville. Inclure les noms de quartiers dans les pages de services et le contenu du Business Profile capture les recherches de requêtes spécifiques au quartier."}
          </p>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {isEn ? "Valencia's tourism sector creates additional search volume: international visitors search for 'restaurants Valencia Spain', 'things to do Valencia', 'paella Valencia' and similar queries. For hospitality, food and tourism businesses, optimising for English and other key tourist language queries (French, German, Italian) can capture significant additional traffic. This tourism-adjacent SEO opportunity exists all year round in Valencia, with peaks around Las Fallas (March), the Grand Prix (June) and summer beach season." : "Le secteur touristique de Valence crée un volume de recherche supplémentaire : les visiteurs internationaux recherchent 'restaurants Valencia Spain', 'things to do Valencia', 'paella Valencia' et des requêtes similaires. Pour les entreprises d'hôtellerie, de restauration et de tourisme, l'optimisation pour l'anglais et d'autres requêtes clés en langue touristique (français, allemand, italien) peut capturer un trafic supplémentaire significatif. Cette opportunité SEO adjacente au tourisme existe toute l'année à Valence, avec des pics autour des Fallas (mars), du Grand Prix (juin) et de la saison de plage estivale."}
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-primary-600 mb-4">
            {isEn ? "Google Business Profile in Valencia" : "Google Business Profile à Valence"}
          </h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {isEn ? "For Valencia businesses, Google Business Profile optimisation is particularly impactful because many local service categories still have relatively underoptimised competitor profiles. Businesses with a well-maintained profile (regular posts, photo updates, review responses, Q&A management, complete attribute filling) consistently outrank competitors with neglected profiles even when the competitor has a stronger website." : "Pour les entreprises valenciennes, l'optimisation de Google Business Profile est particulièrement impactante car de nombreuses catégories de services locaux ont encore des profils concurrents relativement peu optimisés. Les entreprises avec un profil bien entretenu (posts réguliers, mises à jour de photos, réponses aux avis, gestion des Q&A, remplissage complet des attributs) surclassent systématiquement les concurrents avec des profils négligés même quand le concurrent a un site web plus fort."}
          </p>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {isEn ? "Valencia-specific Business Profile optimisations: mention service areas in Valencia districts if relevant, include Valencian language in your profile description if you serve Valencian-speaking customers, add photos that feature Valencia's distinctive architecture and settings if your business has local character, and ensure your opening hours reflect local Valencia customs (including the extended midday closing that is still common in Valencia businesses)." : "Optimisations de Business Profile spécifiques à Valence : mentionnez les zones de service dans les quartiers de Valence si pertinent, incluez la langue valencienne dans votre description de profil si vous servez des clients valenciophones, ajoutez des photos mettant en valeur l'architecture et les décors distinctifs de Valence si votre entreprise a un caractère local, et assurez-vous que vos horaires d'ouverture reflètent les coutumes locales valenciennes (incluant la fermeture prolongée de la mi-journée qui est encore courante dans les entreprises valenciennes)."}
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-primary-600 mb-4">
            {isEn ? "Local keywords with the most potential in Valencia" : "Mots-clés locaux avec le plus de potentiel à Valence"}
          </h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {isEn ? "The most effective local keyword structures for Valencia: '[service] Valencia' (e.g., 'fontanero Valencia', 'abogado divorcio Valencia'), '[service] en Valencia', 'mejor [service] en Valencia', and district-specific variants ('dentista Ruzafa', 'fisioterapeuta Benimaclet'). Research actual search volumes for your specific category using Google Keyword Planner — some Valencia keywords have surprisingly high volume that makes the investment in ranking for them highly worthwhile." : "Les structures de mots-clés locaux les plus efficaces pour Valence : '[service] Valencia' (ex. 'fontanero Valencia', 'abogado divorcio Valencia'), '[service] en Valencia', 'mejor [service] en Valencia', et des variantes spécifiques aux quartiers ('dentista Ruzafa', 'fisioterapeuta Benimaclet'). Recherchez les volumes de recherche réels pour votre catégorie spécifique en utilisant Google Keyword Planner — certains mots-clés de Valence ont des volumes surprenants qui rendent l'investissement pour se classer dessus très valable."}
          </p>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {isEn ? "Long-tail Valencia keywords often have the best conversion rates: 'urgencias fontanero Valencia 24 horas', 'abogado laboralista especialista Valencia', 'reformas de cocinas en Valencia presupuesto'. These longer queries come from users who have done some research and are closer to making a decision, resulting in higher conversion rates than broad head keywords even at lower search volume." : "Les mots-clés à longue traîne de Valence ont souvent les meilleurs taux de conversion : 'urgencias fontanero Valencia 24 horas', 'abogado laboralista especialista Valencia', 'reformas de cocinas en Valencia presupuesto'. Ces requêtes plus longues proviennent d'utilisateurs qui ont fait quelques recherches et sont plus proches de prendre une décision, résultant en des taux de conversion plus élevés que les mots-clés larges même à volume de recherche plus faible."}
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-primary-600 mb-4">
            {isEn ? "How to start positioning your business in Valencia" : "Comment commencer à positionner votre entreprise à Valence"}
          </h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {isEn ? "The practical SEO starting sequence for a Valencia business: 1) Optimise your Google Business Profile completely — category, description with Valencia keywords, full service list, photos, regular posts. 2) Audit your website for basic technical issues (speed, mobile, broken links). 3) Ensure consistent NAP data across your website and key Spanish directories. 4) Create or improve your main service page to target your primary 'service + Valencia' keyword. 5) Systematically collect Google reviews from satisfied customers." : "La séquence de démarrage SEO pratique pour une entreprise valencienne : 1) Optimisez complètement votre Google Business Profile — catégorie, description avec mots-clés de Valence, liste complète de services, photos, posts réguliers. 2) Auditez votre site web pour les problèmes techniques de base (vitesse, mobile, liens cassés). 3) Assurez des données NAP cohérentes sur votre site et les principaux annuaires espagnols. 4) Créez ou améliorez votre page de service principale pour cibler votre mot-clé principal 'service + Valence'. 5) Collectez systématiquement des avis Google des clients satisfaits."}
          </p>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {isEn ? "For Valencia businesses serious about organic growth, the next level involves: building local links (sponsoring local events, partnerships with complementary local businesses, contributing expertise to Valencia media), creating comprehensive content that addresses specific Valencia customer questions, and expanding keyword coverage to district-level and long-tail terms. Consistent execution of this roadmap over 12 months positions most Valencia businesses in the top 3 for their primary target keywords." : "Pour les entreprises valenciennes sérieuses dans leur croissance organique, le niveau suivant implique : construire des liens locaux (sponsor d'événements locaux, partenariats avec des entreprises locales complémentaires, contribution d'expertise aux médias valenciens), créer du contenu complet qui adresse des questions spécifiques des clients valenciens, et élargir la couverture de mots-clés aux termes au niveau du quartier et à longue traîne. L'exécution cohérente de cette feuille de route sur 12 mois positionne la plupart des entreprises valenciennes dans le top 3 pour leurs mots-clés cibles principaux."}
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
