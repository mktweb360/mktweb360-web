import Link from "next/link";
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
    title: isEn ? "Instagram Bio for Businesses: What to Include" : "Instagram entreprise : que mettre dans la bio",
    description: isEn ? "How to optimise your Instagram business profile. What to write in your bio, how to attract followers and convert them into customers." : "Comment optimiser votre profil Instagram d'entreprise. Quoi écrire dans votre bio, comment attirer des abonnés et les convertir en clients.",
    alternates: alternatesFor(`/${lang}/instagram-for-businesses/`) ?? {
      canonical: `https://www.mktweb360.com/${lang}/instagram-for-businesses/`,
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
          { label: isEn ? "Instagram bio" : "Bio Instagram" },
        ]} />
        <p className="text-sm text-accent-500 font-semibold mb-2">Social Media</p>
        <IntlArticleJsonLd lang={lang} slug="instagram-for-businesses" headline={isEn ? "Instagram for businesses: what to put in your bio to attract customers" : "Instagram pour les entreprises : quoi mettre dans votre bio pour attirer des clients"} image="/og-instagram-para-empresas-biografia.jpg" />
        <h1 className="text-4xl font-bold text-primary-600 mb-4 leading-tight">
          {isEn ? "Instagram for businesses: what to put in your bio to attract customers" : "Instagram pour les entreprises : quoi mettre dans votre bio pour attirer des clients"}
        </h1>
        <AuthorByline lang={lang} block />
        <p className="text-xl text-gray-500 mb-8 leading-relaxed">
          {isEn ? "Your Instagram bio is the first thing a potential customer sees. You have 150 characters to convince them to follow you or contact you. This guide explains how to make every character count." : "Votre bio Instagram est la première chose qu'un client potentiel voit. Vous avez 150 caractères pour le convaincre de vous suivre ou de vous contacter. Ce guide explique comment faire compter chaque caractère."}
        </p>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-primary-600 mb-4">
            {isEn ? "Why your Instagram bio matters more than you think" : "Pourquoi votre bio Instagram compte plus que vous ne le pensez"}
          </h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {isEn ? "Your Instagram bio has a conversion job to do. When someone discovers your profile — through a search, a hashtag, a tagged post or a recommendation — they land on your profile and make a snap decision about whether to follow, click your link or contact you. A bio that is generic, unclear or incomplete will lose the majority of these visitors. A bio that immediately communicates your value and gives a clear reason to engage will convert them." : "Votre bio Instagram a un travail de conversion à faire. Quand quelqu'un découvre votre profil — via une recherche, un hashtag, un post tagué ou une recommandation — il arrive sur votre profil et prend une décision rapide sur s'il doit vous suivre, cliquer sur votre lien ou vous contacter. Une bio générique, peu claire ou incomplète perdra la majorité de ces visiteurs. Une bio qui communique immédiatement votre valeur et donne une raison claire d'interagir les convertira."}
          </p>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {isEn ? "Instagram bios are also indexed by Google. Having your key service or product keywords in your bio and your display name helps your profile appear in Google search results for relevant queries. This is an often-overlooked SEO benefit of Instagram that requires zero additional effort beyond optimising your bio text." : "Les bios Instagram sont également indexées par Google. Avoir vos mots-clés de service ou de produit principaux dans votre bio et votre nom d'affichage aide votre profil à apparaître dans les résultats de recherche Google pour les requêtes pertinentes. C'est un avantage SEO souvent négligé d'Instagram qui ne nécessite aucun effort supplémentaire au-delà de l'optimisation de votre texte de bio."}
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-primary-600 mb-4">
            {isEn ? "The 5 elements of a perfect business bio" : "Les 5 éléments d'une bio d'entreprise parfaite"}
          </h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {isEn ? "A high-converting business bio contains: 1) A clear statement of what you do and who you serve (not your company name — the algorithm handles that). 2) Your unique value or key differentiator. 3) A social proof element (e.g., '500+ clients served', '10 years experience', 'as seen in [publication]'). 4) A clear call to action aligned with your business objective. 5) A link to a landing page, not your homepage." : "Une bio d'entreprise à haute conversion contient : 1) Une déclaration claire de ce que vous faites et qui vous servez (pas votre nom d'entreprise — l'algorithme s'en charge). 2) Votre valeur unique ou différenciateur clé. 3) Un élément de preuve sociale (ex. '500+ clients servis', '10 ans d'expérience', 'vu dans [publication]'). 4) Un appel à l'action clair aligné avec votre objectif commercial. 5) Un lien vers une page d'atterrissage, pas votre page d'accueil."}
          </p>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {isEn ? "The 150-character limit forces clarity. If you cannot explain what you do and why someone should care in 150 characters, your messaging may be too complex. The constraint is actually useful — it forces you to identify the single most important thing about your business and lead with that." : "La limite de 150 caractères force la clarté. Si vous ne pouvez pas expliquer ce que vous faites et pourquoi quelqu'un devrait s'en soucier en 150 caractères, votre messagerie est peut-être trop complexe. La contrainte est en réalité utile — elle vous force à identifier la chose la plus importante de votre entreprise et à en faire votre accroche."}
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-primary-600 mb-4">
            {isEn ? "How to write your bio in 150 characters" : "Comment rédiger votre bio en 150 caractères"}
          </h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {isEn ? "A practical template: Line 1 — What you do + who you serve. Line 2 — Your key differentiator or value. Line 3 — Social proof or credibility signal. Line 4 — Call to action with emoji arrow pointing to link. Example: 'Websites and SEO for service businesses / No lock-in contracts / Real reviews on Google / Book a free consultation below 👇'. Whatever social proof you use, make sure it is true and verifiable." : "Un modèle pratique : Ligne 1 — Ce que vous faites + qui vous servez. Ligne 2 — Votre différenciateur clé ou valeur. Ligne 3 — Preuve sociale ou signal de crédibilité. Ligne 4 — Appel à l'action avec emoji flèche pointant vers le lien. Exemple : 'Sites web et SEO pour entreprises de services / Sans engagement / Avis réels sur Google / Réservez une consultation gratuite ci-dessous 👇'. Quelle que soit la preuve sociale utilisée, elle doit être vraie et vérifiable."}
          </p>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {isEn ? "Use the name field (not the username) strategically — Instagram allows 30 characters in the display name field and this text is searchable. Include your main service keyword in your display name if it fits naturally: 'Mkt Web 360 | Digital Marketing' makes the profile findable for people searching 'digital marketing' in Instagram search." : "Utilisez le champ nom (pas le nom d'utilisateur) de manière stratégique — Instagram permet 30 caractères dans le champ nom d'affichage et ce texte est cherchable. Incluez votre mot-clé de service principal dans votre nom d'affichage si cela s'intègre naturellement : 'Mkt Web 360 | Marketing Digital' rend le profil trouvable pour les personnes recherchant 'marketing digital' dans la recherche Instagram."}
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-primary-600 mb-4">
            {isEn ? "Link in bio: how to use it effectively" : "Lien en bio : comment l'utiliser efficacement"}
          </h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {isEn ? "Instagram now lets you add several links to your bio, but only the first one is visible at a glance, so it is valuable real estate. Don't waste it on your homepage — people who click your bio link are already interested and need to land on a page that matches the promise of your bio and has a clear action to take. Use a link-in-bio tool like Linktree or later.com to offer multiple destinations if you want to direct traffic to different offers, or use a dedicated landing page." : "Instagram permet désormais d'ajouter plusieurs liens dans la bio, mais seul le premier est visible d'emblée : c'est un emplacement précieux. Ne le gaspillez pas sur votre page d'accueil — les personnes qui cliquent sur votre lien de bio sont déjà intéressées et doivent atterrir sur une page qui correspond à la promesse de votre bio et a une action claire à prendre. Utilisez un outil lien-en-bio comme Linktree ou later.com pour offrir plusieurs destinations si vous voulez diriger le trafic vers différentes offres, ou utilisez une landing page dédiée."}
          </p>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {isEn ? "Track your bio link clicks in Google Analytics by using UTM parameters. This gives you data on how many profile visitors actually click through and what they do next. It is common to find that many of those clicks are lost because the destination page is not ready to convert." : "Suivez les clics sur votre lien de bio dans Google Analytics en utilisant des paramètres UTM. Cela vous donne des données sur combien de visiteurs de profil cliquent réellement et ce qu'ils font ensuite. Il est fréquent de constater qu'une bonne partie de ces clics se perd parce que la page de destination n'est pas prête à convertir."}
          </p>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {isEn ? (
              <>That is why the destination matters as much as the bio: a <Link href="/en/web-design/" className="text-accent-500 hover:underline">fast, mobile-first website with contact one tap away</Link> turns those clicks into enquiries. If your customers are local, many will also look you up on Google afterwards, so keep your <Link href="/en/google-business-profile-service/" className="text-accent-500 hover:underline">Google Business Profile complete and full of reviews</Link>.</>
            ) : (
              <>C&apos;est pourquoi la destination compte autant que la bio : un <Link href="/fr/creation-site-web/" className="text-accent-500 hover:underline">site rapide, pensé pour le mobile, avec le contact à portée de doigt</Link> transforme ces clics en demandes. Si vos clients sont locaux, beaucoup vous chercheront ensuite sur Google : gardez votre <Link href="/fr/gestion-google-business-profile/" className="text-accent-500 hover:underline">fiche Google Business Profile complète et riche en avis</Link>.</>
            )}
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-primary-600 mb-4">
            {isEn ? "Instagram profile mistakes that cost you followers" : "Erreurs de profil Instagram qui vous coûtent des abonnés"}
          </h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {isEn ? "Common Instagram profile mistakes that lose potential followers: a generic bio that says nothing specific ('We help businesses succeed' — everyone says this), no profile photo or an unprofessional one, a username that is hard to find or spell, a private account for a business (public is almost always better), and inconsistency between the bio promise and the actual content posted." : "Erreurs courantes de profil Instagram qui perdent des abonnés potentiels : une bio générique qui ne dit rien de spécifique ('Nous aidons les entreprises à réussir' — tout le monde dit ça), pas de photo de profil ou une peu professionnelle, un nom d'utilisateur difficile à trouver ou épeler, un compte privé pour une entreprise (public est presque toujours mieux), et l'incohérence entre la promesse de bio et le contenu réellement publié."}
          </p>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {isEn ? "The profile photo deserves special attention. For personal brands and solo professionals, a high-quality headshot is most effective. For companies, a clean, recognisable logo on a solid background works best. The photo appears as a small circle in most contexts — ensure it is recognisable at small sizes. Test by viewing your profile on a phone to see how it looks in the real context in which most visitors will see it." : "La photo de profil mérite une attention particulière. Pour les marques personnelles et les professionnels solo, un portrait de haute qualité est le plus efficace. Pour les entreprises, un logo propre et reconnaissable sur un fond uni fonctionne mieux. La photo apparaît comme un petit cercle dans la plupart des contextes — assurez-vous qu'elle est reconnaissable à petite taille. Testez en consultant votre profil sur un téléphone pour voir à quoi il ressemble dans le contexte réel où la plupart des visiteurs le verront."}
          </p>
        </section>

        <BlogBanner
          lang={lang}
          badge={isEn ? "Social media" : "Réseaux sociaux"}
          title={isEn ? "Make Instagram bring you enquiries, not just followers" : "Faites d'Instagram une source de demandes, pas seulement d'abonnés"}
          desc={isEn ? "We manage your profile, posts and bio with one clear goal: that people who discover you on Instagram end up messaging you or visiting your website." : "Nous gérons votre profil, vos publications et votre bio avec un objectif clair : que les personnes qui vous découvrent sur Instagram finissent par vous écrire ou visiter votre site."}
          cta={isEn ? "See social media management" : "Voir la gestion des réseaux sociaux"}
          href={isEn ? "/en/social-media-marketing/" : "/fr/marketing-reseaux-sociaux/"}
          secondary={{ text: isEn ? "Prefer to start with a free audit of your online presence?" : "Vous préférez commencer par un audit gratuit de votre présence en ligne ?", href: isEn ? "/en/digital-audit/" : "/fr/audit-digital/" }}
        />
        <section className="mw-skin-cta text-white rounded-3xl p-8 mt-12">
          <h2 className="text-2xl font-bold mb-4">
            {isEn ? "Want help with your Instagram profile?" : "Besoin d'aide avec votre profil Instagram ?"}
          </h2>
          <p className="text-primary-200 mb-6">
            {isEn ? "Send us your profile and tell us what you sell. We will tell you what we would change in your bio, your link and your content." : "Envoyez-nous votre profil et dites-nous ce que vous vendez. Nous vous dirons ce que nous changerions dans votre bio, votre lien et vos contenus."}
          </p>
          <div className="rounded-3xl bg-white p-6 sm:p-8 text-gray-900 shadow-[0_30px_80px_-30px_rgba(0,0,0,0.6)] ring-1 ring-white/10">
            <ContactForm formType={`blog-${lang}`} />
          </div>
        </section>
      </div>
      <RelatedArticles category="Social Media" />
    </>
  );
}
