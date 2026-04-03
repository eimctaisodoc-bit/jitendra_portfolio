import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { MessageSquare, MoveLeft, MoveRight, Quote } from "lucide-react";

export const Testomonials = () => {
    const content = [
        {
            name: "John Doe",
            position: "CEO, Company A",
            testimonial:
                "Jitendra is an exceptional developer. His work on our project was outstanding and delivered ahead of schedule.",
        },
        {
            name: "Sarah Smith",
            position: "Founder, Brand Studio",
            testimonial:
                "Professional, creative, and highly reliable. The final result exceeded our expectations in both design and performance.",
        },
        {
            name: "Michael Lee",
            position: "Product Manager, Startup X",
            testimonial:
                "Very smooth collaboration from start to finish. Communication was clear, and every detail was implemented with care.",
        },
        {
            name: "Emily Watson",
            position: "Director, Tech Firm",
            testimonial:
                "One of the best developers we have worked with. Fast delivery, modern UI sense, and strong attention to detail.",
        },
        {
            name: "David Clark",
            position: "Owner, Creative Agency",
            testimonial:
                "The project was completed beautifully and on time. We were impressed by the code quality and polished user experience.",
        },
    ];

    const [[currentIndex, direction], setCurrentIndex] = useState([0, 0]);

    const paginate = (newDirection) => {
        setCurrentIndex(([prev]) => {
            const nextIndex = (prev + newDirection + content.length) % content.length;
            return [nextIndex, newDirection];
        });
    };

    const variants = {
        enter: (direction) => ({
            x: direction > 0 ? 120 : -120,
            opacity: 0,
            scale: 0.96,
        }),
        center: {
            x: 0,
            opacity: 1,
            scale: 1,
        },
        exit: (direction) => ({
            x: direction > 0 ? -120 : 120,
            opacity: 0,
            scale: 0.96,
        }),
    };

    const activeItem = content[currentIndex];

    return (
        <section className="relative mt-24 w-full overflow-hidden">
            <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
                <div className="lg:m-1 sm:m-5 sm:pb-4">
                    <motion.div
                        initial={{ opacity: 0, y: 80 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="flex w-fit items-center justify-start gap-2 rounded-2xl border border-gray-500 bg-gray-900/30 px-3 py-1"
                    >
                        <MessageSquare size={16} className="text-[#ffde59]" />
                        <span className="font-serif text-sm text-white">Testimonials</span>
                    </motion.div>
                </div>

                <motion.p
                    initial={{ opacity: 0, y: 80 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.35 }}
                    className="mt-4 max-w-3xl text-3xl font-serif tracking-wide text-white/90 sm:text-4xl lg:text-5xl"
                >
                    Trusted by <span className="text-[#ffde59]">Hundreds of Clients</span>
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 80 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.35 }}
                    viewport={{ once: true }}

                    className="mt-10 flex flex-col gap-8">
                    <div className="relative min-h-[320px] sm:min-h-[280px]">
                        <AnimatePresence mode="wait" custom={direction}>
                            <motion.div
                                key={currentIndex}
                                custom={direction}
                                variants={variants}
                                initial="enter"
                                animate="center"
                                exit="exit"
                                transition={{
                                    duration: 0.45,
                                    ease: [0.22, 1, 0.36, 1],
                                }}
                                className="relative rounded-3xl border border-gray-700 bg-gray-900/60 p-6 shadow-[0_10px_40px_rgba(0,0,0,0.25)] backdrop-blur-md sm:p-8 lg:p-10"
                            >
                                <div className="absolute right-6 top-6 opacity-10">
                                    <Quote size={58} className="text-[#ffde59]" />
                                </div>

                                <div className="flex flex-col gap-6">
                                    <div className="flex items-center gap-4">
                                        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-yellow-400/20 to-orange-500/20 text-lg font-bold text-white ring-1 ring-white/10">
                                            {activeItem.name
                                                .split(" ")
                                                .map((word) => word[0])
                                                .join("")
                                                .slice(0, 2)}
                                        </div>

                                        <div className="flex flex-col">
                                            <span className="text-lg font-bold tracking-tight text-white sm:text-xl">
                                                {activeItem.name}
                                            </span>
                                            <span className="text-sm font-medium text-blue-400 sm:text-base">
                                                {activeItem.position}
                                            </span>
                                        </div>
                                    </div>

                                    <p className="max-w-4xl text-base leading-8 text-gray-300 italic sm:text-lg">
                                        “{activeItem.testimonial}”
                                    </p>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                        <div className="flex items-center gap-3">
                            <button
                                onClick={() => paginate(-1)}
                                className="flex h-12 w-12 items-center justify-center rounded-full border border-gray-500 bg-gray-900/50 text-white transition-all duration-300 hover:-translate-y-0.5 hover:border-[#ffde59] hover:text-[#ffde59]"
                            >
                                <MoveLeft size={16} />
                            </button>

                            <div className="rounded-full border border-gray-700 bg-gray-900/40 px-4 py-2 text-sm text-white/80">
                                {currentIndex + 1} / {content.length}
                            </div>

                            <button
                                onClick={() => paginate(1)}
                                className="flex h-12 w-12 items-center justify-center rounded-full border border-gray-500 bg-gray-900/50 text-white transition-all duration-300 hover:-translate-y-0.5 hover:border-[#ffde59] hover:text-[#ffde59]"
                            >
                                <MoveRight size={16} />
                            </button>
                        </div>

                        <div className="flex items-center gap-2">
                            {content.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() =>
                                        setCurrentIndex([index, index > currentIndex ? 1 : -1])
                                    }
                                    className={`h-2.5 rounded-full transition-all duration-300 ${currentIndex === index
                                            ? "w-8 bg-[#ffde59]"
                                            : "w-2.5 bg-white/30 hover:bg-white/50"
                                        }`}
                                />
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};