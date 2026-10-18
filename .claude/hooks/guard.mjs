#!/usr/bin/env node
// Hook PreToolUse de mktweb360-web: los secretos (.env) no se leen ni se escriben.
import { readFileSync } from "node:fs";
import path from "node:path";

const input = JSON.parse(readFileSync(0, "utf8") || "{}");
const ti = input.tool_input ?? {};
const root = process.env.CLAUDE_PROJECT_DIR || input.cwd || process.cwd();
const deny = (reason) => {
  process.stdout.write(JSON.stringify({ hookSpecificOutput: { hookEventName: "PreToolUse", permissionDecision: "deny", permissionDecisionReason: reason } }));
  process.exit(0);
};
const file = typeof ti.file_path === "string" ? ti.file_path : "";
const rel = file ? path.relative(root, path.resolve(root, file)) : "";
if (rel && /(^|\/)\.env(\.|$)/.test(rel) && !rel.endsWith(".env.example"))
  deny("Los archivos .env contienen secretos y no se abren. Las variables viven en Vercel; pide a José el dato concreto.");
if (input.tool_name === "Bash" && /\b(cat|less|head|tail|grep)\b[^|;&]*\.env(\.local|\.production)?\b/.test(String(ti.command ?? "")))
  deny("Ese comando lee un archivo de secretos.");
vercelGuard();
function vercelGuard() {
  const c = String(ti.command ?? "");
  if (input.tool_name === "Bash" && /vercel\s+env\s+(rm|add|pull)/.test(c))
    process.stdout.write(JSON.stringify({ hookSpecificOutput: { hookEventName: "PreToolUse", permissionDecision: "ask", permissionDecisionReason: "Cambia o descarga variables de entorno de Vercel. Necesita el OK de José." } }));
}
