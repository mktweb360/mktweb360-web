import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { alternatesFor } from "@/lib/i18n/routes";

export const metadata: Metadata = {
  title: "Mentions Légales | Mkt Web 360",
  description: "Mentions légales et conditions d'utilisation du site web de Mkt Web 360 SLU, CIF B87679304.",
  alternates: alternatesFor("/fr/mentions-legales/") ?? { canonical: "https://www.mktweb360.com/fr/mentions-legales/" },
  openGraph: { url: "https://www.mktweb360.com/fr/mentions-legales/" },
  robots: { index: false, follow: false },
};

export default function MentionsLegalesPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <Breadcrumbs crumbs={[{ label: "Accueil", href: "/fr/" }, { label: "Mentions Légales" }]} />
      <h1 className="text-3xl font-bold text-primary-600 mb-2">Mentions Légales</h1>
      <p className="text-sm text-gray-500 mb-8">Dernière mise à jour : juin 2025</p>

      <div className="text-gray-700 space-y-8 text-sm leading-relaxed">

        <section>
          <h2 className="text-xl font-bold text-primary-700 mb-3">1. Identification</h2>
          <p className="mb-3">Conformément à l'article 10 de la loi 34/2002 du 11 juillet relative aux services de la société de l'information et au commerce électronique (LSSI-CE), les informations d'identification du titulaire du site web sont les suivantes :</p>
          <div className="bg-gray-50 rounded-xl p-5 space-y-2">
            <p><strong>Raison sociale :</strong> Mkt Web 360 SLU</p>
            <p><strong>Numéro fiscal (CIF) :</strong> B87679304</p>
            <p><strong>Responsable :</strong> José Marcos Galindo Sánchez</p>
            <p><strong>Dénomination sociale :</strong> MKTWEB360, S.L.U.</p>
            <p><strong>Nom commercial :</strong> MKTWEB</p>
            <p><strong>Siège social :</strong> Calle Chopo 98, El Viso de San Juan, 45215 Toledo, Espagne</p>
            <p><strong>Registre du commerce :</strong> Tome 35360, Feuillet 45, Section 8, Page M-635651</p>
            <p><strong>Téléphone :</strong> <a href="tel:+34622748987" className="text-accent-500 hover:underline">+34 622 74 89 87</a></p>
            <p><strong>Email :</strong> <a href="mailto:info@mktweb360.com" className="text-accent-500 hover:underline">info@mktweb360.com</a></p>
            <p><strong>Site web :</strong> <a href="https://www.mktweb360.com" className="text-accent-500 hover:underline">https://www.mktweb360.com</a></p>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-bold text-primary-700 mb-3">2. Objet et champ d'application</h2>
          <p>Les présentes mentions légales régissent l'accès et l'utilisation du site web <strong>www.mktweb360.com</strong> (ci-après, « le Site »), appartenant à Mkt Web 360 SLU. L'accès au Site implique l'acceptation pleine et sans réserve des présentes conditions. Mkt Web 360 SLU se réserve le droit de modifier ces mentions légales à tout moment ; il appartient à l'utilisateur de les consulter régulièrement.</p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-primary-700 mb-3">3. Conditions d'utilisation</h2>
          <p className="mb-3">L'utilisateur s'engage à utiliser le Site conformément à la loi, aux présentes mentions légales, aux bonnes mœurs et à l'ordre public. Sont expressément interdits :</p>
          <ul className="list-disc pl-6 space-y-1.5">
            <li>Reproduire, distribuer ou modifier le contenu du Site sans l'autorisation expresse de Mkt Web 360 SLU.</li>
            <li>Utiliser le Site à des fins illicites ou contraires à la bonne foi ou à l'ordre public.</li>
            <li>Introduire ou diffuser des virus informatiques ou tout autre système susceptible de causer des dommages au Site ou aux systèmes de tiers.</li>
            <li>Tenter d'accéder, d'utiliser ou de manipuler des données appartenant à Mkt Web 360 SLU, à d'autres utilisateurs ou à des tiers.</li>
            <li>Utiliser des mécanismes d'extraction massive de données (scraping) sans autorisation.</li>
          </ul>
          <p className="mt-3">Mkt Web 360 SLU se réserve le droit de refuser ou de retirer l'accès au Site à tout utilisateur qui ne respecterait pas ces conditions.</p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-primary-700 mb-3">4. Propriété intellectuelle et industrielle</h2>
          <p className="mb-3">L'ensemble du contenu du Site — incluant, sans s'y limiter, les textes, photographies, graphiques, images, vidéos, logos, marques, noms commerciaux, design graphique, code source et logiciels — est la propriété de Mkt Web 360 SLU ou de tiers ayant autorisé leur utilisation, et est protégé par la législation espagnole et internationale sur la propriété intellectuelle et industrielle.</p>
          <p>La reproduction totale ou partielle, la distribution, la communication publique, la transformation ou toute autre utilisation du contenu du Site sans l'autorisation expresse et écrite de Mkt Web 360 SLU est expressément interdite. Tout manquement à cette interdiction pourra donner lieu aux actions judiciaires correspondantes.</p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-primary-700 mb-3">5. Responsabilité et garanties</h2>
          <p className="mb-3">Mkt Web 360 SLU ne garantit pas la disponibilité et la continuité du fonctionnement du Site. Dans la mesure du possible, les interruptions de service seront notifiées à l'avance.</p>
          <p className="mb-3">Mkt Web 360 SLU décline toute responsabilité pour les dommages de toute nature pouvant résulter de l'accès ou de l'utilisation du Site, y compris les dommages causés aux systèmes informatiques des utilisateurs par des virus ou des cyberattaques provenant du Site.</p>
          <p>Le contenu du Site est fourni à titre informatif uniquement. Mkt Web 360 SLU ne garantit pas l'exactitude, l'exhaustivité ou l'actualité des informations publiées et n'assume aucune responsabilité pour les dommages pouvant être causés par les informations contenues sur le Site.</p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-primary-700 mb-3">6. Politique de liens</h2>
          <p className="mb-3">Le Site peut contenir des liens vers des sites web de tiers. Mkt Web 360 SLU n'a aucun contrôle sur ces sites et n'assume aucune responsabilité pour leur contenu, leurs politiques de confidentialité ou leurs pratiques.</p>
          <p>Pour établir un lien vers le Site depuis un autre site web, une demande écrite préalable doit être adressée à Mkt Web 360 SLU via <a href="mailto:info@mktweb360.com" className="text-accent-500 hover:underline">info@mktweb360.com</a>. Les liens depuis des sites dont le contenu est illicite, offensant ou contraire à l'ordre public sont interdits.</p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-primary-700 mb-3">7. Droit applicable et juridiction</h2>
          <p>Les présentes conditions sont régies et interprétées conformément au droit espagnol. Pour la résolution de tout litige, désaccord ou réclamation découlant de l'interprétation ou de l'exécution des présentes mentions légales, les parties se soumettent, avec renonciation expresse à tout autre for applicable, aux tribunaux de la ville de <strong>Toledo (Espagne)</strong>.</p>
        </section>

      </div>
    </div>
  );
}
