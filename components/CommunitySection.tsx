"use client";

import React from "react";
import { Check, X } from "lucide-react";

/**
 * ComparisonTableSection
 * Mobile-responsive "KodoWorks vs Typical Bootcamp" comparison table.
 *
 * Usage (Next.js App Router):
 *   import ComparisonTableSection from "@/components/ComparisonTableSection";
 *   export default function Page() {
 *     return <ComparisonTableSection />;
 *   }
 *
 * Requires Tailwind CSS and lucide-react to be set up in the Next.js project.
 *
 * NOTE (per designer/dev note): Competitor pricing/duration figures must be
 * verified against current live data before publishing. Competitor brand
 * names are intentionally generic ("Typical Bootcamp / Online Course") to
 * avoid legal issues — do not replace with real brand names.
 */

const rows = [
  {
    factor: "Real enterprise projects",
    kodoworks: "Yes — built with ExpertsPro engineers",
    typical: "Rarely",
  },
  {
    factor: "Placement pathway",
    kodoworks: "Defined, score-based, transparent",
    typical: "Vague or 'assistance only'",
  },
  {
    factor: "Program duration",
    kodoworks: "5–7 months",
    typical: "9–18 months",
  },
  {
    factor: "Certification",
    kodoworks: "Co-branded with a global tech company",
    typical: "Standalone certificate only",
  },
  {
    factor: "Mentor background",
    kodoworks: "Practitioners from enterprise companies",
    typical: "Often trainers, not practitioners",
  },
];

export default function ComparisonTableSection() {
  return (
    <section className="w-full bg-white px-4 py-12 sm:py-16 md:py-20">
      <div className="mx-auto max-w-5xl">
        {/* Heading */}
        <h2 className="text-center text-2xl font-extrabold leading-tight text-slate-900 sm:text-3xl md:text-4xl">
          Real Enterprise Projects. A Real Internship.  <br /> A Real Career — with KodoWorks.
        </h2>
      

        {/* Desktop / tablet table */}
        <div className="mt-10 hidden overflow-hidden rounded-2xl border border-slate-200 sm:block">
          <table className="w-full border-collapse text-left">
            <thead>
              <tr>
                <th className="w-1/3 bg-slate-50 px-6 py-4 text-sm font-semibold text-slate-500">
                  Factor
                </th>
                <th className="w-1/3 bg-[#E8F5F0] px-6 py-4 text-sm font-bold text-slate-900">
                  KodoWorks
                </th>
                <th className="w-1/3 bg-slate-50 px-6 py-4 text-sm font-semibold text-slate-500">
                  Typical Bootcamp / Online Course
                </th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, index) => (
                <tr
                  key={index}
                  className={index % 2 === 0 ? "bg-white" : "bg-slate-50/50"}
                >
                  <td className="border-t border-slate-200 px-6 py-5 text-sm font-medium text-slate-700 sm:text-[15px]">
                    {row.factor}
                  </td>
                  <td className="border-t border-slate-200 bg-[#E8F5F0]/40 px-6 py-5 text-sm font-medium text-slate-900 sm:text-[15px]">
                    <div className="flex items-start gap-2">
                      <Check
                        size={18}
                        className="mt-0.5 shrink-0 text-emerald-600"
                      />
                      <span>{row.kodoworks}</span>
                    </div>
                  </td>
                  <td className="border-t border-slate-200 px-6 py-5 text-sm text-slate-500 sm:text-[15px]">
                    <div className="flex items-start gap-2">
                      <X
                        size={18}
                        className="mt-0.5 shrink-0 text-slate-300"
                      />
                      <span>{row.typical}</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile stacked cards */}
        <div className="mt-10 space-y-4 sm:hidden">
          {rows.map((row, index) => (
            <div
              key={index}
              className="rounded-2xl border border-slate-200 p-4"
            >
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                {row.factor}
              </p>

              <div className="mt-3 rounded-xl bg-[#E8F5F0] p-3">
                <p className="text-[11px] font-semibold text-slate-500">
                  KodoWorks
                </p>
                <div className="mt-1 flex items-start gap-2">
                  <Check
                    size={16}
                    className="mt-0.5 shrink-0 text-emerald-600"
                  />
                  <span className="text-sm font-medium text-slate-900">
                    {row.kodoworks}
                  </span>
                </div>
              </div>

              <div className="mt-2 rounded-xl bg-slate-50 p-3">
                <p className="text-[11px] font-semibold text-slate-400">
                  Typical Bootcamp / Online Course
                </p>
                <div className="mt-1 flex items-start gap-2">
                  <X size={16} className="mt-0.5 shrink-0 text-slate-300" />
                  <span className="text-sm text-slate-500">
                    {row.typical}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}