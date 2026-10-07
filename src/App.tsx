import { Hero } from './components/Hero'
import { ProfileSection } from './components/ProfileSection'
import { TechnologiesSection } from './components/TechnologiesSection'
import { ProjectsSection } from './components/ProjectsSection'
import { CertificationsSection } from './components/CertificationsSection'
import { FooterSection } from './components/FooterSection'
import { CustomCursor } from './components/CustomCursor'

export default function App() {
  return (
    <main>
      <CustomCursor />
      <Hero />
      <ProfileSection />
      <TechnologiesSection />
      <ProjectsSection />
      <CertificationsSection />
      <FooterSection />
    </main>
  )
}
