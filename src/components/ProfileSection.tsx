import { useRef } from 'react'
import { portfolio } from '../data/portfolio'
import { useSectionReveal } from '../hooks/useSectionReveal'
import { SectionHeader } from './SectionHeader'

export function ProfileSection() {
  const root = useRef<HTMLElement>(null)
  useSectionReveal(root)

  return (
    <section className="about-board section-shell" id="profile" ref={root} aria-labelledby="profile-title">
      <SectionHeader label="About me" title="What keeps me curious." index="02" id="profile-title" />
      <div className="about-story">
        <article className="about-story__card about-story__card--interests" data-section-reveal>
          <span className="about-story__label">01 / Interests</span>
          <h3>Where the interface<br />meets the system.</h3>
          <p>I enjoy understanding how the pieces fit together: what someone sees on a screen, how an API handles their request, and how the data behind it is organised.</p>
          <p>AI is another part of that curiosity—exploring how models can support useful features in everyday software.</p>
        </article>
        <article className="about-story__card about-story__card--education" data-section-reveal>
          <span className="about-story__label">02 / Education</span>
          <h3>Learning.<br />Then applying.</h3>
          <p>I’m pursuing a B.Tech at Manipal Institute of Technology. My personal projects give me a way to put what I learn into practice, from web applications to machine learning.</p>
          <span className="about-story__note">Manipal Institute of Technology · India</span>
        </article>
        <article className="about-story__card about-story__card--opportunities" data-section-reveal>
          <span className="about-story__label">03 / Next step</span>
          <h3>Room to grow.</h3>
          <p>I’m looking for internships and full-stack roles where I can contribute, learn from other developers, and work on real problems.</p>
          <a href={portfolio.contact.inquiryEmail}>Get in touch <span aria-hidden="true">↗</span></a>
        </article>
      </div>
    </section>
  )
}
