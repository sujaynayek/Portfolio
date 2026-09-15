import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, Download, Mail, MapPin } from 'lucide-react'
import SectionHeading from '../components/ui/SectionHeading'
import { profile } from '../data/config'
import { skillCategories } from '../data/skills'
import { FaGithub, FaLinkedin } from "react-icons/fa";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.6, delay: i * 0.08, ease: 'easeOut' },
  }),
}

const socialLinks = [
  { icon: FaGithub, href: profile.github, label: 'GitHub' },
  { icon: FaLinkedin, href: profile.linkedin, label: 'LinkedIn' },
  { icon: Mail, href: `mailto:${profile.email}`, label: 'Email' },
]

const quickStats = [
  { number: '1+', label: 'Years of Experience' },
  { number: '10+', label: 'Projects Completed' },
  { number: '10+', label: 'Technologies Mastered' },
  { number: '2', label: 'Companies Worked At' },
]

export default function AboutPage() {
  return (
    <div className="pt-24" style={{ background: 'var(--color-bg)' }}>
      {/* Hero */}
      <section className="section-padding">
        <div className="section-container">
          <motion.div
            className="max-w-3xl"
            variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}
            initial="hidden"
            animate="visible"
          >
            <motion.span variants={fadeUp} className="section-label">About Me</motion.span>
            <motion.h1
              variants={fadeUp}
              className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mt-2 mb-6"
              style={{ color: 'var(--color-text)' }}
            >
              Passionate about building{' '}
              <span className="gradient-text">great software</span>
            </motion.h1>
            <motion.p
              variants={fadeUp}
              className="text-lg leading-relaxed max-w-2xl"
              style={{ color: 'var(--color-text-secondary)' }}
            >
              {profile.longBio}
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Two-column layout */}
      <section className="section-padding" style={{ background: 'var(--color-surface)' }}>
        <div className="section-container">
          <div className="flex flex-col lg:flex-row gap-14">
            {/* Left: Image */}
            <motion.div
              className="flex-shrink-0"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div
                className="relative w-full max-w-sm mx-auto lg:mx-0 lg:w-72 xl:w-80 aspect-[4/5] rounded-2xl overflow-hidden"
                style={{ border: '1px solid var(--color-border)' }}
              >
                <img
                  src={profile.image}
                  alt={profile.name}
                  className="w-full h-full object-cover"
                  onError={e => {
                    e.currentTarget.style.display = 'none'
                    const p = e.currentTarget.parentElement
                    p.classList.add('img-placeholder')
                    p.innerHTML = `<div style="display:flex;flex-direction:column;align-items:center;justify-content:center;height:100%;gap:8px;color:#475569;"><svg xmlns='http://www.w3.org/2000/svg' width='48' height='48' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='1'><path d='M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2'/><circle cx='12' cy='7' r='4'/></svg><span style='font-size:12px'>Your Photo Here</span></div>`
                  }}
                />
              </div>

              {/* Social links */}
              <div className="flex items-center gap-3 mt-5 justify-center lg:justify-start">
                {socialLinks.map(({ icon: Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    target={href.startsWith('mailto') ? undefined : '_blank'}
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="w-9 h-9 flex items-center justify-center rounded-lg transition-all duration-200"
                    style={{ border: '1px solid var(--color-border)', color: 'var(--color-text-secondary)' }}
                    onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(99,102,241,0.4)'; e.currentTarget.style.color = '#fff'; e.currentTarget.style.background = 'rgba(99,102,241,0.08)' }}
                    onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--color-border)'; e.currentTarget.style.color = 'var(--color-text-secondary)'; e.currentTarget.style.background = 'transparent' }}
                  >
                    <Icon size={16} />
                  </a>
                ))}
                <a
                  href={profile.resume}
                  download
                  className="btn btn-outline text-xs px-3 py-2"
                >
                  <Download size={14} />
                  Resume
                </a>
              </div>
            </motion.div>

            {/* Right: Content */}
            <motion.div
              className="flex-1 space-y-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div>
                <h2 className="text-2xl font-display font-bold mb-3" style={{ color: 'var(--color-text)' }}>
                  My Story
                </h2>
                <div className="space-y-4 text-sm leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>
                  <p>
                    I'm a Full-Stack Developer based in Kolkata, India, specializing in the MERN stack. I have over a year of professional experience building production-grade web applications and backend systems.
                  </p>
                  <p>
                    Currently working as a Backend Developer at Dailygig Ventures, where I independently own core modules including authentication systems, microservices architecture, and performance optimization using Redis caching.
                  </p>
                  <p>
                    Beyond backend engineering, I'm deeply interested in AI and LLM application development — exploring RAG pipelines, LangChain, and OpenAI integrations to build intelligent applications.
                  </p>
                </div>
              </div>

              <blockquote
                className="pl-5 py-2 italic text-sm"
                style={{ borderLeft: '3px solid var(--color-primary)', color: 'var(--color-text)' }}
              >
                "{profile.philosophy}"
              </blockquote>

              <div className="flex items-center gap-2 text-sm" style={{ color: 'var(--color-text-muted)' }}>
                <MapPin size={14} style={{ color: 'var(--color-primary)' }} />
                {profile.location}
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4" style={{ borderTop: '1px solid var(--color-border)' }}>
                {quickStats.map(({ number, label }, i) => (
                  <div key={label} className="text-center">
                    <p className="text-2xl font-display font-bold gradient-text">{number}</p>
                    <p className="text-xs mt-1 leading-tight" style={{ color: 'var(--color-text-muted)' }}>{label}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Full Tech Stack */}
      <section className="section-padding" style={{ background: 'var(--color-bg)' }}>
        <div className="section-container">
          <SectionHeading label="Capabilities" title="Full Tech Stack" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {skillCategories.map((cat, ci) => (
              <motion.div
                key={cat.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: ci * 0.07 }}
                className="card p-5"
              >
                <h3 className="text-sm font-semibold mb-3" style={{ color: 'var(--color-primary)' }}>
                  {cat.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map(s => (
                    <span key={s.name} className="tag">{s.name}</span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding" style={{ background: 'var(--color-surface)' }}>
        <div className="section-container">
          <motion.div
            className="max-w-xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-display font-bold mb-4" style={{ color: 'var(--color-text)' }}>
              Interested in working together?
            </h2>
            <p className="text-sm mb-8" style={{ color: 'var(--color-text-secondary)' }}>
              I'm open to full-time opportunities, freelance projects, and interesting collaborations.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <Link to="/contact" className="btn btn-primary">
                Get In Touch <ArrowRight size={16} />
              </Link>
              <Link to="/projects" className="btn btn-outline">
                View My Work
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
