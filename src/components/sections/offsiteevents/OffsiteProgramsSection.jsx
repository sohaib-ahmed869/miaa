import { motion } from "framer-motion"
import { fadeInUp, staggerContainer, staggerItem } from "../../../lib/motion"
import { useCMS } from "../../../hooks/useCMS"
import { api } from "../../../lib/api"

import offsiteImg1 from "../../../assets/images/Homepage/Offsite program images/offsiteimg-01.png"
import offsiteImg2 from "../../../assets/images/Homepage/Offsite program images/offsiteimg-02.png"
import offsiteImg3 from "../../../assets/images/Homepage/Offsite program images/offsiteimg-03.png"

const FALLBACK_EVENTS = [
  {
    date: "07.02.26",
    location: "At Gallery A, MIAA",
    title: "Islamic Art Showcase",
    description:
      "A curated exhibition highlighting works by emerging Muslim Australian artists and their global influences.",
    image: offsiteImg1,
  },
  {
    date: "07.02.26",
    location: "At Gallery A, MIAA",
    title: "Islamic Art Showcase",
    description:
      "A curated exhibition highlighting works by emerging Muslim Australian artists and their global influences.",
    image: offsiteImg2,
  },
  {
    date: "TBA",
    location: "At Gallery A, MIAA",
    title: "Islamic Art Showcase",
    description:
      "A curated exhibition highlighting works by emerging Muslim Australian artists and their global influences.",
    image: offsiteImg3,
  },
]

export default function OffsiteProgramsSection() {
  const { data: upcomingEvents } = useCMS(
    () => api.events({ category: "offsite" }),
    FALLBACK_EVENTS
  )

  return (
    <section className="py-12 md:py-16 bg-bg-deep">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 lg:px-16">
        <motion.h2
          {...fadeInUp}
          className="text-3xl md:text-[42px] font-medium text-white tracking-tight leading-tight mb-12 md:mb-14"
        >
          Offsite Programs and Events
        </motion.h2>

        <motion.div
          {...staggerContainer}
          className="grid grid-cols-1 md:grid-cols-3 md:divide-x md:divide-white/15 gap-y-8 md:gap-y-0"
        >
          {upcomingEvents.map((event, i) => (
            <motion.div
              key={event._id || i}
              {...staggerItem}
              className="group md:px-6 first:md:pl-0 last:md:pr-0"
            >
              {/* Date & location — right-aligned */}
              <div className="mb-4 text-right">
                <p className="text-3xl md:text-[34px] font-base tracking-wide text-[#D0A270]">
                  {event.date}
                </p>
                <p className="text-[11px] text-white mt-1 tracking-wide italic">
                  {event.location}
                </p>
              </div>

              {/* Image */}
              <div className="aspect-[4/3] overflow-hidden mb-5">
                <img
                  src={event.imageUrl || event.image}
                  alt={event.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Text */}
              <h3 className="text-[15px] font-semibold text-white mb-2">
                {event.title}
              </h3>
              <p className="text-[13px] text-white/90 leading-relaxed">
                {event.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
