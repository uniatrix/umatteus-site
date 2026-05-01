import fs from "node:fs";
import path from "node:path";
import { seededShuffle } from "./utils";

export type GalleryItem = {
  src: string;
  alt: string;
  /** stable display number (#01..#NN) */
  index: number;
};

const GALLERY_DIR = path.join(process.cwd(), "public", "gallery");

/** How many pieces to show on the page — curated subset, not the whole archive. */
const DISPLAY_COUNT = 24;

/**
 * Build-time read of /public/gallery. Runs in Server Components only.
 * Returns a deterministic-shuffled subset (DISPLAY_COUNT items) so the page
 * is stable across reloads but doesn't reveal Instagram chronological order.
 */
export function getGallery(): GalleryItem[] {
  const files = fs
    .readdirSync(GALLERY_DIR)
    .filter((f) => /\.(jpe?g|png|webp)$/i.test(f))
    .sort();

  const shuffled = seededShuffle(files, 7).slice(0, DISPLAY_COUNT);

  return shuffled.map((file, i) => ({
    src: `/gallery/${file}`,
    alt: `Flash tradicional por umatteus — peça ${i + 1}`,
    index: i + 1,
  }));
}
