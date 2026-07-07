'use client'

import data from '@/data/content.json'
import Image from 'next/image'
import { useState, useEffect, useRef } from 'react'

const defaultNavbar = {
  logo: '',
  logoImage: '/kodoworkslogo.png',
  logoWidthMobile: 72,
  logoHeightMobile: 64,
  logoWidthDesktop: 72,
  logoHeightDesktop: 64,
  links: ['Fellowship Programs', 'For Colleges', 'Corporate Training', 'Hire from Kodo', 'Blog', 'Placements'],
  cta: 'Apply Now',
}

// ─── PER-LINK HOVER COLORS ──────────────────────────────────────────────────
// Edit the hex value for each link index to change its hover colour.
// Index matches the order in defaultNavbar.links (0-based).
const navLinkHoverColors: Record<number, string> = {
  0: 'rgb(113, 87, 189)', // Fellowship Programs  → teal
  1: 'rgb(113, 87, 189)', // For Colleges         → teal  (change to any colour you like)
  2: 'rgb(113, 87, 189)', // Corporate Training   → teal
  3: 'rgb(113, 87, 189)', // Hire from Kodo       → teal
  4: 'rgb(113, 87, 189)', // Blog                 → teal
  5: 'rgb(113, 87, 189)', // Placements           → teal
}
// ────────────────────────────────────────────────────────────────────────────

