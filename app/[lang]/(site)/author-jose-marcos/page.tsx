import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { alternatesFor, ROUTES, urlFor, translatedSlugFor } from "@/lib/i18n/routes";
import { allPosts } from "@/lib/blog";
import { BLOG_I18N } from "@/lib/blog-i18n";
import { AUTOR_NOMBRE, AUTOR_PATH, autorUrl } from "@/lib/autor";

// 28/10/2026 — Versiones EN/FR de /autor/jose-marcos/. La carpeta FR (auteur-jose-marcos)
// reexporta esta página. Mismos datos que la ES, todos publicados ya en la web (aviso legal,
// About y schema de la organización); nada de cargo, formación ni perfiles personales.

type L = "en" | "fr";

const TXT = {
  en: {
    title: "José Marcos, author of the Mkt Web 360 blog",
    description:
      "José Marcos is responsible for Mkt Web 360 SLU, a digital marketing agency up and running since 2016, and writes the articles on its blog about SEO, GEO, Google Ads, web design and AI.",
    kicker: "Blog author",
    lead: "Responsible for Mkt Web 360 SLU and author of the agency's blog articles.",
    aboutH: "About José Marcos",
    about1a: "José Marcos is responsible for Mkt Web 360 SLU, the digital marketing agency that publishes this website, as stated in the",
    legal: "legal notice",
    about1b: ". He writes the articles on the",
    about2: "Mkt Web 360 has been up and running since 2016, is based in El Viso de San Juan (Toledo, Spain) and works with SMEs and companies all over Spain. More about the agency and how it works on the",
    aboutPage: "About us",
    topicsH: "Topics he writes about",
    topicsIntro: "The same services the agency provides:",
    recentH: "Recent articles",
    all: "See all blog articles →",
    contactH: "Contact",
    phone: "Phone",
    form: "Contact form",
    home: "Home",
    locale: "en-GB",
    topics: ["SEO", "GEO (visibility in AI assistants)", "AI applied to marketing", "Google Ads", "Web design", "Online stores", "Social media", "Content marketing", "Email marketing", "Digital audit"],
  },
  fr: {
    title: "José Marcos, auteur du blog de Mkt Web 360",
    description:
      "José Marcos est le responsable de Mkt Web 360 SLU, agence de marketing digital en activité depuis 2016, et signe les articles de son blog sur le SEO, le GEO, Google Ads, la création de sites web et l'IA.",
    kicker: "Auteur du blog",
    lead: "Responsable de Mkt Web 360 SLU et auteur des articles du blog de l'agence.",
    aboutH: "À propos de José Marcos",
    about1a: "José Marcos est le responsable de Mkt Web 360 SLU, l'agence de marketing digital qui publie ce site, comme l'indiquent les",
    legal: "mentions légales",
    about1b: ". Il signe les articles du",
    about2: "Mkt Web 360 est en activité depuis 2016, a son siège à El Viso de San Juan (Tolède, Espagne) et travaille avec des PME et des entreprises de toute l'Espagne. En savoir plus sur l'agence et sa façon de travailler dans la page",
    aboutPage: "À propos",
    topicsH: "Sujets sur lesquels il écrit",
    topicsIntro: "Les mêmes services que propose l'agence :",
    recentH: "Articles récents",
    all: "Voir tous les articles du blog →",
    contactH: "Contact",
    phone: "Téléphone",
    form: "Formulaire de contact",
    home: "Accueil",
    locale: "fr-FR",
    topics: ["SEO", "GEO (visibilité dans les assistants IA)", "IA appliquée au marketing", "Google Ads", "Création de sites web", "Boutiques en ligne", "Réseaux sociaux", "Marketing de contenu", "Email marketing", "Audit digital"],
  },
} as const;

// Rutas ES de los servicios (mismo orden que `topics`); el enlace sale en el idioma de la página.
const TEMAS_ES = [
  "/seo-posicionamiento-web-organico/",
  "/geo-posicionamiento-ia/",
  "/ia-aplicada-al-marketing/",
  "/sem-publicidad-ppc/",
  "/diseno-de-paginas-web/",
  "/diseno-de-paginas-web/diseno-tiendas-online/",
  "/smm-social-media-marketing/",
  "/marketing-de-contenidos/",
  "/email-marketing/",
  "/auditoria-digital/",
];

function href(lang: L, esPath: string): string {
  const r = ROUTES.find((x) => x.es === esPath);
  return (r && urlFor(r, lang)) || esPath;
}

