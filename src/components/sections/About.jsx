import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { profile } from '../../data/config'
import SectionHeading from '../ui/SectionHeading'
import Image2 from "../../asset/Image2.jpg"


const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

const stats = [
  { number: '01+', label: 'Years Experience' },
  { number: '10+', label: 'Projects Built' },
  { number: '10+', label: 'Technologies' },
  { number: '100%', label: 'Dedication' },
]

export default function About() {
  return (
    <section id="about" className="section-padding" style={{ background: 'var(--color-surface)' }}>
      <div className="section-container">
        <div className="flex flex-col lg:flex-row items-start gap-14 lg:gap-20">

          {/* Left: Image */}
          <motion.div
            className="flex-shrink-0 w-full lg:w-auto"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            <div
              className="relative w-full max-w-sm mx-auto lg:mx-0 lg:w-72 xl:w-80 aspect-[4/5] rounded-2xl overflow-hidden"
              style={{ border: '1px solid var(--color-border)' }}
            >
              <img
                src={Image2}
                alt={`${profile.name} profile`}
                className="w-full h-full object-cover"
                onError={e => {
                  e.currentTarget.style.display = 'none'
                  const parent = e.currentTarget.parentElement
                  parent.classList.add('img-placeholder')
                  parent.innerHTML = `<div style="display:flex;flex-direction:column;align-items:center;justify-content:center;height:100%;gap:8px;color:#475569;">
                    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                    <span style="font-size:12px">Your Photo Here</span>
                  </div>`
                }}
              />
              {/* Corner accent */}
              <div
                className="absolute top-0 left-0 w-16 h-16"
                style={{
                  background: 'linear-gradient(135deg, rgba(99,102,241,0.3), transparent)',
                  borderRadius: '0 0 100% 0',
                }}
              />
            </div>
          </motion.div>

          {/* Right: Content */}
          <div className="flex-1">
            <SectionHeading label="About Me" title="Who I Am" />

            <motion.div
              className="space-y-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <p className="text-base leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>
                {profile.longBio}
              </p>

              <blockquote
                className="pl-4 my-6 italic text-base"
                style={{
                  borderLeft: '3px solid var(--color-primary)',
                  color: 'var(--color-text)',
                }}
              >
                "{profile.philosophy}"
              </blockquote>

              <div className="flex flex-wrap gap-3 pt-2">
                {['Node.js', 'React.js', 'MongoDB', 'TypeScript', 'Docker', 'Redis'].map((tech) => (
                  <span key={tech} className="tag">{tech}</span>
                ))}
              </div>
            </motion.div>

            {/* Stats */}
            <motion.div
              className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-10 pt-8"
              style={{ borderTop: '1px solid var(--color-border)' }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {stats.map(({ number, label }, i) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 + 0.3 }}
                  className="text-center lg:text-left"
                >
                  <p className="text-3xl font-display font-bold gradient-text">{number}</p>
                  <p className="text-sm mt-1" style={{ color: 'var(--color-text-muted)' }}>{label}</p>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              className="mt-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <Link to="/about" className="btn btn-outline inline-flex">
                More About Me <ArrowRight size={16} />
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
