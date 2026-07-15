"use client";

/**
 * ContactSection.tsx
 * ------------------------------------------------------------------
 * KodoWorks — Contact Us page section (Next.js App Router, client component)
 *
 * Layout (Sprinter Health reference style — side-by-side split):
 *  - SECTION 1: Page hero (retain existing live hero banner on kodoworks.in —
 *    dark gradient background with image overlay. The markup below is a
 *    stand-in; swap in the live hero block as-is.)
 *  - SECTION 2: One large rounded split panel.
 *      LEFT  → default state: "Get in Touch" heading + 4 stacked clickable
 *              cards (icon chip left, title + description right).
 *      RIGHT → default state: image collage of all four topics.
 *  - On card click: the 4 cards fade out, the matching FORM fades in on the
 *    LEFT (with a "Back" button beside the form heading), and the RIGHT
 *    image crossfades to that card's topic image + pastel panel tint.
 *  - "Back" returns to the 4-card list and the default collage.
 *
 * Styling: Tailwind CSS.
 *
 * CAUTION (from approved content doc):
 *  - Card 4 ("I'm looking for a job") currently overlaps with Card 3, since
 *    KodoWorks' hiring network is only accessible through the fellowship
 *    program placement pathway. Confirm with the team whether Card 4 should
 *    be reworded or removed before development is finalized. Form 4 is
 *    pending the same confirmation.
 * ------------------------------------------------------------------
 */

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

/* ================================================================
   Types
   ================================================================ */

type FieldType = "text" | "email" | "tel" | "select" | "textarea";
type FieldWidth = "half" | "full";

interface FormField {
  name: string;
  label: string;
  placeholder?: string;
  type: FieldType;
  width: FieldWidth;
  options?: string[];
}

interface EnquiryForm {
  heading: string;
  subheading: string;
  buttonLabel: string;
  fields: FormField[];
}

/**
 * Per-card pastel theme. Classes are pre-composed static strings so the
 * Tailwind JIT compiler can see and generate every one of them.
 */
interface CardTheme {
  /** Solid pastel card fill. */
  cardBg: string;
  /** Slightly deeper pastel on hover. */
  cardHover: string;
  /** Icon color inside the white chip. */
  chipIcon: string;
  /** Deeper shade of the pastel, for accents. */
  accentText: string;
  /** Focus styles applied to inputs of this card's form. */
  inputFocus: string;
  /** Solid pastel fill for the right-side image panel. */
  imagePanel: string;
  /** Soft tint dot shown beside the form heading. */
  dot: string;
}

interface EnquiryCard {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  theme: CardTheme;
  /** Topic-relevant image shown on the right of the split panel. */
  imageSrc: string;
  imageAlt: string;
  form: EnquiryForm;
}

/* ================================================================
   Pastel themes — red, yellow, green, blue
   ================================================================ */

const THEMES: Record<"red" | "yellow" | "green" | "blue", CardTheme> = {
  /* Soft pastel red */
  red: {
    cardBg: "bg-[#F6CCC7]",
    cardHover: "hover:bg-[#F2BCB5]",
    chipIcon: "text-rose-700",
    accentText: "text-rose-800",
    inputFocus: "focus:border-rose-300 focus:ring-rose-200",
    imagePanel: "bg-[#F6CCC7]",
    dot: "bg-[#F6CCC7]",
  },
  /* Soft pastel yellow */
  yellow: {
    cardBg: "bg-[#F9DDB2]",
    cardHover: "hover:bg-[#F6D29A]",
    chipIcon: "text-amber-700",
    accentText: "text-amber-800",
    inputFocus: "focus:border-amber-300 focus:ring-amber-200",
    imagePanel: "bg-[#F9DDB2]",
    dot: "bg-[#F9DDB2]",
  },
  /* Soft pastel green */
  green: {
    cardBg: "bg-[#CDECD6]",
    cardHover: "hover:bg-[#BBE4C7]",
    chipIcon: "text-emerald-700",
    accentText: "text-emerald-800",
    inputFocus: "focus:border-emerald-300 focus:ring-emerald-200",
    imagePanel: "bg-[#CDECD6]",
    dot: "bg-[#CDECD6]",
  },
  /* Soft pastel blue */
  blue: {
    cardBg: "bg-[#C9DDF8]",
    cardHover: "hover:bg-[#B6D1F4]",
    chipIcon: "text-sky-700",
    accentText: "text-sky-800",
    inputFocus: "focus:border-sky-300 focus:ring-sky-200",
    imagePanel: "bg-[#C9DDF8]",
    dot: "bg-[#C9DDF8]",
  },
};

