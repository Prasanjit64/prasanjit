import { BookOpen, Code2, Globe, Landmark, Newspaper } from 'lucide-react'
import { SectionLabel } from '@/components/section-label'

const INTERESTS = [
  {
    icon: BookOpen,
    title: 'Mathematics',
    desc: 'Exploring mathematical concepts, equations, logical reasoning and problem-solving.',
  },
  {
    icon: Code2,
    title: 'Web Technology',
    desc: 'Learning modern web technologies and exploring how websites and digital experiences are built.',
  },
  {
    icon: Newspaper,
    title: 'Current Affairs',
    desc: 'Following important national and international events and understanding their wider impact.',
  },
  {
    icon: Globe,
    title: 'Geopolitics',
    desc: 'Interested in international relations, global affairs and the changing dynamics between countries.',
  },
  {
    icon: Landmark,
    title: 'Indian Politics',
    desc: "Interested in India's political system, governance, public affairs and national issues.",
  },
]

export function Interests() {
  return (
    <section id="interests" className="mx-auto max-w-6xl scroll-mt-16 px-5 py-24 lg:px-8">
      <SectionLabel symbol="θ">Interests</SectionLabel>
      <h2 className="mt-8 text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
        What I&apos;m interested in
      </h2>

      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {INTERESTS.map((item, i) => {
          const Icon = item.icon
          return (
            <div
              key={item.title}
              className={`group relative flex flex-col rounded-lg border border-border bg-card p-6 transition-colors hover:border-primary/40 ${
                i === 4 ? 'sm:col-span-2 lg:col-span-1' : ''
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="flex h-11 w-11 items-center justify-center rounded-md bg-secondary text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <Icon className="h-5 w-5" />
                </span>
                <span className="font-mono text-xs text-muted-foreground">
                  {String(i + 1).padStart(2, '0')}
                </span>
              </div>
              <h3 className="mt-5 text-lg font-semibold tracking-tight">{item.title}</h3>
              <p className="mt-2 text-pretty text-sm leading-relaxed text-muted-foreground">
                {item.desc}
              </p>
            </div>
          )
        })}

        <div className="flex items-center justify-center rounded-lg border border-dashed border-border p-6 font-mono text-2xl tracking-[0.3em] text-muted-foreground">
          ∑ · π · ∫ · ∞
        </div>
      </div>
    </section>
  )
}
