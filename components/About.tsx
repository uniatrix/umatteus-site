import { Star5pt } from "./icons/Ornaments";

export function About() {
  return (
    <section className="mx-auto max-w-5xl px-4 sm:px-8">
      <div className="grid gap-12 sm:grid-cols-[1fr_2fr] sm:items-start sm:gap-16">
        <div className="flex flex-col items-start gap-4">
          <Star5pt className="h-10 w-10 text-primary" />
          <span className="font-typewriter text-[10px] uppercase tracking-[0.4em] text-muted-foreground">
            ✦ o trabalho ✦
          </span>
        </div>

        <div className="space-y-6 text-foreground/90">
          <h2 className="font-blackletter text-5xl leading-[0.95] text-foreground sm:text-6xl">
            Old school. Pra durar.
          </h2>

          <p className="font-serif text-xl leading-relaxed sm:text-2xl">
            Tatuagem tradicional americana, do jeito antigo &mdash; escola
            que atravessou um século e nunca perdeu a forma.
          </p>

          <p className="text-lg leading-relaxed text-foreground/80">
            Linha pesada, preto fechado, cor cravada. Paleta clássica:
            vermelho-vermelhão, verde kelly, amarelo cromo. Tinta que cicatriza
            limpa e envelhece junto: aos setenta a peça ainda tem desenho.
          </p>

          <p className="text-lg leading-relaxed text-foreground/80">
            Atendo flash autoral do meu repertório e ideias custom dentro do
            estilo. Agendamento por DM no Instagram. Sinal pra fechar agenda &mdash;
            abate do valor final.
          </p>

          <ul className="grid grid-cols-2 gap-x-6 gap-y-2 pt-2 font-typewriter text-[11px] uppercase tracking-[0.18em] text-foreground/70">
            <li>· panteras &amp; daggers</li>
            <li>· hannya &amp; oni</li>
            <li>· rosas &amp; serpentes</li>
            <li>· kois &amp; ondas</li>
            <li>· skulls &amp; reaper</li>
            <li>· flash custom</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
