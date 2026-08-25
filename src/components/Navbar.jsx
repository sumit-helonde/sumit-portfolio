import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'

const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Work', href: '#projects' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20)
      const sections = ['home', 'about', 'skills', 'projects', 'contact']
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i])
        if (el && el.getBoundingClientRect().top <= 120) {
          setActiveSection(sections[i])
          break
        }
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => { setMobileOpen(false) }, [location])

  const handleClick = (e, href) => {
    e.preventDefault()
    const el = document.querySelector(href)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
      setMobileOpen(false)
    }
  }

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 9999,
          height: '64px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          transition: 'all 0.35s ease',
          background: scrolled ? 'rgba(6, 6, 15, 0.92)' : 'rgba(6, 6, 15, 0.55)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          borderBottom: '1px solid rgba(139, 92, 246, 0.1)',
          boxShadow: scrolled ? '0 4px 30px rgba(0,0,0,0.3)' : 'none',
        }}
      >
        {/* Gradient line at bottom */}
        <div style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: '1px',
          background: scrolled
            ? 'linear-gradient(90deg, transparent, rgba(139,92,246,0.4), rgba(6,182,212,0.3), transparent)'
            : 'transparent',
          transition: 'all 0.5s ease',
        }} />

        <div style={{
          width: '100%',
          maxWidth: '1100px',
          margin: '0 auto',
          padding: '0 24px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
          {/* Logo */}
          <Link to="/" className="nav-logo-link" style={{ textDecoration: 'none', fontSize: '1.1rem', fontWeight: 700, fontFamily: "'Space Grotesk', sans-serif", letterSpacing: '-0.5px', display: 'flex', alignItems: 'center', gap: '2px', position: 'relative' }}>
            <span style={{ color: '#e0e0ff' }}>SUMIT</span>
            <span style={{ color: '#555', margin: '0 2px' }}>/</span>
            <span className="nav-logo-gradient" style={{ background: 'linear-gradient(135deg, #8b5cf6, #06b6d4)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', transition: 'all 0.3s' }}>HELONDE</span>
          </Link>

          {/* Desktop Links */}
          <div className="nav-desktop" style={{ display: 'flex', alignItems: 'center', gap: '2px' }}>
            {NAV_LINKS.map((link) => {
              const isActive = activeSection === link.href.slice(1)
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleClick(e, link.href)}
                  className={`nav-link-item ${isActive ? 'nav-link-active' : ''}`}
                  style={{
                    padding: '7px 16px',
                    borderRadius: '8px',
                    fontSize: '0.82rem',
                    fontWeight: 500,
                    textDecoration: 'none',
                    color: isActive ? '#b4a8ff' : 'rgba(255,255,255,0.5)',
                    transition: 'all 0.25s ease',
                    background: isActive ? 'rgba(139, 92, 246, 0.12)' : 'transparent',
                    fontFamily: "'DM Sans', sans-serif",
                    position: 'relative',
                  }}
                >
                  {link.label}
                  {isActive && (
                    <motion.span
                      layoutId="navIndicator"
                      style={{
                        position: 'absolute',
                        bottom: '-1px',
                        left: '50%',
                        transform: 'translateX(-50%)',
                        width: '16px',
                        height: '2px',
                        borderRadius: '1px',
                        background: 'linear-gradient(90deg, #8b5cf6, #06b6d4)',
                      }}
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </a>
              )
            })}

            <a
              href="#contact"
              onClick={(e) => handleClick(e, '#contact')}
              className="nav-cta-btn"
              style={{
                marginLeft: '10px',
                padding: '8px 22px',
                borderRadius: '8px',
                fontSize: '0.78rem',
                fontWeight: 700,
                textDecoration: 'none',
                color: '#fff',
                background: 'linear-gradient(135deg, #8b5cf6, #06b6d4)',
                boxShadow: '0 2px 20px rgba(139, 92, 246, 0.3), inset 0 0 0 1px rgba(255,255,255,0.1)',
                transition: 'all 0.3s ease',
                fontFamily: "'DM Sans', sans-serif",
                position: 'relative',
                overflow: 'hidden',
                letterSpacing: '0.02em',
              }}
            >
              <span className="cta-shimmer" />
              <span style={{ position: 'relative', zIndex: 1, display: 'flex', alignItems: 'center', gap: '6px' }}>
                Start Building With Me
                <span style={{ fontSize: '14px', transition: 'transform 0.3s' }} className="cta-arrow">→</span>
              </span>
            </a>
          </div>

          {/* Hamburger */}
          <button
            className="nav-hamburger"
            onClick={() => setMobileOpen(!mobileOpen)}
            style={{
              display: 'none',
              flexDirection: 'column',
              gap: '5px',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: '6px',
              zIndex: 10001,
            }}
            aria-label="Toggle menu"
          >
            <span className="hamburger-line" style={{ width: '22px', height: '2px', background: '#e0e0ff', display: 'block', borderRadius: '2px', transform: mobileOpen ? 'rotate(45deg) translate(5px, 5px)' : 'none', transition: '0.3s cubic-bezier(.4,0,.2,1)' }} />
            <span className="hamburger-line" style={{ width: '22px', height: '2px', background: '#e0e0ff', display: 'block', borderRadius: '2px', opacity: mobileOpen ? 0 : 1, transition: '0.3s', transform: mobileOpen ? 'scaleX(0)' : 'scaleX(1)' }} />
            <span className="hamburger-line" style={{ width: '22px', height: '2px', background: '#e0e0ff', display: 'block', borderRadius: '2px', transform: mobileOpen ? 'rotate(-45deg) translate(5px, -5px)' : 'none', transition: '0.3s cubic-bezier(.4,0,.2,1)' }} />
          </button>
        </div>
      </motion.nav>

      {/* Mobile Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            style={{
              position: 'fixed',
              inset: 0,
              top: '64px',
              background: 'rgba(6, 6, 15, 0.97)',
              backdropFilter: 'blur(30px)',
              WebkitBackdropFilter: 'blur(30px)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '6px',
              zIndex: 9998,
            }}
          >
            {/* Decorative gradient orb */}
            <div style={{
              position: 'absolute',
              top: '10%',
              left: '50%',
              transform: 'translateX(-50%)',
              width: '300px',
              height: '300px',
              borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(139,92,246,0.12) 0%, transparent 70%)',
              filter: 'blur(40px)',
              pointerEvents: 'none',
            }} />

            {NAV_LINKS.map((link, i) => {
              const isActive = activeSection === link.href.slice(1)
              return (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleClick(e, link.href)}
                  initial={{ opacity: 0, y: 30, filter: 'blur(8px)' }}
                  animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                  exit={{ opacity: 0, y: -20, filter: 'blur(8px)' }}
                  transition={{ delay: i * 0.08, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  style={{
                    fontSize: '1.6rem',
                    fontWeight: 600,
                    textDecoration: 'none',
                    color: isActive ? '#b4a8ff' : 'rgba(255,255,255,0.45)',
                    fontFamily: "'Space Grotesk', sans-serif",
                    padding: '14px 40px',
                    borderRadius: '12px',
                    background: isActive ? 'rgba(139, 92, 246, 0.1)' : 'transparent',
                    transition: 'all 0.2s',
                    position: 'relative',
                  }}
                >
                  {isActive && (
                    <span style={{
                      position: 'absolute',
                      left: '20px',
                      top: '50%',
                      transform: 'translateY(-50%)',
                      width: '4px',
                      height: '20px',
                      borderRadius: '2px',
                      background: 'linear-gradient(180deg, #8b5cf6, #06b6d4)',
                    }} />
                  )}
                  {link.label}
                </motion.a>
              )
            })}

            <motion.a
              href="#contact"
              onClick={(e) => handleClick(e, '#contact')}
              initial={{ opacity: 0, y: 30, filter: 'blur(8px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              exit={{ opacity: 0, y: -20, filter: 'blur(8px)' }}
              transition={{ delay: NAV_LINKS.length * 0.08, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="mobile-cta-btn"
              style={{
                marginTop: '20px',
                padding: '16px 44px',
                borderRadius: '14px',
                fontSize: '1.15rem',
                fontWeight: 700,
                textDecoration: 'none',
                color: '#fff',
                background: 'linear-gradient(135deg, #8b5cf6, #06b6d4)',
                boxShadow: '0 4px 30px rgba(139, 92, 246, 0.4)',
                fontFamily: "'DM Sans', sans-serif",
                position: 'relative',
                overflow: 'hidden',
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
              }}
            >
              <span className="cta-shimmer" />
              <span style={{ position: 'relative', zIndex: 1 }}>Start Building With Me</span>
              <span style={{ position: 'relative', zIndex: 1, fontSize: '1.2rem' }}>→</span>
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        .nav-link-item:hover {
          color: rgba(255,255,255,0.85) !important;
          background: rgba(255,255,255,0.04) !important;
        }
        .nav-link-active {
          color: #b4a8ff !important;
        }
        .cta-shimmer {
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
          animation: shimmer 3s ease-in-out infinite;
          z-index: 0;
        }
        @keyframes shimmer {
          0% { left: -100%; }
          50%, 100% { left: 100%; }
        }
        .nav-cta-btn:hover {
          transform: translateY(-2px) !important;
          box-shadow: 0 6px 30px rgba(139, 92, 246, 0.45), 0 0 60px rgba(6, 182, 212, 0.15), inset 0 0 0 1px rgba(255,255,255,0.15) !important;
        }
        .nav-cta-btn:hover .cta-arrow {
          transform: translateX(3px);
        }
        .nav-cta-btn:active {
          transform: translateY(0) !important;
        }
        .mobile-cta-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 40px rgba(139, 92, 246, 0.5), 0 0 60px rgba(6, 182, 212, 0.15);
        }
        .nav-logo-link:hover .nav-logo-gradient {
          filter: brightness(1.2);
        }
        @media (max-width: 768px) {
          .nav-desktop { display: none !important; }
          .nav-hamburger { display: flex !important; }
        }
      `}</style>
    </>
  )
}
