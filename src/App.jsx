import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Home from './pages/Home'
import ProjectSignalBot from './pages/ProjectSignalBot'
import ProjectBacktest from './pages/ProjectBacktest'
import BgCanvas from './components/BgCanvas'
import PortfolioChatbot from './components/PortfolioChatbot'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

export default function App() {
  return (
    <>
      <BgCanvas />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects/trading-signal-bot" element={<ProjectSignalBot />} />
        <Route path="/projects/trading-backtesting-platform" element={<ProjectBacktest />} />
      </Routes>
      <PortfolioChatbot />
    </>
  )
}