/* ================================================================
   Card icons (inline SVG, stroke inherits currentColor)
   ================================================================ */

const icons = {
  corporate: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6" aria-hidden="true">
      <path d="M3 21h18M5 21V5a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v16M15 9h4a1 1 0 0 1 1 1v11" />
      <path d="M8 8h2M8 12h2M8 16h2" />
    </svg>
  ),
  college: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6" aria-hidden="true">
      <path d="M22 10 12 5 2 10l10 5 10-5Z" />
      <path d="M6 12.5V17c0 1.1 2.7 2.5 6 2.5s6-1.4 6-2.5v-4.5M22 10v6" />
    </svg>
  ),
  program: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6" aria-hidden="true">
      <path d="M4.5 16.5 3 21l4.5-1.5M14.5 4.5c2.5-2 6-2.5 6-2.5s-.5 3.5-2.5 6c-1.6 2-4.2 4.6-6.5 6.5l-3.5-3.5c1.9-2.3 4.5-4.9 6.5-6.5Z" />
      <path d="M8 11.5 5.5 11 3 13.5l3 .5M12.5 16l.5 2.5L15.5 21l.5-3M14.5 8.5a1 1 0 1 0 2 0 1 1 0 0 0-2 0Z" />
    </svg>
  ),
  job: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6" aria-hidden="true">
      <rect x="3" y="7" width="18" height="13" rx="2" />
      <path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M3 12h18M12 11v3" />
    </svg>
  ),
};

/* ================================================================
   SECTION 2 — Final approved content (do not edit copy)
   ================================================================ */

