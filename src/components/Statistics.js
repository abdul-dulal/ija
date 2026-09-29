"use client";

import { useRef } from "react";
import { FlaskConical, FileText, Handshake, Award } from "lucide-react";
import CountUp from "react-countup";
import { useGsap } from "@/lib/gsap";
import { stats } from "@/data/site";

const statIcons = [FlaskConical, FileText, Handshake, Award];

export default function Statistics() {
  const ref = useRef(null);
  useGsap(ref);

  return (
    <section
      ref={ref}
      aria-label="Key statistics"
      className="relative bg-white"
    >
      <div className="container-x relative -mt-10 lg:-mt-14 bg-offwhite pt-10 pb-20">
        <div>
          <h2 className="text-3xl font-semibold text-center pb-10">
            Our Achievement
          </h2>
        </div>
        <div
          data-reveal="up"
          className="grid grid-cols-2 overflow-hidden  lg:grid-cols-4 gap-3 "
        >
          {stats.map((s, i) => {
            const StatIcon = statIcons[i];
            return (
              <div
                key={s.label}
                className={`group relative p-6 transition-colors duration-500 hover:bg-white sm:p-8 lg:p-10 rounded-3xl border border-line bg-  ${
                  i % 2 === 0 ? "border-r border-line" : ""
                } ${i < 2 ? "border-b border-line lg:border-b-0" : ""} ${i === 1 ? "lg:border-r" : ""}`}
              >
                <span className="grid h-11 w-11 place-items-center rounded-2xl bg-mist text-royal transition-all duration-500 group-hover:bg-teal group-hover:text-white">
                  <StatIcon className="h-5 w-5" />
                </span>
                <p className="mt-6 font-display text-4xl font-extrabold tracking-tight text-navy sm:text-5xl">
                  <CountUp
                    end={s.value}
                    duration={2.5}
                    separator=","
                    enableScrollSpy
                    scrollSpyOnce
                  />
                  <span className="text-teal">{s.suffix}</span>
                </p>
                <p className="mt-2 font-semibold text-ink">{s.label}</p>
                <p className="mt-1 text-sm text-slate">{s.note}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
