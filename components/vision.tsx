export function Vision() {
  return (
    <section id="vision" className="relative scroll-mt-16 overflow-hidden border-y border-border bg-foreground text-background">
      <div aria-hidden="true" className="graph-grid-strong pointer-events-none absolute inset-0 opacity-[0.06]" />
      <div aria-hidden="true" className="pointer-events-none absolute -right-10 -top-16 font-mono text-[18rem] leading-none text-background/[0.04] select-none">
        ∞
      </div>

      <div className="relative mx-auto max-w-4xl px-5 py-28 lg:px-8">
        <p className="font-mono text-xs uppercase tracking-[0.25em] text-background/50">∞ My Vision</p>
        <blockquote className="mt-8">
          <p className="text-balance text-3xl font-semibold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
            &ldquo;I want to become a knowledgeable and capable person who can use what I learn to
            contribute positively to society.&rdquo;
          </p>
        </blockquote>
        <p className="mt-8 max-w-2xl text-pretty leading-relaxed text-background/70">
          Whether through mathematics, technology, knowledge, leadership or meaningful work, I want my
          learning to have a purpose beyond myself.
        </p>
      </div>
    </section>
  )
}
