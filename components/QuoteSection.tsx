"use client";

import { motion } from "framer-motion";
import { Star5pt, Swallow } from "./icons/Ornaments";

export function QuoteSection() {
  return (
    <section className="relative mx-auto max-w-5xl px-4 py-8 sm:px-8">
      <div className="relative flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="flex items-center justify-center gap-6 sm:gap-10"
        >
          <Swallow className="h-8 w-16 text-primary sm:h-10 sm:w-20 transform-[scaleX(-1)]" />
          <Star5pt className="h-7 w-7 shrink-0 text-primary sm:h-9 sm:w-9" />
          <Swallow className="h-8 w-16 text-primary sm:h-10 sm:w-20" />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
          className="ink-title mt-6 select-none font-blackletter text-[clamp(3rem,11vw,8rem)] leading-[0.85] text-foreground"
        >
          Bold will hold.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-8 max-w-2xl font-serif text-xl italic text-foreground/85 sm:text-2xl"
        >
          Linha pesada, preto fechado, cor cravada. Tinta que envelhece junto
          com você &mdash; aos setenta a peça ainda tem desenho.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.4, delay: 0.8 }}
          className="mt-10 font-typewriter text-[10px] uppercase tracking-[0.4em] text-muted-foreground"
        >
          ✦ tradicional ✦ desde sempre ✦ pra sempre ✦
        </motion.div>
      </div>
    </section>
  );
}
