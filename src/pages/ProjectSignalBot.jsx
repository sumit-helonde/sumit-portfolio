import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowLeft, ArrowRight, ExternalLink } from 'lucide-react'
import { projects } from '../data/projects'

const project = projects[0]
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
        <text x="450" y="27" textAnchor="middle" fill="#5a5a72" fontSize="11" fontFamily="JetBrains Mono, monospace">TRADING SIGNAL BOT — DEMO DASHBOARD</text>

        {/* Chart area */}
        <rect x="20" y="60" width="580" height="300" rx="8" fill="#101018" stroke="#1c1c28" strokeWidth="1" />

        {/* Grid lines */}
        {[100, 150, 200, 250, 300].map(y => (
          <line key={y} x1="30" y1={y} x2="590" y2={y} stroke="#16161f" strokeWidth="0.5" />
        ))}
        {[100, 170, 240, 310, 380, 450, 520].map(x => (
          <line key={x} x1={x} y1="70" x2={x} y2="350" stroke="#16161f" strokeWidth="0.5" />
        ))}

        {/* Candlestick price data */}
        {[
          [80,260,245,270], [110,250,235,255], [140,240,220,250], [170,230,215,235],
          [200,225,210,230], [230,220,200,225], [260,235,218,240], [290,245,230,250],
          [320,255,240,260], [350,265,248,270], [380,275,255,280], [410,280,262,285],
          [440,270,255,278], [470,260,245,268], [500,250,235,262], [530,240,225,255],
        ].map(([x, h, l, c], i) => {
          const isUp = c > (i > 0 ? [260,250,240,230,225,220,235,245,255,265,275,280,270,260,250,240][i-1] : 260)
          const color = isUp ? '#00e0db' : '#ef4444'
          return (
            <g key={i}>
              <line x1={x} y1={l - 5} x2={x} y2={h + 5} stroke={color} strokeWidth="1" />
              <rect x={x - 6} y={isUp ? c : h} width="12" height={Math.abs(c - h) || 8} rx="1" fill={color} opacity="0.9" />
            </g>
          )
        })}

        {/* Moving average line */}
        <polyline
          points="80,255 110,248 140,238 170,232 200,228 230,222 260,228 290,238 320,248 350,258 380,268 410,275 440,265 470,255 500,245 530,238"
          stroke="#7c6aef"
          strokeWidth="2"
          fill="none"
          opacity="0.7"
        />

        {/* BUY signal */}
        <g>
          <circle cx="260" cy="245" r="10" fill="#00e0db" opacity="0.2" />
          <circle cx="260" cy="245" r="6" fill="#00e0db" />
          <text x="260" y="230" textAnchor="middle" fill="#00e0db" fontSize="9" fontWeight="bold" fontFamily="JetBrains Mono, monospace">BUY</text>
          <line x1="260" y1="245" x2="260" y2="355" stroke="#00e0db" strokeWidth="1" strokeDasharray="3,3" opacity="0.4" />
        </g>

        {/* SELL signal */}
        <g>
          <circle cx="440" cy="285" r="10" fill="#ef4444" opacity="0.2" />
          <circle cx="440" cy="285" r="6" fill="#ef4444" />
          <text x="440" y="270" textAnchor="middle" fill="#ef4444" fontSize="9" fontWeight="bold" fontFamily="JetBrains Mono, monospace">SELL</text>
          <line x1="440" y1="285" x2="440" y2="355" stroke="#ef4444" strokeWidth="1" strokeDasharray="3,3" opacity="0.4" />
        </g>

        {/* Entry / SL / TP levels */}
        <line x1="30" y1="245" x2="590" y2="245" stroke="#ffd700" strokeWidth="1" strokeDasharray="4,4" opacity="0.5" />
        <text x="35" y="243" fill="#ffd700" fontSize="8" fontFamily="JetBrains Mono, monospace">Entry: 1.0850</text>

        <line x1="30" y1="290" x2="590" y2="290" stroke="#ef4444" strokeWidth="1" strokeDasharray="4,4" opacity="0.5" />
        <text x="35" y="288" fill="#ef4444" fontSize="8" fontFamily="JetBrains Mono, monospace">SL: 1.0820</text>

        <line x1="30" y1="210" x2="590" y2="210" stroke="#00e0db" strokeWidth="1" strokeDasharray="4,4" opacity="0.5" />
        <text x="35" y="208" fill="#00e0db" fontSize="8" fontFamily="JetBrains Mono, monospace">TP: 1.0910</text>

        {/* Signal Status Panel */}
        <rect x="620" y="60" width="260" height="130" rx="8" fill="#101018" stroke="#1c1c28" strokeWidth="1" />
        <text x="640" y="85" fill="#9898b0" fontSize="10" fontFamily="JetBrains Mono, monospace">SIGNAL STATUS</text>
        <rect x="640" y="98" width="90" height="28" rx="6" fill="rgba(0,224,219,0.1)" stroke="rgba(0,224,219,0.2)" strokeWidth="1" />
        <text x="685" y="117" textAnchor="middle" fill="#00e0db" fontSize="11" fontWeight="bold" fontFamily="JetBrains Mono, monospace">BUY ✓</text>
        <rect x="740" y="98" width="90" height="28" rx="6" fill="rgba(255,255,255,0.03)" stroke="#1c1c28" strokeWidth="1" />
        <text x="785" y="117" textAnchor="middle" fill="#5a5a72" fontSize="11" fontFamily="JetBrains Mono, monospace">SELL</text>

        <text x="640" y="150" fill="#9898b0" fontSize="8" fontFamily="JetBrains Mono, monospace">Pair: EUR/USD</text>
        <text x="640" y="165" fill="#9898b0" fontSize="8" fontFamily="JetBrains Mono, monospace">Timeframe: 1H</text>
        <text x="780" y="150" fill="#9898b0" fontSize="8" fontFamily="JetBrains Mono, monospace">Confidence: 87%</text>
        <text x="780" y="165" fill="#9898b0" fontSize="8" fontFamily="JetBrains Mono, monospace">Time: 14:32 UTC</text>

        {/* Telegram Preview */}
        <rect x="620" y="210" width="260" height="150" rx="8" fill="#101018" stroke="#1c1c28" strokeWidth="1" />
        <text x="640" y="235" fill="#9898b0" fontSize="10" fontFamily="JetBrains Mono, monospace">TELEGRAM PREVIEW</text>

        <rect x="635" y="248" width="230" height="100" rx="6" fill="#16161f" />
        <text x="650" y="270" fill="#7c6aef" fontSize="8" fontWeight="bold" fontFamily="JetBrains Mono, monospace">✦ Signal Bot</text>
        <text x="650" y="288" fill="#00e0db" fontSize="9" fontWeight="bold" fontFamily="JetBrains Mono, monospace">📈 BUY Signal</text>
        <text x="650" y="304" fill="#9898b0" fontSize="7.5" fontFamily="JetBrains Mono, monospace">Pair: EUR/USD | TF: 1H</text>
        <text x="650" y="318" fill="#9898b0" fontSize="7.5" fontFamily="JetBrains Mono, monospace">Entry: 1.0850 | SL: 1.0820</text>
        <text x="650" y="332" fill="#9898b0" fontSize="7.5" fontFamily="JetBrains Mono, monospace">TP: 1.0910 | R:R 1:2</text>

        {/* Bottom status bar */}
        <rect x="0" y="460" width="900" height="40" fill="#080810" />
        <circle cx="30" cy="480" r="4" fill="#28ca42" />
        <text x="42" y="484" fill="#5a5a72" fontSize="9" fontFamily="JetBrains Mono, monospace">Bot Active — Monitoring Markets</text>
        <text x="870" y="484" textAnchor="end" fill="#5a5a72" fontSize="9" fontFamily="JetBrains Mono, monospace">Last Signal: 2 min ago</text>

        {/* DEMO watermark */}
        <text x="310" y="310" textAnchor="middle" fill="rgba(255,255,255,0.03)" fontSize="48" fontWeight="bold" fontFamily="JetBrains Mono, monospace">DEMO DASHBOARD</text>
      </svg>
    </div>
  )
}

