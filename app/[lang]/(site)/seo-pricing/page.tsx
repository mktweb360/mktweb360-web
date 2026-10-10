import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ContactForm } from "@/components/ContactForm";
import { RelatedArticles } from "@/components/RelatedArticles";
import { CalculadoraSeo } from "@/components/CalculadoraSeo";
import { alternatesFor, langSlug } from "@/lib/i18n/routes";
import { planesSeo, extrasSeo, condicionesComunes, precioTexto } from "@/lib/planes-seo";

// 09/10/2026 — EN/FR de /precios-seo/. Precios, límites y lógica de la calculadora salen de
// lib/planes-seo.ts (fuente única); aquí solo van los textos de la página.
// Esta carpeta sirve /en/seo-pricing/; /fr/tarifs-seo/ reexporta este módulo.
// La landing «Web + 6 meses de SEO» solo existe en ES: en EN/FR se muestra el precio sin enlace.

const BASE = "https://www.mktweb360.com";

const C = {
  en: {
    title: "SEO Pricing: How Much Does SEO Cost a Month?",
    description:
      "SEO pricing by website size: from €199/month + VAT for professionals, €349/month for SMEs and plans for online stores. Find your plan, with no minimum term.",
    ogTitle: "SEO Pricing: How Much Does SEO Cost a Month? | Mkt Web 360",
    ogDescription: "Published SEO rates, what each one includes and what makes the price of an SEO project vary.",
    ogAlt: "SEO pricing — Mkt Web 360",
    home: "Home",
    crumb: "SEO pricing",
    h1: "SEO pricing: how much it costs",
    h1Accent: "to rank your website on Google",
    intro:
      "We publish our rates and what each one includes. No small print: price, service limits and what is not included, so that you can compare with sound judgement.",
    calcTitle: "Work out your SEO plan",
    calcSub:
      "Four questions about your website and we will tell you which plan fits and how much it costs. The price follows the real workload: a professional's website with four services is not the same as a store with a hundred categories.",
    plansTitle: "Monthly SEO plans",
    seeDetail: "See the details",
    requestPlan: "Request this plan",
    extrasTitle: "Extras",
    extrasNote: "Quoted on a case-by-case basis.",
    conditionsTitle: "Conditions for all plans",
    others: [
      { name: "Professional website + 6 months of SEO", price: "€999 + VAT", note: "One-off payment · website only from €249 + VAT" },
      { name: "SEO consultancy", price: "Custom quote", note: "Diagnosis, strategy and a prioritised plan for in-house teams", slug: "seo-consultant", cta: "See the consultancy" },
    ],
    factorsTitle: "What makes the price of SEO vary",
    factorsSub:
      "The price of an SEO project depends above all on the real work that needs doing each month. These are the factors that weigh most when we prepare a custom quote.",
    factors: [
      { t: "Size and condition of the website", d: "Ranking a well-built 10-page website does not cost the same as ranking a store with thousands of products, accumulated technical errors or several languages." },
      { t: "Competition for the searches", d: "Searches where brands with a lot of authority compete require more content, more time and more reputation work than searches in a niche or a specific area." },
      { t: "Geographic scope", d: "A local strategy, focused on Google Maps and the business listing, has a different scope from a national or international strategy." },
      { t: "Volume of content", d: "How many new or improved pages are produced each month is one of the factors that most influences the monthly cost." },
      { t: "Who does the work", d: "If your team or your developer applies the changes, consultancy is enough; if we do everything, the service includes the execution." },
      { t: "Additional channels", d: "Visibility in AI assistants (GEO) and the Google Business Profile listing can be added to SEO; in our monthly package they are already included." },
    ],
    compareTitle: "How to compare SEO quotes",
    compare: [
      "Two quotes with the same price can include very different work. Before deciding, ask for each proposal to detail how many pieces of content are produced each month, which technical changes are applied and who applies them, how progress is measured and with which data source.",
      "Be wary of ranking guarantees, of reports without access to your own tools (Search Console and Google Analytics should be in your name) and of fixed-price link packages that do not explain where the links are published.",
    ],
    costBefore: "If you want a broader reference for digital marketing costs, see ",
    costAgency: "how much a digital marketing agency costs",
    costMiddle: "; and if you are considering a new website, ",
    costWeb: "how much a professional website costs",
    costAfter: ".",
    faqTitle: "Frequently asked questions about SEO pricing",
    faqs: [
      { q: "How much does SEO cost per month?", a: "It depends on the size of the website and the workload: from €199/month + VAT for a professional with a website of up to 10 pages, €349/month + VAT for an SME with a website of up to 30 pages, €590/month + VAT for larger websites or those with several locations, and from €449/month + VAT for online stores. The calculator on this page shows you the plan that fits your case." },
      { q: "Is there a minimum term?", a: "No. The monthly service has no minimum term. The usual approach is to assess the results with Search Console data after a few months, because SEO needs time to be reflected in rankings." },
      { q: "Why are SEO quotes on the market so different?", a: "Because different things are being compared: an automated report, consultancy without execution, or a service with content, technical changes and monthly monitoring. Before comparing prices, compare what each proposal includes, how many pieces of content per month, who does the work and how it is measured." },
      { q: "Do you guarantee rankings for that price?", a: "No. Nobody can guarantee rankings on Google. What the price includes is the work described, with monthly reports and metrics that let you check how things are progressing." },
      { q: "Does the price include link building?", a: "No. The monthly package does not include buying links. If your project needs it, we propose it separately, with a quote and explicit quality criteria." },
      { q: "Do the prices include VAT?", a: "No. All prices on this page are shown excluding VAT." },
    ],
    contactTitle: "Request your SEO quote",
    contactSub: "Tell us your website and your goals. We will reply with a fixed proposal.",
    related: "More about SEO and rankings",
    schemaName: "Search engine optimisation (SEO)",
    country: "Spain",
  },
  fr: {
    title: "Tarifs SEO : combien coûte le référencement ?",
    description:
      "Tarifs SEO selon la taille du site : dès 199 €/mois HT pour les professionnels, 349 €/mois pour les PME et des formules e-commerce. Sans engagement.",
    ogTitle: "Tarifs SEO : combien coûte le référencement ? | Mkt Web 360",
    ogDescription: "Des tarifs SEO publiés, ce que comprend chacun d'eux et ce qui fait varier le prix d'un projet de référencement.",
    ogAlt: "Tarifs SEO — Mkt Web 360",
    home: "Accueil",
    crumb: "Tarifs SEO",
    h1: "Tarifs SEO : combien coûte",
    h1Accent: "le positionnement de votre site sur Google",
    intro:
      "Nous publions nos tarifs et ce que comprend chacun d'eux. Pas de petites lignes : prix, limites du service et ce qui n'est pas inclus, pour que vous puissiez comparer en connaissance de cause.",
    calcTitle: "Calculez votre formule SEO",
    calcSub:
      "Quatre questions sur votre site et nous vous indiquons la formule adaptée et son prix. Le prix suit la charge de travail réelle : le site d'un professionnel avec quatre services n'a rien à voir avec une boutique de cent catégories.",
    plansTitle: "Formules SEO mensuelles",
    seeDetail: "Voir le détail",
    requestPlan: "Demander cette formule",
    extrasTitle: "Options",
    extrasNote: "Chiffrées au cas par cas.",
    conditionsTitle: "Conditions communes à toutes les formules",
    others: [
      { name: "Site professionnel + 6 mois de SEO", price: "999 € HT", note: "Paiement unique · site seul à partir de 249 € HT" },
      { name: "Conseil SEO", price: "Sur devis", note: "Diagnostic, stratégie et plan priorisé pour les équipes internes", slug: "seo-consultant", cta: "Voir le conseil SEO" },
    ],
    factorsTitle: "Ce qui fait varier le prix du SEO",
    factorsSub:
      "Le prix d'un projet SEO dépend surtout du travail réel à fournir chaque mois. Voici les facteurs qui pèsent le plus lorsque nous préparons un devis sur mesure.",
    factors: [
      { t: "Taille et état du site", d: "Positionner un site de 10 pages bien construit ne coûte pas la même chose qu'une boutique avec des milliers de produits, des erreurs techniques accumulées ou plusieurs langues." },
      { t: "Concurrence sur les recherches", d: "Les recherches sur lesquelles se battent des marques à forte autorité exigent plus de contenu, plus de temps et plus de travail de réputation que celles d'une niche ou d'une zone précise." },
      { t: "Portée géographique", d: "Une stratégie locale, centrée sur Google Maps et la fiche d'établissement, n'a pas la même portée qu'une stratégie nationale ou internationale." },
      { t: "Volume de contenus", d: "Le nombre de pages nouvelles ou améliorées produites chaque mois est l'un des facteurs qui influent le plus sur le coût mensuel." },
      { t: "Qui exécute", d: "Si votre équipe ou votre développeur applique les modifications, le conseil suffit ; si nous faisons tout, le service inclut la mise en œuvre." },
      { t: "Canaux supplémentaires", d: "La visibilité dans les assistants d'IA (GEO) et la fiche Google Business Profile peuvent s'ajouter au SEO ; dans notre formule mensuelle, elles sont déjà incluses." },
    ],
    compareTitle: "Comment comparer des devis SEO",
    compare: [
      "Deux devis au même prix peuvent inclure des travaux très différents. Avant de décider, demandez que chaque proposition détaille combien de contenus sont produits par mois, quelles modifications techniques sont appliquées et par qui, comment l'avancement est mesuré et avec quelle source de données.",
      "Méfiez-vous des garanties de position, des rapports sans accès à vos propres outils (Search Console et Google Analytics doivent être à votre nom) et des packs de liens à prix fixe qui n'expliquent pas où les liens sont publiés.",
    ],
    costBefore: "Pour une référence plus large sur les coûts du marketing digital, consultez ",
    costAgency: "combien coûte une agence de marketing digital",
    costMiddle: " ; et si vous envisagez un nouveau site, ",
    costWeb: "combien coûte un site web professionnel",
    costAfter: ".",
    faqTitle: "Questions fréquentes sur les tarifs SEO",
    faqs: [
      { q: "Combien coûte le SEO par mois ?", a: "Cela dépend de la taille du site et de la charge de travail : à partir de 199 €/mois HT pour un professionnel avec un site de 10 pages maximum, 349 €/mois HT pour une PME avec un site de 30 pages maximum, 590 €/mois HT pour les sites plus grands ou avec plusieurs établissements, et à partir de 449 €/mois HT pour les boutiques en ligne. Le calculateur de cette page vous indique la formule adaptée à votre cas." },
      { q: "Y a-t-il un engagement ?", a: "Non. Le service mensuel est sans engagement. L'usage est d'évaluer les résultats avec les données de Search Console au bout de quelques mois, car le SEO a besoin de temps pour se refléter dans les positions." },
      { q: "Pourquoi les devis SEO sont-ils si différents sur le marché ?", a: "Parce que l'on compare des choses différentes : un rapport automatique, du conseil sans mise en œuvre ou un service avec contenus, modifications techniques et suivi mensuel. Avant de comparer les prix, comparez ce que comprend chaque proposition, combien de contenus par mois, qui exécute et comment on mesure." },
      { q: "Garantissez-vous des positions pour ce prix ?", a: "Non. Personne ne peut garantir des positions sur Google. Ce que comprend le prix, c'est le travail décrit, avec des rapports mensuels et des indicateurs qui vous permettent de vérifier l'évolution." },
      { q: "Le prix inclut-il le netlinking ?", a: "Non. La formule mensuelle n'inclut pas l'achat de liens. Si votre projet en a besoin, nous le proposons à part, avec un devis et des critères de qualité explicites." },
      { q: "Les prix incluent-ils la TVA ?", a: "Non. Tous les prix de cette page sont indiqués hors taxes." },
    ],
    contactTitle: "Demandez votre devis SEO",
    contactSub: "Indiquez votre site et vos objectifs. Nous vous répondons avec une proposition ferme.",
    related: "Plus sur le SEO et le positionnement",
    schemaName: "Référencement naturel (SEO)",
    country: "Espagne",
  },
};

