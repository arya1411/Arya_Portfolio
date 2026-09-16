import { Hero } from './components/Hero'
import { ProfileSection } from './components/ProfileSection'
import { TechnologiesSection } from './components/TechnologiesSection'
import { ProjectsSection } from './components/ProjectsSection'
import { CertificationsSection } from './components/CertificationsSection'
import { FooterSection } from './components/FooterSection'
import { SectionTransition } from './components/SectionTransition'

export default function App() {
  return (
    <main>
      <Hero />
      <ProfileSection />
      <SectionTransition index="03" from="PROFILE" to="TECHNOLOGIES" lead="Tools with" accent="purpose." tone="light" />
      <TechnologiesSection />
      <SectionTransition index="04" from="TECHNOLOGIES" to="PROJECTS" lead="Proof in" accent="the work." tone="dark" />
      <ProjectsSection />
      <SectionTransition index="05" from="PROJECTS" to="CERTIFICATES" lead="Always" accent="learning." tone="light" />
      <CertificationsSection />
      <SectionTransition index="06" from="CERTIFICATES" to="CONTACT" lead="Let’s build" accent="next." tone="coral" />
      <FooterSection />
    </main>
  )
}
