"use client"

// components/AllRoundCareerSection.tsx
import { ChevronRight } from 'lucide-react'
import Link from 'next/link'

const personalTiles = [
  {
    heading: 'Students',
    body: 'Start your career with real enterprise skills before you graduate. Choose a fellowship program aligned to where the jobs are going.',
    linkLabel: 'Explore Fellowship Programs',
    href: '/fellowship-programs',
  },
  {
    heading: 'Working Professionals',
    body: 'Upskill or switch careers into AI, Cloud, Data, or Cybersecurity — structured around your schedule, without quitting your job.',
    linkLabel: 'Explore Fellowship Programs',
    href: '/fellowship-programs',
  },
]

const organisationTiles = [
  {
    heading: 'Colleges & Institutions',
    body: 'Bring industry-aligned training and placement support to your campus through Kodo Campus Connect — co-branded with ExpertsPro.',
    linkLabel: 'Learn About Campus Connect',
    href: '/campus-connect',
  },
  {
    heading: 'Companies & Recruiters',
    body: 'Upskill your existing team or hire pre-vetted, enterprise-trained KodoWorks fellows. Zero placement fee for recruiters.',
    linkLabel: 'Learn About Corporate & Hiring Programs',
    href: '/corporate-hiring',
  },
]

function Tile({
  heading,
  body,
  linkLabel,
  href,
}: {
  heading: string
  body: string
  linkLabel: string
  href: string
}) {
  return (
    <div className="bg-[#EFF8F4] rounded-2xl p-5 sm:p-6 flex flex-col">
      <h3 className="font-bold text-[#1A1A1A] text-sm sm:text-base leading-snug mb-2 sm:mb-3">
        {heading}
      </h3>
      <p className="text-[#7B8FA1] text-xs sm:text-sm leading-relaxed flex-1">
        {body}
      </p>
      <Link
        href={href}
        className="inline-flex items-center gap-1 mt-3 text-xs sm:text-sm font-semibold text-[#1A7A4A] hover:text-[#155c38] transition-colors"
      >
        {linkLabel}
        <ChevronRight size={14} />
      </Link>
    </div>
  )
}

function GroupLabel({ text }: { text: string }) {
  return (
    <div className="flex items-center gap-3 mb-4 sm:mb-5">
      <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wide text-[#1A7A4A] bg-[#DCF3E8] px-3 py-1 rounded-full whitespace-nowrap">
        {text}
      </span>
      <div className="h-px flex-1 bg-[#E2E8ED]" />
    </div>
  )
}

export default function AllRoundCareerSection() {
  return (
    <section className="w-full bg-white py-12 sm:py-16 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <h2 className="text-center font-extrabold text-[#1A1A1A] leading-tight mb-8 sm:mb-10 text-2xl sm:text-3xl lg:text-4xl">
          KodoWorks Is Built For Everyone Ready to Build.
        </h2>

        {/* Sub-group A: For You Personally */}
        <GroupLabel text="For You Personally" />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 mb-8 sm:mb-10">
          {personalTiles.map((tile) => (
            <Tile key={tile.heading} {...tile} />
          ))}
        </div>

        {/* Sub-group B: For Your Organisation */}
        <GroupLabel text="For Your Organisation" />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 mb-10 sm:mb-14">
          {organisationTiles.map((tile) => (
            <Tile key={tile.heading} {...tile} />
          ))}
        </div>

        {/* Section CTA Button */}
        <div className="flex justify-center">
          <button
            type="button"
            className="bg-[#FFD400] hover:bg-[#FFC700] text-[#1A1A1A] font-bold text-base sm:text-lg px-6 sm:px-8 py-3.5 sm:py-4 rounded-2xl flex items-center gap-2 shadow-[0_8px_30px_rgba(255,212,0,0.5)] transition-colors"
          >
            Find Your Path
            <ChevronRight size={20} className="sm:w-6 sm:h-6" />
          </button>
        </div>

      </div>
    </section>
  )
}
