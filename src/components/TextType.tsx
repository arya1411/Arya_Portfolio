import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'

type TextTypeProps = {
  text: string
  initialDelay?: number
  minSpeed?: number
  maxSpeed?: number
  startOnVisible?: boolean
  reserveSpace?: boolean
  showCursor?: boolean
}

export function TextType({ text, initialDelay = 0, minSpeed = 28, maxSpeed = 48, startOnVisible = false, reserveSpace = false, showCursor = true }: TextTypeProps) {
  const [reduceMotion] = useState(() => window.matchMedia('(prefers-reduced-motion: reduce)').matches)
  const [displayedText, setDisplayedText] = useState(reduceMotion ? text : '')
  const [complete, setComplete] = useState(reduceMotion)
  const [isVisible, setIsVisible] = useState(!startOnVisible)
  const container = useRef<HTMLSpanElement>(null)
  const cursor = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    if (!startOnVisible || !container.current || reduceMotion) return
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true)
        observer.disconnect()
      }
    }, { threshold: .1 })
    observer.observe(container.current)
    return () => observer.disconnect()
  }, [reduceMotion, startOnVisible])

  useEffect(() => {
    if (reduceMotion || !isVisible) return

    let characterIndex = 0
    let typingTimer = 0
    let startTimer = 0

    const typeNextCharacter = () => {
      characterIndex += 1
      setDisplayedText(text.slice(0, characterIndex))

      if (characterIndex >= text.length) {
        setComplete(true)
        return
      }

      const delay = minSpeed + Math.random() * (maxSpeed - minSpeed)
      typingTimer = window.setTimeout(typeNextCharacter, delay)
    }

    startTimer = window.setTimeout(typeNextCharacter, initialDelay)
    return () => {
      window.clearTimeout(startTimer)
      window.clearTimeout(typingTimer)
    }
  }, [initialDelay, isVisible, maxSpeed, minSpeed, reduceMotion, text])

  useEffect(() => {
    if (!cursor.current || reduceMotion || !showCursor) return
    const blink = gsap.to(cursor.current, { opacity: 0, duration: .46, repeat: -1, yoyo: true, ease: 'power2.inOut' })
    return () => { blink.kill() }
  }, [reduceMotion, showCursor])

  return (
    <span ref={container} className={`text-type ${reserveSpace ? 'text-type--reserved' : ''}`} aria-label={text}>
      {reserveSpace && <span className="text-type__ghost" aria-hidden="true">{text}</span>}
      <span className="text-type__content" aria-hidden="true">{displayedText}</span>
      {showCursor && <span ref={cursor} className={`text-type__cursor ${complete ? 'text-type__cursor--complete' : ''}`} aria-hidden="true">_</span>}
    </span>
  )
}
