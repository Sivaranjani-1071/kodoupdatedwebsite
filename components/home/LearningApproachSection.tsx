// components/LearningApproachSection.tsx
'use client'

/**
 * LearningApproachSection
 * ------------------------------------------------------------------
 * Card-by-card sliding carousel — smooth, seamless, infinite.
 *
 * Behavior:
 *  - Auto-play slides ONE card at a time (every AUTO_INTERVAL_MS), with a
 *    smooth native animation.
 *  - Infinite loop: the card list is rendered twice; when the position
 *    crosses into the second copy it is silently reset back by exactly one
 *    copy's width. Content is pixel-identical, so the jump is invisible —
 *    card 6 → card 1 slides forward like any other step, never rewinds.
 *  - Manual scrolling stays fully native (touch / trackpad / wheel), with
 *    scroll-snap keeping cards aligned. Auto-play pauses on hover, during
 *    touch drags (+ momentum grace period), after wheel input, and while
 *    an arrow animation is playing — then resumes from wherever the user
 *    left the track (it reads the real position, so no yank-back).
 *  - Every slide targets an exact card boundary, so even after a free-form
 *    manual scroll the next step lands perfectly aligned.
 *  - Respects `prefers-reduced-motion` (auto-play off; arrows still work).
 * ------------------------------------------------------------------
 */

import { useCallback, useEffect, useRef } from 'react'
import Image from 'next/image'
import {
  ChevronLeft,
  ChevronRight,
  Code2,
  UserCheck,
  Target,
  Users,
  FileCheck2,
  Rocket,
} from 'lucide-react'
import { scrollToHeroForm } from '@/lib/scrollToHeroForm'

const approach = [
  {
    icon: Code2,
    image: '/three-1.png',
    heading: 'Engagements on Live Client Work',
    description:
      'Every program is structured around real project work — not simulated case studies or sample datasets.',
    accentColor: '#fb275d',
    cardStyle: { backgroundColor: '#fb275d17' },
  },
  {
    icon: UserCheck,
    image: '/three-5.png',
    heading: 'Mentorship from Corporate Leaders',
    description:
      'Mentors are working engineers who build and ship systems for clients — not full-time trainers reading from a curriculum.',
    accentColor: '#c99a02',
    cardStyle: { backgroundColor: '#ffcd0317' },
  },
  {
    icon: Target,
    image: '/three-4.png',
    heading: 'Structured Placement Outcomes',
    description:
      'Every program comes with a transparent, score-based outcome — fellows know exactly what result unlocks what opportunity.',
    accentColor: '#00ca72',
    cardStyle: { backgroundColor: '#00ca7214' },
  },
  {
    icon: Users,
    image: '/three-3.png',
    heading: 'Low Mentor-to-Fellow\nRatios',
    description:
      'A 1:8 mentor-to-fellow ratio means feedback on your code, not just your attendance.',
    accentColor: '#2563EB',
    cardStyle: { backgroundColor: '#2563EB14' },
  },
  {
    icon: FileCheck2,
    image: '/three-2.png',
    heading: 'Demonstrable, Portfolio-Ready Work',
    description:
      'Every fellow leaves with deployed, demonstrable work — not just a certificate of completion.',
    accentColor: '#7C3AED',
    cardStyle: { backgroundColor: '#7C3AED14' },
  },
  {
    icon: Rocket,
    image: '/three-6.png',
    heading: 'Curriculum Designed by Engineers',
    description:
      'The curriculum is designed and reviewed by practising engineers, updated as the technology itself changes.',
    accentColor: '#EA580C',
    cardStyle: { backgroundColor: '#EA580C14' },
  },
]

/** Time between auto-slides. */
const AUTO_INTERVAL_MS = 4000
/** Auto-play stays paused this long after any manual input (covers scroll momentum). */
const INPUT_COOLDOWN_MS = 2500
/** Covers the duration of one smooth slide animation. */
const SLIDE_COOLDOWN_MS = 800

