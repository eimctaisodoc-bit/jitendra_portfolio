import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowBigDown } from "lucide-react";
import img from "../../img/skills.png";

export const Skills_img = () => {
    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 50 }}
                className="absolute top-0 right-0 flex justify-center items-center
                 gap-3 py-2 "
            >
                <ArrowBigDown size={24}  className="text-center"/>
                <img
                    src={img}
                    alt="Skills"
                    className="w-[50%] h-[50%] object-cover  rounded-md"
                />
            </motion.div>
        </AnimatePresence>
    );
};