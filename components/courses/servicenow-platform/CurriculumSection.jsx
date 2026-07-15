"use client";

import { useState } from "react";
import {
  Code2,
  BarChart3,
  ClipboardList,
  GitBranch,
  BrainCircuit,
  Database,
  Mic,
  ChevronRight,
} from "lucide-react";

// ----------------------------------------------------------------------------
// Data
// ----------------------------------------------------------------------------

const modules = [
  {
    id: "programming-foundations",
    title: "Programming Foundations",
    duration: "8 weeks",
    icon: Code2,
    intro: [
      { text: "Establish a strong ", bold: false },
      { text: "Python programming foundation", bold: true },
      { text: " for your ", bold: false },
      { text: "data analytics career", bold: true },
      { text: " by mastering ", bold: false },
      { text: "essential coding skills", bold: true },
      { text: " and ", bold: false },
      { text: "core programming concepts", bold: true },
      { text: ".", bold: false },
    ],
    points: [
      "Gain proficiency in Python syntax, data structures, and control flow statements.",
      "Write reusable code using functions, modules, and file-handling techniques.",
      "Confidently solve programming problems and apply Python library methods.",
      "Handle errors and exceptions effectively in your programs.",
      "Understand object-oriented programming (OOP) and make API calls for data handling.",
      "Grasp basic Statistics and Probability for data interpretation.",
    ],
    tags: [
      "Python Foundations",
      "Data Structures",
      "Control Flow",
      "Functions",
      "Modules",
      "File Handling",
      "Libraries",
      "Error Handling",
      "Object Oriented Programming",
      "API invocation",
      "JSON",
      "Statistics",
      "Probability",
    ],
  },
  {
    id: "data-analytics",
    title: "Data Analytics and Data Visualization",
    duration: "16 weeks",
    icon: BarChart3,
    intro: [
      { text: "Master ", bold: false },
      { text: "data analytics and visualization", bold: true },
      { text: " techniques to turn raw data into ", bold: false },
      { text: "actionable business insights", bold: true },
      { text: ".", bold: false },
    ],
    points: [
      "Clean, transform, and analyze data using SQL and Excel.",
      "Build interactive dashboards using Power BI and Tableau.",
      "Apply statistical methods to uncover trends and patterns.",
      "Communicate insights effectively through data storytelling.",
      "Work with real-world datasets across multiple industries.",
    ],
    tags: [
      "SQL",
      "Excel",
      "Power BI",
      "Tableau",
      "Data Cleaning",
      "Data Storytelling",
      "Dashboards",
      "EDA",
    ],
  },
  {
    id: "industry-projects",
    title: "Industry Projects and Case Studies",
    duration: "8 weeks",
    icon: ClipboardList,
    intro: [
      { text: "Apply your skills to ", bold: false },
      { text: "real industry projects", bold: true },
      { text: " and ", bold: false },
      { text: "case studies", bold: true },
      { text: " curated from top product companies.", bold: false },
    ],
    points: [
      "Work on end-to-end projects mirroring real workplace problems.",
      "Collaborate in teams to simulate a product-based company environment.",
      "Build a portfolio that stands out to recruiters.",
      "Receive mentor feedback on code quality and approach.",
    ],
    tags: ["Capstone Projects", "Case Studies", "Portfolio", "Team Collaboration"],
  },
  {
    id: "dsa",
    title: "Data Structures and Algorithms",
    duration: "8 weeks",
    icon: GitBranch,
    intro: [
      { text: "Build a rock-solid foundation in ", bold: false },
      { text: "Data Structures and Algorithms", bold: true },
      { text: " to crack ", bold: false },
      { text: "top product-based company interviews", bold: true },
      { text: ".", bold: false },
    ],
    points: [
      "Master arrays, linked lists, stacks, queues, trees, and graphs.",
      "Solve problems using recursion, dynamic programming, and greedy techniques.",
      "Analyze time and space complexity of algorithms.",
      "Practice on coding platforms with curated problem sets.",
    ],
    tags: [
      "Arrays",
      "Linked Lists",
      "Trees",
      "Graphs",
      "Dynamic Programming",
      "Recursion",
      "Complexity Analysis",
    ],
  },
  {
    id: "genai-ml",
    title: "GenAI, ML and MLOps",
    duration: "8 weeks",
    icon: BrainCircuit,
    intro: [
      { text: "Dive into ", bold: false },
      { text: "Machine Learning, Generative AI", bold: true },
      { text: " and ", bold: false },
      { text: "MLOps practices", bold: true },
      { text: " used in production systems.", bold: false },
    ],
    points: [
      "Build and evaluate supervised and unsupervised ML models.",
      "Work with LLMs, prompt engineering, and RAG pipelines.",
      "Deploy models using MLOps best practices and CI/CD.",
      "Monitor and maintain models in production environments.",
    ],
    tags: ["Machine Learning", "GenAI", "LLMs", "Prompt Engineering", "MLOps", "Deployment"],
  },
  {
    id: "big-data",
    title: "Big Data and Data Engineering",
    duration: "4 weeks",
    icon: Database,
    intro: [
      { text: "Learn to design and manage ", bold: false },
      { text: "scalable data pipelines", bold: true },
      { text: " using modern ", bold: false },
      { text: "Big Data tools", bold: true },
      { text: ".", bold: false },
    ],
    points: [
      "Understand distributed computing concepts with Spark and Hadoop.",
      "Build ETL pipelines for large-scale data processing.",
      "Work with cloud data warehouses and lakehouses.",
      "Orchestrate workflows using modern scheduling tools.",
    ],
    tags: ["Spark", "Hadoop", "ETL", "Cloud Warehousing", "Workflow Orchestration"],
  },
  {
    id: "interview-blitz",
    title: "Interview Blitz",
    duration: "4 weeks",
    icon: Mic,
    intro: [
      { text: "Sharpen your ", bold: false },
      { text: "interview skills", bold: true },
      { text: " with mock interviews, resume reviews, and ", bold: false },
      { text: "placement preparation", bold: true },
      { text: ".", bold: false },
    ],
    points: [
      "Practice mock technical and HR interviews with experts.",
      "Get personalized resume and LinkedIn profile reviews.",
      "Learn negotiation strategies for your dream offer.",
      "Build confidence through repeated, realistic interview simulations.",
    ],
    tags: ["Mock Interviews", "Resume Building", "HR Rounds", "Negotiation"],
  },
];

