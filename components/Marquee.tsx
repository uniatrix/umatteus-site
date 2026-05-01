import { Star5pt } from "./icons/Ornaments";

type Props = {
  items: string[];
  reverse?: boolean;
};

export function Marquee({ items, reverse = false }: Props) {
  // Repeat content twice so the loop is seamless.
  const content = (
    <div className="flex shrink-0 items-center gap-8 px-4 sm:gap-12">
      {items.map((item, i) => (
        <span key={i} className="flex items-center gap-8 sm:gap-12">
          <span className="font-blackletter text-3xl sm:text-4xl whitespace-nowrap">
            {item}
          </span>
          <Star5pt
            className="h-5 w-5 shrink-0 text-primary sm:h-6 sm:w-6"
            inset={false}
          />
        </span>
      ))}
    </div>
  );

  return (
    <div className="relative overflow-hidden border-y-2 border-foreground bg-foreground/95 py-4 text-background">
      <div
        className={`flex w-max animate-[marquee_42s_linear_infinite] items-center ${reverse ? "[animation-direction:reverse]" : ""}`}
      >
        {content}
        {content}
      </div>
    </div>
  );
}
