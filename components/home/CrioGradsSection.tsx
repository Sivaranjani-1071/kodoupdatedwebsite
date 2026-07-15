// components/CrioGradsSection.tsx
'use client'

import { useState } from 'react'

type Grad = {
  name: string
  company: string
  avatar: string
  companyLogo: string
}

const grads: Grad[] = [
  {
    name: 'Sayanika Dutta',
    company: 'Tata Elxsi',
    avatar: '/avatars/personscroll.png',
    companyLogo: '/company-logos/tata-elxsi.png',
  },
  {
    name: 'Venkata Amaresh',
    company: 'Ninjacart',
    avatar: '/avatars/personscroll.png',
    companyLogo: '/company-logos/ninjacart.png',
  },
  {
    name: 'Jeevan Janardan Mali',
    company: 'Zoho',
    avatar: '/avatars/personscroll.png',
    companyLogo: '/company-logos/zoho.png',
  },
  {
    name: 'Pranav Nigam',
    company: 'Walmart',
    avatar: '/avatars/personscroll.png',
    companyLogo: '/company-logos/walmart.png',
  },
  {
    name: 'Adriza Mishra',
    company: 'Honeywell',
    avatar: '/avatars/personscroll.png',
    companyLogo: '/company-logos/honeywell.png',
  },
  {
    name: 'Rajat G',
    company: 'Jumbotail',
    avatar: '/avatars/personscroll.png',
    companyLogo: '/company-logos/jumbotail.png',
  },
  {
    name: 'Jyoti Ranjan Biswal',
    company: 'Schbang',
    avatar: '/avatars/personscroll.png',
    companyLogo: '/company-logos/schbang.png',
  },
  {
    name: 'Shubham Sharma',
    company: 'Cisco',
    avatar: '/avatars/personscroll.png',
    companyLogo: '/company-logos/cisco.png',
  },
  {
    name: 'Karthik Chennupati',
    company: 'Amazon',
    avatar: '/avatars/personscroll.png',
    companyLogo: '/company-logos/amazon.png',
  },
  {
    name: 'Yadnesh Giri',
    company: 'Capgemini',
    avatar: '/avatars/personscroll.png',
    companyLogo: '/company-logos/capgemini.png',
  },
  {
    name: 'Dhiren Parmar',
    company: 'Allianz',
    avatar: '/avatars/personscroll.png',
    companyLogo: '/company-logos/allianz.png',
  },
  {
    name: 'Vikash Kumar',
    company: 'Newgen',
    avatar: '/avatars/personscroll.png',
    companyLogo: '/company-logos/newgen.png',
  },
]

/**
 * Renders the company logo image. If the image file doesn't exist yet
 * (404), it falls back to a clean text wordmark so the layout never
 * shows a broken image icon while you're still collecting logo assets.
 */
function CompanyMark({ name, logo }: { name: string; logo: string }) {
  const [failed, setFailed] = useState(false)

  if (failed) {
    return (
      <span className="text-[#1A1A1A] font-bold text-sm sm:text-base tracking-tight">
        {name}
      </span>
    )
  }

  return (
    <img
      src={logo}
      alt={name}
      onError={() => setFailed(true)}
      className="h-full w-auto object-contain"
    />
  )
}

function GradCard({ grad }: { grad: Grad }) {
  return (
    <div className="flex flex-col items-center text-center bg-[#EFF8F4] rounded-3xl px-4 sm:px-5 py-7 sm:py-8 w-[200px] sm:w-[220px] flex-shrink-0">
      {/* Avatar */}
      <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#F5C453] overflow-hidden mb-4 sm:mb-5 flex-shrink-0">
        <img
          src={grad.avatar}
          alt={grad.name}
          className="w-full h-full object-cover grayscale"
        />
      </div>

      {/* Name */}
      <p className="font-bold text-[#1A1A1A] text-sm sm:text-base leading-tight mb-1.5">
        {grad.name}
      </p>

      {/* "is in" */}
      <p className="text-[#999999] text-xs sm:text-sm mb-4 sm:mb-5">is in</p>

      {/* Company Logo (with text fallback) */}
      <div className="h-6 sm:h-7 flex items-center justify-center">
        <CompanyMark name={grad.company} logo={grad.companyLogo} />
      </div>
    </div>
  )
}

export default function CrioGradsSection() {
  // Split into two rows of 6, each row scrolls independently and seamlessly
  const rowOne = grads.slice(0, 6)
  const rowTwo = grads.slice(6, 12)
  const rowOneLoop = [...rowOne, ...rowOne]
  const rowTwoLoop = [...rowTwo, ...rowTwo]

  return (
    <section className="w-full bg-white py-6 sm:py-8 md:py-12 lg:py-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <h2 className="text-center font-extrabold text-[#1A1A1A] leading-tight mb-8 sm:mb-12 text-2xl sm:text-3xl lg:text-4xl">
          Kodoworks
          <br />
         Fellows Are Building Careers At
        </h2>
      </div>

      {/* Row 1 — scrolls left */}
      <div className="relative w-full overflow-hidden mb-4 sm:mb-5">
        <div className="flex w-max animate-marquee gap-4 sm:gap-5 px-4 sm:px-6">
          {rowOneLoop.map((grad, i) => (
            <GradCard key={`row1-${grad.name}-${i}`} grad={grad} />
          ))}
        </div>
      </div>

      {/* Row 2 — scrolls right (opposite direction) */}
      <div className="relative w-full overflow-hidden">
        <div className="flex w-max animate-marquee-reverse gap-4 sm:gap-5 px-4 sm:px-6">
          {rowTwoLoop.map((grad, i) => (
            <GradCard key={`row2-${grad.name}-${i}`} grad={grad} />
          ))}
        </div>
      </div>

      {/* Self-contained marquee animations — plain <style> tag, no
          framework-specific compiler (styled-jsx, etc.) required */}
      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        @keyframes marquee-reverse {
          from { transform: translateX(-50%); }
          to { transform: translateX(0); }
        }
        .animate-marquee {
          animation: marquee 35s linear infinite;
        }
        .animate-marquee-reverse {
          animation: marquee-reverse 35s linear infinite;
        }
      `}</style>
    </section>
  )
}
