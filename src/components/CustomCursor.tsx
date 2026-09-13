import { useEffect, useRef } from 'react'
import gsap from 'gsap'

const interactiveSelector = 'a, button, [role="button"], [data-cursor-label]'

export function CustomCursor() {
  const ring = useRef<HTMLDivElement>(null)
  const dot = useRef<HTMLDivElement>(null)
  const label = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const finePointer = window.matchMedia('(pointer: fine)')
    if (!finePointer.matches || !ring.current || !dot.current) return

    const root = document.documentElement
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const ringX = gsap.quickTo(ring.current, 'x', { duration: reduceMotion ? 0 : .28, ease: 'power3.out' })
    const ringY = gsap.quickTo(ring.current, 'y', { duration: reduceMotion ? 0 : .28, ease: 'power3.out' })
    const dotX = gsap.quickTo(dot.current, 'x', { duration: reduceMotion ? 0 : .06, ease: 'power2.out' })
    const dotY = gsap.quickTo(dot.current, 'y', { duration: reduceMotion ? 0 : .06, ease: 'power2.out' })
    let started = false

    root.classList.add('cursor-active')

    const move = (event: PointerEvent) => {
      if (!started) {
        gsap.set([ring.current, dot.current], { x: event.clientX, y: event.clientY })
        root.classList.add('cursor-ready')
        started = true
        return
      }
      ringX(event.clientX)
      ringY(event.clientY)
      dotX(event.clientX)
      dotY(event.clientY)
    }

    const updateHover = (event: PointerEvent) => {
      const target = event.target instanceof Element ? event.target.closest<HTMLElement>(interactiveSelector) : null
      root.classList.toggle('is-hovering', Boolean(target))
      if (target && label.current) {
        label.current.textContent = target.dataset.cursorLabel || (target.tagName === 'BUTTON' ? 'VIEW' : 'OPEN')
      }
    }

    const leave = (event: PointerEvent) => {
      if (event.relatedTarget) return
      root.classList.remove('cursor-ready', 'is-hovering')
      started = false
    }

    window.addEventListener('pointermove', move, { passive: true })
    document.addEventListener('pointerover', updateHover, { passive: true })
    document.addEventListener('pointerout', updateHover, { passive: true })
    document.addEventListener('pointerout', leave, { passive: true })

    return () => {
      window.removeEventListener('pointermove', move)
      document.removeEventListener('pointerover', updateHover)
      document.removeEventListener('pointerout', updateHover)
      document.removeEventListener('pointerout', leave)
      root.classList.remove('cursor-active', 'cursor-ready', 'is-hovering')
    }
  }, [])

  return (
    <>
      <div className="cursor" ref={ring} aria-hidden="true"><span ref={label}>OPEN</span></div>
      <div className="cursor__dot" ref={dot} aria-hidden="true" />
    </>
  )
}
