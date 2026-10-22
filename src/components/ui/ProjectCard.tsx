import { motion } from 'framer-motion'
import type { Project } from '../../types/portfolio'

export default function ProjectCard({ project, index }: { project: Project; index: number }) {
  const year = new Date(project.createdAt).getFullYear().toString()
  const isPrivateBuild = project.name === 'SynapseCMS'

  return (
    <motion.div
      className="group bg-black/40 backdrop-blur-sm rounded-2xl overflow-hidden border border-border-subtle hover:border-primary/50 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/20 flex flex-col"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: (index % 3) * 0.1 }}
    >
      <div className="relative h-48 overflow-hidden bg-surface">
        <img
          src={project.image}
          alt={project.name}
          loading="lazy"
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
      </div>

      <div className="p-6 flex flex-col flex-1">
        <div className="mb-3">
          <h3 className="text-xl font-bold text-foreground group-hover:text-primary-soft transition-colors text-center mb-2">
            {project.name}
          </h3>
          <span className="text-sm font-medium block text-center text-muted">{year}</span>
        </div>

        <p className="text-sm mb-4 leading-relaxed line-clamp-4 text-muted-strong flex-1">
          {project.description}
        </p>

        {project.technologies.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 text-xs font-medium rounded-full bg-surface-raised/80 text-muted-strong border border-border"
              >
                {tech}
              </span>
            ))}
          </div>
        )}

        <div className="flex gap-3 pt-4 border-t border-border mt-auto">
          {isPrivateBuild ? (
            <button
              type="button"
              disabled
              className="flex-1 text-center px-4 py-2 bg-surface-raised text-muted rounded-lg text-sm font-medium border border-border min-w-0 cursor-not-allowed"
            >
              Private Build
            </button>
          ) : (
            <a
              href={project.htmlUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 text-center px-4 py-2 bg-surface-raised hover:bg-border text-foreground rounded-lg text-sm font-medium transition-colors border border-border hover:border-primary/50 min-w-0"
            >
              GitHub
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 text-center px-4 py-2 bg-primary-strong hover:bg-primary-hover text-on-primary rounded-lg text-sm font-medium transition-colors min-w-0"
            >
              Try it
            </a>
          )}
        </div>
      </div>
    </motion.div>
  )
}
