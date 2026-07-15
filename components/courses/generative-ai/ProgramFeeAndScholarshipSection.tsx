import React from "react";

// components/course/ProgramFeeAndScholarshipSection.tsx
// Same layout, spacing, typography and structure as the original design.
// Only the color has been changed from teal/mint to a pastel red shade.

export default function ProgramFeeAndScholarshipSection() {
  return (
    <section className="w-full flex flex-col items-center py-14 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 md:px-10 lg:px-16 xl:px-20">
      <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-8 text-center">
        Program Fee And Scholarships
      </h1>

      <div className="w-full max-w-4xl bg-[#F5A9A0] rounded-3xl p-4 sm:p-6 md:p-10 lg:p-14 flex flex-col md:flex-row gap-4">
        {/* Left card - Fee */}
        <div className="bg-white rounded-2xl p-6 md:p-8 flex-1 flex flex-col justify-center">
          <span className="inline-block bg-[#FDE68A] text-[#7A5B00] text-xs font-bold tracking-wide px-4 py-1.5 rounded-md w-fit mb-4">
            STARTING AT
          </span>

          <div className="flex items-end gap-1 mb-1">
            <span className="text-[#C0392B] text-3xl md:text-4xl font-extrabold">
              ₹
            </span>
            <span className="text-4xl md:text-5xl font-extrabold text-gray-900">
              7,874
            </span>
            <span className="text-gray-500 text-lg md:text-xl mb-1">
              /month
            </span>
          </div>

          <p className="text-[#C0392B] text-sm md:text-base mb-4">
            (For 36 months)
          </p>

          <p className="text-gray-900 font-bold text-base md:text-lg">
            Before Scholarship
          </p>
        </div>

        {/* Right column */}
        <div className="flex-1 flex flex-col gap-4">
          {/* Free trial */}
          <div className="bg-white rounded-2xl p-6 md:p-7 flex items-start gap-3 flex-1">
            <span className="flex items-center justify-center w-6 h-6 rounded-full bg-[#F5A9A0] mt-1 shrink-0">
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="black"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </span>
            <div>
              <p className="text-gray-900 font-bold text-base md:text-lg">
                A Free Trial Session
              </p>
              <p className="text-[#C0392B] font-bold text-base md:text-lg">
                No Fee Required
              </p>
            </div>
          </div>

          {/* Assured scholarships */}
          <div className="bg-white rounded-2xl p-6 md:p-7 flex items-start gap-3 flex-1">
            <span className="flex items-center justify-center w-6 h-6 rounded-full bg-[#F5A9A0] mt-1 shrink-0">
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="black"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </span>
            <div>
              <p className="text-gray-900 font-bold text-base md:text-lg">
                Assured Scholarships
              </p>
              <p className="text-[#C0392B] font-bold text-base md:text-lg">
                After Free Trial
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
