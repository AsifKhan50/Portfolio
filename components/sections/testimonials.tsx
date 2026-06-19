"use client"

import { useCallback, useEffect, useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"
import { SectionHeading } from "@/components/section-heading"
import { TESTIMONIALS } from "@/lib/portfolio-data"
import { cn } from "@/lib/utils"

export function Testimonials() {
  const [index, setIndex] = useState(0)
  const [dir, setDir] = useState(1)

  const paginate = useCallback((d: number) => {
    setDir(d)
    setIndex((prev) => (prev + d + TESTIMONIALS.length) % TESTIMONIALS.length)
  }, [])

  useEffect(() => {
    const t = setInterval(() => paginate(1), 6000)
    return () => clearInterval(t)
  }, [paginate])

  const t = TESTIMONIALS[index]

  return (
    <section className="px-4 py-24 sm:px-6">
      <div className="mx-auto max-w-4xl">
        <SectionHeading
          eyebrow="Testimonials"
          title="Trusted by the people I build for"
        />

        <div className="relative mt-14">
          <div className="glass min-h-[280px] overflow-hidden rounded-3xl p-8 sm:p-12">
            <Quote className="h-10 w-10 text-primary/40" />
            <AnimatePresence mode="wait" custom={dir}>
              <motion.blockquote
                key={index}
                custom={dir}
                initial={{ opacity: 0, x: dir * 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: dir * -40 }}
                transition={{ duration: 0.4 }}
              >
                <p className="mt-4 text-balance text-lg leading-relaxed text-foreground sm:text-xl">
                  {t.quote}
                </p>
                <footer className="mt-6">
                  <p className="font-semibold text-foreground">{t.name}</p>
                  <p className="text-sm text-muted-foreground">{t.role}</p>
                </footer>
              </motion.blockquote>
            </AnimatePresence>
          </div>

          <div className="mt-6 flex items-center justify-center gap-4">
            <button
              onClick={() => paginate(-1)}
              aria-label="Previous testimonial"
              className="glass flex h-10 w-10 items-center justify-center rounded-full text-foreground transition-colors hover:text-primary"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>

            <div className="flex items-center gap-2">
              {TESTIMONIALS.map((_, i) => (
                <button
                  key={i}
                  aria-label={`Go to testimonial ${i + 1}`}
                  onClick={() => {
                    setDir(i > index ? 1 : -1)
                    setIndex(i)
                  }}
                  className={cn(
                    "h-1.5 rounded-full transition-all",
                    i === index ? "w-6 bg-primary" : "w-1.5 bg-muted-foreground/40",
                  )}
                />
              ))}
            </div>

            <button
              onClick={() => paginate(1)}
              aria-label="Next testimonial"
              className="glass flex h-10 w-10 items-center justify-center rounded-full text-foreground transition-colors hover:text-primary"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
