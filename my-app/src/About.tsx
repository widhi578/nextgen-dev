// src/About.tsx
import './App.css'

export default function About() {
  return (
    <div className="about-container fade-in">
      <div className="logo-container-about">
            <img src="https://res.cloudinary.com/dhxw63xxj/image/upload/v1770708339/Logo_Community_no_bg_ldqlbv.png" width="50px" height="50px"></img>
            <h1 className="logo-text">
              <span className="text-gradient">NextGen</span> <span className="text-gradient-yellow">Dev</span>
            </h1>
          </div>
      <h1 className="about-title">About Us</h1>
      
      <div className="about-content">
        <p>
          Kami tidak dibangun dari banyak kata, tetapi dari banyak proses. <br />
          Sebagai komunitas teknologi, kami mengerjakan website dan game <br />
          dengan pendekatan yang tenang namun fokus — karena aksi yang <br />
          konsisten selalu lebih bernilai daripada wacana panjang.
        </p>
        <p>
          Kami percaya bahwa teknologi terbaik lahir dari pikiran yang jernih, <br />
          sistem yang efisien, dan keberanian untuk mengeksekusi.
        </p>
      </div>
    </div>
  )
}