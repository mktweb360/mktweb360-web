"use client";
import { Fragment, useEffect, useState } from "react";

type Line = { description: string; quantity: number; unit_price: number; discount: number; tax_rate: number; base: number };
type Invoice = { id: string; number: string; date: string; due_date: string | null; base: number; tax: number; total: number; lines: Line[] };
type Data = { ok: boolean; linked?: boolean; invoices?: Invoice[]; totals?: { count: number; year: string; year_base: number; year_total: number } | null; error?: string };

const eur = (n: number) => `${n.toLocaleString("es-ES", { minimumFractionDigits: 2, maximumFractionDigits: 2 })} €`;
const fecha = (d: string) => new Date(`${d}T12:00:00`).toLocaleDateString("es-ES", { day: "2-digit", month: "short", year: "numeric" });

export default function FacturasPage() {
  const [d, setD] = useState<Data | null>(null);
  const [open, setOpen] = useState<string | null>(null);

  useEffect(() => {
    fetch("/api/portal/facturas", { cache: "no-store" })
      .then((r) => {
        if (r.status === 401) { window.location.href = "/portal/login/"; return null; }
        return r.json();
      })
      .then((x: Data | null) => { if (x) setD(x); })
      .catch(() => setD({ ok: false, error: "No se pudieron cargar tus facturas." }));
  }, []);

  if (!d) return <p className="text-sm text-gray-500">Cargando tus facturas…</p>;
  if (!d.ok) return <p className="text-sm text-red-500">{d.error}</p>;

  return (
    <div className="max-w-4xl">
      <h1 className="text-2xl font-bold text-primary-600 mb-1">Facturas</h1>
      <p className="text-sm text-gray-500 mb-6">Las facturas que te hemos emitido, con su detalle. ¿Alguna duda? Abre un ticket.</p>
      {!d.linked ? (
        <p className="rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm text-amber-800">Tu acceso aún no está vinculado a la ficha de tu empresa. Abre un ticket y lo dejamos listo.</p>
      ) : (
        <>
          {d.totals && (
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-6">
              <div className="bg-white rounded-2xl border border-gray-200 p-4"><p className="text-xs text-gray-500">Facturas</p><p className="text-xl font-bold text-primary-600">{d.totals.count}</p></div>
              <div className="bg-white rounded-2xl border border-gray-200 p-4"><p className="text-xs text-gray-500">Base imponible {d.totals.year}</p><p className="text-xl font-bold text-primary-600">{eur(d.totals.year_base)}</p></div>
              <div className="bg-white rounded-2xl border border-gray-200 p-4"><p className="text-xs text-gray-500">Total {d.totals.year} (IVA incl.)</p><p className="text-xl font-bold text-primary-600">{eur(d.totals.year_total)}</p></div>
            </div>
          )}
          {(d.invoices ?? []).length === 0 ? (
            <p className="text-sm text-gray-500">Todavía no hay facturas.</p>
          ) : (
            <div className="bg-white rounded-2xl border border-gray-200 overflow-x-auto">
              <table className="w-full text-sm">
                <thead className="bg-gray-50 text-left text-xs text-gray-500">
                  <tr><th className="px-4 py-3">Número</th><th className="px-4 py-3">Fecha</th><th className="px-4 py-3">Vencimiento</th><th className="px-4 py-3 text-right">Base</th><th className="px-4 py-3 text-right">IVA</th><th className="px-4 py-3 text-right">Total</th></tr>
                </thead>
                <tbody>
                  {(d.invoices ?? []).map((f) => (
                    <Fragment key={f.id}>
                      <tr className="border-t border-gray-100 cursor-pointer hover:bg-gray-50" onClick={() => setOpen(open === f.id ? null : f.id)}>
                        <td className="px-4 py-3 font-semibold text-primary-600">{f.number} <span className="text-xs text-gray-400">{open === f.id ? "▲" : "▼"}</span></td>
                        <td className="px-4 py-3">{fecha(f.date)}</td>
                        <td className="px-4 py-3">{f.due_date ? fecha(f.due_date) : "—"}</td>
                        <td className="px-4 py-3 text-right">{eur(f.base)}</td>
                        <td className="px-4 py-3 text-right">{eur(f.tax)}</td>
                        <td className="px-4 py-3 text-right font-semibold">{eur(f.total)}</td>
                      </tr>
                      {open === f.id && (
                        <tr className="bg-gray-50">
                          <td colSpan={6} className="px-4 py-3">
                            <ul className="space-y-1 text-xs text-gray-600">
                              {f.lines.map((l, i) => (
                                <li key={i} className="flex justify-between gap-4">
                                  <span>{l.description}{l.quantity !== 1 ? ` × ${l.quantity}` : ""}{l.discount ? ` (dto. ${eur(l.discount)})` : ""}</span>
                                  <span className="whitespace-nowrap">{eur(l.base)} · IVA {l.tax_rate}%</span>
                                </li>
                              ))}
                            </ul>
                          </td>
                        </tr>
                      )}
                    </Fragment>
                  ))}
                </tbody>
              </table>
            </div>
          )}
          <p className="mt-3 text-xs text-gray-400">La descarga del PDF de cada factura estará disponible próximamente. Si necesitas una copia ahora, pídela por un ticket.</p>
        </>
      )}
    </div>
  );
}
