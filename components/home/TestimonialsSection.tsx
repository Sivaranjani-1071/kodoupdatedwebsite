import Image from 'next/image'

const leaders = [
  {
    quote:
      "We didn't start KodoWorks because we wanted to run a training academy. We started it because we kept meeting talented people who never got a real shot at proving what they could do. Every program here exists to close that gap — with real project work, not simulations.",
    name: 'Arunkumar MS',
    title: 'Chief Executive Officer, KodoWorks',
    avatar: '/Arunkumar MS 1.png',
  },
  {
    quote:
      "Our mentors aren't hired to teach — they're hired to build. That distinction shapes everything about how a fellow experiences this program: the projects are real, the code reviews are real, and the standards are the ones we hold our own engineering teams to.",
    name: 'Hema C',
    title: 'Chief Technology Officer, KodoWorks',
    avatar: '/hema.webp',
  },
]

export default function LeadershipSection() {
  return (
    <section className="w-full bg-white py-6 sm:py-8 md:py-12 lg:py-16 px-4 sm:px-6 md:px-10 lg:px-16 xl:px-20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-center text-2xl sm:text-3xl lg:text-4xl font-bold text-[#1A1A1A] mb-10 sm:mb-14">
          Built by People Who Build Software for a Living
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-12 lg:gap-16">
          {leaders.map((t, i) => (
            <div key={i} className="flex flex-col items-center text-center">
              <div className="relative bg-[#3DD9B3] rounded-3xl px-6 sm:px-8 py-6 sm:py-8 w-full">
                <p className="text-[#0B1F1C] text-sm sm:text-base leading-relaxed">
                  &quot;{t.quote}&quot;
                </p>
                <div className="absolute left-1/2 -bottom-2.5 w-5 h-5 bg-[#3DD9B3] rotate-45 -translate-x-1/2" />
              </div>

              <div className="relative z-10 -mt-1 w-16 h-16 sm:w-[72px] sm:h-[72px] rounded-full border-[3px] border-[#3DD9B3] overflow-hidden mb-3 sm:mb-4">
                <Image
                  src={t.avatar}
                  alt={t.name}
                  width={72}
                  height={72}
                  className="w-full h-full object-cover"
                />
              </div>

              <p className="font-bold text-[#1A1A1A] text-base sm:text-lg mb-1">{t.name}</p>
              <p className="text-[#999999] font-semibold text-sm sm:text-base">{t.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
