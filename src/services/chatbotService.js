const knowledge = {
  personal: {
    name: 'Sumit Suresh Helonde',
    education: '3rd Year IIoT Engineering Student',
    identity: ['Funded Trader', 'Trader with 2+ years experience', 'Algorithmic Trader', 'Trading Bot Developer', 'Full Stack Developer', 'IIoT Engineer'],
  },
  trading: {
    experience: '2+ years',
    focus: ['Technical Analysis', 'Market Analysis', 'Strategy Development', 'Risk Management', 'Algorithmic Trading', 'Trading Automation', 'Backtesting', 'Trading Bot Development', 'Funded Trading'],
  },
  projects: [
    { name: 'Trading Signal Bot', desc: 'Analyzes market conditions and generates automated trading signals delivered through Telegram.', route: '/projects/trading-signal-bot' },
    { name: 'Trading Strategy Backtesting Platform', desc: 'Evaluates trading strategies against historical market data.', route: '/projects/trading-backtesting-platform' },
  ],
  skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Python', 'APIs', 'Automation', 'IoT', 'Trading Technology', 'Algorithmic Trading', 'Trading Bots', 'Backtesting', 'Telegram Integration'],
  hobbies: ['Trading', 'Video Editing', 'Building Projects', 'Learning Technology', 'Automation'],
};

const patterns = [
  { keys: ['what does sumit do', 'who is sumit', 'tell me about sumit', 'who is this', 'about sumit'], answer: "Sumit Suresh Helonde is a 3rd-year IIoT engineering student, funded trader and full-stack developer with 2+ years of trading experience.\n\nHis main focus areas include algorithmic trading, trading bot development, strategy backtesting and software development." },
  { keys: ['trading experience', 'how long', 'years of experience', 'experience in trading'], answer: "Sumit has 2+ years of experience in financial markets. He focuses on technical analysis, strategy development, risk management, algorithmic trading and trading automation." },
  { keys: ['funded trader', 'funded trading', 'funded account'], answer: "Sumit is a funded trader. He has experience trading through funded trading environments with a focus on disciplined execution, risk management and consistency." },
  { keys: ['can he build', 'can sumit build', 'trading bot', 'build bot', 'signal bot', 'trading signal'], answer: "Yes. Trading bot development is one of Sumit's key areas. He built a Trading Signal Bot that processes market data, applies systematic strategy logic, generates trading signals and integrates with Telegram for automation.\n\n→ View Trading Signal Bot", route: '/projects/trading-signal-bot' },
  { keys: ['backtesting', 'backtest', 'back testing', 'strategy test', 'strategy backtest'], answer: "Sumit built a Trading Strategy Backtesting Platform where traders can evaluate their strategies against historical market data and understand how those strategies performed.\n\n→ View Backtesting Platform", route: '/projects/trading-backtesting-platform' },
  { keys: ['project', 'projects', 'what has he built', 'built anything'], answer: "His main projects include:\n\n1. Trading Signal Bot — Analyzes market conditions and generates automated signals\n2. Trading Strategy Backtesting Platform — Evaluates strategies against historical data\n\nClick on any project card to learn more!" },
  { keys: ['skill', 'skills', 'technical skill', 'what can he do', 'tech stack', 'technologies'], answer: "Sumit's technical skills include:\n\nFrontend: HTML5, CSS3, JavaScript, React\nProgramming: Python, JavaScript, APIs, Automation\nTrading Tech: Algorithmic Trading, Trading Bots, Backtesting\nIIoT: IoT, Sensors, Industrial Automation\nTools: Git, GitHub, VS Code, Telegram API" },
  { keys: ['education', 'college', 'university', 'study', 'student', 'year'], answer: "Sumit is currently a 3rd-year IIoT (Industrial Internet of Things) Engineering Student. He balances academics with trading and software development." },
  { keys: ['hobby', 'hobbies', 'interest', 'beyond code', 'outside work'], answer: "Beyond coding and trading, Sumit enjoys:\n• Video editing and creative content\n• Building personal projects\n• Learning new technologies\n• Exploring AI, automation and IoT" },
  { keys: ['full stack', 'developer', 'web developer', 'coding'], answer: "Sumit is a full-stack developer skilled in Python, JavaScript, React, HTML/CSS, APIs and automation. He builds both trading tools and web applications." },
  { keys: ['iiot', 'iot', 'industrial'], answer: "Sumit is studying IIoT (Industrial Internet of Things) Engineering. His skills include IoT, sensors, industrial automation and data-driven systems." },
  { keys: ['algorithmic', 'algo trading', 'algorithm'], answer: "Algorithmic Trading is one of Sumit's core expertise areas. He designs systematic trading logic and converts trading strategies into algorithmic rules and automated systems." },
  { keys: ['telegram'], answer: "Sumit uses Telegram Integration for his trading systems. His Trading Signal Bot can deliver automated trading signals directly through Telegram." },
  { keys: ['contact', 'email', 'reach', 'connect', 'hire', 'collaborate'], answer: "You can reach Sumit through:\n\nEmail: helondesumit6@gmail.com\nGitHub: github.com/sumit-helonde\nLinkedIn: linkedin.com/in/sumit-helonde-99589b264\n\nScroll down to the Contact section to connect!" },
  { keys: ['hello', 'hi', 'hey', 'hlo', 'sup', 'good morning', 'good evening'], answer: "Hey! 👋 I'm Sumit's AI Portfolio Assistant.\n\nI can tell you about Sumit's skills, trading experience, funded trading background, algorithmic trading, trading bots, projects and more.\n\nWhat would you like to know?" },
  { keys: ['thank', 'thanks', 'thx', 'nice', 'awesome', 'great'], answer: "You're welcome! Feel free to ask if you have more questions about Sumit." },
  { keys: ['resume', 'cv'], answer: "This portfolio IS Sumit's interactive resume. Scroll through to explore his About, Trading Expertise, Skills, Projects, Journey and Contact sections. Or ask me anything!" },
  { keys: ['performance', 'return', 'profit', '26', 'percent'], answer: "Sumit's Trading Signal Bot reported a 26% return on capital last month.\n\n⚠️ Important: Past performance is not a guarantee of future results." },
  { keys: ['automate', 'automation', 'automated'], answer: "Trading Automation is a key focus for Sumit. He connects market data, strategy logic, APIs and notification systems into automated workflows. His Trading Signal Bot is a prime example." },
];

const fallbacks = [
  "I don't have that information yet. You can contact Sumit directly for more details.",
  "I'm not sure about that. Try asking about his skills, projects, trading experience or education.",
  "That's outside my knowledge base. I can help with questions about Sumit's trading, development skills or projects.",
];

export function getResponse(input) {
  const q = input.toLowerCase().trim();

  for (const pattern of patterns) {
    if (pattern.keys.some(k => q.includes(k))) {
      return { text: pattern.answer, route: pattern.route || null };
    }
  }

  for (const proj of knowledge.projects) {
    if (q.includes(proj.name.toLowerCase())) {
      return { text: `${proj.name}: ${proj.desc}\n\n→ View ${proj.name}`, route: proj.route };
    }
  }

  return { text: fallbacks[Math.floor(Math.random() * fallbacks.length)], route: null };
}
