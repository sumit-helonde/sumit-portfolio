import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { projects } from '../data/projects'

const project = projects[1]
const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] },
}

function DashboardSVG() {
  return (
    <div className="project-dashboard">
      <svg viewBox="0 0 900 500" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ background: '#0a0a10' }}>
        <rect width="900" height="500" fill="#0a0a10" />

        {/* Title bar */}
        <rect x="0" y="0" width="900" height="44" fill="#080810" />
        <circle cx="20" cy="22" r="6" fill="#ff5f57" />
        <circle cx="40" cy="22" r="6" fill="#ffbd2e" />
        <circle cx="60" cy="22" r="6" fill="#28ca42" />
        <text x="450" y="27" textAnchor="middle" fill="#5a5a72" fontSize="11" fontFamily="JetBrains Mono, monospace">BACKTESTING PLATFORM — DEMO DATA</text>

        {/* Equity Curve */}
        <rect x="20" y="60" width="560" height="260" rx="8" fill="#101018" stroke="#1c1c28" strokeWidth="1" />
        <text x="40" y="85" fill="#9898b0" fontSize="10" fontFamily="JetBrains Mono, monospace">EQUITY CURVE</text>

        {/* Grid */}
        {[120, 160, 200, 240, 280].map(y => (
          <line key={y} x1="40" y1={y} x2="560" y2={y} stroke="#16161f" strokeWidth="0.5" />
        ))}

        {/* Equity curve line */}
        <polyline
          points="50,260 80,255 110,248 140,240 170,235 200,225 230,230 260,218 290,210 320,215 350,200 380,192 410,198 440,185 470,180 500,175 530,170 555,165"
          stroke="#00e0db"
          strokeWidth="2"
          fill="none"
        />

        {/* Gradient fill under equity */}
        <polygon
          points="50,260 80,255 110,248 140,240 170,235 200,225 230,230 260,218 290,210 320,215 350,200 380,192 410,198 440,185 470,180 500,175 530,170 555,165 555,290 50,290"
          fill="url(#eqGrad)"
          opacity="0.3"
        />
        <defs>
          <linearGradient id="eqGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#00e0db" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#00e0db" stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* Axis labels */}
        <text x="50" y="300" fill="#5a5a72" fontSize="7" fontFamily="JetBrains Mono, monospace">Start</text>
        <text x="540" y="300" fill="#5a5a72" fontSize="7" fontFamily="JetBrains Mono, monospace">End</text>
        <text x="30" y="265" fill="#5a5a72" fontSize="7" fontFamily="JetBrains Mono, monospace">$10k</text>
        <text x="30" y="175" fill="#5a5a72" fontSize="7" fontFamily="JetBrains Mono, monospace">$15k</text>

        {/* Stats Cards Row */}
        <rect x="600" y="60" width="130" height="115" rx="8" fill="#101018" stroke="#1c1c28" strokeWidth="1" />
        <text x="620" y="85" fill="#5a5a72" fontSize="8" fontFamily="JetBrains Mono, monospace">WIN RATE</text>
        <text x="620" y="115" fill="#00e0db" fontSize="28" fontWeight="bold" fontFamily="JetBrains Mono, monospace">68%</text>
        <text x="620" y="135" fill="#5a5a72" fontSize="7" fontFamily="JetBrains Mono, monospace">Trades Won / Total</text>
        <rect x="620" y="148" width="90" height="4" rx="2" fill="#16161f" />
        <rect x="620" y="148" width="61" height="4" rx="2" fill="#00e0db" opacity="0.6" />

        <rect x="740" y="60" width="130" height="115" rx="8" fill="#101018" stroke="#1c1c28" strokeWidth="1" />
        <text x="760" y="85" fill="#5a5a72" fontSize="8" fontFamily="JetBrains Mono, monospace">SHARPE RATIO</text>
        <text x="760" y="115" fill="#7c6aef" fontSize="28" fontWeight="bold" fontFamily="JetBrains Mono, monospace">1.85</text>
        <text x="760" y="135" fill="#5a5a72" fontSize="7" fontFamily="JetBrains Mono, monospace">Risk-Adj Return</text>
        <rect x="760" y="148" width="90" height="4" rx="2" fill="#16161f" />
        <rect x="760" y="148" width="65" height="4" rx="2" fill="#7c6aef" opacity="0.6" />

        <rect x="600" y="190" width="130" height="115" rx="8" fill="#101018" stroke="#1c1c28" strokeWidth="1" />
        <text x="620" y="215" fill="#5a5a72" fontSize="8" fontFamily="JetBrains Mono, monospace">PROFIT FACTOR</text>
        <text x="620" y="245" fill="#b4a8ff" fontSize="28" fontWeight="bold" fontFamily="JetBrains Mono, monospace">2.14</text>
        <text x="620" y="265" fill="#5a5a72" fontSize="7" fontFamily="JetBrains Mono, monospace">Gross Profit / Loss</text>
        <rect x="620" y="278" width="90" height="4" rx="2" fill="#16161f" />
        <rect x="620" y="278" width="72" height="4" rx="2" fill="#b4a8ff" opacity="0.5" />

        <rect x="740" y="190" width="130" height="115" rx="8" fill="#101018" stroke="#1c1c28" strokeWidth="1" />
        <text x="760" y="215" fill="#5a5a72" fontSize="8" fontFamily="JetBrains Mono, monospace">MAX DRAWDOWN</text>
        <text x="760" y="245" fill="#ef4444" fontSize="28" fontWeight="bold" fontFamily="JetBrains Mono, monospace">-8.3%</text>
        <text x="760" y="265" fill="#5a5a72" fontSize="7" fontFamily="JetBrains Mono, monospace">Worst Peak to Trough</text>
        <rect x="760" y="278" width="90" height="4" rx="2" fill="#16161f" />
        <rect x="760" y="278" width="25" height="4" rx="2" fill="#ef4444" opacity="0.5" />

        {/* Bottom section: Total Trades + Monthly Returns */}
        <rect x="20" y="340" width="260" height="140" rx="8" fill="#101018" stroke="#1c1c28" strokeWidth="1" />
        <text x="40" y="370" fill="#9898b0" fontSize="10" fontFamily="JetBrains Mono, monospace">TOTAL TRADES</text>
        <text x="40" y="410" fill="#ededf4" fontSize="36" fontWeight="bold" fontFamily="JetBrains Mono, monospace">247</text>
        <text x="40" y="435" fill="#5a5a72" fontSize="8" fontFamily="JetBrains Mono, monospace">168 Wins — 79 Losses</text>
        <text x="175" y="410" fill="#00e0db" fontSize="11" fontFamily="JetBrains Mono, monospace">Avg: 3.2 / day</text>

        {/* Monthly returns bar chart */}
        <rect x="300" y="340" width="580" height="140" rx="8" fill="#101018" stroke="#1c1c28" strokeWidth="1" />
        <text x="320" y="370" fill="#9898b0" fontSize="10" fontFamily="JetBrains Mono, monospace">MONTHLY RETURNS (%)</text>

        {[
          { m: 'Jan', v: 4.2, x: 340 },
          { m: 'Feb', v: 6.8, x: 390 },
          { m: 'Mar', v: -2.1, x: 440 },
          { m: 'Apr', v: 8.5, x: 490 },
          { m: 'May', v: 3.7, x: 540 },
          { m: 'Jun', v: 5.1, x: 590 },
          { m: 'Jul', v: -1.4, x: 640 },
          { m: 'Aug', v: 7.2, x: 690 },
        ].map(({ m, v, x }, i) => {
          const barH = Math.abs(v) * 8
          const barY = v >= 0 ? 450 - barH : 450
          const color = v >= 0 ? '#00e0db' : '#ef4444'
          return (
            <g key={i}>
              <rect x={x} y={barY} width="32" height={barH} rx="3" fill={color} opacity="0.6" />
              <text x={x + 16} y={v >= 0 ? barY - 5 : barY + barH + 12} textAnchor="middle" fill={color} fontSize="8" fontFamily="JetBrains Mono, monospace">{v > 0 ? '+' : ''}{v}%</text>
              <text x={x + 16} y="465" textAnchor="middle" fill="#5a5a72" fontSize="7" fontFamily="JetBrains Mono, monospace">{m}</text>
            </g>
          )
        })}

        {/* Baseline */}
        <line x1="330" y1="450" x2="730" y2="450" stroke="#1c1c28" strokeWidth="1" />

        {/* DEMO watermark */}
        <text x="450" y="270" textAnchor="middle" fill="rgba(255,255,255,0.03)" fontSize="48" fontWeight="bold" fontFamily="JetBrains Mono, monospace">DEMO DATA</text>
      </svg>
    </div>
  )
}

