import { Github, Twitter, Linkedin, ExternalLink } from "lucide-react"
import Link from "next/link"

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-[#16213e] text-[#f5f5f5] p-4 md:p-8">
      <div className="max-w-6xl mx-auto">
        <header className="mb-16 md:flex md:items-center md:justify-between">
          <div>
            <h1 className="text-5xl md:text-7xl font-bold mb-4 text-[#e94560] font-serif">Sambit</h1>
            <div className="space-y-2">
              <p className="text-xl text-[#f5f5f5]">Full Stack Dev.</p>
              <p className="text-xl text-[#f5f5f5]">Final Year Student.</p>
              <p className="text-xl text-[#f5f5f5]">Constantly chasing the error.</p>
            </div>
          </div>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link href="https://github.com/sambit826059/" className="text-[#f5f5f5] hover:text-[#e94560] transition-colors">
              <Github className="w-8 h-8" />
            </Link>
            <Link href="https://x.com/Sambit0011" className="text-[#f5f5f5] hover:text-[#e94560] transition-colors">
              <Twitter className="w-8 h-8" />
            </Link>
            <Link href="https://www.linkedin.com/in/sambit-mohanty-179974222/" className="text-[#f5f5f5] hover:text-[#e94560] transition-colors">
              <Linkedin className="w-8 h-8" />
            </Link>
          </div>
        </header>

        <main className="space-y-16">
          <section>
            <h2 className="text-3xl font-semibold mb-6 text-[#e94560]">code:skills</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {skills.map((skill) => (
                <div key={skill} className="bg-[#0f3460] rounded-lg p-3 text-center hover:bg-[#e94560] hover:text-[#16213e] transition-colors">
                  {skill}
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-semibold mb-6 text-[#e94560]">Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {projects.map((project) => (
                <div key={project.name} className="bg-[#0f3460] rounded-lg p-6 hover:shadow-lg transition-shadow">
                  <div className="flex justify-between items-start">
                    <h3 className="text-xl font-semibold text-[#e94560]">{project.name}</h3>
                    <div className="flex space-x-2">
                      <Link href={project.github} className="text-[#f5f5f5] hover:text-[#e94560] transition-colors">
                        <Github className="w-5 h-5" />
                      </Link>
                      {project.deployment && (
                        <Link href={project.deployment} className="text-[#f5f5f5] hover:text-[#e94560] transition-colors">
                          <ExternalLink className="w-5 h-5" />
                        </Link>
                      )}
                    </div>
                  </div>
                  <p className="text-[#f5f5f5] mt-2">{project.description}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="bg-[#16213e] text-[#f5f5f5] rounded px-2 py-1 text-xs">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>
        </main>

        <footer className="mt-16 text-center text-[#f5f5f5]">
          <p>adiós</p>
        </footer>
      </div>
    </div>
  )
}

const skills = [
  "JavaScript",
  "TypeScript",
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

const projects = [
  {
    name: "Blogging App",
    description: "Medium clone.",
    technologies: ["TypeScript", "Cloudflare", "Zod", "Prisma", "Postgres", "JWT"],
    github: "https://github.com/sambit826059/blogging-app",
    deployment: "https://blogging-app-demo.vercel.app",
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
    deployment: "https://armonia-seven.vercel.app/",
  },
]
