import { useLayoutEffect } from 'react'
import { Hero } from './components/Hero'
import { ProfileSection } from './components/ProfileSection'
import { TechnologiesSection } from './components/TechnologiesSection'
import { ProjectsSection } from './components/ProjectsSection'
import { CertificationsSection } from './components/CertificationsSection'
import { FooterSection } from './components/FooterSection'
import { CustomCursor } from './components/CustomCursor'

export default function App() {
  useLayoutEffect(() => {
    const scrollToHash = () => {
      if (!window.location.hash) return
      document.querySelector(window.location.hash)?.scrollIntoView({ block: 'start' })
    }
    scrollToHash()
    window.addEventListener('hashchange', scrollToHash)
    return () => {
      window.removeEventListener('hashchange', scrollToHash)
    }
  }, [])

  return (
    <>
      <a className="skip-link" href="#projects">Skip to selected work</a>
      <main>
        <CustomCursor />
        <Hero />
        <ProfileSection />
        <TechnologiesSection />
        <ProjectsSection />
        <CertificationsSection />
        <FooterSection />
      </main>
    </>
  )
}
