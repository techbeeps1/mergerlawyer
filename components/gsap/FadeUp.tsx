"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export default function FadeUp({
  children,
  delay = 0,
  duration = 1,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
}) {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.from(container.current, {
        y: 50,
        opacity: 0,
        duration: duration,
        delay: delay,
        ease: "power3.out",
        scrollTrigger: {
          trigger: container.current,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      });
    },
    { scope: container }
  );

  return (
    <div ref={container} className={`will-change-transform ${className}`}>
      {children}
    </div>
  );
}
