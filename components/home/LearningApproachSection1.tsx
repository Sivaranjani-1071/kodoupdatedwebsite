// components/LearningApproachSection.tsx
'use client'

import { useRef } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import Image from 'next/image'

const projects = [
  {
    badge: 'Guided Project',
    image: '/CardOne.webp',
    title: 'Work like Full Stack Developers at Amazon',
    description: 'Build a functional and scalable ecommerce app.',
    tags: ['MongoDB', 'React JS', 'Node JS', 'Express JS'],
    badgeStyle: { backgroundColor: '#000000', color: '#ffffff' },
    cardStyle: { backgroundColor: '#fb275d' },
    titleStyle: { color: '#ffffff' },
    descriptionStyle: { color: '#ffffff' },
  },
  {
    badge: 'Independent Project',
    image: '/CardTwo.webp',
    title: 'Build an OTT platform like Netflix Engineers',
    description: 'Build a video streaming fullstack app from design to deployment with GenAI',
    tags: ['Prompt Engineering', 'LLM', 'Cursor', 'OpenAI'],
      badgeStyle: { backgroundColor: '#000000', color: '#ffffff' },
    cardStyle: { backgroundColor: '#ffcd03' },
    titleStyle: { color: '#ffffff' },
    descriptionStyle: { color: '#ffffff' },
  },
  {
    badge: 'Guided Project',
    image: '/CardFour.webp',
    title: 'Work like Backend Developers at Zomato',
    description: 'Build a high-scale distributed web backend for a food ordering app.',
    tags: ['MongoDB', 'Java', 'Spring Boot', 'Redis'],
    badgeStyle: { backgroundColor: '#000000', color: '#ffffff' },
    cardStyle: { backgroundColor: '#00ca72' },
    titleStyle: { color: '#ffffff' },
    descriptionStyle: { color: '#ffffff' },
  },

  {
    badge: 'Independent Project',
    image: '/CardTwo.webp',
    title: 'Build an OTT platform like Netflix Engineers',
    description: 'Build a video streaming fullstack app from design to deployment with GenAI',
    tags: ['Prompt Engineering', 'LLM', 'Cursor', 'OpenAI'],
      badgeStyle: { backgroundColor: '#000000', color: '#ffffff' },
    cardStyle: { backgroundColor: '#7C2D12' },
    titleStyle: { color: '#ffffff' },
    descriptionStyle: { color: '#ffffff' },
  },
  {
    badge: 'Guided Project',
    image: '/CardFour.webp',
    title: 'Work like Backend Developers at Zomato',
    description: 'Build a high-scale distributed web backend for a food ordering app.',
    tags: ['MongoDB', 'Java', 'Spring Boot', 'Redis'],
      badgeStyle: { backgroundColor: '#000000', color: '#ffffff' },
    cardStyle: { backgroundColor: '#1E3A8A' },
    titleStyle: { color: '#ffffff' },
    descriptionStyle: { color: '#ffffff' },
  },
]

