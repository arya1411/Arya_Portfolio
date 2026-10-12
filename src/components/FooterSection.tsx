import { useRef } from 'react'
import { portfolio } from '../data/portfolio'
import { useSectionReveal } from '../hooks/useSectionReveal'

export function FooterSection() {
  const root = useRef<HTMLElement>(null)
  useSectionReveal(root)
  return (
    <footer className="footer" id="contact" ref={root}>
      <div className="contact-card" data-section-reveal>
        <span className="micro-label">HAVE A PROJECT? / LET’S BUILD</span>
        <h2 data-type-reveal aria-label="Have a build in mind? Let’s talk.">
          <span className="type-line-clip"><span data-type-word>Have a build in mind?</span></span><br />
          <i className="type-line-clip"><span data-type-word>Let’s talk.</span></i>
        </h2>
        <p>Available for full-stack roles, internships, and focused project work.</p>
        <a href={portfolio.contact.inquiryEmail}><span>{portfolio.contact.email}</span><strong>Contact me ↗</strong></a>
      </div>
      <div className="footer__grid" data-section-reveal>
        <div className="footer__brand"><strong>ARYA<br />PATEL<span>.</span></strong><p>{portfolio.personal.footerBio}</p></div>
        <div><small>MENU</small><a href="#top">Home</a><a href="#projects">Projects</a><a href="#profile">About</a></div>
        <div><small>CONTACT</small><a href={`mailto:${portfolio.contact.email}`}>{portfolio.contact.email}</a><a href={portfolio.contact.phone}>{portfolio.contact.phoneLabel}</a></div>
        <div><small>SOCIAL</small><a href={portfolio.contact.github} target="_blank" rel="noreferrer">GitHub ↗</a><a href={portfolio.contact.linkedin} target="_blank" rel="noreferrer">LinkedIn ↗</a></div>
      </div>
      <div className="footer__bottom"><span>© 2026 Arya Patel</span><span>DESIGNED + ENGINEERED WITH INTENT</span><a href="#top">BACK TO TOP ↑</a></div>
    </footer>
  )
}
