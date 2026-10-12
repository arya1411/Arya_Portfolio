import { useEffect, useRef } from 'react'

type Point = { x: number; y: number; phase: number; speed: number; amplitude: number }

// A purpose-built canvas interpretation of React Bits' cursor-reactive field
// patterns, reshaped into a directional signal compiler for this hero.
export function SignalField() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const context = canvas.getContext('2d')
    if (!context) return

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const pointer = { x: 0.5, y: 0.5, tx: 0.5, ty: 0.5 }
    let size = { width: 1, height: 1 }
    let points: Point[] = []
    let frame = 0

    const resize = () => {
      const rect = canvas.getBoundingClientRect()
      const dpr = Math.min(window.devicePixelRatio || 1, 1.75)
      size = { width: rect.width, height: rect.height }
      canvas.width = Math.round(rect.width * dpr)
      canvas.height = Math.round(rect.height * dpr)
      context.setTransform(dpr, 0, 0, dpr, 0, 0)
      const count = Math.max(30, Math.min(64, Math.floor(rect.width / 13)))
      points = Array.from({ length: count }, (_, index) => ({
        x: (index + .5) / count,
        y: ((index * 17 + 7) % count) / count,
        phase: index * .67,
        speed: .45 + (index % 6) * .08,
        amplitude: 8 + (index % 9) * 2.2,
      }))
      if (reduced) draw(2400)
    }

    const onPointerMove = (event: PointerEvent) => {
      const rect = canvas.getBoundingClientRect()
      pointer.tx = (event.clientX - rect.left) / rect.width
      pointer.ty = (event.clientY - rect.top) / rect.height
    }

    const draw = (time: number) => {
      const { width, height } = size
      context.clearRect(0, 0, width, height)
      pointer.x += (pointer.tx - pointer.x) * 0.045
      pointer.y += (pointer.ty - pointer.y) * 0.045

      const t = reduced ? 2400 : time
      const pointerX = pointer.x * width
      const pointerY = pointer.y * height

      for (let row = 0; row < 14; row += 1) {
        const baseline = height * (.12 + row * .06)
        context.beginPath()
        for (let step = 0; step <= 40; step += 1) {
          const px = (step / 40) * width
          const distance = Math.abs(px - pointerX)
          const influence = Math.max(0, 1 - distance / (width * .34))
          const wave = Math.sin(step * .38 + row * .72 + t * .00042) * (2.5 + row * .18)
          const pull = (pointerY - baseline) * influence * .1
          const py = baseline + wave + pull
          if (step === 0) context.moveTo(px, py)
          else context.lineTo(px, py)
        }
        context.strokeStyle = row === 7 ? 'rgba(198,166,111,.42)' : `rgba(232,235,227,${.035 + row * .004})`
        context.lineWidth = row === 7 ? 1 : .65
        context.stroke()
      }

      points.forEach((point, index) => {
        const travel = (point.x + t * .000035 * point.speed) % 1
        const px = travel * width
        const baseY = point.y * height
        const distance = Math.hypot(px - pointerX, baseY - pointerY)
        const proximity = Math.max(0, 1 - distance / 150)
        const py = baseY + Math.sin(t * .0007 * point.speed + point.phase) * point.amplitude + (pointerY - baseY) * proximity * .12
        const length = 5 + proximity * 24
        context.beginPath()
        context.moveTo(px - length, py)
        context.lineTo(px + length, py)
        context.strokeStyle = index % 13 === 0 ? `rgba(201,101,79,${.45 + proximity * .45})` : `rgba(198,166,111,${.16 + proximity * .72})`
        context.lineWidth = index % 13 === 0 ? 1.6 : .8
        context.stroke()
        if (proximity > .35) {
          context.fillStyle = `rgba(198,166,111,${proximity})`
          context.fillRect(px - 1.5, py - 1.5, 3, 3)
        }
      })

      if (!reduced) frame = requestAnimationFrame(draw)
    }

    const observer = new ResizeObserver(resize)
    observer.observe(canvas)
    window.addEventListener('pointermove', onPointerMove, { passive: true })
    resize()
    if (!reduced) frame = requestAnimationFrame(draw)

    return () => {
      observer.disconnect()
      window.removeEventListener('pointermove', onPointerMove)
      cancelAnimationFrame(frame)
    }
  }, [])

  return <canvas ref={canvasRef} className="signal-canvas" aria-hidden="true" />
}
