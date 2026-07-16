'use client'

import data from '@/data/content.json'
import { scrollToHeroForm } from '@/lib/scrollToHeroForm'

export default function AnnouncementBanner() {
  const { banner } = data

  return (
    <div style={{background: "linear-gradient(135deg, #ffe380 0%, #ffcc99 50%, #ffb3b3 100%)"}} className="bg-[#00C9A7] w-full">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 md:px-10 lg:px-16 xl:px-20 py-2 flex items-center justify-center">

        {/* Text: "Limited seats" hidden on mobile to keep the banner short; full text from sm up */}
        <p className="text-[#1A1A1A] font-medium text-center leading-snug text-xs sm:text-sm">
          {banner.segments.intro}{' '}
          <span className="hidden sm:inline">
            | {banner.segments.limitedSeats}{' '}
          </span>
          
         
          
          <a
            href="/#hero-form"
            onClick={(e) => { e.preventDefault(); scrollToHeroForm() }}
            className="font-bold underline cursor-pointer"
          >
            {banner.ctaText}
          </a>
        </p>

      </div>
    </div>
  )
}