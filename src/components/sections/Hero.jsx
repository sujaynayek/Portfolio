import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import {Mail,  Download, ArrowRight, MapPin } from 'lucide-react'
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { profile } from '../../data/config'


const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
}

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
}

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.8 } },
}

const socialLinks = [
  { icon: FaGithub, href: profile.github, label: 'GitHub' },
  { icon: FaLinkedin, href: profile.linkedin, label: 'LinkedIn' },
  { icon: Mail, href: `mailto:${profile.email}`, label: 'Email' },
]

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden grid-bg"
      style={{ paddingTop: '3rem' }}
    >
      {/* Ambient background glows */}
      <div
        className="hero-dot w-[500px] h-[500px] top-[-100px] left-[-150px]"
        style={{ background: 'rgba(99,102,241,0.08)' }}
      />
      <div
        className="hero-dot w-[400px] h-[400px] bottom-[-50px] right-[-100px]"
        style={{ background: 'rgba(165,243,252,0.04)' }}
      />

      <div className="section-container relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-14 lg:gap-20 py-16 lg:py-24">

          {/* ── Left: Text Content ── */}
          <motion.div
            className="flex-1 max-w-xl"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Availability Badge */}
            <motion.div variants={fadeUp} className="mb-7">
              <span className="badge">
                <span className="badge-dot" />
                {profile.availability}
              </span>
            </motion.div>

            {/* Greeting */}
            <motion.p
              variants={fadeUp}
              className="text-base font-medium mb-2"
              style={{ color: 'var(--color-text-secondary)' }}
            >
              Hi, I'm
            </motion.p>

            {/* Name */}
            <motion.h1
              variants={fadeUp}
              className="text-5xl sm:text-6xl md:text-7xl font-display font-bold mb-4"
              style={{ color: 'var(--color-text)' }}
            >
              {profile.firstName}{' '}
              <span className="gradient-text">Nayek</span>
            </motion.h1>

            {/* Headline */}
            <motion.h2
              variants={fadeUp}
              className="text-xl sm:text-2xl font-medium mb-6 leading-snug"
              style={{ color: 'var(--color-text-secondary)' }}
            >
              {profile.title} —{' '}
              <span style={{ color: 'var(--color-text)' }}>{profile.tagline}</span>
            </motion.h2>

            {/* Description */}
            <motion.p
              variants={fadeUp}
              className="text-base leading-relaxed mb-10 max-w-lg"
              style={{ color: 'var(--color-text-secondary)' }}
            >
              {profile.shortBio}
            </motion.p>

            {/* Location */}
            <motion.div variants={fadeUp} className="flex items-center gap-2 mb-8">
              <MapPin size={14} style={{ color: 'var(--color-primary)' }} />
              <span className="text-sm" style={{ color: 'var(--color-text-muted)' }}>
                {profile.location}
              </span>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div variants={fadeUp} className="flex flex-wrap gap-3 mb-10">
              <Link
                to="/projects"
                id="hero-view-work"
                className="btn btn-primary"
              >
                View My Work
                <ArrowRight size={16} />
              </Link>
              <a
                href={profile.resume}
                id="hero-download-resume"
                className="btn btn-outline"
                download
              >
                <Download size={16} />
                Download Resume
              </a>
            </motion.div>

            {/* Social Links */}
            <motion.div variants={fadeUp} className="flex items-center gap-3">
              <span className="text-xs font-medium mr-1" style={{ color: 'var(--color-text-muted)' }}>
                Find me on
              </span>
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith('mailto') ? undefined : '_blank'}
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 flex items-center justify-center rounded-lg transition-all duration-200"
                  style={{
                    border: '1px solid var(--color-border)',
                    color: 'var(--color-text-secondary)',
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.borderColor = 'rgba(99,102,241,0.5)'
                    e.currentTarget.style.color = '#fff'
                    e.currentTarget.style.background = 'rgba(99,102,241,0.1)'
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.borderColor = 'var(--color-border)'
                    e.currentTarget.style.color = 'var(--color-text-secondary)'
                    e.currentTarget.style.background = 'transparent'
                  }}
                >
                  <Icon size={16} />
                </a>
              ))}
            </motion.div>
          </motion.div>

          {/* ── Right: Profile Image + Decorative Elements ── */}
          <motion.div
            className="relative flex-shrink-0"
            variants={fadeIn}
            initial="hidden"
            animate="visible"
          >
            {/* Decorative ring */}
            <div
              className="absolute inset-[-20px] rounded-full border opacity-10 animate-pulse-slow"
              style={{ borderColor: 'var(--color-primary)' }}
            />

            {/* Image container */}
            <div
              className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-[360px] lg:h-[360px] rounded-2xl overflow-hidden"
              style={{ border: '1px solid var(--color-border)' }}
            >
              <img
                src={profile.image}
                alt={`${profile.name} — ${profile.title}`}
                className="w-full h-full object-cover"
                onError={e => {
                  e.currentTarget.style.display = 'none'
                  e.currentTarget.parentElement.classList.add('img-placeholder')
                  e.currentTarget.parentElement.innerHTML = `
                    <div style="display:flex;flex-direction:column;align-items:center;justify-content:center;height:100%;gap:8px;color:#475569;">
                      <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                      <span style="font-size:12px">Your Photo Here</span>
                    </div>
                  `
                }}
              />
              {/* Gradient overlay at bottom */}
              <div
                className="absolute inset-x-0 bottom-0 h-1/3 pointer-events-none"
                style={{
                  background: 'linear-gradient(to top, rgba(10,10,15,0.6), transparent)',
                }}
              />
            </div>

            {/* Floating badge: Experience */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -left-6 top-8 glass rounded-xl px-4 py-3 shadow-xl"
            >
              <p className="text-2xl font-display font-bold" style={{ color: 'var(--color-text)' }}>1+</p>
              <p className="text-xs font-medium" style={{ color: 'var(--color-text-secondary)' }}>Yrs Experience</p>
            </motion.div>

            {/* Floating badge: Projects */}
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
              className="absolute -right-6 bottom-12 glass rounded-xl px-4 py-3 shadow-xl"
            >
              <p className="text-2xl font-display font-bold" style={{ color: 'var(--color-text)' }}>10+</p>
              <p className="text-xs font-medium" style={{ color: 'var(--color-text-secondary)' }}>Projects Built</p>
            </motion.div>

            {/* Tech badge */}
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
              className="absolute -right-4 top-6 glass rounded-xl px-4 py-3 shadow-xl"
            >
              <p className="text-sm font-bold" style={{ color: 'var(--color-primary)' }}>MERN Stack</p>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <div className='absolute left-1/2 -translate-x-1/2'>
          <motion.div
          className="absolute bottom-14 flex flex-col items-center gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
        >
          <span className="text-xs font-medium" style={{ color: 'var(--color-text-muted)' }}>Scroll</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-5 h-8 rounded-full border-2 flex items-start justify-center pt-1"
            style={{ borderColor: 'rgba(255,255,255,0.15)' }}
          >
            <div className="w-1 h-2 rounded-full" style={{ background: 'var(--color-primary)' }} />
          </motion.div>
        </motion.div>
        </div>
      </div>
    </section>
  )
}
