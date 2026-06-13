import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ContactForm } from "@/components/ContactForm";
import { BlogBanner } from "@/components/BlogBanner";
import { RelatedArticles } from "@/components/RelatedArticles";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const isEn = lang === "en";
  return {
    title: isEn
      ? "How Much Does a Professional Website Cost? | Mkt Web 360"
      : "Combien coûte un site web professionnel ? | Mkt Web 360",
    description: isEn
      ? "What really influences the price of a professional website, what it should include and how to compare quotes."
      : "Ce qui influence vraiment le prix d'un site web professionnel, ce qu'il doit inclure et comment comparer les devis.",
    alternates: {
      canonical: `https://www.mktweb360.com/${lang}/${lang === "en" ? "how-much-does-a-website-cost" : "combien-coute-site-web"}/`,
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
            { label: isEn ? "Website cost" : "Coût site web" },
          ]}
        />
        <p className="text-sm text-accent-500 font-semibold mb-2">Web Design</p>
        <h1 className="text-4xl font-bold text-primary-600 mb-4 leading-tight">
          {isEn
            ? "How much does a professional website cost in 2025?"
            : "Combien coûte un site web professionnel en 2025 ?"}
        </h1>
        <p className="text-xl text-gray-500 mb-8 leading-relaxed">
          {isEn
            ? "The price of a professional website can range from 500€ to 50,000€. This guide explains what really influences the price and how to get value for money."
            : "Le prix d'un site web professionnel peut varier de 500€ à 50 000€. Ce guide explique ce qui influence vraiment le prix et comment obtenir un bon rapport qualité-prix."}
        </p>

        <h2 className="text-2xl font-bold text-primary-600 mt-10 mb-4">
          {isEn ? "Why website prices vary so much" : "Pourquoi les prix des sites web varient autant"}
        </h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          {isEn
            ? "The price depends on the technology used, whether the design is custom or templated, the number of pages and sections, integrations required (payments, CRM, booking systems) and ongoing support. A 500€ website uses a template with minimal customisation. A 10,000€ website is built from scratch with custom design and multiple integrations."
            : "Le prix dépend de la technologie utilisée, du fait que le design soit personnalisé ou basé sur un modèle, du nombre de pages et de sections, des intégrations requises (paiements, CRM, systèmes de réservation) et du support continu. Un site web à 500€ utilise un modèle avec une personnalisation minimale. Un site web à 10 000€ est construit de zéro avec un design personnalisé et plusieurs intégrations."}
        </p>
        <p className="text-gray-600 leading-relaxed mb-4">
          {isEn
            ? "Another major factor is who builds it. A freelancer working alone charges less but delivers a single person's capacity. An agency has more resources, quality control and continuity — but costs more. Neither is inherently better; it depends on the complexity of your project."
            : "Un autre facteur majeur est qui le construit. Un freelance travaillant seul facture moins mais livre la capacité d'une seule personne. Une agence a plus de ressources, un contrôle qualité et une continuité — mais coûte plus cher. Ni l'un ni l'autre n'est intrinsèquement meilleur ; cela dépend de la complexité de votre projet."}
        </p>

        <h2 className="text-2xl font-bold text-primary-600 mt-10 mb-4">
          {isEn ? "Types of websites and their price ranges" : "Types de sites web et leurs fourchettes de prix"}
        </h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          {isEn
            ? "Landing page (1 page): 500–1,500€. Simple corporate website (5–8 pages): 1,500–4,000€. Professional corporate website with custom design: 3,000–8,000€. Basic online store (up to 100 products): 2,500–6,000€. Advanced online store with integrations: 5,000–15,000€+."
            : "Page d'atterrissage (1 page) : 500 à 1 500€. Site corporate simple (5 à 8 pages) : 1 500 à 4 000€. Site corporate professionnel avec design personnalisé : 3 000 à 8 000€. Boutique en ligne basique (jusqu'à 100 produits) : 2 500 à 6 000€. Boutique en ligne avancée avec intégrations : 5 000 à 15 000€+."}
        </p>
        <p className="text-gray-600 leading-relaxed mb-4">
          {isEn
            ? "These ranges assume professional development with technical SEO included. If you see prices significantly below these, ask what is NOT included. Hidden costs often come from hosting, domain, SSL, maintenance, updates and post-delivery support."
            : "Ces fourchettes supposent un développement professionnel avec le SEO technique inclus. Si vous voyez des prix significativement inférieurs, demandez ce qui N'est PAS inclus. Les coûts cachés viennent souvent de l'hébergement, du domaine, du SSL, de la maintenance, des mises à jour et du support post-livraison."}
        </p>

        <h2 className="text-2xl font-bold text-primary-600 mt-10 mb-4">
          {isEn ? "What a professional website must include" : "Ce qu'un site web professionnel doit inclure"}
        </h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          {isEn
            ? "At minimum, a professional website must include: custom design (not a template), mobile-first responsive design, technical SEO from day one (meta tags, structured data, speed optimisation), a content management system you can use without technical knowledge, and Core Web Vitals optimised (Google's speed metrics)."
            : "Au minimum, un site web professionnel doit inclure : un design personnalisé (pas un modèle), un design responsive mobile-first, un SEO technique dès le premier jour (balises meta, données structurées, optimisation de la vitesse), un système de gestion de contenu que vous pouvez utiliser sans connaissances techniques, et des Core Web Vitals optimisés (les métriques de vitesse de Google)."}
        </p>
        <p className="text-gray-600 leading-relaxed mb-4">
          {isEn
            ? "Also insist on: security (SSL, regular backups, updates), training so you can manage the site yourself, post-delivery support for at least 30 days, and clarity on who owns the code and domain when the project ends."
            : "Insistez également sur : la sécurité (SSL, sauvegardes régulières, mises à jour), une formation pour gérer le site vous-même, un support post-livraison d'au moins 30 jours, et la clarté sur qui possède le code et le domaine à la fin du projet."}
        </p>

        <h2 className="text-2xl font-bold text-primary-600 mt-10 mb-4">
          {isEn ? "Agency vs freelancer vs DIY: real comparison" : "Agence vs freelance vs DIY : comparaison réelle"}
        </h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          {isEn
            ? "DIY platforms (Wix, Squarespace): cheap (10–30€/month) but with severe limitations for SEO, customisation and performance. Acceptable for a temporary or very small presence, not for a serious business. Freelancer: lower cost (30–60% less than an agency) but single point of failure — if they disappear, who maintains the site? Agency: higher investment but team, quality control, accountability and a full service beyond the initial build."
            : "Plateformes DIY (Wix, Squarespace) : bon marché (10 à 30€/mois) mais avec des limitations sévères pour le SEO, la personnalisation et les performances. Acceptable pour une présence temporaire ou très petite, pas pour une entreprise sérieuse. Freelance : coût inférieur (30 à 60% de moins qu'une agence) mais point de défaillance unique — s'il disparaît, qui maintient le site ? Agence : investissement plus élevé mais équipe, contrôle qualité, responsabilité et service complet au-delà de la construction initiale."}
        </p>

        <h2 className="text-2xl font-bold text-primary-600 mt-10 mb-4">
          {isEn ? "Red flags in web design quotes" : "Red flags dans les devis de création web"}
        </h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          {isEn
            ? "Be cautious when you see: a price unusually low for the scope described (ask why), no mention of SEO in the deliverables, a proprietary CMS that locks you into the provider, no post-delivery support included, or vague descriptions with no itemised breakdown."
            : "Soyez prudent quand vous voyez : un prix anormalement bas pour la portée décrite (demandez pourquoi), aucune mention du SEO dans les livrables, un CMS propriétaire qui vous verrouille chez le prestataire, aucun support post-livraison inclus, ou des descriptions vagues sans ventilation détaillée."}
        </p>
        <p className="text-gray-600 leading-relaxed mb-4">
          {isEn
            ? "A good quote is detailed, explains what is included and what is not, has a clear timeline, and specifies ownership of the final deliverables. If a provider is vague on any of these points, that is a warning sign."
            : "Un bon devis est détaillé, explique ce qui est inclus et ce qui ne l'est pas, a un calendrier clair et précise la propriété des livrables finaux. Si un prestataire est vague sur l'un de ces points, c'est un signal d'alarme."}
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
      <RelatedArticles category="Web Design" />
    </>
  );
}
