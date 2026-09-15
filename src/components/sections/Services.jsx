import { motion } from 'framer-motion'
import { ArrowRight, Layers, Monitor, Server, ShoppingCart, Zap, Radio } from 'lucide-react'
import SectionHeading from '../ui/SectionHeading'
import { services } from '../../data/services'

const iconMap = { Layers, Monitor, Server, ShoppingCart, Zap, Radio }

export default function Services() {
  return (
    <section id="services" className="section-padding" style={{ background: 'var(--color-surface)' }}>
      <div className="section-container">
        <SectionHeading
          label="Services"
          title="What I Can Do"
          subtitle="End-to-end development capabilities across the full stack."
          align="center"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service, i) => {
            const Icon = iconMap[service.icon] || Layers
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: i * 0.07 }}
                className="card p-6 flex flex-col gap-4 group cursor-default transition-all duration-300 hover:translate-y-[-3px]"
                onMouseEnter={e => e.currentTarget.style.borderColor = 'rgba(99,102,241,0.3)'}
                onMouseLeave={e => e.currentTarget.style.borderColor = 'var(--color-border)'}
              >
                {/* Number + Icon */}
                <div className="flex items-start justify-between">
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                    style={{
                      background: 'rgba(99,102,241,0.1)',
                      border: '1px solid rgba(99,102,241,0.2)',
                    }}
                  >
                    <Icon size={20} style={{ color: 'var(--color-primary)' }} />
                  </div>
                  <span
                    className="font-display font-bold text-2xl"
                    style={{ color: 'rgba(255,255,255,0.06)' }}
                  >
                    {service.number}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-base font-display font-bold" style={{ color: 'var(--color-text)' }}>
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-sm leading-relaxed flex-1" style={{ color: 'var(--color-text-secondary)' }}>
                  {service.description}
                </p>

                {/* Arrow */}
                <div className="flex items-center gap-1.5 mt-auto">
                  <span className="text-xs font-medium" style={{ color: 'var(--color-primary)' }}>
                    Learn more
                  </span>
                  <ArrowRight
                    size={13}
                    className="transition-transform duration-200 group-hover:translate-x-1"
                    style={{ color: 'var(--color-primary)' }}
                  />
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
