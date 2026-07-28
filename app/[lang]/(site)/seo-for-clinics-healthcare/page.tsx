import { Breadcrumbs } from "@/components/Breadcrumbs";
import { BlogBanner } from "@/components/BlogBanner";
import { alternatesFor } from "@/lib/i18n/routes";
import Link from "next/link";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const isEn = lang === "en";
  return {
    title: isEn
      ? "SEO for Clinics and Healthcare Centres: How to Attract Patients on Google"
      : "SEO pour les cliniques et centres de santé : comment attirer des patients sur Google",
    description: isEn
      ? "74% of patients search Google before calling a clinic. Specific SEO for dental clinics, physiotherapy and healthcare centres. Attract more patients from the first month."
      : "74 % des patients cherchent sur Google avant d'appeler une clinique. SEO spécifique pour les cliniques dentaires, la kinésithérapie et les centres de santé. Attirez plus de patients dès le premier mois.",
    alternates: alternatesFor(`/${lang}/seo-for-clinics-healthcare/`) ?? {
      canonical: `https://www.mktweb360.com/${lang}/seo-for-clinics-healthcare/`,
    },
    openGraph: {
      title: isEn
        ? "SEO for Clinics and Healthcare Centres: How to Attract Patients on Google | Mkt Web 360"
        : "SEO pour les cliniques et centres de santé : comment attirer des patients sur Google | Mkt Web 360",
      description: isEn
        ? "74% of patients search Google before calling a clinic. Specific SEO for dental clinics, physiotherapy and healthcare centres."
        : "74 % des patients cherchent sur Google avant d'appeler une clinique. SEO spécifique pour les cliniques dentaires, la kinésithérapie et les centres de santé.",
    },
  };
}

