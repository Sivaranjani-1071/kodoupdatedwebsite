"use client";

import React, { useState } from "react";
import { ArrowRight, Headphones } from "lucide-react";
import BookTrialModal from "@/components/layout/BookTrialModal";

const faqs = [
  {
    question:
      "What is the structure of the Fellowship Program in NextGen Data Analytics & Data Science with AI?",
    answer:
      "The Fellowship Program is structured into multiple hands-on sprints that build Data Analytics and Data Science skills step by step. The curriculum covers Excel, SQL, Python, data visualization, and practical analytics, and progresses to statistics, machine learning, and AI-driven workflows—ensuring end-to-end, real-world data expertise.",
  },
  {
    question: "How long does each sprint last?",
    answer:
      "Each sprint typically runs for a few weeks, combining live sessions, hands-on assignments, and project work to help you build skills progressively.",
  },
  {
    question: "Do I need any prior knowledge or experience to enroll in this program?",
    answer:
      "No prior experience is required. The program is designed to take you from the basics through to advanced, real-world data skills.",
  },
  {
    question: "Will there be hands-on projects and case studies?",
    answer:
      "Yes, the program includes multiple hands-on projects and real-world case studies to help you apply what you learn.",
  },
  {
    question: "What tools and technologies will I learn in this program?",
    answer:
      "You will learn tools such as Excel, SQL, Python, data visualization platforms, and AI-driven analytics workflows.",
  },
  {
    question:
      "How do I secure a scholarship to attend the Fellowship Program in NextGen Data Analytics & Data Science with AI?",
    answer:
      "Scholarships are awarded based on a short assessment and interview process conducted after your free trial session.",
  },
  {
    question: "Can I get EMI if I don't have a credit card?",
    answer:
      "Yes, no-cost EMI options are available even without a credit card through our financing partners.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section className="w-full flex flex-col items-center py-14 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 md:px-10 lg:px-16 xl:px-20">
      <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-8 text-center">
        FAQs
      </h2>

      <div className="w-full max-w-4xl flex flex-col gap-4">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;
          return (
            <div
              key={index}
              onClick={() => toggle(index)}
              className="bg-[#EAF5F0] rounded-2xl px-6 py-5 cursor-pointer transition-all"
            >
              <div className="flex items-start justify-between gap-4">
                <h3 className="font-bold text-gray-900 text-base md:text-lg">
                  {faq.question}
                </h3>
                <span className="text-gray-500 text-xl leading-none shrink-0 mt-0.5">
                  {isOpen ? "×" : "+"}
                </span>
              </div>

              {isOpen && (
                <p className="text-gray-700 text-sm md:text-base leading-relaxed mt-3">
                  {faq.answer}
                </p>
              )}
            </div>
          );
        })}
      </div>

      {/* Closing CTA banner */}
      <div
        className="relative mt-10 w-full max-w-4xl overflow-hidden rounded-3xl px-6 py-8 sm:px-10 sm:py-10"
        style={{ backgroundImage: "linear-gradient(135deg, #FF9A6C 0%, #FF5E7E 100%)" }}
      >
        <div className="relative flex items-center justify-between gap-6">
          <div>
            <h3 className="max-w-xs text-2xl font-extrabold leading-tight text-[#1A1A1A] sm:max-w-sm sm:text-3xl">
              Have Any Further Questions?
            </h3>
            <button
              onClick={() => setIsModalOpen(true)}
              className="mt-5 inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#1A1A1A] text-white transition-transform hover:-translate-y-0.5 active:translate-y-0"
              aria-label="Get in touch"
            >
              <ArrowRight size={20} strokeWidth={2.5} />
            </button>
          </div>

          {/* Decorative support badge, echoing the squiggle + sparkle motif used in the footer CTA */}
          <div className="relative hidden shrink-0 sm:block">
            <svg
              className="pointer-events-none absolute -left-16 top-1/2 h-16 w-32 -translate-y-1/2 text-white/60"
              viewBox="0 0 160 80"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M0 40c20 0 20-30 40-30s20 45 40 45 20-35 40-35 20 20 40 20"
                stroke="currentColor"
                strokeWidth="6"
                strokeLinecap="round"
              />
            </svg>
            <svg
              className="pointer-events-none absolute -right-2 -top-3 h-6 w-6 text-white/80"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M12 0c1 6 3 8 9 9-6 1-8 3-9 9-1-6-3-8-9-9 6-1 8-3 9-9Z" />
            </svg>
            <div className="flex h-24 w-24 items-center justify-center rounded-full bg-white shadow-sm sm:h-28 sm:w-28">
              <Headphones size={44} strokeWidth={2} className="text-[#FF5E7E]" />
            </div>
          </div>
        </div>
      </div>

      <BookTrialModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
}
