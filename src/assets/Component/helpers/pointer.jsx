import React, { useEffect, useRef, useState } from "react";

export const Pointer_ = () => {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const glowRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    let mouseX = 0;
    let mouseY = 0;
    let ringX = 0;
    let ringY = 0;
    let glowX = 0;
    let glowY = 0;
    let animationFrame;

    const moveMouse = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${mouseX}px, ${mouseY}px) translate(-50%, -50%)`;
      }

      // Check if hovering over interactive elements
      const target = e.target;
      const isInteractive = target.closest('button, a, input, [role="button"], .hover-target');
      setIsHovered(!!isInteractive);
    };

    const animatePointer = () => {
      // Easing for ring and glow
      ringX += (mouseX - ringX) * 0.14;
      ringY += (mouseY - ringY) * 0.14;

      glowX += (mouseX - glowX) * 0.08;
      glowY += (mouseY - glowY) * 0.08;

      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${ringX}px, ${ringY}px) translate(-50%, -50%)`;
      }

      if (glowRef.current) {
        // Keeps the "downside" offset while following
        glowRef.current.style.transform = `translate(${glowX}px, ${glowY + 18}px) translate(-50%, -50%)`;
      }

      animationFrame = requestAnimationFrame(animatePointer);
    };

    window.addEventListener("mousemove", moveMouse);
    animationFrame = requestAnimationFrame(animatePointer);

    return () => {
      window.removeEventListener("mousemove", moveMouse);
      cancelAnimationFrame(animationFrame);
    };
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999] hidden md:block">
      {/* Downside Glow Effect - Expands on hover */}
      <div
        ref={glowRef}
        className={`absolute top-0 left-0 rounded-full bg-amber-400/20 blur-2xl transition-all duration-500 ease-out ${
          isHovered ? "h-32 w-32 bg-amber-400/40" : "h-16 w-16"
        }`}
      />

      {/* Outer Ring - Scales up and thins on hover */}
      <div
        ref={ringRef}
        className={`absolute top-0 left-0 rounded-full border border-amber-400/70 bg-amber-300/10 backdrop-blur-[2px] shadow-[0_0_20px_rgba(251,191,36,0.25)] transition-all duration-300 ease-out ${
          isHovered ? "h-16 w-16 border-amber-300/40" : "h-10 w-10"
        }`}
      />

      {/* Inner Dot - Shrinks on hover to focus the ring */}
      <div
        ref={dotRef}
        className={`absolute top-0 left-0 rounded-full bg-amber-400 shadow-[0_0_12px_rgba(251,191,36,0.8)] transition-transform duration-200 ${
          isHovered ? "h-1.5 w-1.5" : "h-3 w-3"
        }`}
      />
    </div>
  );
};