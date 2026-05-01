"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { MapPin } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";
import { InstagramIcon } from "./icons/InstagramIcon";

type Props = {
  featured: { src: string; alt: string }[];
};

const TITLE = "TE TATUA";

export function Hero({ featured }: Props) {
  return (
    <header className="relative overflow-hidden border-b border-border">
      <div className="absolute inset-0 -z-10 grid grid-cols-3 gap-1 opacity-[0.18] dark:opacity-[0.22]">
        {featured.slice(0, 6).map((img, i) => (
          <div key={img.src} className={`relative ${i % 2 === 0 ? "translate-y-2" : "-translate-y-2"}`}>
            <Image
              src={img.src}
              alt=""
              fill
              sizes="33vw"
              className="object-cover grayscale-[0.3]"
              priority={i < 3}
            />
          </div>
        ))}
        <div className="absolute inset-0 bg-linear-to-b from-background/40 via-background/85 to-background" />
      </div>

      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 pt-6 sm:px-8">
        <span className="font-typewriter text-xs uppercase tracking-[0.25em] text-muted-foreground">
          est. brasília/df
        </span>
        <ThemeToggle />
      </div>

      <div className="mx-auto flex max-w-6xl flex-col items-center px-4 pb-20 pt-16 text-center sm:px-8 sm:pt-24">
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="font-typewriter text-[11px] uppercase tracking-[0.4em] text-primary"
        >
          ✦ Tatuagem Tradicional ✦
        </motion.div>

        <h1 className="mt-6 select-none font-blackletter text-[clamp(3.5rem,14vw,10rem)] leading-[0.85]">
          {TITLE.split("").map((ch, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 24, rotate: -3 }}
              animate={{ opacity: 1, y: 0, rotate: 0 }}
              transition={{
                delay: 0.08 * i,
                duration: 0.55,
                type: "spring",
                stiffness: 140,
                damping: 14,
              }}
              className="ink-title inline-block"
            >
              {ch === " " ? " " : ch}
            </motion.span>
          ))}
        </h1>

        <motion.svg
          viewBox="0 0 600 24"
          className="mt-3 h-6 w-[min(80%,560px)] text-primary"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.0, duration: 0.4 }}
          aria-hidden
        >
          <motion.path
            d="M10 12 L120 12 M170 12 Q300 -2 430 12 L590 12"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ delay: 1.0, duration: 1.2, ease: "easeInOut" }}
          />
          <motion.path
            d="M140 12 L160 4 L160 20 Z"
            fill="currentColor"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.1, duration: 0.3 }}
          />
        </motion.svg>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6, duration: 0.5 }}
          className="mt-6 max-w-xl font-serif text-lg text-foreground/85 sm:text-xl"
        >
          Old school clássica. Traço pesado, cor sólida, cicatrização limpa.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.9, duration: 0.5 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-3"
        >
          <a
            href="https://instagram.com/umatteus"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-sm bg-primary px-6 py-3 font-typewriter text-sm uppercase tracking-[0.18em] text-primary-foreground shadow-[0_4px_0_0_var(--ink)] transition hover:-translate-y-0.5 hover:shadow-[0_6px_0_0_var(--ink)] active:translate-y-0 active:shadow-[0_2px_0_0_var(--ink)]"
          >
            <InstagramIcon className="h-4 w-4" />
            @umatteus
          </a>
          <a
            href="#agendamento"
            className="inline-flex items-center gap-2 rounded-sm border-2 border-foreground/80 bg-background px-6 py-3 font-typewriter text-sm uppercase tracking-[0.18em] text-foreground transition hover:bg-foreground hover:text-background"
          >
            <MapPin className="h-4 w-4" />
            Agendar
          </a>
        </motion.div>
      </div>
    </header>
  );
}
