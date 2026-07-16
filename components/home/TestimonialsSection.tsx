"use client";

import { useEffect, useRef, useState } from "react";

type Testimonial = {
  quote: string;
  name: string;
  role: string;
  bgColor: string;
};

const testimonials: Testimonial[] = [
  {
    quote:
      "Hands-on product development during my internship helped me bridge theory with practice. I gained clarity on building applications and applying AI & ML concepts in real systems, making it a turning point in my learning journey.",
    name: "Gayathri Anandh",
    role: "Product Intern",
    bgColor: "#FDE2E2",
  },
  {
    quote:
      "KodoWorks provided immersive, hands-on training that built a good understanding in software development principles and backend concepts. It sharpened my problem-solving abilities, deepened my understanding of industry practices, and ultimately empowered me to step confidently into real-world development roles.",
    name: "Ajith Kumar C",
    role: "Junior Programmer",
    bgColor: "#FEF3C7",
  },
  {
    quote:
      "KodoWorks gave me a solid foundation in Java, Python, and SpringBoot, while sharpening my technical skills through hands-on learning. Thanks to KodoWorks employer network, I secured a placement and was able to step confidently into my career.",
    name: "Suriya Prabakaran",
    role: "Junior Programmer",
    bgColor: "#DBEAFE",
  },
  {
    quote:
      "KodoWorks transformed my technical skills and equipped me with core, industry-ready expertise in software development. It was pivotal in shaping my career path, preparing me for the next stage of professional growth, and supporting me with successful placement assistance.",
    name: "Sunil Kumar A",
    role: "Junior Programmer",
    bgColor: "#FBD9CE",
  },
  {
    quote:
      "KodoWorks AI & ML Program combines structured learning, fundamentals, and mentorship to sharpen coding and problem-solving skills. For learners willing to put in consistent effort, it's the perfect program — and with their placement assistance, I successfully transitioned into employment.",
    name: "Dineshraj N",
    role: "Junior AI & ML Engineer",
    bgColor: "#E5DBFF",
  },
];

// Number of cards visible at once — used to size each slide relative to the
// track container so the slider loops smoothly.
const CARDS_VISIBLE = 3;

function TestimonialsSlider({ items }: { items: Testimonial[] }) {
  const trackRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const animRef = useRef<number | null>(null);
  const posRef = useRef(0);
  const [itemWidth, setItemWidth] = useState(0);
  const speed = 0.4;

  const loopedItems = [...items, ...items, ...items];

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const update = () => {
      const visible = window.innerWidth < 640 ? 1 : window.innerWidth < 1024 ? 2 : CARDS_VISIBLE;
      setItemWidth(container.offsetWidth / visible);
    };

    update();
    const ro = new ResizeObserver(update);
    ro.observe(container);
    return () => ro.disconnect();
  }, []);

  const runLoop = () => {
    const track = trackRef.current;
    if (!track || itemWidth === 0) return;
    const singleSetWidth = itemWidth * items.length;

    const step = () => {
      if (!track) return;
      posRef.current += speed;
      if (posRef.current >= singleSetWidth) posRef.current -= singleSetWidth;
      track.style.transform = `translateX(-${posRef.current}px)`;
      animRef.current = requestAnimationFrame(step);
    };

    animRef.current = requestAnimationFrame(step);
  };

  useEffect(() => {
    runLoop();
    return () => {
      if (animRef.current) cancelAnimationFrame(animRef.current);
    };
  }, [itemWidth, items.length]);

  const pause = () => {
    if (animRef.current) cancelAnimationFrame(animRef.current);
  };

  const resume = () => {
    runLoop();
  };

  // Manual nudge — cancels the continuous drift, snaps one card width in the
  // given direction with a short eased transition, then hands control back
  // to the auto-loop once the transition finishes.
  const nudge = (direction: 1 | -1) => {
    const track = trackRef.current;
    if (!track || itemWidth === 0) return;
    const singleSetWidth = itemWidth * items.length;

    pause();
    posRef.current += direction * itemWidth;
    if (posRef.current < 0) posRef.current += singleSetWidth;
    if (posRef.current >= singleSetWidth) posRef.current -= singleSetWidth;

    track.style.transition = "transform 400ms ease";
    track.style.transform = `translateX(-${posRef.current}px)`;

    window.setTimeout(() => {
      track.style.transition = "";
      resume();
    }, 400);
  };

  return (
    <div
      ref={containerRef}
      className="relative w-full"
      onMouseEnter={pause}
      onMouseLeave={resume}
      onTouchStart={pause}
      onTouchEnd={resume}
    >
      {/* Prev arrow */}
      <button
        type="button"
        onClick={() => nudge(-1)}
        aria-label="Previous testimonials"
        className="hidden md:flex items-center justify-center absolute -left-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors shadow-md"
      >
        <ChevronIcon direction="left" />
      </button>

      {/* Next arrow */}
      <button
        type="button"
        onClick={() => nudge(1)}
        aria-label="Next testimonials"
        className="hidden md:flex items-center justify-center absolute -right-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors shadow-md"
      >
        <ChevronIcon direction="right" />
      </button>

      <div className="overflow-hidden">
        <div
          ref={trackRef}
          className="flex items-stretch will-change-transform"
          style={{
            width: itemWidth > 0 ? `${itemWidth * loopedItems.length}px` : "max-content",
          }}
        >
          {loopedItems.map((testimonial, i) => (
            <div
              key={`${testimonial.name}-${i}`}
              className="flex-shrink-0 px-4"
              style={{ width: itemWidth > 0 ? `${itemWidth}px` : "auto" }}
            >
              <TestimonialCard testimonial={testimonial} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function TestimonialsSection() {
  return (
    <section className="relative bg-white py-12 px-4 sm:px-6 md:px-10 lg:px-16 xl:px-20 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-center text-4xl font-bold text-[#0B1727] mb-16">
          From Learning to Placement — Voices of Success
        </h2>

        <TestimonialsSlider items={testimonials} />
      </div>
    </section>
  );
}

function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <div className="flex flex-col items-center text-center h-full">
      {/* Speech bubble */}
      <div className="relative w-full flex-1 flex flex-col">
        <div
          className="rounded-[28px] px-8 py-10 flex-1 flex items-center justify-center"
          style={{ backgroundColor: testimonial.bgColor }}
        >
          <p className="text-[#173430] text-sm leading-relaxed">
            &ldquo;{testimonial.quote}&rdquo;
          </p>
        </div>
        {/* Bubble tail */}
        <div
          className="absolute left-1/2 -bottom-3 w-6 h-6 rotate-45 -translate-x-1/2"
          style={{ backgroundColor: testimonial.bgColor }}
        />
      </div>

      {/* Name & role */}
      <h3 className="mt-4 text-xl font-bold text-[#0B1727]">
        {testimonial.name}
      </h3>
      <p className="text-gray-500 mt-1">{testimonial.role}</p>
    </div>
  );
}

function ChevronIcon({ direction }: { direction: "left" | "right" }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-5 h-5 text-gray-600"
    >
      {direction === "left" ? (
        <polyline points="15 18 9 12 15 6" />
      ) : (
        <polyline points="9 18 15 12 9 6" />
      )}
    </svg>
  );
}
