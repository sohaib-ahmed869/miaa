import { motion } from "framer-motion"
import { staggerContainer, staggerItem } from "../../../lib/motion"

import hero1 from "../../../assets/images/MIAEvents/events-hero-1.png"
import hero2 from "../../../assets/images/MIAEvents/events-hero-2.png"
import hero3 from "../../../assets/images/MIAEvents/events-hero-3.png"

const HERO_PHOTOS = [
  { src: hero1, alt: "Meet the award-winning author book launch" },
  { src: hero2, alt: "MIAA community panel discussion" },
  { src: hero3, alt: "Visitors connecting at a MIAA event" },
]

export default function EventsHeroSection() {
  return (
    <section className="relative bg-bg-deep overflow-hidden">
      {/* Title */}
      <div className="relative z-10 w-full px-6 md:px-10 lg:px-16 pt-28 md:pt-32 pb-8 md:pb-10">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-3xl md:text-4xl lg:text-[2.6rem] font-medium text-accent-cream tracking-tight leading-tight"
        >
          Events at MIAA
        </motion.h1>
      </div>

      {/* 3-photo strip — full-bleed: 3 equal columns spanning the entire viewport width, no padding */}
      <motion.div
        {...staggerContainer}
        className="w-full pb-10 md:pb-14"
      >
        <div className="grid grid-cols-1 md:grid-cols-[1fr_2.5fr_1fr] gap-3 md:gap-4 w-full items-stretch">
          {HERO_PHOTOS.map((photo, i) => (
            <motion.div
              key={i}
              {...staggerItem}
              className="h-[300px] md:h-[400px] lg:h-[480px] overflow-hidden bg-cover bg-center"
              style={{ backgroundImage: `url(${photo.src})` }}
              role="img"
              aria-label={photo.alt}
            />
          ))}
        </div>
      </motion.div>
    </section>
  )
}
