"use client";

import React, { useState } from "react";

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

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section className="w-full flex flex-col items-center py-10 px-4">
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
    </section>
  );
}
