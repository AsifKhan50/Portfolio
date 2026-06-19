import { CheckCircle2 } from "lucide-react"
import { SectionHeading } from "@/components/section-heading"
import { Reveal } from "@/components/reveal"
import { ABOUT_HIGHLIGHTS, ABOUT_TIMELINE, PROFILE } from "@/lib/portfolio-data"

export function About() {
  return (
    <section id="about" className="scroll-mt-24 px-4 py-24 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="About Me"
          title="Turning business friction into automated advantage"
          description="A senior Power Platform developer and consultant focused on building reliable, scalable enterprise solutions that people actually love to use."
        />

        <div className="mt-16 grid gap-12 lg:grid-cols-2">
          <div>
            <Reveal>
              <p className="leading-relaxed text-muted-foreground">
                With{" "}
                <span className="font-semibold text-foreground">
                  {PROFILE.yearsExperience} years
                </span>{" "}
                of experience across the Microsoft ecosystem, I design and deliver
                business applications that automate manual work, unify fragmented
                data, and give teams the tools to move faster. My approach blends
                low-code velocity with full-stack engineering discipline.
              </p>
            </Reveal>
            <Reveal delay={1}>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                From canvas apps to model-driven solutions, complex Power Automate
                orchestrations to React front-ends backed by SQL Server, I&apos;ve
                helped organizations turn digital transformation goals into shipped,
                measurable outcomes.
              </p>
            </Reveal>

            <Reveal delay={2}>
              <h3 className="mt-8 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                Core expertise
              </h3>
            </Reveal>
            <div className="mt-4 flex flex-wrap gap-2">
              {ABOUT_HIGHLIGHTS.map((item, i) => (
                <Reveal as="span" key={item} delay={i}>
                  <span className="inline-flex items-center gap-1.5 rounded-lg border border-border bg-card/40 px-3 py-1.5 text-sm text-foreground transition-colors hover:border-primary/50 hover:text-primary">
                    <CheckCircle2 className="h-3.5 w-3.5 text-primary" />
                    {item}
                  </span>
                </Reveal>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute left-[7px] top-2 bottom-2 w-px bg-gradient-to-b from-primary/60 via-border to-transparent" />
            <ul className="space-y-8">
              {ABOUT_TIMELINE.map((entry, i) => (
                <Reveal as="li" key={entry.year} delay={i} className="relative pl-8">
                  <span className="absolute left-0 top-1.5 h-3.5 w-3.5 rounded-full border-2 border-primary bg-background" />
                  <span className="font-mono text-xs uppercase tracking-widest text-primary">
                    {entry.year}
                  </span>
                  <h4 className="mt-1 font-semibold text-foreground">{entry.title}</h4>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                    {entry.description}
                  </p>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
