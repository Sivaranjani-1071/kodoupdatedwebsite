import type { Metadata } from 'next'
import ContactSection from '@/components/contact/ContactSection'

export const metadata: Metadata = {
  title: 'Contact Us | KodoWork',
  description: 'Get in touch with KodoWorks to learn more about our Fellowship Programs, partnerships, or hiring from Kodo.',
}

export default function ContactPage() {
  return <ContactSection />
}
