import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { RelatedArticles } from "@/components/RelatedArticles";
import { alternatesFor } from "@/lib/i18n/routes";

const FAQS_EN = [
  {
    q: "How much does a website for a clinic or health centre cost?",
    a: "The price varies depending on the specialty and the features required. A professional website for a clinic starts from £790/€790 and includes design, development, technical SEO and training. Clinics with multiple specialties or complex booking systems have a higher cost.",
  },
  {
    q: "Can I manage the website content myself?",
    a: "Yes. We build on WordPress with included training so you can update services, add posts, change opening hours and manage the blog completely autonomously without depending on us for every change.",
  },
  {
    q: "Do your websites comply with GDPR and health sector regulations?",
    a: "Yes. We include a legal notice, privacy policy and cookie policy tailored to the healthcare sector, as well as forms with the explicit consent checkboxes required by GDPR.",
  },
  {
    q: "Do you build websites for any type of clinic?",
    a: "Yes. We work with physiotherapists, psychologists, nutritionists, aesthetic clinics, sports medicine centres, speech therapists, podiatrists and any professional or centre in the health and wellness field.",
  },
];

const FAQS_FR = [
  {
    q: "Combien coûte un site web pour une clinique ou un centre de santé ?",
    a: "Le prix varie selon la spécialité et les fonctionnalités requises. Un site web professionnel pour une clinique commence à partir de 790 € et inclut la conception, le développement, le référencement technique et la formation. Les cliniques avec plusieurs spécialités ou des systèmes de réservation complexes ont un coût plus élevé.",
  },
  {
    q: "Puis-je gérer moi-même les contenus du site ?",
    a: "Oui. Nous développons sur WordPress avec une formation incluse pour que vous puissiez mettre à jour les services, ajouter des publications, modifier les horaires et gérer le blog de façon entièrement autonome sans dépendre de nous pour chaque modification.",
  },
  {
    q: "Vos sites respectent-ils le RGPD et la réglementation du secteur de la santé ?",
    a: "Oui. Nous incluons une mention légale, une politique de confidentialité et une politique de cookies adaptées au secteur sanitaire, ainsi que des formulaires avec les cases de consentement explicite requises par le RGPD.",
  },
  {
    q: "Faites-vous des sites pour tout type de clinique ?",
    a: "Oui. Nous travaillons avec des kinésithérapeutes, psychologues, nutritionnistes, cliniques esthétiques, centres de médecine sportive, orthophonistes, podologues et tout professionnel ou centre dans le domaine de la santé et du bien-être.",
  },
];

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const isEn = lang === "en";
  return {
    title: isEn
      ? "Web Design for Clinics and Health Centres"
      : "Création de Site Web pour Cliniques et Centres de Santé",
    description: isEn
      ? "Professional web design for clinics, medical and health centres. Optimised for local SEO and patient acquisition. Physiotherapy, psychology, aesthetics and more."
      : "Création de site web pour cliniques, centres médicaux et de santé. Optimisé pour le référencement local et l'acquisition de patients. Kinésithérapie, psychologie, esthétique et plus.",
    alternates: alternatesFor(`/${lang}/web-design-clinics/`) ?? {
      canonical: `https://www.mktweb360.com/${lang}/web-design-clinics/`,
    },
    openGraph: {
      title: isEn
        ? "Web Design for Clinics and Health Centres | Mkt Web 360"
        : "Création de Site Web pour Cliniques et Centres de Santé | Mkt Web 360",
      description: isEn
        ? "Professional web design for clinics and health centres. Local SEO, patient acquisition and online booking integrated."
        : "Création de site web pour cliniques et centres de santé. SEO local, acquisition de patients et prise de rendez-vous en ligne intégrés.",
    },
  };
}

