import { SectionLabel } from '@/components/section-label'

const STEPS = [
  {
    title: 'School',
    place: 'Dalkhola High School',
    detail: 'Class 10 from Damdama High School · Classes 5–8',
    tag: null,
  },
  {
    title: 'Higher Secondary',
    place: 'Debinagar Kailash Chandra Radha Rani Vidyapeeth',
    detail: 'Class 12',
    tag: null,
  },
  {
    title: 'College',
    place: 'Surya Sen Mahavidyalaya',
    detail: 'B.Sc. Mathematics — Second Year',
    tag: null,
  },
  {
    title: 'Next Chapter',
    place: 'Continue learning mathematics, technology and other areas while building useful projects.',
    detail: '',
    tag: 'In progress',
  },
]

export function Journey() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-24 lg:px-8">
      <SectionLabel symbol="→">My Journey</SectionLabel>
      <h2 className="mt-8 text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
        My learning journey
      </h2>

      <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {STEPS.map((step, i) => (
          <div
            key={step.title}
            className="relative flex flex-col rounded-lg border border-border bg-card p-6"
          >
            <span className="font-mono text-sm text-primary">{String(i + 1).padStart(2, '0')}</span>
            <h3 className="mt-3 text-lg font-semibold tracking-tight">{step.title}</h3>
            <p className="mt-2 flex-1 text-pretty text-sm leading-relaxed text-muted-foreground">
              {step.place}
            </p>
            {step.detail && (
              <p className="mt-2 font-mono text-xs uppercase tracking-wider text-muted-foreground">
                {step.detail}
              </p>
            )}
            {step.tag && (
              <span className="mt-4 inline-flex w-fit rounded-full bg-gold/20 px-2.5 py-0.5 font-mono text-xs text-gold-foreground">
                {step.tag}
              </span>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}
