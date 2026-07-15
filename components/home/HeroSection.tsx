import data from '@/data/content.json'
import LeadForm from './LeadForm'

export default function HeroSection() {
  const { hero, stats } = data

  return (
    <section className="flex w-full items-center bg-white min-h-[480px] sm:min-h-[520px] lg:min-h-[560px]">
      <div className="mx-auto w-full max-w-7xl px-4 pb-12 pt-6 sm:px-6 sm:pb-14 sm:pt-8 md:px-10 md:pb-16 md:pt-10 lg:px-16 lg:pb-20 lg:pt-12 xl:px-20">
        <div className="flex flex-col items-center justify-between gap-8 lg:flex-row lg:items-center lg:gap-12">

          {/* Left Content */}
          <div className="contents lg:flex lg:flex-1 lg:max-w-[600px] lg:flex-col lg:items-start">

            {/* Headline + CTA group */}
            <div className="order-1 w-full text-left lg:order-none">
              <h1
                className="mb-3 font-extrabold leading-[1.15] tracking-tight text-[#1A1A1A] text-left sm:mb-5"
                style={{ fontSize: 'clamp(26px, 5vw, 40px)' }}
              >
                {hero.headline}
              </h1>

              <p
                style={{ fontSize: '14px' }}
                className="mb-5 block max-w-[480px] text-sm leading-relaxed text-[#666666] text-left sm:mb-6 sm:text-base"
              >
                {hero.subheadline}
              </p>
            </div>

            {/* Stats Grid: 2x2 on mobile, single row from sm up */}
            <div
              className="order-3 mt-6 grid w-full grid-cols-2 overflow-hidden rounded-3xl sm:mt-8 sm:flex sm:flex-nowrap"
              style={{ backgroundColor: '#FDF1EF' }}
            >
              {stats.map((stat, i) => (
                <div
                  key={i}
                  className="relative flex flex-1 flex-col items-center justify-center px-4 py-8 text-center sm:py-10"
                  style={{ minWidth: '100px' }}
                >
                  {i !== 0 && (
                    <span
                      className={`absolute left-0 top-[18%] h-[64%] w-px ${i % 2 === 0 ? 'hidden sm:block' : 'block'}`}
                      style={{ backgroundColor: '#28282818' }}
                    />
                  )}
                  <span className="text-3xl font-bold leading-tight tracking-tight text-[#111111] sm:text-4xl">
                    {stat.value}
                  </span>
                  <span
                    className="mt-2 max-w-[140px] text-xs font-medium leading-snug text-[#111111] sm:text-sm"
                  >
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>

          </div>

          {/* Form */}
          <div className="order-2 flex w-full justify-center lg:order-none lg:w-auto lg:flex-1 lg:justify-end">
            <LeadForm />
          </div>

        </div>
      </div>
    </section>
  )
}