// ----------------------------------------------------------------------------
// Component
// ----------------------------------------------------------------------------

export default function CurriculumSection() {
  const [activeId, setActiveId] = useState(modules[0].id);
  const [plan, setPlan] = useState("premium"); // "premium" | "advanced"

  const active = modules.find((m) => m.id === activeId);
  const ActiveIcon = active.icon;

  return (
    <section
      className="w-full py-14 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 md:px-10 lg:px-16 xl:px-20"
      style={{
        fontFamily:
          "Rubik, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
      }}
    >
      <div className="mx-auto max-w-5xl rounded-3xl bg-[#efefef] p-6 sm:p-10">
        {/* Heading */}
        <h2 className="text-center text-2xl sm:text-3xl font-extrabold text-[#0b1f1a] leading-snug">
          Curriculum To Crack Dream Jobs
          <br />
          (6 - 10 LPA) In Top Product-Based
          <br />
          Companies
        </h2>

        {/* Plan toggle */}
        <div className="mt-8 flex justify-center">
          <div className="flex rounded-xl bg-white p-1 shadow-sm">
            <button
              onClick={() => setPlan("premium")}
              className={`rounded-lg px-8 py-3 text-sm font-bold transition-colors ${
                plan === "premium"
                  ? "bg-[#fff3b0] text-[#0b1f1a]"
                  : "bg-transparent text-[#0b1f1a]"
              }`}
            >
              Premium
            </button>
            <button
              onClick={() => setPlan("advanced")}
              className={`flex flex-col items-center justify-center rounded-lg px-8 py-2 text-left transition-colors ${
                plan === "advanced" ? "bg-[#fdf6e3]" : "bg-transparent"
              }`}
            >
              <span className="text-sm font-bold text-[#0b1f1a]">Advanced</span>
              <span className="text-[10px] text-gray-500">
                *Includes the Premium curriculum also
              </span>
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-[300px_1fr]">
          {/* Left list */}
          <div className="flex flex-col gap-3">
            {modules.map((m) => {
              const Icon = m.icon;
              const isActive = m.id === activeId;
              return (
                <button
                  key={m.id}
                  onClick={() => setActiveId(m.id)}
                  className={`flex items-center gap-3 rounded-2xl px-4 py-4 text-left transition-colors ${
                    isActive
                      ? "bg-[#fff3b0]"
                      : "bg-white hover:bg-white/80"
                  }`}
                >
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#2f6b57] text-white">
                    <Icon size={18} strokeWidth={2} />
                  </span>
                  <span className="flex flex-col">
                    <span className="text-sm font-bold text-[#0b1f1a]">
                      {m.title}
                    </span>
                    <span className="text-xs text-gray-600">{m.duration}</span>
                  </span>
                </button>
              );
            })}
          </div>

          {/* Right detail panel */}
          <div className="rounded-2xl bg-white p-6 sm:p-8">
            <div className="flex items-center gap-3">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#2f6b57] text-white">
                <ActiveIcon size={18} strokeWidth={2} />
              </span>
              <div className="flex flex-col">
                <span className="text-base font-bold text-[#0b1f1a]">
                  {active.title}
                </span>
                <span className="text-xs text-gray-500">{active.duration}</span>
              </div>
            </div>

            <p
              className="mt-4 leading-relaxed text-[#1f2d29]"
              style={{ fontSize: "16px" }}
            >
              {active.intro.map((chunk, i) =>
                chunk.bold ? (
                  <span key={i} className="font-bold">
                    {chunk.text}
                  </span>
                ) : (
                  <span key={i}>{chunk.text}</span>
                )
              )}
            </p>

            <ul className="mt-4 space-y-2">
              {active.points.map((point, i) => (
                <li
                  key={i}
                  className="flex gap-2 leading-relaxed text-[#1f2d29]"
                  style={{ fontSize: "16px" }}
                >
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[#1f2d29]" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>

            <div className="mt-5 flex flex-wrap gap-2">
              {active.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-md border border-gray-300 px-3 py-1.5 text-xs font-semibold text-[#0b1f1a]"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-10 flex justify-center">
          <button className="flex items-center gap-1 rounded-xl bg-[#ffe066] px-6 py-3 text-sm font-bold text-[#0b1f1a] shadow-sm transition-transform hover:scale-[1.02]">
            View Curriculum
            <ChevronRight size={16} strokeWidth={3} />
          </button>
        </div>
      </div>
    </section>
  );
}