import Image from "next/image";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { openGraphIntl } from "@/lib/og";
import { ContactForm } from "@/components/ContactForm";
import { RelatedArticles } from "@/components/RelatedArticles";
import { alternatesFor } from "@/lib/i18n/routes";
import { AuthorByline } from "@/components/AuthorByline";
import { IntlArticleJsonLd } from "@/components/JsonLd";
import { PintoresCta } from "@/components/PintoresCta";
import { ArticleIndex } from "@/components/ArticleIndex";
import { PintoresDemosBox } from "@/components/PintoresDemosBox";
import { OfferBannerWebPintores } from "@/components/offers/OfferBannerWebPintores";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const isEn = lang === "en";
  return {
    title: isEn ? "Website for Painters: Get Customers on Google" : "Site web pour peintres : attirer des clients",
    description: isEn ? "How to create a professional website for painters that attracts customers through Google. SEO, Google Business Profile and local strategy." : "Comment créer un site web professionnel pour peintres qui attire des clients via Google. SEO, Google Business Profile et stratégie locale.",
    openGraph: openGraphIntl(lang, "how-to-create-website-for-painters"),
    alternates: alternatesFor(`/${lang}/how-to-create-website-for-painters/`) ?? {
      canonical: `https://www.mktweb360.com/${lang}/how-to-create-website-for-painters/`,
    },
  };
}

type L = "en" | "fr";
type Bi = { en: string; fr: string };

const H2 = "text-2xl font-bold text-primary-600 mb-4 scroll-mt-24";
const MIN_LECTURA = { en: 6, fr: 7 };
const P = "text-gray-600 mb-4 leading-relaxed";
const UL = "list-disc pl-6 space-y-1 text-gray-600 mb-4";

