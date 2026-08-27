import { ArrowUpRight, Mail } from 'lucide-react'
import { GitHubIcon } from '@/components/icons'

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-card/40">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-5 py-10 lg:flex-row lg:items-center lg:justify-between lg:px-8">
        <div className="flex items-center gap-2">
          <span className="flex h-8 w-8 items-center justify-center rounded-md bg-foreground font-mono text-lg text-background">
            ∑
          </span>
          <p className="text-sm text-muted-foreground">
            © 2026 Prasanjit Ghosh. Built with curiosity, mathematics and technology.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <a
            href="https://github.com/Prasanjit64"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="flex h-10 w-10 items-center justify-center rounded-md border border-border bg-card text-foreground transition-colors hover:bg-secondary hover:text-primary"
          >
            <GitHubIcon className="h-4 w-4" />
          </a>
          <a
            href="mailto:abhayghosh750@gmail.com"
            aria-label="Email"
            className="flex h-10 w-10 items-center justify-center rounded-md border border-border bg-card text-foreground transition-colors hover:bg-secondary hover:text-primary"
          >
            <Mail className="h-4 w-4" />
          </a>
          <a
            href="https://prasanjitghosh.lovable.app"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Portfolio"
            className="flex h-10 w-10 items-center justify-center rounded-md border border-border bg-card text-foreground transition-colors hover:bg-secondary hover:text-primary"
          >
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </footer>
  )
}
