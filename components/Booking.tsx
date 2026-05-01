import { MapPin, Clock } from "lucide-react";
import { InstagramIcon } from "./icons/InstagramIcon";

export function Booking() {
  return (
    <section
      id="agendamento"
      className="mx-auto max-w-4xl px-4 sm:px-8"
    >
      <div className="relative rounded-sm border border-border bg-card/70 p-8 sm:p-12 flash-frame">
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-background px-4 font-typewriter text-[11px] uppercase tracking-[0.3em] text-primary">
          ✦ Agendamento ✦
        </div>

        <div className="grid gap-10 sm:grid-cols-2 sm:gap-12">
          <div className="space-y-4">
            <h2 className="font-blackletter text-5xl leading-none text-foreground">
              Reserve sua peça
            </h2>
            <p className="font-serif text-lg text-foreground/80">
              Mande DM no Instagram com a referência (ou número da flash) +
              região do corpo + tamanho aproximado. Confirmação só com sinal.
            </p>
            <a
              href="https://instagram.com/umatteus"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-sm bg-primary px-6 py-3 font-typewriter text-sm uppercase tracking-[0.18em] text-primary-foreground shadow-[0_4px_0_0_var(--ink)] transition hover:-translate-y-0.5 hover:shadow-[0_6px_0_0_var(--ink)] active:translate-y-0 active:shadow-[0_2px_0_0_var(--ink)]"
            >
              <InstagramIcon className="h-4 w-4" />
              DM @umatteus
            </a>
          </div>

          <div className="space-y-5 font-typewriter text-sm uppercase tracking-[0.12em] text-foreground/80">
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
                  Por agendamento — terça a sábado
                </div>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="mt-0.5 inline-block h-4 w-4 rounded-full border border-primary text-center font-serif text-[10px] leading-3.5 text-primary">
                ✦
              </span>
              <div>
                <div className="text-foreground">Sinal</div>
                <div className="normal-case tracking-normal text-muted-foreground">
                  Reserva com 30% — abate do valor final
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
