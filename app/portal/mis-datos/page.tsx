"use client";
import { useEffect, useState } from "react";

type Field = { label: string; max: number; required?: boolean };
type Profile = { ok: boolean; linked: boolean; fields: Record<string, Field>; values?: Record<string, string | null>; error?: string };

const ORDER = ["name", "legal_name", "tax_id", "address", "country", "phone", "website", "sector", "employee_count"];

export default function MisDatosPage() {
  const [p, setP] = useState<Profile | null>(null);
  const [form, setForm] = useState<Record<string, string>>({});
  const [saving, setSaving] = useState(false);
  const [msg, setMsg] = useState<{ ok: boolean; text: string } | null>(null);

  useEffect(() => {
    fetch("/api/portal/profile", { cache: "no-store" })
      .then((r) => {
        if (r.status === 401) { window.location.href = "/portal/login/"; return null; }
        return r.json();
      })
      .then((d: Profile | null) => {
        if (!d) return;
        setP(d);
        setForm(Object.fromEntries(ORDER.map((k) => [k, d.values?.[k] ?? ""])));
      })
      .catch(() => setP({ ok: false, linked: false, fields: {}, error: "No se pudieron cargar tus datos." }));
  }, []);

  const save = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    setMsg(null);
    try {
      const r = await fetch("/api/portal/profile", { method: "PUT", headers: { "Content-Type": "application/json" }, body: JSON.stringify(form) });
      const d = await r.json().catch(() => ({}));
      if (d.ok) setMsg({ ok: true, text: d.changed?.length ? "Datos guardados. Tu gestor ya los tiene actualizados." : "No había cambios que guardar." });
      else setMsg({ ok: false, text: d.error || "No se han podido guardar los datos." });
    } catch {
      setMsg({ ok: false, text: "Error de conexión. Inténtalo de nuevo." });
    } finally {
      setSaving(false);
    }
  };

  if (!p) return <p className="text-sm text-gray-500">Cargando tus datos…</p>;
  if (!p.ok) return <p className="text-sm text-red-500">{p.error ?? "No se pudieron cargar tus datos."}</p>;

  return (
    <div className="max-w-3xl">
      <h1 className="text-2xl font-bold text-primary-600 mb-1">Mis datos</h1>
      <p className="text-sm text-gray-500 mb-6">Los datos de tu empresa que usamos en propuestas, contratos y facturas. Si cambias algo, lo recibimos al momento.</p>
      {!p.linked ? (
        <p className="rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm text-amber-800">Tu acceso aún no está vinculado a la ficha de tu empresa. Abre un ticket y lo dejamos listo.</p>
      ) : (
        <form onSubmit={save} className="bg-white rounded-2xl border border-gray-200 p-6 grid gap-4 md:grid-cols-2">
          {ORDER.filter((k) => p.fields[k]).map((k) => (
            <div key={k} className={k === "address" ? "md:col-span-2" : ""}>
              <label htmlFor={`f-${k}`} className="block text-xs font-semibold text-gray-600 mb-1.5">{p.fields[k].label}{p.fields[k].required ? " *" : ""}</label>
              <input
                id={`f-${k}`}
                value={form[k] ?? ""}
                maxLength={p.fields[k].max}
                required={!!p.fields[k].required}
                onChange={(e) => setForm((f) => ({ ...f, [k]: e.target.value }))}
                className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary-400"
              />
            </div>
          ))}
          <div className="md:col-span-2 flex flex-wrap items-center gap-3">
            <button disabled={saving} className="bg-accent-500 hover:bg-accent-600 text-white px-6 py-2.5 rounded-xl font-bold text-sm disabled:opacity-50">{saving ? "Guardando..." : "Guardar cambios"}</button>
            {msg && <span className={`text-sm ${msg.ok ? "text-emerald-600" : "text-red-500"}`}>{msg.text}</span>}
          </div>
          <p className="md:col-span-2 text-xs text-gray-400">¿Quieres cambiar el correo con el que entras? Pídelo por un ticket.</p>
        </form>
      )}
    </div>
  );
}
