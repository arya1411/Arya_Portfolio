import { useRef } from 'react'
import { learningTools, skillGroups } from '../data/portfolio'
import { useSectionReveal } from '../hooks/useSectionReveal'
import { SectionHeader } from './SectionHeader'

export function TechnologiesSection() {
  const root = useRef<HTMLElement>(null)
  useSectionReveal(root)
  return (
    <section className="technologies section-shell" id="technologies" ref={root} aria-labelledby="tech-title">
      <SectionHeader label="Skills" title="The tools I work with." index="03" id="tech-title" />
      <div className="skills-content" data-section-reveal>
        <div className="skills-grid skills-grid--focused">
          {skillGroups.map((group, index) => (
            <article className="skill-card" key={group.title}>
              <span className="skill-card__number">0{index + 1}</span>
              <h3>{group.title}</h3>
              <p>{group.detail}</p>
              <div>{group.items.map((item) => <span key={item}>{item}</span>)}</div>
            </article>
          ))}
        </div>
        <div className="skills-learning"><span>Currently exploring</span><p>{learningTools.join(' · ')}</p></div>
      </div>
    </section>
  )
}
