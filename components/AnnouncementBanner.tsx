'use client'

import data from '@/data/content.json'

export default function AnnouncementBanner() {
  const { banner } = data

  return (
    <div style={{background: "linear-gradient(135deg, #ffe380 0%, #ffcc99 50%, #ffb3b3 100%)"}} className="bg-[#00C9A7] w-full">
      <div className="max-w-7xl mx-auto px-3 py-2 flex items-center justify-center">

        {/* Text */}
        <p className="text-[#1A1A1A] text-xs sm:text-sm font-medium text-center leading-snug">
          {banner.text}{' '}
          |{' '}
          <a href="#" className="font-bold underline cursor-pointer">
            {banner.ctaText}
          </a>
        </p>

      </div>
    </div>
  )
}