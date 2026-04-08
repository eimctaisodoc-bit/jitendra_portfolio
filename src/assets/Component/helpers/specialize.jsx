import React from "react";
import { motion } from "framer-motion";
import {
  Cpu,
  Keyboard,
  Wrench,
  GraduationCap,
  Briefcase,
  TrendingUp,
  Sparkles,
} from "lucide-react";

export const Specialize_ = () => {
  const content = [
    {
      icon: <Cpu size={22} />,
      title: "Computer Hardware, Software & Networking",
      desc: "Asian Computer, Lalbandi - 1 Year",
    },
    {
      icon: <Keyboard size={22} />,
      title: "Computer Operator",
      desc: "Dream IT Solution, Lalitpur - 1 Year",
    },
    {
      icon: <Wrench size={22} />,
      title: "Computer, CCTV & Printer Technician",
      desc: "Redian Infotech, Lalitpur - 3 Years",
    },
    {
      icon: <GraduationCap size={22} />,
      title: "Computer Instructor",
      desc: "Yashodhara Technical Collage Lagankhel, Lalitpur - 2022 to Present",
    },
    {
      icon: <Briefcase size={22} />,
      title: "IT Managing Director",
      desc: "Creative Institute Lagankhel, Lalitpur - 2022 to Present",
    },
    {
      icon: <TrendingUp size={22} />,
      title: "Online Marketer",
      desc: "Redain Infotech, Lalitpur - Present",
    },
  ];

  return (
    <section className="relative mt-24 w-full overflow-hidden">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Tag */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex w-fit items-center gap-2 rounded-full border border-yellow-400/20 bg-white/5 px-4 py-2 backdrop-blur-sm"
        >
          <span className="text-[#ffde59]">
            <Sparkles size={18} />
          </span>
          <span className="text-sm font-medium text-white">Experience</span>
        </motion.div>

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-5 max-w-3xl"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-white leading-tight">
            My <span className="text-[#ffde59]">Experience</span>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-gray-400 leading-relaxed">
            A summary of my professional journey, technical roles, and teaching experience.
          </p>
        </motion.div>

        {/* Timeline Layout */}
        <div className="relative mt-14">
          {/* Center Line */}
          <div className="absolute left-5 top-0 h-full w-[2px] bg-gradient-to-b from-yellow-400/40 via-orange-400/30 to-transparent sm:left-1/2 sm:-translate-x-1/2" />

          <div className="space-y-10">
            {content.map((item, index) => {
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  className={`relative flex w-full ${
                    isEven ? "sm:justify-start" : "sm:justify-end"
                  }`}
                >
                  {/* Dot / Icon */}
                  <div className="absolute left-5 top-6 z-10 -translate-x-1/2 sm:left-1/2">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-yellow-400/20 bg-[#111111] text-[#ffde59] shadow-[0_0_20px_rgba(255,222,89,0.12)]">
                      {item.icon}
                    </div>
                  </div>

                  {/* Card */}
                  <div
                    className={`ml-16 w-full rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur-md transition-all duration-300 hover:border-yellow-400/30 hover:bg-white/[0.07] sm:ml-0 sm:w-[calc(50%-2rem)] ${
                      isEven ? "sm:mr-auto sm:pr-8" : "sm:ml-auto sm:pl-8"
                    }`}
                  >
                    <div className="flex flex-col gap-2">
                      <span className="w-fit rounded-full bg-yellow-400/10 px-3 py-1 text-xs font-medium text-[#ffde59]">
                        Experience {index + 1}
                      </span>

                      <h3 className="text-lg sm:text-xl font-semibold text-white leading-snug">
                        {item.title}
                      </h3>

                      <p className="text-sm sm:text-base text-gray-400 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};