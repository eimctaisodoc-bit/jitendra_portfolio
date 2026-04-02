import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { MessageSquare, MoveLeft, MoveRight } from "lucide-react";
export const Testomonials = () => {

    const content = [
        {
            name: "John Doe",
            position: "CEO, Company A",
            testimonial: "Jitendra is an exceptional developer. His work on our project was outstanding and delivered ahead of schedule.",
        },
        {
            name: "John Doe",
            position: "CEO, Company A",
            testimonial: "Jitendra is an exceptional developer. His work on our project was outstanding and delivered ahead of schedule.",
        },
        {
            name: "John Doe",
            position: "CEO, Company A",
            testimonial: "Jitendra is an exceptional developer. His work on our project was outstanding and delivered ahead of schedule.",
        },
        {
            name: "John Doe",
            position: "CEO, Company A",
            testimonial: "Jitendra is an exceptional developer. His work on our project was outstanding and delivered ahead of schedule.",
        },
        {
            name: "John Doe",
            position: "CEO, Company A",
            testimonial: "Jitendra is an exceptional developer. His work on our project was outstanding and delivered ahead of schedule.",
        },
        {
            name: "John Doe",
            position: "CEO, Company A",
            testimonial: "Jitendra is an exceptional developer. His work on our project was outstanding and delivered ahead of schedule.",
        },
        {
            name: "John Doe",
            position: "CEO, Company A",
            testimonial: "Jitendra is an exceptional developer. His work on our project was outstanding and delivered ahead of schedule.",
        },
    ]
    return (

        <AnimatePresence>


            <div className="relative mt-32">
                <div className="lg:m-1 sm:m-5 sm:pb-4">
                    <motion.div
                        initial={{ opacity: 0, y: 80 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="flex w-fit px-3 py-1 justify-start gap-2 items-center
                bg-gray-900/30 rounded-2xl border border-gray-500  ">
                        <span><MessageSquare size={16} /></span>
                        <span className="font-serif text-sm">Testimonials</span>
                    </motion.div>
                </div>
                <motion.p initial={{ opacity: 0, y: 80 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    className=" mt-4 text-5xl font-serif tracking-wider text-white/80 ">
                    Trusted by  <span className="text-[#ffde59]">

                        Hundered Clients
                    </span>
                </motion.p>
                <div className="flex flex-col justify-start gap-6 my-6">

                    <div className="rounded-2xl border-2 border-gray-500 w-full p-6">

                    </div>
                    <div className="flex    gap-4 items-center justify-start align-middle ">
                        <div className="full"><button className="rounded-full border-2 p-4  border-gray-400 "><MoveLeft size={14} /></button></div>
                        <span>1 / {content.length}</span>
                        <div className="full"><button className="rounded-full border-2 p-4  border-gray-400 "><MoveRight size={14} /></button></div>
                    </div>
                </div>

            </div>
        </AnimatePresence>
    )


}