"use client";

import React from "react";
import { Check, X } from "lucide-react";

/**
 * RealWorkExperienceSection
 * Mobile-responsive recreation of the "Real Work Experience, Real
 * Project-Based Learning With Crio" comparison table section.
 *
 * Usage (Next.js App Router):
 *   import RealWorkExperienceSection from "@/components/RealWorkExperienceSection";
 *   export default function Page() {
 *     return <RealWorkExperienceSection />;
 *   }
 *
 * Requires Tailwind CSS + lucide-react:
 *   npm install lucide-react
 *
 * Behavior:
 *  - Desktop/tablet (sm and up): full comparison table, exactly like the design.
 *  - Mobile (below sm): table collapses into a stacked card per feature,
 *    with the three column statuses shown as labeled chips, since a 4-column
 *    table doesn't fit comfortably on small screens.
 */

const rows = [
  { feature: "Real work experience", video: false, bootcamp: false, crio: true, highlight: false },
  { feature: "True, project-based learning", video: false, bootcamp: false, crio: true, highlight: true },
  { feature: "Live sessions & mentorship", video: false, bootcamp: true, crio: true, highlight: false },
  { feature: "AI-driven software", video: false, bootcamp: false, crio: true, highlight: true },
  { feature: "Job-ready portfolio", video: false, bootcamp: false, crio: true, highlight: false },
  { feature: "Externship with companies", video: false, bootcamp: false, crio: true, highlight: true },
  { feature: "Career guidance", video: false, bootcamp: true, crio: true, highlight: false },
  { feature: "Assured Referrals", video: false, bootcamp: false, crio: true, highlight: true },
];

function StatusIcon({ value }: { value: boolean }) {
  return value ? (
    <Check className="mx-auto h-4 w-4 text-emerald-600" strokeWidth={3} />
  ) : (
    <X className="mx-auto h-4 w-4 text-slate-300" strokeWidth={3} />
  );
}

export default function RealWorkExperienceSection() {
  return (
    <section className="w-full bg-white px-4 py-6 sm:px-6 sm:py-8 md:px-10 md:py-12 lg:px-16 lg:py-16 xl:px-20">
      <div className="mx-auto max-w-3xl text-center">
        {/* Heading */}
        <h2 className="text-2xl font-extrabold leading-tight text-slate-900 sm:text-3xl">
         Real Enterprise Projects. A Real Internship. A Real Career — with KodoWorks.
        </h2>

        {/* Intro copy */}
        <p className="mx-auto mt-5 max-w-2xl text-sm text-slate-400 sm:text-base">
         Editorial paragraph explaining India's tech job market, KodoWorks' enterprise project focus, internship, and placement pathway for students, colleges, companies, and recruiters. 
        </p>
      
      </div>


      {/* Footer copy */}
    
    </section>
  );
}
