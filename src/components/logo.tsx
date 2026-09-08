import { site } from "@/lib/site";

/**
 * PLACEHOLDER logo. The mark is a simple geometric stand-in for the official
 * green "AJP" diamond emblem. To use the real asset: drop `logo-mark.svg`
 * into /public and swap the <svg> below for <img src="/logo-mark.svg" ... />.
 */
export function LogoMark({ className = "h-9 w-9" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 64 64"
      className={className}
      role="img"
      aria-hidden="true"
      fill="none"
    >
      <path
        d="M32 3 61 32 32 61 3 32Z"
        stroke="currentColor"
        strokeWidth={4}
        strokeLinejoin="round"
      />
      <path d="M32 14 46 40 38 40 32 28 26 40 18 40Z" fill="currentColor" />
      <rect x="28" y="44" width="8" height="6" fill="currentColor" />
    </svg>
  );
}

export function Logo({
  className = "",
  stacked = false,
}: {
  className?: string;
  stacked?: boolean;
}) {
  return (
    <span
      className={`inline-flex items-center gap-2.5 text-brand ${className}`}
    >
      <LogoMark className="h-9 w-9 shrink-0" />
      <span className={`flex ${stacked ? "flex-col leading-tight" : "flex-col leading-none"}`}>
        <span className="font-display text-[0.95rem] font-extrabold uppercase tracking-tight text-ink">
          Ateka Jaya Primantara
        </span>
        <span className="font-mono text-[0.6rem] uppercase tracking-[0.18em] text-ink-faint">
          {site.tagline}
        </span>
      </span>
    </span>
  );
}
