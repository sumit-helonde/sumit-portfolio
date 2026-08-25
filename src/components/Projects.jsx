import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { projects } from '../data/projects';

function SignalBotImage() {
  return (
    <svg viewBox="0 0 600 300" className="project-card-svg">
      <defs>
        <linearGradient id="signalBg" x1="0" y1="0" x2="600" y2="300" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#0a1a14"/>
          <stop offset="100%" stopColor="#0d2a1f"/>
        </linearGradient>
        <linearGradient id="signalLine" x1="0" y1="0" x2="600" y2="0" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#00e0db" stopOpacity="0.1"/>
          <stop offset="50%" stopColor="#00e0db" stopOpacity="1"/>
          <stop offset="100%" stopColor="#00ff88" stopOpacity="0.8"/>
        </linearGradient>
      </defs>
      <rect width="600" height="300" fill="url(#signalBg)" rx="0"/>
      <g opacity="0.06" stroke="#00e0db" strokeWidth="0.5">
        {[0,50,100,150,200,250].map(y => <line key={`h${y}`} x1="0" y1={y} x2="600" y2={y}/>)}
        {[0,100,200,300,400,500,600].map(x => <line key={`v${x}`} x1={x} y1="0" x2={x} y2="300"/>)}
      </g>
      <path d="M 0 200 Q 50 180, 100 190 T 200 140 T 300 160 T 400 100 T 500 120 T 600 80" fill="none" stroke="url(#signalLine)" strokeWidth="2.5" strokeLinecap="round"/>
      <path d="M 0 210 Q 50 200, 100 205 T 200 170 T 300 180 T 400 130 T 500 145 T 600 110" fill="none" stroke="#00e0db" strokeWidth="0.8" opacity="0.2" strokeDasharray="4 4"/>
      {[
        {x:200,y:140,label:'BUY',color:'#00e0db'},
        {x:400,y:100,label:'SELL',color:'#ff6b6b'},
        {x:500,y:120,label:'BUY',color:'#00e0db'},
      ].map((s,i) => (
        <g key={i}>
          <circle cx={s.x} cy={s.y} r="8" fill="none" stroke={s.color} strokeWidth="1.5" opacity="0.5">
            <animate attributeName="r" values="6;10;6" dur="2s" repeatCount="indefinite" begin={`${i*0.5}s`}/>
          </circle>
          <circle cx={s.x} cy={s.y} r="3" fill={s.color}/>
          <rect x={s.x-16} y={s.y-24} width="32" height="14" rx="3" fill={s.color} opacity="0.15"/>
          <text x={s.x} y={s.y-14} fill={s.color} fontSize="7" fontFamily="monospace" textAnchor="middle" fontWeight="bold">{s.label}</text>
        </g>
      ))}
      <rect x="20" y="20" width="140" height="50" rx="6" fill="rgba(0,224,219,0.08)" stroke="rgba(0,224,219,0.2)" strokeWidth="1"/>
      <text x="32" y="38" fill="#00e0db" fontSize="8" fontFamily="monospace" opacity="0.7">SIGNAL ENGINE</text>
      <text x="32" y="54" fill="#00e0db" fontSize="12" fontFamily="monospace" fontWeight="bold">SCANNING...</text>
      <circle cx="148" cy="32" r="3" fill="#00e0db"><animate attributeName="opacity" values="1;0.3;1" dur="1.5s" repeatCount="indefinite"/></circle>
      <rect x="440" y="20" width="140" height="50" rx="6" fill="rgba(0,224,219,0.08)" stroke="rgba(0,224,219,0.2)" strokeWidth="1"/>
      <text x="452" y="38" fill="#00e0db" fontSize="8" fontFamily="monospace" opacity="0.7">LAST SIGNAL</text>
      <text x="452" y="54" fill="#00e0db" fontSize="11" fontFamily="monospace" fontWeight="bold">BUY @ 245.50</text>
      <g transform="translate(20,240)">
        {[40,35,45,30,50,38,55,42,48,52,36,44,58,40,46,54,38,50,44,56].map((h,i) => (
          <rect key={i} x={i*28} y={50-h} width="18" height={h} rx="2" fill="#00e0db" opacity={0.1+i*0.02}/>
        ))}
      </g>
    </svg>
  );
}

