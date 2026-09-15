import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, Clock, Calendar } from 'lucide-react'
import SectionHeading from '../ui/SectionHeading'
import { articles } from '../../data/articles'

export default function Blog() {
  const preview = articles.slice(0, 3)

  return (
    <section id="blog" className="section-padding" style={{ background: 'var(--color-surface)' }}>
      <div className="section-container">
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 mb-12">
          <SectionHeading
            label="Writing"
            title="Latest Articles"
            subtitle="Thoughts on engineering, architecture, and the craft of building software."
            className="mb-0"
          />
          <Link
            to="/blog"
            className="flex items-center gap-2 text-sm font-medium flex-shrink-0 transition-all duration-200 group"
            style={{ color: 'var(--color-primary)' }}
          >
            All Articles
            <ArrowRight size={16} className="transition-transform duration-200 group-hover:translate-x-1" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {preview.map((article, i) => (
            <motion.article
              key={article.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="card p-5 flex flex-col gap-3 group cursor-pointer transition-all duration-300 hover:translate-y-[-2px]"
              onMouseEnter={e => e.currentTarget.style.borderColor = 'rgba(99,102,241,0.3)'}
              onMouseLeave={e => e.currentTarget.style.borderColor = 'var(--color-border)'}
            >
              {/* Category + Meta */}
              <div className="flex items-center justify-between">
                <span
                  className="inline-block px-2.5 py-0.5 rounded-md text-xs font-semibold"
                  style={{
                    background: 'rgba(99,102,241,0.1)',
                    color: '#a5b4fc',
                    border: '1px solid rgba(99,102,241,0.2)',
                  }}
                >
                  {article.category}
                </span>
                <span className="flex items-center gap-1 text-xs" style={{ color: 'var(--color-text-muted)' }}>
                  <Clock size={11} />
                  {article.readTime}
                </span>
              </div>

              {/* Title */}
              <h3
                className="text-base font-display font-bold leading-snug"
                style={{ color: 'var(--color-text)' }}
              >
                {article.title}
              </h3>

              {/* Description */}
              <p
                className="text-sm leading-relaxed line-clamp-2 flex-1"
                style={{ color: 'var(--color-text-secondary)' }}
              >
                {article.description}
              </p>

              {/* Date + Read link */}
              <div
                className="flex items-center justify-between pt-3"
                style={{ borderTop: '1px solid var(--color-border)' }}
              >
                <span className="flex items-center gap-1.5 text-xs" style={{ color: 'var(--color-text-muted)' }}>
                  <Calendar size={11} />
                  {article.date}
                </span>
                <Link
                  to={`/blog`}
                  className="flex items-center gap-1 text-xs font-medium group/link"
                  style={{ color: 'var(--color-primary)' }}
                >
                  Read article
                  <ArrowRight
                    size={12}
                    className="transition-transform duration-200 group-hover/link:translate-x-1"
                  />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
