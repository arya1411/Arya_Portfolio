import { useRef } from 'react'
import { certifications } from '../data/portfolio'
import { useSectionReveal } from '../hooks/useSectionReveal'
import { SectionHeader } from './SectionHeader'

export function CertificationsSection() {
  const root = useRef<HTMLElement>(null)
  const rail = useRef<HTMLDivElement>(null)
  useSectionReveal(root)
  const move = (direction: number) => rail.current?.scrollBy({ left: direction * Math.min(480, innerWidth * .75), behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' })
  return (
    <section className="certifications section-shell" id="certifications" ref={root} aria-labelledby="certifications-title">
      <div className="certifications__heading">
        <SectionHeader label="Certificates" title="Proof of continued curiosity." index="05" id="certifications-title" />
        <div className="rail-controls" data-section-reveal><button onClick={() => move(-1)} aria-label="Previous certifications">←</button><button onClick={() => move(1)} aria-label="Next certifications">→</button></div>
      </div>
      <div className="cert-rail" ref={rail}>
        {certifications.map((cert, index) => {
          const content = <><div className="cert-card__top"><span>{cert.issuer}</span><span>{cert.date}</span></div><span className="cert-card__seal">{String(index + 1).padStart(2, '0')}</span><div><small>{cert.type}</small><h3>{cert.title}</h3><p>{cert.skills.join(' · ')}</p></div><span className="cert-card__action">{cert.href ? 'Verify certificate ↗' : 'Certificate listed'}</span></>
          return cert.href ? <a className="cert-card" data-section-reveal href={cert.href} target="_blank" rel="noreferrer" key={cert.title}>{content}</a> : <article className="cert-card" data-section-reveal key={cert.title}>{content}</article>
        })}
      </div>
    </section>
  )
}
