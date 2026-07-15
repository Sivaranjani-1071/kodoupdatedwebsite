'use client'

import { useRef, useEffect, useState } from 'react'

// ---------------------------------------------
// Content (move this into content.json / data.json
// if you're following the existing content-source pattern)
// ---------------------------------------------
const toolsContent = {
  heading: "Trained on the Tools Powering the Future of Work",
  subheading:
    "Every KodoWorks fellow builds hands-on experience with the platforms and technologies that enterprise teams rely on every day.",
  tools: [
    {
      name: "Python",
      slug: "python",
      color: "3776AB",
    },
    {
      name: "AWS",
      slug: "amazonaws",
      color: "232F3E",
      localSrc: "/Course logo 21.png",
    },
    {
      name: "Google Cloud",
      slug: "googlecloud",
      color: "4285F4",
    },
    {
      name: "Kubernetes",
      slug: "kubernetes",
      color: "326CE5",
    },
    {
      name: "Docker",
      slug: "docker",
      color: "2496ED",
    },
    {
      name: "Tableau",
      slug: "tableau",
      color: "E97627",
      localSrc: "/Course logo 17.png",
    },
    {
      name: "Power BI",
      slug: "powerbi",
      color: "F2C811",
      localSrc: "/Course logo 15.png",
    },
    {
      name: "TensorFlow",
      slug: "tensorflow",
      color: "FF6F00",
    },
    {
      name: "OpenAI",
      slug: "openai",
      color: "412991",
      localSrc: "/Course logo 12.png",
    },
    {
      name: "Terraform",
      slug: "terraform",
      color: "844FBA",
    },
    {
      name: "MongoDB",
      slug: "mongodb",
      color: "47A248",
    },
  ],
};

// Official brand marks served via the Simple Icons CDN (free, no install needed).
// Swap `iconUrl` for a locally hosted /public/icons/*.svg if you'd rather not
// depend on an external CDN in production.
const iconUrl = (slug: string, color: string) =>
  `https://cdn.simpleicons.org/${slug}/${color}`;

// Number of cards visible at once — used to size each slide relative to the
// track container so the slider loops smoothly.
const CARDS_VISIBLE = 6;

function ToolsSlider({
  tools,
}: {
  tools: { name: string; slug: string; color: string; localSrc?: string }[];
}) {
  const trackRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const animRef = useRef<number | null>(null);
  const posRef = useRef(0);
  const [itemWidth, setItemWidth] = useState(0);
  const speed = 0.5;

  const loopedTools = [...tools, ...tools, ...tools];

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

    const singleSetWidth = itemWidth * tools.length;

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
  }, [itemWidth, tools.length]);

  const pause = () => {
    if (animRef.current) cancelAnimationFrame(animRef.current);
  };

  const resume = () => {
    const track = trackRef.current;
    if (!track || itemWidth === 0) return;
    const singleSetWidth = itemWidth * tools.length;

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
          width: itemWidth > 0 ? `${itemWidth * loopedTools.length}px` : 'max-content',
        }}
      >
        {loopedTools.map((tool, i) => (
          <div
            key={`${tool.slug}-${i}`}
            className="flex-shrink-0 px-3"
            style={{ width: itemWidth > 0 ? `${itemWidth}px` : 'auto' }}
          >
            <div className="flex h-full flex-col items-center justify-center gap-3 rounded-xl border border-gray-100 bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
              <div className="relative h-10 w-10 overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={tool.localSrc || iconUrl(tool.slug, tool.color)}
                  alt={`${tool.name} logo`}
                  className={`h-10 w-10 object-contain ${
                    tool.localSrc ? "scale-[1.85]" : ""
                  }`}
                  style={tool.localSrc ? { transformOrigin: "50% 40%" } : undefined}
                  loading="lazy"
                />
              </div>
              <span className="text-xs font-medium text-gray-700 md:text-sm">
                {tool.name}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function ToolsPoweringFutureSection() {
  const { heading, subheading, tools } = toolsContent;

  return (
    <section className="w-full bg-white py-6 sm:py-8 md:py-12 lg:py-16 px-4 sm:px-6 md:px-10 lg:px-16 xl:px-20">
      <div className="mx-auto max-w-6xl text-center">
        <h2 className="text-2xl font-bold text-gray-900 md:text-4xl">
          {heading}
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-sm text-gray-600 md:text-base">
          {subheading}
        </p>

        <ToolsSlider tools={tools} />
      </div>
    </section>
  );
}
