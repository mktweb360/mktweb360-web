import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { BlogBanner } from "@/components/BlogBanner";
import { RelatedArticles } from "@/components/RelatedArticles";
import { alternatesFor } from "@/lib/i18n/routes";
import { AuthorByline } from "@/components/AuthorByline";
import { autorSchema } from "@/lib/autor";

// 31/10/2026 — reescritura EN/FR del artículo ES /factura-electronica-obligatoria-autonomos-pymes/ (tema 6, aprobado por José).
// Mismas fechas y fuentes que la versión ES (comprobadas el 28/10/2026). Si cambia el calendario de Verifactu, cambiar los tres idiomas.

const SLUG = "electronic-invoice-spain";
// Imagen traducida por idioma (anexo del 28/10/2026): misma línea temporal que la ES, con textos en EN/FR.
const ogFor = (lang: string) => `/og-${SLUG}-${lang === "fr" ? "fr" : "en"}.jpg`;
const DATE_PUBLISHED = "2026-06-12";
const DATE_MODIFIED = "2026-10-31";

type Faq = { q: string; a: string };
type Content = {
  title: string;
  description: string;
  h1: string;
  crumb: string;
  updated: ReactNode;
  intro: string;
  alt: string;
  answer: ReactNode;
  disclaimerTitle: string;
  disclaimer: string;
  summaryH: string;
  summary: ReactNode[];
  diffH: string;
  diffP: string;
  diffHead: string[];
  diff: string[][];
  calH: string;
  calP: string;
  calHead: string[];
  cal: string[][];
  calNote: string;
  treeH: string;
  tree: ReactNode[];
  treeLinks: ReactNode;
  shopH: string;
  shopP: string;
  shopHead: string[];
  shop: string[][];
  shopLinks: ReactNode;
  stepsH: string;
  steps: ReactNode[];
  mythsH: string;
  myths: ReactNode[];
  ctaTitle: string;
  ctaText: string;
  ctaButton: string;
  faqH: string;
  faqs: Faq[];
  sourcesH: string;
  sources: { texto: string; url: string }[];
  related: ReactNode;
  back: string;
};

const SOURCE_URLS = {
  calendar: "https://sede.agenciatributaria.gob.es/Sede/eu_es/iva/factura-electronica/calendario-implantacion.html",
  order: "https://www.boe.es/buscar/act.php?id=BOE-A-2026-20587",
  rd238: "https://sede.agenciatributaria.gob.es/Sede/todas-noticias/2026/marzo/31/facturacion-electronica-obligatoria.html",
  law18: "https://www.boe.es/buscar/act.php?id=BOE-A-2022-15818",
  rd1007: "https://www.boe.es/buscar/act.php?id=BOE-A-2023-24840",
  faqVerifactu: "https://sede.agenciatributaria.gob.es/Sede/iva/sistemas-informaticos-facturacion-verifactu/preguntas-frecuentes/cuestiones-generales-ambitos-aplicacion.html",
  manualVerifactu: "https://sede.agenciatributaria.gob.es/Sede/ayuda/manuales-videos-folletos/manuales-practicos/folleto-actividades-economicas/5-impuesto-sobre-valor-anadido/5_12-veri-factu.html",
  haciendaNote: "https://www.hacienda.gob.es/sgt/gabsehacienda/nota-informativa-verifactu.pdf",
};

const a = "text-accent-500 hover:underline";

