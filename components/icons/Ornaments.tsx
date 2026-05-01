import type { SVGProps } from "react";

/**
 * 5-point traditional tattoo "nautical" star — filled black with white
 * inset, classic flash sheet ornament.
 */
export function Star5pt({
  className,
  inset = true,
  ...props
}: SVGProps<SVGSVGElement> & { inset?: boolean }) {
  return (
    <svg
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden
      {...props}
    >
      <polygon
        points="50,4 61,38 96,38 68,59 79,93 50,72 21,93 32,59 4,38 39,38"
        fill="currentColor"
      />
      {inset && (
        <polygon
          points="50,18 56,38 76,38 60,50 66,70 50,58 34,70 40,50 24,38 44,38"
          fill="var(--background)"
        />
      )}
    </svg>
  );
}

/** Smooth swallow silhouette (sailor classic). */
export function Swallow({ className, ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 120 60"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden
      {...props}
    >
      <path
        d="M2 30 Q20 10 40 22 Q50 26 60 22 Q72 18 82 26 Q96 36 118 30 Q100 34 86 36 Q72 38 64 34 L60 38 L56 34 Q48 38 34 36 Q20 34 2 30 Z M60 22 L56 12 L60 14 L64 12 Z"
        fill="currentColor"
      />
    </svg>
  );
}

/** A 4-point "sparkle" small star, used as a typographic dingbat. */
export function Sparkle({ className, ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden
      {...props}
    >
      <path
        d="M12 0 L13.5 10.5 L24 12 L13.5 13.5 L12 24 L10.5 13.5 L0 12 L10.5 10.5 Z"
        fill="currentColor"
      />
    </svg>
  );
}

/** Banner ribbon SVG with curled ends. Children fill the inner band. */
export function BannerRibbon({
  text,
  className,
}: {
  text: string;
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 600 84"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      role="img"
      aria-label={text}
    >
      {/* Left curl */}
      <path
        d="M30 24 L60 24 L60 60 L30 60 Q10 60 10 76 Q10 60 30 60 L30 24 Q10 24 10 8 Q10 24 30 24 Z"
        fill="currentColor"
        opacity="0.8"
      />
      {/* Right curl */}
      <path
        d="M570 24 L540 24 L540 60 L570 60 Q590 60 590 76 Q590 60 570 60 L570 24 Q590 24 590 8 Q590 24 570 24 Z"
        fill="currentColor"
        opacity="0.8"
      />
      {/* Main band */}
      <path
        d="M60 18 L540 18 L540 66 L60 66 Z"
        fill="currentColor"
      />
      <text
        x="300"
        y="50"
        textAnchor="middle"
        fontFamily="var(--font-typewriter), monospace"
        fontSize="18"
        letterSpacing="6"
        fill="var(--background)"
        fontWeight="700"
      >
        {text}
      </text>
    </svg>
  );
}

/** Decorative dagger silhouette — points down. */
export function Dagger({ className, ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 40 100"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden
      {...props}
    >
      {/* Pommel */}
      <circle cx="20" cy="6" r="4" fill="currentColor" />
      {/* Grip */}
      <rect x="17" y="10" width="6" height="22" fill="currentColor" />
      {/* Crossguard */}
      <rect x="6" y="32" width="28" height="5" fill="currentColor" />
      {/* Blade */}
      <polygon points="14,37 26,37 20,98" fill="currentColor" />
    </svg>
  );
}
