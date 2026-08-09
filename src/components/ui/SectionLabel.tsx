export function SectionLabel({
  children,
  index,
}: {
  children: string;
  index?: string;
}) {
  return (
    <span className="flex items-center gap-3 mb-5 font-mono text-xs uppercase tracking-eyebrow text-terracotta-600 dark:text-terracotta-400">
      {index && <span className="text-charcoal-950/40 dark:text-sand-50/40">{index}</span>}
      <span className="w-8 h-px bg-terracotta-600 dark:bg-terracotta-400" />
      {children}
    </span>
  );
}
