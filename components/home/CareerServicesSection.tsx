"use client";

import React from "react";
import { ChevronRight } from "lucide-react";
import { scrollToHeroForm } from "@/lib/scrollToHeroForm";
/**
 * PlacementGuaranteeSection
 * Mobile-responsive "We Don't Stop at Training. We Stay Until You're Hired." section.
 *
 * Usage (Next.js App Router):
 *   import PlacementGuaranteeSection from "@/components/PlacementGuaranteeSection";
 *   export default function Page() {
 *     return <PlacementGuaranteeSection />;
 *   }
 *
 * Requires Tailwind CSS to be set up in the Next.js project.
 */

const columns = [
  {
    heading: "Guaranteed Placement",
    subheading: "80%+ Score",
    body: "Score 80% or above across your program assessments and capstone, and you receive a guaranteed full-time offer through our hiring network.",
    bg: "#E8F5F0", // mint
  },
  {
    heading: "Placement Assistance",
    subheading: "60–79% Score",
    body: "Score between 60 and 79%, and you receive active referrals, resume support, mock interview sessions, and access to our hiring partner network.",
    bg: "#FDF0E7", // peach
  },
  {
    heading: "Always Alumni",
    subheading: "All Fellows",
    body: "Every fellow — regardless of score — receives a certificate, alumni community access, and self-paced revision materials for life.",
    bg: "#EAF0FD", // periwinkle
  },
];

export default function PlacementGuaranteeSection() {
  return (
    <section className="w-full bg-white px-4 py-6 sm:px-6 sm:py-8 md:px-10 md:py-12 lg:px-16 lg:py-16 xl:px-20">
      <div className="mx-auto max-w-5xl text-center">
        {/* Heading */}
        <h2 className="text-2xl font-extrabold leading-tight text-slate-900 sm:text-3xl md:text-4xl">
          We Don&apos;t Stop at Training.
          <br />
          We Stay Until You&apos;re Hired.
        </h2>

        {/* Columns */}
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          {columns.map((column, index) => (
            <div
              key={index}
              style={{ backgroundColor: column.bg }}
              className="w-full rounded-2xl p-6 text-left sm:w-[calc(50%-0.5rem)] lg:w-[calc(33.333%-0.667rem)]"
            >
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                {column.subheading}
              </p>
              <h3 className="mt-1 text-lg font-bold text-slate-900 sm:text-xl">
                {column.heading}
              </h3>
              <p className="mt-3 text-sm font-medium leading-relaxed text-slate-800 sm:text-[15px]">
                {column.body}
              </p>
            </div>
          ))}
        </div>

   {/* Top CTA Button */}
        <div className="flex justify-center mt-10 sm:mt-12">
          <button
            onClick={scrollToHeroForm}
            className="bg-cover bg-center text-[#1A1A1A] font-bold text-base sm:text-lg px-6 sm:px-8 py-3.5 sm:py-4 rounded-2xl flex items-center gap-2 transition-transform hover:-translate-y-0.5 active:translate-y-0"
            style={{ backgroundImage: "url(/yellowbutton.png)" }}
          >
            View Fellowship Programs
            <ChevronRight size={20} />
          </button>
        </div>
       
      </div>
    </section>
  );
}