"use client";

import Image from "next/image";
import Link from "next/link";
import { GraduationCap, Briefcase } from "lucide-react";
import { scrollToHeroForm } from "@/lib/scrollToHeroForm";

/**
 * B2BConnectorStrip
 * -------------------------------------------------------------------------
 * B2B entry point for the KodoWorks homepage: a heading + two pastel
 * cards (colleges / corporates), each split into a text half (badge,
 * bullets, CTA pill) and a photo half.
 */
export default function B2BConnectorStrip() {
  return (
    <section
      aria-label="For colleges and companies: partner with KodoWorks"
      className="w-full bg-white px-4 py-12 sm:px-6 md:px-10 lg:px-16 xl:px-20"
    >
      <div className="mx-auto max-w-6xl">
        {/* Heading */}
        <div className="mb-8 max-w-2xl mx-auto text-center sm:mb-10">
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

        {/* Two split cards */}
        <div className="grid grid-cols-1 gap-5 sm:gap-6 md:grid-cols-2">
          <PartnerCard
            label="For Colleges"
            Icon={GraduationCap}
            bgColor="#FDE7EF"
            badgeBg="#FBCFE0"
            iconColor="#E0447B"
            buttonBg="#E0447B"
            bullets={[
              "Placement-ready curriculum",
              "Industry mentor access",
              "Real project exposure",
            ]}
            ctaLabel="Explore Campus"
            image="/b2b (1).png"
          />
          <PartnerCard
            label="For Corporates"
            Icon={Briefcase}
            bgColor="#E3FBEE"
            badgeBg="#BFF3D6"
            iconColor="#12A150"
            buttonBg="#12A150"
            bullets={[
              "Pre-vetted talent pool",
              "Custom hiring pipelines",
              "Reduced onboarding time",
            ]}
            ctaLabel="Explore Enterprise"
            image="/b2b (2).png"
          />
        </div>
      </div>
    </section>
  );
}

function PartnerCard({
  label,
  Icon,
  bgColor,
  badgeBg,
  iconColor,
  buttonBg,
  bullets,
  ctaLabel,
  image,
}: {
  label: string;
  Icon: typeof GraduationCap;
  bgColor: string;
  badgeBg: string;
  iconColor: string;
  buttonBg: string;
  bullets: string[];
  ctaLabel: string;
  image: string;
}) {
  return (
    <div
      className="flex h-72 overflow-hidden rounded-[28px] sm:h-80"
      style={{ backgroundColor: bgColor }}
    >
      {/* Text half */}
      <div className="flex w-[57%] flex-col justify-between p-5 sm:p-6">
        <div>
          <div
            className="inline-flex items-center gap-2 rounded-2xl px-3.5 py-2.5 sm:px-4"
            style={{ backgroundColor: badgeBg }}
          >
            <Icon size={18} strokeWidth={2.25} style={{ color: iconColor }} aria-hidden="true" />
            <span className="text-sm font-bold leading-snug text-[#1A1A1A] sm:text-base">
              {label}
            </span>
          </div>

          <ul className="mt-4 flex flex-col gap-2 sm:mt-5">
            {bullets.map((bullet) => (
              <li
                key={bullet}
                className="flex items-start gap-2 text-xs font-medium leading-snug text-[#333333] sm:text-sm"
              >
                <span
                  className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-[#333333]/70"
                  aria-hidden="true"
                />
                {bullet}
              </li>
            ))}
          </ul>
        </div>

        <Link
          href="/#hero-form"
          onClick={(e) => { e.preventDefault(); scrollToHeroForm() }}
          className="inline-flex w-fit items-center rounded-full px-4 py-2.5 text-xs font-semibold text-white sm:text-sm"
          style={{ backgroundColor: buttonBg }}
        >
          {ctaLabel}
        </Link>
      </div>

      {/* Photo half */}
      <div className="relative w-[43%] overflow-hidden">
        <Image
          src={image}
          alt=""
          fill
          sizes="(max-width: 768px) 60vw, 30vw"
          className="object-cover"
        />
      </div>
    </div>
  );
}
