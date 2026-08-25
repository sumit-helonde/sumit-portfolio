import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import { portfolio } from '../data/portfolioData'

const badges = [
  { text: 'FUNDED TRADER', color: '#10b981' },
  { text: 'ALGORITHMIC TRADING', color: '#8b5cf6' },
  { text: 'FULL STACK DEVELOPER', color: '#06b6d4' },
]

const taglines = [
  { text: 'FULL STACK DEVELOPER.', highlight: 'FULL STACK.' },
  { text: 'I BUILD. I TRADE. I AUTOMATE.', highlight: 'I TRADE.' },
]

const terminalCode = [
  { type: 'keyword', value: 'const' },
  { type: 'plain', value: ' ' },
  { type: 'variable', value: 'sumit' },
  { type: 'plain', value: ' = {' },
  { type: 'newline' },
  { type: 'plain', value: '  name: ' },
  { type: 'string', value: '"Sumit Helonde"' },
  { type: 'plain', value: ',' },
  { type: 'newline' },
  { type: 'plain', value: '  role: ' },
  { type: 'string', value: '"Full Stack Developer"' },
  { type: 'plain', value: ',' },
  { type: 'newline' },
  { type: 'plain', value: '  passion: ' },
  { type: 'string', value: '"Building & Automating"' },
  { type: 'plain', value: ',' },
  { type: 'newline' },
  { type: 'plain', value: '  trading: ' },
  { type: 'boolean', value: 'true' },
  { type: 'plain', value: ',' },
  { type: 'newline' },
  { type: 'plain', value: '  skills: [' },
  { type: 'newline' },
  { type: 'plain', value: '    ' },
  { type: 'string', value: '"React"' },
  { type: 'plain', value: ', ' },
  { type: 'string', value: '"Node.js"' },
  { type: 'plain', value: ',' },
  { type: 'newline' },
  { type: 'plain', value: '    ' },
  { type: 'string', value: '"Python"' },
  { type: 'plain', value: ', ' },
  { type: 'string', value: '"Trading Bots"' },
  { type: 'newline' },
  { type: 'plain', value: '  ],' },
  { type: 'newline' },
  { type: 'plain', value: '  status: ' },
  { type: 'string', value: '"🟢 Available"' },
  { type: 'newline' },
  { type: 'plain', value: '}' },
]

const renderCode = () => {
  let lineNum = 1
  let elements = []
  let currentLineContent = []

  const flushLine = () => {
    if (currentLineContent.length > 0) {
      elements.push(
        <div key={`line-${lineNum}`} style={{ display: 'flex' }}>
          <span style={{ color: '#4a5568', width: '2.5rem', textAlign: 'right', marginRight: '1rem', userSelect: 'none', flexShrink: 0 }}>
            {lineNum}
          </span>
          <span>{currentLineContent}</span>
        </div>
      )
      lineNum++
      currentLineContent = []
    }
  }

  terminalCode.forEach((token, i) => {
    if (token.type === 'newline') { flushLine(); return }
    const colorMap = { keyword: '#c084fc', string: '#34d399', variable: '#e0e0ff', boolean: '#f59e0b', plain: '#94a3b8' }
    currentLineContent.push(<span key={i} style={{ color: colorMap[token.type] || '#94a3b8' }}>{token.value}</span>)
  })

  flushLine()
  return elements
}

