# kodoworks — Next.js 14

A pixel-perfect clone of the Crio.Do homepage built with Next.js 14 (App Router), TypeScript, and Tailwind CSS.

## Project Structure

```
crio-clone/
├── app/
│   ├── globals.css        # Global styles + Tailwind directives
│   ├── layout.tsx         # Root layout with metadata
│   └── page.tsx           # Home page
├── components/
│   ├── AnnouncementBanner.tsx   # Top teal banner with live countdown timer
│   ├── Navbar.tsx               # Sticky navigation with logo + links
│   ├── HeroSection.tsx          # Main hero with headline, bullets, stats
│   ├── LeadForm.tsx             # Lead capture form with dropdown + phone
│   └── FooterBanner.tsx         # Bottom teal footer bar
├── data/
│   └── content.json       # All text content (banner, nav, hero, stats, form)
├── public/                # Static assets
├── next.config.js
├── tailwind.config.js
├── postcss.config.js
└── tsconfig.json
```

## Getting Started

### 1. Install dependencies
```bash
npm install
```

### 2. Run the development server
```bash
npm run dev
```

### 3. Open in browser
Visit [http://localhost:3000](http://localhost:3000)

## Build for Production
```bash
npm run build
npm start
```

## Tech Stack
- **Next.js 14** — App Router
- **TypeScript**
- **Tailwind CSS** — Utility-first styling
- **Inter font** — via Google Fonts

## Features Implemented
- ✅ Live countdown timer in announcement banner
- ✅ Sticky responsive navbar with Programs dropdown indicator
- ✅ Hero headline, subheadline, bullet points
- ✅ Lead form with program dropdown, phone with India flag + +91 prefix
- ✅ All 5 stats with dividers
- ✅ Bottom contact footer bar
- ✅ Fully responsive (mobile + desktop)
- ✅ All content driven from `data/content.json`
