// components/FellowshipProgramSection1.tsx
'use client'

import { useEffect, useRef, useState } from 'react'
import type { ButtonHTMLAttributes, ReactNode } from 'react'
import { Clock, CheckCircle2, ChevronRight, ArrowRight } from 'lucide-react'

// Single consistent yellow used for every primary CTA button, regardless of
// which card theme it sits on — keeps the "action" color recognizable and
// attention-grabbing across all four card backgrounds.
const CTA_YELLOW = '#FFD400'
const CTA_YELLOW_HOVER = '#FFC700'

type Program = {
  name: string
  tagline: string
  duration: string
  highlights: string[]
}

const programs: Program[] = [
  {
    name: 'AI Engineering & Machine Learning',
    tagline: 'From Zero to Production AI',
    duration: '6 Months',
    highlights: [
      '390+ hours of live instruction',
      'Build 5 deployed AI products — RAG chatbot, MLOps pipeline, and more',
      '1:8 mentor-to-student ratio',
      'Certification co-branded with ExpertsPro',
    ],
  },
  {
    name: 'Cloud Engineering & DevOps',
    tagline: 'Build the Infrastructure Every Product Runs On',
    duration: '6 Months',
    highlights: [
      'Deploy real systems on AWS and GCP — not sandboxed environments',
      'Covers CI/CD, Docker, Kubernetes, and Terraform',
      'AWS Solutions Architect exam preparation included',
    ],
  },
  {
    name: 'Full-Stack Development with AI',
    tagline: 'Ship Real Products. With AI Built In.',
    duration: '7 Months',
    highlights: [
      'Build 5+ full-stack applications including 1 AI-integrated product end-to-end',
      'Covers frontend, backend, databases, system design, and AI integration',
      'The widest job market of any program in the portfolio',
    ],
  },
  {
    name: 'Cybersecurity & Ethical Hacking',
    tagline: 'Stop Attacks Before They Happen.',
    duration: '6 Months',
    highlights: [
      'Run real penetration tests, VAPT projects, and SOC simulations',
      'CEH exam preparation material included',
      'Covers network, web app, and cloud security',
    ],
  },
]

type Theme = {
  bg: string
  accent: string
  inner: string
  innerText: string
  mutedText: string
  badgeBg: string
  badgeText: string
}

const themes: Theme[] = [
  {
    bg: '#0B3B36',
    accent: '#3DD9B3',
    inner: '#13473F',
    innerText: '#FFFFFF',
    mutedText: '#9CA3AF',
    badgeBg: '#13473F',
    badgeText: '#3DD9B3',
  },
  {
    bg: '#1B2A4A',
    accent: '#7FA6FF',
    inner: '#24345C',
    innerText: '#FFFFFF',
    mutedText: '#A7B3CC',
    badgeBg: '#24345C',
    badgeText: '#7FA6FF',
  },
  {
    bg: '#3B0B2E',
    accent: '#F6C453',
    inner: '#4E1240',
    innerText: '#FFFFFF',
    mutedText: '#D9B8CF',
    badgeBg: '#4E1240',
    badgeText: '#F6C453',
  },
  {
    bg: '#3A2411',
    accent: '#FF9F5A',
    inner: '#4A3018',
    innerText: '#FFFFFF',
    mutedText: '#D9C3AE',
    badgeBg: '#4A3018',
    badgeText: '#FF9F5A',
  },
]

