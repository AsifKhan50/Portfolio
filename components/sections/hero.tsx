"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { ArrowRight, Mail, MapPin, Sparkles } from "lucide-react"
import { GithubIcon, LinkedinIcon } from "@/components/brand-icons"
import { PROFILE } from "@/lib/portfolio-data"

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 1.5 } },
}
const item = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] } },
}

export function Hero() {
  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })

  return (
    <section className="relative flex min-h-screen items-center px-4 pt-28 pb-16 sm:px-6">
      <div className="mx-auto grid w-full max-w-6xl items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
        <motion.div variants={container} initial="hidden" animate="visible">
          <motion.span
            variants={item}
            className="inline-flex items-center gap-2 rounded-full border border-border bg-card/40 px-3 py-1 text-xs text-muted-foreground"
          >
            <Sparkles className="h-3.5 w-3.5 text-primary" />
            Available for consulting engagements
          </motion.span>

          <motion.h1
            variants={item}
            className="mt-6 text-balance text-4xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl"
          >
            <span className="text-gradient">{PROFILE.name}</span>
          </motion.h1>

          <motion.div variants={item} className="mt-4 space-y-1">
            <p className="text-xl font-semibold text-foreground sm:text-2xl">
              {PROFILE.title}
            </p>
            <p className="font-mono text-sm uppercase tracking-[0.2em] text-primary">
              {PROFILE.subtitle}
            </p>
          </motion.div>

          <motion.p
            variants={item}
            className="mt-6 max-w-xl text-pretty leading-relaxed text-muted-foreground"
          >
            {PROFILE.tagline}
          </motion.p>
          <motion.p
            variants={item}
            className="mt-3 max-w-xl text-pretty leading-relaxed text-muted-foreground/80"
          >
            {PROFILE.intro}
          </motion.p>

          <motion.div variants={item} className="mt-8 flex flex-wrap items-center gap-3">
            <button
              onClick={() => scrollTo("projects")}
              className="group inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition-transform hover:scale-[1.03]"
            >
              View Projects
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </button>
            <button
              onClick={() => scrollTo("contact")}
              className="glass inline-flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-medium text-foreground transition-colors hover:border-primary/50"
            >
              <Mail className="h-4 w-4" />
              Contact Me
            </button>
          </motion.div>

          <motion.div variants={item} className="mt-8 flex items-center gap-4 text-muted-foreground">
            <span className="inline-flex items-center gap-1.5 text-sm">
              <MapPin className="h-4 w-4 text-primary" />
              {PROFILE.location}
            </span>
            <span className="h-4 w-px bg-border" />
            <a href={PROFILE.linkedin} target="_blank" rel="noreferrer" className="transition-colors hover:text-primary" aria-label="LinkedIn">
              <LinkedinIcon className="h-5 w-5" />
            </a>
            <a href={PROFILE.github} target="_blank" rel="noreferrer" className="transition-colors hover:text-primary" aria-label="GitHub">
              <GithubIcon className="h-5 w-5" />
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 1.6, ease: "easeOut" }}
          className="relative mx-auto w-full max-w-sm"
        >
          <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-tr from-primary/30 via-accent/15 to-transparent blur-2xl" />
          <div className="glass glow-ring relative overflow-hidden rounded-[1.75rem] p-2">
            <Image
              src="/profile.jpeg"
              alt="Portrait of Asif Khan, Microsoft Power Platform Developer"
              width={520}
              height={620}
              priority
              className="h-auto w-full rounded-[1.4rem] object-cover"
            />
            <div className="absolute inset-2 rounded-[1.4rem] ring-1 ring-inset ring-white/10" />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.1 }}
            className="glass absolute -bottom-5 -left-5 rounded-2xl px-4 py-3"
          >
            <p className="text-2xl font-bold text-gradient-accent">{PROFILE.yearsExperience}</p>
            <p className="text-xs text-muted-foreground">Years building on Power Platform</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
