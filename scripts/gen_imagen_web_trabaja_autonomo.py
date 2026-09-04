import math
from PIL import Image, ImageDraw, ImageFont, ImageFilter

W, H = 1520, 2262  # 2x supersample of 760x1131
NAVY = (15, 28, 46, 255)
NAVY2 = (24, 42, 68, 255)
NAVY_CARD = (22, 37, 58, 255)
ORANGE = (249, 115, 22, 255)
ORANGE_SOFT = (249, 115, 22, 60)
PURPLE1 = (45, 30, 120, 255)
PURPLE2 = (100, 85, 185, 255)
WHITE = (255, 255, 255, 255)
WHITE_85 = (255, 255, 255, 217)
WHITE_60 = (255, 255, 255, 153)
WHITE_35 = (255, 255, 255, 89)
WHITE_15 = (255, 255, 255, 38)

BOLD = "/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf"
REG = "/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf"

def wrap_text(draw, text, font, max_width):
    words = text.split()
    lines, cur = [], ""
    for w in words:
        test = (cur + " " + w).strip()
        bbox = draw.textbbox((0, 0), test, font=font)
        if bbox[2] - bbox[0] <= max_width or not cur:
            cur = test
        else:
            lines.append(cur)
            cur = w
    if cur:
        lines.append(cur)
    return lines

def centered_text(draw, cx, y, text, font, fill, anchor="mm"):
    draw.text((cx, y), text, font=font, fill=fill, anchor=anchor)

img = Image.new("RGBA", (W, H), NAVY)
draw = ImageDraw.Draw(img, "RGBA")

# diagonal gradient navy -> navy2
grad = Image.new("L", (W, H), 0)
gdraw = ImageDraw.Draw(grad)
for y in range(0, H, 4):
    val = int(255 * (y / H) * 0.55)
    gdraw.line([(0, y), (W, y)], fill=val)
grad = grad.filter(ImageFilter.GaussianBlur(90))
navy2_layer = Image.new("RGBA", (W, H), NAVY2)
img = Image.composite(navy2_layer, img, grad)
draw = ImageDraw.Draw(img, "RGBA")

# soft orange glow upper right, purple glow lower left
glow = Image.new("RGBA", (W, H), (0, 0, 0, 0))
gdraw = ImageDraw.Draw(glow, "RGBA")
gdraw.ellipse([W - 700, -350, W + 400, 650], fill=(249, 115, 22, 45))
gdraw.ellipse([-500, H - 750, 550, H + 250], fill=(100, 85, 185, 40))
glow = glow.filter(ImageFilter.GaussianBlur(160))
img = Image.alpha_composite(img, glow)
draw = ImageDraw.Draw(img, "RGBA")

# ---- Logo top-left ----
lx, ly = 72, 72
bar_w, gap = 20, 9
heights = [42, 68, 90]
colors = [(255, 255, 255, 170), (255, 255, 255, 170), ORANGE]
base_y = ly + 90
for i, (h, c) in enumerate(zip(heights, colors)):
    x0 = lx + i * (bar_w + gap)
    y0 = base_y - h
    draw.rounded_rectangle([x0, y0, x0 + bar_w, base_y], radius=5, fill=c)
wordmark_font = ImageFont.truetype(BOLD, 32)
draw.text((lx + 3 * (bar_w + gap) + 18, base_y - 90 + 30), "MKT WEB 360", font=wordmark_font, fill=WHITE)

# ---- Eyebrow + headline ----
eyebrow_font = ImageFont.truetype(BOLD, 26)
centered_text(draw, W / 2, 230, "TU WEB, TU MEJOR EMPLEADO", eyebrow_font, ORANGE, anchor="mm")

headline_font = ImageFont.truetype(BOLD, 62)
lines = wrap_text(draw, "Trabaja para ti aunque tú no puedas", headline_font, W - 160)
hy = 275
for line in lines:
    bbox = draw.textbbox((0, 0), line, font=headline_font)
    lh = bbox[3] - bbox[1]
    centered_text(draw, W / 2, hy + lh / 2, line, headline_font, WHITE, anchor="mm")
    hy += lh + 16

