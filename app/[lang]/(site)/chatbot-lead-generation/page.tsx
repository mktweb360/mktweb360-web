import { Breadcrumbs } from "@/components/Breadcrumbs";
import { BlogBanner } from "@/components/BlogBanner";
import { RelatedArticles } from "@/components/RelatedArticles";
import { alternatesFor } from "@/lib/i18n/routes";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const isEn = lang === "en";
  return {
    title: isEn
      ? "How to Use a Chatbot to Capture and Qualify Leads: A Practical Guide"
      : "Comment utiliser un chatbot pour capter et qualifier des leads : guide pratique",
    description: isEn
      ? "A well-configured chatbot can capture leads 24/7, qualify them with strategic questions and pass them to the CRM with full context. Practical guide to implementing a chatbot lead capture system in 2026."
      : "Un chatbot bien configuré peut capter des leads 24h/24, les qualifier avec des questions stratégiques et les transmettre au CRM avec le contexte complet. Guide pratique pour mettre en place un système de captation de leads par chatbot en 2026.",
    alternates: alternatesFor(`/${lang}/chatbot-lead-generation/`) ?? {
      canonical: `https://www.mktweb360.com/${lang}/chatbot-lead-generation/`,
    },
    openGraph: {
      title: isEn
        ? "How to Use a Chatbot to Capture and Qualify Leads: A Practical Guide | Mkt Web 360"
        : "Comment utiliser un chatbot pour capter et qualifier des leads : guide pratique | Mkt Web 360",
      description: isEn
        ? "A well-configured chatbot can capture leads 24/7, qualify them with strategic questions and pass them to the CRM with full context. Practical guide to implementing a chatbot lead capture system in 2026."
        : "Un chatbot bien configuré peut capter des leads 24h/24, les qualifier avec des questions stratégiques et les transmettre au CRM avec le contexte complet. Guide pratique pour mettre en place un système de captation de leads par chatbot en 2026.",
    },
  };
}

