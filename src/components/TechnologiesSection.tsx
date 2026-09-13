import { useRef } from 'react'
import { technologies, skillGroups } from '../data/portfolio'
import { useSectionReveal } from '../hooks/useSectionReveal'
import { SectionHeader } from './SectionHeader'

export function TechnologiesSection() {
  const root = useRef<HTMLElement>(null)
  useSectionReveal(root)
  const loop = [...technologies, ...technologies]
  return (
    <section className="technologies section-shell" id="technologies" ref={root} aria-labelledby="tech-title">
      <SectionHeader label="Capabilities" title="Technology, arranged with intent." index="03" id="tech-title" />
      <div className="logo-loop" data-section-reveal aria-label={`Technologies: ${technologies.join(', ')}`}>
        <div className="logo-loop__track" aria-hidden="true">{loop.map((tech, index) => <span key={`${tech}-${index}`}><i>{String((index % technologies.length) + 1).padStart(2, '0')}</i>{tech}</span>)}</div>
      </div>
      <div className="skills-grid">
        {skillGroups.map((group, index) => (
          <article className="skill-card" data-section-reveal key={group.title}>
            <span className="skill-card__number">0{index + 1}</span>
            <h3>{group.title}</h3>
            <p>{group.detail}</p>
            <div>{group.items.map((item) => <span key={item} className={item.includes('↗') ? 'is-learning' : ''}>{item.replace(' ↗', '')}</span>)}</div>
          </article>
        ))}
      </div>
    </section>
  )
}