const CARDS: EnquiryCard[] = [
  /* ---------- Card 1 → Form 1: Corporate Enquiry ---------- */
  {
    id: "corporate",
    title: "Corporate Enquiry",
    description:
      "Explore hiring pipelines, upskilling programs, or partnerships for your organization.",
    icon: icons.corporate,
    theme: THEMES.red,
    imageSrc: "/generative-ai.webp",
    imageAlt: "Corporate partnerships at KodoWorks",
    form: {
      heading: "Contact Corporate Partnerships",
      subheading:
        "Let's explore how we can build hiring pipelines, corporate upskilling, or campus programs together.",
      buttonLabel: "Submit",
      fields: [
        { name: "firstName", label: "First Name", placeholder: "Your First Name", type: "text", width: "half" },
        { name: "lastName", label: "Last Name", placeholder: "Your Last Name", type: "text", width: "half" },
        { name: "jobTitle", label: "Job Title", placeholder: "Your Job Title", type: "text", width: "half" },
        { name: "companyName", label: "Company Name", placeholder: "Your Company", type: "text", width: "half" },
        { name: "email", label: "Email", placeholder: "Your Email", type: "email", width: "half" },
        { name: "phone", label: "Phone", placeholder: "Your Phone Number", type: "tel", width: "half" },
        {
          name: "reason", label: "Reason for Contact", type: "select", width: "full",
          options: ["Hiring Partnership", "Corporate Upskilling", "Sponsorship", "Other"],
        },
        { name: "message", label: "Additional Information", placeholder: "Type your message...", type: "textarea", width: "full" },
      ],
    },
  },

  /* ---------- Card 2 → Form 2: College Enquiry ---------- */
  {
    id: "college",
    title: "College Enquiry",
    description:
      "Explore curriculum collaborations, training partnerships, or campus programs for your institution.",
    icon: icons.college,
    theme: THEMES.yellow,
    imageSrc: "/data-science.webp",
    imageAlt: "Institutional partnerships at KodoWorks",
    form: {
      heading: "Contact Institutional Partnerships",
      subheading: "Let's explore how KodoWorks can collaborate with your institution.",
      buttonLabel: "Submit",
      fields: [
        { name: "firstName", label: "First Name", placeholder: "Your First Name", type: "text", width: "half" },
        { name: "lastName", label: "Last Name", placeholder: "Your Last Name", type: "text", width: "half" },
        { name: "designation", label: "Designation", placeholder: "Your Designation", type: "text", width: "half" },
        { name: "institutionName", label: "Institution Name", placeholder: "Your Institution", type: "text", width: "half" },
        { name: "email", label: "Email", placeholder: "Your Email", type: "email", width: "half" },
        { name: "phone", label: "Phone", placeholder: "Your Phone Number", type: "tel", width: "half" },
        {
          name: "reason", label: "Reason for Contact", type: "select", width: "full",
          options: ["Curriculum Collaboration", "Training Partnership", "Guest Sessions", "Other"],
        },
        { name: "message", label: "Additional Information", placeholder: "Type your message...", type: "textarea", width: "full" },
      ],
    },
  },

  /* ---------- Card 3 → Form 3: Program Enquiry ---------- */
  {
    id: "program",
    title: "I'm interested in a Kodo Fellowship Program",
    description:
      "I want to know more about enrolling in one of KodoWorks' fellowship programs.",
    icon: icons.program,
    theme: THEMES.green,
    imageSrc: "/prompt-engineering.webp",
    imageAlt: "Kodo Fellowship Programs",
    form: {
      heading: "Enquire About a Kodo Fellowship Program",
      subheading:
        "Tell us which program you're interested in, and our team will call you back within 24 hours.",
      buttonLabel: "Send Request",
      fields: [
        { name: "fullName", label: "Full Name", placeholder: "Your Name", type: "text", width: "half" },
        { name: "email", label: "Email", placeholder: "Your Mail ID", type: "email", width: "half" },
        { name: "phone", label: "Phone Number", placeholder: "Phone Number", type: "tel", width: "half" },
        { name: "city", label: "City", placeholder: "Your City", type: "text", width: "half" },
        {
          name: "programOfInterest", label: "Program of Interest", type: "select", width: "full",
          options: [
            "AI Engineering & Machine Learning",
            "NextGen Data Science & Analytics",
            "Cybersecurity & Ethical Hacking",
            "ServiceNow & Enterprise Platform Engineering",
            "Cloud Engineering & DevOps",
            "Full-Stack Development with AI",
            "Generative AI for Professionals",
          ],
        },
        { name: "message", label: "Message", placeholder: "How can we help you?", type: "textarea", width: "full" },
      ],
    },
  },

  /* ---------- Card 4 → Form 4: Job Enquiry ----------
     CAUTION: Pending final confirmation — may be reworded to route into
     the fellowship pathway (Form 3) or removed entirely. */
  {
    id: "job",
    title: "I'm looking for a job",
    description:
      "I want to explore career opportunities at KodoWorks or through its hiring network.",
    icon: icons.job,
    theme: THEMES.blue,
    imageSrc: "/certifications.webp",
    imageAlt: "Career opportunities at KodoWorks",
    form: {
      heading: "Explore Career Opportunities",
      subheading:
        "Tell us a bit about yourself, and our team will get in touch regarding relevant opportunities.",
      buttonLabel: "Submit",
      fields: [
        { name: "firstName", label: "First Name", placeholder: "Your First Name", type: "text", width: "half" },
        { name: "lastName", label: "Last Name", placeholder: "Your Last Name", type: "text", width: "half" },
        { name: "email", label: "Email", placeholder: "Your Email", type: "email", width: "half" },
        { name: "phone", label: "Phone", placeholder: "Your Phone Number", type: "tel", width: "half" },
        {
          name: "areaOfInterest", label: "Area of Interest", type: "select", width: "half",
          options: [
            "AI & Machine Learning",
            "Data Science & Analytics",
            "Cybersecurity",
            "ServiceNow",
            "Cloud & DevOps",
            "Full-Stack Development",
            "Other",
          ],
        },
        { name: "resumeLink", label: "Resume/Portfolio Link", placeholder: "LinkedIn, GitHub, or Resume Link", type: "text", width: "half" },
        {
          name: "message", label: "Additional Information",
          placeholder: "Tell us about your experience or what you're looking for...",
          type: "textarea", width: "full",
        },
      ],
    },
  },
];

