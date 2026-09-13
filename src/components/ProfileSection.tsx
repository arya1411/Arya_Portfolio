import { useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { developerStats, portfolio } from '../data/portfolio'
import { useSectionReveal } from '../hooks/useSectionReveal'
import { RevealHeading } from './RevealHeading'
import profilePortrait from '../assets/12689C94-E07E-4014-9357-C231418BA358.png'

export function ProfileSection() {
  const root = useRef<HTMLElement>(null)
  const card = useRef<HTMLDivElement>(null)
  const rotateX = useRef<(value: number) => void>(() => undefined)
  const rotateY = useRef<(value: number) => void>(() => undefined)
  useSectionReveal(root)
  useGSAP(() => {
    if (!card.current) return
    gsap.set(card.current, { transformPerspective: 900, force3D: true })
    rotateX.current = gsap.quickTo(card.current, 'rotationX', { duration: .6, ease: 'power3.out' })
    rotateY.current = gsap.quickTo(card.current, 'rotationY', { duration: .6, ease: 'power3.out' })
  }, { scope: root })

  const tilt = (event: React.PointerEvent<HTMLDivElement>) => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const rect = event.currentTarget.getBoundingClientRect()
    rotateY.current(((event.clientX - rect.left) / rect.width - .5) * 10)
    rotateX.current(-((event.clientY - rect.top) / rect.height - .5) * 10)
  }
  const reset = () => gsap.to(card.current, { rotateX: 0, rotateY: 0, duration: .8, ease: 'elastic.out(1,.5)', overwrite: true, force3D: true })
  const [bioLead, bioRest] = portfolio.personal.bio.split(portfolio.personal.name)

  return (
    <section className="profile profile--refined section-shell" id="profile" ref={root} aria-labelledby="profile-title">
      <header className="profile-heading" data-section-reveal>
        <span>/02</span>
        <p>ABOUT / PROFILE</p>
        <i />
        <small>THE PERSON BEHIND THE PRODUCTS</small>
      </header>
      <div className="profile__frame">
        <figure className="profile-portrait-wrap" data-section-reveal onPointerMove={tilt} onPointerLeave={reset}>
          <div className="profile-contact-strip" aria-label="Contact details">
            <a href={`mailto:${portfolio.contact.email}`}>E-MAIL: {portfolio.contact.email}</a>
            <span aria-hidden="true">//</span>
            <a href={portfolio.contact.phone}>PHONE: {portfolio.contact.phoneLabel}</a>
          </div>
          <div className="profile-portrait" ref={card}>
            <img src={profilePortrait} alt="Portrait of Arya Patel" loading="lazy" decoding="async" />
          </div>
          <figcaption><span>ARYA PATEL</span><span>FULL-STACK · AI PRODUCTS</span></figcaption>
        </figure>
        <div className="profile__copy" data-section-reveal>
          <span className="micro-label">DEVELOPER / PRODUCT THINKER</span>
          <RevealHeading as="h2" id="profile-title" text={portfolio.personal.headline} />
          <p>{bioLead}<strong className="profile-name-highlight">{portfolio.personal.name}</strong>{bioRest}</p>
          <div className="profile-facts">
            {developerStats.map((stat) => <span key={stat.label}><strong data-count={/^\d+$/.test(stat.value) ? Number(stat.value) : undefined}>{stat.value}</strong><small>{stat.label}</small></span>)}
          </div>
          <div className="profile-disciplines" aria-label="Core disciplines">
            <small>Core disciplines</small>
            <div>
              <span><i>01</i><strong>Product Thinking</strong></span>
              <span><i>02</i><strong>System Architecture</strong></span>
              <span><i>03</i><strong>AI Integration</strong></span>
            </div>
          </div>
          <div className="status-list">{portfolio.personal.status.map((item) => <span key={item}><i />{item}</span>)}</div>
          <a className="text-link" href={portfolio.personal.resumeUrl} target="_blank" rel="noreferrer">Download résumé <span>↘</span></a>
        </div>
      </div>
    </section>
  )
}
