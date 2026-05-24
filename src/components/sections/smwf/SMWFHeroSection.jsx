import { motion } from "framer-motion"
import CTAButton from "../../ui/Button"
import { useCountdown } from "./useCountdown"

import heroImage from "../../../assets/images/Homepage/SMWF/SMWF-01.png"
import smwfLogo from "../../../assets/images/Homepage/SMWF/smwflogo.png"
import bgPattern from "../../../assets/images/Homepage/SMWF/SMWF-BGPATTERN.png"

const FESTIVAL_DATE = "2026-04-18T09:30:00+10:00"

function CountdownCells({ time }) {
  const cells = [
    { value: time.days, label: "Days" },
    { value: time.hours, label: "Hours" },
    { value: time.minutes, label: "Minutes" },
    { value: time.seconds, label: "Seconds" },
  ]
  return (
    <div className="flex gap-3 md:gap-4 3xl:gap-6">
      {cells.map((c) => (
        <div
          key={c.label}
          className="bg-secondary-terra text-white rounded-md px-4 py-3 md:px-5 md:py-4 3xl:px-7 3xl:py-6 text-center min-w-[4.5rem] md:min-w-[5.5rem] 3xl:min-w-[7.5rem]"
        >
          <p className="text-2xl md:text-3xl 3xl:text-5xl font-semibold tabular-nums leading-none">
            {String(c.value).padStart(2, "0")}
          </p>
          <p className="text-[0.5625rem] 3xl:text-xs tracking-[0.25em] uppercase text-white/85 mt-1.5">
            {c.label}
          </p>
        </div>
      ))}
    </div>
  )
}

export default function SMWFHeroSection() {
  const time = useCountdown(FESTIVAL_DATE)
  return (
    <section className="relative bg-primary overflow-hidden">
      <div className="absolute inset-0 opacity-15 pointer-events-none">
        <img
          src={bgPattern}
          alt=""
          className="w-full object-cover"
          style={{ height: "100%" }}
        />
      </div>

      <div className="relative z-10 max-w-[1400px] 3xl:max-w-[3200px] mx-auto px-6 md:px-10 lg:px-16 3xl:px-24 pt-36 md:pt-40 3xl:pt-48 pb-24 md:pb-32 3xl:pb-40">
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-10 lg:gap-16 items-center">
          {/* Left — copy */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <img
              src={smwfLogo}
              alt="Sydney Muslim Writers Festival"
              className="h-12 md:h-14 3xl:h-20 w-auto mb-8"
            />
            <h1 className="text-4xl md:text-6xl lg:text-[4.25rem] 3xl:text-[7rem] font-medium text-accent-cream tracking-tight leading-[1.04]">
              Celebrating<br />the Power<br />
              <span className="text-accent-wheat">of Muslim Voices</span>
            </h1>
            <p className="mt-7 max-w-xl text-base md:text-lg 3xl:text-2xl text-accent-cream/85 leading-relaxed">
              Experience a festival that honours diverse Muslim writers and the
              stories that shape who we are — coming April 2026.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-6">
              <CTAButton href="https://www.miaaustralia.org/smwf">
                Get Tickets
              </CTAButton>
              <p className="text-[0.6875rem] 3xl:text-sm tracking-[0.3em] uppercase text-accent-cream/75">
                18 April 2026
              </p>
            </div>
          </motion.div>

          {/* Right — circular portrait */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative w-[20rem] md:w-[26rem] lg:w-[30rem] 3xl:w-[44rem] aspect-square">
              <div
                className="absolute inset-0 rounded-full overflow-hidden border-[6px] 3xl:border-[10px] border-accent-cream/15"
              >
                <img
                  src={heroImage}
                  alt="Festival audience"
                  className="w-full object-cover"
                  style={{ height: "100%" }}
                />
              </div>
              {/* Decorative ring */}
              <div className="absolute -inset-3 rounded-full border border-accent-cream/15 pointer-events-none" />
            </div>
          </motion.div>
        </div>

        {/* Countdown row */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35 }}
          className="mt-16 md:mt-20 flex flex-col md:flex-row md:items-end md:justify-between gap-6"
        >
          <div>
            <p className="text-[0.6875rem] 3xl:text-sm tracking-[0.3em] uppercase text-accent-wheat mb-4">
              Counting Down to Festival Day
            </p>
            <CountdownCells time={time} />
          </div>
          <p className="text-sm 3xl:text-base text-accent-cream/70 italic max-w-sm">
            April 18, 2026 — a day for writers, readers, and dreamers to gather.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
