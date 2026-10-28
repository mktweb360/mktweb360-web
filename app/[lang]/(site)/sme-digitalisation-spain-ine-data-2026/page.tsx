import Image from "next/image";
import Link from "next/link";
import { AuthorByline } from "@/components/AuthorByline";
import { autorSchema } from "@/lib/autor";
import type { ReactNode } from "react";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { RelatedArticles } from "@/components/RelatedArticles";
import { alternatesFor, langSlug } from "@/lib/i18n/routes";

// 29/10/2026 — versión EN/FR del artículo ES /digitalizacion-pymes-espana-datos-ine-2026/ (tema 10, pieza de datos).
// La versión FR se sirve desde ../digitalisation-pme-espagne-donnees-ine-2026/page.tsx, que reexporta esta página.
// Cifras: nota de prensa del INE del 22/10/2026 (leída el 28/10/2026). Si cambian, cambiarlas también en la ES y en la infografía.

const ES_SLUG = "digitalizacion-pymes-espana-datos-ine-2026";
const SLUGS = { en: "sme-digitalisation-spain-ine-data-2026", fr: "digitalisation-pme-espagne-donnees-ine-2026" } as const;
// Infografía traducida por idioma (la ES está en /og-digitalizacion-pymes-espana-datos-ine-2026.jpg).
const OG = { en: "/og-sme-digitalisation-spain-ine-data-2026.jpg", fr: "/og-digitalisation-pme-espagne-donnees-ine-2026.jpg" } as const;
const DATE = "2026-10-29";
const INE_URL = "https://www.ine.es/dyngs/Prensa/ETICCE20251T2026.htm";
const INE_PREV_URL = "https://www.ine.es/dyngs/Prensa/ETICCE20241T2025.htm";
const EC_URL = "https://data.consilium.europa.eu/doc/document/ST-10476-2026-ADD-55/en/pdf";

type L = "en" | "fr";
const pick = (lang: string): L => (lang === "fr" ? "fr" : "en");
const pageUrl = (l: L) => `https://www.mktweb360.com/${l}/${SLUGS[l]}/`;

const META = {
  en: {
    title: "SME Digitalisation in Spain 2026: Official INE Data",
    description:
      "36.2% of Spanish firms with fewer than 10 staff and internet access have a website, against 82.9% of larger ones. Web, social, AI and e-commerce (INE, 2026).",
    h1: "Spain's digital SMEs in 2026: websites, social media, AI and e-commerce according to official INE data",
  },
  fr: {
    title: "Digitalisation des PME en Espagne 2026 : les données de l'INE",
    description:
      "36,2 % des entreprises espagnoles de moins de 10 salariés connectées à internet ont un site web, contre 82,9 % au-delà. Web, réseaux, IA, e-commerce (INE).",
    h1: "La PME numérique en Espagne en 2026 : site web, réseaux sociaux, IA et e-commerce selon l'INE",
  },
};

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const l = pick(lang);
  const m = META[l];
  return {
    title: { absolute: m.title },
    description: m.description,
    alternates: alternatesFor(`/${l}/${SLUGS[l]}/`) ?? { canonical: pageUrl(l) },
    openGraph: {
      title: `${m.title} | Mkt Web 360`,
      description: m.description,
      url: pageUrl(l),
      type: "article",
      images: [{ url: OG[l], width: 1200, height: 630 }],
    },
  };
}

