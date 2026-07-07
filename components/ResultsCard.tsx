"use client";

/**
 * ResultsCard — "systems readout" stat strip.
 *
 * Design direction:
 * - Subject is a tech fellowship program (AI, Cloud, Data, Security), so the
 *   stats are treated like a status/telemetry board rather than a generic
 *   marketing stat grid.
 * - Big numbers set in monospace (dashboard-readout feel), labels in a
 *   clean sans for contrast.
 * - Signature move: a thin "fill bar" under each number that lights up on
 *   mount with a soft blue glow (rgb(235 243 255 / 50%)) — like an
 *   indicator coming online — plus hairline dividers between stats so the
 *   row reads as one connected panel instead of separate cards.
 * - Backing card kept as a warm offset shadow (unchanged palette anchor),
 *   but the interior is restyled.
 */

const STATS = [
  {
    value: "7",
    label: "Fellowship Programs",
    desc: "Across AI, Cloud, Data, Security & More",
  },
  {
    value: "1:8",
    label: "Mentor-to-Student Ratio",
    desc: null,
  },
  {
    value: "390+",
    label: "Hours of Live Instruction",
    desc: null,
  },
  {
    value: "80%+",
    label: "Score Unlocks Guaranteed Placement",
    desc: null,
  },
  {
    value: "Global",
    label: "Powered by ExpertsPro",
    desc: "McKinney, Texas & Coimbatore",
  },
];

export default function ResultsCard() {
  return (
    <section
      className="relative hidden w-full overflow-hidden py-14 sm:block sm:py-20"
      style={{
        backgroundColor: "#FFFFFF",
        backgroundImage:
          "radial-gradient(rgba(35,43,61,0.05) 1px, transparent 1px)",
        backgroundSize: "18px 18px",
      }}
    >
      <style
        dangerouslySetInnerHTML={{
          __html: `
        @keyframes statFadeUp {
          from { opacity: 0; transform: translateY(16px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes barFill {
          from { width: 0%; box-shadow: none; }
          to {
            width: 100%;
            box-shadow: 0 0 12px 2px rgb(235 243 255 / 80%), 0 0 2px rgb(190 215 255 / 90%);
          }
        }
        .stat-fade-up {
          opacity: 0;
          animation: statFadeUp 0.6s ease-out forwards;
        }
        .stat-bar-fill {
          width: 0%;
          animation: barFill 1.1s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        .stat-mono {
          font-family: "IBM Plex Mono", "JetBrains Mono", ui-monospace, SFMono-Regular, Menlo, monospace;
        }
        @media (prefers-reduced-motion: reduce) {
          .stat-fade-up, .stat-bar-fill {
            animation: none !important;
            opacity: 1 !important;
            width: 100% !important;
          }
        }
      `,
        }}
      />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-8">
        <div className="relative">
          {/* offset backing card, peeks from behind top-right / bottom-right */}
          <div
            className="absolute rounded-[40px]"
            style={{
              backgroundColor: "rgb(247 235 215)",
              top: "10px",
              right: "-10px",
              bottom: "-10px",
              left: "10px",
            }}
            aria-hidden="true"
          />

          {/* main card */}
          <div
            className="relative rounded-[40px] border px-6 py-10 sm:px-12 sm:py-14"
            style={{
              backgroundColor: "rgb(255 251 244)",
              borderColor: "rgb(247 235 215)",
              boxShadow: "0 30px 60px -20px rgba(35,43,61,0.14)",
            }}
          >
            {/* ambient blue glow, top-left corner — the accent color in use */}
            <div
              className="pointer-events-none absolute left-0 top-0 h-64 w-64 rounded-[40px]"
              style={{
                background:
                  "radial-gradient(circle at top left, rgb(235 243 255 / 50%), transparent 70%)",
              }}
              aria-hidden="true"
            />

            <div className="relative flex items-center gap-2 text-xs font-medium uppercase tracking-[0.2em]" style={{ color: "#9B9FA6" }}>
              <span
                className="inline-block h-1.5 w-1.5 rounded-full"
                style={{
                  backgroundColor: "#7FB2FF",
                  boxShadow: "0 0 8px 2px rgb(235 243 255 / 90%)",
                }}
                aria-hidden="true"
              />
              Program Status
            </div>

            {/* stats row */}
            <div className="relative mt-8 grid grid-cols-2 gap-x-6 gap-y-10 sm:mt-10 sm:grid-cols-3 lg:grid-cols-5 sm:gap-x-0">
              {STATS.map((stat, i) => {
                const isLast = i === STATS.length - 1;
                const isFirstInRow = i === 0;
                return (
                  <div
                    key={stat.label}
                    className={`stat-fade-up relative sm:px-6 ${
                      isLast
                        ? "col-span-2 flex flex-col items-center text-center sm:col-span-1 sm:items-start sm:text-left"
                        : ""
                    } ${!isFirstInRow ? "sm:border-l" : ""}`}
                    style={{
                      animationDelay: `${i * 120}ms`,
                      borderColor: !isFirstInRow ? "rgba(35,43,61,0.08)" : undefined,
                    }}
                  >
                    <div
                      className="stat-mono tracking-tight"
                      style={{
                        fontSize: "clamp(2.1rem, 4.6vw, 3rem)",
                        color: "#1B2233",
                        lineHeight: 1,
                        fontWeight: 500,
                      }}
                    >
                      {stat.value}
                    </div>

                    {/* signature: telemetry fill bar */}
                    <div
                      className="mt-3 h-[3px] w-10 rounded-full"
                      style={{ backgroundColor: "rgba(35,43,61,0.08)" }}
                    >
                      <div
                        className="stat-bar-fill h-full rounded-full"
                        style={{
                          backgroundColor: "#BFDBFF",
                          animationDelay: `${i * 120 + 300}ms`,
                        }}
                      />
                    </div>

                    <p
                      className="mt-4 text-base"
                      style={{ color: "#232B3D", fontWeight: 500 }}
                    >
                      {stat.label}
                    </p>
                    {stat.desc && (
                      <p
                        className="mt-1 text-sm leading-snug"
                        style={{ color: "#9B9FA6" }}
                      >
                        {stat.desc}
                      </p>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