const EN: Content = {
  title: "Verifactu 2027 and E-invoicing in Spain: Key Dates",
  description:
    "Verifactu and Spain's mandatory B2B e-invoice are two different obligations. Official 2027-2029 dates, who they apply to and what your website, online store and POS need to do.",
  h1: "Verifactu and mandatory e-invoicing in Spain: 2027-2028 dates and what your website or online store must do",
  crumb: "Verifactu and e-invoicing in Spain",
  updated: <>Updated <time dateTime={DATE_MODIFIED}>31 October 2026</time> · first published <time dateTime={DATE_PUBLISHED}>12 June 2026</time></>,
  intro:
    "If you run a business in Spain, you will hear about Verifactu and about mandatory e-invoicing, often as if they were the same thing. They are not: each has its own rules, dates and impact on your online store, your POS and your invoicing software.",
  alt: "2027-2029 timeline with two lanes: Verifactu (1 January and 1 July 2027, announced postponement to October 2028) and B2B e-invoicing (6 October 2027, 2028 and 2029)",
  answer: (
    <>
      Verifactu and e-invoicing are two separate obligations in Spain. <strong>Verifactu</strong> covers the software you invoice with, including your online store and POS: from 1 January 2027 for companies paying corporate tax and from 1 July 2027 for everyone else, including the self-employed. <strong>B2B e-invoicing</strong> starts on 6 October 2027 for businesses above €8 million and on 6 October 2028 for the rest.
    </>
  ),
  disclaimerTitle: "This is not tax advice",
  disclaimer:
    "We explain what the Spanish Official Gazette (BOE) and the Tax Agency (AEAT) say and what it means for your website and tools. How it applies to your activity, VAT scheme or legal form must be confirmed by your gestoría or tax adviser in Spain.",
  summaryH: "Quick summary",
  summary: [
    <><strong>Two different obligations.</strong> Verifactu is about the software that issues your invoices; e-invoicing is about invoices between businesses.</>,
    <>Verifactu: <strong>1 January 2027</strong> for corporate taxpayers and <strong>1 July 2027</strong> for everyone else, including autónomos (self-employed).</>,
    <>On 5 October 2026 the Ministry of Finance announced it plans to postpone Verifactu to October 2028. As of 28 October 2026 this is not in the BOE, so the 2027 dates still apply.</>,
    <>B2B e-invoicing: <strong>6 October 2027</strong> above €8 million in turnover and <strong>6 October 2028</strong> for everyone else.</>,
    <>Your online store and POS count as invoicing systems if they issue invoices or receipts. A website that sells nothing does not need to change for Verifactu.</>,
  ],
  diffH: "What is the difference between Verifactu and e-invoicing?",
  diffP:
    "Verifactu is the popular name of Spain's regulation on invoicing software. It does not change who you invoice or how you send the invoice: it changes the program that creates it, which must keep a chained record of every invoice and print a QR code on it. Mandatory e-invoicing changes the format of invoices between businesses and professionals: instead of paper or a PDF, they become a structured file exchanged through a platform.",
  diffHead: ["", "Verifactu", "B2B e-invoicing"],
  diff: [
    ["What it regulates", "The software you invoice with: each invoice leaves a record chained to the previous one, so it cannot be altered without a trace", "The format of invoices between businesses: they must be issued and received as structured electronic files, and their payment status reported"],
    ["Legal basis", "Royal Decree 1007/2023 (invoicing software regulation)", "Law 18/2022 (Crea y Crece), Royal Decree 238/2026 and Order HAC/1028/2026"],
    ["Which invoices", "Every invoice issued with software, including receipts and sales to consumers", "Invoices between businesses and professionals"],
    ["What you see on the invoice", "A QR code the customer can use to send invoice data to the Tax Agency", "A structured file sent through an exchange platform or the Tax Agency's public solution, not a PDF by email"],
    ["From when", "1/1/2027 (corporate taxpayers) and 1/7/2027 (others). Postponement to October 2028 announced, not yet published", "6/10/2027 (above €8 million) and 6/10/2028 (others)"],
  ],
  calH: "What is the official 2027-2029 calendar?",
  calP: "These dates were checked on 28 October 2026 in the BOE and on the Tax Agency's website (dates in day/month/year):",
  calHead: ["Date", "What starts", "Who", "Source"],
  cal: [
    ["6/10/2026", "Order HAC/1028/2026 enters into force and the e-invoicing deadlines start counting", "—", "BOE of 05/10/2026 and AEAT"],
    ["1/1/2027", "Verifactu: compliant invoicing software", "Corporate income taxpayers", "RD 1007/2023, as amended by RDL 15/2025 (BOE)"],
    ["1/7/2027", "Verifactu: compliant invoicing software", "Everyone else, including the self-employed", "RD 1007/2023 (BOE) and AEAT"],
    ["6/10/2027", "E-invoicing: issue and receive, and report invoice and payment status. For 12 months, with a readable PDF for other businesses", "Turnover above €8 million in the previous year", "AEAT implementation calendar"],
    ["October 2028 (announced)", "Verifactu: planned postponement of pending obligations", "Everyone not yet obliged", "Ministry of Finance note of 05/10/2026. Not yet in the BOE"],
    ["6/10/2028", "E-invoicing: issue and receive. Report payment status if you are a company or entity", "All other businesses and professionals", "AEAT implementation calendar"],
    ["6/10/2029", "E-invoicing: report invoice and payment status", "Self-employed individuals and entities under the attribution-of-income regime", "AEAT implementation calendar"],
  ],
  calNote:
    "About the Verifactu postponement: on 5 October 2026 the Ministry of Finance published a note saying it plans to delay the pending obligations until October 2028, to align them with e-invoicing for businesses below €8 million. As of 28 October 2026, the consolidated text of Royal Decree 1007/2023 in the BOE still shows 1 January and 1 July 2027. Plan with those dates; we will update this article when the change is published.",
  treeH: "Does it apply to me? Six questions",
  tree: [
    <><strong>Is your tax address in the Basque Country or Navarre?</strong> Verifactu does not apply: those regions have their own systems (TicketBAI in the Basque Country). Ask your adviser about e-invoicing.</>,
    <><strong>Are you in SII (Immediate Supply of Information)?</strong> Verifactu does not apply either: the Tax Agency treats SII as an exclusive regime.</>,
    <><strong>Do you issue invoices or receipts with any software</strong> (invoicing software, your online store, a POS or a cash register)? Then Verifactu applies: 1 January 2027 for companies and 1 July 2027 for the self-employed. If you invoice entirely by hand, with no software, it does not.</>,
    <><strong>Do you have business customers?</strong> You will have to send them e-invoices: from 6 October 2027 above €8 million, from 6 October 2028 otherwise.</>,
    <><strong>Do you buy from businesses?</strong> Almost everyone does: you will also have to receive their invoices electronically on the same dates, even if your store only sells to consumers.</>,
    <><strong>Are you self-employed (an individual)?</strong> Reporting the payment status of your invoices comes later: 6 October 2029.</>,
  ],
  treeLinks: (
    <>
      If you are setting up in Spain, see <Link href="/en/how-to-register-as-freelancer/" className={a}>how to register as self-employed</Link> and <Link href="/en/freelancer-social-security-spain-2026/" className={a}>self-employed social security in 2026</Link>.
    </>
  ),
  shopH: "What does your online store (WooCommerce, Shopify) or POS need to do?",
  shopP:
    "The Tax Agency is clear on one point: it makes no difference whether you sell in a shop or online. If software issues your invoices or receipts, that software must comply. What changes is where that software sits:",
  shopHead: ["Where you invoice", "What to check"],
  shop: [
    ["WooCommerce", "Invoices or receipts usually come from a plugin or from a program connected to the store. That plugin or program is your invoicing system: ask the provider for its declaration of conformity (declaración responsable) and check that it adds the QR code to the invoices customers download."],
    ["Shopify", "For Spain, invoices usually come from an invoicing app or your management software. Ask the provider whether it is adapted to Verifactu and whether it will issue e-invoices to business customers. If not, connect the store to software that is."],
    ["POS or cash register", "If it issues receipts (simplified invoices), the Tax Agency treats it as an invoicing system. If you sell in store and online, make sure both channels end up in compliant systems with controlled numbering."],
    ["Invoicing software or ERP", "Ask for the declaration of conformity, which must be shown in writing inside the program. Also ask how it will send and receive e-invoices: through a private exchange platform or the Tax Agency's public solution."],
    ["Website without sales", "If your website only provides information or collects enquiries and does not issue invoices, Verifactu asks nothing of it. The change is in the software you invoice with afterwards."],
  ],
  shopLinks: (
    <>
      If you sell in store and online, the tricky part is keeping both channels in one controlled system: see <Link href="/en/connect-pos-to-online-store/" className={a}>how to connect your POS to your online store</Link>. If you are still choosing a platform, ask about invoicing before you decide: we compare them in <Link href="/en/woocommerce-vs-shopify/" className={a}>WooCommerce vs Shopify</Link>.
    </>
  ),
  stepsH: "What can you do now, without waiting for the deadline?",
  steps: [
    <><strong>List everything that issues invoices or receipts:</strong> invoicing software, your online store and its plugins or apps, POS, cash register and any spreadsheet with macros.</>,
    <><strong>Ask each provider for the declaration of conformity</strong> with the Verifactu regulation, and for the date you will get the compliant version.</>,
    <><strong>Choose the mode with your adviser:</strong> VERI*FACTU (the software sends each record to the Tax Agency when invoicing) or non-VERI*FACTU (it keeps the records with the regulation’s safeguards without sending them).</>,
    <><strong>Review your online store:</strong> it should ask for and store the tax ID (NIF) and billing details of business customers, and its invoices should carry the QR code.</>,
    <><strong>Plan e-invoicing with your provider:</strong> how you will issue and receive B2B invoices before 6 October 2028 (or 2027 above €8 million).</>,
  ],
  mythsH: "Which mistakes and myths about Verifactu keep coming up?",
  myths: [
    <><strong>“Verifactu forces me to issue e-invoices.”</strong> No. Verifactu regulates your invoicing software and its records. B2B e-invoicing is a separate obligation with its own rules and dates.</>,
    <><strong>“Verifactu has already been postponed to 2028.”</strong> So far it is an announcement from 5 October 2026. Until it is published in the BOE, the legal dates are those of 2027.</>,
    <><strong>“I only sell to consumers, so none of this affects me.”</strong> Verifactu covers receipts and online sales, and you will have to receive your suppliers’ invoices electronically.</>,
    <><strong>“With Verifactu the Tax Agency receives all my invoices.”</strong> Only in VERI*FACTU mode, where the software sends each record. In the other mode the records stay in your system.</>,
    <><strong>“A PDF sent by email is already an e-invoice.”</strong> The mandatory e-invoice is a structured file sent through a platform or the public solution. Large businesses will add a readable PDF only during the first 12 months.</>,
  ],
  ctaTitle: "Want to know how your website or online store is doing?",
  ctaText:
    "Our free digital audit reviews your website's technical health, your visibility on Google and AI assistants, and your Google Business Profile. You receive it by email within 24 business hours, with no commitment. For the tax side, talk to your adviser.",
  ctaButton: "Request the free audit",
  faqH: "Frequently asked questions",
  faqs: [
    { q: "Is Verifactu the same as e-invoicing?", a: "No. Verifactu sets the requirements for the software you invoice with, including receipts, and also applies to sales to consumers. Mandatory e-invoicing covers invoices between businesses and professionals, which must be issued and received electronically. They have different rules and dates." },
    { q: "Has Verifactu been postponed to 2028?", a: "The Spanish Ministry of Finance announced on 5 October 2026 that it plans to postpone it to October 2028. As of 28 October 2026 the change has not been published in the BOE, so the current dates remain 1 January 2027 for corporate taxpayers and 1 July 2027 for everyone else. Check with your adviser before making decisions." },
    { q: "Does Verifactu apply if my online store only sells to consumers?", a: "Yes, if you use software to issue invoices or receipts. The Tax Agency states that it makes no difference whether the sale is in person or online, and that simplified invoices are included." },
    { q: "Can I keep invoicing with Excel or Word?", a: "According to the Tax Agency, Excel or Word are not an invoicing system if you only use them to write, print or store invoices. They are if, for example through macros, they automatically generate registers or other outputs." },
    { q: "Does the Tax Agency offer a free tool?", a: "Yes. The Tax Agency will offer a free basic invoicing application for Verifactu and is developing a free application or form to issue e-invoices through its public solution." },
  ],
  sourcesH: "Sources",
  sources: [
    { texto: "Spanish Tax Agency (AEAT): e-invoicing implementation calendar (updated 13/10/2026; accessed 28/10/2026).", url: SOURCE_URLS.calendar },
    { texto: "BOE: Order HAC/1028/2026 of 2 October on the public e-invoicing solution (BOE of 05/10/2026, in force 06/10/2026).", url: SOURCE_URLS.order },
    { texto: "AEAT: mandatory e-invoicing, Royal Decree 238/2026 (BOE of 31/03/2026).", url: SOURCE_URLS.rd238 },
    { texto: "BOE: Law 18/2022 on business creation and growth.", url: SOURCE_URLS.law18 },
    { texto: "BOE: Royal Decree 1007/2023, consolidated text (fourth final provision, as amended by Royal Decree-law 15/2025; accessed 28/10/2026).", url: SOURCE_URLS.rd1007 },
    { texto: "AEAT: VERI*FACTU FAQ, scope (updated 21/10/2026).", url: SOURCE_URLS.faqVerifactu },
    { texto: "AEAT: VERI*FACTU in the business activities manual.", url: SOURCE_URLS.manualVerifactu },
    { texto: "Spanish Ministry of Finance: information note of 05/10/2026 on the planned change to VERI*FACTU deadlines.", url: SOURCE_URLS.haciendaNote },
  ],
  related: (
    <>
      Related services: <Link href="/en/online-store-offer/" className={a}>Online store with no commissions</Link> · <Link href="/en/ecommerce-no-commissions/" className={a}>E-commerce web design</Link> · <Link href="/en/digital-audit/" className={a}>Free digital audit</Link>
    </>
  ),
  back: "← Back to the blog",
};

