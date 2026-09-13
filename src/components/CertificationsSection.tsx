import { useEffect, useRef, useState } from 'react'
import { certifications } from '../data/portfolio'
import { useSectionReveal } from '../hooks/useSectionReveal'
import { SectionHeader } from './SectionHeader'

export function CertificationsSection() {
  const root = useRef<HTMLElement>(null)
  const rail = useRef<HTMLDivElement>(null)
  const [progress, setProgress] = useState(0)
  useSectionReveal(root)

  const updateProgress = () => {
    const element = rail.current
    if (!element) return
    const scrollableWidth = element.scrollWidth - element.clientWidth
    setProgress(scrollableWidth > 0 ? (element.scrollLeft / scrollableWidth) * 100 : 0)
  }

  useEffect(() => {
    const element = rail.current
    if (!element) return

    updateProgress()
    const resizeObserver = new ResizeObserver(updateProgress)
    resizeObserver.observe(element)
    return () => resizeObserver.disconnect()
  }, [])

  const moveTo = (value: number) => {
    const element = rail.current
    if (!element) return
    const scrollableWidth = element.scrollWidth - element.clientWidth
    element.scrollLeft = scrollableWidth * (value / 100)
    setProgress(value)
  }

  return (
    <section className="certifications section-shell" id="certifications" ref={root} aria-labelledby="certifications-title">
      <div className="certifications__heading">
        <SectionHeader label="Certificates" title="Proof of continued curiosity." index="05" id="certifications-title" />
      </div>
      <div className="cert-rail" ref={rail} onScroll={updateProgress}>
        {certifications.map((cert, index) => {
          const content = <><div className="cert-card__top"><span>{cert.issuer}</span><span>{cert.date}</span></div><span className="cert-card__seal">{String(index + 1).padStart(2, '0')}</span><div><small>{cert.type}</small><h3>{cert.title}</h3><p>{cert.skills.join(' · ')}</p></div><span className="cert-card__action">{cert.href ? 'Verify certificate ↗' : 'Certificate listed'}</span></>
          return cert.href ? <a className="cert-card" data-section-reveal href={cert.href} target="_blank" rel="noreferrer" key={cert.title}>{content}</a> : <article className="cert-card" data-section-reveal key={cert.title}>{content}</article>
        })}
      </div>
      <div className="cert-slider" data-section-reveal>
        <span aria-hidden="true">01</span>
        <input
          type="range"
          min="0"
          max="100"
          step="0.1"
          value={progress}
          onChange={(event) => moveTo(Number(event.target.value))}
          aria-label="Scroll through certifications"
          style={{ '--slider-progress': `${progress}%` } as React.CSSProperties}
        />
        <span aria-hidden="true">{String(certifications.length).padStart(2, '0')}</span>
      </div>
    </section>
  )
}
