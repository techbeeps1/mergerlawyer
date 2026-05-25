"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export default function AnimatedCard({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const cardRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      // Scroll-in animation
      gsap.from(cardRef.current, {
        y: 60,
        opacity: 0,
        duration: 0.8,
        delay: delay,
        ease: "power3.out",
        scrollTrigger: {
          trigger: cardRef.current,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      });
    },
    { scope: cardRef }
  );

  const handleMouseEnter = () => {
    gsap.to(cardRef.current, {
      y: -10,
      scale: 1.02,
      boxShadow: "0px 20px 40px rgba(0,0,0,0.15)",
      duration: 0.4,
      ease: "power2.out",
    });
  };

  const handleMouseLeave = () => {
    gsap.to(cardRef.current, {
      y: 0,
      scale: 1,
      boxShadow: "0px 4px 6px rgba(0,0,0,0)",
      duration: 0.4,
      ease: "power2.out",
    });
  };

  return (
    <div
      ref={cardRef}
      className={`will-change-transform ${className}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </div>
  );
}
