import { Breadcrumbs } from "@/components/Breadcrumbs";
import { BlogBanner } from "@/components/BlogBanner";
import { RelatedArticles } from "@/components/RelatedArticles";
import { alternatesFor } from "@/lib/i18n/routes";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const isEn = lang === "en";
  return {
    title: isEn
      ? "Chatbot for Clinics and Healthcare Centres: Appointments, FAQs and Healthcare Compliance"
      : "Chatbot pour cliniques et centres de santé : rendez-vous, questions fréquentes et conformité sanitaire",
    description: isEn
      ? "Clinics and healthcare centres receive hundreds of repetitive enquiries every day. A well-implemented chatbot can automate appointment management, answer FAQs and qualify patients, while complying with GDPR."
      : "Les cliniques et centres de santé reçoivent des centaines de demandes répétitives chaque jour. Un chatbot bien implémenté peut automatiser la gestion des rendez-vous, répondre aux questions fréquentes et qualifier les patients, en respectant le RGPD.",
    alternates: alternatesFor(`/${lang}/chatbot-for-clinics/`) ?? {
      canonical: `https://www.mktweb360.com/${lang}/chatbot-for-clinics/`,
    },
    openGraph: {
      title: isEn
        ? "Chatbot for Clinics and Healthcare Centres: Appointments, FAQs and Healthcare Compliance | Mkt Web 360"
        : "Chatbot pour cliniques et centres de santé : rendez-vous, questions fréquentes et conformité sanitaire | Mkt Web 360",
      description: isEn
        ? "Clinics and healthcare centres receive hundreds of repetitive enquiries every day. A well-implemented chatbot can automate appointment management, answer FAQs and qualify patients, while complying with GDPR."
        : "Les cliniques et centres de santé reçoivent des centaines de demandes répétitives chaque jour. Un chatbot bien implémenté peut automatiser la gestion des rendez-vous, répondre aux questions fréquentes et qualifier les patients, en respectant le RGPD.",
    },
  };
}

