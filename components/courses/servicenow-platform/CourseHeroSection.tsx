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
            Fellowship Program in ServiceNow &amp; Enterprise Platform
            Engineering
          </h1>

          <p style={{lineHeight: "1.75rem !important",
    fontWeight: "400",
    fontSize: "17px",}} className="mt-6 text-lg leading-relaxed text-gray-500">
            Master ServiceNow development and enterprise platform engineering
            used by global IT teams. Progress seamlessly from{" "}
            <span className="font-semibold text-emerald-600">
              Platform Configuration to Enterprise ServiceNow Development,
            </span>{" "}
            with expert career guidance to land in-demand ITSM careers.
          </p>

          {/* Feature pills */}
          <div className="mt-6 flex flex-wrap gap-3">
            {[
              "Platform Configuration",
              "Enterprise ServiceNow Development",
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

          {/* Stats row */}
          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-4">
            <div className="rounded-2xl bg-emerald-50 p-6 sm:col-span-2">
              <h3 className="text-sm font-bold text-gray-900">
                Assured Referrals*
              </h3>
              <hr className="my-4 border-emerald-200" />
              <div className="flex items-center gap-10">
                <div>
                  <p className="text-xs font-semibold tracking-wide text-emerald-700">
                    DREAM JOBS
                  </p>
                  <p className="mt-1 whitespace-nowrap text-lg font-extrabold text-gray-900">
                    6 - 15 LPA
                  </p>
                </div>
                <div className="h-10 border-r-2 border-emerald-200"></div>
                <div>
                  <p className="text-xs font-semibold tracking-wide text-emerald-700">
                    SUPER DREAM JOBS
                  </p>
                  <p className="mt-1 whitespace-nowrap text-lg font-extrabold text-gray-900">
                    15 - 40 LPA
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-2xl bg-emerald-50 p-6">
              <div>
                <p className="text-xs font-semibold tracking-wide text-emerald-700">
                  FULLY ONLINE
                </p>
                <p className="mt-1 text-lg font-extrabold text-gray-900">
                  9 months
                </p>
              </div>
              <hr className="my-4 border-emerald-200" />
              <div>
                <p className="text-xs font-semibold tracking-wide text-emerald-700">
                  TRIAL SESSION
                </p>
                <p className="mt-1 text-lg font-extrabold text-gray-900">
                  Free
                </p>
              </div>
            </div>

            <div className="rounded-2xl bg-emerald-50 p-6">
              <div>
                <p className="text-xs font-semibold tracking-wide text-emerald-700">
                  DEVELOPERS TRAINED
                </p>
                <p className="mt-1 text-lg font-extrabold text-gray-900">
                  3000+
                </p>
              </div>
              <hr className="my-4 border-emerald-200" />
              <div>
                <p className="text-xs font-semibold tracking-wide text-emerald-700">
                  AVERAGE RATING
                </p>
                <p className="mt-1 text-lg font-extrabold text-gray-900">
                  4.5/5
                </p>
              </div>
            </div>
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

            {/* Consent checkbox */}
            <label className="mt-4 flex cursor-pointer items-start gap-3">
              <input
                type="checkbox"
                checked={form.consent}
                onChange={handleChange("consent")}
                className="mt-0.5 h-5 w-5 shrink-0 accent-emerald-500"
              />
              <span className="text-xs italic leading-relaxed text-gray-500">
                I authorise Crio.Do (QIFT SOLUTECH PVT. LTD.) &amp; its
                representatives to contact me with updates and notifications
                via Email
              </span>
            </label>

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
    </section>
  );
}
