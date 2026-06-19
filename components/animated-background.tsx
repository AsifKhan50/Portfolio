export function AnimatedBackground() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-60" />
      <div className="absolute inset-0 bg-gradient-to-b from-background/0 via-background/40 to-background" />
      <div className="animate-float-slow absolute -top-32 -left-24 h-[480px] w-[480px] rounded-full bg-primary/20 blur-[120px]" />
      <div
        className="animate-float-slow absolute top-1/3 -right-32 h-[420px] w-[420px] rounded-full bg-accent/15 blur-[120px]"
        style={{ animationDelay: "-4s" }}
      />
      <div
        className="animate-float-slow absolute bottom-0 left-1/3 h-[360px] w-[360px] rounded-full bg-chart-4/10 blur-[120px]"
        style={{ animationDelay: "-8s" }}
      />
    </div>
  )
}
