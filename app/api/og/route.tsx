import { ImageResponse } from "next/og";
import type { NextRequest } from "next/server";
import { allPosts } from "@/lib/blog";

export const runtime = "edge";

export async function GET(req: NextRequest) {
  const { searchParams } = req.nextUrl;

  // Accepts ?slug=chatgpt-para-marketing-digital  OR  ?title=Custom+Title&cat=SEO
  const slug = searchParams.get("slug") ?? "";
  const post = allPosts.find((p) => p.slug === slug);

  const title = post?.title ?? searchParams.get("title") ?? "Mkt Web 360";
  const category = post?.category ?? searchParams.get("cat") ?? "Marketing Digital";

  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          width: "100%",
          height: "100%",
          background: "linear-gradient(135deg, #0f172a 0%, #1e293b 100%)",
          padding: "60px 70px",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        {/* Top bar */}
        <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
          <div
            style={{
              width: "44px",
              height: "44px",
              borderRadius: "10px",
              background: "#ea580c",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "22px",
              fontWeight: 900,
              color: "#fff",
            }}
          >
            M
          </div>
          <span style={{ color: "#94a3b8", fontSize: "22px", fontWeight: 600 }}>
            mktweb360.com
          </span>
        </div>

        {/* Category badge */}
        <div
          style={{
            display: "flex",
            background: "rgba(234,88,12,0.15)",
            border: "1px solid rgba(234,88,12,0.4)",
            borderRadius: "9999px",
            padding: "6px 20px",
            width: "fit-content",
            color: "#fb923c",
            fontSize: "18px",
            fontWeight: 600,
            letterSpacing: "0.03em",
          }}
        >
          {category}
        </div>

        {/* Title */}
        <div
          style={{
            color: "#f1f5f9",
            fontSize: title.length > 60 ? "36px" : "44px",
            fontWeight: 800,
            lineHeight: 1.2,
            maxWidth: "900px",
          }}
        >
          {title}
        </div>

        {/* Bottom bar */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <span style={{ color: "#64748b", fontSize: "18px" }}>
            Marketing Digital · SEO · GEO · Google Ads
          </span>
          <div
            style={{
              background: "#ea580c",
              borderRadius: "9999px",
              padding: "10px 28px",
              color: "#fff",
              fontSize: "18px",
              fontWeight: 700,
            }}
          >
            Leer artículo →
          </div>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
