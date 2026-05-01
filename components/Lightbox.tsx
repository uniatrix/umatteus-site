"use client";

import { Dialog } from "@base-ui/react/dialog";
import Image from "next/image";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { useCallback, useEffect } from "react";
import type { GalleryItem } from "@/lib/gallery";

type Props = {
  items: GalleryItem[];
  openIndex: number | null;
  onOpenChange: (open: boolean) => void;
  onNavigate: (newIndex: number) => void;
};

export function Lightbox({ items, openIndex, onOpenChange, onNavigate }: Props) {
  const open = openIndex !== null;
  const item = openIndex !== null ? items[openIndex] : null;

  const next = useCallback(() => {
    if (openIndex === null) return;
    onNavigate((openIndex + 1) % items.length);
  }, [openIndex, items.length, onNavigate]);

  const prev = useCallback(() => {
    if (openIndex === null) return;
    onNavigate((openIndex - 1 + items.length) % items.length);
  }, [openIndex, items.length, onNavigate]);

  useEffect(() => {
    if (!open) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") next();
      else if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [open, next, prev]);

  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        <Dialog.Backdrop className="fixed inset-0 z-50 bg-background/85 backdrop-blur-sm data-[ending-style]:opacity-0 data-[starting-style]:opacity-0 transition-opacity duration-200" />
        <Dialog.Popup className="fixed inset-0 z-50 flex items-center justify-center p-4 data-[ending-style]:opacity-0 data-[starting-style]:opacity-0 transition-opacity duration-200">
          {item && (
            <div className="relative flex max-h-[90vh] w-full max-w-5xl flex-col items-center">
              <Dialog.Title className="sr-only">
                Peça #{String(item.index).padStart(2, "0")}
              </Dialog.Title>
              <div className="relative h-[80vh] w-full">
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes="100vw"
                  className="object-contain"
                  priority
                />
              </div>
              <div className="mt-3 flex items-center gap-3 font-typewriter text-xs uppercase tracking-[0.2em] text-foreground/80">
                #{String(item.index).padStart(2, "0")}
                <span aria-hidden>·</span>
                <span>
                  {openIndex! + 1} / {items.length}
                </span>
              </div>

              <button
                type="button"
                onClick={prev}
                aria-label="Peça anterior"
                className="absolute left-2 top-1/2 -translate-y-1/2 inline-flex h-11 w-11 items-center justify-center rounded-full border border-border bg-card/80 text-foreground transition hover:bg-card hover:text-primary"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                type="button"
                onClick={next}
                aria-label="Próxima peça"
                className="absolute right-2 top-1/2 -translate-y-1/2 inline-flex h-11 w-11 items-center justify-center rounded-full border border-border bg-card/80 text-foreground transition hover:bg-card hover:text-primary"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
              <Dialog.Close
                aria-label="Fechar"
                className="absolute right-2 top-2 inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card/80 text-foreground transition hover:bg-card hover:text-primary"
              >
                <X className="h-4 w-4" />
              </Dialog.Close>
            </div>
          )}
        </Dialog.Popup>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
