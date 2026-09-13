import { useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import { TextType } from './TextType'

gsap.registerPlugin(useGSAP, ScrollTrigger)

type SectionTransitionProps = {
  index: string
  from: string
  to: string
  lead: string
  accent: string
  tone: 'dark' | 'light' | 'coral'
}

export function SectionTransition({ index, from, to, lead, accent, tone }: SectionTransitionProps) {
  const root = useRef<HTMLElement>(null)

  useGSAP(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    gsap.from('.section-bridge__top > *', {
      y: 14,
      opacity: 0,
      duration: .55,
      stagger: .08,
      ease: 'power3.out',
      force3D: true,
      scrollTrigger: { trigger: root.current, start: 'top 90%', once: true, invalidateOnRefresh: true },
    })

    // Trigger from the heading itself. Triggering from the top of this full-screen
    // section caused the time-based reveal to finish before the words reached view.
    gsap.timeline({
      scrollTrigger: { trigger: '.section-bridge__title', start: 'top 88%', once: true, invalidateOnRefresh: true },
      defaults: { ease: 'power4.out', force3D: true },
    })
      .fromTo('.section-bridge__title-line--lead',
        { clipPath: 'inset(0 100% 0 0)' },
        { clipPath: 'inset(0 0% 0 0)', duration: 1.05 },
      )
      .fromTo('.section-bridge__title-line--lead [data-bridge-word]',
        { x: -34, opacity: .15, filter: 'blur(7px)' },
        { x: 0, opacity: 1, filter: 'blur(0px)', duration: .9 },
        '<',
      )
      .fromTo('.section-bridge__title-line--accent',
        { clipPath: 'inset(0 0 0 100%)' },
        { clipPath: 'inset(0 0 0 0%)', duration: 1.05 },
        '-=.68',
      )
      .fromTo('.section-bridge__title-line--accent [data-bridge-word]',
        { x: 34, opacity: .15, filter: 'blur(7px)' },
        { x: 0, opacity: 1, filter: 'blur(0px)', duration: .9 },
        '<',
      )
      .from('.section-bridge__number', { scale: .82, opacity: 0, duration: .8 }, '-=.72')

    gsap.timeline({
      scrollTrigger: { trigger: '.section-bridge__route', start: 'top 94%', once: true, invalidateOnRefresh: true },
      defaults: { ease: 'power3.out', force3D: true },
    })
      .from('.section-bridge__route > span, .section-bridge__route > b', { y: 12, opacity: 0, duration: .5, stagger: .06 })
      .from('.section-bridge__route i', { scaleX: 0, duration: .8, stagger: .08 }, '-=.35')

    gsap.timeline({
      scrollTrigger: { trigger: root.current, start: 'top bottom', end: 'bottom top', scrub: .7, invalidateOnRefresh: true },
      defaults: { force3D: true },
    })
      .fromTo('.section-bridge__title-line--lead', { xPercent: -3 }, { xPercent: 3, ease: 'none' }, 0)
      .fromTo('.section-bridge__title-line--accent', { xPercent: 3 }, { xPercent: -3, ease: 'none' }, 0)
      .fromTo('.section-bridge__ambient', { yPercent: -18, scale: .88 }, { yPercent: 18, scale: 1.08, ease: 'none' }, 0)
      .to('.section-bridge__number', { rotate: 26, ease: 'none' }, 0)

    gsap.fromTo('.section-bridge__progress span', { scaleY: 0 }, {
      scaleY: 1,
      ease: 'none',
      scrollTrigger: { trigger: root.current, start: 'top bottom', end: 'bottom top', scrub: true, invalidateOnRefresh: true },
    })
  }, { scope: root })

  const renderLine = (text: string, className: string) => (
    <span className={`section-bridge__title-line ${className}`} aria-hidden="true">
      {className.includes('--accent')
        ? <TextType text={text} startOnVisible reserveSpace showCursor />
        : text.split(' ').map((word, wordIndex, words) => (
            <span className="section-bridge__word-clip" key={`${word}-${wordIndex}`}>
              <span data-bridge-word>{word}</span>{wordIndex < words.length - 1 ? '\u00a0' : ''}
            </span>
          ))}
    </span>
  )

  return (
    <section ref={root} className={`section-bridge section-bridge--${tone}`} aria-label={`Transition from ${from} to ${to}`}>
      <div className="section-bridge__grid" aria-hidden="true" />
      <div className="section-bridge__ambient" aria-hidden="true" />
      <div className="section-bridge__progress" aria-hidden="true"><i><span /></i><small>SCROLL</small></div>
      <div className="section-bridge__inner">
        <div className="section-bridge__top"><span>CHAPTER TRANSITION</span><span>{index} / {to}</span></div>
        <div className="section-bridge__title" aria-label={`${lead} ${accent}`}>
          {renderLine(lead, 'section-bridge__title-line--lead')}
          {renderLine(accent, 'section-bridge__title-line--accent')}
        </div>
        <div className="section-bridge__route"><span>{from}</span><i /><b>{index}</b><i /><span>{to}</span></div>
        <div className="section-bridge__number" aria-hidden="true">{index}</div>
      </div>
    </section>
  )
}
