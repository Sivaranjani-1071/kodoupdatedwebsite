"use client";
import { useState, type ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { scrollToHeroForm } from "@/lib/scrollToHeroForm";

/* Inline icon components — no external icon library required */
function IconWrap({
  children,
  className = "w-4 h-4",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      {children}
    </svg>
  );
}

type IconProps = { className?: string };

const Home = (props: IconProps) => (
  <IconWrap {...props}>
    <path d="M3 9.5 12 3l9 6.5" />
    <path d="M5 10v10h14V10" />
  </IconWrap>
);

const MessageCircle = (props: IconProps) => (
  <IconWrap {...props}>
    <path d="M21 11.5a8.5 8.5 0 1 1-3.8-7.1L21 4l-1 4.2c.6 1 1 2.1 1 3.3Z" />
  </IconWrap>
);

const Headphones = (props: IconProps) => (
  <IconWrap {...props}>
    <path d="M3 14v-2a9 9 0 0 1 18 0v2" />
    <rect x="3" y="14" width="4" height="6" rx="1" />
    <rect x="17" y="14" width="4" height="6" rx="1" />
  </IconWrap>
);

const Globe = (props: IconProps) => (
  <IconWrap {...props}>
    <circle cx="12" cy="12" r="9" />
    <path d="M3 12h18" />
    <path d="M12 3a14 14 0 0 1 0 18 14 14 0 0 1 0-18Z" />
  </IconWrap>
);

const Linkedin = (props: IconProps) => (
  <IconWrap {...props}>
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
    <path d="M10 9v12" />
    <path d="M10 13a4 4 0 0 1 8 0v8" />
  </IconWrap>
);

const Instagram = (props: IconProps) => (
  <IconWrap {...props}>
    <rect x="3" y="3" width="18" height="18" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
  </IconWrap>
);

const Facebook = (props: IconProps) => (
  <IconWrap {...props}>
    <path d="M14 9h3V6h-3a4 4 0 0 0-4 4v2H7v3h3v6h3v-6h3l1-3h-4v-2a1 1 0 0 1 1-1Z" />
  </IconWrap>
);

/* ---- Updated footer link content ---- */


const companyLinks = [
  { label: "About KodoWorks", href: "/#hero-form" },
  { label: "Careers", href: "/#hero-form" },
  { label: "Contact Us", href: "/#hero-form" },
];

const programsLinks = [
  { label: "All Fellowship Programs", href: "/#hero-form" },
  { label: "AI Engineering & ML", href: "/#hero-form" },
  { label: "Cloud Engineering & DevOps", href: "/#hero-form" },
  { label: "Full-Stack Development with AI", href: "/#hero-form" },
  { label: "Cybersecurity & Ethical Hacking", href: "/#hero-form" },
  { label: "Data Science & Analytics", href: "/#hero-form" },
  { label: "ServiceNow & Enterprise Platform Engineering", href: "/#hero-form" },
  { label: "Generative AI for Professionals", href: "/#hero-form" },
];

const institutionsLinks = [
  { label: "Campus Connect (Colleges)", href: "/#hero-form" },
  { label: "Corporate Training", href: "/#hero-form" },
  { label: "Hire from Kodo (Recruiters)", href: "/#hero-form" },
];



const legalLinks = [
  { label: "Privacy Policy", href: "#" },
  { label: "Terms of Service", href: "#" },
  { label: "Refund Policy", href: "#" },
];

const socialLinks = [
  { icon: Linkedin, href: "https://www.linkedin.com/company/kodoworks/", label: "LinkedIn" },
  { icon: Instagram, href: "https://www.instagram.com/kodoworks.in/", label: "Instagram" },
 
];

function FooterColumn({
  title,
  links,
  redirectToForm = true,
  previewCount,
}: {
  title: string;
  links: { label: string; href: string }[];
  redirectToForm?: boolean;
  previewCount?: number;
}) {
  const [expanded, setExpanded] = useState(false);
  const expandable = typeof previewCount === "number" && links.length > previewCount;
  const visibleLinks = expandable && !expanded ? links.slice(0, previewCount) : links;

  return (
    <div>
      <h3 className="text-xs font-bold uppercase tracking-wide text-neutral-900 mb-3 leading-snug sm:min-h-[2rem]">
        {title}
      </h3>
      <ul className="space-y-2.5">
        {visibleLinks.map((link) => (
          <li key={link.label}>
            <Link
              href={link.href}
              onClick={
                redirectToForm
                  ? (e) => { e.preventDefault(); scrollToHeroForm() }
                  : undefined
              }
              className="text-sm text-neutral-800 hover:text-neutral-950 hover:underline leading-snug"
            >
              {link.label}
            </Link>
          </li>
        ))}
        {expandable && (
          <li>
            <button
              type="button"
              onClick={() => setExpanded((v) => !v)}
              className="text-sm font-semibold text-neutral-900 hover:underline whitespace-nowrap"
            >
              {expanded ? "Read less" : "Read more"}
            </button>
          </li>
        )}
      </ul>
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="relative bg-[#FDEEE0]">
      <div className="relative pt-14 sm:pt-20 px-6 sm:px-10 lg:px-16 pb-2">
        <div className="max-w-7xl mx-auto">
          {/* Top: CTA promo (left) + brand & link columns (right) */}
          <div className="grid grid-cols-1 lg:grid-cols-[0.6fr_1.4fr] gap-14 lg:gap-10">
            {/* Left: brand + description */}
            <div className="relative">
              <Link href="/" className="inline-flex items-baseline gap-1 mb-1">
                <Image
                  src="/kodoworkslogo.png"
                  alt="Kodoworks"
                  width={140}
                  height={32}
                  priority
                />
              </Link>
              <p className="text-sm text-neutral-700 max-w-sm leading-relaxed">
                KodoWorks is a technology company connecting engineering practice with structured hiring outcomes across today's most in-demand domains.
              </p>

              {/* Contact details, stacked one by one below the paragraph */}
              <div className="flex flex-col gap-3 mt-6">
                <div className="flex gap-2">
                  <Home className="w-4 h-4 mt-0.5 shrink-0 text-neutral-900" />
                  <p className="text-sm text-neutral-800 leading-snug">
                    Bushido Towers, Coimbatore, India
                  </p>
                </div>
                <div className="flex gap-2">
                  <Headphones className="w-4 h-4 mt-0.5 shrink-0 text-neutral-900" />
                  <div className="text-sm text-neutral-800 flex flex-col gap-0.5">
                    <a href="tel:+918925932839" className="hover:text-neutral-950">
                      +91 89259 32839
                    </a>
                    <a href="tel:+918925932841" className="hover:text-neutral-950">
                      +91 89259 32841
                    </a>
                  </div>
                </div>
                <div className="flex gap-2">
                  <MessageCircle className="w-4 h-4 mt-0.5 shrink-0 text-neutral-900" />
                  <div className="text-sm text-neutral-800">
                    <a href="mailto:contact@kodoworks.in" className="hover:text-neutral-950">
                     contact@kodoworks.in
                    </a>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Globe className="w-4 h-4 mt-0.5 shrink-0 text-neutral-900" />
                  <div className="text-sm text-neutral-800">
                    <a href="https://www.kodoworks.in" className="hover:text-neutral-950">
                      www.kodoworks.in
                    </a>
                  </div>
                </div>
              </div>

       
            </div>

            {/* Right: link columns */}
            <div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-x-6 gap-y-8">
                <FooterColumn title="Company" links={companyLinks} />
                <FooterColumn
                  title="Institutions & Companies"
                  links={institutionsLinks}
                />
                <FooterColumn title="Programs" links={programsLinks} />
                <FooterColumn title="Legal" links={legalLinks} redirectToForm={false} />
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-neutral-900/20 mt-12 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-neutral-800 order-2 sm:order-1">
              Copyright © {new Date().getFullYear()} KodoWorks. All rights
              reserved.
            </p>
            <div className="flex gap-3 order-1 sm:order-2">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-8 h-8 rounded-full bg-white border border-neutral-900 text-neutral-900 flex items-center justify-center hover:bg-neutral-900 hover:text-white transition-colors"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Callback banner */}
      <div style={{ background: "linear-gradient(135deg, #ffe380 0%, #ffcc99 50%, #ffb3b3 100%)", textAlign: "center", padding: "16px 24px" }}>
        <p style={{ fontSize: "14px", color: "#1A1A1A" }}>
          Feel free to reach out to us at{" "}
          <span style={{ fontWeight: 700 }}>+91 89259 32839</span> /{" "}
          <span style={{ fontWeight: 700 }}>+91 89259 32841</span> and we&apos;ll
          get in touch with you shortly.
        </p>
      </div>
    </footer>
  );
}
