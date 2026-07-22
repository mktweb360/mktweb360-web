import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ContactForm } from "@/components/ContactForm";
import { BlogBanner } from "@/components/BlogBanner";
import { RelatedArticles } from "@/components/RelatedArticles";
import { alternatesFor } from "@/lib/i18n/routes";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const isEn = lang === "en";
  return {
    title: isEn ? "Business Digitalisation in Castilla-La Mancha — 2025 Guide | Mkt Web 360" : "Digitalisation des Entreprises en Castille-La Manche — Guide 2025 | Mkt Web 360",
    description: isEn ? "How businesses in Castilla-La Mancha can digitalise in 2025. Available aids, essential tools and how to choose a digitalisation partner in the region." : "Comment les entreprises de Castille-La Manche peuvent se digitaliser en 2025. Aides disponibles, outils essentiels et comment choisir un partenaire de digitalisation dans la région.",
    alternates: alternatesFor(`/${lang}/digitalization-castilla-la-mancha/`) ?? {
      canonical: `https://www.mktweb360.com/${lang}/digitalization-castilla-la-mancha/`,
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
          { label: isEn ? "Digitalisation CLM" : "Digitalisation CLM" },
        ]} />
        <p className="text-sm text-accent-500 font-semibold mb-2">Strategy</p>
        <h1 className="text-4xl font-bold text-primary-600 mb-4 leading-tight">
          {isEn ? "How to digitalise your business in Castilla-La Mancha in 2025" : "Comment digitaliser votre entreprise en Castille-La Manche en 2025"}
        </h1>
        <p className="text-xl text-gray-500 mb-8 leading-relaxed">
          {isEn ? "Businesses in Castilla-La Mancha face a digital opportunity: lower competition online than in major cities, with the same customers searching Google every day. This guide explains how to capitalise on it." : "Les entreprises de Castille-La Manche font face à une opportunité digitale : moins de concurrence en ligne que dans les grandes villes, avec les mêmes clients cherchant sur Google chaque jour. Ce guide explique comment en profiter."}
        </p>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-primary-600 mb-4">
            {isEn ? "The state of digitalisation in Castilla-La Mancha" : "L'état de la digitalisation en Castille-La Manche"}
          </h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {isEn ? "Castilla-La Mancha is one of Spain's most rural regions, with the majority of its businesses being small and medium enterprises concentrated in cities like Toledo, Albacete, Ciudad Real, Cuenca and Guadalajara, and a large number of micro-businesses in smaller towns. Compared to Madrid or Barcelona, the level of digital adoption among local businesses remains significantly lower, which creates a first-mover advantage for businesses that invest in digital marketing now." : "La Castille-La Manche est l'une des régions les plus rurales d'Espagne, avec la majorité de ses entreprises étant des petites et moyennes entreprises concentrées dans des villes comme Tolède, Albacete, Ciudad Real, Cuenca et Guadalajara, et un grand nombre de micro-entreprises dans de plus petites villes. Comparée à Madrid ou Barcelone, le niveau d'adoption numérique parmi les entreprises locales reste significativement plus faible, ce qui crée un avantage de premier entrant pour les entreprises qui investissent maintenant dans le marketing digital."}
          </p>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {isEn ? "Consumer behaviour in the region is converging with national averages: the same proportion of residents use smartphones, search for local businesses on Google and read online reviews before making purchase decisions. The gap is in supply — local businesses are not yet optimising for the digital channels their potential customers are already using. This means early movers capture disproportionate market share." : "Le comportement des consommateurs dans la région converge avec les moyennes nationales : la même proportion de résidents utilise des smartphones, cherche des entreprises locales sur Google et lit des avis en ligne avant de prendre des décisions d'achat. L'écart est dans l'offre — les entreprises locales n'optimisent pas encore pour les canaux numériques que leurs clients potentiels utilisent déjà. Cela signifie que les premiers entrants capturent des parts de marché disproportionnées."}
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-primary-600 mb-4">
            {isEn ? "Where to start: the pillars of digital transformation" : "Par où commencer : les piliers de la transformation digitale"}
          </h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {isEn ? "Digital transformation for a Castilla-La Mancha SME does not require a large budget or complex technology. The foundation is four pillars: 1) A professional, fast website that clearly explains what you do and makes it easy to contact you. 2) A verified and optimised Google Business Profile so you appear in local search and Google Maps. 3) Basic analytics (Google Analytics 4) to understand your digital audience. 4) A consistent online presence on the 1-2 social platforms most relevant to your customers." : "La transformation digitale pour une PME de Castille-La Manche ne nécessite pas un grand budget ni une technologie complexe. La base est quatre piliers : 1) Un site web professionnel et rapide qui explique clairement ce que vous faites et facilite le contact. 2) Un Google Business Profile vérifié et optimisé pour apparaître dans la recherche locale et Google Maps. 3) Des analytics de base (Google Analytics 4) pour comprendre votre audience digitale. 4) Une présence en ligne cohérente sur les 1 à 2 plateformes sociales les plus pertinentes pour vos clients."}
          </p>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {isEn ? "The sequence matters: establish the digital foundation before investing in advertising. A Google Ads campaign sending traffic to a slow, poorly-designed website will underperform. A website with clear messaging, fast loading, mobile optimisation and a verified Google Business Profile will generate organic leads at zero ongoing cost before you spend a single euro on advertising." : "La séquence est importante : établissez la base numérique avant d'investir dans la publicité. Une campagne Google Ads envoyant du trafic vers un site lent et mal conçu sous-performera. Un site web avec une messagerie claire, un chargement rapide, une optimisation mobile et un Google Business Profile vérifié générera des leads organiques à zéro coût continu avant de dépenser un seul euro en publicité."}
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-primary-600 mb-4">
            {isEn ? "Essential digital tools for SMEs" : "Outils digitaux essentiels pour les PME"}
          </h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {isEn ? "The essential digital toolkit for a Castilla-La Mancha SME: Website (WordPress with a good theme, or a custom solution for more complex needs), Google Business Profile (free, managed via business.google.com), Google Analytics 4 and Google Search Console (free analytics and SEO monitoring), a simple CRM to manage leads (HubSpot free tier is sufficient for most SMEs), an email marketing tool (Mailchimp or Brevo for newsletters and automation), and a scheduling tool for social media (Buffer or Meta Business Suite for free scheduling)." : "La boîte à outils digitale essentielle pour une PME de Castille-La Manche : Site web (WordPress avec un bon thème, ou une solution personnalisée pour des besoins plus complexes), Google Business Profile (gratuit, géré via business.google.com), Google Analytics 4 et Google Search Console (analytics gratuit et surveillance SEO), un CRM simple pour gérer les leads (le niveau gratuit de HubSpot suffit pour la plupart des PME), un outil d'email marketing (Mailchimp ou Brevo pour les newsletters et l'automatisation), et un outil de planification pour les réseaux sociaux (Buffer ou Meta Business Suite pour la planification gratuite)."}
          </p>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {isEn ? "Total monthly cost of this basic stack: €0-50 per month depending on the size of your email list and website hosting quality. These tools are sufficient for most SMEs in the region to establish a solid digital presence and start generating measurable results from digital marketing before investing in more sophisticated or expensive solutions." : "Coût mensuel total de cette pile de base : 0 à 50 € par mois selon la taille de votre liste d'email et la qualité de l'hébergement web. Ces outils sont suffisants pour la plupart des PME de la région pour établir une solide présence numérique et commencer à générer des résultats mesurables du marketing digital avant d'investir dans des solutions plus sophistiquées ou coûteuses."}
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-primary-600 mb-4">
            {isEn ? "Kit Digital: available aids for businesses in the region" : "Kit Digital : aides disponibles pour les entreprises de la région"}
          </h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {isEn ? "The Kit Digital programme is a Spanish government initiative that provides vouchers (bonos digitales) to SMEs and autónomos to fund digital transformation services. Funded services include website development, ecommerce, social media management, digital marketing, cybersecurity, cloud services, invoicing software and CRM implementation. Voucher amounts vary by company size (number of employees), ranging from €1,000 to €12,000 depending on the segment." : "Le programme Kit Digital est une initiative du gouvernement espagnol qui fournit des bons (bonos digitales) aux PME et aux autónomos pour financer des services de transformation numérique. Les services financés incluent le développement de sites web, l'e-commerce, la gestion des réseaux sociaux, le marketing digital, la cybersécurité, les services cloud, les logiciels de facturation et la mise en œuvre de CRM. Les montants des bons varient selon la taille de l'entreprise (nombre d'employés), allant de 1 000 à 12 000 € selon le segment."}
          </p>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {isEn ? "To access Kit Digital, businesses must register on the Acelera Pyme platform (acelerapyme.gob.es), complete a digital maturity assessment, and then select from a list of accredited digital solution providers (Agentes Digitalizadores). The providers deliver the service and bill the government directly — the business pays nothing (or only the VAT, which may be recoverable for VAT-registered businesses). If you have not yet accessed Kit Digital, check current availability as the programme has multiple calls with different eligibility criteria." : "Pour accéder au Kit Digital, les entreprises doivent s'inscrire sur la plateforme Acelera Pyme (acelerapyme.gob.es), compléter une évaluation de maturité numérique, puis sélectionner parmi une liste de fournisseurs de solutions numériques agréés (Agentes Digitalizadores). Les fournisseurs livrent le service et facturent directement le gouvernement — l'entreprise ne paie rien (ou seulement la TVA, qui peut être récupérable pour les entreprises assujetties à la TVA). Si vous n'avez pas encore accédé au Kit Digital, vérifiez la disponibilité actuelle car le programme a plusieurs appels avec différents critères d'éligibilité."}
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-primary-600 mb-4">
            {isEn ? "How to choose a digitalisation partner in your area" : "Comment choisir un partenaire de digitalisation dans votre région"}
          </h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {isEn ? "Choosing the right digital marketing agency or freelancer in Castilla-La Mancha requires evaluating several factors: local knowledge (do they understand the specific market dynamics and competition in your city and sector?), proven results (can they show specific examples of results achieved for comparable businesses in the region?), transparency (do they clearly explain what they will do, how much it will cost and how they will measure results?), and communication style (will they explain things in a way you understand, not hide behind jargon?)." : "Choisir la bonne agence de marketing digital ou freelance en Castille-La Manche nécessite d'évaluer plusieurs facteurs : la connaissance locale (comprennent-ils les dynamiques spécifiques du marché et la concurrence dans votre ville et secteur ?), des résultats prouvés (peuvent-ils montrer des exemples spécifiques de résultats obtenus pour des entreprises comparables dans la région ?), la transparence (expliquent-ils clairement ce qu'ils feront, combien cela coûtera et comment ils mesureront les résultats ?), et le style de communication (expliqueront-ils les choses d'une manière que vous comprenez, sans se cacher derrière du jargon ?)."}
          </p>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {isEn ? "Red flags when evaluating digital marketing providers: guarantees of specific ranking positions in Google (no legitimate agency can guarantee positions), contracts that lock you in for 12+ months without performance milestones, inability to show past results for real clients, and vague deliverables without specific metrics. A good digital partner defines success clearly at the start, reports on it regularly and adjusts their approach based on data." : "Signaux d'alarme lors de l'évaluation des prestataires de marketing digital : garanties de positions de classement spécifiques dans Google (aucune agence légitime ne peut garantir des positions), contrats qui vous bloquent pendant 12+ mois sans jalons de performance, incapacité à montrer des résultats passés pour de vrais clients, et livrables vagues sans métriques spécifiques. Un bon partenaire digital définit le succès clairement au départ, en rend compte régulièrement et ajuste son approche en fonction des données."}
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
      <RelatedArticles category="Strategy" />
    </>
  );
}
