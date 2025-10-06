'use client'

import React, { useEffect, useMemo, useRef, useState } from 'react'

type EyesProps = {
  className?: string
  size?: number // overall circle size in px
}

// Small circular widget with two eyes that blink and pupils follow the cursor within the circle
export default function Eyes({ className = '', size = 88 }: EyesProps) {
  const containerRef = useRef<HTMLDivElement | null>(null)
  const leftEyeRef = useRef<HTMLDivElement | null>(null)
  const rightEyeRef = useRef<HTMLDivElement | null>(null)

  // Pupils current offset positions (smoothed)
  const [leftPupil, setLeftPupil] = useState({ x: 0, y: 0 })
  const [rightPupil, setRightPupil] = useState({ x: 0, y: 0 })

  // Pupils target offset positions
  const targetRef = useRef({ left: { x: 0, y: 0 }, right: { x: 0, y: 0 } })

  // Random blink delays set after mount to avoid hydration mismatch
  const [delays, setDelays] = useState<{ left: number; right: number }>({
    left: 0,
    right: 0
  })

  const prefersReducedMotion = useMemo(() => {
    if (typeof window === 'undefined') return false
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches
  }, [])

  useEffect(() => {
    // Initialize random animation delays for natural blink desync
    // 0 - 2 seconds
    const l = Math.random() * 2
    const r = Math.random() * 2
    setDelays({ left: l, right: r })
  }, [])

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      const mx = e.clientX
      const my = e.clientY

      const computeForEye = (eyeEl: HTMLDivElement | null) => {
        if (!eyeEl) return { x: 0, y: 0 }
        const eyeRect = eyeEl.getBoundingClientRect()
        const ex = eyeRect.left + eyeRect.width / 2
        const ey = eyeRect.top + eyeRect.height / 2
        const vx = mx - ex
        const vy = my - ey

        // limit pupil travel radius inside eye white
        const eyeRadius = Math.min(eyeRect.width, eyeRect.height) / 2
        const pupilMax = Math.max(eyeRadius * 0.45 - 2, 4) // padding so it stays well inside
        const len = Math.hypot(vx, vy) || 1
        const scale = Math.min(1, pupilMax / len)
        return { x: vx * scale, y: vy * scale }
      }

      targetRef.current.left = computeForEye(leftEyeRef.current)
      targetRef.current.right = computeForEye(rightEyeRef.current)
    }

    const onLeave = () => {
      targetRef.current.left = { x: 0, y: 0 }
      targetRef.current.right = { x: 0, y: 0 }
    }

    window.addEventListener('mousemove', onMove)
    window.addEventListener('mouseleave', onLeave)
    return () => {
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('mouseleave', onLeave)
    }
  }, [])

  useEffect(() => {
    // RAF loop to smoothly move pupils toward targets
    let raf = 0
    const lerp = (a: number, b: number, t: number) => a + (b - a) * t
    const tick = () => {
      setLeftPupil(prev => ({
        x: lerp(prev.x, targetRef.current.left.x, 0.18),
        y: lerp(prev.y, targetRef.current.left.y, 0.18)
      }))
      setRightPupil(prev => ({
        x: lerp(prev.x, targetRef.current.right.x, 0.18),
        y: lerp(prev.y, targetRef.current.right.y, 0.18)
      }))
      raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [])

  // Sizing
  const faceSize = size
  const eyeSize = Math.round(faceSize * 0.32) // white area diameter
  const pupilSize = Math.round(eyeSize * 0.45)
  const gap = Math.round(faceSize * 0.12)

  return (
    <div
      ref={containerRef}
      className={`glass relative overflow-hidden rounded-full border border-white/10 shadow-soft flex items-center justify-center ${className}`}
      style={{ width: faceSize, height: faceSize }}
      aria-label="Animated eyes"
      role="img"
    >
      {/* subtle radial background to match morphic feel */}
      <div
        className="absolute inset-0 rounded-full"
        style={{
          background:
            'radial-gradient(circle at 30% 30%, rgba(255,255,255,0.06), transparent 60%)'
        }}
      />

      <div className="relative z-10 flex items-center justify-center"
        style={{ gap }}
      >
        {/* Left eye */}
        <div
          ref={leftEyeRef}
          className="relative bg-white rounded-full overflow-hidden"
          style={{ width: eyeSize, height: eyeSize }}
        >
          {/* Eyelid for blink */}
          {!prefersReducedMotion && (
            <div
              className="absolute inset-0 origin-top bg-black/90 pointer-events-none eye-blink"
              style={{ animationDelay: `${delays.left}s` }}
            />
          )}

          {/* Pupil */}
          <div
            className="absolute left-1/2 top-1/2 rounded-full bg-black"
            style={{
              width: pupilSize,
              height: pupilSize,
              transform: `translate(calc(-50% + ${leftPupil.x}px), calc(-50% + ${leftPupil.y}px))`
            }}
          />
        </div>

        {/* Right eye */}
        <div
          ref={rightEyeRef}
          className="relative bg-white rounded-full overflow-hidden"
          style={{ width: eyeSize, height: eyeSize }}
        >
          {!prefersReducedMotion && (
            <div
              className="absolute inset-0 origin-top bg-black/90 pointer-events-none eye-blink"
              style={{ animationDelay: `${delays.right}s` }}
            />
          )}
          <div
            className="absolute left-1/2 top-1/2 rounded-full bg-black"
            style={{
              width: pupilSize,
              height: pupilSize,
              transform: `translate(calc(-50% + ${rightPupil.x}px), calc(-50% + ${rightPupil.y}px))`
            }}
          />
        </div>
      </div>
    </div>
  )
}