export default async function Page({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const isEn = lang === "en";

  const faqs = isEn
    ? [
        {
          q: "Can the chatbot give diagnoses?",
          a: "It should not. A clinic's chatbot is a management and service tool, not a diagnostic one. It can provide information about the symptoms a specialist treats, but clinical assessment always belongs to the healthcare professional.",
        },
        {
          q: "How are appointment cancellations handled?",
          a: "The chatbot can handle cancellations within the appropriate time window, usually 24–48 hours beforehand. Last-minute cancellations or special circumstances can be escalated to the team.",
        },
        {
          q: "Can the chatbot integrate with WhatsApp?",
          a: "Yes. Modern chatbot systems can operate both on the web and via the WhatsApp Business API. For clinics where patients already communicate by WhatsApp, this integration can be very valuable.",
        },
        {
          q: "What about minors?",
          a: "For minors, health data has additional protection under the GDPR. If the chatbot may come into contact with data relating to minors, parental or guardian consent and additional protective measures are required.",
        },
      ]
    : [
        {
          q: "Le chatbot peut-il donner des diagnostics ?",
          a: "Il ne doit pas le faire. Le chatbot d'une clinique est un outil de gestion et de service, non de diagnostic. Il peut fournir des informations sur les symptômes traités par un spécialiste, mais l'évaluation clinique appartient toujours au professionnel de santé.",
        },
        {
          q: "Comment les annulations de rendez-vous sont-elles gérées ?",
          a: "Le chatbot peut gérer les annulations dans le délai approprié, généralement 24 à 48 heures à l'avance. Les annulations de dernière minute ou les situations particulières peuvent être escaladées vers l'équipe.",
        },
        {
          q: "Le chatbot peut-il s'intégrer à WhatsApp ?",
          a: "Oui. Les systèmes de chatbot modernes peuvent fonctionner à la fois sur le web et via l'API WhatsApp Business. Pour les cliniques où les patients communiquent déjà par WhatsApp, cette intégration peut être très précieuse.",
        },
        {
          q: "Qu'en est-il des mineurs ?",
          a: "Pour les mineurs, les données de santé bénéficient d'une protection supplémentaire en vertu du RGPD. Si le chatbot peut entrer en contact avec des données concernant des mineurs, le consentement des parents ou tuteurs et des mesures de protection supplémentaires sont nécessaires.",
        },
      ];

  return (
    <>
      <div className="max-w-3xl mx-auto px-4 py-12">
        <Breadcrumbs
          crumbs={[
            { label: isEn ? "Home" : "Accueil", href: `/${lang}/` },
            { label: "Blog", href: `/${lang}/blog/` },
            { label: isEn ? "Chatbot for clinics" : "Chatbot pour cliniques" },
          ]}
        />

        <p className="text-sm text-accent-500 font-semibold mb-2">
          {isEn ? "Chatbots" : "Chatbots"}
        </p>

        <h1 className="text-4xl font-bold text-primary-600 mb-4 leading-tight">
          {isEn
            ? "Chatbot for Clinics and Healthcare Centres: Appointments, FAQs and Healthcare Compliance"
            : "Chatbot pour cliniques et centres de santé : rendez-vous, questions fréquentes et conformité sanitaire"}
        </h1>

        <p className="text-xl text-gray-500 mb-8 leading-relaxed">
          {isEn
            ? "Clinics and healthcare centres receive hundreds of repetitive enquiries every day: opening hours, appointments, prices, cancellations. A well-implemented chatbot automates appointment management, answers FAQs and qualifies patients while complying with the GDPR."
            : "Les cliniques et centres de santé reçoivent des centaines de demandes répétitives chaque jour : horaires, rendez-vous, tarifs, annulations. Un chatbot bien implémenté automatise la gestion des rendez-vous, répond aux questions fréquentes et qualifie les patients en respectant le RGPD."}
        </p>

        <p className="text-gray-600 mb-6 leading-relaxed">
          {isEn
            ? "The reception phone at a clinic rings constantly with the same questions asked again and again. Every call resolved with the same piece of information is time the team is not spending on the patient in front of them. That is where a chatbot changes day-to-day life at a clinic."
            : "Le téléphone de la réception d'une clinique sonne sans arrêt pour poser les mêmes questions encore et encore. Chaque appel résolu avec la même information est du temps que l'équipe ne consacre pas au patient devant elle. C'est là qu'un chatbot change le quotidien d'une clinique."}
        </p>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-primary-600 mb-4">
            {isEn
              ? "What a chatbot can automate in a clinic"
              : "Ce qu'un chatbot peut automatiser dans une clinique"}
          </h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {isEn
              ? "A chatbot can handle appointment management — booking, confirming, reminding and cancelling — answer frequently asked questions about opening hours, location, prices or treatments, and qualify patients before routing them to the right professional. All of this at any hour, even when the clinic is closed."
              : "Un chatbot peut se charger de la gestion des rendez-vous — réserver, confirmer, rappeler et annuler —, répondre aux questions fréquentes sur les horaires, la localisation, les tarifs ou les traitements, et qualifier les patients avant de les orienter vers le professionnel approprié. Tout cela à toute heure, même quand la clinique est fermée."}
          </p>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {isEn
              ? "In a typical scenario of around 40 calls per day, a large proportion are repetitive queries that require no clinical judgement. Automating them relieves reception staff and improves the patient experience, since they get an immediate answer. This complements well with strong local SEO to attract those patients to the website in the first place."
              : "Dans un scénario type d'environ 40 appels par jour, une grande proportion sont des demandes répétitives qui ne nécessitent aucun jugement clinique. Les automatiser soulage la réception et améliore l'expérience du patient, qui obtient une réponse immédiate. Cela se complète bien avec un bon SEO local pour attirer ces patients sur le site web en premier lieu."}
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-primary-600 mb-4">
            {isEn
              ? "Specific requirements for chatbots in the healthcare sector"
              : "Exigences spécifiques pour les chatbots dans le secteur de la santé"}
          </h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {isEn
              ? "The healthcare sector has a key requirement: health data is a special category under Article 9 of the GDPR. This implies reinforced security guarantees, an adequate legal basis and clear information to the patient about how their data is processed."
              : "Le secteur de la santé a une exigence clé : les données de santé sont une catégorie particulière en vertu de l'article 9 du RGPD. Cela implique des garanties de sécurité renforcées, une base juridique adéquate et une information claire au patient sur le traitement de ses données."}
          </p>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {isEn
              ? "In addition, there is a line that must not be crossed: the chatbot cannot give diagnoses. Its function is to manage and serve, not to make clinical assessments. It can provide information about the symptoms each specialist treats, but the assessment always belongs to the healthcare professional. For minors, the protection of health data is even greater."
              : "De plus, il y a une limite qui ne doit pas être franchie : le chatbot ne peut pas donner de diagnostics. Sa fonction est de gérer et de servir, non d'évaluer cliniquement. Il peut fournir des informations sur les symptômes traités par chaque spécialiste, mais l'évaluation appartient toujours au professionnel de santé. Pour les mineurs, la protection des données de santé est encore plus grande."}
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-primary-600 mb-4">
            {isEn
              ? "How to integrate the chatbot with clinic management software"
              : "Comment intégrer le chatbot avec le logiciel de gestion de la clinique"}
          </h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {isEn
              ? "For the chatbot to be genuinely useful, it needs to communicate with the management software the clinic already uses. Modern systems allow integration with platforms such as Doctolib, Doctoralia or equivalent booking systems, so that appointments managed by the bot are reflected directly in the centre's schedule."
              : "Pour que le chatbot soit vraiment utile, il doit communiquer avec le logiciel de gestion que la clinique utilise déjà. Les systèmes modernes permettent de s'intégrer avec des plateformes comme Doctolib, Doctoralia ou des systèmes de réservation équivalents, de sorte que les rendez-vous gérés par le bot se reflètent directement dans l'agenda du centre."}
          </p>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {isEn
              ? "This integration avoids double handling and scheduling errors. The patient books from the website or from WhatsApp and the appointment appears automatically in the centre's system, just as if reception had entered it. The same logic of digital coherence applies to dental practices and all healthcare websites."
              : "Cette intégration évite la double gestion et les erreurs d'agenda. Le patient réserve depuis le site web ou depuis WhatsApp et le rendez-vous apparaît automatiquement dans le système du centre, comme si la réception l'avait saisi. La même logique de cohérence numérique s'applique aux cabinets dentaires et à tous les sites web de santé."}
          </p>
        </section>

        <BlogBanner lang={lang} />

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-primary-600 mb-4">
            {isEn
              ? "ROI of a chatbot for a clinic: a practical calculation"
              : "ROI d'un chatbot pour une clinique : calcul pratique"}
          </h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {isEn
              ? "The calculation is usually favourable. In a dental clinic, a chatbot with an approximate cost of €199 per month can generate savings of close to €600 per month in staff time, by absorbing the repetitive queries and tasks that previously occupied reception."
              : "Le calcul est généralement favorable. Dans une clinique dentaire, un chatbot avec un coût approximatif de 199 euros par mois peut générer des économies proches de 600 euros par mois en temps de personnel, en absorbant les demandes et tâches répétitives qui occupaient auparavant la réception."}
          </p>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {isEn
              ? "Added to that direct saving are the appointments that are recovered because the patient can book outside telephone reception hours. A strong Google Business Profile also multiplies the number of patients who reach that chatbot, closing the loop between visibility and conversion."
              : "À cette économie directe s'ajoutent les rendez-vous récupérés parce que le patient peut réserver en dehors des heures d'accueil téléphonique. Un profil Google Business solide multiplie également le nombre de patients qui atteignent ce chatbot, bouclant la boucle entre visibilité et conversion."}
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
      <RelatedArticles currentSlug="chatbot-for-clinics" />
    </>
  );
}
