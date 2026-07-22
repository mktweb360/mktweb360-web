import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ContactForm } from "@/components/ContactForm";
import { BlogBanner } from "@/components/BlogBanner";
import { RelatedArticles } from "@/components/RelatedArticles";
import { alternatesFor } from "@/lib/i18n/routes";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const isEn = lang === "en";
  return {
    title: isEn ? "How to Create a Value Proposition That Differentiates You | Mkt Web 360" : "Comment créer une proposition de valeur qui vous différencie | Mkt Web 360",
    description: isEn ? "Step-by-step guide to create a value proposition that clearly explains why customers should choose you over the competition." : "Guide étape par étape pour créer une proposition de valeur qui explique clairement pourquoi les clients devraient vous choisir plutôt que la concurrence.",
    alternates: alternatesFor(`/${lang}/how-to-create-value-proposition/`) ?? {
      canonical: `https://www.mktweb360.com/${lang}/how-to-create-value-proposition/`,
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
          { label: isEn ? "Value proposition" : "Proposition de valeur" },
        ]} />
        <p className="text-sm text-accent-500 font-semibold mb-2">Strategy</p>
        <h1 className="text-4xl font-bold text-primary-600 mb-4 leading-tight">
          {isEn ? "How to create a value proposition that makes customers choose you" : "Comment créer une proposition de valeur qui fait que les clients vous choisissent"}
        </h1>
        <p className="text-xl text-gray-500 mb-8 leading-relaxed">
          {isEn ? "Most businesses struggle to explain what makes them different. A strong value proposition solves this — it tells your ideal customer exactly why they should choose you over anyone else." : "La plupart des entreprises ont du mal à expliquer ce qui les rend différentes. Une proposition de valeur solide résout ce problème — elle dit à votre client idéal exactement pourquoi il devrait vous choisir plutôt que quelqu'un d'autre."}
        </p>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-primary-600 mb-4">
            {isEn ? "What a value proposition is and why it matters" : "Qu'est-ce qu'une proposition de valeur et pourquoi c'est important"}
          </h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {isEn ? "A value proposition is a clear statement that explains how your product or service solves a customer problem, what benefits it delivers, and why the customer should choose you over the competition. It is not a slogan, a tagline or a mission statement — it is a promise of value that must be credible, specific and relevant to your target audience." : "Une proposition de valeur est une déclaration claire qui explique comment votre produit ou service résout un problème client, quels bénéfices il apporte, et pourquoi le client devrait vous choisir plutôt que la concurrence. Ce n'est pas un slogan, un tagline ou une déclaration de mission — c'est une promesse de valeur qui doit être crédible, spécifique et pertinente pour votre audience cible."}
          </p>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {isEn ? "Most SMEs either have no value proposition or have one so generic it could apply to any competitor. Phrases like 'quality service and the best price' or 'your satisfaction is our priority' mean nothing because every competitor says the same. A powerful value proposition is specific: it names a real problem, offers a concrete solution and makes a promise that differentiates." : "La plupart des PME n'ont soit aucune proposition de valeur, soit une si générique qu'elle pourrait s'appliquer à n'importe quel concurrent. Des phrases comme 'service de qualité et meilleur prix' ou 'votre satisfaction est notre priorité' ne signifient rien car chaque concurrent dit la même chose. Une proposition de valeur puissante est spécifique : elle nomme un vrai problème, offre une solution concrète et fait une promesse qui différencie."}
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-primary-600 mb-4">
            {isEn ? "The 3 elements of a powerful value proposition" : "Les 3 éléments d'une proposition de valeur puissante"}
          </h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {isEn ? "Every effective value proposition has three components: relevance (how your product solves a problem or improves a situation), quantified value (the specific benefits and what the customer gains), and unique differentiation (why you are better or different from the competition). Without all three, the proposition falls flat. Relevance without differentiation is generic. Differentiation without relevance misses the customer." : "Toute proposition de valeur efficace comporte trois composantes : la pertinence (comment votre produit résout un problème ou améliore une situation), la valeur quantifiée (les bénéfices spécifiques et ce que le client gagne), et la différenciation unique (pourquoi vous êtes meilleur ou différent de la concurrence). Sans les trois, la proposition tombe à plat. La pertinence sans différenciation est générique. La différenciation sans pertinence rate le client."}
          </p>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {isEn ? "The best way to develop these three elements is through customer research. What problems do your best customers describe when they talk about why they chose you? What language do they use? The words your customers use to describe your value are almost always more powerful than what you would invent in a brainstorming session." : "La meilleure façon de développer ces trois éléments est à travers la recherche client. Quels problèmes vos meilleurs clients décrivent-ils quand ils parlent de pourquoi ils vous ont choisi ? Quel langage utilisent-ils ? Les mots que vos clients utilisent pour décrire votre valeur sont presque toujours plus puissants que ce que vous inventeriez dans une session de brainstorming."}
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-primary-600 mb-4">
            {isEn ? "How to identify your real differentiators" : "Comment identifier vos vrais différenciateurs"}
          </h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {isEn ? "Your real differentiators are rarely what you think they are. Companies often believe their differentiator is quality, experience or customer service — but these are table stakes that every competitor claims. Real differentiators are specific: a proprietary process, a particular expertise, a unique guarantee, a speed advantage, access to something competitors don't have." : "Vos vrais différenciateurs sont rarement ce que vous croyez qu'ils sont. Les entreprises croient souvent que leur différenciateur est la qualité, l'expérience ou le service client — mais ce sont des bases que chaque concurrent revendique. Les vrais différenciateurs sont spécifiques : un processus propriétaire, une expertise particulière, une garantie unique, un avantage de vitesse, l'accès à quelque chose que les concurrents n't ont pas."}
          </p>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {isEn ? "To find yours, ask your best customers why they chose you over alternatives. Ask what would happen to them if they could no longer use your service. Ask what they would lose. Their answers will reveal your real value — often things you take for granted because they seem obvious to you but are genuinely rare in your market." : "Pour trouver les vôtres, demandez à vos meilleurs clients pourquoi ils vous ont choisi plutôt qu'une alternative. Demandez ce qui leur arriverait s'ils ne pouvaient plus utiliser votre service. Demandez ce qu'ils perdraient. Leurs réponses révéleront votre vraie valeur — souvent des choses que vous tenez pour acquises car elles semblent évidentes pour vous mais sont genuinement rares sur votre marché."}
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-primary-600 mb-4">
            {isEn ? "Value proposition formulas that work" : "Formules de proposition de valeur qui fonctionnent"}
          </h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {isEn ? "Several proven frameworks help structure a value proposition. The Geoff Moore formula: 'For [target customer] who [statement of need], our [product/service] is a [product category] that [key benefit]. Unlike [competition], we [primary differentiation].' This structure forces specificity and makes it impossible to be generic." : "Plusieurs cadres éprouvés aident à structurer une proposition de valeur. La formule de Geoff Moore : 'Pour [client cible] qui [besoin déclaré], notre [produit/service] est un [catégorie de produit] qui [bénéfice clé]. Contrairement à [concurrence], nous [différenciation principale].' Cette structure force la spécificité et rend impossible d'être générique."}
          </p>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {isEn ? "A simpler formula for smaller businesses: '[We/Our product] helps [specific audience] [do X] without [specific pain point].' For example: 'We help small businesses in Toledo attract more local customers through Google without the complexity and cost of large agencies.' This works because it is specific, names a real audience and addresses a real frustration." : "Une formule plus simple pour les petites entreprises : '[Nous/Notre produit] aide [audience spécifique] à [faire X] sans [point de douleur spécifique].' Par exemple : 'Nous aidons les petites entreprises de Tolède à attirer plus de clients locaux via Google sans la complexité et le coût des grandes agences.' Cela fonctionne parce que c'est spécifique, nomme une vraie audience et adresse une vraie frustration."}
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-primary-600 mb-4">
            {isEn ? "Examples of strong value propositions" : "Exemples de propositions de valeur solides"}
          </h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {isEn ? "Stripe's value proposition is simple: 'Payment infrastructure for the internet.' Not 'the best payment platform' but a clear description of what they are and who they serve. Slack's original proposition was equally sharp: 'Be less busy' — three words that immediately resonated with their target audience of overworked professionals. Notice that neither talks about features; both talk about outcomes." : "La proposition de valeur de Stripe est simple : 'Infrastructure de paiement pour internet.' Pas 'la meilleure plateforme de paiement' mais une description claire de ce qu'ils sont et qui ils servent. La proposition originale de Slack était tout aussi tranchante : 'Soyez moins occupé' — trois mots qui ont immédiatement résonné avec leur audience cible de professionnels surchargés. Remarquez qu'aucun ne parle de fonctionnalités ; les deux parlent de résultats."}
          </p>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {isEn ? "For local businesses, strong value propositions are often built around three things: speed (same day, 24 hours, immediate), local expertise (we know your area, your sector, your customers), or specific guarantees (if you are not satisfied, you don't pay). These are tangible, verifiable promises that competitors cannot easily copy because they require actual operational commitment." : "Pour les entreprises locales, les propositions de valeur solides sont souvent construites autour de trois choses : la vitesse (même jour, 24 heures, immédiat), l'expertise locale (nous connaissons votre zone, votre secteur, vos clients), ou des garanties spécifiques (si vous n'êtes pas satisfait, vous ne payez pas). Ce sont des promesses tangibles et vérifiables que les concurrents ne peuvent pas facilement copier car elles nécessitent un vrai engagement opérationnel."}
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
