"use client";
import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

const NAV = [
  { href: "/portal/dashboard", label: "Dashboard", icon: "📊" },
  { href: "/portal/informes", label: "Informes", icon: "📈" },
  { href: "/portal/tareas", label: "Tareas", icon: "✅" },
  { href: "/portal/tickets", label: "Tickets", icon: "🎫" },
];

function getCookie(name: string): string | null {
  if (typeof document === "undefined") return null;
  const match = document.cookie.match(new RegExp("(^| )" + name + "=([^;]+)"));
  return match ? decodeURIComponent(match[2]) : null;
}

function parseJwtPayload(token: string): Record<string, unknown> | null {
  try {
    const base64 = token.split(".")[1].replace(/-/g, "+").replace(/_/g, "/");
    return JSON.parse(atob(base64));
  } catch {
    return null;
  }
}

export default function PortalLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();
  const [clientName, setClientName] = useState<string | null>(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const isPublicPage =
    pathname === "/portal/login" ||
    pathname === "/portal/login/" ||
    pathname === "/portal/auth/callback" ||
    pathname === "/portal/auth/callback/";

  useEffect(() => {
    if (isPublicPage) return;
    const token = getCookie("client_session");
    if (!token) {
      router.replace("/portal/login/");
      return;
    }
    const payload = parseJwtPayload(token);
    if (!payload) {
      router.replace("/portal/login/");
      return;
    }
    setClientName((payload.name as string) || (payload.email as string) || "Cliente");
  }, [isPublicPage, router]);

  const handleLogout = () => {
    document.cookie = "client_session=; Max-Age=0; path=/";
    router.replace("/portal/login/");
  };

  if (isPublicPage) return <>{children}</>;

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Overlay móvil */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-20 md:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-full w-64 bg-primary-600 text-white z-30 flex flex-col transition-transform duration-300
          ${sidebarOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0 md:static md:flex`}
      >
        <div className="px-6 py-5 border-b border-primary-700">
          <Image src="/logo.png" alt="Mkt Web 360" width={140} height={40} className="brightness-0 invert" />
        </div>
        <nav className="flex-1 px-3 py-4 space-y-1">
          {NAV.map((item) => {
            const active = pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setSidebarOpen(false)}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-colors
                  ${active
                    ? "bg-accent-500 text-white"
                    : "text-primary-200 hover:bg-primary-700 hover:text-white"
                  }`}
              >
                <span className="text-base">{item.icon}</span>
                {item.label}
              </Link>
            );
          })}
        </nav>
        <div className="px-6 py-4 border-t border-primary-700">
          <p className="text-xs text-primary-400 mb-1">Portal de cliente</p>
          <p className="text-xs text-primary-300">Mkt Web 360 SLU</p>
        </div>
      </aside>

      {/* Contenido principal */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Barra superior */}
        <header className="bg-white border-b border-gray-200 px-4 py-3 flex items-center justify-between sticky top-0 z-10">
          <div className="flex items-center gap-3">
            <button
              className="md:hidden p-2 text-primary-600 rounded-lg hover:bg-gray-100"
              onClick={() => setSidebarOpen(true)}
              aria-label="Abrir menú"
            >
              <span className="block w-5 h-0.5 bg-current mb-1" />
              <span className="block w-5 h-0.5 bg-current mb-1" />
              <span className="block w-5 h-0.5 bg-current" />
            </button>
            <span className="text-sm text-gray-500">
              Hola, <strong className="text-primary-600">{clientName ?? "..."}</strong>
            </span>
          </div>
          <button
            onClick={handleLogout}
            className="text-xs text-gray-500 hover:text-red-500 transition-colors flex items-center gap-1.5 px-3 py-1.5 rounded-lg hover:bg-red-50"
          >
            <span>→</span> Cerrar sesión
          </button>
        </header>

        <main className="flex-1 p-4 md:p-6">
          {children}
        </main>
      </div>
    </div>
  );
}
