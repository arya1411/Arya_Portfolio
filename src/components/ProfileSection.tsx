import { useRef } from 'react'
import { developerStats, portfolio } from '../data/portfolio'
import { useSectionReveal } from '../hooks/useSectionReveal'

const coreTools = [
  { mark: 'TS', label: 'TypeScript' },
  { mark: 'RE', label: 'React' },
  { mark: 'ND', label: 'Node.js' },
  { mark: 'PY', label: 'Python' },
  { mark: 'API', label: 'REST APIs' },
  { mark: 'DB', label: 'MongoDB' },
]

export function ProfileSection() {
  const root = useRef<HTMLElement>(null)
  useSectionReveal(root)

  return (
    <section className="about-board section-shell" id="profile" ref={root} aria-labelledby="profile-title">
      <div className="about-board__rail" data-section-reveal>
        <span>Arya Patel / Portfolio</span>
        <span>2026</span>
      </div>

      <header className="about-board__header" data-section-reveal>
        <h2 id="profile-title">About <em>Me</em></h2>
        <p>Full-Stack Developer <i /> React + Node.js <i /> B.Tech Student</p>
      </header>

      <div className="about-grid">
        <article className="about-tile about-tile--manifesto" data-section-reveal>
          <span className="about-tile__index">01 / APPROACH</span>
          <div className="about-manifesto__mark" aria-hidden="true"><span>↗</span></div>
          <div>
            <small>I BUILD</small>
            <h3>From idea<br />to deployment.</h3>
          </div>
        </article>

        <article className="about-tile about-tile--stats" data-section-reveal>
          <span className="about-tile__index">02 / OUTPUT</span>
          <strong>{developerStats[0].value}</strong>
          <p>Selected<br />products</p>
          <span className="about-stats__rule" />
          <strong>{developerStats[1].value}</strong>
          <p>AI-powered<br />builds</p>
        </article>

        <article className="about-tile about-tile--statement" data-section-reveal>
          <span className="about-tile__index">03 / WHAT I DO</span>
          <span className="about-statement__ghost" aria-hidden="true">BUILD</span>
          <h3>REACT VIEWS<br /><em>NODE</em> BACKENDS</h3>
          <p>TypeScript · REST APIs · MongoDB</p>
        </article>

        <article className="about-tile about-tile--tools" data-section-reveal>
          <span className="about-tile__index">04 / DAILY TOOLKIT</span>
          <div className="about-tools__grid" aria-label="Core technologies">
            {coreTools.map((tool) => <span key={tool.mark}><b>{tool.mark}</b><small>{tool.label}</small></span>)}
          </div>
          <p>The tools I reach for to design, engineer and ship dependable products.</p>
        </article>

        <article className="about-tile about-tile--identity" data-section-reveal>
          <span className="about-tile__index">05 / WHO I AM</span>
          <div className="about-identity__monogram" aria-hidden="true">AP</div>
          <h3>Arya Patel.</h3>
          <p>I’m a full-stack developer studying at Manipal Institute of Technology. I turn early ideas into reliable products—from thoughtful interfaces and dependable systems to useful AI.</p>
          <small>Developer by craft · Product thinker by instinct</small>
        </article>

        <article className="about-tile about-tile--focus" data-section-reveal>
          <span className="about-focus__monogram" aria-hidden="true">A</span>
          <div>
            <span className="about-tile__index">CURRENT FOCUS</span>
            <h3>Building<br />Code Sentinel.</h3>
          </div>
          <a href={portfolio.personal.resumeUrl} target="_blank" rel="noreferrer">Résumé <span>↗</span></a>
        </article>

        <article className="about-tile about-tile--details" data-section-reveal>
          <span className="about-tile__index">06 / NOW</span>
          <div><small>Studying</small><strong>B.Tech · MIT</strong></div>
          <div><small>Based in</small><strong>India</strong></div>
          <a href={portfolio.contact.inquiryEmail}><span>Let’s talk</span><b>↗</b></a>
        </article>
      </div>
    </section>
  )
}
