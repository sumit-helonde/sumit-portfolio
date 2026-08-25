import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { portfolio } from '../data/portfolioData'

export default function USPSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section className="section usp-section" ref={ref}>
      <div className="container usp-container">
        <motion.div
          className="usp-content"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <div className="usp-accent-line" />
          <h2 className="usp-quote">
            {portfolio.brandMessage ||
              'I don&apos;t just build software — I build systems that think, adapt, and perform at market speed.'}
          </h2>
          <motion.p
            className="usp-supporting"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            {portfolio.brandSupport ||
              'With years of experience navigating real financial markets and engineering production-grade applications, I bridge the gap between trading intuition and algorithmic precision — delivering technology that moves as fast as the markets themselves.'}
          </motion.p>
          <div className="usp-accent-line usp-accent-line-bottom" />
        </motion.div>
      </div>

      <style>{`
        .usp-section {
          padding: 6rem 0;
          position: relative;
          overflow: hidden;
        }
        .usp-section::before {
          content: '';
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 600px;
          height: 600px;
          background: radial-gradient(circle, rgba(0,240,255,0.04) 0%, transparent 70%);
          pointer-events: none;
        }
        .usp-container {
          max-width: 900px;
          margin: 0 auto;
          text-align: center;
        }
        .usp-content {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 2rem;
        }
        .usp-accent-line {
          width: 60px;
          height: 2px;
          background: linear-gradient(90deg, #00f0ff, #a855f7);
          border-radius: 2px;
        }
        .usp-accent-line-bottom {
          margin-top: 0.5rem;
        }
        .usp-quote {
          font-size: clamp(1.5rem, 4vw, 2.5rem);
          font-weight: 700;
          line-height: 1.35;
          color: #fff;
          max-width: 800px;
        }
        .usp-quote::first-letter {
          font-size: 3.5em;
          float: left;
          line-height: 0.8;
          margin-right: 0.1em;
          background: linear-gradient(135deg, #00f0ff, #a855f7);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .usp-supporting {
          font-size: 1.05rem;
          line-height: 1.8;
          color: rgba(255,255,255,0.55);
          max-width: 650px;
        }

        @media (max-width: 768px) {
          .usp-section {
            padding: 4rem 0;
          }
          .usp-quote {
            font-size: clamp(1.25rem, 5vw, 1.75rem);
          }
        }
      `}</style>
    </section>
  )
}
