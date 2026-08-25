import { motion } from 'framer-motion'
import { portfolio } from '../data/portfolioData'

export default function WhyIBuild() {
  return (
    <section className="usp-section" style={{ padding: '120px 24px' }}>
      <div className="container" style={{ textAlign: 'center', maxWidth: '900px' }}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
        >
          <p className="section-label" style={{ marginBottom: '28px' }}>WHY I BUILD</p>

          <h2
            className="gradient-text"
            style={{
              fontFamily: 'var(--font-h)',
              fontSize: 'clamp(1.8rem, 4vw, 3.2rem)',
              fontWeight: 700,
              letterSpacing: '-2px',
              lineHeight: 1.25,
              whiteSpace: 'pre-line',
              marginBottom: '28px',
            }}
          >
            {portfolio.whyIBuild}
          </h2>

          <div
            style={{
              width: '50px',
              height: '3px',
              background: 'linear-gradient(90deg, var(--accent), var(--green))',
              borderRadius: '2px',
              margin: '0 auto 28px',
            }}
          />

          <p
            style={{
              color: 'var(--text-2)',
              fontSize: '1.05rem',
              lineHeight: 1.85,
              maxWidth: '640px',
              margin: '0 auto',
            }}
          >
            {portfolio.whyIBuildSupport}
          </p>
        </motion.div>
      </div>
    </section>
  )
}
