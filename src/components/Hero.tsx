import { useEffect, useRef, useState } from 'react'
import { portfolio, projects } from '../data/portfolio'

const navItems = [
  { label: 'About', href: '#profile' },
  { label: 'Work', href: '#projects' },
  { label: 'Skills', href: '#technologies' },
  { label: 'Contact', href: '#contact' },
]

export function Hero() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('')
  const menuButton = useRef<HTMLButtonElement>(null)
  const mobileNavigation = useRef<HTMLDivElement>(null)
  const featuredProject = projects.find((project) => project.featured) ?? projects[0]

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) setActiveSection(entry.target.id === 'top' ? '' : `#${entry.target.id}`)
      }
    }, { rootMargin: '-10% 0px -65% 0px' })
    for (const id of ['top', ...navItems.map((item) => item.href.slice(1)), 'certifications']) {
      const section = document.getElementById(id)
      if (section) observer.observe(section)
    }
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!menuOpen) return
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    mobileNavigation.current?.querySelector<HTMLAnchorElement>('a')?.focus()
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setMenuOpen(false)
        menuButton.current?.focus()
      }
      if (event.key === 'Tab') {
        const links = [...(mobileNavigation.current?.querySelectorAll<HTMLAnchorElement>('a') ?? [])]
        const first = menuButton.current
        const last = links.at(-1)
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault()
          last?.focus()
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault()
          first?.focus()
        }
      }
    }
    const desktop = window.matchMedia('(min-width: 901px)')
    const closeOnDesktop = () => { if (desktop.matches) setMenuOpen(false) }
    desktop.addEventListener('change', closeOnDesktop)
    window.addEventListener('keydown', onKeyDown)
    return () => {
      document.body.style.overflow = previousOverflow
      desktop.removeEventListener('change', closeOnDesktop)
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [menuOpen])

  return (
    <section className="landing-board" id="top" aria-labelledby="landing-title">
      <nav className="portfolio-nav" aria-label="Main navigation">
        <a className="portfolio-nav__brand" href="#top" aria-label="Arya Patel — home"><strong>Arya Patel<span>.</span></strong><small>Full-stack developer</small></a>
        <div className="portfolio-nav__links">
          {navItems.map((item) => <a href={item.href} key={item.href} aria-current={activeSection === item.href ? 'location' : undefined}>{item.label}</a>)}
        </div>
        <a className="portfolio-nav__status" href={portfolio.contact.inquiryEmail}><i />Open to work <span aria-hidden="true">↗</span></a>
        <button ref={menuButton} className="portfolio-nav__menu" type="button" aria-expanded={menuOpen} aria-controls="mobile-navigation" aria-label={menuOpen ? 'Close navigation' : 'Open navigation'} onClick={() => setMenuOpen((open) => !open)}>{menuOpen ? 'Close ×' : 'Menu +'}</button>
      </nav>

      <div className="landing-board__shell">
        <div className="landing-board__rail"><span>01 / Introduction</span><span>MIT Manipal / India</span></div>
        <div className="landing-grid">
          <div className="landing-tile landing-tile--intro">
            <span className="landing-tile__label">Welcome to my portfolio</span>
            <h1 id="landing-title">Full-stack<br />developer.<br /><em>Curious by nature.</em></h1>
            <p><span className="landing-introduction">I’m <strong>Arya Patel.</strong></span> A B.Tech student at MIT Manipal working with React, Node.js, and Python. I enjoy connecting thoughtful interfaces with reliable backends and exploring practical AI.</p>
            <div className="landing-actions">
              <a href="#projects">Explore my work <span>↗</span></a>
              <a href={portfolio.personal.resumeUrl} target="_blank" rel="noreferrer">Read my résumé <span>↗</span></a>
            </div>
          </div>
          <a className="landing-tile landing-tile--project" href="#projects">
            <div className="landing-tile__top"><span className="landing-tile__label">Currently building</span><span aria-hidden="true">↗</span></div>
            <div className="landing-project__mark" aria-hidden="true">{'</>'}</div>
            <div><h2>{featuredProject.title}</h2><p>AI-powered code review.<br />Built for better pull requests.</p></div>
            <div className="landing-project__footer"><span><i />{featuredProject.status}</span><span>View project ↗</span></div>
          </a>
          <div className="landing-tile landing-tile--stack">
            <span className="landing-tile__label">My daily toolkit</span>
            <h2>Interface.<br />API. Data.</h2>
            <div className="landing-stack">{['React', 'TypeScript', 'Node.js', 'MongoDB', 'Python'].map((tool) => <span key={tool}>{tool}</span>)}</div>
          </div>
          <a className="landing-tile landing-tile--output" href="#contact">
            <span className="landing-tile__label">Say hello <span aria-hidden="true">↗</span></span>
            <h2>Let’s<br />talk.</h2>
          </a>
        </div>
        <div className="landing-board__footer">
          <div><a href={portfolio.contact.github} target="_blank" rel="noreferrer">GitHub ↗</a><a href={portfolio.contact.linkedin} target="_blank" rel="noreferrer">LinkedIn ↗</a></div>
          <a href="#profile">A little more about me ↓</a>
        </div>
      </div>

      <div ref={mobileNavigation} className={`mobile-navigation landing-mobile ${menuOpen ? 'is-open' : ''}`} id="mobile-navigation" aria-hidden={!menuOpen} inert={!menuOpen}>
        <div className="mobile-navigation__meta"><span>Navigate</span><span>©2026</span></div>
        <div className="mobile-navigation__links">
          {navItems.map((item, index) => <a href={item.href} key={item.href} aria-current={activeSection === item.href ? 'location' : undefined} onClick={() => setMenuOpen(false)}><small>0{index + 1}</small>{item.label}</a>)}
        </div>
        <div className="mobile-navigation__footer">
          <a href={portfolio.contact.github} target="_blank" rel="noreferrer">GitHub ↗</a>
          <a href={portfolio.contact.linkedin} target="_blank" rel="noreferrer">LinkedIn ↗</a>
        </div>
      </div>
    </section>
  )
}
