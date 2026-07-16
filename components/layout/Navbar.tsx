'use client'

import data from '@/data/content.json'
import Image from 'next/image'
import Link from 'next/link'
import { useState, useEffect, useRef } from 'react'
import { scrollToHeroForm } from '@/lib/scrollToHeroForm'

const defaultNavbar = {
  logo: '',
  logoImage: '/kodoworkslogo.png',
  logoWidthMobile: 72,
  logoHeightMobile: 64,
  logoWidthDesktop: 72,
  logoHeightDesktop: 64,
  links: ['Fellowship Programs', 'For Colleges', 'For Corporates Training', 'For Recruiters', 'Blog'],
  cta: 'Contact Us',
  
}

// ─── PER-LINK HOVER COLORS ──────────────────────────────────────────────────
// Edit the hex value for each link index to change its hover colour.
// Index matches the order in defaultNavbar.links (0-based).
const navLinkHoverColors: Record<number, string> = {
  0: 'rgb(255 51 122)', // Fellowship Programs
  1: 'rgb(255 51 122)', // For Colleges         (change to any colour you like)
  2: 'rgb(255 51 122)', // Corporate Training
  3: 'rgb(255 51 122)', // Hire from Kodo
  4: 'rgb(255 51 122)', // Blog
}
// ────────────────────────────────────────────────────────────────────────────

// Dropdown items for Fellowship Programs
const fellowshipDropdownItems = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <rect width="22" height="22" rx="6" fill="#1A1A1A" />
        <rect x="7" y="7" width="8" height="8" rx="1.5" stroke="#FFFFFF" strokeWidth="1.4" />
        <path d="M9 7V4.5M13 7V4.5M9 17.5V15M13 17.5V15M7 9H4.5M7 13H4.5M15 9h2.5M15 13h2.5" stroke="#FFFFFF" strokeWidth="1.4" strokeLinecap="round" />
      </svg>
    ),
    title: 'Fellowship Program in AI Engineering & Machine Learning',
    href: '/courses/ai-engineering-ml',
    desc: 'Design, train and deploy real-world ML models and land high-growth AI engineering roles - Assured!',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <rect width="22" height="22" rx="6" fill="#1A1A1A" />
        <path d="M11 4.5l1.2 3.8 3.8 1.2-3.8 1.2-1.2 3.8-1.2-3.8-3.8-1.2 3.8-1.2z" fill="#FFFFFF" />
        <circle cx="16.5" cy="15.5" r="1" fill="#FFFFFF" />
      </svg>
    ),
    title: 'Fellowship in Generative AI for Professionals',
    href: '/courses/generative-ai',
    desc: 'Master prompt engineering and applied GenAI tools to upskill in your current tech career - Assured!',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <rect width="22" height="22" rx="6" fill="#1A1A1A" />
        <path d="M8.5 7L5 11l3.5 4M13.5 7L17 11l-3.5 4" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: 'Fellowship Program in Full-Stack Development with AI',
    href: '/courses/full-stack-development',
    desc: 'Build AI-powered full-stack products end-to-end and land top full-stack developer roles - Assured!',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <rect width="22" height="22" rx="6" fill="#1A1A1A" />
        <path d="M7.5 14.5a3 3 0 0 1 .3-5.98 3.5 3.5 0 0 1 6.7-1.02A3 3 0 0 1 15.5 14.5h-8z" stroke="#FFFFFF" strokeWidth="1.4" strokeLinejoin="round" />
      </svg>
    ),
    title: 'Fellowship Program in Cloud Engineering & DevOps',
    href: '/courses/cloud-devops',
    desc: 'Get hands-on with cloud infrastructure, CI/CD and automation to land cloud & DevOps roles - Assured!',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <rect width="22" height="22" rx="6" fill="#1A1A1A" />
        <circle cx="11" cy="11" r="2.6" stroke="#FFFFFF" strokeWidth="1.4" />
        <path d="M11 5.5v1.6M11 13.9v1.6M16.5 11h-1.6M7.1 11H5.5M14.7 7.3l-1.1 1.1M8.4 13.6l-1.1 1.1M14.7 14.7l-1.1-1.1M8.4 8.4L7.3 7.3" stroke="#FFFFFF" strokeWidth="1.4" strokeLinecap="round" />
      </svg>
    ),
    title: 'Fellowship Program in ServiceNow & Enterprise Platform Engineering',
    href: '/courses/servicenow-platform',
    desc: 'Master ServiceNow development and enterprise platform engineering for in-demand ITSM careers - Assured!',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <rect width="22" height="22" rx="6" fill="#1A1A1A" />
        <path d="M11 4.8l5 2v4.1c0 3.2-2.1 5.6-5 6.3-2.9-.7-5-3.1-5-6.3V6.8l5-2z" stroke="#FFFFFF" strokeWidth="1.3" strokeLinejoin="round" />
        <path d="M8.7 11.2l1.6 1.6 3-3.2" stroke="#FFFFFF" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: 'Fellowship Program in Cybersecurity & Ethical Hacking',
    href: '/courses/cybersecurity',
    desc: 'Learn offensive security, ethical hacking and threat defense to land top cybersecurity roles - Assured!',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <rect width="22" height="22" rx="6" fill="#1A1A1A" />
        <rect x="5" y="14" width="3" height="4" rx="1" fill="#FFFFFF" />
        <rect x="9.5" y="10" width="3" height="8" rx="1" fill="#FFFFFF" />
        <rect x="14" y="7" width="3" height="11" rx="1" fill="#FFFFFF" />
      </svg>
    ),
    title: 'Fellowship Program in NextGen Data Science & Analytics',
    href: '/courses/data-science',
    desc: 'Master AI-powered data analytics and data science skills to land top data analyst roles - Assured!',
  },
]

