import { motion } from 'framer-motion'
import SectionHeading from '../components/ui/SectionHeading'
import ProjectCard from '../components/ui/ProjectCard'
import { projects } from '../data/projects'

export default function ProjectsPage() {
  return (
    <div className="pt-24" style={{ background: 'var(--color-bg)' }}>
      <section className="section-padding">
        <div className="section-container">
          <SectionHeading
            label="Portfolio"
            title="All Projects"
            subtitle="A complete collection of projects I've designed, built, and shipped."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {projects.map((project, i) => (
              <ProjectCard key={project.id} project={project} index={i} />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
