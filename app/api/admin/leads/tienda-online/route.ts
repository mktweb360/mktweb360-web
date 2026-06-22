import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";
import { appendFile, mkdir } from "fs/promises";
import { join } from "path";
import { randomUUID } from "crypto";

export async function POST(req: NextRequest) {
  const cookieStore = await cookies();
  const session = cookieStore.get("admin_session");
  if (!session || session.value !== "authenticated") {
    return NextResponse.json({ ok: false }, { status: 401 });
  }
  const data = await req.json();
  const id = randomUUID();
  const lead = { id, ...data, savedAt: new Date().toISOString() };
  const dir = join(process.cwd(), "data");
  await mkdir(dir, { recursive: true });
  const line = JSON.stringify(lead) + "\n";
  await appendFile(join(dir, "leads-tienda-online.jsonl"), line, "utf-8");
  return NextResponse.json({ ok: true, id });
}
