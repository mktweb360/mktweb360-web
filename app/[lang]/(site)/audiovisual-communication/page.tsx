import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ContactForm } from "@/components/ContactForm";
import { RelatedArticles } from "@/components/RelatedArticles";
import { alternatesFor } from "@/lib/i18n/routes";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const isEn = lang === "en";
  return {
    title: isEn
      ? "Audiovisual Communication for Businesses — Corporate Video & Video Marketing"
      : "Communication Audiovisuelle pour Entreprises — Vidéo Marketing",
    description: isEn
      ? "Corporate video production, reels, ads, animated presentations and photography for businesses. Audiovisual content that communicates, connects and converts."
      : "Production de vidéo d'entreprise, reels, spots publicitaires, présentations animées et photographie pour les entreprises. Des pièces audiovisuelles qui communiquent, connectent et convertissent.",
    alternates: alternatesFor(`/${lang}/audiovisual-communication/`) ?? {
      canonical: `https://www.mktweb360.com/${lang}/audiovisual-communication/`,
    },
    openGraph: {
      title: isEn
        ? "Audiovisual Communication for Businesses | Mkt Web 360"
        : "Communication Audiovisuelle pour Entreprises | Mkt Web 360",
      description: isEn
        ? "Corporate video, reels, advertising spots and professional photography for businesses that want to stand out."
        : "Vidéo d'entreprise, reels, spots publicitaires et photographie professionnelle pour les entreprises qui veulent se démarquer.",
    },
  };
}

