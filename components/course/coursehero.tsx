// components/course/CourseHero.tsx
import Image from 'next/image'

export default function CourseHero() {
  return (
    <section className="bg-muted/30 py-16 md:py-24">
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <span className="inline-block text-sm font-medium text-primary mb-3">
            Real Estate
          </span>
          <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-4">
            Property Investment Mastery
          </h1>
          <p className="text-muted-foreground text-lg mb-6">
            Learn how to evaluate, acquire, and manage profitable property
            investments — from market research to closing the deal.
          </p>

          <div className="flex items-center gap-4 mb-8">
            <span className="text-2xl font-bold">$199</span>
            <span className="text-muted-foreground line-through">$299</span>
          </div>

          <button className="bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium hover:opacity-90 transition">
            Enroll Now
          </button>
        </div>

        <div className="relative w-full aspect-video rounded-xl overflow-hidden">
          <Image
            src="/images/courses/property-hero.jpg"
            alt="Property Investment Course"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>
    </section>
  )
}