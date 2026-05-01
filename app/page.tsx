import { Hero } from "@/components/Hero";
import { Marquee } from "@/components/Marquee";
import { About } from "@/components/About";
import { Gallery } from "@/components/Gallery";
import { QuoteSection } from "@/components/QuoteSection";
import { Booking } from "@/components/Booking";
import { Footer } from "@/components/Footer";
import { OrnamentDivider } from "@/components/OrnamentDivider";
import { Star5pt } from "@/components/icons/Ornaments";
import { getGallery } from "@/lib/gallery";

const MOTTOS = [
  "Bold will hold",
  "Old school",
  "Tradicional",
  "Brasília · DF",
  "Te tatua",
  "Feita pra durar",
];

export default function Home() {
  const items = getGallery();

  return (
    <div className="relative">
      <Hero />

      <Marquee items={MOTTOS} />

      <main className="space-y-24 py-24 sm:space-y-28 sm:py-28">
        <About />

        <OrnamentDivider />

        <section className="mx-auto max-w-7xl px-4 sm:px-8">
          <div className="mb-12 flex flex-col items-center text-center">
            <Star5pt className="h-8 w-8 text-primary" />
            <span className="mt-3 font-typewriter text-[10px] uppercase tracking-[0.45em] text-primary">
              flash &amp; trabalhos selecionados
            </span>
            <h2 className="mt-3 font-blackletter text-6xl text-foreground sm:text-7xl">
              Galeria
            </h2>
            <p className="mt-5 max-w-md font-serif text-lg italic text-foreground/80">
              Uma seleção do repertório. Toque para ver em tela cheia &mdash; setas do
              teclado para navegar.
            </p>
          </div>

          <Gallery items={items} />

          <div className="mt-12 text-center">
            <a
              href="https://instagram.com/umatteus"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-typewriter text-xs uppercase tracking-[0.25em] text-foreground/80 transition hover:text-primary"
            >
              ver tudo no instagram →
            </a>
          </div>
        </section>

        <OrnamentDivider />

        <QuoteSection />

        <OrnamentDivider />

        <Booking />
      </main>

      <Marquee items={MOTTOS} reverse />

      <Footer />
    </div>
  );
}
