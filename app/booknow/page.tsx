import type { Metadata } from 'next'
import ContactSection from '@/components/booknow/ContactSection'

export const metadata: Metadata = {
  title: 'Book Now | KodoWork',
  description: 'Schedule a call with KodoWorks to learn more about our Fellowship Programs, partnerships, or hiring from Kodo.',
}

export default function ContactPage() {
  return <ContactSection />
}
