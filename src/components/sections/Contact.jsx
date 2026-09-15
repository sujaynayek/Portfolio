import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react'
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import SectionHeading from '../ui/SectionHeading'
import { profile } from '../../data/config'

const contactInfo = [
  { icon: Mail, label: 'Email', value: profile.email, href: `mailto:${profile.email}` },
  { icon: Phone, label: 'Phone', value: profile.phone, href: `tel:${profile.phone}` },
  { icon: MapPin, label: 'Location', value: profile.location, href: null },
]

const socialLinks = [
  { icon: FaGithub, href: profile.github, label: 'GitHub' },
  { icon: FaLinkedin, href: profile.linkedin, label: 'LinkedIn' },
  { icon: Mail, href: `mailto:${profile.email}`, label: 'Email' },
]

const budgetOptions = [
  'Under ₹50k',
  '₹50k – ₹1L',
  '₹1L – ₹3L',
  '₹3L+',
  'Open to discuss',
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', budget: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    // Simulate form submission
    await new Promise((r) => setTimeout(r, 1500))
    setLoading(false)
    setSubmitted(true)
  }

  const inputStyle = {
    background: 'rgba(255,255,255,0.03)',
    border: '1px solid var(--color-border)',
    borderRadius: '10px',
    color: 'var(--color-text)',
    outline: 'none',
    transition: 'all 0.2s',
    width: '100%',
    padding: '0.75rem 1rem',
    fontSize: '0.9375rem',
    fontFamily: 'Inter, sans-serif',
  }

  return (
    <section id="contact" className="section-padding" style={{ background: 'var(--color-bg)' }}>
      <div className="section-container">
        <SectionHeading
          label="Get In Touch"
          title="Let's Build Something Great"
          subtitle="Have an idea, opportunity or project in mind? Let's talk."
          align="center"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">

          {/* Left: Contact Info */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6 }}
          >
            <div className="space-y-4">
              {contactInfo.map(({ icon: Icon, label, value, href }) => (
                <div key={label} className="flex items-start gap-4">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5"
                    style={{ background: 'rgba(99,102,241,0.1)', border: '1px solid rgba(99,102,241,0.2)' }}
                  >
                    <Icon size={18} style={{ color: 'var(--color-primary)' }} />
                  </div>
                  <div>
                    <p className="text-xs font-medium uppercase tracking-widest mb-0.5" style={{ color: 'var(--color-text-muted)' }}>
                      {label}
                    </p>
                    {href ? (
                      <a
                        href={href}
                        className="text-sm font-medium transition-colors duration-200"
                        style={{ color: 'var(--color-text)' }}
                        onMouseEnter={e => e.currentTarget.style.color = 'var(--color-primary)'}
                        onMouseLeave={e => e.currentTarget.style.color = 'var(--color-text)'}
                      >
                        {value}
                      </a>
                    ) : (
                      <p className="text-sm font-medium" style={{ color: 'var(--color-text)' }}>{value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Social */}
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: 'var(--color-text-muted)' }}>
                Connect with me
              </p>
              <div className="flex items-center gap-3">
                {socialLinks.map(({ icon: Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="w-10 h-10 flex items-center justify-center rounded-xl transition-all duration-200"
                    style={{ border: '1px solid var(--color-border)', color: 'var(--color-text-secondary)' }}
                    onMouseEnter={e => {
                      e.currentTarget.style.borderColor = 'rgba(99,102,241,0.4)'
                      e.currentTarget.style.color = '#fff'
                      e.currentTarget.style.background = 'rgba(99,102,241,0.1)'
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.borderColor = 'var(--color-border)'
                      e.currentTarget.style.color = 'var(--color-text-secondary)'
                      e.currentTarget.style.background = 'transparent'
                    }}
                  >
                    <Icon size={18} />
                  </a>
                ))}
              </div>
            </div>

            {/* Quote */}
            <div
              className="p-5 rounded-2xl"
              style={{ background: 'var(--color-surface)', border: '1px solid var(--color-border)' }}
            >
              <p className="text-sm leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>
                "I'm always open to discussing new projects, creative ideas, or opportunities to be part of something great."
              </p>
              <p className="text-sm font-semibold mt-3" style={{ color: 'var(--color-primary)' }}>
                — Sujay Nayek
              </p>
            </div>
          </motion.div>

          {/* Right: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6 }}
          >
            <div
              className="p-6 md:p-8 rounded-2xl"
              style={{ background: 'var(--color-surface)', border: '1px solid var(--color-border)' }}
            >
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center text-center py-16 gap-4"
                >
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center"
                    style={{ background: 'rgba(34,197,94,0.1)', border: '1px solid rgba(34,197,94,0.2)' }}
                  >
                    <CheckCircle size={32} style={{ color: '#22c55e' }} />
                  </div>
                  <h3 className="text-xl font-display font-bold" style={{ color: 'var(--color-text)' }}>
                    Message Sent!
                  </h3>
                  <p className="text-sm" style={{ color: 'var(--color-text-secondary)' }}>
                    Thank you for reaching out. I'll get back to you within 24 hours.
                  </p>
                  <button
                    onClick={() => { setSubmitted(false); setForm({ name: '', email: '', budget: '', message: '' }) }}
                    className="btn btn-outline mt-2"
                  >
                    Send Another
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5" id="contact-form" noValidate>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label htmlFor="contact-name" className="text-xs font-medium uppercase tracking-widest" style={{ color: 'var(--color-text-muted)' }}>
                        Name *
                      </label>
                      <input
                        id="contact-name"
                        name="name"
                        type="text"
                        required
                        placeholder="Your name"
                        value={form.name}
                        onChange={handleChange}
                        style={inputStyle}
                        onFocus={e => e.target.style.borderColor = 'rgba(99,102,241,0.6)'}
                        onBlur={e => e.target.style.borderColor = 'var(--color-border)'}
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label htmlFor="contact-email" className="text-xs font-medium uppercase tracking-widest" style={{ color: 'var(--color-text-muted)' }}>
                        Email *
                      </label>
                      <input
                        id="contact-email"
                        name="email"
                        type="email"
                        required
                        placeholder="your@email.com"
                        value={form.email}
                        onChange={handleChange}
                        style={inputStyle}
                        onFocus={e => e.target.style.borderColor = 'rgba(99,102,241,0.6)'}
                        onBlur={e => e.target.style.borderColor = 'var(--color-border)'}
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="contact-budget" className="text-xs font-medium uppercase tracking-widest" style={{ color: 'var(--color-text-muted)' }}>
                      Budget
                    </label>
                    <select
                      id="contact-budget"
                      name="budget"
                      value={form.budget}
                      onChange={handleChange}
                      style={{ ...inputStyle, appearance: 'none' }}
                      onFocus={e => e.target.style.borderColor = 'rgba(99,102,241,0.6)'}
                      onBlur={e => e.target.style.borderColor = 'var(--color-border)'}
                    >
                      <option value="">Select budget range</option>
                      {budgetOptions.map((opt) => (
                        <option key={opt} value={opt} style={{ background: '#111118' }}>
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="contact-message" className="text-xs font-medium uppercase tracking-widest" style={{ color: 'var(--color-text-muted)' }}>
                      Message *
                    </label>
                    <textarea
                      id="contact-message"
                      name="message"
                      required
                      rows={5}
                      placeholder="Tell me about your project, idea or opportunity..."
                      value={form.message}
                      onChange={handleChange}
                      style={{ ...inputStyle, resize: 'vertical', minHeight: '130px' }}
                      onFocus={e => e.target.style.borderColor = 'rgba(99,102,241,0.6)'}
                      onBlur={e => e.target.style.borderColor = 'var(--color-border)'}
                    />
                  </div>

                  <motion.button
                    type="submit"
                    id="contact-submit"
                    disabled={loading}
                    className="btn btn-primary w-full justify-center"
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {loading ? (
                      <>
                        <div
                          className="w-4 h-4 rounded-full border-2 border-t-transparent animate-spin"
                          style={{ borderColor: 'rgba(255,255,255,0.4)', borderTopColor: 'transparent' }}
                        />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send size={16} />
                        Send Message
                      </>
                    )}
                  </motion.button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
