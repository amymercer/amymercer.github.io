export function Skills() {
  return (
    <section id="skills" className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Skills</h2>
        <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <SkillCategory
            title="Education"
            skills={[
              "SpED Data Analysis",
              "Literacy Strategies",
              "IEP/504 Development",
              "Curriculum Design",
              "Student Assessment",
            ]}
          />
          <SkillCategory
            title="Business"
            skills={["Digital Transformation", "CRM Migration", "Mentorship", "Project Management", "Team Leadership"]}
          />
          <SkillCategory
            title="Software"
            skills={[
              "Salesforce CRM",
              "WordPress",
              "Constant Contact",
              "Microsoft Office Suite",
              "Microsoft Advertising",
            ]}
          />
        </div>
      </div>
    </section>
  )
}

type SkillCategoryProps = {
  title: string
  skills: string[]
}

function SkillCategory({ title, skills }: SkillCategoryProps) {
  return (
    <div className="border border-gray-200 p-6 rounded-lg">
      <h3 className="text-xl font-bold mb-4">{title}</h3>
      <ul className="space-y-2">
        {skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </div>
  )
}

