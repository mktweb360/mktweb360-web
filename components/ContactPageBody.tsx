// Página de contacto (ES/EN/FR): bloque oscuro de marca con datos de contacto, pasos y formulario.
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ContactForm } from "@/components/ContactForm";

const TXT = {
  es: {
    crumbs: [{ label: "Inicio", href: "/" }, { label: "Contacto" }],
    kicker: "Contacto",
    h1a: "Hablemos de",
    h1b: "tu proyecto.",
    lead: "¿Tienes un proyecto en mente? Cuéntanoslo y te respondemos en menos de 24 horas con una propuesta personalizada.",
    phone: "Teléfono", email: "Email", hours: "Horario", hoursV: "Lunes a viernes · 9:00 — 18:00", where: "Dónde trabajamos", whereV: "En remoto con toda España",
    stepsTitle: "Qué pasa después",
    steps: [
      { t: "Revisamos tu caso", d: "Miramos tu web y tu consulta antes de responder, para hablar de tu caso y no con generalidades." },
      { t: "Te respondemos en 24 horas", d: "Por email o por teléfono, como prefieras, con un primer diagnóstico y las preguntas que necesitamos resolver." },
      { t: "Propuesta a medida", d: "Si encaja, te enviamos una propuesta con objetivos, acciones, plazos y precio. Sin compromiso." },
    ],
    formTitle: "Cuéntanos tu proyecto",
    formType: "contacto",
    more: [
      { l: "SEO", h: "/seo-posicionamiento-web-organico/" }, { l: "Posicionamiento en IA", h: "/geo-posicionamiento-ia/" },
      { l: "Google Ads", h: "/sem-publicidad-ppc/" }, { l: "Diseño web", h: "/diseno-de-paginas-web/" }, { l: "Auditoría gratuita", h: "/auditoria-digital/" },
    ],
    moreTitle: "¿Aún no sabes por dónde empezar? Echa un vistazo a",
  },
  en: {
    crumbs: [{ label: "Home", href: "/en/" }, { label: "Contact" }],
    kicker: "Contact",
    h1a: "Let's talk about",
    h1b: "your project.",
    lead: "Got a project in mind? Tell us about it and we'll get back to you within 24 hours. No commitment required.",
    phone: "Phone", email: "Email", hours: "Hours", hoursV: "Monday to Friday · 9:00 — 18:00 (CET)", where: "Where we work", whereV: "Remotely, all across Spain",
    stepsTitle: "What happens next",
    steps: [
      { t: "We review your case", d: "We look at your website and your message before replying, so we talk about your case, not generalities." },
      { t: "We reply within 24 hours", d: "By email or phone, as you prefer, with an initial diagnosis and the questions we need answered." },
      { t: "Tailored proposal", d: "If it's a fit, we send you a proposal with goals, actions, timings and pricing. No commitment." },
    ],
    formTitle: "Tell us about your project",
    formType: "contact-en",
    more: [
      { l: "SEO", h: "/en/seo-web-positioning/" }, { l: "Google Ads", h: "/en/google-ads-management/" },
      { l: "Web design", h: "/en/web-design/" }, { l: "Free audit", h: "/en/digital-audit/" },
    ],
    moreTitle: "Not sure where to start? Take a look at",
  },
  fr: {
    crumbs: [{ label: "Accueil", href: "/fr/" }, { label: "Contact" }],
    kicker: "Contact",
    h1a: "Parlons de",
    h1b: "votre projet.",
    lead: "Vous avez un projet en tête ? Parlez-nous-en et nous vous répondons dans les 24 heures. Sans engagement.",
    phone: "Téléphone", email: "Email", hours: "Horaires", hoursV: "Du lundi au vendredi · 9h00 — 18h00 (CET)", where: "Où nous travaillons", whereV: "À distance, dans toute l'Espagne",
    stepsTitle: "Ce qui se passe ensuite",
    steps: [
      { t: "Nous étudions votre cas", d: "Nous regardons votre site et votre message avant de répondre, pour parler de votre cas et non de généralités." },
      { t: "Réponse sous 24 heures", d: "Par email ou par téléphone, comme vous préférez, avec un premier diagnostic et les questions à éclaircir." },
      { t: "Proposition sur mesure", d: "Si cela vous convient, nous vous envoyons une proposition avec objectifs, actions, délais et prix. Sans engagement." },
    ],
    formTitle: "Parlez-nous de votre projet",
    formType: "contact-fr",
    more: [
      { l: "SEO", h: "/fr/positionnement-seo/" }, { l: "Google Ads", h: "/fr/gestion-google-ads/" },
      { l: "Création web", h: "/fr/creation-site-web/" }, { l: "Audit gratuit", h: "/fr/audit-digital/" },
    ],
    moreTitle: "Vous ne savez pas par où commencer ? Jetez un œil à",
  },
} as const;

