"use client";
import { useState, useEffect, useRef, useId } from "react";
import { trackLead } from "@/lib/track";
import { CONSENT_COMERCIAL } from "@/lib/consent-texts";
import { usePathname } from "next/navigation";

interface UtmData {
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  utm_content?: string;
  utm_term?: string;
  page_origin?: string;
}

interface ContactFormProps {
  formType?: string;
  lang?: string;
  /** La web pasa a ser obligatoria (p. ej. auditoría gratuita). */
  websiteRequired?: boolean;
  /** Placeholder propio del mensaje (la página lo pasa ya traducido a su idioma). */
  messagePlaceholder?: string;
  /** Texto del botón (la página lo pasa ya traducido a su idioma). */
  submitLabel?: string;
  /** Etiqueta propia del mensaje (la página la pasa ya traducida). */
  messageLabel?: string;
  /** El mensaje deja de ser obligatorio (p. ej. auditoría gratuita). */
  messageOptional?: boolean;
  /** Campo opcional para la ficha de Google Business Profile (auditoría gratuita). */
  gbpField?: { label: string; placeholder: string };
}

const T = {
  es: {
    marketing: CONSENT_COMERCIAL.es,
    infoTitle: "Información básica sobre protección de datos",
    infoRows: [
      ["Responsable", "Mkt Web 360 SLU (B87679304)."],
      ["Finalidad", "Responder a tu consulta y, si lo pides, preparar tu auditoría o propuesta. Si marcas la casilla opcional, enviarte comunicaciones comerciales."],
      ["Legitimación", "Tu solicitud (medidas precontractuales) y tu consentimiento, que puedes retirar cuando quieras."],
      ["Destinatarios", "No cedemos tus datos a terceros salvo obligación legal. Usamos proveedores tecnológicos que actúan como encargados del tratamiento; algunos están fuera del EEE, con garantías adecuadas."],
      ["Derechos", "Acceso, rectificación, supresión, oposición, limitación y portabilidad, escribiendo a info@mktweb360.com. También puedes reclamar ante la AEPD."],
    ],
    infoMore: "Información adicional en nuestra",
    name: "Nombre",
    namePh: "Tu nombre",
    email: "Email",
    phone: "Teléfono",
    phonePh: "+34 600 000 000",
    website: "Web (opcional)",
    websiteAudit: "Web que quieres auditar",
    websitePh: "https://tuweb.com",
    message: "Mensaje",
    messagePh: "Cuéntanos tu proyecto...",
    gdpr: "He leído y acepto la",
    gdprLink: "política de privacidad",
    gdprLinkHref: "/politica-de-privacidad/",
    gdprSuffix: "y consiento el tratamiento de mis datos.",
    send: "Enviar consulta",
    sending: "Enviando...",
    ok: "✓ Mensaje enviado. Te contactaremos pronto.",
    error: "Error al enviar. Por favor, llámanos al +34 622 748 987.",
  },
  en: {
    marketing: CONSENT_COMERCIAL.en,
    infoTitle: "Basic data protection information",
    infoRows: [
      ["Controller", "Mkt Web 360 SLU (B87679304)."],
      ["Purpose", "To answer your enquiry and, if requested, prepare your audit or proposal. If you tick the optional box, to send you commercial communications."],
      ["Legal basis", "Your request (pre-contractual measures) and your consent, which you can withdraw at any time."],
      ["Recipients", "We do not share your data with third parties unless legally required. We use technology providers acting as processors; some are outside the EEA, with appropriate safeguards."],
      ["Rights", "Access, rectification, erasure, objection, restriction and portability by writing to info@mktweb360.com. You may also complain to the Spanish DPA (AEPD)."],
    ],
    infoMore: "More information in our",
    name: "Name",
    namePh: "Your name",
    email: "Email",
    phone: "Phone",
    phonePh: "+44 7700 000 000",
    website: "Website (optional)",
    websiteAudit: "Website you want audited",
    websitePh: "https://yourwebsite.com",
    message: "Message",
    messagePh: "Tell us about your project...",
    gdpr: "I have read and accept the",
    gdprLink: "privacy policy",
    gdprLinkHref: "/en/privacy-policy/",
    gdprSuffix: "and consent to the processing of my data.",
    send: "Send enquiry",
    sending: "Sending...",
    ok: "✓ Message sent. We'll contact you soon.",
    error: "Error sending. Please call us at +34 622 748 987.",
  },
  fr: {
    marketing: CONSENT_COMERCIAL.fr,
    infoTitle: "Informations de base sur la protection des données",
    infoRows: [
      ["Responsable", "Mkt Web 360 SLU (B87679304)."],
      ["Finalité", "Répondre à votre demande et, si vous le souhaitez, préparer votre audit ou proposition. Si vous cochez la case facultative, vous envoyer des communications commerciales."],
      ["Base juridique", "Votre demande (mesures précontractuelles) et votre consentement, que vous pouvez retirer à tout moment."],
      ["Destinataires", "Nous ne cédons pas vos données à des tiers sauf obligation légale. Nous utilisons des prestataires techniques agissant comme sous-traitants ; certains sont hors de l'EEE, avec des garanties appropriées."],
      ["Droits", "Accès, rectification, effacement, opposition, limitation et portabilité en écrivant à info@mktweb360.com. Vous pouvez aussi saisir l'AEPD."],
    ],
    infoMore: "Plus d'informations dans notre",
    name: "Nom",
    namePh: "Votre nom",
    email: "Email",
    phone: "Téléphone",
    phonePh: "+33 6 00 00 00 00",
    website: "Site web (optionnel)",
    websiteAudit: "Site web à auditer",
    websitePh: "https://votresite.com",
    message: "Message",
    messagePh: "Parlez-nous de votre projet...",
    gdpr: "J'ai lu et j'accepte la",
    gdprLink: "politique de confidentialité",
    gdprLinkHref: "/fr/politique-de-confidentialite/",
    gdprSuffix: "et je consens au traitement de mes données.",
    send: "Envoyer ma demande",
    sending: "Envoi en cours...",
    ok: "✓ Message envoyé. Nous vous contacterons bientôt.",
    error: "Erreur d'envoi. Veuillez nous appeler au +34 622 748 987.",
  },
} as const;

