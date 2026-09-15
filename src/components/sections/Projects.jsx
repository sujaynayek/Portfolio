import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import SectionHeading from '../ui/SectionHeading'
import ProjectCard from '../ui/ProjectCard'
import { projects } from '../../data/projects'

export default function Projects() {
  const featured = projects.slice(0, 3)

  return (
    <section id="projects" className="section-padding" style={{ background: 'var(--color-bg)' }}>
      <div className="section-container">
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 mb-12">
          <SectionHeading
            label="Work"
            title="Featured Projects"
            subtitle="A selection of projects I've designed and developed."
            className="mb-0"
          />
          <Link
            to="/projects"
            className="flex items-center gap-2 text-sm font-medium flex-shrink-0 transition-all duration-200 group"
            style={{ color: 'var(--color-primary)' }}
          >
            View All
            <ArrowRight size={16} className="transition-transform duration-200 group-hover:translate-x-1" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {featured.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
