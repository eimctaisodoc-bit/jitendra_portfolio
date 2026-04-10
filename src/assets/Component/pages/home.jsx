import { HomeIcon } from "lucide-react"
import { AnimatePresence, motion } from "framer-motion"
import { Pointer_ } from "../helpers/pointer"
export const Home_ = () => {
    return (
        <AnimatePresence>


            <div className="relative">
                <div className="lg:m-3 sm:m-5 sm:pb-4">
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="flex w-fit px-3 py-1 justify-start gap-2 items-center
                bg-gray-900/30 rounded-2xl border border-gray-500  ">
                        <span><HomeIcon size={16} /></span>
                        <span className="font-serif text-sm">INTRODUCUCE</span>
                    </motion.div>

                </div>
                <motion.div initial={{ scale: 0.8, opacity: 0, x: -50 }}
                    animate={{ scale: 1, opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }} className="mt-8">


                    <h1 className="lg:text-7xl md:text-7xl  text-5xl font-extrabold lg:font-normal md:font-normal sm:font-extrabold  tracking-widest   text-white  
                font-serif">Say Hi from <br /> <span className="text-[#ffde59]">Jitendra</span> , <br /> Webflow <br /> Designer and <br /> Developer</h1>
                </motion.div>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    className=" mt-9 text-lg font-serif tracking-wider text-white/80 mt-4">
                    I design and code beautifully simple things and i love what i do. Just simple like that!
                </motion.p>
                <Pointer_/>
            </div>
        </AnimatePresence>
    )
}