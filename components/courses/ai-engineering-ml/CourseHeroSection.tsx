"use client";

import { useState, ChangeEvent, FormEvent } from "react";
import { User, Mail, Phone, ChevronRight } from "lucide-react";

interface FormState {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  consent: boolean;
}

const STATS = [
  { value: "6 Months", label: "Duration (4 months learning, 2 months internship/project)" },
  { value: "390+", label: "Hours of Live Instruction" },
  { value: "1:8", label: "Mentor-to-Student Ratio" },
  { value: "Online & Offline", label: "Available Tracks" },
  { value: "Certified", label: "KodoWorks Certified AI and ML Engineer, co-branded with ExpertsPro" },
];

export default function CourseHeroSection() {
  const [form, setForm] = useState<FormState>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    consent: true,
  });

  const handleChange =
    (field: keyof FormState) =>
    (e: ChangeEvent<HTMLInputElement>) => {
      const value =
        field === "consent" ? e.target.checked : e.target.value;
      setForm((prev) => ({ ...prev, [field]: value }));
    };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Wire this up to your lead-capture API route
    console.log("Form submitted:", form);
  };

  return (
    <section className="w-full bg-white">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-4 py-10 sm:px-6 sm:py-12 md:grid-cols-2 md:gap-8 md:px-10 md:py-14 lg:px-16 lg:py-16 xl:px-20">
        {/* Left column */}
        <div className="flex flex-col justify-center">
          <h1 style={{
    fontSize: "33px",
    fontWeight: 700,
    lineHeight: "38px",
  }} className="text-4xl font-extrabold leading-tight text-gray-900 sm:text-5xl">
            AI Engineering and Machine Learning Fellowship
          </h1>

          <p style={{lineHeight: "1.75rem !important",
    fontWeight: "400",
    fontSize: "17px",}} className="mt-6 text-lg leading-relaxed text-gray-500">
            A 6-month fellowship covering{" "}
            <span className="font-semibold text-emerald-600">
              machine learning, deep learning, natural language processing,
              and generative AI.
            </span>{" "}
            Fellows build and deploy five AI products under the mentorship of
            ExpertsPro&apos;s engineering team.
          </p>

          {/* Feature pills */}
          <div className="mt-6 flex flex-wrap gap-3">
            {[
              "Machine Learning & Deep Learning",
              "AI Agents & LLM Apps",
              "Real Work Experience",
              "Assured Referrals",
            ].map((feature) => (
              <span
                key={feature}
                className="rounded-full bg-emerald-600 px-4 py-2 text-sm font-semibold text-white"
              >
                {feature}
              </span>
            ))}
          </div>

         
        </div>

        {/* Right column - Form card */}
        <div className="flex items-center md:justify-end">
          <form
            onSubmit={handleSubmit}
            className="w-full rounded-3xl bg-emerald-50 p-6 shadow-xl shadow-emerald-900/10 sm:p-8 md:max-w-[420px]"
          >
            <div className="space-y-4">
              {/* First name */}
              <div className="relative">
                <input
                  type="text"
                  placeholder="First Name"
                  value={form.firstName}
                  onChange={handleChange("firstName")}
                  className="w-full rounded-full bg-white py-4 pl-6 pr-14 text-gray-700 placeholder-gray-400 shadow-sm outline-none ring-1 ring-transparent focus:ring-2 focus:ring-emerald-400"
                />
                <span className="absolute right-3 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-gray-100 text-gray-400">
                  <User size={18} />
                </span>
              </div>

              {/* Last name */}
              <div className="relative">
                <input
                  type="text"
                  placeholder="Last Name"
                  value={form.lastName}
                  onChange={handleChange("lastName")}
                  className="w-full rounded-full bg-white py-4 pl-6 pr-14 text-gray-700 placeholder-gray-400 shadow-sm outline-none ring-1 ring-transparent focus:ring-2 focus:ring-emerald-400"
                />
                <span className="absolute right-3 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-gray-100 text-gray-400">
                  <User size={18} />
                </span>
              </div>

              {/* Email */}
              <div className="relative">
                <input
                  type="email"
                  placeholder="Email"
                  value={form.email}
                  onChange={handleChange("email")}
                  className="w-full rounded-full bg-white py-4 pl-6 pr-14 text-gray-700 placeholder-gray-400 shadow-sm outline-none ring-1 ring-transparent focus:ring-2 focus:ring-emerald-400"
                />
                <span className="absolute right-3 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-gray-100 text-gray-400">
                  <Mail size={18} />
                </span>
              </div>

              {/* Phone */}
              <div className="relative">
                <div className="flex w-full items-center gap-2 rounded-full bg-white py-3 pl-6 pr-14 shadow-sm ring-1 ring-transparent focus-within:ring-2 focus-within:ring-emerald-400">
                  <div className="flex flex-col leading-tight">
                    <span className="text-xs text-gray-400">Phone</span>
                    <div className="flex items-center gap-1.5">
                      <span
                        className="inline-block h-3 w-4 rounded-sm bg-gradient-to-b from-orange-500 via-white to-green-600"
                        aria-hidden="true"
                      />
                      <span className="text-gray-700">+91</span>
                    </div>
                  </div>
                  <input
                    type="tel"
                    value={form.phone}
                    onChange={handleChange("phone")}
                    className="ml-2 flex-1 bg-transparent text-gray-700 outline-none"
                  />
                </div>
                <span className="absolute right-3 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-gray-100 text-gray-400">
                  <Phone size={18} />
                </span>
              </div>
            </div>

          

            {/* Submit button */}
            <button
              type="submit"
              className="mt-5 flex w-full items-center justify-center gap-1 rounded-full bg-yellow-400 py-4 font-bold text-gray-900 shadow-sm transition-colors hover:bg-yellow-300"
            >
              Book Your Trial
              <ChevronRight size={20} strokeWidth={2.5} />
            </button>
          </form>
        </div>
      </div>

      {/* Bottom stats bar */}
      <div className="mx-auto max-w-7xl px-6 pb-12 md:px-12 lg:px-20">
        <div className="flex w-full flex-wrap overflow-hidden rounded-3xl bg-emerald-50 lg:flex-nowrap">
          {STATS.map((stat, i) => (
            <div
              key={stat.label}
              className="relative flex flex-1 flex-col items-center justify-center px-4 py-8 text-center sm:py-10"
              style={{ minWidth: "140px" }}
            >
              {i !== 0 && (
                <span className="absolute left-0 top-[20%] h-[60%] w-px bg-emerald-200" />
              )}
              <span className="text-2xl font-extrabold text-gray-900 sm:text-3xl">
                {stat.value}
              </span>
              <span className="mt-2 max-w-[150px] text-xs font-medium leading-snug text-gray-500 sm:text-sm">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
