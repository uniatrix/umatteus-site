import { MapPin, Clock } from "lucide-react";
import { InstagramIcon } from "./icons/InstagramIcon";
import { Star5pt } from "./icons/Ornaments";

export function Booking() {
  return (
    <section
      id="agendamento"
      className="mx-auto max-w-4xl px-4 sm:px-8"
    >
      <div className="relative rounded-sm border-2 border-foreground/90 bg-card/80 p-8 shadow-[6px_6px_0_0_var(--ink)] sm:p-12">
        {/* Banner-style title chip */}
        <div className="absolute -top-4 left-1/2 flex -translate-x-1/2 items-center gap-3 bg-background px-5">
          <Star5pt className="h-3 w-3 text-primary" inset={false} />
          <span className="font-typewriter text-[11px] uppercase tracking-[0.35em] text-foreground">
            Agendamento
          </span>
          <Star5pt className="h-3 w-3 text-primary" inset={false} />
        </div>

        <div className="grid gap-10 sm:grid-cols-2 sm:gap-14">
          <div className="space-y-5">
            <h2 className="font-blackletter text-5xl leading-none text-foreground sm:text-6xl">
              Reserve sua peça
            </h2>
            <p className="font-serif text-lg italic text-foreground/85">
              &ldquo;Foi feito pra durar.&rdquo;
            </p>
            <p className="text-base leading-relaxed text-foreground/80">
              Mande DM no Instagram com a referência (ou número da flash) +
              região do corpo + tamanho aproximado. Confirmação só com sinal.
            </p>
            <a
              href="https://instagram.com/umatteus"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-sm bg-primary px-7 py-3.5 font-typewriter text-sm uppercase tracking-[0.18em] text-primary-foreground shadow-[0_4px_0_0_var(--ink)] transition hover:-translate-y-0.5 hover:shadow-[0_6px_0_0_var(--ink)] active:translate-y-0 active:shadow-[0_2px_0_0_var(--ink)]"
            >
              <InstagramIcon className="h-4 w-4" />
              DM @umatteus
            </a>
          </div>

          <div className="space-y-5 font-typewriter text-sm uppercase tracking-[0.12em] text-foreground/85">
            <div className="flex items-start gap-3">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
              <div>
                <div className="text-foreground">Estúdio</div>
                <div className="normal-case tracking-normal text-muted-foreground">
                  Brasília · DF
                </div>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Clock className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
              <div>
                <div className="text-foreground">Sessões</div>
                <div className="normal-case tracking-normal text-muted-foreground">
                  Por agendamento &mdash; ter / sáb
                </div>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Star5pt className="mt-0.5 h-4 w-4 shrink-0 text-primary" inset={false} />
              <div>
                <div className="text-foreground">Sinal</div>
                <div className="normal-case tracking-normal text-muted-foreground">
                  30% pra reservar &mdash; abate do final
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
