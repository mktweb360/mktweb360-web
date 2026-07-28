import Image from "next/image";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ContactForm } from "@/components/ContactForm";
import { RelatedArticles } from "@/components/RelatedArticles";
import { alternatesFor } from "@/lib/i18n/routes";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const isEn = lang === "en";
  return {
    title: isEn
      ? "Local SEO Services — Get Found in Your Area"
      : "Services de SEO Local — Soyez Trouvé dans Votre Zone",
    description: isEn
      ? "Local SEO to attract clients from your area: Google Maps, Google Business Profile and reviews. Local positioning for businesses with or without a physical location."
      : "SEO local pour attirer des clients de votre zone : Google Maps, Google Business Profile et avis. Positionnement local pour les entreprises avec ou sans local physique.",
    alternates: alternatesFor(`/${lang}/local-seo-services/`) ?? {
      canonical: `https://www.mktweb360.com/${lang}/local-seo-services/`,
    },
    openGraph: {
      title: isEn
        ? "Local SEO — Google Maps Positioning | Mkt Web 360"
        : "SEO Local — Positionnement sur Google Maps | Mkt Web 360",
      description: isEn
        ? "Position your business on Google Maps and in searches in your area. More local clients with professional local SEO."
        : "Positionnez votre entreprise sur Google Maps et dans les recherches de votre zone. Plus de clients locaux avec un SEO local professionnel.",
    },
  };
}

