import { motion } from "framer-motion"
import { ArrowDownRight } from "lucide-react"
import { Link } from "react-router-dom"
import { fadeInLeft, fadeInRight } from "../../../lib/motion"
import renderImg from "../../../assets/images/Timeline/timeline-render.png"
import float1 from "../../../assets/images/About/float1.png"

export default function TimelineHeroSection() {
  return (
    <section className="relative z-20 bg-bg-deep">
      {/* Top — Title + intro split */}
      <div className="relative z-10 w-full px-6 md:px-10 lg:px-16 pt-28 md:pt-32 pb-10 md:pb-14">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          {/* Left — Title + Donate CTA */}
          <motion.div {...fadeInLeft}>
            <h1 className="text-3xl md:text-4xl lg:text-[2.6rem] font-medium text-accent-cream tracking-tight leading-tight">
              The Journey Toward
              <br />
              Completion
            </h1>
            <div className="mt-6">
              <a
                href="#architecture"
                className="inline-flex items-center gap-1.5 px-5 py-2.5 bg-secondary-terra text-white text-[11px] font-semibold tracking-[0.15em] uppercase rounded-sm hover:bg-secondary-rust transition-colors"
              >
                Learn More
                <ArrowDownRight size={13} strokeWidth={2.5} />
              </a>
            </div>
          </motion.div>

          {/* Right — Intro text */}
          <motion.div
            {...fadeInRight}
            className="flex flex-col gap-3 text-sm md:text-[15px] text-accent-cream/85 leading-relaxed"
          >
            <p>
              MIAA is a significant community-led cultural project based in the
              heart of Western Sydney. We are excited to share the groundwork
              underpinning the MIAA project as we are fast approaching our
              build.
            </p>
            <p>
              Learn more about the architecture and construction of the museum
              and our project timeline.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Building render — full width, with float1 at the bottom-right cutting point */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.4 }}
        className="relative w-full"
      >
        <div className="w-full h-[280px] md:h-[460px] lg:h-[560px] overflow-hidden">
          <img
            src={renderImg}
            alt="MIAA architectural render"
            className="w-full h-full object-cover object-center"
          />
        </div>

        {/* float1 — sits on the cutting edge (bottom of the render) on the right */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          className="hero-float pointer-events-none absolute z-50 right-4 md:right-10 lg:right-20 bottom-0 translate-y-1/2 w-28 md:w-40 lg:w-48"
        >
          <img src={float1} alt="" className="w-full h-auto drop-shadow-2xl" />
        </motion.div>
      </motion.div>
    </section>
  )
}
