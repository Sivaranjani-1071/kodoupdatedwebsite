'use client'

import { useRef, useState, useLayoutEffect } from 'react'
import AnnouncementBanner from './AnnouncementBanner'
import Navbar from './Navbar'

export default function StickyHeader() {
  const bannerRef = useRef<HTMLDivElement>(null)
  const [bannerHeight, setBannerHeight] = useState(0)

  useLayoutEffect(() => {
    const el = bannerRef.current
    if (!el) return

    const updateHeight = () => setBannerHeight(el.offsetHeight)
    updateHeight()

    const resizeObserver = new ResizeObserver(updateHeight)
    resizeObserver.observe(el)

    return () => resizeObserver.disconnect()
  }, [])

  return (
    <>
      <div ref={bannerRef} className="sticky top-0 z-[60]">
        <AnnouncementBanner />
      </div>
      <div className="sticky z-50" style={{ top: bannerHeight }}>
        <Navbar />
      </div>
    </>
  )
}
