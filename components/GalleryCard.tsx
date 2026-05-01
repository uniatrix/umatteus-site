"use client";

import Image from "next/image";
import { motion } from "framer-motion";

type Props = {
  src: string;
  alt: string;
  index: number;
  onOpen: () => void;
};

export function GalleryCard({ src, alt, index, onOpen }: Props) {
  return (
    <motion.button
      type="button"
      onClick={onOpen}
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      whileHover={{ y: -3, rotate: index % 2 === 0 ? -0.4 : 0.4 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="group relative block w-full overflow-hidden rounded-sm bg-card flash-frame"
      aria-label={`Abrir peça #${String(index).padStart(2, "0")}`}
    >
      <div className="relative aspect-4/5 w-full">
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
          className="object-cover transition duration-500 group-hover:scale-[1.03]"
        />
      </div>
      <div className="absolute left-2 top-2 flex items-center gap-1 rounded-sm bg-background/90 px-1.5 py-0.5 font-typewriter text-[10px] uppercase tracking-[0.18em] text-foreground/80 ring-1 ring-border">
        #{String(index).padStart(2, "0")}
      </div>
      <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-foreground/40 via-transparent to-transparent opacity-0 transition group-hover:opacity-100" />
    </motion.button>
  );
}
