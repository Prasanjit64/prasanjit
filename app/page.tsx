import { SiteNav } from '@/components/site-nav'
import { Hero } from '@/components/hero'
import { EquationStrip } from '@/components/equation-strip'
import { About } from '@/components/about'
import { Education } from '@/components/education'
import { Interests } from '@/components/interests'
import { Skills } from '@/components/skills'
import { Beyond } from '@/components/beyond'
import { Projects } from '@/components/projects'
import { Journey } from '@/components/journey'
import { Vision } from '@/components/vision'
import { Contact } from '@/components/contact'
import { SiteFooter } from '@/components/site-footer'

export default function Page() {
  return (
    <main>
      <SiteNav />
      <Hero />
      <EquationStrip />
      <About />
      <Education />
      <Interests />
      <Skills />
      <Beyond />
      <Projects />
      <Journey />
      <Vision />
      <Contact />
      <SiteFooter />
    </main>
  )
}
