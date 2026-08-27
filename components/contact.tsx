'use client'

import { useState, type FormEvent } from 'react'
import { ArrowUpRight, Mail, Send } from 'lucide-react'
import { GitHubIcon } from '@/components/icons'
import { SectionLabel } from '@/components/section-label'

const CHANNELS = [
  {
    icon: Mail,
    label: 'Email',
    value: 'abhayghosh750@gmail.com',
    href: 'mailto:abhayghosh750@gmail.com',
  },
  {
    icon: GitHubIcon,
    label: 'GitHub',
    value: 'github.com/Prasanjit64',
    href: 'https://github.com/Prasanjit64',
  },
  {
    icon: GitHubIcon,
    label: 'GitHub — Second Profile',
    value: 'github.com/abhayghosh750-code',
    href: 'https://github.com/abhayghosh750-code',
  },
  {
    icon: ArrowUpRight,
    label: 'Portfolio',
    value: 'prasanjitghosh.lovable.app',
    href: 'https://prasanjitghosh.lovable.app',
  },
]

export function Contact() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  function handleSubmit(e: FormEvent) {
    e.preventDefault()
    const subject = encodeURIComponent(`Portfolio message from ${name || 'a visitor'}`)
    const body = encodeURIComponent(`${message}\n\n— ${name}${email ? ` (${email})` : ''}`)
    window.location.href = `mailto:abhayghosh750@gmail.com?subject=${subject}&body=${body}`
  }

  return (
    <section id="contact" className="mx-auto max-w-6xl scroll-mt-16 px-5 py-24 lg:px-8">
      <SectionLabel symbol="∑">Contact</SectionLabel>
      <h2 className="mt-8 text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
        Let&apos;s connect
      </h2>
      <p className="mt-3 max-w-xl text-pretty leading-relaxed text-muted-foreground">
        Have an idea, question, or simply want to connect? Feel free to reach out.
      </p>

      <div className="mt-12 grid gap-8 lg:grid-cols-2">
        <div className="flex flex-col gap-3">
          {CHANNELS.map((c) => {
            const Icon = c.icon
            const external = c.href.startsWith('http')
            return (
              <a
                key={c.label}
                href={c.href}
                target={external ? '_blank' : undefined}
                rel={external ? 'noopener noreferrer' : undefined}
                className="group flex items-center gap-4 rounded-lg border border-border bg-card p-4 transition-colors hover:border-primary/40 hover:bg-secondary"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-md bg-secondary text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <Icon className="h-5 w-5" />
                </span>
                <div className="min-w-0">
                  <p className="text-sm font-medium">{c.label}</p>
                  <p className="truncate font-mono text-sm text-muted-foreground">{c.value}</p>
                </div>
              </a>
            )
          })}
        </div>

        <form onSubmit={handleSubmit} className="rounded-lg border border-border bg-card p-6">
          <div className="grid gap-4">
            <div className="grid gap-1.5">
              <label htmlFor="name" className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
                Name
              </label>
              <input
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="rounded-md border border-input bg-background px-3 py-2.5 text-sm outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/20"
                placeholder="Your name"
              />
            </div>
            <div className="grid gap-1.5">
              <label htmlFor="email" className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
                Email
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="rounded-md border border-input bg-background px-3 py-2.5 text-sm outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/20"
                placeholder="you@example.com"
              />
            </div>
            <div className="grid gap-1.5">
              <label htmlFor="message" className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
                Message
              </label>
              <textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                rows={4}
                className="resize-y rounded-md border border-input bg-background px-3 py-2.5 text-sm outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/20"
                placeholder="Write your message…"
              />
            </div>
            <button
              type="submit"
              className="inline-flex items-center justify-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
            >
              <Send className="h-4 w-4" />
              Send Message
            </button>
            <p className="text-center text-xs text-muted-foreground">
              This opens your email app with the message ready to send.
            </p>
          </div>
        </form>
      </div>
    </section>
  )
}
