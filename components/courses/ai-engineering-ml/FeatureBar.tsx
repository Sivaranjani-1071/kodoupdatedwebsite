"use client";

import React, { useEffect, useRef, useState } from "react";

/* ------------------------------------------------------------------ */
/*  Types & data                                                       */
/* ------------------------------------------------------------------ */

interface Tech {
  name: string;
  /** simple-icons slug (rendered from cdn.simpleicons.org) */
  slug?: string;
  /** full icon url – overrides `slug` when provided */
  src?: string;
  /** render as a styled text logo instead of an image (e.g. "bolt") */
  text?: string;
}

interface RowData {
  label: string;
  items: Tech[];
}

/** uniform dark-teal tint applied to all simple-icons logos */
const ICON_COLOR = "134E4A";

const ROWS: RowData[] = [
  {
    label: "Programming & Machine Learning",
    items: [
      { name: "Python", slug: "python" },
      { name: "NumPy", slug: "numpy" },
      { name: "Pandas", slug: "pandas" },
      { name: "Scikit-learn", slug: "scikitlearn" },
      { name: "XGBoost", text: "XGB" },
    ],
  },
  {
    label: "Deep Learning & NLP",
    items: [
      { name: "TensorFlow", slug: "tensorflow" },
      { name: "PyTorch", slug: "pytorch" },
      { name: "Hugging Face Transformers", slug: "huggingface" },
      { name: "OpenCV", slug: "opencv" },
    ],
  },
  {
    label: "Generative AI & Deployment",
    items: [
      { name: "OpenAI API", slug: "openai" },
      { name: "LangChain", slug: "langchain" },
      { name: "Vector Databases (Pinecone, FAISS)", text: "VDB" },
      { name: "Docker", slug: "docker" },
      { name: "FastAPI", slug: "fastapi" },
      {
        name: "AWS SageMaker",
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg",
      },
    ],
  },
];

/* ------------------------------------------------------------------ */
/*  Marquee behaviour                                                  */
/* ------------------------------------------------------------------ */

/** how many times the item list is repeated to create a seamless loop */
const COPIES = 3;
/** auto-scroll speed (px / second) */
const SPEED = 38;
/** distance travelled per arrow click (px) */
const NUDGE_DISTANCE = 220;
/** easing speed of an arrow nudge (px / second) */
const NUDGE_SPEED = 900;

