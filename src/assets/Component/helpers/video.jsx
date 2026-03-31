import React from "react";
import videoSrc from "../../../videos/video2.mp4";

export const Video_ = () => {
    return (
        <div className="fixed inset-0 w-full  h-full overflow-hidden">
            <video
                src={videoSrc}
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover brightness-75 contrast-125 saturate-150 hue-rotate-30"
            />
        </div>
    );
};