export default function Hero() {
  const [taglineIndex, setTaglineIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setTaglineIndex((prev) => (prev + 1) % taglines.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  const currentTagline = taglines[taglineIndex]

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1, duration: 0.6, ease: 'easeOut' },
    }),
  }

  const taglineVariants = {
    initial: { opacity: 0, y: 20, filter: 'blur(8px)' },
    animate: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.5, ease: 'easeOut' } },
    exit: { opacity: 0, y: -20, filter: 'blur(8px)', transition: { duration: 0.4, ease: 'easeIn' } },
  }

  const renderTagline = (text, highlight) => {
    const parts = text.split(highlight)
    if (parts.length === 1) return <>{text}</>
    return (
      <>
        {parts[0]}
        <span style={{
          background: 'linear-gradient(135deg, #8b5cf6, #06b6d4)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
        }}>
          {highlight}
        </span>
        {parts[1]}
      </>
    )
  }

  return (
    <section
      id="home"
      className="section"
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
        padding: '6rem 0 4rem',
      }}
    >
      {/* Background orbs */}
      <div style={{ position: 'absolute', top: '-20%', left: '-10%', width: '500px', height: '500px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(139,92,246,0.15) 0%, transparent 70%)', filter: 'blur(60px)', animation: 'floatOrb 8s ease-in-out infinite' }} />
      <div style={{ position: 'absolute', bottom: '-10%', right: '-5%', width: '400px', height: '400px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(6,182,212,0.12) 0%, transparent 70%)', filter: 'blur(60px)', animation: 'floatOrb 10s ease-in-out infinite reverse' }} />
      <div style={{ position: 'absolute', top: '40%', right: '20%', width: '300px', height: '300px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(16,185,129,0.08) 0%, transparent 70%)', filter: 'blur(50px)', animation: 'floatOrb 12s ease-in-out infinite' }} />

      <div className="container" style={{ position: 'relative', zIndex: 1, width: '100%' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
          <div>
            {/* Badges */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1.5rem' }}>
              {badges.map((badge, i) => (
                <motion.span
                  key={badge.text}
                  custom={i}
                  variants={fadeUp}
                  initial="hidden"
                  animate="visible"
                  style={{
                    padding: '0.35rem 0.85rem',
                    borderRadius: '999px',
                    border: `1px solid ${badge.color}33`,
                    background: `${badge.color}15`,
                    color: badge.color,
                    fontSize: '0.7rem',
                    fontWeight: 700,
                    letterSpacing: '0.1em',
                    fontFamily: "'JetBrains Mono', monospace",
                  }}
                >
                  {badge.text}
                </motion.span>
              ))}
            </div>

            {/* Animated tagline */}
            <div style={{ minHeight: 'clamp(2.2rem, 5vw, 3.8rem)', marginBottom: '1rem', position: 'relative' }}>
              <AnimatePresence mode="wait">
                <motion.h1
                  key={taglineIndex}
                  variants={taglineVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  style={{
                    fontSize: 'clamp(2.2rem, 5vw, 3.8rem)',
                    fontWeight: 800,
                    lineHeight: 1.1,
                    fontFamily: "'Space Grotesk', sans-serif",
                    color: '#e0e0ff',
                    margin: 0,
                  }}
                >
                  {renderTagline(currentTagline.text, currentTagline.highlight)}
                </motion.h1>
              </AnimatePresence>
            </div>

            {/* Roles */}
            <motion.p
              custom={4}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              style={{
                fontSize: '1.15rem',
                color: '#8b5cf6',
                fontWeight: 600,
                marginBottom: '0.75rem',
                fontFamily: "'DM Sans', sans-serif",
              }}
            >
              {portfolio?.roles?.join(' • ') || 'Full Stack Developer • Algo Trader • Builder'}
            </motion.p>

            {/* Description */}
            <motion.p
              custom={5}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              style={{
                fontSize: '1rem',
                color: '#94a3b8',
                lineHeight: 1.7,
                maxWidth: '520px',
                marginBottom: '2rem',
                fontFamily: "'DM Sans', sans-serif",
              }}
            >
              {portfolio?.heroDescription ||
                'I craft high-performance trading systems and full-stack applications. From algorithmic strategies to production-grade web platforms — I turn complex problems into elegant solutions.'}
            </motion.p>

            {/* Buttons */}
            <motion.div
              custom={6}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: '1.5rem' }}
            >
              <a
                href="#projects"
                onClick={(e) => { e.preventDefault(); document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' }) }}
                style={{
                  padding: '0.75rem 1.5rem',
                  borderRadius: '12px',
                  background: 'linear-gradient(135deg, #8b5cf6, #7c3aed)',
                  color: '#fff',
                  fontWeight: 700,
                  fontSize: '0.95rem',
                  textDecoration: 'none',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  transition: 'all 0.3s ease',
                  boxShadow: '0 4px 20px rgba(139, 92, 246, 0.3)',
                  fontFamily: "'DM Sans', sans-serif",
                }}
              >
                View My Projects →
              </a>
              <a
                href="#contact"
                onClick={(e) => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }) }}
                style={{
                  padding: '0.75rem 1.5rem',
                  borderRadius: '12px',
                  border: '1px solid rgba(139, 92, 246, 0.4)',
                  background: 'rgba(139, 92, 246, 0.08)',
                  color: '#c4b5fd',
                  fontWeight: 700,
                  fontSize: '0.95rem',
                  textDecoration: 'none',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  transition: 'all 0.3s ease',
                  fontFamily: "'DM Sans', sans-serif",
                }}
              >
                Let's Connect →
              </a>
            </motion.div>

            {/* Status */}
            <motion.div
              custom={7}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                fontSize: '0.85rem',
                color: '#10b981',
                fontFamily: "'DM Sans', sans-serif",
              }}
            >
              <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#10b981', display: 'inline-block', animation: 'pulse 2s ease-in-out infinite' }} />
              Currently Building & Learning
            </motion.div>
          </div>

          {/* Terminal card */}
          <motion.div initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.4, duration: 0.7 }}>
            <div
              className="glass-card"
              style={{
                borderRadius: '16px',
                overflow: 'hidden',
                border: '1px solid rgba(139, 92, 246, 0.2)',
                background: 'rgba(15, 15, 30, 0.8)',
                backdropFilter: 'blur(10px)',
              }}
            >
              <div style={{ padding: '0.75rem 1rem', display: 'flex', alignItems: 'center', gap: '0.5rem', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
                <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#ef4444' }} />
                <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#eab308' }} />
                <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#22c55e' }} />
                <span style={{ marginLeft: '0.5rem', fontSize: '0.75rem', color: '#64748b', fontFamily: "'JetBrains Mono', monospace" }}>sumit.js</span>
              </div>
              <pre style={{ padding: '1.25rem', margin: 0, fontSize: '0.8rem', lineHeight: 1.7, fontFamily: "'JetBrains Mono', monospace", overflowX: 'auto' }}>
                {renderCode()}
              </pre>
            </div>
          </motion.div>
        </div>
      </div>

      <style>{`
        @keyframes floatOrb {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(30px, -20px) scale(1.05); }
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.4; }
        }
        @media (max-width: 768px) {
          #home .container > div {
            grid-template-columns: 1fr !important;
            gap: 2rem !important;
          }
        }
      `}</style>
    </section>
  )
}
