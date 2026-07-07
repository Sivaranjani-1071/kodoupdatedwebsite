"use client";
import Image from "next/image";
import Link from "next/link";

/* Inline icon components — no external icon library required */
function IconWrap({ children, className = "w-4 h-4" }) {
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

const Home = (props) => (
  <IconWrap {...props}>
    <path d="M3 9.5 12 3l9 6.5" />
    <path d="M5 10v10h14V10" />
  </IconWrap>
);

const MessageCircle = (props) => (
  <IconWrap {...props}>
    <path d="M21 11.5a8.5 8.5 0 1 1-3.8-7.1L21 4l-1 4.2c.6 1 1 2.1 1 3.3Z" />
  </IconWrap>
);

const Headphones = (props) => (
  <IconWrap {...props}>
    <path d="M3 14v-2a9 9 0 0 1 18 0v2" />
    <rect x="3" y="14" width="4" height="6" rx="1" />
    <rect x="17" y="14" width="4" height="6" rx="1" />
  </IconWrap>
);

const Globe = (props) => (
  <IconWrap {...props}>
    <circle cx="12" cy="12" r="9" />
    <path d="M3 12h18" />
    <path d="M12 3a14 14 0 0 1 0 18 14 14 0 0 1 0-18Z" />
  </IconWrap>
);

const Linkedin = (props) => (
  <IconWrap {...props}>
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
    <path d="M10 9v12" />
    <path d="M10 13a4 4 0 0 1 8 0v8" />
  </IconWrap>
);

const Youtube = (props) => (
  <IconWrap {...props}>
    <rect x="2" y="5" width="20" height="14" rx="4" />
    <path d="m10 9 5 3-5 3Z" fill="currentColor" stroke="none" />
  </IconWrap>
);

const Instagram = (props) => (
  <IconWrap {...props}>
    <rect x="3" y="3" width="18" height="18" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
  </IconWrap>
);

const Twitter = (props) => (
  <IconWrap {...props}>
    <path d="M22 5.8c-.7.3-1.5.6-2.3.7a4 4 0 0 0-6.9 3.6A11.4 11.4 0 0 1 3 4.6a4 4 0 0 0 1.2 5.3 4 4 0 0 1-1.8-.5 4 4 0 0 0 3.2 4 4 4 0 0 1-1.8.1 4 4 0 0 0 3.7 2.8A11.4 11.4 0 0 1 2 18.4a11.4 11.4 0 0 0 6.3 1.9c7.5 0 11.7-6.5 11.7-12v-.5A8.3 8.3 0 0 0 22 5.8Z" />
  </IconWrap>
);

const Facebook = (props) => (
  <IconWrap {...props}>
    <path d="M14 9h3V6h-3a4 4 0 0 0-4 4v2H7v3h3v6h3v-6h3l1-3h-4v-2a1 1 0 0 1 1-1Z" />
  </IconWrap>
);

/* ---- Updated footer link content ---- */

const programsLinks = [
  { label: "All Fellowship Programs", href: "#" },
  { label: "AI Engineering & ML", href: "#" },
  { label: "Cloud Engineering & DevOps", href: "#" },
  { label: "Full-Stack Development with AI", href: "#" },
  { label: "Cybersecurity & Ethical Hacking", href: "#" },
  { label: "Data Science & Analytics", href: "#" },
  { label: "ServiceNow & Enterprise Platform Engineering", href: "#" },
  { label: "Generative AI for Professionals", href: "#" },
];

const institutionsLinks = [
  { label: "Campus Connect (Colleges)", href: "#" },
  { label: "Corporate Training", href: "#" },
  { label: "Hire from Kodo (Recruiters)", href: "#" },
];

const companyLinks = [
  { label: "About KodoWorks", href: "#" },
  { label: "Powered by ExpertsPro", href: "#" },
  { label: "Careers", href: "#" },
  { label: "Contact Us", href: "#" },
];

const legalLinks = [
  { label: "Privacy Policy", href: "#" },
  { label: "Terms of Service", href: "#" },
  { label: "Refund Policy", href: "#" },
];

const socialLinks = [
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Youtube, href: "#", label: "YouTube" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Facebook, href: "#", label: "Facebook" },
];

