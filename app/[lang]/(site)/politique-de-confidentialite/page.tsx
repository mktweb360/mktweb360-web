import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { alternatesFor } from "@/lib/i18n/routes";

export const metadata: Metadata = {
  title: "Politique de Confidentialité | Mkt Web 360",
  description: "Politique de confidentialité et protection des données personnelles de Mkt Web 360 SLU, conformément au RGPD et à la LOPDGDD.",
  alternates: alternatesFor("/fr/politique-de-confidentialite/") ?? { canonical: "https://www.mktweb360.com/fr/politique-de-confidentialite/" },
  openGraph: { url: "https://www.mktweb360.com/fr/politique-de-confidentialite/" },
  robots: { index: false, follow: false },
};

export default function PolitiqueConfidentialitePage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <Breadcrumbs crumbs={[{ label: "Accueil", href: "/fr/" }, { label: "Politique de Confidentialité" }]} />
      <h1 className="text-3xl font-bold text-primary-600 mb-2">Politique de Confidentialité</h1>
      <p className="text-sm text-gray-500 mb-8">Dernière mise à jour : juin 2025</p>

      <div className="text-gray-700 space-y-8 text-sm leading-relaxed">

        <section>
          <h2 className="text-xl font-bold text-primary-700 mb-3">1. Responsable du traitement</h2>
          <div className="bg-gray-50 rounded-xl p-5 space-y-2">
            <p><strong>Raison sociale :</strong> Mkt Web 360 SLU</p>
            <p><strong>Numéro fiscal (CIF) :</strong> B87679304</p>
            <p><strong>Responsable :</strong> José Marcos Galindo Sánchez</p>
            <p><strong>Dénomination sociale :</strong> MKTWEB360, S.L.U.</p>
            <p><strong>Adresse :</strong> Calle Chopo 98, El Viso de San Juan, 45215 Toledo, Espagne</p>
            <p><strong>Registre du commerce :</strong> Tome 35360, Feuillet 45, Section 8, Page M-635651</p>
            <p><strong>Email de contact :</strong> <a href="mailto:info@mktweb360.com" className="text-accent-500 hover:underline">info@mktweb360.com</a></p>
          </div>
          <p className="mt-3">Mkt Web 360 SLU n'a pas désigné de délégué à la protection des données (DPD), n'étant pas tenu de le faire en vertu de l'article 37 du RGPD. Pour toute question relative à la protection des données, veuillez nous contacter à l'adresse email indiquée ci-dessus.</p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-primary-700 mb-3">2. Finalités et bases juridiques</h2>
          <p className="mb-4">Nous traitons vos données personnelles aux fins suivantes :</p>

          <div className="space-y-4">
            <div className="border border-gray-200 rounded-xl p-4">
              <h3 className="font-semibold text-primary-800 mb-2">2.1 Gestion des demandes de contact</h3>
              <p className="mb-1">Nous traitons les données que vous nous fournissez via le formulaire de contact du site (nom, email, téléphone et message) pour répondre à votre demande ou question.</p>
              <p><strong>Base juridique :</strong> Intérêt légitime du responsable du traitement (art. 6, para. 1, f) RGPD) et, le cas échéant, consentement de la personne concernée (art. 6, para. 1, a) RGPD) par l'envoi volontaire de la demande.</p>
            </div>

            <div className="border border-gray-200 rounded-xl p-4">
              <h3 className="font-semibold text-primary-800 mb-2">2.2 Envoi de communications commerciales</h3>
              <p className="mb-1">Si vous nous donnez votre consentement explicite, nous utiliserons vos coordonnées pour vous envoyer des informations sur nos services, actualités et contenus d'intérêt.</p>
              <p><strong>Base juridique :</strong> Consentement de la personne concernée (art. 6, para. 1, a) RGPD). Vous pouvez retirer ce consentement à tout moment sans que cela n'affecte la licéité du traitement effectué avant ce retrait.</p>
            </div>

            <div className="border border-gray-200 rounded-xl p-4">
              <h3 className="font-semibold text-primary-800 mb-2">2.3 Analyse statistique du site web</h3>
              <p className="mb-1">Avec votre consentement préalable, nous utilisons Google Analytics 4 et Google Tag Manager pour collecter des informations statistiques et anonymes sur l'utilisation du site afin d'en améliorer les fonctionnalités et les contenus.</p>
              <p><strong>Base juridique :</strong> Consentement de la personne concernée (art. 6, para. 1, a) RGPD et art. 22 LSSI).</p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-bold text-primary-700 mb-3">3. Destinataires et transferts internationaux</h2>
          <p className="mb-4">Vos données peuvent être communiquées aux prestataires de services suivants agissant en qualité de sous-traitants, avec lesquels Mkt Web 360 SLU a conclu les accords de sous-traitance appropriés :</p>

          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse border border-gray-200">
              <thead>
                <tr className="bg-primary-50">
                  <th className="border border-gray-200 px-3 py-2 text-left">Prestataire</th>
                  <th className="border border-gray-200 px-3 py-2 text-left">Finalité</th>
                  <th className="border border-gray-200 px-3 py-2 text-left">Pays</th>
                  <th className="border border-gray-200 px-3 py-2 text-left">Garanties</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-200 px-3 py-2 font-medium">Google LLC</td>
                  <td className="border border-gray-200 px-3 py-2">Google Analytics 4 et Google Tag Manager (analyse web)</td>
                  <td className="border border-gray-200 px-3 py-2">États-Unis</td>
                  <td className="border border-gray-200 px-3 py-2">Clauses contractuelles types (art. 46, para. 2, c) RGPD)</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-200 px-3 py-2 font-medium">Vercel Inc.</td>
                  <td className="border border-gray-200 px-3 py-2">Hébergement du site web</td>
                  <td className="border border-gray-200 px-3 py-2">États-Unis</td>
                  <td className="border border-gray-200 px-3 py-2">Clauses contractuelles types (art. 46, para. 2, c) RGPD)</td>
                </tr>
                <tr>
                  <td className="border border-gray-200 px-3 py-2 font-medium">Resend Inc.</td>
                  <td className="border border-gray-200 px-3 py-2">Envoi d'emails transactionnels</td>
                  <td className="border border-gray-200 px-3 py-2">États-Unis</td>
                  <td className="border border-gray-200 px-3 py-2">Clauses contractuelles types (art. 46, para. 2, c) RGPD)</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-200 px-3 py-2 font-medium">SiteGround</td>
                  <td className="border border-gray-200 px-3 py-2">Hébergement de messagerie</td>
                  <td className="border border-gray-200 px-3 py-2">UE</td>
                  <td className="border border-gray-200 px-3 py-2">Dans l'EEE</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="mt-4">Les données ne sont pas cédées à des tiers à des fins autres que celles décrites, sauf obligation légale.</p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-primary-700 mb-3">4. Durée de conservation</h2>
          <p className="mb-3">Les données fournies via le formulaire de contact seront conservées pendant <strong>3 ans à compter du dernier contact</strong>, sauf obligation légale de conservation pour une durée plus longue ou demande de suppression par la personne concernée avant ce délai.</p>
          <p>Les données traitées à des fins analytiques via Google Analytics 4 sont conservées pendant la période configurée dans cet outil (par défaut, 14 mois), sous forme anonymisée.</p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-primary-700 mb-3">5. Vos droits</h2>
          <p className="mb-3">Conformément au RGPD et à la LOPDGDD, vous pouvez exercer à tout moment les droits suivants :</p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Accès :</strong> Connaître les données personnelles que nous traitons vous concernant.</li>
            <li><strong>Rectification :</strong> Demander la correction de données inexactes ou incomplètes.</li>
            <li><strong>Effacement :</strong> Demander la suppression de vos données lorsqu'elles ne sont plus nécessaires aux fins pour lesquelles elles ont été collectées.</li>
            <li><strong>Opposition :</strong> Vous opposer au traitement de vos données dans certaines circonstances.</li>
            <li><strong>Portabilité :</strong> Recevoir vos données dans un format structuré, couramment utilisé et lisible par machine.</li>
            <li><strong>Limitation :</strong> Demander la restriction du traitement de vos données dans certaines circonstances.</li>
          </ul>
          <p className="mt-4">Pour exercer l'un de ces droits, contactez-nous à l'adresse <a href="mailto:info@mktweb360.com" className="text-accent-500 hover:underline">info@mktweb360.com</a>, en indiquant le droit que vous souhaitez exercer et en joignant une copie de votre pièce d'identité.</p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-primary-700 mb-3">6. Droit de réclamation auprès de l'autorité de contrôle</h2>
          <p>Si vous estimez que le traitement de vos données personnelles est inadéquat ou contrevient à la réglementation en vigueur, vous avez le droit de déposer une réclamation auprès de l'<strong>Agence espagnole de protection des données (AEPD)</strong>, autorité de contrôle compétente en Espagne, via son site web : <a href="https://www.aepd.es" target="_blank" rel="noopener noreferrer" className="text-accent-500 hover:underline">www.aepd.es</a>.</p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-primary-700 mb-3">7. Décisions automatisées et profilage</h2>
          <p>Mkt Web 360 SLU ne prend pas de décisions automatisées ni n'effectue de profilage des utilisateurs du site web au sens de l'article 22 du RGPD.</p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-primary-700 mb-3">8. Modifications de la politique de confidentialité</h2>
          <p>Mkt Web 360 SLU se réserve le droit de modifier la présente politique de confidentialité pour l'adapter aux évolutions législatives, jurisprudentielles ou aux changements d'activité. Toute modification sera publiée sur cette page avec la date de mise à jour.</p>
        </section>

      </div>
    </div>
  );
}
