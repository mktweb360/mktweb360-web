import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { alternatesFor } from "@/lib/i18n/routes";

export const metadata: Metadata = {
  title: "Politique de Cookies | Mkt Web 360",
  description: "Informations sur l'utilisation des cookies sur le site web de Mkt Web 360 SLU, conformément à l'art. 22 LSSI et au RGPD.",
  alternates: alternatesFor("/fr/politique-de-cookies/") ?? { canonical: "https://www.mktweb360.com/fr/politique-de-cookies/" },
  openGraph: { url: "https://www.mktweb360.com/fr/politique-de-cookies/" },
  robots: { index: false, follow: false },
};

export default function PolitiqueCookiesPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <Breadcrumbs crumbs={[{ label: "Accueil", href: "/fr/" }, { label: "Politique de Cookies" }]} />
      <h1 className="text-3xl font-bold text-primary-600 mb-2">Politique de Cookies</h1>
      <p className="text-sm text-gray-500 mb-8">Dernière mise à jour : juin 2025</p>

      <div className="text-gray-700 space-y-8 text-sm leading-relaxed">

        <section>
          <h2 className="text-xl font-bold text-primary-700 mb-3">Que sont les cookies ?</h2>
          <p>Les cookies sont de petits fichiers texte qu'un site web stocke sur l'appareil de l'utilisateur (ordinateur, tablette ou smartphone) lorsque celui-ci le visite. Ils permettent au site de mémoriser des informations sur la visite, comme la langue préférée ou les paramètres de configuration, ce qui peut faciliter la prochaine visite et rendre le site plus utile.</p>
          <p className="mt-2">Les cookies peuvent être propres (définis par le site web lui-même) ou tiers (définis par des services externes), et peuvent être de session (supprimés à la fermeture du navigateur) ou persistants (restant sur l'appareil pendant une période déterminée).</p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-primary-700 mb-3">Base juridique</h2>
          <p>L'installation de cookies non essentiels requiert le consentement préalable et éclairé de l'utilisateur, conformément à l'<strong>article 7 du Règlement (UE) 2016/679 (RGPD)</strong> et à l'<strong>article 22 de la loi 34/2002 sur les services de la société de l'information (LSSI)</strong>. Les cookies strictement nécessaires au fonctionnement du site ne requièrent pas de consentement.</p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-primary-700 mb-3">Cookies utilisés sur ce site</h2>

          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse border border-gray-200 mt-2">
              <thead>
                <tr className="bg-primary-50">
                  <th className="border border-gray-200 px-3 py-2 text-left font-semibold">Nom</th>
                  <th className="border border-gray-200 px-3 py-2 text-left font-semibold">Fournisseur</th>
                  <th className="border border-gray-200 px-3 py-2 text-left font-semibold">Type</th>
                  <th className="border border-gray-200 px-3 py-2 text-left font-semibold">Finalité</th>
                  <th className="border border-gray-200 px-3 py-2 text-left font-semibold">Durée</th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    name: "_ga",
                    provider: "Google Analytics",
                    type: "Analytique",
                    purpose: "Distingue les utilisateurs uniques en attribuant un identifiant aléatoire",
                    duration: "2 ans",
                  },
                  {
                    name: "_ga_*",
                    provider: "Google Analytics",
                    type: "Analytique",
                    purpose: "Maintient l'état de la session pour Google Analytics 4",
                    duration: "2 ans",
                  },
                  {
                    name: "_gid",
                    provider: "Google Analytics",
                    type: "Analytique",
                    purpose: "Distingue les utilisateurs uniques ; renouvelé toutes les 24 heures",
                    duration: "24 heures",
                  },
                  {
                    name: "_gcl_au",
                    provider: "Google Tag Manager",
                    type: "Analytique",
                    purpose: "Stocke et suit les conversions publicitaires",
                    duration: "3 mois",
                  },
                  {
                    name: "mktweb360_consent",
                    provider: "Propre",
                    type: "Préférences",
                    purpose: "Enregistre les préférences de consentement aux cookies de l'utilisateur",
                    duration: "1 an",
                  },
                ].map((row) => (
                  <tr key={row.name} className="even:bg-gray-50">
                    <td className="border border-gray-200 px-3 py-2 font-mono text-xs">{row.name}</td>
                    <td className="border border-gray-200 px-3 py-2">{row.provider}</td>
                    <td className="border border-gray-200 px-3 py-2">{row.type}</td>
                    <td className="border border-gray-200 px-3 py-2">{row.purpose}</td>
                    <td className="border border-gray-200 px-3 py-2 whitespace-nowrap">{row.duration}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-bold text-primary-700 mb-3">Comment gérer les cookies</h2>
          <p className="mb-4">Vous pouvez gérer vos préférences en matière de cookies à tout moment via le panneau de préférences disponible en bas de cette page, ou en configurant votre navigateur pour bloquer ou supprimer les cookies. Vous trouverez ci-dessous les instructions pour les principaux navigateurs :</p>

          <div className="space-y-3">
            {[
              {
                browser: "Google Chrome",
                instructions: "Paramètres → Confidentialité et sécurité → Cookies et autres données des sites.",
              },
              {
                browser: "Mozilla Firefox",
                instructions: "Options → Vie privée et sécurité → Cookies et données de sites.",
              },
              {
                browser: "Safari (macOS / iOS)",
                instructions: "Préférences → Confidentialité → Gérer les données des sites web.",
              },
              {
                browser: "Microsoft Edge",
                instructions: "Paramètres → Confidentialité, recherche et services → Cookies et autorisations des sites.",
              },
            ].map((item) => (
              <div key={item.browser} className="bg-gray-50 rounded-lg px-4 py-3">
                <p><strong>{item.browser} :</strong> {item.instructions}</p>
              </div>
            ))}
          </div>

          <p className="mt-4 text-gray-500">Veuillez noter que la désactivation de certains cookies peut affecter le bon fonctionnement du site ou votre expérience de navigation.</p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-primary-700 mb-3">Mises à jour de la politique de cookies</h2>
          <p>Mkt Web 360 SLU se réserve le droit de modifier la présente politique de cookies pour l'adapter aux évolutions législatives, aux nouvelles technologies ou à l'introduction de nouveaux services. Lorsque des changements importants interviennent, l'utilisateur en sera informé via le panneau de consentement aux cookies.</p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-primary-700 mb-3">Contact</h2>
          <p>Pour toute question relative à l'utilisation des cookies sur ce site, contactez-nous à : <a href="mailto:info@mktweb360.com" className="text-accent-500 hover:underline">info@mktweb360.com</a></p>
        </section>

      </div>
    </div>
  );
}
