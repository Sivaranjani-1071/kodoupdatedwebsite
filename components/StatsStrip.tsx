"use client";

import { useEffect, useRef, useState } from "react";
import { GraduationCap, Users, Clock, Target, Globe2 } from "lucide-react";

/**
 * StatsStripe — ExpertsPro Fellowship stats section (v2)
 *
 * - Flat white page background, no gradients anywhere.
 * - Centered, elevated card (not full-bleed) with a soft shadow/border so
 *   it reads as a distinct module on the page.
 * - Icons sit in distinct pastel circular badges (one hue per stat) with
 *   a subtle shadow ring in the same hue.
 * - Numeric stats count up into view on scroll for a bit of "wow" —
 *   pure CSS/JS, no animation library required.
 * - A thin solid purple rule caps the top of the card as the signature
 *   detail.
 * - No fonts are set here; all text inherits the page's body/heading
 *   font stack.
 */

const STATS = [
  {
    icon: GraduationCap,
    value: 7,
    suffix: "",
    display: "7",
    label: "Fellowship programs",
    sub: "AI, Cloud, Data, Security & more",
    badgeBg: "#EAD9FF",
    badgeFg: "#6B3FA0",
  },
  {
    icon: Users,
    value: null,
    display: "1:8",
    label: "Mentor-to-student ratio",
    sub: null,
    badgeBg: "#CFEFEA",
    badgeFg: "#1E8A7A",
  },
  {
    icon: Clock,
    value: 390,
    suffix: "+",
    display: "390+",
    label: "Hours of live instruction",
    sub: null,
    badgeBg: "#FFE3C2",
    badgeFg: "#B4650F",
  },
  {
    icon: Target,
    value: 80,
    suffix: "%+",
    display: "80%+",
    label: "Score unlocks placement",
    sub: "Guaranteed",
    emphasize: true,
    badgeBg: "#FFD3DE",
    badgeFg: "#C43A5C",
  },
  {
    icon: Globe2,
    value: null,
    display: "Global",
    label: "Powered by ExpertsPro",
    sub: "McKinney, TX & Coimbatore",
    badgeBg: "#D3E4FF",
    badgeFg: "#3163B8",
  },
];

function useCountUp(target, active, duration = 1400) {
  const [n, setN] = useState(0);
  const startRef = useRef(null);

  useEffect(() => {
    if (!active || target == null) return;
    let raf;
    const step = (ts) => {
      if (startRef.current === null) startRef.current = ts;
      const progress = Math.min((ts - startRef.current) / duration, 1);
      // ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setN(Math.round(eased * target));
      if (progress < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [active, target, duration]);

  return n;
}

function StatValue({ stat, active }) {
  const count = useCountUp(stat.value, active);
  if (stat.value == null) {
    return <>{stat.display}</>;
  }
  return (
    <>
      {count}
      {stat.suffix}
    </>
  );
}

export default function StatsStripe() {
  const sectionRef = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.35 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full overflow-hidden py-16 sm:py-20"
      style={{ backgroundColor: "#FFFFFF" }}
      aria-label="Fellowship program statistics"
    >
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <div
          className="relative overflow-hidden rounded-[28px] border bg-white"
          style={{
            borderColor: "#ECE6F7",
            boxShadow:
              "0 30px 80px -30px rgba(91,42,140,0.28), 0 8px 24px -12px rgba(91,42,140,0.12)",
          }}
        >
          {/* signature top rule */}
          <div
            className="h-[4px] w-full"
            style={{ backgroundColor: "#5B2A8C" }}
            aria-hidden="true"
          />

          <div
            className="
              grid gap-0
              grid-flow-col auto-cols-[78%] xs:auto-cols-[58%]
              sm:grid-flow-row sm:grid-cols-2 lg:grid-cols-5
              overflow-x-auto sm:overflow-visible
              snap-x snap-mandatory sm:snap-none
              scrollbar-none
              px-2 sm:px-4
              py-10 sm:py-12
            "
            style={{ scrollbarWidth: "none" }}
          >
            {STATS.map((stat, i) => (
              <div
                key={stat.label}
                className={`
                  group relative flex flex-col items-center text-center
                  px-6 py-2 snap-start
                  transition-transform duration-300 ease-out
                  hover:-translate-y-1.5
                  ${i !== 0 ? "sm:border-l" : ""}
                  ${i === 2 ? "lg:border-l" : ""}
                `}
                style={{ borderColor: "#EFE9FA" }}
              >
                {/* icon badge */}
                <div
                  className="
                    relative mb-5 flex h-16 w-16 items-center justify-center rounded-2xl
                    transition-all duration-300 ease-out
                    group-hover:scale-105 group-hover:rotate-3
                  "
                  style={{
                    backgroundColor: stat.badgeBg,
                    boxShadow: `0 0 0 6px ${stat.badgeBg}66`,
                  }}
                >
                  <stat.icon
                    className="h-7 w-7"
                    style={{ color: stat.badgeFg }}
                    strokeWidth={1.75}
                    aria-hidden="true"
                  />
                  {/* soft pulsing ring, purely decorative */}
                  <span
                    className="absolute inset-0 -z-10 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                    style={{
                      boxShadow: `0 0 0 8px ${stat.badgeBg}55`,
                    }}
                    aria-hidden="true"
                  />
                </div>

                <div
                  className="stat-value leading-none tracking-tight"
                  style={{
                    fontSize: "clamp(1.9rem, 4vw, 2.6rem)",
                    fontWeight: 600,
                    color: "#2A1B45",
                  }}
                >
                  <StatValue stat={stat} active={inView} />
                </div>

                {stat.emphasize && (
                  <span
                    className="mt-3 inline-block rounded-full px-3 py-1 text-[10.5px] font-bold tracking-wide"
                    style={{
                      backgroundColor: "#FBBF24",
                      color: "#78350F",
                      letterSpacing: "0.05em",
                    }}
                  >
                    GUARANTEED
                  </span>
                )}

                <p
                  className="mt-3 text-[13px] font-semibold uppercase"
                  style={{
                    color: "#332B49",
                    letterSpacing: "0.06em",
                    lineHeight: 1.35,
                  }}
                >
                  {stat.label}
                </p>

                {stat.sub && !stat.emphasize && (
                  <p
                    className="mt-1 text-[12.5px]"
                    style={{
                      color: "#75708A",
                      lineHeight: 1.4,
                    }}
                  >
                    {stat.sub}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx global>{`
        .scrollbar-none::-webkit-scrollbar {
          display: none;
        }
        .stat-value {
          font-weight: 600 !important;
        }
      `}</style>
    </section>
  );
}
