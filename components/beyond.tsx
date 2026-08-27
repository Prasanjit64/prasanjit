import { Goal, Sigma, Trophy } from 'lucide-react'
import { SectionLabel } from '@/components/section-label'

const HOBBIES = [
  { icon: Trophy, title: 'Cricket', desc: 'Playing and following matches with friends.' },
  { icon: Goal, title: 'Football', desc: 'Weekend games and plenty of energy.' },
  { icon: Sigma, title: 'Solving Equations', desc: 'Unwinding with a good problem to solve.' },
]

export function Beyond() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-24 lg:px-8">
      <SectionLabel symbol="∞">Beyond Academics</SectionLabel>
      <h2 className="mt-8 text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
        Life outside the notebook
      </h2>
      <p className="mt-3 max-w-xl text-pretty leading-relaxed text-muted-foreground">
        A few things that keep me balanced between lectures, problem sets and late-night reading.
      </p>

      <div className="mt-12 grid gap-4 sm:grid-cols-3">
        {HOBBIES.map((item) => {
          const Icon = item.icon
          return (
            <div
              key={item.title}
              className="flex flex-col items-start rounded-lg border border-border bg-card p-6"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-md bg-primary text-primary-foreground">
                <Icon className="h-6 w-6" />
              </span>
              <h3 className="mt-5 text-lg font-semibold tracking-tight">{item.title}</h3>
              <p className="mt-2 text-pretty text-sm leading-relaxed text-muted-foreground">
                {item.desc}
              </p>
            </div>
          )
        })}
      </div>
    </section>
  )
}
