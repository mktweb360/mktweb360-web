"use client";
import { useState } from "react";
import Link from "next/link";
import { recomendarPlan, precioTexto, type RespuestasCalculadora, type PlanLang } from "@/lib/planes-seo";

type Opcion<T extends string> = { v: T; t: string };

// Textos de la calculadora por idioma. La lógica (recomendarPlan) y los precios son únicos.
const T = {
  es: {
    tipo: "¿Qué tipo de web tienes?",
    tipoServicios: "Web de servicios o corporativa",
    tipoTienda: "Tienda online",
    paginas: "¿Cuántas páginas tiene, aproximadamente?",
    hasta: "Hasta",
    masDe: "Más de",
    categorias: "¿Cuántas categorías y subcategorías?",
    productos: "¿Cuántos productos?",
    n5000: "5.000",
    fichas: "¿Cuántas fichas de Google (sedes o locales)?",
    ninguna: "Ninguna",
    dosOTres: "2 o 3",
    idiomas: "¿En cuántos idiomas?",
    dosOMas: "2 o más",
    recomendado: "Plan recomendado",
    quiero: "Quiero este plan",
    detalle: "Ver el detalle del plan",
    pie: "Sin permanencia. Si tu caso no encaja en un plan, te preparamos un presupuesto a medida.",
    rPlan: "Plan recomendado por la calculadora",
    rTienda: "Tienda online",
    rCategorias: "categorías",
    rProductos: "productos",
    rMas150: "más de 150",
    rMas5000: "más de 5.000",
    rHasta: "hasta",
    rServicios: "Web de servicios",
    rPaginas: "páginas",
    rMas80: "más de 80",
    rFichas: "Fichas de Google",
    rMas3: "más de 3",
    rIdiomas: "idiomas",
    rDosOMas: "2 o más",
  },
  en: {
    tipo: "What kind of website do you have?",
    tipoServicios: "Service or corporate website",
    tipoTienda: "Online store",
    paginas: "Roughly how many pages does it have?",
    hasta: "Up to",
    masDe: "More than",
    categorias: "How many categories and subcategories?",
    productos: "How many products?",
    n5000: "5,000",
    fichas: "How many Google Business Profile listings (locations or premises)?",
    ninguna: "None",
    dosOTres: "2 or 3",
    idiomas: "In how many languages?",
    dosOMas: "2 or more",
    recomendado: "Recommended plan",
    quiero: "I want this plan",
    detalle: "See the plan in detail",
    pie: "No minimum term. If your case does not fit a plan, we will prepare a custom quote.",
    rPlan: "Plan recommended by the calculator",
    rTienda: "Online store",
    rCategorias: "categories",
    rProductos: "products",
    rMas150: "more than 150",
    rMas5000: "more than 5,000",
    rHasta: "up to",
    rServicios: "Service website",
    rPaginas: "pages",
    rMas80: "more than 80",
    rFichas: "Google Business Profile listings",
    rMas3: "more than 3",
    rIdiomas: "languages",
    rDosOMas: "2 or more",
  },
  fr: {
    tipo: "Quel type de site avez-vous ?",
    tipoServicios: "Site de services ou institutionnel",
    tipoTienda: "Boutique en ligne",
    paginas: "Combien de pages compte-t-il, approximativement ?",
    hasta: "Jusqu'à",
    masDe: "Plus de",
    categorias: "Combien de catégories et sous-catégories ?",
    productos: "Combien de produits ?",
    n5000: "5 000",
    fichas: "Combien de fiches Google (établissements ou locaux) ?",
    ninguna: "Aucune",
    dosOTres: "2 ou 3",
    idiomas: "En combien de langues ?",
    dosOMas: "2 ou plus",
    recomendado: "Formule recommandée",
    quiero: "Je veux cette formule",
    detalle: "Voir le détail de la formule",
    pie: "Sans engagement. Si votre cas ne correspond à aucune formule, nous vous préparons un devis sur mesure.",
    rPlan: "Formule recommandée par le calculateur",
    rTienda: "Boutique en ligne",
    rCategorias: "catégories",
    rProductos: "produits",
    rMas150: "plus de 150",
    rMas5000: "plus de 5 000",
    rHasta: "jusqu'à",
    rServicios: "Site de services",
    rPaginas: "pages",
    rMas80: "plus de 80",
    rFichas: "Fiches Google",
    rMas3: "plus de 3",
    rIdiomas: "langues",
    rDosOMas: "2 ou plus",
  },
} as const;

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

