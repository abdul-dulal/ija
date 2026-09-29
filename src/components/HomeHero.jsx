"use client";

import { useRef, useLayoutEffect, useEffect } from "react";
import hero from "@/app/assets/img/medical.webp";
import Image from "next/image";
import { gsap } from "@/lib/gsap";

const useIsoLayoutEffect = typeof window !== "undefined" ? useLayoutEffect : useEffect;

const HomeHero = () => {
  const headingRef = useRef(null);
  const paragraphRef = useRef(null);

  useIsoLayoutEffect(() => {
    const context = gsap.context(() => {
      gsap.fromTo(
        [headingRef.current, paragraphRef.current],
        { autoAlpha: 0, y: 36 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 1.1,
          stagger: 0.2,
          delay: 0.15,
          ease: "power3.out",
          clearProps: "transform,opacity,visibility",
        }
      );
    });

    return () => context.revert();
  }, []);

  return (
    <div>
      <div className="relative">
        <Image src={hero} alt="Hero" />
        <div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2">
          <h2 ref={headingRef} className="text-4xl font-semibold text-center text-black">
            International journal Alliance (IJA)
          </h2>
          <p ref={paragraphRef} className="text-base text-black text-center mt-3">
            International Journal Alliance is a global platform dedicated to
            promoting academic research, scholarly collaboration, and the
            publication of high-quality research across diverse disciplines.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomeHero;
