import { Breadcrumbs } from "@/components/Breadcrumbs";
import { BlogBanner } from "@/components/BlogBanner";
import { alternatesFor } from "@/lib/i18n/routes";
import Link from "next/link";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const isEn = lang === "en";
  return {
    title: isEn
      ? "How to Manage Your Company's Online Reputation: Practical Guide 2026"
      : "Comment gérer la réputation en ligne de votre entreprise : guide pratique 2026",
    description: isEn
      ? "Online reputation is built or destroyed in public. Learn how to manage it strategically: reviews, mentions, responses and crisis prevention."
      : "La réputation en ligne se construit ou se détruit en public. Découvrez comment la gérer avec méthode : avis, mentions, réponses et prévention des crises.",
    alternates: alternatesFor(`/${lang}/how-to-manage-online-reputation/`) ?? {
      canonical: `https://www.mktweb360.com/${lang}/how-to-manage-online-reputation/`,
    },
    openGraph: {
      title: isEn
        ? "How to Manage Your Company's Online Reputation: Practical Guide 2026 | Mkt Web 360"
        : "Comment gérer la réputation en ligne de votre entreprise : guide pratique 2026 | Mkt Web 360",
      description: isEn
        ? "Online reputation is built or destroyed in public. Learn how to manage it strategically: reviews, mentions, responses and crisis prevention."
        : "La réputation en ligne se construit ou se détruit en public. Découvrez comment la gérer avec méthode : avis, mentions, réponses et prévention des crises.",
    },
  };
}

