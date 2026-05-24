import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import { fadeInUp, staggerContainer, staggerItem } from "../../../lib/motion"
import { useCMS } from "../../../hooks/useCMS"
import { api } from "../../../lib/api"

function slugify(s = "") {
  return String(s)
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
}

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
    <section className="py-12 md:py-16 3xl:py-24 bg-bg-deep">
      <div className="max-w-[1400px] 3xl:max-w-[3200px] mx-auto px-6 md:px-10 lg:px-16 3xl:px-24">
        <motion.h2
          {...fadeInUp}
          className="text-3xl md:text-[2.625rem] 3xl:text-[3.2rem] font-medium text-white tracking-tight leading-tight mb-12 md:mb-14"
        >
          Offsite Programs and Events
        </motion.h2>

        <motion.div
          {...staggerContainer}
          className="grid grid-cols-1 md:grid-cols-3 md:divide-x md:divide-white/15 gap-y-8 md:gap-y-0"
        >
          {upcomingEvents.map((event, i) => {
            const slug = event.slug || event._id || slugify(event.title)
            return (
              <motion.div
                key={event._id || i}
                {...staggerItem}
                className="group md:px-6"
              >
                <Link to={`/event/${slug}`} className="block">
                  {/* Date & location — right-aligned */}
                  <div className="mb-4 text-right">
                    <p className="text-3xl md:text-[2.125rem] 3xl:text-[2.6rem] font-base tracking-wide text-[#D0A270] font-medium">
                      {event.date}
                    </p>
                    <p className="text-[0.6875rem] 3xl:text-sm text-white mt-1 tracking-wide italic">
                      {event.location}
                    </p>
                  </div>

                  {/* Image */}
                  <div className="aspect-[4/3] overflow-hidden rounded-lg mb-5">
                    <img
                      src={event.imageUrl || event.image}
                      alt={event.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  {/* Text */}
                  <h3 className="text-[0.9375rem] 3xl:text-xl font-semibold text-white mb-2 group-hover:text-accent-caramel transition-colors">
                    {event.title}
                  </h3>
                  <p className="text-[0.8125rem] 3xl:text-lg text-white/90 leading-relaxed">
                    {event.description}
                  </p>
                </Link>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
