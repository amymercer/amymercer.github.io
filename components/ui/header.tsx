export function Header() {
  return (
    <header className="border-b border-gray-200">
      <div className="container mx-auto px-4 py-6">
        <nav className="flex justify-between items-center">
          <h1 className="text-2xl font-bold tracking-tight">Amy J. Mercer</h1>
          <div className="space-x-6">
            <a href="#about" className="text-black hover:underline">
              About
            </a>
            <a href="#experience" className="text-black hover:underline">
              Experience
            </a>
            <a href="#skills" className="text-black hover:underline">
              Skills
            </a>
            <a href="#education" className="text-black hover:underline">
              Education
            </a>
            <a href="#contact" className="text-black hover:underline">
              Contact
            </a>
          </div>
        </nav>
      </div>
    </header>
  )
}

