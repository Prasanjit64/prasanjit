export function SectionLabel({ symbol, children }: { symbol: string; children: string }) {
  return (
    <div className="flex items-center gap-3">
      <span className="flex h-9 w-9 items-center justify-center rounded-md border border-border bg-card font-mono text-lg text-primary">
        {symbol}
      </span>
      <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
        {children}
      </span>
    </div>
  )
}
