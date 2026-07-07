"use client";

import Link from "next/link";

/**
 * B2BConnectorStrip
 * -------------------------------------------------------------------------
 * B2B entry point for the KodoWorks homepage, placed directly below
 * Section 4. Rendered as a floating rounded card (not edge-to-edge) so it
 * visually separates itself from the student-facing sections above and
 * below it — with its own breathing room, a gold gradient border, ambient
 * glow, and a fine diagonal pattern for premium, enterprise texture.
 *
 * Usage:
 *   <Section4 />
 *   <B2BConnectorStrip />
 *   <Section5 />
 */
export default function B2BConnectorStrip() {
  return (
    <div className="w-full bg-white px-4 py-10 sm:px-8 sm:py-12 lg:px-16 lg:py-14">
      <section
        aria-label="For colleges and companies: partner with KodoWorks"
        className="
          relative mx-auto max-w-[1320px] overflow-hidden
          rounded-[28px] p-[1.5px]
        "
        style={{
          background:
            "linear-gradient(135deg, rgba(212,175,55,0.55) 0%, rgba(212,175,55,0.08) 30%, rgba(212,175,55,0.08) 70%, rgba(212,175,55,0.55) 100%)",
          boxShadow:
            "0 20px 60px -20px rgba(11,16,38,0.45), 0 8px 24px -8px rgba(212,175,55,0.12)",
        }}
      >
        {/* Inner surface */}
        <div
          className="relative overflow-hidden rounded-[26.5px]"
          style={{
            background:
              "linear-gradient(120deg, #0B1026 0%, #1A1240 45%, #24134A 100%)",
          }}
        >
          {/* Ambient glows */}
          <div className="pointer-events-none absolute inset-0" aria-hidden="true">
            <div
              className="absolute -top-20 right-[6%] h-72 w-72 rounded-full blur-3xl"
              style={{ background: "radial-gradient(circle, rgba(212,175,55,0.20) 0%, rgba(212,175,55,0) 70%)" }}
            />
            <div
              className="absolute -bottom-28 left-[10%] h-72 w-72 rounded-full blur-3xl"
              style={{ background: "radial-gradient(circle, rgba(139,92,246,0.16) 0%, rgba(139,92,246,0) 70%)" }}
            />
            {/* Fine diagonal line pattern */}
            <svg className="absolute inset-0 h-full w-full opacity-[0.05]" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="b2b-diagonal" width="34" height="34" patternTransform="rotate(45)" patternUnits="userSpaceOnUse">
                  <line x1="0" y1="0" x2="0" y2="34" stroke="#FFFFFF" strokeWidth="1" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#b2b-diagonal)" />
            </svg>
            {/* Corner accent bracket, top-left */}
            <svg className="absolute left-0 top-0 h-16 w-16 opacity-40 sm:h-20 sm:w-20" viewBox="0 0 80 80" fill="none">
              <path d="M2 30V6C2 3.79 3.79 2 6 2H30" stroke="#D4AF37" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
            {/* Corner accent bracket, bottom-right */}
            <svg className="absolute bottom-0 right-0 h-16 w-16 opacity-40 sm:h-20 sm:w-20" viewBox="0 0 80 80" fill="none">
              <path d="M78 50V74C78 76.21 76.21 78 74 78H50" stroke="#D4AF37" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </div>

          {/* Content */}
          <div
            className="
              relative flex flex-col gap-7
              px-6 py-9
              sm:px-10 sm:py-10
              md:flex-row md:items-center md:justify-between md:gap-10
              lg:px-14 lg:py-11
            "
          >
            {/* Left: badge + heading + supporting text */}
            <div className="max-w-xl">
             

              <h2 className="text-[21px] font-semibold leading-snug tracking-tight text-white sm:text-[24px] lg:text-[26px]">
                Hiring a Team? Training a Campus?
                <br className="hidden sm:block" /> We Can Help With That Too.
              </h2>
              <p className="mt-2.5 max-w-lg text-[13.5px] leading-relaxed text-white/65 sm:text-sm">
                KodoWorks partners with colleges and companies to build
                industry-ready talent pipelines at scale—through Campus
                Connect and Kodo Enterprise Training.
              </p>
            </div>

            {/* Right: two CTAs, side by side, with a subtle divider between them */}
            <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:gap-5 md:flex-shrink-0">
              <CTAButton
                href="/campus-connect"
                eyebrow="For Colleges & Institutions"
                label="Explore Campus Connect"
              />

              <div className="hidden h-11 w-px self-center bg-white/15 sm:block" aria-hidden="true" />

              <CTAButton
                href="/enterprise-training"
                eyebrow="For Companies & Recruiters"
                label="Explore Enterprise Training & Hiring"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function CTAButton({
  href,
  eyebrow,
  label,
}: {
  href: string;
  eyebrow: string;
  label: string;
}) {
  return (
    <Link href={href} className="group flex flex-col gap-1.5">
      <span className="text-[11px] font-medium uppercase tracking-wide text-white/50">
        {eyebrow}
      </span>
      <span
        className="
          inline-flex items-center justify-center whitespace-nowrap
          rounded-[10px] border px-5 py-2.5 text-[13.5px] font-medium
          transition-all duration-[250ms] ease-out
          sm:px-6
        "
        style={{
          borderColor: "#D4AF37",
          color: "#D4AF37",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.backgroundColor = "#D4AF37";
          e.currentTarget.style.color = "#0B1026";
          e.currentTarget.style.boxShadow = "0 0 20px rgba(212,175,55,0.4)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundColor = "transparent";
          e.currentTarget.style.color = "#D4AF37";
          e.currentTarget.style.boxShadow = "none";
        }}
      >
        {label}
        <span className="ml-2 transition-transform duration-[250ms] ease-out group-hover:translate-x-0.5">
          →
        </span>
      </span>
    </Link>
  );
}