export default async function Page({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const isEn = lang === "en";

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: isEn ? "Audiovisual Communication for Businesses" : "Communication Audiovisuelle pour Entreprises",
    provider: { "@type": "Organization", name: "Mkt Web 360 SLU", url: "https://www.mktweb360.com" },
    description: isEn
      ? "Production of corporate video, reels, advertising spots, animated presentations and professional photography for businesses."
      : "Production de vidéos d'entreprise, reels, spots publicitaires, présentations animées et photographie professionnelle pour les entreprises.",
    areaServed: isEn ? "Spain" : "Espagne",
    url: `https://www.mktweb360.com/${lang}/audiovisual-communication/`,
  };

  const TIPOS_PIEZAS = isEn
    ? [
        { icon: "🎬", title: "Corporate video", desc: "Present your company, team and values in a professional way. Ideal for your website, social media and commercial presentations." },
        { icon: "📱", title: "Reels and social media videos", desc: "Vertical content optimised for Instagram, TikTok and LinkedIn. Formats the algorithm prioritises and users consume." },
        { icon: "📺", title: "Advertising spots", desc: "Video content for YouTube Ads, Meta Ads and local television campaigns. Creativity focused on conversion." },
        { icon: "✨", title: "Animated presentations", desc: "Motion graphics and animated presentations for events, pitch decks and educational or sales content." },
        { icon: "📸", title: "Corporate photography", desc: "Professional photography sessions of team, products, facilities and company reports." },
        { icon: "🎙️", title: "Testimonials and case studies", desc: "Videos of satisfied clients that build trust and reduce purchase objections." },
      ]
    : [
        { icon: "🎬", title: "Vidéo d'entreprise", desc: "Présentez votre entreprise, votre équipe et vos valeurs de manière professionnelle. Idéal pour votre site web, les réseaux sociaux et les présentations commerciales." },
        { icon: "📱", title: "Reels et vidéos pour les réseaux", desc: "Contenu vertical optimisé pour Instagram, TikTok et LinkedIn. Des formats que l'algorithme priorise et que les utilisateurs consomment." },
        { icon: "📺", title: "Spots publicitaires", desc: "Pièces vidéo pour les campagnes YouTube Ads, Meta Ads et télévision locale. Créativité orientée vers la conversion." },
        { icon: "✨", title: "Présentations animées", desc: "Motion graphics et présentations animées pour des événements, pitch decks et contenu de formation ou de vente." },
        { icon: "📸", title: "Photographie d'entreprise", desc: "Sessions de photographie professionnelle d'équipe, de produits, d'installations et reportages d'entreprise." },
        { icon: "🎙️", title: "Témoignages et études de cas", desc: "Vidéos de clients satisfaits qui génèrent de la confiance et réduisent les objections d'achat." },
      ];

  const PROCESO = isEn
    ? [
        { num: "01", title: "Briefing", desc: "We meet to understand your business, audience, objectives and the message you want to convey." },
        { num: "02", title: "Script and storyboard", desc: "We develop the creative script and, where applicable, the visual storyboard to ensure alignment before shooting." },
        { num: "03", title: "Production", desc: "Shooting with professional equipment. We direct the production to get the best from your team and your facilities." },
        { num: "04", title: "Post-production", desc: "Editing, colour grading, music, voiceover, subtitles and graphics. All integrated with your brand's visual identity." },
        { num: "05", title: "Delivery and adaptation", desc: "Delivery of the final piece in all formats and sizes you need for each channel." },
      ]
    : [
        { num: "01", title: "Briefing", desc: "Nous nous réunissons pour comprendre votre entreprise, votre audience, vos objectifs et le message que vous souhaitez transmettre." },
        { num: "02", title: "Scénario et storyboard", desc: "Nous développons le scénario créatif et, le cas échéant, le storyboard visuel pour assurer l'alignement avant le tournage." },
        { num: "03", title: "Production", desc: "Tournage avec équipement professionnel. Nous dirigeons le tournage pour tirer le meilleur de votre équipe et de vos installations." },
        { num: "04", title: "Post-production", desc: "Montage, étalonnage des couleurs, musique, voix off, sous-titres et graphiques. Tout intégré à l'identité visuelle de votre marque." },
        { num: "05", title: "Livraison et adaptation", desc: "Livraison de la pièce finale dans tous les formats et tailles dont vous avez besoin pour chaque canal." },
      ];

  const FAQS = isEn
    ? [
        { q: "Do you have your own team or do you outsource production?", a: "We work with our own production team for projects in the Castilla-La Mancha and Madrid area, and with specialist collaborators in other provinces. In all cases, the creative direction, script and strategy are managed directly by us." },
        { q: "How long does it take to deliver a corporate video?", a: "The standard timeframe from briefing to delivery of the final video is 2 to 3 weeks. This includes the briefing meeting, script writing, shooting, editing and revisions. For more complex projects with animations or multiple shooting days, the timeline is agreed before we start." },
        { q: "What delivery formats do you include?", a: "We deliver the piece in all the formats needed for each channel: horizontal version for web and YouTube, vertical version for Instagram Reels and TikTok, square version for Instagram feed, and versions adapted to the specifications of each advertising platform." },
        { q: "Can we use the video in Google Ads or Meta Ads campaigns?", a: "Yes, and we recommend it. We produce pieces taking into account the technical and creative requirements of each advertising platform. If we also manage your Ads campaigns, we coordinate production with the advertising strategy to maximise the performance of each piece." },
      ]
    : [
        { q: "Avez-vous votre propre équipe ou sous-traitez-vous la production ?", a: "Nous travaillons avec notre propre équipe de production pour les projets dans la zone de Castilla-La Mancha et Madrid, et avec des collaborateurs spécialisés dans d'autres provinces. Dans tous les cas, la direction créative, le scénario et la stratégie sont gérés directement par nous." },
        { q: "Combien de temps faut-il pour livrer une vidéo d'entreprise ?", a: "Le délai standard du briefing à la livraison de la vidéo finale est de 2 à 3 semaines. Il comprend la réunion de briefing, la rédaction du scénario, le tournage, le montage et les révisions. Pour les projets plus complexes avec des animations ou plusieurs jours de tournage, le délai est ajusté avant de commencer." },
        { q: "Quels formats de livraison incluez-vous ?", a: "Nous livrons la pièce dans tous les formats nécessaires pour chaque canal : version horizontale pour le web et YouTube, version verticale pour Instagram Reels et TikTok, version carrée pour le feed Instagram, et versions adaptées aux spécifications de chaque plateforme publicitaire." },
        { q: "Peut-on utiliser la vidéo dans des campagnes Google Ads ou Meta Ads ?", a: "Oui, et nous le recommandons. Nous produisons les pièces en tenant compte des exigences techniques et créatives de chaque plateforme publicitaire. Si nous gérons également vos campagnes Ads, nous coordonnons la production avec la stratégie publicitaire pour maximiser les performances de chaque pièce." },
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

  const SECTORS = isEn
    ? [
        { sector: "Professional services", desc: "Corporate videos that convey trust and authority. Team presentations, client testimonials and work process videos." },
        { sector: "Clinics and healthcare", desc: "Presentation of facilities, medical team videos, treatment explanations and patient testimonials that reduce objections from new clients." },
        { sector: "Hospitality and tourism", desc: "Atmospheric establishment videos, product and experience reels, social media content that showcases the atmosphere and drives bookings." },
        { sector: "Ecommerce and retail", desc: "Product videos, unboxing, usage tutorials and advertising spots for Meta Ads and YouTube Ads campaigns that improve conversion rates." },
        { sector: "Education and academies", desc: "Presentation of the centre and methodology, classroom videos, student testimonials and recruitment spots for enrolment campaigns." },
        { sector: "Industry and B2B", desc: "Corporate videos for trade fairs and commercial presentations, documentation of production processes and pieces that build trust with business clients." },
      ]
    : [
        { sector: "Services professionnels", desc: "Vidéos d'entreprise qui transmettent confiance et autorité. Présentations de l'équipe, témoignages de clients et vidéos du processus de travail." },
        { sector: "Cliniques et santé", desc: "Présentation des installations, vidéos de l'équipe médicale, explication des traitements et témoignages de patients qui réduisent les objections des nouveaux clients." },
        { sector: "Hôtellerie et tourisme", desc: "Vidéos atmosphériques d'établissement, reels de produits et d'expériences, contenu pour les réseaux sociaux qui montre l'ambiance et génère des réservations." },
        { sector: "Ecommerce et commerce de détail", desc: "Vidéos de produits, unboxing, tutoriels d'utilisation et spots publicitaires pour les campagnes Meta Ads et YouTube Ads qui améliorent le taux de conversion." },
        { sector: "Formation et académies", desc: "Présentation du centre et de la méthodologie, vidéos de classe, témoignages d'élèves et spots de recrutement pour les campagnes de début d'année." },
        { sector: "Industrie et B2B", desc: "Vidéos d'entreprise pour les salons et présentations commerciales, documentation des processus de production et pièces qui génèrent confiance chez les clients professionnels." },
      ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <div className="max-w-4xl mx-auto px-4 py-12">
        <Breadcrumbs
          crumbs={[
            { label: isEn ? "Home" : "Accueil", href: `/${lang}/` },
            { label: isEn ? "Services" : "Services" },
            { label: isEn ? "Audiovisual Communication" : "Communication Audiovisuelle" },
          ]}
        />

        <h1 className="text-4xl font-bold text-primary-600 mb-4">
          {isEn
            ? "Audiovisual Communication — Visual content that works for your business"
            : "Communication Audiovisuelle — Du contenu visuel qui travaille pour votre entreprise"}
        </h1>
        <p className="text-xl text-gray-600 mb-8 leading-relaxed">
          {isEn
            ? "Video and image are the language of today's digital marketing. We produce professional audiovisual content that communicates your value proposition, builds trust and converts visitors into clients."
            : "La vidéo et l'image sont le langage du marketing digital actuel. Nous produisons des pièces audiovisuelles professionnelles qui communiquent votre proposition de valeur, génèrent de la confiance et convertissent les visiteurs en clients."}
        </p>

        {/* Why video matters */}
        <section className="bg-primary-50 rounded-2xl p-8 mb-12">
          <h2 className="text-2xl font-bold text-primary-600 mb-4">
            {isEn
              ? "Why video matters in your digital strategy"
              : "Pourquoi la vidéo est importante dans votre stratégie digitale"}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-4">
            {[
              {
                stat: "82%",
                labelEn: "of global internet traffic is video",
                labelFr: "du trafic internet mondial est de la vidéo",
              },
              {
                stat: "6x",
                labelEn: "higher conversion probability with video on landing page",
                labelFr: "plus de probabilité de conversion avec une vidéo sur une page d'atterrissage",
              },
              {
                stat: "3x",
                labelEn: "more engagement on social media vs static images",
                labelFr: "plus d'engagement sur les réseaux sociaux par rapport aux images statiques",
              },
            ].map((item) => (
              <div key={item.stat} className="text-center">
                <p className="text-4xl font-bold text-accent-500 mb-1">{item.stat}</p>
                <p className="text-gray-700 text-sm">{isEn ? item.labelEn : item.labelFr}</p>
              </div>
            ))}
          </div>
          <p className="text-gray-700 leading-relaxed mt-4">
            {isEn
              ? "A company without professional audiovisual presence conveys distrust in a digital environment where the competition already has it. Video is not an extra — it is an essential component of any marketing strategy that works today."
              : "Une entreprise sans présence audiovisuelle professionnelle transmet de la méfiance dans un environnement numérique où la concurrence en dispose déjà. La vidéo n'est pas un supplément — c'est un composant essentiel de toute stratégie marketing qui fonctionne aujourd'hui."}
          </p>
        </section>

        {/* What we offer */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-primary-600 mb-6">
            {isEn ? "What we offer" : "Ce que nous offrons"}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {TIPOS_PIEZAS.map((item) => (
              <div key={item.title} className="flex gap-4 p-4 border border-gray-200 rounded-xl">
                <span className="text-3xl shrink-0">{item.icon}</span>
                <div>
                  <h3 className="font-semibold text-primary-700 mb-1">{item.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Process */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-primary-600 mb-6">
            {isEn ? "Our production process" : "Notre processus de production"}
          </h2>
          <div className="space-y-4">
            {PROCESO.map((paso) => (
              <div key={paso.num} className="flex gap-4 p-4 border border-gray-200 rounded-xl">
                <span className="text-accent-500 font-bold text-2xl shrink-0 w-10">{paso.num}</span>
                <div>
                  <h3 className="font-semibold text-primary-700 mb-1">{paso.title}</h3>
                  <p className="text-gray-600 text-sm">{paso.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Why quality matters */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-primary-600 mb-6">
            {isEn
              ? "Why audiovisual quality defines how your client perceives you"
              : "Pourquoi la qualité audiovisuelle définit la façon dont votre client vous perçoit"}
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            {isEn
              ? "Corporate video is not a luxury reserved for large companies. It is the tool that most quickly communicates who you are, what you do and why to trust you — in less than 90 seconds and without the user having to read anything. In an environment where attention is the scarcest resource, video is the format that is most consumed, most remembered and most shared."
              : "La vidéo d'entreprise n'est pas un luxe réservé aux grandes entreprises. C'est l'outil qui communique le plus rapidement qui vous êtes, ce que vous faites et pourquoi vous faire confiance — en moins de 90 secondes et sans que l'utilisateur ait besoin de lire quoi que ce soit. Dans un environnement où l'attention est la ressource la plus rare, la vidéo est le format le plus consommé, le plus mémorisé et le plus partagé."}
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            {isEn
              ? "The problem is that a poorly produced video has the opposite effect: it conveys a lack of professionalism and generates distrust. The difference between a video shot on a phone without criteria and a piece produced with a script, lighting, editing and music is not just aesthetic — it is the difference between a client who trusts and one who keeps looking."
              : "Le problème est qu'une vidéo mal produite a l'effet inverse : elle transmet un manque de professionnalisme et génère de la méfiance. La différence entre une vidéo tournée avec un téléphone sans critère et une pièce produite avec un scénario, un éclairage, un montage et de la musique n'est pas seulement esthétique — c'est la différence entre un client qui fait confiance et un qui continue à chercher."}
          </p>
          <p className="text-gray-700 leading-relaxed">
            {isEn
              ? "At Mkt Web 360 we integrate audiovisual communication with the digital marketing strategy. Every piece we produce has a concrete objective — positioning you on YouTube, improving your landing page conversion, building trust on social media or strengthening your commercial proposition — and is designed to achieve it."
              : "Chez Mkt Web 360, nous intégrons la communication audiovisuelle à la stratégie de marketing digital. Chaque pièce que nous produisons a un objectif concret — vous positionner sur YouTube, améliorer la conversion de votre page d'atterrissage, générer confiance sur les réseaux sociaux ou renforcer votre proposition commerciale — et est conçue pour l'atteindre."}
          </p>
        </section>

        {/* Sectors */}
        <section className="mb-12 bg-gray-50 rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-primary-600 mb-6">
            {isEn
              ? "What type of company do we produce audiovisual content for?"
              : "Pour quel type d'entreprise produisons-nous du contenu audiovisuel ?"}
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            {isEn
              ? "We produce audiovisual content for companies in all sectors. Some of the most common cases:"
              : "Nous produisons du contenu audiovisuel pour des entreprises de tous secteurs. Voici quelques-uns des cas les plus courants :"}
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {SECTORS.map((s) => (
              <div key={s.sector} className="bg-white rounded-xl p-4 border border-gray-100">
                <p className="font-bold text-primary-700 text-sm mb-1">{s.sector}</p>
                <p className="text-gray-600 text-xs leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* FAQs */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-primary-600 mb-8">
            {isEn
              ? "Frequently asked questions about audiovisual production"
              : "Questions fréquentes sur la production audiovisuelle"}
          </h2>
          <div className="space-y-4">
            {FAQS.map((faq) => (
              <div key={faq.q} className="bg-gray-50 border border-gray-100 rounded-2xl p-6">
                <h3 className="font-bold text-primary-700 mb-2">{faq.q}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="bg-primary-600 text-white rounded-2xl p-8">
          <h2 className="text-2xl font-bold mb-4">
            {isEn ? "Request a quote" : "Demander un devis"}
          </h2>
          <p className="text-primary-200 mb-6">
            {isEn
              ? "Tell us what you need and we will prepare a no-obligation proposal. Every piece is unique and the budget adapts to your project."
              : "Dites-nous ce dont vous avez besoin et nous préparerons une proposition sans engagement. Chaque pièce est unique et le budget s'adapte à votre projet."}
          </p>
          <div className="bg-white rounded-xl p-6">
            <ContactForm lang={lang} />
          </div>
        </section>
      </div>
      <RelatedArticles category="Estrategia" />
    </>
  );
}