export default async function Page({ params }: { params: Promise<{ lang: string }> }) {
  const { lang: raw } = await params;
  const lang: L = raw === "fr" ? "fr" : "en";
  const t = (b: Bi) => b[lang];
  const landing = lang === "fr" ? "/fr/creation-site-web-peintres/" : "/en/web-design-for-painters/";
  const headline = t({
    en: "How to create a website for painters that generates customers on Google",
    fr: "Comment créer un site web pour peintres qui génère des clients sur Google",
  });

  return (
    <>
      <div className="max-w-3xl mx-auto px-4 py-12">
        <Breadcrumbs crumbs={[
          { label: t({ en: "Home", fr: "Accueil" }), href: `/${lang}/` },
          { label: "Blog", href: `/${lang}/blog/` },
          { label: t({ en: "Website for painters", fr: "Site web pour peintres" }) },
        ]} />
        <p className="text-sm text-accent-500 font-semibold mb-2">{t({ en: "Web Design", fr: "Création Web" })}</p>
        <IntlArticleJsonLd lang={lang} slug="how-to-create-website-for-painters" headline={headline} image="/og-paginas-web-pintores-guia.jpg" />
        <h1 className="text-4xl font-bold text-primary-600 mb-4 leading-tight">{headline}</h1>
        <AuthorByline lang={lang} block />
        <p className="text-xl text-gray-500 mb-6 leading-relaxed">
          {t({
            en: "A professional website is the most powerful tool a painter can have to attract customers. This guide explains what it needs to include, how to appear on Google and how to turn visits into quote requests.",
            fr: "Un site web professionnel est l'outil le plus puissant qu'un peintre puisse avoir pour attirer des clients. Ce guide explique ce qu'il doit inclure, comment apparaître sur Google et comment transformer les visites en demandes de devis.",
          })}
        </p>
        <Image
          src="/og-paginas-web-pintores-guia.jpg"
          alt={t({
            en: "Illustration of a painting company's website with job gallery, Google profile and quote button",
            fr: "Illustration du site d'une entreprise de peinture avec galerie de chantiers, fiche Google et bouton de devis",
          })}
          width={1200}
          height={630}
          className="w-full rounded-2xl mb-6"
          priority
        />


        <ArticleIndex
          lang={lang}
          minutes={MIN_LECTURA[lang]}
          items={[
            { id: "include", label: t({ en: "What a painter's website must include", fr: "Ce que doit inclure le site d'un peintre" }) },
            { id: "local-seo", label: t({ en: "Local SEO for painters", fr: "SEO local pour peintres" }) },
            { id: "gbp", label: t({ en: "Google Business Profile", fr: "Google Business Profile" }) },
            { id: "photos", label: t({ en: "Photos and portfolio", fr: "Photos et portfolio" }) },
            { id: "calls", label: t({ en: "From website visits to phone calls", fr: "Des visites du site aux appels" }) },
          ]}
        />

        <PintoresCta
          lang={lang}
          where="intro"
          title={t({ en: "Would you rather we do it for you?", fr: "Vous préférez que nous le fassions pour vous ?" })}
          desc={t({
            en: "We design websites for painters and painting companies built to receive quote requests, with local SEO and a Google profile. Start with a free diagnosis.",
            fr: "Nous concevons des sites pour peintres et entreprises de peinture pensés pour recevoir des demandes de devis, avec SEO local et fiche Google. Commencez par un diagnostic gratuit.",
          })}
        />

        <section className="mb-10">
          <h2 id="include" className={H2}>{t({ en: "What a painter's website must include to generate customers", fr: "Ce que le site web d'un peintre doit inclure pour générer des clients" })}</h2>
          <p className={P}>
            {t({
              en: "A painting contractor's website needs to answer three questions immediately: what services do you offer, where do you work and how do I contact you? Make all three clear on the first screen:",
              fr: "Le site d'un peintre doit répondre immédiatement à trois questions : quels services proposez-vous, où travaillez-vous et comment vous contacter ? Rendez les trois clairs dès le premier écran :",
            })}
          </p>
          <ul className={UL}>
            <li>{t({ en: "A headline with your city and service area: “Painter in [your city and surroundings]”.", fr: "Un titre avec votre ville et votre zone d'intervention : « Peintre à [votre ville et alentours] »." })}</li>
            <li>{t({ en: "Your phone number in the header of every page.", fr: "Votre numéro de téléphone dans l'en-tête de chaque page." })}</li>
            <li>{t({ en: "A visible quote button.", fr: "Un bouton de devis visible." })}</li>
          </ul>
          <p className={P}>
            {t({
              en: "Beyond the basics, include a detailed page for each type of work (interior, exterior, commercial…), a portfolio with before and after photos, genuine customer reviews and a simple contact form. Each service page can rank independently on Google for searches like “exterior painter in [city]”.",
              fr: "Au-delà des bases, prévoyez une page détaillée pour chaque type de travaux (intérieur, extérieur, commercial…), un portfolio avec photos avant/après, de vrais avis clients et un formulaire de contact simple. Chaque page de service peut se positionner indépendamment sur Google pour des recherches comme « peintre extérieur à [ville] ».",
            })}
          </p>
          <Image
            src={`/pintores-ruta-cliente-${lang}.jpg`}
            alt={t({
              en: "Infographic: this is how a customer finds you. 1 they search Google for a painter near me, 2 they see your website and photos of your jobs, 3 they read your reviews and your map listing, 4 they call you or ask for a quote",
              fr: "Infographie : voici comment un client arrive jusqu'à vous. 1 il cherche un peintre sur Google, 2 il voit votre site et les photos de vos chantiers, 3 il lit vos avis et votre fiche sur la carte, 4 il vous appelle ou demande un devis",
            })}
            width={1200}
            height={630}
            className="w-full rounded-2xl"
          />
          <p className="text-sm text-gray-500 mt-2">{t({ en: "How a customer goes from searching for a painter to contacting you. Your website, your reviews and your Google listing are the three stops.", fr: "Le parcours d'un client, de la recherche d'un peintre jusqu'au contact. Votre site, vos avis et votre fiche Google sont les trois étapes." })}</p>
        </section>

        <section className="mb-10">
          <h2 id="local-seo" className={H2}>{t({ en: "Local SEO for painters: how to appear in Google searches", fr: "SEO local pour peintres : comment apparaître dans les recherches Google" })}</h2>
          <p className={P}>
            {t({
              en: "When someone searches “painter in [city]”, Google shows three kinds of results: the local pack (a map with three businesses), organic results and ads. Your goal is to appear in as many as possible:",
              fr: "Quand quelqu'un cherche « peintre à [ville] », Google affiche trois types de résultats : le pack local (une carte avec trois entreprises), les résultats organiques et les annonces. Votre objectif est d'apparaître dans le plus grand nombre possible :",
            })}
          </p>
          <ul className={UL}>
            <li>{t({ en: "For the local pack, you need a well-optimised Google Business Profile.", fr: "Pour le pack local, il vous faut un Google Business Profile bien optimisé." })}</li>
            <li>{t({ en: "For organic results, you need a website with proper on-page SEO.", fr: "Pour les résultats organiques, il vous faut un site avec un bon SEO on-page." })}</li>
          </ul>
          <p className={P}>
            {t({
              en: "For each city or neighbourhood you serve, create a dedicated page for “painter in [location]” searches. Mention the place naturally, embed a map, list the specific areas you cover and add reviews from customers in that area. This structure helps Google understand where you operate. More detail in our guide to ",
              fr: "Pour chaque ville ou quartier que vous desservez, créez une page dédiée aux recherches « peintre à [lieu] ». Mentionnez le lieu naturellement, intégrez une carte, listez les zones couvertes et ajoutez les avis de clients de cette zone. Cette structure aide Google à comprendre où vous intervenez. Plus de détails dans notre guide du ",
            })}
            <Link href={lang === "fr" ? "/fr/seo-local-entreprises-de-services/" : "/en/local-seo-for-service-businesses/"} className="text-accent-600 hover:underline">
              {t({ en: "local SEO for service businesses", fr: "SEO local pour les entreprises de services" })}
            </Link>.
          </p>
        </section>

        <section className="mb-10">
          <h2 id="gbp" className={H2}>{t({ en: "Google Business Profile for painting companies", fr: "Google Business Profile pour les entreprises de peinture" })}</h2>
          <p className={P}>
            {t({
              en: "Your Google Business Profile is often the first thing potential customers see: it appears in Google Maps and in the local pack for searches in your area. A well-maintained profile can generate calls even without a website. For painters, the key elements are:",
              fr: "Votre Google Business Profile est souvent la première chose que voient vos clients potentiels : il apparaît dans Google Maps et dans le pack local pour les recherches de votre zone. Une fiche bien entretenue peut générer des appels même sans site web. Pour un peintre, les éléments clés sont :",
            })}
          </p>
          <ul className={UL}>
            <li>{t({ en: "Complete and accurate business information.", fr: "Des informations complètes et exactes sur l'entreprise." })}</li>
            <li>{t({ en: "Photos of finished jobs (before and after works best).", fr: "Des photos de chantiers terminés (l'avant/après fonctionne le mieux)." })}</li>
            <li>{t({ en: "A steady flow of genuine reviews and a reply to every one.", fr: "Un flux régulier de vrais avis et une réponse à chacun." })}</li>
          </ul>
          <p className={P}>
            {t({
              en: "Ask every satisfied customer for a review with a direct link: most will do it if you make it easy. Prefer to delegate it? See our ",
              fr: "Demandez un avis à chaque client satisfait avec un lien direct : la plupart le feront si vous leur facilitez la tâche. Vous préférez déléguer ? Découvrez notre ",
            })}
            <Link href={lang === "fr" ? "/fr/gestion-google-business-profile/" : "/en/google-business-profile-service/"} className="text-accent-600 hover:underline">
              {t({ en: "Google Business Profile service", fr: "service Google Business Profile" })}
            </Link>.
          </p>
        </section>

        <PintoresCta
          lang={lang}
          where="medio"
          title={t({ en: "How is your website doing today?", fr: "Où en est votre site aujourd'hui ?" })}
          desc={t({
            en: "We review your website and your Google profile and tell you what is costing you quote requests and what to fix first. Free, with no obligation.",
            fr: "Nous examinons votre site et votre fiche Google et nous vous disons ce qui vous coûte des demandes de devis et quoi corriger en premier. Gratuit et sans engagement.",
          })}
        />

        <section className="mb-10">
          <h2 id="photos" className={H2}>{t({ en: "Photos and portfolio: your best sales tool", fr: "Photos et portfolio : votre meilleur outil de vente" })}</h2>
          <p className={P}>
            {t({
              en: "For painting services, the portfolio is everything: customers want to see what they will get before they call. You do not need professional photography; a modern smartphone in good light is enough. Photograph each job before, during and after, and show a range of work types, rooms and settings.",
              fr: "Pour les services de peinture, le portfolio est essentiel : les clients veulent voir ce qu'ils vont obtenir avant d'appeler. Pas besoin de photographe professionnel : un smartphone récent avec une bonne lumière suffit. Photographiez chaque chantier avant, pendant et après, et montrez différents types de travaux, de pièces et de cadres.",
            })}
          </p>
          <Image
            src="/pintores-foto-antes-despues.jpg"
            alt={t({
              en: "Photograph of a living-room wall before and after painting: damp stains and peeling on the left, the same wall clean and freshly painted on the right",
              fr: "Photographie d'un mur de salon avant et après peinture : taches d'humidité et écaillages à gauche, le même mur propre et fraîchement peint à droite",
            })}
            width={1200}
            height={675}
            className="w-full rounded-2xl mb-4"
          />
          <p className={P}>
            {t({
              en: "Organise the portfolio by service type and location, and give every photo a descriptive alt text: it helps visitors and it helps SEO.",
              fr: "Organisez le portfolio par type de service et par lieu, et donnez à chaque photo un texte alternatif descriptif : c'est utile pour les visiteurs et pour le SEO.",
            })}
          </p>
        </section>

        <section className="mb-10">
          <h2 id="calls" className={H2}>{t({ en: "How to turn website visits into phone calls", fr: "Comment transformer les visites du site en appels" })}</h2>
          <p className={P}>
            {t({
              en: "Traffic without contacts is useless. Many painters' websites get decent traffic but few calls because contacting them is hard. Check these points:",
              fr: "Du trafic sans contacts ne sert à rien. Beaucoup de sites de peintres reçoivent du trafic mais peu d'appels parce que les contacter est compliqué. Vérifiez ces points :",
            })}
          </p>
          <ul className={UL}>
            <li>{t({ en: "The phone number is a tap-to-call link (tel:) on mobile.", fr: "Le numéro de téléphone est un lien cliquable (tel:) sur mobile." })}</li>
            <li>{t({ en: "The quote form only asks for job type, location and preferred contact method.", fr: "Le formulaire de devis ne demande que le type de travaux, le lieu et le moyen de contact préféré." })}</li>
            <li>{t({ en: "Email or SMS alerts for every form submission, so you can reply within minutes.", fr: "Des alertes par e-mail ou SMS pour chaque formulaire, afin de répondre en quelques minutes." })}</li>
          </ul>
          <p className={P}>
            {t({
              en: "Response time matters: someone who asks for a quote is usually comparing several painters and tends to hire the first one who replies.",
              fr: "La rapidité de réponse compte : quelqu'un qui demande un devis compare en général plusieurs peintres et choisit souvent le premier qui répond.",
            })}
          </p>
        </section>

        <PintoresDemosBox lang={lang} where="articulo" />

        <OfferBannerWebPintores lang={lang} />

        <PintoresCta
          lang={lang}
          where="final"
          strong
          title={t({ en: "Request a free review of your painting company's website", fr: "Demandez une analyse gratuite du site de votre entreprise de peinture" })}
          desc={t({
            en: "We analyse your website and your Google profile and tell you, with concrete examples, what to improve to receive more quote requests. No obligation.",
            fr: "Nous analysons votre site et votre fiche Google et nous vous disons, avec des exemples concrets, quoi améliorer pour recevoir plus de demandes de devis. Sans engagement.",
          })}
        />

        <section className="mw-skin-cta text-white rounded-3xl p-8 mt-12">
          <h2 className="text-2xl font-bold mb-4">
            {t({ en: "Tell us about your project", fr: "Parlez-nous de votre projet" })}
          </h2>
          <p className="text-primary-200 mb-6">
            {t({ en: "We will get back to you within 24 hours. You can also see our ", fr: "Nous vous répondons sous 24 heures. Vous pouvez aussi consulter notre " })}
            <Link href={landing} className="underline text-white">
              {t({ en: "website design service for painters", fr: "service de création de site pour peintres" })}
            </Link>.
          </p>
          <div className="rounded-3xl bg-white p-6 sm:p-8 text-gray-900 shadow-[0_30px_80px_-30px_rgba(0,0,0,0.6)] ring-1 ring-white/10">
            <ContactForm formType={`blog-${lang}`} />
          </div>
        </section>
      </div>
      <RelatedArticles category="Web Design" />
    </>
  );
}
