"use client";

import { useRef } from "react";
import Image from "next/image";
import { useGsap } from "@/lib/gsap";
import { SectionHeading } from "./ui";
import logo01 from "@/app/assets/img/logo01.png";
import logo02 from "@/app/assets/img/logo02.png";
import logo03 from "@/app/assets/img/logo03.gif";
import logo04 from "@/app/assets/img/logo04-.png";
import logo05 from "@/app/assets/img/logo05.png";
import logo06 from "@/app/assets/img/logo06.png";

const journals = [logo01, logo02, logo03, logo04, logo05, logo06];

// Each track half must be wider than the viewport for a seamless -50% loop.
const half = [...journals, ...journals];
const rows = [
  { items: half, animation: "animate-marquee-reverse" }, // left → right
  { items: [...half].reverse(), animation: "animate-marquee" }, // right → left
];

function JournalCard({ src, index }) {
  return (
    <div className="group/card grid  shrink-0 place-items-center rounded-3xl border border-line bg-white px-6 py-4 shadow-soft transition-all duration-500 hover:-translate-y-1 hover:border-teal/30 hover:shadow-lift h-50 w-60">
      <Image
        src={src}
        alt={`Partner journal ${index + 1}`}
        className="h-full w-full object-contain  transition duration-500 "
        sizes="224px"
        unoptimized={src.src?.endsWith(".gif")}
      />
    </div>
  );
}

const Marque = () => {
  const ref = useRef(null);
  useGsap(ref);

  return (
    <section
      ref={ref}
      aria-label="Journals we work with"
      className="py-20 relative overflow-hidden bg-offwhite"
    >
      <div className="container-x">
        <SectionHeading
          align="center"
          eyebrow="Publishing Partners"
          title={
            <>
              Journals We <span className="text-gradient">Work With</span>
            </>
          }
          text="Our research is published in and reviewed by respected, peer-reviewed journals  a reflection of the rigour and impact behind every study we deliver."
        />
      </div>

      <div
        data-reveal="fade"
        className="mt-14 flex flex-col gap-5 [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)] lg:mt-16"
      >
        {rows.map((row, r) => (
          <div key={r} className="group overflow-hidden">
            <div
              className={`marquee-track flex w-max py-2 ${row.animation} group-hover:[animation-play-state:paused]`}
            >
              {[...row.items, ...row.items].map((logo, i) => (
                <div
                  key={i}
                  className="pr-3"
                  aria-hidden={i >= row.items.length}
                >
                  <JournalCard src={logo} index={journals.indexOf(logo)} />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Marque;
