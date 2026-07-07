import os
import sys
from PIL import Image

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from gen_og_images_batch2 import IMAGES

files = [i[0] for i in IMAGES]
allok = True
total = 0
for f in files:
    p = os.path.join("public", f)
    if not os.path.exists(p):
        print("%-52s MISSING" % f)
        allok = False
        continue
    im = Image.open(p)
    sz = os.path.getsize(p)
    total += 1
    ok = im.size == (1200, 630) and im.mode == "RGB" and im.format == "JPEG"
    allok = allok and ok
    print("%-52s %dx%d %s %6.1f KB %s" % (
        f, im.size[0], im.size[1], im.mode, sz / 1024, "OK" if ok else "FAIL"))
print("--- COUNT %d/26 --- %s" % (total, "ALL_OK" if allok and total == 26 else "PROBLEM"))
