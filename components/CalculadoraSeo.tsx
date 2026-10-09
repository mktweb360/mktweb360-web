"use client";
import { useState } from "react";
import Link from "next/link";
import { recomendarPlan, precioTexto, type RespuestasCalculadora } from "@/lib/planes-seo";

type Opcion<T extends string> = { v: T; t: string };

function Grupo<T extends string>({ label, name, value, opciones, onChange }: {
  label: string; name: string; value: T; opciones: Opcion<T>[]; onChange: (v: T) => void;
}) {
  return (
    <fieldset className="mb-5">
      <legend className="font-semibold text-primary-700 mb-2 text-sm">{label}</legend>
      <div className="flex flex-wrap gap-2">
        {opciones.map((o) => (
          <label key={o.v} className={`cursor-pointer rounded-full border px-4 py-2 text-sm transition-colors ${value === o.v ? "bg-primary-600 border-primary-600 text-white" : "bg-white border-gray-300 text-gray-700 hover:border-primary-400"}`}>
            <input type="radio" name={name} value={o.v} checked={value === o.v} onChange={() => onChange(o.v)} className="sr-only" />
            {o.t}
          </label>
        ))}
      </div>
    </fieldset>
  );
}

export function CalculadoraSeo() {
  const [r, setR] = useState<RespuestasCalculadora>({ tipo: "servicios", paginas: "10", categorias: "20", productos: "500", fichas: "1", idiomas: "1" });
  const set = <K extends keyof RespuestasCalculadora>(k: K) => (v: RespuestasCalculadora[K]) => setR((p) => ({ ...p, [k]: v }));
  const { plan, notas } = recomendarPlan(r);

  function solicitar() {
    const resumen = [
      `Plan recomendado por la calculadora: ${plan.nombre} (${precioTexto(plan)})`,
      r.tipo === "tienda" ? `Tienda online · categorías: ${r.categorias === "mas" ? "más de 150" : "hasta " + r.categorias} · productos: ${r.productos === "mas" ? "más de 5.000" : "hasta " + r.productos}` : `Web de servicios · páginas: ${r.paginas === "mas" ? "más de 80" : "hasta " + r.paginas}`,
      `Fichas de Google: ${r.fichas === "mas" ? "más de 3" : r.fichas} · idiomas: ${r.idiomas === "mas" ? "2 o más" : "1"}`,
    ].join("\n");
    const ta = document.querySelector<HTMLTextAreaElement>("#contacto textarea[name=message]");
    if (ta) ta.value = resumen;
    document.getElementById("contacto")?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
      <div className="lg:col-span-3 bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
        <Grupo label="¿Qué tipo de web tienes?" name="tipo" value={r.tipo} onChange={set("tipo")} opciones={[{ v: "servicios", t: "Web de servicios o corporativa" }, { v: "tienda", t: "Tienda online" }]} />
        {r.tipo === "servicios" ? (
          <Grupo label="¿Cuántas páginas tiene, aproximadamente?" name="paginas" value={r.paginas} onChange={set("paginas")} opciones={[{ v: "10", t: "Hasta 10" }, { v: "30", t: "Hasta 30" }, { v: "80", t: "Hasta 80" }, { v: "mas", t: "Más de 80" }]} />
        ) : (
          <>
            <Grupo label="¿Cuántas categorías y subcategorías?" name="categorias" value={r.categorias} onChange={set("categorias")} opciones={[{ v: "20", t: "Hasta 20" }, { v: "150", t: "Hasta 150" }, { v: "mas", t: "Más de 150" }]} />
            <Grupo label="¿Cuántos productos?" name="productos" value={r.productos} onChange={set("productos")} opciones={[{ v: "500", t: "Hasta 500" }, { v: "5000", t: "Hasta 5.000" }, { v: "mas", t: "Más de 5.000" }]} />
          </>
        )}
        <Grupo label="¿Cuántas fichas de Google (sedes o locales)?" name="fichas" value={r.fichas} onChange={set("fichas")} opciones={[{ v: "0", t: "Ninguna" }, { v: "1", t: "1" }, { v: "3", t: "2 o 3" }, { v: "mas", t: "Más de 3" }]} />
        <Grupo label="¿En cuántos idiomas?" name="idiomas" value={r.idiomas} onChange={set("idiomas")} opciones={[{ v: "1", t: "1" }, { v: "mas", t: "2 o más" }]} />
      </div>

      <div className="lg:col-span-2 bg-primary-600 text-white rounded-2xl p-6 lg:sticky lg:top-24" aria-live="polite">
        <p className="text-primary-200 text-sm mb-1">Plan recomendado</p>
        <p className="text-2xl font-bold mb-1">{plan.nombre}</p>
        <p className="text-3xl font-bold text-accent-400 mb-4">{precioTexto(plan)}</p>
        <ul className="space-y-1.5 text-sm text-primary-100 mb-4">
          {plan.limites.map((l) => <li key={l}>• {l}</li>)}
        </ul>
        {notas.map((n) => <p key={n} className="text-xs text-primary-200 mb-2">{n}</p>)}
        <button type="button" onClick={solicitar} className="w-full bg-accent-500 hover:bg-accent-600 text-white font-bold rounded-full px-6 py-3 transition-colors mt-2">
          Quiero este plan
        </button>
        {plan.href && (
          <Link href={plan.href} className="block text-center text-sm text-primary-100 underline mt-3">Ver el detalle del plan</Link>
        )}
        <p className="text-xs text-primary-200 mt-4">Sin permanencia. Si tu caso no encaja en un plan, te preparamos un presupuesto a medida.</p>
      </div>
    </div>
  );
}
