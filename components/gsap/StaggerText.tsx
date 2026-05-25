"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export default function StaggerText({
  text,
  className = "",
  delay = 0,
}: {
  text: string;
  className?: string;
  delay?: number;
}) {
  const container = useRef<HTMLDivElement>(null);
  const words = text.split(" ");

  useGSAP(
    () => {
      gsap.from(".stagger-word", {
        y: 40,
        opacity: 0,
        duration: 0.8,
        delay: delay,
        stagger: 0.05,
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
    <div ref={container} className={className} style={{ display: "inline-block" }}>
      {words.map((word, i) => (
        <span
          key={i}
          className="stagger-word inline-block will-change-transform"
          style={{ marginRight: i !== words.length - 1 ? "0.3em" : "0" }}
        >
          {word}
        </span>
      ))}
    </div>
  );
}
