#!/usr/bin/env node
// Extrae las FAQs de las páginas de la web para la base de conocimiento del asistente.
// No instala nada: usa el compilador de TypeScript que ya está en devDependencies.
// Uso: node scripts/extraer-faqs-chatbot.mjs  →  docs/chatbot/conocimiento/faqs-web.json
// Cada respuesta sale con estado «pendiente_revision». El asistente solo usará las que apruebe José.
import { readFileSync, writeFileSync, readdirSync, statSync } from "node:fs";
import { join, relative, sep } from "node:path";
import ts from "typescript";

const ROOT = process.cwd();
const APP = join(ROOT, "app");
const OUT = join(ROOT, "docs", "chatbot", "conocimiento", "faqs-web.json");

const walk = (d) => readdirSync(d).flatMap((f) => { const p = join(d, f); return statSync(p).isDirectory() ? walk(p) : p.endsWith("page.tsx") ? [p] : []; });

function routeOf(file) {
  const rel = relative(APP, file).split(sep).slice(0, -1).filter((s) => !/^\(.*\)$/.test(s));
  return `/${rel.join("/")}${rel.length ? "/" : ""}`;
}

const text = (n) => {
  if (!n) return null;
  if (ts.isStringLiteral(n) || ts.isNoSubstitutionTemplateLiteral(n)) return n.text;
  if (ts.isTemplateExpression(n)) return null; // con variables: se omite para no reconstruir mal el texto
  if (ts.isBinaryExpression(n) && n.operatorToken.kind === ts.SyntaxKind.PlusToken) {
    const l = text(n.left), r = text(n.right);
    return l !== null && r !== null ? l + r : null;
  }
  return null;
};

const KEYS = { q: ["q", "question", "pregunta"], a: ["a", "answer", "respuesta"] };

// Frases que el asistente no debe repetir sin revisión (plazos, cifras, garantías)
const RISK = [/\bgarantiz/i, /\b\d+\s*(días|semanas|meses|horas)\b/i, /\b\d+\s*%/, /\bprimer[ao]s? (posici|puesto|resultado)/i, /\bsiempre\b/i, /\bnunca\b/i, /€/];

const faqs = [];
for (const file of walk(APP)) {
  const src = readFileSync(file, "utf8");
  if (!/faq/i.test(src)) continue;
  const sf = ts.createSourceFile(file, src, ts.ScriptTarget.Latest, true, ts.ScriptKind.TSX);
  const route = routeOf(file);
  const visit = (node) => {
    if (ts.isVariableDeclaration(node) && ts.isIdentifier(node.name) && /faq/i.test(node.name.text) && !/schema/i.test(node.name.text) && node.initializer && ts.isArrayLiteralExpression(node.initializer)) {
      const varName = node.name.text;
      const lang = /_EN$/.test(varName) ? "en" : /_FR$/.test(varName) ? "fr" : "es";
      for (const el of node.initializer.elements) {
        if (!ts.isObjectLiteralExpression(el)) continue;
        const get = (keys) => {
          const p = el.properties.find((p) => ts.isPropertyAssignment(p) && keys.includes(p.name.getText(sf).replace(/["']/g, "")));
          return p && ts.isPropertyAssignment(p) ? text(p.initializer) : null;
        };
        const q = get(KEYS.q), a = get(KEYS.a);
        if (!q || !a) continue;
        faqs.push({ ruta: route, idioma: lang, pregunta: q.trim(), respuesta: a.replace(/\s+/g, " ").trim(), aviso_revision: RISK.filter((re) => re.test(a)).map((re) => re.source), estado: "pendiente_revision" });
      }
    }
    ts.forEachChild(node, visit);
  };
  visit(sf);
}

// Duplicados exactos (misma pregunta y respuesta en varias páginas): se agrupan
const byKey = new Map();
for (const f of faqs) {
  const k = `${f.idioma}|${f.pregunta.toLowerCase()}|${f.respuesta.toLowerCase()}`;
  if (byKey.has(k)) byKey.get(k).rutas.push(f.ruta);
  else byKey.set(k, { ...f, rutas: [f.ruta], ruta: undefined });
}
const out = [...byKey.values()].map(({ ruta, ...rest }) => rest).sort((x, y) => x.rutas[0].localeCompare(y.rutas[0]));
const stats = { total_extraidas: faqs.length, unicas: out.length, por_idioma: out.reduce((m, f) => ({ ...m, [f.idioma]: (m[f.idioma] ?? 0) + 1 }), {}), con_aviso_revision: out.filter((f) => f.aviso_revision.length).length, paginas: new Set(faqs.map((f) => f.ruta)).size };
writeFileSync(OUT, JSON.stringify({ generado: new Date().toISOString(), fuente: "app/**/page.tsx (constantes FAQS*)", nota: "Texto tal cual está publicado en la web. Estado pendiente_revision: el asistente solo usará las respuestas que apruebe José. aviso_revision marca plazos, cifras, garantías o absolutos.", ...stats, faqs: out }, null, 1));
console.log(JSON.stringify(stats));