sub_font = ImageFont.truetype(REG, 30)
sub_lines = wrap_text(draw, "Un ciclo de 24 horas: mientras tú atiendes, descansas o desconectas, tu web sigue captando.", sub_font, W - 260)
sy = hy + 28
for line in sub_lines:
    bbox = draw.textbbox((0, 0), line, font=sub_font)
    lh = bbox[3] - bbox[1]
    centered_text(draw, W / 2, sy + lh / 2, line, sub_font, WHITE_60, anchor="mm")
    sy += lh + 10

# ---- Central 24h clock diagram ----
cx, cy = W / 2, 1160
R = 430

# orbit ring (dashed)
ring_layer = Image.new("RGBA", (W, H), (0, 0, 0, 0))
ring_draw = ImageDraw.Draw(ring_layer, "RGBA")
n_dashes = 90
for i in range(n_dashes):
    a0 = (i / n_dashes) * 2 * math.pi
    a1 = a0 + (2 * math.pi / n_dashes) * 0.55
    x0, y0 = cx + R * math.cos(a0), cy + R * math.sin(a0)
    x1, y1 = cx + R * math.cos(a1), cy + R * math.sin(a1)
    ring_draw.line([(x0, y0), (x1, y1)], fill=WHITE_35, width=4)
img = Image.alpha_composite(img, ring_layer)
draw = ImageDraw.Draw(img, "RGBA")

# center hub: browser/website icon card
hub_r = 175
draw.ellipse([cx - hub_r, cy - hub_r, cx + hub_r, cy + hub_r], fill=NAVY_CARD, outline=WHITE_15, width=3)
# little browser mockup inside hub
bw, bh = 210, 150
bx0, by0 = cx - bw / 2, cy - bh / 2 + 8
draw.rounded_rectangle([bx0, by0, bx0 + bw, by0 + bh], radius=14, fill=WHITE, outline=None)
draw.rounded_rectangle([bx0, by0, bx0 + bw, by0 + 30], radius=14, fill=(230, 233, 240, 255))
for i, dx in enumerate([16, 34, 52]):
    dot_c = ORANGE if i == 0 else (200, 205, 215, 255)
    draw.ellipse([bx0 + dx - 5, by0 + 15 - 5, bx0 + dx + 5, by0 + 15 + 5], fill=dot_c)
draw.rounded_rectangle([bx0 + 16, by0 + 46, bx0 + bw - 16, by0 + 56], radius=4, fill=(210, 214, 224, 255))
draw.rounded_rectangle([bx0 + 16, by0 + 66, bx0 + bw - 60, by0 + 76], radius=4, fill=(225, 228, 236, 255))
draw.rounded_rectangle([bx0 + 16, by0 + 96, bx0 + 80, by0 + 122], radius=8, fill=ORANGE)
cta_font = ImageFont.truetype(BOLD, 15)
centered_text(draw, bx0 + 48, by0 + 109, "WEB", cta_font, WHITE, anchor="mm")
hub_label_font = ImageFont.truetype(BOLD, 22)
centered_text(draw, cx, cy + hub_r - 34, "SIEMPRE ACTIVA", hub_label_font, ORANGE, anchor="mm")

# 4 moment nodes around the ring, at N, E, S, W
moments = [
    (-math.pi / 2, "22:00", "Cierras y desconectas", ORANGE),
    (0, "23:40", "Alguien te busca en Google", (255, 255, 255, 255)),
    (math.pi / 2, "07:15", "Tienes un aviso nuevo", (255, 255, 255, 255)),
    (math.pi, "09:00", "Le llamas tú, con el terreno ganado", ORANGE),
]

node_r = 96
time_font = ImageFont.truetype(BOLD, 34)
label_font = ImageFont.truetype(REG, 26)

