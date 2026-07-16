import { Cpu, Cloud, ShieldCheck, ChevronRight, GraduationCap, Handshake, Target } from "lucide-react";

/**
 * ResultsCard — bento-grid stat showcase: four soft rose-pink tiles in a
 * 2x2 block on the left, and one larger rose-pink "hero" card spanning the
 * full height on the right. Numbers are bold black, labels carry the same
 * accent-color rotation used in the hero's stats strip.
 */

const TILE_BG = ["#D8FA4C", "#A6D8F7", "#D3C2F0", "#FCE2B8"];
const HERO_BG = "#F2F2F5";
const NUMBER_COLOR = "#111827";
const LABEL_COLOR = "rgba(17,24,39,0.7)";
const ICON_COLOR = "rgba(17,24,39,0.65)";
const DIVIDER_COLOR = "rgba(17,24,39,0.12)";
const PILL_BG = "#111827";

const TILES = [
  {
    value: "7",
    label: "Fellowship Programs",
    desc: "For eligible fellows, every cohort.",
  },
  {
    value: "1:8",
    label: "Mentor-to-Fellow Ratio",
    desc: "Real mentors, small cohorts.",
  },
  {
    value: "150+",
    label: "Hiring Partners",
   desc: " Actively hiring, right now.",
  },
  {
    value: "95%",
    label: "Placement Rate",
    pillText: "Guaranteed",
  },
];

const HERO = {
  value: "100%",
  headline: "Built and Delivered by a Leading Technology Company",
  footer: "A technology company's fellowship.",
};

function MiniBars() {
  const heights = [30, 45, 60, 78, 95];
  return (
    <div className="flex items-end gap-1.5" aria-hidden="true">
      {heights.map((h, i) => (
        <div
          key={i}
          className="w-2.5 rounded-full"
          style={{ height: `${h * 0.4}px`, backgroundColor: "rgba(17,24,39,0.25)" }}
        />
      ))}
    </div>
  );
}

const CAPABILITY_BARS = [
  { label: "AI Engineering", fill: 90 },
  { label: "Cloud & DevOps", fill: 78 },
  { label: "Security & Compliance", fill: 82 },
];

function CapabilityBars({ color }: { color: string }) {
  return (
    <div className="mt-6 flex flex-col gap-3">
      {CAPABILITY_BARS.map((row, i) => (
        <div key={i}>
          <p className="mb-1.5 text-xs font-medium" style={{ color, opacity: 0.65 }}>
            {row.label}
          </p>
          <div className="h-1.5 w-full rounded-full" style={{ backgroundColor: "rgba(20,20,20,0.08)" }}>
            <div className="h-1.5 rounded-full" style={{ width: `${row.fill}%`, backgroundColor: color }} />
          </div>
        </div>
      ))}
    </div>
  );
}

function ArrowButton({ bg = "#141414" }: { bg?: string }) {
  return (
    <span
      className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full"
      style={{ backgroundColor: bg, color: "#FFFFFF" }}
      aria-hidden="true"
    >
      <ChevronRight size={16} strokeWidth={2.5} />
    </span>
  );
}

