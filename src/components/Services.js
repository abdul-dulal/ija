"use client";

import { useRef } from "react";
import { ArrowRight, icons } from "lucide-react";
import { useGsap } from "@/lib/gsap";
import { services } from "@/data/site";
import { Icon, SectionHeading } from "./ui";
import Image from "next/image";

export default function Services() {
  const ref = useRef(null);
  useGsap(ref);

  // Cursor-follow spotlight on each card
  const onMove = (e) => {
    const r = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty("--mx", `${e.clientX - r.left}px`);
    e.currentTarget.style.setProperty("--my", `${e.clientY - r.top}px`);
  };

  return (
    <section id="services" ref={ref} className="section-y relative bg-white">
      <div className="container-x">
        <SectionHeading
          align="center"
          eyebrow="Our Services"
          title={
            <>
              We Provide{" "}
              <span className="text-gradient">Superior Research Services</span>
            </>
          }
          text="Comprehensive, expert-led services that meet you wherever you are in the research lifecycle."
        />

        <div className="mt-16 grid gap-4 overflow-hidden   sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <article
              key={s.title}
              data-reveal="fade"
              onMouseMove={onMove}
              className="group relative bg-white border border-line p-4 transition-colors duration-500 hover:bg-offwhite  rounded-2xl"
            >
              <span
                className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                style={{
                  background:
                    "radial-gradient(320px circle at var(--mx,50%) var(--my,50%), rgba(87,199,200,.14), transparent 70%)",
                }}
              />
              <div className="relative">
                <Image className="rounded-xl" src={s.icon} alt={s.title} />
                <h3 className="mt-7 text-xl font-bold">{s.title}</h3>
                <p className="mt-3 text-[15px] leading-relaxed text-slate">
                  {s.text}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
