"use client";

import React from "react";
import Image from "next/image";

/**
 * NsdcPartnershipSection
 * Mobile-responsive recreation of the "Empowering the Next Generation
 * of Tech Talent" certificate banner section.
 *
 * Usage (Next.js App Router):
 *   import NsdcPartnershipSection from "@/components/NsdcPartnershipSection";
 *   export default function Page() {
 *     return <NsdcPartnershipSection />;
 *   }
 *
 * Requires Tailwind CSS to be set up in the Next.js project.
 * Replace the `src` in the <Image> tag below with your actual certificate
 * image path (e.g. place it in /public/certificate-nsdc.png).
 */

export default function NsdcPartnershipSection() {
  return (
    <section className="w-full px-4 py-8 sm:py-10">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-6 rounded-3xl bg-emerald-50/60 p-6 sm:flex-row sm:items-center sm:gap-10 sm:p-10">
        {/* Certificate image */}
        <div className="w-full max-w-[260px] flex-shrink-0 sm:max-w-[220px]">
          <div className="overflow-hidden rounded-md shadow-sm">
            <Image
              src="/nsdc-updated-v2.webp"
              alt="NSDC Certificate of Partnership"
              width={420}
              height={300}
              className="h-auto w-full object-contain"
              priority
            />
          </div>
        </div>

        {/* Text content */}
        <div className="text-center sm:text-left">
          <h2 className="text-xl font-bold leading-snug text-slate-900 sm:text-2xl">
            Backed by a Global Technology Company
          </h2>
          <p className="mt-2 text-sm text-slate-500 sm:text-base">
            KodoWorks is powered by ExpertsPro — a global IT solutions and workforce company headquartered in McKinney, Texas, USA, with operations in Coimbatore, Tamil Nadu. Every KodoWorks program is built on real enterprise engineering practice, not classroom theory. The same team that delivers technology solutions to global clients is the team that trains our fellows.
          </p>
        </div>
      </div>
    </section>
  );
}