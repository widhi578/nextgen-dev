// src/App.tsx
import { useState } from 'react'
import './App.css'
import About from './About'

function App() {
  const [page, setPage] = useState<'home' | 'about'>('home')
  const [isAnimating, setIsAnimating] = useState(false)
  const [showPage, setShowPage] = useState<'home' | 'about'>('home')

  const handlePageChange = (newPage: 'home' | 'about') => {
    if (newPage === page) return
    
    // Jalankan animasi keluar dulu
    setIsAnimating(true)
    
    // Tunggu animasi selesai
    setTimeout(() => {
      setShowPage(newPage)
      setPage(newPage)
      setIsAnimating(false)
    }, 400) // Durasi sama dengan CSS animation
  }

  // Tentukan class animasi berdasarkan status
  const getPageTransitionClass = () => {
    if (isAnimating) {
      return 'page-transition fade-out-page'
    }
    return 'page-transition fade-in-page'
  }

  return (
    <div className="container">
      <div className="bg-grid"></div>

      <nav className="navbar">
        <ul className="nav-links">
          <li><a href="#" onClick={() => handlePageChange('home')}>Home</a></li>
          <li><a href="#" onClick={() => handlePageChange('about')}>About</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#project">Project</a></li>
          <li><a href="#team">Team</a></li>
        </ul>
      </nav>

      <div className={getPageTransitionClass()}>
        {showPage === 'home' ? (
          <main className="hero-section">
            <div className="logo-container">
              <img src="https://res.cloudinary.com/dhxw63xxj/image/upload/v1770708339/Logo_Community_no_bg_ldqlbv.png" width="75px" height="75px"></img>
              <h1 className="logo-text">
                <span className="text-gradient">NextGen</span> <span className="text-gradient-yellow">Dev</span>
              </h1>
            </div>

            <p className="tagline">
              Kami membangun, bukan sekadar berbicara.<br />
              Komunitas teknologi yang fokus pada pengembangan website<br />
              dan game — efisien, presisi, dan berorientasi hasil.
            </p>

            <button className="cta-button" onClick={() => handlePageChange('about')}>
              About Us
            </button>
          
            {/* Dekorasi tetap sama... */}
            <div className="deco deco-top-left">
              <div className="bar-v blue"></div>
              <div className="bar-v teal"></div>
            </div>
            <div className="deco deco-bottom-left">
              <div className="bar-v blue-dark"></div>
              <div className="bar-v teal-light"></div>
            </div>
            <div className="deco deco-bottom-right">
              <div className="bar-h purple"></div>
              <div className="bar-h yellow"></div>
            </div>
          </main>
        ) : (
          <main className="main-content">
              <About />
          </main>
        )}
      </div>

    </div>
  )
}

export default App
