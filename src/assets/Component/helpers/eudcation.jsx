import { School2 } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import React from "react";
import { address } from "framer-motion/client";
export const EducationSta = () => {
    const qualifications = [
        {
            degree: "Secondary Education Examination (SEE)",
            institution: "National Examination Board (NEB)",
            duration: "2018 – 2019",
            percentage: "66.5%"
        },
        {
            degree: "Higher Secondary Education (+2) in Computer Science",
            institution: "National Examination Board (NEB)",
            duration: "2020 – 2021",
            percentage: "64.5%"
        },
        {
            degree: "Diploma in Computer Engineering",
            institution: "Council for Technical Education and Vocational Training (CTEVT)",
            duration: "2019 – 2022",
            percentage: "64.94%"
        },
        {
            degree: "Bachelor of Business Studies (BBS)",
            institution: "Tribhuvan University (TU)",
            duration: "2020 – Running",
            percentage: "74.02%"
        }
    ];

    return (<>
        <AnimatePresence>


            <div className="relative">
                <div className="lg:m-1 sm:m-5 sm:pb-4">
                    <motion.div
                        initial={{ opacity: 0, y: 80 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="flex w-fit px-3 py-1 justify-start gap-2 items-center
                bg-gray-900/30 rounded-2xl border border-gray-500  ">
                        <span><School2 size={16} /></span>
                        <span className="font-serif text-sm">Resume</span>
                    </motion.div>
                </div>
                <motion.p initial={{ opacity: 0, y: 80 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    className=" mt-4 text-5xl font-serif tracking-wider text-white/80 ">
                    Education & <span className="text-[#ffde59]">

                        Certificate
                    </span>
                </motion.p>
                {
                    qualifications.map((item, index) => (
                        <motion.div
                            key={`education-${index}`}
                            initial={{ opacity: 0, x: 80 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            className="group relative mt-10 pl-8 border-l border-gray-700 
                            hover:border-white transition-colors duration-300"
                        >
                            {/* Timeline Dot */}
                           <div className="absolute -left-[9px] top-0 
  translate-y-full group-hover:translate-y-0
  w-4 h-4 rounded-full bg-gray-400
  group-hover:bg-[#ffde59]
  transition-all duration-500 ease-[cubic-bezier(0.25,0.10,0.15,0.95)]
  scale-100 group-hover:scale-125" />

                            {/* Content */}
                            <div className="flex flex-col gap-1 text-gray-400 group-hover:text-white transition-colors duration-300">

                                <span className="text-sm tracking-wide group-hover:text-[#ffde59] transition-colors duration-300" key={`_fshjfdshj${index}`}>
                                    {item.duration}
                                </span>

                                <span className="text-lg font-semibold" key={`we${index}`}>
                                    {item.institution}
                                </span>

                                <span className="text-sm italic" key={`fsd${index}`}>
                                    {item.percentage}
                                </span>

                                <span className="text-base font-medium text-gray-300 group-hover:text-gray-100" key={`2fds${index}`}>
                                    {item.degree}
                                </span>

                            </div>
                        </motion.div>
                    ))
                }
            </div>
        </AnimatePresence>
    </>)
}