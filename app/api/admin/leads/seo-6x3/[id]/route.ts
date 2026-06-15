import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";
import { readFile } from "fs/promises";
import { join } from "path";

export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const cookieStore = await cookies();
  const session = cookieStore.get("admin_session");
  if (!session || session.value !== "authenticated") {
    return NextResponse.json({ ok: false }, { status: 401 });
  }

  const { id } = await params;

  try {
    const file = await readFile(join(process.cwd(), "data", "leads-seo-6x3.jsonl"), "utf-8");
    const leads = file.trim().split("\n").map((l) => JSON.parse(l));
    const lead = leads.find((l) => l.id === id);
    if (!lead) return NextResponse.json({ ok: false }, { status: 404 });
    return NextResponse.json({ ok: true, lead });
  } catch {
    return NextResponse.json({ ok: false }, { status: 404 });
  }
}
