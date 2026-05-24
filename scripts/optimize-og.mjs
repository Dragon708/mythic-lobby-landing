import sharp from "sharp";
import { existsSync } from "node:fs";
import { resolve } from "node:path";

const SRC = resolve("public/brand/social-preview.png");
const OUT_JPG = resolve("public/brand/og-image.jpg");
const OUT_SQ = resolve("public/brand/og-image-square.jpg");

if (!existsSync(SRC)) {
  console.error("missing source:", SRC);
  process.exit(1);
}

// 1200x630 landscape JPEG, mozjpeg, quality 82 — ideal for OG / WhatsApp.
await sharp(SRC)
  .resize(1200, 630, { fit: "cover", position: "center" })
  .jpeg({ quality: 82, mozjpeg: true, progressive: true })
  .toFile(OUT_JPG);

// 1080x1080 square fallback some chat clients prefer.
await sharp(SRC)
  .resize(1080, 1080, { fit: "cover", position: "center" })
  .jpeg({ quality: 82, mozjpeg: true, progressive: true })
  .toFile(OUT_SQ);

console.log("written", OUT_JPG, OUT_SQ);
