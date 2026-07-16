'use client'

import { useRef, useEffect, useState } from 'react'

// ---------------------------------------------
// Content (move this into content.json / data.json
// if you're following the existing content-source pattern)
// ---------------------------------------------
const certificationsContent = {
  heading: "Industry-Recognized Certifications Within Reach",
  subheading:
    "Every KodoWorks curriculum is mapped to globally recognized certification exams. Fellows can pursue these credentials at their own cost, backed by exam-aligned training built into the program.",
  badges: [
    { name: "AWS Certified Machine Learning – Specialty", src: "/badge-1.png" },
    { name: "Microsoft Certified: Power BI Data Analyst Associate", src: "/badge-2.png" },
    { name: "EC-Council Certified Ethical Hacker (CEH)", src: "/badge-3.png" },
    { name: "AWS Certified Solutions Architect – Professional", src: "/badge-4.png" },
    { name: "AWS Certified Developer – Associate", src: "/badge-5.png" },
    { name: "Tableau Desktop Specialist", src: "/badge-6.png" },
    { name: "ServiceNow Certified Application Developer", src: "/badge-7.webp" },
    { name: "CompTIA Security+ Certified", src: "/badge-8.png" },
    { name: "ServiceNow Certified System Administrator", src: "/badge-9.png" },
    { name: "CNCF Official Content", src: "/badge-10.png" },
    { name: "Google Data Analytics Certificate", src: "/badge11.png" },
    { name: "Microsoft Copilot for M365 Achiever Badge – Foundational", src: "/badge12.png" },
  ],
};

// Number of cards visible at once — used to size each slide relative to the
// track container so the slider loops smoothly.
const CARDS_VISIBLE = 6;

function BadgesSlider({
  badges,
}: {
  badges: { name: string; src: string }[];
}) {
  const trackRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const animRef = useRef<number | null>(null);
  const posRef = useRef(0);
  const [itemWidth, setItemWidth] = useState(0);
  const speed = 0.5;

  const loopedBadges = [...badges, ...badges, ...badges];

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const update = () => {
      const visible =
        window.innerWidth < 640 ? 2 : window.innerWidth < 1024 ? 4 : CARDS_VISIBLE;
      setItemWidth(container.offsetWidth / visible);
    };

    update();
    const ro = new ResizeObserver(update);
    ro.observe(container);
    return () => ro.disconnect();
  }, []);

  useEffect(() => {
    const track = trackRef.current;
    if (!track || itemWidth === 0) return;

    const singleSetWidth = itemWidth * badges.length;

    const step = () => {
      if (!track) return;
      posRef.current += speed;
      if (posRef.current >= singleSetWidth) posRef.current -= singleSetWidth;
      track.style.transform = `translateX(-${posRef.current}px)`;
      animRef.current = requestAnimationFrame(step);
    };

    animRef.current = requestAnimationFrame(step);
    return () => {
      if (animRef.current) cancelAnimationFrame(animRef.current);
    };
  }, [itemWidth, badges.length]);

  const pause = () => {
    if (animRef.current) cancelAnimationFrame(animRef.current);
  };

  const resume = () => {
    const track = trackRef.current;
    if (!track || itemWidth === 0) return;
    const singleSetWidth = itemWidth * badges.length;

    const step = () => {
      if (!track) return;
      posRef.current += speed;
      if (posRef.current >= singleSetWidth) posRef.current -= singleSetWidth;
      track.style.transform = `translateX(-${posRef.current}px)`;
      animRef.current = requestAnimationFrame(step);
    };

    animRef.current = requestAnimationFrame(step);
  };

  return (
    <div
      ref={containerRef}
      className="relative mt-12 w-full overflow-hidden"
      onMouseEnter={pause}
      onMouseLeave={resume}
      onTouchStart={pause}
      onTouchEnd={resume}
    >
      {/* Left fade */}
      <div
        className="pointer-events-none absolute left-0 top-0 z-10 h-full w-12 sm:w-20"
        style={{ background: 'linear-gradient(to right, #ffffff, transparent)' }}
      />
      {/* Right fade */}
      <div
        className="pointer-events-none absolute right-0 top-0 z-10 h-full w-12 sm:w-20"
        style={{ background: 'linear-gradient(to left, #ffffff, transparent)' }}
      />

      <div
        ref={trackRef}
        className="flex items-stretch will-change-transform"
        style={{
          width: itemWidth > 0 ? `${itemWidth * loopedBadges.length}px` : 'max-content',
        }}
      >
        {loopedBadges.map((badge, i) => (
          <div
            key={`${badge.src}-${i}`}
            className="flex-shrink-0 px-3"
            style={{ width: itemWidth > 0 ? `${itemWidth}px` : 'auto' }}
          >
            {/* Fixed-height box, same for every badge regardless of its
                native aspect ratio — object-contain centers each image so
                every card has identical top/bottom spacing. */}
            <div className="flex h-32 sm:h-36 items-center justify-center rounded-xl border border-gray-100 bg-white p-4 shadow-sm transition-shadow hover:shadow-md">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={badge.src}
                alt={badge.name}
                className="h-full w-full object-contain"
                loading="lazy"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function ToolsPoweringFutureSection() {
  const { heading, subheading, badges } = certificationsContent;

  return (
    <section className="w-full bg-white py-12 px-4 sm:px-6 md:px-10 lg:px-16 xl:px-20">
      <div className="mx-auto max-w-6xl text-center">
        <h2 className="text-2xl font-bold text-gray-900 md:text-4xl">
          {heading}
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-sm text-gray-600 md:text-base">
          {subheading}
        </p>

        <BadgesSlider badges={badges} />
      </div>
    </section>
  );
}
