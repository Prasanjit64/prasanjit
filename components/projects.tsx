import { ArrowUpRight } from 'lucide-react'
import { GitHubIcon } from '@/components/icons'
import { SectionLabel } from '@/components/section-label'

export function Projects() {
  return (
    <section id="projects" className="scroll-mt-16 border-y border-border bg-card/40">
      <div className="mx-auto max-w-6xl px-5 py-24 lg:px-8">
        <SectionLabel symbol="∫">Projects &amp; Digital Work</SectionLabel>
        <h2 className="mt-8 text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
          What I&apos;ve built so far
        </h2>
        <p className="mt-3 max-w-xl text-pretty leading-relaxed text-muted-foreground">
          A small but growing collection — everything here is genuinely mine.
        </p>

        <div className="mt-12 grid gap-4 lg:grid-cols-3">
          {/* Featured */}
          <article className="relative flex flex-col justify-between overflow-hidden rounded-lg border border-primary/30 bg-card p-7 lg:col-span-2">
            <div aria-hidden="true" className="graph-grid-strong pointer-events-none absolute inset-0 opacity-40" />
            <div className="relative">
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-md bg-foreground font-mono text-lg text-background">
                  π
                </span>
                <span className="rounded-full bg-gold/20 px-2.5 py-0.5 font-mono text-xs text-gold-foreground">
                  Featured
                </span>
              </div>
              <h3 className="mt-6 text-2xl font-semibold tracking-tight">Personal Portfolio Website</h3>
              <p className="mt-3 max-w-lg text-pretty leading-relaxed text-muted-foreground">
                My personal portfolio website showcasing my education, interests, learning journey and
                digital presence.
              </p>
            </div>
            <div className="relative mt-8 flex flex-wrap gap-3">
              <a
                href="https://prasanjitghosh.lovable.app"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
              >
                Visit Portfolio
                <ArrowUpRight className="h-4 w-4" />
              </a>
              <a
                href="https://github.com/Prasanjit64"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-md border border-border bg-background px-4 py-2.5 text-sm font-medium transition-colors hover:bg-secondary"
              >
                <GitHubIcon className="h-4 w-4" />
                GitHub
              </a>
            </div>
          </article>

          <div className="flex flex-col gap-4">
            <article className="flex flex-1 flex-col justify-between rounded-lg border border-border bg-card p-6">
              <div>
                <GitHubIcon className="h-7 w-7 text-foreground" />
                <h3 className="mt-4 text-lg font-semibold tracking-tight">GitHub Profile 2</h3>
                <p className="mt-2 text-pretty text-sm leading-relaxed text-muted-foreground">
                  A second profile where I keep additional experiments.
                </p>
              </div>
              <a
                href="https://github.com/abhayghosh750-code"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex items-center gap-1.5 font-mono text-sm text-primary transition-colors hover:text-primary/80"
              >
                github.com/abhayghosh750-code
                <ArrowUpRight className="h-3.5 w-3.5" />
              </a>
            </article>

            <article className="rounded-lg border border-dashed border-border bg-card/50 p-6">
              <p className="font-mono text-sm text-muted-foreground">More projects coming soon…</p>
              <p className="mt-2 text-pretty text-sm leading-relaxed text-muted-foreground">
                I&apos;m currently learning and building. More projects will be added as my journey
                continues.
              </p>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}
