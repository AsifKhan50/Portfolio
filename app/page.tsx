import { AnimatedBackground } from "@/components/animated-background"
import { LoadingScreen } from "@/components/loading-screen"
import { Navbar } from "@/components/navbar"
import { ScrollToTop } from "@/components/scroll-to-top"
import { Hero } from "@/components/sections/hero"
import { About } from "@/components/sections/about"
import { Skills } from "@/components/sections/skills"
import { Projects } from "@/components/sections/projects"
import { Experience } from "@/components/sections/experience"
import { Certifications } from "@/components/sections/certifications"
import { Achievements } from "@/components/sections/achievements"
import { Testimonials } from "@/components/sections/testimonials"
import { Contact } from "@/components/sections/contact"
import { Footer } from "@/components/footer"

export default function Page() {
  return (
    <>
      <LoadingScreen />
      <AnimatedBackground />
      <Navbar />
      <ScrollToTop />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Certifications />
        <Achievements />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