export function CalculadoraSeo({ lang = "es" }: { lang?: PlanLang }) {
  const t = T[lang];
  const [r, setR] = useState<RespuestasCalculadora>({ tipo: "servicios", paginas: "10", categorias: "20", productos: "500", fichas: "1", idiomas: "1" });
  const set = <K extends keyof RespuestasCalculadora>(k: K) => (v: RespuestasCalculadora[K]) => setR((p) => ({ ...p, [k]: v }));
  const { plan, notas } = recomendarPlan(r, lang);

  function solicitar() {
    const resumen = [
      `${t.rPlan}: ${plan.nombre} (${precioTexto(plan, lang)})`,
      r.tipo === "tienda" ? `${t.rTienda} · ${t.rCategorias}: ${r.categorias === "mas" ? t.rMas150 : t.rHasta + " " + r.categorias} · ${t.rProductos}: ${r.productos === "mas" ? t.rMas5000 : t.rHasta + " " + (lang !== "es" && r.productos === "5000" ? t.n5000 : r.productos)}` : `${t.rServicios} · ${t.rPaginas}: ${r.paginas === "mas" ? t.rMas80 : t.rHasta + " " + r.paginas}`,
      `${t.rFichas}: ${r.fichas === "mas" ? t.rMas3 : r.fichas} · ${t.rIdiomas}: ${r.idiomas === "mas" ? t.rDosOMas : "1"}`,
    ].join("\n");
    const ta = document.querySelector<HTMLTextAreaElement>("#contacto textarea[name=message]");
    if (ta) ta.value = resumen;
    document.getElementById("contacto")?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
      <div className="lg:col-span-3 bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
        <Grupo label={t.tipo} name="tipo" value={r.tipo} onChange={set("tipo")} opciones={[{ v: "servicios", t: t.tipoServicios }, { v: "tienda", t: t.tipoTienda }]} />
        {r.tipo === "servicios" ? (
          <Grupo label={t.paginas} name="paginas" value={r.paginas} onChange={set("paginas")} opciones={[{ v: "10", t: `${t.hasta} 10` }, { v: "30", t: `${t.hasta} 30` }, { v: "80", t: `${t.hasta} 80` }, { v: "mas", t: `${t.masDe} 80` }]} />
        ) : (
          <>
            <Grupo label={t.categorias} name="categorias" value={r.categorias} onChange={set("categorias")} opciones={[{ v: "20", t: `${t.hasta} 20` }, { v: "150", t: `${t.hasta} 150` }, { v: "mas", t: `${t.masDe} 150` }]} />
            <Grupo label={t.productos} name="productos" value={r.productos} onChange={set("productos")} opciones={[{ v: "500", t: `${t.hasta} 500` }, { v: "5000", t: `${t.hasta} ${t.n5000}` }, { v: "mas", t: `${t.masDe} ${t.n5000}` }]} />
          </>
        )}
        <Grupo label={t.fichas} name="fichas" value={r.fichas} onChange={set("fichas")} opciones={[{ v: "0", t: t.ninguna }, { v: "1", t: "1" }, { v: "3", t: t.dosOTres }, { v: "mas", t: `${t.masDe} 3` }]} />
        <Grupo label={t.idiomas} name="idiomas" value={r.idiomas} onChange={set("idiomas")} opciones={[{ v: "1", t: "1" }, { v: "mas", t: t.dosOMas }]} />
      </div>

      <div className="lg:col-span-2 bg-primary-600 text-white rounded-2xl p-6 lg:sticky lg:top-24" aria-live="polite">
        <p className="text-primary-200 text-sm mb-1">{t.recomendado}</p>
        <p className="text-2xl font-bold mb-1">{plan.nombre}</p>
        <p className="text-3xl font-bold text-accent-400 mb-4">{precioTexto(plan, lang)}</p>
        <ul className="space-y-1.5 text-sm text-primary-100 mb-4">
          {plan.limites.map((l) => <li key={l}>• {l}</li>)}
        </ul>
        {notas.map((n) => <p key={n} className="text-xs text-primary-200 mb-2">{n}</p>)}
        <button type="button" onClick={solicitar} className="w-full bg-accent-500 hover:bg-accent-600 text-white font-bold rounded-full px-6 py-3 transition-colors mt-2">
          {t.quiero}
        </button>
        {plan.href && (
          <Link href={plan.href} className="block text-center text-sm text-primary-100 underline mt-3">{t.detalle}</Link>
        )}
        <p className="text-xs text-primary-200 mt-4">{t.pie}</p>
      </div>
    </div>
  );
}
