import { Hero } from './components/Hero'
import { ProfileSection } from './components/ProfileSection'
import { TechnologiesSection } from './components/TechnologiesSection'
import { ProjectsSection } from './components/ProjectsSection'
import { CertificationsSection } from './components/CertificationsSection'
import { FooterSection } from './components/FooterSection'
import { SectionTransition } from './components/SectionTransition'
import { CustomCursor } from './components/CustomCursor'

export default function App() {
  return (
    <main>
      <CustomCursor />
      <Hero />
      <ProfileSection />
      <SectionTransition index="03" from="PROFILE" to="TECHNOLOGIES" lead="TOOLS WITH" accent="PURPOSE." tone="light" />
      <TechnologiesSection />
      <SectionTransition index="04" from="TECHNOLOGIES" to="PROJECTS" lead="PROOF IN" accent="THE WORK." tone="dark" />
      <ProjectsSection />
      <SectionTransition index="05" from="PROJECTS" to="CERTIFICATES" lead="ALWAYS" accent="LEARNING." tone="light" />
      <CertificationsSection />
      <SectionTransition index="06" from="CERTIFICATES" to="CONTACT" lead="LET’S BUILD" accent="NEXT." tone="coral" />
      <FooterSection />
    </main>
  )
}
