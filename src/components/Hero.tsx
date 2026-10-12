import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import { portfolio, projects } from '../data/portfolio'
import portrait from '../assets/transparent.png'

gsap.registerPlugin(useGSAP, ScrollTrigger)

const navItems = [
  { label: 'About', href: '#profile' },
  { label: 'Work', href: '#projects' },
  { label: 'Skills', href: '#technologies' },
  { label: 'Contact', href: '#contact' },
]

export function Hero() {
  const root = useRef<HTMLElement>(null)
  const [menuOpen, setMenuOpen] = useState(false)
  const featuredProject = projects.find((project) => project.featured) ?? projects[0]

  useEffect(() => {
    if (!menuOpen) return
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setMenuOpen(false)
    }
    window.addEventListener('keydown', closeOnEscape)
    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', closeOnEscape)
    }
  }, [menuOpen])

  useGSAP(() => {
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reducedMotion) return

    const previousOverflow = document.body.style.overflow
    const count = { value: 0 }
    const countNode = root.current?.querySelector<HTMLElement>('.journal-intro__count')
    const introKey = 'arya-portfolio-intro-seen'
    const lastIntro = Number(window.localStorage.getItem(introKey) ?? 0)
    const showIntro = Date.now() - lastIntro > 30 * 60 * 1000
    if (showIntro) {
      document.body.style.overflow = 'hidden'
      window.localStorage.setItem(introKey, String(Date.now()))
    }

    const entrance = gsap.timeline({
      defaults: { ease: 'expo.out' },
      onComplete: () => { document.body.style.overflow = previousOverflow },
    })

    if (showIntro) {
      entrance.from('.journal-intro__mark, .journal-intro__meta > *', { y: 18, opacity: 0, duration: .55, stagger: .06 })
        .from('.journal-intro__word span', { yPercent: 115, duration: .72, stagger: .055 }, '-=.28')
        .to(count, {
          value: 100,
          duration: 1.35,
          ease: 'power2.inOut',
          onUpdate: () => { if (countNode) countNode.textContent = String(Math.round(count.value)).padStart(3, '0') },
        }, '-=.62')
        .to('.journal-intro__progress i', { scaleX: 1, duration: 1.35, ease: 'power2.inOut' }, '<')
        .to('.journal-intro__status span', { yPercent: -100, duration: .35 }, '-=.08')
        .to('.journal-intro__panel--top', { yPercent: -101, duration: .9 }, '+=.08')
        .to('.journal-intro__panel--bottom', { yPercent: 101, duration: .9 }, '<')
        .to('.journal-intro__core', { scale: .86, opacity: 0, duration: .45 }, '<')
        .set('.journal-intro', { display: 'none' })
        .from('.journal-nav > *', { y: -16, opacity: 0, duration: .55, stagger: .06 })
        .from('.journal-home__folio > *, .journal-home__kicker', { y: 16, opacity: 0, duration: .5, stagger: .06 }, '-=.25')
        .from('.journal-title__line > span', { yPercent: 115, rotate: 1.5, duration: .95, stagger: .09 }, '-=.25')
        .from('.journal-home__scribble path', { strokeDashoffset: 920, duration: 1.1 }, '-=.6')
        .from('.journal-home__portrait-card', { y: 55, rotate: 4, opacity: 0, duration: .95 }, '-=.85')
        .from('.journal-note, .journal-home__copy, .journal-home__actions', { y: 28, rotate: 2, opacity: 0, duration: .65, stagger: .08 }, '-=.55')
    } else {
      entrance.set('.journal-intro', { display: 'none' })
    }

    gsap.timeline({
      scrollTrigger: { trigger: root.current, start: 'top top', end: 'bottom bottom', scrub: .7 },
    })
      .to('.journal-home__portrait-card', { yPercent: 8, rotate: -1.5, ease: 'none' }, 0)
      .to('.journal-note--project', { y: -45, rotate: -5, ease: 'none' }, 0)
      .to('.journal-title__line:first-child', { xPercent: -4, ease: 'none' }, 0)
      .to('.journal-title__line:last-child', { xPercent: 5, ease: 'none' }, 0)

    if (!window.matchMedia('(pointer: fine)').matches) return
    const portrait = root.current?.querySelector<HTMLElement>('.journal-home__portrait-card')
    const project = root.current?.querySelector<HTMLElement>('.journal-note--project')
    if (!portrait || !project) return
    const portraitX = gsap.quickTo(portrait, 'x', { duration: .9, ease: 'power3.out' })
    const portraitY = gsap.quickTo(portrait, 'y', { duration: .9, ease: 'power3.out' })
    const projectX = gsap.quickTo(project, 'x', { duration: .75, ease: 'power3.out' })
    const orbitX = gsap.quickTo('.journal-orb--one', 'x', { duration: 1.4, ease: 'power3.out' })
    const orbitY = gsap.quickTo('.journal-orb--one', 'y', { duration: 1.4, ease: 'power3.out' })
    const fieldX = gsap.quickTo('.journal-orb--two', 'x', { duration: 1.8, ease: 'power3.out' })
    const fieldY = gsap.quickTo('.journal-orb--two', 'y', { duration: 1.8, ease: 'power3.out' })
    const move = (event: PointerEvent) => {
      const x = event.clientX / window.innerWidth - .5
      const y = event.clientY / window.innerHeight - .5
      portraitX(x * 13)
      portraitY(y * 8)
      projectX(x * -18)
      orbitX(x * 36)
      orbitY(y * 24)
      fieldX(x * -24)
      fieldY(y * -18)
    }
    window.addEventListener('pointermove', move, { passive: true })
    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('pointermove', move)
    }
  }, { scope: root })

  return (
    <section className="journal-home" id="top" ref={root} aria-labelledby="journal-title">
      <div className="journal-intro" aria-hidden="true">
        <div className="journal-intro__panel journal-intro__panel--top" />
        <div className="journal-intro__panel journal-intro__panel--bottom" />
        <div className="journal-intro__core">
          <div className="journal-intro__meta"><span>ARYA PATEL®</span><span>PORTFOLIO / 2026</span></div>
          <div className="journal-intro__word" aria-label="Initialising portfolio">
            {'INITIALISING'.split('').map((letter, index) => <span key={`${letter}-${index}`}>{letter}</span>)}
          </div>
          <div className="journal-intro__readout"><strong className="journal-intro__count">000</strong><small>%</small></div>
          <div className="journal-intro__progress"><i /></div>
          <div className="journal-intro__status"><span>INDEXING 05 BUILDS · 13 TOOLS · 04 CERTIFICATES<br />READY — ARYA PATEL / PORTFOLIO 2026</span></div>
          <div className="journal-intro__mark">AP</div>
        </div>
      </div>

      <div className="journal-home__stage">
        <div className="journal-home__paper" aria-hidden="true" />
        <div className="journal-motion" aria-hidden="true">
          <i className="journal-orb journal-orb--one" />
          <i className="journal-orb journal-orb--two" />
        </div>

        <nav className="journal-nav" aria-label="Main navigation">
          <a className="journal-nav__brand" href="#top"><span>AP</span><strong>Arya Patel</strong><small>Portfolio / 2026</small></a>
          <div className="journal-nav__links">
            {navItems.map((item, index) => <a href={item.href} key={item.href}><small>0{index + 1}</small>{item.label}</a>)}
          </div>
          <a className="journal-nav__status" href={portfolio.contact.inquiryEmail}><i />Open to work</a>
          <button
            className={`journal-nav__menu ${menuOpen ? 'is-open' : ''}`}
            type="button"
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            aria-label={menuOpen ? 'Close navigation' : 'Open navigation'}
            onClick={() => setMenuOpen((open) => !open)}
          ><span /><span /></button>
        </nav>

        <div className="journal-home__folio">
          <span>FIELD NOTE № 01</span>
          <span>MIT MANIPAL / INDIA</span>
        </div>

        <div className="journal-home__main">
          <div className="journal-home__words">
            <p className="journal-home__kicker">Full-stack developer / B.Tech at MIT Manipal / India</p>
            <h1 className="journal-title" id="journal-title">
              <span className="journal-title__line"><span>I build web</span></span>
              <span className="journal-title__line journal-title__line--ink"><span>products</span></span>
              <span className="journal-title__line journal-title__line--last"><span>end to end.</span></span>
            </h1>
            <svg className="journal-home__scribble" viewBox="0 0 620 190" aria-hidden="true">
              <path d="M34 108C98 22 505 7 580 88C639 153 450 179 263 169C93 160-21 137 34 108Z" />
              <path d="M480 145C522 158 552 169 592 187" />
            </svg>
          </div>

          <div className="journal-home__copy">
            <span>WHAT I ACTUALLY DO</span>
            <p>React interfaces, Node APIs, MongoDB data, and Python when a build needs machine learning—from first screen to deployment.</p>
          </div>

          <div className="journal-home__actions">
            <a href="#projects"><span>See what I’ve built</span><b>↘</b></a>
            <a href={portfolio.personal.resumeUrl} target="_blank" rel="noreferrer"><span>Read my résumé</span><b>↗</b></a>
          </div>
        </div>

        <figure className="journal-home__portrait-card">
          <span className="journal-tape journal-tape--top" aria-hidden="true" />
          <span className="journal-tape journal-tape--bottom" aria-hidden="true" />
          <div className="journal-home__portrait-print"><span aria-hidden="true">AP</span><img src={portrait} alt="Arya Patel" fetchPriority="high" /></div>
          <figcaption><strong>ARYA PATEL</strong><span>FULL-STACK DEVELOPER</span><i>IND / 2026</i></figcaption>
        </figure>

        <a className="journal-note journal-note--project" href="#projects">
          <span>ON MY DESK / NOW</span>
          <strong>{featuredProject.title}</strong>
          <p>{featuredProject.scope}</p>
          <footer><small>{featuredProject.status}</small><b>↘</b></footer>
        </a>

        <footer className="journal-home__footer">
          <div><a href={portfolio.contact.github} target="_blank" rel="noreferrer">GitHub ↗</a><a href={portfolio.contact.linkedin} target="_blank" rel="noreferrer">LinkedIn ↗</a></div>
          <span>Scroll to open the notebook</span>
          <span>© Arya Patel</span>
        </footer>
      </div>

      <div className={`mobile-navigation ${menuOpen ? 'is-open' : ''}`} id="mobile-navigation" aria-hidden={!menuOpen} inert={!menuOpen}>
        <div className="mobile-navigation__meta"><span>Navigate</span><span>©2026</span></div>
        <div className="mobile-navigation__links">
          {navItems.map((item, index) => <a href={item.href} key={item.href} onClick={() => setMenuOpen(false)}><small>0{index + 1}</small>{item.label}</a>)}
        </div>
        <div className="mobile-navigation__footer">
          <a href={portfolio.contact.github} target="_blank" rel="noreferrer">GitHub ↗</a>
          <a href={portfolio.contact.linkedin} target="_blank" rel="noreferrer">LinkedIn ↗</a>
        </div>
      </div>
    </section>
  )
}
