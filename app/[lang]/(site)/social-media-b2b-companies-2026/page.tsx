import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ContactForm } from "@/components/ContactForm";
import { BlogBanner } from "@/components/BlogBanner";
import { RelatedArticles } from "@/components/RelatedArticles";
import { alternatesFor } from "@/lib/i18n/routes";
import { AuthorByline } from "@/components/AuthorByline";
import { IntlArticleJsonLd } from "@/components/JsonLd";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const isFr = lang === "fr";
  return {
    title: isFr ? "Réseaux sociaux pour entreprises B2B en 2026" : "Social Media for B2B Companies in 2026",
    description: isFr ? "Guide pratique des réseaux sociaux B2B en 2026 : quels réseaux prioriser, quel contenu génère des leads et comment mesurer le vrai retour sur investissement." : "Social media for B2B companies in 2026: which networks to prioritise, what content generates leads and how to measure the real return on your investment.",
    alternates: alternatesFor(`/${lang}/${isFr ? "reseaux-sociaux-entreprises-b2b-2026" : "social-media-b2b-companies-2026"}/`) ?? {
      canonical: `https://www.mktweb360.com/${lang}/${isFr ? "reseaux-sociaux-entreprises-b2b-2026" : "social-media-b2b-companies-2026"}/`,
    },
    openGraph: {
      title: `${isFr ? "Réseaux sociaux pour entreprises B2B en 2026" : "Social Media for B2B Companies in 2026"} | Mkt Web 360`,
      description: isFr ? "Guide pratique des réseaux sociaux B2B en 2026 : quels réseaux prioriser, quel contenu génère des leads et comment mesurer le vrai retour sur investissement." : "Social media for B2B companies in 2026: which networks to prioritise, what content generates leads and how to measure the real return on your investment.",
      images: [{ url: "https://www.mktweb360.com/og-redes-sociales-para-empresas-b2b-2026.jpg", width: 1200, height: 630 }],
      type: "article",
      publishedTime: "2026-08-21T08:00:00Z",
    },
  };
}

