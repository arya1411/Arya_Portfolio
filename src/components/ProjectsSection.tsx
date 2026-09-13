import { useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import { projects } from '../data/portfolio'
import { useSectionReveal } from '../hooks/useSectionReveal'
import { SectionHeader } from './SectionHeader'

export function ProjectsSection() {
  const root = useRef<HTMLElement>(null)
  const dialog = useRef<HTMLElement>(null)
  const returnFocus = useRef<HTMLElement | null>(null)
  const [activeProject, setActiveProject] = useState<(typeof projects)[number] | null>(null)
  useSectionReveal(root)

  const openProject = (project: (typeof projects)[number]) => {
    returnFocus.current = document.activeElement as HTMLElement
    setActiveProject(project)
  }

  const closeProject = () => setActiveProject(null)

  useEffect(() => {
    if (!activeProject) return
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') closeProject()
      if (event.key === 'Tab') {
        const focusable = [...(dialog.current?.querySelectorAll<HTMLElement>('a[href], button:not([disabled])') ?? [])]
        if (!focusable.length) return
        const first = focusable[0]
        const last = focusable[focusable.length - 1]
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault()
          last.focus()
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault()
          first.focus()
        }
      }
    }
    window.addEventListener('keydown', onKeyDown)
    requestAnimationFrame(() => dialog.current?.querySelector<HTMLElement>('button')?.focus())
    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', onKeyDown)
      requestAnimationFrame(() => returnFocus.current?.focus())
    }
  }, [activeProject])

  return (
    <>
      <section className="projects section-shell" id="projects" ref={root} aria-labelledby="projects-title">
        <SectionHeader label="Selected Work" title="Products, not just projects." index="04" id="projects-title" />
        <div className="projects-intro" data-section-reveal>
          <span>05 PROJECTS / SELECTED ARCHIVE</span>
          <p>Open a project to explore the problem, product thinking, and build behind it.</p>
        </div>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <article
              className={`project-card ${project.featured ? 'project-card--featured' : ''}`}
              data-section-reveal
              key={project.title}
            >
              <div className={`project-art project-art--${index + 1}`} aria-hidden="true"><span /><i /><b>{String(index + 1).padStart(2, '0')}</b></div>
              <div className="project-card__top"><span>{project.category}</span><span className={`project-card__status project-card__status--${project.status.toLowerCase().replace(/\s+/g, '-')}`}><i aria-hidden="true" />{project.status}</span></div>
              <div className="project-card__body"><h3>{project.title}</h3><p>{project.description}</p></div>
              <div className="project-card__footer">
                <div>{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
                <div className="project-card__actions">
                  {project.href && <a href={project.href} target="_blank" rel="noreferrer" className="project-card__external">{project.linkLabel}<span>↗</span></a>}
                  <button type="button" onClick={() => openProject(project)} className="project-card__case-link"><small>Case study</small><span>↗</span></button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {activeProject && createPortal(
        <div className="case-study-backdrop" role="presentation" onMouseDown={(event) => { if (event.target === event.currentTarget) closeProject() }}>
          <article ref={dialog} className="case-study" role="dialog" aria-modal="true" aria-labelledby="case-study-title" aria-describedby="case-study-summary">
            <header className="case-study__header">
              <div><span>PROJECT CASE STUDY</span><span className={`case-study__status case-study__status--${activeProject.status.toLowerCase().replace(/\s+/g, '-')}`}><i aria-hidden="true" />{activeProject.status}</span></div>
              <button type="button" onClick={closeProject} aria-label="Close project case study"><span>Close</span> ×</button>
            </header>

            <div className="case-study__hero">
              <div>
                <span className="case-study__category">{activeProject.category}</span>
                <h2 id="case-study-title">{activeProject.title}</h2>
                <p id="case-study-summary">{activeProject.description}</p>
                {activeProject.href && <a className="case-study__direct-link" href={activeProject.href} target="_blank" rel="noreferrer">{activeProject.linkLabel}<span>↗</span></a>}
              </div>
              <div className="case-study__mark" aria-hidden="true"><span>AP</span><i>SELECTED<br />WORK</i></div>
            </div>

            <div className="case-study__scope"><span>Scope</span><p>{activeProject.scope}</p></div>

            <div className="case-study__story">
              <section><span>01 / Challenge</span><p>{activeProject.challenge}</p></section>
              <section><span>02 / Approach</span><p>{activeProject.solution}</p></section>
              <section><span>03 / Outcome</span><p>{activeProject.outcome}</p></section>
            </div>

            <footer className="case-study__footer">
              <div>
                <span>Build highlights</span>
                <ul>{activeProject.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}</ul>
              </div>
              {activeProject.href
                ? <a href={activeProject.href} target="_blank" rel="noreferrer">{activeProject.linkLabel}<span>↗</span></a>
                : <span className="case-study__pending">Release link coming soon</span>}
            </footer>
          </article>
        </div>,
        document.body,
      )}
    </>
  )
}