for angle, time_label, desc, accent in moments:
    nx, ny = cx + R * math.cos(angle), cy + R * math.sin(angle)
    draw.ellipse([nx - node_r, ny - node_r, nx + node_r, ny + node_r], fill=NAVY_CARD, outline=accent, width=5)
    centered_text(draw, nx, ny - 8, time_label, time_font, WHITE, anchor="mm")
    small_dot = accent
    draw.ellipse([nx - 6, ny + 26, nx + 6, ny + 38], fill=small_dot)

    # description text placed outside the node, oriented by position
    desc_lines = wrap_text(draw, desc, label_font, 300)
    if angle == -math.pi / 2:  # top
        ty = ny - node_r - 26
        for line in reversed(desc_lines):
            bbox = draw.textbbox((0, 0), line, font=label_font)
            lh = bbox[3] - bbox[1]
            centered_text(draw, nx, ty - lh / 2, line, label_font, WHITE_85, anchor="mm")
            ty -= lh + 8
    elif angle == math.pi / 2:  # bottom
        ty = ny + node_r + 26
        for line in desc_lines:
            bbox = draw.textbbox((0, 0), line, font=label_font)
            lh = bbox[3] - bbox[1]
            centered_text(draw, nx, ty + lh / 2, line, label_font, WHITE_85, anchor="mm")
            ty += lh + 8
    elif angle == 0:  # right
        tx = nx + node_r + 26
        ty = ny - (len(desc_lines) - 1) * 18
        for line in desc_lines:
            bbox = draw.textbbox((0, 0), line, font=label_font)
            lh = bbox[3] - bbox[1]
            draw.text((tx, ty), line, font=label_font, fill=WHITE_85, anchor="lm")
            ty += lh + 8
    else:  # left
        tx = nx - node_r - 26
        ty = ny - (len(desc_lines) - 1) * 18
        for line in desc_lines:
            bbox = draw.textbbox((0, 0), line, font=label_font)
            lh = bbox[3] - bbox[1]
            draw.text((tx, ty), line, font=label_font, fill=WHITE_85, anchor="rm")
            ty += lh + 8

# connecting spokes (thin) from hub to each node
spoke_layer = Image.new("RGBA", (W, H), (0, 0, 0, 0))
spoke_draw = ImageDraw.Draw(spoke_layer, "RGBA")
for angle, *_ in moments:
    nx, ny = cx + R * math.cos(angle), cy + R * math.sin(angle)
    ux, uy = math.cos(angle), math.sin(angle)
    sx0, sy0 = cx + (hub_r + 6) * ux, cy + (hub_r + 6) * uy
    sx1, sy1 = nx - (node_r + 6) * ux, ny - (node_r + 6) * uy
    spoke_draw.line([(sx0, sy0), (sx1, sy1)], fill=WHITE_15, width=3)
img = Image.alpha_composite(img, spoke_layer)
draw = ImageDraw.Draw(img, "RGBA")

# ---- Bottom tagline card ----
card_y0 = cy + R + 210
card_h = 190
card_margin = 96
draw.rounded_rectangle([card_margin, card_y0, W - card_margin, card_y0 + card_h], radius=24, fill=(255, 255, 255, 14), outline=WHITE_15, width=2)

tag_font = ImageFont.truetype(BOLD, 40)
centered_text(draw, W / 2, card_y0 + 60, "Mientras duermes, tu web sigue trabajando.", tag_font, WHITE, anchor="mm")
tag2_font = ImageFont.truetype(REG, 27)
centered_text(draw, W / 2, card_y0 + 118, "Una web bien diseñada capta, informa y convierte 24/7 — sin turnos, sin descansos.", tag2_font, WHITE_60, anchor="mm")

# ---- Footer ----
fy = H - 90
draw.line([(96, fy - 34), (W - 96, fy - 34)], fill=WHITE_15, width=2)
footer_font = ImageFont.truetype(REG, 28)
draw.text((96, fy), "mktweb360.com", font=footer_font, fill=WHITE_60, anchor="lm")
tel = "622 74 89 87"
bbox = draw.textbbox((0, 0), tel, font=footer_font)
draw.text((W - 96, fy), tel, font=footer_font, fill=WHITE_60, anchor="rm")

img = img.convert("RGB")
img = img.resize((760, 1131), Image.LANCZOS)
out_path = "/home/mktadmin/mktweb360-web/public/imagen-web-trabaja-para-el-autonomo.webp"
img.save(out_path, "WEBP", quality=90)
print("Saved", out_path)
