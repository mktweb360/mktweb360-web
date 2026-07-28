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
      ? "Case Studies in Digital Marketing and Web Design"
      : "Études de Cas en Marketing Digital et Design Web",
    description: isEn
      ? "Real projects and concrete results. Mkt Web 360 case studies in SEO, web design and digital marketing for businesses across different sectors."
      : "Projets réels et résultats concrets. Études de cas de Mkt Web 360 en SEO, design web et marketing digital pour des entreprises de différents secteurs.",
    alternates: alternatesFor(`/${lang}/case-studies/`) ?? {
      canonical: `https://www.mktweb360.com/${lang}/case-studies/`,
    },
    openGraph: {
      title: isEn
        ? "Case Studies and Projects | Mkt Web 360"
        : "Études de Cas et Projets | Mkt Web 360",
      description: isEn
        ? "Discover how we have helped real businesses improve their digital presence and achieve measurable results."
        : "Découvrez comment nous avons aidé des entreprises réelles à améliorer leur présence numérique et à obtenir des résultats mesurables.",
    },
  };
}

const CASES = [
  {
    client: "Domer Servicios Asistenciales",
    sectorEn: "Elderly care services",
    sectorFr: "Services d'aide aux personnes âgées",
    needEn: "Improve online visibility and attract new clients in a sector with high local demand but little digital presence among competitors.",
    needFr: "Améliorer la visibilité en ligne et attirer de nouveaux clients dans un secteur à forte demande locale mais avec peu de présence numérique chez les concurrents.",
    resultEn: "Significant improvement in organic rankings for local searches. The company now appears in top positions for searches in their area, increasing inbound enquiries.",
    resultFr: "Amélioration significative du positionnement organique dans les recherches locales. L'entreprise apparaît désormais en premières positions pour les recherches de sa zone, augmentant les demandes entrantes.",
    services: ["SEO", "Web Design"],
  },
  {
    client: "Metalher SL",
    sectorEn: "Metallurgical industry",
    sectorFr: "Industrie métallurgique",
    needEn: "Create a professional digital presence that would convey trust to B2B clients and generate qualified commercial contacts.",
    needFr: "Créer une présence numérique professionnelle qui transmettrait confiance aux clients B2B et générerait des contacts commerciaux qualifiés.",
    resultEn: "Professional corporate website reflecting the quality of the company's work, with technical optimisation facilitating positioning in B2B searches in the metallurgical sector.",
    resultFr: "Site web d'entreprise professionnel reflétant la qualité du travail de l'entreprise, avec une optimisation technique facilitant le positionnement dans les recherches B2B du secteur métallurgique.",
    services: ["Web Design", "Technical SEO"],
  },
  {
    client: "Spirit White Siberian Husky",
    sectorEn: "Specialised dog breeding",
    sectorFr: "Élevage canin spécialisé",
    needEn: "Stand out in a very specific niche and achieve online visibility to attract qualified buyers from across Spain.",
    needFr: "Se démarquer dans un créneau très spécifique et obtenir une visibilité en ligne pour attirer des acheteurs qualifiés de toute l'Espagne.",
    resultEn: "Consolidated positioning in specific niche searches. A quality website conveying the breeder's specialisation and professionalism, with content attracting high-intent buyers.",
    resultFr: "Positionnement consolidé dans les recherches de niche spécifique. Un site de qualité qui transmet la spécialisation et le sérieux de l'éleveur, avec du contenu attirant des acheteurs à haute intention.",
    services: ["Web Design", "SEO", "Content"],
  },
];

