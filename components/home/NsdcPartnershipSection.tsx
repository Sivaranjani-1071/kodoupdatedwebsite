"use client";

import Image from "next/image";
import { ChevronRight } from "lucide-react";
import { scrollToHeroForm } from "@/lib/scrollToHeroForm";

/**
 * NsdcPartnershipSection
 * Profile-card style trust section — avatar + name, a large headline,
 * supporting copy, and a primary CTA on the left; the NSDC partnership
 * certificate on the right, sitting in front of a decorative rotating seal.
 */
export default function NsdcPartnershipSection() {
  return (
    <section className="w-full bg-white px-4 py-6 sm:px-6 sm:py-8 md:px-10 md:py-12 lg:px-16 lg:py-16 xl:px-20">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-10 lg:flex-row lg:items-center lg:gap-16">

        {/* Left: avatar, name, headline, body copy, CTA */}
        <div className="flex flex-col items-center text-center lg:flex-1 lg:items-start lg:text-left">
        

          <p className="mb-2 text-base font-bold text-[#1A1A1A]">KodoWorks</p>

          <h2 className="max-w-xl text-3xl font-extrabold leading-tight tracking-tight text-[#1A1A1A] sm:text-4xl lg:text-[42px]">
            Built by a Practising Technology Company
          </h2>

          <p className="mt-5 max-w-xl text-sm leading-relaxed text-[#666666] sm:text-base">
            KodoWorks is not a training academy that added a few tech courses to its
            catalogue. It is built and run by a technology company that ships real
            software, manages real infrastructure, and solves real client problems —
            every day. Every fellowship program is designed and delivered by people
            who do this work professionally, which is why the curriculum changes as
            fast as the technology itself does.
          </p>

          <button
            onClick={scrollToHeroForm}
            className="relative mt-7 overflow-hidden bg-cover bg-center text-[#1A1A1A] font-bold text-sm sm:text-base px-7 py-3.5 rounded-full flex items-center gap-2 transition-transform hover:-translate-y-0.5 active:translate-y-0"
            style={{ backgroundImage: "url(/yellowbutton.png)" }}
          >
            Get in Touch
            <ChevronRight size={18} className="sm:w-5 sm:h-5" />
          </button>
        </div>

        {/* Right: certificate image with a decorative rotating seal behind it */}
        <div className="relative flex w-full flex-1 items-center justify-center">
          <svg
            viewBox="0 0 200 200"
            className="pointer-events-none absolute -top-8 left-2 h-40 w-40 text-[#1A1A1A]/15 sm:-top-10 sm:left-6 sm:h-48 sm:w-48"
            aria-hidden="true"
          >
            
            <text
              x="100"
              y="60"
              textAnchor="middle"
              fontSize="13"
              fontWeight="700"
              fill="currentColor"
              letterSpacing="2"
            >
              VERIFIED
            </text>
            <text
              x="100"
              y="148"
              textAnchor="middle"
              fontSize="11"
              fontWeight="600"
              fill="currentColor"
              letterSpacing="2"
            >
              PARTNER
            </text>
          </svg>

          <div className="relative w-full max-w-[460px] overflow-hidden rounded-3xl bg-slate-100 p-4 shadow-sm sm:p-6">
            <Image
              src="/nsdc-updated-v2.webp"
              alt="NSDC Certificate of Partnership"
              width={420}
              height={300}
              className="h-auto w-full rounded-lg object-contain"
              priority
            />
          </div>
        </div>

      </div>
    </section>
  );
}
