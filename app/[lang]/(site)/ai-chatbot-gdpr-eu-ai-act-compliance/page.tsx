import { Breadcrumbs } from "@/components/Breadcrumbs";
import { BlogBanner } from "@/components/BlogBanner";
import { RelatedArticles } from "@/components/RelatedArticles";
import { alternatesFor } from "@/lib/i18n/routes";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const isEn = lang === "en";
  return {
    title: isEn
      ? "AI Chatbot and Legal Compliance: GDPR, EU AI Act and What Changes in August 2026"
      : "Chatbot IA et conformité légale : RGPD, AI Act européen et ce qui change en août 2026",
    description: isEn
      ? "In August 2026 the main AI Act obligations for chatbots come into force. What you need to do to comply with GDPR and the EU AI Act, and why compliance is a competitive advantage."
      : "En août 2026 entrent en vigueur les principales obligations de l'AI Act pour les chatbots. Ce que vous devez faire pour respecter le RGPD et l'AI Act européen, et pourquoi la conformité est un avantage concurrentiel.",
    alternates: alternatesFor(`/${lang}/ai-chatbot-gdpr-eu-ai-act-compliance/`) ?? {
      canonical: `https://www.mktweb360.com/${lang}/ai-chatbot-gdpr-eu-ai-act-compliance/`,
    },
    openGraph: {
      title: isEn
        ? "AI Chatbot and Legal Compliance: GDPR, EU AI Act and What Changes in August 2026 | Mkt Web 360"
        : "Chatbot IA et conformité légale : RGPD, AI Act européen et ce qui change en août 2026 | Mkt Web 360",
      description: isEn
        ? "In August 2026 the main AI Act obligations for chatbots come into force. What you need to do to comply with GDPR and the EU AI Act, and why compliance is a competitive advantage."
        : "En août 2026 entrent en vigueur les principales obligations de l'AI Act pour les chatbots. Ce que vous devez faire pour respecter le RGPD et l'AI Act européen, et pourquoi la conformité est un avantage concurrentiel.",
    },
  };
}