export default async function Page({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const isFr = lang === "fr";
  const title = isFr ? "Réseaux sociaux pour entreprises B2B en 2026" : "Social Media for B2B Companies in 2026";
  const desc = isFr ? "Guide pratique des réseaux sociaux B2B en 2026 : quels réseaux prioriser, quel contenu génère des leads et comment mesurer le vrai retour sur investissement." : "Social media for B2B companies in 2026: which networks to prioritise, what content generates leads and how to measure the real return on your investment.";
  const cat = "Social Media";
  const faqs = [
    [isFr ? "LinkedIn vaut-il la peine pour une PME ?" : "Is LinkedIn worth it for an SME?", isFr ? "Cela dépend du secteur. Pour les entreprises qui vendent à d'autres entreprises (B2B), LinkedIn est incontournable. Pour le B2C à petit panier, d'autres réseaux offrent un meilleur ROI." : "It depends on the sector. For businesses that sell to other businesses (B2B), LinkedIn is essential. For low-ticket B2C, other networks deliver a better ROI."],
    [isFr ? "Combien de publications par semaine suffisent sur LinkedIn ?" : "How many posts a week are enough on LinkedIn?", isFr ? "Pour une entreprise, 3 à 5 publications par semaine est la fourchette idéale. La régularité compte plus que la fréquence : mieux vaut 3 bonnes publications que 7 médiocres." : "For a business, 3–5 posts a week is the ideal range. Consistency matters more than frequency: 3 good posts are better than 7 mediocre ones."],
    [isFr ? "Faut-il payer LinkedIn Premium pour développer son activité ?" : "Is it worth paying for LinkedIn Premium to win business?", isFr ? "LinkedIn Premium Carrière ou Business apporte peu pour générer des affaires. Sales Navigator peut être utile si vous avez un processus de prospection défini. Sans processus, c'est de l'argent gaspillé." : "LinkedIn Premium Career or Business adds little when it comes to generating business. Sales Navigator can be useful if you have a defined outbound process. Without a process, it is money wasted."],
    [isFr ? "Comment mesurer si mes réseaux sociaux m'apportent des clients ?" : "How can I measure whether my social media is bringing in clients?", isFr ? "Ajoutez des paramètres UTM à tous les liens de vos publications. Google Analytics vous indiquera alors le trafic provenant de chaque réseau et si ces visites se transforment en contacts." : "Add UTM parameters to every link in your posts. Google Analytics will then show you how much traffic comes from each network and whether those visits turn into enquiries."],
    [isFr ? "Instagram a-t-il du sens pour une entreprise industrielle ou de services B2B ?" : "Does Instagram make sense for an industrial or B2B services company?", isFr ? "Instagram peut être utile pour montrer la culture d'entreprise et attirer des talents, mais il génère rarement des leads B2B directs. LinkedIn et Google sont plus efficaces pour la prospection B2B." : "Instagram can be useful for showing company culture and attracting talent, but it rarely generates direct B2B leads. LinkedIn and Google are more effective for B2B lead generation."],
  ];

  return (
    <>
      <section className="mw-skin-hero text-white py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <Breadcrumbs lang={lang} items={[{ label: "Blog", href: `/${lang}/blog/` }, { label: cat }]} />
          <div className="mt-4 mb-3">
            <span className="bg-accent-500 text-white text-xs font-bold px-3 py-1 rounded-full uppercase">{cat}</span>
          </div>
          <IntlArticleJsonLd lang={lang} slug="social-media-b2b-companies-2026" headline={title} image="/og-redes-sociales-para-empresas-b2b-2026.jpg" />
          <h1 className="text-4xl md:text-5xl font-bold mt-4 mb-6 leading-tight">{title}</h1>
          <p className="text-xl text-primary-200">{desc}</p>
          <div className="mt-6 flex flex-wrap gap-4 text-sm text-primary-300">
            <span>📅 2026-08-21</span><span>✍️ <AuthorByline lang={lang} className="" linkClassName="underline hover:no-underline" /></span>
            <span>⏱️ {isFr ? "8 min lecture" : "8 min read"}</span>
          </div>
        </div>
      </section>

      <BlogBanner lang={lang} />

      <section className="py-16 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <p className="text-lg text-gray-700 mb-10 p-6 bg-primary-50 rounded-xl border-l-4 border-accent-500">
            <strong>{isFr ? "Résumé" : "Summary"}:</strong> {desc}
          </p>
          <p className="text-gray-600 leading-relaxed mb-8">
            {isFr
              ? "Ce guide complet couvre les stratégies essentielles pour les entreprises opérant en Espagne en 2026. Chaque section inclut des recommandations pratiques issues de notre travail quotidien avec nos clients."
              : "This comprehensive guide covers the essential strategies for businesses operating in Spain in 2026. Each section includes practical recommendations drawn from our day-to-day work with clients."
            }
          </p>
        </div>
      </section>

      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-black tracking-tight text-primary-700 mb-10 text-center">
            {isFr ? "Questions fréquentes" : "Frequently Asked Questions"}
          </h2>
          {faqs.map(([q, a], i) => (
            <div key={i} className="border-b border-gray-100 pb-6 mb-6">
              <h3 className="font-bold text-primary-700 mb-2">{q}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{a}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 px-4 bg-primary-50">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-primary-700 mb-4">
            {isFr ? "Besoin d'aide ?" : "Need help with your digital strategy?"}
          </h2>
          <p className="text-gray-600 mb-8">
            {isFr
              ? "Agence de marketing digital en Espagne. SEO, GEO, Google Ads. Sans engagement. Sans commission."
              : "Digital marketing agency in Spain. SEO, GEO, Google Ads. No lock-in. No commission on spend."
            }
          </p>
          <ContactForm formType={`${lang}-blog-cta`} />
        </div>
      </section>

      <RelatedArticles lang={lang} currentSlug={isFr ? "reseaux-sociaux-entreprises-b2b-2026" : "social-media-b2b-companies-2026"} />
    </>
  );
}
