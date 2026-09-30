import Image from "next/image";
import { Check } from "lucide-react";
import { SectionHeading } from "./ui";

const serviceAreas = [
  "Medical all",
  "Nursing and Healthcare",
  "Surgery all",
  "Medicine all",
  "Biosciences all",
  "Arts and Humanities",
  "Biomedical Sciences",
  "Sports",
  "Law",
  "Anatomy",
  "Orthopedics",
  "Radiology",
  "Parasitology and Infectious Diseases",
];

export default function ServiceableArea() {
  return (
    <section className="py-20 relative overflow-hidden bg-white">
      <div className="container-x">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <SectionHeading
              eyebrow="Our Expertise"
              title="Our Serviceable Areas"
              text="We support research and academic work across a wide range of disciplines."
            />
            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {serviceAreas.map((area) => (
                <li
                  key={area}
                  className="flex items-center gap-3 rounded-2xl border border-line bg-offwhite px-4 py-3.5 text-sm font-medium text-ink transition-colors hover:border-teal/30 hover:bg-teal/[0.04]"
                >
                  <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-teal/10 text-teal">
                    <Check className="h-4 w-4" strokeWidth={2.5} />
                  </span>
                  {area}
                </li>
              ))}
              <li className="flex items-center gap-3 rounded-2xl border border-dashed border-teal/40 bg-teal/[0.04] px-4 py-3.5 text-sm font-semibold text-teal">
                <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-white text-teal">
                  +
                </span>
                And more
              </li>
            </ul>
          </div>

          <div className="relative isolate mx-auto w-full max-w-xl lg:ml-auto">
            <div className="absolute -inset-4 -z-10 rounded-[2.5rem] bg-brand-gradient opacity-[0.08] blur-xl" />
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] shadow-lift sm:aspect-[5/4] lg:aspect-[4/5]">
              <Image
                src="/serviceable-area.webp"
                alt="Healthcare researchers discussing medical data in a bright modern laboratory"
                fill
                sizes="(min-width: 1024px) 45vw, 92vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-t from-navy/50 via-transparent to-transparent" />
              <div className="absolute inset-x-5 bottom-5 rounded-2xl border border-white/40 bg-white/85 p-5 shadow-soft backdrop-blur-md sm:inset-x-7 sm:bottom-7 sm:p-6">
                <p className="text-xs font-semibold tracking-[0.16em] text-teal uppercase">
                  Across disciplines
                </p>
                <p className="mt-2 font-display text-xl font-bold text-navy sm:text-2xl">
                  Research support shaped around your field
                </p>
              </div>
            </div>
            <span className="absolute -right-3 -bottom-5 -z-10 h-28 w-28 rounded-full bg-cyan/20 blur-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
}
