"use client"

import { motion } from "framer-motion"
import { Boxes, Database, Layout, Workflow, Zap, type LucideIcon } from "lucide-react"
import { SectionHeading } from "@/components/section-heading"
import { Reveal } from "@/components/reveal"
import { SKILL_CATEGORIES } from "@/lib/portfolio-data"

const ICONS: Record<string, LucideIcon> = {
  Zap,
  Layout,
  Database,
  Boxes,
  Workflow,
}

export function Skills() {
  return (
    <section id="skills" className="scroll-mt-24 px-4 py-24 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Skills"
          title="A full-stack low-code toolkit"
          description="Deep specialization in the Power Platform, backed by genuine software engineering across the front and back end."
        />

        <div className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {SKILL_CATEGORIES.map((cat, i) => {
            const Icon = ICONS[cat.icon] ?? Zap
            return (
              <Reveal key={cat.category} delay={i % 3}>
                <div className="group glass h-full rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40">
                  <div className="flex items-center gap-3">
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/15 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                      <Icon className="h-5 w-5" />
                    </span>
                    <h3 className="font-semibold text-foreground">{cat.category}</h3>
                  </div>

                  <ul className="mt-6 space-y-4">
                    {cat.skills.map((skill) => (
                      <li key={skill.name}>
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-muted-foreground">{skill.name}</span>
                          <span className="font-mono text-xs text-primary">{skill.level}%</span>
                        </div>
                        <div className="mt-1.5 h-1.5 overflow-hidden rounded-full bg-muted">
                          <motion.div
                            className="h-full rounded-full bg-gradient-to-r from-primary to-accent"
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, ease: "easeOut" }}
                          />
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
