"use client";

import { useRef, useLayoutEffect, useEffect } from "react";
import hero from "@/app/assets/img/medical.webp";
import Image from "next/image";
import { gsap } from "@/lib/gsap";

const useIsoLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;

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
        },
      );
    });

    return () => context.revert();
  }, []);

  return (
    <div>
      <div className="relative">
        <div
          className="relative sm:h-[800px] h-[500px] flex items-center bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${hero.src})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="absolute inset-0 bg-white/40" aria-hidden="true" />
          <div className="relative z-10 px-3 container-x mx-auto">
            <h2
              ref={headingRef}
              className="2xl:text-[100px] lg:text-[83px] sm:text-[50px] text-[35px]  font-bold text-center text-gradient"
            >
              <span className="">International</span> journal Alliance (IJA)
            </h2>
            <p
              ref={paragraphRef}
              className="text-3xl text-black font-medium text-center mt-3"
            >
              Global Network for Scholary Publications
            </p>
            <p
              ref={paragraphRef}
              className="text-xl text-black text-center mt-3"
            >
              ( Are you looking to publish your research in high-quality,
              BMDC-approved journals)
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeHero;
