import { Breadcrumbs } from "@/components/Breadcrumbs";
import { BlogBanner } from "@/components/BlogBanner";
import { alternatesFor } from "@/lib/i18n/routes";
import Link from "next/link";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const isEn = lang === "en";
  return {
    title: isEn
      ? "How AI Is Changing Digital Marketing Forever"
      : "Comment l'IA transforme le marketing digital pour toujours",
    description: isEn
      ? "AI is no longer a trend in marketing: it is the infrastructure. More than 70% of digital marketing interactions will be influenced by AI in 2026. What changes, what does not, and what you need to do."
      : "L'IA n'est plus une tendance en marketing : c'est l'infrastructure. Plus de 70 % des interactions de marketing digital seront influencées par l'IA en 2026. Ce qui change, ce qui ne change pas et ce que vous devez faire.",
    alternates: alternatesFor(`/${lang}/how-ai-is-changing-digital-marketing/`) ?? {
      canonical: `https://www.mktweb360.com/${lang}/how-ai-is-changing-digital-marketing/`,
    },
    openGraph: {
      title: isEn
        ? "How AI Is Changing Digital Marketing Forever | Mkt Web 360"
        : "Comment l'IA transforme le marketing digital pour toujours | Mkt Web 360",
      description: isEn
        ? "AI is no longer a trend in marketing: it is the infrastructure. More than 70% of digital marketing interactions will be influenced by AI in 2026."
        : "L'IA n'est plus une tendance en marketing : c'est l'infrastructure. Plus de 70 % des interactions de marketing digital seront influencées par l'IA en 2026.",
    },
  };
}

