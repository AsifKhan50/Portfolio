import { Mail } from "lucide-react"
import { GithubIcon, LinkedinIcon } from "@/components/brand-icons"
import { PROFILE } from "@/lib/portfolio-data"

export function Footer() {
  return (
    <footer className="border-t border-border px-4 py-10 sm:px-6">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 sm:flex-row">
        <div className="flex items-center gap-2">
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/15 font-mono text-sm font-bold text-gradient-accent">
            AK
          </span>
          <div>
            <p className="text-sm font-semibold text-foreground">{PROFILE.name}</p>
            <p className="text-xs text-muted-foreground">{PROFILE.title}</p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <a
            href={`mailto:${PROFILE.email}`}
            aria-label="Email"
            className="glass flex h-9 w-9 items-center justify-center rounded-lg text-foreground transition-colors hover:text-primary"
          >
            <Mail className="h-4 w-4" />
          </a>
          <a
            href={PROFILE.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="glass flex h-9 w-9 items-center justify-center rounded-lg text-foreground transition-colors hover:text-primary"
          >
            <LinkedinIcon className="h-4 w-4" />
          </a>
          <a
            href={PROFILE.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="glass flex h-9 w-9 items-center justify-center rounded-lg text-foreground transition-colors hover:text-primary"
          >
            <GithubIcon className="h-4 w-4" />
          </a>
        </div>

        <p className="text-center text-xs text-muted-foreground sm:text-right">
          © {new Date().getFullYear()} {PROFILE.name}. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
