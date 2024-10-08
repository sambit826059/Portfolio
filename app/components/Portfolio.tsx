import { Github, Twitter, Linkedin, ExternalLink } from "lucide-react"
import Link from "next/link"

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 p-8">
      <header className="max-w-4xl mx-auto mb-16">
        <h1 className="text-5xl font-bold mb-4 text-cyan-400">Sambit</h1>
        <div className="space-y-2">
          <p className="text-xl text-purple-400">Full Stack Dev.</p>
          <p className="text-xl text-purple-400">Final Year Student.</p>
          <p className="text-xl text-purple-400">Constantly chasing the error.</p>
        </div>
        <div className="flex space-x-4 mt-4">
          <Link href="https://github.com/sambit826059/" className="text-gray-400 hover:text-white">
            <Github className="w-6 h-6" />
          </Link>
          <Link href="https://x.com/Sambit0011" className="text-gray-400 hover:text-white">
            <Twitter className="w-6 h-6" />
          </Link>
          <Link href="https://www.linkedin.com/in/sambit-mohanty-179974222/" className="text-gray-400 hover:text-white">
            <Linkedin className="w-6 h-6" />
          </Link>
          <Link href="https://www.linkedin.com/in/sambit-mohanty-179974222/" className="text-gray-400 hover:text-white">
            <Linkedin className="w-6 h-6" />
          </Link>

        </div>
      </header>

      <main className="max-w-4xl mx-auto space-y-16">
        <section>
          <h2 className="text-3xl font-semibold mb-6 text-green-400">code:skills</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {skills.map((skill) => (
              <div key={skill} className="bg-gray-800 rounded-lg p-3 text-center">
                {skill}
              </div>
            ))}
          </div>
        </section>

        {/* <section> */}
        {/*   <h2 className="text-3xl font-semibold mb-6 text-green-400">code:work</h2> */}
        {/*   <div className="space-y-8"> */}
        {/*     {workExperience.map((job) => ( */}
        {/*       <div key={job.title} className="bg-gray-800 rounded-lg p-6"> */}
        {/*         <h3 className="text-xl font-semibold text-yellow-400">{job.title}</h3> */}
        {/*         <p className="text-purple-400">{job.role}</p> */}
        {/*         <p className="text-sm text-gray-400">{job.period}</p> */}
        {/*         <ul className="list-disc list-inside mt-4 space-y-2"> */}
        {/*           {job.responsibilities.map((resp, index) => ( */}
        {/*             <li key={index}>{resp}</li> */}
        {/*           ))} */}
        {/*         </ul> */}
        {/*         <div className="mt-4 flex flex-wrap gap-2"> */}
        {/*           {job.technologies.map((tech) => ( */}
        {/*             <span key={tech} className="bg-gray-700 rounded px-2 py-1 text-xs"> */}
        {/*               {tech} */}
        {/*             </span> */}
        {/*           ))} */}
        {/*         </div> */}
        {/*       </div> */}
        {/*     ))} */}
        {/*   </div> */}
        {/* </section> */}
        <section>
          <h2 className="text-3xl font-semibold mb-6 text-green-400">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project) => (
              <div key={project.name} className="bg-gray-800 rounded-lg p-6">
                <div className="flex justify-between items-start">
                  <h3 className="text-xl font-semibold text-yellow-400">{project.name}</h3>
                  <div className="flex space-x-2">
                    <Link href={project.github} className="text-gray-400 hover:text-white">
                      <Github className="w-5 h-5" />
                    </Link>
                    {project.deployment && (
                      <Link href={project.deployment} className="text-gray-400 hover:text-white">
                        <ExternalLink className="w-5 h-5" />
                      </Link>
                    )}
                  </div>
                </div>
                <p className="text-purple-400 mt-2">{project.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="bg-gray-700 rounded px-2 py-1 text-xs">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      <footer className="mt-16 text-center text-gray-400">
        <p>adiós</p>
      </footer>
    </div>
  )
}

const skills = [
  "JavaScript",
  "TypScript",
  "Rust",
  "React",
  "Node.js",
  "Next.js",
  "Express",
  "MongoDB",
  "PostgreSQL",
  "prisma",
  "Docker",
  "AWS",
]
/*
const workExperience = [
  {
    title: "Learning Management System",
    role: "Frontend Engineer",
    period: "onsite, India • July 2023 - Dec 2023",
    responsibilities: [
      "Led a subgroup that developed a code editor and compiler to help teachers manage coding assignments and track student progress.",
      "Worked closely with college faculties and student to get their feedback to improve the application",
    ],
    technologies: [
      "JavaScript",
      "TypeScript",
      "Node.js",
      "Express",
      "RESTful API",
      "React.js",
    ],
  },
]
*/

const projects = [
  {
    name: "Blogging App",
    description: "Medium clone.",
    technologies: ["TypeScript", "Cloudflare", "Zod", "Prisma", "Postgres", "JWT"],
    github: "https://github.com/sambit826059/blogging-app",
    deployment: "https://blogging-app-demo.vercel.app", // Add this line (example URL)
  },
  {
    name: "Transaction App",
    description: "A minimalistic payment app.",
    technologies: ["React", "NodeJS", "Zod", "MongoDB", "JWT"],
    github: "https://github.com/sambit826059/transaction-app",

  },
  {
    name: "Armonia",
    description: "Sit back and just vibe to the visuals and music",
    technologies: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/sambit826059/armonia",
    deployment: "https://armonia-demo.netlify.app", // Add this line (example URL)
  },
]
