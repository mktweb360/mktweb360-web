import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { RelatedArticles } from "@/components/RelatedArticles";
import { alternatesFor } from "@/lib/i18n/routes";

const FAQS_EN = [
  {
    q: "How much does a website for a dental clinic cost?",
    a: "A professional website for a dentist starts from £790/€790 depending on the number of pages, features (online booking, blog, case gallery) and level of customisation. The price includes design, development, basic technical SEO and training for autonomous management.",
  },
  {
    q: "Can I add an online appointment booking system?",
    a: "Yes. We integrate online booking systems connected to your diary, either with custom tools or platforms such as Doctoralia, Calendly or sector-specific dental software. Patients can book 24/7 without calling.",
  },
  {
    q: "Is local SEO included in the website design?",
    a: "Website design includes technical SEO and initial keyword optimisation. Ongoing local positioning (Google Business Profile, local link building, SEO content) is a separate service that complements the website to achieve long-term organic results.",
  },
  {
    q: "How long does it take to have my clinic's website ready?",
    a: "The usual timeframe is 3 to 5 weeks from project start. This depends on how quickly content (text, photos, service information) is provided. We work with a structured process so the client always knows which phase the project is in.",
  },
];

const FAQS_FR = [
  {
    q: "Combien coûte un site web pour une clinique dentaire ?",
    a: "Un site web professionnel pour dentiste commence à partir de 790 € selon le nombre de pages, les fonctionnalités (prise de rendez-vous en ligne, blog, galerie de cas) et le niveau de personnalisation. Le prix inclut la conception, le développement, le référencement technique de base et la formation à la gestion autonome.",
  },
  {
    q: "Puis-je ajouter un système de prise de rendez-vous en ligne ?",
    a: "Oui. Nous intégrons des systèmes de réservation en ligne connectés à votre agenda, que ce soit avec des outils propres ou des plateformes comme Doctolib, Calendly ou des logiciels spécifiques au secteur dentaire. Les patients peuvent réserver 24h/24 sans appeler.",
  },
  {
    q: "Le référencement local est-il inclus dans la conception du site web ?",
    a: "La conception du site inclut le référencement technique et l'optimisation initiale des mots-clés. Le positionnement local continu (Google Business Profile, création de liens locaux, contenu SEO) est un service séparé qui complète le site pour obtenir des résultats organiques sur le long terme.",
  },
  {
    q: "Combien de temps faut-il pour que le site de ma clinique soit prêt ?",
    a: "Le délai habituel est de 3 à 5 semaines à partir du début du projet, selon la rapidité de fourniture des contenus (textes, photos, informations sur les services). Nous travaillons avec un processus structuré pour que le client sache à tout moment dans quelle phase se trouve le projet.",
  },
];

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const isEn = lang === "en";
  return {
    title: isEn
      ? "Web Design for Dentists and Dental Clinics"
      : "Création de Site Web pour Dentistes et Cliniques Dentaires",
    description: isEn
      ? "Professional web design for dentists and dental clinics. Optimised for local SEO, Google Maps and new patient acquisition. No commission fees."
      : "Création de site web professionnel pour dentistes et cliniques dentaires. Optimisé pour le référencement local, Google Maps et l'acquisition de nouveaux patients. Sans commission.",
    alternates: alternatesFor(`/${lang}/web-design-dentists/`) ?? {
      canonical: `https://www.mktweb360.com/${lang}/web-design-dentists/`,
    },
    openGraph: {
      title: isEn
        ? "Web Design for Dentists and Dental Clinics | Mkt Web 360"
        : "Création de Site Web pour Dentistes et Cliniques Dentaires | Mkt Web 360",
      description: isEn
        ? "Professional web design for dentists and dental clinics. Optimised for local SEO, Google Maps and new patient acquisition."
        : "Création de site web pour dentistes et cliniques dentaires. Optimisé pour le référencement local, Google Maps et l'acquisition de nouveaux patients.",
    },
  };
}

