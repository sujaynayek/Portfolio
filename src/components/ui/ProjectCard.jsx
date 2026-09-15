import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ExternalLink, ArrowRight } from 'lucide-react'
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function ProjectCard({ project, index = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.55, delay: index * 0.08 }}
      className="card group flex flex-col overflow-hidden transition-all duration-300 hover:translate-y-[-3px]"
      style={{ borderColor: 'var(--color-border)' }}
      onMouseEnter={e => e.currentTarget.style.borderColor = 'rgba(99,102,241,0.3)'}
      onMouseLeave={e => e.currentTarget.style.borderColor = 'var(--color-border)'}
    >
      {/* Image */}
      <div className="relative overflow-hidden aspect-video bg-[#16161f]">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          onError={e => {
            e.currentTarget.style.display = 'none'
            const parent = e.currentTarget.parentElement
            parent.innerHTML = `
              <div class="img-placeholder w-full h-full flex flex-col items-center justify-center gap-2" style="background:linear-gradient(135deg,#1a1a2e,#16213e);height:100%">
                <div style="width:48px;height:48px;border-radius:12px;background:rgba(99,102,241,0.15);display:flex;align-items:center;justify-content:center;font-size:18px;font-weight:700;color:#6366f1;">${project.number}</div>
                <span style="font-size:11px;color:#475569;font-weight:500;">${project.category}</span>
              </div>
            `
          }}
        />
        {/* Project number overlay */}
        <div
          className="absolute top-3 left-3 w-8 h-8 rounded-lg flex items-center justify-center text-xs font-bold"
          style={{ background: 'rgba(10,10,15,0.7)', color: 'var(--color-primary)', backdropFilter: 'blur(8px)' }}
        >
          {project.number}
        </div>
        {/* Category */}
        <div
          className="absolute top-3 right-3 px-2.5 py-1 rounded-lg text-xs font-medium"
          style={{ background: 'rgba(10,10,15,0.7)', color: 'var(--color-text-secondary)', backdropFilter: 'blur(8px)' }}
        >
          {project.category}
        </div>
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-1 gap-3">
        <h3 className="text-lg font-display font-bold" style={{ color: 'var(--color-text)' }}>
          {project.title}
        </h3>
        <p className="text-sm leading-relaxed line-clamp-2 flex-1" style={{ color: 'var(--color-text-secondary)' }}>
          {project.shortDescription}
        </p>

        {/* Tech tags */}
        <div className="flex flex-wrap gap-1.5 mt-1">
          {project.technologies.slice(0, 4).map((tech) => (
            <span key={tech} className="tag">{tech}</span>
          ))}
          {project.technologies.length > 4 && (
            <span className="tag">+{project.technologies.length - 4}</span>
          )}
        </div>

        {/* Action buttons */}
        <div
          className="flex items-center justify-between pt-3 mt-auto"
          style={{ borderTop: '1px solid var(--color-border)' }}
        >
          <div className="flex items-center gap-2">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${project.title} GitHub`}
              className="w-8 h-8 flex items-center justify-center rounded-lg transition-all duration-200"
              style={{ border: '1px solid var(--color-border)', color: 'var(--color-text-secondary)' }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(99,102,241,0.4)'; e.currentTarget.style.color = '#fff' }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--color-border)'; e.currentTarget.style.color = 'var(--color-text-secondary)' }}
            >
              <FaGithub size={14} />
            </a>
            <a
              href={project.liveDemo}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${project.title} live demo`}
              className="w-8 h-8 flex items-center justify-center rounded-lg transition-all duration-200"
              style={{ border: '1px solid var(--color-border)', color: 'var(--color-text-secondary)' }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(99,102,241,0.4)'; e.currentTarget.style.color = '#fff' }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--color-border)'; e.currentTarget.style.color = 'var(--color-text-secondary)' }}
            >
              <ExternalLink size={14} />
            </a>
          </div>

          <Link
            to={`/projects/${project.id}`}
            className="flex items-center gap-1.5 text-xs font-medium transition-all duration-200 group/link"
            style={{ color: 'var(--color-primary)' }}
          >
            View Details
            <ArrowRight size={13} className="transition-transform duration-200 group-hover/link:translate-x-1" />
          </Link>
        </div>
      </div>
    </motion.div>
  )
}
