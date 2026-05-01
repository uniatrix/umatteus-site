import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Gallery } from "@/components/Gallery";
import { Booking } from "@/components/Booking";
import { Footer } from "@/components/Footer";
import { OrnamentDivider } from "@/components/OrnamentDivider";
import { getGallery } from "@/lib/gallery";

export default function Home() {
  const items = getGallery();
  const featured = items.slice(0, 6).map(({ src, alt }) => ({ src, alt }));

  return (
    <div className="relative">
      <Hero featured={featured} />

      <main className="space-y-24 py-24 sm:space-y-28 sm:py-28">
        <About />

        <OrnamentDivider />

        <section className="mx-auto max-w-7xl px-4 sm:px-8">
          <div className="mb-10 flex flex-col items-center text-center">
            <span className="font-typewriter text-[11px] uppercase tracking-[0.4em] text-primary">
              ✦ Flash &amp; Trabalhos ✦
            </span>
            <h2 className="mt-3 font-blackletter text-5xl text-foreground sm:text-6xl">
              Galeria
            </h2>
            <p className="mt-4 max-w-xl font-serif text-lg text-foreground/80">
              {items.length} peças. Toque para ver em tela cheia. Setas do
              teclado para navegar.
            </p>
          </div>

          <Gallery items={items} />
        </section>

        <OrnamentDivider />

        <Booking />
      </main>

      <Footer />
    </div>
  );
}
