from PIL import Image, ImageDraw, ImageFont, ImageFilter

W, H = 1520, 2262  # 2x supersample of 760x1131
NAVY = (15, 28, 46, 255)
NAVY2 = (24, 42, 68, 255)
NAVY_CARD = (22, 37, 58, 255)
ORANGE = (249, 115, 22, 255)
WHITE = (255, 255, 255, 255)
WHITE_85 = (255, 255, 255, 217)
WHITE_60 = (255, 255, 255, 153)
WHITE_15 = (255, 255, 255, 38)

BOLD = "/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf"
REG = "/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf"

MARGIN = 100
SAFE_W = W - 2 * MARGIN


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


def alpha_fill_rect(base_img, box, radius, rgba):
    """Draw a translucent rounded rect correctly by compositing on its own layer
    (PIL's ImageDraw does not alpha-blend plain shape fills)."""
    layer = Image.new("RGBA", base_img.size, (0, 0, 0, 0))
    d = ImageDraw.Draw(layer, "RGBA")
    d.rounded_rectangle(box, radius=radius, fill=rgba)
    return Image.alpha_composite(base_img, layer)


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

# soft glows
glow = Image.new("RGBA", (W, H), (0, 0, 0, 0))
gdraw = ImageDraw.Draw(glow, "RGBA")
gdraw.ellipse([W - 650, -300, W + 350, 600], fill=(249, 115, 22, 45))
gdraw.ellipse([-450, H - 700, 500, H + 200], fill=(100, 85, 185, 40))
glow = glow.filter(ImageFilter.GaussianBlur(150))
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
centered_text(draw, W / 2, 240, "TU WEB, TU MEJOR EMPLEADO", eyebrow_font, ORANGE, anchor="mm")

headline_font = ImageFont.truetype(BOLD, 58)
lines = wrap_text(draw, "Trabaja para ti aunque tú no puedas", headline_font, SAFE_W)
hy = 288
for line in lines:
    bbox = draw.textbbox((0, 0), line, font=headline_font)
    lh = bbox[3] - bbox[1]
    centered_text(draw, W / 2, hy + lh / 2, line, headline_font, WHITE, anchor="mm")
    hy += lh + 14

sub_font = ImageFont.truetype(REG, 28)
sub_lines = wrap_text(draw, "Un ciclo de 24 horas: mientras tú atiendes, descansas o desconectas, tu web sigue captando.", sub_font, SAFE_W - 60)
sy = hy + 22
for line in sub_lines:
    bbox = draw.textbbox((0, 0), line, font=sub_font)
    lh = bbox[3] - bbox[1]
    centered_text(draw, W / 2, sy + lh / 2, line, sub_font, WHITE_60, anchor="mm")
    sy += lh + 8

# ---- Vertical timeline ----
timeline_top = sy + 60
timeline_bottom = H - 430
line_x = W / 2

# vertical dashed line
seg_h = 22
gap_h = 14
y = timeline_top
while y < timeline_bottom:
    y2 = min(y + seg_h, timeline_bottom)
    draw.line([(line_x, y), (line_x, y2)], fill=WHITE_15, width=4)
    y += seg_h + gap_h

moments = [
    ("22:00", "Cierras la consulta y desconectas", ORANGE, "left"),
    ("23:40", "Alguien te busca en Google", WHITE, "right"),
    ("07:15", "Tienes un nuevo aviso: solicitud recibida", WHITE, "left"),
    ("09:00", "Le llamas tú, con el terreno ya ganado", ORANGE, "right"),
]

node_r = 62
time_font = ImageFont.truetype(BOLD, 34)
label_font = ImageFont.truetype(REG, 30)
text_col_w = (SAFE_W - 2 * (node_r + 40)) / 2 - 20

step = (timeline_bottom - timeline_top) / (len(moments) + 1)
for i, (time_label, desc, accent, side) in enumerate(moments):
    ny = timeline_top + step * (i + 1)
    # node circle on the center line
    draw.ellipse([line_x - node_r, ny - node_r, line_x + node_r, ny + node_r], fill=NAVY_CARD, outline=accent, width=5)
    centered_text(draw, line_x, ny, time_label, time_font, WHITE, anchor="mm")

    desc_lines = wrap_text(draw, desc, label_font, text_col_w)
    total_h = sum((draw.textbbox((0, 0), l, font=label_font)[3] - draw.textbbox((0, 0), l, font=label_font)[1]) + 10 for l in desc_lines) - 10
    ty = ny - total_h / 2
    if side == "left":
        tx = line_x - node_r - 40
        for l in desc_lines:
            bbox = draw.textbbox((0, 0), l, font=label_font)
            lh = bbox[3] - bbox[1]
            draw.text((tx, ty + lh / 2), l, font=label_font, fill=WHITE_85, anchor="rm")
            ty += lh + 10
    else:
        tx = line_x + node_r + 40
        for l in desc_lines:
            bbox = draw.textbbox((0, 0), l, font=label_font)
            lh = bbox[3] - bbox[1]
            draw.text((tx, ty + lh / 2), l, font=label_font, fill=WHITE_85, anchor="lm")
            ty += lh + 10

# small "SIEMPRE ACTIVA" badge just under the last node
badge_font = ImageFont.truetype(BOLD, 24)
centered_text(draw, line_x, timeline_bottom + 6, "● SIEMPRE ACTIVA", badge_font, ORANGE, anchor="mm")

# ---- Bottom tagline card (properly alpha-blended) ----
card_y0 = timeline_bottom + 70
card_h = 260
card_margin = 96
img = alpha_fill_rect(img, [card_margin, card_y0, W - card_margin, card_y0 + card_h], 24, (255, 255, 255, 20))
draw = ImageDraw.Draw(img, "RGBA")
draw.rounded_rectangle([card_margin, card_y0, W - card_margin, card_y0 + card_h], radius=24, outline=WHITE_15, width=2)

tag_font = ImageFont.truetype(BOLD, 40)
tag_lines = wrap_text(draw, "Mientras duermes, tu web sigue trabajando.", tag_font, SAFE_W - 100)
ty = card_y0 + 56
for line in tag_lines:
    bbox = draw.textbbox((0, 0), line, font=tag_font)
    lh = bbox[3] - bbox[1]
    centered_text(draw, W / 2, ty + lh / 2, line, tag_font, WHITE, anchor="mm")
    ty += lh + 14

tag2_font = ImageFont.truetype(REG, 27)
tag2_lines = wrap_text(draw, "Una web bien diseñada capta, informa y convierte 24/7 — sin turnos, sin descansos.", tag2_font, SAFE_W - 140)
ty += 12
for line in tag2_lines:
    bbox = draw.textbbox((0, 0), line, font=tag2_font)
    lh = bbox[3] - bbox[1]
    centered_text(draw, W / 2, ty + lh / 2, line, tag2_font, WHITE_60, anchor="mm")
    ty += lh + 8

# ---- Footer ----
fy = H - 90
draw.line([(96, fy - 34), (W - 96, fy - 34)], fill=WHITE_15, width=2)
footer_font = ImageFont.truetype(REG, 28)
draw.text((96, fy), "mktweb360.com", font=footer_font, fill=WHITE_60, anchor="lm")
tel = "622 74 89 87"
draw.text((W - 96, fy), tel, font=footer_font, fill=WHITE_60, anchor="rm")

img = img.convert("RGB")
img = img.resize((760, 1131), Image.LANCZOS)
out_path = "/home/mktadmin/mktweb360-web/public/imagen-web-trabaja-para-el-autonomo.webp"
img.save(out_path, "WEBP", quality=90)
print("Saved", out_path)
