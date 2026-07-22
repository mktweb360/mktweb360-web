import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ContactForm } from "@/components/ContactForm";
import { BlogBanner } from "@/components/BlogBanner";
import { RelatedArticles } from "@/components/RelatedArticles";
import { alternatesFor } from "@/lib/i18n/routes";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const isEn = lang === "en";
  return {
    title: isEn ? "Electronic Invoice — Obligations for Freelancers and SMEs in Spain | Mkt Web 360" : "Facture Électronique — Obligations pour Indépendants et PME en Espagne | Mkt Web 360",
    description: isEn ? "Everything you need to know about electronic invoicing obligations in Spain for autónomos and SMEs. When, who, and how to comply." : "Tout ce que vous devez savoir sur les obligations de facturation électronique en Espagne pour les indépendants et PME. Quand, qui, et comment se conformer.",
    alternates: alternatesFor(`/${lang}/electronic-invoice-spain/`) ?? {
      canonical: `https://www.mktweb360.com/${lang}/electronic-invoice-spain/`,
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
          { label: isEn ? "Electronic invoice Spain" : "Facture électronique Espagne" },
        ]} />
        <p className="text-sm text-accent-500 font-semibold mb-2">Business</p>
        <h1 className="text-4xl font-bold text-primary-600 mb-4 leading-tight">
          {isEn ? "Electronic invoice: obligations for freelancers and SMEs in Spain" : "Facture électronique : obligations pour indépendants et PME en Espagne"}
        </h1>
        <p className="text-xl text-gray-500 mb-8 leading-relaxed">
          {isEn ? "Electronic invoicing is becoming mandatory in Spain. This guide explains who it affects, from when, the approved formats and how to prepare your business." : "La facturation électronique devient obligatoire en Espagne. Ce guide explique qui cela concerne, à partir de quand, les formats approuvés et comment préparer votre entreprise."}
        </p>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-primary-600 mb-4">
            {isEn ? "What electronic invoicing is and why it is becoming mandatory" : "Qu'est-ce que la facturation électronique et pourquoi elle devient obligatoire"}
          </h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {isEn ? "Electronic invoicing (factura electrónica) is the digital exchange of invoice data in a structured, machine-readable format between suppliers and clients. Unlike a PDF invoice sent by email (which is not considered electronic invoicing), true electronic invoices use standardised formats (XML-based) that can be automatically processed by accounting software and government systems. The Spanish government is implementing electronic invoicing obligations as part of the Crea y Crece law (Law 18/2022) to reduce tax fraud, improve administrative efficiency and accelerate business payment times." : "La facturation électronique est l'échange numérique de données de factures dans un format structuré et lisible par machine entre fournisseurs et clients. Contrairement à une facture PDF envoyée par email (qui n'est pas considérée comme facturation électronique), les vraies factures électroniques utilisent des formats standardisés (basés sur XML) qui peuvent être automatiquement traités par des logiciels comptables et des systèmes gouvernementaux. Le gouvernement espagnol met en place des obligations de facturation électronique dans le cadre de la loi Crea y Crece (Loi 18/2022) pour réduire la fraude fiscale, améliorer l'efficacité administrative et accélérer les délais de paiement des entreprises."}
          </p>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {isEn ? "The Crea y Crece law establishes that electronic invoicing will become mandatory for business-to-business (B2B) transactions. The rollout is phased: large companies and public entities were first, followed by SMEs and autónomos (self-employed) in subsequent phases. For transactions with public administrations in Spain, electronic invoicing via the FACe platform has been mandatory for some years. The new obligation extends this to all B2B commercial transactions." : "La loi Crea y Crece établit que la facturation électronique deviendra obligatoire pour les transactions interentreprises (B2B). Le déploiement est progressif : les grandes entreprises et entités publiques sont venues en premier, suivies des PME et des autónomos (indépendants) dans les phases suivantes. Pour les transactions avec les administrations publiques en Espagne, la facturation électronique via la plateforme FACe est obligatoire depuis quelques années. La nouvelle obligation étend cela à toutes les transactions commerciales B2B."}
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-primary-600 mb-4">
            {isEn ? "Who is affected and from when" : "Qui est concerné et à partir de quand"}
          </h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {isEn ? "Under the Crea y Crece law implementation, all entrepreneurs and businesses in Spain who carry out transactions with other businesses or professionals will be required to issue electronic invoices. This includes autónomos who invoice other businesses (not end consumers), SMEs of all sizes, and larger companies who must also be able to receive and process electronic invoices. Consumer-to-consumer and business-to-consumer (B2C) transactions are initially excluded." : "Sous la mise en œuvre de la loi Crea y Crece, tous les entrepreneurs et entreprises en Espagne qui effectuent des transactions avec d'autres entreprises ou professionnels seront tenus d'émettre des factures électroniques. Cela inclut les autónomos qui facturent d'autres entreprises (pas les consommateurs finaux), les PME de toutes tailles, et les grandes entreprises qui doivent également être en mesure de recevoir et traiter les factures électroniques. Les transactions consommateur-à-consommateur et entreprise-à-consommateur (B2C) sont initialement exclues."}
          </p>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {isEn ? "The implementation timeline has been subject to delays and regulatory development. As of the time of writing, businesses should monitor official announcements from the Agencia Tributaria and the Ministry of Economy for confirmed implementation dates. The technical regulations (reglamento de facturación electrónica) define the specific requirements, and software providers are continuously updating their solutions. Check with your gestoría or accountant for the most current requirements applicable to your business." : "Le calendrier de mise en œuvre a été sujet à des retards et des développements réglementaires. Au moment de la rédaction, les entreprises doivent surveiller les annonces officielles de l'Agencia Tributaria et du Ministère de l'Économie pour les dates de mise en œuvre confirmées. La réglementation technique (reglamento de facturación electrónica) définit les exigences spécifiques, et les fournisseurs de logiciels mettent continuellement à jour leurs solutions. Consultez votre gestoría ou comptable pour les exigences actuelles applicables à votre entreprise."}
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-primary-600 mb-4">
            {isEn ? "Approved formats for electronic invoices in Spain" : "Formats approuvés pour les factures électroniques en Espagne"}
          </h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {isEn ? "The Spanish regulations for private sector electronic invoicing require specific structured formats. The main approved formats are: Facturae (the native Spanish XML format required for invoicing public administrations), UBL (Universal Business Language, a widely used international XML standard), and CII (Cross Industry Invoice, the UN/CEFACT standard also used in the European EN16931 norm). Your invoicing software must be able to generate invoices in these formats, not just PDF." : "La réglementation espagnole pour la facturation électronique du secteur privé exige des formats structurés spécifiques. Les principaux formats approuvés sont : Facturae (le format XML natif espagnol requis pour facturer les administrations publiques), UBL (Universal Business Language, un standard XML international largement utilisé), et CII (Cross Industry Invoice, le standard UN/CEFACT également utilisé dans la norme européenne EN16931). Votre logiciel de facturation doit être capable de générer des factures dans ces formats, pas seulement en PDF."}
          </p>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {isEn ? "The regulations also require digital signatures and timestamps to ensure the authenticity and integrity of invoices, a record-keeping requirement (invoices must be stored and accessible for the legally required period), and a system that allows the recipient to verify the status of invoices. These requirements go beyond simply sending a file — they require a proper electronic invoicing solution." : "Les réglementations exigent également des signatures numériques et des horodatages pour garantir l'authenticité et l'intégrité des factures, une obligation de conservation (les factures doivent être stockées et accessibles pour la période légalement requise), et un système permettant au destinataire de vérifier le statut des factures. Ces exigences vont au-delà de l'envoi simple d'un fichier — elles nécessitent une vraie solution de facturation électronique."}
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-primary-600 mb-4">
            {isEn ? "Software and tools for electronic invoicing" : "Logiciels et outils pour la facturation électronique"}
          </h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {isEn ? "For autónomos and small businesses, the main software options for compliant electronic invoicing in Spain include: FacturaDirecta, Holded, Billin, Quipu, and ContaPlus. Most major accounting and ERP systems used by SMEs (Sage, SAP, Oracle) are already updating to support the required formats. The government also provides free tools via the Agencia Tributaria for those who cannot afford dedicated software." : "Pour les autónomos et les petites entreprises, les principales options logicielles pour la facturation électronique conforme en Espagne incluent : FacturaDirecta, Holded, Billin, Quipu et ContaPlus. La plupart des grands systèmes comptables et ERP utilisés par les PME (Sage, SAP, Oracle) se mettent déjà à jour pour prendre en charge les formats requis. Le gouvernement fournit également des outils gratuits via l'Agencia Tributaria pour ceux qui ne peuvent pas se permettre un logiciel dédié."}
          </p>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {isEn ? "When evaluating electronic invoicing software, key criteria include: compatibility with required Spanish formats (Facturae, UBL, CII), integration with your existing accounting system, ease of use for daily invoicing workflows, ability to send and receive electronic invoices, digital signature capability, and certified archiving. Many solutions offer monthly subscriptions starting from around €10-15 per month for basic plans." : "Lors de l'évaluation des logiciels de facturation électronique, les critères clés incluent : la compatibilité avec les formats espagnols requis (Facturae, UBL, CII), l'intégration avec votre système comptable existant, la facilité d'utilisation pour les flux de travail de facturation quotidienne, la capacité d'envoyer et recevoir des factures électroniques, la capacité de signature numérique, et l'archivage certifié. De nombreuses solutions proposent des abonnements mensuels à partir d'environ 10 à 15 € par mois pour les plans de base."}
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-primary-600 mb-4">
            {isEn ? "How to prepare your business for the change" : "Comment préparer votre entreprise au changement"}
          </h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {isEn ? "The practical steps to prepare: 1) Identify which of your clients are businesses (and will need to receive electronic invoices from you) versus end consumers. 2) Check whether your current invoicing software supports or will support the required formats — contact your software provider. 3) If you need new software, evaluate 2-3 options and select one before the mandatory implementation date. 4) Test the system with a few clients before the deadline. 5) Ensure your clients know they will start receiving electronic invoices and have software capable of processing them." : "Les étapes pratiques pour se préparer : 1) Identifiez lesquels de vos clients sont des entreprises (et auront besoin de recevoir des factures électroniques de votre part) versus des consommateurs finaux. 2) Vérifiez si votre logiciel de facturation actuel prend en charge ou prendra en charge les formats requis — contactez votre fournisseur de logiciels. 3) Si vous avez besoin d'un nouveau logiciel, évaluez 2 à 3 options et sélectionnez-en une avant la date de mise en œuvre obligatoire. 4) Testez le système avec quelques clients avant l'échéance. 5) Assurez-vous que vos clients savent qu'ils commenceront à recevoir des factures électroniques et disposent d'un logiciel capable de les traiter."}
          </p>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {isEn ? "The transition is also an opportunity to modernise your overall invoicing and accounting processes. Electronic invoicing integrates naturally with cloud accounting software, automatic bank reconciliation and digital expense management. Businesses that adopt it proactively often discover efficiency gains beyond mere compliance — faster payment tracking, automated reminders and integrated VAT reporting." : "La transition est également une opportunité de moderniser l'ensemble de vos processus de facturation et de comptabilité. La facturation électronique s'intègre naturellement avec les logiciels comptables cloud, le rapprochement bancaire automatique et la gestion des dépenses numériques. Les entreprises qui l'adoptent de manière proactive découvrent souvent des gains d'efficacité au-delà de la simple conformité — suivi plus rapide des paiements, rappels automatisés et déclaration TVA intégrée."}
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
