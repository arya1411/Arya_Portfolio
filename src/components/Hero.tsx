import { useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { portfolio } from '../data/portfolio'
import portrait from '../assets/transparent.png'

gsap.registerPlugin(useGSAP)

export function Hero() {
  const root = useRef<HTMLElement>(null)

  useGSAP(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    gsap.timeline({ defaults: { ease: 'power3.out' } })
      .from('.portrait-frame', { scale: .975, opacity: 0, duration: .9 })
      .from('.portrait-nav > *', { y: -16, opacity: 0, duration: .55, stagger: .06 }, '-=.45')
      .from('.portrait-name--ghost', { opacity: 0, letterSpacing: '-.12em', duration: .9 }, '-=.35')
      .from('.portrait-person', { yPercent: 9, opacity: 0, duration: 1, ease: 'expo.out' }, '-=.65')
      .from('.portrait-copy, .portrait-project, .portrait-contact, .portrait-year', { y: 18, opacity: 0, duration: .6, stagger: .08 }, '-=.5')
      .from('.portrait-name--front', { yPercent: 110, duration: .85, ease: 'expo.out' }, '-=.5')
  }, { scope: root })

  return (
    <section className="portrait-hero" id="top" ref={root} aria-labelledby="portrait-title">
      <div className="portrait-ambient" aria-hidden="true"><i /><i /><i /></div>

      <div className="portrait-frame">
        <div className="portrait-grid" aria-hidden="true" />
        <div className="portrait-crosses" aria-hidden="true">
          {Array.from({ length: 8 }, (_, index) => <i key={index} />)}
        </div>

        <nav className="portrait-nav" aria-label="Main navigation">
          <a className="portrait-brand" href="#top" aria-label="Arya Patel — home">Arya<sup>®</sup></a>
          <div className="portrait-nav__links">
            <a href="#top" className="portrait-nav__active">Home</a>
            <a href="#profile">About</a>
            <a href="#projects">Work <small>(05)</small></a>
            <a href="#technologies">Skills <small>(13)</small></a>
            <a href="#contact">Contact</a>
          </div>
          <button className="portrait-menu" type="button" aria-label="Open navigation"><i /><i /></button>
        </nav>

        <div className="portrait-name portrait-name--ghost" aria-hidden="true">ARYA PATEL</div>

        <p className="portrait-copy">
          I BUILD USER-CENTERED DIGITAL<br />PRODUCTS THAT ARE SIMPLE<br />RELIABLE AND IMPACTFUL
        </p>

        <figure className="portrait-person">
          <img src={portrait} alt="Arya Patel" fetchPriority="high" />
        </figure>

        <a className="portrait-project" href="#projects" aria-label="View featured project Code Sentinel">
          <div className="portrait-project__visual">
            <span className="portrait-project__watermark">CS</span>
            <div className="portrait-project__screen">
              <header><i /><i /><i /><span>pull-request / 042</span></header>
              <div className="portrait-project__code">
                <span><b>01</b><i /></span>
                <span><b>02</b><i /></span>
                <span className="is-alert"><b>03</b><i /><em>!</em></span>
                <span><b>04</b><i /></span>
              </div>
              <footer><span>AI REVIEW</span><strong>3 insights</strong></footer>
            </div>
            <div className="portrait-project__signal" aria-hidden="true"><span /><span /><span /></div>
          </div>
          <footer><span>✳ CODE SENTINEL</span><span>/ AI Product</span></footer>
        </a>

        <span className="portrait-year">©2026</span>

        <h1 className="portrait-name portrait-name--front" id="portrait-title">ARYA</h1>

        <a className="portrait-contact" href={portfolio.contact.inquiryEmail}>
          <span className="portrait-contact__thumb"><img src={portrait} alt="" /></span>
          <span className="portrait-contact__copy"><small>Let's Talk</small><strong>Arya Patel</strong><em>Full-Stack Developer</em></span>
          <span className="portrait-contact__star">✳</span>
          <span className="portrait-contact__arrow">↗</span>
        </a>
      </div>
    </section>
  )
}
