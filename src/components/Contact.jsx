import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Github, Linkedin, Send, MapPin, ArrowUpRight, Instagram } from 'lucide-react'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
}

const links = [
  { icon: Mail, label: 'Email', href: 'mailto:hello@example.com', display: 'sumithelonde4@gmail.com', color: '#00e0db' },
  { icon: Github, label: 'GitHub', href: 'https://github.com/sumit', display: 'https://github.com/sumit-helonde', color: '#fff' },
  { icon: Linkedin, label: 'LinkedIn', href: 'https://linkedin.com/in/sumit', display: 'https://www.linkedin.com/in/sumit-helonde-99589b264', color: '#3b82f6' },
  { icon: Instagram, label: 'Instagram', href: 'https://instagram.com/sumit', display: 'sumit.__001x_', color: '#e4405f' },
  { icon: MapPin, label: 'Location', href: null, display: 'India', color: '#a78bfa' },
]

export default function Contact() {
  const [sent, setSent] = useState(false)
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })

  const handleSubmit = (e) => {
    e.preventDefault()
    setSent(true)
    setTimeout(() => setSent(false), 3000)
    setFormData({ name: '', email: '', message: '' })
  }

  return (
    <section className="section" id="contact">
      <div className="container">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <p className="section-label">GET IN TOUCH</p>
          <h2 className="section-title">Let's <span className="gradient-text">Connect</span></h2>
          <p className="section-sub">
            Open to collaborations, freelance work, and new opportunities.
          </p>
          <div className="section-line"></div>
        </motion.div>

        <div className="contact-grid">
          {/* Left — Info */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="contact-info"
          >
            <p className="contact-intro">
              Whether you need a trading bot, a full-stack web app, or just want to talk markets — I'm available.
            </p>

            <div className="contact-links">
              {links.map(({ icon: Icon, label, href, display, color }) => (
                <div key={label} className="contact-link-card">
                  <div className="contact-link-icon" style={{ '--link-color': color }}>
                    <Icon size={18} />
                  </div>
                  <div className="contact-link-text">
                    <span className="contact-link-label">{label}</span>
                    <span className="contact-link-value">{display}</span>
                  </div>
                  {href && (
                    <a href={href} target="_blank" rel="noopener noreferrer" className="contact-link-arrow">
                      <ArrowUpRight size={16} />
                    </a>
                  )}
                </div>
              ))}
            </div>

            <div className="contact-availability">
              <span className="contact-dot"></span>
              <span>Available for opportunities</span>
            </div>
          </motion.div>

          {/* Right — Form */}
          <motion.form
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            onSubmit={handleSubmit}
            className="contact-form"
          >
            <div className="contact-field">
              <label className="contact-field-label">Name</label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="contact-input"
                placeholder="Your name"
              />
            </div>

            <div className="contact-field">
              <label className="contact-field-label">Email</label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="contact-input"
                placeholder="you@email.com"
              />
            </div>

            <div className="contact-field">
              <label className="contact-field-label">Message</label>
              <textarea
                required
                rows={5}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="contact-input contact-textarea"
                placeholder="Your message..."
              />
            </div>

            <button type="submit" className={`contact-submit ${sent ? 'contact-submit--sent' : ''}`}>
              {sent ? (
                <>Sent!</>
              ) : (
                <>Send Message <Send size={15} /></>
              )}
            </button>
          </motion.form>
        </div>
      </div>

      <style>{`
        .contact-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 3rem;
          margin-top: 3rem;
          max-width: 960px;
        }
        .contact-info {
          display: flex;
          flex-direction: column;
          gap: 1.75rem;
        }
        .contact-intro {
          font-size: 1rem;
          color: rgba(255,255,255,0.5);
          line-height: 1.7;
        }
        .contact-links {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        .contact-link-card {
          display: flex;
          align-items: center;
          gap: 14px;
          padding: 14px 16px;
          border-radius: 12px;
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.06);
          transition: border-color 0.3s, background 0.3s;
          position: relative;
        }
        .contact-link-card:hover {
          border-color: rgba(255,255,255,0.12);
          background: rgba(255,255,255,0.05);
        }
        .contact-link-icon {
          width: 40px;
          height: 40px;
          border-radius: 10px;
          background: color-mix(in srgb, var(--link-color, #00e0db) 10%, transparent);
          border: 1px solid color-mix(in srgb, var(--link-color, #00e0db) 18%, transparent);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--link-color, #00e0db);
          flex-shrink: 0;
        }
        .contact-link-text {
          display: flex;
          flex-direction: column;
          gap: 2px;
        }
        .contact-link-label {
          font-size: 0.65rem;
          font-weight: 600;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.3);
          font-family: 'JetBrains Mono', monospace;
        }
        .contact-link-value {
          font-size: 0.85rem;
          color: rgba(255,255,255,0.7);
          font-family: 'DM Sans', sans-serif;
        }
        .contact-link-arrow {
          margin-left: auto;
          color: rgba(255,255,255,0.2);
          transition: color 0.2s, transform 0.2s;
          text-decoration: none;
        }
        .contact-link-card:hover .contact-link-arrow {
          color: rgba(255,255,255,0.5);
          transform: translate(2px, -2px);
        }
        .contact-availability {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 0.8rem;
          color: rgba(0,224,219,0.7);
          font-family: 'DM Sans', sans-serif;
        }
        .contact-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #00e0db;
          animation: dotPulse 2s ease-in-out infinite;
        }
        @keyframes dotPulse {
          0%, 100% { opacity: 1; box-shadow: 0 0 0 0 rgba(0,224,219,0.4); }
          50% { opacity: 0.7; box-shadow: 0 0 0 6px rgba(0,224,219,0); }
        }

        .contact-form {
          display: flex;
          flex-direction: column;
          gap: 18px;
        }
        .contact-field {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }
        .contact-field-label {
          font-size: 0.65rem;
          font-weight: 600;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.3);
          font-family: 'JetBrains Mono', monospace;
        }
        .contact-input {
          width: 100%;
          padding: 12px 16px;
          border-radius: 12px;
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.08);
          color: rgba(255,255,255,0.85);
          font-size: 0.9rem;
          font-family: 'DM Sans', sans-serif;
          outline: none;
          transition: border-color 0.3s, background 0.3s, box-shadow 0.3s;
        }
        .contact-input::placeholder {
          color: rgba(255,255,255,0.2);
        }
        .contact-input:focus {
          border-color: rgba(0,224,219,0.35);
          background: rgba(255,255,255,0.04);
          box-shadow: 0 0 0 3px rgba(0,224,219,0.08);
        }
        .contact-textarea {
          resize: none;
          min-height: 120px;
        }
        .contact-submit {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          padding: 14px 28px;
          border-radius: 12px;
          font-size: 0.85rem;
          font-weight: 600;
          font-family: 'DM Sans', sans-serif;
          cursor: pointer;
          transition: all 0.3s ease;
          background: rgba(0,224,219,0.1);
          border: 1px solid rgba(0,224,219,0.25);
          color: #00e0db;
          align-self: flex-start;
        }
        .contact-submit:hover {
          background: rgba(0,224,219,0.2);
          border-color: rgba(0,224,219,0.5);
          box-shadow: 0 4px 20px rgba(0,224,219,0.15);
          transform: translateY(-2px);
        }
        .contact-submit--sent {
          background: rgba(0,224,219,0.15);
          border-color: rgba(0,224,219,0.4);
          color: #00e0db;
        }

        @media (max-width: 768px) {
          .contact-grid {
            grid-template-columns: 1fr;
            gap: 2.5rem;
          }
        }
      `}</style>
    </section>
  )
}