/* ================================================================
   Shared input styling
   ================================================================ */

const inputBase =
  "w-full rounded-xl border border-slate-200 bg-white/90 px-4 py-3 text-sm text-slate-900 " +
  "placeholder:text-slate-400 shadow-sm outline-none transition-all duration-200 " +
  "hover:border-slate-300 focus:ring-2";

/* ================================================================
   Field renderer
   ================================================================ */

function FieldControl({ field, theme }: { field: FormField; theme: CardTheme }) {
  const id = `contact-${field.name}`;
  const inputClass = `${inputBase} ${theme.inputFocus}`;

  return (
    <div className={field.width === "full" ? "sm:col-span-2" : "sm:col-span-1"}>
      <label htmlFor={id} className="mb-1.5 block text-sm font-medium text-slate-700">
        {field.label}
      </label>

      {field.type === "textarea" ? (
        <textarea
          id={id}
          name={field.name}
          rows={4}
          placeholder={field.placeholder}
          className={`${inputClass} resize-y`}
        />
      ) : field.type === "select" ? (
        <div className="relative">
          <select id={id} name={field.name} defaultValue="" className={`${inputClass} appearance-none pr-10`}>
            <option value="" disabled>
              Select an option
            </option>
            {field.options?.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
          <svg
            viewBox="0 0 20 20"
            fill="none"
            stroke="currentColor"
            strokeWidth={1.8}
            className="pointer-events-none absolute right-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400"
            aria-hidden="true"
          >
            <path d="m5 8 5 5 5-5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      ) : (
        <input
          id={id}
          type={field.type}
          name={field.name}
          placeholder={field.placeholder}
          className={inputClass}
        />
      )}
    </div>
  );
}

/* ================================================================
   Main component
   ================================================================ */

const TRANSITION_MS = 300;

export default function ContactSection() {
  /**
   * null  → default state: 4 cards on the left, image collage on the right.
   * id    → that card's form on the left, its topic image on the right.
   */
  const [activeId, setActiveId] = useState<string | null>(null);
  /** Drives the fade/slide transition of the LEFT column content. */
  const [leftVisible, setLeftVisible] = useState(true);

  const panelRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  const activeCard = CARDS.find((c) => c.id === activeId) ?? null;

  /** Fade the left column out, swap its content, fade back in. */
  const swapLeft = (nextId: string | null) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setLeftVisible(false);
    timeoutRef.current = setTimeout(() => {
      setActiveId(nextId);
      // Let the new content mount hidden first, then reveal next frame.
      requestAnimationFrame(() => requestAnimationFrame(() => setLeftVisible(true)));
    }, TRANSITION_MS);
  };

  /** Card click → hide the 4 cards, show that card's form. */
  const selectCard = (id: string) => {
    if (id === activeId) return;
    swapLeft(id);
    panelRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  /** "Back" → hide the form, show the 4 cards again. */
  const goBack = () => swapLeft(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // TODO: wire up to the enquiry API / CRM endpoint per card (activeCard?.id).
    const data = Object.fromEntries(new FormData(e.currentTarget).entries());
    console.log("Contact enquiry submitted:", activeCard?.id, data);
  };

  return (
    <main style={{ backgroundColor: "rgb(246 241 234 / 19%)" }}>
      {/* ============================================================
          SECTION 1 — PAGE HERO
          NOTE: Retain the existing hero banner exactly as currently
          live on kodoworks.in (dark gradient background with image
          overlay). This block is a stand-in for local development.
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
          SECTION 2 — SPLIT PANEL
          Left: card selector ⇄ active form (fade/slide swap)
          Right: image collage ⇄ active card's topic image (crossfade)
          ============================================================ */}
      <section
        ref={panelRef}
        className="mx-auto max-w-7xl scroll-mt-24 px-4 py-14 sm:px-6 sm:py-16 md:px-10 md:py-20 lg:px-16 lg:py-24 xl:px-20"
      >
        <div className="grid grid-cols-1 items-stretch gap-6 lg:grid-cols-2 lg:gap-8">
          {/* ==================== LEFT COLUMN ==================== */}
          <div className="rounded-[2rem] bg-[#EFEAFB]/60 p-6 sm:p-10">
            <div
              id="contact-left-panel"
              aria-live="polite"
              className={[
                "transition-all duration-300 ease-out",
                leftVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0",
              ].join(" ")}
            >
              {activeCard === null ? (
                /* ---------- Default: heading + 4 stacked cards ---------- */
                <>
                  <h2 className="font-serif text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
                    Get in Touch
                  </h2>
                  <p className="mt-4 max-w-md text-base text-slate-600">
                    Tell us who you are, and we&rsquo;ll route you to the right team.
                  </p>

                  <div className="mt-10 flex flex-col gap-4">
                    {CARDS.map((card) => {
                      const t = card.theme;
                      return (
                        <button
                          key={card.id}
                          type="button"
                          onClick={() => selectCard(card.id)}
                          aria-controls="contact-left-panel"
                          className={[
                            "group flex w-full items-center gap-4 rounded-2xl p-4 text-left sm:gap-5 sm:p-5",
                            t.cardBg,
                            t.cardHover,
                            "transition-all duration-300 ease-out",
                            "hover:-translate-y-0.5 hover:shadow-lg hover:shadow-slate-900/10",
                            "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2",
                            "focus-visible:outline-slate-900",
                          ].join(" ")}
                        >
                          {/* White icon chip */}
                          <span
                            className={[
                              "inline-flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-white shadow-sm",
                              "transition-transform duration-300 group-hover:scale-105",
                              t.chipIcon,
                            ].join(" ")}
                          >
                            {card.icon}
                          </span>

                          <span className="min-w-0 flex-1">
                            <span className="block text-base font-bold leading-snug tracking-tight text-slate-900">
                              {card.title}
                            </span>
                            <span className="mt-1 block text-sm leading-relaxed text-slate-700">
                              {card.description}
                            </span>
                          </span>

                          {/* Chevron */}
                          <svg
                            viewBox="0 0 20 20"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                            className={`h-5 w-5 shrink-0 transition-transform duration-300 group-hover:translate-x-1 ${t.accentText}`}
                            aria-hidden="true"
                          >
                            <path d="m7 4 6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </button>
                      );
                    })}
                  </div>
                </>
              ) : (
                /* ---------- Active: form with Back button ---------- */
                <>
                  <div className="flex items-start gap-4">
                    <button
                      type="button"
                      onClick={goBack}
                      aria-label="Back to Get in Touch options"
                      className="mt-0.5 inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full
                                 bg-slate-900 text-white shadow-sm transition-all duration-200
                                 hover:scale-105 hover:bg-slate-700
                                 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2
                                 focus-visible:outline-slate-900"
                    >
                      <svg
                        viewBox="0 0 20 20"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={1.8}
                        className="h-4 w-4"
                        aria-hidden="true"
                      >
                        <path d="M16 10H4m0 0 4-4m-4 4 4 4" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </button>
                    <div>
                      <div className="flex items-center gap-2.5">
                        <span
                          className={`h-3 w-3 shrink-0 rounded-full ${activeCard.theme.dot}`}
                          aria-hidden="true"
                        />
                        <h3 className="text-2xl font-bold tracking-tight text-slate-900">
                          {activeCard.form.heading}
                        </h3>
                      </div>
                      <p className="mt-2 text-sm leading-relaxed text-slate-600">
                        {activeCard.form.subheading}
                      </p>
                    </div>
                  </div>

                  <form key={activeCard.id} onSubmit={handleSubmit} className="mt-8">
                    <div className="grid grid-cols-1 gap-x-5 gap-y-5 sm:grid-cols-2">
                      {activeCard.form.fields.map((field) => (
                        <FieldControl key={field.name} field={field} theme={activeCard.theme} />
                      ))}
                    </div>

                    <button
                      type="submit"
                      className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full
                                 bg-slate-900 px-8 py-3.5 text-sm font-bold text-white shadow-md
                                 transition-all duration-200 hover:-translate-y-0.5 hover:bg-slate-700
                                 hover:shadow-lg focus-visible:outline focus-visible:outline-2
                                 focus-visible:outline-offset-2 focus-visible:outline-slate-900
                                 sm:w-auto"
                    >
                      {activeCard.form.buttonLabel}
                      <svg
                        viewBox="0 0 20 20"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        className="h-4 w-4"
                        aria-hidden="true"
                      >
                        <path d="M4 10h12m0 0-4-4m4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </button>
                  </form>
                </>
              )}
            </div>
          </div>

          {/* ==================== RIGHT COLUMN — IMAGE ==================== */}
          <div
            className={[
              "relative min-h-[320px] overflow-hidden rounded-[2rem] lg:min-h-full",
              "transition-colors duration-500 ease-out",
              activeCard ? activeCard.theme.imagePanel : "bg-[#EFEAFB]/60",
            ].join(" ")}
          >
            {/* Decorative pastel circles */}
            <div
              className="pointer-events-none absolute -right-16 -top-16 z-10 h-56 w-56 rounded-full bg-white/25"
              aria-hidden="true"
            />
            <div
              className="pointer-events-none absolute -bottom-20 -left-12 z-10 h-64 w-64 rounded-full bg-white/20"
              aria-hidden="true"
            />

            {/* --- Layer 0: default collage of all four topics --- */}
            <div
              className={[
                "absolute inset-0 grid grid-cols-2 grid-rows-2 gap-3 p-3 sm:gap-4 sm:p-4",
                "transition-opacity duration-500 ease-out",
                activeCard === null ? "opacity-100" : "pointer-events-none opacity-0",
              ].join(" ")}
              aria-hidden={activeCard !== null}
            >
              {CARDS.map((card) => (
                <div
                  key={card.id}
                  className={`relative overflow-hidden rounded-3xl ${card.theme.imagePanel}`}
                >
                  <Image
                    src={card.imageSrc}
                    alt={card.imageAlt}
                    fill
                    sizes="(min-width: 1024px) 25vw, 50vw"
                    className="object-cover"
                    priority={card.id === CARDS[0].id}
                  />
                </div>
              ))}
            </div>

            {/* --- Layers 1–4: one full-bleed image per card, crossfaded --- */}
            {CARDS.map((card) => {
              const isShown = card.id === activeId;
              return (
                <div
                  key={card.id}
                  className={[
                    "absolute inset-0",
                    "transition-opacity duration-500 ease-out",
                    isShown ? "opacity-100" : "pointer-events-none opacity-0",
                  ].join(" ")}
                  aria-hidden={!isShown}
                >
                  <Image
                    src={card.imageSrc}
                    alt={card.imageAlt}
                    fill
                    sizes="(min-width: 1024px) 50vw, 100vw"
                    className="object-cover"
                  />
                  {/* Caption chip pinned to the bottom of the image */}
                  <div className="absolute inset-x-0 bottom-0 z-10 p-8">
                    <span
                      className={`inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-white shadow-sm ${card.theme.chipIcon}`}
                    >
                      {card.icon}
                    </span>
                    <p className="mt-3 text-lg font-bold tracking-tight text-slate-900">
                      {card.title}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}