export function ContactForm({ formType = "contacto", websiteRequired = false, messagePlaceholder, submitLabel, messageLabel, messageOptional = false, gbpField }: ContactFormProps) {
  const pathname = usePathname();
  const detectedLang = pathname?.startsWith("/en") ? "en" : pathname?.startsWith("/fr") ? "fr" : "es";
  const t = T[detectedLang];
  const [status, setStatus] = useState<"idle" | "sending" | "ok" | "error">("idle");
  const utmRef = useRef<UtmData>({});
  // Momento en que se pinta el formulario: el servidor descarta envíos de bots que llegan en menos de 3 s.
  const startedAt = useRef(0);
  // Ids únicos por instancia: puede haber varios formularios en la misma página (p. ej. la home).
  const uid = useId();

  useEffect(() => {
    if (typeof window === "undefined") return;
    startedAt.current = Date.now();
    const params = new URLSearchParams(window.location.search);
    const utm: UtmData = {
      utm_source: params.get("utm_source") || undefined,
      utm_medium: params.get("utm_medium") || undefined,
      utm_campaign: params.get("utm_campaign") || undefined,
      utm_content: params.get("utm_content") || undefined,
      utm_term: params.get("utm_term") || undefined,
      page_origin: window.location.pathname,
    };
    // Also check sessionStorage for UTMs set on a previous page in the same session
    try {
      const stored = sessionStorage.getItem("mktweb360_utm");
      if (stored) {
        const storedUtm = JSON.parse(stored);
        Object.keys(storedUtm).forEach((key) => {
          if (!utm[key as keyof UtmData]) {
            utm[key as keyof UtmData] = storedUtm[key];
          }
        });
      }
      // Store current UTMs in sessionStorage if present
      if (utm.utm_source) {
        sessionStorage.setItem("mktweb360_utm", JSON.stringify(utm));
      }
    } catch {}
    utmRef.current = utm;
  }, []);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form));
    const payload = {
      ...data,
      form_type: formType,
      lang: detectedLang,
      _ts: startedAt.current,
      ...utmRef.current,
    };
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    setStatus(res.ok ? "ok" : "error");
    if (res.ok) {
      form.reset();
      trackLead(formType, {
        page_origin: utmRef.current.page_origin || window.location.pathname,
        utm_source: utmRef.current.utm_source || "",
        utm_medium: utmRef.current.utm_medium || "",
        utm_campaign: utmRef.current.utm_campaign || "",
      });
    }
  }

  const INPUT = "w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-transparent";

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {/* Honeypot anti-spam: campo oculto que solo rellenan los bots */}
      <input
        name="_hp"
        type="text"
        autoComplete="off"
        tabIndex={-1}
        aria-hidden="true"
        style={{ position: "absolute", left: "-9999px", top: "-9999px", opacity: 0, height: 0, width: 0, overflow: "hidden" }}
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor={`${uid}-name`} className="block text-sm font-medium text-gray-700 mb-1">{t.name} *</label>
          <input id={`${uid}-name`} name="name" autoComplete="name" type="text" required className={INPUT} placeholder={t.namePh} />
        </div>
        <div>
          <label htmlFor={`${uid}-email`} className="block text-sm font-medium text-gray-700 mb-1">{t.email} *</label>
          <input id={`${uid}-email`} name="email" autoComplete="email" type="email" required className={INPUT} placeholder="tu@email.com" />
        </div>
        <div>
          <label htmlFor={`${uid}-phone`} className="block text-sm font-medium text-gray-700 mb-1">{t.phone}</label>
          <input id={`${uid}-phone`} name="phone" autoComplete="tel" type="tel" className={INPUT} placeholder={t.phonePh} />
        </div>
        <div>
          <label htmlFor={`${uid}-website`} className="block text-sm font-medium text-gray-700 mb-1">{websiteRequired ? t.websiteAudit : t.website}</label>
          <input id={`${uid}-website`} name="website" autoComplete="url" type="url" required={websiteRequired} className={INPUT} placeholder={t.websitePh} />
        </div>
      </div>
      {gbpField && (
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">{gbpField.label}</label>
          <input name="gbp" type="text" className={INPUT} placeholder={gbpField.placeholder} />
        </div>
      )}
      <div>
        <label htmlFor={`${uid}-message`} className="block text-sm font-medium text-gray-700 mb-1">{messageLabel || t.message}{messageOptional ? "" : " *"}</label>
        <textarea id={`${uid}-message`} name="message" required={!messageOptional} rows={messageOptional ? 3 : 5} className={INPUT} placeholder={messagePlaceholder || t.messagePh} />
      </div>
      <div className="space-y-3">
        <div className="flex items-start gap-3">
          <input type="checkbox" name="gdpr" id={`${uid}-gdpr`} required className="mt-1 h-4 w-4 shrink-0 rounded border-gray-300 text-primary-600 focus:ring-primary-400" />
          <label htmlFor={`${uid}-gdpr`} className="text-sm text-gray-600">
            {t.gdpr}{" "}
            <a href={t.gdprLinkHref} className="text-primary-600 underline-offset-2 hover:underline">
              {t.gdprLink}
            </a>{" "}
            {t.gdprSuffix} *
          </label>
        </div>
        <div className="flex items-start gap-3">
          <input type="checkbox" name="marketing" id={`${uid}-marketing`} value="si" className="mt-1 h-4 w-4 shrink-0 rounded border-gray-300 text-primary-600 focus:ring-primary-400" />
          <label htmlFor={`${uid}-marketing`} className="text-sm text-gray-600">{t.marketing}</label>
        </div>
      </div>
      {/* Primera capa de información (art. 13 RGPD y art. 11 LOPDGDD, modelo por capas de la AEPD) */}
      <details className="group rounded-lg border border-gray-200 bg-gray-50 text-xs text-gray-600 open:bg-white">
        <summary className="flex cursor-pointer list-none items-center justify-between gap-2 px-3 py-2 font-semibold text-gray-700">
          {t.infoTitle}
          <span className="text-accent-500 transition-transform group-open:rotate-180" aria-hidden="true">▾</span>
        </summary>
        <dl className="grid grid-cols-[auto_1fr] gap-x-3 gap-y-1.5 border-t border-gray-200 px-3 py-3">
          {t.infoRows.map(([k, v]) => (
            <div key={k} className="contents">
              <dt className="font-semibold text-gray-700">{k}</dt>
              <dd>{v}</dd>
            </div>
          ))}
          <dt className="sr-only">+</dt>
          <dd className="col-span-2 pt-1">
            {t.infoMore}{" "}
            <a href={t.gdprLinkHref} className="text-primary-600 underline underline-offset-2">{t.gdprLink}</a>.
          </dd>
        </dl>
      </details>
      <button
        type="submit"
        disabled={status === "sending"}
        className="bg-accent-500 text-white px-8 py-3 rounded-full font-semibold hover:bg-accent-600 transition-colors disabled:opacity-60"
      >
        {status === "sending" ? t.sending : submitLabel || t.send}
      </button>
      {status === "ok" && (
        <p className="text-emerald-600 font-medium">{t.ok}</p>
      )}
      {status === "error" && (
        <p className="text-red-600 font-medium">{t.error}</p>
      )}
    </form>
  );
}
