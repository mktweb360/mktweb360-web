import { Breadcrumbs } from "@/components/Breadcrumbs";
import { BlogBanner } from "@/components/BlogBanner";
import { alternatesFor } from "@/lib/i18n/routes";
import Link from "next/link";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const isEn = lang === "en";
  return {
    title: isEn
      ? "How to Create a Landing Page That Converts — Practical Guide"
      : "Comment créer une landing page qui convertit — guide pratique",
    description: isEn
      ? "Learn how to create landing pages that turn visitors into leads and customers. Structure, copy, CTAs and mistakes to avoid. Guide with real examples."
      : "Apprenez à créer des landing pages qui transforment les visites en leads et clients. Structure, copywriting, CTA et erreurs à éviter. Guide avec exemples réels.",
    alternates: alternatesFor(`/${lang}/how-to-create-landing-page-that-converts/`) ?? {
      canonical: `https://www.mktweb360.com/${lang}/how-to-create-landing-page-that-converts/`,
    },
    openGraph: {
      title: isEn
        ? "How to Create a Landing Page That Converts — Practical Guide | Mkt Web 360"
        : "Comment créer une landing page qui convertit — guide pratique | Mkt Web 360",
      description: isEn
        ? "Learn how to create landing pages that turn visitors into leads and customers. Structure, copy, CTAs and mistakes to avoid. Guide with real examples."
        : "Apprenez à créer des landing pages qui transforment les visites en leads et clients. Structure, copywriting, CTA et erreurs à éviter. Guide avec exemples réels.",
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
            {
              label: isEn
                ? "Landing pages that convert"
                : "Landing pages qui convertissent",
            },
          ]}
        />

        <p className="text-sm text-accent-500 font-semibold mb-2">
          {isEn ? "Web Design" : "Web Design"}
        </p>
        <h1 className="text-4xl font-bold text-primary-600 mb-4 leading-tight">
          {isEn
            ? "How to create a landing page that converts visitors into customers"
            : "Comment créer une landing page qui convertit les visiteurs en clients"}
        </h1>
        <p className="text-xl text-gray-500 mb-8 leading-relaxed">
          {isEn
            ? "A well-designed landing page can multiply your conversions by 3 without investing more in advertising. This guide explains the structure, the copy and the elements that make the difference."
            : "Une landing page bien conçue peut multiplier vos conversions par 3 sans investir davantage en publicité. Ce guide explique la structure, le copywriting et les éléments qui font la différence."}
        </p>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-primary-600 mb-4">
            {isEn
              ? "What is a landing page and what is it for"
              : "Qu'est-ce qu'une landing page et à quoi sert-elle"}
          </h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {isEn
              ? "A landing page is a web page designed with a single objective: to get the visitor to take a specific action. That action might be filling in a form, calling by phone, downloading a resource, buying a product or subscribing to a newsletter."
              : "Une landing page est une page web conçue avec un seul objectif : amener le visiteur à effectuer une action concrète. Cette action peut être remplir un formulaire, appeler par téléphone, télécharger une ressource, acheter un produit ou s'abonner à une newsletter."}
          </p>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {isEn
              ? "Unlike a website's home page, which offers multiple navigation options and presents the entire company, a landing page eliminates distractions and directs the user towards a single decision. This concentration of focus is exactly what makes it more effective than any other page on a standard corporate website."
              : "Contrairement à la page d'accueil d'un site web, qui offre de multiples options de navigation et présente toute l'entreprise, une landing page élimine les distractions et dirige l'utilisateur vers une décision unique. Cette concentration du focus est exactement ce qui la rend plus efficace que toute autre page d'un site corporate standard."}
          </p>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {isEn
              ? "Landing pages are particularly important in paid advertising campaigns (Google Ads, Meta Ads) because when someone clicks your ad, they are at the peak of their intent. If you send them to your home page instead of a page specifically designed to convert that intent, you are wasting the cost of that click."
              : "Les landing pages sont particulièrement importantes dans les campagnes de publicité payante (Google Ads, Meta Ads) car lorsque quelqu'un clique sur votre annonce, il est au pic de son intention. Si vous l'envoyez sur votre page d'accueil plutôt que sur une page spécialement conçue pour convertir cette intention, vous gaspillez le coût de ce clic."}
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-primary-600 mb-4">
            {isEn
              ? "Structure of a converting landing page"
              : "Structure d'une landing page qui convertit"}
          </h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {isEn
              ? "There is no universal perfect structure, but there are components that appear consistently in landing pages with the highest conversion rates."
              : "Il n'existe pas de structure universelle parfaite, mais il y a des composants qui apparaissent systématiquement dans les landing pages avec les taux de conversion les plus élevés."}
          </p>
          <p className="text-gray-600 mb-4 leading-relaxed">
            <strong>{isEn ? "Hero section:" : "Section hero :"}</strong>{" "}
            {isEn
              ? "The area visible without scrolling (above the fold) is the most critical. It must include a headline communicating the main benefit, a subheadline expanding or qualifying it, and a clear and visible CTA (Call to Action). In many cases a relevant image or video also helps establish context."
              : "La zone visible sans défilement (above the fold) est la plus critique. Elle doit inclure un titre qui communique le bénéfice principal, un sous-titre qui l'amplifie ou le nuance, et un CTA (Call to Action) clair et visible. Dans de nombreux cas, une image ou une vidéo pertinente aide également à établir le contexte."}
          </p>
          <p className="text-gray-600 mb-4 leading-relaxed">
            <strong>{isEn ? "Value proposition:" : "Proposition de valeur :"}</strong>{" "}
            {isEn
              ? "Why you and not someone else. What makes you different, better or more suitable for the user's needs. Can be presented as a list of benefits, a comparison with alternatives or a 'how it works' section."
              : "Pourquoi vous et pas un autre. Ce qui vous rend différent, meilleur ou plus adapté aux besoins de l'utilisateur. Peut être présenté comme une liste de bénéfices, une comparaison avec l'alternative ou une section 'comment ça fonctionne'."}
          </p>
          <p className="text-gray-600 mb-4 leading-relaxed">
            <strong>{isEn ? "Social proof:" : "Preuve sociale :"}</strong>{" "}
            {isEn
              ? "Reviews, testimonials, client logos, case studies, results figures. Social proof reduces perceived risk and is one of the elements with the greatest impact on conversion."
              : "Avis, témoignages, logos de clients, études de cas, chiffres de résultats. La preuve sociale réduit le risque perçu et est l'un des éléments ayant le plus grand impact sur la conversion."}
          </p>
          <p className="text-gray-600 mb-4 leading-relaxed">
            <strong>{isEn ? "Form or final CTA:" : "Formulaire ou CTA final :"}</strong>{" "}
            {isEn
              ? "The conversion point must be visible without much scrolling and repeated at the bottom of the page. Shorter forms convert better: only ask for what you need at this moment."
              : "Le point de conversion doit être visible sans trop de défilement et se répéter en bas de page. Les formulaires plus courts convertissent mieux : demandez uniquement ce dont vous avez besoin pour l'instant."}
          </p>
          <p className="text-gray-600 mb-4 leading-relaxed">
            <strong>{isEn ? "Guarantee or risk management:" : "Garantie ou gestion du risque :"}</strong>{" "}
            {isEn
              ? "A money-back guarantee, a free no-commitment consultation or a clear privacy policy all reduce friction at the moment of decision."
              : "Une garantie de remboursement, une consultation gratuite sans engagement ou une politique de confidentialité claire réduisent la friction au moment de la décision."}
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-primary-600 mb-4">
            {isEn
              ? "How to write a headline that hooks"
              : "Comment écrire un titre qui accroche"}
          </h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {isEn
              ? "The headline is the most important element of your landing page. If it does not get the user to keep reading, the rest does not matter. A good headline meets three conditions: it is clear (the user immediately understands what you offer), it is relevant to the intent with which they arrived and it communicates a benefit or solves a problem."
              : "Le titre est l'élément le plus important de votre landing page. S'il ne parvient pas à faire continuer la lecture à l'utilisateur, le reste n'a pas d'importance. Un bon titre remplit trois conditions : il est clair (l'utilisateur comprend immédiatement ce que vous proposez), il est pertinent par rapport à l'intention avec laquelle il est arrivé et il communique un bénéfice ou résout un problème."}
          </p>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {isEn
              ? "The most effective headline formulas are: the direct benefit ('Get 10 new customers per month with local SEO'), the transformation ('From invisible on Google to first position in 90 days'), and the pain-point question ('Are you investing in advertising and seeing no results?')."
              : "Les formules de titre les plus efficaces sont : le bénéfice direct ('Obtenez 10 nouveaux clients par mois avec le SEO local'), la transformation ('De invisible sur Google à première position en 90 jours'), et la question qui touche la douleur ('Vous investissez en publicité et ne voyez pas de résultats ?')."}
          </p>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {isEn
              ? "Avoid vague, corporate headlines like 'Integrated marketing solutions for businesses'. Nobody identifies with that. Be specific about who it is aimed at and what problem it solves. Always test at least two versions of your headline with an A/B test if you have enough traffic. Changing the headline can double the conversion rate without modifying anything else on the page."
              : "Évitez les titres vagues et corporatifs comme 'Solutions marketing intégrées pour les entreprises'. Personne ne s'y identifie. Soyez spécifique sur le public ciblé et le problème résolu. Testez toujours au moins deux versions de votre titre avec un test A/B si vous avez suffisamment de trafic. Changer le titre peut doubler le taux de conversion sans modifier quoi que ce soit d'autre sur la page."}
          </p>
        </section>

        <BlogBanner lang={lang} />

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-primary-600 mb-4">
            {isEn
              ? "The perfect CTA: how to design it and where to place it"
              : "Le CTA parfait : comment le concevoir et où le placer"}
          </h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {isEn
              ? "The Call to Action is the button, link or form that defines the conversion. Its design, text and position have an enormous impact on the conversion rate."
              : "Le Call to Action est le bouton, le lien ou le formulaire qui définit la conversion. Sa conception, son texte et sa position ont un impact énorme sur le taux de conversion."}
          </p>
          <p className="text-gray-600 mb-4 leading-relaxed">
            <strong>{isEn ? "CTA text:" : "Texte du CTA :"}</strong>{" "}
            {isEn
              ? "Avoid the generic 'Submit' or 'More information'. The button text must communicate the benefit of clicking: 'I want my free audit', 'Request a no-commitment quote', 'Download guide now'. First-person converts better than second-person."
              : "Évitez le générique 'Envoyer' ou 'En savoir plus'. Le texte du bouton doit communiquer le bénéfice du clic : 'Je veux mon audit gratuit', 'Demander un devis sans engagement', 'Télécharger le guide maintenant'. La première personne convertit mieux que la deuxième."}
          </p>
          <p className="text-gray-600 mb-4 leading-relaxed">
            <strong>{isEn ? "Design:" : "Design :"}</strong>{" "}
            {isEn
              ? "The CTA must visually contrast with the rest of the page. If the background is white and the text is black, the button must be a colour that stands out clearly. Size matters: too small it gets ignored, too large it seems aggressive."
              : "Le CTA doit contraster visuellement avec le reste de la page. Si le fond est blanc et le texte noir, le bouton doit être d'une couleur qui se démarque clairement. La taille compte : trop petit il est ignoré, trop grand il paraît agressif."}
          </p>
          <p className="text-gray-600 mb-4 leading-relaxed">
            <strong>{isEn ? "Position:" : "Position :"}</strong>{" "}
            {isEn
              ? "The first CTA must be visible without scrolling (above the fold). Repeat the CTA throughout the page, especially after each block of relevant information. For long pages, a fixed CTA in the top or side bar improves accessibility."
              : "Le premier CTA doit être visible sans défilement (above the fold). Répétez le CTA tout au long de la page, surtout après chaque bloc d'informations pertinentes. Pour les pages longues, un CTA fixe dans la barre supérieure ou latérale améliore l'accessibilité."}
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-primary-600 mb-4">
            {isEn
              ? "Most common mistakes on landing pages"
              : "Erreurs les plus courantes sur les landing pages"}
          </h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            <strong>{isEn ? "Too many objectives:" : "Trop d'objectifs :"}</strong>{" "}
            {isEn
              ? "A landing page with multiple CTAs (call us, write to us, follow us on Instagram, subscribe) creates confusion and reduces conversions. One objective, one primary CTA."
              : "Une landing page avec plusieurs CTA (appelez-nous, écrivez-nous, suivez-nous sur Instagram, abonnez-vous) crée de la confusion et réduit les conversions. Un objectif, un CTA principal."}
          </p>
          <p className="text-gray-600 mb-4 leading-relaxed">
            <strong>{isEn ? "Full navigation menu:" : "Menu de navigation complet :"}</strong>{" "}
            {isEn
              ? "Including your website's full menu on the landing page invites users to navigate away instead of converting. Remove the menu or reduce exit options to a minimum."
              : "Inclure le menu complet de votre site web sur la landing page invite l'utilisateur à naviguer ailleurs plutôt que de convertir. Supprimez le menu ou réduisez les options de sortie au minimum."}
          </p>
          <p className="text-gray-600 mb-4 leading-relaxed">
            <strong>{isEn ? "Form too long:" : "Formulaire trop long :"}</strong>{" "}
            {isEn
              ? "Every additional field in a form reduces the conversion rate. If you do not need the phone number right now, do not ask for it. If the address is not necessary for the first contact, do not include it."
              : "Chaque champ supplémentaire dans un formulaire réduit le taux de conversion. Si vous n'avez pas besoin du numéro de téléphone pour l'instant, ne le demandez pas. Si l'adresse n'est pas nécessaire pour le premier contact, ne l'incluez pas."}
          </p>
          <p className="text-gray-600 mb-4 leading-relaxed">
            <strong>{isEn ? "Slow loading speed:" : "Vitesse de chargement lente :"}</strong>{" "}
            {isEn
              ? "Every additional second of load time reduces conversion by an average of 7%. Optimise images, use good hosting and eliminate unnecessary scripts."
              : "Chaque seconde supplémentaire de chargement réduit la conversion de 7 % en moyenne. Optimisez les images, utilisez un bon hébergement et éliminez les scripts inutiles."}
          </p>
          <p className="text-gray-600 mb-4 leading-relaxed">
            <strong>{isEn ? "Not adapted for mobile:" : "Non adaptée au mobile :"}</strong>{" "}
            {isEn
              ? "More than 60% of web traffic comes from mobile devices. A landing page that does not work well on mobile is losing more than half of potential conversions."
              : "Plus de 60 % du trafic web provient des appareils mobiles. Une landing page qui ne fonctionne pas bien sur mobile perd plus de la moitié des conversions potentielles."}
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-primary-600 mb-4">
            {isEn
              ? "How to measure and optimise your landing page performance"
              : "Comment mesurer et optimiser la performance de votre landing page"}
          </h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {isEn
              ? "The conversion rate is the primary metric: the percentage of visitors who complete the page objective. A conversion rate of 2–5% is good for many sectors, but the range varies widely depending on the sector, the type of offer and the traffic temperature (cold vs. qualified)."
              : "Le taux de conversion est la métrique principale : le pourcentage de visiteurs qui complètent l'objectif de la page. Un taux de conversion de 2 à 5 % est bon pour de nombreux secteurs, mais la plage varie beaucoup selon le secteur, le type d'offre et la température du trafic (froid vs. qualifié)."}
          </p>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {isEn
              ? "To optimise a landing page you need data. Google Analytics 4 with configured events tells you how many users arrive, how many complete the form and at what point on the page they leave. Heatmap tools like Hotjar or Microsoft Clarity show exactly where people click and how far they scroll, revealing where interest is lost."
              : "Pour optimiser une landing page, vous avez besoin de données. Google Analytics 4 avec des événements configurés vous indique combien d'utilisateurs arrivent, combien complètent le formulaire et à quel point de la page ils abandonnent. Les outils de cartes de chaleur comme Hotjar ou Microsoft Clarity montrent exactement où les gens cliquent et jusqu'où ils font défiler, révélant où l'intérêt se perd."}
          </p>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {isEn
              ? "A/B tests are the most rigorous way to optimise. Test one variable at a time (headline, CTA colour, form length, hero image) with enough traffic to obtain statistically significant results. A 20–30% improvement in conversion rate equals 20–30% more leads with the same advertising budget."
              : "Les tests A/B sont la façon la plus rigoureuse d'optimiser. Testez une variable à la fois (titre, couleur du CTA, longueur du formulaire, image hero) avec suffisamment de trafic pour obtenir des résultats statistiquement significatifs. Une amélioration de 20 à 30 % du taux de conversion équivaut à 20 à 30 % de leads en plus avec le même budget publicitaire."}
          </p>
        </section>

        <section className="bg-primary-600 text-white rounded-2xl p-8 mt-12">
          <h2 className="text-2xl font-bold mb-4">
            {isEn
              ? "Need help with your digital marketing?"
              : "Besoin d'aide avec votre marketing digital ?"}
          </h2>
          <p className="text-primary-200 mb-6">
            {isEn
              ? "Tell us about your project and we will respond within 24 hours."
              : "Parlez-nous de votre projet et nous vous répondrons dans les 24 heures."}
          </p>
          <Link
            href={`/${lang}/contact/`}
            className="inline-block bg-accent-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-accent-600 transition-colors"
          >
            {isEn ? "Contact us" : "Nous contacter"}
          </Link>
        </section>

        <nav className="mt-12 pt-8 border-t border-gray-200">
          <Link
            href={`/${lang}/blog/`}
            className="text-accent-500 hover:text-accent-600 font-medium text-sm"
          >
            {isEn ? "← Back to blog" : "← Retour au blog"}
          </Link>
        </nav>
      </div>
    </>
  );
}
