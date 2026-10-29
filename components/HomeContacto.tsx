// Bloque final de contacto de la portada (ES/EN/FR): qué pasa después de escribir + formulario
// general. La auditoría gratuita tiene su propio formulario en otro bloque.
// Componente de servidor; solo ContactForm se hidrata en el cliente.
import { ContactForm } from "@/components/ContactForm";

const TXT = {
  es: {
    kicker: "Contacto",
    h1: "Cuéntanos qué",
    h2: "quieres conseguir.",
    lead: "Te responde directamente la persona que llevará tu proyecto, no un comercial ni un bot.",
    pasos: [
      { n: "1", title: "Nos cuentas tu caso", desc: "Con un par de líneas basta. Si tienes web o ficha de Google, déjanos el enlace." },
      { n: "2", title: "Revisamos tu situación", desc: "Analizamos tu presencia digital y la de tu competencia. Sin coste y sin compromiso." },
      { n: "3", title: "Te proponemos un plan", desc: "Una propuesta a tu medida, con objetivos y presupuesto claros. Si encaja, empezamos." },
    ],
    direct: "¿Prefieres hablar directamente?",
    formTitle: "Escríbenos",
    msgLabel: "¿En qué podemos ayudarte?",
    msgPh: "Por ejemplo: quiero que me encuentren en Google, conseguir más contactos, renovar la web…",
    formType: "contacto",
  },
  en: {
    kicker: "Contact",
    h1: "Tell us what",
    h2: "you want to achieve.",
    lead: "You hear back directly from the person who will run your project, not a salesperson or a bot.",
    pasos: [
      { n: "1", title: "Tell us about your case", desc: "A couple of lines is enough. If you have a website or a Google profile, leave us the link." },
      { n: "2", title: "We review your situation", desc: "We analyse your digital presence and your competitors'. Free of charge, no commitment." },
      { n: "3", title: "We propose a plan", desc: "A tailored proposal with clear goals and pricing. If it fits, we get started." },
    ],
    direct: "Prefer to talk directly?",
    formTitle: "Write to us",
    msgLabel: "How can we help?",
    msgPh: "For example: I want to be found on Google, get more leads, redesign my website…",
    formType: "home-en",
  },
  fr: {
    kicker: "Contact",
    h1: "Dites-nous ce que",
    h2: "vous voulez obtenir.",
    lead: "C'est la personne qui gérera votre projet qui vous répond, pas un commercial ni un robot.",
    pasos: [
      { n: "1", title: "Vous nous présentez votre cas", desc: "Deux lignes suffisent. Si vous avez un site ou une fiche Google, laissez-nous le lien." },
      { n: "2", title: "Nous analysons votre situation", desc: "Nous étudions votre présence digitale et celle de vos concurrents. Gratuit et sans engagement." },
      { n: "3", title: "Nous vous proposons un plan", desc: "Une proposition sur mesure, avec des objectifs et un prix clairs. Si cela vous convient, on démarre." },
    ],
    direct: "Vous préférez parler directement ?",
    formTitle: "Écrivez-nous",
    msgLabel: "Comment pouvons-nous vous aider ?",
    msgPh: "Par exemple : être trouvé sur Google, obtenir plus de contacts, refaire mon site…",
    formType: "home-fr",
  },
} as const;

export function HomeContacto({ lang = "es" }: { lang?: "es" | "en" | "fr" } = {}) {
  const t = TXT[lang] ?? TXT.es;
  return (
    <section
      id="contacto"
      aria-labelledby="home-contacto"
      className="relative isolate overflow-hidden bg-[#0f1c2e] px-4 py-20 text-white md:py-28"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[radial-gradient(700px_480px_at_10%_20%,rgba(124,58,237,0.20),transparent_70%),radial-gradient(700px_520px_at_95%_85%,rgba(249,115,22,0.16),transparent_70%)]"
      />
      <div className="mx-auto grid max-w-6xl items-start gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <div className="lg:sticky lg:top-28">
          <p className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-white/80">
            <span className="h-1.5 w-1.5 rounded-full bg-accent-500" aria-hidden="true" />
            {t.kicker}
          </p>
          <h2 id="home-contacto" className="mt-6 text-4xl font-black leading-[1.05] tracking-tight sm:text-5xl">
            {t.h1}
            <br />
            <span className="bg-gradient-to-r from-[#ec4899] to-accent-500 bg-clip-text text-transparent">{t.h2}</span>
          </h2>
          <p className="mt-5 max-w-md text-lg leading-relaxed text-primary-100">{t.lead}</p>

          <ol className="mt-10 space-y-6">
            {t.pasos.map((p) => (
              <li key={p.n} className="flex gap-4">
                <span
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-accent-500/40 bg-accent-500/10 text-sm font-bold text-accent-400"
                  aria-hidden="true"
                >
                  {p.n}
                </span>
                <div>
                  <h3 className="font-bold text-white">{p.title}</h3>
                  <p className="mt-1 text-[0.95rem] leading-relaxed text-primary-200">{p.desc}</p>
                </div>
              </li>
            ))}
          </ol>

          <div className="mt-10 border-t border-white/10 pt-6 text-sm text-primary-200">
            <p>{t.direct}</p>
            <p className="mt-2 flex flex-wrap gap-x-6 gap-y-2 font-semibold text-white">
              <a href="tel:+34622748987" className="hover:text-accent-400">+34 622 74 89 87</a>
              <a href="mailto:info@mktweb360.com" className="hover:text-accent-400">info@mktweb360.com</a>
            </p>
          </div>
        </div>

        <div className="rounded-3xl bg-white p-6 text-gray-900 shadow-[0_30px_80px_-30px_rgba(0,0,0,0.6)] ring-1 ring-white/10 sm:p-9">
          <p className="mb-6 text-lg font-bold text-primary-700">{t.formTitle}</p>
          <ContactForm formType={t.formType} messageLabel={t.msgLabel} messagePlaceholder={t.msgPh} />
        </div>
      </div>
    </section>
  );
}
