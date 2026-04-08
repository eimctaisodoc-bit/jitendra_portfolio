import React, { useState } from "react";
import { motion } from "framer-motion";
import {
    MessageSquareDot,
    Settings
} from "lucide-react";
import { Drawer_ } from "./drawer";
import prof from "../../img/profile.png";

export const Aside_ = () => {
    const [open, setOpen] = useState(false);

    const container = {
        hidden: {},
        show: {
            transition: {
                staggerChildren: 0.12,
                delayChildren: 0.15,
            },
        },
    };

    const fadeUp = {
        hidden: {
            opacity: 0,
            y: 30,
        },
        show: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.7,
                ease: [0.22, 1, 0.36, 1],
            },
        },
    };

    const blurReveal = {
        hidden: {
            opacity: 0,
            y: 20,
            filter: "blur(12px)",
        },
        show: {
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            transition: {
                duration: 0.9,
                ease: [0.22, 1, 0.36, 1],
            },
        },
    };

    const imagePopup = {
        hidden: {
            opacity: 0,
            scale: 0.82,
            y: 40,
            filter: "blur(16px)",
        },
        show: {
            opacity: 1,
            scale: 1,
            y: 0,
            filter: "blur(0px)",
            transition: {
                duration: 1,
                ease: [0.22, 1, 0.36, 1],
            },
        },
    };

    return (
        <>
            <motion.aside
                initial={{ opacity: 0, y: 35, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="relative w-full max-w-[450px] md:max-w-[360px] 
                lg:max-w-[350px] mx-auto min-h-[580px] md:min-h-screen border
                 border-white/10 rounded-[28px] bg-white/5 backdrop-blur-xl 
                shadow-[0_10px_50px_rgba(0,0,0,0.18)] overflow-hidden"
            >
                {/* soft glow */}
                <div className="pointer-events-none absolute 
                inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,222,89,0.18),_transparent_35%),radial-gradient(circle_at_bottom,_rgba(255,255,255,0.06),_transparent_30%)]" />

                {/* Settings Button */}
                <motion.button
                    initial={{ opacity: 0, x: -20, scale: 0.8 }}
                    animate={{ opacity: 1, x: 0, scale: 1 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                    onClick={() => setOpen(true)}
                    className="absolute top-5 left-4 z-20 bg-[rgba(28,28,28,0.82)] border border-white/10 p rounded-full shadow-md hover:scale-105 transition"
                >
                    <Settings
                        className="text-white animate-spin [animation-duration:3s]"
                        size={16}
                    />
                </motion.button>

                <motion.div
                    variants={container}
                    initial="hidden"
                    animate="show"
                    className="relative z-10 p-5 sm:p-6 md:p-7 flex flex-col justify-between h-full gap-7"
                >
                    {/* Profile Image */}
                    <motion.div
                        variants={imagePopup}
                        className="flex justify-center pt-10 md:pt-14"
                    >
                        <motion.div
                            whileHover={{ scale: 1.04, y: -4 }}
                            transition={{ duration: 0.35 }}
                            className="relative"
                        >
                            <div className="absolute inset-0 rounded-[30px] bg-[#ffde59]/20 blur-2xl scale-95" />
                            <img
                                src={prof}
                                alt="Profile"
                                className="relative w-40 h-40 sm:w-48 sm:h-48 md:w-52 md:h-52 object-cover rounded-[28px] border border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.28)]"
                            />
                        </motion.div>
                    </motion.div>

                    {/* Info */}
                    <motion.div
                        variants={container}
                        className="text-center font-serif text-white "
                    >
                        <motion.p
                            variants={blurReveal}
                            className="text-2xl sm:text-3xl md:text-[32px] tracking-wide font-bold leading-snug"
                        >
                            Jitendra Singh
                        </motion.p>

                        <motion.p
                            variants={blurReveal}
                            className="text-lg sm:text-xl text-white/90"
                        >
                           Digital Creator & Hardware Specialist
                        </motion.p>

                        <motion.p
                            variants={blurReveal}
                            className="text-sm sm:text-base text-white/70"
                        >
                            Kathmandu, Nepal
                        </motion.p>
                    </motion.div>

                    {/* Socials */}
                    <motion.div
                        variants={fadeUp}
                        className="flex flex-wrap justify-center gap-3 sm:gap-4"
                    >
                        {[
                            {
                                href: "https://www.linkedin.com/in/jitendra-singh-9b1a4b1b2/",
                                icon: "https://cdn.simpleicons.org/linkedin/ffffff",
                                alt: "LinkedIn",
                            },
                            {
                                href: "https://github.com/",
                                icon: "https://cdn.simpleicons.org/github/ffffff",
                                alt: "GitHub",
                            },
                            {
                                href: "https://instagram.com/",
                                icon: "https://cdn.simpleicons.org/instagram/ffffff",
                                alt: "Instagram",
                            },
                            {
                                href: "https://twitter.com/",
                                icon: "https://cdn.simpleicons.org/x/ffffff",
                                alt: "Twitter/X",
                            },
                            {
                                href: "https://youtube.com/",
                                icon: "https://cdn.simpleicons.org/youtube/ffffff",
                                alt: "YouTube",
                            },
                        ].map((item, index) => (
                            <motion.a
                                key={index}
                                href={item.href}
                                target="_blank"
                                rel="noreferrer"
                                initial={{ opacity: 0, y: 18, scale: 0.9 }}
                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                transition={{ delay: 0.45 + index * 0.08, duration: 0.5 }}
                                whileHover={{ y: -4, scale: 1.08 }}
                                whileTap={{ scale: 0.96 }}
                                className="p-3 rounded-full bg-white/10 hover:bg-white/20 hover:border hover:border-[#ffde59] transition"
                            >
                                <img
                                    src={item.icon}
                                    alt={item.alt}
                                    className="w-4 h-4 sm:w-5 sm:h-5"
                                />
                            </motion.a>
                        ))}
                    </motion.div>

                    {/* Button */}
                    <motion.div
                        variants={fadeUp}
                        className="flex justify-center"
                    >
                        <motion.button
                            whileHover={{ scale: 1.04, y: -2 }}
                            whileTap={{ scale: 0.97 }}
                            className="px-5 sm:px-6 py-3 text-base sm:text-lg cursor-pointer flex justify-center items-center gap-2.5 bg-[#ffde59] font-serif text-[#1c1c1c] font-bold rounded-full hover:bg-[#e0c94d] transition-all duration-300 shadow-[0_12px_35px_rgba(255,222,89,0.2)]"
                        >
                            <MessageSquareDot size={21} className="text-black" />
                            <span>Hire Me</span>
                        </motion.button>
                    </motion.div>

                    {/* Footer */}
                    <motion.div
                        variants={blurReveal}
                        className="flex justify-center pt-1"
                    >
                        <p className="font-serif text-white/55 text-center text-xs sm:text-sm leading-relaxed capitalize max-w-[280px]">
                            copyright © 2026 Jitendra Singh. All rights reserved.
                        </p>
                    </motion.div>
                </motion.div>
            </motion.aside>

            <Drawer_ open={open} SetOpen={setOpen} />
        </>
    );
};