const FR: Content = {
  title: "Verifactu 2027 et facture électronique en Espagne : les dates",
  description:
    "Verifactu et la facture électronique B2B obligatoire en Espagne sont deux obligations distinctes. Dates officielles 2027-2029, qui est concerné et ce que doivent faire votre site, votre boutique en ligne et votre TPV.",
  h1: "Verifactu et facture électronique obligatoire en Espagne : dates 2027-2028 et ce que doit faire votre site ou votre boutique en ligne",
  crumb: "Verifactu et facture électronique en Espagne",
  updated: <>Mis à jour le <time dateTime={DATE_MODIFIED}>31 octobre 2026</time> · publié le <time dateTime={DATE_PUBLISHED}>12 juin 2026</time></>,
  intro:
    "Si vous avez une entreprise en Espagne, vous entendrez parler de Verifactu et de la facture électronique obligatoire, souvent comme s’il s’agissait de la même chose. Ce n’est pas le cas : chacune a ses règles, ses dates et ses effets sur votre boutique en ligne, votre TPV et votre logiciel de facturation.",
  alt: "Frise chronologique 2027-2029 à deux voies : Verifactu (1er janvier et 1er juillet 2027, report annoncé à octobre 2028) et facture électronique entre entreprises (6 octobre 2027, 2028 et 2029)",
  answer: (
    <>
      Verifactu et la facture électronique sont deux obligations distinctes en Espagne. <strong>Verifactu</strong> concerne le logiciel avec lequel vous facturez, y compris votre boutique en ligne et votre TPV : à partir du 1er janvier 2027 pour les sociétés soumises à l’impôt sur les sociétés et du 1er juillet 2027 pour les autres, indépendants compris. La <strong>facture électronique B2B</strong> arrive le 6 octobre 2027 au-delà de 8 millions d’euros et le 6 octobre 2028 pour les autres.
    </>
  ),
  disclaimerTitle: "Ceci n’est pas un conseil fiscal",
  disclaimer:
    "Nous expliquons ce que disent le Journal officiel espagnol (BOE) et l’administration fiscale (AEAT), et ce que cela implique pour votre site et vos outils. La manière dont cela s’applique à votre activité, à votre régime de TVA ou à votre forme juridique doit être confirmée par votre gestoría ou votre conseiller fiscal en Espagne.",
  summaryH: "En bref",
  summary: [
    <><strong>Deux obligations différentes.</strong> Verifactu porte sur le logiciel qui émet vos factures ; la facture électronique, sur les factures entre entreprises.</>,
    <>Verifactu : <strong>1er janvier 2027</strong> pour les sociétés et <strong>1er juillet 2027</strong> pour les autres, autónomos (indépendants) compris.</>,
    <>Le 5 octobre 2026, le ministère des Finances a annoncé vouloir reporter Verifactu à octobre 2028. Au 28 octobre 2026, ce n’est pas publié au BOE : les dates de 2027 s’appliquent toujours.</>,
    <>Facture électronique B2B : <strong>6 octobre 2027</strong> au-delà de 8 millions d’euros de chiffre d’affaires et <strong>6 octobre 2028</strong> pour les autres.</>,
    <>Votre boutique en ligne et votre TPV sont des systèmes de facturation s’ils émettent des factures ou des tickets. Un site sans ventes n’a rien à changer pour Verifactu.</>,
  ],
  diffH: "Quelle est la différence entre Verifactu et la facture électronique ?",
  diffP:
    "Verifactu est le nom courant du règlement espagnol sur les logiciels de facturation. Il ne change ni vos clients ni la façon d’envoyer la facture : il change le programme qui la produit, qui doit conserver un enregistrement chaîné de chaque facture et y imprimer un code QR. La facture électronique obligatoire change le format des factures entre entreprises et professionnels : au lieu du papier ou du PDF, elles deviennent un fichier structuré échangé via une plateforme.",
  diffHead: ["", "Verifactu", "Facture électronique B2B"],
  diff: [
    ["Ce qu’elle encadre", "Le logiciel de facturation : chaque facture laisse un enregistrement chaîné au précédent, impossible à modifier sans laisser de trace", "Le format des factures entre entreprises : émises et reçues sous forme de fichier électronique structuré, avec communication du statut de paiement"],
    ["Base légale", "Décret royal 1007/2023 (règlement des logiciels de facturation)", "Loi 18/2022 (Crea y Crece), décret royal 238/2026 et arrêté HAC/1028/2026"],
    ["Quelles factures", "Toutes celles émises avec un logiciel, y compris les tickets et les ventes aux particuliers", "Les factures entre entreprises et professionnels"],
    ["Ce qui se voit sur la facture", "Un code QR qui permet au client d’envoyer des données de la facture à l’administration fiscale", "Un fichier structuré envoyé via une plateforme d’échange ou la solution publique de l’AEAT, pas un PDF par e-mail"],
    ["À partir de quand", "1/1/2027 (sociétés) et 1/7/2027 (autres). Report à octobre 2028 annoncé, non publié", "6/10/2027 (plus de 8 millions d’euros) et 6/10/2028 (autres)"],
  ],
  calH: "Quel est le calendrier officiel 2027-2029 ?",
  calP: "Dates vérifiées le 28 octobre 2026 au BOE et sur le site de l’administration fiscale espagnole (format jour/mois/année) :",
  calHead: ["Date", "Ce qui commence", "Qui", "Source"],
  cal: [
    ["6/10/2026", "Entrée en vigueur de l’arrêté HAC/1028/2026 : les délais de la facture électronique commencent à courir", "—", "BOE du 05/10/2026 et AEAT"],
    ["1/1/2027", "Verifactu : logiciel de facturation conforme", "Sociétés soumises à l’impôt sur les sociétés", "Décret royal 1007/2023, modifié par le décret-loi royal 15/2025 (BOE)"],
    ["1/7/2027", "Verifactu : logiciel de facturation conforme", "Tous les autres, indépendants compris", "Décret royal 1007/2023 (BOE) et AEAT"],
    ["6/10/2027", "Facture électronique : émettre et recevoir, et communiquer le statut des factures et des paiements. Pendant 12 mois, avec un PDF lisible pour les autres entreprises", "Plus de 8 millions d’euros de chiffre d’affaires l’année précédente", "Calendrier de mise en œuvre de l’AEAT"],
    ["Octobre 2028 (annoncé)", "Verifactu : report prévu des obligations en attente", "Tous ceux qui ne sont pas encore obligés", "Note du ministère des Finances du 05/10/2026. Pas encore publiée au BOE"],
    ["6/10/2028", "Facture électronique : émettre et recevoir. Statut de paiement pour les sociétés et entités", "Toutes les autres entreprises et professionnels", "Calendrier de mise en œuvre de l’AEAT"],
    ["6/10/2029", "Facture électronique : communiquer le statut des factures et des paiements", "Indépendants (personnes physiques) et entités en régime d’attribution de revenus", "Calendrier de mise en œuvre de l’AEAT"],
  ],
  calNote:
    "À propos du report de Verifactu : le 5 octobre 2026, le ministère des Finances a publié une note annonçant son intention de reporter les obligations en attente à octobre 2028, pour les aligner sur la facture électronique des entreprises de moins de 8 millions d’euros. Au 28 octobre 2026, le texte consolidé du décret royal 1007/2023 au BOE indique toujours le 1er janvier et le 1er juillet 2027. Préparez-vous avec ces dates ; nous mettrons cet article à jour dès la publication.",
  treeH: "Suis-je concerné ? Six questions",
  tree: [
    <><strong>Votre domicile fiscal est-il au Pays basque ou en Navarre ?</strong> Verifactu ne s’applique pas : ces régions ont leurs propres systèmes (TicketBAI au Pays basque). Pour la facture électronique, demandez à votre conseiller.</>,
    <><strong>Êtes-vous au SII (Suministro Inmediato de Información) ?</strong> Verifactu ne s’applique pas non plus : l’AEAT considère le SII comme un régime exclusif.</>,
    <><strong>Émettez-vous des factures ou des tickets avec un logiciel</strong> (de facturation, votre boutique en ligne, un TPV ou une caisse enregistreuse) ? Alors Verifactu vous concerne : 1er janvier 2027 pour les sociétés, 1er juillet 2027 pour les indépendants. Si vous facturez entièrement à la main, sans logiciel, non.</>,
    <><strong>Avez-vous des clients professionnels ?</strong> Vous devrez leur envoyer des factures électroniques : à partir du 6 octobre 2027 au-delà de 8 millions d’euros, du 6 octobre 2028 sinon.</>,
    <><strong>Achetez-vous à des entreprises ?</strong> Presque tout le monde : vous devrez aussi recevoir leurs factures au format électronique aux mêmes dates, même si votre boutique ne vend qu’à des particuliers.</>,
    <><strong>Êtes-vous indépendant (personne physique) ?</strong> La communication du statut de paiement de vos factures arrive plus tard : le 6 octobre 2029.</>,
  ],
  treeLinks: (
    <>
      Si vous vous installez en Espagne, voir <Link href="/fr/how-to-register-as-freelancer/" className={a}>comment s’inscrire comme indépendant</Link> et <Link href="/fr/freelancer-social-security-spain-2026/" className={a}>les cotisations des indépendants en 2026</Link>.
    </>
  ),
  shopH: "Que doit faire votre boutique en ligne (WooCommerce, Shopify) ou votre TPV ?",
  shopP:
    "L’administration fiscale espagnole est claire sur un point : peu importe que vous vendiez en magasin ou en ligne. Si un logiciel émet vos factures ou vos tickets, ce logiciel doit être conforme. Ce qui change, c’est l’endroit où il se trouve :",
  shopHead: ["Où vous facturez", "Ce qu’il faut vérifier"],
  shop: [
    ["WooCommerce", "Les factures ou tickets sortent en général d’un plugin ou d’un programme relié à la boutique. Ce plugin ou programme est votre système de facturation : demandez au fournisseur sa déclaration de conformité (declaración responsable) et vérifiez qu’il ajoute le code QR aux factures téléchargées par le client."],
    ["Shopify", "Pour l’Espagne, les factures sortent en général d’une app de facturation ou de votre logiciel de gestion. Demandez au fournisseur s’il est adapté à Verifactu et s’il pourra émettre des factures électroniques aux clients professionnels. Sinon, reliez la boutique à un logiciel qui l’est."],
    ["TPV ou caisse enregistreuse", "S’il émet des tickets (factures simplifiées), l’AEAT le considère comme un système de facturation. Si vous vendez en magasin et en ligne, faites en sorte que les deux canaux aboutissent à des systèmes conformes avec une numérotation maîtrisée."],
    ["Logiciel de facturation ou ERP", "Demandez la déclaration de conformité, qui doit figurer par écrit et de façon visible dans le logiciel. Demandez aussi comment il enverra et recevra les factures électroniques : via une plateforme d’échange privée ou la solution publique de l’AEAT."],
    ["Site sans ventes", "Si votre site informe ou recueille des demandes sans émettre de factures, Verifactu ne lui demande rien. Le changement concerne le logiciel avec lequel vous facturez ensuite."],
  ],
  shopLinks: (
    <>
      Si vous vendez en magasin et en ligne, le point délicat est de garder les deux canaux dans un système maîtrisé : voir <Link href="/fr/connecter-tpv-boutique-ligne/" className={a}>comment connecter votre TPV à votre boutique en ligne</Link>. Si vous choisissez encore votre plateforme, posez la question de la facturation avant de décider : nous les comparons dans <Link href="/fr/woocommerce-vs-shopify/" className={a}>WooCommerce ou Shopify</Link>.
    </>
  ),
  stepsH: "Que pouvez-vous faire dès maintenant ?",
  steps: [
    <><strong>Listez tout ce qui émet des factures ou des tickets :</strong> logiciel de facturation, boutique en ligne et ses plugins ou apps, TPV, caisse et tout tableur avec macros.</>,
    <><strong>Demandez à chaque fournisseur la déclaration de conformité</strong> au règlement Verifactu, et la date de la version conforme.</>,
    <><strong>Choisissez le mode avec votre conseiller :</strong> VERI*FACTU (le logiciel envoie chaque enregistrement à l’AEAT au moment de facturer) ou non VERI*FACTU (il les conserve avec les garanties du règlement sans les envoyer).</>,
    <><strong>Vérifiez votre boutique en ligne :</strong> elle doit demander et conserver le numéro fiscal (NIF) et les coordonnées de facturation des clients professionnels, et ses factures doivent porter le code QR.</>,
    <><strong>Préparez la facture électronique avec votre fournisseur :</strong> comment vous émettrez et recevrez les factures B2B avant le 6 octobre 2028 (ou 2027 au-delà de 8 millions d’euros).</>,
  ],
  mythsH: "Quelles erreurs et idées reçues circulent sur Verifactu ?",
  myths: [
    <><strong>« Verifactu oblige à émettre des factures électroniques. »</strong> Non. Verifactu encadre votre logiciel de facturation et ses enregistrements. La facture électronique B2B est une autre obligation, avec ses propres règles et dates.</>,
    <><strong>« Verifactu est déjà reporté à 2028. »</strong> Pour l’instant, c’est une annonce du 5 octobre 2026. Tant qu’elle n’est pas publiée au BOE, les dates légales sont celles de 2027.</>,
    <><strong>« Je ne vends qu’à des particuliers, donc rien ne me concerne. »</strong> Verifactu couvre les tickets et les ventes en ligne, et vous devrez recevoir les factures de vos fournisseurs au format électronique.</>,
    <><strong>« Avec Verifactu, l’administration reçoit toutes mes factures. »</strong> Seulement en mode VERI*FACTU, où le logiciel envoie chaque enregistrement. Dans l’autre mode, les enregistrements restent dans votre système.</>,
    <><strong>« Un PDF envoyé par e-mail est déjà une facture électronique. »</strong> La facture électronique obligatoire est un fichier structuré envoyé via une plateforme ou la solution publique. Les grandes entreprises ajouteront un PDF lisible seulement pendant les 12 premiers mois.</>,
  ],
  ctaTitle: "Vous voulez savoir où en est votre site ou votre boutique en ligne ?",
  ctaText:
    "Notre audit digital gratuit examine l’état technique de votre site, votre visibilité sur Google et dans les assistants d’IA, et votre fiche Google. Vous le recevez par e-mail sous 24 heures ouvrées maximum, sans engagement. Pour la partie fiscale, voyez avec votre conseiller.",
  ctaButton: "Demander l’audit gratuit",
  faqH: "Questions fréquentes",
  faqs: [
    { q: "Verifactu, est-ce la même chose que la facture électronique ?", a: "Non. Verifactu fixe les exigences du logiciel avec lequel vous facturez, tickets compris, et s’applique aussi aux ventes aux particuliers. La facture électronique obligatoire concerne les factures entre entreprises et professionnels, qui devront être émises et reçues au format électronique. Les règles et les dates sont différentes." },
    { q: "Verifactu a-t-il été reporté à 2028 ?", a: "Le ministère espagnol des Finances a annoncé le 5 octobre 2026 qu’il prévoit de le reporter à octobre 2028. Au 28 octobre 2026, cette modification n’est pas publiée au BOE : les dates en vigueur restent le 1er janvier 2027 pour les sociétés et le 1er juillet 2027 pour les autres. Vérifiez auprès de votre conseiller avant de décider." },
    { q: "Verifactu me concerne-t-il si ma boutique en ligne ne vend qu’à des particuliers ?", a: "Oui, si vous utilisez un logiciel pour émettre les factures ou les tickets. L’administration fiscale indique que la vente en magasin ou en ligne ne change rien et que les factures simplifiées sont incluses." },
    { q: "Puis-je continuer à facturer avec Excel ou Word ?", a: "Selon l’administration fiscale espagnole, Excel ou Word ne sont pas un système de facturation si vous les utilisez seulement pour rédiger, imprimer ou conserver les factures. Ils le sont si, par exemple avec des macros, ils génèrent automatiquement des registres ou d’autres résultats." },
    { q: "L’administration fiscale propose-t-elle un outil gratuit ?", a: "Oui. L’AEAT proposera une application de facturation de base gratuite pour Verifactu et développe une application ou un formulaire gratuit pour émettre des factures électroniques via sa solution publique." },
  ],
  sourcesH: "Sources",
  sources: [
    { texto: "Administration fiscale espagnole (AEAT) : calendrier de mise en œuvre de la facture électronique (mis à jour le 13/10/2026 ; consulté le 28/10/2026).", url: SOURCE_URLS.calendar },
    { texto: "BOE : arrêté HAC/1028/2026 du 2 octobre sur la solution publique de facturation électronique (BOE du 05/10/2026, en vigueur le 06/10/2026).", url: SOURCE_URLS.order },
    { texto: "AEAT : facturation électronique obligatoire, décret royal 238/2026 (BOE du 31/03/2026).", url: SOURCE_URLS.rd238 },
    { texto: "BOE : loi 18/2022 sur la création et la croissance des entreprises.", url: SOURCE_URLS.law18 },
    { texto: "BOE : décret royal 1007/2023, texte consolidé (quatrième disposition finale, modifiée par le décret-loi royal 15/2025 ; consulté le 28/10/2026).", url: SOURCE_URLS.rd1007 },
    { texto: "AEAT : questions fréquentes VERI*FACTU, champ d’application (mises à jour le 21/10/2026).", url: SOURCE_URLS.faqVerifactu },
    { texto: "AEAT : VERI*FACTU dans le manuel des activités économiques.", url: SOURCE_URLS.manualVerifactu },
    { texto: "Ministère espagnol des Finances : note d’information du 05/10/2026 sur la modification prévue des délais de VERI*FACTU.", url: SOURCE_URLS.haciendaNote },
  ],
  related: (
    <>
      Services liés : <Link href="/fr/offre-boutique-en-ligne/" className={a}>Boutique en ligne sans commissions</Link> · <Link href="/fr/boutique-en-ligne-sans-commissions/" className={a}>Création de boutique en ligne</Link> · <Link href="/fr/audit-digital/" className={a}>Audit digital gratuit</Link>
    </>
  ),
  back: "← Retour au blog",
};

