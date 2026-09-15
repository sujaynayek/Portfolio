import { useState, useEffect } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { profile } from '../../data/config'
import Logo from "../../asset/Logo.png"

const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Experience', path: '/experience' },
  { label: 'Projects', path: '/projects' },
  { label: 'Services', path: '/services' },
  { label: 'Blog', path: '/blog' },
  { label: 'Contact', path: '/contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [location])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'py-3'
            : 'py-5'
        }`}
        style={{
          background: scrolled
            ? 'rgba(10, 10, 15, 0.85)'
            : 'transparent',
          backdropFilter: scrolled ? 'blur(10px)' : 'none',
          // WebkitBackdropFilter: scrolled ? 'blur(16px)' : 'none',
          //borderBottom: scrolled ? '1px solid rgba(255,255,255,0.06)' : 'none',
        }}
      >
        <div className="section-container flex items-center justify-between">
          {/* Logo */}
          <Link
            to="/"
            className="font-display font-bold text-lg tracking-tight"
            style={{ color: 'var(--color-text)' }}
            aria-label="Go to home"
          >
            <img src={Logo} alt="Logo" className='h-20 w-20 text-white' />
            {/* <span style={{ color: 'var(--color-primary)' }}>.</span> */}
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-7" aria-label="Main navigation">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                end={link.path === '/'}
                className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          {/* CTA + Hamburger */}
          <div className="flex items-center gap-3">
            <Link
              to="/contact"
              id="navbar-cta"
              className="hidden sm:inline-flex btn btn-primary text-sm px-4 py-2.5"
            >
              Let's Talk
            </Link>

            {/* Hamburger */}
            <button
              id="mobile-menu-toggle"
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden flex items-center justify-center w-10 h-10 rounded-lg"
              style={{ border: '1px solid var(--color-border)' }}
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? (
                <X size={20} style={{ color: 'var(--color-text)' }} />
              ) : (
                <Menu size={20} style={{ color: 'var(--color-text)' }} />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-40"
              style={{ background: 'rgba(0,0,0,0.5)', backdropFilter: 'blur(4px)' }}
              onClick={() => setMobileOpen(false)}
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 z-50 w-72 flex flex-col"
              style={{ background: 'var(--color-surface)', borderLeft: '1px solid var(--color-border)' }}
            >
              <div className="flex items-center justify-between p-5 border-b" style={{ borderColor: 'var(--color-border)' }}>
                <span className="font-display font-bold text-lg" style={{ color: 'var(--color-text)' }}>
                  {profile.firstName}<span style={{ color: 'var(--color-primary)' }}>.</span>
                </span>
                <button
                  onClick={() => setMobileOpen(false)}
                  className="w-9 h-9 flex items-center justify-center rounded-lg"
                  style={{ border: '1px solid var(--color-border)' }}
                  aria-label="Close menu"
                >
                  <X size={18} style={{ color: 'var(--color-text)' }} />
                </button>
              </div>

              <nav className="flex-1 p-5 space-y-1" aria-label="Mobile navigation">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.path}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 + 0.1 }}
                  >
                    <NavLink
                      to={link.path}
                      end={link.path === '/'}
                      className={({ isActive }) =>
                        `block px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 ${
                          isActive
                            ? 'text-white'
                            : 'hover:text-white'
                        }`
                      }
                      style={({ isActive }) => ({
                        background: isActive ? 'rgba(99,102,241,0.12)' : 'transparent',
                        color: isActive ? 'var(--color-text)' : 'var(--color-text-secondary)',
                        borderLeft: isActive ? '2px solid var(--color-primary)' : '2px solid transparent',
                      })}
                    >
                      {link.label}
                    </NavLink>
                  </motion.div>
                ))}
              </nav>

              <div className="p-5 border-t" style={{ borderColor: 'var(--color-border)' }}>
                <Link
                  to="/contact"
                  className="btn btn-primary w-full justify-center"
                  onClick={() => setMobileOpen(false)}
                >
                  Let's Talk
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
