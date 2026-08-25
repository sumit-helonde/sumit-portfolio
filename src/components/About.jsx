import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { portfolio } from '../data/portfolioData'

const stats = [
  { label: 'Projects Built', value: '2' },
  { label: 'Technologies', value: '8+' },
]

const techTags = ['React', 'Python', 'Node.js', 'TypeScript', 'Algo Trading Bots']

export default function About() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' })

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1, duration: 0.6, ease: 'easeOut' },
    }),
  }

  const aboutText =
    portfolio?.about ||
    "I'm a passionate full-stack developer and algorithmic trader based in India. I love building things that solve real problems — from automated trading bots that execute strategies in milliseconds to full-stack web applications that serve thousands of users.\n\nMy journey started with curiosity about how websites work, and it evolved into a deep passion for software engineering and financial markets. I believe in continuous learning, building in public, and sharing knowledge with the community.\n\nWhen I'm not coding, you'll find me researching trading strategies, exploring new technologies, or working on side projects that push my limits."

  const paragraphs = aboutText.split('\n\n')

  return (
    <section
      id="about"
      ref={sectionRef}
      className="section"
      style={{
        padding: '6rem 0',
        position: 'relative',
      }}
    >
      <div className="container">
        <motion.div
          custom={0}
          variants={fadeUp}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          style={{ marginBottom: '3rem' }}
        >
          <h2
            style={{
              fontSize: 'clamp(1.8rem, 4vw, 2.5rem)',
              fontWeight: 800,
              fontFamily: "'Space Grotesk', sans-serif",
              color: '#e0e0ff',
              marginBottom: '0.5rem',
            }}
          >
            <span
              style={{
                background: 'linear-gradient(135deg, #8b5cf6, #06b6d4)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              ABOUT ME
            </span>
          </h2>
          <div
            style={{
              width: '60px',
              height: '4px',
              borderRadius: '2px',
              background: 'linear-gradient(135deg, #8b5cf6, #06b6d4)',
            }}
          />
        </motion.div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '4rem',
            alignItems: 'start',
          }}
        >
          <div>
            {paragraphs.map((para, i) => (
              <motion.p
                key={i}
                custom={i + 1}
                variants={fadeUp}
                initial="hidden"
                animate={isInView ? 'visible' : 'hidden'}
                style={{
                  fontSize: '1rem',
                  color: '#94a3b8',
                  lineHeight: 1.8,
                  marginBottom: '1.25rem',
                  fontFamily: "'DM Sans', sans-serif",
                }}
              >
                {para}
              </motion.p>
            ))}

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '1rem',
                marginTop: '2rem',
              }}
            >
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  custom={i + 4}
                  variants={fadeUp}
                  initial="hidden"
                  animate={isInView ? 'visible' : 'hidden'}
                  className="glass-card"
                  style={{
                    padding: '1.25rem',
                    borderRadius: '14px',
                    border: '1px solid rgba(139, 92, 246, 0.15)',
                    background: 'rgba(15, 15, 30, 0.6)',
                    backdropFilter: 'blur(10px)',
                    textAlign: 'center',
                    transition: 'all 0.3s ease',
                  }}
                  whileHover={{
                    borderColor: 'rgba(139, 92, 246, 0.4)',
                    y: -2,
                  }}
                >
                  <div
                    style={{
                      fontSize: '1.8rem',
                      fontWeight: 800,
                      fontFamily: "'Space Grotesk', sans-serif",
                      background: 'linear-gradient(135deg, #8b5cf6, #06b6d4)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                    }}
                  >
                    {stat.value}
                  </div>
                  <div
                    style={{
                      fontSize: '0.8rem',
                      color: '#64748b',
                      marginTop: '0.25rem',
                      fontFamily: "'DM Sans', sans-serif",
                    }}
                  >
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div
            custom={5}
            variants={fadeUp}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
          >
            <div
              className="about-profile-card"
              style={{
                padding: '2rem',
                borderRadius: '20px',
                border: '1px solid rgba(139, 92, 246, 0.2)',
                background: 'rgba(15, 15, 30, 0.7)',
                backdropFilter: 'blur(10px)',
                textAlign: 'center',
                position: 'sticky',
                top: '100px',
                overflow: 'hidden',
              }}
            >
              {/* Background glow */}
              <div style={{
                position: 'absolute',
                top: '-40px',
                left: '50%',
                transform: 'translateX(-50%)',
                width: '200px',
                height: '200px',
                borderRadius: '50%',
                background: 'radial-gradient(circle, rgba(139,92,246,0.2) 0%, transparent 70%)',
                filter: 'blur(40px)',
                pointerEvents: 'none',
              }} />

              {/* Avatar with ring */}
              <div style={{
                width: '130px',
                height: '130px',
                borderRadius: '50%',
                background: 'linear-gradient(135deg, #8b5cf6, #06b6d4, #10b981)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 1.25rem',
                padding: '3px',
                position: 'relative',
                animation: 'avatarGlow 3s ease-in-out infinite',
              }}>
                <div style={{
                  width: '100%',
                  height: '100%',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '2.2rem',
                  fontWeight: 800,
                  fontFamily: "'Space Grotesk', sans-serif",
                  background: 'linear-gradient(135deg, #8b5cf6, #06b6d4)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}>
                  SH
                </div>
                {/* Online dot */}
                <span style={{
                  position: 'absolute',
                  bottom: '6px',
                  right: '6px',
                  width: '16px',
                  height: '16px',
                  borderRadius: '50%',
                  background: '#10b981',
                  border: '3px solid rgba(15, 15, 30, 0.9)',
                  animation: 'dotBlink 2s ease-in-out infinite',
                }} />
              </div>

              <h3
                style={{
                  fontSize: '1.35rem',
                  fontWeight: 700,
                  color: '#e0e0ff',
                  fontFamily: "'Space Grotesk', sans-serif",
                  marginBottom: '0.3rem',
                  letterSpacing: '-0.5px',
                }}
              >
                Sumit Helonde
              </h3>

              <p
                style={{
                  fontSize: '0.85rem',
                  fontWeight: 600,
                  marginBottom: '1.25rem',
                  fontFamily: "'DM Sans', sans-serif",
                  background: 'linear-gradient(135deg, #8b5cf6, #06b6d4)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                Full Stack Developer & Trader
              </p>

              {/* Divider */}
              <div style={{
                width: '40px',
                height: '2px',
                background: 'linear-gradient(90deg, #8b5cf6, #06b6d4)',
                borderRadius: '1px',
                margin: '0 auto 1.25rem',
              }} />

              <div
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '0.4rem',
                  justifyContent: 'center',
                }}
              >
                {techTags.map((tag, i) => (
                  <span
                    key={tag}
                    style={{
                      padding: '0.3rem 0.7rem',
                      borderRadius: '8px',
                      border: `1px solid ${i === 4 ? 'rgba(16,185,129,0.25)' : 'rgba(139, 92, 246, 0.2)'}`,
                      background: i === 4 ? 'rgba(16,185,129,0.08)' : 'rgba(139, 92, 246, 0.08)',
                      color: i === 4 ? '#10b981' : '#94a3b8',
                      fontSize: '0.7rem',
                      fontWeight: 500,
                      fontFamily: "'JetBrains Mono', monospace",
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <style>{`
        .about-profile-card {
          transition: all 0.4s ease;
        }
        .about-profile-card:hover {
          border-color: rgba(139, 92, 246, 0.35);
          box-shadow: 0 8px 40px rgba(139, 92, 246, 0.12), 0 0 80px rgba(6, 182, 212, 0.06);
          transform: translateY(-4px);
        }
        @keyframes avatarGlow {
          0%, 100% { box-shadow: 0 0 20px rgba(139, 92, 246, 0.2), 0 0 40px rgba(6, 182, 212, 0.1); }
          50% { box-shadow: 0 0 30px rgba(139, 92, 246, 0.35), 0 0 60px rgba(6, 182, 212, 0.15); }
        }
        @keyframes dotBlink {
          0%, 100% { opacity: 1; box-shadow: 0 0 0 0 rgba(16, 185, 129, 0.4); }
          50% { opacity: 0.7; box-shadow: 0 0 0 6px rgba(16, 185, 129, 0); }
        }
        @media (max-width: 768px) {
          #about .container > div:last-child {
            grid-template-columns: 1fr !important;
            gap: 2rem !important;
          }
        }
      `}</style>
    </section>
  )
}