const T = {
  en: {
    crumbHome: "Home",
    crumb: "SME digitalisation: INE data 2026",
    badge: "SMEs",
    dateLabel: "October 29, 2026",
    intro:
      "The most recent official figures on how Spanish companies use the internet, split by size, with the base of each percentage and what they mean if you run a micro-business.",
    alt: "Bar chart with INE data for 2026: 36.2% of firms with fewer than 10 employees have a website versus 82.9% of those with 10 or more; social media 32.1% versus 65.4%; AI 21.4% versus 33.6%; online sales in 2025 11.8% versus 29.0%",
    answer: (
      <>
        According to Spain&apos;s National Statistics Institute (INE, 22/10/2026), in the first quarter of 2026 <strong>36.2%</strong> of companies with fewer than 10 employees and an internet connection had a website, compared with <strong>82.9%</strong> of those with 10 or more. 32.1% and 65.4% used social media, and 21.4% and 33.6% used artificial intelligence. In 2025, 11.8% and 29.0% sold online.
      </>
    ),
    h2Key: "The 5 key figures for 2026",
    keyHead: ["Indicator (INE)", "Fewer than 10 employees", "10 or more employees", "Base and period"],
    key: [
      ["Have a website", "36.2%", "82.9%", "Firms with internet access · Q1 2026"],
      ["Use social media", "32.1%", "65.4%", "Firms with internet access · Q1 2026"],
      ["Use artificial intelligence", "21.4%", "33.6%", "Firms with internet access · Q1 2026"],
      ["Sold through e-commerce", "11.8%", "29.0%", "All firms · year 2025"],
      ["Have an internet connection", "81.2%", "98.3%", "All firms · Q1 2026"],
    ],
    keySource: "Source: INE, Survey on ICT usage and e-commerce in companies, press release of 22/10/2026.",
    h2Web: "How many micro-businesses have a website?",
    web: [
      <>36.2% of firms with fewer than 10 employees and internet access have a website. Put the other way round, <strong>63.8% of connected micro-businesses have no website of their own</strong> (our calculation). Among firms with 10 or more employees, a website is the norm: 82.9% have one.</>,
      <>Mind the base. The percentage is calculated over firms with internet access, which among those with fewer than 10 employees are 81.2%. Firms without a connection are not counted.</>,
    ],
    h2Social: "How many use social media?",
    social: <>32.1% of firms with fewer than 10 employees and internet access use social media, against 65.4% of those with 10 or more. Among micro-businesses the share (32.1%) is close to the share with a website (36.2%): roughly one in three.</>,
    h2Ai: "Who uses artificial intelligence?",
    ai: <>33.6% of firms with 10 or more employees and 21.4% of those with fewer than 10 used some AI technology (in both cases, over firms with internet access). It is the indicator with the smallest gap between the two groups. The press release does not break down what they use it for.</>,
    sectorIntro: "By sector, among firms with 10 or more employees:",
    sectorHead: ["Sector (10+ employees)", "Use AI", "Paid cloud", "Sell online (2025)"],
    sectors: [
      ["Services", "38.2%", "41.9%", "35.1%"],
      ["Industry", "29.1%", "37.5%", "27.7%"],
      ["Construction", "22.6%", "32.9%", "7.0%"],
      ["Total", "33.6%", "39.4%", "29.0%"],
    ],
    h2Shop: "How many SMEs sell online?",
    shop: <>In 2025, <strong>29.0%</strong> of firms with 10 or more employees sold through e-commerce, generating <strong>€419,706 million</strong> in turnover. Among firms with fewer than 10 employees the share drops to <strong>11.8%</strong>.</>,
    h2Trend: "Has it improved since last year?",
    trend: <>The table sets this year&apos;s figures next to last year&apos;s release. They are <strong>not strictly comparable</strong>: INE warns that from reference year 2025 the survey uses the new CNAE-2025 activity classification and covers division 56 and group 95.1, so the series shows trends, not exact changes.</>,
    trendHead: ["Indicator (Q1 2025 → Q1 2026)", "Fewer than 10 employees", "10 or more employees"],
    trendRows: [
      ["Have a website", "37.0% → 36.2%", "84.5% → 82.9%"],
      ["Use social media", "37.8% → 32.1%", "69.7% → 65.4%"],
      ["Use artificial intelligence", "13.4% → 21.4%", "21.1% → 33.6%"],
      ["Sold online (2024 → 2025)", "8.6% → 11.8%", "26.6% → 29.0%"],
    ],
    trendNote: <>The AI jump is clear: among firms with 10 or more employees it had already risen from 12.4% in 2024 to 21.1% in 2025. Website and social media figures are slightly lower in 2026, and with the change in the survey population it is impossible to tell whether that is a real decline.</>,
    h2Eu: "And compared with Europe?",
    eu: <>This is a different indicator with a different methodology, so it should not be mixed with INE figures. According to the European Commission&apos;s Digital Decade 2026 country report, <strong>75.35%</strong> of Spanish SMEs reach at least a basic level of digital intensity (2025 data), above the EU average of 71.39%. The EU target for 2030 is 90%.</>,
    h2Opp: "What it means for your business: 4 opportunities",
    ctaTitle: "Where does your business stand?",
    ctaText: "Our free diagnosis reviews your website, your visibility on Google and in AI assistants, your Google Business Profile and three search opportunities. You receive it by email within 24 working hours, with no commitment.",
    ctaBtn: "Request the free diagnosis",
    h2Method: "Methodology: how to read these percentages",
    method: [
      <><strong>Source:</strong> INE Survey on ICT usage and e-commerce in companies. Final data published on 22 October 2026.</>,
      <><strong>Base:</strong> website, social media and AI are calculated over firms <em>with internet access</em>. Connection and e-commerce, over all firms of each size.</>,
      <><strong>Period:</strong> ICT usage refers to the first quarter of 2026; e-commerce, to the year 2025.</>,
      <><strong>Sample:</strong> about 15,000 firms with 10 or more employees and about 10,000 with fewer than 10, stratified by size, activity and region.</>,
      <><strong>Comparability:</strong> from reference year 2025 the survey uses CNAE-2025 and includes division 56 and group 95.1, so INE warns the data are not strictly comparable with previous years.</>,
      <><strong>Our calculations:</strong> the &quot;63.8% without a website&quot; is 100 minus 36.2. It is not a figure published by INE.</>,
    ],
    h2Faq: "Frequently asked questions",
    faqs: [
      { q: "How many Spanish SMEs have a website in 2026?", a: "According to INE, in the first quarter of 2026, 36.2% of firms with fewer than 10 employees and internet access had a website, and 82.9% of those with 10 or more. Put the other way round, almost two in three connected micro-businesses have no website of their own." },
      { q: "How many companies use artificial intelligence in Spain?", a: "33.6% of firms with 10 or more employees and 21.4% of those with fewer than 10 used some AI technology in the first quarter of 2026, in both cases over firms with internet access. Among firms with 10 or more employees, services is the sector that uses it most (38.2%)." },
      { q: "Can these figures be compared with previous years?", a: "Not entirely. INE warns that this year's data are not strictly comparable with previous years, because from reference year 2025 it classifies activity with CNAE-2025 and has added division 56 and group 95.1 to the survey. The series show trends, not exact changes." },
      { q: "What period do the figures cover?", a: "Questions on ICT usage (website, social media, AI, connection) refer to the first quarter of 2026. E-commerce refers to the whole of 2025." },
      { q: "How often does INE publish this survey?", a: "It is an annual survey. The sample is around 15,000 firms with 10 or more employees and 10,000 with fewer than 10, following Eurostat methodology, so the next edition will allow these figures to be updated." },
    ],
    h2Sources: "Sources",
    sources: [
      { texto: "INE: Survey on ICT usage and e-commerce in companies. Year 2025 - First quarter 2026. Final data. Press release of 22/10/2026 (in Spanish, accessed 28/10/2026).", url: INE_URL },
      { texto: "INE: Survey on ICT usage and e-commerce in companies. Year 2024 - First quarter 2025. Press release (in Spanish, accessed 28/10/2026), for the previous-year table.", url: INE_PREV_URL },
      { texto: "European Commission: Digital Decade 2026 country report, Spain. SWD(2026) 155 final, part 26/27, 17/06/2026, transmitted to the Council of the EU (accessed 28/10/2026).", url: EC_URL },
    ],
    related: "Related services:",
    back: "← Back to blog",
    datasetName: "Website, social media, AI and e-commerce use in Spanish companies by size (INE, 2026)",
    datasetDesc: "Summary of five indicators from INE's Survey on ICT usage and e-commerce in companies (year 2025 and first quarter of 2026, final data), comparing firms with fewer than 10 employees with those with 10 or more.",
  },
  fr: {
    crumbHome: "Accueil",
    crumb: "Digitalisation des PME : données INE 2026",
    badge: "PME",
    dateLabel: "29 octobre 2026",
    intro:
      "Les chiffres officiels les plus récents sur l'usage d'internet par les entreprises espagnoles, par taille, avec la base de chaque pourcentage et ce qu'ils signifient si vous dirigez une microentreprise.",
    alt: "Graphique en barres avec les données de l'INE 2026 : 36,2 % des entreprises de moins de 10 salariés ont un site web contre 82,9 % de celles de 10 salariés ou plus ; réseaux sociaux 32,1 % contre 65,4 % ; IA 21,4 % contre 33,6 % ; ventes en ligne en 2025 11,8 % contre 29,0 %",
    answer: (
      <>
        Selon l&apos;Institut national de la statistique espagnol (INE, 22/10/2026), au premier trimestre 2026, <strong>36,2 %</strong> des entreprises de moins de 10 salariés connectées à internet avaient un site web, contre <strong>82,9 %</strong> de celles de 10 salariés ou plus. 32,1 % et 65,4 % utilisaient les réseaux sociaux, et 21,4 % et 33,6 % l&apos;intelligence artificielle. En 2025, 11,8 % et 29,0 % ont vendu en ligne.
      </>
    ),
    h2Key: "Les 5 chiffres clés de 2026",
    keyHead: ["Indicateur (INE)", "Moins de 10 salariés", "10 salariés ou plus", "Base et période"],
    key: [
      ["Ont un site web", "36,2 %", "82,9 %", "Entreprises connectées à internet · 1er trimestre 2026"],
      ["Utilisent les réseaux sociaux", "32,1 %", "65,4 %", "Entreprises connectées à internet · 1er trimestre 2026"],
      ["Utilisent l'intelligence artificielle", "21,4 %", "33,6 %", "Entreprises connectées à internet · 1er trimestre 2026"],
      ["Ont vendu par e-commerce", "11,8 %", "29,0 %", "Ensemble des entreprises · année 2025"],
      ["Ont une connexion à internet", "81,2 %", "98,3 %", "Ensemble des entreprises · 1er trimestre 2026"],
    ],
    keySource: "Source : INE, enquête sur l'usage des TIC et du commerce électronique dans les entreprises, communiqué du 22/10/2026.",
    h2Web: "Combien de microentreprises ont un site web ?",
    web: [
      <>36,2 % des entreprises de moins de 10 salariés connectées à internet ont un site web. Autrement dit, <strong>63,8 % des microentreprises connectées n&apos;ont pas de site propre</strong> (calcul de notre part). Dans les entreprises de 10 salariés ou plus, le site web est la norme : 82,9 % en ont un.</>,
      <>Attention à la base. Le pourcentage est calculé sur les entreprises connectées à internet, qui représentent 81,2 % des entreprises de moins de 10 salariés. Celles sans connexion ne sont pas comptées.</>,
    ],
    h2Social: "Combien utilisent les réseaux sociaux ?",
    social: <>32,1 % des entreprises de moins de 10 salariés connectées utilisent les réseaux sociaux, contre 65,4 % de celles de 10 salariés ou plus. Chez les microentreprises, la proportion (32,1 %) est proche de celle des entreprises ayant un site (36,2 %) : environ une sur trois.</>,
    h2Ai: "Qui utilise l'intelligence artificielle ?",
    ai: <>33,6 % des entreprises de 10 salariés ou plus et 21,4 % de celles de moins de 10 ont utilisé une technologie d&apos;IA (dans les deux cas, sur les entreprises connectées). C&apos;est l&apos;indicateur où l&apos;écart entre les deux groupes est le plus faible. Le communiqué ne précise pas à quoi elles l&apos;utilisent.</>,
    sectorIntro: "Par secteur, dans les entreprises de 10 salariés ou plus :",
    sectorHead: ["Secteur (10 salariés ou plus)", "Utilisent l'IA", "Cloud payant", "Vendent en ligne (2025)"],
    sectors: [
      ["Services", "38,2 %", "41,9 %", "35,1 %"],
      ["Industrie", "29,1 %", "37,5 %", "27,7 %"],
      ["Construction", "22,6 %", "32,9 %", "7,0 %"],
      ["Total", "33,6 %", "39,4 %", "29,0 %"],
    ],
    h2Shop: "Combien de PME vendent en ligne ?",
    shop: <>En 2025, <strong>29,0 %</strong> des entreprises de 10 salariés ou plus ont vendu par commerce électronique, pour un chiffre d&apos;affaires de <strong>419 706 millions d&apos;euros</strong>. Dans celles de moins de 10 salariés, la part tombe à <strong>11,8 %</strong>.</>,
    h2Trend: "Y a-t-il un progrès par rapport à l'an dernier ?",
    trend: <>Le tableau met en regard les chiffres du communiqué de l&apos;an dernier. Ils <strong>ne sont pas strictement comparables</strong> : l&apos;INE précise qu&apos;à partir de l&apos;année de référence 2025 l&apos;enquête utilise la nouvelle classification CNAE-2025 et inclut la division 56 et le groupe 95.1. La série montre des tendances, pas des évolutions exactes.</>,
    trendHead: ["Indicateur (1er trim. 2025 → 2026)", "Moins de 10 salariés", "10 salariés ou plus"],
    trendRows: [
      ["Ont un site web", "37,0 % → 36,2 %", "84,5 % → 82,9 %"],
      ["Utilisent les réseaux sociaux", "37,8 % → 32,1 %", "69,7 % → 65,4 %"],
      ["Utilisent l'intelligence artificielle", "13,4 % → 21,4 %", "21,1 % → 33,6 %"],
      ["Ont vendu en ligne (2024 → 2025)", "8,6 % → 11,8 %", "26,6 % → 29,0 %"],
    ],
    trendNote: <>Le bond de l&apos;IA est net : dans les entreprises de 10 salariés ou plus, elle était déjà passée de 12,4 % en 2024 à 21,1 % en 2025. Les chiffres du site web et des réseaux sont un peu plus bas en 2026 et, avec le changement de population de l&apos;enquête, on ne peut pas savoir s&apos;il s&apos;agit d&apos;un vrai recul.</>,
    h2Eu: "Et par rapport à l'Europe ?",
    eu: <>Il s&apos;agit d&apos;un autre indicateur, avec une autre méthode : il ne faut pas le mélanger avec ceux de l&apos;INE. Selon le rapport pays de la Commission européenne sur la Décennie numérique 2026, <strong>75,35 %</strong> des PME espagnoles atteignent au moins un niveau élémentaire d&apos;intensité numérique (donnée 2025), au-dessus de la moyenne de l&apos;UE (71,39 %). L&apos;objectif européen pour 2030 est de 90 %.</>,
    h2Opp: "Ce que cela signifie pour votre entreprise : 4 opportunités",
    ctaTitle: "Où en est votre entreprise ?",
    ctaText: "Notre diagnostic gratuit examine votre site, votre visibilité sur Google et dans les assistants IA, votre fiche Google et trois opportunités de recherche. Vous le recevez par e-mail sous 24 heures ouvrées maximum, sans engagement.",
    ctaBtn: "Demander le diagnostic gratuit",
    h2Method: "Méthodologie : bien lire ces pourcentages",
    method: [
      <><strong>Source :</strong> enquête de l&apos;INE sur l&apos;usage des TIC et du commerce électronique dans les entreprises. Données définitives publiées le 22 octobre 2026.</>,
      <><strong>Base :</strong> site web, réseaux sociaux et IA sont calculés sur les entreprises <em>connectées à internet</em>. La connexion et le commerce électronique, sur l&apos;ensemble des entreprises de chaque taille.</>,
      <><strong>Période :</strong> l&apos;usage des TIC porte sur le premier trimestre 2026 ; le commerce électronique, sur l&apos;année 2025.</>,
      <><strong>Échantillon :</strong> environ 15 000 entreprises de 10 salariés ou plus et 10 000 de moins de 10, stratifié par taille, activité et région.</>,
      <><strong>Comparabilité :</strong> depuis l&apos;année de référence 2025, l&apos;enquête utilise la CNAE-2025 et inclut la division 56 et le groupe 95.1 ; l&apos;INE indique donc que les données ne sont pas strictement comparables avec les années précédentes.</>,
      <><strong>Nos calculs :</strong> les « 63,8 % sans site » correspondent à 100 moins 36,2. Ce n&apos;est pas un chiffre publié par l&apos;INE.</>,
    ],
    h2Faq: "Questions fréquentes",
    faqs: [
      { q: "Combien de PME espagnoles ont un site web en 2026 ?", a: "Selon l'INE, au premier trimestre 2026, 36,2 % des entreprises de moins de 10 salariés connectées à internet avaient un site web, et 82,9 % de celles de 10 salariés ou plus. Autrement dit, près de deux microentreprises connectées sur trois n'ont pas de site propre." },
      { q: "Combien d'entreprises utilisent l'intelligence artificielle en Espagne ?", a: "33,6 % des entreprises de 10 salariés ou plus et 21,4 % de celles de moins de 10 ont utilisé une technologie d'IA au premier trimestre 2026, dans les deux cas sur les entreprises connectées à internet. Parmi les entreprises de 10 salariés ou plus, les services sont le secteur qui l'utilise le plus (38,2 %)." },
      { q: "Peut-on comparer ces chiffres avec ceux des années précédentes ?", a: "Pas tout à fait. L'INE précise que les données de cette année ne sont pas strictement comparables avec les précédentes, car depuis l'année de référence 2025 il classe l'activité selon la CNAE-2025 et a ajouté la division 56 et le groupe 95.1 à l'enquête. Les séries montrent des tendances, pas des évolutions exactes." },
      { q: "Quelle période couvrent les données ?", a: "Les questions sur l'usage des TIC (site web, réseaux sociaux, IA, connexion) portent sur le premier trimestre 2026. Le commerce électronique porte sur toute l'année 2025." },
      { q: "À quelle fréquence l'INE publie-t-il cette enquête ?", a: "C'est une enquête annuelle. L'échantillon compte environ 15 000 entreprises de 10 salariés ou plus et 10 000 de moins de 10, selon la méthodologie d'Eurostat ; la prochaine édition permettra de mettre ces chiffres à jour." },
    ],
    h2Sources: "Sources",
    sources: [
      { texto: "INE : enquête sur l'usage des TIC et du commerce électronique dans les entreprises. Année 2025 - premier trimestre 2026. Données définitives. Communiqué du 22/10/2026 (en espagnol, consulté le 28/10/2026).", url: INE_URL },
      { texto: "INE : même enquête, année 2024 - premier trimestre 2025. Communiqué (en espagnol, consulté le 28/10/2026), pour le tableau de l'année précédente.", url: INE_PREV_URL },
      { texto: "Commission européenne : Digital Decade 2026 country report, Spain. SWD(2026) 155 final, partie 26/27, 17/06/2026, transmis au Conseil de l'UE (consulté le 28/10/2026).", url: EC_URL },
    ],
    related: "Services associés :",
    back: "← Retour au blog",
    datasetName: "Usage du site web, des réseaux sociaux, de l'IA et du commerce électronique dans les entreprises espagnoles par taille (INE, 2026)",
    datasetDesc: "Synthèse de cinq indicateurs de l'enquête de l'INE sur l'usage des TIC et du commerce électronique dans les entreprises (année 2025 et premier trimestre 2026, données définitives), comparant les entreprises de moins de 10 salariés à celles de 10 salariés ou plus.",
  },
};

