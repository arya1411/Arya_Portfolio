import type { RefObject } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(useGSAP, ScrollTrigger)

export function useSectionReveal(scope: RefObject<HTMLElement | null>) {
  useGSAP(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      gsap.set('[data-section-reveal]', { opacity: 1, y: 0 })
      gsap.set('[data-type-word]', { opacity: 1, yPercent: 0, rotate: 0 })
      const staticDisciplines = scope.current?.querySelectorAll('.profile-disciplines span')
      if (staticDisciplines?.length) gsap.set(staticDisciplines, { opacity: 1, y: 0, '--discipline-line': 1 })
      return
    }
    gsap.from('[data-section-reveal]', {
      y: 54,
      opacity: 0,
      force3D: true,
      duration: 1,
      stagger: 0.09,
      ease: 'power3.out',
      scrollTrigger: { trigger: scope.current, start: 'top 78%', once: true },
    })

    gsap.utils.toArray<HTMLElement>('[data-type-reveal]').forEach((heading) => {
      gsap.from(heading.querySelectorAll('[data-type-word]'), {
        yPercent: 112,
        rotate: 1.5,
        opacity: 0,
        force3D: true,
        duration: .82,
        stagger: .055,
        ease: 'expo.out',
        scrollTrigger: { trigger: heading, start: 'top 88%', once: true },
      })
    })

    const counters = gsap.utils.toArray<HTMLElement>('[data-count]')
    counters.forEach((counter) => {
      const target = Number(counter.dataset.count)
      gsap.fromTo(counter, { textContent: 0 }, {
        textContent: target,
        duration: 1.15,
        snap: { textContent: 1 },
        ease: 'power2.out',
        scrollTrigger: { trigger: counter, start: 'top 90%', once: true },
        onUpdate: () => { counter.textContent = String(Math.round(Number(counter.textContent))).padStart(2, '0') },
      })
    })

    const disciplines = scope.current?.querySelector('.profile-disciplines')
    if (disciplines) {
      gsap.from('.profile-disciplines span', {
        y: 16,
        opacity: 0,
        force3D: true,
        '--discipline-line': 0,
        duration: .7,
        stagger: .09,
        ease: 'power3.out',
        scrollTrigger: { trigger: disciplines, start: 'top 88%', once: true },
      })
    }
  }, { scope })
}
