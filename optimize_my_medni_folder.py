#!/usr/bin/env python3
"""
MEDNI Website Image Optimizer & Cleaner
Run this script inside your local MEDNI folder to automatically:
1. Remove the 55+ unused raw camera photos (such as image/New folder/DSC*.JPG) and 17 MS-Paint nav button images.
2. Compress and resize all required village photos down to lightweight web-ready JPEGs (<50 KB each).
"""
import os
import shutil
from PIL import Image

UNUSED_FILES = [
    "ang.jpg", "sc.jpg", "police.jpg", "bank.jpg", "mad.jpg", "tem.jpg", "mos.jpg", "places.jpg",
    "image/home1.jpg", "image/places.jpg", "image/agri.jpg", "image/photo.jpg", "image/per.jpg", "image/reach.jpg",
    "image/school.jpg", "image/madarasa.jpg", "image/temple.jpg", "image/mosque.jpg", "image/police.jpg",
    "image/DSC00818.JPG", "image/Photo-0351.jpg", "image/Photo-0352.jpg", "image/s1.JPG",
    "image/ss1.jpg", "image/ss3.jpg", "image/ss31.jpg", "image/ss5.jpg", "image/ss51.jpg",
    "image/sar.jpg", "image/men.jpg", "image/med.jpg", "image/medni2.jpg", "image/ma.jpg", "image/ma1.jpg",
    "image/g.jpg", "image/gg.jpg", "image/am1.jpg", "image/amit.jpg", "image/pramukh1.jpg"
]

def main():
    if os.path.exists("image/New folder"):
        shutil.rmtree("image/New folder")
        print("Removed unused raw camera folder: image/New folder/")
    for rel in UNUSED_FILES:
        if os.path.exists(rel):
            os.remove(rel)
            print("Removed unused/button image:", rel)
    for folder in ["image", "css"]:
        if not os.path.exists(folder):
            continue
        for fname in os.listdir(folder):
            if fname.lower().endswith((".jpg", ".jpeg", ".png")):
                fpath = os.path.join(folder, fname)
                before_kb = os.path.getsize(fpath) / 1024
                if before_kb > 80:
                    im = Image.open(fpath).convert("RGB")
                    im.thumbnail((800, 800), Image.Resampling.LANCZOS)
                    im.save(fpath, "JPEG", quality=70, optimize=True, progressive=True)
                    after_kb = os.path.getsize(fpath) / 1024
                    print(f"Compressed {fpath}: {before_kb:.1f} KB -> {after_kb:.1f} KB")

if __name__ == "__main__":
    main()