export default async function Page({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const isEn = lang === "en";

  const faqs = isEn
    ? [
        {
          q: "Can the chatbot replace the sales team?",
          a: "No. The chatbot handles the first part of the process — capturing, qualifying and logging the lead — but complex sales conversations require human intervention. The chatbot allows the sales team to start those conversations with more information and at the most appropriate moment.",
        },
        {
          q: "What happens with leads captured outside office hours?",
          a: "The chatbot logs them in the CRM in real time. The team will see them at the start of the working day with all the information. For high-priority leads, the system can send a notification to the salesperson's mobile.",
        },
        {
          q: "Can the chatbot follow up with leads that did not convert?",
          a: "Yes, with specific automation integrations. A lead that did not buy can automatically receive a follow-up message after 3 days, then after 7 days, with the option to resume the conversation.",
        },
        {
          q: "Can the chatbot work across multiple pages of the website?",
          a: "Yes. The widget can be on the entire site or on specific pages with different configurations. It is common to have a more sales-oriented chatbot on the pricing page and a more support-oriented one on product pages.",
        },
      ]
    : [
        {
          q: "Le chatbot peut-il remplacer l'équipe commerciale ?",
          a: "Non. Le chatbot gère la première partie du processus — capter, qualifier et enregistrer le lead — mais les conversations de vente complexes nécessitent une intervention humaine. Le chatbot permet à l'équipe commerciale de démarrer ces conversations avec plus d'informations et au moment le plus approprié.",
        },
        {
          q: "Que se passe-t-il avec les leads captés en dehors des heures ouvrables ?",
          a: "Le chatbot les enregistre dans le CRM en temps réel. L'équipe les verra en début de journée avec toutes les informations. Pour les leads à haute priorité, le système peut envoyer une notification sur le mobile du commercial.",
        },
        {
          q: "Le chatbot peut-il faire le suivi des leads qui n'ont pas converti ?",
          a: "Oui, avec des intégrations d'automatisation spécifiques. Un lead qui n'a pas acheté peut recevoir automatiquement un message de suivi après 3 jours, puis après 7 jours, avec la possibilité de reprendre la conversation.",
        },
        {
          q: "Le chatbot peut-il fonctionner sur plusieurs pages du site web ?",
          a: "Oui. Le widget peut être présent sur tout le site ou sur des pages spécifiques avec des configurations différentes. Il est courant d'avoir un chatbot plus orienté vente sur la page des tarifs et un chatbot plus orienté support sur les pages produit.",
        },
      ];

  return (
    <>
      <div className="max-w-3xl mx-auto px-4 py-12">
        <Breadcrumbs
          crumbs={[
            { label: isEn ? "Home" : "Accueil", href: `/${lang}/` },
            { label: "Blog", href: `/${lang}/blog/` },
            { label: isEn ? "Chatbot lead generation" : "Génération de leads par chatbot" },
          ]}
        />

        <p className="text-sm text-accent-500 font-semibold mb-2">
          {isEn ? "Chatbots" : "Chatbots"}
        </p>

        <h1 className="text-4xl font-bold text-primary-600 mb-4 leading-tight">
          {isEn
            ? "How to Use a Chatbot to Capture and Qualify Leads: A Practical Guide"
            : "Comment utiliser un chatbot pour capter et qualifier des leads : guide pratique"}
        </h1>

        <p className="text-xl text-gray-500 mb-8 leading-relaxed">
          {isEn
            ? "A well-configured chatbot can capture leads around the clock, qualify them with strategic questions and pass them to the CRM with full context. In this practical guide we look at how to build a chatbot capture system that feeds your sales funnel."
            : "Un chatbot bien configuré peut capter des leads 24 heures sur 24, les qualifier avec des questions stratégiques et les transmettre au CRM avec tout le contexte. Dans ce guide pratique, nous voyons comment mettre en place un système de captation par chatbot qui alimente votre entonnoir de vente."}
        </p>

        <p className="text-gray-600 mb-6 leading-relaxed">
          {isEn
            ? "Most websites still rely on a contact form for all their lead capture. It works, but leaves a lot of value on the table: it does not answer questions, does not qualify and is not available when the visitor genuinely has interest. A well-thought-out chatbot covers exactly that gap."
            : "La plupart des sites web continuent de confier toute leur captation à un formulaire de contact. Ça fonctionne, mais laisse beaucoup de valeur sur la table : il ne répond pas aux questions, ne qualifie pas et n'est pas disponible quand le visiteur a vraiment de l'intérêt. Un chatbot bien pensé couvre précisément ce manque."}
        </p>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-primary-600 mb-4">
            {isEn
              ? "Why the chatbot captures more leads than the form"
              : "Pourquoi le chatbot capte plus de leads que le formulaire"}
          </h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {isEn
              ? "The form introduces friction: it asks for data upfront, does not answer questions and the visitor often abandons it. The chatbot reduces that friction because it converses, resolves objections in the moment and is available 24/7, even when your team is not."
              : "Le formulaire introduit de la friction : il demande des données d'emblée, ne répond pas aux questions et le visiteur l'abandonne souvent. Le chatbot réduit cette friction car il discute, résout les objections sur le moment et est disponible 24h/24, même quand votre équipe ne l'est pas."}
          </p>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {isEn
              ? "Response speed is decisive. Contacting a lead within the first 5 minutes can multiply the conversion probability by 9 compared to waiting hours. A chatbot responds instantly, something no human team can guarantee throughout the day."
              : "La vitesse de réponse est déterminante. Contacter un lead dans les 5 premières minutes peut multiplier par 9 la probabilité de conversion par rapport à attendre des heures. Un chatbot répond instantanément, quelque chose qu'aucune équipe humaine ne peut garantir tout au long de la journée."}
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-primary-600 mb-4">
            {isEn
              ? "How to structure a lead capture chatbot"
              : "Comment structurer un chatbot de captation de leads"}
          </h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {isEn
              ? "The first principle is to give value before asking for data. Instead of demanding the email upfront, the chatbot helps, answers a question or guides the visitor towards what they are looking for, and only then asks for contact information."
              : "Le premier principe est de donner de la valeur avant de demander des données. Au lieu d'exiger l'e-mail d'emblée, le chatbot aide, répond à une question ou guide le visiteur vers ce qu'il cherche, et seulement ensuite demande les coordonnées."}
          </p>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {isEn
              ? "A correct flow usually follows four steps: hook with a relevant message, add value by resolving the initial query, qualify with key questions and, finally, capture the data and log the lead. That same conversational approach works well alongside a well-designed landing page as an entry point."
              : "Un flux correct suit généralement quatre étapes : accrocher avec un message pertinent, apporter de la valeur en résolvant la demande initiale, qualifier avec des questions clés et, enfin, capturer les données et enregistrer le lead. Cette même approche conversationnelle fonctionne bien aux côtés d'une landing page bien conçue comme point d'entrée."}
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-primary-600 mb-4">
            {isEn
              ? "Which qualifying questions to include"
              : "Quelles questions de qualification inclure"}
          </h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {isEn
              ? "Qualifying questions depend on the type of business, but the objective is always the same: distinguish who is worth the sales team's time. They usually revolve around the specific need, the timeframe, the approximate budget and the interlocutor's role in the decision."
              : "Les questions de qualification dépendent du type d'activité, mais l'objectif est toujours le même : distinguer ceux à qui l'équipe commerciale vaut la peine de consacrer du temps. Elles tournent généralement autour du besoin spécifique, du délai, du budget approximatif et du rôle de l'interlocuteur dans la décision."}
          </p>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {isEn
              ? "A service business will ask about the challenge they want to solve and the urgency; an e-commerce site, about the product and the volume. The key is not to interrogate all at once, but to intersperse the questions naturally in the conversation. This qualification is especially useful when paid advertising traffic arrives, where every visit has a cost."
              : "Une entreprise de services demandera quel défi elle souhaite résoudre et l'urgence ; un site e-commerce, quel est le produit et le volume. La clé est de ne pas interroger d'un coup, mais d'intercaler les questions naturellement dans la conversation. Cette qualification est particulièrement utile quand du trafic de publicité payante arrive, où chaque visite a un coût."}
          </p>
        </section>

        <BlogBanner lang={lang} />

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-primary-600 mb-4">
            {isEn
              ? "How to integrate the chatbot with the CRM"
              : "Comment intégrer le chatbot avec le CRM"}
          </h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {isEn
              ? "Capturing leads is of little use if they stay loose in a chat thread. CRM integration is what turns the chatbot into a real lead-generation machine: each qualified lead enters directly into HubSpot, Salesforce or Pipedrive with its full context."
              : "Capter des leads ne sert pas à grand-chose s'ils restent dans un fil de chat. L'intégration CRM est ce qui transforme le chatbot en une vraie machine de captation de leads : chaque lead qualifié entre directement dans HubSpot, Salesforce ou Pipedrive avec son contexte complet."}
          </p>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {isEn
              ? "This way, the sales team receives not just a name and email, but the full conversation: what they were looking for, what they answered to the qualifying questions and at what time they made contact. Understanding what a business chatbot is and why you need one provides the foundation for this piece."
              : "Ainsi, l'équipe commerciale reçoit non seulement un nom et un e-mail, mais toute la conversation : ce qu'ils cherchaient, ce qu'ils ont répondu aux questions de qualification et à quel moment ils ont pris contact. Comprendre ce qu'est un chatbot d'entreprise et pourquoi vous en avez besoin fournit la base de cette pièce."}
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-primary-600 mb-4">
            {isEn
              ? "Measuring the impact of the chatbot on lead capture"
              : "Mesurer l'impact du chatbot sur la captation de leads"}
          </h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {isEn
              ? "Without metrics there is no possible improvement. The figures worth tracking are the chatbot conversion rate (which typically sits between 10% and 25% of visitors who interact), the qualification rate of the captured leads and the time between capture and the first sales contact."
              : "Sans métriques, il n'y a pas d'amélioration possible. Les chiffres à suivre sont le taux de conversion du chatbot (qui se situe généralement entre 10 % et 25 % des visiteurs qui interagissent), le taux de qualification des leads captés et le délai entre la captation et le premier contact commercial."}
          </p>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {isEn
              ? "The metric that closes the loop is the conversion-to-customer rate: how many of those leads end up buying. Cross-referencing this data allows you to refine the questions, adjust the messages and detect at what point in the flow interest is lost, so you can optimise the system continuously."
              : "La métrique qui boucle la boucle est le taux de conversion en client : combien de ces leads finissent par acheter. Croiser ces données permet d'affiner les questions, d'ajuster les messages et de détecter à quel moment du flux l'intérêt se perd, pour optimiser le système en continu."}
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
      <RelatedArticles currentSlug="chatbot-lead-generation" />
    </>
  );
}
