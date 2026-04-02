import { useCallback, useEffect, useState } from 'react'
import { SLIDES } from './slides'

const TOTAL = SLIDES.length

export default function App() {
  const [current, setCurrent] = useState(0)

  const goTo = useCallback((n: number) => {
    setCurrent(Math.max(0, Math.min(TOTAL - 1, n)))
  }, [])

  const go = useCallback(
    (dir: number) => {
      goTo(current + dir)
    },
    [current, goTo],
  )

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === 'ArrowDown' || e.key === ' ' || e.key === 'd' || e.key === 's') {
        e.preventDefault()
        go(1)
      }
      if (e.key === 'ArrowLeft' || e.key === 'ArrowUp' || e.key === 'a' || e.key === 'w') {
        e.preventDefault()
        go(-1)
      }
      if (e.key === 'f' || e.key === 'F') {
        document.documentElement.requestFullscreen?.()
      }
      if (e.key === 'Home') goTo(0)
      if (e.key === 'End') goTo(TOTAL - 1)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [go, goTo])

  useEffect(() => {
    document.body.tabIndex = 0
    const focus = () => document.body.focus()
    focus()
    const onBlur = () => setTimeout(focus, 0)
    document.body.addEventListener('blur', onBlur)
    return () => document.body.removeEventListener('blur', onBlur)
  }, [])

  const counter = `${String(current + 1).padStart(2, '0')} / ${String(TOTAL).padStart(2, '0')}`

  return (
    <div className="flex h-full w-full flex-col bg-[#0a0f1a] font-body text-white">
      <div className="relative min-h-0 flex-1">
        {SLIDES.map((Slide, i) => (
          <div
            key={i}
            className={i === current ? 'absolute inset-0 block' : 'hidden'}
            aria-hidden={i !== current}
          >
            <Slide />
          </div>
        ))}
      </div>

      <p className="pointer-events-none fixed right-4 top-4 z-[9999] text-[0.65rem] tracking-wide text-white/25">
        ← → / WASD · F fullscreen
      </p>

      <nav
        className="fixed bottom-6 left-1/2 z-[9999] flex -translate-x-1/2 select-none items-center gap-4 rounded-full border border-white/10 bg-black/60 px-5 py-2.5 backdrop-blur-md"
        aria-label="Slide navigation"
      >
        <button
          type="button"
          className="rounded-full px-3 py-1.5 text-lg text-white/80 transition hover:bg-white/12 hover:text-white disabled:cursor-default disabled:opacity-25"
          onClick={() => go(-1)}
          disabled={current === 0}
          title="Previous slide"
        >
          ←
        </button>
        <div className="flex items-center gap-1.5">
          {Array.from({ length: TOTAL }, (_, i) => (
            <button
              key={i}
              type="button"
              className={`h-1.5 w-1.5 rounded-full transition ${i === current ? 'scale-125 bg-secondary' : 'bg-white/20 hover:bg-white/40'}`}
              onClick={() => goTo(i)}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
        <span className="min-w-[5rem] text-center text-[0.72rem] font-semibold uppercase tracking-widest text-white/55">
          {counter}
        </span>
        <button
          type="button"
          className="rounded-full px-3 py-1.5 text-lg text-white/80 transition hover:bg-white/12 hover:text-white disabled:cursor-default disabled:opacity-25"
          onClick={() => go(1)}
          disabled={current === TOTAL - 1}
          title="Next slide"
        >
          →
        </button>
      </nav>
    </div>
  )
}
