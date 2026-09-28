import React from "react";
import hero from "@/app/assets/img/medical.webp";
import Image from "next/image";
const HomeHero = () => {
  return (
    <div className="mt-20">
      <div className="relative">
        <Image src={hero} alt="Hero" />
        <div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2">
          <h2 className="text-4xl font-medium text-center text-black">
            International journal Alliance (IJA)
          </h2>
          <p className="text-base text-black text-center mt-3">
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
