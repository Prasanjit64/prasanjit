'use client'

import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'

const LINKS = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'education', label: 'Education' },
  { id: 'interests', label: 'Interests' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'vision', label: 'Vision' },
  { id: 'contact', label: 'Contact' },
]

export function SiteNav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled
          ? 'border-b border-border bg-background/85 backdrop-blur-md'
          : 'border-b border-transparent'
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 lg:px-8">
        <a href="#home" className="group flex items-center gap-2">
          <span className="flex h-8 w-8 items-center justify-center rounded-md bg-foreground font-mono text-lg text-background">
            ∑
          </span>
          <span className="font-mono text-sm font-medium tracking-tight">Prasanjit Ghosh</span>
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {LINKS.map((link, i) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                className="group flex items-center gap-1.5 rounded-md px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
              >
                <span className="font-mono text-[10px] text-primary/70">
                  {String(i + 1).padStart(2, '0')}
                </span>
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="flex h-9 w-9 items-center justify-center rounded-md border border-border text-foreground md:hidden"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-border bg-background md:hidden">
          <ul className="mx-auto grid max-w-6xl grid-cols-2 gap-1 px-5 py-4">
            {LINKS.map((link, i) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  onClick={() => setOpen(false)}
                  className="flex items-center gap-2 rounded-md px-3 py-2.5 text-sm text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
                >
                  <span className="font-mono text-[10px] text-primary/70">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  )
}