export default async function Page({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const isEn = lang === "en";
  const FAQS = isEn ? FAQS_EN : FAQS_FR;

  const steps = isEn
    ? [
        { n: "1", t: "Analysis and strategy", d: "We study your area, your competitors and the keywords with the highest local search volume. We define the website structure and the services to prioritise." },
        { n: "2", t: "Design and development", d: "We design a website that conveys trust and professionalism. Fast, secure, mobile-friendly and technically optimised for SEO from day one." },
        { n: "3", t: "Content and optimisation", d: "We write service page copy optimised for local positioning. We integrate the appointment form, reviews and Google Maps." },
        { n: "4", t: "Training and handover", d: "We train you to manage the website autonomously — publishing news, updating opening hours, adding photos. The website is yours, with no strings attached." },
      ]
    : [
        { n: "1", t: "Analyse et stratégie", d: "Nous étudions votre zone géographique, vos concurrents et les mots-clés avec le plus grand volume de recherche locale. Nous définissons la structure du site et les services à prioriser." },
        { n: "2", t: "Conception et développement", d: "Nous concevons un site qui inspire confiance et professionnalisme. Rapide, sécurisé, adapté aux mobiles et optimisé techniquement pour le SEO dès le premier jour." },
        { n: "3", t: "Contenu et optimisation", d: "Nous rédigeons les textes des pages de services optimisés pour le positionnement local. Nous intégrons le formulaire de prise de rendez-vous, les avis et Google Maps." },
        { n: "4", t: "Formation et livraison", d: "Nous vous apprenons à gérer le site de façon autonome — publier des actualités, mettre à jour les horaires, ajouter des photos. Le site vous appartient, sans dépendances." },
      ];

  return (
    <>
      <article className="max-w-3xl mx-auto px-4 py-12">
        <Breadcrumbs
          crumbs={[
            { label: isEn ? "Home" : "Accueil", href: `/${lang}/` },
            { label: "Blog", href: `/${lang}/blog/` },
            { label: isEn ? "Web design for dentists" : "Site web pour dentistes" },
          ]}
        />

        <header className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="bg-primary-100 text-primary-700 text-xs font-medium px-2.5 py-0.5 rounded-full">
              {isEn ? "Web Design · Health" : "Création Web · Santé"}
            </span>
            <time className="text-sm text-gray-400" dateTime="2026-06-25">
              {isEn ? "25 June 2026" : "25 juin 2026"}
            </time>
          </div>
          <h1 className="text-4xl font-bold text-primary-600 mb-4 leading-tight">
            {isEn
              ? "Web Design for Dentists: How to Attract More Patients from Google"
              : "Création de Site Web pour Dentistes : Comment Attirer Plus de Patients depuis Google"}
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            {isEn
              ? "When someone needs a dentist, the first thing they do is search on Google. If your clinic doesn't appear or has a website that doesn't inspire trust, that patient goes to a competitor. This guide explains what a dental clinic website needs to genuinely attract patients."
              : "Quand quelqu'un cherche un dentiste, la première chose qu'il fait est de taper sur Google. Si votre clinique n'apparaît pas ou si votre site web n'inspire pas confiance, ce patient ira chez un concurrent. Ce guide explique ce que doit avoir le site d'une clinique dentaire pour attirer vraiment des patients."}
          </p>
        </header>

        <div className="text-gray-700 space-y-6 leading-relaxed">
          <p>
            {isEn
              ? "The dental sector is one of the most competitive in local search. In any medium-sized city there are dozens of clinics competing for the same patients. The difference between those with full appointment books and those relying on word of mouth is no longer just clinical quality — it is digital visibility and the trust conveyed by their online presence."
              : "Le secteur dentaire est l'un des plus concurrentiels dans la recherche locale. Dans toute ville de taille moyenne, il y a des dizaines de cliniques qui se disputent les mêmes patients. La différence entre celles qui ont leur agenda plein et celles qui dépendent du bouche-à-oreille n'est plus seulement la qualité clinique — c'est la visibilité numérique et la confiance que transmet leur présence en ligne."}
          </p>

          <h2 className="text-2xl font-bold text-primary-600">
            {isEn
              ? "Why a dental clinic needs a professional website"
              : "Pourquoi une clinique dentaire a besoin d'un site web professionnel"}
          </h2>
          <p>
            {isEn
              ? "A dental clinic's website serves three simultaneous functions that no other digital tool can cover: building trust before first contact, ranking in local searches and converting visits into appointments."
              : "Le site web d'une clinique dentaire remplit trois fonctions simultanées qu'aucun autre outil numérique ne peut couvrir : générer la confiance avant le premier contact, se positionner dans les recherches locales et convertir les visites en rendez-vous."}
          </p>
          <p>
            {isEn
              ? "A patient searching for \"dentist in [city]\" will compare several clinics before deciding. In that comparison, the website is the most influential element after reviews. An outdated, slow or poorly-informative website communicates exactly the opposite of what a dental clinic needs to convey: professionalism, cleanliness, trust and modernity."
              : "Un patient qui cherche « dentiste à [ville] » va comparer plusieurs cliniques avant de se décider. Dans cette comparaison, le site web est l'élément le plus influent après les avis. Un site obsolète, lent ou peu informatif communique exactement le contraire de ce qu'une clinique dentaire doit transmettre : professionnalisme, hygiène, confiance et modernité."}
          </p>
          <p>
            {isEn
              ? "Furthermore, Google Business Profile — the listing that appears on Google Maps — works much better when backed by a well-structured website. Clinics with optimised websites appear more frequently in the local pack of three results Google shows above the organic results."
              : "De plus, Google Business Profile — la fiche qui apparaît sur Google Maps — fonctionne bien mieux quand elle est soutenue par un site web bien structuré. Les cliniques avec un site optimisé apparaissent plus souvent dans le pack local de trois résultats que Google affiche avant les résultats organiques."}
          </p>

          <h2 className="text-2xl font-bold text-primary-600">
            {isEn
              ? "What a dental clinic website must have"
              : "Ce que doit avoir le site web d'une clinique dentaire"}
          </h2>
          <p>
            {isEn
              ? "A website for dentists that genuinely attracts patients must include, at minimum, the following elements:"
              : "Un site web pour dentistes qui attire vraiment des patients doit inclure, au minimum, les éléments suivants :"}
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>{isEn ? "Detailed service pages:" : "Pages de services détaillées :"}</strong>{" "}
              {isEn
                ? "orthodontics, implants, whitening, cosmetic dentistry, endodontics... each service on its own page with real information and indicative pricing where possible."
                : "orthodontie, implants, blanchiment, dentisterie esthétique, endodontie... chaque service sur sa propre page avec des informations réelles et des prix indicatifs si possible."}
            </li>
            <li>
              <strong>{isEn ? "Dental team:" : "Équipe médicale :"}</strong>{" "}
              {isEn
                ? "name, photo, training and specialisation of each dentist. Patients want to know who will be treating them before they arrive."
                : "nom, photo, formation et spécialisation de chaque dentiste. Les patients veulent savoir qui va les soigner avant de venir."}
            </li>
            <li>
              <strong>{isEn ? "Case gallery:" : "Galerie de cas :"}</strong>{" "}
              {isEn
                ? "before and after treatment photos (with patient consent). This is the most powerful visual argument in cosmetic dentistry."
                : "photos avant et après les traitements (avec consentement du patient). C'est l'argument visuel le plus puissant en dentisterie esthétique."}
            </li>
            <li>
              <strong>{isEn ? "Reviews and testimonials:" : "Avis et témoignages :"}</strong>{" "}
              {isEn
                ? "integrated from Google or shown directly on the website. 90% of patients read reviews before choosing a dentist."
                : "intégrés depuis Google ou affichés directement sur le site. 90 % des patients lisent les avis avant de choisir un dentiste."}
            </li>
            <li>
              <strong>{isEn ? "Appointment form or online booking:" : "Formulaire de rendez-vous ou réservation en ligne :"}</strong>{" "}
              {isEn
                ? "accessible from any page, especially on mobile. 60% of traffic from these searches comes from smartphones."
                : "accessible depuis n'importe quelle page, surtout sur mobile. 60 % du trafic provenant de ces recherches vient des smartphones."}
            </li>
            <li>
              <strong>{isEn ? "Visible contact details:" : "Coordonnées visibles :"}</strong>{" "}
              {isEn
                ? "phone, address with map, updated opening hours and WhatsApp if used."
                : "téléphone, adresse avec carte, horaires mis à jour et WhatsApp si utilisé."}
            </li>
          </ul>

          <h2 className="text-2xl font-bold text-primary-600">
            {isEn ? "Local SEO for dentists" : "Référencement local pour dentistes"}
          </h2>
          <p>
            {isEn
              ? "Local SEO is the strategy that allows you to appear on Google when someone searches for \"dentist near me\" or \"dental clinic in [your city]\". It has two fundamental pillars:"
              : "Le référencement local est la stratégie qui permet d'apparaître sur Google quand quelqu'un cherche « dentiste près de chez moi » ou « clinique dentaire à [votre ville] ». Il repose sur deux piliers fondamentaux :"}
          </p>
          <p>
            <strong>{isEn ? "Optimised Google Business Profile:" : "Google Business Profile optimisé :"}</strong>{" "}
            {isEn
              ? "correct name, main category (\"Dentist\"), description with local keywords, updated opening hours, photos of the clinic and team, and active review management. Responding to reviews — especially negative ones — is a trust signal for both Google and potential patients."
              : "nom correct, catégorie principale (« Dentiste »), description avec des mots-clés locaux, horaires mis à jour, photos de la clinique et de l'équipe, et gestion active des avis. Répondre aux avis — surtout aux négatifs — est un signal de confiance tant pour Google que pour les patients potentiels."}
          </p>
          <p>
            <strong>{isEn ? "Website with local keywords:" : "Site web avec mots-clés locaux :"}</strong>{" "}
            {isEn
              ? "website copy should mention the city and neighbourhood naturally. \"Dental clinic in central Birmingham\" ranks better than \"Dental clinic\" without geographic context. Each important service can have its own page optimised with the local area."
              : "les textes du site doivent mentionner la ville et le quartier de façon naturelle. « Clinique dentaire dans le centre de Lyon » se positionne mieux que « Clinique dentaire » sans contexte géographique. Chaque service important peut avoir sa propre page optimisée avec la localisation."}
          </p>

          <div className="bg-primary-50 rounded-xl p-6 border border-primary-100">
            <p className="font-semibold text-primary-700 mb-2">
              {isEn
                ? "Want a website that fills your appointment book with patients?"
                : "Vous voulez un site web qui remplit votre agenda de patients ?"}
            </p>
            <p className="text-gray-600 text-sm mb-4">
              {isEn
                ? "We design websites for dental clinics optimised for local SEO and patient acquisition. No commission fees, with autonomous management from day one."
                : "Nous concevons des sites web pour les cliniques dentaires optimisés pour le référencement local et l'acquisition de patients. Sans commission, avec une gestion autonome dès le premier jour."}
            </p>
            <Link
              href={`/${lang}/contact/`}
              className="inline-block bg-accent-500 text-white px-6 py-2.5 rounded-full font-semibold text-sm hover:bg-accent-600 transition-colors"
            >
              {isEn ? "Request a quote" : "Demander un devis"}
            </Link>
          </div>

          <h2 className="text-2xl font-bold text-primary-600">
            {isEn
              ? "Our process: from zero to website in 4 steps"
              : "Notre processus : de zéro à un site web en 4 étapes"}
          </h2>
          <ul className="list-none space-y-4">
            {steps.map((s) => (
              <li key={s.n} className="flex gap-4 items-start">
                <span className="w-8 h-8 rounded-full bg-accent-500 text-white text-sm font-bold flex items-center justify-center shrink-0">
                  {s.n}
                </span>
                <div>
                  <p className="font-semibold text-primary-700">{s.t}</p>
                  <p className="text-gray-600 text-sm">{s.d}</p>
                </div>
              </li>
            ))}
          </ul>

          <div className="bg-primary-600 text-white rounded-2xl p-8 my-2 text-center">
            <h2 className="text-2xl font-bold mb-3">
              {isEn
                ? "Professional website for your dental clinic"
                : "Site web professionnel pour votre clinique dentaire"}
            </h2>
            <p className="text-primary-200 mb-6">
              {isEn
                ? "More patients, a full appointment book and a digital presence that generates trust. No commissions, no licence fees, with autonomous management."
                : "Plus de patients, un agenda plein et une présence digitale qui génère la confiance. Sans commissions, sans licences, avec une gestion autonome."}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href={`/${lang}/contact/`}
                className="bg-accent-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-accent-600 transition-colors"
              >
                {isEn ? "Request a quote" : "Demander un devis"}
              </Link>
              <Link
                href={`/${lang}/web-design/`}
                className="border-2 border-white text-white px-6 py-3 rounded-full font-semibold hover:bg-white/10 transition-colors"
              >
                {isEn ? "See web design service" : "Voir le service création web"}
              </Link>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-primary-600">
            {isEn ? "Frequently asked questions" : "Questions fréquentes"}
          </h2>
          <div className="space-y-3">
            {FAQS.map((faq) => (
              <details key={faq.q} className="border border-gray-200 rounded-xl overflow-hidden group">
                <summary className="px-6 py-4 cursor-pointer font-semibold text-primary-700 hover:bg-primary-50 list-none flex justify-between items-center">
                  {faq.q}
                  <span className="text-accent-500 group-open:rotate-180 transition-transform">▾</span>
                </summary>
                <div className="px-6 py-4 text-gray-600 border-t border-gray-100">{faq.a}</div>
              </details>
            ))}
          </div>

          <p className="text-sm text-gray-500 pt-4">
            {isEn ? "See also:" : "Voir aussi :"}{" "}
            <Link href={`/${lang}/web-design-clinics/`} className="text-accent-500 hover:underline">
              {isEn ? "Web design for clinics" : "Création web pour cliniques"}
            </Link>{" "}
            ·{" "}
            <Link href={`/${lang}/local-seo-for-service-businesses/`} className="text-accent-500 hover:underline">
              {isEn ? "Local SEO for service businesses" : "SEO local pour entreprises de services"}
            </Link>{" "}
            ·{" "}
            <Link href={`/${lang}/web-design/`} className="text-accent-500 hover:underline">
              {isEn ? "Professional web design" : "Création de sites web professionnels"}
            </Link>
          </p>
        </div>

        <nav className="mt-12 pt-8 border-t border-gray-200">
          <Link href={`/${lang}/blog/`} className="text-accent-500 hover:text-accent-600 font-medium text-sm">
            {isEn ? "← Back to blog" : "← Retour au blog"}
          </Link>
        </nav>
      </article>
      <RelatedArticles currentSlug="web-design-dentists" category="Web Design" />
    </>
  );
}
