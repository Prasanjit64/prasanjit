import { SectionLabel } from '@/components/section-label'

const STATS = [
  { value: '2nd', label: 'Year of College', sub: 'Surya Sen Mahavidyalaya' },
  { value: '5–8', label: 'School Classes', sub: 'Dalkhola High School' },
  { value: '∞', label: 'Curiosity to Learn', sub: 'Always exploring' },
]

export function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl scroll-mt-16 px-5 py-24 lg:px-8">
      <SectionLabel symbol="π">About Me</SectionLabel>

      <div className="mt-8 grid gap-12 lg:grid-cols-[1.2fr_1fr]">
        <div>
          <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
            A student of numbers, curious about everything else
          </h2>
          <div className="mt-6 space-y-4 text-pretty leading-relaxed text-muted-foreground">
            <p>
              I&apos;m Prasanjit Ghosh, currently pursuing a B.Sc. in Mathematics at Surya Sen
              Mahavidyalaya, where I am in my second year.
            </p>
            <p>
              Mathematics has developed my interest in logical thinking, problem-solving and analytical
              reasoning. Alongside academics, I am exploring web technology and learning how digital tools
              can be used to create useful and meaningful experiences.
            </p>
            <p>
              Beyond academics, I enjoy following current affairs, geopolitics and Indian politics. These
              interests encourage me to understand society, technology, national issues and the wider world
              from different perspectives.
            </p>
            <p className="text-foreground">
              My aim is to become a knowledgeable, capable and responsible person who can contribute
              positively to society in many ways.
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          {STATS.map((stat) => (
            <div
              key={stat.label}
              className="flex items-center gap-5 rounded-lg border border-border bg-card p-5"
            >
              <span className="flex h-16 w-16 shrink-0 items-center justify-center rounded-md bg-secondary font-mono text-3xl text-primary">
                {stat.value}
              </span>
              <div>
                <p className="text-sm font-medium text-foreground">{stat.label}</p>
                <p className="mt-0.5 text-sm text-muted-foreground">{stat.sub}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