export default function ResultsCard() {
  return (
    <section className="w-full bg-white py-12">
      <style
        dangerouslySetInnerHTML={{
          __html: `
        @keyframes bentoFadeUp {
          from { opacity: 0; transform: translateY(18px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .bento-fade-up {
          opacity: 0;
          animation: bentoFadeUp 0.6s ease-out forwards;
        }
        @media (prefers-reduced-motion: reduce) {
          .bento-fade-up { animation: none !important; opacity: 1 !important; }
        }
      `,
        }}
      />

      <div className="mx-auto max-w-6xl px-4 sm:px-6 md:px-10 lg:px-16 xl:px-20">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-12 lg:auto-rows-auto">
          {/* Tile 1 */}
          <div
            className="bento-fade-up relative flex sm:min-h-[200px] flex-col rounded-[28px] p-6 sm:p-7 lg:col-span-4 lg:col-start-1 lg:row-start-1"
            style={{ backgroundColor: TILE_BG[0], animationDelay: "0ms" }}
          >
            <GraduationCap size={20} style={{ color: ICON_COLOR }} aria-hidden="true" />
            <div className="mt-6">
              <div
                className="font-heading text-5xl font-extrabold tracking-tight sm:text-6xl"
                style={{ color: NUMBER_COLOR }}
              >
                {TILES[0].value}
              </div>
              <p className="mt-2 text-base font-semibold" style={{ color: LABEL_COLOR }}>
                {TILES[0].label}
              </p>
              <div className="mt-3 h-px w-full" style={{ backgroundColor: DIVIDER_COLOR }} />
              <p className="mt-3 text-sm leading-snug" style={{ color: NUMBER_COLOR, opacity: 0.6 }}>
                {TILES[0].desc}
              </p>
            </div>
          </div>

          {/* Tile 2 */}
          <div
            className="bento-fade-up relative flex sm:min-h-[200px] flex-col rounded-[28px] p-6 sm:p-7 lg:col-span-3 lg:col-start-5 lg:row-start-1"
            style={{ backgroundColor: TILE_BG[1], animationDelay: "90ms" }}
          >
            <Cpu size={20} style={{ color: ICON_COLOR }} aria-hidden="true" />
            <div className="mt-6">
              <div
                className="font-heading text-5xl font-extrabold tracking-tight sm:text-6xl"
                style={{ color: NUMBER_COLOR }}
              >
                {TILES[1].value}
              </div>
              <p className="mt-2 text-base font-semibold" style={{ color: LABEL_COLOR }}>
                {TILES[1].label}
              </p>
              <div className="mt-3 h-px w-full" style={{ backgroundColor: DIVIDER_COLOR }} />
              <p className="mt-3 text-sm leading-snug" style={{ color: NUMBER_COLOR, opacity: 0.6 }}>
                {TILES[1].desc}
              </p>
            </div>
          </div>

          {/* Tile 3 */}
          <div
            className="bento-fade-up relative flex sm:min-h-[200px] flex-col rounded-[28px] p-6 sm:p-7 lg:col-span-4 lg:col-start-1 lg:row-start-2"
            style={{ backgroundColor: TILE_BG[2], animationDelay: "180ms" }}
          >
            <Handshake size={20} style={{ color: ICON_COLOR }} aria-hidden="true" />
            <div className="mt-6 flex items-end justify-between gap-4">
              <div>
                <div
                  className="font-heading text-5xl font-extrabold tracking-tight sm:text-6xl"
                  style={{ color: NUMBER_COLOR }}
                >
                  {TILES[2].value}
                </div>
                <p className="mt-2 text-base font-semibold" style={{ color: LABEL_COLOR }}>
                  {TILES[2].label}
                </p>
                   <p className="mt-3 text-sm leading-snug" style={{ color: NUMBER_COLOR, opacity: 0.6 }}>
                {TILES[2].desc}
              </p>
              </div>
              <MiniBars />
            </div>
          </div>

          {/* Tile 4 */}
          <div
            className="bento-fade-up relative flex sm:min-h-[200px] flex-col rounded-[28px] p-6 sm:p-7 lg:col-span-3 lg:col-start-5 lg:row-start-2"
            style={{ backgroundColor: TILE_BG[3], animationDelay: "270ms" }}
          >
            <div className="flex items-start justify-between">
              <Target size={20} style={{ color: ICON_COLOR }} aria-hidden="true" />
              <span
                className="rounded-full px-3 py-1 text-xs font-semibold"
                style={{ backgroundColor: PILL_BG, color: "#FFFFFF" }}
              >
                {TILES[3].pillText}
              </span>
            </div>
            <div className="mt-6">
              <div
                className="font-heading text-5xl font-extrabold tracking-tight sm:text-6xl"
                style={{ color: NUMBER_COLOR }}
              >
                {TILES[3].value}
              </div>
              <p className="mt-2 text-base font-semibold" style={{ color: LABEL_COLOR }}>
                {TILES[3].label}
              </p>
            </div>
          </div>

          {/* Hero — spans full height on the right */}
          <div
            className="bento-fade-up relative flex flex-col rounded-[28px] p-6 sm:col-span-2 sm:p-8 lg:col-span-5 lg:col-start-8 lg:row-span-2 lg:row-start-1"
            style={{ backgroundColor: HERO_BG, animationDelay: "360ms" }}
          >
            <div className="flex items-start justify-between">
              <div
                className="font-heading text-6xl font-extrabold tracking-tight sm:text-7xl"
                style={{ color: NUMBER_COLOR }}
              >
                {HERO.value}
              </div>
              <span
                className="rounded-full px-3 py-1 text-xs font-semibold"
                style={{ backgroundColor: PILL_BG, color: "#FFFFFF" }}
              >
                Verified
              </span>
            </div>

            <p className="mt-3 max-w-xs text-lg font-semibold leading-snug" style={{ color: NUMBER_COLOR }}>
              {HERO.headline}
            </p>

            <div className="mt-6 flex gap-3">
              {[Cpu, Cloud, ShieldCheck].map((IconCmp, i) => (
                <span
                  key={i}
                  className="flex h-12 w-12 items-center justify-center rounded-full"
                  style={{ backgroundColor: "#FFFFFF", border: "1px solid rgba(17,24,39,0.1)" }}
                >
                  <IconCmp size={18} style={{ color: NUMBER_COLOR }} />
                </span>
              ))}
            </div>

            <CapabilityBars color={NUMBER_COLOR} />

            <div
              className="mt-auto flex items-center justify-between border-t pt-5"
              style={{ borderColor: DIVIDER_COLOR }}
            >
              <p className="max-w-[220px] text-sm leading-snug" style={{ color: NUMBER_COLOR, opacity: 0.65 }}>
                {HERO.footer}
              </p>
              <ArrowButton bg={NUMBER_COLOR} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