function langOf(raw: string): L {
  return raw === "fr" ? "fr" : "en";
}

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
  const { lang: raw } = await params;
  const lang = langOf(raw);
  const t = TXT[lang];
  const url = autorUrl(lang);
  return {
    title: { absolute: t.title },
    description: t.description,
    alternates: alternatesFor(AUTOR_PATH[lang]) ?? { canonical: url },
    // noindex hasta completar la página con la trayectoria de José (decisión del 28/10/2026).
    robots: { index: false, follow: true },
    openGraph: { title: `${t.title}`, description: t.lead, url, type: "profile" },
  };
}

export default async function Page({ params }: { params: Promise<{ lang: string }> }) {
  const { lang: raw } = await params;
  const lang = langOf(raw);
  const t = TXT[lang];
  const url = autorUrl(lang);

  const schema = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    url,
    inLanguage: lang,
    mainEntity: {
      "@type": "Person",
      "@id": `${url}#person`,
      name: AUTOR_NOMBRE,
      url,
      worksFor: { "@id": "https://www.mktweb360.com/#organization" },
      knowsAbout: [...t.topics],
    },
  };

  const recientes = [...allPosts]
    .sort((a, b) => b.date.localeCompare(a.date))
    .flatMap((p) => {
      const tr = BLOG_I18N[p.slug]?.[lang];
      const slug = translatedSlugFor(p.slug, lang);
      return tr && slug ? [{ key: p.slug, title: tr.title, href: `/${lang}/${slug}/`, date: p.date }] : [];
    })
    .slice(0, 10);

  const fecha = (d: string) =>
    new Date(`${d}T12:00:00Z`).toLocaleDateString(t.locale, { day: "numeric", month: "long", year: "numeric", timeZone: "UTC" });

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <div className="max-w-3xl mx-auto px-4 py-12">
        <Breadcrumbs crumbs={[{ label: t.home, href: `/${lang}/` }, { label: "Blog", href: `/${lang}/blog/` }, { label: AUTOR_NOMBRE }]} />

        <header className="mb-10">
          <p className="text-sm font-semibold text-accent-500 mb-2">{t.kicker}</p>
          <h1 className="text-4xl font-bold text-primary-600 mb-4 leading-tight">{AUTOR_NOMBRE}</h1>
          <p className="text-xl text-gray-600 leading-relaxed">{t.lead}</p>
        </header>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-primary-600 mb-4">{t.aboutH}</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            {t.about1a}{" "}
            <Link href={href(lang, "/aviso-legal/")} className="text-accent-500 hover:underline">{t.legal}</Link>
            {t.about1b}{" "}
            <Link href={`/${lang}/blog/`} className="text-accent-500 hover:underline">blog</Link>.
          </p>
          <p className="text-gray-700 leading-relaxed">
            {t.about2}{" "}
            <Link href={href(lang, "/nosotros/")} className="text-accent-500 hover:underline">{t.aboutPage}</Link>.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-primary-600 mb-4">{t.topicsH}</h2>
          <p className="text-gray-700 leading-relaxed mb-4">{t.topicsIntro}</p>
          <ul className="flex flex-wrap gap-2">
            {TEMAS_ES.map((es, i) => (
              <li key={es}>
                <Link href={href(lang, es)} className="inline-block bg-primary-50 text-primary-700 text-sm font-medium px-3 py-1.5 rounded-full border border-primary-100 hover:bg-primary-100">
                  {t.topics[i]}
                </Link>
              </li>
            ))}
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-primary-600 mb-4">{t.recentH}</h2>
          <ul className="space-y-3">
            {recientes.map((p) => (
              <li key={p.key} className="p-4 border border-gray-200 rounded-xl">
                <Link href={p.href} className="font-semibold text-primary-700 hover:text-accent-500">{p.title}</Link>
                <div className="text-sm text-gray-400 mt-1">
                  <time dateTime={p.date}>{fecha(p.date)}</time>
                </div>
              </li>
            ))}
          </ul>
          <p className="mt-4">
            <Link href={`/${lang}/blog/`} className="text-accent-500 font-semibold hover:underline">{t.all}</Link>
          </p>
        </section>

        <section className="bg-gray-50 rounded-2xl p-6">
          <h2 className="text-xl font-bold text-primary-600 mb-3">{t.contactH}</h2>
          <p className="text-gray-700 text-sm leading-relaxed">
            Email: <a href="mailto:info@mktweb360.com" className="text-accent-500 hover:underline">info@mktweb360.com</a> · {t.phone}:{" "}
            <a href="tel:+34622748987" className="text-accent-500 hover:underline">+34 622 74 89 87</a> ·{" "}
            <Link href={href(lang, "/contacto/")} className="text-accent-500 hover:underline">{t.form}</Link>
          </p>
        </section>
      </div>
    </>
  );
}