function MarqueeRow({ label, items }: RowData) {
  const trackRef = useRef<HTMLDivElement>(null);
  const offset = useRef(0);
  const nudge = useRef(0);
  const paused = useRef(false);

  useEffect(() => {
    let raf = 0;
    let last = performance.now();

    const step = (now: number) => {
      const dt = Math.min((now - last) / 1000, 0.05);
      last = now;

      let delta = paused.current ? 0 : SPEED * dt;

      // ease pending arrow-nudge distance into the motion
      if (nudge.current !== 0) {
        const move =
          Math.sign(nudge.current) *
          Math.min(Math.abs(nudge.current), NUDGE_SPEED * dt);
        delta += move;
        nudge.current -= move;
      }

      offset.current += delta;

      const track = trackRef.current;
      if (track) {
        const loopWidth = track.scrollWidth / COPIES;
        if (loopWidth > 0) {
          // wrap into [0, loopWidth) so the loop is endless in both directions
          offset.current =
            ((offset.current % loopWidth) + loopWidth) % loopWidth;
        }
        track.style.transform = `translate3d(${-offset.current}px, 0, 0)`;
      }

      raf = requestAnimationFrame(step);
    };

    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, []);

  const handleArrow = (direction: -1 | 1) => {
    nudge.current += direction * NUDGE_DISTANCE;
  };

  return (
    <div className="fb-row">
      <span className="fb-pill">{label}</span>

      <div
        className="fb-panel"
        onMouseEnter={() => (paused.current = true)}
        onMouseLeave={() => (paused.current = false)}
      >
        <button
          type="button"
          className="fb-arrow fb-arrow-left"
          aria-label={`Scroll ${label} technologies left`}
          onClick={() => handleArrow(-1)}
        >
          <ChevronIcon direction="left" />
        </button>

        <div className="fb-viewport">
          <div className="fb-track" ref={trackRef}>
            {Array.from({ length: COPIES }).map((_, copy) =>
              items.map((item) => (
                <TechItem key={`${copy}-${item.name}`} item={item} />
              )),
            )}
          </div>
        </div>

        <button
          type="button"
          className="fb-arrow fb-arrow-right"
          aria-label={`Scroll ${label} technologies right`}
          onClick={() => handleArrow(1)}
        >
          <ChevronIcon direction="right" />
        </button>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Small pieces                                                       */
/* ------------------------------------------------------------------ */

function TechItem({ item }: { item: Tech }) {
  return (
    <div className="fb-item">
      {item.text ? (
        <span className="fb-text-logo">{item.text}</span>
      ) : (
        <TechIcon item={item} />
      )}
      <span className="fb-name">{item.name}</span>
    </div>
  );
}

function TechIcon({ item }: { item: Tech }) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    // graceful fallback when an icon can't be loaded
    return (
      <span className="fb-icon-fallback" aria-hidden="true">
        {item.name.slice(0, 2)}
      </span>
    );
  }

  const src =
    item.src ?? `https://cdn.simpleicons.org/${item.slug}/${ICON_COLOR}`;

  return (
    <img
      className="fb-icon"
      src={src}
      alt={item.name}
      loading="lazy"
      draggable={false}
      onError={() => setFailed(true)}
    />
  );
}

function ChevronIcon({ direction }: { direction: "left" | "right" }) {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {direction === "left" ? (
        <polyline points="15 18 9 12 15 6" />
      ) : (
        <polyline points="9 18 15 12 9 6" />
      )}
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/*  Styles                                                             */
/* ------------------------------------------------------------------ */

const css = `
.fb-section {
  background: #ffffff;
  padding: 56px 16px 32px;
  overflow: hidden;
}

@media (min-width: 640px) {
  .fb-section {
    padding: 64px 24px 36px;
  }
}

@media (min-width: 768px) {
  .fb-section {
    padding: 68px 40px 38px;
  }
}

@media (min-width: 1024px) {
  .fb-section {
    padding: 72px 64px 40px;
  }
}

@media (min-width: 1280px) {
  .fb-section {
    padding: 72px 80px 40px;
  }
}

.fb-title {
  margin: 0 0 110px;
  text-align: center;
  font-size: clamp(30px, 4vw, 42px);
  font-weight: 800;
  letter-spacing: -0.02em;
  color: #0b1220;
}

.fb-row {
  position: relative;
  max-width: 1250px;
  margin: 0 auto 66px;
}

.fb-row:last-child {
  margin-bottom: 24px;
}

.fb-pill {
  position: absolute;
  top: -30px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 2;
  background: #10b981;
  color: #ffffff;
  font-size: 16px;
  font-weight: 600;
  line-height: 1;
  padding: 11px 24px;
  border-radius: 9999px;
  white-space: nowrap;
}

.fb-panel {
  position: relative;
  background: #edf6f2;
  border-radius: 16px;
  padding: 34px 0;
}

.fb-viewport {
  overflow: hidden;
}

.fb-track {
  display: flex;
  align-items: stretch;
  width: max-content;
  will-change: transform;
}

.fb-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  width: 150px;
  margin-right: 34px;
  flex-shrink: 0;
}

.fb-icon {
  height: 48px;
  width: 48px;
  object-fit: contain;
  user-select: none;
}

.fb-icon-fallback {
  height: 48px;
  width: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
  background: #134e4a;
  color: #ffffff;
  font-size: 16px;
  font-weight: 700;
}

.fb-text-logo {
  height: 48px;
  display: flex;
  align-items: center;
  font-size: 30px;
  font-weight: 800;
  font-style: italic;
  letter-spacing: -0.03em;
  color: #0b1220;
}

.fb-name {
  margin-top: 14px;
  font-size: 14px;
  font-weight: 600;
  color: #55666c;
  white-space: nowrap;
}

.fb-arrow {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  padding: 0;
  border: none;
  border-radius: 9999px;
  background: transparent;
  color: #94a8ad;
  cursor: pointer;
  transition: color 0.2s ease, background 0.2s ease;
}

.fb-arrow:hover {
  color: #134e4a;
  background: rgba(19, 78, 74, 0.08);
}

.fb-arrow-left {
  left: 14px;
}

.fb-arrow-right {
  right: 14px;
}

@media (max-width: 640px) {
  .fb-title {
    margin-bottom: 84px;
  }

  .fb-row {
    margin-bottom: 88px;
  }

  .fb-item {
    width: 118px;
    margin-right: 22px;
  }

  .fb-arrow {
    display: none;
  }
}
`;

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */

export default function FeatureBar() {
  return (
    <section className="fb-section">
      <style dangerouslySetInnerHTML={{ __html: css }} />

      <h2 className="fb-title">Technologies You&apos;ll Master</h2>

      {ROWS.map((row) => (
        <MarqueeRow key={row.label} {...row} />
      ))}
    </section>
  );
}
