import { RevealHeading } from './RevealHeading'

export function SectionHeader({ label, title, index, id }: { label: string; title: string; index: string; id?: string }) {
  return (
    <header className="section-head" data-section-reveal>
      <span className="section-head__index">/{index}</span>
      <div><p>{label}</p><RevealHeading text={title} id={id} /></div>
      <span className="section-head__rule" />
    </header>
  )
}
