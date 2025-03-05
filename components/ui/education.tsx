import { GraduationCap } from "lucide-react"

export function Education() {
  return (
    <section id="education" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Education</h2>
        <div className="max-w-3xl mx-auto space-y-8">
          <EducationItem
            school="Cleveland State University, Cleveland, OH"
            degree="Master of Education, Curriculum & Instruction (2012)"
            details={["GPA: 3.9/4.0", "K-12 Intervention Specialist License – Moderate to Intensive"]}
          />
          <EducationItem
            school="Baldwin-Wallace College, Berea, OH"
            degree="Bachelor of Music, Music Therapy (1997)"
            details={["GPA: 3.6/4.0"]}
          />
        </div>
      </div>
    </section>
  )
}

type EducationItemProps = {
  school: string
  degree: string
  details: string[]
}

function EducationItem({ school, degree, details }: EducationItemProps) {
  return (
    <div>
      <div className="flex items-center mb-2">
        <GraduationCap className="mr-2 h-5 w-5" />
        <h3 className="text-xl font-bold">{school}</h3>
      </div>
      <div className="ml-7">
        <h4 className="text-lg font-semibold">{degree}</h4>
        {details.map((detail, index) => (
          <p key={index}>{detail}</p>
        ))}
      </div>
    </div>
  )
}

