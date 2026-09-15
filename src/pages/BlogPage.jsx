import { motion } from 'framer-motion'
import { Clock, Calendar, ArrowRight } from 'lucide-react'
import SectionHeading from '../components/ui/SectionHeading'
import { articles } from '../data/articles'

export default function BlogPage() {
  return (
    <div className="pt-24" style={{ background: 'var(--color-bg)' }}>
      <section className="section-padding">
        <div className="section-container">
          <SectionHeading
            label="Writing"
            title="Articles & Insights"
            subtitle="Thoughts on engineering, architecture, performance, and the craft of building software."
          />

          <div className="space-y-5 max-w-3xl">
            {articles.map((article, i) => (
              <motion.article
                key={article.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="card p-6 flex flex-col sm:flex-row items-start gap-5 group transition-all duration-300 hover:translate-y-[-1px] cursor-pointer"
                onMouseEnter={e => e.currentTarget.style.borderColor = 'rgba(99,102,241,0.3)'}
                onMouseLeave={e => e.currentTarget.style.borderColor = 'var(--color-border)'}
              >
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <span
                      className="inline-block px-2.5 py-0.5 rounded-md text-xs font-semibold"
                      style={{ background: 'rgba(99,102,241,0.1)', color: '#a5b4fc', border: '1px solid rgba(99,102,241,0.2)' }}
                    >
                      {article.category}
                    </span>
                    <span className="flex items-center gap-1 text-xs" style={{ color: 'var(--color-text-muted)' }}>
                      <Clock size={11} />
                      {article.readTime}
                    </span>
                    <span className="flex items-center gap-1 text-xs" style={{ color: 'var(--color-text-muted)' }}>
                      <Calendar size={11} />
                      {article.date}
                    </span>
                  </div>

                  <h2
                    className="text-lg font-display font-bold mb-2 transition-colors duration-200 group-hover:text-indigo-400"
                    style={{ color: 'var(--color-text)' }}
                  >
                    {article.title}
                  </h2>

                  <p className="text-sm leading-relaxed mb-4" style={{ color: 'var(--color-text-secondary)' }}>
                    {article.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {article.tags.map(t => <span key={t} className="tag">{t}</span>)}
                  </div>

                  <div className="flex items-center gap-1.5 text-sm font-medium" style={{ color: 'var(--color-primary)' }}>
                    Read article
                    <ArrowRight size={14} className="transition-transform duration-200 group-hover:translate-x-1" />
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
