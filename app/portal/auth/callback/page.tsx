"use client";
import { Suspense, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Image from "next/image";

function CallbackInner() {
  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    const token = searchParams.get("token");
    if (!token) {
      router.replace("/portal/login/");
      return;
    }
    document.cookie = `client_session=${token}; path=/; max-age=86400; SameSite=Lax`;
    router.replace("/portal/dashboard/");
  }, [router, searchParams]);

  return (
    <div className="min-h-screen bg-primary-600 flex items-center justify-center px-4">
      <div className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-sm text-center">
        <Image src="/logo.png" alt="Mkt Web 360" width={160} height={45} className="mx-auto mb-6" />
        <div className="flex items-center justify-center gap-3">
          <span className="w-5 h-5 border-2 border-primary-200 border-t-accent-500 rounded-full animate-spin" />
          <p className="text-sm font-semibold text-primary-600">Iniciando sesión…</p>
        </div>
      </div>
    </div>
  );
}

export default function PortalAuthCallbackPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-primary-600 flex items-center justify-center px-4">
          <p className="text-sm font-semibold text-white">Iniciando sesión…</p>
        </div>
      }
    >
      <CallbackInner />
    </Suspense>
  );
}
