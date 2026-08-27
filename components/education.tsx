import { SectionLabel } from '@/components/section-label'

const TIMELINE = [
  {
    title: 'B.Sc. Mathematics',
    school: 'Surya Sen Mahavidyalaya',
    meta: 'Second Year — Currently Pursuing',
    desc: 'Currently pursuing my B.Sc. in Mathematics and developing my analytical and problem-solving abilities.',
    status: 'Ongoing',
  },
  {
    title: 'Higher Secondary',
    school: 'Debinagar Kailash Chandra Radha Rani Vidyapeeth',
    meta: 'Class 12 — Completed',
    desc: 'Completed higher secondary education with a focus on building strong academic foundations.',
    status: null,
  },
  {
    title: 'Madhyamik (Class 10)',
    school: 'Damdama High School',
    meta: 'Class 10 — Completed',
    desc: 'Completed secondary education from Damdama High School, marking an important milestone in my academic journey.',
    status: null,
  },
  {
    title: 'School Education',
    school: 'Dalkhola High School',
    meta: 'Classes 5–8',
    desc: 'Early school years where my interest in mathematics and learning began to grow.',
    status: null,
  },
]

export function Education() {
  return (
    <section id="education" className="scroll-mt-16 border-y border-border bg-card/40">
      <div className="mx-auto max-w-6xl px-5 py-24 lg:px-8">
        <SectionLabel symbol="∫">Education</SectionLabel>
        <h2 className="mt-8 text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
          My academic path so far
        </h2>
        <p className="mt-3 max-w-xl text-pretty leading-relaxed text-muted-foreground">
          A simple, honest record of where I have studied and what I am studying now.
        </p>

        <ol className="mt-12 space-y-0">
          {TIMELINE.map((item, i) => (
            <li key={item.title} className="relative grid grid-cols-[auto_1fr] gap-x-6">
              {/* rail */}
              <div className="flex flex-col items-center">
                <span
                  className={`flex h-11 w-11 items-center justify-center rounded-md border font-mono text-sm ${
                    item.status
                      ? 'border-primary bg-primary text-primary-foreground'
                      : 'border-border bg-card text-muted-foreground'
                  }`}
                >
                  {String(i + 1).padStart(2, '0')}
                </span>
                {i < TIMELINE.length - 1 && <span className="w-px flex-1 bg-border" />}
              </div>

              <div className="pb-10">
                <div className="flex flex-wrap items-center gap-3">
                  <h3 className="text-xl font-semibold tracking-tight">{item.title}</h3>
                  {item.status && (
                    <span className="rounded-full bg-gold/20 px-2.5 py-0.5 font-mono text-xs text-gold-foreground">
                      {item.status}
                    </span>
                  )}
                </div>
                <p className="mt-1 text-sm font-medium text-primary">{item.school}</p>
                <p className="mt-0.5 font-mono text-xs uppercase tracking-wider text-muted-foreground">
                  {item.meta}
                </p>
                <p className="mt-3 max-w-2xl text-pretty leading-relaxed text-muted-foreground">
                  {item.desc}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