function BacktestImage() {
  return (
    <svg viewBox="0 0 600 300" className="project-card-svg">
      <defs>
        <linearGradient id="btBg" x1="0" y1="0" x2="600" y2="300" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#140a28"/>
          <stop offset="100%" stopColor="#1e1040"/>
        </linearGradient>
        <linearGradient id="btLine" x1="0" y1="0" x2="600" y2="0" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#a78bfa" stopOpacity="0.1"/>
          <stop offset="50%" stopColor="#a78bfa" stopOpacity="1"/>
          <stop offset="100%" stopColor="#c084fc" stopOpacity="0.8"/>
        </linearGradient>
      </defs>
      <rect width="600" height="300" fill="url(#btBg)" rx="0"/>
      <g opacity="0.06" stroke="#a78bfa" strokeWidth="0.5">
        {[0,50,100,150,200,250].map(y => <line key={`h${y}`} x1="0" y1={y} x2="600" y2={y}/>)}
        {[0,100,200,300,400,500,600].map(x => <line key={`v${x}`} x1={x} y1="0" x2={x} y2="300"/>)}
      </g>
      <rect x="20" y="20" width="130" height="60" rx="6" fill="rgba(167,139,250,0.08)" stroke="rgba(167,139,250,0.2)" strokeWidth="1"/>
      <text x="32" y="38" fill="#a78bfa" fontSize="8" fontFamily="monospace" opacity="0.7">WIN RATE</text>
      <text x="32" y="58" fill="#a78bfa" fontSize="18" fontFamily="monospace" fontWeight="bold">72.4%</text>
      <rect x="170" y="20" width="130" height="60" rx="6" fill="rgba(0,224,219,0.08)" stroke="rgba(0,224,219,0.2)" strokeWidth="1"/>
      <text x="182" y="38" fill="#00e0db" fontSize="8" fontFamily="monospace" opacity="0.7">SHARPE RATIO</text>
      <text x="182" y="58" fill="#00e0db" fontSize="18" fontFamily="monospace" fontWeight="bold">2.1</text>
      <rect x="320" y="20" width="130" height="60" rx="6" fill="rgba(253,203,110,0.08)" stroke="rgba(253,203,110,0.2)" strokeWidth="1"/>
      <text x="332" y="38" fill="#fdcb6e" fontSize="8" fontFamily="monospace" opacity="0.7">MAX DRAWDOWN</text>
      <text x="332" y="58" fill="#fdcb6e" fontSize="18" fontFamily="monospace" fontWeight="bold">-8.3%</text>
      <rect x="470" y="20" width="110" height="60" rx="6" fill="rgba(0,224,219,0.08)" stroke="rgba(0,224,219,0.2)" strokeWidth="1"/>
      <text x="482" y="38" fill="#00e0db" fontSize="8" fontFamily="monospace" opacity="0.7">TOTAL RETURN</text>
      <text x="482" y="58" fill="#00e0db" fontSize="18" fontFamily="monospace" fontWeight="bold">+142%</text>
      <path d="M 40 260 Q 80 240, 120 245 T 200 190 T 280 200 T 360 140 T 440 155 T 520 100 T 580 110" fill="none" stroke="url(#btLine)" strokeWidth="2.5" strokeLinecap="round"/>
      <path d="M 40 265 Q 80 255, 120 258 T 200 220 T 280 225 T 360 180 T 440 190 T 520 150 T 580 160" fill="none" stroke="#a78bfa" strokeWidth="0.8" opacity="0.2" strokeDasharray="4 4"/>
      <g transform="translate(40,100)">
        {[50,60,35,70,45,80,55,65,75,50,60,70,45,85,55,70,60,80,50,65].map((h,i) => (
          <rect key={i} x={i*26} y={160-h} width="16" height={h} rx="2" fill="#a78bfa" opacity={0.15+i*0.02}/>
        ))}
      </g>
    </svg>
  );
}

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.2 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

const imageMap = {
  'trading-signal-bot': <SignalBotImage />,
  'trading-backtesting-platform': <BacktestImage />,
};

export default function Projects() {
  return (
    <section className="section">
      <div className="container">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <p className="section-label">FEATURED PROJECTS</p>
          <h2 className="section-title">What I've <span className="gradient-text">Built</span></h2>
          <p className="section-sub" style={{ marginBottom: '16px' }}>
            Real trading systems built from real market experience. Every project solves a practical problem.
          </p>
          <div className="section-line" style={{ margin: '0 0 48px' }}></div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(480px, 1fr))', gap: '28px' }}
        >
          {projects.map((project) => {
            const hasLiveDemo = project.liveDemo && project.liveDemo.startsWith('http')
            const cardContent = (
              <>
                <div className="project-card-img">
                  {imageMap[project.id] || (
                    <div style={{ width: '100%', height: '100%', background: 'linear-gradient(135deg, rgba(124,106,239,0.1), rgba(0,224,219,0.05))', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <span style={{ fontSize: '2rem', opacity: 0.3 }}>🚀</span>
                    </div>
                  )}
                </div>
                <div className="project-card-body">
                  <span className="project-card-badge">{project.badge}</span>
                  <h3>{project.title}</h3>
                  <p>{project.shortDesc}</p>
                  <div className="tags">
                    {project.tags.map((t) => (
                      <span key={t} className="tag">{t}</span>
                    ))}
                  </div>
                  <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '16px' }}>
                    {project.tech.slice(0, 4).map((t) => (
                      <span key={t} className="tag tag-accent" style={{ fontSize: '0.68rem' }}>{t}</span>
                    ))}
                  </div>
                  <span className="project-card-link">
                    {hasLiveDemo ? 'View Live Demo ↗' : 'View Project'} <ArrowRight size={15} />
                  </span>
                </div>
              </>
            )
            return (
              <motion.div key={project.id} variants={cardVariants}>
                {hasLiveDemo ? (
                  <a href={project.liveDemo} target="_blank" rel="noopener noreferrer" className="project-card" style={{ textDecoration: 'none', display: 'block' }}>
                    {cardContent}
                  </a>
                ) : (
                  <Link to={`/projects/${project.id}`} className="project-card" style={{ textDecoration: 'none', display: 'block' }}>
                    {cardContent}
                  </Link>
                )}
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  );
}