export default function LearningApproachSection() {
  const scrollRef = useRef<HTMLDivElement>(null)

  const scroll = (direction: 'left' | 'right') => {
    if (!scrollRef.current) return
    const cardWidth = scrollRef.current.firstElementChild?.clientWidth || 300
    scrollRef.current.scrollBy({
      left: direction === 'left' ? -(cardWidth + 16) : cardWidth + 16,
      behavior: 'smooth',
    })
  }

  return (
    <section className="w-full bg-white py-6 sm:py-8 md:py-12 lg:py-16 px-4 sm:px-6 md:px-10 lg:px-16 xl:px-20">
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <h2 className="text-center font-extrabold text-[#1A1A1A] leading-tight mb-4 sm:mb-6 text-2xl sm:text-3xl lg:text-4xl">
          Experience-Based
          <br />
          Learning Approach
        </h2>

        {/* Paragraph */}
        <p className="text-center text-[#666666] text-sm sm:text-base leading-relaxed max-w-3xl mx-auto mb-8 sm:mb-12">
          At Kodoworks, you learn and grow exactly how you would on a real job. You will start from the
          fundamentals, receive support from our mentors and community, and{' '}
          <span className="font-bold text-[#1A1A1A]">build your way to the top</span> - through
          professional work-like Full-stack and Backend web development projects.
        </p>

        {/* Carousel wrapper — arrows outside on md+, hidden on mobile */}
        <div className="relative">

          {/* Left Arrow — hidden on mobile, shown md+ */}
          <button
            onClick={() => scroll('left')}
            className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 items-center justify-center w-9 h-9 rounded-full border border-gray-300 bg-white text-gray-500 hover:bg-gray-50 flex-shrink-0"
            aria-label="Scroll left"
          >
            <ChevronLeft size={18} />
          </button>

          {/* Scrollable track */}
          <div
            ref={scrollRef}
            className="flex gap-4 sm:gap-6 overflow-x-auto scroll-smooth scrollbar-hide snap-x snap-mandatory px-0 md:px-6"
          >
            {projects.map((project, i) => (
              <div
                key={i}
                style={project.cardStyle}
                className="
                  snap-center flex-shrink-0
                  w-[calc(100%-2rem)]
                  xs:w-[260px]
                  sm:w-[300px]
                  lg:w-[330px]
                  rounded-2xl p-4 sm:p-6
                  flex flex-col items-center text-center
                  mx-auto
                "
              >
                {/* Badge */}
                <span
                  style={project.badgeStyle}
                  className="text-[10px] sm:text-xs font-semibold px-3 sm:px-4 py-1 rounded-full mb-4 sm:mb-6"
                >
                  {project.badge}
                </span>

                {/* Illustration */}
                <div className="w-full h-[120px] sm:h-[160px] flex items-center justify-center mb-4 sm:mb-6">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={180}
                    height={160}
                    className="object-contain max-h-full"
                  />
                </div>

                {/* Title */}
                <h3
                  style={project.titleStyle}
                  className="font-bold text-sm sm:text-lg leading-snug mb-2"
                >
                  {project.title}
                </h3>

                {/* Description */}
                <p
                  style={project.descriptionStyle}
                  className="text-xs sm:text-sm leading-relaxed mb-5 sm:mb-6"
                >
                  {project.description}
                </p>

                {/* Tags */}
                <div className="grid grid-cols-2 gap-2 w-full">
                  {project.tags.map((tag, j) => (
                    <span
                      key={j}
                      className="border border-gray-300 rounded-full px-2 sm:px-3 py-1.5 text-[10px] sm:text-xs font-medium text-[#1A1A1A] whitespace-nowrap"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Right Arrow — hidden on mobile, shown md+ */}
          <button
            onClick={() => scroll('right')}
            className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 items-center justify-center w-9 h-9 rounded-full border border-gray-300 bg-white text-gray-500 hover:bg-gray-50 flex-shrink-0"
            aria-label="Scroll right"
          >
            <ChevronRight size={18} />
          </button>
        </div>

        {/* Mobile arrow row — only on small screens */}
        <div className="flex justify-center gap-4 mt-6 md:hidden">
          <button
            onClick={() => scroll('left')}
            className="flex items-center justify-center w-9 h-9 rounded-full border border-gray-300 text-gray-500 hover:bg-gray-50"
            aria-label="Scroll left"
          >
            <ChevronLeft size={18} />
          </button>
          <button
            onClick={() => scroll('right')}
            className="flex items-center justify-center w-9 h-9 rounded-full border border-gray-300 text-gray-500 hover:bg-gray-50"
            aria-label="Scroll right"
          >
            <ChevronRight size={18} />
          </button>
        </div>

        {/* CTA Button */}
        <div className="flex justify-center mt-10 sm:mt-14">
          <button className="bg-[#FFD400] hover:bg-[#FFC700] text-[#1A1A1A] font-bold text-base sm:text-lg px-6 sm:px-8 py-3.5 sm:py-4 rounded-2xl flex items-center gap-2 shadow-[0_8px_30px_rgba(255,212,0,0.5)] transition-colors">
            Book Your Trial, Now
            <ChevronRight size={20} className="sm:w-6 sm:h-6" />
          </button>
        </div>

      </div>
    </section>
  )
}
