import { motion } from 'framer-motion'
import { Layers, Monitor, Server, ShoppingCart, Zap, Radio, ArrowRight } from 'lucide-react'
import SectionHeading from '../components/ui/SectionHeading'
import { services } from '../data/services'
import { Link } from 'react-router-dom'

const iconMap = { Layers, Monitor, Server, ShoppingCart, Zap, Radio }

export default function ServicesPage() {
  return (
    <div className="pt-24" style={{ background: 'var(--color-bg)' }}>
      <section className="section-padding">
        <div className="section-container">
          <SectionHeading
            label="Services"
            title="What I Can Do"
            subtitle="From concept to deployment — I cover the full development lifecycle."
            align="center"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-14">
            {services.map((service, i) => {
              const Icon = iconMap[service.icon] || Layers
              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.07 }}
                  className="card p-6 flex flex-col gap-4 group transition-all duration-300 hover:translate-y-[-3px]"
                  onMouseEnter={e => e.currentTarget.style.borderColor = 'rgba(99,102,241,0.3)'}
                  onMouseLeave={e => e.currentTarget.style.borderColor = 'var(--color-border)'}
                >
                  <div className="flex items-start justify-between">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
                      style={{ background: 'rgba(99,102,241,0.1)', border: '1px solid rgba(99,102,241,0.2)' }}
                    >
                      <Icon size={22} style={{ color: 'var(--color-primary)' }} />
                    </div>
                    <span className="font-display font-bold text-3xl" style={{ color: 'rgba(255,255,255,0.05)' }}>
                      {service.number}
                    </span>
                  </div>
                  <h3 className="text-lg font-display font-bold" style={{ color: 'var(--color-text)' }}>
                    {service.title}
                  </h3>
                  <p className="text-sm leading-relaxed flex-1" style={{ color: 'var(--color-text-secondary)' }}>
                    {service.description}
                  </p>
                  <div className="flex items-center gap-1.5 mt-auto">
                    <span className="text-xs font-medium" style={{ color: 'var(--color-primary)' }}>Let's discuss</span>
                    <ArrowRight size={13} className="transition-transform duration-200 group-hover:translate-x-1" style={{ color: 'var(--color-primary)' }} />
                  </div>
                </motion.div>
              )
            })}
          </div>

          {/* CTA */}
          <motion.div
            className="text-center p-8 md:p-12 rounded-2xl"
            style={{ background: 'var(--color-surface)', border: '1px solid var(--color-border)' }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl md:text-3xl font-display font-bold mb-3" style={{ color: 'var(--color-text)' }}>
              Ready to start your project?
            </h2>
            <p className="text-sm mb-6 max-w-lg mx-auto" style={{ color: 'var(--color-text-secondary)' }}>
              Let's talk about how I can help you build a scalable, well-crafted web application.
            </p>
            <Link to="/contact" className="btn btn-primary">
              Get In Touch <ArrowRight size={16} />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
