import { useRef } from 'react'
import { portfolio } from '../data/portfolio'
import { useSectionReveal } from '../hooks/useSectionReveal'

export function FooterSection() {
  const root = useRef<HTMLElement>(null)
  useSectionReveal(root)
  return (
    <footer className="footer" id="contact" ref={root}>
      <div className="contact-card" data-section-reveal>
        <span className="micro-label">CONTACT</span>
        <h2 data-type-reveal aria-label="Let’s work together.">
          <span className="type-line-clip"><span data-type-word>Let’s work</span></span><br />
          <i className="type-line-clip"><span data-type-word>together.</span></i>
        </h2>
        <p>Available for full-stack roles, internships, and focused project work.</p>
        <a href={portfolio.contact.inquiryEmail}><span>{portfolio.contact.email}</span><strong>Contact me ↗</strong></a>
      </div>
      <div className="footer__bottom footer__bottom--simple">
        <span>© 2026 Arya Patel</span>
        <div className="footer__links"><a href={portfolio.contact.github} target="_blank" rel="noreferrer">GitHub ↗</a><a href={portfolio.contact.linkedin} target="_blank" rel="noreferrer">LinkedIn ↗</a><a href={portfolio.contact.phone}>{portfolio.contact.phoneLabel}</a></div>
        <a href="#top">Back to top ↑</a>
      </div>
    </footer>
  )
}
