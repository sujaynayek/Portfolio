import { useParams, Link, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowLeft, ExternalLink, CheckCircle, Zap } from 'lucide-react'
import { projects } from '../data/projects'
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function ProjectDetails() {
  const { id } = useParams()
  const navigate = useNavigate()
  const project = projects.find(p => p.id === id)

  if (!project) {
    return (
      <div
        className="min-h-screen flex flex-col items-center justify-center gap-5 pt-24"
        style={{ background: 'var(--color-bg)' }}
      >
        <h1 className="text-3xl font-display font-bold" style={{ color: 'var(--color-text)' }}>
          Project Not Found
        </h1>
        <Link to="/projects" className="btn btn-primary">
          <ArrowLeft size={16} /> Back to Projects
        </Link>
      </div>
    )
  }

  const nextProject = projects[(projects.findIndex(p => p.id === id) + 1) % projects.length]

  return (
    <div className="pt-36 pb-12" style={{ background: 'var(--color-bg)' }}>
      {/* Back button */}
      <div className="section-container pt-8">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-sm font-medium mb-8 transition-colors duration-200"
          style={{ color: 'var(--color-text-secondary)' }}
          onMouseEnter={e => e.currentTarget.style.color = 'var(--color-text)'}
          onMouseLeave={e => e.currentTarget.style.color = 'var(--color-text-secondary)'}
        >
          <ArrowLeft size={16} />
          Back
        </button>
      </div>

      {/* Hero image */}
      <motion.div
        className="section-container mb-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div
          className="relative w-full aspect-video rounded-2xl overflow-hidden"
          style={{ border: '1px solid var(--color-border)' }}
        >
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
            onError={e => {
              e.currentTarget.style.display = 'none'
              const p = e.currentTarget.parentElement
              p.innerHTML = `<div class="img-placeholder w-full h-full" style="background:linear-gradient(135deg,#1a1a2e,#16213e,#0f3460);display:flex;flex-direction:column;align-items:center;justify-content:center;gap:12px;height:100%"><div style="font-size:3rem;font-weight:700;color:#6366f1;font-family:Syne,sans-serif">${project.number}</div><div style="font-size:1.25rem;font-weight:600;color:#f8fafc">${project.title}</div><div style="color:#475569;font-size:0.875rem">${project.category}</div></div>`
            }}
          />
          <div
            className="absolute inset-0 pointer-events-none"
            style={{ background: 'linear-gradient(to top, rgba(10,10,15,0.7), transparent 50%)' }}
          />
          {/* Overlay info */}
          <div className="absolute bottom-6 left-6 right-6">
            <span className="badge mb-2">{project.category}</span>
            <h1 className="text-2xl md:text-3xl font-display font-bold" style={{ color: '#fff' }}>
              {project.title}
            </h1>
            <p className="text-sm mt-1" style={{ color: 'rgba(255,255,255,0.7)' }}>{project.subtitle}</p>
          </div>
        </div>
      </motion.div>

      {/* Content */}
      <div className="section-container pb-20">
        <div className="flex flex-col lg:flex-row gap-10">

          {/* Main content */}
          <motion.div
            className="flex-1 space-y-10 pt-5"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            {/* Overview */}
            <section>
              <h2 className="text-xl font-display font-bold mb-3" style={{ color: 'var(--color-text)' }}>
                Overview
              </h2>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>
                {project.overview}
              </p>
            </section>

            {/* Problem & Solution */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div
                className="card p-5"
                style={{ borderColor: 'rgba(239,68,68,0.2)', background: 'rgba(239,68,68,0.04)' }}
              >
                <h3 className="font-display font-bold mb-2" style={{ color: '#fca5a5' }}>The Problem</h3>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>
                  {project.problem}
                </p>
              </div>
              <div
                className="card p-5"
                style={{ borderColor: 'rgba(34,197,94,0.2)', background: 'rgba(34,197,94,0.04)' }}
              >
                <h3 className="font-display font-bold mb-2" style={{ color: '#86efac' }}>The Solution</h3>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>
                  {project.solution}
                </p>
              </div>
            </div>

            {/* Key Features */}
            <section>
              <h2 className="text-xl font-display font-bold mb-4" style={{ color: 'var(--color-text)' }}>
                Key Features
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {project.keyFeatures.map((feature, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle size={16} className="flex-shrink-0 mt-0.5" style={{ color: 'var(--color-primary)' }} />
                    <span className="text-sm" style={{ color: 'var(--color-text-secondary)' }}>{feature}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Architecture */}
            <section>
              <h2 className="text-xl font-display font-bold mb-3" style={{ color: 'var(--color-text)' }}>
                Technical Architecture
              </h2>
              <div
                className="card p-5"
                style={{ borderColor: 'rgba(99,102,241,0.2)', background: 'rgba(99,102,241,0.04)' }}
              >
                <p className="text-sm leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>
                  {project.architecture}
                </p>
              </div>
            </section>

            {/* Challenges */}
            <section>
              <h2 className="text-xl font-display font-bold mb-4" style={{ color: 'var(--color-text)' }}>
                Challenges
              </h2>
              <ul className="space-y-3">
                {project.challenges.map((c, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Zap size={15} className="flex-shrink-0 mt-0.5" style={{ color: '#fbbf24' }} />
                    <span className="text-sm" style={{ color: 'var(--color-text-secondary)' }}>{c}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Results */}
            <section>
              <h2 className="text-xl font-display font-bold mb-4" style={{ color: 'var(--color-text)' }}>
                Results
              </h2>
              <ul className="space-y-3">
                {project.results.map((r, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle size={15} className="flex-shrink-0 mt-0.5" style={{ color: '#22c55e' }} />
                    <span className="text-sm" style={{ color: 'var(--color-text-secondary)' }}>{r}</span>
                  </li>
                ))}
              </ul>
            </section>
          </motion.div>

          {/* Sidebar */}
          <motion.aside
            className="lg:w-64 xl:w-72 space-y-5 pt-5"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* Tech Stack */}
            <div className="card p-5">
              <h3 className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: 'var(--color-text-muted)' }}>
                Technologies
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map(t => <span key={t} className="tag">{t}</span>)}
              </div>
            </div>

            {/* Links */}
            <div className="card p-5 space-y-3">
              <h3 className="text-sm font-semibold uppercase tracking-widest mb-2" style={{ color: 'var(--color-text-muted)' }}>
                Links
              </h3>
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline w-full justify-center text-sm"
              >
                <FaGithub size={16} />
                View Source
              </a>
              <a
                href={project.liveDemo}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary w-full justify-center text-sm"
              >
                <ExternalLink size={16} />
                Live Demo
              </a>
            </div>

            {/* Next Project */}
            {nextProject && (
              <div className="card p-5">
                <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: 'var(--color-text-muted)' }}>
                  Next Project
                </p>
                <Link
                  to={`/projects/${nextProject.id}`}
                  className="group flex flex-col gap-2"
                >
                  <div
                    className="aspect-video rounded-lg overflow-hidden"
                    style={{ background: 'var(--color-surface)' }}
                  >
                    <img
                      src={nextProject.image}
                      alt={nextProject.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      onError={e => {
                        e.currentTarget.style.display = 'none'
                        e.currentTarget.parentElement.innerHTML = `<div style="display:flex;align-items:center;justify-content:center;height:100%;background:linear-gradient(135deg,#1a1a2e,#16213e);font-size:1.5rem;font-weight:700;color:#6366f1;font-family:Syne,sans-serif">${nextProject.number}</div>`
                      }}
                    />
                  </div>
                  <p className="text-sm font-semibold transition-colors duration-200 group-hover:text-indigo-400" style={{ color: 'var(--color-text)' }}>
                    {nextProject.title}
                  </p>
                </Link>
              </div>
            )}
          </motion.aside>
        </div>
      </div>
    </div>
  )
}
