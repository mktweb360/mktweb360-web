import { allPosts } from "@/lib/blog";
import { NextResponse } from "next/server";

export const dynamic = "force-static";

export function GET() {
  const baseUrl = "https://www.mktweb360.com";
  const posts = [...allPosts].sort((a, b) => b.date.localeCompare(a.date));

  const items = posts
    .map(
      (post) => `
    <item>
      <title><![CDATA[${post.title}]]></title>
      <link>${baseUrl}/${post.slug}/</link>
      <guid isPermaLink="true">${baseUrl}/${post.slug}/</guid>
      <description><![CDATA[${post.excerpt}]]></description>
      <category><![CDATA[${post.category}]]></category>
      <pubDate>${new Date(post.date).toUTCString()}</pubDate>
    </item>`
    )
    .join("");

  const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Blog de Marketing Digital — Mkt Web 360</title>
    <link>${baseUrl}</link>
    <description>Ideas, estrategias y consejos de marketing digital para PYMEs y empresas. SEO, Google Ads, diseño web, redes sociales y más.</description>
    <language>es</language>
    <managingEditor>info@mktweb360.com (Mkt Web 360)</managingEditor>
    <webMaster>info@mktweb360.com (Mkt Web 360)</webMaster>
    <copyright>© ${new Date().getFullYear()} Mkt Web 360 SLU</copyright>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="${baseUrl}/feed.xml" rel="self" type="application/rss+xml"/>
    <image>
      <url>${baseUrl}/logo.png</url>
      <title>Mkt Web 360</title>
      <link>${baseUrl}</link>
    </image>
    ${items}
  </channel>
</rss>`;

  return new NextResponse(rss, {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
    },
  });
}
