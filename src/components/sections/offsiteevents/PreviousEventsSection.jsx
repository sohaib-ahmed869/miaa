import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import CTAButton from "../../ui/Button"
import { fadeInUp } from "../../../lib/motion"
import { useCMS } from "../../../hooks/useCMS"
import { api } from "../../../lib/api"

import offsiteImg4 from "../../../assets/images/Homepage/Offsite program images/offsiteimg-04.png"

const FALLBACK_PREVIOUS = [
  { title: "Event Title Lorem Ipsum Dolor Sit Amet", image: offsiteImg4 },
  { title: "Event Title Lorem Ipsum Dolor Sit Amet", image: offsiteImg4 },
  { title: "Event Title Lorem Ipsum Dolor Sit Amet", image: offsiteImg4 },
  { title: "Event Title Lorem Ipsum Dolor Sit Amet", image: offsiteImg4 },
  { title: "Event Title Lorem Ipsum Dolor Sit Amet", image: offsiteImg4 },
]

export default function PreviousEventsSection() {
  const [hoveredPrev, setHoveredPrev] = useState(null)
  const { data: previousEvents } = useCMS(
    () => api.previousEvents({ surface: "offsite" }),
    FALLBACK_PREVIOUS
  )

  return (
    <section className="py-16 md:py-24 3xl:py-32 bg-bg">
      <div className="max-w-[1400px] 3xl:max-w-[3200px] mx-auto px-6 md:px-10 lg:px-16 3xl:px-24">
        <motion.div {...fadeInUp}>
          <div className="grid grid-cols-1 md:grid-cols-[15rem_1fr] gap-8 md:gap-16">
            {/* Left — heading */}
            <div>
              <h3 className="text-2xl md:text-[1.75rem] 3xl:text-[2.4rem] font-medium text-primary leading-tight">
                Previous Events
              </h3>
            </div>

            {/* Right — list with hover image inline */}
            <div>
              <div className="flex flex-col divide-y divide-primary/15 border-y border-primary/15">
                {previousEvents.map((event, i) => (
                  <div
                    key={event._id || i}
                    onMouseEnter={() => setHoveredPrev(i)}
                    onMouseLeave={() => setHoveredPrev(null)}
                    className="cursor-pointer py-4 3xl:py-5 relative"
                  >
                    <p
                      className={`text-[0.9375rem] md:text-lg 3xl:text-xl font-medium transition-colors duration-200 ${
                        hoveredPrev === i
                          ? "text-secondary-terra"
                          : "text-primary"
                      }`}
                    >
                      {event.title}
                    </p>
                    {event.subtitle && (
                      <p className="text-sm 3xl:text-base text-primary mt-0.5">
                        {event.subtitle}
                      </p>
                    )}

                    {/* Hover image */}
                    <AnimatePresence>
                      {hoveredPrev === i && (
                        <motion.div
                          initial={{ opacity: 0, scale: 0.9, rotate: 0 }}
                          animate={{ opacity: 1, scale: 1, rotate: 3 }}
                          exit={{ opacity: 0, scale: 0.9 }}
                          transition={{ duration: 0.25 }}
                          className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 w-[180px] h-[120px] 3xl:w-[12vw] 3xl:h-[8vw] rounded overflow-hidden z-10 pointer-events-none shadow-lg"
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
                <CTAButton to="/offsite-events">View Now</CTAButton>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
