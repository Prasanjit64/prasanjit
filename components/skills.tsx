import { SectionLabel } from '@/components/section-label'

const SKILLS = [
  { name: 'Mathematics', status: 'Developing', note: 'Core academic focus', level: 3 },
  { name: 'Logical Thinking', status: 'Developing', note: 'Built through mathematics', level: 3 },
  { name: 'Problem Solving', status: 'Developing', note: 'Practised daily', level: 3 },
  { name: 'Web Technology', status: 'Learning', note: 'Understanding how the web works', level: 2 },
  { name: 'Web Development', status: 'Exploring', note: 'Building small projects', level: 1 },
  { name: 'Communication', status: 'Developing', note: 'Explaining ideas clearly', level: 3 },
  { name: 'Research & Learning', status: 'Exploring', note: 'Reading, notes, curiosity', level: 2 },
]

const STATUS_STYLES: Record<string, string> = {
  Developing: 'bg-primary/10 text-primary',
  Learning: 'bg-gold/20 text-gold-foreground',
  Exploring: 'bg-secondary text-muted-foreground',
}

export function Skills() {
  return (
    <section id="skills" className="scroll-mt-16 border-y border-border bg-card/40">
      <div className="mx-auto max-w-6xl px-5 py-24 lg:px-8">
        <SectionLabel symbol="√">Skills &amp; Learning</SectionLabel>
        <h2 className="mt-8 text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
          Skills I&apos;m building
        </h2>
        <p className="mt-3 max-w-xl text-pretty leading-relaxed text-muted-foreground">
          No expert claims here — just honest labels for where each skill currently stands.
        </p>

        <div className="mt-12 grid gap-3 md:grid-cols-2">
          {SKILLS.map((skill) => (
            <div
              key={skill.name}
              className="flex items-center gap-4 rounded-lg border border-border bg-card p-5"
            >
              <div className="flex-1">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <h3 className="font-medium">{skill.name}</h3>
                  <span
                    className={`rounded-full px-2.5 py-0.5 font-mono text-xs ${STATUS_STYLES[skill.status]}`}
                  >
                    {skill.status}
                  </span>
                </div>
                <p className="mt-1 text-sm text-muted-foreground">{skill.note}</p>
                <div className="mt-3 flex gap-1" aria-hidden="true">
                  {[1, 2, 3].map((dot) => (
                    <span
                      key={dot}
                      className={`h-1.5 flex-1 rounded-full ${
                        dot <= skill.level ? 'bg-primary' : 'bg-border'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