function pathFor(lang: string) {
  return `/${lang}/${langSlug(lang, "seo-pricing")}/`;
}

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const t = lang === "fr" ? C.fr : C.en;
  const url = BASE + pathFor(lang);
  return {
    title: t.title,
    description: t.description,
    alternates: alternatesFor(pathFor(lang)) ?? { canonical: url },
    openGraph: {
      title: t.ogTitle,
      description: t.ogDescription,
      url,
      images: [{ url: "/og-seo.jpg", width: 1200, height: 630, alt: t.ogAlt }],
    },
  };
}

export default async function Page({ params }: { params: Promise<{ lang: string }> }) {
  const { lang: rawLang } = await params;
  const lang = rawLang === "fr" ? "fr" : "en";
  const t = C[lang];
  const url = BASE + pathFor(lang);
  const planes = planesSeo(lang);
  const href = (slug: string) => `/${lang}/${langSlug(lang, slug)}/`;

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: t.schemaName,
    provider: { "@id": "https://www.mktweb360.com/#organization" },
    areaServed: { "@type": "Country", name: t.country },
    url,
    offers: planes.filter((p) => p.precio !== null).map((p) => ({
      "@type": "Offer",
      name: p.nombre,
      url,
      priceSpecification: { "@type": "UnitPriceSpecification", price: p.precio, priceCurrency: "EUR", unitCode: "MON", valueAddedTaxIncluded: false },
    })),
  };
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: t.faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <section className="bg-gradient-to-br from-primary-700 to-primary-900 text-white">
        <div className="max-w-5xl mx-auto px-4 py-16">
          <Breadcrumbs crumbs={[{ label: t.home, href: `/${lang}/` }, { label: "SEO", href: href("seo-web-positioning") }, { label: t.crumb }]} />
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight mt-4">
            {t.h1}<br />
            <span className="text-accent-400">{t.h1Accent}</span>
          </h1>
          <p className="text-xl text-primary-200 leading-relaxed max-w-3xl">{t.intro}</p>
        </div>
      </section>

      <section id="calculator" className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-primary-600 mb-3 text-center">{t.calcTitle}</h2>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-10">{t.calcSub}</p>
          <CalculadoraSeo lang={lang} />
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-primary-600 mb-10 text-center">{t.plansTitle}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {planes.map((p) => (
              <div key={p.id} className="bg-white rounded-2xl border border-gray-100 shadow-sm p-7 flex flex-col">
                <h3 className="font-bold text-primary-700 text-lg mb-1">{p.nombre}</h3>
                <p className="text-sm text-gray-500 mb-3">{p.paraQuien}</p>
                <p className="text-2xl font-bold text-accent-500 mb-4">{precioTexto(p, lang)}</p>
                <ul className="space-y-1 text-sm text-gray-700 mb-4">
                  {p.limites.map((l) => <li key={l} className="flex gap-2"><span className="text-primary-500 shrink-0">•</span>{l}</li>)}
                </ul>
                <ul className="space-y-2 text-sm text-gray-600 mb-6 flex-1">
                  {p.incluye.map((i) => <li key={i} className="flex gap-2"><span className="text-accent-500 font-bold shrink-0">✓</span>{i}</li>)}
                </ul>
                {p.href ? (
                  <Link href={p.href} className="text-center bg-primary-600 text-white rounded-full px-6 py-3 font-semibold hover:bg-primary-700 transition-colors">{t.seeDetail}</Link>
                ) : (
                  <a href="#contacto" className="text-center bg-primary-600 text-white rounded-full px-6 py-3 font-semibold hover:bg-primary-700 transition-colors">{t.requestPlan}</a>
                )}
              </div>
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
            <div className="bg-primary-50 border border-primary-100 rounded-2xl p-6">
              <h3 className="font-bold text-primary-700 mb-3">{t.extrasTitle}</h3>
              <ul className="space-y-1 text-sm text-gray-600">{extrasSeo(lang).map((e) => <li key={e}>• {e}</li>)}</ul>
              <p className="text-xs text-gray-500 mt-3">{t.extrasNote}</p>
            </div>
            <div className="bg-primary-50 border border-primary-100 rounded-2xl p-6">
              <h3 className="font-bold text-primary-700 mb-3">{t.conditionsTitle}</h3>
              <ul className="space-y-1 text-sm text-gray-600">{condicionesComunes(lang).map((c) => <li key={c}>• {c}</li>)}</ul>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            {t.others.map((o) => (
              <div key={o.name} className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 flex flex-col">
                <h3 className="font-bold text-primary-700 mb-1">{o.name}</h3>
                <p className="text-xl font-bold text-accent-500">{o.price}</p>
                <p className="text-sm text-gray-500 mb-4 flex-1">{o.note}</p>
                {"slug" in o && o.slug && (
                  <Link href={href(o.slug)} className="text-accent-600 font-semibold hover:underline">{o.cta} →</Link>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-primary-600 mb-4 text-center">{t.factorsTitle}</h2>
          <p className="text-gray-600 text-center max-w-3xl mx-auto mb-10">{t.factorsSub}</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {t.factors.map((f) => (
              <div key={f.t} className="p-6 bg-white border border-gray-100 rounded-2xl shadow-sm">
                <h3 className="font-bold text-primary-700 mb-2">{f.t}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{f.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-primary-50 border-y border-primary-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-primary-600 mb-4">{t.compareTitle}</h2>
          <div className="space-y-4 text-gray-600 leading-relaxed">
            {t.compare.map((p) => <p key={p.slice(0, 40)}>{p}</p>)}
            <p>
              {t.costBefore}
              <Link href={href("cost-digital-marketing-agency-spain-2026")} className="text-accent-700 underline underline-offset-2">{t.costAgency}</Link>
              {t.costMiddle}
              <Link href={href("how-much-does-a-website-cost")} className="text-accent-700 underline underline-offset-2">{t.costWeb}</Link>
              {t.costAfter}
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-primary-600 mb-8 text-center">{t.faqTitle}</h2>
          <div className="space-y-4">
            {t.faqs.map((f) => (
              <details key={f.q} className="bg-white border border-gray-100 rounded-xl p-5 shadow-sm">
                <summary className="font-semibold text-primary-700 cursor-pointer">{f.q}</summary>
                <p className="text-gray-600 mt-3 leading-relaxed">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* id="contacto" se mantiene: la calculadora rellena el mensaje de este formulario */}
      <section id="contacto" className="py-16 px-4 bg-primary-600 text-white">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold mb-4 text-center">{t.contactTitle}</h2>
          <p className="text-primary-200 mb-8 text-center">{t.contactSub}</p>
          <ContactForm formType="precios-seo" />
        </div>
      </section>

      <RelatedArticles category="SEO" title={t.related} />
    </>
  );
}
