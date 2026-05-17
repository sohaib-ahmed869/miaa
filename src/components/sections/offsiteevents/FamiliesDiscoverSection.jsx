import { motion } from "framer-motion"
import { fadeInUp, staggerContainer, staggerItem } from "../../../lib/motion"

import artConnectionImg from "../../../assets/images/MIAEvents/families-art-connection.png"
import behindVisionImg from "../../../assets/images/MIAEvents/families-behind-vision.png"
import heritageDesignImg from "../../../assets/images/MIAEvents/families-heritage-design.png"

const FAMILY_EVENTS = [
  {
    date: "07.02.26",
    title: "The Art of Connection",
    description:
      "How Islamic art continues to inspire creativity and unity across Australia's diverse communities.",
    image: artConnectionImg,
  },
  {
    date: "07.02.26",
    title: "Behind the Vision",
    description:
      "Meet the people and ideas shaping the Museum of Islamic Art Australia's journey.",
    image: behindVisionImg,
  },
  {
    date: "07.02.26",
    title: "Heritage and Design",
    description:
      "Exploring how tradition and innovation come together in MIAA's creative process.",
    image: heritageDesignImg,
  },
]

export default function FamiliesDiscoverSection() {
  return (
    <section className="relative py-16 md:py-24 bg-accent-cream">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 lg:px-16">
        <motion.div {...fadeInUp} className="mb-12 md:mb-14 max-w-3xl">
          <p className="text-[10px] tracking-[0.25em] uppercase text-secondary-wine mb-3">
            MIAA Kids: Family Events
          </p>
          <h2 className="text-3xl md:text-[42px] font-medium text-primary tracking-tight leading-tight">
            Where Families Discover Art Together
          </h2>
        </motion.div>

        <motion.div
          {...staggerContainer}
          className="grid grid-cols-1 md:grid-cols-3 gap-x-8 md:gap-x-12 lg:gap-x-16 gap-y-12"
        >
          {FAMILY_EVENTS.map((event, i) => (
            <motion.article
              key={i}
              {...staggerItem}
              className="group flex flex-col"
            >
              {/* Title */}
              <h3 className="text-lg md:text-xl font-semibold text-primary leading-tight mb-2">
                {event.title}
              </h3>

              {/* Description */}
              <p className="text-[13px] md:text-sm text-primary/80 leading-relaxed mb-5">
                {event.description}
              </p>

              {/* Image — fixed height + rounded corners so all 3 match exactly */}
              <div
                className="h-[200px] md:h-[240px] lg:h-[260px] mb-5 overflow-hidden rounded-lg bg-cover bg-center"
                style={{ backgroundImage: `url(${event.image})` }}
                role="img"
                aria-label={event.title}
              />

              {/* Date — wheat/gold, right-aligned, at the bottom */}
              <div className="mt-auto text-right">
                <p className="text-2xl md:text-[28px] tracking-wide text-[#D0A270]">
                  {event.date}
                </p>
                <p className="text-[11px] text-primary/60 italic mt-1">
                  At Gallery A, MIAA
                </p>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
