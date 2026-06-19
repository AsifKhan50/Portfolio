"use client"

import { useEffect, useRef, useState } from "react"
import { useInView } from "framer-motion"
import { AppWindow, Workflow, Clock, Users, type LucideIcon } from "lucide-react"
import { Reveal } from "@/components/reveal"
import { ACHIEVEMENTS } from "@/lib/portfolio-data"

const ICONS: LucideIcon[] = [AppWindow, Workflow, Clock, Users]

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, margin: "-60px" })
  const [display, setDisplay] = useState(0)

  useEffect(() => {
    if (!inView) return
    let raf = 0
    const start = performance.now()
    const duration = 1600
    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setDisplay(Math.floor(eased * value))
      if (progress < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [inView, value])

  return (
    <span ref={ref}>
      {display.toLocaleString()}
      {suffix}
    </span>
  )
}

export function Achievements() {
  return (
    <section className="px-4 py-24 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <div className="glass overflow-hidden rounded-3xl p-8 sm:p-12">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {ACHIEVEMENTS.map((stat, i) => {
              const Icon = ICONS[i] ?? AppWindow
              return (
                <Reveal key={stat.label} delay={i} className="text-center">
                  <div className="flex flex-col items-center">
                    <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/15 text-primary">
                      <Icon className="h-6 w-6" />
                    </span>
                    <p className="mt-4 text-4xl font-bold tracking-tight text-gradient-accent sm:text-5xl">
                      <Counter value={stat.value} suffix={stat.suffix} />
                    </p>
                    <p className="mt-2 text-sm text-muted-foreground">{stat.label}</p>
                  </div>
                </Reveal>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
