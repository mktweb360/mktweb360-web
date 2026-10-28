import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ContactForm } from "@/components/ContactForm";
import { BlogBanner } from "@/components/BlogBanner";
import { RelatedArticles } from "@/components/RelatedArticles";
import { alternatesFor } from "@/lib/i18n/routes";
import { AuthorByline } from "@/components/AuthorByline";
import { IntlArticleJsonLd } from "@/components/JsonLd";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const isEn = lang === "en";
  return {
    title: isEn ? "How to Register as a Freelancer in Spain" : "S'inscrire comme indépendant en Espagne",
    description: isEn ? "Complete guide to registering as a self-employed freelancer (autónomo) in Spain. Steps, costs, social security and tax obligations." : "Guide complet pour s'inscrire comme travailleur indépendant (autónomo) en Espagne. Étapes, coûts, sécurité sociale et obligations fiscales.",
    alternates: alternatesFor(`/${lang}/how-to-register-as-freelancer/`) ?? {
      canonical: `https://www.mktweb360.com/${lang}/how-to-register-as-freelancer/`,
    },
  };
}

export default async function Page({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const isEn = lang === "en";
  return (
    <>
      <div className="max-w-3xl mx-auto px-4 py-12">
        <Breadcrumbs crumbs={[
          { label: isEn ? "Home" : "Accueil", href: `/${lang}/` },
          { label: "Blog", href: `/${lang}/blog/` },
          { label: isEn ? "Register freelancer Spain" : "Inscription indépendant Espagne" },
        ]} />
        <p className="text-sm text-accent-500 font-semibold mb-2">Business</p>
        <IntlArticleJsonLd lang={lang} slug="how-to-register-as-freelancer" headline={isEn ? "How to register as a self-employed freelancer in Spain: complete guide" : "Comment s'inscrire comme travailleur indépendant en Espagne : guide complet"} image="/og-como-darse-de-alta-autonomo.jpg" />
        <h1 className="text-4xl font-bold text-primary-600 mb-4 leading-tight">
          {isEn ? "How to register as a self-employed freelancer in Spain: complete guide" : "Comment s'inscrire comme travailleur indépendant en Espagne : guide complet"}
        </h1>
        <AuthorByline lang={lang} block />
        <p className="text-xl text-gray-500 mb-8 leading-relaxed">
          {isEn ? "Registering as self-employed in Spain (autónomo) involves several steps across different government bodies. This guide explains everything you need to do, the costs involved and the obligations you will have." : "S'inscrire comme travailleur indépendant en Espagne (autónomo) implique plusieurs étapes auprès de différents organismes gouvernementaux. Ce guide explique tout ce que vous devez faire, les coûts impliqués et les obligations que vous aurez."}
        </p>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-primary-600 mb-4">
            {isEn ? "What it means to be self-employed (autónomo) in Spain" : "Ce que signifie être travailleur indépendant (autónomo) en Espagne"}
          </h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {isEn ? "In Spain, being autónomo means you are registered as a self-employed worker, responsible for your own social security contributions and tax filings. Unlike employees, you must handle VAT (IVA) quarterly, income tax (IRPF) quarterly and annually, and pay a monthly social security contribution. In return, you gain the flexibility to work for multiple clients, set your own rates and manage your own schedule." : "En Espagne, être autónomo signifie que vous êtes enregistré comme travailleur indépendant, responsable de vos propres cotisations de sécurité sociale et déclarations fiscales. Contrairement aux salariés, vous devez gérer la TVA (IVA) trimestriellement, l'impôt sur le revenu (IRPF) trimestriellement et annuellement, et payer une cotisation mensuelle de sécurité sociale. En retour, vous gagnez la flexibilité de travailler pour plusieurs clients, fixer vos propres tarifs et gérer votre propre emploi du temps."}
          </p>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {isEn ? "Becoming autónomo is the most common way for individuals to start a business or freelance career in Spain. It is simpler and cheaper to set up than a limited company (Sociedad Limitada), but it means you have unlimited personal liability for business debts. For most freelancers and small service businesses, the autónomo model is the right starting point." : "Devenir autónomo est la façon la plus courante pour les individus de démarrer une entreprise ou une carrière freelance en Espagne. C'est plus simple et moins coûteux à créer qu'une société à responsabilité limitée (Sociedad Limitada), mais cela signifie que vous avez une responsabilité personnelle illimitée pour les dettes commerciales. Pour la plupart des freelances et des petites entreprises de services, le modèle autónomo est le bon point de départ."}
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-primary-600 mb-4">
            {isEn ? "Steps to register as autónomo" : "Étapes pour s'inscrire comme autónomo"}
          </h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {isEn ? "Registration requires two main steps: registering with the Tax Agency (Agencia Tributaria) using form 036 or 037, and registering with Social Security using form TA.0521. The Tax Agency registration selects your economic activity code (IAE) which determines your tax category. Form 037 is the simplified version and is sufficient for most freelancers. Both registrations should be done before you start invoicing." : "L'inscription nécessite deux étapes principales : s'inscrire auprès de l'Agence fiscale (Agencia Tributaria) via le formulaire 036 ou 037, et s'inscrire auprès de la Sécurité sociale via le formulaire TA.0521. L'inscription à l'Agence fiscale sélectionne votre code d'activité économique (IAE) qui détermine votre catégorie fiscale. Le formulaire 037 est la version simplifiée et est suffisant pour la plupart des freelances. Les deux inscriptions doivent être faites avant de commencer à facturer."}
          </p>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {isEn ? "Both registrations can be done online with a digital certificate or Cl@ve PIN. If you don't have either, you can visit your local Tax Agency office with your DNI or NIE. The Social Security registration must be in place before you start working (you can file it up to 60 calendar days in advance), so leave it done before your first job. Keep copies of all registration documents." : "Les deux inscriptions peuvent être faites en ligne avec un certificat numérique ou un PIN Cl@ve. Si vous n'en avez pas, vous pouvez vous rendre à votre bureau local de l'Agence fiscale avec votre DNI ou NIE. L'inscription à la Sécurité sociale doit être faite avant de commencer l'activité (vous pouvez la demander jusqu'à 60 jours calendaires à l'avance) : faites-la avant votre première mission. Gardez des copies de tous les documents d'inscription."}
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-primary-600 mb-4">
            {isEn ? "Social security contributions for freelancers" : "Cotisations de sécurité sociale pour indépendants"}
          </h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {isEn ? "Since 2023, Spain has a new contribution system for autónomos based on net income rather than a fixed base. You choose a contribution base according to your expected income, with minimum monthly payments ranging from approximately €200 in the lowest income bracket to around €590 in the highest, and more if you choose a higher base. At the end of the year, your actual income is calculated and your contributions are adjusted accordingly." : "Depuis 2023, l'Espagne a un nouveau système de cotisation pour les autónomos basé sur le revenu net plutôt que sur une base fixe. Vous choisissez une base de cotisation selon vos revenus prévus, avec des paiements mensuels minimaux allant d'environ 200 € dans la tranche la plus basse à environ 590 € dans la plus haute, et davantage si vous choisissez une base plus élevée. En fin d'année, vos revenus réels sont calculés et vos cotisations sont ajustées en conséquence."}
          </p>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {isEn ? "Social security contributions as an autónomo give you access to healthcare through the public system, unemployment benefits (if you have paid contributions for sufficient time), retirement pension and sick leave coverage after the third day of illness. The contribution amount directly affects your future pension, so it is worth understanding the long-term implications of choosing a lower or higher base." : "Les cotisations de sécurité sociale en tant qu'autónomo vous donnent accès aux soins de santé via le système public, aux allocations chômage (si vous avez cotisé suffisamment longtemps), à la retraite et à la couverture des congés maladie à partir du troisième jour de maladie. Le montant de cotisation affecte directement votre future retraite, il vaut donc la peine de comprendre les implications à long terme du choix d'une base plus basse ou plus haute."}
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-primary-600 mb-4">
            {isEn ? "Tax obligations: VAT and income tax" : "Obligations fiscales : TVA et impôt sur le revenu"}
          </h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {isEn ? "As an autónomo in Spain, you must charge VAT (IVA) on your invoices (generally 21%, with reduced rates of 10% or 4% for certain activities) and file quarterly VAT returns using form 303. You must also make quarterly income tax advance payments using form 130, paying 20% of your net profit for the quarter. At the end of the year, you file your annual income tax return (declaración de la renta)." : "En tant qu'autónomo en Espagne, vous devez facturer la TVA (IVA) sur vos factures (généralement 21%, avec des taux réduits de 10% ou 4% pour certaines activités) et déposer des déclarations de TVA trimestrielles via le formulaire 303. Vous devez également effectuer des acomptes trimestriels d'impôt sur le revenu via le formulaire 130, en payant 20% de votre bénéfice net du trimestre. En fin d'année, vous déposez votre déclaration annuelle d'impôt sur le revenu."}
          </p>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {isEn ? "Many new autónomos work with a gestor (accountant/administrative manager) who handles the tax filings for a monthly fee that varies with the firm and the volume of invoices. That fee is a deductible expense, and it frees up time for your actual work." : "Beaucoup de nouveaux autónomos confient leurs déclarations à un gestor (comptable/gestionnaire administratif), contre des honoraires mensuels qui varient selon le cabinet et le volume de factures. Ces honoraires sont déductibles et vous libèrent du temps pour votre activité."}
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-primary-600 mb-4">
            {isEn ? "Flat rate and benefits for new freelancers" : "Tarif forfaitaire et avantages pour les nouveaux indépendants"}
          </h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {isEn ? "New autónomos in Spain benefit from the 'tarifa plana' (flat rate), which reduces social security contributions significantly in the first year. Under current rules, new autónomos pay a flat €80 per month in the first 12 months, regardless of their income. This rate can be extended if your net income remains below the minimum wage. This flat rate applies to those registering as autónomo for the first time or those who haven't been autónomo in the last two years." : "Les nouveaux autónomos en Espagne bénéficient de la 'tarifa plana' (tarif forfaitaire), qui réduit significativement les cotisations de sécurité sociale la première année. Selon les règles actuelles, les nouveaux autónomos paient un forfait de 80€ par mois les 12 premiers mois, indépendamment de leurs revenus. Ce tarif peut être prolongé si votre revenu net reste en dessous du salaire minimum. Ce tarif forfaitaire s'applique à ceux qui s'inscrivent comme autónomo pour la première fois ou à ceux qui n'ont pas été autónomo au cours des deux dernières années."}
          </p>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {isEn ? "Beyond the flat rate, new autónomos may also be eligible for regional aid and subsidies. Many regional governments in Spain offer grants for new self-employed workers, particularly in certain sectors or demographics. Check with your regional employment service (SEPE at the national level, plus regional equivalents) to see what is available in your autonomous community." : "Au-delà du tarif forfaitaire, les nouveaux autónomos peuvent également être éligibles à des aides et subventions régionales. De nombreuses administrations régionales en Espagne offrent des subventions aux nouveaux travailleurs indépendants, particulièrement dans certains secteurs ou groupes démographiques. Vérifiez auprès de votre service régional de l'emploi (SEPE au niveau national, plus les équivalents régionaux) ce qui est disponible dans votre communauté autonome."}
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-primary-600 mb-4">
            {isEn ? "After registering: making sure clients find you" : "Après l'inscription : faire en sorte que les clients vous trouvent"}
          </h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {isEn ? "Registration is the legal step. For the business to work, people also need to find you when they search for what you do. The minimum digital base for a new autónomo is a " : "L'inscription est l'étape légale. Pour que l'activité fonctionne, il faut aussi qu'on vous trouve quand on cherche ce que vous faites. La base numérique minimale d'un nouvel autónomo, c'est un "}
            <a href={isEn ? "/en/web-design/" : "/fr/creation-site-web/"} className="text-accent-500 hover:underline">
              {isEn ? "simple professional website" : "site web professionnel simple"}
            </a>
            {isEn ? " and a " : " et une "}
            <a href={isEn ? "/en/google-business-profile-service/" : "/fr/gestion-google-business-profile/"} className="text-accent-500 hover:underline">
              {isEn ? "properly set-up Google Business Profile" : "fiche Google Business Profile bien configurée"}
            </a>
            {isEn ? ". The profile is free and is what appears on Google Maps when someone looks for your service nearby, so it is worth having it ready in your first week." : ". La fiche est gratuite et c'est elle qui apparaît sur Google Maps quand quelqu'un cherche votre service à proximité : mieux vaut l'avoir prête dès la première semaine."}
          </p>
        </section>

        <BlogBanner
          lang={lang}
          badge={isEn ? "For new freelancers" : "Pour les nouveaux indépendants"}
          title={isEn ? "Registered? The next step is being found" : "Inscrit ? L'étape suivante, c'est d'être trouvé"}
          desc={isEn
            ? "We build professional websites on WordPress, so you can edit texts and photos yourself, structured so clients can find you on Google and get in touch."
            : "Nous créons des sites professionnels sur WordPress, que vous pouvez modifier vous-même, structurés pour que les clients vous trouvent sur Google et vous contactent."}
          cta={isEn ? "See our websites for small businesses" : "Voir nos sites pour petites entreprises"}
          href={isEn ? "/en/web-design/" : "/fr/creation-site-web/"}
          secondary={{
            text: isEn ? "Already online? Request the free audit first" : "Déjà en ligne ? Demandez d'abord l'audit gratuit",
            href: isEn ? "/en/digital-audit/" : "/fr/audit-digital/",
          }}
        />
        <section className="mw-skin-cta text-white rounded-3xl p-8 mt-12">
          <h2 className="text-2xl font-bold mb-4">
            {isEn ? "Starting out as autónomo? Tell us what you do" : "Vous démarrez comme autónomo ? Dites-nous ce que vous faites"}
          </h2>
          <p className="text-primary-200 mb-6">
            {isEn ? "Tell us about your activity and what you already have online, and we will reply with what we would set up first." : "Parlez-nous de votre activité et de ce que vous avez déjà en ligne : nous vous répondrons avec ce que nous mettrions en place en premier."}
          </p>
          <div className="rounded-3xl bg-white p-6 sm:p-8 text-gray-900 shadow-[0_30px_80px_-30px_rgba(0,0,0,0.6)] ring-1 ring-white/10">
            <ContactForm formType={`blog-${lang}`} />
          </div>
        </section>
      </div>
      <RelatedArticles category="Business" />
    </>
  );
}
