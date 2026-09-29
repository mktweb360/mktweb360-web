/**
 * Medición de leads.
 * GTM (GTM-KVB3R3H) escucha el evento personalizado `form_submit_success`
 * (activador "Form Submit Success" -> etiqueta "Evento GA4 - Formulario Contacto").
 * Antes los formularios llamaban a gtag("event", "send_form_seo"), que GTM no
 * procesa: GA4 registraba 0 envíos de formulario.
 */
export function trackLead(formType: string, extra: Record<string, string> = {}) {
  if (typeof window === "undefined") return;
  const w = window as unknown as { dataLayer?: Record<string, unknown>[] };
  w.dataLayer = w.dataLayer || [];
  w.dataLayer.push({
    event: "form_submit_success",
    form_type: formType,
    page_location: window.location.pathname,
    ...extra,
  });
}
