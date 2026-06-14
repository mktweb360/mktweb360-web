import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ContactForm } from "@/components/ContactForm";
import { BlogBanner } from "@/components/BlogBanner";
import { RelatedArticles } from "@/components/RelatedArticles";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const isEn = lang === "en";
  return {
    title: isEn ? "Digital Marketing Agencies in Toledo — What to Look For | Mkt Web 360" : "Agences de Marketing Digital à Tolède — Ce qu'il faut chercher | Mkt Web 360",
    description: isEn ? "Guide to choosing a digital marketing agency in Toledo. What to ask, what to avoid and how to compare proposals before signing." : "Guide pour choisir une agence de marketing digital à Tolède. Quoi demander, quoi éviter et comment comparer les propositions avant de signer.",
    alternates: { canonical: `https://www.mktweb360.com/${lang}/digital-marketing-agencies-toledo/` },
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
          { label: isEn ? "Agencies in Toledo" : "Agences à Tolède" },
        ]} />
        <p className="text-sm text-accent-500 font-semibold mb-2">Strategy</p>
        <h1 className="text-4xl font-bold text-primary-600 mb-4 leading-tight">
          {isEn ? "How to choose a digital marketing agency in Toledo without making mistakes" : "Comment choisir une agence de marketing digital à Tolède sans faire d'erreurs"}
        </h1>
        <p className="text-xl text-gray-500 mb-8 leading-relaxed">
          {isEn ? "Whether you are looking for a local agency in Toledo or a national agency that understands your market, this guide explains what to look for and what to avoid." : "Que vous cherchiez une agence locale à Tolède ou une agence nationale qui comprend votre marché, ce guide explique ce qu'il faut chercher et ce qu'il faut éviter."}
        </p>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-primary-600 mb-4">
            {isEn ? "What a digital marketing agency actually does" : "Ce que fait réellement une agence de marketing digital"}
          </h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {isEn ? "A digital marketing agency helps your business attract customers through online channels: Google search results, social media, email, online advertising and your website. The key word is 'helps' — not 'does everything for you automatically.' The best agencies work as strategic partners, not just executors. They bring expertise, tools and experience that most SMEs cannot develop internally." : "Une agence de marketing digital aide votre entreprise à attirer des clients via les canaux en ligne : les résultats de recherche Google, les réseaux sociaux, l'email, la publicité en ligne et votre site web. Le mot clé est 'aide' — pas 'fait tout automatiquement pour vous.' Les meilleures agences travaillent comme des partenaires stratégiques, pas seulement des exécutants. Elles apportent expertise, outils et expérience que la plupart des PME ne peuvent pas développer en interne."}
          </p>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {isEn ? "Toledo businesses have specific characteristics: a strong presence of SMEs in tourism, craftsmanship, food industry and professional services, with a predominantly local customer base. A good agency — local or national — should understand this context and not apply the same formula used for an ecommerce in Madrid or a tech startup in Barcelona." : "Les entreprises de Tolède ont des caractéristiques spécifiques : une forte présence de PME dans le tourisme, l'artisanat, l'industrie alimentaire et les services professionnels, avec une clientèle majoritairement locale. Une bonne agence — locale ou nationale — devrait comprendre ce contexte et ne pas appliquer la même formule utilisée pour un e-commerce à Madrid ou une startup tech à Barcelone."}
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-primary-600 mb-4">
            {isEn ? "Local vs national agency: pros and cons" : "Agence locale vs nationale : avantages et inconvénients"}
          </h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {isEn ? "A local agency in Toledo knows your market, your competition and can visit you in person. This proximity has real value — it is easier to build a collaborative relationship, and the agency understands the nuances of local consumer behaviour. On the other hand, the supply of specialist agencies in Toledo is more limited than in Madrid, which can mean less expertise in niche channels like technical SEO or advanced PPC." : "Une agence locale à Tolède connaît votre marché, votre concurrence et peut vous rendre visite en personne. Cette proximité a une vraie valeur — il est plus facile de construire une relation collaborative, et l'agence comprend les nuances du comportement des consommateurs locaux. D'un autre côté, l'offre d'agences spécialisées à Tolède est plus limitée qu'à Madrid, ce qui peut signifier moins d'expertise dans des canaux de niche comme le SEO technique ou le PPC avancé."}
          </p>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {isEn ? "A national agency with remote operations can offer superior technical expertise and a larger team, but may lack understanding of the local market and assign your account to someone who has never set foot in Toledo. The best solution for many Toledo businesses is a national agency with demonstrated local expertise — which is exactly what we offer at Mkt Web 360." : "Une agence nationale avec des opérations à distance peut offrir une expertise technique supérieure et une équipe plus grande, mais peut manquer de compréhension du marché local et attribuer votre compte à quelqu'un qui n'a jamais mis les pieds à Tolède. La meilleure solution pour de nombreuses entreprises de Tolède est une agence nationale avec une expertise locale démontrée — c'est exactement ce que nous offrons chez Mkt Web 360."}
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-primary-600 mb-4">
            {isEn ? "Key questions before hiring" : "Questions clés avant d'embaucher"}
          </h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {isEn ? "Ask every agency you consider: Do you have experience with businesses in Toledo or similar local markets? Can you share results achieved for clients in comparable sectors? Who specifically will manage my account day to day? What metrics will you report and how often? What happens to all the work — content, ad accounts, website changes — if I decide to stop working with you?" : "Demandez à chaque agence que vous considérez : Avez-vous de l'expérience avec des entreprises à Tolède ou dans des marchés locaux similaires ? Pouvez-vous partager des résultats obtenus pour des clients dans des secteurs comparables ? Qui gérera spécifiquement mon compte au quotidien ? Quelles métriques allez-vous rapporter et à quelle fréquence ? Que se passe-t-il pour tout le travail — contenu, comptes publicitaires, modifications du site — si je décide d'arrêter de travailler avec vous ?"}
          </p>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {isEn ? "These questions separate professional agencies from opportunistic ones quickly. Good agencies answer confidently with specific examples. Agencies that deflect, generalise or make you feel like you are asking for too much are telling you something important about how they operate." : "Ces questions séparent rapidement les agences professionnelles des opportunistes. Les bonnes agences répondent avec confiance et des exemples spécifiques. Les agences qui esquivent, généralisent ou vous font sentir que vous demandez trop vous disent quelque chose d'important sur leur façon de fonctionner."}
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-primary-600 mb-4">
            {isEn ? "Red flags in agency proposals" : "Red flags dans les propositions d'agences"}
          </h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {isEn ? "A proposal full of impressive graphics but thin on specifics is a red flag. Good proposals detail exactly what will be done, by whom, in what timeframe and with what expected outcomes. Beware of proposals that guarantee specific rankings or traffic numbers — these are impossible to guarantee honestly. Also watch out for long minimum contracts with no exit clauses or performance benchmarks." : "Une proposition pleine de graphiques impressionnants mais pauvre en détails est un red flag. Les bonnes propositions détaillent exactement ce qui sera fait, par qui, dans quel délai et avec quels résultats attendus. Méfiez-vous des propositions qui garantissent des classements ou des chiffres de trafic spécifiques — il est impossible de les garantir honnêtement. Attention aussi aux contrats minimums longs sans clauses de sortie ni benchmarks de performance."}
          </p>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {isEn ? "Another common red flag: agencies that focus entirely on vanity metrics like impressions, reach and follower counts rather than business outcomes like leads, calls and sales. Social media reach that does not translate into customers is entertainment, not marketing. Insist that any agency you hire ties their work to metrics that actually affect your revenue." : "Un autre red flag courant : les agences qui se concentrent entièrement sur les métriques de vanité comme les impressions, la portée et le nombre d'abonnés plutôt que sur les résultats commerciaux comme les leads, les appels et les ventes. La portée sur les réseaux sociaux qui ne se traduit pas en clients est du divertissement, pas du marketing. Insistez pour que toute agence que vous embauchez lie son travail à des métriques qui affectent réellement vos revenus."}
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-primary-600 mb-4">
            {isEn ? "What a good contract with an agency should include" : "Ce qu'un bon contrat avec une agence doit inclure"}
          </h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {isEn ? "A solid agency contract should specify the scope of services in detail, the monthly deliverables, the reporting format and frequency, the notice period to cancel, and who owns all assets created. It should also include a clause about confidentiality and data protection. If any of these elements are missing or vague, request clarification before signing." : "Un contrat d'agence solide doit spécifier le périmètre des services en détail, les livrables mensuels, le format et la fréquence des rapports, le préavis pour annuler, et qui possède tous les actifs créés. Il doit aussi inclure une clause sur la confidentialité et la protection des données. Si l'un de ces éléments est absent ou vague, demandez des éclaircissements avant de signer."}
          </p>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {isEn ? "We recommend starting with a 3-month trial period before committing to a longer contract. This gives both parties time to establish working rhythms and evaluate if the relationship is producing the expected results. Reputable agencies accept trial periods — they are confident in their ability to deliver." : "Nous recommandons de commencer par une période d'essai de 3 mois avant de s'engager dans un contrat plus long. Cela donne aux deux parties le temps d'établir des rythmes de travail et d'évaluer si la relation produit les résultats attendus. Les agences réputées acceptent les périodes d'essai — elles ont confiance en leur capacité à livrer."}
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
