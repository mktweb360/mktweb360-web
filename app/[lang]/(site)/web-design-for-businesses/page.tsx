import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { RelatedArticles } from "@/components/RelatedArticles";
import { alternatesFor } from "@/lib/i18n/routes";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const isEn = lang === "en";
  return {
    title: isEn
      ? "Web Design for Businesses — Custom Solutions"
      : "Création de Site Web pour Entreprises — Solutions Sur Mesure",
    description: isEn
      ? "Custom web design for medium and large businesses that need specific functionality: product catalogues, private areas, intranets, client portals and more."
      : "Création de sites web sur mesure pour les entreprises de taille moyenne et grande nécessitant des fonctionnalités spécifiques : catalogues de produits, espaces privés, intranets, portails clients et plus encore.",
    alternates: alternatesFor(`/${lang}/web-design-for-businesses/`) ?? {
      canonical: `https://www.mktweb360.com/${lang}/web-design-for-businesses/`,
    },
    openGraph: {
      title: isEn
        ? "Web Design for Businesses — Custom Solutions | Mkt Web 360"
        : "Création de Site Web pour Entreprises — Solutions Sur Mesure | Mkt Web 360",
      description: isEn
        ? "Custom web design for medium and large businesses with specific functionality needs."
        : "Création de sites web sur mesure pour les entreprises nécessitant des fonctionnalités spécifiques.",
      url: `https://www.mktweb360.com/${lang}/web-design-for-businesses/`,
    },
  };
}

export default async function Page({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const isEn = lang === "en";

  const PROJECTS = isEn
    ? [
        "Multi-language corporate websites",
        "Client portals with private member area",
        "Online product catalogues",
        "Websites with bookings and online appointments",
        "E-learning training platforms",
        "Real estate websites with advanced search",
        "Service portals with online quote calculators",
      ]
    : [
        "Sites web d'entreprise multi-langues",
        "Portails clients avec espace membres privé",
        "Catalogues de produits en ligne",
        "Sites web avec réservations et rendez-vous en ligne",
        "Plateformes de formation e-learning",
        "Sites web immobiliers avec recherche avancée",
        "Portails de services avec calculateurs de devis en ligne",
      ];

  const STEPS = isEn
    ? [
        { step: "1", title: "Analysis and consultancy", desc: "We study your business, objectives and competition to propose the most suitable web solution." },
        { step: "2", title: "UX/UI design", desc: "We create prototypes and designs that prioritise user experience and business objectives." },
        { step: "3", title: "Development", desc: "We build the website with the best technologies and follow the most current web standards." },
        { step: "4", title: "Testing and launch", desc: "We test exhaustively across all devices before launch to guarantee quality." },
      ]
    : [
        { step: "1", title: "Analyse et conseil", desc: "Nous étudions votre entreprise, vos objectifs et votre concurrence pour proposer la solution web la plus adaptée." },
        { step: "2", title: "Design UX/UI", desc: "Nous créons des prototypes et des designs qui privilégient l'expérience utilisateur et les objectifs commerciaux." },
        { step: "3", title: "Développement", desc: "Nous développons le site avec les meilleures technologies en suivant les standards web les plus actuels." },
        { step: "4", title: "Tests et lancement", desc: "Nous testons exhaustivement sur tous les appareils avant le lancement pour garantir la qualité." },
      ];

  return (
    <>
      <div className="max-w-4xl mx-auto px-4 py-12">
        <Breadcrumbs
          crumbs={[
            { label: isEn ? "Home" : "Accueil", href: `/${lang}/` },
            { label: isEn ? "Web Design" : "Création de Site Web", href: `/${lang}/${isEn ? "web-design" : "creation-site-web"}/` },
            { label: isEn ? "Web Design for Businesses" : "Site Web pour Entreprises" },
          ]}
        />

        <h1 className="text-4xl font-bold text-primary-600 mb-4">
          {isEn ? "Web Design for Businesses" : "Création de Site Web pour Entreprises"}
        </h1>
        <p className="text-xl text-gray-600 mb-8 leading-relaxed">
          {isEn
            ? "Custom web solutions for medium and large businesses that need specific functionality: product catalogues, private areas, intranets, client portals and more."
            : "Solutions web sur mesure pour les entreprises de taille moyenne et grande qui ont besoin de fonctionnalités spécifiques : catalogues de produits, espaces privés, intranets, portails clients et plus encore."}
        </p>

        <section className="bg-primary-50 rounded-2xl p-8 mb-8">
          <h2 className="text-2xl font-bold text-primary-600 mb-4">
            {isEn ? "Business projects we develop" : "Projets d'entreprise que nous développons"}
          </h2>
          <ul className="space-y-3 text-gray-700">
            {PROJECTS.map((item) => (
              <li key={item} className="flex gap-3">
                <span className="text-accent-500 font-bold">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-primary-600 mb-4">
            {isEn ? "Our process" : "Notre processus de travail"}
          </h2>
          <div className="space-y-4">
            {STEPS.map((item) => (
              <div key={item.step} className="flex gap-4 p-4 border border-gray-200 rounded-xl">
                <span className="text-accent-500 font-bold text-xl shrink-0 w-8">{item.step}.</span>
                <div>
                  <h3 className="font-semibold text-primary-700 mb-1">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <div className="bg-primary-50 rounded-xl p-6 border border-primary-100 mb-8">
          <p className="font-semibold text-primary-700 mb-2">
            {isEn ? "Do you have a specific project in mind?" : "Vous avez un projet spécifique en tête ?"}
          </p>
          <p className="text-gray-600 text-sm mb-4">
            {isEn
              ? "Tell us about your requirements and we will propose the most suitable solution for your company."
              : "Parlez-nous de vos besoins et nous vous proposerons la solution la plus adaptée à votre entreprise."}
          </p>
          <Link
            href={`/${lang}/contact/`}
            className="inline-block bg-accent-500 text-white px-8 py-3 rounded-full font-bold hover:bg-accent-600 transition-colors"
          >
            {isEn ? "Tell us about your project" : "Parlez-nous de votre projet"}
          </Link>
        </div>

        <div className="text-center">
          <Link
            href={`/${lang}/${isEn ? "web-design" : "creation-site-web"}/`}
            className="text-accent-500 hover:text-accent-600 font-medium text-sm"
          >
            ← {isEn ? "Back to Web Design" : "Retour à Création de Site Web"}
          </Link>
        </div>
      </div>

      <RelatedArticles category={isEn ? "Web Design" : "Création Web"} />
    </>
  );
}
