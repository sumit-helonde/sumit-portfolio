import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ArrowLeftRight } from 'lucide-react'
import { portfolio } from '../data/portfolioData'

const traderItems = [
  { label: 'Institutional Order Flow', color: '#00f0ff' },
  { label: 'Price Action & Market Structure', color: '#00d4aa' },
  { label: 'Risk Management Frameworks', color: '#a855f7' },
  { label: 'Multi-Timeframe Analysis', color: '#f472b6' },
  { label: 'Algorithmic Strategy Design', color: '#facc15' },
]

const builderItems = [
  { label: 'React & Next.js Applications', color: '#00f0ff' },
  { label: 'Python Automation & AI', color: '#00d4aa' },
  { label: 'Node.js & Backend Systems', color: '#a855f7' },
  { label: 'Database Architecture', color: '#f472b6' },
  { label: 'Cloud Infrastructure & DevOps', color: '#facc15' },
]

const listVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1, delayChildren: 0.3 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

const itemVariantsRight = {
  hidden: { opacity: 0, x: 30 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

export default function TraderDeveloper() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section className="section" ref={ref}>
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <ArrowLeftRight className="section-icon" size={40} />
          <h2 className="section-title">TRADING × TECHNOLOGY</h2>
          <p className="section-subtitle">
            Where market experience meets software engineering.
          </p>
        </motion.div>

        <div className="trading-developer-grid">
          <motion.div
            className="td-column"
            variants={listVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
          >
            <h3 className="td-column-title">THE TRADER</h3>
            {traderItems.map((item, i) => (
              <motion.div className="td-item" key={i} variants={itemVariants}>
                <span className="td-dot" style={{ background: item.color }} />
                <span className="td-label">{item.label}</span>
              </motion.div>
            ))}
          </motion.div>

          <div className="td-center">
            <motion.div
              className="td-circle"
              initial={{ scale: 0, opacity: 0 }}
              animate={isInView ? { scale: 1, opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.4, type: 'spring', stiffness: 120 }}
            >
              <div className="td-circle-ring" />
              <div className="td-circle-ring td-circle-ring-2" />
              <span className="td-circle-text">SUMIT</span>
              <div className="td-lines-left">
                {[0, 1, 2].map((i) => (
                  <motion.div
                    key={`l${i}`}
                    className="td-line td-line-left"
                    initial={{ scaleX: 0 }}
                    animate={isInView ? { scaleX: 1 } : {}}
                    transition={{ duration: 0.6, delay: 0.8 + i * 0.15 }}
                    style={{ top: `${25 + i * 25}%` }}
                  />
                ))}
              </div>
              <div className="td-lines-right">
                {[0, 1, 2].map((i) => (
                  <motion.div
                    key={`r${i}`}
                    className="td-line td-line-right"
                    initial={{ scaleX: 0 }}
                    animate={isInView ? { scaleX: 1 } : {}}
                    transition={{ duration: 0.6, delay: 0.8 + i * 0.15 }}
                    style={{ top: `${25 + i * 25}%` }}
                  />
                ))}
              </div>
            </motion.div>
          </div>

          <motion.div
            className="td-column"
            variants={listVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
          >
            <h3 className="td-column-title">THE BUILDER</h3>
            {builderItems.map((item, i) => (
              <motion.div className="td-item td-item-right" key={i} variants={itemVariantsRight}>
                <span className="td-label">{item.label}</span>
                <span className="td-dot" style={{ background: item.color }} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      <style>{`
        .trading-developer-grid {
          display: grid;
          grid-template-columns: 1fr auto 1fr;
          align-items: center;
          gap: 2rem;
          margin-top: 3rem;
        }
        .td-column {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }
        .td-column-title {
          font-size: 0.75rem;
          letter-spacing: 0.3em;
          color: #00f0ff;
          text-transform: uppercase;
          margin-bottom: 0.5rem;
          font-weight: 600;
        }
        .td-item {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          padding: 0.75rem 1rem;
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.06);
          border-radius: 8px;
          transition: background 0.3s, border-color 0.3s;
        }
        .td-item:hover {
          background: rgba(255,255,255,0.06);
          border-color: rgba(0,240,255,0.2);
        }
        .td-item-right {
          justify-content: flex-end;
          text-align: right;
        }
        .td-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          flex-shrink: 0;
          box-shadow: 0 0 8px currentColor;
        }
        .td-label {
          font-size: 0.9rem;
          color: rgba(255,255,255,0.85);
        }
        .td-center {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          min-height: 300px;
        }
        .td-circle {
          position: relative;
          width: 120px;
          height: 120px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          background: rgba(0,240,255,0.05);
          z-index: 2;
        }
        .td-circle-ring {
          position: absolute;
          inset: -12px;
          border-radius: 50%;
          border: 1px solid rgba(0,240,255,0.2);
          animation: td-pulse 3s ease-in-out infinite;
        }
        .td-circle-ring-2 {
          inset: -24px;
          border-color: rgba(168,85,247,0.15);
          animation-delay: 1.5s;
        }
        @keyframes td-pulse {
          0%, 100% { transform: scale(1); opacity: 0.5; }
          50% { transform: scale(1.05); opacity: 1; }
        }
        .td-circle-text {
          font-size: 1.1rem;
          font-weight: 700;
          letter-spacing: 0.15em;
          background: linear-gradient(135deg, #00f0ff, #a855f7);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .td-lines-left,
        .td-lines-right {
          position: absolute;
          top: 0;
          width: 60px;
          height: 100%;
          pointer-events: none;
        }
        .td-lines-left {
          right: 100%;
        }
        .td-lines-right {
          left: 100%;
        }
        .td-line {
          position: absolute;
          width: 100%;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(0,240,255,0.4), transparent);
          transform-origin: left center;
        }
        .td-line-right {
          background: linear-gradient(90deg, transparent, rgba(168,85,247,0.4), transparent);
          transform-origin: right center;
        }

        @media (max-width: 768px) {
          .trading-developer-grid {
            grid-template-columns: 1fr;
            gap: 2rem;
          }
          .td-center {
            min-height: 160px;
            order: -1;
          }
          .td-item-right {
            justify-content: flex-start;
            text-align: left;
          }
          .td-lines-left,
          .td-lines-right {
            display: none;
          }
        }
      `}</style>
    </section>
  )
}
