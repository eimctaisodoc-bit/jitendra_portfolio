import React from "react";
import { motion } from "framer-motion";
import { Keyboard, FileText, Globe, Image, Code, Database, Cpu, Network, TrendingUp, Users,  DollarSign, HardDrive, Lock, ShieldOff, Wrench, Camera, RefreshCw, Smartphone, Sparkles, BookAudio } from "lucide-react";

export const Skills_ = () => {
    const content = [
        {
            icon: <Keyboard size={22} />,
            title: "English & Nepali Typing",
            desc: "Proficient in fast and accurate typing in English and Nepali languages.",
        },
        {
            icon: <FileText size={22} />,
            title: "Ms-Office (2007-2021)",
            desc: "Skilled in Microsoft Office suite including Word, Excel, PowerPoint from 2007 to 2021 versions.",
        },
        {
            icon: <Globe size={22} />,
            title: "Web Development & Graphics Designing",
            desc: "Experienced in web development and creating graphics designs.",
        },
        {
            icon: <Image size={22} />,
            title: "Adobe Photoshop Designing",
            desc: "Expert in Adobe Photoshop for professional graphic designing.",
        },
        {
            icon: <Code size={22} />,
            title: "Programming Languages",
            desc: "Proficient in C, C++, HTML, CSS, PHP, and database management with MS Access.",
        },
        {
            icon: <Cpu size={22} />,
            title: "Computer Hardware & Networking",
            desc: "Knowledgeable in computer hardware components and networking setups.",
        },
        {
            icon: <TrendingUp size={22} />,
            title: "Digital Marketing & Social Media Handling",
            desc: "Experienced in digital marketing strategies and social media management.",
        },
        {
            icon: <BookAudio size={22} />,
            title: "Facebook Page Boost & Google Ads",
            desc: "Skilled in boosting Facebook pages and managing Google Ads campaigns.",
        },
        {
            icon: <Users size={22} />,
            title: "Social Media Marketing",
            desc: "Expert in social media marketing and engagement strategies.",
        },
        {
            icon: <HardDrive size={22} />,
            title: "HDD Recovery & Unlock Windows",
            desc: "Capable of hard drive recovery and unlocking Windows systems.",
        },
        {
            icon: <ShieldOff size={22} />,
            title: "Create Phishing Link",
            desc: "Knowledgeable in creating phishing links for security purposes.",
        },
        {
            icon: <Wrench size={22} />,
            title: "Computer Hardware & Maintenance",
            desc: "Proficient in maintaining and repairing computer hardware.",
        },
        {
            icon: <Camera size={22} />,
            title: "Surveillance CCTV & Smart Wi-fi Camera Handling",
            desc: "Skilled in installing and managing surveillance CCTV and smart Wi-Fi cameras.",
        },
        {
            icon: <RefreshCw size={22} />,
            title: "Windows Formatting",
            desc: "Experienced in formatting and reinstalling Windows operating systems.",
        },
        {
            icon: <Globe size={22} />,
            title: "Web-Site Handling",
            desc: "Adept at managing and maintaining websites.",
        },
        {
            icon: <Smartphone size={22} />,
            title: "Break Mobile FRP Lock",
            desc: "Capable of bypassing mobile FRP locks.",
        },
    ];

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
                    <span className="text-sm text-white font-serif">Skills</span>
                </motion.div>

                {/* Heading */}
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.1 }}
                    className="mt-4 max-w-3xl text-3xl sm:text-4xl lg:text-5xl font-serif text-white"
                >
                    What I <span className="text-[#ffde59]">Know</span>
                </motion.h2>

                {/* List */}
                <div className="mt-12 flex flex-col gap-6">
                    {content.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{
                                type: "spring",
                                stiffness: 80,
                                damping: 15,
                                delay: index * 0.05,
                            }}
                            className="group flex items-start gap-4"
                        >
                            {/* Icon */}
                            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-yellow-400/10 to-orange-500/10 text-[#ffde59] group-hover:scale-110 transition-transform duration-300">
                                {item.icon}
                            </div>

                            {/* Content */}
                            <div>
                                <h3 className="text-xl font-semibold text-white mb-2">
                                    {item.title}
                                </h3>
                                <p className="text-gray-400 leading-relaxed">
                                    {item.desc}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};