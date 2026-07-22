import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ContactForm } from "@/components/ContactForm";
import { BlogBanner } from "@/components/BlogBanner";
import { RelatedArticles } from "@/components/RelatedArticles";
import { alternatesFor } from "@/lib/i18n/routes";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const isEn = lang === "en";
  return {
    title: isEn ? "What Can an SME Automate in Marketing and Sales | Mkt Web 360" : "Ce qu'une PME peut automatiser en marketing et ventes | Mkt Web 360",
    description: isEn ? "What marketing and sales processes can an SME automate to save time, improve follow-up and capture better leads." : "Quels processus de marketing et de vente une PME peut automatiser pour gagner du temps, améliorer le suivi et mieux capturer des leads.",
    alternates: alternatesFor(`/${lang}/what-can-sme-automate-marketing/`) ?? {
      canonical: `https://www.mktweb360.com/${lang}/what-can-sme-automate-marketing/`,
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
          { label: isEn ? "SME automation" : "Automatisation PME" },
        ]} />
        <p className="text-sm text-accent-500 font-semibold mb-2">Strategy</p>
        <h1 className="text-4xl font-bold text-primary-600 mb-4 leading-tight">
          {isEn ? "What can an SME automate in marketing and sales to save time and capture better" : "Ce qu'une PME peut automatiser en marketing et ventes pour gagner du temps et mieux capturer"}
        </h1>
        <p className="text-xl text-gray-500 mb-8 leading-relaxed">
          {isEn ? "Most SMEs spend too much time on repetitive tasks that could be automated. This guide explains which marketing and sales processes are worth automating and how to start." : "La plupart des PME passent trop de temps sur des tâches répétitives qui pourraient être automatisées. Ce guide explique quels processus de marketing et de vente valent la peine d'être automatisés et comment commencer."}
        </p>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-primary-600 mb-4">
            {isEn ? "Why automation matters for SMEs" : "Pourquoi l'automatisation est importante pour les PME"}
          </h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {isEn ? "Automation is not about replacing human relationships — it is about removing the administrative friction that prevents you from focusing on high-value activities. For an SME, the biggest time sinks are typically: following up with leads who haven't responded, sending the same email sequences repeatedly, manually scheduling social media posts, and compiling marketing reports from multiple sources. All of these can be automated." : "L'automatisation ne consiste pas à remplacer les relations humaines — il s'agit de supprimer la friction administrative qui vous empêche de vous concentrer sur les activités à haute valeur ajoutée. Pour une PME, les plus grands gouffres de temps sont généralement : le suivi des leads qui n'ont pas répondu, l'envoi répété des mêmes séquences d'emails, la planification manuelle des publications sur les réseaux sociaux, et la compilation de rapports marketing depuis plusieurs sources. Tout cela peut être automatisé."}
          </p>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {isEn ? "The ROI of marketing automation is clearest in lead follow-up. Studies consistently show that responding to a web inquiry within 5 minutes increases conversion rates by 900% compared to responding within 30 minutes. No human can achieve this consistently without automation. Setting up an immediate auto-response that acknowledges the inquiry and promises a personal follow-up within X hours is the minimum effective automation for any lead-generating business." : "Le ROI de l'automatisation marketing est le plus clair dans le suivi des leads. Les études montrent régulièrement que répondre à une demande web dans les 5 minutes augmente les taux de conversion de 900% par rapport à une réponse dans les 30 minutes. Aucun humain ne peut y parvenir de manière cohérente sans automatisation. Configurer une réponse automatique immédiate qui accuse réception de la demande et promet un suivi personnel dans X heures est l'automatisation minimale efficace pour toute entreprise générant des leads."}
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-primary-600 mb-4">
            {isEn ? "Email marketing automation: sequences and flows" : "Automatisation de l'email marketing : séquences et flux"}
          </h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {isEn ? "Email automation sequences are one of the highest-ROI investments for SMEs. A welcome sequence for new subscribers (5-7 emails over 2 weeks introducing your brand, demonstrating expertise and making a soft offer) can convert leads who would otherwise go cold. A post-purchase sequence for ecommerce (thank you, shipping confirmation, review request, cross-sell recommendation) increases customer lifetime value with zero ongoing effort." : "Les séquences d'automatisation d'email sont l'un des investissements au ROI le plus élevé pour les PME. Une séquence de bienvenue pour les nouveaux abonnés (5 à 7 emails sur 2 semaines présentant votre marque, démontrant l'expertise et faisant une offre douce) peut convertir des leads qui sinon refroidiraient. Une séquence post-achat pour l'e-commerce (merci, confirmation d'expédition, demande d'avis, recommandation de vente croisée) augmente la valeur vie client sans effort continu."}
          </p>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {isEn ? "Tools like Mailchimp (free up to 500 contacts), Brevo (formerly Sendinblue) or ActiveCampaign make these automations accessible at low cost. Start simple: a welcome sequence for new subscribers and a follow-up sequence for contact form submissions. These two automations alone can significantly increase your conversion rate from existing traffic." : "Des outils comme Mailchimp (gratuit jusqu'à 500 contacts), Brevo (anciennement Sendinblue) ou ActiveCampaign rendent ces automatisations accessibles à faible coût. Commencez simplement : une séquence de bienvenue pour les nouveaux abonnés et une séquence de suivi pour les soumissions de formulaires de contact. Ces deux automatisations seules peuvent augmenter significativement votre taux de conversion depuis le trafic existant."}
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-primary-600 mb-4">
            {isEn ? "Lead capture and CRM automation" : "Automatisation de la capture de leads et CRM"}
          </h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {isEn ? "Every contact form submission, phone inquiry and chat message should automatically enter your CRM with the source, date, and any available information about the lead. This happens automatically if your CRM is properly integrated with your website, phone system and communication tools. Without this, leads fall through the cracks — someone fills in your contact form on a Friday afternoon and is forgotten by Monday." : "Chaque soumission de formulaire de contact, demande téléphonique et message de chat devrait automatiquement entrer dans votre CRM avec la source, la date et toute information disponible sur le lead. Cela se produit automatiquement si votre CRM est correctement intégré à votre site web, votre système téléphonique et vos outils de communication. Sans cela, des leads passent à travers les mailles — quelqu'un remplit votre formulaire de contact un vendredi après-midi et est oublié le lundi."}
          </p>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {isEn ? "Simple CRMs like HubSpot (free tier is sufficient for most SMEs), Pipedrive or Zoho CRM integrate with most website platforms. Automated lead scoring — automatically flagging high-priority leads based on behaviour (multiple page visits, pricing page viewed, return visit) — ensures your sales effort is focused where the probability of conversion is highest." : "Des CRM simples comme HubSpot (le niveau gratuit suffit pour la plupart des PME), Pipedrive ou Zoho CRM s'intègrent à la plupart des plateformes de site web. La notation automatique des leads — signalement automatique des leads prioritaires basé sur le comportement (visites multiples de pages, page de tarifs consultée, visite de retour) — garantit que votre effort de vente est concentré là où la probabilité de conversion est la plus élevée."}
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-primary-600 mb-4">
            {isEn ? "Social media scheduling and automation" : "Planification et automatisation des réseaux sociaux"}
          </h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {isEn ? "Manually posting to social media every day is a significant time drain. Scheduling tools like Buffer, Hootsuite or Meta Business Suite allow you to batch-create content once per week or per month and schedule it for optimal posting times. This reduces daily active management time from 30-60 minutes to 1-2 hours per week." : "Publier manuellement sur les réseaux sociaux chaque jour est une perte de temps significative. Des outils de planification comme Buffer, Hootsuite ou Meta Business Suite permettent de créer du contenu en lot une fois par semaine ou par mois et de le programmer pour des heures de publication optimales. Cela réduit le temps de gestion active quotidien de 30 à 60 minutes à 1 à 2 heures par semaine."}
          </p>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {isEn ? "Automation can also help with content sourcing. Tools like Zapier can automatically share your new blog posts to social media as soon as they are published. Google Alerts can notify you of relevant industry news that you can quickly reshare with your own commentary. These micro-automations add up to a significant time saving over a year." : "L'automatisation peut également aider avec l'approvisionnement en contenu. Des outils comme Zapier peuvent partager automatiquement vos nouveaux articles de blog sur les réseaux sociaux dès leur publication. Google Alerts peut vous notifier des actualités sectorielles pertinentes que vous pouvez rapidement repartager avec votre propre commentaire. Ces micro-automatisations représentent une économie de temps significative sur l'année."}
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-primary-600 mb-4">
            {isEn ? "Reporting automation: save hours every month" : "Automatisation des rapports : économisez des heures chaque mois"}
          </h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {isEn ? "Manually compiling marketing reports from Google Analytics, Google Ads, social media platforms and email marketing tools takes hours every month. Automated reporting dashboards — using tools like Google Looker Studio (free), Databox or Agency Analytics — pull all your data into a single view that updates automatically. You spend 5 minutes reviewing rather than 3 hours compiling." : "La compilation manuelle de rapports marketing depuis Google Analytics, Google Ads, les plateformes de réseaux sociaux et les outils d'email marketing prend des heures chaque mois. Les tableaux de bord de reporting automatisés — utilisant des outils comme Google Looker Studio (gratuit), Databox ou Agency Analytics — tirent toutes vos données dans une vue unique qui se met à jour automatiquement. Vous passez 5 minutes à examiner plutôt que 3 heures à compiler."}
          </p>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {isEn ? "Set up automated weekly email summaries from your key platforms — GA4 can send weekly performance emails, Google Search Console sends weekly reports, and most email marketing platforms have automated reporting. These land in your inbox every Monday and give you a quick pulse check without any active work." : "Configurez des résumés email automatiques hebdomadaires depuis vos plateformes clés — GA4 peut envoyer des emails de performance hebdomadaires, Google Search Console envoie des rapports hebdomadaires, et la plupart des plateformes d'email marketing ont des rapports automatisés. Ceux-ci arrivent dans votre boîte de réception chaque lundi et vous donnent un contrôle rapide sans aucun travail actif."}
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
