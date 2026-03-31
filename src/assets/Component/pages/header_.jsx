import React, { useContext } from "react";
import { Video_ } from "../helpers/video";
import { Aside_ } from "../helpers/aside";
import { Audio_ } from "../helpers/audio";
import { MyContext } from "../hooks/context";
import { Home_ } from "./home";
import { AnimatePresence, motion } from "framer-motion";
import { Footer_ } from "./footer";
import { FloatingMenu } from "../helpers/floating";

export const Header_ = () => {
  const context = useContext(MyContext);
  const name = context?.name ?? "Guest";
  
  return (
    <>
      <AnimatePresence>
        <Audio_ />
        <Video_ />

        {/* Overlay */}
        <div className="bg-[rgba(28,28,28,0.8)] fixed inset-0 z-10 h-full w-full" />

        <header className="relative z-20 flex flex-col justify-center  lg:flex-row min-h-screen text-white">
          
         
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="w-full lg:fixed lg:left-0  lg:p-4 md:p-4 py-3 lg:top-0 lg:h-full lg:w-[390px] z-30"
          >
            <Aside_ />
          </motion.div>

         
          <main className="flex-1 w-full px-4 py-6 space-y-6 lg:ml-[390px] md:px-10 lg:px-16">
            <Home_ />
            <Footer_ />
          </main>
          <FloatingMenu/>
          
        </header>
      </AnimatePresence>
    </>
  );
};