function Tabla({ cabecera, filas }: { cabecera: string[]; filas: string[][] }) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full text-sm border-collapse">
        <thead>
          <tr className="bg-primary-600 text-white">
            {cabecera.map((c) => (
              <th key={c} className="px-4 py-3 text-left font-semibold">{c}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {filas.map((fila) => (
            <tr key={fila[0]} className="border-b border-gray-200 even:bg-gray-50">
              {fila.map((celda, i) => (
                <td key={i} className={i === 0 ? "px-4 py-3 font-medium text-gray-800" : "px-4 py-3 text-gray-600"}>{celda}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function Lista({ items, numerada = false }: { items: ReactNode[]; numerada?: boolean }) {
  return (
    <ul className="space-y-3">
      {items.map((item, i) => (
        <li key={i} className="flex items-start gap-3 p-4 border border-gray-200 rounded-xl">
          <span className="text-primary-600 font-bold shrink-0 mt-0.5">{numerada ? `${i + 1}.` : "▸"}</span>
          <span className="text-gray-600 text-sm">{item}</span>
        </li>
      ))}
    </ul>
  );
}

function oportunidades(l: L): ReactNode[] {
  const a = "text-accent-500 hover:underline";
  const web = `/${l}/${langSlug(l, "web-design-smes")}/`;
  const auto = `/${l}/${langSlug(l, "what-can-sme-automate-marketing")}/`;
  const digi = `/${l}/${langSlug(l, "how-to-digitalise-your-business")}/`;
  if (l === "en") {
    return [
      <><strong>A website that answers what your customers search for.</strong> If almost two in three connected micro-businesses have no website, a clear site with your services, your area and an easy way to get in touch already sets you apart. More in <Link href={web} className={a}>web design for SMEs</Link>.</>,
      <><strong>Selling or taking bookings online.</strong> Only 11.8% of firms with fewer than 10 employees sold through e-commerce in 2025. You do not need a large online shop: a catalogue with ordering, a booking system or a well-built quote form already count.</>,
      <><strong>AI for specific tasks, not because it is trendy.</strong> One in five connected micro-businesses already uses it. It pays off most in repetitive work: answering frequent questions, preparing quotes or following up on leads. See examples in <Link href={auto} className={a}>what an SME can automate in marketing and sales</Link>.</>,
      <><strong>Get organised before you invest.</strong> Before paying for tools, find out what you have and what is missing. There is a step-by-step method in <Link href={digi} className={a}>how to digitalise your business</Link>.</>,
    ];
  }
  return [
    <><strong>Un site qui répond à ce que cherchent vos clients.</strong> Si près de deux microentreprises connectées sur trois n&apos;ont pas de site, un site clair, avec vos services, votre zone d&apos;intervention et un moyen simple de vous contacter vous distingue déjà. Plus d&apos;informations dans <Link href={web} className={a}>création de site web pour PME</Link>.</>,
    <><strong>Vendre ou prendre des réservations en ligne.</strong> Seules 11,8 % des entreprises de moins de 10 salariés ont vendu par commerce électronique en 2025. Pas besoin d&apos;une grande boutique en ligne : un catalogue avec commande, un système de réservation ou un formulaire de devis bien conçu suffisent pour commencer.</>,
    <><strong>L&apos;IA pour des tâches précises, pas par effet de mode.</strong> Une microentreprise connectée sur cinq l&apos;utilise déjà. Elle est surtout rentable sur les tâches répétitives : répondre aux questions fréquentes, préparer des devis ou relancer les contacts. Exemples dans <Link href={auto} className={a}>ce qu&apos;une PME peut automatiser en marketing et en vente</Link>.</>,
    <><strong>S&apos;organiser avant d&apos;investir.</strong> Avant de payer des outils, faites le point sur ce que vous avez et ce qui vous manque. Méthode pas à pas dans <Link href={digi} className={a}>comment digitaliser votre entreprise</Link>.</>,
  ];
}

export default async function Page({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const l = pick(lang);
  const t = T[l];
  const m = META[l];
  const url = pageUrl(l);
  const audit = `/${l}/${langSlug(l, "digital-audit")}/`;
  const a = "text-accent-500 hover:underline";

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: m.h1,
    description: m.description,
    inLanguage: l,
    author: autorSchema(lang),
    publisher: { "@type": "Organization", "@id": "https://www.mktweb360.com/#organization", name: "Mkt Web 360 SLU", url: "https://www.mktweb360.com" },
    datePublished: DATE,
    dateModified: DATE,
    image: `https://www.mktweb360.com${OG[l]}`,
    url,
    mainEntityOfPage: url,
  };
  const datasetSchema = {
    "@context": "https://schema.org",
    "@type": "Dataset",
    name: t.datasetName,
    description: t.datasetDesc,
    url: `${url}#key-figures`,
    creator: { "@type": "Organization", name: "Instituto Nacional de Estadística (INE)", url: "https://www.ine.es" },
    publisher: { "@type": "Organization", "@id": "https://www.mktweb360.com/#organization", name: "Mkt Web 360 SLU", url: "https://www.mktweb360.com" },
    citation: `INE. Encuesta sobre el uso de TIC y del comercio electrónico en las empresas. Año 2025 - Primer trimestre 2026. Nota de prensa, 22/10/2026. ${INE_URL}`,
    isBasedOn: INE_URL,
    datePublished: DATE,
    temporalCoverage: "2025/2026",
    spatialCoverage: { "@type": "Place", name: l === "en" ? "Spain" : "Espagne" },
    isAccessibleForFree: true,
    variableMeasured: t.key.map((k) => k[0]),
  };
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: t.faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(datasetSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <article className="mw-article max-w-3xl mx-auto px-4 py-12">
        <Breadcrumbs crumbs={[{ label: t.crumbHome, href: `/${l}/` }, { label: "Blog", href: `/${l}/blog/` }, { label: t.crumb }]} />

        <header className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="bg-primary-100 text-primary-700 text-xs font-medium px-2.5 py-0.5 rounded-full">{t.badge}</span>
            <time className="text-sm text-gray-400" dateTime={DATE}>{t.dateLabel}</time>
          </div>
          <h1 className="text-4xl font-bold text-primary-600 mb-4 leading-tight">{m.h1}</h1>
          <AuthorByline lang={lang} block />
          <p className="text-xl text-gray-600 leading-relaxed">{t.intro}</p>
          <Image src={OG[l]} alt={t.alt} width={1200} height={630} className="w-full rounded-2xl mt-6" priority />
        </header>

        <div className="text-gray-700 space-y-6 leading-relaxed">
          <p>{t.answer}</p>

          <h2 id="key-figures" className="text-2xl font-bold text-primary-600">{t.h2Key}</h2>
          <Tabla cabecera={t.keyHead} filas={t.key} />
          <p className="text-sm text-gray-500">{t.keySource}</p>

          <h2 className="text-2xl font-bold text-primary-600">{t.h2Web}</h2>
          {t.web.map((p, i) => <p key={i}>{p}</p>)}

          <h2 className="text-2xl font-bold text-primary-600">{t.h2Social}</h2>
          <p>{t.social}</p>

          <h2 className="text-2xl font-bold text-primary-600">{t.h2Ai}</h2>
          <p>{t.ai}</p>
          <p>{t.sectorIntro}</p>
          <Tabla cabecera={t.sectorHead} filas={t.sectors} />

          <h2 className="text-2xl font-bold text-primary-600">{t.h2Shop}</h2>
          <p>{t.shop}</p>

          <h2 className="text-2xl font-bold text-primary-600">{t.h2Trend}</h2>
          <p>{t.trend}</p>
          <Tabla cabecera={t.trendHead} filas={t.trendRows} />
          <p>{t.trendNote}</p>

          <h2 className="text-2xl font-bold text-primary-600">{t.h2Eu}</h2>
          <p>{t.eu}</p>

          <h2 className="text-2xl font-bold text-primary-600">{t.h2Opp}</h2>
          <Lista items={oportunidades(l)} numerada />

          <div className="bg-primary-50 rounded-xl p-6 border border-primary-100">
            <p className="font-semibold text-primary-700 mb-2">{t.ctaTitle}</p>
            <p className="text-gray-600 text-sm mb-4">{t.ctaText}</p>
            <Link href={audit} className="inline-block bg-accent-500 text-white px-6 py-2.5 rounded-full font-semibold text-sm hover:bg-accent-600 transition-colors">
              {t.ctaBtn}
            </Link>
          </div>

          <h2 className="text-2xl font-bold text-primary-600">{t.h2Method}</h2>
          <Lista items={t.method} />

          <h2 className="text-2xl font-bold text-primary-600">{t.h2Faq}</h2>
          <div className="space-y-3">
            {t.faqs.map((faq) => (
              <details key={faq.q} className="mw-faq group rounded-2xl bg-gray-50 ring-1 ring-gray-200 transition-all duration-300 open:bg-white open:ring-transparent open:shadow-[0_20px_45px_-25px_rgba(124,58,237,0.45)]">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-6 py-5 font-bold text-primary-700 [&::-webkit-details-marker]:hidden">
                  {faq.q}
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white text-xl leading-none text-accent-500 ring-1 ring-gray-200 transition-all duration-300 group-open:rotate-45 group-open:bg-gradient-to-br group-open:from-[#7c3aed] group-open:to-accent-500 group-open:text-white group-open:ring-0" aria-hidden="true">+</span>
                </summary>
                <div className="mw-faq-body px-6 pb-6 text-gray-600 leading-relaxed">{faq.a}</div>
              </details>
            ))}
          </div>

          <h2 className="text-2xl font-bold text-primary-600">{t.h2Sources}</h2>
          <ol className="space-y-2 list-decimal list-inside text-sm">
            {t.sources.map((f) => (
              <li key={f.url} className="text-gray-600">
                {f.texto}{" "}
                <a href={f.url} target="_blank" rel="noopener noreferrer" className="text-accent-500 hover:underline break-all">
                  {f.url}
                </a>
              </li>
            ))}
          </ol>

          <p className="text-sm text-gray-500 pt-4">
            {t.related}{" "}
            <Link href={`/${l}/${langSlug(l, "web-design-smes")}/`} className={a}>{l === "en" ? "Web design for SMEs" : "Création de site web pour PME"}</Link> ·{" "}
            <Link href={audit} className={a}>{l === "en" ? "Free digital diagnosis" : "Diagnostic digital gratuit"}</Link>
          </p>
        </div>

        <nav className="mt-12 pt-8 border-t border-gray-200">
          <Link href={`/${l}/blog/`} className="text-accent-500 hover:text-accent-600 font-medium text-sm">{t.back}</Link>
        </nav>
      </article>
      <RelatedArticles currentSlug={ES_SLUG} />
    </>
  );
}