export default async function Page({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const isEn = lang === "en";

  const faqs = [
    {
      q: isEn
        ? "Can I remove a negative Google review?"
        : "Puis-je supprimer un avis négatif sur Google ?",
      a: isEn
        ? "Only if it violates Google's policies (spam, inappropriate content, conflict of interest). If it is a legitimate opinion — even if unfair — it cannot be removed. The best response is to reply professionally and work on generating more positive reviews."
        : "Uniquement si l'avis enfreint les règles de Google (spam, contenu inapproprié, conflit d'intérêts). S'il s'agit d'une opinion légitime, même injuste, il ne peut pas être supprimé. La meilleure réponse est de répondre avec professionnalisme et de travailler à l'obtention d'avis positifs.",
    },
    {
      q: isEn
        ? "Should I respond to every review?"
        : "Dois-je répondre à tous les avis ?",
      a: isEn
        ? "Yes, especially negative ones. Responding shows the business is active and cares about its customers. For positive reviews, a brief thank-you is enough."
        : "Oui, surtout aux avis négatifs. Répondre montre que l'entreprise est active et se soucie de ses clients. Pour les avis positifs, un bref remerciement suffit.",
    },
    {
      q: isEn
        ? "How do I know what is being said about my business online?"
        : "Comment savoir ce qui se dit de mon entreprise sur internet ?",
      a: isEn
        ? "Setting up Google Alerts with your business name is the first step — free and immediate. You can also periodically check Google, Trustpilot, social media and industry-specific review portals."
        : "Configurer des alertes Google avec le nom de votre entreprise est la première étape, gratuite et immédiate. Vous pouvez également consulter régulièrement Google, Trustpilot, les réseaux sociaux et les portails sectoriels spécialisés.",
    },
    {
      q: isEn
        ? "Can a single negative review ruin my reputation?"
        : "Un seul avis négatif peut-il ruiner ma réputation ?",
      a: isEn
        ? "Rarely, if there is a sufficient volume of positive reviews. What damages reputation is having few reviews, a majority being negative, or failing to respond to criticism. A negative review that is answered well can even convey professionalism."
        : "Rarement, s'il existe un volume suffisant d'avis positifs. Ce qui nuit à la réputation, c'est d'avoir peu d'avis, une majorité négative, ou de ne pas répondre aux critiques. Un avis négatif bien répondu peut même transmettre du professionnalisme.",
    },
    {
      q: isEn
        ? "Is it useful to have testimonials on the website in addition to Google reviews?"
        : "Est-il utile d'avoir des témoignages sur le site web en plus des avis Google ?",
      a: isEn
        ? "Yes. Website testimonials complement Google reviews. They help build trust on the page and allow you to showcase specific use cases that Google reviews do not always permit."
        : "Oui. Les témoignages sur le site web complètent les avis Google. Ils contribuent à renforcer la confiance sur la page et permettent de présenter des cas d'utilisation spécifiques que les avis Google ne permettent pas toujours.",
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
                ? "Manage Online Reputation"
                : "Gérer la réputation en ligne",
            },
          ]}
        />

        <p className="text-sm text-accent-500 font-semibold mb-2">
          {isEn ? "Online Reputation" : "Réputation en ligne"}
        </p>
        <h1 className="text-4xl font-bold text-primary-600 mb-4 leading-tight">
          {isEn
            ? "How to manage your company's online reputation: practical guide 2026"
            : "Comment gérer la réputation en ligne de votre entreprise : guide pratique 2026"}
        </h1>
        <p className="text-xl text-gray-500 mb-8 leading-relaxed">
          {isEn
            ? "Before making a purchase, most people search for opinions about a business. What they find — reviews, mentions, responses — shapes the first impression that determines whether they call you or go to a competitor. Managing that is not optional."
            : "Avant de prendre une décision, la plupart des gens recherchent des avis sur une entreprise. Ce qu'ils trouvent — avis, mentions, réponses — forme la première impression qui détermine s'ils vous appellent ou vont chez un concurrent. Gérer cela n'est pas facultatif."}
        </p>

        <section className="mb-10">
          <p className="text-gray-600 mb-6 leading-relaxed">
            {isEn
              ? "Online reputation is no longer just for big brands. Any business — a plumber, a clinic, a local shop — has a digital reputation that is built or destroyed through reviews, social media and forums. The difference between actively managing it or ignoring it can be the difference between growing or losing customers silently."
              : "La réputation en ligne n'est plus réservée aux grandes marques. Toute entreprise — un plombier, une clinique, un commerce local — a une réputation numérique qui se construit ou se détruit à travers les avis, les réseaux sociaux et les forums. La différence entre la gérer activement ou l'ignorer peut être la différence entre croître ou perdre des clients silencieusement."}
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-primary-600 mb-4">
            {isEn
              ? "What is online reputation and why does it matter"
              : "Qu'est-ce que la réputation en ligne et pourquoi est-elle importante"}
          </h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {isEn
              ? "Online reputation is the public perception formed about your company based on what appears on the internet: Google reviews, mentions on social media, articles, opinions on industry platforms. It is the digital equivalent of word of mouth — but permanent, visible to everyone and accessible before any direct contact. Not managing it does not mean it does not exist — it means others are building it without your participation."
              : "La réputation en ligne est la perception publique qui se forme sur votre entreprise à partir de ce qui apparaît sur internet : avis Google, mentions sur les réseaux sociaux, articles, opinions sur les plateformes sectorielles. C'est l'équivalent numérique du bouche-à-oreille — mais permanent, visible de tous et accessible avant tout contact direct. Ne pas la gérer ne signifie pas qu'elle n'existe pas — cela signifie que d'autres la construisent sans votre participation."}
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-primary-600 mb-4">
            {isEn
              ? "Reviews: the most visible pillar"
              : "Les avis : le pilier le plus visible"}
          </h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {isEn
              ? "Google reviews are the most important reputation asset for most local businesses. They influence ranking on Google Maps, click-through rates in search results and purchasing decisions. The review strategy has three parts: actively requesting reviews after each successfully completed service, responding to all of them (positive and negative) with professionalism, and never buying or fabricating fake reviews — Google detects and penalises them."
              : "Les avis Google sont l'actif de réputation le plus important pour la plupart des entreprises locales. Ils influencent le positionnement sur Google Maps, le taux de clics dans les résultats et la décision d'achat. La stratégie d'avis comprend trois parties : demander activement après chaque service bien terminé, répondre à tous (positifs et négatifs) avec professionnalisme, et ne jamais acheter ni fabriquer de faux avis — Google les détecte et les pénalise."}
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-primary-600 mb-4">
            {isEn
              ? "How to respond to negative reviews"
              : "Comment répondre aux avis négatifs"}
          </h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {isEn
              ? "A negative review that is well answered can be more powerful than ten positive reviews with no response. The key is not to be defensive, to thank the customer for the feedback even if it is unfair, to explain if there was a misunderstanding and to offer to resolve the issue through a private channel. The goal is not to win the argument — it is to demonstrate to anyone reading the response that the business is professional and responsible."
              : "Un avis négatif bien répondu peut être plus puissant que dix avis positifs sans réponse. La clé est de ne pas se mettre sur la défensive, de remercier pour le retour même s'il est injuste, d'expliquer s'il y a eu un malentendu et de proposer de résoudre le problème par un canal privé. L'objectif n'est pas de gagner la discussion — c'est de démontrer à ceux qui lisent la réponse que l'entreprise est professionnelle et responsable."}
          </p>
        </section>

        <div className="bg-primary-50 rounded-xl p-6 border border-primary-100 mb-10">
          <p className="font-semibold text-primary-700 mb-2">
            {isEn
              ? "Want to improve the digital perception of your business?"
              : "Vous souhaitez améliorer la perception numérique de votre entreprise ?"}
          </p>
          <p className="text-gray-600 text-sm mb-4">
            {isEn
              ? "We help you build an online presence that conveys trust: from your Google profile to the website and content that reinforce your credibility."
              : "Nous vous aidons à construire une présence en ligne qui inspire confiance : depuis votre fiche Google jusqu'au site web et aux contenus qui renforcent votre crédibilité."}
          </p>
          <Link
            href={`/${lang}/contact/`}
            className="inline-block bg-accent-500 text-white px-6 py-2.5 rounded-full font-semibold text-sm hover:bg-accent-600 transition-colors"
          >
            {isEn
              ? "Request an online reputation audit"
              : "Demander un diagnostic de réputation en ligne"}
          </Link>
        </div>

        <BlogBanner lang={lang} />

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-primary-600 mb-4">
            {isEn
              ? "Monitoring mentions and alerts"
              : "Surveiller les mentions et les alertes"}
          </h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {isEn
              ? "Knowing what is being said about your business on the internet is the first step to managing it. Setting up Google Alerts with the business name, periodically reviewing the main review platforms in your sector and having a process for detecting social media mentions allows you to act in time rather than discovering problems when they have already been amplified."
              : "Savoir ce qui se dit de votre entreprise sur internet est la première étape pour le gérer. Configurer des alertes Google avec le nom de l'entreprise, consulter régulièrement les principales plateformes d'avis de votre secteur et avoir un processus pour détecter les mentions sur les réseaux sociaux permet d'agir à temps plutôt que de découvrir les problèmes une fois qu'ils se sont amplifiés."}
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-primary-600 mb-4">
            {isEn
              ? "Prevention is cheaper than crisis management"
              : "La prévention coûte moins cher que la gestion de crise"}
          </h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {isEn
              ? "Most online reputation crises are avoidable. Clear customer service processes, proactive communication when something goes wrong before the customer publishes it, and a consistent problem-resolution policy drastically reduce the likelihood of an incident becoming a public crisis. Reputation is built day by day — not only when there is a problem."
              : "La plupart des crises de réputation en ligne sont évitables. Des processus de service client clairs, une communication proactive lorsque quelque chose va mal avant que le client ne le publie, et une politique cohérente de résolution des problèmes réduisent considérablement la probabilité qu'un incident devienne une crise publique. La réputation se construit au quotidien — pas seulement en cas de problème."}
          </p>
        </section>

        <div className="bg-primary-600 text-white rounded-2xl p-8 mb-10 text-center">
          <h2 className="text-2xl font-bold mb-3">
            {isEn
              ? "Build an online reputation that works for you"
              : "Construisez une réputation en ligne qui travaille pour vous"}
          </h2>
          <p className="text-primary-200 mb-6">
            {isEn
              ? "We help you manage your digital presence in a way that conveys trust, generates more positive reviews and protects your reputation in the long term."
              : "Nous vous aidons à gérer votre présence numérique de façon à inspirer confiance, générer plus d'avis positifs et protéger votre réputation à long terme."}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href={`/${lang}/contact/`}
              className="bg-accent-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-accent-600 transition-colors"
            >
              {isEn ? "Talk to a specialist" : "Parler à un spécialiste"}
            </Link>
            <Link
              href={`/${lang}/seo/`}
              className="border-2 border-white text-white px-6 py-3 rounded-full font-semibold hover:bg-white/10 transition-colors"
            >
              {isEn ? "See Local SEO service" : "Voir le service SEO Local"}
            </Link>
          </div>
        </div>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-primary-600 mb-4">
            {isEn
              ? "Frequently asked questions about online reputation"
              : "Questions fréquentes sur la réputation en ligne"}
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

        <p className="text-sm text-gray-500 pt-4">
          {isEn ? "Related services: " : "Services associés : "}
          <Link
            href={`/${lang}/seo/`}
            className="text-accent-500 hover:underline"
          >
            {isEn ? "SEO Web Positioning" : "Référencement naturel SEO"}
          </Link>{" "}
          ·{" "}
          <Link
            href={`/${lang}/digital-audit/`}
            className="text-accent-500 hover:underline"
          >
            {isEn ? "Digital Audit" : "Audit digital"}
          </Link>
        </p>

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
