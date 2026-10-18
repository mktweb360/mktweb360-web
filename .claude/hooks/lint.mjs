#!/usr/bin/env node
// Hook PostToolUse de mktweb360-web: eslint del archivo editado y, si se toca el asistente, sus 44+ pruebas.
import { execFileSync } from "node:child_process";
import { readFileSync, existsSync } from "node:fs";
import path from "node:path";

const input = JSON.parse(readFileSync(0, "utf8") || "{}");
const file = input.tool_input?.file_path;
const root = process.env.CLAUDE_PROJECT_DIR || input.cwd || process.cwd();
if (typeof file !== "string" || !existsSync(file)) process.exit(0);
const rel = path.relative(root, path.resolve(root, file));
if (rel.startsWith("..") || rel.includes("node_modules")) process.exit(0);
const problems = [];
const run = (cmd, args, label) => {
  try { execFileSync(cmd, args, { cwd: root, stdio: "pipe", timeout: 90_000 }); }
  catch (e) { const m = `${e.stdout ?? ""}${e.stderr ?? ""}`.trim(); if (m) problems.push(`${label}:\n${m.slice(-2500)}`); }
};
if (/\.(ts|tsx|mjs)$/.test(rel)) run(path.join(root, "node_modules/.bin/eslint"), [rel], `eslint en ${rel}`);
if (/^(lib\/chatbot|app\/api\/chat|components\/chatbot)\//.test(rel)) run("node", ["--experimental-strip-types", "scripts/check-chatbot.mjs"], "pruebas del asistente (pnpm chatbot:check)");
if (problems.length) { process.stderr.write(problems.join("\n\n")); process.exit(2); }
