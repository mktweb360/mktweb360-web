"use client";
// Asistente de mktweb360.com: botón arriba a la derecha con bocadillo tipo cómic (decisión de José, 18/10).
// Sin cookies de seguimiento: solo sessionStorage para no repetir el bocadillo y mantener la conversación al navegar.
import { useCallback, useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";

import { TXT, bubbleFor, pick } from "@/lib/chatbot/texts";
import { ctxOf, openingChips, type Chip, type ChipId } from "@/lib/chatbot/funnel";
import type { Lang } from "@/lib/chatbot/core";
import { CONSENT_COMERCIAL } from "@/lib/consent-texts";
import { trackLead } from "@/lib/track";

// WhatsApp del 622 74 89 87: desde el 28/10/2026 está en la app WhatsApp Business del móvil, así que el chat lo ofrece.
const WHATSAPP_ACTIVO = true;

type Action = "presupuesto" | "contacto" | "auditoria" | "llamada";
type FormKind = "presupuesto" | "contacto" | "auditoria" | "llamada";
interface Msg {
  role: "user" | "assistant";
  content: string;
  link?: { href: string; label: string };
  actions?: Action[];
  chips?: Chip[];
  sig?: string;
}

const UI: Record<Lang, Record<string, string>> = {
  es: {
    open: "Abrir el asistente", close: "Cerrar", title: "Asistente Mkt Web 360", sub: "IA · te responde al momento",
    placeholder: "Escribe tu pregunta…", send: "Enviar", quote: "Pedir presupuesto", human: "Hablar con José",
    name: "Nombre", email: "Email", phone: "Teléfono", business: "Tu negocio (sector y web, si tienes)", need: "¿Qué te gustaría conseguir?",
    pref: "¿Cómo prefieres que te contactemos?", llamada: "Llamada", whatsapp: "WhatsApp", slot: "Mejor momento para llamarte (opcional)",
    gdpr: "He leído la información sobre privacidad y acepto que Mkt Web 360 trate mis datos para responder a mi solicitud.",
    privacy: "Responsable: Mkt Web 360 SLU. Finalidad: responder a tu solicitud y preparar tu propuesta (medidas precontractuales a tu petición). Se envía la conversación de este chat junto con tus datos. Puedes ejercer tus derechos en info@mktweb360.com.",
    privacyLink: "Política de privacidad", submit: "Enviar mis datos", sending: "Enviando…", error: "No se ha podido enviar. Prueba otra vez o escríbenos por WhatsApp al 622 74 89 87.",
    audit: "Pedir la auditoría gratuita", callme: "Que me llaméis", pickSlot: "Elige un hueco para la llamada (hora de España)", asap: "Lo antes posible", asapDone: "¡Hecho! José ya tiene el aviso en el móvil y te llamará lo antes posible.", booked: "¡Hecho! Llamada reservada para el", bookedTail: "José te llamará al teléfono que nos has dejado.", site: "Tu web (dirección) y tu sector",
    whats: "WhatsApp 622 74 89 87", call: "Llamar", mail: "info@mktweb360.com", restart: "Empezar de nuevo",
  },
  en: {
    open: "Open the assistant", close: "Close", title: "Mkt Web 360 assistant", sub: "AI · instant replies",
    placeholder: "Type your question…", send: "Send", quote: "Request a quote", human: "Talk to José",
    name: "Name", email: "Email", phone: "Phone", business: "Your business (sector and website, if any)", need: "What would you like to achieve?",
    pref: "How should we contact you?", llamada: "Phone call", whatsapp: "WhatsApp", slot: "Best time to call you (optional)",
    gdpr: "I have read the privacy information and agree to Mkt Web 360 processing my data to answer my request.",
    privacy: "Controller: Mkt Web 360 SLU. Purpose: answering your request and preparing your proposal (pre-contractual steps at your request). This chat conversation is sent with your details. Exercise your rights at info@mktweb360.com.",
    privacyLink: "Privacy policy", submit: "Send my details", sending: "Sending…", error: "Couldn't send. Try again or message us on WhatsApp at +34 622 74 89 87.",
    audit: "Request the free audit", callme: "Call me", pickSlot: "Pick a time for the call (Spain time)", asap: "As soon as possible", asapDone: "Done! José has the alert on his phone and will call you as soon as possible.", booked: "Done! Call booked for", bookedTail: "José will call you on the number you left.", site: "Your website (address) and sector",
    whats: "WhatsApp +34 622 74 89 87", call: "Call", mail: "info@mktweb360.com", restart: "Start again",
  },
  fr: {
    open: "Ouvrir l'assistant", close: "Fermer", title: "Assistant Mkt Web 360", sub: "IA · réponse immédiate",
    placeholder: "Écrivez votre question…", send: "Envoyer", quote: "Demander un devis", human: "Parler à José",
    name: "Nom", email: "Email", phone: "Téléphone", business: "Votre activité (secteur et site web)", need: "Qu'aimeriez-vous obtenir ?",
    pref: "Comment préférez-vous être contacté ?", llamada: "Appel", whatsapp: "WhatsApp", slot: "Meilleur moment pour vous appeler (facultatif)",
    gdpr: "J'ai lu les informations sur la confidentialité et j'accepte que Mkt Web 360 traite mes données pour répondre à ma demande.",
    privacy: "Responsable : Mkt Web 360 SLU. Finalité : répondre à votre demande et préparer votre proposition. La conversation de ce chat est envoyée avec vos coordonnées. Vos droits : info@mktweb360.com.",
    privacyLink: "Politique de confidentialité", submit: "Envoyer mes coordonnées", sending: "Envoi…", error: "Échec de l'envoi. Réessayez ou écrivez-nous sur WhatsApp au +34 622 74 89 87.",
    audit: "Demander l'audit gratuit", callme: "Rappelez-moi", pickSlot: "Choisissez un créneau (heure d'Espagne)", asap: "Dès que possible", asapDone: "C'est fait ! José a reçu l'alerte et vous appellera dès que possible.", booked: "C'est fait ! Appel réservé pour le", bookedTail: "José vous appellera au numéro indiqué.", site: "Votre site (adresse) et votre secteur",
    whats: "WhatsApp +34 622 74 89 87", call: "Appeler", mail: "info@mktweb360.com", restart: "Recommencer",
  },
};

const HIDDEN = /^\/(area-privada|portal|admin|api)(\/|$)/;
const KEY = "mw360_chat_v1";

function utmOf() {
  try {
    const q = new URLSearchParams(window.location.search);
    const u = { source: q.get("utm_source") ?? "", medium: q.get("utm_medium") ?? "", campaign: q.get("utm_campaign") ?? "" };
    if (u.source) sessionStorage.setItem("mw360_utm", JSON.stringify(u));
    return u.source ? u : (JSON.parse(sessionStorage.getItem("mw360_utm") || "null") ?? {});
  } catch { return {}; }
}
function langOf(path: string): Lang {
  return path.startsWith("/en/") || path === "/en" ? "en" : path.startsWith("/fr/") || path === "/fr" ? "fr" : "es";
}
function ss<T>(k: string, v?: T): T | null {
  try {
    if (v === undefined) { const r = sessionStorage.getItem(k); return r ? (JSON.parse(r) as T) : null; }
    sessionStorage.setItem(k, JSON.stringify(v));
  } catch { /* almacenamiento bloqueado: el asistente funciona igual */ }
  return null;
}

export function ChatWidget() {
  const pathname = usePathname() || "/";
  const lang = langOf(pathname);
  const t = UI[lang];
  const [open, setOpen] = useState(false);
  const [bubble, setBubble] = useState<string | null>(null);
  const [msgs, setMsgs] = useState<Msg[]>([]);
  const [token, setToken] = useState<string | null>(null);
  const [closed, setClosed] = useState(false);
  const [input, setInput] = useState("");
  const [busy, setBusy] = useState(false);
  const [form, setForm] = useState<null | FormKind>(null);
  const listRef = useRef<HTMLDivElement>(null);
  const launcherRef = useRef<HTMLButtonElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Recupera la conversación de esta pestaña al navegar entre páginas.
  useEffect(() => {
    const saved = ss<{ msgs: Msg[]; token: string | null; closed: boolean }>(KEY);
    if (saved?.msgs?.length) { setMsgs(saved.msgs); setToken(saved.token); setClosed(saved.closed); }
  }, []);
  useEffect(() => { if (msgs.length) ss(KEY, { msgs: msgs.slice(-30), token, closed }); }, [msgs, token, closed]);

  // Bocadillo: una vez por sesión, cuando el banner de cookies ya no está delante.
  useEffect(() => {
    if (HIDDEN.test(pathname) || ss<boolean>("mw360_chat_bubble")) return;
    let tries = 0;
    const iv = setInterval(() => {
      tries++;
      let consent = false;
      try { consent = !!localStorage.getItem("mktweb360_consent"); } catch { consent = true; }
      if ((consent && tries >= 3) || tries >= 20) {
        clearInterval(iv);
        setBubble(bubbleFor(undefined, pathname, lang, Math.floor(Math.random() * 10)));
        ss("mw360_chat_bubble", true);
      }
    }, 2000);
    return () => clearInterval(iv);
  }, [pathname, lang]);

  // Escape cierra el asistente y el foco vuelve al botón.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") { setOpen(false); setTimeout(() => launcherRef.current?.focus(), 0); } };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  useEffect(() => { listRef.current?.scrollTo({ top: listRef.current.scrollHeight, behavior: "smooth" }); }, [msgs, form, open]);

  const openChat = useCallback(() => {
    setOpen(true);
    setBubble(null);
    setMsgs((m) => (m.length ? m : [
      { role: "assistant", content: pick(TXT.aviso, lang, 0) },
      { role: "assistant", content: pick(TXT.saludo, lang, Math.floor(Math.random() * 3)), chips: openingChips(ctxOf(pathname), lang) },
    ]));
    setTimeout(() => inputRef.current?.focus(), 150);
  }, [lang, pathname]);

  async function send(text: string, chip: ChipId | null = null) {
    const msg = text.trim();
    if (!msg || busy || closed) return;
    const history = msgs.filter((m) => m.content).map((m) => ({ role: m.role, content: m.content, sig: m.sig })).slice(-10);
    setMsgs((m) => [...m, { role: "user", content: msg }]);
    setInput("");
    setBusy(true);
    try {
      const r = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: msg, chip, token, history, page: { path: pathname, lang, title: document.title, utm: utmOf() } }),
      });
      const j = await r.json();
      if (!r.ok) throw new Error(j.error || "error");
      setToken(j.token);
      const rep = j.reply as { text: string; link?: Msg["link"]; actions: Action[]; chips: Chip[]; closed: boolean };
      setMsgs((m) => [...m, { role: "assistant", content: rep.text, link: rep.link, actions: rep.actions, chips: rep.chips, sig: j.sig }]);
      // Abre el formulario directamente cuando la sugerencia pulsada lo pide.
      const direct = rep.actions.find((a) => a === "auditoria" || a === "llamada");
      if (direct && chip) setForm(direct);
      if (rep.closed) setClosed(true);
    } catch (e) {
      setMsgs((m) => [...m, { role: "assistant", content: e instanceof Error && e.message !== "error" ? e.message : t.error, actions: ["contacto"] }]);
    } finally {
      setBusy(false);
    }
  }

  if (HIDDEN.test(pathname)) return null;

  return (
    <>
      {!open && (
        <div className="fixed z-[55] flex items-start gap-2" style={{ top: "calc(76px + env(safe-area-inset-top, 0px))", right: "max(16px, env(safe-area-inset-right, 0px))" }}>
          {bubble && (
            <div className="relative mt-1 max-w-[230px] rounded-2xl border-2 border-[#0f1c2e] bg-white px-4 py-3 text-[13.5px] leading-snug text-[#0f1c2e] shadow-[4px_4px_0_#0f1c2e] animate-[mwpop_.35s_ease-out]">
              <button onClick={openChat} className="text-left" aria-label={t.open}>{bubble}</button>
              <button onClick={() => setBubble(null)} aria-label={t.close} className="absolute -left-2 -top-2 h-6 w-6 rounded-full border-2 border-[#0f1c2e] bg-white text-[12px] font-bold leading-none">×</button>
              {/* rabito del bocadillo hacia el botón */}
              <span aria-hidden className="absolute -right-[11px] top-4 h-0 w-0 border-y-[8px] border-l-[11px] border-y-transparent border-l-[#0f1c2e]" />
              <span aria-hidden className="absolute -right-[7px] top-[18px] h-0 w-0 border-y-[6px] border-l-[8px] border-y-transparent border-l-white" />
            </div>
          )}
          <button ref={launcherRef} onClick={openChat} aria-label={t.open}
            className="relative grid h-14 w-14 place-items-center rounded-full bg-[#0f1c2e] text-white shadow-lg ring-2 ring-white transition hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#f97316]">
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" aria-hidden><path d="M4 5.5A2.5 2.5 0 0 1 6.5 3h11A2.5 2.5 0 0 1 20 5.5v8a2.5 2.5 0 0 1-2.5 2.5H10l-4.2 3.6c-.5.4-1.3.1-1.3-.6V16A2.5 2.5 0 0 1 4 13.5v-8Z" fill="currentColor"/><circle cx="8.5" cy="9.5" r="1.2" fill="#0f1c2e"/><circle cx="12" cy="9.5" r="1.2" fill="#0f1c2e"/><circle cx="15.5" cy="9.5" r="1.2" fill="#0f1c2e"/></svg>
            <span className="absolute right-0.5 top-0.5 h-3.5 w-3.5 rounded-full border-2 border-white bg-[#f97316]" aria-hidden />
          </button>
        </div>
      )}

      {open && (
        <section role="dialog" aria-modal="false" aria-label={t.title}
          className="fixed z-[56] flex flex-col overflow-hidden bg-white text-[#0f1c2e] shadow-2xl inset-0 sm:inset-auto sm:right-4 sm:top-[76px] sm:h-[min(620px,calc(100vh-96px))] sm:w-[390px] sm:rounded-2xl sm:border sm:border-gray-200">
          <header className="flex items-center gap-3 bg-[#0f1c2e] px-4 py-3 text-white" style={{ paddingTop: "max(12px, env(safe-area-inset-top, 0px))" }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/icono-mw360.png" alt="" width={32} height={32} className="h-8 w-8 shrink-0 rounded-full" />
            <div className="min-w-0 flex-1">
              <p className="text-[15px] font-bold leading-tight">{t.title}</p>
              <p className="text-[12px] text-white/70">{t.sub}</p>
            </div>
            <button onClick={() => { setOpen(false); setTimeout(() => launcherRef.current?.focus(), 0); }} aria-label={t.close} className="grid h-9 w-9 place-items-center rounded-full hover:bg-white/10">
              <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden><path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"/></svg>
            </button>
          </header>

          <div ref={listRef} className="flex-1 space-y-3 overflow-y-auto bg-[#f6f7fb] px-3 py-4" aria-live="polite">
            {msgs.map((m, i) => (
              <div key={i} className={m.role === "user" ? "flex justify-end" : "flex flex-col items-start gap-2"}>
                <div className={`max-w-[85%] whitespace-pre-wrap rounded-2xl px-3.5 py-2.5 text-[14px] leading-relaxed ${m.role === "user" ? "rounded-br-md bg-[#0f1c2e] text-white" : "rounded-bl-md border border-gray-200 bg-white"}`}>
                  {m.content}
                  {m.link && (<><br /><a href={m.link.href} className="font-semibold text-[#ea6a00] underline">{m.link.label}</a></>)}
                </div>
                {m.role === "assistant" && i === msgs.length - 1 && !closed && (
                  <div className="flex flex-wrap gap-2">
                    {m.actions?.includes("presupuesto") && <button onClick={() => setForm("presupuesto")} className="rounded-full bg-[#f97316] px-3.5 py-1.5 text-[13px] font-semibold text-white hover:bg-[#ea6a00]">{t.quote}</button>}
                    {m.actions?.includes("auditoria") && <button onClick={() => setForm("auditoria")} className="rounded-full bg-[#f97316] px-3.5 py-1.5 text-[13px] font-semibold text-white hover:bg-[#ea6a00]">{t.audit}</button>}
                    {m.actions?.includes("llamada") && <button onClick={() => setForm("llamada")} className="rounded-full bg-[#f97316] px-3.5 py-1.5 text-[13px] font-semibold text-white hover:bg-[#ea6a00]">{t.callme}</button>}
                    {m.actions?.includes("contacto") && <ContactLinks t={t} onForm={() => setForm("contacto")} />}
                    {m.chips?.filter((c) => !(m.actions?.includes(c.id as Action))).map((c) => (
                      <button key={c.id} onClick={() => send(c.label, c.id)} className="rounded-full border border-[#0f1c2e]/20 bg-white px-3 py-1.5 text-[13px] hover:border-[#f97316]">{c.label}</button>
                    ))}
                  </div>
                )}
              </div>
            ))}
            {busy && <div className="flex gap-1 px-2" aria-label="…"><Dot /><Dot d=".15s" /><Dot d=".3s" /></div>}
            {form && <LeadForm kind={form} t={t} lang={lang} token={token} transcript={msgs} page={pathname}
              onDone={(ok, reserva) => { setForm(null); if (ok) { setMsgs((m) => [...m, { role: "assistant", content: reserva === "__asap__" ? t.asapDone : reserva ? `${t.booked} ${reserva}. ${t.bookedTail}` : pick(TXT.leadOk, lang, 0) }]); trackLead("chatbot", { chatbot_kind: form ?? "" }); } }}
              onCancel={() => setForm(null)} />}
          </div>

          <form onSubmit={(e) => { e.preventDefault(); send(input); }} className="flex items-center gap-2 border-t border-gray-200 bg-white px-3 py-2.5" style={{ paddingBottom: "max(10px, env(safe-area-inset-bottom, 0px))" }}>
            <label htmlFor="mw360-chat-input" className="sr-only">{t.placeholder}</label>
            <input id="mw360-chat-input" ref={inputRef} value={input} onChange={(e) => setInput(e.target.value)} maxLength={600} disabled={closed}
              placeholder={t.placeholder} autoComplete="off"
              className="min-w-0 flex-1 rounded-full border border-gray-300 px-4 py-2.5 text-base sm:text-[14px] outline-none focus:border-[#f97316] disabled:bg-gray-100" />
            <button type="submit" disabled={busy || closed || !input.trim()} aria-label={t.send}
              className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-[#f97316] text-white disabled:opacity-40">
              <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden><path d="M4 12l16-8-6 16-2.5-6.5L4 12Z" fill="currentColor"/></svg>
            </button>
          </form>
        </section>
      )}
      <style>{`@keyframes mwpop{0%{opacity:0;transform:translateY(-6px) scale(.96)}100%{opacity:1;transform:none}}@keyframes mwdot{0%,80%,100%{opacity:.25}40%{opacity:1}}@media (prefers-reduced-motion:reduce){.animate-\\[mwpop_\\.35s_ease-out\\]{animation:none}}`}</style>
    </>
  );
}

function Dot({ d = "0s" }: { d?: string }) {
  return <span className="h-2 w-2 rounded-full bg-[#0f1c2e]" style={{ animation: `mwdot 1.2s ${d} infinite` }} />;
}

function ContactLinks({ t, onForm }: { t: Record<string, string>; onForm: () => void }) {
  return (
    <>
      {WHATSAPP_ACTIVO && <a href="https://wa.me/34622748987" target="_blank" rel="noopener noreferrer" className="rounded-full bg-[#25d366] px-3.5 py-1.5 text-[13px] font-semibold text-white">{t.whats}</a>}
      <a href="tel:+34622748987" className="rounded-full border border-[#0f1c2e]/20 bg-white px-3 py-1.5 text-[13px]">{t.call}</a>
      <button onClick={onForm} className="rounded-full border border-[#0f1c2e]/20 bg-white px-3 py-1.5 text-[13px]">{t.submit}</button>
    </>
  );
}

function LeadForm({ kind, t, lang, token, transcript, page, onDone, onCancel }: {
  kind: FormKind; t: Record<string, string>; lang: Lang; token: string | null; transcript: Msg[]; page: string;
  onDone: (ok: boolean, reserva?: string) => void; onCancel: () => void;
}) {
  const [v, setV] = useState({ name: "", email: "", phone: "", business: "", need: "", preference: kind === "llamada" ? "llamada" : "email", slot: "", gdpr: false, marketing: false, _hp: "" });
  // Momento en que se abre el formulario del chat (antispam en el servidor).
  const [startedAt] = useState(() => Date.now());
  const [st, setSt] = useState<"idle" | "sending" | "error">("idle");
  const [slots, setSlots] = useState<string[] | null>(null);
  const [slotIso, setSlotIso] = useState("");
  const [asap, setAsap] = useState(false);
  // Huecos reales del calendario de MktOS cuando prefiere que le llamemos.
  useEffect(() => {
    if (v.preference !== "llamada" || slots !== null) return;
    fetch("/api/chat/slots").then((r) => r.json()).then((j) => setSlots(Array.isArray(j.slots) ? j.slots : [])).catch(() => setSlots([]));
  }, [v.preference, slots]);
  const fmtSlot = (iso: string) => new Intl.DateTimeFormat(lang === "es" ? "es-ES" : lang === "fr" ? "fr-FR" : "en-GB", { timeZone: "Europe/Madrid", weekday: "short", day: "numeric", month: "short", hour: "2-digit", minute: "2-digit" }).format(new Date(iso));
  const [err, setErr] = useState("");
  const set = (k: string, val: string | boolean) => setV((x) => ({ ...x, [k]: val }));
  const field = "w-full rounded-lg border border-gray-300 px-3 py-2 text-base sm:text-[14px] outline-none focus:border-[#f97316]";

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setSt("sending"); setErr("");
    try {
      const utm = new URLSearchParams(window.location.search);
      const r = await fetch("/api/chat/lead", {
        method: "POST", headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...v, _ts: startedAt, slotIso: asap ? "" : slotIso, slot: asap ? t.asap : slotIso ? fmtSlot(slotIso) : v.slot, urgent: asap && v.preference === "llamada", kind, token, lang, page, transcript: transcript.map((m) => ({ role: m.role, content: m.content })),
          utm_source: utm.get("utm_source") ?? "", utm_medium: utm.get("utm_medium") ?? "", utm_campaign: utm.get("utm_campaign") ?? "" }),
      });
      const j = await r.json();
      if (!r.ok) { setErr(j.error || t.error); setSt("error"); return; }
      onDone(true, typeof j.reserva === "string" ? j.reserva : asap && v.preference === "llamada" ? "__asap__" : undefined);
    } catch { setErr(t.error); setSt("error"); }
  }

  return (
    <form onSubmit={submit} className="space-y-2.5 rounded-2xl border border-gray-200 bg-white p-3.5 text-[13.5px]">
      <input id="mw360-l-name" aria-label={t.name} required placeholder={t.name} value={v.name} onChange={(e) => set("name", e.target.value)} className={field} autoComplete="name" />
      <input id="mw360-l-email" aria-label={t.email} required type="email" placeholder={t.email} value={v.email} onChange={(e) => set("email", e.target.value)} className={field} autoComplete="email" />
      <input id="mw360-l-phone" aria-label={t.phone} type="tel" placeholder={t.phone} value={v.phone} onChange={(e) => set("phone", e.target.value)} className={field} autoComplete="tel"
        required={v.preference !== "email"} />
      <input id="mw360-l-business" aria-label={kind === "auditoria" ? t.site : t.business} placeholder={kind === "auditoria" ? t.site : t.business} value={v.business} onChange={(e) => set("business", e.target.value)} className={field} />
      {(kind === "presupuesto" || kind === "auditoria") && <textarea id="mw360-l-need" aria-label={t.need} placeholder={t.need} value={v.need} onChange={(e) => set("need", e.target.value)} className={field} rows={2} />}
      <fieldset className="space-y-1">
        <legend className="text-[12.5px] text-gray-600">{t.pref}</legend>
        <div className="flex flex-wrap gap-3">
          {(WHATSAPP_ACTIVO ? (["email", "llamada", "whatsapp"] as const) : (["email", "llamada"] as const)).map((p) => (
            <label key={p} className="flex items-center gap-1.5"><input type="radio" name="mw360-pref" checked={v.preference === p} onChange={() => set("preference", p)} />{p === "email" ? t.email : t[p]}</label>
          ))}
        </div>
      </fieldset>
      {v.preference === "llamada" && (
        <fieldset className="space-y-1">
          <legend className="text-[12.5px] text-gray-600">{t.pickSlot}</legend>
          <div className="flex flex-wrap gap-1.5">
            <button type="button" onClick={() => { setAsap(!asap); setSlotIso(""); }} aria-pressed={asap}
              className={`rounded-full border px-2.5 py-1 text-[12.5px] font-semibold ${asap ? "border-[#f97316] bg-[#f97316] text-white" : "border-[#f97316] bg-white text-[#c2410c]"}`}>{t.asap}</button>
            {(slots ?? []).map((iso) => (
              <button type="button" key={iso} onClick={() => { setSlotIso(slotIso === iso ? "" : iso); setAsap(false); }} aria-pressed={slotIso === iso}
                className={`rounded-full border px-2.5 py-1 text-[12.5px] ${slotIso === iso ? "border-[#f97316] bg-[#f97316] text-white" : "border-gray-300 bg-white"}`}>{fmtSlot(iso)}</button>
            ))}
          </div>
        </fieldset>
      )}
      {v.preference === "llamada" && !slotIso && !asap && <input id="mw360-l-slot" aria-label={t.slot} placeholder={t.slot} value={v.slot} onChange={(e) => set("slot", e.target.value)} className={field} />}
      <input tabIndex={-1} autoComplete="off" aria-hidden="true" className="hidden" value={v._hp} onChange={(e) => set("_hp", e.target.value)} name="website_url" />
      <p className="text-[11.5px] leading-snug text-gray-500">{t.privacy} <a href={lang === "es" ? "/politica-de-privacidad/" : "/politica-de-privacidad/"} target="_blank" className="underline">{t.privacyLink}</a></p>
      <label className="flex items-start gap-2 text-[12.5px]"><input type="checkbox" required checked={v.gdpr} onChange={(e) => set("gdpr", e.target.checked)} className="mt-0.5" />{t.gdpr}</label>
      <label className="flex items-start gap-2 text-[12.5px]"><input type="checkbox" checked={v.marketing} onChange={(e) => set("marketing", e.target.checked)} className="mt-0.5" />{CONSENT_COMERCIAL[lang]}</label>
      {err && <p className="text-[12.5px] text-red-700" role="alert">{err}</p>}
      <div className="flex gap-2">
        <button type="submit" disabled={st === "sending"} className="flex-1 rounded-full bg-[#f97316] px-4 py-2 font-semibold text-white disabled:opacity-60">{st === "sending" ? t.sending : t.submit}</button>
        <button type="button" onClick={onCancel} className="rounded-full border border-gray-300 px-3 py-2">{t.close}</button>
      </div>
    </form>
  );
}
