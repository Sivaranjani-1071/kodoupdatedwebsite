"use client";

/**
 * ContactSection.tsx
 * ------------------------------------------------------------------
 * KodoWorks — Book Now page section (Next.js App Router, client component)
 *
 * Layout:
 *  - SECTION 1: Page hero (dark gradient background with radial overlays).
 *  - SECTION 2: Centered Calendly scheduling widget.
 * ------------------------------------------------------------------
 */

import Script from "next/script";

export default function ContactSection() {
  return (
    <main style={{ backgroundColor: "rgb(246 241 234 / 19%)" }}>
      {/* ============================================================
          SECTION 1 — PAGE HERO
          ============================================================ */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950">
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 15% 20%, rgba(251,113,133,0.18), transparent 45%)," +
              "radial-gradient(circle at 85% 15%, rgba(251,191,36,0.15), transparent 45%)," +
              "radial-gradient(circle at 25% 90%, rgba(52,211,153,0.15), transparent 45%)," +
              "radial-gradient(circle at 80% 85%, rgba(56,189,248,0.18), transparent 45%)",
          }}
          aria-hidden="true"
        />
        <div className="relative mx-auto max-w-6xl px-4 py-14 text-center sm:px-6 sm:py-16 md:px-10 md:py-20 lg:px-16 lg:py-16 xl:px-20">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Ready To Join?{" "}
            <span className="bg-gradient-to-r from-rose-300 via-amber-200 to-sky-300 bg-clip-text text-transparent">
              Let&rsquo;s Connect
            </span>
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg">
            Our team of experts is ready to collaborate with you every step of the way, from
            initial consultation to admission.
          </p>
          <div className="mt-8 flex items-center justify-center gap-2" aria-hidden="true">
            <span className="h-2 w-2 rounded-full bg-rose-300" />
            <span className="h-2 w-2 rounded-full bg-amber-300" />
            <span className="h-2 w-2 rounded-full bg-emerald-300" />
            <span className="h-2 w-2 rounded-full bg-sky-300" />
          </div>
        </div>
      </section>

      {/* ============================================================
          SECTION 2 — SCHEDULE A CALL (Calendly, centered)
          ============================================================ */}
      <section className="px-4 py-14 sm:px-6 sm:py-16 md:px-10 md:py-20 lg:px-16 xl:px-20">
        <div className="mb-8 text-center">
          <h2 className="font-serif text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
            Schedule a Call
          </h2>
          <p className="mx-auto mt-4 max-w-md text-base text-slate-600">
            Pick a time that works for you and our team will meet you there.
          </p>
        </div>

        <div
          className="calendly-inline-widget mx-auto w-full max-w-5xl"
          data-url="https://calendly.com/contact-kodoworks/30min"
          style={{ minWidth: "320px", height: "700px" }}
        />

        <Script
          src="https://assets.calendly.com/assets/external/widget.js"
          strategy="lazyOnload"
        />
      </section>
    </main>
  );
}
