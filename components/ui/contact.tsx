import { Linkedin } from "lucide-react"

export function Contact() {
  return (
    <section id="contact" className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Contact</h2>
        <div className="max-w-md mx-auto">
          <div className="flex items-center justify-center">
            <a
              href="https://www.linkedin.com/in/ohiomusicgirl/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center hover:text-gray-600 transition-colors"
            >
              <Linkedin className="h-10 w-10 mb-2" />
              <span>Connect on LinkedIn</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

