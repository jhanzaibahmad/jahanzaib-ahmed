import Hero from "./components/hero"
import About from "./components/about"
import Skills from "./components/skills"
import Projects from "./components/projects"
import Education from "./components/education"
import Achievements from "./components/achievements"
import Contact from "./components/contact"
import Footer from "./components/footer"
import ThemeProvider from "./components/theme-provider"

export default function Page() {
  return (
    <ThemeProvider>
      <main className="min-h-screen bg-background text-foreground transition-colors duration-300">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Achievements />
        <Contact />
        <Footer />
      </main>
    </ThemeProvider>
  )
}
