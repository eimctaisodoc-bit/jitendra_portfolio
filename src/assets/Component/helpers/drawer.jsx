import { X } from "lucide-react";
import React from "react";
import { AnimatePresence, motion } from "framer-motion";

export const Drawer_ = ({ open, SetOpen }) => {
    return (
        <AnimatePresence>
            {open && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1 }}
                    className="fixed inset-0 bg-black/80 flex justify-end"
                    onClick={() => SetOpen(false)}
                >
                    <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: 400 }}  
                        exit={{ width: 0 }}
                        transition={{ duration: 0.8 }}
                        className="h-full bg-blue-800 overflow-hidden"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="w-full flex justify-end p-2">
                            <button
                                className="bg-red-600 rounded cursor-pointer"
                                onClick={() => SetOpen(false)}
                            >
                                <X size={31} className="text-white" />
                            </button>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};