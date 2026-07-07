// components/FellowshipProgramSection.tsx
'use client'

import { Lock, Calendar, GraduationCap, Briefcase, CheckCircle2, ChevronRight } from 'lucide-react'

const checklist = [
  'Project-led MERN or Backend Specialisation with Gen-AI applications.',
  'DSA and System Design curriculum with additional AI Guidance',
  'Externship with Real companies and AI-Driven Use Cases',
  'Assured placement in top dev roles',
]

const infoItems = [
  { icon: Lock, label: 'Trial Session', value: 'Free' },
  { icon: Calendar, label: 'Duration', value: '9 months' },
  { icon: GraduationCap, label: 'Scholarships', value: 'Assured Scholarships' },
  { icon: Briefcase, label: 'Career Services', value: 'Assured Referrals' },
]

/**
 * Each theme controls every colour surface in the card:
 * - bg: outer card background
 * - accent: headings / icons / OR badge background
 * - inner: the two specialisation + info boxes background
 * - innerText: body text colour inside inner boxes (kept light for contrast)
 * - ctaPrimary: filled "Apply Now" button background
 * - ctaSecondaryBorder/Text: outline "Learn More" button
 * - badgeText: text colour on the round OR badge (sits on accent bg)
 */
type Theme = {
  bg: string
  accent: string
  inner: string
  innerText: string
  mutedText: string
  ctaPrimary: string
  ctaPrimaryHover: string
  ctaPrimaryText: string
  ctaSecondaryBorder: string
  ctaSecondaryText: string
  badgeText: string
}

const themes: Theme[] = [
  // 1. Teal & Gold — the original palette
  {
    bg: '#0B3B36',
    accent: '#3DD9B3',
    inner: '#13473F',
    innerText: '#FFFFFF',
    mutedText: '#9CA3AF',
    ctaPrimary: '#FFD400',
    ctaPrimaryHover: '#FFC700',
    ctaPrimaryText: '#1A1A1A',
    ctaSecondaryBorder: '#FFFFFF',
    ctaSecondaryText: '#FFFFFF',
    badgeText: '#0B3B36',
  },
  // 2. Indigo & Coral
  {
    bg: '#1B2A4A',
    accent: '#7FA6FF',
    inner: '#24345C',
    innerText: '#FFFFFF',
    mutedText: '#A7B3CC',
    ctaPrimary: '#FF7A59',
    ctaPrimaryHover: '#FF6440',
    ctaPrimaryText: '#1A1A1A',
    ctaSecondaryBorder: '#FFFFFF',
    ctaSecondaryText: '#FFFFFF',
    badgeText: '#1B2A4A',
  },
  // 3. Plum & Citrus
  {
    bg: '#3B0B2E',
    accent: '#F6C453',
    inner: '#4E1240',
    innerText: '#FFFFFF',
    mutedText: '#D9B8CF',
    ctaPrimary: '#2EC4B6',
    ctaPrimaryHover: '#23A89C',
    ctaPrimaryText: '#1A1A1A',
    ctaSecondaryBorder: '#FFFFFF',
    ctaSecondaryText: '#FFFFFF',
    badgeText: '#3B0B2E',
  },
]

