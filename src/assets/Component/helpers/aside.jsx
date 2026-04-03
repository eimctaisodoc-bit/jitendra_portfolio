import React, { useState } from "react";
import { MessageCircle, MessageCircleCheckIcon, MessageCircleHeart, MessageSquare, MessageSquareDot, Settings } from "lucide-react";
import { Drawer_ } from "./drawer";
import prof from "../../img/profile.png";

export const Aside_ = () => {
    const [open, setOpen] = useState(false);

    return (
        <>
      
            <aside className="relative  w-full lg:max-w-[350px] md:max-w-[350px] max-w-[450px] mx-auto h-screen  border  border-gray-300  rounded-2xl bg-transparent shadow-sm">
              
                {/* Settings Button */}
                <button
                    onClick={() => setOpen(true)}
                    className="absolute top-6 -left-4 bg-[rgba(28,28,28,0.8)] p-2 rounded-full shadow-md hover:scale-105 transition"
                >
                    <Settings
                        className="text-white animate-spin [animation-duration:2s]"
                        size={16}
                    />
                </button>

                <div className="p-5 flex flex-col gap-6">

                    {/* Profile Image */}
                    <div className="flex justify-center">
                        <img
                            src={prof}
                            alt="Profile"
                            className="w-52 h-52 object-cover rounded-2xl"
                        />
                    </div>

                    {/* Info */}
                    <div className="text-center font-serif text-white">
                        <p className="text-3xl tracking-wider font-bold">
                            Jitendra Singh
                        </p>
                        <p className="text-xl text-white/90">
                            Full Stack Developer
                        </p>
                        <p className="text-base text-white/80">
                            Kathmandu, Nepal
                        </p>
                    </div>

                    {/* Socials (Real Brand Icons) */}
                    <div className="flex justify-center gap-4">

                        <a
                            href="https://www.linkedin.com/in/jitendra-singh-9b1a4b1b2/"
                            target="_blank"
                            rel="noreferrer"
                            className="p-2 rounded-full bg-white/10 hover:bg-white/20   hover:border hover:border-[#ffde59] transition hover:scale-110"
                        >
                            <img
                                src="https://cdn.simpleicons.org/linkedin/ffffff"
                                alt="LinkedIn"
                                className="w-4 h-4"
                            />
                        </a>

                        <a
                            href="https://github.com/"
                            target="_blank"
                            rel="noreferrer"
                            className="p-2 rounded-full bg-white/10 hover:bg-white/20 hover:border hover:border-[#ffde59] transition hover:scale-110"
                        >
                            <img
                                src="https://cdn.simpleicons.org/github/ffffff"
                                alt="GitHub"
                                className="w-4 h-4"
                            />
                        </a>

                        <a
                            href="https://instagram.com/"
                            target="_blank"
                            rel="noreferrer"
                            className="p-2 rounded-full bg-white/10 hover:bg-white/20  hover:border hover:border-[#ffde59] transition hover:scale-110"
                        >
                            <img
                                src="https://cdn.simpleicons.org/instagram/ffffff"
                                alt="Instagram"
                                className="w-4 h-4"
                            />
                        </a>

                        <a
                            href="https://twitter.com/"
                            target="_blank"
                            rel="noreferrer"
                            className="p-2 rounded-full bg-white/10 hover:bg-white/20  hover:border hover:border-[#ffde59] transition hover:scale-110"
                        >
                            <img
                                src="https://cdn.simpleicons.org/x/ffffff"
                                alt="Twitter/X"
                                className="w-4 h-4"
                            />
                        </a>

                        <a
                            href="https://youtube.com/"
                            target="_blank"
                            rel="noreferrer"
                            className="p-2 rounded-full bg-white/10 hover:bg-white/20  hover:border hover:border-[#ffde59] transition hover:scale-110"
                        >
                            <img
                                src="https://cdn.simpleicons.org/youtube/ffffff"
                                alt="YouTube"
                                className="w-4 h-4"
                            />
                        </a>

                    </div>
                    <div className="flex justify-center gap-4">
                        <button className="px-4 py-2 text-xl cursor-pointer flex justify-center items-center align-middle   gap-2 bg-[#ffde59] font-serif text-[#1c1c1c] font-bold rounded-full hover:bg-[#e0c94d] ">
                        <MessageSquareDot size={23} className="text-black" />
                         <span>
                               Hire Me
                            </span>
                        </button>
                    </div>
                    <div className="flex justify-center">
                        <p className=" font-serif text-white/70 text-center capitalize">copyright © 2026 Jitendra Singh. All rights reserved.</p>
                    </div>
                </div>
            </aside>
            

            <Drawer_ open={open} SetOpen={setOpen} />
        </>
    );
};