import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { portfolio } from '../data/portfolioData'

const defaultCards = [
  {
    title: 'Price Action & Market Structure',
    description:
      'Reading raw price movements, order blocks, liquidity zones, and institutional footprints without reliance on lagging indicators.',
  },
  {
    title: 'Algorithmic Strategy Development',
    description:
      'Translating discretionary trading edge into rule-based, testable algorithmic strategies with strict entry/exit and risk parameters.',
  },
  {
    title: 'Quantitative Risk Management',
    description:
      'Position sizing models, portfolio-level risk controls, drawdown limits, and dynamic hedging to protect capital across market regimes.',
  },
  {
    title: 'Multi-Timeframe Confluence',
    description:
      'Aligning macro directional bias with micro precision entries using inter-timeframe analysis for high-probability trade setups.',
  },
  {
    title: 'Backtesting & Performance Analytics',
    description:
      'Rigorous out-of-sample testing, Monte Carlo simulations, and walk-forward optimization to validate strategy robustness.',
  },
  {
    title: 'Execution & Automation',
    description:
      'Building low-latency trading bots, signal engines, and real-time dashboards that execute strategies with institutional-grade precision.',
  },
]

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.2 },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
}

export default function TradingExpertise() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })
  const cards = portfolio.tradingExpertise || defaultCards

  return (
    <section className="section" ref={ref}>
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">TRADING EXPERTISE</h2>
          <p className="section-subtitle">
            Deep market knowledge powering intelligent systems.
          </p>
        </motion.div>

        <motion.div
          className="te-grid"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {cards.map((card, i) => (
            <motion.div className="te-card" key={i} variants={cardVariants}>
              <div className="te-card-number">
                {String(i + 1).padStart(2, '0')}
              </div>
              <h3 className="te-card-title">{card.title}</h3>
              <p className="te-card-desc">{card.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <style>{`
        .te-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.5rem;
          margin-top: 3rem;
        }
        .te-card {
          position: relative;
          padding: 2rem 1.5rem;
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.06);
          border-radius: 12px;
          transition: transform 0.35s ease, border-color 0.35s ease, box-shadow 0.35s ease;
          overflow: hidden;
        }
        .te-card::before {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: 12px;
          padding: 1px;
          background: linear-gradient(135deg, transparent 40%, rgba(0,240,255,0.3), rgba(168,85,247,0.3));
          -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
          opacity: 0;
          transition: opacity 0.35s ease;
          pointer-events: none;
        }
        .te-card:hover {
          transform: translateY(-6px);
          border-color: rgba(0,240,255,0.15);
          box-shadow: 0 12px 40px rgba(0,240,255,0.08);
        }
        .te-card:hover::before {
          opacity: 1;
        }
        .te-card-number {
          font-size: 0.7rem;
          letter-spacing: 0.2em;
          color: rgba(0,240,255,0.5);
          font-weight: 600;
          margin-bottom: 0.75rem;
        }
        .te-card-title {
          font-size: 1.1rem;
          font-weight: 600;
          color: #fff;
          margin-bottom: 0.75rem;
          line-height: 1.4;
        }
        .te-card-desc {
          font-size: 0.9rem;
          line-height: 1.7;
          color: rgba(255,255,255,0.5);
        }

        @media (max-width: 1024px) {
          .te-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (max-width: 640px) {
          .te-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  )
}
