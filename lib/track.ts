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

/**
 * Clic en una llamada a la acción (landing de pintores y artículo relacionado).
 * Evento `cta_click` en dataLayer. GTM necesita un activador de evento personalizado `cta_click`
 * y una etiqueta GA4 con los parámetros cta_id, cta_location, cta_type, cta_text, cta_destination.
 * Sin ese activador en GTM el evento queda en el dataLayer sin llegar a GA4 (ver informe de la landing).
 */
export function trackCta(p: { id: string; location: string; type: "audit" | "contact" | "phone" | "link"; text: string; destination: string }) {
  if (typeof window === "undefined") return;
  const w = window as unknown as { dataLayer?: Record<string, unknown>[] };
  w.dataLayer = w.dataLayer || [];
  w.dataLayer.push({
    event: "cta_click",
    cta_id: p.id,
    cta_location: p.location,
    cta_type: p.type,
    cta_text: p.text,
    cta_destination: p.destination,
    page_location: window.location.pathname,
  });
}
