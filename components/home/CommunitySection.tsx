"use client";

import React from "react";
import { Check, X } from "lucide-react";

/**
 * CommunitySection (components/home/CommunitySection.tsx)
 * Mobile-responsive "KodoWorks vs Typical Training Academy" comparison table.
 *
 * Responsive strategy:
 *  - md and up  → 3-column grid table (Feature | KodoWorks | Typical Academy).
 *                 All cell text is LEFT-aligned and TOP-aligned with its icon,
 *                 so multi-line entries line up cleanly instead of floating
 *                 around a centered axis.
 *  - below md   → no horizontal scrolling. Each row becomes a stacked card:
 *                 the factor as a small header bar, then the KodoWorks entry
 *                 (check, highlighted) and the Typical Academy entry (x, muted)
 *                 as full-width lines. Everything left-aligned and thumb-readable.
 *
 * Usage (Next.js App Router):
 *   import CommunitySection from "@/components/home/CommunitySection";
 *   export default function Page() {
 *     return <CommunitySection />;
 *   }
 *
 * Requires Tailwind CSS and lucide-react to be set up in the Next.js project.
 *
 * NOTE (per designer/dev note): Competitor brand names are intentionally
 * generic ("Typical Training Academy") to avoid legal issues — do not
 * replace with real brand names.
 */

const rows = [
  {
    factor: "Who runs the program",
    kodoworks: "A practising technology company",
    typical: "A training or education-only business",
  },
  {
    factor: "Project work",
    kodoworks: "Live project work modeled on real client engagements",
    typical: "Simulated exercises or sample datasets",
  },
  {
    factor: "Mentors",
    kodoworks: "Working engineers who ship software professionally",
    typical: "Full-time trainers or instructors",
  },
  {
    factor: "Curriculum updates",
    kodoworks: "Revised as the technology itself changes",
    typical: "Updated on a fixed academic calendar",
  },
  {
    factor: "Placement pathway",
    kodoworks: "Defined, score-based, and transparent",
    typical: "Vague or 'placement assistance' only",
  },
  {
    factor: "Program duration",
    kodoworks: "5–7 months, project-driven",
    typical: "9–18 months, lecture-driven",
  },
  {
    factor: "Certification",
    kodoworks: "Issued by a technology company, not a training brand",
    typical: "Issued by an academy or training institute",
  },
  {
    factor: "What you leave with",
    kodoworks: "Deployed, demonstrable project work",
    typical: "Course completion certificate",
  },
];

/* Shared color tokens */
const HEADER_BG = "rgb(252 250 204)";
const KODO_CELL_BG = "rgb(255 254 239 / 50%)";

/* Brand color — highlights the "KodoWorks" column header at the top */
const KODO_GRADIENT = "#ffc90047";

