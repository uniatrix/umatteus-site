export function About() {
  return (
    <section className="mx-auto max-w-3xl px-4 sm:px-8">
      <div className="grid gap-10 sm:grid-cols-[auto_1fr] sm:items-start sm:gap-12">
        <div className="font-typewriter text-xs uppercase tracking-[0.25em] text-muted-foreground sm:rotate-[-90deg] sm:translate-y-12 sm:whitespace-nowrap">
          ✦ Sobre o artista ✦
        </div>
        <div className="space-y-5 text-foreground/90">
          <h2 className="font-serif text-4xl leading-tight text-foreground sm:text-5xl">
            Tradicional, sem firula.
          </h2>
          <p className="text-lg leading-relaxed">
            Sou Matteus, tatuador em Brasília. Trabalho exclusivamente com{" "}
            <strong className="font-semibold text-primary">tatuagem tradicional</strong>{" "}
            — escola americana clássica e flashes autorais com pitada de Japonês
            e pop. Linha grossa, preto fechado, paleta cravada: vermelho-vermelhão,
            verde kelly, amarelo cromo. Peça que envelhece bem.
          </p>
          <p className="text-lg leading-relaxed">
            Atendimento por agendamento, com sinal. Atendo flash do meu repertório
            ou trabalho ideias custom dentro do estilo.
          </p>
          <ul className="grid grid-cols-2 gap-x-6 gap-y-2 pt-2 font-typewriter text-xs uppercase tracking-[0.18em] text-foreground/70">
            <li>· panteras &amp; daggers</li>
            <li>· hannya &amp; oni</li>
            <li>· rosas &amp; serpentes</li>
            <li>· kois &amp; ondas</li>
            <li>· skulls &amp; reaper</li>
            <li>· flash pop &amp; custom</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
