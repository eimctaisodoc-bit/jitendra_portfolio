import React from "react";
import { motion } from "framer-motion";
import { Code, Palette, Rocket, Layers, Sparkles } from "lucide-react";

export const Specialize_ = () => {
    const content = [
        {
            icon: <Code size={22} />,
            title: "Frontend Development",
            desc: "Building fast, responsive, and modern interfaces using React, Tailwind, and clean architecture.",
        },
        {
            icon: <Palette size={22} />,
            title: "UI / UX Design",
            desc: "Crafting visually appealing and user-focused designs with strong attention to detail.",
        },
        {
            icon: <Rocket size={22} />,
            title: "Performance Optimization",
            desc: "Optimizing apps for speed, scalability, and smooth user experience across devices.",
        },
        {
            icon: <Layers size={22} />,
            title: "Full Stack Projects",
            desc: "Developing complete web solutions with seamless frontend and backend integration.",
        },
    ];

    const getDirection = (index) => {
        const directions = [
            { x: -50, y: 0 },  // From Left
            { x: 50, y: 0 },   // From Right
            { x: 0, y: -50 },  // From Top
            { x: 0, y: 50 },   // From Bottom
        ];
        return directions[index % directions.length];
    };

    return (
        <section className="relative mt-24 w-full overflow-hidden">
            <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">

                {/* Tag */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ type: "spring", stiffness: 100, damping: 20 }}
                    className="flex w-fit items-center gap-2 rounded-2xl border border-gray-700 bg-gray-900/30 px-3 py-1"
                >
                    <span className="text-[#ffde59]"><Sparkles size={19} /></span>
                    <span className="text-sm text-white font-serif">Specialization</span>
                </motion.div>

                {/* Heading */}
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.1 }}
                    className="mt-4 max-w-3xl text-3xl sm:text-4xl lg:text-5xl font-serif text-white"
                >
                    What I <span className="text-[#ffde59]">Do Best</span>
                </motion.h2>

                {/* Grid */}
                <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
                    {content.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{
                                opacity: 0,
                                ...getDirection(index)
                            }}
                            whileInView={{
                                opacity: 1,
                                x: 0,
                                y: 0
                            }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{
                                type: "spring",
                                stiffness: 80, // Slightly softer for cards
                                damping: 15,
                                delay: index * 0.1, // Smooth stagger
                            }}
                            className="group rounded-3xl border border-gray-700 bg-gray-900/60 p-6 sm:p-8 backdrop-blur-md transition-shadow duration-300 hover:border-[#ffde59] hover:shadow-[0_0_20px_rgba(255,222,89,0.1)]"
                        >
                            {/* Icon */}
                            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-yellow-400/10 to-orange-500/10 text-[#ffde59] group-hover:scale-110 transition-transform duration-300">
                                {item.icon}
                            </div>

                            {/* Title */}
                            <h3 className="text-xl font-semibold text-white mb-2">
                                {item.title}
                            </h3>

                            {/* Description */}
                            <p className="text-gray-400 leading-relaxed">
                                {item.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};