// Shared button styling for every yellow CTA in this section (Learn More
// on each card, View All at the bottom) — one visual language, defined once.
function CtaButton({
  children,
  className = '',
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement> & { children: ReactNode }) {
  return (
    <button
      {...props}
      className={`group font-bold text-sm sm:text-base py-3 rounded-xl flex items-center justify-center gap-1.5 transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 ${className}`}
      style={{
        backgroundColor: CTA_YELLOW,
        color: '#1A1A1A',
        boxShadow: '0 4px 14px 0 rgba(255, 196, 0, 0.35)',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.backgroundColor = CTA_YELLOW_HOVER
        e.currentTarget.style.boxShadow = '0 6px 20px 0 rgba(255, 196, 0, 0.55)'
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.backgroundColor = CTA_YELLOW
        e.currentTarget.style.boxShadow = '0 4px 14px 0 rgba(255, 196, 0, 0.35)'
      }}
    >
      {children}
    </button>
  )
}

function FellowshipProgramCard({ program, theme }: { program: Program; theme: Theme }) {
  return (
    <div
      className="rounded-2xl sm:rounded-3xl p-5 sm:p-8 lg:p-10 flex flex-col lg:flex-row gap-6 lg:gap-8 shadow-2xl"
      style={{ backgroundColor: theme.bg }}
    >
      {/* Left: Program details */}
      <div className="flex-1 flex flex-col">
        <h3 className="font-bold text-lg sm:text-2xl mb-1" style={{ color: theme.innerText }}>
          {program.name}
        </h3>

        <p className="text-sm sm:text-base italic mb-5" style={{ color: theme.accent }}>
          {program.tagline}
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 text-left w-full">
          {program.highlights.map((item, i) => (
            <div key={i} className="flex items-start gap-2">
              <CheckCircle2 size={18} style={{ color: theme.accent }} className="flex-shrink-0 mt-0.5" />
              <p className="text-xs sm:text-sm leading-relaxed" style={{ color: theme.innerText }}>{item}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Right: Duration badge + CTA */}
      <div className="w-full lg:w-[220px] flex flex-col gap-3 flex-shrink-0 lg:justify-between">
        <div
          className="rounded-xl px-4 py-3 flex items-center gap-3"
          style={{ backgroundColor: theme.badgeBg }}
        >
          <Clock size={20} style={{ color: theme.accent }} className="flex-shrink-0" />
          <div>
            <p className="text-xs" style={{ color: theme.mutedText }}>Duration</p>
            <p className="font-bold text-sm" style={{ color: theme.badgeText }}>{program.duration}</p>
          </div>
        </div>

        <CtaButton>
          Learn More
          <ChevronRight size={18} className="transition-transform duration-200 group-hover:translate-x-1" />
        </CtaButton>
      </div>
    </div>
  )
}

// How much scroll distance (in px) each card gets before the next one
// takes over and covers it. LOWER = next card arrives sooner (fewer scrolls
// needed). A typical mouse-wheel "tick" scrolls ~100-300px, so ~500-600px
// feels like "2 scrolls and the next tab appears."
const SLOT_HEIGHT_PX = 550
// Distance from top of viewport where each card "parks" once pinned.
const PIN_TOP_PX = 90
// How quickly the visible position catches up to the real scroll position.
// Smaller = smoother/laggier (more glide, more "sag"). Larger = snappier/more
// direct. Too low makes scrolling feel heavy/unresponsive, especially when
// releasing the last card into the next section.
const SMOOTHING = 0.22
// Small fixed gap after the last card's slot, purely cosmetic breathing room
// before the View All button. This can stay small and constant now — the
// last card fully slides/shrinks/fades away within its own slot (see
// maxFade below), so unlike before, nothing needs physical scroll distance
// to "escape" the viewport. No measuring, no guessing.
const BOTTOM_BUFFER_PX = 40
// Smoothstep easing (3t² - 2t³) — the single curve used everywhere a fade
// or shrink needs to ease in/out instead of moving at a constant rate.
function smoothstep(t: number) {
  const clamped = Math.min(1, Math.max(0, t))
  return clamped * clamped * (3 - 2 * clamped)
}

export default function FellowshipProgramSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const containerTopRef = useRef(0)
  const targetScrollRef = useRef(0)
  const smoothScrollRef = useRef(0)
  const rafId = useRef<number | null>(null)

  // Position/parallax stays smoothed (this is what gives the pleasant glide).
  const [smoothedIntoStack, setSmoothedIntoStack] = useState(0)
  // Fade/scale is driven off the RAW, unsmoothed scroll value instead.
  // Reason: with a fast scroll (flick), the smoothed value can lag the real
  // scroll position by many frames. If fade depended on the lagged value,
  // the last card could still be partially opaque — and, being absolutely
  // positioned with a z-index, would visually paint OVER the next section's
  // content — for however long it takes smoothing to catch up. Using the
  // raw value for opacity means "is this card supposed to be visible right
  // now" is always answered instantly and correctly, independent of glide.
  const [rawIntoStack, setRawIntoStack] = useState(0)

  useEffect(() => {
    function measureContainerTop() {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect()
        containerTopRef.current = rect.top + window.scrollY
      }
    }

    function onScrollOrResize() {
      measureContainerTop()
      targetScrollRef.current = Math.max(
        0,
        window.scrollY - containerTopRef.current + PIN_TOP_PX
      )
    }

    function tick() {
      // Ease the displayed value toward the real scroll target every frame,
      // instead of snapping to it — this is what makes the motion feel smooth.
      smoothScrollRef.current +=
        (targetScrollRef.current - smoothScrollRef.current) * SMOOTHING

      // Snap once very close, so it doesn't glide forever.
      if (Math.abs(targetScrollRef.current - smoothScrollRef.current) < 0.5) {
        smoothScrollRef.current = targetScrollRef.current
      }

      setSmoothedIntoStack(smoothScrollRef.current)
      // No easing here on purpose — always reflects the true scroll position.
      setRawIntoStack(targetScrollRef.current)
      rafId.current = requestAnimationFrame(tick)
    }

    measureContainerTop()
    onScrollOrResize()
    window.addEventListener('scroll', onScrollOrResize, { passive: true })
    window.addEventListener('resize', onScrollOrResize)
    rafId.current = requestAnimationFrame(tick)

    return () => {
      window.removeEventListener('scroll', onScrollOrResize)
      window.removeEventListener('resize', onScrollOrResize)
      if (rafId.current != null) cancelAnimationFrame(rafId.current)
    }
  }, [])

  return (
    <section className="w-full bg-white pt-12 sm:pt-16 pb-12 sm:pb-16 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-center font-extrabold text-[#1A1A1A] leading-tight mb-4 sm:mb-6 text-2xl sm:text-3xl lg:text-4xl">
          Fellowship Programs Engineered for Tomorrow's Careers
        </h2>

        <p className="text-center text-sm sm:text-base leading-relaxed max-w-3xl mx-auto mb-8 sm:mb-12">
          <span className="text-[#999999]">
            Live mentorship, real enterprise projects, and{' '}
          </span>
          <span className="font-bold text-[#1A1A1A]">a clear placement pathway</span>
          <span className="text-[#999999]">
            {' '}— across the most in-demand technology domains in India today.
          </span>
        </p>

        {/* This container's height sets how much total scroll distance the
            whole stacking animation takes: one SLOT_HEIGHT_PX per card, plus
            a small fixed BOTTOM_BUFFER_PX. No large reserve needed anymore —
            every card, including the last, fully fades/shrinks away inside
            its own slot rather than depending on physical scroll distance
            to leave the viewport. */}
        <div ref={containerRef} style={{ position: 'relative', height: SLOT_HEIGHT_PX * programs.length + BOTTOM_BUFFER_PX }}>
          {programs.map((program, i) => {
            const theme = themes[i % themes.length]
            const slotStart = i * SLOT_HEIGHT_PX
            const isLast = i === programs.length - 1

            // How far we've (smoothly) scrolled since this card's slot began.
            // Used ONLY for position — keeps the pin/park motion buttery.
            const progressPx = smoothedIntoStack - slotStart

            // How far we've ACTUALLY scrolled since this card's slot began
            // (no easing). Used for fade/scale so hiding never lags behind
            // real scroll position.
            const rawProgressPx = rawIntoStack - slotStart

            // --- POSITION — identical for every card, no exceptions ---
            // Tracks scroll 1:1 while pinned, then freezes at the end of its
            // own slot. Same range, same cap, for every card including the
            // last one.
            const cardTop =
              progressPx <= 0
                ? slotStart
                : slotStart + Math.min(progressPx, SLOT_HEIGHT_PX - 1)

            // --- SLIDE / FADE / SHRINK — identical curve, timing, and
            // duration for every card, computed off the raw (unsmoothed)
            // scroll so it can never lag behind and get caught overlapping
            // later content. Every card — including the last — now fully
            // fades and shrinks out by the end of its own slot: the last
            // card has no next card to hand off to, so instead of a
            // physical page-scroll release it gets the same slide-away
            // exit as the others, just shrinking a touch further so it
            // reads as "leaving" rather than "being covered."
            const rawSlotProgress = Math.min(1, Math.max(0, rawProgressPx / SLOT_HEIGHT_PX))
            const FADE_START = 0.6
            const fadeProgress = smoothstep(
              (rawSlotProgress - FADE_START) / (1 - FADE_START)
            )
            const maxFade = isLast ? 1 : 0.5
            const maxShrink = isLast ? 0.14 : 0.08
            const scale = 1 - fadeProgress * maxShrink
            const opacity = 1 - fadeProgress * maxFade

            return (
              <div
                key={program.name}
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  transform: `translateY(${cardTop}px)`,
                  zIndex: i + 1,
                  willChange: 'transform',
                  // Once a card has fully faded out, keep it out of the way
                  // of clicks/hover so an invisible "Learn More" button
                  // can't sit on top of the View All CTA underneath it.
                  pointerEvents: opacity < 0.05 ? 'none' : 'auto',
                }}
              >
                <div
                  className="max-w-6xl mx-auto px-4 sm:px-6"
                  style={{
                    transform: `scale(${scale})`,
                    opacity,
                    transformOrigin: 'top center',
                  }}
                >
                  <FellowshipProgramCard program={program} theme={theme} />
                </div>
              </div>
            )
          })}
        </div>

        <div className="flex justify-center mt-4 sm:mt-6">
          <CtaButton className="px-6">
            View All 7 Fellowship Programs
            <ArrowRight size={18} className="transition-transform duration-200 group-hover:translate-x-1" />
          </CtaButton>
        </div>
      </div>
    </section>
  )
}
