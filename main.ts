// news-image-20261120 — the world's news of Friday 20 November 2026,
// summed up in one image.
//
// The image is entry.png, sitting next to this file: a 1024x1024 PNG
// drawn in code (PIL + DejaVu), a newspaper front page with six stories
// from six regions. This program only ferries that file to the output
// directory. It needs no network, reads nothing else, and writes the
// same bytes on every run.
//
// Run it outside the grader with:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const PNG_MAGIC = [0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a];
const JPEG_MAGIC = [0xff, 0xd8, 0xff];

function startsWith(bytes: Buffer, magic: number[]): boolean {
  if (bytes.length < magic.length) return false;
  return magic.every((byte, i) => bytes[i] === byte);
}

const here = dirname(fileURLToPath(import.meta.url));
const image = readFileSync(join(here, "entry.png"));

// The gate only accepts a whole PNG or JPEG, so refuse to copy a file
// whose first bytes are neither instead of failing silently downstream.
if (!startsWith(image, PNG_MAGIC) && !startsWith(image, JPEG_MAGIC)) {
  throw new Error("entry.png is neither a PNG nor a JPEG (bad magic bytes)");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
const outPath = join(outDir, "entry.png");
writeFileSync(outPath, image);

// Write-verify: re-read the output and refuse to finish silently if
// the copy came out different from the source image.
const written = readFileSync(outPath);
if (!written.equals(image)) {
  throw new Error("entry.png copy failed verification: output bytes differ from source");
}
