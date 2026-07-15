"use client";

import { useState } from "react";
import {
  Code2,
  BarChart3,
  BrainCircuit,
  MessageSquare,
  Sparkles,
  Cloud,
  Rocket,
  ChevronRight,
} from "lucide-react";

// ----------------------------------------------------------------------------
// Data
// ----------------------------------------------------------------------------

const modules = [
  {
    id: "python-data-foundations",
    title: "Python and Data Foundations",
    duration: "3 weeks",
    icon: Code2,
    intro: [
      { text: "This module establishes the ", bold: false },
      { text: "programming and data-handling skills", bold: true },
      { text: " required before any machine learning work begins. Fellows work with ", bold: false },
      { text: "real datasets", bold: true },
      { text: " from the first week, learning to clean, structure, and interpret data the way it is used in ", bold: false },
      { text: "production systems", bold: true },
      { text: " rather than in isolated exercises.", bold: false },
    ],
    points: [
      "Python for Data Science",
      "NumPy and Pandas",
      "Data Cleaning and Wrangling",
      "Exploratory Data Analysis",
      "Statistics and Probability for Machine Learning",
      "SQL for Data Extraction",
    ],
    tags: ["Python", "Data Cleaning", "EDA", "Statistics", "SQL"],
  },
  {
    id: "core-machine-learning",
    title: "Core Machine Learning",
    duration: "3 weeks",
    icon: BarChart3,
    intro: [
      { text: "This module covers the algorithms used for ", bold: false },
      { text: "prediction and classification tasks", bold: true },
      { text: " across industries. Fellows learn not only how each algorithm works, but how to ", bold: false },
      { text: "evaluate, tune, and select models", bold: true },
      { text: " appropriately for a given business problem, which is a distinction most introductory courses skip.", bold: false },
    ],
    points: [
      "Supervised Learning: Regression and Classification",
      "Unsupervised Learning: Clustering and Dimensionality Reduction",
      "Model Evaluation and Cross-Validation",
      "Hyperparameter Tuning",
      "Feature Engineering for Production Models",
    ],
    tags: ["Regression", "Classification", "Clustering", "Model Evaluation", "Feature Engineering"],
  },
  {
    id: "deep-learning-foundations",
    title: "Deep Learning Foundations",
    duration: "3 weeks",
    icon: BrainCircuit,
    intro: [
      { text: "This module introduces ", bold: false },
      { text: "neural networks", bold: true },
      { text: " and the architectures behind modern AI systems. Fellows ", bold: false },
      { text: "implement neural networks from first principles", bold: true },
      { text: " before moving to frameworks, so the underlying mechanics are understood rather than treated as a black box.", bold: false },
    ],
    points: [
      "Neural Networks and Backpropagation",
      "Convolutional Neural Networks for Computer Vision",
      "Recurrent Neural Networks and LSTMs for Sequential Data",
      "Hands-on Work in TensorFlow and PyTorch",
    ],
    tags: ["Neural Networks", "CNN", "RNN", "TensorFlow", "PyTorch"],
  },
  {
    id: "nlp-language-models",
    title: "Natural Language Processing and Language Models",
    duration: "2 weeks",
    icon: MessageSquare,
    intro: [
      { text: "This module covers how machines process and generate human language, from traditional text processing methods through to ", bold: false },
      { text: "transformer-based language models", bold: true },
      { text: ". Fellows work directly with ", bold: false },
      { text: "pretrained models", bold: true },
      { text: " rather than only studying the theory behind them.", bold: false },
    ],
    points: [
      "Text Preprocessing and Word Embeddings",
      "Transformer Architecture",
      "Named Entity Recognition and Sentiment Analysis",
      "Introduction to Large Language Models",
      "Fine-Tuning Pretrained Models",
    ],
    tags: ["NLP", "Transformers", "Sentiment Analysis", "LLMs", "Fine-Tuning"],
  },
  {
    id: "genai-llm-engineering",
    title: "Generative AI and LLM Engineering",
    duration: "3 weeks",
    icon: Sparkles,
    intro: [
      { text: "This module focuses on ", bold: false },
      { text: "building applications using large language models", bold: true },
      { text: ", which reflects current hiring demand more directly than traditional machine learning alone. Fellows build ", bold: false },
      { text: "retrieval-augmented generation systems and AI agents", bold: true },
      { text: " rather than only calling an API for a demo.", bold: false },
    ],
    points: [
      "Prompt Engineering",
      "LLM API Integration",
      "Retrieval-Augmented Generation Systems",
      "Vector Databases and Semantic Search",
      "Building AI Agents and Workflow Automation",
    ],
    tags: ["RAG", "Prompt Engineering", "Vector DB", "AI Agents", "LLM APIs"],
  },
  {
    id: "production-ai-mlops",
    title: "Production AI and MLOps",
    duration: "2 weeks",
    icon: Cloud,
    intro: [
      { text: "This module covers how AI systems are ", bold: false },
      { text: "deployed and maintained", bold: true },
      { text: " after a model has been trained. Fellows learn the ", bold: false },
      { text: "operational side of AI engineering", bold: true },
      { text: ", which is frequently underrepresented in academic-style courses but essential in an enterprise setting.", bold: false },
    ],
    points: [
      "Model Deployment with Docker and FastAPI",
      "CI/CD Pipelines for Machine Learning",
      "Model Monitoring and Versioning with MLflow",
      "Cloud Deployment on AWS SageMaker",
    ],
    tags: ["Docker", "FastAPI", "CI/CD", "MLflow", "AWS SageMaker"],
  },
  {
    id: "capstone-internship",
    title: "Capstone Internship and Portfolio Project",
    duration: "2 months",
    icon: Rocket,
    intro: [
      { text: "In the final two months, fellows apply everything learned across the program to a single ", bold: false },
      { text: "enterprise-style capstone project", bold: true },
      { text: ", mentored directly by ", bold: false },
      { text: "ExpertsPro's engineering team", bold: true },
      { text: ". This project becomes the centrepiece of each fellow's professional portfolio.", bold: false },
    ],
    points: [
      "2-Month Internship-Style Capstone Project",
      "Direct Mentorship from ExpertsPro's AI Engineering Team",
      "One Deployed Flagship AI Product for Portfolio Use",
      "Final Project Review and Presentation",
    ],
    tags: ["Capstone", "Internship", "Portfolio", "Deployment", "Mentorship"],
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
      id="curriculum"
      className="w-full py-14 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 md:px-10 lg:px-16 xl:px-20"
      style={{
        fontFamily:
          "Rubik, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
      }}
    >
      <div className="mx-auto max-w-5xl rounded-3xl bg-[#efefef] p-6 sm:p-10">
        {/* Heading */}
        <h2 className="text-center text-2xl sm:text-3xl font-extrabold text-[#0b1f1a] leading-snug">
          CURRICULUM MODULES
        </h2>

     

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
          <button className="flex items-center gap-1 rounded-xl bg-[#bffe066] px-6 py-3 text-sm font-bold text-[#0b1f1a] shadow-sm transition-transform hover:scale-[1.02]">
            View Curriculum
            <ChevronRight size={16} strokeWidth={3} />
          </button>
        </div>
      </div>
    </section>
  );
}