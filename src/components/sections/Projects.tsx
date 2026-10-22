import { projects } from '../../data/projects'
import ProjectCard from '../ui/ProjectCard'
import SectionTitle from '../ui/SectionTitle'

export default function Projects() {
  return (
    <section id="projects" className="relative bg-transparent text-foreground py-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <SectionTitle title="My Projects" subtitle="Check out some of my recent work" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
