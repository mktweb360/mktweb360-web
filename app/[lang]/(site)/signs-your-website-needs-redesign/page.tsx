import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ContactForm } from "@/components/ContactForm";
import { BlogBanner } from "@/components/BlogBanner";
import { RelatedArticles } from "@/components/RelatedArticles";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const isEn = lang === "en";
  return {
    title: isEn ? "Signs Your Website Needs an Urgent Redesign | Mkt Web 360" : "Signes que votre site web a besoin d'une refonte urgente | Mkt Web 360",
    description: isEn ? "The clearest signs that your website is losing you sales and when it makes sense to redesign rather than keep optimising." : "Les signes les plus clairs que votre site web vous fait perdre des ventes et quand il est logique de refondre plutôt que de continuer à optimiser.",
    alternates: { canonical: `https://www.mktweb360.com/${lang}/signs-your-website-needs-redesign/` },
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
          { label: isEn ? "Website redesign" : "Refonte site web" },
        ]} />
        <p className="text-sm text-accent-500 font-semibold mb-2">Web Design</p>
        <h1 className="text-4xl font-bold text-primary-600 mb-4 leading-tight">
          {isEn ? "Signs your website needs an urgent redesign if you want to sell more" : "Signes que votre site web a besoin d'une refonte urgente si vous voulez vendre plus"}
        </h1>
        <p className="text-xl text-gray-500 mb-8 leading-relaxed">
          {isEn ? "A website that looks dated, loads slowly or doesn't convert is costing you customers every day. This guide explains the clearest signs that it is time to redesign." : "Un site web qui semble dépassé, se charge lentement ou ne convertit pas vous coûte des clients chaque jour. Ce guide explique les signes les plus clairs qu'il est temps de le refondre."}
        </p>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-primary-600 mb-4">
            {isEn ? "Your website is older than 3 years" : "Votre site web a plus de 3 ans"}
          </h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {isEn ? "Web design standards change rapidly. A website built 3-4 years ago was probably designed for a different browsing landscape, before Core Web Vitals became a ranking factor, before mobile traffic surpassed desktop, and before the design conventions your potential customers now expect. An outdated design signals to visitors — consciously or not — that your business may also be behind." : "Les standards du design web changent rapidement. Un site construit il y a 3 à 4 ans a probablement été conçu pour un paysage de navigation différent, avant que les Core Web Vitals ne deviennent un facteur de classement, avant que le trafic mobile ne dépasse le desktop, et avant les conventions de design que vos clients potentiels attendent maintenant. Un design dépassé signale aux visiteurs — consciemment ou non — que votre entreprise est peut-être aussi en retard."}
          </p>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {isEn ? "The benchmark test: show your website to someone outside your industry who doesn't know you. Ask them what they think the business does, who it serves and whether they would trust it. If their answers don't match your intentions, or if they hesitate before saying they'd trust it, your website is not doing its job. First impressions are formed in 0.05 seconds — you don't get a second chance." : "Le test de référence : montrez votre site web à quelqu'un hors de votre secteur qui ne vous connaît pas. Demandez-leur ce que selon eux l'entreprise fait, qui elle sert et s'ils lui feraient confiance. Si leurs réponses ne correspondent pas à vos intentions, ou s'ils hésitent avant de dire qu'ils lui feraient confiance, votre site web ne fait pas son travail. Les premières impressions se forment en 0,05 secondes — vous n'avez pas de seconde chance."}
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-primary-600 mb-4">
            {isEn ? "It loads slowly on mobile" : "Il se charge lentement sur mobile"}
          </h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {isEn ? "More than 60% of web traffic now comes from mobile devices. Google uses mobile-first indexing, which means it primarily evaluates the mobile version of your site for ranking purposes. A site that loads in 5+ seconds on mobile is invisible in search and frustrating for users. Use Google PageSpeed Insights to test your site — a score below 50 on mobile is a serious problem that optimisation alone usually cannot fix." : "Plus de 60% du trafic web vient maintenant des appareils mobiles. Google utilise l'indexation mobile-first, ce qui signifie qu'il évalue principalement la version mobile de votre site à des fins de classement. Un site qui se charge en 5+ secondes sur mobile est invisible dans les recherches et frustrant pour les utilisateurs. Utilisez Google PageSpeed Insights pour tester votre site — un score inférieur à 50 sur mobile est un problème sérieux que l'optimisation seule ne peut généralement pas résoudre."}
          </p>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {isEn ? "Slow loading is often structural — caused by an outdated architecture, too many plugins, unoptimised images accumulated over years, or a hosting plan that was never upgraded as the site grew. At a certain point, continuing to optimise a fundamentally slow site is less cost-effective than rebuilding it properly. A modern site built with performance in mind from the start will achieve Core Web Vitals scores that an old site can rarely match through optimisation alone." : "Le chargement lent est souvent structurel — causé par une architecture dépassée, trop de plugins, des images non optimisées accumulées sur des années, ou un plan d'hébergement qui n'a jamais été mis à niveau à mesure que le site grandissait. À un certain moment, continuer à optimiser un site fondamentalement lent est moins rentable que de le reconstruire correctement. Un site moderne conçu avec la performance à l'esprit dès le départ atteindra des scores Core Web Vitals qu'un vieux site peut rarement égaler par l'optimisation seule."}
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-primary-600 mb-4">
            {isEn ? "Visitors leave without converting" : "Les visiteurs partent sans convertir"}
          </h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {isEn ? "A high bounce rate or low conversion rate is a symptom — the cause could be poor design, unclear messaging, a broken user flow or a combination. If your website analytics show that people visit but don't contact you, request quotes, or make purchases, the website is failing at its primary job. Benchmark: a well-designed service business website should convert 2-5% of visitors into leads." : "Un taux de rebond élevé ou un faible taux de conversion est un symptôme — la cause pourrait être un mauvais design, une messagerie peu claire, un flux utilisateur défaillant ou une combinaison. Si vos analytics montrent que les gens visitent mais ne vous contactent pas, ne demandent pas de devis ou ne font pas d'achats, le site web échoue dans son travail principal. Référence : un site web d'entreprise de services bien conçu devrait convertir 2 à 5% des visiteurs en leads."}
          </p>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {isEn ? "Before redesigning for conversion, identify the specific drop-off points using heatmaps (Hotjar has a free tier) and session recordings. These show you exactly where users lose interest or get confused. Sometimes conversion problems can be fixed with targeted improvements — better CTAs, a clearer headline, a simplified form. But if the issues are pervasive throughout the site, a redesign is more efficient than fixing problems one by one." : "Avant de refondre pour la conversion, identifiez les points de chute spécifiques en utilisant des heatmaps (Hotjar a un niveau gratuit) et des enregistrements de session. Ceux-ci vous montrent exactement où les utilisateurs perdent intérêt ou se confondent. Parfois, les problèmes de conversion peuvent être résolus avec des améliorations ciblées — de meilleurs CTAs, un titre plus clair, un formulaire simplifié. Mais si les problèmes sont répandus dans tout le site, une refonte est plus efficace que de corriger les problèmes un par un."}
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-primary-600 mb-4">
            {isEn ? "It is not optimised for SEO" : "Il n'est pas optimisé pour le SEO"}
          </h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {isEn ? "Many older websites were built without SEO in mind — no proper heading hierarchy, no meta descriptions, images without alt text, no structured data, slow loading times and poor mobile experience. These structural SEO problems accumulate and make it very difficult to rank for competitive keywords no matter how much content you add. If your website generates almost no organic traffic, SEO architecture is often the root cause." : "De nombreux sites plus anciens ont été construits sans tenir compte du SEO — pas de hiérarchie de titres appropriée, pas de meta descriptions, images sans texte alt, pas de données structurées, temps de chargement lents et mauvaise expérience mobile. Ces problèmes SEO structurels s'accumulent et rendent très difficile le classement pour des mots-clés compétitifs peu importe le contenu que vous ajoutez. Si votre site génère presque pas de trafic organique, l'architecture SEO est souvent la cause première."}
          </p>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {isEn ? "A redesign is an opportunity to build SEO in from the ground up: clean URL structure, proper heading hierarchy, schema markup, optimised images, fast loading and a content architecture that targets the keywords your customers actually search for. The difference in organic performance between a site built with SEO as an afterthought and one built with SEO as a foundation can be dramatic." : "Une refonte est une opportunité de construire le SEO dès le départ : structure d'URL propre, hiérarchie de titres appropriée, balisage schema, images optimisées, chargement rapide et architecture de contenu qui cible les mots-clés que vos clients recherchent réellement. La différence de performance organique entre un site construit avec le SEO comme une réflexion après coup et un site construit avec le SEO comme fondation peut être dramatique."}
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-primary-600 mb-4">
            {isEn ? "Your competition has a better website" : "Votre concurrence a un meilleur site web"}
          </h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {isEn ? "When a potential customer compares you with competitors, your website is one of the primary factors in their evaluation. If your top competitors have modern, fast, professional websites and yours looks dated by comparison, you are starting with a disadvantage in every sales interaction. Search 'your service in your city' and evaluate the top 3-5 results honestly. Are you the best, the worst or somewhere in between?" : "Quand un client potentiel vous compare à des concurrents, votre site web est l'un des principaux facteurs de son évaluation. Si vos principaux concurrents ont des sites web modernes, rapides et professionnels et que le vôtre semble dépassé en comparaison, vous commencez avec un désavantage dans chaque interaction de vente. Recherchez 'votre service dans votre ville' et évaluez honnêtement les 3 à 5 premiers résultats. Êtes-vous le meilleur, le pire ou quelque part entre les deux ?"}
          </p>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {isEn ? "Your website is your most visible competitive asset. While competitors can match your prices, copy your services and even hire your staff, they cannot instantly replicate a well-built digital presence. A properly designed website is an asset that pays dividends for 3-5 years. The ROI calculation is not 'the cost of a new website' but 'the cost of a new website versus the customers lost every month with the current one.'" : "Votre site web est votre actif compétitif le plus visible. Alors que les concurrents peuvent correspondre à vos prix, copier vos services et même embaucher votre personnel, ils ne peuvent pas instantanément répliquer une présence numérique bien construite. Un site web correctement conçu est un actif qui rapporte des dividendes pendant 3 à 5 ans. Le calcul du ROI n'est pas 'le coût d'un nouveau site' mais 'le coût d'un nouveau site par rapport aux clients perdus chaque mois avec l'actuel.'"}
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
      <RelatedArticles category="Web Design" />
    </>
  );
}
