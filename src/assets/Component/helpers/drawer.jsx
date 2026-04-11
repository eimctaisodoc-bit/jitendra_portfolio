import { X } from "lucide-react";
import React, { useContext } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ThemeContext } from "../hooks/context";

// 1. Centralized Theme Config (Easier to manage)
const THEME_OPTIONS = [
  { name: "green", text: "text-green-500", bg: "bg-green-500", rgb: "34,197,94" },
  { name: "yellow", text: "text-yellow-500", bg: "bg-yellow-500", rgb: "234,179,8" },
  { name: "orange", text: "text-orange-500", bg: "bg-orange-500", rgb: "249,115,22" },
  { name: "cyan", text: "text-cyan-500", bg: "bg-cyan-500", rgb: "6,182,212" },
  { name: "gray", text: "text-gray-300", bg: "bg-gray-300", rgb: "209,213,219" },
  { name: "blue", text: "text-blue-600", bg: "bg-blue-600", rgb: "37,99,235" },
  { name: "red", text: "text-red-500", bg: "bg-red-500", rgb: "239,68,68" },
  { name: "pink", text: "text-pink-400", bg: "bg-pink-400", rgb: "244,114,182" },
];

const SHAPES = [
  "Earth Lines Sphere", "3D Abstract Ball", "Water Waves", 
  "Liquids Wavy", "Solid Color", "Simple Strings"
];

export const Drawer_ = ({ open, SetOpen }) => {
  const { setColor } = useContext(ThemeContext);

  // Helper function to build the radial string
  const getRadialBg = (rgb) => `radial-gradient(
    circle at center,
    rgba(${rgb}, 0.18) 0%,
    rgba(${rgb}, 0.10) 30%,
    rgba(${rgb}, 0.04) 50%,
    rgba(0,0,0,0) 70%
  )`;

  // Update context directly on click
  const handleThemeChange = (themeObj) => {
    setColor({
      color: themeObj.text,
      radial: getRadialBg(themeObj.rgb),
    });
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/80 flex justify-end z-50"
          onClick={() => SetOpen(false)}
        >
          <motion.div
            initial={{ x: "100%" }} // Slide from right is smoother than width: 0
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="h-full w-full max-w-[420px] bg-gradient-to-b from-black via-slate-900 to-black text-white p-6 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex justify-between items-center mb-8">
              <h1 className="text-2xl font-semibold tracking-wide">Configuration</h1>
              <button
                className="bg-red-600/20 hover:bg-red-600 text-red-500 hover:text-white p-2 rounded-lg transition-colors"
                onClick={() => SetOpen(false)}
              >
                <X size={20} />
              </button>
            </div>

            {/* COLORS */}
            <div className="mb-10">
              <h2 className="text-xs text-gray-500 mb-4 tracking-widest uppercase font-bold">
                Accent Colors
              </h2>
              <div className="flex gap-4 flex-wrap">
                {THEME_OPTIONS.map((theme) => (
                  <button
                    key={theme.name}
                    onClick={() => handleThemeChange(theme)}
                    className={`w-10 h-10 rounded-full cursor-pointer ${theme.bg} border-2 border-transparent hover:scale-110 hover:border-white transition-all active:scale-95`}
                    title={theme.name}
                  />
                ))}
              </div>
            </div>

            {/* SHAPES */}
            <div>
              <h2 className="text-xs text-gray-500 mb-6 tracking-widest uppercase font-bold">
                Three Dimensional Shapes
              </h2>
              <div className="grid grid-cols-2 gap-4 text-sm">
                {SHAPES.map((shape, i) => (
                  <div
                    key={i}
                    className="cursor-pointer p-3 rounded-md bg-white/5 border border-white/10 text-gray-300 hover:bg-white/10 hover:text-white transition"
                  >
                    {shape}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};