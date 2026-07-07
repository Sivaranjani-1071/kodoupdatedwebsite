import React from "react";
import { Presentation, UserCog, ClipboardList, Table2, Briefcase } from "lucide-react";

const services = [
  {
    icon: Presentation,
    text: "1:1 Interview preparation including 10 AI Mock Interviews before technical interview rounds.",
  },
  {
    icon: UserCog,
    text: "Soft-Skills training coupled with pre-training and post-training assessments",
  },
  {
    icon: ClipboardList,
    text: "Series of mock assessments and detailed interview prep sprints to ace top tech jobs",
  },
  {
    icon: Table2,
    text: "Expert guidance to get your profile ready (Github, Portfolio, LinkedIn, Resume)",
  },
  {
    icon: Briefcase,
    text: "Access to a diverse set of job opportunities with 1000+ hiring partners",
  },
];

export default function ExclusiveCareerServices() {
  return (
    <section className="w-full max-w-6xl mx-auto flex flex-col items-center py-10 px-4">
      <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 text-center leading-snug">
        Exclusive Career
        <br />
        Services - <span className="text-gray-500">With A Personalized Career Plan</span>
      </h2>

      <p className="text-center text-gray-500 text-base md:text-lg mt-6 max-w-2xl">
        <span className="font-bold text-gray-700">
          Get access to Crio&apos;s Exclusive Career Services
        </span>{" "}
        that will equip you to use your learnings and skills to land your next job.
      </p>

      <div className="w-full max-w-5xl mt-12 flex flex-col items-center gap-4">
        {/* Top row - 3 cards */}
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-4">
          {services.slice(0, 3).map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="bg-gray-100 rounded-2xl p-6 flex flex-col gap-6"
              >
                <div className="w-14 h-14 rounded-xl bg-gray-500 flex items-center justify-center">
                  <Icon className="w-7 h-7 text-yellow-400" strokeWidth={2} />
                </div>
                <p className="text-gray-800 text-base">{service.text}</p>
              </div>
            );
          })}
        </div>

        {/* Bottom row - 2 cards centered */}
        <div className="w-full flex flex-wrap justify-center gap-4">
          {services.slice(3, 5).map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="bg-gray-100 rounded-2xl p-6 flex flex-col gap-6 w-full md:w-[calc(33.333%-11px)]"
              >
                <div className="w-14 h-14 rounded-xl bg-gray-500 flex items-center justify-center">
                  <Icon className="w-7 h-7 text-yellow-400" strokeWidth={2} />
                </div>
                <p className="text-gray-800 text-base">{service.text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
