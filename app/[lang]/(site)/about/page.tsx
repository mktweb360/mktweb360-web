import type { Lang } from "@/lib/i18n";
import { ContactForm } from "@/components/ContactForm";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { alternatesFor } from "@/lib/i18n/routes";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  return {
    title: lang === "en" ? "About Us — Mkt Web 360" : "À propos — Mkt Web 360",
    description:
      lang === "en"
        ? "Meet the Mkt Web 360 team. Senior experience, AI protocols and sector exclusivity. Digital marketing agency for SMEs. Nationwide service."
        : "Découvrez l'équipe Mkt Web 360. Expérience senior, protocoles IA et exclusivité sectorielle. Agence de marketing digital pour PME.",
    alternates: alternatesFor(`/${lang}/about/`) ?? {
      canonical: `https://www.mktweb360.com/${lang}/about/`,
    },
  };
}

export default async function AboutPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const isEn = lang === "en";

  const values = isEn
    ? [
        { title: "Commitment", desc: "We treat every project as if it were our own business. Your success is our success." },
        { title: "Transparency", desc: "Clear reports, real metrics and honest communication about what works and what doesn't." },
        { title: "Results", desc: "Every action has a measurable objective. We don't do marketing for its own sake — we do marketing that converts." },
        { title: "Communication", desc: "Response within 24 hours and direct contact with your account manager at all times." },
        { title: "Exclusivity", desc: "We don't work with your competition in your area. Your sector is exclusively yours." },
        { title: "AI Applied", desc: "Our own AI protocols integrated into every service for faster and more precise results." },
      ]
    : [
        { title: "Engagement", desc: "Nous traitons chaque projet comme s'il était notre propre entreprise. Votre succès est notre succès." },
        { title: "Transparence", desc: "Rapports clairs, métriques réelles et communication honnête sur ce qui fonctionne et ce qui ne fonctionne pas." },
        { title: "Résultats", desc: "Chaque action a un objectif mesurable. Nous ne faisons pas du marketing pour le faire — nous faisons du marketing qui convertit." },
        { title: "Communication", desc: "Réponse dans les 24 heures et contact direct avec votre responsable de compte à tout moment." },
        { title: "Exclusivité", desc: "Nous ne travaillons pas avec vos concurrents dans votre zone. Votre secteur est exclusivement le vôtre." },
        { title: "IA Appliquée", desc: "Nos propres protocoles IA intégrés dans chaque service pour des résultats plus rapides et plus précis." },
      ];

  const enDiffs = [
    "Senior team — no trainees or junior profiles",
    "Our own AI protocols in every service",
    "Sector and geographic exclusivity per client",
    "Real reporting — good and bad data",
    "Direct access to your account manager, always",
    "Business-oriented, not vanity metrics",
  ];

  const frDiffs = [
    "Équipe senior — pas de stagiaires ni de profils juniors",
    "Protocoles IA propres dans chaque service",
    "Exclusivité sectorielle et géographique par client",
    "Reporting réel — bonnes et mauvaises données",
    "Accès direct à votre responsable de compte, toujours",
    "Orienté business, pas métriques de vanité",
  ];

  return (
    <>
      <section className="bg-gradient-to-br from-primary-700 to-primary-900 text-white">
        <div className="max-w-6xl mx-auto px-4 py-16">
          <Breadcrumbs
            crumbs={[
              { label: isEn ? "Home" : "Accueil", href: `/${lang}/` },
              { label: isEn ? "About" : "À propos" },
            ]}
          />
          <div className="max-w-3xl mt-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              {isEn ? "The experience of a senior team." : "L'expérience d'une équipe senior."}
              <br />
              <span className="text-accent-400">
                {isEn ? "The precision of artificial intelligence." : "La précision de l'intelligence artificielle."}
              </span>
            </h1>
            <p className="text-xl text-primary-200 mb-4 leading-relaxed">
              {isEn
                ? "At Mkt Web 360 we are not just another agency. We are a team committed to real results for real businesses — with our own AI protocols that allow us to work faster, analyse more data and make better decisions than a traditional agency."
                : "Chez Mkt Web 360, nous ne sommes pas une agence ordinaire. Nous sommes une équipe engagée dans des résultats réels pour des entreprises réelles — avec nos propres protocoles IA qui nous permettent de travailler plus vite, d'analyser plus de données et de prendre de meilleures décisions qu'une agence traditionnelle."}
            </p>
            <a
              href={`/${lang}/contact/`}
              className="inline-block bg-accent-500 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-accent-600 transition-colors mt-4"
            >
              {isEn ? "Tell us about your project" : "Parlez-nous de votre projet"}
            </a>
          </div>
        </div>
      </section>

      <section className="bg-primary-600 py-6 px-4">
        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 text-center text-white">
          {[
            { value: "+10", label: isEn ? "years experience" : "ans d'expérience" },
            { value: "National", label: isEn ? "service across Spain" : "service en Espagne" },
            { value: "AI", label: isEn ? "own protocols" : "protocoles propres" },
            { value: "1:1", label: isEn ? "sector exclusivity" : "exclusivité sectorielle" },
          ].map((m) => (
            <div key={m.label}>
              <div className="text-xl font-bold text-accent-400">{m.value}</div>
              <div className="text-xs text-primary-200 mt-1">{m.label}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-primary-600 mb-6">
                {isEn ? "Our story" : "Notre histoire"}
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                {isEn
                  ? "Mkt Web 360 was founded with a clear objective: to offer Spanish SMEs the same level of serious and professional digital marketing that until then was only accessible to large companies."
                  : "Mkt Web 360 a été fondé avec un objectif clair : offrir aux PME espagnoles le même niveau de marketing digital sérieux et professionnel qui jusqu'alors n'était accessible qu'aux grandes entreprises."}
              </p>
              <p className="text-gray-600 leading-relaxed">
                {isEn
                  ? "Since then we have worked with companies from very different sectors — from care services to metal industry — always maintaining the same level of involvement, rigour and closeness that differentiates us."
                  : "Depuis lors, nous avons travaillé avec des entreprises de secteurs très différents — des services de soin à l'industrie métallurgique — en maintenant toujours le même niveau d'implication, de rigueur et de proximité qui nous différencie."}
              </p>
            </div>
            <div className="bg-primary-600 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">
                {isEn ? "Why we are different" : "Pourquoi nous sommes différents"}
              </h3>
              <ul className="space-y-3">
                {(isEn ? enDiffs : frDiffs).map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm">
                    <span className="text-accent-400 font-bold shrink-0 mt-0.5">✓</span>
                    <span className="text-primary-100">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary-600 mb-4">
              {isEn ? "Our values" : "Nos valeurs"}
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {values.map((v) => (
              <div key={v.title} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                <h3 className="font-bold text-primary-600 mb-2">{v.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-primary-600 text-white">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-4">
              {isEn
                ? "Your best customer doesn't know you yet"
                : "Votre meilleur client ne vous connaît pas encore"}
            </h2>
            <p className="text-primary-200">
              {isEn ? "Let's introduce you." : "Présentons-nous."}
            </p>
          </div>
          <div className="bg-white rounded-2xl p-8">
            <ContactForm formType={`about-${lang}`} />
          </div>
        </div>
      </section>
    </>
  );
}
