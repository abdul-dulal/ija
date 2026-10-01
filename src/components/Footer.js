import { ArrowRight, ArrowUp, Mail, MapPin, Phone } from "lucide-react";
import { flatNavLinks, serviceLinks, site } from "@/data/site";
import { Logo, SocialLinks } from "./ui";
import logo from "@/app/assets/img/logo.jpeg";
import Image from "next/image";
import Link from "next/link";

const quickLinks = flatNavLinks.filter(
  (l) => !["Home", "Resources"].includes(l.label),
);

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-offwhite text-black">
      <div className="container-x relative">
        <div className="grid gap-12 pt-16 pb-6 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.3fr]">
          <div>
            <Image src={logo} alt="Logo" className="h-50 w-50" />
            <p className="mt-6 max-w-xs text-sm leading-relaxed text-black">
              The {site.fullName} is an innovative research support centre
              advancing impactful health, environmental and social research
              since {site.founded}.
            </p>
            <SocialLinks className="mt-8" />
          </div>

          <div>
            <h4 className="text-sm font-semibold tracking-wider text-black uppercase">
              Quick Links
            </h4>
            <ul className="mt-6 space-y-3">
              {quickLinks.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-sm text-black transition-colors hover:text-cyan"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold tracking-wider text-white uppercase">
              Research Services
            </h4>
            <ul className="mt-6 space-y-3">
              {serviceLinks.map((s) => (
                <li key={s}>
                  <a
                    href="/services"
                    className="text-sm text-black transition-colors hover:text-cyan"
                  >
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold tracking-wider text-white uppercase">
              Contact
            </h4>
            <ul className="mt-6 space-y-4 text-sm text-black">
              <li className="flex gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-black" />{" "}
                {site.address}
              </li>
              <li className="hover:ml-3 transition-all ease-in-out duration-500">
                <Link
                  href={site.phoneHref}
                  className="flex gap-3  hover:ml-3 transition-all ease-in-out duration-500 "
                >
                  <Phone className="mt-0.5 h-4 w-4 shrink-0 text-black" />{" "}
                  {site.phone}
                </Link>
              </li>

              <li>
                <a
                  href={`mailto:${site.personalEmail}`}
                  className="flex gap-3 transition-colors hover:text-cyan"
                >
                  <Mail className="mt-0.5 h-4 w-4 shrink-0 text-black" />{" "}
                  {site.email}
                </a>
              </li>
              <li>
                <Link
                  href={`mailto:${site.personalEmail}`}
                  className="flex gap-3 transition-colors hover:text-cyan"
                >
                  <Mail className="mt-0.5 h-4 w-4 shrink-0 text-black" />{" "}
                  {site.personalEmail}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-white/10 py-8 text-sm text-black sm:flex-row">
          <p>Copyright © 2026 {site.fullName}. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="transition-colors hover:text-white">
              Privacy Policy
            </a>
            <a href="#" className="transition-colors hover:text-white">
              Terms of Service
            </a>
            <a
              href="#"
              aria-label="Back to top"
              className="grid h-10 w-10 place-items-center rounded-full border border-white/15 text-white transition-all hover:-translate-y-0.5 hover:border-cyan hover:text-cyan"
            >
              <ArrowUp className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