function FellowshipProgramCard({ theme }: { theme: Theme }) {
  return (
    <div
      className="rounded-2xl sm:rounded-3xl p-5 sm:p-8 lg:p-10 flex flex-col lg:flex-row gap-6 lg:gap-8"
      style={{ backgroundColor: theme.bg }}
    >
      {/* Left: Program details */}
      <div className="flex-1 flex flex-col items-center text-center">

        {/* Title */}
        <h3 className="font-bold text-lg sm:text-xl mb-3" style={{ color: theme.accent }}>
          Fellowship Programs Engineered For Tomorrow's Careers 
        </h3>

        {/* Description */}
        <p className="text-xs sm:text-sm leading-relaxed max-w-xl mb-6" style={{ color: theme.mutedText }}>
          Learn with real work experience and get guaranteed placement as a Full-Stack or
          Backend Developer at top product-based companies—now with cutting-edge GenAI skills!
        </p>

        {/* Checklist */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 text-left w-full mb-6">
          {checklist.map((item, i) => (
            <div key={i} className="flex items-start gap-2">
              <CheckCircle2 size={18} style={{ color: theme.accent }} className="flex-shrink-0 mt-0.5" />
              <p className="text-xs sm:text-sm leading-relaxed" style={{ color: theme.innerText }}>{item}</p>
            </div>
          ))}
        </div>

        {/* Specialisation cards */}
        <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-2 w-full relative">
          <div className="flex-1 rounded-xl p-4 sm:p-5 text-left w-full" style={{ backgroundColor: theme.inner }}>
            <p className="font-bold text-sm sm:text-base mb-2" style={{ color: theme.accent }}>
              Full Stack Specialisation
            </p>
            <p className="text-xs sm:text-sm leading-relaxed mb-2" style={{ color: theme.innerText }}>
              7 Professional Projects integrating Gen-AI skills and applications for
              hands-on real-world experience
            </p>
            <p className="text-xs" style={{ color: theme.mutedText }}>
              (MongoDB, Express, React, NodeJS)
            </p>
          </div>

          {/* OR badge */}
          <div
            className="flex items-center justify-center w-8 h-8 rounded-full text-xs font-bold flex-shrink-0 sm:-mx-4 z-10"
            style={{ backgroundColor: theme.accent, color: theme.badgeText }}
          >
            OR
          </div>

          <div className="flex-1 rounded-xl p-4 sm:p-5 text-left w-full" style={{ backgroundColor: theme.inner }}>
            <p className="font-bold text-sm sm:text-base mb-2" style={{ color: theme.accent }}>
              Backend Specialisation
            </p>
            <p className="text-xs sm:text-sm leading-relaxed mb-2" style={{ color: theme.innerText }}>
              5 Professional Projects integrating Gen-AI skills and applications for
              hands-on real-world experience
            </p>
            <p className="text-xs" style={{ color: theme.mutedText }}>
              (Core Java and Spring Boot)
            </p>
          </div>
        </div>
      </div>

      {/* Right: Info + CTAs */}
      <div className="w-full lg:w-[280px] flex flex-col gap-3 flex-shrink-0">
        {infoItems.map((info, i) => {
          const Icon = info.icon
          return (
            <div
              key={i}
              className="rounded-xl px-4 py-3 flex items-center gap-3"
              style={{ backgroundColor: theme.inner }}
            >
              <Icon size={20} style={{ color: theme.mutedText }} className="flex-shrink-0" />
              <div>
                <p className="text-xs" style={{ color: theme.accent }}>{info.label}</p>
                <p className="font-bold text-sm" style={{ color: theme.innerText }}>{info.value}</p>
              </div>
            </div>
          )
        })}

        {/* Buttons */}
        <button
          className="font-bold text-sm sm:text-base py-3 rounded-xl flex items-center justify-center gap-1 transition-colors mt-2 border"
          style={{ borderColor: theme.ctaSecondaryBorder, color: theme.ctaSecondaryText }}
        >
          Learn More
          <ChevronRight size={18} />
        </button>

        <button
          className="font-bold text-sm sm:text-base py-3 rounded-xl flex items-center justify-center gap-1 transition-colors"
          style={{ backgroundColor: theme.ctaPrimary, color: theme.ctaPrimaryText }}
          onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = theme.ctaPrimaryHover)}
          onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = theme.ctaPrimary)}
        >
          Apply Now
          <ChevronRight size={18} />
        </button>
      </div>

    </div>
  )
}

export default function FellowshipProgramSection() {
  return (
    <section className="w-full bg-white py-12 sm:py-16 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <h2 className="text-center font-extrabold text-[#1A1A1A] leading-tight mb-4 sm:mb-6 text-2xl sm:text-3xl lg:text-4xl">
Fellowship Programs Engineered For Tomorrow's Careers         </h2>

        {/* Paragraph */}
        <p className="text-center text-sm sm:text-base leading-relaxed max-w-3xl mx-auto mb-8 sm:mb-12">
          <span className="text-[#999999]">programs across AI, Data Science, Cybersecurity, ServiceNow, Cloud, Full-Stack, and Generative AI, each built on  </span>
          <span className="font-bold text-[#1A1A1A]">real projects, live mentorship, and a clear placement pathway.</span>{' '}
        
        </p>

        {/* Three cards, each with its own colour theme */}
        <div className="flex flex-col gap-6 sm:gap-8">
          {themes.map((theme, i) => (
            <FellowshipProgramCard key={i} theme={theme} />
          ))}
        </div>

      </div>
    </section>
  )
}
