import projectsData from "@/data/projects"
import { ProjectCard } from "./project-card"

export function ProjectList() {
  return (
    <section className="py-12">
      <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
        {projectsData.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </section>
  )
}
