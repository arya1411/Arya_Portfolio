type SectionTransitionProps = {
  index: string
  from: string
  to: string
  lead: string
  accent: string
  tone: 'dark' | 'light' | 'coral'
}

export function SectionTransition({ index, from, to, lead, accent, tone }: SectionTransitionProps) {
  return (
    <section className={`type-interlude type-interlude--${tone} type-interlude--${index}`} aria-label={`${to} section introduction`}>
      <div className="type-interlude__meta"><span>{index} / {to}</span><span>{from} → {to}</span></div>
      <h2 className="type-interlude__title" aria-label={`${lead} ${accent}`}>
        <span className="type-interlude__word type-interlude__word--lead" aria-hidden="true">{lead}</span>
        <span className="type-interlude__word type-interlude__word--accent" aria-hidden="true">{accent}</span>
      </h2>
      <div className="type-interlude__rule" aria-hidden="true" />
      <span className="type-interlude__index" aria-hidden="true">{index}</span>
    </section>
  )
}