export default function ProjectBacktest() {
  useEffect(() => { window.scrollTo(0, 0) }, [])

  const howItWorks = [
    { title: 'Strategy Input', desc: 'Trader defines entry/exit rules, indicators and risk parameters.' },
    { title: 'Historical Data', desc: 'Platform loads years of OHLC market data for the chosen instrument.' },
    { title: 'Simulation', desc: 'Engine replays the strategy tick-by-tick over historical data.' },
    { title: 'Trade Log', desc: 'Every simulated trade is recorded with entry, exit, P&L and duration.' },
    { title: 'Performance Metrics', desc: 'Win rate, Sharpe ratio, profit factor and drawdown are calculated.' },
    { title: 'Analytics Dashboard', desc: 'Results are visualized through equity curves, monthly returns and reports.' },
  ]

  return (
    <motion.div
      className="project-detail"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
    >
      <div className="container">
        <Link to="/#projects" className="back-link">
          <ArrowLeft size={16} /> Back to Projects
        </Link>

        <motion.div {...fadeUp}>
          <span className="project-card-badge" style={{ marginBottom: '16px', display: 'inline-block' }}>
            {project.badge}
          </span>
          <h1>{project.title}</h1>
          <div className="tags">
            {project.tech.map(t => (
              <span className="tag tag-accent" key={t}>{t}</span>
            ))}
          </div>
        </motion.div>

        <motion.div {...fadeUp} style={{ transitionDelay: '0.1s' }}>
          <DashboardSVG />
        </motion.div>

        {/* Overview */}
        <motion.div className="project-section" {...fadeUp}>
          <h2>Overview</h2>
          <p>{project.description}</p>
        </motion.div>

        {/* How It Works */}
        <motion.div className="project-section" {...fadeUp}>
          <h2>How It Works</h2>
          <div className="project-workflow" style={{ marginTop: '20px' }}>
            {howItWorks.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: i * 0.08 }}
              >
                <div className="workflow-step" style={{ maxWidth: '500px' }}>
                  <span className="num">{i + 1}</span>
                  <div>
                    <span className="label" style={{ fontWeight: 600 }}>{step.title}</span>
                    <p style={{ color: 'var(--text-3)', fontSize: '0.82rem', marginTop: '4px', lineHeight: 1.5 }}>{step.desc}</p>
                  </div>
                </div>
                {i < howItWorks.length - 1 && <div className="workflow-arrow" />}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Features */}
        <motion.div className="project-section" {...fadeUp}>
          <h2>Features</h2>
          <ul>
            {project.features.map((f, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
              >
                {f}
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* Technology */}
        <motion.div className="project-section" {...fadeUp}>
          <h2>Technology</h2>
          <div className="project-tech-tags">
            {project.tech.map(t => (
              <span className="tag tag-green" key={t}>{t}</span>
            ))}
          </div>
        </motion.div>

        {/* Workflow */}
        <motion.div className="project-section" {...fadeUp}>
          <h2>Workflow</h2>
          <div className="project-workflow">
            {project.workflow.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: i * 0.08 }}
              >
                <div className="workflow-step">
                  <span className="num">{i + 1}</span>
                  <span className="label">{step}</span>
                </div>
                {i < project.workflow.length - 1 && <div className="workflow-arrow" />}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Analytics Dashboard Explanation */}
        <motion.div className="project-section" {...fadeUp}>
          <h2>Analytics Dashboard</h2>
          <p>
            The platform provides a comprehensive analytics dashboard displaying
            equity curves, win rate, Sharpe ratio, profit factor, maximum drawdown,
            monthly returns and detailed trade statistics — giving traders a
            complete picture of their strategy's performance.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: '16px', marginTop: '20px' }}>
            {[
              { label: 'Win Rate', value: '68%', color: 'var(--green)' },
              { label: 'Sharpe Ratio', value: '1.85', color: 'var(--accent-2)' },
              { label: 'Profit Factor', value: '2.14', color: 'var(--accent-2)' },
              { label: 'Max Drawdown', value: '-8.3%', color: '#ef4444' },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                style={{
                  padding: '20px',
                  background: 'var(--bg-2)',
                  border: '1px solid var(--border)',
                  borderRadius: 'var(--r-sm)',
                  textAlign: 'center',
                }}
              >
                <div style={{ fontFamily: 'var(--font-h)', fontSize: '1.6rem', fontWeight: 700, color: stat.color, marginBottom: '4px' }}>
                  {stat.value}
                </div>
                <div style={{ fontSize: '0.78rem', color: 'var(--text-3)' }}>{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Navigation */}
        <motion.div className="project-nav" {...fadeUp}>
          <Link to="/projects/trading-signal-bot">
            <ArrowLeft size={16} />
            Previous: Trading Signal Bot
          </Link>
          <span style={{ color: 'var(--text-3)', fontSize: '0.85rem' }}>
            {projects.length} / {projects.length}
          </span>
        </motion.div>
      </div>
    </motion.div>
  )
}
