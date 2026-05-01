import { InstagramIcon } from "./icons/InstagramIcon";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-border bg-background/50">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 py-10 sm:flex-row sm:px-8">
        <div className="text-center sm:text-left">
          <div className="font-blackletter text-2xl text-foreground">TE TATUA</div>
          <div className="font-typewriter text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
            Brasília · DF · {new Date().getFullYear()}
          </div>
        </div>
        <a
          href="https://instagram.com/umatteus"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 font-typewriter text-xs uppercase tracking-[0.2em] text-foreground/80 transition hover:text-primary"
        >
          <InstagramIcon className="h-4 w-4" />
          @umatteus
        </a>
      </div>
    </footer>
  );
}