export default async function Page({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const isEn = lang === "en";

  const faqs = [
    {
      q: isEn
        ? "Will AI replace digital marketing professionals?"
        : "L'IA va-t-elle remplacer les professionnels du marketing digital ?",
      a: isEn
        ? "It will not replace them, but it will change what they do. Repetitive tasks will be increasingly automated. Those requiring strategic judgement, genuine creativity, understanding of the business context and human relationships will not. The marketing professional of the future combines business knowledge with AI literacy."
        : "Elle ne les remplacera pas, mais elle changera ce qu'ils font. Les tâches répétitives seront de plus en plus automatisées. Celles qui nécessitent un jugement stratégique, une créativité genuinement humaine, une compréhension du contexte commercial et des relations humaines ne le seront pas. Le professionnel du marketing de l'avenir combine connaissance des affaires et maîtrise de l'IA.",
    },
    {
      q: isEn
        ? "What budget should an SME dedicate to AI tools in 2026?"
        : "Quel budget une PME devrait-elle consacrer aux outils d'IA en 2026 ?",
      a: isEn
        ? "Between £50 and £200 per month for basic tools is sufficient to achieve real productivity advantages. The hidden cost is not the tools but the learning and setup time, which can be 20–40 initial hours."
        : "Entre 50 et 200 € par mois pour les outils de base est suffisant pour obtenir de vrais avantages de productivité. Le coût caché n'est pas dans les outils mais dans le temps d'apprentissage et de configuration, qui peut représenter 20 à 40 heures initiales.",
    },
    {
      q: isEn
        ? "How do I know if an agency really uses AI or just claims to?"
        : "Comment savoir si une agence utilise vraiment l'IA ou le dit juste ?",
      a: isEn
        ? "Ask about their specific processes: what tools they use in each phase, how they document prompts and workflows, what results they specifically attribute to AI. An agency that genuinely uses AI can show you how it works, not just say they do it."
        : "Demandez leurs processus spécifiques : quels outils ils utilisent à chaque phase, comment ils documentent les prompts et les flux de travail, quels résultats ils attribuent spécifiquement à l'IA. Une agence qui utilise vraiment l'IA peut vous montrer comment ça fonctionne, pas seulement le dire.",
    },
    {
      q: isEn
        ? "Should an SME invest in its own AI or use SaaS tools?"
        : "Une PME devrait-elle investir dans sa propre IA ou utiliser des outils SaaS ?",
      a: isEn
        ? "For 99% of SMEs, SaaS tools are the answer. Developing proprietary AI requires data, infrastructure and specialised talent that no SME can justify. AI SaaS tools in 2026 offer capabilities that only large corporations had 3 years ago."
        : "Pour 99 % des PME, les outils SaaS sont la réponse. Développer une IA propriétaire nécessite des données, une infrastructure et des talents spécialisés qu'aucune PME ne peut justifier. Les outils SaaS d'IA en 2026 offrent des capacités que seules les grandes entreprises avaient il y a 3 ans.",
    },
  ];

  return (
    <>
      <div className="max-w-3xl mx-auto px-4 py-12">
        <Breadcrumbs
          crumbs={[
            { label: isEn ? "Home" : "Accueil", href: `/${lang}/` },
            { label: "Blog", href: `/${lang}/blog/` },
            {
              label: isEn
                ? "How AI changes digital marketing"
                : "Comment l'IA change le marketing digital",
            },
          ]}
        />

        <p className="text-sm text-accent-500 font-semibold mb-2">
          {isEn ? "AI & Marketing" : "IA & Marketing"}
        </p>
        <h1 className="text-4xl font-bold text-primary-600 mb-4 leading-tight">
          {isEn
            ? "How AI is changing digital marketing forever"
            : "Comment l'IA est en train de transformer le marketing digital pour toujours"}
        </h1>
        <p className="text-xl text-gray-500 mb-8 leading-relaxed">
          {isEn
            ? "AI is no longer a trend in marketing: it is the infrastructure. More than 70% of digital marketing interactions will be influenced by AI in 2026. We analyse what changes, what does not change and what you need to do."
            : "L'IA n'est plus une tendance en marketing : c'est l'infrastructure. Plus de 70 % des interactions de marketing digital seront influencées par l'IA en 2026. Nous analysons ce qui change, ce qui ne change pas et ce que vous devez faire."}
        </p>

        <section className="mb-10">
          <p className="text-gray-600 mb-4 leading-relaxed">
            {isEn
              ? "Discussing whether AI 'is going to change' marketing is already late: the change happened. What was once a tool some people tried is today the layer on which search, advertising, content creation and customer relationships all operate. The useful question is no longer whether to adopt it, but how to do so with sound judgement."
              : "Parler de si l'IA 'va changer' le marketing, c'est déjà trop tard : le changement a eu lieu. Ce qui était autrefois un outil que certains essayaient est aujourd'hui la couche sur laquelle fonctionnent la recherche, la publicité, la création de contenu et la relation client. La question utile n'est plus de savoir si on l'adopte, mais comment le faire avec discernement."}
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-primary-600 mb-4">
            {isEn
              ? "The change that already happened: AI as marketing infrastructure"
              : "Le changement qui s'est déjà produit : l'IA comme infrastructure marketing"}
          </h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {isEn
              ? "According to IEBS, more than 70% of digital marketing interactions will be influenced by AI in 2026. This means AI is no longer a channel or a campaign: it is underneath everything, from the search engine deciding which answer to show to the advertising system optimising your investment."
              : "Selon IEBS, plus de 70 % des interactions de marketing digital seront influencées par l'IA en 2026. Cela signifie que l'IA n'est plus un canal ni une campagne : elle est en dessous de tout, du moteur de recherche qui décide quelle réponse afficher au système publicitaire qui optimise votre investissement."}
          </p>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {isEn
              ? "The underlying data confirms it through investment: IBM notes that 75% of executives plan to invest in agentic AI. When the infrastructure changes, companies that do not adapt do not compete at a disadvantage — they simply disappear from where their customers are searching."
              : "Les données sous-jacentes le confirment à travers l'investissement : IBM note que 75 % des dirigeants prévoient d'investir dans l'IA agentique. Lorsque l'infrastructure change, les entreprises qui ne s'adaptent pas ne sont pas en désavantage concurrentiel — elles disparaissent simplement des endroits où leur client cherche."}
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-primary-600 mb-4">
            {isEn
              ? "What AI does well in marketing with real data"
              : "Ce que l'IA fait bien en marketing, avec des données réelles"}
          </h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {isEn
              ? "AI excels on three concrete fronts. The first is content production: it multiplies the speed of generating drafts, texts and variations up to tenfold. The second is data analysis, where it processes volumes that no human team could handle manually. The third is personalisation at scale, adapting messages to segments that were previously impossible to serve one-to-one."
              : "L'IA excelle sur trois fronts concrets. Le premier est la production de contenu : elle multiplie jusqu'à dix fois la vitesse de génération de brouillons, textes et variations. Le deuxième est l'analyse de données, où elle traite des volumes qu'aucune équipe humaine ne pourrait gérer manuellement. Le troisième est la personnalisation à grande échelle, en adaptant les messages à des segments qu'il était auparavant impossible de servir individuellement."}
          </p>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {isEn
              ? "These three uses are the ones that give immediate return to an SME. To take advantage of them without spreading yourself too thin, it is worth relying on the AI tools that really work and discarding the rest."
              : "Ces trois utilisations sont celles qui donnent un retour immédiat à une PME. Pour en profiter sans se disperser, il vaut mieux s'appuyer sur les outils d'IA qui fonctionnent vraiment et écarter les autres."}
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-primary-600 mb-4">
            {isEn
              ? "What AI still cannot do"
              : "Ce que l'IA ne peut pas encore faire"}
          </h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {isEn
              ? "Against what changes, there is a core that remains: strategy, judgement, relationships and genuine creativity. AI does not decide your brand positioning, does not understand the particularities of your market the way someone who lives it every day does, nor does it build the trust that is generated between people."
              : "Face à ce qui change, il y a un noyau qui reste : la stratégie, le jugement, les relations et la créativité genuinement humaine. L'IA ne décide pas du positionnement de votre marque, ne comprend pas les particularités de votre marché comme quelqu'un qui le vit quotidiennement, et ne construit pas la confiance qui se génère entre les personnes."}
          </p>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {isEn
              ? "Confusing speed with strategy is the most expensive mistake of this era. Producing a lot of mediocre content at great speed does not improve any business. AI amplifies what you already have: if the strategy is good, it multiplies it; if there is none, it multiplies the noise."
              : "Confondre vitesse et stratégie est l'erreur la plus coûteuse de cette période. Produire beaucoup de contenu médiocre à grande vitesse n'améliore aucune entreprise. L'IA amplifie ce que vous avez déjà : si la stratégie est bonne, elle la multiplie ; s'il n'y en a pas, elle multiplie le bruit."}
          </p>
        </section>

        <BlogBanner lang={lang} />

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-primary-600 mb-4">
            {isEn
              ? "The new role of the marketing professional in the AI era"
              : "Le nouveau rôle du professionnel du marketing à l'ère de l'IA"}
          </h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {isEn
              ? "The marketing professional does not disappear — they transform. Their value shifts from executing repetitive tasks towards directing, reviewing and providing judgement to what AI produces. AI literacy becomes a core competency, as important as knowing how to write or analyse data was a few years ago."
              : "Le professionnel du marketing ne disparaît pas — il se transforme. Sa valeur se déplace de l'exécution de tâches répétitives vers la direction, la révision et l'apport de discernement à ce que l'IA produit. La maîtrise de l'IA devient une compétence fondamentale, aussi importante que savoir rédiger ou analyser des données il y a quelques années."}
          </p>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {isEn
              ? "The winning profile is the one that combines deep business knowledge with confidence in AI tools. This is where AI agents for marketing also come in, which delegate execution so that people can concentrate on making decisions."
              : "Le profil gagnant est celui qui combine une connaissance approfondie de l'entreprise avec une aisance dans les outils d'IA. C'est là qu'interviennent aussi les agents d'IA pour le marketing, qui délèguent l'exécution pour que les personnes se concentrent sur les décisions."}
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-primary-600 mb-4">
            {isEn
              ? "How to prepare your company for marketing with AI"
              : "Comment préparer votre entreprise au marketing avec l'IA"}
          </h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {isEn
              ? "Preparation does not start by buying tools, but by ordering what you already have. Define which repetitive tasks consume the most time, choose one or two tools to tackle them and set aside the initial 20–40 hours of learning that getting started requires. With a budget of between £50 and £200 per month you already obtain real productivity advantages."
              : "La préparation ne commence pas par l'achat d'outils, mais par l'organisation de ce que vous avez déjà. Définissez quelles tâches répétitives consomment le plus de temps, choisissez un ou deux outils pour les traiter et réservez les 20 à 40 heures initiales d'apprentissage que la mise en route exige. Avec un budget de 50 à 200 € par mois, vous obtenez déjà de vrais avantages de productivité."}
          </p>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {isEn
              ? "One front that no business should neglect is visibility in generative engines. As people ask AI directly, appearing in its responses becomes as important as appearing on Google, and this is where AI positioning comes into play."
              : "Un front qu'aucune entreprise ne devrait négliger est la visibilité dans les moteurs génératifs. À mesure que les gens interrogent directement l'IA, apparaître dans ses réponses devient aussi important qu'apparaître sur Google, et c'est là qu'intervient le positionnement dans l'IA."}
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-primary-600 mb-4">
            {isEn
              ? "The window of opportunity that is closing"
              : "La fenêtre d'opportunité qui se referme"}
          </h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {isEn
              ? "Right now there is an advantage for those who move early: most SMEs have not yet seriously integrated AI into their marketing. That window will not last. As SaaS tools put within reach of anyone capabilities that three years ago only large corporations had, the advantage of being early fades."
              : "En ce moment, il y a un avantage pour ceux qui bougent tôt : la plupart des PME n'ont pas encore intégré l'IA sérieusement dans leur marketing. Cette fenêtre ne durera pas. À mesure que les outils SaaS mettent à la portée de tous des capacités que seules les grandes entreprises avaient il y a trois ans, l'avantage d'être précoce se dilue."}
          </p>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {isEn
              ? "The cost of waiting is not just technological, it is competitive. Those who build their AI marketing capability now start with years of experience when this becomes everyone's standard."
              : "Le coût de l'attente n'est pas seulement technologique, il est concurrentiel. Ceux qui construisent maintenant leur capacité de marketing avec l'IA partent avec des années d'avance quand cela deviendra le standard de tous."}
          </p>
        </section>

        <div className="bg-primary-600 text-white rounded-2xl p-8 mb-10 text-center">
          <h2 className="text-2xl font-bold mb-3">
            {isEn
              ? "Prepare your business for marketing with AI"
              : "Préparez votre entreprise au marketing avec l'IA"}
          </h2>
          <p className="text-primary-200 mb-6">
            {isEn
              ? "At Mkt Web 360 we help SMEs and freelancers integrate AI into their digital strategy with sound judgement, taking advantage of the window of opportunity before it closes."
              : "Chez Mkt Web 360, nous aidons les PME et les indépendants à intégrer l'IA dans leur stratégie digitale avec discernement, en profitant de la fenêtre d'opportunité avant qu'elle ne se referme."}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href={`/${lang}/contact/`}
              className="bg-accent-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-accent-600 transition-colors"
            >
              {isEn ? "Talk to a specialist" : "Parler à un spécialiste"}
            </Link>
            <Link
              href={`/${lang}/geo-ai-positioning/`}
              className="border-2 border-white text-white px-6 py-3 rounded-full font-semibold hover:bg-white/10 transition-colors"
            >
              {isEn ? "See AI positioning" : "Voir le positionnement IA"}
            </Link>
          </div>
        </div>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-primary-600 mb-4">
            {isEn ? "Frequently asked questions" : "Questions fréquentes"}
          </h2>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <details
                key={i}
                className="border border-gray-200 rounded-xl overflow-hidden group"
              >
                <summary className="px-6 py-4 cursor-pointer font-semibold text-primary-700 hover:bg-primary-50 list-none flex justify-between items-center">
                  {faq.q}
                  <span className="text-accent-500 group-open:rotate-180 transition-transform">
                    ▾
                  </span>
                </summary>
                <div className="px-6 py-4 text-gray-600 border-t border-gray-100">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </section>

        <nav className="mt-12 pt-8 border-t border-gray-200">
          <Link
            href={`/${lang}/blog/`}
            className="text-accent-500 hover:text-accent-600 font-medium text-sm"
          >
            {isEn ? "← Back to blog" : "← Retour au blog"}
          </Link>
        </nav>
      </div>
    </>
  );
}
