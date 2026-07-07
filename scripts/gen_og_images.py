#!/usr/bin/env python3
"""Generate 6 OpenGraph images (1200x630 JPEG) for mktweb360 service pages."""
import os
from PIL import Image, ImageDraw, ImageFont

W, H = 1200, 630
OUT_DIR = "/home/mktwe/mktweb360-web/public"
FONT_REG = "/tmp/DejaVuSans.ttf"
FONT_BOLD = "/tmp/DejaVuSans-Bold.ttf"

BG_TOP = (15, 23, 42)      # slate-900
BG_BOT = (30, 41, 59)      # slate-800
ACCENT = (234, 88, 12)     # orange-600
DOT = (51, 65, 85)         # slate-700
WHITE = (241, 245, 249)    # slate-100
MUTED = (148, 163, 184)    # slate-400
BAR = (2, 6, 23)           # near-black bottom bar

IMAGES = [
    ("og-seo.jpg", "SEO",
     "Primera página de Google. Resultados que se mantienen.",
     "Auditorías técnicas, estrategia de keywords, optimización on-page y link building."),
    ("og-paginas-corporativas.jpg", "Diseño Web Corporativo",
     "Tu web como activo de negocio, no decoración.",
     "Páginas web corporativas diseñadas para convertir visitas en clientes. WordPress, SEO incluido, desde 790€."),
    ("og-sem.jpg", "Google Ads SEM",
     "Primeros resultados desde el día uno.",
     "Campañas de Google Ads optimizadas para tu sector. Solo pagas cuando alguien hace clic en tu anuncio."),
    ("og-smm.jpg", "Redes Sociales",
     "Comunidades reales, no seguidores vacíos.",
     "Gestión profesional de Instagram, LinkedIn, Facebook y TikTok. Estrategia, contenido e informes mensuales."),
    ("og-marketing-contenidos.jpg", "Marketing de Contenidos",
     "Contenido que atrae, convence y convierte.",
     "Artículos SEO, estrategia editorial y contenidos que posicionan tu marca como referencia en tu sector."),
    ("og-geo.jpg", "GEO Posicionamiento IA",
     "Aparece en ChatGPT, Perplexity y Gemini.",
     "El SEO de la era de la inteligencia artificial. Optimización para LLMs y motores de respuesta generativa."),
]


def wrap(draw, text, font, max_w):
    words, lines, cur = text.split(), [], ""
    for w in words:
        trial = (cur + " " + w).strip()
        if draw.textlength(trial, font=font) <= max_w:
            cur = trial
        else:
            if cur:
                lines.append(cur)
            cur = w
    if cur:
        lines.append(cur)
    return lines


def make(fname, badge, tagline, desc):
    img = Image.new("RGB", (W, H), BG_TOP)
    d = ImageDraw.Draw(img)

    # vertical gradient background
    for y in range(H):
        t = y / (H - 1)
        d.line(
            [(0, y), (W, y)],
            fill=(
                int(BG_TOP[0] + (BG_BOT[0] - BG_TOP[0]) * t),
                int(BG_TOP[1] + (BG_BOT[1] - BG_TOP[1]) * t),
                int(BG_TOP[2] + (BG_BOT[2] - BG_TOP[2]) * t),
            ),
        )

    # dot texture, right side
    for gx in range(int(W * 0.62), W - 40, 34):
        for gy in range(70, H - 110, 34):
            d.ellipse([gx, gy, gx + 4, gy + 4], fill=DOT)

    # left orange accent bar
    d.rectangle([0, 0, 14, H], fill=ACCENT)

    x = 90
    f_badge = ImageFont.truetype(FONT_BOLD, 27)
    f_tag = ImageFont.truetype(FONT_BOLD, 60)
    f_desc = ImageFont.truetype(FONT_REG, 30)
    f_brand = ImageFont.truetype(FONT_BOLD, 30)

    # badge pill
    bt = badge.upper()
    bw = d.textlength(bt, font=f_badge)
    pad_x, pad_y, by = 22, 12, 78
    d.rounded_rectangle(
        [x, by, x + bw + pad_x * 2, by + 27 + pad_y * 2], radius=10, fill=ACCENT
    )
    d.text((x + pad_x, by + pad_y), bt, font=f_badge, fill=WHITE)

    # tagline
    y = 190
    for line in wrap(d, tagline, f_tag, 1010):
        d.text((x, y), line, font=f_tag, fill=WHITE)
        y += 72

    # description
    y += 18
    for line in wrap(d, desc, f_desc, 1000):
        d.text((x, y), line, font=f_desc, fill=MUTED)
        y += 40

    # bottom brand bar
    d.rectangle([0, H - 78, W, H], fill=BAR)
    d.rectangle([0, H - 78, 14, H], fill=ACCENT)
    d.text((x, H - 78 + 24), "Mkt Web 360", font=f_brand, fill=WHITE)
    url = "mktweb360.com"
    uw = d.textlength(url, font=f_desc)
    d.text((W - 90 - uw, H - 78 + 26), url, font=f_desc, fill=MUTED)

    path = os.path.join(OUT_DIR, fname)
    img.save(path, "JPEG", quality=88)
    return path


if __name__ == "__main__":
    for fname, badge, tagline, desc in IMAGES:
        p = make(fname, badge, tagline, desc)
        print("wrote", p)