function FooterColumn({ title, links }) {
  return (
    <div>
      <h3 className="text-xs font-bold uppercase tracking-wide text-neutral-900 mb-3">
        {title}
      </h3>
      <ul className="space-y-2.5">
        {links.map((link) => (
          <li key={link.label}>
            <Link
              href={link.href}
              className="text-sm text-neutral-800 hover:text-neutral-950 hover:underline leading-snug"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="relative bg-red-100">
      {/* Decorative rounded cutout at the top */}
      <div className="absolute -top-px left-0 right-0 h-8 sm:h-10 bg-white rounded-b-[50%] sm:rounded-b-[100%]" />

      <div className="relative pt-16 sm:pt-20 px-6 sm:px-10 lg:px-16 pb-10">
        <div className="max-w-7xl mx-auto">
          {/* Main grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
            {/* Brand + contact column */}
            <div className="lg:col-span-1">
              <Link href="/" className="inline-flex items-baseline gap-1 mb-1">
                <Image
                  src="/kodoworkslogo.png"
                  alt="Kodoworks"
                  width={140}
                  height={32}
                  priority
                />
              </Link>
              <p className="text-xs text-neutral-700 mb-5">
                Powered by ExpertsPro
              </p>

              <div className="flex gap-3 mb-4">
                <Home className="w-4 h-4 mt-0.5 shrink-0 text-neutral-900" />
                <p className="text-sm text-neutral-800 leading-snug">
                  Coimbatore, Tamil Nadu, India
                </p>
              </div>

              <div className="flex gap-3 mb-4">
                <Headphones className="w-4 h-4 mt-0.5 shrink-0 text-neutral-900" />
                <div className="text-sm text-neutral-800">
                  <p className="font-semibold text-neutral-900">Call Us</p>
                  <a
                    href="tel:+918925932839"
                    className="underline hover:text-neutral-950 block"
                  >
                    +91 89259 32839
                  </a>
                  <a
                    href="tel:+918925932841"
                    className="underline hover:text-neutral-950 block"
                  >
                    +91 89259 32841
                  </a>
                </div>
              </div>

              <div className="flex gap-3 mb-4">
                <MessageCircle className="w-4 h-4 mt-0.5 shrink-0 text-neutral-900" />
                <div className="text-sm text-neutral-800">
                  <p className="font-semibold text-neutral-900">Email Us</p>
                  <a
                    href="mailto:kodo@expertspro.io"
                    className="underline hover:text-neutral-950"
                  >
                    kodo@expertspro.io
                  </a>
                </div>
              </div>

              <div className="flex gap-3">
                <Globe className="w-4 h-4 mt-0.5 shrink-0 text-neutral-900" />
                <div className="text-sm text-neutral-800">
                  <a
                    href="https://www.kodotalent.com"
                    className="underline hover:text-neutral-950"
                  >
                    www.kodotalent.com
                  </a>
                </div>
              </div>
            </div>

            {/* Programs */}
            <FooterColumn title="Programs" links={programsLinks} />

            {/* For Institutions & Companies */}
            <FooterColumn
              title="For Institutions & Companies"
              links={institutionsLinks}
            />

            {/* Company */}
            <FooterColumn title="Company" links={companyLinks} />

            {/* Legal */}
            <FooterColumn title="Legal" links={legalLinks} />
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
      <div style={{ backgroundColor: "#000000", textAlign: "center", padding: "16px 24px" }}>
        <p style={{ fontSize: "14px", color: "#ffffff" }}>
          Feel free to reach out to us at{" "}
          <span style={{ fontWeight: 700 }}>+91 89259 32839</span> or{" "}
          <span style={{ fontWeight: 700 }}>+91 89259 32841</span>, and we&apos;ll
          get in touch with you shortly.
        </p>
      </div>
    </footer>
  );
}
