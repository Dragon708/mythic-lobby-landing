import sharp from "sharp";
import pngToIco from "png-to-ico";
import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const SRC = path.join(ROOT, "public", "logo-horizontal-1024.png");
const BRAND = path.join(ROOT, "public", "brand");
const APP_DIR = path.join(ROOT, "src", "app");

// Matches CSS --background in globals.css
const BG = { r: 5, g: 7, b: 14, alpha: 1 };

const squares = [
  { name: "icon.png", size: 512 },
  { name: "icon-192.png", size: 192 },
  { name: "icon-512-maskable.png", size: 512, padding: 0.12 },
  { name: "apple-touch-icon.png", size: 180 },
  { name: "favicon-16.png", size: 16 },
  { name: "favicon-32.png", size: 32 },
  { name: "favicon-48.png", size: 48 },
];

async function makeSquare({ name, size, padding = 0 }) {
  const pad = Math.round(size * padding);
  const inner = size - pad * 2;
  const logo = await sharp(SRC)
    .resize(inner, inner, { fit: "contain", background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png()
    .toBuffer();

  await sharp({
    create: {
      width: size,
      height: size,
      channels: 4,
      background: BG,
    },
  })
    .composite([{ input: logo, gravity: "center" }])
    .png()
    .toFile(path.join(BRAND, name));
  console.log(`✓ ${name} ${size}x${size}`);
}

async function makeRect(name, width, height) {
  const logo = await sharp(SRC)
    .resize(Math.round(width * 0.62), Math.round(height * 0.82), {
      fit: "inside",
      background: { r: 0, g: 0, b: 0, alpha: 0 },
    })
    .png()
    .toBuffer();

  await sharp({
    create: { width, height, channels: 4, background: BG },
  })
    .composite([{ input: logo, gravity: "center" }])
    .png()
    .toFile(path.join(BRAND, name));
  console.log(`✓ ${name} ${width}x${height}`);
}

async function makeLogoBleed(name, width) {
  await sharp(SRC)
    .resize(width, null, { fit: "inside" })
    .png({ quality: 92, compressionLevel: 9 })
    .toFile(path.join(BRAND, name));
  console.log(`✓ ${name} width=${width}`);
}

async function main() {
  await fs.mkdir(BRAND, { recursive: true });

  for (const sq of squares) await makeSquare(sq);

  await makeRect("og-image.png", 1200, 630);
  await makeRect("og-image-square.png", 1080, 1080);
  await makeRect("banner.png", 1200, 600);
  await makeRect("social-preview.png", 1200, 630);

  await makeLogoBleed("logo.png", 1024);

  const icoBuf = await pngToIco([
    path.join(BRAND, "favicon-16.png"),
    path.join(BRAND, "favicon-32.png"),
    path.join(BRAND, "favicon-48.png"),
  ]);

  await fs.writeFile(path.join(ROOT, "public", "favicon.ico"), icoBuf);
  console.log("✓ public/favicon.ico");

  await fs.writeFile(path.join(APP_DIR, "favicon.ico"), icoBuf);
  console.log("✓ src/app/favicon.ico");
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
