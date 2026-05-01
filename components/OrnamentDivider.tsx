type Props = {
  className?: string;
};

/** Decorative diamond-and-rule divider used between sections. */
export function OrnamentDivider({ className }: Props) {
  return (
    <div
      role="presentation"
      className={`flex items-center justify-center gap-3 text-foreground/60 ${className ?? ""}`}
    >
      <span className="h-px w-16 bg-current" aria-hidden />
      <svg
        width="22"
        height="22"
        viewBox="0 0 22 22"
        fill="none"
        aria-hidden
        className="text-primary"
      >
        <path d="M11 1l3 7 7 3-7 3-3 7-3-7-7-3 7-3z" fill="currentColor" />
      </svg>
      <span className="h-px w-16 bg-current" aria-hidden />
    </div>
  );
}
