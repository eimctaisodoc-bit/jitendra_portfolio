import React from "react";
import { Home, User, Briefcase, Mail, Zap } from "lucide-react"; // or react-icons/fa etc
export const FloatingMenu = () => {
    const menuItems = [
        { name: "Home", icon: <Home size={20} /> },
        { name: "About", icon: <User size={20} /> },
        { name: "Projects", icon: <Briefcase size={20} /> },
        { name: "Contact", icon: <Mail size={20} /> },
        { name: "Skills", icon: <Zap size={20} /> },
    ];

    return (
        <div className="fixed top-[50%] right-4 z-50 bg-black rounded-2xl p-1.5 rounded-lg shadow-lg">
            {menuItems.map((item, index) => (
                <div className="relative group flex items-center" key={`menu-container-${index}`}>

                    {/* Tooltip Box */}
                    <div className="absolute right-full mr-4 flex items-center opacity-0 
                    group-hover:opacity-100 transition-opacity 
                    duration-200 pointer-events-none">
                        <div className="relative bg-black text-white 
                        text-[10px] uppercase tracking-wider px-3 py-1.5 rounded-sm whitespace-nowrap">
                            {item.name}
                            {/* The Arrow */}
                            <div className="absolute top-1/2 -right-1 w-4 h-4 
                            bg-black rotate-45 transform -translate-y-1/2" />
                        </div>
                    </div>

                    {/* Menu Link & Icon */}
                    <a
                        href={`#${item.name.toLowerCase()}`}
                        className="flex items-center justify-center p-2 text-gray-400 hover:text-white transition-all duration-300 ease-in-out hover:scale-110"
                        aria-label={item.name}
                    >
                        <div className="text-xl">
                            {item.icon}
                        </div>
                    </a>

                </div>
            ))}
        </div>
    );
};