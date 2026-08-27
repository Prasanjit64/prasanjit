export function Vision() {
  return (
    <section id="vision" className="relative scroll-mt-16 overflow-hidden border-y border-primary/40 bg-primary text-primary-foreground">
      <div aria-hidden="true" className="graph-grid-strong pointer-events-none absolute inset-0 opacity-[0.08]" />
      <div aria-hidden="true" className="pointer-events-none absolute -right-10 -top-16 font-mono text-[18rem] leading-none text-primary-foreground/[0.06] select-none">
        ∞
      </div>

      <div className="relative mx-auto max-w-4xl px-5 py-28 lg:px-8">
        <p className="font-mono text-xs uppercase tracking-[0.25em] text-primary-foreground/60">∞ My Vision</p>
        <blockquote className="mt-8">
          <p className="text-balance text-3xl font-semibold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
            &ldquo;I want to become a knowledgeable and capable person who can use what I learn to
            contribute positively to society.&rdquo;
          </p>
        </blockquote>
        <p className="mt-8 max-w-2xl text-pretty leading-relaxed text-primary-foreground/70">
          Whether through mathematics, technology, knowledge, leadership or meaningful work, I want my
          learning to have a purpose beyond myself.
        </p>
      </div>
    </section>
  )
}
