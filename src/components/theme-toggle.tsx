"use client";

import { useEffect, useState } from "react";

type Mode = "light" | "dark";

function systemMode(): Mode {
  if (typeof window === "undefined") return "light";
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

export function ThemeToggle({ className = "" }: { className?: string }) {
  const [mode, setMode] = useState<Mode | null>(null);

  useEffect(() => {
    const stored = (localStorage.getItem("ajp-theme") as Mode | null) ?? null;
    setMode(stored ?? systemMode());
  }, []);

  function toggle() {
    const next: Mode = (mode ?? systemMode()) === "dark" ? "light" : "dark";
    setMode(next);
    document.documentElement.setAttribute("data-theme", next);
    try {
      localStorage.setItem("ajp-theme", next);
    } catch {
      /* ignore */
    }
  }

  const isDark = (mode ?? "light") === "dark";

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={isDark ? "Beralih ke tema terang" : "Beralih ke tema gelap"}
      className={`inline-flex h-9 w-9 items-center justify-center rounded-lg border border-line text-ink-soft transition hover:border-brand hover:text-brand ${className}`}
    >
      {isDark ? (
        <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round">
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2v2M12 20v2M2 12h2M20 12h2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
        </svg>
      ) : (
        <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8Z" />
        </svg>
      )}
    </button>
  );
}
