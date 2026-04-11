import React, { useContext, useState } from "react";
import { motion } from "framer-motion";
import {
    MessageSquareDot,
    Settings,
    Mail,
    Phone,
    MapPin
} from "lucide-react";
import { Drawer_ } from "./drawer";
import prof from "../../img/profile.png";
import { ScrollContext,  ThemeContext } from "../hooks/context";

export const Aside_ = () => {
    const [open, setOpen] = useState(false);
     const { color:{color,radial}, setColor } = useContext(ThemeContext);
    //  console.log('from use aside ', typeof radial)
        console.log('theme', color)

    const containerVariants = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: { staggerChildren: 0.1, delayChildren: 0.2 }
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 15 },
        show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    };
    const { scrollToSection } = useContext(ScrollContext);
    const scrollfrom = () => {
        scrollToSection("contact", 100)
    }
    return (
        <>
            <motion.aside
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                className={`relative w-[99%] sm:w-full max-w-[380px] mx-auto 
                min-h-[640px] flex flex-col
                border border-white/10 rounded-md 
                bg-black/40 backdrop-blur-3xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] 
                overflow-hidden`}
            >
                {/* Amber Spotlight Background Integration */}
                <div
                    className="absolute inset-0 z-0 pointer-events-none"
                   style={{ background: `radial-gradient(
                          circle at center,
                          rgba(245, 158, 11, 0.15) 0%,
                          rgba(245, 158, 11, 0.08) 25%,
                          rgba(0, 0, 0, 0) 70%
                        )` }}
                />

                {/* Top Subtle Edge Highlight */}
                <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-amber-500/30 to-transparent z-10" />

                {/* Interactive Settings Button */}
                <motion.button
                    whileHover={{ backgroundColor: "rgba(255,255,255,0.08)", rotate: 45 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setOpen(true)}
                    className="absolute top-5 right-5 z-20 p-2.5 bg-white/5 border border-white/10 rounded-md text-amber-500 transition-all cursor-pointer"
                >
                    <Settings size={18} className="animate-[spin_8s_linear_infinite]" />
                </motion.button>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="show"
                    className="relative z-10 p-7 sm:p-9 flex flex-col flex-grow"
                >
                    {/* Profile Image - Sharpened & Responsive */}
                    <motion.div variants={itemVariants} className="flex justify-center mt-4 mb-10">
                        <div className="relative group">
                            {/* Inner Glow */}
                            <div className="absolute -inset-4 bg-amber-600/10 blur-3xl opacity-40 group-hover:opacity-60 transition-opacity" />
                            <img
                                src={prof}
                                alt="Profile"
                                className="relative w-48 h-48 sm:w-44 sm:h-44 object-cover rounded-md border border-white/15 shadow-2xl"
                            />
                        </div>
                    </motion.div>

                    {/* Branding & Bio */}
                    <div className="text-center ">
                        <motion.div variants={itemVariants}>
                            <h2 className="text-3xl font-extrabold text-white tracking-tight uppercase">
                                Jitendra Singh
                            </h2>
                            <p className={`text-base text-amber-500 font-bold tracking-[0.2em] mt-2 uppercase`}>
                                Digital Creator
                            </p>
                        </motion.div>

                        {/* Contact Group - Enhanced Interactive Boxes */}
                        <motion.div
                            variants={itemVariants}
                            className="flex flex-col gap-3 py-4"
                        >
                            {[
                                { Icon: MapPin, text: "Lalitpur, Nepal" },
                                { Icon: Mail, text: "jitendra@email.com", isLink: true },
                                { Icon: Phone, text: "+977 98XXXXXXXX" }
                            ].map((item, idx) => (
                                <div
                                    key={idx}
                                    className="flex items-center gap-4 px-2 py-1.5 bg-white/[0.03] border border-white/5 rounded-md hover:bg-white/[0.07] hover:border-white/10 transition-all duration-300 group"
                                >
                                    <item.Icon size={18} className="text-amber-500 group-hover:scale-110 transition-transform" />
                                    <span className="text-[15px] sm:text-base text-white/70 group-hover:text-white transition-colors truncate">
                                        {item.text}
                                    </span>
                                </div>
                            ))}
                        </motion.div>
                    </div>

                    {/* Social Grid */}
                    <motion.div variants={itemVariants} className="flex justify-center gap-3 mt-2">
                        {['linkedin', 'github', 'instagram', 'x'].map((platform) => (
                            <motion.a
                                key={platform}
                                href="#"
                                whileHover={{ y: -4, backgroundColor: "rgba(245, 158, 11, 0.1)", borderColor: "rgba(245, 158, 11, 0.4)" }}
                                whileTap={{ scale: 0.9 }}
                                className="w-12 h-12 flex items-center 
                                justify-center rounded-md bg-white/5 border border-white/10 transition-all"
                            >
                                <img
                                    src={`https://cdn.simpleicons.org/${platform}/ffffff`}
                                    className="w-5 h-5 opacity-60 group-hover:opacity-100"
                                    alt={platform}
                                />
                            </motion.a>
                        ))}
                    </motion.div>

                    {/* Hire Me - Massive Interactive CTA */}
                    <motion.div variants={itemVariants} className="mt-auto pt-4 ">
                        <motion.button
                            onClick={scrollfrom}
                            // onClick={()=>{
                            //     // alert(window.innerHeight+900);
                            //     window.scrollTo({ top: window.innerHeight+5280, behavior: 'smooth' });
                            // }}
                            whileHover={{
                                scale: 1.02,
                                backgroundColor: "#fbbf24",
                                boxShadow: "0 0 30px rgba(245, 158, 11, 0.3)"
                            }}
                            whileTap={{ scale: 0.98 }}
                            className="w-full py-2 flex justify-center items-center gap-3 
                            bg-amber-500 text-white text-xl font-black rounded-md
                            transition-all uppercase tracking-wider cursor-pointer"
                        >
                            <MessageSquareDot size={24} strokeWidth={3} />
                            <span>Hire Me</span>
                        </motion.button>
                    </motion.div>
                </motion.div>
            </motion.aside>

            <Drawer_ open={open} SetOpen={setOpen} />
        </>
    );
};