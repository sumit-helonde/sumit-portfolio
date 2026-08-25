import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Layout, Code, TrendingUp, Cpu, Wrench, Server } from 'lucide-react'
import { skillCategories } from '../data/skills'

const iconMap = {
  Layout, Code, TrendingUp, Cpu, Wrench, Server,
}

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
}

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

const tagVariants = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.3, ease: 'easeOut' } },
}

export default function Skills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })
  const featured = skillCategories.filter(c => c.featured)
  const others = skillCategories.filter(c => !c.featured)

  return (
    <section className="section" ref={ref}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="section-label">TECHNICAL SKILLS</p>
          <h2 className="section-title">
            Full Stack <span className="gradient-text">Developer</span> & Algo <span className="gradient-text">Trader</span>
          </h2>
          <p className="section-sub">
            Building systems from frontend to backend. Automating markets with code.
          </p>
          <div className="section-line"></div>
        </motion.div>

        {/* Featured Cards — Full Stack + Algo Trading */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '24px', marginTop: '3rem' }}
        >
          {featured.map((cat, i) => {
            const Icon = iconMap[cat.icon] || Code
            return (
              <motion.div key={i} variants={cardVariants} className="skill-featured-card" style={{ '--accent': cat.color }}>
                <div className="skill-featured-header">
                  <div className="skill-featured-icon">
                    <Icon size={22} />
                  </div>
                  <div>
                    <h3>{cat.title}</h3>
                    <span className="skill-featured-badge">CORE EXPERTISE</span>
                  </div>
                </div>
                <motion.div
                  className="skill-tags"
                  variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.04, delayChildren: 0.15 } } }}
                >
                  {(cat.skills || []).map((skill, j) => (
                    <motion.span key={j} className="skill-tag skill-tag-featured" variants={tagVariants} whileHover={{ scale: 1.08, boxShadow: `0 0 20px ${cat.color}30` }}>
                      {skill}
                    </motion.span>
                  ))}
                </motion.div>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Other Skills */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '18px', marginTop: '24px' }}
        >
          {others.map((cat, i) => {
            const Icon = iconMap[cat.icon] || Cpu
            return (
              <motion.div key={i} variants={cardVariants} className="skill-card">
                <div className="skill-card-header">
                  <div className="skill-card-icon">
                    <Icon size={18} />
                  </div>
                  <h3 className="skill-card-title">{cat.title}</h3>
                </div>
                <motion.div
                  className="skill-tags"
                  variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.04, delayChildren: 0.1 } } }}
                >
                  {(cat.skills || []).map((skill, j) => (
                    <motion.span key={j} className="skill-tag" variants={tagVariants} whileHover={{ scale: 1.06 }}>
                      {skill}
                    </motion.span>
                  ))}
                </motion.div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>

      <style>{`
        .skill-featured-card {
          padding: 2rem;
          background: rgba(255,255,255,0.03);
          border: 1px solid var(--accent, #00e0db);
          border-color: color-mix(in srgb, var(--accent) 20%, transparent);
          border-radius: 14px;
          backdrop-filter: blur(8px);
          transition: border-color 0.3s, box-shadow 0.3s, transform 0.3s;
        }
        .skill-featured-card:hover {
          border-color: color-mix(in srgb, var(--accent) 50%, transparent);
          box-shadow: 0 8px 40px color-mix(in srgb, var(--accent) 10%, transparent);
          transform: translateY(-4px);
        }
        .skill-featured-header {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 1.5rem;
        }
        .skill-featured-icon {
          width: 48px;
          height: 48px;
          border-radius: 12px;
          background: color-mix(in srgb, var(--accent) 10%, transparent);
          border: 1px solid color-mix(in srgb, var(--accent) 20%, transparent);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--accent, #00e0db);
          flex-shrink: 0;
        }
        .skill-featured-header h3 {
          font-size: 1.15rem;
          font-weight: 700;
          color: #fff;
          margin: 0 0 4px;
          font-family: 'Space Grotesk', sans-serif;
        }
        .skill-featured-badge {
          display: inline-block;
          font-size: 0.6rem;
          font-weight: 700;
          letter-spacing: 0.15em;
          padding: 2px 8px;
          border-radius: 4px;
          background: color-mix(in srgb, var(--accent) 12%, transparent);
          color: var(--accent, #00e0db);
          font-family: 'JetBrains Mono', monospace;
        }
        .skill-card {
          padding: 1.5rem;
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.06);
          border-radius: 12px;
          backdrop-filter: blur(8px);
          transition: border-color 0.3s, box-shadow 0.3s;
        }
        .skill-card:hover {
          border-color: rgba(0,240,255,0.2);
          box-shadow: 0 8px 32px rgba(0,240,255,0.06);
        }
        .skill-card-header {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          margin-bottom: 1rem;
        }
        .skill-card-icon {
          width: 36px;
          height: 36px;
          border-radius: 8px;
          background: rgba(0,240,255,0.08);
          border: 1px solid rgba(0,240,255,0.15);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #00f0ff;
        }
        .skill-card-title {
          font-size: 0.95rem;
          font-weight: 600;
          color: #fff;
        }
        .skill-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.45rem;
        }
        .skill-tag {
          display: inline-block;
          padding: 0.3rem 0.75rem;
          font-size: 0.75rem;
          color: rgba(255,255,255,0.7);
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 20px;
          cursor: default;
          transition: background 0.25s, border-color 0.25s, color 0.25s;
          user-select: none;
        }
        .skill-tag:hover {
          background: rgba(0,240,255,0.08);
          border-color: rgba(0,240,255,0.3);
          color: #00f0ff;
        }
        .skill-tag-featured {
          font-size: 0.8rem;
          padding: 0.35rem 0.9rem;
          background: color-mix(in srgb, var(--accent) 6%, transparent);
          border-color: color-mix(in srgb, var(--accent) 15%, transparent);
          color: color-mix(in srgb, var(--accent) 80%, white);
        }
        .skill-tag-featured:hover {
          background: color-mix(in srgb, var(--accent) 12%, transparent);
          border-color: color-mix(in srgb, var(--accent) 40%, transparent);
          color: var(--accent, #00e0db);
        }
        @media (max-width: 640px) {
          .skill-featured-card { padding: 1.5rem; }
          .skill-featured-card:first-child { grid-column: 1 / -1; }
        }
      `}</style>
    </section>
  )
}
