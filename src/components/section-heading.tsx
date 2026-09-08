import { ReactNode } from "react";

export function SectionHeading({
  eyebrow,
  title,
  intro,
  align = "left",
  as: Tag = "h2",
}: {
  eyebrow?: string;
  title: ReactNode;
  intro?: ReactNode;
  align?: "left" | "center";
  as?: "h1" | "h2";
}) {
  return (
    <div
      className={`flex flex-col gap-3 ${align === "center" ? "mx-auto max-w-2xl text-center items-center" : "max-w-prose"}`}
    >
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <Tag className="text-2xl font-extrabold sm:text-[1.9rem]">{title}</Tag>
      {intro && <p className="text-ink-soft">{intro}</p>}
    </div>
  );
}
