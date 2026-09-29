"use client";

import { useRef } from "react";
import { ArrowRight, icons } from "lucide-react";
import { useGsap } from "@/lib/gsap";
import { services } from "@/data/site";
import { Icon, SectionHeading } from "./ui";
import Image from "next/image";
import Link from "next/link";

export default function Services({ preview = false }) {
  const ref = useRef(null);
  useGsap(ref);

  // Cursor-follow spotlight on each card
  const onMove = (e) => {
    const r = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty("--mx", `${e.clientX - r.left}px`);
    e.currentTarget.style.setProperty("--my", `${e.clientY - r.top}px`);
  };

  return (
    <section
      id="services"
      ref={ref}
      className="section-y relative isolate overflow-hidden bg-offwhite"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <div className="bg-grid absolute inset-0 [mask-image:radial-gradient(ellipse_at_top,black_30%,transparent_75%)]" />
        <div className="absolute -top-40 right-[-10%] h-[36rem] w-[36rem] rounded-full bg-cyan/20 blur-[120px]" />
        <div className="absolute top-1/3 -left-40 h-[28rem] w-[28rem] rounded-full bg-royal/10 blur-[120px]" />
      </div>
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
          {(preview ? services.slice(0, 3) : services).map((s) => (
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

        {preview && (
          <div className="mt-10 flex justify-center">
            <Link href="/services" className="btn btn-primary">
              View All Services <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
