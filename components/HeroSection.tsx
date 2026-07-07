import data from '@/data/content.json'
import LeadForm from './LeadForm'

export default function HeroSection() {
  const { hero, stats } = data

  return (
    <section style={{marginTop: "-37px"}} className="flex min-h-screen w-full items-center bg-white">
      <div className="mx-auto w-full max-w-7xl px-6 pt-20 pb-8 sm:px-10 sm:py-10 lg:px-16 lg:py-12 xl:px-20">
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

            {/* Stats Grid */}
            <div
              className="order-3 mt-6 flex w-full flex-wrap overflow-hidden sm:mt-8 lg:flex-nowrap"
              style={{
                backgroundColor: 'rgb(255 183 175 / 11%)',
                borderRadius: '14px',
              }}
            >
              {stats.map((stat, i) => (
                <div
                  key={i}
                  className="relative flex flex-1 flex-col items-center justify-center px-3 py-4 text-center sm:py-5"
                  style={{ minWidth: '100px' }}
                >
                  {i !== 0 && (
                    <span
                      className="absolute left-0 top-[18%] h-[64%] w-px"
                      style={{ backgroundColor: '#28282818' }}
                    />
                  )}
                  <span className="text-2xl leading-tight tracking-tight text-[#111111] sm:text-[26px]">
                    {stat.value}
                  </span>
                  <span className="mt-1 max-w-[110px] text-[11px] leading-snug text-[#555555] sm:text-xs">
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