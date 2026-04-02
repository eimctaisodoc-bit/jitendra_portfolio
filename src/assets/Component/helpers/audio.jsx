import React, { useEffect, useRef } from "react";
import AudioSrc from "../../../videos/track2.mp3";
import { audio } from "framer-motion/client";

export const Audio_ = () => {
    const audioRef = useRef(null);
    useEffect(() => {

        if (audioRef.current) {
            audioRef.current.volume = 0.1

        }
    }, [])
    return (
        <div className=" hidden" >
            <audio
                src={AudioSrc}
                ref={audioRef}
                autoPlay
                loop
                muted
                playsInline
                className=""
            />
        </div>
    );
};