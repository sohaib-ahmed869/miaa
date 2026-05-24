import { motion } from "framer-motion"
import { fadeInUp, staggerContainer, staggerItem } from "../../../lib/motion"
import CTAButton from "../../ui/Button"

import smwf1 from "../../../assets/images/Homepage/SMWF/SMWF-01.png"
import smwf2 from "../../../assets/images/Homepage/SMWF/SMWF-02.png"
import smwf3 from "../../../assets/images/Homepage/SMWF/SMWF-03.png"

function QuatrefoilIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 100 100" fill="#fff">
      <circle cx="50" cy="22" r="25" />
      <circle cx="50" cy="78" r="25" />
      <circle cx="22" cy="50" r="25" />
      <circle cx="78" cy="50" r="25" />
      <rect x="22" y="22" width="56" height="56" rx="4" fill="#fff" />
    </svg>
  )
}

function BannerStrip({ text, count = 30 }) {
  return (
    <div className="flex whitespace-nowrap gap-5">
      {Array.from({ length: count }).map((_, i) => (
        <span
          key={i}
          className="inline-flex items-center gap-2.5 text-white font-aeonik text-base 3xl:text-xl font-normal tracking-wide flex-shrink-0"
        >
          <QuatrefoilIcon />
          {text}
        </span>
      ))}
    </div>
  )
}

export default function SMWFAboutSection() {
  return (
    <section className="relative bg-primary pb-20 md:pb-28 3xl:pb-36 overflow-hidden">
      {/* Diagonal orange "Festival Day" banner */}
      <div
        className="absolute z-10"
        style={{
          top: -10,
          left: -200,
          right: -200,
          transform: "rotate(-4deg)",
          backgroundColor: "#DD613E",
          padding: "14px 0",
        }}
      >
        <BannerStrip text="Festival Day" />
      </div>

      <div className="relative z-20 max-w-[1400px] 3xl:max-w-[3200px] mx-auto px-6 md:px-10 lg:px-16 3xl:px-24 pt-28 md:pt-36 3xl:pt-44">
        {/* Festival Day card */}
        <motion.div
          {...fadeInUp}
          className="bg-accent-cream rounded-xl p-8 md:p-12 3xl:p-16 shadow-2xl"
        >
          <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-8 md:gap-12 items-end mb-10 md:mb-12">
            <div>
              <p className="text-[0.6875rem] 3xl:text-sm tracking-[0.3em] uppercase text-secondary-terra mb-4">
                Festival Day
              </p>
              <h2 className="text-3xl md:text-5xl 3xl:text-[3.75rem] font-medium text-primary tracking-tight leading-tight">
                Save the Date
              </h2>
            </div>
            <CTAButton href="https://www.miaaustralia.org/smwf">
              Download Full Programme
            </CTAButton>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-primary/15 border-y border-primary/15 mb-10 md:mb-12">
            {[
              { label: "Date", value: "18 April 2026" },
              { label: "Time", value: "9:30 AM – 5:30 PM" },
              { label: "Venue", value: "Bryan Brown Theatre & Function Centre" },
            ].map((item) => (
              <div key={item.label} className="px-2 md:px-8 py-6 md:py-7">
                <p className="text-[0.625rem] 3xl:text-xs tracking-[0.3em] uppercase text-primary/55 mb-2">
                  {item.label}
                </p>
                <p className="text-xl md:text-2xl 3xl:text-3xl font-medium text-primary leading-snug">
                  {item.value}
                </p>
              </div>
            ))}
          </div>

          <motion.div
            {...staggerContainer}
            className="grid grid-cols-3 gap-3 md:gap-4"
          >
            {[smwf1, smwf2, smwf3].map((img, i) => (
              <motion.div
                key={i}
                {...staggerItem}
                className="aspect-[4/3] overflow-hidden rounded-lg"
              >
                <img
                  src={img}
                  alt=""
                  className="w-full object-cover"
                  style={{ height: "100%" }}
                />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