export default async function Page({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const isEn = lang === "en";

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: isEn ? "Local SEO" : "SEO Local",
    serviceType: isEn ? "Local web positioning" : "Positionnement web local",
    provider: { "@type": "Organization", name: "Mkt Web 360 SLU", url: "https://www.mktweb360.com" },
    areaServed: { "@type": "Country", name: isEn ? "Spain" : "Espagne" },
    description: isEn
      ? "Local SEO service: positioning on Google Maps, Google Business Profile optimisation, review management and local searches for businesses and professionals."
      : "Service de SEO local : positionnement sur Google Maps, optimisation de Google Business Profile, gestion des avis et des recherches locales pour les entreprises et les professionnels.",
    url: `https://www.mktweb360.com/${lang}/local-seo-services/`,
  };

  const FAQS = isEn
    ? [
        {
          q: "What is local SEO and how does it differ from traditional SEO?",
          a: "Local SEO optimises your presence for searches with geographic intent: 'plumber in Toledo', 'dental clinic near me' or searches Google associates with your location. Unlike national SEO — focused on broad-reach keywords — local SEO works on the Google map (the local pack), your Google Business Profile listing, reviews and proximity signals. It is the ideal discipline for businesses with a defined catchment area.",
        },
        {
          q: "How long does it take to position my business on Google Maps?",
          a: "With a well-optimised listing, the first movements in the local pack are usually seen within 1 to 3 months, faster than traditional organic SEO because local competition is lower. Consolidating positions for competitive keywords in large cities takes between 4 and 8 months, depending on competition density and the initial state of your listing and website.",
        },
        {
          q: "Do I need a Google Business Profile listing to do local SEO?",
          a: "Yes. The Google Business Profile listing is the central asset in local SEO: it is what allows you to appear on Google Maps and in the local pack of results. If you do not have one, we create and verify it; if you already have one, we audit and optimise it (categories, services, photos, products, opening hours, attributes and posts). Without an optimised listing, the rest of the local work loses much of its effect.",
        },
        {
          q: "Does local SEO work if I have multiple locations or operate in multiple cities?",
          a: "Yes. For multi-location businesses we create and optimise one listing per location and design a coherent local pages architecture, avoiding duplicate content between cities. Each location competes for its own area with its listing, its consistent NAP (name, address and phone) and its reviews, while the website maintains a structure Google understands without penalties.",
        },
        {
          q: "Why do reviews matter for local ranking and how do you get more?",
          a: "Reviews are one of the most influential local ranking factors and, additionally, the main trust driver before first contact. We implement processes to request reviews at the right moment, provide direct links to your clients and help you respond to all of them — including negative ones — with judgement. The objective is a constant flow of genuine reviews, not artificial spikes.",
        },
        {
          q: "Do you do local SEO across Spain or only in Toledo?",
          a: "We work local SEO in any city in Spain. We have pages and specific experience in Toledo, Madrid, Valencia, Zaragoza and Bilbao, but the service is national: we position local businesses in their area wherever they are, adapting the strategy to the competition and market of each location.",
        },
      ]
    : [
        {
          q: "Qu'est-ce que le SEO local et en quoi diffère-t-il du SEO traditionnel ?",
          a: "Le SEO local optimise votre présence pour les recherches à intention géographique : « plombier à Lyon », « clinique dentaire près de moi » ou les recherches que Google associe à votre emplacement. Contrairement au SEO national — centré sur des mots-clés à large portée — le SEO local travaille sur la carte Google (le pack local), votre fiche Google Business Profile, les avis et les signaux de proximité. C'est la discipline idéale pour les entreprises avec une zone d'influence définie.",
        },
        {
          q: "Combien de temps faut-il pour positionner mon entreprise sur Google Maps ?",
          a: "Avec une fiche bien optimisée, les premiers mouvements dans le pack local se voient généralement entre 1 et 3 mois, plus rapidement que le SEO organique traditionnel car la concurrence locale est moindre. Consolider des positions pour des mots-clés compétitifs dans les grandes villes prend entre 4 et 8 mois, en fonction de la densité de concurrence et de l'état initial de votre fiche et de votre site.",
        },
        {
          q: "Ai-je besoin d'une fiche Google Business Profile pour faire du SEO local ?",
          a: "Oui. La fiche Google Business Profile est l'actif central du SEO local : c'est ce qui vous permet d'apparaître sur Google Maps et dans le pack local des résultats. Si vous n'en avez pas, nous la créons et la vérifions ; si vous en avez déjà une, nous l'auditons et l'optimisons (catégories, services, photos, produits, horaires, attributs et publications). Sans une fiche optimisée, le reste du travail local perd une grande partie de son effet.",
        },
        {
          q: "Le SEO local fonctionne-t-il si j'ai plusieurs établissements ou plusieurs villes ?",
          a: "Oui. Pour les entreprises multi-établissements, nous créons et optimisons une fiche par emplacement et concevons une architecture de pages locales cohérente, évitant le contenu dupliqué entre les villes. Chaque établissement concourt pour sa propre zone avec sa fiche, son NAP (nom, adresse et téléphone) cohérent et ses avis, tandis que le site maintient une structure que Google comprend sans pénalités.",
        },
        {
          q: "Pourquoi les avis sont-ils importants pour le positionnement local et comment en obtenir davantage ?",
          a: "Les avis sont l'un des facteurs de classement local les plus influents et, de plus, le principal moteur de confiance avant le premier contact. Nous mettons en place des processus pour demander des avis au bon moment, fournissons le lien direct à vos clients et vous aidons à tous les répondre — y compris les négatifs — avec discernement. L'objectif est un flux constant d'avis réels, pas des pics artificiels.",
        },
        {
          q: "Faites-vous du SEO local dans toute l'Espagne ou seulement à Tolède ?",
          a: "Nous faisons du SEO local dans n'importe quelle ville d'Espagne. Nous avons des pages et une expérience spécifique à Tolède, Madrid, Valence, Saragosse et Bilbao, mais le service est national : nous positionnons les entreprises locales dans leur zone où qu'elles se trouvent, en adaptant la stratégie à la concurrence et au marché de chaque localité.",
        },
      ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  const METHODOLOGY = isEn
    ? [
        { step: "01", title: "Local audit", desc: "We analyse your Google Business Profile, your position on the map, competition in your area and the SEO status of your website to detect immediate opportunities." },
        { step: "02", title: "Geolocated keywords", desc: "We identify the searches with local intent in your sector and city: the ones your clients actually use when searching for what you offer near them." },
        { step: "03", title: "Google Business Profile optimisation", desc: "Categories, services, products, photos, opening hours, attributes and posts. We turn your listing into a showcase that generates calls and visits." },
        { step: "04", title: "NAP and citations", desc: "We ensure your name, address and phone number are consistent across directories and relevant platforms, a key trust signal for local ranking." },
        { step: "05", title: "Reviews and reputation", desc: "We implement a process to get genuine reviews consistently and help you respond to all of them with judgement, including negative ones." },
        { step: "06", title: "Content and monitoring", desc: "We create optimised local pages and monitor positions, map visibility and conversions, with a monthly report and next steps." },
      ]
    : [
        { step: "01", title: "Audit local", desc: "Nous analysons votre fiche Google Business Profile, votre position sur la carte, la concurrence de votre zone et l'état SEO de votre site pour détecter les opportunités immédiates." },
        { step: "02", title: "Mots-clés géolocalisés", desc: "Nous identifions les recherches à intention locale dans votre secteur et votre ville : celles que vos clients utilisent réellement lorsqu'ils cherchent ce que vous offrez près d'eux." },
        { step: "03", title: "Optimisation de Google Business Profile", desc: "Catégories, services, produits, photos, horaires, attributs et publications. Nous transformons votre fiche en vitrine qui génère des appels et des visites." },
        { step: "04", title: "NAP et citations", desc: "Nous assurons que votre nom, adresse et numéro de téléphone sont cohérents dans les annuaires et plateformes pertinentes, un signal de confiance clé pour le classement local." },
        { step: "05", title: "Avis et réputation", desc: "Nous mettons en place un processus pour obtenir des avis réels de façon constante et vous aidons à tous les répondre avec discernement, y compris les négatifs." },
        { step: "06", title: "Contenu et suivi", desc: "Nous créons des pages locales optimisées et surveillons les positions, la visibilité sur la carte et les conversions, avec un rapport mensuel et les prochaines étapes." },
      ];

  const CITIES = [
    { name: isEn ? "SEO Toledo" : "SEO Tolède", href: `/${lang}/seo-toledo-guide/` },
    { name: "SEO Madrid", href: `/${lang}/seo-madrid-guide/` },
    { name: isEn ? "SEO Valencia" : "SEO Valence", href: `/${lang}/seo-valencia-guide/` },
    { name: "SEO Zaragoza", href: `/${lang}/seo-zaragoza-guide/` },
    { name: "SEO Bilbao", href: `/${lang}/seo-bilbao-guide/` },
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-700 to-primary-900 text-white">
        <div className="max-w-6xl mx-auto px-4 py-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <Breadcrumbs
              crumbs={[
                { label: isEn ? "Home" : "Accueil", href: `/${lang}/` },
                { label: isEn ? "Local SEO" : "SEO Local" },
              ]}
            />
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight mt-4">
              {isEn
                ? <>Appear when they search in your area<br /><span className="text-accent-400">Local SEO that fills your diary</span></>
                : <>Apparaissez quand ils cherchent dans votre zone<br /><span className="text-accent-400">SEO local qui remplit votre agenda</span></>}
            </h1>
            <p className="text-xl text-primary-200 mb-8 leading-relaxed">
              {isEn
                ? "Almost half of all Google searches have local intent. When someone searches for what you offer near them, you either appear on the map or your competition takes that client. Local SEO puts your business where purchase decisions are made."
                : "Près de la moitié des recherches sur Google ont une intention locale. Quand quelqu'un cherche ce que vous offrez près de chez lui, vous apparaissez sur la carte ou votre concurrence emporte ce client. Le SEO local place votre entreprise là où se prennent les décisions d'achat."}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#audit"
                className="bg-accent-500 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-accent-600 transition-colors text-center"
              >
                {isEn ? "Free local SEO audit" : "Audit SEO local gratuit"}
              </a>
              <a
                href="#methodology"
                className="border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white/10 transition-colors text-center"
              >
                {isEn ? "See how we work" : "Voir comment nous travaillons"}
              </a>
            </div>
          </div>
          <div className="hidden md:block">
            <Image
              src="/imagen-seo.jpg"
              alt={isEn ? "Local SEO and Google Maps positioning" : "SEO local et positionnement sur Google Maps"}
              className="rounded-2xl shadow-2xl w-full object-cover"
              width={800}
              height={600}
            />
          </div>
        </div>
      </section>

      {/* Trust bar */}
      <section className="bg-primary-600 py-6 px-4">
        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 text-center text-white">
          {(isEn
            ? [
                { value: "46%", label: "searches with local intent" },
                { value: "Google Maps", label: "your proximity showcase" },
                { value: "88%", label: "trust reviews as much as recommendations" },
                { value: "National", label: "local SEO across Spain" },
              ]
            : [
                { value: "46%", label: "recherches à intention locale" },
                { value: "Google Maps", label: "votre vitrine de proximité" },
                { value: "88%", label: "font autant confiance aux avis qu'aux recommandations" },
                { value: "National", label: "SEO local dans toute l'Espagne" },
              ]
          ).map((m) => (
            <div key={m.value}>
              <div className="text-xl font-bold text-accent-400">{m.value}</div>
              <div className="text-xs text-primary-200 mt-1">{m.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* What is local SEO */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-primary-600 mb-6">
                {isEn
                  ? "What local SEO is and why your business needs it"
                  : "Qu'est-ce que le SEO local et pourquoi votre entreprise en a besoin"}
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                {isEn
                  ? "Local SEO is the discipline that positions your business in searches with geographic intent: those that include a city or neighbourhood and those Google interprets as nearby ('near me', 'open now'). In those searches, Google shows the local pack — the block of three listings with a map — above traditional organic results."
                  : "Le SEO local est la discipline qui positionne votre entreprise dans les recherches à intention géographique : celles qui incluent une ville ou un quartier et celles que Google interprète comme proches (« près de moi », « ouvert maintenant »). Dans ces recherches, Google affiche le pack local — le bloc de trois fiches avec carte — au-dessus des résultats organiques traditionnels."}
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                {isEn
                  ? "For a business with a catchment area — a clinic, a workshop, a firm, a shop or a service professional — appearing there is worth more than any other position: it is traffic with very high purchase intent and one step away from a call or a visit. If you are not there, you are not competing."
                  : "Pour une entreprise avec une zone d'influence — une clinique, un atelier, un cabinet, un commerce ou un professionnel de services — apparaître là vaut plus que toute autre position : c'est du trafic avec une très haute intention d'achat et à un pas de l'appel ou de la visite. Si vous n'y êtes pas, vous ne concurrencez pas."}
              </p>
              <div className="grid grid-cols-2 gap-4">
                {(isEn
                  ? [
                      { label: "Without local SEO", sub: "Invisible on the map. The client chooses whoever does appear.", bad: true },
                      { label: "With local SEO", sub: "In the local pack when they search for your service in your area.", bad: false },
                    ]
                  : [
                      { label: "Sans SEO local", sub: "Invisible sur la carte. Le client choisit celui qui apparaît.", bad: true },
                      { label: "Avec SEO local", sub: "Dans le pack local quand ils cherchent votre service dans votre zone.", bad: false },
                    ]
                ).map((c) => (
                  <div key={c.label} className={`rounded-xl p-4 border-2 ${c.bad ? "border-gray-200 bg-white" : "border-accent-500 bg-accent-50"}`}>
                    <p className={`font-bold mb-1 ${c.bad ? "text-gray-400" : "text-accent-600"}`}>{c.label}</p>
                    <p className="text-xs text-gray-500">{c.sub}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-primary-600 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">
                {isEn ? "Who is local SEO for?" : "Pour qui est le SEO local ?"}
              </h3>
              <ul className="space-y-3">
                {(isEn
                  ? [
                      "Businesses with a physical location or service area",
                      "Clinics, dentists, physiotherapists and health centres",
                      "Proximity services: plumbers, locksmiths, electricians",
                      "Professional firms: lawyers, accountants, consultants",
                      "Retail and hospitality businesses capturing clients in their neighbourhood or city",
                      "Multi-location businesses competing in several cities",
                    ]
                  : [
                      "Entreprises avec un local physique ou une zone de service",
                      "Cliniques, dentistes, kinésithérapeutes et centres de santé",
                      "Services de proximité : plombiers, serruriers, électriciens",
                      "Cabinets professionnels : avocats, comptables, conseillers",
                      "Commerces et hôtellerie qui captent dans leur quartier ou leur ville",
                      "Entreprises multi-établissements qui concurrencent dans plusieurs villes",
                    ]
                ).map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm">
                    <span className="text-accent-400 font-bold shrink-0">✓</span>{item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Methodology */}
      <section id="methodology" className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary-600 mb-4">
              {isEn
                ? "How we position your business on the Google map"
                : "Comment nous positionnons votre entreprise sur la carte Google"}
            </h2>
            <p className="text-gray-600">
              {isEn
                ? "A proven process for gaining local visibility in a sustainable way."
                : "Un processus éprouvé pour gagner en visibilité locale de façon durable."}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {METHODOLOGY.map((item) => (
              <div key={item.step} className="flex gap-4 p-6 bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                <span className="text-accent-500 font-bold text-3xl shrink-0 leading-none">{item.step}</span>
                <div>
                  <h3 className="font-bold text-primary-700 mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Google Business Profile */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-primary-600 mb-4">
              {isEn
                ? "Google Business Profile: your most important local asset"
                : "Google Business Profile : votre actif local le plus important"}
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {isEn
                ? "The Google listing is the first thing a client searching in your area sees. Optimising it well makes the difference between appearing or not on the map."
                : "La fiche Google est la première chose qu'un client cherchant dans votre zone voit. Bien l'optimiser fait la différence entre apparaître ou non sur la carte."}
            </p>
          </div>
          <p className="text-gray-600 leading-relaxed max-w-3xl mx-auto mb-6">
            {isEn
              ? "We work on every element of your listing: primary and secondary categories, description, services and products, photographs, opening hours, attributes and periodic posts. We keep your NAP (name, address and phone) information consistent across the web and activate messages and FAQs so no client goes unanswered. A live, complete listing with recent reviews is what Google prioritises in the local pack."
              : "Nous travaillons sur chaque élément de votre fiche : catégories principales et secondaires, description, services et produits, photographies, horaires, attributs et publications périodiques. Nous maintenons vos informations NAP (nom, adresse et téléphone) cohérentes sur tout le web et activons les messages et les questions fréquentes pour qu'aucun client ne reste sans réponse. Une fiche vivante, complète et avec des avis récents est celle que Google priorise dans le pack local."}
          </p>
          <div className="text-center flex flex-col sm:flex-row gap-4 justify-center">
            <Link href={`/${lang}/google-business-profile-management/`} className="inline-flex items-center justify-center gap-2 text-accent-500 font-semibold hover:underline">
              {isEn ? "Google Business Profile service →" : "Service Google Business Profile →"}
            </Link>
          </div>
        </div>
      </section>

      {/* Cities */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-primary-600 mb-4">
              {isEn ? "Local SEO by city" : "SEO local par ville"}
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {isEn
                ? "We work across Spain. These are some of the cities where we have specific pages and local positioning experience."
                : "Nous travaillons dans toute l'Espagne. Voici quelques-unes des villes où nous avons des pages et une expérience spécifique en positionnement local."}
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {CITIES.map((c) => (
              <Link
                key={c.href}
                href={c.href}
                className="bg-white rounded-xl p-5 text-center shadow-sm border border-gray-100 hover:border-accent-500 hover:shadow-md transition-all font-semibold text-primary-700 hover:text-accent-500"
              >
                {c.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Local vs National */}
      <section className="py-12 px-4 bg-primary-50 border-y border-primary-100">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-2xl font-bold text-primary-600 mb-4">
                {isEn
                  ? "Local SEO vs national SEO: when to choose each"
                  : "SEO local vs SEO national : quand choisir l'un ou l'autre"}
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                {isEn
                  ? "They are not the same nor do they compete: they complement each other. Local SEO is ideal when your client is in a specific area and the decision depends on proximity. National SEO makes sense when you sell or serve all of Spain and compete for broader-reach keywords."
                  : "Ce ne sont pas la même chose et ils ne se concurrencent pas : ils se complètent. Le SEO local est idéal quand votre client est dans une zone précise et que la décision dépend de la proximité. Le SEO national a du sens quand vous vendez ou servez toute l'Espagne et concourrez pour des mots-clés à plus large portée."}
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                {isEn
                  ? "In many businesses the winning strategy combines both: local positioning to capture in your area and national SEO to build authority and reach. We help you decide where to invest first based on your market and your objectives."
                  : "Dans de nombreuses entreprises, la stratégie gagnante combine les deux : positionnement local pour capter dans votre zone et SEO national pour construire autorité et portée. Nous vous aidons à décider où investir en premier selon votre marché et vos objectifs."}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href={`/${lang}/seo-web-positioning/`} className="inline-flex items-center gap-2 text-accent-500 font-semibold hover:underline">
                  {isEn ? "See national SEO →" : "Voir le SEO national →"}
                </Link>
                <Link href={`/${lang}/seo-vs-google-ads/`} className="inline-flex items-center gap-2 text-accent-500 font-semibold hover:underline">
                  {isEn ? "SEO or Google Ads? →" : "SEO ou Google Ads ? →"}
                </Link>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-4">
              {(isEn
                ? [
                    { t: "Choose local SEO if…", d: "you have a physical location or service area and your clients search by proximity." },
                    { t: "Choose national SEO if…", d: "you sell across Spain and compete for broad-reach keywords." },
                    { t: "Combine both if…", d: "you want to capture in your area and build authority at the same time." },
                  ]
                : [
                    { t: "Choisissez le SEO local si…", d: "vous avez un local physique ou une zone de service et vos clients cherchent par proximité." },
                    { t: "Choisissez le SEO national si…", d: "vous vendez dans toute l'Espagne et concourrez pour des mots-clés à large portée." },
                    { t: "Combinez les deux si…", d: "vous voulez capter dans votre zone et construire de l'autorité en même temps." },
                  ]
              ).map((c) => (
                <div key={c.t} className="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
                  <p className="font-bold text-primary-700 mb-1">{c.t}</p>
                  <p className="text-sm text-gray-500">{c.d}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary-600 mb-4">
              {isEn ? "Frequently asked questions about local SEO" : "Questions fréquentes sur le SEO local"}
            </h2>
          </div>
          <div className="space-y-4">
            {FAQS.map((faq) => (
              <details key={faq.q} className="border border-gray-200 rounded-xl overflow-hidden group bg-white">
                <summary className="px-6 py-4 cursor-pointer font-semibold text-primary-700 hover:bg-primary-50 list-none flex justify-between items-center">
                  {faq.q}
                  <span className="text-accent-500 group-open:rotate-180 transition-transform">▾</span>
                </summary>
                <div className="px-6 py-4 text-gray-600 border-t border-gray-100 text-sm leading-relaxed">{faq.a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Form */}
      <section id="audit" className="py-16 px-4 bg-primary-600 text-white">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-4">
              {isEn ? "Free local SEO audit" : "Audit SEO local gratuit"}
            </h2>
            <p className="text-primary-200">
              {isEn
                ? "We analyse your Google listing and your map visibility with no obligation, and tell you exactly what is holding back your local ranking."
                : "Nous analysons votre fiche Google et votre visibilité sur la carte sans engagement, et vous disons exactement ce qui freine votre positionnement local."}
            </p>
          </div>
          <div className="bg-white rounded-2xl p-8">
            <ContactForm lang={lang} />
          </div>
        </div>
      </section>

      <RelatedArticles category="SEO" title={isEn ? "More about SEO and local positioning" : "Plus sur le SEO et le positionnement local"} />
    </>
  );
}
