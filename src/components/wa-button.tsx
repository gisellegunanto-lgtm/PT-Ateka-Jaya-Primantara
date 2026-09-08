import { ReactNode } from "react";
import { waLink } from "@/lib/whatsapp";

function WaIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <path d="M12.04 2c-5.52 0-10 4.48-10 10 0 1.76.46 3.48 1.34 5L2 22l5.16-1.35A9.97 9.97 0 0 0 12.04 22c5.52 0 10-4.48 10-10s-4.48-10-10-10Zm0 18.2c-1.55 0-3.07-.42-4.4-1.2l-.32-.19-3.06.8.82-2.98-.2-.33A8.2 8.2 0 1 1 12.04 20.2Zm4.5-6.14c-.25-.13-1.47-.72-1.7-.8-.23-.09-.4-.13-.56.12-.17.25-.64.8-.79.97-.14.16-.29.18-.54.06-.25-.13-1.05-.39-2-1.23-.74-.66-1.24-1.47-1.38-1.72-.14-.25-.02-.39.11-.51.11-.11.25-.29.37-.44.12-.15.16-.25.25-.42.08-.17.04-.31-.02-.44-.06-.12-.56-1.35-.76-1.85-.2-.48-.4-.42-.56-.42h-.48c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.09s.9 2.43 1.03 2.6c.12.16 1.77 2.71 4.3 3.8.6.26 1.07.41 1.44.53.6.19 1.16.16 1.6.1.49-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.14-1.18-.06-.11-.23-.17-.48-.29Z" />
    </svg>
  );
}

export function WaButton({
  message,
  children,
  variant = "primary",
  className = "",
}: {
  message: string;
  children?: ReactNode;
  variant?: "primary" | "ghost";
  className?: string;
}) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-[0.6rem] px-5 py-3 text-sm font-semibold transition";
  const styles =
    variant === "primary"
      ? "bg-accent text-accent-fg hover:brightness-105"
      : "border border-line-strong bg-surface text-ink hover:border-brand hover:text-brand-deep";
  return (
    <a
      href={waLink(message)}
      target="_blank"
      rel="noopener noreferrer"
      className={`${base} ${styles} ${className}`}
    >
      <WaIcon />
      {children ?? "Pesan via WhatsApp"}
    </a>
  );
}

export { WaIcon };
