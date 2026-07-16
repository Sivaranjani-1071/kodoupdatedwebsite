// components/FellowshipProgramSection1.tsx
'use client'

import { useEffect, useMemo, useRef, useState } from 'react'
import Link from 'next/link'
import type { AnchorHTMLAttributes, ReactNode } from 'react'
import { scrollToHeroForm } from '@/lib/scrollToHeroForm'
import {
  CheckCircle2,
  ChevronRight,
  ArrowRight,
  Sparkles,
  Cloud,
  Code2,
  ShieldCheck,
  BarChart3,
  Wand,
  Network,
  Calendar,
  IndianRupee,
  Briefcase,
  type LucideIcon,
} from 'lucide-react'

// Single consistent yellow used for every primary CTA button, regardless of
// which card theme it sits on — keeps the "action" color recognizable and
// attention-grabbing across all four card backgrounds.
const CTA_YELLOW = '#FFD400'
const CTA_YELLOW_HOVER = '#FFC700'

type Program = {
  icon: LucideIcon
  name: string
  tagline: string
  duration: string
  highlights: string[]
  idealFor: string
  href: string
  salaryRange: string
  targetRoles: string
}

const programs: Program[] = [
  {
    icon: Sparkles,
    name: 'AI Engineering & Machine Learning',
    tagline: 'From Zero to Production AI',
    duration: '6 Months',
    highlights: [
      '390+ hours of live instruction across 5 structured phases',
      'Build 5 deployed AI products, including a RAG chatbot and a full MLOps pipeline',
      '1:8 mentor-to-fellow ratio throughout the program',
      'Portfolio-ready projects reviewed by practising engineers',
    ],
    idealFor: 'Fresh graduates and professionals moving into AI/ML roles',
    href: '/courses/ai-engineering-ml',
    salaryRange: '₹6 LPA – ₹24 LPA',
    targetRoles: 'AI Engineer, ML Engineer, Data Scientist',
  },
  {
    icon: Cloud,
    name: 'Cloud Engineering & DevOps',
    tagline: 'Build the Infrastructure Every Product Runs On',
    duration: '6 Months',
    highlights: [
      'Deploy real systems on AWS and GCP — not sandboxed practice environments',
      'Hands-on with CI/CD, Docker, Kubernetes, and Terraform',
      'AWS Solutions Architect exam preparation included',
      'Capstone project deployed on live cloud infrastructure',
    ],
    idealFor: 'Professionals targeting Cloud, DevOps, or SRE roles',
    href: '/courses/cloud-devops',
    salaryRange: '₹8 LPA – ₹28 LPA',
    targetRoles: 'Cloud Engineer, DevOps Engineer, SRE',
  },
  {
    icon: Code2,
    name: 'Full-Stack Development with AI',
    tagline: 'Ship Real Products. With AI Built In.',
    duration: '7 Months',
    highlights: [
      'Build 5+ full-stack applications, including one AI-integrated product end-to-end',
      'Covers frontend, backend, databases, and system design',
      'The widest hiring demand of any program in the portfolio',
      'Direct mentorship from full-stack engineers, not course instructors',
    ],
    idealFor: 'Anyone targeting the highest-volume tech hiring market',
    href: '/courses/full-stack-development',
    salaryRange: '₹5 LPA – ₹20 LPA',
    targetRoles: 'Full-Stack Developer, Product Engineer',
  },
  {
    icon: ShieldCheck,
    name: 'Cybersecurity & Ethical Hacking',
    tagline: 'Stop Attacks Before They Happen.',
    duration: '6 Months',
    highlights: [
      'Run real penetration tests, VAPT projects, and SOC simulations',
      'CEH exam preparation material included',
      'Covers network, web application, and cloud security',
      'Hands-on labs modeled on live-fire attack scenarios',
    ],
    idealFor: 'Professionals moving into security analyst or SOC roles',
    href: '/courses/cybersecurity',
    salaryRange: '₹5 LPA – ₹25 LPA',
    targetRoles: 'SOC Analyst, Penetration Tester, Security Engineer',
  },
  {
    icon: BarChart3,
    name: 'NextGen Data Science & Analytics',
    tagline: 'Own the Data. Tell the Story.',
    duration: '6 Months',
    highlights: [
      'Master SQL, Python, Tableau, Power BI, and Machine Learning in one program',
      'Build 6 real-world projects, including BI dashboards and predictive models',
      'Designed for both technical and non-technical backgrounds',
      'Covers statistics, EDA, feature engineering, and model deployment',
    ],
    idealFor: 'Analysts, graduates, and non-tech professionals moving into data roles',
    href: '/courses/data-science',
    salaryRange: '₹5 LPA – ₹18 LPA',
    targetRoles: 'Data Analyst, Business Analyst, BI Developer',
  },
  {
    icon: Wand,
    name: 'Generative AI for Professionals',
    tagline: 'From Prompt Engineering to Applied GenAI',
    duration: '9 Months',
    highlights: [
      'Progress from prompt engineering fundamentals to applied Generative AI systems',
      'Build real GenAI-powered products using LLMs, RAG, and agentic workflows',
      'Designed for working professionals upskilling alongside their current job',
      'Expert career guidance to transition into in-demand GenAI roles',
    ],
    idealFor: 'Working professionals looking to upskill into GenAI-focused roles',
    href: '/courses/generative-ai',
    salaryRange: '₹4 LPA – ₹24 LPA',
    targetRoles: 'Marketing Professional, Finance Professional, Operations Professional, Management Professional',
  },
  {
    icon: Network,
    name: 'ServiceNow & Enterprise Platform Engineering',
    tagline: 'From Platform Configuration to Enterprise Development',
    duration: '9 Months',
    highlights: [
      'Progress from ServiceNow platform configuration to enterprise-grade development',
      'Hands-on with ITSM, ITOM, and custom application development on ServiceNow',
      'Build real enterprise workflow automation projects',
      'Expert career guidance to land in-demand ITSM and platform engineering roles',
    ],
    idealFor: 'Professionals targeting ServiceNow development or enterprise ITSM roles',
    href: '/courses/servicenow-platform',
    salaryRange: '₹6 LPA – ₹18 LPA',
    targetRoles: 'ServiceNow Developer, ITSM Consultant, Platform Engineer',
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
  {
    bg: '#241B4A',
    accent: '#A78BFA',
    inner: '#2E2461',
    innerText: '#FFFFFF',
    mutedText: '#C4B5F0',
    badgeBg: '#2E2461',
    badgeText: '#A78BFA',
  },
  {
    bg: '#0E3A4A',
    accent: '#38BDF8',
    inner: '#124A5E',
    innerText: '#FFFFFF',
    mutedText: '#A9D6E5',
    badgeBg: '#124A5E',
    badgeText: '#38BDF8',
  },
  {
    bg: '#6E1313',
    accent: '#FB7185',
    inner: '#7C2323',
    innerText: '#FFFFFF',
    mutedText: '#E8B9B9',
    badgeBg: '#7C2323',
    badgeText: '#FB7185',
  },
]

// Shared button styling for every yellow CTA in this section (Learn More
// on each card, View All at the bottom) — one visual language, defined once.
function CtaButton({
  href,
  children,
  className = '',
  ...props
}: AnchorHTMLAttributes<HTMLAnchorElement> & { href: string; children: ReactNode }) {
  return (
    <Link
      {...props}
      href={href}
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
    </Link>
  )
}

function StatRow({
  icon: Icon,
  label,
  value,
  theme,
}: {
  icon: LucideIcon
  label: string
  value: string
  theme: Theme
}) {
  return (
    <div
      className="rounded-xl px-4 py-3 flex items-center gap-3"
      style={{ backgroundColor: theme.badgeBg }}
    >
      <Icon size={20} style={{ color: theme.mutedText }} className="flex-shrink-0" />
      <div className="min-w-0">
        <p className="text-xs" style={{ color: theme.mutedText }}>{label}</p>
        <p className="font-bold text-sm" style={{ color: theme.innerText }}>{value}</p>
      </div>
    </div>
  )
}

// Outlined "Learn More" pill — the secondary action next to the solid
// yellow "Apply Now", matching the reference's two-button sidebar.
function OutlineButton({
  href,
  children,
  className = '',
  theme,
  ...props
}: AnchorHTMLAttributes<HTMLAnchorElement> & { href: string; children: ReactNode; theme: Theme }) {
  return (
    <Link
      {...props}
      href={href}
      className={`group font-bold text-sm sm:text-base py-3 rounded-xl flex items-center justify-center gap-1.5 border transition-colors duration-200 ${className}`}
      style={{ borderColor: 'rgba(255,255,255,0.4)', color: theme.innerText }}
    >
      {children}
    </Link>
  )
}

function FellowshipProgramCard({ program, theme }: { program: Program; theme: Theme }) {
  const Icon = program.icon
  return (
    <div
      className="rounded-2xl sm:rounded-3xl p-5 sm:p-8 lg:p-10 flex flex-col lg:flex-row gap-6 lg:gap-10 shadow-2xl"
      style={{ backgroundColor: theme.bg }}
    >
      {/* Left: icon + name + tagline + checklist */}
      <div className="flex-1 flex flex-col items-center text-center">
        <div
          className="w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mb-4"
          style={{ backgroundColor: theme.badgeBg }}
        >
          <Icon size={28} style={{ color: theme.accent }} />
        </div>
        <h3 className="font-bold text-lg sm:text-2xl mb-2" style={{ color: theme.accent }}>
          {program.name}
        </h3>
        <p className="text-sm sm:text-base max-w-xl mb-1" style={{ color: theme.innerText, opacity: 0.85 }}>
          {program.tagline}
        </p>
        <p className="text-xs sm:text-sm max-w-xl mb-6" style={{ color: theme.mutedText }}>
          Ideal for: {program.idealFor}
        </p>

        {/* Highlights panel */}
        <div
          className="w-full rounded-2xl p-5 sm:p-6 grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 text-left"
          style={{ backgroundColor: theme.inner }}
        >
          {program.highlights.map((item, i) => (
            <div key={i} className="flex items-start gap-2">
              <CheckCircle2 size={18} style={{ color: theme.accent }} className="flex-shrink-0 mt-0.5" />
              <p className="text-xs sm:text-sm leading-relaxed" style={{ color: theme.innerText }}>{item}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Right: sidebar stats + buttons */}
      <div className="w-full lg:w-[260px] flex flex-col gap-3 flex-shrink-0">
        <StatRow icon={Calendar} label="Duration" value={program.duration} theme={theme} />
        <StatRow icon={IndianRupee} label="Salary Range" value={program.salaryRange} theme={theme} />
        <StatRow icon={Briefcase} label="Target Roles" value={program.targetRoles} theme={theme} />

        <OutlineButton
          theme={theme}
          href={program.href}
          className="mt-1"
        >
          View Program
          <ChevronRight size={18} className="transition-transform duration-200 group-hover:translate-x-1" />
        </OutlineButton>

        <CtaButton
          href="/booknow"
        >
          Contact Us
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
// Extra breathing room added on top of the last card's own measured height
// for its "escape" distance (see the trailingBufferPx comment below).
const LAST_CARD_ESCAPE_MARGIN_PX = 40
// Smoothstep easing (3t² - 2t³) — the single curve used everywhere a fade
// or shrink needs to ease in/out instead of moving at a constant rate.
function smoothstep(t: number) {
  const clamped = Math.min(1, Math.max(0, t))
  return clamped * clamped * (3 - 2 * clamped)
}

export default function FellowshipProgramSection() {
  // Some users find the pinned scroll-jacking animation disorienting and
  // just want to see every program at once without "spending" scroll
  // distance per card. This toggle switches to a plain static stacked list
  // (normal document flow, no pin/cover/fade) while leaving the default
  // scroll-driven experience untouched.
  const [staticView, setStaticView] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const containerTopRef = useRef(0)
  const targetScrollRef = useRef(0)
  const smoothScrollRef = useRef(0)
  const rafId = useRef<number | null>(null)

  // Each card's real rendered height (they vary — content length, viewport
  // width/wrapping both affect it — so a fixed guess always drifts from
  // reality and causes overlap once a card is taller than its slot budget).
  // Measured from the actual DOM after mount/resize instead of assumed.
  const cardCount = programs.length
  const cardRefs = useRef<(HTMLDivElement | null)[]>([])
  const [slotHeights, setSlotHeights] = useState<number[]>(
    () => Array(cardCount).fill(SLOT_HEIGHT_PX)
  )

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

  // Measure each card's real height (content length + responsive wrapping
  // both affect it) so its slot's scroll budget always matches what's
  // actually on screen — no more guessing a single constant.
  useEffect(() => {
    function measureCards() {
      setSlotHeights(
        cardRefs.current
          .slice(0, cardCount)
          .map((el) => (el ? el.offsetHeight : SLOT_HEIGHT_PX))
      )
    }
    measureCards()
    window.addEventListener('resize', measureCards)
    return () => window.removeEventListener('resize', measureCards)
  }, [cardCount])

  // Cumulative start offset of each card's slot, derived from the measured
  // heights instead of `i * SLOT_HEIGHT_PX`.
  const slotStarts = useMemo(() => {
    const starts: number[] = []
    let acc = 0
    for (const h of slotHeights) {
      starts.push(acc)
      acc += h
    }
    return starts
  }, [slotHeights])
  const totalStackHeight = slotHeights.reduce((a, b) => a + b, 0)
  // The last card has nothing covering it, so instead of fading it out (see
  // below) it needs genuine scroll distance to actually clear the viewport:
  // its own measured height, so that by the time the container ends, its
  // capped/frozen position has scrolled fully off the top of the screen.
  const lastCardHeight = slotHeights[slotHeights.length - 1] ?? SLOT_HEIGHT_PX
  const trailingBufferPx = lastCardHeight + LAST_CARD_ESCAPE_MARGIN_PX

  return (
    <section className="w-full bg-white py-12 px-4 sm:px-6 md:px-10 lg:px-16 xl:px-20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-center font-extrabold text-[#1A1A1A] leading-tight mb-4 sm:mb-6 text-2xl sm:text-3xl lg:text-4xl">
          Fellowship Programs Engineered for Tomorrow's Careers
        </h2>

        <p className="text-center text-sm sm:text-base leading-relaxed max-w-3xl mx-auto mb-8 sm:mb-12">
          <span className="text-[#999999]">
            Live mentorship, real project work, and{' '}
          </span>
          <span className="font-bold text-[#1A1A1A]">a clear placement pathway</span>
          <span className="text-[#999999]">
            {' '}— across the technology domains hiring the most right now.
          </span>
        </p>

        {/* Mobile: plain static list, first 5 programs only, no toggle and
            no pin/scroll animation — simplest, most reliable experience on
            small screens. */}
        <div className="flex flex-col gap-8 sm:gap-10 md:hidden">
          {programs.slice(0, 5).map((program, i) => {
            const theme = themes[i % themes.length]
            return (
              <div key={program.name} className="px-4 sm:px-6">
                <FellowshipProgramCard program={program} theme={theme} />
              </div>
            )
          })}
        </div>

        {/* md and up: toggle between the pinned scroll animation and the
            static list, showing every program. */}
        <div className="hidden md:block">

        {/* Toggle between the default pinned scroll animation and a plain
            static list showing every program at once, for users who'd
            rather not scroll through the animated stack. Segmented
            pill-tab control — picking a view mode, not flipping a switch. */}
        <div className="flex justify-center mb-8 sm:mb-12">
          <div
            role="tablist"
            aria-label="Choose how to view the fellowship programs"
            className="inline-flex items-center gap-1 rounded-full p-1"
            style={{ backgroundColor: '#F1F1EF' }}
          >
            <button
              type="button"
              role="tab"
              aria-selected={!staticView}
              onClick={() => setStaticView(false)}
              className="rounded-full px-4 sm:px-5 py-2 text-xs sm:text-sm font-semibold transition-all duration-200"
              style={{
                backgroundColor: !staticView ? '#1A1A1A' : 'transparent',
                color: !staticView ? '#FFFFFF' : '#666666',
              }}
            >
              Scroll View
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={staticView}
              onClick={() => setStaticView(true)}
              className="rounded-full px-4 sm:px-5 py-2 text-xs sm:text-sm font-semibold transition-all duration-200"
              style={{
                backgroundColor: staticView ? '#1A1A1A' : 'transparent',
                color: staticView ? '#FFFFFF' : '#666666',
              }}
            >
              Static View
            </button>
          </div>
        </div>

        {/* Static view: every program rendered in plain document flow, no
            pin/cover/fade — just a normal scrollable list for people who
            don't want the scroll-jacked animation. */}
        {staticView && (
          <div className="flex flex-col gap-8 sm:gap-10">
            {programs.map((program, i) => {
              const theme = themes[i % themes.length]
              return (
                <div key={program.name} className="max-w-6xl mx-auto px-4 sm:px-6">
                  <FellowshipProgramCard program={program} theme={theme} />
                </div>
              )
            })}
          </div>
        )}

        {/* Every card uses the pin/stack animation — each gets covered by
            the next one sliding in on top of it. The last card has nothing
            to cover it, so it does NOT fade/shrink at all (a fade there
            previously left it visibly semi-transparent, overlapping the
            "View All" button and the next section while mid-transition).
            Instead it gets real trailing scroll distance — its own measured
            height — so it fully scrolls off the top of the screen the
            normal way before the container ends. */}
        {!staticView && (
        <div
          ref={containerRef}
          style={{ position: 'relative', height: totalStackHeight + trailingBufferPx }}
        >
          {programs.map((program, i) => {
            const theme = themes[i % themes.length]
            const isLast = i === cardCount - 1
            const slotStart = slotStarts[i] ?? i * SLOT_HEIGHT_PX
            const slotHeight = slotHeights[i] ?? SLOT_HEIGHT_PX

            // How far we've (smoothly) scrolled since this card's slot began.
            // Used ONLY for position — keeps the pin/park motion buttery.
            const progressPx = smoothedIntoStack - slotStart

            // How far we've ACTUALLY scrolled since this card's slot began
            // (no easing). Used for fade/scale so hiding never lags behind
            // real scroll position.
            const rawProgressPx = rawIntoStack - slotStart

            // --- POSITION — tracks scroll 1:1 while pinned, then freezes
            // at the end of its own slot (which now matches its real
            // height). For the last card, the container reserves an extra
            // `lastCardHeight` worth of scroll (trailingBufferPx) after
            // this freeze point, so it has room to visually scroll fully
            // off-screen before the container — and page — run out.
            const cardTop =
              progressPx <= 0
                ? slotStart
                : slotStart + Math.min(progressPx, slotHeight - 1)

            // --- SLIDE / FADE / SHRINK — every other card fades/shrinks a
            // touch as the next one covers it. The last card stays fully
            // opaque and full-size throughout — no cover, no fade, just a
            // normal scroll-away once its slot ends.
            const rawSlotProgress = Math.min(1, Math.max(0, rawProgressPx / slotHeight))
            const FADE_START = 0.6
            const fadeProgress = smoothstep(
              (rawSlotProgress - FADE_START) / (1 - FADE_START)
            )
            const maxFade = isLast ? 0 : 0.5
            const maxShrink = isLast ? 0 : 0.08
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
                  // can't sit on top of the card covering it.
                  pointerEvents: opacity < 0.05 ? 'none' : 'auto',
                }}
              >
                <div
                  ref={(el) => { cardRefs.current[i] = el }}
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
        )}

        </div>

        <div className="flex justify-center mt-8 sm:mt-10">
          <button
            type="button"
            onClick={scrollToHeroForm}
            className="group bg-cover bg-center text-[#1A1A1A] font-bold text-base sm:text-lg px-6 sm:px-8 py-3.5 sm:py-4 rounded-2xl flex items-center gap-2 transition-transform hover:-translate-y-0.5 active:translate-y-0"
            style={{ backgroundImage: 'url(/yellowbutton.png)' }}
          >
            View All 7 Fellowship Programs
            <ArrowRight size={18} className="transition-transform duration-200 group-hover:translate-x-1" />
          </button>
        </div>
      </div>
    </section>
  )
}
