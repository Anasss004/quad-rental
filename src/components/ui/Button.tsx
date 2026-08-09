import { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";

const base =
  "inline-flex items-center justify-center gap-2 text-xs uppercase tracking-eyebrow font-medium transition-colors duration-300 disabled:opacity-50 disabled:pointer-events-none";

const variants = {
  primary:
    "bg-sand-50 text-charcoal-950 hover:bg-terracotta-400 px-8 py-3.5 dark:bg-sand-50 dark:text-charcoal-950 dark:hover:bg-terracotta-400",
  dark:
    "bg-charcoal-950 text-sand-50 hover:bg-charcoal-800 px-8 py-3.5 border border-charcoal-950 dark:border-sand-50/20",
  outline:
    "border border-current px-8 py-3.5 hover:bg-current/5",
  ghost: "px-0 py-0 hover:text-terracotta-500",
};

type Variant = keyof typeof variants;

export function Button({
  variant = "primary",
  children,
  className = "",
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: Variant;
  children: ReactNode;
}) {
  return (
    <button className={`${base} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
}

export function LinkButton({
  variant = "primary",
  children,
  className = "",
  ...props
}: AnchorHTMLAttributes<HTMLAnchorElement> & {
  variant?: Variant;
  children: ReactNode;
}) {
  return (
    <a className={`${base} ${variants[variant]} ${className}`} {...props}>
      {children}
    </a>
  );
}
