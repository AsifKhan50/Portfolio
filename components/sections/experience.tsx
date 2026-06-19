import { Briefcase } from "lucide-react"
import { SectionHeading } from "@/components/section-heading"
import { Reveal } from "@/components/reveal"
import { EXPERIENCES } from "@/lib/portfolio-data"

export function Experience() {
  return (
    <section id="experience" className="scroll-mt-24 px-4 py-24 sm:px-6">
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          eyebrow="Experience"
          title="A career built on outcomes"
          description="Progressive roles delivering and leading business application programs for growing enterprises."
        />

        <div className="relative mt-16">
          <div className="absolute left-4 top-2 bottom-2 w-px bg-gradient-to-b from-primary/60 via-border to-transparent md:left-1/2" />

          <div className="space-y-10">
            {EXPERIENCES.map((exp, i) => (
              <Reveal key={exp.role} delay={i}>
                <div
                  className={`relative flex md:items-center ${
                    i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  <span className="absolute left-4 top-6 z-10 flex h-3 w-3 -translate-x-1/2 items-center justify-center rounded-full border-2 border-primary bg-background md:left-1/2" />

                  <div className="w-full pl-10 md:w-1/2 md:px-8">
                    <div className="glass rounded-2xl p-6 transition-colors hover:border-primary/40">
                      <div className="flex items-center gap-2">
                        <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/15 text-primary">
                          <Briefcase className="h-4 w-4" />
                        </span>
                        <span className="font-mono text-xs uppercase tracking-widest text-primary">
                          {exp.period}
                        </span>
                      </div>
                      <h3 className="mt-3 text-lg font-semibold text-foreground">{exp.role}</h3>
                      <p className="text-sm text-accent">{exp.company}</p>
                      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                        {exp.description}
                      </p>
                      <ul className="mt-3 space-y-1.5">
                        {exp.highlights.map((h) => (
                          <li key={h} className="flex items-start gap-2 text-sm text-foreground/90">
                            <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-primary" />
                            {h}
                          </li>
                        ))}
                      </ul>
                      <div className="mt-4 flex flex-wrap gap-1.5">
                        {exp.tech.map((t) => (
                          <span
                            key={t}
                            className="rounded-md border border-border bg-muted/50 px-2 py-0.5 font-mono text-xs text-muted-foreground"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="hidden md:block md:w-1/2" />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
