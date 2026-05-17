import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowUpRight } from "lucide-react"
import { Link } from "react-router-dom"
import { fadeInUp, staggerContainer, staggerItem } from "../../../lib/motion"
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
    <section className="py-16 md:py-24 bg-bg-deep">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 lg:px-16">
        {/* Header */}
        <motion.div
          {...fadeInUp}
          className="flex items-start justify-between mb-14"
        >
          <h2 className="text-3xl md:text-[42px] font-medium text-white tracking-tight  leading-tight">
            Offsite Programs and Events
          </h2>
          <Link
            to="/offsite-events"
            className="hidden md:inline-flex items-center gap-1.5 mt-1 px-5 py-2.5 bg-secondary-terra text-white text-[11px] font-semibold tracking-[0.15em] uppercase rounded-sm hover:bg-secondary-rust transition-colors whitespace-nowrap"
          >
            View All Events
            <ArrowUpRight size={13} strokeWidth={2.5} />
          </Link>
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
                <p className="text-3xl md:text-[34px] font-base tracking-wide  text-[#D0A270]" >
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

        {/* Previous Events — 2 column layout */}
        <motion.div {...fadeInUp}>
          <div className="grid grid-cols-1 md:grid-cols-[240px_1fr] gap-8 md:gap-16">
            {/* Left column — heading */}
            <div>
              <h3 className="text-2xl font-medium text-white leading-tight">
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
                      className={`text-[15px] md:text-lg font-medium transition-colors duration-200 ${
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
                          className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 w-[180px] h-[120px] rounded overflow-hidden z-10 pointer-events-none"
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
                <Link
                  to="/offsite-events"
                  className="inline-flex items-center gap-1.5 px-5 py-2.5 bg-secondary-terra text-white text-[11px] font-semibold tracking-[0.15em] uppercase rounded-sm hover:bg-secondary-rust transition-colors"
                >
                  View All Events
                  <ArrowUpRight size={13} strokeWidth={2.5} />
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
