import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Lenis from 'lenis'
import App from './App'
import './styles.css'

gsap.registerPlugin(ScrollTrigger)
gsap.config({ force3D: true })
gsap.ticker.lagSmoothing(500, 33)

/* ── Smooth scroll via Lenis ── */
const lenis = new Lenis({
  lerp: 0.07,              // responsive while retaining a polished amount of glide
  smoothWheel: true,
  wheelMultiplier: 0.9,
  syncTouch: false,
  syncTouchLerp: 0.06,
})

// Pipe Lenis into GSAP's ticker so ScrollTrigger stays in sync
lenis.on('scroll', ScrollTrigger.update)
gsap.ticker.add((time) => lenis.raf(time * 1000))
gsap.ticker.lagSmoothing(0)  // disable lag-smoothing so Lenis drives the timing

document.fonts.ready.then(() => ScrollTrigger.refresh())

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
