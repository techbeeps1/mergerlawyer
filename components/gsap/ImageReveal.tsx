"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

interface ImageRevealProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  direction?: "left" | "right" | "top" | "bottom";
}

const ImageReveal: React.FC<ImageRevealProps> = ({ 
  children, 
  delay = 0, 
  className = "", 
  direction = "left" 
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const el = containerRef.current;
      if (!el) return;

      let startClipPath = "";
      const endClipPath = "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)";

      switch (direction) {
        case "left":
          startClipPath = "polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)";
          break;
        case "right":
          startClipPath = "polygon(100% 0%, 100% 0%, 100% 100%, 100% 100%)";
          break;
        case "top":
          startClipPath = "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)";
          break;
        case "bottom":
          startClipPath = "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)";
          break;
        default:
          startClipPath = "polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)";
      }

      // Clip Path Reveal
      gsap.fromTo(
        el,
        {
          clipPath: startClipPath,
        },
        {
          clipPath: endClipPath,
          duration: 1.5,
          ease: "power3.inOut",
          delay: delay,
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );

      // Subtle Scale Effect on Image
      const img = el.querySelector("img");
      if (img) {
         gsap.fromTo(
             img,
             { scale: 1.2 },
             { 
                 scale: 1, 
                 duration: 1.5, 
                 ease: "power3.inOut", 
                 delay: delay,
                 scrollTrigger: {
                     trigger: el,
                     start: "top 85%",
                     toggleActions: "play none none none",
                 }
             }
         );
      }
    },
    { scope: containerRef }
  );

  // We add relative to the container so that inner images with fill/absolute work properly
  return (
    <div ref={containerRef} className={`relative overflow-hidden ${className}`} style={{ clipPath: "polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)" }}>
      {children}
    </div>
  );
};

export default ImageReveal;
