"use client";

import { useState } from "react";
import { GalleryCard } from "./GalleryCard";
import { Lightbox } from "./Lightbox";
import type { GalleryItem } from "@/lib/gallery";

type Props = {
  items: GalleryItem[];
};

export function Gallery({ items }: Props) {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <>
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4">
        {items.map((item, i) => (
          <GalleryCard
            key={item.src}
            src={item.src}
            alt={item.alt}
            index={item.index}
            onOpen={() => setOpen(i)}
          />
        ))}
      </div>

      <Lightbox
        items={items}
        openIndex={open}
        onOpenChange={(o) => !o && setOpen(null)}
        onNavigate={setOpen}
      />
    </>
  );
}
