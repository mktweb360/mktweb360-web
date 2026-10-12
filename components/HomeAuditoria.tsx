// Bloque de auditoría gratuita SEO + GEO + Google Maps con formulario (portada EN/FR).
// En español este papel lo cumple el bloque de la oferta SEO + GEO + GBP de 349 €/mes.
import Image from "next/image";
import Link from "next/link";
import { ContactForm } from "@/components/ContactForm";

const TXT = {
  en: {
    badge: "SEO + GEO + Google Maps",
    h: "Be found on Google, in AI and on the map",
    p: "Your customers look for you on the search engine, on Google Maps and, more and more, by asking an AI assistant. We review your business on all three fronts and tell you clearly what to fix first.",
    bullets: ["How you rank on Google for what you sell", "Whether AI assistants (ChatGPT, Gemini, Perplexity…) can find and cite you", "The state of your Google Business Profile"],
    more: "See what the audit includes",
    moreHref: "/en/digital-audit/",
    formKicker: "Free, no commitment",
    formTitle: "Request your SEO + GEO + Google Maps audit",
    gbpLabel: "Your business on Google Maps (optional)",
    gbpPh: "Business name and city, or link to your profile",
    msgLabel: "What would you like to achieve? (optional)",
    msgPh: "More local customers, sell online, appear in AI answers…",
    submit: "Get my free audit",
  },
  fr: {
    badge: "SEO + GEO + Google Maps",
    h: "Être trouvé sur Google, dans l'IA et sur la carte",
    p: "Vos clients vous cherchent sur le moteur de recherche, sur Google Maps et, de plus en plus, en interrogeant un assistant IA. Nous analysons votre entreprise sur ces trois fronts et vous disons clairement quoi corriger en premier.",
    bullets: ["Votre positionnement sur Google pour ce que vous vendez", "Si les assistants IA (ChatGPT, Gemini, Perplexity…) peuvent vous trouver et vous citer", "L'état de votre fiche Google Business Profile"],
    more: "Voir ce que comprend l'audit",
    moreHref: "/fr/audit-digital/",
    formKicker: "Gratuit et sans engagement",
    formTitle: "Demandez votre audit SEO + GEO + Google Maps",
    gbpLabel: "Votre entreprise sur Google Maps (facultatif)",
    gbpPh: "Nom de l'entreprise et ville, ou lien vers votre fiche",
    msgLabel: "Que souhaitez-vous obtenir ? (facultatif)",
    msgPh: "Plus de clients locaux, vendre en ligne, apparaître dans l'IA…",
    submit: "Recevoir mon audit gratuit",
  },
} as const;

export function HomeAuditoria({ lang }: { lang: "en" | "fr" }) {
  const t = TXT[lang] ?? TXT.en;
  return (
    <section aria-labelledby="home-auditoria" className="relative isolate overflow-hidden text-white">
      <Image src="/oferta-seo-geo-gbp-home.jpg" alt="" fill sizes="100vw" quality={85} className="object-cover -z-20" style={{ objectPosition: "50% 40%" }} />
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-[rgba(15,28,46,0.74)] lg:bg-[linear-gradient(90deg,rgba(15,28,46,0.84)_0%,rgba(15,28,46,0.64)_45%,rgba(15,28,46,0.42)_75%,rgba(15,28,46,0.3)_100%)]" />
      <div className="max-w-6xl mx-auto px-4 py-20 md:py-24 grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14 items-center">
        <div className="text-center lg:text-left">
          <span className="inline-block bg-accent-500 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest mb-6">{t.badge}</span>
          <h2 id="home-auditoria" className="text-3xl md:text-5xl font-bold leading-tight mb-5 [text-shadow:0_2px_10px_rgba(15,28,46,0.6)]">{t.h}</h2>
          <p className="text-lg text-white/90 leading-relaxed mb-6">{t.p}</p>
          <ul className="mb-8 space-y-3 text-left max-w-xl mx-auto lg:mx-0">
            {t.bullets.map((b) => (
              <li key={b} className="flex gap-3 text-white/90">
                <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#7c3aed] to-accent-500 text-[0.65rem] font-black" aria-hidden="true">✓</span>
                {b}
              </li>
            ))}
          </ul>
          <Link href={t.moreHref} className="inline-block border border-white/60 text-white px-8 py-4 rounded-full font-semibold hover:bg-white/10 transition-colors">{t.more}</Link>
        </div>
        <div className="rounded-3xl bg-white p-6 sm:p-8 text-gray-900 shadow-[0_30px_80px_-30px_rgba(0,0,0,0.7)]">
          <p className="text-xs font-bold uppercase tracking-widest text-accent-600">{t.formKicker}</p>
          <p className="mt-1 mb-5 text-xl font-bold text-primary-700">{t.formTitle}</p>
          <ContactForm formType="auditoria" websiteRequired gbpField={{ label: t.gbpLabel, placeholder: t.gbpPh }} messageLabel={t.msgLabel} messageOptional messagePlaceholder={t.msgPh} submitLabel={t.submit} />
        </div>
      </div>
    </section>
  );
}
