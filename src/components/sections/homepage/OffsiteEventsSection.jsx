import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { fadeInUp, staggerContainer, staggerItem } from "../../../lib/motion"
import CTAButton from "../../ui/Button"
import { useCMS } from "../../../hooks/useCMS"
import { api } from "../../../lib/api"

import offsiteImg1 from "../../../assets/images/Homepage/Offsite program images/offsiteimg-01.png"
import offsiteImg2 from "../../../assets/images/Homepage/Offsite program images/offsiteimg-02.png"
import offsiteImg3 from "../../../assets/images/Homepage/Offsite program images/offsiteimg-03.png"
import offsiteImg4 from "../../../assets/images/Homepage/Offsite program images/offsiteimg-04.png"

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

const FALLBACK_PREVIOUS = [
  { title: "Event Title Lorem Ipsum Dolor Sit Amet", image: offsiteImg4 },
  { title: "Event Title Lorem Ipsum Dolor Sit Amet", image: offsiteImg4 },
  { title: "Event Title Lorem Ipsum Dolor Sit Amet", image: offsiteImg4 },
  { title: "Event Title Lorem Ipsum Dolor Sit Amet", image: offsiteImg4 },
]

export default function OffsiteEventsSection() {
  const [hoveredPrev, setHoveredPrev] = useState(null)

  const { data: upcomingEvents } = useCMS(
    () => api.events({ category: "homepage" }),
    FALLBACK_EVENTS
  )
  const { data: previousEvents } = useCMS(
    () => api.previousEvents({ surface: "homepage" }),
    FALLBACK_PREVIOUS
  )

  return (
    <section className="py-16 md:py-24 3xl:py-32 bg-bg-deep">
      <div className="max-w-[1400px] 3xl:max-w-[1800px] mx-auto px-6 md:px-10 lg:px-16 3xl:px-24">
        {/* Header */}
        <motion.div
          {...fadeInUp}
          className="flex items-start justify-between mb-14"
        >
          <h2 className="text-3xl md:text-[42px] 3xl:text-[3.2rem] font-medium text-white tracking-tight leading-tight">
            Offsite Programs and Events
          </h2>
          <CTAButton to="/offsite-events" className="hidden md:inline-flex mt-1 whitespace-nowrap">View All Events</CTAButton>
        </motion.div>

        {/* Upcoming event cards */}
        <motion.div
          {...staggerContainer}
          className="grid grid-cols-1 md:grid-cols-3 md:divide-x md:divide-white/15 gap-y-6 md:gap-y-0 mb-20"
        >
          {upcomingEvents.map((event, i) => (
            <motion.div
              key={event._id || i}
              {...staggerItem}
              className="group md:px-6 first:md:pl-0 last:md:pr-0"
            >
              {/* Date & location — right-aligned */}
              <div className="mb-4 text-right">
                <p className="text-3xl md:text-[34px] 3xl:text-[2.6rem] font-semibold tracking-wide text-[#D0A270]" >
                  {event.date}
                </p>
                <p className="text-[11px] 3xl:text-sm text-white mt-1 tracking-wide italic">
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
              <h3 className="text-[15px] 3xl:text-lg font-semibold text-white mb-2">
                {event.title}
              </h3>
              <p className="text-[13px] 3xl:text-base text-white/90 leading-relaxed">
                {event.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Previous Events — 2 column layout */}
        <motion.div {...fadeInUp}>
          <div className="grid grid-cols-1 md:grid-cols-[240px_1fr] 3xl:grid-cols-[300px_1fr] gap-8 md:gap-16">
            {/* Left column — heading */}
            <div>
              <h3 className="text-2xl 3xl:text-3xl font-medium text-white leading-tight">
                Previous Events
              </h3>
            </div>

            {/* Right column — list with hover image inline */}
            <div>
              <div className="flex flex-col divide-y divide-white/15 border-y border-white/15">
                {previousEvents.map((event, i) => (
                  <div
                    key={event._id || i}
                    onMouseEnter={() => setHoveredPrev(i)}
                    onMouseLeave={() => setHoveredPrev(null)}
                    className="cursor-pointer py-4 relative"
                  >
                    <p
                      className={`text-[15px] md:text-lg 3xl:text-xl font-medium transition-colors duration-200 ${
                        hoveredPrev === i
                          ? "text-accent-caramel"
                          : "text-white"
                      }`}
                    >
                      {event.title}
                    </p>

                    {/* Hover image — appears on the right of the hovered item */}
                    <AnimatePresence>
                      {hoveredPrev === i && (
                        <motion.div
                          initial={{ opacity: 0, scale: 0.9, rotate: 0 }}
                          animate={{ opacity: 1, scale: 1, rotate: 3 }}
                          exit={{ opacity: 0, scale: 0.9 }}
                          transition={{ duration: 0.25 }}
                          className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 w-[180px] h-[120px] 3xl:w-[240px] 3xl:h-[160px] rounded overflow-hidden z-10 pointer-events-none"
                        >
                          <img
                            src={event.imageUrl || event.image}
                            alt=""
                            className="w-full h-full object-cover"
                          />
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </div>

              <div className="mt-6">
                <CTAButton to="/offsite-events">View All Events</CTAButton>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
