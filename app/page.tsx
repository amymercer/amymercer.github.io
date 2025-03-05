import { Hero } from "@/components/ui/hero"
import { About } from "@/components/ui/about"
import { Experience } from "@/components/ui/experience"
import { Skills } from "@/components/ui/skills"
import { Education } from "@/components/ui/education"
import { Contact } from "@/components/ui/contact"
import { Header } from "@/components/ui/header"
import { Footer } from "@/components/ui/footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-white font-serif">
      <Header />
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Education />
      <Contact />
      <Footer />
    </div>
  )
}