export default async function Page({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const isEn = lang === "en";

  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: isEn ? "Case Studies — Mkt Web 360" : "Études de Cas — Mkt Web 360",
    description: isEn
      ? "Real digital marketing projects carried out by Mkt Web 360 for businesses across different sectors."
      : "Projets réels de marketing digital réalisés par Mkt Web 360 pour des entreprises de différents secteurs.",
    url: `https://www.mktweb360.com/${lang}/case-studies/`,
    itemListElement: CASES.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.client,
      description: isEn ? c.resultEn : c.resultFr,
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }} />

      <div className="max-w-4xl mx-auto px-4 py-12">
        <Breadcrumbs
          crumbs={[
            { label: isEn ? "Home" : "Accueil", href: `/${lang}/` },
            { label: isEn ? "Case Studies" : "Études de cas" },
          ]}
        />

        <h1 className="text-4xl font-bold text-primary-600 mb-4">
          {isEn ? "Real projects, concrete results" : "Projets réels, résultats concrets"}
        </h1>
        <p className="text-xl text-gray-600 mb-8 leading-relaxed">
          {isEn
            ? "Every business has its own challenges and objectives. Here we share some of the projects we have worked on and the results we have achieved together."
            : "Chaque entreprise a ses propres défis et objectifs. Voici quelques-uns des projets sur lesquels nous avons travaillé et les résultats que nous avons obtenus ensemble."}
        </p>

        <div className="bg-gray-50 rounded-2xl p-8 mb-12">
          <h2 className="text-2xl font-bold text-primary-600 mb-4">
            {isEn ? "How we measure project success" : "Comment nous mesurons le succès d'un projet"}
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            {isEn
              ? "At Mkt Web 360 we do not work with vanity metrics. We do not measure project success by follower counts, impressions or generic traffic. We measure success by real business results: more inbound enquiries, more clients, more sales, better positioning in the searches that genuinely drive business."
              : "Chez Mkt Web 360, nous ne travaillons pas avec des métriques de vanité. Nous ne mesurons pas le succès d'un projet par le nombre d'abonnés, les impressions ou le trafic générique. Nous mesurons le succès par des résultats commerciaux réels : plus de demandes entrantes, plus de clients, plus de ventes, un meilleur positionnement dans les recherches qui génèrent vraiment du business."}
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            {isEn
              ? "Each project starts with an honest diagnosis of the current situation and clear, measurable objectives. We define what we are going to achieve, in what timeframe and how we will measure it. At the end of each month, the data speaks for itself."
              : "Chaque projet commence par un diagnostic honnête de la situation actuelle et des objectifs concrets et mesurables. Nous définissons ce que nous allons atteindre, dans quel délai et comment nous allons le mesurer. À la fin de chaque mois, les données parlent d'elles-mêmes."}
          </p>
          <p className="text-gray-700 leading-relaxed">
            {isEn
              ? "The cases shown below are real projects with real clients. We do not include exact metrics when the client prefers to keep them confidential, but we do describe the starting situation, the work carried out and the results obtained as precisely as possible."
              : "Les cas présentés ci-dessous sont des projets réels avec des clients réels. Nous n'incluons pas de métriques exactes lorsque le client préfère les garder confidentielles, mais nous décrivons la situation de départ, le travail réalisé et les résultats obtenus avec la plus grande précision possible."}
          </p>
        </div>

        {/* Cases */}
        <div className="space-y-10 mb-16">
          {CASES.map((caso, index) => (
            <article key={caso.client} className="border border-gray-200 rounded-2xl overflow-hidden">
              <div className="bg-primary-600 text-white p-6">
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div>
                    <p className="text-primary-300 text-sm font-medium mb-1">
                      {isEn ? "Case" : "Cas"} {String(index + 1).padStart(2, "0")}
                    </p>
                    <h2 className="text-2xl font-bold">{caso.client}</h2>
                    <p className="text-primary-200 mt-1">{isEn ? caso.sectorEn : caso.sectorFr}</p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {caso.services.map((s) => (
                      <span key={s} className="bg-accent-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-primary-700 mb-2 flex items-center gap-2">
                    <span className="text-accent-500">▸</span>{" "}
                    {isEn ? "Challenge" : "Défi"}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {isEn ? caso.needEn : caso.needFr}
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-primary-700 mb-2 flex items-center gap-2">
                    <span className="text-accent-500">✓</span>{" "}
                    {isEn ? "Result" : "Résultat"}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {isEn ? caso.resultEn : caso.resultFr}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Methodology */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-primary-600 mb-6">
            {isEn ? "Our way of working" : "Notre façon de travailler"}
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            {isEn
              ? "Regardless of sector or project size, all Mkt Web 360 projects follow the same process:"
              : "Quelle que soit le secteur ou la taille du projet, tous les projets de Mkt Web 360 suivent le même processus :"}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {(isEn
              ? [
                  { titulo: "Honest diagnosis", desc: "Before proposing anything, we analyse the real situation. If there are technical, content or strategy problems, we state them clearly with evidence." },
                  { titulo: "Measurable objectives", desc: "We define what we are going to achieve and how we will measure it. No empty promises, no vanity KPIs. Only metrics that translate into real business results." },
                  { titulo: "Straightforward execution", desc: "We implement what has been agreed with rigour and on the committed timelines. Clear communication, no surprises, with the client informed at every step." },
                  { titulo: "Monitoring and adjustment", desc: "The work does not end with delivery. We monitor results, identify improvement opportunities and adjust strategy every month." },
                ]
              : [
                  { titulo: "Diagnostic honnête", desc: "Avant de proposer quoi que ce soit, nous analysons la situation réelle. S'il y a des problèmes techniques, de contenu ou de stratégie, nous les énonçons clairement avec des preuves." },
                  { titulo: "Objectifs mesurables", desc: "Nous définissons ce que nous allons atteindre et comment nous allons le mesurer. Pas de promesses vides, pas de KPIs de vanité. Uniquement des métriques qui se traduisent en résultats commerciaux réels." },
                  { titulo: "Exécution sans détours", desc: "Nous mettons en œuvre ce qui a été convenu avec rigueur et dans les délais engagés. Communication claire, pas de surprises, avec le client informé à tout moment." },
                  { titulo: "Suivi et ajustement", desc: "Le travail ne se termine pas avec la livraison. Nous surveillons les résultats, identifions les opportunités d'amélioration et ajustons la stratégie chaque mois." },
                ]
            ).map((m) => (
              <div key={m.titulo} className="bg-primary-50 rounded-xl p-5 border border-primary-100">
                <p className="font-bold text-primary-700 mb-1">{m.titulo}</p>
                <p className="text-gray-600 text-sm leading-relaxed">{m.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="bg-primary-600 text-white rounded-2xl p-8 text-center mb-12">
          <h2 className="text-2xl font-bold mb-4">
            {isEn ? "Want results like these?" : "Vous voulez des résultats comme ceux-ci ?"}
          </h2>
          <p className="text-primary-200 mb-6 max-w-xl mx-auto">
            {isEn
              ? "Tell us about your project. We analyse your current situation and explain what we can achieve together, with clear timelines and objectives."
              : "Parlez-nous de votre projet. Nous analysons votre situation actuelle et vous expliquons ce que nous pouvons accomplir ensemble, avec des délais et des objectifs clairs."}
          </p>
          <Link
            href={`/${lang}/contact/`}
            className="inline-block bg-accent-500 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-accent-600 transition-colors"
          >
            {isEn ? "Tell us about your project" : "Parlez-nous de votre projet"}
          </Link>
        </section>

        <ContactForm lang={lang} />
      </div>
      <RelatedArticles />
    </>
  );
}
