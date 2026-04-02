import React from "react";
import { Home, User, Briefcase, Mail, Zap } from "lucide-react"; // or react-icons/fa etc
import { div } from "framer-motion/client";

export const FloatingMenu = () => {
    const menuItems = [
        { name: "Home", icon: <Home size={20} /> },
        { name: "About", icon: <User size={20} /> },
        { name: "Projects", icon: <Briefcase size={20} /> },
        { name: "Contact", icon: <Mail size={20} /> },
        { name: "Skills", icon: <Zap size={20} /> },
    ];

    return (
        <div className="fixed top-[50%] right-4 z-50 bg-black rounded-2xl p-3 rounded-lg shadow-lg">
            {menuItems.map((item, index) => (
                <div className="relative" key={`menus-${index}`}>

                    <a
                        key={`_menu-${index}`}
                        href={`#${item.name.toLowerCase()}`}
                        className="flex items-center gap-2 mb-4 text-gray-300 hover:text-white transition-colors duration-300"
                    >
                        {item.icon}
                        {/* <span>{item.name}</span> */}
                    </a>
                    {/* <div className="absolute -left-9 top-1/2 transform
                     -translate-y-1/2 w-9 h-3 bg-[#ffde59] rounded-full " >
                    </div> */}

                </div>
            ))}
        </div>
    );
};