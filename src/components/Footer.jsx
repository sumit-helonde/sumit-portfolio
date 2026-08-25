import { motion } from 'framer-motion'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer-inner">
        {/* Top — Brand */}
        <div className="footer-brand">
          <span className="footer-logo">
            <span className="footer-logo-name">SUMIT </span>
            <span className="footer-logo-accent">HELONDE</span>
          </span>
          <p className="footer-tagline">Building systems. Automating markets.</p>
        </div>

        {/* Middle — Tags */}
        <div className="footer-tags">
          {['Trader', 'Developer', 'Quant'].map((tag) => (
            <span key={tag} className="footer-tag">{tag}</span>
          ))}
        </div>

        {/* Bottom — Copyright */}
        <div className="footer-bottom">
          <p className="footer-copy">&copy; {year} Sumit Helonde</p>
          <div className="footer-divider"></div>
          <p className="footer-brand-text">TraderDeveloperQuant</p>
        </div>
      </div>

      <style>{`
        .footer {
          padding: 3rem 2rem 2rem;
          border-top: 1px solid rgba(255,255,255,0.05);
          background: rgba(10, 10, 20, 0.6);
          backdrop-filter: blur(10px);
        }
        .footer-inner {
          max-width: 960px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1.5rem;
        }
        .footer-brand {
          text-align: center;
        }
        .footer-logo {
          font-size: 1.3rem;
          font-weight: 800;
          font-family: 'Space Grotesk', sans-serif;
          letter-spacing: 0.02em;
        }
        .footer-logo-name {
          color: #e0e0ff;
        }
        .footer-logo-accent {
          background: linear-gradient(135deg, #8b5cf6, #06b6d4);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .footer-tagline {
          font-size: 0.8rem;
          color: rgba(255,255,255,0.3);
          margin-top: 0.35rem;
          font-family: 'DM Sans', sans-serif;
        }
        .footer-tags {
          display: flex;
          gap: 0.5rem;
        }
        .footer-tag {
          font-size: 0.6rem;
          font-weight: 700;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          padding: 0.3rem 0.8rem;
          border-radius: 999px;
          border: 1px solid rgba(139, 92, 246, 0.2);
          background: rgba(139, 92, 246, 0.08);
          color: rgba(139, 92, 246, 0.7);
          font-family: 'JetBrains Mono', monospace;
        }
        .footer-bottom {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          padding-top: 1.25rem;
          border-top: 1px solid rgba(255,255,255,0.04);
          width: 100%;
          justify-content: center;
        }
        .footer-copy {
          font-size: 0.7rem;
          color: rgba(255,255,255,0.25);
          font-family: 'JetBrains Mono', monospace;
          letter-spacing: 0.05em;
        }
        .footer-divider {
          width: 3px;
          height: 3px;
          border-radius: 50%;
          background: rgba(139, 92, 246, 0.4);
        }
        .footer-brand-text {
          font-size: 0.7rem;
          font-weight: 700;
          letter-spacing: 0.1em;
          background: linear-gradient(135deg, #8b5cf6, #06b6d4);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          font-family: 'JetBrains Mono', monospace;
        }
        @media (max-width: 640px) {
          .footer-bottom {
            flex-direction: column;
            gap: 0.4rem;
          }
          .footer-divider {
            display: none;
          }
        }
      `}</style>
    </footer>
  )
}
