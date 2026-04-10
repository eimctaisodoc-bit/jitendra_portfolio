import React from "react";
import {
    motion,
    useMotionValue,
    useSpring,
    useInView,
} from "framer-motion";
import { useEffect, useRef, useState } from "react";

export const ExperienceCounter = ({
    from = 0,
    to = 100,
    duration = 4,
    x = 0,
    suffix = "+",
    title = "Years of Experience",
}) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, threshold: 0.4 });

    const motionValue = useMotionValue(from);
    const spring = useSpring(motionValue, { duration: duration * 1000 });

    const [display, setDisplay] = useState(from);

    useEffect(() => {
        if (isInView) {
            motionValue.set(to);
        }
    }, [isInView, to, motionValue]);

    useEffect(() => {
        const unsubscribe = spring.on("change", (latest) => {
            setDisplay(Math.floor(latest));
        });
        return () => unsubscribe();
    }, [spring]);

    return (
        <>
            <div className="lg:my-28 md:my-28 my-14">

                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, x: x }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, threshold: 0.4 }}
                    transition={{ duration: 1 }}
                    className="  "
                >
                    <div className="md:text-7xl lg:text-7xl text-5xl font-bold text-amber-500">

                        {display}
                        {suffix}
                    </div>
                    <span className="text-2xl text-gray-300">{title}</span>
                </motion.div>
            </div>
        </>
    );
}