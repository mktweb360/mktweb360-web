// Uso único (24-sep-2026). Quita " | Mkt Web 360" del title de metadata en
// app/[lang]/(site)/*/page.tsx: la plantilla del layout ("%s | Mkt Web 360") ya añade la marca
// y se renderizaba duplicada en 84 URLs EN/FR. Solo toca el tramo entre el primer "title:" y el
// siguiente "description:" (no afecta a openGraph). Lo ejecuta y elimina un workflow temporal.
import { readdirSync, readFileSync, writeFileSync, existsSync } from "node:fs";
import { join } from "node:path";

const base = "app/[lang]/(site)";
const BRAND = " | Mkt Web 360";
let changed = 0;
let total = 0;
for (const dir of readdirSync(base)) {
  const f = join(base, dir, "page.tsx");
  if (!existsSync(f)) continue;
  const src = readFileSync(f, "utf8");
  const i = src.indexOf("title:");
  const d = i < 0 ? -1 : src.indexOf("description:", i);
  if (i < 0 || d < 0) continue;
  const seg = src.slice(i, d);
  const n = seg.split(BRAND).length - 1;
  if (n === 0) continue;
  writeFileSync(f, src.slice(0, i) + seg.split(BRAND).join("") + src.slice(d));
  changed++;
  total += n;
  console.log(`${f}: ${n}`);
}
console.log(`Archivos modificados: ${changed}, sustituciones: ${total}`);
if (changed !== 42) {
  console.error("Se esperaban 42 archivos; se aborta para revisar.");
  process.exit(1);
}
