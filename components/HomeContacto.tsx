// Bloque final de contacto de la home: qué pasa después de escribir + formulario general.
// (La auditoría gratuita tiene su propio formulario en el bloque de la oferta SEO + GEO + GBP.)
// Componente de servidor; solo ContactForm se hidrata en el cliente.
import { ContactForm } from "@/components/ContactForm";

const PASOS = [
  {
    n: "1",
    title: "Nos cuentas tu caso",
    desc: "Con un par de líneas basta. Si tienes web o ficha de Google, déjanos el enlace.",
  },
  {
    n: "2",
    title: "Revisamos tu situación",
    desc: "Analizamos tu presencia digital y la de tu competencia. Sin coste y sin compromiso.",
  },
  {
    n: "3",
    title: "Te proponemos un plan",
    desc: "Una propuesta a tu medida, con objetivos y precio claros. Si encaja, empezamos.",
  },
];

export function HomeContacto() {
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
        {/* Texto y pasos */}
        <div className="lg:sticky lg:top-28">
          <p className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-white/80">
            <span className="h-1.5 w-1.5 rounded-full bg-accent-500" aria-hidden="true" />
            Contacto
          </p>
          <h2 id="home-contacto" className="mt-6 text-4xl font-black leading-[1.05] tracking-tight sm:text-5xl">
            Cuéntanos qué
            <br />
            <span className="bg-gradient-to-r from-[#ec4899] to-accent-500 bg-clip-text text-transparent">
              quieres conseguir.
            </span>
          </h2>
          <p className="mt-5 max-w-md text-lg leading-relaxed text-primary-100">
            Te responde directamente la persona que llevará tu proyecto, no un comercial ni un bot.
          </p>

          <ol className="mt-10 space-y-6">
            {PASOS.map((p) => (
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
            <p>¿Prefieres hablar directamente?</p>
            <p className="mt-2 flex flex-wrap gap-x-6 gap-y-2 font-semibold text-white">
              <a href="tel:+34622748987" className="hover:text-accent-400">622 74 89 87</a>
              <a href="mailto:info@mktweb360.com" className="hover:text-accent-400">info@mktweb360.com</a>
            </p>
          </div>
        </div>

        {/* Formulario */}
        <div className="rounded-3xl bg-white p-6 text-gray-900 shadow-[0_30px_80px_-30px_rgba(0,0,0,0.6)] ring-1 ring-white/10 sm:p-9">
          <p className="mb-6 text-lg font-bold text-primary-700">Escríbenos</p>
          <ContactForm
            formType="contacto"
            messageLabel="¿En qué podemos ayudarte?"
            messagePlaceholder="Por ejemplo: quiero que me encuentren en Google, conseguir más contactos, renovar la web…"
          />
        </div>
      </div>
    </section>
  );
}
