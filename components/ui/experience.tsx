import { Briefcase } from "lucide-react"

export function Experience() {
  return (
    <section id="experience" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Professional Experience</h2>
        <div className="max-w-3xl mx-auto space-y-12">
          <ExperienceItem
            company="Elyria City School District, Elyria, OH"
            positions={[
              {
                title: "Moderate/Intensive Intervention Specialist, Westwood Elementary",
                period: "2021 – Present",
                responsibilities: [
                  "Built and maintained relationships with teachers, administrators, and specialists, ensuring alignment with student learning goals.",
                  "Developed and implemented personalized learning plans through IEPs and BIPs, supporting diverse learning needs.",
                  "Served as a mentor to fellow educators, providing guidance on best practices for implementation and student engagement.",
                ],
              },
              {
                title: "Literacy Specialist, Westwood Middle",
                period: "2018 – 2021",
                responsibilities: [
                  "Collaborated with district leadership to implement evidence-based literacy programs, including Read 180 and System 44.",
                  "Served as a liaison between teachers and administrators, identifying and resolving curriculum and engagement challenges.",
                  "Provided consultative support to educators, maximizing the use of technology-driven learning tools.",
                ],
              },
              {
                title: "Mild/Moderate Intervention Specialist, Eastern Heights Middle",
                period: "2013 – 2018",
                responsibilities: [
                  "Designed and executed literacy and special education programs, focusing on improving student engagement and retention.",
                  "Partnered with district leadership to optimize resource allocation and ensure successful implementation of adaptive learning tools.",
                ],
              },
            ]}
          />

          <ExperienceItem
            company="Monarch Center for Autism, Shaker Heights, OH"
            positions={[
              {
                title: "Assistant Program Director (Summer Program)",
                period: "2013",
                responsibilities: [
                  "Managed program execution for 50+ students with autism spectrum disorders, ensuring personalized learning experiences.",
                  "Trained and coached staff and educators on evidence-based teaching practices and behavioral interventions.",
                ],
              },
              {
                title: "Moderate/Intensive Intervention Specialist",
                period: "2012 – 2013",
                responsibilities: [
                  "Developed and implemented individualized curricula and behavioral support plans, leveraging technology-driven interventions.",
                  "Established strong relationships with teachers, therapists, and parents, driving student progress and success.",
                ],
              },
            ]}
          />

          <ExperienceItem
            company="Neighborhood Alliance, Lorain County, OH"
            positions={[
              {
                title: "Digital Transformation Lead & Webmaster",
                period: "2008 – 2012",
                responsibilities: [
                  "Led the migration of donor database CRM software from Blackbaud to Salesforce, improving data management and fundraising efficiency.",
                  "Managed a marketing newsletter program via Constant Contact, driving community engagement and donor retention.",
                  "Greenfielded a WordPress website project that remains in use today, ensuring long-term accessibility and functionality.",
                ],
              },
            ]}
          />

          <ExperienceItem
            company="Plantrex, An Interior Landscaping Co."
            positions={[
              {
                title: "Co-Founder, Technology Manager",
                period: "1997 – 2007",
                responsibilities: [
                  "Co-founded Plantrex, scaling it from $0 to $3 million in ARR within the first five years, making it one of the largest online floral retailers in the U.S., behind only FTD and Teleflora.",
                  "Created and managed the first PPC advertising program for the company in both the U.S. and Canada, with an annual budget of $250K, increasing customer acquisition and brand visibility.",
                  "Led the design and development of the company's first floral e-commerce website, utilizing Microsoft FrontPage and early e-commerce solutions, pioneering online floral sales prior to exit in 2007.",
                ],
              },
            ]}
          />
        </div>
      </div>
    </section>
  )
}

type Position = {
  title: string
  period: string
  responsibilities: string[]
}

type ExperienceItemProps = {
  company: string
  positions: Position[]
}

function ExperienceItem({ company, positions }: ExperienceItemProps) {
  return (
    <div>
      <div className="flex items-center mb-2">
        <Briefcase className="mr-2 h-5 w-5" />
        <h3 className="text-xl font-bold">{company}</h3>
      </div>

      {positions.map((position, index) => (
        <div key={index} className="ml-7 mb-6 last:mb-0">
          <h4 className="text-lg font-semibold">{position.title}</h4>
          <p className="text-sm text-gray-600 mb-2">{position.period}</p>
          <ul className="list-disc ml-6 space-y-1">
            {position.responsibilities.map((responsibility, idx) => (
              <li key={idx}>{responsibility}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  )
}

