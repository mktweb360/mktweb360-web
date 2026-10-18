// Genera lib/chatbot/kb.json: solo las FAQs que José ha aprobado o editado en la página «Revisión FAQs del asistente»,
// más el índice público de páginas. Uso: node scripts/chatbot-kb.mjs
// Entradas (docs/chatbot/conocimiento/): faqs-clasificadas.json, decisiones-faqs.json, paginas-web.json
import { readFileSync, writeFileSync } from "node:fs";

const dir = "docs/chatbot/conocimiento";
const faqs = JSON.parse(readFileSync(`${dir}/faqs-clasificadas.json`, "utf8"));
const { decisiones, exportado } = JSON.parse(readFileSync(`${dir}/decisiones-faqs.json`, "utf8"));
const { paginas } = JSON.parse(readFileSync(`${dir}/paginas-web.json`, "utf8"));

// Páginas de servicio u oferta (el resto son artículos: sus FAQs son informativas y cuentan en el cupo).
const SERVICIO = /^\/(en\/|fr\/)?(oferta|landing|precios|diseno-web-para|diseno-de-paginas-web|diseno-web-tienda-online|tienda-online|seo-local\/|seo-posicionamiento|email-marketing\/|analitica-web|comunicacion-audiovisual|auditoria-digital|geo-posicionamiento-ia\/|consultor-seo|creacion-de-blog|google-business-profile\/|sem-publicidad|smm-social|marketing-de-contenidos|ia-aplicada-al-marketing\/|agencia-|web-design-|seo-web-positioning|google-ads-management|google-business-profile-service|social-media-marketing|geo-generative|ai-applied|contacto|nosotros|blog-para-monetizacion)/;
const PRECIO = /(\d[\d.,]*\s?(€|euros?|eur\b|£))|(€\s?\d)/i;
const out = [];
for (const f of faqs) {
  const d = decisiones[f.id];
  if (!d || (d.estado !== "aprobada" && d.estado !== "editada")) continue;
  const a = d.estado === "editada" && d.respuesta ? d.respuesta : f.a;
  out.push({
    id: f.id,
    l: f.l,
    r: f.r.replace(/^\/\[lang\]/, "/" + f.l),
    tipo: SERVICIO.test(f.r.replace(/^\/\[lang\]/, "")) ? "servicio" : "informativa",
    q: f.q,
    a,
    // Respuestas con cifras: el asistente añade siempre la nota de referencia y la propuesta de presupuesto.
    cifras: PRECIO.test(a),
  });
}
const pags = paginas.map((p) => ({ ruta: p.ruta, tipo: p.tipo ?? "", servicio: p.servicio ?? "", title: p.title ?? "", description: p.description ?? "" }));
writeFileSync("lib/chatbot/kb.json", JSON.stringify({ generado: new Date().toISOString(), decisiones_exportadas: exportado, faqs: out, paginas: pags }));
console.log(`kb.json: ${out.length} FAQs aprobadas, ${pags.length} páginas`);