export default function Navbar() {
  const navbar = { ...defaultNavbar, ...((data as any).navbar ?? {}) }
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const [hoveredNavIndex, setHoveredNavIndex] = useState<number | null>(null)
  const dropdownRef = useRef<HTMLDivElement>(null)
  const mobileDropdownRef = useRef<HTMLDivElement>(null)
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 8)
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close dropdown on outside click
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const target = e.target as Node
      const insideDesktop = dropdownRef.current?.contains(target)
      const insideMobile = mobileDropdownRef.current?.contains(target)
      if (!insideDesktop && !insideMobile) {
        setDropdownOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClick)
    return () => document.removeEventListener('mousedown', handleClick)
  }, [])

  const handleDropdownEnter = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current)
    setDropdownOpen(true)
  }

  const handleDropdownLeave = () => {
    closeTimer.current = setTimeout(() => setDropdownOpen(false), 120)
  }

  const [logoBase, ...logoRest] = (navbar.logo ?? '').split('.')
  const logoSuffix = logoRest.length ? `.${logoRest.join('.')}` : ''

  const logoWidthMobile = navbar.logoWidthMobile ?? defaultNavbar.logoWidthMobile
  const logoHeightMobile = navbar.logoHeightMobile ?? defaultNavbar.logoHeightMobile
  const logoWidthDesktop = navbar.logoWidthDesktop ?? defaultNavbar.logoWidthDesktop
  const logoHeightDesktop = navbar.logoHeightDesktop ?? defaultNavbar.logoHeightDesktop

  return (
    <>
      <style>{`
        .kodo-dropdown {
          position: absolute;
          top: calc(100% + 8px);
          left: 50%;
          transform: translateX(-50%);
          width: 420px;
          max-width: calc(100vw - 32px);
          background-color: #ffffff;
          border-radius: 14px;
          box-shadow: 0 8px 40px 0 rgba(0,0,0,0.13), 0 1.5px 6px 0 rgba(0,0,0,0.07);
          border: 1px solid #ECECEC;
          padding: 10px 8px;
          z-index: 9999;
          animation: dropdownFadeIn 0.18s cubic-bezier(.4,0,.2,1);
        }
        @keyframes dropdownFadeIn {
          from { opacity: 0; transform: translateX(-50%) translateY(-6px); }
          to   { opacity: 1; transform: translateX(-50%) translateY(0); }
        }
        .kodo-dropdown-item {
          display: flex;
          align-items: flex-start;
          gap: 13px;
          padding: 11px 13px;
          border-radius: 9px;
          cursor: pointer;
          background: #F3F1EC;
          transition: background 0.15s;
          text-decoration: none;
        }
        .kodo-dropdown-item:hover,
        .kodo-dropdown-item.hovered {
          background: #E8E4DA;
        }
        .kodo-dropdown-item .icon-wrap {
          flex-shrink: 0;
          margin-top: 2px;
        }
        .kodo-dropdown-item .item-title {
          font-size: 14px;
          font-weight: 700;
          color: #1A1A1A;
          line-height: 1.35;
          margin-bottom: 3px;
        }
        .kodo-dropdown-item .item-desc {
          font-size: 12.5px;
          color: #1A1A1A;
          line-height: 1.45;
          font-weight: 400;
        }
        .kodo-nav-trigger {
          position: relative;
        }
        .kodo-dropdown-arrow {
          transition: transform 0.2s;
        }
        .kodo-dropdown-arrow.open {
          transform: rotate(180deg);
        }
        /* Scrollable dropdown if many items */
        .kodo-dropdown-scroll {
          max-height: 400px;
          overflow-y: auto;
          -webkit-overflow-scrolling: touch;
          scrollbar-width: thin;
          scrollbar-color: #1A1A1A transparent;
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
        .kodo-dropdown-scroll::-webkit-scrollbar {
          width: 5px;
        }
        .kodo-dropdown-scroll::-webkit-scrollbar-thumb {
          background: #1A1A1A;
          border-radius: 10px;
        }
        .kodo-mobile-dropdown-scroll {
          max-height: 300px;
          overflow-y: auto;
          -webkit-overflow-scrolling: touch;
          scrollbar-width: thin;
          scrollbar-color: #1A1A1A transparent;
        }
        .kodo-mobile-dropdown-scroll::-webkit-scrollbar {
          width: 5px;
        }
        .kodo-mobile-dropdown-scroll::-webkit-scrollbar-thumb {
          background: #1A1A1A;
          border-radius: 10px;
        }
      `}</style>

      <header
        className={`w-full transition-shadow duration-300 ${scrolled ? 'shadow-md' : 'shadow-none'}`}
      >
        <div className="h-[3px] sm:h-1 w-full bg-[#2DF8C5]" />

        <div className="w-full bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 lg:px-6 xl:px-16 2xl:px-20">
            <div className="flex items-center justify-between h-14 sm:h-[64px]">

              {/* Logo */}
              <a href="/" className="flex items-center gap-2 flex-shrink-0">
                {navbar.logoImage ? (
                  <>
                    <Image
                      src={navbar.logoImage}
                      alt={navbar.logo}
                      width={logoWidthMobile}
                      height={logoHeightMobile}
                      quality={100}
                      className="block sm:hidden object-contain"
                      style={{ width: logoWidthMobile, height: logoHeightMobile }}
                    />
                    <Image
                      src={navbar.logoImage}
                      alt={navbar.logo}
                      width={logoWidthDesktop}
                      height={logoHeightDesktop}
                      quality={100}
                      className="hidden sm:block object-contain"
                      style={{ width: logoWidthDesktop, height: logoHeightDesktop }}
                    />
                  </>
                ) : (
                  <span className="flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 rounded-md border-2 border-[#1A1A1A]">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                      <circle cx="8" cy="10" r="1.3" fill="#1A1A1A" />
                      <circle cx="16" cy="10" r="1.3" fill="#1A1A1A" />
                      <path d="M8 15c1.2 1 2.8 1 4 0" stroke="#1A1A1A" strokeWidth="1.4" strokeLinecap="round" />
                    </svg>
                  </span>
                )}
                <span className="text-base sm:text-xl tracking-tight text-[#1A1A1A]">
                  {logoBase}
                  <span className="font-extrabold">{logoSuffix}</span>
                </span>
              </a>

              {/* Desktop nav */}
              <div className="hidden lg:flex items-center gap-2 xl:gap-5 2xl:gap-7">
                <nav className="flex items-center gap-2 xl:gap-5 2xl:gap-7">
                  {navbar.links.map((link: string, i: number) => {
                    if (i === 0) {
                      // Fellowship Programs with dropdown
                      return (
                        <div
                          key={i}
                          className="kodo-nav-trigger"
                          ref={dropdownRef}
                          onMouseEnter={handleDropdownEnter}
                          onMouseLeave={handleDropdownLeave}
                        >
                          <button
                            type="button"
                            className="flex items-center gap-1 text-[13px] xl:text-[15px] font-semibold transition-colors whitespace-nowrap bg-transparent border-none cursor-pointer"
                            style={{ color: hoveredNavIndex === 0 ? navLinkHoverColors[0] : '#1A1A1A' }}
                            onMouseEnter={() => setHoveredNavIndex(0)}
                            onMouseLeave={() => setHoveredNavIndex(null)}
                            onClick={() => setDropdownOpen((v) => !v)}
                            aria-expanded={dropdownOpen}
                            aria-haspopup="true"
                          >
                            {link}
                            <svg
                              width="14"
                              height="14"
                              viewBox="0 0 14 14"
                              fill="none"
                              className={`kodo-dropdown-arrow mt-[1px] ${dropdownOpen ? 'open' : ''}`}
                            >
                              <path d="M3 5L7 9L11 5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                          </button>

                          {dropdownOpen && (
                            <div className="kodo-dropdown">
                              <div className="kodo-dropdown-scroll">
                                {fellowshipDropdownItems.map((item, idx) => (
                                  <Link
                                    key={idx}
                                    href="/#hero-form"
                                    className={`kodo-dropdown-item${hoveredIndex === idx ? ' hovered' : ''}`}
                                    onMouseEnter={() => setHoveredIndex(idx)}
                                    onMouseLeave={() => setHoveredIndex(null)}
                                    onClick={(e) => { e.preventDefault(); setDropdownOpen(false); scrollToHeroForm() }}
                                  >
                                    <span className="icon-wrap">{item.icon}</span>
                                    <span>
                                      <div className="item-title">{item.title}</div>
                                      <div className="item-desc">{item.desc}</div>
                                    </span>
                                  </Link>
                                ))}
                              </div>
                            </div>
                          )}
                        </div>
                      )
                    }

                    return (
                      <a
                        key={i}
                        href="/#hero-form"
                        onClick={(e) => { e.preventDefault(); scrollToHeroForm() }}
                        className="flex items-center gap-1 text-[13px] xl:text-[15px] font-semibold transition-colors whitespace-nowrap"
                        style={{ color: hoveredNavIndex === i ? (navLinkHoverColors[i] ?? '#00C9A7') : '#1A1A1A' }}
                        onMouseEnter={() => setHoveredNavIndex(i)}
                        onMouseLeave={() => setHoveredNavIndex(null)}
                      >
                        {link}
                      </a>
                    )
                  })}
                </nav>

                <Link
                  href="/contact"
                  className="flex items-center gap-1.5 rounded-full border-[1.5px] border-[#1A1A1A] text-[#1A1A1A] font-bold text-[13px] xl:text-[15px] pl-4 pr-3 xl:pl-5 xl:pr-3.5 py-2 xl:py-2.5 hover:bg-[#1A1A1A] hover:text-white transition-colors flex-shrink-0"
                >
                  {navbar.cta}
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M5 3L9 7L5 11" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Link>
              </div>

              {/* Mobile menu button */}
              <button
                type="button"
                onClick={() => setOpen(!open)}
                className="lg:hidden flex items-center justify-center w-9 h-9 flex-shrink-0 bg-transparent border-none p-0 cursor-pointer touch-manipulation"
                aria-label="Toggle menu"
                aria-expanded={open}
              >
                <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                  {open ? (
                    <path d="M5 5L17 17M17 5L5 17" stroke="#1A1A1A" strokeWidth="1.8" strokeLinecap="round" />
                  ) : (
                    <path d="M3 6H19M3 11H19M3 16H19" stroke="#1A1A1A" strokeWidth="1.8" strokeLinecap="round" />
                  )}
                </svg>
              </button>
            </div>

            {/* Mobile dropdown */}
            {open && (
              <div className="lg:hidden pb-5 flex flex-col gap-1 border-t border-[#ECECEC] pt-3" style={{ backgroundColor: 'rgb(255 254 247 / 0%)' }}>
                {/* Fellowship Programs accordion on mobile */}
                <div ref={mobileDropdownRef}>
                  <button
                    type="button"
                    className="flex items-center justify-between w-full text-[15px] font-semibold text-[#1A1A1A] hover:text-[#00C9A7] transition-colors py-2.5 bg-transparent border-none cursor-pointer"
                    onClick={() => setDropdownOpen((v) => !v)}
                    aria-expanded={dropdownOpen}
                    aria-haspopup="true"
                  >
                    {navbar.links[0]}
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 14 14"
                      fill="none"
                      className={`kodo-dropdown-arrow flex-shrink-0 ${dropdownOpen ? 'open' : ''}`}
                    >
                      <path d="M3 5L7 9L11 5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>
                  {dropdownOpen && (
                    <div className="kodo-mobile-dropdown-scroll mt-1 mb-2 flex flex-col gap-2">
                      {fellowshipDropdownItems.map((item, idx) => (
                        <Link
                          key={idx}
                          href="/#hero-form"
                          className="flex items-start gap-2.5 p-2.5 rounded-xl bg-[#F3F1EC] hover:bg-[#E8E4DA] transition-colors group"
                          onClick={(e) => { e.preventDefault(); setOpen(false); setDropdownOpen(false); scrollToHeroForm() }}
                        >
                          <span className="flex-shrink-0 mt-0.5">{item.icon}</span>
                          <span>
                            <div className="text-[13px] font-bold text-[#1A1A1A] leading-snug">{item.title}</div>
                            <div className="text-[12px] text-[#1A1A1A] mt-0.5 leading-snug">{item.desc}</div>
                          </span>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>

                {navbar.links.slice(1).map((link: string, i: number) => (
                  <a
                    key={i}
                    href="/#hero-form"
                    onClick={(e) => { e.preventDefault(); setOpen(false); scrollToHeroForm() }}
                    className="flex items-center justify-between text-[15px] font-semibold text-[#1A1A1A] hover:text-[#00C9A7] transition-colors py-2.5"
                  >
                    {link}
                  </a>
                ))}

                <Link
                  href="/contact"
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-center gap-1.5 rounded-full border-[1.5px] border-[#1A1A1A] text-[#1A1A1A] font-bold text-[15px] px-5 py-2.5 mt-3 hover:bg-[#1A1A1A] hover:text-white transition-colors"
                >
                  {navbar.cta}
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M5 3L9 7L5 11" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Link>
              </div>
            )}
          </div>
        </div>
      </header>
    </>
  )
}
