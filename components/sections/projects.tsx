import Image from "next/image"
import { ArrowUpRight, Trophy } from "lucide-react"
import { SectionHeading } from "@/components/section-heading"
import { Reveal } from "@/components/reveal"
import { GithubIcon } from "@/components/brand-icons"
import { PROJECTS } from "@/lib/portfolio-data"

export function Projects() {
  return (
    <section id="projects" className="scroll-mt-24 px-4 py-24 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Projects"
          title="Enterprise solutions, shipped"
          description="A selection of business applications I've designed and delivered — each one solving a real operational problem at scale."
        />

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {PROJECTS.map((project, i) => (
            <Reveal key={project.title} delay={i % 2}>
              <article className="group glass flex h-full flex-col overflow-hidden rounded-2xl transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/40">
                <div className="relative aspect-[16/10] overflow-hidden border-b border-border">
                  <Image
                    src={project.image}
                    alt={`${project.title} interface preview`}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/10 to-transparent" />
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <h3 className="text-lg font-semibold text-foreground">{project.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {project.description}
                  </p>

                  <ul className="mt-4 space-y-1.5">
                    {project.achievements.map((a) => (
                      <li key={a} className="flex items-start gap-2 text-sm text-foreground/90">
                        <Trophy className="mt-0.5 h-3.5 w-3.5 shrink-0 text-accent" />
                        {a}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="rounded-md border border-border bg-muted/50 px-2 py-0.5 font-mono text-xs text-muted-foreground"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="mt-6 flex items-center gap-3 pt-2">
                    <a
                      href={project.demo}
                      className="inline-flex items-center gap-1.5 rounded-lg bg-primary px-3.5 py-2 text-sm font-medium text-primary-foreground transition-transform hover:scale-[1.03]"
                    >
                      Live Demo
                      <ArrowUpRight className="h-4 w-4" />
                    </a>
                    <a
                      href={project.github}
                      className="inline-flex items-center gap-1.5 rounded-lg border border-border px-3.5 py-2 text-sm font-medium text-foreground transition-colors hover:border-primary/50 hover:text-primary"
                    >
                      <GithubIcon className="h-4 w-4" />
                      GitHub
                    </a>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
