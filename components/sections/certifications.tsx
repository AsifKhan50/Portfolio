import { Award, BadgeCheck } from "lucide-react"
import { SectionHeading } from "@/components/section-heading"
import { Reveal } from "@/components/reveal"
import { CERTIFICATIONS } from "@/lib/portfolio-data"

export function Certifications() {
  return (
    <section id="certifications" className="scroll-mt-24 px-4 py-24 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Certifications"
          title="Microsoft certified expertise"
          description="Validated, up-to-date credentials across the Power Platform and Azure fundamentals."
        />

        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {CERTIFICATIONS.map((cert, i) => (
            <Reveal key={cert.code} delay={i}>
              <div className="group glass relative h-full overflow-hidden rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40">
                <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-primary/10 blur-2xl transition-opacity group-hover:opacity-80" />
                <div className="flex items-center justify-between">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 text-primary">
                    <Award className="h-6 w-6" />
                  </span>
                  <span className="inline-flex items-center gap-1 rounded-full border border-border bg-card/50 px-2 py-0.5 font-mono text-[11px] text-muted-foreground">
                    <BadgeCheck className="h-3 w-3 text-accent" />
                    {cert.code}
                  </span>
                </div>
                <h3 className="mt-5 font-semibold leading-snug text-foreground">{cert.name}</h3>
                <div className="mt-3 flex items-center justify-between text-sm text-muted-foreground">
                  <span>{cert.issuer}</span>
                  <span className="font-mono text-xs">{cert.date}</span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