export default async function Page({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const isEn = lang === "en";

  const faqs = isEn
    ? [
        {
          q: "Is the EU AI Act already in force?",
          a: "The EU AI Act was approved and entered into force in 2024. The transparency obligations under Article 50 that apply to chatbots come into application on 2 August 2026.",
        },
        {
          q: "What happens if my current chatbot does not comply?",
          a: "From August 2026 onwards, the relevant national supervisory authority can open investigations and impose sanctions. Fines for non-compliance with the transparency obligations can reach 3% of global annual turnover.",
        },
        {
          q: "Does the chatbot need explicit user consent?",
          a: "For processing conversation data you need a legal basis under the GDPR. This can be legitimate interest for service provision, or explicit consent if the data is to be used to train the model or for other additional purposes.",
        },
        {
          q: "Do I need a DPO to deploy a chatbot?",
          a: "Not necessarily. The obligation to have a DPO under the GDPR depends on the volume and nature of data processing, not on having a chatbot specifically.",
        },
      ]
    : [
        {
          q: "L'AI Act européen est-il déjà en vigueur ?",
          a: "L'AI Act européen a été approuvé et est entré en vigueur en 2024. Les obligations de transparence de l'article 50 qui s'appliquent aux chatbots entrent en application le 2 août 2026.",
        },
        {
          q: "Que se passe-t-il si mon chatbot actuel n'est pas conforme ?",
          a: "À partir d'août 2026, l'autorité de supervision nationale compétente peut ouvrir des enquêtes et sanctionner. Les amendes pour non-respect des obligations de transparence peuvent atteindre 3 % du chiffre d'affaires annuel mondial.",
        },
        {
          q: "Le chatbot a-t-il besoin du consentement explicite de l'utilisateur ?",
          a: "Pour le traitement des données de la conversation, vous avez besoin d'une base juridique en vertu du RGPD. Il peut s'agir d'un intérêt légitime pour la prestation du service, ou d'un consentement explicite si les données doivent être utilisées pour entraîner le modèle ou à d'autres fins supplémentaires.",
        },
        {
          q: "Ai-je besoin d'un DPO pour déployer un chatbot ?",
          a: "Pas nécessairement. L'obligation d'avoir un DPO en vertu du RGPD dépend du volume et de la nature du traitement des données, et non du fait d'avoir un chatbot spécifiquement.",
        },
      ];

  return (
    <>
      <div className="max-w-3xl mx-auto px-4 py-12">
        <Breadcrumbs
          crumbs={[
            { label: isEn ? "Home" : "Accueil", href: `/${lang}/` },
            { label: "Blog", href: `/${lang}/blog/` },
            { label: isEn ? "AI Chatbot & Legal Compliance" : "Chatbot IA & conformité légale" },
          ]}
        />

        <p className="text-sm text-accent-500 font-semibold mb-2">
          {isEn ? "Chatbots" : "Chatbots"}
        </p>

        <h1 className="text-4xl font-bold text-primary-600 mb-4 leading-tight">
          {isEn
            ? "AI Chatbot and Legal Compliance: GDPR, EU AI Act and What Changes in August 2026"
            : "Chatbot IA et conformité légale : RGPD, AI Act européen et ce qui change en août 2026"}
        </h1>

        <p className="text-xl text-gray-500 mb-8 leading-relaxed">
          {isEn
            ? "On 2 August 2026 the AI Act transparency obligations that directly affect chatbots come into application. Complying with the GDPR and the EU AI Act is not just about avoiding fines — it is a competitive advantage. If you are thinking about deploying a chatbot for your business, this is the moment to do it right."
            : "Le 2 août 2026 entrent en application les obligations de transparence de l'AI Act qui concernent directement les chatbots. Respecter le RGPD et l'AI Act européen ne consiste pas seulement à éviter des sanctions : c'est un avantage concurrentiel. Si vous envisagez de déployer un chatbot pour votre entreprise, c'est le moment de le faire correctement."}
        </p>

        <p className="text-gray-600 mb-6 leading-relaxed">
          {isEn
            ? "Many businesses discover that their chatbot is non-compliant only after it is already in production. The good news is that catching up is more straightforward than it seems if you understand what each legal framework requires. Here we separate what the EU AI Act says from what data protection law says, and translate both into concrete actions."
            : "De nombreuses entreprises découvrent que leur chatbot n'est pas conforme seulement après l'avoir mis en production. La bonne nouvelle est qu'il est plus simple de se mettre à jour qu'il n'y paraît si l'on comprend ce qu'exige chaque cadre juridique. Ici, nous séparons ce que dit l'AI Act de ce que dit la réglementation sur la protection des données, et nous traduisons les deux en actions concrètes."}
        </p>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-primary-600 mb-4">
            {isEn
              ? "What the EU AI Act says about chatbots"
              : "Ce que dit l'AI Act européen sur les chatbots"}
          </h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {isEn
              ? "Article 50 of the EU AI Act establishes transparency obligations for AI systems that interact with people. In practice this means the user must know, clearly, that they are interacting with an automated system and not with a person. These obligations come into application on 2 August 2026."
              : "L'article 50 de l'AI Act européen établit des obligations de transparence pour les systèmes d'intelligence artificielle qui interagissent avec des personnes. En pratique, cela signifie que l'utilisateur doit savoir clairement qu'il interagit avec un système automatisé et non avec une personne. Ces obligations entrent en application le 2 août 2026."}
          </p>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {isEn
              ? "National supervisory authorities will be responsible for overseeing compliance. From that date they may open investigations and apply sanctions. Non-compliance with the transparency obligations can reach up to 3% of global annual turnover — a figure that makes compliance a priority rather than an optional extra."
              : "Les autorités de supervision nationales seront chargées de contrôler la conformité. À partir de cette date, elles pourront ouvrir des enquêtes et appliquer des sanctions. Le non-respect des obligations de transparence peut atteindre jusqu'à 3 % du chiffre d'affaires annuel mondial — un chiffre qui fait de la conformité une priorité et non un extra optionnel."}
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-primary-600 mb-4">
            {isEn
              ? "What GDPR says about chatbots"
              : "Ce que dit le RGPD sur les chatbots"}
          </h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {isEn
              ? "The EU AI Act does not replace the GDPR — it adds to it. Any chatbot that processes personal data from the conversation — and virtually all of them do — remains subject to the General Data Protection Regulation. Data protection authorities have published specific guidance on the use of chatbots that is worth reviewing before starting the project."
              : "L'AI Act européen ne remplace pas le RGPD — il s'y ajoute. Tout chatbot qui traite des données personnelles issues de la conversation — et pratiquement tous le font — reste soumis au Règlement général sur la protection des données. Les autorités de protection des données ont publié des recommandations spécifiques sur l'utilisation des chatbots qu'il convient de consulter avant de lancer le projet."}
          </p>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {isEn
              ? "The key point in the GDPR is the legal basis for processing. You need to identify why you can process the data: it can be legitimate interest for providing the service, or explicit consent if you are going to use conversations to train the model or for other additional purposes."
              : "Le point clé du RGPD est la base juridique du traitement. Vous devez identifier pourquoi vous pouvez traiter les données : il peut s'agir d'un intérêt légitime pour la prestation du service, ou d'un consentement explicite si vous allez utiliser les conversations pour entraîner le modèle ou à d'autres fins supplémentaires."}
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-primary-600 mb-4">
            {isEn
              ? "The four elements every business chatbot must have from August 2026"
              : "Les quatre éléments que tout chatbot d'entreprise doit avoir à partir d'août 2026"}
          </h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {isEn
              ? "There are four non-negotiable minimum elements. First, clear information to the user that they are interacting with an AI system. Second, a valid legal basis for processing conversation data under the GDPR. Third, information on what is done with that data and how long it is retained. And fourth, a straightforward way for the user to exercise their rights or speak to a human."
              : "Il y a quatre éléments minimaux non négociables. Premièrement, une information claire à l'utilisateur qu'il interagit avec un système IA. Deuxièmement, une base juridique valide pour le traitement des données de conversation au titre du RGPD. Troisièmement, une information sur ce qui est fait avec ces données et la durée de conservation. Et quatrièmement, un moyen simple pour l'utilisateur d'exercer ses droits ou de parler à une personne."}
          </p>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {isEn
              ? "These four elements do not make the project more expensive or complicated if they are considered from the design stage. The usual mistake is to add them afterwards, when flows must be rebuilt. Designing the chatbot with compliance built in from the start is faster and cheaper."
              : "Ces quatre éléments ne renchérissent ni ne compliquent le projet s'ils sont pris en compte dès la phase de conception. L'erreur habituelle est de les ajouter après coup, quand il faut refaire les flux. Concevoir le chatbot avec la conformité intégrée dès le départ est plus rapide et moins coûteux."}
          </p>
        </section>

        <BlogBanner lang={lang} />

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-primary-600 mb-4">
            {isEn
              ? "Why compliance is a competitive advantage"
              : "Pourquoi la conformité est un avantage concurrentiel"}
          </h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {isEn
              ? "Compliance is often perceived as a burden, but in the case of chatbots the opposite is true. A user who knows their data is protected and that they can switch to a human when needed trusts the tool more and uses it more. Transparency drives adoption."
              : "La conformité est souvent perçue comme un fardeau, mais dans le cas des chatbots c'est le contraire. Un utilisateur qui sait que ses données sont protégées et qu'il peut passer à un humain quand il en a besoin fait davantage confiance à l'outil et l'utilise plus. La transparence génère de l'adoption."}
          </p>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {isEn
              ? "Moreover, many businesses are still running chatbots that will not comply in August 2026. Getting ahead places you in front of the competition and avoids the risk of having to shut the system down in the middle of a campaign. Integrating the chatbot within a coherent strategy of AI-driven marketing multiplies that effect."
              : "De plus, de nombreuses entreprises fonctionnent encore avec des chatbots qui ne seront pas conformes en août 2026. Prendre de l'avance vous place devant la concurrence et évite le risque de devoir mettre le système hors ligne au milieu d'une campagne. Intégrer le chatbot dans une stratégie cohérente de marketing basé sur l'IA multiplie cet effet."}
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-primary-600 mb-4">
            {isEn
              ? "Compliance checklist for chatbots in the EU"
              : "Checklist de conformité pour les chatbots dans l'UE"}
          </h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {isEn
              ? "A practical ten-point checklist helps you verify the status of your project: clear notice that it is an AI, documented legal basis, accessible data processing information, data retention policy, escalation route to a human, consent records where applicable, data security measures, procedure for exercising rights, review of third-party providers, and risk assessment based on the sector."
              : "Une checklist pratique en dix points vous aide à vérifier l'état de votre projet : avis clair qu'il s'agit d'une IA, base juridique documentée, information sur le traitement des données accessible, politique de conservation des données, voie d'escalade vers un humain, registres de consentement le cas échéant, mesures de sécurité des données, procédure d'exercice des droits, révision des prestataires tiers et évaluation des risques selon le secteur."}
          </p>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {isEn
              ? "Going through these points before launch avoids most problems. And a well-built, transparent system also projects a stronger, more trustworthy brand image."
              : "Passer en revue ces points avant le lancement évite la plupart des problèmes. Et un système bien conçu et transparent projette également une image de marque plus solide et fiable."}
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-primary-600 mb-4">
            {isEn
              ? "Sectors with additional requirements"
              : "Secteurs soumis à des exigences supplémentaires"}
          </h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {isEn
              ? "Not all sectors start from the same point. In healthcare, health data is a special category and requires reinforced safeguards. In the financial sector, information and traceability obligations are stricter. And when a chatbot may come into contact with minors, additional protections are activated under the GDPR."
              : "Tous les secteurs ne partent pas du même point. Dans la santé, les données de santé sont une catégorie particulière et exigent des garanties renforcées. Dans le secteur financier, les obligations d'information et de traçabilité sont plus strictes. Et quand un chatbot peut entrer en contact avec des mineurs, des protections supplémentaires s'activent au titre du RGPD."}
          </p>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {isEn
              ? "If you operate in any of these fields, a specific analysis before deploying the chatbot is advisable. Each sector has nuances that a generic approach does not cover, and that is precisely where proper advice makes the difference between a safe project and an avoidable sanction."
              : "Si vous opérez dans l'un de ces domaines, une analyse spécifique avant de déployer le chatbot est conseillée. Chaque secteur a des nuances qu'une approche générique ne couvre pas, et c'est précisément là que le conseil spécialisé fait la différence entre un projet sûr et une sanction évitable."}
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-primary-600 mb-4">
            {isEn ? "Frequently asked questions" : "Questions fréquentes"}
          </h2>
          <div className="space-y-3">
            {faqs.map((faq) => (
              <details key={faq.q} className="border border-gray-200 rounded-xl overflow-hidden group">
                <summary className="px-6 py-4 cursor-pointer font-semibold text-primary-700 hover:bg-primary-50 list-none flex justify-between items-center">
                  {faq.q}
                  <span className="text-accent-500 group-open:rotate-180 transition-transform">▾</span>
                </summary>
                <div className="px-6 py-4 text-gray-600 border-t border-gray-100">{faq.a}</div>
              </details>
            ))}
          </div>
        </section>

        <nav className="mt-12 pt-8 border-t border-gray-200">
          <a href={`/${lang}/blog/`} className="text-accent-500 hover:text-accent-600 font-medium text-sm">
            {isEn ? "← Back to blog" : "← Retour au blog"}
          </a>
        </nav>
      </div>
      <RelatedArticles currentSlug="ai-chatbot-gdpr-eu-ai-act-compliance" />
    </>
  );
}
