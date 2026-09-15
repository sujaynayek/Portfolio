import { motion } from 'framer-motion'
import SectionHeading from '../components/ui/SectionHeading'
import { experiences } from '../data/experience'
import { MapPin, Calendar, Briefcase } from 'lucide-react'

export default function ExperiencePage() {
  return (
    <div className="pt-24" style={{ background: 'var(--color-bg)' }}>
      <section className="section-padding">
        <div className="section-container">
          <SectionHeading
            label="Career"
            title="My Experience"
            subtitle="A detailed look at my professional journey and the impact I've made."
          />

          <div className="relative max-w-3xl">
            {/* Vertical line */}
            <div
              className="absolute left-4 md:left-6 top-0 bottom-0 w-px"
              style={{
                background: 'linear-gradient(to bottom, transparent, var(--color-border) 10%, var(--color-border) 90%, transparent)',
              }}
            />

            <div className="space-y-10">
              {experiences.map((exp, i) => (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, x: -24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  className="relative pl-12 md:pl-16"
                >
                  {/* Dot */}
                  <div
                    className="absolute left-0 md:left-2 top-1 w-5 h-5 rounded-full border-2 flex items-center justify-center"
                    style={{
                      background: exp.current ? 'var(--color-primary)' : 'var(--color-surface)',
                      borderColor: exp.current ? 'var(--color-primary)' : 'var(--color-border)',
                      boxShadow: exp.current ? '0 0 16px rgba(99,102,241,0.5)' : 'none',
                    }}
                  >
                    {exp.current && <div className="w-2 h-2 rounded-full bg-white" />}
                  </div>

                  <div
                    className="card p-6 md:p-8"
                    style={{ borderColor: exp.current ? 'rgba(99,102,241,0.25)' : 'var(--color-border)' }}
                  >
                    <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <h2 className="text-xl font-display font-bold" style={{ color: 'var(--color-text)' }}>
                            {exp.role}
                          </h2>
                          {exp.current && <span className="badge text-xs py-0.5 px-2">Current</span>}
                        </div>
                        <p className="font-bold text-base" style={{ color: 'var(--color-primary)' }}>{exp.company}</p>
                      </div>
                      <div className="flex flex-col items-end gap-1 text-xs" style={{ color: 'var(--color-text-muted)' }}>
                        <span className="flex items-center gap-1.5"><Calendar size={12} />{exp.duration}</span>
                        <span className="flex items-center gap-1.5"><MapPin size={12} />{exp.location}</span>
                        <span className="flex items-center gap-1.5">
                          <Briefcase size={12} />
                          <span style={{ color: 'var(--color-primary)', background: 'rgba(99,102,241,0.1)', padding: '1px 8px', borderRadius: 6, border: '1px solid rgba(99,102,241,0.2)' }}>
                            {exp.type}
                          </span>
                        </span>
                      </div>
                    </div>

                    <p className="text-sm leading-relaxed mb-5" style={{ color: 'var(--color-text-secondary)' }}>
                      {exp.description}
                    </p>

                    <ul className="space-y-3 mb-5">
                      {exp.highlights.map((h, hi) => (
                        <li key={hi} className="flex items-start gap-3 text-sm" style={{ color: 'var(--color-text-secondary)' }}>
                          <span className="w-1.5 h-1.5 rounded-full flex-shrink-0 mt-2" style={{ background: 'var(--color-primary)' }} />
                          {h}
                        </li>
                      ))}
                    </ul>

                    <div className="pt-4" style={{ borderTop: '1px solid var(--color-border)' }}>
                      <p className="text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: 'var(--color-text-muted)' }}>
                        Technologies
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map(t => <span key={t} className="tag">{t}</span>)}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
