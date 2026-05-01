"use client";

import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";
import { InstagramIcon } from "./icons/InstagramIcon";
import { Star5pt, Sparkle, Swallow } from "./icons/Ornaments";

const TITLE = "TE TATUA";

export function Hero() {
  return (
    <header className="relative isolate overflow-hidden border-b-2 border-foreground/90">
      {/* Decorative background ornaments — a flash-sheet wall feel */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-linear-to-b from-background via-background to-background/95" />

        {/* Scattered stars at low opacity */}
        <Star5pt
          inset={false}
          className="absolute left-[6%] top-[14%] h-10 w-10 text-primary/20 sm:h-16 sm:w-16"
        />
        <Star5pt
          inset={false}
          className="absolute right-[8%] top-[20%] h-8 w-8 text-foreground/15 sm:h-12 sm:w-12"
        />
        <Star5pt
          inset={false}
          className="absolute left-[14%] bottom-[18%] h-6 w-6 text-primary/15 sm:h-10 sm:w-10"
        />
        <Star5pt
          inset={false}
          className="absolute right-[12%] bottom-[10%] h-12 w-12 text-foreground/15 sm:h-20 sm:w-20"
        />

        <Sparkle className="absolute left-[28%] top-[10%] h-4 w-4 text-foreground/25" />
        <Sparkle className="absolute right-[26%] top-[50%] h-5 w-5 text-primary/35" />
        <Sparkle className="absolute left-[40%] bottom-[14%] h-3 w-3 text-foreground/30" />

        <Swallow className="absolute left-[3%] top-[44%] h-8 w-16 text-foreground/15 sm:h-10 sm:w-20" />
        <Swallow className="absolute right-[3%] top-[68%] h-8 w-16 text-foreground/15 transform-[scaleX(-1)] sm:h-10 sm:w-20" />
      </div>

      {/* Top bar */}
      <div className="relative mx-auto flex max-w-6xl items-center justify-between px-4 pt-6 sm:px-8">
        <div className="flex items-center gap-2 font-typewriter text-[10px] uppercase tracking-[0.3em] text-muted-foreground sm:text-xs">
          <span className="inline-block h-1.5 w-1.5 rounded-full bg-primary" />
          est. brasília · df
        </div>
        <ThemeToggle />
      </div>

      {/* Main hero */}
      <div className="relative mx-auto flex max-w-6xl flex-col items-center px-4 pb-24 pt-20 text-center sm:px-8 sm:pt-28">
        {/* Pre-title chip */}
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="flex items-center gap-3 font-typewriter text-[10px] uppercase tracking-[0.5em] text-primary sm:text-xs"
        >
          <Sparkle className="h-3 w-3 text-primary" />
          tatuagem tradicional
          <Sparkle className="h-3 w-3 text-primary" />
        </motion.div>

        {/* Big title with flanking rotating stars */}
        <div className="relative mt-6 flex w-full items-center justify-center gap-3 sm:gap-5">
          <motion.div
            initial={{ opacity: 0, scale: 0, rotate: -180 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1.0, delay: 0.4, ease: "easeOut" }}
            className="hidden shrink-0 sm:block"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
            >
              <Star5pt className="h-10 w-10 text-primary sm:h-12 sm:w-12 lg:h-14 lg:w-14" />
            </motion.div>
          </motion.div>

          <h1 className="select-none whitespace-nowrap font-blackletter text-[clamp(3rem,12vw,8rem)] leading-[0.85]">
            {TITLE.split("").map((ch, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 30, rotate: -4 }}
                animate={{ opacity: 1, y: 0, rotate: 0 }}
                transition={{
                  delay: 0.08 * i,
                  duration: 0.55,
                  type: "spring",
                  stiffness: 140,
                  damping: 14,
                }}
                className="ink-title hero-shimmer inline-block"
              >
                {ch === " " ? " " : ch}
              </motion.span>
            ))}
          </h1>

          <motion.div
            initial={{ opacity: 0, scale: 0, rotate: 180 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1.0, delay: 0.5, ease: "easeOut" }}
            className="hidden shrink-0 sm:block"
          >
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
            >
              <Star5pt className="h-10 w-10 text-primary sm:h-12 sm:w-12 lg:h-14 lg:w-14" />
            </motion.div>
          </motion.div>
        </div>

        {/* Hand-drawn underline */}
        <motion.svg
          viewBox="0 0 600 28"
          className="mt-4 h-7 w-[min(82%,560px)] text-primary"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.0, duration: 0.4 }}
          aria-hidden
        >
          <motion.path
            d="M10 16 L120 16 M170 16 Q300 -2 430 16 L590 16"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ delay: 1.0, duration: 1.2, ease: "easeInOut" }}
          />
          <motion.path
            d="M138 16 L160 6 L160 26 Z"
            fill="currentColor"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 2.1, duration: 0.3 }}
            style={{ transformOrigin: "150px 16px" }}
          />
        </motion.svg>

        {/* Banner ribbon "BRASÍLIA · DF" — unfurls */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ delay: 1.6, duration: 0.7, ease: "easeOut" }}
          className="mt-8 origin-center"
        >
          <svg
            viewBox="0 0 600 84"
            className="h-12 w-[min(86%,460px)] text-primary"
            role="img"
            aria-label="Brasília DF"
          >
            <path
              d="M30 20 L60 20 L60 64 L30 64 Q10 64 10 80 Q10 64 30 64 L30 20 Q10 20 10 4 Q10 20 30 20 Z"
              fill="currentColor"
              opacity="0.85"
            />
            <path
              d="M570 20 L540 20 L540 64 L570 64 Q590 64 590 80 Q590 64 570 64 L570 20 Q590 20 590 4 Q590 20 570 20 Z"
              fill="currentColor"
              opacity="0.85"
            />
            <path d="M60 14 L540 14 L540 70 L60 70 Z" fill="currentColor" />
            <text
              x="300"
              y="50"
              textAnchor="middle"
              fontFamily="var(--font-typewriter), monospace"
              fontSize="22"
              letterSpacing="10"
              fill="var(--background)"
              fontWeight="700"
            >
              BRASÍLIA · DF
            </text>
          </svg>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.0, duration: 0.5 }}
          className="mt-8 max-w-xl font-serif text-xl italic text-foreground/85 sm:text-2xl"
        >
          &ldquo;Bold will hold.&rdquo;
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.2, duration: 0.5 }}
          className="mt-3 max-w-md font-typewriter text-xs uppercase tracking-[0.3em] text-muted-foreground"
        >
          linha pesada · preto fechado · cor cravada
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.4, duration: 0.5 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-3"
        >
          <a
            href="https://instagram.com/umatteus"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 rounded-sm bg-primary px-7 py-3.5 font-typewriter text-sm uppercase tracking-[0.18em] text-primary-foreground shadow-[0_4px_0_0_var(--ink)] transition hover:-translate-y-0.5 hover:shadow-[0_6px_0_0_var(--ink)] active:translate-y-0 active:shadow-[0_2px_0_0_var(--ink)]"
          >
            <InstagramIcon className="h-4 w-4 transition group-hover:rotate-6" />
            @umatteus
          </a>
          <a
            href="#agendamento"
            className="inline-flex items-center gap-2 rounded-sm border-2 border-foreground/85 bg-background px-7 py-3.5 font-typewriter text-sm uppercase tracking-[0.18em] text-foreground transition hover:bg-foreground hover:text-background"
          >
            <MapPin className="h-4 w-4" />
            Agendar
          </a>
        </motion.div>
      </div>
    </header>
  );
}