export default function LearningApproachSection() {
  const trackRef = useRef<HTMLDivElement>(null)
  /** True while the pointer is hovering the track (desktop). */
  const hoveredRef = useRef(false)
  /** True while a touch drag is in progress. */
  const touchingRef = useRef(false)
  /** Timestamp (performance.now()) until which auto-play stays paused. */
  const pausedUntilRef = useRef(0)

  /* ------------------------------------------------------------
     Geometry helpers
     ------------------------------------------------------------ */

  /** Left offsets of every card, normalized so the first card is 0. */
  const getOffsets = (el: HTMLDivElement) => {
    const children = Array.from(el.children) as HTMLElement[]
    if (!children.length) return []
    const base = children[0].offsetLeft
    return children.map((c) => c.offsetLeft - base)
  }

  /** Width of one copy of the card list (track holds two identical copies). */
  const getHalf = (el: HTMLDivElement) => el.scrollWidth / 2

  /**
   * Silently normalize the position back into the first copy.
   * Pixel-identical content on both sides makes the jump invisible.
   * Never called mid-touch-drag (fighting a live gesture causes visible jumps).
   */
  const normalize = (el: HTMLDivElement) => {
    const half = getHalf(el)
    if (half <= 0) return
    if (el.scrollLeft >= half) el.scrollLeft -= half
    else if (el.scrollLeft < 0) el.scrollLeft += half
  }

  /**
   * Slide exactly ONE card in the given direction, landing precisely on a
   * card boundary (so even after a free-form manual scroll, the next step
   * realigns the track).
   */
  const slide = useCallback((direction: 'left' | 'right') => {
    const el = trackRef.current
    if (!el || touchingRef.current) return

    normalize(el)

    const offsets = getOffsets(el)
    if (offsets.length < 2) return
    const step = offsets[1] - offsets[0]
    const half = getHalf(el)
    const x = el.scrollLeft

    let target: number | undefined
    if (direction === 'right') {
      // Nearest card boundary strictly ahead of the current position.
      target = offsets.find((o) => o > x + 1)
    } else {
      // Nearest card boundary strictly behind. At the very left edge,
      // pre-wrap forward by one copy (invisible) so there's room to go back.
      if (x < step - 1) {
        el.scrollLeft += half
      }
      target = [...offsets].reverse().find((o) => o < el.scrollLeft - 1)
    }
    if (target === undefined) return

    // Hold auto-play while the native smooth animation plays out.
    pausedUntilRef.current = Math.max(
      pausedUntilRef.current,
      performance.now() + SLIDE_COOLDOWN_MS
    )

    el.scrollTo({ left: target, behavior: 'smooth' })
  }, [])

  /* ------------------------------------------------------------
     Auto-play: one card forward every AUTO_INTERVAL_MS.
     ------------------------------------------------------------ */
  useEffect(() => {
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reducedMotion) return

    const timer = setInterval(() => {
      if (
        hoveredRef.current ||
        touchingRef.current ||
        performance.now() < pausedUntilRef.current ||
        document.hidden
      ) {
        return
      }
      slide('right')
    }, AUTO_INTERVAL_MS)

    return () => clearInterval(timer)
  }, [slide])

  /* Pause auto-play around manual input, and re-normalize once it settles. */
  const pauseForInput = () => {
    pausedUntilRef.current = performance.now() + INPUT_COOLDOWN_MS
  }

  const handleTouchEnd = () => {
    touchingRef.current = false
    pauseForInput()
    // After the gesture (momentum may still run — cooldown covers it),
    // fold the position back into the first copy if the user crossed over.
    const el = trackRef.current
    if (el) setTimeout(() => { if (!touchingRef.current) normalize(el) }, INPUT_COOLDOWN_MS)
  }

  return (
    <section className="w-full bg-white py-12 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-10 lg:px-16 xl:px-20">

        {/* Heading */}
        <h2 className="text-center font-extrabold text-[#1A1A1A] leading-tight mb-4 sm:mb-6 text-2xl sm:text-3xl lg:text-4xl">
          Real-World Learning.
          <br />
          From Day One.
        </h2>

        {/* Paragraph */}
        <p className="text-center text-[#666666] text-sm sm:text-base leading-relaxed max-w-3xl mx-auto mb-8 sm:mb-12">
          Every fellow works on problems drawn directly from live technology projects — the same
          kind of work our engineering teams handle for clients, not textbook exercises.
        </p>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-10 lg:px-16 xl:px-20">
        {/* Carousel wrapper — arrows outside on md+, hidden on mobile */}
        <div className="relative">

          {/* Left Arrow — hidden on mobile, shown md+ */}
          <button
            onClick={() => slide('left')}
            className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 items-center justify-center w-9 h-9 rounded-full border border-gray-300 bg-white text-gray-500 hover:bg-gray-50 flex-shrink-0"
            aria-label="Scroll left"
          >
            <ChevronLeft size={18} />
          </button>

          {/*
            Scrollable track — sized so exactly 1/2/3 cards are visible.
            NOTE: no `scroll-smooth` — CSS scroll-behavior animates EVERY
            scrollLeft write, which would make the invisible wrap-around
            jump visible. Smoothness comes from scrollTo({behavior:'smooth'})
            on slides only. Scroll-snap keeps MANUAL scrolls card-aligned;
            programmatic slides target exact snap positions, so they never
            fight. The card list is rendered twice for the infinite loop.
          */}
          <div
            ref={trackRef}
            onMouseEnter={() => { hoveredRef.current = true }}
            onMouseLeave={() => { hoveredRef.current = false }}
            onTouchStart={() => { touchingRef.current = true; pauseForInput() }}
            onTouchEnd={handleTouchEnd}
            onTouchCancel={handleTouchEnd}
            onWheel={pauseForInput}
            className="flex gap-4 sm:gap-6 overflow-x-auto scrollbar-hide snap-x snap-mandatory"
            style={{ scrollbarWidth: 'none', WebkitOverflowScrolling: 'touch' }}
          >
            {[...approach, ...approach].map((item, i) => {
              const isClone = i >= approach.length
              return (
                <div
                  key={i}
                  aria-hidden={isClone}
                  style={item.cardStyle}
                  className="
                    snap-start flex-shrink-0
                    w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]
                    rounded-2xl p-5 sm:p-6
                    flex flex-col items-center text-center
                  "
                >
                  {/* Image or icon */}
                  {item.image ? (
                    <div className="w-full h-[160px] sm:h-[200px] flex items-center justify-center mb-4 sm:mb-5">
                      <Image
                        src={item.image}
                        alt={isClone ? '' : item.heading}
                        width={240}
                        height={200}
                        className="object-contain max-h-full max-w-full"
                      />
                    </div>
                  ) : (
                    <div
                      className="flex items-center justify-center w-14 h-14 rounded-full mb-4 sm:mb-5"
                      style={{ backgroundColor: item.accentColor }}
                    >
                      <item.icon size={26} color="#ffffff" strokeWidth={2} />
                    </div>
                  )}

                  {/* Heading */}
                  <h3
                    style={{ color: item.accentColor, whiteSpace: 'pre-line' }}
                    className="text-base sm:text-lg font-bold mb-2"
                  >
                    {item.heading}
                  </h3>

                  {/* Body */}
                  <p className="text-[#666666] text-xs sm:text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              )
            })}
          </div>

          {/* Right Arrow — hidden on mobile, shown md+ */}
          <button
            onClick={() => slide('right')}
            className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 items-center justify-center w-9 h-9 rounded-full border border-gray-300 bg-white text-gray-500 hover:bg-gray-50 flex-shrink-0"
            aria-label="Scroll right"
          >
            <ChevronRight size={18} />
          </button>
        </div>

        {/* Mobile arrow row — only on small screens */}
        <div className="flex justify-center gap-4 mt-6 md:hidden">
          <button
            onClick={() => slide('left')}
            className="flex items-center justify-center w-9 h-9 rounded-full border border-gray-300 text-gray-500 hover:bg-gray-50"
            aria-label="Scroll left"
          >
            <ChevronLeft size={18} />
          </button>
          <button
            onClick={() => slide('right')}
            className="flex items-center justify-center w-9 h-9 rounded-full border border-gray-300 text-gray-500 hover:bg-gray-50"
            aria-label="Scroll right"
          >
            <ChevronRight size={18} />
          </button>
        </div>

        {/* CTA Button */}
        <div className="flex justify-center mt-10 sm:mt-14">
          <button
            onClick={scrollToHeroForm}
            className="relative overflow-hidden bg-cover bg-center text-[#1A1A1A] font-bold text-base sm:text-lg px-6 sm:px-8 py-3.5 sm:py-4 rounded-2xl flex items-center gap-2 transition-transform hover:-translate-y-0.5 active:translate-y-0"
            style={{ backgroundImage: 'url(/yellowbutton.png)' }}
          >
            Explore Programs
            <ChevronRight size={20} className="sm:w-6 sm:h-6" />
          </button>
        </div>
      </div>
    </section>
  )
}
