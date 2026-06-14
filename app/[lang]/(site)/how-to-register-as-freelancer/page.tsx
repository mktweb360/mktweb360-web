import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ContactForm } from "@/components/ContactForm";
import { BlogBanner } from "@/components/BlogBanner";
import { RelatedArticles } from "@/components/RelatedArticles";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const isEn = lang === "en";
  return {
    title: isEn ? "How to Register as a Self-Employed Freelancer in Spain | Mkt Web 360" : "Comment s'inscrire comme travailleur indépendant en Espagne | Mkt Web 360",
    description: isEn ? "Complete guide to registering as a self-employed freelancer (autónomo) in Spain. Steps, costs, social security and tax obligations." : "Guide complet pour s'inscrire comme travailleur indépendant (autónomo) en Espagne. Étapes, coûts, sécurité sociale et obligations fiscales.",
    alternates: { canonical: `https://www.mktweb360.com/${lang}/how-to-register-as-freelancer/` },
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
        <h1 className="text-4xl font-bold text-primary-600 mb-4 leading-tight">
          {isEn ? "How to register as a self-employed freelancer in Spain: complete guide" : "Comment s'inscrire comme travailleur indépendant en Espagne : guide complet"}
        </h1>
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
            {isEn ? "Both registrations can be done online with a digital certificate or Cl@ve PIN. If you don't have either, you can visit your local Tax Agency office with your DNI or NIE. The process typically takes 1-2 business days to be fully processed, though you can start operating as soon as you submit the registration. Keep copies of all registration documents." : "Les deux inscriptions peuvent être faites en ligne avec un certificat numérique ou un PIN Cl@ve. Si vous n'en avez pas, vous pouvez vous rendre à votre bureau local de l'Agence fiscale avec votre DNI ou NIE. Le processus prend généralement 1 à 2 jours ouvrables pour être entièrement traité, bien que vous puissiez commencer à opérer dès que vous soumettez l'inscription. Gardez des copies de tous les documents d'inscription."}
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-primary-600 mb-4">
            {isEn ? "Social security contributions for freelancers" : "Cotisations de sécurité sociale pour indépendants"}
          </h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {isEn ? "Since 2023, Spain has a new contribution system for autónomos based on net income rather than a fixed base. You choose a contribution base according to your expected income, with monthly payments ranging from approximately €200 for the lowest income bracket to €600 or more for higher earners. At the end of the year, your actual income is calculated and your contributions are adjusted accordingly." : "Depuis 2023, l'Espagne a un nouveau système de cotisation pour les autónomos basé sur le revenu net plutôt que sur une base fixe. Vous choisissez une base de cotisation selon vos revenus prévus, avec des paiements mensuels allant d'environ 200€ pour la tranche de revenus la plus basse à 600€ ou plus pour les revenus plus élevés. En fin d'année, vos revenus réels sont calculés et vos cotisations sont ajustées en conséquence."}
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
            {isEn ? "Working with a gestor (accountant/administrative manager) is highly recommended for new autónomos. A gestor typically charges €60-120 per month and handles all your tax filings, keeping you compliant and freeing you to focus on your work. The cost is a deductible expense, and the peace of mind is worth it." : "Travailler avec un gestor (comptable/gestionnaire administratif) est fortement recommandé pour les nouveaux autónomos. Un gestor facture généralement 60 à 120€ par mois et gère toutes vos déclarations fiscales, vous maintenant en conformité et vous libérant pour vous concentrer sur votre travail. Le coût est une dépense déductible, et la tranquillité d'esprit en vaut la peine."}
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

        <BlogBanner variant="default" />
        <section className="bg-primary-600 text-white rounded-2xl p-8 mt-12">
          <h2 className="text-2xl font-bold mb-4">
            {isEn ? "Need help with your digital marketing?" : "Besoin d'aide avec votre marketing digital ?"}
          </h2>
          <p className="text-primary-200 mb-6">
            {isEn ? "Tell us about your project and we'll get back to you within 24 hours." : "Parlez-nous de votre projet et nous vous répondrons dans les 24 heures."}
          </p>
          <div className="bg-white rounded-xl p-6">
            <ContactForm formType={`blog-${lang}`} />
          </div>
        </section>
      </div>
      <RelatedArticles category="Business" />
    </>
  );
}
