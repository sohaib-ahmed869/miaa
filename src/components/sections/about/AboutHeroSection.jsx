import { motion } from "framer-motion"
import heroImg from "../../../assets/images/About/about-hero.png"
import floatingOrnament from "../../../assets/images/About/float1.png"

export default function AboutHeroSection() {
  return (
    <section className="relative bg-bg-deep overflow-hidden">
      {/* Dotted divider under navbar — matches the nav overlay style */}
      <div
        className="absolute top-20 md:top-24 left-4 sm:left-6 md:left-10 lg:left-16 right-4 sm:right-6 md:right-10 lg:right-16 h-[2px] pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(215,184,147,0.4) 1.5px, transparent 1.5px)",
          backgroundSize: "8px 3px",
        }}
      />

      {/* Title */}
      <div className="relative z-10 w-full px-6 md:px-10 lg:px-16 pt-28 md:pt-32 pb-10 md:pb-16">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-[2.2rem] md:text-[2.8rem] lg:text-[3.4rem] font-medium text-accent-cream leading-[1.1] tracking-tight max-w-4xl"
        >
          Shaping The Future Of Islamic
          <br />
          Art In Australia
        </motion.h1>
      </div>

      {/* Hero image + floating ornament */}
      <div className="relative">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="w-full"
        >
          <div className="w-full h-[420px] md:h-[420px] lg:h-[520px] overflow-hidden">
            <img
              src={heroImg}
              alt="Audience at MIAA event"
              className="w-full h-full object-cover object-center scale-150 md:scale-100"
            />
          </div>
        </motion.div>

        {/* Floating glossy quatrefoil — right edge, straddling the image bottom */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85, y: 1 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.9, ease: [0.25, 0.1, 0.25, 1] }}
          className="hero-float pointer-events-none absolute z-20 right-[4%] md:right-[6%] lg:right-[8%] -top-12 md:-top-20 lg:-top-28 w-32 md:w-48 lg:w-64"
        >
          <img src={floatingOrnament} alt="" className="w-full h-auto" />
        </motion.div>
      </div>
    </section>
  )
}
