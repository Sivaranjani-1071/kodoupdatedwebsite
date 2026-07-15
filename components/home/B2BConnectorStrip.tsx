"use client";

import Link from "next/link";
import { ArrowUpRight, GraduationCap, Briefcase } from "lucide-react";
import { scrollToHeroForm } from "@/lib/scrollToHeroForm";

/** Just the "K" icon mark from the KodoWorks logo (no wordmark), recolorable via currentColor. */
function KodoMark(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 20 112 138" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M84.2733 150.45C98.8399 150.47 110.665 138.677 110.685 124.111C110.695 116.039 107.077 108.811 101.372 103.965L58.0267 57.4414L57.9384 123.38L57.9423 123.379C57.9366 123.599 57.9339 123.819 57.9336 124.04C57.9143 138.607 69.7069 150.431 84.2733 150.45Z"
        fill="currentColor"
      />
      <path
        d="M84.4253 27.168C98.9918 27.1876 110.784 39.0117 110.764 53.5783C110.754 61.6654 107.103 68.8954 101.365 73.7259L57.9219 120.105L58.0102 54.1678L58.0209 54.1708C58.0158 53.9504 58.0147 53.7294 58.015 53.5077C58.0345 38.941 69.8586 27.1485 84.4253 27.168Z"
        fill="currentColor"
      />
      <path
        d="M26.5402 27.8555C11.9735 27.836 0.148431 39.6295 0.12893 54.1962C0.118258 62.2686 3.73737 69.4968 9.44377 74.3424L52.7868 120.864L52.8751 54.926L52.8712 54.9269C52.8768 54.7075 52.8796 54.4875 52.8799 54.2668C52.8994 39.7003 41.1067 27.8752 26.5402 27.8555Z"
        fill="currentColor"
      />
      <path
        d="M26.3709 151.153C11.8043 151.134 0.0118457 139.309 0.031274 124.743C0.0421004 116.656 3.69318 109.426 9.43032 104.595L52.8743 58.2148L52.786 124.153L52.7753 124.15C52.7804 124.371 52.7815 124.592 52.7812 124.814C52.7616 139.38 40.9375 151.173 26.3709 151.153Z"
        fill="currentColor"
      />
    </svg>
  );
}

/**
 * B2BConnectorStrip
 * -------------------------------------------------------------------------
 * B2B entry point for the KodoWorks homepage: a heading + two large
 * bento-style cards (colleges / companies), each with a white pill badge
 * top-left and a white "Explore" pill bottom-right.
 */
export default function B2BConnectorStrip() {
  return (
    <section
      aria-label="For colleges and companies: partner with KodoWorks"
      className="w-full bg-white px-4 py-6 sm:px-6 sm:py-8 md:px-10 md:py-12 lg:px-16 lg:py-16 xl:px-20"
    >
      <div className="mx-auto max-w-6xl">
        {/* Heading */}
        <div className="mb-8 max-w-2xl sm:mb-10">
          <h2 className="text-2xl font-extrabold leading-tight tracking-tight text-[#1A1A1A] sm:text-3xl lg:text-4xl">
            Hiring a Team? Training a Campus?
            <br />
            We Can Help With That Too.
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-[#666666] sm:text-base">
            KodoWorks partners with colleges and companies to build
            industry-ready talent pipelines at scale — through Campus Connect
            and Kodo Enterprise Training.
          </p>
        </div>

        {/* Two bento cards */}
        <div className="grid grid-cols-1 gap-5 sm:gap-6 md:grid-cols-2">
          <PartnerCard
            eyebrow="For Colleges & Institutions"
            label="Explore Campus Connect"
            bg="#2E5FD9"
            Icon={GraduationCap}
            iconColor="#2E5FD9"
            bullets={[
              "Placement-ready curriculum",
              "Industry mentor access",
              "Real project exposure",
            ]}
          />
          <PartnerCard
            eyebrow="For Companies & Recruiters"
            label="Explore Enterprise Training & Hiring"
            bg="#0F9D58"
            Icon={Briefcase}
            iconColor="#0F9D58"
            bullets={[
              "Pre-vetted talent pool",
              "Custom hiring pipelines",
              "Reduced onboarding time",
            ]}
          />
        </div>
      </div>
    </section>
  );
}

function PartnerCard({
  eyebrow,
  label,
  bg,
  Icon,
  iconColor,
  bullets,
}: {
  eyebrow: string;
  label: string;
  bg: string;
  Icon: typeof GraduationCap;
  iconColor: string;
  bullets: string[];
}) {
  return (
    <div
      className="relative aspect-[4/3] overflow-hidden rounded-[28px] sm:aspect-[2/1]"
      style={{ backgroundColor: bg }}
    >
      {/* Low-opacity Kodo icon watermark */}
      <KodoMark
        className="pointer-events-none absolute -right-6 top-1/2 h-[70%] w-auto -translate-y-1/2 text-white opacity-15"
        aria-hidden="true"
      />

      {/* Large low-opacity theme icon filling the empty lower-left space */}
      <Icon
        className="pointer-events-none absolute -bottom-6 left-4 text-white opacity-15 sm:left-6"
        size={140}
        strokeWidth={1.5}
        aria-hidden="true"
      />

      {/* Eyebrow pill + supporting bullets */}
      <div className="absolute left-5 top-5 flex max-w-[75%] flex-col items-start gap-3 sm:left-6 sm:top-6">
        <div className="inline-flex items-center gap-2 rounded-2xl bg-white px-4 py-3">
          <Icon size={18} strokeWidth={2.25} style={{ color: iconColor }} aria-hidden="true" />
          <p className="text-base font-bold leading-snug text-[#1A1A1A] sm:text-lg">
            {eyebrow}
          </p>
        </div>

        <ul className="flex flex-col gap-1.5 pl-1">
          {bullets.map((bullet) => (
            <li
              key={bullet}
              className="flex items-center gap-2 text-xs font-medium leading-snug text-white sm:text-sm"
            >
              <span
                className="h-1 w-1 shrink-0 rounded-full bg-white/85"
                aria-hidden="true"
              />
              {bullet}
            </li>
          ))}
        </ul>
      </div>

      {/* Explore pill */}
      <Link
        href="/#hero-form"
        onClick={(e) => { e.preventDefault(); scrollToHeroForm() }}
        className="absolute bottom-5 right-5 inline-flex items-center gap-1.5 rounded-full bg-white px-4 py-2.5 text-sm font-semibold text-[#1A1A1A] sm:bottom-6 sm:right-6"
      >
        <span>{label}</span>
        <ArrowUpRight size={16} strokeWidth={2.5} className="shrink-0" />
      </Link>
    </div>
  );
}
