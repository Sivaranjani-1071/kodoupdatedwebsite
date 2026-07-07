"use client";

import {
  Presentation,
  BarChart3,
  Radio,
  MessageCircleQuestion,
  HelpCircle,
  Sparkles,
} from "lucide-react";

// ----------------------------------------------------------------------------
// Data
// ----------------------------------------------------------------------------

const features = [
  {
    id: "career-services",
    icon: Presentation,
    iconBg: "#F87171", // pastel red
    cardBg: "#FDECEC",
    title: "Exclusive Career Services:",
    text: " Mock interviews, resume building, and focused career assistance to crack Data analytics and Data science roles",
  },
  {
    id: "work-projects",
    icon: BarChart3,
    iconBg: "#FBBF24", // pastel yellow
    cardBg: "#FEF6E0",
    title: "10+ work-like projects & 20+ micro skilling exercises:",
    text: " AI-driven industry-relevant projects and case studies across Data Analytics and Data Science to tackle real-world challenges",
  },
  {
    id: "live-sessions",
    icon: Radio,
    iconBg: "#60A5FA", // pastel blue
    cardBg: "#EAF2FE",
    title: "80+ live guided sessions:",
    text: " Mentorship by Data Science & AI experts from leading tech companies",
  },
  {
    id: "chat-support",
    icon: MessageCircleQuestion,
    iconBg: "#4ADE80", // pastel green
    cardBg: "#EAF8EE",
    title: "Live chat support and dedicated success managers:",
    text: " 12+ hours of daily live technical support to ensure a smooth & effortless learning experience",
  },
  {
    id: "sql-python",
    icon: HelpCircle,
    iconBg: "#C084FC", // pastel purple
    cardBg: "#F4EBFC",
    title: "200+ SQL problems & 200+ Python challenges:",
    text: " Build querying skills and data visualisation skills with tools like Tableau, Power BI, Seaborn, Scikit-Learn, OpenAI, MLflow",
  },
  {
    id: "genai-e2e",
    icon: Sparkles,
    iconBg: "#22D3EE", // pastel cyan
    cardBg: "#E6F9FB",
    title: "End-to-End Data Science & AI:",
    text: " Build and deploy ML models, work with end-to-end data pipelines, and learn ML Ops and Big Data concepts used by Data scientists.",
  },
];

// ----------------------------------------------------------------------------
// Component
// ----------------------------------------------------------------------------

export default function WorkshopSection() {
  return (
    <section
      className="w-full py-16 px-4"
      style={{
        fontFamily:
          "Rubik, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
      }}
    >
      <div className="mx-auto max-w-6xl">
        {/* Heading */}
        <h2
          className="text-center text-[#0b1f1a]"
          style={{
            textTransform: "capitalize",
            fontSize: "2rem",
            lineHeight: "1.375",
            fontFamily: "Manrope, sans-serif",
            fontWeight: 600,
          }}
        >
          Work Experience-Based Learning Approach
          <br />
          To Master In-Demand Data Analytics &amp; Data Science
          <br />
          With AI Skills
        </h2>

        {/* Grid */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((f) => {
            const Icon = f.icon;
            return (
              <div
                key={f.id}
                className="rounded-2xl p-6 sm:p-7 transition-transform hover:-translate-y-0.5"
                style={{ backgroundColor: f.cardBg }}
              >
                <span
                  className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl text-white shadow-sm"
                  style={{ backgroundColor: f.iconBg }}
                >
                  <Icon size={22} strokeWidth={2.25} />
                </span>

                <p
                  className="mt-5 leading-relaxed text-[#3a4a44]"
                  style={{ fontSize: "16px" }}
                >
                  <span className="font-bold text-[#0b1f1a]">{f.title}</span>
                  {f.text}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