export default async function Page({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const isEn = lang === "en";
  const FAQS = isEn ? FAQS_EN : FAQS_FR;

  const steps = isEn
    ? [
        { n: "1", t: "Local analysis and strategy", d: "We study your competitors in the area, the keywords for your specialty and the optimal structure to rank well from launch." },
        { n: "2", t: "Professional design for the health sector", d: "Clean, trust-building websites with a colour palette and aesthetic appropriate to the healthcare sector. Mobile-friendly and fast-loading." },
        { n: "3", t: "Content, specialties and optimisation", d: "We write service pages with SEO-optimised copy. We integrate the appointment form, map and reviews." },
        { n: "4", t: "Training and handover without lock-in", d: "The website is yours. We train you to manage it autonomously without depending on us for every change." },
      ]
    : [
        { n: "1", t: "Analyse locale et stratégie", d: "Nous étudions vos concurrents dans la zone, les mots-clés de votre spécialité et la structure optimale pour vous positionner dès le lancement." },
        { n: "2", t: "Conception professionnelle pour le secteur santé", d: "Sites propres, inspirant la confiance, avec une palette de couleurs et une esthétique adaptées au secteur sanitaire. Adaptés aux mobiles et à chargement rapide." },
        { n: "3", t: "Contenu, spécialités et optimisation", d: "Nous rédigeons les pages de services avec des textes optimisés pour le SEO. Nous intégrons le formulaire de rendez-vous, la carte et les avis." },
        { n: "4", t: "Formation et livraison sans engagement", d: "Le site vous appartient. Nous vous formons pour le gérer de façon autonome sans dépendre de nous pour chaque modification." },
      ];

  return (
    <>
      <article className="max-w-3xl mx-auto px-4 py-12">
        <Breadcrumbs
          crumbs={[
            { label: isEn ? "Home" : "Accueil", href: `/${lang}/` },
            { label: "Blog", href: `/${lang}/blog/` },
            { label: isEn ? "Web design for clinics" : "Site web pour cliniques" },
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
              ? "Web Design for Clinics: Professional Websites That Generate Patients"
              : "Création de Site Web pour Cliniques : Sites Professionnels qui Génèrent des Patients"}
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            {isEn
              ? "Physiotherapists, psychologists, nutritionists, aesthetic clinics… they all share the same challenge: their patients search for them on Google, and if they don't appear or their website doesn't inspire trust, they lose that opportunity. This guide explains what a clinic's website needs to attract patients consistently."
              : "Kinésithérapeutes, psychologues, nutritionnistes, cliniques esthétiques… ils partagent tous le même problème : leurs patients les cherchent sur Google, et s'ils n'apparaissent pas ou si leur site web n'inspire pas confiance, ils perdent cette opportunité. Ce guide explique ce que doit avoir le site d'une clinique pour attirer des patients de façon constante."}
          </p>
        </header>

        <div className="text-gray-700 space-y-6 leading-relaxed">
          <p>
            {isEn
              ? "The health and wellness sector has a characteristic that sets it apart from other businesses: the patient is not just looking for a service, they are looking for someone to trust. That trust is built before the first appointment, and today it is built primarily online. A professional website is not a luxury for a clinic — it is the most important patient acquisition tool that exists."
              : "Le secteur santé et bien-être a une particularité qui le distingue des autres entreprises : le patient ne cherche pas seulement un service, il cherche quelqu'un en qui avoir confiance. Cette confiance se construit avant le premier rendez-vous, et aujourd'hui elle se construit principalement sur internet. Un site web professionnel n'est pas un luxe pour une clinique — c'est l'outil d'acquisition de patients le plus important qui soit."}
          </p>

          <h2 className="text-2xl font-bold text-primary-600">
            {isEn
              ? "Why your clinic needs a professional website in 2026"
              : "Pourquoi votre clinique a besoin d'un site web professionnel en 2026"}
          </h2>
          <p>
            {isEn
              ? "More than 70% of people search for healthcare professionals on Google before deciding. In that moment of searching, they compare several options: they read reviews, look at photos, check whether the specialty matches what they need and assess whether the website conveys seriousness and professionalism."
              : "Plus de 70 % des personnes recherchent des professionnels de santé sur Google avant de se décider. Dans ce moment de recherche, elles comparent plusieurs options : elles lisent les avis, regardent les photos, vérifient si la spécialité correspond à leurs besoins et évaluent si le site inspire sérieux et professionnalisme."}
          </p>
          <p>
            {isEn
              ? "A slow, outdated or uninformative website works in the opposite direction: it generates distrust and causes the potential patient to move on to the next option. Conversely, a well-structured website with photos of the team and centre, clear descriptions of treatments and a visible appointment form converts visits into initial consultations."
              : "Un site lent, obsolète ou peu informatif produit l'effet inverse : il génère de la méfiance et pousse le patient potentiel vers l'option suivante. En revanche, un site bien structuré, avec des photos de l'équipe et du centre, des descriptions claires des traitements et un formulaire de prise de rendez-vous visible, convertit les visites en premières consultations."}
          </p>
          <p>
            {isEn
              ? "Furthermore, Google rewards centres that have an active, well-optimised website with better local positioning. Appearing in the local pack of three results that Google Maps shows at the top of searches can double the calls and contact forms received."
              : "De plus, Google récompense avec un meilleur positionnement local les centres qui ont un site actif et bien optimisé. Apparaître dans le pack local de trois résultats que Google Maps affiche en haut des recherches peut doubler les appels et formulaires de contact reçus."}
          </p>

          <h2 className="text-2xl font-bold text-primary-600">
            {isEn
              ? "What a clinic's website must include"
              : "Ce que doit inclure le site web d'une clinique"}
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>{isEn ? "Specialty and service pages:" : "Pages de spécialités et services :"}</strong>{" "}
              {isEn
                ? "each treatment or specialty with its own section, well explained and with local keywords. Physiotherapy, psychology, nutrition, medical aesthetics, osteopathy… each must have its own space."
                : "chaque traitement ou spécialité avec sa propre section, bien expliquée et avec des mots-clés locaux. Kinésithérapie, psychologie, nutrition, esthétique médicale, ostéopathie… chacun doit avoir son espace."}
            </li>
            <li>
              <strong>{isEn ? "Professional team:" : "Équipe professionnelle :"}</strong>{" "}
              {isEn
                ? "photo, name, training and specialisation of each professional. The patient wants to know who will be treating them before booking an appointment."
                : "photo, nom, formation et spécialisation de chaque professionnel. Le patient veut savoir qui va le prendre en charge avant de prendre rendez-vous."}
            </li>
            <li>
              <strong>{isEn ? "Reviews and testimonials:" : "Avis et témoignages :"}</strong>{" "}
              {isEn
                ? "integration with Google Reviews or personal testimonials. Social proof is the most powerful trust factor in the health sector."
                : "intégration avec Google Avis ou témoignages propres. La preuve sociale est le facteur de confiance le plus puissant dans le secteur de la santé."}
            </li>
            <li>
              <strong>{isEn ? "Appointment form or online booking:" : "Formulaire de rendez-vous ou réservation en ligne :"}</strong>{" "}
              {isEn
                ? "visible on all pages, optimised for mobile. 65% of local health searches are done from smartphones."
                : "visible sur toutes les pages, optimisé pour le mobile. 65 % des recherches de santé locales sont effectuées depuis un smartphone."}
            </li>
            <li>
              <strong>{isEn ? "Blog or content section:" : "Blog ou section de contenus :"}</strong>{" "}
              {isEn
                ? "articles about health, prevention and treatments position the clinic as a reference and continuously attract organic traffic."
                : "des articles sur la santé, la prévention et les traitements positionnent la clinique comme référence et attirent du trafic organique en continu."}
            </li>
            <li>
              <strong>{isEn ? "Contact details and location:" : "Coordonnées et localisation :"}</strong>{" "}
              {isEn
                ? "phone, address, Google map and updated opening hours in a visible place, without the user having to search for them."
                : "téléphone, adresse, carte Google et horaires mis à jour dans un endroit visible, sans que l'utilisateur ait à les chercher."}
            </li>
          </ul>

          <h2 className="text-2xl font-bold text-primary-600">
            {isEn
              ? "Local SEO for clinics: how to appear first in your area"
              : "Référencement local pour cliniques : comment apparaître en premier dans votre zone"}
          </h2>
          <p>
            {isEn
              ? "Local SEO is the strategy that allows your clinic to appear when someone searches for \"physiotherapist in [city]\" or \"psychologist near me\". It is worked on two complementary fronts:"
              : "Le référencement local est la stratégie qui permet à votre clinique d'apparaître quand quelqu'un cherche « kinésithérapeute à [ville] » ou « psychologue près de chez moi ». Il se travaille sur deux fronts complémentaires :"}
          </p>
          <p>
            <strong>{isEn ? "Google Business Profile:" : "Google Business Profile :"}</strong>{" "}
            {isEn
              ? "the Google Maps listing is your most visible showcase. It must have the correct category, optimised description, updated photos of the centre and team, real opening hours and responses to reviews. Clinics that actively respond to their reviews — even negative ones — generate more trust and better ranking."
              : "la fiche Google Maps est votre vitrine la plus visible. Elle doit avoir la catégorie correcte, une description optimisée, des photos mises à jour du centre et de l'équipe, des horaires réels et des réponses aux avis. Les cliniques qui répondent activement à leurs avis — même négatifs — génèrent plus de confiance et un meilleur positionnement."}
          </p>
          <p>
            <strong>{isEn ? "Website with local content:" : "Site web avec contenu local :"}</strong>{" "}
            {isEn
              ? "mentioning the city and neighbourhood in the main copy, having specific service pages for each specialty and publishing useful content for patients in the area are the keys to climbing positions in Google's organic results."
              : "mentionner la ville et le quartier dans les textes principaux, avoir des pages de service spécifiques pour chaque spécialité et publier du contenu utile pour les patients de la zone sont les clés pour progresser dans les résultats organiques de Google."}
          </p>

          <div className="bg-primary-50 rounded-xl p-6 border border-primary-100">
            <p className="font-semibold text-primary-700 mb-2">
              {isEn
                ? "Want a website that generates patients consistently?"
                : "Vous voulez un site web qui génère des patients de façon constante ?"}
            </p>
            <p className="text-gray-600 text-sm mb-4">
              {isEn
                ? "We design websites for clinics and health centres with local SEO, online booking and autonomous management from day one."
                : "Nous concevons des sites web pour les cliniques et centres de santé avec référencement local, réservation en ligne et gestion autonome dès le premier jour."}
            </p>
            <Link
              href={`/${lang}/contact/`}
              className="inline-block bg-accent-500 text-white px-6 py-2.5 rounded-full font-semibold text-sm hover:bg-accent-600 transition-colors"
            >
              {isEn ? "Request a free quote" : "Demander un devis gratuit"}
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
                ? "A website for your clinic that works while you see patients"
                : "Un site web pour votre clinique qui travaille pendant que vous soignez"}
            </h2>
            <p className="text-primary-200 mb-6">
              {isEn
                ? "Automatic patient acquisition, a fuller appointment book and a digital presence that inspires trust. No commissions or licence fees."
                : "Acquisition de patients en automatique, un agenda plus rempli et une présence digitale qui inspire confiance. Sans commissions ni licences."}
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
            <Link href={`/${lang}/web-design-dentists/`} className="text-accent-500 hover:underline">
              {isEn ? "Web design for dentists" : "Création web pour dentistes"}
            </Link>{" "}
            ·{" "}
            <Link href={`/${lang}/local-seo-for-service-businesses/`} className="text-accent-500 hover:underline">
              {isEn ? "Local SEO for service businesses" : "SEO local pour entreprises de services"}
            </Link>{" "}
            ·{" "}
            <Link href={`/${lang}/google-business-profile-management/`} className="text-accent-500 hover:underline">
              {isEn ? "Google Business Profile management" : "Gestion Google Business Profile"}
            </Link>
          </p>
        </div>

        <nav className="mt-12 pt-8 border-t border-gray-200">
          <Link href={`/${lang}/blog/`} className="text-accent-500 hover:text-accent-600 font-medium text-sm">
            {isEn ? "← Back to blog" : "← Retour au blog"}
          </Link>
        </nav>
      </article>
      <RelatedArticles currentSlug="web-design-clinics" category="Web Design" />
    </>
  );
}
