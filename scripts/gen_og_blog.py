from PIL import Image, ImageDraw, ImageFont, ImageFilter
import os

W, H = 2400, 1260  # 2x for supersample, downsample to 1200x630
NAVY = (15, 28, 46, 255)
NAVY2 = (24, 42, 68, 255)
ORANGE = (249, 115, 22, 255)
WHITE = (255, 255, 255, 255)
WHITE_60 = (255, 255, 255, 160)

BOLD = "/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf"
REG = "/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf"

def wrap_text(draw, text, font, max_width):
    words = text.split()
    lines = []
    cur = ""
    for w in words:
        test = (cur + " " + w).strip()
        bbox = draw.textbbox((0,0), test, font=font)
        if bbox[2] - bbox[0] <= max_width or not cur:
            cur = test
        else:
            lines.append(cur)
            cur = w
    if cur:
        lines.append(cur)
    return lines

def make_card(filename, eyebrow, headline, number="5"):
    img = Image.new("RGBA", (W, H), NAVY)
    draw = ImageDraw.Draw(img, "RGBA")

    grad = Image.new("L", (W, H), 0)
    gdraw = ImageDraw.Draw(grad)
    for x in range(0, W, 4):
        val = int(255 * (x / W) * 0.5)
        gdraw.line([(x, 0), (x, H)], fill=val)
    grad = grad.filter(ImageFilter.GaussianBlur(80))
    navy2_layer = Image.new("RGBA", (W, H), NAVY2)
    img = Image.composite(navy2_layer, img, grad)
    draw = ImageDraw.Draw(img, "RGBA")

    glow = Image.new("RGBA", (W, H), (0,0,0,0))
    gdraw = ImageDraw.Draw(glow, "RGBA")
    gdraw.ellipse([W-900, -500, W+300, 700], fill=(249,115,22,60))
    glow = glow.filter(ImageFilter.GaussianBlur(180))
    img = Image.alpha_composite(img, glow)

    glow2 = Image.new("RGBA", (W, H), (0,0,0,0))
    g2draw = ImageDraw.Draw(glow2, "RGBA")
    g2draw.ellipse([-600, H-700, 700, H+400], fill=(100,85,185,50))
    glow2 = glow2.filter(ImageFilter.GaussianBlur(180))
    img = Image.alpha_composite(img, glow2)

    draw = ImageDraw.Draw(img, "RGBA")

    num_font = ImageFont.truetype(BOLD, 900)
    bbox = draw.textbbox((0,0), number, font=num_font)
    nw, nh = bbox[2]-bbox[0], bbox[3]-bbox[1]
    draw.text((W - nw - 60, H/2 - nh/2 - bbox[1] - 20), number, font=num_font, fill=(255,255,255,18))

    lx, ly = 96, 96
    bar_w = 26
    gap = 12
    heights = [56, 90, 120]
    colors = [(255,255,255,170), (255,255,255,170), ORANGE]
    base_y = ly + 120
    for i, (h, c) in enumerate(zip(heights, colors)):
        x0 = lx + i*(bar_w+gap)
        y0 = base_y - h
        draw.rounded_rectangle([x0, y0, x0+bar_w, base_y], radius=6, fill=c)

    wordmark_font = ImageFont.truetype(BOLD, 44)
    draw.text((lx + 3*(bar_w+gap) + 24, base_y - 120 + 38), "MKT WEB 360", font=wordmark_font, fill=WHITE)

    eyebrow_font = ImageFont.truetype(BOLD, 34)
    ey_y = 320
    draw.text((96, ey_y), eyebrow.upper(), font=eyebrow_font, fill=ORANGE)

    headline_font = ImageFont.truetype(BOLD, 96)
    lines = wrap_text(draw, headline, headline_font, 1500)
    hy = ey_y + 90
    for line in lines:
        draw.text((96, hy), line, font=headline_font, fill=WHITE)
        bbox = draw.textbbox((0,0), line, font=headline_font)
        hy += (bbox[3]-bbox[1]) + 28

    footer_font = ImageFont.truetype(REG, 32)
    fy = H - 130
    draw.line([(96, fy-30), (W-96, fy-30)], fill=(255,255,255,40), width=2)
    draw.text((96, fy), "mktweb360.com", font=footer_font, fill=WHITE_60)
    tel = "622 74 89 87"
    bbox = draw.textbbox((0,0), tel, font=footer_font)
    draw.text((W-96-(bbox[2]-bbox[0]), fy), tel, font=footer_font, fill=WHITE_60)

    img = img.convert("RGB")
    img = img.resize((1200, 630), Image.LANCZOS)
    out_path = f"/home/mktadmin/mktweb360-web/public/{filename}"
    img.save(out_path, "JPEG", quality=92)
    print("Saved", out_path)

make_card(
    "og-5-factores-web-clinicas-salud.jpg",
    "Diseño Web · Clínicas y Salud",
    "5 factores clave en la web de una clínica",
)
make_card(
    "og-5-factores-web-despachos-abogados.jpg",
    "Diseño Web · Despachos de Abogados",
    "5 factores clave en la web de un despacho de abogados",
)
make_card(
    "og-5-factores-web-inmobiliarias.jpg",
    "Diseño Web · Inmobiliarias",
    "5 factores clave en la web de una inmobiliaria",
)
