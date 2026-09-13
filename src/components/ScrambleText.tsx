import { useEffect, useRef } from 'react'

export function ScrambleText({ text }: { text: string }) {
  const ref = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const element = ref.current
    if (!element || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const glyphs = '01/{}[]<>_—+'
    let raf = 0
    let start = 0
    const duration = 950
    const run = (time: number) => {
      if (!start) start = time
      const progress = Math.min(1, (time - start) / duration)
      const solved = Math.floor(progress * text.length)
      element.textContent = text
        .split('')
        .map((char, index) => (index < solved || char === ' ' ? char : glyphs[Math.floor(Math.random() * glyphs.length)]))
        .join('')
      if (progress < 1) raf = requestAnimationFrame(run)
    }
    const delay = window.setTimeout(() => { raf = requestAnimationFrame(run) }, 1500)
    return () => { window.clearTimeout(delay); cancelAnimationFrame(raf) }
  }, [text])

  return <span ref={ref}>{text}</span>
}
