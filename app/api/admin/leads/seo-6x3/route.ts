import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function POST(req: NextRequest) {
  const cookieStore = await cookies();
  const session = cookieStore.get("admin_session");
  if (!session || session.value !== "authenticated") {
    return NextResponse.json({ ok: false }, { status: 401 });
  }

  const data = await req.json();

  // Store in a simple JSON file for now — will connect to app DB tomorrow
  const { appendFile, mkdir } = await import("fs/promises");
  const { join } = await import("path");

  const dir = join(process.cwd(), "data");
  await mkdir(dir, { recursive: true });

  const line = JSON.stringify({ ...data, savedAt: new Date().toISOString() }) + "\n";
  await appendFile(join(dir, "leads-seo-6x3.jsonl"), line, "utf-8");

  return NextResponse.json({ ok: true });
}
