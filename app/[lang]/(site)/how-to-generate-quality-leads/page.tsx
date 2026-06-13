import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ContactForm } from "@/components/ContactForm";
import { BlogBanner } from "@/components/BlogBanner";
import { RelatedArticles } from "@/components/RelatedArticles";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const isEn = lang === "en";
  return {
    title: isEn
      ? "How to Generate Quality Leads for Your SME | Mkt Web 360"
      : "Comment générer des leads de qualité pour votre PME | Mkt Web 360",
    description: isEn
      ? "How to generate quality leads for your SME by improving message, segmentation, channels, website and sales process."
      : "Comment générer des leads de qualité pour votre PME en améliorant votre message, segmentation, canaux, site web et processus commercial.",
    alternates: {
      canonical: `https://www.mktweb360.com/${lang}/${lang === "en" ? "how-to-generate-quality-leads" : "comment-generer-leads-qualite"}/`,
    },
  };
}

export default async function Page({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const isEn = lang === "en";

  return (
    <>
      <div className="max-w-3xl mx-auto px-4 py-12">
        <Breadcrumbs
          crumbs={[
            { label: isEn ? "Home" : "Accueil", href: `/${lang}/` },
            { label: "Blog", href: `/${lang}/blog/` },
            { label: isEn ? "Quality leads" : "Leads de qualité" },
          ]}
        />
        <p className="text-sm text-accent-500 font-semibold mb-2">Strategy</p>
        <h1 className="text-4xl font-bold text-primary-600 mb-4 leading-tight">
          {isEn
            ? "How to generate quality leads for your SME without filling the funnel with useless contacts"
            : "Comment générer des leads de qualité pour votre PME sans remplir l'entonnoir de contacts inutiles"}
        </h1>
        <p className="text-xl text-gray-500 mb-8 leading-relaxed">
          {isEn
            ? "Not all leads are worth the same. A funnel full of unqualified contacts wastes time and resources. This guide explains how to attract leads that actually convert into customers."
            : "Tous les leads ne se valent pas. Un entonnoir rempli de contacts non qualifiés gaspille du temps et des ressources. Ce guide explique comment attirer des leads qui se transforment réellement en clients."}
        </p>

        <h2 className="text-2xl font-bold text-primary-600 mt-10 mb-4">
          {isEn ? "Why most SMEs struggle with lead quality" : "Pourquoi la plupart des PME ont du mal avec la qualité des leads"}
        </h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          {isEn
            ? "The most common mistake is optimising for lead volume instead of lead quality. Broad targeting, generic messaging and low-barrier offers attract many contacts — most of whom have no real intention to buy. The sales team spends 80% of its time on 20% of leads that will never convert."
            : "L'erreur la plus courante est d'optimiser pour le volume de leads plutôt que pour la qualité. Un ciblage large, des messages génériques et des offres à faible barrière attirent de nombreux contacts — dont la plupart n'ont pas de vraie intention d'achat. L'équipe commerciale passe 80% de son temps sur 20% des leads qui ne se convertiront jamais."}
        </p>
        <p className="text-gray-600 leading-relaxed mb-4">
          {isEn
            ? "The fix is not to generate fewer leads — it is to attract the right ones. This requires a clearer value proposition, better-targeted channels and a website designed to pre-qualify visitors before they submit a form."
            : "La solution n'est pas de générer moins de leads — c'est d'attirer les bons. Cela nécessite une proposition de valeur plus claire, des canaux mieux ciblés et un site web conçu pour pré-qualifier les visiteurs avant qu'ils soumettent un formulaire."}
        </p>

        <h2 className="text-2xl font-bold text-primary-600 mt-10 mb-4">
          {isEn ? "How to define your ideal customer profile" : "Comment définir votre profil de client idéal"}
        </h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          {isEn
            ? "Start with your best existing customers. What sector are they in? What size? What problem brought them to you? What was their decision timeline? What questions did they ask before signing? These answers define your Ideal Customer Profile (ICP) — the target for all your lead generation efforts."
            : "Commencez par vos meilleurs clients existants. Dans quel secteur sont-ils ? Quelle taille ? Quel problème les a amenés à vous ? Quel était leur calendrier de décision ? Quelles questions ont-ils posées avant de signer ? Ces réponses définissent votre Profil de Client Idéal (ICP) — la cible de tous vos efforts de génération de leads."}
        </p>
        <p className="text-gray-600 leading-relaxed mb-4">
          {isEn
            ? "Once you have your ICP, every decision — ad targeting, content topics, website copy, contact form fields — should be optimised to attract this profile and implicitly deter those who do not fit. A focused message repels bad leads and attracts good ones."
            : "Une fois que vous avez votre ICP, chaque décision — ciblage publicitaire, sujets de contenu, texte du site web, champs de formulaire de contact — doit être optimisée pour attirer ce profil et implicitement décourager ceux qui ne correspondent pas. Un message ciblé repousse les mauvais leads et attire les bons."}
        </p>

        <h2 className="text-2xl font-bold text-primary-600 mt-10 mb-4">
          {isEn ? "Which channels generate the best quality leads" : "Quels canaux génèrent les leads de meilleure qualité"}
        </h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          {isEn
            ? "SEO generates the highest quality leads because users are actively searching for a solution — they have high purchase intent. Google Ads with well-targeted keywords and strong negative keyword lists also produces good quality leads. LinkedIn is excellent for B2B. Referrals from existing clients are usually the best quality of all."
            : "Le SEO génère les leads de meilleure qualité parce que les utilisateurs recherchent activement une solution — ils ont une forte intention d'achat. Google Ads avec des mots-clés bien ciblés et des listes de mots-clés négatifs solides produit également des leads de bonne qualité. LinkedIn est excellent pour le B2B. Les recommandations des clients existants sont généralement de la meilleure qualité de toutes."}
        </p>
        <p className="text-gray-600 leading-relaxed mb-4">
          {isEn
            ? "Channels that typically generate lower quality leads: broad social media ads without tight targeting, low-barrier lead magnets (free guides that attract people who want information, not services) and cold outreach at scale."
            : "Les canaux qui génèrent généralement des leads de moindre qualité : les publicités sur les réseaux sociaux larges sans ciblage précis, les lead magnets à faible barrière (guides gratuits qui attirent des personnes qui veulent des informations, pas des services) et la prospection à froid à grande échelle."}
        </p>

        <h2 className="text-2xl font-bold text-primary-600 mt-10 mb-4">
          {isEn ? "How your website affects lead quality" : "Comment votre site web affecte la qualité des leads"}
        </h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          {isEn
            ? "Your website pre-qualifies or disqualifies leads before they contact you. Clear pricing (even if approximate) deters those with misaligned budgets. Specific case studies in your target sector attract similar companies. A contact form that asks about budget and timeline pre-qualifies intent — and a form that only asks for name and email does the opposite."
            : "Votre site web pré-qualifie ou disqualifie les leads avant qu'ils vous contactent. Des tarifs clairs (même approximatifs) découragent ceux avec des budgets inadaptés. Des études de cas spécifiques dans votre secteur cible attirent des entreprises similaires. Un formulaire de contact qui demande le budget et le délai pré-qualifie l'intention — et un formulaire qui ne demande que le nom et l'email fait l'inverse."}
        </p>

        <h2 className="text-2xl font-bold text-primary-600 mt-10 mb-4">
          {isEn ? "Lead qualification: separating real opportunities from noise" : "Qualification des leads : séparer les vraies opportunités du bruit"}
        </h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          {isEn
            ? "Not every lead that comes in is ready to buy. A simple qualification framework (BANT: Budget, Authority, Need, Timeline) helps you prioritise quickly. A lead with clear budget, decision-making authority, an identified problem and an urgent timeline is a hot lead. One missing all four is noise."
            : "Tous les leads entrants ne sont pas prêts à acheter. Un cadre de qualification simple (BANT : Budget, Autorité, Besoin, Délai) vous aide à prioriser rapidement. Un lead avec un budget clair, une autorité de décision, un problème identifié et un délai urgent est un lead chaud. Un lead manquant les quatre est du bruit."}
        </p>
        <p className="text-gray-600 leading-relaxed mb-4">
          {isEn
            ? "The goal is not to convert 100% of leads — it is to invest sales effort where it generates the best return. A smaller funnel of better-qualified leads closes faster, at higher margin, with less friction."
            : "L'objectif n'est pas de convertir 100% des leads — c'est d'investir l'effort commercial là où il génère le meilleur retour. Un entonnoir plus petit de leads mieux qualifiés se clôt plus vite, à marges plus élevées, avec moins de friction."}
        </p>

        <BlogBanner variant="default" />

        <section className="bg-primary-600 text-white rounded-2xl p-8 mt-12">
          <h2 className="text-2xl font-bold mb-4">
            {isEn
              ? "Need help with your digital marketing?"
              : "Besoin d'aide avec votre marketing digital ?"}
          </h2>
          <p className="text-primary-200 mb-6">
            {isEn
              ? "Tell us about your project and we'll get back to you within 24 hours."
              : "Parlez-nous de votre projet et nous vous répondrons dans les 24 heures."}
          </p>
          <div className="bg-white rounded-xl p-6">
            <ContactForm formType={`blog-${lang}`} />
          </div>
        </section>
      </div>
      <RelatedArticles category="Strategy" />
    </>
  );
}