export function ContactPageBody({ lang = "es" }: { lang?: "es" | "en" | "fr" }) {
  const t = TXT[lang] ?? TXT.es;
  const info = [
    { k: t.phone, v: "+34 622 74 89 87", href: "tel:+34622748987" },
    { k: t.email, v: "info@mktweb360.com", href: "mailto:info@mktweb360.com" },
    { k: t.hours, v: t.hoursV },
    { k: t.where, v: t.whereV },
  ];
  return (
    <>
      <section className="mw-skin-hero text-white">
        <div className="mx-auto grid max-w-6xl items-start gap-12 px-4 pb-20 pt-12 md:pb-28 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
          <div>
            <Breadcrumbs crumbs={[...t.crumbs]} />
            <p className="mt-2 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-white/80">
              <span className="h-1.5 w-1.5 rounded-full bg-accent-500" aria-hidden="true" />
              {t.kicker}
            </p>
            <h1 className="mt-6 text-4xl font-black leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
              {t.h1a}
              <br />
              <span className="bg-gradient-to-r from-[#ec4899] to-accent-500 bg-clip-text text-transparent">{t.h1b}</span>
            </h1>
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-primary-100">{t.lead}</p>

            <dl className="mt-10 grid gap-3 sm:grid-cols-2">
              {info.map((i) => (
                <div key={i.k} className="rounded-2xl border border-white/10 bg-white/[0.06] p-4 backdrop-blur-sm">
                  <dt className="text-xs font-bold uppercase tracking-widest text-white/55">{i.k}</dt>
                  <dd className="mt-1 font-semibold">
                    {"href" in i && i.href ? <a href={i.href} className="hover:text-accent-400">{i.v}</a> : i.v}
                  </dd>
                </div>
              ))}
            </dl>

            <p className="mt-10 text-sm font-bold uppercase tracking-widest text-white/55">{t.stepsTitle}</p>
            <ol className="mt-4 space-y-5">
              {t.steps.map((s, n) => (
                <li key={s.t} className="flex gap-4">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-accent-500/40 bg-accent-500/10 text-sm font-bold text-accent-400" aria-hidden="true">{n + 1}</span>
                  <div>
                    <h2 className="font-bold text-white">{s.t}</h2>
                    <p className="mt-1 text-[0.95rem] leading-relaxed text-primary-200">{s.d}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>

          <div className="rounded-3xl bg-white p-6 text-gray-900 shadow-[0_30px_80px_-30px_rgba(0,0,0,0.6)] ring-1 ring-white/10 sm:p-9 lg:mt-8">
            <p className="mb-6 text-lg font-bold text-primary-700">{t.formTitle}</p>
            <ContactForm formType={t.formType} />
          </div>
        </div>
      </section>
      <section className="bg-white px-4 py-12">
        <div className="mx-auto max-w-6xl text-center">
          <p className="text-gray-500">{t.moreTitle}</p>
          <div className="mt-4 flex flex-wrap justify-center gap-3">
            {t.more.map((m) => (
              <Link key={m.h} href={m.h} className="rounded-full px-5 py-2.5 text-sm font-semibold text-primary-700 ring-1 ring-gray-200 transition-all hover:-translate-y-0.5 hover:ring-accent-400 hover:text-accent-600">
                {m.l}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
