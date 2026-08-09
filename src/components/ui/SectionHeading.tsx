import { ReactNode } from "react";

export function SectionHeading({
  children,
  size = "md",
  className = "",
}: {
  children: ReactNode;
  size?: "md" | "lg";
  className?: string;
}) {
  const sizeClass =
    size === "lg"
      ? "text-4xl md:text-6xl"
      : "text-3xl md:text-5xl";

  return (
    <h2
      className={`font-display font-black ${sizeClass} leading-[0.95] tracking-tight text-charcoal-950 dark:text-sand-50 ${className}`}
    >
      {children}
    </h2>
  );
}
