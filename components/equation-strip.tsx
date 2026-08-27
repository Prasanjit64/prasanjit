const EQUATIONS = [
  'e^{iπ} + 1 = 0',
  'a² + b² = c²',
  'lim_{x→∞} f(x)',
  '∫ g(t) dt',
  '∑_{n=1}^{∞} 1/n²',
  '∇ · F = ρ',
  '√2 ∉ ℚ',
  'θ = arctan(y/x)',
]

export function EquationStrip() {
  return (
    <div
      aria-hidden="true"
      className="relative flex w-full overflow-hidden border-y border-primary/40 bg-primary py-3 text-primary-foreground select-none"
    >
      <div className="flex shrink-0 animate-marquee gap-10 pr-10">
        {[...EQUATIONS, ...EQUATIONS].map((eq, i) => (
          <span key={i} className="flex items-center gap-10 font-mono text-sm tracking-tight text-primary-foreground/80">
            <span>{eq}</span>
            <span className="text-primary-foreground/40">·</span>
          </span>
        ))}
      </div>
      <div className="flex shrink-0 animate-marquee gap-10 pr-10" aria-hidden="true">
        {[...EQUATIONS, ...EQUATIONS].map((eq, i) => (
          <span key={i} className="flex items-center gap-10 font-mono text-sm tracking-tight text-primary-foreground/80">
            <span>{eq}</span>
            <span className="text-primary-foreground/40">·</span>
          </span>
        ))}
      </div>
    </div>
  )
}
