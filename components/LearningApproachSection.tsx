// components/LearningApproachSection.tsx
'use client'

import { useState } from 'react'
import { ChevronRight } from 'lucide-react'
import Image from 'next/image'
import BookTrialModal from './BookTrialModal'

const projects = [
  {
    heading: 'Real Enterprise Projects',
    image: '/CardOne.webp',
    description:
      "Every program is built around live projects drawn from ExpertsPro's enterprise engineering practice. You don't just learn the theory — you build things that work in production.",
    accentColor: '#fb275d',
    cardStyle: { backgroundColor: '#fb275d17' },
  },
  {
    heading: "Mentors Who've Shipped Production Systems",
    image: '/CardTwo.webp',
    description:
      'Learn directly from engineers who have built and deployed real systems for real companies — not just certified instructors with textbook knowledge.',
    accentColor: '#c99a02',
    cardStyle: { backgroundColor: '#ffcd0317' },
  },
  {
    heading: 'A Defined Placement Pathway',
    image: '/CardFour.webp',
    description:
      'Every program comes with a transparent, score-based placement policy. Fellows know exactly what performance unlocks what outcome — before they even start.',
    accentColor: '#00ca72',
    cardStyle: { backgroundColor: '#00ca7214' },
  },
]

export default function LearningApproachSection() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <section className="w-full bg-white py-12 sm:py-16 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <h2 className="text-center font-extrabold text-[#1A1A1A] leading-tight mb-4 sm:mb-6 text-2xl sm:text-3xl lg:text-4xl">
          Enterprise-Grade Learning.
          <br />
          From Day One.
        </h2>

        {/* Paragraph */}
        <p className="text-center text-[#666666] text-sm sm:text-base leading-relaxed max-w-3xl mx-auto mb-8 sm:mb-12">
          At KodoWorks, every fellow works on the kind of problems enterprise teams actually solve — not simulated exercises, not toy datasets. {' '}
          <span className="font-bold text-[#1A1A1A]">Real systems, real mentors, real outcomes.</span>
        </p>

        {/* Static grid — no scroll/carousel */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {projects.map((project, i) => (
            <div
              key={i}
              style={project.cardStyle}
              className="
                rounded-2xl p-4 sm:p-6
                flex flex-col items-center text-center
              "
            >
              {/* Image */}
              <div className="w-full h-[120px] sm:h-[160px] flex items-center justify-center mb-4 sm:mb-6">
                <Image
                  src={project.image}
                  alt={project.heading}
                  width={180}
                  height={160}
                  className="object-contain max-h-full"
                />
              </div>

              {/* Heading */}
              <h3
                style={{ color: project.accentColor }}
                className="text-base sm:text-lg font-bold mb-2 sm:mb-3"
              >
                {project.heading}
              </h3>

              {/* Body */}
              <p className="text-[#666666] text-xs sm:text-sm leading-relaxed">
                {project.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="flex justify-center mt-10 sm:mt-14">
          <button
            onClick={() => setIsModalOpen(true)}
            className="bg-[#FFD400] hover:bg-[#FFC700] text-[#1A1A1A] font-bold text-base sm:text-lg px-6 sm:px-8 py-3.5 sm:py-4 rounded-2xl flex items-center gap-2 shadow-[0_8px_30px_rgba(255,212,0,0.5)] transition-colors"
          >
            Explore Programs
            <ChevronRight size={20} className="sm:w-6 sm:h-6" />
          </button>
        </div>

      </div>

      <BookTrialModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </section>
  )
}