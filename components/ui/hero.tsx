export function Hero() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center gap-8">
          <img src="/images/amy.png" alt="Amy Mercer" className="rounded-full w-48 h-48 object-cover shadow-lg" />
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6">Amy J. Mercer</h1>
            <p className="text-xl max-w-2xl mx-auto">
              Education professional with over 14 years of experience in special education and literacy, combined with a
              background in digital transformation and business development.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

