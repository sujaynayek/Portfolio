import { motion } from 'framer-motion'

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

export default function SectionHeading({ label, title, subtitle, align = 'left', className = '' }) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
      className={`mb-6 ${align === 'center' ? 'text-center' : ''} ${className}`}
    >
      {label && (
        <span className="section-label">{label}</span>
      )}
      <h2
        className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mt-1"
        style={{ color: 'var(--color-text)' }}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className="mt-4 max-w-xl text-base md:text-lg leading-relaxed"
          style={{ color: 'var(--color-text-secondary)', marginLeft: align === 'center' ? 'auto' : undefined, marginRight: align === 'center' ? 'auto' : undefined }}
        >
          {subtitle}
        </p>
      )}
    </motion.div>
  )
}
