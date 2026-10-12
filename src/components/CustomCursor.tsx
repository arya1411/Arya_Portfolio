import { useEffect, useRef } from 'react'
import gsap from 'gsap'

const interactiveSelector = 'a, button, [role="button"], [data-cursor-label]'

function getCursorLabel(target: HTMLElement) {
  if (target.dataset.cursorLabel) return target.dataset.cursorLabel
  if (target.tagName === 'BUTTON') return 'SELECT'

  const href = target.getAttribute('href') ?? ''
  if (href.startsWith('mailto:')) return 'EMAIL'
  if (href.startsWith('#')) return 'VIEW'
  return 'VISIT'
}

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
    const ringRotate = gsap.quickTo(ring.current, 'rotation', { duration: reduceMotion ? 0 : .42, ease: 'power3.out' })
    let started = false
    let lastX = 0
    let lastY = 0

    root.classList.add('cursor-active')

    const move = (event: PointerEvent) => {
      if (!started) {
        gsap.set([ring.current, dot.current], { x: event.clientX, y: event.clientY })
        root.classList.add('cursor-ready')
        lastX = event.clientX
        lastY = event.clientY
        started = true
        return
      }

      const deltaX = event.clientX - lastX
      const deltaY = event.clientY - lastY
      const speed = Math.min(Math.hypot(deltaX, deltaY), 36)
      const hovering = root.classList.contains('is-hovering')
      ringX(event.clientX)
      ringY(event.clientY)
      dotX(event.clientX)
      dotY(event.clientY)
      ringRotate(hovering ? 0 : Math.atan2(deltaY, deltaX) * (180 / Math.PI))
      gsap.to(ring.current, {
        scaleX: hovering ? 1 : 1 + speed * .008,
        scaleY: hovering ? 1 : 1 - speed * .003,
        duration: reduceMotion ? 0 : .32,
        ease: 'power3.out',
        overwrite: 'auto',
      })
      lastX = event.clientX
      lastY = event.clientY
    }

    const updateHover = (event: PointerEvent) => {
      const source = event.type === 'pointerout' ? event.relatedTarget : event.target
      const target = source instanceof Element ? source.closest<HTMLElement>(interactiveSelector) : null
      root.classList.toggle('is-hovering', Boolean(target))
      if (target && label.current) {
        label.current.textContent = getCursorLabel(target)
        gsap.to(ring.current, { rotation: 0, scaleX: 1, scaleY: 1, duration: reduceMotion ? 0 : .24, ease: 'power3.out', overwrite: 'auto' })
      }
    }

    const press = () => root.classList.add('is-cursor-pressing')
    const release = () => root.classList.remove('is-cursor-pressing')

    const leave = (event: PointerEvent) => {
      if (event.relatedTarget) return
      root.classList.remove('cursor-ready', 'is-hovering')
      started = false
    }

    window.addEventListener('pointermove', move, { passive: true })
    document.addEventListener('pointerover', updateHover, { passive: true })
    document.addEventListener('pointerout', updateHover, { passive: true })
    document.addEventListener('pointerout', leave, { passive: true })
    window.addEventListener('pointerdown', press, { passive: true })
    window.addEventListener('pointerup', release, { passive: true })

    return () => {
      window.removeEventListener('pointermove', move)
      document.removeEventListener('pointerover', updateHover)
      document.removeEventListener('pointerout', updateHover)
      document.removeEventListener('pointerout', leave)
      window.removeEventListener('pointerdown', press)
      window.removeEventListener('pointerup', release)
      root.classList.remove('cursor-active', 'cursor-ready', 'is-hovering', 'is-cursor-pressing')
    }
  }, [])

  return (
    <>
      <div className="cursor" ref={ring} aria-hidden="true">
        <span className="cursor__frame"><i /><i /><i /><i /></span>
        <span className="cursor__label" ref={label}>VIEW</span>
      </div>
      <div className="cursor__dot" ref={dot} aria-hidden="true"><i /><i /></div>
    </>
  )
}
