import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ArrowDown } from 'lucide-react'

const steps = [
  { title: 'Trading Idea', desc: 'Identify a market inefficiency or pattern through observation and experience.' },
  { title: 'Strategy Rules', desc: 'Define precise entry, exit, position sizing, and risk parameters.' },
  { title: 'Market Data', desc: 'Collect, clean, and structure historical and real-time market data.' },
  { title: 'Backtesting', desc: 'Run strategy against historical data to evaluate edge and robustness.' },
  { title: 'Performance Analysis', desc: 'Analyze metrics: Sharpe, max drawdown, win rate, and expectancy.' },
  { title: 'Algorithm Development', desc: 'Translate validated strategy into clean, production-grade code.' },
  { title: 'Trading Bot', desc: 'Deploy automated execution engine with real-time order management.' },
  { title: 'Automated Signals', desc: 'Generate, filter, and deliver high-confidence trade signals live.' },
]

const stepVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: (i) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, delay: i * 0.1, ease: 'easeOut' },
  }),
}

export default function Workflow() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section className="section" ref={ref}>
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">ALGORITHMIC TRADING WORKFLOW</h2>
          <p className="section-subtitle">
            From concept to live automated execution — every step engineered.
          </p>
        </motion.div>

        <div className="wf-timeline">
          <div className="wf-line" />
          <div className="wf-line wf-line-glow" />
          {steps.map((step, i) => (
            <motion.div
              className="wf-step"
              key={i}
              custom={i}
              variants={stepVariants}
              initial="hidden"
              animate={isInView ? 'visible' : 'hidden'}
            >
              <div className="wf-step-badge">
                <span>{String(i + 1).padStart(2, '0')}</span>
              </div>
              <div className="wf-step-card">
                <div className="wf-step-header">
                  <h3 className="wf-step-title">{step.title}</h3>
                </div>
                <p className="wf-step-desc">{step.desc}</p>
              </div>
              {i < steps.length - 1 && (
                <motion.div
                  className="wf-arrow"
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : {}}
                  transition={{ delay: 0.5 + i * 0.1 }}
                >
                  <ArrowDown size={16} />
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        .wf-timeline {
          position: relative;
          max-width: 600px;
          margin: 3rem auto 0;
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .wf-line {
          position: absolute;
          top: 0;
          bottom: 0;
          left: 28px;
          width: 2px;
          background: rgba(255,255,255,0.06);
          border-radius: 2px;
        }
        .wf-line-glow {
          background: linear-gradient(180deg, #00f0ff 0%, #a855f7 50%, #00f0ff 100%);
          opacity: 0.3;
          filter: blur(1px);
        }
        .wf-step {
          position: relative;
          display: flex;
          align-items: flex-start;
          gap: 1.25rem;
          width: 100%;
          padding-bottom: 0.25rem;
        }
        .wf-step-badge {
          position: relative;
          z-index: 2;
          flex-shrink: 0;
          width: 56px;
          height: 56px;
          border-radius: 50%;
          background: rgba(0,240,255,0.08);
          border: 1px solid rgba(0,240,255,0.25);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 0.75rem;
          font-weight: 700;
          color: #00f0ff;
          letter-spacing: 0.1em;
        }
        .wf-step-card {
          flex: 1;
          padding: 1.25rem 1.5rem;
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.06);
          border-radius: 10px;
          backdrop-filter: blur(8px);
          transition: border-color 0.3s, box-shadow 0.3s;
        }
        .wf-step-card:hover {
          border-color: rgba(0,240,255,0.2);
          box-shadow: 0 4px 24px rgba(0,240,255,0.06);
        }
        .wf-step-header {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          margin-bottom: 0.5rem;
        }
        .wf-step-title {
          font-size: 1rem;
          font-weight: 600;
          color: #fff;
        }
        .wf-step-desc {
          font-size: 0.875rem;
          line-height: 1.65;
          color: rgba(255,255,255,0.45);
        }
        .wf-arrow {
          position: absolute;
          left: 46px;
          bottom: -12px;
          color: rgba(0,240,255,0.4);
          z-index: 2;
        }

        @media (max-width: 640px) {
          .wf-timeline {
            padding-left: 0;
          }
          .wf-line {
            left: 20px;
          }
          .wf-step-badge {
            width: 40px;
            height: 40px;
            font-size: 0.65rem;
          }
          .wf-step-card {
            padding: 1rem;
          }
          .wf-arrow {
            left: 34px;
          }
        }
      `}</style>
    </section>
  )
}
