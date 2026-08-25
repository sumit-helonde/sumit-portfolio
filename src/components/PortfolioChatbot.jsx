import { useState, useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Send, X, Trash2 } from 'lucide-react'
import { getResponse } from '../services/chatbotService'

const SUGGESTIONS = [
  'Who is Sumit?',
  'What projects has he built?',
  'Tell me about his trading experience',
  'What are his technical skills?',
  'Is he a funded trader?',
  'How can I contact him?',
]

const INITIAL_MSG = {
  type: 'bot',
  text: "Hi! I'm Sumit's AI Portfolio Assistant.\n\nI can tell you about his skills, projects, trading experience, education and more.\n\nPick a question below or type your own!",
}

function TypingIndicator() {
  return (
    <div className="chat-msg bot">
      <div className="chat-msg-avatar">AI</div>
      <div className="chat-bubble">
        <div className="typing-dots">
          <span /><span /><span />
        </div>
      </div>
    </div>
  )
}

function MessageBubble({ msg }) {
  const navigate = useNavigate()

  const renderText = () => {
    if (!msg.route) return msg.text

    const linkText = msg.text.split('\n').find(l => l.startsWith('→') || l.startsWith('View'))
    const displayText = msg.text.replace(/\n?→.*/, '').replace(/\n?View.*/, '').trim()

    return (
      <>
        {displayText}
        <br />
        <span
          className="chat-link"
          onClick={() => navigate(msg.route)}
          role="button"
          tabIndex={0}
        >
          {linkText || '→ View Project'}
        </span>
      </>
    )
  }

  return (
    <div className={`chat-msg ${msg.type}`}>
      <div className="chat-msg-avatar">
        {msg.type === 'bot' ? 'AI' : 'U'}
      </div>
      <div className="chat-bubble">{renderText()}</div>
    </div>
  )
}

export default function PortfolioChatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState([INITIAL_MSG])
  const [input, setInput] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const msgsRef = useRef(null)

  useEffect(() => {
    const handleOpen = () => setIsOpen(true)
    window.addEventListener('open-chatbot', handleOpen)
    return () => window.removeEventListener('open-chatbot', handleOpen)
  }, [])

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'Escape') setIsOpen(false)
    }
    if (isOpen) window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [isOpen])

  useEffect(() => {
    if (msgsRef.current) {
      msgsRef.current.scrollTop = msgsRef.current.scrollHeight
    }
  }, [messages, isTyping])

  const clearChat = () => setMessages([INITIAL_MSG])

  const handleSend = (text) => {
    const q = text || input.trim()
    if (!q) return

    setMessages(prev => [...prev, { type: 'user', text: q }])
    setInput('')
    setIsTyping(true)

    setTimeout(() => {
      const { text: response, route } = getResponse(q)
      setMessages(prev => [...prev, { type: 'bot', text: response, route }])
      setIsTyping(false)
    }, 800 + Math.random() * 600)
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSend()
    }
  }

  return (
    <div className="chatbot-wrap">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="chatbot-window open"
            initial={{ opacity: 0, y: 16, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.96 }}
            transition={{ duration: 0.25, ease: [0.4, 0, 0.2, 1] }}
          >
            <div className="chatbot-head">
              <div className="chatbot-head-info">
                <div className="chatbot-head-avatar">AI</div>
                <div>
                  <h4>Sumit's AI Assistant</h4>
                  <span className="status">● Online</span>
                </div>
              </div>
              <div style={{ display: 'flex', gap: '4px' }}>
                <button
                  className="chatbot-head-close"
                  onClick={clearChat}
                  title="Clear chat"
                >
                  <Trash2 size={16} />
                </button>
                <button
                  className="chatbot-head-close"
                  onClick={() => setIsOpen(false)}
                  title="Close"
                >
                  <X size={18} />
                </button>
              </div>
            </div>

            <div className="chatbot-msgs" ref={msgsRef}>
              {messages.map((msg, i) => (
                <MessageBubble key={i} msg={msg} />
              ))}
              {isTyping && <TypingIndicator />}
            </div>

            {messages.length <= 1 && (
              <div className="chatbot-sugs">
                {SUGGESTIONS.map((q, i) => (
                  <button
                    key={i}
                    className="sug-btn"
                    onClick={() => handleSend(q)}
                  >
                    {q}
                  </button>
                ))}
              </div>
            )}

            <div className="chatbot-input">
              <input
                type="text"
                placeholder="Ask me anything about Sumit..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                disabled={isTyping}
              />
              <button
                className="chatbot-send"
                onClick={() => handleSend()}
                disabled={!input.trim() || isTyping}
              >
                <Send size={16} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {!isOpen && (
          <motion.div
            className="chatbot-tooltip"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
            transition={{ duration: 0.3 }}
          >
            Ask about Sumit ✦
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        className="chatbot-btn"
        onClick={() => setIsOpen(prev => !prev)}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
      >
        {isOpen ? <X size={22} /> : '✦'}
        {!isOpen && <span className="badge">AI</span>}
      </motion.button>
    </div>
  )
}
