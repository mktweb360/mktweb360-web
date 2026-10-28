import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ContactForm } from "@/components/ContactForm";
import { BlogBanner } from "@/components/BlogBanner";
import { RelatedArticles } from "@/components/RelatedArticles";
import { alternatesFor } from "@/lib/i18n/routes";
import { AuthorByline } from "@/components/AuthorByline";
import { IntlArticleJsonLd } from "@/components/JsonLd";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const isEn = lang === "en";
  return {
    title: isEn ? "How to Digitalise Your Business: Guide" : "Comment digitaliser votre entreprise",
    description: isEn ? "Practical guide to digitalise your business step by step. Tools, strategy and priorities to take your business online without complications." : "Guide pratique pour digitaliser votre entreprise étape par étape. Outils, stratégie et priorités pour mettre votre entreprise en ligne sans complications.",
    alternates: alternatesFor(`/${lang}/how-to-digitalise-your-business/`) ?? {
      canonical: `https://www.mktweb360.com/${lang}/how-to-digitalise-your-business/`,
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
          { label: isEn ? "Digitalise business" : "Digitaliser entreprise" },
        ]} />
        <p className="text-sm text-accent-500 font-semibold mb-2">Strategy</p>
        <IntlArticleJsonLd lang={lang} slug="how-to-digitalise-your-business" headline={isEn ? "How to digitalise your business without getting lost in the process" : "Comment digitaliser votre entreprise sans se perdre dans le processus"} image="/og-como-digitalizar-tu-negocio.jpg" />
        <h1 className="text-4xl font-bold text-primary-600 mb-4 leading-tight">
          {isEn ? "How to digitalise your business without getting lost in the process" : "Comment digitaliser votre entreprise sans se perdre dans le processus"}
        </h1>
        <AuthorByline lang={lang} block />
        <p className="text-xl text-gray-500 mb-8 leading-relaxed">
          {isEn ? "Digitalising your business does not have to be complicated. This guide explains the steps, the priorities and the tools you need." : "Digitaliser votre entreprise ne doit pas être compliqué. Ce guide explique les étapes, les priorités et les outils dont vous avez besoin."}
        </p>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-primary-600 mb-4">
            {isEn ? "What digitalising your business really means" : "Ce que digitaliser votre entreprise signifie vraiment"}
          </h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {isEn ? "Digitalisation is not just about having a website or social media profiles. It means using digital tools and processes to make your business more efficient, more visible and more competitive. It includes how you attract and retain customers, how you manage operations, how you communicate internally and externally, and how you make business decisions using data." : "La digitalisation ne se résume pas à avoir un site web ou des profils sur les réseaux sociaux. Cela signifie utiliser des outils et des processus numériques pour rendre votre entreprise plus efficace, plus visible et plus compétitive. Cela inclut la façon dont vous attirez et fidélisez les clients, dont vous gérez les opérations, dont vous communiquez en interne et en externe, et dont vous prenez des décisions commerciales en utilisant des données."}
          </p>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {isEn ? "Many SMEs make the mistake of trying to digitalise everything at once, which leads to overwhelm and incomplete implementations. The better approach is to identify the area where digital transformation will have the most immediate impact on your business — usually customer acquisition or operational efficiency — and start there before expanding." : "Beaucoup de PME font l'erreur d'essayer de tout digitaliser en même temps, ce qui conduit à la surcharge et à des implémentations incomplètes. La meilleure approche est d'identifier le domaine où la transformation digitale aura l'impact le plus immédiat sur votre entreprise — généralement l'acquisition de clients ou l'efficacité opérationnelle — et de commencer là avant de s'étendre."}
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-primary-600 mb-4">
            {isEn ? "The 5 pillars of digital transformation for SMEs" : "Les 5 piliers de la transformation digitale pour les PME"}
          </h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {isEn ? "Successful digital transformation for SMEs rests on five pillars: online presence (website and local listings), digital marketing (SEO, advertising, social media), internal processes (management tools, accounting, communication), customer experience (CRM, automated follow-up, online booking) and data and analytics (tracking, measurement and decision-making based on real numbers)." : "La transformation digitale réussie pour les PME repose sur cinq piliers : la présence en ligne (site web et fiches locales), le marketing digital (SEO, publicité, réseaux sociaux), les processus internes (outils de gestion, comptabilité, communication), l'expérience client (CRM, suivi automatisé, réservation en ligne) et les données et analytics (suivi, mesure et prise de décisions basée sur des chiffres réels)."}
          </p>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {isEn ? "The order in which you tackle these pillars matters. Start with online presence because without it, everything else is harder. Then focus on digital marketing to drive customers to that presence. Operational tools can wait until you have established customer acquisition. Analytics should be set up early so you have data from the beginning — but don't wait for perfect data before starting." : "L'ordre dans lequel vous abordez ces piliers est important. Commencez par la présence en ligne car sans elle, tout le reste est plus difficile. Concentrez-vous ensuite sur le marketing digital pour amener des clients à cette présence. Les outils opérationnels peuvent attendre que vous ayez établi l'acquisition de clients. Les analytics doivent être configurés tôt pour avoir des données depuis le début — mais n'attendez pas des données parfaites avant de commencer."}
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-primary-600 mb-4">
            {isEn ? "Essential digital tools for any business" : "Outils numériques essentiels pour toute entreprise"}
          </h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {isEn ? "The essential toolkit for a digitalised SME includes: a professional website (your digital headquarters), Google Business Profile (free and essential for local visibility), a CRM for customer management (even a basic spreadsheet works to start), accounting software (a gestor plus simple invoicing software), a business email on your own domain, and Google Analytics to measure what works." : "La boîte à outils essentielle pour une PME digitalisée comprend : un site web professionnel (votre siège numérique), Google Business Profile (gratuit et essentiel pour la visibilité locale), un CRM pour la gestion des clients (même une feuille de calcul basique fonctionne pour commencer), un logiciel de comptabilité (un gestor plus un logiciel de facturation simple), un email professionnel sur votre propre domaine, et Google Analytics pour mesurer ce qui fonctionne."}
          </p>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {isEn ? "For communication, adopt a business messaging platform — WhatsApp Business for customer communication, Google Meet or Zoom for video calls, and Slack or Teams for internal team communication if you have employees. These tools are inexpensive or free and immediately professionalise how you operate." : "Pour la communication, adoptez une plateforme de messagerie professionnelle — WhatsApp Business pour la communication client, Google Meet ou Zoom pour les appels vidéo, et Slack ou Teams pour la communication interne si vous avez des employés. Ces outils sont peu coûteux ou gratuits et professionnalisent immédiatement votre façon d'opérer."}
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-primary-600 mb-4">
            {isEn ? "How to prioritise: where to start" : "Comment prioriser : par où commencer"}
          </h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {isEn ? "The best place to start depends on your current situation. If you have no website, start there — it is the foundation of everything else. If you have a website but no one finds you, SEO and Google Business Profile are the priority. If you have traffic but no conversions, fix your website's UX and content before spending more on advertising. Always solve the bottleneck before amplifying it." : "Le meilleur endroit pour commencer dépend de votre situation actuelle. Si vous n'avez pas de site web, commencez par là — c'est le fondement de tout le reste. Si vous avez un site mais que personne ne vous trouve, le SEO et Google Business Profile sont la priorité. Si vous avez du trafic mais pas de conversions, corrigez l'UX et le contenu de votre site avant de dépenser davantage en publicité. Résolvez toujours le goulot d'étranglement avant de l'amplifier."}
          </p>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {isEn ? (
              <>If you are not sure which of these situations applies to you, a <Link href="/en/digital-audit/" className="text-accent-500 hover:underline">free review of your website, Google profile and search visibility</Link> will show you where the bottleneck is. And if local customers are the priority, start with a <Link href="/en/google-business-profile-service/" className="text-accent-500 hover:underline">complete, up-to-date Google Business Profile</Link>.</>
            ) : (
              <>Si vous ne savez pas laquelle de ces situations est la vôtre, un <Link href="/fr/audit-digital/" className="text-accent-500 hover:underline">audit gratuit de votre site, de votre fiche Google et de votre visibilité dans les moteurs de recherche</Link> vous montrera où se trouve le blocage. Et si vos clients sont locaux, commencez par une <Link href="/fr/gestion-google-business-profile/" className="text-accent-500 hover:underline">fiche Google Business Profile complète et à jour</Link>.</>
            )}
          </p>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {isEn ? "A practical approach: set a 90-day sprint for each digital initiative. Define a clear objective (e.g., 'generate 10 qualified leads per month from Google'), identify the 2-3 actions most likely to achieve it, execute consistently for 90 days, measure the results and then decide whether to continue, scale or pivot. This iterative approach prevents the paralysis that comes from trying to perfect everything at once." : "Une approche pratique : fixez un sprint de 90 jours pour chaque initiative digitale. Définissez un objectif clair (ex. 'générer 10 leads qualifiés par mois depuis Google'), identifiez les 2 à 3 actions les plus susceptibles de l'atteindre, exécutez régulièrement pendant 90 jours, mesurez les résultats puis décidez de continuer, d'amplifier ou de pivoter. Cette approche itérative évite la paralysie qui vient d'essayer de tout perfectionner à la fois."}
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-primary-600 mb-4">
            {isEn ? "Common mistakes when digitalising a business" : "Erreurs courantes lors de la digitalisation d'une entreprise"}
          </h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {isEn ? "The most common mistake is buying expensive software before understanding the process it is supposed to support. Many SMEs invest in CRMs, ERP systems or marketing automation platforms that end up unused because there was no clear implementation plan. Start with simple tools and upgrade only when you have outgrown them." : "L'erreur la plus courante est d'acheter des logiciels coûteux avant de comprendre le processus qu'ils sont censés soutenir. De nombreuses PME investissent dans des CRM, des systèmes ERP ou des plateformes d'automatisation du marketing qui finissent par ne pas être utilisés parce qu'il n'y avait pas de plan d'implémentation clair. Commencez avec des outils simples et améliorez-les seulement quand vous en avez besoin."}
          </p>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {isEn ? "Another frequent mistake: focusing on channels your business does not need. Not every business needs TikTok, a podcast or a YouTube channel. The right digital channels are those where your specific customers spend time and make purchase decisions. A B2B service business will find better ROI on LinkedIn and Google than on Instagram. A visual product business may find the opposite. Let your customers guide your channel strategy." : "Une autre erreur fréquente : se concentrer sur des canaux dont votre entreprise n'a pas besoin. Toutes les entreprises n'ont pas besoin de TikTok, d'un podcast ou d'une chaîne YouTube. Les bons canaux digitaux sont ceux où vos clients spécifiques passent du temps et prennent des décisions d'achat. Une entreprise de services B2B trouvera un meilleur ROI sur LinkedIn et Google que sur Instagram. Une entreprise de produits visuels pourrait trouver l'inverse. Laissez vos clients guider votre stratégie de canal."}
          </p>
        </section>

        <BlogBanner
          lang={lang}
          badge={isEn ? "Free audit" : "Audit gratuit"}
          title={isEn ? "Find out which step to take first" : "Sachez par quelle étape commencer"}
          desc={isEn ? "We review your website, your Google Business Profile and how you appear in search engines and AI assistants, and tell you what to fix first. No cost, no commitment." : "Nous analysons votre site, votre fiche Google Business Profile et votre présence dans les moteurs de recherche et les assistants IA, et nous vous disons quoi corriger en premier. Sans frais ni engagement."}
          cta={isEn ? "Request my free audit" : "Demander mon audit gratuit"}
          href={isEn ? "/en/digital-audit/" : "/fr/audit-digital/"}
          secondary={{ text: isEn ? "No website yet? See our web design service" : "Pas encore de site ? Découvrez notre création de site web", href: isEn ? "/en/web-design/" : "/fr/creation-site-web/" }}
        />
        <section className="mw-skin-cta text-white rounded-3xl p-8 mt-12">
          <h2 className="text-2xl font-bold mb-4">
            {isEn ? "Tell us where your business is today" : "Dites-nous où en est votre entreprise"}
          </h2>
          <p className="text-primary-200 mb-6">
            {isEn ? "Explain what you already have (website, Google profile, tools) and what is holding you back. We will reply with the first steps that make sense for your case." : "Expliquez ce que vous avez déjà (site, fiche Google, outils) et ce qui vous freine. Nous vous répondrons avec les premières étapes qui ont du sens dans votre cas."}
          </p>
          <div className="rounded-3xl bg-white p-6 sm:p-8 text-gray-900 shadow-[0_30px_80px_-30px_rgba(0,0,0,0.6)] ring-1 ring-white/10">
            <ContactForm formType={`blog-${lang}`} />
          </div>
        </section>
      </div>
      <RelatedArticles category="Strategy" />
    </>
  );
}
