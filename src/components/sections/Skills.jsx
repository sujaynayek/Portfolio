import { motion } from 'framer-motion'
import SectionHeading from '../ui/SectionHeading'
import { skillCategories } from '../../data/skills'

const categoryColors = {
  Languages: 'rgba(260,35,20,0.1)',
  Frontend: 'rgba(99,102,241,0.12)',
  Backend: 'rgba(34,197,94,0.1)',
  Databases: 'rgba(251,191,36,0.1)',
  'AI / LLM': 'rgba(236,72,153,0.1)',
  'DevOps & Cloud': 'rgba(14,165,233,0.1)',
  Tools: 'rgba(168,85,247,0.1)',
}

const categoryBorderColors = {
  Languages: 'rgba(200,35,20,0.16)',
  Frontend: 'rgba(99,102,241,0.25)',
  Backend: 'rgba(34,197,94,0.2)',
  Databases: 'rgba(251,191,36,0.2)',
  'AI / LLM': 'rgba(236,72,153,0.2)',
  'DevOps & Cloud': 'rgba(14,165,233,0.2)',
  Tools: 'rgba(168,85,247,0.2)',
}

const categoryTextColors = {
  Languages: '#F6DCD9',
  Frontend: '#a5b4fc',
  Backend: '#86efac',
  Databases: '#fde68a',
  'AI / LLM': '#f9a8d4',
  'DevOps & Cloud': '#7dd3fc',
  Tools: '#d8b4fe',
}

export default function Skills() {
  return (
    <section id="skills" className="section-padding" style={{ background: 'var(--color-surface)' }}>
      <div className="section-container">
        <SectionHeading
          label="Stack"
          title="Tech Stack"
          subtitle="Technologies and tools I use to build modern web applications."
          align="center"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {skillCategories.map((cat, ci) => (
            <motion.div
              key={cat.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: ci * 0.07 }}
              className="card p-5 transition-all duration-300 hover:translate-y-[-2px]"
            >
              {/* Category header */}
              <div className="flex items-center gap-2 mb-4">
                <span
                  className="inline-block px-2.5 py-1 rounded-md text-xs font-semibold"
                  style={{
                    background: categoryColors[cat.category] || 'rgba(99,102,241,0.1)',
                    color: categoryTextColors[cat.category] || '#a5b4fc',
                    border: `1px solid ${categoryBorderColors[cat.category] || 'rgba(99,102,241,0.2)'}`,
                  }}
                >
                  {cat.category}
                </span>
              </div>

              {/* Skills grid */}
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill, si) => (
                  <motion.span
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: ci * 0.05 + si * 0.03 }}
                    className="inline-flex items-center px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-200 cursor-default"
                    style={{
                      background: 'rgba(255,255,255,0.04)',
                      border: '1px solid var(--color-border)',
                      color: 'var(--color-text-secondary)',
                    }}
                    onMouseEnter={e => {
                      e.currentTarget.style.background = categoryColors[cat.category] || 'rgba(99,102,241,0.1)'
                      e.currentTarget.style.color = categoryTextColors[cat.category] || '#a5b4fc'
                      e.currentTarget.style.borderColor = categoryBorderColors[cat.category] || 'rgba(99,102,241,0.2)'
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.background = 'rgba(255,255,255,0.04)'
                      e.currentTarget.style.color = 'var(--color-text-secondary)'
                      e.currentTarget.style.borderColor = 'var(--color-border)'
                    }}
                  >
                    {skill.name}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