function content(lang: string): Content {
  return lang === "fr" ? FR : EN;
}

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const c = content(lang);
  const url = `https://www.mktweb360.com/${lang}/${SLUG}/`;
  const OG = ogFor(lang);
  return {
    title: { absolute: c.title },
    description: c.description,
    alternates: alternatesFor(`/${lang}/${SLUG}/`) ?? { canonical: url },
    openGraph: {
      title: `${c.title} | Mkt Web 360`,
      description: c.description,
      url,
      type: "article",
      images: [{ url: OG, width: 1200, height: 630 }],
    },
  };
}

function Tabla({ cabecera, filas }: { cabecera: string[]; filas: string[][] }) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full text-sm border-collapse">
        <thead>
          <tr className="bg-primary-600 text-white">
            {cabecera.map((c, i) => (
              <th key={i} className="px-4 py-3 text-left font-semibold">{c}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {filas.map((fila) => (
            <tr key={fila[0] + fila[1]} className="border-b border-gray-200 even:bg-gray-50">
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

export default async function Page({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const isEn = lang !== "fr";
  const c = content(lang);
  const url = `https://www.mktweb360.com/${lang}/${SLUG}/`;
  const OG = ogFor(lang);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: c.h1,
    description: c.description,
    inLanguage: isEn ? "en" : "fr",
    author: autorSchema(lang),
    publisher: { "@type": "Organization", "@id": "https://www.mktweb360.com/#organization", name: "Mkt Web 360 SLU", url: "https://www.mktweb360.com" },
    datePublished: DATE_PUBLISHED,
    dateModified: DATE_MODIFIED,
    image: `https://www.mktweb360.com${OG}`,
    url,
    mainEntityOfPage: url,
  };
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: c.faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <article className="mw-article max-w-3xl mx-auto px-4 py-12">
        <Breadcrumbs crumbs={[
          { label: isEn ? "Home" : "Accueil", href: `/${lang}/` },
          { label: "Blog", href: `/${lang}/blog/` },
          { label: c.crumb },
        ]} />

        <header className="mb-8">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="bg-primary-100 text-primary-700 text-xs font-medium px-2.5 py-0.5 rounded-full">{isEn ? "Self-employed" : "Indépendants"}</span>
            <span className="text-sm text-gray-400">{c.updated}</span>
          </div>
          <h1 className="text-4xl font-bold text-primary-600 mb-4 leading-tight">{c.h1}</h1>
          <AuthorByline lang={lang} block />
          <p className="text-xl text-gray-600 leading-relaxed">{c.intro}</p>
          <Image src={OG} alt={c.alt} width={1200} height={630} className="w-full rounded-2xl mt-6" priority />
        </header>

        <div className="text-gray-700 space-y-6 leading-relaxed">
          <p>{c.answer}</p>

          <div className="bg-amber-50 border border-amber-200 rounded-xl p-5 text-sm text-gray-700">
            <p className="font-semibold text-gray-800 mb-1">{c.disclaimerTitle}</p>
            <p>{c.disclaimer}</p>
          </div>

          <h2 className="text-2xl font-bold text-primary-600">{c.summaryH}</h2>
          <Lista items={c.summary} />

          <h2 className="text-2xl font-bold text-primary-600">{c.diffH}</h2>
          <p>{c.diffP}</p>
          <Tabla cabecera={c.diffHead} filas={c.diff} />

          <h2 className="text-2xl font-bold text-primary-600">{c.calH}</h2>
          <p>{c.calP}</p>
          <Tabla cabecera={c.calHead} filas={c.cal} />
          <p>{c.calNote}</p>

          <h2 className="text-2xl font-bold text-primary-600">{c.treeH}</h2>
          <Lista items={c.tree} numerada />
          <p>{c.treeLinks}</p>

          <h2 className="text-2xl font-bold text-primary-600">{c.shopH}</h2>
          <p>{c.shopP}</p>
          <Tabla cabecera={c.shopHead} filas={c.shop} />
          <p>{c.shopLinks}</p>

          <h2 className="text-2xl font-bold text-primary-600">{c.stepsH}</h2>
          <Lista items={c.steps} numerada />

          <BlogBanner variant="ecommerce" lang={lang} />

          <h2 className="text-2xl font-bold text-primary-600">{c.mythsH}</h2>
          <Lista items={c.myths} />

          <div className="bg-primary-50 rounded-xl p-6 border border-primary-100">
            <p className="font-semibold text-primary-700 mb-2">{c.ctaTitle}</p>
            <p className="text-gray-600 text-sm mb-4">{c.ctaText}</p>
            <Link href={isEn ? "/en/digital-audit/" : "/fr/audit-digital/"} className="inline-block bg-accent-500 text-white px-6 py-2.5 rounded-full font-semibold text-sm hover:bg-accent-600 transition-colors">
              {c.ctaButton}
            </Link>
          </div>

          <h2 className="text-2xl font-bold text-primary-600">{c.faqH}</h2>
          <div className="space-y-3">
            {c.faqs.map((faq) => (
              <details key={faq.q} className="mw-faq group rounded-2xl bg-gray-50 ring-1 ring-gray-200 transition-all duration-300 open:bg-white open:ring-transparent open:shadow-[0_20px_45px_-25px_rgba(124,58,237,0.45)]">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-6 py-5 font-bold text-primary-700 [&::-webkit-details-marker]:hidden">
                  {faq.q}
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white text-xl leading-none text-accent-500 ring-1 ring-gray-200 transition-all duration-300 group-open:rotate-45 group-open:bg-gradient-to-br group-open:from-[#7c3aed] group-open:to-accent-500 group-open:text-white group-open:ring-0" aria-hidden="true">+</span>
                </summary>
                <div className="mw-faq-body px-6 pb-6 text-gray-600 leading-relaxed">{faq.a}</div>
              </details>
            ))}
          </div>

          <h2 className="text-2xl font-bold text-primary-600">{c.sourcesH}</h2>
          <ol className="space-y-2 list-decimal list-inside text-sm">
            {c.sources.map((f) => (
              <li key={f.url} className="text-gray-600">
                {f.texto}{" "}
                <a href={f.url} target="_blank" rel="noopener noreferrer" className="text-accent-500 hover:underline break-all">
                  {f.url}
                </a>
              </li>
            ))}
          </ol>

          <p className="text-sm text-gray-500 pt-4">{c.related}</p>
        </div>

        <nav className="mt-12 pt-8 border-t border-gray-200">
          <Link href={`/${lang}/blog/`} className="text-accent-500 hover:text-accent-600 font-medium text-sm">{c.back}</Link>
        </nav>
      </article>
      <RelatedArticles currentSlug={SLUG} />
    </>
  );
}
