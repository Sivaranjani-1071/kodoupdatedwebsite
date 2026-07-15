"use client"

// components/AllRoundCareerSection.tsx
import { ArrowUpRight, GraduationCap, Briefcase, School, Building2 } from 'lucide-react'
import Link from 'next/link'
import { scrollToHeroForm } from '@/lib/scrollToHeroForm'

const tiles = [
  {
    icon: GraduationCap,
    heading: 'Students',
    body: 'Start your career with real project experience before you graduate. Pick a fellowship aligned to where the roles are actually opening up.',
    linkLabel: 'Explore Fellowship Programs',
    accentColor: '#E11D48',
    iconBg: '#E11D4814',
  },
  {
    icon: Briefcase,
    heading: 'Working Professionals',
    body: 'Move into AI, Cloud, Data, or Cybersecurity on a schedule that works around your current job — not instead of it.',
    linkLabel: 'Explore Fellowship Programs',
    accentColor: '#2563EB',
    iconBg: '#2563EB14',
  },
  {
    icon: School,
    heading: 'Colleges & Institutions',
    body: 'Bring industry-relevant training and placement support to your campus through Kodo Campus Connect.',
    linkLabel: 'Learn About Campus Connect',
    accentColor: '#00ca72',
    iconBg: '#00ca7214',
  },
  {
    icon: Building2,
    heading: 'Companies & Recruiters',
    body: "Upskill your existing team, or hire fellows who've already worked on real project deliverables — at zero placement fee.",
    linkLabel: 'Learn About Corporate & Hiring Programs',
    accentColor: '#C99A02',
    iconBg: '#FFCD0317',
  },
]

function Tile({
  icon: Icon,
  heading,
  body,
  linkLabel,
  accentColor,
  iconBg,
}: {
  icon: typeof GraduationCap
  heading: string
  body: string
  linkLabel: string
  accentColor: string
  iconBg: string
}) {
  return (
    <div className="flex flex-col rounded-3xl border border-[#E5E5E5] bg-white p-5">
      <div
        className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl"
        style={{ backgroundColor: iconBg }}
      >
        <Icon size={22} style={{ color: accentColor }} strokeWidth={2} />
      </div>
      <h3 className="mb-2 text-base font-bold leading-snug text-[#1A1A1A]">
        {heading}
      </h3>
      <p className="flex-1 text-sm leading-relaxed text-[#666666]">
        {body}
      </p>
      <Link
        href="/#hero-form"
        onClick={(e) => { e.preventDefault(); scrollToHeroForm() }}
        className="mt-4 inline-flex items-center gap-1 text-xs font-semibold transition-colors"
        style={{ color: accentColor }}
      >
        {linkLabel}
        <ArrowUpRight size={13} strokeWidth={2.5} />
      </Link>
    </div>
  )
}

export default function AllRoundCareerSection() {
  return (
    <section className="w-full bg-white px-4 py-6 sm:px-6 sm:py-8 md:px-10 md:py-12 lg:px-16 lg:py-16 xl:px-20">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 lg:grid-cols-[2fr_3fr] lg:items-start lg:gap-16">

        {/* Left: eyebrow + heading + supporting text + CTA */}
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#1A1A1A]">
            Who It&apos;s For
          </p>
          <h2 className="mt-3 text-3xl font-extrabold leading-[1.05] tracking-tight text-[#1A1A1A] sm:text-4xl">
            Built for Everyone
            <br />
            Ready to Build
          </h2>
          <p className="mt-5 text-sm leading-relaxed text-[#666666] sm:text-base">
            For students, professionals, colleges, and companies — every path starts here.
          </p>
          <Link
            href="/#hero-form"
            onClick={(e) => { e.preventDefault(); scrollToHeroForm() }}
            className="mt-7 inline-flex items-center gap-1.5 rounded-2xl bg-cover bg-center px-6 py-3.5 text-base font-bold text-[#1A1A1A] transition-transform hover:-translate-y-0.5 active:translate-y-0"
            style={{ backgroundImage: 'url(/yellowbutton.png)' }}
          >
            Find Your Path
            <ArrowUpRight size={18} strokeWidth={2.5} />
          </Link>
        </div>

        {/* Right: 2x2 feature-card grid */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          {tiles.map((tile) => (
            <Tile key={tile.heading} {...tile} />
          ))}
        </div>

      </div>
    </section>
  )
}
