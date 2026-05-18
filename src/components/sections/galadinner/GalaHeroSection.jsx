import { motion } from "framer-motion"
import CTAButton from "../../ui/Button"

import heroImg from "../../../assets/images/GalaDinner/hero.jpg"
import heroBgPattern from "../../../assets/images/GalaDinner/herobgpattern.png"

export default function GalaHeroSection() {
  return (
    <section className="relative h-auto md:h-screen md:min-h-[600px] md:max-h-[1200px] overflow-hidden flex flex-col">
      {/* Top section — teal bg with pattern + centered text */}
      <div className="relative flex-none md:flex-[3] flex flex-col items-center justify-center bg-primary py-20 md:py-0">
        {/* Hero background pattern */}
        <div className="absolute inset-0">
          <img src={heroBgPattern} alt="" className="w-full h-full object-cover" />
        </div>

        {/* Hero text — staggered entrance */}
        <div className="relative z-10 text-center px-6">
          <motion.p
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            className="font-display text-xs sm:text-sm md:text-lg 3xl:text-2xl tracking-[0.35em] uppercase mb-1"
            style={{ color: "#F3EFEB" }}
          >
            Inaugural
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
            className="font-display text-4xl sm:text-5xl md:text-7xl lg:text-8xl 3xl:text-9xl font-medium tracking-tight leading-none gala-heading"
          >
            GALA DINNER
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
            className="font-display text-base sm:text-lg md:text-2xl 3xl:text-3xl tracking-tight uppercase mt-2"
            style={{ color: "#F3EFEB" }}
          >
            Museum of Islamic Art Australia
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1, ease: [0.25, 0.1, 0.25, 1] }}
            className="mt-6 md:mt-8"
          >
            <CTAButton to="/gala-dinner/tickets" className="px-6">Buy Ticket</CTAButton>
          </motion.div>
        </div>
      </div>

      {/* Hero image — slides up into view */}
      <div className="relative flex-none md:flex-[2] w-full h-[250px] md:h-auto bg-primary">
        <img
          src={heroImg}
          alt="MIAA Inaugural Gala Dinner"
          className="w-full h-full object-cover object-top"
        />
      </div>
    </section>
  )
}
