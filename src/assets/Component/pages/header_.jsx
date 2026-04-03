import React, { useContext } from "react";
import { Video_ } from "../helpers/video";
import { Aside_ } from "../helpers/aside";
import { Audio_ } from "../helpers/audio";
import { MyContext } from "../hooks/context";
import { Home_ } from "./home";
import { AnimatePresence, motion } from "framer-motion";
import { Footer_ } from "./footer";
import { FloatingMenu } from "../helpers/floating";
import { ExperienceCounter } from "../helpers/expirence_number";
import { EducationSta } from "../helpers/eudcation";
import { Testomonials } from "../helpers/testomonials";
import { Specialize_ } from "../helpers/specialize";
import { Skills_img } from "../helpers/skills";


export const Header_ = () => {
  const context = useContext(MyContext);
  const name = context?.name ?? "Guest";

  return (
    <>
      <AnimatePresence >
        <Audio_  key='1-0'/>
        <Video_  key='1-1'/>

        {/* Overlay */}
        <div className="bg-[rgba(28,28,28,0.8)] fixed inset-0 z-10 h-full w-full" />

        <header className="relative z-20 flex flex-col justify-center  lg:flex-row min-h-screen text-white" key='2332'>


          <motion.div
            key='aside_jsdfj'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="w-full lg:fixed lg:left-0  lg:p-4 md:p-4 py-3 lg:top-0 lg:h-full lg:w-[390px] z-30"
          >
            <Aside_  key='2-6' />
          </motion.div>


            {/* <Skills_img key='2-7'/> */}
          <main className="flex-1 w-full px-4 py-8 mt-8 space-y-6 lg:ml-[390px] md:px-10 lg:px-16">
       
            <Home_ />
            <div className="flex gap-16 w-full ">
              <ExperienceCounter x={-120} key='2-5' />
              <ExperienceCounter to={10} from={90} title="Project Completed "  x={120}  key='1-4'/>

            </div>
            <EducationSta key='2-1'/>
            <Testomonials key='2-8'/> 
            <Specialize_/>
            <Footer_  key='2-4'/>
            
          </main>
          <FloatingMenu />

        </header>
      </AnimatePresence>
    </>
  );
};