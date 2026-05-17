import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowUpRight } from "lucide-react"
import { Link } from "react-router-dom"
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
    <section className="py-16 md:py-24 bg-bg">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 lg:px-16">
        <motion.div {...fadeInUp}>
          <div className="grid grid-cols-1 md:grid-cols-[240px_1fr] gap-8 md:gap-16">
            {/* Left — heading */}
            <div>
              <h3 className="text-2xl md:text-[28px] font-medium text-primary leading-tight">
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
                    className="cursor-pointer py-4 relative"
                  >
                    <p
                      className={`text-[15px] md:text-lg font-medium transition-colors duration-200 ${
                        hoveredPrev === i
                          ? "text-secondary-terra"
                          : "text-primary"
                      }`}
                    >
                      {event.title}
                    </p>

                    {/* Hover image */}
                    <AnimatePresence>
                      {hoveredPrev === i && (
                        <motion.div
                          initial={{ opacity: 0, scale: 0.9, rotate: 0 }}
                          animate={{ opacity: 1, scale: 1, rotate: 3 }}
                          exit={{ opacity: 0, scale: 0.9 }}
                          transition={{ duration: 0.25 }}
                          className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 w-[180px] h-[120px] rounded overflow-hidden z-10 pointer-events-none shadow-lg"
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
                  View Now
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
