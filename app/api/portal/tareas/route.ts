import { NextRequest, NextResponse } from "next/server";
import { fetchMktOS } from "@/lib/mktos-client";

function asTasks(data: unknown): unknown[] {
  if (Array.isArray(data)) return data;
  if (data && typeof data === "object" && Array.isArray((data as { tasks?: unknown[] }).tasks)) {
    return (data as { tasks: unknown[] }).tasks;
  }
  return [];
}

export async function GET(req: NextRequest) {
  const token = req.cookies.get("client_session")?.value;
  if (!token) {
    return NextResponse.json({ ok: false, error: "No autenticado" }, { status: 401 });
  }

  try {
    const [tasksRes, recentRes, nextRes] = await Promise.all([
      fetchMktOS("/tasks", token, { cache: "no-store" }),
      fetchMktOS("/tasks/recent", token, { cache: "no-store" }),
      fetchMktOS("/tasks/next", token, { cache: "no-store" }),
    ]);

    if ([tasksRes, recentRes, nextRes].some((r) => r.status === 401)) {
      return NextResponse.json({ ok: false, error: "Sesión expirada" }, { status: 401 });
    }
    if (!tasksRes.ok || !recentRes.ok || !nextRes.ok) {
      return NextResponse.json(
        { ok: false, error: "No se pudieron cargar las tareas." },
        { status: 502 }
      );
    }

    const tasksData = await tasksRes.json().catch(() => null);
    const recentData = await recentRes.json().catch(() => null);
    const nextData = await nextRes.json().catch(() => null);

    const nextTask =
      nextData && typeof nextData === "object"
        ? ((nextData as { task?: unknown }).task ??
          ((nextData as { id?: unknown }).id ? nextData : null))
        : null;

    return NextResponse.json({
      ok: true,
      tasks: asTasks(tasksData),
      recent: asTasks(recentData),
      next: nextTask,
    });
  } catch {
    return NextResponse.json(
      { ok: false, error: "No se pudo conectar con el servidor." },
      { status: 502 }
    );
  }
}
