import { useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import { portfolio } from '../data/portfolio'
import { TextType } from './TextType'

gsap.registerPlugin(useGSAP, ScrollTrigger)

export function Hero() {
  const root = useRef<HTMLElement>(null)
  const [lead, subject, outcome] = portfolio.personal.heroHeadline

  useGSAP(() => {
    const scope = root.current
    if (!scope) return
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const finePointer = window.matchMedia('(pointer: fine)').matches

    if (!reduceMotion) {
      gsap.timeline({ defaults: { ease: 'power3.out', force3D: true } })
        .to('.intro__bar-fill', { scaleX: 1, duration: .85, ease: 'power2.inOut' })
        .to('.intro__count', { textContent: 100, duration: .85, snap: { textContent: 1 } }, '<')
        .to('.intro__panel--top', { yPercent: -100, duration: .9, ease: 'power4.inOut' }, '+=.08')
        .to('.intro__panel--bottom', { yPercent: 100, duration: .9, ease: 'power4.inOut' }, '<')
        .set('.intro', { display: 'none' })
        .from('.home-nav', { y: -18, opacity: 0, duration: .7 }, '-=.28')
        .from('.home-hero__eyebrow', { y: 14, opacity: 0, duration: .55 }, '-=.3')
        .from('.home-title__line > span', { yPercent: 135, rotate: 1.5, opacity: 0, duration: 1.05, stagger: .1, ease: 'expo.out' }, '-=.35')
        .from('.home-hero__summary, .home-hero__actions', { y: 18, opacity: 0, duration: .65, stagger: .1 }, '-=.6')
        .from('.build-object', { x: 45, rotate: 8, scale: .86, opacity: 0, duration: 1.1, ease: 'expo.out' }, '-=1')
        .from('.build-card__content > *, .build-object__label', { y: 12, opacity: 0, duration: .48, stagger: .045 }, '-=.65')
        .from('.home-hero__footer', { opacity: 0, duration: .5 }, '-=.3')

      gsap.timeline({ defaults: { force3D: true }, scrollTrigger: { trigger: scope, start: 'top top', end: 'bottom bottom', scrub: .8, invalidateOnRefresh: true } })
        .to('.home-hero__copy', { yPercent: -10, opacity: .18, ease: 'none' }, 0)
        .to('.build-object', { yPercent: 16, rotate: -7, scale: 1.07, ease: 'none' }, 0)
        .to('.home-hero__reveal', { clipPath: 'inset(0% 0 0 0)', ease: 'none' }, .46)
        .fromTo('.chapter-transition__content', { yPercent: 18, opacity: 0 }, { yPercent: 0, opacity: 1, ease: 'none' }, .64)
        .fromTo('.chapter-transition__line i', { scaleX: 0 }, { scaleX: 1, ease: 'none' }, .68)
        .to('.chapter-transition__number', { rotate: 0, scale: 1, ease: 'none' }, .68)
    }

    if (finePointer && !reduceMotion) {
      const object = scope.querySelector<HTMLElement>('.build-object')
      if (!object) return
      const rotateX = gsap.quickTo(object, 'rotationX', { duration: .7, ease: 'power3.out' })
      const rotateY = gsap.quickTo(object, 'rotationY', { duration: .7, ease: 'power3.out' })
      const move = (event: PointerEvent) => {
        rotateX((event.clientY / window.innerHeight - .5) * -7)
        rotateY((event.clientX / window.innerWidth - .72) * 8)
      }
      const leave = () => { rotateX(0); rotateY(0) }
      scope.addEventListener('pointermove', move, { passive: true })
      scope.addEventListener('pointerleave', leave)
      return () => {
        scope.removeEventListener('pointermove', move)
        scope.removeEventListener('pointerleave', leave)
      }
    }
  }, { scope: root })

  return (
    <section ref={root} className="home-hero home-hero--built" aria-labelledby="hero-title">
      <a className="skip-link" href="#hero-actions">Skip to actions</a>
      <div className="intro" aria-hidden="true">
        <div className="intro__panel intro__panel--top"><span>INITIALISING / PORTFOLIO.SYS</span></div>
        <div className="intro__panel intro__panel--bottom">
          <span className="intro__count">0</span><span className="intro__percent">%</span>
          <span className="intro__bar"><span className="intro__bar-fill" /></span>
        </div>
      </div>
      <div className="home-hero__stage" id="top">
        <div className="home-hero__grain" aria-hidden="true" />
        <div className="home-hero__reveal chapter-transition" aria-hidden="true">
          <div className="chapter-transition__content">
            <div className="chapter-transition__top"><span>NEXT CHAPTER</span><span>02 / PROFILE</span></div>
            <div className="chapter-transition__title"><span>BEYOND</span><strong>THE BUILD.</strong></div>
            <div className="chapter-transition__line"><span>IDEA</span><i /><span>PRODUCT</span><i /><span>IMPACT</span></div>
            <div className="chapter-transition__number">02</div>
            <p>THE PERSON, PROCESS, AND PRINCIPLES<br />BEHIND THE PRODUCTS.</p>
          </div>
        </div>

        <nav className="home-nav" aria-label="Main navigation">
          <a className="home-nav__brand" href="#top" aria-label="Arya Patel — back to top">
            <svg className="home-nav__mark" viewBox="0 0 64 64" aria-hidden="true">
              <path d="M8 49 23 15l15 34M14 36h18" />
              <path d="M38 49V15h10c11 0 11 18 0 18H38" />
            </svg>
            <span className="home-nav__name">Arya Patel</span>
            <span className="home-nav__year">©26</span>
          </a>
          <div className="home-nav__links"><a href="#profile">About</a><a href="#projects">Work</a><a href="#certifications">Certificates</a></div>
          <a className="home-nav__availability" href={portfolio.contact.inquiryEmail}><i /> Available for work</a>
        </nav>

        <div className="home-hero__body">
          <div className="home-hero__copy">
            <p className="home-hero__eyebrow">
              <TextType text="FULL-STACK DEVELOPER · AI-POWERED PRODUCTS — INDIA" initialDelay={2050} />
            </p>
            <h1 className="home-title" id="hero-title">
              <span className="home-title__line"><span>{lead}</span></span>
              <span className="home-title__line"><span>{subject}</span></span>
              <span className="home-title__line home-title__line--built"><span>{outcome}</span></span>
            </h1>
            <p className="home-hero__summary">I’m Arya a developer who takes products from first idea to final deployment. I build polished interfaces, dependable systems, and useful AI features that solve real problems.</p>
            <div className="home-hero__actions" id="hero-actions">
              <a className="home-cta home-cta--primary" href="#projects"><span>Explore my work</span><i>↘</i></a>
              <a className="home-cta" href={portfolio.contact.inquiryEmail}><span>Let’s talk</span><i>↗</i></a>
            </div>
          </div>

          <div className="home-hero__prop" aria-hidden="true">
            <div className="build-object">
              <div className="build-object__layer build-object__layer--back" />
              <div className="build-object__layer build-object__layer--mid" />
              <div className="build-card">
                <div className="build-card__content">
                  <header><span>PRODUCT BLUEPRINT</span><span>AP / 001</span></header>
                  <div className="build-card__statement"><small>FROM</small><strong>IDEA</strong><i>→</i><small>TO</small><strong>IMPACT</strong></div>
                  <div className="build-card__tracks">
                    <span><b>01</b> INTERFACE <i /></span>
                    <span><b>02</b> SYSTEMS <i /></span>
                    <span><b>03</b> INTELLIGENCE <i /></span>
                  </div>
                  <footer><span>DESIGN / ENGINEER / SHIP</span><b>READY.</b></footer>
                </div>
              </div>
              <span className="build-object__label build-object__label--top">FULL STACK<br />PRODUCT BUILDER</span>
              <span className="build-object__label build-object__label--bottom">REACT · NODE<br />PYTHON · AI</span>
            </div>
          </div>
        </div>

        <footer className="home-hero__footer">
          <div><a href={portfolio.contact.github} target="_blank" rel="noreferrer">GitHub ↗</a><a href={portfolio.contact.linkedin} target="_blank" rel="noreferrer">LinkedIn ↗</a></div>
          <a className="home-scroll" href="#profile"><i /><span>Scroll to explore</span></a>
          <span>05 PRODUCTS · 02 AI BUILDS · 03 PUBLIC</span>
        </footer>
      </div>
    </section>
  )
}
