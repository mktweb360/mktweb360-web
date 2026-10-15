// Texto exacto de la casilla opcional de comunicaciones comerciales (art. 21 LSSI).
// Lo usan el formulario (lo que ve la persona) y /api/contact (lo que se guarda como prueba en MktOS).
// Si se cambia, el texto nuevo queda registrado en los consentimientos que se den a partir de ese momento.
export type ConsentLang = "es" | "en" | "fr";

export const CONSENT_COMERCIAL: Record<ConsentLang, string> = {
  es: "Quiero recibir de vez en cuando novedades y consejos de Mkt Web 360 por email (opcional).",
  en: "I'd like to receive occasional news and tips from Mkt Web 360 by email (optional).",
  fr: "Je souhaite recevoir de temps en temps des nouveautés et conseils de Mkt Web 360 par email (facultatif).",
};

export const consentLang = (v: unknown): ConsentLang => (v === "en" || v === "fr" ? v : "es");
