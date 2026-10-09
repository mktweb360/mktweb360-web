import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { RelatedArticles } from "@/components/RelatedArticles";
import { alternatesFor, langSlug } from "@/lib/i18n/routes";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const isEn = lang === "en";
  return {
    title: isEn
      ? "Web Design for Businesses — Custom Solutions"
      : "Création de site web sur mesure",
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


const TRUST = {
  en: [
    { value: "Bespoke", label: "No templates" },
    { value: "Next.js / WP", label: "Our own technology" },
    { value: "SEO", label: "Technical SEO included" },
    { value: "Scalable", label: "Grows with your business" },
  ],
  fr: [
    { value: "Sur mesure", label: "Aucun modèle préconçu" },
    { value: "Next.js / WP", label: "Notre propre technologie" },
    { value: "SEO", label: "SEO technique inclus" },
    { value: "Évolutif", label: "Grandit avec votre entreprise" },
  ],
};

const COMPLEX = {
  en: {
    title: "A complex project or special functionality?",
    lead: "Catalogues, client portals, bookings, intranets and digital platforms. Complete web solutions for companies that need more than a standard corporate website.",
    cta: "Talk to a specialist",
    paragraphs: [
      "Tell us what you need. We analyse your project with no obligation and propose the most suitable technical architecture and budget.",
      "We work with Next.js and React for projects that require maximum speed and scalability, and with WordPress for projects where the client needs to manage the site independently without relying on a technical team.",
    ],
  },
  fr: {
    title: "Un projet complexe ou des fonctionnalités particulières ?",
    lead: "Catalogues, portails clients, réservations, intranets et plateformes digitales. Des solutions web complètes pour les entreprises qui ont besoin de plus qu'un site institutionnel standard.",
    cta: "Parler à un spécialiste",
    paragraphs: [
      "Dites-nous ce dont vous avez besoin. Nous analysons votre projet sans engagement et vous proposons l'architecture technique et le budget les plus adaptés.",
      "Nous travaillons avec Next.js et React pour les projets qui exigent un maximum de vitesse et d'évolutivité, et avec WordPress pour les projets où le client a besoin de gérer son site en autonomie, sans dépendre d'une équipe technique.",
    ],
  },
};

const DEMOS = {
  en: {
    eyebrow: "Live demos by sector",
    title: "What the websites we build look like",
    intro: "Click on any demo to browse it in real time. Each one represents a project for a specific sector.",
    cta: "View demo →",
    footer: "Your sector isn't listed? Get in touch — we work across all sectors.",
    items: [
      { name: "Clínica Dental Sonrisa", sector: "Health · Dental", url: "https://clinica-demo.mktweb360.com", image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=600&q=75", desc: "Website for a dental clinic with services, team and online appointments." },
      { name: "Restaurante El Roble", sector: "Hospitality · Food", url: "https://restaurante-demo.mktweb360.com", image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&q=75", desc: "Website for a restaurant with menu, bookings and private events." },
      { name: "García & Asociados", sector: "Legal · Lawyers", url: "https://abogados-demo.mktweb360.com", image: "https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?w=600&q=75", desc: "Law firm with practice areas and online consultation." },
      { name: "FitCenter Pro", sector: "Sport · Fitness", url: "https://gimnasio-demo.mktweb360.com", image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&q=75", desc: "Sports centre with activities, prices and a free trial." },
      { name: "Premium Homes", sector: "Real estate · Property", url: "https://inmobiliaria-demo.mktweb360.com", image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&q=75", desc: "Estate agency with a property catalogue and free valuation." },
      { name: "Studio Belle", sector: "Beauty · Aesthetics", url: "https://estetica-demo.mktweb360.com", image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=600&q=75", desc: "Beauty centre with treatments, prices and online booking." },
      { name: "Academia Saber+", sector: "Education · Training", url: "https://academia-demo.mktweb360.com", image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600&q=75", desc: "Academy with courses, exam preparation and a free trial class." },
      { name: "Psicología Bienestar", sector: "Health · Psychology", url: "https://psicologo-demo.mktweb360.com", image: "https://images.unsplash.com/photo-1573497620053-ea5300f94f21?w=600&q=75", desc: "Psychology centre with in-person and online therapy." },
      { name: "Taller Auto Express", sector: "Automotive · Mechanics", url: "https://taller-demo.mktweb360.com", image: "https://images.unsplash.com/photo-1487754180451-c456f719a1fc?w=600&q=75", desc: "Car repair workshop with services, online booking and diagnostics." },
    ],
  },
  fr: {
    eyebrow: "Démos en ligne par secteur",
    title: "À quoi ressemblent les sites que nous créons",
    intro: "Cliquez sur n'importe quelle démo pour la parcourir en temps réel. Chacune correspond à un projet pour un secteur précis.",
    cta: "Voir la démo →",
    footer: "Votre secteur n'apparaît pas ? Contactez-nous : nous travaillons dans tous les secteurs.",
    items: [
      { name: "Clínica Dental Sonrisa", sector: "Santé · Dentaire", url: "https://clinica-demo.mktweb360.com", image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=600&q=75", desc: "Site pour cabinet dentaire avec services, équipe et prise de rendez-vous en ligne." },
      { name: "Restaurante El Roble", sector: "Restauration · Gastronomie", url: "https://restaurante-demo.mktweb360.com", image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&q=75", desc: "Site pour restaurant avec carte, réservations et événements privés." },
      { name: "García & Asociados", sector: "Juridique · Avocats", url: "https://abogados-demo.mktweb360.com", image: "https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?w=600&q=75", desc: "Cabinet d'avocats avec domaines d'intervention et consultation en ligne." },
      { name: "FitCenter Pro", sector: "Sport · Fitness", url: "https://gimnasio-demo.mktweb360.com", image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&q=75", desc: "Centre sportif avec activités, tarifs et séance d'essai gratuite." },
      { name: "Premium Homes", sector: "Immobilier · Biens", url: "https://inmobiliaria-demo.mktweb360.com", image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&q=75", desc: "Agence immobilière avec catalogue de biens et estimation gratuite." },
      { name: "Studio Belle", sector: "Esthétique · Beauté", url: "https://estetica-demo.mktweb360.com", image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=600&q=75", desc: "Institut de beauté avec soins, tarifs et rendez-vous en ligne." },
      { name: "Academia Saber+", sector: "Éducation · Formation", url: "https://academia-demo.mktweb360.com", image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600&q=75", desc: "Centre de formation avec cours, préparation aux concours et cours d'essai gratuit." },
      { name: "Psicología Bienestar", sector: "Santé · Psychologie", url: "https://psicologo-demo.mktweb360.com", image: "https://images.unsplash.com/photo-1573497620053-ea5300f94f21?w=600&q=75", desc: "Cabinet de psychologie avec thérapies en présentiel et en ligne." },
      { name: "Taller Auto Express", sector: "Automobile · Mécanique", url: "https://taller-demo.mktweb360.com", image: "https://images.unsplash.com/photo-1487754180451-c456f719a1fc?w=600&q=75", desc: "Garage automobile avec services, rendez-vous en ligne et diagnostic." },
    ],
  },
};

const WHY = {
  en: {
    title: "Why your website is your company's most important digital asset",
    paragraphs: [
      "Companies that invest in a professional website do not do it just for image. They do it because a well-built website is the only digital channel the company controls completely. Social networks change their algorithms and Google Ads raises its prices — but your website works for you around the clock without depending on third parties.",
      "An effective corporate or business website has a single objective on every page: for the visitor to understand what the company does, why they should trust it and what they need to do next. That is not achieved with a pretty design. It is achieved with well-thought-out content architecture, messages aligned with the customer's intent and trust elements placed in the right positions.",
      "For companies with more complex needs — client portals, advanced catalogues, intranets or platforms with specific business logic — the technical solution matters as much as the design. We use the right technology for each project, not the one that suits us best.",
    ],
  },
  fr: {
    title: "Pourquoi votre site web est l'actif digital le plus important de votre entreprise",
    paragraphs: [
      "Les entreprises qui investissent dans un site professionnel ne le font pas seulement pour leur image. Elles le font parce qu'un site bien construit est le seul canal digital que l'entreprise maîtrise entièrement. Les réseaux sociaux modifient leurs algorithmes, Google Ads augmente ses tarifs, mais votre site travaille pour vous 24 h/24 sans dépendre de tiers.",
      "Un site d'entreprise efficace poursuit un objectif unique sur chaque page : que le visiteur comprenne ce que fait l'entreprise, pourquoi il devrait lui faire confiance et ce qu'il doit faire ensuite. Un joli design n'y suffit pas. Il faut une architecture de contenu bien pensée, des messages alignés sur l'intention du client et des éléments de réassurance placés au bon endroit.",
      "Pour les entreprises aux besoins plus complexes — portails clients, catalogues avancés, intranets ou plateformes dotées d'une logique métier spécifique —, la solution technique compte autant que le design. Nous utilisons la technologie adaptée à chaque projet, et non celle qui nous arrange.",
    ],
  },
};

export default async function Page({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const isEn = lang === "en";

  const L = isEn ? "en" : "fr";
  const trust = TRUST[L];
  const complex = COMPLEX[L];
  const demos = DEMOS[L];
  const why = WHY[L];

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
        { step: "3", title: "Development", desc: "We build the website with the best technologies and follow the most current web standards, with technical SEO built in and clean, scalable code." },
        { step: "4", title: "Testing and launch", desc: "We test exhaustively across all devices before launch. Training is included so you can manage the website yourself." },
      ]
    : [
        { step: "1", title: "Analyse et conseil", desc: "Nous étudions votre entreprise, vos objectifs et votre concurrence pour proposer la solution web la plus adaptée." },
        { step: "2", title: "Design UX/UI", desc: "Nous créons des prototypes et des designs qui privilégient l'expérience utilisateur et les objectifs commerciaux." },
        { step: "3", title: "Développement", desc: "Nous développons le site avec les meilleures technologies en suivant les standards web les plus actuels, avec un SEO technique intégré et un code propre et évolutif." },
        { step: "4", title: "Tests et lancement", desc: "Nous testons exhaustivement sur tous les appareils avant le lancement. La formation est incluse pour que vous puissiez gérer le site en autonomie." },
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

        <div className="bg-primary-600 rounded-2xl py-6 px-4 mb-8 grid grid-cols-2 md:grid-cols-4 gap-4 text-center text-white">
          {trust.map((m) => (
            <div key={m.label}>
              <div className="text-lg font-bold text-accent-400">{m.value}</div>
              <div className="text-xs text-primary-200 mt-1">{m.label}</div>
            </div>
          ))}
        </div>

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

        <section className="border border-gray-200 rounded-2xl p-8 mb-8">
          <h2 className="text-2xl font-bold text-primary-600 mb-4">{complex.title}</h2>
          <p className="text-gray-700 leading-relaxed mb-4 font-medium">{complex.lead}</p>
          {complex.paragraphs.map((p) => (
            <p key={p} className="text-gray-700 leading-relaxed mb-4">{p}</p>
          ))}
          <Link
            href={`/${lang}/${langSlug(lang, "contact")}/`}
            className="inline-block bg-accent-500 text-white px-6 py-3 rounded-full font-bold text-sm hover:bg-accent-600 transition-colors"
          >
            {complex.cta}
          </Link>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-primary-600 mb-4">
            {isEn ? "Our process" : "Notre processus de travail"}
          </h2>
          <p className="text-gray-600 mb-6">
            {isEn ? "A clear process, with no surprises and with you at the centre." : "Un processus clair, sans surprises, dont vous êtes au centre."}
          </p>
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

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-primary-600 mb-4">{why.title}</h2>
          {why.paragraphs.map((p) => (
            <p key={p} className="text-gray-700 leading-relaxed mb-4">{p}</p>
          ))}
        </section>

        <section className="bg-gray-50 rounded-2xl p-8 mb-8">
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-accent-500 mb-3">{demos.eyebrow}</span>
          <h2 className="text-2xl font-bold text-primary-600 mb-3">{demos.title}</h2>
          <p className="text-gray-600 mb-6">{demos.intro}</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {demos.items.map((d) => (
              <a
                key={d.url}
                href={d.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-xl transition-all flex flex-col"
              >
                <div className="relative h-32 overflow-hidden shrink-0">
                  <img src={d.image} alt={d.name} className="w-full h-full object-cover object-center" loading="lazy" />
                  <span className="absolute bottom-2 left-2 inline-block text-xs font-semibold text-white bg-black/40 px-2 py-0.5 rounded-full">
                    {d.sector}
                  </span>
                </div>
                <div className="p-4 flex flex-col flex-1">
                  <h3 className="font-bold text-primary-600 text-sm mb-1">{d.name}</h3>
                  <p className="text-gray-600 text-xs leading-relaxed flex-1">{d.desc}</p>
                  <span className="text-accent-500 text-xs font-bold mt-2">{demos.cta}</span>
                </div>
              </a>
            ))}
          </div>
          <p className="text-center text-gray-600 text-sm mt-6">
            <Link href={`/${lang}/${langSlug(lang, "contact")}/`} className="text-primary-600 hover:underline font-medium">
              {demos.footer}
            </Link>
          </p>
        </section>

        <div className="bg-primary-50 rounded-xl p-6 border border-primary-100 mb-8">
          <p className="font-semibold text-primary-700 mb-2">
            {isEn ? "Do you have a specific project in mind?" : "Vous avez un projet spécifique en tête ?"}
          </p>
          <p className="text-gray-600 text-sm mb-4">
            {isEn
              ? "Tell us about your requirements and we will propose the most suitable solution for your company. We reply with a proposal in less than 24 hours."
              : "Parlez-nous de vos besoins et nous vous proposerons la solution la plus adaptée à votre entreprise. Nous vous répondons avec une proposition en moins de 24 heures."}
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
