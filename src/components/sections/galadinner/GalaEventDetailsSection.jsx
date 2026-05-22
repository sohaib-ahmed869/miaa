import { motion } from "framer-motion"
import { ArrowUpRight } from "lucide-react"
import { fadeInUp, fadeInLeft, fadeInRight } from "../../../lib/motion"
import CTAButton from "../../ui/Button"
import SectionDivider from "../../ui/SectionDivider"

import maskImage from "../../../assets/images/GalaDinner/maskimage.png"
import heroBgPattern from "../../../assets/images/GalaDinner/herobgpattern.png"

export default function GalaEventDetailsSection() {
  return (
    <section className="relative bg-primary overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-60">
        <img src={heroBgPattern} alt="" className="w-full h-full object-cover" />
      </div>

      {/* Section divider */}
      <div className="relative z-10 max-w-[1400px] 3xl:max-w-[3200px] mx-auto">
        <SectionDivider label="Event" bg="bg-transparent" variant="dark" />
      </div>

      <div className="relative z-10 max-w-[1400px] 3xl:max-w-[3200px] mx-auto px-6 md:px-10 lg:px-16 3xl:px-24 py-12 md:py-16">
        {/* Top row — Event details + Date/Time */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 mb-12">
          {/* Left — Heading + description */}
          <motion.div {...fadeInLeft}>
            <h2 className="font-display text-2xl md:text-3xl 3xl:text-[3.2rem] font-medium text-white leading-tight tracking-wide uppercase mb-6">
              Event Details
            </h2>
            <p className="text-sm 3xl:text-lg text-white/80 leading-relaxed font-medium max-w-md 3xl:max-w-lg text-justify">
              Join us on this auspicious occasion, hear from our special guest speakers and entertainment, and enjoy a fine dining experience in the stunning surroundings of the Art Gallery of New South Wales. Your attendance directly supports the building of MIAA. We look forward to welcoming you on the night.
            </p>
          </motion.div>

          {/* Right — Date, time, schedule */}
          <motion.div {...fadeInRight} className="lg:ml-auto">
            <p className="font-display text-lg md:text-xl 3xl:text-2xl tracking-wide uppercase mb-1" style={{ color: "#F3EFEB" }}>
              Saturday
            </p>
            <h3 className="font-display text-3xl sm:text-4xl md:text-5xl 3xl:text-6xl font-medium tracking-tight leading-none gala-heading-light mb-2">
              25 July 2026
            </h3>
            <p className="text-sm 3xl:text-base text-white/70 mb-6">
              6:00PM — 10:30PM
            </p>

            <div className="h-px bg-white/15 mb-6" />

            <div className="flex gap-8 md:gap-16">
              <div>
                <p className="text-[0.6875rem] 3xl:text-sm tracking-[0.2em] uppercase text-white/50 mb-1">Arrival Reception</p>
                <p className="font-display text-2xl sm:text-3xl md:text-4xl 3xl:text-[3.2rem] font-medium tracking-tight leading-none gala-heading-light">
                  6:00PM
                </p>
              </div>
              <div>
                <p className="text-[0.6875rem] 3xl:text-sm tracking-[0.2em] uppercase text-white/50 mb-1">Dinner Commences</p>
                <p className="font-display text-2xl sm:text-3xl md:text-4xl 3xl:text-[3.2rem] font-medium tracking-tight leading-none gala-heading-light">
                  7:00PM
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom row — Venue + Ticket */}
        <div className="grid grid-cols-1 md:grid-cols-[3fr_2fr] gap-4 items-stretch">
          {/* Left — Venue with mask image */}
          <motion.div {...fadeInLeft} className="relative rounded-lg overflow-hidden min-h-[16.25rem]">
            {/* Mask image background */}
            <div className="absolute inset-0">
              <img src={maskImage} alt="Kaldor Hall" className="w-full h-full object-cover" />
            </div>

            {/* Venue text overlay — top aligned */}
            <div className="relative z-10 p-6 flex flex-col justify-between h-full">
              <div>
                <p className="font-display text-base md:text-xl 3xl:text-2xl tracking-wide uppercase gala-heading-light leading-tight">
                  Art Gallery of New<br />South Wales
                </p>
                <h3 className="font-display text-3xl md:text-4xl 3xl:text-[3.2rem] font-medium tracking-tight leading-none text-white mt-1 uppercase">
                  Kaldor Hall
                </h3>
                <div className="text-xs 3xl:text-sm text-white leading-relaxed mt-3">
                  <p>Ground level of the Naala Nura building</p>
                  <p>Art Gallery Road, The Domain, Sydney NSW 2000, Australia</p>
                </div>
              </div>
              <a
                href="https://maps.google.com/?q=Art+Gallery+of+New+South+Wales+Sydney"
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center gap-1 text-[0.6875rem] 3xl:text-sm font-bold tracking-[0.15em] uppercase text-white hover:text-accent-wheat transition-colors"
              >
                Open Maps
                <ArrowUpRight className="w-3 h-3" strokeWidth={2.5} />
              </a>
            </div>
          </motion.div>

          {/* Right — Ticket info */}
          <motion.div {...fadeInRight} className="rounded-lg p-6 md:p-8 3xl:p-10 flex flex-col justify-between" style={{ backgroundColor: "#F3EFEB" }}>
            <div>
              <h3 className="font-display text-2xl md:text-3xl 3xl:text-4xl font-medium text-primary tracking-wide uppercase mb-4">
                Ticket
              </h3>
              <p className="text-sm 3xl:text-lg text-primary leading-relaxed font-medium">
                Attendance is by booking only. This is an adult only, no-alcohol and halal friendly event. Book your tickets here.
              </p>
            </div>
            <div className="mt-6">
              <CTAButton
                href="https://tickets.miaaustralia.org/checkout/view-event/id/8327602/chk/17d4/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6"
              >
                Buy Ticket
              </CTAButton>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