// Dropdown items for Fellowship Programs
const fellowshipDropdownItems = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <rect width="22" height="22" rx="6" fill="rgba(112, 87, 189, 0.09)" />
        <path d="M11 5a2 2 0 1 1 0 4 2 2 0 0 1 0-4zm0 5c2.21 0 4 .9 4 2v1H7v-1c0-1.1 1.79-2 4-2z" fill="rgb(113, 87, 189)" />
        <path d="M15 13h2v1.5h-2V13zm-8 0h2v1.5H7V13z" fill="rgb(113, 87, 189)" />
      </svg>
    ),
    title: 'Fellowship Program in Software Development with GenAI',
    desc: 'Upskill and land your dream career as an AI-powered Full-Stack or Backend developer - Assured!',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <rect width="22" height="22" rx="6" fill="rgba(112, 87, 189, 0.06)" />
        <circle cx="11" cy="11" r="5" stroke="rgb(113, 87, 189)" strokeWidth="1.5" />
        <path d="M8.5 11h5M11 8.5v5" stroke="rgb(113, 87, 189)" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    title: 'Fellowship Program in QA Automation (SDET)',
    desc: 'Get practical work experience of automation testing & get software testing roles in top companies - Assured!',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <rect width="22" height="22" rx="6" fill="rgba(112, 87, 189, 0.07)" />
        <rect x="5" y="14" width="3" height="4" rx="1" fill="rgb(113, 87, 189)" />
        <rect x="9.5" y="10" width="3" height="8" rx="1" fill="rgb(113, 87, 189)" />
        <rect x="14" y="7" width="3" height="11" rx="1" fill="rgb(113, 87, 189)" />
      </svg>
    ),
    title: 'Fellowship Program in NextGen Data Analytics & Data Science with AI',
    desc: 'Master the in-demand, AI-powered data analytics skills to land top data analyst roles - Assured!',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <rect width="22" height="22" rx="6" fill="rgba(112, 87, 189, 0.09)" />
        <rect x="5" y="5" width="5" height="5" rx="1.2" stroke="rgb(113, 87, 189)" strokeWidth="1.4" />
        <rect x="12" y="5" width="5" height="5" rx="1.2" stroke="rgb(113, 87, 189)" strokeWidth="1.4" />
        <rect x="5" y="12" width="5" height="5" rx="1.2" stroke="rgb(113, 87, 189)" strokeWidth="1.4" />
        <rect x="12" y="12" width="5" height="5" rx="1.2" stroke="rgb(113, 87, 189)" strokeWidth="1.4" />
      </svg>
    ),
    title: 'Fellowship Program In System Design',
    desc: 'Master advanced software development and design skills with hands-on experience in System Design - Assured!',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <rect width="22" height="22" rx="6" fill="rgba(112, 87, 189, 0.07)" />
        <path d="M7 8h8M7 11h6M7 14h4" stroke="rgb(113, 87, 189)" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    title: 'SkillQ Full-Stack Development Program',
    desc: 'A structured, project-based path to becoming a full-stack developer ready for the industry.',
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
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
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
          background: #fff;
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
          transition: background 0.15s;
          text-decoration: none;
        }
        .kodo-dropdown-item:hover,
        .kodo-dropdown-item.hovered {
          background: rgba(112, 87, 189, 0.14);
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
          transition: color 0.15s;
        }
        .kodo-dropdown-item:hover .item-title,
        .kodo-dropdown-item.hovered .item-title {
          color: #484848ba;
        }
        .kodo-dropdown-item .item-desc {
          font-size: 12.5px;
          color: #6B7280;
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
          scrollbar-width: thin;
          scrollbar-color: #696969 transparent;
        }
        .kodo-dropdown-scroll::-webkit-scrollbar {
          width: 5px;
        }
        .kodo-dropdown-scroll::-webkit-scrollbar-thumb {
          background: #D1FAF0;
          border-radius: 10px;
        }
      `}</style>

      <header
        className={`w-full transition-shadow duration-300 ${scrolled ? 'shadow-md' : 'shadow-none'}`}
      >
        <div className="h-[3px] sm:h-1 w-full bg-[#2DF8C5]" />

        <div className="w-full bg-white">
          <div className="max-w-7xl mx-auto px-3 sm:px-4">
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
              <div className="hidden lg:flex items-center gap-7">
                <nav className="flex items-center gap-7">
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
                            className="flex items-center gap-1 text-[15px] font-semibold transition-colors whitespace-nowrap bg-transparent border-none cursor-pointer"
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
                                  <a
                                    key={idx}
                                    href="#"
                                    className={`kodo-dropdown-item${hoveredIndex === idx ? ' hovered' : ''}`}
                                    onMouseEnter={() => setHoveredIndex(idx)}
                                    onMouseLeave={() => setHoveredIndex(null)}
                                    onClick={() => setDropdownOpen(false)}
                                  >
                                    <span className="icon-wrap">{item.icon}</span>
                                    <span>
                                      <div className="item-title">{item.title}</div>
                                      <div className="item-desc">{item.desc}</div>
                                    </span>
                                  </a>
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
                        href="#"
                        className="flex items-center gap-1 text-[15px] font-semibold transition-colors whitespace-nowrap"
                        style={{ color: hoveredNavIndex === i ? (navLinkHoverColors[i] ?? '#00C9A7') : '#1A1A1A' }}
                        onMouseEnter={() => setHoveredNavIndex(i)}
                        onMouseLeave={() => setHoveredNavIndex(null)}
                      >
                        {link}
                      </a>
                    )
                  })}
                </nav>

                <a
                  href="#"
                  className="flex items-center gap-1.5 rounded-full border-[1.5px] border-[#1A1A1A] text-[#1A1A1A] font-bold text-[15px] pl-5 pr-3.5 py-2.5 hover:bg-[#1A1A1A] hover:text-white transition-colors flex-shrink-0"
                >
                  {navbar.cta}
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M5 3L9 7L5 11" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
              </div>

              {/* Mobile menu button */}
              <button
                onClick={() => setOpen(!open)}
                className="lg:hidden flex items-center justify-center w-9 h-9 flex-shrink-0"
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
              <div className="lg:hidden pb-5 flex flex-col gap-1 border-t border-[#ECECEC] pt-3">
                {/* Fellowship Programs accordion on mobile */}
                <div>
                  <button
                    className="flex items-center justify-between w-full text-[15px] font-semibold text-[#1A1A1A] hover:text-[#00C9A7] transition-colors py-2.5 bg-transparent border-none cursor-pointer"
                    onClick={() => setDropdownOpen((v) => !v)}
                  >
                    {navbar.links[0]}
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 14 14"
                      fill="none"
                      className={`kodo-dropdown-arrow ${dropdownOpen ? 'open' : ''}`}
                    >
                      <path d="M3 5L7 9L11 5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>
                  {dropdownOpen && (
                    <div className="mt-1 mb-2 flex flex-col gap-1 pl-2">
                      {fellowshipDropdownItems.map((item, idx) => (
                        <a
                          key={idx}
                          href="#"
                          className="flex items-start gap-3 p-3 rounded-lg hover:bg-[#F0FDF9] transition-colors group"
                          onClick={() => { setOpen(false); setDropdownOpen(false) }}
                        >
                          <span className="flex-shrink-0 mt-0.5">{item.icon}</span>
                          <span>
                            <div className="text-[13px] font-bold text-[#1A1A1A] group-hover:text-[#00C9A7] transition-colors leading-snug">{item.title}</div>
                            <div className="text-[12px] text-[#6B7280] mt-0.5 leading-snug">{item.desc}</div>
                          </span>
                        </a>
                      ))}
                    </div>
                  )}
                </div>

                {navbar.links.slice(1).map((link: string, i: number) => (
                  <a
                    key={i}
                    href="#"
                    onClick={() => setOpen(false)}
                    className="flex items-center justify-between text-[15px] font-semibold text-[#1A1A1A] hover:text-[#00C9A7] transition-colors py-2.5"
                  >
                    {link}
                  </a>
                ))}

                <a
                  href="#"
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-center gap-1.5 rounded-full border-[1.5px] border-[#1A1A1A] text-[#1A1A1A] font-bold text-[15px] px-5 py-2.5 mt-3 hover:bg-[#1A1A1A] hover:text-white transition-colors"
                >
                  {navbar.cta}
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M5 3L9 7L5 11" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
              </div>
            )}
          </div>
        </div>
      </header>
    </>
  )
}