export default function CommunitySection() {
  return (
    <section className="relative w-full overflow-hidden px-4 py-12 sm:px-6 md:px-10 lg:px-16 xl:px-20">
      {/* Decorative background layer */}
      <div className="pointer-events-none absolute inset-0">
        <div
          className="absolute inset-0 opacity-[0.4]"
          style={{
            backgroundImage:
              "radial-gradient(circle, #cbd5e1 1px, transparent 1px)",
            backgroundSize: "28px 28px",
            maskImage:
              "radial-gradient(ellipse 80% 60% at 50% 0%, black 40%, transparent 100%)",
            WebkitMaskImage:
              "radial-gradient(ellipse 80% 60% at 50% 0%, black 40%, transparent 100%)",
          }}
        />
        <div className="absolute bottom-0 left-1/4 h-64 w-64 rounded-full bg-slate-100 opacity-70 blur-[90px]" />
      </div>

      <div className="relative mx-auto max-w-5xl">
        {/* Heading */}
        <div className="text-center">
          <span className="inline-block rounded-full bg-[#E8F5F0] px-4 py-1 text-xs font-bold uppercase tracking-wider text-emerald-700">
            The Difference
          </span>
          <h2 className="mt-4 text-2xl font-extrabold leading-tight text-slate-900 sm:text-3xl md:text-4xl">
           Engineering-Led, Not Classroom-Led
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-slate-500 sm:text-base">
            Most training providers teach technology. KodoWorks practices it — and that
            difference shows up in every project, every mentor, and every hiring
            conversation.
          </p>
        </div>

        {/* ============================================================
            DESKTOP / TABLET (md+) — 3-column grid table
            ============================================================ */}
        <div className="mt-8 hidden md:block">
          <div className="overflow-hidden rounded-t-[24px] rounded-b-xl border border-slate-100 shadow-sm">
            {/* Header */}
            <div
              className="grid grid-cols-[1.1fr_1.2fr_1.2fr]"
              style={{ backgroundColor: HEADER_BG }}
            >
              <div className="flex items-center justify-center px-6 py-3 text-center lg:px-8">
                <span className="text-sm font-bold text-slate-900 lg:text-base">
                  Feature
                </span>
              </div>
              <div
                className="flex items-center justify-center px-5 py-3 text-center"
                style={{ backgroundColor: KODO_GRADIENT }}
              >
                <span className="text-sm font-extrabold text-slate-900 lg:text-base">
                  KodoWorks
                </span>
              </div>
              <div className="flex items-center justify-center px-5 py-3 text-center">
                <span className="text-sm font-bold text-slate-900 lg:text-base">
                  Typical Training
                </span>
              </div>
            </div>

            {/* Rows */}
            <div className="bg-white">
              {rows.map((row, index) => (
                <div
                  key={index}
                  className={`grid grid-cols-[1.1fr_1.2fr_1.2fr] ${
                    index !== rows.length - 1 ? "border-b border-slate-100" : ""
                  }`}
                >
                  {/* Feature — left-aligned, vertically centered */}
                  <div className="flex items-center px-6 py-3.5 lg:px-8">
                    <span className="text-sm font-semibold leading-snug text-slate-900 lg:text-base">
                      {row.factor}
                    </span>
                  </div>

                  {/* KodoWorks — icon top-aligned with first text line, text left-aligned */}
                  <div
                    className="flex items-start gap-2.5 px-5 py-3.5"
                    style={{ backgroundColor: KODO_CELL_BG }}
                  >
                    <Check
                      size={16}
                      className="mt-0.5 shrink-0 text-emerald-600"
                      aria-hidden="true"
                    />
                    <span className="text-left text-sm leading-snug text-slate-700">
                      {row.kodoworks}
                    </span>
                  </div>

                  {/* Typical Academy — same alignment, muted */}
                  <div className="flex items-start gap-2.5 px-5 py-3.5">
                    <X
                      size={16}
                      className="mt-0.5 shrink-0 text-slate-300"
                      aria-hidden="true"
                    />
                    <span className="text-left text-sm leading-snug text-slate-400">
                      {row.typical}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ============================================================
            MOBILE (below md) — stacked cards, no horizontal scrolling
            ============================================================ */}
        <div className="mt-8 space-y-3.5 md:hidden">
          {/* Legend */}
          <div className="flex items-center justify-center gap-5 pb-1">
            <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-700">
              <Check size={14} className="text-emerald-600" aria-hidden="true" />
              KodoWorks
            </span>
            <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-400">
              <X size={14} className="text-slate-300" aria-hidden="true" />
              Typical Academy
            </span>
          </div>

          {rows.map((row, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm"
            >
              {/* Factor header bar */}
              <div
                className="px-4 py-2.5"
                style={{ backgroundColor: HEADER_BG }}
              >
                <span className="text-sm font-bold leading-snug text-slate-900">
                  {row.factor}
                </span>
              </div>

              {/* KodoWorks entry */}
              <div
                className="flex items-start gap-2.5 px-4 py-3"
                style={{ backgroundColor: KODO_CELL_BG }}
              >
                <Check
                  size={16}
                  className="mt-0.5 shrink-0 text-emerald-600"
                  aria-hidden="true"
                />
                <div className="min-w-0">
                  <span className="block text-[11px] font-bold uppercase tracking-wide text-emerald-700">
                    KodoWorks
                  </span>
                  <span className="mt-0.5 block text-sm leading-snug text-slate-700">
                    {row.kodoworks}
                  </span>
                </div>
              </div>

              {/* Typical Academy entry */}
              <div className="flex items-start gap-2.5 border-t border-slate-100 px-4 py-3">
                <X
                  size={16}
                  className="mt-0.5 shrink-0 text-slate-300"
                  aria-hidden="true"
                />
                <div className="min-w-0">
                  <span className="block text-[11px] font-bold uppercase tracking-wide text-slate-400">
                    Typical Academy
                  </span>
                  <span className="mt-0.5 block text-sm leading-snug text-slate-400">
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