export default async function Page({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const isEn = lang === "en";

  const faqs = [
    {
      q: isEn
        ? "Why is SEO for a clinic different from other businesses?"
        : "Pourquoi le SEO d'une clinique est-il différent des autres entreprises ?",
      a: isEn
        ? "Because health is a YMYL (Your Money or Your Life) sector for Google: decisions affect people's wellbeing, so the search engine demands more authority and trustworthiness signals (E-E-A-T). A clinic must demonstrate experience, medical specialisation and trust more explicitly than a conventional business."
        : "Parce que la santé est un secteur YMYL (Your Money or Your Life) pour Google : les décisions affectent le bien-être des personnes, donc le moteur de recherche exige plus de signaux d'autorité et de fiabilité (E-E-A-T). Une clinique doit démontrer son expérience, sa spécialisation médicale et sa fiabilité de façon plus explicite qu'une entreprise conventionnelle.",
    },
    {
      q: isEn
        ? "How long does it take for a clinic to notice results with SEO?"
        : "Combien de temps faut-il à une clinique pour voir des résultats avec le SEO ?",
      a: isEn
        ? "With a well-optimised Google Business Profile, local impact is usually visible in 4 to 8 weeks. Organic web ranking for competitive searches takes longer, normally between 4 and 8 months, depending on competition in the area and the initial state."
        : "Avec une fiche Google Business Profile bien optimisée, l'impact local est généralement visible en 4 à 8 semaines. Le positionnement organique du site pour des recherches concurrentielles prend plus de temps, normalement entre 4 et 8 mois, selon la concurrence dans la zone et l'état initial.",
    },
    {
      q: isEn
        ? "Is Google Business Profile essential for a clinic?"
        : "Google Business Profile est-il indispensable pour une clinique ?",
      a: isEn
        ? "Yes. Around 80% of patients choose between clinics in the Local Pack (the block of three listings with a map) before reaching organic results. Without an optimised profile with reviews, photos, services and hours, a clinic is practically invisible in local search."
        : "Oui. Environ 80 % des patients choisissent entre les cliniques du Local Pack (le bloc de trois fiches avec carte) avant d'atteindre les résultats organiques. Sans une fiche optimisée avec des avis, photos, services et horaires, une clinique est pratiquement invisible pour la recherche locale.",
    },
    {
      q: isEn
        ? "Do reviews influence a clinic's ranking?"
        : "Les avis influencent-ils le positionnement d'une clinique ?",
      a: isEn
        ? "Very much so. They are a top-tier local ranking factor and, moreover, the main trust driver before the first call. A consistent flow of real, well-managed and responded-to reviews improves both visibility and conversion."
        : "Énormément. Ce sont un facteur de classement local de premier ordre et, de plus, le principal moteur de confiance avant le premier appel. Un flux constant d'avis réels, bien gérés et auxquels on répond, améliore à la fois la visibilité et la conversion.",
    },
    {
      q: isEn
        ? "Is having a blog on a clinic's website useful?"
        : "Est-il utile d'avoir un blog sur le site web d'une clinique ?",
      a: isEn
        ? "Yes, if done well. A blog that answers patients' real questions reinforces topical authority and captures informational searches that later become patients. The common mistake is publishing generic content or content without medical expertise, which adds value for neither Google nor the patient."
        : "Oui, si c'est bien fait. Un blog qui répond aux vraies questions des patients renforce l'autorité thématique et capte des recherches informatives qui se transforment ensuite en patients. L'erreur fréquente est de publier du contenu générique ou sans expertise médicale, qui n'apporte rien ni à Google ni au patient.",
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
                ? "SEO for clinics and healthcare centres"
                : "SEO pour les cliniques et centres de santé",
            },
          ]}
        />

        <p className="text-sm text-accent-500 font-semibold mb-2">
          {isEn ? "SEO" : "SEO"}
        </p>
        <h1 className="text-4xl font-bold text-primary-600 mb-4 leading-tight">
          {isEn
            ? "SEO for clinics and healthcare centres: how to attract patients on Google"
            : "SEO pour les cliniques et centres de santé : comment attirer des patients sur Google"}
        </h1>
        <p className="text-xl text-gray-500 mb-8 leading-relaxed">
          {isEn
            ? "74% of patients search Google before calling a clinic. If your centre does not appear when someone searches for your speciality in your area, that patient ends up at the practice next door. Healthcare SEO has its own rules, and it is worth knowing them."
            : "74 % des patients cherchent sur Google avant d'appeler une clinique. Si votre centre n'apparaît pas quand quelqu'un cherche votre spécialité dans votre zone, ce patient finit dans le cabinet d'à côté. Le SEO médical a ses propres règles, et il vaut la peine de les connaître."}
        </p>

        <section className="mb-10">
          <p className="text-gray-600 mb-4 leading-relaxed">
            {isEn
              ? "Attracting patients no longer depends on word of mouth or a sign on the facade. According to RankTop (2026), 74% of patients consult Google before deciding which clinic to call. And most do not go beyond the first results. For a dental clinic, a physiotherapy centre or a psychology practice, being visible at that moment determines much of the month's appointments diary."
              : "Attirer des patients ne dépend plus du bouche-à-oreille ni de l'enseigne en facade. Selon RankTop (2026), 74 % des patients consultent Google avant de décider quelle clinique appeler. Et la plupart ne dépassent pas les premiers résultats. Pour une clinique dentaire, un centre de kinésithérapie ou un cabinet de psychologie, être visible à ce moment décide d'une bonne partie de l'agenda du mois."}
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-primary-600 mb-4">
            {isEn
              ? "Why clinic SEO is different"
              : "Pourquoi le SEO des cliniques est différent"}
          </h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {isEn
              ? "Health is, for Google, a YMYL sector — Your Money or Your Life: content that can affect a person's wellbeing or important decisions. In these topics the search engine raises the bar and demands more E-E-A-T signals (experience, expertise, authority and trustworthiness). A clinic does not just compete for keywords: it competes to demonstrate that it is a trusted medical source. This means team information, qualifications, clear specialities and rigorous content."
              : "La santé est, pour Google, un secteur YMYL — Your Money or Your Life : des contenus qui peuvent affecter le bien-être d'une personne ou ses décisions importantes. Dans ces thématiques, le moteur de recherche élève la barre et exige plus de signaux E-E-A-T (expérience, expertise, autorité et fiabilité). Une clinique ne rivalise pas seulement pour des mots-clés : elle rivalise pour démontrer qu'elle est une source médicale de confiance. Cela signifie des informations sur l'équipe, les qualifications, des spécialités claires et un contenu rigoureux."}
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-primary-600 mb-4">
            {isEn
              ? "The triple intent of the patient"
              : "La triple intention du patient"}
          </h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {isEn
              ? "Those who search for health on Google are not always looking for the same thing. There is an informational intent ('why does my jaw hurt when chewing'), a local intent ('dentist near me open today') and a transactional intent ('book appointment dental implant London'). An effective healthcare SEO strategy covers all three: content that resolves doubts, local presence that captures proximity and service pages that convert the search into an appointment. Attending to only one of them leaves patients behind."
              : "Ceux qui cherchent de la santé sur Google ne cherchent pas toujours la même chose. Il y a une intention informationnelle ('pourquoi ma mâchoire fait-elle mal en mastiquant'), une intention locale ('dentiste près de chez moi ouvert aujourd'hui') et une intention transactionnelle ('prendre rendez-vous implant dentaire Paris'). Une stratégie SEO médical efficace couvre les trois : contenu qui résout les doutes, présence locale qui capte la proximité et pages de service qui convertissent la recherche en rendez-vous. S'occuper seulement de l'une d'elles laisse des patients en chemin."}
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-primary-600 mb-4">
            {isEn
              ? "Google Business Profile: the main asset"
              : "Google Business Profile : l'actif principal"}
          </h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {isEn
              ? "For a clinic, the Google profile is even more important than the website. According to Updent (2026), around 80% of patients choose between clinics in the Local Pack — the block of three listings with a map — before reaching organic results. That is why optimising your Google Business Profile with correct categories, services, real photos, opening hours and a consistent flow of reviews is the most profitable patient acquisition lever a healthcare centre has."
              : "Pour une clinique, la fiche Google est encore plus importante que le site web. Selon Updent (2026), environ 80 % des patients choisissent entre les cliniques du Local Pack — le bloc de trois fiches avec carte — avant d'atteindre les résultats organiques. C'est pourquoi optimiser votre fiche Google Business Profile avec les bonnes catégories, services, photos réelles, horaires et un flux constant d'avis est le levier d'acquisition de patients le plus rentable qu'un centre de santé possède."}
          </p>
        </section>

        <div className="bg-primary-50 rounded-xl p-6 border border-primary-100 mb-10">
          <p className="font-semibold text-primary-700 mb-2">
            {isEn
              ? "Does your clinic appear when people search for your speciality in your area?"
              : "Votre clinique apparaît-elle quand on cherche votre spécialité dans votre zone ?"}
          </p>
          <p className="text-gray-600 text-sm mb-4">
            {isEn
              ? "We analyse your local visibility, your Google profile and your website, and tell you what is missing to attract more patients."
              : "Nous analysons votre visibilité locale, votre fiche Google et votre site web, et vous indiquons ce qui manque pour attirer plus de patients."}
          </p>
          <Link
            href={`/${lang}/local-seo/`}
            className="inline-block bg-accent-500 text-white px-6 py-2.5 rounded-full font-semibold text-sm hover:bg-accent-600 transition-colors"
          >
            {isEn
              ? "See local SEO for clinics"
              : "Voir le SEO local pour cliniques"}
          </Link>
        </div>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-primary-600 mb-4">
            {isEn
              ? "The searches that generate real patients"
              : "Les recherches qui génèrent de vrais patients"}
          </h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {isEn
              ? "Not all visits are worth the same. Searches with local and transactional intent — 'dental clinic [city]', 'emergency physiotherapy [neighbourhood]', 'first psychology consultation [area]' — are those that fill the appointments diary. The work consists of identifying these queries for each speciality and area, and building pages that answer them clearly: what you offer, for whom, with what guarantees and how to book an appointment. A clinic with several specialities needs a page per service, not a single generic page."
              : "Toutes les visites ne se valent pas. Les recherches avec une intention locale et transactionnelle — 'clinique dentaire [ville]', 'urgences kinésithérapie [quartier]', 'première consultation psychologie [zone]' — sont celles qui remplissent l'agenda. Le travail consiste à identifier ces requêtes pour chaque spécialité et zone, et à construire des pages qui y répondent clairement : ce que vous proposez, pour qui, avec quelles garanties et comment prendre rendez-vous. Une clinique avec plusieurs spécialités a besoin d'une page par service, pas d'une seule page générique."}
          </p>
        </section>

        <BlogBanner lang={lang} />

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-primary-600 mb-4">
            {isEn
              ? "Common mistakes in a clinic's blog"
              : "Erreurs fréquentes dans le blog d'une clinique"}
          </h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {isEn
              ? "A medical blog misunderstood subtracts rather than adds. The most common mistakes: copying generic content from other websites (Google penalises lack of originality, even more so in health), publishing without professional medical criteria, or writing for the search engine and not for the patient. Good healthcare content answers a real doubt with rigour, conveys trust and links naturally to the corresponding service. Quality and authority above quantity."
              : "Un blog médical mal compris soustrait plutôt qu'il n'ajoute. Les erreurs les plus courantes : copier du contenu générique d'autres sites web (Google pénalise le manque d'originalité, encore plus en santé), publier sans critère professionnel médical, ou rédiger pour le moteur de recherche et non pour le patient. Un bon contenu médical répond à un doute réel avec rigueur, transmet de la confiance et lie naturellement vers le service correspondant. Qualité et autorité au-dessus de la quantité."}
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-primary-600 mb-4">
            {isEn
              ? "How long before you notice results"
              : "Combien de temps avant de voir des résultats"}
          </h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {isEn
              ? "The good news for clinics is that the local part delivers results quickly. A well-optimised Google Business Profile typically has a visible impact in 4 to 8 weeks. Organic web ranking for competitive terms is slower — 4 to 8 months — but more stable and defensible over time. By combining both, a clinic can start attracting patients from the first month while building a solid foundation in the medium term."
              : "La bonne nouvelle pour les cliniques est que la partie locale donne des résultats rapidement. Une fiche Google Business Profile bien optimisée a généralement un impact visible en 4 à 8 semaines. Le positionnement organique du site pour des termes compétitifs est plus lent — de 4 à 8 mois — mais plus stable et défendable dans le temps. En combinant les deux, une clinique peut commencer à attirer des patients dès le premier mois tout en construisant une base solide à moyen terme."}
          </p>
        </section>

        <div className="bg-primary-600 text-white rounded-2xl p-8 mb-10 text-center">
          <h2 className="text-2xl font-bold mb-3">
            {isEn
              ? "Fill your clinic's diary with patients from your area"
              : "Remplissez l'agenda de votre clinique avec des patients de votre zone"}
          </h2>
          <p className="text-primary-200 mb-6">
            {isEn
              ? "We work healthcare SEO with its own rules: medical authority, optimised Google profile and pages that convert searches into appointments."
              : "Nous travaillons le SEO médical avec ses propres règles : autorité médicale, fiche Google optimisée et pages qui convertissent les recherches en rendez-vous."}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href={`/${lang}/contact/`}
              className="bg-accent-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-accent-600 transition-colors"
            >
              {isEn
                ? "Request a diagnosis for your clinic"
                : "Demander un diagnostic pour votre clinique"}
            </Link>
            <Link
              href={`/${lang}/google-business-profile/`}
              className="border-2 border-white text-white px-6 py-3 rounded-full font-semibold hover:bg-white/10 transition-colors"
            >
              {isEn
                ? "See Google Business Profile"
                : "Voir Google Business Profile"}
            </Link>
          </div>
        </div>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-primary-600 mb-4">
            {isEn
              ? "Frequently asked questions about SEO for clinics"
              : "Questions fréquentes sur le SEO pour les cliniques"}
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
            href={`/${lang}/local-seo/`}
            className="text-accent-500 hover:underline"
          >
            {isEn ? "Local SEO" : "SEO Local"}
          </Link>{" "}
          ·{" "}
          <Link
            href={`/${lang}/google-business-profile/`}
            className="text-accent-500 hover:underline"
          >
            {isEn ? "Google Business Profile" : "Google Business Profile"}
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
