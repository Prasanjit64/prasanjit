import { ArrowDown, ArrowRight, Mail } from 'lucide-react'
import { GitHubIcon } from '@/components/icons'

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-16">
      {/* graph paper backdrop */}
      <div aria-hidden="true" className="graph-grid pointer-events-none absolute inset-0" />
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 flex items-start justify-end">
        <span className="mr-[-2rem] mt-24 font-mono text-[22rem] leading-none text-primary/[0.04] select-none">
          π
        </span>
      </div>

      <div className="relative mx-auto max-w-6xl px-5 pb-20 pt-16 lg:px-8 lg:pt-24">
        <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card/70 px-4 py-1.5 font-mono text-xs text-muted-foreground backdrop-blur">
          <span className="text-primary">∫</span>
          Exploring mathematics, technology and the world around me
        </div>

        <h1 className="mt-8 text-balance text-5xl font-semibold tracking-tight sm:text-7xl lg:text-8xl">
          Prasanjit Ghosh
        </h1>

        <p className="mt-5 font-mono text-sm uppercase tracking-[0.18em] text-primary sm:text-base">
          B.Sc. Mathematics Student
          <span className="mx-2 text-muted-foreground">/</span>
          Web Technology Enthusiast
        </p>

        <p className="mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
          I&apos;m a second-year B.Sc. Mathematics student at Surya Sen Mahavidyalaya, passionate about
          mathematics, web technology, current affairs, geopolitics and Indian politics.
        </p>

        <div className="mt-9 flex flex-wrap items-center gap-3">
          <a
            href="#about"
            className="group inline-flex items-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Explore My Journey
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-md border border-border bg-card px-5 py-3 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
          >
            Let&apos;s Connect
          </a>

          <div className="ml-1 flex items-center gap-1">
            <a
              href="https://github.com/Prasanjit64"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile"
              className="flex h-11 w-11 items-center justify-center rounded-md border border-border bg-card text-foreground transition-colors hover:bg-secondary hover:text-primary"
            >
              <GitHubIcon className="h-5 w-5" />
            </a>
            <a
              href="mailto:abhayghosh750@gmail.com"
              aria-label="Send an email"
              className="flex h-11 w-11 items-center justify-center rounded-md border border-border bg-card text-foreground transition-colors hover:bg-secondary hover:text-primary"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>

        <a
          href="#about"
          className="mt-16 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowDown className="h-4 w-4 animate-bounce" />
          Scroll
        </a>
      </div>
    </section>
  )
}