export default function ProjectSignalBot() {
  useEffect(() => { window.scrollTo(0, 0) }, [])

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

        {/* Problem */}
        <motion.div className="project-section" {...fadeUp}>
          <h2>The Problem</h2>
          <p>
            Traders often struggle with monitoring multiple markets simultaneously.
            Missing a trading opportunity because you weren't watching the charts is frustrating
            and costly. Manual analysis is time-consuming and emotionally driven.
          </p>
        </motion.div>

        {/* Solution */}
        <motion.div className="project-section" {...fadeUp}>
          <h2>The Solution</h2>
          <p>
            An automated signal bot that continuously monitors market conditions using
            strategy logic derived from 2+ years of hands-on trading experience. When
            conditions align, the bot generates a signal with precise entry, stop-loss
            and take-profit levels — delivered instantly via Telegram.
          </p>
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
                transition={{ duration: 0.4, delay: i * 0.07 }}
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

        {/* Performance */}
        <motion.div className="project-section" {...fadeUp}>
          <h2>Performance</h2>
          <div style={{ display: 'flex', alignItems: 'baseline', gap: '8px', marginBottom: '8px' }}>
            <span
              style={{
                fontFamily: 'var(--font-h)',
                fontSize: '3rem',
                fontWeight: 700,
                color: 'var(--green)',
                letterSpacing: '-2px',
              }}
            >
              26%
            </span>
            <span style={{ color: 'var(--text-2)', fontSize: '1rem' }}>
              reported return on capital — last month
            </span>
          </div>
          <div className="disclaimer">
            ⚠️ {project.disclaimer}
          </div>
        </motion.div>

        {/* Navigation */}
        <motion.div className="project-nav" {...fadeUp}>
          <Link to="/projects/trading-backtesting-platform">
            <ArrowLeft size={16} />
            Next Project: Backtesting Platform
          </Link>
          <span style={{ color: 'var(--text-3)', fontSize: '0.85rem' }}>
            {projects.length} / {projects.length}
          </span>
        </motion.div>
      </div>
    </motion.div>
  )
}
