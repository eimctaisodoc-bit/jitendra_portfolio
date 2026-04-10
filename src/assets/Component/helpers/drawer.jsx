import { X } from "lucide-react";
import React from "react";
import { AnimatePresence, motion } from "framer-motion";

export const Drawer_ = ({ open, SetOpen }) => {
    const colors = [
        "bg-green-500",
        "bg-yellow-500",
        "bg-orange-500",
        "bg-cyan-500",
        "bg-gray-300",
        "bg-blue-600",
        "bg-red-500",
        "bg-pink-400",
    ];

    const shapes = [
        "Earth Lines Sphere",
        "3D Abstract Ball",
        "Water Waves",
        "Liquids Wavy",
        "Solid Color",
        "Simple Strings",
    ];

    return (
        <AnimatePresence>
            {open && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className="fixed inset-0 bg-black/80 flex justify-end z-50"
                    onClick={() => SetOpen(false)}
                >
                    {/* Drawer */}
                    <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: 420 }}
                        exit={{ width: 0 }}
                        transition={{ duration: 0.5 }}
                        className="h-full overflow-hidden"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="h-full w-full bg-gradient-to-b from-black via-slate-900 to-black text-white p-6">

                            {/* Header */}
                            <div className="flex justify-between items-center mb-8">
                                <h1 className="text-2xl font-semibold tracking-wide">
                                    Configuration
                                </h1>
                                <button
                                    className="bg-red-600 hover:bg-red-700 p-1 rounded"
                                    onClick={() => SetOpen(false)}
                                >
                                    <X size={26} />
                                </button>
                            </div>

                            {/* COLORS */}
                            <div className="mb-10">
                                <h2 className="text-sm text-gray-400 mb-4 tracking-widest">
                                    COLORS
                                </h2>

                                <div className="flex gap-4 flex-wrap">
                                    {colors.map((color, i) => (
                                        <div
                                            key={i}
                                            className={`w-10 h-10 rounded-full cursor-pointer ${color} border-2 border-transparent hover:border-white transition`}
                                        />
                                    ))}
                                </div>
                            </div>

                            {/* SHAPES */}
                            <div>
                                <h2 className="text-sm text-gray-400 mb-6 tracking-widest">
                                    THREE DIMENSIONAL SHAPES
                                </h2>

                                <div className="grid grid-cols-2 gap-6 text-sm">
                                    {shapes.map((item, i) => (
                                        <div
                                            key={i}
                                            className="cursor-pointer text-gray-200 hover:text-white transition"
                                        >
                                            {item}
                                        </div>
                                    ))}
                                </div>
                            </div>

                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};