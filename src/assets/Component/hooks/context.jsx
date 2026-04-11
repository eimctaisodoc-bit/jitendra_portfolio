import React, { createContext, useContext, useRef, useState } from "react";

export const ScrollContext = createContext(null);
export const ThemeContext = createContext(null);

export const ScrollProvider = ({ children }) => {
    const sectionsRef = useRef({});

    // register section
    const registerSection = (key, ref) => {
        sectionsRef.current[key] = ref;
    };

    // unregister (optional but good)
    const unregisterSection = (key) => {
        delete sectionsRef.current[key];
    };

    // 🔥 MAIN SCROLL FUNCTION
    const scrollToSection = (key, offset = 0) => {
        const el = sectionsRef.current[key]?.current;
        // console.log(el, "scroll to section element");
        if (!el) return;

        const top =
            el.getBoundingClientRect().top +
            window.scrollY -
            offset;

        window.scrollTo({
            top,
            behavior: "smooth",
        });
    };

    return (
        <ScrollContext.Provider
            value={{ registerSection, unregisterSection, scrollToSection }}
        >
            {children}
        </ScrollContext.Provider>
    );
}
export const ThemeProvider = ({ children }) => {
    const radial = `radial-gradient(
                          circle at center,
                          rgba(245, 158, 11, 0.15) 0%,
                          rgba(245, 158, 11, 0.08) 25%,
                          rgba(0, 0, 0, 0) 70%
                        )`
    const [color, setColor] = useState({ color: "text-amber-500", radial: radial });
    return (
        <ThemeContext.Provider value={{ color, setColor }}>
            {children}
        </ThemeContext.Provider>
    );
}